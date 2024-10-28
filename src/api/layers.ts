import { LAYERS_URL } from "@utils/constants";
import api from "./config";

// Api call to fetch layers
export const fetchLayers = () => {
  return api.get(LAYERS_URL);
};
