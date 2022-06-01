import { Categoria } from "../../../entities/Categoria";
import { CategoryGETResponse } from "./CategoryGETResponse";

export interface AllCategoriesGETResponse {
  "success": boolean
  "data": Categoria[];
  "errors": null,
  "validationsErrors": null
}