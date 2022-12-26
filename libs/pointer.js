const d = "ontouchstart" in document, a = document.createElement("section"), h = a.style;
let t, u;
function v() {
  return t;
}
function m(o) {
  u = t || o, t = o;
}
function p() {
  t = void 0, h.display = "none";
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
  constructor(s, i = {}) {
    Object.assign(this.options, i), this.el = s;
    const { angle: n, capture: r } = this.options;
    this.angleRatio = n / 45;
    const l = { capture: r };
    d ? (s.addEventListener("touchstart", (e) => {
      t ? u.parentPointer = this : (t = this, t.onstart(e, e.touches[0])), u = this;
    }, l), s.addEventListener("touchmove", (e) => {
      t && t.onmove(e, e.touches[0]), e.stopPropagation();
    }, l), s.addEventListener("touchend", (e) => {
      t && t.onend(e), t = void 0, e.stopPropagation();
    }, l)) : s.addEventListener("mousedown", (e) => {
      e.button === 0 && (t ? u.parentPointer = this : (h.display = "", h.cursor = "pointer", t = this), u = this, this.onstart(e, e));
    }, l);
  }
  onstart(s, { clientX: i, clientY: n }) {
    this.startEvent = s, this.target = s.target, this.clientX = i, this.clientY = n, this.startX = i, this.startY = n, this.start = null, this.last = null, this.current = null, this.move = null, this.trend = null, this.gesture = null, this.dirname = null, this.dir = null, this.emit("start", s);
  }
  onmove(s, i) {
    this.moveEvent = s, this.emit("move", s);
    const { clientX: n, clientY: r } = i;
    if (this.clientX = n, this.clientY = r, this.gesture)
      this.last = this.current, this.current = i[this.dirname], this.move = this.current - this.last, this.emit(this.gesture, s);
    else if (this.gesture === null) {
      const l = Math.abs(n - this.startX), e = Math.abs(r - this.startY), { freeGap: c } = this.options;
      (l > c || e > c) && (l > e * this.angleRatio ? (this.dir = "X", this.gesture = "level", h.cursor = "col-resize") : (this.dir = "Y", this.gesture = "vertical", h.cursor = "row-resize"), this.dirname = `client${this.dir}`, this.start = this[`start${this.dir}`], this.last = this.start, this.current = i[this.dirname], this.move = this.current - this.last, this.trend = this.move, this.emit("lock", this.startEvent), this.emit(this.gesture, s));
    }
  }
  onend(s) {
    this.emit("end", s), this.gesture === null && this.emit("click", this.startEvent);
  }
  on(s, i) {
    if (!(i instanceof Function))
      return;
    const { events: n } = this;
    let r = n[s];
    r || (r = n[s] = []), r.push(i);
  }
  emit(s, i) {
    const n = this.events[s];
    if (n)
      try {
        for (const r of n)
          r(i);
      } catch (r) {
        console.error(r);
      }
  }
  parent() {
    t.gesture = void 0, t = t.parentPointer, t.onstart(this.startEvent, this);
  }
  switch(s) {
    t.gesture = void 0, t = s, t.onstart(this.startEvent, this);
  }
  use(s) {
    return s(this);
  }
}
d || (a.setAttribute("style", "position: fixed; z-index: 10000000; left: 0; right: 0; top: 0; bottom: 0; display: none;"), a.addEventListener("mousemove", (o) => t.onmove(o, o)), a.addEventListener("mouseup", (o) => {
  t.onend(o), t.gesture === null && t.target.click(), h.display = "none", t = void 0;
}), document.body.appendChild(a), window.addEventListener("blur", () => {
  h.display = "none", t = void 0;
}));
export {
  p as DisableEvent,
  v as GetPointer,
  a as Mask,
  m as SetPointer,
  f as default,
  d as isTouch
};
