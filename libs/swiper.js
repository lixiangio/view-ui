import m, { instances as c, gap as E } from "/view-ui/libs/view.js";
import { apps as L, appsState as g } from "/view-ui/libs/state.js";
import { screenWidth as b } from "/view-ui/libs/pointer.js";
const { MIN_SAFE_INTEGER: u, MAX_SAFE_INTEGER: a } = Number;
function d() {
  return window.innerWidth - m.initOptions.apps.right;
}
function O() {
  const { left: v } = m.initOptions.apps, s = d();
  let n = a, t = a, e, o;
  for (const i in c) {
    const f = c[i], { left: p, width: l } = f, h = v - p, r = Math.abs(h) - Math.abs(n);
    (r < 0 || r === 0 && h > n) && (n = h, e = f);
    const M = s - (p + l), w = Math.abs(M) - Math.abs(t);
    (w < 0 || w === 0 && M < t) && (t = M, o = f);
  }
  return Math.abs(n) <= Math.abs(t) ? {
    move: n,
    container: e
  } : {
    move: t,
    container: o
  };
}
class S {
  el;
  constructor(s) {
    this.el = s;
  }
  move(s) {
    for (const n in c) {
      const t = c[n];
      t.left += s;
      const { style: e } = t.$el;
      e.transition = "unset", e.transform = `translate3d(${t.left}px, 0, 0)`;
    }
  }
  scroll(s) {
    for (const n in c) {
      const t = c[n];
      t.left += s;
      const { style: e } = t.$el;
      e.transition = "", e.transform = `translate3d(${t.left}px, 0, 0)`;
    }
  }
  next() {
    if (L.length === 0) {
      g.value = !1;
      return;
    }
    const { left: s } = m.initOptions.apps, n = d();
    let t = a, e = a, o = u;
    for (const p in c) {
      const { left: l, width: h } = c[p], r = l + h;
      r > o && (o = r), l > s && l < t && (t = l), r > n && r < e && (e = r);
    }
    const i = s - t, f = n - e;
    t === a ? e === a ? (g.value = !1, this.scroll(s - o - E)) : this.scroll(f) : e === a ? this.scroll(i) : i > f ? this.scroll(i) : this.scroll(f);
  }
  previous() {
    if (L.length === 0) {
      g.value = !1;
      return;
    }
    const { left: s } = m.initOptions.apps, n = d();
    let t = u, e = u, o = a;
    for (const p in c) {
      const { left: l, width: h } = c[p];
      l < o && (o = l), l < s && l > t && (t = l);
      const r = l + h;
      r < n && r > e && (e = r);
    }
    const i = s - t, f = n - e;
    t === u ? e === u ? (g.value = !1, this.scroll(n - o)) : this.scroll(f) : e === u ? this.scroll(i) : i < f ? this.scroll(i) : this.scroll(f);
  }
  align() {
    const { move: s } = O();
    requestAnimationFrame(() => this.scroll(s));
  }
}
function I(v, { inertia: s }) {
  const n = "level";
  return (t) => {
    const e = new S(v);
    m.swiper = e, t.on(n, (o) => {
      const { screenX: i } = o;
      i ? i === b ? e.move(16) : e.move(t.move) : e.move(-16);
    }), t.on("end", (o) => {
      if (t.gesture !== n || o.timeStamp - t.moveEvent.timeStamp > 10)
        return;
      const { move: i } = t;
      i > s ? e.previous(i) : i < -s && e.next(i);
    });
  };
}
export {
  S as Swiper,
  I as default,
  O as getMinMove,
  d as getRightBaseLine
};
