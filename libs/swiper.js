import g, { instances as a } from "/libs/view.js";
import { apps as L, appsState as v } from "/libs/state.js";
import { screenWidth as E } from "/libs/pointer.js";
const { MIN_SAFE_INTEGER: u, MAX_SAFE_INTEGER: c } = Number;
function M() {
  return window.innerWidth - g.initOptions.apps.padding[1];
}
function b() {
  const [m] = g.initOptions.apps.padding, s = M();
  let n = c, t = c, e, o;
  for (const i in a) {
    const f = a[i], { left: p, width: l } = f, h = m - p, r = Math.abs(h) - Math.abs(n);
    (r < 0 || r === 0 && h > n) && (n = h, e = f);
    const d = s - (p + l), w = Math.abs(d) - Math.abs(t);
    (w < 0 || w === 0 && d < t) && (t = d, o = f);
  }
  return Math.abs(n) <= Math.abs(t) ? {
    move: n,
    container: e
  } : {
    move: t,
    container: o
  };
}
class O {
  el;
  constructor(s) {
    this.el = s;
  }
  move(s) {
    for (const n in a) {
      const t = a[n];
      t.left += s;
      const { style: e } = t.$el;
      e.transition = "unset", e.transform = `translate3d(${t.left}px, 0, 0)`;
    }
  }
  scroll(s) {
    for (const n in a) {
      const t = a[n];
      t.left += s;
      const { style: e } = t.$el;
      e.transition = "", e.transform = `translate3d(${t.left}px, 0, 0)`;
    }
  }
  next() {
    if (L.length === 0) {
      v.value = !1;
      return;
    }
    const [s] = g.initOptions.apps.padding, n = M();
    let t = c, e = c, o = u;
    for (const p in a) {
      const { left: l, width: h } = a[p], r = l + h;
      r > o && (o = r), l > s && l < t && (t = l), r > n && r < e && (e = r);
    }
    const i = s - t, f = n - e;
    t === c ? e === c ? (v.value = !1, this.scroll(s - o)) : this.scroll(f) : e === c ? this.scroll(i) : i > f ? this.scroll(i) : this.scroll(f);
  }
  previous() {
    if (L.length === 0) {
      v.value = !1;
      return;
    }
    const [s] = g.initOptions.apps.padding, n = M();
    let t = u, e = u, o = c;
    for (const p in a) {
      const { left: l, width: h } = a[p];
      l < o && (o = l), l < s && l > t && (t = l);
      const r = l + h;
      r < n && r > e && (e = r);
    }
    const i = s - t, f = n - e;
    t === u ? e === u ? (v.value = !1, this.scroll(n - o)) : this.scroll(f) : e === u ? this.scroll(i) : i < f ? this.scroll(i) : this.scroll(f);
  }
  align() {
    const { move: s } = b();
    requestAnimationFrame(() => this.scroll(s));
  }
}
function B(m, { inertia: s }) {
  const n = "level";
  return (t) => {
    const e = new O(m);
    g.swiper = e, t.on(n, (o) => {
      const { screenX: i } = o;
      i ? i === E ? e.move(20) : e.move(t.move) : e.move(-20);
    }), t.on("end", (o) => {
      if (t.gesture !== n || o.timeStamp - t.moveEvent.timeStamp > 10)
        return;
      const { move: i } = t;
      i > s ? e.previous(i) : i < -s && e.next(i);
    });
  };
}
export {
  O as Swiper,
  B as default,
  b as getMinMove,
  M as getRightBaseLine
};
