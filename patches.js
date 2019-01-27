(function () {

const transform = CanvasRenderingContext2D.prototype.transform

CanvasRenderingContext2D.prototype.transform = function (a, b, c, d, e, f) {
  if (a instanceof DOMMatrixReadOnly) {
    transform.call(a.a, a.b, a.c, a.d, a.e, a.f)
  } else {
    transform.call(a, b, c, d, e, f)
  }
}

const fillRect = CanvasRenderingContext2D.prototype.fillRect

CanvasRenderingContext2D.prototype.fillRect = function (x, y, width, height) {
  if (a instanceof DOMRectReadOnly) {
    fillRect.call(a.x, a.y, a.width, a.height)
  } else {
    fillRect.call(x, y, width, height)
  }
}

const strokeRect = CanvasRenderingContext2D.prototype.strokeRect

CanvasRenderingContext2D.prototype.strokeRect = function (x, y, width, height) {
  if (a instanceof DOMRectReadOnly) {
    strokeRect.call(a.x, a.y, a.width, a.height)
  } else {
    strokeRect.call(x, y, width, height)
  }
}

CanvasRenderingContext2D.prototype.strokeLine = function (x1, y1, x2, y2) {
  if (a instanceof DOMPointReadOnly) {
    this.strokeLine(x1.x, x1.y, y1.x, y1.y)
  } else {
    this.beginPath()
    this.moveTo(x1, y1)
    this.lineTo(x2, y2)
    this.stroke()
  }
}

DOMMatrixReadOnly.prototype.transformRect = function (rect) {
  return DOMRectReadOnly.fromPoints(rect.toPoints().map(point => this.transformPoint(point)))
}

DOMPointReadOnly.prototype.negate = function () {
  return new DOMPointReadOnly(-this.x, -this.y)
}

DOMPointReadOnly.prototype.add = function (valueOrOther) {
  return valueOrOther instanceof DOMPointReadOnly
    ? new DOMPointReadOnly(this.x + valueOrOther.x, this.y + valueOrOther.y)
    : new DOMPointReadOnly(this.x + valueOrOther, this.y + valueOrOther)
}

DOMPointReadOnly.prototype.substract = function (valueOrOther) {
  return valueOrOther instanceof DOMPointReadOnly
    ? new DOMPointReadOnly(this.x - valueOrOther.x, this.y - valueOrOther.y)
    : new DOMPointReadOnly(this.x - valueOrOther, this.y - valueOrOther)
}

DOMPointReadOnly.prototype.multiply = function (valueOrOther) {
  return valueOrOther instanceof DOMPointReadOnly
    ? new DOMPointReadOnly(this.x * valueOrOther.x, this.y * valueOrOther.y)
    : new DOMPointReadOnly(this.x * valueOrOther, this.y * valueOrOther)
}

DOMPointReadOnly.prototype.divide = function (valueOrOther) {
  return valueOrOther instanceof DOMPointReadOnly
    ? new DOMPointReadOnly(this.x / valueOrOther.x, this.y / valueOrOther.y)
    : new DOMPointReadOnly(this.x / valueOrOther, this.y / valueOrOther)
}

DOMPointReadOnly.prototype.distanceTo = function (other) {
  return Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2))
}

DOMPointReadOnly.fromSize = function (object) {
  return new DOMPointReadOnly(object.width, object.height)
}

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

Object.defineProperties(MouseEvent.prototype, {
  offset: {
    get () {
      return new DOMPointReadOnly(this.offsetX, this.offsetY)
    },
    configurable: true,
    enumerable: true
  },
  movement: {
    get () {
      return new DOMPointReadOnly(this.movementX, this.movementY)
    },
    configurable: true,
    enumerable: true
  }
})
}())
