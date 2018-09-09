export default class Body {
  constructor (element) {
    this.element = element
    this.bounds = {}
  }

  get hidden () {
    return this.element.hasAttribute('hidden')
  }

  set hidden (value) {
    this.element.toggleAttribute('hidden', !!value)
  }

  get x () {
    return this._x
  }

  set x (value) {
    this._x = value || 0
    this.element.setAttribute('x', this.x)
  }

  get y () {
    return this._y
  }

  set y (value) {
    this._y = value || 0
    this.element.setAttribute('y', this.y)
  }

  get width () {
    return this._width
  }

  set width (value) {
    this._width = Math.max(0, value || 0)
    this.element.setAttribute('width', this.width)
  }

  get height () {
    return this._height
  }

  set height (value) {
    this._height = Math.max(0, value || 0)
    this.element.setAttribute('height', this.height)
  }

  get top () {
    return this.y
  }

  get bottom () {
    return this.y + this.height
  }

  set bottom (value) {
    this.y = (value || 0) - this.height
  }

  get left () {
    return this.x
  }

  get right () {
    return this.x + this.width
  }

  set right (value) {
    this.x = (value || 0) - this.width
  }

  set bottom (value) {
    this.y = value - this.height
  }

  isLeftOf (other) {
    return this.right <= other.left
  }

  isRightOf (other) {
    return this.left >= other.right
  }

  isAbove (other) {
    return this.bottom <= other.top
  }

  isBelow (other) {
    return this.top >= other.bottom
  }

  overlaps (other) {
    return this.left < other.right &&
    this.right > other.left &&
    this.top < other.bottom &&
    this.bottom > other.top
  }

  remove () {
    this.element.remove()
  }
}
