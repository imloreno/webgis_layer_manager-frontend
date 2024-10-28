import { LatLngExpression } from "leaflet";

// Map settings
export const position: LatLngExpression = [51.8890863499512, 9.73459975132488];

// Base API url's
export const ID = "id:";
export const SERVICE_URL = import.meta.env.VITE_SERVICE_URL;

// Base API's
export const API_URL = "/api/v1";

// Layers
export const LAYERS_URL = API_URL + "/geojson/layers/";
export const GET_GEOJSON_LAYER = `${API_URL}/geojson/layers/${ID}/geojson/"`;
