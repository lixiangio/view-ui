import { ref as O, onMounted as S, openBlock as H, createElementBlock as U, createElementVNode as b, withModifiers as M, toDisplayString as F, unref as Q } from "/libs/vue.js";
var B;
function I(t) {
  this.mode = p.MODE_8BIT_BYTE, this.data = t, this.parsedData = [];
  for (var e = 0, a = this.data.length; e < a; e++) {
    var r = [], i = this.data.charCodeAt(e);
    i > 65536 ? (r[0] = 240 | (i & 1835008) >>> 18, r[1] = 128 | (i & 258048) >>> 12, r[2] = 128 | (i & 4032) >>> 6, r[3] = 128 | i & 63) : i > 2048 ? (r[0] = 224 | (i & 61440) >>> 12, r[1] = 128 | (i & 4032) >>> 6, r[2] = 128 | i & 63) : i > 128 ? (r[0] = 192 | (i & 1984) >>> 6, r[1] = 128 | i & 63) : r[0] = i, this.parsedData.push(r);
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
  var r = t.createEmptyMovieClip(e, a), i = 1;
  this.make();
  for (var n = 0; n < this.modules.length; n++)
    for (var o = n * i, s = 0; s < this.modules[n].length; s++) {
      var h = s * i, u = this.modules[n][s];
      u && (r.beginFill(0, 100), r.moveTo(h, o), r.lineTo(h + i, o), r.lineTo(h + i, o + i), r.lineTo(h, o + i), r.endFill());
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
      var r = t[e], i = t[a];
      if (this.modules[r][i] == null)
        for (var n = -2; n <= 2; n++)
          for (var o = -2; o <= 2; o++)
            n == -2 || n == 2 || o == -2 || o == 2 || n == 0 && o == 0 ? this.modules[r + n][i + o] = !0 : this.modules[r + n][i + o] = !1;
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
  for (var a = this.errorCorrectLevel << 3 | e, r = f.getBCHTypeInfo(a), i = 0; i < 15; i++) {
    var n = !t && (r >> i & 1) == 1;
    i < 6 ? this.modules[i][8] = n : i < 8 ? this.modules[i + 1][8] = n : this.modules[this.moduleCount - 15 + i][8] = n;
  }
  for (var i = 0; i < 15; i++) {
    var n = !t && (r >> i & 1) == 1;
    i < 8 ? this.modules[8][this.moduleCount - i - 1] = n : i < 9 ? this.modules[8][15 - i - 1 + 1] = n : this.modules[8][15 - i - 1] = n;
  }
  this.modules[this.moduleCount - 8][8] = !t;
}, mapData: function(t, e) {
  for (var a = -1, r = this.moduleCount - 1, i = 7, n = 0, o = this.moduleCount - 1; o > 0; o -= 2)
    for (o == 6 && o--; ; ) {
      for (var s = 0; s < 2; s++)
        if (this.modules[r][o - s] == null) {
          var h = !1;
          n < t.length && (h = (t[n] >>> i & 1) == 1);
          var u = f.getMask(e, r, o - s);
          u && (h = !h), this.modules[r][o - s] = h, i--, i == -1 && (n++, i = 7);
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
  for (var r = m.getRSBlocks(t, e), i = new R(), n = 0; n < a.length; n++) {
    var o = a[n];
    i.put(o.mode, 4), i.put(o.getLength(), f.getLengthInBits(o.mode, t)), o.write(i);
  }
  for (var s = 0, n = 0; n < r.length; n++)
    s += r[n].dataCount;
  if (i.getLengthInBits() > s * 8)
    throw new Error("code length overflow. (" + i.getLengthInBits() + ">" + s * 8 + ")");
  for (i.getLengthInBits() + 4 <= s * 8 && i.put(0, 4); i.getLengthInBits() % 8 != 0; )
    i.putBit(!1);
  for (; !(i.getLengthInBits() >= s * 8 || (i.put(E.PAD0, 8), i.getLengthInBits() >= s * 8)); )
    i.put(E.PAD1, 8);
  return E.createBytes(i, r);
};
E.createBytes = function(t, e) {
  for (var a = 0, r = 0, i = 0, n = new Array(e.length), o = new Array(e.length), s = 0; s < e.length; s++) {
    var h = e[s].dataCount, u = e[s].totalCount - h;
    r = Math.max(r, h), i = Math.max(i, u), n[s] = new Array(h);
    for (var l = 0; l < n[s].length; l++)
      n[s][l] = 255 & t.buffer[l + a];
    a += h;
    var v = f.getErrorCorrectPolynomial(u), c = new L(n[s], v.getLength() - 1), _ = c.mod(v);
    o[s] = new Array(v.getLength() - 1);
    for (var l = 0; l < o[s].length; l++) {
      var k = l + _.getLength() - o[s].length;
      o[s][l] = k >= 0 ? _.get(k) : 0;
    }
  }
  for (var w = 0, l = 0; l < e.length; l++)
    w += e[l].totalCount;
  for (var C = new Array(w), P = 0, l = 0; l < r; l++)
    for (var s = 0; s < e.length; s++)
      l < n[s].length && (C[P++] = n[s][l]);
  for (var l = 0; l < i; l++)
    for (var s = 0; s < e.length; s++)
      l < o[s].length && (C[P++] = o[s][l]);
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
    for (var i = 0; i < e; i++) {
      for (var n = 0, o = t.isDark(r, i), s = -1; s <= 1; s++)
        if (!(r + s < 0 || e <= r + s))
          for (var h = -1; h <= 1; h++)
            i + h < 0 || e <= i + h || s == 0 && h == 0 || o == t.isDark(r + s, i + h) && n++;
      n > 5 && (a += 3 + n - 5);
    }
  for (var r = 0; r < e - 1; r++)
    for (var i = 0; i < e - 1; i++) {
      var u = 0;
      t.isDark(r, i) && u++, t.isDark(r + 1, i) && u++, t.isDark(r, i + 1) && u++, t.isDark(r + 1, i + 1) && u++, (u == 0 || u == 4) && (a += 3);
    }
  for (var r = 0; r < e; r++)
    for (var i = 0; i < e - 6; i++)
      t.isDark(r, i) && !t.isDark(r, i + 1) && t.isDark(r, i + 2) && t.isDark(r, i + 3) && t.isDark(r, i + 4) && !t.isDark(r, i + 5) && t.isDark(r, i + 6) && (a += 40);
  for (var i = 0; i < e; i++)
    for (var r = 0; r < e - 6; r++)
      t.isDark(r, i) && !t.isDark(r + 1, i) && t.isDark(r + 2, i) && t.isDark(r + 3, i) && t.isDark(r + 4, i) && !t.isDark(r + 5, i) && t.isDark(r + 6, i) && (a += 40);
  for (var l = 0, i = 0; i < e; i++)
    for (var r = 0; r < e; r++)
      t.isDark(r, i) && l++;
  var v = Math.abs(100 * l / e / e - 50) / 5;
  return a += v * 10, a;
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
for (var d = 0; d < 8; d++)
  g.EXP_TABLE[d] = 1 << d;
for (var d = 8; d < 256; d++)
  g.EXP_TABLE[d] = g.EXP_TABLE[d - 4] ^ g.EXP_TABLE[d - 5] ^ g.EXP_TABLE[d - 6] ^ g.EXP_TABLE[d - 8];
for (var d = 0; d < 255; d++)
  g.LOG_TABLE[g.EXP_TABLE[d]] = d;
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
  for (var r = a.length / 3, i = [], n = 0; n < r; n++)
    for (var o = a[n * 3 + 0], s = a[n * 3 + 1], h = a[n * 3 + 2], u = 0; u < o; u++)
      i.push(new m(s, h));
  return i;
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
function G() {
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
    var a = this._htOption, r = this._el, i = e.getModuleCount();
    Math.floor(a.width / i), Math.floor(a.height / i), this.clear();
    function n(l, v) {
      var c = document.createElementNS("http://www.w3.org/2000/svg", l);
      for (var _ in v)
        v.hasOwnProperty(_) && c.setAttribute(_, v[_]);
      return c;
    }
    var o = n("svg", { viewBox: "0 0 " + String(i) + " " + String(i), width: "100%", height: "100%", fill: a.colorLight });
    o.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), r.appendChild(o), o.appendChild(n("rect", { fill: a.colorLight, width: "100%", height: "100%" })), o.appendChild(n("rect", { fill: a.colorDark, width: "1", height: "1", id: "template" }));
    for (var s = 0; s < i; s++)
      for (var h = 0; h < i; h++)
        if (e.isDark(s, h)) {
          var u = n("use", { x: String(h), y: String(s) });
          u.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"), o.appendChild(u);
        }
  }, t.prototype.clear = function() {
    for (; this._el.hasChildNodes(); )
      this._el.removeChild(this._el.lastChild);
  }, t;
}(), K = document.documentElement.tagName.toLowerCase() === "svg", x = K ? N : G() ? function() {
  function t() {
    this._elImage.src = this._elCanvas.toDataURL("image/png"), this._elImage.style.display = "block", this._elCanvas.style.display = "none";
  }
  function e(r, i) {
    var n = this;
    if (n._fFail = i, n._fSuccess = r, n._bSupportDataURI === null) {
      var o = document.createElement("img"), s = function() {
        n._bSupportDataURI = !1, n._fFail && n._fFail.call(n);
      }, h = function() {
        n._bSupportDataURI = !0, n._fSuccess && n._fSuccess.call(n);
      };
      o.onabort = s, o.onerror = s, o.onload = h, o.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
      return;
    } else
      n._bSupportDataURI === !0 && n._fSuccess ? n._fSuccess.call(n) : n._bSupportDataURI === !1 && n._fFail && n._fFail.call(n);
  }
  var a = function(r, i) {
    this._bIsPainted = !1, this._android = y(), this._htOption = i, this._elCanvas = document.createElement("canvas"), this._elCanvas.width = i.width, this._elCanvas.height = i.height, r.appendChild(this._elCanvas), this._el = r, this._oContext = this._elCanvas.getContext("2d"), this._bIsPainted = !1, this._elImage = document.createElement("img"), this._elImage.alt = "Scan me!", this._elImage.style.display = "none", this._el.appendChild(this._elImage), this._bSupportDataURI = null;
  };
  return a.prototype.draw = function(r) {
    var i = this._elImage, n = this._oContext, o = this._htOption, s = r.getModuleCount(), h = o.width / s, u = o.height / s, l = Math.round(h), v = Math.round(u);
    i.style.display = "none", this.clear();
    for (var c = 0; c < s; c++)
      for (var _ = 0; _ < s; _++) {
        var k = r.isDark(c, _), w = _ * h, C = c * u;
        n.strokeStyle = k ? o.colorDark : o.colorLight, n.lineWidth = 1, n.fillStyle = k ? o.colorDark : o.colorLight, n.fillRect(w, C, h, u), n.strokeRect(
          Math.floor(w) + 0.5,
          Math.floor(C) + 0.5,
          l,
          v
        ), n.strokeRect(
          Math.ceil(w) - 0.5,
          Math.ceil(C) - 0.5,
          l,
          v
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
    for (var a = this._htOption, r = this._el, i = e.getModuleCount(), n = Math.floor(a.width / i), o = Math.floor(a.height / i), s = ['<table style="border:0;border-collapse:collapse;">'], h = 0; h < i; h++) {
      s.push("<tr>");
      for (var u = 0; u < i; u++)
        s.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + n + "px;height:" + o + "px;background-color:" + (e.isDark(h, u) ? a.colorDark : a.colorLight) + ';"></td>');
      s.push("</tr>");
    }
    s.push("</table>"), r.innerHTML = s.join("");
    var l = r.childNodes[0], v = (a.width - l.offsetWidth) / 2, c = (a.height - l.offsetHeight) / 2;
    v > 0 && c > 0 && (l.style.margin = c + "px " + v + "px");
  }, t.prototype.clear = function() {
    this._el.innerHTML = "";
  }, t;
}();
function X(t, e) {
  for (var a = 1, r = Y(t), i = 0, n = T.length; i <= n; i++) {
    var o = 0;
    switch (e) {
      case D.L:
        o = T[i][0];
        break;
      case D.M:
        o = T[i][1];
        break;
      case D.Q:
        o = T[i][2];
        break;
      case D.H:
        o = T[i][3];
        break;
    }
    if (r <= o)
      break;
    a++;
  }
  if (a > T.length)
    throw new Error("Too long data");
  return a;
}
function Y(t) {
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
  typeof t == "string" && (t = document.getElementById(t)), this._htOption.useSVG && (x = N), this._android = y(), this._el = t, this._oQRCode = null, this._oDrawing = new x(this._el, this._htOption), this._htOption.text && this.makeCode(this._htOption.text);
};
B.prototype.makeCode = function(t) {
  this._oQRCode = new E(X(t, this._htOption.correctLevel), this._htOption.correctLevel), this._oQRCode.addData(t), this._oQRCode.make(), this._oDrawing.draw(this._oQRCode), this.makeImage();
};
B.prototype.makeImage = function() {
  typeof this._oDrawing.makeImage == "function" && (!this._android || this._android >= 3) && this._oDrawing.makeImage();
};
B.prototype.clear = function() {
  this._oDrawing.clear();
};
B.CorrectLevel = D;
var J = B;
const V = `.qrcode[data-v-11596db1]{position:fixed;left:0;right:0;top:0;bottom:0;z-index:10000000;background:linear-gradient(130deg,rgba(165,165,165,.7),rgba(56,56,56,.8));display:flex;flex-direction:column;justify-content:center;align-items:center}.qrcode .link[data-v-11596db1]{margin-top:15px;padding:10px 12px;background-color:#eee;border-radius:20px}.qrcode[data-v-11596db1] img{width:200px;height:200px;border-radius:6px;padding:10px;background-color:#fff}
`, W = (t, e) => {
  const a = t.__vccOpts || t;
  for (const [r, i] of e)
    a[r] = i;
  return a;
}, z = {
  __name: "qrcode",
  props: { href: String },
  emits: ["close"],
  setup(t, { emit: e }) {
    const { href: a } = t, r = a || location.href, i = O();
    return S(() => {
      new J(i.value, {
        text: r,
        width: 200,
        height: 200
      });
    }), (n, o) => (H(), U("div", {
      class: "qrcode",
      onClick: o[2] || (o[2] = (s) => e("close"))
    }, [
      b("div", {
        class: "container",
        ref_key: "container",
        ref: i,
        onClick: o[0] || (o[0] = M(() => {
        }, ["stop"]))
      }, null, 512),
      b("div", {
        class: "link",
        onClick: o[1] || (o[1] = M(() => {
        }, ["stop"]))
      }, F(Q(r)), 1)
    ]));
  }
}, Z = /* @__PURE__ */ W(z, [["styles", [V]], ["__scopeId", "data-v-11596db1"]]);
export {
  Z as default
};
