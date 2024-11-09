import { Layer } from "leaflet";
import { create } from "zustand";

interface IDrawingStore {
  layerFeatures: Layer[];
  isDrawing: boolean;
  addLayer: (layer: Layer) => void;
  setAllLayers: (layers: Layer[]) => void;
  resetDrawing: () => void;
}

const layerFeaturesInitialState: Layer[] = [];

const useLeafletDrawingStore = create<IDrawingStore>((set) => ({
  layerFeatures: layerFeaturesInitialState,
  isDrawing: false,
  addLayer: (layer: Layer) =>
    set((state: IDrawingStore) => ({
      ...state,
      layerFeatures: [...state.layerFeatures, layer],
      isDrawing: true,
    })),
  setAllLayers: (layers: Layer[]) =>
    set((state: IDrawingStore) => ({
      ...state,
      layerFeatures: layers,
      isDrawing: true,
    })),
  resetDrawing: () =>
    set((state: IDrawingStore) => ({
      ...state,
      layerFeatures: layerFeaturesInitialState,
      isDrawing: false,
    })),
}));

export default useLeafletDrawingStore;
