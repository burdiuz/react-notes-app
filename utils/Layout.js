/**
 * Created by Oleg Galaburda on 05.08.16.
 * @providesModule Layout
 */

export const applyRatio = (value, max, deviceMax) => {
  return value * realMax / max;
}

export class Layout {
  _width;
  _height;

  constructor(width, height) {
    this.setDimensions(width, height);
  }

  setDimensions(width, height) {
    this._width = width;
    this._height = height;
  }

  x(percent) {
    return percent / 100 * this._width;
  }

  y(percent) {
    return percent / 100 * this._height;
  }
}

export const MarginAuto = (props) => {
  let { children, ...rest } = props
  if(children.length !== 1) {
    throw new Error('MarginAuto requires exactly one child element.');
  }
  let child = children[0]
  return (
      <View {...rest}>
        <View/>
      </View>
  )
}

export default Layout;
