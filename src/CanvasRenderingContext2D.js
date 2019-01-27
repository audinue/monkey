
CanvasRenderingContext2D.prototype.__translate = CanvasRenderingContext2D.prototype.translate
CanvasRenderingContext2D.prototype.translate = function (x, y) {
  if (x instanceof DOMPointReadOnly) {
    this.__translate(x.x, x.y)
  } else {
    this.__translate(x, y)
  }
}

CanvasRenderingContext2D.prototype.rotateDegree = function (angle) {
  this.rotate(angle * Math.PI / 180)
}

CanvasRenderingContext2D.prototype.__scale = CanvasRenderingContext2D.prototype.scale
CanvasRenderingContext2D.prototype.scale = function (x, y) {
  if (x instanceof DOMPointReadOnly) {
    this.__scale(x.x, x.y)
  } else if (y === undefined) {
    this.__scale(x, x)
  } else {
    this.__scale(x, y)
  }
}

CanvasRenderingContext2D.prototype.__drawImage = CanvasRenderingContext2D.prototype.drawImage
CanvasRenderingContext2D.prototype.drawImage = function (image, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight) {
  if (sX === undefined) {
    this.__drawImage(image, 0, 0)
  } else if (sWidth === undefined) {
    this.__drawImage(image, sX, sY)
  } else if (dX === undefined) {
    this.__drawImage(image, sX, sY, sWidth, sHeight)
  } else {
    this.__drawImage(image, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight)
  }
}

CanvasRenderingContext2D.prototype.__transform = CanvasRenderingContext2D.prototype.transform
CanvasRenderingContext2D.prototype.transform = function (a, b, c, d, e, f) {
  if (a instanceof DOMMatrixReadOnly) {
    this.__transform(a.a, a.b, a.c, a.d, a.e, a.f)
  } else {
    this.__transform(a, b, c, d, e, f)
  }
}

CanvasRenderingContext2D.prototype.__fillRect = CanvasRenderingContext2D.prototype.fillRect
CanvasRenderingContext2D.prototype.fillRect = function (x, y, width, height) {
  if (x instanceof DOMRectReadOnly) {
    this.__fillRect(x.x, x.y, x.width, x.height)
  } else {
    this.__fillRect(x, y, width, height)
  }
}

CanvasRenderingContext2D.prototype.__moveTo = CanvasRenderingContext2D.prototype.moveTo
CanvasRenderingContext2D.prototype.moveTo = function (x, y) {
  if (x instanceof DOMPointReadOnly) {
    this.__moveTo(x.x, x.y)
  } else {
    this.__moveTo(x, y)
  }
}

CanvasRenderingContext2D.prototype.__lineTo = CanvasRenderingContext2D.prototype.lineTo
CanvasRenderingContext2D.prototype.lineTo = function (x, y) {
  if (x instanceof DOMPointReadOnly) {
    this.__lineTo(x.x, x.y)
  } else {
    this.__lineTo(x, y)
  }
}

CanvasRenderingContext2D.prototype.__strokeRect = CanvasRenderingContext2D.prototype.strokeRect
CanvasRenderingContext2D.prototype.strokeRect = function (x, y, width, height) {
  if (x instanceof DOMRectReadOnly) {
    this.__strokeRect(x.x, x.y, x.width, x.height)
  } else {
    this.__strokeRect(x, y, width, height)
  }
}

CanvasRenderingContext2D.prototype.strokeLine = function (x1, y1, x2, y2) {
  this.beginPath()
  if (x1 instanceof DOMPointReadOnly) {
    this.moveTo(x1)
    this.lineTo(y1)
  } else {
    this.moveTo(x1, y1)
    this.lineTo(x2, y2)
  }
  this.stroke()
}
