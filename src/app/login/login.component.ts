import { Component, ViewChild, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UsuarioService } from "./../usuario.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  @ViewChild("loginForm", { static: true }) loginForm: NgForm;
  @Output() loginEmitter = new EventEmitter();
  showAccessError: boolean = false;

  constructor(private usuarioService: UsuarioService) {}

  login() {
    let logginSuccess = this.usuarioService.loginSuccess(this.loginForm.value);
    if (logginSuccess) {
      this.loginEmitter.emit();
      return; 
    }
    this.showAccessError = true;
  }
}
