import { useEffect } from "react";
import { GeoJSON } from "react-leaflet";
import { isEmpty } from "lodash";
import { useGeoJsonData } from "@hooks";
import { ScreenMessage } from "@atoms";
import useLayersStore from "@store/useLayersStore";
import { ILayer } from "@models/layers";

const FeatureList = () => {
  const {
    layers = [],
    geoJsonLayers,
    addGeoJsonLayer,
  } = useLayersStore((state) => state);

  // Fetch geojson data
  const layersToFetch = (): string[] => {
    return layers
      ?.filter((layer: ILayer) => isEmpty(!!geoJsonLayers[layer.id]))
      .map((layer: ILayer) => layer.id);
  };
  const { isSuccess, isLoading, data = [] } = useGeoJsonData(layersToFetch());

  // Side effect to add geojson layer
  useEffect(() => {
    if (!isSuccess) return;
    data.forEach(({ data }: any) => {
      addGeoJsonLayer(data);
    });
  }, [data, addGeoJsonLayer, isSuccess]);

  if (isLoading) {
    return <ScreenMessage>Loading...</ScreenMessage>;
  }
  return (
    <div className="z-[9999]">
      {layers
        .filter((layer: ILayer) => layer.isVisible)
        .map((layer: ILayer) => {
          return <GeoJSON key={layer.id} data={geoJsonLayers[layer.id]} />;
        })}
    </div>
  );
};

export default FeatureList;
