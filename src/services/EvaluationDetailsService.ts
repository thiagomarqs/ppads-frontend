import axios, { AxiosPromise } from "axios";
import { EvaluationDetailsPOSTRequest } from "../models/Request/EvaluationDetails/EvaluationDetailsPOSTRequest";
import { EvaluationDetailsLikesGETResponse } from "../models/Response/EvaluationDetails/EvaluationDetailsLikesGETResponse";
import { EvaluationDetailsPOSTResponse } from "../models/Response/EvaluationDetails/EvaluationDetailsPOSTResponse";
import { evaluationDetailsEndpoint } from "./config";

export class EvaluationDetailsService {

  headers = {
    Authorization: sessionStorage.getItem('token'),
  }

  create(evaluation: EvaluationDetailsPOSTRequest): AxiosPromise<EvaluationDetailsPOSTResponse> {
    this.headers.Authorization = sessionStorage.getItem('token');
    //@ts-ignore
    return axios.post(`${evaluationDetailsEndpoint}`, evaluation, { headers: this.headers });
  }

  getTotalOfLikesOfAnEvaluation(evaluationId: number): AxiosPromise<EvaluationDetailsLikesGETResponse> {
    this.headers.Authorization = sessionStorage.getItem('token');
    //@ts-ignore
    return axios.get(`${evaluationDetailsEndpoint}/evaluation-total/${evaluationId}`, { headers: this.headers });
  }

  hasUserLikedThisEvaluationAlready(evaluationId: number, userId: number): AxiosPromise<EvaluationDetailsPOSTResponse> {
    this.headers.Authorization = sessionStorage.getItem('token');
    //@ts-ignore
    return axios.get(`${evaluationDetailsEndpoint}/evaluation/user/${evaluationId}/${userId}`, { headers: this.headers });
  }
}