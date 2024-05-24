import { Component } from '@angular/core';
import { ClienteService } from '../../service/cliente.service';
import { Cliente } from '../../page/componet/model/cliente';
@Component({
  selector: 'app-componet',
  standalone: true,
  imports: [],
  templateUrl: './componet.component.html',
  styleUrl: './componet.component.css'
})
export class ComponetComponent {
  clientes: Cliente[] = []
  constructor(service: ClienteService) {
    this.clientes = service.getClientes();

    let cliente = new Cliente();
    console.log(cliente);
  }
}
