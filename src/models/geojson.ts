export interface GeoJson {
   type: string
   features: Feature[]
}

export interface Feature {
   type: string
   properties: Properties
   geometry: Geometry
}

export interface Properties {
   name: string
   amenity: string
   popupContent: string
}

export interface Geometry {
   type: string
   coordinates: number[]
}
