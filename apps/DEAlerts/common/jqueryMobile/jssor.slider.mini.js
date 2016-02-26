﻿(function(g, e, b, j, c, i, k) { /*! Jssor */
    new(function() {});
    var d = g.$JssorEasing$ = {
            $EaseSwing: function(a) {
                return -b.cos(a * b.PI) / 2 + .5
            },
            $EaseLinear: function(a) {
                return a
            },
            $EaseInQuad: function(a) {
                return a * a
            },
            $EaseOutQuad: function(a) {
                return -a * (a - 2)
            },
            $EaseInOutQuad: function(a) {
                return (a *= 2) < 1 ? 1 / 2 * a * a : -1 / 2 * (--a * (a - 2) - 1)
            },
            $EaseInCubic: function(a) {
                return a * a * a
            },
            $EaseOutCubic: function(a) {
                return (a -= 1) * a * a + 1
            },
            $EaseInOutCubic: function(a) {
                return (a *= 2) < 1 ? 1 / 2 * a * a * a : 1 / 2 * ((a -= 2) * a * a + 2)
            },
            $EaseInQuart: function(a) {
                return a * a * a * a
            },
            $EaseOutQuart: function(a) {
                return -((a -= 1) * a * a * a - 1)
            },
            $EaseInOutQuart: function(a) {
                return (a *= 2) < 1 ? 1 / 2 * a * a * a * a : -1 / 2 * ((a -= 2) * a * a * a - 2)
            },
            $EaseInQuint: function(a) {
                return a * a * a * a * a
            },
            $EaseOutQuint: function(a) {
                return (a -= 1) * a * a * a * a + 1
            },
            $EaseInOutQuint: function(a) {
                return (a *= 2) < 1 ? 1 / 2 * a * a * a * a * a : 1 / 2 * ((a -= 2) * a * a * a * a + 2)
            },
            $EaseInSine: function(a) {
                return 1 - b.cos(a * b.PI / 2)
            },
            $EaseOutSine: function(a) {
                return b.sin(a * b.PI / 2)
            },
            $EaseInOutSine: function(a) {
                return -1 / 2 * (b.cos(b.PI * a) - 1)
            },
            $EaseInExpo: function(a) {
                return a == 0 ? 0 : b.pow(2, 10 * (a - 1))
            },
            $EaseOutExpo: function(a) {
                return a == 1 ? 1 : -b.pow(2, -10 * a) + 1
            },
            $EaseInOutExpo: function(a) {
                return a == 0 || a == 1 ? a : (a *= 2) < 1 ? 1 / 2 * b.pow(2, 10 * (a - 1)) : 1 / 2 * (-b.pow(2, -10 * --a) + 2)
            },
            $EaseInCirc: function(a) {
                return -(b.sqrt(1 - a * a) - 1)
            },
            $EaseOutCirc: function(a) {
                return b.sqrt(1 - (a -= 1) * a)
            },
            $EaseInOutCirc: function(a) {
                return (a *= 2) < 1 ? -1 / 2 * (b.sqrt(1 - a * a) - 1) : 1 / 2 * (b.sqrt(1 - (a -= 2) * a) + 1)
            },
            $EaseInElastic: function(a) {
                if (!a || a == 1) return a;
                var c = .3,
                    d = .075;
                return -(b.pow(2, 10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c))
            },
            $EaseOutElastic: function(a) {
                if (!a || a == 1) return a;
                var c = .3,
                    d = .075;
                return b.pow(2, -10 * a) * b.sin((a - d) * 2 * b.PI / c) + 1
            },
            $EaseInOutElastic: function(a) {
                if (!a || a == 1) return a;
                var c = .45,
                    d = .1125;
                return (a *= 2) < 1 ? -.5 * b.pow(2, 10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c) : b.pow(2, -10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c) * .5 + 1
            },
            $EaseInBack: function(a) {
                var b = 1.70158;
                return a * a * ((b + 1) * a - b)
            },
            $EaseOutBack: function(a) {
                var b = 1.70158;
                return (a -= 1) * a * ((b + 1) * a + b) + 1
            },
            $EaseInOutBack: function(a) {
                var b = 1.70158;
                return (a *= 2) < 1 ? 1 / 2 * a * a * (((b *= 1.525) + 1) * a - b) : 1 / 2 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
            },
            $EaseInBounce: function(a) {
                return 1 - d.$EaseOutBounce(1 - a)
            },
            $EaseOutBounce: function(a) {
                return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
            },
            $EaseInOutBounce: function(a) {
                return a < 1 / 2 ? d.$EaseInBounce(a * 2) * .5 : d.$EaseOutBounce(a * 2 - 1) * .5 + .5
            },
            $EaseGoBack: function(a) {
                return 1 - b.abs(2 - 1)
            },
            $EaseInWave: function(a) {
                return 1 - b.cos(a * b.PI * 2)
            },
            $EaseOutWave: function(a) {
                return b.sin(a * b.PI * 2)
            },
            $EaseOutJump: function(a) {
                return 1 - ((a *= 2) < 1 ? (a = 1 - a) * a * a : (a -= 1) * a * a)
            },
            $EaseInJump: function(a) {
                return (a *= 2) < 1 ? a * a * a : (a = 2 - a) * a * a
            }
        },
        f = g.$Jease$ = {
            $Swing: d.$EaseSwing,
            $Linear: d.$EaseLinear,
            $InQuad: d.$EaseInQuad,
            $OutQuad: d.$EaseOutQuad,
            $InOutQuad: d.$EaseInOutQuad,
            $InCubic: d.$EaseInCubic,
            $OutCubic: d.$EaseOutCubic,
            $InOutCubic: d.$EaseInOutCubic,
            $InQuart: d.$EaseInQuart,
            $OutQuart: d.$EaseOutQuart,
            $InOutQuart: d.$EaseInOutQuart,
            $InQuint: d.$EaseInQuint,
            $OutQuint: d.$EaseOutQuint,
            $InOutQuint: d.$EaseInOutQuint,
            $InSine: d.$EaseInSine,
            $OutSine: d.$EaseOutSine,
            $InOutSine: d.$EaseInOutSine,
            $InExpo: d.$EaseInExpo,
            $OutExpo: d.$EaseOutExpo,
            $InOutExpo: d.$EaseInOutExpo,
            $InCirc: d.$EaseInCirc,
            $OutCirc: d.$EaseOutCirc,
            $InOutCirc: d.$EaseInOutCirc,
            $InElastic: d.$EaseInElastic,
            $OutElastic: d.$EaseOutElastic,
            $InOutElastic: d.$EaseInOutElastic,
            $InBack: d.$EaseInBack,
            $OutBack: d.$EaseOutBack,
            $InOutBack: d.$EaseInOutBack,
            $InBounce: d.$EaseInBounce,
            $OutBounce: d.$EaseOutBounce,
            $InOutBounce: d.$EaseInOutBounce,
            $GoBack: d.$EaseGoBack,
            $InWave: d.$EaseInWave,
            $OutWave: d.$EaseOutWave,
            $OutJump: d.$EaseOutJump,
            $InJump: d.$EaseInJump
        };
    var a = new function() {
        var f = this,
            zb = /\S+/g,
            S = 1,
            fb = 2,
            jb = 3,
            ib = 4,
            nb = 5,
            I, s = 0,
            l = 0,
            q = 0,
            J = 0,
            C = 0,
            y = navigator,
            sb = y.appName,
            n = y.userAgent;

        function Ib() {
            if (!I) {
                I = {
                    Rg: "ontouchstart" in g || "createTouch" in e
                };
                var a;
                if (y.pointerEnabled || (a = y.msPointerEnabled)) I.Bd = a ? "msTouchAction" : "touchAction"
            }
            return I
        }

        function t(i) {
            if (!s) {
                s = -1;
                if (sb == "Microsoft Internet Explorer" && !!g.attachEvent && !!g.ActiveXObject) {
                    var f = n.indexOf("MSIE");
                    s = S;
                    q = o(n.substring(f + 5, n.indexOf(";", f))); /*@cc_on J=@_jscript_version@*/ ;
                    l = e.documentMode || q
                } else if (sb == "Netscape" && !!g.addEventListener) {
                    var d = n.indexOf("Firefox"),
                        b = n.indexOf("Safari"),
                        h = n.indexOf("Chrome"),
                        c = n.indexOf("AppleWebKit");
                    if (d >= 0) {
                        s = fb;
                        l = o(n.substring(d + 8))
                    } else if (b >= 0) {
                        var j = n.substring(0, b).lastIndexOf("/");
                        s = h >= 0 ? ib : jb;
                        l = o(n.substring(j + 1, b))
                    } else {
                        var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(n);
                        if (a) {
                            s = S;
                            l = q = o(a[1])
                        }
                    }
                    if (c >= 0) C = o(n.substring(c + 12))
                } else {
                    var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(n);
                    if (a) {
                        s = nb;
                        l = o(a[2])
                    }
                }
            }
            return i == s
        }

        function p() {
            return t(S)
        }

        function N() {
            return p() && (l < 6 || e.compatMode == "BackCompat")
        }

        function hb() {
            return t(jb)
        }

        function mb() {
            return t(nb)
        }

        function ab() {
            return hb() && C > 534 && C < 535
        }

        function L() {
            return p() && l < 9
        }

        function cb(a) {
            var b;
            return function(d) {
                if (!b) {
                    b = a;
                    var c = a.substr(0, 1).toUpperCase() + a.substr(1);
                    m([a].concat(["WebKit", "ms", "Moz", "O", "webkit"]), function(g, f) {
                        var e = a;
                        if (f) e = g + c;
                        if (d.style[e] != k) return b = e
                    })
                }
                return b
            }
        }
        var bb = cb("transform");

        function rb(a) {
            return {}.toString.call(a)
        }
        var H;

        function Fb() {
            if (!H) {
                H = {};
                m(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function(a) {
                    H["[object " + a + "]"] = a.toLowerCase()
                })
            }
            return H
        }

        function m(a, d) {
            if (rb(a) == "[object Array]") {
                for (var b = 0; b < a.length; b++)
                    if (d(a[b], b, a)) return c
            } else
                for (var e in a)
                    if (d(a[e], e, a)) return c
        }

        function A(a) {
            return a == j ? String(a) : Fb()[rb(a)] || "object"
        }

        function pb(a) {
            for (var b in a) return c
        }

        function x(a) {
            try {
                return A(a) == "object" && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"))
            } catch (b) {}
        }

        function w(a, b) {
            return {
                x: a,
                y: b
            }
        }

        function vb(b, a) {
            setTimeout(b, a || 0)
        }

        function F(b, d, c) {
            var a = !b || b == "inherit" ? "" : b;
            m(d, function(c) {
                var b = c.exec(a);
                if (b) {
                    var d = a.substr(0, b.index),
                        e = a.substr(b.lastIndex + 1, a.length - (b.lastIndex + 1));
                    a = d + e
                }
            });
            a = c + (a.indexOf(" ") != 0 ? " " : "") + a;
            return a
        }

        function eb(b, a) {
            if (l < 9) b.style.filter = a
        }

        function Bb(g, a, i) {
            if (!J || J < 9) {
                var d = a.$ScaleX,
                    e = a.$ScaleY,
                    j = (a.$Rotate || 0) % 360,
                    h = "";
                if (j || d != k || e != k) {
                    if (d == k) d = 1;
                    if (e == k) e = 1;
                    var c = f.Tg(j / 180 * b.PI, d || 1, e || 1),
                        i = f.Og(c, a.$OriginalWidth, a.$OriginalHeight);
                    f.Dd(g, i.y);
                    f.Id(g, i.x);
                    h = "progid:DXImageTransform.Microsoft.Matrix(M11=" + c[0][0] + ", M12=" + c[0][1] + ", M21=" + c[1][0] + ", M22=" + c[1][1] + ", SizingMethod='auto expand')"
                }
                var m = g.style.filter,
                    n = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),
                    l = F(m, [n], h);
                eb(g, l)
            }
        }
        f.Pg = Ib;
        f.Jd = p;
        f.Ng = hb;
        f.tc = mb;
        f.V = L;
        f.sd = function() {
            return l
        };
        f.ng = function() {
            t();
            return C
        };
        f.$Delay = vb;

        function V(a) {
            a.constructor === V.caller && a.xd && a.xd.apply(a, V.caller.arguments)
        }
        f.xd = V;
        f.qb = function(a) {
            if (f.ud(a)) a = e.getElementById(a);
            return a
        };

        function r(a) {
            return a || g.event
        }
        f.vd = r;
        f.yc = function(a) {
            a = r(a);
            return a.target || a.srcElement || e
        };
        f.Qd = function(a) {
            a = r(a);
            return {
                x: a.pageX || a.clientX || 0,
                y: a.pageY || a.clientY || 0
            }
        };

        function B(c, d, a) {
            if (a !== k) c.style[d] = a == k ? "" : a;
            else {
                var b = c.currentStyle || c.style;
                a = b[d];
                if (a == "" && g.getComputedStyle) {
                    b = c.ownerDocument.defaultView.getComputedStyle(c, j);
                    b && (a = b.getPropertyValue(d) || b[d])
                }
                return a
            }
        }

        function X(b, c, a, d) {
            if (a != k) {
                if (a == j) a = "";
                else d && (a += "px");
                B(b, c, a)
            } else return o(B(b, c))
        }

        function h(c, a) {
            var d = a ? X : B,
                b;
            if (a & 4) b = cb(c);
            return function(e, f) {
                return d(e, b ? b(e) : c, f, a & 2)
            }
        }

        function Cb(b) {
            if (p() && q < 9) {
                var a = /opacity=([^)]*)/.exec(b.style.filter || "");
                return a ? o(a[1]) / 100 : 1
            } else return o(b.style.opacity || "1")
        }

        function Eb(c, a, f) {
            if (p() && q < 9) {
                var h = c.style.filter || "",
                    i = new RegExp(/[\s]*alpha\([^\)]*\)/g),
                    e = b.round(100 * a),
                    d = "";
                if (e < 100 || f) d = "alpha(opacity=" + e + ") ";
                var g = F(h, [i], d);
                eb(c, g)
            } else c.style.opacity = a == 1 ? "" : b.round(a * 100) / 100
        }
        var xb = {
            $Rotate: ["rotate"],
            $RotateX: ["rotateX"],
            $RotateY: ["rotateY"],
            $ScaleX: ["scaleX", 2],
            $ScaleY: ["scaleY", 2],
            $TranslateX: ["translateX", 1],
            $TranslateY: ["translateY", 1],
            $TranslateZ: ["translateZ", 1],
            $SkewX: ["skewX"],
            $SkewY: ["skewY"]
        };

        function Z(e, c) {
            if (p() && l && l < 10) {
                delete c.$RotateX;
                delete c.$RotateY
            }
            var d = bb(e);
            if (d) {
                var b = "";
                a.c(c, function(e, c) {
                    var a = xb[c];
                    if (a) {
                        var d = a[1] || 0;
                        b += (b ? " " : "") + a[0] + "(" + e + (["deg", "px", ""])[d] + ")"
                    }
                });
                e.style[d] = b
            }
        }
        f.jg = function(b, a) {
            if (ab()) vb(f.K(j, Z, b, a));
            else(L() ? Bb : Z)(b, a)
        };
        f.Sc = h("transformOrigin", 4);
        f.ig = h("backfaceVisibility", 4);
        f.kg = h("transformStyle", 4);
        f.mg = h("perspective", 6);
        f.lg = h("perspectiveOrigin", 4);
        f.sg = function(a, c) {
            if (p() && q < 9 || q < 10 && N()) a.style.zoom = c == 1 ? "" : c;
            else {
                var b = bb(a);
                if (b) {
                    var f = "scale(" + c + ")",
                        e = a.style[b],
                        g = new RegExp(/[\s]*scale\(.*?\)/g),
                        d = F(e, [g], f);
                    a.style[b] = d
                }
            }
        };
        f.Ib = function(b, a) {
            return function(c) {
                c = r(c);
                var e = c.type,
                    d = c.relatedTarget || (e == "mouseout" ? c.toElement : c.fromElement);
                (!d || d !== a && !f.zg(a, d)) && b(c)
            }
        };
        f.e = function(a, c, d, b) {
            a = f.qb(a);
            if (a.addEventListener) {
                c == "mousewheel" && a.addEventListener("DOMMouseScroll", d, b);
                a.addEventListener(c, d, b)
            } else if (a.attachEvent) {
                a.attachEvent("on" + c, d);
                b && a.setCapture && a.setCapture()
            }
        };
        f.R = function(a, c, d, b) {
            a = f.qb(a);
            if (a.removeEventListener) {
                c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
                a.removeEventListener(c, d, b)
            } else if (a.detachEvent) {
                a.detachEvent("on" + c, d);
                b && a.releaseCapture && a.releaseCapture()
            }
        };
        f.bc = function(a) {
            a = r(a);
            a.preventDefault && a.preventDefault();
            a.cancel = c;
            a.returnValue = i
        };
        f.Kg = function(a) {
            a = r(a);
            a.stopPropagation && a.stopPropagation();
            a.cancelBubble = c
        };
        f.K = function(d, c) {
            var a = [].slice.call(arguments, 2),
                b = function() {
                    var b = a.concat([].slice.call(arguments, 0));
                    return c.apply(d, b)
                };
            return b
        };
        f.ug = function(a, b) {
            if (b == k) return a.textContent || a.innerText;
            var c = e.createTextNode(b);
            f.sc(a);
            a.appendChild(c)
        };
        f.O = function(d, c) {
            for (var b = [], a = d.firstChild; a; a = a.nextSibling)(c || a.nodeType == 1) && b.push(a);
            return b
        };

        function qb(a, c, e, b) {
            b = b || "u";
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    if (R(a, b) == c) return a;
                    if (!e) {
                        var d = qb(a, c, e, b);
                        if (d) return d
                    }
                }
        }
        f.D = qb;

        function P(a, d, f, b) {
            b = b || "u";
            var c = [];
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    R(a, b) == d && c.push(a);
                    if (!f) {
                        var e = P(a, d, f, b);
                        if (e.length) c = c.concat(e)
                    }
                }
            return c
        }

        function kb(a, c, d) {
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    if (a.tagName == c) return a;
                    if (!d) {
                        var b = kb(a, c, d);
                        if (b) return b
                    }
                }
        }
        f.xg = kb;

        function db(a, c, e) {
            var b = [];
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    (!c || a.tagName == c) && b.push(a);
                    if (!e) {
                        var d = db(a, c, e);
                        if (d.length) b = b.concat(d)
                    }
                }
            return b
        }
        f.vg = db;
        f.tg = function(b, a) {
            return b.getElementsByTagName(a)
        };

        function z() {
            var e = arguments,
                d, c, b, a, g = 1 & e[0],
                f = 1 + g;
            d = e[f - 1] || {};
            for (; f < e.length; f++)
                if (c = e[f])
                    for (b in c) {
                        a = c[b];
                        if (a !== k) {
                            a = c[b];
                            var h = d[b];
                            d[b] = g && (x(h) || x(a)) ? z(g, {}, h, a) : a
                        }
                    }
                return d
        }
        f.p = z;

        function W(f, g) {
            var d = {},
                c, a, b;
            for (c in f) {
                a = f[c];
                b = g[c];
                if (a !== b) {
                    var e;
                    if (x(a) && x(b)) {
                        a = W(a, b);
                        e = !pb(a)
                    }!e && (d[c] = a)
                }
            }
            return d
        }
        f.fd = function(a) {
            return A(a) == "function"
        };
        f.uc = function(a) {
            return A(a) == "array"
        };
        f.ud = function(a) {
            return A(a) == "string"
        };
        f.Zb = function(a) {
            return !isNaN(o(a)) && isFinite(a)
        };
        f.c = m;
        f.yg = x;

        function O(a) {
            return e.createElement(a)
        }
        f.mb = function() {
            return O("DIV")
        };
        f.Cg = function() {
            return O("SPAN")
        };
        f.kd = function() {};

        function T(b, c, a) {
            if (a == k) return b.getAttribute(c);
            b.setAttribute(c, a)
        }

        function R(a, b) {
            return T(a, b) || T(a, "data-" + b)
        }
        f.C = T;
        f.j = R;

        function u(b, a) {
            if (a == k) return b.className;
            b.className = a
        }
        f.Zc = u;

        function ub(b) {
            var a = {};
            m(b, function(b) {
                a[b] = b
            });
            return a
        }

        function wb(b, a) {
            return b.match(a || zb)
        }

        function M(b, a) {
            return ub(wb(b || "", a))
        }
        f.Bg = wb;

        function Y(b, c) {
            var a = "";
            m(c, function(c) {
                a && (a += b);
                a += c
            });
            return a
        }

        function E(a, c, b) {
            u(a, Y(" ", z(W(M(u(a)), M(c)), M(b))))
        }
        f.Yc = function(a) {
            return a.parentNode
        };
        f.S = function(a) {
            f.Y(a, "none")
        };
        f.A = function(a, b) {
            f.Y(a, b ? "none" : "")
        };
        f.qg = function(b, a) {
            b.removeAttribute(a)
        };
        f.rg = function() {
            return p() && l < 10
        };
        f.pg = function(d, c) {
            if (c) d.style.clip = "rect(" + b.round(c.$Top) + "px " + b.round(c.$Right) + "px " + b.round(c.$Bottom) + "px " + b.round(c.$Left) + "px)";
            else {
                var g = d.style.cssText,
                    f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)],
                    e = F(g, f, "");
                a.Nb(d, e)
            }
        };
        f.T = function() {
            return +new Date
        };
        f.H = function(b, a) {
            b.appendChild(a)
        };
        f.Pb = function(b, a, c) {
            (c || a.parentNode).insertBefore(b, a)
        };
        f.Hb = function(a, b) {
            (b || a.parentNode).removeChild(a)
        };
        f.Jg = function(a, b) {
            m(a, function(a) {
                f.Hb(a, b)
            })
        };
        f.sc = function(a) {
            f.Jg(f.O(a, c), a)
        };
        f.Oe = function(a, b) {
            var c = f.Yc(a);
            b & 1 && f.E(a, (f.l(c) - f.l(a)) / 2);
            b & 2 && f.G(a, (f.m(c) - f.m(a)) / 2)
        };
        f.Kb = function(b, a) {
            return parseInt(b, a || 10)
        };
        var o = parseFloat;
        f.Nc = o;
        f.zg = function(b, a) {
            var c = e.body;
            while (a && b !== a && c !== a) try {
                a = a.parentNode
            } catch (d) {
                return i
            }
            return b === a
        };

        function U(d, c, b) {
            var a = d.cloneNode(!c);
            !b && f.qg(a, "id");
            return a
        }
        f.X = U;
        f.Cb = function(e, g) {
            var a = new Image;

            function b(e, c) {
                f.R(a, "load", b);
                f.R(a, "abort", d);
                f.R(a, "error", d);
                g && g(a, c)
            }

            function d(a) {
                b(a, c)
            }
            if (mb() && l < 11.6 || !e) b(!e);
            else {
                f.e(a, "load", b);
                f.e(a, "abort", d);
                f.e(a, "error", d);
                a.src = e
            }
        };
        f.Ud = function(d, a, e) {
            var c = d.length + 1;

            function b(b) {
                c--;
                if (a && b && b.src == a.src) a = b;
                !c && e && e(a)
            }
            m(d, function(a) {
                f.Cb(a.src, b)
            });
            b()
        };
        f.Xc = function(b, g, i, h) {
            if (h) b = U(b);
            var c = P(b, g);
            if (!c.length) c = a.tg(b, g);
            for (var f = c.length - 1; f > -1; f--) {
                var d = c[f],
                    e = U(i);
                u(e, u(d));
                a.Nb(e, d.style.cssText);
                a.Pb(e, d);
                a.Hb(d)
            }
            return b
        };

        function Gb(b) {
            var l = this,
                p = "",
                r = ["av", "pv", "ds", "dn"],
                g = [],
                q, j = 0,
                h = 0,
                d = 0;

            function i() {
                E(b, q, g[d || j || h & 2 || h]);
                a.W(b, "pointer-events", d ? "none" : "")
            }

            function c() {
                j = 0;
                i();
                f.R(e, "mouseup", c);
                f.R(e, "touchend", c);
                f.R(e, "touchcancel", c)
            }

            function o(a) {
                if (d) f.bc(a);
                else {
                    j = 4;
                    i();
                    f.e(e, "mouseup", c);
                    f.e(e, "touchend", c);
                    f.e(e, "touchcancel", c)
                }
            }
            l.jd = function(a) {
                if (a === k) return h;
                h = a & 2 || a & 1;
                i()
            };
            l.$Enable = function(a) {
                if (a === k) return !d;
                d = a ? 0 : 3;
                i()
            };
            l.$Elmt = b = f.qb(b);
            var n = a.Bg(u(b));
            if (n) p = n.shift();
            m(r, function(a) {
                g.push(p + a)
            });
            q = Y(" ", g);
            g.unshift("");
            f.e(b, "mousedown", o);
            f.e(b, "touchstart", o)
        }
        f.ac = function(a) {
            return new Gb(a)
        };
        f.W = B;
        f.ib = h("overflow");
        f.G = h("top", 2);
        f.E = h("left", 2);
        f.l = h("width", 2);
        f.m = h("height", 2);
        f.Id = h("marginLeft", 2);
        f.Dd = h("marginTop", 2);
        f.z = h("position");
        f.Y = h("display");
        f.J = h("zIndex", 1);
        f.Ab = function(b, a, c) {
            if (a != k) Eb(b, a, c);
            else return Cb(b)
        };
        f.Nb = function(a, b) {
            if (b != k) a.style.cssText = b;
            else return a.style.cssText
        };
        var Q = {
                $Opacity: f.Ab,
                $Top: f.G,
                $Left: f.E,
                N: f.l,
                P: f.m,
                Bb: f.z,
                Kh: f.Y,
                $ZIndex: f.J
            },
            K;

        function G() {
            if (!K) K = z({
                Mh: f.Dd,
                Lh: f.Id,
                $Clip: f.pg,
                B: f.jg
            }, Q);
            return K
        }

        function ob() {
            var a = {};
            a.B = a.B;
            a.B = a.$Rotate;
            a.B = a.$RotateX;
            a.B = a.$RotateY;
            a.B = a.$SkewX;
            a.B = a.$SkewY;
            a.B = a.$TranslateX;
            a.B = a.$TranslateY;
            a.B = a.$TranslateZ;
            return G()
        }
        f.ne = G;
        f.Pc = ob;
        f.xe = function(c, b) {
            G();
            var a = {};
            m(b, function(d, b) {
                if (Q[b]) a[b] = Q[b](c)
            });
            return a
        };
        f.bb = function(c, b) {
            var a = G();
            m(b, function(d, b) {
                a[b] && a[b](c, d)
            })
        };
        f.Wd = function(b, a) {
            ob();
            f.bb(b, a)
        };
        var D = new function() {
            var a = this;

            function b(d, g) {
                for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++)
                    for (var k = f[c] = [], b = 0; b < h; b++) {
                        for (var e = 0, a = 0; a < j; a++) e += d[c][a] * g[a][b];
                        k[b] = e
                    }
                return f
            }
            a.$ScaleX = function(b, c) {
                return a.Vc(b, c, 0)
            };
            a.$ScaleY = function(b, c) {
                return a.Vc(b, 0, c)
            };
            a.Vc = function(a, c, d) {
                return b(a, [
                    [c, 0],
                    [0, d]
                ])
            };
            a.Ub = function(d, c) {
                var a = b(d, [
                    [c.x],
                    [c.y]
                ]);
                return w(a[0][0], a[1][0])
            }
        };
        f.Tg = function(d, a, c) {
            var e = b.cos(d),
                f = b.sin(d);
            return [
                [e * a, -f * c],
                [f * a, e * c]
            ]
        };
        f.Og = function(d, c, a) {
            var e = D.Ub(d, w(-c / 2, -a / 2)),
                f = D.Ub(d, w(c / 2, -a / 2)),
                g = D.Ub(d, w(c / 2, a / 2)),
                h = D.Ub(d, w(-c / 2, a / 2));
            return w(b.min(e.x, f.x, g.x, h.x) + c / 2, b.min(e.y, f.y, g.y, h.y) + a / 2)
        };
        var yb = {
            $Zoom: 1,
            $ScaleX: 1,
            $ScaleY: 1,
            $Rotate: 0,
            $RotateX: 0,
            $RotateY: 0,
            $TranslateX: 0,
            $TranslateY: 0,
            $TranslateZ: 0,
            $SkewX: 0,
            $SkewY: 0
        };
        f.Lc = function(b) {
            var c = b || {};
            if (b)
                if (a.fd(b)) c = {
                    kb: c
                };
                else if (a.fd(b.$Clip)) c.$Clip = {
                kb: b.$Clip
            };
            return c
        };

        function tb(c, a) {
            var b = {};
            m(c, function(c, d) {
                var e = c;
                if (a[d] != k)
                    if (f.Zb(c)) e = c + a[d];
                    else e = tb(c, a[d]);
                b[d] = e
            });
            return b
        }
        f.Je = tb;
        f.Kd = function(h, i, w, n, y, z, o) {
            var c = i;
            if (h) {
                c = {};
                for (var g in i) {
                    var A = z[g] || 1,
                        v = y[g] || [0, 1],
                        e = (w - v[0]) / v[1];
                    e = b.min(b.max(e, 0), 1);
                    e = e * A;
                    var u = b.floor(e);
                    if (e != u) e -= u;
                    var l = n.kb || d.$EaseSwing,
                        m, B = h[g],
                        q = i[g];
                    if (a.Zb(q)) {
                        l = n[g] || l;
                        var x = l(e);
                        m = B + q * x
                    } else {
                        m = a.p({
                            wb: {}
                        }, h[g]);
                        a.c(q.wb || q, function(d, a) {
                            if (n.$Clip) l = n.$Clip[a] || n.$Clip.kb || l;
                            var c = l(e),
                                b = d * c;
                            m.wb[a] = b;
                            m[a] += b
                        })
                    }
                    c[g] = m
                }
                var t, f = {
                    $OriginalWidth: o.$OriginalWidth,
                    $OriginalHeight: o.$OriginalHeight
                };
                a.c(yb, function(d, a) {
                    t = t || i[a];
                    var b = c[a];
                    if (b != k) {
                        if (b != d) f[a] = b;
                        delete c[a]
                    } else if (h[a] != k && h[a] != d) f[a] = h[a]
                });
                if (i.$Zoom && f.$Zoom) {
                    f.$ScaleX = f.$Zoom;
                    f.$ScaleY = f.$Zoom
                }
                c.B = f
            }
            if (i.$Clip && o.$Move) {
                var p = c.$Clip.wb,
                    s = (p.$Top || 0) + (p.$Bottom || 0),
                    r = (p.$Left || 0) + (p.$Right || 0);
                c.$Left = (c.$Left || 0) + r;
                c.$Top = (c.$Top || 0) + s;
                c.$Clip.$Left -= r;
                c.$Clip.$Right -= r;
                c.$Clip.$Top -= s;
                c.$Clip.$Bottom -= s
            }
            if (c.$Clip && a.rg() && !c.$Clip.$Top && !c.$Clip.$Left && c.$Clip.$Right == o.$OriginalWidth && c.$Clip.$Bottom == o.$OriginalHeight) c.$Clip = j;
            return c
        }
    };

    function m() {
        var b = this,
            d = [];

        function i(a, b) {
            d.push({
                vc: a,
                Ec: b
            })
        }

        function h(b, c) {
            a.c(d, function(a, e) {
                a.vc == b && a.Ec === c && d.splice(e, 1)
            })
        }
        b.$On = b.addEventListener = i;
        b.$Off = b.removeEventListener = h;
        b.n = function(b) {
            var c = [].slice.call(arguments, 1);
            a.c(d, function(a) {
                a.vc == b && a.Ec.apply(g, c)
            })
        }
    }
    var l = function(y, C, k, P, N, J) {
        y = y || 0;
        var d = this,
            q, n, o, v, z = 0,
            H, I, G, B, x = 0,
            h = 0,
            m = 0,
            D, l, f, e, p, w = [],
            A;

        function O(a) {
            f += a;
            e += a;
            l += a;
            h += a;
            m += a;
            x += a
        }

        function u(n) {
            var g = n;
            if (p && (g >= e || g <= f)) g = ((g - f) % p + p) % p + f;
            if (!D || v || h != g) {
                var i = b.min(g, e);
                i = b.max(i, f);
                if (!D || v || i != m) {
                    if (J) {
                        var j = (i - l) / (C || 1);
                        if (k.$Reverse) j = 1 - j;
                        var o = a.Kd(N, J, j, H, G, I, k);
                        a.c(o, function(b, a) {
                            A[a] && A[a](P, b)
                        })
                    }
                    d.Ic(m - l, i - l);
                    m = i;
                    a.c(w, function(b, c) {
                        var a = n < h ? w[w.length - c - 1] : b;
                        a.v(m - x)
                    });
                    var r = h,
                        q = m;
                    h = g;
                    D = c;
                    d.Qb(r, q)
                }
            }
        }

        function E(a, c, d) {
            c && a.$Shift(e);
            if (!d) {
                f = b.min(f, a.Fc() + x);
                e = b.max(e, a.gb() + x)
            }
            w.push(a)
        }
        var r = g.requestAnimationFrame || g.webkitRequestAnimationFrame || g.mozRequestAnimationFrame || g.msRequestAnimationFrame;
        if (a.Ng() && a.sd() < 7) r = j;
        r = r || function(b) {
            a.$Delay(b, k.$Interval)
        };

        function K() {
            if (q) {
                var d = a.T(),
                    e = b.min(d - z, k.Uc),
                    c = h + e * o;
                z = d;
                if (c * o >= n * o) c = n;
                u(c);
                if (!v && c * o >= n * o) L(B);
                else r(K)
            }
        }

        function t(g, i, j) {
            if (!q) {
                q = c;
                v = j;
                B = i;
                g = b.max(g, f);
                g = b.min(g, e);
                n = g;
                o = n < h ? -1 : 1;
                d.Od();
                z = a.T();
                r(K)
            }
        }

        function L(a) {
            if (q) {
                v = q = B = i;
                d.Ld();
                a && a()
            }
        }
        d.$Play = function(a, b, c) {
            t(a ? h + a : e, b, c)
        };
        d.Cd = t;
        d.rb = L;
        d.Ke = function(a) {
            t(a)
        };
        d.db = function() {
            return h
        };
        d.Sd = function() {
            return n
        };
        d.yb = function() {
            return m
        };
        d.v = u;
        d.$Move = function(a) {
            u(h + a)
        };
        d.$IsPlaying = function() {
            return q
        };
        d.Ae = function(a) {
            p = a
        };
        d.$Shift = O;
        d.I = function(a, b) {
            E(a, 0, b)
        };
        d.Oc = function(a) {
            E(a, 1)
        };
        d.ye = function(a) {
            e += a
        };
        d.Fc = function() {
            return f
        };
        d.gb = function() {
            return e
        };
        d.Qb = d.Od = d.Ld = d.Ic = a.kd;
        d.rc = a.T();
        k = a.p({
            $Interval: 16,
            Uc: 50
        }, k);
        p = k.Tc;
        A = a.p({}, a.ne(), k.xc);
        f = l = y;
        e = y + C;
        I = k.$Round || {};
        G = k.$During || {};
        H = a.Lc(k.$Easing)
    };
    var o = g.$JssorSlideshowFormations$ = new function() {
        var h = this,
            d = 0,
            a = 1,
            f = 2,
            e = 3,
            s = 1,
            r = 2,
            t = 4,
            q = 8,
            w = 256,
            x = 512,
            v = 1024,
            u = 2048,
            j = u + s,
            i = u + r,
            o = x + s,
            m = x + r,
            n = w + t,
            k = w + q,
            l = v + t,
            p = v + q;

        function y(a) {
            return (a & r) == r
        }

        function z(a) {
            return (a & t) == t
        }

        function g(b, a, c) {
            c.push(a);
            b[a] = b[a] || [];
            b[a].push(c)
        }
        h.$FormationStraight = function(f) {
            for (var d = f.$Cols, e = f.$Rows, s = f.$Assembly, t = f.hc, r = [], a = 0, b = 0, p = d - 1, q = e - 1, h = t - 1, c, b = 0; b < e; b++)
                for (a = 0; a < d; a++) {
                    switch (s) {
                        case j:
                            c = h - (a * e + (q - b));
                            break;
                        case l:
                            c = h - (b * d + (p - a));
                            break;
                        case o:
                            c = h - (a * e + b);
                        case n:
                            c = h - (b * d + a);
                            break;
                        case i:
                            c = a * e + b;
                            break;
                        case k:
                            c = b * d + (p - a);
                            break;
                        case m:
                            c = a * e + (q - b);
                            break;
                        default:
                            c = b * d + a
                    }
                    g(r, c, [b, a])
                }
            return r
        };
        h.$FormationSwirl = function(q) {
            var x = q.$Cols,
                y = q.$Rows,
                B = q.$Assembly,
                w = q.hc,
                A = [],
                z = [],
                u = 0,
                b = 0,
                h = 0,
                r = x - 1,
                s = y - 1,
                t, p, v = 0;
            switch (B) {
                case j:
                    b = r;
                    h = 0;
                    p = [f, a, e, d];
                    break;
                case l:
                    b = 0;
                    h = s;
                    p = [d, e, a, f];
                    break;
                case o:
                    b = r;
                    h = s;
                    p = [e, a, f, d];
                    break;
                case n:
                    b = r;
                    h = s;
                    p = [a, e, d, f];
                    break;
                case i:
                    b = 0;
                    h = 0;
                    p = [f, d, e, a];
                    break;
                case k:
                    b = r;
                    h = 0;
                    p = [a, f, d, e];
                    break;
                case m:
                    b = 0;
                    h = s;
                    p = [e, d, f, a];
                    break;
                default:
                    b = 0;
                    h = 0;
                    p = [d, f, a, e]
            }
            u = 0;
            while (u < w) {
                t = h + "," + b;
                if (b >= 0 && b < x && h >= 0 && h < y && !z[t]) {
                    z[t] = c;
                    g(A, u++, [h, b])
                } else switch (p[v++ % p.length]) {
                    case d:
                        b--;
                        break;
                    case f:
                        h--;
                        break;
                    case a:
                        b++;
                        break;
                    case e:
                        h++
                }
                switch (p[v % p.length]) {
                    case d:
                        b++;
                        break;
                    case f:
                        h++;
                        break;
                    case a:
                        b--;
                        break;
                    case e:
                        h--
                }
            }
            return A
        };
        h.$FormationZigZag = function(p) {
            var w = p.$Cols,
                x = p.$Rows,
                z = p.$Assembly,
                v = p.hc,
                t = [],
                u = 0,
                b = 0,
                c = 0,
                q = w - 1,
                r = x - 1,
                y, h, s = 0;
            switch (z) {
                case j:
                    b = q;
                    c = 0;
                    h = [f, a, e, a];
                    break;
                case l:
                    b = 0;
                    c = r;
                    h = [d, e, a, e];
                    break;
                case o:
                    b = q;
                    c = r;
                    h = [e, a, f, a];
                    break;
                case n:
                    b = q;
                    c = r;
                    h = [a, e, d, e];
                    break;
                case i:
                    b = 0;
                    c = 0;
                    h = [f, d, e, d];
                    break;
                case k:
                    b = q;
                    c = 0;
                    h = [a, f, d, f];
                    break;
                case m:
                    b = 0;
                    c = r;
                    h = [e, d, f, d];
                    break;
                default:
                    b = 0;
                    c = 0;
                    h = [d, f, a, f]
            }
            u = 0;
            while (u < v) {
                y = c + "," + b;
                if (b >= 0 && b < w && c >= 0 && c < x && typeof t[y] == "undefined") {
                    g(t, u++, [c, b]);
                    switch (h[s % h.length]) {
                        case d:
                            b++;
                            break;
                        case f:
                            c++;
                            break;
                        case a:
                            b--;
                            break;
                        case e:
                            c--
                    }
                } else {
                    switch (h[s++ % h.length]) {
                        case d:
                            b--;
                            break;
                        case f:
                            c--;
                            break;
                        case a:
                            b++;
                            break;
                        case e:
                            c++
                    }
                    switch (h[s++ % h.length]) {
                        case d:
                            b++;
                            break;
                        case f:
                            c++;
                            break;
                        case a:
                            b--;
                            break;
                        case e:
                            c--
                    }
                }
            }
            return t
        };
        h.$FormationStraightStairs = function(q) {
            var u = q.$Cols,
                v = q.$Rows,
                e = q.$Assembly,
                t = q.hc,
                r = [],
                s = 0,
                c = 0,
                d = 0,
                f = u - 1,
                h = v - 1,
                x = t - 1;
            switch (e) {
                case j:
                case m:
                case o:
                case i:
                    var a = 0,
                        b = 0;
                    break;
                case k:
                case l:
                case n:
                case p:
                    var a = f,
                        b = 0;
                    break;
                default:
                    e = p;
                    var a = f,
                        b = 0
            }
            c = a;
            d = b;
            while (s < t) {
                if (z(e) || y(e)) g(r, x - s++, [d, c]);
                else g(r, s++, [d, c]);
                switch (e) {
                    case j:
                    case m:
                        c--;
                        d++;
                        break;
                    case o:
                    case i:
                        c++;
                        d--;
                        break;
                    case k:
                    case l:
                        c--;
                        d--;
                        break;
                    case p:
                    case n:
                    default:
                        c++;
                        d++
                }
                if (c < 0 || d < 0 || c > f || d > h) {
                    switch (e) {
                        case j:
                        case m:
                            a++;
                            break;
                        case k:
                        case l:
                        case o:
                        case i:
                            b++;
                            break;
                        case p:
                        case n:
                        default:
                            a--
                    }
                    if (a < 0 || b < 0 || a > f || b > h) {
                        switch (e) {
                            case j:
                            case m:
                                a = f;
                                b++;
                                break;
                            case o:
                            case i:
                                b = h;
                                a++;
                                break;
                            case k:
                            case l:
                                b = h;
                                a--;
                                break;
                            case p:
                            case n:
                            default:
                                a = 0;
                                b++
                        }
                        if (b > h) b = h;
                        else if (b < 0) b = 0;
                        else if (a > f) a = f;
                        else if (a < 0) a = 0
                    }
                    d = b;
                    c = a
                }
            }
            return r
        };
        h.$FormationSquare = function(i) {
            var a = i.$Cols || 1,
                c = i.$Rows || 1,
                j = [],
                d, e, f, h, k;
            f = a < c ? (c - a) / 2 : 0;
            h = a > c ? (a - c) / 2 : 0;
            k = b.round(b.max(a / 2, c / 2)) + 1;
            for (d = 0; d < a; d++)
                for (e = 0; e < c; e++) g(j, k - b.min(d + 1 + f, e + 1 + h, a - d + f, c - e + h), [e, d]);
            return j
        };
        h.$FormationRectangle = function(f) {
            var d = f.$Cols || 1,
                e = f.$Rows || 1,
                h = [],
                a, c, i;
            i = b.round(b.min(d / 2, e / 2)) + 1;
            for (a = 0; a < d; a++)
                for (c = 0; c < e; c++) g(h, i - b.min(a + 1, c + 1, d - a, e - c), [c, a]);
            return h
        };
        h.$FormationRandom = function(d) {
            for (var e = [], a, c = 0; c < d.$Rows; c++)
                for (a = 0; a < d.$Cols; a++) g(e, b.ceil(1e5 * b.random()) % 13, [c, a]);
            return e
        };
        h.$FormationCircle = function(d) {
            for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, c = 0; c < e; c++)
                for (a = 0; a < f; a++) g(h, b.round(b.sqrt(b.pow(c - i, 2) + b.pow(a - j, 2))), [a, c]);
            return h
        };
        h.$FormationCross = function(d) {
            for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, c = 0; c < e; c++)
                for (a = 0; a < f; a++) g(h, b.round(b.min(b.abs(c - i), b.abs(a - j))), [a, c]);
            return h
        };
        h.$FormationRectangleCross = function(f) {
            for (var h = f.$Cols || 1, i = f.$Rows || 1, j = [], a, d = h / 2 - .5, e = i / 2 - .5, k = b.max(d, e) + 1, c = 0; c < h; c++)
                for (a = 0; a < i; a++) g(j, b.round(k - b.max(d - b.abs(c - d), e - b.abs(a - e))) - 1, [a, c]);
            return j
        }
    };
    g.$JssorSlideshowRunner$ = function(n, s, q, t, y) {
        var f = this,
            u, g, e, x = 0,
            w = t.$TransitionsOrder,
            r, h = 8;

        function k(g, f) {
            var e = {
                $Interval: f,
                $Duration: 1,
                $Delay: 0,
                $Cols: 1,
                $Rows: 1,
                $Opacity: 0,
                $Zoom: 0,
                $Clip: 0,
                $Move: i,
                $SlideOut: i,
                $Reverse: i,
                $Formation: o.$FormationRandom,
                $Assembly: 1032,
                $ChessMode: {
                    $Column: 0,
                    $Row: 0
                },
                $Easing: d.$EaseSwing,
                $Round: {},
                Ob: [],
                $During: {}
            };
            a.p(e, g);
            e.hc = e.$Cols * e.$Rows;
            e.$Easing = a.Lc(e.$Easing);
            e.fe = b.ceil(e.$Duration / e.$Interval);
            e.ie = function(b, a) {
                b /= e.$Cols;
                a /= e.$Rows;
                var f = b + "x" + a;
                if (!e.Ob[f]) {
                    e.Ob[f] = {
                        N: b,
                        P: a
                    };
                    for (var c = 0; c < e.$Cols; c++)
                        for (var d = 0; d < e.$Rows; d++) e.Ob[f][d + "," + c] = {
                            $Top: d * a,
                            $Right: c * b + b,
                            $Bottom: d * a + a,
                            $Left: c * b
                        }
                }
                return e.Ob[f]
            };
            if (e.$Brother) {
                e.$Brother = k(e.$Brother, f);
                e.$SlideOut = c
            }
            return e
        }

        function p(A, h, d, v, n, l) {
            var y = this,
                t, u = {},
                j = {},
                m = [],
                f, e, r, p = d.$ChessMode.$Column || 0,
                q = d.$ChessMode.$Row || 0,
                g = d.ie(n, l),
                o = B(d),
                C = o.length - 1,
                s = d.$Duration + d.$Delay * C,
                w = v + s,
                k = d.$SlideOut,
                x;
            w += 50;

            function B(a) {
                var b = a.$Formation(a);
                return a.$Reverse ? b.reverse() : b
            }
            y.td = w;
            y.Vb = function(c) {
                c -= v;
                var e = c < s;
                if (e || x) {
                    x = e;
                    if (!k) c = s - c;
                    var f = b.ceil(c / d.$Interval);
                    a.c(j, function(c, e) {
                        var d = b.max(f, c.ue);
                        d = b.min(d, c.length - 1);
                        if (c.Rc != d) {
                            if (!c.Rc && !k) a.A(m[e]);
                            else d == c.me && k && a.S(m[e]);
                            c.Rc = d;
                            a.Wd(m[e], c[d])
                        }
                    })
                }
            };
            h = a.X(h);
            if (a.V()) {
                var D = !h["no-image"],
                    z = a.vg(h);
                a.c(z, function(b) {
                    (D || b["jssor-slider"]) && a.Ab(b, a.Ab(b), c)
                })
            }
            a.c(o, function(h, m) {
                a.c(h, function(G) {
                    var K = G[0],
                        J = G[1],
                        v = K + "," + J,
                        o = i,
                        s = i,
                        x = i;
                    if (p && J % 2) {
                        if (p & 3) o = !o;
                        if (p & 12) s = !s;
                        if (p & 16) x = !x
                    }
                    if (q && K % 2) {
                        if (q & 3) o = !o;
                        if (q & 12) s = !s;
                        if (q & 16) x = !x
                    }
                    d.$Top = d.$Top || d.$Clip & 4;
                    d.$Bottom = d.$Bottom || d.$Clip & 8;
                    d.$Left = d.$Left || d.$Clip & 1;
                    d.$Right = d.$Right || d.$Clip & 2;
                    var C = s ? d.$Bottom : d.$Top,
                        z = s ? d.$Top : d.$Bottom,
                        B = o ? d.$Right : d.$Left,
                        A = o ? d.$Left : d.$Right;
                    d.$Clip = C || z || B || A;
                    r = {};
                    e = {
                        $Top: 0,
                        $Left: 0,
                        $Opacity: 1,
                        N: n,
                        P: l
                    };
                    f = a.p({}, e);
                    t = a.p({}, g[v]);
                    if (d.$Opacity) e.$Opacity = 2 - d.$Opacity;
                    if (d.$ZIndex) {
                        e.$ZIndex = d.$ZIndex;
                        f.$ZIndex = 0
                    }
                    var I = d.$Cols * d.$Rows > 1 || d.$Clip;
                    if (d.$Zoom || d.$Rotate) {
                        var H = c;
                        if (a.V())
                            if (d.$Cols * d.$Rows > 1) H = i;
                            else I = i;
                        if (H) {
                            e.$Zoom = d.$Zoom ? d.$Zoom - 1 : 1;
                            f.$Zoom = 1;
                            if (a.V() || a.tc()) e.$Zoom = b.min(e.$Zoom, 2);
                            var N = d.$Rotate || 0;
                            e.$Rotate = N * 360 * (x ? -1 : 1);
                            f.$Rotate = 0
                        }
                    }
                    if (I) {
                        var h = t.wb = {};
                        if (d.$Clip) {
                            var w = d.$ScaleClip || 1;
                            if (C && z) {
                                h.$Top = g.P / 2 * w;
                                h.$Bottom = -h.$Top
                            } else if (C) h.$Bottom = -g.P * w;
                            else if (z) h.$Top = g.P * w;
                            if (B && A) {
                                h.$Left = g.N / 2 * w;
                                h.$Right = -h.$Left
                            } else if (B) h.$Right = -g.N * w;
                            else if (A) h.$Left = g.N * w
                        }
                        r.$Clip = t;
                        f.$Clip = g[v]
                    }
                    var L = o ? 1 : -1,
                        M = s ? 1 : -1;
                    if (d.x) e.$Left += n * d.x * L;
                    if (d.y) e.$Top += l * d.y * M;
                    a.c(e, function(b, c) {
                        if (a.Zb(b))
                            if (b != f[c]) r[c] = b - f[c]
                    });
                    u[v] = k ? f : e;
                    var D = d.fe,
                        y = b.round(m * d.$Delay / d.$Interval);
                    j[v] = new Array(y);
                    j[v].ue = y;
                    j[v].me = y + D - 1;
                    for (var F = 0; F <= D; F++) {
                        var E = a.Kd(f, r, F / D, d.$Easing, d.$During, d.$Round, {
                            $Move: d.$Move,
                            $OriginalWidth: n,
                            $OriginalHeight: l
                        });
                        E.$ZIndex = E.$ZIndex || 1;
                        j[v].push(E)
                    }
                })
            });
            o.reverse();
            a.c(o, function(b) {
                a.c(b, function(c) {
                    var f = c[0],
                        e = c[1],
                        d = f + "," + e,
                        b = h;
                    if (e || f) b = a.X(h);
                    a.bb(b, u[d]);
                    a.ib(b, "hidden");
                    a.z(b, "absolute");
                    A.se(b);
                    m[d] = b;
                    a.A(b, !k)
                })
            })
        }

        function v() {
            var a = this,
                b = 0;
            l.call(a, 0, u);
            a.Qb = function(c, a) {
                if (a - b > h) {
                    b = a;
                    e && e.Vb(a);
                    g && g.Vb(a)
                }
            };
            a.ab = r
        }
        f.Ie = function() {
            var a = 0,
                c = t.$Transitions,
                d = c.length;
            if (w) a = x++ % d;
            else a = b.floor(b.random() * d);
            c[a] && (c[a].nb = a);
            return c[a]
        };
        f.Ne = function(w, x, j, l, a) {
            r = a;
            a = k(a, h);
            var i = l.Wc,
                d = j.Wc;
            i["no-image"] = !l.cc;
            d["no-image"] = !j.cc;
            var m = i,
                o = d,
                v = a,
                c = a.$Brother || k({}, h);
            if (!a.$SlideOut) {
                m = d;
                o = i
            }
            var t = c.$Shift || 0;
            g = new p(n, o, c, b.max(t - c.$Interval, 0), s, q);
            e = new p(n, m, v, b.max(c.$Interval - t, 0), s, q);
            g.Vb(0);
            e.Vb(0);
            u = b.max(g.td, e.td);
            f.nb = w
        };
        f.Db = function() {
            n.Db();
            g = j;
            e = j
        };
        f.de = function() {
            var a = j;
            if (e) a = new v;
            return a
        };
        if (a.V() || a.tc() || y && a.ng() < 537) h = 16;
        m.call(f);
        l.call(f, -1e7, 1e7)
    };
    var h = g.$JssorSlider$ = function(q, fc) {
        var o = this;

        function Ec() {
            var a = this;
            l.call(a, -1e8, 2e8);
            a.ge = function() {
                var c = a.yb(),
                    d = b.floor(c),
                    f = t(d),
                    e = c - b.floor(c);
                return {
                    nb: f,
                    ce: d,
                    Bb: e
                }
            };
            a.Qb = function(d, a) {
                var e = b.floor(a);
                if (e != a && a > d) e++;
                Ub(e, c);
                o.n(h.$EVT_POSITION_CHANGE, t(a), t(d), a, d)
            }
        }

        function Dc() {
            var b = this;
            l.call(b, 0, 0, {
                Tc: r
            });
            a.c(C, function(a) {
                D & 1 && a.Ae(r);
                b.Oc(a);
                a.$Shift(fb / bc)
            })
        }

        function Cc() {
            var a = this,
                b = Tb.$Elmt;
            l.call(a, -1, 2, {
                $Easing: d.$EaseLinear,
                xc: {
                    Bb: Zb
                },
                Tc: r
            }, b, {
                Bb: 1
            }, {
                Bb: -2
            });
            a.Mb = b
        }

        function qc(n, m) {
            var a = this,
                d, e, g, k, b;
            l.call(a, -1e8, 2e8, {
                Uc: 100
            });
            a.Od = function() {
                O = c;
                R = j;
                o.n(h.$EVT_SWIPE_START, t(w.db()), w.db())
            };
            a.Ld = function() {
                O = i;
                k = i;
                var a = w.ge();
                o.n(h.$EVT_SWIPE_END, t(w.db()), w.db());
                !a.Bb && Gc(a.ce, s)
            };
            a.Qb = function(i, h) {
                var a;
                if (k) a = b;
                else {
                    a = e;
                    if (g) {
                        var c = h / g;
                        a = f.$SlideEasing(c) * (e - d) + d
                    }
                }
                w.v(a)
            };
            a.ic = function(b, f, c, h) {
                d = b;
                e = f;
                g = c;
                w.v(b);
                a.v(0);
                a.Cd(c, h)
            };
            a.je = function(d) {
                k = c;
                b = d;
                a.$Play(d, j, c)
            };
            a.le = function(a) {
                b = a
            };
            w = new Ec;
            w.I(n);
            w.I(m)
        }

        function rc() {
            var c = this,
                b = Xb();
            a.J(b, 0);
            a.W(b, "pointerEvents", "none");
            c.$Elmt = b;
            c.se = function(c) {
                a.H(b, c);
                a.A(b)
            };
            c.Db = function() {
                a.S(b);
                a.sc(b)
            }
        }

        function Bc(k, e) {
            var d = this,
                q, H, x, n, y = [],
                w, B, W, G, Q, F, g, v, p;
            l.call(d, -u, u + 1, {});

            function E(b) {
                q && q.jb();
                T(k, b, 0);
                F = c;
                q = new I.$Class(k, I, a.Nc(a.j(k, "idle")) || pc);
                q.v(0)
            }

            function Y() {
                q.rc < I.rc && E()
            }

            function N(p, r, m) {
                if (!G) {
                    G = c;
                    if (n && m) {
                        var g = m.width,
                            b = m.height,
                            l = g,
                            k = b;
                        if (g && b && f.$FillMode) {
                            if (f.$FillMode & 3 && (!(f.$FillMode & 4) || g > K || b > J)) {
                                var j = i,
                                    q = K / J * b / g;
                                if (f.$FillMode & 1) j = q > 1;
                                else if (f.$FillMode & 2) j = q < 1;
                                l = j ? g * J / b : K;
                                k = j ? J : b * K / g
                            }
                            a.l(n, l);
                            a.m(n, k);
                            a.G(n, (J - k) / 2);
                            a.E(n, (K - l) / 2)
                        }
                        a.z(n, "absolute");
                        o.n(h.$EVT_LOAD_END, e)
                    }
                }
                a.S(r);
                p && p(d)
            }

            function X(b, c, f, g) {
                if (g == R && s == e && P)
                    if (!Fc) {
                        var a = t(b);
                        A.Ne(a, e, c, d, f);
                        c.be();
                        U.$Shift(a - U.Fc() - 1);
                        U.v(a);
                        z.ic(b, b, 0)
                    }
            }

            function ab(b) {
                if (b == R && s == e) {
                    if (!g) {
                        var a = j;
                        if (A)
                            if (A.nb == e) a = A.de();
                            else A.Db();
                        Y();
                        g = new yc(k, e, a, q);
                        g.gd(p)
                    }!g.$IsPlaying() && g.wc()
                }
            }

            function S(h, c, i) {
                if (h == e) {
                    if (h != c) C[c] && C[c].Be();
                    else !i && g && g.Le();
                    p && p.$Enable();
                    var k = R = a.T();
                    d.Cb(a.K(j, ab, k))
                } else {
                    var m = b.abs(e - h),
                        l = u + f.$LazyLoading - 1;
                    (!Q || m <= l) && d.Cb()
                }
            }

            function bb() {
                if (s == e && g) {
                    g.rb();
                    p && p.$Quit();
                    p && p.$Disable();
                    g.nd()
                }
            }

            function db() {
                s == e && g && g.rb()
            }

            function Z(a) {
                !M && o.n(h.$EVT_CLICK, e, a)
            }

            function O() {
                p = v.pInstance;
                g && g.gd(p)
            }
            d.Cb = function(d, b) {
                b = b || x;
                if (y.length && !G) {
                    a.A(b);
                    if (!W) {
                        W = c;
                        o.n(h.$EVT_LOAD_START, e);
                        a.c(y, function(b) {
                            if (!a.C(b, "src")) {
                                b.src = a.j(b, "src2");
                                a.Y(b, b["display-origin"])
                            }
                        })
                    }
                    a.Ud(y, n, a.K(j, N, d, b))
                } else N(d, b)
            };
            d.ze = function() {
                var h = e;
                if (f.$AutoPlaySteps < 0) h -= r;
                var c = h + f.$AutoPlaySteps * wc;
                if (D & 2) c = t(c);
                if (!(D & 1)) c = b.max(0, b.min(c, r - u));
                if (c != e) {
                    if (A) {
                        var d = A.Ie(r);
                        if (d) {
                            var i = R = a.T(),
                                g = C[t(c)];
                            return g.Cb(a.K(j, X, c, g, d, i), x)
                        }
                    }
                    nb(c)
                }
            };
            d.pc = function() {
                S(e, e, c)
            };
            d.Be = function() {
                p && p.$Quit();
                p && p.$Disable();
                d.od();
                g && g.he();
                g = j;
                E()
            };
            d.be = function() {
                a.S(k)
            };
            d.od = function() {
                a.A(k)
            };
            d.Yd = function() {
                p && p.$Enable()
            };

            function T(b, d, e) {
                if (a.C(b, "jssor-slider")) return;
                if (!F) {
                    if (b.tagName == "IMG") {
                        y.push(b);
                        if (!a.C(b, "src")) {
                            Q = c;
                            b["display-origin"] = a.Y(b);
                            a.S(b)
                        }
                    }
                    a.V() && a.J(b, (a.J(b) || 0) + 1)
                }
                var f = a.O(b);
                a.c(f, function(f) {
                    var h = f.tagName,
                        j = a.j(f, "u");
                    if (j == "player" && !v) {
                        v = f;
                        if (v.pInstance) O();
                        else a.e(v, "dataavailable", O)
                    }
                    if (j == "caption") {
                        if (d) {
                            a.Sc(f, a.j(f, "to"));
                            a.ig(f, a.j(f, "bf"));
                            a.kg(f, "preserve-3d")
                        } else if (!a.Jd()) {
                            var g = a.X(f, i, c);
                            a.Pb(g, f, b);
                            a.Hb(f, b);
                            f = g;
                            d = c
                        }
                    } else if (!F && !e && !n) {
                        if (h == "A") {
                            if (a.j(f, "u") == "image") n = a.xg(f, "IMG");
                            else n = a.D(f, "image", c);
                            if (n) {
                                w = f;
                                a.Y(w, "block");
                                a.bb(w, V);
                                B = a.X(w, c);
                                a.z(w, "relative");
                                a.Ab(B, 0);
                                a.W(B, "backgroundColor", "#000")
                            }
                        } else if (h == "IMG" && a.j(f, "u") == "image") n = f;
                        if (n) {
                            n.border = 0;
                            a.bb(n, V)
                        }
                    }
                    T(f, d, e + 1)
                })
            }
            d.Ic = function(c, b) {
                var a = u - b;
                Zb(H, a)
            };
            d.nb = e;
            m.call(d);
            a.mg(k, a.j(k, "p"));
            a.lg(k, a.j(k, "po"));
            var L = a.D(k, "thumb", c);
            if (L) {
                d.Ee = a.X(L);
                a.S(L)
            }
            a.A(k);
            x = a.X(cb);
            a.J(x, 1e3);
            a.e(k, "click", Z);
            E(c);
            d.cc = n;
            d.Ad = B;
            d.Wc = k;
            d.Mb = H = k;
            a.H(H, x);
            o.$On(203, S);
            o.$On(28, db);
            o.$On(24, bb)
        }

        function yc(y, f, p, q) {
            var b = this,
                m = 0,
                u = 0,
                g, j, e, d, k, t, r, n = C[f];
            l.call(b, 0, 0);

            function v() {
                a.sc(N);
                dc && k && n.Ad && a.H(N, n.Ad);
                a.A(N, !k && n.cc)
            }

            function w() {
                b.wc()
            }

            function x(a) {
                r = a;
                b.rb();
                b.wc()
            }
            b.wc = function() {
                var a = b.yb();
                if (!B && !O && !r && s == f) {
                    if (!a) {
                        if (g && !k) {
                            k = c;
                            b.nd(c);
                            o.n(h.$EVT_SLIDESHOW_START, f, m, u, g, d)
                        }
                        v()
                    }
                    var i, p = h.$EVT_STATE_CHANGE;
                    if (a != d)
                        if (a == e) i = d;
                        else if (a == j) i = e;
                    else if (!a) i = j;
                    else i = b.Sd();
                    o.n(p, f, a, m, j, e, d);
                    var l = P && (!E || F);
                    if (a == d)(e != d && !(E & 12) || l) && n.ze();
                    else(l || a != e) && b.Cd(i, w)
                }
            };
            b.Le = function() {
                e == d && e == b.yb() && b.v(j)
            };
            b.he = function() {
                A && A.nb == f && A.Db();
                var a = b.yb();
                a < d && o.n(h.$EVT_STATE_CHANGE, f, -a - 1, m, j, e, d)
            };
            b.nd = function(b) {
                p && a.ib(hb, b && p.ab.$Outside ? "" : "hidden")
            };
            b.Ic = function(b, a) {
                if (k && a >= g) {
                    k = i;
                    v();
                    n.od();
                    A.Db();
                    o.n(h.$EVT_SLIDESHOW_END, f, m, u, g, d)
                }
                o.n(h.$EVT_PROGRESS_CHANGE, f, a, m, j, e, d)
            };
            b.gd = function(a) {
                if (a && !t) {
                    t = a;
                    a.$On($JssorPlayer$.Ce, x)
                }
            };
            p && b.Oc(p);
            g = b.gb();
            b.Oc(q);
            j = g + q.dc;
            e = g + q.Yb;
            d = b.gb()
        }

        function Zb(g, f) {
            var e = x > 0 ? x : gb,
                c = Bb * f * (e & 1),
                d = Cb * f * (e >> 1 & 1);
            c = b.round(c);
            d = b.round(d);
            a.E(g, c);
            a.G(g, d)
        }

        function Pb() {
            pb = O;
            Kb = z.Sd();
            G = w.db()
        }

        function gc() {
            Pb();
            if (B || !F && E & 12) {
                z.rb();
                o.n(h.De)
            }
        }

        function ec(e) {
            if (!B && (F || !(E & 12)) && !z.$IsPlaying()) {
                var c = w.db(),
                    a = b.ceil(G);
                if (e && b.abs(H) >= f.$MinDragOffsetToSlide) {
                    a = b.ceil(c);
                    a += eb
                }
                if (!(D & 1)) a = b.min(r - u, b.max(a, 0));
                var d = b.abs(a - c);
                d = 1 - b.pow(1 - d, 5);
                if (!M && pb) z.Ke(Kb);
                else if (c == a) {
                    tb.Yd();
                    tb.pc()
                } else z.ic(c, a, d * Vb)
            }
        }

        function Ib(b) {
            !a.j(a.yc(b), "nodrag") && a.bc(b)
        }

        function uc(a) {
            Yb(a, 1)
        }

        function Yb(b, d) {
            b = a.vd(b);
            var k = a.yc(b);
            if (!L && !a.j(k, "nodrag") && vc() && (!d || b.touches.length == 1)) {
                B = c;
                Ab = i;
                R = j;
                a.e(e, d ? "touchmove" : "mousemove", Db);
                a.T();
                M = 0;
                gc();
                if (!pb) x = 0;
                if (d) {
                    var g = b.touches[0];
                    vb = g.clientX;
                    wb = g.clientY
                } else {
                    var f = a.Qd(b);
                    vb = f.x;
                    wb = f.y
                }
                H = 0;
                bb = 0;
                eb = 0;
                o.n(h.$EVT_DRAG_START, t(G), G, b)
            }
        }

        function Db(e) {
            if (B) {
                e = a.vd(e);
                var f;
                if (e.type != "mousemove") {
                    var l = e.touches[0];
                    f = {
                        x: l.clientX,
                        y: l.clientY
                    }
                } else f = a.Qd(e);
                if (f) {
                    var j = f.x - vb,
                        k = f.y - wb;
                    if (b.floor(G) != G) x = x || gb & L;
                    if ((j || k) && !x) {
                        if (L == 3)
                            if (b.abs(k) > b.abs(j)) x = 2;
                            else x = 1;
                        else x = L;
                        if (jb && x == 1 && b.abs(k) - b.abs(j) > 3) Ab = c
                    }
                    if (x) {
                        var d = k,
                            i = Cb;
                        if (x == 1) {
                            d = j;
                            i = Bb
                        }
                        if (!(D & 1)) {
                            if (d > 0) {
                                var g = i * s,
                                    h = d - g;
                                if (h > 0) d = g + b.sqrt(h) * 5
                            }
                            if (d < 0) {
                                var g = i * (r - u - s),
                                    h = -d - g;
                                if (h > 0) d = -g - b.sqrt(h) * 5
                            }
                        }
                        if (H - bb < -2) eb = 0;
                        else if (H - bb > 2) eb = -1;
                        bb = H;
                        H = d;
                        sb = G - H / i / (Z || 1);
                        if (H && x && !Ab) {
                            a.bc(e);
                            if (!O) z.je(sb);
                            else z.le(sb)
                        }
                    }
                }
            }
        }

        function mb() {
            sc();
            if (B) {
                B = i;
                a.T();
                a.R(e, "mousemove", Db);
                a.R(e, "touchmove", Db);
                M = H;
                z.rb();
                var b = w.db();
                o.n(h.$EVT_DRAG_END, t(b), b, t(G), G);
                E & 12 && Pb();
                ec(c)
            }
        }

        function kc(c) {
            if (M) {
                a.Kg(c);
                var b = a.yc(c);
                while (b && v !== b) {
                    b.tagName == "A" && a.bc(c);
                    try {
                        b = b.parentNode
                    } catch (d) {
                        break
                    }
                }
            }
        }

        function oc(a) {
            C[s];
            s = t(a);
            tb = C[s];
            Ub(a);
            return s
        }

        function Gc(a, b) {
            x = 0;
            oc(a);
            o.n(h.$EVT_PARK, t(a), b)
        }

        function Ub(b, c) {
            yb = b;
            a.c(S, function(a) {
                a.Mc(t(b), b, c)
            })
        }

        function vc() {
            var b = h.ed || 0,
                a = Y;
            if (jb) a & 1 && (a &= 1);
            h.ed |= a;
            return L = a & ~b
        }

        function sc() {
            if (L) {
                h.ed &= ~Y;
                L = 0
            }
        }

        function Xb() {
            var b = a.mb();
            a.bb(b, V);
            a.z(b, "absolute");
            return b
        }

        function t(a) {
            return (a % r + r) % r
        }

        function lc(a, c) {
            if (c)
                if (!D) {
                    a = b.min(b.max(a + yb, 0), r - u);
                    c = i
                } else if (D & 2) {
                a = t(a + yb);
                c = i
            }
            nb(a, f.$SlideDuration, c)
        }

        function zb() {
            a.c(S, function(a) {
                a.Jc(a.Jb.$ChanceToShow <= F)
            })
        }

        function ic() {
            if (!F) {
                F = 1;
                zb();
                if (!B) {
                    E & 12 && ec();
                    E & 3 && C[s].pc()
                }
            }
        }

        function hc() {
            if (F) {
                F = 0;
                zb();
                B || !(E & 12) || gc()
            }
        }

        function jc() {
            V = {
                N: K,
                P: J,
                $Top: 0,
                $Left: 0
            };
            a.c(T, function(b) {
                a.bb(b, V);
                a.z(b, "absolute");
                a.ib(b, "hidden");
                a.S(b)
            });
            a.bb(cb, V)
        }

        function lb(b, a) {
            nb(b, a, c)
        }

        function nb(g, e, l) {
            if (Rb && (!B && (F || !(E & 12)) || f.$NaviQuitDrag)) {
                O = c;
                B = i;
                z.rb();
                if (e == k) e = Vb;
                var d = Eb.yb(),
                    a = g;
                if (l) {
                    a = d + g;
                    if (g > 0) a = b.ceil(a);
                    else a = b.floor(a)
                }
                if (D & 2) a = t(a);
                if (!(D & 1)) a = b.max(0, b.min(a, r - u));
                var j = (a - d) % r;
                a = d + j;
                var h = d == a ? 0 : e * b.abs(j);
                h = b.min(h, e * u * 1.5);
                z.ic(d, a, h || 1)
            }
        }
        o.$PlayTo = nb;
        o.$GoTo = function(a) {
            w.v(a)
        };
        o.$Next = function() {
            lb(1)
        };
        o.$Prev = function() {
            lb(-1)
        };
        o.$Pause = function() {
            P = i
        };
        o.$Play = function() {
            if (!P) {
                P = c;
                C[s] && C[s].pc()
            }
        };
        o.$SetSlideshowTransitions = function(a) {
            f.$SlideshowOptions.$Transitions = a
        };
        o.$SetCaptionTransitions = function(b) {
            I.$Transitions = b;
            I.rc = a.T()
        };
        o.$SlidesCount = function() {
            return T.length
        };
        o.$CurrentIndex = function() {
            return s
        };
        o.$IsAutoPlaying = function() {
            return P
        };
        o.$IsDragging = function() {
            return B
        };
        o.$IsSliding = function() {
            return O
        };
        o.$IsMouseOver = function() {
            return !F
        };
        o.$LastDragSucceded = function() {
            return M
        };

        function X() {
            return a.l(y || q)
        }

        function ib() {
            return a.m(y || q)
        }
        o.$OriginalWidth = o.$GetOriginalWidth = X;
        o.$OriginalHeight = o.$GetOriginalHeight = ib;

        function Gb(c, d) {
            if (c == k) return a.l(q);
            if (!y) {
                var b = a.mb(e);
                a.Zc(b, a.Zc(q));
                a.Nb(b, a.Nb(q));
                a.Y(b, "block");
                a.z(b, "relative");
                a.G(b, 0);
                a.E(b, 0);
                a.ib(b, "visible");
                y = a.mb(e);
                a.z(y, "absolute");
                a.G(y, 0);
                a.E(y, 0);
                a.l(y, a.l(q));
                a.m(y, a.m(q));
                a.Sc(y, "0 0");
                a.H(y, b);
                var h = a.O(q);
                a.H(q, y);
                a.W(q, "backgroundImage", "");
                a.c(h, function(c) {
                    a.H(a.j(c, "noscale") ? q : b, c);
                    a.j(c, "autocenter") && Lb.push(c)
                })
            }
            Z = c / (d ? a.m : a.l)(y);
            a.sg(y, Z);
            var g = d ? Z * X() : c,
                f = d ? c : Z * ib();
            a.l(q, g);
            a.m(q, f);
            a.c(Lb, function(b) {
                var c = a.Kb(a.j(b, "autocenter"));
                a.Oe(b, c)
            })
        }
        o.$ScaleHeight = o.$GetScaleHeight = function(b) {
            if (b == k) return a.m(q);
            Gb(b, c)
        };
        o.$ScaleWidth = o.$SetScaleWidth = o.$GetScaleWidth = Gb;
        o.Ed = function(a) {
            var d = b.ceil(t(fb / bc)),
                c = t(a - s + d);
            if (c > u) {
                if (a - s > r / 2) a -= r;
                else if (a - s <= -r / 2) a += r
            } else a = s + c - d;
            return a
        };
        m.call(o);
        o.$Elmt = q = a.qb(q);
        var f = a.p({
            $FillMode: 0,
            $LazyLoading: 1,
            $ArrowKeyNavigation: 1,
            $StartIndex: 0,
            $AutoPlay: i,
            $Loop: 1,
            $NaviQuitDrag: c,
            $AutoPlaySteps: 1,
            $AutoPlayInterval: 3e3,
            $PauseOnHover: 1,
            $SlideDuration: 500,
            $SlideEasing: d.$EaseOutQuad,
            $MinDragOffsetToSlide: 20,
            $SlideSpacing: 0,
            $Cols: 1,
            $Align: 0,
            $UISearchMode: 1,
            $PlayOrientation: 1,
            $DragOrientation: 1
        }, fc);
        if (f.$Idle != k) f.$AutoPlayInterval = f.$Idle;
        if (f.$DisplayPieces != k) f.$Cols = f.$DisplayPieces;
        if (f.$ParkingPosition != k) f.$Align = f.$ParkingPosition;
        var gb = f.$PlayOrientation & 3,
            wc = (f.$PlayOrientation & 4) / -4 || 1,
            db = f.$SlideshowOptions,
            I = a.p({
                $Class: p,
                $PlayInMode: 1,
                $PlayOutMode: 1
            }, f.$CaptionSliderOptions);
        I.$Transitions = I.$Transitions || I.$CaptionTransitions;
        var qb = f.$BulletNavigatorOptions,
            W = f.$ArrowNavigatorOptions,
            ab = f.$ThumbnailNavigatorOptions,
            Q = !f.$UISearchMode,
            y, v = a.D(q, "slides", Q),
            cb = a.D(q, "loading", Q) || a.mb(e),
            Jb = a.D(q, "navigator", Q),
            cc = a.D(q, "arrowleft", Q),
            ac = a.D(q, "arrowright", Q),
            Hb = a.D(q, "thumbnavigator", Q),
            nc = a.l(v),
            mc = a.m(v),
            V, T = [],
            xc = a.O(v);
        a.c(xc, function(b) {
            if (b.tagName == "DIV" && !a.j(b, "u")) T.push(b);
            else a.V() && a.J(b, (a.J(b) || 0) + 1)
        });
        var s = -1,
            yb, tb, r = T.length,
            K = f.$SlideWidth || nc,
            J = f.$SlideHeight || mc,
            Wb = f.$SlideSpacing,
            Bb = K + Wb,
            Cb = J + Wb,
            bc = gb & 1 ? Bb : Cb,
            u = b.min(f.$Cols, r),
            hb, x, L, Ab, S = [],
            Qb, Sb, Ob, dc, Fc, P, E = f.$PauseOnHover,
            pc = f.$AutoPlayInterval,
            Vb = f.$SlideDuration,
            rb, ub, fb, Rb = u < r,
            D = Rb ? f.$Loop : 0,
            Y, M, F = 1,
            O, B, R, vb = 0,
            wb = 0,
            H, bb, eb, Eb, w, U, z, Tb = new rc,
            Z, Lb = [];
        P = f.$AutoPlay;
        o.Jb = fc;
        jc();
        a.C(q, "jssor-slider", c);
        a.J(v, a.J(v) || 0);
        a.z(v, "absolute");
        hb = a.X(v, c);
        a.Pb(hb, v);
        if (db) {
            dc = db.$ShowLink;
            rb = db.$Class;
            ub = u == 1 && r > 1 && rb && (!a.Jd() || a.sd() >= 8)
        }
        fb = ub || u >= r || !(D & 1) ? 0 : f.$Align;
        Y = (u > 1 || fb ? gb : -1) & f.$DragOrientation;
        var xb = v,
            C = [],
            A, N, Fb = a.Pg(),
            jb = Fb.Rg,
            G, pb, Kb, sb;
        Fb.Bd && a.W(xb, Fb.Bd, ([j, "pan-y", "pan-x", "none"])[Y] || "");
        U = new Cc;
        if (ub) A = new rb(Tb, K, J, db, jb);
        a.H(hb, U.Mb);
        a.ib(v, "hidden");
        N = Xb();
        a.W(N, "backgroundColor", "#000");
        a.Ab(N, 0);
        a.Pb(N, xb.firstChild, xb);
        for (var ob = 0; ob < T.length; ob++) {
            var zc = T[ob],
                Ac = new Bc(zc, ob);
            C.push(Ac)
        }
        a.S(cb);
        Eb = new Dc;
        z = new qc(Eb, U);
        if (Y) {
            a.e(v, "mousedown", Yb);
            a.e(v, "touchstart", uc);
            a.e(v, "dragstart", Ib);
            a.e(v, "selectstart", Ib);
            a.e(e, "mouseup", mb);
            a.e(e, "touchend", mb);
            a.e(e, "touchcancel", mb);
            a.e(g, "blur", mb)
        }
        E &= jb ? 10 : 5;
        if (Jb && qb) {
            Qb = new qb.$Class(Jb, qb, X(), ib());
            S.push(Qb)
        }
        if (W && cc && ac) {
            W.$Loop = D;
            W.$Cols = u;
            Sb = new W.$Class(cc, ac, W, X(), ib());
            S.push(Sb)
        }
        if (Hb && ab) {
            ab.$StartIndex = f.$StartIndex;
            Ob = new ab.$Class(Hb, ab);
            S.push(Ob)
        }
        a.c(S, function(a) {
            a.Gc(r, C, cb);
            a.$On(n.fc, lc)
        });
        a.W(q, "visibility", "visible");
        Gb(X());
        a.e(v, "click", kc);
        a.e(q, "mouseout", a.Ib(ic, q));
        a.e(q, "mouseover", a.Ib(hc, q));
        zb();
        f.$ArrowKeyNavigation && a.e(e, "keydown", function(a) {
            if (a.keyCode == 37) lb(-f.$ArrowKeyNavigation);
            else a.keyCode == 39 && lb(f.$ArrowKeyNavigation)
        });
        var kb = f.$StartIndex;
        if (!(D & 1)) kb = b.max(0, b.min(kb, r - u));
        z.ic(kb, kb, 0)
    };
    h.$EVT_CLICK = 21;
    h.$EVT_DRAG_START = 22;
    h.$EVT_DRAG_END = 23;
    h.$EVT_SWIPE_START = 24;
    h.$EVT_SWIPE_END = 25;
    h.$EVT_LOAD_START = 26;
    h.$EVT_LOAD_END = 27;
    h.De = 28;
    h.$EVT_POSITION_CHANGE = 202;
    h.$EVT_PARK = 203;
    h.$EVT_SLIDESHOW_START = 206;
    h.$EVT_SLIDESHOW_END = 207;
    h.$EVT_PROGRESS_CHANGE = 208;
    h.$EVT_STATE_CHANGE = 209;
    var n = {
        fc: 1
    };
    g.$JssorBulletNavigator$ = function(e, C) {
        var f = this;
        m.call(f);
        e = a.qb(e);
        var s, A, z, r, l = 0,
            d, o, k, w, x, h, g, q, p, B = [],
            y = [];

        function v(a) {
            a != -1 && y[a].jd(a == l)
        }

        function t(a) {
            f.n(n.fc, a * o)
        }
        f.$Elmt = e;
        f.Mc = function(a) {
            if (a != r) {
                var d = l,
                    c = b.floor(a / o);
                l = c;
                r = a;
                v(d);
                v(c)
            }
        };
        f.Jc = function(b) {
            a.A(e, b)
        };
        var u;
        f.Gc = function(E) {
            if (!u) {
                s = b.ceil(E / o);
                l = 0;
                var n = q + w,
                    r = p + x,
                    m = b.ceil(s / k) - 1;
                A = q + n * (!h ? m : k - 1);
                z = p + r * (h ? m : k - 1);
                a.l(e, A);
                a.m(e, z);
                for (var f = 0; f < s; f++) {
                    var C = a.Cg();
                    a.ug(C, f + 1);
                    var i = a.Xc(g, "numbertemplate", C, c);
                    a.z(i, "absolute");
                    var v = f % (m + 1);
                    a.E(i, !h ? n * v : f % k * n);
                    a.G(i, h ? r * v : b.floor(f / (m + 1)) * r);
                    a.H(e, i);
                    B[f] = i;
                    d.$ActionMode & 1 && a.e(i, "click", a.K(j, t, f));
                    d.$ActionMode & 2 && a.e(i, "mouseover", a.Ib(a.K(j, t, f), i));
                    y[f] = a.ac(i)
                }
                u = c
            }
        };
        f.Jb = d = a.p({
            $SpacingX: 10,
            $SpacingY: 10,
            $Orientation: 1,
            $ActionMode: 1
        }, C);
        g = a.D(e, "prototype");
        q = a.l(g);
        p = a.m(g);
        a.Hb(g, e);
        o = d.$Steps || 1;
        k = d.$Lanes || 1;
        w = d.$SpacingX;
        x = d.$SpacingY;
        h = d.$Orientation - 1;
        d.$Scale == i && a.C(e, "noscale", c);
        d.$AutoCenter && a.C(e, "autocenter", d.$AutoCenter)
    };
    g.$JssorArrowNavigator$ = function(b, g, h) {
        var d = this;
        m.call(d);
        var r, q, e, f, k;
        a.l(b);
        a.m(b);

        function l(a) {
            d.n(n.fc, a, c)
        }

        function p(c) {
            a.A(b, c || !h.$Loop && e == 0);
            a.A(g, c || !h.$Loop && e >= q - h.$Cols);
            r = c
        }
        d.Mc = function(b, a, c) {
            if (c) e = a;
            else {
                e = b;
                p(r)
            }
        };
        d.Jc = p;
        var o;
        d.Gc = function(d) {
            q = d;
            e = 0;
            if (!o) {
                a.e(b, "click", a.K(j, l, -k));
                a.e(g, "click", a.K(j, l, k));
                a.ac(b);
                a.ac(g);
                o = c
            }
        };
        d.Jb = f = a.p({
            $Steps: 1
        }, h);
        k = f.$Steps;
        if (f.$Scale == i) {
            a.C(b, "noscale", c);
            a.C(g, "noscale", c)
        }
        if (f.$AutoCenter) {
            a.C(b, "autocenter", f.$AutoCenter);
            a.C(g, "autocenter", f.$AutoCenter)
        }
    };
    g.$JssorThumbnailNavigator$ = function(g, C) {
        var l = this,
            z, q, d, w = [],
            A, y, e, r, s, v, u, p, t, f, o;
        m.call(l);
        g = a.qb(g);

        function B(m, f) {
            var g = this,
                b, k, i;

            function p() {
                k.jd(q == f)
            }

            function h(d) {
                if (d || !t.$LastDragSucceded()) {
                    var a = e - f % e,
                        b = t.Ed((f + a) / e - 1),
                        c = b * e + e - a;
                    l.n(n.fc, c)
                }
            }
            g.nb = f;
            g.bd = p;
            i = m.Ee || m.cc || a.mb();
            g.Mb = b = a.Xc(o, "thumbnailtemplate", i, c);
            k = a.ac(b);
            d.$ActionMode & 1 && a.e(b, "click", a.K(j, h, 0));
            d.$ActionMode & 2 && a.e(b, "mouseover", a.Ib(a.K(j, h, 1), b))
        }
        l.Mc = function(c, d, f) {
            var a = q;
            q = c;
            a != -1 && w[a].bd();
            w[c].bd();
            !f && t.$PlayTo(t.Ed(b.floor(d / e)))
        };
        l.Jc = function(b) {
            a.A(g, b)
        };
        var x;
        l.Gc = function(F, C) {
            if (!x) {
                z = F;
                b.ceil(z / e);
                q = -1;
                p = b.min(p, C.length);
                var j = d.$Orientation & 1,
                    m = v + (v + r) * (e - 1) * (1 - j),
                    l = u + (u + s) * (e - 1) * j,
                    o = m + (m + r) * (p - 1) * j,
                    n = l + (l + s) * (p - 1) * (1 - j);
                a.z(f, "absolute");
                a.ib(f, "hidden");
                d.$AutoCenter & 1 && a.E(f, (A - o) / 2);
                d.$AutoCenter & 2 && a.G(f, (y - n) / 2);
                a.l(f, o);
                a.m(f, n);
                var k = [];
                a.c(C, function(l, g) {
                    var h = new B(l, g),
                        d = h.Mb,
                        c = b.floor(g / e),
                        i = g % e;
                    a.E(d, (v + r) * i * (1 - j));
                    a.G(d, (u + s) * i * j);
                    if (!k[c]) {
                        k[c] = a.mb();
                        a.H(f, k[c])
                    }
                    a.H(k[c], d);
                    w.push(h)
                });
                var E = a.p({
                    $AutoPlay: i,
                    $NaviQuitDrag: i,
                    $SlideWidth: m,
                    $SlideHeight: l,
                    $SlideSpacing: r * j + s * (1 - j),
                    $MinDragOffsetToSlide: 12,
                    $SlideDuration: 200,
                    $PauseOnHover: 1,
                    $PlayOrientation: d.$Orientation,
                    $DragOrientation: d.$NoDrag || d.$DisableDrag ? 0 : d.$Orientation
                }, d);
                t = new h(g, E);
                x = c
            }
        };
        l.Jb = d = a.p({
            $SpacingX: 0,
            $SpacingY: 0,
            $Cols: 1,
            $Orientation: 1,
            $AutoCenter: 3,
            $ActionMode: 1
        }, C);
        if (d.$DisplayPieces != k) d.$Cols = d.$DisplayPieces;
        if (d.$Rows != k) d.$Lanes = d.$Rows;
        A = a.l(g);
        y = a.m(g);
        f = a.D(g, "slides", c);
        o = a.D(f, "prototype");
        v = a.l(o);
        u = a.m(o);
        a.Hb(o, f);
        e = d.$Lanes || 1;
        r = d.$SpacingX;
        s = d.$SpacingY;
        p = d.$Cols;
        d.$Scale == i && a.C(g, "noscale", c)
    };

    function p(e, d, c) {
        var b = this;
        l.call(b, 0, c);
        b.jb = a.kd;
        b.dc = 0;
        b.Yb = c
    }
    g.$JssorCaptionSlider$ = function(h, f, i) {
        var c = this;
        l.call(c, 0, 0);
        var e, d;

        function g(p, h, f) {
            var c = this,
                g, n = f ? h.$PlayInMode : h.$PlayOutMode,
                e = h.$Transitions,
                o = {
                    ab: "t",
                    $Delay: "d",
                    $Duration: "du",
                    x: "x",
                    y: "y",
                    $Rotate: "r",
                    $Zoom: "z",
                    $Opacity: "f",
                    Gb: "b"
                },
                d = {
                    kb: function(b, a) {
                        if (!isNaN(a.sb)) b = a.sb;
                        else b *= a.Kf;
                        return b
                    },
                    $Opacity: function(b, a) {
                        return this.kb(b - 1, a)
                    }
                };
            d.$Zoom = d.$Opacity;
            l.call(c, 0, 0);

            function j(r, m) {
                var l = [],
                    i, k = [],
                    c = [];

                function h(c, d) {
                    var b = {};
                    a.c(o, function(g, h) {
                        var e = a.j(c, g + (d || ""));
                        if (e) {
                            var f = {};
                            if (g == "t") f.sb = e;
                            else if (e.indexOf("%") + 1) f.Kf = a.Nc(e) / 100;
                            else f.sb = a.Nc(e);
                            b[h] = f
                        }
                    });
                    return b
                }

                function p() {
                    return e[b.floor(b.random() * e.length)]
                }

                function g(f) {
                    var h;
                    if (f == "*") h = p();
                    else if (f) {
                        var d = e[a.Kb(f)] || e[f];
                        if (a.uc(d)) {
                            if (f != i) {
                                i = f;
                                c[f] = 0;
                                k[f] = d[b.floor(b.random() * d.length)]
                            } else c[f]++;
                            d = k[f];
                            if (a.uc(d)) {
                                d = d.length && d[c[f] % d.length];
                                if (a.uc(d)) d = d[b.floor(b.random() * d.length)]
                            }
                        }
                        h = d;
                        if (a.ud(h)) h = g(h)
                    }
                    return h
                }
                var q = a.O(r);
                a.c(q, function(b) {
                    var c = [];
                    c.$Elmt = b;
                    var e = a.j(b, "u") == "caption";
                    a.c(f ? [0, 3] : [2], function(l, o) {
                        if (e) {
                            var k, f;
                            if (l != 2 || !a.j(b, "t3")) {
                                f = h(b, l);
                                if (l == 2 && !f.ab) {
                                    f.$Delay = f.$Delay || {
                                        sb: 0
                                    };
                                    f = a.p(h(b, 0), f)
                                }
                            }
                            if (f && f.ab) {
                                k = g(f.ab.sb);
                                if (k) {
                                    var i = a.p({
                                        $Delay: 0
                                    }, k);
                                    a.c(f, function(c, a) {
                                        var b = (d[a] || d.kb).apply(d, [i[a], f[a]]);
                                        if (!isNaN(b)) i[a] = b
                                    });
                                    if (!o)
                                        if (f.Gb) i.Gb = f.Gb.sb || 0;
                                        else if (n & 2) i.Gb = 0
                                }
                            }
                            c.push(i)
                        }
                        if (m % 2 && !o) c.O = j(b, m + 1)
                    });
                    l.push(c)
                });
                return l
            }

            function m(w, c, z) {
                var g = {
                        $Easing: c.$Easing,
                        $Round: c.$Round,
                        $During: c.$During,
                        $Reverse: f && !z
                    },
                    m = w,
                    r = a.Yc(w),
                    k = a.l(m),
                    j = a.m(m),
                    y = a.l(r),
                    x = a.m(r),
                    h = {},
                    e = {},
                    i = c.$ScaleClip || 1;
                if (c.$Opacity) e.$Opacity = 1 - c.$Opacity;
                g.$OriginalWidth = k;
                g.$OriginalHeight = j;
                if (c.$Zoom || c.$Rotate) {
                    e.$Zoom = (c.$Zoom || 2) - 2;
                    if (a.V() || a.tc()) e.$Zoom = b.min(e.$Zoom, 1);
                    h.$Zoom = 1;
                    var B = c.$Rotate || 0;
                    e.$Rotate = B * 360;
                    h.$Rotate = 0
                } else if (c.$Clip) {
                    var s = {
                            $Top: 0,
                            $Right: k,
                            $Bottom: j,
                            $Left: 0
                        },
                        v = a.p({}, s),
                        d = v.wb = {},
                        u = c.$Clip & 4,
                        p = c.$Clip & 8,
                        t = c.$Clip & 1,
                        q = c.$Clip & 2;
                    if (u && p) {
                        d.$Top = j / 2 * i;
                        d.$Bottom = -d.$Top
                    } else if (u) d.$Bottom = -j * i;
                    else if (p) d.$Top = j * i;
                    if (t && q) {
                        d.$Left = k / 2 * i;
                        d.$Right = -d.$Left
                    } else if (t) d.$Right = -k * i;
                    else if (q) d.$Left = k * i;
                    g.$Move = c.$Move;
                    e.$Clip = v;
                    h.$Clip = s
                }
                var n = 0,
                    o = 0;
                if (c.x) n -= y * c.x;
                if (c.y) o -= x * c.y;
                if (n || o || g.$Move) {
                    e.$Left = n;
                    e.$Top = o
                }
                var A = c.$Duration;
                h = a.p(h, a.xe(m, e));
                g.xc = a.Pc();
                return new l(c.$Delay, A, g, m, h, e)
            }

            function i(b, d) {
                a.c(d, function(d) {
                    var a, h = d.$Elmt,
                        e = d[0],
                        j = d[1];
                    if (e) {
                        a = m(h, e);
                        e.Gb == k && a.$Shift(b);
                        b = a.gb()
                    }
                    b = i(b, d.O);
                    if (j) {
                        var f = m(h, j, 1);
                        f.$Shift(b);
                        c.I(f);
                        g.I(f)
                    }
                    a && c.I(a)
                });
                return b
            }
            c.jb = function() {
                c.v(c.gb() * (f || 0));
                g.v(0)
            };
            g = new l(0, 0);
            i(0, n ? j(p, 1) : [])
        }
        c.jb = function() {
            d.jb();
            e.jb()
        };
        e = new g(h, f, 1);
        c.dc = e.gb();
        c.Yb = c.dc + i;
        d = new g(h, f);
        d.$Shift(c.Yb);
        c.I(d);
        c.I(e)
    };
    g.$JssorCaptionSlideo$ = function(n, g, m) {
        var b = this,
            o, h = {},
            i = g.$Transitions,
            d = new l(0, 0);
        l.call(b, 0, 0);

        function j(d, c) {
            var b = {};
            a.c(d, function(d, f) {
                var e = h[f];
                if (e) {
                    if (a.yg(d)) d = j(d, c || f == "e");
                    else if (c)
                        if (a.Zb(d)) d = o[d];
                    b[e] = d
                }
            });
            return b
        }

        function k(e, c) {
            var b = [],
                d = a.O(e);
            a.c(d, function(d) {
                var h = a.j(d, "u") == "caption";
                if (h) {
                    var e = a.j(d, "t"),
                        g = i[a.Kb(e)] || i[e],
                        f = {
                            $Elmt: d,
                            ab: g
                        };
                    b.push(f)
                }
                if (c < 5) b = b.concat(k(d, c + 1))
            });
            return b
        }

        function r(c, e, b) {
            a.c(e, function(f) {
                var e = j(f),
                    g = {
                        $Easing: a.Lc(e.$Easing),
                        xc: a.Pc(),
                        $OriginalWidth: b.N,
                        $OriginalHeight: b.P
                    },
                    h = new l(f.b, f.d, g, c, b, e);
                d.I(h);
                b = a.Je(b, e)
            });
            return b
        }

        function q(b) {
            a.c(b, function(e) {
                var b = e.$Elmt,
                    d = a.l(b),
                    c = a.m(b),
                    f = {
                        $Left: a.E(b),
                        $Top: a.G(b),
                        $Opacity: 1,
                        $ZIndex: a.J(b) || 0,
                        $Rotate: 0,
                        $RotateX: 0,
                        $RotateY: 0,
                        $ScaleX: 1,
                        $ScaleY: 1,
                        $TranslateX: 0,
                        $TranslateY: 0,
                        $TranslateZ: 0,
                        $SkewX: 0,
                        $SkewY: 0,
                        N: d,
                        P: c,
                        $Clip: {
                            $Top: 0,
                            $Right: d,
                            $Bottom: c,
                            $Left: 0
                        }
                    };
                r(b, e.ab, f)
            })
        }

        function t(g, f, h) {
            var e = g.b - f;
            if (e) {
                var a = new l(f, e);
                a.I(d, c);
                a.$Shift(h);
                b.I(a)
            }
            b.ye(g.d);
            return e
        }

        function s(f) {
            var c = d.Fc(),
                e = 0;
            a.c(f, function(d, f) {
                d = a.p({
                    d: m
                }, d);
                t(d, c, e);
                c = d.b;
                e += d.d;
                if (!f || d.t == 2) {
                    b.dc = c;
                    b.Yb = c + d.d
                }
            })
        }
        b.jb = function() {
            b.v(-1, c)
        };
        o = [f.$Swing, f.$Linear, f.$InQuad, f.$OutQuad, f.$InOutQuad, f.$InCubic, f.$OutCubic, f.$InOutCubic, f.$InQuart, f.$OutQuart, f.$InOutQuart, f.$InQuint, f.$OutQuint, f.$InOutQuint, f.$InSine, f.$OutSine, f.$InOutSine, f.$InExpo, f.$OutExpo, f.$InOutExpo, f.$InCirc, f.$OutCirc, f.$InOutCirc, f.$InElastic, f.$OutElastic, f.$InOutElastic, f.$InBack, f.$OutBack, f.$InOutBack, f.$InBounce, f.$OutBounce, f.$InOutBounce, f.$GoBack, f.$InWave, f.$OutWave, f.$OutJump, f.$InJump];
        var u = {
            $Top: "y",
            $Left: "x",
            $Bottom: "m",
            $Right: "t",
            $Rotate: "r",
            $RotateX: "rX",
            $RotateY: "rY",
            $ScaleX: "sX",
            $ScaleY: "sY",
            $TranslateX: "tX",
            $TranslateY: "tY",
            $TranslateZ: "tZ",
            $SkewX: "kX",
            $SkewY: "kY",
            $Opacity: "o",
            $Easing: "e",
            $ZIndex: "i",
            $Clip: "c"
        };
        a.c(u, function(b, a) {
            h[b] = a
        });
        q(k(n, 1));
        d.v(-1);
        var p = g.$Breaks || [],
            e = [].concat(p[a.Kb(a.j(n, "b"))] || []);
        e.push({
            b: d.gb(),
            d: e.length ? 0 : m
        });
        s(e);
        b.v(-1)
    }
})(window, document, Math, null, true, false)