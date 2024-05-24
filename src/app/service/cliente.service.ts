import { Injectable } from '@angular/core';
import { Cliente } from '../page/componet/model/cliente';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor() { }
  getClientes(): Cliente[] {
    return [
      {
        apellido:"Rabbia",
        cuit: "cuit",
        id: 123,
        islive: true,
        nombre:"Facundo",
        edad: 34
      },
      {
        apellido:"Apellido",
        cuit: "cuit",
        id: 123,
        islive: true,
        nombre:"nombre",
        edad: 34
      },
    ]
  }

}