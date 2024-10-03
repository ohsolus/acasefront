import http from "../http-common.ts";
import IUserLoginData from "../types/Login.ts";

/*
const getAll = () => {
  return http.get<Array<ITutorialData>>("/tutorials");
};

const get = (id: any) => {
  return http.get<ITutorialData>(`/tutorials/${id}`);
};
*/

const create = (data: IUserLoginData) => {
  return http.post<IUserLoginData>("/login", data);
};

/*
const update = (id: any, data: ITutorialData) => {
  return http.put<any>(`/tutorials/${id}`, data);
};

const remove = (id: any) => {
  return http.delete<any>(`/tutorials/${id}`);
};

const removeAll = () => {
  return http.delete<any>(`/tutorials`);
};

const findByTitle = (title: string) => {
  return http.get<Array<ITutorialData>>(`/tutorials?title=${title}`);
};
*/

const LoginService = {
  /*
  getAll,
  get,
  */
  create,
  /*
  update,
  remove,
  removeAll,
  findByTitle,
  */
};

export default LoginService;
