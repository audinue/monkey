
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
