import axios, { AxiosInstance } from "axios";

//import store from "@/data/state";

class Http {
  private service: AxiosInstance;
  constructor() {
    this.service = axios.create({
      baseURL: `http://localhost:3000/`,

      headers: {
        Authorization: `Bearer hard coded temp token`,
        "Content-Type": "multipart/form-data",
      },
    });
  }

  redirectTo = (document: { location: string }, path: string) => {
    document.location = path;
  };

  get(path: string) {
    return this.service.get(path);
  }

  patch(
    path: string,
    payload: unknown,
    callback: (...args: unknown[]) => void
  ) {
    return this.service
      .request({
        method: "PATCH",
        url: path,
        responseType: "json",
        data: payload,
      })
      .then((response) => callback(response.status, response.data));
  }

  post(path: string, payload: unknown) {
    return this.service.request({
      method: "POST",
      url: path,
      responseType: "json",
      data: payload,
    });
  }
}

export default new Http();
