import { Component, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private usuarioService: UsuarioService){}
  @Output() logoutEmitter = new EventEmitter()
  
  logout(){
    this.logoutEmitter.emit();
  }
}