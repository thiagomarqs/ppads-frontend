import { AxiosPromise } from "axios";
import { User } from "../entities/User";
import { LoginPOSTRequest } from "../models/Request/Auth/LoginPOSTRequest";
import { RegisterPOSTRequest } from "../models/Request/Auth/RegisterPOSTRequest";
import { UserPUTRequest } from "../models/Request/User/UserPUTRequest";
import { LoginRegisterPOSTResponse } from "../models/Response/Auth/LoginRegisterPOSTResponse";
import { api } from "./axios";
import { registerEndpoint, loginEndpoint, userEndpoint, loggedInUserEndpoint } from "./config";

export class AuthService {

  headers = {
    Authorization: sessionStorage.getItem('token'),
  }

  register(userData: RegisterPOSTRequest): AxiosPromise<LoginRegisterPOSTResponse> {
    return api.post(registerEndpoint, userData);
  }

  login(userData: LoginPOSTRequest): AxiosPromise<LoginRegisterPOSTResponse> {
    return api.post(loginEndpoint, userData);
  }

  getUserById(id: number): AxiosPromise<User> {
    //@ts-ignore
    return api.get(`${userEndpoint}/${id}`, { headers: this.headers })
  }

  getLoggedInUser(token: string): AxiosPromise<User> {

    let headers;
    token ? headers = { headers: { Authorization: token } } : headers = { headers: this.headers }

    //@ts-ignore
    return api.get(`${loggedInUserEndpoint}/`, headers)
  }

  updateUser(user: UserPUTRequest): AxiosPromise<any> {
    //@ts-ignore
    return api.put(`${userEndpoint}`, user, { headers: this.headers })
  }
}