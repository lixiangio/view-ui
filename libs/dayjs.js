var z = 60, J = z * 60, V = J * 24, Q = V * 7, I = 1e3, W = z * I, k = J * I, B = V * I, K = Q * I, j = "millisecond", C = "second", w = "minute", A = "hour", M = "day", Y = "week", l = "month", P = "quarter", y = "year", E = "date", X = "YYYY-MM-DDTHH:mm:ssZ", Z = "Invalid Date", q = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, tt = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const rt = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var x = function(t, r, e) {
  var n = String(t);
  return !n || n.length >= r ? t : "" + Array(r + 1 - n.length).join(e) + t;
}, et = function(t) {
  var r = -t.utcOffset(), e = Math.abs(r), n = Math.floor(e / 60), a = e % 60;
  return (r <= 0 ? "+" : "-") + x(n, 2, "0") + ":" + x(a, 2, "0");
}, nt = function u(t, r) {
  if (t.date() < r.date())
    return -u(r, t);
  var e = (r.year() - t.year()) * 12 + (r.month() - t.month()), n = t.clone().add(e, l), a = r - n < 0, i = t.clone().add(e + (a ? -1 : 1), l);
  return +(-(e + (r - n) / (a ? n - i : i - n)) || 0);
}, at = function(t) {
  return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
}, it = function(t) {
  var r = {
    M: l,
    y,
    w: Y,
    d: M,
    D: E,
    h: A,
    m: w,
    s: C,
    ms: j,
    Q: P
  };
  return r[t] || String(t || "").toLowerCase().replace(/s$/, "");
}, st = function(t) {
  return t === void 0;
};
const ut = {
  s: x,
  z: et,
  m: nt,
  a: at,
  p: it,
  u: st
};
var N = "en", O = {};
O[N] = rt;
var R = function(t) {
  return t instanceof U;
}, F = function(t, r, e) {
  var n;
  if (!t)
    return N;
  if (typeof t == "string")
    O[t] && (n = t), r && (O[t] = r, n = t);
  else {
    var a = t.name;
    O[a] = t, n = a;
  }
  return !e && n && (N = n), n || !e && N;
}, $ = function(t, r) {
  if (R(t))
    return t.clone();
  var e = typeof r == "object" ? r : {};
  return e.date = t, e.args = arguments, new U(e);
}, ot = function(t, r) {
  return $(t, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
  });
}, s = ut;
s.l = F;
s.i = R;
s.w = ot;
var ft = function(t) {
  var r = t.date, e = t.utc;
  if (r === null)
    return new Date(NaN);
  if (s.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var n = r.match(q);
    if (n) {
      var a = n[2] - 1 || 0, i = (n[7] || "0").substring(0, 3);
      return e ? new Date(Date.UTC(n[1], a, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, i)) : new Date(n[1], a, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, i);
    }
  }
  return new Date(r);
}, U = /* @__PURE__ */ function() {
  function u(r) {
    this.$L = F(r.locale, null, !0), this.parse(r);
  }
  var t = u.prototype;
  return t.parse = function(e) {
    this.$d = ft(e), this.$x = e.x || {}, this.init();
  }, t.init = function() {
    var e = this.$d;
    this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds();
  }, t.$utils = function() {
    return s;
  }, t.isValid = function() {
    return this.$d.toString() !== Z;
  }, t.isSame = function(e, n) {
    var a = $(e);
    return this.startOf(n) <= a && a <= this.endOf(n);
  }, t.isAfter = function(e, n) {
    return $(e) < this.startOf(n);
  }, t.isBefore = function(e, n) {
    return this.endOf(n) < $(e);
  }, t.$g = function(e, n, a) {
    return s.u(e) ? this[n] : this.set(a, e);
  }, t.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, t.valueOf = function() {
    return this.$d.getTime();
  }, t.startOf = function(e, n) {
    var a = this, i = s.u(n) ? !0 : n, h = s.p(e), o = function(g, S) {
      var d = s.w(a.$u ? Date.UTC(a.$y, S, g) : new Date(a.$y, S, g), a);
      return i ? d : d.endOf(M);
    }, c = function(g, S) {
      var d = [0, 0, 0, 0], p = [23, 59, 59, 999];
      return s.w(a.toDate()[g].apply(
        a.toDate("s"),
        (i ? d : p).slice(S)
      ), a);
    }, f = this.$W, v = this.$M, m = this.$D, D = "set" + (this.$u ? "UTC" : "");
    switch (h) {
      case y:
        return i ? o(1, 0) : o(31, 11);
      case l:
        return i ? o(1, v) : o(0, v + 1);
      case Y: {
        var _ = this.$locale().weekStart || 0, L = (f < _ ? f + 7 : f) - _;
        return o(i ? m - L : m + (6 - L), v);
      }
      case M:
      case E:
        return c(D + "Hours", 0);
      case A:
        return c(D + "Minutes", 1);
      case w:
        return c(D + "Seconds", 2);
      case C:
        return c(D + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, t.endOf = function(e) {
    return this.startOf(e, !1);
  }, t.$set = function(e, n) {
    var a, i = s.p(e), h = "set" + (this.$u ? "UTC" : ""), o = (a = {}, a[M] = h + "Date", a[E] = h + "Date", a[l] = h + "Month", a[y] = h + "FullYear", a[A] = h + "Hours", a[w] = h + "Minutes", a[C] = h + "Seconds", a[j] = h + "Milliseconds", a)[i], c = i === M ? this.$D + (n - this.$W) : n;
    if (i === l || i === y) {
      var f = this.clone().set(E, 1);
      f.$d[o](c), f.init(), this.$d = f.set(E, Math.min(this.$D, f.daysInMonth())).$d;
    } else
      o && this.$d[o](c);
    return this.init(), this;
  }, t.set = function(e, n) {
    return this.clone().$set(e, n);
  }, t.get = function(e) {
    return this[s.p(e)]();
  }, t.add = function(e, n) {
    var a = this, i;
    e = Number(e);
    var h = s.p(n), o = function(m) {
      var D = $(a);
      return s.w(D.date(D.date() + Math.round(m * e)), a);
    };
    if (h === l)
      return this.set(l, this.$M + e);
    if (h === y)
      return this.set(y, this.$y + e);
    if (h === M)
      return o(1);
    if (h === Y)
      return o(7);
    var c = (i = {}, i[w] = W, i[A] = k, i[C] = I, i)[h] || 1, f = this.$d.getTime() + e * c;
    return s.w(f, this);
  }, t.subtract = function(e, n) {
    return this.add(e * -1, n);
  }, t.format = function(e) {
    var n = this, a = this.$locale();
    if (!this.isValid())
      return a.invalidDate || Z;
    var i = e || X, h = s.z(this), o = this.$H, c = this.$m, f = this.$M, v = a.weekdays, m = a.months, D = a.meridiem, _ = function(d, p, H, G) {
      return d && (d[p] || d(n, i)) || H[p].substr(0, G);
    }, L = function(d) {
      return s.s(o % 12 || 12, d, "0");
    }, T = D || function(S, d, p) {
      var H = S < 12 ? "AM" : "PM";
      return p ? H.toLowerCase() : H;
    }, g = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: f + 1,
      MM: s.s(f + 1, 2, "0"),
      MMM: _(a.monthsShort, f, m, 3),
      MMMM: _(m, f),
      D: this.$D,
      DD: s.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: _(a.weekdaysMin, this.$W, v, 2),
      ddd: _(a.weekdaysShort, this.$W, v, 3),
      dddd: v[this.$W],
      H: String(o),
      HH: s.s(o, 2, "0"),
      h: L(1),
      hh: L(2),
      a: T(o, c, !0),
      A: T(o, c, !1),
      m: String(c),
      mm: s.s(c, 2, "0"),
      s: String(this.$s),
      ss: s.s(this.$s, 2, "0"),
      SSS: s.s(this.$ms, 3, "0"),
      Z: h
    };
    return i.replace(tt, function(S, d) {
      return d || g[S] || h.replace(":", "");
    });
  }, t.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, t.diff = function(e, n, a) {
    var i, h = s.p(n), o = $(e), c = (o.utcOffset() - this.utcOffset()) * W, f = this - o, v = s.m(this, o);
    return v = (i = {}, i[y] = v / 12, i[l] = v, i[P] = v / 3, i[Y] = (f - c) / K, i[M] = (f - c) / B, i[A] = f / k, i[w] = f / W, i[C] = f / I, i)[h] || f, a ? v : s.a(v);
  }, t.daysInMonth = function() {
    return this.endOf(l).$D;
  }, t.$locale = function() {
    return O[this.$L];
  }, t.locale = function(e, n) {
    if (!e)
      return this.$L;
    var a = this.clone(), i = F(e, n, !0);
    return i && (a.$L = i), a;
  }, t.clone = function() {
    return s.w(this.$d, this);
  }, t.toDate = function() {
    return new Date(this.valueOf());
  }, t.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, t.toISOString = function() {
    return this.$d.toISOString();
  }, t.toString = function() {
    return this.$d.toUTCString();
  }, u;
}(), b = U.prototype;
$.prototype = b;
[["$ms", j], ["$s", C], ["$m", w], ["$H", A], ["$W", M], ["$M", l], ["$y", y], ["$D", E]].forEach(function(u) {
  b[u[1]] = function(t) {
    return this.$g(t, u[0], u[1]);
  };
});
$.extend = function(u, t) {
  return u.$i || (u(t, U, $), u.$i = !0), $;
};
$.locale = F;
$.isDayjs = R;
$.unix = function(u) {
  return $(u * 1e3);
};
$.en = O[N];
$.Ls = O;
$.p = {};
export {
  $ as default
};
