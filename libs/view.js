const { language: v, languages: L } = window.VIEW;
function P(n) {
  return n[v] || n.en;
}
function T(n) {
  const t = {};
  for (const e in n) {
    const o = n[e];
    t[e] = o[v] || o.en;
  }
  return t;
}
function E(n = "") {
  const t = {}, [e, o] = n.split("?");
  if (o) {
    const i = o.split("&");
    for (const s of i) {
      const [a, x] = s.split("=");
      t[a.trim()] = x.trim();
    }
  }
  return { path: e, query: t };
}
const b = 16, w = 390, S = w + b, f = {};
let u = S;
const $ = w / 2;
for (let n = 100; n <= 500; n += 50)
  f[n] = u, u = u + $;
const j = window.innerWidth < 850 ? "single" : "multi", p = location.hash || "/", V = `${location.origin}`, q = "/view-ui/apps/", { path: C, query: A } = E(`${p}${location.search}`), c = {}, D = {}, d = sessionStorage[p], M = d ? d.split(",") : void 0, { userAgent: r } = navigator;
let l;
r.indexOf("Chrome") > -1 ? l = "Chrome" : r.indexOf("Safari") > -1 ? l = "Safari" : r.indexOf("Firefox") > -1 ? l = "Firefox" : r.indexOf("MSIE") > -1 && (l = "IE");
const m = document.querySelector('meta[name="theme-color"]');
function k(n) {
  m && m.setAttribute("content", n);
}
Object.assign(window.VIEW, {
  path: C,
  pathname: p,
  query: A,
  initDataPromise: void 0,
  instance: void 0,
  swiper: void 0,
  initOptions: void 0
});
const H = window.VIEW;
function N(n) {
  let t = "";
  for (const o in n) {
    const i = n[o];
    i && (t += `${o}: ${i};`);
  }
  const e = document.createElement("style");
  e.innerHTML = `:root {${t}}`, document.body.appendChild(e);
}
const { toString: h, hasOwnProperty: W } = Object.prototype;
function O(n, t) {
  for (const e in t)
    if (W.call(n, e)) {
      const o = t[e], i = n[e];
      h.call(o) === "[object Object]" && h.call(i) === "[object Object]" && O(i, o);
    } else
      n[e] = t[e];
}
function R(n) {
  const t = n.extends === void 0 ? "default" : n.extends;
  if (typeof t == "string") {
    const e = c[t];
    if (e) {
      const { brand: o, main: i, apps: s, multi: a } = e;
      O(n, { brand: o, main: i, apps: s, multi: a });
    }
  }
  return n;
}
function U(n) {
  const t = n.split("/");
  for (t.pop(); t.length; ) {
    const e = c[t.join("/")];
    if (e)
      return e;
    t.pop();
  }
}
function F(n) {
  let t, e = "";
  const o = n.split("/");
  for (const i of o) {
    e.length ? e += `/${i}` : e += i;
    const s = c[e];
    s && (t = s);
  }
  return t;
}
function _(n) {
  let [t, e] = n.split("?");
  const [o] = t;
  (o === "/" || o === "#") && (t = t.slice(1));
  const i = c[t];
  if (i)
    return i;
  {
    let s = F(t);
    return s === void 0 && (s = {
      url: t,
      app: {
        src: t,
        name: t,
        level: 100,
        icon: "ficon-wendang",
        color: "#6fdfa5"
      },
      icon: "ficon-wendang",
      color: "#6fdfa5"
    }, c[t] = s), s;
  }
}
function g(n) {
  const { styles: t } = n;
  if (t && t.lock === void 0) {
    t.lock = !0;
    const e = t.join("");
    if (e) {
      const o = document.createElement("style");
      o.innerText = e, document.head.appendChild(o);
    }
  }
}
async function y(n) {
  return import(
    /* @vite-ignore */
    `${q}${n}.js`
  ).then(({ default: t }) => {
    {
      g(t);
      const { components: e } = t;
      if (e)
        for (const o in e)
          g(e[o]);
    }
    return t;
  });
}
async function z(n) {
  return n.endsWith("*") && (n = n.slice(0, -1) + j), y(n).catch((t) => (console.error("\u5E94\u7528\u7EC4\u4EF6\u52A0\u8F7D\u5931\u8D25", t), y("404")));
}
function B(n) {
  let t = 100;
  for (const e in f) {
    if (n <= f[e])
      return t;
    t = Number(e);
  }
  return t;
}
class I {
  container = {};
  on(t, e) {
    if (!(e instanceof Function))
      return;
    const { container: o } = this;
    let i = o[t];
    i === void 0 && (i = o[t] = []), i.push(e);
  }
  emit(t, ...e) {
    const o = this.container[t];
    if (o) {
      const i = [];
      try {
        for (const s of o)
          i.push(s(...e));
      } catch (s) {
        console.error(s);
      }
      return i;
    }
  }
}
const G = new I();
export {
  I as Events,
  P as Lang,
  T as Langs,
  l as UA,
  N as addRootStyleVar,
  q as appPath,
  V as baseURL,
  g as createStyle,
  H as default,
  G as events,
  R as extendsOptions,
  b as gap,
  _ as getAppOptions,
  F as getChildOptions,
  B as getLevel,
  U as getParentOptions,
  z as importApp,
  y as importComponent,
  D as instances,
  v as language,
  L as languages,
  S as minAppWidith,
  w as minViewWidith,
  j as mode,
  C as path,
  p as pathname,
  A as query,
  k as setThemeColor,
  M as urlHistory,
  E as urlParse,
  c as urls,
  f as widths
};
