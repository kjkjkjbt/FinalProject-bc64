import { https } from "./config";

export const commentService = {
  getCommentLocation: (id) =>
    https.get(`/api/binh-luan/lay-binh-luan-theo-phong/${id}`),
};
