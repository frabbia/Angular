
export class Cliente {
  id: number = 0;
  nombre: string | undefined
  apellido: string | undefined
  edad?: number
  cuit: string | undefined
  islive: boolean = false

  constructor() {
    this.nombre = "";
  }
//  fullName() {
//     return this.nombre + " " + this.apellido;

//   }
//   edadToString() {
//     return this.edad + " anios";
//   }
}