function drawLayer(layer) {
  if (layer.type === 'fill') {
    var paint = layer.paint; // Type is FillPaint
    var layout = layer.layout; // Type is FillLayout
  }
  else if (layer.type === 'line') {
    var paint = layer.paint; // Type is LinePaint
    var layout = layer.layout; // Type is LineLayout
  }
  else {
    var paint = layer.paint; // Type is PointPaint
    var layout = layer.layout; // Type is PointLayout
  }
}
