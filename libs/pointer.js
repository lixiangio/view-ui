const d = "ontouchstart" in document, u = document.createElement("section"), h = u.style;
let t, a;
function v() {
  return t;
}
function m(r) {
  a = t || r, t = r;
}
function f() {
  t = void 0, h.display = "none";
}
class p {
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
  constructor(e, i = {}) {
    Object.assign(this.options, i), this.el = e;
    const { angle: n, capture: o } = this.options;
    this.angleRatio = n / 45;
    const l = { capture: o };
    d ? (e.addEventListener("touchstart", (s) => {
      t ? a.parentPointer = this : (t = this, t.onstart(s, s.touches[0])), a = this;
    }, l), e.addEventListener("touchmove", (s) => {
      t && t.onmove(s, s.touches[0]), s.stopPropagation();
    }, l), e.addEventListener("touchend", (s) => {
      t && t.onend(s), t = void 0, s.stopPropagation();
    }, l)) : e.addEventListener("mousedown", (s) => {
      s.button === 0 && (t ? a.parentPointer = this : (h.display = "", h.cursor = "pointer", t = this), a = this, this.onstart(s, s));
    }, l);
  }
  onstart(e, { clientX: i, clientY: n }) {
    this.startEvent = e, this.target = e.target, this.clientX = i, this.clientY = n, this.startX = i, this.startY = n, this.start = null, this.current = null, this.move = null, this.trend = null, this.gesture = null, this.dirname = null, this.dir = null, this.emit("start", e);
  }
  onmove(e, i) {
    this.moveEvent = e, this.emit("move", e);
    const { clientX: n, clientY: o } = i;
    if (this.clientX = n, this.clientY = o, this.gesture)
      this.current = i[`client${this.dir}`], this.move = i[`movement${this.dir}`], this.emit(this.gesture, e);
    else if (this.gesture === null) {
      const l = Math.abs(n - this.startX), s = Math.abs(o - this.startY), { freeGap: c } = this.options;
      (l > c || s > c) && (l > s * this.angleRatio ? (this.dir = "X", this.gesture = "level", h.cursor = "col-resize") : (this.dir = "Y", this.gesture = "vertical", h.cursor = "row-resize"), this.start = this[`start${this.dir}`], this.current = i[`client${this.dir}`], this.move = i[`movement${this.dir}`], this.trend = this.move, this.emit("lock", this.startEvent), this.emit(this.gesture, e));
    }
  }
  onend(e) {
    this.emit("end", e), this.gesture === null && this.emit("click", this.startEvent);
  }
  on(e, i) {
    if (!(i instanceof Function))
      return;
    const { events: n } = this;
    let o = n[e];
    o || (o = n[e] = []), o.push(i);
  }
  emit(e, i) {
    const n = this.events[e];
    if (n)
      try {
        for (const o of n)
          o(i);
      } catch (o) {
        console.error(o);
      }
  }
  parent() {
    t.gesture = void 0, t = t.parentPointer, t.onstart(this.startEvent, this);
  }
  switch(e) {
    t.gesture = void 0, t = e, t.onstart(this.startEvent, this);
  }
  use(e) {
    return e(this);
  }
}
d || (u.setAttribute("style", "position: fixed; z-index: 10000000; left: 0; right: 0; top: 0; bottom: 0; display: none;"), document.addEventListener("mousemove", (r) => {
  t && t.onmove(r, r);
}), document.addEventListener("mouseup", (r) => {
  h.display = "none", t && (t.onend(r), t.gesture === null && t.target.click(), t = void 0);
}), document.body.appendChild(u));
export {
  f as DisableEvent,
  v as GetPointer,
  u as Mask,
  m as SetPointer,
  p as default,
  d as isTouch
};
