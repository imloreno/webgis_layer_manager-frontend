import { GET_GEOJSON_LAYER, ID, LAYERS_URL } from "@utils/constants";
import api from "./config";
// import { IGeoJSONBase } from "@models/form";

// Api call to fetch layers
export const fetchLayers = () => {
  return api.get(LAYERS_URL);
};

export const createLayer = (data: FormData) => {
  return api.post(LAYERS_URL, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Api to call geojson data
export const fetchGeoJson = (layerId: string) => {
  return api.get(GET_GEOJSON_LAYER.replace(ID, layerId));
};
