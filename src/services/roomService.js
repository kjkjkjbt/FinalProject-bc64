import { https } from "./config";

export const roomService = {
  getRoomList: () => https.get("/api/phong-thue"),
  getRoomOfLocation: (id) =>
    https.get(`/api/phong-thue/lay-phong-theo-vi-tri?maViTri=${id}`),
  getRoomDetail: (id) => https.get(`/api/phong-thue/${id}`),
};
