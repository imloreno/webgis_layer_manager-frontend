import { MapContainer as Map, TileLayer } from "react-leaflet";
import { position } from "@utils/constants";
import { getTheme } from "@utils/theme";
import useSettings from "@store/useSettings";
import { FeatureList } from "@molecules";

const MapContainer = () => {
  const { themeSelected } = useSettings();
  const mapTheme = getTheme(themeSelected);

  return (
    <Map
      center={position}
      zoom={7}
      scrollWheelZoom={true}
      style={{ height: "100vh" }}
      preferCanvas={true}
      attributionControl={false}
    >
      <FeatureList />
      <TileLayer {...mapTheme.mapProps} />
    </Map>
  );
};

export default MapContainer;
