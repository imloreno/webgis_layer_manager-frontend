import { GeoJsonTypes } from "@models/layers";
import { FeatureGroup, Marker, Polygon, Polyline } from "react-leaflet";

const COMPONENT_LIST = {
  [GeoJsonTypes.POINT]: Marker,
  [GeoJsonTypes.LINE_STRING]: Polyline,
  [GeoJsonTypes.POLYGON]: Polygon,
};

const COMPONENTS_COLLECTION = {
  [GeoJsonTypes.MULTI_POINT]: Marker,
  [GeoJsonTypes.MULTI_LINE_STRING]: Polyline,
  [GeoJsonTypes.MULTI_POLYGON]: Polygon,
  [GeoJsonTypes.FEATURE]: FeatureGroup,
  [GeoJsonTypes.FEATURE_COLLECTION]: FeatureGroup,
};

const index = () => {
  return <div>index</div>;
};

export default index;
