import { MapContainer, TileLayer } from "react-leaflet";
import { getTheme } from "@utils/theme";
import useTheme from "@store/useTheme";
import { position } from "@utils/constants";
import { Menu } from "@organism";

const BaseLayout = () => {
  const { themeSelected } = useTheme();

  const mapTheme = getTheme(themeSelected);
  return (
    <div className="grid grid-cols-4 h-screen text-lg">
      <div className="col-span-3">
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={true}
          style={{ height: "100vh" }}
          preferCanvas={true}
          attributionControl={false}
        >
          <TileLayer {...mapTheme.mapProps} />
        </MapContainer>
      </div>
      <div className="overflow-hidden">
        <Menu />
      </div>
    </div>
  );
};

export default BaseLayout;
