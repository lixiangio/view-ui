let e, h;
const a = document.createElement("mask"), c = a.style;
function m() {
  e = void 0, c.display = "none";
}
const v = "ontouchstart" in document;
function d(s) {
  const t = s.touches[0];
  return s.clientX = t.clientX, s.clientY = t.clientY, s.screenX = t.screenX, s.screenY = t.screenY, s;
}
class f {
  el;
  options = {
    angle: 45,
    freeGap: 2,
    capture: !1
  };
  start = null;
  last = null;
  current = null;
  angleRatio;
  trend = null;
  move = null;
  gesture = null;
  events = {};
  target = void 0;
  clientX = null;
  clientY = null;
  startX = null;
  startY = null;
  dir = null;
  dirname = null;
  startEvent = void 0;
  moveEvent = void 0;
  constructor(t, o = {}) {
    Object.assign(this.options, o), this.el = t;
    const { angle: n, capture: i } = this.options;
    this.angleRatio = n / 45;
    const l = { capture: i };
    v ? (t.addEventListener("touchstart", (r) => {
      e ? h.parentPointer = this : (e = this, e.onstart(d(r))), h = this;
    }, l), t.addEventListener("touchmove", (r) => {
      e && e.onmove(d(r)), r.stopPropagation();
    }, l), t.addEventListener("touchend", (r) => {
      e && (e.onend(r), e = void 0), r.stopPropagation();
    }, l)) : t.addEventListener("mousedown", (r) => {
      r.button === 0 && (e ? h.parentPointer = this : e = this, h = this, this.onstart(r));
    }, l);
  }
  onstart(t) {
    const { clientX: o, clientY: n } = t;
    this.startEvent = t, this.target = t.target, this.clientX = o, this.clientY = n, this.startX = o, this.startY = n, this.start = null, this.current = null, this.move = null, this.trend = null, this.gesture = null, this.dirname = null, this.dir = null, this.emit("start", t);
  }
  onmove(t) {
    this.moveEvent = t, this.emit("move", t);
    const { clientX: o, clientY: n } = t;
    if (this.clientX = o, this.clientY = n, this.gesture) {
      const i = t[`client${this.dir}`];
      this.move = i - this.current, this.current = i, this.emit(this.gesture, t);
    } else if (this.gesture === null) {
      const i = Math.abs(o - this.startX), l = Math.abs(n - this.startY), { freeGap: r } = this.options;
      if (i > r || l > r) {
        i > l * this.angleRatio ? (this.dir = "X", this.gesture = "level", c.cursor = "col-resize") : (this.dir = "Y", this.gesture = "vertical", c.cursor = "row-resize"), this.start = this[`start${this.dir}`];
        const u = t[`client${this.dir}`];
        this.move = u - this.start, this.current = u, this.trend = this.move, this.emit("lock", this.startEvent), this.emit(this.gesture, t);
      }
    }
  }
  onend(t) {
    this.emit("end", t), this.gesture === null && this.emit("click", this.startEvent);
  }
  on(t, o) {
    if (!(o instanceof Function))
      return;
    const { events: n } = this;
    let i = n[t];
    i || (i = n[t] = []), i.push(o);
  }
  emit(t, o) {
    const n = this.events[t];
    if (n)
      try {
        for (const i of n)
          i(o);
      } catch (i) {
        console.error(i);
      }
  }
  parent() {
    e.gesture = void 0, e = e.parentPointer, e.onstart(this.startEvent, this);
  }
  switch(t) {
    e.gesture = void 0, e = t, e.onstart(this.startEvent, this);
  }
  use(t) {
    return t(this);
  }
}
document.addEventListener("dragstart", (s) => s.preventDefault());
v || (a.setAttribute("style", "position: fixed; z-index: 10000000; left: 0; right: 0; top: 0; bottom: 0; display: none;"), document.addEventListener("mousemove", (s) => {
  e && (e.gesture && c.display !== "" && (c.display = ""), e.onmove(s));
}), document.addEventListener("mouseup", (s) => {
  e && (c.display = "none", e.onend(s), e = void 0);
}), document.body.appendChild(a));
const p = window.screen.width - 1, g = window.screen.height - 1;
function E() {
  return e;
}
function X() {
  return h;
}
function Y(s) {
  h = e || s, e = s;
}
export {
  m as DisableEvent,
  c as MaskStyle,
  d as TouchFill,
  f as default,
  E as getCurrentPointer,
  X as getLastPointer,
  v as isTouch,
  g as screenHeight,
  p as screenWidth,
  Y as switchPointer
};
