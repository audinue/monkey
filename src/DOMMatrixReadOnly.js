
DOMMatrixReadOnly.prototype.transformRect = function (rect) {
  return DOMRectReadOnly.fromPoints(rect.toPoints().map(point => this.transformPoint(point)))
}
