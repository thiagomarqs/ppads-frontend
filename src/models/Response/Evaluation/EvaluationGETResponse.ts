import { Evaluation } from "../../../entities/Evaluation"

export interface EvaluationGETResponse {
  "success": boolean,
  "data": Evaluation[]
  "errors": null,
  "validationsErrors": null
}