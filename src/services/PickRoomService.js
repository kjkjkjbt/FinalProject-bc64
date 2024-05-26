import { https } from "./config";

export const pickRoomService = {
  postRoomOrder: (data) => https.post("/api/dat-phong", data),
};
