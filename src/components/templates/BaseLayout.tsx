import { MapContainer, TileLayer } from "react-leaflet";
import { getTheme } from "@utils/theme";
import useSettings from "@store/useSettings";
import { position } from "@utils/constants";
import { Menu } from "@organism";

const BaseLayout = () => {
  const { themeSelected } = useSettings();

  const mapTheme = getTheme(themeSelected);
  return (
    <div className="flex h-screen text-lg">
      <div className="w-full">
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
      <div className="overflow-hidden overflow-y-auto scroll-styled w-[30rem]">
        <Menu />
      </div>
    </div>
  );
};

export default BaseLayout;
