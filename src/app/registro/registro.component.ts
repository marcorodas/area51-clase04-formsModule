import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"]
})
export class RegistroComponent {
  nombre: string = "test";
  @ViewChild("formulario", { static: true }) formularioRegistro: NgForm;

  registrar() {
    if (this.formularioRegistro.valid) {
      console.log(this.formularioRegistro.value);
      this.formularioRegistro.reset({
        nombre: "Marco"
      });
    }
  }

  cargarTodo() {
    this.formularioRegistro.setValue({
      nombre: "Marcela",
      correo: "marcela@gmail.com",
      contrasena: "1234"
    });
  }

  cargarParcial() {
    this.formularioRegistro.form.patchValue({
      correo: "marcela@gmail.com",
      contrasena: "1234"
    });
  }
}
