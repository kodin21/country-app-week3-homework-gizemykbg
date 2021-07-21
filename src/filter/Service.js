import axios from "axios";

const http = axios.create({
  baseURL: "https://restcountries.eu/rest/v2/all",
  responseType: "json",
});

const list = () => http.get("/");

const info = (name) => http.get(`/name/${name}`);

const search = (search) => http.get("/search", { params: { q: search } });

const region = (region) => http.get(`/region/${region}`);

const chart = (chart) => http.get(`/chart/${chart}`);

export default {
  list,
  search,
  region,
  info,
  chart,
};
