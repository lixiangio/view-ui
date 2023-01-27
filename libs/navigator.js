import c, { instances as s, UrlParse as a, getAppOptions as r, events as i, urls as f } from "/view-ui/libs/view.js";
import { openApp as l, openMask as u } from "/view-ui/libs/state.js";
function g(n) {
  const { path: t, query: o } = a(n), e = r(t);
  if (e.app) {
    let p;
    l(e) && (p = s[e.url]), i.emit("opening", n, e, p);
  } else
    e.mask ? u(e) : d(n);
}
function d(n) {
  n = `#${n}`, window.open(n, "_blank");
}
function k(n) {
  const t = f[n];
  if (t) {
    const o = s[t.url];
    delete s[n], i.emit("closing", o);
  }
}
function v(n) {
  delete s[n.options.url], i.emit("closing", n);
}
function O(n) {
  const t = `#${n}`;
  history.pushState({ url: t }, "", t);
}
window.addEventListener("beforeunload", () => {
  const n = Object.values(s);
  n.sort((o, e) => o.left - e.left);
  const t = [];
  for (const { options: o } of n)
    t.push(o.url);
  sessionStorage[c.pathname] = t.join();
});
window.addEventListener("popstate", function(n) {
  n.state;
}, !1);
export {
  k as close,
  v as closeInstance,
  g as open,
  d as openBlank,
  O as pushState
};
