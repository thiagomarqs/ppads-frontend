import axios, { AxiosPromise } from "axios";
import { EvaluationPOSTRequest } from "../models/Request/Evaluation/EvaluationPOSTRequest";
import { EvaluationPUTRequest } from "../models/Request/Evaluation/EvaluationPUTRequest";
import { EvaluationGETResponse } from "../models/Response/Evaluation/EvaluationGETResponse";
import { EvaluationPOSTResponse } from "../models/Response/Evaluation/EvaluationPOSTResponse";
import { EvaluationTop5GETResponse } from "../models/Response/Evaluation/EvaluationTop5GETResponse";
import { browserGameReviewsEndpoint } from "./config";

export class EvaluationService {

  headers = {
    Authorization: sessionStorage.getItem('token'),
  }

  getBrowserGameReviews(browserGameId: number): AxiosPromise<EvaluationGETResponse> {
    this.headers.Authorization = sessionStorage.getItem('token');
    //@ts-ignore
    return axios.get(`${browserGameReviewsEndpoint}/good-browser-game/${browserGameId}`, { headers: this.headers });
  }

  top5(): AxiosPromise<EvaluationTop5GETResponse> {
    this.headers.Authorization = sessionStorage.getItem('token');
    //@ts-ignore
    return axios.get(`${browserGameReviewsEndpoint}/top5`, { headers: this.headers });
  }

  getByUser(userId: number): AxiosPromise<EvaluationGETResponse> {
    this.headers.Authorization = sessionStorage.getItem('token');
    //@ts-ignore
    return axios.get(`${browserGameReviewsEndpoint}/user/${id}`, { headers: this.headers });
  }

  getOtherMembers(userId: number): AxiosPromise<EvaluationGETResponse> {
    this.headers.Authorization = sessionStorage.getItem('token');
    //@ts-ignore
    return axios.get(`${browserGameReviewsEndpoint}/others-members/${id}`, { headers: this.headers });
  }

  create(evaluation: EvaluationPOSTRequest): AxiosPromise<EvaluationPOSTResponse> {
    this.headers.Authorization = sessionStorage.getItem('token');
    //@ts-ignore
    return axios.post(`${browserGameReviewsEndpoint}`, evaluation, { headers: this.headers });
  }

  update(evaluation: EvaluationPUTRequest) {
    this.headers.Authorization = sessionStorage.getItem('token');
    //@ts-ignore
    return axios.put(`${browserGameReviewsEndpoint}`, evaluation, { headers: this.headers });
  }
}