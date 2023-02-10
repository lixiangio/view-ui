import { openApp as u, components as r } from "/libs/state.js";
import f, { instances as i, urlParse as a, getAppOptions as m, events as c, importComponent as d, urls as h } from "/libs/view.js";
function O(n) {
  const { path: t, query: e } = a(n), o = m(t);
  if (o.app) {
    let s;
    u(o) && (s = i[o.url]), c.emit("opening", n, o, s);
  } else if (o.custom) {
    const { url: s, custom: p } = o;
    r[s] === void 0 ? p.src && d(p.src).then((l) => r[s] = l) : c.emit(s, !0);
  } else
    g(n);
}
function g(n) {
  n = `#${n}`, window.open(n, "_blank");
}
function b(n) {
  const t = h[n];
  if (t) {
    const e = i[t.url];
    delete i[n], e && c.emit("closing", e);
  }
}
function y(n) {
  delete i[n.options.url], c.emit("closing", n);
}
function A(n) {
  const t = `#${n}`;
  history.pushState({ url: t }, "", t);
}
window.addEventListener("beforeunload", () => {
  const n = Object.values(i);
  n.sort((e, o) => e.left - o.left);
  const t = [];
  for (const { options: e } of n)
    t.push(e.url);
  sessionStorage[f.pathname] = t.join();
});
export {
  b as close,
  y as closeInstance,
  O as open,
  g as openBlank,
  A as pushState
};
