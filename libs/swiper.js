import v, { instances as a, gap as E } from "/demo/libs/view.js";
import { apps as L, appsState as m } from "/demo/libs/state.js";
const { MIN_SAFE_INTEGER: u, MAX_SAFE_INTEGER: c } = Number;
function d() {
  return window.innerWidth - v.initOptions.apps.right;
}
function b() {
  const { left: g } = v.initOptions.apps, s = d();
  let n = c, t = c, e, l;
  for (const i in a) {
    const f = a[i], { left: p, width: o } = f, h = g - p, r = Math.abs(h) - Math.abs(n);
    (r < 0 || r === 0 && h > n) && (n = h, e = f);
    const M = s - (p + o), w = Math.abs(M) - Math.abs(t);
    (w < 0 || w === 0 && M < t) && (t = M, l = f);
  }
  return Math.abs(n) <= Math.abs(t) ? {
    move: n,
    container: e
  } : {
    move: t,
    container: l
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
      m.value = !1;
      return;
    }
    const { left: s } = v.initOptions.apps, n = d();
    let t = c, e = c, l = u;
    for (const p in a) {
      const { left: o, width: h } = a[p], r = o + h;
      r > l && (l = r), o > s && o < t && (t = o), r > n && r < e && (e = r);
    }
    const i = s - t, f = n - e;
    t === c ? e === c ? (m.value = !1, this.scroll(s - l - E)) : this.scroll(f) : e === c ? this.scroll(i) : i > f ? this.scroll(i) : this.scroll(f);
  }
  previous() {
    if (L.length === 0) {
      m.value = !1;
      return;
    }
    const { left: s } = v.initOptions.apps, n = d();
    let t = u, e = u, l = c;
    for (const p in a) {
      const { left: o, width: h } = a[p];
      o < l && (l = o), o < s && o > t && (t = o);
      const r = o + h;
      r < n && r > e && (e = r);
    }
    const i = s - t, f = n - e;
    t === u ? e === u ? (m.value = !1, this.scroll(n - l)) : this.scroll(f) : e === u ? this.scroll(i) : i < f ? this.scroll(i) : this.scroll(f);
  }
  align() {
    const { move: s } = b();
    requestAnimationFrame(() => this.scroll(s));
  }
}
function A(g, { inertia: s, gesture: n }) {
  return (t) => {
    const e = new O(g);
    v.swiper = e, t.on(n, () => e.move(t.move)), t.on("end", (l) => {
      if (t.gesture !== n || l.timeStamp - t.moveEvent.timeStamp > 10)
        return;
      const { move: i } = t;
      i > s ? e.previous(i) : i < -s && e.next(i);
    });
  };
}
export {
  O as Swiper,
  A as default,
  b as getMinMove,
  d as getRightBaseLine
};
