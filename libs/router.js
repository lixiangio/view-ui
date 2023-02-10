import { urlParse as u, instances as f } from "/libs/view.js";
function b(r) {
  const t = new Event("back", { bubbles: !0 });
  r.parentElement.dispatchEvent(t);
}
class k {
  el;
  app;
  options;
  container;
  pagesInstance;
  constructor({ el: t, app: s, options: a, container: i }) {
    this.el = t, this.app = s, this.container = i, this.options = a;
  }
  open(t, s) {
    const { path: a, query: i } = u(t), e = a.split("/");
    e[0] === "" && e.shift();
    let n = "";
    for (const o in e) {
      const c = e[o];
      n.length ? n += `/${c}` : n += c;
      const p = f[n];
      if (p) {
        if (p === this.container) {
          const l = e.slice(Number(o) + 1), { pagesInstance: h } = this;
          return h && h.router(l, s, i), !0;
        }
        break;
      }
    }
    return !1;
  }
  back(t) {
    b(t);
  }
}
export {
  b as back,
  k as default
};
