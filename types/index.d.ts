import * as L from "leaflet";

declare module "leaflet" {
  interface MarkerOptions {
    rotation3d?: number[] | undefined;
  }

  interface Marker {
    setRotation3d(newAngle: number): this;
  }
}
