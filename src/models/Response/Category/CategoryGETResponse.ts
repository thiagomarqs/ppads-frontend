import { Categoria } from "../../../entities/Categoria"

export interface CategoryGETResponse {
  "success": boolean,
  "data": Categoria;
  "errors": null,
  "validationsErrors": null
}