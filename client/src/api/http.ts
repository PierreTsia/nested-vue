import axios, { AxiosInstance } from "axios";

//import store from "@/data/state";

class Http {
  private service: AxiosInstance;
  private readonly base_url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://some-heroku-url.herokuapp.com";
  constructor() {
    this.service = axios.create({
      baseURL: this.base_url,

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
