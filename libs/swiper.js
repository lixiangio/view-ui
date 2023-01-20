import v, { instances as c, gap as E } from "/view-ui/libs/view.js";
import { apps as L, appsState as m } from "/view-ui/libs/state.js";
const { MIN_SAFE_INTEGER: u, MAX_SAFE_INTEGER: a } = Number;
function d() {
  return window.innerWidth - v.initOptions.apps.right;
}
function b() {
  const { left: g } = v.initOptions.apps, s = d();
  let n = a, e = a, t, o;
  for (const l in c) {
    const i = c[l], { left: p, width: r } = i, h = g - p, f = Math.abs(h) - Math.abs(n);
    (f < 0 || f === 0 && h > n) && (n = h, t = i);
    const M = s - (p + r), w = Math.abs(M) - Math.abs(e);
    (w < 0 || w === 0 && M < e) && (e = M, o = i);
  }
  return Math.abs(n) <= Math.abs(e) ? {
    move: n,
    container: t
  } : {
    move: e,
    container: o
  };
}
class O {
  el;
  constructor(s) {
    this.el = s;
  }
  move(s) {
    for (const n in c) {
      const e = c[n];
      e.left += s;
      const { style: t } = e.$el;
      t.transition = "unset", t.transform = `translate3d(${e.left}px, 0, 0)`;
    }
  }
  scroll(s) {
    for (const n in c) {
      const e = c[n];
      e.left += s;
      const { style: t } = e.$el;
      t.transition = "", t.transform = `translate3d(${e.left}px, 0, 0)`;
    }
  }
  next() {
    if (L.length === 0) {
      m.value = !1;
      return;
    }
    const { left: s } = v.initOptions.apps, n = d();
    let e = a, t = a, o = u;
    for (const p in c) {
      const { left: r, width: h } = c[p], f = r + h;
      f > o && (o = f), r > s && r < e && (e = r), f > n && f < t && (t = f);
    }
    const l = s - e, i = n - t;
    e === a ? t === a ? (m.value = !1, this.scroll(s - o - E)) : this.scroll(i) : t === a ? this.scroll(l) : l > i ? this.scroll(l) : this.scroll(i);
  }
  previous() {
    if (L.length === 0) {
      m.value = !1;
      return;
    }
    const { left: s } = v.initOptions.apps, n = d();
    let e = u, t = u, o = a;
    for (const p in c) {
      const { left: r, width: h } = c[p];
      r < o && (o = r), r < s && r > e && (e = r);
      const f = r + h;
      f < n && f > t && (t = f);
    }
    const l = s - e, i = n - t;
    e === u ? t === u ? (m.value = !1, this.scroll(n - o)) : this.scroll(i) : t === u ? this.scroll(l) : l < i ? this.scroll(l) : this.scroll(i);
  }
  align() {
    const { move: s } = b();
    requestAnimationFrame(() => this.scroll(s));
  }
}
function A(g, { inertia: s }) {
  const n = "level", e = window.screen.width - 1;
  return (t) => {
    const o = new O(g);
    v.swiper = o, t.on(n, (l) => {
      const { screenX: i } = l;
      i === 0 ? o.move(-20) : i === e ? o.move(20) : o.move(t.move);
    }), t.on("end", (l) => {
      if (t.gesture !== n || l.timeStamp - t.moveEvent.timeStamp > 10)
        return;
      const { move: i } = t;
      i > s ? o.previous(i) : i < -s && o.next(i);
    });
  };
}
export {
  O as Swiper,
  A as default,
  b as getMinMove,
  d as getRightBaseLine
};
