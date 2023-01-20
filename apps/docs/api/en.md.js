import { defineComponent as t, openBlock as o, createElementBlock as i, createStaticVNode as a } from "/view-ui/libs/vue.js";
const p = { class: "markdown-body" }, n = /* @__PURE__ */ a(`<h3>Public library</h3><h4>view</h4><p>A common collection of common shared properties and methods, directly accessible through the global variable VIEW.</p><pre><code class="language-js">import VIEW from &quot;view&quot;;
</code></pre><h4>state</h4><p>Shared reactive state and method collections;</p><h4>navigator</h4><p>application navigation;</p><h4>pointer</h4><p>Basic gesture recognition library, proxy pointer events, suitable for mouse and trackpad.</p><h4>swiper</h4><p>A swiper plug-in implemented based on the pointer library for application switching;</p><p>####viewui</p><p>view ui component library;</p><h4>network</h4><p>Network request encapsulation;</p><h3>Components</h3><p>The global basic component of the Vue sub-application, which is globally available in the Vue sub-application instance;</p><h4>A</h4><p>link jump</p><h4>Navbar</h4><p>App Navigation Bar</p><h4>Scroll</h4><p>scroll view container</p>`, 24), r = [
  n
], m = { title: "API Docs" }, d = "", u = /* @__PURE__ */ t({
  __name: "en",
  setup(c, { expose: e }) {
    return e({ frontmatter: { title: "API Docs" }, excerpt: void 0 }), (s, l) => (o(), i("div", p, r));
  }
});
export {
  u as default,
  d as excerpt,
  m as frontmatter
};
