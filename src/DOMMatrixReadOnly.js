
DOMMatrixReadOnly.prototype.transformPoints = function (points) {
  return points.map(function (point) {
    this.transformPoint(point)
  }, this)
}

DOMMatrixReadOnly.prototype.transformRect = function (rect) {
  return DOMRectReadOnly.fromPoints(this.transformPoints(rect.toPoints()))
}
