import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { UsuarioService } from './usuario.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, RegistroComponent, LoginComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UsuarioService]
})
export class AppModule { }
