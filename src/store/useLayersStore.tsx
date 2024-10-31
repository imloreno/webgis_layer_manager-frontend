import { create } from "zustand";
import { GeoJson, ILayer } from "@models/layers";

interface ILayerStore {
  // Layers handler
  layers: ILayer[];
  addLayer: (layer: ILayer) => void;
  setLayers: (layers: ILayer[]) => void;
  toggleLayerVisibility: (id: string) => void;

  // GeoJson handler
  geoJsonLayers: { [id: string]: GeoJson };
  addGeoJsonLayer: (geoJsonLayer: GeoJson) => void;
}

// Initial state
const layersInitialState: ILayer[] = [];
const geoJsonLayersInitialState: { [id: string]: GeoJson } = {};

const useLayersStore = create<ILayerStore>((set) => ({
  // Layers handler
  layers: layersInitialState,
  addLayer: (layer: ILayer) =>
    set((state: ILayerStore) => ({
      ...state,
      layers: [...state.layers, layer],
    })),
  setLayers: (layers: ILayer[]) =>
    set((state: ILayerStore) => ({ ...state, layers })),
  toggleLayerVisibility: (id: string) => {
    set((state: ILayerStore) => ({
      ...state,
      layers: state.layers.map((layer) =>
        layer.id === id ? { ...layer, isVisible: !layer.isVisible } : layer
      ),
    }));
  },

  // GeoJson handler
  geoJsonLayers: geoJsonLayersInitialState,
  addGeoJsonLayer: (geoJsonLayer: GeoJson) =>
    set((state: ILayerStore) => ({
      ...state,
      geoJsonLayers: {
        ...state.geoJsonLayers,
        [geoJsonLayer.id]: geoJsonLayer,
      },
    })),
}));

export default useLayersStore;
