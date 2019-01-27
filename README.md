# Monkey

Some useful [monkey patches](https://en.wikipedia.org/wiki/Monkey_patch) for the [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API).

## Usage

```html
<script src="https://audinue.github.io/monkey/patches.js"></script>
```

## Patches

### [MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)

- <code><i>prototype</i>.<b>offset</b>: DOMPointReadOnly</code> :new:
- <code><i>prototype</i>.<b>movement</b>: DOMPointReadOnly</code> :new:

### [DOMPointReadOnly](https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly)

- <code><i>prototype</i>.<b>negate</b>(): DOMPointReadOnly</code> :new:
- <code><i>prototype</i>.<b>add</b>(value: number): DOMPointReadOnly</code> :new:
- <code><i>prototype</i>.<b>add</b>(other: DOMPointReadOnly): DOMPointReadOnly</code> :new:
- <code><i>prototype</i>.<b>substract</b>(value: number): DOMPointReadOnly</code> :new:
- <code><i>prototype</i>.<b>substract</b>(other: DOMPointReadOnly): DOMPointReadOnly</code> :new:
- <code><i>prototype</i>.<b>multiply</b>(value: number): DOMPointReadOnly</code> :new:
- <code><i>prototype</i>.<b>multiply</b>(other: DOMPointReadOnly): DOMPointReadOnly</code> :new:
- <code><i>prototype</i>.<b>divide</b>(value: number): DOMPointReadOnly</code> :new:
- <code><i>prototype</i>.<b>divide</b>(other: DOMPointReadOnly): DOMPointReadOnly</code> :new:
- <code><i>prototype</i>.<b>distanceTo</b>(other: DOMPointReadOnly): number</code> :new:
- <code><b>fromSize</b>(object: {width: number, height: number}): DOMPointReadOnly</code> :new:

### [DOMRectReadOnly](https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly)
- <code><i>prototype</i>.<b>contains</b>(point: DOMPointReadOnly): boolean</code> :new:
- <code><i>prototype</i>.<b>contains</b>(other: DOMRectReadOnly): boolean</code> :new:
- <code><i>prototype</i>.<b>intersects</b>(other: DOMRectReadOnly): boolean</code> :new:
- <code><i>prototype</i>.<b>inflate</b>(value: number): DOMRectReadOnly</code> :new:
- <code><i>prototype</i>.<b>inflate</b>(point: DOMPointReadOnly): DOMRectReadOnly</code> :new:
- <code><i>prototype</i>.<b>toPoints</b>(): DOMPointReadOnly[]</code> :new:
- <code><b>fromLTRB</b>(left: number, top: number, right: number, bottom: number): DOMRectReadOnly</code> :new:
- <code><b>fromPoints</b>(points: DOMPointReadOnly[]): DOMRectReadOnly</code> :new:

### [DOMMatrixReadOnly](https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrixReadOnly)
- <code><i>prototype</i>.<b>transformRect</b>(rect: DOMRectReadOnly): DOMRectReadOnly</code> :new:

### [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)
- <code><i>prototype</i>.<b>drawImage</b>(image: CanvasImageSource, sx: number, sy: number, sWidth: number, sHeight: number, dx: number, dy: number, dWidth: number, dHeight: number): void</code>
- <code><i>prototype</i>.<b>drawImage</b>(image: CanvasImageSource, dx: number, dy: number, dWidth: number, dHeight: number): void</code>
- <code><i>prototype</i>.<b>drawImage</b>(image: CanvasImageSource, dx: number, dy: number): void</code>
- <code><i>prototype</i>.<b>drawImage</b>(image: CanvasImageSource): void</code> :new:
- <code><i>prototype</i>.<b>translate</b>(x: number, y: number): void</code>
- <code><i>prototype</i>.<b>translate</b>(point: DOMPointReadOnly): void</code> :new:
- <code><i>prototype</i>.<b>scale</b>(x: number, y: number): void</code>
- <code><i>prototype</i>.<b>scale</b>(value: number): void</code> :new:
- <code><i>prototype</i>.<b>scale</b>(point: DOMPointReadOnly): void</code> :new:
- <code><i>prototype</i>.<b>transform</b>(a: number, b: number, c: number, d: number, e: number, f: number): void</code>
- <code><i>prototype</i>.<b>transform</b>(matrix: DOMMatrixReadOnly): void</code> :new:
- <code><i>prototype</i>.<b>fillRect</b>(x: number, y: number, width: number, height: number): void</code>
- <code><i>prototype</i>.<b>fillRect</b>(rect: DOMRectReadOnly): void</code> :new:
- <code><i>prototype</i>.<b>strokeRect</b>(x: number, y: number, width: number, height: number): void</code>
- <code><i>prototype</i>.<b>strokeRect</b>(rect: DOMRectReadOnly): void</code> :new:
- <code><i>prototype</i>.<b>strokeLine</b>(x1: number, y1: number, x2: number, y2: number): void</code> :new:
- <code><i>prototype</i>.<b>strokeLine</b>(point1: DOMPointReadOnly, point2: DOMPointReadOnly): void</code> :new:
