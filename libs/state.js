import { ref as s, reactive as t } from "/dist/libs/vue.js";
const u = s(!0), i = s(!1), f = t({});
function l(e) {
  i.value = !0, Object.assign(f, e);
}
function p() {
  i.value = !1;
}
const v = s(!1), o = s(!1);
function d() {
  u.value === !0 && (o.value = !o.value);
}
const c = t([]);
function m(e) {
  if (e.icon) {
    const n = c.indexOf(e);
    n > -1 && c.splice(n, 1), c.push(e);
  }
}
const a = t([]);
function h(e) {
  const n = a.includes(e);
  return n === !1 && a.push(e), n;
}
const k = t([]);
export {
  m as addHistory,
  a as apps,
  u as appsState,
  p as closeMask,
  o as controlbar,
  d as controllerSwitch,
  c as historys,
  f as maskOptions,
  i as maskState,
  k as menu,
  h as openApp,
  l as openMask,
  v as overview
};
