import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  @Input() titulo;

  @Output()
  evento = new EventEmitter<string>();

  noticias = []

  emitirEvento(){
    this.evento.emit("hola amigo")
  }
  
  constructor(public serv:ClientesService) { }

  ngOnInit(): void {
  }

  datosServicio():void{
    this.noticias = this.serv.todos
    console.log(this.noticias)
    this.evento.emit("Creada la lista de noticias de la api.")
  }

}
