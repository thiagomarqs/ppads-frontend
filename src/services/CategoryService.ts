import axios, { AxiosPromise } from "axios"
import { CategoryPUTRequest } from "../models/Request/Category/CategoryPUTRequest";
import { AllCategoriesGETResponse } from "../models/Response/Category/AllCategoriesGETResponse";
import { CategoryPUTResponse } from "../models/Response/Category/CategoryPUTResponse";
import { CategoryDELETEResponse } from "../models/Response/Category/CategoryDELETEResponse";
import { categoryEndpoint } from "./config"
import { CategoryPOSTResponse } from "../models/Response/Category/CategoryPOSTResponse";
import { CategoryPOSTRequest } from "../models/Request/Category/CategoryPOSTRequest";
import { CategoryGETResponse } from "../models/Response/Category/CategoryGETResponse";

export class CategoryService {

  headers = {
    Authorization: sessionStorage.getItem('token'),
  }

  create(category: CategoryPOSTRequest): AxiosPromise<CategoryPOSTResponse> {
    this.headers.Authorization = sessionStorage.getItem('token');
    return axios.post(categoryEndpoint, category, {
      //@ts-ignore
      headers: this.headers
    });
  }

  getCategoryById(id: number): AxiosPromise<CategoryGETResponse> {
    this.headers.Authorization = sessionStorage.getItem('token');
    return axios.get(`${categoryEndpoint}/${id}`, {
      //@ts-ignore
      headers: this.headers
    });
  };

  getAllCategories(token?: string | null): AxiosPromise<AllCategoriesGETResponse> {
    this.headers.Authorization = sessionStorage.getItem('token');
    return axios.get(categoryEndpoint, {
      //@ts-ignore
      headers: token || this.headers
    });
  };

  update(category: CategoryPUTRequest): AxiosPromise<CategoryPUTResponse> {
    this.headers.Authorization = sessionStorage.getItem('token');
    return axios.put(categoryEndpoint, category, {
      //@ts-ignore
      headers: this.headers
    })
  }

  delete(id: number): AxiosPromise<CategoryDELETEResponse> {
    this.headers.Authorization = sessionStorage.getItem('token');
    return axios.delete(`${categoryEndpoint}/${id}`, {
      //@ts-ignore
      headers: this.headers
    })
  }

}