import { GeoJSONProps } from 'react-leaflet'
import { create } from 'zustand'
interface ILayer {
   layers: GeoJSONProps[]
   addLayer: (layer: GeoJSONProps) => void
   setLayers: (layers: GeoJSONProps[]) => void
}

const layersInitialState: GeoJSONProps[] = []

export const useLayers = create<ILayer>((set) => ({
   layers: layersInitialState,
   addLayer: (layer: GeoJSONProps) => set((state: ILayer) => ({ ...state, layers: [...state.layers, layer] })),
   setLayers: (layers: GeoJSONProps[]) => set((state: ILayer) => ({ ...state, layers })),
}))