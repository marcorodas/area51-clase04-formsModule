import { Component } from "@angular/core";
import { RecetaService } from "../../receta.service";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"]
})
export class FormularioComponent {
  constructor(private recetaService: RecetaService) {}

  onEnterTitulo(descripcionElem) {
    descripcionElem.focus()
  }

  agregar(recetaForm) {
    this.recetaService.recipeList.unshift(recetaForm.value);
    recetaForm.reset();
  }
}
