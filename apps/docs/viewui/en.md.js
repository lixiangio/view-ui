import { defineComponent as i, openBlock as t, createElementBlock as a, createStaticVNode as n } from "/view-ui/libs/vue.js";
const o = { class: "markdown-body" }, s = /* @__PURE__ */ n("<h1>View UI</h1><p>Lightweight cross-terminated, responsive micro-application development platform that enables consistent design, development and usage experience across multiple ends by unifying the interaction logic of the mobile end in all end devices.</p><p>Using the current mainstream traditional vertical screen cell phones as the basis for adaptation, and through window cascading, tiling, stretching and other typesetting methods, to achieve a wide range of adaptations for folding screens, pads, PCs, headsets and other terminal devices.</p><blockquote><p>The project is in the early experimental and exploratory stage, some functions are not yet stable and perfect, for reference only.</p></blockquote><h2>Features</h2><ul><li><p>Support multi-application split-screen display, which can give full play to the display advantages of widescreen by creating virtual partitions in the window to display multiple applications at the same time.</p></li><li><p>Support elastic stretching and gesture switching of application windows in widescreen mode, maximizing the use of the free visual area in the widescreen.</p></li><li><p>support for logical layered display, where applications can be freely mounted between the main application layer (fixed full-screen), sub-application layers (floating, elastic split-screen) and the mask layer.</p></li><li><p>using an inheritable dynamic application registry, inheritance enables configuration item reuse and dynamic registry avoids the need to recompile after each configuration modification.</p></li><li><p>support for direct access to unregistered applications, which can be dynamically loaded via file paths without pre-defined routing.</p></li><li><p>support for differential rendering of different terminal environments, with optional homogeneous or heterogeneous pattern matching to achieve local differential adaptation.</p></li><li><p>Support mouse gestures to maintain a consistent user operating experience across multiple terminals and avoid unnecessary learning and adaptation costs.</p></li><li><p>Support cross IFrame gesture operations to maintain the consistency of overall interaction behavior (not valid across domains).</p></li><li><p>Event-based cross-application data bus to realize data flow between multiple applications and reduce system coupling (mainly for independently packaged applications).</p></li><li><p>can be used with applications or websites with conventional layouts to extend the new interactive interface without destroying the main layout of the original project.</p></li><li><p>support React, Solid and other frameworks for developing sub-applications (only DOM nodes for custom mounts are provided).</p></li><li><p>built on Vite, the main application is developed using Vue 3, and the sub-application is a Vue component by default.</p></li><li><p>support for partially responsive page layouts as a transition solution until CSS @container features are widely compatible.</p></li><li><p>the platform as a whole consists of three parts: application base, micro-application and public dependencies, all three of which can be built and released independently.</p></li><li><p>Isolation of public components and routing among different sub-applications, with each sub-application having independent Router and Navigator instances.</p></li><li><p>Built-in simple and lightweight sub-application isolation scheme, supporting ES Component, Shadow DOM, IFrame three options.</p></li><li><p>Integrated PWA offline cache, installable to the desktop.</p></li></ul><h2>What are the problems with the traditional multi-terminal responsive layout?</h2><p>In the traditional multi-terminal responsive layout based on CSS @media screen, one of the PC or mobile terminals is usually selected as the main adaptation target, and other secondary terminals often choose to compromise, and it is technically difficult to achieve real Take care of everything.</p><p>Although traditional responsive layouts can also achieve highly differentiated interaction effects, this is often accompanied by strong coupling of codes and a large amount of redundant codes, resulting in a situation where multi-terminal codes are entangled with each other. With the differentiation and complexity of the system The constant increase of the degree will eventually produce unmaintainable code.</p><p>In actual application cases, traditional responsive layouts are mainly used in some relatively simple cross-platform differentiated layouts and interactive scenarios, and there are still obvious limitations in complex scenarios.</p><h2>How does View UI solve the problem of multi-terminal adaptation?</h2><p>At present, a set of codes adapts to multiple terminals, and the main problem is how to achieve differentiated compatibility with different screen sizes. The idea of View UI to try to solve the above problems is to develop a universal virtual window with a unified standard for the multi-terminal environment (using the same Virtual screen with minimum size and interactive logic), no or less differentiated code is used to maintain the overall consistency and reliability of application behavior, and reduce the complexity of the system while reducing the amount of application layer code.</p><p>Second, it is necessary to unify the differences in interactive behavior between different input devices. Consistent screen size needs to be matched with consistent input behaviors to produce a consistent user experience across terminals. View UI provides a Pointer module as a unified input event proxy layer to smooth out the behavior differences of different types of pointing devices such as mice and touch screens.</p><p>Although the project is developed based on the WEB platform, the idea of multi-terminal adaptation is not limited to the WEB environment, so it is also applicable to developers of other application platforms.</p><h2>public dependency libraries</h2><blockquote><p>All api are imported as npm modules and can be extended as needed.</p></blockquote><h3>vue</h3><p>The original npm module for vue</p><h3>components</h3><p>Public base component repository</p><h3>helper</h3><p>Public tool functions</p><h3>network</h3><p>Network services, based on axios wrapper</p><h3>state</h3><p>Global responsive state management</p><h3>navigator</h3><p>Global navigation-related properties, methods</p><h2>routing</h2><p>View UI uses a custom lightweight, flat, dynamic routing scheme (since the official Vue routing does not match many of the application scenarios and requirements in this project, custom routing is the more logical choice).</p><h3>Dynamic parameter handling</h3>", 31), l = [
  s
], h = { title: "View UI" }, u = "", m = /* @__PURE__ */ i({
  __name: "en",
  setup(r, { expose: e }) {
    return e({ frontmatter: { title: "View UI" }, excerpt: void 0 }), (p, c) => (t(), a("div", o, l));
  }
});
export {
  m as default,
  u as excerpt,
  h as frontmatter
};
