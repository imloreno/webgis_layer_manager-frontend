import { getTheme } from "@utils/theme";
import AddLayerForm from "../molecules/AddLayerForm"
import useTheme from "@store/useTheme";
import { MapContainer, TileLayer } from "react-leaflet";
import { position } from "@utils/constants";

const BaseLayout = () => {
   const { themeSelected } = useTheme();

   const mapTheme = getTheme(themeSelected);
   return (
      <div className="grid grid-cols-4 h-screen">
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
         <div className="bg-[#212226] border-[#6b6f7f] border-l py-5 px-8">
            <AddLayerForm />
         </div>
      </div>
   )
}

export default BaseLayout