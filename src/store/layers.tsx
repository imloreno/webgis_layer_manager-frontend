import { GeoJSONProps } from "react-leaflet";
import { create } from "zustand";
interface ILayer {
  // Layers handler
  layers: GeoJSONProps[];
  addLayer: (layer: GeoJSONProps) => void;
  setLayers: (layers: GeoJSONProps[]) => void;

  // Feature handler
  features: { [key: string]: GeoJSONProps };
}

// Initial state
const featuresInitialState = {};
const layersInitialState: GeoJSONProps[] = [];

export const useLayers = create<ILayer>((set) => ({
  // Layers handler
  layers: layersInitialState,
  addLayer: (layer: GeoJSONProps) =>
    set((state: ILayer) => ({ ...state, layers: [...state.layers, layer] })),
  setLayers: (layers: GeoJSONProps[]) =>
    set((state: ILayer) => ({ ...state, layers })),

  // Feature handler
  features: featuresInitialState,
}));
