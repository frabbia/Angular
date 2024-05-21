
export class ClienteService {
 
nombre:string | undefined
apellido:string | undefined
edad?:number  | undefined
cuit:string | undefined
islive : boolean | undefined

constructor() {
  this.nombre = "";
}
fullName() {
  return this.nombre + " " + this.apellido;
  
}
edadToString() {
  return this.edad + " anios";
}
}