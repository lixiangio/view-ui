import { resolveComponent as f, openBlock as l, createElementBlock as d, Fragment as p, createVNode as m, withCtx as u, createElementVNode as e, renderList as _, createTextVNode as b, toDisplayString as h, pushScopeId as v, popScopeId as x } from "/libs/vue.js";
import { Lang as a } from "/libs/view.js";
const k = `.navbar-github a[data-v-4a2655a3]{display:flex;justify-content:center;align-items:center}.navbar-github a i[data-v-4a2655a3]{font-size:24px;color:#fff}.links a[data-v-4a2655a3]{display:block;padding:15px;margin:10px;border-radius:6px;border:1px solid #e7e7e7}.links a h3 i[data-v-4a2655a3]{float:right;font-size:13px}.links a .description[data-v-4a2655a3]{margin-top:14px;line-height:24px;font-size:14px}
`, y = (t, i) => {
  const o = t.__vccOpts || t;
  for (const [c, n] of i)
    o[c] = n;
  return o;
}, r = (t) => (v("data-v-4a2655a3"), t = t(), x(), t), w = /* @__PURE__ */ r(() => /* @__PURE__ */ e("div", { class: "navbar-center" }, "GitHub", -1)), z = /* @__PURE__ */ r(() => /* @__PURE__ */ e("a", {
  class: "navbar-right",
  href: "https://github.com/lixiangio",
  target: "_blank"
}, [
  /* @__PURE__ */ e("i", { class: "ficon-github" })
], -1)), S = { class: "links" }, C = ["href"], I = /* @__PURE__ */ r(() => /* @__PURE__ */ e("i", { class: "ficon-xinchuangkou" }, null, -1)), j = { class: "description" }, M = {
  app: {
    style: { background: "#fff" }
  }
}, N = /* @__PURE__ */ Object.assign(M, {
  __name: "index",
  setup(t) {
    const i = [
      {
        name: "View UI",
        href: "https://github.com/lixiangio/view-ui",
        description: a({
          zh: "\u79FB\u52A8\u7AEF\u4F18\u5148\u3001\u54CD\u5E94\u5F0F\u3001\u8F7B\u91CF\u7EA7\u7684\u5FAE\u524D\u7AEF\u57FA\u7840\u5E94\u7528\u6846\u67B6\u3002",
          en: "Mobile-first, responsive, lightweight micro-frontend basic application framework."
        })
      },
      {
        name: "Typea",
        href: "https://github.com/lixiangio/typea",
        description: a({
          zh: "\u529F\u80FD\u5F3A\u5927\u7684 JS \u8FD0\u884C\u65F6\u6570\u636E\u9A8C\u8BC1\u4E0E\u8F6C\u6362\u5668\uFF0C\u4F7F\u7528\u5168\u955C\u50CF\u7684\u5BF9\u79F0\u6570\u636E\u7ED3\u6784\u6A21\u578B\uFF0C\u8F7B\u91CF\u7EA7\u3001\u7B80\u5355\u3001\u76F4\u89C2\u3001\u6613\u4E8E\u8BFB\u5199\u3002",
          en: "Powerful JS runtime data validation and converter, using a fully mirrored symmetric data structure model, lightweight, simple, intuitive, easy to read and write."
        })
      },
      {
        name: "Typeq",
        href: "https://github.com/lixiangio/ormv",
        description: a({
          zh: "\u9002\u7528\u4E8E Postgresql\u3001CockroachDB\u3001Materialize \u6570\u636E\u5E93\u7684\u7B80\u5355\u3001\u8F7B\u91CF\u7EA7 ORM\u3002",
          en: "Simple, lightweight ORM for Postgresql, CockroachDB, Materialize databases."
        })
      },
      {
        name: "Apip",
        href: "https://github.com/ioajs/apip",
        description: a({
          zh: "\u4E13\u4E3A Serverless \u73AF\u5883\u6784\u5EFA\uFF0C\u57FA\u4E8E\u4E8B\u4EF6\u7684\u8F7B\u91CF\u7EA7\u5FAE\u578B\u6846\u67B6\uFF0C\u4EE5 Koa Context \u4F5C\u4E3A\u901A\u7528\u6570\u636E\u4EA4\u4E92\u6807\u51C6\uFF0C\u66FF\u6362\u5E76\u517C\u5BB9 Koa.js \u4E2D\u95F4\u4EF6\u751F\u6001\u3002",
          en: "It is an event-based lightweight micro-framework specially built for Serverless environments, using Koa Context as a general data interaction standard, replacing and compatible with the Koa.js middleware ecosystem."
        })
      }
    ];
    return (o, c) => {
      const n = f("Navbar");
      return l(), d(p, null, [
        m(n, {
          class: "navbar-github",
          style: { background: "#24292f", "border-bottom": "1px solid #24292f", color: "#fff" }
        }, {
          default: u(() => [
            w,
            z
          ]),
          _: 1
        }),
        e("div", S, [
          (l(), d(p, null, _(i, (s, g) => e("a", {
            key: g,
            href: s.href,
            target: "_blank"
          }, [
            e("h3", null, [
              b(h(s.name) + " ", 1),
              I
            ]),
            e("div", j, h(s.description), 1)
          ], 8, C)), 64))
        ])
      ], 64);
    };
  }
}), O = /* @__PURE__ */ y(N, [["styles", [k]], ["__scopeId", "data-v-4a2655a3"]]);
export {
  O as default
};
