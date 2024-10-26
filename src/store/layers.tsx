import { GeoJSONProps } from 'react-leaflet'
import { create } from 'zustand'

const layersInitialState: GeoJSONProps[] = []

export const useLayers = create((set) => ({
   layers: layersInitialState,
   addLayer: (layer: GeoJSONProps) => set((state: { layers: GeoJSONProps[] }) => ({ layers: [...state.layers, layer] })),
   setLayers: (layers: GeoJSONProps) => set({ layers }),
}))