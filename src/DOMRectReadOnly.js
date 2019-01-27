
DOMRectReadOnly.prototype.contains = function (pointOrOther) {
  return pointOrOther instanceof DOMRectReadOnly
    ? this.contains(new DOMPointReadOnly(pointOrOther.left, pointOrOther.top)) &&
      this.contains(new DOMPointReadOnly(pointOrOther.right, pointOrOther.bottom))
    : pointOrOther.x >= this.left &&
      pointOrOther.x <= this.right &&
      pointOrOther.y >= this.top &&
      pointOrOther.y <= this.bottom
}

DOMRectReadOnly.prototype.intersects = function (other) {
  return this.left <= other.right &&
    other.left <= this.right &&
    this.top <= other.bottom &&
    other.top <= this.bottom
}

DOMRectReadOnly.prototype.inflate = function (valueOrPoint) {
  return valueOrPoint instanceof DOMPointReadOnly
    ? new DOMRectReadOnly(
        this.x - valueOrPoint.x,
        this.y - valueOrPoint.y,
        this.width + valueOrPoint.x * 2,
        this.height + valueOrPoint.y * 2
      )
    : new DOMRectReadOnly(
        this.x - valueOrPoint,
        this.y - valueOrPoint,
        this.width + valueOrPoint * 2,
        this.height + valueOrPoint * 2
      )
}

DOMRectReadOnly.prototype.toPoints = function () {
  return [
    new DOMPointReadOnly(this.left, this.top),
    new DOMPointReadOnly(this.right, this.top),
    new DOMPointReadOnly(this.right, this.bottom),
    new DOMPointReadOnly(this.left, this.bottom)
  ]
}

DOMRectReadOnly.fromLTRB = function (left, top, right, bottom) {
  return new DOMRectReadOnly(left, top, right - left, bottom - top)
}

DOMRectReadOnly.fromPoints = function (points) {
  const head = points[0]
  const tail = points.slice(1)
  return DOMRectReadOnly.fromLTRB(
    tail.reduce((min, point) => Math.min(min, point.x), head.x),
    tail.reduce((min, point) => Math.min(min, point.y), head.y),
    tail.reduce((max, point) => Math.max(max, point.x), head.x),
    tail.reduce((max, point) => Math.max(max, point.y), head.y)
  )
}
