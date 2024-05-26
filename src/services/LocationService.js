import { https } from "./config";

export const locationService = {
  getLocate: () => https.get("/api/vi-tri"),
  getLocationDetail: (id) => https.get(`/api/vi-tri/${id}`),
};
