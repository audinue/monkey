
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

DOMPointReadOnly.prototype.modulo = function (valueOrOther) {
  return valueOrOther instanceof DOMPointReadOnly
    ? new DOMPointReadOnly(this.x % valueOrOther.x, this.y % valueOrOther.y)
    : new DOMPointReadOnly(this.x % valueOrOther, this.y % valueOrOther)
}

DOMPointReadOnly.prototype.distanceTo = function (other) {
  return Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2))
}

DOMPointReadOnly.fromSize = function (object) {
  return new DOMPointReadOnly(object.width, object.height)
}
