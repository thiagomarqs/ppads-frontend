import axios, { AxiosPromise } from "axios"
import { BrowserGamePostRequest } from "../models/Request/BrowserGame/BrowserGamePOSTRequest"
import { BrowserGamePUTRequest } from "../models/Request/BrowserGame/BrowserGamePUTRequest"
import { BrowserGameDELETEResponse } from "../models/Response/BrowserGame/BrowserGameDELETEResponse"
import { BrowserGameGETAllResponse } from "../models/Response/BrowserGame/BrowserGameGETAllResponse"
import { BrowserGameGETResponse } from "../models/Response/BrowserGame/BrowserGameGETResponse"
import { BrowserGamePUTResponse } from "../models/Response/BrowserGame/BrowserGamePUTResponse"
import { UserGETResponse } from "../models/Response/Reports/UserGETResponse"
import { endpoint, reportsEndpoint } from "./config"

export class ReportsService {

  headers = {
    Authorization: sessionStorage.getItem('token'),
  }
  
  getTop5GoodBrowserGames(token?: string | null): AxiosPromise<BrowserGameGETAllResponse>{
    if(token) {
      this.headers.Authorization = token;
    }
    return axios.get(`${reportsEndpoint}/good-browser-games-top-5/2022-04-28/2022-12-31`, {
      //@ts-ignore
      headers: this.headers
    });
  };

  getTop5UserThatEvaluatedTheMost(token?: string | null): AxiosPromise<UserGETResponse>{
    if(token) {
      this.headers.Authorization = token;
    }
    return axios.get(`${reportsEndpoint}/user-evaluations-top-5/2022-04-28/2022-12-31`, {
      //@ts-ignore
      headers: this.headers
    });
  }


}