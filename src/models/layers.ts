export interface ILayer {
  id: string;
  sorting: number;
  name: string;
  originalFile?: string;
  coordinateSystem: string;
  isVisible: boolean;
}
