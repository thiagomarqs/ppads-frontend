import { User } from "../../../entities/User";

export interface UserGETResponse {
  "success": boolean,
  "data": User[],
  "errors": null,
  "validationsErrors": null
}