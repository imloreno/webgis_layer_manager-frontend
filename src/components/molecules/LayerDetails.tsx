import { get, isEmpty } from "lodash";
import { Icons, SublayerItem, Subtitle } from "@atoms";
import { GeoJson } from "@models/layers";
import useLayersStore from "@store/useLayersStore";
import { Feature } from "geojson";
import { RemoveLayer } from "@molecules";

const LayerDetails = () => {
  const { geoJsonLayers, selectedLayer } = useLayersStore((state) => state);
  const geoJsonLayerSelected: GeoJson | undefined =
    selectedLayer && get(geoJsonLayers, `${selectedLayer.id}`);

  return (
    <section className="px-6 py-4">
      <Subtitle className="mb-4 text-primary">
        <Icons type="subLayers" className="text-tertiary" /> Subcapas
      </Subtitle>

      <div className="flex justify-between gap-x-4 items-center mb-8">
        {selectedLayer?.name && (
          <Subtitle size="base" className="text-success font-normal">
            Capa: <span className="text-label">{selectedLayer.name}</span>
          </Subtitle>
        )}
        <RemoveLayer />
      </div>

      <div className="">
        {!selectedLayer && (
          <p className="text-xs text-label">
            <b className="text-labelHighlight">Doble click</b> en una capa para
            ver los detalles
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
    </section>
  );
};

export default LayerDetails;
