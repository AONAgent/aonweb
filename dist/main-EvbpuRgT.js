let Ci = {
  dev: {
    address: {
      AonAppPoint: "0xcBBE5C513C225c0348d6098877d2d7B0766247c9",
      AonRewardPoint: "",
      AonUser: "0xbA00634aA5Ec317A1a26B2972fa2f8cFA747a057",
      AonApp: "",
      AonAiModel: "",
      AonAiCluster: "",
      AonAiExcutor: "0x9ccf4B238DEb6868DF3f5980751ab7e2DB0CCE6f"
    },
    rpc: "https://sepolia.rpc.aonnet.io",
    url: "http://192.168.1.180:8081",
    storage_url: "https://app.aonet.ai"
  },
  prod: {
    address: {
      AonAppPoint: "0xdEEb5695B80fA2EF7d2cEcFe38AE1c45E445c149",
      AonRewardPoint: "0xAaA6BE9930AC8488c6e61A6bE635b541D5391447",
      AonUser: "0x64ea0CC733f9B899545aE454f1890b5eb512560F",
      AonApp: "0x81Ff185BC3186300Dc4D18605a9bcD00673452c5",
      AonAiModel: "0x741a719B63C4CeEb6579FF8B43A464692Fd27749",
      AonAiCluster: "0x2Ca18Fd1Dd91E7e8eb3D21ef44dFedB875aFbd58",
      AonAiExcutor: "0xA2Eb5C8DeeC787D488386DB9d3f9baE502eddF31"
    },
    rpc: "https://sepolia.rpc.aonnet.io",
    url: "https://app.aonet.ai",
    storage_url: "https://app.aonet.ai"
  }
}, $i = "prod";
const tt = Ci[$i], zt = {
  TYPE_TG: 1,
  TYPE_FP: 2
};
class ji {
  constructor({
    rpc_url: e = tt.rpc,
    force_aon: s = !0,
    abi: r = null,
    contract_address: i = null,
    try_time: n = 5,
    userId: a = "",
    inviter: o = ""
  } = {}) {
    if (this.rpc_url = e, this.type = zt.TYPE_FP, this.storage_url = tt.storage_url, this.server = tt.url, this.force_aon = s, this.abi = r, this.userId = a, this.inviter = o, this.try_time = n, this.contract_address = i, this.type == zt.TYPE_FP && this.storage_url == "")
      throw new Error("storage_url must be set when type = TYPE_FP");
  }
  static get LoginTypes() {
    return zt;
  }
}
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var fr;
function _() {
  return fr.apply(null, arguments);
}
function Ii(t) {
  fr = t;
}
function X(t) {
  return t instanceof Array || Object.prototype.toString.call(t) === "[object Array]";
}
function xe(t) {
  return t != null && Object.prototype.toString.call(t) === "[object Object]";
}
function T(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function ys(t) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(t).length === 0;
  var e;
  for (e in t)
    if (T(t, e))
      return !1;
  return !0;
}
function L(t) {
  return t === void 0;
}
function _e(t) {
  return typeof t == "number" || Object.prototype.toString.call(t) === "[object Number]";
}
function ht(t) {
  return t instanceof Date || Object.prototype.toString.call(t) === "[object Date]";
}
function _r(t, e) {
  var s = [], r, i = t.length;
  for (r = 0; r < i; ++r)
    s.push(e(t[r], r));
  return s;
}
function be(t, e) {
  for (var s in e)
    T(e, s) && (t[s] = e[s]);
  return T(e, "toString") && (t.toString = e.toString), T(e, "valueOf") && (t.valueOf = e.valueOf), t;
}
function ne(t, e, s, r) {
  return Yr(t, e, s, r, !0).utc();
}
function Yi() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function g(t) {
  return t._pf == null && (t._pf = Yi()), t._pf;
}
var is;
Array.prototype.some ? is = Array.prototype.some : is = function(t) {
  var e = Object(this), s = e.length >>> 0, r;
  for (r = 0; r < s; r++)
    if (r in e && t.call(this, e[r], r, e))
      return !0;
  return !1;
};
function gs(t) {
  var e = null, s = !1, r = t._d && !isNaN(t._d.getTime());
  if (r && (e = g(t), s = is.call(e.parsedDateParts, function(i) {
    return i != null;
  }), r = e.overflow < 0 && !e.empty && !e.invalidEra && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && s), t._strict && (r = r && e.charsLeftOver === 0 && e.unusedTokens.length === 0 && e.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(t))
    t._isValid = r;
  else
    return r;
  return t._isValid;
}
function Mt(t) {
  var e = ne(NaN);
  return t != null ? be(g(e), t) : g(e).userInvalidated = !0, e;
}
var Gs = _.momentProperties = [], qt = !1;
function ws(t, e) {
  var s, r, i, n = Gs.length;
  if (L(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), L(e._i) || (t._i = e._i), L(e._f) || (t._f = e._f), L(e._l) || (t._l = e._l), L(e._strict) || (t._strict = e._strict), L(e._tzm) || (t._tzm = e._tzm), L(e._isUTC) || (t._isUTC = e._isUTC), L(e._offset) || (t._offset = e._offset), L(e._pf) || (t._pf = g(e)), L(e._locale) || (t._locale = e._locale), n > 0)
    for (s = 0; s < n; s++)
      r = Gs[s], i = e[r], L(i) || (t[r] = i);
  return t;
}
function ct(t) {
  ws(this, t), this._d = new Date(t._d != null ? t._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), qt === !1 && (qt = !0, _.updateOffset(this), qt = !1);
}
function ee(t) {
  return t instanceof ct || t != null && t._isAMomentObject != null;
}
function pr(t) {
  _.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + t);
}
function V(t, e) {
  var s = !0;
  return be(function() {
    if (_.deprecationHandler != null && _.deprecationHandler(null, t), s) {
      var r = [], i, n, a, o = arguments.length;
      for (n = 0; n < o; n++) {
        if (i = "", typeof arguments[n] == "object") {
          i += `
[` + n + "] ";
          for (a in arguments[0])
            T(arguments[0], a) && (i += a + ": " + arguments[0][a] + ", ");
          i = i.slice(0, -2);
        } else
          i = arguments[n];
        r.push(i);
      }
      pr(
        t + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), s = !1;
    }
    return e.apply(this, arguments);
  }, e);
}
var Vs = {};
function mr(t, e) {
  _.deprecationHandler != null && _.deprecationHandler(t, e), Vs[t] || (pr(e), Vs[t] = !0);
}
_.suppressDeprecationWarnings = !1;
_.deprecationHandler = null;
function ae(t) {
  return typeof Function < "u" && t instanceof Function || Object.prototype.toString.call(t) === "[object Function]";
}
function Ui(t) {
  var e, s;
  for (s in t)
    T(t, s) && (e = t[s], ae(e) ? this[s] = e : this["_" + s] = e);
  this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function ns(t, e) {
  var s = be({}, t), r;
  for (r in e)
    T(e, r) && (xe(t[r]) && xe(e[r]) ? (s[r] = {}, be(s[r], t[r]), be(s[r], e[r])) : e[r] != null ? s[r] = e[r] : delete s[r]);
  for (r in t)
    T(t, r) && !T(e, r) && xe(t[r]) && (s[r] = be({}, s[r]));
  return s;
}
function vs(t) {
  t != null && this.set(t);
}
var as;
Object.keys ? as = Object.keys : as = function(t) {
  var e, s = [];
  for (e in t)
    T(t, e) && s.push(e);
  return s;
};
var Li = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function Ni(t, e, s) {
  var r = this._calendar[t] || this._calendar.sameElse;
  return ae(r) ? r.call(e, s) : r;
}
function ie(t, e, s) {
  var r = "" + Math.abs(t), i = e - r.length, n = t >= 0;
  return (n ? s ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + r;
}
var bs = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, mt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Jt = {}, Ne = {};
function m(t, e, s, r) {
  var i = r;
  typeof r == "string" && (i = function() {
    return this[r]();
  }), t && (Ne[t] = i), e && (Ne[e[0]] = function() {
    return ie(i.apply(this, arguments), e[1], e[2]);
  }), s && (Ne[s] = function() {
    return this.localeData().ordinal(
      i.apply(this, arguments),
      t
    );
  });
}
function Fi(t) {
  return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "");
}
function Wi(t) {
  var e = t.match(bs), s, r;
  for (s = 0, r = e.length; s < r; s++)
    Ne[e[s]] ? e[s] = Ne[e[s]] : e[s] = Fi(e[s]);
  return function(i) {
    var n = "", a;
    for (a = 0; a < r; a++)
      n += ae(e[a]) ? e[a].call(i, t) : e[a];
    return n;
  };
}
function bt(t, e) {
  return t.isValid() ? (e = yr(e, t.localeData()), Jt[e] = Jt[e] || Wi(e), Jt[e](t)) : t.localeData().invalidDate();
}
function yr(t, e) {
  var s = 5;
  function r(i) {
    return e.longDateFormat(i) || i;
  }
  for (mt.lastIndex = 0; s >= 0 && mt.test(t); )
    t = t.replace(
      mt,
      r
    ), mt.lastIndex = 0, s -= 1;
  return t;
}
var Hi = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Bi(t) {
  var e = this._longDateFormat[t], s = this._longDateFormat[t.toUpperCase()];
  return e || !s ? e : (this._longDateFormat[t] = s.match(bs).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[t]);
}
var Gi = "Invalid date";
function Vi() {
  return this._invalidDate;
}
var zi = "%d", qi = /\d{1,2}/;
function Ji(t) {
  return this._ordinal.replace("%d", t);
}
var Ki = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function Zi(t, e, s, r) {
  var i = this._relativeTime[s];
  return ae(i) ? i(t, e, s, r) : i.replace(/%d/i, t);
}
function Qi(t, e) {
  var s = this._relativeTime[t > 0 ? "future" : "past"];
  return ae(s) ? s(e) : s.replace(/%s/i, e);
}
var zs = {
  D: "date",
  dates: "date",
  date: "date",
  d: "day",
  days: "day",
  day: "day",
  e: "weekday",
  weekdays: "weekday",
  weekday: "weekday",
  E: "isoWeekday",
  isoweekdays: "isoWeekday",
  isoweekday: "isoWeekday",
  DDD: "dayOfYear",
  dayofyears: "dayOfYear",
  dayofyear: "dayOfYear",
  h: "hour",
  hours: "hour",
  hour: "hour",
  ms: "millisecond",
  milliseconds: "millisecond",
  millisecond: "millisecond",
  m: "minute",
  minutes: "minute",
  minute: "minute",
  M: "month",
  months: "month",
  month: "month",
  Q: "quarter",
  quarters: "quarter",
  quarter: "quarter",
  s: "second",
  seconds: "second",
  second: "second",
  gg: "weekYear",
  weekyears: "weekYear",
  weekyear: "weekYear",
  GG: "isoWeekYear",
  isoweekyears: "isoWeekYear",
  isoweekyear: "isoWeekYear",
  w: "week",
  weeks: "week",
  week: "week",
  W: "isoWeek",
  isoweeks: "isoWeek",
  isoweek: "isoWeek",
  y: "year",
  years: "year",
  year: "year"
};
function z(t) {
  return typeof t == "string" ? zs[t] || zs[t.toLowerCase()] : void 0;
}
function ks(t) {
  var e = {}, s, r;
  for (r in t)
    T(t, r) && (s = z(r), s && (e[s] = t[r]));
  return e;
}
var Xi = {
  date: 9,
  day: 11,
  weekday: 11,
  isoWeekday: 11,
  dayOfYear: 4,
  hour: 13,
  millisecond: 16,
  minute: 14,
  month: 8,
  quarter: 7,
  second: 15,
  weekYear: 1,
  isoWeekYear: 1,
  week: 5,
  isoWeek: 5,
  year: 1
};
function en(t) {
  var e = [], s;
  for (s in t)
    T(t, s) && e.push({ unit: s, priority: Xi[s] });
  return e.sort(function(r, i) {
    return r.priority - i.priority;
  }), e;
}
var gr = /\d/, F = /\d\d/, wr = /\d{3}/, Ss = /\d{4}/, At = /[+-]?\d{6}/, R = /\d\d?/, vr = /\d\d\d\d?/, br = /\d\d\d\d\d\d?/, xt = /\d{1,3}/, Ts = /\d{1,4}/, Rt = /[+-]?\d{1,6}/, Ge = /\d+/, Ct = /[+-]?\d+/, tn = /Z|[+-]\d\d:?\d\d/gi, $t = /Z|[+-]\d\d(?::?\d\d)?/gi, sn = /[+-]?\d+(\.\d{1,3})?/, dt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Ve = /^[1-9]\d?/, Os = /^([1-9]\d|\d)/, Tt;
Tt = {};
function p(t, e, s) {
  Tt[t] = ae(e) ? e : function(r, i) {
    return r && s ? s : e;
  };
}
function rn(t, e) {
  return T(Tt, t) ? Tt[t](e._strict, e._locale) : new RegExp(nn(t));
}
function nn(t) {
  return de(
    t.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(e, s, r, i, n) {
        return s || r || i || n;
      }
    )
  );
}
function de(t) {
  return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function H(t) {
  return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
}
function v(t) {
  var e = +t, s = 0;
  return e !== 0 && isFinite(e) && (s = H(e)), s;
}
var os = {};
function E(t, e) {
  var s, r = e, i;
  for (typeof t == "string" && (t = [t]), _e(e) && (r = function(n, a) {
    a[e] = v(n);
  }), i = t.length, s = 0; s < i; s++)
    os[t[s]] = r;
}
function ft(t, e) {
  E(t, function(s, r, i, n) {
    i._w = i._w || {}, e(s, i._w, i, n);
  });
}
function an(t, e, s) {
  e != null && T(os, t) && os[t](e, s._a, s, t);
}
function jt(t) {
  return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0;
}
var Y = 0, he = 1, re = 2, j = 3, Q = 4, ce = 5, Ae = 6, on = 7, ln = 8;
m("Y", 0, 0, function() {
  var t = this.year();
  return t <= 9999 ? ie(t, 4) : "+" + t;
});
m(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
m(0, ["YYYY", 4], 0, "year");
m(0, ["YYYYY", 5], 0, "year");
m(0, ["YYYYYY", 6, !0], 0, "year");
p("Y", Ct);
p("YY", R, F);
p("YYYY", Ts, Ss);
p("YYYYY", Rt, At);
p("YYYYYY", Rt, At);
E(["YYYYY", "YYYYYY"], Y);
E("YYYY", function(t, e) {
  e[Y] = t.length === 2 ? _.parseTwoDigitYear(t) : v(t);
});
E("YY", function(t, e) {
  e[Y] = _.parseTwoDigitYear(t);
});
E("Y", function(t, e) {
  e[Y] = parseInt(t, 10);
});
function st(t) {
  return jt(t) ? 366 : 365;
}
_.parseTwoDigitYear = function(t) {
  return v(t) + (v(t) > 68 ? 1900 : 2e3);
};
var kr = ze("FullYear", !0);
function un() {
  return jt(this.year());
}
function ze(t, e) {
  return function(s) {
    return s != null ? (Sr(this, t, s), _.updateOffset(this, e), this) : nt(this, t);
  };
}
function nt(t, e) {
  if (!t.isValid())
    return NaN;
  var s = t._d, r = t._isUTC;
  switch (e) {
    case "Milliseconds":
      return r ? s.getUTCMilliseconds() : s.getMilliseconds();
    case "Seconds":
      return r ? s.getUTCSeconds() : s.getSeconds();
    case "Minutes":
      return r ? s.getUTCMinutes() : s.getMinutes();
    case "Hours":
      return r ? s.getUTCHours() : s.getHours();
    case "Date":
      return r ? s.getUTCDate() : s.getDate();
    case "Day":
      return r ? s.getUTCDay() : s.getDay();
    case "Month":
      return r ? s.getUTCMonth() : s.getMonth();
    case "FullYear":
      return r ? s.getUTCFullYear() : s.getFullYear();
    default:
      return NaN;
  }
}
function Sr(t, e, s) {
  var r, i, n, a, o;
  if (!(!t.isValid() || isNaN(s))) {
    switch (r = t._d, i = t._isUTC, e) {
      case "Milliseconds":
        return void (i ? r.setUTCMilliseconds(s) : r.setMilliseconds(s));
      case "Seconds":
        return void (i ? r.setUTCSeconds(s) : r.setSeconds(s));
      case "Minutes":
        return void (i ? r.setUTCMinutes(s) : r.setMinutes(s));
      case "Hours":
        return void (i ? r.setUTCHours(s) : r.setHours(s));
      case "Date":
        return void (i ? r.setUTCDate(s) : r.setDate(s));
      case "FullYear":
        break;
      default:
        return;
    }
    n = s, a = t.month(), o = t.date(), o = o === 29 && a === 1 && !jt(n) ? 28 : o, i ? r.setUTCFullYear(n, a, o) : r.setFullYear(n, a, o);
  }
}
function hn(t) {
  return t = z(t), ae(this[t]) ? this[t]() : this;
}
function cn(t, e) {
  if (typeof t == "object") {
    t = ks(t);
    var s = en(t), r, i = s.length;
    for (r = 0; r < i; r++)
      this[s[r].unit](t[s[r].unit]);
  } else if (t = z(t), ae(this[t]))
    return this[t](e);
  return this;
}
function dn(t, e) {
  return (t % e + e) % e;
}
var $;
Array.prototype.indexOf ? $ = Array.prototype.indexOf : $ = function(t) {
  var e;
  for (e = 0; e < this.length; ++e)
    if (this[e] === t)
      return e;
  return -1;
};
function Ds(t, e) {
  if (isNaN(t) || isNaN(e))
    return NaN;
  var s = dn(e, 12);
  return t += (e - s) / 12, s === 1 ? jt(t) ? 29 : 28 : 31 - s % 7 % 2;
}
m("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
m("MMM", 0, 0, function(t) {
  return this.localeData().monthsShort(this, t);
});
m("MMMM", 0, 0, function(t) {
  return this.localeData().months(this, t);
});
p("M", R, Ve);
p("MM", R, F);
p("MMM", function(t, e) {
  return e.monthsShortRegex(t);
});
p("MMMM", function(t, e) {
  return e.monthsRegex(t);
});
E(["M", "MM"], function(t, e) {
  e[he] = v(t) - 1;
});
E(["MMM", "MMMM"], function(t, e, s, r) {
  var i = s._locale.monthsParse(t, r, s._strict);
  i != null ? e[he] = i : g(s).invalidMonth = t;
});
var fn = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Tr = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Or = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, _n = dt, pn = dt;
function mn(t, e) {
  return t ? X(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || Or).test(e) ? "format" : "standalone"][t.month()] : X(this._months) ? this._months : this._months.standalone;
}
function yn(t, e) {
  return t ? X(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[Or.test(e) ? "format" : "standalone"][t.month()] : X(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function gn(t, e, s) {
  var r, i, n, a = t.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      n = ne([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        n,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(n, "").toLocaleLowerCase();
  return s ? e === "MMM" ? (i = $.call(this._shortMonthsParse, a), i !== -1 ? i : null) : (i = $.call(this._longMonthsParse, a), i !== -1 ? i : null) : e === "MMM" ? (i = $.call(this._shortMonthsParse, a), i !== -1 ? i : (i = $.call(this._longMonthsParse, a), i !== -1 ? i : null)) : (i = $.call(this._longMonthsParse, a), i !== -1 ? i : (i = $.call(this._shortMonthsParse, a), i !== -1 ? i : null));
}
function wn(t, e, s) {
  var r, i, n;
  if (this._monthsParseExact)
    return gn.call(this, t, e, s);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
    if (i = ne([2e3, r]), s && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
      "^" + this.months(i, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[r] = new RegExp(
      "^" + this.monthsShort(i, "").replace(".", "") + "$",
      "i"
    )), !s && !this._monthsParse[r] && (n = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[r] = new RegExp(n.replace(".", ""), "i")), s && e === "MMMM" && this._longMonthsParse[r].test(t))
      return r;
    if (s && e === "MMM" && this._shortMonthsParse[r].test(t))
      return r;
    if (!s && this._monthsParse[r].test(t))
      return r;
  }
}
function Dr(t, e) {
  if (!t.isValid())
    return t;
  if (typeof e == "string") {
    if (/^\d+$/.test(e))
      e = v(e);
    else if (e = t.localeData().monthsParse(e), !_e(e))
      return t;
  }
  var s = e, r = t.date();
  return r = r < 29 ? r : Math.min(r, Ds(t.year(), s)), t._isUTC ? t._d.setUTCMonth(s, r) : t._d.setMonth(s, r), t;
}
function Pr(t) {
  return t != null ? (Dr(this, t), _.updateOffset(this, !0), this) : nt(this, "Month");
}
function vn() {
  return Ds(this.year(), this.month());
}
function bn(t) {
  return this._monthsParseExact ? (T(this, "_monthsRegex") || Er.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (T(this, "_monthsShortRegex") || (this._monthsShortRegex = _n), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function kn(t) {
  return this._monthsParseExact ? (T(this, "_monthsRegex") || Er.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (T(this, "_monthsRegex") || (this._monthsRegex = pn), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex);
}
function Er() {
  function t(l, h) {
    return h.length - l.length;
  }
  var e = [], s = [], r = [], i, n, a, o;
  for (i = 0; i < 12; i++)
    n = ne([2e3, i]), a = de(this.monthsShort(n, "")), o = de(this.months(n, "")), e.push(a), s.push(o), r.push(o), r.push(a);
  e.sort(t), s.sort(t), r.sort(t), this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + e.join("|") + ")",
    "i"
  );
}
function Sn(t, e, s, r, i, n, a) {
  var o;
  return t < 100 && t >= 0 ? (o = new Date(t + 400, e, s, r, i, n, a), isFinite(o.getFullYear()) && o.setFullYear(t)) : o = new Date(t, e, s, r, i, n, a), o;
}
function at(t) {
  var e, s;
  return t < 100 && t >= 0 ? (s = Array.prototype.slice.call(arguments), s[0] = t + 400, e = new Date(Date.UTC.apply(null, s)), isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t)) : e = new Date(Date.UTC.apply(null, arguments)), e;
}
function Ot(t, e, s) {
  var r = 7 + e - s, i = (7 + at(t, 0, r).getUTCDay() - e) % 7;
  return -i + r - 1;
}
function Mr(t, e, s, r, i) {
  var n = (7 + s - r) % 7, a = Ot(t, r, i), o = 1 + 7 * (e - 1) + n + a, l, h;
  return o <= 0 ? (l = t - 1, h = st(l) + o) : o > st(t) ? (l = t + 1, h = o - st(t)) : (l = t, h = o), {
    year: l,
    dayOfYear: h
  };
}
function ot(t, e, s) {
  var r = Ot(t.year(), e, s), i = Math.floor((t.dayOfYear() - r - 1) / 7) + 1, n, a;
  return i < 1 ? (a = t.year() - 1, n = i + fe(a, e, s)) : i > fe(t.year(), e, s) ? (n = i - fe(t.year(), e, s), a = t.year() + 1) : (a = t.year(), n = i), {
    week: n,
    year: a
  };
}
function fe(t, e, s) {
  var r = Ot(t, e, s), i = Ot(t + 1, e, s);
  return (st(t) - r + i) / 7;
}
m("w", ["ww", 2], "wo", "week");
m("W", ["WW", 2], "Wo", "isoWeek");
p("w", R, Ve);
p("ww", R, F);
p("W", R, Ve);
p("WW", R, F);
ft(
  ["w", "ww", "W", "WW"],
  function(t, e, s, r) {
    e[r.substr(0, 1)] = v(t);
  }
);
function Tn(t) {
  return ot(t, this._week.dow, this._week.doy).week;
}
var On = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function Dn() {
  return this._week.dow;
}
function Pn() {
  return this._week.doy;
}
function En(t) {
  var e = this.localeData().week(this);
  return t == null ? e : this.add((t - e) * 7, "d");
}
function Mn(t) {
  var e = ot(this, 1, 4).week;
  return t == null ? e : this.add((t - e) * 7, "d");
}
m("d", 0, "do", "day");
m("dd", 0, 0, function(t) {
  return this.localeData().weekdaysMin(this, t);
});
m("ddd", 0, 0, function(t) {
  return this.localeData().weekdaysShort(this, t);
});
m("dddd", 0, 0, function(t) {
  return this.localeData().weekdays(this, t);
});
m("e", 0, 0, "weekday");
m("E", 0, 0, "isoWeekday");
p("d", R);
p("e", R);
p("E", R);
p("dd", function(t, e) {
  return e.weekdaysMinRegex(t);
});
p("ddd", function(t, e) {
  return e.weekdaysShortRegex(t);
});
p("dddd", function(t, e) {
  return e.weekdaysRegex(t);
});
ft(["dd", "ddd", "dddd"], function(t, e, s, r) {
  var i = s._locale.weekdaysParse(t, r, s._strict);
  i != null ? e.d = i : g(s).invalidWeekday = t;
});
ft(["d", "e", "E"], function(t, e, s, r) {
  e[r] = v(t);
});
function An(t, e) {
  return typeof t != "string" ? t : isNaN(t) ? (t = e.weekdaysParse(t), typeof t == "number" ? t : null) : parseInt(t, 10);
}
function xn(t, e) {
  return typeof t == "string" ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t;
}
function Ps(t, e) {
  return t.slice(e, 7).concat(t.slice(0, e));
}
var Rn = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Ar = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Cn = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), $n = dt, jn = dt, In = dt;
function Yn(t, e) {
  var s = X(this._weekdays) ? this._weekdays : this._weekdays[t && t !== !0 && this._weekdays.isFormat.test(e) ? "format" : "standalone"];
  return t === !0 ? Ps(s, this._week.dow) : t ? s[t.day()] : s;
}
function Un(t) {
  return t === !0 ? Ps(this._weekdaysShort, this._week.dow) : t ? this._weekdaysShort[t.day()] : this._weekdaysShort;
}
function Ln(t) {
  return t === !0 ? Ps(this._weekdaysMin, this._week.dow) : t ? this._weekdaysMin[t.day()] : this._weekdaysMin;
}
function Nn(t, e, s) {
  var r, i, n, a = t.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
      n = ne([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
        n,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
        n,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(n, "").toLocaleLowerCase();
  return s ? e === "dddd" ? (i = $.call(this._weekdaysParse, a), i !== -1 ? i : null) : e === "ddd" ? (i = $.call(this._shortWeekdaysParse, a), i !== -1 ? i : null) : (i = $.call(this._minWeekdaysParse, a), i !== -1 ? i : null) : e === "dddd" ? (i = $.call(this._weekdaysParse, a), i !== -1 || (i = $.call(this._shortWeekdaysParse, a), i !== -1) ? i : (i = $.call(this._minWeekdaysParse, a), i !== -1 ? i : null)) : e === "ddd" ? (i = $.call(this._shortWeekdaysParse, a), i !== -1 || (i = $.call(this._weekdaysParse, a), i !== -1) ? i : (i = $.call(this._minWeekdaysParse, a), i !== -1 ? i : null)) : (i = $.call(this._minWeekdaysParse, a), i !== -1 || (i = $.call(this._weekdaysParse, a), i !== -1) ? i : (i = $.call(this._shortWeekdaysParse, a), i !== -1 ? i : null));
}
function Fn(t, e, s) {
  var r, i, n;
  if (this._weekdaysParseExact)
    return Nn.call(this, t, e, s);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
    if (i = ne([2e3, 1]).day(r), s && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
      "^" + this.weekdays(i, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[r] || (n = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[r] = new RegExp(n.replace(".", ""), "i")), s && e === "dddd" && this._fullWeekdaysParse[r].test(t))
      return r;
    if (s && e === "ddd" && this._shortWeekdaysParse[r].test(t))
      return r;
    if (s && e === "dd" && this._minWeekdaysParse[r].test(t))
      return r;
    if (!s && this._weekdaysParse[r].test(t))
      return r;
  }
}
function Wn(t) {
  if (!this.isValid())
    return t != null ? this : NaN;
  var e = nt(this, "Day");
  return t != null ? (t = An(t, this.localeData()), this.add(t - e, "d")) : e;
}
function Hn(t) {
  if (!this.isValid())
    return t != null ? this : NaN;
  var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return t == null ? e : this.add(t - e, "d");
}
function Bn(t) {
  if (!this.isValid())
    return t != null ? this : NaN;
  if (t != null) {
    var e = xn(t, this.localeData());
    return this.day(this.day() % 7 ? e : e - 7);
  } else
    return this.day() || 7;
}
function Gn(t) {
  return this._weekdaysParseExact ? (T(this, "_weekdaysRegex") || Es.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (T(this, "_weekdaysRegex") || (this._weekdaysRegex = $n), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Vn(t) {
  return this._weekdaysParseExact ? (T(this, "_weekdaysRegex") || Es.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (T(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = jn), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function zn(t) {
  return this._weekdaysParseExact ? (T(this, "_weekdaysRegex") || Es.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (T(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = In), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Es() {
  function t(u, c) {
    return c.length - u.length;
  }
  var e = [], s = [], r = [], i = [], n, a, o, l, h;
  for (n = 0; n < 7; n++)
    a = ne([2e3, 1]).day(n), o = de(this.weekdaysMin(a, "")), l = de(this.weekdaysShort(a, "")), h = de(this.weekdays(a, "")), e.push(o), s.push(l), r.push(h), i.push(o), i.push(l), i.push(h);
  e.sort(t), s.sort(t), r.sort(t), i.sort(t), this._weekdaysRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + e.join("|") + ")",
    "i"
  );
}
function Ms() {
  return this.hours() % 12 || 12;
}
function qn() {
  return this.hours() || 24;
}
m("H", ["HH", 2], 0, "hour");
m("h", ["hh", 2], 0, Ms);
m("k", ["kk", 2], 0, qn);
m("hmm", 0, 0, function() {
  return "" + Ms.apply(this) + ie(this.minutes(), 2);
});
m("hmmss", 0, 0, function() {
  return "" + Ms.apply(this) + ie(this.minutes(), 2) + ie(this.seconds(), 2);
});
m("Hmm", 0, 0, function() {
  return "" + this.hours() + ie(this.minutes(), 2);
});
m("Hmmss", 0, 0, function() {
  return "" + this.hours() + ie(this.minutes(), 2) + ie(this.seconds(), 2);
});
function xr(t, e) {
  m(t, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      e
    );
  });
}
xr("a", !0);
xr("A", !1);
function Rr(t, e) {
  return e._meridiemParse;
}
p("a", Rr);
p("A", Rr);
p("H", R, Os);
p("h", R, Ve);
p("k", R, Ve);
p("HH", R, F);
p("hh", R, F);
p("kk", R, F);
p("hmm", vr);
p("hmmss", br);
p("Hmm", vr);
p("Hmmss", br);
E(["H", "HH"], j);
E(["k", "kk"], function(t, e, s) {
  var r = v(t);
  e[j] = r === 24 ? 0 : r;
});
E(["a", "A"], function(t, e, s) {
  s._isPm = s._locale.isPM(t), s._meridiem = t;
});
E(["h", "hh"], function(t, e, s) {
  e[j] = v(t), g(s).bigHour = !0;
});
E("hmm", function(t, e, s) {
  var r = t.length - 2;
  e[j] = v(t.substr(0, r)), e[Q] = v(t.substr(r)), g(s).bigHour = !0;
});
E("hmmss", function(t, e, s) {
  var r = t.length - 4, i = t.length - 2;
  e[j] = v(t.substr(0, r)), e[Q] = v(t.substr(r, 2)), e[ce] = v(t.substr(i)), g(s).bigHour = !0;
});
E("Hmm", function(t, e, s) {
  var r = t.length - 2;
  e[j] = v(t.substr(0, r)), e[Q] = v(t.substr(r));
});
E("Hmmss", function(t, e, s) {
  var r = t.length - 4, i = t.length - 2;
  e[j] = v(t.substr(0, r)), e[Q] = v(t.substr(r, 2)), e[ce] = v(t.substr(i));
});
function Jn(t) {
  return (t + "").toLowerCase().charAt(0) === "p";
}
var Kn = /[ap]\.?m?\.?/i, Zn = ze("Hours", !0);
function Qn(t, e, s) {
  return t > 11 ? s ? "pm" : "PM" : s ? "am" : "AM";
}
var Cr = {
  calendar: Li,
  longDateFormat: Hi,
  invalidDate: Gi,
  ordinal: zi,
  dayOfMonthOrdinalParse: qi,
  relativeTime: Ki,
  months: fn,
  monthsShort: Tr,
  week: On,
  weekdays: Rn,
  weekdaysMin: Cn,
  weekdaysShort: Ar,
  meridiemParse: Kn
}, C = {}, Ke = {}, lt;
function Xn(t, e) {
  var s, r = Math.min(t.length, e.length);
  for (s = 0; s < r; s += 1)
    if (t[s] !== e[s])
      return s;
  return r;
}
function qs(t) {
  return t && t.toLowerCase().replace("_", "-");
}
function ea(t) {
  for (var e = 0, s, r, i, n; e < t.length; ) {
    for (n = qs(t[e]).split("-"), s = n.length, r = qs(t[e + 1]), r = r ? r.split("-") : null; s > 0; ) {
      if (i = It(n.slice(0, s).join("-")), i)
        return i;
      if (r && r.length >= s && Xn(n, r) >= s - 1)
        break;
      s--;
    }
    e++;
  }
  return lt;
}
function ta(t) {
  return !!(t && t.match("^[^/\\\\]*$"));
}
function It(t) {
  var e = null, s;
  if (C[t] === void 0 && typeof module < "u" && module && module.exports && ta(t))
    try {
      e = lt._abbr, s = require, s("./locale/" + t), Se(e);
    } catch {
      C[t] = null;
    }
  return C[t];
}
function Se(t, e) {
  var s;
  return t && (L(e) ? s = pe(t) : s = As(t, e), s ? lt = s : typeof console < "u" && console.warn && console.warn(
    "Locale " + t + " not found. Did you forget to load it?"
  )), lt._abbr;
}
function As(t, e) {
  if (e !== null) {
    var s, r = Cr;
    if (e.abbr = t, C[t] != null)
      mr(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = C[t]._config;
    else if (e.parentLocale != null)
      if (C[e.parentLocale] != null)
        r = C[e.parentLocale]._config;
      else if (s = It(e.parentLocale), s != null)
        r = s._config;
      else
        return Ke[e.parentLocale] || (Ke[e.parentLocale] = []), Ke[e.parentLocale].push({
          name: t,
          config: e
        }), null;
    return C[t] = new vs(ns(r, e)), Ke[t] && Ke[t].forEach(function(i) {
      As(i.name, i.config);
    }), Se(t), C[t];
  } else
    return delete C[t], null;
}
function sa(t, e) {
  if (e != null) {
    var s, r, i = Cr;
    C[t] != null && C[t].parentLocale != null ? C[t].set(ns(C[t]._config, e)) : (r = It(t), r != null && (i = r._config), e = ns(i, e), r == null && (e.abbr = t), s = new vs(e), s.parentLocale = C[t], C[t] = s), Se(t);
  } else
    C[t] != null && (C[t].parentLocale != null ? (C[t] = C[t].parentLocale, t === Se() && Se(t)) : C[t] != null && delete C[t]);
  return C[t];
}
function pe(t) {
  var e;
  if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t)
    return lt;
  if (!X(t)) {
    if (e = It(t), e)
      return e;
    t = [t];
  }
  return ea(t);
}
function ra() {
  return as(C);
}
function xs(t) {
  var e, s = t._a;
  return s && g(t).overflow === -2 && (e = s[he] < 0 || s[he] > 11 ? he : s[re] < 1 || s[re] > Ds(s[Y], s[he]) ? re : s[j] < 0 || s[j] > 24 || s[j] === 24 && (s[Q] !== 0 || s[ce] !== 0 || s[Ae] !== 0) ? j : s[Q] < 0 || s[Q] > 59 ? Q : s[ce] < 0 || s[ce] > 59 ? ce : s[Ae] < 0 || s[Ae] > 999 ? Ae : -1, g(t)._overflowDayOfYear && (e < Y || e > re) && (e = re), g(t)._overflowWeeks && e === -1 && (e = on), g(t)._overflowWeekday && e === -1 && (e = ln), g(t).overflow = e), t;
}
var ia = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, na = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, aa = /Z|[+-]\d\d(?::?\d\d)?/, yt = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], Kt = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], oa = /^\/?Date\((-?\d+)/i, la = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, ua = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function $r(t) {
  var e, s, r = t._i, i = ia.exec(r) || na.exec(r), n, a, o, l, h = yt.length, u = Kt.length;
  if (i) {
    for (g(t).iso = !0, e = 0, s = h; e < s; e++)
      if (yt[e][1].exec(i[1])) {
        a = yt[e][0], n = yt[e][2] !== !1;
        break;
      }
    if (a == null) {
      t._isValid = !1;
      return;
    }
    if (i[3]) {
      for (e = 0, s = u; e < s; e++)
        if (Kt[e][1].exec(i[3])) {
          o = (i[2] || " ") + Kt[e][0];
          break;
        }
      if (o == null) {
        t._isValid = !1;
        return;
      }
    }
    if (!n && o != null) {
      t._isValid = !1;
      return;
    }
    if (i[4])
      if (aa.exec(i[4]))
        l = "Z";
      else {
        t._isValid = !1;
        return;
      }
    t._f = a + (o || "") + (l || ""), Cs(t);
  } else
    t._isValid = !1;
}
function ha(t, e, s, r, i, n) {
  var a = [
    ca(t),
    Tr.indexOf(e),
    parseInt(s, 10),
    parseInt(r, 10),
    parseInt(i, 10)
  ];
  return n && a.push(parseInt(n, 10)), a;
}
function ca(t) {
  var e = parseInt(t, 10);
  return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e;
}
function da(t) {
  return t.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function fa(t, e, s) {
  if (t) {
    var r = Ar.indexOf(t), i = new Date(
      e[0],
      e[1],
      e[2]
    ).getDay();
    if (r !== i)
      return g(s).weekdayMismatch = !0, s._isValid = !1, !1;
  }
  return !0;
}
function _a(t, e, s) {
  if (t)
    return ua[t];
  if (e)
    return 0;
  var r = parseInt(s, 10), i = r % 100, n = (r - i) / 100;
  return n * 60 + i;
}
function jr(t) {
  var e = la.exec(da(t._i)), s;
  if (e) {
    if (s = ha(
      e[4],
      e[3],
      e[2],
      e[5],
      e[6],
      e[7]
    ), !fa(e[1], s, t))
      return;
    t._a = s, t._tzm = _a(e[8], e[9], e[10]), t._d = at.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), g(t).rfc2822 = !0;
  } else
    t._isValid = !1;
}
function pa(t) {
  var e = oa.exec(t._i);
  if (e !== null) {
    t._d = /* @__PURE__ */ new Date(+e[1]);
    return;
  }
  if ($r(t), t._isValid === !1)
    delete t._isValid;
  else
    return;
  if (jr(t), t._isValid === !1)
    delete t._isValid;
  else
    return;
  t._strict ? t._isValid = !1 : _.createFromInputFallback(t);
}
_.createFromInputFallback = V(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(t) {
    t._d = /* @__PURE__ */ new Date(t._i + (t._useUTC ? " UTC" : ""));
  }
);
function Ue(t, e, s) {
  return t ?? e ?? s;
}
function ma(t) {
  var e = new Date(_.now());
  return t._useUTC ? [
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate()
  ] : [e.getFullYear(), e.getMonth(), e.getDate()];
}
function Rs(t) {
  var e, s, r = [], i, n, a;
  if (!t._d) {
    for (i = ma(t), t._w && t._a[re] == null && t._a[he] == null && ya(t), t._dayOfYear != null && (a = Ue(t._a[Y], i[Y]), (t._dayOfYear > st(a) || t._dayOfYear === 0) && (g(t)._overflowDayOfYear = !0), s = at(a, 0, t._dayOfYear), t._a[he] = s.getUTCMonth(), t._a[re] = s.getUTCDate()), e = 0; e < 3 && t._a[e] == null; ++e)
      t._a[e] = r[e] = i[e];
    for (; e < 7; e++)
      t._a[e] = r[e] = t._a[e] == null ? e === 2 ? 1 : 0 : t._a[e];
    t._a[j] === 24 && t._a[Q] === 0 && t._a[ce] === 0 && t._a[Ae] === 0 && (t._nextDay = !0, t._a[j] = 0), t._d = (t._useUTC ? at : Sn).apply(
      null,
      r
    ), n = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), t._tzm != null && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[j] = 24), t._w && typeof t._w.d < "u" && t._w.d !== n && (g(t).weekdayMismatch = !0);
  }
}
function ya(t) {
  var e, s, r, i, n, a, o, l, h;
  e = t._w, e.GG != null || e.W != null || e.E != null ? (n = 1, a = 4, s = Ue(
    e.GG,
    t._a[Y],
    ot(x(), 1, 4).year
  ), r = Ue(e.W, 1), i = Ue(e.E, 1), (i < 1 || i > 7) && (l = !0)) : (n = t._locale._week.dow, a = t._locale._week.doy, h = ot(x(), n, a), s = Ue(e.gg, t._a[Y], h.year), r = Ue(e.w, h.week), e.d != null ? (i = e.d, (i < 0 || i > 6) && (l = !0)) : e.e != null ? (i = e.e + n, (e.e < 0 || e.e > 6) && (l = !0)) : i = n), r < 1 || r > fe(s, n, a) ? g(t)._overflowWeeks = !0 : l != null ? g(t)._overflowWeekday = !0 : (o = Mr(s, r, i, n, a), t._a[Y] = o.year, t._dayOfYear = o.dayOfYear);
}
_.ISO_8601 = function() {
};
_.RFC_2822 = function() {
};
function Cs(t) {
  if (t._f === _.ISO_8601) {
    $r(t);
    return;
  }
  if (t._f === _.RFC_2822) {
    jr(t);
    return;
  }
  t._a = [], g(t).empty = !0;
  var e = "" + t._i, s, r, i, n, a, o = e.length, l = 0, h, u;
  for (i = yr(t._f, t._locale).match(bs) || [], u = i.length, s = 0; s < u; s++)
    n = i[s], r = (e.match(rn(n, t)) || [])[0], r && (a = e.substr(0, e.indexOf(r)), a.length > 0 && g(t).unusedInput.push(a), e = e.slice(
      e.indexOf(r) + r.length
    ), l += r.length), Ne[n] ? (r ? g(t).empty = !1 : g(t).unusedTokens.push(n), an(n, r, t)) : t._strict && !r && g(t).unusedTokens.push(n);
  g(t).charsLeftOver = o - l, e.length > 0 && g(t).unusedInput.push(e), t._a[j] <= 12 && g(t).bigHour === !0 && t._a[j] > 0 && (g(t).bigHour = void 0), g(t).parsedDateParts = t._a.slice(0), g(t).meridiem = t._meridiem, t._a[j] = ga(
    t._locale,
    t._a[j],
    t._meridiem
  ), h = g(t).era, h !== null && (t._a[Y] = t._locale.erasConvertYear(h, t._a[Y])), Rs(t), xs(t);
}
function ga(t, e, s) {
  var r;
  return s == null ? e : t.meridiemHour != null ? t.meridiemHour(e, s) : (t.isPM != null && (r = t.isPM(s), r && e < 12 && (e += 12), !r && e === 12 && (e = 0)), e);
}
function wa(t) {
  var e, s, r, i, n, a, o = !1, l = t._f.length;
  if (l === 0) {
    g(t).invalidFormat = !0, t._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (i = 0; i < l; i++)
    n = 0, a = !1, e = ws({}, t), t._useUTC != null && (e._useUTC = t._useUTC), e._f = t._f[i], Cs(e), gs(e) && (a = !0), n += g(e).charsLeftOver, n += g(e).unusedTokens.length * 10, g(e).score = n, o ? n < r && (r = n, s = e) : (r == null || n < r || a) && (r = n, s = e, a && (o = !0));
  be(t, s || e);
}
function va(t) {
  if (!t._d) {
    var e = ks(t._i), s = e.day === void 0 ? e.date : e.day;
    t._a = _r(
      [e.year, e.month, s, e.hour, e.minute, e.second, e.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), Rs(t);
  }
}
function ba(t) {
  var e = new ct(xs(Ir(t)));
  return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e;
}
function Ir(t) {
  var e = t._i, s = t._f;
  return t._locale = t._locale || pe(t._l), e === null || s === void 0 && e === "" ? Mt({ nullInput: !0 }) : (typeof e == "string" && (t._i = e = t._locale.preparse(e)), ee(e) ? new ct(xs(e)) : (ht(e) ? t._d = e : X(s) ? wa(t) : s ? Cs(t) : ka(t), gs(t) || (t._d = null), t));
}
function ka(t) {
  var e = t._i;
  L(e) ? t._d = new Date(_.now()) : ht(e) ? t._d = new Date(e.valueOf()) : typeof e == "string" ? pa(t) : X(e) ? (t._a = _r(e.slice(0), function(s) {
    return parseInt(s, 10);
  }), Rs(t)) : xe(e) ? va(t) : _e(e) ? t._d = new Date(e) : _.createFromInputFallback(t);
}
function Yr(t, e, s, r, i) {
  var n = {};
  return (e === !0 || e === !1) && (r = e, e = void 0), (s === !0 || s === !1) && (r = s, s = void 0), (xe(t) && ys(t) || X(t) && t.length === 0) && (t = void 0), n._isAMomentObject = !0, n._useUTC = n._isUTC = i, n._l = s, n._i = t, n._f = e, n._strict = r, ba(n);
}
function x(t, e, s, r) {
  return Yr(t, e, s, r, !1);
}
var Sa = V(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var t = x.apply(null, arguments);
    return this.isValid() && t.isValid() ? t < this ? this : t : Mt();
  }
), Ta = V(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var t = x.apply(null, arguments);
    return this.isValid() && t.isValid() ? t > this ? this : t : Mt();
  }
);
function Ur(t, e) {
  var s, r;
  if (e.length === 1 && X(e[0]) && (e = e[0]), !e.length)
    return x();
  for (s = e[0], r = 1; r < e.length; ++r)
    (!e[r].isValid() || e[r][t](s)) && (s = e[r]);
  return s;
}
function Oa() {
  var t = [].slice.call(arguments, 0);
  return Ur("isBefore", t);
}
function Da() {
  var t = [].slice.call(arguments, 0);
  return Ur("isAfter", t);
}
var Pa = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Ze = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function Ea(t) {
  var e, s = !1, r, i = Ze.length;
  for (e in t)
    if (T(t, e) && !($.call(Ze, e) !== -1 && (t[e] == null || !isNaN(t[e]))))
      return !1;
  for (r = 0; r < i; ++r)
    if (t[Ze[r]]) {
      if (s)
        return !1;
      parseFloat(t[Ze[r]]) !== v(t[Ze[r]]) && (s = !0);
    }
  return !0;
}
function Ma() {
  return this._isValid;
}
function Aa() {
  return te(NaN);
}
function Yt(t) {
  var e = ks(t), s = e.year || 0, r = e.quarter || 0, i = e.month || 0, n = e.week || e.isoWeek || 0, a = e.day || 0, o = e.hour || 0, l = e.minute || 0, h = e.second || 0, u = e.millisecond || 0;
  this._isValid = Ea(e), this._milliseconds = +u + h * 1e3 + // 1000
  l * 6e4 + // 1000 * 60
  o * 1e3 * 60 * 60, this._days = +a + n * 7, this._months = +i + r * 3 + s * 12, this._data = {}, this._locale = pe(), this._bubble();
}
function kt(t) {
  return t instanceof Yt;
}
function ls(t) {
  return t < 0 ? Math.round(-1 * t) * -1 : Math.round(t);
}
function xa(t, e, s) {
  var r = Math.min(t.length, e.length), i = Math.abs(t.length - e.length), n = 0, a;
  for (a = 0; a < r; a++)
    v(t[a]) !== v(e[a]) && n++;
  return n + i;
}
function Lr(t, e) {
  m(t, 0, 0, function() {
    var s = this.utcOffset(), r = "+";
    return s < 0 && (s = -s, r = "-"), r + ie(~~(s / 60), 2) + e + ie(~~s % 60, 2);
  });
}
Lr("Z", ":");
Lr("ZZ", "");
p("Z", $t);
p("ZZ", $t);
E(["Z", "ZZ"], function(t, e, s) {
  s._useUTC = !0, s._tzm = $s($t, t);
});
var Ra = /([\+\-]|\d\d)/gi;
function $s(t, e) {
  var s = (e || "").match(t), r, i, n;
  return s === null ? null : (r = s[s.length - 1] || [], i = (r + "").match(Ra) || ["-", 0, 0], n = +(i[1] * 60) + v(i[2]), n === 0 ? 0 : i[0] === "+" ? n : -n);
}
function js(t, e) {
  var s, r;
  return e._isUTC ? (s = e.clone(), r = (ee(t) || ht(t) ? t.valueOf() : x(t).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + r), _.updateOffset(s, !1), s) : x(t).local();
}
function us(t) {
  return -Math.round(t._d.getTimezoneOffset());
}
_.updateOffset = function() {
};
function Ca(t, e, s) {
  var r = this._offset || 0, i;
  if (!this.isValid())
    return t != null ? this : NaN;
  if (t != null) {
    if (typeof t == "string") {
      if (t = $s($t, t), t === null)
        return this;
    } else Math.abs(t) < 16 && !s && (t = t * 60);
    return !this._isUTC && e && (i = us(this)), this._offset = t, this._isUTC = !0, i != null && this.add(i, "m"), r !== t && (!e || this._changeInProgress ? Wr(
      this,
      te(t - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, _.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : us(this);
}
function $a(t, e) {
  return t != null ? (typeof t != "string" && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset();
}
function ja(t) {
  return this.utcOffset(0, t);
}
function Ia(t) {
  return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(us(this), "m")), this;
}
function Ya() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var t = $s(tn, this._i);
    t != null ? this.utcOffset(t) : this.utcOffset(0, !0);
  }
  return this;
}
function Ua(t) {
  return this.isValid() ? (t = t ? x(t).utcOffset() : 0, (this.utcOffset() - t) % 60 === 0) : !1;
}
function La() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function Na() {
  if (!L(this._isDSTShifted))
    return this._isDSTShifted;
  var t = {}, e;
  return ws(t, this), t = Ir(t), t._a ? (e = t._isUTC ? ne(t._a) : x(t._a), this._isDSTShifted = this.isValid() && xa(t._a, e.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Fa() {
  return this.isValid() ? !this._isUTC : !1;
}
function Wa() {
  return this.isValid() ? this._isUTC : !1;
}
function Nr() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Ha = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Ba = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function te(t, e) {
  var s = t, r = null, i, n, a;
  return kt(t) ? s = {
    ms: t._milliseconds,
    d: t._days,
    M: t._months
  } : _e(t) || !isNaN(+t) ? (s = {}, e ? s[e] = +t : s.milliseconds = +t) : (r = Ha.exec(t)) ? (i = r[1] === "-" ? -1 : 1, s = {
    y: 0,
    d: v(r[re]) * i,
    h: v(r[j]) * i,
    m: v(r[Q]) * i,
    s: v(r[ce]) * i,
    ms: v(ls(r[Ae] * 1e3)) * i
    // the millisecond decimal point is included in the match
  }) : (r = Ba.exec(t)) ? (i = r[1] === "-" ? -1 : 1, s = {
    y: Te(r[2], i),
    M: Te(r[3], i),
    w: Te(r[4], i),
    d: Te(r[5], i),
    h: Te(r[6], i),
    m: Te(r[7], i),
    s: Te(r[8], i)
  }) : s == null ? s = {} : typeof s == "object" && ("from" in s || "to" in s) && (a = Ga(
    x(s.from),
    x(s.to)
  ), s = {}, s.ms = a.milliseconds, s.M = a.months), n = new Yt(s), kt(t) && T(t, "_locale") && (n._locale = t._locale), kt(t) && T(t, "_isValid") && (n._isValid = t._isValid), n;
}
te.fn = Yt.prototype;
te.invalid = Aa;
function Te(t, e) {
  var s = t && parseFloat(t.replace(",", "."));
  return (isNaN(s) ? 0 : s) * e;
}
function Js(t, e) {
  var s = {};
  return s.months = e.month() - t.month() + (e.year() - t.year()) * 12, t.clone().add(s.months, "M").isAfter(e) && --s.months, s.milliseconds = +e - +t.clone().add(s.months, "M"), s;
}
function Ga(t, e) {
  var s;
  return t.isValid() && e.isValid() ? (e = js(e, t), t.isBefore(e) ? s = Js(t, e) : (s = Js(e, t), s.milliseconds = -s.milliseconds, s.months = -s.months), s) : { milliseconds: 0, months: 0 };
}
function Fr(t, e) {
  return function(s, r) {
    var i, n;
    return r !== null && !isNaN(+r) && (mr(
      e,
      "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), n = s, s = r, r = n), i = te(s, r), Wr(this, i, t), this;
  };
}
function Wr(t, e, s, r) {
  var i = e._milliseconds, n = ls(e._days), a = ls(e._months);
  t.isValid() && (r = r ?? !0, a && Dr(t, nt(t, "Month") + a * s), n && Sr(t, "Date", nt(t, "Date") + n * s), i && t._d.setTime(t._d.valueOf() + i * s), r && _.updateOffset(t, n || a));
}
var Va = Fr(1, "add"), za = Fr(-1, "subtract");
function Hr(t) {
  return typeof t == "string" || t instanceof String;
}
function qa(t) {
  return ee(t) || ht(t) || Hr(t) || _e(t) || Ka(t) || Ja(t) || t === null || t === void 0;
}
function Ja(t) {
  var e = xe(t) && !ys(t), s = !1, r = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], i, n, a = r.length;
  for (i = 0; i < a; i += 1)
    n = r[i], s = s || T(t, n);
  return e && s;
}
function Ka(t) {
  var e = X(t), s = !1;
  return e && (s = t.filter(function(r) {
    return !_e(r) && Hr(t);
  }).length === 0), e && s;
}
function Za(t) {
  var e = xe(t) && !ys(t), s = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], i, n;
  for (i = 0; i < r.length; i += 1)
    n = r[i], s = s || T(t, n);
  return e && s;
}
function Qa(t, e) {
  var s = t.diff(e, "days", !0);
  return s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse";
}
function Xa(t, e) {
  arguments.length === 1 && (arguments[0] ? qa(arguments[0]) ? (t = arguments[0], e = void 0) : Za(arguments[0]) && (e = arguments[0], t = void 0) : (t = void 0, e = void 0));
  var s = t || x(), r = js(s, this).startOf("day"), i = _.calendarFormat(this, r) || "sameElse", n = e && (ae(e[i]) ? e[i].call(this, s) : e[i]);
  return this.format(
    n || this.localeData().calendar(i, this, x(s))
  );
}
function eo() {
  return new ct(this);
}
function to(t, e) {
  var s = ee(t) ? t : x(t);
  return this.isValid() && s.isValid() ? (e = z(e) || "millisecond", e === "millisecond" ? this.valueOf() > s.valueOf() : s.valueOf() < this.clone().startOf(e).valueOf()) : !1;
}
function so(t, e) {
  var s = ee(t) ? t : x(t);
  return this.isValid() && s.isValid() ? (e = z(e) || "millisecond", e === "millisecond" ? this.valueOf() < s.valueOf() : this.clone().endOf(e).valueOf() < s.valueOf()) : !1;
}
function ro(t, e, s, r) {
  var i = ee(t) ? t : x(t), n = ee(e) ? e : x(e);
  return this.isValid() && i.isValid() && n.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(i, s) : !this.isBefore(i, s)) && (r[1] === ")" ? this.isBefore(n, s) : !this.isAfter(n, s))) : !1;
}
function io(t, e) {
  var s = ee(t) ? t : x(t), r;
  return this.isValid() && s.isValid() ? (e = z(e) || "millisecond", e === "millisecond" ? this.valueOf() === s.valueOf() : (r = s.valueOf(), this.clone().startOf(e).valueOf() <= r && r <= this.clone().endOf(e).valueOf())) : !1;
}
function no(t, e) {
  return this.isSame(t, e) || this.isAfter(t, e);
}
function ao(t, e) {
  return this.isSame(t, e) || this.isBefore(t, e);
}
function oo(t, e, s) {
  var r, i, n;
  if (!this.isValid())
    return NaN;
  if (r = js(t, this), !r.isValid())
    return NaN;
  switch (i = (r.utcOffset() - this.utcOffset()) * 6e4, e = z(e), e) {
    case "year":
      n = St(this, r) / 12;
      break;
    case "month":
      n = St(this, r);
      break;
    case "quarter":
      n = St(this, r) / 3;
      break;
    case "second":
      n = (this - r) / 1e3;
      break;
    case "minute":
      n = (this - r) / 6e4;
      break;
    case "hour":
      n = (this - r) / 36e5;
      break;
    case "day":
      n = (this - r - i) / 864e5;
      break;
    case "week":
      n = (this - r - i) / 6048e5;
      break;
    default:
      n = this - r;
  }
  return s ? n : H(n);
}
function St(t, e) {
  if (t.date() < e.date())
    return -St(e, t);
  var s = (e.year() - t.year()) * 12 + (e.month() - t.month()), r = t.clone().add(s, "months"), i, n;
  return e - r < 0 ? (i = t.clone().add(s - 1, "months"), n = (e - r) / (r - i)) : (i = t.clone().add(s + 1, "months"), n = (e - r) / (i - r)), -(s + n) || 0;
}
_.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
_.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function lo() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function uo(t) {
  if (!this.isValid())
    return null;
  var e = t !== !0, s = e ? this.clone().utc() : this;
  return s.year() < 0 || s.year() > 9999 ? bt(
    s,
    e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : ae(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", bt(s, "Z")) : bt(
    s,
    e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function ho() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var t = "moment", e = "", s, r, i, n;
  return this.isLocal() || (t = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", e = "Z"), s = "[" + t + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", i = "-MM-DD[T]HH:mm:ss.SSS", n = e + '[")]', this.format(s + r + i + n);
}
function co(t) {
  t || (t = this.isUtc() ? _.defaultFormatUtc : _.defaultFormat);
  var e = bt(this, t);
  return this.localeData().postformat(e);
}
function fo(t, e) {
  return this.isValid() && (ee(t) && t.isValid() || x(t).isValid()) ? te({ to: this, from: t }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate();
}
function _o(t) {
  return this.from(x(), t);
}
function po(t, e) {
  return this.isValid() && (ee(t) && t.isValid() || x(t).isValid()) ? te({ from: this, to: t }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate();
}
function mo(t) {
  return this.to(x(), t);
}
function Br(t) {
  var e;
  return t === void 0 ? this._locale._abbr : (e = pe(t), e != null && (this._locale = e), this);
}
var Gr = V(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(t) {
    return t === void 0 ? this.localeData() : this.locale(t);
  }
);
function Vr() {
  return this._locale;
}
var Dt = 1e3, Fe = 60 * Dt, Pt = 60 * Fe, zr = (365 * 400 + 97) * 24 * Pt;
function We(t, e) {
  return (t % e + e) % e;
}
function qr(t, e, s) {
  return t < 100 && t >= 0 ? new Date(t + 400, e, s) - zr : new Date(t, e, s).valueOf();
}
function Jr(t, e, s) {
  return t < 100 && t >= 0 ? Date.UTC(t + 400, e, s) - zr : Date.UTC(t, e, s);
}
function yo(t) {
  var e, s;
  if (t = z(t), t === void 0 || t === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? Jr : qr, t) {
    case "year":
      e = s(this.year(), 0, 1);
      break;
    case "quarter":
      e = s(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      e = s(this.year(), this.month(), 1);
      break;
    case "week":
      e = s(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      e = s(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      e = s(this.year(), this.month(), this.date());
      break;
    case "hour":
      e = this._d.valueOf(), e -= We(
        e + (this._isUTC ? 0 : this.utcOffset() * Fe),
        Pt
      );
      break;
    case "minute":
      e = this._d.valueOf(), e -= We(e, Fe);
      break;
    case "second":
      e = this._d.valueOf(), e -= We(e, Dt);
      break;
  }
  return this._d.setTime(e), _.updateOffset(this, !0), this;
}
function go(t) {
  var e, s;
  if (t = z(t), t === void 0 || t === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? Jr : qr, t) {
    case "year":
      e = s(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      e = s(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      e = s(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      e = s(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      e = s(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      e = s(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      e = this._d.valueOf(), e += Pt - We(
        e + (this._isUTC ? 0 : this.utcOffset() * Fe),
        Pt
      ) - 1;
      break;
    case "minute":
      e = this._d.valueOf(), e += Fe - We(e, Fe) - 1;
      break;
    case "second":
      e = this._d.valueOf(), e += Dt - We(e, Dt) - 1;
      break;
  }
  return this._d.setTime(e), _.updateOffset(this, !0), this;
}
function wo() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function vo() {
  return Math.floor(this.valueOf() / 1e3);
}
function bo() {
  return new Date(this.valueOf());
}
function ko() {
  var t = this;
  return [
    t.year(),
    t.month(),
    t.date(),
    t.hour(),
    t.minute(),
    t.second(),
    t.millisecond()
  ];
}
function So() {
  var t = this;
  return {
    years: t.year(),
    months: t.month(),
    date: t.date(),
    hours: t.hours(),
    minutes: t.minutes(),
    seconds: t.seconds(),
    milliseconds: t.milliseconds()
  };
}
function To() {
  return this.isValid() ? this.toISOString() : null;
}
function Oo() {
  return gs(this);
}
function Do() {
  return be({}, g(this));
}
function Po() {
  return g(this).overflow;
}
function Eo() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
m("N", 0, 0, "eraAbbr");
m("NN", 0, 0, "eraAbbr");
m("NNN", 0, 0, "eraAbbr");
m("NNNN", 0, 0, "eraName");
m("NNNNN", 0, 0, "eraNarrow");
m("y", ["y", 1], "yo", "eraYear");
m("y", ["yy", 2], 0, "eraYear");
m("y", ["yyy", 3], 0, "eraYear");
m("y", ["yyyy", 4], 0, "eraYear");
p("N", Is);
p("NN", Is);
p("NNN", Is);
p("NNNN", Lo);
p("NNNNN", No);
E(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(t, e, s, r) {
    var i = s._locale.erasParse(t, r, s._strict);
    i ? g(s).era = i : g(s).invalidEra = t;
  }
);
p("y", Ge);
p("yy", Ge);
p("yyy", Ge);
p("yyyy", Ge);
p("yo", Fo);
E(["y", "yy", "yyy", "yyyy"], Y);
E(["yo"], function(t, e, s, r) {
  var i;
  s._locale._eraYearOrdinalRegex && (i = t.match(s._locale._eraYearOrdinalRegex)), s._locale.eraYearOrdinalParse ? e[Y] = s._locale.eraYearOrdinalParse(t, i) : e[Y] = parseInt(t, 10);
});
function Mo(t, e) {
  var s, r, i, n = this._eras || pe("en")._eras;
  for (s = 0, r = n.length; s < r; ++s) {
    switch (typeof n[s].since) {
      case "string":
        i = _(n[s].since).startOf("day"), n[s].since = i.valueOf();
        break;
    }
    switch (typeof n[s].until) {
      case "undefined":
        n[s].until = 1 / 0;
        break;
      case "string":
        i = _(n[s].until).startOf("day").valueOf(), n[s].until = i.valueOf();
        break;
    }
  }
  return n;
}
function Ao(t, e, s) {
  var r, i, n = this.eras(), a, o, l;
  for (t = t.toUpperCase(), r = 0, i = n.length; r < i; ++r)
    if (a = n[r].name.toUpperCase(), o = n[r].abbr.toUpperCase(), l = n[r].narrow.toUpperCase(), s)
      switch (e) {
        case "N":
        case "NN":
        case "NNN":
          if (o === t)
            return n[r];
          break;
        case "NNNN":
          if (a === t)
            return n[r];
          break;
        case "NNNNN":
          if (l === t)
            return n[r];
          break;
      }
    else if ([a, o, l].indexOf(t) >= 0)
      return n[r];
}
function xo(t, e) {
  var s = t.since <= t.until ? 1 : -1;
  return e === void 0 ? _(t.since).year() : _(t.since).year() + (e - t.offset) * s;
}
function Ro() {
  var t, e, s, r = this.localeData().eras();
  for (t = 0, e = r.length; t < e; ++t)
    if (s = this.clone().startOf("day").valueOf(), r[t].since <= s && s <= r[t].until || r[t].until <= s && s <= r[t].since)
      return r[t].name;
  return "";
}
function Co() {
  var t, e, s, r = this.localeData().eras();
  for (t = 0, e = r.length; t < e; ++t)
    if (s = this.clone().startOf("day").valueOf(), r[t].since <= s && s <= r[t].until || r[t].until <= s && s <= r[t].since)
      return r[t].narrow;
  return "";
}
function $o() {
  var t, e, s, r = this.localeData().eras();
  for (t = 0, e = r.length; t < e; ++t)
    if (s = this.clone().startOf("day").valueOf(), r[t].since <= s && s <= r[t].until || r[t].until <= s && s <= r[t].since)
      return r[t].abbr;
  return "";
}
function jo() {
  var t, e, s, r, i = this.localeData().eras();
  for (t = 0, e = i.length; t < e; ++t)
    if (s = i[t].since <= i[t].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), i[t].since <= r && r <= i[t].until || i[t].until <= r && r <= i[t].since)
      return (this.year() - _(i[t].since).year()) * s + i[t].offset;
  return this.year();
}
function Io(t) {
  return T(this, "_erasNameRegex") || Ys.call(this), t ? this._erasNameRegex : this._erasRegex;
}
function Yo(t) {
  return T(this, "_erasAbbrRegex") || Ys.call(this), t ? this._erasAbbrRegex : this._erasRegex;
}
function Uo(t) {
  return T(this, "_erasNarrowRegex") || Ys.call(this), t ? this._erasNarrowRegex : this._erasRegex;
}
function Is(t, e) {
  return e.erasAbbrRegex(t);
}
function Lo(t, e) {
  return e.erasNameRegex(t);
}
function No(t, e) {
  return e.erasNarrowRegex(t);
}
function Fo(t, e) {
  return e._eraYearOrdinalRegex || Ge;
}
function Ys() {
  var t = [], e = [], s = [], r = [], i, n, a, o, l, h = this.eras();
  for (i = 0, n = h.length; i < n; ++i)
    a = de(h[i].name), o = de(h[i].abbr), l = de(h[i].narrow), e.push(a), t.push(o), s.push(l), r.push(a), r.push(o), r.push(l);
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  );
}
m(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
m(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Ut(t, e) {
  m(0, [t, t.length], 0, e);
}
Ut("gggg", "weekYear");
Ut("ggggg", "weekYear");
Ut("GGGG", "isoWeekYear");
Ut("GGGGG", "isoWeekYear");
p("G", Ct);
p("g", Ct);
p("GG", R, F);
p("gg", R, F);
p("GGGG", Ts, Ss);
p("gggg", Ts, Ss);
p("GGGGG", Rt, At);
p("ggggg", Rt, At);
ft(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(t, e, s, r) {
    e[r.substr(0, 2)] = v(t);
  }
);
ft(["gg", "GG"], function(t, e, s, r) {
  e[r] = _.parseTwoDigitYear(t);
});
function Wo(t) {
  return Kr.call(
    this,
    t,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Ho(t) {
  return Kr.call(
    this,
    t,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function Bo() {
  return fe(this.year(), 1, 4);
}
function Go() {
  return fe(this.isoWeekYear(), 1, 4);
}
function Vo() {
  var t = this.localeData()._week;
  return fe(this.year(), t.dow, t.doy);
}
function zo() {
  var t = this.localeData()._week;
  return fe(this.weekYear(), t.dow, t.doy);
}
function Kr(t, e, s, r, i) {
  var n;
  return t == null ? ot(this, r, i).year : (n = fe(t, r, i), e > n && (e = n), qo.call(this, t, e, s, r, i));
}
function qo(t, e, s, r, i) {
  var n = Mr(t, e, s, r, i), a = at(n.year, 0, n.dayOfYear);
  return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this;
}
m("Q", 0, "Qo", "quarter");
p("Q", gr);
E("Q", function(t, e) {
  e[he] = (v(t) - 1) * 3;
});
function Jo(t) {
  return t == null ? Math.ceil((this.month() + 1) / 3) : this.month((t - 1) * 3 + this.month() % 3);
}
m("D", ["DD", 2], "Do", "date");
p("D", R, Ve);
p("DD", R, F);
p("Do", function(t, e) {
  return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient;
});
E(["D", "DD"], re);
E("Do", function(t, e) {
  e[re] = v(t.match(R)[0]);
});
var Zr = ze("Date", !0);
m("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
p("DDD", xt);
p("DDDD", wr);
E(["DDD", "DDDD"], function(t, e, s) {
  s._dayOfYear = v(t);
});
function Ko(t) {
  var e = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return t == null ? e : this.add(t - e, "d");
}
m("m", ["mm", 2], 0, "minute");
p("m", R, Os);
p("mm", R, F);
E(["m", "mm"], Q);
var Zo = ze("Minutes", !1);
m("s", ["ss", 2], 0, "second");
p("s", R, Os);
p("ss", R, F);
E(["s", "ss"], ce);
var Qo = ze("Seconds", !1);
m("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
m(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
m(0, ["SSS", 3], 0, "millisecond");
m(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
m(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
m(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
m(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
m(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
m(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
p("S", xt, gr);
p("SS", xt, F);
p("SSS", xt, wr);
var ke, Qr;
for (ke = "SSSS"; ke.length <= 9; ke += "S")
  p(ke, Ge);
function Xo(t, e) {
  e[Ae] = v(("0." + t) * 1e3);
}
for (ke = "S"; ke.length <= 9; ke += "S")
  E(ke, Xo);
Qr = ze("Milliseconds", !1);
m("z", 0, 0, "zoneAbbr");
m("zz", 0, 0, "zoneName");
function el() {
  return this._isUTC ? "UTC" : "";
}
function tl() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var d = ct.prototype;
d.add = Va;
d.calendar = Xa;
d.clone = eo;
d.diff = oo;
d.endOf = go;
d.format = co;
d.from = fo;
d.fromNow = _o;
d.to = po;
d.toNow = mo;
d.get = hn;
d.invalidAt = Po;
d.isAfter = to;
d.isBefore = so;
d.isBetween = ro;
d.isSame = io;
d.isSameOrAfter = no;
d.isSameOrBefore = ao;
d.isValid = Oo;
d.lang = Gr;
d.locale = Br;
d.localeData = Vr;
d.max = Ta;
d.min = Sa;
d.parsingFlags = Do;
d.set = cn;
d.startOf = yo;
d.subtract = za;
d.toArray = ko;
d.toObject = So;
d.toDate = bo;
d.toISOString = uo;
d.inspect = ho;
typeof Symbol < "u" && Symbol.for != null && (d[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
d.toJSON = To;
d.toString = lo;
d.unix = vo;
d.valueOf = wo;
d.creationData = Eo;
d.eraName = Ro;
d.eraNarrow = Co;
d.eraAbbr = $o;
d.eraYear = jo;
d.year = kr;
d.isLeapYear = un;
d.weekYear = Wo;
d.isoWeekYear = Ho;
d.quarter = d.quarters = Jo;
d.month = Pr;
d.daysInMonth = vn;
d.week = d.weeks = En;
d.isoWeek = d.isoWeeks = Mn;
d.weeksInYear = Vo;
d.weeksInWeekYear = zo;
d.isoWeeksInYear = Bo;
d.isoWeeksInISOWeekYear = Go;
d.date = Zr;
d.day = d.days = Wn;
d.weekday = Hn;
d.isoWeekday = Bn;
d.dayOfYear = Ko;
d.hour = d.hours = Zn;
d.minute = d.minutes = Zo;
d.second = d.seconds = Qo;
d.millisecond = d.milliseconds = Qr;
d.utcOffset = Ca;
d.utc = ja;
d.local = Ia;
d.parseZone = Ya;
d.hasAlignedHourOffset = Ua;
d.isDST = La;
d.isLocal = Fa;
d.isUtcOffset = Wa;
d.isUtc = Nr;
d.isUTC = Nr;
d.zoneAbbr = el;
d.zoneName = tl;
d.dates = V(
  "dates accessor is deprecated. Use date instead.",
  Zr
);
d.months = V(
  "months accessor is deprecated. Use month instead",
  Pr
);
d.years = V(
  "years accessor is deprecated. Use year instead",
  kr
);
d.zone = V(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  $a
);
d.isDSTShifted = V(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Na
);
function sl(t) {
  return x(t * 1e3);
}
function rl() {
  return x.apply(null, arguments).parseZone();
}
function Xr(t) {
  return t;
}
var O = vs.prototype;
O.calendar = Ni;
O.longDateFormat = Bi;
O.invalidDate = Vi;
O.ordinal = Ji;
O.preparse = Xr;
O.postformat = Xr;
O.relativeTime = Zi;
O.pastFuture = Qi;
O.set = Ui;
O.eras = Mo;
O.erasParse = Ao;
O.erasConvertYear = xo;
O.erasAbbrRegex = Yo;
O.erasNameRegex = Io;
O.erasNarrowRegex = Uo;
O.months = mn;
O.monthsShort = yn;
O.monthsParse = wn;
O.monthsRegex = kn;
O.monthsShortRegex = bn;
O.week = Tn;
O.firstDayOfYear = Pn;
O.firstDayOfWeek = Dn;
O.weekdays = Yn;
O.weekdaysMin = Ln;
O.weekdaysShort = Un;
O.weekdaysParse = Fn;
O.weekdaysRegex = Gn;
O.weekdaysShortRegex = Vn;
O.weekdaysMinRegex = zn;
O.isPM = Jn;
O.meridiem = Qn;
function Et(t, e, s, r) {
  var i = pe(), n = ne().set(r, e);
  return i[s](n, t);
}
function ei(t, e, s) {
  if (_e(t) && (e = t, t = void 0), t = t || "", e != null)
    return Et(t, e, s, "month");
  var r, i = [];
  for (r = 0; r < 12; r++)
    i[r] = Et(t, r, s, "month");
  return i;
}
function Us(t, e, s, r) {
  typeof t == "boolean" ? (_e(e) && (s = e, e = void 0), e = e || "") : (e = t, s = e, t = !1, _e(e) && (s = e, e = void 0), e = e || "");
  var i = pe(), n = t ? i._week.dow : 0, a, o = [];
  if (s != null)
    return Et(e, (s + n) % 7, r, "day");
  for (a = 0; a < 7; a++)
    o[a] = Et(e, (a + n) % 7, r, "day");
  return o;
}
function il(t, e) {
  return ei(t, e, "months");
}
function nl(t, e) {
  return ei(t, e, "monthsShort");
}
function al(t, e, s) {
  return Us(t, e, s, "weekdays");
}
function ol(t, e, s) {
  return Us(t, e, s, "weekdaysShort");
}
function ll(t, e, s) {
  return Us(t, e, s, "weekdaysMin");
}
Se("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(t) {
    var e = t % 10, s = v(t % 100 / 10) === 1 ? "th" : e === 1 ? "st" : e === 2 ? "nd" : e === 3 ? "rd" : "th";
    return t + s;
  }
});
_.lang = V(
  "moment.lang is deprecated. Use moment.locale instead.",
  Se
);
_.langData = V(
  "moment.langData is deprecated. Use moment.localeData instead.",
  pe
);
var le = Math.abs;
function ul() {
  var t = this._data;
  return this._milliseconds = le(this._milliseconds), this._days = le(this._days), this._months = le(this._months), t.milliseconds = le(t.milliseconds), t.seconds = le(t.seconds), t.minutes = le(t.minutes), t.hours = le(t.hours), t.months = le(t.months), t.years = le(t.years), this;
}
function ti(t, e, s, r) {
  var i = te(e, s);
  return t._milliseconds += r * i._milliseconds, t._days += r * i._days, t._months += r * i._months, t._bubble();
}
function hl(t, e) {
  return ti(this, t, e, 1);
}
function cl(t, e) {
  return ti(this, t, e, -1);
}
function Ks(t) {
  return t < 0 ? Math.floor(t) : Math.ceil(t);
}
function dl() {
  var t = this._milliseconds, e = this._days, s = this._months, r = this._data, i, n, a, o, l;
  return t >= 0 && e >= 0 && s >= 0 || t <= 0 && e <= 0 && s <= 0 || (t += Ks(hs(s) + e) * 864e5, e = 0, s = 0), r.milliseconds = t % 1e3, i = H(t / 1e3), r.seconds = i % 60, n = H(i / 60), r.minutes = n % 60, a = H(n / 60), r.hours = a % 24, e += H(a / 24), l = H(si(e)), s += l, e -= Ks(hs(l)), o = H(s / 12), s %= 12, r.days = e, r.months = s, r.years = o, this;
}
function si(t) {
  return t * 4800 / 146097;
}
function hs(t) {
  return t * 146097 / 4800;
}
function fl(t) {
  if (!this.isValid())
    return NaN;
  var e, s, r = this._milliseconds;
  if (t = z(t), t === "month" || t === "quarter" || t === "year")
    switch (e = this._days + r / 864e5, s = this._months + si(e), t) {
      case "month":
        return s;
      case "quarter":
        return s / 3;
      case "year":
        return s / 12;
    }
  else
    switch (e = this._days + Math.round(hs(this._months)), t) {
      case "week":
        return e / 7 + r / 6048e5;
      case "day":
        return e + r / 864e5;
      case "hour":
        return e * 24 + r / 36e5;
      case "minute":
        return e * 1440 + r / 6e4;
      case "second":
        return e * 86400 + r / 1e3;
      case "millisecond":
        return Math.floor(e * 864e5) + r;
      default:
        throw new Error("Unknown unit " + t);
    }
}
function me(t) {
  return function() {
    return this.as(t);
  };
}
var ri = me("ms"), _l = me("s"), pl = me("m"), ml = me("h"), yl = me("d"), gl = me("w"), wl = me("M"), vl = me("Q"), bl = me("y"), kl = ri;
function Sl() {
  return te(this);
}
function Tl(t) {
  return t = z(t), this.isValid() ? this[t + "s"]() : NaN;
}
function Re(t) {
  return function() {
    return this.isValid() ? this._data[t] : NaN;
  };
}
var Ol = Re("milliseconds"), Dl = Re("seconds"), Pl = Re("minutes"), El = Re("hours"), Ml = Re("days"), Al = Re("months"), xl = Re("years");
function Rl() {
  return H(this.days() / 7);
}
var ue = Math.round, Le = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function Cl(t, e, s, r, i) {
  return i.relativeTime(e || 1, !!s, t, r);
}
function $l(t, e, s, r) {
  var i = te(t).abs(), n = ue(i.as("s")), a = ue(i.as("m")), o = ue(i.as("h")), l = ue(i.as("d")), h = ue(i.as("M")), u = ue(i.as("w")), c = ue(i.as("y")), f = n <= s.ss && ["s", n] || n < s.s && ["ss", n] || a <= 1 && ["m"] || a < s.m && ["mm", a] || o <= 1 && ["h"] || o < s.h && ["hh", o] || l <= 1 && ["d"] || l < s.d && ["dd", l];
  return s.w != null && (f = f || u <= 1 && ["w"] || u < s.w && ["ww", u]), f = f || h <= 1 && ["M"] || h < s.M && ["MM", h] || c <= 1 && ["y"] || ["yy", c], f[2] = e, f[3] = +t > 0, f[4] = r, Cl.apply(null, f);
}
function jl(t) {
  return t === void 0 ? ue : typeof t == "function" ? (ue = t, !0) : !1;
}
function Il(t, e) {
  return Le[t] === void 0 ? !1 : e === void 0 ? Le[t] : (Le[t] = e, t === "s" && (Le.ss = e - 1), !0);
}
function Yl(t, e) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var s = !1, r = Le, i, n;
  return typeof t == "object" && (e = t, t = !1), typeof t == "boolean" && (s = t), typeof e == "object" && (r = Object.assign({}, Le, e), e.s != null && e.ss == null && (r.ss = e.s - 1)), i = this.localeData(), n = $l(this, !s, r, i), s && (n = i.pastFuture(+this, n)), i.postformat(n);
}
var Zt = Math.abs;
function $e(t) {
  return (t > 0) - (t < 0) || +t;
}
function Lt() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var t = Zt(this._milliseconds) / 1e3, e = Zt(this._days), s = Zt(this._months), r, i, n, a, o = this.asSeconds(), l, h, u, c;
  return o ? (r = H(t / 60), i = H(r / 60), t %= 60, r %= 60, n = H(s / 12), s %= 12, a = t ? t.toFixed(3).replace(/\.?0+$/, "") : "", l = o < 0 ? "-" : "", h = $e(this._months) !== $e(o) ? "-" : "", u = $e(this._days) !== $e(o) ? "-" : "", c = $e(this._milliseconds) !== $e(o) ? "-" : "", l + "P" + (n ? h + n + "Y" : "") + (s ? h + s + "M" : "") + (e ? u + e + "D" : "") + (i || r || t ? "T" : "") + (i ? c + i + "H" : "") + (r ? c + r + "M" : "") + (t ? c + a + "S" : "")) : "P0D";
}
var k = Yt.prototype;
k.isValid = Ma;
k.abs = ul;
k.add = hl;
k.subtract = cl;
k.as = fl;
k.asMilliseconds = ri;
k.asSeconds = _l;
k.asMinutes = pl;
k.asHours = ml;
k.asDays = yl;
k.asWeeks = gl;
k.asMonths = wl;
k.asQuarters = vl;
k.asYears = bl;
k.valueOf = kl;
k._bubble = dl;
k.clone = Sl;
k.get = Tl;
k.milliseconds = Ol;
k.seconds = Dl;
k.minutes = Pl;
k.hours = El;
k.days = Ml;
k.weeks = Rl;
k.months = Al;
k.years = xl;
k.humanize = Yl;
k.toISOString = Lt;
k.toString = Lt;
k.toJSON = Lt;
k.locale = Br;
k.localeData = Vr;
k.toIsoString = V(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Lt
);
k.lang = Gr;
m("X", 0, 0, "unix");
m("x", 0, 0, "valueOf");
p("x", Ct);
p("X", sn);
E("X", function(t, e, s) {
  s._d = new Date(parseFloat(t) * 1e3);
});
E("x", function(t, e, s) {
  s._d = new Date(v(t));
});
//! moment.js
_.version = "2.30.1";
Ii(x);
_.fn = d;
_.min = Oa;
_.max = Da;
_.now = Pa;
_.utc = ne;
_.unix = sl;
_.months = il;
_.isDate = ht;
_.locale = Se;
_.invalid = Mt;
_.duration = te;
_.isMoment = ee;
_.weekdays = al;
_.parseZone = rl;
_.localeData = pe;
_.isDuration = kt;
_.monthsShort = nl;
_.weekdaysMin = ll;
_.defineLocale = As;
_.updateLocale = sa;
_.locales = ra;
_.weekdaysShort = ol;
_.normalizeUnits = z;
_.relativeTimeRounding = jl;
_.relativeTimeThreshold = Il;
_.calendarFormat = Qa;
_.prototype = d;
_.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
function ii() {
  return "2.0.3";
}
const Ul = (t) => {
  let e;
  return t ? e = t : typeof fetch > "u" ? e = (...s) => Promise.resolve().then(() => qe).then(({ default: r }) => r(...s)) : e = fetch, (...s) => e(...s);
};
class Ls extends Error {
  constructor(e, s = "FunctionsError", r) {
    super(e), this.name = s, this.context = r;
  }
}
class ni extends Ls {
  constructor(e) {
    super("Failed to send a request to the Edge Function", "FunctionsFetchError", e);
  }
}
class ai extends Ls {
  constructor(e) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
  }
}
class oi extends Ls {
  constructor(e) {
    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e);
  }
}
var cs;
(function(t) {
  t.Any = "any", t.ApNortheast1 = "ap-northeast-1", t.ApNortheast2 = "ap-northeast-2", t.ApSouth1 = "ap-south-1", t.ApSoutheast1 = "ap-southeast-1", t.ApSoutheast2 = "ap-southeast-2", t.CaCentral1 = "ca-central-1", t.EuCentral1 = "eu-central-1", t.EuWest1 = "eu-west-1", t.EuWest2 = "eu-west-2", t.EuWest3 = "eu-west-3", t.SaEast1 = "sa-east-1", t.UsEast1 = "us-east-1", t.UsWest1 = "us-west-1", t.UsWest2 = "us-west-2";
})(cs || (cs = {}));
var Ll = function(t, e, s, r) {
  function i(n) {
    return n instanceof s ? n : new s(function(a) {
      a(n);
    });
  }
  return new (s || (s = Promise))(function(n, a) {
    function o(u) {
      try {
        h(r.next(u));
      } catch (c) {
        a(c);
      }
    }
    function l(u) {
      try {
        h(r.throw(u));
      } catch (c) {
        a(c);
      }
    }
    function h(u) {
      u.done ? n(u.value) : i(u.value).then(o, l);
    }
    h((r = r.apply(t, e || [])).next());
  });
};
class Nl {
  constructor(e, { headers: s = {}, customFetch: r, region: i = cs.Any } = {}) {
    this.url = e, this.headers = s, this.region = i, this.fetch = Ul(r);
  }
  /**
   * Updates the authorization header
   * @param token - the new jwt token sent in the authorisation header
   */
  setAuth(e) {
    this.headers.Authorization = `Bearer ${e}`;
  }
  /**
   * Invokes a function
   * @param functionName - The name of the Function to invoke.
   * @param options - Options for invoking the Function.
   */
  invoke(e, s = {}) {
    var r;
    return Ll(this, void 0, void 0, function* () {
      try {
        const { headers: i, method: n, body: a } = s;
        let o = {}, { region: l } = s;
        l || (l = this.region), l && l !== "any" && (o["x-region"] = l);
        let h;
        a && (i && !Object.prototype.hasOwnProperty.call(i, "Content-Type") || !i) && (typeof Blob < "u" && a instanceof Blob || a instanceof ArrayBuffer ? (o["Content-Type"] = "application/octet-stream", h = a) : typeof a == "string" ? (o["Content-Type"] = "text/plain", h = a) : typeof FormData < "u" && a instanceof FormData ? h = a : (o["Content-Type"] = "application/json", h = JSON.stringify(a)));
        const u = yield this.fetch(`${this.url}/${e}`, {
          method: n || "POST",
          // headers priority is (high to low):
          // 1. invoke-level headers
          // 2. client-level headers
          // 3. default Content-Type header
          headers: Object.assign(Object.assign(Object.assign({}, o), this.headers), i),
          body: h
        }).catch((D) => {
          throw new ni(D);
        }), c = u.headers.get("x-relay-error");
        if (c && c === "true")
          throw new ai(u);
        if (!u.ok)
          throw new oi(u);
        let f = ((r = u.headers.get("Content-Type")) !== null && r !== void 0 ? r : "text/plain").split(";")[0].trim(), y;
        return f === "application/json" ? y = yield u.json() : f === "application/octet-stream" ? y = yield u.blob() : f === "text/event-stream" ? y = u : f === "multipart/form-data" ? y = yield u.formData() : y = yield u.text(), { data: y, error: null };
      } catch (i) {
        return { data: null, error: i };
      }
    });
  }
}
var G = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Uh(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Fl(t) {
  if (t.__esModule) return t;
  var e = t.default;
  if (typeof e == "function") {
    var s = function r() {
      return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    s.prototype = e.prototype;
  } else s = {};
  return Object.defineProperty(s, "__esModule", { value: !0 }), Object.keys(t).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(t, r);
    Object.defineProperty(s, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return t[r];
      }
    });
  }), s;
}
var B = {}, Ns = {}, Nt = {}, _t = {}, Ft = {}, Wt = {}, Wl = function() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("unable to locate global object");
}, Be = Wl();
const Hl = Be.fetch, li = Be.fetch.bind(Be), ui = Be.Headers, Bl = Be.Request, Gl = Be.Response, qe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Headers: ui,
  Request: Bl,
  Response: Gl,
  default: li,
  fetch: Hl
}, Symbol.toStringTag, { value: "Module" })), Vl = /* @__PURE__ */ Fl(qe);
var Fs = {};
Object.defineProperty(Fs, "__esModule", { value: !0 });
class zl extends Error {
  constructor(e) {
    super(e.message), this.name = "PostgrestError", this.details = e.details, this.hint = e.hint, this.code = e.code;
  }
}
Fs.default = zl;
var hi = G && G.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Wt, "__esModule", { value: !0 });
const ql = hi(Vl), Jl = hi(Fs);
let Kl = class {
  constructor(e) {
    this.shouldThrowOnError = !1, this.method = e.method, this.url = e.url, this.headers = e.headers, this.schema = e.schema, this.body = e.body, this.shouldThrowOnError = e.shouldThrowOnError, this.signal = e.signal, this.isMaybeSingle = e.isMaybeSingle, e.fetch ? this.fetch = e.fetch : typeof fetch > "u" ? this.fetch = ql.default : this.fetch = fetch;
  }
  /**
   * If there's an error with the query, throwOnError will reject the promise by
   * throwing the error instead of returning it as part of a successful response.
   *
   * {@link https://github.com/supabase/supabase-js/issues/92}
   */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  then(e, s) {
    this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers["Accept-Profile"] = this.schema : this.headers["Content-Profile"] = this.schema), this.method !== "GET" && this.method !== "HEAD" && (this.headers["Content-Type"] = "application/json");
    const r = this.fetch;
    let i = r(this.url.toString(), {
      method: this.method,
      headers: this.headers,
      body: JSON.stringify(this.body),
      signal: this.signal
    }).then(async (n) => {
      var a, o, l;
      let h = null, u = null, c = null, f = n.status, y = n.statusText;
      if (n.ok) {
        if (this.method !== "HEAD") {
          const U = await n.text();
          U === "" || (this.headers.Accept === "text/csv" || this.headers.Accept && this.headers.Accept.includes("application/vnd.pgrst.plan+text") ? u = U : u = JSON.parse(U));
        }
        const M = (a = this.headers.Prefer) === null || a === void 0 ? void 0 : a.match(/count=(exact|planned|estimated)/), P = (o = n.headers.get("content-range")) === null || o === void 0 ? void 0 : o.split("/");
        M && P && P.length > 1 && (c = parseInt(P[1])), this.isMaybeSingle && this.method === "GET" && Array.isArray(u) && (u.length > 1 ? (h = {
          // https://github.com/PostgREST/postgrest/blob/a867d79c42419af16c18c3fb019eba8df992626f/src/PostgREST/Error.hs#L553
          code: "PGRST116",
          details: `Results contain ${u.length} rows, application/vnd.pgrst.object+json requires 1 row`,
          hint: null,
          message: "JSON object requested, multiple (or no) rows returned"
        }, u = null, c = null, f = 406, y = "Not Acceptable") : u.length === 1 ? u = u[0] : u = null);
      } else {
        const M = await n.text();
        try {
          h = JSON.parse(M), Array.isArray(h) && n.status === 404 && (u = [], h = null, f = 200, y = "OK");
        } catch {
          n.status === 404 && M === "" ? (f = 204, y = "No Content") : h = {
            message: M
          };
        }
        if (h && this.isMaybeSingle && (!((l = h == null ? void 0 : h.details) === null || l === void 0) && l.includes("0 rows")) && (h = null, f = 200, y = "OK"), h && this.shouldThrowOnError)
          throw new Jl.default(h);
      }
      return {
        error: h,
        data: u,
        count: c,
        status: f,
        statusText: y
      };
    });
    return this.shouldThrowOnError || (i = i.catch((n) => {
      var a, o, l;
      return {
        error: {
          message: `${(a = n == null ? void 0 : n.name) !== null && a !== void 0 ? a : "FetchError"}: ${n == null ? void 0 : n.message}`,
          details: `${(o = n == null ? void 0 : n.stack) !== null && o !== void 0 ? o : ""}`,
          hint: "",
          code: `${(l = n == null ? void 0 : n.code) !== null && l !== void 0 ? l : ""}`
        },
        data: null,
        count: null,
        status: 0,
        statusText: ""
      };
    })), i.then(e, s);
  }
};
Wt.default = Kl;
var Zl = G && G.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Ft, "__esModule", { value: !0 });
const Ql = Zl(Wt);
let Xl = class extends Ql.default {
  /**
   * Perform a SELECT on the query result.
   *
   * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
   * return modified rows. By calling this method, modified rows are returned in
   * `data`.
   *
   * @param columns - The columns to retrieve, separated by commas
   */
  select(e) {
    let s = !1;
    const r = (e ?? "*").split("").map((i) => /\s/.test(i) && !s ? "" : (i === '"' && (s = !s), i)).join("");
    return this.url.searchParams.set("select", r), this.headers.Prefer && (this.headers.Prefer += ","), this.headers.Prefer += "return=representation", this;
  }
  /**
   * Order the query result by `column`.
   *
   * You can call this method multiple times to order by multiple columns.
   *
   * You can order referenced tables, but it only affects the ordering of the
   * parent table if you use `!inner` in the query.
   *
   * @param column - The column to order by
   * @param options - Named parameters
   * @param options.ascending - If `true`, the result will be in ascending order
   * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
   * `null`s appear last.
   * @param options.referencedTable - Set this to order a referenced table by
   * its columns
   * @param options.foreignTable - Deprecated, use `options.referencedTable`
   * instead
   */
  order(e, { ascending: s = !0, nullsFirst: r, foreignTable: i, referencedTable: n = i } = {}) {
    const a = n ? `${n}.order` : "order", o = this.url.searchParams.get(a);
    return this.url.searchParams.set(a, `${o ? `${o},` : ""}${e}.${s ? "asc" : "desc"}${r === void 0 ? "" : r ? ".nullsfirst" : ".nullslast"}`), this;
  }
  /**
   * Limit the query result by `count`.
   *
   * @param count - The maximum number of rows to return
   * @param options - Named parameters
   * @param options.referencedTable - Set this to limit rows of referenced
   * tables instead of the parent table
   * @param options.foreignTable - Deprecated, use `options.referencedTable`
   * instead
   */
  limit(e, { foreignTable: s, referencedTable: r = s } = {}) {
    const i = typeof r > "u" ? "limit" : `${r}.limit`;
    return this.url.searchParams.set(i, `${e}`), this;
  }
  /**
   * Limit the query result by starting at an offset `from` and ending at the offset `to`.
   * Only records within this range are returned.
   * This respects the query order and if there is no order clause the range could behave unexpectedly.
   * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
   * and fourth rows of the query.
   *
   * @param from - The starting index from which to limit the result
   * @param to - The last index to which to limit the result
   * @param options - Named parameters
   * @param options.referencedTable - Set this to limit rows of referenced
   * tables instead of the parent table
   * @param options.foreignTable - Deprecated, use `options.referencedTable`
   * instead
   */
  range(e, s, { foreignTable: r, referencedTable: i = r } = {}) {
    const n = typeof i > "u" ? "offset" : `${i}.offset`, a = typeof i > "u" ? "limit" : `${i}.limit`;
    return this.url.searchParams.set(n, `${e}`), this.url.searchParams.set(a, `${s - e + 1}`), this;
  }
  /**
   * Set the AbortSignal for the fetch request.
   *
   * @param signal - The AbortSignal to use for the fetch request
   */
  abortSignal(e) {
    return this.signal = e, this;
  }
  /**
   * Return `data` as a single object instead of an array of objects.
   *
   * Query result must be one row (e.g. using `.limit(1)`), otherwise this
   * returns an error.
   */
  single() {
    return this.headers.Accept = "application/vnd.pgrst.object+json", this;
  }
  /**
   * Return `data` as a single object instead of an array of objects.
   *
   * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
   * this returns an error.
   */
  maybeSingle() {
    return this.method === "GET" ? this.headers.Accept = "application/json" : this.headers.Accept = "application/vnd.pgrst.object+json", this.isMaybeSingle = !0, this;
  }
  /**
   * Return `data` as a string in CSV format.
   */
  csv() {
    return this.headers.Accept = "text/csv", this;
  }
  /**
   * Return `data` as an object in [GeoJSON](https://geojson.org) format.
   */
  geojson() {
    return this.headers.Accept = "application/geo+json", this;
  }
  /**
   * Return `data` as the EXPLAIN plan for the query.
   *
   * You need to enable the
   * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
   * setting before using this method.
   *
   * @param options - Named parameters
   *
   * @param options.analyze - If `true`, the query will be executed and the
   * actual run time will be returned
   *
   * @param options.verbose - If `true`, the query identifier will be returned
   * and `data` will include the output columns of the query
   *
   * @param options.settings - If `true`, include information on configuration
   * parameters that affect query planning
   *
   * @param options.buffers - If `true`, include information on buffer usage
   *
   * @param options.wal - If `true`, include information on WAL record generation
   *
   * @param options.format - The format of the output, can be `"text"` (default)
   * or `"json"`
   */
  explain({ analyze: e = !1, verbose: s = !1, settings: r = !1, buffers: i = !1, wal: n = !1, format: a = "text" } = {}) {
    var o;
    const l = [
      e ? "analyze" : null,
      s ? "verbose" : null,
      r ? "settings" : null,
      i ? "buffers" : null,
      n ? "wal" : null
    ].filter(Boolean).join("|"), h = (o = this.headers.Accept) !== null && o !== void 0 ? o : "application/json";
    return this.headers.Accept = `application/vnd.pgrst.plan+${a}; for="${h}"; options=${l};`, a === "json" ? this : this;
  }
  /**
   * Rollback the query.
   *
   * `data` will still be returned, but the query is not committed.
   */
  rollback() {
    var e;
    return ((e = this.headers.Prefer) !== null && e !== void 0 ? e : "").trim().length > 0 ? this.headers.Prefer += ",tx=rollback" : this.headers.Prefer = "tx=rollback", this;
  }
  /**
   * Override the type of the returned `data`.
   *
   * @typeParam NewResult - The new result type to override with
   */
  returns() {
    return this;
  }
};
Ft.default = Xl;
var eu = G && G.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(_t, "__esModule", { value: !0 });
const tu = eu(Ft);
let su = class extends tu.default {
  /**
   * Match only rows where `column` is equal to `value`.
   *
   * To check if the value of `column` is NULL, you should use `.is()` instead.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  eq(e, s) {
    return this.url.searchParams.append(e, `eq.${s}`), this;
  }
  /**
   * Match only rows where `column` is not equal to `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  neq(e, s) {
    return this.url.searchParams.append(e, `neq.${s}`), this;
  }
  /**
   * Match only rows where `column` is greater than `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  gt(e, s) {
    return this.url.searchParams.append(e, `gt.${s}`), this;
  }
  /**
   * Match only rows where `column` is greater than or equal to `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  gte(e, s) {
    return this.url.searchParams.append(e, `gte.${s}`), this;
  }
  /**
   * Match only rows where `column` is less than `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  lt(e, s) {
    return this.url.searchParams.append(e, `lt.${s}`), this;
  }
  /**
   * Match only rows where `column` is less than or equal to `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  lte(e, s) {
    return this.url.searchParams.append(e, `lte.${s}`), this;
  }
  /**
   * Match only rows where `column` matches `pattern` case-sensitively.
   *
   * @param column - The column to filter on
   * @param pattern - The pattern to match with
   */
  like(e, s) {
    return this.url.searchParams.append(e, `like.${s}`), this;
  }
  /**
   * Match only rows where `column` matches all of `patterns` case-sensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  likeAllOf(e, s) {
    return this.url.searchParams.append(e, `like(all).{${s.join(",")}}`), this;
  }
  /**
   * Match only rows where `column` matches any of `patterns` case-sensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  likeAnyOf(e, s) {
    return this.url.searchParams.append(e, `like(any).{${s.join(",")}}`), this;
  }
  /**
   * Match only rows where `column` matches `pattern` case-insensitively.
   *
   * @param column - The column to filter on
   * @param pattern - The pattern to match with
   */
  ilike(e, s) {
    return this.url.searchParams.append(e, `ilike.${s}`), this;
  }
  /**
   * Match only rows where `column` matches all of `patterns` case-insensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  ilikeAllOf(e, s) {
    return this.url.searchParams.append(e, `ilike(all).{${s.join(",")}}`), this;
  }
  /**
   * Match only rows where `column` matches any of `patterns` case-insensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  ilikeAnyOf(e, s) {
    return this.url.searchParams.append(e, `ilike(any).{${s.join(",")}}`), this;
  }
  /**
   * Match only rows where `column` IS `value`.
   *
   * For non-boolean columns, this is only relevant for checking if the value of
   * `column` is NULL by setting `value` to `null`.
   *
   * For boolean columns, you can also set `value` to `true` or `false` and it
   * will behave the same way as `.eq()`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  is(e, s) {
    return this.url.searchParams.append(e, `is.${s}`), this;
  }
  /**
   * Match only rows where `column` is included in the `values` array.
   *
   * @param column - The column to filter on
   * @param values - The values array to filter with
   */
  in(e, s) {
    const r = Array.from(new Set(s)).map((i) => typeof i == "string" && new RegExp("[,()]").test(i) ? `"${i}"` : `${i}`).join(",");
    return this.url.searchParams.append(e, `in.(${r})`), this;
  }
  /**
   * Only relevant for jsonb, array, and range columns. Match only rows where
   * `column` contains every element appearing in `value`.
   *
   * @param column - The jsonb, array, or range column to filter on
   * @param value - The jsonb, array, or range value to filter with
   */
  contains(e, s) {
    return typeof s == "string" ? this.url.searchParams.append(e, `cs.${s}`) : Array.isArray(s) ? this.url.searchParams.append(e, `cs.{${s.join(",")}}`) : this.url.searchParams.append(e, `cs.${JSON.stringify(s)}`), this;
  }
  /**
   * Only relevant for jsonb, array, and range columns. Match only rows where
   * every element appearing in `column` is contained by `value`.
   *
   * @param column - The jsonb, array, or range column to filter on
   * @param value - The jsonb, array, or range value to filter with
   */
  containedBy(e, s) {
    return typeof s == "string" ? this.url.searchParams.append(e, `cd.${s}`) : Array.isArray(s) ? this.url.searchParams.append(e, `cd.{${s.join(",")}}`) : this.url.searchParams.append(e, `cd.${JSON.stringify(s)}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is greater than any element in `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeGt(e, s) {
    return this.url.searchParams.append(e, `sr.${s}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is either contained in `range` or greater than any element in
   * `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeGte(e, s) {
    return this.url.searchParams.append(e, `nxl.${s}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is less than any element in `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeLt(e, s) {
    return this.url.searchParams.append(e, `sl.${s}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is either contained in `range` or less than any element in
   * `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeLte(e, s) {
    return this.url.searchParams.append(e, `nxr.${s}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where `column` is
   * mutually exclusive to `range` and there can be no element between the two
   * ranges.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeAdjacent(e, s) {
    return this.url.searchParams.append(e, `adj.${s}`), this;
  }
  /**
   * Only relevant for array and range columns. Match only rows where
   * `column` and `value` have an element in common.
   *
   * @param column - The array or range column to filter on
   * @param value - The array or range value to filter with
   */
  overlaps(e, s) {
    return typeof s == "string" ? this.url.searchParams.append(e, `ov.${s}`) : this.url.searchParams.append(e, `ov.{${s.join(",")}}`), this;
  }
  /**
   * Only relevant for text and tsvector columns. Match only rows where
   * `column` matches the query string in `query`.
   *
   * @param column - The text or tsvector column to filter on
   * @param query - The query text to match with
   * @param options - Named parameters
   * @param options.config - The text search configuration to use
   * @param options.type - Change how the `query` text is interpreted
   */
  textSearch(e, s, { config: r, type: i } = {}) {
    let n = "";
    i === "plain" ? n = "pl" : i === "phrase" ? n = "ph" : i === "websearch" && (n = "w");
    const a = r === void 0 ? "" : `(${r})`;
    return this.url.searchParams.append(e, `${n}fts${a}.${s}`), this;
  }
  /**
   * Match only rows where each column in `query` keys is equal to its
   * associated value. Shorthand for multiple `.eq()`s.
   *
   * @param query - The object to filter with, with column names as keys mapped
   * to their filter values
   */
  match(e) {
    return Object.entries(e).forEach(([s, r]) => {
      this.url.searchParams.append(s, `eq.${r}`);
    }), this;
  }
  /**
   * Match only rows which doesn't satisfy the filter.
   *
   * Unlike most filters, `opearator` and `value` are used as-is and need to
   * follow [PostgREST
   * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
   * to make sure they are properly sanitized.
   *
   * @param column - The column to filter on
   * @param operator - The operator to be negated to filter with, following
   * PostgREST syntax
   * @param value - The value to filter with, following PostgREST syntax
   */
  not(e, s, r) {
    return this.url.searchParams.append(e, `not.${s}.${r}`), this;
  }
  /**
   * Match only rows which satisfy at least one of the filters.
   *
   * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
   * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
   * to make sure it's properly sanitized.
   *
   * It's currently not possible to do an `.or()` filter across multiple tables.
   *
   * @param filters - The filters to use, following PostgREST syntax
   * @param options - Named parameters
   * @param options.referencedTable - Set this to filter on referenced tables
   * instead of the parent table
   * @param options.foreignTable - Deprecated, use `referencedTable` instead
   */
  or(e, { foreignTable: s, referencedTable: r = s } = {}) {
    const i = r ? `${r}.or` : "or";
    return this.url.searchParams.append(i, `(${e})`), this;
  }
  /**
   * Match only rows which satisfy the filter. This is an escape hatch - you
   * should use the specific filter methods wherever possible.
   *
   * Unlike most filters, `opearator` and `value` are used as-is and need to
   * follow [PostgREST
   * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
   * to make sure they are properly sanitized.
   *
   * @param column - The column to filter on
   * @param operator - The operator to filter with, following PostgREST syntax
   * @param value - The value to filter with, following PostgREST syntax
   */
  filter(e, s, r) {
    return this.url.searchParams.append(e, `${s}.${r}`), this;
  }
};
_t.default = su;
var ru = G && G.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Nt, "__esModule", { value: !0 });
const Qe = ru(_t);
let iu = class {
  constructor(e, { headers: s = {}, schema: r, fetch: i }) {
    this.url = e, this.headers = s, this.schema = r, this.fetch = i;
  }
  /**
   * Perform a SELECT query on the table or view.
   *
   * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
   *
   * @param options - Named parameters
   *
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   *
   * @param options.count - Count algorithm to use to count rows in the table or view.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  select(e, { head: s = !1, count: r } = {}) {
    const i = s ? "HEAD" : "GET";
    let n = !1;
    const a = (e ?? "*").split("").map((o) => /\s/.test(o) && !n ? "" : (o === '"' && (n = !n), o)).join("");
    return this.url.searchParams.set("select", a), r && (this.headers.Prefer = `count=${r}`), new Qe.default({
      method: i,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
  /**
   * Perform an INSERT into the table or view.
   *
   * By default, inserted rows are not returned. To return it, chain the call
   * with `.select()`.
   *
   * @param values - The values to insert. Pass an object to insert a single row
   * or an array to insert multiple rows.
   *
   * @param options - Named parameters
   *
   * @param options.count - Count algorithm to use to count inserted rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   *
   * @param options.defaultToNull - Make missing fields default to `null`.
   * Otherwise, use the default value for the column. Only applies for bulk
   * inserts.
   */
  insert(e, { count: s, defaultToNull: r = !0 } = {}) {
    const i = "POST", n = [];
    if (this.headers.Prefer && n.push(this.headers.Prefer), s && n.push(`count=${s}`), r || n.push("missing=default"), this.headers.Prefer = n.join(","), Array.isArray(e)) {
      const a = e.reduce((o, l) => o.concat(Object.keys(l)), []);
      if (a.length > 0) {
        const o = [...new Set(a)].map((l) => `"${l}"`);
        this.url.searchParams.set("columns", o.join(","));
      }
    }
    return new Qe.default({
      method: i,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: e,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
  /**
   * Perform an UPSERT on the table or view. Depending on the column(s) passed
   * to `onConflict`, `.upsert()` allows you to perform the equivalent of
   * `.insert()` if a row with the corresponding `onConflict` columns doesn't
   * exist, or if it does exist, perform an alternative action depending on
   * `ignoreDuplicates`.
   *
   * By default, upserted rows are not returned. To return it, chain the call
   * with `.select()`.
   *
   * @param values - The values to upsert with. Pass an object to upsert a
   * single row or an array to upsert multiple rows.
   *
   * @param options - Named parameters
   *
   * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
   * duplicate rows are determined. Two rows are duplicates if all the
   * `onConflict` columns are equal.
   *
   * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
   * `false`, duplicate rows are merged with existing rows.
   *
   * @param options.count - Count algorithm to use to count upserted rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   *
   * @param options.defaultToNull - Make missing fields default to `null`.
   * Otherwise, use the default value for the column. This only applies when
   * inserting new rows, not when merging with existing rows under
   * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
   */
  upsert(e, { onConflict: s, ignoreDuplicates: r = !1, count: i, defaultToNull: n = !0 } = {}) {
    const a = "POST", o = [`resolution=${r ? "ignore" : "merge"}-duplicates`];
    if (s !== void 0 && this.url.searchParams.set("on_conflict", s), this.headers.Prefer && o.push(this.headers.Prefer), i && o.push(`count=${i}`), n || o.push("missing=default"), this.headers.Prefer = o.join(","), Array.isArray(e)) {
      const l = e.reduce((h, u) => h.concat(Object.keys(u)), []);
      if (l.length > 0) {
        const h = [...new Set(l)].map((u) => `"${u}"`);
        this.url.searchParams.set("columns", h.join(","));
      }
    }
    return new Qe.default({
      method: a,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: e,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
  /**
   * Perform an UPDATE on the table or view.
   *
   * By default, updated rows are not returned. To return it, chain the call
   * with `.select()` after filters.
   *
   * @param values - The values to update with
   *
   * @param options - Named parameters
   *
   * @param options.count - Count algorithm to use to count updated rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  update(e, { count: s } = {}) {
    const r = "PATCH", i = [];
    return this.headers.Prefer && i.push(this.headers.Prefer), s && i.push(`count=${s}`), this.headers.Prefer = i.join(","), new Qe.default({
      method: r,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: e,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
  /**
   * Perform a DELETE on the table or view.
   *
   * By default, deleted rows are not returned. To return it, chain the call
   * with `.select()` after filters.
   *
   * @param options - Named parameters
   *
   * @param options.count - Count algorithm to use to count deleted rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  delete({ count: e } = {}) {
    const s = "DELETE", r = [];
    return e && r.push(`count=${e}`), this.headers.Prefer && r.unshift(this.headers.Prefer), this.headers.Prefer = r.join(","), new Qe.default({
      method: s,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
};
Nt.default = iu;
var Ht = {}, Bt = {};
Object.defineProperty(Bt, "__esModule", { value: !0 });
Bt.version = void 0;
Bt.version = "0.0.0-automated";
Object.defineProperty(Ht, "__esModule", { value: !0 });
Ht.DEFAULT_HEADERS = void 0;
const nu = Bt;
Ht.DEFAULT_HEADERS = { "X-Client-Info": `postgrest-js/${nu.version}` };
var ci = G && G.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Ns, "__esModule", { value: !0 });
const au = ci(Nt), ou = ci(_t), lu = Ht;
let uu = class di {
  // TODO: Add back shouldThrowOnError once we figure out the typings
  /**
   * Creates a PostgREST client.
   *
   * @param url - URL of the PostgREST endpoint
   * @param options - Named parameters
   * @param options.headers - Custom headers
   * @param options.schema - Postgres schema to switch to
   * @param options.fetch - Custom fetch
   */
  constructor(e, { headers: s = {}, schema: r, fetch: i } = {}) {
    this.url = e, this.headers = Object.assign(Object.assign({}, lu.DEFAULT_HEADERS), s), this.schemaName = r, this.fetch = i;
  }
  /**
   * Perform a query on a table or a view.
   *
   * @param relation - The table or view name to query
   */
  from(e) {
    const s = new URL(`${this.url}/${e}`);
    return new au.default(s, {
      headers: Object.assign({}, this.headers),
      schema: this.schemaName,
      fetch: this.fetch
    });
  }
  /**
   * Select a schema to query or perform an function (rpc) call.
   *
   * The schema needs to be on the list of exposed schemas inside Supabase.
   *
   * @param schema - The schema to query
   */
  schema(e) {
    return new di(this.url, {
      headers: this.headers,
      schema: e,
      fetch: this.fetch
    });
  }
  /**
   * Perform a function call.
   *
   * @param fn - The function name to call
   * @param args - The arguments to pass to the function call
   * @param options - Named parameters
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   * @param options.get - When set to `true`, the function will be called with
   * read-only access mode.
   * @param options.count - Count algorithm to use to count rows returned by the
   * function. Only applicable for [set-returning
   * functions](https://www.postgresql.org/docs/current/functions-srf.html).
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  rpc(e, s = {}, { head: r = !1, get: i = !1, count: n } = {}) {
    let a;
    const o = new URL(`${this.url}/rpc/${e}`);
    let l;
    r || i ? (a = r ? "HEAD" : "GET", Object.entries(s).filter(([u, c]) => c !== void 0).map(([u, c]) => [u, Array.isArray(c) ? `{${c.join(",")}}` : `${c}`]).forEach(([u, c]) => {
      o.searchParams.append(u, c);
    })) : (a = "POST", l = s);
    const h = Object.assign({}, this.headers);
    return n && (h.Prefer = `count=${n}`), new ou.default({
      method: a,
      url: o,
      headers: h,
      schema: this.schemaName,
      body: l,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
};
Ns.default = uu;
var pt = G && G.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(B, "__esModule", { value: !0 });
B.PostgrestBuilder = B.PostgrestTransformBuilder = B.PostgrestFilterBuilder = B.PostgrestQueryBuilder = B.PostgrestClient = void 0;
const fi = pt(Ns);
B.PostgrestClient = fi.default;
const _i = pt(Nt);
B.PostgrestQueryBuilder = _i.default;
const pi = pt(_t);
B.PostgrestFilterBuilder = pi.default;
const mi = pt(Ft);
B.PostgrestTransformBuilder = mi.default;
const yi = pt(Wt);
B.PostgrestBuilder = yi.default;
var hu = B.default = {
  PostgrestClient: fi.default,
  PostgrestQueryBuilder: _i.default,
  PostgrestFilterBuilder: pi.default,
  PostgrestTransformBuilder: mi.default,
  PostgrestBuilder: yi.default
};
const {
  PostgrestClient: cu,
  PostgrestQueryBuilder: Hh,
  PostgrestFilterBuilder: Bh,
  PostgrestTransformBuilder: Gh,
  PostgrestBuilder: Vh
} = hu, du = "2.10.2", fu = { "X-Client-Info": `realtime-js/${du}` }, _u = "1.0.0", gi = 1e4, pu = 1e3;
var He;
(function(t) {
  t[t.connecting = 0] = "connecting", t[t.open = 1] = "open", t[t.closing = 2] = "closing", t[t.closed = 3] = "closed";
})(He || (He = {}));
var N;
(function(t) {
  t.closed = "closed", t.errored = "errored", t.joined = "joined", t.joining = "joining", t.leaving = "leaving";
})(N || (N = {}));
var Z;
(function(t) {
  t.close = "phx_close", t.error = "phx_error", t.join = "phx_join", t.reply = "phx_reply", t.leave = "phx_leave", t.access_token = "access_token";
})(Z || (Z = {}));
var ds;
(function(t) {
  t.websocket = "websocket";
})(ds || (ds = {}));
var Ee;
(function(t) {
  t.Connecting = "connecting", t.Open = "open", t.Closing = "closing", t.Closed = "closed";
})(Ee || (Ee = {}));
class mu {
  constructor() {
    this.HEADER_LENGTH = 1;
  }
  decode(e, s) {
    return e.constructor === ArrayBuffer ? s(this._binaryDecode(e)) : s(typeof e == "string" ? JSON.parse(e) : {});
  }
  _binaryDecode(e) {
    const s = new DataView(e), r = new TextDecoder();
    return this._decodeBroadcast(e, s, r);
  }
  _decodeBroadcast(e, s, r) {
    const i = s.getUint8(1), n = s.getUint8(2);
    let a = this.HEADER_LENGTH + 2;
    const o = r.decode(e.slice(a, a + i));
    a = a + i;
    const l = r.decode(e.slice(a, a + n));
    a = a + n;
    const h = JSON.parse(r.decode(e.slice(a, e.byteLength)));
    return { ref: null, topic: o, event: l, payload: h };
  }
}
class wi {
  constructor(e, s) {
    this.callback = e, this.timerCalc = s, this.timer = void 0, this.tries = 0, this.callback = e, this.timerCalc = s;
  }
  reset() {
    this.tries = 0, clearTimeout(this.timer);
  }
  // Cancels any previous scheduleTimeout and schedules callback
  scheduleTimeout() {
    clearTimeout(this.timer), this.timer = setTimeout(() => {
      this.tries = this.tries + 1, this.callback();
    }, this.timerCalc(this.tries + 1));
  }
}
var A;
(function(t) {
  t.abstime = "abstime", t.bool = "bool", t.date = "date", t.daterange = "daterange", t.float4 = "float4", t.float8 = "float8", t.int2 = "int2", t.int4 = "int4", t.int4range = "int4range", t.int8 = "int8", t.int8range = "int8range", t.json = "json", t.jsonb = "jsonb", t.money = "money", t.numeric = "numeric", t.oid = "oid", t.reltime = "reltime", t.text = "text", t.time = "time", t.timestamp = "timestamp", t.timestamptz = "timestamptz", t.timetz = "timetz", t.tsrange = "tsrange", t.tstzrange = "tstzrange";
})(A || (A = {}));
const Zs = (t, e, s = {}) => {
  var r;
  const i = (r = s.skipTypes) !== null && r !== void 0 ? r : [];
  return Object.keys(e).reduce((n, a) => (n[a] = yu(a, t, e, i), n), {});
}, yu = (t, e, s, r) => {
  const i = e.find((o) => o.name === t), n = i == null ? void 0 : i.type, a = s[t];
  return n && !r.includes(n) ? vi(n, a) : fs(a);
}, vi = (t, e) => {
  if (t.charAt(0) === "_") {
    const s = t.slice(1, t.length);
    return bu(e, s);
  }
  switch (t) {
    case A.bool:
      return gu(e);
    case A.float4:
    case A.float8:
    case A.int2:
    case A.int4:
    case A.int8:
    case A.numeric:
    case A.oid:
      return wu(e);
    case A.json:
    case A.jsonb:
      return vu(e);
    case A.timestamp:
      return ku(e);
    case A.abstime:
    case A.date:
    case A.daterange:
    case A.int4range:
    case A.int8range:
    case A.money:
    case A.reltime:
    case A.text:
    case A.time:
    case A.timestamptz:
    case A.timetz:
    case A.tsrange:
    case A.tstzrange:
      return fs(e);
    default:
      return fs(e);
  }
}, fs = (t) => t, gu = (t) => {
  switch (t) {
    case "t":
      return !0;
    case "f":
      return !1;
    default:
      return t;
  }
}, wu = (t) => {
  if (typeof t == "string") {
    const e = parseFloat(t);
    if (!Number.isNaN(e))
      return e;
  }
  return t;
}, vu = (t) => {
  if (typeof t == "string")
    try {
      return JSON.parse(t);
    } catch (e) {
      return console.log(`JSON parse error: ${e}`), t;
    }
  return t;
}, bu = (t, e) => {
  if (typeof t != "string")
    return t;
  const s = t.length - 1, r = t[s];
  if (t[0] === "{" && r === "}") {
    let n;
    const a = t.slice(1, s);
    try {
      n = JSON.parse("[" + a + "]");
    } catch {
      n = a ? a.split(",") : [];
    }
    return n.map((o) => vi(e, o));
  }
  return t;
}, ku = (t) => typeof t == "string" ? t.replace(" ", "T") : t, bi = (t) => {
  let e = t;
  return e = e.replace(/^ws/i, "http"), e = e.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, ""), e.replace(/\/+$/, "");
};
class Qt {
  /**
   * Initializes the Push
   *
   * @param channel The Channel
   * @param event The event, for example `"phx_join"`
   * @param payload The payload, for example `{user_id: 123}`
   * @param timeout The push timeout in milliseconds
   */
  constructor(e, s, r = {}, i = gi) {
    this.channel = e, this.event = s, this.payload = r, this.timeout = i, this.sent = !1, this.timeoutTimer = void 0, this.ref = "", this.receivedResp = null, this.recHooks = [], this.refEvent = null;
  }
  resend(e) {
    this.timeout = e, this._cancelRefEvent(), this.ref = "", this.refEvent = null, this.receivedResp = null, this.sent = !1, this.send();
  }
  send() {
    this._hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
      topic: this.channel.topic,
      event: this.event,
      payload: this.payload,
      ref: this.ref,
      join_ref: this.channel._joinRef()
    }));
  }
  updatePayload(e) {
    this.payload = Object.assign(Object.assign({}, this.payload), e);
  }
  receive(e, s) {
    var r;
    return this._hasReceived(e) && s((r = this.receivedResp) === null || r === void 0 ? void 0 : r.response), this.recHooks.push({ status: e, callback: s }), this;
  }
  startTimeout() {
    if (this.timeoutTimer)
      return;
    this.ref = this.channel.socket._makeRef(), this.refEvent = this.channel._replyEventName(this.ref);
    const e = (s) => {
      this._cancelRefEvent(), this._cancelTimeout(), this.receivedResp = s, this._matchReceive(s);
    };
    this.channel._on(this.refEvent, {}, e), this.timeoutTimer = setTimeout(() => {
      this.trigger("timeout", {});
    }, this.timeout);
  }
  trigger(e, s) {
    this.refEvent && this.channel._trigger(this.refEvent, { status: e, response: s });
  }
  destroy() {
    this._cancelRefEvent(), this._cancelTimeout();
  }
  _cancelRefEvent() {
    this.refEvent && this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer), this.timeoutTimer = void 0;
  }
  _matchReceive({ status: e, response: s }) {
    this.recHooks.filter((r) => r.status === e).forEach((r) => r.callback(s));
  }
  _hasReceived(e) {
    return this.receivedResp && this.receivedResp.status === e;
  }
}
var Qs;
(function(t) {
  t.SYNC = "sync", t.JOIN = "join", t.LEAVE = "leave";
})(Qs || (Qs = {}));
class rt {
  /**
   * Initializes the Presence.
   *
   * @param channel - The RealtimeChannel
   * @param opts - The options,
   *        for example `{events: {state: 'state', diff: 'diff'}}`
   */
  constructor(e, s) {
    this.channel = e, this.state = {}, this.pendingDiffs = [], this.joinRef = null, this.caller = {
      onJoin: () => {
      },
      onLeave: () => {
      },
      onSync: () => {
      }
    };
    const r = (s == null ? void 0 : s.events) || {
      state: "presence_state",
      diff: "presence_diff"
    };
    this.channel._on(r.state, {}, (i) => {
      const { onJoin: n, onLeave: a, onSync: o } = this.caller;
      this.joinRef = this.channel._joinRef(), this.state = rt.syncState(this.state, i, n, a), this.pendingDiffs.forEach((l) => {
        this.state = rt.syncDiff(this.state, l, n, a);
      }), this.pendingDiffs = [], o();
    }), this.channel._on(r.diff, {}, (i) => {
      const { onJoin: n, onLeave: a, onSync: o } = this.caller;
      this.inPendingSyncState() ? this.pendingDiffs.push(i) : (this.state = rt.syncDiff(this.state, i, n, a), o());
    }), this.onJoin((i, n, a) => {
      this.channel._trigger("presence", {
        event: "join",
        key: i,
        currentPresences: n,
        newPresences: a
      });
    }), this.onLeave((i, n, a) => {
      this.channel._trigger("presence", {
        event: "leave",
        key: i,
        currentPresences: n,
        leftPresences: a
      });
    }), this.onSync(() => {
      this.channel._trigger("presence", { event: "sync" });
    });
  }
  /**
   * Used to sync the list of presences on the server with the
   * client's state.
   *
   * An optional `onJoin` and `onLeave` callback can be provided to
   * react to changes in the client's local presences across
   * disconnects and reconnects with the server.
   *
   * @internal
   */
  static syncState(e, s, r, i) {
    const n = this.cloneDeep(e), a = this.transformState(s), o = {}, l = {};
    return this.map(n, (h, u) => {
      a[h] || (l[h] = u);
    }), this.map(a, (h, u) => {
      const c = n[h];
      if (c) {
        const f = u.map((P) => P.presence_ref), y = c.map((P) => P.presence_ref), D = u.filter((P) => y.indexOf(P.presence_ref) < 0), M = c.filter((P) => f.indexOf(P.presence_ref) < 0);
        D.length > 0 && (o[h] = D), M.length > 0 && (l[h] = M);
      } else
        o[h] = u;
    }), this.syncDiff(n, { joins: o, leaves: l }, r, i);
  }
  /**
   * Used to sync a diff of presence join and leave events from the
   * server, as they happen.
   *
   * Like `syncState`, `syncDiff` accepts optional `onJoin` and
   * `onLeave` callbacks to react to a user joining or leaving from a
   * device.
   *
   * @internal
   */
  static syncDiff(e, s, r, i) {
    const { joins: n, leaves: a } = {
      joins: this.transformState(s.joins),
      leaves: this.transformState(s.leaves)
    };
    return r || (r = () => {
    }), i || (i = () => {
    }), this.map(n, (o, l) => {
      var h;
      const u = (h = e[o]) !== null && h !== void 0 ? h : [];
      if (e[o] = this.cloneDeep(l), u.length > 0) {
        const c = e[o].map((y) => y.presence_ref), f = u.filter((y) => c.indexOf(y.presence_ref) < 0);
        e[o].unshift(...f);
      }
      r(o, u, l);
    }), this.map(a, (o, l) => {
      let h = e[o];
      if (!h)
        return;
      const u = l.map((c) => c.presence_ref);
      h = h.filter((c) => u.indexOf(c.presence_ref) < 0), e[o] = h, i(o, h, l), h.length === 0 && delete e[o];
    }), e;
  }
  /** @internal */
  static map(e, s) {
    return Object.getOwnPropertyNames(e).map((r) => s(r, e[r]));
  }
  /**
   * Remove 'metas' key
   * Change 'phx_ref' to 'presence_ref'
   * Remove 'phx_ref' and 'phx_ref_prev'
   *
   * @example
   * // returns {
   *  abc123: [
   *    { presence_ref: '2', user_id: 1 },
   *    { presence_ref: '3', user_id: 2 }
   *  ]
   * }
   * RealtimePresence.transformState({
   *  abc123: {
   *    metas: [
   *      { phx_ref: '2', phx_ref_prev: '1' user_id: 1 },
   *      { phx_ref: '3', user_id: 2 }
   *    ]
   *  }
   * })
   *
   * @internal
   */
  static transformState(e) {
    return e = this.cloneDeep(e), Object.getOwnPropertyNames(e).reduce((s, r) => {
      const i = e[r];
      return "metas" in i ? s[r] = i.metas.map((n) => (n.presence_ref = n.phx_ref, delete n.phx_ref, delete n.phx_ref_prev, n)) : s[r] = i, s;
    }, {});
  }
  /** @internal */
  static cloneDeep(e) {
    return JSON.parse(JSON.stringify(e));
  }
  /** @internal */
  onJoin(e) {
    this.caller.onJoin = e;
  }
  /** @internal */
  onLeave(e) {
    this.caller.onLeave = e;
  }
  /** @internal */
  onSync(e) {
    this.caller.onSync = e;
  }
  /** @internal */
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
}
var Xs;
(function(t) {
  t.ALL = "*", t.INSERT = "INSERT", t.UPDATE = "UPDATE", t.DELETE = "DELETE";
})(Xs || (Xs = {}));
var er;
(function(t) {
  t.BROADCAST = "broadcast", t.PRESENCE = "presence", t.POSTGRES_CHANGES = "postgres_changes";
})(er || (er = {}));
var tr;
(function(t) {
  t.SUBSCRIBED = "SUBSCRIBED", t.TIMED_OUT = "TIMED_OUT", t.CLOSED = "CLOSED", t.CHANNEL_ERROR = "CHANNEL_ERROR";
})(tr || (tr = {}));
class Ws {
  constructor(e, s = { config: {} }, r) {
    this.topic = e, this.params = s, this.socket = r, this.bindings = {}, this.state = N.closed, this.joinedOnce = !1, this.pushBuffer = [], this.subTopic = e.replace(/^realtime:/i, ""), this.params.config = Object.assign({
      broadcast: { ack: !1, self: !1 },
      presence: { key: "" },
      private: !1
    }, s.config), this.timeout = this.socket.timeout, this.joinPush = new Qt(this, Z.join, this.params, this.timeout), this.rejoinTimer = new wi(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs), this.joinPush.receive("ok", () => {
      this.state = N.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((i) => i.send()), this.pushBuffer = [];
    }), this._onClose(() => {
      this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`), this.state = N.closed, this.socket._remove(this);
    }), this._onError((i) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, i), this.state = N.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("timeout", () => {
      this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), this.state = N.errored, this.rejoinTimer.scheduleTimeout());
    }), this._on(Z.reply, {}, (i, n) => {
      this._trigger(this._replyEventName(n), i);
    }), this.presence = new rt(this), this.broadcastEndpointURL = bi(this.socket.endPoint) + "/api/broadcast";
  }
  /** Subscribe registers your client with the server */
  subscribe(e, s = this.timeout) {
    var r, i;
    if (this.socket.isConnected() || this.socket.connect(), this.joinedOnce)
      throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
    {
      const { config: { broadcast: n, presence: a, private: o } } = this.params;
      this._onError((u) => e && e("CHANNEL_ERROR", u)), this._onClose(() => e && e("CLOSED"));
      const l = {}, h = {
        broadcast: n,
        presence: a,
        postgres_changes: (i = (r = this.bindings.postgres_changes) === null || r === void 0 ? void 0 : r.map((u) => u.filter)) !== null && i !== void 0 ? i : [],
        private: o
      };
      this.socket.accessToken && (l.access_token = this.socket.accessToken), this.updateJoinPayload(Object.assign({ config: h }, l)), this.joinedOnce = !0, this._rejoin(s), this.joinPush.receive("ok", ({ postgres_changes: u }) => {
        var c;
        if (this.socket.accessToken && this.socket.setAuth(this.socket.accessToken), u === void 0) {
          e && e("SUBSCRIBED");
          return;
        } else {
          const f = this.bindings.postgres_changes, y = (c = f == null ? void 0 : f.length) !== null && c !== void 0 ? c : 0, D = [];
          for (let M = 0; M < y; M++) {
            const P = f[M], { filter: { event: U, schema: oe, table: se, filter: q } } = P, J = u && u[M];
            if (J && J.event === U && J.schema === oe && J.table === se && J.filter === q)
              D.push(Object.assign(Object.assign({}, P), { id: J.id }));
            else {
              this.unsubscribe(), e && e("CHANNEL_ERROR", new Error("mismatch between server and client bindings for postgres changes"));
              return;
            }
          }
          this.bindings.postgres_changes = D, e && e("SUBSCRIBED");
          return;
        }
      }).receive("error", (u) => {
        e && e("CHANNEL_ERROR", new Error(JSON.stringify(Object.values(u).join(", ") || "error")));
      }).receive("timeout", () => {
        e && e("TIMED_OUT");
      });
    }
    return this;
  }
  presenceState() {
    return this.presence.state;
  }
  async track(e, s = {}) {
    return await this.send({
      type: "presence",
      event: "track",
      payload: e
    }, s.timeout || this.timeout);
  }
  async untrack(e = {}) {
    return await this.send({
      type: "presence",
      event: "untrack"
    }, e);
  }
  on(e, s, r) {
    return this._on(e, s, r);
  }
  /**
   * Sends a message into the channel.
   *
   * @param args Arguments to send to channel
   * @param args.type The type of event to send
   * @param args.event The name of the event being sent
   * @param args.payload Payload to be sent
   * @param opts Options to be used during the send process
   */
  async send(e, s = {}) {
    var r, i;
    if (!this._canPush() && e.type === "broadcast") {
      const { event: n, payload: a } = e, o = {
        method: "POST",
        headers: {
          Authorization: this.socket.accessToken ? `Bearer ${this.socket.accessToken}` : "",
          apikey: this.socket.apiKey ? this.socket.apiKey : "",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: [
            { topic: this.subTopic, event: n, payload: a }
          ]
        })
      };
      try {
        const l = await this._fetchWithTimeout(this.broadcastEndpointURL, o, (r = s.timeout) !== null && r !== void 0 ? r : this.timeout);
        return await ((i = l.body) === null || i === void 0 ? void 0 : i.cancel()), l.ok ? "ok" : "error";
      } catch (l) {
        return l.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((n) => {
        var a, o, l;
        const h = this._push(e.type, e, s.timeout || this.timeout);
        e.type === "broadcast" && !(!((l = (o = (a = this.params) === null || a === void 0 ? void 0 : a.config) === null || o === void 0 ? void 0 : o.broadcast) === null || l === void 0) && l.ack) && n("ok"), h.receive("ok", () => n("ok")), h.receive("error", () => n("error")), h.receive("timeout", () => n("timed out"));
      });
  }
  updateJoinPayload(e) {
    this.joinPush.updatePayload(e);
  }
  /**
   * Leaves the channel.
   *
   * Unsubscribes from server events, and instructs channel to terminate on server.
   * Triggers onClose() hooks.
   *
   * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
   * channel.unsubscribe().receive("ok", () => alert("left!") )
   */
  unsubscribe(e = this.timeout) {
    this.state = N.leaving;
    const s = () => {
      this.socket.log("channel", `leave ${this.topic}`), this._trigger(Z.close, "leave", this._joinRef());
    };
    return this.rejoinTimer.reset(), this.joinPush.destroy(), new Promise((r) => {
      const i = new Qt(this, Z.leave, {}, e);
      i.receive("ok", () => {
        s(), r("ok");
      }).receive("timeout", () => {
        s(), r("timed out");
      }).receive("error", () => {
        r("error");
      }), i.send(), this._canPush() || i.trigger("ok", {});
    });
  }
  /** @internal */
  async _fetchWithTimeout(e, s, r) {
    const i = new AbortController(), n = setTimeout(() => i.abort(), r), a = await this.socket.fetch(e, Object.assign(Object.assign({}, s), { signal: i.signal }));
    return clearTimeout(n), a;
  }
  /** @internal */
  _push(e, s, r = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let i = new Qt(this, e, s, r);
    return this._canPush() ? i.send() : (i.startTimeout(), this.pushBuffer.push(i)), i;
  }
  /**
   * Overridable message hook
   *
   * Receives all events for specialized message handling before dispatching to the channel callbacks.
   * Must return the payload, modified or unmodified.
   *
   * @internal
   */
  _onMessage(e, s, r) {
    return s;
  }
  /** @internal */
  _isMember(e) {
    return this.topic === e;
  }
  /** @internal */
  _joinRef() {
    return this.joinPush.ref;
  }
  /** @internal */
  _trigger(e, s, r) {
    var i, n;
    const a = e.toLocaleLowerCase(), { close: o, error: l, leave: h, join: u } = Z;
    if (r && [o, l, h, u].indexOf(a) >= 0 && r !== this._joinRef())
      return;
    let f = this._onMessage(a, s, r);
    if (s && !f)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(a) ? (i = this.bindings.postgres_changes) === null || i === void 0 || i.filter((y) => {
      var D, M, P;
      return ((D = y.filter) === null || D === void 0 ? void 0 : D.event) === "*" || ((P = (M = y.filter) === null || M === void 0 ? void 0 : M.event) === null || P === void 0 ? void 0 : P.toLocaleLowerCase()) === a;
    }).map((y) => y.callback(f, r)) : (n = this.bindings[a]) === null || n === void 0 || n.filter((y) => {
      var D, M, P, U, oe, se;
      if (["broadcast", "presence", "postgres_changes"].includes(a))
        if ("id" in y) {
          const q = y.id, J = (D = y.filter) === null || D === void 0 ? void 0 : D.event;
          return q && ((M = s.ids) === null || M === void 0 ? void 0 : M.includes(q)) && (J === "*" || (J == null ? void 0 : J.toLocaleLowerCase()) === ((P = s.data) === null || P === void 0 ? void 0 : P.type.toLocaleLowerCase()));
        } else {
          const q = (oe = (U = y == null ? void 0 : y.filter) === null || U === void 0 ? void 0 : U.event) === null || oe === void 0 ? void 0 : oe.toLocaleLowerCase();
          return q === "*" || q === ((se = s == null ? void 0 : s.event) === null || se === void 0 ? void 0 : se.toLocaleLowerCase());
        }
      else
        return y.type.toLocaleLowerCase() === a;
    }).map((y) => {
      if (typeof f == "object" && "ids" in f) {
        const D = f.data, { schema: M, table: P, commit_timestamp: U, type: oe, errors: se } = D;
        f = Object.assign(Object.assign({}, {
          schema: M,
          table: P,
          commit_timestamp: U,
          eventType: oe,
          new: {},
          old: {},
          errors: se
        }), this._getPayloadRecords(D));
      }
      y.callback(f, r);
    });
  }
  /** @internal */
  _isClosed() {
    return this.state === N.closed;
  }
  /** @internal */
  _isJoined() {
    return this.state === N.joined;
  }
  /** @internal */
  _isJoining() {
    return this.state === N.joining;
  }
  /** @internal */
  _isLeaving() {
    return this.state === N.leaving;
  }
  /** @internal */
  _replyEventName(e) {
    return `chan_reply_${e}`;
  }
  /** @internal */
  _on(e, s, r) {
    const i = e.toLocaleLowerCase(), n = {
      type: i,
      filter: s,
      callback: r
    };
    return this.bindings[i] ? this.bindings[i].push(n) : this.bindings[i] = [n], this;
  }
  /** @internal */
  _off(e, s) {
    const r = e.toLocaleLowerCase();
    return this.bindings[r] = this.bindings[r].filter((i) => {
      var n;
      return !(((n = i.type) === null || n === void 0 ? void 0 : n.toLocaleLowerCase()) === r && Ws.isEqual(i.filter, s));
    }), this;
  }
  /** @internal */
  static isEqual(e, s) {
    if (Object.keys(e).length !== Object.keys(s).length)
      return !1;
    for (const r in e)
      if (e[r] !== s[r])
        return !1;
    return !0;
  }
  /** @internal */
  _rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this._rejoin();
  }
  /**
   * Registers a callback that will be executed when the channel closes.
   *
   * @internal
   */
  _onClose(e) {
    this._on(Z.close, {}, e);
  }
  /**
   * Registers a callback that will be executed when the channel encounteres an error.
   *
   * @internal
   */
  _onError(e) {
    this._on(Z.error, {}, (s) => e(s));
  }
  /**
   * Returns `true` if the socket is connected and the channel has been joined.
   *
   * @internal
   */
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  /** @internal */
  _rejoin(e = this.timeout) {
    this._isLeaving() || (this.socket._leaveOpenTopic(this.topic), this.state = N.joining, this.joinPush.resend(e));
  }
  /** @internal */
  _getPayloadRecords(e) {
    const s = {
      new: {},
      old: {}
    };
    return (e.type === "INSERT" || e.type === "UPDATE") && (s.new = Zs(e.columns, e.record)), (e.type === "UPDATE" || e.type === "DELETE") && (s.old = Zs(e.columns, e.old_record)), s;
  }
}
const Su = () => {
}, Tu = typeof WebSocket < "u";
class Ou {
  /**
   * Initializes the Socket.
   *
   * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
   * @param httpEndpoint The string HTTP endpoint, ie, "https://example.com", "/" (inherited host & protocol)
   * @param options.transport The Websocket Transport, for example WebSocket.
   * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
   * @param options.params The optional params to pass when connecting.
   * @param options.headers The optional headers to pass when connecting.
   * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
   * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
   * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
   * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
   * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
   */
  constructor(e, s) {
    var r;
    this.accessToken = null, this.apiKey = null, this.channels = [], this.endPoint = "", this.httpEndpoint = "", this.headers = fu, this.params = {}, this.timeout = gi, this.heartbeatIntervalMs = 3e4, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.ref = 0, this.logger = Su, this.conn = null, this.sendBuffer = [], this.serializer = new mu(), this.stateChangeCallbacks = {
      open: [],
      close: [],
      error: [],
      message: []
    }, this._resolveFetch = (n) => {
      let a;
      return n ? a = n : typeof fetch > "u" ? a = (...o) => Promise.resolve().then(() => qe).then(({ default: l }) => l(...o)) : a = fetch, (...o) => a(...o);
    }, this.endPoint = `${e}/${ds.websocket}`, this.httpEndpoint = bi(e), s != null && s.transport ? this.transport = s.transport : this.transport = null, s != null && s.params && (this.params = s.params), s != null && s.headers && (this.headers = Object.assign(Object.assign({}, this.headers), s.headers)), s != null && s.timeout && (this.timeout = s.timeout), s != null && s.logger && (this.logger = s.logger), s != null && s.heartbeatIntervalMs && (this.heartbeatIntervalMs = s.heartbeatIntervalMs);
    const i = (r = s == null ? void 0 : s.params) === null || r === void 0 ? void 0 : r.apikey;
    i && (this.accessToken = i, this.apiKey = i), this.reconnectAfterMs = s != null && s.reconnectAfterMs ? s.reconnectAfterMs : (n) => [1e3, 2e3, 5e3, 1e4][n - 1] || 1e4, this.encode = s != null && s.encode ? s.encode : (n, a) => a(JSON.stringify(n)), this.decode = s != null && s.decode ? s.decode : this.serializer.decode.bind(this.serializer), this.reconnectTimer = new wi(async () => {
      this.disconnect(), this.connect();
    }, this.reconnectAfterMs), this.fetch = this._resolveFetch(s == null ? void 0 : s.fetch);
  }
  /**
   * Connects the socket, unless already connected.
   */
  connect() {
    if (!this.conn) {
      if (this.transport) {
        this.conn = new this.transport(this._endPointURL(), void 0, {
          headers: this.headers
        });
        return;
      }
      if (Tu) {
        this.conn = new WebSocket(this._endPointURL()), this.setupConnection();
        return;
      }
      this.conn = new Du(this._endPointURL(), void 0, {
        close: () => {
          this.conn = null;
        }
      }), import("./browser-B49n9Pue.js").then((e) => e.b).then(({ default: e }) => {
        this.conn = new e(this._endPointURL(), void 0, {
          headers: this.headers
        }), this.setupConnection();
      });
    }
  }
  /**
   * Disconnects the socket.
   *
   * @param code A numeric status code to send on disconnect.
   * @param reason A custom reason for the disconnect.
   */
  disconnect(e, s) {
    this.conn && (this.conn.onclose = function() {
    }, e ? this.conn.close(e, s ?? "") : this.conn.close(), this.conn = null, this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.reset());
  }
  /**
   * Returns all created channels
   */
  getChannels() {
    return this.channels;
  }
  /**
   * Unsubscribes and removes a single channel
   * @param channel A RealtimeChannel instance
   */
  async removeChannel(e) {
    const s = await e.unsubscribe();
    return this.channels.length === 0 && this.disconnect(), s;
  }
  /**
   * Unsubscribes and removes all channels
   */
  async removeAllChannels() {
    const e = await Promise.all(this.channels.map((s) => s.unsubscribe()));
    return this.disconnect(), e;
  }
  /**
   * Logs the message.
   *
   * For customized logging, `this.logger` can be overridden.
   */
  log(e, s, r) {
    this.logger(e, s, r);
  }
  /**
   * Returns the current state of the socket.
   */
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case He.connecting:
        return Ee.Connecting;
      case He.open:
        return Ee.Open;
      case He.closing:
        return Ee.Closing;
      default:
        return Ee.Closed;
    }
  }
  /**
   * Returns `true` is the connection is open.
   */
  isConnected() {
    return this.connectionState() === Ee.Open;
  }
  channel(e, s = { config: {} }) {
    const r = new Ws(`realtime:${e}`, s, this);
    return this.channels.push(r), r;
  }
  /**
   * Push out a message if the socket is connected.
   *
   * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
   */
  push(e) {
    const { topic: s, event: r, payload: i, ref: n } = e, a = () => {
      this.encode(e, (o) => {
        var l;
        (l = this.conn) === null || l === void 0 || l.send(o);
      });
    };
    this.log("push", `${s} ${r} (${n})`, i), this.isConnected() ? a() : this.sendBuffer.push(a);
  }
  /**
   * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
   *
   * @param token A JWT string.
   */
  setAuth(e) {
    this.accessToken = e, this.channels.forEach((s) => {
      e && s.updateJoinPayload({ access_token: e }), s.joinedOnce && s._isJoined() && s._push(Z.access_token, { access_token: e });
    });
  }
  /**
   * Return the next message ref, accounting for overflows
   *
   * @internal
   */
  _makeRef() {
    let e = this.ref + 1;
    return e === this.ref ? this.ref = 0 : this.ref = e, this.ref.toString();
  }
  /**
   * Unsubscribe from channels with the specified topic.
   *
   * @internal
   */
  _leaveOpenTopic(e) {
    let s = this.channels.find((r) => r.topic === e && (r._isJoined() || r._isJoining()));
    s && (this.log("transport", `leaving duplicate topic "${e}"`), s.unsubscribe());
  }
  /**
   * Removes a subscription from the socket.
   *
   * @param channel An open subscription.
   *
   * @internal
   */
  _remove(e) {
    this.channels = this.channels.filter((s) => s._joinRef() !== e._joinRef());
  }
  /**
   * Sets up connection handlers.
   *
   * @internal
   */
  setupConnection() {
    this.conn && (this.conn.binaryType = "arraybuffer", this.conn.onopen = () => this._onConnOpen(), this.conn.onerror = (e) => this._onConnError(e), this.conn.onmessage = (e) => this._onConnMessage(e), this.conn.onclose = (e) => this._onConnClose(e));
  }
  /**
   * Returns the URL of the websocket.
   *
   * @internal
   */
  _endPointURL() {
    return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: _u }));
  }
  /** @internal */
  _onConnMessage(e) {
    this.decode(e.data, (s) => {
      let { topic: r, event: i, payload: n, ref: a } = s;
      (a && a === this.pendingHeartbeatRef || i === (n == null ? void 0 : n.type)) && (this.pendingHeartbeatRef = null), this.log("receive", `${n.status || ""} ${r} ${i} ${a && "(" + a + ")" || ""}`, n), this.channels.filter((o) => o._isMember(r)).forEach((o) => o._trigger(i, n, a)), this.stateChangeCallbacks.message.forEach((o) => o(s));
    });
  }
  /** @internal */
  _onConnOpen() {
    this.log("transport", `connected to ${this._endPointURL()}`), this._flushSendBuffer(), this.reconnectTimer.reset(), this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(() => this._sendHeartbeat(), this.heartbeatIntervalMs), this.stateChangeCallbacks.open.forEach((e) => e());
  }
  /** @internal */
  _onConnClose(e) {
    this.log("transport", "close", e), this._triggerChanError(), this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach((s) => s(e));
  }
  /** @internal */
  _onConnError(e) {
    this.log("transport", e.message), this._triggerChanError(), this.stateChangeCallbacks.error.forEach((s) => s(e));
  }
  /** @internal */
  _triggerChanError() {
    this.channels.forEach((e) => e._trigger(Z.error));
  }
  /** @internal */
  _appendParams(e, s) {
    if (Object.keys(s).length === 0)
      return e;
    const r = e.match(/\?/) ? "&" : "?", i = new URLSearchParams(s);
    return `${e}${r}${i}`;
  }
  /** @internal */
  _flushSendBuffer() {
    this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((e) => e()), this.sendBuffer = []);
  }
  /** @internal */
  _sendHeartbeat() {
    var e;
    if (this.isConnected()) {
      if (this.pendingHeartbeatRef) {
        this.pendingHeartbeatRef = null, this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), (e = this.conn) === null || e === void 0 || e.close(pu, "hearbeat timeout");
        return;
      }
      this.pendingHeartbeatRef = this._makeRef(), this.push({
        topic: "phoenix",
        event: "heartbeat",
        payload: {},
        ref: this.pendingHeartbeatRef
      }), this.setAuth(this.accessToken);
    }
  }
}
class Du {
  constructor(e, s, r) {
    this.binaryType = "arraybuffer", this.onclose = () => {
    }, this.onerror = () => {
    }, this.onmessage = () => {
    }, this.onopen = () => {
    }, this.readyState = He.connecting, this.send = () => {
    }, this.url = null, this.url = e, this.close = r.close;
  }
}
class Hs extends Error {
  constructor(e) {
    super(e), this.__isStorageError = !0, this.name = "StorageError";
  }
}
function I(t) {
  return typeof t == "object" && t !== null && "__isStorageError" in t;
}
class Pu extends Hs {
  constructor(e, s) {
    super(e), this.name = "StorageApiError", this.status = s;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status
    };
  }
}
class sr extends Hs {
  constructor(e, s) {
    super(e), this.name = "StorageUnknownError", this.originalError = s;
  }
}
var Eu = function(t, e, s, r) {
  function i(n) {
    return n instanceof s ? n : new s(function(a) {
      a(n);
    });
  }
  return new (s || (s = Promise))(function(n, a) {
    function o(u) {
      try {
        h(r.next(u));
      } catch (c) {
        a(c);
      }
    }
    function l(u) {
      try {
        h(r.throw(u));
      } catch (c) {
        a(c);
      }
    }
    function h(u) {
      u.done ? n(u.value) : i(u.value).then(o, l);
    }
    h((r = r.apply(t, e || [])).next());
  });
};
const ki = (t) => {
  let e;
  return t ? e = t : typeof fetch > "u" ? e = (...s) => Promise.resolve().then(() => qe).then(({ default: r }) => r(...s)) : e = fetch, (...s) => e(...s);
}, Mu = () => Eu(void 0, void 0, void 0, function* () {
  return typeof Response > "u" ? (yield Promise.resolve().then(() => qe)).Response : Response;
});
var Je = function(t, e, s, r) {
  function i(n) {
    return n instanceof s ? n : new s(function(a) {
      a(n);
    });
  }
  return new (s || (s = Promise))(function(n, a) {
    function o(u) {
      try {
        h(r.next(u));
      } catch (c) {
        a(c);
      }
    }
    function l(u) {
      try {
        h(r.throw(u));
      } catch (c) {
        a(c);
      }
    }
    function h(u) {
      u.done ? n(u.value) : i(u.value).then(o, l);
    }
    h((r = r.apply(t, e || [])).next());
  });
};
const Xt = (t) => t.msg || t.message || t.error_description || t.error || JSON.stringify(t), Au = (t, e) => Je(void 0, void 0, void 0, function* () {
  const s = yield Mu();
  t instanceof s ? t.json().then((r) => {
    e(new Pu(Xt(r), t.status || 500));
  }).catch((r) => {
    e(new sr(Xt(r), r));
  }) : e(new sr(Xt(t), t));
}), xu = (t, e, s, r) => {
  const i = { method: t, headers: (e == null ? void 0 : e.headers) || {} };
  return t === "GET" ? i : (i.headers = Object.assign({ "Content-Type": "application/json" }, e == null ? void 0 : e.headers), i.body = JSON.stringify(r), Object.assign(Object.assign({}, i), s));
};
function Gt(t, e, s, r, i, n) {
  return Je(this, void 0, void 0, function* () {
    return new Promise((a, o) => {
      t(s, xu(e, r, i, n)).then((l) => {
        if (!l.ok)
          throw l;
        return r != null && r.noResolveJson ? l : l.json();
      }).then((l) => a(l)).catch((l) => Au(l, o));
    });
  });
}
function _s(t, e, s, r) {
  return Je(this, void 0, void 0, function* () {
    return Gt(t, "GET", e, s, r);
  });
}
function we(t, e, s, r, i) {
  return Je(this, void 0, void 0, function* () {
    return Gt(t, "POST", e, r, i, s);
  });
}
function Ru(t, e, s, r, i) {
  return Je(this, void 0, void 0, function* () {
    return Gt(t, "PUT", e, r, i, s);
  });
}
function Si(t, e, s, r, i) {
  return Je(this, void 0, void 0, function* () {
    return Gt(t, "DELETE", e, r, i, s);
  });
}
var W = function(t, e, s, r) {
  function i(n) {
    return n instanceof s ? n : new s(function(a) {
      a(n);
    });
  }
  return new (s || (s = Promise))(function(n, a) {
    function o(u) {
      try {
        h(r.next(u));
      } catch (c) {
        a(c);
      }
    }
    function l(u) {
      try {
        h(r.throw(u));
      } catch (c) {
        a(c);
      }
    }
    function h(u) {
      u.done ? n(u.value) : i(u.value).then(o, l);
    }
    h((r = r.apply(t, e || [])).next());
  });
};
const Cu = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
}, rr = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: !1
};
class $u {
  constructor(e, s = {}, r, i) {
    this.url = e, this.headers = s, this.bucketId = r, this.fetch = ki(i);
  }
  /**
   * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
   *
   * @param method HTTP method.
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  uploadOrUpdate(e, s, r, i) {
    return W(this, void 0, void 0, function* () {
      try {
        let n;
        const a = Object.assign(Object.assign({}, rr), i), o = Object.assign(Object.assign({}, this.headers), e === "POST" && { "x-upsert": String(a.upsert) });
        typeof Blob < "u" && r instanceof Blob ? (n = new FormData(), n.append("cacheControl", a.cacheControl), n.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (n = r, n.append("cacheControl", a.cacheControl)) : (n = r, o["cache-control"] = `max-age=${a.cacheControl}`, o["content-type"] = a.contentType);
        const l = this._removeEmptyFolders(s), h = this._getFinalPath(l), u = yield this.fetch(`${this.url}/object/${h}`, Object.assign({ method: e, body: n, headers: o }, a != null && a.duplex ? { duplex: a.duplex } : {})), c = yield u.json();
        return u.ok ? {
          data: { path: l, id: c.Id, fullPath: c.Key },
          error: null
        } : { data: null, error: c };
      } catch (n) {
        if (I(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * Uploads a file to an existing bucket.
   *
   * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  upload(e, s, r) {
    return W(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("POST", e, s, r);
    });
  }
  /**
   * Upload a file with a token generated from `createSignedUploadUrl`.
   * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param token The token generated from `createSignedUploadUrl`
   * @param fileBody The body of the file to be stored in the bucket.
   */
  uploadToSignedUrl(e, s, r, i) {
    return W(this, void 0, void 0, function* () {
      const n = this._removeEmptyFolders(e), a = this._getFinalPath(n), o = new URL(this.url + `/object/upload/sign/${a}`);
      o.searchParams.set("token", s);
      try {
        let l;
        const h = Object.assign({ upsert: rr.upsert }, i), u = Object.assign(Object.assign({}, this.headers), { "x-upsert": String(h.upsert) });
        typeof Blob < "u" && r instanceof Blob ? (l = new FormData(), l.append("cacheControl", h.cacheControl), l.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (l = r, l.append("cacheControl", h.cacheControl)) : (l = r, u["cache-control"] = `max-age=${h.cacheControl}`, u["content-type"] = h.contentType);
        const c = yield this.fetch(o.toString(), {
          method: "PUT",
          body: l,
          headers: u
        }), f = yield c.json();
        return c.ok ? {
          data: { path: n, fullPath: f.Key },
          error: null
        } : { data: null, error: f };
      } catch (l) {
        if (I(l))
          return { data: null, error: l };
        throw l;
      }
    });
  }
  /**
   * Creates a signed upload URL.
   * Signed upload URLs can be used to upload files to the bucket without further authentication.
   * They are valid for 2 hours.
   * @param path The file path, including the current file name. For example `folder/image.png`.
   * @param options.upsert If set to true, allows the file to be overwritten if it already exists.
   */
  createSignedUploadUrl(e, s) {
    return W(this, void 0, void 0, function* () {
      try {
        let r = this._getFinalPath(e);
        const i = Object.assign({}, this.headers);
        s != null && s.upsert && (i["x-upsert"] = "true");
        const n = yield we(this.fetch, `${this.url}/object/upload/sign/${r}`, {}, { headers: i }), a = new URL(this.url + n.url), o = a.searchParams.get("token");
        if (!o)
          throw new Hs("No token returned by API");
        return { data: { signedUrl: a.toString(), path: e, token: o }, error: null };
      } catch (r) {
        if (I(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Replaces an existing file at the specified path with a new one.
   *
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  update(e, s, r) {
    return W(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("PUT", e, s, r);
    });
  }
  /**
   * Moves an existing file to a new path in the same bucket.
   *
   * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
   * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
   * @param options The destination options.
   */
  move(e, s, r) {
    return W(this, void 0, void 0, function* () {
      try {
        return { data: yield we(this.fetch, `${this.url}/object/move`, {
          bucketId: this.bucketId,
          sourceKey: e,
          destinationKey: s,
          destinationBucket: r == null ? void 0 : r.destinationBucket
        }, { headers: this.headers }), error: null };
      } catch (i) {
        if (I(i))
          return { data: null, error: i };
        throw i;
      }
    });
  }
  /**
   * Copies an existing file to a new path in the same bucket.
   *
   * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
   * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
   * @param options The destination options.
   */
  copy(e, s, r) {
    return W(this, void 0, void 0, function* () {
      try {
        return { data: { path: (yield we(this.fetch, `${this.url}/object/copy`, {
          bucketId: this.bucketId,
          sourceKey: e,
          destinationKey: s,
          destinationBucket: r == null ? void 0 : r.destinationBucket
        }, { headers: this.headers })).Key }, error: null };
      } catch (i) {
        if (I(i))
          return { data: null, error: i };
        throw i;
      }
    });
  }
  /**
   * Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
   *
   * @param path The file path, including the current file name. For example `folder/image.png`.
   * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
   * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @param options.transform Transform the asset before serving it to the client.
   */
  createSignedUrl(e, s, r) {
    return W(this, void 0, void 0, function* () {
      try {
        let i = this._getFinalPath(e), n = yield we(this.fetch, `${this.url}/object/sign/${i}`, Object.assign({ expiresIn: s }, r != null && r.transform ? { transform: r.transform } : {}), { headers: this.headers });
        const a = r != null && r.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
        return n = { signedUrl: encodeURI(`${this.url}${n.signedURL}${a}`) }, { data: n, error: null };
      } catch (i) {
        if (I(i))
          return { data: null, error: i };
        throw i;
      }
    });
  }
  /**
   * Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
   *
   * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
   * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
   * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   */
  createSignedUrls(e, s, r) {
    return W(this, void 0, void 0, function* () {
      try {
        const i = yield we(this.fetch, `${this.url}/object/sign/${this.bucketId}`, { expiresIn: s, paths: e }, { headers: this.headers }), n = r != null && r.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
        return {
          data: i.map((a) => Object.assign(Object.assign({}, a), { signedUrl: a.signedURL ? encodeURI(`${this.url}${a.signedURL}${n}`) : null })),
          error: null
        };
      } catch (i) {
        if (I(i))
          return { data: null, error: i };
        throw i;
      }
    });
  }
  /**
   * Downloads a file from a private bucket. For public buckets, make a request to the URL returned from `getPublicUrl` instead.
   *
   * @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
   * @param options.transform Transform the asset before serving it to the client.
   */
  download(e, s) {
    return W(this, void 0, void 0, function* () {
      const i = typeof (s == null ? void 0 : s.transform) < "u" ? "render/image/authenticated" : "object", n = this.transformOptsToQueryString((s == null ? void 0 : s.transform) || {}), a = n ? `?${n}` : "";
      try {
        const o = this._getFinalPath(e);
        return { data: yield (yield _s(this.fetch, `${this.url}/${i}/${o}${a}`, {
          headers: this.headers,
          noResolveJson: !0
        })).blob(), error: null };
      } catch (o) {
        if (I(o))
          return { data: null, error: o };
        throw o;
      }
    });
  }
  /**
   * A simple convenience function to get the URL for an asset in a public bucket. If you do not want to use this function, you can construct the public URL by concatenating the bucket URL with the path to the asset.
   * This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
   *
   * @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
   * @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @param options.transform Transform the asset before serving it to the client.
   */
  getPublicUrl(e, s) {
    const r = this._getFinalPath(e), i = [], n = s != null && s.download ? `download=${s.download === !0 ? "" : s.download}` : "";
    n !== "" && i.push(n);
    const o = typeof (s == null ? void 0 : s.transform) < "u" ? "render/image" : "object", l = this.transformOptsToQueryString((s == null ? void 0 : s.transform) || {});
    l !== "" && i.push(l);
    let h = i.join("&");
    return h !== "" && (h = `?${h}`), {
      data: { publicUrl: encodeURI(`${this.url}/${o}/public/${r}${h}`) }
    };
  }
  /**
   * Deletes files within the same bucket
   *
   * @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
   */
  remove(e) {
    return W(this, void 0, void 0, function* () {
      try {
        return { data: yield Si(this.fetch, `${this.url}/object/${this.bucketId}`, { prefixes: e }, { headers: this.headers }), error: null };
      } catch (s) {
        if (I(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
  /**
   * Get file metadata
   * @param id the file id to retrieve metadata
   */
  // async getMetadata(
  //   id: string
  // ): Promise<
  //   | {
  //       data: Metadata
  //       error: null
  //     }
  //   | {
  //       data: null
  //       error: StorageError
  //     }
  // > {
  //   try {
  //     const data = await get(this.fetch, `${this.url}/metadata/${id}`, { headers: this.headers })
  //     return { data, error: null }
  //   } catch (error) {
  //     if (isStorageError(error)) {
  //       return { data: null, error }
  //     }
  //     throw error
  //   }
  // }
  /**
   * Update file metadata
   * @param id the file id to update metadata
   * @param meta the new file metadata
   */
  // async updateMetadata(
  //   id: string,
  //   meta: Metadata
  // ): Promise<
  //   | {
  //       data: Metadata
  //       error: null
  //     }
  //   | {
  //       data: null
  //       error: StorageError
  //     }
  // > {
  //   try {
  //     const data = await post(
  //       this.fetch,
  //       `${this.url}/metadata/${id}`,
  //       { ...meta },
  //       { headers: this.headers }
  //     )
  //     return { data, error: null }
  //   } catch (error) {
  //     if (isStorageError(error)) {
  //       return { data: null, error }
  //     }
  //     throw error
  //   }
  // }
  /**
   * Lists all the files within a bucket.
   * @param path The folder path.
   */
  list(e, s, r) {
    return W(this, void 0, void 0, function* () {
      try {
        const i = Object.assign(Object.assign(Object.assign({}, Cu), s), { prefix: e || "" });
        return { data: yield we(this.fetch, `${this.url}/object/list/${this.bucketId}`, i, { headers: this.headers }, r), error: null };
      } catch (i) {
        if (I(i))
          return { data: null, error: i };
        throw i;
      }
    });
  }
  _getFinalPath(e) {
    return `${this.bucketId}/${e}`;
  }
  _removeEmptyFolders(e) {
    return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(e) {
    const s = [];
    return e.width && s.push(`width=${e.width}`), e.height && s.push(`height=${e.height}`), e.resize && s.push(`resize=${e.resize}`), e.format && s.push(`format=${e.format}`), e.quality && s.push(`quality=${e.quality}`), s.join("&");
  }
}
const ju = "2.6.0", Iu = { "X-Client-Info": `storage-js/${ju}` };
var je = function(t, e, s, r) {
  function i(n) {
    return n instanceof s ? n : new s(function(a) {
      a(n);
    });
  }
  return new (s || (s = Promise))(function(n, a) {
    function o(u) {
      try {
        h(r.next(u));
      } catch (c) {
        a(c);
      }
    }
    function l(u) {
      try {
        h(r.throw(u));
      } catch (c) {
        a(c);
      }
    }
    function h(u) {
      u.done ? n(u.value) : i(u.value).then(o, l);
    }
    h((r = r.apply(t, e || [])).next());
  });
};
class Yu {
  constructor(e, s = {}, r) {
    this.url = e, this.headers = Object.assign(Object.assign({}, Iu), s), this.fetch = ki(r);
  }
  /**
   * Retrieves the details of all Storage buckets within an existing project.
   */
  listBuckets() {
    return je(this, void 0, void 0, function* () {
      try {
        return { data: yield _s(this.fetch, `${this.url}/bucket`, { headers: this.headers }), error: null };
      } catch (e) {
        if (I(e))
          return { data: null, error: e };
        throw e;
      }
    });
  }
  /**
   * Retrieves the details of an existing Storage bucket.
   *
   * @param id The unique identifier of the bucket you would like to retrieve.
   */
  getBucket(e) {
    return je(this, void 0, void 0, function* () {
      try {
        return { data: yield _s(this.fetch, `${this.url}/bucket/${e}`, { headers: this.headers }), error: null };
      } catch (s) {
        if (I(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
  /**
   * Creates a new Storage bucket
   *
   * @param id A unique identifier for the bucket you are creating.
   * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations. By default, buckets are private.
   * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
   * The global file size limit takes precedence over this value.
   * The default value is null, which doesn't set a per bucket file size limit.
   * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
   * The default value is null, which allows files with all mime types to be uploaded.
   * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
   * @returns newly created bucket id
   */
  createBucket(e, s = {
    public: !1
  }) {
    return je(this, void 0, void 0, function* () {
      try {
        return { data: yield we(this.fetch, `${this.url}/bucket`, {
          id: e,
          name: e,
          public: s.public,
          file_size_limit: s.fileSizeLimit,
          allowed_mime_types: s.allowedMimeTypes
        }, { headers: this.headers }), error: null };
      } catch (r) {
        if (I(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Updates a Storage bucket
   *
   * @param id A unique identifier for the bucket you are updating.
   * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations.
   * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
   * The global file size limit takes precedence over this value.
   * The default value is null, which doesn't set a per bucket file size limit.
   * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
   * The default value is null, which allows files with all mime types to be uploaded.
   * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
   */
  updateBucket(e, s) {
    return je(this, void 0, void 0, function* () {
      try {
        return { data: yield Ru(this.fetch, `${this.url}/bucket/${e}`, {
          id: e,
          name: e,
          public: s.public,
          file_size_limit: s.fileSizeLimit,
          allowed_mime_types: s.allowedMimeTypes
        }, { headers: this.headers }), error: null };
      } catch (r) {
        if (I(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Removes all objects inside a single bucket.
   *
   * @param id The unique identifier of the bucket you would like to empty.
   */
  emptyBucket(e) {
    return je(this, void 0, void 0, function* () {
      try {
        return { data: yield we(this.fetch, `${this.url}/bucket/${e}/empty`, {}, { headers: this.headers }), error: null };
      } catch (s) {
        if (I(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
  /**
   * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
   * You must first `empty()` the bucket.
   *
   * @param id The unique identifier of the bucket you would like to delete.
   */
  deleteBucket(e) {
    return je(this, void 0, void 0, function* () {
      try {
        return { data: yield Si(this.fetch, `${this.url}/bucket/${e}`, {}, { headers: this.headers }), error: null };
      } catch (s) {
        if (I(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
}
class Uu extends Yu {
  constructor(e, s = {}, r) {
    super(e, s, r);
  }
  /**
   * Perform file operation in a bucket.
   *
   * @param id The bucket id to operate on.
   */
  from(e) {
    return new $u(this.url, this.headers, e, this.fetch);
  }
}
const Lu = "2.45.1";
let et = "";
typeof Deno < "u" ? et = "deno" : typeof document < "u" ? et = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? et = "react-native" : et = "node";
const Nu = { "X-Client-Info": `supabase-js-${et}/${Lu}` }, Fu = {
  headers: Nu
}, Wu = {
  schema: "public"
}, Hu = {
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  flowType: "implicit"
}, Bu = {};
var Gu = function(t, e, s, r) {
  function i(n) {
    return n instanceof s ? n : new s(function(a) {
      a(n);
    });
  }
  return new (s || (s = Promise))(function(n, a) {
    function o(u) {
      try {
        h(r.next(u));
      } catch (c) {
        a(c);
      }
    }
    function l(u) {
      try {
        h(r.throw(u));
      } catch (c) {
        a(c);
      }
    }
    function h(u) {
      u.done ? n(u.value) : i(u.value).then(o, l);
    }
    h((r = r.apply(t, e || [])).next());
  });
};
const Vu = (t) => {
  let e;
  return t ? e = t : typeof fetch > "u" ? e = li : e = fetch, (...s) => e(...s);
}, zu = () => typeof Headers > "u" ? ui : Headers, qu = (t, e, s) => {
  const r = Vu(s), i = zu();
  return (n, a) => Gu(void 0, void 0, void 0, function* () {
    var o;
    const l = (o = yield e()) !== null && o !== void 0 ? o : t;
    let h = new i(a == null ? void 0 : a.headers);
    return h.has("apikey") || h.set("apikey", t), h.has("Authorization") || h.set("Authorization", `Bearer ${l}`), r(n, Object.assign(Object.assign({}, a), { headers: h }));
  });
};
var Ju = function(t, e, s, r) {
  function i(n) {
    return n instanceof s ? n : new s(function(a) {
      a(n);
    });
  }
  return new (s || (s = Promise))(function(n, a) {
    function o(u) {
      try {
        h(r.next(u));
      } catch (c) {
        a(c);
      }
    }
    function l(u) {
      try {
        h(r.throw(u));
      } catch (c) {
        a(c);
      }
    }
    function h(u) {
      u.done ? n(u.value) : i(u.value).then(o, l);
    }
    h((r = r.apply(t, e || [])).next());
  });
};
function Ku(t) {
  return t.replace(/\/$/, "");
}
function Zu(t, e) {
  const { db: s, auth: r, realtime: i, global: n } = t, { db: a, auth: o, realtime: l, global: h } = e, u = {
    db: Object.assign(Object.assign({}, a), s),
    auth: Object.assign(Object.assign({}, o), r),
    realtime: Object.assign(Object.assign({}, l), i),
    global: Object.assign(Object.assign({}, h), n),
    accessToken: () => Ju(this, void 0, void 0, function* () {
      return "";
    })
  };
  return t.accessToken ? u.accessToken = t.accessToken : delete u.accessToken, u;
}
const Ti = "2.64.4", Qu = "http://localhost:9999", Xu = "supabase.auth.token", eh = { "X-Client-Info": `gotrue-js/${Ti}` }, ir = 10, ps = "X-Supabase-Api-Version", Oi = {
  "2024-01-01": {
    timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
    name: "2024-01-01"
  }
};
function th(t) {
  return Math.round(Date.now() / 1e3) + t;
}
function sh() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
    const e = Math.random() * 16 | 0;
    return (t == "x" ? e : e & 3 | 8).toString(16);
  });
}
const K = () => typeof document < "u", Oe = {
  tested: !1,
  writable: !1
}, it = () => {
  if (!K())
    return !1;
  try {
    if (typeof globalThis.localStorage != "object")
      return !1;
  } catch {
    return !1;
  }
  if (Oe.tested)
    return Oe.writable;
  const t = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(t, t), globalThis.localStorage.removeItem(t), Oe.tested = !0, Oe.writable = !0;
  } catch {
    Oe.tested = !0, Oe.writable = !1;
  }
  return Oe.writable;
};
function es(t) {
  const e = {}, s = new URL(t);
  if (s.hash && s.hash[0] === "#")
    try {
      new URLSearchParams(s.hash.substring(1)).forEach((i, n) => {
        e[n] = i;
      });
    } catch {
    }
  return s.searchParams.forEach((r, i) => {
    e[i] = r;
  }), e;
}
const Di = (t) => {
  let e;
  return t ? e = t : typeof fetch > "u" ? e = (...s) => Promise.resolve().then(() => qe).then(({ default: r }) => r(...s)) : e = fetch, (...s) => e(...s);
}, rh = (t) => typeof t == "object" && t !== null && "status" in t && "ok" in t && "json" in t && typeof t.json == "function", Pi = async (t, e, s) => {
  await t.setItem(e, JSON.stringify(s));
}, gt = async (t, e) => {
  const s = await t.getItem(e);
  if (!s)
    return null;
  try {
    return JSON.parse(s);
  } catch {
    return s;
  }
}, ts = async (t, e) => {
  await t.removeItem(e);
};
function ih(t) {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  let s = "", r, i, n, a, o, l, h, u = 0;
  for (t = t.replace("-", "+").replace("_", "/"); u < t.length; )
    a = e.indexOf(t.charAt(u++)), o = e.indexOf(t.charAt(u++)), l = e.indexOf(t.charAt(u++)), h = e.indexOf(t.charAt(u++)), r = a << 2 | o >> 4, i = (o & 15) << 4 | l >> 2, n = (l & 3) << 6 | h, s = s + String.fromCharCode(r), l != 64 && i != 0 && (s = s + String.fromCharCode(i)), h != 64 && n != 0 && (s = s + String.fromCharCode(n));
  return s;
}
class Vt {
  constructor() {
    this.promise = new Vt.promiseConstructor((e, s) => {
      this.resolve = e, this.reject = s;
    });
  }
}
Vt.promiseConstructor = Promise;
function nr(t) {
  const e = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i, s = t.split(".");
  if (s.length !== 3)
    throw new Error("JWT is not valid: not a JWT structure");
  if (!e.test(s[1]))
    throw new Error("JWT is not valid: payload is not in base64url format");
  const r = s[1];
  return JSON.parse(ih(r));
}
async function nh(t) {
  return await new Promise((e) => {
    setTimeout(() => e(null), t);
  });
}
function ah(t, e) {
  return new Promise((r, i) => {
    (async () => {
      for (let n = 0; n < 1 / 0; n++)
        try {
          const a = await t(n);
          if (!e(n, null, a)) {
            r(a);
            return;
          }
        } catch (a) {
          if (!e(n, a)) {
            i(a);
            return;
          }
        }
    })();
  });
}
function oh(t) {
  return ("0" + t.toString(16)).substr(-2);
}
function lh() {
  const e = new Uint32Array(56);
  if (typeof crypto > "u") {
    const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", r = s.length;
    let i = "";
    for (let n = 0; n < 56; n++)
      i += s.charAt(Math.floor(Math.random() * r));
    return i;
  }
  return crypto.getRandomValues(e), Array.from(e, oh).join("");
}
async function uh(t) {
  const s = new TextEncoder().encode(t), r = await crypto.subtle.digest("SHA-256", s), i = new Uint8Array(r);
  return Array.from(i).map((n) => String.fromCharCode(n)).join("");
}
function hh(t) {
  return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function ch(t) {
  if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
    return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), t;
  const s = await uh(t);
  return hh(s);
}
async function Ie(t, e, s = !1) {
  const r = lh();
  let i = r;
  s && (i += "/PASSWORD_RECOVERY"), await Pi(t, `${e}-code-verifier`, i);
  const n = await ch(r);
  return [n, r === n ? "plain" : "s256"];
}
const dh = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function fh(t) {
  const e = t.headers.get(ps);
  if (!e || !e.match(dh))
    return null;
  try {
    return /* @__PURE__ */ new Date(`${e}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
class Bs extends Error {
  constructor(e, s, r) {
    super(e), this.__isAuthError = !0, this.name = "AuthError", this.status = s, this.code = r;
  }
}
function w(t) {
  return typeof t == "object" && t !== null && "__isAuthError" in t;
}
class _h extends Bs {
  constructor(e, s, r) {
    super(e, s, r), this.name = "AuthApiError", this.status = s, this.code = r;
  }
}
function ph(t) {
  return w(t) && t.name === "AuthApiError";
}
class Ei extends Bs {
  constructor(e, s) {
    super(e), this.name = "AuthUnknownError", this.originalError = s;
  }
}
class Ce extends Bs {
  constructor(e, s, r, i) {
    super(e, r, i), this.name = s, this.status = r;
  }
}
class De extends Ce {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
class ss extends Ce {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
  }
}
class wt extends Ce {
  constructor(e) {
    super(e, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class vt extends Ce {
  constructor(e, s = null) {
    super(e, "AuthImplicitGrantRedirectError", 500, void 0), this.details = null, this.details = s;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
class ar extends Ce {
  constructor(e, s = null) {
    super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0), this.details = null, this.details = s;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
class ms extends Ce {
  constructor(e, s) {
    super(e, "AuthRetryableFetchError", s, void 0);
  }
}
function rs(t) {
  return w(t) && t.name === "AuthRetryableFetchError";
}
class or extends Ce {
  constructor(e, s, r) {
    super(e, "AuthWeakPasswordError", s, "weak_password"), this.reasons = r;
  }
}
var mh = function(t, e) {
  var s = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (s[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (s[r[i]] = t[r[i]]);
  return s;
};
const Pe = (t) => t.msg || t.message || t.error_description || t.error || JSON.stringify(t), yh = [502, 503, 504];
async function lr(t) {
  var e;
  if (!rh(t))
    throw new ms(Pe(t), 0);
  if (yh.includes(t.status))
    throw new ms(Pe(t), t.status);
  let s;
  try {
    s = await t.json();
  } catch (n) {
    throw new Ei(Pe(n), n);
  }
  let r;
  const i = fh(t);
  if (i && i.getTime() >= Oi["2024-01-01"].timestamp && typeof s == "object" && s && typeof s.code == "string" ? r = s.code : typeof s == "object" && s && typeof s.error_code == "string" && (r = s.error_code), r) {
    if (r === "weak_password")
      throw new or(Pe(s), t.status, ((e = s.weak_password) === null || e === void 0 ? void 0 : e.reasons) || []);
  } else if (typeof s == "object" && s && typeof s.weak_password == "object" && s.weak_password && Array.isArray(s.weak_password.reasons) && s.weak_password.reasons.length && s.weak_password.reasons.reduce((n, a) => n && typeof a == "string", !0))
    throw new or(Pe(s), t.status, s.weak_password.reasons);
  throw new _h(Pe(s), t.status || 500, r);
}
const gh = (t, e, s, r) => {
  const i = { method: t, headers: (e == null ? void 0 : e.headers) || {} };
  return t === "GET" ? i : (i.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, e == null ? void 0 : e.headers), i.body = JSON.stringify(r), Object.assign(Object.assign({}, i), s));
};
async function b(t, e, s, r) {
  var i;
  const n = Object.assign({}, r == null ? void 0 : r.headers);
  n[ps] || (n[ps] = Oi["2024-01-01"].name), r != null && r.jwt && (n.Authorization = `Bearer ${r.jwt}`);
  const a = (i = r == null ? void 0 : r.query) !== null && i !== void 0 ? i : {};
  r != null && r.redirectTo && (a.redirect_to = r.redirectTo);
  const o = Object.keys(a).length ? "?" + new URLSearchParams(a).toString() : "", l = await wh(t, e, s + o, {
    headers: n,
    noResolveJson: r == null ? void 0 : r.noResolveJson
  }, {}, r == null ? void 0 : r.body);
  return r != null && r.xform ? r == null ? void 0 : r.xform(l) : { data: Object.assign({}, l), error: null };
}
async function wh(t, e, s, r, i, n) {
  const a = gh(e, r, i, n);
  let o;
  try {
    o = await t(s, Object.assign({}, a));
  } catch (l) {
    throw console.error(l), new ms(Pe(l), 0);
  }
  if (o.ok || await lr(o), r != null && r.noResolveJson)
    return o;
  try {
    return await o.json();
  } catch (l) {
    await lr(l);
  }
}
function ye(t) {
  var e;
  let s = null;
  Sh(t) && (s = Object.assign({}, t), t.expires_at || (s.expires_at = th(t.expires_in)));
  const r = (e = t.user) !== null && e !== void 0 ? e : t;
  return { data: { session: s, user: r }, error: null };
}
function ur(t) {
  const e = ye(t);
  return !e.error && t.weak_password && typeof t.weak_password == "object" && Array.isArray(t.weak_password.reasons) && t.weak_password.reasons.length && t.weak_password.message && typeof t.weak_password.message == "string" && t.weak_password.reasons.reduce((s, r) => s && typeof r == "string", !0) && (e.data.weak_password = t.weak_password), e;
}
function ve(t) {
  var e;
  return { data: { user: (e = t.user) !== null && e !== void 0 ? e : t }, error: null };
}
function vh(t) {
  return { data: t, error: null };
}
function bh(t) {
  const { action_link: e, email_otp: s, hashed_token: r, redirect_to: i, verification_type: n } = t, a = mh(t, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), o = {
    action_link: e,
    email_otp: s,
    hashed_token: r,
    redirect_to: i,
    verification_type: n
  }, l = Object.assign({}, a);
  return {
    data: {
      properties: o,
      user: l
    },
    error: null
  };
}
function kh(t) {
  return t;
}
function Sh(t) {
  return t.access_token && t.refresh_token && t.expires_in;
}
var Th = function(t, e) {
  var s = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (s[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (s[r[i]] = t[r[i]]);
  return s;
};
class Oh {
  constructor({ url: e = "", headers: s = {}, fetch: r }) {
    this.url = e, this.headers = s, this.fetch = Di(r), this.mfa = {
      listFactors: this._listFactors.bind(this),
      deleteFactor: this._deleteFactor.bind(this)
    };
  }
  /**
   * Removes a logged-in session.
   * @param jwt A valid, logged-in JWT.
   * @param scope The logout sope.
   */
  async signOut(e, s = "global") {
    try {
      return await b(this.fetch, "POST", `${this.url}/logout?scope=${s}`, {
        headers: this.headers,
        jwt: e,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (r) {
      if (w(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Sends an invite link to an email address.
   * @param email The email address of the user.
   * @param options Additional options to be included when inviting.
   */
  async inviteUserByEmail(e, s = {}) {
    try {
      return await b(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: e, data: s.data },
        headers: this.headers,
        redirectTo: s.redirectTo,
        xform: ve
      });
    } catch (r) {
      if (w(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  /**
   * Generates email links and OTPs to be sent via a custom email provider.
   * @param email The user's email.
   * @param options.password User password. For signup only.
   * @param options.data Optional user metadata. For signup only.
   * @param options.redirectTo The redirect url which should be appended to the generated link
   */
  async generateLink(e) {
    try {
      const { options: s } = e, r = Th(e, ["options"]), i = Object.assign(Object.assign({}, r), s);
      return "newEmail" in r && (i.new_email = r == null ? void 0 : r.newEmail, delete i.newEmail), await b(this.fetch, "POST", `${this.url}/admin/generate_link`, {
        body: i,
        headers: this.headers,
        xform: bh,
        redirectTo: s == null ? void 0 : s.redirectTo
      });
    } catch (s) {
      if (w(s))
        return {
          data: {
            properties: null,
            user: null
          },
          error: s
        };
      throw s;
    }
  }
  // User Admin API
  /**
   * Creates a new user.
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async createUser(e) {
    try {
      return await b(this.fetch, "POST", `${this.url}/admin/users`, {
        body: e,
        headers: this.headers,
        xform: ve
      });
    } catch (s) {
      if (w(s))
        return { data: { user: null }, error: s };
      throw s;
    }
  }
  /**
   * Get a list of users.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   * @param params An object which supports `page` and `perPage` as numbers, to alter the paginated results.
   */
  async listUsers(e) {
    var s, r, i, n, a, o, l;
    try {
      const h = { nextPage: null, lastPage: 0, total: 0 }, u = await b(this.fetch, "GET", `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (r = (s = e == null ? void 0 : e.page) === null || s === void 0 ? void 0 : s.toString()) !== null && r !== void 0 ? r : "",
          per_page: (n = (i = e == null ? void 0 : e.perPage) === null || i === void 0 ? void 0 : i.toString()) !== null && n !== void 0 ? n : ""
        },
        xform: kh
      });
      if (u.error)
        throw u.error;
      const c = await u.json(), f = (a = u.headers.get("x-total-count")) !== null && a !== void 0 ? a : 0, y = (l = (o = u.headers.get("link")) === null || o === void 0 ? void 0 : o.split(",")) !== null && l !== void 0 ? l : [];
      return y.length > 0 && (y.forEach((D) => {
        const M = parseInt(D.split(";")[0].split("=")[1].substring(0, 1)), P = JSON.parse(D.split(";")[1].split("=")[1]);
        h[`${P}Page`] = M;
      }), h.total = parseInt(f)), { data: Object.assign(Object.assign({}, c), h), error: null };
    } catch (h) {
      if (w(h))
        return { data: { users: [] }, error: h };
      throw h;
    }
  }
  /**
   * Get user by id.
   *
   * @param uid The user's unique identifier
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async getUserById(e) {
    try {
      return await b(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        xform: ve
      });
    } catch (s) {
      if (w(s))
        return { data: { user: null }, error: s };
      throw s;
    }
  }
  /**
   * Updates the user data.
   *
   * @param attributes The data you want to update.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async updateUserById(e, s) {
    try {
      return await b(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
        body: s,
        headers: this.headers,
        xform: ve
      });
    } catch (r) {
      if (w(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  /**
   * Delete a user. Requires a `service_role` key.
   *
   * @param id The user id you want to remove.
   * @param shouldSoftDelete If true, then the user will be soft-deleted (setting `deleted_at` to the current timestamp and disabling their account while preserving their data) from the auth schema.
   * Defaults to false for backward compatibility.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async deleteUser(e, s = !1) {
    try {
      return await b(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        body: {
          should_soft_delete: s
        },
        xform: ve
      });
    } catch (r) {
      if (w(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  async _listFactors(e) {
    try {
      const { data: s, error: r } = await b(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
        headers: this.headers,
        xform: (i) => ({ data: { factors: i }, error: null })
      });
      return { data: s, error: r };
    } catch (s) {
      if (w(s))
        return { data: null, error: s };
      throw s;
    }
  }
  async _deleteFactor(e) {
    try {
      return { data: await b(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
        headers: this.headers
      }), error: null };
    } catch (s) {
      if (w(s))
        return { data: null, error: s };
      throw s;
    }
  }
}
const Dh = {
  getItem: (t) => it() ? globalThis.localStorage.getItem(t) : null,
  setItem: (t, e) => {
    it() && globalThis.localStorage.setItem(t, e);
  },
  removeItem: (t) => {
    it() && globalThis.localStorage.removeItem(t);
  }
};
function hr(t = {}) {
  return {
    getItem: (e) => t[e] || null,
    setItem: (e, s) => {
      t[e] = s;
    },
    removeItem: (e) => {
      delete t[e];
    }
  };
}
function Ph() {
  if (typeof globalThis != "object")
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function() {
          return this;
        },
        configurable: !0
      }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__;
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
const Ye = {
  /**
   * @experimental
   */
  debug: !!(globalThis && it() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class Mi extends Error {
  constructor(e) {
    super(e), this.isAcquireTimeout = !0;
  }
}
class Eh extends Mi {
}
async function Mh(t, e, s) {
  Ye.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", t, e);
  const r = new globalThis.AbortController();
  return e > 0 && setTimeout(() => {
    r.abort(), Ye.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", t);
  }, e), await globalThis.navigator.locks.request(t, e === 0 ? {
    mode: "exclusive",
    ifAvailable: !0
  } : {
    mode: "exclusive",
    signal: r.signal
  }, async (i) => {
    if (i) {
      Ye.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", t, i.name);
      try {
        return await s();
      } finally {
        Ye.debug && console.log("@supabase/gotrue-js: navigatorLock: released", t, i.name);
      }
    } else {
      if (e === 0)
        throw Ye.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", t), new Eh(`Acquiring an exclusive Navigator LockManager lock "${t}" immediately failed`);
      if (Ye.debug)
        try {
          const n = await globalThis.navigator.locks.query();
          console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(n, null, "  "));
        } catch (n) {
          console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", n);
        }
      return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), await s();
    }
  });
}
Ph();
const Ah = {
  url: Qu,
  storageKey: Xu,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: eh,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1
}, Xe = 30 * 1e3, cr = 3;
async function dr(t, e, s) {
  return await s();
}
class ut {
  /**
   * Create a new client for use in the browser.
   */
  constructor(e) {
    var s, r;
    this.memoryStorage = null, this.stateChangeEmitters = /* @__PURE__ */ new Map(), this.autoRefreshTicker = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log, this.instanceID = ut.nextInstanceID, ut.nextInstanceID += 1, this.instanceID > 0 && K() && console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
    const i = Object.assign(Object.assign({}, Ah), e);
    if (this.logDebugMessages = !!i.debug, typeof i.debug == "function" && (this.logger = i.debug), this.persistSession = i.persistSession, this.storageKey = i.storageKey, this.autoRefreshToken = i.autoRefreshToken, this.admin = new Oh({
      url: i.url,
      headers: i.headers,
      fetch: i.fetch
    }), this.url = i.url, this.headers = i.headers, this.fetch = Di(i.fetch), this.lock = i.lock || dr, this.detectSessionInUrl = i.detectSessionInUrl, this.flowType = i.flowType, this.hasCustomAuthorizationHeader = i.hasCustomAuthorizationHeader, i.lock ? this.lock = i.lock : K() && (!((s = globalThis == null ? void 0 : globalThis.navigator) === null || s === void 0) && s.locks) ? this.lock = Mh : this.lock = dr, this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
    }, this.persistSession ? i.storage ? this.storage = i.storage : it() ? this.storage = Dh : (this.memoryStorage = {}, this.storage = hr(this.memoryStorage)) : (this.memoryStorage = {}, this.storage = hr(this.memoryStorage)), K() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
      } catch (n) {
        console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", n);
      }
      (r = this.broadcastChannel) === null || r === void 0 || r.addEventListener("message", async (n) => {
        this._debug("received broadcast notification from other tab or client", n), await this._notifyAllSubscribers(n.data.event, n.data.session, !1);
      });
    }
    this.initialize();
  }
  _debug(...e) {
    return this.logDebugMessages && this.logger(`GoTrueClient@${this.instanceID} (${Ti}) ${(/* @__PURE__ */ new Date()).toISOString()}`, ...e), this;
  }
  /**
   * Initializes the client session either from the url or from storage.
   * This method is automatically called when instantiating the client, but should also be called
   * manually when checking for an error from an auth redirect (oauth, magiclink, password recovery, etc).
   */
  async initialize() {
    return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(-1, async () => await this._initialize()))(), await this.initializePromise);
  }
  /**
   * IMPORTANT:
   * 1. Never throw in this method, as it is called from the constructor
   * 2. Never return a session from this method as it would be cached over
   *    the whole lifetime of the client
   */
  async _initialize() {
    try {
      const e = K() ? await this._isPKCEFlow() : !1;
      if (this._debug("#_initialize()", "begin", "is PKCE flow", e), e || this.detectSessionInUrl && this._isImplicitGrantFlow()) {
        const { data: s, error: r } = await this._getSessionFromURL(e);
        if (r)
          return this._debug("#_initialize()", "error detecting session from URL", r), (r == null ? void 0 : r.message) === "Identity is already linked" || (r == null ? void 0 : r.message) === "Identity is already linked to another user" ? { error: r } : (await this._removeSession(), { error: r });
        const { session: i, redirectType: n } = s;
        return this._debug("#_initialize()", "detected session in URL", i, "redirect type", n), await this._saveSession(i), setTimeout(async () => {
          n === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", i) : await this._notifyAllSubscribers("SIGNED_IN", i);
        }, 0), { error: null };
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (e) {
      return w(e) ? { error: e } : {
        error: new Ei("Unexpected error during initialization", e)
      };
    } finally {
      await this._handleVisibilityChange(), this._debug("#_initialize()", "end");
    }
  }
  /**
   * Creates a new anonymous user.
   *
   * @returns A session where the is_anonymous claim in the access token JWT set to true
   */
  async signInAnonymously(e) {
    var s, r, i;
    try {
      const n = await b(this.fetch, "POST", `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: (r = (s = e == null ? void 0 : e.options) === null || s === void 0 ? void 0 : s.data) !== null && r !== void 0 ? r : {},
          gotrue_meta_security: { captcha_token: (i = e == null ? void 0 : e.options) === null || i === void 0 ? void 0 : i.captchaToken }
        },
        xform: ye
      }), { data: a, error: o } = n;
      if (o || !a)
        return { data: { user: null, session: null }, error: o };
      const l = a.session, h = a.user;
      return a.session && (await this._saveSession(a.session), await this._notifyAllSubscribers("SIGNED_IN", l)), { data: { user: h, session: l }, error: null };
    } catch (n) {
      if (w(n))
        return { data: { user: null, session: null }, error: n };
      throw n;
    }
  }
  /**
   * Creates a new user.
   *
   * Be aware that if a user account exists in the system you may get back an
   * error message that attempts to hide this information from the user.
   * This method has support for PKCE via email signups. The PKCE flow cannot be used when autoconfirm is enabled.
   *
   * @returns A logged-in session if the server has "autoconfirm" ON
   * @returns A user if the server has "autoconfirm" OFF
   */
  async signUp(e) {
    var s, r, i;
    try {
      let n;
      if ("email" in e) {
        const { email: u, password: c, options: f } = e;
        let y = null, D = null;
        this.flowType === "pkce" && ([y, D] = await Ie(this.storage, this.storageKey)), n = await b(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          redirectTo: f == null ? void 0 : f.emailRedirectTo,
          body: {
            email: u,
            password: c,
            data: (s = f == null ? void 0 : f.data) !== null && s !== void 0 ? s : {},
            gotrue_meta_security: { captcha_token: f == null ? void 0 : f.captchaToken },
            code_challenge: y,
            code_challenge_method: D
          },
          xform: ye
        });
      } else if ("phone" in e) {
        const { phone: u, password: c, options: f } = e;
        n = await b(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: u,
            password: c,
            data: (r = f == null ? void 0 : f.data) !== null && r !== void 0 ? r : {},
            channel: (i = f == null ? void 0 : f.channel) !== null && i !== void 0 ? i : "sms",
            gotrue_meta_security: { captcha_token: f == null ? void 0 : f.captchaToken }
          },
          xform: ye
        });
      } else
        throw new wt("You must provide either an email or phone number and a password");
      const { data: a, error: o } = n;
      if (o || !a)
        return { data: { user: null, session: null }, error: o };
      const l = a.session, h = a.user;
      return a.session && (await this._saveSession(a.session), await this._notifyAllSubscribers("SIGNED_IN", l)), { data: { user: h, session: l }, error: null };
    } catch (n) {
      if (w(n))
        return { data: { user: null, session: null }, error: n };
      throw n;
    }
  }
  /**
   * Log in an existing user with an email and password or phone and password.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or that the
   * email/phone and password combination is wrong or that the account can only
   * be accessed via social login.
   */
  async signInWithPassword(e) {
    try {
      let s;
      if ("email" in e) {
        const { email: n, password: a, options: o } = e;
        s = await b(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email: n,
            password: a,
            gotrue_meta_security: { captcha_token: o == null ? void 0 : o.captchaToken }
          },
          xform: ur
        });
      } else if ("phone" in e) {
        const { phone: n, password: a, options: o } = e;
        s = await b(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone: n,
            password: a,
            gotrue_meta_security: { captcha_token: o == null ? void 0 : o.captchaToken }
          },
          xform: ur
        });
      } else
        throw new wt("You must provide either an email or phone number and a password");
      const { data: r, error: i } = s;
      return i ? { data: { user: null, session: null }, error: i } : !r || !r.session || !r.user ? { data: { user: null, session: null }, error: new ss() } : (r.session && (await this._saveSession(r.session), await this._notifyAllSubscribers("SIGNED_IN", r.session)), {
        data: Object.assign({ user: r.user, session: r.session }, r.weak_password ? { weakPassword: r.weak_password } : null),
        error: i
      });
    } catch (s) {
      if (w(s))
        return { data: { user: null, session: null }, error: s };
      throw s;
    }
  }
  /**
   * Log in an existing user via a third-party provider.
   * This method supports the PKCE flow.
   */
  async signInWithOAuth(e) {
    var s, r, i, n;
    return await this._handleProviderSignIn(e.provider, {
      redirectTo: (s = e.options) === null || s === void 0 ? void 0 : s.redirectTo,
      scopes: (r = e.options) === null || r === void 0 ? void 0 : r.scopes,
      queryParams: (i = e.options) === null || i === void 0 ? void 0 : i.queryParams,
      skipBrowserRedirect: (n = e.options) === null || n === void 0 ? void 0 : n.skipBrowserRedirect
    });
  }
  /**
   * Log in an existing user by exchanging an Auth Code issued during the PKCE flow.
   */
  async exchangeCodeForSession(e) {
    return await this.initializePromise, this._acquireLock(-1, async () => this._exchangeCodeForSession(e));
  }
  async _exchangeCodeForSession(e) {
    const s = await gt(this.storage, `${this.storageKey}-code-verifier`), [r, i] = (s ?? "").split("/"), { data: n, error: a } = await b(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
      headers: this.headers,
      body: {
        auth_code: e,
        code_verifier: r
      },
      xform: ye
    });
    return await ts(this.storage, `${this.storageKey}-code-verifier`), a ? { data: { user: null, session: null, redirectType: null }, error: a } : !n || !n.session || !n.user ? {
      data: { user: null, session: null, redirectType: null },
      error: new ss()
    } : (n.session && (await this._saveSession(n.session), await this._notifyAllSubscribers("SIGNED_IN", n.session)), { data: Object.assign(Object.assign({}, n), { redirectType: i ?? null }), error: a });
  }
  /**
   * Allows signing in with an OIDC ID token. The authentication provider used
   * should be enabled and configured.
   */
  async signInWithIdToken(e) {
    try {
      const { options: s, provider: r, token: i, access_token: n, nonce: a } = e, o = await b(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
        headers: this.headers,
        body: {
          provider: r,
          id_token: i,
          access_token: n,
          nonce: a,
          gotrue_meta_security: { captcha_token: s == null ? void 0 : s.captchaToken }
        },
        xform: ye
      }), { data: l, error: h } = o;
      return h ? { data: { user: null, session: null }, error: h } : !l || !l.session || !l.user ? {
        data: { user: null, session: null },
        error: new ss()
      } : (l.session && (await this._saveSession(l.session), await this._notifyAllSubscribers("SIGNED_IN", l.session)), { data: l, error: h });
    } catch (s) {
      if (w(s))
        return { data: { user: null, session: null }, error: s };
      throw s;
    }
  }
  /**
   * Log in a user using magiclink or a one-time password (OTP).
   *
   * If the `{{ .ConfirmationURL }}` variable is specified in the email template, a magiclink will be sent.
   * If the `{{ .Token }}` variable is specified in the email template, an OTP will be sent.
   * If you're using phone sign-ins, only an OTP will be sent. You won't be able to send a magiclink for phone sign-ins.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or, that the account
   * can only be accessed via social login.
   *
   * Do note that you will need to configure a Whatsapp sender on Twilio
   * if you are using phone sign in with the 'whatsapp' channel. The whatsapp
   * channel is not supported on other providers
   * at this time.
   * This method supports PKCE when an email is passed.
   */
  async signInWithOtp(e) {
    var s, r, i, n, a;
    try {
      if ("email" in e) {
        const { email: o, options: l } = e;
        let h = null, u = null;
        this.flowType === "pkce" && ([h, u] = await Ie(this.storage, this.storageKey));
        const { error: c } = await b(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: o,
            data: (s = l == null ? void 0 : l.data) !== null && s !== void 0 ? s : {},
            create_user: (r = l == null ? void 0 : l.shouldCreateUser) !== null && r !== void 0 ? r : !0,
            gotrue_meta_security: { captcha_token: l == null ? void 0 : l.captchaToken },
            code_challenge: h,
            code_challenge_method: u
          },
          redirectTo: l == null ? void 0 : l.emailRedirectTo
        });
        return { data: { user: null, session: null }, error: c };
      }
      if ("phone" in e) {
        const { phone: o, options: l } = e, { data: h, error: u } = await b(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            phone: o,
            data: (i = l == null ? void 0 : l.data) !== null && i !== void 0 ? i : {},
            create_user: (n = l == null ? void 0 : l.shouldCreateUser) !== null && n !== void 0 ? n : !0,
            gotrue_meta_security: { captcha_token: l == null ? void 0 : l.captchaToken },
            channel: (a = l == null ? void 0 : l.channel) !== null && a !== void 0 ? a : "sms"
          }
        });
        return { data: { user: null, session: null, messageId: h == null ? void 0 : h.message_id }, error: u };
      }
      throw new wt("You must provide either an email or phone number.");
    } catch (o) {
      if (w(o))
        return { data: { user: null, session: null }, error: o };
      throw o;
    }
  }
  /**
   * Log in a user given a User supplied OTP or TokenHash received through mobile or email.
   */
  async verifyOtp(e) {
    var s, r;
    try {
      let i, n;
      "options" in e && (i = (s = e.options) === null || s === void 0 ? void 0 : s.redirectTo, n = (r = e.options) === null || r === void 0 ? void 0 : r.captchaToken);
      const { data: a, error: o } = await b(this.fetch, "POST", `${this.url}/verify`, {
        headers: this.headers,
        body: Object.assign(Object.assign({}, e), { gotrue_meta_security: { captcha_token: n } }),
        redirectTo: i,
        xform: ye
      });
      if (o)
        throw o;
      if (!a)
        throw new Error("An error occurred on token verification.");
      const l = a.session, h = a.user;
      return l != null && l.access_token && (await this._saveSession(l), await this._notifyAllSubscribers(e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", l)), { data: { user: h, session: l }, error: null };
    } catch (i) {
      if (w(i))
        return { data: { user: null, session: null }, error: i };
      throw i;
    }
  }
  /**
   * Attempts a single-sign on using an enterprise Identity Provider. A
   * successful SSO attempt will redirect the current page to the identity
   * provider authorization page. The redirect URL is implementation and SSO
   * protocol specific.
   *
   * You can use it by providing a SSO domain. Typically you can extract this
   * domain by asking users for their email address. If this domain is
   * registered on the Auth instance the redirect will use that organization's
   * currently active SSO Identity Provider for the login.
   *
   * If you have built an organization-specific login page, you can use the
   * organization's SSO Identity Provider UUID directly instead.
   */
  async signInWithSSO(e) {
    var s, r, i;
    try {
      let n = null, a = null;
      return this.flowType === "pkce" && ([n, a] = await Ie(this.storage, this.storageKey)), await b(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in e ? { provider_id: e.providerId } : null), "domain" in e ? { domain: e.domain } : null), { redirect_to: (r = (s = e.options) === null || s === void 0 ? void 0 : s.redirectTo) !== null && r !== void 0 ? r : void 0 }), !((i = e == null ? void 0 : e.options) === null || i === void 0) && i.captchaToken ? { gotrue_meta_security: { captcha_token: e.options.captchaToken } } : null), { skip_http_redirect: !0, code_challenge: n, code_challenge_method: a }),
        headers: this.headers,
        xform: vh
      });
    } catch (n) {
      if (w(n))
        return { data: null, error: n };
      throw n;
    }
  }
  /**
   * Sends a reauthentication OTP to the user's email or phone number.
   * Requires the user to be signed-in.
   */
  async reauthenticate() {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._reauthenticate());
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (e) => {
        const { data: { session: s }, error: r } = e;
        if (r)
          throw r;
        if (!s)
          throw new De();
        const { error: i } = await b(this.fetch, "GET", `${this.url}/reauthenticate`, {
          headers: this.headers,
          jwt: s.access_token
        });
        return { data: { user: null, session: null }, error: i };
      });
    } catch (e) {
      if (w(e))
        return { data: { user: null, session: null }, error: e };
      throw e;
    }
  }
  /**
   * Resends an existing signup confirmation email, email change email, SMS OTP or phone change OTP.
   */
  async resend(e) {
    try {
      const s = `${this.url}/resend`;
      if ("email" in e) {
        const { email: r, type: i, options: n } = e, { error: a } = await b(this.fetch, "POST", s, {
          headers: this.headers,
          body: {
            email: r,
            type: i,
            gotrue_meta_security: { captcha_token: n == null ? void 0 : n.captchaToken }
          },
          redirectTo: n == null ? void 0 : n.emailRedirectTo
        });
        return { data: { user: null, session: null }, error: a };
      } else if ("phone" in e) {
        const { phone: r, type: i, options: n } = e, { data: a, error: o } = await b(this.fetch, "POST", s, {
          headers: this.headers,
          body: {
            phone: r,
            type: i,
            gotrue_meta_security: { captcha_token: n == null ? void 0 : n.captchaToken }
          }
        });
        return { data: { user: null, session: null, messageId: a == null ? void 0 : a.message_id }, error: o };
      }
      throw new wt("You must provide either an email or phone number and a type");
    } catch (s) {
      if (w(s))
        return { data: { user: null, session: null }, error: s };
      throw s;
    }
  }
  /**
   * Returns the session, refreshing it if necessary.
   *
   * The session returned can be null if the session is not detected which can happen in the event a user is not signed-in or has logged out.
   *
   * **IMPORTANT:** This method loads values directly from the storage attached
   * to the client. If that storage is based on request cookies for example,
   * the values in it may not be authentic and therefore it's strongly advised
   * against using this method and its results in such circumstances. A warning
   * will be emitted if this is detected. Use {@link #getUser()} instead.
   */
  async getSession() {
    return await this.initializePromise, await this._acquireLock(-1, async () => this._useSession(async (s) => s));
  }
  /**
   * Acquires a global lock based on the storage key.
   */
  async _acquireLock(e, s) {
    this._debug("#_acquireLock", "begin", e);
    try {
      if (this.lockAcquired) {
        const r = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(), i = (async () => (await r, await s()))();
        return this.pendingInLock.push((async () => {
          try {
            await i;
          } catch {
          }
        })()), i;
      }
      return await this.lock(`lock:${this.storageKey}`, e, async () => {
        this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
        try {
          this.lockAcquired = !0;
          const r = s();
          for (this.pendingInLock.push((async () => {
            try {
              await r;
            } catch {
            }
          })()), await r; this.pendingInLock.length; ) {
            const i = [...this.pendingInLock];
            await Promise.all(i), this.pendingInLock.splice(0, i.length);
          }
          return await r;
        } finally {
          this._debug("#_acquireLock", "lock released for storage key", this.storageKey), this.lockAcquired = !1;
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  /**
   * Use instead of {@link #getSession} inside the library. It is
   * semantically usually what you want, as getting a session involves some
   * processing afterwards that requires only one client operating on the
   * session at once across multiple tabs or processes.
   */
  async _useSession(e) {
    this._debug("#_useSession", "begin");
    try {
      const s = await this.__loadSession();
      return await e(s);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  /**
   * NEVER USE DIRECTLY!
   *
   * Always use {@link #_useSession}.
   */
  async __loadSession() {
    this._debug("#__loadSession()", "begin"), this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
    try {
      let e = null;
      const s = await gt(this.storage, this.storageKey);
      if (this._debug("#getSession()", "session from storage", s), s !== null && (this._isValidSession(s) ? e = s : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !e)
        return { data: { session: null }, error: null };
      const r = e.expires_at ? e.expires_at <= Date.now() / 1e3 : !1;
      if (this._debug("#__loadSession()", `session has${r ? "" : " not"} expired`, "expires_at", e.expires_at), !r) {
        if (this.storage.isServer) {
          let a = this.suppressGetSessionWarning;
          e = new Proxy(e, {
            get: (l, h, u) => (!a && h === "user" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and many not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), a = !0, this.suppressGetSessionWarning = !0), Reflect.get(l, h, u))
          });
        }
        return { data: { session: e }, error: null };
      }
      const { session: i, error: n } = await this._callRefreshToken(e.refresh_token);
      return n ? { data: { session: null }, error: n } : { data: { session: i }, error: null };
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  /**
   * Gets the current user details if there is an existing session. This method
   * performs a network request to the Supabase Auth server, so the returned
   * value is authentic and can be used to base authorization rules on.
   *
   * @param jwt Takes in an optional access token JWT. If no JWT is provided, the JWT from the current session is used.
   */
  async getUser(e) {
    return e ? await this._getUser(e) : (await this.initializePromise, await this._acquireLock(-1, async () => await this._getUser()));
  }
  async _getUser(e) {
    try {
      return e ? await b(this.fetch, "GET", `${this.url}/user`, {
        headers: this.headers,
        jwt: e,
        xform: ve
      }) : await this._useSession(async (s) => {
        var r, i, n;
        const { data: a, error: o } = s;
        if (o)
          throw o;
        return !(!((r = a.session) === null || r === void 0) && r.access_token) && !this.hasCustomAuthorizationHeader ? { data: { user: null }, error: new De() } : await b(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: (n = (i = a.session) === null || i === void 0 ? void 0 : i.access_token) !== null && n !== void 0 ? n : void 0,
          xform: ve
        });
      });
    } catch (s) {
      if (w(s))
        return { data: { user: null }, error: s };
      throw s;
    }
  }
  /**
   * Updates user data for a logged in user.
   */
  async updateUser(e, s = {}) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._updateUser(e, s));
  }
  async _updateUser(e, s = {}) {
    try {
      return await this._useSession(async (r) => {
        const { data: i, error: n } = r;
        if (n)
          throw n;
        if (!i.session)
          throw new De();
        const a = i.session;
        let o = null, l = null;
        this.flowType === "pkce" && e.email != null && ([o, l] = await Ie(this.storage, this.storageKey));
        const { data: h, error: u } = await b(this.fetch, "PUT", `${this.url}/user`, {
          headers: this.headers,
          redirectTo: s == null ? void 0 : s.emailRedirectTo,
          body: Object.assign(Object.assign({}, e), { code_challenge: o, code_challenge_method: l }),
          jwt: a.access_token,
          xform: ve
        });
        if (u)
          throw u;
        return a.user = h.user, await this._saveSession(a), await this._notifyAllSubscribers("USER_UPDATED", a), { data: { user: a.user }, error: null };
      });
    } catch (r) {
      if (w(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  /**
   * Decodes a JWT (without performing any validation).
   */
  _decodeJWT(e) {
    return nr(e);
  }
  /**
   * Sets the session data from the current session. If the current session is expired, setSession will take care of refreshing it to obtain a new session.
   * If the refresh token or access token in the current session is invalid, an error will be thrown.
   * @param currentSession The current session that minimally contains an access token and refresh token.
   */
  async setSession(e) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._setSession(e));
  }
  async _setSession(e) {
    try {
      if (!e.access_token || !e.refresh_token)
        throw new De();
      const s = Date.now() / 1e3;
      let r = s, i = !0, n = null;
      const a = nr(e.access_token);
      if (a.exp && (r = a.exp, i = r <= s), i) {
        const { session: o, error: l } = await this._callRefreshToken(e.refresh_token);
        if (l)
          return { data: { user: null, session: null }, error: l };
        if (!o)
          return { data: { user: null, session: null }, error: null };
        n = o;
      } else {
        const { data: o, error: l } = await this._getUser(e.access_token);
        if (l)
          throw l;
        n = {
          access_token: e.access_token,
          refresh_token: e.refresh_token,
          user: o.user,
          token_type: "bearer",
          expires_in: r - s,
          expires_at: r
        }, await this._saveSession(n), await this._notifyAllSubscribers("SIGNED_IN", n);
      }
      return { data: { user: n.user, session: n }, error: null };
    } catch (s) {
      if (w(s))
        return { data: { session: null, user: null }, error: s };
      throw s;
    }
  }
  /**
   * Returns a new session, regardless of expiry status.
   * Takes in an optional current session. If not passed in, then refreshSession() will attempt to retrieve it from getSession().
   * If the current session's refresh token is invalid, an error will be thrown.
   * @param currentSession The current session. If passed in, it must contain a refresh token.
   */
  async refreshSession(e) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._refreshSession(e));
  }
  async _refreshSession(e) {
    try {
      return await this._useSession(async (s) => {
        var r;
        if (!e) {
          const { data: a, error: o } = s;
          if (o)
            throw o;
          e = (r = a.session) !== null && r !== void 0 ? r : void 0;
        }
        if (!(e != null && e.refresh_token))
          throw new De();
        const { session: i, error: n } = await this._callRefreshToken(e.refresh_token);
        return n ? { data: { user: null, session: null }, error: n } : i ? { data: { user: i.user, session: i }, error: null } : { data: { user: null, session: null }, error: null };
      });
    } catch (s) {
      if (w(s))
        return { data: { user: null, session: null }, error: s };
      throw s;
    }
  }
  /**
   * Gets the session data from a URL string
   */
  async _getSessionFromURL(e) {
    try {
      if (!K())
        throw new vt("No browser detected.");
      if (this.flowType === "implicit" && !this._isImplicitGrantFlow())
        throw new vt("Not a valid implicit grant flow url.");
      if (this.flowType == "pkce" && !e)
        throw new ar("Not a valid PKCE flow url.");
      const s = es(window.location.href);
      if (e) {
        if (!s.code)
          throw new ar("No code detected.");
        const { data: oe, error: se } = await this._exchangeCodeForSession(s.code);
        if (se)
          throw se;
        const q = new URL(window.location.href);
        return q.searchParams.delete("code"), window.history.replaceState(window.history.state, "", q.toString()), { data: { session: oe.session, redirectType: null }, error: null };
      }
      if (s.error || s.error_description || s.error_code)
        throw new vt(s.error_description || "Error in URL with unspecified error_description", {
          error: s.error || "unspecified_error",
          code: s.error_code || "unspecified_code"
        });
      const { provider_token: r, provider_refresh_token: i, access_token: n, refresh_token: a, expires_in: o, expires_at: l, token_type: h } = s;
      if (!n || !o || !a || !h)
        throw new vt("No session defined in URL");
      const u = Math.round(Date.now() / 1e3), c = parseInt(o);
      let f = u + c;
      l && (f = parseInt(l));
      const y = f - u;
      y * 1e3 <= Xe && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${y}s, should have been closer to ${c}s`);
      const D = f - c;
      u - D >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", D, f, u) : u - D < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew", D, f, u);
      const { data: M, error: P } = await this._getUser(n);
      if (P)
        throw P;
      const U = {
        provider_token: r,
        provider_refresh_token: i,
        access_token: n,
        expires_in: c,
        expires_at: f,
        refresh_token: a,
        token_type: h,
        user: M.user
      };
      return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), { data: { session: U, redirectType: s.type }, error: null };
    } catch (s) {
      if (w(s))
        return { data: { session: null, redirectType: null }, error: s };
      throw s;
    }
  }
  /**
   * Checks if the current URL contains parameters given by an implicit oauth grant flow (https://www.rfc-editor.org/rfc/rfc6749.html#section-4.2)
   */
  _isImplicitGrantFlow() {
    const e = es(window.location.href);
    return !!(K() && (e.access_token || e.error_description));
  }
  /**
   * Checks if the current URL and backing storage contain parameters given by a PKCE flow
   */
  async _isPKCEFlow() {
    const e = es(window.location.href), s = await gt(this.storage, `${this.storageKey}-code-verifier`);
    return !!(e.code && s);
  }
  /**
   * Inside a browser context, `signOut()` will remove the logged in user from the browser session and log them out - removing all items from localstorage and then trigger a `"SIGNED_OUT"` event.
   *
   * For server-side management, you can revoke all refresh tokens for a user by passing a user's JWT through to `auth.api.signOut(JWT: string)`.
   * There is no way to revoke a user's access token jwt until it expires. It is recommended to set a shorter expiry on the jwt for this reason.
   *
   * If using `others` scope, no `SIGNED_OUT` event is fired!
   */
  async signOut(e = { scope: "global" }) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._signOut(e));
  }
  async _signOut({ scope: e } = { scope: "global" }) {
    return await this._useSession(async (s) => {
      var r;
      const { data: i, error: n } = s;
      if (n)
        return { error: n };
      const a = (r = i.session) === null || r === void 0 ? void 0 : r.access_token;
      if (a) {
        const { error: o } = await this.admin.signOut(a, e);
        if (o && !(ph(o) && (o.status === 404 || o.status === 401 || o.status === 403)))
          return { error: o };
      }
      return e !== "others" && (await this._removeSession(), await ts(this.storage, `${this.storageKey}-code-verifier`), await this._notifyAllSubscribers("SIGNED_OUT", null)), { error: null };
    });
  }
  /**
   * Receive a notification every time an auth event happens.
   * @param callback A callback function to be invoked when an auth event happens.
   */
  onAuthStateChange(e) {
    const s = sh(), r = {
      id: s,
      callback: e,
      unsubscribe: () => {
        this._debug("#unsubscribe()", "state change callback with id removed", s), this.stateChangeEmitters.delete(s);
      }
    };
    return this._debug("#onAuthStateChange()", "registered callback with id", s), this.stateChangeEmitters.set(s, r), (async () => (await this.initializePromise, await this._acquireLock(-1, async () => {
      this._emitInitialSession(s);
    })))(), { data: { subscription: r } };
  }
  async _emitInitialSession(e) {
    return await this._useSession(async (s) => {
      var r, i;
      try {
        const { data: { session: n }, error: a } = s;
        if (a)
          throw a;
        await ((r = this.stateChangeEmitters.get(e)) === null || r === void 0 ? void 0 : r.callback("INITIAL_SESSION", n)), this._debug("INITIAL_SESSION", "callback id", e, "session", n);
      } catch (n) {
        await ((i = this.stateChangeEmitters.get(e)) === null || i === void 0 ? void 0 : i.callback("INITIAL_SESSION", null)), this._debug("INITIAL_SESSION", "callback id", e, "error", n), console.error(n);
      }
    });
  }
  /**
   * Sends a password reset request to an email address. This method supports the PKCE flow.
   *
   * @param email The email address of the user.
   * @param options.redirectTo The URL to send the user to after they click the password reset link.
   * @param options.captchaToken Verification token received when the user completes the captcha on the site.
   */
  async resetPasswordForEmail(e, s = {}) {
    let r = null, i = null;
    this.flowType === "pkce" && ([r, i] = await Ie(
      this.storage,
      this.storageKey,
      !0
      // isPasswordRecovery
    ));
    try {
      return await b(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: e,
          code_challenge: r,
          code_challenge_method: i,
          gotrue_meta_security: { captcha_token: s.captchaToken }
        },
        headers: this.headers,
        redirectTo: s.redirectTo
      });
    } catch (n) {
      if (w(n))
        return { data: null, error: n };
      throw n;
    }
  }
  /**
   * Gets all the identities linked to a user.
   */
  async getUserIdentities() {
    var e;
    try {
      const { data: s, error: r } = await this.getUser();
      if (r)
        throw r;
      return { data: { identities: (e = s.user.identities) !== null && e !== void 0 ? e : [] }, error: null };
    } catch (s) {
      if (w(s))
        return { data: null, error: s };
      throw s;
    }
  }
  /**
   * Links an oauth identity to an existing user.
   * This method supports the PKCE flow.
   */
  async linkIdentity(e) {
    var s;
    try {
      const { data: r, error: i } = await this._useSession(async (n) => {
        var a, o, l, h, u;
        const { data: c, error: f } = n;
        if (f)
          throw f;
        const y = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
          redirectTo: (a = e.options) === null || a === void 0 ? void 0 : a.redirectTo,
          scopes: (o = e.options) === null || o === void 0 ? void 0 : o.scopes,
          queryParams: (l = e.options) === null || l === void 0 ? void 0 : l.queryParams,
          skipBrowserRedirect: !0
        });
        return await b(this.fetch, "GET", y, {
          headers: this.headers,
          jwt: (u = (h = c.session) === null || h === void 0 ? void 0 : h.access_token) !== null && u !== void 0 ? u : void 0
        });
      });
      if (i)
        throw i;
      return K() && !(!((s = e.options) === null || s === void 0) && s.skipBrowserRedirect) && window.location.assign(r == null ? void 0 : r.url), { data: { provider: e.provider, url: r == null ? void 0 : r.url }, error: null };
    } catch (r) {
      if (w(r))
        return { data: { provider: e.provider, url: null }, error: r };
      throw r;
    }
  }
  /**
   * Unlinks an identity from a user by deleting it. The user will no longer be able to sign in with that identity once it's unlinked.
   */
  async unlinkIdentity(e) {
    try {
      return await this._useSession(async (s) => {
        var r, i;
        const { data: n, error: a } = s;
        if (a)
          throw a;
        return await b(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
          headers: this.headers,
          jwt: (i = (r = n.session) === null || r === void 0 ? void 0 : r.access_token) !== null && i !== void 0 ? i : void 0
        });
      });
    } catch (s) {
      if (w(s))
        return { data: null, error: s };
      throw s;
    }
  }
  /**
   * Generates a new JWT.
   * @param refreshToken A valid refresh token that was returned on login.
   */
  async _refreshAccessToken(e) {
    const s = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
    this._debug(s, "begin");
    try {
      const r = Date.now();
      return await ah(async (i) => (i > 0 && await nh(200 * Math.pow(2, i - 1)), this._debug(s, "refreshing attempt", i), await b(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
        body: { refresh_token: e },
        headers: this.headers,
        xform: ye
      })), (i, n) => {
        const a = 200 * Math.pow(2, i);
        return n && rs(n) && // retryable only if the request can be sent before the backoff overflows the tick duration
        Date.now() + a - r < Xe;
      });
    } catch (r) {
      if (this._debug(s, "error", r), w(r))
        return { data: { session: null, user: null }, error: r };
      throw r;
    } finally {
      this._debug(s, "end");
    }
  }
  _isValidSession(e) {
    return typeof e == "object" && e !== null && "access_token" in e && "refresh_token" in e && "expires_at" in e;
  }
  async _handleProviderSignIn(e, s) {
    const r = await this._getUrlForProvider(`${this.url}/authorize`, e, {
      redirectTo: s.redirectTo,
      scopes: s.scopes,
      queryParams: s.queryParams
    });
    return this._debug("#_handleProviderSignIn()", "provider", e, "options", s, "url", r), K() && !s.skipBrowserRedirect && window.location.assign(r), { data: { provider: e, url: r }, error: null };
  }
  /**
   * Recovers the session from LocalStorage and refreshes
   * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
   */
  async _recoverAndRefresh() {
    var e;
    const s = "#_recoverAndRefresh()";
    this._debug(s, "begin");
    try {
      const r = await gt(this.storage, this.storageKey);
      if (this._debug(s, "session from storage", r), !this._isValidSession(r)) {
        this._debug(s, "session is not valid"), r !== null && await this._removeSession();
        return;
      }
      const i = Math.round(Date.now() / 1e3), n = ((e = r.expires_at) !== null && e !== void 0 ? e : 1 / 0) < i + ir;
      if (this._debug(s, `session has${n ? "" : " not"} expired with margin of ${ir}s`), n) {
        if (this.autoRefreshToken && r.refresh_token) {
          const { error: a } = await this._callRefreshToken(r.refresh_token);
          a && (console.error(a), rs(a) || (this._debug(s, "refresh failed with a non-retryable error, removing the session", a), await this._removeSession()));
        }
      } else
        await this._notifyAllSubscribers("SIGNED_IN", r);
    } catch (r) {
      this._debug(s, "error", r), console.error(r);
      return;
    } finally {
      this._debug(s, "end");
    }
  }
  async _callRefreshToken(e) {
    var s, r;
    if (!e)
      throw new De();
    if (this.refreshingDeferred)
      return this.refreshingDeferred.promise;
    const i = `#_callRefreshToken(${e.substring(0, 5)}...)`;
    this._debug(i, "begin");
    try {
      this.refreshingDeferred = new Vt();
      const { data: n, error: a } = await this._refreshAccessToken(e);
      if (a)
        throw a;
      if (!n.session)
        throw new De();
      await this._saveSession(n.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", n.session);
      const o = { session: n.session, error: null };
      return this.refreshingDeferred.resolve(o), o;
    } catch (n) {
      if (this._debug(i, "error", n), w(n)) {
        const a = { session: null, error: n };
        return rs(n) || (await this._removeSession(), await this._notifyAllSubscribers("SIGNED_OUT", null)), (s = this.refreshingDeferred) === null || s === void 0 || s.resolve(a), a;
      }
      throw (r = this.refreshingDeferred) === null || r === void 0 || r.reject(n), n;
    } finally {
      this.refreshingDeferred = null, this._debug(i, "end");
    }
  }
  async _notifyAllSubscribers(e, s, r = !0) {
    const i = `#_notifyAllSubscribers(${e})`;
    this._debug(i, "begin", s, `broadcast = ${r}`);
    try {
      this.broadcastChannel && r && this.broadcastChannel.postMessage({ event: e, session: s });
      const n = [], a = Array.from(this.stateChangeEmitters.values()).map(async (o) => {
        try {
          await o.callback(e, s);
        } catch (l) {
          n.push(l);
        }
      });
      if (await Promise.all(a), n.length > 0) {
        for (let o = 0; o < n.length; o += 1)
          console.error(n[o]);
        throw n[0];
      }
    } finally {
      this._debug(i, "end");
    }
  }
  /**
   * set currentSession and currentUser
   * process to _startAutoRefreshToken if possible
   */
  async _saveSession(e) {
    this._debug("#_saveSession()", e), this.suppressGetSessionWarning = !0, await Pi(this.storage, this.storageKey, e);
  }
  async _removeSession() {
    this._debug("#_removeSession()"), await ts(this.storage, this.storageKey);
  }
  /**
   * Removes any registered visibilitychange callback.
   *
   * {@see #startAutoRefresh}
   * {@see #stopAutoRefresh}
   */
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const e = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      e && K() && (window != null && window.removeEventListener) && window.removeEventListener("visibilitychange", e);
    } catch (s) {
      console.error("removing visibilitychange callback failed", s);
    }
  }
  /**
   * This is the private implementation of {@link #startAutoRefresh}. Use this
   * within the library.
   */
  async _startAutoRefresh() {
    await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
    const e = setInterval(() => this._autoRefreshTokenTick(), Xe);
    this.autoRefreshTicker = e, e && typeof e == "object" && typeof e.unref == "function" ? e.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(e), setTimeout(async () => {
      await this.initializePromise, await this._autoRefreshTokenTick();
    }, 0);
  }
  /**
   * This is the private implementation of {@link #stopAutoRefresh}. Use this
   * within the library.
   */
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const e = this.autoRefreshTicker;
    this.autoRefreshTicker = null, e && clearInterval(e);
  }
  /**
   * Starts an auto-refresh process in the background. The session is checked
   * every few seconds. Close to the time of expiration a process is started to
   * refresh the session. If refreshing fails it will be retried for as long as
   * necessary.
   *
   * If you set the {@link GoTrueClientOptions#autoRefreshToken} you don't need
   * to call this function, it will be called for you.
   *
   * On browsers the refresh process works only when the tab/window is in the
   * foreground to conserve resources as well as prevent race conditions and
   * flooding auth with requests. If you call this method any managed
   * visibility change callback will be removed and you must manage visibility
   * changes on your own.
   *
   * On non-browser platforms the refresh process works *continuously* in the
   * background, which may not be desirable. You should hook into your
   * platform's foreground indication mechanism and call these methods
   * appropriately to conserve resources.
   *
   * {@see #stopAutoRefresh}
   */
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
  }
  /**
   * Stops an active auto refresh process running in the background (if any).
   *
   * If you call this method any managed visibility change callback will be
   * removed and you must manage visibility changes on your own.
   *
   * See {@link #startAutoRefresh} for more details.
   */
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
  }
  /**
   * Runs the auto refresh token tick.
   */
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const e = Date.now();
          try {
            return await this._useSession(async (s) => {
              const { data: { session: r } } = s;
              if (!r || !r.refresh_token || !r.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const i = Math.floor((r.expires_at * 1e3 - e) / Xe);
              this._debug("#_autoRefreshTokenTick()", `access token expires in ${i} ticks, a tick lasts ${Xe}ms, refresh threshold is ${cr} ticks`), i <= cr && await this._callRefreshToken(r.refresh_token);
            });
          } catch (s) {
            console.error("Auto refresh tick failed with error. This is likely a transient error.", s);
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (e) {
      if (e.isAcquireTimeout || e instanceof Mi)
        this._debug("auto refresh token tick lock not available");
      else
        throw e;
    }
  }
  /**
   * Registers callbacks on the browser / platform, which in-turn run
   * algorithms when the browser window/tab are in foreground. On non-browser
   * platforms it assumes always foreground.
   */
  async _handleVisibilityChange() {
    if (this._debug("#_handleVisibilityChange()"), !K() || !(window != null && window.addEventListener))
      return this.autoRefreshToken && this.startAutoRefresh(), !1;
    try {
      this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1), window == null || window.addEventListener("visibilitychange", this.visibilityChangedCallback), await this._onVisibilityChanged(!0);
    } catch (e) {
      console.error("_handleVisibilityChange", e);
    }
  }
  /**
   * Callback registered with `window.addEventListener('visibilitychange')`.
   */
  async _onVisibilityChanged(e) {
    const s = `#_onVisibilityChanged(${e})`;
    this._debug(s, "visibilityState", document.visibilityState), document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(), e || (await this.initializePromise, await this._acquireLock(-1, async () => {
      if (document.visibilityState !== "visible") {
        this._debug(s, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
        return;
      }
      await this._recoverAndRefresh();
    }))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh();
  }
  /**
   * Generates the relevant login URL for a third-party provider.
   * @param options.redirectTo A URL or mobile address to send the user to after they are confirmed.
   * @param options.scopes A space-separated list of scopes granted to the OAuth application.
   * @param options.queryParams An object of key-value pairs containing query parameters granted to the OAuth application.
   */
  async _getUrlForProvider(e, s, r) {
    const i = [`provider=${encodeURIComponent(s)}`];
    if (r != null && r.redirectTo && i.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`), r != null && r.scopes && i.push(`scopes=${encodeURIComponent(r.scopes)}`), this.flowType === "pkce") {
      const [n, a] = await Ie(this.storage, this.storageKey), o = new URLSearchParams({
        code_challenge: `${encodeURIComponent(n)}`,
        code_challenge_method: `${encodeURIComponent(a)}`
      });
      i.push(o.toString());
    }
    if (r != null && r.queryParams) {
      const n = new URLSearchParams(r.queryParams);
      i.push(n.toString());
    }
    return r != null && r.skipBrowserRedirect && i.push(`skip_http_redirect=${r.skipBrowserRedirect}`), `${e}?${i.join("&")}`;
  }
  async _unenroll(e) {
    try {
      return await this._useSession(async (s) => {
        var r;
        const { data: i, error: n } = s;
        return n ? { data: null, error: n } : await b(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
          headers: this.headers,
          jwt: (r = i == null ? void 0 : i.session) === null || r === void 0 ? void 0 : r.access_token
        });
      });
    } catch (s) {
      if (w(s))
        return { data: null, error: s };
      throw s;
    }
  }
  /**
   * {@see GoTrueMFAApi#enroll}
   */
  async _enroll(e) {
    try {
      return await this._useSession(async (s) => {
        var r, i;
        const { data: n, error: a } = s;
        if (a)
          return { data: null, error: a };
        const { data: o, error: l } = await b(this.fetch, "POST", `${this.url}/factors`, {
          body: {
            friendly_name: e.friendlyName,
            factor_type: e.factorType,
            issuer: e.issuer
          },
          headers: this.headers,
          jwt: (r = n == null ? void 0 : n.session) === null || r === void 0 ? void 0 : r.access_token
        });
        return l ? { data: null, error: l } : (!((i = o == null ? void 0 : o.totp) === null || i === void 0) && i.qr_code && (o.totp.qr_code = `data:image/svg+xml;utf-8,${o.totp.qr_code}`), { data: o, error: null });
      });
    } catch (s) {
      if (w(s))
        return { data: null, error: s };
      throw s;
    }
  }
  /**
   * {@see GoTrueMFAApi#verify}
   */
  async _verify(e) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (s) => {
          var r;
          const { data: i, error: n } = s;
          if (n)
            return { data: null, error: n };
          const { data: a, error: o } = await b(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
            body: { code: e.code, challenge_id: e.challengeId },
            headers: this.headers,
            jwt: (r = i == null ? void 0 : i.session) === null || r === void 0 ? void 0 : r.access_token
          });
          return o ? { data: null, error: o } : (await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + a.expires_in }, a)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", a), { data: a, error: o });
        });
      } catch (s) {
        if (w(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challenge}
   */
  async _challenge(e) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (s) => {
          var r;
          const { data: i, error: n } = s;
          return n ? { data: null, error: n } : await b(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
            headers: this.headers,
            jwt: (r = i == null ? void 0 : i.session) === null || r === void 0 ? void 0 : r.access_token
          });
        });
      } catch (s) {
        if (w(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challengeAndVerify}
   */
  async _challengeAndVerify(e) {
    const { data: s, error: r } = await this._challenge({
      factorId: e.factorId
    });
    return r ? { data: null, error: r } : await this._verify({
      factorId: e.factorId,
      challengeId: s.id,
      code: e.code
    });
  }
  /**
   * {@see GoTrueMFAApi#listFactors}
   */
  async _listFactors() {
    const { data: { user: e }, error: s } = await this.getUser();
    if (s)
      return { data: null, error: s };
    const r = (e == null ? void 0 : e.factors) || [], i = r.filter((n) => n.factor_type === "totp" && n.status === "verified");
    return {
      data: {
        all: r,
        totp: i
      },
      error: null
    };
  }
  /**
   * {@see GoTrueMFAApi#getAuthenticatorAssuranceLevel}
   */
  async _getAuthenticatorAssuranceLevel() {
    return this._acquireLock(-1, async () => await this._useSession(async (e) => {
      var s, r;
      const { data: { session: i }, error: n } = e;
      if (n)
        return { data: null, error: n };
      if (!i)
        return {
          data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
          error: null
        };
      const a = this._decodeJWT(i.access_token);
      let o = null;
      a.aal && (o = a.aal);
      let l = o;
      ((r = (s = i.user.factors) === null || s === void 0 ? void 0 : s.filter((c) => c.status === "verified")) !== null && r !== void 0 ? r : []).length > 0 && (l = "aal2");
      const u = a.amr || [];
      return { data: { currentLevel: o, nextLevel: l, currentAuthenticationMethods: u }, error: null };
    }));
  }
}
ut.nextInstanceID = 0;
const xh = ut;
class Rh extends xh {
  constructor(e) {
    super(e);
  }
}
var Ch = function(t, e, s, r) {
  function i(n) {
    return n instanceof s ? n : new s(function(a) {
      a(n);
    });
  }
  return new (s || (s = Promise))(function(n, a) {
    function o(u) {
      try {
        h(r.next(u));
      } catch (c) {
        a(c);
      }
    }
    function l(u) {
      try {
        h(r.throw(u));
      } catch (c) {
        a(c);
      }
    }
    function h(u) {
      u.done ? n(u.value) : i(u.value).then(o, l);
    }
    h((r = r.apply(t, e || [])).next());
  });
};
class $h {
  /**
   * Create a new client for use in the browser.
   * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
   * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
   * @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
   * @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
   * @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
   * @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
   * @param options.realtime Options passed along to realtime-js constructor.
   * @param options.global.fetch A custom fetch implementation.
   * @param options.global.headers Any additional headers to send with each network request.
   */
  constructor(e, s, r) {
    var i, n, a;
    if (this.supabaseUrl = e, this.supabaseKey = s, !e)
      throw new Error("supabaseUrl is required.");
    if (!s)
      throw new Error("supabaseKey is required.");
    const o = Ku(e);
    this.realtimeUrl = `${o}/realtime/v1`.replace(/^http/i, "ws"), this.authUrl = `${o}/auth/v1`, this.storageUrl = `${o}/storage/v1`, this.functionsUrl = `${o}/functions/v1`;
    const l = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`, h = {
      db: Wu,
      realtime: Bu,
      auth: Object.assign(Object.assign({}, Hu), { storageKey: l }),
      global: Fu
    }, u = Zu(r ?? {}, h);
    this.storageKey = (i = u.auth.storageKey) !== null && i !== void 0 ? i : "", this.headers = (n = u.global.headers) !== null && n !== void 0 ? n : {}, u.accessToken ? (this.accessToken = u.accessToken, this.auth = new Proxy({}, {
      get: (c, f) => {
        throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(f)} is not possible`);
      }
    })) : this.auth = this._initSupabaseAuthClient((a = u.auth) !== null && a !== void 0 ? a : {}, this.headers, u.global.fetch), this.fetch = qu(s, this._getAccessToken.bind(this), u.global.fetch), this.realtime = this._initRealtimeClient(Object.assign({ headers: this.headers }, u.realtime)), this.rest = new cu(`${o}/rest/v1`, {
      headers: this.headers,
      schema: u.db.schema,
      fetch: this.fetch
    }), u.accessToken || this._listenForAuthEvents();
  }
  /**
   * Supabase Functions allows you to deploy and invoke edge functions.
   */
  get functions() {
    return new Nl(this.functionsUrl, {
      headers: this.headers,
      customFetch: this.fetch
    });
  }
  /**
   * Supabase Storage allows you to manage user-generated content, such as photos or videos.
   */
  get storage() {
    return new Uu(this.storageUrl, this.headers, this.fetch);
  }
  /**
   * Perform a query on a table or a view.
   *
   * @param relation - The table or view name to query
   */
  from(e) {
    return this.rest.from(e);
  }
  // NOTE: signatures must be kept in sync with PostgrestClient.schema
  /**
   * Select a schema to query or perform an function (rpc) call.
   *
   * The schema needs to be on the list of exposed schemas inside Supabase.
   *
   * @param schema - The schema to query
   */
  schema(e) {
    return this.rest.schema(e);
  }
  // NOTE: signatures must be kept in sync with PostgrestClient.rpc
  /**
   * Perform a function call.
   *
   * @param fn - The function name to call
   * @param args - The arguments to pass to the function call
   * @param options - Named parameters
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   * @param options.get - When set to `true`, the function will be called with
   * read-only access mode.
   * @param options.count - Count algorithm to use to count rows returned by the
   * function. Only applicable for [set-returning
   * functions](https://www.postgresql.org/docs/current/functions-srf.html).
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  rpc(e, s = {}, r = {}) {
    return this.rest.rpc(e, s, r);
  }
  /**
   * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
   *
   * @param {string} name - The name of the Realtime channel.
   * @param {Object} opts - The options to pass to the Realtime channel.
   *
   */
  channel(e, s = { config: {} }) {
    return this.realtime.channel(e, s);
  }
  /**
   * Returns all Realtime channels.
   */
  getChannels() {
    return this.realtime.getChannels();
  }
  /**
   * Unsubscribes and removes Realtime channel from Realtime client.
   *
   * @param {RealtimeChannel} channel - The name of the Realtime channel.
   *
   */
  removeChannel(e) {
    return this.realtime.removeChannel(e);
  }
  /**
   * Unsubscribes and removes all Realtime channels from Realtime client.
   */
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  _getAccessToken() {
    var e, s;
    return Ch(this, void 0, void 0, function* () {
      if (this.accessToken)
        return yield this.accessToken();
      const { data: r } = yield this.auth.getSession();
      return (s = (e = r.session) === null || e === void 0 ? void 0 : e.access_token) !== null && s !== void 0 ? s : null;
    });
  }
  _initSupabaseAuthClient({ autoRefreshToken: e, persistSession: s, detectSessionInUrl: r, storage: i, storageKey: n, flowType: a, lock: o, debug: l }, h, u) {
    var c;
    const f = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new Rh({
      url: this.authUrl,
      headers: Object.assign(Object.assign({}, f), h),
      storageKey: n,
      autoRefreshToken: e,
      persistSession: s,
      detectSessionInUrl: r,
      storage: i,
      flowType: a,
      lock: o,
      debug: l,
      fetch: u,
      // auth checks if there is a custom authorizaiton header using this flag
      // so it knows whether to return an error when getUser is called with no session
      hasCustomAuthorizationHeader: (c = "Authorization" in this.headers) !== null && c !== void 0 ? c : !1
    });
  }
  _initRealtimeClient(e) {
    return new Ou(this.realtimeUrl, Object.assign(Object.assign({}, e), { params: Object.assign({ apikey: this.supabaseKey }, e == null ? void 0 : e.params) }));
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((s, r) => {
      this._handleTokenChanged(s, "CLIENT", r == null ? void 0 : r.access_token);
    });
  }
  _handleTokenChanged(e, s, r) {
    (e === "TOKEN_REFRESHED" || e === "SIGNED_IN") && this.changedAccessToken !== r ? (this.realtime.setAuth(r ?? null), this.changedAccessToken = r) : e === "SIGNED_OUT" && (this.realtime.setAuth(this.supabaseKey), s == "STORAGE" && this.auth.signOut(), this.changedAccessToken = void 0);
  }
}
const Ai = (t, e, s) => new $h(t, e, s);
var jh = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZieHR2amZmaHNpcm55eGpjdWt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1MTY1NjQsImV4cCI6MjAzODA5MjU2NH0.E6SFFojKzIZCRIQAhoJ49aO4yY-m1Mb2sZtSkVh-tBg";
const xi = "https://api.iaon.ai", Ri = jh, S = Ai(xi, Ri);
async function Me(t, e, s, r = "POST") {
  console.log("call_eage_function headers = ", s);
  const { data: i, error: n } = await S.functions.invoke(t, {
    method: r,
    body: e,
    headers: s
  });
  if (n instanceof oi) {
    const a = await n.context.json();
    console.log("Function returned an error", a);
  } else n instanceof ai ? console.log("Relay error:", n.message) : n instanceof ni && console.log("Fetch error:", n.message);
  if (n) throw n;
  return i;
}
Ai(xi, Ri);
let Ih = ii();
console.log("aonweb version = ", Ih);
class zh {
  constructor() {
  }
  /**
   * 获取用户access_token。
   *
   * @returns {string} 返回值 为 当前登录用户的access_token。
   */
  async access_token() {
    const { data: e, error: s } = await S.auth.getSession();
    if (s)
      throw s;
    let r = e && e.session && e.session.access_token;
    if (!r)
      throw new Error("user is not login");
    return r;
  }
  /**
   * 用户是否登录。
   *
   * @returns {string} 返回值 为 当前登录用户的session。
   */
  async islogin() {
    const { data: e, error: s } = await S.auth.getSession();
    if (s)
      throw s;
    let r = e && e.session && e.session.user;
    if (r) {
      let { data: i } = await S.from("profiles").select("*").eq("id", r.id);
      i = i && i.length && i[0], r.profiles = i;
    }
    return r;
  }
  /**
   * 用户登录。
   *
   * @param {string} inviter - 邀请者id，可以为空。
   * @returns {string} 返回值 为 当前登录用户的session。
   */
  async login(e) {
    const { data: s, error: r } = await S.auth.signInAnonymously({
      data: {
        inviter: e
      }
    });
    if (r)
      throw r;
    if (!s.session)
      throw new Error("login error,no session found");
    let i = s && s.session && s.session.user;
    if (i) {
      let { data: n } = await S.from("profiles").select("*").eq("id", i.id);
      n = n && n.length && n[0], i.profiles = n;
    }
    return this.isTelegramMiniAPP() && await this.linkTelegramMiniAPP(), i;
  }
  /**
   * 当前登录用户的信息。
   *
   * @returns {string} 返回值 为 当前登录用户的信息。
   */
  async userinfo() {
    const { data: e, error: s } = await S.auth.getUser();
    if (s) throw s;
    let r = e.user;
    if (r) {
      let { data: i } = await S.from("profiles").select("*").eq("id", r.id);
      i = i && i.length && i[0], r.profiles = i;
    }
    return r;
  }
  /**
   * 三方登录。
   *
   * @param {string} email - 邮箱
   * @returns {string} 返回值。
   */
  async third_party_login(e, s) {
    if (!(e && e.length))
      throw new Error("provider can not be null");
    let { data: r, error: i } = await S.auth.signInWithOAuth({
      provider: e,
      options: {
        redirectTo: s
      }
    });
    if (i) throw i;
    return r;
  }
  /**
   * 邮箱注册。
   *
   * @param {string} email - 邮箱
   * @returns {string} 返回值。
   */
  async email_signUp(e, s) {
    if (!(e && e.length))
      throw new Error("email can not be null");
    if (!(s && s.length))
      throw new Error("password can not be null");
    let { data: r, error: i } = await S.auth.signUp({
      email: e,
      password: s
    });
    if (i) throw i;
    if (r && r.user && !(r.user.identities && r.user.identities.length) && r.user.user_metadata && !r.user.user_metadata.email)
      throw new Error("The email is already in use");
    return r;
  }
  /**
   * 邮箱登录。
   *
   * @param {string} email - 邮箱
   * @returns {string} 返回值。
   */
  async email_login(e, s) {
    if (!(e && e.length))
      throw new Error("email can not be null");
    if (!(s && s.length))
      throw new Error("password can not be null");
    let { data: r, error: i } = await S.auth.signInWithPassword({
      email: e,
      password: s
    });
    if (i) throw i;
    let n = r && r.session && r.session.user;
    if (n) {
      let { data: a } = await S.from("profiles").select("*").eq("id", n.id);
      a = a && a.length && a[0], n.profiles = a;
    }
    return n;
  }
  /**
   * 邮箱绑定。
   *
   * @param {string} email - 邮箱
   * @param {string} password - 密码 可为空
   * @returns {string} 返回值。
   */
  async bindEmail(e, s) {
    if (!(e && e.length))
      throw new Error("email can not be null");
    let r = { email: e };
    s && s.length && (r.password = s);
    const { data: i, error: n } = await S.auth.updateUser(r);
    if (n) throw n;
    return i;
  }
  /**
   * 邮箱验证。
   *
   * @param {string} email - 邮箱
   * @param {string} otp_code - 验证码
   * @param {string} type - "email_change || signup"
   * @returns {string} 返回值。
   */
  async verifyOtp(e, s, r) {
    if (!(e && e.length))
      throw new Error("email can not be null");
    if (!(s && s.length))
      throw new Error("otp_code can not be null");
    const { data: i, error: n } = await S.auth.verifyOtp({
      email: e,
      token: s,
      type: r
    });
    if (n) throw n;
    return i;
  }
  /**
   * 重置密码。
   *
   * @param {string} email - 邮箱
   * @returns {string} 返回值。
   */
  async resetPasswordForEmail(e, s) {
    if (!(e && e.length))
      throw new Error("email can not be null");
    const { data: r, error: i } = await S.auth.resetPasswordForEmail(e, {
      redirectTo: s
    });
    if (i) throw i;
    return r;
  }
  /**
   * 设置密码。
   *
   * @param {string} password - 密码
   * @returns {string} 返回值。
   */
  async setPassword(e) {
    if (!(e && e.length))
      throw new Error("password can not be null");
    const { data: s, error: r } = await S.auth.updateUser({ password: e });
    if (r) throw r;
    return s;
  }
  /**
   * 绑定twitter。
   *
   * @returns {string} 返回值。
   */
  async linkTwitter(e) {
    const { data: s, error: r } = await S.auth.linkIdentity({
      provider: "twitter",
      options: {
        redirectTo: e
      }
    });
    if (r) throw r;
    return s;
  }
  /**
   * 是否绑定twitter。
   *
   * @returns {string} 返回值。
   */
  async islinkTwitter() {
    const { data: e, error: s } = await S.auth.getUser();
    if (s) throw s;
    let r = e.user;
    if (!r)
      throw new Error("user is not exist");
    return r.identities.find((n) => n.provider == "twitter");
  }
  async unlinkTwitter(e) {
    e || (e = await this.islinkTwitter());
    const { data: s, error: r } = await S.auth.unlinkIdentity(e);
    if (r) throw r;
    return s;
  }
  /**
   * 绑定github。
   *
   * @returns {string} 返回值。
   */
  async linkGithub(e) {
    const { data: s, error: r } = await S.auth.linkIdentity({
      provider: "github",
      options: {
        redirectTo: e
      }
    });
    if (r) throw r;
    return s;
  }
  /**
   * 是否绑定github。
   *
   * @returns {string} 返回值。
   */
  async islinkGithub() {
    const { data: e, error: s } = await S.auth.getUser();
    if (s) throw s;
    let r = e.user;
    if (!r)
      throw new Error("user is not exist");
    return r.identities.find((n) => n.provider == "github");
  }
  async unlinkGithub(e) {
    e || (e = await this.islinkGithub());
    const { data: s, error: r } = await S.auth.unlinkIdentity(e);
    if (r) throw r;
    return s;
  }
  /**
   * 绑定telegram。
   *
   * @returns {string} 返回值。
   */
  async linkTelegram(e) {
    const { data: s, error: r } = await S.auth.getSession();
    if (r)
      throw r;
    if (!s.session)
      throw new Error("user is not login");
    let n = "https://ai.ubeibi.com/telegram.html?data=" + s.session.access_token + "&redirectTo=" + e;
    const a = encodeURI(n);
    window.location.href = a;
  }
  /**
   * 绑定telegram 小程序。
   *
   * @returns {string} 返回值。
   */
  async linkTelegramMiniAPP() {
    try {
      if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initData) {
        let e = await Me("telegram_miniapp_provider", {
          initData: window.Telegram.WebApp.initData
        });
        return !!(e && e.valid);
      }
    } catch (e) {
      throw console.log("linkTelegramMiniAPP = ", e), e;
    }
  }
  isTelegramMiniAPP() {
    return !!(window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initData);
  }
  /**
   * 是否绑定telegram。
   *
   * @returns {string} 返回值。
   */
  async islinkTelegram() {
    const { data: e, error: s } = await S.functions.invoke("check_telegram_provider", {
      method: "GET"
    });
    if (console.log("check_telegram_provider:", e, s), s) throw s;
    return e && e.exist ? e : null;
  }
  /**
   * logout
   *
   * @returns {string} 返回值,成功返回null。
   */
  async logout() {
    const { error: e } = await S.auth.signOut();
    if (e) throw e;
    return null;
  }
  /**
   * 指定用户的balance。
   *
   * @param {string} userId - 用户id，可以为空，为空时为当前登录用🐯。
   * @param {string} asset_id - 资产id。
   * @returns {string} 返回值 token的符号，名称，剩余额度。
   */
  async balance(e, s) {
    if (!e) {
      const { data: i, error: n } = await S.auth.getSession();
      if (n)
        throw n;
      e = i.session.user.id;
    }
    if (s && !Array.isArray(s))
      throw new Error("asset_ids must be a Array");
    return await Me("balance", {
      user_id: e,
      asset_ids: s
    });
  }
}
let ge = ii();
console.log("aonweb version = ", ge);
class qh {
  constructor(e) {
    if (this.options = e, !(this.options && this.options.app_key && this.options.app_key.length))
      throw new Error("options.app_key is not found");
  }
  async check_app_key() {
    let e = this.options && this.options.app_key && this.options.app_key.length ? this.options.app_key : null;
    if (!e)
      return new Error("options.app_key is not found");
    const { data: s, error: r } = await S.from("app").select("*").is("deleted_at", null).eq("id", e);
    if (r) throw r;
    let i = s && s.length && s[0];
    return i ? i && i.status == -1 ? null : i && i.status == 6 ? new Error("App does not publish.") : null : new Error("App does not exist.");
  }
  /**
   * 开始任务。
   *
   * @param {string} models - task需要执行的模型 。
   * @param {object} result_model - task以哪个模型为结果模型。
   * @param {string} first_model - 第一个执行的模型 。
   * @param {object} first_input - 第一个模型推理所需参数。
   * @param {string} price - 调用模型 所出花费
   * @param {string} userId - 用户id，可以为空，为空时为当前登录用户。
   * @returns {object} 返回值 推理结果/错误结果。
   */
  async start_task(e, s, r, i, n, a) {
    let o = (/* @__PURE__ */ new Date()).getTime();
    _().format("YYYY-MM-DD HH:mm:ss.SSS"), console.log(`${_().format("YYYY-MM-DD HH:mm:ss.SSS")} info : version = ${ge}, class = AI, method = start_task, message : start time = ${o}`);
    let l = await this.check_app_key();
    if (console.log(`${_().format("YYYY-MM-DD HH:mm:ss.SSS")} info : version = ${ge}, class = AI, method = check_app_key, message : end time = ${(/* @__PURE__ */ new Date()).getTime() - o}`, l), l)
      throw l;
    let h = this.options.app_key;
    if (!a) {
      const { data: c, error: f } = await S.auth.getSession();
      if (console.log(`${_().format("YYYY-MM-DD HH:mm:ss.SSS")} info : version = ${ge}, class = AI, method = getSession, message : end time = ${(/* @__PURE__ */ new Date()).getTime() - o}`, c, f), f)
        throw f;
      a = c && c.session && c.session.user && c.session.user.id;
    }
    if (console.log(`${_().format("YYYY-MM-DD HH:mm:ss.SSS")} info : version = ${ge}, class = AI, method = getSession, message : end time = ${(/* @__PURE__ */ new Date()).getTime() - o}`, a), !a)
      throw new Error("User not login");
    if (!this.task_id) {
      let c = await Me("start_task", {
        models: e,
        user_id: a,
        app_key: h,
        result_model: s
      });
      console.log(`${_().format("YYYY-MM-DD HH:mm:ss.SSS")} info : version = ${ge}, class = AI, method = call_eage_function task, message : end time = ${(/* @__PURE__ */ new Date()).getTime() - o}`, c), c && c.code == 200 && c.data && (this.task_id = c.data.task_id);
    }
    if (!this.task_id)
      throw new Error("Task create failed");
    console.log(`${_().format("YYYY-MM-DD HH:mm:ss.SSS")} info : version = ${ge}, class = AI, method = prediction, message : start time = ${(/* @__PURE__ */ new Date()).getTime() - o}`);
    let u = await this.prediction(r, i, this.task_id, n, a);
    return console.log(`${_().format("YYYY-MM-DD HH:mm:ss.SSS")} info : version = ${ge}, class = AI, method = prediction, message : end time = ${(/* @__PURE__ */ new Date()).getTime() - o}`, u), u;
  }
  /**
   * 模型推理。
   *
   * @param {string} model - 当前执行的模型 。
   * @param {object} input - 模型推理所需参数。
   * @param {string} userId - 用户id，可以为空，为空时为当前登录用户。
   * @param {string} price - 调用模型 所出花费。
   * @returns {object} 返回值 推理结果/错误结果。
   */
  async prediction(e, s, r, i) {
    let n = await this.check_app_key();
    if (n)
      throw n;
    let a = this.options.app_key;
    if (!i) {
      const { data: h, error: u } = await S.auth.getSession();
      if (u)
        throw u;
      i = h && h.session && h.session.user && h.session.user.id;
    }
    if (!i)
      throw new Error("User not login");
    let o = null;
    return this.options && this.options.is_async && (o = {
      is_async: !0
    }), await Me("prediction", {
      models: e,
      inputs: s,
      user_id: i,
      workflow: r,
      app_key: a
    }, o);
  }
  /**
   * 模型推理结果查询。
   *
   * @param {string} exec_model_id - prediction返回的id 。
   * @returns {object} 返回值 推理结果/错误结果。
   */
  async prediction_result(e) {
    console.log("prediction_result = ", e);
    let s = await this.check_app_key();
    if (s)
      throw s;
    if (this.options.app_key, !userId) {
      const { data: i, error: n } = await S.auth.getSession();
      if (n)
        throw n;
      userId = i && i.session && i.session.user && i.session.user.id;
    }
    if (!userId)
      throw new Error("User not login");
    return await Me("prediction_result", {
      exec_model_id: e
    });
  }
  /**
   * 结束任务。
   *
   * @param {string} task_id - 任务id 。
   * @param {string} final_matters_function_name - 最后执行事项  可以为空。
   * @param {string} final_matters_data - 最后事项所需数据 可以为空。
   * @returns {object} 返回值 任务。
   */
  async end_task(e, s, r, i) {
    let n = await this.check_app_key();
    if (n)
      throw n;
    if (this.options.app_key, !i) {
      const { data: o, error: l } = await S.auth.getSession();
      if (l)
        throw l;
      i = o && o.session && o.session.user && o.session.user.id;
    }
    if (!i)
      throw new Error("User not login");
    if (s && r)
      return await Me(s, {
        task_id: e,
        data: r
      });
    let a = await this.task(e);
    return this.task_id = null, a;
  }
  /**
   * 查询任务。
   *
   * @param {string} task_id - 任务id 。
   * @returns {object} 返回值 任务。
   */
  async task(e) {
    console.log("task = ", e);
    let s = await this.check_app_key();
    if (s)
      throw s;
    return await Me("result", {
      task_id: e
    });
  }
  /**
   * 查询任务列表。
   *
   * @param {string} userId - 用户id 。
   * @returns {object} 返回值 任务。
   */
  async list(e) {
    let s = await this.check_app_key();
    if (s)
      throw s;
    let r = this.options.app_key;
    if (!e) {
      const { data: a, error: o } = await S.auth.getSession();
      if (o)
        throw o;
      e = a && a.session && a.session.user && a.session.user.id;
    }
    if (!e)
      throw new Error("User not login");
    const { data: i, error: n } = await S.from("exec_task").select("*").is("deleted_at", null).eq("user_id", e).eq("app_key", r).eq("status", 2).order("created_at", { ascending: !1 });
    if (n) throw n;
    return i;
  }
}
const Yh = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_excuteId",
        type: "string"
      },
      {
        internalType: "string",
        name: "_userId",
        type: "string"
      },
      {
        internalType: "string",
        name: "_appId",
        type: "string"
      },
      {
        internalType: "string[]",
        name: "_modelIds",
        type: "string[]"
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256"
      }
    ],
    name: "excuteByUserId",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_excuteId",
        type: "string"
      },
      {
        internalType: "string",
        name: "_clusterId",
        type: "string"
      }
    ],
    name: "failExcuteByClusterId",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_excuteId",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256"
      }
    ],
    name: "failExcuteByTokenId",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_excuteId",
        type: "string"
      },
      {
        internalType: "string",
        name: "_userId",
        type: "string"
      },
      {
        internalType: "string",
        name: "_appId",
        type: "string"
      },
      {
        internalType: "string[]",
        name: "_modelIds",
        type: "string[]"
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256"
      }
    ],
    name: "startExcuteByUserId",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_excuteId",
        type: "string"
      },
      {
        internalType: "string",
        name: "_clusterId",
        type: "string"
      }
    ],
    name: "successExcuteByComputId",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_excuteId",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256"
      }
    ],
    name: "successExcuteByTokenId",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class Jh extends ji {
  constructor({
    rpc_url: e = tt.rpc,
    force_aon: s = !0,
    abi: r = Yh,
    contract_address: i = tt.address.AonAiExcutor,
    api_type: n = "contract",
    ai_server: a = null,
    app_key: o = null,
    auth: l = null,
    is_async: h = !1,
    dev_mode: u = !1
  } = {}) {
    super({ rpc_url: e, force_aon: s, abi: r, contract_address: i }), this.api_type = n, this.ai_server = a, this.app_key = o, this.auth = l, this.is_async = h, this.dev_mode = u;
  }
}
class Kh {
  constructor({
    page: e = 1,
    size: s = 10,
    user_id: r = null,
    excute_id: i = null,
    status: n = null,
    api_path: a = null,
    created_time: o = []
  } = {}) {
    this.page = e, this.size = s, this.filter = {}, r && r.length && (this.filter.user_id = r), i && i.length && (this.filter.excute_id = i), n != null && n != null && (this.filter.status = n), a && a.length && (this.filter.api_path = a), o && o.length && (this.filter.created_time = o), console.log("ListOptions this.filter", this.filter);
  }
}
export {
  qh as A,
  Kh as L,
  ji as O,
  zh as U,
  Jh as a,
  ii as b,
  Me as c,
  Uh as g,
  S as s
};
