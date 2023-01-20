import { defineComponent as F, openBlock as e, createElementBlock as t, createStaticVNode as E } from "/view-ui/libs/vue.js";
const o = { class: "markdown-body" }, p = /* @__PURE__ */ E(`<h3>\u516C\u5171\u5E93</h3><h4>view</h4><p>\u516C\u5171\u7684\u5E38\u7528\u5171\u4EAB\u5C5E\u6027\u548C\u65B9\u6CD5\u96C6\u5408\uFF0C\u53EF\u901A\u8FC7\u5168\u5C40\u53D8\u91CF VIEW \u76F4\u63A5\u8BBF\u95EE\u3002</p><pre><code class="language-js">import VIEW from &quot;view&quot;;
</code></pre><h4>state</h4><p>\u5171\u4EAB\u54CD\u5E94\u5F0F\u72B6\u6001\u548C\u65B9\u6CD5\u96C6\u5408\uFF1B</p><h4>navigator</h4><p>\u5E94\u7528\u5BFC\u822A\uFF1B</p><h4>pointer</h4><p>\u57FA\u7840\u624B\u52BF\u8BC6\u522B\u5E93\uFF0C\u4EE3\u7406\u6307\u9488\u4E8B\u4EF6\uFF0C\u9002\u7528\u4E8E\u9F20\u6807\u548C\u89E6\u63A7\u677F\u3002</p><h4>swiper</h4><p>\u57FA\u4E8E pointer \u5E93\u5B9E\u73B0\u7684 swiper \u63D2\u4EF6\uFF0C\u7528\u4E8E\u5E94\u7528\u5207\u6362\uFF1B</p><h4>viewui</h4><p>view ui \u7EC4\u4EF6\u5E93\uFF1B</p><h4>network</h4><p>\u7F51\u7EDC\u8BF7\u6C42\u5C01\u88C5\uFF1B</p><h3>Components</h3><p>Vue \u5B50\u5E94\u7528\u5168\u5C40\u57FA\u7840\u7EC4\u4EF6\uFF0C\u5728 Vue \u5B50\u5E94\u7528\u5B9E\u4F8B\u5185\u5168\u5C40\u53EF\u7528\uFF1B</p><h4>A</h4><p>\u94FE\u63A5\u8DF3\u8F6C</p><h4>Navbar</h4><p>\u5E94\u7528\u5BFC\u822A\u680F</p><h4>Scroll</h4><p>\u6EDA\u52A8\u89C6\u56FE\u5BB9\u5668</p>`, 24), C = [
  p
], c = { title: "API Docs" }, s = "", i = /* @__PURE__ */ F({
  __name: "zh",
  setup(B, { expose: u }) {
    return u({ frontmatter: { title: "API Docs" }, excerpt: void 0 }), (h, r) => (e(), t("div", o, C));
  }
});
export {
  i as default,
  s as excerpt,
  c as frontmatter
};
