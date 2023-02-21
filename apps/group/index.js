import { defineComponent as j, reactive as C, resolveComponent as u, openBlock as t, createElementBlock as n, Fragment as x, createVNode as f, unref as E, createElementVNode as e, renderList as v, withCtx as m, toDisplayString as y, normalizeStyle as I, pushScopeId as N, popScopeId as A } from "/libs/vue.js";
import B from "/libs/network.js";
import { Langs as L, urls as k } from "/libs/view.js";
const V = (o) => (N("data-v-6f3d39d4"), o = o(), A(), o), D = { class: "groups" }, F = { class: "header item" }, G = { class: "name" }, O = /* @__PURE__ */ V(() => /* @__PURE__ */ e("i", { class: "ficon-xinchuangkou" }, null, -1)), $ = ["xlink:href"], q = { class: "name" }, H = /* @__PURE__ */ j({
  __name: "index",
  setup(o) {
    const g = L({
      group: {
        en: "Group",
        zh: "\u5E94\u7528\u7EC4"
      }
    }), s = C({});
    return B.get("/api/group.json").then((l) => {
      for (const r of l) {
        const a = k[r], { apps: i } = a;
        if (i) {
          const d = { name: a.name };
          s[r] = d;
          const p = [];
          if (i.urls)
            for (const _ of i.urls) {
              const c = k[_];
              c && p.push(c);
            }
          d.items = p;
        }
      }
    }), (l, r) => {
      const a = u("Navbar"), i = u("icon"), d = u("Scroll"), p = u("A");
      return t(), n(x, null, [
        f(a, {
          title: E(g).group
        }, null, 8, ["title"]),
        e("div", D, [
          (t(!0), n(x, null, v(s, ({ name: _, items: c }, h) => (t(), n("div", {
            class: "group",
            key: h
          }, [
            f(p, {
              href: h,
              target: "_blank"
            }, {
              default: m(() => [
                e("div", F, [
                  e("div", G, y(_), 1),
                  O
                ]),
                f(d, null, {
                  default: m(() => [
                    e("ul", null, [
                      (t(!0), n(x, null, v(c, ({ name: b, icon: w, color: z }, S) => (t(), n("li", { key: S }, [
                        f(i, null, {
                          default: m(() => [
                            (t(), n("svg", {
                              class: "ficon",
                              "aria-hidden": "true",
                              style: I({ color: z })
                            }, [
                              e("use", {
                                "xlink:href": "#" + w
                              }, null, 8, $)
                            ], 4))
                          ]),
                          _: 2
                        }, 1024),
                        e("div", q, y(b), 1)
                      ]))), 128))
                    ])
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["href"])
          ]))), 128))
        ])
      ], 64);
    };
  }
}), J = `.groups .group[data-v-6f3d39d4]{display:block;margin:10px;padding:8px 3px;background:#f3f3f3c7;border-radius:10px}.groups .group .header[data-v-6f3d39d4]{display:flex;justify-content:space-between;padding:10px 12px}.groups .group .header .name[data-v-6f3d39d4]{font-size:15px;color:#444;font-weight:700}.groups .group .header i[data-v-6f3d39d4]{font-size:12px;color:#666;font-size:14px}.groups .group ul[data-v-6f3d39d4]{display:flex}.groups .group ul li[data-v-6f3d39d4]{display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden;margin:0 4px;flex:none;list-style:none;width:75px;height:100px}.groups .group ul li icon[data-v-6f3d39d4]{display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:#efefef;width:66px;height:66px;border-radius:18px;font-size:24px}.groups .group ul li icon .ficon[data-v-6f3d39d4]{width:32px;height:32px}.groups .group ul li .name[data-v-6f3d39d4]{margin-top:8px;font-size:12px}
`, K = (o, g) => {
  const s = o.__vccOpts || o;
  for (const [l, r] of g)
    s[l] = r;
  return s;
}, R = /* @__PURE__ */ K(H, [["styles", [J]], ["__scopeId", "data-v-6f3d39d4"]]);
export {
  R as default
};
