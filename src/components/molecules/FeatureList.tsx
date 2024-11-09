import { useEffect } from "react";
import { GeoJSON } from "react-leaflet";
import { isEmpty, sample } from "lodash";
import { useGeoJsonData } from "@hooks";
import { ScreenMessage, Spinner } from "@atoms";
import useLayersStore from "@store/useLayersStore";
import { ILayer } from "@models/layers";
import { GEOJSON_LABELS, RANDOM_COLOR_PALETTE } from "@utils/constants";

// onEachFeature function to add a tooltip
const onEachFeature = (feature: any, layer: any) => {
  const properties = feature?.properties;
  if (!isEmpty(properties)) {
    layer.bindTooltip(
      `<div>
        ${Object.entries(properties)
          .map(
            ([key, value]) =>
              `<p class="font-normal text-base h-6 
                  rounded-md"
              >
                <b class="font-bold">${GEOJSON_LABELS[key] ?? key}: </b>
                ${value}
              </p>`
          )
          .join("")}
      </div>`,
      {
        // permanent: true,
        direction: "top",
      }
    );
  }
};

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
    return (
      <ScreenMessage>
        <Spinner />
      </ScreenMessage>
    );
  }
  return (
    <div className="z-[9999]">
      {!isEmpty(geoJsonLayers) &&
        layers
          .filter((layer: ILayer) => layer.isVisible)
          .map((layer: ILayer, index) => {
            const color = RANDOM_COLOR_PALETTE[index];
            return (
              <GeoJSON
                key={layer.id}
                data={geoJsonLayers[layer.id]}
                onEachFeature={onEachFeature}
                style={{
                  color,
                  fillColor: color,
                  weight: 3,
                }}
              />
            );
          })}
    </div>
  );
};

export default FeatureList;
