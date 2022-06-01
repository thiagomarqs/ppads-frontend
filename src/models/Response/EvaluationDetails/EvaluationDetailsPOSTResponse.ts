import { EvaluationDetailsPOSTRequest } from "../../Request/EvaluationDetails/EvaluationDetailsPOSTRequest";

export interface EvaluationDetailsPOSTResponse {
  "success": true,
  "data": EvaluationDetailsPOSTRequest | null,
  "errors": null,
  "validationsErrors": null
}