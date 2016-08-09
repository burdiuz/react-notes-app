/**
 * Created by Oleg Galaburda on 04.08.16.
 * @providesModule Coords
 */

export const applyRatio = (value, max, deviceMax) => {
  return value * realMax / max;
}

export class Ratio {
  /**
   * @private
   */
  _max = 0;
  /**
   * @private
   */
  _deviceMax = 0;

  constructor(max) {
    this._max = max;
  }

  setDevice = (max) => {
    this._deviceMax = max;
  }

  get ratio() {
    return this._deviceMax / this._max;
  }

  value = (value) => {
    return value * this.ratio >> 0
  }
}

export class Coords {
  /**
   * @private
   */
  _width;
  /**
   * @private
   */
  _height;
  x;
  y;
  xRatio;
  yRatio;

  constructor(width, height) {
    this._width = new Ratio(width);
    this._height = new Ratio(height);
    this.x = this._width.value;
    this.y = this._height.value;
    this.xRatio = this._width.ratio;
    this.yRatio = this._height.ratio;
  }

  setDevice = (width, height) => {
    this._width.setDevice(width);
    this._height.setDevice(height);
  }

  static x;
  static y;
  static xRatio;
  static yRatio;
  static setDevice;
  static initialize = (width, height) => {
    Object.assign(Coords, new Coords(width, height));
  }
}

export default Coords;
