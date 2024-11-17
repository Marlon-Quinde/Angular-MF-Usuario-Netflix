import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Component, Input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UsuarioI } from '../../interfaces/usuario.interface';
import { UsersService } from '../../services/users.service';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../../../../shared/services/shared.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrl: './form-users.component.scss',
})
export class FormUsersComponent {
  @Input() usuario?: UsuarioI;

  public usuarioForm: FormGroup;
  public hidePassword = signal(true);;

  /**
   *
   */
  constructor(
    private _fb: FormBuilder,
    private _usersService: UsersService,
    private _toastr: ToastrService,
    private _sharedService: SharedService
  ) {
    this.usuarioForm = this.createUsuarioForm();
    this.usuarioForm.patchValue(this.usuarioForm);
  }

  createUsuarioForm() {
    return this._fb.group({
      Id: [],
      Nombres: ['', [Validators.required]],
      Apellidos: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      Nickname: ['', [Validators.required]],
      Password: ['', [Validators.required]],
      RepeatPassword: ['', [Validators.required]],
    });
  }

  createOrEditUser() {
    if (this.usuarioForm.invalid) {
      this._toastr.error('Debe llenar todos los campos' ,'Formulario invalido')
      return
    };

    const usuario: UsuarioI = this.usuarioForm.value;
    if(usuario.Password !== usuario.RepeatPassword) {
      this._toastr.error('Las contraseñas no coinciden')
      return
    }
    if (this.usuario) {
      this._usersService.editUser(usuario.Id!, usuario).subscribe({
        next: (res) => {},
        error: (err) => {},
      });
    } else {
      this._usersService.createUser(usuario).subscribe({
        next: (res) => {
          this._toastr.success(res.message, res.code.toString())
          this.usuarioForm.reset();
        },
        error: (err: HttpErrorResponse) => {
          this._toastr.error(err.error.message, err.error.code.toString())
        },
      });
    }
  }

  getErrors(nameForUser: string, nameControl: string){
    return this._sharedService.getErrors(nameForUser, nameControl, this.usuarioForm);
  }

  clickEvent(event: MouseEvent) {
    this.hidePassword.set(!this.hidePassword());
    event.stopPropagation();
  }
}
