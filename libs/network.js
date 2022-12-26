var j = { exports: {} }, qe = function(e, n) {
  return function() {
    for (var t = new Array(arguments.length), s = 0; s < t.length; s++)
      t[s] = arguments[s];
    return e.apply(n, t);
  };
}, Je = qe, E = Object.prototype.toString;
function Z(r) {
  return E.call(r) === "[object Array]";
}
function G(r) {
  return typeof r > "u";
}
function ze(r) {
  return r !== null && !G(r) && r.constructor !== null && !G(r.constructor) && typeof r.constructor.isBuffer == "function" && r.constructor.isBuffer(r);
}
function Ve(r) {
  return E.call(r) === "[object ArrayBuffer]";
}
function Ke(r) {
  return typeof FormData < "u" && r instanceof FormData;
}
function Xe(r) {
  var e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(r) : e = r && r.buffer && r.buffer instanceof ArrayBuffer, e;
}
function We(r) {
  return typeof r == "string";
}
function Ge(r) {
  return typeof r == "number";
}
function Ne(r) {
  return r !== null && typeof r == "object";
}
function q(r) {
  if (E.call(r) !== "[object Object]")
    return !1;
  var e = Object.getPrototypeOf(r);
  return e === null || e === Object.prototype;
}
function Ye(r) {
  return E.call(r) === "[object Date]";
}
function Ze(r) {
  return E.call(r) === "[object File]";
}
function Qe(r) {
  return E.call(r) === "[object Blob]";
}
function je(r) {
  return E.call(r) === "[object Function]";
}
function er(r) {
  return Ne(r) && je(r.pipe);
}
function rr(r) {
  return typeof URLSearchParams < "u" && r instanceof URLSearchParams;
}
function tr(r) {
  return r.trim ? r.trim() : r.replace(/^\s+|\s+$/g, "");
}
function nr() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function Q(r, e) {
  if (!(r === null || typeof r > "u"))
    if (typeof r != "object" && (r = [r]), Z(r))
      for (var n = 0, a = r.length; n < a; n++)
        e.call(null, r[n], n, r);
    else
      for (var t in r)
        Object.prototype.hasOwnProperty.call(r, t) && e.call(null, r[t], t, r);
}
function Y() {
  var r = {};
  function e(t, s) {
    q(r[s]) && q(t) ? r[s] = Y(r[s], t) : q(t) ? r[s] = Y({}, t) : Z(t) ? r[s] = t.slice() : r[s] = t;
  }
  for (var n = 0, a = arguments.length; n < a; n++)
    Q(arguments[n], e);
  return r;
}
function ar(r, e, n) {
  return Q(e, function(t, s) {
    n && typeof t == "function" ? r[s] = Je(t, n) : r[s] = t;
  }), r;
}
function sr(r) {
  return r.charCodeAt(0) === 65279 && (r = r.slice(1)), r;
}
var v = {
  isArray: Z,
  isArrayBuffer: Ve,
  isBuffer: ze,
  isFormData: Ke,
  isArrayBufferView: Xe,
  isString: We,
  isNumber: Ge,
  isObject: Ne,
  isPlainObject: q,
  isUndefined: G,
  isDate: Ye,
  isFile: Ze,
  isBlob: Qe,
  isFunction: je,
  isStream: er,
  isURLSearchParams: rr,
  isStandardBrowserEnv: nr,
  forEach: Q,
  merge: Y,
  extend: ar,
  trim: tr,
  stripBOM: sr
}, g = v;
function se(r) {
  return encodeURIComponent(r).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Pe = function(e, n, a) {
  if (!n)
    return e;
  var t;
  if (a)
    t = a(n);
  else if (g.isURLSearchParams(n))
    t = n.toString();
  else {
    var s = [];
    g.forEach(n, function(l, i) {
      l === null || typeof l > "u" || (g.isArray(l) ? i = i + "[]" : l = [l], g.forEach(l, function(h) {
        g.isDate(h) ? h = h.toISOString() : g.isObject(h) && (h = JSON.stringify(h)), s.push(se(i) + "=" + se(h));
      }));
    }), t = s.join("&");
  }
  if (t) {
    var o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + t;
  }
  return e;
}, ir = v;
function P() {
  this.handlers = [];
}
P.prototype.use = function(e, n, a) {
  return this.handlers.push({
    fulfilled: e,
    rejected: n,
    synchronous: a ? a.synchronous : !1,
    runWhen: a ? a.runWhen : null
  }), this.handlers.length - 1;
};
P.prototype.eject = function(e) {
  this.handlers[e] && (this.handlers[e] = null);
};
P.prototype.forEach = function(e) {
  ir.forEach(this.handlers, function(a) {
    a !== null && e(a);
  });
};
var or = P, ur = v, fr = function(e, n) {
  ur.forEach(e, function(t, s) {
    s !== n && s.toUpperCase() === n.toUpperCase() && (e[n] = t, delete e[s]);
  });
}, Te = function(e, n, a, t, s) {
  return e.config = n, a && (e.code = a), e.request = t, e.response = s, e.isAxiosError = !0, e.toJSON = function() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code
    };
  }, e;
}, k, ie;
function Ue() {
  if (ie)
    return k;
  ie = 1;
  var r = Te;
  return k = function(n, a, t, s, o) {
    var u = new Error(n);
    return r(u, a, t, s, o);
  }, k;
}
var L, oe;
function cr() {
  if (oe)
    return L;
  oe = 1;
  var r = Ue();
  return L = function(n, a, t) {
    var s = t.config.validateStatus;
    !t.status || !s || s(t.status) ? n(t) : a(r(
      "Request failed with status code " + t.status,
      t.config,
      null,
      t.request,
      t
    ));
  }, L;
}
var B, ue;
function lr() {
  if (ue)
    return B;
  ue = 1;
  var r = v;
  return B = r.isStandardBrowserEnv() ? function() {
    return {
      write: function(a, t, s, o, u, l) {
        var i = [];
        i.push(a + "=" + encodeURIComponent(t)), r.isNumber(s) && i.push("expires=" + new Date(s).toGMTString()), r.isString(o) && i.push("path=" + o), r.isString(u) && i.push("domain=" + u), l === !0 && i.push("secure"), document.cookie = i.join("; ");
      },
      read: function(a) {
        var t = document.cookie.match(new RegExp("(^|;\\s*)(" + a + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove: function(a) {
        this.write(a, "", Date.now() - 864e5);
      }
    };
  }() : function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }(), B;
}
var D, fe;
function dr() {
  return fe || (fe = 1, D = function(e) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
  }), D;
}
var $, ce;
function hr() {
  return ce || (ce = 1, $ = function(e, n) {
    return n ? e.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : e;
  }), $;
}
var I, le;
function pr() {
  if (le)
    return I;
  le = 1;
  var r = dr(), e = hr();
  return I = function(a, t) {
    return a && !r(t) ? e(a, t) : t;
  }, I;
}
var F, de;
function mr() {
  if (de)
    return F;
  de = 1;
  var r = v, e = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ];
  return F = function(a) {
    var t = {}, s, o, u;
    return a && r.forEach(a.split(`
`), function(i) {
      if (u = i.indexOf(":"), s = r.trim(i.substr(0, u)).toLowerCase(), o = r.trim(i.substr(u + 1)), s) {
        if (t[s] && e.indexOf(s) >= 0)
          return;
        s === "set-cookie" ? t[s] = (t[s] ? t[s] : []).concat([o]) : t[s] = t[s] ? t[s] + ", " + o : o;
      }
    }), t;
  }, F;
}
var H, he;
function vr() {
  if (he)
    return H;
  he = 1;
  var r = v;
  return H = r.isStandardBrowserEnv() ? function() {
    var n = /(msie|trident)/i.test(navigator.userAgent), a = document.createElement("a"), t;
    function s(o) {
      var u = o;
      return n && (a.setAttribute("href", u), u = a.href), a.setAttribute("href", u), {
        href: a.href,
        protocol: a.protocol ? a.protocol.replace(/:$/, "") : "",
        host: a.host,
        search: a.search ? a.search.replace(/^\?/, "") : "",
        hash: a.hash ? a.hash.replace(/^#/, "") : "",
        hostname: a.hostname,
        port: a.port,
        pathname: a.pathname.charAt(0) === "/" ? a.pathname : "/" + a.pathname
      };
    }
    return t = s(window.location.href), function(u) {
      var l = r.isString(u) ? s(u) : u;
      return l.protocol === t.protocol && l.host === t.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), H;
}
var M, pe;
function me() {
  if (pe)
    return M;
  pe = 1;
  var r = v, e = cr(), n = lr(), a = Pe, t = pr(), s = mr(), o = vr(), u = Ue();
  return M = function(i) {
    return new Promise(function(h, d) {
      var c = i.data, C = i.headers, S = i.responseType;
      r.isFormData(c) && delete C["Content-Type"];
      var f = new XMLHttpRequest();
      if (i.auth) {
        var Me = i.auth.username || "", _e = i.auth.password ? unescape(encodeURIComponent(i.auth.password)) : "";
        C.Authorization = "Basic " + btoa(Me + ":" + _e);
      }
      var te = t(i.baseURL, i.url);
      f.open(i.method.toUpperCase(), a(te, i.params, i.paramsSerializer), !0), f.timeout = i.timeout;
      function ne() {
        if (!!f) {
          var w = "getAllResponseHeaders" in f ? s(f.getAllResponseHeaders()) : null, b = !S || S === "text" || S === "json" ? f.responseText : f.response, O = {
            data: b,
            status: f.status,
            statusText: f.statusText,
            headers: w,
            config: i,
            request: f
          };
          e(h, d, O), f = null;
        }
      }
      if ("onloadend" in f ? f.onloadend = ne : f.onreadystatechange = function() {
        !f || f.readyState !== 4 || f.status === 0 && !(f.responseURL && f.responseURL.indexOf("file:") === 0) || setTimeout(ne);
      }, f.onabort = function() {
        !f || (d(u("Request aborted", i, "ECONNABORTED", f)), f = null);
      }, f.onerror = function() {
        d(u("Network Error", i, null, f)), f = null;
      }, f.ontimeout = function() {
        var b = "timeout of " + i.timeout + "ms exceeded";
        i.timeoutErrorMessage && (b = i.timeoutErrorMessage), d(u(
          b,
          i,
          i.transitional && i.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
          f
        )), f = null;
      }, r.isStandardBrowserEnv()) {
        var ae = (i.withCredentials || o(te)) && i.xsrfCookieName ? n.read(i.xsrfCookieName) : void 0;
        ae && (C[i.xsrfHeaderName] = ae);
      }
      "setRequestHeader" in f && r.forEach(C, function(b, O) {
        typeof c > "u" && O.toLowerCase() === "content-type" ? delete C[O] : f.setRequestHeader(O, b);
      }), r.isUndefined(i.withCredentials) || (f.withCredentials = !!i.withCredentials), S && S !== "json" && (f.responseType = i.responseType), typeof i.onDownloadProgress == "function" && f.addEventListener("progress", i.onDownloadProgress), typeof i.onUploadProgress == "function" && f.upload && f.upload.addEventListener("progress", i.onUploadProgress), i.cancelToken && i.cancelToken.promise.then(function(b) {
        !f || (f.abort(), d(b), f = null);
      }), c || (c = null), f.send(c);
    });
  }, M;
}
var p = v, ve = fr, yr = Te, br = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function ye(r, e) {
  !p.isUndefined(r) && p.isUndefined(r["Content-Type"]) && (r["Content-Type"] = e);
}
function wr() {
  var r;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (r = me()), r;
}
function Er(r, e, n) {
  if (p.isString(r))
    try {
      return (e || JSON.parse)(r), p.trim(r);
    } catch (a) {
      if (a.name !== "SyntaxError")
        throw a;
    }
  return (n || JSON.stringify)(r);
}
var T = {
  transitional: {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
  },
  adapter: wr(),
  transformRequest: [function(e, n) {
    return ve(n, "Accept"), ve(n, "Content-Type"), p.isFormData(e) || p.isArrayBuffer(e) || p.isBuffer(e) || p.isStream(e) || p.isFile(e) || p.isBlob(e) ? e : p.isArrayBufferView(e) ? e.buffer : p.isURLSearchParams(e) ? (ye(n, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : p.isObject(e) || n && n["Content-Type"] === "application/json" ? (ye(n, "application/json"), Er(e)) : e;
  }],
  transformResponse: [function(e) {
    var n = this.transitional, a = n && n.silentJSONParsing, t = n && n.forcedJSONParsing, s = !a && this.responseType === "json";
    if (s || t && p.isString(e) && e.length)
      try {
        return JSON.parse(e);
      } catch (o) {
        if (s)
          throw o.name === "SyntaxError" ? yr(o, this, "E_JSON_PARSE") : o;
      }
    return e;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  }
};
T.headers = {
  common: {
    Accept: "application/json, text/plain, */*"
  }
};
p.forEach(["delete", "get", "head"], function(e) {
  T.headers[e] = {};
});
p.forEach(["post", "put", "patch"], function(e) {
  T.headers[e] = p.merge(br);
});
var ee = T, gr = v, xr = ee, Rr = function(e, n, a) {
  var t = this || xr;
  return gr.forEach(a, function(o) {
    e = o.call(t, e, n);
  }), e;
}, _, be;
function ke() {
  return be || (be = 1, _ = function(e) {
    return !!(e && e.__CANCEL__);
  }), _;
}
var we = v, J = Rr, Cr = ke(), Sr = ee;
function z(r) {
  r.cancelToken && r.cancelToken.throwIfRequested();
}
var Or = function(e) {
  z(e), e.headers = e.headers || {}, e.data = J.call(
    e,
    e.data,
    e.headers,
    e.transformRequest
  ), e.headers = we.merge(
    e.headers.common || {},
    e.headers[e.method] || {},
    e.headers
  ), we.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(t) {
      delete e.headers[t];
    }
  );
  var n = e.adapter || Sr.adapter;
  return n(e).then(function(t) {
    return z(e), t.data = J.call(
      e,
      t.data,
      t.headers,
      e.transformResponse
    ), t;
  }, function(t) {
    return Cr(t) || (z(e), t && t.response && (t.response.data = J.call(
      e,
      t.response.data,
      t.response.headers,
      e.transformResponse
    ))), Promise.reject(t);
  });
}, m = v, Le = function(e, n) {
  n = n || {};
  var a = {}, t = ["url", "method", "data"], s = ["headers", "auth", "proxy", "params"], o = [
    "baseURL",
    "transformRequest",
    "transformResponse",
    "paramsSerializer",
    "timeout",
    "timeoutMessage",
    "withCredentials",
    "adapter",
    "responseType",
    "xsrfCookieName",
    "xsrfHeaderName",
    "onUploadProgress",
    "onDownloadProgress",
    "decompress",
    "maxContentLength",
    "maxBodyLength",
    "maxRedirects",
    "transport",
    "httpAgent",
    "httpsAgent",
    "cancelToken",
    "socketPath",
    "responseEncoding"
  ], u = ["validateStatus"];
  function l(d, c) {
    return m.isPlainObject(d) && m.isPlainObject(c) ? m.merge(d, c) : m.isPlainObject(c) ? m.merge({}, c) : m.isArray(c) ? c.slice() : c;
  }
  function i(d) {
    m.isUndefined(n[d]) ? m.isUndefined(e[d]) || (a[d] = l(void 0, e[d])) : a[d] = l(e[d], n[d]);
  }
  m.forEach(t, function(c) {
    m.isUndefined(n[c]) || (a[c] = l(void 0, n[c]));
  }), m.forEach(s, i), m.forEach(o, function(c) {
    m.isUndefined(n[c]) ? m.isUndefined(e[c]) || (a[c] = l(void 0, e[c])) : a[c] = l(void 0, n[c]);
  }), m.forEach(u, function(c) {
    c in n ? a[c] = l(e[c], n[c]) : c in e && (a[c] = l(void 0, e[c]));
  });
  var R = t.concat(s).concat(o).concat(u), h = Object.keys(e).concat(Object.keys(n)).filter(function(c) {
    return R.indexOf(c) === -1;
  });
  return m.forEach(h, i), a;
};
const Ar = "axios", qr = "0.21.4", Nr = "Promise based HTTP client for the browser and node.js", jr = "index.js", Pr = {
  test: "grunt test",
  start: "node ./sandbox/server.js",
  build: "NODE_ENV=production grunt build",
  preversion: "npm test",
  version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
  postversion: "git push && git push --tags",
  examples: "node ./examples/server.js",
  coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
  fix: "eslint --fix lib/**/*.js"
}, Tr = {
  type: "git",
  url: "https://github.com/axios/axios.git"
}, Ur = [
  "xhr",
  "http",
  "ajax",
  "promise",
  "node"
], kr = "Matt Zabriskie", Lr = "MIT", Br = {
  url: "https://github.com/axios/axios/issues"
}, Dr = "https://axios-http.com", $r = {
  coveralls: "^3.0.0",
  "es6-promise": "^4.2.4",
  grunt: "^1.3.0",
  "grunt-banner": "^0.6.0",
  "grunt-cli": "^1.2.0",
  "grunt-contrib-clean": "^1.1.0",
  "grunt-contrib-watch": "^1.0.0",
  "grunt-eslint": "^23.0.0",
  "grunt-karma": "^4.0.0",
  "grunt-mocha-test": "^0.13.3",
  "grunt-ts": "^6.0.0-beta.19",
  "grunt-webpack": "^4.0.2",
  "istanbul-instrumenter-loader": "^1.0.0",
  "jasmine-core": "^2.4.1",
  karma: "^6.3.2",
  "karma-chrome-launcher": "^3.1.0",
  "karma-firefox-launcher": "^2.1.0",
  "karma-jasmine": "^1.1.1",
  "karma-jasmine-ajax": "^0.1.13",
  "karma-safari-launcher": "^1.0.0",
  "karma-sauce-launcher": "^4.3.6",
  "karma-sinon": "^1.0.5",
  "karma-sourcemap-loader": "^0.3.8",
  "karma-webpack": "^4.0.2",
  "load-grunt-tasks": "^3.5.2",
  minimist: "^1.2.0",
  mocha: "^8.2.1",
  sinon: "^4.5.0",
  "terser-webpack-plugin": "^4.2.3",
  typescript: "^4.0.5",
  "url-search-params": "^0.10.0",
  webpack: "^4.44.2",
  "webpack-dev-server": "^3.11.0"
}, Ir = {
  "./lib/adapters/http.js": "./lib/adapters/xhr.js"
}, Fr = "dist/axios.min.js", Hr = "dist/axios.min.js", Mr = "./index.d.ts", _r = {
  "follow-redirects": "^1.14.0"
}, Jr = [
  {
    path: "./dist/axios.min.js",
    threshold: "5kB"
  }
], zr = {
  name: Ar,
  version: qr,
  description: Nr,
  main: jr,
  scripts: Pr,
  repository: Tr,
  keywords: Ur,
  author: kr,
  license: Lr,
  bugs: Br,
  homepage: Dr,
  devDependencies: $r,
  browser: Ir,
  jsdelivr: Fr,
  unpkg: Hr,
  typings: Mr,
  dependencies: _r,
  bundlesize: Jr
};
var Be = zr, re = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(r, e) {
  re[r] = function(a) {
    return typeof a === r || "a" + (e < 1 ? "n " : " ") + r;
  };
});
var Ee = {}, Vr = Be.version.split(".");
function De(r, e) {
  for (var n = e ? e.split(".") : Vr, a = r.split("."), t = 0; t < 3; t++) {
    if (n[t] > a[t])
      return !0;
    if (n[t] < a[t])
      return !1;
  }
  return !1;
}
re.transitional = function(e, n, a) {
  var t = n && De(n);
  function s(o, u) {
    return "[Axios v" + Be.version + "] Transitional option '" + o + "'" + u + (a ? ". " + a : "");
  }
  return function(o, u, l) {
    if (e === !1)
      throw new Error(s(u, " has been removed in " + n));
    return t && !Ee[u] && (Ee[u] = !0, console.warn(
      s(
        u,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(o, u, l) : !0;
  };
};
function Kr(r, e, n) {
  if (typeof r != "object")
    throw new TypeError("options must be an object");
  for (var a = Object.keys(r), t = a.length; t-- > 0; ) {
    var s = a[t], o = e[s];
    if (o) {
      var u = r[s], l = u === void 0 || o(u, s, r);
      if (l !== !0)
        throw new TypeError("option " + s + " must be " + l);
      continue;
    }
    if (n !== !0)
      throw Error("Unknown option " + s);
  }
}
var Xr = {
  isOlderVersion: De,
  assertOptions: Kr,
  validators: re
}, $e = v, Wr = Pe, ge = or, xe = Or, U = Le, Ie = Xr, x = Ie.validators;
function A(r) {
  this.defaults = r, this.interceptors = {
    request: new ge(),
    response: new ge()
  };
}
A.prototype.request = function(e) {
  typeof e == "string" ? (e = arguments[1] || {}, e.url = arguments[0]) : e = e || {}, e = U(this.defaults, e), e.method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
  var n = e.transitional;
  n !== void 0 && Ie.assertOptions(n, {
    silentJSONParsing: x.transitional(x.boolean, "1.0.0"),
    forcedJSONParsing: x.transitional(x.boolean, "1.0.0"),
    clarifyTimeoutError: x.transitional(x.boolean, "1.0.0")
  }, !1);
  var a = [], t = !0;
  this.interceptors.request.forEach(function(d) {
    typeof d.runWhen == "function" && d.runWhen(e) === !1 || (t = t && d.synchronous, a.unshift(d.fulfilled, d.rejected));
  });
  var s = [];
  this.interceptors.response.forEach(function(d) {
    s.push(d.fulfilled, d.rejected);
  });
  var o;
  if (!t) {
    var u = [xe, void 0];
    for (Array.prototype.unshift.apply(u, a), u = u.concat(s), o = Promise.resolve(e); u.length; )
      o = o.then(u.shift(), u.shift());
    return o;
  }
  for (var l = e; a.length; ) {
    var i = a.shift(), R = a.shift();
    try {
      l = i(l);
    } catch (h) {
      R(h);
      break;
    }
  }
  try {
    o = xe(l);
  } catch (h) {
    return Promise.reject(h);
  }
  for (; s.length; )
    o = o.then(s.shift(), s.shift());
  return o;
};
A.prototype.getUri = function(e) {
  return e = U(this.defaults, e), Wr(e.url, e.params, e.paramsSerializer).replace(/^\?/, "");
};
$e.forEach(["delete", "get", "head", "options"], function(e) {
  A.prototype[e] = function(n, a) {
    return this.request(U(a || {}, {
      method: e,
      url: n,
      data: (a || {}).data
    }));
  };
});
$e.forEach(["post", "put", "patch"], function(e) {
  A.prototype[e] = function(n, a, t) {
    return this.request(U(t || {}, {
      method: e,
      url: n,
      data: a
    }));
  };
});
var Gr = A, V, Re;
function Fe() {
  if (Re)
    return V;
  Re = 1;
  function r(e) {
    this.message = e;
  }
  return r.prototype.toString = function() {
    return "Cancel" + (this.message ? ": " + this.message : "");
  }, r.prototype.__CANCEL__ = !0, V = r, V;
}
var K, Ce;
function Yr() {
  if (Ce)
    return K;
  Ce = 1;
  var r = Fe();
  function e(n) {
    if (typeof n != "function")
      throw new TypeError("executor must be a function.");
    var a;
    this.promise = new Promise(function(o) {
      a = o;
    });
    var t = this;
    n(function(o) {
      t.reason || (t.reason = new r(o), a(t.reason));
    });
  }
  return e.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, e.source = function() {
    var a, t = new e(function(o) {
      a = o;
    });
    return {
      token: t,
      cancel: a
    };
  }, K = e, K;
}
var X, Se;
function Zr() {
  return Se || (Se = 1, X = function(e) {
    return function(a) {
      return e.apply(null, a);
    };
  }), X;
}
var W, Oe;
function Qr() {
  return Oe || (Oe = 1, W = function(e) {
    return typeof e == "object" && e.isAxiosError === !0;
  }), W;
}
var Ae = v, et = qe, N = Gr, rt = Le, tt = ee;
function He(r) {
  var e = new N(r), n = et(N.prototype.request, e);
  return Ae.extend(n, N.prototype, e), Ae.extend(n, e), n;
}
var y = He(tt);
y.Axios = N;
y.create = function(e) {
  return He(rt(y.defaults, e));
};
y.Cancel = Fe();
y.CancelToken = Yr();
y.isCancel = ke();
y.all = function(e) {
  return Promise.all(e);
};
y.spread = Zr();
y.isAxiosError = Qr();
j.exports = y;
j.exports.default = y;
j.exports.interceptors.response.use((r) => {
  const { data: e } = r;
  return e;
});
const nt = j.exports;
export {
  nt as default
};
