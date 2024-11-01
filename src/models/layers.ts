import { FeatureCollection } from "geojson";

export interface ILayer {
  id: string;
  sorting: number;
  name: string;
  originalFile?: string;
  coordinateSystem: string;
  isVisible: boolean;
}

export interface GeoJson extends FeatureCollection {
  id: string;
}
