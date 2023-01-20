import { resolveComponent as g, openBlock as c, createElementBlock as l, Fragment as d, createVNode as m, withCtx as u, createElementVNode as t, renderList as b, createTextVNode as _, toDisplayString as p, pushScopeId as v, popScopeId as x } from "/view-ui/libs/vue.js";
import { Lang as i } from "/view-ui/libs/view.js";
const k = `.navbar-github a[data-v-844bff54]{display:flex;justify-content:center;align-items:center}.navbar-github a i[data-v-844bff54]{font-size:24px;color:#fff}.links a[data-v-844bff54]{display:block;padding:20px 15px;margin:10px;border-radius:6px;border:1px solid #e7e7e7}.links a h3 i[data-v-844bff54]{float:right;font-size:13px}.links a .description[data-v-844bff54]{margin-top:14px;line-height:24px;font-size:14px}
`, y = (e, a) => {
  const o = e.__vccOpts || e;
  for (const [r, n] of a)
    o[r] = n;
  return o;
}, f = (e) => (v("data-v-844bff54"), e = e(), x(), e), w = /* @__PURE__ */ f(() => /* @__PURE__ */ t("a", {
  href: "https://github.com/lixiangio",
  target: "_blank"
}, [
  /* @__PURE__ */ t("i", { class: "ficon-github" })
], -1)), z = { class: "links" }, S = ["href"], C = /* @__PURE__ */ f(() => /* @__PURE__ */ t("i", { class: "ficon-xinchuangkou" }, null, -1)), I = { class: "description" }, j = {
  app: {
    style: {
      background: "#fff"
    }
  }
}, M = /* @__PURE__ */ Object.assign(j, {
  __name: "index",
  setup(e) {
    const a = [
      {
        name: "View UI",
        href: "https://github.com/lixiangio/view-ui",
        description: i({
          zh: "\u79FB\u52A8\u7AEF\u4F18\u5148\u3001\u54CD\u5E94\u5F0F\u3001\u8F7B\u91CF\u7EA7\u7684\u5FAE\u524D\u7AEF\u57FA\u7840\u5E94\u7528\u6846\u67B6\u3002",
          en: "Mobile-first, responsive, lightweight micro-frontend basic application framework."
        })
      },
      {
        name: "Typea",
        href: "https://github.com/lixiangio/typea",
        description: i({
          zh: "\u529F\u80FD\u5F3A\u5927\u7684 JS \u8FD0\u884C\u65F6\u6570\u636E\u9A8C\u8BC1\u4E0E\u8F6C\u6362\u5668\uFF0C\u4F7F\u7528\u5168\u955C\u50CF\u7684\u5BF9\u79F0\u6570\u636E\u7ED3\u6784\u6A21\u578B\uFF0C\u8F7B\u91CF\u7EA7\u3001\u7B80\u5355\u3001\u76F4\u89C2\u3001\u6613\u4E8E\u8BFB\u5199\u3002",
          en: "Powerful JS runtime data validation and converter, using a fully mirrored symmetric data structure model, lightweight, simple, intuitive, easy to read and write."
        })
      },
      {
        name: "Typeq",
        href: "https://github.com/lixiangio/ormv",
        description: i({
          zh: "\u9002\u7528\u4E8E Postgresql\u3001CockroachDB\u3001Materialize \u6570\u636E\u5E93\u7684\u7B80\u5355\u3001\u8F7B\u91CF\u7EA7 ORM\u3002",
          en: "Simple, lightweight ORM for Postgresql, CockroachDB, Materialize databases."
        })
      },
      {
        name: "Apip",
        href: "https://github.com/ioajs/apip",
        description: i({
          zh: "\u4E13\u4E3A Serverless \u73AF\u5883\u6784\u5EFA\uFF0C\u57FA\u4E8E\u4E8B\u4EF6\u7684\u8F7B\u91CF\u7EA7\u5FAE\u578B\u6846\u67B6\uFF0C\u4EE5 Koa Context \u4F5C\u4E3A\u901A\u7528\u6570\u636E\u4EA4\u4E92\u6807\u51C6\uFF0C\u66FF\u6362\u5E76\u517C\u5BB9 Koa.js \u4E2D\u95F4\u4EF6\u751F\u6001\u3002",
          en: "It is an event-based lightweight micro-framework specially built for Serverless environments, using Koa Context as a general data interaction standard, replacing and compatible with the Koa.js middleware ecosystem."
        })
      }
    ];
    return (o, r) => {
      const n = g("Navbar");
      return c(), l(d, null, [
        m(n, {
          class: "navbar-github",
          title: "GitHub",
          style: { background: "#24292f", "border-bottom": "1px solid #24292f", color: "#fff" }
        }, {
          default: u(() => [
            w
          ]),
          _: 1
        }),
        t("div", z, [
          (c(), l(d, null, b(a, (s, h) => t("a", {
            key: h,
            href: s.href,
            target: "_blank"
          }, [
            t("h3", null, [
              _(p(s.name) + " ", 1),
              C
            ]),
            t("div", I, p(s.description), 1)
          ], 8, S)), 64))
        ])
      ], 64);
    };
  }
}), K = /* @__PURE__ */ y(M, [["styles", [k]], ["__scopeId", "data-v-844bff54"]]);
export {
  K as default
};
