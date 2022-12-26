import a, { instances as s, UrlParse as c, getAppOptions as r, events as i } from "/dist/libs/view.js";
import { openApp as f, openMask as l } from "/dist/libs/state.js";
function u(n) {
  n = `#${n}`, window.open(n, "_blank");
}
function h(n) {
  const { path: e, query: o } = c(n), t = r(e);
  if (t.app) {
    let p;
    f(t) && (p = s[t.url]), a.query = o, i.emit("opening", n, t, p);
  } else
    t.mask ? l(t) : u(n);
}
function w(n) {
  const e = s[n];
  delete s[n], i.emit("closing", e);
}
function g(n) {
  delete s[n.options.url], i.emit("closing", n);
}
function k(n) {
  const e = `#${n}`;
  history.pushState({ url: e }, "", e);
}
window.addEventListener("beforeunload", () => {
  const n = Object.values(s);
  n.sort((o, t) => o.left - t.left);
  const e = [];
  for (const { options: o } of n)
    e.push(o.url);
  sessionStorage[a.pathname] = e.join();
});
window.addEventListener("popstate", function(n) {
  n.state;
}, !1);
export {
  w as close,
  g as closeInstance,
  h as open,
  u as openBlank,
  k as pushState
};
