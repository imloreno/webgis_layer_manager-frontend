import { LAYERS_URL } from "@utils/constants";
import api from "./config";
import { IGeoJSONBase } from "@models/form";

// Api call to fetch layers
export const fetchLayers = () => {
  return api.get(LAYERS_URL);
};

export const createLayer = (data: IGeoJSONBase) => {
  return api.post(LAYERS_URL, data);
};
