import axios from "axios"
import { BrowserGame } from "../entities/BrowserGame"
import { BrowserGamePostRequest } from "../models/BrowserGamePOSTRequest"
import { BrowserGamePUTRequest } from "../models/BrowserGamePUTRequest"
import { endpoint } from "./config"

export class BrowserGameService {

  headers = {
    Authorization: sessionStorage.getItem('token'),
  }

  insertBrowserGames(browserGame: BrowserGamePostRequest){
    return axios.post(endpoint, browserGame, {})
  };
  
  getBrowserGames(){
    return axios.get(endpoint, {
      //@ts-ignore
      headers: this.headers
    });
  };

  getBrowserGame(id: number){
    return axios.get(`${endpoint}/${id}`, {
      //@ts-ignore
      headers: this.headers
    })
  };

  updateBrowserGame(id: any, browserGame: BrowserGamePUTRequest) {
    return axios.put(`${endpoint}/${id}`, browserGame, {
      //@ts-ignore
      headers: this.headers
    })
  }

  deleteBrowserGame(id: number){
    return axios.delete(`${endpoint}/${id}`, {
      //@ts-ignore
      headers: this.headers
    })
  };
}