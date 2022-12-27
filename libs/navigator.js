import a, { instances as s, UrlParse as c, getAppOptions as r, events as i, urls as f } from "/view-ui/libs/view.js";
import { openApp as l, openMask as u } from "/view-ui/libs/state.js";
function d(n) {
  n = `#${n}`, window.open(n, "_blank");
}
function w(n) {
  const { path: t, query: o } = c(n), e = r(t);
  if (e.app) {
    let p;
    l(e) && (p = s[e.url]), a.query = o, i.emit("opening", n, e, p);
  } else
    e.mask ? u(e) : d(n);
}
function g(n) {
  const t = f[n];
  if (t) {
    const o = s[t.url];
    delete s[n], i.emit("closing", o);
  }
}
function k(n) {
  delete s[n.options.url], i.emit("closing", n);
}
function v(n) {
  const t = `#${n}`;
  history.pushState({ url: t }, "", t);
}
window.addEventListener("beforeunload", () => {
  const n = Object.values(s);
  n.sort((o, e) => o.left - e.left);
  const t = [];
  for (const { options: o } of n)
    t.push(o.url);
  sessionStorage[a.pathname] = t.join();
});
window.addEventListener("popstate", function(n) {
  n.state;
}, !1);
export {
  g as close,
  k as closeInstance,
  w as open,
  d as openBlank,
  v as pushState
};
