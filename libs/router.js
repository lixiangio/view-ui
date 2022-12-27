import { UrlParse as h, instances as f } from "/view-ui/libs/view.js";
function u(r) {
  let { parentElement: t } = r;
  if (t)
    for (; t.parentElement; ) {
      if (t.back) {
        t.back();
        return;
      }
      t = t.parentElement;
    }
}
class b {
  el;
  app;
  options;
  container;
  pagesInstance;
  constructor({ el: t, app: s, options: a, container: e }) {
    this.el = t, this.app = s, this.container = e, this.options = a;
  }
  open(t) {
    const { path: s, query: a } = h(t), e = s.split("/");
    e[0] === "" && e.shift();
    let n = "";
    for (const i in e) {
      const o = e[i];
      n.length ? n += `/${o}` : n += o;
      const c = f[n];
      if (c) {
        if (c === this.container) {
          const l = e.slice(Number(i) + 1), { pagesInstance: p } = this;
          return p && p.router(l, a), !0;
        }
        break;
      }
    }
    return !1;
  }
  back(t) {
    u(t);
  }
}
export {
  u as back,
  b as default
};
