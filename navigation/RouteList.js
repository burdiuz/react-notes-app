/**
 * Created by Oleg Galaburda on 02.08.16.
 * @providesModule RouteList
 */
export class Route {
  title = '';
  index = 0;
  factory = null;

  constructor(title, index, factory = null) {
    this.title = title;
    this.index = index;
    this.factory = factory;
  }

  render() {
    return this.factory ? this.factory() : null;
  }
}

Route.create = (title, index, factory = null) => {
  return new Route(title, index, factory);
}

export class RouteList extends Array {
  constructor(...titles) {
    super();
    this.addRouteList(titles);
  }

  addRoute = (title, factory = null) => {
    this.push(Route.create(title, this.length, factory = null));
  }

  addRoutes = (...titles) => {
    this.addRouteList(titles);
  }

  addRouteList = (items) => {
    items.map((item) => {
      if (item instanceof Route) {
        this.push(item);
      } else {
        this.addRoute(String(item));
      }
    });
  }
}
RouteList.create = (...titles) => {
  return new RouteList(...titles);
}
