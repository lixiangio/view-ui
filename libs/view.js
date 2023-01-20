import { defineAsyncComponent as O } from "/view-ui/libs/vue.js";
const $ = window.innerWidth < 850 ? "single" : "split", { language: v, languages: W } = window.VIEW, I = 16, c = 390;
function L(t) {
  return t[v] || t.en;
}
function T(t) {
  const n = {};
  for (const e in t) {
    const o = t[e];
    n[e] = o[v] || o.en;
  }
  return n;
}
const p = {
  100: c,
  150: c * 1.5,
  200: c * 2,
  250: c * 2.5,
  300: c * 3,
  350: c * 3.5,
  400: c * 4,
  450: c * 4.5,
  500: c * 5
}, d = location.hash || "/", N = `${location.origin}`, w = "/view-ui/apps/", { path: b, query: j } = q(`${d}${location.search}`), l = {}, P = {}, m = sessionStorage[d], V = m ? m.split(",") : void 0, { userAgent: f } = navigator;
let u;
f.indexOf("Chrome") > -1 ? u = "Chrome" : f.indexOf("Safari") > -1 ? u = "Safari" : f.indexOf("Firefox") > -1 ? u = "Firefox" : f.indexOf("MSIE") > -1 && (u = "IE");
const h = document.querySelector('meta[name="theme-color"]');
function F(t) {
  h && h.setAttribute("content", t);
}
Object.assign(window.VIEW, {
  path: b,
  pathname: d,
  query: j,
  initDataPromise: void 0,
  instance: void 0,
  swiper: void 0,
  initOptions: void 0
});
const M = window.VIEW;
function C(t) {
  let n = "";
  for (const o in t) {
    const i = t[o];
    i && (n += `${o}: ${i};`);
  }
  const e = document.createElement("style");
  e.innerHTML = `:root {${n}}`, document.body.appendChild(e);
}
const { toString: g } = Object.prototype;
function U(t) {
  const n = t.extends;
  if (n === void 0 || typeof n == "string") {
    const o = l[n || "default"];
    for (const i in o) {
      const s = o[i], r = t[i];
      if (r === void 0)
        t[i] = s;
      else if (g.call(s) === "[object Object]" && g.call(r) === "[object Object]")
        for (const a in s)
          r[a] === void 0 && (r[a] = s[a]);
    }
  }
  return t.var && C(t.var), t;
}
function k(t) {
  const n = t.split("/");
  for (n.pop(); n.length; ) {
    const e = l[n.join("/")];
    if (e)
      return e;
    n.pop();
  }
}
function S(t) {
  let n, e = "";
  const o = t.split("/");
  for (const i of o) {
    e.length ? e += `/${i}` : e += i;
    const s = l[e];
    s && (n = s);
  }
  return n;
}
function H(t) {
  let [n, e] = t.split("?");
  const [o] = n;
  (o === "/" || o === "#") && (n = n.slice(1));
  const i = l[n];
  if (i)
    return i;
  {
    let s = S(n);
    return s === void 0 && (s = {
      url: n,
      app: {
        src: n,
        name: n,
        level: 100,
        icon: "ficon-wendang",
        color: "#6fdfa5"
      },
      icon: "ficon-wendang",
      color: "#6fdfa5"
    }, l[n] = s), s;
  }
}
function q(t = "") {
  const [n, e] = t.split("?"), o = {};
  if (e) {
    const i = e.split("&");
    for (const s of i) {
      const [r, a] = s.split("=");
      o[r.trim()] = a.trim();
    }
  }
  return { path: n, query: o };
}
function y(t) {
  const { styles: n } = t;
  if (n && n.lock === void 0) {
    n.lock = !0;
    const e = n.join("");
    if (e) {
      const o = document.createElement("style");
      o.innerText = e, document.head.appendChild(o);
    }
  }
}
const x = () => import(
  /* @vite-ignore */
  `${w}404.js`
), R = O(x);
async function D(t) {
  return t.endsWith("*") && (t = t.slice(0, -1) + $), import(
    /* @vite-ignore */
    `${w}${t}.js`
  ).catch((n) => (console.error(n, t), x())).then(({ default: n }) => {
    {
      y(n);
      const { components: e } = n;
      if (e)
        for (const o in e)
          y(e[o]);
    }
    return n;
  });
}
function _(t) {
  let n = 100;
  for (const e in p) {
    if (t <= p[e])
      return n;
    n = Number(e);
  }
  return n;
}
class E {
  container = {};
  on(n, e) {
    if (!(e instanceof Function))
      return;
    const { container: o } = this;
    let i = o[n];
    i || (i = o[n] = []), i.push(e);
  }
  emit(n, ...e) {
    const o = this.container[n];
    if (o)
      try {
        for (const i of o)
          i(...e);
      } catch (i) {
        console.error(i);
      }
  }
}
const z = new E();
export {
  E as Events,
  L as Lang,
  T as Langs,
  u as UA,
  q as UrlParse,
  y as addStyle,
  w as appPath,
  R as asyncComponent404,
  N as baseURL,
  M as default,
  z as events,
  U as extendsOptions,
  I as gap,
  H as getAppOptions,
  S as getChildOptions,
  _ as getLevel,
  k as getParentOptions,
  D as importAsyncComponent,
  P as instances,
  v as language,
  W as languages,
  c as minAppWidith,
  $ as mode,
  b as path,
  d as pathname,
  j as query,
  F as setThemeColor,
  V as urlHistory,
  l as urls,
  p as widths
};
