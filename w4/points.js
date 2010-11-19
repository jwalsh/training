function makePoint (x, y) { 
  return {
    x: x,
    y: y
  }
}

function makeLoggedPoint(p) { 
  return {
    get x() {
      log("get", "x", p);
      return p.x;
    },
    set x(v) { 
      log("set", "x", p, v)
      p.x = v;

    },
    get y() { 
      log("get", "y", p);
      return p.y;
    },
    set y(v) { 
      log("set", "y", p, v)
      p.y = v;
    }

  }
}

var lp = makeLoggedPoint(makePoint(1,2));