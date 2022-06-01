import axios, { AxiosPromise } from "axios"
import { BrowserGamePostRequest } from "../models/Request/BrowserGame/BrowserGamePOSTRequest"
import { BrowserGamePUTRequest } from "../models/Request/BrowserGame/BrowserGamePUTRequest"
import { BrowserGameDELETEResponse } from "../models/Response/BrowserGame/BrowserGameDELETEResponse"
import { BrowserGameGETAllResponse } from "../models/Response/BrowserGame/BrowserGameGETAllResponse"
import { BrowserGameGETResponse } from "../models/Response/BrowserGame/BrowserGameGETResponse"
import { BrowserGamePUTResponse } from "../models/Response/BrowserGame/BrowserGamePUTResponse"
import { endpoint } from "./config"

export class BrowserGameService {

  headers = {
    Authorization: sessionStorage.getItem('token'),
  }

  insertBrowserGames(browserGame: BrowserGamePostRequest){
    let token = sessionStorage.getItem('token');
    this.headers.Authorization = token;
    //@ts-ignore
    return axios.post(endpoint, browserGame, {headers: this.headers})
  };
  
  getBrowserGames(): AxiosPromise<BrowserGameGETAllResponse>{
    let token = sessionStorage.getItem('token');
    this.headers.Authorization = token;
    return axios.get(endpoint, {
      //@ts-ignore
      headers: this.headers
    });
  };

  getBrowserGame(id: number): AxiosPromise<BrowserGameGETResponse>{
    let token = sessionStorage.getItem('token');
    this.headers.Authorization = token;
    return axios.get(`${endpoint}/${id}`, {
      //@ts-ignore
      headers: this.headers
    })
  };

  updateBrowserGame(id: number, browserGame: BrowserGamePUTRequest): AxiosPromise<BrowserGamePUTResponse> {
    let token = sessionStorage.getItem('token');
    this.headers.Authorization = token;
    return axios.put(`${endpoint}/${id}`, browserGame, {
      //@ts-ignore
      headers: this.headers
    })
  }

  deleteBrowserGame(id: number): AxiosPromise<BrowserGameDELETEResponse>{
    let token = sessionStorage.getItem('token');
    this.headers.Authorization = token;
    return axios.delete(`${endpoint}/${id}`, {
      //@ts-ignore
      headers: this.headers
    })
  };

  getByCategoryId(id: number): AxiosPromise<BrowserGameGETAllResponse> {
    let token = sessionStorage.getItem('token');
    this.headers.Authorization = token;
    return axios.get(`${endpoint}/categoria/${id}`, {
      //@ts-ignore
      headers: this.headers
    });
  }

  getByCategoryName(name: string): AxiosPromise<BrowserGameGETAllResponse> {
    let token = sessionStorage.getItem('token');
    this.headers.Authorization = token;
    return axios.get(`${endpoint}/filtro-categoria?nomeSearch=${name}`, {
      //@ts-ignore
      headers: this.headers
    });
  }

  getByGameName(name: string): AxiosPromise<BrowserGameGETResponse> {
    let token = sessionStorage.getItem('token');
    this.headers.Authorization = token;
    return axios.get(`${endpoint}/filtro-nome?nomeSearch=${name}`, {
      //@ts-ignore
      headers: this.headers
    });
  }
}