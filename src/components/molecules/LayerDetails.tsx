import { get, isEmpty } from "lodash";
import { SublayerItem, Subtitle } from "@atoms";
import { GeoJson } from "@models/layers";
import useLayersStore from "@store/useLayersStore";
import { Feature } from "geojson";

const LayerDetails = () => {
  const { geoJsonLayers, selectedLayer } = useLayersStore((state) => state);
  const geoJsonLayerSelected: GeoJson | undefined =
    selectedLayer && get(geoJsonLayers, `${selectedLayer.id}`);

  return (
    <section className="px-6 py-4">
      <Subtitle className="mb-4">Sublayers</Subtitle>
      <div className="">
        {!selectedLayer && (
          <p className="text-xs text-label">
            <span className="font-bold">Doble click</span> en una capa para ver
            los detalles
          </p>
        )}
        {selectedLayer && !isEmpty(geoJsonLayerSelected) && (
          <ul className="flex flex-col gap-y-3">
            {geoJsonLayerSelected.features.map(
              (feature: Feature, index: number) => (
                <SublayerItem key={index} feature={feature} />
              )
            )}
          </ul>
        )}
      </div>
      {/* <div className="aspect-video bg-[#1D1D26] overflow-hidden">
        <img
          src="no_image.png"
          alt="No imge"
          className="w-full h-full object-cover"
        />
      </div> */}
    </section>
  );
};

export default LayerDetails;
