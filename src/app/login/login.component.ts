import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  @ViewChild("loginForm", { static: true }) loginForm: NgForm;

  login() {
    console.log(this.loginForm.value);
    this.loginForm.reset();
  }
}
