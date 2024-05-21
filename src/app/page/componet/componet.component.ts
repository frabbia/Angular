import { Component } from '@angular/core';
import { ClienteService } from '../../service/cliente.service';

@Component({
  selector: 'app-componet',
  standalone: true,
  imports: [],
  templateUrl: './componet.component.html',
  styleUrl: './componet.component.css'
})
export class ComponetComponent { 
  clientes:any[]=[]
constructor(service:ClienteService) {
  this.clientes=service.getClientes();
  

}
}
