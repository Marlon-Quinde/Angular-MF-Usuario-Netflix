import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioI } from '../interfaces/usuario.interface';
import { environments } from '../../../../env/environments';
import { ResponseI } from '../../../shared/interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _baseUrl: string = environments.baseUrl
  constructor(private _http: HttpClient) { }

  createUser(payload: UsuarioI){
    const url: string  = `${this._baseUrl}/Usuarios`
    return this._http.post<ResponseI<string>>(url, payload)
  }

  editUser(id: number ,payload: UsuarioI){
    const url: string  = `${this._baseUrl}/${id}`
    return this._http.put(url, payload)
  }

}
