import { resolveComponent as c, openBlock as n, createElementBlock as l, Fragment as r, createVNode as v, withCtx as p, createStaticVNode as h, pushScopeId as u, popScopeId as g, createElementVNode as o } from "/demo/libs/vue.js";
const b = `.navbar-github a[data-v-1d65a844]{display:flex;justify-content:center;align-items:center}.navbar-github a i[data-v-1d65a844]{font-size:24px;color:#fff}.github ul[data-v-1d65a844]{padding:0 10px}.github ul li[data-v-1d65a844]{display:block;padding:20px 15px;margin:10px 0;border-radius:6px;border:1px solid #e7e7e7}.github ul li a[data-v-1d65a844]{display:block}.github ul li a h3 i[data-v-1d65a844]{float:right;font-size:13px}.github ul li a .description[data-v-1d65a844]{margin-top:14px}
`, f = (a, i) => {
  const t = a.__vccOpts || a;
  for (const [d, e] of i)
    t[d] = e;
  return t;
}, _ = {
  style: {
    background: "#fff"
  }
}, x = (a) => (u("data-v-1d65a844"), a = a(), g(), a), m = /* @__PURE__ */ x(() => /* @__PURE__ */ o("a", {
  href: "https://github.com/lixiangio",
  target: "_blank"
}, [
  /* @__PURE__ */ o("i", { class: "ficon-github" })
], -1)), k = /* @__PURE__ */ h('<div class="github" data-v-1d65a844><ul data-v-1d65a844><li data-v-1d65a844><a href="https://github.com/view-ui-js/view-ui" target="_blank" data-v-1d65a844><h3 data-v-1d65a844> View UI <i class="ficon-xinchuangkou" data-v-1d65a844></i></h3><div class="description" data-v-1d65a844> \u79FB\u52A8\u7AEF\u4F18\u5148\u3001\u54CD\u5E94\u5F0F\u3001\u8F7B\u91CF\u7EA7\u7684\u5FAE\u524D\u7AEF\u57FA\u7840\u5E94\u7528\u6846\u67B6\u3002 </div></a></li><li data-v-1d65a844><a href="https://github.com/lixiangio/typea" target="_blank" data-v-1d65a844><h3 data-v-1d65a844> Typea <i class="ficon-xinchuangkou" data-v-1d65a844></i></h3><div class="description" data-v-1d65a844> \u529F\u80FD\u5F3A\u5927\u7684 JS \u8FD0\u884C\u65F6\u6570\u636E\u9A8C\u8BC1\u4E0E\u8F6C\u6362\u5668\uFF0C\u4F7F\u7528\u5168\u955C\u50CF\u7684\u5BF9\u79F0\u6570\u636E\u7ED3\u6784\u6A21\u578B\uFF0C\u8F7B\u91CF\u7EA7\u3001\u7B80\u5355\u3001\u76F4\u89C2\u3001\u6613\u4E8E\u8BFB\u5199\u3002 </div></a></li><li data-v-1d65a844><a href="https://github.com/lixiangio/ormv" target="_blank" data-v-1d65a844><h3 data-v-1d65a844> Typeq <i class="ficon-xinchuangkou" data-v-1d65a844></i></h3><div class="description" data-v-1d65a844> \u9002\u7528\u4E8E Postgresql\u3001CockroachDB\u3001Materialize \u6570\u636E\u5E93\u7684\u7B80\u5355\u3001\u8F7B\u91CF\u7EA7 ORM\u3002 </div></a></li><li data-v-1d65a844><a href="https://github.com/ioajs/apip" target="_blank" data-v-1d65a844><h3 data-v-1d65a844> Apip <i class="ficon-xinchuangkou" data-v-1d65a844></i></h3><div class="description" data-v-1d65a844> \u4E13\u4E3A Serverless \u73AF\u5883\u6784\u5EFA\uFF0C\u57FA\u4E8E\u4E8B\u4EF6\u7684\u8F7B\u91CF\u7EA7\u5FAE\u578B\u6846\u67B6\uFF0C\u4EE5 Koa Context \u4F5C\u4E3A\u901A\u7528\u6570\u636E\u4EA4\u4E92\u6807\u51C6\uFF0C\u66FF\u6362\u5E76\u517C\u5BB9 Koa.js \u4E2D\u95F4\u4EF6\u751F\u6001\u3002 </div></a></li></ul></div>', 1);
function y(a, i, t, d, e, S) {
  const s = c("Navbar");
  return n(), l(r, null, [
    v(s, {
      class: "navbar-github",
      title: "GitHub",
      style: { background: "#24292f", "border-bottom": "1px solid #24292f", color: "#fff" }
    }, {
      default: p(() => [
        m
      ]),
      _: 1
    }),
    k
  ], 64);
}
const I = /* @__PURE__ */ f(_, [["render", y], ["styles", [b]], ["__scopeId", "data-v-1d65a844"]]);
export {
  I as default
};
