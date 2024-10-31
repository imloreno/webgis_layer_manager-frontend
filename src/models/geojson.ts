export interface GeoJson {
  id: string;
  type: string;
  name: string;
  crs: CrsJson;
  features: Feature[];
}

export interface CrsJson {
  type: string;
  properties: {
    name: string;
  };
}

export interface Feature {
  type: string;
  properties: Properties;
  geometry: Geometry;
}

export interface Properties {
  name: string;
  amenity: string;
  popupContent: string;
}

export interface Geometry {
  type: string;
  coordinates: number[];
}
