import { ILayer } from "@models/layers";
import { GeoJSONProps } from "react-leaflet";
import { create } from "zustand";

interface ILayerStore {
  // Layers handler
  layers: ILayer[];
  addLayer: (layer: ILayer) => void;
  setLayers: (layers: ILayer[]) => void;
  toggleLayerVisibility: (id: string) => void;

  // Feature handler
  features: { [key: string]: GeoJSONProps };
}

// Initial state
const featuresInitialState = {};
const layersInitialState: ILayer[] = [];

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

  // Feature handler
  features: featuresInitialState,
}));

export default useLayersStore;
