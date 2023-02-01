// 함수 시그니처에서 매개변수는 타입의 범위가 넓어도 되지만, 결과를 반환할 때는 일반적으로 타입의 범위가 더 구체적이어야 한다.
// declare function setCamera(camera: CameraOptions): void;
// declare function viewportForBounds(bounds: LngLatBounds): CameraOptions;

// interface CameraOptions {
//   center?: LngLat;
//   zoom?: number;
//   bearing?: number;
//   pitch?: number;
// }
// type LngLat = { lng: number; lat: number } | { lon: number; lat: number } | [number, number];

// type LngLatBounds = { northeast: LngLat; southwest: LngLat } | [LngLat, LngLat] | [number, number, number, number];

// declare function calculateBoundingBox(f: any): any;
//
// function focusOnFeature(f: () => void) {
//   const bounds = calculateBoundingBox(f);
//   const camera = viewportForBounds(bounds);
//   setCamera(camera);
//   const {
//     center: { lat, lng },
//     // Property 'lat' does not exist on type 'LngLat | undefined'.
//     // Property 'lng' does not exist on type 'LngLat | undefined'.
//     zoom,
//   } = camera;
//   zoom; // Type is number | undefined
//   window.location.search = `?v=@${lat},${lng}z${zoom}`;
// }

type Feature = any;
declare function calculateBoundingBox(f: Feature): [number, number, number, number];
interface LngLat {
  lng: number;
  lat: number;
}
type LngLatLike = LngLat | { lon: number; lat: number } | [number, number];

interface Camera {
  center: LngLat;
  zoom: number;
  bearing: number;
  pitch: number;
}
interface CameraOptions extends Omit<Partial<Camera>, 'center'> {
  center?: LngLatLike;
}
type LngLatBounds =
  | { northeast: LngLatLike; southwest: LngLatLike }
  | [LngLatLike, LngLatLike]
  | [number, number, number, number];

declare function setCamera(camera: CameraOptions): void;
declare function viewportForBounds(bounds: LngLatBounds): Camera;
function focusOnFeature(f: Feature) {
  const bounds = calculateBoundingBox(f);
  const camera = viewportForBounds(bounds);
  setCamera(camera);
  const {
    center: { lat, lng },
    zoom,
  } = camera; // OK
  zoom; // Type is number
  window.location.search = `?v=@${lat},${lng}z${zoom}`;
}

export {};
