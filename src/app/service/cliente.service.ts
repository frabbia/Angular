import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor() { }
  getClientes():any {
    return [
      {id:1}
    ]
  }

}