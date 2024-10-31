import { ILayer } from "@models/layers";
import { create } from "zustand";

interface ILayerStore {
  // Layers handler
  layers: ILayer[];
  addLayer: (layer: ILayer) => void;
  setLayers: (layers: ILayer[]) => void;
  toggleLayerVisibility: (id: string) => void;
}

// Initial state
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
}));

export default useLayersStore;
