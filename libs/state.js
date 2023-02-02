import { ref as t, shallowReactive as r, reactive as c } from "/view-ui/libs/vue.js";
const l = t(!1), u = r({}), a = t(!0), p = t(!1), o = t(!1);
function v() {
  a.value === !0 && (o.value = !o.value);
}
const s = c([]);
function d(e) {
  if (e.icon) {
    const n = s.indexOf(e);
    n > -1 && s.splice(n, 1), s.push(e);
  }
}
const i = c([]);
function h(e) {
  const n = i.includes(e);
  return n === !1 && i.push(e), n;
}
const m = c([]);
export {
  d as addHistory,
  i as apps,
  a as appsState,
  u as components,
  o as controlbar,
  v as controllerSwitch,
  s as historys,
  l as isInit,
  m as menu,
  h as openApp,
  p as overview
};
