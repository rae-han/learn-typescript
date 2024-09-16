"use strict";
function drawLayer(layer) {
    if (layer.type === 'fill') {
        const { paint } = layer; // Type is FillPaint
        const { layout } = layer; // Type is FillLayout
    }
    else if (layer.type === 'line') {
        const { paint } = layer; // Type is LinePaint
        const { layout } = layer; // Type is LineLayout
    }
    else {
        const { paint } = layer; // Type is PointPaint
        const { layout } = layer; // Type is PointLayout
    }
}
