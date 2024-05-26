import { https } from "./config";

export const AdminServ = {
  getListUser: () => {
    return https.get(`/api/users`);
  },
  DeleteUser: (taiKhoan) => {
    return https.delete(`/api/users?id=${taiKhoan}`);
  },
  UpdateUser: (taiKhoan, data) => {
    return https.put(`/api/users/${taiKhoan}`, data);
  },
  getRoomList: () => {
    return https.get("/api/dat-phong");
  },
  deleteRoom: (id) => {
    return https.delete(`/api/dat-phong/${id}`);
  },
  updateRoom: (taiKhoan, data) => {
    return https.put(`/api/dat-phong/${taiKhoan}`, data);
  },
  getInfoRoom: () => {
    return https.get(`/api/phong-thue`);
  },
  deletleInfoRoom: (id) => {
    return https.delete(`/api/phong-thue/${id}`);
  },
  updateInfoRoom: (id, data) => {
    return https.put(`/api/phong-thue/${id}`, data);
  },
  getViTri: () => {
    return https.get(`/api/vi-tri`);
  },
};
