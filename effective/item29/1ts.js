// 함수 시그니처에서 매개변수는 타입의 범위가 넓어도 되지만, 결과를 반환할 때는 일반적으로 타입의 범위가 더 구체적이어야 한다.
// declare function setCamera(camera: CameraOptions): void;
// declare function viewportForBounds(bounds: LngLatBounds): CameraOptions;
function focusOnFeature(f) {
    const bounds = calculateBoundingBox(f);
    const camera = viewportForBounds(bounds);
    setCamera(camera);
    const { center: { lat, lng }, zoom, } = camera; // OK
    zoom; // Type is number
    window.location.search = `?v=@${lat},${lng}z${zoom}`;
}
export {};
