!(function () {
  "use strict";
  (window.__st_moment = window.moment), (window.__st_rome = window.rome);
})()
/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */,
  (function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = t.document
          ? e(t, !0)
          : function (t) {
              if (!t.document)
                throw new Error("jQuery requires a window with a document");
              return e(t);
            })
      : e(t);
  })("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";
    function n(t, e, n) {
      n = n || St;
      var i,
        r,
        o = n.createElement("script");
      if (((o.text = t), e))
        for (i in bt)
          (r = e[i] || (e.getAttribute && e.getAttribute(i))) &&
            o.setAttribute(i, r);
      n.head.appendChild(o).parentNode.removeChild(o);
    }
    function i(t) {
      return null == t
        ? t + ""
        : "object" == typeof t || "function" == typeof t
        ? ft[dt.call(t)] || "object"
        : typeof t;
    }
    function r(t) {
      var e = !!t && "length" in t && t.length,
        n = i(t);
      return (
        !vt(t) &&
        !wt(t) &&
        ("array" === n ||
          0 === e ||
          ("number" == typeof e && e > 0 && e - 1 in t))
      );
    }
    function o(t, e) {
      return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
    }
    function s(t, e, n) {
      return vt(e)
        ? Tt.grep(t, function (t, i) {
            return !!e.call(t, i, t) !== n;
          })
        : e.nodeType
        ? Tt.grep(t, function (t) {
            return (t === e) !== n;
          })
        : "string" != typeof e
        ? Tt.grep(t, function (t) {
            return pt.call(e, t) > -1 !== n;
          })
        : Tt.filter(e, t, n);
    }
    function a(t, e) {
      for (; (t = t[e]) && 1 !== t.nodeType; );
      return t;
    }
    function l(t) {
      var e = {};
      return (
        Tt.each(t.match(Et) || [], function (t, n) {
          e[n] = !0;
        }),
        e
      );
    }
    function u(t) {
      return t;
    }
    function c(t) {
      throw t;
    }
    function h(t, e, n, i) {
      var r;
      try {
        t && vt((r = t.promise))
          ? r.call(t).done(e).fail(n)
          : t && vt((r = t.then))
          ? r.call(t, e, n)
          : e.apply(undefined, [t].slice(i));
      } catch (t) {
        n.apply(undefined, [t]);
      }
    }
    function p() {
      St.removeEventListener("DOMContentLoaded", p),
        t.removeEventListener("load", p),
        Tt.ready();
    }
    function f(t, e) {
      return e.toUpperCase();
    }
    function d(t) {
      return t.replace(Pt, "ms-").replace(jt, f);
    }
    function y() {
      this.expando = Tt.expando + y.uid++;
    }
    function m(t) {
      return (
        "true" === t ||
        ("false" !== t &&
          ("null" === t
            ? null
            : t === +t + ""
            ? +t
            : Ht.test(t)
            ? JSON.parse(t)
            : t))
      );
    }
    function g(t, e, n) {
      var i;
      if (n === undefined && 1 === t.nodeType)
        if (
          ((i = "data-" + e.replace(Bt, "-$&").toLowerCase()),
          "string" == typeof (n = t.getAttribute(i)))
        ) {
          try {
            n = m(n);
          } catch (t) {}
          Ut.set(t, e, n);
        } else n = undefined;
      return n;
    }
    function _(t, e, n, i) {
      var r,
        o,
        s = 20,
        a = i
          ? function () {
              return i.cur();
            }
          : function () {
              return Tt.css(t, e, "");
            },
        l = a(),
        u = (n && n[3]) || (Tt.cssNumber[e] ? "" : "px"),
        c =
          t.nodeType &&
          (Tt.cssNumber[e] || ("px" !== u && +l)) &&
          Yt.exec(Tt.css(t, e));
      if (c && c[3] !== u) {
        for (l /= 2, u = u || c[3], c = +l || 1; s--; )
          Tt.style(t, e, c + u),
            (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
            (c /= o);
        (c *= 2), Tt.style(t, e, c + u), (n = n || []);
      }
      return (
        n &&
          ((c = +c || +l || 0),
          (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
          i && ((i.unit = u), (i.start = c), (i.end = r))),
        r
      );
    }
    function v(t) {
      var e,
        n = t.ownerDocument,
        i = t.nodeName,
        r = Zt[i];
      return r
        ? r
        : ((e = n.body.appendChild(n.createElement(i))),
          (r = Tt.css(e, "display")),
          e.parentNode.removeChild(e),
          "none" === r && (r = "block"),
          (Zt[i] = r),
          r);
    }
    function w(t, e) {
      for (var n, i, r = [], o = 0, s = t.length; o < s; o++)
        (i = t[o]),
          i.style &&
            ((n = i.style.display),
            e
              ? ("none" === n &&
                  ((r[o] = $t.get(i, "display") || null),
                  r[o] || (i.style.display = "")),
                "" === i.style.display && Jt(i) && (r[o] = v(i)))
              : "none" !== n && ((r[o] = "none"), $t.set(i, "display", n)));
      for (o = 0; o < s; o++) null != r[o] && (t[o].style.display = r[o]);
      return t;
    }
    function S(t, e) {
      var n;
      return (
        (n =
          "undefined" != typeof t.getElementsByTagName
            ? t.getElementsByTagName(e || "*")
            : "undefined" != typeof t.querySelectorAll
            ? t.querySelectorAll(e || "*")
            : []),
        e === undefined || (e && o(t, e)) ? Tt.merge([t], n) : n
      );
    }
    function b(t, e) {
      for (var n = 0, i = t.length; n < i; n++)
        $t.set(t[n], "globalEval", !e || $t.get(e[n], "globalEval"));
    }
    function x(t, e, n, r, o) {
      for (
        var s,
          a,
          l,
          u,
          c,
          h,
          p = e.createDocumentFragment(),
          f = [],
          d = 0,
          y = t.length;
        d < y;
        d++
      )
        if ((s = t[d]) || 0 === s)
          if ("object" === i(s)) Tt.merge(f, s.nodeType ? [s] : s);
          else if (ie.test(s)) {
            for (
              a = a || p.appendChild(e.createElement("div")),
                l = (te.exec(s) || ["", ""])[1].toLowerCase(),
                u = ne[l] || ne._default,
                a.innerHTML = u[1] + Tt.htmlPrefilter(s) + u[2],
                h = u[0];
              h--;

            )
              a = a.lastChild;
            Tt.merge(f, a.childNodes), (a = p.firstChild), (a.textContent = "");
          } else f.push(e.createTextNode(s));
      for (p.textContent = "", d = 0; (s = f[d++]); )
        if (r && Tt.inArray(s, r) > -1) o && o.push(s);
        else if (
          ((c = Gt(s)), (a = S(p.appendChild(s), "script")), c && b(a), n)
        )
          for (h = 0; (s = a[h++]); ) ee.test(s.type || "") && n.push(s);
      return p;
    }
    function T() {
      return !0;
    }
    function D() {
      return !1;
    }
    function C(t, e) {
      return (t === R()) == ("focus" === e);
    }
    function R() {
      try {
        return St.activeElement;
      } catch (t) {}
    }
    function F(t, e, n, i, r, o) {
      var s, a;
      if ("object" == typeof e) {
        "string" != typeof n && ((i = i || n), (n = undefined));
        for (a in e) F(t, a, n, i, e[a], o);
        return t;
      }
      if (
        (null == i && null == r
          ? ((r = n), (i = n = undefined))
          : null == r &&
            ("string" == typeof n
              ? ((r = i), (i = undefined))
              : ((r = i), (i = n), (n = undefined))),
        r === !1)
      )
        r = D;
      else if (!r) return t;
      return (
        1 === o &&
          ((s = r),
          (r = function (t) {
            return Tt().off(t), s.apply(this, arguments);
          }),
          (r.guid = s.guid || (s.guid = Tt.guid++))),
        t.each(function () {
          Tt.event.add(this, e, r, i, n);
        })
      );
    }
    function I(t, e, n) {
      if (!n) return void ($t.get(t, e) === undefined && Tt.event.add(t, e, T));
      $t.set(t, e, !1),
        Tt.event.add(t, e, {
          namespace: !1,
          handler: function (t) {
            var i,
              r,
              o = $t.get(this, e);
            if (1 & t.isTrigger && this[e]) {
              if (o.length)
                (Tt.event.special[e] || {}).delegateType && t.stopPropagation();
              else if (
                ((o = ut.call(arguments)),
                $t.set(this, e, o),
                (i = n(this, e)),
                this[e](),
                (r = $t.get(this, e)),
                o !== r || i ? $t.set(this, e, !1) : (r = {}),
                o !== r)
              )
                return (
                  t.stopImmediatePropagation(), t.preventDefault(), r.value
                );
            } else
              o.length &&
                ($t.set(this, e, {
                  value: Tt.event.trigger(
                    Tt.extend(o[0], Tt.Event.prototype),
                    o.slice(1),
                    this
                  ),
                }),
                t.stopImmediatePropagation());
          },
        });
    }
    function M(t, e) {
      return o(t, "table") && o(11 !== e.nodeType ? e : e.firstChild, "tr")
        ? Tt(t).children("tbody")[0] || t
        : t;
    }
    function O(t) {
      return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
    }
    function k(t) {
      return (
        "true/" === (t.type || "").slice(0, 5)
          ? (t.type = t.type.slice(5))
          : t.removeAttribute("type"),
        t
      );
    }
    function A(t, e) {
      var n, i, r, o, s, a, l;
      if (1 === e.nodeType) {
        if ($t.hasData(t) && ((o = $t.get(t)), (l = o.events))) {
          $t.remove(e, "handle events");
          for (r in l)
            for (n = 0, i = l[r].length; n < i; n++)
              Tt.event.add(e, r, l[r][n]);
        }
        Ut.hasData(t) &&
          ((s = Ut.access(t)), (a = Tt.extend({}, s)), Ut.set(e, a));
      }
    }
    function E(t, e) {
      var n = e.nodeName.toLowerCase();
      "input" === n && Xt.test(t.type)
        ? (e.checked = t.checked)
        : ("input" !== n && "textarea" !== n) ||
          (e.defaultValue = t.defaultValue);
    }
    function L(t, e, i, r) {
      e = ct(e);
      var o,
        s,
        a,
        l,
        u,
        c,
        h = 0,
        p = t.length,
        f = p - 1,
        d = e[0],
        y = vt(d);
      if (y || (p > 1 && "string" == typeof d && !_t.checkClone && le.test(d)))
        return t.each(function (n) {
          var o = t.eq(n);
          y && (e[0] = d.call(this, n, o.html())), L(o, e, i, r);
        });
      if (
        p &&
        ((o = x(e, t[0].ownerDocument, !1, t, r)),
        (s = o.firstChild),
        1 === o.childNodes.length && (o = s),
        s || r)
      ) {
        for (a = Tt.map(S(o, "script"), O), l = a.length; h < p; h++)
          (u = o),
            h !== f &&
              ((u = Tt.clone(u, !0, !0)), l && Tt.merge(a, S(u, "script"))),
            i.call(t[h], u, h);
        if (l)
          for (
            c = a[a.length - 1].ownerDocument, Tt.map(a, k), h = 0;
            h < l;
            h++
          )
            (u = a[h]),
              ee.test(u.type || "") &&
                !$t.access(u, "globalEval") &&
                Tt.contains(c, u) &&
                (u.src && "module" !== (u.type || "").toLowerCase()
                  ? Tt._evalUrl &&
                    !u.noModule &&
                    Tt._evalUrl(
                      u.src,
                      { nonce: u.nonce || u.getAttribute("nonce") },
                      c
                    )
                  : n(u.textContent.replace(ue, ""), u, c));
      }
      return t;
    }
    function Q(t, e, n) {
      for (var i, r = e ? Tt.filter(e, t) : t, o = 0; null != (i = r[o]); o++)
        n || 1 !== i.nodeType || Tt.cleanData(S(i)),
          i.parentNode &&
            (n && Gt(i) && b(S(i, "script")), i.parentNode.removeChild(i));
      return t;
    }
    function N(t, e, n) {
      var i,
        r,
        o,
        s,
        a = t.style;
      return (
        (n = n || he(t)),
        n &&
          ((s = n.getPropertyValue(e) || n[e]),
          "" !== s || Gt(t) || (s = Tt.style(t, e)),
          !_t.pixelBoxStyles() &&
            ce.test(s) &&
            fe.test(e) &&
            ((i = a.width),
            (r = a.minWidth),
            (o = a.maxWidth),
            (a.minWidth = a.maxWidth = a.width = s),
            (s = n.width),
            (a.width = i),
            (a.minWidth = r),
            (a.maxWidth = o))),
        s !== undefined ? s + "" : s
      );
    }
    function P(t, e) {
      return {
        get: function () {
          return t()
            ? void delete this.get
            : (this.get = e).apply(this, arguments);
        },
      };
    }
    function j(t) {
      for (var e = t[0].toUpperCase() + t.slice(1), n = de.length; n--; )
        if ((t = de[n] + e) in ye) return t;
    }
    function q(t) {
      var e = Tt.cssProps[t] || me[t];
      return e ? e : t in ye ? t : (me[t] = j(t) || t);
    }
    function $(t, e, n) {
      var i = Yt.exec(e);
      return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
    }
    function U(t, e, n, i, r, o) {
      var s = "width" === e ? 1 : 0,
        a = 0,
        l = 0;
      if (n === (i ? "border" : "content")) return 0;
      for (; s < 4; s += 2)
        "margin" === n && (l += Tt.css(t, n + Wt[s], !0, r)),
          i
            ? ("content" === n && (l -= Tt.css(t, "padding" + Wt[s], !0, r)),
              "margin" !== n &&
                (l -= Tt.css(t, "border" + Wt[s] + "Width", !0, r)))
            : ((l += Tt.css(t, "padding" + Wt[s], !0, r)),
              "padding" !== n
                ? (l += Tt.css(t, "border" + Wt[s] + "Width", !0, r))
                : (a += Tt.css(t, "border" + Wt[s] + "Width", !0, r)));
      return (
        !i &&
          o >= 0 &&
          (l +=
            Math.max(
              0,
              Math.ceil(
                t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - 0.5
              )
            ) || 0),
        l
      );
    }
    function H(t, e, n) {
      var i = he(t),
        r = !_t.boxSizingReliable() || n,
        s = r && "border-box" === Tt.css(t, "boxSizing", !1, i),
        a = s,
        l = N(t, e, i),
        u = "offset" + e[0].toUpperCase() + e.slice(1);
      if (ce.test(l)) {
        if (!n) return l;
        l = "auto";
      }
      return (
        ((!_t.boxSizingReliable() && s) ||
          (!_t.reliableTrDimensions() && o(t, "tr")) ||
          "auto" === l ||
          (!parseFloat(l) && "inline" === Tt.css(t, "display", !1, i))) &&
          t.getClientRects().length &&
          ((s = "border-box" === Tt.css(t, "boxSizing", !1, i)),
          (a = u in t) && (l = t[u])),
        (l = parseFloat(l) || 0) +
          U(t, e, n || (s ? "border" : "content"), a, i, l) +
          "px"
      );
    }
    function B(t, e, n, i, r) {
      return new B.prototype.init(t, e, n, i, r);
    }
    function V() {
      be &&
        (St.hidden === !1 && t.requestAnimationFrame
          ? t.requestAnimationFrame(V)
          : t.setTimeout(V, Tt.fx.interval),
        Tt.fx.tick());
    }
    function Y() {
      return (
        t.setTimeout(function () {
          Se = undefined;
        }),
        (Se = Date.now())
      );
    }
    function W(t, e) {
      var n,
        i = 0,
        r = { height: t };
      for (e = e ? 1 : 0; i < 4; i += 2 - e)
        (n = Wt[i]), (r["margin" + n] = r["padding" + n] = t);
      return e && (r.opacity = r.width = t), r;
    }
    function z(t, e, n) {
      for (
        var i,
          r = (J.tweeners[e] || []).concat(J.tweeners["*"]),
          o = 0,
          s = r.length;
        o < s;
        o++
      )
        if ((i = r[o].call(n, e, t))) return i;
    }
    function G(t, e, n) {
      var i,
        r,
        o,
        s,
        a,
        l,
        u,
        c,
        h = "width" in e || "height" in e,
        p = this,
        f = {},
        d = t.style,
        y = t.nodeType && Jt(t),
        m = $t.get(t, "fxshow");
      n.queue ||
        ((s = Tt._queueHooks(t, "fx")),
        null == s.unqueued &&
          ((s.unqueued = 0),
          (a = s.empty.fire),
          (s.empty.fire = function () {
            s.unqueued || a();
          })),
        s.unqueued++,
        p.always(function () {
          p.always(function () {
            s.unqueued--, Tt.queue(t, "fx").length || s.empty.fire();
          });
        }));
      for (i in e)
        if (((r = e[i]), xe.test(r))) {
          if (
            (delete e[i],
            (o = o || "toggle" === r),
            r === (y ? "hide" : "show"))
          ) {
            if ("show" !== r || !m || m[i] === undefined) continue;
            y = !0;
          }
          f[i] = (m && m[i]) || Tt.style(t, i);
        }
      if ((l = !Tt.isEmptyObject(e)) || !Tt.isEmptyObject(f)) {
        h &&
          1 === t.nodeType &&
          ((n.overflow = [d.overflow, d.overflowX, d.overflowY]),
          (u = m && m.display),
          null == u && (u = $t.get(t, "display")),
          (c = Tt.css(t, "display")),
          "none" === c &&
            (u
              ? (c = u)
              : (w([t], !0),
                (u = t.style.display || u),
                (c = Tt.css(t, "display")),
                w([t]))),
          ("inline" === c || ("inline-block" === c && null != u)) &&
            "none" === Tt.css(t, "float") &&
            (l ||
              (p.done(function () {
                d.display = u;
              }),
              null == u && ((c = d.display), (u = "none" === c ? "" : c))),
            (d.display = "inline-block"))),
          n.overflow &&
            ((d.overflow = "hidden"),
            p.always(function () {
              (d.overflow = n.overflow[0]),
                (d.overflowX = n.overflow[1]),
                (d.overflowY = n.overflow[2]);
            })),
          (l = !1);
        for (i in f)
          l ||
            (m
              ? "hidden" in m && (y = m.hidden)
              : (m = $t.access(t, "fxshow", { display: u })),
            o && (m.hidden = !y),
            y && w([t], !0),
            p.done(function () {
              y || w([t]), $t.remove(t, "fxshow");
              for (i in f) Tt.style(t, i, f[i]);
            })),
            (l = z(y ? m[i] : 0, i, p)),
            i in m ||
              ((m[i] = l.start), y && ((l.end = l.start), (l.start = 0)));
      }
    }
    function K(t, e) {
      var n, i, r, o, s;
      for (n in t)
        if (
          ((i = d(n)),
          (r = e[i]),
          (o = t[n]),
          Array.isArray(o) && ((r = o[1]), (o = t[n] = o[0])),
          n !== i && ((t[i] = o), delete t[n]),
          (s = Tt.cssHooks[i]) && "expand" in s)
        ) {
          (o = s.expand(o)), delete t[i];
          for (n in o) n in t || ((t[n] = o[n]), (e[n] = r));
        } else e[i] = r;
    }
    function J(t, e, n) {
      var i,
        r,
        o = 0,
        s = J.prefilters.length,
        a = Tt.Deferred().always(function () {
          delete l.elem;
        }),
        l = function () {
          if (r) return !1;
          for (
            var e = Se || Y(),
              n = Math.max(0, u.startTime + u.duration - e),
              i = n / u.duration || 0,
              o = 1 - i,
              s = 0,
              l = u.tweens.length;
            s < l;
            s++
          )
            u.tweens[s].run(o);
          return (
            a.notifyWith(t, [u, o, n]),
            o < 1 && l
              ? n
              : (l || a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u]), !1)
          );
        },
        u = a.promise({
          elem: t,
          props: Tt.extend({}, e),
          opts: Tt.extend(
            !0,
            { specialEasing: {}, easing: Tt.easing._default },
            n
          ),
          originalProperties: e,
          originalOptions: n,
          startTime: Se || Y(),
          duration: n.duration,
          tweens: [],
          createTween: function (e, n) {
            var i = Tt.Tween(
              t,
              u.opts,
              e,
              n,
              u.opts.specialEasing[e] || u.opts.easing
            );
            return u.tweens.push(i), i;
          },
          stop: function (e) {
            var n = 0,
              i = e ? u.tweens.length : 0;
            if (r) return this;
            for (r = !0; n < i; n++) u.tweens[n].run(1);
            return (
              e
                ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e]))
                : a.rejectWith(t, [u, e]),
              this
            );
          },
        }),
        c = u.props;
      for (K(c, u.opts.specialEasing); o < s; o++)
        if ((i = J.prefilters[o].call(u, t, c, u.opts)))
          return (
            vt(i.stop) &&
              (Tt._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)),
            i
          );
      return (
        Tt.map(c, z, u),
        vt(u.opts.start) && u.opts.start.call(t, u),
        u
          .progress(u.opts.progress)
          .done(u.opts.done, u.opts.complete)
          .fail(u.opts.fail)
          .always(u.opts.always),
        Tt.fx.timer(Tt.extend(l, { elem: t, anim: u, queue: u.opts.queue })),
        u
      );
    }
    function Z(t) {
      return (t.match(Et) || []).join(" ");
    }
    function X(t) {
      return (t.getAttribute && t.getAttribute("class")) || "";
    }
    function tt(t) {
      return Array.isArray(t)
        ? t
        : "string" == typeof t
        ? t.match(Et) || []
        : [];
    }
    function et(t, e, n, r) {
      var o;
      if (Array.isArray(e))
        Tt.each(e, function (e, i) {
          n || Le.test(t)
            ? r(t, i)
            : et(
                t + "[" + ("object" == typeof i && null != i ? e : "") + "]",
                i,
                n,
                r
              );
        });
      else if (n || "object" !== i(e)) r(t, e);
      else for (o in e) et(t + "[" + o + "]", e[o], n, r);
    }
    function nt(t) {
      return function (e, n) {
        "string" != typeof e && ((n = e), (e = "*"));
        var i,
          r = 0,
          o = e.toLowerCase().match(Et) || [];
        if (vt(n))
          for (; (i = o[r++]); )
            "+" === i[0]
              ? ((i = i.slice(1) || "*"), (t[i] = t[i] || []).unshift(n))
              : (t[i] = t[i] || []).push(n);
      };
    }
    function it(t, e, n, i) {
      function r(a) {
        var l;
        return (
          (o[a] = !0),
          Tt.each(t[a] || [], function (t, a) {
            var u = a(e, n, i);
            return "string" != typeof u || s || o[u]
              ? s
                ? !(l = u)
                : void 0
              : (e.dataTypes.unshift(u), r(u), !1);
          }),
          l
        );
      }
      var o = {},
        s = t === We;
      return r(e.dataTypes[0]) || (!o["*"] && r("*"));
    }
    function rt(t, e) {
      var n,
        i,
        r = Tt.ajaxSettings.flatOptions || {};
      for (n in e) e[n] !== undefined && ((r[n] ? t : i || (i = {}))[n] = e[n]);
      return i && Tt.extend(!0, t, i), t;
    }
    function ot(t, e, n) {
      for (var i, r, o, s, a = t.contents, l = t.dataTypes; "*" === l[0]; )
        l.shift(),
          i === undefined &&
            (i = t.mimeType || e.getResponseHeader("Content-Type"));
      if (i)
        for (r in a)
          if (a[r] && a[r].test(i)) {
            l.unshift(r);
            break;
          }
      if (l[0] in n) o = l[0];
      else {
        for (r in n) {
          if (!l[0] || t.converters[r + " " + l[0]]) {
            o = r;
            break;
          }
          s || (s = r);
        }
        o = o || s;
      }
      if (o) return o !== l[0] && l.unshift(o), n[o];
    }
    function st(t, e, n, i) {
      var r,
        o,
        s,
        a,
        l,
        u = {},
        c = t.dataTypes.slice();
      if (c[1]) for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
      for (o = c.shift(); o; )
        if (
          (t.responseFields[o] && (n[t.responseFields[o]] = e),
          !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
          (l = o),
          (o = c.shift()))
        )
          if ("*" === o) o = l;
          else if ("*" !== l && l !== o) {
            if (!(s = u[l + " " + o] || u["* " + o]))
              for (r in u)
                if (
                  ((a = r.split(" ")),
                  a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]]))
                ) {
                  s === !0
                    ? (s = u[r])
                    : u[r] !== !0 && ((o = a[0]), c.unshift(a[1]));
                  break;
                }
            if (s !== !0)
              if (s && t["throws"]) e = s(e);
              else
                try {
                  e = s(e);
                } catch (t) {
                  return {
                    state: "parsererror",
                    error: s ? t : "No conversion from " + l + " to " + o,
                  };
                }
          }
      return { state: "success", data: e };
    }
    var at = [],
      lt = Object.getPrototypeOf,
      ut = at.slice,
      ct = at.flat
        ? function (t) {
            return at.flat.call(t);
          }
        : function (t) {
            return at.concat.apply([], t);
          },
      ht = at.push,
      pt = at.indexOf,
      ft = {},
      dt = ft.toString,
      yt = ft.hasOwnProperty,
      mt = yt.toString,
      gt = mt.call(Object),
      _t = {},
      vt = function (t) {
        return "function" == typeof t && "number" != typeof t.nodeType;
      },
      wt = function (t) {
        return null != t && t === t.window;
      },
      St = t.document,
      bt = { type: !0, src: !0, nonce: !0, noModule: !0 },
      xt = "3.5.1",
      Tt = function (t, e) {
        return new Tt.fn.init(t, e);
      };
    (Tt.fn = Tt.prototype =
      {
        jquery: xt,
        constructor: Tt,
        length: 0,
        toArray: function () {
          return ut.call(this);
        },
        get: function (t) {
          return null == t
            ? ut.call(this)
            : t < 0
            ? this[t + this.length]
            : this[t];
        },
        pushStack: function (t) {
          var e = Tt.merge(this.constructor(), t);
          return (e.prevObject = this), e;
        },
        each: function (t) {
          return Tt.each(this, t);
        },
        map: function (t) {
          return this.pushStack(
            Tt.map(this, function (e, n) {
              return t.call(e, n, e);
            })
          );
        },
        slice: function () {
          return this.pushStack(ut.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(
            Tt.grep(this, function (t, e) {
              return (e + 1) % 2;
            })
          );
        },
        odd: function () {
          return this.pushStack(
            Tt.grep(this, function (t, e) {
              return e % 2;
            })
          );
        },
        eq: function (t) {
          var e = this.length,
            n = +t + (t < 0 ? e : 0);
          return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: ht,
        sort: at.sort,
        splice: at.splice,
      }),
      (Tt.extend = Tt.fn.extend =
        function () {
          var t,
            e,
            n,
            i,
            r,
            o,
            s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
          for (
            "boolean" == typeof s && ((u = s), (s = arguments[a] || {}), a++),
              "object" == typeof s || vt(s) || (s = {}),
              a === l && ((s = this), a--);
            a < l;
            a++
          )
            if (null != (t = arguments[a]))
              for (e in t)
                (i = t[e]),
                  "__proto__" !== e &&
                    s !== i &&
                    (u && i && (Tt.isPlainObject(i) || (r = Array.isArray(i)))
                      ? ((n = s[e]),
                        (o =
                          r && !Array.isArray(n)
                            ? []
                            : r || Tt.isPlainObject(n)
                            ? n
                            : {}),
                        (r = !1),
                        (s[e] = Tt.extend(u, o, i)))
                      : i !== undefined && (s[e] = i));
          return s;
        }),
      Tt.extend({
        expando: "jQuery" + (xt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
          throw new Error(t);
        },
        noop: function () {},
        isPlainObject: function (t) {
          var e, n;
          return !(
            !t ||
            "[object Object]" !== dt.call(t) ||
            ((e = lt(t)) &&
              ("function" !=
                typeof (n = yt.call(e, "constructor") && e.constructor) ||
                mt.call(n) !== gt))
          );
        },
        isEmptyObject: function (t) {
          var e;
          for (e in t) return !1;
          return !0;
        },
        globalEval: function (t, e, i) {
          n(t, { nonce: e && e.nonce }, i);
        },
        each: function (t, e) {
          var n,
            i = 0;
          if (r(t))
            for (n = t.length; i < n && e.call(t[i], i, t[i]) !== !1; i++);
          else for (i in t) if (e.call(t[i], i, t[i]) === !1) break;
          return t;
        },
        makeArray: function (t, e) {
          var n = e || [];
          return (
            null != t &&
              (r(Object(t))
                ? Tt.merge(n, "string" == typeof t ? [t] : t)
                : ht.call(n, t)),
            n
          );
        },
        inArray: function (t, e, n) {
          return null == e ? -1 : pt.call(e, t, n);
        },
        merge: function (t, e) {
          for (var n = +e.length, i = 0, r = t.length; i < n; i++)
            t[r++] = e[i];
          return (t.length = r), t;
        },
        grep: function (t, e, n) {
          for (var i = [], r = 0, o = t.length, s = !n; r < o; r++)
            !e(t[r], r) !== s && i.push(t[r]);
          return i;
        },
        map: function (t, e, n) {
          var i,
            o,
            s = 0,
            a = [];
          if (r(t))
            for (i = t.length; s < i; s++)
              null != (o = e(t[s], s, n)) && a.push(o);
          else for (s in t) null != (o = e(t[s], s, n)) && a.push(o);
          return ct(a);
        },
        guid: 1,
        support: _t,
      }),
      "function" == typeof Symbol &&
        (Tt.fn[Symbol.iterator] = at[Symbol.iterator]),
      Tt.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function (t, e) {
          ft["[object " + e + "]"] = e.toLowerCase();
        }
      );
    var Dt =
      /*!
       * Sizzle CSS Selector Engine v2.3.5
       * https://sizzlejs.com/
       *
       * Copyright JS Foundation and other contributors
       * Released under the MIT license
       * https://js.foundation/
       *
       * Date: 2020-03-14
       */
      (function (t) {
        function e(t, e, n, i) {
          var r,
            o,
            s,
            a,
            l,
            u,
            c,
            p = e && e.ownerDocument,
            d = e ? e.nodeType : 9;
          if (
            ((n = n || []),
            "string" != typeof t || !t || (1 !== d && 9 !== d && 11 !== d))
          )
            return n;
          if (!i && (k(e), (e = e || A), L)) {
            if (11 !== d && (l = vt.exec(t)))
              if ((r = l[1])) {
                if (9 === d) {
                  if (!(s = e.getElementById(r))) return n;
                  if (s.id === r) return n.push(s), n;
                } else if (
                  p &&
                  (s = p.getElementById(r)) &&
                  j(e, s) &&
                  s.id === r
                )
                  return n.push(s), n;
              } else {
                if (l[2]) return X.apply(n, e.getElementsByTagName(t)), n;
                if (
                  (r = l[3]) &&
                  b.getElementsByClassName &&
                  e.getElementsByClassName
                )
                  return X.apply(n, e.getElementsByClassName(r)), n;
              }
            if (
              b.qsa &&
              !W[t + " "] &&
              (!Q || !Q.test(t)) &&
              (1 !== d || "object" !== e.nodeName.toLowerCase())
            ) {
              if (((c = t), (p = e), 1 === d && (ht.test(t) || ct.test(t)))) {
                for (
                  p = (wt.test(t) && h(e.parentNode)) || e,
                    (p === e && b.scope) ||
                      ((a = e.getAttribute("id"))
                        ? (a = a.replace(xt, Tt))
                        : e.setAttribute("id", (a = q))),
                    u = C(t),
                    o = u.length;
                  o--;

                )
                  u[o] = (a ? "#" + a : ":scope") + " " + f(u[o]);
                c = u.join(",");
              }
              try {
                return X.apply(n, p.querySelectorAll(c)), n;
              } catch (e) {
                W(t, !0);
              } finally {
                a === q && e.removeAttribute("id");
              }
            }
          }
          return F(t.replace(lt, "$1"), e, n, i);
        }
        function n() {
          function t(n, i) {
            return (
              e.push(n + " ") > x.cacheLength && delete t[e.shift()],
              (t[n + " "] = i)
            );
          }
          var e = [];
          return t;
        }
        function i(t) {
          return (t[q] = !0), t;
        }
        function r(t) {
          var e = A.createElement("fieldset");
          try {
            return !!t(e);
          } catch (t) {
            return !1;
          } finally {
            e.parentNode && e.parentNode.removeChild(e), (e = null);
          }
        }
        function o(t, e) {
          for (var n = t.split("|"), i = n.length; i--; )
            x.attrHandle[n[i]] = e;
        }
        function s(t, e) {
          var n = e && t,
            i =
              n &&
              1 === t.nodeType &&
              1 === e.nodeType &&
              t.sourceIndex - e.sourceIndex;
          if (i) return i;
          if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
          return t ? 1 : -1;
        }
        function a(t) {
          return function (e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t;
          };
        }
        function l(t) {
          return function (e) {
            var n = e.nodeName.toLowerCase();
            return ("input" === n || "button" === n) && e.type === t;
          };
        }
        function u(t) {
          return function (e) {
            return "form" in e
              ? e.parentNode && e.disabled === !1
                ? "label" in e
                  ? "label" in e.parentNode
                    ? e.parentNode.disabled === t
                    : e.disabled === t
                  : e.isDisabled === t || (e.isDisabled !== !t && Ct(e) === t)
                : e.disabled === t
              : "label" in e && e.disabled === t;
          };
        }
        function c(t) {
          return i(function (e) {
            return (
              (e = +e),
              i(function (n, i) {
                for (var r, o = t([], n.length, e), s = o.length; s--; )
                  n[(r = o[s])] && (n[r] = !(i[r] = n[r]));
              })
            );
          });
        }
        function h(t) {
          return t && "undefined" != typeof t.getElementsByTagName && t;
        }
        function p() {}
        function f(t) {
          for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
          return i;
        }
        function d(t, e, n) {
          var i = e.dir,
            r = e.next,
            o = r || i,
            s = n && "parentNode" === o,
            a = H++;
          return e.first
            ? function (e, n, r) {
                for (; (e = e[i]); )
                  if (1 === e.nodeType || s) return t(e, n, r);
                return !1;
              }
            : function (e, n, l) {
                var u,
                  c,
                  h,
                  p = [U, a];
                if (l) {
                  for (; (e = e[i]); )
                    if ((1 === e.nodeType || s) && t(e, n, l)) return !0;
                } else
                  for (; (e = e[i]); )
                    if (1 === e.nodeType || s)
                      if (
                        ((h = e[q] || (e[q] = {})),
                        (c = h[e.uniqueID] || (h[e.uniqueID] = {})),
                        r && r === e.nodeName.toLowerCase())
                      )
                        e = e[i] || e;
                      else {
                        if ((u = c[o]) && u[0] === U && u[1] === a)
                          return (p[2] = u[2]);
                        if (((c[o] = p), (p[2] = t(e, n, l)))) return !0;
                      }
                return !1;
              };
        }
        function y(t) {
          return t.length > 1
            ? function (e, n, i) {
                for (var r = t.length; r--; ) if (!t[r](e, n, i)) return !1;
                return !0;
              }
            : t[0];
        }
        function m(t, n, i) {
          for (var r = 0, o = n.length; r < o; r++) e(t, n[r], i);
          return i;
        }
        function g(t, e, n, i, r) {
          for (var o, s = [], a = 0, l = t.length, u = null != e; a < l; a++)
            (o = t[a]) && ((n && !n(o, i, r)) || (s.push(o), u && e.push(a)));
          return s;
        }
        function _(t, e, n, r, o, s) {
          return (
            r && !r[q] && (r = _(r)),
            o && !o[q] && (o = _(o, s)),
            i(function (i, s, a, l) {
              var u,
                c,
                h,
                p = [],
                f = [],
                d = s.length,
                y = i || m(e || "*", a.nodeType ? [a] : a, []),
                _ = !t || (!i && e) ? y : g(y, p, t, a, l),
                v = n ? (o || (i ? t : d || r) ? [] : s) : _;
              if ((n && n(_, v, a, l), r))
                for (u = g(v, f), r(u, [], a, l), c = u.length; c--; )
                  (h = u[c]) && (v[f[c]] = !(_[f[c]] = h));
              if (i) {
                if (o || t) {
                  if (o) {
                    for (u = [], c = v.length; c--; )
                      (h = v[c]) && u.push((_[c] = h));
                    o(null, (v = []), u, l);
                  }
                  for (c = v.length; c--; )
                    (h = v[c]) &&
                      (u = o ? et(i, h) : p[c]) > -1 &&
                      (i[u] = !(s[u] = h));
                }
              } else (v = g(v === s ? v.splice(d, v.length) : v)), o ? o(null, s, v, l) : X.apply(s, v);
            })
          );
        }
        function v(t) {
          for (
            var e,
              n,
              i,
              r = t.length,
              o = x.relative[t[0].type],
              s = o || x.relative[" "],
              a = o ? 1 : 0,
              l = d(
                function (t) {
                  return t === e;
                },
                s,
                !0
              ),
              u = d(
                function (t) {
                  return et(e, t) > -1;
                },
                s,
                !0
              ),
              c = [
                function (t, n, i) {
                  var r =
                    (!o && (i || n !== I)) ||
                    ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
                  return (e = null), r;
                },
              ];
            a < r;
            a++
          )
            if ((n = x.relative[t[a].type])) c = [d(y(c), n)];
            else {
              if (((n = x.filter[t[a].type].apply(null, t[a].matches)), n[q])) {
                for (i = ++a; i < r && !x.relative[t[i].type]; i++);
                return _(
                  a > 1 && y(c),
                  a > 1 &&
                    f(
                      t
                        .slice(0, a - 1)
                        .concat({ value: " " === t[a - 2].type ? "*" : "" })
                    ).replace(lt, "$1"),
                  n,
                  a < i && v(t.slice(a, i)),
                  i < r && v((t = t.slice(i))),
                  i < r && f(t)
                );
              }
              c.push(n);
            }
          return y(c);
        }
        function w(t, n) {
          var r = n.length > 0,
            o = t.length > 0,
            s = function (i, s, a, l, u) {
              var c,
                h,
                p,
                f = 0,
                d = "0",
                y = i && [],
                m = [],
                _ = I,
                v = i || (o && x.find.TAG("*", u)),
                w = (U += null == _ ? 1 : Math.random() || 0.1),
                S = v.length;
              for (
                u && (I = s == A || s || u);
                d !== S && null != (c = v[d]);
                d++
              ) {
                if (o && c) {
                  for (
                    h = 0, s || c.ownerDocument == A || (k(c), (a = !L));
                    (p = t[h++]);

                  )
                    if (p(c, s || A, a)) {
                      l.push(c);
                      break;
                    }
                  u && (U = w);
                }
                r && ((c = !p && c) && f--, i && y.push(c));
              }
              if (((f += d), r && d !== f)) {
                for (h = 0; (p = n[h++]); ) p(y, m, s, a);
                if (i) {
                  if (f > 0) for (; d--; ) y[d] || m[d] || (m[d] = J.call(l));
                  m = g(m);
                }
                X.apply(l, m),
                  u &&
                    !i &&
                    m.length > 0 &&
                    f + n.length > 1 &&
                    e.uniqueSort(l);
              }
              return u && ((U = w), (I = _)), y;
            };
          return r ? i(s) : s;
        }
        var S,
          b,
          x,
          T,
          D,
          C,
          R,
          F,
          I,
          M,
          O,
          k,
          A,
          E,
          L,
          Q,
          N,
          P,
          j,
          q = "sizzle" + 1 * new Date(),
          $ = t.document,
          U = 0,
          H = 0,
          B = n(),
          V = n(),
          Y = n(),
          W = n(),
          z = function (t, e) {
            return t === e && (O = !0), 0;
          },
          G = {}.hasOwnProperty,
          K = [],
          J = K.pop,
          Z = K.push,
          X = K.push,
          tt = K.slice,
          et = function (t, e) {
            for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
            return -1;
          },
          nt =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          it = "[\\x20\\t\\r\\n\\f]",
          rt =
            "(?:\\\\[\\da-fA-F]{1,6}" +
            it +
            "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
          ot =
            "\\[" +
            it +
            "*(" +
            rt +
            ")(?:" +
            it +
            "*([*^$|!~]?=)" +
            it +
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
            rt +
            "))|)" +
            it +
            "*\\]",
          st =
            ":(" +
            rt +
            ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            ot +
            ")*)|.*)\\)|)",
          at = new RegExp(it + "+", "g"),
          lt = new RegExp(
            "^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$",
            "g"
          ),
          ut = new RegExp("^" + it + "*," + it + "*"),
          ct = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
          ht = new RegExp(it + "|>"),
          pt = new RegExp(st),
          ft = new RegExp("^" + rt + "$"),
          dt = {
            ID: new RegExp("^#(" + rt + ")"),
            CLASS: new RegExp("^\\.(" + rt + ")"),
            TAG: new RegExp("^(" + rt + "|[*])"),
            ATTR: new RegExp("^" + ot),
            PSEUDO: new RegExp("^" + st),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                it +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                it +
                "*(?:([+-]|)" +
                it +
                "*(\\d+)|))" +
                it +
                "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + nt + ")$", "i"),
            needsContext: new RegExp(
              "^" +
                it +
                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                it +
                "*((?:-\\d)?\\d*)" +
                it +
                "*\\)|)(?=[^-]|$)",
              "i"
            ),
          },
          yt = /HTML$/i,
          mt = /^(?:input|select|textarea|button)$/i,
          gt = /^h\d$/i,
          _t = /^[^{]+\{\s*\[native \w/,
          vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          wt = /[+~]/,
          St = new RegExp(
            "\\\\[\\da-fA-F]{1,6}" + it + "?|\\\\([^\\r\\n\\f])",
            "g"
          ),
          bt = function (t, e) {
            var n = "0x" + t.slice(1) - 65536;
            return e
              ? e
              : n < 0
              ? String.fromCharCode(n + 65536)
              : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320);
          },
          xt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          Tt = function (t, e) {
            return e
              ? "\0" === t
                ? "\ufffd"
                : t.slice(0, -1) +
                  "\\" +
                  t.charCodeAt(t.length - 1).toString(16) +
                  " "
              : "\\" + t;
          },
          Dt = function () {
            k();
          },
          Ct = d(
            function (t) {
              return (
                t.disabled === !0 && "fieldset" === t.nodeName.toLowerCase()
              );
            },
            { dir: "parentNode", next: "legend" }
          );
        try {
          X.apply((K = tt.call($.childNodes)), $.childNodes),
            K[$.childNodes.length].nodeType;
        } catch (t) {
          X = {
            apply: K.length
              ? function (t, e) {
                  Z.apply(t, tt.call(e));
                }
              : function (t, e) {
                  for (var n = t.length, i = 0; (t[n++] = e[i++]); );
                  t.length = n - 1;
                },
          };
        }
        (b = e.support = {}),
          (D = e.isXML =
            function (t) {
              var e = t.namespaceURI,
                n = (t.ownerDocument || t).documentElement;
              return !yt.test(e || (n && n.nodeName) || "HTML");
            }),
          (k = e.setDocument =
            function (t) {
              var e,
                n,
                i = t ? t.ownerDocument || t : $;
              return i != A && 9 === i.nodeType && i.documentElement
                ? ((A = i),
                  (E = A.documentElement),
                  (L = !D(A)),
                  $ != A &&
                    (n = A.defaultView) &&
                    n.top !== n &&
                    (n.addEventListener
                      ? n.addEventListener("unload", Dt, !1)
                      : n.attachEvent && n.attachEvent("onunload", Dt)),
                  (b.scope = r(function (t) {
                    return (
                      E.appendChild(t).appendChild(A.createElement("div")),
                      "undefined" != typeof t.querySelectorAll &&
                        !t.querySelectorAll(":scope fieldset div").length
                    );
                  })),
                  (b.attributes = r(function (t) {
                    return (t.className = "i"), !t.getAttribute("className");
                  })),
                  (b.getElementsByTagName = r(function (t) {
                    return (
                      t.appendChild(A.createComment("")),
                      !t.getElementsByTagName("*").length
                    );
                  })),
                  (b.getElementsByClassName = _t.test(
                    A.getElementsByClassName
                  )),
                  (b.getById = r(function (t) {
                    return (
                      (E.appendChild(t).id = q),
                      !A.getElementsByName || !A.getElementsByName(q).length
                    );
                  })),
                  b.getById
                    ? ((x.filter.ID = function (t) {
                        var e = t.replace(St, bt);
                        return function (t) {
                          return t.getAttribute("id") === e;
                        };
                      }),
                      (x.find.ID = function (t, e) {
                        if ("undefined" != typeof e.getElementById && L) {
                          var n = e.getElementById(t);
                          return n ? [n] : [];
                        }
                      }))
                    : ((x.filter.ID = function (t) {
                        var e = t.replace(St, bt);
                        return function (t) {
                          var n =
                            "undefined" != typeof t.getAttributeNode &&
                            t.getAttributeNode("id");
                          return n && n.value === e;
                        };
                      }),
                      (x.find.ID = function (t, e) {
                        if ("undefined" != typeof e.getElementById && L) {
                          var n,
                            i,
                            r,
                            o = e.getElementById(t);
                          if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === t)
                              return [o];
                            for (
                              r = e.getElementsByName(t), i = 0;
                              (o = r[i++]);

                            )
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === t
                              )
                                return [o];
                          }
                          return [];
                        }
                      })),
                  (x.find.TAG = b.getElementsByTagName
                    ? function (t, e) {
                        return "undefined" != typeof e.getElementsByTagName
                          ? e.getElementsByTagName(t)
                          : b.qsa
                          ? e.querySelectorAll(t)
                          : void 0;
                      }
                    : function (t, e) {
                        var n,
                          i = [],
                          r = 0,
                          o = e.getElementsByTagName(t);
                        if ("*" === t) {
                          for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                          return i;
                        }
                        return o;
                      }),
                  (x.find.CLASS =
                    b.getElementsByClassName &&
                    function (t, e) {
                      if ("undefined" != typeof e.getElementsByClassName && L)
                        return e.getElementsByClassName(t);
                    }),
                  (N = []),
                  (Q = []),
                  (b.qsa = _t.test(A.querySelectorAll)) &&
                    (r(function (t) {
                      var e;
                      (E.appendChild(t).innerHTML =
                        "<a id='" +
                        q +
                        "'></a><select id='" +
                        q +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        t.querySelectorAll("[msallowcapture^='']").length &&
                          Q.push("[*^$]=" + it + "*(?:''|\"\")"),
                        t.querySelectorAll("[selected]").length ||
                          Q.push("\\[" + it + "*(?:value|" + nt + ")"),
                        t.querySelectorAll("[id~=" + q + "-]").length ||
                          Q.push("~="),
                        (e = A.createElement("input")),
                        e.setAttribute("name", ""),
                        t.appendChild(e),
                        t.querySelectorAll("[name='']").length ||
                          Q.push(
                            "\\[" +
                              it +
                              "*name" +
                              it +
                              "*=" +
                              it +
                              "*(?:''|\"\")"
                          ),
                        t.querySelectorAll(":checked").length ||
                          Q.push(":checked"),
                        t.querySelectorAll("a#" + q + "+*").length ||
                          Q.push(".#.+[+~]"),
                        t.querySelectorAll("\\\f"),
                        Q.push("[\\r\\n\\f]");
                    }),
                    r(function (t) {
                      t.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var e = A.createElement("input");
                      e.setAttribute("type", "hidden"),
                        t.appendChild(e).setAttribute("name", "D"),
                        t.querySelectorAll("[name=d]").length &&
                          Q.push("name" + it + "*[*^$|!~]?="),
                        2 !== t.querySelectorAll(":enabled").length &&
                          Q.push(":enabled", ":disabled"),
                        (E.appendChild(t).disabled = !0),
                        2 !== t.querySelectorAll(":disabled").length &&
                          Q.push(":enabled", ":disabled"),
                        t.querySelectorAll("*,:x"),
                        Q.push(",.*:");
                    })),
                  (b.matchesSelector = _t.test(
                    (P =
                      E.matches ||
                      E.webkitMatchesSelector ||
                      E.mozMatchesSelector ||
                      E.oMatchesSelector ||
                      E.msMatchesSelector)
                  )) &&
                    r(function (t) {
                      (b.disconnectedMatch = P.call(t, "*")),
                        P.call(t, "[s!='']:x"),
                        N.push("!=", st);
                    }),
                  (Q = Q.length && new RegExp(Q.join("|"))),
                  (N = N.length && new RegExp(N.join("|"))),
                  (e = _t.test(E.compareDocumentPosition)),
                  (j =
                    e || _t.test(E.contains)
                      ? function (t, e) {
                          var n = 9 === t.nodeType ? t.documentElement : t,
                            i = e && e.parentNode;
                          return (
                            t === i ||
                            !(
                              !i ||
                              1 !== i.nodeType ||
                              !(n.contains
                                ? n.contains(i)
                                : t.compareDocumentPosition &&
                                  16 & t.compareDocumentPosition(i))
                            )
                          );
                        }
                      : function (t, e) {
                          if (e)
                            for (; (e = e.parentNode); ) if (e === t) return !0;
                          return !1;
                        }),
                  (z = e
                    ? function (t, e) {
                        if (t === e) return (O = !0), 0;
                        var n =
                          !t.compareDocumentPosition -
                          !e.compareDocumentPosition;
                        return n
                          ? n
                          : ((n =
                              (t.ownerDocument || t) == (e.ownerDocument || e)
                                ? t.compareDocumentPosition(e)
                                : 1),
                            1 & n ||
                            (!b.sortDetached &&
                              e.compareDocumentPosition(t) === n)
                              ? t == A || (t.ownerDocument == $ && j($, t))
                                ? -1
                                : e == A || (e.ownerDocument == $ && j($, e))
                                ? 1
                                : M
                                ? et(M, t) - et(M, e)
                                : 0
                              : 4 & n
                              ? -1
                              : 1);
                      }
                    : function (t, e) {
                        if (t === e) return (O = !0), 0;
                        var n,
                          i = 0,
                          r = t.parentNode,
                          o = e.parentNode,
                          a = [t],
                          l = [e];
                        if (!r || !o)
                          return t == A
                            ? -1
                            : e == A
                            ? 1
                            : r
                            ? -1
                            : o
                            ? 1
                            : M
                            ? et(M, t) - et(M, e)
                            : 0;
                        if (r === o) return s(t, e);
                        for (n = t; (n = n.parentNode); ) a.unshift(n);
                        for (n = e; (n = n.parentNode); ) l.unshift(n);
                        for (; a[i] === l[i]; ) i++;
                        return i
                          ? s(a[i], l[i])
                          : a[i] == $
                          ? -1
                          : l[i] == $
                          ? 1
                          : 0;
                      }),
                  A)
                : A;
            }),
          (e.matches = function (t, n) {
            return e(t, null, null, n);
          }),
          (e.matchesSelector = function (t, n) {
            if (
              (k(t),
              b.matchesSelector &&
                L &&
                !W[n + " "] &&
                (!N || !N.test(n)) &&
                (!Q || !Q.test(n)))
            )
              try {
                var i = P.call(t, n);
                if (
                  i ||
                  b.disconnectedMatch ||
                  (t.document && 11 !== t.document.nodeType)
                )
                  return i;
              } catch (t) {
                W(n, !0);
              }
            return e(n, A, null, [t]).length > 0;
          }),
          (e.contains = function (t, e) {
            return (t.ownerDocument || t) != A && k(t), j(t, e);
          }),
          (e.attr = function (t, e) {
            (t.ownerDocument || t) != A && k(t);
            var n = x.attrHandle[e.toLowerCase()],
              i =
                n && G.call(x.attrHandle, e.toLowerCase())
                  ? n(t, e, !L)
                  : undefined;
            return i !== undefined
              ? i
              : b.attributes || !L
              ? t.getAttribute(e)
              : (i = t.getAttributeNode(e)) && i.specified
              ? i.value
              : null;
          }),
          (e.escape = function (t) {
            return (t + "").replace(xt, Tt);
          }),
          (e.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t);
          }),
          (e.uniqueSort = function (t) {
            var e,
              n = [],
              i = 0,
              r = 0;
            if (
              ((O = !b.detectDuplicates),
              (M = !b.sortStable && t.slice(0)),
              t.sort(z),
              O)
            ) {
              for (; (e = t[r++]); ) e === t[r] && (i = n.push(r));
              for (; i--; ) t.splice(n[i], 1);
            }
            return (M = null), t;
          }),
          (T = e.getText =
            function (t) {
              var e,
                n = "",
                i = 0,
                r = t.nodeType;
              if (r) {
                if (1 === r || 9 === r || 11 === r) {
                  if ("string" == typeof t.textContent) return t.textContent;
                  for (t = t.firstChild; t; t = t.nextSibling) n += T(t);
                } else if (3 === r || 4 === r) return t.nodeValue;
              } else for (; (e = t[i++]); ) n += T(e);
              return n;
            }),
          (x = e.selectors =
            {
              cacheLength: 50,
              createPseudo: i,
              match: dt,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (t) {
                  return (
                    (t[1] = t[1].replace(St, bt)),
                    (t[3] = (t[3] || t[4] || t[5] || "").replace(St, bt)),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                  );
                },
                CHILD: function (t) {
                  return (
                    (t[1] = t[1].toLowerCase()),
                    "nth" === t[1].slice(0, 3)
                      ? (t[3] || e.error(t[0]),
                        (t[4] = +(t[4]
                          ? t[5] + (t[6] || 1)
                          : 2 * ("even" === t[3] || "odd" === t[3]))),
                        (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                      : t[3] && e.error(t[0]),
                    t
                  );
                },
                PSEUDO: function (t) {
                  var e,
                    n = !t[6] && t[2];
                  return dt.CHILD.test(t[0])
                    ? null
                    : (t[3]
                        ? (t[2] = t[4] || t[5] || "")
                        : n &&
                          pt.test(n) &&
                          (e = C(n, !0)) &&
                          (e = n.indexOf(")", n.length - e) - n.length) &&
                          ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
                      t.slice(0, 3));
                },
              },
              filter: {
                TAG: function (t) {
                  var e = t.replace(St, bt).toLowerCase();
                  return "*" === t
                    ? function () {
                        return !0;
                      }
                    : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e;
                      };
                },
                CLASS: function (t) {
                  var e = B[t + " "];
                  return (
                    e ||
                    ((e = new RegExp(
                      "(^|" + it + ")" + t + "(" + it + "|$)"
                    )) &&
                      B(t, function (t) {
                        return e.test(
                          ("string" == typeof t.className && t.className) ||
                            ("undefined" != typeof t.getAttribute &&
                              t.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (t, n, i) {
                  return function (r) {
                    var o = e.attr(r, t);
                    return null == o
                      ? "!=" === n
                      : !n ||
                          ((o += ""),
                          "=" === n
                            ? o === i
                            : "!=" === n
                            ? o !== i
                            : "^=" === n
                            ? i && 0 === o.indexOf(i)
                            : "*=" === n
                            ? i && o.indexOf(i) > -1
                            : "$=" === n
                            ? i && o.slice(-i.length) === i
                            : "~=" === n
                            ? (" " + o.replace(at, " ") + " ").indexOf(i) > -1
                            : "|=" === n &&
                              (o === i ||
                                o.slice(0, i.length + 1) === i + "-"));
                  };
                },
                CHILD: function (t, e, n, i, r) {
                  var o = "nth" !== t.slice(0, 3),
                    s = "last" !== t.slice(-4),
                    a = "of-type" === e;
                  return 1 === i && 0 === r
                    ? function (t) {
                        return !!t.parentNode;
                      }
                    : function (e, n, l) {
                        var u,
                          c,
                          h,
                          p,
                          f,
                          d,
                          y = o !== s ? "nextSibling" : "previousSibling",
                          m = e.parentNode,
                          g = a && e.nodeName.toLowerCase(),
                          _ = !l && !a,
                          v = !1;
                        if (m) {
                          if (o) {
                            for (; y; ) {
                              for (p = e; (p = p[y]); )
                                if (
                                  a
                                    ? p.nodeName.toLowerCase() === g
                                    : 1 === p.nodeType
                                )
                                  return !1;
                              d = y = "only" === t && !d && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((d = [s ? m.firstChild : m.lastChild]), s && _)
                          ) {
                            for (
                              p = m,
                                h = p[q] || (p[q] = {}),
                                c = h[p.uniqueID] || (h[p.uniqueID] = {}),
                                u = c[t] || [],
                                f = u[0] === U && u[1],
                                v = f && u[2],
                                p = f && m.childNodes[f];
                              (p =
                                (++f && p && p[y]) || (v = f = 0) || d.pop());

                            )
                              if (1 === p.nodeType && ++v && p === e) {
                                c[t] = [U, f, v];
                                break;
                              }
                          } else if (
                            (_ &&
                              ((p = e),
                              (h = p[q] || (p[q] = {})),
                              (c = h[p.uniqueID] || (h[p.uniqueID] = {})),
                              (u = c[t] || []),
                              (f = u[0] === U && u[1]),
                              (v = f)),
                            v === !1)
                          )
                            for (
                              ;
                              (p =
                                (++f && p && p[y]) || (v = f = 0) || d.pop()) &&
                              ((a
                                ? p.nodeName.toLowerCase() !== g
                                : 1 !== p.nodeType) ||
                                !++v ||
                                (_ &&
                                  ((h = p[q] || (p[q] = {})),
                                  (c = h[p.uniqueID] || (h[p.uniqueID] = {})),
                                  (c[t] = [U, v])),
                                p !== e));

                            );
                          return (v -= r) === i || (v % i == 0 && v / i >= 0);
                        }
                      };
                },
                PSEUDO: function (t, n) {
                  var r,
                    o =
                      x.pseudos[t] ||
                      x.setFilters[t.toLowerCase()] ||
                      e.error("unsupported pseudo: " + t);
                  return o[q]
                    ? o(n)
                    : o.length > 1
                    ? ((r = [t, t, "", n]),
                      x.setFilters.hasOwnProperty(t.toLowerCase())
                        ? i(function (t, e) {
                            for (var i, r = o(t, n), s = r.length; s--; )
                              (i = et(t, r[s])), (t[i] = !(e[i] = r[s]));
                          })
                        : function (t) {
                            return o(t, 0, r);
                          })
                    : o;
                },
              },
              pseudos: {
                not: i(function (t) {
                  var e = [],
                    n = [],
                    r = R(t.replace(lt, "$1"));
                  return r[q]
                    ? i(function (t, e, n, i) {
                        for (var o, s = r(t, null, i, []), a = t.length; a--; )
                          (o = s[a]) && (t[a] = !(e[a] = o));
                      })
                    : function (t, i, o) {
                        return (
                          (e[0] = t), r(e, null, o, n), (e[0] = null), !n.pop()
                        );
                      };
                }),
                has: i(function (t) {
                  return function (n) {
                    return e(t, n).length > 0;
                  };
                }),
                contains: i(function (t) {
                  return (
                    (t = t.replace(St, bt)),
                    function (e) {
                      return (e.textContent || T(e)).indexOf(t) > -1;
                    }
                  );
                }),
                lang: i(function (t) {
                  return (
                    ft.test(t || "") || e.error("unsupported lang: " + t),
                    (t = t.replace(St, bt).toLowerCase()),
                    function (e) {
                      var n;
                      do {
                        if (
                          (n = L
                            ? e.lang
                            : e.getAttribute("xml:lang") ||
                              e.getAttribute("lang"))
                        )
                          return (
                            (n = n.toLowerCase()) === t ||
                            0 === n.indexOf(t + "-")
                          );
                      } while ((e = e.parentNode) && 1 === e.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (e) {
                  var n = t.location && t.location.hash;
                  return n && n.slice(1) === e.id;
                },
                root: function (t) {
                  return t === E;
                },
                focus: function (t) {
                  return (
                    t === A.activeElement &&
                    (!A.hasFocus || A.hasFocus()) &&
                    !!(t.type || t.href || ~t.tabIndex)
                  );
                },
                enabled: u(!1),
                disabled: u(!0),
                checked: function (t) {
                  var e = t.nodeName.toLowerCase();
                  return (
                    ("input" === e && !!t.checked) ||
                    ("option" === e && !!t.selected)
                  );
                },
                selected: function (t) {
                  return (
                    t.parentNode && t.parentNode.selectedIndex,
                    t.selected === !0
                  );
                },
                empty: function (t) {
                  for (t = t.firstChild; t; t = t.nextSibling)
                    if (t.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (t) {
                  return !x.pseudos.empty(t);
                },
                header: function (t) {
                  return gt.test(t.nodeName);
                },
                input: function (t) {
                  return mt.test(t.nodeName);
                },
                button: function (t) {
                  var e = t.nodeName.toLowerCase();
                  return (
                    ("input" === e && "button" === t.type) || "button" === e
                  );
                },
                text: function (t) {
                  var e;
                  return (
                    "input" === t.nodeName.toLowerCase() &&
                    "text" === t.type &&
                    (null == (e = t.getAttribute("type")) ||
                      "text" === e.toLowerCase())
                  );
                },
                first: c(function () {
                  return [0];
                }),
                last: c(function (t, e) {
                  return [e - 1];
                }),
                eq: c(function (t, e, n) {
                  return [n < 0 ? n + e : n];
                }),
                even: c(function (t, e) {
                  for (var n = 0; n < e; n += 2) t.push(n);
                  return t;
                }),
                odd: c(function (t, e) {
                  for (var n = 1; n < e; n += 2) t.push(n);
                  return t;
                }),
                lt: c(function (t, e, n) {
                  for (var i = n < 0 ? n + e : n > e ? e : n; --i >= 0; )
                    t.push(i);
                  return t;
                }),
                gt: c(function (t, e, n) {
                  for (var i = n < 0 ? n + e : n; ++i < e; ) t.push(i);
                  return t;
                }),
              },
            }),
          (x.pseudos.nth = x.pseudos.eq);
        for (S in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0,
        })
          x.pseudos[S] = a(S);
        for (S in { submit: !0, reset: !0 }) x.pseudos[S] = l(S);
        return (
          (p.prototype = x.filters = x.pseudos),
          (x.setFilters = new p()),
          (C = e.tokenize =
            function (t, n) {
              var i,
                r,
                o,
                s,
                a,
                l,
                u,
                c = V[t + " "];
              if (c) return n ? 0 : c.slice(0);
              for (a = t, l = [], u = x.preFilter; a; ) {
                (i && !(r = ut.exec(a))) ||
                  (r && (a = a.slice(r[0].length) || a), l.push((o = []))),
                  (i = !1),
                  (r = ct.exec(a)) &&
                    ((i = r.shift()),
                    o.push({ value: i, type: r[0].replace(lt, " ") }),
                    (a = a.slice(i.length)));
                for (s in x.filter)
                  !(r = dt[s].exec(a)) ||
                    (u[s] && !(r = u[s](r))) ||
                    ((i = r.shift()),
                    o.push({ value: i, type: s, matches: r }),
                    (a = a.slice(i.length)));
                if (!i) break;
              }
              return n ? a.length : a ? e.error(t) : V(t, l).slice(0);
            }),
          (R = e.compile =
            function (t, e) {
              var n,
                i = [],
                r = [],
                o = Y[t + " "];
              if (!o) {
                for (e || (e = C(t)), n = e.length; n--; )
                  (o = v(e[n])), o[q] ? i.push(o) : r.push(o);
                (o = Y(t, w(r, i))), (o.selector = t);
              }
              return o;
            }),
          (F = e.select =
            function (t, e, n, i) {
              var r,
                o,
                s,
                a,
                l,
                u = "function" == typeof t && t,
                c = !i && C((t = u.selector || t));
              if (((n = n || []), 1 === c.length)) {
                if (
                  ((o = c[0] = c[0].slice(0)),
                  o.length > 2 &&
                    "ID" === (s = o[0]).type &&
                    9 === e.nodeType &&
                    L &&
                    x.relative[o[1].type])
                ) {
                  if (
                    !(e = (x.find.ID(s.matches[0].replace(St, bt), e) || [])[0])
                  )
                    return n;
                  u && (e = e.parentNode),
                    (t = t.slice(o.shift().value.length));
                }
                for (
                  r = dt.needsContext.test(t) ? 0 : o.length;
                  r-- && ((s = o[r]), !x.relative[(a = s.type)]);

                )
                  if (
                    (l = x.find[a]) &&
                    (i = l(
                      s.matches[0].replace(St, bt),
                      (wt.test(o[0].type) && h(e.parentNode)) || e
                    ))
                  ) {
                    if ((o.splice(r, 1), !(t = i.length && f(o))))
                      return X.apply(n, i), n;
                    break;
                  }
              }
              return (
                (u || R(t, c))(
                  i,
                  e,
                  !L,
                  n,
                  !e || (wt.test(t) && h(e.parentNode)) || e
                ),
                n
              );
            }),
          (b.sortStable = q.split("").sort(z).join("") === q),
          (b.detectDuplicates = !!O),
          k(),
          (b.sortDetached = r(function (t) {
            return 1 & t.compareDocumentPosition(A.createElement("fieldset"));
          })),
          r(function (t) {
            return (
              (t.innerHTML = "<a href='#'></a>"),
              "#" === t.firstChild.getAttribute("href")
            );
          }) ||
            o("type|href|height|width", function (t, e, n) {
              if (!n)
                return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
            }),
          (b.attributes &&
            r(function (t) {
              return (
                (t.innerHTML = "<input/>"),
                t.firstChild.setAttribute("value", ""),
                "" === t.firstChild.getAttribute("value")
              );
            })) ||
            o("value", function (t, e, n) {
              if (!n && "input" === t.nodeName.toLowerCase())
                return t.defaultValue;
            }),
          r(function (t) {
            return null == t.getAttribute("disabled");
          }) ||
            o(nt, function (t, e, n) {
              var i;
              if (!n)
                return t[e] === !0
                  ? e.toLowerCase()
                  : (i = t.getAttributeNode(e)) && i.specified
                  ? i.value
                  : null;
            }),
          e
        );
      })(t);
    (Tt.find = Dt),
      (Tt.expr = Dt.selectors),
      (Tt.expr[":"] = Tt.expr.pseudos),
      (Tt.uniqueSort = Tt.unique = Dt.uniqueSort),
      (Tt.text = Dt.getText),
      (Tt.isXMLDoc = Dt.isXML),
      (Tt.contains = Dt.contains),
      (Tt.escapeSelector = Dt.escape);
    var Ct = function (t, e, n) {
        for (var i = [], r = n !== undefined; (t = t[e]) && 9 !== t.nodeType; )
          if (1 === t.nodeType) {
            if (r && Tt(t).is(n)) break;
            i.push(t);
          }
        return i;
      },
      Rt = function (t, e) {
        for (var n = []; t; t = t.nextSibling)
          1 === t.nodeType && t !== e && n.push(t);
        return n;
      },
      Ft = Tt.expr.match.needsContext,
      It = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    (Tt.filter = function (t, e, n) {
      var i = e[0];
      return (
        n && (t = ":not(" + t + ")"),
        1 === e.length && 1 === i.nodeType
          ? Tt.find.matchesSelector(i, t)
            ? [i]
            : []
          : Tt.find.matches(
              t,
              Tt.grep(e, function (t) {
                return 1 === t.nodeType;
              })
            )
      );
    }),
      Tt.fn.extend({
        find: function (t) {
          var e,
            n,
            i = this.length,
            r = this;
          if ("string" != typeof t)
            return this.pushStack(
              Tt(t).filter(function () {
                for (e = 0; e < i; e++) if (Tt.contains(r[e], this)) return !0;
              })
            );
          for (n = this.pushStack([]), e = 0; e < i; e++) Tt.find(t, r[e], n);
          return i > 1 ? Tt.uniqueSort(n) : n;
        },
        filter: function (t) {
          return this.pushStack(s(this, t || [], !1));
        },
        not: function (t) {
          return this.pushStack(s(this, t || [], !0));
        },
        is: function (t) {
          return !!s(
            this,
            "string" == typeof t && Ft.test(t) ? Tt(t) : t || [],
            !1
          ).length;
        },
      });
    var Mt,
      Ot = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((Tt.fn.init = function (t, e, n) {
      var i, r;
      if (!t) return this;
      if (((n = n || Mt), "string" == typeof t)) {
        if (
          !(i =
            "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
              ? [null, t, null]
              : Ot.exec(t)) ||
          (!i[1] && e)
        )
          return !e || e.jquery
            ? (e || n).find(t)
            : this.constructor(e).find(t);
        if (i[1]) {
          if (
            ((e = e instanceof Tt ? e[0] : e),
            Tt.merge(
              this,
              Tt.parseHTML(
                i[1],
                e && e.nodeType ? e.ownerDocument || e : St,
                !0
              )
            ),
            It.test(i[1]) && Tt.isPlainObject(e))
          )
            for (i in e) vt(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
          return this;
        }
        return (
          (r = St.getElementById(i[2])),
          r && ((this[0] = r), (this.length = 1)),
          this
        );
      }
      return t.nodeType
        ? ((this[0] = t), (this.length = 1), this)
        : vt(t)
        ? n.ready !== undefined
          ? n.ready(t)
          : t(Tt)
        : Tt.makeArray(t, this);
    }).prototype = Tt.fn),
      (Mt = Tt(St));
    var kt = /^(?:parents|prev(?:Until|All))/,
      At = { children: !0, contents: !0, next: !0, prev: !0 };
    Tt.fn.extend({
      has: function (t) {
        var e = Tt(t, this),
          n = e.length;
        return this.filter(function () {
          for (var t = 0; t < n; t++) if (Tt.contains(this, e[t])) return !0;
        });
      },
      closest: function (t, e) {
        var n,
          i = 0,
          r = this.length,
          o = [],
          s = "string" != typeof t && Tt(t);
        if (!Ft.test(t))
          for (; i < r; i++)
            for (n = this[i]; n && n !== e; n = n.parentNode)
              if (
                n.nodeType < 11 &&
                (s
                  ? s.index(n) > -1
                  : 1 === n.nodeType && Tt.find.matchesSelector(n, t))
              ) {
                o.push(n);
                break;
              }
        return this.pushStack(o.length > 1 ? Tt.uniqueSort(o) : o);
      },
      index: function (t) {
        return t
          ? "string" == typeof t
            ? pt.call(Tt(t), this[0])
            : pt.call(this, t.jquery ? t[0] : t)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (t, e) {
        return this.pushStack(Tt.uniqueSort(Tt.merge(this.get(), Tt(t, e))));
      },
      addBack: function (t) {
        return this.add(
          null == t ? this.prevObject : this.prevObject.filter(t)
        );
      },
    }),
      Tt.each(
        {
          parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null;
          },
          parents: function (t) {
            return Ct(t, "parentNode");
          },
          parentsUntil: function (t, e, n) {
            return Ct(t, "parentNode", n);
          },
          next: function (t) {
            return a(t, "nextSibling");
          },
          prev: function (t) {
            return a(t, "previousSibling");
          },
          nextAll: function (t) {
            return Ct(t, "nextSibling");
          },
          prevAll: function (t) {
            return Ct(t, "previousSibling");
          },
          nextUntil: function (t, e, n) {
            return Ct(t, "nextSibling", n);
          },
          prevUntil: function (t, e, n) {
            return Ct(t, "previousSibling", n);
          },
          siblings: function (t) {
            return Rt((t.parentNode || {}).firstChild, t);
          },
          children: function (t) {
            return Rt(t.firstChild);
          },
          contents: function (t) {
            return null != t.contentDocument && lt(t.contentDocument)
              ? t.contentDocument
              : (o(t, "template") && (t = t.content || t),
                Tt.merge([], t.childNodes));
          },
        },
        function (t, e) {
          Tt.fn[t] = function (n, i) {
            var r = Tt.map(this, e, n);
            return (
              "Until" !== t.slice(-5) && (i = n),
              i && "string" == typeof i && (r = Tt.filter(i, r)),
              this.length > 1 &&
                (At[t] || Tt.uniqueSort(r), kt.test(t) && r.reverse()),
              this.pushStack(r)
            );
          };
        }
      );
    var Et = /[^\x20\t\r\n\f]+/g;
    (Tt.Callbacks = function (t) {
      t = "string" == typeof t ? l(t) : Tt.extend({}, t);
      var e,
        n,
        r,
        o,
        s = [],
        a = [],
        u = -1,
        c = function () {
          for (o = o || t.once, r = e = !0; a.length; u = -1)
            for (n = a.shift(); ++u < s.length; )
              s[u].apply(n[0], n[1]) === !1 &&
                t.stopOnFalse &&
                ((u = s.length), (n = !1));
          t.memory || (n = !1), (e = !1), o && (s = n ? [] : "");
        },
        h = {
          add: function () {
            return (
              s &&
                (n && !e && ((u = s.length - 1), a.push(n)),
                (function e(n) {
                  Tt.each(n, function (n, r) {
                    vt(r)
                      ? (t.unique && h.has(r)) || s.push(r)
                      : r && r.length && "string" !== i(r) && e(r);
                  });
                })(arguments),
                n && !e && c()),
              this
            );
          },
          remove: function () {
            return (
              Tt.each(arguments, function (t, e) {
                for (var n; (n = Tt.inArray(e, s, n)) > -1; )
                  s.splice(n, 1), n <= u && u--;
              }),
              this
            );
          },
          has: function (t) {
            return t ? Tt.inArray(t, s) > -1 : s.length > 0;
          },
          empty: function () {
            return s && (s = []), this;
          },
          disable: function () {
            return (o = a = []), (s = n = ""), this;
          },
          disabled: function () {
            return !s;
          },
          lock: function () {
            return (o = a = []), n || e || (s = n = ""), this;
          },
          locked: function () {
            return !!o;
          },
          fireWith: function (t, n) {
            return (
              o ||
                ((n = n || []),
                (n = [t, n.slice ? n.slice() : n]),
                a.push(n),
                e || c()),
              this
            );
          },
          fire: function () {
            return h.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!r;
          },
        };
      return h;
    }),
      Tt.extend({
        Deferred: function (e) {
          var n = [
              [
                "notify",
                "progress",
                Tt.Callbacks("memory"),
                Tt.Callbacks("memory"),
                2,
              ],
              [
                "resolve",
                "done",
                Tt.Callbacks("once memory"),
                Tt.Callbacks("once memory"),
                0,
                "resolved",
              ],
              [
                "reject",
                "fail",
                Tt.Callbacks("once memory"),
                Tt.Callbacks("once memory"),
                1,
                "rejected",
              ],
            ],
            i = "pending",
            r = {
              state: function () {
                return i;
              },
              always: function () {
                return o.done(arguments).fail(arguments), this;
              },
              catch: function (t) {
                return r.then(null, t);
              },
              pipe: function () {
                var t = arguments;
                return Tt.Deferred(function (e) {
                  Tt.each(n, function (n, i) {
                    var r = vt(t[i[4]]) && t[i[4]];
                    o[i[1]](function () {
                      var t = r && r.apply(this, arguments);
                      t && vt(t.promise)
                        ? t
                            .promise()
                            .progress(e.notify)
                            .done(e.resolve)
                            .fail(e.reject)
                        : e[i[0] + "With"](this, r ? [t] : arguments);
                    });
                  }),
                    (t = null);
                }).promise();
              },
              then: function (e, i, r) {
                function o(e, n, i, r) {
                  return function () {
                    var a = this,
                      l = arguments,
                      h = function () {
                        var t, h;
                        if (!(e < s)) {
                          if ((t = i.apply(a, l)) === n.promise())
                            throw new TypeError("Thenable self-resolution");
                          (h =
                            t &&
                            ("object" == typeof t || "function" == typeof t) &&
                            t.then),
                            vt(h)
                              ? r
                                ? h.call(t, o(s, n, u, r), o(s, n, c, r))
                                : (s++,
                                  h.call(
                                    t,
                                    o(s, n, u, r),
                                    o(s, n, c, r),
                                    o(s, n, u, n.notifyWith)
                                  ))
                              : (i !== u && ((a = undefined), (l = [t])),
                                (r || n.resolveWith)(a, l));
                        }
                      },
                      p = r
                        ? h
                        : function () {
                            try {
                              h();
                            } catch (t) {
                              Tt.Deferred.exceptionHook &&
                                Tt.Deferred.exceptionHook(t, p.stackTrace),
                                e + 1 >= s &&
                                  (i !== c && ((a = undefined), (l = [t])),
                                  n.rejectWith(a, l));
                            }
                          };
                    e
                      ? p()
                      : (Tt.Deferred.getStackHook &&
                          (p.stackTrace = Tt.Deferred.getStackHook()),
                        t.setTimeout(p));
                  };
                }
                var s = 0;
                return Tt.Deferred(function (t) {
                  n[0][3].add(o(0, t, vt(r) ? r : u, t.notifyWith)),
                    n[1][3].add(o(0, t, vt(e) ? e : u)),
                    n[2][3].add(o(0, t, vt(i) ? i : c));
                }).promise();
              },
              promise: function (t) {
                return null != t ? Tt.extend(t, r) : r;
              },
            },
            o = {};
          return (
            Tt.each(n, function (t, e) {
              var s = e[2],
                a = e[5];
              (r[e[1]] = s.add),
                a &&
                  s.add(
                    function () {
                      i = a;
                    },
                    n[3 - t][2].disable,
                    n[3 - t][3].disable,
                    n[0][2].lock,
                    n[0][3].lock
                  ),
                s.add(e[3].fire),
                (o[e[0]] = function () {
                  return (
                    o[e[0] + "With"](this === o ? undefined : this, arguments),
                    this
                  );
                }),
                (o[e[0] + "With"] = s.fireWith);
            }),
            r.promise(o),
            e && e.call(o, o),
            o
          );
        },
        when: function (t) {
          var e = arguments.length,
            n = e,
            i = Array(n),
            r = ut.call(arguments),
            o = Tt.Deferred(),
            s = function (t) {
              return function (n) {
                (i[t] = this),
                  (r[t] = arguments.length > 1 ? ut.call(arguments) : n),
                  --e || o.resolveWith(i, r);
              };
            };
          if (
            e <= 1 &&
            (h(t, o.done(s(n)).resolve, o.reject, !e),
            "pending" === o.state() || vt(r[n] && r[n].then))
          )
            return o.then();
          for (; n--; ) h(r[n], s(n), o.reject);
          return o.promise();
        },
      });
    var Lt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (Tt.Deferred.exceptionHook = function (e, n) {
      t.console &&
        t.console.warn &&
        e &&
        Lt.test(e.name) &&
        t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n);
    }),
      (Tt.readyException = function (e) {
        t.setTimeout(function () {
          throw e;
        });
      });
    var Qt = Tt.Deferred();
    (Tt.fn.ready = function (t) {
      return (
        Qt.then(t)["catch"](function (t) {
          Tt.readyException(t);
        }),
        this
      );
    }),
      Tt.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (t) {
          (t === !0 ? --Tt.readyWait : Tt.isReady) ||
            ((Tt.isReady = !0),
            (t !== !0 && --Tt.readyWait > 0) || Qt.resolveWith(St, [Tt]));
        },
      }),
      (Tt.ready.then = Qt.then),
      "complete" === St.readyState ||
      ("loading" !== St.readyState && !St.documentElement.doScroll)
        ? t.setTimeout(Tt.ready)
        : (St.addEventListener("DOMContentLoaded", p),
          t.addEventListener("load", p));
    var Nt = function (t, e, n, r, o, s, a) {
        var l = 0,
          u = t.length,
          c = null == n;
        if ("object" === i(n)) {
          o = !0;
          for (l in n) Nt(t, e, l, n[l], !0, s, a);
        } else if (
          r !== undefined &&
          ((o = !0),
          vt(r) || (a = !0),
          c &&
            (a
              ? (e.call(t, r), (e = null))
              : ((c = e),
                (e = function (t, e, n) {
                  return c.call(Tt(t), n);
                }))),
          e)
        )
          for (; l < u; l++) e(t[l], n, a ? r : r.call(t[l], l, e(t[l], n)));
        return o ? t : c ? e.call(t) : u ? e(t[0], n) : s;
      },
      Pt = /^-ms-/,
      jt = /-([a-z])/g,
      qt = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
      };
    (y.uid = 1),
      (y.prototype = {
        cache: function (t) {
          var e = t[this.expando];
          return (
            e ||
              ((e = {}),
              qt(t) &&
                (t.nodeType
                  ? (t[this.expando] = e)
                  : Object.defineProperty(t, this.expando, {
                      value: e,
                      configurable: !0,
                    }))),
            e
          );
        },
        set: function (t, e, n) {
          var i,
            r = this.cache(t);
          if ("string" == typeof e) r[d(e)] = n;
          else for (i in e) r[d(i)] = e[i];
          return r;
        },
        get: function (t, e) {
          return e === undefined
            ? this.cache(t)
            : t[this.expando] && t[this.expando][d(e)];
        },
        access: function (t, e, n) {
          return e === undefined ||
            (e && "string" == typeof e && n === undefined)
            ? this.get(t, e)
            : (this.set(t, e, n), n !== undefined ? n : e);
        },
        remove: function (t, e) {
          var n,
            i = t[this.expando];
          if (i !== undefined) {
            if (e !== undefined) {
              Array.isArray(e)
                ? (e = e.map(d))
                : ((e = d(e)), (e = e in i ? [e] : e.match(Et) || [])),
                (n = e.length);
              for (; n--; ) delete i[e[n]];
            }
            (e === undefined || Tt.isEmptyObject(i)) &&
              (t.nodeType
                ? (t[this.expando] = undefined)
                : delete t[this.expando]);
          }
        },
        hasData: function (t) {
          var e = t[this.expando];
          return e !== undefined && !Tt.isEmptyObject(e);
        },
      });
    var $t = new y(),
      Ut = new y(),
      Ht = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Bt = /[A-Z]/g;
    Tt.extend({
      hasData: function (t) {
        return Ut.hasData(t) || $t.hasData(t);
      },
      data: function (t, e, n) {
        return Ut.access(t, e, n);
      },
      removeData: function (t, e) {
        Ut.remove(t, e);
      },
      _data: function (t, e, n) {
        return $t.access(t, e, n);
      },
      _removeData: function (t, e) {
        $t.remove(t, e);
      },
    }),
      Tt.fn.extend({
        data: function (t, e) {
          var n,
            i,
            r,
            o = this[0],
            s = o && o.attributes;
          if (t === undefined) {
            if (
              this.length &&
              ((r = Ut.get(o)), 1 === o.nodeType && !$t.get(o, "hasDataAttrs"))
            ) {
              for (n = s.length; n--; )
                s[n] &&
                  ((i = s[n].name),
                  0 === i.indexOf("data-") &&
                    ((i = d(i.slice(5))), g(o, i, r[i])));
              $t.set(o, "hasDataAttrs", !0);
            }
            return r;
          }
          return "object" == typeof t
            ? this.each(function () {
                Ut.set(this, t);
              })
            : Nt(
                this,
                function (e) {
                  var n;
                  if (o && e === undefined) {
                    if ((n = Ut.get(o, t)) !== undefined) return n;
                    if ((n = g(o, t)) !== undefined) return n;
                  } else
                    this.each(function () {
                      Ut.set(this, t, e);
                    });
                },
                null,
                e,
                arguments.length > 1,
                null,
                !0
              );
        },
        removeData: function (t) {
          return this.each(function () {
            Ut.remove(this, t);
          });
        },
      }),
      Tt.extend({
        queue: function (t, e, n) {
          var i;
          if (t)
            return (
              (e = (e || "fx") + "queue"),
              (i = $t.get(t, e)),
              n &&
                (!i || Array.isArray(n)
                  ? (i = $t.access(t, e, Tt.makeArray(n)))
                  : i.push(n)),
              i || []
            );
        },
        dequeue: function (t, e) {
          e = e || "fx";
          var n = Tt.queue(t, e),
            i = n.length,
            r = n.shift(),
            o = Tt._queueHooks(t, e),
            s = function () {
              Tt.dequeue(t, e);
            };
          "inprogress" === r && ((r = n.shift()), i--),
            r &&
              ("fx" === e && n.unshift("inprogress"),
              delete o.stop,
              r.call(t, s, o)),
            !i && o && o.empty.fire();
        },
        _queueHooks: function (t, e) {
          var n = e + "queueHooks";
          return (
            $t.get(t, n) ||
            $t.access(t, n, {
              empty: Tt.Callbacks("once memory").add(function () {
                $t.remove(t, [e + "queue", n]);
              }),
            })
          );
        },
      }),
      Tt.fn.extend({
        queue: function (t, e) {
          var n = 2;
          return (
            "string" != typeof t && ((e = t), (t = "fx"), n--),
            arguments.length < n
              ? Tt.queue(this[0], t)
              : e === undefined
              ? this
              : this.each(function () {
                  var n = Tt.queue(this, t, e);
                  Tt._queueHooks(this, t),
                    "fx" === t && "inprogress" !== n[0] && Tt.dequeue(this, t);
                })
          );
        },
        dequeue: function (t) {
          return this.each(function () {
            Tt.dequeue(this, t);
          });
        },
        clearQueue: function (t) {
          return this.queue(t || "fx", []);
        },
        promise: function (t, e) {
          var n,
            i = 1,
            r = Tt.Deferred(),
            o = this,
            s = this.length,
            a = function () {
              --i || r.resolveWith(o, [o]);
            };
          for (
            "string" != typeof t && ((e = t), (t = undefined)), t = t || "fx";
            s--;

          )
            (n = $t.get(o[s], t + "queueHooks")) &&
              n.empty &&
              (i++, n.empty.add(a));
          return a(), r.promise(e);
        },
      });
    var Vt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      Yt = new RegExp("^(?:([+-])=|)(" + Vt + ")([a-z%]*)$", "i"),
      Wt = ["Top", "Right", "Bottom", "Left"],
      zt = St.documentElement,
      Gt = function (t) {
        return Tt.contains(t.ownerDocument, t);
      },
      Kt = { composed: !0 };
    zt.getRootNode &&
      (Gt = function (t) {
        return (
          Tt.contains(t.ownerDocument, t) ||
          t.getRootNode(Kt) === t.ownerDocument
        );
      });
    var Jt = function (t, e) {
        return (
          (t = e || t),
          "none" === t.style.display ||
            ("" === t.style.display && Gt(t) && "none" === Tt.css(t, "display"))
        );
      },
      Zt = {};
    Tt.fn.extend({
      show: function () {
        return w(this, !0);
      },
      hide: function () {
        return w(this);
      },
      toggle: function (t) {
        return "boolean" == typeof t
          ? t
            ? this.show()
            : this.hide()
          : this.each(function () {
              Jt(this) ? Tt(this).show() : Tt(this).hide();
            });
      },
    });
    var Xt = /^(?:checkbox|radio)$/i,
      te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      ee = /^$|^module$|\/(?:java|ecma)script/i;
    !(function () {
      var t = St.createDocumentFragment(),
        e = t.appendChild(St.createElement("div")),
        n = St.createElement("input");
      n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        e.appendChild(n),
        (_t.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (e.innerHTML = "<textarea>x</textarea>"),
        (_t.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue),
        (e.innerHTML = "<option></option>"),
        (_t.option = !!e.lastChild);
    })();
    var ne = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
    (ne.tbody = ne.tfoot = ne.colgroup = ne.caption = ne.thead),
      (ne.th = ne.td),
      _t.option ||
        (ne.optgroup = ne.option =
          [1, "<select multiple='multiple'>", "</select>"]);
    var ie = /<|&#?\w+;/,
      re = /^key/,
      oe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      se = /^([^.]*)(?:\.(.+)|)/;
    (Tt.event = {
      global: {},
      add: function (t, e, n, i, r) {
        var o,
          s,
          a,
          l,
          u,
          c,
          h,
          p,
          f,
          d,
          y,
          m = $t.get(t);
        if (qt(t))
          for (
            n.handler && ((o = n), (n = o.handler), (r = o.selector)),
              r && Tt.find.matchesSelector(zt, r),
              n.guid || (n.guid = Tt.guid++),
              (l = m.events) || (l = m.events = Object.create(null)),
              (s = m.handle) ||
                (s = m.handle =
                  function (e) {
                    return void 0 !== Tt && Tt.event.triggered !== e.type
                      ? Tt.event.dispatch.apply(t, arguments)
                      : undefined;
                  }),
              e = (e || "").match(Et) || [""],
              u = e.length;
            u--;

          )
            (a = se.exec(e[u]) || []),
              (f = y = a[1]),
              (d = (a[2] || "").split(".").sort()),
              f &&
                ((h = Tt.event.special[f] || {}),
                (f = (r ? h.delegateType : h.bindType) || f),
                (h = Tt.event.special[f] || {}),
                (c = Tt.extend(
                  {
                    type: f,
                    origType: y,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && Tt.expr.match.needsContext.test(r),
                    namespace: d.join("."),
                  },
                  o
                )),
                (p = l[f]) ||
                  ((p = l[f] = []),
                  (p.delegateCount = 0),
                  (h.setup && h.setup.call(t, i, d, s) !== !1) ||
                    (t.addEventListener && t.addEventListener(f, s))),
                h.add &&
                  (h.add.call(t, c),
                  c.handler.guid || (c.handler.guid = n.guid)),
                r ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                (Tt.event.global[f] = !0));
      },
      remove: function (t, e, n, i, r) {
        var o,
          s,
          a,
          l,
          u,
          c,
          h,
          p,
          f,
          d,
          y,
          m = $t.hasData(t) && $t.get(t);
        if (m && (l = m.events)) {
          for (e = (e || "").match(Et) || [""], u = e.length; u--; )
            if (
              ((a = se.exec(e[u]) || []),
              (f = y = a[1]),
              (d = (a[2] || "").split(".").sort()),
              f)
            ) {
              for (
                h = Tt.event.special[f] || {},
                  f = (i ? h.delegateType : h.bindType) || f,
                  p = l[f] || [],
                  a =
                    a[2] &&
                    new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  s = o = p.length;
                o--;

              )
                (c = p[o]),
                  (!r && y !== c.origType) ||
                    (n && n.guid !== c.guid) ||
                    (a && !a.test(c.namespace)) ||
                    (i && i !== c.selector && ("**" !== i || !c.selector)) ||
                    (p.splice(o, 1),
                    c.selector && p.delegateCount--,
                    h.remove && h.remove.call(t, c));
              s &&
                !p.length &&
                ((h.teardown && h.teardown.call(t, d, m.handle) !== !1) ||
                  Tt.removeEvent(t, f, m.handle),
                delete l[f]);
            } else for (f in l) Tt.event.remove(t, f + e[u], n, i, !0);
          Tt.isEmptyObject(l) && $t.remove(t, "handle events");
        }
      },
      dispatch: function (t) {
        var e,
          n,
          i,
          r,
          o,
          s,
          a = new Array(arguments.length),
          l = Tt.event.fix(t),
          u = ($t.get(this, "events") || Object.create(null))[l.type] || [],
          c = Tt.event.special[l.type] || {};
        for (a[0] = l, e = 1; e < arguments.length; e++) a[e] = arguments[e];
        if (
          ((l.delegateTarget = this),
          !c.preDispatch || c.preDispatch.call(this, l) !== !1)
        ) {
          for (
            s = Tt.event.handlers.call(this, l, u), e = 0;
            (r = s[e++]) && !l.isPropagationStopped();

          )
            for (
              l.currentTarget = r.elem, n = 0;
              (o = r.handlers[n++]) && !l.isImmediatePropagationStopped();

            )
              (l.rnamespace &&
                o.namespace !== !1 &&
                !l.rnamespace.test(o.namespace)) ||
                ((l.handleObj = o),
                (l.data = o.data),
                (i = (
                  (Tt.event.special[o.origType] || {}).handle || o.handler
                ).apply(r.elem, a)) !== undefined &&
                  (l.result = i) === !1 &&
                  (l.preventDefault(), l.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, l), l.result;
        }
      },
      handlers: function (t, e) {
        var n,
          i,
          r,
          o,
          s,
          a = [],
          l = e.delegateCount,
          u = t.target;
        if (l && u.nodeType && !("click" === t.type && t.button >= 1))
          for (; u !== this; u = u.parentNode || this)
            if (1 === u.nodeType && ("click" !== t.type || u.disabled !== !0)) {
              for (o = [], s = {}, n = 0; n < l; n++)
                (i = e[n]),
                  (r = i.selector + " "),
                  s[r] === undefined &&
                    (s[r] = i.needsContext
                      ? Tt(r, this).index(u) > -1
                      : Tt.find(r, this, null, [u]).length),
                  s[r] && o.push(i);
              o.length && a.push({ elem: u, handlers: o });
            }
        return (
          (u = this),
          l < e.length && a.push({ elem: u, handlers: e.slice(l) }),
          a
        );
      },
      addProp: function (t, e) {
        Object.defineProperty(Tt.Event.prototype, t, {
          enumerable: !0,
          configurable: !0,
          get: vt(e)
            ? function () {
                if (this.originalEvent) return e(this.originalEvent);
              }
            : function () {
                if (this.originalEvent) return this.originalEvent[t];
              },
          set: function (e) {
            Object.defineProperty(this, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: e,
            });
          },
        });
      },
      fix: function (t) {
        return t[Tt.expando] ? t : new Tt.Event(t);
      },
      special: {
        load: { noBubble: !0 },
        click: {
          setup: function (t) {
            var e = this || t;
            return (
              Xt.test(e.type) && e.click && o(e, "input") && I(e, "click", T),
              !1
            );
          },
          trigger: function (t) {
            var e = this || t;
            return (
              Xt.test(e.type) && e.click && o(e, "input") && I(e, "click"), !0
            );
          },
          _default: function (t) {
            var e = t.target;
            return (
              (Xt.test(e.type) &&
                e.click &&
                o(e, "input") &&
                $t.get(e, "click")) ||
              o(e, "a")
            );
          },
        },
        beforeunload: {
          postDispatch: function (t) {
            t.result !== undefined &&
              t.originalEvent &&
              (t.originalEvent.returnValue = t.result);
          },
        },
      },
    }),
      (Tt.removeEvent = function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n);
      }),
      (Tt.Event = function (t, e) {
        if (!(this instanceof Tt.Event)) return new Tt.Event(t, e);
        t && t.type
          ? ((this.originalEvent = t),
            (this.type = t.type),
            (this.isDefaultPrevented =
              t.defaultPrevented ||
              (t.defaultPrevented === undefined && t.returnValue === !1)
                ? T
                : D),
            (this.target =
              t.target && 3 === t.target.nodeType
                ? t.target.parentNode
                : t.target),
            (this.currentTarget = t.currentTarget),
            (this.relatedTarget = t.relatedTarget))
          : (this.type = t),
          e && Tt.extend(this, e),
          (this.timeStamp = (t && t.timeStamp) || Date.now()),
          (this[Tt.expando] = !0);
      }),
      (Tt.Event.prototype = {
        constructor: Tt.Event,
        isDefaultPrevented: D,
        isPropagationStopped: D,
        isImmediatePropagationStopped: D,
        isSimulated: !1,
        preventDefault: function () {
          var t = this.originalEvent;
          (this.isDefaultPrevented = T),
            t && !this.isSimulated && t.preventDefault();
        },
        stopPropagation: function () {
          var t = this.originalEvent;
          (this.isPropagationStopped = T),
            t && !this.isSimulated && t.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var t = this.originalEvent;
          (this.isImmediatePropagationStopped = T),
            t && !this.isSimulated && t.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      Tt.each(
        {
          altKey: !0,
          bubbles: !0,
          cancelable: !0,
          changedTouches: !0,
          ctrlKey: !0,
          detail: !0,
          eventPhase: !0,
          metaKey: !0,
          pageX: !0,
          pageY: !0,
          shiftKey: !0,
          view: !0,
          char: !0,
          code: !0,
          charCode: !0,
          key: !0,
          keyCode: !0,
          button: !0,
          buttons: !0,
          clientX: !0,
          clientY: !0,
          offsetX: !0,
          offsetY: !0,
          pointerId: !0,
          pointerType: !0,
          screenX: !0,
          screenY: !0,
          targetTouches: !0,
          toElement: !0,
          touches: !0,
          which: function (t) {
            var e = t.button;
            return null == t.which && re.test(t.type)
              ? null != t.charCode
                ? t.charCode
                : t.keyCode
              : !t.which && e !== undefined && oe.test(t.type)
              ? 1 & e
                ? 1
                : 2 & e
                ? 3
                : 4 & e
                ? 2
                : 0
              : t.which;
          },
        },
        Tt.event.addProp
      ),
      Tt.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
        Tt.event.special[t] = {
          setup: function () {
            return I(this, t, C), !1;
          },
          trigger: function () {
            return I(this, t), !0;
          },
          delegateType: e,
        };
      }),
      Tt.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (t, e) {
          Tt.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function (t) {
              var n,
                i = this,
                r = t.relatedTarget,
                o = t.handleObj;
              return (
                (r && (r === i || Tt.contains(i, r))) ||
                  ((t.type = o.origType),
                  (n = o.handler.apply(this, arguments)),
                  (t.type = e)),
                n
              );
            },
          };
        }
      ),
      Tt.fn.extend({
        on: function (t, e, n, i) {
          return F(this, t, e, n, i);
        },
        one: function (t, e, n, i) {
          return F(this, t, e, n, i, 1);
        },
        off: function (t, e, n) {
          var i, r;
          if (t && t.preventDefault && t.handleObj)
            return (
              (i = t.handleObj),
              Tt(t.delegateTarget).off(
                i.namespace ? i.origType + "." + i.namespace : i.origType,
                i.selector,
                i.handler
              ),
              this
            );
          if ("object" == typeof t) {
            for (r in t) this.off(r, e, t[r]);
            return this;
          }
          return (
            (e !== !1 && "function" != typeof e) || ((n = e), (e = undefined)),
            n === !1 && (n = D),
            this.each(function () {
              Tt.event.remove(this, t, n, e);
            })
          );
        },
      });
    var ae = /<script|<style|<link/i,
      le = /checked\s*(?:[^=]|=\s*.checked.)/i,
      ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    Tt.extend({
      htmlPrefilter: function (t) {
        return t;
      },
      clone: function (t, e, n) {
        var i,
          r,
          o,
          s,
          a = t.cloneNode(!0),
          l = Gt(t);
        if (
          !(
            _t.noCloneChecked ||
            (1 !== t.nodeType && 11 !== t.nodeType) ||
            Tt.isXMLDoc(t)
          )
        )
          for (s = S(a), o = S(t), i = 0, r = o.length; i < r; i++)
            E(o[i], s[i]);
        if (e)
          if (n)
            for (o = o || S(t), s = s || S(a), i = 0, r = o.length; i < r; i++)
              A(o[i], s[i]);
          else A(t, a);
        return (
          (s = S(a, "script")), s.length > 0 && b(s, !l && S(t, "script")), a
        );
      },
      cleanData: function (t) {
        for (
          var e, n, i, r = Tt.event.special, o = 0;
          (n = t[o]) !== undefined;
          o++
        )
          if (qt(n)) {
            if ((e = n[$t.expando])) {
              if (e.events)
                for (i in e.events)
                  r[i] ? Tt.event.remove(n, i) : Tt.removeEvent(n, i, e.handle);
              n[$t.expando] = undefined;
            }
            n[Ut.expando] && (n[Ut.expando] = undefined);
          }
      },
    }),
      Tt.fn.extend({
        detach: function (t) {
          return Q(this, t, !0);
        },
        remove: function (t) {
          return Q(this, t);
        },
        text: function (t) {
          return Nt(
            this,
            function (t) {
              return t === undefined
                ? Tt.text(this)
                : this.empty().each(function () {
                    (1 !== this.nodeType &&
                      11 !== this.nodeType &&
                      9 !== this.nodeType) ||
                      (this.textContent = t);
                  });
            },
            null,
            t,
            arguments.length
          );
        },
        append: function () {
          return L(this, arguments, function (t) {
            (1 !== this.nodeType &&
              11 !== this.nodeType &&
              9 !== this.nodeType) ||
              M(this, t).appendChild(t);
          });
        },
        prepend: function () {
          return L(this, arguments, function (t) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var e = M(this, t);
              e.insertBefore(t, e.firstChild);
            }
          });
        },
        before: function () {
          return L(this, arguments, function (t) {
            this.parentNode && this.parentNode.insertBefore(t, this);
          });
        },
        after: function () {
          return L(this, arguments, function (t) {
            this.parentNode &&
              this.parentNode.insertBefore(t, this.nextSibling);
          });
        },
        empty: function () {
          for (var t, e = 0; null != (t = this[e]); e++)
            1 === t.nodeType && (Tt.cleanData(S(t, !1)), (t.textContent = ""));
          return this;
        },
        clone: function (t, e) {
          return (
            (t = null != t && t),
            (e = null == e ? t : e),
            this.map(function () {
              return Tt.clone(this, t, e);
            })
          );
        },
        html: function (t) {
          return Nt(
            this,
            function (t) {
              var e = this[0] || {},
                n = 0,
                i = this.length;
              if (t === undefined && 1 === e.nodeType) return e.innerHTML;
              if (
                "string" == typeof t &&
                !ae.test(t) &&
                !ne[(te.exec(t) || ["", ""])[1].toLowerCase()]
              ) {
                t = Tt.htmlPrefilter(t);
                try {
                  for (; n < i; n++)
                    (e = this[n] || {}),
                      1 === e.nodeType &&
                        (Tt.cleanData(S(e, !1)), (e.innerHTML = t));
                  e = 0;
                } catch (t) {}
              }
              e && this.empty().append(t);
            },
            null,
            t,
            arguments.length
          );
        },
        replaceWith: function () {
          var t = [];
          return L(
            this,
            arguments,
            function (e) {
              var n = this.parentNode;
              Tt.inArray(this, t) < 0 &&
                (Tt.cleanData(S(this)), n && n.replaceChild(e, this));
            },
            t
          );
        },
      }),
      Tt.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (t, e) {
          Tt.fn[t] = function (t) {
            for (var n, i = [], r = Tt(t), o = r.length - 1, s = 0; s <= o; s++)
              (n = s === o ? this : this.clone(!0)),
                Tt(r[s])[e](n),
                ht.apply(i, n.get());
            return this.pushStack(i);
          };
        }
      );
    var ce = new RegExp("^(" + Vt + ")(?!px)[a-z%]+$", "i"),
      he = function (e) {
        var n = e.ownerDocument.defaultView;
        return (n && n.opener) || (n = t), n.getComputedStyle(e);
      },
      pe = function (t, e, n) {
        var i,
          r,
          o = {};
        for (r in e) (o[r] = t.style[r]), (t.style[r] = e[r]);
        i = n.call(t);
        for (r in e) t.style[r] = o[r];
        return i;
      },
      fe = new RegExp(Wt.join("|"), "i");
    !(function () {
      function e() {
        if (c) {
          (u.style.cssText =
            "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
            (c.style.cssText =
              "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
            zt.appendChild(u).appendChild(c);
          var e = t.getComputedStyle(c);
          (i = "1%" !== e.top),
            (l = 12 === n(e.marginLeft)),
            (c.style.right = "60%"),
            (s = 36 === n(e.right)),
            (r = 36 === n(e.width)),
            (c.style.position = "absolute"),
            (o = 12 === n(c.offsetWidth / 3)),
            zt.removeChild(u),
            (c = null);
        }
      }
      function n(t) {
        return Math.round(parseFloat(t));
      }
      var i,
        r,
        o,
        s,
        a,
        l,
        u = St.createElement("div"),
        c = St.createElement("div");
      c.style &&
        ((c.style.backgroundClip = "content-box"),
        (c.cloneNode(!0).style.backgroundClip = ""),
        (_t.clearCloneStyle = "content-box" === c.style.backgroundClip),
        Tt.extend(_t, {
          boxSizingReliable: function () {
            return e(), r;
          },
          pixelBoxStyles: function () {
            return e(), s;
          },
          pixelPosition: function () {
            return e(), i;
          },
          reliableMarginLeft: function () {
            return e(), l;
          },
          scrollboxSize: function () {
            return e(), o;
          },
          reliableTrDimensions: function () {
            var e, n, i, r;
            return (
              null == a &&
                ((e = St.createElement("table")),
                (n = St.createElement("tr")),
                (i = St.createElement("div")),
                (e.style.cssText = "position:absolute;left:-11111px"),
                (n.style.height = "1px"),
                (i.style.height = "9px"),
                zt.appendChild(e).appendChild(n).appendChild(i),
                (r = t.getComputedStyle(n)),
                (a = parseInt(r.height) > 3),
                zt.removeChild(e)),
              a
            );
          },
        }));
    })();
    var de = ["Webkit", "Moz", "ms"],
      ye = St.createElement("div").style,
      me = {},
      ge = /^(none|table(?!-c[ea]).+)/,
      _e = /^--/,
      ve = { position: "absolute", visibility: "hidden", display: "block" },
      we = { letterSpacing: "0", fontWeight: "400" };
    Tt.extend({
      cssHooks: {
        opacity: {
          get: function (t, e) {
            if (e) {
              var n = N(t, "opacity");
              return "" === n ? "1" : n;
            }
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: {},
      style: function (t, e, n, i) {
        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
          var r,
            o,
            s,
            a = d(e),
            l = _e.test(e),
            u = t.style;
          if (
            (l || (e = q(a)),
            (s = Tt.cssHooks[e] || Tt.cssHooks[a]),
            n === undefined)
          )
            return s && "get" in s && (r = s.get(t, !1, i)) !== undefined
              ? r
              : u[e];
          (o = typeof n),
            "string" === o &&
              (r = Yt.exec(n)) &&
              r[1] &&
              ((n = _(t, e, r)), (o = "number")),
            null != n &&
              n === n &&
              ("number" !== o ||
                l ||
                (n += (r && r[3]) || (Tt.cssNumber[a] ? "" : "px")),
              _t.clearCloneStyle ||
                "" !== n ||
                0 !== e.indexOf("background") ||
                (u[e] = "inherit"),
              (s && "set" in s && (n = s.set(t, n, i)) === undefined) ||
                (l ? u.setProperty(e, n) : (u[e] = n)));
        }
      },
      css: function (t, e, n, i) {
        var r,
          o,
          s,
          a = d(e);
        return (
          _e.test(e) || (e = q(a)),
          (s = Tt.cssHooks[e] || Tt.cssHooks[a]),
          s && "get" in s && (r = s.get(t, !0, n)),
          r === undefined && (r = N(t, e, i)),
          "normal" === r && e in we && (r = we[e]),
          "" === n || n
            ? ((o = parseFloat(r)), n === !0 || isFinite(o) ? o || 0 : r)
            : r
        );
      },
    }),
      Tt.each(["height", "width"], function (t, e) {
        Tt.cssHooks[e] = {
          get: function (t, n, i) {
            if (n)
              return !ge.test(Tt.css(t, "display")) ||
                (t.getClientRects().length && t.getBoundingClientRect().width)
                ? H(t, e, i)
                : pe(t, ve, function () {
                    return H(t, e, i);
                  });
          },
          set: function (t, n, i) {
            var r,
              o = he(t),
              s = !_t.scrollboxSize() && "absolute" === o.position,
              a = s || i,
              l = a && "border-box" === Tt.css(t, "boxSizing", !1, o),
              u = i ? U(t, e, i, l, o) : 0;
            return (
              l &&
                s &&
                (u -= Math.ceil(
                  t["offset" + e[0].toUpperCase() + e.slice(1)] -
                    parseFloat(o[e]) -
                    U(t, e, "border", !1, o) -
                    0.5
                )),
              u &&
                (r = Yt.exec(n)) &&
                "px" !== (r[3] || "px") &&
                ((t.style[e] = n), (n = Tt.css(t, e))),
              $(t, n, u)
            );
          },
        };
      }),
      (Tt.cssHooks.marginLeft = P(_t.reliableMarginLeft, function (t, e) {
        if (e)
          return (
            (parseFloat(N(t, "marginLeft")) ||
              t.getBoundingClientRect().left -
                pe(t, { marginLeft: 0 }, function () {
                  return t.getBoundingClientRect().left;
                })) + "px"
          );
      })),
      Tt.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
        (Tt.cssHooks[t + e] = {
          expand: function (n) {
            for (
              var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n];
              i < 4;
              i++
            )
              r[t + Wt[i] + e] = o[i] || o[i - 2] || o[0];
            return r;
          },
        }),
          "margin" !== t && (Tt.cssHooks[t + e].set = $);
      }),
      Tt.fn.extend({
        css: function (t, e) {
          return Nt(
            this,
            function (t, e, n) {
              var i,
                r,
                o = {},
                s = 0;
              if (Array.isArray(e)) {
                for (i = he(t), r = e.length; s < r; s++)
                  o[e[s]] = Tt.css(t, e[s], !1, i);
                return o;
              }
              return n !== undefined ? Tt.style(t, e, n) : Tt.css(t, e);
            },
            t,
            e,
            arguments.length > 1
          );
        },
      }),
      (Tt.Tween = B),
      (B.prototype = {
        constructor: B,
        init: function (t, e, n, i, r, o) {
          (this.elem = t),
            (this.prop = n),
            (this.easing = r || Tt.easing._default),
            (this.options = e),
            (this.start = this.now = this.cur()),
            (this.end = i),
            (this.unit = o || (Tt.cssNumber[n] ? "" : "px"));
        },
        cur: function () {
          var t = B.propHooks[this.prop];
          return t && t.get ? t.get(this) : B.propHooks._default.get(this);
        },
        run: function (t) {
          var e,
            n = B.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = e =
                  Tt.easing[this.easing](
                    t,
                    this.options.duration * t,
                    0,
                    1,
                    this.options.duration
                  ))
              : (this.pos = e = t),
            (this.now = (this.end - this.start) * e + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : B.propHooks._default.set(this),
            this
          );
        },
      }),
      (B.prototype.init.prototype = B.prototype),
      (B.propHooks = {
        _default: {
          get: function (t) {
            var e;
            return 1 !== t.elem.nodeType ||
              (null != t.elem[t.prop] && null == t.elem.style[t.prop])
              ? t.elem[t.prop]
              : ((e = Tt.css(t.elem, t.prop, "")), e && "auto" !== e ? e : 0);
          },
          set: function (t) {
            Tt.fx.step[t.prop]
              ? Tt.fx.step[t.prop](t)
              : 1 !== t.elem.nodeType ||
                (!Tt.cssHooks[t.prop] && null == t.elem.style[q(t.prop)])
              ? (t.elem[t.prop] = t.now)
              : Tt.style(t.elem, t.prop, t.now + t.unit);
          },
        },
      }),
      (B.propHooks.scrollTop = B.propHooks.scrollLeft =
        {
          set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
          },
        }),
      (Tt.easing = {
        linear: function (t) {
          return t;
        },
        swing: function (t) {
          return 0.5 - Math.cos(t * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (Tt.fx = B.prototype.init),
      (Tt.fx.step = {});
    var Se,
      be,
      xe = /^(?:toggle|show|hide)$/,
      Te = /queueHooks$/;
    (Tt.Animation = Tt.extend(J, {
      tweeners: {
        "*": [
          function (t, e) {
            var n = this.createTween(t, e);
            return _(n.elem, t, Yt.exec(e), n), n;
          },
        ],
      },
      tweener: function (t, e) {
        vt(t) ? ((e = t), (t = ["*"])) : (t = t.match(Et));
        for (var n, i = 0, r = t.length; i < r; i++)
          (n = t[i]),
            (J.tweeners[n] = J.tweeners[n] || []),
            J.tweeners[n].unshift(e);
      },
      prefilters: [G],
      prefilter: function (t, e) {
        e ? J.prefilters.unshift(t) : J.prefilters.push(t);
      },
    })),
      (Tt.speed = function (t, e, n) {
        var i =
          t && "object" == typeof t
            ? Tt.extend({}, t)
            : {
                complete: n || (!n && e) || (vt(t) && t),
                duration: t,
                easing: (n && e) || (e && !vt(e) && e),
              };
        return (
          Tt.fx.off
            ? (i.duration = 0)
            : "number" != typeof i.duration &&
              (i.duration in Tt.fx.speeds
                ? (i.duration = Tt.fx.speeds[i.duration])
                : (i.duration = Tt.fx.speeds._default)),
          (null != i.queue && i.queue !== !0) || (i.queue = "fx"),
          (i.old = i.complete),
          (i.complete = function () {
            vt(i.old) && i.old.call(this), i.queue && Tt.dequeue(this, i.queue);
          }),
          i
        );
      }),
      Tt.fn.extend({
        fadeTo: function (t, e, n, i) {
          return this.filter(Jt)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: e }, t, n, i);
        },
        animate: function (t, e, n, i) {
          var r = Tt.isEmptyObject(t),
            o = Tt.speed(e, n, i),
            s = function () {
              var e = J(this, Tt.extend({}, t), o);
              (r || $t.get(this, "finish")) && e.stop(!0);
            };
          return (
            (s.finish = s),
            r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
          );
        },
        stop: function (t, e, n) {
          var i = function (t) {
            var e = t.stop;
            delete t.stop, e(n);
          };
          return (
            "string" != typeof t && ((n = e), (e = t), (t = undefined)),
            e && this.queue(t || "fx", []),
            this.each(function () {
              var e = !0,
                r = null != t && t + "queueHooks",
                o = Tt.timers,
                s = $t.get(this);
              if (r) s[r] && s[r].stop && i(s[r]);
              else for (r in s) s[r] && s[r].stop && Te.test(r) && i(s[r]);
              for (r = o.length; r--; )
                o[r].elem !== this ||
                  (null != t && o[r].queue !== t) ||
                  (o[r].anim.stop(n), (e = !1), o.splice(r, 1));
              (!e && n) || Tt.dequeue(this, t);
            })
          );
        },
        finish: function (t) {
          return (
            t !== !1 && (t = t || "fx"),
            this.each(function () {
              var e,
                n = $t.get(this),
                i = n[t + "queue"],
                r = n[t + "queueHooks"],
                o = Tt.timers,
                s = i ? i.length : 0;
              for (
                n.finish = !0,
                  Tt.queue(this, t, []),
                  r && r.stop && r.stop.call(this, !0),
                  e = o.length;
                e--;

              )
                o[e].elem === this &&
                  o[e].queue === t &&
                  (o[e].anim.stop(!0), o.splice(e, 1));
              for (e = 0; e < s; e++)
                i[e] && i[e].finish && i[e].finish.call(this);
              delete n.finish;
            })
          );
        },
      }),
      Tt.each(["toggle", "show", "hide"], function (t, e) {
        var n = Tt.fn[e];
        Tt.fn[e] = function (t, i, r) {
          return null == t || "boolean" == typeof t
            ? n.apply(this, arguments)
            : this.animate(W(e, !0), t, i, r);
        };
      }),
      Tt.each(
        {
          slideDown: W("show"),
          slideUp: W("hide"),
          slideToggle: W("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (t, e) {
          Tt.fn[t] = function (t, n, i) {
            return this.animate(e, t, n, i);
          };
        }
      ),
      (Tt.timers = []),
      (Tt.fx.tick = function () {
        var t,
          e = 0,
          n = Tt.timers;
        for (Se = Date.now(); e < n.length; e++)
          (t = n[e])() || n[e] !== t || n.splice(e--, 1);
        n.length || Tt.fx.stop(), (Se = undefined);
      }),
      (Tt.fx.timer = function (t) {
        Tt.timers.push(t), Tt.fx.start();
      }),
      (Tt.fx.interval = 13),
      (Tt.fx.start = function () {
        be || ((be = !0), V());
      }),
      (Tt.fx.stop = function () {
        be = null;
      }),
      (Tt.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (Tt.fn.delay = function (e, n) {
        return (
          (e = Tt.fx ? Tt.fx.speeds[e] || e : e),
          (n = n || "fx"),
          this.queue(n, function (n, i) {
            var r = t.setTimeout(n, e);
            i.stop = function () {
              t.clearTimeout(r);
            };
          })
        );
      }),
      (function () {
        var t = St.createElement("input"),
          e = St.createElement("select"),
          n = e.appendChild(St.createElement("option"));
        (t.type = "checkbox"),
          (_t.checkOn = "" !== t.value),
          (_t.optSelected = n.selected),
          (t = St.createElement("input")),
          (t.value = "t"),
          (t.type = "radio"),
          (_t.radioValue = "t" === t.value);
      })();
    var De,
      Ce = Tt.expr.attrHandle;
    Tt.fn.extend({
      attr: function (t, e) {
        return Nt(this, Tt.attr, t, e, arguments.length > 1);
      },
      removeAttr: function (t) {
        return this.each(function () {
          Tt.removeAttr(this, t);
        });
      },
    }),
      Tt.extend({
        attr: function (t, e, n) {
          var i,
            r,
            o = t.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return "undefined" == typeof t.getAttribute
              ? Tt.prop(t, e, n)
              : ((1 === o && Tt.isXMLDoc(t)) ||
                  (r =
                    Tt.attrHooks[e.toLowerCase()] ||
                    (Tt.expr.match.bool.test(e) ? De : undefined)),
                n !== undefined
                  ? null === n
                    ? void Tt.removeAttr(t, e)
                    : r && "set" in r && (i = r.set(t, n, e)) !== undefined
                    ? i
                    : (t.setAttribute(e, n + ""), n)
                  : r && "get" in r && null !== (i = r.get(t, e))
                  ? i
                  : ((i = Tt.find.attr(t, e)), null == i ? undefined : i));
        },
        attrHooks: {
          type: {
            set: function (t, e) {
              if (!_t.radioValue && "radio" === e && o(t, "input")) {
                var n = t.value;
                return t.setAttribute("type", e), n && (t.value = n), e;
              }
            },
          },
        },
        removeAttr: function (t, e) {
          var n,
            i = 0,
            r = e && e.match(Et);
          if (r && 1 === t.nodeType)
            for (; (n = r[i++]); ) t.removeAttribute(n);
        },
      }),
      (De = {
        set: function (t, e, n) {
          return e === !1 ? Tt.removeAttr(t, n) : t.setAttribute(n, n), n;
        },
      }),
      Tt.each(Tt.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var n = Ce[e] || Tt.find.attr;
        Ce[e] = function (t, e, i) {
          var r,
            o,
            s = e.toLowerCase();
          return (
            i ||
              ((o = Ce[s]),
              (Ce[s] = r),
              (r = null != n(t, e, i) ? s : null),
              (Ce[s] = o)),
            r
          );
        };
      });
    var Re = /^(?:input|select|textarea|button)$/i,
      Fe = /^(?:a|area)$/i;
    Tt.fn.extend({
      prop: function (t, e) {
        return Nt(this, Tt.prop, t, e, arguments.length > 1);
      },
      removeProp: function (t) {
        return this.each(function () {
          delete this[Tt.propFix[t] || t];
        });
      },
    }),
      Tt.extend({
        prop: function (t, e, n) {
          var i,
            r,
            o = t.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return (
              (1 === o && Tt.isXMLDoc(t)) ||
                ((e = Tt.propFix[e] || e), (r = Tt.propHooks[e])),
              n !== undefined
                ? r && "set" in r && (i = r.set(t, n, e)) !== undefined
                  ? i
                  : (t[e] = n)
                : r && "get" in r && null !== (i = r.get(t, e))
                ? i
                : t[e]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (t) {
              var e = Tt.find.attr(t, "tabindex");
              return e
                ? parseInt(e, 10)
                : Re.test(t.nodeName) || (Fe.test(t.nodeName) && t.href)
                ? 0
                : -1;
            },
          },
        },
        propFix: { for: "htmlFor", class: "className" },
      }),
      _t.optSelected ||
        (Tt.propHooks.selected = {
          get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null;
          },
          set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
          },
        }),
      Tt.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          Tt.propFix[this.toLowerCase()] = this;
        }
      ),
      Tt.fn.extend({
        addClass: function (t) {
          var e,
            n,
            i,
            r,
            o,
            s,
            a,
            l = 0;
          if (vt(t))
            return this.each(function (e) {
              Tt(this).addClass(t.call(this, e, X(this)));
            });
          if (((e = tt(t)), e.length))
            for (; (n = this[l++]); )
              if (((r = X(n)), (i = 1 === n.nodeType && " " + Z(r) + " "))) {
                for (s = 0; (o = e[s++]); )
                  i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                (a = Z(i)), r !== a && n.setAttribute("class", a);
              }
          return this;
        },
        removeClass: function (t) {
          var e,
            n,
            i,
            r,
            o,
            s,
            a,
            l = 0;
          if (vt(t))
            return this.each(function (e) {
              Tt(this).removeClass(t.call(this, e, X(this)));
            });
          if (!arguments.length) return this.attr("class", "");
          if (((e = tt(t)), e.length))
            for (; (n = this[l++]); )
              if (((r = X(n)), (i = 1 === n.nodeType && " " + Z(r) + " "))) {
                for (s = 0; (o = e[s++]); )
                  for (; i.indexOf(" " + o + " ") > -1; )
                    i = i.replace(" " + o + " ", " ");
                (a = Z(i)), r !== a && n.setAttribute("class", a);
              }
          return this;
        },
        toggleClass: function (t, e) {
          var n = typeof t,
            i = "string" === n || Array.isArray(t);
          return "boolean" == typeof e && i
            ? e
              ? this.addClass(t)
              : this.removeClass(t)
            : vt(t)
            ? this.each(function (n) {
                Tt(this).toggleClass(t.call(this, n, X(this), e), e);
              })
            : this.each(function () {
                var e, r, o, s;
                if (i)
                  for (r = 0, o = Tt(this), s = tt(t); (e = s[r++]); )
                    o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                else
                  (t !== undefined && "boolean" !== n) ||
                    ((e = X(this)),
                    e && $t.set(this, "__className__", e),
                    this.setAttribute &&
                      this.setAttribute(
                        "class",
                        e || t === !1 ? "" : $t.get(this, "__className__") || ""
                      ));
              });
        },
        hasClass: function (t) {
          var e,
            n,
            i = 0;
          for (e = " " + t + " "; (n = this[i++]); )
            if (1 === n.nodeType && (" " + Z(X(n)) + " ").indexOf(e) > -1)
              return !0;
          return !1;
        },
      });
    var Ie = /\r/g;
    Tt.fn.extend({
      val: function (t) {
        var e,
          n,
          i,
          r = this[0];
        return arguments.length
          ? ((i = vt(t)),
            this.each(function (n) {
              var r;
              1 === this.nodeType &&
                ((r = i ? t.call(this, n, Tt(this).val()) : t),
                null == r
                  ? (r = "")
                  : "number" == typeof r
                  ? (r += "")
                  : Array.isArray(r) &&
                    (r = Tt.map(r, function (t) {
                      return null == t ? "" : t + "";
                    })),
                ((e =
                  Tt.valHooks[this.type] ||
                  Tt.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in e &&
                  e.set(this, r, "value") !== undefined) ||
                  (this.value = r));
            }))
          : r
          ? (e =
              Tt.valHooks[r.type] || Tt.valHooks[r.nodeName.toLowerCase()]) &&
            "get" in e &&
            (n = e.get(r, "value")) !== undefined
            ? n
            : ((n = r.value),
              "string" == typeof n ? n.replace(Ie, "") : null == n ? "" : n)
          : void 0;
      },
    }),
      Tt.extend({
        valHooks: {
          option: {
            get: function (t) {
              var e = Tt.find.attr(t, "value");
              return null != e ? e : Z(Tt.text(t));
            },
          },
          select: {
            get: function (t) {
              var e,
                n,
                i,
                r = t.options,
                s = t.selectedIndex,
                a = "select-one" === t.type,
                l = a ? null : [],
                u = a ? s + 1 : r.length;
              for (i = s < 0 ? u : a ? s : 0; i < u; i++)
                if (
                  ((n = r[i]),
                  (n.selected || i === s) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !o(n.parentNode, "optgroup")))
                ) {
                  if (((e = Tt(n).val()), a)) return e;
                  l.push(e);
                }
              return l;
            },
            set: function (t, e) {
              for (
                var n, i, r = t.options, o = Tt.makeArray(e), s = r.length;
                s--;

              )
                (i = r[s]),
                  (i.selected =
                    Tt.inArray(Tt.valHooks.option.get(i), o) > -1) && (n = !0);
              return n || (t.selectedIndex = -1), o;
            },
          },
        },
      }),
      Tt.each(["radio", "checkbox"], function () {
        (Tt.valHooks[this] = {
          set: function (t, e) {
            if (Array.isArray(e))
              return (t.checked = Tt.inArray(Tt(t).val(), e) > -1);
          },
        }),
          _t.checkOn ||
            (Tt.valHooks[this].get = function (t) {
              return null === t.getAttribute("value") ? "on" : t.value;
            });
      }),
      (_t.focusin = "onfocusin" in t);
    var Me = /^(?:focusinfocus|focusoutblur)$/,
      Oe = function (t) {
        t.stopPropagation();
      };
    Tt.extend(Tt.event, {
      trigger: function (e, n, i, r) {
        var o,
          s,
          a,
          l,
          u,
          c,
          h,
          p,
          f = [i || St],
          d = yt.call(e, "type") ? e.type : e,
          y = yt.call(e, "namespace") ? e.namespace.split(".") : [];
        if (
          ((s = p = a = i = i || St),
          3 !== i.nodeType &&
            8 !== i.nodeType &&
            !Me.test(d + Tt.event.triggered) &&
            (d.indexOf(".") > -1 &&
              ((y = d.split(".")), (d = y.shift()), y.sort()),
            (u = d.indexOf(":") < 0 && "on" + d),
            (e = e[Tt.expando]
              ? e
              : new Tt.Event(d, "object" == typeof e && e)),
            (e.isTrigger = r ? 2 : 3),
            (e.namespace = y.join(".")),
            (e.rnamespace = e.namespace
              ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (e.result = undefined),
            e.target || (e.target = i),
            (n = null == n ? [e] : Tt.makeArray(n, [e])),
            (h = Tt.event.special[d] || {}),
            r || !h.trigger || h.trigger.apply(i, n) !== !1))
        ) {
          if (!r && !h.noBubble && !wt(i)) {
            for (
              l = h.delegateType || d, Me.test(l + d) || (s = s.parentNode);
              s;
              s = s.parentNode
            )
              f.push(s), (a = s);
            a === (i.ownerDocument || St) &&
              f.push(a.defaultView || a.parentWindow || t);
          }
          for (o = 0; (s = f[o++]) && !e.isPropagationStopped(); )
            (p = s),
              (e.type = o > 1 ? l : h.bindType || d),
              (c =
                ($t.get(s, "events") || Object.create(null))[e.type] &&
                $t.get(s, "handle")),
              c && c.apply(s, n),
              (c = u && s[u]) &&
                c.apply &&
                qt(s) &&
                ((e.result = c.apply(s, n)),
                e.result === !1 && e.preventDefault());
          return (
            (e.type = d),
            r ||
              e.isDefaultPrevented() ||
              (h._default && h._default.apply(f.pop(), n) !== !1) ||
              !qt(i) ||
              (u &&
                vt(i[d]) &&
                !wt(i) &&
                ((a = i[u]),
                a && (i[u] = null),
                (Tt.event.triggered = d),
                e.isPropagationStopped() && p.addEventListener(d, Oe),
                i[d](),
                e.isPropagationStopped() && p.removeEventListener(d, Oe),
                (Tt.event.triggered = undefined),
                a && (i[u] = a))),
            e.result
          );
        }
      },
      simulate: function (t, e, n) {
        var i = Tt.extend(new Tt.Event(), n, { type: t, isSimulated: !0 });
        Tt.event.trigger(i, null, e);
      },
    }),
      Tt.fn.extend({
        trigger: function (t, e) {
          return this.each(function () {
            Tt.event.trigger(t, e, this);
          });
        },
        triggerHandler: function (t, e) {
          var n = this[0];
          if (n) return Tt.event.trigger(t, e, n, !0);
        },
      }),
      _t.focusin ||
        Tt.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
          var n = function (t) {
            Tt.event.simulate(e, t.target, Tt.event.fix(t));
          };
          Tt.event.special[e] = {
            setup: function () {
              var i = this.ownerDocument || this.document || this,
                r = $t.access(i, e);
              r || i.addEventListener(t, n, !0), $t.access(i, e, (r || 0) + 1);
            },
            teardown: function () {
              var i = this.ownerDocument || this.document || this,
                r = $t.access(i, e) - 1;
              r
                ? $t.access(i, e, r)
                : (i.removeEventListener(t, n, !0), $t.remove(i, e));
            },
          };
        });
    var ke = t.location,
      Ae = { guid: Date.now() },
      Ee = /\?/;
    Tt.parseXML = function (e) {
      var n;
      if (!e || "string" != typeof e) return null;
      try {
        n = new t.DOMParser().parseFromString(e, "text/xml");
      } catch (t) {
        n = undefined;
      }
      return (
        (n && !n.getElementsByTagName("parsererror").length) ||
          Tt.error("Invalid XML: " + e),
        n
      );
    };
    var Le = /\[\]$/,
      Qe = /\r?\n/g,
      Ne = /^(?:submit|button|image|reset|file)$/i,
      Pe = /^(?:input|select|textarea|keygen)/i;
    (Tt.param = function (t, e) {
      var n,
        i = [],
        r = function (t, e) {
          var n = vt(e) ? e() : e;
          i[i.length] =
            encodeURIComponent(t) +
            "=" +
            encodeURIComponent(null == n ? "" : n);
        };
      if (null == t) return "";
      if (Array.isArray(t) || (t.jquery && !Tt.isPlainObject(t)))
        Tt.each(t, function () {
          r(this.name, this.value);
        });
      else for (n in t) et(n, t[n], e, r);
      return i.join("&");
    }),
      Tt.fn.extend({
        serialize: function () {
          return Tt.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var t = Tt.prop(this, "elements");
            return t ? Tt.makeArray(t) : this;
          })
            .filter(function () {
              var t = this.type;
              return (
                this.name &&
                !Tt(this).is(":disabled") &&
                Pe.test(this.nodeName) &&
                !Ne.test(t) &&
                (this.checked || !Xt.test(t))
              );
            })
            .map(function (t, e) {
              var n = Tt(this).val();
              return null == n
                ? null
                : Array.isArray(n)
                ? Tt.map(n, function (t) {
                    return { name: e.name, value: t.replace(Qe, "\r\n") };
                  })
                : { name: e.name, value: n.replace(Qe, "\r\n") };
            })
            .get();
        },
      });
    var je = /%20/g,
      qe = /#.*$/,
      $e = /([?&])_=[^&]*/,
      Ue = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      He = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Be = /^(?:GET|HEAD)$/,
      Ve = /^\/\//,
      Ye = {},
      We = {},
      ze = "*/".concat("*"),
      Ge = St.createElement("a");
    (Ge.href = ke.href),
      Tt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: ke.href,
          type: "GET",
          isLocal: He.test(ke.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": ze,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
          },
          contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON",
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": Tt.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (t, e) {
          return e ? rt(rt(t, Tt.ajaxSettings), e) : rt(Tt.ajaxSettings, t);
        },
        ajaxPrefilter: nt(Ye),
        ajaxTransport: nt(We),
        ajax: function (e, n) {
          function i(e, n, i, a) {
            var u,
              p,
              f,
              w,
              S,
              b = n;
            c ||
              ((c = !0),
              l && t.clearTimeout(l),
              (r = undefined),
              (s = a || ""),
              (x.readyState = e > 0 ? 4 : 0),
              (u = (e >= 200 && e < 300) || 304 === e),
              i && (w = ot(d, x, i)),
              !u &&
                Tt.inArray("script", d.dataTypes) > -1 &&
                (d.converters["text script"] = function () {}),
              (w = st(d, w, x, u)),
              u
                ? (d.ifModified &&
                    ((S = x.getResponseHeader("Last-Modified")),
                    S && (Tt.lastModified[o] = S),
                    (S = x.getResponseHeader("etag")) && (Tt.etag[o] = S)),
                  204 === e || "HEAD" === d.type
                    ? (b = "nocontent")
                    : 304 === e
                    ? (b = "notmodified")
                    : ((b = w.state), (p = w.data), (f = w.error), (u = !f)))
                : ((f = b), (!e && b) || ((b = "error"), e < 0 && (e = 0))),
              (x.status = e),
              (x.statusText = (n || b) + ""),
              u ? g.resolveWith(y, [p, b, x]) : g.rejectWith(y, [x, b, f]),
              x.statusCode(v),
              (v = undefined),
              h &&
                m.trigger(u ? "ajaxSuccess" : "ajaxError", [x, d, u ? p : f]),
              _.fireWith(y, [x, b]),
              h &&
                (m.trigger("ajaxComplete", [x, d]),
                --Tt.active || Tt.event.trigger("ajaxStop")));
          }
          "object" == typeof e && ((n = e), (e = undefined)), (n = n || {});
          var r,
            o,
            s,
            a,
            l,
            u,
            c,
            h,
            p,
            f,
            d = Tt.ajaxSetup({}, n),
            y = d.context || d,
            m = d.context && (y.nodeType || y.jquery) ? Tt(y) : Tt.event,
            g = Tt.Deferred(),
            _ = Tt.Callbacks("once memory"),
            v = d.statusCode || {},
            w = {},
            S = {},
            b = "canceled",
            x = {
              readyState: 0,
              getResponseHeader: function (t) {
                var e;
                if (c) {
                  if (!a)
                    for (a = {}; (e = Ue.exec(s)); )
                      a[e[1].toLowerCase() + " "] = (
                        a[e[1].toLowerCase() + " "] || []
                      ).concat(e[2]);
                  e = a[t.toLowerCase() + " "];
                }
                return null == e ? null : e.join(", ");
              },
              getAllResponseHeaders: function () {
                return c ? s : null;
              },
              setRequestHeader: function (t, e) {
                return (
                  null == c &&
                    ((t = S[t.toLowerCase()] = S[t.toLowerCase()] || t),
                    (w[t] = e)),
                  this
                );
              },
              overrideMimeType: function (t) {
                return null == c && (d.mimeType = t), this;
              },
              statusCode: function (t) {
                var e;
                if (t)
                  if (c) x.always(t[x.status]);
                  else for (e in t) v[e] = [v[e], t[e]];
                return this;
              },
              abort: function (t) {
                var e = t || b;
                return r && r.abort(e), i(0, e), this;
              },
            };
          if (
            (g.promise(x),
            (d.url = ((e || d.url || ke.href) + "").replace(
              Ve,
              ke.protocol + "//"
            )),
            (d.type = n.method || n.type || d.method || d.type),
            (d.dataTypes = (d.dataType || "*").toLowerCase().match(Et) || [""]),
            null == d.crossDomain)
          ) {
            u = St.createElement("a");
            try {
              (u.href = d.url),
                (u.href = u.href),
                (d.crossDomain =
                  Ge.protocol + "//" + Ge.host != u.protocol + "//" + u.host);
            } catch (t) {
              d.crossDomain = !0;
            }
          }
          if (
            (d.data &&
              d.processData &&
              "string" != typeof d.data &&
              (d.data = Tt.param(d.data, d.traditional)),
            it(Ye, d, n, x),
            c)
          )
            return x;
          (h = Tt.event && d.global),
            h && 0 == Tt.active++ && Tt.event.trigger("ajaxStart"),
            (d.type = d.type.toUpperCase()),
            (d.hasContent = !Be.test(d.type)),
            (o = d.url.replace(qe, "")),
            d.hasContent
              ? d.data &&
                d.processData &&
                0 ===
                  (d.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (d.data = d.data.replace(je, "+"))
              : ((f = d.url.slice(o.length)),
                d.data &&
                  (d.processData || "string" == typeof d.data) &&
                  ((o += (Ee.test(o) ? "&" : "?") + d.data), delete d.data),
                d.cache === !1 &&
                  ((o = o.replace($e, "$1")),
                  (f = (Ee.test(o) ? "&" : "?") + "_=" + Ae.guid++ + f)),
                (d.url = o + f)),
            d.ifModified &&
              (Tt.lastModified[o] &&
                x.setRequestHeader("If-Modified-Since", Tt.lastModified[o]),
              Tt.etag[o] && x.setRequestHeader("If-None-Match", Tt.etag[o])),
            ((d.data && d.hasContent && d.contentType !== !1) ||
              n.contentType) &&
              x.setRequestHeader("Content-Type", d.contentType),
            x.setRequestHeader(
              "Accept",
              d.dataTypes[0] && d.accepts[d.dataTypes[0]]
                ? d.accepts[d.dataTypes[0]] +
                    ("*" !== d.dataTypes[0] ? ", " + ze + "; q=0.01" : "")
                : d.accepts["*"]
            );
          for (p in d.headers) x.setRequestHeader(p, d.headers[p]);
          if (d.beforeSend && (d.beforeSend.call(y, x, d) === !1 || c))
            return x.abort();
          if (
            ((b = "abort"),
            _.add(d.complete),
            x.done(d.success),
            x.fail(d.error),
            (r = it(We, d, n, x)))
          ) {
            if (((x.readyState = 1), h && m.trigger("ajaxSend", [x, d]), c))
              return x;
            d.async &&
              d.timeout > 0 &&
              (l = t.setTimeout(function () {
                x.abort("timeout");
              }, d.timeout));
            try {
              (c = !1), r.send(w, i);
            } catch (t) {
              if (c) throw t;
              i(-1, t);
            }
          } else i(-1, "No Transport");
          return x;
        },
        getJSON: function (t, e, n) {
          return Tt.get(t, e, n, "json");
        },
        getScript: function (t, e) {
          return Tt.get(t, undefined, e, "script");
        },
      }),
      Tt.each(["get", "post"], function (t, e) {
        Tt[e] = function (t, n, i, r) {
          return (
            vt(n) && ((r = r || i), (i = n), (n = undefined)),
            Tt.ajax(
              Tt.extend(
                { url: t, type: e, dataType: r, data: n, success: i },
                Tt.isPlainObject(t) && t
              )
            )
          );
        };
      }),
      Tt.ajaxPrefilter(function (t) {
        var e;
        for (e in t.headers)
          "content-type" === e.toLowerCase() &&
            (t.contentType = t.headers[e] || "");
      }),
      (Tt._evalUrl = function (t, e, n) {
        return Tt.ajax({
          url: t,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: { "text script": function () {} },
          dataFilter: function (t) {
            Tt.globalEval(t, e, n);
          },
        });
      }),
      Tt.fn.extend({
        wrapAll: function (t) {
          var e;
          return (
            this[0] &&
              (vt(t) && (t = t.call(this[0])),
              (e = Tt(t, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && e.insertBefore(this[0]),
              e
                .map(function () {
                  for (var t = this; t.firstElementChild; )
                    t = t.firstElementChild;
                  return t;
                })
                .append(this)),
            this
          );
        },
        wrapInner: function (t) {
          return vt(t)
            ? this.each(function (e) {
                Tt(this).wrapInner(t.call(this, e));
              })
            : this.each(function () {
                var e = Tt(this),
                  n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t);
              });
        },
        wrap: function (t) {
          var e = vt(t);
          return this.each(function (n) {
            Tt(this).wrapAll(e ? t.call(this, n) : t);
          });
        },
        unwrap: function (t) {
          return (
            this.parent(t)
              .not("body")
              .each(function () {
                Tt(this).replaceWith(this.childNodes);
              }),
            this
          );
        },
      }),
      (Tt.expr.pseudos.hidden = function (t) {
        return !Tt.expr.pseudos.visible(t);
      }),
      (Tt.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
      }),
      (Tt.ajaxSettings.xhr = function () {
        try {
          return new t.XMLHttpRequest();
        } catch (t) {}
      });
    var Ke = { 0: 200, 1223: 204 },
      Je = Tt.ajaxSettings.xhr();
    (_t.cors = !!Je && "withCredentials" in Je),
      (_t.ajax = Je = !!Je),
      Tt.ajaxTransport(function (e) {
        var n, i;
        if (_t.cors || (Je && !e.crossDomain))
          return {
            send: function (r, o) {
              var s,
                a = e.xhr();
              if (
                (a.open(e.type, e.url, e.async, e.username, e.password),
                e.xhrFields)
              )
                for (s in e.xhrFields) a[s] = e.xhrFields[s];
              e.mimeType &&
                a.overrideMimeType &&
                a.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  r["X-Requested-With"] ||
                  (r["X-Requested-With"] = "XMLHttpRequest");
              for (s in r) a.setRequestHeader(s, r[s]);
              (n = function (t) {
                return function () {
                  n &&
                    ((n =
                      i =
                      a.onload =
                      a.onerror =
                      a.onabort =
                      a.ontimeout =
                      a.onreadystatechange =
                        null),
                    "abort" === t
                      ? a.abort()
                      : "error" === t
                      ? "number" != typeof a.status
                        ? o(0, "error")
                        : o(a.status, a.statusText)
                      : o(
                          Ke[a.status] || a.status,
                          a.statusText,
                          "text" !== (a.responseType || "text") ||
                            "string" != typeof a.responseText
                            ? { binary: a.response }
                            : { text: a.responseText },
                          a.getAllResponseHeaders()
                        ));
                };
              }),
                (a.onload = n()),
                (i = a.onerror = a.ontimeout = n("error")),
                a.onabort !== undefined
                  ? (a.onabort = i)
                  : (a.onreadystatechange = function () {
                      4 === a.readyState &&
                        t.setTimeout(function () {
                          n && i();
                        });
                    }),
                (n = n("abort"));
              try {
                a.send((e.hasContent && e.data) || null);
              } catch (t) {
                if (n) throw t;
              }
            },
            abort: function () {
              n && n();
            },
          };
      }),
      Tt.ajaxPrefilter(function (t) {
        t.crossDomain && (t.contents.script = !1);
      }),
      Tt.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function (t) {
            return Tt.globalEval(t), t;
          },
        },
      }),
      Tt.ajaxPrefilter("script", function (t) {
        t.cache === undefined && (t.cache = !1),
          t.crossDomain && (t.type = "GET");
      }),
      Tt.ajaxTransport("script", function (t) {
        if (t.crossDomain || t.scriptAttrs) {
          var e, n;
          return {
            send: function (i, r) {
              (e = Tt("<script>")
                .attr(t.scriptAttrs || {})
                .prop({ charset: t.scriptCharset, src: t.url })
                .on(
                  "load error",
                  (n = function (t) {
                    e.remove(),
                      (n = null),
                      t && r("error" === t.type ? 404 : 200, t.type);
                  })
                )),
                St.head.appendChild(e[0]);
            },
            abort: function () {
              n && n();
            },
          };
        }
      });
    var Ze = [],
      Xe = /(=)\?(?=&|$)|\?\?/;
    Tt.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var t = Ze.pop() || Tt.expando + "_" + Ae.guid++;
        return (this[t] = !0), t;
      },
    }),
      Tt.ajaxPrefilter("json jsonp", function (e, n, i) {
        var r,
          o,
          s,
          a =
            e.jsonp !== !1 &&
            (Xe.test(e.url)
              ? "url"
              : "string" == typeof e.data &&
                0 ===
                  (e.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                Xe.test(e.data) &&
                "data");
        if (a || "jsonp" === e.dataTypes[0])
          return (
            (r = e.jsonpCallback =
              vt(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
            a
              ? (e[a] = e[a].replace(Xe, "$1" + r))
              : e.jsonp !== !1 &&
                (e.url += (Ee.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            (e.converters["script json"] = function () {
              return s || Tt.error(r + " was not called"), s[0];
            }),
            (e.dataTypes[0] = "json"),
            (o = t[r]),
            (t[r] = function () {
              s = arguments;
            }),
            i.always(function () {
              o === undefined ? Tt(t).removeProp(r) : (t[r] = o),
                e[r] && ((e.jsonpCallback = n.jsonpCallback), Ze.push(r)),
                s && vt(o) && o(s[0]),
                (s = o = undefined);
            }),
            "script"
          );
      }),
      (_t.createHTMLDocument = (function () {
        var t = St.implementation.createHTMLDocument("").body;
        return (
          (t.innerHTML = "<form></form><form></form>"),
          2 === t.childNodes.length
        );
      })()),
      (Tt.parseHTML = function (t, e, n) {
        if ("string" != typeof t) return [];
        "boolean" == typeof e && ((n = e), (e = !1));
        var i, r, o;
        return (
          e ||
            (_t.createHTMLDocument
              ? ((e = St.implementation.createHTMLDocument("")),
                (i = e.createElement("base")),
                (i.href = St.location.href),
                e.head.appendChild(i))
              : (e = St)),
          (r = It.exec(t)),
          (o = !n && []),
          r
            ? [e.createElement(r[1])]
            : ((r = x([t], e, o)),
              o && o.length && Tt(o).remove(),
              Tt.merge([], r.childNodes))
        );
      }),
      (Tt.fn.load = function (t, e, n) {
        var i,
          r,
          o,
          s = this,
          a = t.indexOf(" ");
        return (
          a > -1 && ((i = Z(t.slice(a))), (t = t.slice(0, a))),
          vt(e)
            ? ((n = e), (e = undefined))
            : e && "object" == typeof e && (r = "POST"),
          s.length > 0 &&
            Tt.ajax({ url: t, type: r || "GET", dataType: "html", data: e })
              .done(function (t) {
                (o = arguments),
                  s.html(i ? Tt("<div>").append(Tt.parseHTML(t)).find(i) : t);
              })
              .always(
                n &&
                  function (t, e) {
                    s.each(function () {
                      n.apply(this, o || [t.responseText, e, t]);
                    });
                  }
              ),
          this
        );
      }),
      (Tt.expr.pseudos.animated = function (t) {
        return Tt.grep(Tt.timers, function (e) {
          return t === e.elem;
        }).length;
      }),
      (Tt.offset = {
        setOffset: function (t, e, n) {
          var i,
            r,
            o,
            s,
            a,
            l,
            u,
            c = Tt.css(t, "position"),
            h = Tt(t),
            p = {};
          "static" === c && (t.style.position = "relative"),
            (a = h.offset()),
            (o = Tt.css(t, "top")),
            (l = Tt.css(t, "left")),
            (u =
              ("absolute" === c || "fixed" === c) &&
              (o + l).indexOf("auto") > -1),
            u
              ? ((i = h.position()), (s = i.top), (r = i.left))
              : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
            vt(e) && (e = e.call(t, n, Tt.extend({}, a))),
            null != e.top && (p.top = e.top - a.top + s),
            null != e.left && (p.left = e.left - a.left + r),
            "using" in e
              ? e.using.call(t, p)
              : ("number" == typeof p.top && (p.top += "px"),
                "number" == typeof p.left && (p.left += "px"),
                h.css(p));
        },
      }),
      Tt.fn.extend({
        offset: function (t) {
          if (arguments.length)
            return t === undefined
              ? this
              : this.each(function (e) {
                  Tt.offset.setOffset(this, t, e);
                });
          var e,
            n,
            i = this[0];
          return i
            ? i.getClientRects().length
              ? ((e = i.getBoundingClientRect()),
                (n = i.ownerDocument.defaultView),
                { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
              : { top: 0, left: 0 }
            : void 0;
        },
        position: function () {
          if (this[0]) {
            var t,
              e,
              n,
              i = this[0],
              r = { top: 0, left: 0 };
            if ("fixed" === Tt.css(i, "position"))
              e = i.getBoundingClientRect();
            else {
              for (
                e = this.offset(),
                  n = i.ownerDocument,
                  t = i.offsetParent || n.documentElement;
                t &&
                (t === n.body || t === n.documentElement) &&
                "static" === Tt.css(t, "position");

              )
                t = t.parentNode;
              t &&
                t !== i &&
                1 === t.nodeType &&
                ((r = Tt(t).offset()),
                (r.top += Tt.css(t, "borderTopWidth", !0)),
                (r.left += Tt.css(t, "borderLeftWidth", !0)));
            }
            return {
              top: e.top - r.top - Tt.css(i, "marginTop", !0),
              left: e.left - r.left - Tt.css(i, "marginLeft", !0),
            };
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var t = this.offsetParent;
              t && "static" === Tt.css(t, "position");

            )
              t = t.offsetParent;
            return t || zt;
          });
        },
      }),
      Tt.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (t, e) {
          var n = "pageYOffset" === e;
          Tt.fn[t] = function (i) {
            return Nt(
              this,
              function (t, i, r) {
                var o;
                if (
                  (wt(t) ? (o = t) : 9 === t.nodeType && (o = t.defaultView),
                  r === undefined)
                )
                  return o ? o[e] : t[i];
                o
                  ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset)
                  : (t[i] = r);
              },
              t,
              i,
              arguments.length
            );
          };
        }
      ),
      Tt.each(["top", "left"], function (t, e) {
        Tt.cssHooks[e] = P(_t.pixelPosition, function (t, n) {
          if (n)
            return (n = N(t, e)), ce.test(n) ? Tt(t).position()[e] + "px" : n;
        });
      }),
      Tt.each({ Height: "height", Width: "width" }, function (t, e) {
        Tt.each(
          { padding: "inner" + t, content: e, "": "outer" + t },
          function (n, i) {
            Tt.fn[i] = function (r, o) {
              var s = arguments.length && (n || "boolean" != typeof r),
                a = n || (r === !0 || o === !0 ? "margin" : "border");
              return Nt(
                this,
                function (e, n, r) {
                  var o;
                  return wt(e)
                    ? 0 === i.indexOf("outer")
                      ? e["inner" + t]
                      : e.document.documentElement["client" + t]
                    : 9 === e.nodeType
                    ? ((o = e.documentElement),
                      Math.max(
                        e.body["scroll" + t],
                        o["scroll" + t],
                        e.body["offset" + t],
                        o["offset" + t],
                        o["client" + t]
                      ))
                    : r === undefined
                    ? Tt.css(e, n, a)
                    : Tt.style(e, n, r, a);
                },
                e,
                s ? r : undefined,
                s
              );
            };
          }
        );
      }),
      Tt.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (t, e) {
          Tt.fn[e] = function (t) {
            return this.on(e, t);
          };
        }
      ),
      Tt.fn.extend({
        bind: function (t, e, n) {
          return this.on(t, null, e, n);
        },
        unbind: function (t, e) {
          return this.off(t, null, e);
        },
        delegate: function (t, e, n, i) {
          return this.on(e, t, n, i);
        },
        undelegate: function (t, e, n) {
          return 1 === arguments.length
            ? this.off(t, "**")
            : this.off(e, t || "**", n);
        },
        hover: function (t, e) {
          return this.mouseenter(t).mouseleave(e || t);
        },
      }),
      Tt.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (t, e) {
          Tt.fn[e] = function (t, n) {
            return arguments.length > 0
              ? this.on(e, null, t, n)
              : this.trigger(e);
          };
        }
      );
    var tn = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (Tt.proxy = function (t, e) {
      var n, i, r;
      return (
        "string" == typeof e && ((n = t[e]), (e = t), (t = n)),
        vt(t)
          ? ((i = ut.call(arguments, 2)),
            (r = function () {
              return t.apply(e || this, i.concat(ut.call(arguments)));
            }),
            (r.guid = t.guid = t.guid || Tt.guid++),
            r)
          : undefined
      );
    }),
      (Tt.holdReady = function (t) {
        t ? Tt.readyWait++ : Tt.ready(!0);
      }),
      (Tt.isArray = Array.isArray),
      (Tt.parseJSON = JSON.parse),
      (Tt.nodeName = o),
      (Tt.isFunction = vt),
      (Tt.isWindow = wt),
      (Tt.camelCase = d),
      (Tt.type = i),
      (Tt.now = Date.now),
      (Tt.isNumeric = function (t) {
        var e = Tt.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
      }),
      (Tt.trim = function (t) {
        return null == t ? "" : (t + "").replace(tn, "");
      }),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return Tt;
        });
    var en = t.jQuery,
      nn = t.$;
    return (
      (Tt.noConflict = function (e) {
        return (
          t.$ === Tt && (t.$ = nn), e && t.jQuery === Tt && (t.jQuery = en), Tt
        );
      }),
      void 0 === e && (t.jQuery = t.$ = Tt),
      Tt
    );
  }),
  (window.$stjq = jQuery.noConflict(!0)),
  (function (jQuery) {
    "object" != typeof JSON && (JSON = {}),
      (function () {
        "use strict";
        function f(t) {
          return t < 10 ? "0" + t : t;
        }
        function quote(t) {
          return (
            (escapable.lastIndex = 0),
            escapable.test(t)
              ? '"' +
                t.replace(escapable, function (t) {
                  var e = meta[t];
                  return "string" == typeof e
                    ? e
                    : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4);
                }) +
                '"'
              : '"' + t + '"'
          );
        }
        function str(t, e) {
          var n,
            i,
            r,
            o,
            s,
            a = gap,
            l = e[t];
          switch (
            (l &&
              "object" == typeof l &&
              "function" == typeof l.toJSON &&
              (l = l.toJSON(t)),
            "function" == typeof rep && (l = rep.call(e, t, l)),
            typeof l)
          ) {
            case "string":
              return quote(l);
            case "number":
              return isFinite(l) ? String(l) : "null";
            case "boolean":
            case "null":
              return String(l);
            case "object":
              if (!l) return "null";
              if (
                ((gap += indent),
                (s = []),
                "[object Array]" === Object.prototype.toString.apply(l))
              ) {
                for (o = l.length, n = 0; n < o; n += 1)
                  s[n] = str(n, l) || "null";
                return (
                  (r =
                    0 === s.length
                      ? "[]"
                      : gap
                      ? "[\n" + gap + s.join(",\n" + gap) + "\n" + a + "]"
                      : "[" + s.join(",") + "]"),
                  (gap = a),
                  r
                );
              }
              if (rep && "object" == typeof rep)
                for (o = rep.length, n = 0; n < o; n += 1)
                  "string" == typeof rep[n] &&
                    ((i = rep[n]),
                    (r = str(i, l)) &&
                      s.push(quote(i) + (gap ? ": " : ":") + r));
              else
                for (i in l)
                  Object.prototype.hasOwnProperty.call(l, i) &&
                    (r = str(i, l)) &&
                    s.push(quote(i) + (gap ? ": " : ":") + r);
              return (
                (r =
                  0 === s.length
                    ? "{}"
                    : gap
                    ? "{\n" + gap + s.join(",\n" + gap) + "\n" + a + "}"
                    : "{" + s.join(",") + "}"),
                (gap = a),
                r
              );
          }
        }
        "function" != typeof Date.prototype.toJSON &&
          ((Date.prototype.toJSON = function () {
            return isFinite(this.valueOf())
              ? this.getUTCFullYear() +
                  "-" +
                  f(this.getUTCMonth() + 1) +
                  "-" +
                  f(this.getUTCDate()) +
                  "T" +
                  f(this.getUTCHours()) +
                  ":" +
                  f(this.getUTCMinutes()) +
                  ":" +
                  f(this.getUTCSeconds()) +
                  "Z"
              : null;
          }),
          (String.prototype.toJSON =
            Number.prototype.toJSON =
            Boolean.prototype.toJSON =
              function () {
                return this.valueOf();
              }));
        var cx, escapable, gap, indent, meta, rep;
        "function" != typeof JSON.stringify &&
          ((escapable =
            /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g),
          (meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\",
          }),
          (JSON.stringify = function (t, e, n) {
            var i;
            if (((gap = ""), (indent = ""), "number" == typeof n))
              for (i = 0; i < n; i += 1) indent += " ";
            else "string" == typeof n && (indent = n);
            if (
              ((rep = e),
              e &&
                "function" != typeof e &&
                ("object" != typeof e || "number" != typeof e.length))
            )
              throw new Error("JSON.stringify");
            return str("", { "": t });
          })),
          "function" != typeof JSON.parse &&
            ((cx =
              /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g),
            (JSON.parse = function (text, reviver) {
              function walk(t, e) {
                var n,
                  i,
                  r = t[e];
                if (r && "object" == typeof r)
                  for (n in r)
                    Object.prototype.hasOwnProperty.call(r, n) &&
                      ((i = walk(r, n)),
                      i !== undefined ? (r[n] = i) : delete r[n]);
                return reviver.call(t, e, r);
              }
              var j;
              if (
                ((text = String(text)),
                (cx.lastIndex = 0),
                cx.test(text) &&
                  (text = text.replace(cx, function (t) {
                    return (
                      "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                    );
                  })),
                /^[\],:{}\s]*$/.test(
                  text
                    .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
                    .replace(
                      /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                      "]"
                    )
                    .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
                ))
              )
                return (
                  (j = eval("(" + text + ")")),
                  "function" == typeof reviver ? walk({ "": j }, "") : j
                );
              throw new SyntaxError("JSON.parse");
            }));
      })(),
      (function (t) {
        var e = window.Cookies,
          n = (window.Cookies = t());
        n.noConflict = function () {
          return (window.Cookies = e), n;
        };
      })(function () {
        function t() {
          for (var t = 0, e = {}; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n) e[i] = n[i];
          }
          return e;
        }
        function e(t) {
          return t.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
        }
        function n(i) {
          function r() {}
          function o(e, n, o) {
            if ("undefined" != typeof document) {
              (o = t({ path: "/" }, r.defaults, o)),
                "number" == typeof o.expires &&
                  (o.expires = new Date(1 * new Date() + 864e5 * o.expires)),
                (o.expires = o.expires ? o.expires.toUTCString() : "");
              try {
                var s = JSON.stringify(n);
                /^[\{\[]/.test(s) && (n = s);
              } catch (t) {}
              (n = i.write
                ? i.write(n, e)
                : encodeURIComponent(String(n)).replace(
                    /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                    decodeURIComponent
                  )),
                (e = encodeURIComponent(String(e))
                  .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                  .replace(/[\(\)]/g, escape));
              var a = "";
              for (var l in o)
                o[l] &&
                  ((a += "; " + l),
                  o[l] !== !0 && (a += "=" + o[l].split(";")[0]));
              var u = e + "=" + n + a;
              return this.doNotActuallySetCookie ? u : (document.cookie = u);
            }
          }
          function s(t, n) {
            if ("undefined" != typeof document) {
              for (
                var r = {},
                  o = document.cookie ? document.cookie.split("; ") : [],
                  s = 0;
                s < o.length;
                s++
              ) {
                var a = o[s].split("="),
                  l = a.slice(1).join("=");
                n || '"' !== l.charAt(0) || (l = l.slice(1, -1));
                try {
                  var u = e(a[0]);
                  if (((l = (i.read || i)(l, u) || e(l)), n))
                    try {
                      l = JSON.parse(l);
                    } catch (t) {}
                  if (((r[u] = l), t === u)) break;
                } catch (t) {}
              }
              return t ? r[t] : r;
            }
          }
          return (
            (r.set = o),
            (r.get = function (t) {
              return s(t, !1);
            }),
            (r.getJSON = function (t) {
              return s(t, !0);
            }),
            (r.remove = function (e, n) {
              o(e, "", t(n, { expires: -1 }));
            }),
            (r.cookieStringOnly = function () {
              return o.apply(
                { doNotActuallySetCookie: !0 },
                [].slice.call(arguments)
              );
            }),
            (r.defaults = {}),
            (r.withConverter = n),
            r
          );
        }
        return n(function () {});
      }),
      (function (t) {
        "use strict";
        (t._InternalSwiftype = t._InternalSwiftype || {}),
          (t._InternalSwiftype.Cookies =
            t._InternalSwiftype.Cookie || Cookies.noConflict()),
          (t._InternalSwiftype.Cookies.json = !0);
      })(window)
      /*
       * Hashcode.js 1.0.2
       * https://github.com/stuartbannerman/hashcode
       *
       * Copyright 2013 Stuart Bannerman (me@stuartbannerman.com)
       * Released under the MIT license
       *
       * Date: 07-04-2013
       */,
      (function (t) {
        t.Hashcode = (function () {
          var t = function (t) {
              var e,
                t = t.toString(),
                n = 0;
              for (e = 0; e < t.length; e++)
                n = ((n << 5) - n + t.charCodeAt(e)) & 4294967295;
              return n;
            },
            e = function (e) {
              var i = 0;
              for (var r in e)
                Object.prototype.hasOwnProperty.call(r) &&
                  (i += t(r + n(e[r])));
              return i;
            },
            n = function (n) {
              var i = { string: t, number: t, boolean: t, object: e },
                r = typeof n;
              return null != n && i[r] ? i[r](n) + t(r) : 0;
            };
          return { value: n };
        })();
      })(window),
      (function (t) {
        "use strict";
        var e = (t._InternalSwiftype = t._InternalSwiftype || {});
        (e.ClickRecord = function (t, e, n) {
          (this._resultId = t), (this._count = e), (this._last = n);
        }),
          (e.ClickRecord.fromObject = function (t) {
            return new e.ClickRecord(t.resultId, t.count, t.last);
          }),
          (e.ClickRecord.fromResultId = function (t) {
            return new e.ClickRecord(t, 0, new Date().getTime());
          });
        var n = e.ClickRecord.prototype;
        (n.getResultId = function () {
          return this._resultId;
        }),
          (n.getCount = function () {
            return this._count;
          }),
          (n.getLastClicked = function () {
            return this._last;
          }),
          (n.incrementCount = function (t) {
            this._count = this._count + (t || 1);
          }),
          (n.updateLastClicked = function (t) {
            this._last = t || new Date().getTime();
          }),
          (n.hashcode = function () {
            return Hashcode.value(this._resultId);
          }),
          (n.toObject = function () {
            return {
              resultId: this.getResultId(),
              count: this.getCount(),
              last: this.getLastClicked(),
            };
          });
      })(window),
      (function (t, e) {
        "use strict";
        var n = (t._InternalSwiftype = t._InternalSwiftype || {});
        (n.QueryRecord = function (t, e, n, i) {
          (this._legalQueryKeys = [
            "q",
            "sort_field",
            "sort_direction",
            "filters",
          ]),
            (this._query = this._sanitizeQuery(t)),
            (this._count = e),
            (this._last = n),
            (this._clickRecords = i);
        }),
          (n.QueryRecord.fromObject = function (t) {
            var i = {};
            return (
              e.each(t.clicks, function (t, e) {
                var r = n.ClickRecord.fromObject(e);
                i[t] = r;
              }),
              new n.QueryRecord(t.query, t.count, t.last, i)
            );
          }),
          (n.QueryRecord.fromQuery = function (t) {
            return new n.QueryRecord(t, 0, new Date().getTime(), {});
          });
        var i = n.QueryRecord.prototype;
        (i.getQuery = function () {
          return this._query;
        }),
          (i.getQueryString = function () {
            return this._query.q;
          }),
          (i.getCount = function () {
            return this._count;
          }),
          (i.lastExecutedAt = function () {
            return this._last;
          }),
          (i.getClickRecords = function () {
            return this._clickRecords;
          }),
          (i.getLastClickRecord = function () {
            var t = null;
            return (
              e.each(this.getClickRecords(), function (e, n) {
                (!t || n.getLastClicked() > t.getLastClicked()) && (t = n);
              }),
              t
            );
          }),
          (i.getClickResultIds = function () {
            return e.map(this.getClickRecords(), function (t) {
              return t.getResultId();
            });
          }),
          (i.registerClickByResultId = function (t) {
            var e = n.ClickRecord.fromResultId(t);
            (e = this.getClickRecords()[e.hashcode()] || e),
              e.incrementCount(),
              e.updateLastClicked(),
              (this.getClickRecords()[e.hashcode()] = e);
          }),
          (i.updateLastExecuted = function (t) {
            this._last = t || new Date().getTime();
          }),
          (i.incrementCount = function (t) {
            this._count = this._count + (t || 1);
          }),
          (i.hashcode = function () {
            return Hashcode.value(this.getQuery());
          }),
          (i.toObject = function () {
            var t = {};
            return (
              e.each(this.getClickRecords(), function (e, n) {
                t[e] = n.toObject();
              }),
              {
                query: this.getQuery(),
                count: this.getCount(),
                last: this.lastExecutedAt(),
                clicks: t,
              }
            );
          }),
          (i._sanitizeQuery = function (t) {
            var n = {};
            return (
              e.each(this._legalQueryKeys, function (e, i) {
                t[i] && (n[i] = t[i]);
              }),
              n
            );
          });
      })(window, jQuery),
      (function (t, e) {
        "use strict";
        var n = (t._InternalSwiftype = t._InternalSwiftype || {});
        (n.InstallRecord = function (t, e) {
          (this._installKey = t), (this._queryRecords = e);
        }),
          (n.InstallRecord.fromObject = function (t) {
            var i = {};
            return (
              e.each(t.queries, function (t, e) {
                i[t] = n.QueryRecord.fromObject(e);
              }),
              new n.InstallRecord(t.installKey, i)
            );
          }),
          (n.InstallRecord.fromInstallKey = function (t) {
            return new n.InstallRecord(t, {});
          });
        var i = n.InstallRecord.prototype;
        (i.getInstallKey = function () {
          return this._installKey;
        }),
          (i.registerQuery = function (t) {
            var e = this._getQueryForFullQuery(t);
            e.incrementCount(), e.updateLastExecuted();
          }),
          (i.registerClickForQuery = function (t, e) {
            this._getQueryForFullQuery(t).registerClickByResultId(e);
          }),
          (i.getMostRecentClickAndQuery = function () {
            var t = null,
              n = null;
            return (
              e.each(this.getQueryRecords(), function (i, r) {
                e.each(r.getClickRecords(), function (e, i) {
                  (null === t || i.getLastClicked() > t.getLastClicked()) &&
                    ((t = i), (n = r));
                });
              }),
              { queryRecord: n, clickRecord: t }
            );
          }),
          (i.getRecentResultIds = function () {
            var t = 10,
              n = [];
            return (
              e.each(this.getQueryRecords(), function (i, r) {
                return (
                  e.each(r.getClickResultIds(), function (e, i) {
                    return n.push(i), n.length < t;
                  }),
                  n.length < t
                );
              }),
              n
            );
          }),
          (i.getLastQueryExecutionTime = function () {
            var t = this.getLastExecutedQuery();
            return t ? t.lastExecutedAt() : 0;
          }),
          (i.getLastExecutedQuery = function () {
            var t = null;
            return (
              e.each(this.getQueryRecords(), function (e, n) {
                (null === t || t.lastExecutedAt() < n.lastExecutedAt()) &&
                  (t = n);
              }),
              t
            );
          }),
          (i.removeOldestQuery = function () {
            var t = this._getOldestQueryId();
            return (
              !!t &&
              "undefined" != typeof this.getQueryRecords()[t] &&
              (delete this.getQueryRecords()[t], !0)
            );
          }),
          (i._getOldestQueryId = function () {
            var t = this,
              n = null;
            return (
              e.each(this.getQueryRecords(), function (e, i) {
                (null === n ||
                  t.getQueryRecords()[n].lastExecutedAt() >
                    i.lastExecutedAt()) &&
                  (n = e);
              }),
              n
            );
          }),
          (i.getQueryRecords = function () {
            return this._queryRecords;
          }),
          (i.getSortedQueryRecordsByExecutedAt = function () {
            return e
              .map(this._queryRecords, function (t) {
                return t;
              })
              .sort(function (t, e) {
                return t._last - e._last;
              });
          }),
          (i.hashcode = function () {
            return Hashcode.value(this.getInstallKey());
          }),
          (i.toObject = function () {
            var t = {};
            return (
              e.each(this.getQueryRecords(), function (e, n) {
                t[e] = n.toObject();
              }),
              { installKey: this.getInstallKey(), queries: t }
            );
          }),
          (i._getQueryForFullQuery = function (t) {
            var e = new n.QueryRecord.fromQuery(t);
            return (
              (e = this._queryRecords[e.hashcode()] || e),
              (this._queryRecords[e.hashcode()] = e),
              e
            );
          });
      })(window, jQuery),
      (function (t, e) {
        "use strict";
        var n = (t._InternalSwiftype = t._InternalSwiftype || {}),
          i = t._InternalSwiftype.Cookies;
        (n.SearchHistory = function (t) {
          (this._cookieName = "st-sh"),
            (this._expires = 36135),
            (this._path = "/"),
            (this._version = 1),
            (this._maximumByteSize = 512),
            (this._installKey = t),
            this._initializeFromCookie(),
            this._migrateCookieVersionIfNeeded();
        }),
          (n.SearchHistory.forLastActiveInstall = function () {
            return new n.SearchHistory();
          }),
          (n.SearchHistory.forInstallKey = function (t) {
            return new n.SearchHistory(t);
          });
        var r = n.SearchHistory.prototype;
        (r._migrateCookieVersionIfNeeded = function () {
          this.getCookieVersion() &&
            this.getVersion() !== this.getCookieVersion() &&
            this._migrateCookieVersion(
              this.getCookieVersion(),
              this.getVersion()
            );
        }),
          (r._initializeFromCookie = function () {
            var t = this;
            if (
              ((this._st_cookies = i.getJSON(this._cookieName) || {}),
              (this._st_cookies.installRecords =
                this._st_cookies.installRecords || {}),
              (this._installRecordObjects = this._st_cookies.installRecords),
              (this._installRecords = {}),
              e.each(this._installRecordObjects, function (e, i) {
                var r = new n.InstallRecord.fromObject(i);
                t._installRecords[r.hashcode()] = r;
              }),
              this._installKey)
            ) {
              var r = new n.InstallRecord.fromInstallKey(this._installKey);
              (this._installRecords[r.hashcode()] =
                this._installRecords[r.hashcode()] || r),
                (this._activeInstallRecord =
                  this._installRecords[r.hashcode()]);
            } else
              this._activeInstallRecord = this._getLastActiveInstallRecord();
          }),
          (r.getVersion = function () {
            return this._version;
          }),
          (r.getCookieVersion = function () {
            return this._st_cookies.version;
          }),
          (r.trackQueryForActiveInstall = function (t) {
            this._activeInstallRecord.registerQuery(t), this._save();
          }),
          (r.trackClickForActiveInstall = function (t, e) {
            this._activeInstallRecord.registerClickForQuery(t, e), this._save();
          }),
          (r.getActiveInstallRecord = function () {
            return this._activeInstallRecord;
          }),
          (r._getInstallRecords = function () {
            return this._installRecords;
          }),
          (r._toObject = function () {
            var t = {};
            t.version = this._version;
            var n = {};
            return (
              e.each(this._installRecords, function (t, e) {
                n[t] = e.toObject();
              }),
              (t.installRecords = n),
              t
            );
          }),
          (r._save = function () {
            return this._enforceMaximumCookieSize()
              ? (i.set(this._cookieName, this._toObject(), this._options()), !0)
              : (this._deleteCookieAndReset(), !1);
          }),
          (r._enforceMaximumCookieSize = function () {
            for (
              var t = !0, e = 100, n = 0;
              this._currentStringifiedCookieSizeInBytes() >
              this._maximumByteSize;

            ) {
              if (!this._removeOldestQuery()) {
                t = !1;
                break;
              }
              if (n >= e) {
                t = !1;
                break;
              }
              n++;
            }
            return t;
          }),
          (r._removeOldestQuery = function () {
            var t = this._getInstallWithOldestLastQueryExecutionTime();
            return !!t && t.removeOldestQuery();
          }),
          (r._byteLength = function (t) {
            for (var e = t.length, n = t.length - 1; n >= 0; n--) {
              var i = t.charCodeAt(n);
              i > 127 && i <= 2047 ? e++ : i > 2047 && i <= 65535 && (e += 2),
                i >= 56320 && i <= 57343 && n--;
            }
            return e;
          }),
          (r._currentStringifiedCookieSizeInBytes = function () {
            var t = i.cookieStringOnly(
              this._cookieName,
              this._toObject(),
              this._options()
            );
            return this._byteLength(t);
          }),
          (r._migrateCookieVersion = function () {
            i.remove(this._cookieName, this._options());
          }),
          (r._options = function () {
            return {
              expires: this._expires,
              path: this._path,
              sameSite: "none",
              secure: !0,
            };
          }),
          (r._getInstallRecordObjects = function () {
            return (
              (this._st_cookies.installRecords =
                this._st_cookies.installRecords || {}),
              this._st_cookies.installRecords
            );
          }),
          (r._getInstallWithOldestLastQueryExecutionTime = function () {
            var t = null;
            return (
              e.each(this._getInstallRecords(), function (e, n) {
                null === t
                  ? (t = n)
                  : n.getLastQueryExecutionTime() <
                      t.getLastQueryExecutionTime() && (t = n);
              }),
              t
            );
          }),
          (r._getLastActiveInstallRecord = function () {
            var t = null;
            return (
              e.each(this._getInstallRecords(), function (e, n) {
                null === t
                  ? (t = n)
                  : n.getLastQueryExecutionTime() >
                      t.getLastQueryExecutionTime() && (t = n);
              }),
              t
            );
          }),
          (r._resetFromCookie = function () {
            this._initializeFromCookie();
          }),
          (r._deleteCookieAndReset = function () {
            i.remove(this._cookieName, this._options), this._resetFromCookie();
          });
      })(window, jQuery),
      function () {
        "use strict";
        function t(t) {
          var e,
            n,
            i,
            r,
            o = Array.prototype.slice.call(arguments, 1);
          for (e = 0, n = o.length; e < n; e += 1)
            if ((i = o[e])) for (r in i) a.call(i, r) && (t[r] = i[r]);
          return t;
        }
        function e(t, e, n) {
          (this.locales = t), (this.formats = e), (this.pluralFn = n);
        }
        function n(t) {
          this.id = t;
        }
        function i(t, e, n, i) {
          (this.id = t),
            (this.offset = e),
            (this.options = n),
            (this.pluralFn = i);
        }
        function r(t, e, n, i) {
          (this.id = t),
            (this.offset = e),
            (this.numberFormat = n),
            (this.string = i);
        }
        function o(t, e) {
          (this.id = t), (this.options = e);
        }
        function s(t, e, n) {
          var i = "string" == typeof t ? s.__parse(t) : t;
          if (!i || "messageFormatPattern" !== i.type)
            throw new TypeError(
              "A message must be provided as a String or AST."
            );
          (n = this._mergeFormats(s.formats, n)),
            u(this, "_locale", { value: this._resolveLocale(e) });
          var r = s.__localeData__[this._locale].pluralRuleFunction,
            o = this._compilePattern(i, e, n, r),
            a = this;
          this.format = function (t) {
            return a._format(o, t);
          };
        }
        var a = Object.prototype.hasOwnProperty,
          l = (function () {
            try {
              return !!Object.defineProperty({}, "a", {});
            } catch (t) {
              return !1;
            }
          })(),
          u =
            (!l && Object.prototype.__defineGetter__,
            l
              ? Object.defineProperty
              : function (t, e, n) {
                  "get" in n && t.__defineGetter__
                    ? t.__defineGetter__(e, n.get)
                    : (!a.call(t, e) || "value" in n) && (t[e] = n.value);
                }),
          c =
            Object.create ||
            function (t, e) {
              function n() {}
              var i, r;
              (n.prototype = t), (i = new n());
              for (r in e) a.call(e, r) && u(i, r, e[r]);
              return i;
            },
          h = e;
        (e.prototype.compile = function (t) {
          return (
            (this.pluralStack = []),
            (this.currentPlural = null),
            (this.pluralNumberFormat = null),
            this.compileMessage(t)
          );
        }),
          (e.prototype.compileMessage = function (t) {
            if (!t || "messageFormatPattern" !== t.type)
              throw new Error(
                'Message AST is not of type: "messageFormatPattern"'
              );
            var e,
              n,
              i,
              r = t.elements,
              o = [];
            for (e = 0, n = r.length; e < n; e += 1)
              switch (((i = r[e]), i.type)) {
                case "messageTextElement":
                  o.push(this.compileMessageText(i));
                  break;
                case "argumentElement":
                  o.push(this.compileArgument(i));
                  break;
                default:
                  throw new Error("Message element does not have a valid type");
              }
            return o;
          }),
          (e.prototype.compileMessageText = function (t) {
            return this.currentPlural && /(^|[^\\])#/g.test(t.value)
              ? (this.pluralNumberFormat ||
                  (this.pluralNumberFormat = new Intl.NumberFormat(
                    this.locales
                  )),
                new r(
                  this.currentPlural.id,
                  this.currentPlural.format.offset,
                  this.pluralNumberFormat,
                  t.value
                ))
              : t.value.replace(/\\#/g, "#");
          }),
          (e.prototype.compileArgument = function (t) {
            var e = t.format;
            if (!e) return new n(t.id);
            var r,
              s = this.formats,
              a = this.locales,
              l = this.pluralFn;
            switch (e.type) {
              case "numberFormat":
                return (
                  (r = s.number[e.style]),
                  { id: t.id, format: new Intl.NumberFormat(a, r).format }
                );
              case "dateFormat":
                return (
                  (r = s.date[e.style]),
                  { id: t.id, format: new Intl.DateTimeFormat(a, r).format }
                );
              case "timeFormat":
                return (
                  (r = s.time[e.style]),
                  { id: t.id, format: new Intl.DateTimeFormat(a, r).format }
                );
              case "pluralFormat":
                return (
                  (r = this.compileOptions(t)), new i(t.id, e.offset, r, l)
                );
              case "selectFormat":
                return (r = this.compileOptions(t)), new o(t.id, r);
              default:
                throw new Error(
                  "Message element does not have a valid format type"
                );
            }
          }),
          (e.prototype.compileOptions = function (t) {
            var e = t.format,
              n = e.options,
              i = {};
            this.pluralStack.push(this.currentPlural),
              (this.currentPlural = "pluralFormat" === e.type ? t : null);
            var r, o, s;
            for (r = 0, o = n.length; r < o; r += 1)
              (s = n[r]), (i[s.selector] = this.compileMessage(s.value));
            return (this.currentPlural = this.pluralStack.pop()), i;
          }),
          (n.prototype.format = function (t) {
            return t ? ("string" == typeof t ? t : String(t)) : "";
          }),
          (i.prototype.getOption = function (t) {
            var e = this.options;
            return e["=" + t] || e[this.pluralFn(t - this.offset)] || e.other;
          }),
          (r.prototype.format = function (t) {
            var e = this.numberFormat.format(t - this.offset);
            return this.string
              .replace(/(^|[^\\])#/g, "$1" + e)
              .replace(/\\#/g, "#");
          }),
          (o.prototype.getOption = function (t) {
            var e = this.options;
            return e[t] || e.other;
          });
        var p = (function () {
            function t(t, e) {
              function n() {
                this.constructor = t;
              }
              (n.prototype = e.prototype), (t.prototype = new n());
            }
            function e(t, e, n, i, r, o) {
              (this.message = t),
                (this.expected = e),
                (this.found = n),
                (this.offset = i),
                (this.line = r),
                (this.column = o),
                (this.name = "SyntaxError");
            }
            function n(t) {
              function n(e) {
                function n(e, n, i) {
                  var r, o;
                  for (r = n; r < i; r++)
                    (o = t.charAt(r)),
                      "\n" === o
                        ? (e.seenCR || e.line++,
                          (e.column = 1),
                          (e.seenCR = !1))
                        : "\r" === o || "\u2028" === o || "\u2029" === o
                        ? (e.line++, (e.column = 1), (e.seenCR = !0))
                        : (e.column++, (e.seenCR = !1));
                }
                return (
                  qt !== e &&
                    (qt > e &&
                      ((qt = 0), ($t = { line: 1, column: 1, seenCR: !1 })),
                    n($t, qt, e),
                    (qt = e)),
                  $t
                );
              }
              function i(t) {
                Pt < Ut || (Pt > Ut && ((Ut = Pt), (Ht = [])), Ht.push(t));
              }
              function r(i, r, o) {
                function s(t) {
                  var e = 1;
                  for (
                    t.sort(function (t, e) {
                      return t.description < e.description
                        ? -1
                        : t.description > e.description
                        ? 1
                        : 0;
                    });
                    e < t.length;

                  )
                    t[e - 1] === t[e] ? t.splice(e, 1) : e++;
                }
                function a(t, e) {
                  function n(t) {
                    function e(t) {
                      return t.charCodeAt(0).toString(16).toUpperCase();
                    }
                    return t
                      .replace(/\\/g, "\\\\")
                      .replace(/"/g, '\\"')
                      .replace(/\x08/g, "\\b")
                      .replace(/\t/g, "\\t")
                      .replace(/\n/g, "\\n")
                      .replace(/\f/g, "\\f")
                      .replace(/\r/g, "\\r")
                      .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (t) {
                        return "\\x0" + e(t);
                      })
                      .replace(/[\x10-\x1F\x80-\xFF]/g, function (t) {
                        return "\\x" + e(t);
                      })
                      .replace(/[\u0180-\u0FFF]/g, function (t) {
                        return "\\u0" + e(t);
                      })
                      .replace(/[\u1080-\uFFFF]/g, function (t) {
                        return "\\u" + e(t);
                      });
                  }
                  var i,
                    r,
                    o,
                    s = new Array(t.length);
                  for (o = 0; o < t.length; o++) s[o] = t[o].description;
                  return (
                    (i =
                      t.length > 1
                        ? s.slice(0, -1).join(", ") + " or " + s[t.length - 1]
                        : s[0]),
                    (r = e ? '"' + n(e) + '"' : "end of input"),
                    "Expected " + i + " but " + r + " found."
                  );
                }
                var l = n(o),
                  u = o < t.length ? t.charAt(o) : null;
                return (
                  null !== r && s(r),
                  new e(null !== i ? i : a(r, u), r, u, o, l.line, l.column)
                );
              }
              function o() {
                return s();
              }
              function s() {
                var t, e, n;
                for (t = Pt, e = [], n = a(); n !== F; ) e.push(n), (n = a());
                return e !== F && ((jt = t), (e = O(e))), (t = e);
              }
              function a() {
                var t;
                return (t = u()), t === F && (t = h()), t;
              }
              function l() {
                var e, n, i, r, o, s;
                if (
                  ((e = Pt),
                  (n = []),
                  (i = Pt),
                  (r = w()),
                  r !== F
                    ? ((o = D()),
                      o !== F
                        ? ((s = w()),
                          s !== F
                            ? ((r = [r, o, s]), (i = r))
                            : ((Pt = i), (i = k)))
                        : ((Pt = i), (i = k)))
                    : ((Pt = i), (i = k)),
                  i !== F)
                )
                  for (; i !== F; )
                    n.push(i),
                      (i = Pt),
                      (r = w()),
                      r !== F
                        ? ((o = D()),
                          o !== F
                            ? ((s = w()),
                              s !== F
                                ? ((r = [r, o, s]), (i = r))
                                : ((Pt = i), (i = k)))
                            : ((Pt = i), (i = k)))
                        : ((Pt = i), (i = k));
                else n = k;
                return (
                  n !== F && ((jt = e), (n = A(n))),
                  (e = n),
                  e === F &&
                    ((e = Pt),
                    (n = v()),
                    n !== F && (n = t.substring(e, Pt)),
                    (e = n)),
                  e
                );
              }
              function u() {
                var t, e;
                return (
                  (t = Pt),
                  (e = l()),
                  e !== F && ((jt = t), (e = E(e))),
                  (t = e)
                );
              }
              function c() {
                var e, n, r;
                if ((e = x()) === F) {
                  if (
                    ((e = Pt),
                    (n = []),
                    L.test(t.charAt(Pt))
                      ? ((r = t.charAt(Pt)), Pt++)
                      : ((r = F), 0 === Bt && i(Q)),
                    r !== F)
                  )
                    for (; r !== F; )
                      n.push(r),
                        L.test(t.charAt(Pt))
                          ? ((r = t.charAt(Pt)), Pt++)
                          : ((r = F), 0 === Bt && i(Q));
                  else n = k;
                  n !== F && (n = t.substring(e, Pt)), (e = n);
                }
                return e;
              }
              function h() {
                var e, n, r, o, s, a, l, u, h;
                return (
                  (e = Pt),
                  123 === t.charCodeAt(Pt)
                    ? ((n = N), Pt++)
                    : ((n = F), 0 === Bt && i(P)),
                  n !== F
                    ? ((r = w()),
                      r !== F
                        ? ((o = c()),
                          o !== F
                            ? ((s = w()),
                              s !== F
                                ? ((a = Pt),
                                  44 === t.charCodeAt(Pt)
                                    ? ((l = q), Pt++)
                                    : ((l = F), 0 === Bt && i($)),
                                  l !== F
                                    ? ((u = w()),
                                      u !== F
                                        ? ((h = p()),
                                          h !== F
                                            ? ((l = [l, u, h]), (a = l))
                                            : ((Pt = a), (a = k)))
                                        : ((Pt = a), (a = k)))
                                    : ((Pt = a), (a = k)),
                                  a === F && (a = j),
                                  a !== F
                                    ? ((l = w()),
                                      l !== F
                                        ? (125 === t.charCodeAt(Pt)
                                            ? ((u = U), Pt++)
                                            : ((u = F), 0 === Bt && i(H)),
                                          u !== F
                                            ? ((jt = e), (n = B(o, a)), (e = n))
                                            : ((Pt = e), (e = k)))
                                        : ((Pt = e), (e = k)))
                                    : ((Pt = e), (e = k)))
                                : ((Pt = e), (e = k)))
                            : ((Pt = e), (e = k)))
                        : ((Pt = e), (e = k)))
                    : ((Pt = e), (e = k)),
                  e
                );
              }
              function p() {
                var t;
                return (t = f()), t === F && (t = d()) === F && (t = y()), t;
              }
              function f() {
                var e, n, r, o, s, a, l;
                return (
                  (e = Pt),
                  t.substr(Pt, 6) === V
                    ? ((n = V), (Pt += 6))
                    : ((n = F), 0 === Bt && i(Y)),
                  n === F &&
                    (t.substr(Pt, 4) === W
                      ? ((n = W), (Pt += 4))
                      : ((n = F), 0 === Bt && i(z)),
                    n === F &&
                      (t.substr(Pt, 4) === G
                        ? ((n = G), (Pt += 4))
                        : ((n = F), 0 === Bt && i(K)))),
                  n !== F
                    ? ((r = w()),
                      r !== F
                        ? ((o = Pt),
                          44 === t.charCodeAt(Pt)
                            ? ((s = q), Pt++)
                            : ((s = F), 0 === Bt && i($)),
                          s !== F
                            ? ((a = w()),
                              a !== F
                                ? ((l = D()),
                                  l !== F
                                    ? ((s = [s, a, l]), (o = s))
                                    : ((Pt = o), (o = k)))
                                : ((Pt = o), (o = k)))
                            : ((Pt = o), (o = k)),
                          o === F && (o = j),
                          o !== F
                            ? ((jt = e), (n = J(n, o)), (e = n))
                            : ((Pt = e), (e = k)))
                        : ((Pt = e), (e = k)))
                    : ((Pt = e), (e = k)),
                  e
                );
              }
              function d() {
                var e, n, r, o, s, a;
                if (
                  ((e = Pt),
                  t.substr(Pt, 6) === Z
                    ? ((n = Z), (Pt += 6))
                    : ((n = F), 0 === Bt && i(X)),
                  n !== F)
                )
                  if (w() !== F)
                    if (
                      (44 === t.charCodeAt(Pt)
                        ? ((r = q), Pt++)
                        : ((r = F), 0 === Bt && i($)),
                      r !== F)
                    )
                      if (w() !== F)
                        if (((o = _()), o === F && (o = j), o !== F))
                          if (w() !== F) {
                            if (((s = []), (a = g()) !== F))
                              for (; a !== F; ) s.push(a), (a = g());
                            else s = k;
                            s !== F
                              ? ((jt = e), (n = tt(o, s)), (e = n))
                              : ((Pt = e), (e = k));
                          } else (Pt = e), (e = k);
                        else (Pt = e), (e = k);
                      else (Pt = e), (e = k);
                    else (Pt = e), (e = k);
                  else (Pt = e), (e = k);
                else (Pt = e), (e = k);
                return e;
              }
              function y() {
                var e, n, r, o, s;
                if (
                  ((e = Pt),
                  t.substr(Pt, 6) === et
                    ? ((n = et), (Pt += 6))
                    : ((n = F), 0 === Bt && i(nt)),
                  n !== F)
                )
                  if (w() !== F)
                    if (
                      (44 === t.charCodeAt(Pt)
                        ? ((r = q), Pt++)
                        : ((r = F), 0 === Bt && i($)),
                      r !== F)
                    )
                      if (w() !== F) {
                        if (((o = []), (s = g()) !== F))
                          for (; s !== F; ) o.push(s), (s = g());
                        else o = k;
                        o !== F
                          ? ((jt = e), (n = it(o)), (e = n))
                          : ((Pt = e), (e = k));
                      } else (Pt = e), (e = k);
                    else (Pt = e), (e = k);
                  else (Pt = e), (e = k);
                else (Pt = e), (e = k);
                return e;
              }
              function m() {
                var e, n, r, o;
                return (
                  (e = Pt),
                  (n = Pt),
                  61 === t.charCodeAt(Pt)
                    ? ((r = rt), Pt++)
                    : ((r = F), 0 === Bt && i(ot)),
                  r !== F
                    ? ((o = x()),
                      o !== F ? ((r = [r, o]), (n = r)) : ((Pt = n), (n = k)))
                    : ((Pt = n), (n = k)),
                  n !== F && (n = t.substring(e, Pt)),
                  (e = n),
                  e === F && (e = D()),
                  e
                );
              }
              function g() {
                var e, n, r, o, a, l, u, c, h;
                return (
                  (e = Pt),
                  (n = w()),
                  n !== F
                    ? ((r = m()),
                      r !== F
                        ? ((o = w()),
                          o !== F
                            ? (123 === t.charCodeAt(Pt)
                                ? ((a = N), Pt++)
                                : ((a = F), 0 === Bt && i(P)),
                              a !== F
                                ? ((l = w()),
                                  l !== F
                                    ? ((u = s()),
                                      u !== F
                                        ? ((c = w()),
                                          c !== F
                                            ? (125 === t.charCodeAt(Pt)
                                                ? ((h = U), Pt++)
                                                : ((h = F), 0 === Bt && i(H)),
                                              h !== F
                                                ? ((jt = e),
                                                  (n = st(r, u)),
                                                  (e = n))
                                                : ((Pt = e), (e = k)))
                                            : ((Pt = e), (e = k)))
                                        : ((Pt = e), (e = k)))
                                    : ((Pt = e), (e = k)))
                                : ((Pt = e), (e = k)))
                            : ((Pt = e), (e = k)))
                        : ((Pt = e), (e = k)))
                    : ((Pt = e), (e = k)),
                  e
                );
              }
              function _() {
                var e, n, r, o;
                return (
                  (e = Pt),
                  t.substr(Pt, 7) === at
                    ? ((n = at), (Pt += 7))
                    : ((n = F), 0 === Bt && i(lt)),
                  n !== F
                    ? ((r = w()),
                      r !== F
                        ? ((o = x()),
                          o !== F
                            ? ((jt = e), (n = ut(o)), (e = n))
                            : ((Pt = e), (e = k)))
                        : ((Pt = e), (e = k)))
                    : ((Pt = e), (e = k)),
                  e
                );
              }
              function v() {
                var e, n;
                if (
                  (Bt++,
                  (e = []),
                  ht.test(t.charAt(Pt))
                    ? ((n = t.charAt(Pt)), Pt++)
                    : ((n = F), 0 === Bt && i(pt)),
                  n !== F)
                )
                  for (; n !== F; )
                    e.push(n),
                      ht.test(t.charAt(Pt))
                        ? ((n = t.charAt(Pt)), Pt++)
                        : ((n = F), 0 === Bt && i(pt));
                else e = k;
                return Bt--, e === F && ((n = F), 0 === Bt && i(ct)), e;
              }
              function w() {
                var e, n, r;
                for (Bt++, e = Pt, n = [], r = v(); r !== F; )
                  n.push(r), (r = v());
                return (
                  n !== F && (n = t.substring(e, Pt)),
                  (e = n),
                  Bt--,
                  e === F && ((n = F), 0 === Bt && i(ft)),
                  e
                );
              }
              function S() {
                var e;
                return (
                  dt.test(t.charAt(Pt))
                    ? ((e = t.charAt(Pt)), Pt++)
                    : ((e = F), 0 === Bt && i(yt)),
                  e
                );
              }
              function b() {
                var e;
                return (
                  mt.test(t.charAt(Pt))
                    ? ((e = t.charAt(Pt)), Pt++)
                    : ((e = F), 0 === Bt && i(gt)),
                  e
                );
              }
              function x() {
                var e, n, r, o, s, a;
                if (
                  ((e = Pt),
                  48 === t.charCodeAt(Pt)
                    ? ((n = _t), Pt++)
                    : ((n = F), 0 === Bt && i(vt)),
                  n === F)
                ) {
                  if (
                    ((n = Pt),
                    (r = Pt),
                    wt.test(t.charAt(Pt))
                      ? ((o = t.charAt(Pt)), Pt++)
                      : ((o = F), 0 === Bt && i(St)),
                    o !== F)
                  ) {
                    for (s = [], a = S(); a !== F; ) s.push(a), (a = S());
                    s !== F ? ((o = [o, s]), (r = o)) : ((Pt = r), (r = k));
                  } else (Pt = r), (r = k);
                  r !== F && (r = t.substring(n, Pt)), (n = r);
                }
                return n !== F && ((jt = e), (n = bt(n))), (e = n);
              }
              function T() {
                var e, n, r, o, s, a, l, u;
                return (
                  xt.test(t.charAt(Pt))
                    ? ((e = t.charAt(Pt)), Pt++)
                    : ((e = F), 0 === Bt && i(Tt)),
                  e === F &&
                    ((e = Pt),
                    t.substr(Pt, 2) === Dt
                      ? ((n = Dt), (Pt += 2))
                      : ((n = F), 0 === Bt && i(Ct)),
                    n !== F && ((jt = e), (n = Rt())),
                    (e = n) === F &&
                      ((e = Pt),
                      t.substr(Pt, 2) === Ft
                        ? ((n = Ft), (Pt += 2))
                        : ((n = F), 0 === Bt && i(It)),
                      n !== F && ((jt = e), (n = Mt())),
                      (e = n) === F &&
                        ((e = Pt),
                        t.substr(Pt, 2) === Ot
                          ? ((n = Ot), (Pt += 2))
                          : ((n = F), 0 === Bt && i(kt)),
                        n !== F && ((jt = e), (n = At())),
                        (e = n) === F &&
                          ((e = Pt),
                          t.substr(Pt, 2) === Et
                            ? ((n = Et), (Pt += 2))
                            : ((n = F), 0 === Bt && i(Lt)),
                          n !== F
                            ? ((r = Pt),
                              (o = Pt),
                              (s = b()),
                              s !== F
                                ? ((a = b()),
                                  a !== F
                                    ? ((l = b()),
                                      l !== F
                                        ? ((u = b()),
                                          u !== F
                                            ? ((s = [s, a, l, u]), (o = s))
                                            : ((Pt = o), (o = k)))
                                        : ((Pt = o), (o = k)))
                                    : ((Pt = o), (o = k)))
                                : ((Pt = o), (o = k)),
                              o !== F && (o = t.substring(r, Pt)),
                              (r = o),
                              r !== F
                                ? ((jt = e), (n = Qt(r)), (e = n))
                                : ((Pt = e), (e = k)))
                            : ((Pt = e), (e = k)))))),
                  e
                );
              }
              function D() {
                var t, e, n;
                if (((t = Pt), (e = []), (n = T()) !== F))
                  for (; n !== F; ) e.push(n), (n = T());
                else e = k;
                return e !== F && ((jt = t), (e = Nt(e))), (t = e);
              }
              var C,
                R = arguments.length > 1 ? arguments[1] : {},
                F = {},
                I = { start: o },
                M = o,
                O = function (t) {
                  return { type: "messageFormatPattern", elements: t };
                },
                k = F,
                A = function (t) {
                  var e,
                    n,
                    i,
                    r,
                    o,
                    s = "";
                  for (e = 0, i = t.length; e < i; e += 1)
                    for (r = t[e], n = 0, o = r.length; n < o; n += 1)
                      s += r[n];
                  return s;
                },
                E = function (t) {
                  return { type: "messageTextElement", value: t };
                },
                L = /^[^ \t\n\r,.+={}#]/,
                Q = {
                  type: "class",
                  value: "[^ \\t\\n\\r,.+={}#]",
                  description: "[^ \\t\\n\\r,.+={}#]",
                },
                N = "{",
                P = { type: "literal", value: "{", description: '"{"' },
                j = null,
                q = ",",
                $ = { type: "literal", value: ",", description: '","' },
                U = "}",
                H = { type: "literal", value: "}", description: '"}"' },
                B = function (t, e) {
                  return { type: "argumentElement", id: t, format: e && e[2] };
                },
                V = "number",
                Y = {
                  type: "literal",
                  value: "number",
                  description: '"number"',
                },
                W = "date",
                z = { type: "literal", value: "date", description: '"date"' },
                G = "time",
                K = { type: "literal", value: "time", description: '"time"' },
                J = function (t, e) {
                  return { type: t + "Format", style: e && e[2] };
                },
                Z = "plural",
                X = {
                  type: "literal",
                  value: "plural",
                  description: '"plural"',
                },
                tt = function (t, e) {
                  return { type: "pluralFormat", offset: t || 0, options: e };
                },
                et = "select",
                nt = {
                  type: "literal",
                  value: "select",
                  description: '"select"',
                },
                it = function (t) {
                  return { type: "selectFormat", options: t };
                },
                rt = "=",
                ot = { type: "literal", value: "=", description: '"="' },
                st = function (t, e) {
                  return {
                    type: "optionalFormatPattern",
                    selector: t,
                    value: e,
                  };
                },
                at = "offset:",
                lt = {
                  type: "literal",
                  value: "offset:",
                  description: '"offset:"',
                },
                ut = function (t) {
                  return t;
                },
                ct = { type: "other", description: "whitespace" },
                ht = /^[ \t\n\r]/,
                pt = {
                  type: "class",
                  value: "[ \\t\\n\\r]",
                  description: "[ \\t\\n\\r]",
                },
                ft = { type: "other", description: "optionalWhitespace" },
                dt = /^[0-9]/,
                yt = { type: "class", value: "[0-9]", description: "[0-9]" },
                mt = /^[0-9a-f]/i,
                gt = {
                  type: "class",
                  value: "[0-9a-f]i",
                  description: "[0-9a-f]i",
                },
                _t = "0",
                vt = { type: "literal", value: "0", description: '"0"' },
                wt = /^[1-9]/,
                St = { type: "class", value: "[1-9]", description: "[1-9]" },
                bt = function (t) {
                  return parseInt(t, 10);
                },
                xt = /^[^{}\\\0-\x1F\x7f \t\n\r]/,
                Tt = {
                  type: "class",
                  value: "[^{}\\\\\\0-\\x1F\x7f \\t\\n\\r]",
                  description: "[^{}\\\\\\0-\\x1F\x7f \\t\\n\\r]",
                },
                Dt = "\\#",
                Ct = { type: "literal", value: "\\#", description: '"\\\\#"' },
                Rt = function () {
                  return "\\#";
                },
                Ft = "\\{",
                It = { type: "literal", value: "\\{", description: '"\\\\{"' },
                Mt = function () {
                  return "{";
                },
                Ot = "\\}",
                kt = { type: "literal", value: "\\}", description: '"\\\\}"' },
                At = function () {
                  return "}";
                },
                Et = "\\u",
                Lt = { type: "literal", value: "\\u", description: '"\\\\u"' },
                Qt = function (t) {
                  return String.fromCharCode(parseInt(t, 16));
                },
                Nt = function (t) {
                  return t.join("");
                },
                Pt = 0,
                jt = 0,
                qt = 0,
                $t = { line: 1, column: 1, seenCR: !1 },
                Ut = 0,
                Ht = [],
                Bt = 0;
              if ("startRule" in R) {
                if (!(R.startRule in I))
                  throw new Error(
                    "Can't start parsing from rule \"" + R.startRule + '".'
                  );
                M = I[R.startRule];
              }
              if ((C = M()) !== F && Pt === t.length) return C;
              throw (
                (C !== F &&
                  Pt < t.length &&
                  i({ type: "end", description: "end of input" }),
                r(null, Ht, Ut))
              );
            }
            return t(e, Error), { SyntaxError: e, parse: n };
          })(),
          f = s;
        u(s, "formats", {
          enumerable: !0,
          value: {
            number: {
              currency: { style: "currency" },
              percent: { style: "percent" },
            },
            date: {
              short: { month: "numeric", day: "numeric", year: "2-digit" },
              medium: { month: "short", day: "numeric", year: "numeric" },
              long: { month: "long", day: "numeric", year: "numeric" },
              full: {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              },
            },
            time: {
              short: { hour: "numeric", minute: "numeric" },
              medium: { hour: "numeric", minute: "numeric", second: "numeric" },
              long: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                timeZoneName: "short",
              },
              full: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                timeZoneName: "short",
              },
            },
          },
        }),
          u(s, "__localeData__", { value: c(null) }),
          u(s, "__addLocaleData", {
            value: function (t) {
              if (!t || !t.locale)
                throw new Error(
                  "Locale data provided to IntlMessageFormat is missing a `locale` property"
                );
              if (!t.pluralRuleFunction)
                throw new Error(
                  "Locale data provided to IntlMessageFormat is missing a `pluralRuleFunction` property"
                );
              var e = t.locale.toLowerCase().split("-")[0];
              s.__localeData__[e] = t;
            },
          }),
          u(s, "__parse", { value: p.parse }),
          u(s, "defaultLocale", {
            enumerable: !0,
            writable: !0,
            value: undefined,
          }),
          (s.prototype.resolvedOptions = function () {
            return { locale: this._locale };
          }),
          (s.prototype._compilePattern = function (t, e, n, i) {
            return new h(e, n, i).compile(t);
          }),
          (s.prototype._format = function (t, e) {
            var n,
              i,
              r,
              o,
              s,
              l = "";
            for (n = 0, i = t.length; n < i; n += 1)
              if ("string" != typeof (r = t[n])) {
                if (((o = r.id), !e || !a.call(e, o)))
                  throw new Error("A value must be provided for: " + o);
                (s = e[o]),
                  (l += r.options
                    ? this._format(r.getOption(s), e)
                    : r.format(s));
              } else l += r;
            return l;
          }),
          (s.prototype._mergeFormats = function (e, n) {
            var i,
              r,
              o = {};
            for (i in e)
              a.call(e, i) &&
                ((o[i] = r = c(e[i])), n && a.call(n, i) && t(r, n[i]));
            return o;
          }),
          (s.prototype._resolveLocale = function (t) {
            t || (t = s.defaultLocale), "string" == typeof t && (t = [t]);
            var e,
              n,
              i,
              r = s.__localeData__;
            for (e = 0, n = t.length; e < n; e += 1) {
              if (
                ((i = t[e].split("-")[0].toLowerCase()), !/[a-z]{2,3}/.test(i))
              )
                throw new Error(
                  "Language tag provided to IntlMessageFormat is not structrually valid: " +
                    i
                );
              if (a.call(r, i)) return i;
            }
            throw new Error(
              "No locale data has been added to IntlMessageFormat for: " +
                t.join(", ")
            );
          });
        var d = {
          locale: "en",
          pluralRuleFunction: function (t) {
            var e = Math.floor(Math.abs(t)),
              n = t.toString().replace(/^[^.]*\.?/, "").length;
            return (t = Math.floor(t)), 1 === e && 0 === n ? "one" : "other";
          },
        };
        f.__addLocaleData(d), (f.defaultLocale = "en");
        var y = f;
        this.IntlMessageFormat = y;
      }.call(this),
      IntlMessageFormat.__addLocaleData({
        locale: "af",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "ak",
        pluralRuleFunction: function (t) {
          return (
            (t = Math.floor(t)),
            t === Math.floor(t) && t >= 0 && t <= 1 ? "one" : "other"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "am",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t));
          return (t = Math.floor(t)), 0 === e || 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "ar",
        pluralRuleFunction: function (t) {
          return (
            (t = Math.floor(t)),
            0 === t
              ? "zero"
              : 1 === t
              ? "one"
              : 2 === t
              ? "two"
              : t % 100 === Math.floor(t % 100) && t % 100 >= 3 && t % 100 <= 10
              ? "few"
              : t % 100 === Math.floor(t % 100) &&
                t % 100 >= 11 &&
                t % 100 <= 99
              ? "many"
              : "other"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "as",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length;
          return (t = Math.floor(t)), 1 === e && 0 === n ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "asa",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "ast",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length;
          return (t = Math.floor(t)), 1 === e && 0 === n ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "az",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "be",
        pluralRuleFunction: function (t) {
          return (
            (t = Math.floor(t)),
            t % 10 == 1 && t % 100 != 11
              ? "one"
              : t % 10 === Math.floor(t % 10) &&
                t % 10 >= 2 &&
                t % 10 <= 4 &&
                !(t % 100 >= 12 && t % 100 <= 14)
              ? "few"
              : t % 10 == 0 ||
                (t % 10 === Math.floor(t % 10) && t % 10 >= 5 && t % 10 <= 9) ||
                (t % 100 === Math.floor(t % 100) &&
                  t % 100 >= 11 &&
                  t % 100 <= 14)
              ? "many"
              : "other"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "bem",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "bez",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "bg",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "bm",
        pluralRuleFunction: function () {
          return "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "bn",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t));
          return (t = Math.floor(t)), 0 === e || 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "bo",
        pluralRuleFunction: function () {
          return "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "br",
        pluralRuleFunction: function (t) {
          return (
            (t = Math.floor(t)),
            t % 10 == 1 && t % 100 != 11 && t % 100 != 71 && t % 100 != 91
              ? "one"
              : t % 10 == 2 && t % 100 != 12 && t % 100 != 72 && t % 100 != 92
              ? "two"
              : t % 10 === Math.floor(t % 10) &&
                ((t % 10 >= 3 && t % 10 <= 4) || t % 10 == 9) &&
                !(
                  (t % 100 >= 10 && t % 100 <= 19) ||
                  (t % 100 >= 70 && t % 100 <= 79) ||
                  (t % 100 >= 90 && t % 100 <= 99)
                )
              ? "few"
              : 0 !== t && t % 1e6 == 0
              ? "many"
              : "other"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "brx",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "bs",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length,
            i = parseInt(t.toString().replace(/^[^.]*\.?/, ""), 10);
          return (
            (t = Math.floor(t)),
            0 === n &&
            e % 10 == 1 &&
            (e % 100 != 11 || (i % 10 == 1 && i % 100 != 11))
              ? "one"
              : 0 === n &&
                e % 10 === Math.floor(e % 10) &&
                e % 10 >= 2 &&
                e % 10 <= 4 &&
                (!(e % 100 >= 12 && e % 100 <= 14) ||
                  (i % 10 === Math.floor(i % 10) &&
                    i % 10 >= 2 &&
                    i % 10 <= 4 &&
                    !(i % 100 >= 12 && i % 100 <= 14)))
              ? "few"
              : "other"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "ca",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length;
          return (t = Math.floor(t)), 1 === e && 0 === n ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "cgg",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "chr",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "cs",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length;
          return (
            (t = Math.floor(t)),
            1 === e && 0 === n
              ? "one"
              : e === Math.floor(e) && e >= 2 && e <= 4 && 0 === n
              ? "few"
              : 0 !== n
              ? "many"
              : "other"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "cy",
        pluralRuleFunction: function (t) {
          return (
            (t = Math.floor(t)),
            0 === t
              ? "zero"
              : 1 === t
              ? "one"
              : 2 === t
              ? "two"
              : 3 === t
              ? "few"
              : 6 === t
              ? "many"
              : "other"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "da",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t)),
            n = parseInt(t.toString().replace(/^[^.]*\.?|0+$/g, ""), 10);
          return (
            (t = Math.floor(t)),
            1 === t || (0 !== n && (0 === e || 1 === e)) ? "one" : "other"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "de",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length;
          return (t = Math.floor(t)), 1 === e && 0 === n ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "dz",
        pluralRuleFunction: function () {
          return "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "ee",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "el",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "en",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length;
          return (t = Math.floor(t)), 1 === e && 0 === n ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "eo",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "es",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "et",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length;
          return (t = Math.floor(t)), 1 === e && 0 === n ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "eu",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "fa",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t));
          return (t = Math.floor(t)), 0 === e || 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "ff",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t));
          return (t = Math.floor(t)), 0 === e || 1 === e ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "fi",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length;
          return (t = Math.floor(t)), 1 === e && 0 === n ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "fil",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length,
            i = parseInt(t.toString().replace(/^[^.]*\.?/, ""), 10);
          return (
            (t = Math.floor(t)),
            0 === n &&
            (1 === e ||
              2 === e ||
              3 === e ||
              (0 === n &&
                ((e % 10 != 4 && e % 10 != 6 && e % 10 != 9) ||
                  (0 !== n && i % 10 != 4 && i % 10 != 6 && i % 10 != 9))))
              ? "one"
              : "other"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "fo",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "fr",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t));
          return (t = Math.floor(t)), 0 === e || 1 === e ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "fur",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "fy",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length;
          return (t = Math.floor(t)), 1 === e && 0 === n ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "ga",
        pluralRuleFunction: function (t) {
          return (
            (t = Math.floor(t)),
            1 === t
              ? "one"
              : 2 === t
              ? "two"
              : t === Math.floor(t) && t >= 3 && t <= 6
              ? "few"
              : t === Math.floor(t) && t >= 7 && t <= 10
              ? "many"
              : "other"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "gd",
        pluralRuleFunction: function (t) {
          return (
            (t = Math.floor(t)),
            1 === t || 11 === t
              ? "one"
              : 2 === t || 12 === t
              ? "two"
              : t === Math.floor(t) &&
                ((t >= 3 && t <= 10) || (t >= 13 && t <= 19))
              ? "few"
              : "other"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "gl",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length;
          return (t = Math.floor(t)), 1 === e && 0 === n ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "gsw",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "gu",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t));
          return (t = Math.floor(t)), 0 === e || 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "gv",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length;
          return (
            (t = Math.floor(t)),
            0 === n && e % 10 == 1
              ? "one"
              : 0 === n && e % 10 == 2
              ? "two"
              : 0 !== n ||
                (e % 100 != 0 &&
                  e % 100 != 20 &&
                  e % 100 != 40 &&
                  e % 100 != 60 &&
                  e % 100 != 80)
              ? 0 !== n
                ? "many"
                : "other"
              : "few"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "ha",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "haw",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "he",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length;
          return (
            (t = Math.floor(t)),
            1 === e && 0 === n
              ? "one"
              : 2 === e && 0 === n
              ? "two"
              : 0 !== n || (t >= 0 && t <= 10) || t % 10 != 0
              ? "other"
              : "many"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "hi",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t));
          return (t = Math.floor(t)), 0 === e || 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "hr",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length,
            i = parseInt(t.toString().replace(/^[^.]*\.?/, ""), 10);
          return (
            (t = Math.floor(t)),
            0 === n &&
            e % 10 == 1 &&
            (e % 100 != 11 || (i % 10 == 1 && i % 100 != 11))
              ? "one"
              : 0 === n &&
                e % 10 === Math.floor(e % 10) &&
                e % 10 >= 2 &&
                e % 10 <= 4 &&
                (!(e % 100 >= 12 && e % 100 <= 14) ||
                  (i % 10 === Math.floor(i % 10) &&
                    i % 10 >= 2 &&
                    i % 10 <= 4 &&
                    !(i % 100 >= 12 && i % 100 <= 14)))
              ? "few"
              : "other"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "hu",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "hy",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t));
          return (t = Math.floor(t)), 0 === e || 1 === e ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "id",
        pluralRuleFunction: function () {
          return "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "ig",
        pluralRuleFunction: function () {
          return "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "ii",
        pluralRuleFunction: function () {
          return "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "is",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t)),
            n = parseInt(t.toString().replace(/^[^.]*\.?|0+$/g, ""), 10);
          return (
            (t = Math.floor(t)),
            0 !== n || e % 10 != 1 || (e % 100 == 11 && 0 === n)
              ? "other"
              : "one"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "it",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length;
          return (t = Math.floor(t)), 1 === e && 0 === n ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "ja",
        pluralRuleFunction: function () {
          return "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "jgo",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "jmc",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "ka",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "kab",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t));
          return (t = Math.floor(t)), 0 === e || 1 === e ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "kde",
        pluralRuleFunction: function () {
          return "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "kea",
        pluralRuleFunction: function () {
          return "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "kk",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "kkj",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "kl",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "km",
        pluralRuleFunction: function () {
          return "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "kn",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t));
          return (t = Math.floor(t)), 0 === e || 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "ko",
        pluralRuleFunction: function () {
          return "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "ks",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "ksb",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "ksh",
        pluralRuleFunction: function (t) {
          return (
            (t = Math.floor(t)), 0 === t ? "zero" : 1 === t ? "one" : "other"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "kw",
        pluralRuleFunction: function (t) {
          return (
            (t = Math.floor(t)), 1 === t ? "one" : 2 === t ? "two" : "other"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "ky",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "lag",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t));
          return (
            (t = Math.floor(t)),
            0 === t ? "zero" : (0 !== e && 1 !== e) || 0 === t ? "other" : "one"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "lg",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "lkt",
        pluralRuleFunction: function () {
          return "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "ln",
        pluralRuleFunction: function (t) {
          return (
            (t = Math.floor(t)),
            t === Math.floor(t) && t >= 0 && t <= 1 ? "one" : "other"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "lo",
        pluralRuleFunction: function () {
          return "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "lt",
        pluralRuleFunction: function (t) {
          var e = parseInt(t.toString().replace(/^[^.]*\.?/, ""), 10);
          return (
            (t = Math.floor(t)),
            t % 10 != 1 || (t % 100 >= 11 && t % 100 <= 19)
              ? t % 10 === Math.floor(t % 10) &&
                t % 10 >= 2 &&
                t % 10 <= 9 &&
                !(t % 100 >= 11 && t % 100 <= 19)
                ? "few"
                : 0 !== e
                ? "many"
                : "other"
              : "one"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "lv",
        pluralRuleFunction: function (t) {
          var e = t.toString().replace(/^[^.]*\.?/, "").length,
            n = parseInt(t.toString().replace(/^[^.]*\.?/, ""), 10);
          return (
            (t = Math.floor(t)),
            t % 10 == 0 ||
            (t % 100 === Math.floor(t % 100) &&
              t % 100 >= 11 &&
              t % 100 <= 19) ||
            (2 === e &&
              n % 100 === Math.floor(n % 100) &&
              n % 100 >= 11 &&
              n % 100 <= 19)
              ? "zero"
              : t % 10 == 1 &&
                (t % 100 != 11 ||
                  (2 === e &&
                    n % 10 == 1 &&
                    (n % 100 != 11 || (2 !== e && n % 10 == 1))))
              ? "one"
              : "other"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "mas",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "mg",
        pluralRuleFunction: function (t) {
          return (
            (t = Math.floor(t)),
            t === Math.floor(t) && t >= 0 && t <= 1 ? "one" : "other"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "mgo",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "mk",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length,
            i = parseInt(t.toString().replace(/^[^.]*\.?/, ""), 10);
          return (
            (t = Math.floor(t)),
            0 !== n || (e % 10 != 1 && i % 10 != 1) ? "other" : "one"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "ml",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "mn",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "mr",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t));
          return (t = Math.floor(t)), 0 === e || 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "ms",
        pluralRuleFunction: function () {
          return "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "mt",
        pluralRuleFunction: function (t) {
          return (
            (t = Math.floor(t)),
            1 === t
              ? "one"
              : 0 === t ||
                (t % 100 === Math.floor(t % 100) &&
                  t % 100 >= 2 &&
                  t % 100 <= 10)
              ? "few"
              : t % 100 === Math.floor(t % 100) &&
                t % 100 >= 11 &&
                t % 100 <= 19
              ? "many"
              : "other"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "my",
        pluralRuleFunction: function () {
          return "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "naq",
        pluralRuleFunction: function (t) {
          return (
            (t = Math.floor(t)), 1 === t ? "one" : 2 === t ? "two" : "other"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "nb",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "nd",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "ne",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "nl",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length;
          return (t = Math.floor(t)), 1 === e && 0 === n ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "nn",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "nnh",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "nr",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "nso",
        pluralRuleFunction: function (t) {
          return (
            (t = Math.floor(t)),
            t === Math.floor(t) && t >= 0 && t <= 1 ? "one" : "other"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "nyn",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "om",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "or",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "os",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "pa",
        pluralRuleFunction: function (t) {
          return (
            (t = Math.floor(t)),
            t === Math.floor(t) && t >= 0 && t <= 1 ? "one" : "other"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "pl",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length;
          return (
            (t = Math.floor(t)),
            1 === e && 0 === n
              ? "one"
              : 0 === n &&
                e % 10 === Math.floor(e % 10) &&
                e % 10 >= 2 &&
                e % 10 <= 4 &&
                !(e % 100 >= 12 && e % 100 <= 14)
              ? "few"
              : 0 === n &&
                1 !== e &&
                ((e % 10 === Math.floor(e % 10) &&
                  e % 10 >= 0 &&
                  e % 10 <= 1) ||
                  (0 === n &&
                    ((e % 10 === Math.floor(e % 10) &&
                      e % 10 >= 5 &&
                      e % 10 <= 9) ||
                      (0 === n &&
                        e % 100 === Math.floor(e % 100) &&
                        e % 100 >= 12 &&
                        e % 100 <= 14))))
              ? "many"
              : "other"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "ps",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "pt",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length,
            i = parseInt(t.toString().replace(/^[^.]*\.?|0+$/g, ""), 10);
          return (
            (t = Math.floor(t)),
            1 === e && (0 === n || (0 === e && 1 === i)) ? "one" : "other"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "rm",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "ro",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length;
          return (
            (t = Math.floor(t)),
            1 === e && 0 === n
              ? "one"
              : 0 !== n ||
                0 === t ||
                (1 !== t &&
                  t % 100 === Math.floor(t % 100) &&
                  t % 100 >= 1 &&
                  t % 100 <= 19)
              ? "few"
              : "other"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "rof",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "ru",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length;
          return (
            (t = Math.floor(t)),
            0 === n && e % 10 == 1 && e % 100 != 11
              ? "one"
              : 0 === n &&
                e % 10 === Math.floor(e % 10) &&
                e % 10 >= 2 &&
                e % 10 <= 4 &&
                !(e % 100 >= 12 && e % 100 <= 14)
              ? "few"
              : 0 === n &&
                (e % 10 == 0 ||
                  (0 === n &&
                    ((e % 10 === Math.floor(e % 10) &&
                      e % 10 >= 5 &&
                      e % 10 <= 9) ||
                      (0 === n &&
                        e % 100 === Math.floor(e % 100) &&
                        e % 100 >= 11 &&
                        e % 100 <= 14))))
              ? "many"
              : "other"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "rwk",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "sah",
        pluralRuleFunction: function () {
          return "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "saq",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "se",
        pluralRuleFunction: function (t) {
          return (
            (t = Math.floor(t)), 1 === t ? "one" : 2 === t ? "two" : "other"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "seh",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "ses",
        pluralRuleFunction: function () {
          return "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "sg",
        pluralRuleFunction: function () {
          return "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "shi",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t));
          return (
            (t = Math.floor(t)),
            0 === e || 1 === t
              ? "one"
              : t === Math.floor(t) && t >= 2 && t <= 10
              ? "few"
              : "other"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "si",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t)),
            n = parseInt(t.toString().replace(/^[^.]*\.?/, ""), 10);
          return (
            (t = Math.floor(t)),
            0 === t || 1 === t || (0 === e && 1 === n) ? "one" : "other"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "sk",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length;
          return (
            (t = Math.floor(t)),
            1 === e && 0 === n
              ? "one"
              : e === Math.floor(e) && e >= 2 && e <= 4 && 0 === n
              ? "few"
              : 0 !== n
              ? "many"
              : "other"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "sl",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length;
          return (
            (t = Math.floor(t)),
            0 === n && e % 100 == 1
              ? "one"
              : 0 === n && e % 100 == 2
              ? "two"
              : 0 === n &&
                ((e % 100 === Math.floor(e % 100) &&
                  e % 100 >= 3 &&
                  e % 100 <= 4) ||
                  0 !== n)
              ? "few"
              : "other"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "sn",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "so",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "sq",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "sr",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length,
            i = parseInt(t.toString().replace(/^[^.]*\.?/, ""), 10);
          return (
            (t = Math.floor(t)),
            0 === n &&
            e % 10 == 1 &&
            (e % 100 != 11 || (i % 10 == 1 && i % 100 != 11))
              ? "one"
              : 0 === n &&
                e % 10 === Math.floor(e % 10) &&
                e % 10 >= 2 &&
                e % 10 <= 4 &&
                (!(e % 100 >= 12 && e % 100 <= 14) ||
                  (i % 10 === Math.floor(i % 10) &&
                    i % 10 >= 2 &&
                    i % 10 <= 4 &&
                    !(i % 100 >= 12 && i % 100 <= 14)))
              ? "few"
              : "other"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "ss",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "ssy",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "st",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "sv",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length;
          return (t = Math.floor(t)), 1 === e && 0 === n ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "sw",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length;
          return (t = Math.floor(t)), 1 === e && 0 === n ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "ta",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "te",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "teo",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "th",
        pluralRuleFunction: function () {
          return "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "ti",
        pluralRuleFunction: function (t) {
          return (
            (t = Math.floor(t)),
            t === Math.floor(t) && t >= 0 && t <= 1 ? "one" : "other"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "tig",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "tn",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "to",
        pluralRuleFunction: function () {
          return "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "tr",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "ts",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "tzm",
        pluralRuleFunction: function (t) {
          return (
            (t = Math.floor(t)),
            (t === Math.floor(t) && t >= 0 && t <= 1) ||
            (t === Math.floor(t) && t >= 11 && t <= 99)
              ? "one"
              : "other"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "ug",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "uk",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length;
          return (
            (t = Math.floor(t)),
            0 === n && e % 10 == 1 && e % 100 != 11
              ? "one"
              : 0 === n &&
                e % 10 === Math.floor(e % 10) &&
                e % 10 >= 2 &&
                e % 10 <= 4 &&
                !(e % 100 >= 12 && e % 100 <= 14)
              ? "few"
              : 0 === n &&
                (e % 10 == 0 ||
                  (0 === n &&
                    ((e % 10 === Math.floor(e % 10) &&
                      e % 10 >= 5 &&
                      e % 10 <= 9) ||
                      (0 === n &&
                        e % 100 === Math.floor(e % 100) &&
                        e % 100 >= 11 &&
                        e % 100 <= 14))))
              ? "many"
              : "other"
          );
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "ur",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length;
          return (t = Math.floor(t)), 1 === e && 0 === n ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "uz",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "ve",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "vi",
        pluralRuleFunction: function () {
          return "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "vo",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "vun",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "wae",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "xh",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "xog",
        pluralRuleFunction: function (t) {
          return (t = Math.floor(t)), 1 === t ? "one" : "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "yo",
        pluralRuleFunction: function () {
          return "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "zh",
        pluralRuleFunction: function () {
          return "other";
        },
      }),
      IntlMessageFormat.__addLocaleData({
        locale: "zu",
        pluralRuleFunction: function (t) {
          var e = Math.floor(Math.abs(t));
          return (t = Math.floor(t)), 0 === e || 1 === t ? "one" : "other";
        },
      }),
      (function (t, e, n, i) {
        var r = 0,
          o = (function () {
            var e = i.userAgent,
              n = /msie\s\d+/i;
            return (
              0 < e.search(n) &&
              ((e = n.exec(e).toString()), 9 > (e = e.split(" ")[1])) &&
              (t("html").addClass("lt-ie9"), !0)
            );
          })();
        Function.prototype.bind ||
          (Function.prototype.bind = function (t) {
            var e = this,
              n = [].slice;
            if ("function" != typeof e) throw new TypeError();
            var i = n.call(arguments, 1),
              r = function () {
                if (this instanceof r) {
                  var o = function () {};
                  o.prototype = e.prototype;
                  var o = new o(),
                    s = e.apply(o, i.concat(n.call(arguments)));
                  return Object(s) === s ? s : o;
                }
                return e.apply(t, i.concat(n.call(arguments)));
              };
            return r;
          }),
          Array.prototype.indexOf ||
            (Array.prototype.indexOf = function (t, e) {
              var n;
              if (null == this)
                throw new TypeError('"this" is null or not defined');
              var i = Object(this),
                r = i.length >>> 0;
              if (0 === r) return -1;
              if (((n = +e || 0), Infinity === Math.abs(n) && (n = 0), n >= r))
                return -1;
              for (n = Math.max(0 <= n ? n : r - Math.abs(n), 0); n < r; ) {
                if (n in i && i[n] === t) return n;
                n++;
              }
              return -1;
            });
        var s = function (i, r, o) {
          (this.VERSION = "2.0.7"),
            (this.input = i),
            (this.plugin_count = o),
            (this.old_to =
              this.old_from =
              this.update_tm =
              this.calc_count =
              this.current_plugin =
                0),
            (this.raf_id = null),
            (this.is_update =
              this.is_key =
              this.force_redraw =
              this.dragging =
                !1),
            (this.is_start = !0),
            (this.is_click = this.is_resize = this.is_active = !1),
            (this.$cache = {
              win: t(n),
              body: t(e.body),
              input: t(i),
              cont: null,
              rs: null,
              min: null,
              max: null,
              from: null,
              to: null,
              single: null,
              bar: null,
              line: null,
              s_single: null,
              s_from: null,
              s_to: null,
              shad_single: null,
              shad_from: null,
              shad_to: null,
              grid: null,
              grid_labels: [],
            }),
            (o = this.$cache.input),
            (i = {
              type: o.data("type"),
              min: o.data("min"),
              max: o.data("max"),
              from: o.data("from"),
              to: o.data("to"),
              step: o.data("step"),
              min_interval: o.data("minInterval"),
              max_interval: o.data("maxInterval"),
              drag_interval: o.data("dragInterval"),
              values: o.data("values"),
              from_fixed: o.data("fromFixed"),
              from_min: o.data("fromMin"),
              from_max: o.data("fromMax"),
              from_shadow: o.data("fromShadow"),
              to_fixed: o.data("toFixed"),
              to_min: o.data("toMin"),
              to_max: o.data("toMax"),
              to_shadow: o.data("toShadow"),
              prettify_enabled: o.data("prettifyEnabled"),
              prettify_separator: o.data("prettifySeparator"),
              force_edges: o.data("forceEdges"),
              keyboard: o.data("keyboard"),
              keyboard_step: o.data("keyboardStep"),
              grid: o.data("grid"),
              grid_margin: o.data("gridMargin"),
              grid_num: o.data("gridNum"),
              grid_snap: o.data("gridSnap"),
              hide_min_max: o.data("hideMinMax"),
              hide_from_to: o.data("hideFromTo"),
              prefix: o.data("prefix"),
              postfix: o.data("postfix"),
              max_postfix: o.data("maxPostfix"),
              decorate_both: o.data("decorateBoth"),
              values_separator: o.data("valuesSeparator"),
              disable: o.data("disable"),
            }),
            (i.values = i.values && i.values.split(",")),
            (r = t.extend(i, r)),
            (o = o.prop("value")) &&
              ((o = o.split(";")),
              o[0] && o[0] == +o[0] && (o[0] = +o[0]),
              o[1] && o[1] == +o[1] && (o[1] = +o[1]),
              r.values && r.values.length
                ? ((i.from = o[0] && r.values.indexOf(o[0])),
                  (i.to = o[1] && r.values.indexOf(o[1])))
                : ((i.from = o[0] && +o[0]), (i.to = o[1] && +o[1]))),
            (this.options = t.extend(
              {
                type: "single",
                min: 10,
                max: 100,
                from: null,
                to: null,
                step: 1,
                min_interval: 0,
                max_interval: 0,
                drag_interval: !1,
                values: [],
                p_values: [],
                from_fixed: !1,
                from_min: null,
                from_max: null,
                from_shadow: !1,
                to_fixed: !1,
                to_min: null,
                to_max: null,
                to_shadow: !1,
                prettify_enabled: !0,
                prettify_separator: " ",
                prettify: null,
                force_edges: !1,
                keyboard: !1,
                keyboard_step: 5,
                grid: !1,
                grid_margin: !0,
                grid_num: 4,
                grid_snap: !1,
                hide_min_max: !1,
                hide_from_to: !1,
                prefix: "",
                postfix: "",
                max_postfix: "",
                decorate_both: !0,
                values_separator: " \u2014 ",
                disable: !1,
                onStart: null,
                onChange: null,
                onFinish: null,
                onUpdate: null,
              },
              r
            )),
            this.validate(),
            (this.result = {
              input: this.$cache.input,
              slider: null,
              min: this.options.min,
              max: this.options.max,
              from: this.options.from,
              from_percent: 0,
              from_value: null,
              to: this.options.to,
              to_percent: 0,
              to_value: null,
            }),
            (this.coords = {
              x_gap: 0,
              x_pointer: 0,
              w_rs: 0,
              w_rs_old: 0,
              w_handle: 0,
              p_gap: 0,
              p_gap_left: 0,
              p_gap_right: 0,
              p_step: 0,
              p_pointer: 0,
              p_handle: 0,
              p_single: 0,
              p_single_real: 0,
              p_from: 0,
              p_from_real: 0,
              p_to: 0,
              p_to_real: 0,
              p_bar_x: 0,
              p_bar_w: 0,
              grid_gap: 0,
              big_num: 0,
              big: [],
              big_w: [],
              big_p: [],
              big_x: [],
            }),
            (this.labels = {
              w_min: 0,
              w_max: 0,
              w_from: 0,
              w_to: 0,
              w_single: 0,
              p_min: 0,
              p_max: 0,
              p_from: 0,
              p_from_left: 0,
              p_to: 0,
              p_to_left: 0,
              p_single: 0,
              p_single_left: 0,
            }),
            this.init();
        };
        (s.prototype = {
          init: function (t) {
            (this.coords.p_step =
              this.options.step /
              ((this.options.max - this.options.min) / 100)),
              (this.target = "base"),
              this.toggleInput(),
              this.append(),
              this.setMinMax(),
              t
                ? ((this.force_redraw = !0),
                  this.calc(!0),
                  this.options.onUpdate &&
                    "function" == typeof this.options.onUpdate &&
                    this.options.onUpdate(this.result))
                : ((this.force_redraw = !0),
                  this.calc(!0),
                  this.options.onStart &&
                    "function" == typeof this.options.onStart &&
                    this.options.onStart(this.result)),
              this.updateScene();
          },
          append: function () {
            this.$cache.input.before(
              '<span class="irs js-irs-' + this.plugin_count + '"></span>'
            ),
              this.$cache.input.prop("readonly", !0),
              (this.$cache.cont = this.$cache.input.prev()),
              (this.result.slider = this.$cache.cont),
              this.$cache.cont.html(
                '<span class="irs"><span class="irs-line" tabindex="-1"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span><span class="irs-bar"></span>'
              ),
              (this.$cache.rs = this.$cache.cont.find(".irs")),
              (this.$cache.min = this.$cache.cont.find(".irs-min")),
              (this.$cache.max = this.$cache.cont.find(".irs-max")),
              (this.$cache.from = this.$cache.cont.find(".irs-from")),
              (this.$cache.to = this.$cache.cont.find(".irs-to")),
              (this.$cache.single = this.$cache.cont.find(".irs-single")),
              (this.$cache.bar = this.$cache.cont.find(".irs-bar")),
              (this.$cache.line = this.$cache.cont.find(".irs-line")),
              (this.$cache.grid = this.$cache.cont.find(".irs-grid")),
              "single" === this.options.type
                ? (this.$cache.cont.append(
                    '<span class="irs-bar-edge"></span><span class="irs-shadow shadow-single"></span><span class="irs-slider single"></span>'
                  ),
                  (this.$cache.s_single = this.$cache.cont.find(".single")),
                  (this.$cache.from[0].style.visibility = "hidden"),
                  (this.$cache.to[0].style.visibility = "hidden"),
                  (this.$cache.shad_single =
                    this.$cache.cont.find(".shadow-single")))
                : (this.$cache.cont.append(
                    '<span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>'
                  ),
                  (this.$cache.s_from = this.$cache.cont.find(".from")),
                  (this.$cache.s_to = this.$cache.cont.find(".to")),
                  (this.$cache.shad_from =
                    this.$cache.cont.find(".shadow-from")),
                  (this.$cache.shad_to = this.$cache.cont.find(".shadow-to"))),
              this.options.hide_from_to &&
                ((this.$cache.from[0].style.display = "none"),
                (this.$cache.to[0].style.display = "none"),
                (this.$cache.single[0].style.display = "none")),
              this.appendGrid(),
              this.options.disable
                ? (this.appendDisableMask(),
                  (this.$cache.input[0].disabled = !0))
                : (this.$cache.cont.removeClass("irs-disabled"),
                  (this.$cache.input[0].disabled = !1),
                  this.bindEvents());
          },
          appendDisableMask: function () {
            this.$cache.cont.append('<span class="irs-disable-mask"></span>'),
              this.$cache.cont.addClass("irs-disabled");
          },
          remove: function () {
            this.$cache.cont.remove(),
              (this.$cache.cont = null),
              this.$cache.line.off("keydown.irs_" + this.plugin_count),
              this.$cache.body.off("touchmove.irs_" + this.plugin_count),
              this.$cache.body.off("mousemove.irs_" + this.plugin_count),
              this.$cache.win.off("touchend.irs_" + this.plugin_count),
              this.$cache.win.off("mouseup.irs_" + this.plugin_count),
              o &&
                (this.$cache.body.off("mouseup.irs_" + this.plugin_count),
                this.$cache.body.off("mouseleave.irs_" + this.plugin_count)),
              (this.$cache.grid_labels = []),
              (this.coords.big = []),
              (this.coords.big_w = []),
              (this.coords.big_p = []),
              (this.coords.big_x = []),
              cancelAnimationFrame(this.raf_id);
          },
          bindEvents: function () {
            this.$cache.body.on(
              "touchmove.irs_" + this.plugin_count,
              this.pointerMove.bind(this)
            ),
              this.$cache.body.on(
                "mousemove.irs_" + this.plugin_count,
                this.pointerMove.bind(this)
              ),
              this.$cache.win.on(
                "touchend.irs_" + this.plugin_count,
                this.pointerUp.bind(this)
              ),
              this.$cache.win.on(
                "mouseup.irs_" + this.plugin_count,
                this.pointerUp.bind(this)
              ),
              this.$cache.line.on(
                "touchstart.irs_" + this.plugin_count,
                this.pointerClick.bind(this, "click")
              ),
              this.$cache.line.on(
                "mousedown.irs_" + this.plugin_count,
                this.pointerClick.bind(this, "click")
              ),
              this.options.drag_interval && "double" === this.options.type
                ? (this.$cache.bar.on(
                    "touchstart.irs_" + this.plugin_count,
                    this.pointerDown.bind(this, "both")
                  ),
                  this.$cache.bar.on(
                    "mousedown.irs_" + this.plugin_count,
                    this.pointerDown.bind(this, "both")
                  ))
                : (this.$cache.bar.on(
                    "touchstart.irs_" + this.plugin_count,
                    this.pointerClick.bind(this, "click")
                  ),
                  this.$cache.bar.on(
                    "mousedown.irs_" + this.plugin_count,
                    this.pointerClick.bind(this, "click")
                  )),
              "single" === this.options.type
                ? (this.$cache.s_single.on(
                    "touchstart.irs_" + this.plugin_count,
                    this.pointerDown.bind(this, "single")
                  ),
                  this.$cache.shad_single.on(
                    "touchstart.irs_" + this.plugin_count,
                    this.pointerClick.bind(this, "click")
                  ),
                  this.$cache.s_single.on(
                    "mousedown.irs_" + this.plugin_count,
                    this.pointerDown.bind(this, "single")
                  ),
                  this.$cache.shad_single.on(
                    "mousedown.irs_" + this.plugin_count,
                    this.pointerClick.bind(this, "click")
                  ))
                : (this.$cache.s_from.on(
                    "touchstart.irs_" + this.plugin_count,
                    this.pointerDown.bind(this, "from")
                  ),
                  this.$cache.s_to.on(
                    "touchstart.irs_" + this.plugin_count,
                    this.pointerDown.bind(this, "to")
                  ),
                  this.$cache.shad_from.on(
                    "touchstart.irs_" + this.plugin_count,
                    this.pointerClick.bind(this, "click")
                  ),
                  this.$cache.shad_to.on(
                    "touchstart.irs_" + this.plugin_count,
                    this.pointerClick.bind(this, "click")
                  ),
                  this.$cache.s_from.on(
                    "mousedown.irs_" + this.plugin_count,
                    this.pointerDown.bind(this, "from")
                  ),
                  this.$cache.s_to.on(
                    "mousedown.irs_" + this.plugin_count,
                    this.pointerDown.bind(this, "to")
                  ),
                  this.$cache.shad_from.on(
                    "mousedown.irs_" + this.plugin_count,
                    this.pointerClick.bind(this, "click")
                  ),
                  this.$cache.shad_to.on(
                    "mousedown.irs_" + this.plugin_count,
                    this.pointerClick.bind(this, "click")
                  )),
              this.options.keyboard &&
                this.$cache.line.on(
                  "keydown.irs_" + this.plugin_count,
                  this.key.bind(this, "keyboard")
                ),
              o &&
                (this.$cache.body.on(
                  "mouseup.irs_" + this.plugin_count,
                  this.pointerUp.bind(this)
                ),
                this.$cache.body.on(
                  "mouseleave.irs_" + this.plugin_count,
                  this.pointerUp.bind(this)
                ));
          },
          pointerMove: function (t) {
            this.dragging &&
              ((this.coords.x_pointer =
                (t.pageX ||
                  (t.originalEvent.touches &&
                    t.originalEvent.touches[0].pageX)) - this.coords.x_gap),
              this.calc());
          },
          pointerUp: function (e) {
            if (this.current_plugin === this.plugin_count && this.is_active) {
              this.is_active = !1;
              var n =
                this.options.onFinish &&
                "function" == typeof this.options.onFinish;
              (e = t.contains(this.$cache.cont[0], e.target) || this.dragging),
                n && e && this.options.onFinish(this.result),
                this.$cache.cont
                  .find(".state_hover")
                  .removeClass("state_hover"),
                (this.force_redraw = !0),
                (this.dragging = !1),
                o && t("*").prop("unselectable", !1),
                this.updateScene();
            }
          },
          pointerDown: function (e, n) {
            n.preventDefault();
            var i =
              n.pageX ||
              (n.originalEvent.touches && n.originalEvent.touches[0].pageX);
            if (2 !== n.button) {
              switch (
                ((this.current_plugin = this.plugin_count),
                (this.target = e),
                (this.dragging = this.is_active = !0),
                (this.coords.x_gap = this.$cache.rs.offset().left),
                (this.coords.x_pointer = i - this.coords.x_gap),
                this.calcPointer(),
                e)
              ) {
                case "single":
                  this.coords.p_gap = this.toFixed(
                    this.coords.p_pointer - this.coords.p_single
                  );
                  break;
                case "from":
                  (this.coords.p_gap = this.toFixed(
                    this.coords.p_pointer - this.coords.p_from
                  )),
                    this.$cache.s_from.addClass("state_hover"),
                    this.$cache.s_from.addClass("type_last"),
                    this.$cache.s_to.removeClass("type_last");
                  break;
                case "to":
                  (this.coords.p_gap = this.toFixed(
                    this.coords.p_pointer - this.coords.p_to
                  )),
                    this.$cache.s_to.addClass("state_hover"),
                    this.$cache.s_to.addClass("type_last"),
                    this.$cache.s_from.removeClass("type_last");
                  break;
                case "both":
                  (this.coords.p_gap_left = this.toFixed(
                    this.coords.p_pointer - this.coords.p_from
                  )),
                    (this.coords.p_gap_right = this.toFixed(
                      this.coords.p_to - this.coords.p_pointer
                    )),
                    this.$cache.s_to.removeClass("type_last"),
                    this.$cache.s_from.removeClass("type_last");
              }
              o && t("*").prop("unselectable", !0),
                this.$cache.line.trigger("focus"),
                this.updateScene();
            }
          },
          pointerClick: function (t, e) {
            e.preventDefault();
            var n =
              e.pageX ||
              (e.originalEvent.touches && e.originalEvent.touches[0].pageX);
            2 !== e.button &&
              ((this.current_plugin = this.plugin_count),
              (this.target = t),
              (this.is_click = !0),
              (this.coords.x_gap = this.$cache.rs.offset().left),
              (this.coords.x_pointer = +(n - this.coords.x_gap).toFixed()),
              (this.force_redraw = !0),
              this.calc(),
              this.$cache.line.trigger("focus"));
          },
          key: function (t, e) {
            if (
              !(
                this.current_plugin !== this.plugin_count ||
                e.altKey ||
                e.ctrlKey ||
                e.shiftKey ||
                e.metaKey
              )
            ) {
              switch (e.which) {
                case 83:
                case 65:
                case 40:
                case 37:
                  e.preventDefault(), this.moveByKey(!1);
                  break;
                case 87:
                case 68:
                case 38:
                case 39:
                  e.preventDefault(), this.moveByKey(!0);
              }
              return !0;
            }
          },
          moveByKey: function (t) {
            var e = this.coords.p_pointer,
              e = t
                ? e + this.options.keyboard_step
                : e - this.options.keyboard_step;
            (this.coords.x_pointer = this.toFixed(
              (this.coords.w_rs / 100) * e
            )),
              (this.is_key = !0),
              this.calc();
          },
          setMinMax: function () {
            this.options &&
              (this.options.hide_min_max
                ? ((this.$cache.min[0].style.display = "none"),
                  (this.$cache.max[0].style.display = "none"))
                : (this.options.values.length
                    ? (this.$cache.min.html(
                        this.decorate(this.options.p_values[this.options.min])
                      ),
                      this.$cache.max.html(
                        this.decorate(this.options.p_values[this.options.max])
                      ))
                    : (this.$cache.min.html(
                        this.decorate(
                          this._prettify(this.options.min),
                          this.options.min
                        )
                      ),
                      this.$cache.max.html(
                        this.decorate(
                          this._prettify(this.options.max),
                          this.options.max
                        )
                      )),
                  (this.labels.w_min = this.$cache.min.outerWidth(!1)),
                  (this.labels.w_max = this.$cache.max.outerWidth(!1))));
          },
          calc: function (t) {
            if (
              this.options &&
              (this.calc_count++,
              (10 === this.calc_count || t) &&
                ((this.calc_count = 0),
                (this.coords.w_rs = this.$cache.rs.outerWidth(!1)),
                (this.coords.w_handle =
                  "single" === this.options.type
                    ? this.$cache.s_single.outerWidth(!1)
                    : this.$cache.s_from.outerWidth(!1))),
              this.coords.w_rs)
            ) {
              this.calcPointer(),
                (this.coords.p_handle = this.toFixed(
                  (this.coords.w_handle / this.coords.w_rs) * 100
                )),
                (t = 100 - this.coords.p_handle);
              var e = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
              switch (
                ("click" === this.target &&
                  ((e = this.toFixed(
                    this.coords.p_pointer - this.coords.p_handle / 2
                  )),
                  (this.target = this.chooseHandle(e))),
                0 > e ? (e = 0) : e > t && (e = t),
                this.target)
              ) {
                case "base":
                  (e = (this.options.max - this.options.min) / 100),
                    (t = (this.result.from - this.options.min) / e),
                    (e = (this.result.to - this.options.min) / e),
                    (this.coords.p_single_real = this.toFixed(t)),
                    (this.coords.p_from_real = this.toFixed(t)),
                    (this.coords.p_to_real = this.toFixed(e)),
                    (this.coords.p_single_real = this.checkDiapason(
                      this.coords.p_single_real,
                      this.options.from_min,
                      this.options.from_max
                    )),
                    (this.coords.p_from_real = this.checkDiapason(
                      this.coords.p_from_real,
                      this.options.from_min,
                      this.options.from_max
                    )),
                    (this.coords.p_to_real = this.checkDiapason(
                      this.coords.p_to_real,
                      this.options.to_min,
                      this.options.to_max
                    )),
                    (this.coords.p_single = this.toFixed(
                      t - (this.coords.p_handle / 100) * t
                    )),
                    (this.coords.p_from = this.toFixed(
                      t - (this.coords.p_handle / 100) * t
                    )),
                    (this.coords.p_to = this.toFixed(
                      e - (this.coords.p_handle / 100) * e
                    )),
                    (this.target = null);
                  break;
                case "single":
                  if (this.options.from_fixed) break;
                  (this.coords.p_single_real = this.calcWithStep(
                    (e / t) * 100
                  )),
                    (this.coords.p_single_real = this.checkDiapason(
                      this.coords.p_single_real,
                      this.options.from_min,
                      this.options.from_max
                    )),
                    (this.coords.p_single = this.toFixed(
                      (this.coords.p_single_real / 100) * t
                    ));
                  break;
                case "from":
                  if (this.options.from_fixed) break;
                  (this.coords.p_from_real = this.calcWithStep((e / t) * 100)),
                    this.coords.p_from_real > this.coords.p_to_real &&
                      (this.coords.p_from_real = this.coords.p_to_real),
                    (this.coords.p_from_real = this.checkDiapason(
                      this.coords.p_from_real,
                      this.options.from_min,
                      this.options.from_max
                    )),
                    (this.coords.p_from_real = this.checkMinInterval(
                      this.coords.p_from_real,
                      this.coords.p_to_real,
                      "from"
                    )),
                    (this.coords.p_from_real = this.checkMaxInterval(
                      this.coords.p_from_real,
                      this.coords.p_to_real,
                      "from"
                    )),
                    (this.coords.p_from = this.toFixed(
                      (this.coords.p_from_real / 100) * t
                    ));
                  break;
                case "to":
                  if (this.options.to_fixed) break;
                  (this.coords.p_to_real = this.calcWithStep((e / t) * 100)),
                    this.coords.p_to_real < this.coords.p_from_real &&
                      (this.coords.p_to_real = this.coords.p_from_real),
                    (this.coords.p_to_real = this.checkDiapason(
                      this.coords.p_to_real,
                      this.options.to_min,
                      this.options.to_max
                    )),
                    (this.coords.p_to_real = this.checkMinInterval(
                      this.coords.p_to_real,
                      this.coords.p_from_real,
                      "to"
                    )),
                    (this.coords.p_to_real = this.checkMaxInterval(
                      this.coords.p_to_real,
                      this.coords.p_from_real,
                      "to"
                    )),
                    (this.coords.p_to = this.toFixed(
                      (this.coords.p_to_real / 100) * t
                    ));
                  break;
                case "both":
                  if (this.options.from_fixed || this.options.to_fixed) break;
                  (e = this.toFixed(e + 0.1 * this.coords.p_handle)),
                    (this.coords.p_from_real = this.calcWithStep(
                      ((e - this.coords.p_gap_left) / t) * 100
                    )),
                    (this.coords.p_from_real = this.checkDiapason(
                      this.coords.p_from_real,
                      this.options.from_min,
                      this.options.from_max
                    )),
                    (this.coords.p_from_real = this.checkMinInterval(
                      this.coords.p_from_real,
                      this.coords.p_to_real,
                      "from"
                    )),
                    (this.coords.p_from = this.toFixed(
                      (this.coords.p_from_real / 100) * t
                    )),
                    (this.coords.p_to_real = this.calcWithStep(
                      ((e + this.coords.p_gap_right) / t) * 100
                    )),
                    (this.coords.p_to_real = this.checkDiapason(
                      this.coords.p_to_real,
                      this.options.to_min,
                      this.options.to_max
                    )),
                    (this.coords.p_to_real = this.checkMinInterval(
                      this.coords.p_to_real,
                      this.coords.p_from_real,
                      "to"
                    )),
                    (this.coords.p_to = this.toFixed(
                      (this.coords.p_to_real / 100) * t
                    ));
              }
              "single" === this.options.type
                ? ((this.coords.p_bar_x = this.coords.p_handle / 2),
                  (this.coords.p_bar_w = this.coords.p_single),
                  (this.result.from_percent = this.coords.p_single_real),
                  (this.result.from = this.calcReal(this.coords.p_single_real)),
                  this.options.values.length &&
                    (this.result.from_value =
                      this.options.values[this.result.from]))
                : ((this.coords.p_bar_x = this.toFixed(
                    this.coords.p_from + this.coords.p_handle / 2
                  )),
                  (this.coords.p_bar_w = this.toFixed(
                    this.coords.p_to - this.coords.p_from
                  )),
                  (this.result.from_percent = this.coords.p_from_real),
                  (this.result.from = this.calcReal(this.coords.p_from_real)),
                  (this.result.to_percent = this.coords.p_to_real),
                  (this.result.to = this.calcReal(this.coords.p_to_real)),
                  this.options.values.length &&
                    ((this.result.from_value =
                      this.options.values[this.result.from]),
                    (this.result.to_value =
                      this.options.values[this.result.to]))),
                this.calcMinMax(),
                this.calcLabels();
            }
          },
          calcPointer: function () {
            this.coords.w_rs
              ? (0 > this.coords.x_pointer || isNaN(this.coords.x_pointer)
                  ? (this.coords.x_pointer = 0)
                  : this.coords.x_pointer > this.coords.w_rs &&
                    (this.coords.x_pointer = this.coords.w_rs),
                (this.coords.p_pointer = this.toFixed(
                  (this.coords.x_pointer / this.coords.w_rs) * 100
                )))
              : (this.coords.p_pointer = 0);
          },
          chooseHandle: function (t) {
            return "single" === this.options.type
              ? "single"
              : t >=
                this.coords.p_from_real +
                  (this.coords.p_to_real - this.coords.p_from_real) / 2
              ? this.options.to_fixed
                ? "from"
                : "to"
              : this.options.from_fixed
              ? "to"
              : "from";
          },
          calcMinMax: function () {
            this.coords.w_rs &&
              ((this.labels.p_min =
                (this.labels.w_min / this.coords.w_rs) * 100),
              (this.labels.p_max =
                (this.labels.w_max / this.coords.w_rs) * 100));
          },
          calcLabels: function () {
            this.coords.w_rs &&
              !this.options.hide_from_to &&
              ("single" === this.options.type
                ? ((this.labels.w_single = this.$cache.single.outerWidth(!1)),
                  (this.labels.p_single =
                    (this.labels.w_single / this.coords.w_rs) * 100),
                  (this.labels.p_single_left =
                    this.coords.p_single +
                    this.coords.p_handle / 2 -
                    this.labels.p_single / 2))
                : ((this.labels.w_from = this.$cache.from.outerWidth(!1)),
                  (this.labels.p_from =
                    (this.labels.w_from / this.coords.w_rs) * 100),
                  (this.labels.p_from_left =
                    this.coords.p_from +
                    this.coords.p_handle / 2 -
                    this.labels.p_from / 2),
                  (this.labels.p_from_left = this.toFixed(
                    this.labels.p_from_left
                  )),
                  (this.labels.p_from_left = this.checkEdges(
                    this.labels.p_from_left,
                    this.labels.p_from
                  )),
                  (this.labels.w_to = this.$cache.to.outerWidth(!1)),
                  (this.labels.p_to =
                    (this.labels.w_to / this.coords.w_rs) * 100),
                  (this.labels.p_to_left =
                    this.coords.p_to +
                    this.coords.p_handle / 2 -
                    this.labels.p_to / 2),
                  (this.labels.p_to_left = this.toFixed(this.labels.p_to_left)),
                  (this.labels.p_to_left = this.checkEdges(
                    this.labels.p_to_left,
                    this.labels.p_to
                  )),
                  (this.labels.w_single = this.$cache.single.outerWidth(!1)),
                  (this.labels.p_single =
                    (this.labels.w_single / this.coords.w_rs) * 100),
                  (this.labels.p_single_left =
                    (this.labels.p_from_left +
                      this.labels.p_to_left +
                      this.labels.p_to) /
                      2 -
                    this.labels.p_single / 2),
                  (this.labels.p_single_left = this.toFixed(
                    this.labels.p_single_left
                  ))),
              (this.labels.p_single_left = this.checkEdges(
                this.labels.p_single_left,
                this.labels.p_single
              )));
          },
          updateScene: function () {
            this.raf_id &&
              (cancelAnimationFrame(this.raf_id), (this.raf_id = null)),
              clearTimeout(this.update_tm),
              (this.update_tm = null),
              this.options &&
                (this.drawHandles(),
                this.is_active
                  ? (this.raf_id = requestAnimationFrame(
                      this.updateScene.bind(this)
                    ))
                  : (this.update_tm = setTimeout(
                      this.updateScene.bind(this),
                      300
                    )));
          },
          drawHandles: function () {
            (this.coords.w_rs = this.$cache.rs.outerWidth(!1)),
              this.coords.w_rs &&
                (this.coords.w_rs !== this.coords.w_rs_old &&
                  ((this.target = "base"), (this.is_resize = !0)),
                (this.coords.w_rs !== this.coords.w_rs_old ||
                  this.force_redraw) &&
                  (this.setMinMax(),
                  this.calc(!0),
                  this.drawLabels(),
                  this.options.grid &&
                    (this.calcGridMargin(), this.calcGridLabels()),
                  (this.force_redraw = !0),
                  (this.coords.w_rs_old = this.coords.w_rs),
                  this.drawShadow()),
                this.coords.w_rs &&
                  (this.dragging || this.force_redraw || this.is_key) &&
                  ((this.old_from !== this.result.from ||
                    this.old_to !== this.result.to ||
                    this.force_redraw ||
                    this.is_key) &&
                    (this.drawLabels(),
                    (this.$cache.bar[0].style.left = this.coords.p_bar_x + "%"),
                    (this.$cache.bar[0].style.width =
                      this.coords.p_bar_w + "%"),
                    "single" === this.options.type
                      ? ((this.$cache.s_single[0].style.left =
                          this.coords.p_single + "%"),
                        (this.$cache.single[0].style.left =
                          this.labels.p_single_left + "%"),
                        this.options.values.length
                          ? (this.$cache.input.prop(
                              "value",
                              this.result.from_value
                            ),
                            this.$cache.input.data(
                              "from",
                              this.result.from_value
                            ))
                          : (this.$cache.input.prop("value", this.result.from),
                            this.$cache.input.data("from", this.result.from)))
                      : ((this.$cache.s_from[0].style.left =
                          this.coords.p_from + "%"),
                        (this.$cache.s_to[0].style.left =
                          this.coords.p_to + "%"),
                        (this.old_from !== this.result.from ||
                          this.force_redraw) &&
                          (this.$cache.from[0].style.left =
                            this.labels.p_from_left + "%"),
                        (this.old_to !== this.result.to || this.force_redraw) &&
                          (this.$cache.to[0].style.left =
                            this.labels.p_to_left + "%"),
                        (this.$cache.single[0].style.left =
                          this.labels.p_single_left + "%"),
                        this.options.values.length
                          ? (this.$cache.input.prop(
                              "value",
                              this.result.from_value +
                                ";" +
                                this.result.to_value
                            ),
                            this.$cache.input.data(
                              "from",
                              this.result.from_value
                            ),
                            this.$cache.input.data("to", this.result.to_value))
                          : (this.$cache.input.prop(
                              "value",
                              this.result.from + ";" + this.result.to
                            ),
                            this.$cache.input.data("from", this.result.from),
                            this.$cache.input.data("to", this.result.to))),
                    (this.old_from === this.result.from &&
                      this.old_to === this.result.to) ||
                      this.is_start ||
                      this.$cache.input.trigger("change"),
                    (this.old_from = this.result.from),
                    (this.old_to = this.result.to),
                    !this.options.onChange ||
                      "function" != typeof this.options.onChange ||
                      this.is_resize ||
                      this.is_update ||
                      this.is_start ||
                      this.options.onChange(this.result),
                    this.options.onFinish &&
                      "function" == typeof this.options.onFinish &&
                      (this.is_key || this.is_click) &&
                      this.options.onFinish(this.result),
                    (this.is_resize = this.is_update = !1)),
                  (this.force_redraw =
                    this.is_click =
                    this.is_key =
                    this.is_start =
                      !1)));
          },
          drawLabels: function () {
            if (this.options) {
              var t,
                e = this.options.values.length,
                n = this.options.p_values;
              if (!this.options.hide_from_to)
                if ("single" === this.options.type)
                  (e = e
                    ? this.decorate(n[this.result.from])
                    : this.decorate(
                        this._prettify(this.result.from),
                        this.result.from
                      )),
                    this.$cache.single.html(e),
                    this.calcLabels(),
                    (this.$cache.min[0].style.visibility =
                      this.labels.p_single_left < this.labels.p_min + 1
                        ? "hidden"
                        : "visible"),
                    (this.$cache.max[0].style.visibility =
                      this.labels.p_single_left + this.labels.p_single >
                      100 - this.labels.p_max - 1
                        ? "hidden"
                        : "visible");
                else {
                  e
                    ? (this.options.decorate_both
                        ? ((e = this.decorate(n[this.result.from])),
                          (e += this.options.values_separator),
                          (e += this.decorate(n[this.result.to])))
                        : (e = this.decorate(
                            n[this.result.from] +
                              this.options.values_separator +
                              n[this.result.to]
                          )),
                      (t = this.decorate(n[this.result.from])),
                      (n = this.decorate(n[this.result.to])))
                    : (this.options.decorate_both
                        ? ((e = this.decorate(
                            this._prettify(this.result.from)
                          )),
                          (e += this.options.values_separator),
                          (e += this.decorate(this._prettify(this.result.to))))
                        : (e = this.decorate(
                            this._prettify(this.result.from) +
                              this.options.values_separator +
                              this._prettify(this.result.to),
                            this.result.from
                          )),
                      (t = this.decorate(
                        this._prettify(this.result.from),
                        this.result.from
                      )),
                      (n = this.decorate(
                        this._prettify(this.result.to),
                        this.result.to
                      ))),
                    this.$cache.single.html(e),
                    this.$cache.from.html(t),
                    this.$cache.to.html(n),
                    this.calcLabels(),
                    (n = Math.min(
                      this.labels.p_single_left,
                      this.labels.p_from_left
                    )),
                    (e = this.labels.p_single_left + this.labels.p_single),
                    (t = this.labels.p_to_left + this.labels.p_to);
                  var i = Math.max(e, t);
                  this.labels.p_from_left + this.labels.p_from >=
                  this.labels.p_to_left
                    ? ((this.$cache.from[0].style.visibility = "hidden"),
                      (this.$cache.to[0].style.visibility = "hidden"),
                      (this.$cache.single[0].style.visibility = "visible"),
                      this.result.from === this.result.to
                        ? ((this.$cache.from[0].style.visibility = "visible"),
                          (this.$cache.single[0].style.visibility = "hidden"),
                          (i = t))
                        : ((this.$cache.from[0].style.visibility = "hidden"),
                          (this.$cache.single[0].style.visibility = "visible"),
                          (i = Math.max(e, t))))
                    : ((this.$cache.from[0].style.visibility = "visible"),
                      (this.$cache.to[0].style.visibility = "visible"),
                      (this.$cache.single[0].style.visibility = "hidden")),
                    (this.$cache.min[0].style.visibility =
                      n < this.labels.p_min + 1 ? "hidden" : "visible"),
                    (this.$cache.max[0].style.visibility =
                      i > 100 - this.labels.p_max - 1 ? "hidden" : "visible");
                }
            }
          },
          drawShadow: function () {
            var t = this.options,
              e = this.$cache,
              n = "number" == typeof t.from_min && !isNaN(t.from_min),
              i = "number" == typeof t.from_max && !isNaN(t.from_max),
              r = "number" == typeof t.to_min && !isNaN(t.to_min),
              o = "number" == typeof t.to_max && !isNaN(t.to_max);
            "single" === t.type
              ? t.from_shadow && (n || i)
                ? ((n = this.calcPercent(t.from_min || t.min)),
                  (i = this.calcPercent(t.from_max || t.max) - n),
                  (n = this.toFixed(n - (this.coords.p_handle / 100) * n)),
                  (i = this.toFixed(i - (this.coords.p_handle / 100) * i)),
                  (n += this.coords.p_handle / 2),
                  (e.shad_single[0].style.display = "block"),
                  (e.shad_single[0].style.left = n + "%"),
                  (e.shad_single[0].style.width = i + "%"))
                : (e.shad_single[0].style.display = "none")
              : (t.from_shadow && (n || i)
                  ? ((n = this.calcPercent(t.from_min || t.min)),
                    (i = this.calcPercent(t.from_max || t.max) - n),
                    (n = this.toFixed(n - (this.coords.p_handle / 100) * n)),
                    (i = this.toFixed(i - (this.coords.p_handle / 100) * i)),
                    (n += this.coords.p_handle / 2),
                    (e.shad_from[0].style.display = "block"),
                    (e.shad_from[0].style.left = n + "%"),
                    (e.shad_from[0].style.width = i + "%"))
                  : (e.shad_from[0].style.display = "none"),
                t.to_shadow && (r || o)
                  ? ((r = this.calcPercent(t.to_min || t.min)),
                    (t = this.calcPercent(t.to_max || t.max) - r),
                    (r = this.toFixed(r - (this.coords.p_handle / 100) * r)),
                    (t = this.toFixed(t - (this.coords.p_handle / 100) * t)),
                    (r += this.coords.p_handle / 2),
                    (e.shad_to[0].style.display = "block"),
                    (e.shad_to[0].style.left = r + "%"),
                    (e.shad_to[0].style.width = t + "%"))
                  : (e.shad_to[0].style.display = "none"));
          },
          toggleInput: function () {
            this.$cache.input.toggleClass("irs-hidden-input");
          },
          calcPercent: function (t) {
            return this.toFixed(
              (t - this.options.min) /
                ((this.options.max - this.options.min) / 100)
            );
          },
          calcReal: function (t) {
            var e = this.options.min,
              n = this.options.max,
              i = 0;
            return (
              0 > e && ((i = Math.abs(e)), (e += i), (n += i)),
              (t = ((n - e) / 100) * t + e),
              (e = this.options.step.toString().split(".")[1])
                ? (t = +t.toFixed(e.length))
                : ((t /= this.options.step),
                  (t *= this.options.step),
                  (t = +t.toFixed(0))),
              i && (t -= i),
              t < this.options.min
                ? (t = this.options.min)
                : t > this.options.max && (t = this.options.max),
              e ? +t.toFixed(e.length) : this.toFixed(t)
            );
          },
          calcWithStep: function (t) {
            var e = Math.round(t / this.coords.p_step) * this.coords.p_step;
            return (
              100 < e && (e = 100), 100 === t && (e = 100), this.toFixed(e)
            );
          },
          checkMinInterval: function (t, e, n) {
            var i = this.options;
            return i.min_interval
              ? ((t = this.calcReal(t)),
                (e = this.calcReal(e)),
                "from" === n
                  ? e - t < i.min_interval && (t = e - i.min_interval)
                  : t - e < i.min_interval && (t = e + i.min_interval),
                this.calcPercent(t))
              : t;
          },
          checkMaxInterval: function (t, e, n) {
            var i = this.options;
            return i.max_interval
              ? ((t = this.calcReal(t)),
                (e = this.calcReal(e)),
                "from" === n
                  ? e - t > i.max_interval && (t = e - i.max_interval)
                  : t - e > i.max_interval && (t = e + i.max_interval),
                this.calcPercent(t))
              : t;
          },
          checkDiapason: function (t, e, n) {
            t = this.calcReal(t);
            var i = this.options;
            return (
              (e && "number" == typeof e) || (e = i.min),
              (n && "number" == typeof n) || (n = i.max),
              t < e && (t = e),
              t > n && (t = n),
              this.calcPercent(t)
            );
          },
          toFixed: function (t) {
            return +(t = t.toFixed(5));
          },
          _prettify: function (t) {
            return this.options.prettify_enabled
              ? this.options.prettify &&
                "function" == typeof this.options.prettify
                ? this.options.prettify(t)
                : this.prettify(t)
              : t;
          },
          prettify: function (t) {
            return t
              .toString()
              .replace(
                /(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,
                "$1" + this.options.prettify_separator
              );
          },
          checkEdges: function (t, e) {
            return this.options.force_edges
              ? (0 > t ? (t = 0) : t > 100 - e && (t = 100 - e),
                this.toFixed(t))
              : this.toFixed(t);
          },
          validate: function () {
            var t,
              e,
              n = this.options,
              i = this.result,
              r = n.values,
              o = r.length;
            if (
              ("string" == typeof n.min && (n.min = +n.min),
              "string" == typeof n.max && (n.max = +n.max),
              "string" == typeof n.from && (n.from = +n.from),
              "string" == typeof n.to && (n.to = +n.to),
              "string" == typeof n.step && (n.step = +n.step),
              "string" == typeof n.from_min && (n.from_min = +n.from_min),
              "string" == typeof n.from_max && (n.from_max = +n.from_max),
              "string" == typeof n.to_min && (n.to_min = +n.to_min),
              "string" == typeof n.to_max && (n.to_max = +n.to_max),
              "string" == typeof n.keyboard_step &&
                (n.keyboard_step = +n.keyboard_step),
              "string" == typeof n.grid_num && (n.grid_num = +n.grid_num),
              n.max <= n.min &&
                ((n.max = n.min ? 2 * n.min : n.min + 1), (n.step = 1)),
              o)
            )
              for (
                n.p_values = [],
                  n.min = 0,
                  n.max = o - 1,
                  n.step = 1,
                  n.grid_num = n.max,
                  n.grid_snap = !0,
                  e = 0;
                e < o;
                e++
              )
                (t = +r[e]),
                  isNaN(t) ? (t = r[e]) : ((r[e] = t), (t = this._prettify(t))),
                  n.p_values.push(t);
            ("number" != typeof n.from || isNaN(n.from)) && (n.from = n.min),
              ("number" != typeof n.to || isNaN(n.from)) && (n.to = n.max),
              (n.from < n.min || n.from > n.max) && (n.from = n.min),
              (n.to > n.max || n.to < n.min) && (n.to = n.max),
              "double" === n.type && n.from > n.to && (n.from = n.to),
              ("number" != typeof n.step ||
                isNaN(n.step) ||
                !n.step ||
                0 > n.step) &&
                (n.step = 1),
              ("number" != typeof n.keyboard_step ||
                isNaN(n.keyboard_step) ||
                !n.keyboard_step ||
                0 > n.keyboard_step) &&
                (n.keyboard_step = 5),
              n.from_min && n.from < n.from_min && (n.from = n.from_min),
              n.from_max && n.from > n.from_max && (n.from = n.from_max),
              n.to_min && n.to < n.to_min && (n.to = n.to_min),
              n.to_max && n.from > n.to_max && (n.to = n.to_max),
              i &&
                (i.min !== n.min && (i.min = n.min),
                i.max !== n.max && (i.max = n.max),
                (i.from < i.min || i.from > i.max) && (i.from = n.from),
                (i.to < i.min || i.to > i.max) && (i.to = n.to)),
              ("number" != typeof n.min_interval ||
                isNaN(n.min_interval) ||
                !n.min_interval ||
                0 > n.min_interval) &&
                (n.min_interval = 0),
              ("number" != typeof n.max_interval ||
                isNaN(n.max_interval) ||
                !n.max_interval ||
                0 > n.max_interval) &&
                (n.max_interval = 0),
              n.min_interval &&
                n.min_interval > n.max - n.min &&
                (n.min_interval = n.max - n.min),
              n.max_interval &&
                n.max_interval > n.max - n.min &&
                (n.max_interval = n.max - n.min);
          },
          decorate: function (t, e) {
            var n = "",
              i = this.options;
            return (
              i.prefix && (n += i.prefix),
              (n += t),
              i.max_postfix &&
                (i.values.length && t === i.p_values[i.max]
                  ? ((n += i.max_postfix), i.postfix && (n += " "))
                  : e === i.max &&
                    ((n += i.max_postfix), i.postfix && (n += " "))),
              i.postfix && (n += i.postfix),
              n
            );
          },
          updateFrom: function () {
            (this.result.from = this.options.from),
              (this.result.from_percent = this.calcPercent(this.result.from)),
              this.options.values &&
                (this.result.from_value =
                  this.options.values[this.result.from]);
          },
          updateTo: function () {
            (this.result.to = this.options.to),
              (this.result.to_percent = this.calcPercent(this.result.to)),
              this.options.values &&
                (this.result.to_value = this.options.values[this.result.to]);
          },
          updateResult: function () {
            (this.result.min = this.options.min),
              (this.result.max = this.options.max),
              this.updateFrom(),
              this.updateTo();
          },
          appendGrid: function () {
            if (this.options.grid) {
              var t,
                e,
                n = this.options;
              t = n.max - n.min;
              var i,
                r,
                o = n.grid_num,
                s = 0,
                a = 0,
                l = 4,
                u = 0,
                c = "";
              for (
                this.calcGridMargin(),
                  n.grid_snap
                    ? ((o = t / n.step), (s = this.toFixed(n.step / (t / 100))))
                    : (s = this.toFixed(100 / o)),
                  4 < o && (l = 3),
                  7 < o && (l = 2),
                  14 < o && (l = 1),
                  28 < o && (l = 0),
                  t = 0;
                t < o + 1;
                t++
              ) {
                for (
                  i = l,
                    a = this.toFixed(s * t),
                    100 < a && ((a = 100), 0 > (i -= 2) && (i = 0)),
                    this.coords.big[t] = a,
                    r = (a - s * (t - 1)) / (i + 1),
                    e = 1;
                  e <= i && 0 !== a;
                  e++
                )
                  (u = this.toFixed(a - r * e)),
                    (c +=
                      '<span class="irs-grid-pol small" style="left: ' +
                      u +
                      '%"></span>');
                (c +=
                  '<span class="irs-grid-pol" style="left: ' +
                  a +
                  '%"></span>'),
                  (u = this.calcReal(a)),
                  (u = n.values.length ? n.p_values[u] : this._prettify(u)),
                  (c +=
                    '<span class="irs-grid-text js-grid-text-' +
                    t +
                    '" style="left: ' +
                    a +
                    '%">' +
                    u +
                    "</span>");
              }
              (this.coords.big_num = Math.ceil(o + 1)),
                this.$cache.cont.addClass("irs-with-grid"),
                this.$cache.grid.html(c),
                this.cacheGridLabels();
            }
          },
          cacheGridLabels: function () {
            var t,
              e,
              n = this.coords.big_num;
            for (e = 0; e < n; e++)
              (t = this.$cache.grid.find(".js-grid-text-" + e)),
                this.$cache.grid_labels.push(t);
            this.calcGridLabels();
          },
          calcGridLabels: function () {
            var t, e;
            e = [];
            var n = [],
              i = this.coords.big_num;
            for (t = 0; t < i; t++)
              (this.coords.big_w[t] = this.$cache.grid_labels[t].outerWidth(
                !1
              )),
                (this.coords.big_p[t] = this.toFixed(
                  (this.coords.big_w[t] / this.coords.w_rs) * 100
                )),
                (this.coords.big_x[t] = this.toFixed(this.coords.big_p[t] / 2)),
                (e[t] = this.toFixed(
                  this.coords.big[t] - this.coords.big_x[t]
                )),
                (n[t] = this.toFixed(e[t] + this.coords.big_p[t]));
            for (
              this.options.force_edges &&
                (e[0] < -this.coords.grid_gap &&
                  ((e[0] = -this.coords.grid_gap),
                  (n[0] = this.toFixed(e[0] + this.coords.big_p[0])),
                  (this.coords.big_x[0] = this.coords.grid_gap)),
                n[i - 1] > 100 + this.coords.grid_gap &&
                  ((n[i - 1] = 100 + this.coords.grid_gap),
                  (e[i - 1] = this.toFixed(
                    n[i - 1] - this.coords.big_p[i - 1]
                  )),
                  (this.coords.big_x[i - 1] = this.toFixed(
                    this.coords.big_p[i - 1] - this.coords.grid_gap
                  )))),
                this.calcGridCollision(2, e, n),
                this.calcGridCollision(4, e, n),
                t = 0;
              t < i;
              t++
            )
              (e = this.$cache.grid_labels[t][0]),
                (e.style.marginLeft = -this.coords.big_x[t] + "%");
          },
          calcGridCollision: function (t, e, n) {
            var i,
              r,
              o,
              s = this.coords.big_num;
            for (i = 0; i < s && !((r = i + t / 2) >= s); i += t)
              (o = this.$cache.grid_labels[r][0]),
                (o.style.visibility = n[i] <= e[r] ? "visible" : "hidden");
          },
          calcGridMargin: function () {
            this.options.grid_margin &&
              ((this.coords.w_rs = this.$cache.rs.outerWidth(!1)),
              this.coords.w_rs &&
                ((this.coords.w_handle =
                  "single" === this.options.type
                    ? this.$cache.s_single.outerWidth(!1)
                    : this.$cache.s_from.outerWidth(!1)),
                (this.coords.p_handle = this.toFixed(
                  (this.coords.w_handle / this.coords.w_rs) * 100
                )),
                (this.coords.grid_gap = this.toFixed(
                  this.coords.p_handle / 2 - 0.1
                )),
                (this.$cache.grid[0].style.width =
                  this.toFixed(100 - this.coords.p_handle) + "%"),
                (this.$cache.grid[0].style.left = this.coords.grid_gap + "%")));
          },
          update: function (e) {
            this.input &&
              ((this.is_update = !0),
              (this.options.from = this.result.from),
              (this.options.to = this.result.to),
              (this.options = t.extend(this.options, e)),
              this.validate(),
              this.updateResult(e),
              this.toggleInput(),
              this.remove(),
              this.init(!0));
          },
          reset: function () {
            this.input && (this.updateResult(), this.update());
          },
          destroy: function () {
            this.input &&
              (this.toggleInput(),
              this.$cache.input.prop("readonly", !1),
              t.data(this.input, "ionRangeSlider", null),
              this.remove(),
              (this.options = this.input = null));
          },
        }),
          (t.fn.ionRangeSlider = function (e) {
            return this.each(function () {
              t.data(this, "ionRangeSlider") ||
                t.data(this, "ionRangeSlider", new s(this, e, r++));
            });
          }),
          (function () {
            for (
              var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0;
              i < e.length && !n.requestAnimationFrame;
              ++i
            )
              (n.requestAnimationFrame = n[e[i] + "RequestAnimationFrame"]),
                (n.cancelAnimationFrame =
                  n[e[i] + "CancelAnimationFrame"] ||
                  n[e[i] + "CancelRequestAnimationFrame"]);
            n.requestAnimationFrame ||
              (n.requestAnimationFrame = function (e) {
                var i = new Date().getTime(),
                  r = Math.max(0, 16 - (i - t)),
                  o = n.setTimeout(function () {
                    e(i + r);
                  }, r);
                return (t = i + r), o;
              }),
              n.cancelAnimationFrame ||
                (n.cancelAnimationFrame = function (t) {
                  clearTimeout(t);
                });
          })();
      })(jQuery, document, window, navigator),
      (function (t, e) {
        t.moment = e();
      })(this, function () {
        "use strict";
        function t() {
          return Oi.apply(null, arguments);
        }
        function e(t) {
          Oi = t;
        }
        function n(t) {
          return (
            t instanceof Array ||
            "[object Array]" === Object.prototype.toString.call(t)
          );
        }
        function i(t) {
          return (
            null != t && "[object Object]" === Object.prototype.toString.call(t)
          );
        }
        function r(t) {
          if (Object.getOwnPropertyNames)
            return 0 === Object.getOwnPropertyNames(t).length;
          var e;
          for (e in t) if (t.hasOwnProperty(e)) return !1;
          return !0;
        }
        function o(t) {
          return void 0 === t;
        }
        function s(t) {
          return (
            "number" == typeof t ||
            "[object Number]" === Object.prototype.toString.call(t)
          );
        }
        function a(t) {
          return (
            t instanceof Date ||
            "[object Date]" === Object.prototype.toString.call(t)
          );
        }
        function l(t, e) {
          var n,
            i = [];
          for (n = 0; n < t.length; ++n) i.push(e(t[n], n));
          return i;
        }
        function u(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }
        function c(t, e) {
          for (var n in e) u(e, n) && (t[n] = e[n]);
          return (
            u(e, "toString") && (t.toString = e.toString),
            u(e, "valueOf") && (t.valueOf = e.valueOf),
            t
          );
        }
        function h(t, e, n, i) {
          return De(t, e, n, i, !0).utc();
        }
        function p() {
          return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1,
          };
        }
        function f(t) {
          return null == t._pf && (t._pf = p()), t._pf;
        }
        function d(t) {
          if (null == t._isValid) {
            var e = f(t),
              n = ki.call(e.parsedDateParts, function (t) {
                return null != t;
              }),
              i =
                !isNaN(t._d.getTime()) &&
                e.overflow < 0 &&
                !e.empty &&
                !e.invalidMonth &&
                !e.invalidWeekday &&
                !e.weekdayMismatch &&
                !e.nullInput &&
                !e.invalidFormat &&
                !e.userInvalidated &&
                (!e.meridiem || (e.meridiem && n));
            if (
              (t._strict &&
                (i =
                  i &&
                  0 === e.charsLeftOver &&
                  0 === e.unusedTokens.length &&
                  e.bigHour === undefined),
              null != Object.isFrozen && Object.isFrozen(t))
            )
              return i;
            t._isValid = i;
          }
          return t._isValid;
        }
        function y(t) {
          var e = h(NaN);
          return null != t ? c(f(e), t) : (f(e).userInvalidated = !0), e;
        }
        function m(t, e) {
          var n, i, r;
          if (
            (o(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject),
            o(e._i) || (t._i = e._i),
            o(e._f) || (t._f = e._f),
            o(e._l) || (t._l = e._l),
            o(e._strict) || (t._strict = e._strict),
            o(e._tzm) || (t._tzm = e._tzm),
            o(e._isUTC) || (t._isUTC = e._isUTC),
            o(e._offset) || (t._offset = e._offset),
            o(e._pf) || (t._pf = f(e)),
            o(e._locale) || (t._locale = e._locale),
            Ai.length > 0)
          )
            for (n = 0; n < Ai.length; n++)
              (i = Ai[n]), (r = e[i]), o(r) || (t[i] = r);
          return t;
        }
        function g(e) {
          m(this, e),
            (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
            this.isValid() || (this._d = new Date(NaN)),
            Ei === !1 && ((Ei = !0), t.updateOffset(this), (Ei = !1));
        }
        function _(t) {
          return t instanceof g || (null != t && null != t._isAMomentObject);
        }
        function v(t) {
          return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
        }
        function w(t) {
          var e = +t,
            n = 0;
          return 0 !== e && isFinite(e) && (n = v(e)), n;
        }
        function S(t, e, n) {
          var i,
            r = Math.min(t.length, e.length),
            o = Math.abs(t.length - e.length),
            s = 0;
          for (i = 0; i < r; i++)
            ((n && t[i] !== e[i]) || (!n && w(t[i]) !== w(e[i]))) && s++;
          return s + o;
        }
        function b(e) {
          t.suppressDeprecationWarnings === !1 &&
            "undefined" != typeof console &&
            console.warn &&
            console.warn("Deprecation warning: " + e);
        }
        function x(e, n) {
          var i = !0;
          return c(function () {
            if (
              (null != t.deprecationHandler && t.deprecationHandler(null, e), i)
            ) {
              for (var r, o = [], s = 0; s < arguments.length; s++) {
                if (((r = ""), "object" == typeof arguments[s])) {
                  r += "\n[" + s + "] ";
                  for (var a in arguments[0])
                    r += a + ": " + arguments[0][a] + ", ";
                  r = r.slice(0, -2);
                } else r = arguments[s];
                o.push(r);
              }
              b(
                e +
                  "\nArguments: " +
                  Array.prototype.slice.call(o).join("") +
                  "\n" +
                  new Error().stack
              ),
                (i = !1);
            }
            return n.apply(this, arguments);
          }, n);
        }
        function T(e, n) {
          null != t.deprecationHandler && t.deprecationHandler(e, n),
            Li[e] || (b(n), (Li[e] = !0));
        }
        function D(t) {
          return (
            t instanceof Function ||
            "[object Function]" === Object.prototype.toString.call(t)
          );
        }
        function C(t) {
          var e, n;
          for (n in t) (e = t[n]), D(e) ? (this[n] = e) : (this["_" + n] = e);
          (this._config = t),
            (this._dayOfMonthOrdinalParseLenient = new RegExp(
              (this._dayOfMonthOrdinalParse.source ||
                this._ordinalParse.source) +
                "|" +
                /\d{1,2}/.source
            ));
        }
        function R(t, e) {
          var n,
            r = c({}, t);
          for (n in e)
            u(e, n) &&
              (i(t[n]) && i(e[n])
                ? ((r[n] = {}), c(r[n], t[n]), c(r[n], e[n]))
                : null != e[n]
                ? (r[n] = e[n])
                : delete r[n]);
          for (n in t) u(t, n) && !u(e, n) && i(t[n]) && (r[n] = c({}, r[n]));
          return r;
        }
        function F(t) {
          null != t && this.set(t);
        }
        function I(t, e, n) {
          var i = this._calendar[t] || this._calendar.sameElse;
          return D(i) ? i.call(e, n) : i;
        }
        function M(t) {
          var e = this._longDateFormat[t],
            n = this._longDateFormat[t.toUpperCase()];
          return e || !n
            ? e
            : ((this._longDateFormat[t] = n.replace(
                /MMMM|MM|DD|dddd/g,
                function (t) {
                  return t.slice(1);
                }
              )),
              this._longDateFormat[t]);
        }
        function O() {
          return this._invalidDate;
        }
        function k(t) {
          return this._ordinal.replace("%d", t);
        }
        function A(t, e, n, i) {
          var r = this._relativeTime[n];
          return D(r) ? r(t, e, n, i) : r.replace(/%d/i, t);
        }
        function E(t, e) {
          var n = this._relativeTime[t > 0 ? "future" : "past"];
          return D(n) ? n(e) : n.replace(/%s/i, e);
        }
        function L(t, e) {
          var n = t.toLowerCase();
          Hi[n] = Hi[n + "s"] = Hi[e] = t;
        }
        function Q(t) {
          return "string" == typeof t
            ? Hi[t] || Hi[t.toLowerCase()]
            : undefined;
        }
        function N(t) {
          var e,
            n,
            i = {};
          for (n in t) u(t, n) && (e = Q(n)) && (i[e] = t[n]);
          return i;
        }
        function P(t, e) {
          Bi[t] = e;
        }
        function j(t) {
          var e = [];
          for (var n in t) e.push({ unit: n, priority: Bi[n] });
          return (
            e.sort(function (t, e) {
              return t.priority - e.priority;
            }),
            e
          );
        }
        function q(t, e, n) {
          var i = "" + Math.abs(t),
            r = e - i.length;
          return (
            (t >= 0 ? (n ? "+" : "") : "-") +
            Math.pow(10, Math.max(0, r)).toString().substr(1) +
            i
          );
        }
        function $(t, e, n, i) {
          var r = i;
          "string" == typeof i &&
            (r = function () {
              return this[i]();
            }),
            t && (zi[t] = r),
            e &&
              (zi[e[0]] = function () {
                return q(r.apply(this, arguments), e[1], e[2]);
              }),
            n &&
              (zi[n] = function () {
                return this.localeData().ordinal(r.apply(this, arguments), t);
              });
        }
        function U(t) {
          return t.match(/\[[\s\S]/)
            ? t.replace(/^\[|\]$/g, "")
            : t.replace(/\\/g, "");
        }
        function H(t) {
          var e,
            n,
            i = t.match(Vi);
          for (e = 0, n = i.length; e < n; e++)
            zi[i[e]] ? (i[e] = zi[i[e]]) : (i[e] = U(i[e]));
          return function (e) {
            var r,
              o = "";
            for (r = 0; r < n; r++) o += D(i[r]) ? i[r].call(e, t) : i[r];
            return o;
          };
        }
        function B(t, e) {
          return t.isValid()
            ? ((e = V(e, t.localeData())), (Wi[e] = Wi[e] || H(e)), Wi[e](t))
            : t.localeData().invalidDate();
        }
        function V(t, e) {
          function n(t) {
            return e.longDateFormat(t) || t;
          }
          var i = 5;
          for (Yi.lastIndex = 0; i >= 0 && Yi.test(t); )
            (t = t.replace(Yi, n)), (Yi.lastIndex = 0), (i -= 1);
          return t;
        }
        function Y(t, e, n) {
          pr[t] = D(e)
            ? e
            : function (t) {
                return t && n ? n : e;
              };
        }
        function W(t, e) {
          return u(pr, t) ? pr[t](e._strict, e._locale) : new RegExp(z(t));
        }
        function z(t) {
          return G(
            t
              .replace("\\", "")
              .replace(
                /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                function (t, e, n, i, r) {
                  return e || n || i || r;
                }
              )
          );
        }
        function G(t) {
          return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }
        function K(t, e) {
          var n,
            i = e;
          for (
            "string" == typeof t && (t = [t]),
              s(e) &&
                (i = function (t, n) {
                  n[e] = w(t);
                }),
              n = 0;
            n < t.length;
            n++
          )
            fr[t[n]] = i;
        }
        function J(t, e) {
          K(t, function (t, n, i, r) {
            (i._w = i._w || {}), e(t, i._w, i, r);
          });
        }
        function Z(t, e, n) {
          null != e && u(fr, t) && fr[t](e, n._a, n, t);
        }
        function X(t) {
          return tt(t) ? 366 : 365;
        }
        function tt(t) {
          return (t % 4 == 0 && t % 100 != 0) || t % 400 == 0;
        }
        function et() {
          return tt(this.year());
        }
        function nt(e, n) {
          return function (i) {
            return null != i
              ? (rt(this, e, i), t.updateOffset(this, n), this)
              : it(this, e);
          };
        }
        function it(t, e) {
          return t.isValid()
            ? t._d["get" + (t._isUTC ? "UTC" : "") + e]()
            : NaN;
        }
        function rt(t, e, n) {
          t.isValid() &&
            !isNaN(n) &&
            ("FullYear" === e &&
            tt(t.year()) &&
            1 === t.month() &&
            29 === t.date()
              ? t._d["set" + (t._isUTC ? "UTC" : "") + e](
                  n,
                  t.month(),
                  lt(n, t.month())
                )
              : t._d["set" + (t._isUTC ? "UTC" : "") + e](n));
        }
        function ot(t) {
          return (t = Q(t)), D(this[t]) ? this[t]() : this;
        }
        function st(t, e) {
          if ("object" == typeof t) {
            t = N(t);
            for (var n = j(t), i = 0; i < n.length; i++)
              this[n[i].unit](t[n[i].unit]);
          } else if (((t = Q(t)), D(this[t]))) return this[t](e);
          return this;
        }
        function at(t, e) {
          return ((t % e) + e) % e;
        }
        function lt(t, e) {
          if (isNaN(t) || isNaN(e)) return NaN;
          var n = at(e, 12);
          return (
            (t += (e - n) / 12),
            1 === n ? (tt(t) ? 29 : 28) : 31 - ((n % 7) % 2)
          );
        }
        function ut(t, e) {
          return t
            ? n(this._months)
              ? this._months[t.month()]
              : this._months[
                  (this._months.isFormat || Dr).test(e)
                    ? "format"
                    : "standalone"
                ][t.month()]
            : n(this._months)
            ? this._months
            : this._months.standalone;
        }
        function ct(t, e) {
          return t
            ? n(this._monthsShort)
              ? this._monthsShort[t.month()]
              : this._monthsShort[Dr.test(e) ? "format" : "standalone"][
                  t.month()
                ]
            : n(this._monthsShort)
            ? this._monthsShort
            : this._monthsShort.standalone;
        }
        function ht(t, e, n) {
          var i,
            r,
            o,
            s = t.toLocaleLowerCase();
          if (!this._monthsParse)
            for (
              this._monthsParse = [],
                this._longMonthsParse = [],
                this._shortMonthsParse = [],
                i = 0;
              i < 12;
              ++i
            )
              (o = h([2e3, i])),
                (this._shortMonthsParse[i] = this.monthsShort(
                  o,
                  ""
                ).toLocaleLowerCase()),
                (this._longMonthsParse[i] = this.months(
                  o,
                  ""
                ).toLocaleLowerCase());
          return n
            ? "MMM" === e
              ? ((r = xr.call(this._shortMonthsParse, s)), r !== -1 ? r : null)
              : ((r = xr.call(this._longMonthsParse, s)), r !== -1 ? r : null)
            : "MMM" === e
            ? (r = xr.call(this._shortMonthsParse, s)) !== -1
              ? r
              : ((r = xr.call(this._longMonthsParse, s)), r !== -1 ? r : null)
            : (r = xr.call(this._longMonthsParse, s)) !== -1
            ? r
            : ((r = xr.call(this._shortMonthsParse, s)), r !== -1 ? r : null);
        }
        function pt(t, e, n) {
          var i, r, o;
          if (this._monthsParseExact) return ht.call(this, t, e, n);
          for (
            this._monthsParse ||
              ((this._monthsParse = []),
              (this._longMonthsParse = []),
              (this._shortMonthsParse = [])),
              i = 0;
            i < 12;
            i++
          ) {
            if (
              ((r = h([2e3, i])),
              n &&
                !this._longMonthsParse[i] &&
                ((this._longMonthsParse[i] = new RegExp(
                  "^" + this.months(r, "").replace(".", "") + "$",
                  "i"
                )),
                (this._shortMonthsParse[i] = new RegExp(
                  "^" + this.monthsShort(r, "").replace(".", "") + "$",
                  "i"
                ))),
              n ||
                this._monthsParse[i] ||
                ((o =
                  "^" + this.months(r, "") + "|^" + this.monthsShort(r, "")),
                (this._monthsParse[i] = new RegExp(o.replace(".", ""), "i"))),
              n && "MMMM" === e && this._longMonthsParse[i].test(t))
            )
              return i;
            if (n && "MMM" === e && this._shortMonthsParse[i].test(t)) return i;
            if (!n && this._monthsParse[i].test(t)) return i;
          }
        }
        function ft(t, e) {
          var n;
          if (!t.isValid()) return t;
          if ("string" == typeof e)
            if (/^\d+$/.test(e)) e = w(e);
            else if (((e = t.localeData().monthsParse(e)), !s(e))) return t;
          return (
            (n = Math.min(t.date(), lt(t.year(), e))),
            t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n),
            t
          );
        }
        function dt(e) {
          return null != e
            ? (ft(this, e), t.updateOffset(this, !0), this)
            : it(this, "Month");
        }
        function yt() {
          return lt(this.year(), this.month());
        }
        function mt(t) {
          return this._monthsParseExact
            ? (u(this, "_monthsRegex") || _t.call(this),
              t ? this._monthsShortStrictRegex : this._monthsShortRegex)
            : (u(this, "_monthsShortRegex") || (this._monthsShortRegex = Fr),
              this._monthsShortStrictRegex && t
                ? this._monthsShortStrictRegex
                : this._monthsShortRegex);
        }
        function gt(t) {
          return this._monthsParseExact
            ? (u(this, "_monthsRegex") || _t.call(this),
              t ? this._monthsStrictRegex : this._monthsRegex)
            : (u(this, "_monthsRegex") || (this._monthsRegex = Ir),
              this._monthsStrictRegex && t
                ? this._monthsStrictRegex
                : this._monthsRegex);
        }
        function _t() {
          function t(t, e) {
            return e.length - t.length;
          }
          var e,
            n,
            i = [],
            r = [],
            o = [];
          for (e = 0; e < 12; e++)
            (n = h([2e3, e])),
              i.push(this.monthsShort(n, "")),
              r.push(this.months(n, "")),
              o.push(this.months(n, "")),
              o.push(this.monthsShort(n, ""));
          for (i.sort(t), r.sort(t), o.sort(t), e = 0; e < 12; e++)
            (i[e] = G(i[e])), (r[e] = G(r[e]));
          for (e = 0; e < 24; e++) o[e] = G(o[e]);
          (this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i")),
            (this._monthsShortRegex = this._monthsRegex),
            (this._monthsStrictRegex = new RegExp(
              "^(" + r.join("|") + ")",
              "i"
            )),
            (this._monthsShortStrictRegex = new RegExp(
              "^(" + i.join("|") + ")",
              "i"
            ));
        }
        function vt(t, e, n, i, r, o, s) {
          var a;
          return (
            t < 100 && t >= 0
              ? ((a = new Date(t + 400, e, n, i, r, o, s)),
                isFinite(a.getFullYear()) && a.setFullYear(t))
              : (a = new Date(t, e, n, i, r, o, s)),
            a
          );
        }
        function wt(t) {
          var e;
          if (t < 100 && t >= 0) {
            var n = Array.prototype.slice.call(arguments);
            (n[0] = t + 400),
              (e = new Date(Date.UTC.apply(null, n))),
              isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t);
          } else e = new Date(Date.UTC.apply(null, arguments));
          return e;
        }
        function St(t, e, n) {
          var i = 7 + e - n;
          return -((7 + wt(t, 0, i).getUTCDay() - e) % 7) + i - 1;
        }
        function bt(t, e, n, i, r) {
          var o,
            s,
            a = (7 + n - i) % 7,
            l = St(t, i, r),
            u = 1 + 7 * (e - 1) + a + l;
          return (
            u <= 0
              ? ((o = t - 1), (s = X(o) + u))
              : u > X(t)
              ? ((o = t + 1), (s = u - X(t)))
              : ((o = t), (s = u)),
            { year: o, dayOfYear: s }
          );
        }
        function xt(t, e, n) {
          var i,
            r,
            o = St(t.year(), e, n),
            s = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
          return (
            s < 1
              ? ((r = t.year() - 1), (i = s + Tt(r, e, n)))
              : s > Tt(t.year(), e, n)
              ? ((i = s - Tt(t.year(), e, n)), (r = t.year() + 1))
              : ((r = t.year()), (i = s)),
            { week: i, year: r }
          );
        }
        function Tt(t, e, n) {
          var i = St(t, e, n),
            r = St(t + 1, e, n);
          return (X(t) - i + r) / 7;
        }
        function Dt(t) {
          return xt(t, this._week.dow, this._week.doy).week;
        }
        function Ct() {
          return this._week.dow;
        }
        function Rt() {
          return this._week.doy;
        }
        function Ft(t) {
          var e = this.localeData().week(this);
          return null == t ? e : this.add(7 * (t - e), "d");
        }
        function It(t) {
          var e = xt(this, 1, 4).week;
          return null == t ? e : this.add(7 * (t - e), "d");
        }
        function Mt(t, e) {
          return "string" != typeof t
            ? t
            : isNaN(t)
            ? ((t = e.weekdaysParse(t)), "number" == typeof t ? t : null)
            : parseInt(t, 10);
        }
        function Ot(t, e) {
          return "string" == typeof t
            ? e.weekdaysParse(t) % 7 || 7
            : isNaN(t)
            ? null
            : t;
        }
        function kt(t, e) {
          return t.slice(e, 7).concat(t.slice(0, e));
        }
        function At(t, e) {
          var i = n(this._weekdays)
            ? this._weekdays
            : this._weekdays[
                t && t !== !0 && this._weekdays.isFormat.test(e)
                  ? "format"
                  : "standalone"
              ];
          return t === !0 ? kt(i, this._week.dow) : t ? i[t.day()] : i;
        }
        function Et(t) {
          return t === !0
            ? kt(this._weekdaysShort, this._week.dow)
            : t
            ? this._weekdaysShort[t.day()]
            : this._weekdaysShort;
        }
        function Lt(t) {
          return t === !0
            ? kt(this._weekdaysMin, this._week.dow)
            : t
            ? this._weekdaysMin[t.day()]
            : this._weekdaysMin;
        }
        function Qt(t, e, n) {
          var i,
            r,
            o,
            s = t.toLocaleLowerCase();
          if (!this._weekdaysParse)
            for (
              this._weekdaysParse = [],
                this._shortWeekdaysParse = [],
                this._minWeekdaysParse = [],
                i = 0;
              i < 7;
              ++i
            )
              (o = h([2e3, 1]).day(i)),
                (this._minWeekdaysParse[i] = this.weekdaysMin(
                  o,
                  ""
                ).toLocaleLowerCase()),
                (this._shortWeekdaysParse[i] = this.weekdaysShort(
                  o,
                  ""
                ).toLocaleLowerCase()),
                (this._weekdaysParse[i] = this.weekdays(
                  o,
                  ""
                ).toLocaleLowerCase());
          return n
            ? "dddd" === e
              ? ((r = xr.call(this._weekdaysParse, s)), r !== -1 ? r : null)
              : "ddd" === e
              ? ((r = xr.call(this._shortWeekdaysParse, s)),
                r !== -1 ? r : null)
              : ((r = xr.call(this._minWeekdaysParse, s)), r !== -1 ? r : null)
            : "dddd" === e
            ? (r = xr.call(this._weekdaysParse, s)) !== -1
              ? r
              : (r = xr.call(this._shortWeekdaysParse, s)) !== -1
              ? r
              : ((r = xr.call(this._minWeekdaysParse, s)), r !== -1 ? r : null)
            : "ddd" === e
            ? (r = xr.call(this._shortWeekdaysParse, s)) !== -1
              ? r
              : (r = xr.call(this._weekdaysParse, s)) !== -1
              ? r
              : ((r = xr.call(this._minWeekdaysParse, s)), r !== -1 ? r : null)
            : (r = xr.call(this._minWeekdaysParse, s)) !== -1
            ? r
            : (r = xr.call(this._weekdaysParse, s)) !== -1
            ? r
            : ((r = xr.call(this._shortWeekdaysParse, s)), r !== -1 ? r : null);
        }
        function Nt(t, e, n) {
          var i, r, o;
          if (this._weekdaysParseExact) return Qt.call(this, t, e, n);
          for (
            this._weekdaysParse ||
              ((this._weekdaysParse = []),
              (this._minWeekdaysParse = []),
              (this._shortWeekdaysParse = []),
              (this._fullWeekdaysParse = [])),
              i = 0;
            i < 7;
            i++
          ) {
            if (
              ((r = h([2e3, 1]).day(i)),
              n &&
                !this._fullWeekdaysParse[i] &&
                ((this._fullWeekdaysParse[i] = new RegExp(
                  "^" + this.weekdays(r, "").replace(".", "\\.?") + "$",
                  "i"
                )),
                (this._shortWeekdaysParse[i] = new RegExp(
                  "^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$",
                  "i"
                )),
                (this._minWeekdaysParse[i] = new RegExp(
                  "^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$",
                  "i"
                ))),
              this._weekdaysParse[i] ||
                ((o =
                  "^" +
                  this.weekdays(r, "") +
                  "|^" +
                  this.weekdaysShort(r, "") +
                  "|^" +
                  this.weekdaysMin(r, "")),
                (this._weekdaysParse[i] = new RegExp(o.replace(".", ""), "i"))),
              n && "dddd" === e && this._fullWeekdaysParse[i].test(t))
            )
              return i;
            if (n && "ddd" === e && this._shortWeekdaysParse[i].test(t))
              return i;
            if (n && "dd" === e && this._minWeekdaysParse[i].test(t)) return i;
            if (!n && this._weekdaysParse[i].test(t)) return i;
          }
        }
        function Pt(t) {
          if (!this.isValid()) return null != t ? this : NaN;
          var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
          return null != t
            ? ((t = Mt(t, this.localeData())), this.add(t - e, "d"))
            : e;
        }
        function jt(t) {
          if (!this.isValid()) return null != t ? this : NaN;
          var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
          return null == t ? e : this.add(t - e, "d");
        }
        function qt(t) {
          if (!this.isValid()) return null != t ? this : NaN;
          if (null != t) {
            var e = Ot(t, this.localeData());
            return this.day(this.day() % 7 ? e : e - 7);
          }
          return this.day() || 7;
        }
        function $t(t) {
          return this._weekdaysParseExact
            ? (u(this, "_weekdaysRegex") || Bt.call(this),
              t ? this._weekdaysStrictRegex : this._weekdaysRegex)
            : (u(this, "_weekdaysRegex") || (this._weekdaysRegex = Er),
              this._weekdaysStrictRegex && t
                ? this._weekdaysStrictRegex
                : this._weekdaysRegex);
        }
        function Ut(t) {
          return this._weekdaysParseExact
            ? (u(this, "_weekdaysRegex") || Bt.call(this),
              t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            : (u(this, "_weekdaysShortRegex") ||
                (this._weekdaysShortRegex = Lr),
              this._weekdaysShortStrictRegex && t
                ? this._weekdaysShortStrictRegex
                : this._weekdaysShortRegex);
        }
        function Ht(t) {
          return this._weekdaysParseExact
            ? (u(this, "_weekdaysRegex") || Bt.call(this),
              t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            : (u(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Qr),
              this._weekdaysMinStrictRegex && t
                ? this._weekdaysMinStrictRegex
                : this._weekdaysMinRegex);
        }
        function Bt() {
          function t(t, e) {
            return e.length - t.length;
          }
          var e,
            n,
            i,
            r,
            o,
            s = [],
            a = [],
            l = [],
            u = [];
          for (e = 0; e < 7; e++)
            (n = h([2e3, 1]).day(e)),
              (i = this.weekdaysMin(n, "")),
              (r = this.weekdaysShort(n, "")),
              (o = this.weekdays(n, "")),
              s.push(i),
              a.push(r),
              l.push(o),
              u.push(i),
              u.push(r),
              u.push(o);
          for (s.sort(t), a.sort(t), l.sort(t), u.sort(t), e = 0; e < 7; e++)
            (a[e] = G(a[e])), (l[e] = G(l[e])), (u[e] = G(u[e]));
          (this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i")),
            (this._weekdaysShortRegex = this._weekdaysRegex),
            (this._weekdaysMinRegex = this._weekdaysRegex),
            (this._weekdaysStrictRegex = new RegExp(
              "^(" + l.join("|") + ")",
              "i"
            )),
            (this._weekdaysShortStrictRegex = new RegExp(
              "^(" + a.join("|") + ")",
              "i"
            )),
            (this._weekdaysMinStrictRegex = new RegExp(
              "^(" + s.join("|") + ")",
              "i"
            ));
        }
        function Vt() {
          return this.hours() % 12 || 12;
        }
        function Yt() {
          return this.hours() || 24;
        }
        function Wt(t, e) {
          $(t, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), e);
          });
        }
        function zt(t, e) {
          return e._meridiemParse;
        }
        function Gt(t) {
          return "p" === (t + "").toLowerCase().charAt(0);
        }
        function Kt(t, e, n) {
          return t > 11 ? (n ? "pm" : "PM") : n ? "am" : "AM";
        }
        function Jt(t) {
          return t ? t.toLowerCase().replace("_", "-") : t;
        }
        function Zt(t) {
          for (var e, n, i, r, o = 0; o < t.length; ) {
            for (
              r = Jt(t[o]).split("-"),
                e = r.length,
                n = Jt(t[o + 1]),
                n = n ? n.split("-") : null;
              e > 0;

            ) {
              if ((i = Xt(r.slice(0, e).join("-")))) return i;
              if (n && n.length >= e && S(r, n, !0) >= e - 1) break;
              e--;
            }
            o++;
          }
          return Nr;
        }
        function Xt(t) {
          var e = null;
          if (
            !$r[t] &&
            "undefined" != typeof module &&
            module &&
            module.exports
          )
            try {
              (e = Nr._abbr), require("./locale/" + t), te(e);
            } catch (t) {}
          return $r[t];
        }
        function te(t, e) {
          var n;
          return (
            t &&
              ((n = o(e) ? ie(t) : ee(t, e)),
              n
                ? (Nr = n)
                : "undefined" != typeof console &&
                  console.warn &&
                  console.warn(
                    "Locale " + t + " not found. Did you forget to load it?"
                  )),
            Nr._abbr
          );
        }
        function ee(t, e) {
          if (null !== e) {
            var n,
              i = qr;
            if (((e.abbr = t), null != $r[t]))
              T(
                "defineLocaleOverride",
                "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
              ),
                (i = $r[t]._config);
            else if (null != e.parentLocale)
              if (null != $r[e.parentLocale]) i = $r[e.parentLocale]._config;
              else {
                if (null == (n = Xt(e.parentLocale)))
                  return (
                    Ur[e.parentLocale] || (Ur[e.parentLocale] = []),
                    Ur[e.parentLocale].push({ name: t, config: e }),
                    null
                  );
                i = n._config;
              }
            return (
              ($r[t] = new F(R(i, e))),
              Ur[t] &&
                Ur[t].forEach(function (t) {
                  ee(t.name, t.config);
                }),
              te(t),
              $r[t]
            );
          }
          return delete $r[t], null;
        }
        function ne(t, e) {
          if (null != e) {
            var n,
              i,
              r = qr;
            (i = Xt(t)),
              null != i && (r = i._config),
              (e = R(r, e)),
              (n = new F(e)),
              (n.parentLocale = $r[t]),
              ($r[t] = n),
              te(t);
          } else null != $r[t] && (null != $r[t].parentLocale ? ($r[t] = $r[t].parentLocale) : null != $r[t] && delete $r[t]);
          return $r[t];
        }
        function ie(t) {
          var e;
          if ((t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t))
            return Nr;
          if (!n(t)) {
            if ((e = Xt(t))) return e;
            t = [t];
          }
          return Zt(t);
        }
        function re() {
          return Qi($r);
        }
        function oe(t) {
          var e,
            n = t._a;
          return (
            n &&
              f(t).overflow === -2 &&
              ((e =
                n[yr] < 0 || n[yr] > 11
                  ? yr
                  : n[mr] < 1 || n[mr] > lt(n[dr], n[yr])
                  ? mr
                  : n[gr] < 0 ||
                    n[gr] > 24 ||
                    (24 === n[gr] &&
                      (0 !== n[_r] || 0 !== n[vr] || 0 !== n[wr]))
                  ? gr
                  : n[_r] < 0 || n[_r] > 59
                  ? _r
                  : n[vr] < 0 || n[vr] > 59
                  ? vr
                  : n[wr] < 0 || n[wr] > 999
                  ? wr
                  : -1),
              f(t)._overflowDayOfYear && (e < dr || e > mr) && (e = mr),
              f(t)._overflowWeeks && e === -1 && (e = Sr),
              f(t)._overflowWeekday && e === -1 && (e = br),
              (f(t).overflow = e)),
            t
          );
        }
        function se(t, e, n) {
          return null != t ? t : null != e ? e : n;
        }
        function ae(e) {
          var n = new Date(t.now());
          return e._useUTC
            ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()]
            : [n.getFullYear(), n.getMonth(), n.getDate()];
        }
        function le(t) {
          var e,
            n,
            i,
            r,
            o,
            s = [];
          if (!t._d) {
            for (
              i = ae(t),
                t._w && null == t._a[mr] && null == t._a[yr] && ue(t),
                null != t._dayOfYear &&
                  ((o = se(t._a[dr], i[dr])),
                  (t._dayOfYear > X(o) || 0 === t._dayOfYear) &&
                    (f(t)._overflowDayOfYear = !0),
                  (n = wt(o, 0, t._dayOfYear)),
                  (t._a[yr] = n.getUTCMonth()),
                  (t._a[mr] = n.getUTCDate())),
                e = 0;
              e < 3 && null == t._a[e];
              ++e
            )
              t._a[e] = s[e] = i[e];
            for (; e < 7; e++)
              t._a[e] = s[e] = null == t._a[e] ? (2 === e ? 1 : 0) : t._a[e];
            24 === t._a[gr] &&
              0 === t._a[_r] &&
              0 === t._a[vr] &&
              0 === t._a[wr] &&
              ((t._nextDay = !0), (t._a[gr] = 0)),
              (t._d = (t._useUTC ? wt : vt).apply(null, s)),
              (r = t._useUTC ? t._d.getUTCDay() : t._d.getDay()),
              null != t._tzm &&
                t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
              t._nextDay && (t._a[gr] = 24),
              t._w &&
                "undefined" != typeof t._w.d &&
                t._w.d !== r &&
                (f(t).weekdayMismatch = !0);
          }
        }
        function ue(t) {
          var e, n, i, r, o, s, a, l;
          if (((e = t._w), null != e.GG || null != e.W || null != e.E))
            (o = 1),
              (s = 4),
              (n = se(e.GG, t._a[dr], xt(Ce(), 1, 4).year)),
              (i = se(e.W, 1)),
              ((r = se(e.E, 1)) < 1 || r > 7) && (l = !0);
          else {
            (o = t._locale._week.dow), (s = t._locale._week.doy);
            var u = xt(Ce(), o, s);
            (n = se(e.gg, t._a[dr], u.year)),
              (i = se(e.w, u.week)),
              null != e.d
                ? ((r = e.d) < 0 || r > 6) && (l = !0)
                : null != e.e
                ? ((r = e.e + o), (e.e < 0 || e.e > 6) && (l = !0))
                : (r = o);
          }
          i < 1 || i > Tt(n, o, s)
            ? (f(t)._overflowWeeks = !0)
            : null != l
            ? (f(t)._overflowWeekday = !0)
            : ((a = bt(n, i, r, o, s)),
              (t._a[dr] = a.year),
              (t._dayOfYear = a.dayOfYear));
        }
        function ce(t) {
          var e,
            n,
            i,
            r,
            o,
            s,
            a = t._i,
            l = Hr.exec(a) || Br.exec(a);
          if (l) {
            for (f(t).iso = !0, e = 0, n = Yr.length; e < n; e++)
              if (Yr[e][1].exec(l[1])) {
                (r = Yr[e][0]), (i = Yr[e][2] !== !1);
                break;
              }
            if (null == r) return void (t._isValid = !1);
            if (l[3]) {
              for (e = 0, n = Wr.length; e < n; e++)
                if (Wr[e][1].exec(l[3])) {
                  o = (l[2] || " ") + Wr[e][0];
                  break;
                }
              if (null == o) return void (t._isValid = !1);
            }
            if (!i && null != o) return void (t._isValid = !1);
            if (l[4]) {
              if (!Vr.exec(l[4])) return void (t._isValid = !1);
              s = "Z";
            }
            (t._f = r + (o || "") + (s || "")), _e(t);
          } else t._isValid = !1;
        }
        function he(t, e, n, i, r, o) {
          var s = [
            pe(t),
            Rr.indexOf(e),
            parseInt(n, 10),
            parseInt(i, 10),
            parseInt(r, 10),
          ];
          return o && s.push(parseInt(o, 10)), s;
        }
        function pe(t) {
          var e = parseInt(t, 10);
          return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e;
        }
        function fe(t) {
          return t
            .replace(/\([^)]*\)|[\n\t]/g, " ")
            .replace(/(\s\s+)/g, " ")
            .replace(/^\s\s*/, "")
            .replace(/\s\s*$/, "");
        }
        function de(t, e, n) {
          return (
            !t ||
            kr.indexOf(t) === new Date(e[0], e[1], e[2]).getDay() ||
            ((f(n).weekdayMismatch = !0), (n._isValid = !1), !1)
          );
        }
        function ye(t, e, n) {
          if (t) return Kr[t];
          if (e) return 0;
          var i = parseInt(n, 10),
            r = i % 100;
          return ((i - r) / 100) * 60 + r;
        }
        function me(t) {
          var e = Gr.exec(fe(t._i));
          if (e) {
            var n = he(e[4], e[3], e[2], e[5], e[6], e[7]);
            if (!de(e[1], n, t)) return;
            (t._a = n),
              (t._tzm = ye(e[8], e[9], e[10])),
              (t._d = wt.apply(null, t._a)),
              t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
              (f(t).rfc2822 = !0);
          } else t._isValid = !1;
        }
        function ge(e) {
          var n = zr.exec(e._i);
          if (null !== n) return void (e._d = new Date(+n[1]));
          ce(e),
            e._isValid === !1 &&
              (delete e._isValid,
              me(e),
              e._isValid === !1 &&
                (delete e._isValid, t.createFromInputFallback(e)));
        }
        function _e(e) {
          if (e._f === t.ISO_8601) return void ce(e);
          if (e._f === t.RFC_2822) return void me(e);
          (e._a = []), (f(e).empty = !0);
          var n,
            i,
            r,
            o,
            s,
            a = "" + e._i,
            l = a.length,
            u = 0;
          for (r = V(e._f, e._locale).match(Vi) || [], n = 0; n < r.length; n++)
            (o = r[n]),
              (i = (a.match(W(o, e)) || [])[0]),
              i &&
                ((s = a.substr(0, a.indexOf(i))),
                s.length > 0 && f(e).unusedInput.push(s),
                (a = a.slice(a.indexOf(i) + i.length)),
                (u += i.length)),
              zi[o]
                ? (i ? (f(e).empty = !1) : f(e).unusedTokens.push(o),
                  Z(o, i, e))
                : e._strict && !i && f(e).unusedTokens.push(o);
          (f(e).charsLeftOver = l - u),
            a.length > 0 && f(e).unusedInput.push(a),
            e._a[gr] <= 12 &&
              f(e).bigHour === !0 &&
              e._a[gr] > 0 &&
              (f(e).bigHour = undefined),
            (f(e).parsedDateParts = e._a.slice(0)),
            (f(e).meridiem = e._meridiem),
            (e._a[gr] = ve(e._locale, e._a[gr], e._meridiem)),
            le(e),
            oe(e);
        }
        function ve(t, e, n) {
          var i;
          return null == n
            ? e
            : null != t.meridiemHour
            ? t.meridiemHour(e, n)
            : null != t.isPM
            ? ((i = t.isPM(n)),
              i && e < 12 && (e += 12),
              i || 12 !== e || (e = 0),
              e)
            : e;
        }
        function we(t) {
          var e, n, i, r, o;
          if (0 === t._f.length)
            return (f(t).invalidFormat = !0), void (t._d = new Date(NaN));
          for (r = 0; r < t._f.length; r++)
            (o = 0),
              (e = m({}, t)),
              null != t._useUTC && (e._useUTC = t._useUTC),
              (e._f = t._f[r]),
              _e(e),
              d(e) &&
                ((o += f(e).charsLeftOver),
                (o += 10 * f(e).unusedTokens.length),
                (f(e).score = o),
                (null == i || o < i) && ((i = o), (n = e)));
          c(t, n || e);
        }
        function Se(t) {
          if (!t._d) {
            var e = N(t._i);
            (t._a = l(
              [
                e.year,
                e.month,
                e.day || e.date,
                e.hour,
                e.minute,
                e.second,
                e.millisecond,
              ],
              function (t) {
                return t && parseInt(t, 10);
              }
            )),
              le(t);
          }
        }
        function be(t) {
          var e = new g(oe(xe(t)));
          return e._nextDay && (e.add(1, "d"), (e._nextDay = undefined)), e;
        }
        function xe(t) {
          var e = t._i,
            i = t._f;
          return (
            (t._locale = t._locale || ie(t._l)),
            null === e || (i === undefined && "" === e)
              ? y({ nullInput: !0 })
              : ("string" == typeof e && (t._i = e = t._locale.preparse(e)),
                _(e)
                  ? new g(oe(e))
                  : (a(e) ? (t._d = e) : n(i) ? we(t) : i ? _e(t) : Te(t),
                    d(t) || (t._d = null),
                    t))
          );
        }
        function Te(e) {
          var r = e._i;
          o(r)
            ? (e._d = new Date(t.now()))
            : a(r)
            ? (e._d = new Date(r.valueOf()))
            : "string" == typeof r
            ? ge(e)
            : n(r)
            ? ((e._a = l(r.slice(0), function (t) {
                return parseInt(t, 10);
              })),
              le(e))
            : i(r)
            ? Se(e)
            : s(r)
            ? (e._d = new Date(r))
            : t.createFromInputFallback(e);
        }
        function De(t, e, o, s, a) {
          var l = {};
          return (
            (o !== !0 && o !== !1) || ((s = o), (o = undefined)),
            ((i(t) && r(t)) || (n(t) && 0 === t.length)) && (t = undefined),
            (l._isAMomentObject = !0),
            (l._useUTC = l._isUTC = a),
            (l._l = o),
            (l._i = t),
            (l._f = e),
            (l._strict = s),
            be(l)
          );
        }
        function Ce(t, e, n, i) {
          return De(t, e, n, i, !1);
        }
        function Re(t, e) {
          var i, r;
          if ((1 === e.length && n(e[0]) && (e = e[0]), !e.length)) return Ce();
          for (i = e[0], r = 1; r < e.length; ++r)
            (e[r].isValid() && !e[r][t](i)) || (i = e[r]);
          return i;
        }
        function Fe() {
          return Re("isBefore", [].slice.call(arguments, 0));
        }
        function Ie() {
          return Re("isAfter", [].slice.call(arguments, 0));
        }
        function Me(t) {
          for (var e in t)
            if (xr.call(to, e) === -1 || (null != t[e] && isNaN(t[e])))
              return !1;
          for (var n = !1, i = 0; i < to.length; ++i)
            if (t[to[i]]) {
              if (n) return !1;
              parseFloat(t[to[i]]) !== w(t[to[i]]) && (n = !0);
            }
          return !0;
        }
        function Oe() {
          return this._isValid;
        }
        function ke() {
          return Je(NaN);
        }
        function Ae(t) {
          var e = N(t),
            n = e.year || 0,
            i = e.quarter || 0,
            r = e.month || 0,
            o = e.week || e.isoWeek || 0,
            s = e.day || 0,
            a = e.hour || 0,
            l = e.minute || 0,
            u = e.second || 0,
            c = e.millisecond || 0;
          (this._isValid = Me(e)),
            (this._milliseconds = +c + 1e3 * u + 6e4 * l + 1e3 * a * 60 * 60),
            (this._days = +s + 7 * o),
            (this._months = +r + 3 * i + 12 * n),
            (this._data = {}),
            (this._locale = ie()),
            this._bubble();
        }
        function Ee(t) {
          return t instanceof Ae;
        }
        function Le(t) {
          return t < 0 ? Math.round(-1 * t) * -1 : Math.round(t);
        }
        function Qe(t, e) {
          $(t, 0, 0, function () {
            var t = this.utcOffset(),
              n = "+";
            return (
              t < 0 && ((t = -t), (n = "-")),
              n + q(~~(t / 60), 2) + e + q(~~t % 60, 2)
            );
          });
        }
        function Ne(t, e) {
          var n = (e || "").match(t);
          if (null === n) return null;
          var i = n[n.length - 1] || [],
            r = (i + "").match(eo) || ["-", 0, 0],
            o = +(60 * r[1]) + w(r[2]);
          return 0 === o ? 0 : "+" === r[0] ? o : -o;
        }
        function Pe(e, n) {
          var i, r;
          return n._isUTC
            ? ((i = n.clone()),
              (r =
                (_(e) || a(e) ? e.valueOf() : Ce(e).valueOf()) - i.valueOf()),
              i._d.setTime(i._d.valueOf() + r),
              t.updateOffset(i, !1),
              i)
            : Ce(e).local();
        }
        function je(t) {
          return 15 * -Math.round(t._d.getTimezoneOffset() / 15);
        }
        function qe(e, n, i) {
          var r,
            o = this._offset || 0;
          if (!this.isValid()) return null != e ? this : NaN;
          if (null != e) {
            if ("string" == typeof e) {
              if (null === (e = Ne(ur, e))) return this;
            } else Math.abs(e) < 16 && !i && (e *= 60);
            return (
              !this._isUTC && n && (r = je(this)),
              (this._offset = e),
              (this._isUTC = !0),
              null != r && this.add(r, "m"),
              o !== e &&
                (!n || this._changeInProgress
                  ? nn(this, Je(e - o, "m"), 1, !1)
                  : this._changeInProgress ||
                    ((this._changeInProgress = !0),
                    t.updateOffset(this, !0),
                    (this._changeInProgress = null))),
              this
            );
          }
          return this._isUTC ? o : je(this);
        }
        function $e(t, e) {
          return null != t
            ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this)
            : -this.utcOffset();
        }
        function Ue(t) {
          return this.utcOffset(0, t);
        }
        function He(t) {
          return (
            this._isUTC &&
              (this.utcOffset(0, t),
              (this._isUTC = !1),
              t && this.subtract(je(this), "m")),
            this
          );
        }
        function Be() {
          if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
          else if ("string" == typeof this._i) {
            var t = Ne(lr, this._i);
            null != t ? this.utcOffset(t) : this.utcOffset(0, !0);
          }
          return this;
        }
        function Ve(t) {
          return (
            !!this.isValid() &&
            ((t = t ? Ce(t).utcOffset() : 0), (this.utcOffset() - t) % 60 == 0)
          );
        }
        function Ye() {
          return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
          );
        }
        function We() {
          if (!o(this._isDSTShifted)) return this._isDSTShifted;
          var t = {};
          if ((m(t, this), (t = xe(t)), t._a)) {
            var e = t._isUTC ? h(t._a) : Ce(t._a);
            this._isDSTShifted = this.isValid() && S(t._a, e.toArray()) > 0;
          } else this._isDSTShifted = !1;
          return this._isDSTShifted;
        }
        function ze() {
          return !!this.isValid() && !this._isUTC;
        }
        function Ge() {
          return !!this.isValid() && this._isUTC;
        }
        function Ke() {
          return !!this.isValid() && this._isUTC && 0 === this._offset;
        }
        function Je(t, e) {
          var n,
            i,
            r,
            o = t,
            a = null;
          return (
            Ee(t)
              ? (o = { ms: t._milliseconds, d: t._days, M: t._months })
              : s(t)
              ? ((o = {}), e ? (o[e] = t) : (o.milliseconds = t))
              : (a = no.exec(t))
              ? ((n = "-" === a[1] ? -1 : 1),
                (o = {
                  y: 0,
                  d: w(a[mr]) * n,
                  h: w(a[gr]) * n,
                  m: w(a[_r]) * n,
                  s: w(a[vr]) * n,
                  ms: w(Le(1e3 * a[wr])) * n,
                }))
              : (a = io.exec(t))
              ? ((n = "-" === a[1] ? -1 : 1),
                (o = {
                  y: Ze(a[2], n),
                  M: Ze(a[3], n),
                  w: Ze(a[4], n),
                  d: Ze(a[5], n),
                  h: Ze(a[6], n),
                  m: Ze(a[7], n),
                  s: Ze(a[8], n),
                }))
              : null == o
              ? (o = {})
              : "object" == typeof o &&
                ("from" in o || "to" in o) &&
                ((r = tn(Ce(o.from), Ce(o.to))),
                (o = {}),
                (o.ms = r.milliseconds),
                (o.M = r.months)),
            (i = new Ae(o)),
            Ee(t) && u(t, "_locale") && (i._locale = t._locale),
            i
          );
        }
        function Ze(t, e) {
          var n = t && parseFloat(t.replace(",", "."));
          return (isNaN(n) ? 0 : n) * e;
        }
        function Xe(t, e) {
          var n = {};
          return (
            (n.months = e.month() - t.month() + 12 * (e.year() - t.year())),
            t.clone().add(n.months, "M").isAfter(e) && --n.months,
            (n.milliseconds = +e - +t.clone().add(n.months, "M")),
            n
          );
        }
        function tn(t, e) {
          var n;
          return t.isValid() && e.isValid()
            ? ((e = Pe(e, t)),
              t.isBefore(e)
                ? (n = Xe(t, e))
                : ((n = Xe(e, t)),
                  (n.milliseconds = -n.milliseconds),
                  (n.months = -n.months)),
              n)
            : { milliseconds: 0, months: 0 };
        }
        function en(t, e) {
          return function (n, i) {
            var r, o;
            return (
              null === i ||
                isNaN(+i) ||
                (T(
                  e,
                  "moment()." +
                    e +
                    "(period, number) is deprecated. Please use moment()." +
                    e +
                    "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
                ),
                (o = n),
                (n = i),
                (i = o)),
              (n = "string" == typeof n ? +n : n),
              (r = Je(n, i)),
              nn(this, r, t),
              this
            );
          };
        }
        function nn(e, n, i, r) {
          var o = n._milliseconds,
            s = Le(n._days),
            a = Le(n._months);
          e.isValid() &&
            ((r = null == r || r),
            a && ft(e, it(e, "Month") + a * i),
            s && rt(e, "Date", it(e, "Date") + s * i),
            o && e._d.setTime(e._d.valueOf() + o * i),
            r && t.updateOffset(e, s || a));
        }
        function rn(t, e) {
          var n = t.diff(e, "days", !0);
          return n < -6
            ? "sameElse"
            : n < -1
            ? "lastWeek"
            : n < 0
            ? "lastDay"
            : n < 1
            ? "sameDay"
            : n < 2
            ? "nextDay"
            : n < 7
            ? "nextWeek"
            : "sameElse";
        }
        function on(e, n) {
          var i = e || Ce(),
            r = Pe(i, this).startOf("day"),
            o = t.calendarFormat(this, r) || "sameElse",
            s = n && (D(n[o]) ? n[o].call(this, i) : n[o]);
          return this.format(s || this.localeData().calendar(o, this, Ce(i)));
        }
        function sn() {
          return new g(this);
        }
        function an(t, e) {
          var n = _(t) ? t : Ce(t);
          return (
            !(!this.isValid() || !n.isValid()) &&
            ((e = Q(e) || "millisecond"),
            "millisecond" === e
              ? this.valueOf() > n.valueOf()
              : n.valueOf() < this.clone().startOf(e).valueOf())
          );
        }
        function ln(t, e) {
          var n = _(t) ? t : Ce(t);
          return (
            !(!this.isValid() || !n.isValid()) &&
            ((e = Q(e) || "millisecond"),
            "millisecond" === e
              ? this.valueOf() < n.valueOf()
              : this.clone().endOf(e).valueOf() < n.valueOf())
          );
        }
        function un(t, e, n, i) {
          var r = _(t) ? t : Ce(t),
            o = _(e) ? e : Ce(e);
          return (
            !!(this.isValid() && r.isValid() && o.isValid()) &&
            ((i = i || "()"),
            ("(" === i[0] ? this.isAfter(r, n) : !this.isBefore(r, n)) &&
              (")" === i[1] ? this.isBefore(o, n) : !this.isAfter(o, n)))
          );
        }
        function cn(t, e) {
          var n,
            i = _(t) ? t : Ce(t);
          return (
            !(!this.isValid() || !i.isValid()) &&
            ((e = Q(e) || "millisecond"),
            "millisecond" === e
              ? this.valueOf() === i.valueOf()
              : ((n = i.valueOf()),
                this.clone().startOf(e).valueOf() <= n &&
                  n <= this.clone().endOf(e).valueOf()))
          );
        }
        function hn(t, e) {
          return this.isSame(t, e) || this.isAfter(t, e);
        }
        function pn(t, e) {
          return this.isSame(t, e) || this.isBefore(t, e);
        }
        function fn(t, e, n) {
          var i, r, o;
          if (!this.isValid()) return NaN;
          if (((i = Pe(t, this)), !i.isValid())) return NaN;
          switch (
            ((r = 6e4 * (i.utcOffset() - this.utcOffset())), (e = Q(e)))
          ) {
            case "year":
              o = dn(this, i) / 12;
              break;
            case "month":
              o = dn(this, i);
              break;
            case "quarter":
              o = dn(this, i) / 3;
              break;
            case "second":
              o = (this - i) / 1e3;
              break;
            case "minute":
              o = (this - i) / 6e4;
              break;
            case "hour":
              o = (this - i) / 36e5;
              break;
            case "day":
              o = (this - i - r) / 864e5;
              break;
            case "week":
              o = (this - i - r) / 6048e5;
              break;
            default:
              o = this - i;
          }
          return n ? o : v(o);
        }
        function dn(t, e) {
          var n,
            i,
            r = 12 * (e.year() - t.year()) + (e.month() - t.month()),
            o = t.clone().add(r, "months");
          return (
            e - o < 0
              ? ((n = t.clone().add(r - 1, "months")), (i = (e - o) / (o - n)))
              : ((n = t.clone().add(r + 1, "months")), (i = (e - o) / (n - o))),
            -(r + i) || 0
          );
        }
        function yn() {
          return this.clone()
            .locale("en")
            .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        }
        function mn(t) {
          if (!this.isValid()) return null;
          var e = t !== !0,
            n = e ? this.clone().utc() : this;
          return n.year() < 0 || n.year() > 9999
            ? B(
                n,
                e
                  ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                  : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
              )
            : D(Date.prototype.toISOString)
            ? e
              ? this.toDate().toISOString()
              : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                  .toISOString()
                  .replace("Z", B(n, "Z"))
            : B(
                n,
                e
                  ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                  : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
              );
        }
        function gn() {
          if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
          var t = "moment",
            e = "";
          this.isLocal() ||
            ((t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
            (e = "Z"));
          var n = "[" + t + '("]',
            i = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
            r = e + '[")]';
          return this.format(n + i + "-MM-DD[T]HH:mm:ss.SSS" + r);
        }
        function _n(e) {
          e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
          var n = B(this, e);
          return this.localeData().postformat(n);
        }
        function vn(t, e) {
          return this.isValid() && ((_(t) && t.isValid()) || Ce(t).isValid())
            ? Je({ to: this, from: t }).locale(this.locale()).humanize(!e)
            : this.localeData().invalidDate();
        }
        function wn(t) {
          return this.from(Ce(), t);
        }
        function Sn(t, e) {
          return this.isValid() && ((_(t) && t.isValid()) || Ce(t).isValid())
            ? Je({ from: this, to: t }).locale(this.locale()).humanize(!e)
            : this.localeData().invalidDate();
        }
        function bn(t) {
          return this.to(Ce(), t);
        }
        function xn(t) {
          var e;
          return t === undefined
            ? this._locale._abbr
            : ((e = ie(t)), null != e && (this._locale = e), this);
        }
        function Tn() {
          return this._locale;
        }
        function Dn(t, e) {
          return ((t % e) + e) % e;
        }
        function Cn(t, e, n) {
          return t < 100 && t >= 0
            ? new Date(t + 400, e, n) - co
            : new Date(t, e, n).valueOf();
        }
        function Rn(t, e, n) {
          return t < 100 && t >= 0
            ? Date.UTC(t + 400, e, n) - co
            : Date.UTC(t, e, n);
        }
        function Fn(e) {
          var n;
          if (
            (e = Q(e)) === undefined ||
            "millisecond" === e ||
            !this.isValid()
          )
            return this;
          var i = this._isUTC ? Rn : Cn;
          switch (e) {
            case "year":
              n = i(this.year(), 0, 1);
              break;
            case "quarter":
              n = i(this.year(), this.month() - (this.month() % 3), 1);
              break;
            case "month":
              n = i(this.year(), this.month(), 1);
              break;
            case "week":
              n = i(this.year(), this.month(), this.date() - this.weekday());
              break;
            case "isoWeek":
              n = i(
                this.year(),
                this.month(),
                this.date() - (this.isoWeekday() - 1)
              );
              break;
            case "day":
            case "date":
              n = i(this.year(), this.month(), this.date());
              break;
            case "hour":
              (n = this._d.valueOf()),
                (n -= Dn(n + (this._isUTC ? 0 : this.utcOffset() * lo), uo));
              break;
            case "minute":
              (n = this._d.valueOf()), (n -= Dn(n, lo));
              break;
            case "second":
              (n = this._d.valueOf()), (n -= Dn(n, ao));
          }
          return this._d.setTime(n), t.updateOffset(this, !0), this;
        }
        function In(e) {
          var n;
          if (
            (e = Q(e)) === undefined ||
            "millisecond" === e ||
            !this.isValid()
          )
            return this;
          var i = this._isUTC ? Rn : Cn;
          switch (e) {
            case "year":
              n = i(this.year() + 1, 0, 1) - 1;
              break;
            case "quarter":
              n = i(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
              break;
            case "month":
              n = i(this.year(), this.month() + 1, 1) - 1;
              break;
            case "week":
              n =
                i(this.year(), this.month(), this.date() - this.weekday() + 7) -
                1;
              break;
            case "isoWeek":
              n =
                i(
                  this.year(),
                  this.month(),
                  this.date() - (this.isoWeekday() - 1) + 7
                ) - 1;
              break;
            case "day":
            case "date":
              n = i(this.year(), this.month(), this.date() + 1) - 1;
              break;
            case "hour":
              (n = this._d.valueOf()),
                (n +=
                  uo -
                  Dn(n + (this._isUTC ? 0 : this.utcOffset() * lo), uo) -
                  1);
              break;
            case "minute":
              (n = this._d.valueOf()), (n += lo - Dn(n, lo) - 1);
              break;
            case "second":
              (n = this._d.valueOf()), (n += ao - Dn(n, ao) - 1);
          }
          return this._d.setTime(n), t.updateOffset(this, !0), this;
        }
        function Mn() {
          return this._d.valueOf() - 6e4 * (this._offset || 0);
        }
        function On() {
          return Math.floor(this.valueOf() / 1e3);
        }
        function kn() {
          return new Date(this.valueOf());
        }
        function An() {
          var t = this;
          return [
            t.year(),
            t.month(),
            t.date(),
            t.hour(),
            t.minute(),
            t.second(),
            t.millisecond(),
          ];
        }
        function En() {
          var t = this;
          return {
            years: t.year(),
            months: t.month(),
            date: t.date(),
            hours: t.hours(),
            minutes: t.minutes(),
            seconds: t.seconds(),
            milliseconds: t.milliseconds(),
          };
        }
        function Ln() {
          return this.isValid() ? this.toISOString() : null;
        }
        function Qn() {
          return d(this);
        }
        function Nn() {
          return c({}, f(this));
        }
        function Pn() {
          return f(this).overflow;
        }
        function jn() {
          return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict,
          };
        }
        function qn(t, e) {
          $(0, [t, t.length], 0, e);
        }
        function $n(t) {
          return Vn.call(
            this,
            t,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy
          );
        }
        function Un(t) {
          return Vn.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4);
        }
        function Hn() {
          return Tt(this.year(), 1, 4);
        }
        function Bn() {
          var t = this.localeData()._week;
          return Tt(this.year(), t.dow, t.doy);
        }
        function Vn(t, e, n, i, r) {
          var o;
          return null == t
            ? xt(this, i, r).year
            : ((o = Tt(t, i, r)),
              e > o && (e = o),
              Yn.call(this, t, e, n, i, r));
        }
        function Yn(t, e, n, i, r) {
          var o = bt(t, e, n, i, r),
            s = wt(o.year, 0, o.dayOfYear);
          return (
            this.year(s.getUTCFullYear()),
            this.month(s.getUTCMonth()),
            this.date(s.getUTCDate()),
            this
          );
        }
        function Wn(t) {
          return null == t
            ? Math.ceil((this.month() + 1) / 3)
            : this.month(3 * (t - 1) + (this.month() % 3));
        }
        function zn(t) {
          var e =
            Math.round(
              (this.clone().startOf("day") - this.clone().startOf("year")) /
                864e5
            ) + 1;
          return null == t ? e : this.add(t - e, "d");
        }
        function Gn(t, e) {
          e[wr] = w(1e3 * ("0." + t));
        }
        function Kn() {
          return this._isUTC ? "UTC" : "";
        }
        function Jn() {
          return this._isUTC ? "Coordinated Universal Time" : "";
        }
        function Zn(t) {
          return Ce(1e3 * t);
        }
        function Xn() {
          return Ce.apply(null, arguments).parseZone();
        }
        function ti(t) {
          return t;
        }
        function ei(t, e, n, i) {
          var r = ie(),
            o = h().set(i, e);
          return r[n](o, t);
        }
        function ni(t, e, n) {
          if ((s(t) && ((e = t), (t = undefined)), (t = t || ""), null != e))
            return ei(t, e, n, "month");
          var i,
            r = [];
          for (i = 0; i < 12; i++) r[i] = ei(t, i, n, "month");
          return r;
        }
        function ii(t, e, n, i) {
          "boolean" == typeof t
            ? (s(e) && ((n = e), (e = undefined)), (e = e || ""))
            : ((e = t),
              (n = e),
              (t = !1),
              s(e) && ((n = e), (e = undefined)),
              (e = e || ""));
          var r = ie(),
            o = t ? r._week.dow : 0;
          if (null != n) return ei(e, (n + o) % 7, i, "day");
          var a,
            l = [];
          for (a = 0; a < 7; a++) l[a] = ei(e, (a + o) % 7, i, "day");
          return l;
        }
        function ri(t, e) {
          return ni(t, e, "months");
        }
        function oi(t, e) {
          return ni(t, e, "monthsShort");
        }
        function si(t, e, n) {
          return ii(t, e, n, "weekdays");
        }
        function ai(t, e, n) {
          return ii(t, e, n, "weekdaysShort");
        }
        function li(t, e, n) {
          return ii(t, e, n, "weekdaysMin");
        }
        function ui() {
          var t = this._data;
          return (
            (this._milliseconds = vo(this._milliseconds)),
            (this._days = vo(this._days)),
            (this._months = vo(this._months)),
            (t.milliseconds = vo(t.milliseconds)),
            (t.seconds = vo(t.seconds)),
            (t.minutes = vo(t.minutes)),
            (t.hours = vo(t.hours)),
            (t.months = vo(t.months)),
            (t.years = vo(t.years)),
            this
          );
        }
        function ci(t, e, n, i) {
          var r = Je(e, n);
          return (
            (t._milliseconds += i * r._milliseconds),
            (t._days += i * r._days),
            (t._months += i * r._months),
            t._bubble()
          );
        }
        function hi(t, e) {
          return ci(this, t, e, 1);
        }
        function pi(t, e) {
          return ci(this, t, e, -1);
        }
        function fi(t) {
          return t < 0 ? Math.floor(t) : Math.ceil(t);
        }
        function di() {
          var t,
            e,
            n,
            i,
            r,
            o = this._milliseconds,
            s = this._days,
            a = this._months,
            l = this._data;
          return (
            (o >= 0 && s >= 0 && a >= 0) ||
              (o <= 0 && s <= 0 && a <= 0) ||
              ((o += 864e5 * fi(mi(a) + s)), (s = 0), (a = 0)),
            (l.milliseconds = o % 1e3),
            (t = v(o / 1e3)),
            (l.seconds = t % 60),
            (e = v(t / 60)),
            (l.minutes = e % 60),
            (n = v(e / 60)),
            (l.hours = n % 24),
            (s += v(n / 24)),
            (r = v(yi(s))),
            (a += r),
            (s -= fi(mi(r))),
            (i = v(a / 12)),
            (a %= 12),
            (l.days = s),
            (l.months = a),
            (l.years = i),
            this
          );
        }
        function yi(t) {
          return (4800 * t) / 146097;
        }
        function mi(t) {
          return (146097 * t) / 4800;
        }
        function gi(t) {
          if (!this.isValid()) return NaN;
          var e,
            n,
            i = this._milliseconds;
          if ("month" === (t = Q(t)) || "quarter" === t || "year" === t)
            switch (
              ((e = this._days + i / 864e5), (n = this._months + yi(e)), t)
            ) {
              case "month":
                return n;
              case "quarter":
                return n / 3;
              case "year":
                return n / 12;
            }
          else
            switch (((e = this._days + Math.round(mi(this._months))), t)) {
              case "week":
                return e / 7 + i / 6048e5;
              case "day":
                return e + i / 864e5;
              case "hour":
                return 24 * e + i / 36e5;
              case "minute":
                return 1440 * e + i / 6e4;
              case "second":
                return 86400 * e + i / 1e3;
              case "millisecond":
                return Math.floor(864e5 * e) + i;
              default:
                throw new Error("Unknown unit " + t);
            }
        }
        function _i() {
          return this.isValid()
            ? this._milliseconds +
                864e5 * this._days +
                (this._months % 12) * 2592e6 +
                31536e6 * w(this._months / 12)
            : NaN;
        }
        function vi(t) {
          return function () {
            return this.as(t);
          };
        }
        function wi() {
          return Je(this);
        }
        function Si(t) {
          return (t = Q(t)), this.isValid() ? this[t + "s"]() : NaN;
        }
        function bi(t) {
          return function () {
            return this.isValid() ? this._data[t] : NaN;
          };
        }
        function xi() {
          return v(this.days() / 7);
        }
        function Ti(t, e, n, i, r) {
          return r.relativeTime(e || 1, !!n, t, i);
        }
        function Di(t, e, n) {
          var i = Je(t).abs(),
            r = Qo(i.as("s")),
            o = Qo(i.as("m")),
            s = Qo(i.as("h")),
            a = Qo(i.as("d")),
            l = Qo(i.as("M")),
            u = Qo(i.as("y")),
            c = (r <= No.ss && ["s", r]) ||
              (r < No.s && ["ss", r]) ||
              (o <= 1 && ["m"]) ||
              (o < No.m && ["mm", o]) ||
              (s <= 1 && ["h"]) ||
              (s < No.h && ["hh", s]) ||
              (a <= 1 && ["d"]) ||
              (a < No.d && ["dd", a]) ||
              (l <= 1 && ["M"]) ||
              (l < No.M && ["MM", l]) ||
              (u <= 1 && ["y"]) || ["yy", u];
          return (c[2] = e), (c[3] = +t > 0), (c[4] = n), Ti.apply(null, c);
        }
        function Ci(t) {
          return t === undefined
            ? Qo
            : "function" == typeof t && ((Qo = t), !0);
        }
        function Ri(t, e) {
          return (
            No[t] !== undefined &&
            (e === undefined
              ? No[t]
              : ((No[t] = e), "s" === t && (No.ss = e - 1), !0))
          );
        }
        function Fi(t) {
          if (!this.isValid()) return this.localeData().invalidDate();
          var e = this.localeData(),
            n = Di(this, !t, e);
          return t && (n = e.pastFuture(+this, n)), e.postformat(n);
        }
        function Ii(t) {
          return (t > 0) - (t < 0) || +t;
        }
        function Mi() {
          if (!this.isValid()) return this.localeData().invalidDate();
          var t,
            e,
            n,
            i = Po(this._milliseconds) / 1e3,
            r = Po(this._days),
            o = Po(this._months);
          (t = v(i / 60)),
            (e = v(t / 60)),
            (i %= 60),
            (t %= 60),
            (n = v(o / 12)),
            (o %= 12);
          var s = n,
            a = o,
            l = r,
            u = e,
            c = t,
            h = i ? i.toFixed(3).replace(/\.?0+$/, "") : "",
            p = this.asSeconds();
          if (!p) return "P0D";
          var f = p < 0 ? "-" : "",
            d = Ii(this._months) !== Ii(p) ? "-" : "",
            y = Ii(this._days) !== Ii(p) ? "-" : "",
            m = Ii(this._milliseconds) !== Ii(p) ? "-" : "";
          return (
            f +
            "P" +
            (s ? d + s + "Y" : "") +
            (a ? d + a + "M" : "") +
            (l ? y + l + "D" : "") +
            (u || c || h ? "T" : "") +
            (u ? m + u + "H" : "") +
            (c ? m + c + "M" : "") +
            (h ? m + h + "S" : "")
          );
        }
        var Oi, ki;
        ki = Array.prototype.some
          ? Array.prototype.some
          : function (t) {
              for (var e = Object(this), n = e.length >>> 0, i = 0; i < n; i++)
                if (i in e && t.call(this, e[i], i, e)) return !0;
              return !1;
            };
        var Ai = (t.momentProperties = []),
          Ei = !1,
          Li = {};
        (t.suppressDeprecationWarnings = !1), (t.deprecationHandler = null);
        var Qi;
        Qi = Object.keys
          ? Object.keys
          : function (t) {
              var e,
                n = [];
              for (e in t) u(t, e) && n.push(e);
              return n;
            };
        var Ni = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L",
          },
          Pi = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A",
          },
          ji = "Invalid date",
          qi = "%d",
          $i = /\d{1,2}/,
          Ui = {
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
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years",
          },
          Hi = {},
          Bi = {},
          Vi =
            /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
          Yi = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
          Wi = {},
          zi = {},
          Gi = /\d/,
          Ki = /\d\d/,
          Ji = /\d{3}/,
          Zi = /\d{4}/,
          Xi = /[+-]?\d{6}/,
          tr = /\d\d?/,
          er = /\d\d\d\d?/,
          nr = /\d\d\d\d\d\d?/,
          ir = /\d{1,3}/,
          rr = /\d{1,4}/,
          or = /[+-]?\d{1,6}/,
          sr = /\d+/,
          ar = /[+-]?\d+/,
          lr = /Z|[+-]\d\d:?\d\d/gi,
          ur = /Z|[+-]\d\d(?::?\d\d)?/gi,
          cr = /[+-]?\d+(\.\d{1,3})?/,
          hr =
            /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
          pr = {},
          fr = {},
          dr = 0,
          yr = 1,
          mr = 2,
          gr = 3,
          _r = 4,
          vr = 5,
          wr = 6,
          Sr = 7,
          br = 8;
        $("Y", 0, 0, function () {
          var t = this.year();
          return t <= 9999 ? "" + t : "+" + t;
        }),
          $(0, ["YY", 2], 0, function () {
            return this.year() % 100;
          }),
          $(0, ["YYYY", 4], 0, "year"),
          $(0, ["YYYYY", 5], 0, "year"),
          $(0, ["YYYYYY", 6, !0], 0, "year"),
          L("year", "y"),
          P("year", 1),
          Y("Y", ar),
          Y("YY", tr, Ki),
          Y("YYYY", rr, Zi),
          Y("YYYYY", or, Xi),
          Y("YYYYYY", or, Xi),
          K(["YYYYY", "YYYYYY"], dr),
          K("YYYY", function (e, n) {
            n[dr] = 2 === e.length ? t.parseTwoDigitYear(e) : w(e);
          }),
          K("YY", function (e, n) {
            n[dr] = t.parseTwoDigitYear(e);
          }),
          K("Y", function (t, e) {
            e[dr] = parseInt(t, 10);
          }),
          (t.parseTwoDigitYear = function (t) {
            return w(t) + (w(t) > 68 ? 1900 : 2e3);
          });
        var xr,
          Tr = nt("FullYear", !0);
        (xr = Array.prototype.indexOf
          ? Array.prototype.indexOf
          : function (t) {
              var e;
              for (e = 0; e < this.length; ++e) if (this[e] === t) return e;
              return -1;
            }),
          $("M", ["MM", 2], "Mo", function () {
            return this.month() + 1;
          }),
          $("MMM", 0, 0, function (t) {
            return this.localeData().monthsShort(this, t);
          }),
          $("MMMM", 0, 0, function (t) {
            return this.localeData().months(this, t);
          }),
          L("month", "M"),
          P("month", 8),
          Y("M", tr),
          Y("MM", tr, Ki),
          Y("MMM", function (t, e) {
            return e.monthsShortRegex(t);
          }),
          Y("MMMM", function (t, e) {
            return e.monthsRegex(t);
          }),
          K(["M", "MM"], function (t, e) {
            e[yr] = w(t) - 1;
          }),
          K(["MMM", "MMMM"], function (t, e, n, i) {
            var r = n._locale.monthsParse(t, i, n._strict);
            null != r ? (e[yr] = r) : (f(n).invalidMonth = t);
          });
        var Dr = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
          Cr =
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
          Rr = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
          Fr = hr,
          Ir = hr;
        $("w", ["ww", 2], "wo", "week"),
          $("W", ["WW", 2], "Wo", "isoWeek"),
          L("week", "w"),
          L("isoWeek", "W"),
          P("week", 5),
          P("isoWeek", 5),
          Y("w", tr),
          Y("ww", tr, Ki),
          Y("W", tr),
          Y("WW", tr, Ki),
          J(["w", "ww", "W", "WW"], function (t, e, n, i) {
            e[i.substr(0, 1)] = w(t);
          });
        var Mr = { dow: 0, doy: 6 };
        $("d", 0, "do", "day"),
          $("dd", 0, 0, function (t) {
            return this.localeData().weekdaysMin(this, t);
          }),
          $("ddd", 0, 0, function (t) {
            return this.localeData().weekdaysShort(this, t);
          }),
          $("dddd", 0, 0, function (t) {
            return this.localeData().weekdays(this, t);
          }),
          $("e", 0, 0, "weekday"),
          $("E", 0, 0, "isoWeekday"),
          L("day", "d"),
          L("weekday", "e"),
          L("isoWeekday", "E"),
          P("day", 11),
          P("weekday", 11),
          P("isoWeekday", 11),
          Y("d", tr),
          Y("e", tr),
          Y("E", tr),
          Y("dd", function (t, e) {
            return e.weekdaysMinRegex(t);
          }),
          Y("ddd", function (t, e) {
            return e.weekdaysShortRegex(t);
          }),
          Y("dddd", function (t, e) {
            return e.weekdaysRegex(t);
          }),
          J(["dd", "ddd", "dddd"], function (t, e, n, i) {
            var r = n._locale.weekdaysParse(t, i, n._strict);
            null != r ? (e.d = r) : (f(n).invalidWeekday = t);
          }),
          J(["d", "e", "E"], function (t, e, n, i) {
            e[i] = w(t);
          });
        var Or =
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          kr = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          Ar = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          Er = hr,
          Lr = hr,
          Qr = hr;
        $("H", ["HH", 2], 0, "hour"),
          $("h", ["hh", 2], 0, Vt),
          $("k", ["kk", 2], 0, Yt),
          $("hmm", 0, 0, function () {
            return "" + Vt.apply(this) + q(this.minutes(), 2);
          }),
          $("hmmss", 0, 0, function () {
            return (
              "" + Vt.apply(this) + q(this.minutes(), 2) + q(this.seconds(), 2)
            );
          }),
          $("Hmm", 0, 0, function () {
            return "" + this.hours() + q(this.minutes(), 2);
          }),
          $("Hmmss", 0, 0, function () {
            return (
              "" + this.hours() + q(this.minutes(), 2) + q(this.seconds(), 2)
            );
          }),
          Wt("a", !0),
          Wt("A", !1),
          L("hour", "h"),
          P("hour", 13),
          Y("a", zt),
          Y("A", zt),
          Y("H", tr),
          Y("h", tr),
          Y("k", tr),
          Y("HH", tr, Ki),
          Y("hh", tr, Ki),
          Y("kk", tr, Ki),
          Y("hmm", er),
          Y("hmmss", nr),
          Y("Hmm", er),
          Y("Hmmss", nr),
          K(["H", "HH"], gr),
          K(["k", "kk"], function (t, e) {
            var n = w(t);
            e[gr] = 24 === n ? 0 : n;
          }),
          K(["a", "A"], function (t, e, n) {
            (n._isPm = n._locale.isPM(t)), (n._meridiem = t);
          }),
          K(["h", "hh"], function (t, e, n) {
            (e[gr] = w(t)), (f(n).bigHour = !0);
          }),
          K("hmm", function (t, e, n) {
            var i = t.length - 2;
            (e[gr] = w(t.substr(0, i))),
              (e[_r] = w(t.substr(i))),
              (f(n).bigHour = !0);
          }),
          K("hmmss", function (t, e, n) {
            var i = t.length - 4,
              r = t.length - 2;
            (e[gr] = w(t.substr(0, i))),
              (e[_r] = w(t.substr(i, 2))),
              (e[vr] = w(t.substr(r))),
              (f(n).bigHour = !0);
          }),
          K("Hmm", function (t, e) {
            var n = t.length - 2;
            (e[gr] = w(t.substr(0, n))), (e[_r] = w(t.substr(n)));
          }),
          K("Hmmss", function (t, e) {
            var n = t.length - 4,
              i = t.length - 2;
            (e[gr] = w(t.substr(0, n))),
              (e[_r] = w(t.substr(n, 2))),
              (e[vr] = w(t.substr(i)));
          });
        var Nr,
          Pr = /[ap]\.?m?\.?/i,
          jr = nt("Hours", !0),
          qr = {
            calendar: Ni,
            longDateFormat: Pi,
            invalidDate: ji,
            ordinal: qi,
            dayOfMonthOrdinalParse: $i,
            relativeTime: Ui,
            months: Cr,
            monthsShort: Rr,
            week: Mr,
            weekdays: Or,
            weekdaysMin: Ar,
            weekdaysShort: kr,
            meridiemParse: Pr,
          },
          $r = {},
          Ur = {},
          Hr =
            /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          Br =
            /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          Vr = /Z|[+-]\d\d(?::?\d\d)?/,
          Yr = [
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
          ],
          Wr = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/],
          ],
          zr = /^\/?Date\((\-?\d+)/i,
          Gr =
            /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
          Kr = {
            UT: 0,
            GMT: 0,
            EDT: -240,
            EST: -300,
            CDT: -300,
            CST: -360,
            MDT: -360,
            MST: -420,
            PDT: -420,
            PST: -480,
          };
        (t.createFromInputFallback = x(
          "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
          function (t) {
            t._d = new Date(t._i + (t._useUTC ? " UTC" : ""));
          }
        )),
          (t.ISO_8601 = function () {}),
          (t.RFC_2822 = function () {});
        var Jr = x(
            "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
            function () {
              var t = Ce.apply(null, arguments);
              return this.isValid() && t.isValid()
                ? t < this
                  ? this
                  : t
                : y();
            }
          ),
          Zr = x(
            "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
            function () {
              var t = Ce.apply(null, arguments);
              return this.isValid() && t.isValid()
                ? t > this
                  ? this
                  : t
                : y();
            }
          ),
          Xr = function () {
            return Date.now ? Date.now() : +new Date();
          },
          to = [
            "year",
            "quarter",
            "month",
            "week",
            "day",
            "hour",
            "minute",
            "second",
            "millisecond",
          ];
        Qe("Z", ":"),
          Qe("ZZ", ""),
          Y("Z", ur),
          Y("ZZ", ur),
          K(["Z", "ZZ"], function (t, e, n) {
            (n._useUTC = !0), (n._tzm = Ne(ur, t));
          });
        var eo = /([\+\-]|\d\d)/gi;
        t.updateOffset = function () {};
        var no = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
          io =
            /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
        (Je.fn = Ae.prototype), (Je.invalid = ke);
        var ro = en(1, "add"),
          oo = en(-1, "subtract");
        (t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
          (t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
        var so = x(
            "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
            function (t) {
              return t === undefined ? this.localeData() : this.locale(t);
            }
          ),
          ao = 1e3,
          lo = 60 * ao,
          uo = 60 * lo,
          co = 3506328 * uo;
        $(0, ["gg", 2], 0, function () {
          return this.weekYear() % 100;
        }),
          $(0, ["GG", 2], 0, function () {
            return this.isoWeekYear() % 100;
          }),
          qn("gggg", "weekYear"),
          qn("ggggg", "weekYear"),
          qn("GGGG", "isoWeekYear"),
          qn("GGGGG", "isoWeekYear"),
          L("weekYear", "gg"),
          L("isoWeekYear", "GG"),
          P("weekYear", 1),
          P("isoWeekYear", 1),
          Y("G", ar),
          Y("g", ar),
          Y("GG", tr, Ki),
          Y("gg", tr, Ki),
          Y("GGGG", rr, Zi),
          Y("gggg", rr, Zi),
          Y("GGGGG", or, Xi),
          Y("ggggg", or, Xi),
          J(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, n, i) {
            e[i.substr(0, 2)] = w(t);
          }),
          J(["gg", "GG"], function (e, n, i, r) {
            n[r] = t.parseTwoDigitYear(e);
          }),
          $("Q", 0, "Qo", "quarter"),
          L("quarter", "Q"),
          P("quarter", 7),
          Y("Q", Gi),
          K("Q", function (t, e) {
            e[yr] = 3 * (w(t) - 1);
          }),
          $("D", ["DD", 2], "Do", "date"),
          L("date", "D"),
          P("date", 9),
          Y("D", tr),
          Y("DD", tr, Ki),
          Y("Do", function (t, e) {
            return t
              ? e._dayOfMonthOrdinalParse || e._ordinalParse
              : e._dayOfMonthOrdinalParseLenient;
          }),
          K(["D", "DD"], mr),
          K("Do", function (t, e) {
            e[mr] = w(t.match(tr)[0]);
          });
        var ho = nt("Date", !0);
        $("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
          L("dayOfYear", "DDD"),
          P("dayOfYear", 4),
          Y("DDD", ir),
          Y("DDDD", Ji),
          K(["DDD", "DDDD"], function (t, e, n) {
            n._dayOfYear = w(t);
          }),
          $("m", ["mm", 2], 0, "minute"),
          L("minute", "m"),
          P("minute", 14),
          Y("m", tr),
          Y("mm", tr, Ki),
          K(["m", "mm"], _r);
        var po = nt("Minutes", !1);
        $("s", ["ss", 2], 0, "second"),
          L("second", "s"),
          P("second", 15),
          Y("s", tr),
          Y("ss", tr, Ki),
          K(["s", "ss"], vr);
        var fo = nt("Seconds", !1);
        $("S", 0, 0, function () {
          return ~~(this.millisecond() / 100);
        }),
          $(0, ["SS", 2], 0, function () {
            return ~~(this.millisecond() / 10);
          }),
          $(0, ["SSS", 3], 0, "millisecond"),
          $(0, ["SSSS", 4], 0, function () {
            return 10 * this.millisecond();
          }),
          $(0, ["SSSSS", 5], 0, function () {
            return 100 * this.millisecond();
          }),
          $(0, ["SSSSSS", 6], 0, function () {
            return 1e3 * this.millisecond();
          }),
          $(0, ["SSSSSSS", 7], 0, function () {
            return 1e4 * this.millisecond();
          }),
          $(0, ["SSSSSSSS", 8], 0, function () {
            return 1e5 * this.millisecond();
          }),
          $(0, ["SSSSSSSSS", 9], 0, function () {
            return 1e6 * this.millisecond();
          }),
          L("millisecond", "ms"),
          P("millisecond", 16),
          Y("S", ir, Gi),
          Y("SS", ir, Ki),
          Y("SSS", ir, Ji);
        var yo;
        for (yo = "SSSS"; yo.length <= 9; yo += "S") Y(yo, sr);
        for (yo = "S"; yo.length <= 9; yo += "S") K(yo, Gn);
        var mo = nt("Milliseconds", !1);
        $("z", 0, 0, "zoneAbbr"), $("zz", 0, 0, "zoneName");
        var go = g.prototype;
        (go.add = ro),
          (go.calendar = on),
          (go.clone = sn),
          (go.diff = fn),
          (go.endOf = In),
          (go.format = _n),
          (go.from = vn),
          (go.fromNow = wn),
          (go.to = Sn),
          (go.toNow = bn),
          (go.get = ot),
          (go.invalidAt = Pn),
          (go.isAfter = an),
          (go.isBefore = ln),
          (go.isBetween = un),
          (go.isSame = cn),
          (go.isSameOrAfter = hn),
          (go.isSameOrBefore = pn),
          (go.isValid = Qn),
          (go.lang = so),
          (go.locale = xn),
          (go.localeData = Tn),
          (go.max = Zr),
          (go.min = Jr),
          (go.parsingFlags = Nn),
          (go.set = st),
          (go.startOf = Fn),
          (go.subtract = oo),
          (go.toArray = An),
          (go.toObject = En),
          (go.toDate = kn),
          (go.toISOString = mn),
          (go.inspect = gn),
          (go.toJSON = Ln),
          (go.toString = yn),
          (go.unix = On),
          (go.valueOf = Mn),
          (go.creationData = jn),
          (go.year = Tr),
          (go.isLeapYear = et),
          (go.weekYear = $n),
          (go.isoWeekYear = Un),
          (go.quarter = go.quarters = Wn),
          (go.month = dt),
          (go.daysInMonth = yt),
          (go.week = go.weeks = Ft),
          (go.isoWeek = go.isoWeeks = It),
          (go.weeksInYear = Bn),
          (go.isoWeeksInYear = Hn),
          (go.date = ho),
          (go.day = go.days = Pt),
          (go.weekday = jt),
          (go.isoWeekday = qt),
          (go.dayOfYear = zn),
          (go.hour = go.hours = jr),
          (go.minute = go.minutes = po),
          (go.second = go.seconds = fo),
          (go.millisecond = go.milliseconds = mo),
          (go.utcOffset = qe),
          (go.utc = Ue),
          (go.local = He),
          (go.parseZone = Be),
          (go.hasAlignedHourOffset = Ve),
          (go.isDST = Ye),
          (go.isLocal = ze),
          (go.isUtcOffset = Ge),
          (go.isUtc = Ke),
          (go.isUTC = Ke),
          (go.zoneAbbr = Kn),
          (go.zoneName = Jn),
          (go.dates = x("dates accessor is deprecated. Use date instead.", ho)),
          (go.months = x(
            "months accessor is deprecated. Use month instead",
            dt
          )),
          (go.years = x("years accessor is deprecated. Use year instead", Tr)),
          (go.zone = x(
            "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
            $e
          )),
          (go.isDSTShifted = x(
            "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
            We
          ));
        var _o = F.prototype;
        (_o.calendar = I),
          (_o.longDateFormat = M),
          (_o.invalidDate = O),
          (_o.ordinal = k),
          (_o.preparse = ti),
          (_o.postformat = ti),
          (_o.relativeTime = A),
          (_o.pastFuture = E),
          (_o.set = C),
          (_o.months = ut),
          (_o.monthsShort = ct),
          (_o.monthsParse = pt),
          (_o.monthsRegex = gt),
          (_o.monthsShortRegex = mt),
          (_o.week = Dt),
          (_o.firstDayOfYear = Rt),
          (_o.firstDayOfWeek = Ct),
          (_o.weekdays = At),
          (_o.weekdaysMin = Lt),
          (_o.weekdaysShort = Et),
          (_o.weekdaysParse = Nt),
          (_o.weekdaysRegex = $t),
          (_o.weekdaysShortRegex = Ut),
          (_o.weekdaysMinRegex = Ht),
          (_o.isPM = Gt),
          (_o.meridiem = Kt),
          te("en", {
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (t) {
              var e = t % 10;
              return (
                t +
                (1 === w((t % 100) / 10)
                  ? "th"
                  : 1 === e
                  ? "st"
                  : 2 === e
                  ? "nd"
                  : 3 === e
                  ? "rd"
                  : "th")
              );
            },
          }),
          (t.lang = x(
            "moment.lang is deprecated. Use moment.locale instead.",
            te
          )),
          (t.langData = x(
            "moment.langData is deprecated. Use moment.localeData instead.",
            ie
          ));
        var vo = Math.abs,
          wo = vi("ms"),
          So = vi("s"),
          bo = vi("m"),
          xo = vi("h"),
          To = vi("d"),
          Do = vi("w"),
          Co = vi("M"),
          Ro = vi("Q"),
          Fo = vi("y"),
          Io = bi("milliseconds"),
          Mo = bi("seconds"),
          Oo = bi("minutes"),
          ko = bi("hours"),
          Ao = bi("days"),
          Eo = bi("months"),
          Lo = bi("years"),
          Qo = Math.round,
          No = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 },
          Po = Math.abs,
          jo = Ae.prototype;
        return (
          (jo.isValid = Oe),
          (jo.abs = ui),
          (jo.add = hi),
          (jo.subtract = pi),
          (jo.as = gi),
          (jo.asMilliseconds = wo),
          (jo.asSeconds = So),
          (jo.asMinutes = bo),
          (jo.asHours = xo),
          (jo.asDays = To),
          (jo.asWeeks = Do),
          (jo.asMonths = Co),
          (jo.asQuarters = Ro),
          (jo.asYears = Fo),
          (jo.valueOf = _i),
          (jo._bubble = di),
          (jo.clone = wi),
          (jo.get = Si),
          (jo.milliseconds = Io),
          (jo.seconds = Mo),
          (jo.minutes = Oo),
          (jo.hours = ko),
          (jo.days = Ao),
          (jo.weeks = xi),
          (jo.months = Eo),
          (jo.years = Lo),
          (jo.humanize = Fi),
          (jo.toISOString = Mi),
          (jo.toString = Mi),
          (jo.toJSON = Mi),
          (jo.locale = xn),
          (jo.localeData = Tn),
          (jo.toIsoString = x(
            "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
            Mi
          )),
          (jo.lang = so),
          $("X", 0, 0, "unix"),
          $("x", 0, 0, "valueOf"),
          Y("x", ar),
          Y("X", cr),
          K("X", function (t, e, n) {
            n._d = new Date(1e3 * parseFloat(t, 10));
          }),
          K("x", function (t, e, n) {
            n._d = new Date(w(t));
          }),
          (t.version = "2.24.0"),
          e(Ce),
          (t.fn = go),
          (t.min = Fe),
          (t.max = Ie),
          (t.now = Xr),
          (t.utc = h),
          (t.unix = Zn),
          (t.months = ri),
          (t.isDate = a),
          (t.locale = te),
          (t.invalid = y),
          (t.duration = Je),
          (t.isMoment = _),
          (t.weekdays = si),
          (t.parseZone = Xn),
          (t.localeData = ie),
          (t.isDuration = Ee),
          (t.monthsShort = oi),
          (t.weekdaysMin = li),
          (t.defineLocale = ee),
          (t.updateLocale = ne),
          (t.locales = re),
          (t.weekdaysShort = ai),
          (t.normalizeUnits = Q),
          (t.relativeTimeRounding = Ci),
          (t.relativeTimeThreshold = Ri),
          (t.calendarFormat = rn),
          (t.prototype = go),
          (t.HTML5_FMT = {
            DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
            DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
            DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
            DATE: "YYYY-MM-DD",
            TIME: "HH:mm",
            TIME_SECONDS: "HH:mm:ss",
            TIME_MS: "HH:mm:ss.SSS",
            WEEK: "GGGG-[W]WW",
            MONTH: "YYYY-MM",
          }),
          t
        );
      }),
      (function (t) {
        var e;
        (e =
          "undefined" != typeof window
            ? window
            : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : this),
          (e.rome = t());
      })(function () {
        return (function t(e, n, i) {
          function r(s, a) {
            if (!n[s]) {
              if (!e[s]) {
                var l = "function" == typeof require && require;
                if (!a && l) return l(s, !0);
                if (o) return o(s, !0);
                var u = new Error("Cannot find module '" + s + "'");
                throw ((u.code = "MODULE_NOT_FOUND"), u);
              }
              var c = (n[s] = { exports: {} });
              e[s][0].call(
                c.exports,
                function (t) {
                  var n = e[s][1][t];
                  return r(n ? n : t);
                },
                c,
                c.exports,
                t,
                e,
                n,
                i
              );
            }
            return n[s].exports;
          }
          for (
            var o = "function" == typeof require && require, s = 0;
            s < i.length;
            s++
          )
            r(i[s]);
          return r;
        })(
          {
            1: [
              function (t, e) {
                "use strict";
                function n(t, e, n) {
                  function s() {
                    m.sleeping = !0;
                  }
                  function a() {
                    return l();
                  }
                  function l(t) {
                    var n = e.getBoundingClientRect(),
                      i =
                        document.body.scrollTop ||
                        document.documentElement.scrollTop;
                    return g
                      ? ((t = g.read()),
                        {
                          x: (t.absolute ? 0 : n.left) + t.x,
                          y: (t.absolute ? 0 : n.top) + i + t.y + 20,
                        })
                      : { x: n.left, y: n.top + i };
                  }
                  function u(t) {
                    c(t);
                  }
                  function c(n) {
                    if (d)
                      throw new Error(
                        "Bullseye can't refresh after being destroyed. Create another instance instead."
                      );
                    if (g && !n) return (m.sleeping = !1), void g.refresh();
                    var i = l(n);
                    g || e === t || (i.y += e.offsetHeight),
                      (t.style.left = i.x + "px"),
                      (t.style.top = i.y + "px");
                  }
                  function h() {
                    g && g.destroy(), i.remove(window, "resize", y), (d = !0);
                  }
                  var p = n,
                    f = e && e.tagName;
                  f || 2 !== arguments.length || (p = e),
                    f || (e = t),
                    p || (p = {});
                  var d = !1,
                    y = r(c, 30),
                    m = { update: p.autoupdateToCaret !== !1 && u },
                    g = p.caret && o(e, m);
                  return (
                    c(),
                    p.tracking !== !1 && i.add(window, "resize", y),
                    { read: a, refresh: c, destroy: h, sleep: s }
                  );
                }
                var i = t("crossvent"),
                  r = t("./throttle"),
                  o = t("./tailormade");
                e.exports = n;
              },
              { "./tailormade": 11, "./throttle": 12, crossvent: 18 },
            ],
            2: [
              function (t, e) {
                (function (n) {
                  "use strict";
                  var i,
                    r = n.document,
                    o = t("./getSelectionRaw"),
                    s = t("./getSelectionNullOp"),
                    a = t("./getSelectionSynthetic");
                  (i = t("./isHost").method(n, "getSelection")
                    ? o
                    : "object" == typeof r.selection && r.selection
                    ? a
                    : s),
                    (e.exports = i);
                }.call(
                  this,
                  "undefined" != typeof global
                    ? global
                    : "undefined" != typeof self
                    ? self
                    : "undefined" != typeof window
                    ? window
                    : {}
                ));
              },
              {
                "./getSelectionNullOp": 3,
                "./getSelectionRaw": 4,
                "./getSelectionSynthetic": 5,
                "./isHost": 6,
              },
            ],
            3: [
              function (t, e) {
                "use strict";
                function n() {}
                function i() {
                  return { removeAllRanges: n, addRange: n };
                }
                e.exports = i;
              },
              {},
            ],
            4: [
              function (t, e) {
                (function (t) {
                  "use strict";
                  function n() {
                    return t.getSelection();
                  }
                  e.exports = n;
                }.call(
                  this,
                  "undefined" != typeof global
                    ? global
                    : "undefined" != typeof self
                    ? self
                    : "undefined" != typeof window
                    ? window
                    : {}
                ));
              },
              {},
            ],
            5: [
              function (t, e) {
                (function (n) {
                  "use strict";
                  function i(t) {
                    var e = this,
                      n = t.createRange();
                    (this._selection = t),
                      (this._ranges = []),
                      "Control" === t.type ? p(e) : c(n) ? h(e, n) : a(e);
                  }
                  function r(t, e) {
                    for (
                      var n, i = v.createControlRange(), r = 0, o = e.length;
                      r < o;
                      ++r
                    ) {
                      n = u(e[r]);
                      try {
                        i.add(n);
                      } catch (t) {
                        throw new Error(
                          "setRanges(): Element could not be added to control selection"
                        );
                      }
                    }
                    i.select(), p(t);
                  }
                  function o(t, e) {
                    var n = t.getAllRanges();
                    t.removeAllRanges();
                    for (var i = 0, r = n.length; i < r; ++i)
                      d(e, n[i]) || t.addRange(n[i]);
                    t.rangeCount || a(t);
                  }
                  function s(t, e) {
                    var n = "start",
                      i = "end";
                    (t.anchorNode = e[n + "Container"]),
                      (t.anchorOffset = e[n + "Offset"]),
                      (t.focusNode = e[i + "Container"]),
                      (t.focusOffset = e[i + "Offset"]);
                  }
                  function a(t) {
                    (t.anchorNode = t.focusNode = null),
                      (t.anchorOffset = t.focusOffset = 0),
                      (t.rangeCount = 0),
                      (t.isCollapsed = !0),
                      (t._ranges.length = 0);
                  }
                  function l(t) {
                    if (!t.length || 1 !== t[0].nodeType) return !1;
                    for (var e = 1, n = t.length; e < n; ++e)
                      if (!y(t[0], t[e])) return !1;
                    return !0;
                  }
                  function u(t) {
                    var e = t.getNodes();
                    if (!l(e))
                      throw new Error(
                        "getSingleElementFromRange(): range did not consist of a single element"
                      );
                    return e[0];
                  }
                  function c(t) {
                    return t && void 0 !== t.text;
                  }
                  function h(t, e) {
                    (t._ranges = [e]),
                      s(t, e, !1),
                      (t.rangeCount = 1),
                      (t.isCollapsed = e.collapsed);
                  }
                  function p(t) {
                    if (((t._ranges.length = 0), "None" === t._selection.type))
                      a(t);
                    else {
                      var e = t._selection.createRange();
                      if (c(e)) h(t, e);
                      else {
                        t.rangeCount = e.length;
                        for (var n, i = 0; i < t.rangeCount; ++i)
                          (n = _.createRange()),
                            n.selectNode(e.item(i)),
                            t._ranges.push(n);
                        (t.isCollapsed =
                          1 === t.rangeCount && t._ranges[0].collapsed),
                          s(t, t._ranges[t.rangeCount - 1], !1);
                      }
                    }
                  }
                  function f(t, e) {
                    for (
                      var n = t._selection.createRange(),
                        i = u(e),
                        r = v.createControlRange(),
                        o = 0,
                        s = n.length;
                      o < s;
                      ++o
                    )
                      r.add(n.item(o));
                    try {
                      r.add(i);
                    } catch (t) {
                      throw new Error(
                        "addRange(): Element could not be added to control selection"
                      );
                    }
                    r.select(), p(t);
                  }
                  function d(t, e) {
                    return (
                      t.startContainer === e.startContainer &&
                      t.startOffset === e.startOffset &&
                      t.endContainer === e.endContainer &&
                      t.endOffset === e.endOffset
                    );
                  }
                  function y(t, e) {
                    for (var n = e; n.parentNode; ) {
                      if (n.parentNode === t) return !0;
                      n = n.parentNode;
                    }
                    return !1;
                  }
                  function m() {
                    return new i(n.document.selection);
                  }
                  var g = t("./rangeToTextRange"),
                    _ = n.document,
                    v = _.body,
                    w = i.prototype;
                  (w.removeAllRanges = function () {
                    var t;
                    try {
                      this._selection.empty(),
                        "None" !== this._selection.type &&
                          ((t = v.createTextRange()),
                          t.select(),
                          this._selection.empty());
                    } catch (t) {}
                    a(this);
                  }),
                    (w.addRange = function (t) {
                      "Control" === this._selection.type
                        ? f(this, t)
                        : (g(t).select(),
                          (this._ranges[0] = t),
                          (this.rangeCount = 1),
                          (this.isCollapsed = this._ranges[0].collapsed),
                          s(this, t, !1));
                    }),
                    (w.setRanges = function (t) {
                      this.removeAllRanges();
                      var e = t.length;
                      e > 1 ? r(this, t) : e && this.addRange(t[0]);
                    }),
                    (w.getRangeAt = function (t) {
                      if (t < 0 || t >= this.rangeCount)
                        throw new Error("getRangeAt(): index out of bounds");
                      return this._ranges[t].cloneRange();
                    }),
                    (w.removeRange = function (t) {
                      if ("Control" !== this._selection.type)
                        return void o(this, t);
                      for (
                        var e,
                          n = this._selection.createRange(),
                          i = u(t),
                          r = v.createControlRange(),
                          s = !1,
                          a = 0,
                          l = n.length;
                        a < l;
                        ++a
                      )
                        (e = n.item(a)),
                          e !== i || s ? r.add(n.item(a)) : (s = !0);
                      r.select(), p(this);
                    }),
                    (w.eachRange = function (t, e) {
                      var n = 0,
                        i = this._ranges.length;
                      for (n = 0; n < i; ++n)
                        if (t(this.getRangeAt(n))) return e;
                    }),
                    (w.getAllRanges = function () {
                      var t = [];
                      return (
                        this.eachRange(function (e) {
                          t.push(e);
                        }),
                        t
                      );
                    }),
                    (w.setSingleRange = function (t) {
                      this.removeAllRanges(), this.addRange(t);
                    }),
                    (e.exports = m);
                }.call(
                  this,
                  "undefined" != typeof global
                    ? global
                    : "undefined" != typeof self
                    ? self
                    : "undefined" != typeof window
                    ? window
                    : {}
                ));
              },
              { "./rangeToTextRange": 7 },
            ],
            6: [
              function (t, e) {
                "use strict";
                function n(t, e) {
                  var n = typeof t[e];
                  return (
                    "function" === n ||
                    !("object" !== n || !t[e]) ||
                    "unknown" === n
                  );
                }
                function i(t, e) {
                  return "undefined" != typeof t[e];
                }
                function r(t) {
                  return function (e, n) {
                    for (var i = n.length; i--; ) if (!t(e, n[i])) return !1;
                    return !0;
                  };
                }
                e.exports = {
                  method: n,
                  methods: r(n),
                  property: i,
                  properties: r(i),
                };
              },
              {},
            ],
            7: [
              function (t, e) {
                (function (t) {
                  "use strict";
                  function n(t) {
                    if (t.collapsed)
                      return r(
                        { node: t.startContainer, offset: t.startOffset },
                        !0
                      );
                    var e = r(
                        { node: t.startContainer, offset: t.startOffset },
                        !0
                      ),
                      n = r({ node: t.endContainer, offset: t.endOffset }, !1),
                      i = s.createTextRange();
                    return (
                      i.setEndPoint("StartToStart", e),
                      i.setEndPoint("EndToEnd", n),
                      i
                    );
                  }
                  function i(t) {
                    var e = t.nodeType;
                    return 3 === e || 4 === e || 8 === e;
                  }
                  function r(t, e) {
                    var n,
                      r,
                      a,
                      l,
                      u = t.offset,
                      c = s.createTextRange(),
                      h = i(t.node);
                    return (
                      h
                        ? ((n = t.node), (r = n.parentNode))
                        : ((l = t.node.childNodes),
                          (n = u < l.length ? l[u] : null),
                          (r = t.node)),
                      (a = o.createElement("span")),
                      (a.innerHTML = "&#feff;"),
                      n ? r.insertBefore(a, n) : r.appendChild(a),
                      c.moveToElementText(a),
                      c.collapse(!e),
                      r.removeChild(a),
                      h && c[e ? "moveStart" : "moveEnd"]("character", u),
                      c
                    );
                  }
                  var o = t.document,
                    s = o.body;
                  e.exports = n;
                }.call(
                  this,
                  "undefined" != typeof global
                    ? global
                    : "undefined" != typeof self
                    ? self
                    : "undefined" != typeof window
                    ? window
                    : {}
                ));
              },
              {},
            ],
            8: [
              function (t, e) {
                "use strict";
                var n = t("./getSelection"),
                  i = t("./setSelection");
                e.exports = { get: n, set: i };
              },
              { "./getSelection": 2, "./setSelection": 9 },
            ],
            9: [
              function (t, e) {
                (function (n) {
                  "use strict";
                  function i(t) {
                    function e() {
                      var e = r(),
                        n = s.createRange();
                      t.startContainer &&
                        (t.endContainer
                          ? n.setEnd(t.endContainer, t.endOffset)
                          : n.setEnd(t.startContainer, t.startOffset),
                        n.setStart(t.startContainer, t.startOffset),
                        e.removeAllRanges(),
                        e.addRange(n));
                    }
                    function n() {
                      o(t).select();
                    }
                    s.createRange ? e() : n();
                  }
                  var r = t("./getSelection"),
                    o = t("./rangeToTextRange"),
                    s = n.document;
                  e.exports = i;
                }.call(
                  this,
                  "undefined" != typeof global
                    ? global
                    : "undefined" != typeof self
                    ? self
                    : "undefined" != typeof window
                    ? window
                    : {}
                ));
              },
              { "./getSelection": 2, "./rangeToTextRange": 7 },
            ],
            10: [
              function (t, e) {
                "use strict";
                function n(t) {
                  return { start: t.selectionStart, end: t.selectionEnd };
                }
                function i(t) {
                  function e(e, i) {
                    return (
                      n !== t && (n ? n.focus() : t.blur()),
                      { start: e, end: i }
                    );
                  }
                  var n = document.activeElement;
                  n !== t && t.focus();
                  var i = document.selection.createRange(),
                    s = i.getBookmark(),
                    a = t.value,
                    l = r(a),
                    u = i.parentElement();
                  if (null === u || !o(u)) return e(0, 0);
                  i.text = l + i.text + l;
                  var c = t.value;
                  return (
                    (t.value = a),
                    i.moveToBookmark(s),
                    i.select(),
                    e(c.indexOf(l), c.lastIndexOf(l) - l.length)
                  );
                }
                function r(t) {
                  var e;
                  do {
                    e = "@@marker." + Math.random() * new Date();
                  } while (t.indexOf(e) !== -1);
                  return e;
                }
                function o(t) {
                  return (
                    ("INPUT" === t.tagName && "text" === t.type) ||
                    "TEXTAREA" === t.tagName
                  );
                }
                function s(t, e) {
                  (t.selectionStart = l(t, e.start)),
                    (t.selectionEnd = l(t, e.end));
                }
                function a(t, e) {
                  var n = t.createTextRange();
                  "end" === e.start && "end" === e.end
                    ? (n.collapse(!1), n.select())
                    : (n.collapse(!0),
                      n.moveEnd("character", l(t, e.end)),
                      n.moveStart("character", l(t, e.start)),
                      n.select());
                }
                function l(t, e) {
                  return "end" === e ? t.value.length : e || 0;
                }
                function u(t, e) {
                  return 2 === arguments.length && h(t, e), c(t);
                }
                var c = n,
                  h = s;
                document.selection &&
                  document.selection.createRange &&
                  ((c = i), (h = a)),
                  (e.exports = u);
              },
              {},
            ],
            11: [
              function (t, e) {
                (function (n) {
                  "use strict";
                  function i(t, e) {
                    function n() {}
                    function i() {
                      return (S ? f : d)();
                    }
                    function s() {
                      if (!x.sleeping) return (x.update || n)(i());
                    }
                    function f() {
                      var e = r(t),
                        n = g(),
                        i = y(n, e.start);
                      return h.body.removeChild(n.mirror), i;
                    }
                    function d() {
                      var t = l();
                      if (t.rangeCount) {
                        var e = t.getRangeAt(0);
                        if (
                          "P" === e.startContainer.nodeName &&
                          0 === e.startOffset
                        )
                          return {
                            x: e.startContainer.offsetLeft,
                            y: e.startContainer.offsetTop,
                            absolute: !0,
                          };
                        if (e.getClientRects) {
                          var n = e.getClientRects();
                          if (n.length > 0)
                            return { x: n[0].left, y: n[0].top, absolute: !0 };
                        }
                      }
                      return { x: 0, y: 0 };
                    }
                    function y(e, n) {
                      var i = h.createElement("span"),
                        r = e.mirror,
                        o = e.computed;
                      return (
                        _(r, m(t).substring(0, n)),
                        "INPUT" === t.tagName &&
                          (r.textContent = r.textContent.replace(
                            /\s/g,
                            "\xa0"
                          )),
                        _(i, m(t).substring(n) || "."),
                        r.appendChild(i),
                        {
                          x: i.offsetLeft + parseInt(o.borderLeftWidth),
                          y: i.offsetTop + parseInt(o.borderTopWidth),
                        }
                      );
                    }
                    function m(t) {
                      return S ? t.value : t.innerHTML;
                    }
                    function g() {
                      function e(t) {
                        r[t] = n[t];
                      }
                      var n = c.getComputedStyle
                          ? getComputedStyle(t)
                          : t.currentStyle,
                        i = h.createElement("div"),
                        r = i.style;
                      return (
                        h.body.appendChild(i),
                        "INPUT" !== t.tagName && (r.wordWrap = "break-word"),
                        (r.whiteSpace = "pre-wrap"),
                        (r.position = "absolute"),
                        (r.visibility = "hidden"),
                        u.forEach(e),
                        p
                          ? ((r.width = parseInt(n.width) - 2 + "px"),
                            t.scrollHeight > parseInt(n.height) &&
                              (r.overflowY = "scroll"))
                          : (r.overflow = "hidden"),
                        { mirror: i, computed: n }
                      );
                    }
                    function _(t, e) {
                      S ? (t.textContent = e) : (t.innerHTML = e);
                    }
                    function v(e) {
                      var n = e ? "remove" : "add";
                      o[n](t, "keydown", b),
                        o[n](t, "keyup", b),
                        o[n](t, "input", b),
                        o[n](t, "paste", b),
                        o[n](t, "change", b);
                    }
                    function w() {
                      v(!0);
                    }
                    var S = "INPUT" === t.tagName || "TEXTAREA" === t.tagName,
                      b = a(s, 30),
                      x = e || {};
                    return v(), { read: i, refresh: b, destroy: w };
                  }
                  var r = t("sell"),
                    o = t("crossvent"),
                    s = t("seleccion"),
                    a = t("./throttle"),
                    l = s.get,
                    u = [
                      "direction",
                      "boxSizing",
                      "width",
                      "height",
                      "overflowX",
                      "overflowY",
                      "borderTopWidth",
                      "borderRightWidth",
                      "borderBottomWidth",
                      "borderLeftWidth",
                      "paddingTop",
                      "paddingRight",
                      "paddingBottom",
                      "paddingLeft",
                      "fontStyle",
                      "fontVariant",
                      "fontWeight",
                      "fontStretch",
                      "fontSize",
                      "fontSizeAdjust",
                      "lineHeight",
                      "fontFamily",
                      "textAlign",
                      "textTransform",
                      "textIndent",
                      "textDecoration",
                      "letterSpacing",
                      "wordSpacing",
                    ],
                    c = n,
                    h = document,
                    p =
                      null !== c.mozInnerScreenX &&
                      void 0 !== c.mozInnerScreenX;
                  e.exports = i;
                }.call(
                  this,
                  "undefined" != typeof global
                    ? global
                    : "undefined" != typeof self
                    ? self
                    : "undefined" != typeof window
                    ? window
                    : {}
                ));
              },
              { "./throttle": 12, crossvent: 18, seleccion: 8, sell: 10 },
            ],
            12: [
              function (t, e) {
                "use strict";
                function n(t, e) {
                  var n,
                    i = -Infinity;
                  return function () {
                    function r() {
                      clearTimeout(n), (n = null);
                      var o = i + e,
                        s = Date.now();
                      s > o ? ((i = s), t()) : (n = setTimeout(r, o - s));
                    }
                    n || r();
                  };
                }
                e.exports = n;
              },
              {},
            ],
            13: [
              function (t, e) {
                "use strict";
                var n = t("ticky");
                e.exports = function (t, e, i) {
                  t &&
                    n(function () {
                      t.apply(i || null, e || []);
                    });
                };
              },
              { ticky: 16 },
            ],
            14: [
              function (t, e) {
                "use strict";
                var n = t("atoa"),
                  i = t("./debounce");
                e.exports = function (t, e) {
                  var r = e || {},
                    o = {};
                  return (
                    t === undefined && (t = {}),
                    (t.on = function (e, n) {
                      return o[e] ? o[e].push(n) : (o[e] = [n]), t;
                    }),
                    (t.once = function (e, n) {
                      return (n._once = !0), t.on(e, n), t;
                    }),
                    (t.off = function (e, n) {
                      var i = arguments.length;
                      if (1 === i) delete o[e];
                      else if (0 === i) o = {};
                      else {
                        var r = o[e];
                        if (!r) return t;
                        r.splice(r.indexOf(n), 1);
                      }
                      return t;
                    }),
                    (t.emit = function () {
                      var e = n(arguments);
                      return t.emitterSnapshot(e.shift()).apply(this, e);
                    }),
                    (t.emitterSnapshot = function (e) {
                      var s = (o[e] || []).slice(0);
                      return function () {
                        var o = n(arguments),
                          a = this || t;
                        if ("error" === e && r["throws"] !== !1 && !s.length)
                          throw 1 === o.length ? o[0] : o;
                        return (
                          s.forEach(function (n) {
                            r.async ? i(n, o, a) : n.apply(a, o),
                              n._once && t.off(e, n);
                          }),
                          t
                        );
                      };
                    }),
                    t
                  );
                };
              },
              { "./debounce": 13, atoa: 15 },
            ],
            15: [
              function (t, e) {
                e.exports = function (t, e) {
                  return Array.prototype.slice.call(t, e);
                };
              },
              {},
            ],
            16: [
              function (t, e) {
                var n;
                (n =
                  "function" == typeof setImmediate
                    ? function (t) {
                        setImmediate(t);
                      }
                    : function (t) {
                        setTimeout(t, 0);
                      }),
                  (e.exports = n);
              },
              {},
            ],
            17: [
              function (t, e) {
                (function (t) {
                  function n() {
                    try {
                      var t = new i("cat", { detail: { foo: "bar" } });
                      return "cat" === t.type && "bar" === t.detail.foo;
                    } catch (t) {}
                    return !1;
                  }
                  var i = t.CustomEvent;
                  e.exports = n()
                    ? i
                    : "function" == typeof document.createEvent
                    ? function (t, e) {
                        var n = document.createEvent("CustomEvent");
                        return (
                          e
                            ? n.initCustomEvent(
                                t,
                                e.bubbles,
                                e.cancelable,
                                e.detail
                              )
                            : n.initCustomEvent(t, !1, !1, void 0),
                          n
                        );
                      }
                    : function (t, e) {
                        var n = document.createEventObject();
                        return (
                          (n.type = t),
                          e
                            ? ((n.bubbles = Boolean(e.bubbles)),
                              (n.cancelable = Boolean(e.cancelable)),
                              (n.detail = e.detail))
                            : ((n.bubbles = !1),
                              (n.cancelable = !1),
                              (n.detail = void 0)),
                          n
                        );
                      };
                }.call(
                  this,
                  "undefined" != typeof global
                    ? global
                    : "undefined" != typeof self
                    ? self
                    : "undefined" != typeof window
                    ? window
                    : {}
                ));
              },
              {},
            ],
            18: [
              function (t, e) {
                (function (n) {
                  "use strict";
                  function i(t, e, n, i) {
                    return t.addEventListener(e, n, i);
                  }
                  function r(t, e, n) {
                    return t.attachEvent("on" + e, u(t, e, n));
                  }
                  function o(t, e, n, i) {
                    return t.removeEventListener(e, n, i);
                  }
                  function s(t, e, n) {
                    return t.detachEvent("on" + e, c(t, e, n));
                  }
                  function a(t, e, n) {
                    function i() {
                      var t;
                      return (
                        d.createEvent
                          ? ((t = d.createEvent("Event")),
                            t.initEvent(e, !0, !0))
                          : d.createEventObject && (t = d.createEventObject()),
                        t
                      );
                    }
                    function r() {
                      return new p(e, { detail: n });
                    }
                    var o = f.indexOf(e) === -1 ? r() : i();
                    t.dispatchEvent
                      ? t.dispatchEvent(o)
                      : t.fireEvent("on" + e, o);
                  }
                  function l(t, e, i) {
                    return function (e) {
                      var r = e || n.event;
                      (r.target = r.target || r.srcElement),
                        (r.preventDefault =
                          r.preventDefault ||
                          function () {
                            r.returnValue = !1;
                          }),
                        (r.stopPropagation =
                          r.stopPropagation ||
                          function () {
                            r.cancelBubble = !0;
                          }),
                        (r.which = r.which || r.keyCode),
                        i.call(t, r);
                    };
                  }
                  function u(t, e, n) {
                    var i = c(t, e, n) || l(t, e, n);
                    return (
                      g.push({ wrapper: i, element: t, type: e, fn: n }), i
                    );
                  }
                  function c(t, e, n) {
                    var i = h(t, e, n);
                    if (i) {
                      var r = g[i].wrapper;
                      return g.splice(i, 1), r;
                    }
                  }
                  function h(t, e, n) {
                    var i, r;
                    for (i = 0; i < g.length; i++)
                      if (
                        ((r = g[i]),
                        r.element === t && r.type === e && r.fn === n)
                      )
                        return i;
                  }
                  var p = t("custom-event"),
                    f = t("./eventmap"),
                    d = document,
                    y = i,
                    m = o,
                    g = [];
                  n.addEventListener || ((y = r), (m = s)),
                    (e.exports = { add: y, remove: m, fabricate: a });
                }.call(
                  this,
                  "undefined" != typeof global
                    ? global
                    : "undefined" != typeof self
                    ? self
                    : "undefined" != typeof window
                    ? window
                    : {}
                ));
              },
              { "./eventmap": 19, "custom-event": 17 },
            ],
            19: [
              function (t, e) {
                (function (t) {
                  "use strict";
                  var n = [],
                    i = "",
                    r = /^on/;
                  for (i in t) r.test(i) && n.push(i.slice(2));
                  e.exports = n;
                }.call(
                  this,
                  "undefined" != typeof global
                    ? global
                    : "undefined" != typeof self
                    ? self
                    : "undefined" != typeof window
                    ? window
                    : {}
                ));
              },
              {},
            ],
            20: [
              function (t, e) {
                "use strict";
                function n(t, e) {
                  var n = l[t.id];
                  return n && n[e.id];
                }
                function i(t, e) {
                  var n = l[t.id];
                  n || (n = l[t.id] = {});
                  var i = o(e);
                  (n[e.id] = i),
                    t.on("data", i),
                    t.on("destroyed", r.bind(null, t, e));
                }
                function r(t, e) {
                  var n = l[t.id];
                  if (n) {
                    var i = n[e.id];
                    t.off("data", i), delete n[e.id];
                  }
                }
                function o(t) {
                  return function () {
                    t.refresh();
                  };
                }
                function s(t, e) {
                  a(e.associated) || n(t, e) || i(t, e);
                }
                var a = t("./isInput"),
                  l = {};
                e.exports = { add: s, remove: r };
              },
              { "./isInput": 30 },
            ],
            21: [
              function (t, e) {
                "use strict";
                function n(t) {
                  function e() {
                    return It;
                  }
                  function n(n) {
                    return (
                      (ct = c(n || t, It)),
                      ft || (ft = s({ className: ct.styles.container })),
                      (dt = ct.weekdayFormat),
                      (yt = dt.length),
                      (gt = i),
                      (mt = i),
                      (_t = i),
                      (vt = i),
                      ct.appendTo.appendChild(ft),
                      W(ft),
                      (Dt = !1),
                      (ht = ct.initialValue ? ct.initialValue : h.moment()),
                      (pt = ht.clone()),
                      (It.back = L),
                      (It.container = ft),
                      (It.destroyed = !1),
                      (It.destroy = y.bind(It, !1)),
                      (It.emitValues = B),
                      (It.getDate = at),
                      (It.getDateString = lt),
                      (It.getMoment = ut),
                      (It.hide = M),
                      (It.next = Q),
                      (It.options = g),
                      (It.options.reset = _),
                      (It.refresh = V),
                      (It.restore = e),
                      (It.setValue = Y),
                      (It.show = I),
                      m(),
                      d(),
                      It
                    );
                  }
                  function d() {
                    It.emit("ready", u(ct));
                  }
                  function y(t) {
                    ft && ft.parentNode && ft.parentNode.removeChild(ft),
                      ct && m(!0);
                    var i = It.emitterSnapshot("destroyed");
                    return (
                      (It.back = f),
                      (It.destroyed = !0),
                      (It.destroy = e),
                      (It.emitValues = e),
                      (It.getDate = f),
                      (It.getDateString = f),
                      (It.getMoment = f),
                      (It.hide = e),
                      (It.next = f),
                      (It.options = e),
                      (It.options.reset = e),
                      (It.refresh = e),
                      (It.restore = n),
                      (It.setValue = e),
                      (It.show = e),
                      It.off(),
                      t !== !0 && i(),
                      It
                    );
                  }
                  function m(t) {
                    var e = t ? "remove" : "add";
                    ct.autoHideOnBlur &&
                      r[e](document.documentElement, "focus", A, !0),
                      ct.autoHideOnClick && r[e](document, "click", E);
                  }
                  function g(t) {
                    return 0 === arguments.length ? u(ct) : (y(), n(t), It);
                  }
                  function _() {
                    return g({ appendTo: ct.appendTo });
                  }
                  function v() {
                    Dt || ((Dt = !0), w(), S(), It.emit("render"));
                  }
                  function w() {
                    function t(t) {
                      var e = s({ className: ct.styles.month, parent: wt });
                      0 === t &&
                        (St = s({
                          type: "button",
                          className: ct.styles.back,
                          attributes: { type: "button" },
                          parent: e,
                        })),
                        t === ct.monthsInCalendar - 1 &&
                          (bt = s({
                            type: "button",
                            className: ct.styles.next,
                            attributes: { type: "button" },
                            parent: e,
                          }));
                      var n,
                        i = s({ className: ct.styles.monthLabel, parent: e }),
                        r = s({
                          type: "table",
                          className: ct.styles.dayTable,
                          parent: e,
                        }),
                        o = s({
                          type: "thead",
                          className: ct.styles.dayHead,
                          parent: r,
                        }),
                        a = s({
                          type: "tr",
                          className: ct.styles.dayRow,
                          parent: o,
                        }),
                        l = s({
                          type: "tbody",
                          className: ct.styles.dayBody,
                          parent: r,
                        });
                      for (n = 0; n < yt; n++)
                        s({
                          type: "th",
                          className: ct.styles.dayHeadElem,
                          parent: a,
                          text: dt[b(n)],
                        });
                      l.setAttribute(Ct, t), Rt.push({ label: i, body: l });
                    }
                    if (ct.date) {
                      var e;
                      for (
                        Rt = [],
                          wt = s({ className: ct.styles.date, parent: ft }),
                          e = 0;
                        e < ct.monthsInCalendar;
                        e++
                      )
                        t(e);
                      r.add(St, "click", L),
                        r.add(bt, "click", Q),
                        r.add(wt, "click", nt);
                    }
                  }
                  function S() {
                    if (ct.time && ct.timeInterval) {
                      var t = s({ className: ct.styles.time, parent: ft });
                      (xt = s({
                        className: ct.styles.selectedTime,
                        parent: t,
                        text: ht.format(ct.timeFormat),
                      })),
                        r.add(xt, "click", T),
                        (Tt = s({ className: ct.styles.timeList, parent: t })),
                        r.add(Tt, "click", st);
                      for (
                        var e = h.moment("00:00:00", "HH:mm:ss"),
                          n = e.clone().add(1, "days");
                        e.isBefore(n);

                      )
                        s({
                          className: ct.styles.timeOption,
                          parent: Tt,
                          text: e.format(ct.timeFormat),
                        }),
                          e.add(ct.timeInterval, "seconds");
                    }
                  }
                  function b(t, e) {
                    var n = e ? -1 : 1,
                      i = t + ct.weekStart * n;
                    return (i >= yt || i < 0) && (i += yt * -n), i;
                  }
                  function x() {
                    if (ct.time && Dt) {
                      var t,
                        e,
                        n,
                        i,
                        r = Tt.children,
                        o = r.length;
                      for (i = 0; i < o; i++)
                        (n = r[i]),
                          (e = h.moment(a(n), ct.timeFormat)),
                          (t = ot(ht.clone(), e)),
                          (n.style.display = K(t, !1, ct.timeValidator)
                            ? "block"
                            : "none");
                    }
                  }
                  function T(t) {
                    ("boolean" == typeof t ? t : "none" === Tt.style.display)
                      ? D()
                      : C();
                  }
                  function D() {
                    Tt && (Tt.style.display = "block");
                  }
                  function C() {
                    Tt && (Tt.style.display = "none");
                  }
                  function R() {
                    (ft.style.display = "inline-block"), It.emit("show");
                  }
                  function F() {
                    "none" !== ft.style.display &&
                      ((ft.style.display = "none"), It.emit("hide"));
                  }
                  function I() {
                    return v(), V(), T(!ct.date), R(), It;
                  }
                  function M() {
                    return C(), setTimeout(F, 0), It;
                  }
                  function O() {
                    return (
                      C(),
                      p.contains(ft, ct.styles.positioned) && setTimeout(F, 0),
                      It
                    );
                  }
                  function k(t) {
                    var e = t.target;
                    if (e === It.associated) return !0;
                    for (; e; ) {
                      if (e === ft) return !0;
                      e = e.parentNode;
                    }
                  }
                  function A(t) {
                    k(t) || O();
                  }
                  function E(t) {
                    k(t) || O();
                  }
                  function L() {
                    N("subtract");
                  }
                  function Q() {
                    N("add");
                  }
                  function N(t) {
                    var e,
                      n = "add" === t ? -1 : 1,
                      i = ct.monthsInCalendar + n * rt(vt);
                    pt[t](i, "months"),
                      (e = X(pt.clone())),
                      (ht = e || ht),
                      e && (pt = e.clone()),
                      P(),
                      It.emit("add" === t ? "next" : "back", ht.month());
                  }
                  function P(t) {
                    j(), H(), t !== !0 && B(), x();
                  }
                  function j() {
                    function t(t, e) {
                      var n = pt.clone().add(e, "months");
                      a(t.label, n.format(ct.monthFormat)), W(t.body);
                    }
                    if (ct.date && Dt) {
                      var e = pt.year(),
                        n = pt.month();
                      if (pt.date() !== _t || n !== gt || e !== mt) {
                        var i = $();
                        if (
                          ((_t = pt.date()),
                          (gt = pt.month()),
                          (mt = pt.year()),
                          i)
                        )
                          return void q();
                        Rt.forEach(t), z();
                      }
                    }
                  }
                  function q() {
                    function t(t) {
                      var e,
                        n = [];
                      for (e = 0; e < t.length; e++) n.push(t[e]);
                      return n;
                    }
                    function e(e) {
                      return t(e.children);
                    }
                    function n(t) {
                      return (
                        !p.contains(t, ct.styles.dayPrevMonth) &&
                        !p.contains(t, ct.styles.dayNextMonth)
                      );
                    }
                    var i = pt.date() - 1;
                    it(!1),
                      Rt.forEach(function (r) {
                        var o;
                        U(r.date, pt) &&
                          ((o = t(r.body.children).map(e)),
                          (o = Array.prototype.concat.apply([], o).filter(n)),
                          it(o[i]));
                      });
                  }
                  function $() {
                    function t(t) {
                      return !!mt && U(t.date, pt);
                    }
                    return Rt.some(t);
                  }
                  function U(t, e) {
                    return (
                      t && e && t.year() === e.year() && t.month() === e.month()
                    );
                  }
                  function H() {
                    ct.time && Dt && a(xt, ht.format(ct.timeFormat));
                  }
                  function B() {
                    return (
                      It.emit("data", lt()),
                      It.emit("year", ht.year()),
                      It.emit("month", ht.month()),
                      It.emit("day", ht.day()),
                      It.emit("time", ht.format(ct.timeFormat)),
                      It
                    );
                  }
                  function V() {
                    return (mt = !1), (gt = !1), (_t = !1), P(!0), It;
                  }
                  function Y(t) {
                    var e = l(t, ct.inputFormat);
                    if (null !== e)
                      return (ht = X(e) || ht), (pt = ht.clone()), P(!0), It;
                  }
                  function W(t, e) {
                    for (; t && t.firstChild; ) t.removeChild(t.firstChild);
                    e === !0 && t.parentNode.removeChild(t);
                  }
                  function z() {
                    var t;
                    for (t = 0; t < ct.monthsInCalendar; t++) G(t);
                  }
                  function G(t) {
                    function e(t) {
                      var e, i, r;
                      for (e = 0; e < t.length; e++)
                        p.children.length === yt &&
                          (p = s({
                            type: "tr",
                            className: ct.styles.dayRow,
                            parent: o.body,
                          })),
                          (i = t.base.clone().add(e, "days")),
                          (r = s({
                            type: "td",
                            parent: p,
                            text: i.format(ct.dayFormat),
                            className: n(i, t.cell.join(" ").split(" ")).join(
                              " "
                            ),
                          })),
                          t.selectable && i.date() === u && it(r);
                    }
                    function n(t, e) {
                      return K(t, !0, ct.dateValidator) || e.push(y), e;
                    }
                    function i(t, e) {
                      return t && e.push(ct.styles.dayConcealed), e;
                    }
                    var r,
                      o = Rt[t],
                      a = pt.clone().add(t, "months"),
                      l = a.daysInMonth(),
                      u = a.month() !== ht.month() ? -1 : ht.date(),
                      c = a.clone().date(1),
                      h = b(c.day(), !0),
                      p = s({
                        type: "tr",
                        className: ct.styles.dayRow,
                        parent: o.body,
                      }),
                      f = i(0 !== t, [
                        ct.styles.dayBodyElem,
                        ct.styles.dayPrevMonth,
                      ]),
                      d = i(t !== ct.monthsInCalendar - 1, [
                        ct.styles.dayBodyElem,
                        ct.styles.dayNextMonth,
                      ]),
                      y = ct.styles.dayDisabled;
                    e({
                      base: c.clone().subtract(h, "days"),
                      length: h,
                      cell: f,
                    }),
                      e({
                        base: c.clone(),
                        length: l,
                        cell: [ct.styles.dayBodyElem],
                        selectable: !0,
                      }),
                      (r = c.clone().add(l, "days")),
                      e({ base: r, length: yt - p.children.length, cell: d }),
                      (St.disabled = !J(c, !0)),
                      (bt.disabled = !Z(r, !0)),
                      (o.date = a.clone());
                  }
                  function K(t, e, n) {
                    return (
                      !!J(t, e) &&
                      !!Z(t, e) &&
                      (n || Function.prototype).call(It, t.toDate()) !== !1
                    );
                  }
                  function J(t, e) {
                    var n =
                      !!ct.min && (e ? ct.min.clone().startOf("day") : ct.min);
                    return !n || !t.isBefore(n);
                  }
                  function Z(t, e) {
                    var n =
                      !!ct.max && (e ? ct.max.clone().endOf("day") : ct.max);
                    return !n || !t.isAfter(n);
                  }
                  function X(t) {
                    if (ct.min && t.isBefore(ct.min)) return X(ct.min.clone());
                    if (ct.max && t.isAfter(ct.max)) return X(ct.max.clone());
                    var e = t.clone().subtract(1, "days");
                    return et(e, t, "add")
                      ? tt(e)
                      : ((e = t.clone()),
                        et(e, t, "subtract") ? tt(e) : void 0);
                  }
                  function tt(t) {
                    var e,
                      n = t.clone().subtract(ct.timeInterval, "seconds"),
                      i = Math.ceil(Ft / ct.timeInterval);
                    for (e = 0; e < i; e++)
                      if (
                        (n.add(ct.timeInterval, "seconds"),
                        n.date() > t.date() && n.subtract(1, "days"),
                        ct.timeValidator.call(It, n.toDate()) !== !1)
                      )
                        return n;
                  }
                  function et(t, e, n) {
                    for (
                      var i = !1;
                      i === !1 && (t[n](1, "days"), t.month() === e.month());

                    )
                      i = ct.dateValidator.call(It, t.toDate());
                    return i !== !1;
                  }
                  function nt(t) {
                    var e = t.target;
                    if (
                      !p.contains(e, ct.styles.dayDisabled) &&
                      p.contains(e, ct.styles.dayBodyElem)
                    ) {
                      var n = parseInt(a(e), 10),
                        i = p.contains(e, ct.styles.dayPrevMonth),
                        r = p.contains(e, ct.styles.dayNextMonth),
                        o = rt(e) - rt(vt);
                      ht.add(o, "months"),
                        (i || r) && ht.add(i ? -1 : 1, "months"),
                        it(e),
                        ht.date(n),
                        ot(ht, X(ht) || ht),
                        (pt = ht.clone()),
                        ct.autoClose === !0 && O(),
                        P();
                    }
                  }
                  function it(t) {
                    vt && p.remove(vt, ct.styles.selectedDay),
                      t && p.add(t, ct.styles.selectedDay),
                      (vt = t);
                  }
                  function rt(t) {
                    for (var e; t && t.getAttribute; ) {
                      if ("string" == typeof (e = t.getAttribute(Ct)))
                        return parseInt(e, 10);
                      t = t.parentNode;
                    }
                    return 0;
                  }
                  function ot(t, e) {
                    return (
                      t.hour(e.hour()).minute(e.minute()).second(e.second()), t
                    );
                  }
                  function st(t) {
                    var e = t.target;
                    p.contains(e, ct.styles.timeOption) &&
                      (ot(ht, h.moment(a(e), ct.timeFormat)),
                      (pt = ht.clone()),
                      B(),
                      H(),
                      (!ct.date && ct.autoClose === !0) ||
                      "time" === ct.autoClose
                        ? O()
                        : C());
                  }
                  function at() {
                    return ht.toDate();
                  }
                  function lt(t) {
                    return ht.format(t || ct.inputFormat);
                  }
                  function ut() {
                    return ht.clone();
                  }
                  var ct,
                    ht,
                    pt,
                    ft,
                    dt,
                    yt,
                    mt,
                    gt,
                    _t,
                    vt,
                    wt,
                    St,
                    bt,
                    xt,
                    Tt,
                    Dt = !1,
                    Ct = "data-rome-offset",
                    Rt = [],
                    Ft = 86400,
                    It = o({ associated: t.associated });
                  return n(), setTimeout(d, 0), It;
                }
                var i,
                  r = t("crossvent"),
                  o = t("contra/emitter"),
                  s = t("./dom"),
                  a = t("./text"),
                  l = t("./parse"),
                  u = t("./clone"),
                  c = t("./defaults"),
                  h = t("./momentum"),
                  p = t("./classes"),
                  f = t("./noop");
                e.exports = n;
              },
              {
                "./classes": 22,
                "./clone": 23,
                "./defaults": 25,
                "./dom": 26,
                "./momentum": 31,
                "./noop": 32,
                "./parse": 33,
                "./text": 45,
                "contra/emitter": 14,
                crossvent: 18,
              },
            ],
            22: [
              function (t, e) {
                "use strict";
                function n(t) {
                  return t.className.replace(a, "").split(l);
                }
                function i(t, e) {
                  t.className = e.join(" ");
                }
                function r(t, e) {
                  var n = o(t, e);
                  n.push(e), i(t, n);
                }
                function o(t, e) {
                  var r = n(t),
                    o = r.indexOf(e);
                  return o !== -1 && (r.splice(o, 1), i(t, r)), r;
                }
                function s(t, e) {
                  return n(t).indexOf(e) !== -1;
                }
                var a = /^\s+|\s+$/g,
                  l = /\s+/;
                e.exports = { add: r, remove: o, contains: s };
              },
              {},
            ],
            23: [
              function (t, e) {
                "use strict";
                function n(t) {
                  var e,
                    r = {};
                  for (var o in t)
                    (e = t[o]),
                      e
                        ? i.isMoment(e)
                          ? (r[o] = e.clone())
                          : e._isStylesConfiguration
                          ? (r[o] = n(e))
                          : (r[o] = e)
                        : (r[o] = e);
                  return r;
                }
                var i = t("./momentum");
                e.exports = n;
              },
              { "./momentum": 31 },
            ],
            24: [
              function (t, e) {
                "use strict";
                function n(t, e) {
                  var n,
                    a = i.find(t);
                  return a
                    ? a
                    : ((n = s(t) ? r(t, e) : o(t, e)), i.assign(t, n), n);
                }
                var i = t("./index"),
                  r = t("./input"),
                  o = t("./inline"),
                  s = t("./isInput");
                e.exports = n;
              },
              { "./index": 27, "./inline": 28, "./input": 29, "./isInput": 30 },
            ],
            25: [
              function (t, e) {
                "use strict";
                function n(t, e) {
                  var n,
                    s,
                    a = t || {};
                  if (
                    (a.autoHideOnClick === s && (a.autoHideOnClick = !0),
                    a.autoHideOnBlur === s && (a.autoHideOnBlur = !0),
                    a.autoClose === s && (a.autoClose = !0),
                    a.appendTo === s && (a.appendTo = document.body),
                    "parent" === a.appendTo)
                  ) {
                    if (!r(e.associated))
                      throw new Error(
                        "Inline calendars must be appended to a parent node explicitly."
                      );
                    a.appendTo = e.associated.parentNode;
                  }
                  if (
                    (a.invalidate === s && (a.invalidate = !0),
                    a.required === s && (a.required = !1),
                    a.date === s && (a.date = !0),
                    a.time === s && (a.time = !0),
                    a.date === !1 && a.time === !1)
                  )
                    throw new Error(
                      "At least one of `date` or `time` must be `true`."
                    );
                  if (
                    (a.inputFormat === s &&
                      (a.date && a.time
                        ? (a.inputFormat = "YYYY-MM-DD HH:mm")
                        : a.date
                        ? (a.inputFormat = "YYYY-MM-DD")
                        : (a.inputFormat = "HH:mm")),
                    a.initialValue === s
                      ? (a.initialValue = null)
                      : (a.initialValue = i(a.initialValue, a.inputFormat)),
                    a.min === s
                      ? (a.min = null)
                      : (a.min = i(a.min, a.inputFormat)),
                    a.max === s
                      ? (a.max = null)
                      : (a.max = i(a.max, a.inputFormat)),
                    a.timeInterval === s && (a.timeInterval = 1800),
                    a.min && a.max)
                  )
                    if (
                      (a.max.isBefore(a.min) &&
                        ((n = a.max), (a.max = a.min), (a.min = n)),
                      a.date === !0)
                    ) {
                      if (a.max.clone().subtract(1, "days").isBefore(a.min))
                        throw new Error(
                          "`max` must be at least one day after `min`"
                        );
                    } else if (
                      1e3 * a.timeInterval - (a.min % (1e3 * a.timeInterval)) >
                      a.max - a.min
                    )
                      throw new Error(
                        "`min` to `max` range must allow for at least one time option that matches `timeInterval`"
                      );
                  if (
                    (a.dateValidator === s &&
                      (a.dateValidator = Function.prototype),
                    a.timeValidator === s &&
                      (a.timeValidator = Function.prototype),
                    a.timeFormat === s && (a.timeFormat = "HH:mm"),
                    a.weekStart === s &&
                      (a.weekStart = o.moment().weekday(0).day()),
                    a.weekdayFormat === s && (a.weekdayFormat = "min"),
                    "long" === a.weekdayFormat)
                  )
                    a.weekdayFormat = o.moment.weekdays();
                  else if ("short" === a.weekdayFormat)
                    a.weekdayFormat = o.moment.weekdaysShort();
                  else if ("min" === a.weekdayFormat)
                    a.weekdayFormat = o.moment.weekdaysMin();
                  else if (
                    !Array.isArray(a.weekdayFormat) ||
                    a.weekdayFormat.length < 7
                  )
                    throw new Error(
                      "`weekdays` must be `min`, `short`, or `long`"
                    );
                  a.monthsInCalendar === s && (a.monthsInCalendar = 1),
                    a.monthFormat === s && (a.monthFormat = "MMMM YYYY"),
                    a.dayFormat === s && (a.dayFormat = "DD"),
                    a.styles === s && (a.styles = {}),
                    (a.styles._isStylesConfiguration = !0);
                  var l = a.styles;
                  return (
                    l.back === s && (l.back = "rd-back"),
                    l.container === s && (l.container = "rd-container"),
                    l.positioned === s &&
                      (l.positioned = "rd-container-attachment"),
                    l.date === s && (l.date = "rd-date"),
                    l.dayBody === s && (l.dayBody = "rd-days-body"),
                    l.dayBodyElem === s && (l.dayBodyElem = "rd-day-body"),
                    l.dayPrevMonth === s &&
                      (l.dayPrevMonth = "rd-day-prev-month"),
                    l.dayNextMonth === s &&
                      (l.dayNextMonth = "rd-day-next-month"),
                    l.dayDisabled === s && (l.dayDisabled = "rd-day-disabled"),
                    l.dayConcealed === s &&
                      (l.dayConcealed = "rd-day-concealed"),
                    l.dayHead === s && (l.dayHead = "rd-days-head"),
                    l.dayHeadElem === s && (l.dayHeadElem = "rd-day-head"),
                    l.dayRow === s && (l.dayRow = "rd-days-row"),
                    l.dayTable === s && (l.dayTable = "rd-days"),
                    l.month === s && (l.month = "rd-month"),
                    l.monthLabel === s && (l.monthLabel = "rd-month-label"),
                    l.next === s && (l.next = "rd-next"),
                    l.selectedDay === s && (l.selectedDay = "rd-day-selected"),
                    l.selectedTime === s &&
                      (l.selectedTime = "rd-time-selected"),
                    l.time === s && (l.time = "rd-time"),
                    l.timeList === s && (l.timeList = "rd-time-list"),
                    l.timeOption === s && (l.timeOption = "rd-time-option"),
                    a
                  );
                }
                var i = t("./parse"),
                  r = t("./isInput"),
                  o = t("./momentum");
                e.exports = n;
              },
              { "./isInput": 30, "./momentum": 31, "./parse": 33 },
            ],
            26: [
              function (t, e) {
                "use strict";
                function n(t) {
                  var e = t || {};
                  e.type || (e.type = "div");
                  var n = document.createElement(e.type);
                  return (
                    e.className && (n.className = e.className),
                    e.text && (n.innerText = n.textContent = e.text),
                    e.attributes &&
                      Object.keys(e.attributes).forEach(function (t) {
                        n.setAttribute(t, e.attributes[t]);
                      }),
                    e.parent && e.parent.appendChild(n),
                    n
                  );
                }
                e.exports = n;
              },
              {},
            ],
            27: [
              function (t, e) {
                "use strict";
                function n(t) {
                  if ("number" != typeof t && t && t.getAttribute)
                    return n(t.getAttribute(o));
                  var e = s[t];
                  return e !== r ? e : null;
                }
                function i(t, e) {
                  t.setAttribute(o, (e.id = s.push(e) - 1));
                }
                var r,
                  o = "data-rome-id",
                  s = [];
                e.exports = { find: n, assign: i };
              },
              {},
            ],
            28: [
              function (t, e) {
                "use strict";
                function n(t, e) {
                  var n = e || {};
                  (n.appendTo = t), (n.associated = t);
                  var r = i(n);
                  return r.show(), r;
                }
                var i = t("./calendar");
                e.exports = n;
              },
              { "./calendar": 21 },
            ],
            29: [
              function (t, e) {
                "use strict";
                function n(t, e) {
                  function n(e) {
                    (w = s(e || w, T)),
                      u.add(T.container, w.styles.positioned),
                      i.add(T.container, "mousedown", f),
                      i.add(T.container, "click", p),
                      (T.getDate = v(T.getDate)),
                      (T.getDateString = v(T.getDateString)),
                      (T.getMoment = v(T.getMoment)),
                      w.initialValue &&
                        (t.value = w.initialValue.format(w.inputFormat)),
                      (x = r(T.container, t)),
                      T.on("data", g),
                      T.on("show", x.refresh),
                      h(),
                      D();
                  }
                  function c() {
                    h(!0), x.destroy(), (x = null);
                  }
                  function h(e) {
                    var r = e ? "remove" : "add";
                    i[r](t, "click", y),
                      i[r](t, "touchend", y),
                      i[r](t, "focusin", y),
                      i[r](t, "change", D),
                      i[r](t, "keypress", D),
                      i[r](t, "keydown", D),
                      i[r](t, "input", D),
                      w.invalidate && i[r](t, "blur", d),
                      e
                        ? (T.once("ready", n), T.off("destroyed", c))
                        : (T.off("ready", n), T.once("destroyed", c));
                  }
                  function p() {
                    (b = !0), t.focus(), (b = !1);
                  }
                  function f() {
                    function t() {
                      S = !1;
                    }
                    (S = !0), setTimeout(t, 0);
                  }
                  function d() {
                    S || _() || T.emitValues();
                  }
                  function y() {
                    b || T.show();
                  }
                  function m() {
                    var e = t.value.trim();
                    if (!_()) {
                      var n = l.moment(e, w.inputFormat, w.strictParse);
                      T.setValue(n);
                    }
                  }
                  function g(e) {
                    t.value = e;
                  }
                  function _() {
                    return w.required === !1 && "" === t.value.trim();
                  }
                  function v(t) {
                    return function () {
                      return _() ? null : t.apply(this, arguments);
                    };
                  }
                  var w = e || {};
                  w.associated = t;
                  var S,
                    b,
                    x,
                    T = a(w),
                    D = o(m, 30);
                  return n(w), T;
                }
                var i = t("crossvent"),
                  r = t("bullseye"),
                  o = t("./throttle"),
                  s = (t("./clone"), t("./defaults")),
                  a = t("./calendar"),
                  l = t("./momentum"),
                  u = t("./classes");
                e.exports = n;
              },
              {
                "./calendar": 21,
                "./classes": 22,
                "./clone": 23,
                "./defaults": 25,
                "./momentum": 31,
                "./throttle": 46,
                bullseye: 1,
                crossvent: 18,
              },
            ],
            30: [
              function (t, e) {
                "use strict";
                function n(t) {
                  return (
                    t && t.nodeName && "input" === t.nodeName.toLowerCase()
                  );
                }
                e.exports = n;
              },
              {},
            ],
            31: [
              function (t, e) {
                "use strict";
                function n(t) {
                  return (
                    t &&
                    Object.prototype.hasOwnProperty.call(t, "_isAMomentObject")
                  );
                }
                var i = { moment: null, isMoment: n };
                e.exports = i;
              },
              {},
            ],
            32: [
              function (t, e) {
                "use strict";
                function n() {}
                e.exports = n;
              },
              {},
            ],
            33: [
              function (t, e) {
                "use strict";
                function n(t, e) {
                  return "string" == typeof t
                    ? r.moment(t, e)
                    : "[object Date]" === Object.prototype.toString.call(t)
                    ? r.moment(t)
                    : r.isMoment(t)
                    ? t.clone()
                    : void 0;
                }
                function i(t, e) {
                  var i = n(t, "string" == typeof e ? e : null);
                  return i && i.isValid() ? i : null;
                }
                var r = t("./momentum");
                e.exports = i;
              },
              { "./momentum": 31 },
            ],
            34: [
              function () {
                "use strict";
                Array.prototype.filter ||
                  (Array.prototype.filter = function (t, e) {
                    var n = [];
                    return (
                      this.forEach(function (i, r, o) {
                        t.call(e, i, r, o) && n.push(i);
                      }, e),
                      n
                    );
                  });
              },
              {},
            ],
            35: [
              function () {
                "use strict";
                Array.prototype.forEach ||
                  (Array.prototype.forEach = function (t, e) {
                    if (
                      void 0 === this ||
                      null === this ||
                      "function" != typeof t
                    )
                      throw new TypeError();
                    for (var n = this, i = n.length, r = 0; r < i; r++)
                      r in n && t.call(e, n[r], r, n);
                  });
              },
              {},
            ],
            36: [
              function () {
                "use strict";
                Array.prototype.indexOf ||
                  (Array.prototype.indexOf = function (t, e) {
                    if (this === undefined || null === this)
                      throw new TypeError();
                    var n = this.length;
                    for (
                      e = +e || 0,
                        Math.abs(e) === Infinity
                          ? (e = 0)
                          : e < 0 && (e += n) < 0 && (e = 0);
                      e < n;
                      e++
                    )
                      if (this[e] === t) return e;
                    return -1;
                  });
              },
              {},
            ],
            37: [
              function () {
                "use strict";
                Array.isArray ||
                  (Array.isArray = function (t) {
                    return (
                      "" + t !== t &&
                      "[object Array]" === Object.prototype.toString.call(t)
                    );
                  });
              },
              {},
            ],
            38: [
              function () {
                "use strict";
                Array.prototype.map ||
                  (Array.prototype.map = function (t, e) {
                    var n, i, r;
                    if (null == this)
                      throw new TypeError("this is null or not defined");
                    var o = Object(this),
                      s = o.length >>> 0;
                    if ("function" != typeof t)
                      throw new TypeError(t + " is not a function");
                    for (
                      arguments.length > 1 && (n = e), i = new Array(s), r = 0;
                      r < s;

                    )
                      r in o && (i[r] = t.call(n, o[r], r, o)), r++;
                    return i;
                  });
              },
              {},
            ],
            39: [
              function () {
                "use strict";
                Array.prototype.some ||
                  (Array.prototype.some = function (t, e) {
                    var n, i;
                    if (null == this)
                      throw new TypeError("this is null or not defined");
                    var r = Object(this),
                      o = r.length >>> 0;
                    if ("function" != typeof t)
                      throw new TypeError(t + " is not a function");
                    for (arguments.length > 1 && (n = e), i = 0; i < o; ) {
                      if (i in r && t.call(n, r[i], i, r)) return !0;
                      i++;
                    }
                    return !1;
                  });
              },
              {},
            ],
            40: [
              function () {
                "use strict";
                Function.prototype.bind ||
                  (Function.prototype.bind = function (t) {
                    if ("function" != typeof this)
                      throw new TypeError(
                        "Function.prototype.bind - what is trying to be bound is not callable"
                      );
                    var e = Array.prototype.slice.call(arguments, 1),
                      n = this,
                      i = function () {},
                      r = function () {
                        var r = this instanceof i && t ? this : t,
                          o = e.concat(Array.prototype.slice.call(arguments));
                        return n.apply(r, o);
                      };
                    return (
                      (i.prototype = this.prototype), (r.prototype = new i()), r
                    );
                  });
              },
              {},
            ],
            41: [
              function () {
                "use strict";
                var t = Object.prototype.hasOwnProperty,
                  e = !{ toString: null }.propertyIsEnumerable("toString"),
                  n = [
                    "toString",
                    "toLocaleString",
                    "valueOf",
                    "hasOwnProperty",
                    "isPrototypeOf",
                    "propertyIsEnumerable",
                    "constructor",
                  ],
                  i = n.length;
                Object.keys ||
                  (Object.keys = function (r) {
                    if (
                      "object" != typeof r &&
                      ("function" != typeof r || null === r)
                    )
                      throw new TypeError("Object.keys called on non-object");
                    var o,
                      s,
                      a = [];
                    for (o in r) t.call(r, o) && a.push(o);
                    if (e)
                      for (s = 0; s < i; s++) t.call(r, n[s]) && a.push(n[s]);
                    return a;
                  });
              },
              {},
            ],
            42: [
              function () {
                "use strict";
                String.prototype.trim ||
                  (String.prototype.trim = function () {
                    return this.replace(/^\s+|\s+$/g, "");
                  });
              },
              {},
            ],
            43: [
              function (t, e) {
                "use strict";
                t("./polyfills/function.bind"),
                  t("./polyfills/array.foreach"),
                  t("./polyfills/array.map"),
                  t("./polyfills/array.filter"),
                  t("./polyfills/array.isarray"),
                  t("./polyfills/array.indexof"),
                  t("./polyfills/array.some"),
                  t("./polyfills/string.trim"),
                  t("./polyfills/object.keys");
                var n = t("./core"),
                  i = t("./index"),
                  r = t("./use");
                (n.use = r.bind(n)),
                  (n.find = i.find),
                  (n.val = t("./validators")),
                  (e.exports = n);
              },
              {
                "./core": 24,
                "./index": 27,
                "./polyfills/array.filter": 34,
                "./polyfills/array.foreach": 35,
                "./polyfills/array.indexof": 36,
                "./polyfills/array.isarray": 37,
                "./polyfills/array.map": 38,
                "./polyfills/array.some": 39,
                "./polyfills/function.bind": 40,
                "./polyfills/object.keys": 41,
                "./polyfills/string.trim": 42,
                "./use": 47,
                "./validators": 48,
              },
            ],
            44: [
              function (t, e) {
                (function (n) {
                  var i = t("./rome"),
                    r = t("./momentum");
                  if ((i.use(n.moment), void 0 === r.moment))
                    throw new Error(
                      "rome depends on moment.js, you can get it at http://momentjs.com, or you could use the bundled distribution file instead."
                    );
                  e.exports = i;
                }.call(
                  this,
                  "undefined" != typeof global
                    ? global
                    : "undefined" != typeof self
                    ? self
                    : "undefined" != typeof window
                    ? window
                    : {}
                ));
              },
              { "./momentum": 31, "./rome": 43 },
            ],
            45: [
              function (t, e) {
                "use strict";
                function n(t, e) {
                  return (
                    2 === arguments.length && (t.innerText = t.textContent = e),
                    t.innerText || t.textContent
                  );
                }
                e.exports = n;
              },
              {},
            ],
            46: [
              function (t, e) {
                "use strict";
                e.exports = function (t, e) {
                  var n,
                    i = -Infinity;
                  return function () {
                    function r() {
                      clearTimeout(n), (n = null);
                      var o = i + e,
                        s = +new Date();
                      s > o
                        ? ((i = s), t.apply(this, arguments))
                        : (n = setTimeout(r, o - s));
                    }
                    n || r();
                  };
                };
              },
              {},
            ],
            47: [
              function (t, e) {
                "use strict";
                function n(t) {
                  this.moment = i.moment = t;
                }
                var i = t("./momentum");
                e.exports = n;
              },
              { "./momentum": 31 },
            ],
            48: [
              function (t, e) {
                "use strict";
                function n(t) {
                  return function (e) {
                    var n = o(e);
                    return function (i) {
                      var a = r.find(e),
                        l = o(i),
                        u = n || (a && a.getMoment());
                      return !u || (a && s.add(this, a), t(l, u));
                    };
                  };
                }
                function i(t, e) {
                  return function (n, i) {
                    function a(t) {
                      var e,
                        n,
                        i = r.find(t);
                      return (
                        i
                          ? (e = n = i.getMoment())
                          : Array.isArray(t)
                          ? ((e = t[0]), (n = t[1]))
                          : (e = n = t),
                        i && s.add(i, this),
                        {
                          start: o(e).startOf("day").toDate(),
                          end: o(n).endOf("day").toDate(),
                        }
                      );
                    }
                    var l,
                      u = arguments.length;
                    return (
                      Array.isArray(n)
                        ? (l = n)
                        : 1 === u
                        ? (l = [n])
                        : 2 === u && (l = [[n, i]]),
                      function (n) {
                        return l.map(a.bind(this))[t](e.bind(this, n));
                      }
                    );
                  };
                }
                var r = t("./index"),
                  o = t("./parse"),
                  s = t("./association"),
                  a = n(function (t, e) {
                    return t >= e;
                  }),
                  l = n(function (t, e) {
                    return t > e;
                  }),
                  u = n(function (t, e) {
                    return t <= e;
                  }),
                  c = n(function (t, e) {
                    return t < e;
                  }),
                  h = i("every", function (t, e) {
                    return e.start > t || e.end < t;
                  }),
                  p = i("some", function (t, e) {
                    return e.start <= t && e.end >= t;
                  });
                e.exports = {
                  afterEq: a,
                  after: l,
                  beforeEq: u,
                  before: c,
                  except: h,
                  only: p,
                };
              },
              { "./association": 20, "./index": 27, "./parse": 33 },
            ],
          },
          {},
          [44]
        )(44);
      })
      /*!
       * jQuery-ajaxTransport-XDomainRequest - v1.0.3 - 2014-06-06
       * https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest
       * Copyright (c) 2014 Jason Moon (@JSONMOON)
       * Licensed MIT (/blob/master/LICENSE.txt)
       */,
      (function (t) {
        "function" == typeof define && define.amd
          ? define(["jquery"], t)
          : "object" == typeof exports
          ? (module.exports = t(require("jquery")))
          : t(jQuery);
      })(function (t) {
        if (!t.support.cors && t.ajaxTransport && window.XDomainRequest) {
          var e = /^https?:\/\//i,
            n = /^get|post$/i,
            i = new RegExp("^" + location.protocol, "i");
          t.ajaxTransport("* text html xml json", function (r, o) {
            if (
              r.crossDomain &&
              r.async &&
              n.test(r.type) &&
              e.test(r.url) &&
              i.test(r.url)
            ) {
              var s = null;
              return {
                send: function (e, n) {
                  var i = "",
                    a = (o.dataType || "").toLowerCase();
                  (s = new XDomainRequest()),
                    /^\d+$/.test(o.timeout) && (s.timeout = o.timeout),
                    (s.ontimeout = function () {
                      n(500, "timeout");
                    }),
                    (s.onload = function () {
                      var t =
                          "Content-Length: " +
                          s.responseText.length +
                          "\r\nContent-Type: " +
                          s.contentType,
                        e = { code: 200, message: "success" },
                        i = { text: s.responseText };
                      try {
                        if ("html" === a || /text\/html/i.test(s.contentType))
                          i.html = s.responseText;
                        else if (
                          "json" === a ||
                          ("text" !== a && /\/json/i.test(s.contentType))
                        )
                          try {
                            i.json = JSON.parse(s.responseText);
                          } catch (t) {
                            (e.code = 500), (e.message = "parseerror");
                          }
                        else if (
                          "xml" === a ||
                          ("text" !== a && /\/xml/i.test(s.contentType))
                        ) {
                          var r = new ActiveXObject("Microsoft.XMLDOM");
                          r.async = !1;
                          try {
                            r.loadXML(s.responseText);
                          } catch (t) {
                            r = undefined;
                          }
                          if (
                            !r ||
                            !r.documentElement ||
                            r.getElementsByTagName("parsererror").length
                          )
                            throw (
                              ((e.code = 500),
                              (e.message = "parseerror"),
                              "Invalid XML: " + s.responseText)
                            );
                          i.xml = r;
                        }
                      } catch (t) {
                        throw t;
                      } finally {
                        n(e.code, e.message, i, t);
                      }
                    }),
                    (s.onprogress = function () {}),
                    (s.onerror = function () {
                      n(500, "error", { text: s.responseText });
                    }),
                    o.data &&
                      (i =
                        "string" == typeof o.data ? o.data : t.param(o.data)),
                    s.open(r.type, r.url),
                    s.send(i);
                },
                abort: function () {
                  s && s.abort();
                },
              };
            }
          });
        }
      }),
      (function (t) {
        "use strict";
        function e() {}
        function n() {
          try {
            return document.activeElement;
          } catch (t) {}
        }
        function i(t, e) {
          for (var n = 0, i = t.length; i > n; n++) if (t[n] === e) return !0;
          return !1;
        }
        function r(t, e, n) {
          return t.addEventListener
            ? t.addEventListener(e, n, !1)
            : t.attachEvent
            ? t.attachEvent("on" + e, n)
            : void 0;
        }
        function o(t, e) {
          var n;
          t.createTextRange
            ? ((n = t.createTextRange()), n.move("character", e), n.select())
            : t.selectionStart && (t.focus(), t.setSelectionRange(e, e));
        }
        function s(t, e) {
          try {
            return (t.type = e), !0;
          } catch (t) {
            return !1;
          }
        }
        function a(t, e) {
          if (t && t.getAttribute(R)) e(t);
          else
            for (
              var n,
                i = t ? t.getElementsByTagName("input") : j,
                r = t ? t.getElementsByTagName("textarea") : q,
                o = i ? i.length : 0,
                s = r ? r.length : 0,
                a = o + s,
                l = 0;
              a > l;
              l++
            )
              (n = o > l ? i[l] : r[l - o]), e(n);
        }
        function l(t) {
          a(t, c);
        }
        function u(t) {
          a(t, h);
        }
        function c(t, e) {
          var n = !!e && t.value !== e,
            i = t.value === t.getAttribute(R);
          if ((n || i) && "true" === t.getAttribute(F)) {
            t.removeAttribute(F),
              (t.value = t.value.replace(t.getAttribute(R), "")),
              (t.className = t.className.replace(C, ""));
            var r = t.getAttribute(E);
            parseInt(r, 10) >= 0 &&
              (t.setAttribute("maxLength", r), t.removeAttribute(E));
            var o = t.getAttribute(I);
            return o && (t.type = o), !0;
          }
          return !1;
        }
        function h(t) {
          var e = t.getAttribute(R);
          return (
            !("" !== t.value || !e) &&
            (t.setAttribute(F, "true"),
            (t.value = e),
            (t.className += " " + D),
            t.getAttribute(E) ||
              (t.setAttribute(E, t.maxLength), t.removeAttribute("maxLength")),
            t.getAttribute(I)
              ? (t.type = "text")
              : "password" === t.type &&
                s(t, "text") &&
                t.setAttribute(I, "password"),
            !0)
          );
        }
        function p(t) {
          return function () {
            $ && t.value === t.getAttribute(R) && "true" === t.getAttribute(F)
              ? o(t, 0)
              : c(t);
          };
        }
        function f(t) {
          return function () {
            h(t);
          };
        }
        function d(t) {
          return function () {
            l(t);
          };
        }
        function y(t) {
          return function (e) {
            return (
              (S = t.value),
              "true" === t.getAttribute(F) &&
              S === t.getAttribute(R) &&
              i(x, e.keyCode)
                ? (e.preventDefault && e.preventDefault(), !1)
                : void 0
            );
          };
        }
        function m(t) {
          return function () {
            c(t, S), "" === t.value && (t.blur(), o(t, 0));
          };
        }
        function g(t) {
          return function () {
            t === n() &&
              t.value === t.getAttribute(R) &&
              "true" === t.getAttribute(F) &&
              o(t, 0);
          };
        }
        function _(t) {
          var e = t.form;
          e &&
            "string" == typeof e &&
            ((e = document.getElementById(e)),
            e.getAttribute(M) ||
              (r(e, "submit", d(e)), e.setAttribute(M, "true"))),
            r(t, "focus", p(t)),
            r(t, "blur", f(t)),
            $ &&
              (r(t, "keydown", y(t)), r(t, "keyup", m(t)), r(t, "click", g(t))),
            t.setAttribute(O, "true"),
            t.setAttribute(R, V),
            ($ || t !== n()) && h(t);
        }
        var v = document.createElement("input"),
          w = void 0 !== v.placeholder;
        if (
          ((t.Placeholders = {
            nativeSupport: w,
            disable: w ? e : l,
            enable: w ? e : u,
          }),
          !w)
        ) {
          var S,
            b = [
              "text",
              "search",
              "url",
              "tel",
              "email",
              "password",
              "number",
              "textarea",
            ],
            x = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46],
            T = "#ccc",
            D = "placeholdersjs",
            C = new RegExp("(?:^|\\s)" + D + "(?!\\S)"),
            R = "data-placeholder-value",
            F = "data-placeholder-active",
            I = "data-placeholder-type",
            M = "data-placeholder-submit",
            O = "data-placeholder-bound",
            k = "data-placeholder-focus",
            A = "data-placeholder-live",
            E = "data-placeholder-maxlength",
            L = 100,
            Q = document.getElementsByTagName("head")[0],
            N = document.documentElement,
            P = t.Placeholders,
            j = document.getElementsByTagName("input"),
            q = document.getElementsByTagName("textarea"),
            $ = "false" === N.getAttribute(k),
            U = "false" !== N.getAttribute(A),
            H = document.createElement("style");
          H.type = "text/css";
          var B = document.createTextNode("." + D + " {color:" + T + ";}");
          H.styleSheet
            ? (H.styleSheet.cssText = B.nodeValue)
            : H.appendChild(B),
            Q.insertBefore(H, Q.firstChild);
          for (var V, Y, W = 0, z = j.length + q.length; z > W; W++)
            (Y = W < j.length ? j[W] : q[W - j.length]),
              (V = Y.attributes.placeholder) &&
                (V = V.nodeValue) &&
                i(b, Y.type) &&
                _(Y);
          var G = setInterval(function () {
            for (var t = 0, e = j.length + q.length; e > t; t++)
              (Y = t < j.length ? j[t] : q[t - j.length]),
                (V = Y.attributes.placeholder),
                V
                  ? (V = V.nodeValue) &&
                    i(b, Y.type) &&
                    (Y.getAttribute(O) || _(Y),
                    (V !== Y.getAttribute(R) ||
                      ("password" === Y.type && !Y.getAttribute(I))) &&
                      ("password" === Y.type &&
                        !Y.getAttribute(I) &&
                        s(Y, "text") &&
                        Y.setAttribute(I, "password"),
                      Y.value === Y.getAttribute(R) && (Y.value = V),
                      Y.setAttribute(R, V)))
                  : Y.getAttribute(F) && (c(Y), Y.removeAttribute(R));
            U || clearInterval(G);
          }, L);
          r(t, "beforeunload", function () {
            P.disable();
          });
        }
      })(this),
      (function () {
        "use strict";
        (moment.noConflict = function (t) {
          return (window.moment = t), this;
        }),
          (rome.noConflict = function (t) {
            return (window.rome = t), this;
          }),
          (window.__st_ro = rome.noConflict(__st_rome)),
          (window.__st_mt = moment.noConflict(__st_moment));
      })();
    var Liquid = {
      author: "Matt McCray <darthapo@gmail.com>",
      version: "1.3.1",
      readTemplateFile: function () {
        throw "This liquid context does not allow includes.";
      },
      registerFilters: function (t) {
        Liquid.Template.registerFilter(t);
      },
      parse: function (t) {
        return Liquid.Template.parse(t);
      },
    };
    Array.prototype.indexOf ||
      (Array.prototype.indexOf = function (t) {
        for (var e = 0; e < this.length; e++) if (this[e] == t) return e;
        return -1;
      }),
      Array.prototype.clear ||
        (Array.prototype.clear = function () {
          this.length = 0;
        }),
      Array.prototype.map ||
        (Array.prototype.map = function (t) {
          var e = this.length;
          if ("function" != typeof t)
            throw "Array.map requires first argument to be a function";
          for (var n = new Array(e), i = arguments[1], r = 0; r < e; r++)
            r in this && (n[r] = t.call(i, this[r], r, this));
          return n;
        }),
      Array.prototype.first ||
        (Array.prototype.first = function () {
          return this[0];
        }),
      Array.prototype.last ||
        (Array.prototype.last = function () {
          return this[this.length - 1];
        }),
      Array.prototype.flatten ||
        (Array.prototype.flatten = function () {
          for (var t = this.length, e = [], n = 0; n < t; n++)
            this[n] instanceof Array
              ? (e = e.concat(this[n]))
              : e.push(this[n]);
          return e;
        }),
      Array.prototype.each ||
        (Array.prototype.each = function (t) {
          var e = this.length;
          if ("function" != typeof t)
            throw "Array.each requires first argument to be a function";
          for (var n = arguments[1], i = 0; i < e; i++)
            i in this && t.call(n, this[i], i, this);
          return null;
        }),
      Array.prototype.include ||
        (Array.prototype.include = function (t) {
          return this.length, this.indexOf(t) >= 0;
        }),
      String.prototype.capitalize ||
        (String.prototype.capitalize = function () {
          return this.charAt(0).toUpperCase() + this.substring(1).toLowerCase();
        }),
      String.prototype.strip ||
        (String.prototype.strip = function () {
          return this.replace(/^\s+/, "").replace(/\s+$/, "");
        }),
      (Liquid.extensions = {}),
      (Liquid.extensions.object = {}),
      (Liquid.extensions.object.update = function (t) {
        for (var e in t) this[e] = t[e];
        return this;
      }),
      (Liquid.extensions.object.hasKey = function (t) {
        return !!this[t];
      }),
      (Liquid.extensions.object.hasValue = function (t) {
        for (var e in this) if (this[e] == t) return !0;
        return !1;
      }),
      function () {
        var t = !1,
          e = /xyz/.test(function () {
            xyz;
          })
            ? /\b_super\b/
            : /.*/;
        (this.Class = function () {}),
          (this.Class.extend = function (n) {
            function i() {
              !t && this.init && this.init.apply(this, arguments);
            }
            var r = this.prototype;
            t = !0;
            var o = new this();
            t = !1;
            for (var s in n)
              o[s] =
                "function" == typeof n[s] &&
                "function" == typeof r[s] &&
                e.test(n[s])
                  ? (function (t, e) {
                      return function () {
                        var n = this._super;
                        this._super = r[t];
                        var i = e.apply(this, arguments);
                        return (this._super = n), i;
                      };
                    })(s, n[s])
                  : n[s];
            return (
              (i.prototype = o),
              (i.prototype.constructor = i),
              (i.extend = arguments.callee),
              i
            );
          });
      }.call(Liquid),
      (Liquid.Tag = Liquid.Class.extend({
        init: function (t, e, n) {
          (this.tagName = t),
            (this.markup = e),
            (this.nodelist = this.nodelist || []),
            this.parse(n);
        },
        parse: function () {},
        render: function () {
          return "";
        },
      })),
      (Liquid.Block = Liquid.Tag.extend({
        init: function (t, e, n) {
          (this.blockName = t),
            (this.blockDelimiter = "end" + this.blockName),
            this._super(t, e, n);
        },
        parse: function (t) {
          this.nodelist || (this.nodelist = []), this.nodelist.clear();
          var e = t.shift();
          for (t.push(""); t.length; ) {
            if (/^\{\%/.test(e)) {
              var n = e.match(/^\{\%\s*(\w+)\s*(.*)?\%\}$/);
              if (!n)
                throw "Tag '" + e + "' was not properly terminated with: %}";
              if (this.blockDelimiter == n[1]) return void this.endTag();
              n[1] in Liquid.Template.tags
                ? this.nodelist.push(
                    new Liquid.Template.tags[n[1]](n[1], n[2], t)
                  )
                : this.unknownTag(n[1], n[2], t);
            } else
              /^\{\{/.test(e)
                ? this.nodelist.push(this.createVariable(e))
                : this.nodelist.push(e);
            e = t.shift();
          }
          this.assertMissingDelimitation();
        },
        endTag: function () {},
        unknownTag: function (t) {
          switch (t) {
            case "else":
              throw this.blockName + " tag does not expect else tag";
            case "end":
              throw (
                "'end' is not a valid delimiter for " +
                this.blockName +
                " tags. use " +
                this.blockDelimiter
              );
            default:
              throw "Unknown tag: " + t;
          }
        },
        createVariable: function (t) {
          var e = t.match(/^\{\{(.*)\}\}$/);
          if (e) return new Liquid.Variable(e[1]);
          throw "Variable '" + t + "' was not properly terminated with: }}";
        },
        render: function (t) {
          return this.renderAll(this.nodelist, t);
        },
        renderAll: function (t, e) {
          return (t || []).map(function (t) {
            var n = "";
            try {
              n = t.render ? t.render(e) : t;
            } catch (t) {
              n = e.handleError(t);
            }
            return n;
          });
        },
        assertMissingDelimitation: function () {
          throw this.blockName + " tag was never closed";
        },
      })),
      (Liquid.Document = Liquid.Block.extend({
        init: function (t) {
          (this.blockDelimiter = []), this.parse(t);
        },
        assertMissingDelimitation: function () {},
      })),
      (Liquid.Strainer = Liquid.Class.extend({
        init: function (t) {
          this.context = t;
        },
        respondTo: function (t) {
          return (
            (t = t.toString()),
            !t.match(/^__/) &&
              !Liquid.Strainer.requiredMethods.include(t) &&
              t in this
          );
        },
      })),
      (Liquid.Strainer.filters = {}),
      (Liquid.Strainer.globalFilter = function (t) {
        for (var e in t) Liquid.Strainer.filters[e] = t[e];
      }),
      (Liquid.Strainer.requiredMethods = ["respondTo", "context"]),
      (Liquid.Strainer.create = function (t) {
        var e = new Liquid.Strainer(t);
        for (var n in Liquid.Strainer.filters)
          e[n] = Liquid.Strainer.filters[n];
        return e;
      }),
      (Liquid.Context = Liquid.Class.extend({
        init: function (t, e, n) {
          (this.scopes = [t ? t : {}]),
            (this.registers = e ? e : {}),
            (this.errors = []),
            (this.rethrowErrors = n),
            (this.strainer = Liquid.Strainer.create(this));
        },
        get: function (t) {
          return this.resolve(t);
        },
        set: function (t, e) {
          this.scopes[0][t] = e;
        },
        hasKey: function (t) {
          return !!this.resolve(t);
        },
        push: function () {
          var t = {};
          return this.scopes.unshift(t), t;
        },
        merge: function (t) {
          return Liquid.extensions.object.update.call(this.scopes[0], t);
        },
        pop: function () {
          if (1 == this.scopes.length) throw "Context stack error";
          return this.scopes.shift();
        },
        stack: function (t, e) {
          var n = null;
          this.push();
          try {
            n = t.apply(e ? e : this.strainer);
          } finally {
            this.pop();
          }
          return n;
        },
        invoke: function (t, e) {
          return this.strainer.respondTo(t)
            ? this.strainer[t].apply(this.strainer, e)
            : 0 == e.length
            ? null
            : e[0];
        },
        resolve: function (t) {
          switch (t) {
            case null:
            case "nil":
            case "null":
            case "":
              return null;
            case "true":
              return !0;
            case "false":
              return !1;
            case "blank":
            case "empty":
              return "";
            default:
              if (/^'(.*)'$/.test(t)) return t.replace(/^'(.*)'$/, "$1");
              if (/^"(.*)"$/.test(t)) return t.replace(/^"(.*)"$/, "$1");
              if (/^(\d+)$/.test(t))
                return parseInt(t.replace(/^(\d+)$/, "$1"));
              if (/^(\d[\d\.]+)$/.test(t))
                return parseFloat(t.replace(/^(\d[\d\.]+)$/, "$1"));
              if (/^\((\S+)\.\.(\S+)\)$/.test(t)) {
                var e = t.match(/^\((\S+)\.\.(\S+)\)$/),
                  n = parseInt(e[1]),
                  i = parseInt(e[2]),
                  r = [];
                if (isNaN(n) || isNaN(i)) {
                  (n = e[1].charCodeAt(0)), (i = e[2].charCodeAt(0));
                  for (var o = i - n + 1, s = 0; s < o; s++)
                    r.push(String.fromCharCode(s + n));
                } else for (var o = i - n + 1, s = 0; s < o; s++) r.push(s + n);
                return r;
              }
              return this.variable(t);
          }
        },
        findVariable: function (t) {
          for (var e = 0; e < this.scopes.length; e++) {
            var n = this.scopes[e];
            if (n && "undefined" != typeof n[t]) {
              var i = n[t];
              return (
                "function" == typeof i && ((i = i.apply(this)), (n[t] = i)),
                i && this._isObject(i) && "toLiquid" in i && (i = i.toLiquid()),
                i &&
                  this._isObject(i) &&
                  "setContext" in i &&
                  i.setContext(self),
                i
              );
            }
          }
          return null;
        },
        variable: function (t) {
          if ("string" != typeof t) return null;
          var e = t.match(/\[[^\]]+\]|(?:[\w\-]\??)+/g),
            n = e.shift(),
            i = n.match(/^\[(.*)\]$/);
          i && (n = this.resolve(i[1]));
          var r = this.findVariable(n),
            o = this;
          return (
            r &&
              e.each(function (t) {
                var e = t.match(/^\[(.*)\]$/);
                if (e) {
                  var t = o.resolve(e[1]);
                  "function" == typeof r[t] && (r[t] = r[t].apply(this)),
                    (r = r[t]),
                    o._isObject(r) && "toLiquid" in r && (r = r.toLiquid());
                } else {
                  if ((o._isObject(r) || "hash" == typeof r) && t in r) {
                    var n = r[t];
                    "function" == typeof n && (n = r[t] = n.apply(o)),
                      (r =
                        o._isObject(n) && "toLiquid" in n ? n.toLiquid() : n);
                  } else if (/^\d+$/.test(t)) {
                    var i = parseInt(t);
                    "function" == typeof r[i] && (r[i] = r[i].apply(o)),
                      (r =
                        o._isObject(r) &&
                        o._isObject(r[i]) &&
                        "toLiquid" in r[i]
                          ? r[i].toLiquid()
                          : r[i]);
                  } else {
                    if (
                      !r ||
                      "function" != typeof r[t] ||
                      !["length", "size", "first", "last"].include(t)
                    )
                      return (r = null);
                    "toLiquid" in (r = r[t].apply(t)) && (r = r.toLiquid());
                  }
                  o._isObject(r) && "setContext" in r && r.setContext(o);
                }
              }),
            r
          );
        },
        addFilters: function (t) {
          (t = t.flatten()),
            t.each(function (t) {
              if (!this._isObject(t))
                throw "Expected object but got: " + typeof t;
              this.strainer.addMethods(t);
            });
        },
        handleError: function (t) {
          if ((this.errors.push(t), this.rethrowErrors)) throw t;
          return (
            "Liquid error: " +
            (t.message ? t.message : t.description ? t.description : t)
          );
        },
        _isObject: function (t) {
          return null != t && "object" == typeof t;
        },
      })),
      (Liquid.Template = Liquid.Class.extend({
        init: function () {
          (this.root = null),
            (this.registers = {}),
            (this.assigns = {}),
            (this.errors = []),
            (this.rethrowErrors = !1);
        },
        parse: function (t) {
          return (
            (this.root = new Liquid.Document(Liquid.Template.tokenize(t))), this
          );
        },
        render: function () {
          if (!this.root) return "";
          var t = {
              ctx: arguments[0],
              filters: arguments[1],
              registers: arguments[2],
            },
            e = null;
          t.ctx instanceof Liquid.Context
            ? ((e = t.ctx),
              (this.assigns = e.assigns),
              (this.registers = e.registers))
            : (t.ctx &&
                Liquid.extensions.object.update.call(this.assigns, t.ctx),
              t.registers &&
                Liquid.extensions.object.update.call(
                  this.registers,
                  t.registers
                ),
              (e = new Liquid.Context(
                this.assigns,
                this.registers,
                this.rethrowErrors
              ))),
            t.filters && e.addFilters(arg.filters);
          try {
            return this.root.render(e).join("");
          } finally {
            this.errors = e.errors;
          }
        },
        renderWithErrors: function () {
          var t = this.rethrowErrors;
          this.rethrowErrors = !0;
          var e = this.render.apply(this, arguments);
          return (this.rethrowErrors = t), e;
        },
      })),
      (Liquid.Template.tags = {}),
      (Liquid.Template.registerTag = function (t, e) {
        Liquid.Template.tags[t] = e;
      }),
      (Liquid.Template.registerFilter = function (t) {
        Liquid.Strainer.globalFilter(t);
      }),
      (Liquid.Template.tokenize = function (t) {
        var e = t.split(/(\{\%.*?\%\}|\{\{.*?\}\}?)/);
        return "" == e[0] && e.shift(), e;
      }),
      (Liquid.Template.parse = function (t) {
        return new Liquid.Template().parse(t);
      }),
      (Liquid.Variable = Liquid.Class.extend({
        init: function (t) {
          (this.markup = t), (this.name = null), (this.filters = []);
          var e = this,
            n = t.match(/\s*("[^"]+"|'[^']+'|[^\s,|]+)/);
          if (n) {
            this.name = n[1];
            var i = t.match(/\|\s*(.*)/);
            i &&
              i[1].split(/\|/).each(function (t) {
                var n = t.match(/\s*(\w+)/);
                if (n) {
                  var i = n[1],
                    r = [];
                  (t.match(/(?:[:|,]\s*)("[^"]+"|'[^']+'|[^\s,|]+)/g) || [])
                    .flatten()
                    .each(function (t) {
                      var e = t.match(/^[\s|:|,]*(.*?)[\s]*$/);
                      e && r.push(e[1]);
                    }),
                    e.filters.push([i, r]);
                }
              });
          }
        },
        render: function (t) {
          if (null == this.name) return "";
          var e = t.get(this.name);
          return (
            this.filters.each(function (n) {
              var i = n[0],
                r = (n[1] || []).map(function (e) {
                  return t.get(e);
                });
              r.unshift(e), (e = t.invoke(i, r));
            }),
            e
          );
        },
      })),
      (Liquid.Condition = Liquid.Class.extend({
        init: function (t, e, n) {
          (this.left = t),
            (this.operator = e),
            (this.right = n),
            (this.childRelation = null),
            (this.childCondition = null),
            (this.attachment = null);
        },
        evaluate: function (t) {
          t = t || new Liquid.Context();
          var e = this.interpretCondition(
            this.left,
            this.right,
            this.operator,
            t
          );
          switch (this.childRelation) {
            case "or":
              return e || this.childCondition.evaluate(t);
            case "and":
              return e && this.childCondition.evaluate(t);
            default:
              return e;
          }
        },
        or: function (t) {
          (this.childRelation = "or"), (this.childCondition = t);
        },
        and: function (t) {
          (this.childRelation = "and"), (this.childCondition = t);
        },
        attach: function (t) {
          return (this.attachment = t), this.attachment;
        },
        isElse: !1,
        interpretCondition: function (t, e, n, i) {
          if (!n) return i.get(t);
          if (
            ((t = i.get(t)),
            (e = i.get(e)),
            !(n = Liquid.Condition.operators[n]))
          )
            throw "Unknown operator " + n;
          return n(t, e);
        },
        toString: function () {
          return (
            "<Condition " +
            this.left +
            " " +
            this.operator +
            " " +
            this.right +
            ">"
          );
        },
      })),
      (Liquid.Condition.operators = {
        "==": function (t, e) {
          return t == e;
        },
        "=": function (t, e) {
          return t == e;
        },
        "!=": function (t, e) {
          return t != e;
        },
        "<>": function (t, e) {
          return t != e;
        },
        "<": function (t, e) {
          return t < e;
        },
        ">": function (t, e) {
          return t > e;
        },
        "<=": function (t, e) {
          return t <= e;
        },
        ">=": function (t, e) {
          return t >= e;
        },
        contains: function (t, e) {
          return "[object Array]" === Object.prototype.toString.call(t)
            ? t.indexOf(e) >= 0
            : t.match(e);
        },
        hasKey: function (t, e) {
          return Liquid.extensions.object.hasKey.call(t, e);
        },
        hasValue: function (t, e) {
          return Liquid.extensions.object.hasValue.call(t, e);
        },
      }),
      (Liquid.ElseCondition = Liquid.Condition.extend({
        isElse: !0,
        evaluate: function () {
          return !0;
        },
        toString: function () {
          return "<ElseCondition>";
        },
      })),
      (Liquid.Drop = Liquid.Class.extend({
        setContext: function (t) {
          this.context = t;
        },
        beforeMethod: function () {},
        invokeDrop: function (t) {
          var e = this.beforeMethod();
          return !e && t in this && (e = this[t].apply(this)), e;
        },
        hasKey: function () {
          return !0;
        },
      }));
    var hackObjectEach = function (t) {
      if ("function" != typeof t)
        throw "Object.each requires first argument to be a function";
      var e = 0,
        n = arguments[1];
      for (var i in this) {
        var r = this[i],
          o = [i, r];
        (o.key = i), (o.value = r), t.call(n, o, e, this), e++;
      }
      return null;
    };
    Liquid.Template.registerTag(
      "assign",
      Liquid.Tag.extend({
        tagSyntax: /((?:\(?[\w\-\.\[\]]\)?)+)\s*=\s*(.+)/,
        init: function (t, e, n) {
          var i = e.match(this.tagSyntax);
          if (!i)
            throw "Syntax error in 'assign' - Valid syntax: assign [var] = [source]";
          (this.to = i[1]), (this.from = i[2]), this._super(t, e, n);
        },
        render: function (t) {
          var e = new Liquid.Variable(this.from);
          return (t.scopes.last()[this.to.toString()] = e.render(t)), "";
        },
      })
    ),
      Liquid.Template.registerTag(
        "cache",
        Liquid.Block.extend({
          tagSyntax: /(\w+)/,
          init: function (t, e, n) {
            var i = e.match(this.tagSyntax);
            if (!i) throw "Syntax error in 'cache' - Valid syntax: cache [var]";
            (this.to = i[1]), this._super(t, e, n);
          },
          render: function (t) {
            var e = this._super(t);
            return (t.scopes.last()[this.to] = [e].flatten().join("")), "";
          },
        })
      ),
      Liquid.Template.registerTag(
        "capture",
        Liquid.Block.extend({
          tagSyntax: /(\w+)/,
          init: function (t, e, n) {
            var i = e.match(this.tagSyntax);
            if (!i)
              throw "Syntax error in 'capture' - Valid syntax: capture [var]";
            (this.to = i[1]), this._super(t, e, n);
          },
          render: function (t) {
            var e = this._super(t);
            return (
              (t.scopes.last()[this.to.toString()] = [e].flatten().join("")), ""
            );
          },
        })
      ),
      Liquid.Template.registerTag(
        "case",
        Liquid.Block.extend({
          tagSyntax: /("[^"]+"|'[^']+'|[^\s,|]+)/,
          tagWhenSyntax:
            /("[^"]+"|'[^']+'|[^\s,|]+)(?:(?:\s+or\s+|\s*\,\s*)("[^"]+"|'[^']+'|[^\s,|]+.*))?/,
          init: function (t, e, n) {
            (this.blocks = []), (this.nodelist = []);
            var i = e.match(this.tagSyntax);
            if (!i)
              throw "Syntax error in 'case' - Valid syntax: case [condition]";
            (this.left = i[1]), this._super(t, e, n);
          },
          unknownTag: function (t, e, n) {
            switch (t) {
              case "when":
                this.recordWhenCondition(e);
                break;
              case "else":
                this.recordElseCondition(e);
                break;
              default:
                this._super(t, e, n);
            }
          },
          render: function (t) {
            var e = this,
              n = [],
              i = !0;
            return (
              t.stack(function () {
                for (var r = 0; r < e.blocks.length; r++) {
                  var o = e.blocks[r];
                  if (o.isElse)
                    return (
                      1 == i &&
                        (n = [n, e.renderAll(o.attachment, t)].flatten()),
                      n
                    );
                  o.evaluate(t) &&
                    ((i = !1),
                    (n = [n, e.renderAll(o.attachment, t)].flatten()));
                }
              }),
              n
            );
          },
          recordWhenCondition: function (t) {
            for (; t; ) {
              var e = t.match(this.tagWhenSyntax);
              if (!e)
                throw "Syntax error in tag 'case' - Valid when condition: {% when [condition] [or condition2...] %} ";
              t = e[2];
              var n = new Liquid.Condition(this.left, "==", e[1]);
              this.blocks.push(n), (this.nodelist = n.attach([]));
            }
          },
          recordElseCondition: function (t) {
            if ("" != (t || "").strip())
              throw "Syntax error in tag 'case' - Valid else condition: {% else %} (no parameters) ";
            var e = new Liquid.ElseCondition();
            this.blocks.push(e), (this.nodelist = e.attach([]));
          },
        })
      ),
      Liquid.Template.registerTag(
        "comment",
        Liquid.Block.extend({
          render: function () {
            return "";
          },
        })
      ),
      Liquid.Template.registerTag(
        "cycle",
        Liquid.Tag.extend({
          tagSimpleSyntax: /"[^"]+"|'[^']+'|[^\s,|]+/,
          tagNamedSyntax: /("[^"]+"|'[^']+'|[^\s,|]+)\s*\:\s*(.*)/,
          init: function (t, e, n) {
            var i;
            if ((i = e.match(this.tagNamedSyntax)))
              (this.variables = this.variablesFromString(i[2])),
                (this.name = i[1]);
            else {
              if (!(i = e.match(this.tagSimpleSyntax)))
                throw "Syntax error in 'cycle' - Valid syntax: cycle [name :] var [, var2, var3 ...]";
              (this.variables = this.variablesFromString(e)),
                (this.name = "'" + this.variables.toString() + "'");
            }
            this._super(t, e, n);
          },
          render: function (t) {
            var e = this,
              n = t.get(e.name),
              i = "";
            return (
              t.registers.cycle || (t.registers.cycle = {}),
              t.registers.cycle[n] || (t.registers.cycle[n] = 0),
              t.stack(function () {
                var r = t.registers.cycle[n],
                  o = t.get(e.variables[r]);
                (r += 1),
                  r == e.variables.length && (r = 0),
                  (t.registers.cycle[n] = r),
                  (i = o);
              }),
              i
            );
          },
          variablesFromString: function (t) {
            return t.split(",").map(function (t) {
              var e = t.match(/\s*("[^"]+"|'[^']+'|[^\s,|]+)\s*/);
              return e[1] ? e[1] : null;
            });
          },
        })
      ),
      Liquid.Template.registerTag(
        "for",
        Liquid.Block.extend({
          tagSyntax: /(\w+)\s+in\s+((?:\(?[\w\-\.\[\]]\)?)+)/,
          init: function (t, e, n) {
            var i = e.match(this.tagSyntax);
            if (!i)
              throw "Syntax error in 'for loop' - Valid syntax: for [item] in [collection]";
            (this.variableName = i[1]),
              (this.collectionName = i[2]),
              (this.name = this.variableName + "-" + this.collectionName),
              (this.attributes = {});
            var r =
              (e.replace(this.tagSyntax, ""),
              e.match(/(\w*?)\s*\:\s*("[^"]+"|'[^']+'|[^\s,|]+)/g));
            r &&
              r.each(function (t) {
                (t = t.split(":")),
                  (this.attributes[t[0].strip()] = t[1].strip());
              }, this),
              this._super(t, e, n);
          },
          render: function (t) {
            var e = this,
              n = [],
              i = t.get(this.collectionName) || [],
              r = [0, i.length];
            if (
              (t.registers["for"] || (t.registers["for"] = {}),
              this.attributes.limit || this.attributes.offset)
            ) {
              var o = 0,
                s = 0,
                a = 0,
                l = null;
              (o =
                "continue" == this.attributes.offset
                  ? t.registers["for"][this.name]
                  : t.get(this.attributes.offset) || 0),
                (s = t.get(this.attributes.limit)),
                (a = s ? o + s + 1 : i.length),
                (r = [o, a - 1]),
                (t.registers["for"][this.name] = a);
            }
            return (l = i.slice(r[0], r[1])) && 0 != l.length
              ? (t.stack(function () {
                  var i = l.length;
                  l.each(function (r, o) {
                    t.set(e.variableName, r),
                      t.set("forloop", {
                        name: e.name,
                        length: i,
                        index: o + 1,
                        index0: o,
                        rindex: i - o,
                        rindex0: i - o - 1,
                        first: 0 == o,
                        last: o == i - 1,
                      }),
                      n.push((e.renderAll(e.nodelist, t) || []).join(""));
                  });
                }),
                [n].flatten().join(""))
              : "";
          },
        })
      ),
      Liquid.Template.registerTag(
        "if",
        Liquid.Block.extend({
          tagSyntax:
            /("[^"]+"|'[^']+'|[^\s,|]+)\s*([=!<>a-z_]+)?\s*("[^"]+"|'[^']+'|[^\s,|]+)?/,
          init: function (t, e, n) {
            (this.nodelist = []),
              (this.blocks = []),
              this.pushBlock("if", e),
              this._super(t, e, n);
          },
          unknownTag: function (t, e, n) {
            ["elsif", "else"].include(t)
              ? this.pushBlock(t, e)
              : this._super(t, e, n);
          },
          render: function (t) {
            var e = this,
              n = "";
            return (
              t.stack(function () {
                for (var i = 0; i < e.blocks.length; i++) {
                  var r = e.blocks[i];
                  if (r.evaluate(t))
                    return void (n = e.renderAll(r.attachment, t));
                }
              }),
              [n].flatten().join("")
            );
          },
          pushBlock: function (t, e) {
            var n;
            if ("else" == t) n = new Liquid.ElseCondition();
            else {
              var i = e.split(/\b(and|or)\b/).reverse(),
                r = i.shift().match(this.tagSyntax);
              if (!r)
                throw (
                  "Syntax Error in tag '" +
                  t +
                  "' - Valid syntax: " +
                  t +
                  " [expression]"
                );
              for (
                var o = new Liquid.Condition(r[1], r[2], r[3]);
                i.length > 0;

              ) {
                var s = i.shift(),
                  r = i.shift().match(this.tagSyntax);
                if (!r)
                  throw (
                    "Syntax Error in tag '" +
                    t +
                    "' - Valid syntax: " +
                    t +
                    " [expression]"
                  );
                var a = new Liquid.Condition(r[1], r[2], r[3]);
                a[s](o), (o = a);
              }
              n = o;
            }
            n.attach([]), this.blocks.push(n), (this.nodelist = n.attachment);
          },
        })
      ),
      Liquid.Template.registerTag(
        "ifchanged",
        Liquid.Block.extend({
          render: function (t) {
            var e = this,
              n = "";
            return (
              t.stack(function () {
                var i = e.renderAll(e.nodelist, t).join("");
                i != t.registers.ifchanged &&
                  ((n = i), (t.registers.ifchanged = n));
              }),
              n
            );
          },
        })
      ),
      Liquid.Template.registerTag(
        "include",
        Liquid.Tag.extend({
          tagSyntax:
            /((?:"[^"]+"|'[^']+'|[^\s,|]+)+)(\s+(?:with|for)\s+((?:"[^"]+"|'[^']+'|[^\s,|]+)+))?/,
          init: function (t, e, n) {
            var i = (e || "").match(this.tagSyntax);
            if (!i)
              throw "Error in tag 'include' - Valid syntax: include '[template]' (with|for) [object|collection]";
            (this.templateName = i[1]),
              (this.templateNameVar = this.templateName.substring(
                1,
                this.templateName.length - 1
              )),
              (this.variableName = i[3]),
              (this.attributes = {});
            var r = e.match(/(\w*?)\s*\:\s*("[^"]+"|'[^']+'|[^\s,|]+)/g);
            r &&
              r.each(function (t) {
                (t = t.split(":")),
                  (this.attributes[t[0].strip()] = t[1].strip());
              }, this),
              this._super(t, e, n);
          },
          render: function (t) {
            var e = this,
              n = Liquid.readTemplateFile(t.get(this.templateName)),
              i = Liquid.parse(n),
              r = t.get(this.variableName || this.templateNameVar),
              o = "";
            return (
              t.stack(function () {
                (e.attributes.each = hackObjectEach),
                  e.attributes.each(function (e) {
                    t.set(e.key, t.get(e.value));
                  }),
                  r instanceof Array
                    ? (o = r.map(function (n) {
                        return t.set(e.templateNameVar, n), i.render(t);
                      }))
                    : (t.set(e.templateNameVar, r), (o = i.render(t)));
              }),
              (o = [o].flatten().join(""))
            );
          },
        })
      ),
      Liquid.Template.registerTag(
        "unless",
        Liquid.Template.tags["if"].extend({
          render: function (t) {
            var e = this,
              n = "";
            return (
              t.stack(function () {
                var i = e.blocks[0];
                if (!i.evaluate(t))
                  return void (n = e.renderAll(i.attachment, t));
                for (var r = 1; r < e.blocks.length; r++) {
                  var i = e.blocks[r];
                  if (i.evaluate(t))
                    return void (n = e.renderAll(i.attachment, t));
                }
              }),
              [n].flatten().join("")
            );
          },
        })
      ),
      Liquid.Template.registerTag(
        "raw",
        Liquid.Block.extend({
          parse: function (t) {
            this.nodelist || (this.nodelist = []), this.nodelist.clear();
            var e = t.shift();
            for (t.push(""); t.length; ) {
              if (/^\{\%/.test(e)) {
                var n = e.match(/^\{\%\s*(\w+)\s*(.*)?\%\}$/);
                if (n && this.blockDelimiter == n[1]) return void this.endTag();
              }
              this.nodelist.push(e || ""), (e = t.shift());
            }
            this.assertMissingDelimitation();
          },
          render: function () {
            return this.nodelist.join("");
          },
        })
      ),
      Liquid.Template.registerFilter({
        _HTML_ESCAPE_MAP: {
          "&": "&amp;",
          ">": "&gt;",
          "<": "&lt;",
          '"': "&quot;",
          "'": "&#39;",
        },
        size: function (t) {
          return t.length ? t.length : 0;
        },
        downcase: function (t) {
          return t.toString().toLowerCase();
        },
        upcase: function (t) {
          return t.toString().toUpperCase();
        },
        capitalize: function (t) {
          return t.toString().capitalize();
        },
        escape: function (t) {
          var e = this;
          return t.replace(/[&<>"']/g, function (t) {
            return e._HTML_ESCAPE_MAP[t];
          });
        },
        h: function (t) {
          var e = this;
          return t.replace(/[&<>"']/g, function (t) {
            return e._HTML_ESCAPE_MAP[t];
          });
        },
        truncate: function (t, e, n) {
          return t && "" != t
            ? ((e = e || 50),
              (n = n || "..."),
              t.slice(0, e),
              t.length > e ? t.slice(0, e) + n : t)
            : "";
        },
        truncatewords: function (t, e, n) {
          if (!t || "" == t) return "";
          (e = parseInt(e || 15)), (n = n || "...");
          var i = t.toString().split(" "),
            r = Math.max(e, 0);
          return i.length > r ? i.slice(0, r).join(" ") + n : t;
        },
        truncate_words: function (t, e, n) {
          if (!t || "" == t) return "";
          (e = parseInt(e || 15)), (n = n || "...");
          var i = t.toString().split(" "),
            r = Math.max(e, 0);
          return i.length > r ? i.slice(0, r).join(" ") + n : t;
        },
        strip_html: function (t) {
          return t.toString().replace(/<.*?>/g, "");
        },
        strip_newlines: function (t) {
          return t.toString().replace(/\n/g, "");
        },
        join: function (t, e) {
          return (e = e || " "), t.join(e);
        },
        split: function (t, e) {
          return (e = e || " "), t.split(e);
        },
        sort: function (t) {
          return t.sort();
        },
        reverse: function (t) {
          return t.reverse();
        },
        replace: function (t, e, n) {
          return (n = n || ""), t.toString().replace(new RegExp(e, "g"), n);
        },
        replace_first: function (t, e, n) {
          return (n = n || ""), t.toString().replace(new RegExp(e, ""), n);
        },
        newline_to_br: function (t) {
          return t.toString().replace(/\n/g, "<br/>\n");
        },
        date: function (t, e) {
          var n;
          return (
            t instanceof Date && (n = t),
            n instanceof Date || "now" != t || (n = new Date()),
            n instanceof Date ||
              "number" != typeof t ||
              (n = new Date(1e3 * t)),
            n instanceof Date ||
              "string" != typeof t ||
              (n = new Date(Date.parse(t))),
            n instanceof Date ? n.strftime(e) : t
          );
        },
        first: function (t) {
          return t[0];
        },
        last: function (t) {
          return (t = t), t[t.length - 1];
        },
        minus: function (t, e) {
          return (Number(t) || 0) - (Number(e) || 0);
        },
        plus: function (t, e) {
          return (Number(t) || 0) + (Number(e) || 0);
        },
        times: function (t, e) {
          return (Number(t) || 0) * (Number(e) || 0);
        },
        divided_by: function (t, e) {
          return (Number(t) || 0) / (Number(e) || 0);
        },
        modulo: function (t, e) {
          return (Number(t) || 0) % (Number(e) || 0);
        },
        map: function (t, e) {
          t = t || [];
          for (var n = [], i = 0; i < t.length; i++) n.push(t[i][e]);
          return n;
        },
        escape_once: function (t) {
          var e = this;
          return t.replace(/["><']|&(?!([a-zA-Z]+|(#\d+));)/g, function (t) {
            return e._HTML_ESCAPE_MAP[t];
          });
        },
        remove: function (t, e) {
          return t.toString().replace(new RegExp(e, "g"), "");
        },
        remove_first: function (t, e) {
          return t.toString().replace(e, "");
        },
        prepend: function (t, e) {
          return "" + (e || "").toString() + (t || "").toString();
        },
        append: function (t, e) {
          return "" + (t || "").toString() + (e || "").toString();
        },
      }),
      new Date().strftime ||
        (function () {
          (Date.ext = {}),
            (Date.ext.util = {}),
            (Date.ext.util.xPad = function (t, e, n) {
              for (
                void 0 === n && (n = 10);
                parseInt(t, 10) < n && n > 1;
                n /= 10
              )
                t = e.toString() + t;
              return t.toString();
            }),
            (Date.prototype.locale = "en-GB"),
            document.getElementsByTagName("html") &&
              document.getElementsByTagName("html")[0].lang &&
              (Date.prototype.locale =
                document.getElementsByTagName("html")[0].lang),
            (Date.ext.locales = {}),
            (Date.ext.locales.en = {
              a: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              A: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              b: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              B: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ],
              c: "%a %d %b %Y %T %Z",
              p: ["AM", "PM"],
              P: ["am", "pm"],
              x: "%d/%m/%y",
              X: "%T",
            }),
            "undefined" != typeof JSON
              ? (Date.ext.locales["en-US"] = JSON.parse(
                  JSON.stringify(Date.ext.locales.en)
                ))
              : (Date.ext.locales["en-US"] = Date.ext.locales.en),
            (Date.ext.locales["en-US"].c = "%a %d %b %Y %r %Z"),
            (Date.ext.locales["en-US"].x = "%D"),
            (Date.ext.locales["en-US"].X = "%r"),
            (Date.ext.locales["en-GB"] = Date.ext.locales.en),
            (Date.ext.locales["en-AU"] = Date.ext.locales["en-GB"]),
            (Date.ext.formats = {
              a: function (t) {
                return Date.ext.locales[t.locale].a[t.getDay()];
              },
              A: function (t) {
                return Date.ext.locales[t.locale].A[t.getDay()];
              },
              b: function (t) {
                return Date.ext.locales[t.locale].b[t.getMonth()];
              },
              B: function (t) {
                return Date.ext.locales[t.locale].B[t.getMonth()];
              },
              c: "toLocaleString",
              C: function (t) {
                return Date.ext.util.xPad(
                  parseInt(t.getFullYear() / 100, 10),
                  0
                );
              },
              d: ["getDate", "0"],
              e: ["getDate", " "],
              g: function (t) {
                return Date.ext.util.xPad(
                  parseInt(Date.ext.util.G(t) / 100, 10),
                  0
                );
              },
              G: function (t) {
                var e = t.getFullYear(),
                  n = parseInt(Date.ext.formats.V(t), 10),
                  i = parseInt(Date.ext.formats.W(t), 10);
                return i > n ? e++ : 0 === i && n >= 52 && e--, e;
              },
              H: ["getHours", "0"],
              I: function (t) {
                var e = t.getHours() % 12;
                return Date.ext.util.xPad(0 === e ? 12 : e, 0);
              },
              j: function (t) {
                var e = t - new Date(t.getFullYear() + "/1/1 GMT");
                e += 6e4 * t.getTimezoneOffset();
                var n = parseInt(e / 6e4 / 60 / 24, 10) + 1;
                return Date.ext.util.xPad(n, 0, 100);
              },
              m: function (t) {
                return Date.ext.util.xPad(t.getMonth() + 1, 0);
              },
              M: ["getMinutes", "0"],
              p: function (t) {
                return Date.ext.locales[t.locale].p[t.getHours() >= 12 ? 1 : 0];
              },
              P: function (t) {
                return Date.ext.locales[t.locale].P[t.getHours() >= 12 ? 1 : 0];
              },
              S: ["getSeconds", "0"],
              u: function (t) {
                var e = t.getDay();
                return 0 === e ? 7 : e;
              },
              U: function (t) {
                var e = parseInt(Date.ext.formats.j(t), 10),
                  n = 6 - t.getDay(),
                  i = parseInt((e + n) / 7, 10);
                return Date.ext.util.xPad(i, 0);
              },
              V: function (t) {
                var e = parseInt(Date.ext.formats.W(t), 10),
                  n = new Date(t.getFullYear() + "/1/1").getDay(),
                  i = e + (n > 4 || n <= 1 ? 0 : 1);
                return (
                  53 == i && new Date(t.getFullYear() + "/12/31").getDay() < 4
                    ? (i = 1)
                    : 0 === i &&
                      (i = Date.ext.formats.V(
                        new Date(t.getFullYear() - 1 + "/12/31")
                      )),
                  Date.ext.util.xPad(i, 0)
                );
              },
              w: "getDay",
              W: function (t) {
                var e = parseInt(Date.ext.formats.j(t), 10),
                  n = 7 - Date.ext.formats.u(t),
                  i = parseInt((e + n) / 7, 10);
                return Date.ext.util.xPad(i, 0, 10);
              },
              y: function (t) {
                return Date.ext.util.xPad(t.getFullYear() % 100, 0);
              },
              Y: "getFullYear",
              z: function (t) {
                var e = t.getTimezoneOffset(),
                  n = Date.ext.util.xPad(parseInt(Math.abs(e / 60), 10), 0),
                  i = Date.ext.util.xPad(e % 60, 0);
                return (e > 0 ? "-" : "+") + n + i;
              },
              Z: function (t) {
                return t.toString().replace(/^.*\(([^)]+)\)$/, "$1");
              },
              "%": function () {
                return "%";
              },
            }),
            (Date.ext.aggregates = {
              c: "locale",
              D: "%m/%d/%y",
              h: "%b",
              n: "\n",
              r: "%I:%M:%S %p",
              R: "%H:%M",
              t: "\t",
              T: "%H:%M:%S",
              x: "locale",
              X: "locale",
            }),
            (Date.ext.aggregates.z = Date.ext.formats.z(new Date())),
            (Date.ext.aggregates.Z = Date.ext.formats.Z(new Date())),
            (Date.ext.unsupported = {}),
            (Date.prototype.strftime = function (t) {
              this.locale in Date.ext.locales ||
                (this.locale.replace(/-[a-zA-Z]+$/, "") in Date.ext.locales
                  ? (this.locale = this.locale.replace(/-[a-zA-Z]+$/, ""))
                  : (this.locale = "en-GB"));
              for (var e = this; t.match(/%[cDhnrRtTxXzZ]/); )
                t = t.replace(/%([cDhnrRtTxXzZ])/g, function (t, n) {
                  var i = Date.ext.aggregates[n];
                  return "locale" == i ? Date.ext.locales[e.locale][n] : i;
                });
              var n = t.replace(
                /%([aAbBCdegGHIjmMpPSuUVwWyY%])/g,
                function (t, n) {
                  var i = Date.ext.formats[n];
                  return "string" == typeof i
                    ? e[i]()
                    : "function" == typeof i
                    ? i.call(e, e)
                    : "object" == typeof i && "string" == typeof i[0]
                    ? Date.ext.util.xPad(e[i[0]](), i[1])
                    : n;
                }
              );
              return (e = null), n;
            });
        })();
    /*!
     * Cross-Browser Split 1.1.1
     * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
     * Available under the MIT License
     * ECMAScript compliant, uniform cross-browser split method
     */
    var split;
    (split =
      split ||
      (function (t) {
        var e,
          n = String.prototype.split,
          i = /()??/.exec("")[1] === t;
        return (
          (e = function (e, r, o) {
            if ("[object RegExp]" !== Object.prototype.toString.call(r))
              return n.call(e, r, o);
            var s,
              a,
              l,
              u,
              c = [],
              h =
                (r.ignoreCase ? "i" : "") +
                (r.multiline ? "m" : "") +
                (r.extended ? "x" : "") +
                (r.sticky ? "y" : ""),
              p = 0,
              r = new RegExp(r.source, h + "g");
            for (
              e += "",
                i || (s = new RegExp("^" + r.source + "$(?!\\s)", h)),
                o = o === t ? -1 >>> 0 : o >>> 0;
              (a = r.exec(e)) &&
              !(
                (l = a.index + a[0].length) > p &&
                (c.push(e.slice(p, a.index)),
                !i &&
                  a.length > 1 &&
                  a[0].replace(s, function () {
                    for (var e = 1; e < arguments.length - 2; e++)
                      arguments[e] === t && (a[e] = t);
                  }),
                a.length > 1 &&
                  a.index < e.length &&
                  Array.prototype.push.apply(c, a.slice(1)),
                (u = a[0].length),
                (p = l),
                c.length >= o)
              );

            )
              r.lastIndex === a.index && r.lastIndex++;
            return (
              p === e.length
                ? (!u && r.test("")) || c.push("")
                : c.push(e.slice(p)),
              c.length > o ? c.slice(0, o) : c
            );
          }),
          (String.prototype.split = function (t, n) {
            return e(this, t, n);
          }),
          e
        );
      })()),
      "undefined" != typeof exports &&
        ("undefined" != typeof module &&
          module.exports &&
          (exports = module.exports = Liquid),
        (exports.Liquid = Liquid)),
      Liquid.registerFilters({
        sectionify: function (t, e, n) {
          function i(t) {
            return t.find("em").first().text().length;
          }
          var r = null;
          if (e) {
            var o = jQuery("<div>" + e + "</div>");
            if (n) {
              var s = jQuery("<div>" + n + "</div>");
              i(o) > i(s) && (r = o.text());
            } else r = o.text();
          }
          return r && t.indexOf("#") < 0 && (t = t + "#sts=" + r), t;
        },
        imgix: function (t, e, n) {
          if ((Array.isArray(t) && (t = t[0]), !t)) return t;
          (t = String(t).replace(/&amp;/g, "&")), (t = encodeURIComponent(t));
          var i = { w: e, h: n, dpr: window.devicePixelRatio };
          return (
            "//swiftype2.imgix.net/" +
            t +
            "?" +
            jQuery.param(jQuery.extend({}, { fit: "clip" }, i))
          );
        },
        dateInLocale: function (t, e) {
          var n = new Date(Date.parse(t)),
            i = new IntlMessageFormat(
              "{date, date, " + e + "}",
              _st_tmp_global_locale
            ),
            r = { date: n };
          return i.format(r);
        },
        numberInLocale: function (t) {
          var e = { number: t };
          return new IntlMessageFormat(
            "{number, number}",
            _st_tmp_global_locale
          ).format(e);
        },
        currencyInLocale: function (t, e) {
          var n = { number: {} };
          n.number[e] = { style: "currency", currency: e };
          var i = { number: t };
          return new IntlMessageFormat(
            "{number, number, " + e + "}",
            _st_tmp_global_locale,
            n
          ).format(i);
        },
        escapeUrl: function (t) {
          if ((Array.isArray(t) && (t = t[0]), t))
            return String(t).replace(/&amp;/g, "&");
        },
      }),
      Liquid.Template.registerTag(
        "translate",
        Liquid.Tag.extend({
          tagSyntax: /(\w+)/,
          init: function (t, e, n) {
            var i = e.match(this.tagSyntax);
            if (!i)
              throw "Syntax error in 'translate' - Valid syntax: translate [message]";
            (this.message = i[1]), this._super(t, e, n);
          },
          _extractNameAndValueFrom: function (t, e) {
            var n;
            try {
              n = e.get(t);
            } catch (t) {
              return null;
            }
            return void 0 !== n && null !== n
              ? [t.replace(/[^A-Z0-9_]/gi, "_"), n]
              : [t, null];
          },
          _effectiveMessageAndValuesFrom: function (t, e) {
            for (var n = "", i = {}, r = t, o = /^([^{]+){([^},\s]+)/im; ; ) {
              var s = r.match(o);
              if (!s) {
                n += r;
                break;
              }
              var a = s[1],
                l = s[2],
                u = r.substring(s[0].length);
              n += a;
              var c = this._extractNameAndValueFrom(l, e);
              c ? ((n += "{" + c[0]), (i[c[0]] = c[1])) : (n += "{" + l),
                (r = u);
            }
            return [n, i];
          },
          _localeStringsToLookFor: function (t) {
            for (var e = t.split("-"), n = [], i = e.length; i > 0; --i) {
              var r = e.slice(0, i);
              n.push(r.join("-"));
            }
            return n;
          },
          render: function (t) {
            for (
              var e = t.findVariable("i18n"),
                n = e.locale,
                i = e.localizationMessages,
                r = null,
                o = this._localeStringsToLookFor(n),
                s = 0;
              s < o.length;
              ++s
            ) {
              var a = i[o[s]];
              if (a && (r = a[this.message])) break;
            }
            if (!r)
              return (
                "(No translations for '" +
                this.message +
                "' in any of these locales: " +
                o.join(", ") +
                ")"
              );
            var l = this._effectiveMessageAndValuesFrom(r, t);
            return new IntlMessageFormat(l[0], n).format(l[1]);
          },
        })
      ),
      (function (t) {
        "use strict";
        var e = (t._InternalSwiftype = t._InternalSwiftype || {});
        // Copyright (c) 2010 Rasmus Andersson http://hunch.se/
        // The above copyright notice and this permission notice shall be included in all copies or substantial portions
        // THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
        (e.LRUCache = function (t) {
          (this.size = 0), (this.limit = t), (this._keymap = {});
        }),
          (e.LRUCache.prototype.put = function (t, e) {
            var n = { key: t, value: e };
            if (
              ((this._keymap[t] = n),
              this.tail
                ? ((this.tail.newer = n), (n.older = this.tail))
                : (this.head = n),
              (this.tail = n),
              this.size === this.limit)
            )
              return this.shift();
            this.size++;
          }),
          (e.LRUCache.prototype.shift = function () {
            var t = this.head;
            return (
              t &&
                (this.head.newer
                  ? ((this.head = this.head.newer),
                    (this.head.older = undefined))
                  : (this.head = undefined),
                (t.newer = t.older = undefined),
                delete this._keymap[t.key]),
              t
            );
          }),
          (e.LRUCache.prototype.get = function (t, e) {
            var n = this._keymap[t];
            if (n !== undefined)
              return n === this.tail
                ? n.value
                : (n.newer &&
                    (n === this.head && (this.head = n.newer),
                    (n.newer.older = n.older)),
                  n.older && (n.older.newer = n.newer),
                  (n.newer = undefined),
                  (n.older = this.tail),
                  this.tail && (this.tail.newer = n),
                  (this.tail = n),
                  e ? n : n.value);
          }),
          (e.LRUCache.prototype.remove = function (t) {
            var e = this._keymap[t];
            if (e)
              return (
                delete this._keymap[e.key],
                e.newer && e.older
                  ? ((e.older.newer = e.newer), (e.newer.older = e.older))
                  : e.newer
                  ? ((e.newer.older = undefined), (this.head = e.newer))
                  : e.older
                  ? ((e.older.newer = undefined), (this.tail = e.older))
                  : (this.head = this.tail = undefined),
                this.size--,
                e.value
              );
          }),
          (e.LRUCache.prototype.clear = function () {
            (this.head = this.tail = undefined),
              (this.size = 0),
              (this._keymap = {});
          }),
          "function" == typeof Object.keys
            ? (e.LRUCache.prototype.keys = function () {
                return Object.keys(this._keymap);
              })
            : (e.LRUCache.prototype.keys = function () {
                var t = [];
                for (var e in this._keymap) t.push(e);
                return t;
              });
      })(window)
      /*!
       * jQuery BBQ: Back Button & Query Library - v1.3pre - 8/26/2010
       * http://benalman.com/projects/jquery-bbq-plugin/
       *
       * Copyright (c) 2010 "Cowboy" Ben Alman
       * Dual licensed under the MIT and GPL licenses.
       * http://benalman.com/about/license/
       */,
      (function (t) {
        function e(t) {
          return "string" == typeof t;
        }
        function n(t) {
          var e = S.call(arguments, 1);
          return function () {
            return t.apply(this, e.concat(S.call(arguments)));
          };
        }
        function i(t) {
          return t.replace(g, "$2");
        }
        function r(t) {
          return t.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/, "$1");
        }
        function o(n, i, r, o, s) {
          var a, c, p, f, d;
          return (
            o !== l
              ? ((p = r.match(n ? g : /^([^#?]*)\??([^#]*)(#?.*)/)),
                (d = p[3] || ""),
                2 === s && e(o)
                  ? (c = o.replace(n ? m : k, ""))
                  : ((f = h(p[2])),
                    (o = e(o) ? h[n ? F : R](o) : o),
                    (c =
                      2 === s
                        ? o
                        : 1 === s
                        ? t.extend({}, o, f)
                        : t.extend({}, f, o)),
                    (c = u(c)),
                    n && (c = c.replace(_, b))),
                (a = p[1] + (n ? w : c || !p[1] ? "?" : "") + c + d))
              : (a = i(r !== l ? r : location.href)),
            a
          );
        }
        function s(t, n, i) {
          return (
            n === l || "boolean" == typeof n
              ? ((i = n), (n = x[t ? F : R]()))
              : (n = e(n) ? n.replace(t ? m : k, "") : n),
            h(n, i)
          );
        }
        function a(n, i, r, o) {
          return (
            e(r) || "object" == typeof r || ((o = r), (r = i), (i = l)),
            this.each(function () {
              var e = t(this),
                s = i || y()[(this.nodeName || "").toLowerCase()] || "",
                a = (s && e.attr(s)) || "";
              e.attr(s, x[n](a, r, o));
            })
          );
        }
        var l,
          u,
          c,
          h,
          p,
          f,
          d,
          y,
          m,
          g,
          _,
          v,
          w,
          S = Array.prototype.slice,
          b = decodeURIComponent,
          x = t.param,
          T = (t.bbq = t.bbq || {}),
          D = t.event.special,
          C = "hashchange",
          R = "querystring",
          F = "fragment",
          I = "elemUrlAttr",
          M = "href",
          O = "src",
          k = /^.*\?|#.*$/g,
          A = {};
        (x[R] = n(o, 0, r)),
          (x[F] = c = n(o, 1, i)),
          (x.sorted = u =
            function (e, n) {
              var i = [],
                r = Object.create(null);
              return (
                t.each(x(e, n).split("&"), function (t, e) {
                  var n = e.replace(/(?:%5B|=).*$/, ""),
                    o = r[n];
                  o || ((o = r[n] = []), i.push(n)), o.push(e);
                }),
                t
                  .map(i.sort(), function (t) {
                    return r[t];
                  })
                  .join("&")
              );
            }),
          (c.noEscape = function (e) {
            e = e || "";
            var n = t.map(e.split(""), encodeURIComponent);
            _ = new RegExp(n.join("|"), "g");
          }),
          c.noEscape(",/"),
          (c.ajaxCrawlable = function (t) {
            return (
              t !== l &&
                (t
                  ? ((m = /^.*(?:#!|#)/),
                    (g = /^([^#]*)(?:#!|#)?(.*)$/),
                    (w = "#!"))
                  : ((m = /^.*#/), (g = /^([^#]*)#?(.*)$/), (w = "#")),
                (v = !!t)),
              v
            );
          }),
          c.ajaxCrawlable(0),
          (t.deparam = h =
            function (e, n) {
              var i = Object.create(null),
                r = { true: !0, false: !1, null: null };
              return (
                t.each(e.replace(/\+/g, " ").split("&"), function (e, o) {
                  var s,
                    a = o.split("="),
                    u = b(a[0]),
                    c = i,
                    h = 0,
                    p = u.split("]["),
                    f = p.length - 1;
                  if (
                    (/\[/.test(p[0]) && /\]$/.test(p[f])
                      ? ((p[f] = p[f].replace(/\]$/, "")),
                        (p = p.shift().split("[").concat(p)),
                        (f = p.length - 1))
                      : (f = 0),
                    2 === a.length)
                  )
                    if (
                      ((s = b(a[1])),
                      n &&
                        (s =
                          s && !isNaN(s)
                            ? +s
                            : "undefined" === s
                            ? l
                            : r[s] !== l
                            ? r[s]
                            : s),
                      f)
                    )
                      for (
                        var d = function (t) {
                          return Object.prototype.toString.call(t);
                        };
                        h <= f;
                        h++
                      ) {
                        if (
                          ((u = "" === p[h] ? c.length : p[h]),
                          c[u] && d(c[u]) !== d(c))
                        )
                          return;
                        c = c[u] =
                          h < f
                            ? c[u] ||
                              (p[h + 1] && isNaN(p[h + 1])
                                ? Object.create(null)
                                : [])
                            : s;
                      }
                    else
                      t.isArray(i[u])
                        ? i[u].push(s)
                        : i[u] !== l
                        ? (i[u] = [i[u], s])
                        : (i[u] = s);
                  else u && (i[u] = n ? l : "");
                }),
                i
              );
            }),
          (h[R] = n(s, 0)),
          (h[F] = p = n(s, 1)),
          t[I] ||
            (t[I] = function (e) {
              return t.extend(A, e);
            })({
              a: M,
              base: M,
              iframe: O,
              img: O,
              input: O,
              form: "action",
              link: M,
              script: O,
            }),
          (y = t[I]),
          (t.fn[R] = n(a, R)),
          (t.fn[F] = n(a, F)),
          (T.pushState = f =
            function (t, n) {
              e(t) && /^#/.test(t) && n === l && (n = 2);
              var i = t !== l,
                r = c(location.href, i ? t : {}, i ? n : 2);
              location.href = r;
            }),
          (T.getState = d =
            function (t, e) {
              return t === l || "boolean" == typeof t ? p(t) : p(e)[t];
            }),
          (T.removeState = function (e) {
            var n = {};
            e !== l &&
              ((n = d()),
              t.each(t.isArray(e) ? e : arguments, function (t, e) {
                delete n[e];
              })),
              f(n, 2);
          }),
          (D[C] = t.extend(D[C], {
            add: function (e) {
              function n(t) {
                var e = (t[F] = c());
                (t.getState = function (t, n) {
                  return t === l || "boolean" == typeof t
                    ? h(e, t)
                    : h(e, n)[t];
                }),
                  i.apply(this, arguments);
              }
              var i;
              if (t.isFunction(e)) return (i = e), n;
              (i = e.handler), (e.handler = n);
            },
          }));
      })(jQuery)
      /*!
       * jQuery hashchange event - v1.3 - 7/21/2010
       * http://benalman.com/projects/jquery-hashchange-plugin/
       *
       * Copyright (c) 2010 "Cowboy" Ben Alman
       * Dual licensed under the MIT and GPL licenses.
       * http://benalman.com/about/license/
       */,
      (function (t, e, n) {
        function i(t) {
          return (
            (t = t || location.href), "#" + t.replace(/^[^#]*#?(.*)$/, "$1")
          );
        }
        var r,
          o = "hashchange",
          s = document,
          a = t.event.special,
          l = s.documentMode,
          u = "on" + o in e && (l === n || l > 7);
        (t.fn[o] = function (t) {
          return t ? this.bind(o, t) : this.trigger(o);
        }),
          (t.fn[o].delay = 50),
          (a[o] = t.extend(a[o], {
            setup: function () {
              if (u) return !1;
              t(r.start);
            },
            teardown: function () {
              if (u) return !1;
              t(r.stop);
            },
          })),
          (r = (function () {
            function r() {
              var n = i(),
                a = h(l);
              n !== l
                ? (c((l = n), a), t(e).trigger(o))
                : a !== l &&
                  (location.href = location.href.replace(/#.*/, "") + a),
                (s = setTimeout(r, t.fn[o].delay));
            }
            var s,
              a = {},
              l = i(),
              u = function (t) {
                return t;
              },
              c = u,
              h = u;
            return (
              (a.start = function () {
                s || r();
              }),
              (a.stop = function () {
                s && clearTimeout(s), (s = n);
              }),
              a
            );
          })());
      })(jQuery, this),
      (function (t, e) {
        "use strict";
        var n = (t._InternalSwiftype = t._InternalSwiftype || {});
        (n.Utils = n.Utils || {}),
          (n.Utils.compareObjects = function (t, e) {
            var i = !1,
              r = !1;
            if (
              ((null !== t && void 0 !== t) || (i = !0),
              (null !== e && void 0 !== e) || (r = !0),
              i !== r)
            )
              return !1;
            if (i) return !0;
            var o = [],
              s = [];
            for (var a in t)
              Object.prototype.hasOwnProperty.call(t, a) && o.push(a);
            for (var l in e)
              Object.prototype.hasOwnProperty.call(e, l) && s.push(l);
            if (o.length !== s.length) return !1;
            for (var u, c, h = 0; h < o.length; ++h)
              if (
                ((u = t[o[h]]),
                (c = e[o[h]]),
                "object" == typeof u && "object" == typeof c)
              ) {
                if (!n.Utils.compareObjects(u, c)) return !1;
              } else if (u !== c) return !1;
            for (var p = 0; p < s.length; ++p)
              if (
                ((u = t[s[p]]),
                (c = e[s[p]]),
                "object" == typeof u && "object" == typeof c)
              ) {
                if (!n.Utils.compareObjects(u, c)) return !1;
              } else if (u !== c) return !1;
            return !0;
          }),
          "undefined" == typeof Object.create
            ? (n.Utils.createObject = function (t) {
                function e() {}
                return (e.prototype = t), new e();
              })
            : (n.Utils.createObject = Object.create),
          (n.Utils.trimString = function (t) {
            return t.replace(/^\s+|\s+$/g, "");
          }),
          (n.Utils.isBlank = function (t) {
            return t === undefined || null === t || /^\s+$/.test(t);
          }),
          (n.Utils.escapeHtml = function (t) {
            var e = {
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
            };
            return String(t).replace(/[&<>"']/g, function (t) {
              return e[t];
            });
          }),
          (n.Utils.truncateString = function (t, e) {
            return "string" == typeof t && t.length > e
              ? t.slice(0, e - 3) + "..."
              : t;
          }),
          (n.Utils.safelyDeleteProperty = function (t, e) {
            try {
              delete e[t];
            } catch (n) {
              e[t] = undefined;
            }
          }),
          (n.Utils._compileTemplate = function (t) {
            return Liquid.parse(t);
          }),
          (n.Utils.getDataOrClassValue = function (t, i, r) {
            t = e(t);
            var o = t.data(i);
            if (!n.Utils.isBlank(o)) return o;
            var s = (t.attr("class") || "").split(/\s+/);
            return (
              e.each(s, function (t, e) {
                if (e.substring(0, i.length) === i) {
                  var o = e.substring(i.length + 1);
                  if (!n.Utils.isBlank(o))
                    return (
                      r &&
                        ((o = o.replace("_nextlevel_", " ")),
                        (o = o.replace("_domid_", "#")),
                        (o = o.replace(/^domid_/, "#")),
                        (o = o.replace("_cssclass_", ".")),
                        (o = o.replace(/^cssclass_/, "."))),
                      o
                    );
                }
              }),
              null
            );
          }),
          (n.Utils.eventIsMiddleClick = function (t) {
            return (
              ("click" === t.type || "mousedown" === t.type) &&
              (2 === t.which || t.ctrlKey || t.metaKey)
            );
          }),
          (n.Utils.eventIsLeftClick = function (t) {
            return (
              ("click" === t.type || "mousedown" === t.type) && 1 === t.which
            );
          }),
          (n.Utils.bindOnEventsTo = function (t, n) {
            var i = e.makeArray(arguments).slice(2);
            e(t).on(n, i[0], i[1], i[2]);
          }),
          (n.Utils.bindOneEventsTo = function (t, n) {
            var i = e.makeArray(arguments).slice(2);
            e(t).one(n, i[0], i[1], i[2]);
          }),
          (n.Utils.getCompiledTemplate = function (i, r, o, s) {
            var a = i[r];
            return (
              "string" == typeof a &&
                ((a = (function () {
                  var i = n.Utils._compileTemplate(a);
                  return {
                    render: function (n) {
                      t._st_tmp_global_locale = o;
                      var r = e.extend({}, n),
                        a = e.extend({}, n.i18n || {});
                      (r.i18n = a),
                        (r.i18n.locale = o),
                        (r.i18n.localizationMessages = s);
                      var l = i.render(r);
                      return (t._st_tmp_global_locale = undefined), l;
                    },
                  };
                })()),
                (i[r] = a)),
              a
            );
          }),
          (n.Utils.allCssClassesOn = function (t) {
            t = e(t);
            var n = t.attr("class");
            return n ? n.split(/\s+/) : [];
          }),
          (n.Utils.hasClassMatching = function (t, i) {
            var r = n.Utils.allCssClassesOn(t),
              o = !1;
            return (
              e.each(r, function (t, e) {
                e.match(i) && (o = !0);
              }),
              o
            );
          }),
          (n.Utils.describeElement = function (t) {
            if (!t) return "(null)";
            t = e(t);
            var n = t.prop("tagName"),
              i = t.attr("id");
            if (i) return n + "#" + i;
            var r = t.attr("class");
            return r ? n + "." + r : '(anonymous "' + n + '")';
          }),
          (n.Utils.convertObjectToQueryParams = function (t) {
            return e.param(t);
          }),
          (n.Utils.convertQueryParamsToObject = function (t) {
            return e.deparam(t);
          }),
          (n.Utils._addRemoveClass = function (t, n, i, r) {
            (t = e(t)),
              n || i
                ? (i && t.hasClass(i) && t.removeClass(i),
                  n && !t.hasClass(n) && t.addClass(n))
                : r();
          }),
          (n.Utils._addRemoveClassWithTimeout = function (t, e, i, r) {
            setTimeout(function () {
              n.Utils._addRemoveClass(t, e, i, r);
            }, 100);
          }),
          (n.Utils.elementShow = function (t) {
            e.each(e(t), function (t, i) {
              var r = n.Utils.getDataOrClassValue(i, "st-on-show"),
                o = n.Utils.getDataOrClassValue(i, "st-on-hide");
              n.Utils._addRemoveClassWithTimeout(i, r, o, function () {
                e(i).show();
              });
            });
          }),
          (n.Utils.elementHide = function (t) {
            e.each(e(t), function (t, i) {
              var r = n.Utils.getDataOrClassValue(i, "st-on-show"),
                o = n.Utils.getDataOrClassValue(i, "st-on-hide");
              n.Utils._addRemoveClassWithTimeout(i, o, r, function () {
                e(i).hide();
              });
            });
          }),
          (n.Utils.removeInlineDisplayStyle = function (t) {
            e(t).attr("style", function (t, e) {
              if (e) return e.replace(/display[^;]+;?/g, "");
            });
          }),
          (n.Utils.isInputLikeElement = function (t) {
            return (t = e(t)), t.is("input") || t.is("textarea");
          }),
          (n.Utils.isFormElement = function (t) {
            return (t = e(t)), t.is("form");
          }),
          (n.Utils.ieVersion = function () {
            for (
              var t,
                e = 5,
                n = document.createElement("div"),
                i = n.getElementsByTagName("i");
              (n.innerHTML = "<!--[if gt IE " + ++e + "]><i></i><![endif]-->"),
                i[0];

            );
            var r = e > 6 ? e : t;
            return undefined, r;
          }),
          (n.Utils.isMobile = function () {
            return /iPhone|iPad|iPod|Android|Windows Phone/.test(
              navigator.userAgent
            );
          }),
          (n.Utils.addParamsToUrl = function (t, n) {
            var i = "string" == typeof n ? n : e.param(n);
            return (t += t.indexOf("?") < 0 ? "?" + i : "&" + i);
          }),
          (n.Utils.convertToFullPath = function (t) {
            switch (t.indexOf("//")) {
              case 0:
                t = window.location.protocol + t;
                break;
              default:
                t.indexOf("http") === -1 &&
                  (t =
                    "/" === t[0]
                      ? window.location.protocol +
                        "//" +
                        window.location.host +
                        t
                      : window.location.protocol +
                        "//" +
                        window.location.host +
                        "/" +
                        t);
            }
            return t;
          }),
          (n.Utils.getHash = function () {
            return window.location.href.split("#")[1] || "";
          }),
          (n.Utils.pushToGA = function (t) {
            var e = encodeURIComponent(t);
            "undefined" != typeof window._gaq &&
              window._gaq.push(["_trackPageview", "/search?stq=" + e]),
              "undefined" != typeof window.ga &&
                window.ga("send", "pageview", "/search?stq=" + e);
          }),
          (n.Utils.fireGAEvent = function (t, e, n, i) {
            "undefined" != typeof window._gaq &&
              window._gaq.push(["_trackEvent", t, e, n, i]),
              "undefined" != typeof window.ga &&
                window.ga("send", "event", t, e, n, i);
          }),
          (n.Utils.stringOperator = function (t, e, n) {
            return {
              and: function (t, e) {
                return t && e;
              },
              or: function (t, e) {
                return t || e;
              },
            }[t](e, n);
          }),
          (n.Utils.isEmptyObject = function (t) {
            return e.isEmptyObject(t);
          }),
          (n.Utils.debounce = function (t, e, n) {
            var i;
            return function () {
              var r = this,
                o = arguments,
                s = function () {
                  (i = null), n || t.apply(r, o);
                },
                a = n && !i;
              clearTimeout(i), (i = setTimeout(s, e)), a && t.apply(r, o);
            };
          }),
          (n.Utils.generateUrl = function (t, e, n) {
            var i = "__PLACEHOLDER__",
              r = t.replace(i, e);
            return void 0 !== n && (r = r + "." + n), r;
          });
      })(window, jQuery),
      jQuery.ajaxPrefilter(function (t) {
        t.crossDomain && (t.contents.script = !1);
      }),
      (function (global, $, moment, rome) {
        "use strict";
        var Swiftype = (global._InternalSwiftype =
          global._InternalSwiftype || {});
        global._InternalSwiftypeError = function (t, e, n) {
          (this.level = e), (this.message = n), (this.contextObject = t);
        };
        var pSwiftypeError = global._InternalSwiftypeError.prototype;
        (pSwiftypeError.toString = function () {
          return (
            this.contextObject +
            ": " +
            this.level.toUpperCase() +
            ": " +
            this.message
          );
        }),
          (Swiftype.CssBehaviorClasses = {
            adornments: {
              show_only_on_empty_query: "st-query-not-present",
              show_only_on_nonempty_query: "st-query-present",
            },
          });
        var DEBUG = "debug",
          WARN = "warn",
          FATAL = "fatal";
        Swiftype.HashManager = function (t, e) {
          (this._installIndex = t),
            (this._anchorHashChangedCallback = e),
            (this._delimiter = "-"),
            $(window).on("hashchange", this._anchorHashChanged.bind(this));
        };
        var pHashManager = Swiftype.HashManager.prototype;
        (pHashManager._anchorHashChanged = function () {
          this._anchorHashChangedCallback(this.getAnchorParams());
        }),
          (pHashManager._getHash = function () {
            return window.location.href.split("#")[1] || "";
          }),
          (pHashManager._getGlobalAnchorParamsHash = function () {
            return Swiftype.Utils.convertQueryParamsToObject(this._getHash());
          }),
          (pHashManager._parseHashKey = function (t) {
            var e = t.split(this._delimiter),
              n = e.length > 1 ? parseInt(e.pop(), 10) : 0,
              i = e.join(this._delimiter);
            return isNaN(n) && ((n = 0), (i = t)), { installIndex: n, key: i };
          }),
          (pHashManager._getAnchorParamsHash = function () {
            var t = this,
              e = {};
            return (
              $.each(this._getGlobalAnchorParamsHash(), function (n, i) {
                var r = t._parseHashKey(n);
                r.installIndex === t._installIndex && (e[r.key] = i);
              }),
              e
            );
          }),
          (pHashManager.getAnchorParams = function () {
            return new Swiftype.AnchorParams(null, this._getAnchorParamsHash());
          }),
          (pHashManager.scopeAnchorParamsHash = function (t) {
            if (0 === this._installIndex) return t;
            var e = this,
              n = {};
            return (
              $.each(t, function (t, i) {
                n[t + e._delimiter + e._installIndex] = i;
              }),
              n
            );
          }),
          (pHashManager.updateHash = function (t) {
            var e = this,
              n = {};
            $.each(this._getGlobalAnchorParamsHash(), function (t, i) {
              e._parseHashKey(t).installIndex !== e._installIndex && (n[t] = i);
            }),
              $.extend(n, this.scopeAnchorParamsHash(t));
            var i = new Swiftype.AnchorParams(null, n);
            window.location.hash = i.toAnchorString();
          }),
          (Swiftype.Install = function (t, e, n) {
            if ("string" != typeof t)
              throw (
                "This is not a valid install key: '" +
                t +
                "'; it must be a string."
              );
            if (((t = Swiftype.Utils.trimString(t)), 20 !== t.length))
              throw (
                "This is not a valid install key: '" +
                t +
                "'; it must be of length 20."
              );
            (this._readyListeners = []),
              (this._searchCompleteListeners = []),
              (this._installKey = t),
              (this._userScriptConfiguration = e),
              (this._isDefaultInstall = 0 === n),
              (this._userServerConfiguration = null),
              (this._configuration = $.extend(
                {},
                this._userScriptConfiguration
              )),
              (this._dependentResourceLoadingTimeoutAfter = null),
              (this._dependentResourceLoadingTimeoutId = null),
              (this._hashManager = new Swiftype.HashManager(
                n,
                this._fireListeners.bind(this, "anchorHashChanged")
              )),
              this._fetchUserServerConfiguration(),
              this._setDebugLevel(),
              (this._searchHistory = new Swiftype.SearchHistory.forInstallKey(
                t
              ));
          });
        var pInstall = Swiftype.Install.prototype;
        (pInstall.toString = function () {
          return "[Swiftype.Install '" + this._installKey + "']";
        }),
          (pInstall.isDefaultInstall = function () {
            return this._isDefaultInstall;
          }),
          (pInstall.cookieSearchQuery = function (t) {
            var e = t.apiAjaxDataParameters();
            this._searchHistory.trackQueryForActiveInstall(e);
          }),
          (pInstall.cookieSearchResult = function (t) {
            var e = t.getQuery(),
              n = e.apiAjaxDataParameters(),
              i = t._apiResult.id;
            this._searchHistory.trackClickForActiveInstall(n, i);
          }),
          (pInstall._normalizeInstallKey = function (t) {
            return Swiftype.Utils.trimString(t).replace("-", "_");
          }),
          (pInstall.matchesKey = function (t) {
            return (
              this._normalizeInstallKey(t) ===
              this._normalizeInstallKey(this._installKey)
            );
          }),
          (pInstall.getInstallDataAttribute = function () {
            return this._installKey;
          }),
          (pInstall.getHashManager = function () {
            return this._hashManager;
          }),
          (pInstall._userServerConfigurationUrl = function () {
            return Swiftype.Utils.generateUrl(
              "//s.swiftypecdn.com/install/v2/config/__PLACEHOLDER__",
              this._installKey,
              "json"
            );
          }),
          (pInstall._fetchUserServerConfiguration = function () {
            var t = this._userServerConfigurationUrl();
            $.ajax({
              type: "GET",
              url: t,
              success: this._processConfiguration.bind(this),
              error: this._userServerConfigurationRetrievalFailed.bind(this),
            });
          }),
          (pInstall._processConfiguration = function (t) {
            if (
              ((this._userServerConfiguration = t),
              (this._configuration = $.extend(
                !0,
                this._userServerConfiguration,
                this._userScriptConfiguration
              )),
              this._validConfiguration())
            )
              this._convertStringHooksToFunctions(),
                (this._localizationMessages =
                  this._configuration.install.localization_messages),
                (this._locale =
                  this._configuration.install.locale.toLowerCase()),
                (this._primaryDocType =
                  this._configuration.install.primary_doc_type),
                this._loadDependentResources();
            else {
              var e =
                'Unable to retrieve configuration for install "' +
                this._installKey +
                '" at "' +
                this._userServerConfigurationUrl() +
                '"';
              this._configFetchError.error &&
                this._configFetchError.exception &&
                (e +=
                  "; got: " +
                  this._configFetchError.error +
                  " / " +
                  this._configFetchError.exception),
                (e += ". Swiftype will not work on this page."),
                this.log(this, FATAL, e);
            }
          }),
          (pInstall._userServerConfigurationRetrievalFailed = function (
            t,
            e,
            n
          ) {
            (this._configFetchError = { error: e, exception: n }),
              this._processConfiguration({});
          }),
          (pInstall._validConfiguration = function () {
            return !!this._configuration.install;
          }),
          (pInstall._convertStringHooksToFunctions = function () {
            var functionHooks = {},
              allowedHooks = ["query_filter", "result_clicked_filter"];
            $.each(
              this._userServerConfiguration.install.hooks,
              function (hookName, hookFunction) {
                allowedHooks.indexOf(hookName) !== -1 &&
                  (functionHooks[hookName] = eval(hookFunction));
              }
            ),
              (this._userServerConfiguration.install.hooks = functionHooks);
          }),
          (pInstall.getLocale = function () {
            return this._locale;
          }),
          (pInstall.getPrimaryDocType = function () {
            return this._primaryDocType;
          }),
          (pInstall.getLocalizationMessages = function () {
            return this._localizationMessages;
          }),
          (pInstall.addReadyListener = function (t) {
            this._readyListeners === !1 ? t() : this._readyListeners.push(t);
          }),
          (pInstall.addSearchCompleteListener = function (t) {
            this._searchCompleteListeners.push(t);
          }),
          (pInstall._dependentStylesheetResources = function () {
            if (!this._dependentStylesheetResourcesMemoized) {
              var t = this;
              this._dependentStylesheetResourcesMemoized = $.map(
                this._configuration.install.web.dependent_resources
                  .stylesheets || [],
                function (e) {
                  return new Swiftype.Install.DependentStylesheet(t, e);
                }
              );
            }
            return this._dependentStylesheetResourcesMemoized;
          }),
          (pInstall._dependentJavascriptResourcesList = function () {
            return (
              this._configuration.install.web.dependent_resources.javascripts ||
              []
            ).concat(this._dependentJavascriptPolyfillList());
          }),
          (pInstall._dependentJavascriptPolyfillList = function () {
            var t = [];
            return (
              global.Intl ||
                t.push(
                  this._configuration.install.web.dependent_resources.polyfills
                    .intl +
                    this._locale +
                    ".js"
                ),
              t
            );
          }),
          (pInstall._dependentJavascriptResources = function () {
            if (!this._dependentJavascriptResourcesMemoized) {
              var t = this;
              this._dependentJavascriptResourcesMemoized = $.map(
                this._dependentJavascriptResourcesList(),
                function (e) {
                  return new Swiftype.Install.DependentJavascript(t, e);
                }
              );
            }
            return this._dependentJavascriptResourcesMemoized;
          }),
          (pInstall._inlineStylesheetResources = function () {
            return new Swiftype.Install.InlineStylesheet(
              this,
              this._configuration.install.web.dependent_resources.inline_stylesheet
            );
          }),
          (pInstall._ieStylesheetResources = function () {
            var t,
              e = this,
              n = Swiftype.Utils.ieVersion();
            if (n) {
              var i = (this._webConfig().dependent_resources
                .browser_stylesheets || {})["ie" + n];
              i && (t = new Swiftype.Install.DependentStylesheet(e, i));
            }
            return t || [];
          }),
          (pInstall._dependentResources = function () {
            return (
              this._dependentResourcesMemoized ||
                (this._dependentResourcesMemoized =
                  this._dependentStylesheetResources()
                    .concat(this._dependentJavascriptResources())
                    .concat(this._inlineStylesheetResources())
                    .concat(this._ieStylesheetResources())),
              this._dependentResourcesMemoized
            );
          }),
          (pInstall._loadDependentResources = function () {
            $.each(this._dependentResources(), function (t, e) {
              e.load();
            }),
              this._areDependentResourcesLoaded()
                ? this._allDependentResourcesDidLoad()
                : ((this._dependentResourceLoadingTimeoutAfter =
                    Date.now() + 15e3),
                  (this._dependentResourceLoadingTimeoutId = global.setInterval(
                    this._checkDependentResourcesLoaded.bind(this),
                    100
                  )));
          }),
          (pInstall._areDependentResourcesLoaded = function () {
            if (!this._areDependentResourcesLoadedMemoized) {
              var t = !0;
              $.each(this._dependentResources(), function (e, n) {
                n.isLoaded() || (t = !1);
              }),
                (this._areDependentResourcesLoadedMemoized = t);
            }
            return this._areDependentResourcesLoadedMemoized;
          }),
          (pInstall._checkDependentResourcesLoaded = function () {
            var t = this._areDependentResourcesLoaded();
            (t || Date.now() >= this._dependentResourceLoadingTimeoutAfter) &&
              (global.clearInterval(this._dependentResourceLoadingTimeoutId),
              (this._dependentResourceLoadingTimeoutAfter = null),
              t
                ? this._allDependentResourcesDidLoad()
                : this._allDependentResourcesDidFailToLoad());
          }),
          (pInstall._queryElementLocator = function () {
            return (
              this._queryElementLocatorMemoized ||
                (this._queryElementLocatorMemoized =
                  new Swiftype.QueryElementLocator(this, document.body)),
              this._queryElementLocatorMemoized
            );
          }),
          (pInstall._webConfig = function () {
            return this._configuration.install.web;
          }),
          (pInstall._templatesConfig = function () {
            return this._webConfig().templates["default"];
          }),
          (pInstall._createInjectionPoint = function (t) {
            var e = $("<div></div>");
            e.addClass("st-injected-content-generated"),
              this._queryElementLocator().allocateToInstall(e);
            var n =
              this._webConfig().ui_bindings.injected_content.attach_points[t];
            this._setLocaleClassToElement(e);
            var i = /^#(\S+)$/,
              r = /^\.(\-?[_A-Za-z]+[_a-zA-Z0-9-]*)$/;
            return (
              $.each(n, function (t, n) {
                var o = i.exec(n);
                if (o) return e.attr("id", o[1]), e;
                var s = r.exec(n);
                return s ? (e.addClass(s[1]), e) : void 0;
              }),
              e
            );
          }),
          (pInstall._handleGlobalEvents = function () {
            var t = this;
            $(window).resize(function (e) {
              t._fireListeners("windowResized", e);
            });
          }),
          (pInstall._setLocaleClassToElement = function (t) {
            var e = this._configuration.install.locale,
              n = this._configuration.install.rtl_locales;
            $.inArray(e, JSON.parse(n)) >= 0 && t.addClass("swiftype-rtl");
          }),
          (pInstall._findInjectionPoint = function (t) {
            var e =
                this._webConfig().ui_bindings.injected_content.attach_points[t],
              n = this,
              i = null;
            return (
              $.each(e, function (t, e) {
                $(e).each(function (t, e) {
                  if (
                    ((e = $(e)), n._queryElementLocator().belongsToInstall(e))
                  )
                    return (i = e), !0;
                });
              }),
              i
            );
          }),
          (pInstall._findOrCreateInjectionPoint = function (t) {
            var e = this._findInjectionPoint(t);
            return (
              e
                ? this._queryElementLocator().allocateToInstall(e)
                : ((e = this._createInjectionPoint(t)),
                  $(document.body).append(e)),
              e
            );
          }),
          (pInstall._addInjectedContentIfNeeded = function () {
            var t = this,
              e = this._templatesConfig().injected_content;
            e &&
              !Swiftype.Utils.isEmptyObject(e) &&
              $.each(e, function (n, i) {
                var r = t._findOrCreateInjectionPoint(n);
                i &&
                  new Swiftype.InjectedContent(
                    r,
                    e,
                    n,
                    t.getLocale(),
                    t.getLocalizationMessages()
                  ).attach();
              });
          }),
          (pInstall._setupConstantCrawl = function () {
            new Swiftype.ConstantCrawl(
              this._configuration.install.endpoints.constant_crawl
            ).attach();
          }),
          (pInstall._setupUi = function () {
            this._addInjectedContentIfNeeded(),
              this._setupConstantCrawl(),
              (this._searchContext = new Swiftype.QueryContext(
                this,
                "search",
                this._templatesConfig().search,
                this._webConfig().ui_bindings.search,
                this._webConfig().ui.search,
                this._configuration.install.hooks
              )),
              (this._autocompleteContext = new Swiftype.QueryContext(
                this,
                "autocomplete",
                this._templatesConfig().autocomplete,
                this._webConfig().ui_bindings.autocomplete,
                this._webConfig().ui.autocomplete,
                this._configuration.install.hooks
              )),
              this._autocompleteContext.setupUi(),
              this._searchContext.setupUi(),
              this._handleGlobalEvents(),
              this._readyListeners &&
                ($.each(this._readyListeners, function (t, e) {
                  e();
                }),
                (this._readyListeners = !1));
          }),
          (pInstall.getSearchContext = function () {
            return this._searchContext;
          }),
          (pInstall._fireListeners = function () {
            this._searchContext._fireListeners.apply(
              this._searchContext,
              arguments
            ),
              this._autocompleteContext._fireListeners.apply(
                this._autocompleteContext,
                arguments
              );
          }),
          (pInstall._allDependentResourcesDidLoad = function () {
            var t = this;
            $(function () {
              t._setupUi();
            });
          }),
          (pInstall._allDependentResourcesDidFailToLoad = function () {
            this._allDependentResourcesDidLoad();
          }),
          (pInstall._setDebugLevel = function () {
            (this._outputDebugMessages = !1),
              this.getHashManager().getAnchorParams().getValue("sdebug") &&
                (this._outputDebugMessages = !0);
          }),
          (pInstall.log = function (t, e, n) {
            this._outputDebugMessages &&
              window.console &&
              console.log(new global._InternalSwiftypeError(t, e, n));
          }),
          (pInstall._wrapApiResults = function (t, e) {
            return new Swiftype.Results(t, e, this.getPrimaryDocType());
          }),
          (pInstall._wrapSuccessCallback = function (t, e) {
            var n = this;
            return function (i, r, o) {
              e(n._wrapApiResults(t, i), r, o),
                $.each(n._searchCompleteListeners, function (e, n) {
                  n(t);
                });
            };
          }),
          (pInstall.performSearch = function (t, e, n) {
            var i = this._configuration.install.endpoints[t.queryType()],
              r = this,
              o = {
                type: "POST",
                url: i,
                xhrFields: { withCredentials: !0 },
                data: t.apiAjaxDataParameters(),
                success: r._wrapSuccessCallback(t, e),
                error: n,
              };
            this.log(
              this,
              DEBUG,
              "Asking Swiftype to perform the following query: " +
                JSON.stringify(o)
            ),
              $.ajax(o);
          }),
          (pInstall.currentQueryDidChange = function (t, e, n) {
            this._searchContext.someQueryChanged(t, e, n),
              this._autocompleteContext.someQueryChanged(t, e, n);
          }),
          (pInstall._trackAndSendToSearchResult = function (t, e, n, i) {
            n = Swiftype.Utils.convertToFullPath(n);
            var r = { _st_tracking: e.toTrackingParams(), _st_url: n },
              o = Swiftype.Utils.addParamsToUrl(t, r);
            this._sendToUrl(o, i);
          }),
          (pInstall._directlySendToSearchResult = function (t, e, n) {
            this._sendToUrl(e, n);
          }),
          (pInstall._sendToUrl = function (t, e) {
            e ? window.open(t, "_blank") : (window.location = t);
          }),
          (pInstall.sendToSearchResult = function (t, e, n) {
            var i = this._webConfig().analytics[t.getQuery().queryType()],
              r =
                this._configuration.install.endpoints
                  .track_and_redirect_to_result;
            this.cookieSearchResult(t),
              i && r
                ? this._trackAndSendToSearchResult(r, t, e, n)
                : this._directlySendToSearchResult(t, e, n);
          }),
          (pInstall._searchResultsPageUrl = function () {
            return this._webConfig().ui.search_results_page_url;
          }),
          (pInstall.onSearchResultsPage = function () {
            var t = this._searchResultsPageUrl();
            if (t) {
              var e = null;
              return (
                (e =
                  0 === t.indexOf("http://") ||
                  0 === t.indexOf("https://") ||
                  0 === t.indexOf("//")
                    ? window.location.protocol +
                      "//" +
                      window.location.host +
                      window.location.pathname +
                      window.location.search
                    : window.location.pathname + window.location.search),
                t === e || t + "/" === e || t === e + "/"
              );
            }
            return !0;
          }),
          (pInstall.sendUserToSearchResultsPageFor = function (t) {
            var e = this._searchResultsPageUrl();
            if (!this._searchResultsPageUrl())
              throw new Error("No Search Results Page URL configured.");
            var n = this.getHashManager().scopeAnchorParamsHash(
                t.toAnchorParams()
              ),
              i = new Swiftype.AnchorParams(null, n);
            window.location = e + "#" + i.toAnchorString();
          }),
          (Swiftype.Install.InlineStylesheet = function (t, e) {
            (this._install = t), (this._loaded = !1), (this._inlineCss = e);
          });
        var pInlineStylesheet = Swiftype.Install.InlineStylesheet.prototype;
        (pInlineStylesheet.toString = function () {
          return "[Swiftype.Install.InlineStylesheet]";
        }),
          (pInlineStylesheet.load = function () {
            this.isLoaded() ||
              ($("head").append(
                "<style type='text/css'>" + this._inlineCss + "</style>"
              ),
              (this._loaded = !0));
          }),
          (pInlineStylesheet.isLoaded = function () {
            return this._loaded;
          }),
          (Swiftype.Install.DependentStylesheet = function (t, e) {
            (this._install = t),
              (this._url = e),
              (this._loadRequested = !1),
              (this._loaded = !1),
              (this._link = null);
          });
        var pDependentStylesheet =
          Swiftype.Install.DependentStylesheet.prototype;
        (pDependentStylesheet.toString = function () {
          return "[Swiftype.Install.DependentStylesheet " + this._url + "]";
        }),
          (pDependentStylesheet._tagAttachPoint = function () {
            return (
              this._tagAttachPointMemoized ||
                (this._tagAttachPointMemoized =
                  document.getElementsByTagName("head")[0] ||
                  document.getElementsByTagName("body")[0]),
              this._tagAttachPointMemoized
            );
          }),
          (pDependentStylesheet._inferDetectionRulesFromTag = function () {
            "sheet" in this._link
              ? ((this._sheetPropertyName = "sheet"),
                (this._rulesPropertyName = "cssRules"))
              : ((this._sheetPropertyName = "styleSheet"),
                (this._rulesPropertyName = "rules"));
          }),
          (pDependentStylesheet.load = function () {
            this._loadRequested ||
              ((this._link = document.createElement("link")),
              (this._link.rel = "stylesheet"),
              (this._link.type = "text/css"),
              (this._link.href = this._url),
              this._tagAttachPoint().appendChild(this._link),
              this._inferDetectionRulesFromTag(),
              (this._loadRequested = !0));
          }),
          (pDependentStylesheet.isLoaded = function () {
            if (!this._loaded) {
              if (!this._loadRequested) return !1;
              this._link[this._sheetPropertyName] && (this._loaded = !0);
            }
            return this._loaded;
          }),
          (Swiftype.Install.DependentJavascript = function (t, e) {
            (this._install = t),
              (this._url = e),
              (this._loadRequested = !1),
              (this._loaded = !1);
          });
        var pDependentJavascript =
          Swiftype.Install.DependentJavascript.prototype;
        (pDependentJavascript.toString = function () {
          return "[Swiftype.Install.DependentJavascript " + this._url + "]";
        }),
          (pDependentJavascript._didLoad = function () {
            this._loaded = !0;
          }),
          (pDependentJavascript.load = function () {
            if (!this._loadRequested) {
              var t = document.createElement("script");
              (t.type = "text/javascript"), (t.async = !0), (t.src = this._url);
              var e = document.getElementsByTagName("script")[0];
              if ((e.parentNode.insertBefore(t, e), t.addEventListener))
                t.addEventListener("load", this._didLoad.bind(this), !1);
              else {
                var n = this;
                t.attachEvent("onreadystatechange", function () {
                  /complete|loaded/.test(t.readyState) && n._didLoad();
                });
              }
            }
          }),
          (pDependentJavascript.isLoaded = function () {
            return this._loaded;
          }),
          (Swiftype.Result = function (t, e, n) {
            (this._resultSet = t),
              (this._sequenceInThisPage = e),
              (this._apiResult = n);
          });
        var pResult = Swiftype.Result.prototype;
        (pResult.toString = function () {
          return (
            "[Swiftype.Result: Result " +
            this._sequenceInThisPage +
            " in this page for " +
            this._resultSet +
            "]"
          );
        }),
          (pResult.getQuery = function () {
            return this._resultSet.getQuery();
          }),
          (pResult.getQueryType = function () {
            return this.getQuery().queryType();
          }),
          (pResult.getResultSet = function () {
            return this._resultSet;
          }),
          (pResult._escapeHtml = function (t) {
            return "string" != typeof t ? t : Swiftype.Utils.escapeHtml(t);
          }),
          (pResult._highlightFor = function (t) {
            return this._apiResult.highlight[t];
          }),
          (pResult._rawFor = function (t) {
            return this._apiResult[t];
          }),
          (pResult._arrayFor = function (t) {
            var e = this._rawFor(t);
            return Array.isArray(e) ? e : [e];
          }),
          (pResult._scalarFor = function (t) {
            var e = this._rawFor(t);
            return Array.isArray(e) ? e[0] : e;
          }),
          (pResult._truncate = function (t) {
            return Swiftype.Utils.truncateString(t, 300);
          }),
          (pResult._templateResult = function (t) {
            return (
              this._highlightFor(t) ||
              this._escapeHtml(this._truncate(this._scalarFor(t)))
            );
          }),
          (pResult._templateFullResult = function (t) {
            return this._escapeHtml(this._scalarFor(t));
          }),
          (pResult._templateArrayResult = function (t) {
            var e = this;
            return $.map(this._arrayFor(t), function (t) {
              return e._escapeHtml(t);
            });
          }),
          (pResult._templateRawResult = function (t) {
            return this._rawFor(t);
          }),
          (pResult._syntheticTemplateRenderingContextProperties = function () {
            return {
              __rank: this.getSequenceInThisPage(),
              doc_id: this._apiResult.id,
            };
          }),
          (pResult._mapToTemplateRenderingContext = function (t) {
            var e = this,
              n = $.extend(
                {},
                this._syntheticTemplateRenderingContextProperties()
              );
            return (
              $.each(this._apiResult, function (i) {
                n[i] = t.call(e, i);
              }),
              n
            );
          }),
          (pResult.toTemplateRenderingContext = function () {
            return (
              this._toTemplateRenderingContextMemoized ||
                (this._toTemplateRenderingContextMemoized = {
                  result: this._mapToTemplateRenderingContext(
                    this._templateResult
                  ),
                  full_result: this._mapToTemplateRenderingContext(
                    this._templateFullResult
                  ),
                  array_result: this._mapToTemplateRenderingContext(
                    this._templateArrayResult
                  ),
                  raw_result: this._mapToTemplateRenderingContext(
                    this._templateRawResult
                  ),
                }),
              this._toTemplateRenderingContextMemoized
            );
          }),
          (pResult.toTrackingParams = function () {
            return {
              doc_id: this._apiResult.id,
              query: this.getQuery().toTrackingParams(),
              query_type: this.getQueryType(),
            };
          }),
          (pResult.getSequenceInThisPage = function () {
            return this._sequenceInThisPage;
          }),
          (pResult.getOverallSequence = function () {
            return (
              this._resultSet.currentPageStart() + this.getSequenceInThisPage()
            );
          }),
          (pResult.getTemplateRenderingContext = function () {
            return (
              this._getTemplateRenderingContextMemoized ||
                (this._getTemplateRenderingContextMemoized = $.extend(
                  {},
                  this._resultSet.getTemplateRenderingContext(),
                  this.toTemplateRenderingContext()
                )),
              this._getTemplateRenderingContextMemoized
            );
          }),
          (Swiftype.ResultSet = function (t, e, n, i) {
            (this._resultObject = t),
              (this._setName = e),
              (this._apiMetadata = n),
              (this._resultArray = []);
            var r = this;
            $.each(i, function (t, e) {
              var n = new Swiftype.Result(r, t, e);
              r._resultArray.push(n);
            });
          });
        var pResultSet = Swiftype.ResultSet.prototype;
        (pResultSet.getSetName = function () {
          return this._setName;
        }),
          (pResultSet.getQuery = function () {
            return this._resultObject.getQuery();
          }),
          (pResultSet.currentPageNumber = function () {
            return this._apiMetadata.current_page;
          }),
          (pResultSet.facets = function () {
            return this._apiMetadata.facets;
          }),
          (pResultSet.lastPageNumber = function () {
            return this._apiMetadata.num_pages;
          }),
          (pResultSet.totalResultCount = function () {
            return this._apiMetadata.total_result_count;
          }),
          (pResultSet._perPage = function () {
            return this._apiMetadata.per_page;
          }),
          (pResultSet.currentPageStart = function () {
            return (this.currentPageNumber() - 1) * this._perPage() + 1;
          }),
          (pResultSet._currentPageEnd = function () {
            return this.currentPageNumber() === this.lastPageNumber()
              ? this.totalResultCount()
              : this.currentPageNumber() * this._perPage();
          }),
          (pResultSet._numPages = function () {
            return this._apiMetadata.num_pages;
          }),
          (pResultSet.toString = function () {
            return (
              "[Swiftype.ResultSet for '" +
              this._setName +
              "' for " +
              this._resultObject +
              ": page " +
              this.currentPageNumber() +
              " of " +
              this.lastPageNumber() +
              ", " +
              this.totalResultCount() +
              " total results]"
            );
          }),
          (pResultSet.toTemplateRenderingContext = function () {
            if (!this._toTemplateRenderingContextMemoized) {
              var t = {
                current_page: this.currentPageNumber(),
                current_page_start: this.currentPageStart(),
                current_page_end: this._currentPageEnd(),
                num_pages: this.lastPageNumber(),
                per_page: this._perPage(),
                total_records_for_this_set:
                  this._apiMetadata.total_result_count,
                records: [],
                spelling_suggestions: [],
                spelling_suggestion: null,
              };
              $.each(this._resultArray, function (e, n) {
                t.records.push(n.toTemplateRenderingContext());
              });
              var e = this.getSpellingSuggestions();
              $.each(e, function (e, n) {
                t.spelling_suggestions.push(n.getTemplateRenderingContext());
              }),
                e.length > 0 &&
                  (t.spelling_suggestion = e[0].getTemplateRenderingContext()),
                (this._toTemplateRenderingContextMemoized = t);
            }
            return this._toTemplateRenderingContextMemoized;
          }),
          (pResultSet.getTemplateRenderingContext = function () {
            return (
              this._getTemplateRenderingContextMemoized ||
                (this._getTemplateRenderingContextMemoized = $.extend(
                  {},
                  this._resultObject.getTemplateRenderingContext(),
                  this.toTemplateRenderingContext()
                )),
              this._getTemplateRenderingContextMemoized
            );
          }),
          (pResultSet.eachResult = function (t) {
            $.each(this._resultArray, t);
          }),
          (pResultSet.countOfResultsOnThisPage = function () {
            return this._resultArray.length;
          }),
          (pResultSet.getSpellingSuggestions = function () {
            var t = this._apiMetadata.spelling_suggestion,
              e = [];
            return (
              t &&
                e.push(new Swiftype.SpellingSuggestionResult(t.text, t.score)),
              e
            );
          }),
          (Swiftype.SpellingSuggestionResult = function (t, e) {
            (this._text = t), (this._score = e);
          });
        var pSpellingSuggestionResult =
          Swiftype.SpellingSuggestionResult.prototype;
        (pSpellingSuggestionResult.toString = function () {
          return (
            "[Swiftype.SpellingSuggestionResult: '" +
            this._text +
            "', score " +
            this._score +
            "]"
          );
        }),
          (pSpellingSuggestionResult.getText = function () {
            return this._text;
          }),
          (pSpellingSuggestionResult.getScore = function () {
            return this._score;
          }),
          (pSpellingSuggestionResult.potentiallyMergeWith = function (t) {
            if (t._text === this._text) {
              var e = this._score;
              return (
                t._score > this._score && (e = t._score),
                new Swiftype.SpellingSuggestionResult(this._text, e)
              );
            }
            return null;
          }),
          (pSpellingSuggestionResult.getTemplateRenderingContext = function () {
            return (
              this._toTemplateRenderingContextMemoized ||
                (this._toTemplateRenderingContextMemoized = {
                  text: Swiftype.Utils.escapeHtml(this._text),
                  score: this._score,
                }),
              this._toTemplateRenderingContextMemoized
            );
          }),
          (Swiftype.Results = function (t, e, n) {
            (this._query = t),
              (this._errors = e.errors),
              (this._resultSetsByName = {}),
              (this._primaryDocType = n);
            var i = this;
            $.each(e.info, function (t, n) {
              var r = e.records[t] || [];
              i._resultSetsByName[t] = new Swiftype.ResultSet(i, t, n, r);
            });
          });
        var pResults = Swiftype.Results.prototype;
        (pResults.toString = function () {
          return (
            "[Swiftype.Results for " +
            this._query +
            "; results: " +
            this.totalRecordsAcrossAllSets() +
            "]"
          );
        }),
          (pResults.getQuery = function () {
            return this._query;
          }),
          (pResults.isEmptyQuery = function () {
            return this.getQuery().isEmptyQuery();
          }),
          (pResults.toTemplateRenderingContext = function () {
            if (!this._toTemplateRenderingContextMemoized) {
              var t = {
                  query: this._query.toTemplateRenderingContext(),
                  total_records_across_all_sets:
                    this.totalRecordsAcrossAllSets(),
                  total_results: this.totalRecordsAcrossAllSets(),
                  errors: this._errors,
                  spelling_suggestion: null,
                  spelling_suggestions: [],
                  sets: {},
                },
                e = this.getAllSpellingSuggestions();
              $.each(e, function (e, n) {
                t.spelling_suggestions.push(n.getTemplateRenderingContext());
              }),
                e.length > 0 &&
                  (t.spelling_suggestion = e[0].getTemplateRenderingContext()),
                $.each(this._resultSetsByName, function (e, n) {
                  t.sets[e] = n.toTemplateRenderingContext();
                }),
                (this._toTemplateRenderingContextMemoized = t);
            }
            return this._toTemplateRenderingContextMemoized;
          }),
          (pResults.getTemplateRenderingContext = function () {
            return (
              this._getTemplateRenderingContextMemoized ||
                (this._getTemplateRenderingContextMemoized =
                  this.toTemplateRenderingContext()),
              this._getTemplateRenderingContextMemoized
            );
          }),
          (pResults._resultSetNames = function () {
            var t = $.map(this._resultSetsByName, function (t, e) {
              return e;
            });
            return t.sort(), t;
          }),
          (pResults._resultSetCount = function () {
            return this._resultSetNames().length;
          }),
          (pResults._getResultSet = function (t) {
            return this._resultSetsByName[t];
          }),
          (pResults.firstResultSet = function () {
            return this._getResultSet(this._primaryDocType);
          }),
          (pResults._eachResultSet = function (t) {
            $.each(this._resultSetsByName, function (e, n) {
              t(n);
            });
          }),
          (pResults.totalRecordsAcrossAllSets = function () {
            var t = 0;
            return (
              this._eachResultSet(function (e) {
                t += e.totalResultCount();
              }),
              t
            );
          }),
          (pResults.hasAnyResults = function () {
            return this.totalRecordsAcrossAllSets() > 0;
          }),
          (pResults._uniqifySpellingSuggestions = function (t) {
            for (var e = [], n = 0; n < t.length; ++n) {
              var i = t[n];
              if (i) {
                for (var r = n + 1; r < t.length; ++r) {
                  var o = t[r];
                  if (o) {
                    var s = i.potentiallyMergeWith(o);
                    s && ((i = s), (t[r] = null));
                  }
                }
                e.push(i);
              }
            }
            return e;
          }),
          (pResults.getAllSpellingSuggestions = function () {
            var t = [];
            this._eachResultSet(function (e) {
              t = t.concat(e.getSpellingSuggestions());
            });
            var e = this._uniqifySpellingSuggestions(t);
            return (
              e.sort(function (t, e) {
                return e.getScore() - t.getScore();
              }),
              e
            );
          }),
          (Swiftype.Query = function (t) {
            (this._queryType = t),
              (this._queryText = null),
              (this._pageNumber = null),
              (this._sortFieldByDocumentTypeSlug = {}),
              (this._sortDirectionByDocumentTypeSlug = {}),
              (this._filterDataByDocumentTypeSlugAndFilterField = {}),
              (this._facetDataByDocumentTypeSlug = {});
          });
        var pQuery = Swiftype.Query.prototype;
        (pQuery.toString = function () {
          var t =
            "[Swiftype.Query: " +
            this._queryType +
            " for '" +
            this._queryText +
            "'";
          return (
            null !== this._pageNumber && (t += ", page " + this._pageNumber),
            Swiftype.Utils.isEmptyObject(this._sortFieldByDocumentTypeSlug) ||
              Swiftype.Utils.isEmptyObject(
                this._sortDirectionByDocumentTypeSlug
              ) ||
              ((t +=
                ", sortFieldByDocumentTypeSlug " +
                this._sortFieldByDocumentTypeSlug),
              (t +=
                ", sortDirectionByDocumentTypeSlug " +
                this._sortDirectionByDocumentTypeSlug)),
            Swiftype.Utils.isEmptyObject(
              this._filterDataByDocumentTypeSlugAndFilterField
            ) ||
              ((t += ", filters "),
              $.each(
                this._filterDataByDocumentTypeSlugAndFilterField,
                function (e, n) {
                  $.each(n, function (e, n) {
                    (t += " for field " + e),
                      $.each(n, function (e, n) {
                        t += " " + e + " " + n;
                      });
                  });
                }
              )),
            (t += "]")
          );
        }),
          (pQuery.setQueryText = function (t) {
            this._queryText = t;
          }),
          (pQuery.getQueryText = function () {
            return this._queryText;
          }),
          (pQuery.mutateFromPageAnchor = function (t) {
            var e = t.getValue("stq"),
              n = t.getValue("stp"),
              i = t.getValue("sort_field"),
              r = t.getValue("sort_direction"),
              o = t.getValue("filters"),
              s = t.getValue("facets"),
              a = this;
            Swiftype.Utils.isBlank(e) || a.setQueryText(e),
              n && n.match(/^[0-9]+$/) && a.setPageNumber(parseInt(n)),
              o && a.setFilterData(o),
              s && a.setFacetData(s),
              i && r && (a.setSortField(i), a.setSortDirection(r));
          }),
          (pQuery._normalizedQueryText = function () {
            return this._queryText
              ? Swiftype.Utils.trimString(this._queryText)
              : this._queryText;
          }),
          (pQuery._toObject = function () {
            var t = $.extend(
                {},
                {
                  queryType: this._queryType,
                  q: this._normalizedQueryText(),
                  pageNumber: this._pageNumber,
                  sortField: this._sortFieldByDocumentTypeSlug,
                  sortDirection: this._sortDirectionByDocumentTypeSlug,
                  filters: this._filterDataByDocumentTypeSlugAndFilterField,
                  facets: this._facetDataByDocumentTypeSlug,
                }
              ),
              e = this;
            return (
              $.each(VALID_OPTIONAL_SETTINGS, function (n, i) {
                t[i] = e[i];
              }),
              t
            );
          }),
          (pQuery.apiAjaxDataParameters = function () {
            var t = this,
              e = { q: this._queryText, page: this._pageNumber };
            return (
              Swiftype.Utils.isEmptyObject(this._sortFieldByDocumentTypeSlug) ||
                Swiftype.Utils.isEmptyObject(
                  this._sortDirectionByDocumentTypeSlug
                ) ||
                ((e.sort_field = this._sortFieldByDocumentTypeSlug),
                (e.sort_direction = this._sortDirectionByDocumentTypeSlug)),
              Swiftype.Utils.isEmptyObject(
                this._filterDataByDocumentTypeSlugAndFilterField
              ) ||
                (e.filters = this._filterDataByDocumentTypeSlugAndFilterField),
              Swiftype.Utils.isEmptyObject(this._facetDataByDocumentTypeSlug) ||
                (e.facets = this._facetDataByDocumentTypeSlug),
              $.each(VALID_OPTIONAL_SETTINGS, function (n, i) {
                t[i] && (e[i] = t[i]);
              }),
              e
            );
          }),
          (pQuery.queryType = function () {
            return this._queryType;
          }),
          (pQuery.toCacheKey = function () {
            return JSON.stringify(this._toObject());
          }),
          (pQuery.isEqualToQuery = function (t) {
            return (
              !!t &&
              Swiftype.Utils.compareObjects(this._toObject(), t._toObject())
            );
          }),
          (pQuery.isEmptyQuery = function () {
            return (
              null === this._queryText || "undefined" == typeof this._queryText
            );
          }),
          (pQuery.clone = function () {
            var t = new Swiftype.Query(this._queryType);
            return (
              t.setQueryText(this.getQueryText()),
              t.setPageNumber(this.getPageNumber()),
              t.setSortField(this.getSortFieldByDocumentTypeSlug()),
              t.setSortDirection(this.getSortDirectionByDocumentTypeSlug()),
              t.setFilterData(
                this.getFilterDataByDocumentTypeSlugAndFilterField()
              ),
              t.setFacetData(this.getFacetDataByDocumentTypeSlug()),
              t.setOptionalSettings(this.getOptionlSettings()),
              t
            );
          }),
          (pQuery.setPageNumber = function (t) {
            this._pageNumber = t;
          }),
          (pQuery.setSortField = function (t) {
            this._sortFieldByDocumentTypeSlug = t;
          }),
          (pQuery.setSortDirection = function (t) {
            this._sortDirectionByDocumentTypeSlug = t;
          }),
          (pQuery.setFilterData = function (t) {
            this._filterDataByDocumentTypeSlugAndFilterField = t;
          }),
          (pQuery.setFacetData = function (t) {
            this._facetDataByDocumentTypeSlug = t;
          }),
          (pQuery.getPageNumber = function () {
            return this._pageNumber || 1;
          }),
          (pQuery.setSortFieldByDocumentTypeSlug = function (t, e) {
            null !== e
              ? (this._sortFieldByDocumentTypeSlug[t] = e)
              : Swiftype.Utils.safelyDeleteProperty(
                  t,
                  this._sortFieldByDocumentTypeSlug
                );
          }),
          (pQuery.setSortDirectionByDocumentTypeSlug = function (t, e) {
            null !== e
              ? (this._sortDirectionByDocumentTypeSlug[t] = e)
              : Swiftype.Utils.safelyDeleteProperty(
                  t,
                  this._sortDirectionByDocumentTypeSlug
                );
          }),
          (pQuery.getSortFieldByDocumentTypeSlug = function () {
            return this._sortFieldByDocumentTypeSlug;
          }),
          (pQuery.getSortDirectionByDocumentTypeSlug = function () {
            return this._sortDirectionByDocumentTypeSlug;
          });
        var VALID_OPTIONAL_SETTINGS = [
          "draft_name",
          "test_fields",
          "test_document_type_slug",
          "engine_context",
        ];
        (pQuery.getOptionlSettings = function () {
          var t = {},
            e = this;
          return (
            $.each(VALID_OPTIONAL_SETTINGS, function (n, i) {
              t[i] = e[i];
            }),
            t
          );
        }),
          (pQuery.setOptionalSettings = function (t) {
            var e = this;
            $.each(t, function (t, n) {
              VALID_OPTIONAL_SETTINGS.indexOf(t) > -1 && (e[t] = n);
            });
          }),
          (pQuery.setFilterDataByDocumentTypeSlugAndFilterField = function (
            t,
            e,
            n
          ) {
            null !== n && null !== e
              ? ((this._filterDataByDocumentTypeSlugAndFilterField[t] =
                  this._filterDataByDocumentTypeSlugAndFilterField[t] || {}),
                (this._filterDataByDocumentTypeSlugAndFilterField[t][e] = n))
              : this._filterDataByDocumentTypeSlugAndFilterField[t] &&
                (Swiftype.Utils.safelyDeleteProperty(
                  e,
                  this._filterDataByDocumentTypeSlugAndFilterField[t]
                ),
                $.isEmptyObject(
                  this._filterDataByDocumentTypeSlugAndFilterField[t]
                ) &&
                  Swiftype.Utils.safelyDeleteProperty(
                    t,
                    this._filterDataByDocumentTypeSlugAndFilterField
                  ));
          }),
          (pQuery.setFacetDataByDocumentTypeSlug = function (t, e) {
            if (null !== e) {
              var n = this._facetDataByDocumentTypeSlug[t];
              n
                ? n.indexOf(e) < 0 &&
                  (this._facetDataByDocumentTypeSlug[t] = n.concat(e))
                : (this._facetDataByDocumentTypeSlug[t] = [].concat(e));
            } else
              Swiftype.Utils.safelyDeleteProperty(
                t,
                this._facetDataByDocumentTypeSlug
              );
          }),
          (pQuery.getFilterDataByDocumentTypeSlugAndFilterField = function () {
            return this._filterDataByDocumentTypeSlugAndFilterField;
          }),
          (pQuery.getFacetDataByDocumentTypeSlug = function () {
            return this._facetDataByDocumentTypeSlug;
          }),
          (pQuery.toAnchorParams = function () {
            return {
              stq: this.getQueryText(),
              stp: this.getPageNumber(),
              sort_field: this.getSortFieldByDocumentTypeSlug(),
              sort_direction: this.getSortDirectionByDocumentTypeSlug(),
              filters: this.getFilterDataByDocumentTypeSlugAndFilterField(),
              facets: this.getFacetDataByDocumentTypeSlug(),
            };
          }),
          (pQuery.toTrackingParams = function () {
            return {
              q: this.getQueryText(),
              page: this.getPageNumber(),
              sort_field: this.getSortFieldByDocumentTypeSlug(),
              sort_direction: this.getSortDirectionByDocumentTypeSlug(),
              filters: this.getFilterDataByDocumentTypeSlugAndFilterField(),
              facets: this.getFacetDataByDocumentTypeSlug(),
            };
          }),
          (pQuery.toTemplateRenderingContext = function () {
            var t = {
              type: this._queryType,
              text: Swiftype.Utils.escapeHtml(this.getQueryText()),
            };
            return this.getPageNumber() && (t.page = this.getPageNumber()), t;
          }),
          (Swiftype.InjectedContent = function (t, e, n, i, r) {
            (this._injectionPoint = t),
              (this._templates = e),
              (this._templateName = n),
              (this._locale = i),
              (this._localizationMessages = r);
          });
        var pInjectedContent = Swiftype.InjectedContent.prototype;
        (pInjectedContent.attach = function () {
          var t = Swiftype.Utils.getCompiledTemplate(
            this._templates,
            this._templateName,
            this._locale,
            this._localizationMessages
          );
          if (t) {
            var e = {},
              n = t.render(e);
            this._injectionPoint.html(n);
          }
        }),
          (Swiftype.ConstantCrawl = function (t) {
            this._endpoint = t;
          });
        var pConstantCrawl = Swiftype.ConstantCrawl.prototype;
        (pConstantCrawl.attach = function () {
          var t = new Image(),
            e = {};
          (e.url = window.location.href),
            "" !== document.referrer && (e.r = document.referrer),
            (t.src = Swiftype.Utils.addParamsToUrl(this._endpoint, e));
        }),
          (Swiftype.QueryElementLocator = function (t, e, n, i) {
            (this._install = t),
              (this._baseScope = $(e)),
              (this._objectClassNameToCssSelectorArrayHash = n),
              (this._classContainingObject = i);
          });
        var pQueryElementLocator = Swiftype.QueryElementLocator.prototype;
        (pQueryElementLocator.toString = function () {
          return (
            "[Swiftype.QueryElementLocator for " +
            this._install +
            ", base scope " +
            this._baseScope +
            ", hash " +
            this._objectClassNameToCssSelectorArrayHash +
            "]"
          );
        }),
          (pQueryElementLocator.log = function (t, e, n) {
            this._install.log(t, e, n);
          });
        var INSTALL_KEY_DATA_ATTRIBUTE_NAME = "st-install-key";
        (pQueryElementLocator.belongsToInstall = function (t, e) {
          var n,
            i = this;
          return (
            $(t)
              .parents()
              .addBack(t)
              .each(function (t, e) {
                return !(n = Swiftype.Utils.getDataOrClassValue(
                  e,
                  INSTALL_KEY_DATA_ATTRIBUTE_NAME
                ));
              }),
            n
              ? i._install.matchesKey(n)
              : !e && this._install.isDefaultInstall()
          );
        }),
          (pQueryElementLocator.allocateToInstall = function (t) {
            if (!this.belongsToInstall(t, !0)) {
              var e = this._install.getInstallDataAttribute();
              t.attr("data-" + INSTALL_KEY_DATA_ATTRIBUTE_NAME, e),
                t.addClass("st-install-" + e);
            }
          }),
          (pQueryElementLocator.forEachMatchingElement = function (t) {
            var e = this;
            if (!this._objectClassNameToCssSelectorArrayHash)
              throw "objectClassNameToCssSelectorArrayHash is falsey";
            $.each(
              this._objectClassNameToCssSelectorArrayHash,
              function (n, i) {
                var r = e._classContainingObject[n];
                if (!r)
                  throw (
                    "There is no object class named '" +
                    n +
                    "' in: " +
                    e._classContainingObject
                  );
                $.each(i, function (n, i) {
                  e._baseScope.find(i).each(function (n, i) {
                    e.belongsToInstall(i) && t.call(i, r, i, n);
                  });
                });
              }
            );
          }),
          (Swiftype.QueryContext = function (t, e, n, i, r, o) {
            (this._install = t),
              (this._queryType = e),
              (this._searchCache = new Swiftype.LRUCache(100)),
              (this._queryComposer = new Swiftype.QueryComposer(
                this,
                i,
                r.query_composer,
                o.query_filter
              )),
              (this._resultsDisplay = new Swiftype.ResultsDisplay(
                this,
                n,
                i,
                r.results_display,
                o.result_clicked_filter
              )),
              (this._uiConfiguration = r);
          });
        var pQueryContext = Swiftype.QueryContext.prototype;
        (pQueryContext.toString = function () {
          return (
            "[Swiftype.QueryContext '" +
            this._queryType +
            "' for " +
            this._install +
            "]"
          );
        }),
          (pQueryContext.getInstall = function () {
            return this._install;
          }),
          (pQueryContext.getQueryComposer = function () {
            return this._queryComposer;
          });
        var EMPTY_QUERY_RESULTS = {
          errors: {},
          info: {},
          record_count: 0,
          records: {},
        };
        (pQueryContext._createResultsForEmptyQuery = function (t) {
          return new Swiftype.Results(
            t,
            EMPTY_QUERY_RESULTS,
            this._install.getPrimaryDocType()
          );
        }),
          (pQueryContext.setVisibility = function (t, e) {
            var n = e;
            if (
              ("toggle" === n && (n = !this.getVisibility(t)),
              n !== !0 && n !== !1)
            )
              throw "Invalid newState for setVisibility: '" + n + "'";
            switch (t) {
              case "queryComposer":
                this._queryComposer.setVisible(n);
                break;
              case "resultsDisplay":
                this._resultsDisplay.setVisible(n);
                break;
              case "all":
                this._queryComposer.setVisible(n),
                  this._resultsDisplay.setVisible(n);
                break;
              default:
                throw "Invalid target for visibility: '" + t + "'";
            }
          }),
          (pQueryContext.getVisibility = function (t) {
            switch (t) {
              case "queryComposer":
                return this._queryComposer.isVisible();
              case "resultsDisplay":
                return this._resultsDisplay.isVisible();
              case "all":
                return (
                  this._queryComposer.isVisible() &&
                  this._resultsDisplay.isVisible()
                );
              case "any":
                return (
                  this._queryComposer.isVisible() ||
                  this._resultsDisplay.isVisible()
                );
              default:
                throw "Invalid target for visibility: '" + t + "'";
            }
          }),
          (pQueryContext.visibilityChanged = function (t, e) {
            this._fireListeners("visibilityChanged", t, e);
          }),
          (pQueryContext._isSearchContext = function () {
            return "search" === this._queryType;
          }),
          (pQueryContext.pushQueryToGA = function (t) {
            this._isSearchContext() &&
              Swiftype.Utils.pushToGA(t.getQueryText());
          }),
          (pQueryContext.cookieSearchQuery = function (t) {
            this._isSearchContext() && this.getInstall().cookieSearchQuery(t);
          }),
          (pQueryContext.setupUi = function () {
            this._isSearchContext() &&
              (this._queryComposer.addAnchorHashInput(),
              this._resultsDisplay.addAnchorHashOutput()),
              this._queryComposer.modifyDomAsNeeded(),
              this._resultsDisplay.modifyDomAsNeeded(),
              this._queryComposer.attach(),
              this._resultsDisplay.attach(),
              this.setVisibility(
                "queryComposer",
                this._uiConfiguration.query_composer.initially_visible
              ),
              this.setVisibility(
                "resultsDisplay",
                this._uiConfiguration.results_display.initially_visible
              ),
              this._queryComposer.uiSetupComplete(),
              this._resultsDisplay.uiSetupComplete();
          }),
          (pQueryContext.newQuery = function () {
            return new Swiftype.Query(this._queryType);
          }),
          (pQueryContext._searchResultsCacheHit = function (t) {
            this._searchResultsAvailable(t);
          }),
          (pQueryContext._searchResultsDidReturn = function (t) {
            this.log(this, DEBUG, "Server responded with results: " + t),
              this._searchCache.put(t.getQuery().toCacheKey(), t),
              this._searchResultsAvailable(t),
              this._queryComposer.propagateQuery();
          }),
          (pQueryContext._searchResultsDidFail = function (t, e, n) {
            this.log(
              this,
              "warn",
              "Server could not perform query " + t + ": " + n
            );
          }),
          (pQueryContext._searchResultsCacheMiss = function (t) {
            this._install.performSearch(
              t,
              this._searchResultsDidReturn.bind(this),
              this._searchResultsDidFail.bind(this)
            );
          }),
          (pQueryContext._getListeners = function () {
            return [this._queryComposer, this._resultsDisplay];
          }),
          (pQueryContext._fireListeners = function (t) {
            var e = [];
            (e = e.concat(Array.prototype.slice.call(arguments, 1))),
              $.each(this._getListeners(), function (n, i) {
                i[t] && i[t].apply(i, e);
              });
          }),
          (pQueryContext._searchResultsAvailable = function (t) {
            this._fireListeners("searchResultsAvailable", t);
          }),
          (pQueryContext.log = function (t, e, n) {
            this._install.log(t, e, n);
          }),
          (pQueryContext.currentQueryDidChange = function (t, e) {
            this._install.currentQueryDidChange(this, t, e);
          }),
          (pQueryContext.someQueryChanged = function (t, e, n) {
            this._fireListeners("someQueryChanged", t, e, n);
          }),
          (pQueryContext._charactersRequiredToQuery = function () {
            return (
              this._uiConfiguration.query_composer
                .characters_required_to_query || 0
            );
          }),
          (pQueryContext.canRunQuery = function (t) {
            var e = t.getQueryText();
            return !(
              "string" == typeof e &&
              e.length > 0 &&
              e.length < this._charactersRequiredToQuery()
            );
          }),
          (pQueryContext.findQueryElements = function (t) {
            var e = this._queryComposer.findQueryInputs(t),
              n = this._resultsDisplay.findQueryOutputs(t);
            return e.concat(n);
          }),
          (pQueryContext.getSearchResults = function (t) {
            t.isEmptyQuery()
              ? this._searchResultsCacheHit(this._createResultsForEmptyQuery(t))
              : this._searchResultsCacheMiss(t);
          }),
          (pQueryContext.sendToSearchResult = function (t, e, n) {
            return this._install.sendToSearchResult(t, e, n);
          }),
          (pQueryContext.sendUserToSearchResultsPageIfNecessary = function (t) {
            return !(
              !this._isSearchContext() ||
              this._install.onSearchResultsPage() ||
              (this._install.sendUserToSearchResultsPageFor(t), 0)
            );
          }),
          (Swiftype.QueryComposer = function (t, e, n, i) {
            (this._context = t),
              (this._uiBindings = e),
              (this._uiConfiguration = n),
              (this._queryFilterHook = i),
              (this._currentQuery = null),
              (this._queryInputs = []),
              (this._lastActiveQueryInputs = {}),
              (this._permanentQueryTransforms = []);
          });
        var pQueryComposer = Swiftype.QueryComposer.prototype;
        (pQueryComposer.toString = function () {
          return "[Swiftype.QueryComposer on " + this._context + "]";
        }),
          (pQueryComposer.log = function (t, e, n) {
            this._context.log(t, e, n);
          }),
          (pQueryComposer.setVisible = function (t) {
            (t = !!t),
              ("undefined" != typeof this._visible && t === this._visible) ||
                ((this._visible = t),
                this._context.visibilityChanged("queryComposer", t));
          }),
          (pQueryComposer.isVisible = function () {
            return !!this._visible;
          }),
          (pQueryComposer._addQueryInput = function (t) {
            t.validate() ? this._queryInputs.push(t) : t.handleInvalid();
          }),
          (pQueryComposer._getInstall = function () {
            return this._context.getInstall();
          }),
          (pQueryComposer._findAndAddQueryInputs = function () {
            var t = new Swiftype.QueryElementLocator(
                this._getInstall(),
                document,
                this._uiBindings.inputs,
                Swiftype.QueryInputs
              ),
              e = this;
            t.forEachMatchingElement(function (t, n) {
              var i = new t(e, n, e._templates);
              e._addQueryInput(i);
            });
          }),
          (pQueryComposer.addAnchorHashInput = function () {
            this._uiConfiguration.disable_anchor_hash_params ||
              this._addQueryInput(
                new Swiftype.QueryInputs.InputAnchorHash(this)
              );
          }),
          (pQueryComposer.modifyDomAsNeeded = function () {}),
          (pQueryComposer.attach = function () {
            this._findAndAddQueryInputs(),
              $.each(this._queryInputs, function (t, e) {
                e.attach(), e.setLastActive();
              });
          }),
          (pQueryComposer.findQueryInputs = function (t) {
            var e = [];
            return (
              $.each(this._queryInputs, function (n, i) {
                t(i) && e.push(i);
              }),
              e
            );
          }),
          (pQueryComposer.addToPermanentQueryTransforms = function (t) {
            this._permanentQueryTransforms.push(t);
          }),
          (pQueryComposer._normalizeQuery = function (t) {
            if (
              (this._permanentQueryTransforms.length > 0 &&
                $.each(this._permanentQueryTransforms, function (e, n) {
                  n(t);
                }),
              this._queryFilterHook)
            ) {
              var e = t.clone();
              t = this._queryFilterHook(e) === !1 ? null : e.clone();
            }
            return t;
          }),
          (pQueryComposer._setAndPropagateQuery = function (t) {
            (this._currentQuery = t), this.propagateQuery();
          }),
          (pQueryComposer.propagateQuery = function () {
            var t = this;
            $.each(this._queryInputs, function (e, n) {
              n.propagateQuery(t._currentQuery);
            });
          }),
          (pQueryComposer._composeSearch = function (t) {
            var e = null;
            return (
              t
                ? ((e = this._currentQuery
                    ? this._currentQuery.clone()
                    : this._context.newQuery()),
                  t(e))
                : ((e = this._context.newQuery()),
                  $.each(this._queryInputs, function (t, n) {
                    n.updateQuery(e);
                  })),
              this._normalizeQuery(e)
            );
          }),
          (pQueryComposer.runSearch = function (t) {
            var e = this._composeSearch(t);
            return (
              null !== e &&
              !!this._context.canRunQuery(e) &&
              (this._context.cookieSearchQuery(e),
              this._context.pushQueryToGA(e),
              !this._context.sendUserToSearchResultsPageIfNecessary(e) &&
                (this._setAndPropagateQuery(e),
                this._context.setVisibility("resultsDisplay", !0),
                this._context.getSearchResults(this._currentQuery),
                !0))
            );
          }),
          (pQueryComposer.uiSetupComplete = function () {
            $.each(this._queryInputs, function (t, e) {
              e.uiSetupComplete && e.uiSetupComplete();
            });
          }),
          (pQueryComposer.searchResultsAvailable = function (t) {
            this._currentQuery &&
              this._currentQuery.isEqualToQuery(t.getQuery()) &&
              this._context.currentQueryDidChange(this, t);
          }),
          (pQueryComposer.setLastActiveQueryInput = function (t, e) {
            this._lastActiveQueryInputs[t] !== e &&
              (this.log(
                this,
                DEBUG,
                "Setting last active input for '" + t + "' to: " + e.toString()
              ),
              (this._lastActiveQueryInputs[t] = e));
          }),
          (pQueryComposer.isLastActiveQueryInput = function (t, e) {
            return this._lastActiveQueryInputs[t] === e;
          }),
          (pQueryComposer.someQueryChanged = function (t) {
            t !== this._context &&
              this._uiConfiguration.hide_on_other_query &&
              this._context.setVisible(!1);
          }),
          (pQueryComposer.windowResized = function (t) {
            $.each(this._queryInputs, function (e, n) {
              n.windowResized(t);
            });
          }),
          (pQueryComposer.anchorHashChanged = function (t) {
            var e, n;
            this._currentQuery &&
              ((e = this._currentQuery.clone()),
              (n = this._context.newQuery()),
              n.mutateFromPageAnchor(t)),
              (this._currentQuery && e.isEqualToQuery(n)) ||
                $.each(this._queryInputs, function (e, n) {
                  n.anchorHashChanged(t);
                });
          }),
          (Swiftype.QueryInputs = Swiftype.QueryInputs || {}),
          (Swiftype.QueryInputs.Base = function (t, e) {
            (this._queryComposer = t), (this._element = $(e));
          });
        var pQueryInputBase = Swiftype.QueryInputs.Base.prototype;
        (pQueryInputBase.toString = function () {
          return (
            "[" +
            this._className +
            " on " +
            Swiftype.Utils.describeElement(this._element) +
            " for " +
            this._queryComposer +
            "]"
          );
        }),
          (pQueryInputBase.log = function (t, e, n) {
            this._queryComposer.log(t, e, n);
          }),
          (pQueryInputBase._describeElement = function (t) {
            return Swiftype.Utils.describeElement(t);
          }),
          (pQueryInputBase.validate = function () {
            return !0;
          }),
          (pQueryInputBase.getElement = function () {
            return $(this._element);
          }),
          (pQueryInputBase.isDefaultTargetFor = function () {
            return !1;
          }),
          (pQueryInputBase.setLastActive = function () {
            this._inputCategory &&
              this._queryComposer.setLastActiveQueryInput(
                this._inputCategory,
                this
              );
          }),
          (pQueryInputBase._isLastActive = function () {
            return this._queryComposer.isLastActiveQueryInput(
              this._inputCategory,
              this
            );
          }),
          (pQueryInputBase.attach = function () {}),
          (pQueryInputBase._updateQuery = function () {}),
          (pQueryInputBase.updateQuery = function (t) {
            this._isLastActive() && this._updateQuery(t);
          }),
          (pQueryInputBase.propagateQuery = function (t) {
            this._changeToReflectSearch(t);
          }),
          (pQueryInputBase.windowResized = function () {}),
          (pQueryInputBase.anchorHashChanged = function () {}),
          (pQueryInputBase._changeToReflectSearch = function () {}),
          (pQueryInputBase.handleInvalid = function () {}),
          (Swiftype.AnchorParams = function (t, e) {
            (t = this._universalAnchorString(t)),
              this._anchorStringToHash(t),
              e && this._updateAnchorHash(e);
          });
        var pAnchorParams = Swiftype.AnchorParams.prototype;
        (pAnchorParams._universalAnchorString = function (t) {
          var e = t;
          return e ? "#" === e[0] && (e = e.substring(1)) : (e = ""), e;
        }),
          (pAnchorParams.toAnchorString = function () {
            return Swiftype.Utils.convertObjectToQueryParams(this._anchorHash);
          }),
          (pAnchorParams._anchorStringToHash = function (t) {
            this._anchorHash = Swiftype.Utils.convertQueryParamsToObject(t);
          }),
          (pAnchorParams._updateAnchorHash = function (t) {
            var e = this;
            $.each(t, function (t, n) {
              e._anchorHash[t] = n || "";
            });
          }),
          (pAnchorParams.getValue = function (t) {
            return this._anchorHash[t];
          }),
          (pAnchorParams.hasKey = function (t) {
            return Object.prototype.hasOwnProperty.call(this._anchorHash, t);
          }),
          (Swiftype.QueryInputs.InputAnchorHash = function (t) {
            Swiftype.QueryInputs.Base.call(this, t),
              (this._className = "Swiftype.QueryInputs.InputAnchorHash"),
              (this._inputCategory = "searchText");
          }),
          (Swiftype.QueryInputs.InputAnchorHash.prototype =
            Swiftype.Utils.createObject(Swiftype.QueryInputs.Base.prototype));
        var pInputAnchorHash = Swiftype.QueryInputs.InputAnchorHash.prototype;
        (pInputAnchorHash._getInstallHashManager = function () {
          return this._queryComposer._getInstall().getHashManager();
        }),
          (pInputAnchorHash._updateQuery = function (t) {
            var e = this._getInstallHashManager().getAnchorParams();
            t.mutateFromPageAnchor(e);
          }),
          (pInputAnchorHash.uiSetupComplete = function () {
            this._getInstallHashManager().getAnchorParams().hasKey("stq") &&
              (this.setLastActive(), this._queryComposer.runSearch());
          }),
          (pInputAnchorHash.anchorHashChanged = function (t) {
            t.hasKey("stq") &&
              (this.setLastActive(), this._queryComposer.runSearch());
          }),
          (Swiftype.QueryInputs.QueryTextField = function (t, e) {
            Swiftype.QueryInputs.Base.call(this, t, e),
              (this._className = "Swiftype.QueryInputs.QueryTextField"),
              (this._inputCategory = "searchText");
          }),
          (Swiftype.QueryInputs.QueryTextField.prototype =
            Swiftype.Utils.createObject(Swiftype.QueryInputs.Base.prototype));
        var pQueryTextField = Swiftype.QueryInputs.QueryTextField.prototype;
        (pQueryTextField.validate = function () {
          return !(
            !Swiftype.QueryInputs.Base.prototype.validate.call(this) ||
            (!Swiftype.Utils.isInputLikeElement(this._element) &&
              (this.log(
                this,
                WARN,
                "QueryTextField can only be specified for 'input' or 'textarea' elements. Currently specified on " +
                  this._describeElement(this._element)
              ),
              1))
          );
        }),
          (pQueryTextField.isDefaultTargetFor = function () {
            return !0;
          }),
          (pQueryTextField._updateQuery = function (t) {
            var e = this._element.val();
            Swiftype.Utils.isBlank(e) || t.setQueryText(e);
          }),
          (pQueryTextField._getIEVersion = function () {
            return (
              this._ieVersion || (this._ieVersion = Swiftype.Utils.ieVersion()),
              this._ieVersion
            );
          }),
          (pQueryTextField._changeToReflectSearch = function (t) {
            t.isEmptyQuery()
              ? this._element.val("")
              : this._element.is(":focus") ||
                this._element.val(t.getQueryText());
          }),
          (pQueryTextField.attach = function () {
            this._element
              .attr("autocomplete", "off")
              .attr("autocorrect", "off")
              .attr("autocapitalize", "off");
          }),
          (Swiftype.QueryInputs.SubmitTextField = function (t, e) {
            Swiftype.QueryInputs.QueryTextField.call(this, t, e),
              (this._className = "Swiftype.QueryInputs.SubmitTextField"),
              (this._inputCategory = "searchText");
          }),
          (Swiftype.QueryInputs.SubmitTextField.prototype =
            Swiftype.Utils.createObject(
              Swiftype.QueryInputs.QueryTextField.prototype
            ));
        var pSubmitTextField = Swiftype.QueryInputs.SubmitTextField.prototype;
        (pSubmitTextField.attach = function () {
          var t = this;
          Swiftype.Utils.bindOnEventsTo(t._element, "input", function () {
            t.setLastActive();
          }),
            Swiftype.Utils.bindOnEventsTo(t._element, "keydown", function (e) {
              13 === e.which &&
                (t._element.blur(),
                t.setLastActive(),
                e.preventDefault(),
                t._queryComposer.runSearch());
            }),
            Swiftype.Utils.bindOnEventsTo(
              t._element
                .parents("form")
                .not('[name="aspnetForm"]')
                .not("#aspnetForm"),
              "submit",
              function (e) {
                t.setLastActive(),
                  e.preventDefault(),
                  t._queryComposer.runSearch();
              }
            ),
            Swiftype.QueryInputs.QueryTextField.prototype.attach.call(t);
        }),
          (Swiftype.QueryInputs.KeypressTextField = function (t, e) {
            Swiftype.QueryInputs.QueryTextField.call(this, t, e),
              (this._className = "Swiftype.QueryInputs.KeypressTextField"),
              (this._inputCategory = "suggestText");
          }),
          (Swiftype.QueryInputs.KeypressTextField.prototype =
            Swiftype.Utils.createObject(
              Swiftype.QueryInputs.QueryTextField.prototype
            ));
        var pKeypressTextField =
          Swiftype.QueryInputs.KeypressTextField.prototype;
        (pKeypressTextField.attach = function () {
          var t = this;
          Swiftype.Utils.bindOnEventsTo(this._element, "input", function (e) {
            t.setLastActive(), e.preventDefault(), t._queryComposer.runSearch();
          }),
            Swiftype.QueryInputs.QueryTextField.prototype.attach.call(this);
        }),
          (Swiftype.QueryInputs.Trigger = function (t, e) {
            Swiftype.QueryInputs.Base.call(this, t, e),
              (this._className = "Swiftype.QueryInputs.Trigger"),
              (this._inputCategory = "trigger");
          }),
          (Swiftype.QueryInputs.Trigger.prototype = Swiftype.Utils.createObject(
            Swiftype.QueryInputs.Base.prototype
          ));
        var pTrigger = Swiftype.QueryInputs.Trigger.prototype;
        (pTrigger.attach = function () {
          var t = this;
          Swiftype.Utils.bindOnEventsTo(this._element, "click", function (e) {
            t.setLastActive(), e.preventDefault(), t._queryComposer.runSearch();
          });
        }),
          (Swiftype.QueryInputs.PaginationInput = function (t, e) {
            Swiftype.QueryInputs.Base.call(this, t, e),
              (this._className = "Swiftype.QueryInputs.PaginationInput"),
              (this._inputCategory = "pagination");
          }),
          (Swiftype.QueryInputs.PaginationInput.prototype =
            Swiftype.Utils.createObject(Swiftype.QueryInputs.Base.prototype));
        var pPaginationInput = Swiftype.QueryInputs.PaginationInput.prototype;
        (pPaginationInput._maybeChangeToPageNumber = function (t, e) {
          if (
            ("string" == typeof t &&
              t.match(/^\s*\d+\s*$/) &&
              (t = parseInt(t)),
            "number" != typeof t)
          )
            return !1;
          t > 0 &&
            (this.setLastActive(),
            e.preventDefault(),
            this._queryComposer.runSearch(function (e) {
              e.setPageNumber(t);
            }));
        }),
          (pPaginationInput.attach = function () {
            var t = this;
            Swiftype.Utils.bindOnEventsTo(
              this._element,
              "click",
              "[data-st-page]",
              function (e) {
                t._maybeChangeToPageNumber($(this).data("st-page"), e);
              }
            ),
              Swiftype.Utils.bindOnEventsTo(
                this._element,
                "change",
                function (e) {
                  var n = $(this).find(":selected"),
                    i = $(n).data("st-page");
                  t._maybeChangeToPageNumber(i, e);
                }
              );
          }),
          (Swiftype.QueryInputs.RefiningInput = function (t, e) {
            Swiftype.QueryInputs.Base.call(this, t, e),
              (this._className = "Swiftype.QueryInputs.RefiningInput"),
              (this._inputCategory = "refining");
          }),
          (Swiftype.QueryInputs.RefiningInput.prototype =
            Swiftype.Utils.createObject(Swiftype.QueryInputs.Base.prototype));
        var pRefiningInput = Swiftype.QueryInputs.RefiningInput.prototype;
        (pRefiningInput.attach = function () {
          var t = this;
          this._setClassAttributes(),
            Swiftype.Utils.bindOnEventsTo(
              this._element,
              "click",
              t._dataElementIdentifierSelector,
              function (e) {
                e.preventDefault(), t._currentStateChanged(this);
              }
            ),
            Swiftype.Utils.bindOnEventsTo(
              this._element,
              "change",
              "select",
              function (e) {
                var n = $(this).find(":selected");
                $(n).hasClass(t._elementIdentifierClass) &&
                  (e.preventDefault(), t._currentStateChanged(n));
              }
            );
        }),
          (pRefiningInput.validate = function () {
            return (
              this._setClassAttributes(),
              this._elementMusthaveDataAttributes(
                this._element,
                this._dataDocumentTypePostfix
              )
            );
          }),
          (pRefiningInput._elementMusthaveDataAttributes = function (t, e, n) {
            e = [].concat(e);
            var i = this,
              r = !0;
            return (
              $.each(e, function (e, o) {
                var s = i._toDataAttribute(o),
                  a = Swiftype.Utils.getDataOrClassValue(t, o),
                  l = i._element.find("." + o).length > 0;
                a !== undefined || l
                  ? !Swiftype.Utils.isBlank(a) ||
                    n ||
                    l ||
                    (i.log(
                      i,
                      WARN,
                      "Element's data attribute " +
                        s +
                        " should have a valid/none empty value; check " +
                        i._describeElement(this._element)
                    ),
                    (r = !1))
                  : (i.log(
                      i,
                      WARN,
                      "Element must have data attribute " +
                        s +
                        " or respective class; you may need to add it to: " +
                        i._describeElement(this._element)
                    ),
                    (r = !1));
              }),
              r
            );
          }),
          (pRefiningInput._describeElement = function (t) {
            Swiftype.Utils.describeElement(t);
          }),
          (pRefiningInput._toDataAttribute = function (t) {
            return "data-" + t;
          }),
          (pRefiningInput._setClassAttributes = function () {
            (this._dataDocumentTypePostfix = "st-document-type"),
              (this._elementIdentifierClass =
                "st-" + this._inputCategory + "-element"),
              (this._dataElementIdentifierSelector =
                "." + this._elementIdentifierClass),
              (this._activeClass =
                "st-" + this._inputCategory + "-active-item"),
              (this._activeSelector = "." + this._activeClass),
              (this._dataFieldPostfix = "st-document-field"),
              (this._dataValuesPostfix =
                "st-" + this._inputCategory + "-values"),
              (this._dataTypePostfix = "st-" + this._inputCategory + "-type"),
              (this._dataDirectionPostfix =
                "st-" + this._inputCategory + "-direction"),
              (this._dataFromPostfix = "st-" + this._inputCategory + "-from"),
              (this._dataToPostfix = "st-" + this._inputCategory + "-to"),
              (this._documentType = this._getDocumentTypeForElement(
                this._element
              ));
          }),
          (pRefiningInput._markDomElementAsActive = function (t, e) {
            var n = this._activeClass || "active";
            (t = $(t)), e ? t.addClass(n) : t.removeClass(n);
          }),
          (pRefiningInput._propActiveElements = function () {
            var t = this._activeClass || "active",
              e = this;
            $.each(this._getAllElements(), function (n, i) {
              (i = $(i)),
                (!i.hasClass(t) && i.attr(":checked")) ||
                (i.hasClass(t) && !i.attr(":checked"))
                  ? e._propElementCheckedWithRetry(i, !0)
                  : e._propElementCheckedWithRetry(i, !1),
                i.hasClass(t) ? i.prop("selected", !0) : i.prop("selected", !1);
            });
          }),
          (pRefiningInput._propElementCheckedWithRetry = function (t, e) {
            t.prop("checked", e),
              setTimeout(function () {
                t.prop("checked") !== e && t.prop("checked", e);
              }, 300);
          }),
          (pRefiningInput._getAllElements = function () {
            return $(this._element).find(this._dataElementIdentifierSelector);
          }),
          (pRefiningInput._getValuesForElement = function (t) {
            return Swiftype.Utils.getDataOrClassValue(
              t,
              this._dataValuesPostfix
            );
          }),
          (pRefiningInput._getFromForElement = function (t) {
            return Swiftype.Utils.getDataOrClassValue(t, this._dataFromPostfix);
          }),
          (pRefiningInput._getToForElement = function (t) {
            return Swiftype.Utils.getDataOrClassValue(t, this._dataToPostfix);
          }),
          (pRefiningInput._getTypeForElement = function (t) {
            return Swiftype.Utils.getDataOrClassValue(t, this._dataTypePostfix);
          }),
          (pRefiningInput._getDirectionForElement = function (t) {
            return Swiftype.Utils.getDataOrClassValue(
              t,
              this._dataDirectionPostfix
            );
          }),
          (pRefiningInput._getDocumentFieldForElement = function (t) {
            return Swiftype.Utils.getDataOrClassValue(
              t,
              this._dataFieldPostfix
            );
          }),
          (pRefiningInput._getDocumentTypeForElement = function (t) {
            return Swiftype.Utils.getDataOrClassValue(
              t,
              this._dataDocumentTypePostfix
            );
          }),
          (pRefiningInput._changeToReflectSearch = function () {}),
          (Swiftype.QueryInputs.FilterInput = function (t, e) {
            Swiftype.QueryInputs.RefiningInput.call(this, t, e),
              (this._className = "Swiftype.QueryInputs.FilterInput"),
              (this._inputCategory = "filter");
          }),
          (Swiftype.QueryInputs.FilterInput.prototype =
            Swiftype.Utils.createObject(
              Swiftype.QueryInputs.RefiningInput.prototype
            ));
        var pFilterInput = Swiftype.QueryInputs.FilterInput.prototype;
        (pFilterInput._setClassAttributes = function () {
          Swiftype.QueryInputs.RefiningInput.prototype._setClassAttributes.call(
            this
          ),
            (this._documentField = this._getDocumentFieldForElement(
              this._element
            ));
        }),
          (pFilterInput.validate = function () {
            var t = this,
              e =
                Swiftype.QueryInputs.RefiningInput.prototype.validate.call(
                  this
                );
            return (
              (e =
                e &&
                this._elementMusthaveDataAttributes(
                  this._element,
                  this._dataFieldPostfix
                )),
              $.each(t._getAllElements(), function (n, i) {
                e =
                  e &&
                  t._elementMusthaveDataAttributes(i, t._dataValuesPostfix);
              }),
              e
            );
          }),
          (pFilterInput._currentStateChanged = function (t) {
            var e = this,
              n = e._getFilterType(t),
              i = e._getFilterValues(t);
            e.setLastActive(),
              e._queryComposer.runSearch(function (t) {
                var r = null;
                n &&
                  i.length > 0 &&
                  ((r = { type: n, values: i }), (t._pageNumber = 1)),
                  t.setFilterDataByDocumentTypeSlugAndFilterField(
                    e._documentType,
                    e._documentField,
                    r
                  );
              });
          }),
          (pFilterInput._getFilterType = function (t) {
            var e = this._getTypeForElement(this._element),
              n = this._getTypeForElement(t);
            return (!n && e) || (e = n), e;
          }),
          (pFilterInput._getFilterValues = function (t) {
            return this._getValuesForElement(t);
          }),
          (pFilterInput._changeToReflectSearch = function (t) {
            var e,
              n = this,
              i =
                t.getFilterDataByDocumentTypeSlugAndFilterField()[
                  this._documentType
                ];
            if (i && (e = i[this._documentField])) {
              var r = e.values;
              (r = [].concat(r)),
                $.each(n._getAllElements(), function (t, e) {
                  var i = n._getValuesForElement(e);
                  i = [].concat(i);
                  var o,
                    s = n._getFilterType(e);
                  $.each(i, function (t, e) {
                    o =
                      e && (r.indexOf(e) >= 0 || r.indexOf(e.toString()) >= 0)
                        ? o === undefined ||
                          Swiftype.Utils.stringOperator(s, o, !0)
                        : o !== undefined &&
                          Swiftype.Utils.stringOperator(s, o, !1);
                  }),
                    n._markDomElementAsActive(e, o);
                });
            }
            (i && e) ||
              $.each(n._getAllElements(), function (t, e) {
                n._markDomElementAsActive(e, !1);
              }),
              this._propActiveElements();
          }),
          (Swiftype.QueryInputs.FilterInputRelatedGroup = function (t, e) {
            Swiftype.QueryInputs.FilterInput.call(this, t, e),
              (this._className =
                "Swiftype.QueryInputs.FilterInputRelatedGroup"),
              (this._inputCategory = "filter");
          }),
          (Swiftype.QueryInputs.FilterInputRelatedGroup.prototype =
            Swiftype.Utils.createObject(
              Swiftype.QueryInputs.FilterInput.prototype
            ));
        var pFilterInputRelatedGroup =
          Swiftype.QueryInputs.FilterInputRelatedGroup.prototype;
        (pFilterInputRelatedGroup.validate = function () {
          return (
            Swiftype.QueryInputs.FilterInput.prototype.validate.call(this) &&
            this._elementMusthaveDataAttributes(
              this._element,
              this._dataTypePostfix
            )
          );
        }),
          (pFilterInputRelatedGroup._getFilterType = function () {
            return this._getTypeForElement(this._element);
          }),
          (pFilterInputRelatedGroup._getFilterValues = function (t) {
            var e = this,
              n = [],
              i = this._getValuesForElement(t);
            $(t).hasClass(this._activeClass) || (n = n.concat(i));
            var r = $(this._element).find(
              this._dataElementIdentifierSelector + this._activeSelector
            );
            return (
              $.each(r, function (r, o) {
                $(o).is($(t)) ||
                  ((i = e._getValuesForElement(o)),
                  n.indexOf(i) === -1 && (n = n.concat(i)));
              }),
              n
            );
          }),
          (Swiftype.QueryInputs.FilterInputRange = function (t, e) {
            Swiftype.QueryInputs.FilterInput.call(this, t, e),
              (this._className = "Swiftype.QueryInputs.FilterInputRange"),
              (this._inputCategory = "filter");
          }),
          (Swiftype.QueryInputs.FilterInputRange.prototype =
            Swiftype.Utils.createObject(
              Swiftype.QueryInputs.FilterInput.prototype
            ));
        var pFilterInputRange = Swiftype.QueryInputs.FilterInputRange.prototype;
        (pFilterInputRange.attach = function () {
          var t = this;
          Swiftype.QueryInputs.FilterInput.prototype.attach.call(this),
            Swiftype.Utils.bindOnEventsTo(
              this._element,
              "field_change",
              this._fromDataClassSelector + "," + this._toDataClassSelector,
              function (e) {
                e.preventDefault(), t._currentStateChanged(this);
              }
            );
        }),
          (pFilterInputRange.validate = function () {
            var t = this,
              e =
                Swiftype.QueryInputs.RefiningInput.prototype.validate.call(
                  this
                );
            return (
              (e =
                e &&
                this._elementMusthaveDataAttributes(
                  this._element,
                  this._dataFieldPostfix
                )),
              $.each(t._getAllElements(), function (n, i) {
                e =
                  e &&
                  t._elementMusthaveDataAttributes(i, [
                    t._dataFromPostfix,
                    t._dataToPostfix,
                  ]);
              }),
              e
            );
          }),
          (pFilterInputRange._setClassAttributes = function () {
            Swiftype.QueryInputs.FilterInput.prototype._setClassAttributes.call(
              this
            ),
              (this._fromDataClassSelector = "." + this._dataFromPostfix),
              (this._toDataClassSelector = "." + this._dataToPostfix);
          }),
          (pFilterInputRange._currentStateChanged = function (t) {
            var e = this,
              n = "range",
              i = e._getFromData(t),
              r = e._getToData(t);
            e.setLastActive(),
              e._queryComposer.runSearch(function (t) {
                var o = null;
                !n ||
                  Swiftype.Utils.isBlank(i) ||
                  Swiftype.Utils.isBlank(r) ||
                  ((o = { type: n, from: i, to: r }), (t._pageNumber = 1)),
                  t.setFilterDataByDocumentTypeSlugAndFilterField(
                    e._documentType,
                    e._documentField,
                    o
                  );
              });
          }),
          (pFilterInputRange._getFromData = function (t) {
            var e = this._getFromForElement(t);
            return Swiftype.Utils.isBlank(e)
              ? this._element.find(this._fromDataClassSelector).first().val()
              : e;
          }),
          (pFilterInputRange._getToData = function (t) {
            var e = this._getToForElement(t);
            return Swiftype.Utils.isBlank(e)
              ? this._element.find(this._toDataClassSelector).first().val()
              : e;
          }),
          (pFilterInputRange._changeToReflectSearch = function (t) {
            var e,
              n = this,
              i =
                t.getFilterDataByDocumentTypeSlugAndFilterField()[
                  this._documentType
                ];
            if (i && (e = i[this._documentField])) {
              var r = e.from,
                o = e.to;
              this._setFromDataOnElement(r), this._setFromToOnElement(o);
              var s = this._element.find(this._sliderBarSelector);
              s.attr("data-from", r),
                s.attr("data-to", o),
                $.each(n._getAllElements(), function (t, e) {
                  var i = n._getFromForElement(e),
                    s = n._getToForElement(e);
                  n._convertToFormat(i, "from") ===
                    n._convertToFormat(r, "from") &&
                  n._convertToFormat(s, "to") === n._convertToFormat(o, "to")
                    ? n._markDomElementAsActive(e, !0)
                    : n._markDomElementAsActive(e, !1);
                });
            }
            (i && e) ||
              $.each(n._getAllElements(), function (t, e) {
                n._markDomElementAsActive(e, !1);
              }),
              this._propActiveElements();
          }),
          (pFilterInputRange._setFromDataOnElement = function (t) {
            this._element.find(this._fromDataClassSelector).val(t);
          }),
          (pFilterInputRange._setFromToOnElement = function (t) {
            this._element.find(this._toDataClassSelector).val(t);
          }),
          (pFilterInputRange._convertToFormat = function (t) {
            return Number(t);
          }),
          (Swiftype.QueryInputs.FilterInputRangeSlidebar = function (t, e) {
            Swiftype.QueryInputs.FilterInputRange.call(this, t, e),
              (this._className =
                "Swiftype.QueryInputs.FilterInputRangeSlidebar"),
              (this._inputCategory = "filter"),
              (this._sliderBarSelector = ".st-filter-range-slidebar");
          }),
          (Swiftype.QueryInputs.FilterInputRangeSlidebar.prototype =
            Swiftype.Utils.createObject(
              Swiftype.QueryInputs.FilterInputRange.prototype
            ));
        var pFilterInputRangeSlidebar =
          Swiftype.QueryInputs.FilterInputRangeSlidebar.prototype;
        (pFilterInputRangeSlidebar.attach = function () {
          var t = this;
          Swiftype.QueryInputs.FilterInputRange.prototype.attach.call(this),
            Swiftype.Utils.bindOnEventsTo(
              this._element,
              "change",
              this._sliderBarSelector,
              function (e) {
                e.preventDefault(), t._fireChangeHiddenFields(t, this);
              }
            );
        }),
          (pFilterInputRangeSlidebar._changeToReflectSearch = function (t) {
            Swiftype.QueryInputs.FilterInputRange.prototype._changeToReflectSearch.call(
              this,
              t
            ),
              this._element.find(this._sliderBarSelector).ionRangeSlider();
          }),
          (pFilterInputRangeSlidebar._fireChangeHiddenFields =
            Swiftype.Utils.debounce(function (t, e) {
              var n = $(e).data("ionRangeSlider");
              n &&
                (t._element.find(t._fromDataClassSelector).val(n.old_from),
                t._element
                  .find(t._toDataClassSelector)
                  .val(n.old_to)
                  .trigger("field_change"));
            }, 500)),
          (Swiftype.QueryInputs.FilterInputRangeDate = function (t, e) {
            Swiftype.QueryInputs.FilterInputRange.call(this, t, e),
              (this._className = "Swiftype.QueryInputs.FilterInputRangeDate"),
              (this._inputCategory = "filter"),
              (this._datePickerSelector = ".st-filter-datepicker");
          }),
          (Swiftype.QueryInputs.FilterInputRangeDate.prototype =
            Swiftype.Utils.createObject(
              Swiftype.QueryInputs.FilterInputRange.prototype
            ));
        var ROME_DATE_FORMAT = "MM-DD-YYYY",
          pFilterInputRangeDate =
            Swiftype.QueryInputs.FilterInputRangeDate.prototype;
        (pFilterInputRangeDate._changeToReflectSearch = function (t) {
          Swiftype.QueryInputs.FilterInputRange.prototype._changeToReflectSearch.call(
            this,
            t
          );
          var e = this._element.find("." + this._dataFromPostfix).first(),
            n = this._element.find("." + this._dataToPostfix).first();
          if (e.length && n.length) {
            (e = e[0]), (n = n[0]);
            var i = rome(e, {
                time: !1,
                dateValidator: rome.val.beforeEq(n),
                inputFormat: ROME_DATE_FORMAT,
              }),
              r = rome(n, {
                time: !1,
                dateValidator: rome.val.afterEq(e),
                inputFormat: ROME_DATE_FORMAT,
              });
            this._element.parents(".st-position-container").scroll(function () {
              $(i.container).is(":visible") && i.show(),
                $(r.container).is(":visible") && r.show();
            });
          }
        }),
          (pFilterInputRangeDate._getFromData = function (t) {
            return new moment(
              Swiftype.QueryInputs.FilterInputRange.prototype._getFromData.call(
                this,
                t
              ),
              ROME_DATE_FORMAT
            ).format();
          }),
          (pFilterInputRangeDate._getToData = function (t) {
            return new moment(
              Swiftype.QueryInputs.FilterInputRange.prototype._getToData.call(
                this,
                t
              ),
              ROME_DATE_FORMAT
            ).format();
          }),
          (pFilterInputRangeDate._setFromDataOnElement = function (t) {
            this._element
              .find(this._fromDataClassSelector)
              .val(moment(t).format(ROME_DATE_FORMAT));
          }),
          (pFilterInputRangeDate._setFromToOnElement = function (t) {
            this._element
              .find(this._toDataClassSelector)
              .val(moment(t).format(ROME_DATE_FORMAT));
          }),
          (Swiftype.QueryInputs.FilterInputPredefinedRangeDate = function (
            t,
            e
          ) {
            Swiftype.QueryInputs.FilterInputRange.call(this, t, e),
              (this._className =
                "Swiftype.QueryInputs.FilterInputPredefinedRangeDate"),
              (this._inputCategory = "filter");
          }),
          (Swiftype.QueryInputs.FilterInputPredefinedRangeDate.prototype =
            Swiftype.Utils.createObject(
              Swiftype.QueryInputs.FilterInputRange.prototype
            ));
        var pFilterInputPredefinedRangeDate =
          Swiftype.QueryInputs.FilterInputPredefinedRangeDate.prototype;
        (pFilterInputPredefinedRangeDate._getFromData = function (t) {
          var e =
            Swiftype.QueryInputs.FilterInputRange.prototype._getFromData.call(
              this,
              t
            );
          return this._beginningOfDay(e);
        }),
          (pFilterInputPredefinedRangeDate._getToData = function (t) {
            var e =
              Swiftype.QueryInputs.FilterInputRange.prototype._getToData.call(
                this,
                t
              );
            return this._endOfDay(e);
          }),
          (pFilterInputPredefinedRangeDate._currentTimestamp = function () {
            return moment().unix();
          }),
          (pFilterInputPredefinedRangeDate._beginningOfDay = function (t) {
            var e = this._toDate(t);
            return e.startOf("day"), e.format();
          }),
          (pFilterInputPredefinedRangeDate._endOfDay = function (t) {
            var e = this._toDate(t);
            return e.endOf("day"), e.format();
          }),
          (pFilterInputPredefinedRangeDate._toDate = function (t) {
            return new moment(1e3 * (t + this._currentTimestamp()));
          }),
          (pFilterInputPredefinedRangeDate._convertToFormat = function (t, e) {
            var n;
            if (isFinite(t))
              switch (((t = Number(t)), e)) {
                case "from":
                  n = this._beginningOfDay(t);
                  break;
                case "to":
                  n = this._endOfDay(t);
                  break;
                default:
                  n = this._beginningOfDay(t);
              }
            else n = t;
            return n;
          }),
          (Swiftype.QueryInputs.FilterInputReset = function (t, e) {
            Swiftype.QueryInputs.FilterInput.call(this, t, e),
              (this._className = "Swiftype.QueryInputs.FilterInputReset"),
              (this._inputCategory = "filter");
          }),
          (Swiftype.QueryInputs.FilterInputReset.prototype =
            Swiftype.Utils.createObject(
              Swiftype.QueryInputs.FilterInput.prototype
            ));
        var pFilterInputReset = Swiftype.QueryInputs.FilterInputReset.prototype;
        (pFilterInputReset.validate = function () {
          var t =
            Swiftype.QueryInputs.RefiningInput.prototype.validate.call(this);
          return (t =
            t &&
            this._elementMusthaveDataAttributes(
              this._element,
              this._dataFieldPostfix
            ));
        }),
          (pFilterInputReset._getFilterType = function () {
            return null;
          }),
          (pFilterInputReset._getFilterValues = function () {
            return null;
          }),
          (Swiftype.QueryInputs.SortInput = function (t, e) {
            Swiftype.QueryInputs.RefiningInput.call(this, t, e),
              (this._className = "Swiftype.QueryInputs.SortInput"),
              (this._inputCategory = "sort");
          }),
          (Swiftype.QueryInputs.SortInput.prototype =
            Swiftype.Utils.createObject(
              Swiftype.QueryInputs.RefiningInput.prototype
            ));
        var pSortInput = Swiftype.QueryInputs.SortInput.prototype;
        (pSortInput.validate = function () {
          var t = this,
            e =
              Swiftype.QueryInputs.RefiningInput.prototype.validate.call(this);
          return (
            $.each(t._getAllElements(), function (n, i) {
              e =
                e &&
                t._elementMusthaveDataAttributes(
                  i,
                  [t._dataFieldPostfix, t._dataDirectionPostfix],
                  !0
                );
            }),
            e
          );
        }),
          (pSortInput._currentStateChanged = function (t) {
            var e = this,
              n = this._getSortDirection(t),
              i = this._getSortField(t);
            e.setLastActive(),
              e._queryComposer.runSearch(function (t) {
                (t._pageNumber = 1),
                  t.setSortFieldByDocumentTypeSlug(e._documentType, i),
                  t.setSortDirectionByDocumentTypeSlug(e._documentType, n);
              });
          }),
          (pSortInput._getSortDirection = function (t) {
            return this._getDirectionForElement(t);
          }),
          (pSortInput._getSortField = function (t) {
            return this._getDocumentFieldForElement(t);
          }),
          (pSortInput._changeToReflectSearch = function (t) {
            var e = this,
              n = t.getSortFieldByDocumentTypeSlug()[this._documentType],
              i = t.getSortDirectionByDocumentTypeSlug()[this._documentType];
            n && i
              ? $.each(e._getAllElements(), function (t, r) {
                  var o = e._getSortField(r),
                    s = e._getSortDirection(r);
                  n === o && i === s
                    ? e._markDomElementAsActive(r, !0)
                    : e._markDomElementAsActive(r, !1);
                })
              : $.each(e._getAllElements(), function (t, n) {
                  e._markDomElementAsActive(n, !1);
                }),
              this._propActiveElements();
          }),
          (Swiftype.QueryInputs.SortInputReset = function (t, e) {
            Swiftype.QueryInputs.SortInput.call(this, t, e),
              (this._className = "Swiftype.QueryInputs.SortInputReset");
          }),
          (Swiftype.QueryInputs.SortInputReset.prototype =
            Swiftype.Utils.createObject(
              Swiftype.QueryInputs.SortInput.prototype
            ));
        var pSortInputReset = Swiftype.QueryInputs.SortInputReset.prototype;
        (pSortInputReset.validate = function () {
          return Swiftype.QueryInputs.RefiningInput.prototype.validate.call(
            this
          );
        }),
          (pSortInputReset._getSortDirection = function () {
            return null;
          }),
          (pSortInputReset._getSortField = function () {
            return null;
          }),
          (Swiftype.QueryInputs.FacetInput = function (t, e) {
            Swiftype.QueryInputs.RefiningInput.call(this, t, e),
              (this._className = "Swiftype.QueryInputs.FacetInput"),
              (this._inputCategory = "facet");
          }),
          (Swiftype.QueryInputs.FacetInput.prototype =
            Swiftype.Utils.createObject(
              Swiftype.QueryInputs.RefiningInput.prototype
            ));
        var pFacetInput = Swiftype.QueryInputs.FacetInput.prototype;
        (pFacetInput.attach = function () {
          this._setClassAttributes(),
            this._queryComposer.addToPermanentQueryTransforms(
              this._queryTransformFunction(this._element)
            );
        }),
          (pFacetInput.validate = function () {
            var t =
              Swiftype.QueryInputs.RefiningInput.prototype.validate.call(this);
            return (t =
              t &&
              this._elementMusthaveDataAttributes(
                this._element,
                this._dataFieldPostfix
              ));
          }),
          (pFacetInput._queryTransformFunction = function (t) {
            var e = this,
              n = this._getDocumentFieldForElement(t);
            return function (t) {
              t.setFacetDataByDocumentTypeSlug(e._documentType, n);
            };
          }),
          (Swiftype.QueryInputs.SpellingSuggestion = function (t, e) {
            Swiftype.QueryInputs.Base.call(this, t, e),
              (this._className = "Swiftype.QueryInputs.SpellingSuggestion"),
              (this._inputCategory = "suggestion");
          }),
          (Swiftype.QueryInputs.SpellingSuggestion.prototype =
            Swiftype.Utils.createObject(Swiftype.QueryInputs.Base.prototype));
        var pSpellingSuggestion =
          Swiftype.QueryInputs.SpellingSuggestion.prototype;
        (pSpellingSuggestion.attach = function () {
          var t = this;
          Swiftype.Utils.bindOnEventsTo(
            this._element,
            "click",
            "[data-st-search-suggestion]",
            function (e) {
              var n = $(this).attr("data-st-search-suggestion");
              n &&
                (t.setLastActive(),
                e.preventDefault(),
                t._queryComposer.runSearch(function (t) {
                  t.setQueryText(n);
                }));
            }
          );
        }),
          (Swiftype.ResultsDisplay = function (t, e, n, i, r) {
            (this._context = t),
              (this._templates = e),
              (this._uiBindings = n),
              (this._uiConfiguration = i),
              (this._resultClickedFilterHook = r),
              (this._queryOutputs = []);
          });
        var pResultsDisplay = Swiftype.ResultsDisplay.prototype;
        (pResultsDisplay.toString = function () {
          return "[Swiftype.ResultsDisplay for " + this._context + "]";
        }),
          (pResultsDisplay.log = function (t, e, n) {
            this._context.log(t, e, n);
          }),
          (pResultsDisplay._addQueryOutput = function (t) {
            t.validate() ? this._queryOutputs.push(t) : t.handleInvalid();
          }),
          (pResultsDisplay.setVisible = function (t) {
            (t = !!t),
              ("undefined" != typeof this._visible && t === this._visible) ||
                ((this._visible = t),
                this._context.visibilityChanged(
                  "resultsDisplay",
                  this._visible
                ));
          }),
          (pResultsDisplay.isVisible = function () {
            return !!this._visible;
          }),
          (pResultsDisplay._getInstall = function () {
            return this._context.getInstall();
          }),
          (pResultsDisplay.setVisibility = function () {
            this._context.setVisibility.apply(this._context, arguments);
          }),
          (pResultsDisplay.getVisibility = function () {
            return this._context.getVisibility.apply(this._context, arguments);
          }),
          (pResultsDisplay.visibilityChanged = function () {
            for (
              var t = ["visibilityChanged"], e = 0;
              e < arguments.length;
              ++e
            )
              t.push(arguments[e]);
            this._onAllQueryOutputs.apply(this, t);
          }),
          (pResultsDisplay._queryElementLocator = function () {
            return (
              this._queryElementLocatorMemoized ||
                (this._queryElementLocatorMemoized =
                  new Swiftype.QueryElementLocator(
                    this._getInstall(),
                    document.body,
                    this._uiBindings.outputs,
                    Swiftype.QueryOutputs
                  )),
              this._queryElementLocatorMemoized
            );
          }),
          (pResultsDisplay._findAndAddQueryOutputs = function () {
            var t = this;
            this._queryElementLocator().forEachMatchingElement(function (e, n) {
              var i = new e(t, n, t._templates, t._getInstall());
              t._addQueryOutput(i);
            });
          }),
          (pResultsDisplay.addAnchorHashOutput = function () {
            this._uiConfiguration.disable_anchor_hash_params ||
              this._addQueryOutput(
                new Swiftype.QueryOutputs.OutputAnchorHash(this)
              );
          }),
          (pResultsDisplay.modifyDomAsNeeded = function () {}),
          (pResultsDisplay._onAllQueryOutputs = function (t) {
            var e = [];
            (e = e.concat(Array.prototype.slice.call(arguments, 1))),
              $.each(this._queryOutputs, function (n, i) {
                var r = i[t];
                r && r.apply(i, e);
              });
          }),
          (pResultsDisplay.attach = function () {
            this._findAndAddQueryOutputs(), this._onAllQueryOutputs("attach");
          }),
          (pResultsDisplay.uiSetupComplete = function () {
            $.each(this._queryOutputs, function (t, e) {
              e.uiSetupComplete && e.uiSetupComplete();
            });
          }),
          (pResultsDisplay.someQueryChanged = function (t, e, n) {
            !this.isOurContext(t) &&
              this._uiConfiguration.hide_on_other_query &&
              this.setVisible(!1),
              $.each(this._queryOutputs, function (e, i) {
                i.someQueryChanged(t, n);
              });
          }),
          (pResultsDisplay.findQueryElements = function (t) {
            return this._context.findQueryElements(t);
          }),
          (pResultsDisplay.findQueryOutputs = function (t) {
            var e = [];
            return (
              $.each(this._queryOutputs, function (n, i) {
                t(i) && e.push(i);
              }),
              e
            );
          }),
          (pResultsDisplay.isOurContext = function (t) {
            return t === this._context;
          }),
          (pResultsDisplay.getLocalizationMessages = function () {
            return this._getInstall().getLocalizationMessages();
          }),
          (pResultsDisplay.getLocale = function () {
            return this._getInstall().getLocale();
          }),
          (pResultsDisplay.sendToSearchResult = function (t, e, n) {
            return (
              this._resultClickedFilterHook &&
                (e = this._resultClickedFilterHook(t, e) || e),
              this._context.sendToSearchResult(t, e, n)
            );
          }),
          (pResultsDisplay.getUiConfiguration = function () {
            return this._uiConfiguration;
          }),
          (pResultsDisplay.windowResized = function (t) {
            $.each(this._queryOutputs, function (e, n) {
              n.windowResized(t);
            });
          }),
          (pResultsDisplay.anchorHashChanged = function (t) {
            $.each(this._queryOutputs, function (e, n) {
              n.anchorHashChanged(t);
            });
          }),
          (Swiftype.QueryOutputs = Swiftype.QueryOutputs || {}),
          (Swiftype.QueryOutputs.Base = function (t, e) {
            (this._resultsDisplay = t),
              (this._element = $(e)),
              (this._context = this._resultsDisplay._context);
          });
        var pQueryOutputBase = Swiftype.QueryOutputs.Base.prototype;
        (pQueryOutputBase.toString = function () {
          return (
            "[" +
            this._className +
            " on " +
            Swiftype.Utils.describeElement(this._element) +
            ", resultsDisplay " +
            this._resultsDisplay +
            "]"
          );
        }),
          (pQueryOutputBase.log = function (t, e, n) {
            this._resultsDisplay.log(t, e, n);
          }),
          (pQueryOutputBase.validate = function () {
            return !0;
          }),
          (pQueryOutputBase._describeElement = function (t) {
            return Swiftype.Utils.describeElement(t);
          }),
          (pQueryOutputBase.setVisibility = function () {
            this._resultsDisplay.setVisibility.apply(
              this._resultsDisplay,
              arguments
            );
          }),
          (pQueryOutputBase.getVisibility = function () {
            return this._resultsDisplay.getVisibility.apply(
              this._resultsDisplay,
              arguments
            );
          }),
          (pQueryOutputBase._hideShowQueryElements = function (t, e) {
            this._element.hasClass(e) &&
              Swiftype.Utils.elementHide(this._element),
              this._element.hasClass(t) &&
                Swiftype.Utils.elementShow(this._element),
              Swiftype.Utils.elementHide(this._element.find("." + e)),
              Swiftype.Utils.elementShow(this._element.find("." + t));
          }),
          (pQueryOutputBase._showEmptyQueryElements = function () {
            this._hideShowQueryElements(
              Swiftype.CssBehaviorClasses.adornments.show_only_on_empty_query,
              Swiftype.CssBehaviorClasses.adornments.show_only_on_nonempty_query
            );
          }),
          (pQueryOutputBase._showNonemptyQueryElements = function () {
            this._hideShowQueryElements(
              Swiftype.CssBehaviorClasses.adornments
                .show_only_on_nonempty_query,
              Swiftype.CssBehaviorClasses.adornments.show_only_on_empty_query
            );
          }),
          (pQueryOutputBase._showCorrectQueryElements = function (t) {
            t.isEmptyQuery()
              ? this._showEmptyQueryElements()
              : this._showNonemptyQueryElements();
          }),
          (pQueryOutputBase._isOurContext = function (t) {
            return this._resultsDisplay.isOurContext(t);
          }),
          (pQueryOutputBase.someQueryChanged = function (t, e) {
            this._isOurContext(t) && this._currentSearchChanged(e);
          }),
          (pQueryOutputBase._currentSearchChanged = function (t) {
            this._showCorrectQueryElements(t);
          }),
          (pQueryOutputBase._attach = function () {}),
          (pQueryOutputBase.getElement = function () {
            return $(this._element);
          }),
          (pQueryOutputBase.attach = function () {
            this._attached || (this._attach(), (this._attached = !0));
          }),
          (pQueryOutputBase.isDefaultTargetFor = function () {
            return !1;
          }),
          (pQueryOutputBase._sendToSearchResult = function (t, e, n) {
            return this._resultsDisplay.sendToSearchResult(t, e, n);
          }),
          (pQueryOutputBase._elementsWithDataAttributeNamed = function (t, e) {
            var n = "." + e;
            return $.map($(t), function (t) {
              return $(t).parents(n).addBack().filter(n);
            });
          }),
          (pQueryOutputBase._sendToSearchResultViaElements = function (
            t,
            e,
            n
          ) {
            t = this._elementsWithDataAttributeNamed(
              t,
              SWIFTYPE_RESULT_DATA_NAME
            )[0];
            var i,
              r = t.data(SWIFTYPE_RESULT_DATA_NAME);
            return (
              !!(i = n
                ? n
                : t.data(SWIFTYPE_SEARCH_RESULT_TARGET_URL_DATA_NAME)) &&
              (this._sendToSearchResult(r, i, e), !0)
            );
          }),
          (pQueryOutputBase.getLocale = function () {
            return this._resultsDisplay.getLocale();
          }),
          (pQueryOutputBase.getLocalizationMessages = function () {
            return this._resultsDisplay.getLocalizationMessages();
          }),
          (pQueryOutputBase.getResultsDisplay = function () {
            return this._resultsDisplay;
          }),
          (pQueryOutputBase.windowResized = function () {}),
          (pQueryOutputBase.anchorHashChanged = function () {}),
          (pQueryOutputBase.handleInvalid = function () {}),
          (Swiftype.QueryOutputs.TemplatedQueryOutput = function (t, e, n) {
            Swiftype.QueryOutputs.Base.call(this, t, e), (this._templates = n);
          }),
          (Swiftype.QueryOutputs.TemplatedQueryOutput.prototype =
            Swiftype.Utils.createObject(Swiftype.QueryOutputs.Base.prototype));
        var pTemplatedQueryOutput =
          Swiftype.QueryOutputs.TemplatedQueryOutput.prototype;
        (pTemplatedQueryOutput._getTemplateRenderingContext = function (t) {
          return t.getTemplateRenderingContext();
        }),
          (pTemplatedQueryOutput._getCompiledTemplate = function (t, e) {
            return Swiftype.Utils.getCompiledTemplate(
              t,
              e,
              this.getLocale(),
              this.getLocalizationMessages()
            );
          }),
          (pTemplatedQueryOutput._createSingleToplevelElement = function () {
            var t = this._singleTopLevelElementName();
            return $("<" + t + "></" + t + ">");
          }),
          (pTemplatedQueryOutput._singleTopLevelElementName = function () {
            return "div";
          }),
          (pTemplatedQueryOutput._createToplevelStructure = function () {
            var t = this._element.contents(),
              e = !1;
            if (
              (t.each(function (t, n) {
                1 !== n.nodeType && (e = !0);
              }),
              e)
            ) {
              var n = $(this._createSingleToplevelElement());
              n.addClass(
                Swiftype.CssBehaviorClasses.adornments.show_only_on_empty_query
              ),
                n.html(this._element.html()),
                this._element.html(n[0].outerHTML);
            } else
              t.addClass(
                Swiftype.CssBehaviorClasses.adornments.show_only_on_empty_query
              );
          }),
          (pTemplatedQueryOutput._createOutputElement = function () {
            var t = this._outputElementName();
            return $("<" + t + "></" + t + ">");
          }),
          (pTemplatedQueryOutput._outputElementName = function () {
            return "div";
          }),
          (pTemplatedQueryOutput._outputElementShownOnlyWithNonemptyQueries =
            function () {
              return !0;
            }),
          (pTemplatedQueryOutput._getOutputElement = function () {
            return (
              this._outputElement ||
                ((this._outputElement = $(this._createOutputElement())),
                this._outputElementShownOnlyWithNonemptyQueries() &&
                  this._outputElement.addClass(
                    Swiftype.CssBehaviorClasses.adornments
                      .show_only_on_nonempty_query
                  ),
                this._outputElement.appendTo(this._element)),
              this._outputElement
            );
          }),
          (pTemplatedQueryOutput._bindAsNeeded = function () {}),
          (pTemplatedQueryOutput._attach = function () {
            this._createToplevelStructure(),
              this._bindAsNeeded(),
              this._showEmptyQueryElements();
          }),
          (Swiftype.QueryOutputs.ChromeControl = function (t, e) {
            Swiftype.QueryOutputs.Base.call(this, t, e),
              (this._className = "Swiftype.QueryOutputs.ChromeControl");
          }),
          (Swiftype.QueryOutputs.ChromeControl.prototype =
            Swiftype.Utils.createObject(Swiftype.QueryOutputs.Base.prototype));
        var pChromeControl = Swiftype.QueryOutputs.ChromeControl.prototype;
        (pChromeControl._getSetVisibilityArguments = function () {
          var t = "toggle",
            e = "all";
          return (
            Swiftype.Utils.hasClassMatching(this._element, /\-show\-/)
              ? (t = !0)
              : Swiftype.Utils.hasClassMatching(this._element, /\-toggle\-/)
              ? (t = "toggle")
              : Swiftype.Utils.hasClassMatching(this._element, /\-hide\-/) &&
                (t = !1),
            Swiftype.Utils.hasClassMatching(this._element, /\-inputs$/)
              ? (e = "queryComposer")
              : Swiftype.Utils.hasClassMatching(this._element, /\-outputs$/) &&
                (e = "resultsDisplay"),
            [e, t]
          );
        }),
          (pChromeControl._attach = function () {
            var t = this;
            Swiftype.Utils.bindOnEventsTo(this._element, "click", function (e) {
              t._applyVisibilityChanges(), e.preventDefault();
            });
          }),
          (pChromeControl._applyVisibilityChanges = function () {
            var t = this._getSetVisibilityArguments();
            this.setVisibility.apply(this, t);
          }),
          (Swiftype.QueryOutputs.OutputAnchorHash = function (t, e) {
            Swiftype.QueryOutputs.Base.call(this, t, e),
              (this._className = "Swiftype.QueryOutputs.OutputAnchorHash"),
              (this._initial = !1);
          }),
          (Swiftype.QueryOutputs.OutputAnchorHash.prototype =
            Swiftype.Utils.createObject(Swiftype.QueryOutputs.Base.prototype));
        var pOutputAnchorHash =
          Swiftype.QueryOutputs.OutputAnchorHash.prototype;
        (pOutputAnchorHash._getInstallHashManager = function () {
          return this._resultsDisplay._getInstall().getHashManager();
        }),
          (pOutputAnchorHash._attach = function () {
            this._initial = !0;
          }),
          (pOutputAnchorHash.visibilityChanged = function (t, e) {
            "resultsDisplay" === t &&
              (e ||
                this._initial ||
                this._getInstallHashManager().updateHash({}),
              (this._initial = !1));
          }),
          (pOutputAnchorHash._currentSearchChanged = function (t) {
            this._getInstallHashManager().updateHash(
              t.getQuery().toAnchorParams()
            );
          }),
          (pOutputAnchorHash.anchorHashChanged = function (t) {
            t.hasKey("stq") || this.setVisibility("resultsDisplay", !1);
          }),
          (Swiftype.QueryOutputs.ChromeEscape = function (t, e) {
            Swiftype.QueryOutputs.Base.call(this, t, e),
              (this._className = "Swiftype.QueryOutputs.ChromeEscape");
          }),
          (Swiftype.QueryOutputs.ChromeEscape.prototype =
            Swiftype.Utils.createObject(Swiftype.QueryOutputs.Base.prototype));
        var pChromeEscape = Swiftype.QueryOutputs.ChromeEscape.prototype;
        (pChromeEscape._attach = function () {
          var t = this;
          Swiftype.Utils.bindOnEventsTo("body", "keydown", function (e) {
            27 === e.which && t.setVisibility("resultsDisplay", !1);
          });
        }),
          (pChromeEscape.validate = function () {
            return !(
              !Swiftype.QueryOutputs.Base.prototype.validate.call(this) ||
              (0 === $("body").length &&
                (this.log(
                  this,
                  WARN,
                  "'Esc' event requires 'body' element to be present and it cannot be found."
                ),
                1))
            );
          }),
          (Swiftype.QueryOutputs.MobileMetaTag = function (t, e) {
            Swiftype.QueryOutputs.Base.call(this, t, e),
              (this._className = "Swiftype.QueryOutputs.MobileMetaTag");
          }),
          (Swiftype.QueryOutputs.MobileMetaTag.prototype =
            Swiftype.Utils.createObject(Swiftype.QueryOutputs.Base.prototype));
        var pMobileMetaTag = Swiftype.QueryOutputs.MobileMetaTag.prototype;
        (pMobileMetaTag._getExistingViewport = function () {
          return (
            this._existingViewportRead ||
              ((this._existingViewport = $("head meta[name=viewport]").first()),
              this._existingViewport.length > 0 &&
                ((this._viewport = this._existingViewport),
                (this._existingViewportContent =
                  this._existingViewport.attr("content"))),
              (this._existingViewportRead = !0)),
            this._existingViewport
          );
        }),
          (pMobileMetaTag._hasExistingViewport = function () {
            return this._getExistingViewport().length > 0;
          }),
          (pMobileMetaTag._setViewportContentTo = function (t) {
            this._hasExistingViewport()
              ? this._getExistingViewport().attr("content", t)
              : void 0 === t || null === t
              ? this._viewport &&
                (this._viewport.remove(), (this._viewport = null))
              : (this._viewport ||
                  ($("head").prepend(
                    '<meta name="viewport" content="' + t + '" />'
                  ),
                  (this._viewport = $("head meta[name=viewport]"))),
                this._viewport.attr("content", t));
          }),
          (pMobileMetaTag.visibilityChanged = function () {
            this.getVisibility("resultsDisplay")
              ? this._setViewportContentTo(
                  "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
                )
              : this._hasExistingViewport()
              ? this._setViewportContentTo(this._existingViewportContent)
              : this._setViewportContentTo(
                  "width=device-width, initial-scale=1.0, maximum-scale=1.0"
                );
          }),
          (Swiftype.QueryOutputs.ChromeElement = function (t, e) {
            Swiftype.QueryOutputs.Base.call(this, t, e),
              (this._className = "Swiftype.QueryOutputs.ChromeElement");
          }),
          (Swiftype.QueryOutputs.ChromeElement.prototype =
            Swiftype.Utils.createObject(Swiftype.QueryOutputs.Base.prototype));
        var pChromeElement = Swiftype.QueryOutputs.ChromeElement.prototype;
        (pChromeElement._showOrHide = function (t) {
          var e = $(this._element);
          t ? Swiftype.Utils.elementShow(e) : Swiftype.Utils.elementHide(e);
        }),
          (pChromeElement.visibilityChanged = function () {
            Swiftype.Utils.hasClassMatching(this._element, /\-input$/i)
              ? this._showOrHide(this.getVisibility("queryComposer"))
              : Swiftype.Utils.hasClassMatching(this._element, /\-output$/i)
              ? this._showOrHide(this.getVisibility("resultsDisplay"))
              : this._showOrHide(this.getVisibility("any"));
          }),
          (Swiftype.QueryOutputs.ChromeOverlayElement = function (t, e) {
            Swiftype.QueryOutputs.ChromeElement.call(this, t, e),
              (this._className = "Swiftype.QueryOutputs.ChromeOverlayElement");
          }),
          (Swiftype.QueryOutputs.ChromeOverlayElement.prototype =
            Swiftype.Utils.createObject(
              Swiftype.QueryOutputs.ChromeElement.prototype
            ));
        var pChromeOverlayElement =
          Swiftype.QueryOutputs.ChromeOverlayElement.prototype;
        (pChromeOverlayElement._showOrHide = function (t) {
          $("body").toggleClass("st-ui-overlay-active", t),
            t && window.scrollTo(0, 0),
            Swiftype.QueryOutputs.ChromeElement.prototype._showOrHide.call(
              this,
              t
            );
        }),
          (Swiftype.QueryOutputs.ResultList = function (t, e, n) {
            Swiftype.QueryOutputs.TemplatedQueryOutput.call(this, t, e, n),
              (this._className = "Swiftype.QueryOutputs.ResultList");
          }),
          (Swiftype.QueryOutputs.ResultList.prototype =
            Swiftype.Utils.createObject(
              Swiftype.QueryOutputs.TemplatedQueryOutput.prototype
            ));
        var pResultList = Swiftype.QueryOutputs.ResultList.prototype,
          SWIFTYPE_RESULT_DATA_NAME = "__swiftype_result",
          SWIFTYPE_SEARCH_RESULT_TARGET_URL_DATA_NAME = "st-url";
        (pResultList._bindAsNeeded = function () {
          var t = this,
            e = this._getOutputElement();
          Swiftype.Utils.bindOnEventsTo(
            e,
            "mousedown",
            "[data-" + SWIFTYPE_SEARCH_RESULT_TARGET_URL_DATA_NAME + "]",
            function (e) {
              Swiftype.Utils.eventIsLeftClick(e) &&
                t._sendToSearchResultViaElements(
                  this,
                  Swiftype.Utils.eventIsMiddleClick(e)
                );
            }
          ),
            Swiftype.Utils.bindOnEventsTo(
              e,
              "click",
              "[data-" + SWIFTYPE_SEARCH_RESULT_TARGET_URL_DATA_NAME + "]",
              function (t) {
                t.preventDefault();
              }
            ),
            Swiftype.Utils.bindOnEventsTo(e, "mousedown", "a", function (e) {
              Swiftype.Utils.eventIsLeftClick(e) &&
                (t._sendToSearchResultViaElements(
                  this,
                  Swiftype.Utils.eventIsMiddleClick(e),
                  $(this).attr("href")
                ),
                e.preventDefault());
            });
        }),
          (pResultList._addDataToResult = function (t, e) {
            t.addClass(SWIFTYPE_RESULT_DATA_NAME),
              t.data(SWIFTYPE_RESULT_DATA_NAME, e);
          }),
          (pResultList._getTemplateRenderingContext = function (t) {
            return t.getTemplateRenderingContext();
          }),
          (pResultList._renderResults = function (t) {
            var e = this,
              n = t.firstResultSet();
            if (!n)
              return void e.log(
                e,
                WARN,
                "Server returned no result sets at all; skipping result rendering entirely: " +
                  t
              );
            var i = this._getCompiledTemplate(
              e._templates.result_item,
              n.getSetName()
            );
            i
              ? (n.eachResult(function (t, n) {
                  var r = e._getTemplateRenderingContext(n),
                    o = i.render(r),
                    s = $(o);
                  e._addDataToResult(s, n), $(e._getOutputElement()).append(s);
                }),
                $(e._element).scrollTop(0))
              : e.log(
                  e,
                  WARN,
                  "Skipping rendering of " +
                    n.countOfResultsOnThisPage() +
                    " records for result set '" +
                    n.getSetName() +
                    "', because we have no template for that kind of set."
                );
          }),
          (pResultList._currentSearchChanged = function (t) {
            this._getOutputElement().html(""),
              t.isEmptyQuery() || this._renderResults(t),
              Swiftype.QueryOutputs.TemplatedQueryOutput.prototype._currentSearchChanged.call(
                this,
                t
              );
          }),
          (Swiftype.QueryOutputs.SetFocusOnInput = function (t, e) {
            Swiftype.QueryOutputs.Base.call(this, t, e),
              (this._className = "Swiftype.QueryOutputs.SetFocusOnInput");
          }),
          (Swiftype.QueryOutputs.SetFocusOnInput.prototype =
            Swiftype.Utils.createObject(Swiftype.QueryOutputs.Base.prototype));
        var pSetFocusOnInput = Swiftype.QueryOutputs.SetFocusOnInput.prototype;
        (pSetFocusOnInput._currentSearchChanged = function (t) {
          Swiftype.Utils.isMobile() || $(this._element).focus(),
            Swiftype.QueryOutputs.Base.prototype._currentSearchChanged.call(
              this,
              t
            );
        }),
          (pSetFocusOnInput._setFocusToElementWithTimeout = function () {
            var t = this;
            Swiftype.Utils.isMobile() ||
              setTimeout(function () {
                $(t._element).focus();
              }, 100);
          }),
          (pSetFocusOnInput.visibilityChanged = function () {
            this._setFocusToElementWithTimeout();
          }),
          (Swiftype.QueryOutputs.LimitedShowList = function (t, e) {
            Swiftype.QueryOutputs.Base.call(this, t, e),
              (this._className = "Swiftype.QueryOutputs.LimitedShowList"),
              (this._listElementSelector = ".st-limited-show-element"),
              (this._actionElementSelector = ".st-limited-show-action"),
              (this._hideClass = "st-list-hide"),
              (this._listElements = undefined),
              (this._actionElement = undefined),
              (this._initialShow = 4),
              (this._increment = 5);
          }),
          (Swiftype.QueryOutputs.LimitedShowList.prototype =
            Swiftype.Utils.createObject(Swiftype.QueryOutputs.Base.prototype));
        var pLimitedShowList = Swiftype.QueryOutputs.LimitedShowList.prototype;
        (pLimitedShowList.attach = function () {
          var t = this;
          Swiftype.Utils.bindOnEventsTo(
            this._element,
            "click",
            this._actionElementSelector,
            function (e) {
              e.preventDefault(),
                (t._currentShownNumber = t._currentShownNumber + t._increment);
              var n = t._currentShownNumber + 1;
              t._element
                .find(t._listElementSelector + ":lt(" + n + ")")
                .removeClass(t._hideClass),
                t._hideActionElementIfAllVisible();
            }
          );
        }),
          (pLimitedShowList._currentSearchChanged = function () {
            this._element
              .find(
                this._listElementSelector + ":gt(" + this._initialShow + ")"
              )
              .addClass(this._hideClass),
              (this._currentShownNumber = this._initialShow),
              this._hideActionElementIfAllVisible();
          }),
          (pLimitedShowList._hideActionElementIfAllVisible = function () {
            var t = this._element.find(this._listElementSelector),
              e = t.filter("." + this._hideClass);
            (0 !== t.length && 0 !== e.length) ||
              this._element
                .find(this._actionElementSelector)
                .addClass(this._hideClass);
          }),
          (Swiftype.QueryOutputs.TargetedQueryOutput = function (t, e) {
            Swiftype.QueryOutputs.Base.call(this, t, e),
              (this._className = "Swiftype.QueryOutputs.TargetedQueryOutput"),
              (this._targetElements = undefined);
          }),
          (Swiftype.QueryOutputs.TargetedQueryOutput.prototype =
            Swiftype.Utils.createObject(Swiftype.QueryOutputs.Base.prototype));
        var pTargetedQueryOutput =
          Swiftype.QueryOutputs.TargetedQueryOutput.prototype;
        (pTargetedQueryOutput._defaultTargets = function () {
          var t = this,
            e = this._resultsDisplay.findQueryElements(function (e) {
              return e.isDefaultTargetFor(t);
            });
          return $.map(e, function (t) {
            return t.getElement()[0];
          });
        }),
          (pTargetedQueryOutput._attach = function () {
            this._setTargetElements(),
              this._targetElements && this._attachToTarget();
          }),
          (pTargetedQueryOutput._setTargetElements = function () {
            var t = new Swiftype.QueryElementLocator(
                this._context.getInstall(),
                document
              ),
              e = $(this._getTargetSelector() || this._defaultTargets()).filter(
                function () {
                  return t.belongsToInstall(this);
                }
              );
            e && e.length > 0 && (this._targetElements = e);
          }),
          (pTargetedQueryOutput._getTargetSelector = function () {
            return Swiftype.Utils.getDataOrClassValue(
              this._element,
              "st-target-element",
              !0
            );
          }),
          (pTargetedQueryOutput._getTargetElements = function () {
            return (
              this._targetElements || this._setTargetElements(),
              this._targetElements
            );
          }),
          (pTargetedQueryOutput._attachToTarget = function () {}),
          (pTargetedQueryOutput.handleInvalid = function () {
            $(this._element).remove(),
              this.log(
                this,
                WARN,
                "Target not found for " +
                  this._getTargetSelector() +
                  ". Removing element from DOM: " +
                  this._describeElement(this._element)
              );
          }),
          (pTargetedQueryOutput.validate = function () {
            return !(
              !Swiftype.QueryOutputs.Base.prototype.validate.call(this) ||
              (!this._getTargetElements() &&
                (this.log(
                  this,
                  WARN,
                  "This element requires a target, but none is specified; you may need to specify 'data-st-target-element' on " +
                    this._describeElement(this._element)
                ),
                1))
            );
          }),
          (Swiftype.QueryOutputs.AdjoinedElement = function (t, e) {
            Swiftype.QueryOutputs.TargetedQueryOutput.call(this, t, e),
              (this._className = "Swiftype.QueryOutputs.AdjoinedElement"),
              (this._lastActiveTarget = null);
          }),
          (Swiftype.QueryOutputs.AdjoinedElement.prototype =
            Swiftype.Utils.createObject(
              Swiftype.QueryOutputs.TargetedQueryOutput.prototype
            ));
        var pAdjoinedElement = Swiftype.QueryOutputs.AdjoinedElement.prototype;
        (pAdjoinedElement._attachToTarget = function () {
          var t = this;
          $.each(this._targetElements, function (e, n) {
            Swiftype.Utils.bindOnEventsTo(
              n,
              "input click focus",
              t._moveRestyleElement.bind(t, this)
            );
          });
        }),
          (pAdjoinedElement._moveRestyleElement = function (t) {
            this._lastActiveTarget = t;
            var e = this._element[0],
              n = t.getBoundingClientRect(),
              i = $(t).offset();
            (e.style.position = "absolute"),
              (e.style.top = $(t).outerHeight() + i.top + 1 + "px"),
              (e.style.left = i.left + "px"),
              (e.style.width = parseInt(n.width) - 2 + "px"),
              (e.style.zIndex = 999999);
          }),
          (pAdjoinedElement._moveRestyleLastActiveTarget = function () {
            this._lastActiveTarget &&
              this._moveRestyleElement(this._lastActiveTarget);
          }),
          (pAdjoinedElement.validate = function () {
            return !(
              !Swiftype.QueryOutputs.TargetedQueryOutput.prototype.validate.call(
                this
              ) ||
              (!Swiftype.Utils.isInputLikeElement(this._targetElements) &&
                (this.log(
                  this,
                  WARN,
                  "Adjoined element can only be attached to 'input' or 'textarea' element. Currently specified on " +
                    this._describeElement(this._targetElements)
                ),
                1))
            );
          }),
          (pAdjoinedElement.windowResized = function () {
            this._moveRestyleLastActiveTarget();
          }),
          (Swiftype.QueryOutputs.FieldDependentVisibility = function (t, e) {
            Swiftype.QueryOutputs.TargetedQueryOutput.call(this, t, e),
              (this._className =
                "Swiftype.QueryOutputs.FieldDependentVisibility");
          }),
          (Swiftype.QueryOutputs.FieldDependentVisibility.prototype =
            Swiftype.Utils.createObject(
              Swiftype.QueryOutputs.TargetedQueryOutput.prototype
            ));
        var pFieldDependentVisibility =
          Swiftype.QueryOutputs.FieldDependentVisibility.prototype;
        (pFieldDependentVisibility._attachToTarget = function () {
          this._setShowHideEvents();
        }),
          (pFieldDependentVisibility._shouldBeShown = function (t) {
            if (t.is(":hidden")) return !1;
            if (this._escapedByUser) return !1;
            var e = !1;
            return (
              $.each(this._targetElements, function (t, n) {
                $(n).is(":focus") && (e = !0);
              }),
              e
            );
          }),
          (pFieldDependentVisibility._showOrHideAppropriately = function (t) {
            this._shouldBeShown(t)
              ? Swiftype.Utils.elementShow(this._element)
              : Swiftype.Utils.elementHide(this._element);
          }),
          (pFieldDependentVisibility._setShowHideEvents = function () {
            var t = this;
            $.each(this._getTargetElements(), function (e, n) {
              Swiftype.Utils.bindOnEventsTo(
                n,
                "focus click input blur keydown",
                function (e) {
                  27 === e.which
                    ? (t._escapedByUser = !0)
                    : (t._escapedByUser = !1),
                    t._showOrHideAppropriately($(n));
                }
              );
            });
          }),
          (pFieldDependentVisibility.validate = function () {
            if (
              !Swiftype.QueryOutputs.TargetedQueryOutput.prototype.validate.call(
                this
              )
            )
              return !1;
            var t = $(this._getTargetElements());
            return !!Swiftype.Utils.isInputLikeElement(t);
          }),
          (pFieldDependentVisibility.someQueryChanged = function (t, e) {
            this._currentSearchChanged(e);
          }),
          (pFieldDependentVisibility._currentSearchChanged = function (t) {
            Swiftype.QueryOutputs.TargetedQueryOutput.prototype._currentSearchChanged.call(
              this,
              t
            );
            var e = this;
            $.each(this._getTargetElements(), function (t, n) {
              $(n).is(":hidden") || e._showOrHideAppropriately($(n));
            });
          }),
          (Swiftype.QueryOutputs.FieldAndQueryDependentVisibility = function (
            t,
            e
          ) {
            Swiftype.QueryOutputs.FieldDependentVisibility.call(this, t, e),
              (this._className =
                "Swiftype.QueryOutputs.FieldAndQueryDependentVisibility");
          }),
          (Swiftype.QueryOutputs.FieldAndQueryDependentVisibility.prototype =
            Swiftype.Utils.createObject(
              Swiftype.QueryOutputs.FieldDependentVisibility.prototype
            ));
        var pFieldAndQueryDependentVisibility =
          Swiftype.QueryOutputs.FieldAndQueryDependentVisibility.prototype;
        (pFieldAndQueryDependentVisibility._shouldBeShown = function (t) {
          return (
            !!this._hasQuery &&
            Swiftype.QueryOutputs.FieldDependentVisibility.prototype._shouldBeShown.call(
              this,
              t
            )
          );
        }),
          (pFieldAndQueryDependentVisibility._currentSearchChanged = function (
            t
          ) {
            (this._hasQuery = !t.isEmptyQuery()),
              Swiftype.QueryOutputs.FieldDependentVisibility.prototype._currentSearchChanged.call(
                this,
                t
              );
          }),
          (Swiftype.QueryOutputs.FieldAndResultsDependentVisibility = function (
            t,
            e
          ) {
            Swiftype.QueryOutputs.FieldAndQueryDependentVisibility.call(
              this,
              t,
              e
            ),
              (this._className =
                "Swiftype.QueryOutputs.FieldAndResultsDependentVisibility");
          }),
          (Swiftype.QueryOutputs.FieldAndResultsDependentVisibility.prototype =
            Swiftype.Utils.createObject(
              Swiftype.QueryOutputs.FieldAndQueryDependentVisibility.prototype
            ));
        var pFieldAndResultsDependentVisibility =
          Swiftype.QueryOutputs.FieldAndResultsDependentVisibility.prototype;
        (pFieldAndResultsDependentVisibility._shouldBeShown = function (t) {
          return (
            !!this._lastQueryWasFromOurContext &&
            !!this._hasResults &&
            Swiftype.QueryOutputs.FieldAndQueryDependentVisibility.prototype._shouldBeShown.call(
              this,
              t
            )
          );
        }),
          (pFieldAndResultsDependentVisibility._currentSearchChanged =
            function (t) {
              (this._hasResults = t.hasAnyResults()),
                Swiftype.QueryOutputs.FieldAndQueryDependentVisibility.prototype._currentSearchChanged.call(
                  this,
                  t
                );
            }),
          (pFieldAndResultsDependentVisibility.someQueryChanged = function (
            t,
            e,
            n
          ) {
            (this._lastQueryWasFromOurContext = this._isOurContext(t)),
              Swiftype.QueryOutputs.FieldAndQueryDependentVisibility.prototype.someQueryChanged.call(
                this,
                t,
                e,
                n
              );
          }),
          (Swiftype.QueryOutputs.KeyboardNavigableList = function (t, e) {
            Swiftype.QueryOutputs.TargetedQueryOutput.call(this, t, e),
              (this._className = "Swiftype.QueryOutputs.KeyboardNavigableList"),
              (this._activeResultIndex = null),
              (this._maximumResultIndex = 0);
          }),
          (Swiftype.QueryOutputs.KeyboardNavigableList.prototype =
            Swiftype.Utils.createObject(
              Swiftype.QueryOutputs.TargetedQueryOutput.prototype
            ));
        var pKeyboardNavigableList =
          Swiftype.QueryOutputs.KeyboardNavigableList.prototype;
        (pKeyboardNavigableList._attachToTarget = function () {
          this._setKeyStrokeEvents();
        }),
          (pKeyboardNavigableList._allToplevelDomElementsThatAreSearchResults =
            function () {
              var t = function (t, e) {
                return (e = $(e)), void 0 !== e.data(SWIFTYPE_RESULT_DATA_NAME);
              };
              return $(this._element).find("*").filter(t);
            }),
          (pKeyboardNavigableList._activeQueryClass = function () {
            if (!this._activeQueryClassMemoized) {
              var t = Swiftype.Utils.getDataOrClassValue(
                this._element,
                "st-active-query-class"
              );
              (t = t || "st-keyboard-active-item"),
                (this._activeQueryClassMemoized = t);
            }
            return this._activeQueryClassMemoized;
          }),
          (pKeyboardNavigableList._allToplevelDomElementsForResultIndex =
            function (t) {
              var e = function (e, n) {
                n = $(n);
                var i = n.data(SWIFTYPE_RESULT_DATA_NAME);
                return !(!i || i.getSequenceInThisPage() !== t);
              };
              return $(
                this._allToplevelDomElementsThatAreSearchResults()
              ).filter(e);
            }),
          (pKeyboardNavigableList._getActiveResultIndex = function () {
            return this._activeResultIndex;
          }),
          (pKeyboardNavigableList._resultSet = function () {
            var t = this._allToplevelDomElementsThatAreSearchResults(),
              e = t[0];
            return e
              ? $(e).data(SWIFTYPE_RESULT_DATA_NAME).getResultSet()
              : null;
          }),
          (pKeyboardNavigableList._currentSearchChanged = function (t) {
            this._setActiveResultIndex(null);
            var e = this._resultSet();
            e && e.countOfResultsOnThisPage()
              ? (this._maximumResultIndex = e.countOfResultsOnThisPage() - 1)
              : (this._maximumResultIndex = null),
              Swiftype.QueryOutputs.TargetedQueryOutput.prototype._currentSearchChanged.call(
                this,
                t
              );
          }),
          (pKeyboardNavigableList._setActiveResultIndex = function (t) {
            if (
              (this._allToplevelDomElementsThatAreSearchResults().removeClass(
                this._activeQueryClass()
              ),
              "number" == typeof t)
            )
              if (
                t < 0 ||
                ("undefined" != typeof this._maximumResultIndex &&
                  t > this._maximumResultIndex)
              )
                this._activeResultIndex = null;
              else {
                this._activeResultIndex = t;
                var e = this._allToplevelDomElementsForResultIndex(t);
                e.addClass(this._activeQueryClass());
              }
            else this._activeResultIndex = null;
          }),
          (pKeyboardNavigableList._nextResult = function () {
            var t = this._getActiveResultIndex();
            "number" == typeof t
              ? this._setActiveResultIndex(t + 1)
              : this._setActiveResultIndex(0);
          }),
          (pKeyboardNavigableList._previousResult = function () {
            var t = this._getActiveResultIndex();
            "number" == typeof t
              ? this._setActiveResultIndex(t - 1)
              : this._setActiveResultIndex(this._maximumResultIndex);
          }),
          (pKeyboardNavigableList._goToResult = function () {
            var t = this._getActiveResultIndex();
            if ("number" == typeof t) {
              var e = this._allToplevelDomElementsForResultIndex(t);
              if (e.length > 0)
                return this._sendToSearchResultViaElements(e), !0;
            }
            return !1;
          }),
          (pKeyboardNavigableList._hasActiveResult = function () {
            return "number" == typeof this._getActiveResultIndex();
          }),
          (pKeyboardNavigableList._setKeyStrokeEvents = function () {
            var t = this;
            $(this._getTargetElements()).keydown(function (e) {
              switch (e.which) {
                case 13:
                  t._element.is(":visible") &&
                    t._goToResult() &&
                    (e.preventDefault(), e.stopImmediatePropagation());
                  break;
                case 38:
                  e.preventDefault(), t._previousResult();
                  break;
                case 40:
                  e.preventDefault(), t._nextResult();
                  break;
                case 27:
                  t._hasActiveResult() &&
                    (t._setActiveResultIndex(null), e.preventDefault());
              }
            });
          }),
          (Swiftype.QueryOutputs.SimpleTemplateOutput = function (t, e, n, i) {
            Swiftype.QueryOutputs.TemplatedQueryOutput.call(this, t, e, n),
              (this._className = "Swiftype.QueryOutputs.SimpleTemplateOutput"),
              (this._templateName = i);
          }),
          (Swiftype.QueryOutputs.SimpleTemplateOutput.prototype =
            Swiftype.Utils.createObject(
              Swiftype.QueryOutputs.TemplatedQueryOutput.prototype
            ));
        var pSimpleTemplateOutput =
          Swiftype.QueryOutputs.SimpleTemplateOutput.prototype;
        (pSimpleTemplateOutput._getTemplate = function () {
          return this._getCompiledTemplate(this._templates, this._templateName);
        }),
          (pSimpleTemplateOutput._currentSearchChanged = function (t) {
            if (t.isEmptyQuery()) this._getOutputElement().html("");
            else {
              var e = this._getTemplate();
              if (e) {
                var n = e.render(this._getTemplateRenderingContext(t));
                this._getOutputElement().html(n);
              }
            }
          });
        var QUERY_OUTPUT_CLASS_TO_TEMPLATE_NAME = {
          ResultSummary: "result_summary",
          ResultPagination: "result_pagination",
          SpellingSuggestion: "spelling_suggestion",
          SortOutput: "sort_dropdown",
          FacetOutput: "filter_checkbox",
        };
        $.each(QUERY_OUTPUT_CLASS_TO_TEMPLATE_NAME, function (t, e) {
          (Swiftype.QueryOutputs[t] = function (n, i, r) {
            Swiftype.QueryOutputs.SimpleTemplateOutput.call(this, n, i, r),
              (this._className = "Swiftype.QueryOutputs." + t),
              (this._templateName = e);
          }),
            (Swiftype.QueryOutputs[t].prototype = Swiftype.Utils.createObject(
              Swiftype.QueryOutputs.SimpleTemplateOutput.prototype
            ));
        }),
          $.each(["ResultSummary", "SpellingSuggestion"], function (t, e) {
            Swiftype.QueryOutputs[e].prototype._getTemplateRenderingContext =
              function (t) {
                return t.firstResultSet().getTemplateRenderingContext();
              };
          });
        var pResultPagination =
          Swiftype.QueryOutputs.ResultPagination.prototype;
        (pResultPagination._currentSearchChanged = function (t) {
          Swiftype.QueryOutputs.SimpleTemplateOutput.prototype._currentSearchChanged.call(
            this,
            t
          ),
            t.firstResultSet() &&
              $(this._element)
                .find(
                  "option[data-st-page=" +
                    t.firstResultSet().currentPageNumber() +
                    "]"
                )
                .attr("selected", "selected");
        }),
          (pResultPagination.getPaginationConfig = function () {
            return this.getResultsDisplay().getUiConfiguration()
              .result_pagination;
          }),
          (pResultPagination._paginationPageNumbers = function (t) {
            var e = [],
              n = t.currentPageNumber(),
              i = t.lastPageNumber(),
              r = parseInt(this.getPaginationConfig().max_numbers_to_show);
            if (r > 0) {
              var o = 1;
              i > r &&
                ((o = Math.min(n - parseInt(r / 2), i - r) + 1),
                (o = Math.max(o, 1)));
              for (var s = o; s <= Math.min(o + r - 1, i); ++s) e.push(s);
            }
            return e;
          }),
          (pResultPagination._getTemplateRenderingContext = function (t) {
            var e = t.firstResultSet().getTemplateRenderingContext(),
              n = this._paginationPageNumbers(t.firstResultSet());
            return $.extend(e, { page_numbers: n });
          });
        var pSortOutput = Swiftype.QueryOutputs.SortOutput.prototype;
        (pSortOutput.validate = function () {
          return (
            !!Swiftype.QueryOutputs.SimpleTemplateOutput.prototype.validate.call(
              this
            ) &&
            ((this._documentType = Swiftype.Utils.getDataOrClassValue(
              this._element,
              "st-document-type"
            )),
            (this._visualOrder = Swiftype.Utils.getDataOrClassValue(
              this._element,
              "st-visual-order"
            )),
            this._findSortConfiguration(),
            this._sortConfig
              ? ((this._templateName = this._sortConfig.template_name), !0)
              : (this.log(
                  this,
                  WARN,
                  "Sort " +
                    this._describeElement(this._element) +
                    " is not configured correctly"
                ),
                !1))
          );
        }),
          (pSortOutput._findSortConfiguration = function () {
            var t = this;
            $.each(
              this.getResultsDisplay().getUiConfiguration().sort[
                this._documentType
              ],
              function (e, n) {
                Number(n.visual_order) === Number(t._visualOrder) &&
                  (t._sortConfig = n);
              }
            );
          }),
          (pSortOutput._getTemplateRenderingContext = function (t) {
            var e = t.firstResultSet().getTemplateRenderingContext();
            return $.extend(e, { sort_values: this._sortConfig.values });
          });
        var pFacetOutput = Swiftype.QueryOutputs.FacetOutput.prototype;
        (pFacetOutput.attach = function () {
          (this._templateName = this._facetConfig.template_name),
            (this._gotInitialResults = !1),
            (this._initialMinValue = undefined),
            (this._initialMaxValue = undefined),
            (this._previousQueryText = undefined),
            (this._facetHeaderSelector = ".st-search-facet-header"),
            (this._sortBy =
              Swiftype.Utils.getDataOrClassValue(
                this._element,
                "st-sort-order"
              ) || "count"),
            Swiftype.QueryOutputs.SimpleTemplateOutput.prototype.attach.call(
              this
            );
        }),
          (pFacetOutput.validate = function () {
            return (
              !!Swiftype.QueryOutputs.SimpleTemplateOutput.prototype.validate.call(
                this
              ) &&
              ((this._documentType = Swiftype.Utils.getDataOrClassValue(
                this._element,
                "st-document-type"
              )),
              (this._documentField = Swiftype.Utils.getDataOrClassValue(
                this._element,
                "st-document-field"
              )),
              (this._visualOrder = Swiftype.Utils.getDataOrClassValue(
                this._element,
                "st-visual-order"
              )),
              this._findFacetConfigurationByDocumentFieldAndVisualOrder(),
              !!this._facetConfig ||
                (this.log(
                  this,
                  WARN,
                  "Facet " +
                    this._describeElement(this._element) +
                    " is not configured correctly"
                ),
                !1))
            );
          }),
          (pFacetOutput._findFacetConfigurationByDocumentFieldAndVisualOrder =
            function () {
              var t = this;
              $.each(
                this.getResultsDisplay().getUiConfiguration().facets[
                  this._documentType
                ],
                function (e, n) {
                  n[0] === t._documentField &&
                    Number(n[1].visual_order) === Number(t._visualOrder) &&
                    (t._facetConfig = n[1]);
                }
              );
            });
        var FACETS_TO_HIDE_WHEN_NO_DATA = ["filter_checkbox"];
        (pFacetOutput._facetData = function (t) {
          var e = t.facets(),
            n = e[this._documentField] || {},
            i = $.map(n, function (t, e) {
              return [[e, t]];
            });
          if (((i = this._sortFacets(i)), !this._gotInitialResults)) {
            (this._gotInitialResults = !0),
              (this._previousQueryText = t.getQuery()._queryText);
            var r = $.map(Object.keys(n), function (t) {
              var e = Number(t);
              return isFinite(e) ? e : 0;
            });
            (this._initialMinValue = Math.floor(Math.min.apply(null, r))),
              (this._initialMaxValue = Math.ceil(Math.max.apply(null, r)));
          }
          var o = {
            facets: i,
            label: this._facetConfig.label,
            predefined_ranges: this._facetConfig.predefined_ranges,
            from_label: this._facetConfig.from_label,
            to_label: this._facetConfig.to_label,
            submit_label: this._facetConfig.submit_label,
            hide_count: this._facetConfig.hide_count,
          };
          return (
            isFinite(this._initialMinValue) &&
              isFinite(this._initialMaxValue) &&
              ((o.min_value = this._initialMinValue),
              (o.max_value = this._initialMaxValue),
              (o.show = !0)),
            0 === i.length &&
              FACETS_TO_HIDE_WHEN_NO_DATA.indexOf(
                this._facetConfig.template_name
              ) > -1 &&
              (o.hide_header = !0),
            o
          );
        }),
          (pFacetOutput._sortFacets = function (t) {
            var e;
            switch (this._sortBy) {
              case "count":
                e = function (t, e) {
                  return e[1] - t[1];
                };
                break;
              case "alphabetical":
                e = function (t, e) {
                  return t[0] < e[0] ? -1 : 1;
                };
                break;
              default:
                return t;
            }
            return t.sort(e);
          }),
          (pFacetOutput._beforeRender = function (t) {
            var e = this._element.siblings(this._facetHeaderSelector);
            $.isEmptyObject(t) || t.hide_header
              ? Swiftype.Utils.elementHide(e)
              : Swiftype.Utils.elementShow(e);
          }),
          (pFacetOutput._getTemplateRenderingContext = function (t) {
            var e = t.firstResultSet().getTemplateRenderingContext(),
              n = this._facetData(t.firstResultSet());
            return this._beforeRender(n), $.extend(e, { facet_data: n });
          }),
          (pFacetOutput.someQueryChanged = function (t, e) {
            Swiftype.QueryOutputs.SimpleTemplateOutput.prototype.someQueryChanged.call(
              this,
              t,
              e
            ),
              e.getQuery()._queryText !== this._previousQueryText &&
                (this._gotInitialResults = !1);
          });
        var DEFAULT_ON_PAGE_SEARCH_CONTAINER_CLASS = ".__st-search-container";
        (Swiftype.QueryOutputs.OnPageSearchResults = function (t, e, n, i) {
          Swiftype.QueryOutputs.TemplatedQueryOutput.call(this, t, e, n),
            (this._install = i),
            (this._className = "Swiftype.QueryOutputs.OnPageSearchResults"),
            (this._templateName = "on_page_search_results");
        }),
          (Swiftype.QueryOutputs.OnPageSearchResults.prototype =
            Swiftype.Utils.createObject(
              Swiftype.QueryOutputs.TemplatedQueryOutput.prototype
            ));
        var pOnPageSearchResults =
          Swiftype.QueryOutputs.OnPageSearchResults.prototype;
        (pOnPageSearchResults._onPageSearchContainer = function () {
          return $(
            DEFAULT_ON_PAGE_SEARCH_CONTAINER_CLASS +
              "[data-" +
              INSTALL_KEY_DATA_ATTRIBUTE_NAME +
              '="' +
              this._install.getInstallDataAttribute() +
              '"]'
          );
        }),
          (pOnPageSearchResults._currentSearchChanged = function (t) {
            var e = this._onPageSearchContainer().children().detach();
            0 !== e.length &&
              (this._getOutputElement().html(e),
              this._getOutputElement().addClass(
                "st-install-" + this._install.getInstallDataAttribute()
              )),
              Swiftype.QueryOutputs.TemplatedQueryOutput.prototype._currentSearchChanged.call(
                this,
                t
              );
          }),
          (Swiftype.SectionScroller = function () {});
        var pSectionScroller = Swiftype.SectionScroller.prototype;
        (pSectionScroller.scroll = function () {
          var t = new Swiftype.AnchorParams(Swiftype.Utils.getHash()),
            e = t.getValue("sts");
          if (e) {
            e = this._normalizeText(e);
            var n = this;
            $("h1, h2, h3, h4, h5, h6").each(function () {
              var t = $(this);
              if (n._normalizeText(t.text()).indexOf(e) >= 0)
                return this.scrollIntoView(!0), !1;
            });
          }
        }),
          (pSectionScroller._normalizeText = function (t) {
            var e = t.replace(/\s+/g, "");
            return (e = e.toLowerCase());
          }),
          (Swiftype = Swiftype || {}),
          (Swiftype.WidgetManager = function () {
            (this._widgetsByInstallKey = {}),
              (this._installsByInstallKey = {}),
              (this._defaultInstall = null),
              (this._installCount = 0);
          });
        var pWidgetManager = Swiftype.WidgetManager.prototype;
        (pWidgetManager.install = function (t, e, n) {
          n = n || {};
          var i;
          this._installsByInstallKey[t] ||
            (this._defaultInstall
              ? (i = new Swiftype.Install(t, n, this._installCount))
              : ((i = new Swiftype.Install(t, n, this._installCount)),
                (this._defaultInstall = i)),
            (this._installsByInstallKey[t] = i),
            this._installCount++);
        }),
          (pWidgetManager.search = function (t, e) {
            var n = this._installsByInstallKey[t];
            if (!n) throw "Install with key '" + t + "' not found!";
            n.addReadyListener(function () {
              n.getSearchContext().getQueryComposer().runSearch(e);
            });
          }),
          (pWidgetManager.onSearchComplete = function (t, e) {
            var n;
            if (
              (null === e || void 0 === e
                ? ((e = t), (n = this._defaultInstall))
                : (n = this._installsByInstallKey[t]),
              !n)
            )
              throw "No install found!";
            n.addSearchCompleteListener(e);
          }),
          (pWidgetManager.onInstallReady = function (t, e) {
            (null !== e && void 0 !== e) || ((e = t), (t = null));
            var n;
            if (!(n = t ? this._installsByInstallKey[t] : this._defaultInstall))
              throw t
                ? "Install with key '" + t + "' not found!"
                : "No default install found!";
            n.addReadyListener(e);
          }),
          $(function () {
            new Swiftype.SectionScroller().scroll();
          });
      })(window, jQuery, window.__st_mt, window.__st_ro),
      (function (t, e) {
        "use strict";
        var n = new t._InternalSwiftype.WidgetManager(),
          i = function (t) {
            window.console && console.log(t);
          },
          r = function () {
            var t = Array.prototype.slice.call(arguments);
            n[t.shift()].apply(n, t);
          },
          o = function () {
            (t[t.SwiftypeObject] = r),
              (t[t.SwiftypeObject]._stLoaded = !0),
              (t[t.SwiftypeObject]._widgetManager = n);
          };
        if (t.SwiftypeObject) {
          var s = t[t.SwiftypeObject];
          if (e.isFunction(s) && s._stLoaded)
            i(
              new t._InternalSwiftypeError(
                s,
                "warn",
                "Swiftype widget code has already been included, please only include one on every page."
              )
            );
          else if (e.isFunction(s) && Array.isArray(s.q)) {
            o();
            for (var a = s.q, l = 0; l < a.length; l++) r.apply(null, a[l]);
          } else
            i(
              new t._InternalSwiftypeError(
                s,
                "fatal",
                "Seems like you already have 'window._st' defined on the page. Please rename '_st' in Swiftype widget code to an undefined variable on the page."
              )
            );
        } else
          i(
            new t._InternalSwiftypeError(
              t.SwiftypeObject,
              "fatal",
              "There was an error loading Swiftype widget code."
            )
          ),
            (t.SwiftypeObject = "_st"),
            o();
      })(window, jQuery);
  })($stjq);
