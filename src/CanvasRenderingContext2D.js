
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
  if (x instanceof DOMRectReadOnly) {
    fillRect.call(x.x, x.y, x.width, x.height)
  } else {
    fillRect.call(x, y, width, height)
  }
}

const strokeRect = CanvasRenderingContext2D.prototype.strokeRect

CanvasRenderingContext2D.prototype.strokeRect = function (x, y, width, height) {
  if (x instanceof DOMRectReadOnly) {
    strokeRect.call(x.x, x.y, x.width, x.height)
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
