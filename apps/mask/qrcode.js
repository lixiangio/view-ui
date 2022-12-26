import { ref as O, onMounted as S, openBlock as H, createElementBlock as U, unref as k, createElementVNode as x, toDisplayString as F } from "/view-ui/libs/vue.js";
var B;
function I(t) {
  this.mode = p.MODE_8BIT_BYTE, this.data = t, this.parsedData = [];
  for (var e = 0, a = this.data.length; e < a; e++) {
    var r = [], n = this.data.charCodeAt(e);
    n > 65536 ? (r[0] = 240 | (n & 1835008) >>> 18, r[1] = 128 | (n & 258048) >>> 12, r[2] = 128 | (n & 4032) >>> 6, r[3] = 128 | n & 63) : n > 2048 ? (r[0] = 224 | (n & 61440) >>> 12, r[1] = 128 | (n & 4032) >>> 6, r[2] = 128 | n & 63) : n > 128 ? (r[0] = 192 | (n & 1984) >>> 6, r[1] = 128 | n & 63) : r[0] = n, this.parsedData.push(r);
  }
  this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239));
}
I.prototype = {
  getLength: function(t) {
    return this.parsedData.length;
  },
  write: function(t) {
    for (var e = 0, a = this.parsedData.length; e < a; e++)
      t.put(this.parsedData[e], 8);
  }
};
function E(t, e) {
  this.typeNumber = t, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = [];
}
E.prototype = { addData: function(t) {
  var e = new I(t);
  this.dataList.push(e), this.dataCache = null;
}, isDark: function(t, e) {
  if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e)
    throw new Error(t + "," + e);
  return this.modules[t][e];
}, getModuleCount: function() {
  return this.moduleCount;
}, make: function() {
  this.makeImpl(!1, this.getBestMaskPattern());
}, makeImpl: function(t, e) {
  this.moduleCount = this.typeNumber * 4 + 17, this.modules = new Array(this.moduleCount);
  for (var a = 0; a < this.moduleCount; a++) {
    this.modules[a] = new Array(this.moduleCount);
    for (var r = 0; r < this.moduleCount; r++)
      this.modules[a][r] = null;
  }
  this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(t, e), this.typeNumber >= 7 && this.setupTypeNumber(t), this.dataCache == null && (this.dataCache = E.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, e);
}, setupPositionProbePattern: function(t, e) {
  for (var a = -1; a <= 7; a++)
    if (!(t + a <= -1 || this.moduleCount <= t + a))
      for (var r = -1; r <= 7; r++)
        e + r <= -1 || this.moduleCount <= e + r || (0 <= a && a <= 6 && (r == 0 || r == 6) || 0 <= r && r <= 6 && (a == 0 || a == 6) || 2 <= a && a <= 4 && 2 <= r && r <= 4 ? this.modules[t + a][e + r] = !0 : this.modules[t + a][e + r] = !1);
}, getBestMaskPattern: function() {
  for (var t = 0, e = 0, a = 0; a < 8; a++) {
    this.makeImpl(!0, a);
    var r = f.getLostPoint(this);
    (a == 0 || t > r) && (t = r, e = a);
  }
  return e;
}, createMovieClip: function(t, e, a) {
  var r = t.createEmptyMovieClip(e, a), n = 1;
  this.make();
  for (var i = 0; i < this.modules.length; i++)
    for (var s = i * n, o = 0; o < this.modules[i].length; o++) {
      var h = o * n, l = this.modules[i][o];
      l && (r.beginFill(0, 100), r.moveTo(h, s), r.lineTo(h + n, s), r.lineTo(h + n, s + n), r.lineTo(h, s + n), r.endFill());
    }
  return r;
}, setupTimingPattern: function() {
  for (var t = 8; t < this.moduleCount - 8; t++)
    this.modules[t][6] == null && (this.modules[t][6] = t % 2 == 0);
  for (var e = 8; e < this.moduleCount - 8; e++)
    this.modules[6][e] == null && (this.modules[6][e] = e % 2 == 0);
}, setupPositionAdjustPattern: function() {
  for (var t = f.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++)
    for (var a = 0; a < t.length; a++) {
      var r = t[e], n = t[a];
      if (this.modules[r][n] == null)
        for (var i = -2; i <= 2; i++)
          for (var s = -2; s <= 2; s++)
            i == -2 || i == 2 || s == -2 || s == 2 || i == 0 && s == 0 ? this.modules[r + i][n + s] = !0 : this.modules[r + i][n + s] = !1;
    }
}, setupTypeNumber: function(t) {
  for (var e = f.getBCHTypeNumber(this.typeNumber), a = 0; a < 18; a++) {
    var r = !t && (e >> a & 1) == 1;
    this.modules[Math.floor(a / 3)][a % 3 + this.moduleCount - 8 - 3] = r;
  }
  for (var a = 0; a < 18; a++) {
    var r = !t && (e >> a & 1) == 1;
    this.modules[a % 3 + this.moduleCount - 8 - 3][Math.floor(a / 3)] = r;
  }
}, setupTypeInfo: function(t, e) {
  for (var a = this.errorCorrectLevel << 3 | e, r = f.getBCHTypeInfo(a), n = 0; n < 15; n++) {
    var i = !t && (r >> n & 1) == 1;
    n < 6 ? this.modules[n][8] = i : n < 8 ? this.modules[n + 1][8] = i : this.modules[this.moduleCount - 15 + n][8] = i;
  }
  for (var n = 0; n < 15; n++) {
    var i = !t && (r >> n & 1) == 1;
    n < 8 ? this.modules[8][this.moduleCount - n - 1] = i : n < 9 ? this.modules[8][15 - n - 1 + 1] = i : this.modules[8][15 - n - 1] = i;
  }
  this.modules[this.moduleCount - 8][8] = !t;
}, mapData: function(t, e) {
  for (var a = -1, r = this.moduleCount - 1, n = 7, i = 0, s = this.moduleCount - 1; s > 0; s -= 2)
    for (s == 6 && s--; ; ) {
      for (var o = 0; o < 2; o++)
        if (this.modules[r][s - o] == null) {
          var h = !1;
          i < t.length && (h = (t[i] >>> n & 1) == 1);
          var l = f.getMask(e, r, s - o);
          l && (h = !h), this.modules[r][s - o] = h, n--, n == -1 && (i++, n = 7);
        }
      if (r += a, r < 0 || this.moduleCount <= r) {
        r -= a, a = -a;
        break;
      }
    }
} };
E.PAD0 = 236;
E.PAD1 = 17;
E.createData = function(t, e, a) {
  for (var r = m.getRSBlocks(t, e), n = new R(), i = 0; i < a.length; i++) {
    var s = a[i];
    n.put(s.mode, 4), n.put(s.getLength(), f.getLengthInBits(s.mode, t)), s.write(n);
  }
  for (var o = 0, i = 0; i < r.length; i++)
    o += r[i].dataCount;
  if (n.getLengthInBits() > o * 8)
    throw new Error("code length overflow. (" + n.getLengthInBits() + ">" + o * 8 + ")");
  for (n.getLengthInBits() + 4 <= o * 8 && n.put(0, 4); n.getLengthInBits() % 8 != 0; )
    n.putBit(!1);
  for (; !(n.getLengthInBits() >= o * 8 || (n.put(E.PAD0, 8), n.getLengthInBits() >= o * 8)); )
    n.put(E.PAD1, 8);
  return E.createBytes(n, r);
};
E.createBytes = function(t, e) {
  for (var a = 0, r = 0, n = 0, i = new Array(e.length), s = new Array(e.length), o = 0; o < e.length; o++) {
    var h = e[o].dataCount, l = e[o].totalCount - h;
    r = Math.max(r, h), n = Math.max(n, l), i[o] = new Array(h);
    for (var u = 0; u < i[o].length; u++)
      i[o][u] = 255 & t.buffer[u + a];
    a += h;
    var d = f.getErrorCorrectPolynomial(l), c = new L(i[o], d.getLength() - 1), _ = c.mod(d);
    s[o] = new Array(d.getLength() - 1);
    for (var u = 0; u < s[o].length; u++) {
      var b = u + _.getLength() - s[o].length;
      s[o][u] = b >= 0 ? _.get(b) : 0;
    }
  }
  for (var w = 0, u = 0; u < e.length; u++)
    w += e[u].totalCount;
  for (var C = new Array(w), P = 0, u = 0; u < r; u++)
    for (var o = 0; o < e.length; o++)
      u < i[o].length && (C[P++] = i[o][u]);
  for (var u = 0; u < n; u++)
    for (var o = 0; o < e.length; o++)
      u < s[o].length && (C[P++] = s[o][u]);
  return C;
};
var p = { MODE_NUMBER: 1 << 0, MODE_ALPHA_NUM: 1 << 1, MODE_8BIT_BYTE: 1 << 2, MODE_KANJI: 1 << 3 }, D = { L: 1, M: 0, Q: 3, H: 2 }, A = { PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7 }, f = { PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0, G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0, G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1, getBCHTypeInfo: function(t) {
  for (var e = t << 10; f.getBCHDigit(e) - f.getBCHDigit(f.G15) >= 0; )
    e ^= f.G15 << f.getBCHDigit(e) - f.getBCHDigit(f.G15);
  return (t << 10 | e) ^ f.G15_MASK;
}, getBCHTypeNumber: function(t) {
  for (var e = t << 12; f.getBCHDigit(e) - f.getBCHDigit(f.G18) >= 0; )
    e ^= f.G18 << f.getBCHDigit(e) - f.getBCHDigit(f.G18);
  return t << 12 | e;
}, getBCHDigit: function(t) {
  for (var e = 0; t != 0; )
    e++, t >>>= 1;
  return e;
}, getPatternPosition: function(t) {
  return f.PATTERN_POSITION_TABLE[t - 1];
}, getMask: function(t, e, a) {
  switch (t) {
    case A.PATTERN000:
      return (e + a) % 2 == 0;
    case A.PATTERN001:
      return e % 2 == 0;
    case A.PATTERN010:
      return a % 3 == 0;
    case A.PATTERN011:
      return (e + a) % 3 == 0;
    case A.PATTERN100:
      return (Math.floor(e / 2) + Math.floor(a / 3)) % 2 == 0;
    case A.PATTERN101:
      return e * a % 2 + e * a % 3 == 0;
    case A.PATTERN110:
      return (e * a % 2 + e * a % 3) % 2 == 0;
    case A.PATTERN111:
      return (e * a % 3 + (e + a) % 2) % 2 == 0;
    default:
      throw new Error("bad maskPattern:" + t);
  }
}, getErrorCorrectPolynomial: function(t) {
  for (var e = new L([1], 0), a = 0; a < t; a++)
    e = e.multiply(new L([1, g.gexp(a)], 0));
  return e;
}, getLengthInBits: function(t, e) {
  if (1 <= e && e < 10)
    switch (t) {
      case p.MODE_NUMBER:
        return 10;
      case p.MODE_ALPHA_NUM:
        return 9;
      case p.MODE_8BIT_BYTE:
        return 8;
      case p.MODE_KANJI:
        return 8;
      default:
        throw new Error("mode:" + t);
    }
  else if (e < 27)
    switch (t) {
      case p.MODE_NUMBER:
        return 12;
      case p.MODE_ALPHA_NUM:
        return 11;
      case p.MODE_8BIT_BYTE:
        return 16;
      case p.MODE_KANJI:
        return 10;
      default:
        throw new Error("mode:" + t);
    }
  else if (e < 41)
    switch (t) {
      case p.MODE_NUMBER:
        return 14;
      case p.MODE_ALPHA_NUM:
        return 13;
      case p.MODE_8BIT_BYTE:
        return 16;
      case p.MODE_KANJI:
        return 12;
      default:
        throw new Error("mode:" + t);
    }
  else
    throw new Error("type:" + e);
}, getLostPoint: function(t) {
  for (var e = t.getModuleCount(), a = 0, r = 0; r < e; r++)
    for (var n = 0; n < e; n++) {
      for (var i = 0, s = t.isDark(r, n), o = -1; o <= 1; o++)
        if (!(r + o < 0 || e <= r + o))
          for (var h = -1; h <= 1; h++)
            n + h < 0 || e <= n + h || o == 0 && h == 0 || s == t.isDark(r + o, n + h) && i++;
      i > 5 && (a += 3 + i - 5);
    }
  for (var r = 0; r < e - 1; r++)
    for (var n = 0; n < e - 1; n++) {
      var l = 0;
      t.isDark(r, n) && l++, t.isDark(r + 1, n) && l++, t.isDark(r, n + 1) && l++, t.isDark(r + 1, n + 1) && l++, (l == 0 || l == 4) && (a += 3);
    }
  for (var r = 0; r < e; r++)
    for (var n = 0; n < e - 6; n++)
      t.isDark(r, n) && !t.isDark(r, n + 1) && t.isDark(r, n + 2) && t.isDark(r, n + 3) && t.isDark(r, n + 4) && !t.isDark(r, n + 5) && t.isDark(r, n + 6) && (a += 40);
  for (var n = 0; n < e; n++)
    for (var r = 0; r < e - 6; r++)
      t.isDark(r, n) && !t.isDark(r + 1, n) && t.isDark(r + 2, n) && t.isDark(r + 3, n) && t.isDark(r + 4, n) && !t.isDark(r + 5, n) && t.isDark(r + 6, n) && (a += 40);
  for (var u = 0, n = 0; n < e; n++)
    for (var r = 0; r < e; r++)
      t.isDark(r, n) && u++;
  var d = Math.abs(100 * u / e / e - 50) / 5;
  return a += d * 10, a;
} }, g = { glog: function(t) {
  if (t < 1)
    throw new Error("glog(" + t + ")");
  return g.LOG_TABLE[t];
}, gexp: function(t) {
  for (; t < 0; )
    t += 255;
  for (; t >= 256; )
    t -= 255;
  return g.EXP_TABLE[t];
}, EXP_TABLE: new Array(256), LOG_TABLE: new Array(256) };
for (var v = 0; v < 8; v++)
  g.EXP_TABLE[v] = 1 << v;
for (var v = 8; v < 256; v++)
  g.EXP_TABLE[v] = g.EXP_TABLE[v - 4] ^ g.EXP_TABLE[v - 5] ^ g.EXP_TABLE[v - 6] ^ g.EXP_TABLE[v - 8];
for (var v = 0; v < 255; v++)
  g.LOG_TABLE[g.EXP_TABLE[v]] = v;
function L(t, e) {
  if (t.length == null)
    throw new Error(t.length + "/" + e);
  for (var a = 0; a < t.length && t[a] == 0; )
    a++;
  this.num = new Array(t.length - a + e);
  for (var r = 0; r < t.length - a; r++)
    this.num[r] = t[r + a];
}
L.prototype = { get: function(t) {
  return this.num[t];
}, getLength: function() {
  return this.num.length;
}, multiply: function(t) {
  for (var e = new Array(this.getLength() + t.getLength() - 1), a = 0; a < this.getLength(); a++)
    for (var r = 0; r < t.getLength(); r++)
      e[a + r] ^= g.gexp(g.glog(this.get(a)) + g.glog(t.get(r)));
  return new L(e, 0);
}, mod: function(t) {
  if (this.getLength() - t.getLength() < 0)
    return this;
  for (var e = g.glog(this.get(0)) - g.glog(t.get(0)), a = new Array(this.getLength()), r = 0; r < this.getLength(); r++)
    a[r] = this.get(r);
  for (var r = 0; r < t.getLength(); r++)
    a[r] ^= g.gexp(g.glog(t.get(r)) + e);
  return new L(a, 0).mod(t);
} };
function m(t, e) {
  this.totalCount = t, this.dataCount = e;
}
m.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
m.getRSBlocks = function(t, e) {
  var a = m.getRsBlockTable(t, e);
  if (a == null)
    throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
  for (var r = a.length / 3, n = [], i = 0; i < r; i++)
    for (var s = a[i * 3 + 0], o = a[i * 3 + 1], h = a[i * 3 + 2], l = 0; l < s; l++)
      n.push(new m(o, h));
  return n;
};
m.getRsBlockTable = function(t, e) {
  switch (e) {
    case D.L:
      return m.RS_BLOCK_TABLE[(t - 1) * 4 + 0];
    case D.M:
      return m.RS_BLOCK_TABLE[(t - 1) * 4 + 1];
    case D.Q:
      return m.RS_BLOCK_TABLE[(t - 1) * 4 + 2];
    case D.H:
      return m.RS_BLOCK_TABLE[(t - 1) * 4 + 3];
    default:
      return;
  }
};
function R() {
  this.buffer = [], this.length = 0;
}
R.prototype = { get: function(t) {
  var e = Math.floor(t / 8);
  return (this.buffer[e] >>> 7 - t % 8 & 1) == 1;
}, put: function(t, e) {
  for (var a = 0; a < e; a++)
    this.putBit((t >>> e - a - 1 & 1) == 1);
}, getLengthInBits: function() {
  return this.length;
}, putBit: function(t) {
  var e = Math.floor(this.length / 8);
  this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++;
} };
var T = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];
function Q() {
  return typeof CanvasRenderingContext2D < "u";
}
function y() {
  var t = !1, e = navigator.userAgent;
  if (/android/i.test(e)) {
    t = !0;
    var a = e.toString().match(/android ([0-9]\.[0-9])/i);
    a && a[1] && (t = parseFloat(a[1]));
  }
  return t;
}
var N = function() {
  var t = function(e, a) {
    this._el = e, this._htOption = a;
  };
  return t.prototype.draw = function(e) {
    var a = this._htOption, r = this._el, n = e.getModuleCount();
    Math.floor(a.width / n), Math.floor(a.height / n), this.clear();
    function i(u, d) {
      var c = document.createElementNS("http://www.w3.org/2000/svg", u);
      for (var _ in d)
        d.hasOwnProperty(_) && c.setAttribute(_, d[_]);
      return c;
    }
    var s = i("svg", { viewBox: "0 0 " + String(n) + " " + String(n), width: "100%", height: "100%", fill: a.colorLight });
    s.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), r.appendChild(s), s.appendChild(i("rect", { fill: a.colorLight, width: "100%", height: "100%" })), s.appendChild(i("rect", { fill: a.colorDark, width: "1", height: "1", id: "template" }));
    for (var o = 0; o < n; o++)
      for (var h = 0; h < n; h++)
        if (e.isDark(o, h)) {
          var l = i("use", { x: String(h), y: String(o) });
          l.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"), s.appendChild(l);
        }
  }, t.prototype.clear = function() {
    for (; this._el.hasChildNodes(); )
      this._el.removeChild(this._el.lastChild);
  }, t;
}(), G = document.documentElement.tagName.toLowerCase() === "svg", M = G ? N : Q() ? function() {
  function t() {
    this._elImage.src = this._elCanvas.toDataURL("image/png"), this._elImage.style.display = "block", this._elCanvas.style.display = "none";
  }
  function e(r, n) {
    var i = this;
    if (i._fFail = n, i._fSuccess = r, i._bSupportDataURI === null) {
      var s = document.createElement("img"), o = function() {
        i._bSupportDataURI = !1, i._fFail && i._fFail.call(i);
      }, h = function() {
        i._bSupportDataURI = !0, i._fSuccess && i._fSuccess.call(i);
      };
      s.onabort = o, s.onerror = o, s.onload = h, s.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
      return;
    } else
      i._bSupportDataURI === !0 && i._fSuccess ? i._fSuccess.call(i) : i._bSupportDataURI === !1 && i._fFail && i._fFail.call(i);
  }
  var a = function(r, n) {
    this._bIsPainted = !1, this._android = y(), this._htOption = n, this._elCanvas = document.createElement("canvas"), this._elCanvas.width = n.width, this._elCanvas.height = n.height, r.appendChild(this._elCanvas), this._el = r, this._oContext = this._elCanvas.getContext("2d"), this._bIsPainted = !1, this._elImage = document.createElement("img"), this._elImage.alt = "Scan me!", this._elImage.style.display = "none", this._el.appendChild(this._elImage), this._bSupportDataURI = null;
  };
  return a.prototype.draw = function(r) {
    var n = this._elImage, i = this._oContext, s = this._htOption, o = r.getModuleCount(), h = s.width / o, l = s.height / o, u = Math.round(h), d = Math.round(l);
    n.style.display = "none", this.clear();
    for (var c = 0; c < o; c++)
      for (var _ = 0; _ < o; _++) {
        var b = r.isDark(c, _), w = _ * h, C = c * l;
        i.strokeStyle = b ? s.colorDark : s.colorLight, i.lineWidth = 1, i.fillStyle = b ? s.colorDark : s.colorLight, i.fillRect(w, C, h, l), i.strokeRect(
          Math.floor(w) + 0.5,
          Math.floor(C) + 0.5,
          u,
          d
        ), i.strokeRect(
          Math.ceil(w) - 0.5,
          Math.ceil(C) - 0.5,
          u,
          d
        );
      }
    this._bIsPainted = !0;
  }, a.prototype.makeImage = function() {
    this._bIsPainted && e.call(this, t);
  }, a.prototype.isPainted = function() {
    return this._bIsPainted;
  }, a.prototype.clear = function() {
    this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1;
  }, a.prototype.round = function(r) {
    return r && Math.floor(r * 1e3) / 1e3;
  }, a;
}() : function() {
  var t = function(e, a) {
    this._el = e, this._htOption = a;
  };
  return t.prototype.draw = function(e) {
    for (var a = this._htOption, r = this._el, n = e.getModuleCount(), i = Math.floor(a.width / n), s = Math.floor(a.height / n), o = ['<table style="border:0;border-collapse:collapse;">'], h = 0; h < n; h++) {
      o.push("<tr>");
      for (var l = 0; l < n; l++)
        o.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + i + "px;height:" + s + "px;background-color:" + (e.isDark(h, l) ? a.colorDark : a.colorLight) + ';"></td>');
      o.push("</tr>");
    }
    o.push("</table>"), r.innerHTML = o.join("");
    var u = r.childNodes[0], d = (a.width - u.offsetWidth) / 2, c = (a.height - u.offsetHeight) / 2;
    d > 0 && c > 0 && (u.style.margin = c + "px " + d + "px");
  }, t.prototype.clear = function() {
    this._el.innerHTML = "";
  }, t;
}();
function K(t, e) {
  for (var a = 1, r = X(t), n = 0, i = T.length; n <= i; n++) {
    var s = 0;
    switch (e) {
      case D.L:
        s = T[n][0];
        break;
      case D.M:
        s = T[n][1];
        break;
      case D.Q:
        s = T[n][2];
        break;
      case D.H:
        s = T[n][3];
        break;
    }
    if (r <= s)
      break;
    a++;
  }
  if (a > T.length)
    throw new Error("Too long data");
  return a;
}
function X(t) {
  var e = encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
  return e.length + (e.length != t ? 3 : 0);
}
B = function(t, e) {
  if (this._htOption = {
    width: 256,
    height: 256,
    typeNumber: 4,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: D.H
  }, typeof e == "string" && (e = {
    text: e
  }), e)
    for (var a in e)
      this._htOption[a] = e[a];
  typeof t == "string" && (t = document.getElementById(t)), this._htOption.useSVG && (M = N), this._android = y(), this._el = t, this._oQRCode = null, this._oDrawing = new M(this._el, this._htOption), this._htOption.text && this.makeCode(this._htOption.text);
};
B.prototype.makeCode = function(t) {
  this._oQRCode = new E(K(t, this._htOption.correctLevel), this._htOption.correctLevel), this._oQRCode.addData(t), this._oQRCode.make(), this._oDrawing.draw(this._oQRCode), this.makeImage();
};
B.prototype.makeImage = function() {
  typeof this._oDrawing.makeImage == "function" && (!this._android || this._android >= 3) && this._oDrawing.makeImage();
};
B.prototype.clear = function() {
  this._oDrawing.clear();
};
B.CorrectLevel = D;
var Y = B;
const J = `.qrcode[data-v-4b5e9b48]{position:fixed;left:0;right:0;top:0;bottom:0;z-index:10000000;background:linear-gradient(130deg,rgba(165,165,165,.7),rgba(56,56,56,.8));display:flex;flex-direction:column;justify-content:center;align-items:center}.qrcode .link[data-v-4b5e9b48]{margin-top:15px;padding:10px 12px;background-color:#eee;border-radius:20px}.qrcode[data-v-4b5e9b48] img{width:200px;height:200px;border-radius:6px;padding:10px;background-color:#fff}
`, V = (t, e) => {
  const a = t.__vccOpts || t;
  for (const [r, n] of e)
    a[r] = n;
  return a;
}, W = { class: "link" }, z = {
  __name: "qrcode",
  props: { context: Function },
  setup(t) {
    const e = t, { href: a, closeMask: r } = e.context(), n = a || location.href, i = O();
    return S(() => {
      new Y(i.value, {
        text: n,
        width: 200,
        height: 200
      });
    }), (s, o) => (H(), U("div", {
      class: "qrcode",
      onClick: o[0] || (o[0] = (...h) => k(r) && k(r)(...h))
    }, [
      x("div", {
        class: "container",
        ref_key: "container",
        ref: i
      }, null, 512),
      x("div", W, F(k(n)), 1)
    ]));
  }
}, $ = /* @__PURE__ */ V(z, [["styles", [J]], ["__scopeId", "data-v-4b5e9b48"]]);
export {
  $ as default
};
