(function() { !
    function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        }: t(e)
    } ("undefined" != typeof window ? window: this,
    function(e, t) {
        function n(e) {
            var t = "length" in e && e.length,
            n = Z.type(e);
            return "function" !== n && !Z.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
        }
        function i(e, t, n) {
            if (Z.isFunction(t)) return Z.grep(e,
            function(e, i) {
                return !! t.call(e, i, e) !== n
            });
            if (t.nodeType) return Z.grep(e,
            function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (se.test(t)) return Z.filter(t, e, n);
                t = Z.filter(t, e)
            }
            return Z.grep(e,
            function(e) {
                return X.call(t, e) >= 0 !== n
            })
        }
        function o(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType;);
            return e
        }
        function r(e) {
            var t = he[e] = {};
            return Z.each(e.match(pe) || [],
            function(e, n) {
                t[n] = !0
            }),
            t
        }
        function a() {
            Y.removeEventListener("DOMContentLoaded", a, !1),
            e.removeEventListener("load", a, !1),
            Z.ready()
        }
        function s() {
            Object.defineProperty(this.cache = {},
            0, {
                get: function() {
                    return {}
                }
            }),
            this.expando = Z.expando + s.uid++
        }
        function c(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(ye, "-$1").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null: +n + "" === n ? +n: we.test(n) ? Z.parseJSON(n) : n)
                } catch(o) {}
                Oe.set(e, t, n)
            } else n = void 0;
            return n
        }
        function l() {
            return ! 0
        }
        function d() {
            return ! 1
        }
        function u() {
            try {
                return Y.activeElement
            } catch(e) {}
        }
        function f(e, t) {
            return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t: t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }
        function p(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
            e
        }
        function h(e) {
            var t = ke.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"),
            e
        }
        function g(e, t) {
            for (var n = 0,
            i = e.length; i > n; n++) ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
        }
        function m(e, t) {
            var n, i, o, r, a, s, c, l;
            if (1 === t.nodeType) {
                if (ve.hasData(e) && (r = ve.access(e), a = ve.set(t, r), l = r.events)) {
                    delete a.handle,
                    a.events = {};
                    for (o in l) for (n = 0, i = l[o].length; i > n; n++) Z.event.add(t, o, l[o][n])
                }
                Oe.hasData(e) && (s = Oe.access(e), c = Z.extend({},
                s), Oe.set(t, c))
            }
        }
        function v(e, t) {
            var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
            return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
        }
        function O(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Ce.test(e.type) ? t.checked = e.checked: ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
        function w(t, n) {
            var i, o = Z(n.createElement(t)).appendTo(n.body),
            r = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(o[0])) ? i.display: Z.css(o[0], "display");
            return o.detach(),
            r
        }
        function y(e) {
            var t = Y,
            n = Pe[e];
            return n || (n = w(e, t), "none" !== n && n || (Ge = (Ge || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Ge[0].contentDocument, t.write(), t.close(), n = w(e, t), Ge.detach()), Pe[e] = n),
            n
        }
        function R(e, t, n) {
            var i, o, r, a, s = e.style;
            return n = n || Ue(e),
            n && (a = n.getPropertyValue(t) || n[t]),
            n && ("" !== a || Z.contains(e.ownerDocument, e) || (a = Z.style(e, t)), qe.test(a) && je.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)),
            void 0 !== a ? a + "": a
        }
        function T(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get: (this.get = t).apply(this, arguments)
                }
            }
        }
        function b(e, t) {
            if (t in e) return t;
            for (var n = t[0].toUpperCase() + t.slice(1), i = t, o = Je.length; o--;) if (t = Je[o] + n, t in e) return t;
            return i
        }
        function C(e, t, n) {
            var i = We.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }
        function _(e, t, n, i, o) {
            for (var r = n === (i ? "border": "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > r; r += 2)"margin" === n && (a += Z.css(e, n + Te[r], !0, o)),
            i ? ("content" === n && (a -= Z.css(e, "padding" + Te[r], !0, o)), "margin" !== n && (a -= Z.css(e, "border" + Te[r] + "Width", !0, o))) : (a += Z.css(e, "padding" + Te[r], !0, o), "padding" !== n && (a += Z.css(e, "border" + Te[r] + "Width", !0, o)));
            return a
        }
        function x(e, t, n) {
            var i = !0,
            o = "width" === t ? e.offsetWidth: e.offsetHeight,
            r = Ue(e),
            a = "border-box" === Z.css(e, "boxSizing", !1, r);
            if (0 >= o || null == o) {
                if (o = R(e, t, r), (0 > o || null == o) && (o = e.style[t]), qe.test(o)) return o;
                i = a && (z.boxSizingReliable() || o === e.style[t]),
                o = parseFloat(o) || 0
            }
            return o + _(e, t, n || (a ? "border": "content"), i, r) + "px"
        }
        function H(e, t) {
            for (var n, i, o, r = [], a = 0, s = e.length; s > a; a++) i = e[a],
            i.style && (r[a] = ve.get(i, "olddisplay"), n = i.style.display, t ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && be(i) && (r[a] = ve.access(i, "olddisplay", y(i.nodeName)))) : (o = be(i), "none" === n && o || ve.set(i, "olddisplay", o ? n: Z.css(i, "display"))));
            for (a = 0; s > a; a++) i = e[a],
            i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[a] || "": "none"));
            return e
        }
        function N(e, t, n, i, o) {
            return new N.prototype.init(e, t, n, i, o)
        }
        function S() {
            return setTimeout(function() {
                ze = void 0
            }),
            ze = Z.now()
        }
        function I(e, t) {
            var n, i = 0,
            o = {
                height: e
            };
            for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Te[i],
            o["margin" + n] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e),
            o
        }
        function A(e, t, n) {
            for (var i, o = (nt[t] || []).concat(nt["*"]), r = 0, a = o.length; a > r; r++) if (i = o[r].call(n, t, e)) return i
        }
        function M(e, t, n) {
            var i, o, r, a, s, c, l, d, u = this,
            f = {},
            p = e.style,
            h = e.nodeType && be(e),
            g = ve.get(e, "fxshow");
            n.queue || (s = Z._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, c = s.empty.fire, s.empty.fire = function() {
                s.unqueued || c()
            }), s.unqueued++, u.always(function() {
                u.always(function() {
                    s.unqueued--,
                    Z.queue(e, "fx").length || s.empty.fire()
                })
            })),
            1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = Z.css(e, "display"), d = "none" === l ? ve.get(e, "olddisplay") || y(e.nodeName) : l, "inline" === d && "none" === Z.css(e, "float") && (p.display = "inline-block")),
            n.overflow && (p.overflow = "hidden", u.always(function() {
                p.overflow = n.overflow[0],
                p.overflowX = n.overflow[1],
                p.overflowY = n.overflow[2]
            }));
            for (i in t) if (o = t[i], Ke.exec(o)) {
                if (delete t[i], r = r || "toggle" === o, o === (h ? "hide": "show")) {
                    if ("show" !== o || !g || void 0 === g[i]) continue;
                    h = !0
                }
                f[i] = g && g[i] || Z.style(e, i)
            } else l = void 0;
            if (Z.isEmptyObject(f))"inline" === ("none" === l ? y(e.nodeName) : l) && (p.display = l);
            else {
                g ? "hidden" in g && (h = g.hidden) : g = ve.access(e, "fxshow", {}),
                r && (g.hidden = !h),
                h ? Z(e).show() : u.done(function() {
                    Z(e).hide()
                }),
                u.done(function() {
                    var t;
                    ve.remove(e, "fxshow");
                    for (t in f) Z.style(e, t, f[t])
                });
                for (i in f) a = A(h ? g[i] : 0, i, u),
                i in g || (g[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }
        }
        function F(e, t) {
            var n, i, o, r, a;
            for (n in e) if (i = Z.camelCase(n), o = t[i], r = e[n], Z.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), a = Z.cssHooks[i], a && "expand" in a) {
                r = a.expand(r),
                delete e[i];
                for (n in r) n in e || (e[n] = r[n], t[n] = o)
            } else t[i] = o
        }
        function E(e, t, n) {
            var i, o, r = 0,
            a = tt.length,
            s = Z.Deferred().always(function() {
                delete c.elem
            }),
            c = function() {
                if (o) return ! 1;
                for (var t = ze || S(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, r = 1 - i, a = 0, c = l.tweens.length; c > a; a++) l.tweens[a].run(r);
                return s.notifyWith(e, [l, r, n]),
                1 > r && c ? n: (s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: Z.extend({},
                t),
                opts: Z.extend(!0, {
                    specialEasing: {}
                },
                n),
                originalProperties: t,
                originalOptions: n,
                startTime: ze || S(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = Z.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(i),
                    i
                },
                stop: function(t) {
                    var n = 0,
                    i = t ? l.tweens.length: 0;
                    if (o) return this;
                    for (o = !0; i > n; n++) l.tweens[n].run(1);
                    return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]),
                    this
                }
            }),
            d = l.props;
            for (F(d, l.opts.specialEasing); a > r; r++) if (i = tt[r].call(l, e, d, l.opts)) return i;
            return Z.map(d, A, l),
            Z.isFunction(l.opts.start) && l.opts.start.call(e, l),
            Z.fx.timer(Z.extend(c, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
        }
        function $(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, o = 0,
                r = t.toLowerCase().match(pe) || [];
                if (Z.isFunction(n)) for (; i = r[o++];)"+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }
        function k(e, t, n, i) {
            function o(s) {
                var c;
                return r[s] = !0,
                Z.each(e[s] || [],
                function(e, s) {
                    var l = s(t, n, i);
                    return "string" != typeof l || a || r[l] ? a ? !(c = l) : void 0 : (t.dataTypes.unshift(l), o(l), !1)
                }),
                c
            }
            var r = {},
            a = e === wt;
            return o(t.dataTypes[0]) || !r["*"] && o("*")
        }
        function D(e, t) {
            var n, i, o = Z.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((o[n] ? e: i || (i = {}))[n] = t[n]);
            return i && Z.extend(!0, e, i),
            e
        }
        function L(e, t, n) {
            for (var i, o, r, a, s = e.contents,
            c = e.dataTypes;
            "*" === c[0];) c.shift(),
            void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i) for (o in s) if (s[o] && s[o].test(i)) {
                c.unshift(o);
                break
            }
            if (c[0] in n) r = c[0];
            else {
                for (o in n) {
                    if (!c[0] || e.converters[o + " " + c[0]]) {
                        r = o;
                        break
                    }
                    a || (a = o)
                }
                r = r || a
            }
            return r ? (r !== c[0] && c.unshift(r), n[r]) : void 0
        }
        function G(e, t, n, i) {
            var o, r, a, s, c, l = {},
            d = e.dataTypes.slice();
            if (d[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
            for (r = d.shift(); r;) if (e.responseFields[r] && (n[e.responseFields[r]] = t), !c && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = r, r = d.shift()) if ("*" === r) r = c;
            else if ("*" !== c && c !== r) {
                if (a = l[c + " " + r] || l["* " + r], !a) for (o in l) if (s = o.split(" "), s[1] === r && (a = l[c + " " + s[0]] || l["* " + s[0]])) {
                    a === !0 ? a = l[o] : l[o] !== !0 && (r = s[0], d.unshift(s[1]));
                    break
                }
                if (a !== !0) if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch(u) {
                    return {
                        state: "parsererror",
                        error: a ? u: "No conversion from " + c + " to " + r
                    }
                }
            }
            return {
                state: "success",
                data: t
            }
        }
        function P(e, t, n, i) {
            var o;
            if (Z.isArray(t)) Z.each(t,
            function(t, o) {
                n || Ct.test(e) ? i(e, o) : P(e + "[" + ("object" == typeof o ? t: "") + "]", o, n, i)
            });
            else if (n || "object" !== Z.type(t)) i(e, t);
            else for (o in t) P(e + "[" + o + "]", t[o], n, i)
        }
        function j(e) {
            return Z.isWindow(e) ? e: 9 === e.nodeType && e.defaultView
        }
        var q = [],
        U = q.slice,
        B = q.concat,
        W = q.push,
        X = q.indexOf,
        V = {},
        Q = V.toString,
        J = V.hasOwnProperty,
        z = {},
        Y = e.document,
        K = "2.1.4",
        Z = function(e, t) {
            return new Z.fn.init(e, t)
        },
        ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        te = /^-ms-/,
        ne = /-([\da-z])/gi,
        ie = function(e, t) {
            return t.toUpperCase()
        };
        Z.fn = Z.prototype = {
            jquery: K,
            constructor: Z,
            selector: "",
            length: 0,
            toArray: function() {
                return U.call(this)
            },
            get: function(e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : U.call(this)
            },
            pushStack: function(e) {
                var t = Z.merge(this.constructor(), e);
                return t.prevObject = this,
                t.context = this.context,
                t
            },
            each: function(e, t) {
                return Z.each(this, e, t)
            },
            map: function(e) {
                return this.pushStack(Z.map(this,
                function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(U.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq( - 1)
            },
            eq: function(e) {
                var t = this.length,
                n = +e + (0 > e ? t: 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: W,
            sort: q.sort,
            splice: q.splice
        },
        Z.extend = Z.fn.extend = function() {
            var e, t, n, i, o, r, a = arguments[0] || {},
            s = 1,
            c = arguments.length,
            l = !1;
            for ("boolean" == typeof a && (l = a, a = arguments[s] || {},
            s++), "object" == typeof a || Z.isFunction(a) || (a = {}), s === c && (a = this, s--); c > s; s++) if (null != (e = arguments[s])) for (t in e) n = a[t],
            i = e[t],
            a !== i && (l && i && (Z.isPlainObject(i) || (o = Z.isArray(i))) ? (o ? (o = !1, r = n && Z.isArray(n) ? n: []) : r = n && Z.isPlainObject(n) ? n: {},
            a[t] = Z.extend(l, r, i)) : void 0 !== i && (a[t] = i));
            return a
        },
        Z.extend({
            expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === Z.type(e)
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                return ! Z.isArray(e) && e - parseFloat(e) + 1 >= 0
            },
            isPlainObject: function(e) {
                return "object" === Z.type(e) && !e.nodeType && !Z.isWindow(e) && !(e.constructor && !J.call(e.constructor.prototype, "isPrototypeOf"))
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return ! 1;
                return ! 0
            },
            type: function(e) {
                return null == e ? e + "": "object" == typeof e || "function" == typeof e ? V[Q.call(e)] || "object": typeof e
            },
            globalEval: function(e) {
                var t, n = eval;
                e = Z.trim(e),
                e && (1 === e.indexOf("use strict") ? (t = Y.createElement("script"), t.text = e, Y.head.appendChild(t).parentNode.removeChild(t)) : n(e))
            },
            camelCase: function(e) {
                return e.replace(te, "ms-").replace(ne, ie)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, i) {
                var o, r = 0,
                a = e.length,
                s = n(e);
                if (i) {
                    if (s) for (; a > r && (o = t.apply(e[r], i), o !== !1); r++);
                    else for (r in e) if (o = t.apply(e[r], i), o === !1) break
                } else if (s) for (; a > r && (o = t.call(e[r], r, e[r]), o !== !1); r++);
                else for (r in e) if (o = t.call(e[r], r, e[r]), o === !1) break;
                return e
            },
            trim: function(e) {
                return null == e ? "": (e + "").replace(ee, "")
            },
            makeArray: function(e, t) {
                var i = t || [];
                return null != e && (n(Object(e)) ? Z.merge(i, "string" == typeof e ? [e] : e) : W.call(i, e)),
                i
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : X.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length,
                i = 0,
                o = e.length; n > i; i++) e[o++] = t[i];
                return e.length = o,
                e
            },
            grep: function(e, t, n) {
                for (var i, o = [], r = 0, a = e.length, s = !n; a > r; r++) i = !t(e[r], r),
                i !== s && o.push(e[r]);
                return o
            },
            map: function(e, t, i) {
                var o, r = 0,
                a = e.length,
                s = n(e),
                c = [];
                if (s) for (; a > r; r++) o = t(e[r], r, i),
                null != o && c.push(o);
                else for (r in e) o = t(e[r], r, i),
                null != o && c.push(o);
                return B.apply([], c)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, o;
                return "string" == typeof t && (n = e[t], t = e, e = n),
                Z.isFunction(e) ? (i = U.call(arguments, 2), o = function() {
                    return e.apply(t || this, i.concat(U.call(arguments)))
                },
                o.guid = e.guid = e.guid || Z.guid++, o) : void 0
            },
            now: Date.now,
            support: z
        }),
        Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
        function(e, t) {
            V["[object " + t + "]"] = t.toLowerCase()
        });
        var oe = function(e) {
            function t(e, t, n, i) {
                var o, r, a, s, c, l, u, p, h, g;
                if ((t ? t.ownerDocument || t: P) !== M && A(t), t = t || M, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
                if (!i && E) {
                    if (11 !== s && (o = Oe.exec(e))) if (a = o[1]) {
                        if (9 === s) {
                            if (r = t.getElementById(a), !r || !r.parentNode) return n;
                            if (r.id === a) return n.push(r),
                            n
                        } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(a)) && L(t, r) && r.id === a) return n.push(r),
                        n
                    } else {
                        if (o[2]) return K.apply(n, t.getElementsByTagName(e)),
                        n;
                        if ((a = o[3]) && R.getElementsByClassName) return K.apply(n, t.getElementsByClassName(a)),
                        n
                    }
                    if (R.qsa && (!$ || !$.test(e))) {
                        if (p = u = G, h = t, g = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (l = _(e), (u = t.getAttribute("id")) ? p = u.replace(ye, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", c = l.length; c--;) l[c] = p + f(l[c]);
                            h = we.test(e) && d(t.parentNode) || t,
                            g = l.join(",")
                        }
                        if (g) try {
                            return K.apply(n, h.querySelectorAll(g)),
                            n
                        } catch(m) {} finally {
                            u || t.removeAttribute("id")
                        }
                    }
                }
                return H(e.replace(ce, "$1"), t, n, i)
            }
            function n() {
                function e(n, i) {
                    return t.push(n + " ") > T.cacheLength && delete e[t.shift()],
                    e[n + " "] = i
                }
                var t = [];
                return e
            }
            function i(e) {
                return e[G] = !0,
                e
            }
            function o(e) {
                var t = M.createElement("div");
                try {
                    return !! e(t)
                } catch(n) {
                    return ! 1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t),
                    t = null
                }
            }
            function r(e, t) {
                for (var n = e.split("|"), i = e.length; i--;) T.attrHandle[n[i]] = t
            }
            function a(e, t) {
                var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
                if (i) return i;
                if (n) for (; n = n.nextSibling;) if (n === t) return - 1;
                return e ? 1 : -1
            }
            function s(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }
            function c(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }
            function l(e) {
                return i(function(t) {
                    return t = +t,
                    i(function(n, i) {
                        for (var o, r = e([], n.length, t), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }
            function d(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }
            function u() {}
            function f(e) {
                for (var t = 0,
                n = e.length,
                i = ""; n > t; t++) i += e[t].value;
                return i
            }
            function p(e, t, n) {
                var i = t.dir,
                o = n && "parentNode" === i,
                r = q++;
                return t.first ?
                function(t, n, r) {
                    for (; t = t[i];) if (1 === t.nodeType || o) return e(t, n, r)
                }: function(t, n, a) {
                    var s, c, l = [j, r];
                    if (a) {
                        for (; t = t[i];) if ((1 === t.nodeType || o) && e(t, n, a)) return ! 0
                    } else for (; t = t[i];) if (1 === t.nodeType || o) {
                        if (c = t[G] || (t[G] = {}), (s = c[i]) && s[0] === j && s[1] === r) return l[2] = s[2];
                        if (c[i] = l, l[2] = e(t, n, a)) return ! 0
                    }
                }
            }
            function h(e) {
                return e.length > 1 ?
                function(t, n, i) {
                    for (var o = e.length; o--;) if (!e[o](t, n, i)) return ! 1;
                    return ! 0
                }: e[0]
            }
            function g(e, n, i) {
                for (var o = 0,
                r = n.length; r > o; o++) t(e, n[o], i);
                return i
            }
            function m(e, t, n, i, o) {
                for (var r, a = [], s = 0, c = e.length, l = null != t; c > s; s++)(r = e[s]) && (!n || n(r, i, o)) && (a.push(r), l && t.push(s));
                return a
            }
            function v(e, t, n, o, r, a) {
                return o && !o[G] && (o = v(o)),
                r && !r[G] && (r = v(r, a)),
                i(function(i, a, s, c) {
                    var l, d, u, f = [],
                    p = [],
                    h = a.length,
                    v = i || g(t || "*", s.nodeType ? [s] : s, []),
                    O = !e || !i && t ? v: m(v, f, e, s, c),
                    w = n ? r || (i ? e: h || o) ? [] : a: O;
                    if (n && n(O, w, s, c), o) for (l = m(w, p), o(l, [], s, c), d = l.length; d--;)(u = l[d]) && (w[p[d]] = !(O[p[d]] = u));
                    if (i) {
                        if (r || e) {
                            if (r) {
                                for (l = [], d = w.length; d--;)(u = w[d]) && l.push(O[d] = u);
                                r(null, w = [], l, c)
                            }
                            for (d = w.length; d--;)(u = w[d]) && (l = r ? ee(i, u) : f[d]) > -1 && (i[l] = !(a[l] = u))
                        }
                    } else w = m(w === a ? w.splice(h, w.length) : w),
                    r ? r(null, a, w, c) : K.apply(a, w)
                })
            }
            function O(e) {
                for (var t, n, i, o = e.length,
                r = T.relative[e[0].type], a = r || T.relative[" "], s = r ? 1 : 0, c = p(function(e) {
                    return e === t
                },
                a, !0), l = p(function(e) {
                    return ee(t, e) > -1
                },
                a, !0), d = [function(e, n, i) {
                    var o = !r && (i || n !== N) || ((t = n).nodeType ? c(e, n, i) : l(e, n, i));
                    return t = null,
                    o
                }]; o > s; s++) if (n = T.relative[e[s].type]) d = [p(h(d), n)];
                else {
                    if (n = T.filter[e[s].type].apply(null, e[s].matches), n[G]) {
                        for (i = ++s; o > i && !T.relative[e[i].type]; i++);
                        return v(s > 1 && h(d), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*": ""
                        })).replace(ce, "$1"), n, i > s && O(e.slice(s, i)), o > i && O(e = e.slice(i)), o > i && f(e))
                    }
                    d.push(n)
                }
                return h(d)
            }
            function w(e, n) {
                var o = n.length > 0,
                r = e.length > 0,
                a = function(i, a, s, c, l) {
                    var d, u, f, p = 0,
                    h = "0",
                    g = i && [],
                    v = [],
                    O = N,
                    w = i || r && T.find.TAG("*", l),
                    y = j += null == O ? 1 : Math.random() || .1,
                    R = w.length;
                    for (l && (N = a !== M && a); h !== R && null != (d = w[h]); h++) {
                        if (r && d) {
                            for (u = 0; f = e[u++];) if (f(d, a, s)) {
                                c.push(d);
                                break
                            }
                            l && (j = y)
                        }
                        o && ((d = !f && d) && p--, i && g.push(d))
                    }
                    if (p += h, o && h !== p) {
                        for (u = 0; f = n[u++];) f(g, v, a, s);
                        if (i) {
                            if (p > 0) for (; h--;) g[h] || v[h] || (v[h] = z.call(c));
                            v = m(v)
                        }
                        K.apply(c, v),
                        l && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(c)
                    }
                    return l && (j = y, N = O),
                    g
                };
                return o ? i(a) : a
            }
            var y, R, T, b, C, _, x, H, N, S, I, A, M, F, E, $, k, D, L, G = "sizzle" + 1 * new Date,
            P = e.document,
            j = 0,
            q = 0,
            U = n(),
            B = n(),
            W = n(),
            X = function(e, t) {
                return e === t && (I = !0),
                0
            },
            V = 1 << 31,
            Q = {}.hasOwnProperty,
            J = [],
            z = J.pop,
            Y = J.push,
            K = J.push,
            Z = J.slice,
            ee = function(e, t) {
                for (var n = 0,
                i = e.length; i > n; n++) if (e[n] === t) return n;
                return - 1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = ie.replace("w", "w#"),
            re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]",
            ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            ce = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            de = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            fe = new RegExp(ae),
            pe = new RegExp("^" + oe + "$"),
            he = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + re),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            ge = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            Oe = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            we = /[+~]/,
            ye = /'|\\/g,
            Re = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            Te = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t: 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            be = function() {
                A()
            };
            try {
                K.apply(J = Z.call(P.childNodes), P.childNodes),
                J[P.childNodes.length].nodeType
            } catch(Ce) {
                K = {
                    apply: J.length ?
                    function(e, t) {
                        Y.apply(e, Z.call(t))
                    }: function(e, t) {
                        for (var n = e.length,
                        i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            R = t.support = {},
            C = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !! t && "HTML" !== t.nodeName
            },
            A = t.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e: P;
                return i !== M && 9 === i.nodeType && i.documentElement ? (M = i, F = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", be, !1) : n.attachEvent && n.attachEvent("onunload", be)), E = !C(i), R.attributes = o(function(e) {
                    return e.className = "i",
                    !e.getAttribute("className")
                }), R.getElementsByTagName = o(function(e) {
                    return e.appendChild(i.createComment("")),
                    !e.getElementsByTagName("*").length
                }), R.getElementsByClassName = ve.test(i.getElementsByClassName), R.getById = o(function(e) {
                    return F.appendChild(e).id = G,
                    !i.getElementsByName || !i.getElementsByName(G).length
                }), R.getById ? (T.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                },
                T.filter.ID = function(e) {
                    var t = e.replace(Re, Te);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete T.find.ID, T.filter.ID = function(e) {
                    var t = e.replace(Re, Te);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), T.find.TAG = R.getElementsByTagName ?
                function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : R.qsa ? t.querySelectorAll(e) : void 0
                }: function(e, t) {
                    var n, i = [],
                    o = 0,
                    r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                },
                T.find.CLASS = R.getElementsByClassName &&
                function(e, t) {
                    return E ? t.getElementsByClassName(e) : void 0
                },
                k = [], $ = [], (R.qsa = ve.test(i.querySelectorAll)) && (o(function(e) {
                    F.appendChild(e).innerHTML = "<a id='" + G + "'></a><select id='" + G + "-\f]' msallowcapture=''><option selected=''></option></select>",
                    e.querySelectorAll("[msallowcapture^='']").length && $.push("[*^$]=" + ne + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length || $.push("\\[" + ne + "*(?:value|" + te + ")"),
                    e.querySelectorAll("[id~=" + G + "-]").length || $.push("~="),
                    e.querySelectorAll(":checked").length || $.push(":checked"),
                    e.querySelectorAll("a#" + G + "+*").length || $.push(".#.+[+~]")
                }), o(function(e) {
                    var t = i.createElement("input");
                    t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length && $.push("name" + ne + "*[*^$|!~]?="),
                    e.querySelectorAll(":enabled").length || $.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    $.push(",.*:")
                })), (R.matchesSelector = ve.test(D = F.matches || F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && o(function(e) {
                    R.disconnectedMatch = D.call(e, "div"),
                    D.call(e, "[s!='']:x"),
                    k.push("!=", ae)
                }), $ = $.length && new RegExp($.join("|")), k = k.length && new RegExp(k.join("|")), t = ve.test(F.compareDocumentPosition), L = t || ve.test(F.contains) ?
                function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement: e,
                    i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                }: function(e, t) {
                    if (t) for (; t = t.parentNode;) if (t === e) return ! 0;
                    return ! 1
                },
                X = t ?
                function(e, t) {
                    if (e === t) return I = !0,
                    0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n: (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !R.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === P && L(P, e) ? -1 : t === i || t.ownerDocument === P && L(P, t) ? 1 : S ? ee(S, e) - ee(S, t) : 0 : 4 & n ? -1 : 1)
                }: function(e, t) {
                    if (e === t) return I = !0,
                    0;
                    var n, o = 0,
                    r = e.parentNode,
                    s = t.parentNode,
                    c = [e],
                    l = [t];
                    if (!r || !s) return e === i ? -1 : t === i ? 1 : r ? -1 : s ? 1 : S ? ee(S, e) - ee(S, t) : 0;
                    if (r === s) return a(e, t);
                    for (n = e; n = n.parentNode;) c.unshift(n);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (; c[o] === l[o];) o++;
                    return o ? a(c[o], l[o]) : c[o] === P ? -1 : l[o] === P ? 1 : 0
                },
                i) : M
            },
            t.matches = function(e, n) {
                return t(e, null, null, n)
            },
            t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== M && A(e), n = n.replace(ue, "='$1']"), !(!R.matchesSelector || !E || k && k.test(n) || $ && $.test(n))) try {
                    var i = D.call(e, n);
                    if (i || R.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch(o) {}
                return t(n, M, null, [e]).length > 0
            },
            t.contains = function(e, t) {
                return (e.ownerDocument || e) !== M && A(e),
                L(e, t)
            },
            t.attr = function(e, t) { (e.ownerDocument || e) !== M && A(e);
                var n = T.attrHandle[t.toLowerCase()],
                i = n && Q.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== i ? i: R.attributes || !E ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value: null
            },
            t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            },
            t.uniqueSort = function(e) {
                var t, n = [],
                i = 0,
                o = 0;
                if (I = !R.detectDuplicates, S = !R.sortStable && e.slice(0), e.sort(X), I) {
                    for (; t = e[o++];) t === e[o] && (i = n.push(o));
                    for (; i--;) e.splice(n[i], 1)
                }
                return S = null,
                e
            },
            b = t.getText = function(e) {
                var t, n = "",
                i = 0,
                o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += b(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else for (; t = e[i++];) n += b(t);
                return n
            },
            T = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: he,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(Re, Te),
                        e[3] = (e[3] || e[4] || e[5] || "").replace(Re, Te),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                        e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                        "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                        e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return he.CHILD.test(e[0]) ? null: (e[3] ? e[2] = e[4] || e[5] || "": n && fe.test(n) && (t = _(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(Re, Te).toLowerCase();
                        return "*" === e ?
                        function() {
                            return ! 0
                        }: function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = U[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && U(e,
                        function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, i) {
                        return function(o) {
                            var r = t.attr(o, e);
                            return null == r ? "!=" === n: !n || (r += "", "=" === n ? r === i: "!=" === n ? r !== i: "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice( - i.length) === i: "~=" === n ? (" " + r.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, o) {
                        var r = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice( - 4),
                        s = "of-type" === t;
                        return 1 === i && 0 === o ?
                        function(e) {
                            return !! e.parentNode
                        }: function(t, n, c) {
                            var l, d, u, f, p, h, g = r !== a ? "nextSibling": "previousSibling",
                            m = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            O = !c && !s;
                            if (m) {
                                if (r) {
                                    for (; g;) {
                                        for (u = t; u = u[g];) if (s ? u.nodeName.toLowerCase() === v: 1 === u.nodeType) return ! 1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return ! 0
                                }
                                if (h = [a ? m.firstChild: m.lastChild], a && O) {
                                    for (d = m[G] || (m[G] = {}), l = d[e] || [], p = l[0] === j && l[1], f = l[0] === j && l[2], u = p && m.childNodes[p]; u = ++p && u && u[g] || (f = p = 0) || h.pop();) if (1 === u.nodeType && ++f && u === t) {
                                        d[e] = [j, p, f];
                                        break
                                    }
                                } else if (O && (l = (t[G] || (t[G] = {}))[e]) && l[0] === j) f = l[1];
                                else for (; (u = ++p && u && u[g] || (f = p = 0) || h.pop()) && ((s ? u.nodeName.toLowerCase() !== v: 1 !== u.nodeType) || !++f || (O && ((u[G] || (u[G] = {}))[e] = [j, f]), u !== t)););
                                return f -= o,
                                f === i || f % i === 0 && f / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var o, r = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return r[G] ? r(n) : r.length > 1 ? (o = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                            for (var i, o = r(e, n), a = o.length; a--;) i = ee(e, o[a]),
                            e[i] = !(t[i] = o[a])
                        }) : function(e) {
                            return r(e, 0, o)
                        }) : r
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                        n = [],
                        o = x(e.replace(ce, "$1"));
                        return o[G] ? i(function(e, t, n, i) {
                            for (var r, a = o(e, null, i, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
                        }) : function(e, i, r) {
                            return t[0] = e,
                            o(t, null, r, n),
                            t[0] = null,
                            !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return e = e.replace(Re, Te),
                        function(t) {
                            return (t.textContent || t.innerText || b(t)).indexOf(e) > -1
                        }
                    }),
                    lang: i(function(e) {
                        return pe.test(e || "") || t.error("unsupported lang: " + e),
                        e = e.replace(Re, Te).toLowerCase(),
                        function(t) {
                            var n;
                            do
                            if (n = E ? t.lang: t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(),
                            n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return ! 1
                        }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === F
                    },
                    focus: function(e) {
                        return e === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                        e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return ! 1;
                        return ! 0
                    },
                    parent: function(e) {
                        return ! T.pseudos.empty(e)
                    },
                    header: function(e) {
                        return me.test(e.nodeName)
                    },
                    input: function(e) {
                        return ge.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: l(function() {
                        return [0]
                    }),
                    last: l(function(e, t) {
                        return [t - 1]
                    }),
                    eq: l(function(e, t, n) {
                        return [0 > n ? n + t: n]
                    }),
                    even: l(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: l(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: l(function(e, t, n) {
                        for (var i = 0 > n ? n + t: n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: l(function(e, t, n) {
                        for (var i = 0 > n ? n + t: n; ++i < t;) e.push(i);
                        return e
                    })
                }
            },
            T.pseudos.nth = T.pseudos.eq;
            for (y in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) T.pseudos[y] = s(y);
            for (y in {
                submit: !0,
                reset: !0
            }) T.pseudos[y] = c(y);
            return u.prototype = T.filters = T.pseudos,
            T.setFilters = new u,
            _ = t.tokenize = function(e, n) {
                var i, o, r, a, s, c, l, d = B[e + " "];
                if (d) return n ? 0 : d.slice(0);
                for (s = e, c = [], l = T.preFilter; s;) { (!i || (o = le.exec(s))) && (o && (s = s.slice(o[0].length) || s), c.push(r = [])),
                    i = !1,
                    (o = de.exec(s)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(ce, " ")
                    }), s = s.slice(i.length));
                    for (a in T.filter) ! (o = he[a].exec(s)) || l[a] && !(o = l[a](o)) || (i = o.shift(), r.push({
                        value: i,
                        type: a,
                        matches: o
                    }), s = s.slice(i.length));
                    if (!i) break
                }
                return n ? s.length: s ? t.error(e) : B(e, c).slice(0)
            },
            x = t.compile = function(e, t) {
                var n, i = [],
                o = [],
                r = W[e + " "];
                if (!r) {
                    for (t || (t = _(e)), n = t.length; n--;) r = O(t[n]),
                    r[G] ? i.push(r) : o.push(r);
                    r = W(e, w(o, i)),
                    r.selector = e
                }
                return r
            },
            H = t.select = function(e, t, n, i) {
                var o, r, a, s, c, l = "function" == typeof e && e,
                u = !i && _(e = l.selector || e);
                if (n = n || [], 1 === u.length) {
                    if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && R.getById && 9 === t.nodeType && E && T.relative[r[1].type]) {
                        if (t = (T.find.ID(a.matches[0].replace(Re, Te), t) || [])[0], !t) return n;
                        l && (t = t.parentNode),
                        e = e.slice(r.shift().value.length)
                    }
                    for (o = he.needsContext.test(e) ? 0 : r.length; o--&&(a = r[o], !T.relative[s = a.type]);) if ((c = T.find[s]) && (i = c(a.matches[0].replace(Re, Te), we.test(r[0].type) && d(t.parentNode) || t))) {
                        if (r.splice(o, 1), e = i.length && f(r), !e) return K.apply(n, i),
                        n;
                        break
                    }
                }
                return (l || x(e, u))(i, t, !E, n, we.test(e) && d(t.parentNode) || t),
                n
            },
            R.sortStable = G.split("").sort(X).join("") === G,
            R.detectDuplicates = !!I,
            A(),
            R.sortDetached = o(function(e) {
                return 1 & e.compareDocumentPosition(M.createElement("div"))
            }),
            o(function(e) {
                return e.innerHTML = "<a href='#'></a>",
                "#" === e.firstChild.getAttribute("href")
            }) || r("type|href|height|width",
            function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }),
            R.attributes && o(function(e) {
                return e.innerHTML = "<input/>",
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
            }) || r("value",
            function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }),
            o(function(e) {
                return null == e.getAttribute("disabled")
            }) || r(te,
            function(e, t, n) {
                var i;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value: null
            }),
            t
        } (e);
        Z.find = oe,
        Z.expr = oe.selectors,
        Z.expr[":"] = Z.expr.pseudos,
        Z.unique = oe.uniqueSort,
        Z.text = oe.getText,
        Z.isXMLDoc = oe.isXML,
        Z.contains = oe.contains;
        var re = Z.expr.match.needsContext,
        ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        se = /^.[^:#\[\.,]*$/;
        Z.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType ? Z.find.matchesSelector(i, e) ? [i] : [] : Z.find.matches(e, Z.grep(t,
            function(e) {
                return 1 === e.nodeType
            }))
        },
        Z.fn.extend({
            find: function(e) {
                var t, n = this.length,
                i = [],
                o = this;
                if ("string" != typeof e) return this.pushStack(Z(e).filter(function() {
                    for (t = 0; n > t; t++) if (Z.contains(o[t], this)) return ! 0
                }));
                for (t = 0; n > t; t++) Z.find(e, o[t], i);
                return i = this.pushStack(n > 1 ? Z.unique(i) : i),
                i.selector = this.selector ? this.selector + " " + e: e,
                i
            },
            filter: function(e) {
                return this.pushStack(i(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(i(this, e || [], !0))
            },
            is: function(e) {
                return !! i(this, "string" == typeof e && re.test(e) ? Z(e) : e || [], !1).length
            }
        });
        var ce, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        de = Z.fn.init = function(e, t) {
            var n, i;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : le.exec(e), !n || !n[1] && t) return ! t || t.jquery ? (t || ce).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t: Y, !0)), ae.test(n[1]) && Z.isPlainObject(t)) for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return i = Y.getElementById(n[2]),
                i && i.parentNode && (this.length = 1, this[0] = i),
                this.context = Y,
                this.selector = e,
                this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof ce.ready ? ce.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
        };
        de.prototype = Z.fn,
        ce = Z(Y);
        var ue = /^(?:parents|prev(?:Until|All))/,
        fe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        Z.extend({
            dir: function(e, t, n) {
                for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                    if (o && Z(e).is(n)) break;
                    i.push(e)
                }
                return i
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }),
        Z.fn.extend({
            has: function(e) {
                var t = Z(e, this),
                n = t.length;
                return this.filter(function() {
                    for (var e = 0; n > e; e++) if (Z.contains(this, t[e])) return ! 0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0,
                o = this.length,
                r = [], a = re.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; o > i; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                    r.push(n);
                    break
                }
                return this.pushStack(r.length > 1 ? Z.unique(r) : r)
            },
            index: function(e) {
                return e ? "string" == typeof e ? X.call(Z(e), this[0]) : X.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
            },
            add: function(e, t) {
                return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
            }
        }),
        Z.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t: null
            },
            parents: function(e) {
                return Z.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return Z.dir(e, "parentNode", n)
            },
            next: function(e) {
                return o(e, "nextSibling")
            },
            prev: function(e) {
                return o(e, "previousSibling")
            },
            nextAll: function(e) {
                return Z.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return Z.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return Z.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return Z.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return Z.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return Z.sibling(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || Z.merge([], e.childNodes)
            }
        },
        function(e, t) {
            Z.fn[e] = function(n, i) {
                var o = Z.map(this, t, n);
                return "Until" !== e.slice( - 5) && (i = n),
                i && "string" == typeof i && (o = Z.filter(i, o)),
                this.length > 1 && (fe[e] || Z.unique(o), ue.test(e) && o.reverse()),
                this.pushStack(o)
            }
        });
        var pe = /\S+/g,
        he = {};
        Z.Callbacks = function(e) {
            e = "string" == typeof e ? he[e] || r(e) : Z.extend({},
            e);
            var t, n, i, o, a, s, c = [],
            l = !e.once && [],
            d = function(r) {
                for (t = e.memory && r, n = !0, s = o || 0, o = 0, a = c.length, i = !0; c && a > s; s++) if (c[s].apply(r[0], r[1]) === !1 && e.stopOnFalse) {
                    t = !1;
                    break
                }
                i = !1,
                c && (l ? l.length && d(l.shift()) : t ? c = [] : u.disable())
            },
            u = {
                add: function() {
                    if (c) {
                        var n = c.length; !
                        function r(t) {
                            Z.each(t,
                            function(t, n) {
                                var i = Z.type(n);
                                "function" === i ? e.unique && u.has(n) || c.push(n) : n && n.length && "string" !== i && r(n)
                            })
                        } (arguments),
                        i ? a = c.length: t && (o = n, d(t))
                    }
                    return this
                },
                remove: function() {
                    return c && Z.each(arguments,
                    function(e, t) {
                        for (var n; (n = Z.inArray(t, c, n)) > -1;) c.splice(n, 1),
                        i && (a >= n && a--, s >= n && s--)
                    }),
                    this
                },
                has: function(e) {
                    return e ? Z.inArray(e, c) > -1 : !(!c || !c.length)
                },
                empty: function() {
                    return c = [],
                    a = 0,
                    this
                },
                disable: function() {
                    return c = l = t = void 0,
                    this
                },
                disabled: function() {
                    return ! c
                },
                lock: function() {
                    return l = void 0,
                    t || u.disable(),
                    this
                },
                locked: function() {
                    return ! l
                },
                fireWith: function(e, t) {
                    return ! c || n && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], i ? l.push(t) : d(t)),
                    this
                },
                fire: function() {
                    return u.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !! n
                }
            };
            return u
        },
        Z.extend({
            Deferred: function(e) {
                var t = [["resolve", "done", Z.Callbacks("once memory"), "resolved"], ["reject", "fail", Z.Callbacks("once memory"), "rejected"], ["notify", "progress", Z.Callbacks("memory")]],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments),
                        this
                    },
                    then: function() {
                        var e = arguments;
                        return Z.Deferred(function(n) {
                            Z.each(t,
                            function(t, r) {
                                var a = Z.isFunction(e[t]) && e[t];
                                o[r[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                })
                            }),
                            e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? Z.extend(e, i) : i
                    }
                },
                o = {};
                return i.pipe = i.then,
                Z.each(t,
                function(e, r) {
                    var a = r[2],
                    s = r[3];
                    i[r[1]] = a.add,
                    s && a.add(function() {
                        n = s
                    },
                    t[1 ^ e][2].disable, t[2][2].lock),
                    o[r[0]] = function() {
                        return o[r[0] + "With"](this === o ? i: this, arguments),
                        this
                    },
                    o[r[0] + "With"] = a.fireWith
                }),
                i.promise(o),
                e && e.call(o, o),
                o
            },
            when: function(e) {
                var t, n, i, o = 0,
                r = U.call(arguments),
                a = r.length,
                s = 1 !== a || e && Z.isFunction(e.promise) ? a: 0,
                c = 1 === s ? e: Z.Deferred(),
                l = function(e, n, i) {
                    return function(o) {
                        n[e] = this,
                        i[e] = arguments.length > 1 ? U.call(arguments) : o,
                        i === t ? c.notifyWith(n, i) : --s || c.resolveWith(n, i)
                    }
                };
                if (a > 1) for (t = new Array(a), n = new Array(a), i = new Array(a); a > o; o++) r[o] && Z.isFunction(r[o].promise) ? r[o].promise().done(l(o, i, r)).fail(c.reject).progress(l(o, n, t)) : --s;
                return s || c.resolveWith(i, r),
                c.promise()
            }
        });
        var ge;
        Z.fn.ready = function(e) {
            return Z.ready.promise().done(e),
            this
        },
        Z.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? Z.readyWait++:Z.ready(!0)
            },
            ready: function(e) { (e === !0 ? --Z.readyWait: Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (ge.resolveWith(Y, [Z]), Z.fn.triggerHandler && (Z(Y).triggerHandler("ready"), Z(Y).off("ready"))))
            }
        }),
        Z.ready.promise = function(t) {
            return ge || (ge = Z.Deferred(), "complete" === Y.readyState ? setTimeout(Z.ready) : (Y.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1))),
            ge.promise(t)
        },
        Z.ready.promise();
        var me = Z.access = function(e, t, n, i, o, r, a) {
            var s = 0,
            c = e.length,
            l = null == n;
            if ("object" === Z.type(n)) {
                o = !0;
                for (s in n) Z.access(e, t, s, n[s], !0, r, a)
            } else if (void 0 !== i && (o = !0, Z.isFunction(i) || (a = !0), l && (a ? (t.call(e, i), t = null) : (l = t, t = function(e, t, n) {
                return l.call(Z(e), n)
            })), t)) for (; c > s; s++) t(e[s], n, a ? i: i.call(e[s], s, t(e[s], n)));
            return o ? e: l ? t.call(e) : c ? t(e[0], n) : r
        };
        Z.acceptData = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        },
        s.uid = 1,
        s.accepts = Z.acceptData,
        s.prototype = {
            key: function(e) {
                if (!s.accepts(e)) return 0;
                var t = {},
                n = e[this.expando];
                if (!n) {
                    n = s.uid++;
                    try {
                        t[this.expando] = {
                            value: n
                        },
                        Object.defineProperties(e, t)
                    } catch(i) {
                        t[this.expando] = n,
                        Z.extend(e, t)
                    }
                }
                return this.cache[n] || (this.cache[n] = {}),
                n
            },
            set: function(e, t, n) {
                var i, o = this.key(e),
                r = this.cache[o];
                if ("string" == typeof t) r[t] = n;
                else if (Z.isEmptyObject(r)) Z.extend(this.cache[o], t);
                else for (i in t) r[i] = t[i];
                return r
            },
            get: function(e, t) {
                var n = this.cache[this.key(e)];
                return void 0 === t ? n: n[t]
            },
            access: function(e, t, n) {
                var i;
                return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i: this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n: t)
            },
            remove: function(e, t) {
                var n, i, o, r = this.key(e),
                a = this.cache[r];
                if (void 0 === t) this.cache[r] = {};
                else {
                    Z.isArray(t) ? i = t.concat(t.map(Z.camelCase)) : (o = Z.camelCase(t), t in a ? i = [t, o] : (i = o, i = i in a ? [i] : i.match(pe) || [])),
                    n = i.length;
                    for (; n--;) delete a[i[n]]
                }
            },
            hasData: function(e) {
                return ! Z.isEmptyObject(this.cache[e[this.expando]] || {})
            },
            discard: function(e) {
                e[this.expando] && delete this.cache[e[this.expando]]
            }
        };
        var ve = new s,
        Oe = new s,
        we = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ye = /([A-Z])/g;
        Z.extend({
            hasData: function(e) {
                return Oe.hasData(e) || ve.hasData(e)
            },
            data: function(e, t, n) {
                return Oe.access(e, t, n)
            },
            removeData: function(e, t) {
                Oe.remove(e, t)
            },
            _data: function(e, t, n) {
                return ve.access(e, t, n)
            },
            _removeData: function(e, t) {
                ve.remove(e, t)
            }
        }),
        Z.fn.extend({
            data: function(e, t) {
                var n, i, o, r = this[0],
                a = r && r.attributes;
                if (void 0 === e) {
                    if (this.length && (o = Oe.get(r), 1 === r.nodeType && !ve.get(r, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = Z.camelCase(i.slice(5)), c(r, i, o[i])));
                        ve.set(r, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each(function() {
                    Oe.set(this, e)
                }) : me(this,
                function(t) {
                    var n, i = Z.camelCase(e);
                    if (r && void 0 === t) {
                        if (n = Oe.get(r, e), void 0 !== n) return n;
                        if (n = Oe.get(r, i), void 0 !== n) return n;
                        if (n = c(r, i, void 0), void 0 !== n) return n
                    } else this.each(function() {
                        var n = Oe.get(this, i);
                        Oe.set(this, i, t),
                        -1 !== e.indexOf("-") && void 0 !== n && Oe.set(this, e, t)
                    })
                },
                null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    Oe.remove(this, e)
                })
            }
        }),
        Z.extend({
            queue: function(e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = ve.get(e, t), n && (!i || Z.isArray(n) ? i = ve.access(e, t, Z.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = Z.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = Z._queueHooks(e, t),
                a = function() {
                    Z.dequeue(e, t)
                };
                "inprogress" === o && (o = n.shift(), i--),
                o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, a, r)),
                !i && r && r.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return ve.get(e, n) || ve.access(e, n, {
                    empty: Z.Callbacks("once memory").add(function() {
                        ve.remove(e, [t + "queue", n])
                    })
                })
            }
        }),
        Z.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--),
                arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this: this.each(function() {
                    var n = Z.queue(this, e, t);
                    Z._queueHooks(this, e),
                    "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    Z.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                o = Z.Deferred(),
                r = this,
                a = this.length,
                s = function() {--i || o.resolveWith(r, [r])
                };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ve.get(r[a], e + "queueHooks"),
                n && n.empty && (i++, n.empty.add(s));
                return s(),
                o.promise(t)
            }
        });
        var Re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Te = ["Top", "Right", "Bottom", "Left"],
        be = function(e, t) {
            return e = t || e,
            "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
        },
        Ce = /^(?:checkbox|radio)$/i; !
        function() {
            var e = Y.createDocumentFragment(),
            t = e.appendChild(Y.createElement("div")),
            n = Y.createElement("input");
            n.setAttribute("type", "radio"),
            n.setAttribute("checked", "checked"),
            n.setAttribute("name", "t"),
            t.appendChild(n),
            z.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
            t.innerHTML = "<textarea>x</textarea>",
            z.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        } ();
        var _e = "undefined";
        z.focusinBubbles = "onfocusin" in e;
        var xe = /^key/,
        He = /^(?:mouse|pointer|contextmenu)|click/,
        Ne = /^(?:focusinfocus|focusoutblur)$/,
        Se = /^([^.]*)(?:\.(.+)|)$/;
        Z.event = {
            global: {},
            add: function(e, t, n, i, o) {
                var r, a, s, c, l, d, u, f, p, h, g, m = ve.get(e);
                if (m) for (n.handler && (r = n, n = r.handler, o = r.selector), n.guid || (n.guid = Z.guid++), (c = m.events) || (c = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
                    return typeof Z !== _e && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
                }), t = (t || "").match(pe) || [""], l = t.length; l--;) s = Se.exec(t[l]) || [],
                p = g = s[1],
                h = (s[2] || "").split(".").sort(),
                p && (u = Z.event.special[p] || {},
                p = (o ? u.delegateType: u.bindType) || p, u = Z.event.special[p] || {},
                d = Z.extend({
                    type: p,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && Z.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                },
                r), (f = c[p]) || (f = c[p] = [], f.delegateCount = 0, u.setup && u.setup.call(e, i, h, a) !== !1 || e.addEventListener && e.addEventListener(p, a, !1)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, d) : f.push(d), Z.event.global[p] = !0)
            },
            remove: function(e, t, n, i, o) {
                var r, a, s, c, l, d, u, f, p, h, g, m = ve.hasData(e) && ve.get(e);
                if (m && (c = m.events)) {
                    for (t = (t || "").match(pe) || [""], l = t.length; l--;) if (s = Se.exec(t[l]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (u = Z.event.special[p] || {},
                        p = (i ? u.delegateType: u.bindType) || p, f = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = f.length; r--;) d = f[r],
                        !o && g !== d.origType || n && n.guid !== d.guid || s && !s.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (f.splice(r, 1), d.selector && f.delegateCount--, u.remove && u.remove.call(e, d));
                        a && !f.length && (u.teardown && u.teardown.call(e, h, m.handle) !== !1 || Z.removeEvent(e, p, m.handle), delete c[p])
                    } else for (p in c) Z.event.remove(e, p + t[l], n, i, !0);
                    Z.isEmptyObject(c) && (delete m.handle, ve.remove(e, "events"))
                }
            },
            trigger: function(t, n, i, o) {
                var r, a, s, c, l, d, u, f = [i || Y],
                p = J.call(t, "type") ? t.type: t,
                h = J.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = s = i = i || Y, 3 !== i.nodeType && 8 !== i.nodeType && !Ne.test(p + Z.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), l = p.indexOf(":") < 0 && "on" + p, t = t[Z.expando] ? t: new Z.Event(p, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : Z.makeArray(n, [t]), u = Z.event.special[p] || {},
                o || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                    if (!o && !u.noBubble && !Z.isWindow(i)) {
                        for (c = u.delegateType || p, Ne.test(c + p) || (a = a.parentNode); a; a = a.parentNode) f.push(a),
                        s = a;
                        s === (i.ownerDocument || Y) && f.push(s.defaultView || s.parentWindow || e)
                    }
                    for (r = 0; (a = f[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? c: u.bindType || p,
                    d = (ve.get(a, "events") || {})[t.type] && ve.get(a, "handle"),
                    d && d.apply(a, n),
                    d = l && a[l],
                    d && d.apply && Z.acceptData(a) && (t.result = d.apply(a, n), t.result === !1 && t.preventDefault());
                    return t.type = p,
                    o || t.isDefaultPrevented() || u._default && u._default.apply(f.pop(), n) !== !1 || !Z.acceptData(i) || l && Z.isFunction(i[p]) && !Z.isWindow(i) && (s = i[l], s && (i[l] = null), Z.event.triggered = p, i[p](), Z.event.triggered = void 0, s && (i[l] = s)),
                    t.result
                }
            },
            dispatch: function(e) {
                e = Z.event.fix(e);
                var t, n, i, o, r, a = [],
                s = U.call(arguments),
                c = (ve.get(this, "events") || {})[e.type] || [],
                l = Z.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                    for (a = Z.event.handlers.call(this, e, c), t = 0; (o = a[t++]) && !e.isPropagationStopped();) for (e.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, i = ((Z.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, s), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, e),
                    e.result
                }
            },
            handlers: function(e, t) {
                var n, i, o, r, a = [],
                s = t.delegateCount,
                c = e.target;
                if (s && c.nodeType && (!e.button || "click" !== e.type)) for (; c !== this; c = c.parentNode || this) if (c.disabled !== !0 || "click" !== e.type) {
                    for (i = [], n = 0; s > n; n++) r = t[n],
                    o = r.selector + " ",
                    void 0 === i[o] && (i[o] = r.needsContext ? Z(o, this).index(c) >= 0 : Z.find(o, this, null, [c]).length),
                    i[o] && i.push(r);
                    i.length && a.push({
                        elem: c,
                        handlers: i
                    })
                }
                return s < t.length && a.push({
                    elem: this,
                    handlers: t.slice(s)
                }),
                a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
                    e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, o, r = t.button;
                    return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Y, i = n.documentElement, o = n.body, e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)),
                    e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
                    e
                }
            },
            fix: function(e) {
                if (e[Z.expando]) return e;
                var t, n, i, o = e.type,
                r = e,
                a = this.fixHooks[o];
                for (a || (this.fixHooks[o] = a = He.test(o) ? this.mouseHooks: xe.test(o) ? this.keyHooks: {}), i = a.props ? this.props.concat(a.props) : this.props, e = new Z.Event(r), t = i.length; t--;) n = i[t],
                e[n] = r[n];
                return e.target || (e.target = Y),
                3 === e.target.nodeType && (e.target = e.target.parentNode),
                a.filter ? a.filter(e, r) : e
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== u() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === u() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(e) {
                        return Z.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, i) {
                var o = Z.extend(new Z.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? Z.event.trigger(o, null, t) : Z.event.dispatch.call(t, o),
                o.isDefaultPrevented() && n.preventDefault()
            }
        },
        Z.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        },
        Z.Event = function(e, t) {
            return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? l: d) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
        },
        Z.Event.prototype = {
            isDefaultPrevented: d,
            isPropagationStopped: d,
            isImmediatePropagationStopped: d,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = l,
                e && e.preventDefault && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = l,
                e && e.stopPropagation && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = l,
                e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
        Z.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        },
        function(e, t) {
            Z.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                    o = e.relatedTarget,
                    r = e.handleObj;
                    return (!o || o !== i && !Z.contains(i, o)) && (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t),
                    n
                }
            }
        }),
        z.focusinBubbles || Z.each({
            focus: "focusin",
            blur: "focusout"
        },
        function(e, t) {
            var n = function(e) {
                Z.event.simulate(t, e.target, Z.event.fix(e), !0)
            };
            Z.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                    o = ve.access(i, t);
                    o || i.addEventListener(e, n, !0),
                    ve.access(i, t, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                    o = ve.access(i, t) - 1;
                    o ? ve.access(i, t, o) : (i.removeEventListener(e, n, !0), ve.remove(i, t))
                }
            }
        }),
        Z.fn.extend({
            on: function(e, t, n, i, o) {
                var r, a;
                if ("object" == typeof e) {
                    "string" != typeof t && (n = n || t, t = void 0);
                    for (a in e) this.on(a, t, n, e[a], o);
                    return this
                }
                if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = d;
                else if (!i) return this;
                return 1 === o && (r = i, i = function(e) {
                    return Z().off(e),
                    r.apply(this, arguments)
                },
                i.guid = r.guid || (r.guid = Z.guid++)),
                this.each(function() {
                    Z.event.add(this, e, i, n, t)
                })
            },
            one: function(e, t, n, i) {
                return this.on(e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj,
                Z(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace: i.origType, i.selector, i.handler),
                this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, t, e[o]);
                    return this
                }
                return (t === !1 || "function" == typeof t) && (n = t, t = void 0),
                n === !1 && (n = d),
                this.each(function() {
                    Z.event.remove(this, e, n, t)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    Z.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? Z.event.trigger(e, t, n, !0) : void 0
            }
        });
        var Ie = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ae = /<([\w:]+)/,
        Me = /<|&#?\w+;/,
        Fe = /<(?:script|style|link)/i,
        Ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
        $e = /^$|\/(?:java|ecma)script/i,
        ke = /^true\/(.*)/,
        De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Le = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        Le.optgroup = Le.option,
        Le.tbody = Le.tfoot = Le.colgroup = Le.caption = Le.thead,
        Le.th = Le.td,
        Z.extend({
            clone: function(e, t, n) {
                var i, o, r, a, s = e.cloneNode(!0),
                c = Z.contains(e.ownerDocument, e);
                if (! (z.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e))) for (a = v(s), r = v(e), i = 0, o = r.length; o > i; i++) O(r[i], a[i]);
                if (t) if (n) for (r = r || v(e), a = a || v(s), i = 0, o = r.length; o > i; i++) m(r[i], a[i]);
                else m(e, s);
                return a = v(s, "script"),
                a.length > 0 && g(a, !c && v(e, "script")),
                s
            },
            buildFragment: function(e, t, n, i) {
                for (var o, r, a, s, c, l, d = t.createDocumentFragment(), u = [], f = 0, p = e.length; p > f; f++) if (o = e[f], o || 0 === o) if ("object" === Z.type(o)) Z.merge(u, o.nodeType ? [o] : o);
                else if (Me.test(o)) {
                    for (r = r || d.appendChild(t.createElement("div")), a = (Ae.exec(o) || ["", ""])[1].toLowerCase(), s = Le[a] || Le._default, r.innerHTML = s[1] + o.replace(Ie, "<$1></$2>") + s[2], l = s[0]; l--;) r = r.lastChild;
                    Z.merge(u, r.childNodes),
                    r = d.firstChild,
                    r.textContent = ""
                } else u.push(t.createTextNode(o));
                for (d.textContent = "", f = 0; o = u[f++];) if ((!i || -1 === Z.inArray(o, i)) && (c = Z.contains(o.ownerDocument, o), r = v(d.appendChild(o), "script"), c && g(r), n)) for (l = 0; o = r[l++];) $e.test(o.type || "") && n.push(o);
                return d
            },
            cleanData: function(e) {
                for (var t, n, i, o, r = Z.event.special,
                a = 0; void 0 !== (n = e[a]); a++) {
                    if (Z.acceptData(n) && (o = n[ve.expando], o && (t = ve.cache[o]))) {
                        if (t.events) for (i in t.events) r[i] ? Z.event.remove(n, i) : Z.removeEvent(n, i, t.handle);
                        ve.cache[o] && delete ve.cache[o]
                    }
                    delete Oe.cache[n[Oe.expando]]
                }
            }
        }),
        Z.fn.extend({
            text: function(e) {
                return me(this,
                function(e) {
                    return void 0 === e ? Z.text(this) : this.empty().each(function() { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                    })
                },
                null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments,
                function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = f(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments,
                function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = f(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments,
                function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments,
                function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, i = e ? Z.filter(e, this) : this, o = 0; null != (n = i[o]); o++) t || 1 !== n.nodeType || Z.cleanData(v(n)),
                n.parentNode && (t && Z.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e,
                t = null == t ? e: t,
                this.map(function() {
                    return Z.clone(this, e, t)
                })
            },
            html: function(e) {
                return me(this,
                function(e) {
                    var t = this[0] || {},
                    n = 0,
                    i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !Fe.test(e) && !Le[(Ae.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(Ie, "<$1></$2>");
                        try {
                            for (; i > n; n++) t = this[n] || {},
                            1 === t.nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch(o) {}
                    }
                    t && this.empty().append(e)
                },
                null, e, arguments.length)
            },
            replaceWith: function() {
                var e = arguments[0];
                return this.domManip(arguments,
                function(t) {
                    e = this.parentNode,
                    Z.cleanData(v(this)),
                    e && e.replaceChild(t, this)
                }),
                e && (e.length || e.nodeType) ? this: this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t) {
                e = B.apply([], e);
                var n, i, o, r, a, s, c = 0,
                l = this.length,
                d = this,
                u = l - 1,
                f = e[0],
                g = Z.isFunction(f);
                if (g || l > 1 && "string" == typeof f && !z.checkClone && Ee.test(f)) return this.each(function(n) {
                    var i = d.eq(n);
                    g && (e[0] = f.call(this, n, i.html())),
                    i.domManip(e, t)
                });
                if (l && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                    for (o = Z.map(v(n, "script"), p), r = o.length; l > c; c++) a = n,
                    c !== u && (a = Z.clone(a, !0, !0), r && Z.merge(o, v(a, "script"))),
                    t.call(this[c], a, c);
                    if (r) for (s = o[o.length - 1].ownerDocument, Z.map(o, h), c = 0; r > c; c++) a = o[c],
                    $e.test(a.type || "") && !ve.access(a, "globalEval") && Z.contains(s, a) && (a.src ? Z._evalUrl && Z._evalUrl(a.src) : Z.globalEval(a.textContent.replace(De, "")))
                }
                return this
            }
        }),
        Z.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        },
        function(e, t) {
            Z.fn[e] = function(e) {
                for (var n, i = [], o = Z(e), r = o.length - 1, a = 0; r >= a; a++) n = a === r ? this: this.clone(!0),
                Z(o[a])[t](n),
                W.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var Ge, Pe = {},
        je = /^margin/,
        qe = new RegExp("^(" + Re + ")(?!px)[a-z%]+$", "i"),
        Ue = function(t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        }; !
        function() {
            function t() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
                a.innerHTML = "",
                o.appendChild(r);
                var t = e.getComputedStyle(a, null);
                n = "1%" !== t.top,
                i = "4px" === t.width,
                o.removeChild(r)
            }
            var n, i, o = Y.documentElement,
            r = Y.createElement("div"),
            a = Y.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", z.clearCloneStyle = "content-box" === a.style.backgroundClip, r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", r.appendChild(a), e.getComputedStyle && Z.extend(z, {
                pixelPosition: function() {
                    return t(),
                    n
                },
                boxSizingReliable: function() {
                    return null == i && t(),
                    i
                },
                reliableMarginRight: function() {
                    var t, n = a.appendChild(Y.createElement("div"));
                    return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                    n.style.marginRight = n.style.width = "0",
                    a.style.width = "1px",
                    o.appendChild(r),
                    t = !parseFloat(e.getComputedStyle(n, null).marginRight),
                    o.removeChild(r),
                    a.removeChild(n),
                    t
                }
            }))
        } (),
        Z.swap = function(e, t, n, i) {
            var o, r, a = {};
            for (r in t) a[r] = e.style[r],
            e.style[r] = t[r];
            o = n.apply(e, i || []);
            for (r in t) e.style[r] = a[r];
            return o
        };
        var Be = /^(none|table(?!-c[ea]).+)/,
        We = new RegExp("^(" + Re + ")(.*)$", "i"),
        Xe = new RegExp("^([+-])=(" + Re + ")", "i"),
        Ve = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Qe = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Je = ["Webkit", "O", "Moz", "ms"];
        Z.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = R(e, "opacity");
                            return "" === n ? "1": n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, r, a, s = Z.camelCase(t),
                    c = e.style;
                    return t = Z.cssProps[s] || (Z.cssProps[s] = b(c, s)),
                    a = Z.cssHooks[t] || Z.cssHooks[s],
                    void 0 === n ? a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o: c[t] : (r = typeof n, "string" === r && (o = Xe.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(Z.css(e, t)), r = "number"), void(null != n && n === n && ("number" !== r || Z.cssNumber[s] || (n += "px"), z.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (c[t] = n))))
                }
            },
            css: function(e, t, n, i) {
                var o, r, a, s = Z.camelCase(t);
                return t = Z.cssProps[s] || (Z.cssProps[s] = b(e.style, s)),
                a = Z.cssHooks[t] || Z.cssHooks[s],
                a && "get" in a && (o = a.get(e, !0, n)),
                void 0 === o && (o = R(e, t, i)),
                "normal" === o && t in Qe && (o = Qe[t]),
                "" === n || n ? (r = parseFloat(o), n === !0 || Z.isNumeric(r) ? r || 0 : o) : o
            }
        }),
        Z.each(["height", "width"],
        function(e, t) {
            Z.cssHooks[t] = {
                get: function(e, n, i) {
                    return n ? Be.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Ve,
                    function() {
                        return x(e, t, i)
                    }) : x(e, t, i) : void 0
                },
                set: function(e, n, i) {
                    var o = i && Ue(e);
                    return C(e, n, i ? _(e, t, i, "border-box" === Z.css(e, "boxSizing", !1, o), o) : 0)
                }
            }
        }),
        Z.cssHooks.marginRight = T(z.reliableMarginRight,
        function(e, t) {
            return t ? Z.swap(e, {
                display: "inline-block"
            },
            R, [e, "marginRight"]) : void 0
        }),
        Z.each({
            margin: "",
            padding: "",
            border: "Width"
        },
        function(e, t) {
            Z.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0,
                    o = {},
                    r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + Te[i] + t] = r[i] || r[i - 2] || r[0];
                    return o
                }
            },
            je.test(e) || (Z.cssHooks[e + t].set = C)
        }),
        Z.fn.extend({
            css: function(e, t) {
                return me(this,
                function(e, t, n) {
                    var i, o, r = {},
                    a = 0;
                    if (Z.isArray(t)) {
                        for (i = Ue(e), o = t.length; o > a; a++) r[t[a]] = Z.css(e, t[a], !1, i);
                        return r
                    }
                    return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
                },
                e, t, arguments.length > 1)
            },
            show: function() {
                return H(this, !0)
            },
            hide: function() {
                return H(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    be(this) ? Z(this).show() : Z(this).hide()
                })
            }
        }),
        Z.Tween = N,
        N.prototype = {
            constructor: N,
            init: function(e, t, n, i, o, r) {
                this.elem = e,
                this.prop = n,
                this.easing = o || "swing",
                this.options = t,
                this.start = this.now = this.cur(),
                this.end = i,
                this.unit = r || (Z.cssNumber[n] ? "": "px")
            },
            cur: function() {
                var e = N.propHooks[this.prop];
                return e && e.get ? e.get(this) : N.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = N.propHooks[this.prop];
                return this.options.duration ? this.pos = t = Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : N.propHooks._default.set(this),
                this
            }
        },
        N.prototype.init.prototype = N.prototype,
        N.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t: 0) : e.elem[e.prop]
                },
                set: function(e) {
                    Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        },
        N.propHooks.scrollTop = N.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        Z.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return.5 - Math.cos(e * Math.PI) / 2
            }
        },
        Z.fx = N.prototype.init,
        Z.fx.step = {};
        var ze, Ye, Ke = /^(?:toggle|show|hide)$/,
        Ze = new RegExp("^(?:([+-])=|)(" + Re + ")([a-z%]*)$", "i"),
        et = /queueHooks$/,
        tt = [M],
        nt = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                i = n.cur(),
                o = Ze.exec(t),
                r = o && o[3] || (Z.cssNumber[e] ? "": "px"),
                a = (Z.cssNumber[e] || "px" !== r && +i) && Ze.exec(Z.css(n.elem, e)),
                s = 1,
                c = 20;
                if (a && a[3] !== r) {
                    r = r || a[3],
                    o = o || [],
                    a = +i || 1;
                    do s = s || ".5",
                    a /= s,
                    Z.style(n.elem, e, a + r);
                    while (s !== (s = n.cur() / i) && 1 !== s && --c)
                }
                return o && (a = n.start = +a || +i || 0, n.unit = r, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]),
                n
            }]
        };
        Z.Animation = Z.extend(E, {
            tweener: function(e, t) {
                Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0,
                o = e.length; o > i; i++) n = e[i],
                nt[n] = nt[n] || [],
                nt[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? tt.unshift(e) : tt.push(e)
            }
        }),
        Z.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? Z.extend({},
            e) : {
                complete: n || !n && t || Z.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !Z.isFunction(t) && t
            };
            return i.duration = Z.fx.off ? 0 : "number" == typeof i.duration ? i.duration: i.duration in Z.fx.speeds ? Z.fx.speeds[i.duration] : Z.fx.speeds._default,
            (null == i.queue || i.queue === !0) && (i.queue = "fx"),
            i.old = i.complete,
            i.complete = function() {
                Z.isFunction(i.old) && i.old.call(this),
                i.queue && Z.dequeue(this, i.queue)
            },
            i
        },
        Z.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(be).css("opacity", 0).show().end().animate({
                    opacity: t
                },
                e, n, i)
            },
            animate: function(e, t, n, i) {
                var o = Z.isEmptyObject(e),
                r = Z.speed(t, n, i),
                a = function() {
                    var t = E(this, Z.extend({},
                    e), r); (o || ve.get(this, "finish")) && t.stop(!0)
                };
                return a.finish = a,
                o || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop,
                    t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0),
                t && e !== !1 && this.queue(e || "fx", []),
                this.each(function() {
                    var t = !0,
                    o = null != e && e + "queueHooks",
                    r = Z.timers,
                    a = ve.get(this);
                    if (o) a[o] && a[o].stop && i(a[o]);
                    else for (o in a) a[o] && a[o].stop && et.test(o) && i(a[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1)); (t || !n) && Z.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"),
                this.each(function() {
                    var t, n = ve.get(this),
                    i = n[e + "queue"],
                    o = n[e + "queueHooks"],
                    r = Z.timers,
                    a = i ? i.length: 0;
                    for (n.finish = !0, Z.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }),
        Z.each(["toggle", "show", "hide"],
        function(e, t) {
            var n = Z.fn[t];
            Z.fn[t] = function(e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(I(t, !0), e, i, o)
            }
        }),
        Z.each({
            slideDown: I("show"),
            slideUp: I("hide"),
            slideToggle: I("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        },
        function(e, t) {
            Z.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }),
        Z.timers = [],
        Z.fx.tick = function() {
            var e, t = 0,
            n = Z.timers;
            for (ze = Z.now(); t < n.length; t++) e = n[t],
            e() || n[t] !== e || n.splice(t--, 1);
            n.length || Z.fx.stop(),
            ze = void 0
        },
        Z.fx.timer = function(e) {
            Z.timers.push(e),
            e() ? Z.fx.start() : Z.timers.pop()
        },
        Z.fx.interval = 13,
        Z.fx.start = function() {
            Ye || (Ye = setInterval(Z.fx.tick, Z.fx.interval))
        },
        Z.fx.stop = function() {
            clearInterval(Ye),
            Ye = null
        },
        Z.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        Z.fn.delay = function(e, t) {
            return e = Z.fx ? Z.fx.speeds[e] || e: e,
            t = t || "fx",
            this.queue(t,
            function(t, n) {
                var i = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        function() {
            var e = Y.createElement("input"),
            t = Y.createElement("select"),
            n = t.appendChild(Y.createElement("option"));
            e.type = "checkbox",
            z.checkOn = "" !== e.value,
            z.optSelected = n.selected,
            t.disabled = !0,
            z.optDisabled = !n.disabled,
            e = Y.createElement("input"),
            e.value = "t",
            e.type = "radio",
            z.radioValue = "t" === e.value
        } ();
        var it, ot, rt = Z.expr.attrHandle;
        Z.fn.extend({
            attr: function(e, t) {
                return me(this, Z.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    Z.removeAttr(this, e)
                })
            }
        }),
        Z.extend({
            attr: function(e, t, n) {
                var i, o, r = e.nodeType;
                if (e && 3 !== r && 8 !== r && 2 !== r) return typeof e.getAttribute === _e ? Z.prop(e, t, n) : (1 === r && Z.isXMLDoc(e) || (t = t.toLowerCase(), i = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? ot: it)), void 0 === n ? i && "get" in i && null !== (o = i.get(e, t)) ? o: (o = Z.find.attr(e, t), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o: (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t))
            },
            removeAttr: function(e, t) {
                var n, i, o = 0,
                r = t && t.match(pe);
                if (r && 1 === e.nodeType) for (; n = r[o++];) i = Z.propFix[n] || n,
                Z.expr.match.bool.test(n) && (e[i] = !1),
                e.removeAttribute(n)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!z.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                            n && (e.value = n),
                            t
                        }
                    }
                }
            }
        }),
        ot = {
            set: function(e, t, n) {
                return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n),
                n
            }
        },
        Z.each(Z.expr.match.bool.source.match(/\w+/g),
        function(e, t) {
            var n = rt[t] || Z.find.attr;
            rt[t] = function(e, t, i) {
                var o, r;
                return i || (r = rt[t], rt[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, rt[t] = r),
                o
            }
        });
        var at = /^(?:input|select|textarea|button)$/i;
        Z.fn.extend({
            prop: function(e, t) {
                return me(this, Z.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[Z.propFix[e] || e]
                })
            }
        }),
        Z.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(e, t, n) {
                var i, o, r, a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a) return r = 1 !== a || !Z.isXMLDoc(e),
                r && (t = Z.propFix[t] || t, o = Z.propHooks[t]),
                void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i: e[t] = n: o && "get" in o && null !== (i = o.get(e, t)) ? i: e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        return e.hasAttribute("tabindex") || at.test(e.nodeName) || e.href ? e.tabIndex: -1
                    }
                }
            }
        }),
        z.optSelected || (Z.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex,
                null
            }
        }),
        Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
        function() {
            Z.propFix[this.toLowerCase()] = this
        });
        var st = /[\t\r\n\f]/g;
        Z.fn.extend({
            addClass: function(e) {
                var t, n, i, o, r, a, s = "string" == typeof e && e,
                c = 0,
                l = this.length;
                if (Z.isFunction(e)) return this.each(function(t) {
                    Z(this).addClass(e.call(this, t, this.className))
                });
                if (s) for (t = (e || "").match(pe) || []; l > c; c++) if (n = this[c], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : " ")) {
                    for (r = 0; o = t[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                    a = Z.trim(i),
                    n.className !== a && (n.className = a)
                }
                return this
            },
            removeClass: function(e) {
                var t, n, i, o, r, a, s = 0 === arguments.length || "string" == typeof e && e,
                c = 0,
                l = this.length;
                if (Z.isFunction(e)) return this.each(function(t) {
                    Z(this).removeClass(e.call(this, t, this.className))
                });
                if (s) for (t = (e || "").match(pe) || []; l > c; c++) if (n = this[c], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : "")) {
                    for (r = 0; o = t[r++];) for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                    a = e ? Z.trim(i) : "",
                    n.className !== a && (n.className = a)
                }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Z.isFunction(e) ?
                function(n) {
                    Z(this).toggleClass(e.call(this, n, this.className, t), t)
                }: function() {
                    if ("string" === n) for (var t, i = 0,
                    o = Z(this), r = e.match(pe) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else(n === _e || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "": ve.get(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ",
                n = 0,
                i = this.length; i > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(st, " ").indexOf(t) >= 0) return ! 0;
                return ! 1
            }
        });
        var ct = /\r/g;
        Z.fn.extend({
            val: function(e) {
                var t, n, i, o = this[0];
                return arguments.length ? (i = Z.isFunction(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, Z(this).val()) : e, null == o ? o = "": "number" == typeof o ? o += "": Z.isArray(o) && (o = Z.map(o,
                    function(e) {
                        return null == e ? "": e + ""
                    })), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                })) : o ? (t = Z.valHooks[o.type] || Z.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n: (n = o.value, "string" == typeof n ? n.replace(ct, "") : null == n ? "": n)) : void 0
            }
        }),
        Z.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = Z.find.attr(e, "value");
                        return null != t ? t: Z.trim(Z.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options,
                        o = e.selectedIndex,
                        r = "select-one" === e.type || 0 > o,
                        a = r ? null: [], s = r ? o + 1 : i.length, c = 0 > o ? s: r ? o: 0; s > c; c++) if (n = i[c], !(!n.selected && c !== o || (z.optDisabled ? n.disabled: null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
                            if (t = Z(n).val(), r) return t;
                            a.push(t)
                        }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, i, o = e.options,
                        r = Z.makeArray(t), a = o.length; a--;) i = o[a],
                        (i.selected = Z.inArray(i.value, r) >= 0) && (n = !0);
                        return n || (e.selectedIndex = -1),
                        r
                    }
                }
            }
        }),
        Z.each(["radio", "checkbox"],
        function() {
            Z.valHooks[this] = {
                set: function(e, t) {
                    return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
                }
            },
            z.checkOn || (Z.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on": e.value
            })
        }),
        Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
        function(e, t) {
            Z.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }),
        Z.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var lt = Z.now(),
        dt = /\?/;
        Z.parseJSON = function(e) {
            return JSON.parse(e + "")
        },
        Z.parseXML = function(e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
                n = new DOMParser,
                t = n.parseFromString(e, "text/xml")
            } catch(i) {
                t = void 0
            }
            return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e),
            t
        };
        var ut = /#.*$/,
        ft = /([?&])_=[^&]*/,
        pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        gt = /^(?:GET|HEAD)$/,
        mt = /^\/\//,
        vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ot = {},
        wt = {},
        yt = "*/".concat("*"),
        Rt = e.location.href,
        Tt = vt.exec(Rt.toLowerCase()) || [];
        Z.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Rt,
                type: "GET",
                isLocal: ht.test(Tt[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": yt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": Z.parseJSON,
                    "text xml": Z.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? D(D(e, Z.ajaxSettings), t) : D(Z.ajaxSettings, e)
            },
            ajaxPrefilter: $(Ot),
            ajaxTransport: $(wt),
            ajax: function(e, t) {
                function n(e, t, n, a) {
                    var c, d, v, O, y, T = t;
                    2 !== w && (w = 2, s && clearTimeout(s), i = void 0, r = a || "", R.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, n && (O = L(u, R, n)), O = G(u, O, R, c), c ? (u.ifModified && (y = R.getResponseHeader("Last-Modified"), y && (Z.lastModified[o] = y), y = R.getResponseHeader("etag"), y && (Z.etag[o] = y)), 204 === e || "HEAD" === u.type ? T = "nocontent": 304 === e ? T = "notmodified": (T = O.state, d = O.data, v = O.error, c = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), R.status = e, R.statusText = (t || T) + "", c ? h.resolveWith(f, [d, T, R]) : h.rejectWith(f, [R, T, v]), R.statusCode(m), m = void 0, l && p.trigger(c ? "ajaxSuccess": "ajaxError", [R, u, c ? d: v]), g.fireWith(f, [R, T]), l && (p.trigger("ajaxComplete", [R, u]), --Z.active || Z.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0),
                t = t || {};
                var i, o, r, a, s, c, l, d, u = Z.ajaxSetup({},
                t),
                f = u.context || u,
                p = u.context && (f.nodeType || f.jquery) ? Z(f) : Z.event,
                h = Z.Deferred(),
                g = Z.Callbacks("once memory"),
                m = u.statusCode || {},
                v = {},
                O = {},
                w = 0,
                y = "canceled",
                R = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === w) {
                            if (!a) for (a = {}; t = pt.exec(r);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null: t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? r: null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return w || (e = O[n] = O[n] || e, v[e] = t),
                        this
                    },
                    overrideMimeType: function(e) {
                        return w || (u.mimeType = e),
                        this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e) if (2 > w) for (t in e) m[t] = [m[t], e[t]];
                        else R.always(e[R.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || y;
                        return i && i.abort(t),
                        n(0, t),
                        this
                    }
                };
                if (h.promise(R).complete = g.add, R.success = R.done, R.error = R.fail, u.url = ((e || u.url || Rt) + "").replace(ut, "").replace(mt, Tt[1] + "//"), u.type = t.method || t.type || u.method || u.type, u.dataTypes = Z.trim(u.dataType || "*").toLowerCase().match(pe) || [""], null == u.crossDomain && (c = vt.exec(u.url.toLowerCase()), u.crossDomain = !(!c || c[1] === Tt[1] && c[2] === Tt[2] && (c[3] || ("http:" === c[1] ? "80": "443")) === (Tt[3] || ("http:" === Tt[1] ? "80": "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = Z.param(u.data, u.traditional)), k(Ot, u, t, R), 2 === w) return R;
                l = Z.event && u.global,
                l && 0 === Z.active++&&Z.event.trigger("ajaxStart"),
                u.type = u.type.toUpperCase(),
                u.hasContent = !gt.test(u.type),
                o = u.url,
                u.hasContent || (u.data && (o = u.url += (dt.test(o) ? "&": "?") + u.data, delete u.data), u.cache === !1 && (u.url = ft.test(o) ? o.replace(ft, "$1_=" + lt++) : o + (dt.test(o) ? "&": "?") + "_=" + lt++)),
                u.ifModified && (Z.lastModified[o] && R.setRequestHeader("If-Modified-Since", Z.lastModified[o]), Z.etag[o] && R.setRequestHeader("If-None-Match", Z.etag[o])),
                (u.data && u.hasContent && u.contentType !== !1 || t.contentType) && R.setRequestHeader("Content-Type", u.contentType),
                R.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + yt + "; q=0.01": "") : u.accepts["*"]);
                for (d in u.headers) R.setRequestHeader(d, u.headers[d]);
                if (u.beforeSend && (u.beforeSend.call(f, R, u) === !1 || 2 === w)) return R.abort();
                y = "abort";
                for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) R[d](u[d]);
                if (i = k(wt, u, t, R)) {
                    R.readyState = 1,
                    l && p.trigger("ajaxSend", [R, u]),
                    u.async && u.timeout > 0 && (s = setTimeout(function() {
                        R.abort("timeout")
                    },
                    u.timeout));
                    try {
                        w = 1,
                        i.send(v, n)
                    } catch(T) {
                        if (! (2 > w)) throw T;
                        n( - 1, T)
                    }
                } else n( - 1, "No Transport");
                return R
            },
            getJSON: function(e, t, n) {
                return Z.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return Z.get(e, void 0, t, "script")
            }
        }),
        Z.each(["get", "post"],
        function(e, t) {
            Z[t] = function(e, n, i, o) {
                return Z.isFunction(n) && (o = o || i, i = n, n = void 0),
                Z.ajax({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: i
                })
            }
        }),
        Z._evalUrl = function(e) {
            return Z.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        },
        Z.fn.extend({
            wrapAll: function(e) {
                var t;
                return Z.isFunction(e) ? this.each(function(t) {
                    Z(this).wrapAll(e.call(this, t))
                }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this)
            },
            wrapInner: function(e) {
                return this.each(Z.isFunction(e) ?
                function(t) {
                    Z(this).wrapInner(e.call(this, t))
                }: function() {
                    var t = Z(this),
                    n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = Z.isFunction(e);
                return this.each(function(n) {
                    Z(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
                }).end()
            }
        }),
        Z.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0
        },
        Z.expr.filters.visible = function(e) {
            return ! Z.expr.filters.hidden(e)
        };
        var bt = /%20/g,
        Ct = /\[\]$/,
        _t = /\r?\n/g,
        xt = /^(?:submit|button|image|reset|file)$/i,
        Ht = /^(?:input|select|textarea|keygen)/i;
        Z.param = function(e, t) {
            var n, i = [],
            o = function(e, t) {
                t = Z.isFunction(t) ? t() : null == t ? "": t,
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
            if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e,
            function() {
                o(this.name, this.value)
            });
            else for (n in e) P(n, e[n], t, o);
            return i.join("&").replace(bt, "+")
        },
        Z.fn.extend({
            serialize: function() {
                return Z.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = Z.prop(this, "elements");
                    return e ? Z.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !Z(this).is(":disabled") && Ht.test(this.nodeName) && !xt.test(e) && (this.checked || !Ce.test(e))
                }).map(function(e, t) {
                    var n = Z(this).val();
                    return null == n ? null: Z.isArray(n) ? Z.map(n,
                    function(e) {
                        return {
                            name: t.name,
                            value: e.replace(_t, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(_t, "\r\n")
                    }
                }).get()
            }
        }),
        Z.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch(e) {}
        };
        var Nt = 0,
        St = {},
        It = {
            0 : 200,
            1223 : 204
        },
        At = Z.ajaxSettings.xhr();
        e.attachEvent && e.attachEvent("onunload",
        function() {
            for (var e in St) St[e]()
        }),
        z.cors = !!At && "withCredentials" in At,
        z.ajax = At = !!At,
        Z.ajaxTransport(function(e) {
            var t;
            return z.cors || At && !e.crossDomain ? {
                send: function(n, i) {
                    var o, r = e.xhr(),
                    a = ++Nt;
                    if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (o in e.xhrFields) r[o] = e.xhrFields[o];
                    e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType),
                    e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (o in n) r.setRequestHeader(o, n[o]);
                    t = function(e) {
                        return function() {
                            t && (delete St[a], t = r.onload = r.onerror = null, "abort" === e ? r.abort() : "error" === e ? i(r.status, r.statusText) : i(It[r.status] || r.status, r.statusText, "string" == typeof r.responseText ? {
                                text: r.responseText
                            }: void 0, r.getAllResponseHeaders()))
                        }
                    },
                    r.onload = t(),
                    r.onerror = t("error"),
                    t = St[a] = t("abort");
                    try {
                        r.send(e.hasContent && e.data || null)
                    } catch(s) {
                        if (t) throw s
                    }
                },
                abort: function() {
                    t && t()
                }
            }: void 0
        }),
        Z.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return Z.globalEval(e),
                    e
                }
            }
        }),
        Z.ajaxPrefilter("script",
        function(e) {
            void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET")
        }),
        Z.ajaxTransport("script",
        function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(i, o) {
                        t = Z("<script>").prop({
                            async: !0,
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(),
                            n = null,
                            e && o("error" === e.type ? 404 : 200, e.type)
                        }),
                        Y.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Mt = [],
        Ft = /(=)\?(?=&|$)|\?\?/;
        Z.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Mt.pop() || Z.expando + "_" + lt++;
                return this[e] = !0,
                e
            }
        }),
        Z.ajaxPrefilter("json jsonp",
        function(t, n, i) {
            var o, r, a, s = t.jsonp !== !1 && (Ft.test(t.url) ? "url": "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ft.test(t.data) && "data");
            return s || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ft, "$1" + o) : t.jsonp !== !1 && (t.url += (dt.test(t.url) ? "&": "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
                return a || Z.error(o + " was not called"),
                a[0]
            },
            t.dataTypes[0] = "json", r = e[o], e[o] = function() {
                a = arguments
            },
            i.always(function() {
                e[o] = r,
                t[o] && (t.jsonpCallback = n.jsonpCallback, Mt.push(o)),
                a && Z.isFunction(r) && r(a[0]),
                a = r = void 0
            }), "script") : void 0
        }),
        Z.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1),
            t = t || Y;
            var i = ae.exec(e),
            o = !n && [];
            return i ? [t.createElement(i[1])] : (i = Z.buildFragment([e], t, o), o && o.length && Z(o).remove(), Z.merge([], i.childNodes))
        };
        var Et = Z.fn.load;
        Z.fn.load = function(e, t, n) {
            if ("string" != typeof e && Et) return Et.apply(this, arguments);
            var i, o, r, a = this,
            s = e.indexOf(" ");
            return s >= 0 && (i = Z.trim(e.slice(s)), e = e.slice(0, s)),
            Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"),
            a.length > 0 && Z.ajax({
                url: e,
                type: o,
                dataType: "html",
                data: t
            }).done(function(e) {
                r = arguments,
                a.html(i ? Z("<div>").append(Z.parseHTML(e)).find(i) : e)
            }).complete(n &&
            function(e, t) {
                a.each(n, r || [e.responseText, t, e])
            }),
            this
        },
        Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
        function(e, t) {
            Z.fn[t] = function(e) {
                return this.on(t, e)
            }
        }),
        Z.expr.filters.animated = function(e) {
            return Z.grep(Z.timers,
            function(t) {
                return e === t.elem
            }).length
        };
        var $t = e.document.documentElement;
        Z.offset = {
            setOffset: function(e, t, n) {
                var i, o, r, a, s, c, l, d = Z.css(e, "position"),
                u = Z(e),
                f = {};
                "static" === d && (e.style.position = "relative"),
                s = u.offset(),
                r = Z.css(e, "top"),
                c = Z.css(e, "left"),
                l = ("absolute" === d || "fixed" === d) && (r + c).indexOf("auto") > -1,
                l ? (i = u.position(), a = i.top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(c) || 0),
                Z.isFunction(t) && (t = t.call(e, n, s)),
                null != t.top && (f.top = t.top - s.top + a),
                null != t.left && (f.left = t.left - s.left + o),
                "using" in t ? t.using.call(e, f) : u.css(f)
            }
        },
        Z.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this: this.each(function(t) {
                    Z.offset.setOffset(this, e, t)
                });
                var t, n, i = this[0],
                o = {
                    top: 0,
                    left: 0
                },
                r = i && i.ownerDocument;
                return r ? (t = r.documentElement, Z.contains(t, i) ? (typeof i.getBoundingClientRect !== _e && (o = i.getBoundingClientRect()), n = j(r), {
                    top: o.top + n.pageYOffset - t.clientTop,
                    left: o.left + n.pageXOffset - t.clientLeft
                }) : o) : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                    return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (i = e.offset()), i.top += Z.css(e[0], "borderTopWidth", !0), i.left += Z.css(e[0], "borderLeftWidth", !0)),
                    {
                        top: t.top - i.top - Z.css(n, "marginTop", !0),
                        left: t.left - i.left - Z.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || $t; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
                    return e || $t
                })
            }
        }),
        Z.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        },
        function(t, n) {
            var i = "pageYOffset" === n;
            Z.fn[t] = function(o) {
                return me(this,
                function(t, o, r) {
                    var a = j(t);
                    return void 0 === r ? a ? a[n] : t[o] : void(a ? a.scrollTo(i ? e.pageXOffset: r, i ? r: e.pageYOffset) : t[o] = r)
                },
                t, o, arguments.length, null)
            }
        }),
        Z.each(["top", "left"],
        function(e, t) {
            Z.cssHooks[t] = T(z.pixelPosition,
            function(e, n) {
                return n ? (n = R(e, t), qe.test(n) ? Z(e).position()[t] + "px": n) : void 0
            })
        }),
        Z.each({
            Height: "height",
            Width: "width"
        },
        function(e, t) {
            Z.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            },
            function(n, i) {
                Z.fn[i] = function(i, o) {
                    var r = arguments.length && (n || "boolean" != typeof i),
                    a = n || (i === !0 || o === !0 ? "margin": "border");
                    return me(this,
                    function(t, n, i) {
                        var o;
                        return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? Z.css(t, n, a) : Z.style(t, n, i, a)
                    },
                    t, r ? i: void 0, r, null)
                }
            })
        }),
        Z.fn.size = function() {
            return this.length
        },
        Z.fn.andSelf = Z.fn.addBack,
        "function" == typeof define && define.amd && define("jquery", [],
        function() {
            return Z
        });
        var kt = e.jQuery,
        Dt = e.$;
        return Z.noConflict = function(t) {
            return e.$ === Z && (e.$ = Dt),
            t && e.jQuery === Z && (e.jQuery = kt),
            Z
        },
        typeof t === _e && (e.jQuery = e.$ = Z),
        Z
    }),
    function(e, t) {
        "object" == typeof exports && exports && "string" != typeof exports.nodeName ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : (e.Mustache = {},
        t(e.Mustache))
    } (this,
    function(e) {
        function t(e) {
            return "function" == typeof e
        }
        function n(e) {
            return g(e) ? "array": typeof e
        }
        function i(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }
        function o(e, t) {
            return null != e && "object" == typeof e && t in e
        }
        function r(e, t) {
            return m.call(e, t)
        }
        function a(e) {
            return ! r(v, e)
        }
        function s(e) {
            return String(e).replace(/[&<>"'`=\/]/g,
            function(e) {
                return O[e]
            })
        }
        function c(t, n) {
            function o() {
                if (v && !O) for (; m.length;) delete h[m.pop()];
                else m = [];
                v = !1,
                O = !1
            }
            function r(e) {
                if ("string" == typeof e && (e = e.split(y, 2)), !g(e) || 2 !== e.length) throw new Error("Invalid tags: " + e);
                s = new RegExp(i(e[0]) + "\\s*"),
                c = new RegExp("\\s*" + i(e[1])),
                f = new RegExp("\\s*" + i("}" + e[1]))
            }
            if (!t) return [];
            var s, c, f, p = [],
            h = [],
            m = [],
            v = !1,
            O = !1;
            r(n || e.tags);
            for (var C, _, x, H, N, S, I = new u(t); ! I.eos();) {
                if (C = I.pos, x = I.scanUntil(s)) for (var A = 0,
                M = x.length; A < M; ++A) H = x.charAt(A),
                a(H) ? m.push(h.length) : O = !0,
                h.push(["text", H, C, C + 1]),
                C += 1,
                "\n" === H && o();
                if (!I.scan(s)) break;
                if (v = !0, _ = I.scan(b) || "name", I.scan(w), "=" === _ ? (x = I.scanUntil(R), I.scan(R), I.scanUntil(c)) : "{" === _ ? (x = I.scanUntil(f), I.scan(T), I.scanUntil(c), _ = "&") : x = I.scanUntil(c), !I.scan(c)) throw new Error("Unclosed tag at " + I.pos);
                if (N = [_, x, C, I.pos], h.push(N), "#" === _ || "^" === _) p.push(N);
                else if ("/" === _) {
                    if (S = p.pop(), !S) throw new Error('Unopened section "' + x + '" at ' + C);
                    if (S[1] !== x) throw new Error('Unclosed section "' + S[1] + '" at ' + C)
                } else "name" === _ || "{" === _ || "&" === _ ? O = !0 : "=" === _ && r(x)
            }
            if (S = p.pop()) throw new Error('Unclosed section "' + S[1] + '" at ' + I.pos);
            return d(l(h))
        }
        function l(e) {
            for (var t, n, i = [], o = 0, r = e.length; o < r; ++o) t = e[o],
            t && ("text" === t[0] && n && "text" === n[0] ? (n[1] += t[1], n[3] = t[3]) : (i.push(t), n = t));
            return i
        }
        function d(e) {
            for (var t, n, i = [], o = i, r = [], a = 0, s = e.length; a < s; ++a) switch (t = e[a], t[0]) {
            case "#":
            case "^":
                o.push(t),
                r.push(t),
                o = t[4] = [];
                break;
            case "/":
                n = r.pop(),
                n[5] = t[2],
                o = r.length > 0 ? r[r.length - 1][4] : i;
                break;
            default:
                o.push(t)
            }
            return i
        }
        function u(e) {
            this.string = e,
            this.tail = e,
            this.pos = 0
        }
        function f(e, t) {
            this.view = e,
            this.cache = {
                ".": this.view
            },
            this.parent = t
        }
        function p() {
            this.cache = {}
        }
        var h = Object.prototype.toString,
        g = Array.isArray ||
        function(e) {
            return "[object Array]" === h.call(e)
        },
        m = RegExp.prototype.test,
        v = /\S/,
        O = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        },
        w = /\s*/,
        y = /\s+/,
        R = /\s*=/,
        T = /\s*\}/,
        b = /#|\^|\/|>|\{|&|=|!/;
        u.prototype.eos = function() {
            return "" === this.tail
        },
        u.prototype.scan = function(e) {
            var t = this.tail.match(e);
            if (!t || 0 !== t.index) return "";
            var n = t[0];
            return this.tail = this.tail.substring(n.length),
            this.pos += n.length,
            n
        },
        u.prototype.scanUntil = function(e) {
            var t, n = this.tail.search(e);
            switch (n) {
            case - 1 : t = this.tail,
                this.tail = "";
                break;
            case 0:
                t = "";
                break;
            default:
                t = this.tail.substring(0, n),
                this.tail = this.tail.substring(n)
            }
            return this.pos += t.length,
            t
        },
        f.prototype.push = function(e) {
            return new f(e, this)
        },
        f.prototype.lookup = function(e) {
            var n, i = this.cache;
            if (i.hasOwnProperty(e)) n = i[e];
            else {
                for (var r, a, s = this,
                c = !1; s;) {
                    if (e.indexOf(".") > 0) for (n = s.view, r = e.split("."), a = 0; null != n && a < r.length;) a === r.length - 1 && (c = o(n, r[a])),
                    n = n[r[a++]];
                    else n = s.view[e],
                    c = o(s.view, e);
                    if (c) break;
                    s = s.parent
                }
                i[e] = n
            }
            return t(n) && (n = n.call(this.view)),
            n
        },
        p.prototype.clearCache = function() {
            this.cache = {}
        },
        p.prototype.parse = function(e, t) {
            var n = this.cache,
            i = n[e];
            return null == i && (i = n[e] = c(e, t)),
            i
        },
        p.prototype.render = function(e, t, n) {
            var i = this.parse(e),
            o = t instanceof f ? t: new f(t);
            return this.renderTokens(i, o, n, e)
        },
        p.prototype.renderTokens = function(e, t, n, i) {
            for (var o, r, a, s = "",
            c = 0,
            l = e.length; c < l; ++c) a = void 0,
            o = e[c],
            r = o[0],
            "#" === r ? a = this.renderSection(o, t, n, i) : "^" === r ? a = this.renderInverted(o, t, n, i) : ">" === r ? a = this.renderPartial(o, t, n, i) : "&" === r ? a = this.unescapedValue(o, t) : "name" === r ? a = this.escapedValue(o, t) : "text" === r && (a = this.rawValue(o)),
            void 0 !== a && (s += a);
            return s
        },
        p.prototype.renderSection = function(e, n, i, o) {
            function r(e) {
                return a.render(e, n, i)
            }
            var a = this,
            s = "",
            c = n.lookup(e[1]);
            if (c) {
                if (g(c)) for (var l = 0,
                d = c.length; l < d; ++l) s += this.renderTokens(e[4], n.push(c[l]), i, o);
                else if ("object" == typeof c || "string" == typeof c || "number" == typeof c) s += this.renderTokens(e[4], n.push(c), i, o);
                else if (t(c)) {
                    if ("string" != typeof o) throw new Error("Cannot use higher-order sections without the original template");
                    c = c.call(n.view, o.slice(e[3], e[5]), r),
                    null != c && (s += c)
                } else s += this.renderTokens(e[4], n, i, o);
                return s
            }
        },
        p.prototype.renderInverted = function(e, t, n, i) {
            var o = t.lookup(e[1]);
            if (!o || g(o) && 0 === o.length) return this.renderTokens(e[4], t, n, i)
        },
        p.prototype.renderPartial = function(e, n, i) {
            if (i) {
                var o = t(i) ? i(e[1]) : i[e[1]];
                return null != o ? this.renderTokens(this.parse(o), n, i, o) : void 0
            }
        },
        p.prototype.unescapedValue = function(e, t) {
            var n = t.lookup(e[1]);
            if (null != n) return n
        },
        p.prototype.escapedValue = function(t, n) {
            var i = n.lookup(t[1]);
            if (null != i) return e.escape(i)
        },
        p.prototype.rawValue = function(e) {
            return e[1]
        },
        e.name = "mustache.js",
        e.version = "2.2.1",
        e.tags = ["{{", "}}"];
        var C = new p;
        e.clearCache = function() {
            return C.clearCache()
        },
        e.parse = function(e, t) {
            return C.parse(e, t)
        },
        e.render = function(e, t, i) {
            if ("string" != typeof e) throw new TypeError('Invalid template! Template should be a "string" but "' + n(e) + '" was given as the first argument for mustache#render(template, view, partials)');
            return C.render(e, t, i)
        },
        e.to_html = function(n, i, o, r) {
            var a = e.render(n, i, o);
            return t(r) ? void r(a) : a
        },
        e.escape = s,
        e.Scanner = u,
        e.Context = f,
        e.Writer = p
    });
    var Channel = function() {
        "use strict";
        function e(e, t, n, i) {
            function r(t) {
                for (var n = 0; n < t.length; n++) if (t[n].win === e) return ! 0;
                return ! 1
            }
            var a = !1;
            if ("*" === t) {
                for (var s in o) if (o.hasOwnProperty(s) && "*" !== s && "object" == typeof o[s][n] && (a = r(o[s][n]))) break
            } else o["*"] && o["*"][n] && (a = r(o["*"][n])),
            !a && o[t] && o[t][n] && (a = r(o[t][n]));
            if (a) throw "A channel is already bound to the same window which overlaps with origin '" + t + "' and has scope '" + n + "'";
            "object" != typeof o[t] && (o[t] = {}),
            "object" != typeof o[t][n] && (o[t][n] = []),
            o[t][n].push({
                win: e,
                handler: i
            })
        }
        function t(e, t, n) {
            for (var i = o[t][n], r = 0; r < i.length; r++) i[r].win === e && i.splice(r, 1);
            0 === o[t][n].length && delete o[t][n]
        }
        function n(e) {
            return Array.isArray ? Array.isArray(e) : e.constructor.toString().indexOf("Array") != -1
        }
        var i = Math.floor(1000001 * Math.random()),
        o = {},
        r = {},
        a = function(e) {
            try {
                var t = JSON.parse(e.data);
                if ("object" != typeof t || null === t) throw "malformed"
            } catch(e) {
                return
            }
            var n, i, a, s = e.source,
            c = e.origin;
            if ("string" == typeof t.method) {
                var l = t.method.split("::");
                2 == l.length ? (n = l[0], a = l[1]) : a = t.method
            }
            if ("undefined" != typeof t.id && (i = t.id), "string" == typeof a) {
                var d = !1;
                if (o[c] && o[c][n]) for (var u = 0; u < o[c][n].length; u++) if (o[c][n][u].win === s) {
                    o[c][n][u].handler(c, a, t),
                    d = !0;
                    break
                }
                if (!d && o["*"] && o["*"][n]) for (var u = 0; u < o["*"][n].length; u++) if (o["*"][n][u].win === s) {
                    o["*"][n][u].handler(c, a, t);
                    break
                }
            } else "undefined" != typeof i && r[i] && r[i](c, a, t)
        };
        return window.addEventListener ? window.addEventListener("message", a, !1) : window.attachEvent && window.attachEvent("onmessage", a),
        {
            build: function(o) {
                var a = function(e) {
                    if (o.debugOutput && window.console && window.console.log) {
                        try {
                            "string" != typeof e && (e = JSON.stringify(e))
                        } catch(t) {}
                        alert("[" + l + "] " + e)
                    }
                };
                if (!window.postMessage) throw "jschannel cannot run this browser, no postMessage";
                if (!window.JSON || !window.JSON.stringify || !window.JSON.parse) throw "jschannel cannot run this browser, no JSON parsing/serialization";
                if ("object" != typeof o) throw "Channel build invoked without a proper object argument";
                if (!o.window || !o.window.postMessage) throw "Channel.build() called without a valid window argument";
                if (window === o.window) throw "target window is same as present window -- not allowed";
                var s = !1;
                if ("string" == typeof o.origin) {
                    var c;
                    "*" === o.origin ? s = !0 : null !== (c = o.origin.match(/^https?:\/\/(?:[-a-zA-Z0-9_\.])+(?::\d+)?/)) && (o.origin = c[0].toLowerCase(), s = !0)
                }
                if (!s) throw "Channel.build() called with an invalid origin";
                if ("undefined" != typeof o.scope) {
                    if ("string" != typeof o.scope) throw "scope, when specified, must be a string";
                    if (o.scope.split("::").length > 1) throw "scope may not contain double colons: '::'"
                }
                var l = function() {
                    for (var e = "",
                    t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
                    n = 0; n < 5; n++) e += t.charAt(Math.floor(Math.random() * t.length));
                    return e
                } (),
                d = {},
                u = {},
                f = {},
                p = !1,
                h = [],
                g = function(e, t, n) {
                    var i = !1,
                    o = !1;
                    return {
                        origin: t,
                        invoke: function(t, i) {
                            if (!f[e]) throw "attempting to invoke a callback of a nonexistent transaction: " + e;
                            for (var o = !1,
                            r = 0; r < n.length; r++) if (t === n[r]) {
                                o = !0;
                                break
                            }
                            if (!o) throw "request supports no such callback '" + t + "'";
                            w({
                                id: e,
                                callback: t,
                                params: i
                            })
                        },
                        error: function(t, n) {
                            if (o = !0, !f[e]) throw "error called for nonexistent message: " + e;
                            delete f[e],
                            w({
                                id: e,
                                error: t,
                                message: n
                            })
                        },
                        complete: function(t) {
                            if (o = !0, !f[e]) throw "complete called for nonexistent message: " + e;
                            delete f[e],
                            w({
                                id: e,
                                result: t
                            })
                        },
                        delayReturn: function(e) {
                            return "boolean" == typeof e && (i = e === !0),
                            i
                        },
                        completed: function() {
                            return o
                        }
                    }
                },
                m = function(e, t, n) {
                    return window.setTimeout(function() {
                        if (u[e]) {
                            var i = "timeout (" + t + "ms) exceeded on method '" + n + "'"; (0, u[e].error)("timeout_error", i),
                            delete u[e],
                            delete r[e]
                        }
                    },
                    t)
                },
                v = function(e, t, i) {
                    if ("function" == typeof o.gotMessageObserver) try {
                        o.gotMessageObserver(e, i)
                    } catch(s) {
                        a("gotMessageObserver() raised an exception: " + s.toString())
                    }
                    if (i.id && t) {
                        if (d[t]) {
                            var c = g(i.id, e, i.callbacks ? i.callbacks: []);
                            f[i.id] = {};
                            try {
                                if (i.callbacks && n(i.callbacks) && i.callbacks.length > 0) for (var l = 0; l < i.callbacks.length; l++) {
                                    for (var p = i.callbacks[l], h = i.params, m = p.split("/"), v = 0; v < m.length - 1; v++) {
                                        var O = m[v];
                                        "object" != typeof h[O] && (h[O] = {}),
                                        h = h[O]
                                    }
                                    h[m[m.length - 1]] = function() {
                                        var e = p;
                                        return function(t) {
                                            return c.invoke(e, t)
                                        }
                                    } ()
                                }
                                var w = d[t](c, i.params);
                                c.delayReturn() || c.completed() || c.complete(w)
                            } catch(s) {
                                var y = "runtime_error",
                                R = null;
                                if ("string" == typeof s ? R = s: "object" == typeof s && (s && n(s) && 2 == s.length ? (y = s[0], R = s[1]) : "string" == typeof s.error && (y = s.error, s.message ? "string" == typeof s.message ? R = s.message: s = s.message: R = "")), null === R) try {
                                    R = JSON.stringify(s),
                                    "undefined" == typeof R && (R = s.toString())
                                } catch(T) {
                                    R = s.toString()
                                }
                                c.error(y, R)
                            }
                        }
                    } else i.id && i.callback ? u[i.id] && u[i.id].callbacks && u[i.id].callbacks[i.callback] ? u[i.id].callbacks[i.callback](i.params) : a("ignoring invalid callback, id:" + i.id + " (" + i.callback + ")") : i.id ? u[i.id] ? (i.error ? (0, u[i.id].error)(i.error, i.message) : void 0 !== i.result ? (0, u[i.id].success)(i.result) : (0, u[i.id].success)(), delete u[i.id], delete r[i.id]) : a("ignoring invalid response: " + i.id) : t && d[t] && d[t]({
                        origin: e
                    },
                    i.params)
                };
                e(o.window, o.origin, "string" == typeof o.scope ? o.scope: "", v);
                var O = function(e) {
                    return "string" == typeof o.scope && o.scope.length && (e = [o.scope, e].join("::")),
                    e
                },
                w = function(e, t) {
                    if (!e) throw "postMessage called with null message";
                    var n = p ? "post  ": "queue ";
                    if (a(n + " message: " + JSON.stringify(e)), t || p) {
                        if ("function" == typeof o.postMessageObserver) try {
                            o.postMessageObserver(o.origin, e)
                        } catch(i) {
                            a("postMessageObserver() raised an exception: " + i.toString())
                        }
                        o.window.postMessage(JSON.stringify(e), o.origin)
                    } else h.push(e)
                },
                y = function(e, t) {
                    if (a("ready msg received"), p) throw "received ready message while in ready state.  help!";
                    for (l += "ping" === t ? "-R": "-L", R.unbind("__ready"), p = !0, a("ready msg accepted."), "ping" === t && R.notify({
                        method: "__ready",
                        params: "pong"
                    }); h.length;) w(h.pop());
                    "function" == typeof o.onReady && o.onReady(R)
                },
                R = {
                    unbind: function(e) {
                        if (d[e]) {
                            if (!delete d[e]) throw "can't delete method: " + e;
                            return ! 0
                        }
                        return ! 1
                    },
                    bind: function(e, t) {
                        if (!e || "string" != typeof e) throw "'method' argument to bind must be string";
                        if (!t || "function" != typeof t) throw "callback missing from bind params";
                        if (d[e]) throw "method '" + e + "' is already bound!";
                        return d[e] = t,
                        this
                    },
                    call: function(e) {
                        if (!e) throw "missing arguments to call function";
                        if (!e.method || "string" != typeof e.method) throw "'method' argument to call must be string";
                        if (!e.success || "function" != typeof e.success) throw "'success' callback missing from call";
                        var t = {},
                        n = [],
                        o = [],
                        a = function(e, i) {
                            if (o.indexOf(i) >= 0) throw "params cannot be a recursive data structure";
                            if (o.push(i), "object" == typeof i) for (var r in i) if (i.hasOwnProperty(r)) {
                                var s = e + (e.length ? "/": "") + r;
                                "function" == typeof i[r] ? (t[s] = i[r], n.push(s), delete i[r]) : "object" == typeof i[r] && a(s, i[r])
                            }
                        };
                        a("", e.params);
                        var s = {
                            id: i,
                            method: O(e.method),
                            params: e.params
                        };
                        n.length && (s.callbacks = n),
                        e.timeout && m(i, e.timeout, O(e.method)),
                        u[i] = {
                            callbacks: t,
                            error: e.error,
                            success: e.success
                        },
                        r[i] = v,
                        i++,
                        w(s)
                    },
                    notify: function(e) {
                        if (!e) throw "missing arguments to notify function";
                        if (!e.method || "string" != typeof e.method) throw "'method' argument to notify must be string";
                        w({
                            method: O(e.method),
                            params: e.params
                        })
                    },
                    destroy: function() {
                        t(o.window, o.origin, "string" == typeof o.scope ? o.scope: ""),
                        window.removeEventListener ? window.removeEventListener("message", v, !1) : window.detachEvent && window.detachEvent("onmessage", v),
                        p = !1,
                        d = {},
                        f = {},
                        u = {},
                        o.origin = null,
                        h = [],
                        a("channel destroyed"),
                        l = ""
                    }
                };
                return R.bind("__ready", y),
                setTimeout(function() {
                    w({
                        method: O("__ready"),
                        params: "ping"
                    },
                    !0)
                },
                0),
                R
            }
        }
    } ();
    window.HORTOR = {
        init: function(e) {
            var t = HORTOR_CONF.OriginalChannel.replace(/\_$/g, ""),
            n = ["shift"],
            i = {
                shift: HORTOR_CONF.GameCenterHost + "/img/shiftQrcode.jpg",
                kkdt: HORTOR_CONF.GameCenterHost + "/img/kkdtQrcode.jpg"
            },
            o = {
                crane: HORTOR_CONF.GameCenterHost + "/img/qewyQrcode.jpg"
            },
            r = o[HORTOR_GAME_CONF.GameId] || i[t] || "";
            HORTOR_CONF.ChannelLimit = n.indexOf(t) > -1,
            HORTOR_CONF.showModalHeader = !r,
            HORTOR_GAME_CONF.SubscribeQRCode = r || HORTOR_GAME_CONF.SubscribeQRCode,
            this._config = {
                share: {
                    timeline: {},
                    friend: {}
                },
                hoverPosition: {
                    top: window.HORTOR_GAME_CONF.HoverPosition && window.HORTOR_GAME_CONF.HoverPosition.top || "140px",
                    onLeft: window.HORTOR_GAME_CONF.HoverPosition && window.HORTOR_GAME_CONF.HoverPosition.onLeft || !1
                }
            };
            try {
                this._chan = Channel.build({
                    window: document.getElementById("gameFrame").contentWindow,
                    origin: "*",
                    scope: "sdk",
                    debugOutput: 3 == this._getParameByName("wxDebugMode")
                })
            } catch(a) {
                alert("host build channel error: " + JSON.stringify(a))
            }
            this._chan.bind("config", this.config.bind(this)),
            this._chan.bind("pay", this.pay.bind(this)),
            this._chan.bind("refresh", this.refresh.bind(this)),
            this._chan.bind("showQRCode", this.showQRCode.bind(this)),
            this._chan.bind("auth", this.auth.bind(this)),
            this._chan.bind("showImg", this.showImg.bind(this)),
            this._chan.bind("getShareUrl", this.getShareUrl.bind(this)),
            this._chan.bind("isShowTimeline", this.isShowTimeline.bind(this)),
            this._chan.bind("isSafe", this.isSafe.bind(this)),
            this.initWebViewJavascriptBridge(),
            this._configWX(),
            $(document).ready(function() {
                window.HORTOR._configUI(),
                e && window.HORTOR_SIDEBAR.init(),
                window.CONST = {
                    GIFT_BATCH_TP: {
                        COMMON: 0,
                        GROUP: 1,
                        VIP: 2,
                        HOLIDY: 3,
                        SCORE: 4
                    },
                    SCORE_BATCH_TP: {
                        ONLYONCE: 0,
                        LIMITDAY: 1,
                        UNLIMIT: 2
                    },
                    GIFT_CODE_TP: {
                        COMMON: 0,
                        UNIQUE: 1,
                        NOCODE: 2
                    }
                },
                window.IsShowAppDownload = !1
            });
            var s = this;
            $.get(HORTOR_CONF.ApiHost + "/gc/sdk/info-server?openId=" + HORTOR_CONF.UserId + "&gameId=" + HORTOR_GAME_CONF.GameId,
            function(e) {
                function t(e) {
                    e.unGetGift ? $("#hover_coupon").show() : e.hasNewInfo ? $("#hover_info").show() : e.hasNewServer && $("#hover_server").show()
                }
                HORTOR_CONF.InfoServerData = e,
                console.log("info server data:", e),
                HORTOR_CONF.ChannelLimit || t(e),
                s.loadSafariSaveMainModal(),
                s.loadGsVipAlert(e),
                s.checkReward(e)
            }),
            window.HORTOR_CONF.HasVipActivity && $.get(HORTOR_CONF.ApiHost + "/gc/sdk/vip-active?&gameId=" + HORTOR_GAME_CONF.GameId,
            function(e) {
                HORTOR_CONF.VipActiveData = e,
                console.log("VipActive data:", e)
            }),
            $.get(window.HORTOR_CONF.GameCenterHost + "/templates/sidebar.html?v=1.5.8",
            function(e) {
                window.HORTOR_CONF.SidebarTemplate = e
            }),
            $.get(window.HORTOR_CONF.GameCenterHost + "/templates/barcodeModal.html?v=1.3.8",
            function(e) {
                var t = {
                    GameCenterHost: HORTOR_CONF.GameCenterHost,
                    SubscribeQRCode: HORTOR_GAME_CONF.SubscribeQRCode,
                    ChannelName: HORTOR_CONF.ChannelName,
                    showHeader: HORTOR_CONF.showModalHeader
                },
                n = Mustache.render(e, t);
                $("#barcodeModal").html(n)
            }),
            $.get(window.HORTOR_CONF.GameCenterHost + "/templates/alertModal.html?v=1.5.6",
            function(e) {
                window.HORTOR_CONF.AlertTemplate = e
            }),
            $.get(window.HORTOR_CONF.GameCenterHost + "/templates/ios_pay_alert.html?v=1.5.0",
            function(e) {
                var t = Mustache.render(e);
                $("#iosPayAlertModal").html(t)
            }),
            $.get(window.HORTOR_CONF.GameCenterHost + "/templates/showImg.html?v=1.5.1",
            function(e) {
                var t = {
                    SubscribeQRCode: HORTOR_GAME_CONF.SubscribeQRCode,
                    ChannelName: HORTOR_CONF.ChannelName
                },
                n = Mustache.render(e, t);
                $("#showImg").html(n)
            }),
            $.get(window.HORTOR_CONF.GameCenterHost + "/templates/exitModal.html?v=1.5.1",
            function(e) {
                var t = {
                    GameRecommendGameUrl: HORTOR_CONF.GameRecommend.GameUrl,
                    GameRecommendBanner: HORTOR_CONF.GameRecommend.Banner,
                    GameCenterHost: HORTOR_CONF.GameCenterHost,
                    IsSubscribe: HORTOR_CONF.IsSubscribe,
                    SubscribeQRCode: HORTOR_GAME_CONF.SubscribeQRCode
                },
                n = Mustache.render(e, t);
                $("#exitModal").html(n),
                s._registerEventListeners()
            });
            var c = "";
            c = navigator.userAgent.indexOf("MicroMessenger") > -1 ? window.HORTOR_CONF.GameCenterHost + "/templates/payQrcodeModal_wechat.html?v=1.3.9": window.HORTOR_CONF.GameCenterHost + "/templates/payQrcodeModal_pc.html?v=1.3.9",
            $.get(c,
            function(e) {
                var t = navigator.userAgent.indexOf("Windows NT") > -1,
                n = {
                    GameCenterHost: HORTOR_CONF.GameCenterHost,
                    WindowWx: t
                },
                i = Mustache.render(e, n);
                $("#payQrcodeModal").html(i),
                s._registerCancelPayEvent()
            }),
            $.get(window.HORTOR_CONF.GameCenterHost + "/templates/h5payModal.html?v=1.5.1",
            function(e) {
                var t = {
                    GameCenterHost: HORTOR_CONF.GameCenterHost
                },
                n = Mustache.render(e, t);
                $("#h5PayModal").html(n),
                s._registerCancelH5PayEvent()
            }),
            setTimeout(function() {
                $("#splash").hide()
            },
            2e3),
            this._scriptLoadJs(window.HORTOR_CONF.GameCenterHost + "/clipboard.min.js")
        },
        loadSafariSaveMainModal: function() {
            var e = this;
            $.get(window.HORTOR_CONF.GameCenterHost + "/templates/safariSaveMainModal.html?v=1.5.0",
            function(t) {
                var n = {
                    GameCenterHost: HORTOR_CONF.GameCenterHost
                },
                i = Mustache.render(t, n);
                $("#safariSaveMainModal").html(i),
                $("#safariSaveMainModal .cancel").click(function(t) {
                    $("#safariSaveMainModal").hide(),
                    e.updateAttentTimeForSafariGameMain()
                }),
                setTimeout(function() {
                    HORTOR_CONF.InfoServerData.isShowSafariMain && navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("HortorApp") == -1 && navigator.userAgent.indexOf("Mobile") > -1 && navigator.userAgent.indexOf("Android") == -1 && navigator.userAgent.indexOf("MicroMessenger") == -1 && $("#safariSaveMainModal").show()
                },
                2e3)
            })
        },
        loadGsVipAlert: function(e) {
            var t = this,
            n = ["1001", "1002", "1003", "1004", "1005"];
            n.indexOf(e.gs) > -1 && e.isShowAlert && $.get(window.HORTOR_CONF.GameCenterHost + "/templates/gsVipModal.html?v=1.3.9",
            function(n) {
                var i = {
                    gs: e.gs,
                    GameCenterHost: HORTOR_CONF.GameCenterHost,
                    showHeader: HORTOR_CONF.showModalHeader
                },
                o = Mustache.render(n, i);
                $("#gsVipModal").html(o),
                setTimeout(function() {
                    t._gsVipAlert()
                },
                2e3)
            })
        },
        notTestHost: function() {
            var e = location.hostname.toLocaleLowerCase();
            return e.indexOf(".com") > -1 && "gc.tonglulove.com" !== e
        },
        checkReward: function(e) {
            e.winnerActiveId && this._getRewardInfo(e.winnerActiveId)
        },
        _getRewardInfo: function(e) {
            var t = this,
            n = (t.notTestHost() ? "//channel.hortorgames.com": "//test-h5-api.longdichuanshuo.com:8080") + "/actives/" + e + "/winners/" + HORTOR_CONF.UserId,
            i = (t.notTestHost() ? "//resource.hortor010.com": "//test-resource.hortor010.com") + "/wxworksheet/#/channelActive?";
            $.ajax({
                type: "GET",
                url: n,
                success: function(n) {
                    if (!n || !n.data) return console.log("获取不到获奖信息！");
                    console.log("获取获奖信息！", n);
                    var n = n.data,
                    o = i + ["activeId=" + e, "openId=" + HORTOR_CONF.UserId, "time=" + HORTOR_CONF.TimeNow, "sign=" + HORTOR_CONF.Sign].join("&");
                    rewardInfo = "您在" + n.activeTitle + "活动中，活动排名第" + n.rank + "名，满足获奖条件，快去领奖吧！",
                    t.showAlert({
                        title: "恭喜您，中奖啦！",
                        text: rewardInfo,
                        btns: [{
                            text: "去领奖",
                            type: "primary",
                            onClick: function() {
                                window.location.href = o
                            }
                        },
                        {
                            text: "取消"
                        }]
                    })
                },
                error: function(e, t, n) {
                    console.log("获取中奖信息失败")
                }
            })
        },
        _getParameByName: function(e) {
            e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var t = new RegExp("[\\?&]" + e + "=([^&#]*)"),
            n = t.exec(location.search);
            return null === n ? "": decodeURIComponent(n[1].replace(/\+/g, " "))
        },
        _scriptLoadJs: function(e, t, n) {
            if (!e) return console.log("load js url undefined");
            var i = document.getElementsByTagName("head")[0],
            o = document.createElement("script");
            o.setAttribute("type", "text/javascript"),
            o.setAttribute("src", e),
            o.onload = function() {
                t && "function" == typeof t && t()
            },
            o.onerror = function() {
                n && "function" == typeof n && n()
            },
            i.appendChild(o)
        },
        _loadBackupWXSDK: function() {
            var e = 1 == this._getParameByName("wxDebugMode");
            e && alert("微信sdk文件无法加载，改调备用sdk文件");
            var t = this;
            t._scriptLoadJs(window.HORTOR_CONF.GameCenterHost + "/jweixin-1.2.0.js",
            function() {
                e && alert("备用sdk文件加载成功"),
                t._configWX()
            },
            function() {
                t.showAlert("网络不稳定，调起微信接口失败！请刷新重试。")
            })
        },
        _configWX: function() {
            var e = this._getParameByName("wxDebugMode");
            if ("undefined" == typeof wx) return this._loadBackupWXSDK();
            var t = this;
            console.log("是否开启 wxDebugMode:", 1 == e),
            2 == e && alert("微信接口验证"),
            wx.config({
                debug: 1 == e,
                appId: HORTOR_WX_CONF.AppId,
                timestamp: HORTOR_WX_CONF.TimeStamp,
                nonceStr: HORTOR_WX_CONF.NonceStr,
                signature: HORTOR_WX_CONF.Signature,
                jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "chooseWXPay", "hideMenuItems", "hideOptionMenu", "showOptionMenu", "closeWindow"]
            }),
            wx.ready(function() {
                wx.hideOptionMenu(),
                console.log("[HORTOR] 微信JS-SDK初始化成功"),
                t._configShare()
            })
        },
        _configShare: function() {
            if (this._getParameByName("wxDebugMode") && alert("分享配置信息" + JSON.stringify(this._config)), "undefined" == typeof wx) return this._loadBackupWXSDK();
            var e = this;
            wx.onMenuShareTimeline({
                title: e._config.share.timeline.title || HORTOR_GAME_CONF.GameName,
                link: e._getShareUrl("timeline"),
                imgUrl: e._config.share.timeline.imgUrl || HORTOR_GAME_CONF.GameIcon,
                success: function() {
                    e._reportShare("timeline"),
                    e._chan.notify({
                        method: "timelineShareSuccess"
                    })
                },
                cancel: function() {
                    e._chan.notify({
                        method: "timelineShareCancel"
                    })
                }
            }),
            wx.onMenuShareAppMessage({
                title: e._config.share.friend.title || HORTOR_GAME_CONF.GameName,
                desc: e._config.share.friend.desc || HORTOR_GAME_CONF.GameName,
                link: e._getShareUrl("friend"),
                imgUrl: e._config.share.friend.imgUrl || HORTOR_GAME_CONF.GameIcon,
                type: "link",
                success: function() {
                    e._reportShare("friend"),
                    e._chan.notify({
                        method: "friendShareSuccess"
                    })
                },
                cancel: function() {
                    e._chan.notify({
                        method: "friendShareCancel"
                    })
                }
            }),
            wx.showOptionMenu();
            var t = ["menuItem:share:qq", "menuItem:share:weiboApp", "menuItem:share:facebook", "menuItem:share:QZone"];
            window.HORTOR_WX_CONF.ShareHost == -1 && t.push("menuItem:share:timeline"),
            "crane" == window.HORTOR_GAME_CONF.GameId && t.push("menuItem:share:appMessage"),
            wx.hideMenuItems({
                menuList: t
            }),
            console.log("[HORTOR] config成功，打开分享开关"),
            setTimeout(function() {
                e.configWebView(e._config.share.timeline.title || HORTOR_GAME_CONF.GameName, e._config.share.friend.desc || HORTOR_GAME_CONF.GameName, e._getShareUrl("friend"), e._getShareUrl("timeline"), e._config.share.timeline.imgUrl || HORTOR_GAME_CONF.GameIcon)
            },
            1e3)
        },
        _getShareUrl: function(e) {
            var t = "",
            n = this._config.share.shareCustomParam;
            for (var i in n)"function" != typeof n[i] && (console.log(i, "===", n[i], "||||", i.indexOf("cp_")), 0 == i.indexOf("cp_") && (t += "&" + i + "=" + n[i]));
            var o = "";
            return "timeline" == e ? o = HORTOR_GAME_CONF.ShareUrl: "friend" == e ? o = HORTOR_GAME_CONF.ShareUrlFriend: "img" == e ? o = HORTOR_GAME_CONF.ShareUrlImg: console.log("未知target:", e),
            o + t + "&shareFrom=" + e
        },
        _configUI: function() {
            console.log("config ui 设置界面大小");
            var e = $(window).height(),
            t = $(window).width();
            navigator.userAgent.indexOf("MicroMessenger") > -1 || navigator.userAgent.indexOf("QQ") > -1 ? ($("#body_wrap").attr("style", "width: " + t + "px; height: " + e + "px;"), $("#gameFrameDiv").attr("style", "width: " + t + "px; height: " + e + "px;"), $("#gameFrame").attr("style", "width: " + t + "px; height: " + e + "px;")) : HORTOR_CONF.IsGuide && e / t > 1.7 ? ($("#body_wrap").attr("style", "width: " + 640 * e / 1136 + "px; height: " + e + "px;"), $("#gameFrameDiv").attr("style", "width: " + 640 * e / 1136 + "px; height: " + e + "px;"), $("#gameFrame").attr("style", "width: " + 640 * e / 1136 + "px; height: " + e + "px;")) : ($("#body_wrap").attr("style", "width: " + 640 * e / 1039 + "px; height: " + e + "px;"), $("#gameFrameDiv").attr("style", "width: " + 640 * e / 1039 + "px; height: " + e + "px;"), $("#gameFrame").attr("style", "width: " + 640 * e / 1039 + "px; height: " + e + "px;"))
        },
        _reportShare: function(e) {
            $.ajax({
                url: "/auth/share/report",
                data: {
                    userId: HORTOR_CONF.UserId,
                    gameId: HORTOR_GAME_CONF.GameId,
                    shareHost: HORTOR_WX_CONF.ShareHost,
                    target: e
                },
                type: "POST",
                success: function(e, t, n) {
                    console.log("[HORTOR] 上报分享到朋友圈成功")
                },
                error: function(e, t, n) {
                    console.log("[HORTOR] 上报分享到朋友圈失败")
                }
            })
        },
        config: function(e, t) {
            console.log("config gameId:", t.gameId),
            this._getParameByName("wxDebugMode") && alert("游戏配置内容：" + JSON.stringify(t.share)),
            t.share && (this._config.share.timeline = t.share.timeline || this._config.share.timeline, this._config.share.friend = t.share.friend || this._config.share.friend, this._config.share.shareCustomParam = t.share.shareCustomParam || this._config.share.shareCustomParam, this._configShare()),
            t.hoverPosition && (this._config.hoverPosition.top = t.hoverPosition.top || this._config.hoverPosition.top, this._config.hoverPosition.onLeft = void 0 == t.hoverPosition.onLeft ? this._config.hoverPosition.onLeft: t.hoverPosition.onLeft, window.HORTOR_SIDEBAR._initHoverPosition())
        },
        refresh: function(e, t) {
            console.log("refreshUrl:", t),
            window.location.href = t
        },
        pay: function(e, t) {
            console.log("userAgent:", window.navigator.userAgent); !! window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
            if (window.HORTOR_CONF.WxToH5 && navigator.userAgent.indexOf("MicroMessenger") > -1) {
                var n = ["orderId=" + t.order_id, "gameId=" + window.HORTOR_GAME_CONF.GameId, "openId=" + window.HORTOR_CONF.UserId, "time=" + window.HORTOR_CONF.TimeNow, "sign=" + window.HORTOR_CONF.Sign, "loginFrom=" + window.HORTOR_CONF.LoginFrom].join("&");
                return void(window.location.href = "/pay/wxToH5Pay?" + n)
            }
            console.log("order:", t);
            var i = "web";
            navigator.userAgent.indexOf("Windows NT") > -1 ? i = "web": navigator.userAgent.indexOf("HortorApp") > -1 ? i = "app": navigator.userAgent.indexOf("MicroMessenger") > -1 ? i = "wx": navigator.userAgent.indexOf("QQ") > -1 ? i = "qq": navigator.userAgent.indexOf("Mobile") > -1 && (i = "mobile_web"),
            this._createWechatOrder(t.order_id, i)
        },
        _createWechatOrder: function(e, t) {
            if ("crane" === window.HORTOR_GAME_CONF.GameId) return this._chan.notify({
                method: "payCancel"
            }),
            this.showAlert("对不起，此游戏暂不支持微信支付");
            var n = this;
            $.ajax({
                url: "/pay/create-wechat-order",
                data: {
                    orderId: e,
                    platForm: t,
                    loginFrom: window.HORTOR_CONF.LoginFrom
                },
                type: "POST",
                success: function(i, o, r) {
                    "wx" === t ? wx.chooseWXPay({
                        timestamp: i.timestamp,
                        nonceStr: i.nonce_str,
                        "package": i["package"],
                        signType: i.sign_type,
                        paySign: i.pay_sign,
                        success: function(t) {
                            n._chan.notify({
                                method: "paySuccess"
                            }),
                            n._afterPaySuccess(e)
                        },
                        cancel: function() {
                            n._chan.notify({
                                method: "payCancel"
                            })
                        },
                        fail: function() {
                            console.log("[HORTOR] 微信公众号支付失败，尝试用二维码支付"),
                            n._orderToQrcode(i.order_id)
                        }
                    }) : "qq" == t ? mqq.tenpay.pay({
                        tokenId: i.tokenId,
                        pubAcc: "youlechang",
                        pubAccHint: "祝您的疯狂游乐场玩的高兴"
                    },
                    function(t) {
                        0 == t.resultCode ? (n._chan.notify({
                            method: "paySuccess"
                        }), n._afterPaySuccess(e)) : t.resultCode == -11001 ? n._chan.notify({
                            method: "payCancel"
                        }) : n._orderToQrcode(i.order_id)
                    }) : "app" == t ? window.WebViewJavascriptBridge.callHandler("wxPay", i,
                    function(t) {
                        0 == t ? (n._chan.notify({
                            method: "paySuccess"
                        }), n._afterPaySuccess(e)) : t == -2 ? n._chan.notify({
                            method: "payCancel"
                        }) : t == -1 && alert("app pay err: -1")
                    }) : "mobile_web" == t ? n._h5Pay(i) : n._qrCodePay(i)
                },
                error: function(e, t, n) {
                    console.log("[HORTOR] 下单失败")
                }
            })
        },
        _orderToQrcode: function(e) {
            var t = this;
            $.ajax({
                url: "/pay/order/qrcode",
                data: {
                    orderId: e,
                    loginFrom: window.HORTOR_CONF.LoginFrom
                },
                type: "POST",
                success: function(e, n, i) {
                    t._qrCodePay(e)
                },
                error: function(e, t, n) {
                    console.log("[HORTOR] 订单转换为二维码失败")
                }
            })
        },
        _qrCodePay: function(e) {
            var t = this;
            $("#payQrcodeModal .qrcode").attr("src", "/auth/qrcode?qr=" + encodeURIComponent(e.code_url)),
            this.showModal($("#payQrcodeModal")),
            console.log("轮询开始了");
            var n = e.order_id;
            this.orderStatusT = setInterval(function() {
                $.ajax({
                    url: "/pay/order-status",
                    data: {
                        orderId: n
                    },
                    type: "GET",
                    success: function(e, i, o) {
                        e.status && (clearInterval(t.orderStatusT), t._chan.notify({
                            method: "paySuccess"
                        }), t.hideModal($("#payQrcodeModal")), t._afterPaySuccess(n, e.score))
                    },
                    error: function(e, t, n) {
                        console.log("status:err")
                    }
                })
            },
            5e3)
        },
        _h5Pay: function(e) {
            window.h5PayData = e,
            this.showModalForIOSPay($("#h5PayModal")),
            $("#goodsName").text(e.goodsName),
            $("#money").text(e.money)
        },
        _gsVipAlert: function() {
            this.showModal($("#gsVipModal"))
        },
        showQRCode: function(e) {
            var t = $("#barcodeModal");
            this.showModalForQR(t),
            this.statShowQRCode()
        },
        auth: function(e) {
            window.location.href = "/auth/login?gameId=" + HORTOR_GAME_CONF.GameId + "&loginFrom=" + HORTOR_CONF.LoginFrom + "&channel=" + HORTOR_CONF.OriginalChannel + "&gameAuth=true"
        },
        showiOSPayAlert: function(e) {
            var t = $("#iosPayAlertModal");
            this.showModalForIOSPay(t)
        },
        showImg: function(e, t) {
            console.log("收到图片，展示吧:", t);
            var n = $("#showImg");
            $("#showImg .showImg").attr("src", t.imgData),
            $("#showImg .showImg").attr("style", "width: " + t.width + "px;max-width: 100%;border-radius: 15px;"),
            n.fadeIn(800),
            n.children(":first").animate({
                "margin-top": "40px"
            },
            500,
            function() {});
            var i = this;
            n.click(function(e) {
                e.target.className.indexOf("top-modal") > -1 && i.hideModal(n)
            })
        },
        getShareUrl: function(e) {
            return this._getShareUrl("img")
        },
        isSafe: function(e) {
            return console.log("isSafe:", HORTOR_CONF.IsSafe),
            HORTOR_CONF.IsSafe
        },
        isShowTimeline: function(e) {
            return console.log("isShowTimeline:", HORTOR_WX_CONF.ShareHost != -1),
            HORTOR_WX_CONF.ShareHost != -1
        },
        statShowQRCode: function() {
            $.ajax({
                url: "//log.reyun.com/receive/rest/event",
                type: "POST",
                data: JSON.stringify({
                    appid: "82a7638fe398434f83ce619be2fa1b59K",
                    who: HORTOR_CONF.UserId,
                    what: "showQRCodeEvent",
                    context: {
                        deviceid: HORTOR_CONF.UserId,
                        channelid: ""
                    }
                }),
                success: function(e) {
                    console.log("success:", e)
                },
                error: function(e, t, n) {
                    console.log("error:", n)
                }
            })
        },
        __userOnlining: function() {
            console.log("用户在线上报"),
            $.ajax({
                url: "//log.reyun.com/receive/rest/heartbeat",
                type: "POST",
                data: JSON.stringify({
                    appid: window.HORTOR_GAME_CONF.GameReyunAppId,
                    who: HORTOR_CONF.UserId,
                    what: "online",
                    context: {
                        deviceid: HORTOR_CONF.UserId,
                        channelid: ""
                    }
                }),
                success: function(e) {},
                error: function(e, t, n) {
                    console.log("error:", n)
                }
            })
        },
        userOnLine: function() {
            console.log("用户在线监控开始"),
            this.userOnLineTimer && clearInterval(this.userOnLineTimer),
            this.__userOnlining(),
            this.userOnLineTimer = setInterval(this.__userOnlining.bind(this), 5e3)
        },
        showToast: function(e, t) {
            if (!e) return ! 1;
            var n = $("#toastModel");
            $("#toastModelText").html(e),
            n.fadeIn(800).css("zIndex", "20"),
            n.children(":first").animate({
                "margin-top": "0px"
            },
            500,
            function() {}),
            setTimeout(this.hideModal.bind(this, n), t || 3e3)
        },
        showAlert: function(e, t) {
            if (!e) return ! 1;
            "string" == typeof e && (e = {
                title: t || "",
                text: e,
                btns: [{
                    text: "确定"
                }]
            });
            var n = this,
            i = $(Mustache.render(window.HORTOR_CONF.AlertTemplate, e)).appendTo($("body"));
            i.fadeIn(800).css("zIndex", "20"),
            i.children(":first").animate({
                "margin-top": "25vh"
            },
            500,
            function() {}),
            i.on("click", ".cancel",
            function(e) {
                i.off("click"),
                n.hideModal(i)
            }),
            i.on("click", ".dialog-btn",
            function() {
                var t = e.btns[$(this).index()];
                t.onClick && t.onClick(i) === !1 || (i.off("click"), n.hideModal(i, "removeOnClose"))
            })
        },
        showModal: function(e) {
            var t = navigator.userAgent.indexOf("MicroMessenger") > -1;
            t || $("#pcWxTap").hide(),
            e.fadeIn(800),
            e.children(":first").animate({
                "margin-top": "10px"
            },
            500,
            function() {});
            var n = this;
            e.click(function(t) {
                t.target.className.indexOf("top-modal") > -1 && n.hideModal(e)
            })
        },
        showModalForQR: function(e) {
            e.fadeIn(800),
            e.children(":first").animate({
                "margin-top": "10px"
            },
            500,
            function() {});
            var t = this;
            e.click(function(n) {
                n.target.className.indexOf("top-modal") > -1 && t.hideModal(e)
            })
        },
        showModalForIOSPay: function(e) {
            e.fadeIn(800),
            e.children(":first").animate({
                "margin-top": "40%"
            },
            500,
            function() {});
            var t = this;
            e.click(function(n) {
                n.target.className.indexOf("top-modal") > -1 && t.hideModal(e)
            })
        },
        _registerCancelPayEvent: function() {
            var e = this;
            $("#cancelPay").click(function(t) {
                clearInterval(e.orderStatusT),
                e._chan.notify({
                    method: "payCancel"
                }),
                e.hideModal($("#payQrcodeModal"))
            })
        },
        _afterPaySuccess: function(e, t) {
            var n = this;
            return console.log("支付成功后调取", e, t),
            t ? ($("#score").html(HORTOR_CONF.InfoServerData.score += t - 0), void n.showToast("恭喜您获得" + t + "积分")) : void(e && $.ajax({
                url: "/pay/order-status",
                data: {
                    orderId: e
                },
                type: "GET",
                success: function(e, t, i) {
                    e.score && ($("#score").html(HORTOR_CONF.InfoServerData.score += e.score - 0), n.showToast("恭喜您获得" + e.score + "积分"))
                },
                error: function(e, t, n) {
                    console.log("status:err")
                }
            }))
        },
        _registerCancelH5PayEvent: function() {
            var e = this;
            $("#cancelH5Pay").click(function(t) {
                clearInterval(e.orderStatusH5Pay),
                e._chan.notify({
                    method: "payCancel"
                }),
                e.hideModal($("#h5PayModal"))
            }),
            $("#h5wxPayButton").click(function(t) {
                console.log("轮询开始了"),
                window.open(window.h5PayData.code_url),
                this.orderStatusH5Pay = setInterval(function() {
                    $.ajax({
                        url: "/pay/order-status",
                        data: {
                            orderId: window.h5PayData.order_id
                        },
                        type: "GET",
                        success: function(t, n, i) {
                            t.status && (clearInterval(e.orderStatusH5Pay), e._chan.notify({
                                method: "paySuccess"
                            }), e.hideModal($("#h5PayModal")), e._afterPaySuccess(window.h5PayData.order_id, t.score))
                        },
                        error: function(e, t, n) {
                            console.log("status:err")
                        }
                    })
                },
                5e3)
            })
        },
        hideModal: function(e, t) {
            e.fadeOut(800),
            e.children(":first").animate({
                "margin-top": "-360px"
            },
            300,
            function() {
                t && e.remove()
            })
        },
        _registerEventListeners: function() {
            function e() {
                "" === document.referrer ? navigator.userAgent.indexOf("MicroMessenger") > -1 ? wx.closeWindow() : navigator.userAgent.indexOf("QQ") > -1 ? mqq.ui.closeWebViews() : window.history.back() : window.history.back()
            }
            function t() {
                return history.state ? console.log("alreday pushstate", history.state) : (console.log("pushstate", history.state), void window.history.pushState({
                    title: document.title,
                    url: location.href
                },
                document.title, location.href))
            }
            var n = this;
            return ! (navigator.userAgent.indexOf("HortorApp") > -1) && ( !! window.HORTOR_CONF.IsShowBackDialog && ($("#exit").click(function(t) {
                t.stopPropagation(),
                console.log("今日不再提醒的值:", $("#avoidBackConfirm")[0].checked),
                $("#avoidBackConfirm")[0].checked ? $.ajax({
                    url: "/gc/update-time-avoidBackConfirm",
                    type: "POST",
                    data: {
                        openId: HORTOR_CONF.UserId,
                        attentTime: (new Date).getTime()
                    },
                    success: function(t) {
                        e()
                    },
                    error: function() {
                        e()
                    }
                }) : e(),
                console.log("exit click", t)
            }), $("#exitModal").click(function(e) {
                console.log("exitModal click", e),
                e.stopPropagation(),
                $("#exitModal").hide(),
                t()
            }), $(".cancel-button").click(function(e) {
                console.log("cancel-button click", e),
                e.stopPropagation(),
                $("#exitModal").hide(),
                t()
            }), $(".exit-dialog").click(function(e) {
                console.log("exit-dialog click", e),
                e.stopPropagation()
            }), void setTimeout(function() {
                t(),
                window.addEventListener && window.addEventListener("popstate",
                function(e) {
                    if (console.log("popstate event:", e.state), !e.state) {
                        var t = $("#exitModal");
                        t.fadeIn(500),
                        n.compaignStat(HORTOR_CONF.GameRecommend.CompaignTp + "-" + HORTOR_CONF.GameRecommend.GameId, HORTOR_GAME_CONF.GameId)
                    }
                })
            },
            2e3)))
        },
        _recordTimeForAvoidBackConfirm: function() {
            $.ajax({
                url: "/gc/update-time-avoidBackConfirm",
                type: "POST",
                data: {
                    openId: HORTOR_CONF.UserId,
                    attentTime: (new Date).getTime()
                },
                success: function(e) {
                    console.log("更新关注时间成功")
                },
                complete: function() {}
            })
        },
        initWebViewJavascriptBridge: function() {
            if (navigator.userAgent.indexOf("HortorApp") != -1) {
                var e = document.createElement("iframe");
                e.style.display = "none",
                e.src = "wvjbscheme://__BRIDGE_LOADED__",
                document.documentElement.appendChild(e),
                setTimeout(function() {
                    document.documentElement.removeChild(e)
                },
                0)
            }
        },
        configWebView: function(e, t, n, i, o) {
            if (navigator.userAgent.indexOf("HortorApp") != -1) {
                var r = this,
                a = {
                    title: e,
                    text: t,
                    wxsession: n,
                    wxtimeline: i,
                    qq: n,
                    qzone: n,
                    image: o
                };
                window.WebViewJavascriptBridge.callHandler("setShareContent", a),
                window.WebViewJavascriptBridge.callHandler("setTitle", document.title);
                var s = {
                    wxsession: !0,
                    wxtimeline: !0,
                    qq: !1,
                    qzone: !1
                };
                window.HORTOR_WX_CONF.ShareHost == -1 && (s.wxtimeline = !1),
                window.WebViewJavascriptBridge.callHandler("setShare", s),
                window.WebViewJavascriptBridge.registerHandler("shareComplete",
                function(e) {
                    console.log("分享成功:", e),
                    "wxsession" == e ? (r._reportShare("friend"), r._chan.notify({
                        method: "friendShareSuccess"
                    })) : "wxtimeline" == e && (r._reportShare("timeline"), r._chan.notify({
                        method: "timelineShareSuccess"
                    }))
                })
            }
        },
        updateAttentTimeForSafariGameMain: function() {
            $.ajax({
                url: window.HORTOR_CONF.ApiHost + "/gc/update-attenttime-game-safariMain",
                type: "POST",
                data: {
                    openId: HORTOR_CONF.UserId,
                    attentTime: (new Date).getTime(),
                    gameId: HORTOR_GAME_CONF.GameId
                },
                success: function(e) {
                    console.log("更新关注时间成功")
                },
                complete: function() {}
            })
        },
        compaignStat: function(e, t) {
            $.ajax({
                url: window.HORTOR_CONF.ApiHost + "/gc/compaign-stat",
                type: "POST",
                data: {
                    openId: HORTOR_CONF.UserId,
                    showCompaignInfo: e,
                    originalGameId: t
                },
                success: function(e) {
                    console.log("compaign stat success")
                },
                complete: function() {}
            })
        }
    },
    window.HORTOR_SIDEBAR = {
        init: function() {
            window.HORTOR_SIDEBAR._initHoverPosition(),
            window.HORTOR_SIDEBAR._registerModalTriggerMove(),
            window.HORTOR_SIDEBAR._registerModalTriggerMove_pc(),
            window.HORTOR_SIDEBAR._disableScroll(".dialog-box"),
            $("#hover").click(function(e) {
                e.stopPropagation(),
                window.HORTOR_SIDEBAR.show(),
                navigator.userAgent.indexOf("MicroMessenger") > -1 && window.HORTOR_SIDEBAR.shortTrigger()
            }),
            $("#sidebar").click(function(e) {
                console.log("event.target.className:", e.target.className),
                "modal-left" != e.target.className && "modal-left-img" != e.target.className && "left-img" != e.target.className || window.HORTOR_SIDEBAR.hide()
            }),
            setTimeout(function() {
                $("#hover").show(),
                window.HORTOR_SIDEBAR.shortTrigger()
            },
            2e3)
        },
        show: function() {
            window.HORTOR_SIDEBAR.reyunStat("SidebarOpenEvent");
            var e = {
                GameCenterHost: window.HORTOR_CONF.GameCenterHost,
                GameName: window.HORTOR_GAME_CONF.GameName,
                GameIcon: window.HORTOR_GAME_CONF.GameIcon,
                SubscribeQRCode: HORTOR_GAME_CONF.SubscribeQRCode,
                IsCoupon: window.HORTOR_GAME_CONF.IsCoupon,
                UserHeadImg: window.HORTOR_CONF.UserHeadImg,
                UngetGift: HORTOR_CONF.InfoServerData.unGetGift,
                HasNewGameOrServer: HORTOR_CONF.InfoServerData.hasNewInfo || HORTOR_CONF.InfoServerData.hasNewServer,
                LogoTop: window.HORTOR_CONF.LogoTop,
                Vip: HORTOR_CONF.VipLevel,
                Level: HORTOR_CONF.Level,
                Name: HORTOR_CONF.Name,
                IsShowVip: HORTOR_CONF.VipLevel > 0,
                IsShowAppDownload: window.IsShowAppDownload,
                LevelToIcon: this.levelToIcon,
                IsShowChat: HORTOR_CONF.IsShowChat,
                Score: HORTOR_CONF.InfoServerData.score,
                SignInUrl: HORTOR_CONF.SignInUrl,
                IsSignIn: HORTOR_CONF.InfoServerData.isSignIn,
                SaveToDesktop: window.HORTOR_CONF.ApiHost + "/auth/guide?openId=" + window.HORTOR_CONF.UserId + "&channel=" + window.HORTOR_CONF.Channel + "&loginFrom=" + window.HORTOR_CONF.LoginFrom + "&time=" + HORTOR_CONF.TimeNow + "&sign=" + HORTOR_CONF.Sign + "&gameId=" + HORTOR_GAME_CONF.GameId,
                IsShowSaveDesktop: !!window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && navigator.userAgent.indexOf("MicroMessenger") > -1
            };
            if ("" != window.HORTOR_CONF.SidebarTemplate) {
                var t = Mustache.render(window.HORTOR_CONF.SidebarTemplate, e);
                return $("#sidebar").html(t),
                void window.HORTOR_SIDEBAR.initForShow()
            }
            $.get(window.HORTOR_CONF.GameCenterHost + "/templates/sidebar.html?v=1.0.1",
            function(t) {
                window.HORTOR_CONF.SidebarTemplate = t;
                var n = Mustache.render(t, e);
                $("#sidebar").html(n),
                window.HORTOR_SIDEBAR.initForShow()
            })
        },
        levelToIcon: function() {
            return function(e, t) {
                for (var n, i, o, r = parseInt(t(e)), a = "", s = 0, c = 0; c < 1 && (n = r % 4, r -= n, !(r <= 0)) && (i = r / 4 % 4, r -= 4 * i, !(r <= 0)) && (o = r / 4 / 4 % 4, r -= 4 * o * 4, !(r <= 0)); c++) s = r / 4 / 4 / 4 % 4;
                for (c = 0; c < s; c++) a += '<img class="crown" src="' + HORTOR_CONF.GameCenterHost + '/img/crown.png">';
                for (c = 0; c < o; c++) a += '<img class="sun" src="' + HORTOR_CONF.GameCenterHost + '/img/sun.png">';
                for (c = 0; c < i; c++) a += '<img class="moon" src="' + HORTOR_CONF.GameCenterHost + '/img/moon.png">';
                for (c = 0; c < n; c++) a += '<img class="star" src="' + HORTOR_CONF.GameCenterHost + '/img/star.png">';
                return a
            }
        },
        initForShow: function() {
            window.HORTOR_SIDEBAR._registerPanelControl(),
            window.HORTOR_SIDEBAR._resizeDialog(),
            window.HORTOR_SIDEBAR._disableScroll(".dialog-box"),
            $("#sidebar").fadeIn(200),
            $("#sidebar .modal-dialog").animate({
                "margin-left": "0px"
            },
            200,
            function() {
                return HORTOR_CONF.ChannelLimit ? $("#sidebar .collectGame").trigger("click") : (HORTOR_CONF.IsShowChat && window.HORTOR_CHAT.connect(), HORTOR_CONF.InfoServerData.unGetGift ? $("#sidebar .gift").trigger("click") : HORTOR_CONF.InfoServerData.hasNewInfo || HORTOR_CONF.InfoServerData.hasNewServer ? $("#sidebar .info").trigger("click") : void 0)
            })
        },
        hide: function() {
            $("#sidebar").fadeOut(200),
            HORTOR_CONF.IsShowChat && window.HORTOR_CHAT.disconnect()
        },
        _disableScroll: function(e) {
            window.el = document.querySelector("#sidebar " + e),
            window.sy = 0,
            document.body.addEventListener("touchstart",
            function(e) {
                window.sy = e.touches[0].pageY
            }),
            document.body.addEventListener("touchmove",
            function(e) {
                if (null == window.el) return e.preventDefault(),
                !0;
                var t = e.touches[0].pageY - window.sy > 0;
                t && window.el.scrollTop <= 0 && e.preventDefault(),
                !t && window.el.scrollTop >= window.el.scrollHeight - window.el.clientHeight && e.preventDefault()
            })
        },
        _resizeDialog: function() {
            var e = 122;
            window.IsShowAppDownload && (e = 147),
            $("#sidebar .dialog-box").height($(window).height() - e - 61),
            $("#sidebar .coupon-panel").height($(window).height() - e),
            $("#sidebar .game-more-panel").height($(window).height() - e),
            $("#sidebar .qr-panel").height($(window).height() - e),
            $("#sidebar .info-panel").height($(window).height() - e),
            $("#sidebar .vip-panel").height($(window).height() - e)
        },
        _initHoverPosition: function() {
            var e = window.HORTOR._config.hoverPosition;
            $("#hover").css({
                top: e.top,
                right: e.onLeft ? "auto": 0,
                left: e.onLeft ? 0 : "auto"
            }).removeClass("modal-rotate-left"),
            $(".modal-trigger span").removeClass("modal-rotate-span-right"),
            $(".modal-trigger img").removeClass("modal-rotate-right")
        },
        _registerModalTriggerMove: function() {
            var e = this,
            t = $(window).width(),
            n = $(window).height();
            $(".modal-trigger").bind("touchstart",
            function(t) {
                console.log("这是别的地方储存的两个timeout:", e.t, ";t1:", e.t1),
                clearTimeout(e.t),
                $(".modal-trigger").stop(),
                $(".modal-trigger").css("opacity", .8),
                $(".modal-trigger").removeClass("modal-rotate-left"),
                $(".modal-trigger span").removeClass("modal-rotate-span-right"),
                $(".modal-trigger img").removeClass("modal-rotate-right");
                var n = t.originalEvent.touches[0];
                touchStartX = n.clientX,
                touchStartY = n.clientY;
                var i = $(".modal-trigger").offset();
                modalTriggerOriginX = i.left,
                modalTriggerOriginY = i.top
            }),
            $(".modal-trigger").bind("touchmove",
            function(e) {
                var i = e.originalEvent.touches[0],
                o = i.clientX - touchStartX,
                r = i.clientY - touchStartY,
                a = modalTriggerOriginX + o > 0 ? modalTriggerOriginX + o: 0,
                s = modalTriggerOriginY + r > 0 ? modalTriggerOriginY + r: 0;
                a = a + $(".modal-trigger").outerWidth(!0) > t ? t - $(".modal-trigger").outerWidth(!0) : a,
                s = s + $(".modal-trigger").outerHeight(!0) > n ? n - $(".modal-trigger").outerHeight(!0) : s,
                $(".modal-trigger").offset({
                    left: a,
                    top: s
                })
            }),
            $(".modal-trigger").bind("touchend",
            function(n) {
                var i = $(".modal-trigger").offset();
                modalTriggerOriginX = i.left,
                modalTriggerOriginY = i.top;
                var o = (modalTriggerOriginX + $(".modal-trigger").outerWidth(!0) / 2) / t,
                r = o <= .5 ? 0 : t - $(".modal-trigger").outerWidth(!0);
                $(".modal-trigger").offset({
                    left: r
                }),
                e.shortTrigger()
            })
        },
        _registerModalTriggerMove_pc: function() {
            var e = this;
            $.fn.extend({
                drag: function(e, t, n) {
                    function i(i, o) {
                        function r(e) {
                            var e = e || window.event,
                            n = s + e.clientX - l,
                            o = c + e.clientY - d;
                            $(i).css({
                                left: n + "px",
                                top: o + "px"
                            }),
                            e.stopPropagation ? e.stopPropagation() : e.cancleBubble && (e.cancleBubble = !0),
                            $.isFunction(t) && t.apply(i, arguments)
                        }
                        function a(e) {
                            document.addEventListener ? (document.removeEventListener("mousemove", r, !1), document.removeEventListener("mouseup", a, !1)) : document.detachEvent && (i.detachEvent("onlosecapture", a), i.detachEvent("onmouseup", a), i.detachEvent("onmousemove", r), i.releaseCapture()),
                            e.stopPropagation ? e.stopPropagation() : e.cancleBubble && (e.cancleBubble = !0),
                            $.isFunction(n) && n.apply(i, arguments)
                        }
                        var s, c, l, d;
                        $.isFunction(e) && e.apply(i, arguments),
                        s = parseInt($(i).css("left"), 10),
                        c = parseInt($(i).css("top"), 10),
                        l = o.clientX,
                        d = o.clientY,
                        document.addEventListener ? (document.addEventListener("mousemove", r, !1), document.addEventListener("mouseup", a, !1)) : document.attachEvent && (i.setCapture(), i.attachEvent("onmousemove", r), i.attachEvent("onmouseup", a), i.attachEvent("onlosecapture", a))
                    }
                    return $(this).each(function() {
                        $(this).bind("mousedown",
                        function(e) {
                            var t = this,
                            n = e;
                            i(t, n)
                        })
                    }),
                    this
                }
            }),
            function() {
                var t = !1;
                $(".modal-trigger").drag(function() {
                    console.log("这是别的地方储存的两个timeout:", e.t, ";t1:", e.t1),
                    clearTimeout(e.t),
                    $(".modal-trigger").stop(),
                    $(".modal-trigger").css("opacity", .8),
                    $(".modal-trigger").removeClass("modal-rotate-left"),
                    $(".modal-trigger span").removeClass("modal-rotate-span-right"),
                    $(".modal-trigger img").removeClass("modal-rotate-right")
                },
                function() {
                    t = !0
                },
                function() {
                    if (t) {
                        t = !1;
                        var n = $("#body_wrap").offset(),
                        i = $("#body_wrap").width(),
                        o = $(".modal-trigger").offset();
                        modalTriggerOriginX = o.left,
                        modalTriggerOriginY = o.top,
                        console.log("modalTriggerOriginX:", modalTriggerOriginX, ";modalTriggerOriginY:", modalTriggerOriginY);
                        var r = (modalTriggerOriginX - n.left + $(".modal-trigger").outerWidth(!0) / 2) / i,
                        a = r <= .5 ? 0 + n.left: i - $(".modal-trigger").outerWidth(!0) + n.left;
                        $(".modal-trigger").offset({
                            left: a
                        }),
                        e.shortTrigger()
                    }
                })
            } ()
        },
        shortTrigger: function() {
            var e = this,
            t = function() {
                var e = $(".modal-trigger").offset(),
                t = e.left,
                n = e.top;
                console.log("modalTriggerOriginX:", t, ";modalTriggerOriginY:", n),
                $(".modal-trigger").offset({
                    left: t,
                    top: n
                });
                var i = $("#body_wrap").width(),
                o = $("#body_wrap").offset(),
                r = (t - o.left + $(".modal-trigger").outerWidth(!0) / 2) / i,
                a = r <= .5 ? "-=" + $(".modal-trigger").outerWidth(!0) / 2 + "px": "+=" + $(".modal-trigger").outerWidth(!0) / 2 + "px";
                console.log("winWidth:", i, ";leftPercent:", r, ";hideStr:", a),
                $(".modal-trigger").animate({
                    left: a
                },
                200,
                function() {
                    r <= .5 ? $(".modal-trigger").addClass("modal-rotate-left") : ($(".modal-trigger span").addClass("modal-rotate-span-right"), $(".modal-trigger img").addClass("modal-rotate-right"))
                })
            };
            e.t && clearTimeout(e.t),
            e.t = setTimeout(t, 3e3),
            console.log("t:", e.t)
        },
        _registerPanelControl: function() {
            $("#sidebar .chat").click(function() {
                $("#sidebar .tab .item").removeClass("active"),
                $("#sidebar .tab .chat").addClass("active"),
                $("#sidebar .coupon-panel").hide(),
                $("#sidebar .game-more-panel").hide(),
                $("#sidebar .qr-panel").hide(),
                $("#sidebar .chat-panel").show(),
                $("#sidebar .info-panel").hide(),
                $("#sidebar .vip-panel").hide(),
                window.HORTOR_SIDEBAR._disableScroll(".dialog-box");
                var e = $("#sidebar .dialog-box");
                void 0 != e[0] && (e[0].scrollTop = e[0].scrollHeight),
                window.HORTOR_SIDEBAR.reyunStat("ChatOpenEvent")
            }),
            $("#sidebar .gift").click(function() {
                $("#sidebar .tab .item").removeClass("active"),
                $("#sidebar .tab .gift").addClass("active"),
                $("#sidebar .chat-panel").hide(),
                $("#sidebar .game-more-panel").hide(),
                $("#sidebar .qr-panel").hide(),
                window.HORTOR_SIDEBAR.showCoupon(),
                $("#sidebar .coupon-panel").show(),
                $("#sidebar .info-panel").hide(),
                $("#sidebar .vip-panel").hide(),
                window.HORTOR_SIDEBAR._disableScroll(".coupon-panel"),
                window.HORTOR_SIDEBAR.reyunStat("GiftOpenEvent")
            }),
            $("#sidebar .info").click(function() {
                $("#sidebar .tab .item").removeClass("active"),
                $("#sidebar .tab .info").addClass("active"),
                $("#sidebar .chat-panel").hide(),
                $("#sidebar .game-more-panel").hide(),
                $("#sidebar .qr-panel").hide(),
                $("#sidebar .coupon-panel").hide(),
                $("#sidebar .vip-panel").hide(),
                window.HORTOR_SIDEBAR.showInfoList(),
                $("#sidebar .info-panel").show(),
                window.HORTOR_SIDEBAR._disableScroll(".info-panel"),
                window.HORTOR_SIDEBAR.reyunStat("infoOpenEvent"),
                HORTOR_SIDEBAR.updateAttentTimeForInfo(),
                HORTOR_SIDEBAR.updateAttentTimeForNewServer(),
                "" != HORTOR_CONF.GameInfoRecommend.GameId && HORTOR.compaignStat(HORTOR_CONF.GameInfoRecommend.CompaignTp + "-" + HORTOR_CONF.GameInfoRecommend.GameId, HORTOR_GAME_CONF.GameId),
                HORTOR_CONF.InfoServerData.unGetGift || ($(".modal-trigger .info").hide(), $(".modal-trigger .server").hide()),
                $("#sidebar .tab .info .modal-indicator").hide(),
                HORTOR_CONF.InfoServerData.hasNewInfo = !1,
                HORTOR_CONF.InfoServerData.hasNewServer = !1
            }),
            $("#sidebar .vip").click(function() {
                $("#sidebar .tab .item").removeClass("active"),
                $("#sidebar .tab .vip").addClass("active"),
                $("#sidebar .chat-panel").hide(),
                $("#sidebar .coupon-panel").hide(),
                $("#sidebar .qr-panel").hide(),
                $("#sidebar .game-more-panel").hide(),
                $("#sidebar .info-panel").hide(),
                window.HORTOR_SIDEBAR.showVipActive(),
                $("#sidebar .vip-panel").show(),
                window.HORTOR_SIDEBAR._disableScroll(".vip-panel"),
                window.HORTOR_SIDEBAR.reyunStat("VipOpenEvent")
            }),
            $("#sidebar .service").click(function() {
                $("#sidebar .tab .item").removeClass("active"),
                $("#sidebar .tab .service").addClass("active"),
                $("#sidebar .chat-panel").hide(),
                $("#sidebar .coupon-panel").hide(),
                $("#sidebar .game-more-panel").hide(),
                $("#sidebar .qr-title-collect").hide(),
                $("#sidebar .qr-title-gift").hide(),
                $("#sidebar .qr-title-service").show(),
                $("#sidebar .info-panel").hide(),
                $("#sidebar .vip-panel").hide(),
                $("#sidebar .qr-panel").show(),
                window.HORTOR_SIDEBAR.reyunStat("ServiceOpenEvent")
            }),
            $("#sidebar .more").click(function() {
                $("#sidebar .tab .item").removeClass("active"),
                $("#sidebar .tab .more").addClass("active"),
                $("#sidebar .chat-panel").hide(),
                $("#sidebar .coupon-panel").hide(),
                $("#sidebar .qr-panel").hide(),
                $("#sidebar .info-panel").hide(),
                $("#sidebar .vip-panel").hide(),
                window.HORTOR_SIDEBAR.showGameList(),
                $("#sidebar .game-more-panel").show(),
                window.HORTOR_SIDEBAR._disableScroll(".game-more-panel"),
                window.HORTOR_SIDEBAR.reyunStat("MoreGameOpenEvent")
            }),
            $("#sidebar .collectGame").click(function() {
                $("#sidebar .tab .item").removeClass("active"),
                $("#sidebar .chat-panel").hide(),
                $("#sidebar .coupon-panel").hide(),
                $("#sidebar .game-more-panel").hide(),
                $("#sidebar .qr-title-service").hide(),
                $("#sidebar .qr-title-gift").hide(),
                $("#sidebar .qr-title-collect").show(),
                $("#sidebar .info-panel").hide(),
                $("#sidebar .vip-panel").hide(),
                $("#sidebar .qr-panel").show(),
                window.HORTOR_SIDEBAR.reyunStat("CollectGameOpenEvent")
            }),
            window.HORTOR_CONF.IsShowMoreGame || $("#sidebar .more").hide(),
            window.HORTOR_CONF.IsShowService || $("#sidebar .service").hide(),
            window.HORTOR_CONF.IsShowCollect || $("#sidebar .collectGame").hide(),
            window.HORTOR_CONF.HasVipActivity || $("#sidebar .vip").hide(),
            HORTOR_CONF.ChannelLimit && ($("#sidebar .nav, .signBtn, .user-score, .collectGame").hide(), $("#hover_coupon, #hover_info, #hover_server").hide(), $("#sidebar .qr-panel").show())
        },
        showCoupon: function() {
            var e = ["openId=" + window.HORTOR_CONF.UserId, "gameId=" + window.HORTOR_GAME_CONF.GameId, "time=" + window.HORTOR_CONF.TimeNow, "sign=" + window.HORTOR_CONF.Sign].join("&");
            $.getJSON(window.HORTOR_CONF.ApiHost + "/gc/sdk/giftbatch?" + e,
            function(e) {
                $.get(window.HORTOR_CONF.GameCenterHost + "/templates/coupon.html?v=1.5.8",
                function(t) {
                    function n(t, n) {
                        var i = t + "Gifts";
                        e[i] = e[i] || [],
                        e[i].push(n)
                    }
                    var i = function(e) {
                        return !! e && e.some(function(e) {
                            if ("" == e.code && Number(HORTOR_CONF.VipLevel) >= e.vip && e.tp != CONST.GIFT_BATCH_TP.GROUP && (e.codeTp == CONST.GIFT_CODE_TP.COMMON && e.remain > 0 || e.codeTp == CONST.GIFT_CODE_TP.UNIQUE)) return ! 0
                        })
                    },
                    o = function(e) {
                        if (!i(e.gameGiftCodeStatus)) {
                            if ($("#sidebar .tab .gift .modal-indicator").hide(), $("#hover .coupon").hide(), HORTOR_CONF.InfoServerData.unGetGift = !1, HORTOR_CONF.ChannelLimit) return ! 1;
                            HORTOR_CONF.InfoServerData.hasNewInfo ? $("#hover_info").show() : HORTOR_CONF.InfoServerData.hasNewServer && $("#hover_server").show()
                        }
                    };
                    o(e),
                    console.log("datadatadatadata", e),
                    e.isShowGiftDesc = e.gameGiftCodeStatus && e.gameGiftCodeStatus.length > 0,
                    e.scoreRuleUrl = HORTOR_CONF.ScoreRuleUrl,
                    e.GameCenterHost = HORTOR_CONF.GameCenterHost,
                    e.gameGiftCodeStatus && e.gameGiftCodeStatus.map(function(e) {
                        e.tp == CONST.GIFT_BATCH_TP.VIP ? n("vip", e) : e.tp == CONST.GIFT_BATCH_TP.SCORE ? n("score", e) : n("normal", e)
                    }),
                    e.hasVipGifts = function() {
                        return !! e.vipGifts
                    },
                    e.hasScoreGifts = function() {
                        return !! e.scoreGifts
                    },
                    e.hasNormalGifts = function() {
                        return !! e.normalGifts
                    },
                    e.isVipLevelLimit = function() {
                        return this.vip > 0
                    },
                    e.isUniqueGift = function() {
                        return this.codeTp == CONST.GIFT_CODE_TP.UNIQUE
                    },
                    e.isGroupGift = function() {
                        return this.tp == CONST.GIFT_BATCH_TP.GROUP
                    },
                    e.isHolidayGift = function() {
                        return this.tp == CONST.GIFT_BATCH_TP.HOLIDY
                    },
                    e.progress = function() {
                        return this.codeTp == CONST.GIFT_CODE_TP.UNIQUE || this.tp == CONST.GIFT_BATCH_TP.GROUP ? 100 : this.total ? Math.floor(this.remain / this.total * 100) : 0
                    },
                    e.isScoreShowCheck = function() {
                        return this.scoreTp != CONST.SCORE_BATCH_TP.UNLIMIT && this.code
                    },
                    e.scoreLimitInfo = function() {
                        return this.scoreTp == CONST.SCORE_BATCH_TP.ONLYONCE ? "仅可兑换一次": this.scoreTp == CONST.SCORE_BATCH_TP.LIMITDAY ? this.intervalDay + "天内可兑换一次": this.scoreTp == CONST.SCORE_BATCH_TP.UNLIMIT ? "无限兑换": ""
                    };
                    var r = null;
                    Clipboard && (r = new Clipboard(".copy-code", {
                        target: function() {
                            return document.querySelector(".code-text")
                        }
                    }), r.on("success",
                    function(e) {
                        setTimeout(function() {
                            HORTOR.showToast("兑换码复制成功，快去游戏中使用！")
                        },
                        200)
                    }), r.on("error",
                    function(e) {
                        setTimeout(function() {
                            HORTOR.showToast("兑换码复制失败，试试长按兑换码复制！")
                        },
                        200)
                    }));
                    var a = function(e, t) {
                        var n = {
                            text: "知道了",
                            type: "primary"
                        };
                        r && (n.text = "复制", n.type = "primary copy-code"),
                        HORTOR.showAlert({
                            title: t || "",
                            text: '<div style="text-align: center;"><p>兑换码：<i class="canselect-code code-text">' + e + "</i></p>" + (r ? '<p class="desc">复制兑换码，去游戏中使用</p>': '<p class="desc">长按兑换码复制，去游戏中使用</p>') + "</div>",
                            btns: [n]
                        })
                    };
                    $("#sidebar .coupon-panel").html(Mustache.render(t, e)),
                    $("#sidebar .game-coupon-content .coupon-view-btn").click(function(t) {
                        for (var n, i = $(t.currentTarget).attr("data-batch"), o = 0; o < e.gameGiftCodeStatus.length; o++) e.gameGiftCodeStatus[o].batch == i && (n = e.gameGiftCodeStatus[o]);
                        n && n.code && a(n.code)
                    });
                    var s = function(e, t) {
                        $.ajax({
                            url: window.HORTOR_CONF.ApiHost + "/gc/player/info",
                            type: "GET",
                            data: {
                                openId: window.HORTOR_CONF.UserId,
                                gameId: window.HORTOR_GAME_CONF.GameId,
                                time: window.HORTOR_CONF.TimeNow,
                                sign: window.HORTOR_CONF.Sign
                            },
                            success: function(e) {
                                $.get(window.HORTOR_CONF.GameCenterHost + "/templates/selectPlayerModal.html?v=1.0.1",
                                function(n) {
                                    t && t(n, e)
                                })
                            },
                            complete: function() {},
                            error: function(e, t, n) {
                                HORTOR.showAlert(e.responseText)
                            }
                        })
                    },
                    c = function(e, t) {
                        console.log("兑换成功", e, t),
                        HORTOR_CONF.InfoServerData.unGetGift = !1,
                        window.HORTOR_SIDEBAR.showCoupon(),
                        t.score && $("#score").html(HORTOR_CONF.InfoServerData.score -= t.score),
                        t.autoSend ? HORTOR.showAlert('<p class="desc"> 此积分商品会自动下发到您的游戏中，请及时查看。<p>', "兑换成功！") : a(e.giftcode, "兑换成功！")
                    },
                    l = function(e, t) {
                        var n = {
                            openId: window.HORTOR_CONF.UserId,
                            gameId: window.HORTOR_GAME_CONF.GameId,
                            batchId: e.batchId,
                            time: window.HORTOR_CONF.TimeNow,
                            sign: window.HORTOR_CONF.Sign
                        };
                        t && Object.assign(n, t),
                        console.log("getCoupon", n),
                        $.ajax({
                            url: window.HORTOR_CONF.ApiHost + "/gc/get-giftcode",
                            type: "POST",
                            data: n,
                            success: function(t) {
                                c(t, e)
                            },
                            complete: function() {},
                            error: function(e, t, n) {
                                HORTOR.showAlert(e.responseText)
                            }
                        })
                    },
                    d = function(e, t, n) {
                        HORTOR.showAlert({
                            text: e,
                            btns: [{
                                text: "确定",
                                type: "primary",
                                onClick: function() {
                                    l(t, n)
                                }
                            },
                            {
                                text: "取消"
                            }]
                        })
                    },
                    u = function(e, t) {
                        e.find(".selsec-confirm").unbind("click"),
                        HORTOR.hideModal(e)
                    },
                    f = function(e, t) {
                        e.fadeIn(800).css("zIndex", "22"),
                        e.children(":first").animate({
                            "margin-top": "50px"
                        },
                        500,
                        function() {});
                        var n = e.find(".server"),
                        i = e.find(".player"),
                        o = e.find(".selsec-confirm");
                        o.bind("click",
                        function() {
                            u(e);
                            var o = n.val(),
                            r = i.val(),
                            a = n.find("option:selected").text(),
                            s = i.find("option:selected").text(),
                            c = "您确定要使用 " + t.score + " 积分兑换此商品，并将其发送到 " + a + " 的 " + s + " 么？";
                            d(c, t, {
                                serverId: o,
                                playerId: r
                            })
                        })
                    },
                    p = function(e, t) {
                        var n = {
                            serverData: t,
                            playerData: t[0].playerInfos
                        },
                        i = $("#selectPlayerModal").html(Mustache.render(e, n)),
                        o = i.find(".player"),
                        r = '{{#playerInfos}}<option value="{{playerId}}">{{playerName}}</option>{{/playerInfos}}';
                        return i.on("change", ".server",
                        function() {
                            var e = this.selectedIndex,
                            n = t[e],
                            i = Mustache.render(r, n);
                            o.html(i)
                        }),
                        i.on("click", ".selsec-cancel",
                        function() {
                            u(i)
                        }),
                        i
                    },
                    h = "",
                    g = function(t) {
                        h ? f(h, t) : s(e,
                        function(e, n) {
                            h = p(e, n),
                            f(h, t)
                        })
                    };
                    $("#sidebar .game-coupon-content .coupon-get-btn").click(function(e) {
                        if (!window.HORTOR_CONF.IsSubscribe && window.HORTOR_CONF.IsSubscribeGift) return console.log("请先关注公众号"),
                        $("#sidebar .tab .item").removeClass("active"),
                        $("#sidebar .chat-panel").hide(),
                        $("#sidebar .coupon-panel").hide(),
                        $("#sidebar .game-more-panel").hide(),
                        $("#sidebar .qr-title-service").hide(),
                        $("#sidebar .qr-title-collect").hide(),
                        $("#sidebar .qr-title-gift").show(),
                        $("#sidebar .qr-panel").show(),
                        window.HORTOR_SIDEBAR.reyunStat("UnsubscribeGetGiftEvent"),
                        !1;
                        var t = $(e.currentTarget),
                        n = {
                            score: t.data("score") || 0,
                            autoSend: t.data("auto-send") || !1,
                            needPlayerInfo: t.data("need-player-info") || !1,
                            batchId: t.data("batch")
                        };
                        return n.score ? n.score > HORTOR_CONF.InfoServerData.score ? HORTOR.showAlert("积分不足，不能兑换") : n.autoSend && n.needPlayerInfo ? g(n) : void d("您确定使用" + n.score + "积分兑换该礼包么", n) : l(n)
                    })
                })
            })
        },
        showGameList: function() {
            var e = "web";
            navigator.userAgent.indexOf("HortorApp") > -1 ? e = "app": navigator.userAgent.indexOf("MicroMessenger") > -1 && (e = "wx"),
            $.getJSON(window.HORTOR_CONF.ApiHost + "/gc/sdk/more-game?compaign=hover&openId=" + window.HORTOR_CONF.UserId + "&channel=" + window.HORTOR_CONF.Channel + "&ext=" + window.HORTOR_CONF.Ext + "&loginFrom=" + window.HORTOR_CONF.LoginFrom + "&time=" + HORTOR_CONF.TimeNow + "&sign=" + HORTOR_CONF.Sign + "&platform=" + e,
            function(t) {
                $.get(window.HORTOR_CONF.GameCenterHost + "/templates/gameList.html?v=1.0.5",
                function(n) {
                    t.loadMore = 10 == t.gameList.length,
                    t.page = 1;
                    var i = Mustache.render(n, t);
                    $("#sidebar .game-more-panel").html(i);
                    var o = function(e) {
                        for (var t = new Array,
                        n = 0; n < e.gameList.length; n++) n >= 10 || t.push("hover" + Number(n + 1) + "-" + e.gameList[n].gameId);
                        HORTOR.compaignStat(t.join(","))
                    };
                    o(t);
                    var r = function() {
                        $("#sidebar .load-more").click(function(i) {
                            $("#more").html("加载中…"),
                            i.preventDefault(),
                            i.stopPropagation();
                            var o = $(i.currentTarget).attr("data-page");
                            $.ajax({
                                url: window.HORTOR_CONF.ApiHost + "/gc/sdk/more-game-list?openId=" + window.HORTOR_CONF.UserId + "&channel=" + window.HORTOR_CONF.Channel + "&ext=" + window.HORTOR_CONF.Ext + "&loginFrom=" + window.HORTOR_CONF.LoginFrom + "&time=" + HORTOR_CONF.TimeNow + "&sign=" + HORTOR_CONF.Sign + "&platform=" + e,
                                type: "GET",
                                data: {
                                    openId: window.HORTOR_CONF.UserId,
                                    page: Number(o) + 1
                                },
                                success: function(e) {
                                    t.page = t.page + 1;
                                    var i = e.gameList;
                                    i.length < 10 && (t.loadMore = !1);
                                    for (var o = 0; o < i.length; o++) t.gameList.push(i[o]);
                                    var a = Mustache.render(n, t);
                                    $("#sidebar .game-more-panel").html(a),
                                    t.loadMore && r()
                                },
                                complete: function() {},
                                error: function(e, t, n) {
                                    alert(n)
                                }
                            })
                        })
                    };
                    r()
                })
            })
        },
        showInfoList: function() {
            $.get(window.HORTOR_CONF.GameCenterHost + "/templates/infoServer.html?v=1.5.0",
            function(e) {
                var t = HORTOR_CONF.InfoServerData;
                "" != HORTOR_CONF.GameInfoRecommend.GameId && (t.gameInfoRecommend = HORTOR_CONF.GameInfoRecommend),
                t.infoTpRenderer = function() {
                    return 0 === this.tp ? "<span class='activity icon'>活动</span>": "<span class='strategy icon'>攻略</span>"
                },
                t.timeFormate_server = function() {
                    var e = 1e3 * Number(this.startAt),
                    t = (new Date).getTime();
                    if (t <= e) {
                        var n = new Date(e),
                        i = n.getMonth() + 1 >= 10 ? n.getMonth() + 1 : "0" + (n.getMonth() + 1),
                        o = n.getDate() >= 10 ? n.getDate() : "0" + n.getDate(),
                        r = n.getHours() >= 10 ? n.getHours() : "0" + n.getHours(),
                        a = n.getMinutes() >= 10 ? n.getMinutes() : "0" + n.getMinutes();
                        return i + "-" + o + " " + r + ":" + a
                    }
                    var s = 36e5;
                    return t - e <= s ? "刚刚": "开服 " + Math.floor((t - e) / s) + "小时"
                },
                t.timeFormate = function() {
                    var e = new Date(1e3 * Number(this.createdAt)),
                    t = e.getMonth() + 1 >= 10 ? e.getMonth() + 1 : "0" + (e.getMonth() + 1),
                    n = e.getDate() >= 10 ? e.getDate() : "0" + e.getDate();
                    return t + "-" + n
                };
                var n = Mustache.render(e, t);
                $("#sidebar .info-panel").html(n)
            })
        },
        showVipActive: function() {
            $.get(window.HORTOR_CONF.GameCenterHost + "/templates/vipactive.html?v=1.5.0",
            function(e) {
                var t = HORTOR_CONF.VipActiveData;
                t.GameCenterHost = window.HORTOR_CONF.GameCenterHost,
                t.isShowGift = t.vipGift.length > 0,
                t.isShowActive = t.actives.length > 0;
                var n = Mustache.render(e, t);
                $("#sidebar .vip-panel").html(n)
            })
        },
        reyunStat: function(e) {
            $.ajax({
                url: "//log.reyun.com/receive/rest/event",
                type: "POST",
                data: JSON.stringify({
                    appid: "82a7638fe398434f83ce619be2fa1b59",
                    who: window.HORTOR_CONF.UserId,
                    what: e,
                    context: {
                        deviceid: window.HORTOR_CONF.UserId
                    }
                }),
                success: function(e) {
                    console.log("success:", e)
                },
                error: function(e, t, n) {
                    console.log("error:", n)
                }
            })
        },
        updateAttentTimeForInfo: function() {
            $.ajax({
                url: window.HORTOR_CONF.ApiHost + "/gc/update-attenttime-info",
                type: "POST",
                data: {
                    openId: HORTOR_CONF.UserId,
                    attentTime: (new Date).getTime()
                },
                success: function(e) {
                    console.log("更新关注时间成功")
                },
                complete: function() {}
            })
        },
        updateAttentTimeForNewServer: function() {
            $.ajax({
                url: window.HORTOR_CONF.ApiHost + "/gc/update-attenttime-newserver",
                type: "POST",
                data: {
                    openId: HORTOR_CONF.UserId,
                    attentTime: (new Date).getTime()
                },
                success: function(e) {
                    console.log("更新关注时间成功")
                },
                complete: function() {}
            })
        }
    },
    String.stringFormat = function(e) {
        for (var t = 1; t < arguments.length; t++) e = e.replace(new RegExp("\\{" + (t - 1) + "\\}", "g"), void 0 != arguments[t] ? arguments[t] : "");
        return e
    },
    function() {
        var t = {};
        window.HORTOR_CHAT = {
            connect: function() {
                if (window.IS_DEBUG) window.HORTOR_CHAT.Config = {
                    chatAppKey: "x4vkb1qpvsrkk",
                    chatToken: "hy07iZAUFloEjozpvstMg/kCNayJdmr1w+5mjqkz9SXdrnEI+ZaihDKa/ke2SxSaEFY3+J/nEntxJSvEY7SYWw==",
                    chatRoomId: "test_1"
                },
                window.HORTOR_CHAT._registerSend(),
                window.HORTOR_CHAT._rongIMConnect();
                else {
                    if ("" == $.trim(window.HORTOR_GAME_CONF.GameId) || "" == $.trim(window.HORTOR_CONF.UserId)) return ! 1;
                    $.getJSON(window.HORTOR_CONF.ChatApiHost + "/chat?gameId=" + window.HORTOR_GAME_CONF.GameId + "&userId=" + window.HORTOR_CONF.UserId,
                    function(e) {
                        window.HORTOR_CHAT.Config = e,
                        window.HORTOR_CHAT.Config.chatRoomId = window.HORTOR_GAME_CONF.GameId + "_" + window.HORTOR_CHAT.Config.chatRoomCnt,
                        window.HORTOR_CHAT._registerSend(),
                        window.HORTOR_CHAT._rongIMConnect()
                    })
                }
            },
            disconnect: function() {
                RongIMClient.getInstance().disconnect()
            },
            _addLoadMsg: function(e, t) {
                $("#sidebar .dialog-box:first").append('<div class="load-msg-info' + (t ? " error-msg": "") + '"><span>' + e + "</span></div>")
            },
            _hideLoadMsg: function() {
                $(".load-msg-info").hide()
            },
            _rongIMConnect: function() {
                var e = this;
                e._addLoadMsg("正在加入聊天室..."),
                RongIMClient.init(window.HORTOR_CHAT.Config.chatAppKey),
                RongIMClient.setConnectionStatusListener({
                    onChanged: function(t) {
                        switch (t) {
                        case RongIMLib.ConnectionStatus.CONNECTED:
                            e._addLoadMsg("聊天室链接成功");
                            break;
                        case RongIMLib.ConnectionStatus.CONNECTING:
                            e._addLoadMsg("正在链接聊天室...");
                            break;
                        case RongIMLib.ConnectionStatus.DISCONNECTED:
                            e._addLoadMsg("聊天室连接断开", "error");
                            break;
                        case RongIMLib.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT:
                            e._addLoadMsg("其他设备登陆", "error");
                            break;
                        case RongIMLib.ConnectionStatus.NETWORK_UNAVAILABLE:
                            e._addLoadMsg("网络不可用", "error")
                        }
                    }
                }),
                RongIMClient.setOnReceiveMessageListener({
                    onReceived: function(e) {
                        switch (e.messageType) {
                        case RongIMClient.MessageType.TextMessage:
                            console.log(e.content.content),
                            window.HORTOR_CHAT._addMessage(e, !1);
                            break;
                        case RongIMClient.MessageType.ImageMessage:
                            break;
                        case RongIMClient.MessageType.DiscussionNotificationMessage:
                            break;
                        case RongIMClient.MessageType.LocationMessage:
                            break;
                        case RongIMClient.MessageType.RichContentMessage:
                            break;
                        case RongIMClient.MessageType.DiscussionNotificationMessage:
                            break;
                        case RongIMClient.MessageType.InformationNotificationMessage:
                            break;
                        case RongIMClient.MessageType.ContactNotificationMessage:
                            break;
                        case RongIMClient.MessageType.ProfileNotificationMessage:
                            break;
                        case RongIMClient.MessageType.CommandNotificationMessage:
                            break;
                        case RongIMClient.MessageType.CommandMessage:
                            break;
                        case RongIMClient.MessageType.UnknownMessage:
                        }
                    }
                }),
                RongIMClient.connect(window.HORTOR_CHAT.Config.chatToken, {
                    onSuccess: function(e) {
                        console.log("Login successfully." + e),
                        window.HORTOR_CHAT._joinTheChatRoom()
                    },
                    onTokenIncorrect: function() {
                        e._addLoadMsg("token无效", "error")
                    },
                    onError: function(t) {
                        var n = "";
                        switch (t) {
                        case RongIMLib.ErrorCode.TIMEOUT:
                            n = "超时";
                            break;
                        case RongIMLib.ErrorCode.UNKNOWN_ERROR:
                            n = "未知错误";
                            break;
                        case RongIMLib.ErrorCode.UNACCEPTABLE_PaROTOCOL_VERSION:
                            n = "不可接受的协议版本";
                            break;
                        case RongIMLib.ErrorCode.IDENTIFIER_REJECTED:
                            n = "appkey不正确";
                            break;
                        case RongIMLib.ErrorCode.SERVER_UNAVAILABLE:
                            n = "服务器不可用"
                        }
                        e._addLoadMsg(t, "error")
                    }
                })
            },
            _joinTheChatRoom: function() {
                this.inited = !1,
                this._initEvent();
                var e = this;
                RongIMClient.getInstance().joinChatRoom(window.HORTOR_CHAT.Config.chatRoomId, 25, {
                    onSuccess: function() {
                        e._addLoadMsg("加入聊天室成功"),
                        e._hideLoadMsg()
                    },
                    onError: function() {
                        e._addLoadMsg("加入聊天室失败", "error")
                    }
                })
            },
            _initEvent: function() {
                this.inited || (this._initCopyUid(), $("#sidebar .dialog-box").off("click", ".accusation").on("click", ".accusation",
                function(e) {
                    e.preventDefault(),
                    e.stopPropagation();
                    var t = $(this),
                    n = t.data("user-id"),
                    i = t.data("user-name"),
                    o = t.data("msg");
                    HORTOR.showAlert({
                        text: "您确认要举报" + (i ? " “" + i + "” ": "") + "这个玩家吗？",
                        btns: [{
                            text: "确定",
                            type: "primary",
                            onClick: function() {
                                $.ajax({
                                    type: "POST",
                                    url: window.HORTOR_CONF.ApiHost + "/auth/add-gag",
                                    data: {
                                        reportUserId: window.HORTOR_CONF.UserId,
                                        upborneUserId: n,
                                        chatRoomId: window.HORTOR_CHAT.Config.chatRoomId,
                                        msg: o
                                    },
                                    success: function(e) {
                                        HORTOR.showAlert(e.msg)
                                    },
                                    error: function(e, t, n) {
                                        HORTOR.showAlert(n)
                                    }
                                })
                            }
                        },
                        {
                            text: "取消"
                        }]
                    })
                }), this.inited = !0)
            },
            _pushCopyUid: function(t) {
                return "undefined" === e.text ? HORTOR.showAlert("玩家信息获取失败") : void HORTOR.showAlert({
                    text: '<div style="text-align: center;"><p>玩家UID：<i class="canselect-code">' + t + '</i></p><p class="desc">长按玩家UID复制</p></div>',
                    btns: [{
                        text: "知道了",
                        type: "primary"
                    }]
                })
            },
            _initCopyUid: function() {
                var e = this;
                return ! this.clipboard && void(Clipboard ? (this.clipboard = new Clipboard(".user-img"), this.clipboard.on("success",
                function(e) {
                    return "undefined" === e.text ? HORTOR.showAlert("玩家信息获取失败") : void HORTOR.showAlert({
                        text: '<div style="text-align: center;"><p>玩家UID：<i class="canselect-code">' + e.text + '</i></p><p class="desc">玩家UID已复制成功</p></div>',
                        btns: [{
                            text: "知道了",
                            type: "primary"
                        }]
                    })
                }), this.clipboard.on("error",
                function(t) {
                    e._pushCopyUid(t.text)
                })) : $(".dialog-box").off("click", ".user-img").on("click", ".user-img",
                function() {
                    e._pushCopyUid($(this).data("clipboard-text"))
                }))
            },
            _addMessage: function(e, t) {
                var n = this,
                i = e.content.content;
                if (i.indexOf("script") >= 0 || i.indexOf("style") >= 0 || i.indexOf("onload") >= 0 || i.indexOf("src") >= 0 || i.indexOf(n.htmlEncodeJQ("</a>")) >= 0 || i.indexOf(n.htmlEncodeJQ("<img")) >= 0 || i.indexOf(n.htmlEncodeJQ("<a")) >= 0) return ! 1;
                var o = $("#sidebar .dialog-box"),
                r = 0 == o[0].scrollTop || o[0].scrollHeight - o[0].scrollTop >= $("#sidebar .dialog-box").outerHeight(!0) - 1 && o[0].scrollHeight - o[0].scrollTop <= $("#sidebar .dialog-box").outerHeight(!0) - 1 + 5 || (new Date).getTime() - e.sentTime > 1e3 || t,
                a = '<div class="clearfix message-body {0}" data-user-id="{2}"><div class="user-img"><img class="avatar" src="{1}"><img class="user-level" data-user-id="{7}" style="display: none; padding-right: 2px" width="20px"></div><div class="msg clearfix"><div class="msg-info"><div class="user-name"></div><img class="user-sex" data-user-id="{6}" style="display: none;" width="11px"><div class="sentTime"></div><div class="accusation" data-user-id="{5}" data-msg="{8}" style="display: {4}">举报</div></div><div class="msgAngle"></div><div class="msgBody canselect">{3}</div></div></div>',
                s = window.HORTOR_CONF.ChatApiHost + "/chat/headImg?userId=" + e.senderUserId;
                $("#sidebar .dialog-box:first").append(String.stringFormat(a, e.senderUserId == window.HORTOR_CONF.UserId ? "from-self": "from-other", s, e.senderUserId, i, e.senderUserId == window.HORTOR_CONF.UserId ? "none": "inline-block", e.senderUserId, e.senderUserId, e.senderUserId, i)),
                r && (o[0].scrollTop = o[0].scrollHeight),
                window.HORTOR_CHAT._showName(e.senderUserId, e.sentTime),
                window.HORTOR_CHAT._showSentTime(t ? (new Date).getTime() : e.sentTime)
            },
            _setUserInfo: function(e, t) {
                var n = $("#sidebar .message-body[data-user-id='" + e + "']");
                t.name && (n.find(".user-name").text(t.name), n.find(".accusation").data("user-name", t.name)),
                n.find(".user-img").attr("data-clipboard-text", t.userId2 || "undefined"),
                t.sex && n.find(".user-sex").attr("src", window.HORTOR_CONF.GameCenterHost + "/img/" + (1 == t.sex ? "man": "woman") + ".png").css("display", "inline-block"),
                t.vipLevel && n.find(".user-level").attr("src", window.HORTOR_CONF.GameCenterHost + "/img/vip" + t.vipLevel + ".png").show().css("display", "inline-block")
            },
            _showName: function(e, t) {
                this._userInfoCache = this._userInfoCache || {};
                var n = this._userInfoCache[e];
                return n ? this._setUserInfo(e, n) : (this._userInfoCache[e] = {},
                void $.get(window.HORTOR_CONF.ChatApiHost + "/chat/name?userId=" + e,
                function(t) {
                    this._setUserInfo(e, this._userInfoCache[e] = t)
                }.bind(this)))
            },
            _showSentTime: function(e) {
                var t = (new Date).getTime(),
                n = " (刚刚)",
                i = t - e;
                i > 36e5 ? n = " (" + Math.round(i / 36e5) + "小时前)": i > 6e4 && i < 36e5 && (n = " (" + Math.round(i / 6e4) + "分钟前)"),
                $("#sidebar .dialog-box:first").find(".sentTime:last").append(n)
            },
            _registerSend: function() {
                this.sendInput = $("#sidebar #mainContent"),
                $("#sidebar #send").click(function() {
                    window.HORTOR_CHAT._handleSend()
                }),
                this.sendInput.keyup(function(e) {
                    13 == e.keyCode && window.HORTOR_CHAT._handleSend()
                })
            },
            _handleSend: function() {
                var e = this,
                n = $.trim(e.sendInput.val());
                if ("" != n) {
                    if (void 0 != t.sentTime && (new Date).getTime() - t.sentTime < 1e4) return HORTOR.showAlert("请不要频繁发送消息! ");
                    if (console.log("上一条消息:", t.txt), void 0 != t.txt && t.txt == n && (new Date).getTime() - t.sentTime < 18e4) return HORTOR.showAlert("请不要频繁发送同一条消息!");
                    if (n.length > 40) return HORTOR.showAlert("聊天内容不能超过40个字！");
                    if (HORTOR_CONF.IsQQUser) return window.HORTOR_CHAT._addMessage({
                        content: {
                            content: n
                        },
                        sentTime: (new Date).getTime(),
                        senderUserId: window.HORTOR_CONF.UserId
                    },
                    !0);
                    var i = new RongIMLib.TextMessage({
                        content: e.htmlEncodeJQ(e.sendInput.val()),
                        extra: "附加信息"
                    });
                    e.sendInput.val("");
                    var o = RongIMLib.ConversationType.CHATROOM,
                    r = window.HORTOR_CHAT.Config.chatRoomId,
                    a = RongIMClient.getInstance();
                    a.sendMessage(o, r, i, {
                        onSuccess: function(e) {
                            console.log("Send successfully"),
                            t.sentTime = (new Date).getTime(),
                            t.txt = n,
                            window.HORTOR_CHAT._addMessage(e, !0)
                        },
                        onError: function(e, t) {
                            if (console.log("message:", t), 23408 == e) return HORTOR.showAlert("您已被禁言,请不要发布不良信息或广告");
                            var n = "";
                            switch (e) {
                            case RongIMLib.ErrorCode.TIMEOUT:
                                n = "超时";
                                break;
                            case RongIMLib.ErrorCode.UNKNOWN_ERROR:
                                n = "未知错误";
                                break;
                            case RongIMLib.ErrorCode.REJECTED_BY_BLACKLIST:
                                n = "在黑名单中，无法向对方发送消息";
                                break;
                            case RongIMLib.ErrorCode.NOT_IN_DISCUSSION:
                                n = "不在讨论组中";
                                break;
                            case RongIMLib.ErrorCode.NOT_IN_GROUP:
                                n = "不在群组中";
                                break;
                            case RongIMLib.ErrorCode.NOT_IN_CHATROOM:
                                n = "不在聊天室中";
                                break;
                            default:
                                n = "已被禁言"
                            }
                        }
                    })
                }
            },
            htmlEncodeJQ: function(e) {
                return $("<span/>").text(e).html()
            },
            htmlDecodeJQ: function(e) {
                return $("<span/>").html(e).text()
            }
        }
    } ();
})()