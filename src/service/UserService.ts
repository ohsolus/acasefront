import http from "../http-common.ts";
import IUserRegisterData from "../types/User.ts";

/*
const getAll = () => {
  return http.get<Array<ITutorialData>>("/tutorials");
};

const get = (id: any) => {
  return http.get<ITutorialData>(`/tutorials/${id}`);
};
*/

const create = (data: IUserRegisterData) => {
  return http.post<IUserRegisterData>("/register", data);
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

const UserService = {
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

export default UserService;
