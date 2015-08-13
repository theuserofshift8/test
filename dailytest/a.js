!function (a, b) {
    function cy(a) {
        return f.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    function cu(a) {
        if (!cj[a]) {
            var b = c.body,
                d = f('<' + a + '>').appendTo(b),
                e = d.css('display');
            d.remove(),
            ('none' === e || '' === e) && (ck || (ck = c.createElement('iframe'), ck.frameBorder = ck.width = ck.height = 0), b.appendChild(ck), cl && ck.createElement || (cl = (ck.contentWindow || ck.contentDocument).document, cl.write((f.support.boxModel ? '<!doctype html>' : '') + '<html><body>'), cl.close()), d = cl.createElement(a), cl.body.appendChild(d), e = f.css(d, 'display'), b.removeChild(ck)),
                cj[a] = e
        }
        return cj[a]
    }
    function ct(a, b) {
        var c = {
        };
        return f.each(cp.concat.apply([], cp.slice(0, b)), function () {
            c[this] = a
        }),
            c
    }
    function cs() {
        cq = b
    }
    function cr() {
        return setTimeout(cs, 0),
            cq = f.now()
    }
    function ci() {
        try {
            return new a.ActiveXObject('Microsoft.XMLHTTP')
        } catch (b) {
        }
    }
    function ch() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    }
    function cb(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var g,
            h,
            j,
            l,
            m,
            n,
            o,
            p,
            d = a.dataTypes,
            e = {
            },
            i = d.length,
            k = d[0];
        for (g = 1; i > g; g++) {
            if (1 === g) for (h in a.converters) 'string' == typeof h && (e[h.toLowerCase()] = a.converters[h]);
            if (l = k, k = d[g], '*' === k) k = l;
            else if ('*' !== l && l !== k) {
                if (m = l + ' ' + k, n = e[m] || e['* ' + k], !n) {
                    p = b;
                    for (o in e) if (j = o.split(' '), (j[0] === l || '*' === j[0]) && (p = e[j[1] + ' ' + k])) {
                        o = e[o],
                            o === !0 ? n = p : p === !0 && (n = o);
                        break
                    }
                }
                !n && !p && f.error('No conversion from ' + m.replace(' ', ' to ')),
                n !== !0 && (c = n ? n(c)  : p(o(c)))
            }
        }
        return c
    }
    function ca(a, c, d) {
        var h,
            i,
            j,
            k,
            e = a.contents,
            f = a.dataTypes,
            g = a.responseFields;
        for (i in g) i in d && (c[g[i]] = d[i]);
        for (; '*' === f[0]; ) f.shift(),
        h === b && (h = a.mimeType || c.getResponseHeader('content-type'));
        if (h) for (i in e) if (e[i] && e[i].test(h)) {
            f.unshift(i);
            break
        }
        if (f[0] in d) j = f[0];
        else {
            for (i in d) {
                if (!f[0] || a.converters[i + ' ' + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        return j ? (j !== f[0] && f.unshift(j), d[j])  : void 0
    }
    function b_(a, b, c, d) {
        if (f.isArray(b)) f.each(b, function (b, e) {
            c || bD.test(a) ? d(a, e)  : b_(a + '[' + ('object' == typeof e ? b : '') + ']', e, c, d)
        });
        else if (c || 'object' !== f.type(b)) d(a, b);
        else for (var e in b) b_(a + '[' + e + ']', b[e], c, d)
    }
    function b$(a, c) {
        var d,
            e,
            g = f.ajaxSettings.flatOptions || {
                };
        for (d in c) c[d] !== b && ((g[d] ? a : e || (e = {
        })) [d] = c[d]);
        e && f.extend(!0, a, e)
    }
    function bZ(a, c, d, e, f, g) {
        f = f || c.dataTypes[0],
            g = g || {
                },
            g[f] = !0;
        for (var l, h = a[f], i = 0, j = h ? h.length : 0, k = a === bS; j > i && (k || !l); i++) l = h[i](c, d, e),
        'string' == typeof l && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = bZ(a, c, d, e, l, g)));
        return (k || !l) && !g['*'] && (l = bZ(a, c, d, e, '*', g)),
            l
    }
    function bY(a) {
        return function (b, c) {
            if ('string' != typeof b && (c = b, b = '*'), f.isFunction(c)) for (var h, i, j, d = b.toLowerCase().split(bO), e = 0, g = d.length; g > e; e++) h = d[e],
                j = /^\+/.test(h),
            j && (h = h.substr(1) || '*'),
                i = a[h] = a[h] || [],
                i[j ? 'unshift' : 'push'](c)
        }
    }
    function bB(a, b, c) {
        var d = 'width' === b ? a.offsetWidth : a.offsetHeight,
            e = 'width' === b ? 1 : 0,
            g = 4;
        if (d > 0) {
            if ('border' !== c) for (; g > e; e += 2) c || (d -= parseFloat(f.css(a, 'padding' + bx[e])) || 0),
                'margin' === c ? d += parseFloat(f.css(a, c + bx[e])) || 0 : d -= parseFloat(f.css(a, 'border' + bx[e] + 'Width')) || 0;
            return d + 'px'
        }
        if (d = by(a, b), (0 > d || null == d) && (d = a.style[b]), bt.test(d)) return d;
        if (d = parseFloat(d) || 0, c) for (; g > e; e += 2) d += parseFloat(f.css(a, 'padding' + bx[e])) || 0,
        'padding' !== c && (d += parseFloat(f.css(a, 'border' + bx[e] + 'Width')) || 0),
        'margin' === c && (d += parseFloat(f.css(a, c + bx[e])) || 0);
        return d + 'px'
    }
    function bo(a) {
        var b = c.createElement('div');
        return bh.appendChild(b),
            b.innerHTML = a.outerHTML,
            b.firstChild
    }
    function bn(a) {
        var b = (a.nodeName || '').toLowerCase();
        'input' === b ? bm(a)  : 'script' !== b && 'undefined' != typeof a.getElementsByTagName && f.grep(a.getElementsByTagName('input'), bm)
    }
    function bm(a) {
        ('checkbox' === a.type || 'radio' === a.type) && (a.defaultChecked = a.checked)
    }
    function bl(a) {
        return 'undefined' != typeof a.getElementsByTagName ? a.getElementsByTagName('*')  : 'undefined' != typeof a.querySelectorAll ? a.querySelectorAll('*')  : [
        ]
    }
    function bk(a, b) {
        var c;
        1 === b.nodeType && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), 'object' === c ? b.outerHTML = a.outerHTML : 'input' !== c || 'checkbox' !== a.type && 'radio' !== a.type ? 'option' === c ? b.selected = a.defaultSelected : 'input' === c || 'textarea' === c ? b.defaultValue = a.defaultValue : 'script' === c && b.text !== a.text && (b.text = a.text)  : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(f.expando), b.removeAttribute('_submit_attached'), b.removeAttribute('_change_attached'))
    }
    function bj(a, b) {
        if (1 === b.nodeType && f.hasData(a)) {
            var c,
                d,
                e,
                g = f._data(a),
                h = f._data(b, g),
                i = g.events;
            if (i) {
                delete h.handle,
                    h.events = {
                    };
                for (c in i) for (d = 0, e = i[c].length; e > d; d++) f.event.add(b, c, i[c][d])
            }
            h.data && (h.data = f.extend({
            }, h.data))
        }
    }
    function bi(a) {
        return f.nodeName(a, 'table') ? a.getElementsByTagName('tbody') [0] || a.appendChild(a.ownerDocument.createElement('tbody'))  : a
    }
    function U(a) {
        var b = V.split('|'),
            c = a.createDocumentFragment();
        if (c.createElement) for (; b.length; ) c.createElement(b.pop());
        return c
    }
    function T(a, b, c) {
        if (b = b || 0, f.isFunction(b)) return f.grep(a, function (a, d) {
            var e = !!b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return f.grep(a, function (a) {
            return a === b === c
        });
        if ('string' == typeof b) {
            var d = f.grep(a, function (a) {
                return 1 === a.nodeType
            });
            if (O.test(b)) return f.filter(b, d, !c);
            b = f.filter(b, d)
        }
        return f.grep(a, function (a) {
            return f.inArray(a, b) >= 0 === c
        })
    }
    function S(a) {
        return !a || !a.parentNode || 11 === a.parentNode.nodeType
    }
    function K() {
        return !0
    }
    function J() {
        return !1
    }
    function n(a, b, c) {
        var d = b + 'defer',
            e = b + 'queue',
            g = b + 'mark',
            h = f._data(a, d);
        !(!h || 'queue' !== c && f._data(a, e) || 'mark' !== c && f._data(a, g) || !setTimeout(function () {
            !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire())
        }, 0))
    }
    function m(a) {
        for (var b in a) if (('data' !== b || !f.isEmptyObject(a[b])) && 'toJSON' !== b) return !1;
        return !0
    }
    function l(a, c, d) {
        if (d === b && 1 === a.nodeType) {
            var e = 'data-' + c.replace(k, '-$1').toLowerCase();
            if (d = a.getAttribute(e), 'string' == typeof d) {
                try {
                    d = 'true' === d ? !0 : 'false' === d ? !1 : 'null' === d ? null : f.isNumeric(d) ? + d : j.test(d) ? f.parseJSON(d)  : d
                } catch (g) {
                }
                f.data(a, c, d)
            } else d = b
        }
        return d
    }
    function h(a) {
        var c,
            d,
            b = g[a] = {
            };
        for (a = a.split(/\s+/), c = 0, d = a.length; d > c; c++) b[a[c]] = !0;
        return b
    }
    var c = a.document,
        d = a.navigator,
        e = a.location,
        f = function () {
            function J() {
                if (!e.isReady) {
                    try {
                        c.documentElement.doScroll('left')
                    } catch (a) {
                        return void setTimeout(J, 1)
                    }
                    e.ready()
                }
            }
            var h,
                z,
                A,
                B,
                e = function (a, b) {
                    return new e.fn.init(a, b, h)
                },
                f = a.jQuery,
                g = a.$,
                i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                j = /\S/,
                k = /^\s+/,
                l = /\s+$/,
                m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                n = /^[\],:{}\s]*$/,
                o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                q = /(?:^|:|,)(?:\s*\[)+/g,
                r = /(webkit)[ \/]([\w.]+)/,
                s = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                t = /(msie) ([\w.]+)/,
                u = /(mozilla)(?:.*? rv:([\w.]+))?/,
                v = /-([a-z]|[0-9])/gi,
                w = /^-ms-/,
                x = function (a, b) {
                    return (b + '').toUpperCase()
                },
                y = d.userAgent,
                C = Object.prototype.toString,
                D = Object.prototype.hasOwnProperty,
                E = Array.prototype.push,
                F = Array.prototype.slice,
                G = String.prototype.trim,
                H = Array.prototype.indexOf,
                I = {
                };
            return e.fn = e.prototype = {
                constructor: e,
                init: function (a, d, f) {
                    var g,
                        h,
                        j,
                        k;
                    if (!a) return this;
                    if (a.nodeType) return this.context = this[0] = a,
                        this.length = 1,
                        this;
                    if ('body' === a && !d && c.body) return this.context = c,
                        this[0] = c.body,
                        this.selector = a,
                        this.length = 1,
                        this;
                    if ('string' == typeof a) {
                        if (g = '<' !== a.charAt(0) || '>' !== a.charAt(a.length - 1) || a.length < 3 ? i.exec(a)  : [
                                null,
                                a,
                                null
                            ], g && (g[1] || !d)) {
                            if (g[1]) return d = d instanceof e ? d[0] : d,
                                k = d ? d.ownerDocument || d : c,
                                j = m.exec(a),
                                j ? e.isPlainObject(d) ? (a = [
                                    c.createElement(j[1])
                                ], e.fn.attr.call(a, d, !0))  : a = [
                                    k.createElement(j[1])
                                ] : (j = e.buildFragment([g[1]], [
                                    k
                                ]), a = (j.cacheable ? e.clone(j.fragment)  : j.fragment).childNodes),
                                e.merge(this, a);
                            if (h = c.getElementById(g[2]), h && h.parentNode) {
                                if (h.id !== g[2]) return f.find(a);
                                this.length = 1,
                                    this[0] = h
                            }
                            return this.context = c,
                                this.selector = a,
                                this
                        }
                        return !d || d.jquery ? (d || f).find(a)  : this.constructor(d).find(a)
                    }
                    return e.isFunction(a) ? f.ready(a)  : (a.selector !== b && (this.selector = a.selector, this.context = a.context), e.makeArray(a, this))
                },
                selector: '',
                jquery: '1.7.2',
                length: 0,
                size: function () {
                    return this.length
                },
                toArray: function () {
                    return F.call(this, 0)
                },
                get: function (a) {
                    return null == a ? this.toArray()  : 0 > a ? this[this.length + a] : this[a]
                },
                pushStack: function (a, b, c) {
                    var d = this.constructor();
                    return e.isArray(a) ? E.apply(d, a)  : e.merge(d, a),
                        d.prevObject = this,
                        d.context = this.context,
                        'find' === b ? d.selector = this.selector + (this.selector ? ' ' : '') + c : b && (d.selector = this.selector + '.' + b + '(' + c + ')'),
                        d
                },
                each: function (a, b) {
                    return e.each(this, a, b)
                },
                ready: function (a) {
                    return e.bindReady(),
                        A.add(a),
                        this
                },
                eq: function (a) {
                    return a = + a,
                        - 1 === a ? this.slice(a)  : this.slice(a, a + 1)
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq( - 1)
                },
                slice: function () {
                    return this.pushStack(F.apply(this, arguments), 'slice', F.call(arguments).join(','))
                },
                map: function (a) {
                    return this.pushStack(e.map(this, function (b, c) {
                        return a.call(b, c, b)
                    }))
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: E,
                sort: [
                ].sort,
                splice: [
                ].splice
            },
                e.fn.init.prototype = e.fn,
                e.extend = e.fn.extend = function () {
                    var a,
                        c,
                        d,
                        f,
                        g,
                        h,
                        i = arguments[0] || {
                            },
                        j = 1,
                        k = arguments.length,
                        l = !1;
                    for ('boolean' == typeof i && (l = i, i = arguments[1] || {
                        }, j = 2), 'object' != typeof i && !e.isFunction(i) && (i = {
                    }), k === j && (i = this, --j); k > j; j++) if (null != (a = arguments[j])) for (c in a) d = i[c],
                        f = a[c],
                    i !== f && (l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : [
                    ])  : h = d && e.isPlainObject(d) ? d : {
                    }, i[c] = e.extend(l, h, f))  : f !== b && (i[c] = f));
                    return i
                },
                e.extend({
                    noConflict: function (b) {
                        return a.$ === e && (a.$ = g),
                        b && a.jQuery === e && (a.jQuery = f),
                            e
                    },
                    isReady: !1,
                    readyWait: 1,
                    holdReady: function (a) {
                        a ? e.readyWait++ : e.ready(!0)
                    },
                    ready: function (a) {
                        if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                            if (!c.body) return setTimeout(e.ready, 1);
                            if (e.isReady = !0, a !== !0 && --e.readyWait > 0) return;
                            A.fireWith(c, [
                                e
                            ]),
                            e.fn.trigger && e(c).trigger('ready').off('ready')
                        }
                    },
                    bindReady: function () {
                        if (!A) {
                            if (A = e.Callbacks('once memory'), 'complete' === c.readyState) return setTimeout(e.ready, 1);
                            if (c.addEventListener) c.addEventListener('DOMContentLoaded', B, !1),
                                a.addEventListener('load', e.ready, !1);
                            else if (c.attachEvent) {
                                c.attachEvent('onreadystatechange', B),
                                    a.attachEvent('onload', e.ready);
                                var b = !1;
                                try {
                                    b = null == a.frameElement
                                } catch (d) {
                                }
                                c.documentElement.doScroll && b && J()
                            }
                        }
                    },
                    isFunction: function (a) {
                        return 'function' === e.type(a)
                    },
                    isArray: Array.isArray || function (a) {
                        return 'array' === e.type(a)
                    },
                    isWindow: function (a) {
                        return null != a && a == a.window
                    },
                    isNumeric: function (a) {
                        return !isNaN(parseFloat(a)) && isFinite(a)
                    },
                    type: function (a) {
                        return null == a ? String(a)  : I[C.call(a)] || 'object'
                    },
                    isPlainObject: function (a) {
                        if (!a || 'object' !== e.type(a) || a.nodeType || e.isWindow(a)) return !1;
                        try {
                            if (a.constructor && !D.call(a, 'constructor') && !D.call(a.constructor.prototype, 'isPrototypeOf')) return !1
                        } catch (c) {
                            return !1
                        }
                        var d;
                        for (d in a);
                        return d === b || D.call(a, d)
                    },
                    isEmptyObject: function (a) {
                        for (var b in a) return !1;
                        return !0
                    },
                    error: function (a) {
                        throw new Error(a)
                    },
                    parseJSON: function (b) {
                        return 'string' == typeof b && b ? (b = e.trim(b), a.JSON && a.JSON.parse ? a.JSON.parse(b)  : n.test(b.replace(o, '@').replace(p, ']').replace(q, '')) ? new Function('return ' + b) ()  : void e.error('Invalid JSON: ' + b))  : null
                    },
                    parseXML: function (c) {
                        if ('string' != typeof c || !c) return null;
                        var d,
                            f;
                        try {
                            a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, 'text/xml'))  : (d = new ActiveXObject('Microsoft.XMLDOM'), d.async = 'false', d.loadXML(c))
                        } catch (g) {
                            d = b
                        }
                        return (!d || !d.documentElement || d.getElementsByTagName('parsererror').length) && e.error('Invalid XML: ' + c),
                            d
                    },
                    noop: function () {
                    },
                    globalEval: function (b) {
                        b && j.test(b) && (a.execScript || function (b) {
                            a.eval.call(a, b)
                        }) (b)
                    },
                    camelCase: function (a) {
                        return a.replace(w, 'ms-').replace(v, x)
                    },
                    nodeName: function (a, b) {
                        return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                    },
                    each: function (a, c, d) {
                        var f,
                            g = 0,
                            h = a.length,
                            i = h === b || e.isFunction(a);
                        if (d) if (i) {
                            for (f in a) if (c.apply(a[f], d) === !1) break
                        } else for (; h > g && c.apply(a[g++], d) !== !1; );
                        else if (i) {
                            for (f in a) if (c.call(a[f], f, a[f]) === !1) break
                        } else for (; h > g && c.call(a[g], g, a[g++]) !== !1; );
                        return a
                    },
                    trim: G ? function (a) {
                        return null == a ? '' : G.call(a)
                    }
                        : function (a) {
                        return null == a ? '' : (a + '').replace(k, '').replace(l, '')
                    },
                    makeArray: function (a, b) {
                        var c = b || [];
                        if (null != a) {
                            var d = e.type(a);
                            null == a.length || 'string' === d || 'function' === d || 'regexp' === d || e.isWindow(a) ? E.call(c, a)  : e.merge(c, a)
                        }
                        return c
                    },
                    inArray: function (a, b, c) {
                        var d;
                        if (b) {
                            if (H) return H.call(b, a, c);
                            for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c)  : c : 0; d > c; c++) if (c in b && b[c] === a) return c
                        }
                        return - 1
                    },
                    merge: function (a, c) {
                        var d = a.length,
                            e = 0;
                        if ('number' == typeof c.length) for (var f = c.length; f > e; e++) a[d++] = c[e];
                        else for (; c[e] !== b; ) a[d++] = c[e++];
                        return a.length = d,
                            a
                    },
                    grep: function (a, b, c) {
                        var e,
                            d = [
                            ];
                        c = !!c;
                        for (var f = 0, g = a.length; g > f; f++) e = !!b(a[f], f),
                        c !== e && d.push(a[f]);
                        return d
                    },
                    map: function (a, c, d) {
                        var f,
                            g,
                            h = [
                            ],
                            i = 0,
                            j = a.length,
                            k = a instanceof e || j !== b && 'number' == typeof j && (j > 0 && a[0] && a[j - 1] || 0 === j || e.isArray(a));
                        if (k) for (; j > i; i++) f = c(a[i], i, d),
                        null != f && (h[h.length] = f);
                        else for (g in a) f = c(a[g], g, d),
                        null != f && (h[h.length] = f);
                        return h.concat.apply([], h)
                    },
                    guid: 1,
                    proxy: function (a, c) {
                        if ('string' == typeof c) {
                            var d = a[c];
                            c = a,
                                a = d
                        }
                        if (!e.isFunction(a)) return b;
                        var f = F.call(arguments, 2),
                            g = function () {
                                return a.apply(c, f.concat(F.call(arguments)))
                            };
                        return g.guid = a.guid = a.guid || g.guid || e.guid++,
                            g
                    },
                    access: function (a, c, d, f, g, h, i) {
                        var j,
                            k = null == d,
                            l = 0,
                            m = a.length;
                        if (d && 'object' == typeof d) {
                            for (l in d) e.access(a, c, l, d[l], 1, h, f);
                            g = 1
                        } else if (f !== b) {
                            if (j = i === b && e.isFunction(f), k && (j ? (j = c, c = function (a, b, c) {
                                    return j.call(e(a), c)
                                })  : (c.call(a, f), c = null)), c) for (; m > l; l++) c(a[l], d, j ? f.call(a[l], l, c(a[l], d))  : f, i);
                            g = 1
                        }
                        return g ? a : k ? c.call(a)  : m ? c(a[0], d)  : h
                    },
                    now: function () {
                        return (new Date).getTime()
                    },
                    uaMatch: function (a) {
                        a = a.toLowerCase();
                        var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf('compatible') < 0 && u.exec(a) || [];
                        return {
                            browser: b[1] || '',
                            version: b[2] || '0'
                        }
                    },
                    sub: function () {
                        function a(b, c) {
                            return new a.fn.init(b, c)
                        }
                        e.extend(!0, a, this),
                            a.superclass = this,
                            a.fn = a.prototype = this(),
                            a.fn.constructor = a,
                            a.sub = this.sub,
                            a.fn.init = function (d, f) {
                                return f && f instanceof e && !(f instanceof a) && (f = a(f)),
                                    e.fn.init.call(this, d, f, b)
                            },
                            a.fn.init.prototype = a.fn;
                        var b = a(c);
                        return a
                    },
                    browser: {
                    }
                }),
                e.each('Boolean Number String Function Array Date RegExp Object'.split(' '), function (a, b) {
                    I['[object ' + b + ']'] = b.toLowerCase()
                }),
                z = e.uaMatch(y),
            z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version),
            e.browser.webkit && (e.browser.safari = !0),
            j.test(' ') && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/),
                h = e(c),
                c.addEventListener ? B = function () {
                    c.removeEventListener('DOMContentLoaded', B, !1),
                        e.ready()
                }
                    : c.attachEvent && (B = function () {
                    'complete' === c.readyState && (c.detachEvent('onreadystatechange', B), e.ready())
                }),
                e
        }(),
        g = {
        };
    f.Callbacks = function (a) {
        a = a ? g[a] || h(a)  : {
        };
        var e,
            i,
            j,
            k,
            l,
            m,
            c = [
            ],
            d = [
            ],
            n = function (b) {
                var d,
                    e,
                    g,
                    h;
                for (d = 0, e = b.length; e > d; d++) g = b[d],
                    h = f.type(g),
                    'array' === h ? n(g)  : 'function' === h && (!a.unique || !p.has(g)) && c.push(g)
            },
            o = function (b, f) {
                for (f = f || [], e = !a.memory || [b,
                        f], i = !0, j = !0, m = k || 0, k = 0, l = c.length; c && l > m; m++) if (c[m].apply(b, f) === !1 && a.stopOnFalse) {
                    e = !0;
                    break
                }
                j = !1,
                c && (a.once ? e === !0 ? p.disable()  : c = [
                ] : d && d.length && (e = d.shift(), p.fireWith(e[0], e[1])))
            },
            p = {
                add: function () {
                    if (c) {
                        var a = c.length;
                        n(arguments),
                            j ? l = c.length : e && e !== !0 && (k = a, o(e[0], e[1]))
                    }
                    return this
                },
                remove: function () {
                    if (c) for (var b = arguments, d = 0, e = b.length; e > d; d++) for (var f = 0; f < c.length && (b[d] !== c[f] || (j && l >= f && (l--, m >= f && m--), c.splice(f--, 1), !a.unique)); f++);
                    return this
                },
                has: function (a) {
                    if (c) for (var b = 0, d = c.length; d > b; b++) if (a === c[b]) return !0;
                    return !1
                },
                empty: function () {
                    return c = [
                    ],
                        this
                },
                disable: function () {
                    return c = d = e = b,
                        this
                },
                disabled: function () {
                    return !c
                },
                lock: function () {
                    return d = b,
                    (!e || e === !0) && p.disable(),
                        this
                },
                locked: function () {
                    return !d
                },
                fireWith: function (b, c) {
                    return d && (j ? a.once || d.push([b,
                        c])  : (!a.once || !e) && o(b, c)),
                        this
                },
                fire: function () {
                    return p.fireWith(this, arguments),
                        this
                },
                fired: function () {
                    return !!i
                }
            };
        return p
    };
    var i = [
    ].slice;
    f.extend({
        Deferred: function (a) {
            var j,
                b = f.Callbacks('once memory'),
                c = f.Callbacks('once memory'),
                d = f.Callbacks('memory'),
                e = 'pending',
                g = {
                    resolve: b,
                    reject: c,
                    notify: d
                },
                h = {
                    done: b.add,
                    fail: c.add,
                    progress: d.add,
                    state: function () {
                        return e
                    },
                    isResolved: b.fired,
                    isRejected: c.fired,
                    then: function (a, b, c) {
                        return i.done(a).fail(b).progress(c),
                            this
                    },
                    always: function () {
                        return i.done.apply(i, arguments).fail.apply(i, arguments),
                            this
                    },
                    pipe: function (a, b, c) {
                        return f.Deferred(function (d) {
                            f.each({
                                done: [
                                    a,
                                    'resolve'
                                ],
                                fail: [
                                    b,
                                    'reject'
                                ],
                                progress: [
                                    c,
                                    'notify'
                                ]
                            }, function (a, b) {
                                var g,
                                    c = b[0],
                                    e = b[1];
                                i[a](f.isFunction(c) ? function () {
                                    g = c.apply(this, arguments),
                                        g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify)  : d[e + 'With'](this === i ? d : this, [
                                            g
                                        ])
                                }
                                    : d[e])
                            })
                        }).promise()
                    },
                    promise: function (a) {
                        if (null == a) a = h;
                        else for (var b in h) a[b] = h[b];
                        return a
                    }
                },
                i = h.promise({
                });
            for (j in g) i[j] = g[j].fire,
                i[j + 'With'] = g[j].fireWith;
            return i.done(function () {
                e = 'resolved'
            }, c.disable, d.lock).fail(function () {
                e = 'rejected'
            }, b.disable, d.lock),
            a && a.call(i, i),
                i
        },
        when: function (a) {
            function m(a) {
                return function (b) {
                    e[a] = arguments.length > 1 ? i.call(arguments, 0)  : b,
                        j.notifyWith(k, e)
                }
            }
            function l(a) {
                return function (c) {
                    b[a] = arguments.length > 1 ? i.call(arguments, 0)  : c,
                    --g || j.resolveWith(j, b)
                }
            }
            var b = i.call(arguments, 0),
                c = 0,
                d = b.length,
                e = Array(d),
                g = d,
                j = 1 >= d && a && f.isFunction(a.promise) ? a : f.Deferred(),
                k = j.promise();
            if (d > 1) {
                for (; d > c; c++) b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c))  : --g;
                g || j.resolveWith(j, b)
            } else j !== a && j.resolveWith(j, d ? [
                a
            ] : [
            ]);
            return k
        }
    }),
        f.support = function () {
            {
                var b,
                    d,
                    e,
                    g,
                    h,
                    i,
                    j,
                    k,
                    m,
                    n,
                    o,
                    p = c.createElement('div');
                c.documentElement
            }
            if (p.setAttribute('className', 't'), p.innerHTML = '   <link/><table></table><a href=\'/a\' style=\'top:1px;float:left;opacity:.55;\'>a</a><input type=\'checkbox\'/>', d = p.getElementsByTagName('*'), e = p.getElementsByTagName('a') [0], !d || !d.length || !e) return {
            };
            g = c.createElement('select'),
                h = g.appendChild(c.createElement('option')),
                i = p.getElementsByTagName('input') [0],
                b = {
                    leadingWhitespace: 3 === p.firstChild.nodeType,
                    tbody: !p.getElementsByTagName('tbody').length,
                    htmlSerialize: !!p.getElementsByTagName('link').length,
                    style: /top/.test(e.getAttribute('style')),
                    hrefNormalized: '/a' === e.getAttribute('href'),
                    opacity: /^0.55/.test(e.style.opacity),
                    cssFloat: !!e.style.cssFloat,
                    checkOn: 'on' === i.value,
                    optSelected: h.selected,
                    getSetAttribute: 't' !== p.className,
                    enctype: !!c.createElement('form').enctype,
                    html5Clone: '<:nav></:nav>' !== c.createElement('nav').cloneNode(!0).outerHTML,
                    submitBubbles: !0,
                    changeBubbles: !0,
                    focusinBubbles: !1,
                    deleteExpando: !0,
                    noCloneEvent: !0,
                    inlineBlockNeedsLayout: !1,
                    shrinkWrapBlocks: !1,
                    reliableMarginRight: !0,
                    pixelMargin: !0
                },
                f.boxModel = b.boxModel = 'CSS1Compat' === c.compatMode,
                i.checked = !0,
                b.noCloneChecked = i.cloneNode(!0).checked,
                g.disabled = !0,
                b.optDisabled = !h.disabled;
            try {
                delete p.test
            } catch (r) {
                b.deleteExpando = !1
            }
            if (!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent('onclick', function () {
                    b.noCloneEvent = !1
                }), p.cloneNode(!0).fireEvent('onclick')), i = c.createElement('input'), i.value = 't', i.setAttribute('type', 'radio'), b.radioValue = 't' === i.value, i.setAttribute('checked', 'checked'), i.setAttribute('name', 't'), p.appendChild(i), j = c.createDocumentFragment(), j.appendChild(p.lastChild), b.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = i.checked, j.removeChild(i), j.appendChild(p), p.attachEvent) for (n in {
                submit: 1,
                change: 1,
                focusin: 1
            }) m = 'on' + n,
                o = m in p,
            o || (p.setAttribute(m, 'return;'), o = 'function' == typeof p[m]),
                b[n + 'Bubbles'] = o;
            return j.removeChild(p),
                j = g = h = p = i = null,
                f(function () {
                    var d,
                        e,
                        g,
                        i,
                        j,
                        l,
                        m,
                        n,
                        q,
                        r,
                        s,
                        t,
                        u = c.getElementsByTagName('body') [0];
                    !u || (m = 1, t = 'padding:0;margin:0;border:', r = 'position:absolute;top:0;left:0;width:1px;height:1px;', s = t + '0;visibility:hidden;', n = 'style=\'' + r + t + '5px solid #000;', q = '<div ' + n + 'display:block;\'><div style=\'' + t + '0;display:block;overflow:hidden;\'></div></div><table ' + n + '\' cellpadding=\'0\' cellspacing=\'0\'><tr><td></td></tr></table>', d = c.createElement('div'), d.style.cssText = s + 'width:0;height:0;position:static;top:0;margin-top:' + m + 'px', u.insertBefore(d, u.firstChild), p = c.createElement('div'), d.appendChild(p), p.innerHTML = '<table><tr><td style=\'' + t + '0;display:none\'></td><td>t</td></tr></table>', k = p.getElementsByTagName('td'), o = 0 === k[0].offsetHeight, k[0].style.display = '', k[1].style.display = 'none', b.reliableHiddenOffsets = o && 0 === k[0].offsetHeight, a.getComputedStyle && (p.innerHTML = '', l = c.createElement('div'), l.style.width = '0', l.style.marginRight = '0', p.style.width = '2px', p.appendChild(l), b.reliableMarginRight = 0 === (parseInt((a.getComputedStyle(l, null) || {
                            marginRight: 0
                        }).marginRight, 10) || 0)), 'undefined' != typeof p.style.zoom && (p.innerHTML = '', p.style.width = p.style.padding = '1px', p.style.border = 0, p.style.overflow = 'hidden', p.style.display = 'inline', p.style.zoom = 1, b.inlineBlockNeedsLayout = 3 === p.offsetWidth, p.style.display = 'block', p.style.overflow = 'visible', p.innerHTML = '<div style=\'width:5px;\'></div>', b.shrinkWrapBlocks = 3 !== p.offsetWidth), p.style.cssText = r + s, p.innerHTML = q, e = p.firstChild, g = e.firstChild, i = e.nextSibling.firstChild.firstChild, j = {
                        doesNotAddBorder: 5 !== g.offsetTop,
                        doesAddBorderForTableAndCells: 5 === i.offsetTop
                    }, g.style.position = 'fixed', g.style.top = '20px', j.fixedPosition = 20 === g.offsetTop || 15 === g.offsetTop, g.style.position = g.style.top = '', e.style.overflow = 'hidden', e.style.position = 'relative', j.subtractsBorderForOverflowNotVisible = - 5 === g.offsetTop, j.doesNotIncludeMarginInBodyOffset = u.offsetTop !== m, a.getComputedStyle && (p.style.marginTop = '1%', b.pixelMargin = '1%' !== (a.getComputedStyle(p, null) || {
                            marginTop: 0
                        }).marginTop), 'undefined' != typeof d.style.zoom && (d.style.zoom = 1), u.removeChild(d), l = p = d = null, f.extend(b, j))
                }),
                b
        }();
    var j = /^(?:\{.*\}|\[.*\])$/,
        k = /([A-Z])/g;
    f.extend({
        cache: {
        },
        uuid: 0,
        expando: 'jQuery' + (f.fn.jquery + Math.random()).replace(/\D/g, ''),
        noData: {
            embed: !0,
            object: 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',
            applet: !0
        },
        hasData: function (a) {
            return a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando],
            !!a && !m(a)
        },
        data: function (a, c, d, e) {
            if (f.acceptData(a)) {
                var g,
                    h,
                    i,
                    j = f.expando,
                    k = 'string' == typeof c,
                    l = a.nodeType,
                    m = l ? f.cache : a,
                    n = l ? a[j] : a[j] && j,
                    o = 'events' === c;
                if (!(n && m[n] && (o || e || m[n].data) || !k || d !== b)) return;
                return n || (l ? a[j] = n = ++f.uuid : n = j),
                m[n] || (m[n] = {
                }, l || (m[n].toJSON = f.noop)),
                ('object' == typeof c || 'function' == typeof c) && (e ? m[n] = f.extend(m[n], c)  : m[n].data = f.extend(m[n].data, c)),
                    g = h = m[n],
                e || (h.data || (h.data = {
                }), h = h.data),
                d !== b && (h[f.camelCase(c)] = d),
                    o && !h[c] ? g.events : (k ? (i = h[c], null == i && (i = h[f.camelCase(c)]))  : i = h, i)
            }
        },
        removeData: function (a, b, c) {
            if (f.acceptData(a)) {
                var d,
                    e,
                    g,
                    h = f.expando,
                    i = a.nodeType,
                    j = i ? f.cache : a,
                    k = i ? a[h] : h;
                if (!j[k]) return;
                if (b && (d = c ? j[k] : j[k].data)) {
                    f.isArray(b) || (b in d ? b = [
                        b
                    ] : (b = f.camelCase(b), b = b in d ? [
                        b
                    ] : b.split(' ')));
                    for (e = 0, g = b.length; g > e; e++) delete d[b[e]];
                    if (!(c ? m : f.isEmptyObject) (d)) return
                }
                if (!c && (delete j[k].data, !m(j[k]))) return;
                f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null,
                i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h)  : a[h] = null)
            }
        },
        _data: function (a, b, c) {
            return f.data(a, b, c, !0)
        },
        acceptData: function (a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b) return b !== !0 && a.getAttribute('classid') === b
            }
            return !0
        }
    }),
        f.fn.extend({
            data: function (a, c) {
                var d,
                    e,
                    g,
                    h,
                    i,
                    j = this[0],
                    k = 0,
                    m = null;
                if (a === b) {
                    if (this.length && (m = f.data(j), 1 === j.nodeType && !f._data(j, 'parsedAttrs'))) {
                        for (g = j.attributes, i = g.length; i > k; k++) h = g[k].name,
                        0 === h.indexOf('data-') && (h = f.camelCase(h.substring(5)), l(j, h, m[h]));
                        f._data(j, 'parsedAttrs', !0)
                    }
                    return m
                }
                return 'object' == typeof a ? this.each(function () {
                    f.data(this, a)
                })  : (d = a.split('.', 2), d[1] = d[1] ? '.' + d[1] : '', e = d[1] + '!', f.access(this, function (c) {
                    return c === b ? (m = this.triggerHandler('getData' + e, [
                        d[0]
                    ]), m === b && j && (m = f.data(j, a), m = l(j, a, m)), m === b && d[1] ? this.data(d[0])  : m)  : (d[1] = c, void this.each(function () {
                        var b = f(this);
                        b.triggerHandler('setData' + e, d),
                            f.data(this, a, c),
                            b.triggerHandler('changeData' + e, d)
                    }))
                }, null, c, arguments.length > 1, null, !1))
            },
            removeData: function (a) {
                return this.each(function () {
                    f.removeData(this, a)
                })
            }
        }),
        f.extend({
            _mark: function (a, b) {
                a && (b = (b || 'fx') + 'mark', f._data(a, b, (f._data(a, b) || 0) + 1))
            },
            _unmark: function (a, b, c) {
                if (a !== !0 && (c = b, b = a, a = !1), b) {
                    c = c || 'fx';
                    var d = c + 'mark',
                        e = a ? 0 : (f._data(b, d) || 1) - 1;
                    e ? f._data(b, d, e)  : (f.removeData(b, d, !0), n(b, c, 'mark'))
                }
            },
            queue: function (a, b, c) {
                var d;
                return a ? (b = (b || 'fx') + 'queue', d = f._data(a, b), c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c))  : d.push(c)), d || [])  : void 0
            },
            dequeue: function (a, b) {
                b = b || 'fx';
                var c = f.queue(a, b),
                    d = c.shift(),
                    e = {
                    };
                'inprogress' === d && (d = c.shift()),
                d && ('fx' === b && c.unshift('inprogress'), f._data(a, b + '.run', e), d.call(a, function () {
                    f.dequeue(a, b)
                }, e)),
                c.length || (f.removeData(a, b + 'queue ' + b + '.run', !0), n(a, b, 'queue'))
            }
        }),
        f.fn.extend({
            queue: function (a, c) {
                var d = 2;
                return 'string' != typeof a && (c = a, a = 'fx', d--),
                    arguments.length < d ? f.queue(this[0], a)  : c === b ? this : this.each(function () {
                        var b = f.queue(this, a, c);
                        'fx' === a && 'inprogress' !== b[0] && f.dequeue(this, a)
                    })
            },
            dequeue: function (a) {
                return this.each(function () {
                    f.dequeue(this, a)
                })
            },
            delay: function (a, b) {
                return a = f.fx ? f.fx.speeds[a] || a : a,
                    b = b || 'fx',
                    this.queue(b, function (b, c) {
                        var d = setTimeout(b, a);
                        c.stop = function () {
                            clearTimeout(d)
                        }
                    })
            },
            clearQueue: function (a) {
                return this.queue(a || 'fx', [
                ])
            },
            promise: function (a, c) {
                function m() {
                    --h || d.resolveWith(e, [
                        e
                    ])
                }
                'string' != typeof a && (c = a, a = b),
                    a = a || 'fx';
                for (var l, d = f.Deferred(), e = this, g = e.length, h = 1, i = a + 'defer', j = a + 'queue', k = a + 'mark'; g--; ) (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks('once memory'), !0)) && (h++, l.add(m));
                return m(),
                    d.promise(c)
            }
        });
    var w,
        x,
        y,
        o = /[\n\t\r]/g,
        p = /\s+/,
        q = /\r/g,
        r = /^(?:button|input)$/i,
        s = /^(?:button|input|object|select|textarea)$/i,
        t = /^a(?:rea)?$/i,
        u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        v = f.support.getSetAttribute;
    f.fn.extend({
        attr: function (a, b) {
            return f.access(this, f.attr, a, b, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                f.removeAttr(this, a)
            })
        },
        prop: function (a, b) {
            return f.access(this, f.prop, a, b, arguments.length > 1)
        },
        removeProp: function (a) {
            return a = f.propFix[a] || a,
                this.each(function () {
                    try {
                        this[a] = b,
                            delete this[a]
                    } catch (c) {
                    }
                })
        },
        addClass: function (a) {
            var b,
                c,
                d,
                e,
                g,
                h,
                i;
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).addClass(a.call(this, b, this.className))
            });
            if (a && 'string' == typeof a) for (b = a.split(p), c = 0, d = this.length; d > c; c++) if (e = this[c], 1 === e.nodeType) if (e.className || 1 !== b.length) {
                for (g = ' ' + e.className + ' ', h = 0, i = b.length; i > h; h++) ~g.indexOf(' ' + b[h] + ' ') || (g += b[h] + ' ');
                e.className = f.trim(g)
            } else e.className = a;
            return this
        },
        removeClass: function (a) {
            var c,
                d,
                e,
                g,
                h,
                i,
                j;
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).removeClass(a.call(this, b, this.className))
            });
            if (a && 'string' == typeof a || a === b) for (c = (a || '').split(p), d = 0, e = this.length; e > d; d++) if (g = this[d], 1 === g.nodeType && g.className) if (a) {
                for (h = (' ' + g.className + ' ').replace(o, ' '), i = 0, j = c.length; j > i; i++) h = h.replace(' ' + c[i] + ' ', ' ');
                g.className = f.trim(h)
            } else g.className = '';
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a,
                d = 'boolean' == typeof b;
            return this.each(f.isFunction(a) ? function (c) {
                f(this).toggleClass(a.call(this, c, this.className, b), b)
            }
                : function () {
                if ('string' === c) for (var e, g = 0, h = f(this), i = b, j = a.split(p); e = j[g++]; ) i = d ? i : !h.hasClass(e),
                    h[i ? 'addClass' : 'removeClass'](e);
                else ('undefined' === c || 'boolean' === c) && (this.className && f._data(this, '__className__', this.className), this.className = this.className || a === !1 ? '' : f._data(this, '__className__') || '')
            })
        },
        hasClass: function (a) {
            for (var b = ' ' + a + ' ', c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (' ' + this[c].className + ' ').replace(o, ' ').indexOf(b) > - 1) return !0;
            return !1
        },
        val: function (a) {
            var c,
                d,
                e,
                g = this[0];
            return arguments.length ? (e = f.isFunction(a), this.each(function (d) {
                var h,
                    g = f(this);
                1 === this.nodeType && (h = e ? a.call(this, d, g.val())  : a, null == h ? h = '' : 'number' == typeof h ? h += '' : f.isArray(h) && (h = f.map(h, function (a) {
                    return null == a ? '' : a + ''
                })), c = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()], c && 'set' in c && c.set(this, h, 'value') !== b || (this.value = h))
            }))  : g ? (c = f.valHooks[g.type] || f.valHooks[g.nodeName.toLowerCase()], c && 'get' in c && (d = c.get(g, 'value')) !== b ? d : (d = g.value, 'string' == typeof d ? d.replace(q, '')  : null == d ? '' : d))  : void 0
        }
    }),
        f.extend({
            valHooks: {
                option: {
                    get: function (a) {
                        var b = a.attributes.value;
                        return !b || b.specified ? a.value : a.text
                    }
                },
                select: {
                    get: function (a) {
                        var b,
                            c,
                            d,
                            e,
                            g = a.selectedIndex,
                            h = [
                            ],
                            i = a.options,
                            j = 'select-one' === a.type;
                        if (0 > g) return null;
                        for (c = j ? g : 0, d = j ? g + 1 : i.length; d > c; c++) if (e = i[c], !(!e.selected || (f.support.optDisabled ? e.disabled : null !== e.getAttribute('disabled')) || e.parentNode.disabled && f.nodeName(e.parentNode, 'optgroup'))) {
                            if (b = f(e).val(), j) return b;
                            h.push(b)
                        }
                        return j && !h.length && i.length ? f(i[g]).val()  : h
                    },
                    set: function (a, b) {
                        var c = f.makeArray(b);
                        return f(a).find('option').each(function () {
                            this.selected = f.inArray(f(this).val(), c) >= 0
                        }),
                        c.length || (a.selectedIndex = - 1),
                            c
                    }
                }
            },
            attrFn: {
                val: !0,
                css: !0,
                html: !0,
                text: !0,
                data: !0,
                width: !0,
                height: !0,
                offset: !0
            },
            attr: function (a, c, d, e) {
                var g,
                    h,
                    i,
                    j = a.nodeType;
                return a && 3 !== j && 8 !== j && 2 !== j ? e && c in f.attrFn ? f(a) [c](d)  : 'undefined' == typeof a.getAttribute ? f.prop(a, c, d)  : (i = 1 !== j || !f.isXMLDoc(a), i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w)), d !== b ? null === d ? void f.removeAttr(a, c)  : h && 'set' in h && i && (g = h.set(a, d, c)) !== b ? g : (a.setAttribute(c, '' + d), d)  : h && 'get' in h && i && null !== (g = h.get(a, c)) ? g : (g = a.getAttribute(c), null === g ? b : g))  : void 0
            },
            removeAttr: function (a, b) {
                var c,
                    d,
                    e,
                    g,
                    h,
                    i = 0;
                if (b && 1 === a.nodeType) for (d = b.toLowerCase().split(p), g = d.length; g > i; i++) e = d[i],
                e && (c = f.propFix[e] || e, h = u.test(e), h || f.attr(a, e, ''), a.removeAttribute(v ? e : c), h && c in a && (a[c] = !1))
            },
            attrHooks: {
                type: {
                    set: function (a, b) {
                        if (r.test(a.nodeName) && a.parentNode) f.error('type property can\'t be changed');
                        else if (!f.support.radioValue && 'radio' === b && f.nodeName(a, 'input')) {
                            var c = a.value;
                            return a.setAttribute('type', b),
                            c && (a.value = c),
                                b
                        }
                    }
                },
                value: {
                    get: function (a, b) {
                        return w && f.nodeName(a, 'button') ? w.get(a, b)  : b in a ? a.value : null
                    },
                    set: function (a, b, c) {
                        return w && f.nodeName(a, 'button') ? w.set(a, b, c)  : void (a.value = b)
                    }
                }
            },
            propFix: {
                tabindex: 'tabIndex',
                readonly: 'readOnly',
                'for': 'htmlFor',
                'class': 'className',
                maxlength: 'maxLength',
                cellspacing: 'cellSpacing',
                cellpadding: 'cellPadding',
                rowspan: 'rowSpan',
                colspan: 'colSpan',
                usemap: 'useMap',
                frameborder: 'frameBorder',
                contenteditable: 'contentEditable'
            },
            prop: function (a, c, d) {
                var e,
                    g,
                    h,
                    i = a.nodeType;
                return a && 3 !== i && 8 !== i && 2 !== i ? (h = 1 !== i || !f.isXMLDoc(a), h && (c = f.propFix[c] || c, g = f.propHooks[c]), d !== b ? g && 'set' in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && 'get' in g && null !== (e = g.get(a, c)) ? e : a[c])  : void 0
            },
            propHooks: {
                tabIndex: {
                    get: function (a) {
                        var c = a.getAttributeNode('tabindex');
                        return c && c.specified ? parseInt(c.value, 10)  : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
                    }
                }
            }
        }),
        f.attrHooks.tabindex = f.propHooks.tabIndex,
        x = {
            get: function (a, c) {
                var d,
                    e = f.prop(a, c);
                return e === !0 || 'boolean' != typeof e && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase()  : b
            },
            set: function (a, b, c) {
                var d;
                return b === !1 ? f.removeAttr(a, c)  : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())),
                    c
            }
        },
    v || (y = {
        name: !0,
        id: !0,
        coords: !0
    }, w = f.valHooks.button = {
        get: function (a, c) {
            var d;
            return d = a.getAttributeNode(c),
                d && (y[c] ? '' !== d.nodeValue : d.specified) ? d.nodeValue : b
        },
        set: function (a, b, d) {
            var e = a.getAttributeNode(d);
            return e || (e = c.createAttribute(d), a.setAttributeNode(e)),
                e.nodeValue = b + ''
        }
    }, f.attrHooks.tabindex.set = w.set, f.each(['width',
        'height'], function (a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
            set: function (a, c) {
                return '' === c ? (a.setAttribute(b, 'auto'), c)  : void 0
            }
        })
    }), f.attrHooks.contenteditable = {
        get: w.get,
        set: function (a, b, c) {
            '' === b && (b = 'false'),
                w.set(a, b, c)
        }
    }),
    f.support.hrefNormalized || f.each(['href',
        'src',
        'width',
        'height'], function (a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            get: function (a) {
                var d = a.getAttribute(c, 2);
                return null === d ? b : d
            }
        })
    }),
    f.support.style || (f.attrHooks.style = {
        get: function (a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function (a, b) {
            return a.style.cssText = '' + b
        }
    }),
    f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function (a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex),
                null
        }
    })),
    f.support.enctype || (f.propFix.enctype = 'encoding'),
    f.support.checkOn || f.each(['radio',
        'checkbox'], function () {
        f.valHooks[this] = {
            get: function (a) {
                return null === a.getAttribute('value') ? 'on' : a.value
            }
        }
    }),
        f.each(['radio',
            'checkbox'], function () {
            f.valHooks[this] = f.extend(f.valHooks[this], {
                set: function (a, b) {
                    return f.isArray(b) ? a.checked = f.inArray(f(a).val(), b) >= 0 : void 0
                }
            })
        });
    var z = /^(?:textarea|input|select)$/i,
        A = /^([^\.]*)?(?:\.(.+))?$/,
        B = /(?:^|\s)hover(\.\S+)?\b/,
        C = /^key/,
        D = /^(?:mouse|contextmenu)|click/,
        E = /^(?:focusinfocus|focusoutblur)$/,
        F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        G = function (a) {
            var b = F.exec(a);
            return b && (b[1] = (b[1] || '').toLowerCase(), b[3] = b[3] && new RegExp('(?:^|\\s)' + b[3] + '(?:\\s|$)')),
                b
        },
        H = function (a, b) {
            var c = a.attributes || {
                };
            return !(b[1] && a.nodeName.toLowerCase() !== b[1] || b[2] && (c.id || {
            }).value !== b[2] || b[3] && !b[3].test((c['class'] || {
            }).value))
        },
        I = function (a) {
            return f.event.special.hover ? a : a.replace(B, 'mouseenter$1 mouseleave$1')
        };
    f.event = {
        add: function (a, c, d, e, g) {
            var h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                r,
                s;
            if (3 !== a.nodeType && 8 !== a.nodeType && c && d && (h = f._data(a))) {
                for (d.handler && (p = d, d = p.handler, g = p.selector), d.guid || (d.guid = f.guid++), j = h.events, j || (h.events = j = {
                }), i = h.handle, i || (h.handle = i = function (a) {
                    return 'undefined' == typeof f || a && f.event.triggered === a.type ? b : f.event.dispatch.apply(i.elem, arguments)
                }, i.elem = a), c = f.trim(I(c)).split(' '), k = 0; k < c.length; k++) l = A.exec(c[k]) || [],
                    m = l[1],
                    n = (l[2] || '').split('.').sort(),
                    s = f.event.special[m] || {
                        },
                    m = (g ? s.delegateType : s.bindType) || m,
                    s = f.event.special[m] || {
                        },
                    o = f.extend({
                        type: m,
                        origType: l[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: g,
                        quick: g && G(g),
                        namespace: n.join('.')
                    }, p),
                    r = j[m],
                r || (r = j[m] = [
                ], r.delegateCount = 0, s.setup && s.setup.call(a, e, n, i) !== !1 || (a.addEventListener ? a.addEventListener(m, i, !1)  : a.attachEvent && a.attachEvent('on' + m, i))),
                s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)),
                    g ? r.splice(r.delegateCount++, 0, o)  : r.push(o),
                    f.event.global[m] = !0;
                a = null
            }
        },
        global: {
        },
        remove: function (a, b, c, d, e) {
            var h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q,
                r,
                s,
                g = f.hasData(a) && f._data(a);
            if (g && (o = g.events)) {
                for (b = f.trim(I(b || '')).split(' '), h = 0; h < b.length; h++) if (i = A.exec(b[h]) || [], j = k = i[1], l = i[2], j) {
                    for (p = f.event.special[j] || {
                        }, j = (d ? p.delegateType : p.bindType) || j, r = o[j] || [], m = r.length, l = l ? new RegExp('(^|\\.)' + l.split('.').sort().join('\\.(?:.*\\.)?') + '(\\.|$)')  : null, n = 0; n < r.length; n++) s = r[n],
                        !(!e && k !== s.origType || c && c.guid !== s.guid || l && !l.test(s.namespace) || d && d !== s.selector && ('**' !== d || !s.selector) || (r.splice(n--, 1), s.selector && r.delegateCount--, !p.remove || !p.remove.call(a, s)));
                    0 === r.length && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle), delete o[j])
                } else for (j in o) f.event.remove(a, j + b[h], c, d, !0);
                f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, [
                    'events',
                    'handle'
                ], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (c, d, e, g) {
            if (!e || 3 !== e.nodeType && 8 !== e.nodeType) {
                var j,
                    k,
                    l,
                    m,
                    n,
                    o,
                    p,
                    q,
                    r,
                    s,
                    h = c.type || c,
                    i = [
                    ];
                if (E.test(h + f.event.triggered)) return;
                if (h.indexOf('!') >= 0 && (h = h.slice(0, - 1), k = !0), h.indexOf('.') >= 0 && (i = h.split('.'), h = i.shift(), i.sort()), (!e || f.event.customEvent[h]) && !f.event.global[h]) return;
                if (c = 'object' == typeof c ? c[f.expando] ? c : new f.Event(h, c)  : new f.Event(h), c.type = h, c.isTrigger = !0, c.exclusive = k, c.namespace = i.join('.'), c.namespace_re = c.namespace ? new RegExp('(^|\\.)' + i.join('\\.(?:.*\\.)?') + '(\\.|$)')  : null, o = h.indexOf(':') < 0 ? 'on' + h : '', !e) {
                    j = f.cache;
                    for (l in j) j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0);
                    return
                }
                if (c.result = b, c.target || (c.target = e), d = null != d ? f.makeArray(d)  : [
                    ], d.unshift(c), p = f.event.special[h] || {
                        }, p.trigger && p.trigger.apply(e, d) === !1) return;
                if (r = [
                        [e,
                            p.bindType || h]
                    ], !g && !p.noBubble && !f.isWindow(e)) {
                    for (s = p.delegateType || h, m = E.test(s + h) ? e : e.parentNode, n = null; m; m = m.parentNode) r.push([m,
                        s]),
                        n = m;
                    n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a,
                        s])
                }
                for (l = 0; l < r.length && !c.isPropagationStopped(); l++) m = r[l][0],
                    c.type = r[l][1],
                    q = (f._data(m, 'events') || {
                        }) [c.type] && f._data(m, 'handle'),
                q && q.apply(m, d),
                    q = o && m[o],
                q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault();
                return c.type = h,
                    !(g || c.isDefaultPrevented() || p._default && p._default.apply(e.ownerDocument, d) !== !1 || 'click' === h && f.nodeName(e, 'a') || !f.acceptData(e) || !o || !e[h] || ('focus' === h || 'blur' === h) && 0 === c.target.offsetWidth || f.isWindow(e) || (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, !n || !(e[o] = n))),
                    c.result
            }
        },
        dispatch: function (c) {
            c = f.event.fix(c || a.event);
            var k,
                l,
                m,
                n,
                o,
                p,
                q,
                r,
                s,
                t,
                d = (f._data(this, 'events') || {
                    }) [c.type] || [],
                e = d.delegateCount,
                g = [
                ].slice.call(arguments, 0),
                h = !c.exclusive && !c.namespace,
                i = f.event.special[c.type] || {
                    },
                j = [
                ];
            if (g[0] = c, c.delegateTarget = this, !i.preDispatch || i.preDispatch.call(this, c) !== !1) {
                if (e && (!c.button || 'click' !== c.type)) for (n = f(this), n.context = this.ownerDocument || this, m = c.target; m != this; m = m.parentNode || this) if (m.disabled !== !0) {
                    for (p = {
                    }, r = [
                    ], n[0] = m, k = 0; e > k; k++) s = d[k],
                        t = s.selector,
                    p[t] === b && (p[t] = s.quick ? H(m, s.quick)  : n.is(t)),
                    p[t] && r.push(s);
                    r.length && j.push({
                        elem: m,
                        matches: r
                    })
                }
                for (d.length > e && j.push({
                    elem: this,
                    matches: d.slice(e)
                }), k = 0; k < j.length && !c.isPropagationStopped(); k++) for (q = j[k], c.currentTarget = q.elem, l = 0; l < q.matches.length && !c.isImmediatePropagationStopped(); l++) s = q.matches[l],
                (h || !c.namespace && !s.namespace || c.namespace_re && c.namespace_re.test(s.namespace)) && (c.data = s.data, c.handleObj = s, o = ((f.event.special[s.origType] || {
                }).handle || s.handler).apply(q.elem, g), o !== b && (c.result = o, o === !1 && (c.preventDefault(), c.stopPropagation())));
                return i.postDispatch && i.postDispatch.call(this, c),
                    c.result
            }
        },
        props: 'attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '),
        fixHooks: {
        },
        keyHooks: {
            props: 'char charCode key keyCode'.split(' '),
            filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                    a
            }
        },
        mouseHooks: {
            props: 'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(' '),
            filter: function (a, d) {
                var e,
                    f,
                    g,
                    h = d.button,
                    i = d.fromElement;
                return null == a.pageX && null != d.clientX && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)),
                !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i),
                !a.which && h !== b && (a.which = 1 & h ? 1 : 2 & h ? 3 : 4 & h ? 2 : 0),
                    a
            }
        },
        fix: function (a) {
            if (a[f.expando]) return a;
            var d,
                e,
                g = a,
                h = f.event.fixHooks[a.type] || {
                    },
                i = h.props ? this.props.concat(h.props)  : this.props;
            for (a = f.Event(g), d = i.length; d; ) e = i[--d],
                a[e] = g[e];
            return a.target || (a.target = g.srcElement || c),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            a.metaKey === b && (a.metaKey = a.ctrlKey),
                h.filter ? h.filter(a, g)  : a
        },
        special: {
            ready: {
                setup: f.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: 'focusin'
            },
            blur: {
                delegateType: 'focusout'
            },
            beforeunload: {
                setup: function (a, b, c) {
                    f.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function (a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = f.extend(new f.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {
                }
            });
            d ? f.event.trigger(e, null, b)  : f.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    },
        f.event.handle = f.event.dispatch,
        f.removeEvent = c.removeEventListener ? function (a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        }
            : function (a, b, c) {
            a.detachEvent && a.detachEvent('on' + b, c)
        },
        f.Event = function (a, b) {
            return this instanceof f.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J)  : this.type = a, b && f.extend(this, b), this.timeStamp = a && a.timeStamp || f.now(), this[f.expando] = !0, void 0)  : new f.Event(a, b)
        },
        f.Event.prototype = {
            preventDefault: function () {
                this.isDefaultPrevented = K;
                var a = this.originalEvent;
                !a || (a.preventDefault ? a.preventDefault()  : a.returnValue = !1)
            },
            stopPropagation: function () {
                this.isPropagationStopped = K;
                var a = this.originalEvent;
                !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                this.isImmediatePropagationStopped = K,
                    this.stopPropagation()
            },
            isDefaultPrevented: J,
            isPropagationStopped: J,
            isImmediatePropagationStopped: J
        },
        f.each({
            mouseenter: 'mouseover',
            mouseleave: 'mouseout'
        }, function (a, b) {
            f.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function (a) {
                    {
                        var h,
                            c = this,
                            d = a.relatedTarget,
                            e = a.handleObj;
                        e.selector
                    }
                    return (!d || d !== c && !f.contains(c, d)) && (a.type = e.origType, h = e.handler.apply(this, arguments), a.type = b),
                        h
                }
            }
        }),
    f.support.submitBubbles || (f.event.special.submit = {
        setup: function () {
            return f.nodeName(this, 'form') ? !1 : void f.event.add(this, 'click._submit keypress._submit', function (a) {
                var c = a.target,
                    d = f.nodeName(c, 'input') || f.nodeName(c, 'button') ? c.form : b;
                d && !d._submit_attached && (f.event.add(d, 'submit._submit', function (a) {
                    a._submit_bubble = !0
                }), d._submit_attached = !0)
            })
        },
        postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && f.event.simulate('submit', this.parentNode, a, !0))
        },
        teardown: function () {
            return f.nodeName(this, 'form') ? !1 : void f.event.remove(this, '._submit')
        }
    }),
    f.support.changeBubbles || (f.event.special.change = {
        setup: function () {
            return z.test(this.nodeName) ? (('checkbox' === this.type || 'radio' === this.type) && (f.event.add(this, 'propertychange._change', function (a) {
                'checked' === a.originalEvent.propertyName && (this._just_changed = !0)
            }), f.event.add(this, 'click._change', function (a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate('change', this, a, !0))
            })), !1)  : void f.event.add(this, 'beforeactivate._change', function (a) {
                var b = a.target;
                z.test(b.nodeName) && !b._change_attached && (f.event.add(b, 'change._change', function (a) {
                    this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate('change', this.parentNode, a, !0)
                }), b._change_attached = !0)
            })
        },
        handle: function (a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || 'radio' !== b.type && 'checkbox' !== b.type ? a.handleObj.handler.apply(this, arguments)  : void 0
        },
        teardown: function () {
            return f.event.remove(this, '._change'),
                z.test(this.nodeName)
        }
    }),
    f.support.focusinBubbles || f.each({
        focus: 'focusin',
        blur: 'focusout'
    }, function (a, b) {
        var d = 0,
            e = function (a) {
                f.event.simulate(b, a.target, f.event.fix(a), !0)
            };
        f.event.special[b] = {
            setup: function () {
                0 === d++ && c.addEventListener(a, e, !0)
            },
            teardown: function () {
                0 === --d && c.removeEventListener(a, e, !0)
            }
        }
    }),
        f.fn.extend({
            on: function (a, c, d, e, g) {
                var h,
                    i;
                if ('object' == typeof a) {
                    'string' != typeof c && (d = d || c, c = b);
                    for (i in a) this.on(i, c, d, a[i], g);
                    return this
                }
                if (null == d && null == e ? (e = c, d = c = b)  : null == e && ('string' == typeof c ? (e = d, d = b)  : (e = d, d = c, c = b)), e === !1) e = J;
                else if (!e) return this;
                return 1 === g && (h = e, e = function (a) {
                    return f().off(a),
                        h.apply(this, arguments)
                }, e.guid = h.guid || (h.guid = f.guid++)),
                    this.each(function () {
                        f.event.add(this, a, e, d, c)
                    })
            },
            one: function (a, b, c, d) {
                return this.on(a, b, c, d, 1)
            },
            off: function (a, c, d) {
                if (a && a.preventDefault && a.handleObj) {
                    var e = a.handleObj;
                    return f(a.delegateTarget).off(e.namespace ? e.origType + '.' + e.namespace : e.origType, e.selector, e.handler),
                        this
                }
                if ('object' == typeof a) {
                    for (var g in a) this.off(g, c, a[g]);
                    return this
                }
                return (c === !1 || 'function' == typeof c) && (d = c, c = b),
                d === !1 && (d = J),
                    this.each(function () {
                        f.event.remove(this, a, d, c)
                    })
            },
            bind: function (a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function (a, b) {
                return this.off(a, null, b)
            },
            live: function (a, b, c) {
                return f(this.context).on(a, this.selector, b, c),
                    this
            },
            die: function (a, b) {
                return f(this.context).off(a, this.selector || '**', b),
                    this
            },
            delegate: function (a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function (a, b, c) {
                return 1 == arguments.length ? this.off(a, '**')  : this.off(b, a, c)
            },
            trigger: function (a, b) {
                return this.each(function () {
                    f.event.trigger(a, b, this)
                })
            },
            triggerHandler: function (a, b) {
                return this[0] ? f.event.trigger(a, b, this[0], !0)  : void 0
            },
            toggle: function (a) {
                var b = arguments,
                    c = a.guid || f.guid++,
                    d = 0,
                    e = function (c) {
                        var e = (f._data(this, 'lastToggle' + a.guid) || 0) % d;
                        return f._data(this, 'lastToggle' + a.guid, e + 1),
                            c.preventDefault(),
                        b[e].apply(this, arguments) || !1
                    };
                for (e.guid = c; d < b.length; ) b[d++].guid = c;
                return this.click(e)
            },
            hover: function (a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        }),
        f.each('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(' '), function (a, b) {
            f.fn[b] = function (a, c) {
                return null == c && (c = a, a = null),
                    arguments.length > 0 ? this.on(b, null, a, c)  : this.trigger(b)
            },
            f.attrFn && (f.attrFn[b] = !0),
            C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks),
            D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
        }),
        function () {
            function x(a, b, c, e, f, g) {
                for (var h = 0, i = e.length; i > h; h++) {
                    var j = e[h];
                    if (j) {
                        var k = !1;
                        for (j = j[a]; j; ) {
                            if (j[d] === c) {
                                k = e[j.sizset];
                                break
                            }
                            if (1 === j.nodeType) if (g || (j[d] = c, j.sizset = h), 'string' != typeof b) {
                                if (j === b) {
                                    k = !0;
                                    break
                                }
                            } else if (m.filter(b, [
                                    j
                                ]).length > 0) {
                                k = j;
                                break
                            }
                            j = j[a]
                        }
                        e[h] = k
                    }
                }
            }
            function w(a, b, c, e, f, g) {
                for (var h = 0, i = e.length; i > h; h++) {
                    var j = e[h];
                    if (j) {
                        var k = !1;
                        for (j = j[a]; j; ) {
                            if (j[d] === c) {
                                k = e[j.sizset];
                                break
                            }
                            if (1 === j.nodeType && !g && (j[d] = c, j.sizset = h), j.nodeName.toLowerCase() === b) {
                                k = j;
                                break
                            }
                            j = j[a]
                        }
                        e[h] = k
                    }
                }
            }
            var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                d = 'sizcache' + (Math.random() + '').replace('.', ''),
                e = 0,
                g = Object.prototype.toString,
                h = !1,
                i = !0,
                j = /\\/g,
                k = /\r\n/g,
                l = /\W/;
            [
                0,
                0
            ].sort(function () {
                    return i = !1,
                        0
                });
            var m = function (b, d, e, f) {
                e = e || [],
                    d = d || c;
                var h = d;
                if (1 !== d.nodeType && 9 !== d.nodeType) return [];
                if (!b || 'string' != typeof b) return e;
                var i,
                    j,
                    k,
                    l,
                    n,
                    q,
                    r,
                    t,
                    u = !0,
                    v = m.isXML(d),
                    w = [
                    ],
                    x = b;
                do if (a.exec(''), i = a.exec(x), i && (x = i[3], w.push(i[1]), i[2])) {
                    l = i[3];
                    break
                } while (i);
                if (w.length > 1 && p.exec(b)) if (2 === w.length && o.relative[w[0]]) j = y(w[0] + w[1], d, f);
                else for (j = o.relative[w[0]] ? [
                        d
                    ] : m(w.shift(), d); w.length; ) b = w.shift(),
                    o.relative[b] && (b += w.shift()),
                        j = y(b, j, f);
                else if (!f && w.length > 1 && 9 === d.nodeType && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set) [0] : n.set[0]), d) for (n = f ? {
                    expr: w.pop(),
                    set: s(f)
                }
                    : m.find(w.pop(), 1 !== w.length || '~' !== w[0] && '+' !== w[0] || !d.parentNode ? d : d.parentNode, v), j = n.expr ? m.filter(n.expr, n.set)  : n.set, w.length > 0 ? k = s(j)  : u = !1; w.length; ) q = w.pop(),
                    r = q,
                    o.relative[q] ? r = w.pop()  : q = '',
                null == r && (r = d),
                    o.relative[q](k, r, v);
                else k = w = [
                    ];
                if (k || (k = j), k || m.error(q || b), '[object Array]' === g.call(k)) if (u) if (d && 1 === d.nodeType) for (t = 0; null != k[t]; t++) k[t] && (k[t] === !0 || 1 === k[t].nodeType && m.contains(d, k[t])) && e.push(j[t]);
                else for (t = 0; null != k[t]; t++) k[t] && 1 === k[t].nodeType && e.push(j[t]);
                else e.push.apply(e, k);
                else s(k, e);
                return l && (m(l, h, e, f), m.uniqueSort(e)),
                    e
            };
            m.uniqueSort = function (a) {
                if (u && (h = i, a.sort(u), h)) for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1);
                return a
            },
                m.matches = function (a, b) {
                    return m(a, null, null, b)
                },
                m.matchesSelector = function (a, b) {
                    return m(b, null, null, [
                            a
                        ]).length > 0
                },
                m.find = function (a, b, c) {
                    var d,
                        e,
                        f,
                        g,
                        h,
                        i;
                    if (!a) return [];
                    for (e = 0, f = o.order.length; f > e; e++) if (h = o.order[e], (g = o.leftMatch[h].exec(a)) && (i = g[1], g.splice(1, 1), '\\' !== i.substr(i.length - 1) && (g[1] = (g[1] || '').replace(j, ''), d = o.find[h](g, b, c), null != d))) {
                        a = a.replace(o.match[h], '');
                        break
                    }
                    return d || (d = 'undefined' != typeof b.getElementsByTagName ? b.getElementsByTagName('*')  : [
                    ]),
                    {
                        set: d,
                        expr: a
                    }
                },
                m.filter = function (a, c, d, e) {
                    for (var f, g, h, i, j, k, l, n, p, q = a, r = [
                    ], s = c, t = c && c[0] && m.isXML(c[0]); a && c.length; ) {
                        for (h in o.filter) if (null != (f = o.leftMatch[h].exec(a)) && f[2]) {
                            if (k = o.filter[h], l = f[1], g = !1, f.splice(1, 1), '\\' === l.substr(l.length - 1)) continue;
                            if (s === r && (r = [
                                ]), o.preFilter[h]) if (f = o.preFilter[h](f, s, d, r, e, t)) {
                                if (f === !0) continue
                            } else g = i = !0;
                            if (f) for (n = 0; null != (j = s[n]); n++) j && (i = k(j, f, n, s), p = e ^ i, d && null != i ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
                            if (i !== b) {
                                if (d || (s = r), a = a.replace(o.match[h], ''), !g) return [];
                                break
                            }
                        }
                        if (a === q) {
                            if (null != g) break;
                            m.error(a)
                        }
                        q = a
                    }
                    return s
                },
                m.error = function (a) {
                    throw new Error('Syntax error, unrecognized expression: ' + a)
                };
            var n = m.getText = function (a) {
                    var b,
                        c,
                        d = a.nodeType,
                        e = '';
                    if (d) {
                        if (1 === d || 9 === d || 11 === d) {
                            if ('string' == typeof a.textContent) return a.textContent;
                            if ('string' == typeof a.innerText) return a.innerText.replace(k, '');
                            for (a = a.firstChild; a; a = a.nextSibling) e += n(a)
                        } else if (3 === d || 4 === d) return a.nodeValue
                    } else for (b = 0; c = a[b]; b++) 8 !== c.nodeType && (e += n(c));
                    return e
                },
                o = m.selectors = {
                    order: [
                        'ID',
                        'NAME',
                        'TAG'
                    ],
                    match: {
                        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                        CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                    },
                    leftMatch: {
                    },
                    attrMap: {
                        'class': 'className',
                        'for': 'htmlFor'
                    },
                    attrHandle: {
                        href: function (a) {
                            return a.getAttribute('href')
                        },
                        type: function (a) {
                            return a.getAttribute('type')
                        }
                    },
                    relative: {
                        '+': function (a, b) {
                            var c = 'string' == typeof b,
                                d = c && !l.test(b),
                                e = c && !d;
                            d && (b = b.toLowerCase());
                            for (var h, f = 0, g = a.length; g > f; f++) if (h = a[f]) {
                                for (; (h = h.previousSibling) && 1 !== h.nodeType; );
                                a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                            }
                            e && m.filter(b, a, !0)
                        },
                        '>': function (a, b) {
                            var c,
                                d = 'string' == typeof b,
                                e = 0,
                                f = a.length;
                            if (d && !l.test(b)) {
                                for (b = b.toLowerCase(); f > e; e++) if (c = a[e]) {
                                    var g = c.parentNode;
                                    a[e] = g.nodeName.toLowerCase() === b ? g : !1
                                }
                            } else {
                                for (; f > e; e++) c = a[e],
                                c && (a[e] = d ? c.parentNode : c.parentNode === b);
                                d && m.filter(b, a, !0)
                            }
                        },
                        '': function (a, b, c) {
                            var d,
                                f = e++,
                                g = x;
                            'string' == typeof b && !l.test(b) && (b = b.toLowerCase(), d = b, g = w),
                                g('parentNode', b, f, a, d, c)
                        },
                        '~': function (a, b, c) {
                            var d,
                                f = e++,
                                g = x;
                            'string' == typeof b && !l.test(b) && (b = b.toLowerCase(), d = b, g = w),
                                g('previousSibling', b, f, a, d, c)
                        }
                    },
                    find: {
                        ID: function (a, b, c) {
                            if ('undefined' != typeof b.getElementById && !c) {
                                var d = b.getElementById(a[1]);
                                return d && d.parentNode ? [
                                    d
                                ] : [
                                ]
                            }
                        },
                        NAME: function (a, b) {
                            if ('undefined' != typeof b.getElementsByName) {
                                for (var c = [
                                ], d = b.getElementsByName(a[1]), e = 0, f = d.length; f > e; e++) d[e].getAttribute('name') === a[1] && c.push(d[e]);
                                return 0 === c.length ? null : c
                            }
                        },
                        TAG: function (a, b) {
                            return 'undefined' != typeof b.getElementsByTagName ? b.getElementsByTagName(a[1])  : void 0
                        }
                    },
                    preFilter: {
                        CLASS: function (a, b, c, d, e, f) {
                            if (a = ' ' + a[1].replace(j, '') + ' ', f) return a;
                            for (var h, g = 0; null != (h = b[g]); g++) h && (e ^ (h.className && (' ' + h.className + ' ').replace(/[\t\n\r]/g, ' ').indexOf(a) >= 0) ? c || d.push(h)  : c && (b[g] = !1));
                            return !1
                        },
                        ID: function (a) {
                            return a[1].replace(j, '')
                        },
                        TAG: function (a) {
                            return a[1].replace(j, '').toLowerCase()
                        },
                        CHILD: function (a) {
                            if ('nth' === a[1]) {
                                a[2] || m.error(a[0]),
                                    a[2] = a[2].replace(/^\+|\s*/g, '');
                                var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec('even' === a[2] && '2n' || 'odd' === a[2] && '2n+1' || !/\D/.test(a[2]) && '0n+' + a[2] || a[2]);
                                a[2] = b[1] + (b[2] || 1) - 0,
                                    a[3] = b[3] - 0
                            } else a[2] && m.error(a[0]);
                            return a[0] = e++,
                                a
                        },
                        ATTR: function (a, b, c, d, e, f) {
                            var g = a[1] = a[1].replace(j, '');
                            return !f && o.attrMap[g] && (a[1] = o.attrMap[g]),
                                a[4] = (a[4] || a[5] || '').replace(j, ''),
                            '~=' === a[2] && (a[4] = ' ' + a[4] + ' '),
                                a
                        },
                        PSEUDO: function (b, c, d, e, f) {
                            if ('not' === b[1]) {
                                if (!((a.exec(b[3]) || '').length > 1 || /^\w/.test(b[3]))) {
                                    var g = m.filter(b[3], c, d, !0 ^ f);
                                    return d || e.push.apply(e, g),
                                        !1
                                }
                                b[3] = m(b[3], null, null, c)
                            } else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) return !0;
                            return b
                        },
                        POS: function (a) {
                            return a.unshift(!0),
                                a
                        }
                    },
                    filters: {
                        enabled: function (a) {
                            return a.disabled === !1 && 'hidden' !== a.type
                        },
                        disabled: function (a) {
                            return a.disabled === !0
                        },
                        checked: function (a) {
                            return a.checked === !0
                        },
                        selected: function (a) {
                            return a.parentNode && a.parentNode.selectedIndex,
                            a.selected === !0
                        },
                        parent: function (a) {
                            return !!a.firstChild
                        },
                        empty: function (a) {
                            return !a.firstChild
                        },
                        has: function (a, b, c) {
                            return !!m(c[3], a).length
                        },
                        header: function (a) {
                            return /h\d/i.test(a.nodeName)
                        },
                        text: function (a) {
                            var b = a.getAttribute('type'),
                                c = a.type;
                            return 'input' === a.nodeName.toLowerCase() && 'text' === c && (b === c || null === b)
                        },
                        radio: function (a) {
                            return 'input' === a.nodeName.toLowerCase() && 'radio' === a.type
                        },
                        checkbox: function (a) {
                            return 'input' === a.nodeName.toLowerCase() && 'checkbox' === a.type
                        },
                        file: function (a) {
                            return 'input' === a.nodeName.toLowerCase() && 'file' === a.type
                        },
                        password: function (a) {
                            return 'input' === a.nodeName.toLowerCase() && 'password' === a.type
                        },
                        submit: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return ('input' === b || 'button' === b) && 'submit' === a.type
                        },
                        image: function (a) {
                            return 'input' === a.nodeName.toLowerCase() && 'image' === a.type
                        },
                        reset: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return ('input' === b || 'button' === b) && 'reset' === a.type
                        },
                        button: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return 'input' === b && 'button' === a.type || 'button' === b
                        },
                        input: function (a) {
                            return /input|select|textarea|button/i.test(a.nodeName)
                        },
                        focus: function (a) {
                            return a === a.ownerDocument.activeElement
                        }
                    },
                    setFilters: {
                        first: function (a, b) {
                            return 0 === b
                        },
                        last: function (a, b, c, d) {
                            return b === d.length - 1
                        },
                        even: function (a, b) {
                            return b % 2 === 0
                        },
                        odd: function (a, b) {
                            return b % 2 === 1
                        },
                        lt: function (a, b, c) {
                            return b < c[3] - 0
                        },
                        gt: function (a, b, c) {
                            return b > c[3] - 0
                        },
                        nth: function (a, b, c) {
                            return c[3] - 0 === b
                        },
                        eq: function (a, b, c) {
                            return c[3] - 0 === b
                        }
                    },
                    filter: {
                        PSEUDO: function (a, b, c, d) {
                            var e = b[1],
                                f = o.filters[e];
                            if (f) return f(a, c, b, d);
                            if ('contains' === e) return (a.textContent || a.innerText || n([a]) || '').indexOf(b[3]) >= 0;
                            if ('not' === e) {
                                for (var g = b[3], h = 0, i = g.length; i > h; h++) if (g[h] === a) return !1;
                                return !0
                            }
                            m.error(e)
                        },
                        CHILD: function (a, b) {
                            var c,
                                e,
                                f,
                                g,
                                i,
                                j,
                                k = b[1],
                                l = a;
                            switch (k) {
                                case 'only':
                                case 'first':
                                    for (; l = l.previousSibling; ) if (1 === l.nodeType) return !1;
                                    if ('first' === k) return !0;
                                    l = a;
                                case 'last':
                                    for (; l = l.nextSibling; ) if (1 === l.nodeType) return !1;
                                    return !0;
                                case 'nth':
                                    if (c = b[2], e = b[3], 1 === c && 0 === e) return !0;
                                    if (f = b[0], g = a.parentNode, g && (g[d] !== f || !a.nodeIndex)) {
                                        for (i = 0, l = g.firstChild; l; l = l.nextSibling) 1 === l.nodeType && (l.nodeIndex = ++i);
                                        g[d] = f
                                    }
                                    return j = a.nodeIndex - e,
                                        0 === c ? 0 === j : j % c === 0 && j / c >= 0
                            }
                        },
                        ID: function (a, b) {
                            return 1 === a.nodeType && a.getAttribute('id') === b
                        },
                        TAG: function (a, b) {
                            return '*' === b && 1 === a.nodeType || !!a.nodeName && a.nodeName.toLowerCase() === b
                        },
                        CLASS: function (a, b) {
                            return (' ' + (a.className || a.getAttribute('class')) + ' ').indexOf(b) > - 1
                        },
                        ATTR: function (a, b) {
                            var c = b[1],
                                d = m.attr ? m.attr(a, c)  : o.attrHandle[c] ? o.attrHandle[c](a)  : null != a[c] ? a[c] : a.getAttribute(c),
                                e = d + '',
                                f = b[2],
                                g = b[4];
                            return null == d ? '!=' === f : !f && m.attr ? null != d : '=' === f ? e === g : '*=' === f ? e.indexOf(g) >= 0 : '~=' === f ? (' ' + e + ' ').indexOf(g) >= 0 : g ? '!=' === f ? e !== g : '^=' === f ? 0 === e.indexOf(g)  : '$=' === f ? e.substr(e.length - g.length) === g : '|=' === f ? e === g || e.substr(0, g.length + 1) === g + '-' : !1 : e && d !== !1
                        },
                        POS: function (a, b, c, d) {
                            var e = b[2],
                                f = o.setFilters[e];
                            return f ? f(a, c, b, d)  : void 0
                        }
                    }
                },
                p = o.match.POS,
                q = function (a, b) {
                    return '\\' + (b - 0 + 1)
                };
            for (var r in o.match) o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source),
                o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
            o.match.globalPOS = p;
            var s = function (a, b) {
                return a = Array.prototype.slice.call(a, 0),
                    b ? (b.push.apply(b, a), b)  : a
            };
            try {
                Array.prototype.slice.call(c.documentElement.childNodes, 0) [0].nodeType
            } catch (t) {
                s = function (a, b) {
                    var c = 0,
                        d = b || [];
                    if ('[object Array]' === g.call(a)) Array.prototype.push.apply(d, a);
                    else if ('number' == typeof a.length) for (var e = a.length; e > c; c++) d.push(a[c]);
                    else for (; a[c]; c++) d.push(a[c]);
                    return d
                }
            }
            var u,
                v;
            c.documentElement.compareDocumentPosition ? u = function (a, b) {
                return a === b ? (h = !0, 0)  : a.compareDocumentPosition && b.compareDocumentPosition ? 4 & a.compareDocumentPosition(b) ? - 1 : 1 : a.compareDocumentPosition ? - 1 : 1
            }
                : (u = function (a, b) {
                if (a === b) return h = !0,
                    0;
                if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
                var c,
                    d,
                    e = [
                    ],
                    f = [
                    ],
                    g = a.parentNode,
                    i = b.parentNode,
                    j = g;
                if (g === i) return v(a, b);
                if (!g) return - 1;
                if (!i) return 1;
                for (; j; ) e.unshift(j),
                    j = j.parentNode;
                for (j = i; j; ) f.unshift(j),
                    j = j.parentNode;
                c = e.length,
                    d = f.length;
                for (var k = 0; c > k && d > k; k++) if (e[k] !== f[k]) return v(e[k], f[k]);
                return k === c ? v(a, f[k], - 1)  : v(e[k], b, 1)
            }, v = function (a, b, c) {
                if (a === b) return c;
                for (var d = a.nextSibling; d; ) {
                    if (d === b) return - 1;
                    d = d.nextSibling
                }
                return 1
            }),
                function () {
                    var a = c.createElement('div'),
                        d = 'script' + (new Date).getTime(),
                        e = c.documentElement;
                    a.innerHTML = '<a name=\'' + d + '\'/>',
                        e.insertBefore(a, e.firstChild),
                    c.getElementById(d) && (o.find.ID = function (a, c, d) {
                        if ('undefined' != typeof c.getElementById && !d) {
                            var e = c.getElementById(a[1]);
                            return e ? e.id === a[1] || 'undefined' != typeof e.getAttributeNode && e.getAttributeNode('id').nodeValue === a[1] ? [
                                e
                            ] : b : [
                            ]
                        }
                    }, o.filter.ID = function (a, b) {
                        var c = 'undefined' != typeof a.getAttributeNode && a.getAttributeNode('id');
                        return 1 === a.nodeType && c && c.nodeValue === b
                    }),
                        e.removeChild(a),
                        e = a = null
                }(),
                function () {
                    var a = c.createElement('div');
                    a.appendChild(c.createComment('')),
                    a.getElementsByTagName('*').length > 0 && (o.find.TAG = function (a, b) {
                        var c = b.getElementsByTagName(a[1]);
                        if ('*' === a[1]) {
                            for (var d = [
                            ], e = 0; c[e]; e++) 1 === c[e].nodeType && d.push(c[e]);
                            c = d
                        }
                        return c
                    }),
                        a.innerHTML = '<a href=\'#\'></a>',
                    a.firstChild && 'undefined' != typeof a.firstChild.getAttribute && '#' !== a.firstChild.getAttribute('href') && (o.attrHandle.href = function (a) {
                        return a.getAttribute('href', 2)
                    }),
                        a = null
                }(),
            c.querySelectorAll && function () {
                var a = m,
                    b = c.createElement('div'),
                    d = '__sizzle__';
                if (b.innerHTML = '<p class=\'TEST\'></p>', !b.querySelectorAll || 0 !== b.querySelectorAll('.TEST').length) {
                    m = function (b, e, f, g) {
                        if (e = e || c, !g && !m.isXML(e)) {
                            var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                            if (h && (1 === e.nodeType || 9 === e.nodeType)) {
                                if (h[1]) return s(e.getElementsByTagName(b), f);
                                if (h[2] && o.find.CLASS && e.getElementsByClassName) return s(e.getElementsByClassName(h[2]), f)
                            }
                            if (9 === e.nodeType) {
                                if ('body' === b && e.body) return s([e.body], f);
                                if (h && h[3]) {
                                    var i = e.getElementById(h[3]);
                                    if (!i || !i.parentNode) return s([], f);
                                    if (i.id === h[3]) return s([i], f)
                                }
                                try {
                                    return s(e.querySelectorAll(b), f)
                                } catch (j) {
                                }
                            } else if (1 === e.nodeType && 'object' !== e.nodeName.toLowerCase()) {
                                var k = e,
                                    l = e.getAttribute('id'),
                                    n = l || d,
                                    p = e.parentNode,
                                    q = /^\s*[+~]/.test(b);
                                l ? n = n.replace(/'/g, '\\$&')  : e.setAttribute('id', n),
                                q && p && (e = e.parentNode);
                                try {
                                    if (!q || p) return s(e.querySelectorAll('[id=\'' + n + '\'] ' + b), f)
                                } catch (r) {
                                } finally {
                                    l || k.removeAttribute('id')
                                }
                            }
                        }
                        return a(b, e, f, g)
                    };
                    for (var e in a) m[e] = a[e];
                    b = null
                }
            }(),
                function () {
                    var a = c.documentElement,
                        b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
                    if (b) {
                        var d = !b.call(c.createElement('div'), 'div'),
                            e = !1;
                        try {
                            b.call(c.documentElement, '[test!=\'\']:sizzle')
                        } catch (f) {
                            e = !0
                        }
                        m.matchesSelector = function (a, c) {
                            if (c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, '=\'$1\']'), !m.isXML(a)) try {
                                if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                                    var f = b.call(a, c);
                                    if (f || !d || a.document && 11 !== a.document.nodeType) return f
                                }
                            } catch (g) {
                            }
                            return m(c, null, null, [
                                    a
                                ]).length > 0
                        }
                    }
                }(),
                function () {
                    var a = c.createElement('div');
                    if (a.innerHTML = '<div class=\'test e\'></div><div class=\'test\'></div>', a.getElementsByClassName && 0 !== a.getElementsByClassName('e').length) {
                        if (a.lastChild.className = 'e', 1 === a.getElementsByClassName('e').length) return;
                        o.order.splice(1, 0, 'CLASS'),
                            o.find.CLASS = function (a, b, c) {
                                return 'undefined' == typeof b.getElementsByClassName || c ? void 0 : b.getElementsByClassName(a[1])
                            },
                            a = null
                    }
                }(),
                m.contains = c.documentElement.contains ? function (a, b) {
                    return a !== b && (a.contains ? a.contains(b)  : !0)
                }
                    : c.documentElement.compareDocumentPosition ? function (a, b) {
                    return !!(16 & a.compareDocumentPosition(b))
                }
                    : function () {
                    return !1
                },
                m.isXML = function (a) {
                    var b = (a ? a.ownerDocument || a : 0).documentElement;
                    return b ? 'HTML' !== b.nodeName : !1
                };
            var y = function (a, b, c) {
                for (var d, e = [
                ], f = '', g = b.nodeType ? [
                    b
                ] : b; d = o.match.PSEUDO.exec(a); ) f += d[0],
                    a = a.replace(o.match.PSEUDO, '');
                a = o.relative[a] ? a + '*' : a;
                for (var h = 0, i = g.length; i > h; h++) m(a, g[h], e, c);
                return m.filter(f, e)
            };
            m.attr = f.attr,
                m.selectors.attrMap = {
                },
                f.find = m,
                f.expr = m.selectors,
                f.expr[':'] = f.expr.filters,
                f.unique = m.uniqueSort,
                f.text = m.getText,
                f.isXMLDoc = m.isXML,
                f.contains = m.contains
        }();
    var L = /Until$/,
        M = /^(?:parents|prevUntil|prevAll)/,
        N = /,/,
        O = /^.[^:#\[\.,]*$/,
        P = Array.prototype.slice,
        Q = f.expr.match.globalPOS,
        R = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    f.fn.extend({
        find: function (a) {
            var c,
                d,
                b = this;
            if ('string' != typeof a) return f(a).filter(function () {
                for (c = 0, d = b.length; d > c; c++) if (f.contains(b[c], this)) return !0
            });
            var g,
                h,
                i,
                e = this.pushStack('', 'find', a);
            for (c = 0, d = this.length; d > c; c++) if (g = e.length, f.find(a, this[c], e), c > 0) for (h = g; h < e.length; h++) for (i = 0; g > i; i++) if (e[i] === e[h]) {
                e.splice(h--, 1);
                break
            }
            return e
        },
        has: function (a) {
            var b = f(a);
            return this.filter(function () {
                for (var a = 0, c = b.length; c > a; a++) if (f.contains(this, b[a])) return !0
            })
        },
        not: function (a) {
            return this.pushStack(T(this, a, !1), 'not', a)
        },
        filter: function (a) {
            return this.pushStack(T(this, a, !0), 'filter', a)
        },
        is: function (a) {
            return !!a && ('string' == typeof a ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function (a, b) {
            var d,
                e,
                c = [
                ],
                g = this[0];
            if (f.isArray(a)) {
                for (var h = 1; g && g.ownerDocument && g !== b; ) {
                    for (d = 0; d < a.length; d++) f(g).is(a[d]) && c.push({
                        selector: a[d],
                        elem: g,
                        level: h
                    });
                    g = g.parentNode,
                        h++
                }
                return c
            }
            var i = Q.test(a) || 'string' != typeof a ? f(a, b || this.context)  : 0;
            for (d = 0, e = this.length; e > d; d++) for (g = this[d]; g; ) {
                if (i ? i.index(g) > - 1 : f.find.matchesSelector(g, a)) {
                    c.push(g);
                    break
                }
                if (g = g.parentNode, !g || !g.ownerDocument || g === b || 11 === g.nodeType) break
            }
            return c = c.length > 1 ? f.unique(c)  : c,
                this.pushStack(c, 'closest', a)
        },
        index: function (a) {
            return a ? 'string' == typeof a ? f.inArray(this[0], f(a))  : f.inArray(a.jquery ? a[0] : a, this)  : this[0] && this[0].parentNode ? this.prevAll().length : - 1
        },
        add: function (a, b) {
            var c = 'string' == typeof a ? f(a, b)  : f.makeArray(a && a.nodeType ? [
                    a
                ] : a),
                d = f.merge(this.get(), c);
            return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    }),
        f.each({
            parent: function (a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            },
            parents: function (a) {
                return f.dir(a, 'parentNode')
            },
            parentsUntil: function (a, b, c) {
                return f.dir(a, 'parentNode', c)
            },
            next: function (a) {
                return f.nth(a, 2, 'nextSibling')
            },
            prev: function (a) {
                return f.nth(a, 2, 'previousSibling')
            },
            nextAll: function (a) {
                return f.dir(a, 'nextSibling')
            },
            prevAll: function (a) {
                return f.dir(a, 'previousSibling')
            },
            nextUntil: function (a, b, c) {
                return f.dir(a, 'nextSibling', c)
            },
            prevUntil: function (a, b, c) {
                return f.dir(a, 'previousSibling', c)
            },
            siblings: function (a) {
                return f.sibling((a.parentNode || {
                }).firstChild, a)
            },
            children: function (a) {
                return f.sibling(a.firstChild)
            },
            contents: function (a) {
                return f.nodeName(a, 'iframe') ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
            }
        }, function (a, b) {
            f.fn[a] = function (c, d) {
                var e = f.map(this, b, c);
                return L.test(a) || (d = c),
                d && 'string' == typeof d && (e = f.filter(d, e)),
                    e = this.length > 1 && !R[a] ? f.unique(e)  : e,
                (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse()),
                    this.pushStack(e, a, P.call(arguments).join(','))
            }
        }),
        f.extend({
            filter: function (a, b, c) {
                return c && (a = ':not(' + a + ')'),
                    1 === b.length ? f.find.matchesSelector(b[0], a) ? [
                        b[0]
                    ] : [
                    ] : f.find.matches(a, b)
            },
            dir: function (a, c, d) {
                for (var e = [
                ], g = a[c]; g && 9 !== g.nodeType && (d === b || 1 !== g.nodeType || !f(g).is(d)); ) 1 === g.nodeType && e.push(g),
                    g = g[c];
                return e
            },
            nth: function (a, b, c) {
                b = b || 1;
                for (var e = 0; a && (1 !== a.nodeType || ++e !== b); a = a[c]);
                return a
            },
            sibling: function (a, b) {
                for (var c = [
                ]; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                return c
            }
        });
    var V = 'abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video',
        W = / jQuery\d+="(?:\d+|null)"/g,
        X = /^\s+/,
        Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Z = /<([\w:]+)/,
        $ = /<tbody/i,
        _ = /<|&#?\w+;/,
        ba = /<(?:script|style)/i,
        bb = /<(?:script|object|embed|option|style)/i,
        bc = new RegExp('<(?:' + V + ')[\\s/>]', 'i'),
        bd = /checked\s*(?:[^=]|=\s*.checked.)/i,
        be = /\/(java|ecma)script/i,
        bf = /^\s*<!(?:\[CDATA\[|\-\-)/,
        bg = {
            option: [
                1,
                '<select multiple=\'multiple\'>',
                '</select>'
            ],
            legend: [
                1,
                '<fieldset>',
                '</fieldset>'
            ],
            thead: [
                1,
                '<table>',
                '</table>'
            ],
            tr: [
                2,
                '<table><tbody>',
                '</tbody></table>'
            ],
            td: [
                3,
                '<table><tbody><tr>',
                '</tr></tbody></table>'
            ],
            col: [
                2,
                '<table><tbody></tbody><colgroup>',
                '</colgroup></table>'
            ],
            area: [
                1,
                '<map>',
                '</map>'
            ],
            _default: [
                0,
                '',
                ''
            ]
        },
        bh = U(c);
    bg.optgroup = bg.option,
        bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead,
        bg.th = bg.td,
    f.support.htmlSerialize || (bg._default = [
        1,
        'div<div>',
        '</div>'
    ]),
        f.fn.extend({
            text: function (a) {
                return f.access(this, function (a) {
                    return a === b ? f.text(this)  : this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a))
                }, null, a, arguments.length)
            },
            wrapAll: function (a) {
                if (f.isFunction(a)) return this.each(function (b) {
                    f(this).wrapAll(a.call(this, b))
                });
                if (this[0]) {
                    var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]),
                        b.map(function () {
                            for (var a = this; a.firstChild && 1 === a.firstChild.nodeType; ) a = a.firstChild;
                            return a
                        }).append(this)
                }
                return this
            },
            wrapInner: function (a) {
                return this.each(f.isFunction(a) ? function (b) {
                    f(this).wrapInner(a.call(this, b))
                }
                    : function () {
                    var b = f(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a)  : b.append(a)
                })
            },
            wrap: function (a) {
                var b = f.isFunction(a);
                return this.each(function (c) {
                    f(this).wrapAll(b ? a.call(this, c)  : a)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    f.nodeName(this, 'body') || f(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function () {
                return this.domManip(arguments, !0, function (a) {
                    1 === this.nodeType && this.appendChild(a)
                })
            },
            prepend: function () {
                return this.domManip(arguments, !0, function (a) {
                    1 === this.nodeType && this.insertBefore(a, this.firstChild)
                })
            },
            before: function () {
                if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                    this.parentNode.insertBefore(a, this)
                });
                if (arguments.length) {
                    var a = f.clean(arguments);
                    return a.push.apply(a, this.toArray()),
                        this.pushStack(a, 'before', arguments)
                }
            },
            after: function () {
                if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                    this.parentNode.insertBefore(a, this.nextSibling)
                });
                if (arguments.length) {
                    var a = this.pushStack(this, 'after', arguments);
                    return a.push.apply(a, f.clean(arguments)),
                        a
                }
            },
            remove: function (a, b) {
                for (var d, c = 0; null != (d = this[c]); c++) (!a || f.filter(a, [
                    d
                ]).length) && (!b && 1 === d.nodeType && (f.cleanData(d.getElementsByTagName('*')), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d));
                return this
            },
            empty: function () {
                for (var b, a = 0; null != (b = this[a]); a++) for (1 === b.nodeType && f.cleanData(b.getElementsByTagName('*')); b.firstChild; ) b.removeChild(b.firstChild);
                return this
            },
            clone: function (a, b) {
                return a = null == a ? !1 : a,
                    b = null == b ? a : b,
                    this.map(function () {
                        return f.clone(this, a, b)
                    })
            },
            html: function (a) {
                return f.access(this, function (a) {
                    var c = this[0] || {
                            },
                        d = 0,
                        e = this.length;
                    if (a === b) return 1 === c.nodeType ? c.innerHTML.replace(W, '')  : null;
                    if (!('string' != typeof a || ba.test(a) || !f.support.leadingWhitespace && X.test(a) || bg[(Z.exec(a) || ['',
                            '']) [1].toLowerCase()])) {
                        a = a.replace(Y, '<$1></$2>');
                        try {
                            for (; e > d; d++) c = this[d] || {
                                },
                            1 === c.nodeType && (f.cleanData(c.getElementsByTagName('*')), c.innerHTML = a);
                            c = 0
                        } catch (g) {
                        }
                    }
                    c && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function (a) {
                return this[0] && this[0].parentNode ? f.isFunction(a) ? this.each(function (b) {
                    var c = f(this),
                        d = c.html();
                    c.replaceWith(a.call(this, b, d))
                })  : ('string' != typeof a && (a = f(a).detach()), this.each(function () {
                    var b = this.nextSibling,
                        c = this.parentNode;
                    f(this).remove(),
                        b ? f(b).before(a)  : f(c).append(a)
                }))  : this.length ? this.pushStack(f(f.isFunction(a) ? a()  : a), 'replaceWith', a)  : this
            },
            detach: function (a) {
                return this.remove(a, !0)
            },
            domManip: function (a, c, d) {
                var e,
                    g,
                    h,
                    i,
                    j = a[0],
                    k = [
                    ];
                if (!f.support.checkClone && 3 === arguments.length && 'string' == typeof j && bd.test(j)) return this.each(function () {
                    f(this).domManip(a, c, d, !0)
                });
                if (f.isFunction(j)) return this.each(function (e) {
                    var g = f(this);
                    a[0] = j.call(this, e, c ? g.html()  : b),
                        g.domManip(a, c, d)
                });
                if (this[0]) {
                    if (i = j && j.parentNode, e = f.support.parentNode && i && 11 === i.nodeType && i.childNodes.length === this.length ? {
                            fragment: i
                        }
                            : f.buildFragment(a, this, k), h = e.fragment, g = 1 === h.childNodes.length ? h = h.firstChild : h.firstChild, g) {
                        c = c && f.nodeName(g, 'tr');
                        for (var l = 0, m = this.length, n = m - 1; m > l; l++) d.call(c ? bi(this[l], g)  : this[l], e.cacheable || m > 1 && n > l ? f.clone(h, !0, !0)  : h)
                    }
                    k.length && f.each(k, function (a, b) {
                        b.src ? f.ajax({
                            type: 'GET',
                            global: !1,
                            url: b.src,
                            async: !1,
                            dataType: 'script'
                        })  : f.globalEval((b.text || b.textContent || b.innerHTML || '').replace(bf, '/*$0*/')),
                        b.parentNode && b.parentNode.removeChild(b)
                    })
                }
                return this
            }
        }),
        f.buildFragment = function (a, b, d) {
            var e,
                g,
                h,
                i,
                j = a[0];
            return b && b[0] && (i = b[0].ownerDocument || b[0]),
            i.createDocumentFragment || (i = c),
            1 === a.length && 'string' == typeof j && j.length < 512 && i === c && '<' === j.charAt(0) && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0, h = f.fragments[j], h && 1 !== h && (e = h)),
            e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)),
            g && (f.fragments[j] = h ? e : 1),
            {
                fragment: e,
                cacheable: g
            }
        },
        f.fragments = {
        },
        f.each({
            appendTo: 'append',
            prependTo: 'prepend',
            insertBefore: 'before',
            insertAfter: 'after',
            replaceAll: 'replaceWith'
        }, function (a, b) {
            f.fn[a] = function (c) {
                var d = [
                    ],
                    e = f(c),
                    g = 1 === this.length && this[0].parentNode;
                if (g && 11 === g.nodeType && 1 === g.childNodes.length && 1 === e.length) return e[b](this[0]),
                    this;
                for (var h = 0, i = e.length; i > h; h++) {
                    var j = (h > 0 ? this.clone(!0)  : this).get();
                    f(e[h]) [b](j),
                        d = d.concat(j)
                }
                return this.pushStack(d, a, e.selector)
            }
        }),
        f.extend({
            clone: function (a, b, c) {
                var d,
                    e,
                    g,
                    h = f.support.html5Clone || f.isXMLDoc(a) || !bc.test('<' + a.nodeName + '>') ? a.cloneNode(!0)  : bo(a);
                if (!(f.support.noCloneEvent && f.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || f.isXMLDoc(a))) for (bk(a, h), d = bl(a), e = bl(h), g = 0; d[g]; ++g) e[g] && bk(d[g], e[g]);
                if (b && (bj(a, h), c)) for (d = bl(a), e = bl(h), g = 0; d[g]; ++g) bj(d[g], e[g]);
                return d = e = null,
                    h
            },
            clean: function (a, b, d, e) {
                var g,
                    h,
                    i,
                    j = [
                    ];
                b = b || c,
                'undefined' == typeof b.createElement && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
                for (var l, k = 0; null != (l = a[k]); k++) if ('number' == typeof l && (l += ''), l) {
                    if ('string' == typeof l) if (_.test(l)) {
                        l = l.replace(Y, '<$1></$2>');
                        var r,
                            m = (Z.exec(l) || ['',
                                '']) [1].toLowerCase(),
                            n = bg[m] || bg._default,
                            o = n[0],
                            p = b.createElement('div'),
                            q = bh.childNodes;
                        for (b === c ? bh.appendChild(p)  : U(b).appendChild(p), p.innerHTML = n[1] + l + n[2]; o--; ) p = p.lastChild;
                        if (!f.support.tbody) {
                            var s = $.test(l),
                                t = 'table' !== m || s ? '<table>' !== n[1] || s ? [
                                ] : p.childNodes : p.firstChild && p.firstChild.childNodes;
                            for (i = t.length - 1; i >= 0; --i) f.nodeName(t[i], 'tbody') && !t[i].childNodes.length && t[i].parentNode.removeChild(t[i])
                        }
                        !f.support.leadingWhitespace && X.test(l) && p.insertBefore(b.createTextNode(X.exec(l) [0]), p.firstChild),
                            l = p.childNodes,
                        p && (p.parentNode.removeChild(p), q.length > 0 && (r = q[q.length - 1], r && r.parentNode && r.parentNode.removeChild(r)))
                    } else l = b.createTextNode(l);
                    var u;
                    if (!f.support.appendChecked) if (l[0] && 'number' == typeof (u = l.length)) for (i = 0; u > i; i++) bn(l[i]);
                    else bn(l);
                    l.nodeType ? j.push(l)  : j = f.merge(j, l)
                }
                if (d) for (g = function (a) {
                    return !a.type || be.test(a.type)
                }, k = 0; j[k]; k++) if (h = j[k], e && f.nodeName(h, 'script') && (!h.type || be.test(h.type))) e.push(h.parentNode ? h.parentNode.removeChild(h)  : h);
                else {
                    if (1 === h.nodeType) {
                        var v = f.grep(h.getElementsByTagName('script'), g);
                        j.splice.apply(j, [
                            k + 1,
                            0
                        ].concat(v))
                    }
                    d.appendChild(h)
                }
                return j
            },
            cleanData: function (a) {
                for (var b, c, i, d = f.cache, e = f.event.special, g = f.support.deleteExpando, h = 0; null != (i = a[h]); h++) if ((!i.nodeName || !f.noData[i.nodeName.toLowerCase()]) && (c = i[f.expando])) {
                    if (b = d[c], b && b.events) {
                        for (var j in b.events) e[j] ? f.event.remove(i, j)  : f.removeEvent(i, j, b.handle);
                        b.handle && (b.handle.elem = null)
                    }
                    g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando),
                        delete d[c]
                }
            }
        });
    var by,
        bz,
        bA,
        bp = /alpha\([^)]*\)/i,
        bq = /opacity=([^)]*)/,
        br = /([A-Z]|^ms)/g,
        bs = /^[\-+]?(?:\d*\.)?\d+$/i,
        bt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
        bu = /^([\-+])=([\-+.\de]+)/,
        bv = /^margin/,
        bw = {
            position: 'absolute',
            visibility: 'hidden',
            display: 'block'
        },
        bx = [
            'Top',
            'Right',
            'Bottom',
            'Left'
        ];
    f.fn.css = function (a, c) {
        return f.access(this, function (a, c, d) {
            return d !== b ? f.style(a, c, d)  : f.css(a, c)
        }, a, c, arguments.length > 1)
    },
        f.extend({
            cssHooks: {
                opacity: {
                    get: function (a, b) {
                        if (b) {
                            var c = by(a, 'opacity');
                            return '' === c ? '1' : c
                        }
                        return a.style.opacity
                    }
                }
            },
            cssNumber: {
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                'float': f.support.cssFloat ? 'cssFloat' : 'styleFloat'
            },
            style: function (a, c, d, e) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var g,
                        h,
                        i = f.camelCase(c),
                        j = a.style,
                        k = f.cssHooks[i];
                    if (c = f.cssProps[i] || i, d === b) return k && 'get' in k && (g = k.get(a, !1, e)) !== b ? g : j[c];
                    if (h = typeof d, 'string' === h && (g = bu.exec(d)) && (d = + (g[1] + 1) * + g[2] + parseFloat(f.css(a, c)), h = 'number'), null == d || 'number' === h && isNaN(d)) return;
                    if ('number' === h && !f.cssNumber[i] && (d += 'px'), !(k && 'set' in k && (d = k.set(a, d)) === b)) try {
                        j[c] = d
                    } catch (l) {
                    }
                }
            },
            css: function (a, c, d) {
                var e,
                    g;
                return c = f.camelCase(c),
                    g = f.cssHooks[c],
                    c = f.cssProps[c] || c,
                'cssFloat' === c && (c = 'float'),
                    g && 'get' in g && (e = g.get(a, !0, d)) !== b ? e : by ? by(a, c)  : void 0
            },
            swap: function (a, b, c) {
                var e,
                    f,
                    d = {
                    };
                for (f in b) d[f] = a.style[f],
                    a.style[f] = b[f];
                e = c.call(a);
                for (f in b) a.style[f] = d[f];
                return e
            }
        }),
        f.curCSS = f.css,
    c.defaultView && c.defaultView.getComputedStyle && (bz = function (a, b) {
        var c,
            d,
            e,
            g,
            h = a.style;
        return b = b.replace(br, '-$1').toLowerCase(),
        (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), '' === c && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b))),
        !f.support.pixelMargin && e && bv.test(b) && bt.test(c) && (g = h.width, h.width = c, c = e.width, h.width = g),
            c
    }),
    c.documentElement.currentStyle && (bA = function (a, b) {
        var c,
            d,
            e,
            f = a.currentStyle && a.currentStyle[b],
            g = a.style;
        return null == f && g && (e = g[b]) && (f = e),
        bt.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = 'fontSize' === b ? '1em' : f, f = g.pixelLeft + 'px', g.left = c, d && (a.runtimeStyle.left = d)),
            '' === f ? 'auto' : f
    }),
        by = bz || bA,
        f.each(['height',
            'width'], function (a, b) {
            f.cssHooks[b] = {
                get: function (a, c, d) {
                    return c ? 0 !== a.offsetWidth ? bB(a, b, d)  : f.swap(a, bw, function () {
                        return bB(a, b, d)
                    })  : void 0
                },
                set: function (a, b) {
                    return bs.test(b) ? b + 'px' : b
                }
            }
        }),
    f.support.opacity || (f.cssHooks.opacity = {
        get: function (a, b) {
            return bq.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || '') ? parseFloat(RegExp.$1) / 100 + '' : b ? '1' : ''
        },
        set: function (a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = f.isNumeric(b) ? 'alpha(opacity=' + 100 * b + ')' : '',
                g = d && d.filter || c.filter || '';
            c.zoom = 1,
            b >= 1 && '' === f.trim(g.replace(bp, '')) && (c.removeAttribute('filter'), d && !d.filter) || (c.filter = bp.test(g) ? g.replace(bp, e)  : g + ' ' + e)
        }
    }),
        f(function () {
            f.support.reliableMarginRight || (f.cssHooks.marginRight = {
                get: function (a, b) {
                    return f.swap(a, {
                        display: 'inline-block'
                    }, function () {
                        return b ? by(a, 'margin-right')  : a.style.marginRight
                    })
                }
            })
        }),
    f.expr && f.expr.filters && (f.expr.filters.hidden = function (a) {
        var b = a.offsetWidth,
            c = a.offsetHeight;
        return 0 === b && 0 === c || !f.support.reliableHiddenOffsets && 'none' === (a.style && a.style.display || f.css(a, 'display'))
    }, f.expr.filters.visible = function (a) {
        return !f.expr.filters.hidden(a)
    }),
        f.each({
            margin: '',
            padding: '',
            border: 'Width'
        }, function (a, b) {
            f.cssHooks[a + b] = {
                expand: function (c) {
                    var d,
                        e = 'string' == typeof c ? c.split(' ')  : [
                            c
                        ],
                        f = {
                        };
                    for (d = 0; 4 > d; d++) f[a + bx[d] + b] = e[d] || e[d - 2] || e[0];
                    return f
                }
            }
        });
    var bU,
        bV,
        bC = /%20/g,
        bD = /\[\]$/,
        bE = /\r?\n/g,
        bF = /#.*$/,
        bG = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        bH = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        bI = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        bJ = /^(?:GET|HEAD)$/,
        bK = /^\/\//,
        bL = /\?/,
        bM = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        bN = /^(?:select|textarea)/i,
        bO = /\s+/,
        bP = /([?&])_=[^&]*/,
        bQ = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        bR = f.fn.load,
        bS = {
        },
        bT = {
        },
        bW = [
                '*/'
            ] + ['*'];
    try {
        bU = e.href
    } catch (bX) {
        bU = c.createElement('a'),
            bU.href = '',
            bU = bU.href
    }
    bV = bQ.exec(bU.toLowerCase()) || [],
        f.fn.extend({
            load: function (a, c, d) {
                if ('string' != typeof a && bR) return bR.apply(this, arguments);
                if (!this.length) return this;
                var e = a.indexOf(' ');
                if (e >= 0) {
                    var g = a.slice(e, a.length);
                    a = a.slice(0, e)
                }
                var h = 'GET';
                c && (f.isFunction(c) ? (d = c, c = b)  : 'object' == typeof c && (c = f.param(c, f.ajaxSettings.traditional), h = 'POST'));
                var i = this;
                return f.ajax({
                    url: a,
                    type: h,
                    dataType: 'html',
                    data: c,
                    complete: function (a, b, c) {
                        c = a.responseText,
                        a.isResolved() && (a.done(function (a) {
                            c = a
                        }), i.html(g ? f('<div>').append(c.replace(bM, '')).find(g)  : c)),
                        d && i.each(d, [
                            c,
                            b,
                            a
                        ])
                    }
                }),
                    this
            },
            serialize: function () {
                return f.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    return this.elements ? f.makeArray(this.elements)  : this
                }).filter(function () {
                    return this.name && !this.disabled && (this.checked || bN.test(this.nodeName) || bH.test(this.type))
                }).map(function (a, b) {
                    var c = f(this).val();
                    return null == c ? null : f.isArray(c) ? f.map(c, function (a) {
                        return {
                            name: b.name,
                            value: a.replace(bE, '\r\n')
                        }
                    })  : {
                        name: b.name,
                        value: c.replace(bE, '\r\n')
                    }
                }).get()
            }
        }),
        f.each('ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend'.split(' '), function (a, b) {
            f.fn[b] = function (a) {
                return this.on(b, a)
            }
        }),
        f.each(['get',
            'post'], function (a, c) {
            f[c] = function (a, d, e, g) {
                return f.isFunction(d) && (g = g || e, e = d, d = b),
                    f.ajax({
                        type: c,
                        url: a,
                        data: d,
                        success: e,
                        dataType: g
                    })
            }
        }),
        f.extend({
            getScript: function (a, c) {
                return f.get(a, b, c, 'script')
            },
            getJSON: function (a, b, c) {
                return f.get(a, b, c, 'json')
            },
            ajaxSetup: function (a, b) {
                return b ? b$(a, f.ajaxSettings)  : (b = a, a = f.ajaxSettings),
                    b$(a, b),
                    a
            },
            ajaxSettings: {
                url: bU,
                isLocal: bI.test(bV[1]),
                global: !0,
                type: 'GET',
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                processData: !0,
                async: !0,
                accepts: {
                    xml: 'application/xml, text/xml',
                    html: 'text/html',
                    text: 'text/plain',
                    json: 'application/json, text/javascript',
                    '*': bW
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: 'responseXML',
                    text: 'responseText'
                },
                converters: {
                    '* text': a.String,
                    'text html': !0,
                    'text json': f.parseJSON,
                    'text xml': f.parseXML
                },
                flatOptions: {
                    context: !0,
                    url: !0
                }
            },
            ajaxPrefilter: bY(bS),
            ajaxTransport: bY(bT),
            ajax: function (a, c) {
                function w(a, c, l, m) {
                    if (2 !== s) {
                        s = 2,
                        q && clearTimeout(q),
                            p = b,
                            n = m || '',
                            v.readyState = a > 0 ? 4 : 0;
                        var o,
                            r,
                            u,
                            y,
                            z,
                            w = c,
                            x = l ? ca(d, v, l)  : b;
                        if (a >= 200 && 300 > a || 304 === a) if (d.ifModified && ((y = v.getResponseHeader('Last-Modified')) && (f.lastModified[k] = y), (z = v.getResponseHeader('Etag')) && (f.etag[k] = z)), 304 === a) w = 'notmodified',
                            o = !0;
                        else try {
                                r = cb(d, x),
                                    w = 'success',
                                    o = !0
                            } catch (A) {
                                w = 'parsererror',
                                    u = A
                            } else u = w,
                        (!w || a) && (w = 'error', 0 > a && (a = 0));
                        v.status = a,
                            v.statusText = '' + (c || w),
                            o ? h.resolveWith(e, [
                                r,
                                w,
                                v
                            ])  : h.rejectWith(e, [
                                v,
                                w,
                                u
                            ]),
                            v.statusCode(j),
                            j = b,
                        t && g.trigger('ajax' + (o ? 'Success' : 'Error'), [
                            v,
                            d,
                            o ? r : u
                        ]),
                            i.fireWith(e, [
                                v,
                                w
                            ]),
                        t && (g.trigger('ajaxComplete', [
                            v,
                            d
                        ]), --f.active || f.event.trigger('ajaxStop'))
                    }
                }
                'object' == typeof a && (c = a, a = b),
                    c = c || {
                        };
                var k,
                    n,
                    o,
                    p,
                    q,
                    r,
                    t,
                    u,
                    d = f.ajaxSetup({
                    }, c),
                    e = d.context || d,
                    g = e !== d && (e.nodeType || e instanceof f) ? f(e)  : f.event,
                    h = f.Deferred(),
                    i = f.Callbacks('once memory'),
                    j = d.statusCode || {
                        },
                    l = {
                    },
                    m = {
                    },
                    s = 0,
                    v = {
                        readyState: 0,
                        setRequestHeader: function (a, b) {
                            if (!s) {
                                var c = a.toLowerCase();
                                a = m[c] = m[c] || a,
                                    l[a] = b
                            }
                            return this
                        },
                        getAllResponseHeaders: function () {
                            return 2 === s ? n : null
                        },
                        getResponseHeader: function (a) {
                            var c;
                            if (2 === s) {
                                if (!o) for (o = {
                                }; c = bG.exec(n); ) o[c[1].toLowerCase()] = c[2];
                                c = o[a.toLowerCase()]
                            }
                            return c === b ? null : c
                        },
                        overrideMimeType: function (a) {
                            return s || (d.mimeType = a),
                                this
                        },
                        abort: function (a) {
                            return a = a || 'abort',
                            p && p.abort(a),
                                w(0, a),
                                this
                        }
                    };
                if (h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode = function (a) {
                        if (a) {
                            var b;
                            if (2 > s) for (b in a) j[b] = [
                                j[b],
                                a[b]
                            ];
                            else b = a[v.status],
                                v.then(b, b)
                        }
                        return this
                    }, d.url = ((a || d.url) + '').replace(bF, '').replace(bK, bV[1] + '//'), d.dataTypes = f.trim(d.dataType || '*').toLowerCase().split(bO), null == d.crossDomain && (r = bQ.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bV[1] && r[2] == bV[2] && (r[3] || ('http:' === r[1] ? 80 : 443)) == (bV[3] || ('http:' === bV[1] ? 80 : 443)))), d.data && d.processData && 'string' != typeof d.data && (d.data = f.param(d.data, d.traditional)), bZ(bS, d, c, v), 2 === s) return !1;
                if (t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bJ.test(d.type), t && 0 === f.active++ && f.event.trigger('ajaxStart'), !d.hasContent && (d.data && (d.url += (bL.test(d.url) ? '&' : '?') + d.data, delete d.data), k = d.url, d.cache === !1)) {
                    var x = f.now(),
                        y = d.url.replace(bP, '$1_=' + x);
                    d.url = y + (y === d.url ? (bL.test(d.url) ? '&' : '?') + '_=' + x : '')
                }(d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader('Content-Type', d.contentType),
                d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader('If-Modified-Since', f.lastModified[k]), f.etag[k] && v.setRequestHeader('If-None-Match', f.etag[k])),
                    v.setRequestHeader('Accept', d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ('*' !== d.dataTypes[0] ? ', ' + bW + '; q=0.01' : '')  : d.accepts['*']);
                for (u in d.headers) v.setRequestHeader(u, d.headers[u]);
                if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || 2 === s)) return v.abort(),
                    !1;
                for (u in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[u](d[u]);
                if (p = bZ(bT, d, c, v)) {
                    v.readyState = 1,
                    t && g.trigger('ajaxSend', [
                        v,
                        d
                    ]),
                    d.async && d.timeout > 0 && (q = setTimeout(function () {
                        v.abort('timeout')
                    }, d.timeout));
                    try {
                        s = 1,
                            p.send(l, w)
                    } catch (z) {
                        if (!(2 > s)) throw z;
                        w( - 1, z)
                    }
                } else w( - 1, 'No Transport');
                return v
            },
            param: function (a, c) {
                var d = [
                    ],
                    e = function (a, b) {
                        b = f.isFunction(b) ? b()  : b,
                            d[d.length] = encodeURIComponent(a) + '=' + encodeURIComponent(b)
                    };
                if (c === b && (c = f.ajaxSettings.traditional), f.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a, function () {
                    e(this.name, this.value)
                });
                else for (var g in a) b_(g, a[g], c, e);
                return d.join('&').replace(bC, '+')
            }
        }),
        f.extend({
            active: 0,
            lastModified: {
            },
            etag: {
            }
        });
    var cc = f.now(),
        cd = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
        jsonp: 'callback',
        jsonpCallback: function () {
            return f.expando + '_' + cc++
        }
    }),
        f.ajaxPrefilter('json jsonp', function (b, c, d) {
            var e = 'string' == typeof b.data && /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
            if ('jsonp' === b.dataTypes[0] || b.jsonp !== !1 && (cd.test(b.url) || e && cd.test(b.data))) {
                var g,
                    h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback()  : b.jsonpCallback,
                    i = a[h],
                    j = b.url,
                    k = b.data,
                    l = '$1' + h + '$2';
                return b.jsonp !== !1 && (j = j.replace(cd, l), b.url === j && (e && (k = k.replace(cd, l)), b.data === k && (j += (/\?/.test(j) ? '&' : '?') + b.jsonp + '=' + h))),
                    b.url = j,
                    b.data = k,
                    a[h] = function (a) {
                        g = [
                            a
                        ]
                    },
                    d.always(function () {
                        a[h] = i,
                        g && f.isFunction(i) && a[h](g[0])
                    }),
                    b.converters['script json'] = function () {
                        return g || f.error(h + ' was not called'),
                            g[0]
                    },
                    b.dataTypes[0] = 'json',
                    'script'
            }
        }),
        f.ajaxSetup({
            accepts: {
                script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
            },
            contents: {
                script: /javascript|ecmascript/
            },
            converters: {
                'text script': function (a) {
                    return f.globalEval(a),
                        a
                }
            }
        }),
        f.ajaxPrefilter('script', function (a) {
            a.cache === b && (a.cache = !1),
            a.crossDomain && (a.type = 'GET', a.global = !1)
        }),
        f.ajaxTransport('script', function (a) {
            if (a.crossDomain) {
                var d,
                    e = c.head || c.getElementsByTagName('head') [0] || c.documentElement;
                return {
                    send: function (f, g) {
                        d = c.createElement('script'),
                            d.async = 'async',
                        a.scriptCharset && (d.charset = a.scriptCharset),
                            d.src = a.url,
                            d.onload = d.onreadystatechange = function (a, c) {
                                (c || !d.readyState || /loaded|complete/.test(d.readyState)) && (d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, 'success'))
                            },
                            e.insertBefore(d, e.firstChild)
                    },
                    abort: function () {
                        d && d.onload(0, 1)
                    }
                }
            }
        });
    var cg,
        ce = a.ActiveXObject ? function () {
            for (var a in cg) cg[a](0, 1)
        }
            : !1,
        cf = 0;
    f.ajaxSettings.xhr = a.ActiveXObject ? function () {
        return !this.isLocal && ch() || ci()
    }
        : ch,
        function (a) {
            f.extend(f.support, {
                ajax: !!a,
                cors: !!a && 'withCredentials' in a
            })
        }(f.ajaxSettings.xhr()),
    f.support.ajax && f.ajaxTransport(function (c) {
        if (!c.crossDomain || f.support.cors) {
            var d;
            return {
                send: function (e, g) {
                    var i,
                        j,
                        h = c.xhr();
                    if (c.username ? h.open(c.type, c.url, c.async, c.username, c.password)  : h.open(c.type, c.url, c.async), c.xhrFields) for (j in c.xhrFields) h[j] = c.xhrFields[j];
                    c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType),
                    !c.crossDomain && !e['X-Requested-With'] && (e['X-Requested-With'] = 'XMLHttpRequest');
                    try {
                        for (j in e) h.setRequestHeader(j, e[j])
                    } catch (k) {
                    }
                    h.send(c.hasContent && c.data || null),
                        d = function (a, e) {
                            var j,
                                k,
                                l,
                                m,
                                n;
                            try {
                                if (d && (e || 4 === h.readyState)) if (d = b, i && (h.onreadystatechange = f.noop, ce && delete cg[i]), e) 4 !== h.readyState && h.abort();
                                else {
                                    j = h.status,
                                        l = h.getAllResponseHeaders(),
                                        m = {
                                        },
                                        n = h.responseXML,
                                    n && n.documentElement && (m.xml = n);
                                    try {
                                        m.text = h.responseText
                                    } catch (a) {
                                    }
                                    try {
                                        k = h.statusText
                                    } catch (o) {
                                        k = ''
                                    }
                                    j || !c.isLocal || c.crossDomain ? 1223 === j && (j = 204)  : j = m.text ? 200 : 404
                                }
                            } catch (p) {
                                e || g( - 1, p)
                            }
                            m && g(j, k, m, l)
                        },
                        c.async && 4 !== h.readyState ? (i = ++cf, ce && (cg || (cg = {
                        }, f(a).unload(ce)), cg[i] = d), h.onreadystatechange = d)  : d()
                },
                abort: function () {
                    d && d(0, 1)
                }
            }
        }
    });
    var ck,
        cl,
        co,
        cq,
        cj = {
        },
        cm = /^(?:toggle|show|hide)$/,
        cn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        cp = [
            ['height',
                'marginTop',
                'marginBottom',
                'paddingTop',
                'paddingBottom'],
            [
                'width',
                'marginLeft',
                'marginRight',
                'paddingLeft',
                'paddingRight'
            ],
            [
                'opacity'
            ]
        ];
    f.fn.extend({
        show: function (a, b, c) {
            var d,
                e;
            if (a || 0 === a) return this.animate(ct('show', 3), a, b, c);
            for (var g = 0, h = this.length; h > g; g++) d = this[g],
            d.style && (e = d.style.display, !f._data(d, 'olddisplay') && 'none' === e && (e = d.style.display = ''), ('' === e && 'none' === f.css(d, 'display') || !f.contains(d.ownerDocument.documentElement, d)) && f._data(d, 'olddisplay', cu(d.nodeName)));
            for (g = 0; h > g; g++) d = this[g],
            d.style && (e = d.style.display, ('' === e || 'none' === e) && (d.style.display = f._data(d, 'olddisplay') || ''));
            return this
        },
        hide: function (a, b, c) {
            if (a || 0 === a) return this.animate(ct('hide', 3), a, b, c);
            for (var d, e, g = 0, h = this.length; h > g; g++) d = this[g],
            d.style && (e = f.css(d, 'display'), 'none' !== e && !f._data(d, 'olddisplay') && f._data(d, 'olddisplay', e));
            for (g = 0; h > g; g++) this[g].style && (this[g].style.display = 'none');
            return this
        },
        _toggle: f.fn.toggle,
        toggle: function (a, b, c) {
            var d = 'boolean' == typeof a;
            return f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments)  : null == a || d ? this.each(function () {
                var b = d ? a : f(this).is(':hidden');
                f(this) [b ? 'show' : 'hide']()
            })  : this.animate(ct('toggle', 3), a, b, c),
                this
        },
        fadeTo: function (a, b, c, d) {
            return this.filter(':hidden').css('opacity', 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function (a, b, c, d) {
            function g() {
                e.queue === !1 && f._mark(this);
                var g,
                    h,
                    i,
                    j,
                    k,
                    l,
                    m,
                    n,
                    o,
                    p,
                    q,
                    b = f.extend({
                    }, e),
                    c = 1 === this.nodeType,
                    d = c && f(this).is(':hidden');
                b.animatedProperties = {
                };
                for (i in a) if (g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]), (k = f.cssHooks[g]) && 'expand' in k) {
                    l = k.expand(a[g]),
                        delete a[g];
                    for (i in l) i in a || (a[i] = l[i])
                }
                for (g in a) {
                    if (h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0])  : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || 'swing', 'hide' === h && d || 'show' === h && !d) return b.complete.call(this);
                    c && ('height' === g || 'width' === g) && (b.overflow = [
                        this.style.overflow,
                        this.style.overflowX,
                        this.style.overflowY
                    ], 'inline' === f.css(this, 'display') && 'none' === f.css(this, 'float') && (f.support.inlineBlockNeedsLayout && 'inline' !== cu(this.nodeName) ? this.style.zoom = 1 : this.style.display = 'inline-block'))
                }
                null != b.overflow && (this.style.overflow = 'hidden');
                for (i in a) j = new f.fx(this, b, i),
                    h = a[i],
                    cm.test(h) ? (q = f._data(this, 'toggle' + i) || ('toggle' === h ? d ? 'show' : 'hide' : 0), q ? (f._data(this, 'toggle' + i, 'show' === q ? 'hide' : 'show'), j[q]())  : j[h]())  : (m = cn.exec(h), n = j.cur(), m ? (o = parseFloat(m[2]), p = m[3] || (f.cssNumber[i] ? '' : 'px'), 'px' !== p && (f.style(this, i, (o || 1) + p), n = (o || 1) / j.cur() * n, f.style(this, i, n + p)), m[1] && (o = ('-=' === m[1] ? - 1 : 1) * o + n), j.custom(n, o, p))  : j.custom(n, h, ''));
                return !0
            }
            var e = f.speed(b, c, d);
            return f.isEmptyObject(a) ? this.each(e.complete, [
                !1
            ])  : (a = f.extend({
            }, a), e.queue === !1 ? this.each(g)  : this.queue(e.queue, g))
        },
        stop: function (a, c, d) {
            return 'string' != typeof a && (d = c, c = a, a = b),
            c && a !== !1 && this.queue(a || 'fx', [
            ]),
                this.each(function () {
                    function h(a, b, c) {
                        var e = b[c];
                        f.removeData(a, c, !0),
                            e.stop(d)
                    }
                    var b,
                        c = !1,
                        e = f.timers,
                        g = f._data(this);
                    if (d || f._unmark(!0, this), null == a) for (b in g) g[b] && g[b].stop && b.indexOf('.run') === b.length - 4 && h(this, g, b);
                    else g[b = a + '.run'] && g[b].stop && h(this, g, b);
                    for (b = e.length; b--; ) e[b].elem === this && (null == a || e[b].queue === a) && (d ? e[b](!0)  : e[b].saveState(), c = !0, e.splice(b, 1));
                    (!d || !c) && f.dequeue(this, a)
                })
        }
    }),
        f.each({
            slideDown: ct('show', 1),
            slideUp: ct('hide', 1),
            slideToggle: ct('toggle', 1),
            fadeIn: {
                opacity: 'show'
            },
            fadeOut: {
                opacity: 'hide'
            },
            fadeToggle: {
                opacity: 'toggle'
            }
        }, function (a, b) {
            f.fn[a] = function (a, c, d) {
                return this.animate(b, a, c, d)
            }
        }),
        f.extend({
            speed: function (a, b, c) {
                var d = a && 'object' == typeof a ? f.extend({
                }, a)  : {
                    complete: c || !c && b || f.isFunction(a) && a,
                    duration: a,
                    easing: c && b || b && !f.isFunction(b) && b
                };
                return d.duration = f.fx.off ? 0 : 'number' == typeof d.duration ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default,
                (null == d.queue || d.queue === !0) && (d.queue = 'fx'),
                    d.old = d.complete,
                    d.complete = function (a) {
                        f.isFunction(d.old) && d.old.call(this),
                            d.queue ? f.dequeue(this, d.queue)  : a !== !1 && f._unmark(this)
                    },
                    d
            },
            easing: {
                linear: function (a) {
                    return a
                },
                swing: function (a) {
                    return - Math.cos(a * Math.PI) / 2 + 0.5
                }
            },
            timers: [
            ],
            fx: function (a, b, c) {
                this.options = b,
                    this.elem = a,
                    this.prop = c,
                    b.orig = b.orig || {
                        }
            }
        }),
        f.fx.prototype = {
            update: function () {
                this.options.step && this.options.step.call(this.elem, this.now, this),
                    (f.fx.step[this.prop] || f.fx.step._default) (this)
            },
            cur: function () {
                if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
                var a,
                    b = f.css(this.elem, this.prop);
                return isNaN(a = parseFloat(b)) ? b && 'auto' !== b ? b : 0 : a
            },
            custom: function (a, c, d) {
                function h(a) {
                    return e.step(a)
                }
                var e = this,
                    g = f.fx;
                this.startTime = cq || cr(),
                    this.end = c,
                    this.now = this.start = a,
                    this.pos = this.state = 0,
                    this.unit = d || this.unit || (f.cssNumber[this.prop] ? '' : 'px'),
                    h.queue = this.options.queue,
                    h.elem = this.elem,
                    h.saveState = function () {
                        f._data(e.elem, 'fxshow' + e.prop) === b && (e.options.hide ? f._data(e.elem, 'fxshow' + e.prop, e.start)  : e.options.show && f._data(e.elem, 'fxshow' + e.prop, e.end))
                    },
                h() && f.timers.push(h) && !co && (co = setInterval(g.tick, g.interval))
            },
            show: function () {
                var a = f._data(this.elem, 'fxshow' + this.prop);
                this.options.orig[this.prop] = a || f.style(this.elem, this.prop),
                    this.options.show = !0,
                    a !== b ? this.custom(this.cur(), a)  : this.custom('width' === this.prop || 'height' === this.prop ? 1 : 0, this.cur()),
                    f(this.elem).show()
            },
            hide: function () {
                this.options.orig[this.prop] = f._data(this.elem, 'fxshow' + this.prop) || f.style(this.elem, this.prop),
                    this.options.hide = !0,
                    this.custom(this.cur(), 0)
            },
            step: function (a) {
                var b,
                    c,
                    d,
                    e = cq || cr(),
                    g = !0,
                    h = this.elem,
                    i = this.options;
                if (a || e >= i.duration + this.startTime) {
                    this.now = this.end,
                        this.pos = this.state = 1,
                        this.update(),
                        i.animatedProperties[this.prop] = !0;
                    for (b in i.animatedProperties) i.animatedProperties[b] !== !0 && (g = !1);
                    if (g) {
                        if (null != i.overflow && !f.support.shrinkWrapBlocks && f.each(['',
                                'X',
                                'Y'], function (a, b) {
                                h.style['overflow' + b] = i.overflow[a]
                            }), i.hide && f(h).hide(), i.hide || i.show) for (b in i.animatedProperties) f.style(h, b, i.orig[b]),
                            f.removeData(h, 'fxshow' + b, !0),
                            f.removeData(h, 'toggle' + b, !0);
                        d = i.complete,
                        d && (i.complete = !1, d.call(h))
                    }
                    return !1
                }
                return 1 / 0 == i.duration ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos),
                    this.update(),
                    !0
            }
        },
        f.extend(f.fx, {
            tick: function () {
                for (var a, b = f.timers, c = 0; c < b.length; c++) a = b[c],
                !a() && b[c] === a && b.splice(c--, 1);
                b.length || f.fx.stop()
            },
            interval: 13,
            stop: function () {
                clearInterval(co),
                    co = null
            },
            speeds: {
                slow: 600,
                fast: 200,
                _default: 400
            },
            step: {
                opacity: function (a) {
                    f.style(a.elem, 'opacity', a.now)
                },
                _default: function (a) {
                    a.elem.style && null != a.elem.style[a.prop] ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
                }
            }
        }),
        f.each(cp.concat.apply([], cp), function (a, b) {
            b.indexOf('margin') && (f.fx.step[b] = function (a) {
                f.style(a.elem, b, Math.max(0, a.now) + a.unit)
            })
        }),
    f.expr && f.expr.filters && (f.expr.filters.animated = function (a) {
        return f.grep(f.timers, function (b) {
            return a === b.elem
        }).length
    });
    var cv,
        cw = /^t(?:able|d|h)$/i,
        cx = /^(?:body|html)$/i;
    cv = 'getBoundingClientRect' in c.documentElement ? function (a, b, c, d) {
        try {
            d = a.getBoundingClientRect()
        } catch (e) {
        }
        if (!d || !f.contains(c, a)) return d ? {
            top: d.top,
            left: d.left
        }
            : {
            top: 0,
            left: 0
        };
        var g = b.body,
            h = cy(b),
            i = c.clientTop || g.clientTop || 0,
            j = c.clientLeft || g.clientLeft || 0,
            k = h.pageYOffset || f.support.boxModel && c.scrollTop || g.scrollTop,
            l = h.pageXOffset || f.support.boxModel && c.scrollLeft || g.scrollLeft,
            m = d.top + k - i,
            n = d.left + l - j;
        return {
            top: m,
            left: n
        }
    }
        : function (a, b, c) {
        for (var d, e = a.offsetParent, g = a, h = b.body, i = b.defaultView, j = i ? i.getComputedStyle(a, null)  : a.currentStyle, k = a.offsetTop, l = a.offsetLeft; (a = a.parentNode) && a !== h && a !== c && (!f.support.fixedPosition || 'fixed' !== j.position); ) d = i ? i.getComputedStyle(a, null)  : a.currentStyle,
            k -= a.scrollTop,
            l -= a.scrollLeft,
        a === e && (k += a.offsetTop, l += a.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(a.nodeName)) && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), g = e, e = a.offsetParent),
        f.support.subtractsBorderForOverflowNotVisible && 'visible' !== d.overflow && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0),
            j = d;
        return ('relative' === j.position || 'static' === j.position) && (k += h.offsetTop, l += h.offsetLeft),
        f.support.fixedPosition && 'fixed' === j.position && (k += Math.max(c.scrollTop, h.scrollTop), l += Math.max(c.scrollLeft, h.scrollLeft)),
        {
            top: k,
            left: l
        }
    },
        f.fn.offset = function (a) {
            if (arguments.length) return a === b ? this : this.each(function (b) {
                f.offset.setOffset(this, a, b)
            });
            var c = this[0],
                d = c && c.ownerDocument;
            return d ? c === d.body ? f.offset.bodyOffset(c)  : cv(c, d, d.documentElement)  : null
        },
        f.offset = {
            bodyOffset: function (a) {
                var b = a.offsetTop,
                    c = a.offsetLeft;
                return f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, 'marginTop')) || 0, c += parseFloat(f.css(a, 'marginLeft')) || 0),
                {
                    top: b,
                    left: c
                }
            },
            setOffset: function (a, b, c) {
                var d = f.css(a, 'position');
                'static' === d && (a.style.position = 'relative');
                var m,
                    n,
                    e = f(a),
                    g = e.offset(),
                    h = f.css(a, 'top'),
                    i = f.css(a, 'left'),
                    j = ('absolute' === d || 'fixed' === d) && f.inArray('auto', [
                            h,
                            i
                        ]) > - 1,
                    k = {
                    },
                    l = {
                    };
                j ? (l = e.position(), m = l.top, n = l.left)  : (m = parseFloat(h) || 0, n = parseFloat(i) || 0),
                f.isFunction(b) && (b = b.call(a, c, g)),
                null != b.top && (k.top = b.top - g.top + m),
                null != b.left && (k.left = b.left - g.left + n),
                    'using' in b ? b.using.call(a, k)  : e.css(k)
            }
        },
        f.fn.extend({
            position: function () {
                if (!this[0]) return null;
                var a = this[0],
                    b = this.offsetParent(),
                    c = this.offset(),
                    d = cx.test(b[0].nodeName) ? {
                        top: 0,
                        left: 0
                    }
                        : b.offset();
                return c.top -= parseFloat(f.css(a, 'marginTop')) || 0,
                    c.left -= parseFloat(f.css(a, 'marginLeft')) || 0,
                    d.top += parseFloat(f.css(b[0], 'borderTopWidth')) || 0,
                    d.left += parseFloat(f.css(b[0], 'borderLeftWidth')) || 0,
                {
                    top: c.top - d.top,
                    left: c.left - d.left
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var a = this.offsetParent || c.body; a && !cx.test(a.nodeName) && 'static' === f.css(a, 'position'); ) a = a.offsetParent;
                    return a
                })
            }
        }),
        f.each({
            scrollLeft: 'pageXOffset',
            scrollTop: 'pageYOffset'
        }, function (a, c) {
            var d = /Y/.test(c);
            f.fn[a] = function (e) {
                return f.access(this, function (a, e, g) {
                    var h = cy(a);
                    return g === b ? h ? c in h ? h[c] : f.support.boxModel && h.document.documentElement[e] || h.document.body[e] : a[e] : void (h ? h.scrollTo(d ? f(h).scrollLeft()  : g, d ? g : f(h).scrollTop())  : a[e] = g)
                }, a, e, arguments.length, null)
            }
        }),
        f.each({
            Height: 'height',
            Width: 'width'
        }, function (a, c) {
            var d = 'client' + a,
                e = 'scroll' + a,
                g = 'offset' + a;
            f.fn['inner' + a] = function () {
                var a = this[0];
                return a ? a.style ? parseFloat(f.css(a, c, 'padding'))  : this[c]()  : null
            },
                f.fn['outer' + a] = function (a) {
                    var b = this[0];
                    return b ? b.style ? parseFloat(f.css(b, c, a ? 'margin' : 'border'))  : this[c]()  : null
                },
                f.fn[c] = function (a) {
                    return f.access(this, function (a, c, h) {
                        var i,
                            j,
                            k,
                            l;
                        return f.isWindow(a) ? (i = a.document, j = i.documentElement[d], f.support.boxModel && j || i.body && i.body[d] || j)  : 9 === a.nodeType ? (i = a.documentElement, i[d] >= i[e] ? i[d] : Math.max(a.body[e], i[e], a.body[g], i[g]))  : h === b ? (k = f.css(a, c), l = parseFloat(k), f.isNumeric(l) ? l : k)  : void f(a).css(c, h)
                    }, c, a, arguments.length, null)
                }
        }),
        a.jQuery = a.$ = f,
    'function' == typeof define && define.amd && define.amd.jQuery && define('jquery', [
    ], function () {
        return f
    })
}(window),
    function ($) {
        $.cookie = function (key, value, options) {
            if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || null === value || void 0 === value)) {
                if (options = $.extend({
                    }, options), (null === value || void 0 === value) && (options.expires = - 1), 'number' == typeof options.expires) {
                    var days = options.expires,
                        t = options.expires = new Date;
                    t.setDate(t.getDate() + days)
                }
                return value = String(value),
                    document.cookie = [
                        encodeURIComponent(key),
                        '=',
                        options.raw ? value : encodeURIComponent(value),
                        options.expires ? '; expires=' + options.expires.toUTCString()  : '',
                        options.path ? '; path=' + options.path : '',
                        options.domain ? '; domain=' + options.domain : '',
                        options.secure ? '; secure' : ''
                    ].join('')
            }
            options = value || {
                };
            for (var pair, decode = options.raw ? function (s) {
                return s
            }
                : decodeURIComponent, pairs = document.cookie.split('; '), i = 0; pair = pairs[i] && pairs[i].split('='); i++) if (decode(pair[0]) === key) return decode(pair[1] || '');
            return null
        }
    }(jQuery),
    window.url = function () {
        function a(a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        }
        return function (b, c) {
            var d = c || window.location.toString();
            if (!b) return d;
            b = b.toString(),
                '//' === d.substring(0, 2) ? d = 'http:' + d : 1 === d.split('://').length && (d = 'http://' + d),
                c = d.split('/');
            var e = {
                    auth: ''
                },
                f = c[2].split('@');
            1 === f.length ? f = f[0].split(':')  : (e.auth = f[0], f = f[1].split(':')),
                e.protocol = c[0],
                e.hostname = f[0],
                e.port = f[1] || '80',
                e.pathname = (c.length > 3 ? '/' : '') + c.slice(3, c.length).join('/').split('?') [0].split('#') [0];
            var g = e.pathname;
            '/' === g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1));
            var h = e.hostname,
                i = h.split('.'),
                j = g.split('/');
            if ('hostname' === b) return h;
            if ('domain' === b) return i.slice( - 2).join('.');
            if ('sub' === b) return i.slice(0, i.length - 2).join('.');
            if ('port' === b) return e.port || '80';
            if ('protocol' === b) return e.protocol.split(':') [0];
            if ('auth' === b) return e.auth;
            if ('user' === b) return e.auth.split(':') [0];
            if ('pass' === b) return e.auth.split(':') [1] || '';
            if ('path' === b) return e.pathname;
            if ('.' === b.charAt(0)) {
                if (b = b.substring(1), a(b)) return b = parseInt(b, 10),
                i[0 > b ? i.length + b : b - 1] || ''
            } else {
                if (a(b)) return b = parseInt(b, 10),
                j[0 > b ? j.length + b : b] || '';
                if ('file' === b) return j.slice( - 1) [0];
                if ('filename' === b) return j.slice( - 1) [0].split('.') [0];
                if ('fileext' === b) return j.slice( - 1) [0].split('.') [1] || '';
                if ('?' === b.charAt(0) || '#' === b.charAt(0)) {
                    var k = d,
                        l = null;
                    if ('?' === b.charAt(0) ? k = (k.split('?') [1] || '').split('#') [0] : '#' === b.charAt(0) && (k = k.split('#') [1] || ''), !b.charAt(1)) return k;
                    b = b.substring(1),
                        k = k.split('&');
                    for (var m = 0, n = k.length; n > m; m++) if (l = k[m].split('='), l[0] === b) return l[1] || '';
                    return null
                }
            }
            return ''
        }
    }(),
'undefined' != typeof jQuery && jQuery.extend({
    url: function (a, b) {
        return window.url(a, b)
    }
}),
    function () {
        var n = this,
            t = n._,
            r = {
            },
            e = Array.prototype,
            u = Object.prototype,
            i = Function.prototype,
            a = e.push,
            o = e.slice,
            c = e.concat,
            l = u.toString,
            f = u.hasOwnProperty,
            s = e.forEach,
            p = e.map,
            h = e.reduce,
            v = e.reduceRight,
            d = e.filter,
            g = e.every,
            m = e.some,
            y = e.indexOf,
            b = e.lastIndexOf,
            x = Array.isArray,
            _ = Object.keys,
            j = i.bind,
            w = function (n) {
                return n instanceof w ? n : this instanceof w ? void (this._wrapped = n)  : new w(n)
            };
        'undefined' != typeof exports ? ('undefined' != typeof module && module.exports && (exports = module.exports = w), exports._ = w)  : n._ = w,
            w.VERSION = '1.4.4';
        var A = w.each = w.forEach = function (n, t, e) {
            if (null != n) if (s && n.forEach === s) n.forEach(t, e);
            else if (n.length === + n.length) {
                for (var u = 0, i = n.length; i > u; u++) if (t.call(e, n[u], u, n) === r) return
            } else for (var a in n) if (w.has(n, a) && t.call(e, n[a], a, n) === r) return
        };
        w.map = w.collect = function (n, t, r) {
            var e = [
            ];
            return null == n ? e : p && n.map === p ? n.map(t, r)  : (A(n, function (n, u, i) {
                e[e.length] = t.call(r, n, u, i)
            }), e)
        };
        var O = 'Reduce of empty array with no initial value';
        w.reduce = w.foldl = w.inject = function (n, t, r, e) {
            var u = arguments.length > 2;
            if (null == n && (n = [
                ]), h && n.reduce === h) return e && (t = w.bind(t, e)),
                u ? n.reduce(t, r)  : n.reduce(t);
            if (A(n, function (n, i, a) {
                    u ? r = t.call(e, r, n, i, a)  : (r = n, u = !0)
                }), !u) throw new TypeError(O);
            return r
        },
            w.reduceRight = w.foldr = function (n, t, r, e) {
                var u = arguments.length > 2;
                if (null == n && (n = [
                    ]), v && n.reduceRight === v) return e && (t = w.bind(t, e)),
                    u ? n.reduceRight(t, r)  : n.reduceRight(t);
                var i = n.length;
                if (i !== + i) {
                    var a = w.keys(n);
                    i = a.length
                }
                if (A(n, function (o, c, l) {
                        c = a ? a[--i] : --i,
                            u ? r = t.call(e, r, n[c], c, l)  : (r = n[c], u = !0)
                    }), !u) throw new TypeError(O);
                return r
            },
            w.find = w.detect = function (n, t, r) {
                var e;
                return E(n, function (n, u, i) {
                    return t.call(r, n, u, i) ? (e = n, !0)  : void 0
                }),
                    e
            },
            w.filter = w.select = function (n, t, r) {
                var e = [
                ];
                return null == n ? e : d && n.filter === d ? n.filter(t, r)  : (A(n, function (n, u, i) {
                    t.call(r, n, u, i) && (e[e.length] = n)
                }), e)
            },
            w.reject = function (n, t, r) {
                return w.filter(n, function (n, e, u) {
                    return !t.call(r, n, e, u)
                }, r)
            },
            w.every = w.all = function (n, t, e) {
                t || (t = w.identity);
                var u = !0;
                return null == n ? u : g && n.every === g ? n.every(t, e)  : (A(n, function (n, i, a) {
                    return (u = u && t.call(e, n, i, a)) ? void 0 : r
                }), !!u)
            };
        var E = w.some = w.any = function (n, t, e) {
            t || (t = w.identity);
            var u = !1;
            return null == n ? u : m && n.some === m ? n.some(t, e)  : (A(n, function (n, i, a) {
                return u || (u = t.call(e, n, i, a)) ? r : void 0
            }), !!u)
        };
        w.contains = w.include = function (n, t) {
            return null == n ? !1 : y && n.indexOf === y ? - 1 != n.indexOf(t)  : E(n, function (n) {
                return n === t
            })
        },
            w.invoke = function (n, t) {
                var r = o.call(arguments, 2),
                    e = w.isFunction(t);
                return w.map(n, function (n) {
                    return (e ? t : n[t]).apply(n, r)
                })
            },
            w.pluck = function (n, t) {
                return w.map(n, function (n) {
                    return n[t]
                })
            },
            w.where = function (n, t, r) {
                return w.isEmpty(t) ? r ? null : [
                ] : w[r ? 'find' : 'filter'](n, function (n) {
                    for (var r in t) if (t[r] !== n[r]) return !1;
                    return !0
                })
            },
            w.findWhere = function (n, t) {
                return w.where(n, t, !0)
            },
            w.max = function (n, t, r) {
                if (!t && w.isArray(n) && n[0] === + n[0] && 65535 > n.length) return Math.max.apply(Math, n);
                if (!t && w.isEmpty(n)) return - 1 / 0;
                var e = {
                    computed: - 1 / 0,
                    value: - 1 / 0
                };
                return A(n, function (n, u, i) {
                    var a = t ? t.call(r, n, u, i)  : n;
                    a >= e.computed && (e = {
                        value: n,
                        computed: a
                    })
                }),
                    e.value
            },
            w.min = function (n, t, r) {
                if (!t && w.isArray(n) && n[0] === + n[0] && 65535 > n.length) return Math.min.apply(Math, n);
                if (!t && w.isEmpty(n)) return 1 / 0;
                var e = {
                    computed: 1 / 0,
                    value: 1 / 0
                };
                return A(n, function (n, u, i) {
                    var a = t ? t.call(r, n, u, i)  : n;
                    e.computed > a && (e = {
                        value: n,
                        computed: a
                    })
                }),
                    e.value
            },
            w.shuffle = function (n) {
                var t,
                    r = 0,
                    e = [
                    ];
                return A(n, function (n) {
                    t = w.random(r++),
                        e[r - 1] = e[t],
                        e[t] = n
                }),
                    e
            };
        var k = function (n) {
            return w.isFunction(n) ? n : function (t) {
                return t[n]
            }
        };
        w.sortBy = function (n, t, r) {
            var e = k(t);
            return w.pluck(w.map(n, function (n, t, u) {
                return {
                    value: n,
                    index: t,
                    criteria: e.call(r, n, t, u)
                }
            }).sort(function (n, t) {
                var r = n.criteria,
                    e = t.criteria;
                if (r !== e) {
                    if (r > e || void 0 === r) return 1;
                    if (e > r || void 0 === e) return - 1
                }
                return n.index < t.index ? - 1 : 1
            }), 'value')
        };
        var F = function (n, t, r, e) {
            var u = {
                },
                i = k(t || w.identity);
            return A(n, function (t, a) {
                var o = i.call(r, t, a, n);
                e(u, o, t)
            }),
                u
        };
        w.groupBy = function (n, t, r) {
            return F(n, t, r, function (n, t, r) {
                (w.has(n, t) ? n[t] : n[t] = [
                ]).push(r)
            })
        },
            w.countBy = function (n, t, r) {
                return F(n, t, r, function (n, t) {
                    w.has(n, t) || (n[t] = 0),
                        n[t]++
                })
            },
            w.sortedIndex = function (n, t, r, e) {
                r = null == r ? w.identity : k(r);
                for (var u = r.call(e, t), i = 0, a = n.length; a > i; ) {
                    var o = i + a >>> 1;
                    u > r.call(e, n[o]) ? i = o + 1 : a = o
                }
                return i
            },
            w.toArray = function (n) {
                return n ? w.isArray(n) ? o.call(n)  : n.length === + n.length ? w.map(n, w.identity)  : w.values(n)  : [
                ]
            },
            w.size = function (n) {
                return null == n ? 0 : n.length === + n.length ? n.length : w.keys(n).length
            },
            w.first = w.head = w.take = function (n, t, r) {
                return null == n ? void 0 : null == t || r ? n[0] : o.call(n, 0, t)
            },
            w.initial = function (n, t, r) {
                return o.call(n, 0, n.length - (null == t || r ? 1 : t))
            },
            w.last = function (n, t, r) {
                return null == n ? void 0 : null == t || r ? n[n.length - 1] : o.call(n, Math.max(n.length - t, 0))
            },
            w.rest = w.tail = w.drop = function (n, t, r) {
                return o.call(n, null == t || r ? 1 : t)
            },
            w.compact = function (n) {
                return w.filter(n, w.identity)
            };
        var R = function (n, t, r) {
            return A(n, function (n) {
                w.isArray(n) ? t ? a.apply(r, n)  : R(n, t, r)  : r.push(n)
            }),
                r
        };
        w.flatten = function (n, t) {
            return R(n, t, [
            ])
        },
            w.without = function (n) {
                return w.difference(n, o.call(arguments, 1))
            },
            w.uniq = w.unique = function (n, t, r, e) {
                w.isFunction(t) && (e = r, r = t, t = !1);
                var u = r ? w.map(n, r, e)  : n,
                    i = [
                    ],
                    a = [
                    ];
                return A(u, function (r, e) {
                    (t ? e && a[a.length - 1] === r : w.contains(a, r)) || (a.push(r), i.push(n[e]))
                }),
                    i
            },
            w.union = function () {
                return w.uniq(c.apply(e, arguments))
            },
            w.intersection = function (n) {
                var t = o.call(arguments, 1);
                return w.filter(w.uniq(n), function (n) {
                    return w.every(t, function (t) {
                        return w.indexOf(t, n) >= 0
                    })
                })
            },
            w.difference = function (n) {
                var t = c.apply(e, o.call(arguments, 1));
                return w.filter(n, function (n) {
                    return !w.contains(t, n)
                })
            },
            w.zip = function () {
                for (var n = o.call(arguments), t = w.max(w.pluck(n, 'length')), r = Array(t), e = 0; t > e; e++) r[e] = w.pluck(n, '' + e);
                return r
            },
            w.object = function (n, t) {
                if (null == n) return {
                };
                for (var r = {
                }, e = 0, u = n.length; u > e; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
                return r
            },
            w.indexOf = function (n, t, r) {
                if (null == n) return - 1;
                var e = 0,
                    u = n.length;
                if (r) {
                    if ('number' != typeof r) return e = w.sortedIndex(n, t),
                        n[e] === t ? e : - 1;
                    e = 0 > r ? Math.max(0, u + r)  : r
                }
                if (y && n.indexOf === y) return n.indexOf(t, r);
                for (; u > e; e++) if (n[e] === t) return e;
                return - 1
            },
            w.lastIndexOf = function (n, t, r) {
                if (null == n) return - 1;
                var e = null != r;
                if (b && n.lastIndexOf === b) return e ? n.lastIndexOf(t, r)  : n.lastIndexOf(t);
                for (var u = e ? r : n.length; u--; ) if (n[u] === t) return u;
                return - 1
            },
            w.range = function (n, t, r) {
                1 >= arguments.length && (t = n || 0, n = 0),
                    r = arguments[2] || 1;
                for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = Array(e); e > u; ) i[u++] = n,
                    n += r;
                return i
            },
            w.bind = function (n, t) {
                if (n.bind === j && j) return j.apply(n, o.call(arguments, 1));
                var r = o.call(arguments, 2);
                return function () {
                    return n.apply(t, r.concat(o.call(arguments)))
                }
            },
            w.partial = function (n) {
                var t = o.call(arguments, 1);
                return function () {
                    return n.apply(this, t.concat(o.call(arguments)))
                }
            },
            w.bindAll = function (n) {
                var t = o.call(arguments, 1);
                return 0 === t.length && (t = w.functions(n)),
                    A(t, function (t) {
                        n[t] = w.bind(n[t], n)
                    }),
                    n
            },
            w.memoize = function (n, t) {
                var r = {
                };
                return t || (t = w.identity),
                    function () {
                        var e = t.apply(this, arguments);
                        return w.has(r, e) ? r[e] : r[e] = n.apply(this, arguments)
                    }
            },
            w.delay = function (n, t) {
                var r = o.call(arguments, 2);
                return setTimeout(function () {
                    return n.apply(null, r)
                }, t)
            },
            w.defer = function (n) {
                return w.delay.apply(w, [
                    n,
                    1
                ].concat(o.call(arguments, 1)))
            },
            w.throttle = function (n, t) {
                var r,
                    e,
                    u,
                    i,
                    a = 0,
                    o = function () {
                        a = new Date,
                            u = null,
                            i = n.apply(r, e)
                    };
                return function () {
                    var c = new Date,
                        l = t - (c - a);
                    return r = this,
                        e = arguments,
                        0 >= l ? (clearTimeout(u), u = null, a = c, i = n.apply(r, e))  : u || (u = setTimeout(o, l)),
                        i
                }
            },
            w.debounce = function (n, t, r) {
                var e,
                    u;
                return function () {
                    var i = this,
                        a = arguments,
                        o = function () {
                            e = null,
                            r || (u = n.apply(i, a))
                        },
                        c = r && !e;
                    return clearTimeout(e),
                        e = setTimeout(o, t),
                    c && (u = n.apply(i, a)),
                        u
                }
            },
            w.once = function (n) {
                var t,
                    r = !1;
                return function () {
                    return r ? t : (r = !0, t = n.apply(this, arguments), n = null, t)
                }
            },
            w.wrap = function (n, t) {
                return function () {
                    var r = [
                        n
                    ];
                    return a.apply(r, arguments),
                        t.apply(this, r)
                }
            },
            w.compose = function () {
                var n = arguments;
                return function () {
                    for (var t = arguments, r = n.length - 1; r >= 0; r--) t = [
                        n[r].apply(this, t)
                    ];
                    return t[0]
                }
            },
            w.after = function (n, t) {
                return 0 >= n ? t()  : function () {
                    return 1 > --n ? t.apply(this, arguments)  : void 0
                }
            },
            w.keys = _ || function (n) {
                    if (n !== Object(n)) throw new TypeError('Invalid object');
                    var t = [
                    ];
                    for (var r in n) w.has(n, r) && (t[t.length] = r);
                    return t
                },
            w.values = function (n) {
                var t = [
                ];
                for (var r in n) w.has(n, r) && t.push(n[r]);
                return t
            },
            w.pairs = function (n) {
                var t = [
                ];
                for (var r in n) w.has(n, r) && t.push([r,
                    n[r]]);
                return t
            },
            w.invert = function (n) {
                var t = {
                };
                for (var r in n) w.has(n, r) && (t[n[r]] = r);
                return t
            },
            w.functions = w.methods = function (n) {
                var t = [
                ];
                for (var r in n) w.isFunction(n[r]) && t.push(r);
                return t.sort()
            },
            w.extend = function (n) {
                return A(o.call(arguments, 1), function (t) {
                    if (t) for (var r in t) n[r] = t[r]
                }),
                    n
            },
            w.pick = function (n) {
                var t = {
                    },
                    r = c.apply(e, o.call(arguments, 1));
                return A(r, function (r) {
                    r in n && (t[r] = n[r])
                }),
                    t
            },
            w.omit = function (n) {
                var t = {
                    },
                    r = c.apply(e, o.call(arguments, 1));
                for (var u in n) w.contains(r, u) || (t[u] = n[u]);
                return t
            },
            w.defaults = function (n) {
                return A(o.call(arguments, 1), function (t) {
                    if (t) for (var r in t) null == n[r] && (n[r] = t[r])
                }),
                    n
            },
            w.clone = function (n) {
                return w.isObject(n) ? w.isArray(n) ? n.slice()  : w.extend({
                }, n)  : n
            },
            w.tap = function (n, t) {
                return t(n),
                    n
            };
        var I = function (n, t, r, e) {
            if (n === t) return 0 !== n || 1 / n == 1 / t;
            if (null == n || null == t) return n === t;
            n instanceof w && (n = n._wrapped),
            t instanceof w && (t = t._wrapped);
            var u = l.call(n);
            if (u != l.call(t)) return !1;
            switch (u) {
                case '[object String]':
                    return n == t + '';
                case '[object Number]':
                    return n != + n ? t != + t : 0 == n ? 1 / n == 1 / t : n == + t;
                case '[object Date]':
                case '[object Boolean]':
                    return + n == + t;
                case '[object RegExp]':
                    return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase
            }
            if ('object' != typeof n || 'object' != typeof t) return !1;
            for (var i = r.length; i--; ) if (r[i] == n) return e[i] == t;
            r.push(n),
                e.push(t);
            var a = 0,
                o = !0;
            if ('[object Array]' == u) {
                if (a = n.length, o = a == t.length) for (; a-- && (o = I(n[a], t[a], r, e)); );
            } else {
                var c = n.constructor,
                    f = t.constructor;
                if (c !== f && !(w.isFunction(c) && c instanceof c && w.isFunction(f) && f instanceof f)) return !1;
                for (var s in n) if (w.has(n, s) && (a++, !(o = w.has(t, s) && I(n[s], t[s], r, e)))) break;
                if (o) {
                    for (s in t) if (w.has(t, s) && !a--) break;
                    o = !a
                }
            }
            return r.pop(),
                e.pop(),
                o
        };
        w.isEqual = function (n, t) {
            return I(n, t, [
            ], [
            ])
        },
            w.isEmpty = function (n) {
                if (null == n) return !0;
                if (w.isArray(n) || w.isString(n)) return 0 === n.length;
                for (var t in n) if (w.has(n, t)) return !1;
                return !0
            },
            w.isElement = function (n) {
                return !(!n || 1 !== n.nodeType)
            },
            w.isArray = x || function (n) {
                    return '[object Array]' == l.call(n)
                },
            w.isObject = function (n) {
                return n === Object(n)
            },
            A(['Arguments',
                'Function',
                'String',
                'Number',
                'Date',
                'RegExp'], function (n) {
                w['is' + n] = function (t) {
                    return l.call(t) == '[object ' + n + ']'
                }
            }),
        w.isArguments(arguments) || (w.isArguments = function (n) {
            return !(!n || !w.has(n, 'callee'))
        }),
        'function' != typeof /./ && (w.isFunction = function (n) {
            return 'function' == typeof n
        }),
            w.isFinite = function (n) {
                return isFinite(n) && !isNaN(parseFloat(n))
            },
            w.isNaN = function (n) {
                return w.isNumber(n) && n != + n
            },
            w.isBoolean = function (n) {
                return n === !0 || n === !1 || '[object Boolean]' == l.call(n)
            },
            w.isNull = function (n) {
                return null === n
            },
            w.isUndefined = function (n) {
                return void 0 === n
            },
            w.has = function (n, t) {
                return f.call(n, t)
            },
            w.noConflict = function () {
                return n._ = t,
                    this
            },
            w.identity = function (n) {
                return n
            },
            w.times = function (n, t, r) {
                for (var e = Array(n), u = 0; n > u; u++) e[u] = t.call(r, u);
                return e
            },
            w.random = function (n, t) {
                return null == t && (t = n, n = 0),
                n + Math.floor(Math.random() * (t - n + 1))
            };
        var M = {
            escape: {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                '\'': '&#x27;',
                '/': '&#x2F;'
            }
        };
        M.unescape = w.invert(M.escape);
        var S = {
            escape: RegExp('[' + w.keys(M.escape).join('') + ']', 'g'),
            unescape: RegExp('(' + w.keys(M.unescape).join('|') + ')', 'g')
        };
        w.each(['escape',
            'unescape'], function (n) {
            w[n] = function (t) {
                return null == t ? '' : ('' + t).replace(S[n], function (t) {
                    return M[n][t]
                })
            }
        }),
            w.result = function (n, t) {
                if (null == n) return null;
                var r = n[t];
                return w.isFunction(r) ? r.call(n)  : r
            },
            w.mixin = function (n) {
                A(w.functions(n), function (t) {
                    var r = w[t] = n[t];
                    w.prototype[t] = function () {
                        var n = [
                            this._wrapped
                        ];
                        return a.apply(n, arguments),
                            D.call(this, r.apply(w, n))
                    }
                })
            };
        var N = 0;
        w.uniqueId = function (n) {
            var t = ++N + '';
            return n ? n + t : t
        },
            w.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
        var T = /(.)^/,
            q = {
                '\'': '\'',
                '\\': '\\',
                '\r': 'r',
                '\n': 'n',
                '\t': 't',
                '?': 'u2028',
                '?': 'u2029'
            },
            B = /\\|'|\r|\n|\t|\u2028|\u2029/g;
        w.template = function (n, t, r) {
            var e;
            r = w.defaults({
            }, r, w.templateSettings);
            var u = RegExp([(r.escape || T).source,
                        (r.interpolate || T).source,
                        (r.evaluate || T).source].join('|') + '|$', 'g'),
                i = 0,
                a = '__p+=\'';
            n.replace(u, function (t, r, e, u, o) {
                return a += n.slice(i, o).replace(B, function (n) {
                    return '\\' + q[n]
                }),
                r && (a += '\'+\n((__t=(' + r + '))==null?\'\':_.escape(__t))+\n\''),
                e && (a += '\'+\n((__t=(' + e + '))==null?\'\':__t)+\n\''),
                u && (a += '\';\n' + u + '\n__p+=\''),
                    i = o + t.length,
                    t
            }),
                a += '\';\n',
            r.variable || (a = 'with(obj||{}){\n' + a + '}\n'),
                a = 'var __t,__p=\'\',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,\'\');};\n' + a + 'return __p;\n';
            try {
                e = Function(r.variable || 'obj', '_', a)
            } catch (o) {
                throw o.source = a,
                    o
            }
            if (t) return e(t, w);
            var c = function (n) {
                return e.call(this, n, w)
            };
            return c.source = 'function(' + (r.variable || 'obj') + '){\n' + a + '}',
                c
        },
            w.chain = function (n) {
                return w(n).chain()
            };
        var D = function (n) {
            return this._chain ? w(n).chain()  : n
        };
        w.mixin(w),
            A(['pop',
                'push',
                'reverse',
                'shift',
                'sort',
                'splice',
                'unshift'], function (n) {
                var t = e[n];
                w.prototype[n] = function () {
                    var r = this._wrapped;
                    return t.apply(r, arguments),
                    'shift' != n && 'splice' != n || 0 !== r.length || delete r[0],
                        D.call(this, r)
                }
            }),
            A(['concat',
                'join',
                'slice'], function (n) {
                var t = e[n];
                w.prototype[n] = function () {
                    return D.call(this, t.apply(this._wrapped, arguments))
                }
            }),
            w.extend(w.prototype, {
                chain: function () {
                    return this._chain = !0,
                        this
                },
                value: function () {
                    return this._wrapped
                }
            })
    }.call(this);
var requirejs,
    require,
    define;
!function (Z) {
    function H(b) {
        return '[object Function]' === L.call(b)
    }
    function I(b) {
        return '[object Array]' === L.call(b)
    }
    function y(b, c) {
        if (b) {
            var d;
            for (d = 0; d < b.length && (!b[d] || !c(b[d], d, b)); d += 1);
        }
    }
    function M(b, c) {
        if (b) {
            var d;
            for (d = b.length - 1; d > - 1 && (!b[d] || !c(b[d], d, b)); d -= 1);
        }
    }
    function s(b, c) {
        return ga.call(b, c)
    }
    function l(b, c) {
        return s(b, c) && b[c]
    }
    function F(b, c) {
        for (var d in b) if (s(b, d) && c(b[d], d)) break
    }
    function Q(b, c, d, h) {
        return c && F(c, function (c, j) {
            (d || !s(b, j)) && (h && 'string' != typeof c ? (b[j] || (b[j] = {
            }), Q(b[j], c, d, h))  : b[j] = c)
        }),
            b
    }
    function u(b, c) {
        return function () {
            return c.apply(b, arguments)
        }
    }
    function aa(b) {
        throw b
    }
    function ba(b) {
        if (!b) return b;
        var c = Z;
        return y(b.split('.'), function (b) {
            c = c[b]
        }),
            c
    }
    function A(b, c, d, h) {
        return c = Error(c + '\nhttp://requirejs.org/docs/errors.html#' + b),
            c.requireType = b,
            c.requireModules = h,
        d && (c.originalError = d),
            c
    }
    function ha(b) {
        function c(a, f, b) {
            var e,
                m,
                c,
                g,
                d,
                h,
                j,
                i = f && f.split('/');
            e = i;
            var n = k.map,
                p = n && n['*'];
            if (a && '.' === a.charAt(0)) if (f) {
                for (e = l(k.pkgs, f) ? i = [
                    f
                ] : i.slice(0, i.length - 1), f = a = e.concat(a.split('/')), e = 0; f[e]; e += 1) if (m = f[e], '.' === m) f.splice(e, 1),
                    e -= 1;
                else if ('..' === m) {
                    if (1 === e && ('..' === f[2] || '..' === f[0])) break;
                    e > 0 && (f.splice(e - 1, 2), e -= 2)
                }
                e = l(k.pkgs, f = a[0]),
                    a = a.join('/'),
                e && a === f + '/' + e.main && (a = f)
            } else 0 === a.indexOf('./') && (a = a.substring(2));
            if (b && n && (i || p)) {
                for (f = a.split('/'), e = f.length; e > 0; e -= 1) {
                    if (c = f.slice(0, e).join('/'), i) for (m = i.length; m > 0; m -= 1) if ((b = l(n, i.slice(0, m).join('/'))) && (b = l(b, c))) {
                        g = b,
                            d = e;
                        break
                    }
                    if (g) break;
                    !h && p && l(p, c) && (h = l(p, c), j = e)
                }
                !g && h && (g = h, d = j),
                g && (f.splice(0, d, g), a = f.join('/'))
            }
            return a
        }
        function d(a) {
            z && y(document.getElementsByTagName('script'), function (f) {
                return f.getAttribute('data-requiremodule') === a && f.getAttribute('data-requirecontext') === i.contextName ? (f.parentNode.removeChild(f), !0)  : void 0
            })
        }
        function h(a) {
            var f = l(k.paths, a);
            return f && I(f) && 1 < f.length ? (d(a), f.shift(), i.require.undef(a), i.require([a]), !0)  : void 0
        }
        function $(a) {
            var f,
                b = a ? a.indexOf('!')  : - 1;
            return b > - 1 && (f = a.substring(0, b), a = a.substring(b + 1, a.length)),
                [
                    f,
                    a
                ]
        }
        function n(a, f, b, e) {
            var m,
                B,
                g = null,
                d = f ? f.name : null,
                h = a,
                j = !0,
                k = '';
            return a || (j = !1, a = '_@r' + (L += 1)),
                a = $(a),
                g = a[0],
                a = a[1],
            g && (g = c(g, d, e), B = l(r, g)),
            a && (g ? k = B && B.normalize ? B.normalize(a, function (a) {
                return c(a, d, e)
            })  : c(a, d, e)  : (k = c(a, d, e), a = $(k), g = a[0], k = a[1], b = !0, m = i.nameToUrl(k))),
                b = !g || B || b ? '' : '_unnormalized' + (M += 1),
            {
                prefix: g,
                name: k,
                parentMap: f,
                unnormalized: !!b,
                url: m,
                originalName: h,
                isDefine: j,
                id: (g ? g + '!' + k : k) + b
            }
        }
        function q(a) {
            var f = a.id,
                b = l(p, f);
            return b || (b = p[f] = new i.Module(a)),
                b
        }
        function t(a, f, b) {
            var e = a.id,
                m = l(p, e);
            !s(r, e) || m && !m.defineEmitComplete ? (m = q(a), m.error && 'error' === f ? b(m.error)  : m.on(f, b))  : 'defined' === f && b(r[e])
        }
        function v(a, f) {
            var b = a.requireModules,
                e = !1;
            f ? f(a)  : (y(b, function (f) {
                (f = l(p, f)) && (f.error = a, f.events.error && (e = !0, f.emit('error', a)))
            }), e || j.onError(a))
        }
        function w() {
            R.length && (ia.apply(G, [
                G.length - 1,
                0
            ].concat(R)), R = [
            ])
        }
        function x(a) {
            delete p[a],
                delete T[a]
        }
        function E(a, f, b) {
            var e = a.map.id;
            a.error ? a.emit('error', a.error)  : (f[e] = !0, y(a.depMaps, function (e, c) {
                var g = e.id,
                    d = l(p, g);
                d && !a.depMatched[c] && !b[g] && (l(f, g) ? (a.defineDep(c, r[g]), a.check())  : E(d, f, b))
            }), b[e] = !0)
        }
        function C() {
            var a,
                f,
                b,
                e,
                m = (b = 1000 * k.waitSeconds) && i.startTime + b < (new Date).getTime(),
                c = [
                ],
                g = [
                ],
                j = !1,
                l = !0;
            if (!U) {
                if (U = !0, F(T, function (b) {
                        if (a = b.map, f = a.id, b.enabled && (a.isDefine || g.push(b), !b.error)) if (!b.inited && m) h(f) ? j = e = !0 : (c.push(f), d(f));
                        else if (!b.inited && b.fetched && a.isDefine && (j = !0, !a.prefix)) return l = !1
                    }), m && c.length) return b = A('timeout', 'Load timeout for modules: ' + c, null, c),
                    b.contextName = i.contextName,
                    v(b);
                l && y(g, function (a) {
                    E(a, {
                    }, {
                    })
                }),
                m && !e || !j || !z && !da || V || (V = setTimeout(function () {
                    V = 0,
                        C()
                }, 50)),
                    U = !1
            }
        }
        function D(a) {
            s(r, a[0]) || q(n(a[0], null, !0)).init(a[1], a[2])
        }
        function J(a) {
            var a = a.currentTarget || a.srcElement,
                b = i.onScriptLoad;
            return a.detachEvent && !W ? a.detachEvent('onreadystatechange', b)  : a.removeEventListener('load', b, !1),
                b = i.onScriptError,
            (!a.detachEvent || W) && a.removeEventListener('error', b, !1),
            {
                node: a,
                id: a && a.getAttribute('data-requiremodule')
            }
        }
        function K() {
            var a;
            for (w(); G.length; ) {
                if (a = G.shift(), null === a[0]) return v(A('mismatch', 'Mismatched anonymous define() module: ' + a[a.length - 1]));
                D(a)
            }
        }
        var U,
            X,
            i,
            N,
            V,
            k = {
                waitSeconds: 7,
                baseUrl: './',
                paths: {
                },
                pkgs: {
                },
                shim: {
                },
                config: {
                }
            },
            p = {
            },
            T = {
            },
            Y = {
            },
            G = [
            ],
            r = {
            },
            S = {
            },
            L = 1,
            M = 1;
        return N = {
            require: function (a) {
                return a.require ? a.require : a.require = i.makeRequire(a.map)
            },
            exports: function (a) {
                return a.usingExports = !0,
                    a.map.isDefine ? a.exports ? a.exports : a.exports = r[a.map.id] = {
                    }
                        : void 0
            },
            module: function (a) {
                return a.module ? a.module : a.module = {
                    id: a.map.id,
                    uri: a.map.url,
                    config: function () {
                        var b = l(k.pkgs, a.map.id);
                        return (b ? l(k.config, a.map.id + '/' + b.main)  : l(k.config, a.map.id)) || {
                            }
                    },
                    exports: r[a.map.id]
                }
            }
        },
            X = function (a) {
                this.events = l(Y, a.id) || {
                    },
                    this.map = a,
                    this.shim = l(k.shim, a.id),
                    this.depExports = [
                    ],
                    this.depMaps = [
                    ],
                    this.depMatched = [
                    ],
                    this.pluginMaps = {
                    },
                    this.depCount = 0
            },
            X.prototype = {
                init: function (a, b, c, e) {
                    e = e || {
                        },
                    this.inited || (this.factory = b, c ? this.on('error', c)  : this.events.error && (c = u(this, function (a) {
                        this.emit('error', a)
                    })), this.depMaps = a && a.slice(0), this.errback = c, this.inited = !0, this.ignore = e.ignore, e.enabled || this.enabled ? this.enable()  : this.check())
                },
                defineDep: function (a, b) {
                    this.depMatched[a] || (this.depMatched[a] = !0, this.depCount -= 1, this.depExports[a] = b)
                },
                fetch: function () {
                    if (!this.fetched) {
                        this.fetched = !0,
                            i.startTime = (new Date).getTime();
                        var a = this.map;
                        if (!this.shim) return a.prefix ? this.callPlugin()  : this.load();
                        i.makeRequire(this.map, {
                            enableBuildCallback: !0
                        }) (this.shim.deps || [], u(this, function () {
                            return a.prefix ? this.callPlugin()  : this.load()
                        }))
                    }
                },
                load: function () {
                    var a = this.map.url;
                    S[a] || (S[a] = !0, i.load(this.map.id, a))
                },
                check: function () {
                    if (this.enabled && !this.enabling) {
                        var a,
                            b,
                            c = this.map.id;
                        b = this.depExports;
                        var e = this.exports,
                            m = this.factory;
                        if (this.inited) {
                            if (this.error) this.emit('error', this.error);
                            else if (!this.defining) {
                                if (this.defining = !0, 1 > this.depCount && !this.defined) {
                                    if (H(m)) {
                                        if (this.events.error && this.map.isDefine || j.onError !== aa) try {
                                            e = i.execCb(c, m, b, e)
                                        } catch (d) {
                                            a = d
                                        } else e = i.execCb(c, m, b, e);
                                        if (this.map.isDefine && ((b = this.module) && void 0 !== b.exports && b.exports !== this.exports ? e = b.exports : void 0 === e && this.usingExports && (e = this.exports)), a) return a.requireMap = this.map,
                                            a.requireModules = this.map.isDefine ? [
                                                this.map.id
                                            ] : null,
                                            a.requireType = this.map.isDefine ? 'define' : 'require',
                                            v(this.error = a)
                                    } else e = m;
                                    this.exports = e,
                                    this.map.isDefine && !this.ignore && (r[c] = e, j.onResourceLoad) && j.onResourceLoad(i, this.map, this.depMaps),
                                        x(c),
                                        this.defined = !0
                                }
                                this.defining = !1,
                                this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit('defined', this.exports), this.defineEmitComplete = !0)
                            }
                        } else this.fetch()
                    }
                },
                callPlugin: function () {
                    var a = this.map,
                        b = a.id,
                        d = n(a.prefix);
                    this.depMaps.push(d),
                        t(d, 'defined', u(this, function (e) {
                            var m,
                                d;
                            d = this.map.name;
                            var g = this.map.parentMap ? this.map.parentMap.name : null,
                                h = i.makeRequire(a.parentMap, {
                                    enableBuildCallback: !0
                                });
                            this.map.unnormalized ? (e.normalize && (d = e.normalize(d, function (a) {
                                    return c(a, g, !0)
                                }) || ''), e = n(a.prefix + '!' + d, this.map.parentMap), t(e, 'defined', u(this, function (a) {
                                this.init([], function () {
                                    return a
                                }, null, {
                                    enabled: !0,
                                    ignore: !0
                                })
                            })), (d = l(p, e.id)) && (this.depMaps.push(e), this.events.error && d.on('error', u(this, function (a) {
                                this.emit('error', a)
                            })), d.enable()))  : (m = u(this, function (a) {
                                this.init([], function () {
                                    return a
                                }, null, {
                                    enabled: !0
                                })
                            }), m.error = u(this, function (a) {
                                this.inited = !0,
                                    this.error = a,
                                    a.requireModules = [
                                        b
                                    ],
                                    F(p, function (a) {
                                        0 === a.map.id.indexOf(b + '_unnormalized') && x(a.map.id)
                                    }),
                                    v(a)
                            }), m.fromText = u(this, function (e, c) {
                                var d = a.name,
                                    g = n(d),
                                    B = O;
                                c && (e = c),
                                B && (O = !1),
                                    q(g),
                                s(k.config, b) && (k.config[d] = k.config[b]);
                                try {
                                    j.exec(e)
                                } catch (ca) {
                                    return v(A('fromtexteval', 'fromText eval for ' + b + ' failed: ' + ca, ca, [
                                        b
                                    ]))
                                }
                                B && (O = !0),
                                    this.depMaps.push(g),
                                    i.completeLoad(d),
                                    h([d], m)
                            }), e.load(a.name, h, m, k))
                        })),
                        i.enable(d, this),
                        this.pluginMaps[d.id] = d
                },
                enable: function () {
                    T[this.map.id] = this,
                        this.enabling = this.enabled = !0,
                        y(this.depMaps, u(this, function (a, b) {
                            var c,
                                e;
                            if ('string' == typeof a) {
                                if (a = n(a, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[b] = a, c = l(N, a.id)) return void (this.depExports[b] = c(this));
                                this.depCount += 1,
                                    t(a, 'defined', u(this, function (a) {
                                        this.defineDep(b, a),
                                            this.check()
                                    })),
                                this.errback && t(a, 'error', u(this, this.errback))
                            }
                            c = a.id,
                                e = p[c],
                            !s(N, c) && e && !e.enabled && i.enable(a, this)
                        })),
                        F(this.pluginMaps, u(this, function (a) {
                            var b = l(p, a.id);
                            b && !b.enabled && i.enable(a, this)
                        })),
                        this.enabling = !1,
                        this.check()
                },
                on: function (a, b) {
                    var c = this.events[a];
                    c || (c = this.events[a] = [
                    ]),
                        c.push(b)
                },
                emit: function (a, b) {
                    y(this.events[a], function (a) {
                        a(b)
                    }),
                    'error' === a && delete this.events[a]
                }
            },
            i = {
                config: k,
                contextName: b,
                registry: p,
                defined: r,
                urlFetched: S,
                defQueue: G,
                Module: X,
                makeModuleMap: n,
                nextTick: j.nextTick,
                onError: v,
                configure: function (a) {
                    a.baseUrl && '/' !== a.baseUrl.charAt(a.baseUrl.length - 1) && (a.baseUrl += '/');
                    var b = k.pkgs,
                        c = k.shim,
                        e = {
                            paths: !0,
                            config: !0,
                            map: !0
                        };
                    F(a, function (a, b) {
                        e[b] ? 'map' === b ? (k.map || (k.map = {
                        }), Q(k[b], a, !0, !0))  : Q(k[b], a, !0)  : k[b] = a
                    }),
                    a.shim && (F(a.shim, function (a, b) {
                        I(a) && (a = {
                            deps: a
                        }),
                        !a.exports && !a.init || a.exportsFn || (a.exportsFn = i.makeShimExports(a)),
                            c[b] = a
                    }), k.shim = c),
                    a.packages && (y(a.packages, function (a) {
                        a = 'string' == typeof a ? {
                            name: a
                        }
                            : a,
                            b[a.name] = {
                                name: a.name,
                                location: a.location || a.name,
                                main: (a.main || 'main').replace(ja, '').replace(ea, '')
                            }
                    }), k.pkgs = b),
                        F(p, function (a, b) {
                            !a.inited && !a.map.unnormalized && (a.map = n(b))
                        }),
                    (a.deps || a.callback) && i.require(a.deps || [], a.callback)
                },
                makeShimExports: function (a) {
                    return function () {
                        var b;
                        return a.init && (b = a.init.apply(Z, arguments)),
                        b || a.exports && ba(a.exports)
                    }
                },
                makeRequire: function (a, f) {
                    function d(e, c, h) {
                        var g,
                            k;
                        return f.enableBuildCallback && c && H(c) && (c.__requireJsBuild = !0),
                            'string' == typeof e ? H(c) ? v(A('requireargs', 'Invalid require call'), h)  : a && s(N, e) ? N[e](p[a.id])  : j.get ? j.get(i, e, a, d)  : (g = n(e, a, !1, !0), g = g.id, s(r, g) ? r[g] : v(A('notloaded', 'Module name "' + g + '" has not been loaded yet for context: ' + b + (a ? '' : '. Use require([])'))))  : (K(), i.nextTick(function () {
                                K(),
                                    k = q(n(null, a)),
                                    k.skipMap = f.skipMap,
                                    k.init(e, c, h, {
                                        enabled: !0
                                    }),
                                    C()
                            }), d)
                    }
                    return f = f || {
                        },
                        Q(d, {
                            isBrowser: z,
                            toUrl: function (b) {
                                var d,
                                    f = b.lastIndexOf('.'),
                                    g = b.split('/') [0];
                                return - 1 !== f && ('.' !== g && '..' !== g || f > 1) && (d = b.substring(f, b.length), b = b.substring(0, f)),
                                    i.nameToUrl(c(b, a && a.id, !0), d, !0)
                            },
                            defined: function (b) {
                                return s(r, n(b, a, !1, !0).id)
                            },
                            specified: function (b) {
                                return b = n(b, a, !1, !0).id,
                                s(r, b) || s(p, b)
                            }
                        }),
                    a || (d.undef = function (b) {
                        w();
                        var c = n(b, a, !0),
                            f = l(p, b);
                        delete r[b],
                            delete S[c.url],
                            delete Y[b],
                        f && (f.events.defined && (Y[b] = f.events), x(b))
                    }),
                        d
                },
                enable: function (a) {
                    l(p, a.id) && q(a).enable()
                },
                completeLoad: function (a) {
                    var b,
                        c,
                        e = l(k.shim, a) || {
                            },
                        d = e.exports;
                    for (w(); G.length; ) {
                        if (c = G.shift(), null === c[0]) {
                            if (c[0] = a, b) break;
                            b = !0
                        } else c[0] === a && (b = !0);
                        D(c)
                    }
                    if (c = l(p, a), !b && !s(r, a) && c && !c.inited) {
                        if (k.enforceDefine && (!d || !ba(d))) return h(a) ? void 0 : v(A('nodefine', 'No define call for ' + a, null, [
                            a
                        ]));
                        D([a,
                            e.deps || [],
                            e.exportsFn])
                    }
                    C()
                },
                nameToUrl: function (a, b, c) {
                    var e,
                        d,
                        h,
                        g,
                        i,
                        n;
                    if (j.jsExtRegExp.test(a)) g = a + (b || '');
                    else {
                        for (e = k.paths, d = k.pkgs, g = a.split('/'), i = g.length; i > 0; i -= 1) {
                            if (n = g.slice(0, i).join('/'), h = l(d, n), n = l(e, n)) {
                                I(n) && (n = n[0]),
                                    g.splice(0, i, n);
                                break
                            }
                            if (h) {
                                a = a === h.name ? h.location + '/' + h.main : h.location,
                                    g.splice(0, i, a);
                                break
                            }
                        }
                        g = g.join('/'),
                            g += b || (/\?/.test(g) || c ? '' : '.js'),
                            g = ('/' === g.charAt(0) || g.match(/^[\w\+\.\-]+:/) ? '' : k.baseUrl) + g
                    }
                    return k.urlArgs ? g + (( - 1 === g.indexOf('?') ? '?' : '&') + k.urlArgs)  : g
                },
                load: function (a, b) {
                    j.load(i, a, b)
                },
                execCb: function (a, b, c, e) {
                    return b.apply(e, c)
                },
                onScriptLoad: function (a) {
                    ('load' === a.type || ka.test((a.currentTarget || a.srcElement).readyState)) && (P = null, a = J(a), i.completeLoad(a.id))
                },
                onScriptError: function (a) {
                    var b = J(a);
                    return h(b.id) ? void 0 : v(A('scripterror', 'Script error for: ' + b.id, a, [
                        b.id
                    ]))
                }
            },
            i.require = i.makeRequire(),
            i
    }
    var j,
        w,
        x,
        C,
        J,
        D,
        P,
        K,
        q,
        fa,
        la = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
        ma = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        ea = /\.js$/,
        ja = /^\.\//;
    w = Object.prototype;
    var L = w.toString,
        ga = w.hasOwnProperty,
        ia = Array.prototype.splice,
        z = !('undefined' == typeof window || !navigator || !window.document),
        da = !z && 'undefined' != typeof importScripts,
        ka = z && 'PLAYSTATION 3' === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
        W = 'undefined' != typeof opera && '[object Opera]' === opera.toString(),
        E = {
        },
        t = {
        },
        R = [
        ],
        O = !1;
    if ('undefined' == typeof define) {
        if ('undefined' != typeof requirejs) {
            if (H(requirejs)) return;
            t = requirejs,
                requirejs = void 0
        }
        'undefined' != typeof require && !H(require) && (t = require, require = void 0),
            j = requirejs = function (b, c, d, h) {
                var q,
                    n = '_';
                return !I(b) && 'string' != typeof b && (q = b, I(c) ? (b = c, c = d, d = h)  : b = [
                ]),
                q && q.context && (n = q.context),
                (h = l(E, n)) || (h = E[n] = j.s.newContext(n)),
                q && h.configure(q),
                    h.require(b, c, d)
            },
            j.config = function (b) {
                return j(b)
            },
            j.nextTick = 'undefined' != typeof setTimeout ? function (b) {
                setTimeout(b, 4)
            }
                : function (b) {
                b()
            },
        require || (require = j),
            j.version = '2.1.8',
            j.jsExtRegExp = /^\/|:|\?|\.js$/,
            j.isBrowser = z,
            w = j.s = {
                contexts: E,
                newContext: ha
            },
            j({
            }),
            y(['toUrl',
                'undef',
                'defined',
                'specified'], function (b) {
                j[b] = function () {
                    var c = E._;
                    return c.require[b].apply(c, arguments)
                }
            }),
        z && (x = w.head = document.getElementsByTagName('head') [0], C = document.getElementsByTagName('base') [0]) && (x = w.head = C.parentNode),
            j.onError = aa,
            j.createNode = function (b) {
                var c = b.xhtml ? document.createElementNS('http://www.w3.org/1999/xhtml', 'html:script')  : document.createElement('script');
                return c.type = b.scriptType || 'text/javascript',
                    c.charset = 'utf-8',
                    c.async = !0,
                    c
            },
            j.load = function (b, c, d) {
                var h = b && b.config || {
                    };
                if (z) return h = j.createNode(h, c, d),
                    h.setAttribute('data-requirecontext', b.contextName),
                    h.setAttribute('data-requiremodule', c),
                    !h.attachEvent || h.attachEvent.toString && 0 > h.attachEvent.toString().indexOf('[native code') || W ? (h.addEventListener('load', b.onScriptLoad, !1), h.addEventListener('error', b.onScriptError, !1))  : (O = !0, h.attachEvent('onreadystatechange', b.onScriptLoad)),
                    h.src = d,
                    K = h,
                    C ? x.insertBefore(h, C)  : x.appendChild(h),
                    K = null,
                    h;
                if (da) try {
                    importScripts(d),
                        b.completeLoad(c)
                } catch (l) {
                    b.onError(A('importscripts', 'importScripts failed for ' + c + ' at ' + d, l, [
                        c
                    ]))
                }
            },
        z && M(document.getElementsByTagName('script'), function (b) {
            return x || (x = b.parentNode),
                (J = b.getAttribute('data-main')) ? (q = J, t.baseUrl || (D = q.split('/'), q = D.pop(), fa = D.length ? D.join('/') + '/' : './', t.baseUrl = fa), q = q.replace(ea, ''), j.jsExtRegExp.test(q) && (q = J), t.deps = t.deps ? t.deps.concat(q)  : [
                    q
                ], !0)  : void 0
        }),
            define = function (b, c, d) {
                var h,
                    j;
                'string' != typeof b && (d = c, c = b, b = null),
                I(c) || (d = c, c = null),
                !c && H(d) && (c = [
                ], d.length && (d.toString().replace(la, '').replace(ma, function (b, d) {
                    c.push(d)
                }), c = (1 === d.length ? [
                    'require'
                ] : [
                    'require',
                    'exports',
                    'module'
                ]).concat(c))),
                O && ((h = K) || (P && 'interactive' === P.readyState || M(document.getElementsByTagName('script'), function (b) {
                    return 'interactive' === b.readyState ? P = b : void 0
                }), h = P), h && (b || (b = h.getAttribute('data-requiremodule')), j = E[h.getAttribute('data-requirecontext')])),
                    (j ? j.defQueue : R).push([b,
                        c,
                        d])
            },
            define.amd = {
                jQuery: !0
            },
            j.exec = function (b) {
                return eval(b)
            },
            j(t)
    }
}(this),
    window.RequireJS = window.RequireJS || {
        },
    RequireJS.requirejs = RequireJS.requirejs || window.requirejs,
    RequireJS.require = RequireJS.require || window.require,
    RequireJS.define = RequireJS.define || window.define,
    window.require = void 0,
    window.define = void 0,
    window.requirejs = void 0;
var JSON;
JSON || (JSON = {
}),
    function () {
        'use strict';
        function f(n) {
            return 10 > n ? '0' + n : n
        }
        function quote(string) {
            return escapable.lastIndex = 0,
                escapable.test(string) ? '"' + string.replace(escapable, function (a) {
                    var c = meta[a];
                    return 'string' == typeof c ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice( - 4)
                }) + '"' : '"' + string + '"'
        }
        function str(key, holder) {
            var i,
                k,
                v,
                length,
                partial,
                mind = gap,
                value = holder[key];
            switch (value && 'object' == typeof value && 'function' == typeof value.toJSON && (value = value.toJSON(key)), 'function' == typeof rep && (value = rep.call(holder, key, value)), typeof value) {
                case 'string':
                    return quote(value);
                case 'number':
                    return isFinite(value) ? String(value)  : 'null';
                case 'boolean':
                case 'null':
                    return String(value);
                case 'object':
                    if (!value) return 'null';
                    if (gap += indent, partial = [
                        ], '[object Array]' === Object.prototype.toString.apply(value)) {
                        for (length = value.length, i = 0; length > i; i += 1) partial[i] = str(i, value) || 'null';
                        return v = 0 === partial.length ? '[]' : gap ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' : '[' + partial.join(',') + ']',
                            gap = mind,
                            v
                    }
                    if (rep && 'object' == typeof rep) for (length = rep.length, i = 0; length > i; i += 1) 'string' == typeof rep[i] && (k = rep[i], v = str(k, value), v && partial.push(quote(k) + (gap ? ': ' : ':') + v));
                    else for (k in value) Object.prototype.hasOwnProperty.call(value, k) && (v = str(k, value), v && partial.push(quote(k) + (gap ? ': ' : ':') + v));
                    return v = 0 === partial.length ? '{}' : gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' : '{' + partial.join(',') + '}',
                        gap = mind,
                        v
            }
        }
        'function' != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + '-' + f(this.getUTCMonth() + 1) + '-' + f(this.getUTCDate()) + 'T' + f(this.getUTCHours()) + ':' + f(this.getUTCMinutes()) + ':' + f(this.getUTCSeconds()) + 'Z' : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap,
            indent,
            meta = {
                '': '\\b',
                '\t': '\\t',
                '\n': '\\n',
                '\f': '\\f',
                '\r': '\\r',
                '"': '\\"',
                '\\': '\\\\'
            },
            rep;
        'function' != typeof JSON.stringify && (JSON.stringify = function (value, replacer, space) {
            var i;
            if (gap = '', indent = '', 'number' == typeof space) for (i = 0; space > i; i += 1) indent += ' ';
            else 'string' == typeof space && (indent = space);
            if (rep = replacer, replacer && 'function' != typeof replacer && ('object' != typeof replacer || 'number' != typeof replacer.length)) throw new Error('JSON.stringify');
            return str('', {
                '': value
            })
        }),
        'function' != typeof JSON.parse && (JSON.parse = function (text, reviver) {
            function walk(holder, key) {
                var k,
                    v,
                    value = holder[key];
                if (value && 'object' == typeof value) for (k in value) Object.prototype.hasOwnProperty.call(value, k) && (v = walk(value, k), void 0 !== v ? value[k] = v : delete value[k]);
                return reviver.call(holder, key, value)
            }
            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (a) {
                    return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice( - 4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) return j = eval('(' + text + ')'),
                'function' == typeof reviver ? walk({
                    '': j
                }, '')  : j;
            throw new SyntaxError('JSON.parse')
        })
    }(),
    function (e, t) {
        function i(t, n) {
            var r,
                i,
                o,
                u = t.nodeName.toLowerCase();
            return 'area' === u ? (r = t.parentNode, i = r.name, t.href && i && 'map' === r.nodeName.toLowerCase() ? (o = e('img[usemap=#' + i + ']') [0], !!o && s(o))  : !1)  : (/input|select|textarea|button|object/.test(u) ? !t.disabled : 'a' === u ? t.href || n : n) && s(t)
        }
        function s(t) {
            return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
                    return 'hidden' === e.css(this, 'visibility')
                }).length
        }
        var n = 0,
            r = /^ui-id-\d+$/;
        e.ui = e.ui || {
            },
        e.ui.version || (e.extend(e.ui, {
            version: '1.10.0',
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), e.fn.extend({
            _focus: e.fn.focus,
            focus: function (t, n) {
                return 'number' == typeof t ? this.each(function () {
                    var r = this;
                    setTimeout(function () {
                        e(r).focus(),
                        n && n.call(r)
                    }, t)
                })  : this._focus.apply(this, arguments)
            },
            scrollParent: function () {
                var t;
                return t = e.ui.ie && /(static|relative)/.test(this.css('position')) || /absolute/.test(this.css('position')) ? this.parents().filter(function () {
                    return /(relative|absolute|fixed)/.test(e.css(this, 'position')) && /(auto|scroll)/.test(e.css(this, 'overflow') + e.css(this, 'overflow-y') + e.css(this, 'overflow-x'))
                }).eq(0)  : this.parents().filter(function () {
                    return /(auto|scroll)/.test(e.css(this, 'overflow') + e.css(this, 'overflow-y') + e.css(this, 'overflow-x'))
                }).eq(0),
                    /fixed/.test(this.css('position')) || !t.length ? e(document)  : t
            },
            zIndex: function (n) {
                if (n !== t) return this.css('zIndex', n);
                if (this.length) for (var i, s, r = e(this[0]); r.length && r[0] !== document; ) {
                    if (i = r.css('position'), ('absolute' === i || 'relative' === i || 'fixed' === i) && (s = parseInt(r.css('zIndex'), 10), !isNaN(s) && 0 !== s)) return s;
                    r = r.parent()
                }
                return 0
            },
            uniqueId: function () {
                return this.each(function () {
                    this.id || (this.id = 'ui-id-' + ++n)
                })
            },
            removeUniqueId: function () {
                return this.each(function () {
                    r.test(this.id) && e(this).removeAttr('id')
                })
            }
        }), e.extend(e.expr[':'], {
            data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
                return function (n) {
                    return !!e.data(n, t)
                }
            })  : function (t, n, r) {
                return !!e.data(t, r[3])
            },
            focusable: function (t) {
                return i(t, !isNaN(e.attr(t, 'tabindex')))
            },
            tabbable: function (t) {
                var n = e.attr(t, 'tabindex'),
                    r = isNaN(n);
                return (r || n >= 0) && i(t, !r)
            }
        }), e('<a>').outerWidth(1).jquery || e.each(['Width',
            'Height'], function (n, r) {
            function u(t, n, r, s) {
                return e.each(i, function () {
                    n -= parseFloat(e.css(t, 'padding' + this)) || 0,
                    r && (n -= parseFloat(e.css(t, 'border' + this + 'Width')) || 0),
                    s && (n -= parseFloat(e.css(t, 'margin' + this)) || 0)
                }),
                    n
            }
            var i = 'Width' === r ? [
                    'Left',
                    'Right'
                ] : [
                    'Top',
                    'Bottom'
                ],
                s = r.toLowerCase(),
                o = {
                    innerWidth: e.fn.innerWidth,
                    innerHeight: e.fn.innerHeight,
                    outerWidth: e.fn.outerWidth,
                    outerHeight: e.fn.outerHeight
                };
            e.fn['inner' + r] = function (n) {
                return n === t ? o['inner' + r].call(this)  : this.each(function () {
                    e(this).css(s, u(this, n) + 'px')
                })
            },
                e.fn['outer' + r] = function (t, n) {
                    return 'number' != typeof t ? o['outer' + r].call(this, t)  : this.each(function () {
                        e(this).css(s, u(this, t, !0, n) + 'px')
                    })
                }
        }), e.fn.addBack || (e.fn.addBack = function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }), e('<a>').data('a-b', 'a').removeData('a-b').data('a-b') && (e.fn.removeData = function (t) {
            return function (n) {
                return arguments.length ? t.call(this, e.camelCase(n))  : t.call(this)
            }
        }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = 'onselectstart' in document.createElement('div'), e.fn.extend({
            disableSelection: function () {
                return this.bind((e.support.selectstart ? 'selectstart' : 'mousedown') + '.ui-disableSelection', function (e) {
                    e.preventDefault()
                })
            },
            enableSelection: function () {
                return this.unbind('.ui-disableSelection')
            }
        }), e.extend(e.ui, {
            plugin: {
                add: function (t, n, r) {
                    var i,
                        s = e.ui[t].prototype;
                    for (i in r) s.plugins[i] = s.plugins[i] || [],
                        s.plugins[i].push([n,
                            r[i]])
                },
                call: function (e, t, n) {
                    var r,
                        i = e.plugins[t];
                    if (i && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType) for (r = 0; r < i.length; r++) e.options[i[r][0]] && i[r][1].apply(e.element, n)
                }
            },
            hasScroll: function (t, n) {
                if ('hidden' === e(t).css('overflow')) return !1;
                var r = n && 'left' === n ? 'scrollLeft' : 'scrollTop',
                    i = !1;
                return t[r] > 0 ? !0 : (t[r] = 1, i = t[r] > 0, t[r] = 0, i)
            }
        }))
    }(jQuery),
    function (e, t) {
        var n = 0,
            r = Array.prototype.slice,
            i = e.cleanData;
        e.cleanData = function (t) {
            for (var r, n = 0; null != (r = t[n]); n++) try {
                e(r).triggerHandler('remove')
            } catch (s) {
            }
            i(t)
        },
            e.widget = function (t, n, r) {
                var i,
                    s,
                    o,
                    u,
                    a = {
                    },
                    f = t.split('.') [0];
                t = t.split('.') [1],
                    i = f + '-' + t,
                r || (r = n, n = e.Widget),
                    e.expr[':'][i.toLowerCase()] = function (t) {
                        return !!e.data(t, i)
                    },
                    e[f] = e[f] || {
                        },
                    s = e[f][t],
                    o = e[f][t] = function (e, t) {
                        return this._createWidget ? void (arguments.length && this._createWidget(e, t))  : new o(e, t)
                    },
                    e.extend(o, s, {
                        version: r.version,
                        _proto: e.extend({
                        }, r),
                        _childConstructors: [
                        ]
                    }),
                    u = new n,
                    u.options = e.widget.extend({
                    }, u.options),
                    e.each(r, function (t, r) {
                        return e.isFunction(r) ? void (a[t] = function () {
                            var e = function () {
                                    return n.prototype[t].apply(this, arguments)
                                },
                                i = function (e) {
                                    return n.prototype[t].apply(this, e)
                                };
                            return function () {
                                var s,
                                    t = this._super,
                                    n = this._superApply;
                                return this._super = e,
                                    this._superApply = i,
                                    s = r.apply(this, arguments),
                                    this._super = t,
                                    this._superApply = n,
                                    s
                            }
                        }())  : void (a[t] = r)
                    }),
                    o.prototype = e.widget.extend(u, {
                        widgetEventPrefix: s ? u.widgetEventPrefix : t
                    }, a, {
                        constructor: o,
                        namespace: f,
                        widgetName: t,
                        widgetFullName: i
                    }),
                    s ? (e.each(s._childConstructors, function (t, n) {
                        var r = n.prototype;
                        e.widget(r.namespace + '.' + r.widgetName, o, n._proto)
                    }), delete s._childConstructors)  : n._childConstructors.push(o),
                    e.widget.bridge(t, o)
            },
            e.widget.extend = function (n) {
                for (var u, a, i = r.call(arguments, 1), s = 0, o = i.length; o > s; s++) for (u in i[s]) a = i[s][u],
                i[s].hasOwnProperty(u) && a !== t && (n[u] = e.isPlainObject(a) ? e.isPlainObject(n[u]) ? e.widget.extend({
                }, n[u], a)  : e.widget.extend({
                }, a)  : a);
                return n
            },
            e.widget.bridge = function (n, i) {
                var s = i.prototype.widgetFullName || n;
                e.fn[n] = function (o) {
                    var u = 'string' == typeof o,
                        a = r.call(arguments, 1),
                        f = this;
                    return o = !u && a.length ? e.widget.extend.apply(null, [
                        o
                    ].concat(a))  : o,
                        this.each(u ? function () {
                            var r,
                                i = e.data(this, s);
                            return i ? e.isFunction(i[o]) && '_' !== o.charAt(0) ? (r = i[o].apply(i, a), r !== i && r !== t ? (f = r && r.jquery ? f.pushStack(r.get())  : r, !1)  : void 0)  : e.error('no such method \'' + o + '\' for ' + n + ' widget instance')  : e.error('cannot call methods on ' + n + ' prior to initialization; attempted to call method \'' + o + '\'')
                        }
                            : function () {
                            var t = e.data(this, s);
                            t ? t.option(o || {
                                })._init()  : e.data(this, s, new i(o, this))
                        }),
                        f
                }
            },
            e.Widget = function () {
            },
            e.Widget._childConstructors = [
            ],
            e.Widget.prototype = {
                widgetName: 'widget',
                widgetEventPrefix: '',
                defaultElement: '<div>',
                options: {
                    disabled: !1,
                    create: null
                },
                _createWidget: function (t, r) {
                    r = e(r || this.defaultElement || this) [0],
                        this.element = e(r),
                        this.uuid = n++,
                        this.eventNamespace = '.' + this.widgetName + this.uuid,
                        this.options = e.widget.extend({
                        }, this.options, this._getCreateOptions(), t),
                        this.bindings = e(),
                        this.hoverable = e(),
                        this.focusable = e(),
                    r !== this && (e.data(r, this.widgetFullName, this), this._on(!0, this.element, {
                        remove: function (e) {
                            e.target === r && this.destroy()
                        }
                    }), this.document = e(r.style ? r.ownerDocument : r.document || r), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)),
                        this._create(),
                        this._trigger('create', null, this._getCreateEventData()),
                        this._init()
                },
                _getCreateOptions: e.noop,
                _getCreateEventData: e.noop,
                _create: e.noop,
                _init: e.noop,
                destroy: function () {
                    this._destroy(),
                        this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),
                        this.widget().unbind(this.eventNamespace).removeAttr('aria-disabled').removeClass(this.widgetFullName + '-disabled ui-state-disabled'),
                        this.bindings.unbind(this.eventNamespace),
                        this.hoverable.removeClass('ui-state-hover'),
                        this.focusable.removeClass('ui-state-focus')
                },
                _destroy: e.noop,
                widget: function () {
                    return this.element
                },
                option: function (n, r) {
                    var s,
                        o,
                        u,
                        i = n;
                    if (0 === arguments.length) return e.widget.extend({
                    }, this.options);
                    if ('string' == typeof n) if (i = {
                        }, s = n.split('.'), n = s.shift(), s.length) {
                        for (o = i[n] = e.widget.extend({
                        }, this.options[n]), u = 0; u < s.length - 1; u++) o[s[u]] = o[s[u]] || {
                            },
                            o = o[s[u]];
                        if (n = s.pop(), r === t) return o[n] === t ? null : o[n];
                        o[n] = r
                    } else {
                        if (r === t) return this.options[n] === t ? null : this.options[n];
                        i[n] = r
                    }
                    return this._setOptions(i),
                        this
                },
                _setOptions: function (e) {
                    var t;
                    for (t in e) this._setOption(t, e[t]);
                    return this
                },
                _setOption: function (e, t) {
                    return this.options[e] = t,
                    'disabled' === e && (this.widget().toggleClass(this.widgetFullName + '-disabled ui-state-disabled', !!t).attr('aria-disabled', t), this.hoverable.removeClass('ui-state-hover'), this.focusable.removeClass('ui-state-focus')),
                        this
                },
                enable: function () {
                    return this._setOption('disabled', !1)
                },
                disable: function () {
                    return this._setOption('disabled', !0)
                },
                _on: function (t, n, r) {
                    var i,
                        s = this;
                    'boolean' != typeof t && (r = n, n = t, t = !1),
                        r ? (n = i = e(n), this.bindings = this.bindings.add(n))  : (r = n, n = this.element, i = this.widget()),
                        e.each(r, function (r, o) {
                            function u() {
                                return t || s.options.disabled !== !0 && !e(this).hasClass('ui-state-disabled') ? ('string' == typeof o ? s[o] : o).apply(s, arguments)  : void 0
                            }
                            'string' != typeof o && (u.guid = o.guid = o.guid || u.guid || e.guid++);
                            var a = r.match(/^(\w+)\s*(.*)$/),
                                f = a[1] + s.eventNamespace,
                                l = a[2];
                            l ? i.delegate(l, f, u)  : n.bind(f, u)
                        })
                },
                _off: function (e, t) {
                    t = (t || '').split(' ').join(this.eventNamespace + ' ') + this.eventNamespace,
                        e.unbind(t).undelegate(t)
                },
                _delay: function (e, t) {
                    function n() {
                        return ('string' == typeof e ? r[e] : e).apply(r, arguments)
                    }
                    var r = this;
                    return setTimeout(n, t || 0)
                },
                _hoverable: function (t) {
                    this.hoverable = this.hoverable.add(t),
                        this._on(t, {
                            mouseenter: function (t) {
                                e(t.currentTarget).addClass('ui-state-hover')
                            },
                            mouseleave: function (t) {
                                e(t.currentTarget).removeClass('ui-state-hover')
                            }
                        })
                },
                _focusable: function (t) {
                    this.focusable = this.focusable.add(t),
                        this._on(t, {
                            focusin: function (t) {
                                e(t.currentTarget).addClass('ui-state-focus')
                            },
                            focusout: function (t) {
                                e(t.currentTarget).removeClass('ui-state-focus')
                            }
                        })
                },
                _trigger: function (t, n, r) {
                    var i,
                        s,
                        o = this.options[t];
                    if (r = r || {
                            }, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], s = n.originalEvent, s) for (i in s) i in n || (n[i] = s[i]);
                    return this.element.trigger(n, r),
                        !(e.isFunction(o) && o.apply(this.element[0], [
                            n
                        ].concat(r)) === !1 || n.isDefaultPrevented())
                }
            },
            e.each({
                show: 'fadeIn',
                hide: 'fadeOut'
            }, function (t, n) {
                e.Widget.prototype['_' + t] = function (r, i, s) {
                    'string' == typeof i && (i = {
                        effect: i
                    });
                    var o,
                        u = i ? i === !0 || 'number' == typeof i ? n : i.effect || n : t;
                    i = i || {
                        },
                    'number' == typeof i && (i = {
                        duration: i
                    }),
                        o = !e.isEmptyObject(i),
                        i.complete = s,
                    i.delay && r.delay(i.delay),
                        o && e.effects && e.effects.effect[u] ? r[t](i)  : u !== t && r[u] ? r[u](i.duration, i.easing, s)  : r.queue(function (n) {
                            e(this) [t](),
                            s && s.call(r[0]),
                                n()
                        })
                }
            })
    }(jQuery),
    function (e) {
        var n = !1;
        e(document).mouseup(function () {
            n = !1
        }),
            e.widget('ui.mouse', {
                version: '1.10.0',
                options: {
                    cancel: 'input,textarea,button,select,option',
                    distance: 1,
                    delay: 0
                },
                _mouseInit: function () {
                    var t = this;
                    this.element.bind('mousedown.' + this.widgetName, function (e) {
                        return t._mouseDown(e)
                    }).bind('click.' + this.widgetName, function (n) {
                        return !0 === e.data(n.target, t.widgetName + '.preventClickEvent') ? (e.removeData(n.target, t.widgetName + '.preventClickEvent'), n.stopImmediatePropagation(), !1)  : void 0
                    }),
                        this.started = !1
                },
                _mouseDestroy: function () {
                    this.element.unbind('.' + this.widgetName),
                    this._mouseMoveDelegate && e(document).unbind('mousemove.' + this.widgetName, this._mouseMoveDelegate).unbind('mouseup.' + this.widgetName, this._mouseUpDelegate)
                },
                _mouseDown: function (t) {
                    if (!n) {
                        this._mouseStarted && this._mouseUp(t),
                            this._mouseDownEvent = t;
                        var r = this,
                            i = 1 === t.which,
                            s = 'string' == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
                        return i && !s && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                            r.mouseDelayMet = !0
                        }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0)  : (!0 === e.data(t.target, this.widgetName + '.preventClickEvent') && e.removeData(t.target, this.widgetName + '.preventClickEvent'), this._mouseMoveDelegate = function (e) {
                            return r._mouseMove(e)
                        }, this._mouseUpDelegate = function (e) {
                            return r._mouseUp(e)
                        }, e(document).bind('mousemove.' + this.widgetName, this._mouseMoveDelegate).bind('mouseup.' + this.widgetName, this._mouseUpDelegate), t.preventDefault(), n = !0, !0))  : !0
                    }
                },
                _mouseMove: function (t) {
                    return e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button ? this._mouseUp(t)  : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault())  : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t)  : this._mouseUp(t)), !this._mouseStarted)
                },
                _mouseUp: function (t) {
                    return e(document).unbind('mousemove.' + this.widgetName, this._mouseMoveDelegate).unbind('mouseup.' + this.widgetName, this._mouseUpDelegate),
                    this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + '.preventClickEvent', !0), this._mouseStop(t)),
                        !1
                },
                _mouseDistanceMet: function (e) {
                    return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
                },
                _mouseDelayMet: function () {
                    return this.mouseDelayMet
                },
                _mouseStart: function () {
                },
                _mouseDrag: function () {
                },
                _mouseStop: function () {
                },
                _mouseCapture: function () {
                    return !0
                }
            })
    }(jQuery),
    function (e, t) {
        function h(e, t, n) {
            return [parseInt(e[0], 10) * (l.test(e[0]) ? t / 100 : 1),
                parseInt(e[1], 10) * (l.test(e[1]) ? n / 100 : 1)]
        }
        function p(t, n) {
            return parseInt(e.css(t, n), 10) || 0
        }
        function d(t) {
            var n = t[0];
            return 9 === n.nodeType ? {
                width: t.width(),
                height: t.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            }
                : e.isWindow(n) ? {
                width: t.width(),
                height: t.height(),
                offset: {
                    top: t.scrollTop(),
                    left: t.scrollLeft()
                }
            }
                : n.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: n.pageY,
                    left: n.pageX
                }
            }
                : {
                width: t.outerWidth(),
                height: t.outerHeight(),
                offset: t.offset()
            }
        }
        e.ui = e.ui || {
            };
        var n,
            r = Math.max,
            i = Math.abs,
            s = Math.round,
            o = /left|center|right/,
            u = /top|center|bottom/,
            a = /[\+\-]\d+%?/,
            f = /^\w+/,
            l = /%$/,
            c = e.fn.position;
        e.position = {
            scrollbarWidth: function () {
                if (n !== t) return n;
                var r,
                    i,
                    s = e('<div style=\'display:block;width:50px;height:50px;overflow:hidden;\'><div style=\'height:100px;width:auto;\'></div></div>'),
                    o = s.children() [0];
                return e('body').append(s),
                    r = o.offsetWidth,
                    s.css('overflow', 'scroll'),
                    i = o.offsetWidth,
                r === i && (i = s[0].clientWidth),
                    s.remove(),
                    n = r - i
            },
            getScrollInfo: function (t) {
                var n = t.isWindow ? '' : t.element.css('overflow-x'),
                    r = t.isWindow ? '' : t.element.css('overflow-y'),
                    i = 'scroll' === n || 'auto' === n && t.width < t.element[0].scrollWidth,
                    s = 'scroll' === r || 'auto' === r && t.height < t.element[0].scrollHeight;
                return {
                    width: i ? e.position.scrollbarWidth()  : 0,
                    height: s ? e.position.scrollbarWidth()  : 0
                }
            },
            getWithinInfo: function (t) {
                var n = e(t || window),
                    r = e.isWindow(n[0]);
                return {
                    element: n,
                    isWindow: r,
                    offset: n.offset() || {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: n.scrollLeft(),
                    scrollTop: n.scrollTop(),
                    width: r ? n.width()  : n.outerWidth(),
                    height: r ? n.height()  : n.outerHeight()
                }
            }
        },
            e.fn.position = function (t) {
                if (!t || !t.of) return c.apply(this, arguments);
                t = e.extend({
                }, t);
                var n,
                    l,
                    v,
                    m,
                    g,
                    y,
                    b = e(t.of),
                    w = e.position.getWithinInfo(t.within),
                    E = e.position.getScrollInfo(w),
                    S = (t.collision || 'flip').split(' '),
                    x = {
                    };
                return y = d(b),
                b[0].preventDefault && (t.at = 'left top'),
                    l = y.width,
                    v = y.height,
                    m = y.offset,
                    g = e.extend({
                    }, m),
                    e.each(['my',
                        'at'], function () {
                        var n,
                            r,
                            e = (t[this] || '').split(' ');
                        1 === e.length && (e = o.test(e[0]) ? e.concat(['center'])  : u.test(e[0]) ? [
                            'center'
                        ].concat(e)  : [
                            'center',
                            'center'
                        ]),
                            e[0] = o.test(e[0]) ? e[0] : 'center',
                            e[1] = u.test(e[1]) ? e[1] : 'center',
                            n = a.exec(e[0]),
                            r = a.exec(e[1]),
                            x[this] = [
                                n ? n[0] : 0,
                                r ? r[0] : 0
                            ],
                            t[this] = [
                                f.exec(e[0]) [0],
                                f.exec(e[1]) [0]
                            ]
                    }),
                1 === S.length && (S[1] = S[0]),
                    'right' === t.at[0] ? g.left += l : 'center' === t.at[0] && (g.left += l / 2),
                    'bottom' === t.at[1] ? g.top += v : 'center' === t.at[1] && (g.top += v / 2),
                    n = h(x.at, l, v),
                    g.left += n[0],
                    g.top += n[1],
                    this.each(function () {
                        var o,
                            u,
                            a = e(this),
                            f = a.outerWidth(),
                            c = a.outerHeight(),
                            d = p(this, 'marginLeft'),
                            y = p(this, 'marginTop'),
                            T = f + d + p(this, 'marginRight') + E.width,
                            N = c + y + p(this, 'marginBottom') + E.height,
                            C = e.extend({
                            }, g),
                            k = h(x.my, a.outerWidth(), a.outerHeight());
                        'right' === t.my[0] ? C.left -= f : 'center' === t.my[0] && (C.left -= f / 2),
                            'bottom' === t.my[1] ? C.top -= c : 'center' === t.my[1] && (C.top -= c / 2),
                            C.left += k[0],
                            C.top += k[1],
                        e.support.offsetFractions || (C.left = s(C.left), C.top = s(C.top)),
                            o = {
                                marginLeft: d,
                                marginTop: y
                            },
                            e.each(['left',
                                'top'], function (r, i) {
                                e.ui.position[S[r]] && e.ui.position[S[r]][i](C, {
                                    targetWidth: l,
                                    targetHeight: v,
                                    elemWidth: f,
                                    elemHeight: c,
                                    collisionPosition: o,
                                    collisionWidth: T,
                                    collisionHeight: N,
                                    offset: [
                                        n[0] + k[0],
                                        n[1] + k[1]
                                    ],
                                    my: t.my,
                                    at: t.at,
                                    within: w,
                                    elem: a
                                })
                            }),
                        t.using && (u = function (e) {
                            var n = m.left - C.left,
                                s = n + l - f,
                                o = m.top - C.top,
                                u = o + v - c,
                                h = {
                                    target: {
                                        element: b,
                                        left: m.left,
                                        top: m.top,
                                        width: l,
                                        height: v
                                    },
                                    element: {
                                        element: a,
                                        left: C.left,
                                        top: C.top,
                                        width: f,
                                        height: c
                                    },
                                    horizontal: 0 > s ? 'left' : n > 0 ? 'right' : 'center',
                                    vertical: 0 > u ? 'top' : o > 0 ? 'bottom' : 'middle'
                                };
                            f > l && i(n + s) < l && (h.horizontal = 'center'),
                            c > v && i(o + u) < v && (h.vertical = 'middle'),
                                h.important = r(i(n), i(s)) > r(i(o), i(u)) ? 'horizontal' : 'vertical',
                                t.using.call(this, e, h)
                        }),
                            a.offset(e.extend(C, {
                                using: u
                            }))
                    })
            },
            e.ui.position = {
                fit: {
                    left: function (e, t) {
                        var f,
                            n = t.within,
                            i = n.isWindow ? n.scrollLeft : n.offset.left,
                            s = n.width,
                            o = e.left - t.collisionPosition.marginLeft,
                            u = i - o,
                            a = o + t.collisionWidth - s - i;
                        t.collisionWidth > s ? u > 0 && 0 >= a ? (f = e.left + u + t.collisionWidth - s - i, e.left += u - f)  : e.left = a > 0 && 0 >= u ? i : u > a ? i + s - t.collisionWidth : i : u > 0 ? e.left += u : a > 0 ? e.left -= a : e.left = r(e.left - o, e.left)
                    },
                    top: function (e, t) {
                        var f,
                            n = t.within,
                            i = n.isWindow ? n.scrollTop : n.offset.top,
                            s = t.within.height,
                            o = e.top - t.collisionPosition.marginTop,
                            u = i - o,
                            a = o + t.collisionHeight - s - i;
                        t.collisionHeight > s ? u > 0 && 0 >= a ? (f = e.top + u + t.collisionHeight - s - i, e.top += u - f)  : e.top = a > 0 && 0 >= u ? i : u > a ? i + s - t.collisionHeight : i : u > 0 ? e.top += u : a > 0 ? e.top -= a : e.top = r(e.top - o, e.top)
                    }
                },
                flip: {
                    left: function (e, t) {
                        var p,
                            d,
                            n = t.within,
                            r = n.offset.left + n.scrollLeft,
                            s = n.width,
                            o = n.isWindow ? n.scrollLeft : n.offset.left,
                            u = e.left - t.collisionPosition.marginLeft,
                            a = u - o,
                            f = u + t.collisionWidth - s - o,
                            l = 'left' === t.my[0] ? - t.elemWidth : 'right' === t.my[0] ? t.elemWidth : 0,
                            c = 'left' === t.at[0] ? t.targetWidth : 'right' === t.at[0] ? - t.targetWidth : 0,
                            h = - 2 * t.offset[0];
                        0 > a ? (p = e.left + l + c + h + t.collisionWidth - s - r, (0 > p || p < i(a)) && (e.left += l + c + h))  : f > 0 && (d = e.left - t.collisionPosition.marginLeft + l + c + h - o, (d > 0 || i(d) < f) && (e.left += l + c + h))
                    },
                    top: function (e, t) {
                        var d,
                            v,
                            n = t.within,
                            r = n.offset.top + n.scrollTop,
                            s = n.height,
                            o = n.isWindow ? n.scrollTop : n.offset.top,
                            u = e.top - t.collisionPosition.marginTop,
                            a = u - o,
                            f = u + t.collisionHeight - s - o,
                            l = 'top' === t.my[1],
                            c = l ? - t.elemHeight : 'bottom' === t.my[1] ? t.elemHeight : 0,
                            h = 'top' === t.at[1] ? t.targetHeight : 'bottom' === t.at[1] ? - t.targetHeight : 0,
                            p = - 2 * t.offset[1];
                        0 > a ? (v = e.top + c + h + p + t.collisionHeight - s - r, e.top + c + h + p > a && (0 > v || v < i(a)) && (e.top += c + h + p))  : f > 0 && (d = e.top - t.collisionPosition.marginTop + c + h + p - o, e.top + c + h + p > f && (d > 0 || i(d) < f) && (e.top += c + h + p))
                    }
                },
                flipfit: {
                    left: function () {
                        e.ui.position.flip.left.apply(this, arguments),
                            e.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function () {
                        e.ui.position.flip.top.apply(this, arguments),
                            e.ui.position.fit.top.apply(this, arguments)
                    }
                }
            },
            function () {
                var t,
                    n,
                    r,
                    i,
                    s,
                    o = document.getElementsByTagName('body') [0],
                    u = document.createElement('div');
                t = document.createElement(o ? 'div' : 'body'),
                    r = {
                        visibility: 'hidden',
                        width: 0,
                        height: 0,
                        border: 0,
                        margin: 0,
                        background: 'none'
                    },
                o && e.extend(r, {
                    position: 'absolute',
                    left: '-1000px',
                    top: '-1000px'
                });
                for (s in r) t.style[s] = r[s];
                t.appendChild(u),
                    n = o || document.documentElement,
                    n.insertBefore(t, n.firstChild),
                    u.style.cssText = 'position: absolute; left: 10.7432222px;',
                    i = e(u).offset().left,
                    e.support.offsetFractions = i > 10 && 11 > i,
                    t.innerHTML = '',
                    n.removeChild(t)
            }()
    }(jQuery),
    function (e) {
        e.widget('ui.draggable', e.ui.mouse, {
            version: '1.10.0',
            widgetEventPrefix: 'drag',
            options: {
                addClasses: !0,
                appendTo: 'parent',
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: 'auto',
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: 'original',
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: 'default',
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: 'both',
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
                drag: null,
                start: null,
                stop: null
            },
            _create: function () {
                'original' === this.options.helper && !/^(?:r|a|f)/.test(this.element.css('position')) && (this.element[0].style.position = 'relative'),
                this.options.addClasses && this.element.addClass('ui-draggable'),
                this.options.disabled && this.element.addClass('ui-draggable-disabled'),
                    this._mouseInit()
            },
            _destroy: function () {
                this.element.removeClass('ui-draggable ui-draggable-dragging ui-draggable-disabled'),
                    this._mouseDestroy()
            },
            _mouseCapture: function (t) {
                var n = this.options;
                return this.helper || n.disabled || e(t.target).closest('.ui-resizable-handle').length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(n.iframeFix === !0 ? 'iframe' : n.iframeFix).each(function () {
                    e('<div class=\'ui-draggable-iframeFix\' style=\'background: #fff;\'></div>').css({
                        width: this.offsetWidth + 'px',
                        height: this.offsetHeight + 'px',
                        position: 'absolute',
                        opacity: '0.001',
                        zIndex: 1000
                    }).css(e(this).offset()).appendTo('body')
                }), !0)  : !1)
            },
            _mouseStart: function (t) {
                var n = this.options;
                return this.helper = this._createHelper(t),
                    this.helper.addClass('ui-draggable-dragging'),
                    this._cacheHelperProportions(),
                e.ui.ddmanager && (e.ui.ddmanager.current = this),
                    this._cacheMargins(),
                    this.cssPosition = this.helper.css('position'),
                    this.scrollParent = this.helper.scrollParent(),
                    this.offset = this.positionAbs = this.element.offset(),
                    this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    },
                    e.extend(this.offset, {
                        click: {
                            left: t.pageX - this.offset.left,
                            top: t.pageY - this.offset.top
                        },
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }),
                    this.originalPosition = this.position = this._generatePosition(t),
                    this.originalPageX = t.pageX,
                    this.originalPageY = t.pageY,
                n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt),
                n.containment && this._setContainment(),
                    this._trigger('start', t) === !1 ? (this._clear(), !1)  : (this._cacheHelperProportions(), e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
            },
            _mouseDrag: function (t, n) {
                if (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo('absolute'), !n) {
                    var r = this._uiHash();
                    if (this._trigger('drag', t, r) === !1) return this._mouseUp({
                    }),
                        !1;
                    this.position = r.position
                }
                return this.options.axis && 'y' === this.options.axis || (this.helper[0].style.left = this.position.left + 'px'),
                this.options.axis && 'x' === this.options.axis || (this.helper[0].style.top = this.position.top + 'px'),
                e.ui.ddmanager && e.ui.ddmanager.drag(this, t),
                    !1
            },
            _mouseStop: function (t) {
                var n,
                    r = this,
                    i = !1,
                    s = !1;
                for (e.ui.ddmanager && !this.options.dropBehaviour && (s = e.ui.ddmanager.drop(this, t)), this.dropped && (s = this.dropped, this.dropped = !1), n = this.element[0]; n && (n = n.parentNode); ) n === document && (i = !0);
                return i || 'original' !== this.options.helper ? ('invalid' === this.options.revert && !s || 'valid' === this.options.revert && s || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                    r._trigger('stop', t) !== !1 && r._clear()
                })  : this._trigger('stop', t) !== !1 && this._clear(), !1)  : !1
            },
            _mouseUp: function (t) {
                return e('div.ui-draggable-iframeFix').each(function () {
                    this.parentNode.removeChild(this)
                }),
                e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t),
                    e.ui.mouse.prototype._mouseUp.call(this, t)
            },
            cancel: function () {
                return this.helper.is('.ui-draggable-dragging') ? this._mouseUp({
                })  : this._clear(),
                    this
            },
            _getHandle: function (t) {
                var n = this.options.handle && e(this.options.handle, this.element).length ? !1 : !0;
                return e(this.options.handle, this.element).find('*').addBack().each(function () {
                    this === t.target && (n = !0)
                }),
                    n
            },
            _createHelper: function (t) {
                var n = this.options,
                    r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [
                        t
                    ]))  : 'clone' === n.helper ? this.element.clone().removeAttr('id')  : this.element;
                return r.parents('body').length || r.appendTo('parent' === n.appendTo ? this.element[0].parentNode : n.appendTo),
                r[0] !== this.element[0] && !/(fixed|absolute)/.test(r.css('position')) && r.css('position', 'absolute'),
                    r
            },
            _adjustOffsetFromHelper: function (t) {
                'string' == typeof t && (t = t.split(' ')),
                e.isArray(t) && (t = {
                    left: + t[0],
                    top: + t[1] || 0
                }),
                'left' in t && (this.offset.click.left = t.left + this.margins.left),
                'right' in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
                'top' in t && (this.offset.click.top = t.top + this.margins.top),
                'bottom' in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
            },
            _getParentOffset: function () {
                this.offsetParent = this.helper.offsetParent();
                var t = this.offsetParent.offset();
                return 'absolute' === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()),
                (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && 'html' === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                    top: 0,
                    left: 0
                }),
                {
                    top: t.top + (parseInt(this.offsetParent.css('borderTopWidth'), 10) || 0),
                    left: t.left + (parseInt(this.offsetParent.css('borderLeftWidth'), 10) || 0)
                }
            },
            _getRelativeOffset: function () {
                if ('relative' === this.cssPosition) {
                    var e = this.element.position();
                    return {
                        top: e.top - (parseInt(this.helper.css('top'), 10) || 0) + this.scrollParent.scrollTop(),
                        left: e.left - (parseInt(this.helper.css('left'), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function () {
                this.margins = {
                    left: parseInt(this.element.css('marginLeft'), 10) || 0,
                    top: parseInt(this.element.css('marginTop'), 10) || 0,
                    right: parseInt(this.element.css('marginRight'), 10) || 0,
                    bottom: parseInt(this.element.css('marginBottom'), 10) || 0
                }
            },
            _cacheHelperProportions: function () {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function () {
                var t,
                    n,
                    r,
                    i = this.options;
                if ('parent' === i.containment && (i.containment = this.helper[0].parentNode), ('document' === i.containment || 'window' === i.containment) && (this.containment = [
                        'document' === i.containment ? 0 : e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
                        'document' === i.containment ? 0 : e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top,
                        ('document' === i.containment ? 0 : e(window).scrollLeft()) + e('document' === i.containment ? document : window).width() - this.helperProportions.width - this.margins.left,
                        ('document' === i.containment ? 0 : e(window).scrollTop()) + (e('document' === i.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
                    ]), /^(document|window|parent)$/.test(i.containment) || i.containment.constructor === Array) i.containment.constructor === Array && (this.containment = i.containment);
                else {
                    if (n = e(i.containment), r = n[0], !r) return;
                    t = 'hidden' !== e(r).css('overflow'),
                        this.containment = [
                            (parseInt(e(r).css('borderLeftWidth'), 10) || 0) + (parseInt(e(r).css('paddingLeft'), 10) || 0),
                            (parseInt(e(r).css('borderTopWidth'), 10) || 0) + (parseInt(e(r).css('paddingTop'), 10) || 0),
                            (t ? Math.max(r.scrollWidth, r.offsetWidth)  : r.offsetWidth) - (parseInt(e(r).css('borderLeftWidth'), 10) || 0) - (parseInt(e(r).css('paddingRight'), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right,
                            (t ? Math.max(r.scrollHeight, r.offsetHeight)  : r.offsetHeight) - (parseInt(e(r).css('borderTopWidth'), 10) || 0) - (parseInt(e(r).css('paddingBottom'), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom
                        ],
                        this.relative_container = n
                }
            },
            _convertPositionTo: function (t, n) {
                n || (n = this.position);
                var r = 'absolute' === t ? 1 : - 1,
                    i = 'absolute' !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    s = /(html|body)/i.test(i[0].tagName);
                return {
                    top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - ('fixed' === this.cssPosition ? - this.scrollParent.scrollTop()  : s ? 0 : i.scrollTop()) * r,
                    left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - ('fixed' === this.cssPosition ? - this.scrollParent.scrollLeft()  : s ? 0 : i.scrollLeft()) * r
                }
            },
            _generatePosition: function (t) {
                var n,
                    r,
                    i,
                    s,
                    o = this.options,
                    u = 'absolute' !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    a = /(html|body)/i.test(u[0].tagName),
                    f = t.pageX,
                    l = t.pageY;
                return this.originalPosition && (this.containment && (this.relative_container ? (r = this.relative_container.offset(), n = [
                    this.containment[0] + r.left,
                    this.containment[1] + r.top,
                    this.containment[2] + r.left,
                    this.containment[3] + r.top
                ])  : n = this.containment, t.pageX - this.offset.click.left < n[0] && (f = n[0] + this.offset.click.left), t.pageY - this.offset.click.top < n[1] && (l = n[1] + this.offset.click.top), t.pageX - this.offset.click.left > n[2] && (f = n[2] + this.offset.click.left), t.pageY - this.offset.click.top > n[3] && (l = n[3] + this.offset.click.top)), o.grid && (i = o.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, l = n ? i - this.offset.click.top >= n[1] || i - this.offset.click.top > n[3] ? i : i - this.offset.click.top >= n[1] ? i - o.grid[1] : i + o.grid[1] : i, s = o.grid[0] ? this.originalPageX + Math.round((f - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, f = n ? s - this.offset.click.left >= n[0] || s - this.offset.click.left > n[2] ? s : s - this.offset.click.left >= n[0] ? s - o.grid[0] : s + o.grid[0] : s)),
                {
                    top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ('fixed' === this.cssPosition ? - this.scrollParent.scrollTop()  : a ? 0 : u.scrollTop()),
                    left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ('fixed' === this.cssPosition ? - this.scrollParent.scrollLeft()  : a ? 0 : u.scrollLeft())
                }
            },
            _clear: function () {
                this.helper.removeClass('ui-draggable-dragging'),
                this.helper[0] !== this.element[0] && !this.cancelHelperRemoval && this.helper.remove(),
                    this.helper = null,
                    this.cancelHelperRemoval = !1
            },
            _trigger: function (t, n, r) {
                return r = r || this._uiHash(),
                    e.ui.plugin.call(this, t, [
                        n,
                        r
                    ]),
                'drag' === t && (this.positionAbs = this._convertPositionTo('absolute')),
                    e.Widget.prototype._trigger.call(this, t, n, r)
            },
            plugins: {
            },
            _uiHash: function () {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                }
            }
        }),
            e.ui.plugin.add('draggable', 'connectToSortable', {
                start: function (t, n) {
                    var r = e(this).data('ui-draggable'),
                        i = r.options,
                        s = e.extend({
                        }, n, {
                            item: r.element
                        });
                    r.sortables = [
                    ],
                        e(i.connectToSortable).each(function () {
                            var n = e.data(this, 'ui-sortable');
                            n && !n.options.disabled && (r.sortables.push({
                                instance: n,
                                shouldRevert: n.options.revert
                            }), n.refreshPositions(), n._trigger('activate', t, s))
                        })
                },
                stop: function (t, n) {
                    var r = e(this).data('ui-draggable'),
                        i = e.extend({
                        }, n, {
                            item: r.element
                        });
                    e.each(r.sortables, function () {
                        this.instance.isOver ? (this.instance.isOver = 0, r.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, 'original' === r.options.helper && this.instance.currentItem.css({
                            top: 'auto',
                            left: 'auto'
                        }))  : (this.instance.cancelHelperRemoval = !1, this.instance._trigger('deactivate', t, i))
                    })
                },
                drag: function (t, n) {
                    var r = e(this).data('ui-draggable'),
                        i = this;
                    e.each(r.sortables, function () {
                        var s = !1,
                            o = this;
                        this.instance.positionAbs = r.positionAbs,
                            this.instance.helperProportions = r.helperProportions,
                            this.instance.offset.click = r.offset.click,
                        this.instance._intersectsWith(this.instance.containerCache) && (s = !0, e.each(r.sortables, function () {
                            return this.instance.positionAbs = r.positionAbs,
                                this.instance.helperProportions = r.helperProportions,
                                this.instance.offset.click = r.offset.click,
                            this !== o && this.instance._intersectsWith(this.instance.containerCache) && e.ui.contains(o.instance.element[0], this.instance.element[0]) && (s = !1),
                                s
                        })),
                            s ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(i).clone().removeAttr('id').appendTo(this.instance.element).data('ui-sortable-item', !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
                                return n.helper[0]
                            }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = r.offset.click.top, this.instance.offset.click.left = r.offset.click.left, this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top, r._trigger('toSortable', t), r.dropped = this.instance.element, r.currentItem = r.element, this.instance.fromOutside = r), this.instance.currentItem && this.instance._mouseDrag(t))  : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger('out', t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), r._trigger('fromSortable', t), r.dropped = !1)
                    })
                }
            }),
            e.ui.plugin.add('draggable', 'cursor', {
                start: function () {
                    var t = e('body'),
                        n = e(this).data('ui-draggable').options;
                    t.css('cursor') && (n._cursor = t.css('cursor')),
                        t.css('cursor', n.cursor)
                },
                stop: function () {
                    var t = e(this).data('ui-draggable').options;
                    t._cursor && e('body').css('cursor', t._cursor)
                }
            }),
            e.ui.plugin.add('draggable', 'opacity', {
                start: function (t, n) {
                    var r = e(n.helper),
                        i = e(this).data('ui-draggable').options;
                    r.css('opacity') && (i._opacity = r.css('opacity')),
                        r.css('opacity', i.opacity)
                },
                stop: function (t, n) {
                    var r = e(this).data('ui-draggable').options;
                    r._opacity && e(n.helper).css('opacity', r._opacity)
                }
            }),
            e.ui.plugin.add('draggable', 'scroll', {
                start: function () {
                    var t = e(this).data('ui-draggable');
                    t.scrollParent[0] !== document && 'HTML' !== t.scrollParent[0].tagName && (t.overflowOffset = t.scrollParent.offset())
                },
                drag: function (t) {
                    var n = e(this).data('ui-draggable'),
                        r = n.options,
                        i = !1;
                    n.scrollParent[0] !== document && 'HTML' !== n.scrollParent[0].tagName ? (r.axis && 'x' === r.axis || (n.overflowOffset.top + n.scrollParent[0].offsetHeight - t.pageY < r.scrollSensitivity ? n.scrollParent[0].scrollTop = i = n.scrollParent[0].scrollTop + r.scrollSpeed : t.pageY - n.overflowOffset.top < r.scrollSensitivity && (n.scrollParent[0].scrollTop = i = n.scrollParent[0].scrollTop - r.scrollSpeed)), r.axis && 'y' === r.axis || (n.overflowOffset.left + n.scrollParent[0].offsetWidth - t.pageX < r.scrollSensitivity ? n.scrollParent[0].scrollLeft = i = n.scrollParent[0].scrollLeft + r.scrollSpeed : t.pageX - n.overflowOffset.left < r.scrollSensitivity && (n.scrollParent[0].scrollLeft = i = n.scrollParent[0].scrollLeft - r.scrollSpeed)))  : (r.axis && 'x' === r.axis || (t.pageY - e(document).scrollTop() < r.scrollSensitivity ? i = e(document).scrollTop(e(document).scrollTop() - r.scrollSpeed)  : e(window).height() - (t.pageY - e(document).scrollTop()) < r.scrollSensitivity && (i = e(document).scrollTop(e(document).scrollTop() + r.scrollSpeed))), r.axis && 'y' === r.axis || (t.pageX - e(document).scrollLeft() < r.scrollSensitivity ? i = e(document).scrollLeft(e(document).scrollLeft() - r.scrollSpeed)  : e(window).width() - (t.pageX - e(document).scrollLeft()) < r.scrollSensitivity && (i = e(document).scrollLeft(e(document).scrollLeft() + r.scrollSpeed)))),
                    i !== !1 && e.ui.ddmanager && !r.dropBehaviour && e.ui.ddmanager.prepareOffsets(n, t)
                }
            }),
            e.ui.plugin.add('draggable', 'snap', {
                start: function () {
                    var t = e(this).data('ui-draggable'),
                        n = t.options;
                    t.snapElements = [
                    ],
                        e(n.snap.constructor !== String ? n.snap.items || ':data(ui-draggable)' : n.snap).each(function () {
                            var n = e(this),
                                r = n.offset();
                            this !== t.element[0] && t.snapElements.push({
                                item: this,
                                width: n.outerWidth(),
                                height: n.outerHeight(),
                                top: r.top,
                                left: r.left
                            })
                        })
                },
                drag: function (t, n) {
                    var r,
                        i,
                        s,
                        o,
                        u,
                        a,
                        f,
                        l,
                        c,
                        h,
                        p = e(this).data('ui-draggable'),
                        d = p.options,
                        v = d.snapTolerance,
                        m = n.offset.left,
                        g = m + p.helperProportions.width,
                        y = n.offset.top,
                        b = y + p.helperProportions.height;
                    for (c = p.snapElements.length - 1; c >= 0; c--) u = p.snapElements[c].left,
                        a = u + p.snapElements[c].width,
                        f = p.snapElements[c].top,
                        l = f + p.snapElements[c].height,
                        m > u - v && a + v > m && y > f - v && l + v > y || m > u - v && a + v > m && b > f - v && l + v > b || g > u - v && a + v > g && y > f - v && l + v > y || g > u - v && a + v > g && b > f - v && l + v > b ? ('inner' !== d.snapMode && (r = Math.abs(f - b) <= v, i = Math.abs(l - y) <= v, s = Math.abs(u - g) <= v, o = Math.abs(a - m) <= v, r && (n.position.top = p._convertPositionTo('relative', {
                                top: f - p.helperProportions.height,
                                left: 0
                            }).top - p.margins.top), i && (n.position.top = p._convertPositionTo('relative', {
                                top: l,
                                left: 0
                            }).top - p.margins.top), s && (n.position.left = p._convertPositionTo('relative', {
                                top: 0,
                                left: u - p.helperProportions.width
                            }).left - p.margins.left), o && (n.position.left = p._convertPositionTo('relative', {
                                top: 0,
                                left: a
                            }).left - p.margins.left)), h = r || i || s || o, 'outer' !== d.snapMode && (r = Math.abs(f - y) <= v, i = Math.abs(l - b) <= v, s = Math.abs(u - m) <= v, o = Math.abs(a - g) <= v, r && (n.position.top = p._convertPositionTo('relative', {
                                top: f,
                                left: 0
                            }).top - p.margins.top), i && (n.position.top = p._convertPositionTo('relative', {
                                top: l - p.helperProportions.height,
                                left: 0
                            }).top - p.margins.top), s && (n.position.left = p._convertPositionTo('relative', {
                                top: 0,
                                left: u
                            }).left - p.margins.left), o && (n.position.left = p._convertPositionTo('relative', {
                                top: 0,
                                left: a - p.helperProportions.width
                            }).left - p.margins.left)), !p.snapElements[c].snapping && (r || i || s || o || h) && p.options.snap.snap && p.options.snap.snap.call(p.element, t, e.extend(p._uiHash(), {
                            snapItem: p.snapElements[c].item
                        })), p.snapElements[c].snapping = r || i || s || o || h)  : (p.snapElements[c].snapping && p.options.snap.release && p.options.snap.release.call(p.element, t, e.extend(p._uiHash(), {
                            snapItem: p.snapElements[c].item
                        })), p.snapElements[c].snapping = !1)
                }
            }),
            e.ui.plugin.add('draggable', 'stack', {
                start: function () {
                    var t,
                        n = e(this).data('ui-draggable').options,
                        r = e.makeArray(e(n.stack)).sort(function (t, n) {
                            return (parseInt(e(t).css('zIndex'), 10) || 0) - (parseInt(e(n).css('zIndex'), 10) || 0)
                        });
                    r.length && (t = parseInt(r[0].style.zIndex, 10) || 0, e(r).each(function (e) {
                        this.style.zIndex = t + e
                    }), this[0].style.zIndex = t + r.length)
                }
            }),
            e.ui.plugin.add('draggable', 'zIndex', {
                start: function (t, n) {
                    var r = e(n.helper),
                        i = e(this).data('ui-draggable').options;
                    r.css('zIndex') && (i._zIndex = r.css('zIndex')),
                        r.css('zIndex', i.zIndex)
                },
                stop: function (t, n) {
                    var r = e(this).data('ui-draggable').options;
                    r._zIndex && e(n.helper).css('zIndex', r._zIndex)
                }
            })
    }(jQuery),
    function (e) {
        function n(e, t, n) {
            return e > t && t + n > e
        }
        e.widget('ui.droppable', {
            version: '1.10.0',
            widgetEventPrefix: 'drop',
            options: {
                accept: '*',
                activeClass: !1,
                addClasses: !0,
                greedy: !1,
                hoverClass: !1,
                scope: 'default',
                tolerance: 'intersect',
                activate: null,
                deactivate: null,
                drop: null,
                out: null,
                over: null
            },
            _create: function () {
                var t = this.options,
                    n = t.accept;
                this.isover = !1,
                    this.isout = !0,
                    this.accept = e.isFunction(n) ? n : function (e) {
                        return e.is(n)
                    },
                    this.proportions = {
                        width: this.element[0].offsetWidth,
                        height: this.element[0].offsetHeight
                    },
                    e.ui.ddmanager.droppables[t.scope] = e.ui.ddmanager.droppables[t.scope] || [],
                    e.ui.ddmanager.droppables[t.scope].push(this),
                t.addClasses && this.element.addClass('ui-droppable')
            },
            _destroy: function () {
                for (var t = 0, n = e.ui.ddmanager.droppables[this.options.scope]; t < n.length; t++) n[t] === this && n.splice(t, 1);
                this.element.removeClass('ui-droppable ui-droppable-disabled')
            },
            _setOption: function (t, n) {
                'accept' === t && (this.accept = e.isFunction(n) ? n : function (e) {
                    return e.is(n)
                }),
                    e.Widget.prototype._setOption.apply(this, arguments)
            },
            _activate: function (t) {
                var n = e.ui.ddmanager.current;
                this.options.activeClass && this.element.addClass(this.options.activeClass),
                n && this._trigger('activate', t, this.ui(n))
            },
            _deactivate: function (t) {
                var n = e.ui.ddmanager.current;
                this.options.activeClass && this.element.removeClass(this.options.activeClass),
                n && this._trigger('deactivate', t, this.ui(n))
            },
            _over: function (t) {
                var n = e.ui.ddmanager.current;
                n && (n.currentItem || n.element) [0] !== this.element[0] && this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger('over', t, this.ui(n)))
            },
            _out: function (t) {
                var n = e.ui.ddmanager.current;
                n && (n.currentItem || n.element) [0] !== this.element[0] && this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger('out', t, this.ui(n)))
            },
            _drop: function (t, n) {
                var r = n || e.ui.ddmanager.current,
                    i = !1;
                return r && (r.currentItem || r.element) [0] !== this.element[0] ? (this.element.find(':data(ui-droppable)').not('.ui-draggable-dragging').each(function () {
                    var t = e.data(this, 'ui-droppable');
                    return t.options.greedy && !t.options.disabled && t.options.scope === r.options.scope && t.accept.call(t.element[0], r.currentItem || r.element) && e.ui.intersect(r, e.extend(t, {
                        offset: t.element.offset()
                    }), t.options.tolerance) ? (i = !0, !1)  : void 0
                }), i ? !1 : this.accept.call(this.element[0], r.currentItem || r.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger('drop', t, this.ui(r)), this.element)  : !1)  : !1
            },
            ui: function (e) {
                return {
                    draggable: e.currentItem || e.element,
                    helper: e.helper,
                    position: e.position,
                    offset: e.positionAbs
                }
            }
        }),
            e.ui.intersect = function (e, t, r) {
                if (!t.offset) return !1;
                var i,
                    s,
                    o = (e.positionAbs || e.position.absolute).left,
                    u = o + e.helperProportions.width,
                    a = (e.positionAbs || e.position.absolute).top,
                    f = a + e.helperProportions.height,
                    l = t.offset.left,
                    c = l + t.proportions.width,
                    h = t.offset.top,
                    p = h + t.proportions.height;
                switch (r) {
                    case 'fit':
                        return o >= l && c >= u && a >= h && p >= f;
                    case 'intersect':
                        return l < o + e.helperProportions.width / 2 && u - e.helperProportions.width / 2 < c && h < a + e.helperProportions.height / 2 && f - e.helperProportions.height / 2 < p;
                    case 'pointer':
                        return i = (e.positionAbs || e.position.absolute).left + (e.clickOffset || e.offset.click).left,
                            s = (e.positionAbs || e.position.absolute).top + (e.clickOffset || e.offset.click).top,
                        n(s, h, t.proportions.height) && n(i, l, t.proportions.width);
                    case 'touch':
                        return (a >= h && p >= a || f >= h && p >= f || h > a && f > p) && (o >= l && c >= o || u >= l && c >= u || l > o && u > c);
                    default:
                        return !1
                }
            },
            e.ui.ddmanager = {
                current: null,
                droppables: {
                    'default': [
                    ]
                },
                prepareOffsets: function (t, n) {
                    var r,
                        i,
                        s = e.ui.ddmanager.droppables[t.options.scope] || [],
                        o = n ? n.type : null,
                        u = (t.currentItem || t.element).find(':data(ui-droppable)').addBack();
                    e: for (r = 0; r < s.length; r++) if (!(s[r].options.disabled || t && !s[r].accept.call(s[r].element[0], t.currentItem || t.element))) {
                        for (i = 0; i < u.length; i++) if (u[i] === s[r].element[0]) {
                            s[r].proportions.height = 0;
                            continue e
                        }
                        s[r].visible = 'none' !== s[r].element.css('display'),
                        s[r].visible && ('mousedown' === o && s[r]._activate.call(s[r], n), s[r].offset = s[r].element.offset(), s[r].proportions = {
                            width: s[r].element[0].offsetWidth,
                            height: s[r].element[0].offsetHeight
                        })
                    }
                },
                drop: function (t, n) {
                    var r = !1;
                    return e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () {
                        this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (r = this._drop.call(this, n) || r), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, n)))
                    }),
                        r
                },
                dragStart: function (t, n) {
                    t.element.parentsUntil('body').bind('scroll.droppable', function () {
                        t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
                    })
                },
                drag: function (t, n) {
                    t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, n),
                        e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () {
                            if (!this.options.disabled && !this.greedyChild && this.visible) {
                                var r,
                                    i,
                                    s,
                                    o = e.ui.intersect(t, this, this.options.tolerance),
                                    u = !o && this.isover ? 'isout' : o && !this.isover ? 'isover' : null;
                                u && (this.options.greedy && (i = this.options.scope, s = this.element.parents(':data(ui-droppable)').filter(function () {
                                    return e.data(this, 'ui-droppable').options.scope === i
                                }), s.length && (r = e.data(s[0], 'ui-droppable'), r.greedyChild = 'isover' === u)), r && 'isover' === u && (r.isover = !1, r.isout = !0, r._out.call(r, n)), this[u] = !0, this['isout' === u ? 'isover' : 'isout'] = !1, this['isover' === u ? '_over' : '_out'].call(this, n), r && 'isout' === u && (r.isout = !1, r.isover = !0, r._over.call(r, n)))
                            }
                        })
                },
                dragStop: function (t, n) {
                    t.element.parentsUntil('body').unbind('scroll.droppable'),
                    t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
                }
            }
    }(jQuery),
    function (e) {
        function n(e) {
            return parseInt(e, 10) || 0
        }
        function r(e) {
            return !isNaN(parseInt(e, 10))
        }
        e.widget('ui.resizable', e.ui.mouse, {
            version: '1.10.0',
            widgetEventPrefix: 'resize',
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: 'slow',
                animateEasing: 'swing',
                aspectRatio: !1,
                autoHide: !1,
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: 'e,s,se',
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 90,
                resize: null,
                start: null,
                stop: null
            },
            _create: function () {
                var t,
                    n,
                    r,
                    i,
                    s,
                    o = this,
                    u = this.options;
                if (this.element.addClass('ui-resizable'), e.extend(this, {
                        _aspectRatio: !!u.aspectRatio,
                        aspectRatio: u.aspectRatio,
                        originalElement: this.element,
                        _proportionallyResizeElements: [
                        ],
                        _helper: u.helper || u.ghost || u.animate ? u.helper || 'ui-resizable-helper' : null
                    }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e('<div class=\'ui-wrapper\' style=\'overflow: hidden;\'></div>').css({
                        position: this.element.css('position'),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css('top'),
                        left: this.element.css('left')
                    })), this.element = this.element.parent().data('ui-resizable', this.element.data('ui-resizable')), this.elementIsWrapper = !0, this.element.css({
                        marginLeft: this.originalElement.css('marginLeft'),
                        marginTop: this.originalElement.css('marginTop'),
                        marginRight: this.originalElement.css('marginRight'),
                        marginBottom: this.originalElement.css('marginBottom')
                    }), this.originalElement.css({
                        marginLeft: 0,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0
                    }), this.originalResizeStyle = this.originalElement.css('resize'), this.originalElement.css('resize', 'none'), this._proportionallyResizeElements.push(this.originalElement.css({
                        position: 'static',
                        zoom: 1,
                        display: 'block'
                    })), this.originalElement.css({
                        margin: this.originalElement.css('margin')
                    }), this._proportionallyResize()), this.handles = u.handles || (e('.ui-resizable-handle', this.element).length ? {
                            n: '.ui-resizable-n',
                            e: '.ui-resizable-e',
                            s: '.ui-resizable-s',
                            w: '.ui-resizable-w',
                            se: '.ui-resizable-se',
                            sw: '.ui-resizable-sw',
                            ne: '.ui-resizable-ne',
                            nw: '.ui-resizable-nw'
                        }
                            : 'e,s,se'), this.handles.constructor === String) for ('all' === this.handles && (this.handles = 'n,e,s,w,se,sw,ne,nw'), t = this.handles.split(','), this.handles = {
                }, n = 0; n < t.length; n++) r = e.trim(t[n]),
                    s = 'ui-resizable-' + r,
                    i = e('<div class=\'ui-resizable-handle ' + s + '\'></div>'),
                    i.css({
                        zIndex: u.zIndex
                    }),
                'se' === r && i.addClass('ui-icon ui-icon-gripsmall-diagonal-se'),
                    this.handles[r] = '.ui-resizable-' + r,
                    this.element.append(i);
                this._renderAxis = function (t) {
                    var n,
                        r,
                        i,
                        s;
                    t = t || this.element;
                    for (n in this.handles) this.handles[n].constructor === String && (this.handles[n] = e(this.handles[n], this.element).show()),
                    this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (r = e(this.handles[n], this.element), s = /sw|ne|nw|se|n|s/.test(n) ? r.outerHeight()  : r.outerWidth(), i = [
                        'padding',
                        /ne|nw|n/.test(n) ? 'Top' : /se|sw|s/.test(n) ? 'Bottom' : /^e$/.test(n) ? 'Right' : 'Left'
                    ].join(''), t.css(i, s), this._proportionallyResize()),
                        e(this.handles[n]).length
                },
                    this._renderAxis(this.element),
                    this._handles = e('.ui-resizable-handle', this.element).disableSelection(),
                    this._handles.mouseover(function () {
                        o.resizing || (this.className && (i = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = i && i[1] ? i[1] : 'se')
                    }),
                u.autoHide && (this._handles.hide(), e(this.element).addClass('ui-resizable-autohide').mouseenter(function () {
                    u.disabled || (e(this).removeClass('ui-resizable-autohide'), o._handles.show())
                }).mouseleave(function () {
                    u.disabled || o.resizing || (e(this).addClass('ui-resizable-autohide'), o._handles.hide())
                })),
                    this._mouseInit()
            },
            _destroy: function () {
                this._mouseDestroy();
                var t,
                    n = function (t) {
                        e(t).removeClass('ui-resizable ui-resizable-disabled ui-resizable-resizing').removeData('resizable').removeData('ui-resizable').unbind('.resizable').find('.ui-resizable-handle').remove()
                    };
                return this.elementIsWrapper && (n(this.element), t = this.element, this.originalElement.css({
                    position: t.css('position'),
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: t.css('top'),
                    left: t.css('left')
                }).insertAfter(t), t.remove()),
                    this.originalElement.css('resize', this.originalResizeStyle),
                    n(this.originalElement),
                    this
            },
            _mouseCapture: function (t) {
                var n,
                    r,
                    i = !1;
                for (n in this.handles) r = e(this.handles[n]) [0],
                (r === t.target || e.contains(r, t.target)) && (i = !0);
                return !this.options.disabled && i
            },
            _mouseStart: function (t) {
                var r,
                    i,
                    s,
                    o = this.options,
                    u = this.element.position(),
                    a = this.element;
                return this.resizing = !0,
                    /absolute/.test(a.css('position')) ? a.css({
                        position: 'absolute',
                        top: a.css('top'),
                        left: a.css('left')
                    })  : a.is('.ui-draggable') && a.css({
                        position: 'absolute',
                        top: u.top,
                        left: u.left
                    }),
                    this._renderProxy(),
                    r = n(this.helper.css('left')),
                    i = n(this.helper.css('top')),
                o.containment && (r += e(o.containment).scrollLeft() || 0, i += e(o.containment).scrollTop() || 0),
                    this.offset = this.helper.offset(),
                    this.position = {
                        left: r,
                        top: i
                    },
                    this.size = this._helper ? {
                        width: a.outerWidth(),
                        height: a.outerHeight()
                    }
                        : {
                        width: a.width(),
                        height: a.height()
                    },
                    this.originalSize = this._helper ? {
                        width: a.outerWidth(),
                        height: a.outerHeight()
                    }
                        : {
                        width: a.width(),
                        height: a.height()
                    },
                    this.originalPosition = {
                        left: r,
                        top: i
                    },
                    this.sizeDiff = {
                        width: a.outerWidth() - a.width(),
                        height: a.outerHeight() - a.height()
                    },
                    this.originalMousePosition = {
                        left: t.pageX,
                        top: t.pageY
                    },
                    this.aspectRatio = 'number' == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1,
                    s = e('.ui-resizable-' + this.axis).css('cursor'),
                    e('body').css('cursor', 'auto' === s ? this.axis + '-resize' : s),
                    a.addClass('ui-resizable-resizing'),
                    this._propagate('start', t),
                    !0
            },
            _mouseDrag: function (t) {
                var n,
                    r = this.helper,
                    i = {
                    },
                    s = this.originalMousePosition,
                    o = this.axis,
                    u = this.position.top,
                    a = this.position.left,
                    f = this.size.width,
                    l = this.size.height,
                    c = t.pageX - s.left || 0,
                    h = t.pageY - s.top || 0,
                    p = this._change[o];
                return p ? (n = p.apply(this, [
                    t,
                    c,
                    h
                ]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (n = this._updateRatio(n, t)), n = this._respectSize(n, t), this._updateCache(n), this._propagate('resize', t), this.position.top !== u && (i.top = this.position.top + 'px'), this.position.left !== a && (i.left = this.position.left + 'px'), this.size.width !== f && (i.width = this.size.width + 'px'), this.size.height !== l && (i.height = this.size.height + 'px'), r.css(i), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(i) || this._trigger('resize', t, this.ui()), !1)  : !1
            },
            _mouseStop: function (t) {
                this.resizing = !1;
                var n,
                    r,
                    i,
                    s,
                    o,
                    u,
                    a,
                    f = this.options,
                    l = this;
                return this._helper && (n = this._proportionallyResizeElements, r = n.length && /textarea/i.test(n[0].nodeName), i = r && e.ui.hasScroll(n[0], 'left') ? 0 : l.sizeDiff.height, s = r ? 0 : l.sizeDiff.width, o = {
                    width: l.helper.width() - s,
                    height: l.helper.height() - i
                }, u = parseInt(l.element.css('left'), 10) + (l.position.left - l.originalPosition.left) || null, a = parseInt(l.element.css('top'), 10) + (l.position.top - l.originalPosition.top) || null, f.animate || this.element.css(e.extend(o, {
                    top: a,
                    left: u
                })), l.helper.height(l.size.height), l.helper.width(l.size.width), this._helper && !f.animate && this._proportionallyResize()),
                    e('body').css('cursor', 'auto'),
                    this.element.removeClass('ui-resizable-resizing'),
                    this._propagate('stop', t),
                this._helper && this.helper.remove(),
                    !1
            },
            _updateVirtualBoundaries: function (e) {
                var t,
                    n,
                    i,
                    s,
                    o,
                    u = this.options;
                o = {
                    minWidth: r(u.minWidth) ? u.minWidth : 0,
                    maxWidth: r(u.maxWidth) ? u.maxWidth : 1 / 0,
                    minHeight: r(u.minHeight) ? u.minHeight : 0,
                    maxHeight: r(u.maxHeight) ? u.maxHeight : 1 / 0
                },
                (this._aspectRatio || e) && (t = o.minHeight * this.aspectRatio, i = o.minWidth / this.aspectRatio, n = o.maxHeight * this.aspectRatio, s = o.maxWidth / this.aspectRatio, t > o.minWidth && (o.minWidth = t), i > o.minHeight && (o.minHeight = i), n < o.maxWidth && (o.maxWidth = n), s < o.maxHeight && (o.maxHeight = s)),
                    this._vBoundaries = o
            },
            _updateCache: function (e) {
                this.offset = this.helper.offset(),
                r(e.left) && (this.position.left = e.left),
                r(e.top) && (this.position.top = e.top),
                r(e.height) && (this.size.height = e.height),
                r(e.width) && (this.size.width = e.width)
            },
            _updateRatio: function (e) {
                var t = this.position,
                    n = this.size,
                    i = this.axis;
                return r(e.height) ? e.width = e.height * this.aspectRatio : r(e.width) && (e.height = e.width / this.aspectRatio),
                'sw' === i && (e.left = t.left + (n.width - e.width), e.top = null),
                'nw' === i && (e.top = t.top + (n.height - e.height), e.left = t.left + (n.width - e.width)),
                    e
            },
            _respectSize: function (e) {
                var t = this._vBoundaries,
                    n = this.axis,
                    i = r(e.width) && t.maxWidth && t.maxWidth < e.width,
                    s = r(e.height) && t.maxHeight && t.maxHeight < e.height,
                    o = r(e.width) && t.minWidth && t.minWidth > e.width,
                    u = r(e.height) && t.minHeight && t.minHeight > e.height,
                    a = this.originalPosition.left + this.originalSize.width,
                    f = this.position.top + this.size.height,
                    l = /sw|nw|w/.test(n),
                    c = /nw|ne|n/.test(n);
                return o && (e.width = t.minWidth),
                u && (e.height = t.minHeight),
                i && (e.width = t.maxWidth),
                s && (e.height = t.maxHeight),
                o && l && (e.left = a - t.minWidth),
                i && l && (e.left = a - t.maxWidth),
                u && c && (e.top = f - t.minHeight),
                s && c && (e.top = f - t.maxHeight),
                    e.width || e.height || e.left || !e.top ? !e.width && !e.height && !e.top && e.left && (e.left = null)  : e.top = null,
                    e
            },
            _proportionallyResize: function () {
                if (this._proportionallyResizeElements.length) {
                    var e,
                        t,
                        n,
                        r,
                        i,
                        s = this.helper || this.element;
                    for (e = 0; e < this._proportionallyResizeElements.length; e++) {
                        if (i = this._proportionallyResizeElements[e], !this.borderDif) for (this.borderDif = [
                        ], n = [
                            i.css('borderTopWidth'),
                            i.css('borderRightWidth'),
                            i.css('borderBottomWidth'),
                            i.css('borderLeftWidth')
                        ], r = [
                            i.css('paddingTop'),
                            i.css('paddingRight'),
                            i.css('paddingBottom'),
                            i.css('paddingLeft')
                        ], t = 0; t < n.length; t++) this.borderDif[t] = (parseInt(n[t], 10) || 0) + (parseInt(r[t], 10) || 0);
                        i.css({
                            height: s.height() - this.borderDif[0] - this.borderDif[2] || 0,
                            width: s.width() - this.borderDif[1] - this.borderDif[3] || 0
                        })
                    }
                }
            },
            _renderProxy: function () {
                var t = this.element,
                    n = this.options;
                this.elementOffset = t.offset(),
                    this._helper ? (this.helper = this.helper || e('<div style=\'overflow:hidden;\'></div>'), this.helper.addClass(this._helper).css({
                        width: this.element.outerWidth() - 1,
                        height: this.element.outerHeight() - 1,
                        position: 'absolute',
                        left: this.elementOffset.left + 'px',
                        top: this.elementOffset.top + 'px',
                        zIndex: ++n.zIndex
                    }), this.helper.appendTo('body').disableSelection())  : this.helper = this.element
            },
            _change: {
                e: function (e, t) {
                    return {
                        width: this.originalSize.width + t
                    }
                },
                w: function (e, t) {
                    var n = this.originalSize,
                        r = this.originalPosition;
                    return {
                        left: r.left + t,
                        width: n.width - t
                    }
                },
                n: function (e, t, n) {
                    var r = this.originalSize,
                        i = this.originalPosition;
                    return {
                        top: i.top + n,
                        height: r.height - n
                    }
                },
                s: function (e, t, n) {
                    return {
                        height: this.originalSize.height + n
                    }
                },
                se: function (t, n, r) {
                    return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [
                        t,
                        n,
                        r
                    ]))
                },
                sw: function (t, n, r) {
                    return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [
                        t,
                        n,
                        r
                    ]))
                },
                ne: function (t, n, r) {
                    return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [
                        t,
                        n,
                        r
                    ]))
                },
                nw: function (t, n, r) {
                    return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [
                        t,
                        n,
                        r
                    ]))
                }
            },
            _propagate: function (t, n) {
                e.ui.plugin.call(this, t, [
                    n,
                    this.ui()
                ]),
                'resize' !== t && this._trigger(t, n, this.ui())
            },
            plugins: {
            },
            ui: function () {
                return {
                    originalElement: this.originalElement,
                    element: this.element,
                    helper: this.helper,
                    position: this.position,
                    size: this.size,
                    originalSize: this.originalSize,
                    originalPosition: this.originalPosition
                }
            }
        }),
            e.ui.plugin.add('resizable', 'animate', {
                stop: function (t) {
                    var n = e(this).data('ui-resizable'),
                        r = n.options,
                        i = n._proportionallyResizeElements,
                        s = i.length && /textarea/i.test(i[0].nodeName),
                        o = s && e.ui.hasScroll(i[0], 'left') ? 0 : n.sizeDiff.height,
                        u = s ? 0 : n.sizeDiff.width,
                        a = {
                            width: n.size.width - u,
                            height: n.size.height - o
                        },
                        f = parseInt(n.element.css('left'), 10) + (n.position.left - n.originalPosition.left) || null,
                        l = parseInt(n.element.css('top'), 10) + (n.position.top - n.originalPosition.top) || null;
                    n.element.animate(e.extend(a, l && f ? {
                        top: l,
                        left: f
                    }
                        : {
                    }), {
                        duration: r.animateDuration,
                        easing: r.animateEasing,
                        step: function () {
                            var r = {
                                width: parseInt(n.element.css('width'), 10),
                                height: parseInt(n.element.css('height'), 10),
                                top: parseInt(n.element.css('top'), 10),
                                left: parseInt(n.element.css('left'), 10)
                            };
                            i && i.length && e(i[0]).css({
                                width: r.width,
                                height: r.height
                            }),
                                n._updateCache(r),
                                n._propagate('resize', t)
                        }
                    })
                }
            }),
            e.ui.plugin.add('resizable', 'containment', {
                start: function () {
                    var t,
                        r,
                        i,
                        s,
                        o,
                        u,
                        a,
                        f = e(this).data('ui-resizable'),
                        l = f.options,
                        c = f.element,
                        h = l.containment,
                        p = h instanceof e ? h.get(0)  : /parent/.test(h) ? c.parent().get(0)  : h;
                    p && (f.containerElement = e(p), /document/.test(h) || h === document ? (f.containerOffset = {
                        left: 0,
                        top: 0
                    }, f.containerPosition = {
                        left: 0,
                        top: 0
                    }, f.parentData = {
                        element: e(document),
                        left: 0,
                        top: 0,
                        width: e(document).width(),
                        height: e(document).height() || document.body.parentNode.scrollHeight
                    })  : (t = e(p), r = [
                    ], e(['Top',
                        'Right',
                        'Left',
                        'Bottom']).each(function (e, i) {
                        r[e] = n(t.css('padding' + i))
                    }), f.containerOffset = t.offset(), f.containerPosition = t.position(), f.containerSize = {
                        height: t.innerHeight() - r[3],
                        width: t.innerWidth() - r[1]
                    }, i = f.containerOffset, s = f.containerSize.height, o = f.containerSize.width, u = e.ui.hasScroll(p, 'left') ? p.scrollWidth : o, a = e.ui.hasScroll(p) ? p.scrollHeight : s, f.parentData = {
                        element: p,
                        left: i.left,
                        top: i.top,
                        width: u,
                        height: a
                    }))
                },
                resize: function (t) {
                    var n,
                        r,
                        i,
                        s,
                        o = e(this).data('ui-resizable'),
                        u = o.options,
                        a = o.containerOffset,
                        f = o.position,
                        l = o._aspectRatio || t.shiftKey,
                        c = {
                            top: 0,
                            left: 0
                        },
                        h = o.containerElement;
                    h[0] !== document && /static/.test(h.css('position')) && (c = a),
                    f.left < (o._helper ? a.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - a.left : o.position.left - c.left), l && (o.size.height = o.size.width / o.aspectRatio), o.position.left = u.helper ? a.left : 0),
                    f.top < (o._helper ? a.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - a.top : o.position.top), l && (o.size.width = o.size.height * o.aspectRatio), o.position.top = o._helper ? a.top : 0),
                        o.offset.left = o.parentData.left + o.position.left,
                        o.offset.top = o.parentData.top + o.position.top,
                        n = Math.abs((o._helper ? o.offset.left - c.left : o.offset.left - c.left) + o.sizeDiff.width),
                        r = Math.abs((o._helper ? o.offset.top - c.top : o.offset.top - a.top) + o.sizeDiff.height),
                        i = o.containerElement.get(0) === o.element.parent().get(0),
                        s = /relative|absolute/.test(o.containerElement.css('position')),
                    i && s && (n -= o.parentData.left),
                    n + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - n, l && (o.size.height = o.size.width / o.aspectRatio)),
                    r + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - r, l && (o.size.width = o.size.height * o.aspectRatio))
                },
                stop: function () {
                    var t = e(this).data('ui-resizable'),
                        n = t.options,
                        r = t.containerOffset,
                        i = t.containerPosition,
                        s = t.containerElement,
                        o = e(t.helper),
                        u = o.offset(),
                        a = o.outerWidth() - t.sizeDiff.width,
                        f = o.outerHeight() - t.sizeDiff.height;
                    t._helper && !n.animate && /relative/.test(s.css('position')) && e(this).css({
                        left: u.left - i.left - r.left,
                        width: a,
                        height: f
                    }),
                    t._helper && !n.animate && /static/.test(s.css('position')) && e(this).css({
                        left: u.left - i.left - r.left,
                        width: a,
                        height: f
                    })
                }
            }),
            e.ui.plugin.add('resizable', 'alsoResize', {
                start: function () {
                    var t = e(this).data('ui-resizable'),
                        n = t.options,
                        r = function (t) {
                            e(t).each(function () {
                                var t = e(this);
                                t.data('ui-resizable-alsoresize', {
                                    width: parseInt(t.width(), 10),
                                    height: parseInt(t.height(), 10),
                                    left: parseInt(t.css('left'), 10),
                                    top: parseInt(t.css('top'), 10)
                                })
                            })
                        };
                    'object' != typeof n.alsoResize || n.alsoResize.parentNode ? r(n.alsoResize)  : n.alsoResize.length ? (n.alsoResize = n.alsoResize[0], r(n.alsoResize))  : e.each(n.alsoResize, function (e) {
                        r(e)
                    })
                },
                resize: function (t, n) {
                    var r = e(this).data('ui-resizable'),
                        i = r.options,
                        s = r.originalSize,
                        o = r.originalPosition,
                        u = {
                            height: r.size.height - s.height || 0,
                            width: r.size.width - s.width || 0,
                            top: r.position.top - o.top || 0,
                            left: r.position.left - o.left || 0
                        },
                        a = function (t, r) {
                            e(t).each(function () {
                                var t = e(this),
                                    i = e(this).data('ui-resizable-alsoresize'),
                                    s = {
                                    },
                                    o = r && r.length ? r : t.parents(n.originalElement[0]).length ? [
                                        'width',
                                        'height'
                                    ] : [
                                        'width',
                                        'height',
                                        'top',
                                        'left'
                                    ];
                                e.each(o, function (e, t) {
                                    var n = (i[t] || 0) + (u[t] || 0);
                                    n && n >= 0 && (s[t] = n || null)
                                }),
                                    t.css(s)
                            })
                        };
                    'object' != typeof i.alsoResize || i.alsoResize.nodeType ? a(i.alsoResize)  : e.each(i.alsoResize, function (e, t) {
                        a(e, t)
                    })
                },
                stop: function () {
                    e(this).removeData('resizable-alsoresize')
                }
            }),
            e.ui.plugin.add('resizable', 'ghost', {
                start: function () {
                    var t = e(this).data('ui-resizable'),
                        n = t.options,
                        r = t.size;
                    t.ghost = t.originalElement.clone(),
                        t.ghost.css({
                            opacity: 0.25,
                            display: 'block',
                            position: 'relative',
                            height: r.height,
                            width: r.width,
                            margin: 0,
                            left: 0,
                            top: 0
                        }).addClass('ui-resizable-ghost').addClass('string' == typeof n.ghost ? n.ghost : ''),
                        t.ghost.appendTo(t.helper)
                },
                resize: function () {
                    var t = e(this).data('ui-resizable');
                    t.ghost && t.ghost.css({
                        position: 'relative',
                        height: t.size.height,
                        width: t.size.width
                    })
                },
                stop: function () {
                    var t = e(this).data('ui-resizable');
                    t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
                }
            }),
            e.ui.plugin.add('resizable', 'grid', {
                resize: function () {
                    var t = e(this).data('ui-resizable'),
                        n = t.options,
                        r = t.size,
                        i = t.originalSize,
                        s = t.originalPosition,
                        o = t.axis,
                        u = 'number' == typeof n.grid ? [
                            n.grid,
                            n.grid
                        ] : n.grid,
                        a = u[0] || 1,
                        f = u[1] || 1,
                        l = Math.round((r.width - i.width) / a) * a,
                        c = Math.round((r.height - i.height) / f) * f,
                        h = i.width + l,
                        p = i.height + c,
                        d = n.maxWidth && n.maxWidth < h,
                        v = n.maxHeight && n.maxHeight < p,
                        m = n.minWidth && n.minWidth > h,
                        g = n.minHeight && n.minHeight > p;
                    n.grid = u,
                    m && (h += a),
                    g && (p += f),
                    d && (h -= a),
                    v && (p -= f),
                        /^(se|s|e)$/.test(o) ? (t.size.width = h, t.size.height = p)  : /^(ne)$/.test(o) ? (t.size.width = h, t.size.height = p, t.position.top = s.top - c)  : /^(sw)$/.test(o) ? (t.size.width = h, t.size.height = p, t.position.left = s.left - l)  : (t.size.width = h, t.size.height = p, t.position.top = s.top - c, t.position.left = s.left - l)
                }
            })
    }(jQuery),
    function (e) {
        e.widget('ui.selectable', e.ui.mouse, {
            version: '1.10.0',
            options: {
                appendTo: 'body',
                autoRefresh: !0,
                distance: 0,
                filter: '*',
                tolerance: 'touch',
                selected: null,
                selecting: null,
                start: null,
                stop: null,
                unselected: null,
                unselecting: null
            },
            _create: function () {
                var t,
                    n = this;
                this.element.addClass('ui-selectable'),
                    this.dragged = !1,
                    this.refresh = function () {
                        t = e(n.options.filter, n.element[0]),
                            t.addClass('ui-selectee'),
                            t.each(function () {
                                var t = e(this),
                                    n = t.offset();
                                e.data(this, 'selectable-item', {
                                    element: this,
                                    $element: t,
                                    left: n.left,
                                    top: n.top,
                                    right: n.left + t.outerWidth(),
                                    bottom: n.top + t.outerHeight(),
                                    startselected: !1,
                                    selected: t.hasClass('ui-selected'),
                                    selecting: t.hasClass('ui-selecting'),
                                    unselecting: t.hasClass('ui-unselecting')
                                })
                            })
                    },
                    this.refresh(),
                    this.selectees = t.addClass('ui-selectee'),
                    this._mouseInit(),
                    this.helper = e('<div class=\'ui-selectable-helper\'></div>')
            },
            _destroy: function () {
                this.selectees.removeClass('ui-selectee').removeData('selectable-item'),
                    this.element.removeClass('ui-selectable ui-selectable-disabled'),
                    this._mouseDestroy()
            },
            _mouseStart: function (t) {
                var n = this,
                    r = this.options;
                this.opos = [
                    t.pageX,
                    t.pageY
                ],
                this.options.disabled || (this.selectees = e(r.filter, this.element[0]), this._trigger('start', t), e(r.appendTo).append(this.helper), this.helper.css({
                    left: t.pageX,
                    top: t.pageY,
                    width: 0,
                    height: 0
                }), r.autoRefresh && this.refresh(), this.selectees.filter('.ui-selected').each(function () {
                    var r = e.data(this, 'selectable-item');
                    r.startselected = !0,
                    !t.metaKey && !t.ctrlKey && (r.$element.removeClass('ui-selected'), r.selected = !1, r.$element.addClass('ui-unselecting'), r.unselecting = !0, n._trigger('unselecting', t, {
                        unselecting: r.element
                    }))
                }), e(t.target).parents().addBack().each(function () {
                    var r,
                        i = e.data(this, 'selectable-item');
                    return i ? (r = !t.metaKey && !t.ctrlKey || !i.$element.hasClass('ui-selected'), i.$element.removeClass(r ? 'ui-unselecting' : 'ui-selected').addClass(r ? 'ui-selecting' : 'ui-unselecting'), i.unselecting = !r, i.selecting = r, i.selected = r, r ? n._trigger('selecting', t, {
                        selecting: i.element
                    })  : n._trigger('unselecting', t, {
                        unselecting: i.element
                    }), !1)  : void 0
                }))
            },
            _mouseDrag: function (t) {
                if (this.dragged = !0, !this.options.disabled) {
                    var n,
                        r = this,
                        i = this.options,
                        s = this.opos[0],
                        o = this.opos[1],
                        u = t.pageX,
                        a = t.pageY;
                    return s > u && (n = u, u = s, s = n),
                    o > a && (n = a, a = o, o = n),
                        this.helper.css({
                            left: s,
                            top: o,
                            width: u - s,
                            height: a - o
                        }),
                        this.selectees.each(function () {
                            var n = e.data(this, 'selectable-item'),
                                f = !1;
                            n && n.element !== r.element[0] && ('touch' === i.tolerance ? f = !(n.left > u || n.right < s || n.top > a || n.bottom < o)  : 'fit' === i.tolerance && (f = n.left > s && n.right < u && n.top > o && n.bottom < a), f ? (n.selected && (n.$element.removeClass('ui-selected'), n.selected = !1), n.unselecting && (n.$element.removeClass('ui-unselecting'), n.unselecting = !1), n.selecting || (n.$element.addClass('ui-selecting'), n.selecting = !0, r._trigger('selecting', t, {
                                selecting: n.element
                            })))  : (n.selecting && ((t.metaKey || t.ctrlKey) && n.startselected ? (n.$element.removeClass('ui-selecting'), n.selecting = !1, n.$element.addClass('ui-selected'), n.selected = !0)  : (n.$element.removeClass('ui-selecting'), n.selecting = !1, n.startselected && (n.$element.addClass('ui-unselecting'), n.unselecting = !0), r._trigger('unselecting', t, {
                                unselecting: n.element
                            }))), n.selected && !t.metaKey && !t.ctrlKey && !n.startselected && (n.$element.removeClass('ui-selected'), n.selected = !1, n.$element.addClass('ui-unselecting'), n.unselecting = !0, r._trigger('unselecting', t, {
                                unselecting: n.element
                            }))))
                        }),
                        !1
                }
            },
            _mouseStop: function (t) {
                var n = this;
                return this.dragged = !1,
                    e('.ui-unselecting', this.element[0]).each(function () {
                        var r = e.data(this, 'selectable-item');
                        r.$element.removeClass('ui-unselecting'),
                            r.unselecting = !1,
                            r.startselected = !1,
                            n._trigger('unselected', t, {
                                unselected: r.element
                            })
                    }),
                    e('.ui-selecting', this.element[0]).each(function () {
                        var r = e.data(this, 'selectable-item');
                        r.$element.removeClass('ui-selecting').addClass('ui-selected'),
                            r.selecting = !1,
                            r.selected = !0,
                            r.startselected = !0,
                            n._trigger('selected', t, {
                                selected: r.element
                            })
                    }),
                    this._trigger('stop', t),
                    this.helper.remove(),
                    !1
            }
        })
    }(jQuery),
    function (e) {
        function n(e, t, n) {
            return e > t && t + n > e
        }
        e.widget('ui.sortable', e.ui.mouse, {
            version: '1.10.0',
            widgetEventPrefix: 'sort',
            ready: !1,
            options: {
                appendTo: 'parent',
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: 'auto',
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: 'original',
                items: '> *',
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: 'default',
                tolerance: 'intersect',
                zIndex: 1000,
                activate: null,
                beforeStop: null,
                change: null,
                deactivate: null,
                out: null,
                over: null,
                receive: null,
                remove: null,
                sort: null,
                start: null,
                stop: null,
                update: null
            },
            _create: function () {
                var e = this.options;
                this.containerCache = {
                },
                    this.element.addClass('ui-sortable'),
                    this.refresh(),
                    this.floating = this.items.length ? 'x' === e.axis || /left|right/.test(this.items[0].item.css('float')) || /inline|table-cell/.test(this.items[0].item.css('display'))  : !1,
                    this.offset = this.element.offset(),
                    this._mouseInit(),
                    this.ready = !0
            },
            _destroy: function () {
                this.element.removeClass('ui-sortable ui-sortable-disabled'),
                    this._mouseDestroy();
                for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + '-item');
                return this
            },
            _setOption: function (t, n) {
                'disabled' === t ? (this.options[t] = n, this.widget().toggleClass('ui-sortable-disabled', !!n))  : e.Widget.prototype._setOption.apply(this, arguments)
            },
            _mouseCapture: function (t, n) {
                var r = null,
                    i = !1,
                    s = this;
                return this.reverting ? !1 : this.options.disabled || 'static' === this.options.type ? !1 : (this._refreshItems(t), e(t.target).parents().each(function () {
                    return e.data(this, s.widgetName + '-item') === s ? (r = e(this), !1)  : void 0
                }), e.data(t.target, s.widgetName + '-item') === s && (r = e(t.target)), r && (!this.options.handle || n || (e(this.options.handle, r).find('*').addBack().each(function () {
                    this === t.target && (i = !0)
                }), i)) ? (this.currentItem = r, this._removeCurrentsFromItems(), !0)  : !1)
            },
            _mouseStart: function (t, n, r) {
                var i,
                    s = this.options;
                if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    }, e.extend(this.offset, {
                        click: {
                            left: t.pageX - this.offset.left,
                            top: t.pageY - this.offset.top
                        },
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }), this.helper.css('position', 'absolute'), this.cssPosition = this.helper.css('position'), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt), this.domPosition = {
                        prev: this.currentItem.prev() [0],
                        parent: this.currentItem.parent() [0]
                    }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), s.containment && this._setContainment(), s.cursor && (e('body').css('cursor') && (this._storedCursor = e('body').css('cursor')), e('body').css('cursor', s.cursor)), s.opacity && (this.helper.css('opacity') && (this._storedOpacity = this.helper.css('opacity')), this.helper.css('opacity', s.opacity)), s.zIndex && (this.helper.css('zIndex') && (this._storedZIndex = this.helper.css('zIndex')), this.helper.css('zIndex', s.zIndex)), this.scrollParent[0] !== document && 'HTML' !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger('start', t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !r) for (i = this.containers.length - 1; i >= 0; i--) this.containers[i]._trigger('activate', t, this._uiHash(this));
                return e.ui.ddmanager && (e.ui.ddmanager.current = this),
                e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t),
                    this.dragging = !0,
                    this.helper.addClass('ui-sortable-helper'),
                    this._mouseDrag(t),
                    !0
            },
            _mouseDrag: function (t) {
                var n,
                    r,
                    i,
                    s,
                    o = this.options,
                    u = !1;
                for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo('absolute'), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && 'HTML' !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = u = this.scrollParent[0].scrollTop + o.scrollSpeed : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = u = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = u = this.scrollParent[0].scrollLeft + o.scrollSpeed : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = u = this.scrollParent[0].scrollLeft - o.scrollSpeed))  : (t.pageY - e(document).scrollTop() < o.scrollSensitivity ? u = e(document).scrollTop(e(document).scrollTop() - o.scrollSpeed)  : e(window).height() - (t.pageY - e(document).scrollTop()) < o.scrollSensitivity && (u = e(document).scrollTop(e(document).scrollTop() + o.scrollSpeed)), t.pageX - e(document).scrollLeft() < o.scrollSensitivity ? u = e(document).scrollLeft(e(document).scrollLeft() - o.scrollSpeed)  : e(window).width() - (t.pageX - e(document).scrollLeft()) < o.scrollSensitivity && (u = e(document).scrollLeft(e(document).scrollLeft() + o.scrollSpeed))), u !== !1 && e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo('absolute'), this.options.axis && 'y' === this.options.axis || (this.helper[0].style.left = this.position.left + 'px'), this.options.axis && 'x' === this.options.axis || (this.helper[0].style.top = this.position.top + 'px'), n = this.items.length - 1; n >= 0; n--) if (r = this.items[n], i = r.item[0], s = this._intersectsWithPointer(r), s && r.instance === this.currentContainer && i !== this.currentItem[0] && this.placeholder[1 === s ? 'next' : 'prev']() [0] !== i && !e.contains(this.placeholder[0], i) && ('semi-dynamic' === this.options.type ? !e.contains(this.element[0], i)  : !0)) {
                    if (this.direction = 1 === s ? 'down' : 'up', 'pointer' !== this.options.tolerance && !this._intersectsWithSides(r)) break;
                    this._rearrange(t, r),
                        this._trigger('change', t, this._uiHash());
                    break
                }
                return this._contactContainers(t),
                e.ui.ddmanager && e.ui.ddmanager.drag(this, t),
                    this._trigger('sort', t, this._uiHash()),
                    this.lastPositionAbs = this.positionAbs,
                    !1
            },
            _mouseStop: function (t, n) {
                if (t) {
                    if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
                        var r = this,
                            i = this.placeholder.offset();
                        this.reverting = !0,
                            e(this.helper).animate({
                                left: i.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft),
                                top: i.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)
                            }, parseInt(this.options.revert, 10) || 500, function () {
                                r._clear(t)
                            })
                    } else this._clear(t, n);
                    return !1
                }
            },
            cancel: function () {
                if (this.dragging) {
                    this._mouseUp({
                        target: null
                    }),
                        'original' === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass('ui-sortable-helper')  : this.currentItem.show();
                    for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger('deactivate', null, this._uiHash(this)),
                    this.containers[t].containerCache.over && (this.containers[t]._trigger('out', null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
                }
                return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 'original' !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem)  : e(this.domPosition.parent).prepend(this.currentItem)),
                    this
            },
            serialize: function (t) {
                var n = this._getItemsAsjQuery(t && t.connected),
                    r = [
                    ];
                return t = t || {
                    },
                    e(n).each(function () {
                        var n = (e(t.item || this).attr(t.attribute || 'id') || '').match(t.expression || /(.+)[\-=_](.+)/);
                        n && r.push((t.key || n[1] + '[]') + '=' + (t.key && t.expression ? n[1] : n[2]))
                    }),
                !r.length && t.key && r.push(t.key + '='),
                    r.join('&')
            },
            toArray: function (t) {
                var n = this._getItemsAsjQuery(t && t.connected),
                    r = [
                    ];
                return t = t || {
                    },
                    n.each(function () {
                        r.push(e(t.item || this).attr(t.attribute || 'id') || '')
                    }),
                    r
            },
            _intersectsWith: function (e) {
                var t = this.positionAbs.left,
                    n = t + this.helperProportions.width,
                    r = this.positionAbs.top,
                    i = r + this.helperProportions.height,
                    s = e.left,
                    o = s + e.width,
                    u = e.top,
                    a = u + e.height,
                    f = this.offset.click.top,
                    l = this.offset.click.left,
                    c = r + f > u && a > r + f && t + l > s && o > t + l;
                return 'pointer' === this.options.tolerance || this.options.forcePointerForContainers || 'pointer' !== this.options.tolerance && this.helperProportions[this.floating ? 'width' : 'height'] > e[this.floating ? 'width' : 'height'] ? c : s < t + this.helperProportions.width / 2 && n - this.helperProportions.width / 2 < o && u < r + this.helperProportions.height / 2 && i - this.helperProportions.height / 2 < a
            },
            _intersectsWithPointer: function (e) {
                var t = 'x' === this.options.axis || n(this.positionAbs.top + this.offset.click.top, e.top, e.height),
                    r = 'y' === this.options.axis || n(this.positionAbs.left + this.offset.click.left, e.left, e.width),
                    i = t && r,
                    s = this._getDragVerticalDirection(),
                    o = this._getDragHorizontalDirection();
                return i ? this.floating ? o && 'right' === o || 'down' === s ? 2 : 1 : s && ('down' === s ? 2 : 1)  : !1
            },
            _intersectsWithSides: function (e) {
                var t = n(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
                    r = n(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
                    i = this._getDragVerticalDirection(),
                    s = this._getDragHorizontalDirection();
                return this.floating && s ? 'right' === s && r || 'left' === s && !r : i && ('down' === i && t || 'up' === i && !t)
            },
            _getDragVerticalDirection: function () {
                var e = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 !== e && (e > 0 ? 'down' : 'up')
            },
            _getDragHorizontalDirection: function () {
                var e = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 !== e && (e > 0 ? 'right' : 'left')
            },
            refresh: function (e) {
                return this._refreshItems(e),
                    this.refreshPositions(),
                    this
            },
            _connectWith: function () {
                var e = this.options;
                return e.connectWith.constructor === String ? [
                    e.connectWith
                ] : e.connectWith
            },
            _getItemsAsjQuery: function (t) {
                var n,
                    r,
                    i,
                    s,
                    o = [
                    ],
                    u = [
                    ],
                    a = this._connectWith();
                if (a && t) for (n = a.length - 1; n >= 0; n--) for (i = e(a[n]), r = i.length - 1; r >= 0; r--) s = e.data(i[r], this.widgetFullName),
                s && s !== this && !s.options.disabled && u.push([e.isFunction(s.options.items) ? s.options.items.call(s.element)  : e(s.options.items, s.element).not('.ui-sortable-helper').not('.ui-sortable-placeholder'),
                    s]);
                for (u.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                })  : e(this.options.items, this.element).not('.ui-sortable-helper').not('.ui-sortable-placeholder'),
                    this]), n = u.length - 1; n >= 0; n--) u[n][0].each(function () {
                    o.push(this)
                });
                return e(o)
            },
            _removeCurrentsFromItems: function () {
                var t = this.currentItem.find(':data(' + this.widgetName + '-item)');
                this.items = e.grep(this.items, function (e) {
                    for (var n = 0; n < t.length; n++) if (t[n] === e.item[0]) return !1;
                    return !0
                })
            },
            _refreshItems: function (t) {
                this.items = [
                ],
                    this.containers = [
                        this
                    ];
                var n,
                    r,
                    i,
                    s,
                    o,
                    u,
                    a,
                    f,
                    l = this.items,
                    c = [
                        [e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                            item: this.currentItem
                        })  : e(this.options.items, this.element),
                            this]
                    ],
                    h = this._connectWith();
                if (h && this.ready) for (n = h.length - 1; n >= 0; n--) for (i = e(h[n]), r = i.length - 1; r >= 0; r--) s = e.data(i[r], this.widgetFullName),
                s && s !== this && !s.options.disabled && (c.push([e.isFunction(s.options.items) ? s.options.items.call(s.element[0], t, {
                    item: this.currentItem
                })  : e(s.options.items, s.element),
                    s]), this.containers.push(s));
                for (n = c.length - 1; n >= 0; n--) for (o = c[n][1], u = c[n][0], r = 0, f = u.length; f > r; r++) a = e(u[r]),
                    a.data(this.widgetName + '-item', o),
                    l.push({
                        item: a,
                        instance: o,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
            },
            refreshPositions: function (t) {
                this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                var n,
                    r,
                    i,
                    s;
                for (n = this.items.length - 1; n >= 0; n--) r = this.items[n],
                r.instance !== this.currentContainer && this.currentContainer && r.item[0] !== this.currentItem[0] || (i = this.options.toleranceElement ? e(this.options.toleranceElement, r.item)  : r.item, t || (r.width = i.outerWidth(), r.height = i.outerHeight()), s = i.offset(), r.left = s.left, r.top = s.top);
                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else for (n = this.containers.length - 1; n >= 0; n--) s = this.containers[n].element.offset(),
                    this.containers[n].containerCache.left = s.left,
                    this.containers[n].containerCache.top = s.top,
                    this.containers[n].containerCache.width = this.containers[n].element.outerWidth(),
                    this.containers[n].containerCache.height = this.containers[n].element.outerHeight();
                return this
            },
            _createPlaceholder: function (t) {
                t = t || this;
                var n,
                    r = t.options;
                r.placeholder && r.placeholder.constructor !== String || (n = r.placeholder, r.placeholder = {
                    element: function () {
                        var r = e(document.createElement(t.currentItem[0].nodeName)).addClass(n || t.currentItem[0].className + ' ui-sortable-placeholder').removeClass('ui-sortable-helper') [0];
                        return n || (r.style.visibility = 'hidden'),
                            r
                    },
                    update: function (e, i) {
                        (!n || r.forcePlaceholderSize) && (i.height() || i.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css('paddingTop') || 0, 10) - parseInt(t.currentItem.css('paddingBottom') || 0, 10)), i.width() || i.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css('paddingLeft') || 0, 10) - parseInt(t.currentItem.css('paddingRight') || 0, 10)))
                    }
                }),
                    t.placeholder = e(r.placeholder.element.call(t.element, t.currentItem)),
                    t.currentItem.after(t.placeholder),
                    r.placeholder.update(t, t.placeholder)
            },
            _contactContainers: function (t) {
                var n,
                    r,
                    i,
                    s,
                    o,
                    u,
                    a,
                    f,
                    l,
                    c = null,
                    h = null;
                for (n = this.containers.length - 1; n >= 0; n--) if (!e.contains(this.currentItem[0], this.containers[n].element[0])) if (this._intersectsWith(this.containers[n].containerCache)) {
                    if (c && e.contains(this.containers[n].element[0], c.element[0])) continue;
                    c = this.containers[n],
                        h = n
                } else this.containers[n].containerCache.over && (this.containers[n]._trigger('out', t, this._uiHash(this)), this.containers[n].containerCache.over = 0);
                if (c) if (1 === this.containers.length) this.containers[h]._trigger('over', t, this._uiHash(this)),
                    this.containers[h].containerCache.over = 1;
                else {
                    for (i = 10000, s = null, o = this.containers[h].floating ? 'left' : 'top', u = this.containers[h].floating ? 'width' : 'height', a = this.positionAbs[o] + this.offset.click[o], r = this.items.length - 1; r >= 0; r--) e.contains(this.containers[h].element[0], this.items[r].item[0]) && this.items[r].item[0] !== this.currentItem[0] && (f = this.items[r].item.offset() [o], l = !1, Math.abs(f - a) > Math.abs(f + this.items[r][u] - a) && (l = !0, f += this.items[r][u]), Math.abs(f - a) < i && (i = Math.abs(f - a), s = this.items[r], this.direction = l ? 'up' : 'down'));
                    if (!s && !this.options.dropOnEmpty) return;
                    this.currentContainer = this.containers[h],
                        s ? this._rearrange(t, s, null, !0)  : this._rearrange(t, null, this.containers[h].element, !0),
                        this._trigger('change', t, this._uiHash()),
                        this.containers[h]._trigger('change', t, this._uiHash(this)),
                        this.options.placeholder.update(this.currentContainer, this.placeholder),
                        this.containers[h]._trigger('over', t, this._uiHash(this)),
                        this.containers[h].containerCache.over = 1
                }
            },
            _createHelper: function (t) {
                var n = this.options,
                    r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [
                        t,
                        this.currentItem
                    ]))  : 'clone' === n.helper ? this.currentItem.clone()  : this.currentItem;
                return r.parents('body').length || e('parent' !== n.appendTo ? n.appendTo : this.currentItem[0].parentNode) [0].appendChild(r[0]),
                r[0] === this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css('position'),
                    top: this.currentItem.css('top'),
                    left: this.currentItem.css('left')
                }),
                (!r[0].style.width || n.forceHelperSize) && r.width(this.currentItem.width()),
                (!r[0].style.height || n.forceHelperSize) && r.height(this.currentItem.height()),
                    r
            },
            _adjustOffsetFromHelper: function (t) {
                'string' == typeof t && (t = t.split(' ')),
                e.isArray(t) && (t = {
                    left: + t[0],
                    top: + t[1] || 0
                }),
                'left' in t && (this.offset.click.left = t.left + this.margins.left),
                'right' in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
                'top' in t && (this.offset.click.top = t.top + this.margins.top),
                'bottom' in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
            },
            _getParentOffset: function () {
                this.offsetParent = this.helper.offsetParent();
                var t = this.offsetParent.offset();
                return 'absolute' === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()),
                (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && 'html' === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                    top: 0,
                    left: 0
                }),
                {
                    top: t.top + (parseInt(this.offsetParent.css('borderTopWidth'), 10) || 0),
                    left: t.left + (parseInt(this.offsetParent.css('borderLeftWidth'), 10) || 0)
                }
            },
            _getRelativeOffset: function () {
                if ('relative' === this.cssPosition) {
                    var e = this.currentItem.position();
                    return {
                        top: e.top - (parseInt(this.helper.css('top'), 10) || 0) + this.scrollParent.scrollTop(),
                        left: e.left - (parseInt(this.helper.css('left'), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function () {
                this.margins = {
                    left: parseInt(this.currentItem.css('marginLeft'), 10) || 0,
                    top: parseInt(this.currentItem.css('marginTop'), 10) || 0
                }
            },
            _cacheHelperProportions: function () {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function () {
                var t,
                    n,
                    r,
                    i = this.options;
                'parent' === i.containment && (i.containment = this.helper[0].parentNode),
                ('document' === i.containment || 'window' === i.containment) && (this.containment = [
                    0 - this.offset.relative.left - this.offset.parent.left,
                    0 - this.offset.relative.top - this.offset.parent.top,
                    e('document' === i.containment ? document : window).width() - this.helperProportions.width - this.margins.left,
                    (e('document' === i.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
                ]),
                /^(document|window|parent)$/.test(i.containment) || (t = e(i.containment) [0], n = e(i.containment).offset(), r = 'hidden' !== e(t).css('overflow'), this.containment = [
                    n.left + (parseInt(e(t).css('borderLeftWidth'), 10) || 0) + (parseInt(e(t).css('paddingLeft'), 10) || 0) - this.margins.left,
                    n.top + (parseInt(e(t).css('borderTopWidth'), 10) || 0) + (parseInt(e(t).css('paddingTop'), 10) || 0) - this.margins.top,
                    n.left + (r ? Math.max(t.scrollWidth, t.offsetWidth)  : t.offsetWidth) - (parseInt(e(t).css('borderLeftWidth'), 10) || 0) - (parseInt(e(t).css('paddingRight'), 10) || 0) - this.helperProportions.width - this.margins.left,
                    n.top + (r ? Math.max(t.scrollHeight, t.offsetHeight)  : t.offsetHeight) - (parseInt(e(t).css('borderTopWidth'), 10) || 0) - (parseInt(e(t).css('paddingBottom'), 10) || 0) - this.helperProportions.height - this.margins.top
                ])
            },
            _convertPositionTo: function (t, n) {
                n || (n = this.position);
                var r = 'absolute' === t ? 1 : - 1,
                    i = 'absolute' !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    s = /(html|body)/i.test(i[0].tagName);
                return {
                    top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - ('fixed' === this.cssPosition ? - this.scrollParent.scrollTop()  : s ? 0 : i.scrollTop()) * r,
                    left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - ('fixed' === this.cssPosition ? - this.scrollParent.scrollLeft()  : s ? 0 : i.scrollLeft()) * r
                }
            },
            _generatePosition: function (t) {
                var n,
                    r,
                    i = this.options,
                    s = t.pageX,
                    o = t.pageY,
                    u = 'absolute' !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    a = /(html|body)/i.test(u[0].tagName);
                return 'relative' === this.cssPosition && (this.scrollParent[0] === document || this.scrollParent[0] === this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset()),
                this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (s = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (s = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), i.grid && (n = this.originalPageY + Math.round((o - this.originalPageY) / i.grid[1]) * i.grid[1], o = this.containment ? n - this.offset.click.top >= this.containment[1] && n - this.offset.click.top <= this.containment[3] ? n : n - this.offset.click.top >= this.containment[1] ? n - i.grid[1] : n + i.grid[1] : n, r = this.originalPageX + Math.round((s - this.originalPageX) / i.grid[0]) * i.grid[0], s = this.containment ? r - this.offset.click.left >= this.containment[0] && r - this.offset.click.left <= this.containment[2] ? r : r - this.offset.click.left >= this.containment[0] ? r - i.grid[0] : r + i.grid[0] : r)),
                {
                    top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ('fixed' === this.cssPosition ? - this.scrollParent.scrollTop()  : a ? 0 : u.scrollTop()),
                    left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ('fixed' === this.cssPosition ? - this.scrollParent.scrollLeft()  : a ? 0 : u.scrollLeft())
                }
            },
            _rearrange: function (e, t, n, r) {
                n ? n[0].appendChild(this.placeholder[0])  : t.item[0].parentNode.insertBefore(this.placeholder[0], 'down' === this.direction ? t.item[0] : t.item[0].nextSibling),
                    this.counter = this.counter ? ++this.counter : 1;
                var i = this.counter;
                this._delay(function () {
                    i === this.counter && this.refreshPositions(!r)
                })
            },
            _clear: function (t, n) {
                this.reverting = !1;
                var r,
                    i = [
                    ];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                    for (r in this._storedCSS) ('auto' === this._storedCSS[r] || 'static' === this._storedCSS[r]) && (this._storedCSS[r] = '');
                    this.currentItem.css(this._storedCSS).removeClass('ui-sortable-helper')
                } else this.currentItem.show();
                for (this.fromOutside && !n && i.push(function (e) {
                    this._trigger('receive', e, this._uiHash(this.fromOutside))
                }), (this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not('.ui-sortable-helper') [0] || this.domPosition.parent !== this.currentItem.parent() [0]) && !n && i.push(function (e) {
                    this._trigger('update', e, this._uiHash())
                }), this !== this.currentContainer && (n || (i.push(function (e) {
                    this._trigger('remove', e, this._uiHash())
                }), i.push(function (e) {
                    return function (t) {
                        e._trigger('receive', t, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), i.push(function (e) {
                    return function (t) {
                        e._trigger('update', t, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)))), r = this.containers.length - 1; r >= 0; r--) n || i.push(function (e) {
                    return function (t) {
                        e._trigger('deactivate', t, this._uiHash(this))
                    }
                }.call(this, this.containers[r])),
                this.containers[r].containerCache.over && (i.push(function (e) {
                    return function (t) {
                        e._trigger('out', t, this._uiHash(this))
                    }
                }.call(this, this.containers[r])), this.containers[r].containerCache.over = 0);
                if (this._storedCursor && e('body').css('cursor', this._storedCursor), this._storedOpacity && this.helper.css('opacity', this._storedOpacity), this._storedZIndex && this.helper.css('zIndex', 'auto' === this._storedZIndex ? '' : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                    if (!n) {
                        for (this._trigger('beforeStop', t, this._uiHash()), r = 0; r < i.length; r++) i[r].call(this, t);
                        this._trigger('stop', t, this._uiHash())
                    }
                    return this.fromOutside = !1,
                        !1
                }
                if (n || this._trigger('beforeStop', t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !n) {
                    for (r = 0; r < i.length; r++) i[r].call(this, t);
                    this._trigger('stop', t, this._uiHash())
                }
                return this.fromOutside = !1,
                    !0
            },
            _trigger: function () {
                e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
            },
            _uiHash: function (t) {
                var n = t || this;
                return {
                    helper: n.helper,
                    placeholder: n.placeholder || e([]),
                    position: n.position,
                    originalPosition: n.originalPosition,
                    offset: n.positionAbs,
                    item: n.currentItem,
                    sender: t ? t.element : null
                }
            }
        })
    }(jQuery),
    function (e) {
        var n = 0,
            r = {
            },
            i = {
            };
        r.height = r.paddingTop = r.paddingBottom = r.borderTopWidth = r.borderBottomWidth = 'hide',
            i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = 'show',
            e.widget('ui.accordion', {
                version: '1.10.0',
                options: {
                    active: 0,
                    animate: {
                    },
                    collapsible: !1,
                    event: 'click',
                    header: '> li > :first-child,> :not(li):even',
                    heightStyle: 'auto',
                    icons: {
                        activeHeader: 'ui-icon-triangle-1-s',
                        header: 'ui-icon-triangle-1-e'
                    },
                    activate: null,
                    beforeActivate: null
                },
                _create: function () {
                    var t = this.options;
                    this.prevShow = this.prevHide = e(),
                        this.element.addClass('ui-accordion ui-widget ui-helper-reset').attr('role', 'tablist'),
                    !t.collapsible && (t.active === !1 || null == t.active) && (t.active = 0),
                        this._processPanels(),
                    t.active < 0 && (t.active += this.headers.length),
                        this._refresh()
                },
                _getCreateEventData: function () {
                    return {
                        header: this.active,
                        content: this.active.length ? this.active.next()  : e()
                    }
                },
                _createIcons: function () {
                    var t = this.options.icons;
                    t && (e('<span>').addClass('ui-accordion-header-icon ui-icon ' + t.header).prependTo(this.headers), this.active.children('.ui-accordion-header-icon').removeClass(t.header).addClass(t.activeHeader), this.headers.addClass('ui-accordion-icons'))
                },
                _destroyIcons: function () {
                    this.headers.removeClass('ui-accordion-icons').children('.ui-accordion-header-icon').remove()
                },
                _destroy: function () {
                    var e;
                    this.element.removeClass('ui-accordion ui-widget ui-helper-reset').removeAttr('role'),
                        this.headers.removeClass('ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top').removeAttr('role').removeAttr('aria-selected').removeAttr('aria-controls').removeAttr('tabIndex').each(function () {
                            /^ui-accordion/.test(this.id) && this.removeAttribute('id')
                        }),
                        this._destroyIcons(),
                        e = this.headers.next().css('display', '').removeAttr('role').removeAttr('aria-expanded').removeAttr('aria-hidden').removeAttr('aria-labelledby').removeClass('ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled').each(function () {
                            /^ui-accordion/.test(this.id) && this.removeAttribute('id')
                        }),
                    'content' !== this.options.heightStyle && e.css('height', '')
                },
                _setOption: function (e, t) {
                    return 'active' === e ? void this._activate(t)  : ('event' === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), 'collapsible' === e && !t && this.options.active === !1 && this._activate(0), 'icons' === e && (this._destroyIcons(), t && this._createIcons()), 'disabled' === e && this.headers.add(this.headers.next()).toggleClass('ui-state-disabled', !!t), void 0)
                },
                _keydown: function (t) {
                    if (!t.altKey && !t.ctrlKey) {
                        var n = e.ui.keyCode,
                            r = this.headers.length,
                            i = this.headers.index(t.target),
                            s = !1;
                        switch (t.keyCode) {
                            case n.RIGHT:
                            case n.DOWN:
                                s = this.headers[(i + 1) % r];
                                break;
                            case n.LEFT:
                            case n.UP:
                                s = this.headers[(i - 1 + r) % r];
                                break;
                            case n.SPACE:
                            case n.ENTER:
                                this._eventHandler(t);
                                break;
                            case n.HOME:
                                s = this.headers[0];
                                break;
                            case n.END:
                                s = this.headers[r - 1]
                        }
                        s && (e(t.target).attr('tabIndex', - 1), e(s).attr('tabIndex', 0), s.focus(), t.preventDefault())
                    }
                },
                _panelKeyDown: function (t) {
                    t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus()
                },
                refresh: function () {
                    var t = this.options;
                    this._processPanels(),
                    (t.active === !1 && t.collapsible === !0 || !this.headers.length) && (t.active = !1, this.active = e()),
                        t.active === !1 ? this._activate(0)  : this.active.length && !e.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find('.ui-state-disabled').length ? (t.active = !1, this.active = e())  : this._activate(Math.max(0, t.active - 1))  : t.active = this.headers.index(this.active),
                        this._destroyIcons(),
                        this._refresh()
                },
                _processPanels: function () {
                    this.headers = this.element.find(this.options.header).addClass('ui-accordion-header ui-helper-reset ui-state-default ui-corner-all'),
                        this.headers.next().addClass('ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom').filter(':not(.ui-accordion-content-active)').hide()
                },
                _refresh: function () {
                    var t,
                        r = this.options,
                        i = r.heightStyle,
                        s = this.element.parent(),
                        o = this.accordionId = 'ui-accordion-' + (this.element.attr('id') || ++n);
                    this.active = this._findActive(r.active).addClass('ui-accordion-header-active ui-state-active').toggleClass('ui-corner-all ui-corner-top'),
                        this.active.next().addClass('ui-accordion-content-active').show(),
                        this.headers.attr('role', 'tab').each(function (t) {
                            var n = e(this),
                                r = n.attr('id'),
                                i = n.next(),
                                s = i.attr('id');
                            r || (r = o + '-header-' + t, n.attr('id', r)),
                            s || (s = o + '-panel-' + t, i.attr('id', s)),
                                n.attr('aria-controls', s),
                                i.attr('aria-labelledby', r)
                        }).next().attr('role', 'tabpanel'),
                        this.headers.not(this.active).attr({
                            'aria-selected': 'false',
                            tabIndex: - 1
                        }).next().attr({
                            'aria-expanded': 'false',
                            'aria-hidden': 'true'
                        }).hide(),
                        this.active.length ? this.active.attr({
                            'aria-selected': 'true',
                            tabIndex: 0
                        }).next().attr({
                            'aria-expanded': 'true',
                            'aria-hidden': 'false'
                        })  : this.headers.eq(0).attr('tabIndex', 0),
                        this._createIcons(),
                        this._setupEvents(r.event),
                        'fill' === i ? (t = s.height(), this.element.siblings(':visible').each(function () {
                            var n = e(this),
                                r = n.css('position');
                            'absolute' !== r && 'fixed' !== r && (t -= n.outerHeight(!0))
                        }), this.headers.each(function () {
                            t -= e(this).outerHeight(!0)
                        }), this.headers.next().each(function () {
                            e(this).height(Math.max(0, t - e(this).innerHeight() + e(this).height()))
                        }).css('overflow', 'auto'))  : 'auto' === i && (t = 0, this.headers.next().each(function () {
                            t = Math.max(t, e(this).css('height', '').height())
                        }).height(t))
                },
                _activate: function (t) {
                    var n = this._findActive(t) [0];
                    n !== this.active[0] && (n = n || this.active[0], this._eventHandler({
                        target: n,
                        currentTarget: n,
                        preventDefault: e.noop
                    }))
                },
                _findActive: function (t) {
                    return 'number' == typeof t ? this.headers.eq(t)  : e()
                },
                _setupEvents: function (t) {
                    var n = {
                        keydown: '_keydown'
                    };
                    t && e.each(t.split(' '), function (e, t) {
                        n[t] = '_eventHandler'
                    }),
                        this._off(this.headers.add(this.headers.next())),
                        this._on(this.headers, n),
                        this._on(this.headers.next(), {
                            keydown: '_panelKeyDown'
                        }),
                        this._hoverable(this.headers),
                        this._focusable(this.headers)
                },
                _eventHandler: function (t) {
                    var n = this.options,
                        r = this.active,
                        i = e(t.currentTarget),
                        s = i[0] === r[0],
                        o = s && n.collapsible,
                        u = o ? e()  : i.next(),
                        a = r.next(),
                        f = {
                            oldHeader: r,
                            oldPanel: a,
                            newHeader: o ? e()  : i,
                            newPanel: u
                        };
                    t.preventDefault(),
                    s && !n.collapsible || this._trigger('beforeActivate', t, f) === !1 || (n.active = o ? !1 : this.headers.index(i), this.active = s ? e()  : i, this._toggle(f), r.removeClass('ui-accordion-header-active ui-state-active'), n.icons && r.children('.ui-accordion-header-icon').removeClass(n.icons.activeHeader).addClass(n.icons.header), s || (i.removeClass('ui-corner-all').addClass('ui-accordion-header-active ui-state-active ui-corner-top'), n.icons && i.children('.ui-accordion-header-icon').removeClass(n.icons.header).addClass(n.icons.activeHeader), i.next().addClass('ui-accordion-content-active')))
                },
                _toggle: function (t) {
                    var n = t.newPanel,
                        r = this.prevShow.length ? this.prevShow : t.oldPanel;
                    this.prevShow.add(this.prevHide).stop(!0, !0),
                        this.prevShow = n,
                        this.prevHide = r,
                        this.options.animate ? this._animate(n, r, t)  : (r.hide(), n.show(), this._toggleComplete(t)),
                        r.attr({
                            'aria-expanded': 'false',
                            'aria-hidden': 'true'
                        }),
                        r.prev().attr('aria-selected', 'false'),
                        n.length && r.length ? r.prev().attr('tabIndex', - 1)  : n.length && this.headers.filter(function () {
                            return 0 === e(this).attr('tabIndex')
                        }).attr('tabIndex', - 1),
                        n.attr({
                            'aria-expanded': 'true',
                            'aria-hidden': 'false'
                        }).prev().attr({
                            'aria-selected': 'true',
                            tabIndex: 0
                        })
                },
                _animate: function (e, t, n) {
                    var s,
                        o,
                        u,
                        a = this,
                        f = 0,
                        l = e.length && (!t.length || e.index() < t.index()),
                        c = this.options.animate || {
                            },
                        h = l && c.down || c,
                        p = function () {
                            a._toggleComplete(n)
                        };
                    return 'number' == typeof h && (u = h),
                    'string' == typeof h && (o = h),
                        o = o || h.easing || c.easing,
                        u = u || h.duration || c.duration,
                        t.length ? e.length ? (s = e.show().outerHeight(), t.animate(r, {
                            duration: u,
                            easing: o,
                            step: function (e, t) {
                                t.now = Math.round(e)
                            }
                        }), e.hide().animate(i, {
                            duration: u,
                            easing: o,
                            complete: p,
                            step: function (e, n) {
                                n.now = Math.round(e),
                                    'height' !== n.prop ? f += n.now : 'content' !== a.options.heightStyle && (n.now = Math.round(s - t.outerHeight() - f), f = 0)
                            }
                        }), void 0)  : t.animate(r, u, o, p)  : e.animate(i, u, o, p)
                },
                _toggleComplete: function (e) {
                    var t = e.oldPanel;
                    t.removeClass('ui-accordion-content-active').prev().removeClass('ui-corner-top').addClass('ui-corner-all'),
                    t.length && (t.parent() [0].className = t.parent() [0].className),
                        this._trigger('activate', null, e)
                }
            })
    }(jQuery),
    function (e) {
        var n = 0;
        e.widget('ui.autocomplete', {
            version: '1.10.0',
            defaultElement: '<input>',
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: 'left top',
                    at: 'left bottom',
                    collision: 'none'
                },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            pending: 0,
            _create: function () {
                var t,
                    n,
                    r;
                this.isMultiLine = this._isMultiLine(),
                    this.valueMethod = this.element[this.element.is('input,textarea') ? 'val' : 'text'],
                    this.isNewMenu = !0,
                    this.element.addClass('ui-autocomplete-input').attr('autocomplete', 'off'),
                    this._on(this.element, {
                        keydown: function (i) {
                            if (this.element.prop('readOnly')) return t = !0,
                                r = !0,
                                n = !0,
                                void 0;
                            t = !1,
                                r = !1,
                                n = !1;
                            var s = e.ui.keyCode;
                            switch (i.keyCode) {
                                case s.PAGE_UP:
                                    t = !0,
                                        this._move('previousPage', i);
                                    break;
                                case s.PAGE_DOWN:
                                    t = !0,
                                        this._move('nextPage', i);
                                    break;
                                case s.UP:
                                    t = !0,
                                        this._keyEvent('previous', i);
                                    break;
                                case s.DOWN:
                                    t = !0,
                                        this._keyEvent('next', i);
                                    break;
                                case s.ENTER:
                                case s.NUMPAD_ENTER:
                                    this.menu.active && (t = !0, i.preventDefault(), this.menu.select(i));
                                    break;
                                case s.TAB:
                                    this.menu.active && this.menu.select(i);
                                    break;
                                case s.ESCAPE:
                                    this.menu.element.is(':visible') && (this._value(this.term), this.close(i), i.preventDefault());
                                    break;
                                default:
                                    n = !0,
                                        this._searchTimeout(i)
                            }
                        },
                        keypress: function (r) {
                            if (t) return t = !1,
                                void r.preventDefault();
                            if (!n) {
                                var i = e.ui.keyCode;
                                switch (r.keyCode) {
                                    case i.PAGE_UP:
                                        this._move('previousPage', r);
                                        break;
                                    case i.PAGE_DOWN:
                                        this._move('nextPage', r);
                                        break;
                                    case i.UP:
                                        this._keyEvent('previous', r);
                                        break;
                                    case i.DOWN:
                                        this._keyEvent('next', r)
                                }
                            }
                        },
                        input: function (e) {
                            return r ? (r = !1, void e.preventDefault())  : void this._searchTimeout(e)
                        },
                        focus: function () {
                            this.selectedItem = null,
                                this.previous = this._value()
                        },
                        blur: function (e) {
                            return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(e), this._change(e), void 0)
                        }
                    }),
                    this._initSource(),
                    this.menu = e('<ul>').addClass('ui-autocomplete').appendTo(this._appendTo()).menu({
                        input: e(),
                        role: null
                    }).zIndex(this.element.zIndex() + 1).hide().data('ui-menu'),
                    this._on(this.menu.element, {
                        mousedown: function (t) {
                            t.preventDefault(),
                                this.cancelBlur = !0,
                                this._delay(function () {
                                    delete this.cancelBlur
                                });
                            var n = this.menu.element[0];
                            e(t.target).closest('.ui-menu-item').length || this._delay(function () {
                                var t = this;
                                this.document.one('mousedown', function (r) {
                                    r.target !== t.element[0] && r.target !== n && !e.contains(n, r.target) && t.close()
                                })
                            })
                        },
                        menufocus: function (t, n) {
                            if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type))) return this.menu.blur(),
                                void this.document.one('mousemove', function () {
                                    e(t.target).trigger(t.originalEvent)
                                });
                            var r = n.item.data('ui-autocomplete-item');
                            !1 !== this._trigger('focus', t, {
                                item: r
                            }) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(r.value)  : this.liveRegion.text(r.value)
                        },
                        menuselect: function (e, t) {
                            var n = t.item.data('ui-autocomplete-item'),
                                r = this.previous;
                            this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = r, this._delay(function () {
                                this.previous = r,
                                    this.selectedItem = n
                            })),
                            !1 !== this._trigger('select', e, {
                                item: n
                            }) && this._value(n.value),
                                this.term = this._value(),
                                this.close(e),
                                this.selectedItem = n
                        }
                    }),
                    this.liveRegion = e('<span>', {
                        role: 'status',
                        'aria-live': 'polite'
                    }).addClass('ui-helper-hidden-accessible').insertAfter(this.element),
                    this._on(this.window, {
                        beforeunload: function () {
                            this.element.removeAttr('autocomplete')
                        }
                    })
            }, _destroy: function () {
                clearTimeout(this.searching),
                    this.element.removeClass('ui-autocomplete-input').removeAttr('autocomplete'),
                    this.menu.element.remove(),
                    this.liveRegion.remove()
            }, _setOption: function (e, t) {
                this._super(e, t),
                'source' === e && this._initSource(),
                'appendTo' === e && this.menu.element.appendTo(this._appendTo()),
                'disabled' === e && t && this.xhr && this.xhr.abort()
            }, _appendTo: function () {
                var t = this.options.appendTo;
                return t && (t = t.jquery || t.nodeType ? e(t)  : this.document.find(t).eq(0)),
                t || (t = this.element.closest('.ui-front')),
                t.length || (t = this.document[0].body),
                    t
            }, _isMultiLine: function () {
                return this.element.is('textarea') ? !0 : this.element.is('input') ? !1 : this.element.prop('isContentEditable')
            }, _initSource: function () {
                var t,
                    n,
                    r = this;
                e.isArray(this.options.source) ? (t = this.options.source, this.source = function (n, r) {
                    r(e.ui.autocomplete.filter(t, n.term))
                })  : 'string' == typeof this.options.source ? (n = this.options.source, this.source = function (t, i) {
                    r.xhr && r.xhr.abort(),
                        r.xhr = e.ajax({
                            url: n,
                            data: t,
                            dataType: 'json',
                            success: function (e) {
                                i(e)
                            },
                            error: function () {
                                i([])
                            }
                        })
                })  : this.source = this.options.source
            }, _searchTimeout: function (e) {
                clearTimeout(this.searching),
                    this.searching = this._delay(function () {
                        this.term !== this._value() && (this.selectedItem = null, this.search(null, e))
                    }, this.options.delay)
            }, search: function (e, t) {
                return e = null != e ? e : this._value(),
                    this.term = this._value(),
                    e.length < this.options.minLength ? this.close(t)  : this._trigger('search', t) !== !1 ? this._search(e)  : void 0
            }, _search: function (e) {
                this.pending++,
                    this.element.addClass('ui-autocomplete-loading'),
                    this.cancelSearch = !1,
                    this.source({
                        term: e
                    }, this._response())
            }, _response: function () {
                var e = this,
                    t = ++n;
                return function (r) {
                    t === n && e.__response(r),
                        e.pending--,
                    e.pending || e.element.removeClass('ui-autocomplete-loading')
                }
            }, __response: function (e) {
                e && (e = this._normalize(e)),
                    this._trigger('response', null, {
                        content: e
                    }),
                    !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger('open'))  : this._close()
            }, close: function (e) {
                this.cancelSearch = !0,
                    this._close(e)
            }, _close: function (e) {
                this.menu.element.is(':visible') && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger('close', e))
            }, _change: function (e) {
                this.previous !== this._value() && this._trigger('change', e, {
                    item: this.selectedItem
                })
            }, _normalize: function (t) {
                return t.length && t[0].label && t[0].value ? t : e.map(t, function (t) {
                    return 'string' == typeof t ? {
                        label: t,
                        value: t
                    }
                        : e.extend({
                        label: t.label || t.value,
                        value: t.value || t.label
                    }, t)
                })
            }, _suggest: function (t) {
                var n = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
                this._renderMenu(n, t),
                    this.menu.refresh(),
                    n.show(),
                    this._resizeMenu(),
                    n.position(e.extend({
                        of: this.element
                    }, this.options.position)),
                this.options.autoFocus && this.menu.next()
            }, _resizeMenu: function () {
                var e = this.menu.element;
                e.outerWidth(Math.max(e.width('').outerWidth() + 1, this.element.outerWidth()))
            }, _renderMenu: function (t, n) {
                var r = this;
                e.each(n, function (e, n) {
                    r._renderItemData(t, n)
                })
            }, _renderItemData: function (e, t) {
                return this._renderItem(e, t).data('ui-autocomplete-item', t)
            }, _renderItem: function (t, n) {
                return e('<li>').append(e('<a>').text(n.label)).appendTo(t)
            }, _move: function (e, t) {
                return this.menu.element.is(':visible') ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this._value(this.term), void this.menu.blur())  : void this.menu[e](t)  : void this.search(null, t)
            }, widget: function () {
                return this.menu.element
            }, _value: function () {
                return this.valueMethod.apply(this.element, arguments)
            }, _keyEvent: function (e, t) {
                (!this.isMultiLine || this.menu.element.is(':visible')) && (this._move(e, t), t.preventDefault())
            }
        }),
            e.extend(e.ui.autocomplete, {
                escapeRegex: function (e) {
                    return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
                },
                filter: function (t, n) {
                    var r = new RegExp(e.ui.autocomplete.escapeRegex(n), 'i');
                    return e.grep(t, function (e) {
                        return r.test(e.label || e.value || e)
                    })
                }
            }),
            e.widget('ui.autocomplete', e.ui.autocomplete, {
                options: {
                    messages: {
                        noResults: 'No search results.',
                        results: function (e) {
                            return e + (e > 1 ? ' results are' : ' result is') + ' available, use up and down arrow keys to navigate.'
                        }
                    }
                },
                __response: function (e) {
                    var t;
                    this._superApply(arguments),
                    this.options.disabled || this.cancelSearch || (t = e && e.length ? this.options.messages.results(e.length)  : this.options.messages.noResults, this.liveRegion.text(t))
                }
            })
    }(jQuery), function (e) {
    var n,
        r,
        i,
        s,
        o = 'ui-button ui-widget ui-state-default ui-corner-all',
        u = 'ui-state-hover ui-state-active ',
        a = 'ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only',
        f = function () {
            var t = e(this).find(':ui-button');
            setTimeout(function () {
                t.button('refresh')
            }, 1)
        },
        l = function (t) {
            var n = t.name,
                r = t.form,
                i = e([]);
            return n && (n = n.replace(/'/g, '\\\''), i = r ? e(r).find('[name=\'' + n + '\']')  : e('[name=\'' + n + '\']', t.ownerDocument).filter(function () {
                return !this.form
            })),
                i
        };
    e.widget('ui.button', {
        version: '1.10.0',
        defaultElement: '<button>',
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function () {
            this.element.closest('form').unbind('reset' + this.eventNamespace).bind('reset' + this.eventNamespace, f),
                'boolean' != typeof this.options.disabled ? this.options.disabled = !!this.element.prop('disabled')  : this.element.prop('disabled', this.options.disabled),
                this._determineButtonType(),
                this.hasTitle = !!this.buttonElement.attr('title');
            var t = this,
                u = this.options,
                a = 'checkbox' === this.type || 'radio' === this.type,
                c = a ? '' : 'ui-state-active',
                h = 'ui-state-focus';
            null === u.label && (u.label = 'input' === this.type ? this.buttonElement.val()  : this.buttonElement.html()),
                this._hoverable(this.buttonElement),
                this.buttonElement.addClass(o).attr('role', 'button').bind('mouseenter' + this.eventNamespace, function () {
                    u.disabled || this === n && e(this).addClass('ui-state-active')
                }).bind('mouseleave' + this.eventNamespace, function () {
                    u.disabled || e(this).removeClass(c)
                }).bind('click' + this.eventNamespace, function (e) {
                    u.disabled && (e.preventDefault(), e.stopImmediatePropagation())
                }),
                this.element.bind('focus' + this.eventNamespace, function () {
                    t.buttonElement.addClass(h)
                }).bind('blur' + this.eventNamespace, function () {
                    t.buttonElement.removeClass(h)
                }),
            a && (this.element.bind('change' + this.eventNamespace, function () {
                s || t.refresh()
            }), this.buttonElement.bind('mousedown' + this.eventNamespace, function (e) {
                u.disabled || (s = !1, r = e.pageX, i = e.pageY)
            }).bind('mouseup' + this.eventNamespace, function (e) {
                u.disabled || (r !== e.pageX || i !== e.pageY) && (s = !0)
            })),
                'checkbox' === this.type ? this.buttonElement.bind('click' + this.eventNamespace, function () {
                    return u.disabled || s ? !1 : void 0
                })  : 'radio' === this.type ? this.buttonElement.bind('click' + this.eventNamespace, function () {
                    if (u.disabled || s) return !1;
                    e(this).addClass('ui-state-active'),
                        t.buttonElement.attr('aria-pressed', 'true');
                    var n = t.element[0];
                    l(n).not(n).map(function () {
                        return e(this).button('widget') [0]
                    }).removeClass('ui-state-active').attr('aria-pressed', 'false')
                })  : (this.buttonElement.bind('mousedown' + this.eventNamespace, function () {
                    return u.disabled ? !1 : (e(this).addClass('ui-state-active'), n = this, t.document.one('mouseup', function () {
                        n = null
                    }), void 0)
                }).bind('mouseup' + this.eventNamespace, function () {
                    return u.disabled ? !1 : void e(this).removeClass('ui-state-active')
                }).bind('keydown' + this.eventNamespace, function (t) {
                    return u.disabled ? !1 : void ((t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass('ui-state-active'))
                }).bind('keyup' + this.eventNamespace + ' blur' + this.eventNamespace, function () {
                    e(this).removeClass('ui-state-active')
                }), this.buttonElement.is('a') && this.buttonElement.keyup(function (t) {
                    t.keyCode === e.ui.keyCode.SPACE && e(this).click()
                })),
                this._setOption('disabled', u.disabled),
                this._resetButton()
        },
        _determineButtonType: function () {
            var e,
                t,
                n;
            this.type = this.element.is('[type=checkbox]') ? 'checkbox' : this.element.is('[type=radio]') ? 'radio' : this.element.is('input') ? 'input' : 'button',
                'checkbox' === this.type || 'radio' === this.type ? (e = this.element.parents().last(), t = 'label[for=\'' + this.element.attr('id') + '\']', this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings()  : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass('ui-helper-hidden-accessible'), n = this.element.is(':checked'), n && this.buttonElement.addClass('ui-state-active'), this.buttonElement.prop('aria-pressed', n))  : this.buttonElement = this.element
        },
        widget: function () {
            return this.buttonElement
        },
        _destroy: function () {
            this.element.removeClass('ui-helper-hidden-accessible'),
                this.buttonElement.removeClass(o + ' ' + u + ' ' + a).removeAttr('role').removeAttr('aria-pressed').html(this.buttonElement.find('.ui-button-text').html()),
            this.hasTitle || this.buttonElement.removeAttr('title')
        },
        _setOption: function (e, t) {
            return this._super(e, t),
                'disabled' === e ? void (t ? this.element.prop('disabled', !0)  : this.element.prop('disabled', !1))  : void this._resetButton()
        },
        refresh: function () {
            var t = this.element.is('input, button') ? this.element.is(':disabled')  : this.element.hasClass('ui-button-disabled');
            t !== this.options.disabled && this._setOption('disabled', t),
                'radio' === this.type ? l(this.element[0]).each(function () {
                    e(this).is(':checked') ? e(this).button('widget').addClass('ui-state-active').attr('aria-pressed', 'true')  : e(this).button('widget').removeClass('ui-state-active').attr('aria-pressed', 'false')
                })  : 'checkbox' === this.type && (this.element.is(':checked') ? this.buttonElement.addClass('ui-state-active').attr('aria-pressed', 'true')  : this.buttonElement.removeClass('ui-state-active').attr('aria-pressed', 'false'))
        },
        _resetButton: function () {
            if ('input' === this.type) return void (this.options.label && this.element.val(this.options.label));
            var t = this.buttonElement.removeClass(a),
                n = e('<span></span>', this.document[0]).addClass('ui-button-text').html(this.options.label).appendTo(t.empty()).text(),
                r = this.options.icons,
                i = r.primary && r.secondary,
                s = [
                ];
            r.primary || r.secondary ? (this.options.text && s.push('ui-button-text-icon' + (i ? 's' : r.primary ? '-primary' : '-secondary')), r.primary && t.prepend('<span class=\'ui-button-icon-primary ui-icon ' + r.primary + '\'></span>'), r.secondary && t.append('<span class=\'ui-button-icon-secondary ui-icon ' + r.secondary + '\'></span>'), this.options.text || (s.push(i ? 'ui-button-icons-only' : 'ui-button-icon-only'), this.hasTitle || t.attr('title', e.trim(n))))  : s.push('ui-button-text-only'),
                t.addClass(s.join(' '))
        }
    }),
        e.widget('ui.buttonset', {
            version: '1.10.0',
            options: {
                items: 'button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)'
            },
            _create: function () {
                this.element.addClass('ui-buttonset')
            },
            _init: function () {
                this.refresh()
            },
            _setOption: function (e, t) {
                'disabled' === e && this.buttons.button('option', e, t),
                    this._super(e, t)
            },
            refresh: function () {
                var t = 'rtl' === this.element.css('direction');
                this.buttons = this.element.find(this.options.items).filter(':ui-button').button('refresh').end().not(':ui-button').button().end().map(function () {
                    return e(this).button('widget') [0]
                }).removeClass('ui-corner-all ui-corner-left ui-corner-right').filter(':first').addClass(t ? 'ui-corner-right' : 'ui-corner-left').end().filter(':last').addClass(t ? 'ui-corner-left' : 'ui-corner-right').end().end()
            },
            _destroy: function () {
                this.element.removeClass('ui-buttonset'),
                    this.buttons.map(function () {
                        return e(this).button('widget') [0]
                    }).removeClass('ui-corner-left ui-corner-right').end().button('destroy')
            }
        })
}(jQuery), function (e, t) {
    function s() {
        this._curInst = null,
            this._keyEvent = !1,
            this._disabledInputs = [
            ],
            this._datepickerShowing = !1,
            this._inDialog = !1,
            this._mainDivId = 'ui-datepicker-div',
            this._inlineClass = 'ui-datepicker-inline',
            this._appendClass = 'ui-datepicker-append',
            this._triggerClass = 'ui-datepicker-trigger',
            this._dialogClass = 'ui-datepicker-dialog',
            this._disableClass = 'ui-datepicker-disabled',
            this._unselectableClass = 'ui-datepicker-unselectable',
            this._currentClass = 'ui-datepicker-current-day',
            this._dayOverClass = 'ui-datepicker-days-cell-over',
            this.regional = [
            ],
            this.regional[''] = {
                closeText: 'Done',
                prevText: 'Prev',
                nextText: 'Next',
                currentText: 'Today',
                monthNames: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December'
                ],
                monthNamesShort: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ],
                dayNames: [
                    'Sunday',
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday'
                ],
                dayNamesShort: [
                    'Sun',
                    'Mon',
                    'Tue',
                    'Wed',
                    'Thu',
                    'Fri',
                    'Sat'
                ],
                dayNamesMin: [
                    'Su',
                    'Mo',
                    'Tu',
                    'We',
                    'Th',
                    'Fr',
                    'Sa'
                ],
                weekHeader: 'Wk',
                dateFormat: 'mm/dd/yy',
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ''
            },
            this._defaults = {
                showOn: 'focus',
                showAnim: 'fadeIn',
                showOptions: {
                },
                defaultDate: null,
                appendText: '',
                buttonText: '...',
                buttonImage: '',
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: 'c-10:c+10',
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: '+10',
                minDate: null,
                maxDate: null,
                duration: 'fast',
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: '',
                altFormat: '',
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            },
            e.extend(this._defaults, this.regional['']),
            this.dpDiv = o(e('<div id=\'' + this._mainDivId + '\' class=\'ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all\'></div>'))
    }
    function o(t) {
        var n = 'button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a';
        return t.delegate(n, 'mouseout', function () {
            e(this).removeClass('ui-state-hover'),
            - 1 !== this.className.indexOf('ui-datepicker-prev') && e(this).removeClass('ui-datepicker-prev-hover'),
            - 1 !== this.className.indexOf('ui-datepicker-next') && e(this).removeClass('ui-datepicker-next-hover')
        }).delegate(n, 'mouseover', function () {
            e.datepicker._isDisabledDatepicker(i.inline ? t.parent() [0] : i.input[0]) || (e(this).parents('.ui-datepicker-calendar').find('a').removeClass('ui-state-hover'), e(this).addClass('ui-state-hover'), - 1 !== this.className.indexOf('ui-datepicker-prev') && e(this).addClass('ui-datepicker-prev-hover'), - 1 !== this.className.indexOf('ui-datepicker-next') && e(this).addClass('ui-datepicker-next-hover'))
        })
    }
    function u(t, n) {
        e.extend(t, n);
        for (var r in n) null == n[r] && (t[r] = n[r]);
        return t
    }
    e.extend(e.ui, {
        datepicker: {
            version: '1.10.0'
        }
    });
    var i,
        n = 'datepicker',
        r = (new Date).getTime();
    e.extend(s.prototype, {
        markerClassName: 'hasDatepicker',
        maxRows: 4,
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (e) {
            return u(this._defaults, e || {
                }),
                this
        },
        _attachDatepicker: function (t, n) {
            var r,
                i,
                s;
            r = t.nodeName.toLowerCase(),
                i = 'div' === r || 'span' === r,
            t.id || (this.uuid += 1, t.id = 'dp' + this.uuid),
                s = this._newInst(e(t), i),
                s.settings = e.extend({
                }, n || {
                    }),
                'input' === r ? this._connectDatepicker(t, s)  : i && this._inlineDatepicker(t, s)
        },
        _newInst: function (t, n) {
            var r = t[0].id.replace(/([^A-Za-z0-9_\-])/g, '\\\\$1');
            return {
                id: r,
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: n,
                dpDiv: n ? o(e('<div class=\'' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all\'></div>'))  : this.dpDiv
            }
        },
        _connectDatepicker: function (t, r) {
            var i = e(t);
            r.append = e([]),
                r.trigger = e([]),
            i.hasClass(this.markerClassName) || (this._attachments(i, r), i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(r), e.data(t, n, r), r.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function (t, n) {
            var r,
                i,
                s,
                o = this._get(n, 'appendText'),
                u = this._get(n, 'isRTL');
            n.append && n.append.remove(),
            o && (n.append = e('<span class=\'' + this._appendClass + '\'>' + o + '</span>'), t[u ? 'before' : 'after'](n.append)),
                t.unbind('focus', this._showDatepicker),
            n.trigger && n.trigger.remove(),
                r = this._get(n, 'showOn'),
            ('focus' === r || 'both' === r) && t.focus(this._showDatepicker),
            ('button' === r || 'both' === r) && (i = this._get(n, 'buttonText'), s = this._get(n, 'buttonImage'), n.trigger = e(this._get(n, 'buttonImageOnly') ? e('<img/>').addClass(this._triggerClass).attr({
                src: s,
                alt: i,
                title: i
            })  : e('<button type=\'button\'></button>').addClass(this._triggerClass).html(s ? e('<img/>').attr({
                src: s,
                alt: i,
                title: i
            })  : i)), t[u ? 'before' : 'after'](n.trigger), n.trigger.click(function () {
                return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker()  : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0]))  : e.datepicker._showDatepicker(t[0]),
                    !1
            }))
        },
        _autoSize: function (e) {
            if (this._get(e, 'autoSize') && !e.inline) {
                var t,
                    n,
                    r,
                    i,
                    s = new Date(2009, 11, 20),
                    o = this._get(e, 'dateFormat');
                o.match(/[DM]/) && (t = function (e) {
                    for (n = 0, r = 0, i = 0; i < e.length; i++) e[i].length > n && (n = e[i].length, r = i);
                    return r
                }, s.setMonth(t(this._get(e, o.match(/MM/) ? 'monthNames' : 'monthNamesShort'))), s.setDate(t(this._get(e, o.match(/DD/) ? 'dayNames' : 'dayNamesShort')) + 20 - s.getDay())),
                    e.input.attr('size', this._formatDate(e, s).length)
            }
        },
        _inlineDatepicker: function (t, r) {
            var i = e(t);
            i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(r.dpDiv), e.data(t, n, r), this._setDate(r, this._getDefaultDate(r), !0), this._updateDatepicker(r), this._updateAlternate(r), r.settings.disabled && this._disableDatepicker(t), r.dpDiv.css('display', 'block'))
        },
        _dialogDatepicker: function (t, r, i, s, o) {
            var a,
                f,
                l,
                c,
                h,
                p = this._dialogInst;
            return p || (this.uuid += 1, a = 'dp' + this.uuid, this._dialogInput = e('<input type=\'text\' id=\'' + a + '\' style=\'position: absolute; top: -100px; width: 0px;\'/>'), this._dialogInput.keydown(this._doKeyDown), e('body').append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {
            }, e.data(this._dialogInput[0], n, p)),
                u(p.settings, s || {
                    }),
                r = r && r.constructor === Date ? this._formatDate(p, r)  : r,
                this._dialogInput.val(r),
                this._pos = o ? o.length ? o : [
                    o.pageX,
                    o.pageY
                ] : null,
            this._pos || (f = document.documentElement.clientWidth, l = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, h = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [
                f / 2 - 100 + c,
                l / 2 - 150 + h
            ]),
                this._dialogInput.css('left', this._pos[0] + 20 + 'px').css('top', this._pos[1] + 'px'),
                p.settings.onSelect = i,
                this._inDialog = !0,
                this.dpDiv.addClass(this._dialogClass),
                this._showDatepicker(this._dialogInput[0]),
            e.blockUI && e.blockUI(this.dpDiv),
                e.data(this._dialogInput[0], n, p),
                this
        },
        _destroyDatepicker: function (t) {
            var r,
                i = e(t),
                s = e.data(t, n);
            i.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(), e.removeData(t, n), 'input' === r ? (s.append.remove(), s.trigger.remove(), i.removeClass(this.markerClassName).unbind('focus', this._showDatepicker).unbind('keydown', this._doKeyDown).unbind('keypress', this._doKeyPress).unbind('keyup', this._doKeyUp))  : ('div' === r || 'span' === r) && i.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function (t) {
            var r,
                i,
                s = e(t),
                o = e.data(t, n);
            s.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(), 'input' === r ? (t.disabled = !1, o.trigger.filter('button').each(function () {
                this.disabled = !1
            }).end().filter('img').css({
                opacity: '1.0',
                cursor: ''
            }))  : ('div' === r || 'span' === r) && (i = s.children('.' + this._inlineClass), i.children().removeClass('ui-state-disabled'), i.find('select.ui-datepicker-month, select.ui-datepicker-year').prop('disabled', !1)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
                return e === t ? null : e
            }))
        },
        _disableDatepicker: function (t) {
            var r,
                i,
                s = e(t),
                o = e.data(t, n);
            s.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(), 'input' === r ? (t.disabled = !0, o.trigger.filter('button').each(function () {
                this.disabled = !0
            }).end().filter('img').css({
                opacity: '0.5',
                cursor: 'default'
            }))  : ('div' === r || 'span' === r) && (i = s.children('.' + this._inlineClass), i.children().addClass('ui-state-disabled'), i.find('select.ui-datepicker-month, select.ui-datepicker-year').prop('disabled', !0)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
                return e === t ? null : e
            }), this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function (e) {
            if (!e) return !1;
            for (var t = 0; t < this._disabledInputs.length; t++) if (this._disabledInputs[t] === e) return !0;
            return !1
        },
        _getInst: function (t) {
            try {
                return e.data(t, n)
            } catch (r) {
                throw 'Missing instance data for this datepicker'
            }
        },
        _optionDatepicker: function (n, r, i) {
            var s,
                o,
                a,
                f,
                l = this._getInst(n);
            return 2 === arguments.length && 'string' == typeof r ? 'defaults' === r ? e.extend({
            }, e.datepicker._defaults)  : l ? 'all' === r ? e.extend({
            }, l.settings)  : this._get(l, r)  : null : (s = r || {
                }, 'string' == typeof r && (s = {
            }, s[r] = i), l && (this._curInst === l && this._hideDatepicker(), o = this._getDateDatepicker(n, !0), a = this._getMinMaxDate(l, 'min'), f = this._getMinMaxDate(l, 'max'), u(l.settings, s), null !== a && s.dateFormat !== t && s.minDate === t && (l.settings.minDate = this._formatDate(l, a)), null !== f && s.dateFormat !== t && s.maxDate === t && (l.settings.maxDate = this._formatDate(l, f)), 'disabled' in s && (s.disabled ? this._disableDatepicker(n)  : this._enableDatepicker(n)), this._attachments(e(n), l), this._autoSize(l), this._setDate(l, o), this._updateAlternate(l), this._updateDatepicker(l)), void 0)
        },
        _changeDatepicker: function (e, t, n) {
            this._optionDatepicker(e, t, n)
        },
        _refreshDatepicker: function (e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function (e, t) {
            var n = this._getInst(e);
            n && (this._setDate(n, t), this._updateDatepicker(n), this._updateAlternate(n))
        },
        _getDateDatepicker: function (e, t) {
            var n = this._getInst(e);
            return n && !n.inline && this._setDateFromField(n, t),
                n ? this._getDate(n)  : null
        },
        _doKeyDown: function (t) {
            var n,
                r,
                i,
                s = e.datepicker._getInst(t.target),
                o = !0,
                u = s.dpDiv.is('.ui-datepicker-rtl');
            if (s._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
                case 9:
                    e.datepicker._hideDatepicker(),
                        o = !1;
                    break;
                case 13:
                    return i = e('td.' + e.datepicker._dayOverClass + ':not(.' + e.datepicker._currentClass + ')', s.dpDiv),
                    i[0] && e.datepicker._selectDay(t.target, s.selectedMonth, s.selectedYear, i[0]),
                        n = e.datepicker._get(s, 'onSelect'),
                        n ? (r = e.datepicker._formatDate(s), n.apply(s.input ? s.input[0] : null, [
                            r,
                            s
                        ]))  : e.datepicker._hideDatepicker(),
                        !1;
                case 27:
                    e.datepicker._hideDatepicker();
                    break;
                case 33:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? - e.datepicker._get(s, 'stepBigMonths')  : - e.datepicker._get(s, 'stepMonths'), 'M');
                    break;
                case 34:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? + e.datepicker._get(s, 'stepBigMonths')  : + e.datepicker._get(s, 'stepMonths'), 'M');
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target),
                        o = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target),
                        o = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, u ? 1 : - 1, 'D'),
                        o = t.ctrlKey || t.metaKey,
                    t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? - e.datepicker._get(s, 'stepBigMonths')  : - e.datepicker._get(s, 'stepMonths'), 'M');
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, - 7, 'D'),
                        o = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, u ? - 1 : 1, 'D'),
                        o = t.ctrlKey || t.metaKey,
                    t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? + e.datepicker._get(s, 'stepBigMonths')  : + e.datepicker._get(s, 'stepMonths'), 'M');
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, 'D'),
                        o = t.ctrlKey || t.metaKey;
                    break;
                default:
                    o = !1
            } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this)  : o = !1;
            o && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function (t) {
            var n,
                r,
                i = e.datepicker._getInst(t.target);
            return e.datepicker._get(i, 'constrainInput') ? (n = e.datepicker._possibleChars(e.datepicker._get(i, 'dateFormat')), r = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || ' ' > r || !n || n.indexOf(r) > - 1)  : void 0
        },
        _doKeyUp: function (t) {
            var n,
                r = e.datepicker._getInst(t.target);
            if (r.input.val() !== r.lastVal) try {
                n = e.datepicker.parseDate(e.datepicker._get(r, 'dateFormat'), r.input ? r.input.val()  : null, e.datepicker._getFormatConfig(r)),
                n && (e.datepicker._setDateFromField(r), e.datepicker._updateAlternate(r), e.datepicker._updateDatepicker(r))
            } catch (i) {
            }
            return !0
        },
        _showDatepicker: function (t) {
            if (t = t.target || t, 'input' !== t.nodeName.toLowerCase() && (t = e('input', t.parentNode) [0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
                var n,
                    r,
                    i,
                    s,
                    o,
                    a,
                    f;
                n = e.datepicker._getInst(t),
                e.datepicker._curInst && e.datepicker._curInst !== n && (e.datepicker._curInst.dpDiv.stop(!0, !0), n && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),
                    r = e.datepicker._get(n, 'beforeShow'),
                    i = r ? r.apply(t, [
                        t,
                        n
                    ])  : {
                    },
                i !== !1 && (u(n.settings, i), n.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(n), e.datepicker._inDialog && (t.value = ''), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), s = !1, e(t).parents().each(function () {
                    return s |= 'fixed' === e(this).css('position'),
                        !s
                }), o = {
                    left: e.datepicker._pos[0],
                    top: e.datepicker._pos[1]
                }, e.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({
                    position: 'absolute',
                    display: 'block',
                    top: '-1000px'
                }), e.datepicker._updateDatepicker(n), o = e.datepicker._checkOffset(n, o, s), n.dpDiv.css({
                    position: e.datepicker._inDialog && e.blockUI ? 'static' : s ? 'fixed' : 'absolute',
                    display: 'none',
                    left: o.left + 'px',
                    top: o.top + 'px'
                }), n.inline || (a = e.datepicker._get(n, 'showAnim'), f = e.datepicker._get(n, 'duration'), n.dpDiv.zIndex(e(t).zIndex() + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[a] ? n.dpDiv.show(a, e.datepicker._get(n, 'showOptions'), f)  : n.dpDiv[a || 'show'](a ? f : null), n.input.is(':visible') && !n.input.is(':disabled') && n.input.focus(), e.datepicker._curInst = n))
            }
        },
        _updateDatepicker: function (t) {
            this.maxRows = 4,
                i = t,
                t.dpDiv.empty().append(this._generateHTML(t)),
                this._attachHandlers(t),
                t.dpDiv.find('.' + this._dayOverClass + ' a').mouseover();
            var n,
                r = this._getNumberOfMonths(t),
                s = r[1],
                o = 17;
            t.dpDiv.removeClass('ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4').width(''),
            s > 1 && t.dpDiv.addClass('ui-datepicker-multi-' + s).css('width', o * s + 'em'),
                t.dpDiv[(1 !== r[0] || 1 !== r[1] ? 'add' : 'remove') + 'Class']('ui-datepicker-multi'),
                t.dpDiv[(this._get(t, 'isRTL') ? 'add' : 'remove') + 'Class']('ui-datepicker-rtl'),
            t === e.datepicker._curInst && e.datepicker._datepickerShowing && t.input && t.input.is(':visible') && !t.input.is(':disabled') && t.input[0] !== document.activeElement && t.input.focus(),
            t.yearshtml && (n = t.yearshtml, setTimeout(function () {
                n === t.yearshtml && t.yearshtml && t.dpDiv.find('select.ui-datepicker-year:first').replaceWith(t.yearshtml),
                    n = t.yearshtml = null
            }, 0))
        },
        _getBorders: function (e) {
            var t = function (e) {
                return {
                        thin: 1,
                        medium: 2,
                        thick: 3
                    }
                        [
                        e
                        ] || e
            };
            return [parseFloat(t(e.css('border-left-width'))),
                parseFloat(t(e.css('border-top-width')))]
        },
        _checkOffset: function (t, n, r) {
            var i = t.dpDiv.outerWidth(),
                s = t.dpDiv.outerHeight(),
                o = t.input ? t.input.outerWidth()  : 0,
                u = t.input ? t.input.outerHeight()  : 0,
                a = document.documentElement.clientWidth + (r ? 0 : e(document).scrollLeft()),
                f = document.documentElement.clientHeight + (r ? 0 : e(document).scrollTop());
            return n.left -= this._get(t, 'isRTL') ? i - o : 0,
                n.left -= r && n.left === t.input.offset().left ? e(document).scrollLeft()  : 0,
                n.top -= r && n.top === t.input.offset().top + u ? e(document).scrollTop()  : 0,
                n.left -= Math.min(n.left, n.left + i > a && a > i ? Math.abs(n.left + i - a)  : 0),
                n.top -= Math.min(n.top, n.top + s > f && f > s ? Math.abs(s + u)  : 0),
                n
        },
        _findPos: function (t) {
            for (var n, r = this._getInst(t), i = this._get(r, 'isRTL'); t && ('hidden' === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t)); ) t = t[i ? 'previousSibling' : 'nextSibling'];
            return n = e(t).offset(),
                [
                    n.left,
                    n.top
                ]
        },
        _hideDatepicker: function (t) {
            var r,
                i,
                s,
                o,
                u = this._curInst;
            !u || t && u !== e.data(t, n) || this._datepickerShowing && (r = this._get(u, 'showAnim'), i = this._get(u, 'duration'), s = function () {
                e.datepicker._tidyDialog(u)
            }, e.effects && (e.effects.effect[r] || e.effects[r]) ? u.dpDiv.hide(r, e.datepicker._get(u, 'showOptions'), i, s)  : u.dpDiv['slideDown' === r ? 'slideUp' : 'fadeIn' === r ? 'fadeOut' : 'hide'](r ? i : null, s), r || s(), this._datepickerShowing = !1, o = this._get(u, 'onClose'), o && o.apply(u.input ? u.input[0] : null, [
                u.input ? u.input.val()  : '',
                u
            ]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: 'absolute',
                left: '0',
                top: '-100px'
            }), e.blockUI && (e.unblockUI(), e('body').append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function (e) {
            e.dpDiv.removeClass(this._dialogClass).unbind('.ui-datepicker-calendar')
        },
        _checkExternalClick: function (t) {
            if (e.datepicker._curInst) {
                var n = e(t.target),
                    r = e.datepicker._getInst(n[0]);
                (n[0].id !== e.datepicker._mainDivId && 0 === n.parents('#' + e.datepicker._mainDivId).length && !n.hasClass(e.datepicker.markerClassName) && !n.closest('.' + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || n.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== r) && e.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function (t, n, r) {
            var i = e(t),
                s = this._getInst(i[0]);
            this._isDisabledDatepicker(i[0]) || (this._adjustInstDate(s, n + ('M' === r ? this._get(s, 'showCurrentAtPos')  : 0), r), this._updateDatepicker(s))
        },
        _gotoToday: function (t) {
            var n,
                r = e(t),
                i = this._getInst(r[0]);
            this._get(i, 'gotoCurrent') && i.currentDay ? (i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear)  : (n = new Date, i.selectedDay = n.getDate(), i.drawMonth = i.selectedMonth = n.getMonth(), i.drawYear = i.selectedYear = n.getFullYear()),
                this._notifyChange(i),
                this._adjustDate(r)
        },
        _selectMonthYear: function (t, n, r) {
            var i = e(t),
                s = this._getInst(i[0]);
            s['selected' + ('M' === r ? 'Month' : 'Year')] = s['draw' + ('M' === r ? 'Month' : 'Year')] = parseInt(n.options[n.selectedIndex].value, 10),
                this._notifyChange(s),
                this._adjustDate(i)
        },
        _selectDay: function (t, n, r, i) {
            var s,
                o = e(t);
            e(i).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (s = this._getInst(o[0]), s.selectedDay = s.currentDay = e('a', i).html(), s.selectedMonth = s.currentMonth = n, s.selectedYear = s.currentYear = r, this._selectDate(t, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear)))
        },
        _clearDate: function (t) {
            var n = e(t);
            this._selectDate(n, '')
        },
        _selectDate: function (t, n) {
            var r,
                i = e(t),
                s = this._getInst(i[0]);
            n = null != n ? n : this._formatDate(s),
            s.input && s.input.val(n),
                this._updateAlternate(s),
                r = this._get(s, 'onSelect'),
                r ? r.apply(s.input ? s.input[0] : null, [
                    n,
                    s
                ])  : s.input && s.input.trigger('change'),
                s.inline ? this._updateDatepicker(s)  : (this._hideDatepicker(), this._lastInput = s.input[0], 'object' != typeof s.input[0] && s.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function (t) {
            var n,
                r,
                i,
                s = this._get(t, 'altField');
            s && (n = this._get(t, 'altFormat') || this._get(t, 'dateFormat'), r = this._getDate(t), i = this.formatDate(n, r, this._getFormatConfig(t)), e(s).each(function () {
                e(this).val(i)
            }))
        },
        noWeekends: function (e) {
            var t = e.getDay();
            return [t > 0 && 6 > t,
                '']
        },
        iso8601Week: function (e) {
            var t,
                n = new Date(e.getTime());
            return n.setDate(n.getDate() + 4 - (n.getDay() || 7)),
                t = n.getTime(),
                n.setMonth(0),
                n.setDate(1),
            Math.floor(Math.round((t - n) / 86400000) / 7) + 1
        },
        parseDate: function (t, n, r) {
            if (null == t || null == n) throw 'Invalid arguments';
            if (n = 'object' == typeof n ? n.toString()  : n + '', '' === n) return null;
            var i,
                s,
                o,
                b,
                u = 0,
                a = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                f = 'string' != typeof a ? a : (new Date).getFullYear() % 100 + parseInt(a, 10),
                l = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort,
                c = (r ? r.dayNames : null) || this._defaults.dayNames,
                h = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort,
                p = (r ? r.monthNames : null) || this._defaults.monthNames,
                d = - 1,
                v = - 1,
                m = - 1,
                g = - 1,
                y = !1,
                w = function (e) {
                    var n = i + 1 < t.length && t.charAt(i + 1) === e;
                    return n && i++,
                        n
                },
                E = function (e) {
                    var t = w(e),
                        r = '@' === e ? 14 : '!' === e ? 20 : 'y' === e && t ? 4 : 'o' === e ? 3 : 2,
                        i = new RegExp('^\\d{1,' + r + '}'),
                        s = n.substring(u).match(i);
                    if (!s) throw 'Missing number at position ' + u;
                    return u += s[0].length,
                        parseInt(s[0], 10)
                },
                S = function (t, r, i) {
                    var s = - 1,
                        o = e.map(w(t) ? i : r, function (e, t) {
                            return [[t,
                                e]]
                        }).sort(function (e, t) {
                            return - (e[1].length - t[1].length)
                        });
                    if (e.each(o, function (e, t) {
                            var r = t[1];
                            return n.substr(u, r.length).toLowerCase() === r.toLowerCase() ? (s = t[0], u += r.length, !1)  : void 0
                        }), - 1 !== s) return s + 1;
                    throw 'Unknown name at position ' + u
                },
                x = function () {
                    if (n.charAt(u) !== t.charAt(i)) throw 'Unexpected literal at position ' + u;
                    u++
                };
            for (i = 0; i < t.length; i++) if (y) '\'' !== t.charAt(i) || w('\'') ? x()  : y = !1;
            else switch (t.charAt(i)) {
                    case 'd':
                        m = E('d');
                        break;
                    case 'D':
                        S('D', l, c);
                        break;
                    case 'o':
                        g = E('o');
                        break;
                    case 'm':
                        v = E('m');
                        break;
                    case 'M':
                        v = S('M', h, p);
                        break;
                    case 'y':
                        d = E('y');
                        break;
                    case '@':
                        b = new Date(E('@')),
                            d = b.getFullYear(),
                            v = b.getMonth() + 1,
                            m = b.getDate();
                        break;
                    case '!':
                        b = new Date((E('!') - this._ticksTo1970) / 10000),
                            d = b.getFullYear(),
                            v = b.getMonth() + 1,
                            m = b.getDate();
                        break;
                    case '\'':
                        w('\'') ? x()  : y = !0;
                        break;
                    default:
                        x()
                }
            if (u < n.length && (o = n.substr(u), !/^\s+/.test(o))) throw 'Extra/unparsed characters found in date: ' + o;
            if ( - 1 === d ? d = (new Date).getFullYear()  : 100 > d && (d += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (f >= d ? 0 : - 100)), g > - 1) for (v = 1, m = g; ; ) {
                if (s = this._getDaysInMonth(d, v - 1), s >= m) break;
                v++,
                    m -= s
            }
            if (b = this._daylightSavingAdjust(new Date(d, v - 1, m)), b.getFullYear() !== d || b.getMonth() + 1 !== v || b.getDate() !== m) throw 'Invalid date';
            return b
        },
        ATOM: 'yy-mm-dd',
        COOKIE: 'D, dd M yy',
        ISO_8601: 'yy-mm-dd',
        RFC_822: 'D, d M y',
        RFC_850: 'DD, dd-M-y',
        RFC_1036: 'D, d M y',
        RFC_1123: 'D, d M yy',
        RFC_2822: 'D, d M yy',
        RSS: 'D, d M y',
        TICKS: '!',
        TIMESTAMP: '@',
        W3C: 'yy-mm-dd',
        _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 10000000,
        formatDate: function (e, t, n) {
            if (!t) return '';
            var r,
                i = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                s = (n ? n.dayNames : null) || this._defaults.dayNames,
                o = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                u = (n ? n.monthNames : null) || this._defaults.monthNames,
                a = function (t) {
                    var n = r + 1 < e.length && e.charAt(r + 1) === t;
                    return n && r++,
                        n
                },
                f = function (e, t, n) {
                    var r = '' + t;
                    if (a(e)) for (; r.length < n; ) r = '0' + r;
                    return r
                },
                l = function (e, t, n, r) {
                    return a(e) ? r[t] : n[t]
                },
                c = '',
                h = !1;
            if (t) for (r = 0; r < e.length; r++) if (h) '\'' !== e.charAt(r) || a('\'') ? c += e.charAt(r)  : h = !1;
            else switch (e.charAt(r)) {
                    case 'd':
                        c += f('d', t.getDate(), 2);
                        break;
                    case 'D':
                        c += l('D', t.getDay(), i, s);
                        break;
                    case 'o':
                        c += f('o', Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                        break;
                    case 'm':
                        c += f('m', t.getMonth() + 1, 2);
                        break;
                    case 'M':
                        c += l('M', t.getMonth(), o, u);
                        break;
                    case 'y':
                        c += a('y') ? t.getFullYear()  : (t.getYear() % 100 < 10 ? '0' : '') + t.getYear() % 100;
                        break;
                    case '@':
                        c += t.getTime();
                        break;
                    case '!':
                        c += 10000 * t.getTime() + this._ticksTo1970;
                        break;
                    case '\'':
                        a('\'') ? c += '\'' : h = !0;
                        break;
                    default:
                        c += e.charAt(r)
                }
            return c
        },
        _possibleChars: function (e) {
            var t,
                n = '',
                r = !1,
                i = function (n) {
                    var r = t + 1 < e.length && e.charAt(t + 1) === n;
                    return r && t++,
                        r
                };
            for (t = 0; t < e.length; t++) if (r) '\'' !== e.charAt(t) || i('\'') ? n += e.charAt(t)  : r = !1;
            else switch (e.charAt(t)) {
                    case 'd':
                    case 'm':
                    case 'y':
                    case '@':
                        n += '0123456789';
                        break;
                    case 'D':
                    case 'M':
                        return null;
                    case '\'':
                        i('\'') ? n += '\'' : r = !0;
                        break;
                    default:
                        n += e.charAt(t)
                }
            return n
        },
        _get: function (e, n) {
            return e.settings[n] !== t ? e.settings[n] : this._defaults[n]
        },
        _setDateFromField: function (e, t) {
            if (e.input.val() !== e.lastVal) {
                var n = this._get(e, 'dateFormat'),
                    r = e.lastVal = e.input ? e.input.val()  : null,
                    i = this._getDefaultDate(e),
                    s = i,
                    o = this._getFormatConfig(e);
                try {
                    s = this.parseDate(n, r, o) || i
                } catch (u) {
                    r = t ? '' : r
                }
                e.selectedDay = s.getDate(),
                    e.drawMonth = e.selectedMonth = s.getMonth(),
                    e.drawYear = e.selectedYear = s.getFullYear(),
                    e.currentDay = r ? s.getDate()  : 0,
                    e.currentMonth = r ? s.getMonth()  : 0,
                    e.currentYear = r ? s.getFullYear()  : 0,
                    this._adjustInstDate(e)
            }
        },
        _getDefaultDate: function (e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, 'defaultDate'), new Date))
        },
        _determineDate: function (t, n, r) {
            var i = function (e) {
                    var t = new Date;
                    return t.setDate(t.getDate() + e),
                        t
                },
                s = function (n) {
                    try {
                        return e.datepicker.parseDate(e.datepicker._get(t, 'dateFormat'), n, e.datepicker._getFormatConfig(t))
                    } catch (r) {
                    }
                    for (var i = (n.toLowerCase().match(/^c/) ? e.datepicker._getDate(t)  : null) || new Date, s = i.getFullYear(), o = i.getMonth(), u = i.getDate(), a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, f = a.exec(n); f; ) {
                        switch (f[2] || 'd') {
                            case 'd':
                            case 'D':
                                u += parseInt(f[1], 10);
                                break;
                            case 'w':
                            case 'W':
                                u += 7 * parseInt(f[1], 10);
                                break;
                            case 'm':
                            case 'M':
                                o += parseInt(f[1], 10),
                                    u = Math.min(u, e.datepicker._getDaysInMonth(s, o));
                                break;
                            case 'y':
                            case 'Y':
                                s += parseInt(f[1], 10),
                                    u = Math.min(u, e.datepicker._getDaysInMonth(s, o))
                        }
                        f = a.exec(n)
                    }
                    return new Date(s, o, u)
                },
                o = null == n || '' === n ? r : 'string' == typeof n ? s(n)  : 'number' == typeof n ? isNaN(n) ? r : i(n)  : new Date(n.getTime());
            return o = o && 'Invalid Date' === o.toString() ? r : o,
            o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)),
                this._daylightSavingAdjust(o)
        },
        _daylightSavingAdjust: function (e) {
            return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e)  : null
        },
        _setDate: function (e, t, n) {
            var r = !t,
                i = e.selectedMonth,
                s = e.selectedYear,
                o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = o.getDate(),
                e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(),
                e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(),
            (i !== e.selectedMonth || s !== e.selectedYear) && !n && this._notifyChange(e),
                this._adjustInstDate(e),
            e.input && e.input.val(r ? '' : this._formatDate(e))
        },
        _getDate: function (e) {
            var t = !e.currentYear || e.input && '' === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return t
        },
        _attachHandlers: function (t) {
            var n = this._get(t, 'stepMonths'),
                i = '#' + t.id.replace(/\\\\/g, '\\');
            t.dpDiv.find('[data-handler]').map(function () {
                var t = {
                    prev: function () {
                        window['DP_jQuery_' + r].datepicker._adjustDate(i, - n, 'M')
                    },
                    next: function () {
                        window['DP_jQuery_' + r].datepicker._adjustDate(i, + n, 'M')
                    },
                    hide: function () {
                        window['DP_jQuery_' + r].datepicker._hideDatepicker()
                    },
                    today: function () {
                        window['DP_jQuery_' + r].datepicker._gotoToday(i)
                    },
                    selectDay: function () {
                        return window['DP_jQuery_' + r].datepicker._selectDay(i, + this.getAttribute('data-month'), + this.getAttribute('data-year'), this),
                            !1
                    },
                    selectMonth: function () {
                        return window['DP_jQuery_' + r].datepicker._selectMonthYear(i, this, 'M'),
                            !1
                    },
                    selectYear: function () {
                        return window['DP_jQuery_' + r].datepicker._selectMonthYear(i, this, 'Y'),
                            !1
                    }
                };
                e(this).bind(this.getAttribute('data-event'), t[this.getAttribute('data-handler')])
            })
        },
        _generateHTML: function (e) {
            var t,
                n,
                r,
                i,
                s,
                o,
                u,
                a,
                f,
                l,
                c,
                h,
                p,
                d,
                v,
                m,
                g,
                y,
                b,
                w,
                E,
                S,
                x,
                T,
                N,
                C,
                k,
                L,
                A,
                O,
                M,
                _,
                D,
                P,
                H,
                B,
                j,
                F,
                I,
                q = new Date,
                R = this._daylightSavingAdjust(new Date(q.getFullYear(), q.getMonth(), q.getDate())),
                U = this._get(e, 'isRTL'),
                z = this._get(e, 'showButtonPanel'),
                W = this._get(e, 'hideIfNoPrevNext'),
                X = this._get(e, 'navigationAsDateFormat'),
                V = this._getNumberOfMonths(e),
                $ = this._get(e, 'showCurrentAtPos'),
                J = this._get(e, 'stepMonths'),
                K = 1 !== V[0] || 1 !== V[1],
                Q = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay)  : new Date(9999, 9, 9)),
                G = this._getMinMaxDate(e, 'min'),
                Y = this._getMinMaxDate(e, 'max'),
                Z = e.drawMonth - $,
                et = e.drawYear;
            if (0 > Z && (Z += 12, et--), Y) for (t = this._daylightSavingAdjust(new Date(Y.getFullYear(), Y.getMonth() - V[0] * V[1] + 1, Y.getDate())), t = G && G > t ? G : t; this._daylightSavingAdjust(new Date(et, Z, 1)) > t; ) Z--,
            0 > Z && (Z = 11, et--);
            for (e.drawMonth = Z, e.drawYear = et, n = this._get(e, 'prevText'), n = X ? this.formatDate(n, this._daylightSavingAdjust(new Date(et, Z - J, 1)), this._getFormatConfig(e))  : n, r = this._canAdjustMonth(e, - 1, et, Z) ? '<a class=\'ui-datepicker-prev ui-corner-all\' data-handler=\'prev\' data-event=\'click\' title=\'' + n + '\'><span class=\'ui-icon ui-icon-circle-triangle-' + (U ? 'e' : 'w') + '\'>' + n + '</span></a>' : W ? '' : '<a class=\'ui-datepicker-prev ui-corner-all ui-state-disabled\' title=\'' + n + '\'><span class=\'ui-icon ui-icon-circle-triangle-' + (U ? 'e' : 'w') + '\'>' + n + '</span></a>', i = this._get(e, 'nextText'), i = X ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z + J, 1)), this._getFormatConfig(e))  : i, s = this._canAdjustMonth(e, 1, et, Z) ? '<a class=\'ui-datepicker-next ui-corner-all\' data-handler=\'next\' data-event=\'click\' title=\'' + i + '\'><span class=\'ui-icon ui-icon-circle-triangle-' + (U ? 'w' : 'e') + '\'>' + i + '</span></a>' : W ? '' : '<a class=\'ui-datepicker-next ui-corner-all ui-state-disabled\' title=\'' + i + '\'><span class=\'ui-icon ui-icon-circle-triangle-' + (U ? 'w' : 'e') + '\'>' + i + '</span></a>', o = this._get(e, 'currentText'), u = this._get(e, 'gotoCurrent') && e.currentDay ? Q : R, o = X ? this.formatDate(o, u, this._getFormatConfig(e))  : o, a = e.inline ? '' : '<button type=\'button\' class=\'ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all\' data-handler=\'hide\' data-event=\'click\'>' + this._get(e, 'closeText') + '</button>', f = z ? '<div class=\'ui-datepicker-buttonpane ui-widget-content\'>' + (U ? a : '') + (this._isInRange(e, u) ? '<button type=\'button\' class=\'ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all\' data-handler=\'today\' data-event=\'click\'>' + o + '</button>' : '') + (U ? '' : a) + '</div>' : '', l = parseInt(this._get(e, 'firstDay'), 10), l = isNaN(l) ? 0 : l, c = this._get(e, 'showWeek'), h = this._get(e, 'dayNames'), p = this._get(e, 'dayNamesMin'), d = this._get(e, 'monthNames'), v = this._get(e, 'monthNamesShort'), m = this._get(e, 'beforeShowDay'), g = this._get(e, 'showOtherMonths'), y = this._get(e, 'selectOtherMonths'), b = this._getDefaultDate(e), w = '', E, S = 0; S < V[0]; S++) {
                for (x = '', this.maxRows = 4, T = 0; T < V[1]; T++) {
                    if (N = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), C = ' ui-corner-all', k = '', K) {
                        if (k += '<div class=\'ui-datepicker-group', V[1] > 1) switch (T) {
                            case 0:
                                k += ' ui-datepicker-group-first',
                                    C = ' ui-corner-' + (U ? 'right' : 'left');
                                break;
                            case V[1] - 1:
                                k += ' ui-datepicker-group-last',
                                    C = ' ui-corner-' + (U ? 'left' : 'right');
                                break;
                            default:
                                k += ' ui-datepicker-group-middle',
                                    C = ''
                        }
                        k += '\'>'
                    }
                    for (k += '<div class=\'ui-datepicker-header ui-widget-header ui-helper-clearfix' + C + '\'>' + (/all|left/.test(C) && 0 === S ? U ? s : r : '') + (/all|right/.test(C) && 0 === S ? U ? r : s : '') + this._generateMonthYearHeader(e, Z, et, G, Y, S > 0 || T > 0, d, v) + '</div><table class=\'ui-datepicker-calendar\'><thead><tr>', L = c ? '<th class=\'ui-datepicker-week-col\'>' + this._get(e, 'weekHeader') + '</th>' : '', E = 0; 7 > E; E++) A = (E + l) % 7,
                        L += '<th' + ((E + l + 6) % 7 >= 5 ? ' class=\'ui-datepicker-week-end\'' : '') + '><span title=\'' + h[A] + '\'>' + p[A] + '</span></th>';
                    for (k += L + '</tr></thead><tbody>', O = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, O)), M = (this._getFirstDayOfMonth(et, Z) - l + 7) % 7, _ = Math.ceil((M + O) / 7), D = K && this.maxRows > _ ? this.maxRows : _, this.maxRows = D, P = this._daylightSavingAdjust(new Date(et, Z, 1 - M)), H = 0; D > H; H++) {
                        for (k += '<tr>', B = c ? '<td class=\'ui-datepicker-week-col\'>' + this._get(e, 'calculateWeek') (P) + '</td>' : '', E = 0; 7 > E; E++) j = m ? m.apply(e.input ? e.input[0] : null, [
                            P
                        ])  : [
                            !0,
                            ''
                        ],
                            F = P.getMonth() !== Z,
                            I = F && !y || !j[0] || G && G > P || Y && P > Y,
                            B += '<td class=\'' + ((E + l + 6) % 7 >= 5 ? ' ui-datepicker-week-end' : '') + (F ? ' ui-datepicker-other-month' : '') + (P.getTime() === N.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === P.getTime() && b.getTime() === N.getTime() ? ' ' + this._dayOverClass : '') + (I ? ' ' + this._unselectableClass + ' ui-state-disabled' : '') + (F && !g ? '' : ' ' + j[1] + (P.getTime() === Q.getTime() ? ' ' + this._currentClass : '') + (P.getTime() === R.getTime() ? ' ui-datepicker-today' : '')) + '\'' + (F && !g || !j[2] ? '' : ' title=\'' + j[2] + '\'') + (I ? '' : ' data-handler=\'selectDay\' data-event=\'click\' data-month=\'' + P.getMonth() + '\' data-year=\'' + P.getFullYear() + '\'') + '>' + (F && !g ? '&#xa0;' : I ? '<span class=\'ui-state-default\'>' + P.getDate() + '</span>' : '<a class=\'ui-state-default' + (P.getTime() === R.getTime() ? ' ui-state-highlight' : '') + (P.getTime() === Q.getTime() ? ' ui-state-active' : '') + (F ? ' ui-priority-secondary' : '') + '\' href=\'#\'>' + P.getDate() + '</a>') + '</td>',
                            P.setDate(P.getDate() + 1),
                            P = this._daylightSavingAdjust(P);
                        k += B + '</tr>'
                    }
                    Z++,
                    Z > 11 && (Z = 0, et++),
                        k += '</tbody></table>' + (K ? '</div>' + (V[0] > 0 && T === V[1] - 1 ? '<div class=\'ui-datepicker-row-break\'></div>' : '')  : ''),
                        x += k
                }
                w += x
            }
            return w += f,
                e._keyEvent = !1,
                w
        },
        _generateMonthYearHeader: function (e, t, n, r, i, s, o, u) {
            var a,
                f,
                l,
                c,
                h,
                p,
                d,
                v,
                m = this._get(e, 'changeMonth'),
                g = this._get(e, 'changeYear'),
                y = this._get(e, 'showMonthAfterYear'),
                b = '<div class=\'ui-datepicker-title\'>',
                w = '';
            if (s || !m) w += '<span class=\'ui-datepicker-month\'>' + o[t] + '</span>';
            else {
                for (a = r && r.getFullYear() === n, f = i && i.getFullYear() === n, w += '<select class=\'ui-datepicker-month\' data-handler=\'selectMonth\' data-event=\'change\'>', l = 0; 12 > l; l++) (!a || l >= r.getMonth()) && (!f || l <= i.getMonth()) && (w += '<option value=\'' + l + '\'' + (l === t ? ' selected=\'selected\'' : '') + '>' + u[l] + '</option>');
                w += '</select>'
            }
            if (y || (b += w + (!s && m && g ? '' : '&#xa0;')), !e.yearshtml) if (e.yearshtml = '', s || !g) b += '<span class=\'ui-datepicker-year\'>' + n + '</span>';
            else {
                for (c = this._get(e, 'yearRange').split(':'), h = (new Date).getFullYear(), p = function (e) {
                    var t = e.match(/c[+\-].*/) ? n + parseInt(e.substring(1), 10)  : e.match(/[+\-].*/) ? h + parseInt(e, 10)  : parseInt(e, 10);
                    return isNaN(t) ? h : t
                }, d = p(c[0]), v = Math.max(d, p(c[1] || '')), d = r ? Math.max(d, r.getFullYear())  : d, v = i ? Math.min(v, i.getFullYear())  : v, e.yearshtml += '<select class=\'ui-datepicker-year\' data-handler=\'selectYear\' data-event=\'change\'>'; v >= d; d++) e.yearshtml += '<option value=\'' + d + '\'' + (d === n ? ' selected=\'selected\'' : '') + '>' + d + '</option>';
                e.yearshtml += '</select>',
                    b += e.yearshtml,
                    e.yearshtml = null
            }
            return b += this._get(e, 'yearSuffix'),
            y && (b += (!s && m && g ? '' : '&#xa0;') + w),
                b += '</div>'
        },
        _adjustInstDate: function (e, t, n) {
            var r = e.drawYear + ('Y' === n ? t : 0),
                i = e.drawMonth + ('M' === n ? t : 0),
                s = Math.min(e.selectedDay, this._getDaysInMonth(r, i)) + ('D' === n ? t : 0),
                o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(r, i, s)));
            e.selectedDay = o.getDate(),
                e.drawMonth = e.selectedMonth = o.getMonth(),
                e.drawYear = e.selectedYear = o.getFullYear(),
            ('M' === n || 'Y' === n) && this._notifyChange(e)
        },
        _restrictMinMax: function (e, t) {
            var n = this._getMinMaxDate(e, 'min'),
                r = this._getMinMaxDate(e, 'max'),
                i = n && n > t ? n : t;
            return r && i > r ? r : i
        },
        _notifyChange: function (e) {
            var t = this._get(e, 'onChangeMonthYear');
            t && t.apply(e.input ? e.input[0] : null, [
                e.selectedYear,
                e.selectedMonth + 1,
                e
            ])
        },
        _getNumberOfMonths: function (e) {
            var t = this._get(e, 'numberOfMonths');
            return null == t ? [
                1,
                1
            ] : 'number' == typeof t ? [
                1,
                t
            ] : t
        },
        _getMinMaxDate: function (e, t) {
            return this._determineDate(e, this._get(e, t + 'Date'), null)
        },
        _getDaysInMonth: function (e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function (e, t) {
            return new Date(e, t, 1).getDay()
        },
        _canAdjustMonth: function (e, t, n, r) {
            var i = this._getNumberOfMonths(e),
                s = this._daylightSavingAdjust(new Date(n, r + (0 > t ? t : i[0] * i[1]), 1));
            return 0 > t && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())),
                this._isInRange(e, s)
        },
        _isInRange: function (e, t) {
            var n,
                r,
                i = this._getMinMaxDate(e, 'min'),
                s = this._getMinMaxDate(e, 'max'),
                o = null,
                u = null,
                a = this._get(e, 'yearRange');
            return a && (n = a.split(':'), r = (new Date).getFullYear(), o = parseInt(n[0], 10) + r, u = parseInt(n[1], 10) + r),
            (!i || t.getTime() >= i.getTime()) && (!s || t.getTime() <= s.getTime()) && (!o || t.getFullYear() >= o) && (!u || t.getFullYear() <= u)
        },
        _getFormatConfig: function (e) {
            var t = this._get(e, 'shortYearCutoff');
            return t = 'string' != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10),
            {
                shortYearCutoff: t,
                dayNamesShort: this._get(e, 'dayNamesShort'),
                dayNames: this._get(e, 'dayNames'),
                monthNamesShort: this._get(e, 'monthNamesShort'),
                monthNames: this._get(e, 'monthNames')
            }
        },
        _formatDate: function (e, t, n, r) {
            t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
            var i = t ? 'object' == typeof t ? t : this._daylightSavingAdjust(new Date(r, n, t))  : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return this.formatDate(this._get(e, 'dateFormat'), i, this._getFormatConfig(e))
        }
    }),
        e.fn.datepicker = function (t) {
            if (!this.length) return this;
            e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0),
            0 === e('#' + e.datepicker._mainDivId).length && e('body').append(e.datepicker.dpDiv);
            var n = Array.prototype.slice.call(arguments, 1);
            return 'string' != typeof t || 'isDisabled' !== t && 'getDate' !== t && 'widget' !== t ? 'option' === t && 2 === arguments.length && 'string' == typeof arguments[1] ? e.datepicker['_' + t + 'Datepicker'].apply(e.datepicker, [
                this[0]
            ].concat(n))  : this.each(function () {
                'string' == typeof t ? e.datepicker['_' + t + 'Datepicker'].apply(e.datepicker, [
                    this
                ].concat(n))  : e.datepicker._attachDatepicker(this, t)
            })  : e.datepicker['_' + t + 'Datepicker'].apply(e.datepicker, [
                this[0]
            ].concat(n))
        },
        e.datepicker = new s,
        e.datepicker.initialized = !1,
        e.datepicker.uuid = (new Date).getTime(),
        e.datepicker.version = '1.10.0',
        window['DP_jQuery_' + r] = e
}(jQuery),
    function (e) {
        var n = {
                buttons: !0,
                height: !0,
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0,
                width: !0
            },
            r = {
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0
            };
        e.widget('ui.dialog', {
            version: '1.10.0',
            options: {
                appendTo: 'body',
                autoOpen: !0,
                buttons: [
                ],
                closeOnEscape: !0,
                closeText: 'close',
                dialogClass: '',
                draggable: !0,
                hide: null,
                height: 'auto',
                maxHeight: null,
                maxWidth: null,
                minHeight: 150,
                minWidth: 150,
                modal: !1,
                position: {
                    my: 'center',
                    at: 'center',
                    of: window,
                    collision: 'fit',
                    using: function (t) {
                        var n = e(this).css(t).offset().top;
                        0 > n && e(this).css('top', t.top - n)
                    }
                },
                resizable: !0,
                show: null,
                title: null,
                width: 300,
                beforeClose: null,
                close: null,
                drag: null,
                dragStart: null,
                dragStop: null,
                focus: null,
                open: null,
                resize: null,
                resizeStart: null,
                resizeStop: null
            },
            _create: function () {
                this.originalCss = {
                    display: this.element[0].style.display,
                    width: this.element[0].style.width,
                    minHeight: this.element[0].style.minHeight,
                    maxHeight: this.element[0].style.maxHeight,
                    height: this.element[0].style.height
                },
                    this.originalPosition = {
                        parent: this.element.parent(),
                        index: this.element.parent().children().index(this.element)
                    },
                    this.originalTitle = this.element.attr('title'),
                    this.options.title = this.options.title || this.originalTitle,
                    this._createWrapper(),
                    this.element.show().removeAttr('title').addClass('ui-dialog-content ui-widget-content').appendTo(this.uiDialog),
                    this._createTitlebar(),
                    this._createButtonPane(),
                this.options.draggable && e.fn.draggable && this._makeDraggable(),
                this.options.resizable && e.fn.resizable && this._makeResizable(),
                    this._isOpen = !1
            },
            _init: function () {
                this.options.autoOpen && this.open()
            },
            _appendTo: function () {
                var t = this.options.appendTo;
                return t && (t.jquery || t.nodeType) ? e(t)  : this.document.find(t || 'body').eq(0)
            },
            _destroy: function () {
                var e,
                    t = this.originalPosition;
                this._destroyOverlay(),
                    this.element.removeUniqueId().removeClass('ui-dialog-content ui-widget-content').css(this.originalCss).detach(),
                    this.uiDialog.stop(!0, !0).remove(),
                this.originalTitle && this.element.attr('title', this.originalTitle),
                    e = t.parent.children().eq(t.index),
                    e.length && e[0] !== this.element[0] ? e.before(this.element)  : t.parent.append(this.element)
            },
            widget: function () {
                return this.uiDialog
            },
            disable: e.noop,
            enable: e.noop,
            close: function (t) {
                var n = this;
                this._isOpen && this._trigger('beforeClose', t) !== !1 && (this._isOpen = !1, this._destroyOverlay(), this.opener.filter(':focusable').focus().length || e(this.document[0].activeElement).blur(), this._hide(this.uiDialog, this.options.hide, function () {
                    n._trigger('close', t)
                }))
            },
            isOpen: function () {
                return this._isOpen
            },
            moveToTop: function () {
                this._moveToTop()
            },
            _moveToTop: function (e, t) {
                var n = !!this.uiDialog.nextAll(':visible').insertBefore(this.uiDialog).length;
                return n && !t && this._trigger('focus', e),
                    n
            },
            open: function () {
                return this._isOpen ? void (this._moveToTop() && this._focusTabbable())  : (this.opener = e(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show), this._focusTabbable(), this._isOpen = !0, this._trigger('open'), this._trigger('focus'), void 0)
            },
            _focusTabbable: function () {
                var e = this.element.find('[autofocus]');
                e.length || (e = this.element.find(':tabbable')),
                e.length || (e = this.uiDialogButtonPane.find(':tabbable')),
                e.length || (e = this.uiDialogTitlebarClose.filter(':tabbable')),
                e.length || (e = this.uiDialog),
                    e.eq(0).focus()
            },
            _keepFocus: function (t) {
                function n() {
                    var t = this.document[0].activeElement,
                        n = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t);
                    n || this._focusTabbable()
                }
                t.preventDefault(),
                    n.call(this),
                    this._delay(n)
            },
            _createWrapper: function () {
                this.uiDialog = e('<div>').addClass('ui-dialog ui-widget ui-widget-content ui-corner-all ui-front ' + this.options.dialogClass).hide().attr({
                    tabIndex: - 1,
                    role: 'dialog'
                }).appendTo(this._appendTo()),
                    this._on(this.uiDialog, {
                        keydown: function (t) {
                            if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE) return t.preventDefault(),
                                void this.close(t);
                            if (t.keyCode === e.ui.keyCode.TAB) {
                                var n = this.uiDialog.find(':tabbable'),
                                    r = n.filter(':first'),
                                    i = n.filter(':last');
                                t.target !== i[0] && t.target !== this.uiDialog[0] || t.shiftKey ? (t.target === r[0] || t.target === this.uiDialog[0]) && t.shiftKey && (i.focus(1), t.preventDefault())  : (r.focus(1), t.preventDefault())
                            }
                        },
                        mousedown: function (e) {
                            this._moveToTop(e) && this._focusTabbable()
                        }
                    }),
                this.element.find('[aria-describedby]').length || this.uiDialog.attr({
                    'aria-describedby': this.element.uniqueId().attr('id')
                })
            },
            _createTitlebar: function () {
                var t;
                this.uiDialogTitlebar = e('<div>').addClass('ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix').prependTo(this.uiDialog),
                    this._on(this.uiDialogTitlebar, {
                        mousedown: function (t) {
                            e(t.target).closest('.ui-dialog-titlebar-close') || this.uiDialog.focus()
                        }
                    }),
                    this.uiDialogTitlebarClose = e('<button></button>').button({
                        label: this.options.closeText,
                        icons: {
                            primary: 'ui-icon-closethick'
                        },
                        text: !1
                    }).addClass('ui-dialog-titlebar-close').appendTo(this.uiDialogTitlebar),
                    this._on(this.uiDialogTitlebarClose, {
                        click: function (e) {
                            e.preventDefault(),
                                this.close(e)
                        }
                    }),
                    t = e('<span>').uniqueId().addClass('ui-dialog-title').prependTo(this.uiDialogTitlebar),
                    this._title(t),
                    this.uiDialog.attr({
                        'aria-labelledby': t.attr('id')
                    })
            },
            _title: function (e) {
                this.options.title || e.html('&#160;'),
                    e.text(this.options.title)
            },
            _createButtonPane: function () {
                this.uiDialogButtonPane = e('<div>').addClass('ui-dialog-buttonpane ui-widget-content ui-helper-clearfix'),
                    this.uiButtonSet = e('<div>').addClass('ui-dialog-buttonset').appendTo(this.uiDialogButtonPane),
                    this._createButtons()
            },
            _createButtons: function () {
                var t = this,
                    n = this.options.buttons;
                return this.uiDialogButtonPane.remove(),
                    this.uiButtonSet.empty(),
                    e.isEmptyObject(n) ? void this.uiDialog.removeClass('ui-dialog-buttons')  : (e.each(n, function (n, r) {
                        var i,
                            s;
                        r = e.isFunction(r) ? {
                            click: r,
                            text: n
                        }
                            : r,
                            r = e.extend({
                                type: 'button'
                            }, r),
                            i = r.click,
                            r.click = function () {
                                i.apply(t.element[0], arguments)
                            },
                            s = {
                                icons: r.icons,
                                text: r.showText
                            },
                            delete r.icons,
                            delete r.showText,
                            e('<button></button>', r).button(s).appendTo(t.uiButtonSet)
                    }), this.uiDialog.addClass('ui-dialog-buttons'), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0)
            },
            _makeDraggable: function () {
                function r(e) {
                    return {
                        position: e.position,
                        offset: e.offset
                    }
                }
                var t = this,
                    n = this.options;
                this.uiDialog.draggable({
                    cancel: '.ui-dialog-content, .ui-dialog-titlebar-close',
                    handle: '.ui-dialog-titlebar',
                    containment: 'document',
                    start: function (n, i) {
                        e(this).addClass('ui-dialog-dragging'),
                            t._trigger('dragStart', n, r(i))
                    },
                    drag: function (e, n) {
                        t._trigger('drag', e, r(n))
                    },
                    stop: function (i, s) {
                        n.position = [
                            s.position.left - t.document.scrollLeft(),
                            s.position.top - t.document.scrollTop()
                        ],
                            e(this).removeClass('ui-dialog-dragging'),
                            t._trigger('dragStop', i, r(s))
                    }
                })
            },
            _makeResizable: function () {
                function o(e) {
                    return {
                        originalPosition: e.originalPosition,
                        originalSize: e.originalSize,
                        position: e.position,
                        size: e.size
                    }
                }
                var t = this,
                    n = this.options,
                    r = n.resizable,
                    i = this.uiDialog.css('position'),
                    s = 'string' == typeof r ? r : 'n,e,s,w,se,sw,ne,nw';
                this.uiDialog.resizable({
                    cancel: '.ui-dialog-content',
                    containment: 'document',
                    alsoResize: this.element,
                    maxWidth: n.maxWidth,
                    maxHeight: n.maxHeight,
                    minWidth: n.minWidth,
                    minHeight: this._minHeight(),
                    handles: s,
                    start: function (n, r) {
                        e(this).addClass('ui-dialog-resizing'),
                            t._trigger('resizeStart', n, o(r))
                    },
                    resize: function (e, n) {
                        t._trigger('resize', e, o(n))
                    },
                    stop: function (r, i) {
                        n.height = e(this).height(),
                            n.width = e(this).width(),
                            e(this).removeClass('ui-dialog-resizing'),
                            t._trigger('resizeStop', r, o(i))
                    }
                }).css('position', i)
            },
            _minHeight: function () {
                var e = this.options;
                return 'auto' === e.height ? e.minHeight : Math.min(e.minHeight, e.height)
            },
            _position: function () {
                var e = this.uiDialog.is(':visible');
                e || this.uiDialog.show(),
                    this.uiDialog.position(this.options.position),
                e || this.uiDialog.hide()
            },
            _setOptions: function (t) {
                var i = this,
                    s = !1,
                    o = {
                    };
                e.each(t, function (e, t) {
                    i._setOption(e, t),
                    e in n && (s = !0),
                    e in r && (o[e] = t)
                }),
                s && (this._size(), this._position()),
                this.uiDialog.is(':data(ui-resizable)') && this.uiDialog.resizable('option', o)
            },
            _setOption: function (e, t) {
                var n,
                    r,
                    i = this.uiDialog;
                'dialogClass' === e && i.removeClass(this.options.dialogClass).addClass(t),
                'disabled' !== e && (this._super(e, t), 'appendTo' === e && this.uiDialog.appendTo(this._appendTo()), 'buttons' === e && this._createButtons(), 'closeText' === e && this.uiDialogTitlebarClose.button({
                    label: '' + t
                }), 'draggable' === e && (n = i.is(':data(ui-draggable)'), n && !t && i.draggable('destroy'), !n && t && this._makeDraggable()), 'position' === e && this._position(), 'resizable' === e && (r = i.is(':data(ui-resizable)'), r && !t && i.resizable('destroy'), r && 'string' == typeof t && i.resizable('option', 'handles', t), !r && t !== !1 && this._makeResizable()), 'title' === e && this._title(this.uiDialogTitlebar.find('.ui-dialog-title')))
            },
            _size: function () {
                var e,
                    t,
                    n,
                    r = this.options;
                this.element.show().css({
                    width: 'auto',
                    minHeight: 0,
                    maxHeight: 'none',
                    height: 0
                }),
                r.minWidth > r.width && (r.width = r.minWidth),
                    e = this.uiDialog.css({
                        height: 'auto',
                        width: r.width
                    }).outerHeight(),
                    t = Math.max(0, r.minHeight - e),
                    n = 'number' == typeof r.maxHeight ? Math.max(0, r.maxHeight - e)  : 'none',
                    'auto' === r.height ? this.element.css({
                        minHeight: t,
                        maxHeight: n,
                        height: 'auto'
                    })  : this.element.height(Math.max(0, r.height - e)),
                this.uiDialog.is(':data(ui-resizable)') && this.uiDialog.resizable('option', 'minHeight', this._minHeight())
            },
            _createOverlay: function () {
                this.options.modal && (e.ui.dialog.overlayInstances || this._delay(function () {
                    e.ui.dialog.overlayInstances && this._on(this.document, {
                        focusin: function (t) {
                            e(t.target).closest('.ui-dialog').length || (t.preventDefault(), e('.ui-dialog:visible:last .ui-dialog-content').data('ui-dialog')._focusTabbable())
                        }
                    })
                }), this.overlay = e('<div>').addClass('ui-widget-overlay ui-front').appendTo(this.document[0].body), this._on(this.overlay, {
                    mousedown: '_keepFocus'
                }), e.ui.dialog.overlayInstances++)
            },
            _destroyOverlay: function () {
                this.options.modal && (e.ui.dialog.overlayInstances--, e.ui.dialog.overlayInstances || this._off(this.document, 'focusin'), this.overlay.remove())
            }
        }),
            e.ui.dialog.overlayInstances = 0,
        e.uiBackCompat !== !1 && e.widget('ui.dialog', e.ui.dialog, {
            _position: function () {
                var i,
                    t = this.options.position,
                    n = [
                    ],
                    r = [
                        0,
                        0
                    ];
                t ? (('string' == typeof t || 'object' == typeof t && '0' in t) && (n = t.split ? t.split(' ')  : [
                    t[0],
                    t[1]
                ], 1 === n.length && (n[1] = n[0]), e.each(['left',
                    'top'], function (e, t) {
                    + n[e] === n[e] && (r[e] = n[e], n[e] = t)
                }), t = {
                    my: n[0] + (r[0] < 0 ? r[0] : '+' + r[0]) + ' ' + n[1] + (r[1] < 0 ? r[1] : '+' + r[1]),
                    at: n.join(' ')
                }), t = e.extend({
                }, e.ui.dialog.prototype.options.position, t))  : t = e.ui.dialog.prototype.options.position,
                    i = this.uiDialog.is(':visible'),
                i || this.uiDialog.show(),
                    this.uiDialog.position(t),
                i || this.uiDialog.hide()
            }
        })
    }(jQuery),
    function (e) {
        e.widget('ui.menu', {
            version: '1.10.0',
            defaultElement: '<ul>',
            delay: 300,
            options: {
                icons: {
                    submenu: 'ui-icon-carat-1-e'
                },
                menus: 'ul',
                position: {
                    my: 'left top',
                    at: 'right top'
                },
                role: 'menu',
                blur: null,
                focus: null,
                select: null
            },
            _create: function () {
                this.activeMenu = this.element,
                    this.mouseHandled = !1,
                    this.element.uniqueId().addClass('ui-menu ui-widget ui-widget-content ui-corner-all').toggleClass('ui-menu-icons', !!this.element.find('.ui-icon').length).attr({
                        role: this.options.role,
                        tabIndex: 0
                    }).bind('click' + this.eventNamespace, e.proxy(function (e) {
                        this.options.disabled && e.preventDefault()
                    }, this)),
                this.options.disabled && this.element.addClass('ui-state-disabled').attr('aria-disabled', 'true'),
                    this._on({
                        'mousedown .ui-menu-item > a': function (e) {
                            e.preventDefault()
                        },
                        'click .ui-state-disabled > a': function (e) {
                            e.preventDefault()
                        },
                        'click .ui-menu-item:has(a)': function (t) {
                            var n = e(t.target).closest('.ui-menu-item');
                            !this.mouseHandled && n.not('.ui-state-disabled').length && (this.mouseHandled = !0, this.select(t), n.has('.ui-menu').length ? this.expand(t)  : this.element.is(':focus') || (this.element.trigger('focus', [
                                !0
                            ]), this.active && 1 === this.active.parents('.ui-menu').length && clearTimeout(this.timer)))
                        },
                        'mouseenter .ui-menu-item': function (t) {
                            var n = e(t.currentTarget);
                            n.siblings().children('.ui-state-active').removeClass('ui-state-active'),
                                this.focus(t, n)
                        },
                        mouseleave: 'collapseAll',
                        'mouseleave .ui-menu': 'collapseAll',
                        focus: function (e, t) {
                            var n = this.active || this.element.children('.ui-menu-item').eq(0);
                            t || this.focus(e, n)
                        },
                        blur: function (t) {
                            this._delay(function () {
                                e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                            })
                        },
                        keydown: '_keydown'
                    }),
                    this.refresh(),
                    this._on(this.document, {
                        click: function (t) {
                            e(t.target).closest('.ui-menu').length || this.collapseAll(t),
                                this.mouseHandled = !1
                        }
                    })
            },
            _destroy: function () {
                this.element.removeAttr('aria-activedescendant').find('.ui-menu').addBack().removeClass('ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons').removeAttr('role').removeAttr('tabIndex').removeAttr('aria-labelledby').removeAttr('aria-expanded').removeAttr('aria-hidden').removeAttr('aria-disabled').removeUniqueId().show(),
                    this.element.find('.ui-menu-item').removeClass('ui-menu-item').removeAttr('role').removeAttr('aria-disabled').children('a').removeUniqueId().removeClass('ui-corner-all ui-state-hover').removeAttr('tabIndex').removeAttr('role').removeAttr('aria-haspopup').children().each(function () {
                        var t = e(this);
                        t.data('ui-menu-submenu-carat') && t.remove()
                    }),
                    this.element.find('.ui-menu-divider').removeClass('ui-menu-divider ui-widget-content')
            },
            _keydown: function (t) {
                function a(e) {
                    return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
                }
                var n,
                    r,
                    i,
                    s,
                    o,
                    u = !0;
                switch (t.keyCode) {
                    case e.ui.keyCode.PAGE_UP:
                        this.previousPage(t);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        this.nextPage(t);
                        break;
                    case e.ui.keyCode.HOME:
                        this._move('first', 'first', t);
                        break;
                    case e.ui.keyCode.END:
                        this._move('last', 'last', t);
                        break;
                    case e.ui.keyCode.UP:
                        this.previous(t);
                        break;
                    case e.ui.keyCode.DOWN:
                        this.next(t);
                        break;
                    case e.ui.keyCode.LEFT:
                        this.collapse(t);
                        break;
                    case e.ui.keyCode.RIGHT:
                        this.active && !this.active.is('.ui-state-disabled') && this.expand(t);
                        break;
                    case e.ui.keyCode.ENTER:
                    case e.ui.keyCode.SPACE:
                        this._activate(t);
                        break;
                    case e.ui.keyCode.ESCAPE:
                        this.collapse(t);
                        break;
                    default:
                        u = !1,
                            r = this.previousFilter || '',
                            i = String.fromCharCode(t.keyCode),
                            s = !1,
                            clearTimeout(this.filterTimer),
                            i === r ? s = !0 : i = r + i,
                            o = new RegExp('^' + a(i), 'i'),
                            n = this.activeMenu.children('.ui-menu-item').filter(function () {
                                return o.test(e(this).children('a').text())
                            }),
                            n = s && - 1 !== n.index(this.active.next()) ? this.active.nextAll('.ui-menu-item')  : n,
                        n.length || (i = String.fromCharCode(t.keyCode), o = new RegExp('^' + a(i), 'i'), n = this.activeMenu.children('.ui-menu-item').filter(function () {
                            return o.test(e(this).children('a').text())
                        })),
                            n.length ? (this.focus(t, n), n.length > 1 ? (this.previousFilter = i, this.filterTimer = this._delay(function () {
                                delete this.previousFilter
                            }, 1000))  : delete this.previousFilter)  : delete this.previousFilter
                }
                u && t.preventDefault()
            },
            _activate: function (e) {
                this.active.is('.ui-state-disabled') || (this.active.children('a[aria-haspopup=\'true\']').length ? this.expand(e)  : this.select(e))
            },
            refresh: function () {
                var t,
                    n = this.options.icons.submenu,
                    r = this.element.find(this.options.menus);
                r.filter(':not(.ui-menu)').addClass('ui-menu ui-widget ui-widget-content ui-corner-all').hide().attr({
                    role: this.options.role,
                    'aria-hidden': 'true',
                    'aria-expanded': 'false'
                }).each(function () {
                    var t = e(this),
                        r = t.prev('a'),
                        i = e('<span>').addClass('ui-menu-icon ui-icon ' + n).data('ui-menu-submenu-carat', !0);
                    r.attr('aria-haspopup', 'true').prepend(i),
                        t.attr('aria-labelledby', r.attr('id'))
                }),
                    t = r.add(this.element),
                    t.children(':not(.ui-menu-item):has(a)').addClass('ui-menu-item').attr('role', 'presentation').children('a').uniqueId().addClass('ui-corner-all').attr({
                        tabIndex: - 1,
                        role: this._itemRole()
                    }),
                    t.children(':not(.ui-menu-item)').each(function () {
                        var t = e(this);
                        /[^\-���C\s]/.test(t.text()) || t.addClass('ui-widget-content ui-menu-divider')
                    }),
                    t.children('.ui-state-disabled').attr('aria-disabled', 'true'),
                this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function () {
                return {
                    menu: 'menuitem',
                    listbox: 'option'
                }
                    [
                    this.options.role
                    ]
            },
            _setOption: function (e, t) {
                'icons' === e && this.element.find('.ui-menu-icon').removeClass(this.options.icons.submenu).addClass(t.submenu),
                    this._super(e, t)
            },
            focus: function (e, t) {
                var n,
                    r;
                this.blur(e, e && 'focus' === e.type),
                    this._scrollIntoView(t),
                    this.active = t.first(),
                    r = this.active.children('a').addClass('ui-state-focus'),
                this.options.role && this.element.attr('aria-activedescendant', r.attr('id')),
                    this.active.parent().closest('.ui-menu-item').children('a:first').addClass('ui-state-active'),
                    e && 'keydown' === e.type ? this._close()  : this.timer = this._delay(function () {
                        this._close()
                    }, this.delay),
                    n = t.children('.ui-menu'),
                n.length && /^mouse/.test(e.type) && this._startOpening(n),
                    this.activeMenu = t.parent(),
                    this._trigger('focus', e, {
                        item: t
                    })
            },
            _scrollIntoView: function (t) {
                var n,
                    r,
                    i,
                    s,
                    o,
                    u;
                this._hasScroll() && (n = parseFloat(e.css(this.activeMenu[0], 'borderTopWidth')) || 0, r = parseFloat(e.css(this.activeMenu[0], 'paddingTop')) || 0, i = t.offset().top - this.activeMenu.offset().top - n - r, s = this.activeMenu.scrollTop(), o = this.activeMenu.height(), u = t.height(), 0 > i ? this.activeMenu.scrollTop(s + i)  : i + u > o && this.activeMenu.scrollTop(s + i - o + u))
            },
            blur: function (e, t) {
                t || clearTimeout(this.timer),
                this.active && (this.active.children('a').removeClass('ui-state-focus'), this.active = null, this._trigger('blur', e, {
                    item: this.active
                }))
            },
            _startOpening: function (e) {
                clearTimeout(this.timer),
                'true' === e.attr('aria-hidden') && (this.timer = this._delay(function () {
                    this._close(),
                        this._open(e)
                }, this.delay))
            },
            _open: function (t) {
                var n = e.extend({
                    of: this.active
                }, this.options.position);
                clearTimeout(this.timer),
                    this.element.find('.ui-menu').not(t.parents('.ui-menu')).hide().attr('aria-hidden', 'true'),
                    t.show().removeAttr('aria-hidden').attr('aria-expanded', 'true').position(n)
            },
            collapseAll: function (t, n) {
                clearTimeout(this.timer),
                    this.timer = this._delay(function () {
                        var r = n ? this.element : e(t && t.target).closest(this.element.find('.ui-menu'));
                        r.length || (r = this.element),
                            this._close(r),
                            this.blur(t),
                            this.activeMenu = r
                    }, this.delay)
            },
            _close: function (e) {
                e || (e = this.active ? this.active.parent()  : this.element),
                    e.find('.ui-menu').hide().attr('aria-hidden', 'true').attr('aria-expanded', 'false').end().find('a.ui-state-active').removeClass('ui-state-active')
            },
            collapse: function (e) {
                var t = this.active && this.active.parent().closest('.ui-menu-item', this.element);
                t && t.length && (this._close(), this.focus(e, t))
            },
            expand: function (e) {
                var t = this.active && this.active.children('.ui-menu ').children('.ui-menu-item').first();
                t && t.length && (this._open(t.parent()), this._delay(function () {
                    this.focus(e, t)
                }))
            },
            next: function (e) {
                this._move('next', 'first', e)
            },
            previous: function (e) {
                this._move('prev', 'last', e)
            },
            isFirstItem: function () {
                return this.active && !this.active.prevAll('.ui-menu-item').length
            },
            isLastItem: function () {
                return this.active && !this.active.nextAll('.ui-menu-item').length
            },
            _move: function (e, t, n) {
                var r;
                this.active && (r = 'first' === e || 'last' === e ? this.active['first' === e ? 'prevAll' : 'nextAll']('.ui-menu-item').eq( - 1)  : this.active[e + 'All']('.ui-menu-item').eq(0)),
                r && r.length && this.active || (r = this.activeMenu.children('.ui-menu-item') [t]()),
                    this.focus(n, r)
            },
            nextPage: function (t) {
                var n,
                    r,
                    i;
                return this.active ? void (this.isLastItem() || (this._hasScroll() ? (r = this.active.offset().top, i = this.element.height(), this.active.nextAll('.ui-menu-item').each(function () {
                    return n = e(this),
                    n.offset().top - r - i < 0
                }), this.focus(t, n))  : this.focus(t, this.activeMenu.children('.ui-menu-item') [this.active ? 'last' : 'first']())))  : void this.next(t)
            },
            previousPage: function (t) {
                var n,
                    r,
                    i;
                return this.active ? void (this.isFirstItem() || (this._hasScroll() ? (r = this.active.offset().top, i = this.element.height(), this.active.prevAll('.ui-menu-item').each(function () {
                    return n = e(this),
                    n.offset().top - r + i > 0
                }), this.focus(t, n))  : this.focus(t, this.activeMenu.children('.ui-menu-item').first())))  : void this.next(t)
            },
            _hasScroll: function () {
                return this.element.outerHeight() < this.element.prop('scrollHeight')
            },
            select: function (t) {
                this.active = this.active || e(t.target).closest('.ui-menu-item');
                var n = {
                    item: this.active
                };
                this.active.has('.ui-menu').length || this.collapseAll(t, !0),
                    this._trigger('select', t, n)
            }
        })
    }(jQuery),
    function (e, t) {
        e.widget('ui.progressbar', {
            version: '1.10.0',
            options: {
                max: 100,
                value: 0,
                change: null,
                complete: null
            },
            min: 0,
            _create: function () {
                this.oldValue = this.options.value = this._constrainedValue(),
                    this.element.addClass('ui-progressbar ui-widget ui-widget-content ui-corner-all').attr({
                        role: 'progressbar',
                        'aria-valuemin': this.min
                    }),
                    this.valueDiv = e('<div class=\'ui-progressbar-value ui-widget-header ui-corner-left\'></div>').appendTo(this.element),
                    this._refreshValue()
            },
            _destroy: function () {
                this.element.removeClass('ui-progressbar ui-widget ui-widget-content ui-corner-all').removeAttr('role').removeAttr('aria-valuemin').removeAttr('aria-valuemax').removeAttr('aria-valuenow'),
                    this.valueDiv.remove()
            },
            value: function (e) {
                return e === t ? this.options.value : (this.options.value = this._constrainedValue(e), void this._refreshValue())
            },
            _constrainedValue: function (e) {
                return e === t && (e = this.options.value),
                    this.indeterminate = e === !1,
                'number' != typeof e && (e = 0),
                    this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, e))
            },
            _setOptions: function (e) {
                var t = e.value;
                delete e.value,
                    this._super(e),
                    this.options.value = this._constrainedValue(t),
                    this._refreshValue()
            },
            _setOption: function (e, t) {
                'max' === e && (t = Math.max(this.min, t)),
                    this._super(e, t)
            },
            _percentage: function () {
                return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
            },
            _refreshValue: function () {
                var t = this.options.value,
                    n = this._percentage();
                this.valueDiv.toggle(this.indeterminate || t > this.min).toggleClass('ui-corner-right', t === this.options.max).width(n.toFixed(0) + '%'),
                    this.element.toggleClass('ui-progressbar-indeterminate', this.indeterminate),
                    this.indeterminate ? (this.element.removeAttr('aria-valuenow'), this.overlayDiv || (this.overlayDiv = e('<div class=\'ui-progressbar-overlay\'></div>').appendTo(this.valueDiv)))  : (this.element.attr({
                        'aria-valuemax': this.options.max,
                        'aria-valuenow': t
                    }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)),
                this.oldValue !== t && (this.oldValue = t, this._trigger('change')),
                t === this.options.max && this._trigger('complete')
            }
        })
    }(jQuery),
    function (e) {
        var n = 5;
        e.widget('ui.slider', e.ui.mouse, {
            version: '1.10.0',
            widgetEventPrefix: 'slide',
            options: {
                animate: !1,
                distance: 0,
                max: 100,
                min: 0,
                orientation: 'horizontal',
                range: !1,
                step: 1,
                value: 0,
                values: null,
                change: null,
                slide: null,
                start: null,
                stop: null
            },
            _create: function () {
                var t,
                    n,
                    r = this.options,
                    i = this.element.find('.ui-slider-handle').addClass('ui-state-default ui-corner-all'),
                    s = '<a class=\'ui-slider-handle ui-state-default ui-corner-all\' href=\'#\'></a>',
                    o = [
                    ];
                for (this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass('ui-slider ui-slider-' + this.orientation + ' ui-widget ui-widget-content ui-corner-all'), this.range = e([]), r.range && (r.range === !0 && (r.values ? r.values.length && 2 !== r.values.length ? r.values = [
                    r.values[0],
                    r.values[0]
                ] : e.isArray(r.values) && (r.values = r.values.slice(0))  : r.values = [
                    this._valueMin(),
                    this._valueMin()
                ]), this.range = e('<div></div>').appendTo(this.element).addClass('ui-slider-range ui-widget-header' + ('min' === r.range || 'max' === r.range ? ' ui-slider-range-' + r.range : ''))), n = r.values && r.values.length || 1, t = i.length; n > t; t++) o.push(s);
                this.handles = i.add(e(o.join('')).appendTo(this.element)),
                    this.handle = this.handles.eq(0),
                    this.handles.add(this.range).filter('a').click(function (e) {
                        e.preventDefault()
                    }).mouseenter(function () {
                        r.disabled || e(this).addClass('ui-state-hover')
                    }).mouseleave(function () {
                        e(this).removeClass('ui-state-hover')
                    }).focus(function () {
                        r.disabled ? e(this).blur()  : (e('.ui-slider .ui-state-focus').removeClass('ui-state-focus'), e(this).addClass('ui-state-focus'))
                    }).blur(function () {
                        e(this).removeClass('ui-state-focus')
                    }),
                    this.handles.each(function (t) {
                        e(this).data('ui-slider-handle-index', t)
                    }),
                    this._setOption('disabled', r.disabled),
                    this._on(this.handles, this._handleEvents),
                    this._refreshValue(),
                    this._animateOff = !1
            },
            _destroy: function () {
                this.handles.remove(),
                    this.range.remove(),
                    this.element.removeClass('ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all'),
                    this._mouseDestroy()
            },
            _mouseCapture: function (t) {
                var n,
                    r,
                    i,
                    s,
                    o,
                    u,
                    a,
                    f,
                    l = this,
                    c = this.options;
                return c.disabled ? !1 : (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), n = {
                    x: t.pageX,
                    y: t.pageY
                }, r = this._normValueFromMouse(n), i = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) {
                    var n = Math.abs(r - l.values(t));
                    (i > n || i === n && (t === l._lastChangedValue || l.values(t) === c.min)) && (i = n, s = e(this), o = t)
                }), u = this._start(t, o), u === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, s.addClass('ui-state-active').focus(), a = s.offset(), f = !e(t.target).parents().addBack().is('.ui-slider-handle'), this._clickOffset = f ? {
                    left: 0,
                    top: 0
                }
                    : {
                    left: t.pageX - a.left - s.width() / 2,
                    top: t.pageY - a.top - s.height() / 2 - (parseInt(s.css('borderTopWidth'), 10) || 0) - (parseInt(s.css('borderBottomWidth'), 10) || 0) + (parseInt(s.css('marginTop'), 10) || 0)
                }, this.handles.hasClass('ui-state-hover') || this._slide(t, o, r), this._animateOff = !0, !0))
            },
            _mouseStart: function () {
                return !0
            },
            _mouseDrag: function (e) {
                var t = {
                        x: e.pageX,
                        y: e.pageY
                    },
                    n = this._normValueFromMouse(t);
                return this._slide(e, this._handleIndex, n),
                    !1
            },
            _mouseStop: function (e) {
                return this.handles.removeClass('ui-state-active'),
                    this._mouseSliding = !1,
                    this._stop(e, this._handleIndex),
                    this._change(e, this._handleIndex),
                    this._handleIndex = null,
                    this._clickOffset = null,
                    this._animateOff = !1,
                    !1
            },
            _detectOrientation: function () {
                this.orientation = 'vertical' === this.options.orientation ? 'vertical' : 'horizontal'
            },
            _normValueFromMouse: function (e) {
                var t,
                    n,
                    r,
                    i,
                    s;
                return 'horizontal' === this.orientation ? (t = this.elementSize.width, n = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0))  : (t = this.elementSize.height, n = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)),
                    r = n / t,
                r > 1 && (r = 1),
                0 > r && (r = 0),
                'vertical' === this.orientation && (r = 1 - r),
                    i = this._valueMax() - this._valueMin(),
                    s = this._valueMin() + r * i,
                    this._trimAlignValue(s)
            },
            _start: function (e, t) {
                var n = {
                    handle: this.handles[t],
                    value: this.value()
                };
                return this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()),
                    this._trigger('start', e, n)
            },
            _slide: function (e, t, n) {
                var r,
                    i,
                    s;
                this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && n > r || 1 === t && r > n) && (n = r), n !== this.values(t) && (i = this.values(), i[t] = n, s = this._trigger('slide', e, {
                    handle: this.handles[t],
                    value: n,
                    values: i
                }), r = this.values(t ? 0 : 1), s !== !1 && this.values(t, n, !0)))  : n !== this.value() && (s = this._trigger('slide', e, {
                    handle: this.handles[t],
                    value: n
                }), s !== !1 && this.value(n))
            },
            _stop: function (e, t) {
                var n = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()),
                    this._trigger('stop', e, n)
            },
            _change: function (e, t) {
                if (!this._keySliding && !this._mouseSliding) {
                    var n = {
                        handle: this.handles[t],
                        value: this.value()
                    };
                    this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()),
                        this._lastChangedValue = t,
                        this._trigger('change', e, n)
                }
            },
            value: function (e) {
                return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0), void 0)  : this._value()
            },
            values: function (t, n) {
                var r,
                    i,
                    s;
                if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(n),
                    this._refreshValue(),
                    this._change(null, t),
                    void 0;
                if (!arguments.length) return this._values();
                if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t)  : this.value();
                for (r = this.options.values, i = arguments[0], s = 0; s < r.length; s += 1) r[s] = this._trimAlignValue(i[s]),
                    this._change(null, s);
                this._refreshValue()
            },
            _setOption: function (t, n) {
                var r,
                    i = 0;
                switch (e.isArray(this.options.values) && (i = this.options.values.length), e.Widget.prototype._setOption.apply(this, arguments), t) {
                    case 'disabled':
                        n ? (this.handles.filter('.ui-state-focus').blur(), this.handles.removeClass('ui-state-hover'), this.handles.prop('disabled', !0))  : this.handles.prop('disabled', !1);
                        break;
                    case 'orientation':
                        this._detectOrientation(),
                            this.element.removeClass('ui-slider-horizontal ui-slider-vertical').addClass('ui-slider-' + this.orientation),
                            this._refreshValue();
                        break;
                    case 'value':
                        this._animateOff = !0,
                            this._refreshValue(),
                            this._change(null, 0),
                            this._animateOff = !1;
                        break;
                    case 'values':
                        for (this._animateOff = !0, this._refreshValue(), r = 0; i > r; r += 1) this._change(null, r);
                        this._animateOff = !1;
                        break;
                    case 'min':
                    case 'max':
                        this._animateOff = !0,
                            this._refreshValue(),
                            this._animateOff = !1
                }
            },
            _value: function () {
                var e = this.options.value;
                return e = this._trimAlignValue(e)
            },
            _values: function (e) {
                var t,
                    n,
                    r;
                if (arguments.length) return t = this.options.values[e],
                    t = this._trimAlignValue(t);
                for (n = this.options.values.slice(), r = 0; r < n.length; r += 1) n[r] = this._trimAlignValue(n[r]);
                return n
            },
            _trimAlignValue: function (e) {
                if (e <= this._valueMin()) return this._valueMin();
                if (e >= this._valueMax()) return this._valueMax();
                var t = this.options.step > 0 ? this.options.step : 1,
                    n = (e - this._valueMin()) % t,
                    r = e - n;
                return 2 * Math.abs(n) >= t && (r += n > 0 ? t : - t),
                    parseFloat(r.toFixed(5))
            },
            _valueMin: function () {
                return this.options.min
            },
            _valueMax: function () {
                return this.options.max
            },
            _refreshValue: function () {
                var t,
                    n,
                    r,
                    i,
                    s,
                    o = this.options.range,
                    u = this.options,
                    a = this,
                    f = this._animateOff ? !1 : u.animate,
                    l = {
                    };
                this.options.values && this.options.values.length ? this.handles.each(function (r) {
                    n = (a.values(r) - a._valueMin()) / (a._valueMax() - a._valueMin()) * 100,
                        l['horizontal' === a.orientation ? 'left' : 'bottom'] = n + '%',
                        e(this).stop(1, 1) [f ? 'animate' : 'css'](l, u.animate),
                    a.options.range === !0 && ('horizontal' === a.orientation ? (0 === r && a.range.stop(1, 1) [f ? 'animate' : 'css']({
                        left: n + '%'
                    }, u.animate), 1 === r && a.range[f ? 'animate' : 'css']({
                        width: n - t + '%'
                    }, {
                        queue: !1,
                        duration: u.animate
                    }))  : (0 === r && a.range.stop(1, 1) [f ? 'animate' : 'css']({
                        bottom: n + '%'
                    }, u.animate), 1 === r && a.range[f ? 'animate' : 'css']({
                        height: n - t + '%'
                    }, {
                        queue: !1,
                        duration: u.animate
                    }))),
                        t = n
                })  : (r = this.value(), i = this._valueMin(), s = this._valueMax(), n = s !== i ? (r - i) / (s - i) * 100 : 0, l['horizontal' === this.orientation ? 'left' : 'bottom'] = n + '%', this.handle.stop(1, 1) [f ? 'animate' : 'css'](l, u.animate), 'min' === o && 'horizontal' === this.orientation && this.range.stop(1, 1) [f ? 'animate' : 'css']({
                    width: n + '%'
                }, u.animate), 'max' === o && 'horizontal' === this.orientation && this.range[f ? 'animate' : 'css']({
                    width: 100 - n + '%'
                }, {
                    queue: !1,
                    duration: u.animate
                }), 'min' === o && 'vertical' === this.orientation && this.range.stop(1, 1) [f ? 'animate' : 'css']({
                    height: n + '%'
                }, u.animate), 'max' === o && 'vertical' === this.orientation && this.range[f ? 'animate' : 'css']({
                    height: 100 - n + '%'
                }, {
                    queue: !1,
                    duration: u.animate
                }))
            },
            _handleEvents: {
                keydown: function (t) {
                    var r,
                        i,
                        s,
                        o,
                        u = e(t.target).data('ui-slider-handle-index');
                    switch (t.keyCode) {
                        case e.ui.keyCode.HOME:
                        case e.ui.keyCode.END:
                        case e.ui.keyCode.PAGE_UP:
                        case e.ui.keyCode.PAGE_DOWN:
                        case e.ui.keyCode.UP:
                        case e.ui.keyCode.RIGHT:
                        case e.ui.keyCode.DOWN:
                        case e.ui.keyCode.LEFT:
                            if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, e(t.target).addClass('ui-state-active'), r = this._start(t, u), r === !1)) return
                    }
                    switch (o = this.options.step, i = s = this.options.values && this.options.values.length ? this.values(u)  : this.value(), t.keyCode) {
                        case e.ui.keyCode.HOME:
                            s = this._valueMin();
                            break;
                        case e.ui.keyCode.END:
                            s = this._valueMax();
                            break;
                        case e.ui.keyCode.PAGE_UP:
                            s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / n);
                            break;
                        case e.ui.keyCode.PAGE_DOWN:
                            s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / n);
                            break;
                        case e.ui.keyCode.UP:
                        case e.ui.keyCode.RIGHT:
                            if (i === this._valueMax()) return;
                            s = this._trimAlignValue(i + o);
                            break;
                        case e.ui.keyCode.DOWN:
                        case e.ui.keyCode.LEFT:
                            if (i === this._valueMin()) return;
                            s = this._trimAlignValue(i - o)
                    }
                    this._slide(t, u, s)
                },
                keyup: function (t) {
                    var n = e(t.target).data('ui-slider-handle-index');
                    this._keySliding && (this._keySliding = !1, this._stop(t, n), this._change(t, n), e(t.target).removeClass('ui-state-active'))
                }
            }
        })
    }(jQuery),
    function (e) {
        function t(e) {
            return function () {
                var t = this.element.val();
                e.apply(this, arguments),
                    this._refresh(),
                t !== this.element.val() && this._trigger('change')
            }
        }
        e.widget('ui.spinner', {
            version: '1.10.0',
            defaultElement: '<input>',
            widgetEventPrefix: 'spin',
            options: {
                culture: null,
                icons: {
                    down: 'ui-icon-triangle-1-s',
                    up: 'ui-icon-triangle-1-n'
                },
                incremental: !0,
                max: null,
                min: null,
                numberFormat: null,
                page: 10,
                step: 1,
                change: null,
                spin: null,
                start: null,
                stop: null
            },
            _create: function () {
                this._setOption('max', this.options.max),
                    this._setOption('min', this.options.min),
                    this._setOption('step', this.options.step),
                    this._value(this.element.val(), !0),
                    this._draw(),
                    this._on(this._events),
                    this._refresh(),
                    this._on(this.window, {
                        beforeunload: function () {
                            this.element.removeAttr('autocomplete')
                        }
                    })
            },
            _getCreateOptions: function () {
                var t = {
                    },
                    n = this.element;
                return e.each(['min',
                    'max',
                    'step'], function (e, r) {
                    var i = n.attr(r);
                    void 0 !== i && i.length && (t[r] = i)
                }),
                    t
            },
            _events: {
                keydown: function (e) {
                    this._start(e) && this._keydown(e) && e.preventDefault()
                },
                keyup: '_stop',
                focus: function () {
                    this.previous = this.element.val()
                },
                blur: function (e) {
                    return this.cancelBlur ? void delete this.cancelBlur : (this._refresh(), void (this.previous !== this.element.val() && this._trigger('change', e)))
                },
                mousewheel: function (e, t) {
                    return t ? this.spinning || this._start(e) ? (this._spin((t > 0 ? 1 : - 1) * this.options.step, e), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
                        this.spinning && this._stop(e)
                    }, 100), e.preventDefault(), void 0)  : !1 : void 0
                },
                'mousedown .ui-spinner-button': function (t) {
                    function r() {
                        var e = this.element[0] === this.document[0].activeElement;
                        e || (this.element.focus(), this.previous = n, this._delay(function () {
                            this.previous = n
                        }))
                    }
                    var n;
                    n = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(),
                        t.preventDefault(),
                        r.call(this),
                        this.cancelBlur = !0,
                        this._delay(function () {
                            delete this.cancelBlur,
                                r.call(this)
                        }),
                    this._start(t) !== !1 && this._repeat(null, e(t.currentTarget).hasClass('ui-spinner-up') ? 1 : - 1, t)
                },
                'mouseup .ui-spinner-button': '_stop',
                'mouseenter .ui-spinner-button': function (t) {
                    return e(t.currentTarget).hasClass('ui-state-active') ? this._start(t) === !1 ? !1 : void this._repeat(null, e(t.currentTarget).hasClass('ui-spinner-up') ? 1 : - 1, t)  : void 0
                },
                'mouseleave .ui-spinner-button': '_stop'
            },
            _draw: function () {
                var e = this.uiSpinner = this.element.addClass('ui-spinner-input').attr('autocomplete', 'off').wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
                this.element.attr('role', 'spinbutton'),
                    this.buttons = e.find('.ui-spinner-button').attr('tabIndex', - 1).button().removeClass('ui-corner-all'),
                this.buttons.height() > Math.ceil(0.5 * e.height()) && e.height() > 0 && e.height(e.height()),
                this.options.disabled && this.disable()
            },
            _keydown: function (t) {
                var n = this.options,
                    r = e.ui.keyCode;
                switch (t.keyCode) {
                    case r.UP:
                        return this._repeat(null, 1, t),
                            !0;
                    case r.DOWN:
                        return this._repeat(null, - 1, t),
                            !0;
                    case r.PAGE_UP:
                        return this._repeat(null, n.page, t),
                            !0;
                    case r.PAGE_DOWN:
                        return this._repeat(null, - n.page, t),
                            !0
                }
                return !1
            },
            _uiSpinnerHtml: function () {
                return '<span class=\'ui-spinner ui-widget ui-widget-content ui-corner-all\'></span>'
            },
            _buttonHtml: function () {
                return '<a class=\'ui-spinner-button ui-spinner-up ui-corner-tr\'><span class=\'ui-icon ' + this.options.icons.up + '\'>&#9650;</span></a><a class=\'ui-spinner-button ui-spinner-down ui-corner-br\'><span class=\'ui-icon ' + this.options.icons.down + '\'>&#9660;</span></a>'
            },
            _start: function (e) {
                return this.spinning || this._trigger('start', e) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0)  : !1
            },
            _repeat: function (e, t, n) {
                e = e || 500,
                    clearTimeout(this.timer),
                    this.timer = this._delay(function () {
                        this._repeat(40, t, n)
                    }, e),
                    this._spin(t * this.options.step, n)
            },
            _spin: function (e, t) {
                var n = this.value() || 0;
                this.counter || (this.counter = 1),
                    n = this._adjustValue(n + e * this._increment(this.counter)),
                this.spinning && this._trigger('spin', t, {
                    value: n
                }) === !1 || (this._value(n), this.counter++)
            },
            _increment: function (t) {
                var n = this.options.incremental;
                return n ? e.isFunction(n) ? n(t)  : Math.floor(t * t * t / 50000 - t * t / 500 + 17 * t / 200 + 1)  : 1
            },
            _precision: function () {
                var e = this._precisionOf(this.options.step);
                return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))),
                    e
            },
            _precisionOf: function (e) {
                var t = e.toString(),
                    n = t.indexOf('.');
                return - 1 === n ? 0 : t.length - n - 1
            },
            _adjustValue: function (e) {
                var t,
                    n,
                    r = this.options;
                return t = null !== r.min ? r.min : 0,
                    n = e - t,
                    n = Math.round(n / r.step) * r.step,
                    e = t + n,
                    e = parseFloat(e.toFixed(this._precision())),
                    null !== r.max && e > r.max ? r.max : null !== r.min && e < r.min ? r.min : e
            },
            _stop: function (e) {
                this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger('stop', e))
            },
            _setOption: function (e, t) {
                if ('culture' === e || 'numberFormat' === e) {
                    var n = this._parse(this.element.val());
                    return this.options[e] = t,
                        void this.element.val(this._format(n))
                }('max' === e || 'min' === e || 'step' === e) && 'string' == typeof t && (t = this._parse(t)),
                'icons' === e && (this.buttons.first().find('.ui-icon').removeClass(this.options.icons.up).addClass(t.up), this.buttons.last().find('.ui-icon').removeClass(this.options.icons.down).addClass(t.down)),
                    this._super(e, t),
                'disabled' === e && (t ? (this.element.prop('disabled', !0), this.buttons.button('disable'))  : (this.element.prop('disabled', !1), this.buttons.button('enable')))
            },
            _setOptions: t(function (e) {
                this._super(e),
                    this._value(this.element.val())
            }),
            _parse: function (e) {
                return 'string' == typeof e && '' !== e && (e = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(e, 10, this.options.culture)  : + e),
                    '' === e || isNaN(e) ? null : e
            },
            _format: function (e) {
                return '' === e ? '' : window.Globalize && this.options.numberFormat ? Globalize.format(e, this.options.numberFormat, this.options.culture)  : e
            },
            _refresh: function () {
                this.element.attr({
                    'aria-valuemin': this.options.min,
                    'aria-valuemax': this.options.max,
                    'aria-valuenow': this._parse(this.element.val())
                })
            },
            _value: function (e, t) {
                var n;
                '' !== e && (n = this._parse(e), null !== n && (t || (n = this._adjustValue(n)), e = this._format(n))),
                    this.element.val(e),
                    this._refresh()
            },
            _destroy: function () {
                this.element.removeClass('ui-spinner-input').prop('disabled', !1).removeAttr('autocomplete').removeAttr('role').removeAttr('aria-valuemin').removeAttr('aria-valuemax').removeAttr('aria-valuenow'),
                    this.uiSpinner.replaceWith(this.element)
            },
            stepUp: t(function (e) {
                this._stepUp(e)
            }),
            _stepUp: function (e) {
                this._start() && (this._spin((e || 1) * this.options.step), this._stop())
            },
            stepDown: t(function (e) {
                this._stepDown(e)
            }),
            _stepDown: function (e) {
                this._start() && (this._spin((e || 1) * - this.options.step), this._stop())
            },
            pageUp: t(function (e) {
                this._stepUp((e || 1) * this.options.page)
            }),
            pageDown: t(function (e) {
                this._stepDown((e || 1) * this.options.page)
            }),
            value: function (e) {
                return arguments.length ? void t(this._value).call(this, e)  : this._parse(this.element.val())
            },
            widget: function () {
                return this.uiSpinner
            }
        })
    }(jQuery),
    function (e, t) {
        function i() {
            return ++n
        }
        function s(e) {
            return e.hash.length > 1 && decodeURIComponent(e.href.replace(r, '')) === decodeURIComponent(location.href.replace(r, ''))
        }
        var n = 0,
            r = /#.*$/;
        e.widget('ui.tabs', {
            version: '1.10.0',
            delay: 300,
            options: {
                active: null,
                collapsible: !1,
                event: 'click',
                heightStyle: 'content',
                hide: null,
                show: null,
                activate: null,
                beforeActivate: null,
                beforeLoad: null,
                load: null
            },
            _create: function () {
                var t = this,
                    n = this.options;
                this.running = !1,
                    this.element.addClass('ui-tabs ui-widget ui-widget-content ui-corner-all').toggleClass('ui-tabs-collapsible', n.collapsible).delegate('.ui-tabs-nav > li', 'mousedown' + this.eventNamespace, function (t) {
                        e(this).is('.ui-state-disabled') && t.preventDefault()
                    }).delegate('.ui-tabs-anchor', 'focus' + this.eventNamespace, function () {
                        e(this).closest('li').is('.ui-state-disabled') && this.blur()
                    }),
                    this._processTabs(),
                    n.active = this._initialActive(),
                e.isArray(n.disabled) && (n.disabled = e.unique(n.disabled.concat(e.map(this.tabs.filter('.ui-state-disabled'), function (e) {
                    return t.tabs.index(e)
                }))).sort()),
                    this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(n.active)  : e(),
                    this._refresh(),
                this.active.length && this.load(n.active)
            },
            _initialActive: function () {
                var t = this.options.active,
                    n = this.options.collapsible,
                    r = location.hash.substring(1);
                return null === t && (r && this.tabs.each(function (n, i) {
                    return e(i).attr('aria-controls') === r ? (t = n, !1)  : void 0
                }), null === t && (t = this.tabs.index(this.tabs.filter('.ui-tabs-active'))), (null === t || - 1 === t) && (t = this.tabs.length ? 0 : !1)),
                t !== !1 && (t = this.tabs.index(this.tabs.eq(t)), - 1 === t && (t = n ? !1 : 0)),
                !n && t === !1 && this.anchors.length && (t = 0),
                    t
            },
            _getCreateEventData: function () {
                return {
                    tab: this.active,
                    panel: this.active.length ? this._getPanelForTab(this.active)  : e()
                }
            },
            _tabKeydown: function (t) {
                var n = e(this.document[0].activeElement).closest('li'),
                    r = this.tabs.index(n),
                    i = !0;
                if (!this._handlePageNav(t)) {
                    switch (t.keyCode) {
                        case e.ui.keyCode.RIGHT:
                        case e.ui.keyCode.DOWN:
                            r++;
                            break;
                        case e.ui.keyCode.UP:
                        case e.ui.keyCode.LEFT:
                            i = !1,
                                r--;
                            break;
                        case e.ui.keyCode.END:
                            r = this.anchors.length - 1;
                            break;
                        case e.ui.keyCode.HOME:
                            r = 0;
                            break;
                        case e.ui.keyCode.SPACE:
                            return t.preventDefault(),
                                clearTimeout(this.activating),
                                this._activate(r),
                                void 0;
                        case e.ui.keyCode.ENTER:
                            return t.preventDefault(),
                                clearTimeout(this.activating),
                                this._activate(r === this.options.active ? !1 : r),
                                void 0;
                        default:
                            return
                    }
                    t.preventDefault(),
                        clearTimeout(this.activating),
                        r = this._focusNextTab(r, i),
                    t.ctrlKey || (n.attr('aria-selected', 'false'), this.tabs.eq(r).attr('aria-selected', 'true'), this.activating = this._delay(function () {
                        this.option('active', r)
                    }, this.delay))
                }
            },
            _panelKeydown: function (t) {
                this._handlePageNav(t) || t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(), this.active.focus())
            },
            _handlePageNav: function (t) {
                return t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0)  : t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0)  : void 0
            },
            _findNextTab: function (t, n) {
                function i() {
                    return t > r && (t = 0),
                    0 > t && (t = r),
                        t
                }
                for (var r = this.tabs.length - 1; - 1 !== e.inArray(i(), this.options.disabled); ) t = n ? t + 1 : t - 1;
                return t
            },
            _focusNextTab: function (e, t) {
                return e = this._findNextTab(e, t),
                    this.tabs.eq(e).focus(),
                    e
            },
            _setOption: function (e, t) {
                return 'active' === e ? void this._activate(t)  : 'disabled' === e ? void this._setupDisabled(t)  : (this._super(e, t), 'collapsible' === e && (this.element.toggleClass('ui-tabs-collapsible', t), !t && this.options.active === !1 && this._activate(0)), 'event' === e && this._setupEvents(t), 'heightStyle' === e && this._setupHeightStyle(t), void 0)
            },
            _tabId: function (e) {
                return e.attr('aria-controls') || 'ui-tabs-' + i()
            },
            _sanitizeSelector: function (e) {
                return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, '\\$&')  : ''
            },
            refresh: function () {
                var t = this.options,
                    n = this.tablist.children(':has(a[href])');
                t.disabled = e.map(n.filter('.ui-state-disabled'), function (e) {
                    return n.index(e)
                }),
                    this._processTabs(),
                    t.active !== !1 && this.anchors.length ? this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = e())  : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1))  : t.active = this.tabs.index(this.active)  : (t.active = !1, this.active = e()),
                    this._refresh()
            },
            _refresh: function () {
                this._setupDisabled(this.options.disabled),
                    this._setupEvents(this.options.event),
                    this._setupHeightStyle(this.options.heightStyle),
                    this.tabs.not(this.active).attr({
                        'aria-selected': 'false',
                        tabIndex: - 1
                    }),
                    this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                        'aria-expanded': 'false',
                        'aria-hidden': 'true'
                    }),
                    this.active.length ? (this.active.addClass('ui-tabs-active ui-state-active').attr({
                        'aria-selected': 'true',
                        tabIndex: 0
                    }), this._getPanelForTab(this.active).show().attr({
                        'aria-expanded': 'true',
                        'aria-hidden': 'false'
                    }))  : this.tabs.eq(0).attr('tabIndex', 0)
            },
            _processTabs: function () {
                var t = this;
                this.tablist = this._getList().addClass('ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all').attr('role', 'tablist'),
                    this.tabs = this.tablist.find('> li:has(a[href])').addClass('ui-state-default ui-corner-top').attr({
                        role: 'tab',
                        tabIndex: - 1
                    }),
                    this.anchors = this.tabs.map(function () {
                        return e('a', this) [0]
                    }).addClass('ui-tabs-anchor').attr({
                        role: 'presentation',
                        tabIndex: - 1
                    }),
                    this.panels = e(),
                    this.anchors.each(function (n, r) {
                        var i,
                            o,
                            u,
                            a = e(r).uniqueId().attr('id'),
                            f = e(r).closest('li'),
                            l = f.attr('aria-controls');
                        s(r) ? (i = r.hash, o = t.element.find(t._sanitizeSelector(i)))  : (u = t._tabId(f), i = '#' + u, o = t.element.find(i), o.length || (o = t._createPanel(u), o.insertAfter(t.panels[n - 1] || t.tablist)), o.attr('aria-live', 'polite')),
                        o.length && (t.panels = t.panels.add(o)),
                        l && f.data('ui-tabs-aria-controls', l),
                            f.attr({
                                'aria-controls': i.substring(1),
                                'aria-labelledby': a
                            }),
                            o.attr('aria-labelledby', a)
                    }),
                    this.panels.addClass('ui-tabs-panel ui-widget-content ui-corner-bottom').attr('role', 'tabpanel')
            },
            _getList: function () {
                return this.element.find('ol,ul').eq(0)
            },
            _createPanel: function (t) {
                return e('<div>').attr('id', t).addClass('ui-tabs-panel ui-widget-content ui-corner-bottom').data('ui-tabs-destroy', !0)
            },
            _setupDisabled: function (t) {
                e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0)  : t = !1);
                for (var r, n = 0; r = this.tabs[n]; n++) t === !0 || - 1 !== e.inArray(n, t) ? e(r).addClass('ui-state-disabled').attr('aria-disabled', 'true')  : e(r).removeClass('ui-state-disabled').removeAttr('aria-disabled');
                this.options.disabled = t
            },
            _setupEvents: function (t) {
                var n = {
                    click: function (e) {
                        e.preventDefault()
                    }
                };
                t && e.each(t.split(' '), function (e, t) {
                    n[t] = '_eventHandler'
                }),
                    this._off(this.anchors.add(this.tabs).add(this.panels)),
                    this._on(this.anchors, n),
                    this._on(this.tabs, {
                        keydown: '_tabKeydown'
                    }),
                    this._on(this.panels, {
                        keydown: '_panelKeydown'
                    }),
                    this._focusable(this.tabs),
                    this._hoverable(this.tabs)
            },
            _setupHeightStyle: function (t) {
                var n,
                    r = this.element.parent();
                'fill' === t ? (n = r.height(), n -= this.element.outerHeight() - this.element.height(), this.element.siblings(':visible').each(function () {
                    var t = e(this),
                        r = t.css('position');
                    'absolute' !== r && 'fixed' !== r && (n -= t.outerHeight(!0))
                }), this.element.children().not(this.panels).each(function () {
                    n -= e(this).outerHeight(!0)
                }), this.panels.each(function () {
                    e(this).height(Math.max(0, n - e(this).innerHeight() + e(this).height()))
                }).css('overflow', 'auto'))  : 'auto' === t && (n = 0, this.panels.each(function () {
                    n = Math.max(n, e(this).height('').height())
                }).height(n))
            },
            _eventHandler: function (t) {
                var n = this.options,
                    r = this.active,
                    i = e(t.currentTarget),
                    s = i.closest('li'),
                    o = s[0] === r[0],
                    u = o && n.collapsible,
                    a = u ? e()  : this._getPanelForTab(s),
                    f = r.length ? this._getPanelForTab(r)  : e(),
                    l = {
                        oldTab: r,
                        oldPanel: f,
                        newTab: u ? e()  : s,
                        newPanel: a
                    };
                t.preventDefault(),
                s.hasClass('ui-state-disabled') || s.hasClass('ui-tabs-loading') || this.running || o && !n.collapsible || this._trigger('beforeActivate', t, l) === !1 || (n.active = u ? !1 : this.tabs.index(s), this.active = o ? e()  : s, this.xhr && this.xhr.abort(), !f.length && !a.length && e.error('jQuery UI Tabs: Mismatching fragment identifier.'), a.length && this.load(this.tabs.index(s), t), this._toggle(t, l))
            },
            _toggle: function (t, n) {
                function o() {
                    r.running = !1,
                        r._trigger('activate', t, n)
                }
                function u() {
                    n.newTab.closest('li').addClass('ui-tabs-active ui-state-active'),
                        i.length && r.options.show ? r._show(i, r.options.show, o)  : (i.show(), o())
                }
                var r = this,
                    i = n.newPanel,
                    s = n.oldPanel;
                this.running = !0,
                    s.length && this.options.hide ? this._hide(s, this.options.hide, function () {
                        n.oldTab.closest('li').removeClass('ui-tabs-active ui-state-active'),
                            u()
                    })  : (n.oldTab.closest('li').removeClass('ui-tabs-active ui-state-active'), s.hide(), u()),
                    s.attr({
                        'aria-expanded': 'false',
                        'aria-hidden': 'true'
                    }),
                    n.oldTab.attr('aria-selected', 'false'),
                    i.length && s.length ? n.oldTab.attr('tabIndex', - 1)  : i.length && this.tabs.filter(function () {
                        return 0 === e(this).attr('tabIndex')
                    }).attr('tabIndex', - 1),
                    i.attr({
                        'aria-expanded': 'true',
                        'aria-hidden': 'false'
                    }),
                    n.newTab.attr({
                        'aria-selected': 'true',
                        tabIndex: 0
                    })
            },
            _activate: function (t) {
                var n,
                    r = this._findActive(t);
                r[0] !== this.active[0] && (r.length || (r = this.active), n = r.find('.ui-tabs-anchor') [0], this._eventHandler({
                    target: n,
                    currentTarget: n,
                    preventDefault: e.noop
                }))
            },
            _findActive: function (t) {
                return t === !1 ? e()  : this.tabs.eq(t)
            },
            _getIndex: function (e) {
                return 'string' == typeof e && (e = this.anchors.index(this.anchors.filter('[href$=\'' + e + '\']'))),
                    e
            },
            _destroy: function () {
                this.xhr && this.xhr.abort(),
                    this.element.removeClass('ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible'),
                    this.tablist.removeClass('ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all').removeAttr('role'),
                    this.anchors.removeClass('ui-tabs-anchor').removeAttr('role').removeAttr('tabIndex').removeUniqueId(),
                    this.tabs.add(this.panels).each(function () {
                        e.data(this, 'ui-tabs-destroy') ? e(this).remove()  : e(this).removeClass('ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel').removeAttr('tabIndex').removeAttr('aria-live').removeAttr('aria-busy').removeAttr('aria-selected').removeAttr('aria-labelledby').removeAttr('aria-hidden').removeAttr('aria-expanded').removeAttr('role')
                    }),
                    this.tabs.each(function () {
                        var t = e(this),
                            n = t.data('ui-tabs-aria-controls');
                        n ? t.attr('aria-controls', n).removeData('ui-tabs-aria-controls')  : t.removeAttr('aria-controls')
                    }),
                    this.panels.show(),
                'content' !== this.options.heightStyle && this.panels.css('height', '')
            },
            enable: function (n) {
                var r = this.options.disabled;
                r !== !1 && (n === t ? r = !1 : (n = this._getIndex(n), r = e.isArray(r) ? e.map(r, function (e) {
                    return e !== n ? e : null
                })  : e.map(this.tabs, function (e, t) {
                    return t !== n ? t : null
                })), this._setupDisabled(r))
            },
            disable: function (n) {
                var r = this.options.disabled;
                if (r !== !0) {
                    if (n === t) r = !0;
                    else {
                        if (n = this._getIndex(n), - 1 !== e.inArray(n, r)) return;
                        r = e.isArray(r) ? e.merge([n], r).sort()  : [
                            n
                        ]
                    }
                    this._setupDisabled(r)
                }
            },
            load: function (t, n) {
                t = this._getIndex(t);
                var r = this,
                    i = this.tabs.eq(t),
                    o = i.find('.ui-tabs-anchor'),
                    u = this._getPanelForTab(i),
                    a = {
                        tab: i,
                        panel: u
                    };
                s(o[0]) || (this.xhr = e.ajax(this._ajaxSettings(o, n, a)), this.xhr && 'canceled' !== this.xhr.statusText && (i.addClass('ui-tabs-loading'), u.attr('aria-busy', 'true'), this.xhr.success(function (e) {
                    setTimeout(function () {
                        u.html(e),
                            r._trigger('load', n, a)
                    }, 1)
                }).complete(function (e, t) {
                    setTimeout(function () {
                        'abort' === t && r.panels.stop(!1, !0),
                            i.removeClass('ui-tabs-loading'),
                            u.removeAttr('aria-busy'),
                        e === r.xhr && delete r.xhr
                    }, 1)
                })))
            },
            _ajaxSettings: function (t, n, r) {
                var i = this;
                return {
                    url: t.attr('href'),
                    beforeSend: function (t, s) {
                        return i._trigger('beforeLoad', n, e.extend({
                            jqXHR: t,
                            ajaxSettings: s
                        }, r))
                    }
                }
            },
            _getPanelForTab: function (t) {
                var n = e(t).attr('aria-controls');
                return this.element.find(this._sanitizeSelector('#' + n))
            }
        })
    }(jQuery),
    function (e) {
        function n(t, n) {
            var r = (t.attr('aria-describedby') || '').split(/\s+/);
            r.push(n),
                t.data('ui-tooltip-id', n).attr('aria-describedby', e.trim(r.join(' ')))
        }
        function r(t) {
            var n = t.data('ui-tooltip-id'),
                r = (t.attr('aria-describedby') || '').split(/\s+/),
                i = e.inArray(n, r);
            - 1 !== i && r.splice(i, 1),
                t.removeData('ui-tooltip-id'),
                r = e.trim(r.join(' ')),
                r ? t.attr('aria-describedby', r)  : t.removeAttr('aria-describedby')
        }
        var t = 0;
        e.widget('ui.tooltip', {
            version: '1.10.0',
            options: {
                content: function () {
                    var t = e(this).attr('title') || '';
                    return e('<a>').text(t).html()
                },
                hide: !0,
                items: '[title]:not([disabled])',
                position: {
                    my: 'left top+15',
                    at: 'left bottom',
                    collision: 'flipfit flip'
                },
                show: !0,
                tooltipClass: null,
                track: !1,
                close: null,
                open: null
            },
            _create: function () {
                this._on({
                    mouseover: 'open',
                    focusin: 'open'
                }),
                    this.tooltips = {
                    },
                    this.parents = {
                    },
                this.options.disabled && this._disable()
            },
            _setOption: function (t, n) {
                var r = this;
                return 'disabled' === t ? (this[n ? '_disable' : '_enable'](), void (this.options[t] = n))  : (this._super(t, n), void ('content' === t && e.each(this.tooltips, function (e, t) {
                    r._updateContent(t)
                })))
            },
            _disable: function () {
                var t = this;
                e.each(this.tooltips, function (n, r) {
                    var i = e.Event('blur');
                    i.target = i.currentTarget = r[0],
                        t.close(i, !0)
                }),
                    this.element.find(this.options.items).addBack().each(function () {
                        var t = e(this);
                        t.is('[title]') && t.data('ui-tooltip-title', t.attr('title')).attr('title', '')
                    })
            },
            _enable: function () {
                this.element.find(this.options.items).addBack().each(function () {
                    var t = e(this);
                    t.data('ui-tooltip-title') && t.attr('title', t.data('ui-tooltip-title'))
                })
            },
            open: function (t) {
                var n = this,
                    r = e(t ? t.target : this.element).closest(this.options.items);
                r.length && !r.data('ui-tooltip-id') && (r.attr('title') && r.data('ui-tooltip-title', r.attr('title')), r.data('ui-tooltip-open', !0), t && 'mouseover' === t.type && r.parents().each(function () {
                    var r,
                        t = e(this);
                    t.data('ui-tooltip-open') && (r = e.Event('blur'), r.target = r.currentTarget = this, n.close(r, !0)),
                    t.attr('title') && (t.uniqueId(), n.parents[this.id] = {
                        element: this,
                        title: t.attr('title')
                    }, t.attr('title', ''))
                }), this._updateContent(r, t))
            },
            _updateContent: function (e, t) {
                var n,
                    r = this.options.content,
                    i = this,
                    s = t ? t.type : null;
                return 'string' == typeof r ? this._open(t, e, r)  : (n = r.call(e[0], function (n) {
                    e.data('ui-tooltip-open') && i._delay(function () {
                        t && (t.type = s),
                            this._open(t, e, n)
                    })
                }), void (n && this._open(t, e, n)))
            },
            _open: function (t, r, i) {
                function f(e) {
                    a.of = e,
                    s.is(':hidden') || s.position(a)
                }
                var s,
                    o,
                    u,
                    a = e.extend({
                    }, this.options.position);
                if (i) {
                    if (s = this._find(r), s.length) return void s.find('.ui-tooltip-content').html(i);
                    r.is('[title]') && (t && 'mouseover' === t.type ? r.attr('title', '')  : r.removeAttr('title')),
                        s = this._tooltip(r),
                        n(r, s.attr('id')),
                        s.find('.ui-tooltip-content').html(i),
                        this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {
                            mousemove: f
                        }), f(t))  : s.position(e.extend({
                            of: r
                        }, this.options.position)),
                        s.hide(),
                        this._show(s, this.options.show),
                    this.options.show && this.options.show.delay && (u = this.delayedShow = setInterval(function () {
                        s.is(':visible') && (f(a.of), clearInterval(u))
                    }, e.fx.interval)),
                        this._trigger('open', t, {
                            tooltip: s
                        }),
                        o = {
                            keyup: function (t) {
                                if (t.keyCode === e.ui.keyCode.ESCAPE) {
                                    var n = e.Event(t);
                                    n.currentTarget = r[0],
                                        this.close(n, !0)
                                }
                            },
                            remove: function () {
                                this._removeTooltip(s)
                            }
                        },
                    t && 'mouseover' !== t.type || (o.mouseleave = 'close'),
                    t && 'focusin' !== t.type || (o.focusout = 'close'),
                        this._on(!0, r, o)
                }
            },
            close: function (t) {
                var n = this,
                    i = e(t ? t.currentTarget : this.element),
                    s = this._find(i);
                this.closing || (clearInterval(this.delayedShow), i.data('ui-tooltip-title') && i.attr('title', i.data('ui-tooltip-title')), r(i), s.stop(!0), this._hide(s, this.options.hide, function () {
                    n._removeTooltip(e(this))
                }), i.removeData('ui-tooltip-open'), this._off(i, 'mouseleave focusout keyup'), i[0] !== this.element[0] && this._off(i, 'remove'), this._off(this.document, 'mousemove'), t && 'mouseleave' === t.type && e.each(this.parents, function (t, r) {
                    e(r.element).attr('title', r.title),
                        delete n.parents[t]
                }), this.closing = !0, this._trigger('close', t, {
                    tooltip: s
                }), this.closing = !1)
            },
            _tooltip: function (n) {
                var r = 'ui-tooltip-' + t++,
                    i = e('<div>').attr({
                        id: r,
                        role: 'tooltip'
                    }).addClass('ui-tooltip ui-widget ui-corner-all ui-widget-content ' + (this.options.tooltipClass || ''));
                return e('<div>').addClass('ui-tooltip-content').appendTo(i),
                    i.appendTo(this.document[0].body),
                    this.tooltips[r] = n,
                    i
            },
            _find: function (t) {
                var n = t.data('ui-tooltip-id');
                return n ? e('#' + n)  : e()
            },
            _removeTooltip: function (e) {
                e.remove(),
                    delete this.tooltips[e.attr('id')]
            },
            _destroy: function () {
                var t = this;
                e.each(this.tooltips, function (n, r) {
                    var i = e.Event('blur');
                    i.target = i.currentTarget = r[0],
                        t.close(i, !0),
                        e('#' + n).remove(),
                    r.data('ui-tooltip-title') && (r.attr('title', r.data('ui-tooltip-title')), r.removeData('ui-tooltip-title'))
                })
            }
        })
    }(jQuery),
jQuery.effects || function (e, t) {
    var n = 'ui-effects-';
    e.effects = {
        effect: {
        }
    },
        function (e, t) {
            function h(e, t, n) {
                var r = u[t.type] || {
                    };
                return null == e ? n || !t.def ? null : t.def : (e = r.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : r.mod ? (e + r.mod) % r.mod : 0 > e ? 0 : r.max < e ? r.max : e)
            }
            function p(t) {
                var n = s(),
                    r = n._rgba = [
                    ];
                return t = t.toLowerCase(),
                    c(i, function (e, i) {
                        var s,
                            u = i.re.exec(t),
                            a = u && i.parse(u),
                            f = i.space || 'rgba';
                        return a ? (s = n[f](a), n[o[f].cache] = s[o[f].cache], r = n._rgba = s._rgba, !1)  : void 0
                    }),
                    r.length ? ('0,0,0,0' === r.join() && e.extend(r, l.transparent), n)  : l[t]
            }
            function d(e, t, n) {
                return n = (n + 1) % 1,
                    1 > 6 * n ? e + (t - e) * n * 6 : 1 > 2 * n ? t : 2 > 3 * n ? e + (t - e) * (2 / 3 - n) * 6 : e
            }
            var l,
                n = 'backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor',
                r = /^([\-+])=\s*(\d+\.?\d*)/,
                i = [
                    {
                        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function (e) {
                            return [e[1],
                                e[2],
                                e[3],
                                e[4]]
                        }
                    },
                    {
                        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function (e) {
                            return [2.55 * e[1],
                                2.55 * e[2],
                                2.55 * e[3],
                                e[4]]
                        }
                    },
                    {
                        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                        parse: function (e) {
                            return [parseInt(e[1], 16),
                                parseInt(e[2], 16),
                                parseInt(e[3], 16)]
                        }
                    },
                    {
                        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                        parse: function (e) {
                            return [parseInt(e[1] + e[1], 16),
                                parseInt(e[2] + e[2], 16),
                                parseInt(e[3] + e[3], 16)]
                        }
                    },
                    {
                        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        space: 'hsla',
                        parse: function (e) {
                            return [e[1],
                                e[2] / 100,
                                e[3] / 100,
                                e[4]]
                        }
                    }
                ],
                s = e.Color = function (t, n, r, i) {
                    return new e.Color.fn.parse(t, n, r, i)
                },
                o = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: 'byte'
                            },
                            green: {
                                idx: 1,
                                type: 'byte'
                            },
                            blue: {
                                idx: 2,
                                type: 'byte'
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: 'degrees'
                            },
                            saturation: {
                                idx: 1,
                                type: 'percent'
                            },
                            lightness: {
                                idx: 2,
                                type: 'percent'
                            }
                        }
                    }
                },
                u = {
                    'byte': {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                },
                a = s.support = {
                },
                f = e('<p>') [0],
                c = e.each;
            f.style.cssText = 'background-color:rgba(1,1,1,.5)',
                a.rgba = f.style.backgroundColor.indexOf('rgba') > - 1,
                c(o, function (e, t) {
                    t.cache = '_' + e,
                        t.props.alpha = {
                            idx: 3,
                            type: 'percent',
                            def: 1
                        }
                }),
                s.fn = e.extend(s.prototype, {
                    parse: function (n, r, i, u) {
                        if (n === t) return this._rgba = [
                            null,
                            null,
                            null,
                            null
                        ],
                            this;
                        (n.jquery || n.nodeType) && (n = e(n).css(r), r = t);
                        var a = this,
                            f = e.type(n),
                            d = this._rgba = [
                            ];
                        return r !== t && (n = [
                            n,
                            r,
                            i,
                            u
                        ], f = 'array'),
                            'string' === f ? this.parse(p(n) || l._default)  : 'array' === f ? (c(o.rgba.props, function (e, t) {
                                d[t.idx] = h(n[t.idx], t)
                            }), this)  : 'object' === f ? (n instanceof s ? c(o, function (e, t) {
                                n[t.cache] && (a[t.cache] = n[t.cache].slice())
                            })  : c(o, function (t, r) {
                                var i = r.cache;
                                c(r.props, function (e, t) {
                                    if (!a[i] && r.to) {
                                        if ('alpha' === e || null == n[e]) return;
                                        a[i] = r.to(a._rgba)
                                    }
                                    a[i][t.idx] = h(n[e], t, !0)
                                }),
                                a[i] && e.inArray(null, a[i].slice(0, 3)) < 0 && (a[i][3] = 1, r.from && (a._rgba = r.from(a[i])))
                            }), this)  : void 0
                    },
                    is: function (e) {
                        var t = s(e),
                            n = !0,
                            r = this;
                        return c(o, function (e, i) {
                            var s,
                                o = t[i.cache];
                            return o && (s = r[i.cache] || i.to && i.to(r._rgba) || [], c(i.props, function (e, t) {
                                return null != o[t.idx] ? n = o[t.idx] === s[t.idx] : void 0
                            })),
                                n
                        }),
                            n
                    },
                    _space: function () {
                        var e = [
                            ],
                            t = this;
                        return c(o, function (n, r) {
                            t[r.cache] && e.push(n)
                        }),
                            e.pop()
                    },
                    transition: function (e, t) {
                        var n = s(e),
                            r = n._space(),
                            i = o[r],
                            a = 0 === this.alpha() ? s('transparent')  : this,
                            f = a[i.cache] || i.to(a._rgba),
                            l = f.slice();
                        return n = n[i.cache],
                            c(i.props, function (e, r) {
                                var i = r.idx,
                                    s = f[i],
                                    o = n[i],
                                    a = u[r.type] || {
                                        };
                                null !== o && (null === s ? l[i] = o : (a.mod && (o - s > a.mod / 2 ? s += a.mod : s - o > a.mod / 2 && (s -= a.mod)), l[i] = h((o - s) * t + s, r)))
                            }),
                            this[r](l)
                    },
                    blend: function (t) {
                        if (1 === this._rgba[3]) return this;
                        var n = this._rgba.slice(),
                            r = n.pop(),
                            i = s(t)._rgba;
                        return s(e.map(n, function (e, t) {
                            return (1 - r) * i[t] + r * e
                        }))
                    },
                    toRgbaString: function () {
                        var t = 'rgba(',
                            n = e.map(this._rgba, function (e, t) {
                                return null == e ? t > 2 ? 1 : 0 : e
                            });
                        return 1 === n[3] && (n.pop(), t = 'rgb('),
                        t + n.join() + ')'
                    },
                    toHslaString: function () {
                        var t = 'hsla(',
                            n = e.map(this.hsla(), function (e, t) {
                                return null == e && (e = t > 2 ? 1 : 0),
                                t && 3 > t && (e = Math.round(100 * e) + '%'),
                                    e
                            });
                        return 1 === n[3] && (n.pop(), t = 'hsl('),
                        t + n.join() + ')'
                    },
                    toHexString: function (t) {
                        var n = this._rgba.slice(),
                            r = n.pop();
                        return t && n.push(~~(255 * r)),
                        '#' + e.map(n, function (e) {
                            return e = (e || 0).toString(16),
                                1 === e.length ? '0' + e : e
                        }).join('')
                    },
                    toString: function () {
                        return 0 === this._rgba[3] ? 'transparent' : this.toRgbaString()
                    }
                }),
                s.fn.parse.prototype = s.fn,
                o.hsla.to = function (e) {
                    if (null == e[0] || null == e[1] || null == e[2]) return [null,
                        null,
                        null,
                        e[3]];
                    var l,
                        c,
                        t = e[0] / 255,
                        n = e[1] / 255,
                        r = e[2] / 255,
                        i = e[3],
                        s = Math.max(t, n, r),
                        o = Math.min(t, n, r),
                        u = s - o,
                        a = s + o,
                        f = 0.5 * a;
                    return l = o === s ? 0 : t === s ? 60 * (n - r) / u + 360 : n === s ? 60 * (r - t) / u + 120 : 60 * (t - n) / u + 240,
                        c = 0 === u ? 0 : 0.5 >= f ? u / a : u / (2 - a),
                        [
                            Math.round(l) % 360,
                            c,
                            f,
                            null == i ? 1 : i
                        ]
                },
                o.hsla.from = function (e) {
                    if (null == e[0] || null == e[1] || null == e[2]) return [null,
                        null,
                        null,
                        e[3]];
                    var t = e[0] / 360,
                        n = e[1],
                        r = e[2],
                        i = e[3],
                        s = 0.5 >= r ? r * (1 + n)  : r + n - r * n,
                        o = 2 * r - s;
                    return [Math.round(255 * d(o, s, t + 1 / 3)),
                        Math.round(255 * d(o, s, t)),
                        Math.round(255 * d(o, s, t - 1 / 3)),
                        i]
                },
                c(o, function (n, i) {
                    var o = i.props,
                        u = i.cache,
                        a = i.to,
                        f = i.from;
                    s.fn[n] = function (n) {
                        if (a && !this[u] && (this[u] = a(this._rgba)), n === t) return this[u].slice();
                        var r,
                            i = e.type(n),
                            l = 'array' === i || 'object' === i ? n : arguments,
                            p = this[u].slice();
                        return c(o, function (e, t) {
                            var n = l['object' === i ? e : t.idx];
                            null == n && (n = p[t.idx]),
                                p[t.idx] = h(n, t)
                        }),
                            f ? (r = s(f(p)), r[u] = p, r)  : s(p)
                    },
                        c(o, function (t, i) {
                            s.fn[t] || (s.fn[t] = function (s) {
                                var l,
                                    o = e.type(s),
                                    u = 'alpha' === t ? this._hsla ? 'hsla' : 'rgba' : n,
                                    a = this[u](),
                                    f = a[i.idx];
                                return 'undefined' === o ? f : ('function' === o && (s = s.call(this, f), o = e.type(s)), null == s && i.empty ? this : ('string' === o && (l = r.exec(s), l && (s = f + parseFloat(l[2]) * ('+' === l[1] ? 1 : - 1))), a[i.idx] = s, this[u](a)))
                            })
                        })
                }),
                s.hook = function (t) {
                    var n = t.split(' ');
                    c(n, function (t, n) {
                        e.cssHooks[n] = {
                            set: function (t, r) {
                                var i,
                                    o,
                                    u = '';
                                if ('transparent' !== r && ('string' !== e.type(r) || (i = p(r)))) {
                                    if (r = s(i || r), !a.rgba && 1 !== r._rgba[3]) {
                                        for (o = 'backgroundColor' === n ? t.parentNode : t; ('' === u || 'transparent' === u) && o && o.style; ) try {
                                            u = e.css(o, 'backgroundColor'),
                                                o = o.parentNode
                                        } catch (f) {
                                        }
                                        r = r.blend(u && 'transparent' !== u ? u : '_default')
                                    }
                                    r = r.toRgbaString()
                                }
                                try {
                                    t.style[n] = r
                                } catch (f) {
                                }
                            }
                        },
                            e.fx.step[n] = function (t) {
                                t.colorInit || (t.start = s(t.elem, n), t.end = s(t.end), t.colorInit = !0),
                                    e.cssHooks[n].set(t.elem, t.start.transition(t.end, t.pos))
                            }
                    })
                },
                s.hook(n),
                e.cssHooks.borderColor = {
                    expand: function (e) {
                        var t = {
                        };
                        return c(['Top',
                            'Right',
                            'Bottom',
                            'Left'], function (n, r) {
                            t['border' + r + 'Color'] = e
                        }),
                            t
                    }
                },
                l = e.Color.names = {
                    aqua: '#00ffff',
                    black: '#000000',
                    blue: '#0000ff',
                    fuchsia: '#ff00ff',
                    gray: '#808080',
                    green: '#008000',
                    lime: '#00ff00',
                    maroon: '#800000',
                    navy: '#000080',
                    olive: '#808000',
                    purple: '#800080',
                    red: '#ff0000',
                    silver: '#c0c0c0',
                    teal: '#008080',
                    white: '#ffffff',
                    yellow: '#ffff00',
                    transparent: [
                        null,
                        null,
                        null,
                        0
                    ],
                    _default: '#ffffff'
                }
        }(jQuery),
        function () {
            function i(t) {
                var n,
                    r,
                    i = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null)  : t.currentStyle,
                    s = {
                    };
                if (i && i.length && i[0] && i[i[0]]) for (r = i.length; r--; ) n = i[r],
                'string' == typeof i[n] && (s[e.camelCase(n)] = i[n]);
                else for (n in i) 'string' == typeof i[n] && (s[n] = i[n]);
                return s
            }
            function s(t, n) {
                var s,
                    o,
                    i = {
                    };
                for (s in n) o = n[s],
                t[s] !== o && !r[s] && (e.fx.step[s] || !isNaN(parseFloat(o))) && (i[s] = o);
                return i
            }
            var n = [
                    'add',
                    'remove',
                    'toggle'
                ],
                r = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };
            e.each(['borderLeftStyle',
                'borderRightStyle',
                'borderBottomStyle',
                'borderTopStyle'], function (t, n) {
                e.fx.step[n] = function (e) {
                    ('none' !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (jQuery.style(e.elem, n, e.end), e.setAttr = !0)
                }
            }),
            e.fn.addBack || (e.fn.addBack = function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }),
                e.effects.animateClass = function (t, r, o, u) {
                    var a = e.speed(r, o, u);
                    return this.queue(function () {
                        var u,
                            r = e(this),
                            o = r.attr('class') || '',
                            f = a.children ? r.find('*').addBack()  : r;
                        f = f.map(function () {
                            var t = e(this);
                            return {
                                el: t,
                                start: i(this)
                            }
                        }),
                            u = function () {
                                e.each(n, function (e, n) {
                                    t[n] && r[n + 'Class'](t[n])
                                })
                            },
                            u(),
                            f = f.map(function () {
                                return this.end = i(this.el[0]),
                                    this.diff = s(this.start, this.end),
                                    this
                            }),
                            r.attr('class', o),
                            f = f.map(function () {
                                var t = this,
                                    n = e.Deferred(),
                                    r = e.extend({
                                    }, a, {
                                        queue: !1,
                                        complete: function () {
                                            n.resolve(t)
                                        }
                                    });
                                return this.el.animate(this.diff, r),
                                    n.promise()
                            }),
                            e.when.apply(e, f.get()).done(function () {
                                u(),
                                    e.each(arguments, function () {
                                        var t = this.el;
                                        e.each(this.diff, function (e) {
                                            t.css(e, '')
                                        })
                                    }),
                                    a.complete.call(r[0])
                            })
                    })
                },
                e.fn.extend({
                    _addClass: e.fn.addClass,
                    addClass: function (t, n, r, i) {
                        return n ? e.effects.animateClass.call(this, {
                            add: t
                        }, n, r, i)  : this._addClass(t)
                    },
                    _removeClass: e.fn.removeClass,
                    removeClass: function (t, n, r, i) {
                        return n ? e.effects.animateClass.call(this, {
                            remove: t
                        }, n, r, i)  : this._removeClass(t)
                    },
                    _toggleClass: e.fn.toggleClass,
                    toggleClass: function (n, r, i, s, o) {
                        return 'boolean' == typeof r || r === t ? i ? e.effects.animateClass.call(this, r ? {
                            add: n
                        }
                            : {
                            remove: n
                        }, i, s, o)  : this._toggleClass(n, r)  : e.effects.animateClass.call(this, {
                            toggle: n
                        }, r, i, s)
                    },
                    switchClass: function (t, n, r, i, s) {
                        return e.effects.animateClass.call(this, {
                            add: n,
                            remove: t
                        }, r, i, s)
                    }
                })
        }(),
        function () {
            function r(t, n, r, i) {
                return e.isPlainObject(t) && (n = t, t = t.effect),
                    t = {
                        effect: t
                    },
                null == n && (n = {
                }),
                e.isFunction(n) && (i = n, r = null, n = {
                }),
                ('number' == typeof n || e.fx.speeds[n]) && (i = r, r = n, n = {
                }),
                e.isFunction(r) && (i = r, r = null),
                n && e.extend(t, n),
                    r = r || n.duration,
                    t.duration = e.fx.off ? 0 : 'number' == typeof r ? r : r in e.fx.speeds ? e.fx.speeds[r] : e.fx.speeds._default,
                    t.complete = i || n.complete,
                    t
            }
            function i(t) {
                return !t || 'number' == typeof t || e.fx.speeds[t] ? !0 : 'string' == typeof t && !e.effects.effect[t]
            }
            e.extend(e.effects, {
                version: '1.10.0',
                save: function (e, t) {
                    for (var r = 0; r < t.length; r++) null !== t[r] && e.data(n + t[r], e[0].style[t[r]])
                },
                restore: function (e, r) {
                    var i,
                        s;
                    for (s = 0; s < r.length; s++) null !== r[s] && (i = e.data(n + r[s]), i === t && (i = ''), e.css(r[s], i))
                },
                setMode: function (e, t) {
                    return 'toggle' === t && (t = e.is(':hidden') ? 'show' : 'hide'),
                        t
                },
                getBaseline: function (e, t) {
                    var n,
                        r;
                    switch (e[0]) {
                        case 'top':
                            n = 0;
                            break;
                        case 'middle':
                            n = 0.5;
                            break;
                        case 'bottom':
                            n = 1;
                            break;
                        default:
                            n = e[0] / t.height
                    }
                    switch (e[1]) {
                        case 'left':
                            r = 0;
                            break;
                        case 'center':
                            r = 0.5;
                            break;
                        case 'right':
                            r = 1;
                            break;
                        default:
                            r = e[1] / t.width
                    }
                    return {
                        x: r,
                        y: n
                    }
                },
                createWrapper: function (t) {
                    if (t.parent().is('.ui-effects-wrapper')) return t.parent();
                    var n = {
                            width: t.outerWidth(!0),
                            height: t.outerHeight(!0),
                            'float': t.css('float')
                        },
                        r = e('<div></div>').addClass('ui-effects-wrapper').css({
                            fontSize: '100%',
                            background: 'transparent',
                            border: 'none',
                            margin: 0,
                            padding: 0
                        }),
                        i = {
                            width: t.width(),
                            height: t.height()
                        },
                        s = document.activeElement;
                    try {
                        s.id
                    } catch (o) {
                        s = document.body
                    }
                    return t.wrap(r),
                    (t[0] === s || e.contains(t[0], s)) && e(s).focus(),
                        r = t.parent(),
                        'static' === t.css('position') ? (r.css({
                            position: 'relative'
                        }), t.css({
                            position: 'relative'
                        }))  : (e.extend(n, {
                            position: t.css('position'),
                            zIndex: t.css('z-index')
                        }), e.each(['top',
                            'left',
                            'bottom',
                            'right'], function (e, r) {
                            n[r] = t.css(r),
                            isNaN(parseInt(n[r], 10)) && (n[r] = 'auto')
                        }), t.css({
                            position: 'relative',
                            top: 0,
                            left: 0,
                            right: 'auto',
                            bottom: 'auto'
                        })),
                        t.css(i),
                        r.css(n).show()
                },
                removeWrapper: function (t) {
                    var n = document.activeElement;
                    return t.parent().is('.ui-effects-wrapper') && (t.parent().replaceWith(t), (t[0] === n || e.contains(t[0], n)) && e(n).focus()),
                        t
                },
                setTransition: function (t, n, r, i) {
                    return i = i || {
                        },
                        e.each(n, function (e, n) {
                            var s = t.cssUnit(n);
                            s[0] > 0 && (i[n] = s[0] * r + s[1])
                        }),
                        i
                }
            }),
                e.fn.extend({
                    effect: function () {
                        function o(n) {
                            function u() {
                                e.isFunction(i) && i.call(r[0]),
                                e.isFunction(n) && n()
                            }
                            var r = e(this),
                                i = t.complete,
                                o = t.mode;
                            (r.is(':hidden') ? 'hide' === o : 'show' === o) ? u()  : s.call(r[0], t, u)
                        }
                        var t = r.apply(this, arguments),
                            n = t.mode,
                            i = t.queue,
                            s = e.effects.effect[t.effect];
                        return e.fx.off || !s ? n ? this[n](t.duration, t.complete)  : this.each(function () {
                            t.complete && t.complete.call(this)
                        })  : i === !1 ? this.each(o)  : this.queue(i || 'fx', o)
                    },
                    _show: e.fn.show,
                    show: function (e) {
                        if (i(e)) return this._show.apply(this, arguments);
                        var t = r.apply(this, arguments);
                        return t.mode = 'show',
                            this.effect.call(this, t)
                    },
                    _hide: e.fn.hide,
                    hide: function (e) {
                        if (i(e)) return this._hide.apply(this, arguments);
                        var t = r.apply(this, arguments);
                        return t.mode = 'hide',
                            this.effect.call(this, t)
                    },
                    __toggle: e.fn.toggle,
                    toggle: function (t) {
                        if (i(t) || 'boolean' == typeof t || e.isFunction(t)) return this.__toggle.apply(this, arguments);
                        var n = r.apply(this, arguments);
                        return n.mode = 'toggle',
                            this.effect.call(this, n)
                    },
                    cssUnit: function (t) {
                        var n = this.css(t),
                            r = [
                            ];
                        return e.each(['em',
                            'px',
                            '%',
                            'pt'], function (e, t) {
                            n.indexOf(t) > 0 && (r = [
                                parseFloat(n),
                                t
                            ])
                        }),
                            r
                    }
                })
        }(), function () {
        var t = {
        };
        e.each(['Quad',
            'Cubic',
            'Quart',
            'Quint',
            'Expo'], function (e, n) {
            t[n] = function (t) {
                return Math.pow(t, e + 2)
            }
        }),
            e.extend(t, {
                Sine: function (e) {
                    return 1 - Math.cos(e * Math.PI / 2)
                },
                Circ: function (e) {
                    return 1 - Math.sqrt(1 - e * e)
                },
                Elastic: function (e) {
                    return 0 === e || 1 === e ? e : - Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
                },
                Back: function (e) {
                    return e * e * (3 * e - 2)
                },
                Bounce: function (e) {
                    for (var t, n = 4; e < ((t = Math.pow(2, --n)) - 1) / 11; );
                    return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                }
            }),
            e.each(t, function (t, n) {
                e.easing['easeIn' + t] = n,
                    e.easing['easeOut' + t] = function (e) {
                        return 1 - n(1 - e)
                    },
                    e.easing['easeInOut' + t] = function (e) {
                        return 0.5 > e ? n(2 * e) / 2 : 1 - n( - 2 * e + 2) / 2
                    }
            })
    }()
}(jQuery),
    function (e) {
        var n = /up|down|vertical/,
            r = /up|left|vertical|horizontal/;
        e.effects.effect.blind = function (t, i) {
            var v,
                m,
                g,
                s = e(this),
                o = [
                    'position',
                    'top',
                    'bottom',
                    'left',
                    'right',
                    'height',
                    'width'
                ],
                u = e.effects.setMode(s, t.mode || 'hide'),
                a = t.direction || 'up',
                f = n.test(a),
                l = f ? 'height' : 'width',
                c = f ? 'top' : 'left',
                h = r.test(a),
                p = {
                },
                d = 'show' === u;
            s.parent().is('.ui-effects-wrapper') ? e.effects.save(s.parent(), o)  : e.effects.save(s, o),
                s.show(),
                v = e.effects.createWrapper(s).css({
                    overflow: 'hidden'
                }),
                m = v[l](),
                g = parseFloat(v.css(c)) || 0,
                p[l] = d ? m : 0,
            h || (s.css(f ? 'bottom' : 'right', 0).css(f ? 'top' : 'left', 'auto').css({
                position: 'absolute'
            }), p[c] = d ? g : m + g),
            d && (v.css(l, 0), h || v.css(c, g + m)),
                v.animate(p, {
                    duration: t.duration,
                    easing: t.easing,
                    queue: !1,
                    complete: function () {
                        'hide' === u && s.hide(),
                            e.effects.restore(s, o),
                            e.effects.removeWrapper(s),
                            i()
                    }
                })
        }
    }(jQuery),
    function (e) {
        e.effects.effect.bounce = function (t, n) {
            var m,
                g,
                y,
                r = e(this),
                i = [
                    'position',
                    'top',
                    'bottom',
                    'left',
                    'right',
                    'height',
                    'width'
                ],
                s = e.effects.setMode(r, t.mode || 'effect'),
                o = 'hide' === s,
                u = 'show' === s,
                a = t.direction || 'up',
                f = t.distance,
                l = t.times || 5,
                c = 2 * l + (u || o ? 1 : 0),
                h = t.duration / c,
                p = t.easing,
                d = 'up' === a || 'down' === a ? 'top' : 'left',
                v = 'up' === a || 'left' === a,
                b = r.queue(),
                w = b.length;
            for ((u || o) && i.push('opacity'), e.effects.save(r, i), r.show(), e.effects.createWrapper(r), f || (f = r['top' === d ? 'outerHeight' : 'outerWidth']() / 3), u && (y = {
                opacity: 1
            }, y[d] = 0, r.css('opacity', 0).css(d, v ? 2 * - f : 2 * f).animate(y, h, p)), o && (f /= Math.pow(2, l - 1)), y = {
            }, y[d] = 0, m = 0; l > m; m++) g = {
            },
                g[d] = (v ? '-=' : '+=') + f,
                r.animate(g, h, p).animate(y, h, p),
                f = o ? 2 * f : f / 2;
            o && (g = {
                opacity: 0
            }, g[d] = (v ? '-=' : '+=') + f, r.animate(g, h, p)),
                r.queue(function () {
                    o && r.hide(),
                        e.effects.restore(r, i),
                        e.effects.removeWrapper(r),
                        n()
                }),
            w > 1 && b.splice.apply(b, [
                1,
                0
            ].concat(b.splice(w, c + 1))),
                r.dequeue()
        }
    }(jQuery),
    function (e) {
        e.effects.effect.clip = function (t, n) {
            var h,
                p,
                d,
                r = e(this),
                i = [
                    'position',
                    'top',
                    'bottom',
                    'left',
                    'right',
                    'height',
                    'width'
                ],
                s = e.effects.setMode(r, t.mode || 'hide'),
                o = 'show' === s,
                u = t.direction || 'vertical',
                a = 'vertical' === u,
                f = a ? 'height' : 'width',
                l = a ? 'top' : 'left',
                c = {
                };
            e.effects.save(r, i),
                r.show(),
                h = e.effects.createWrapper(r).css({
                    overflow: 'hidden'
                }),
                p = 'IMG' === r[0].tagName ? h : r,
                d = p[f](),
            o && (p.css(f, 0), p.css(l, d / 2)),
                c[f] = o ? d : 0,
                c[l] = o ? 0 : d / 2,
                p.animate(c, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.easing,
                    complete: function () {
                        o || r.hide(),
                            e.effects.restore(r, i),
                            e.effects.removeWrapper(r),
                            n()
                    }
                })
        }
    }(jQuery),
    function (e) {
        e.effects.effect.drop = function (t, n) {
            var c,
                r = e(this),
                i = [
                    'position',
                    'top',
                    'bottom',
                    'left',
                    'right',
                    'opacity',
                    'height',
                    'width'
                ],
                s = e.effects.setMode(r, t.mode || 'hide'),
                o = 'show' === s,
                u = t.direction || 'left',
                a = 'up' === u || 'down' === u ? 'top' : 'left',
                f = 'up' === u || 'left' === u ? 'pos' : 'neg',
                l = {
                    opacity: o ? 1 : 0
                };
            e.effects.save(r, i),
                r.show(),
                e.effects.createWrapper(r),
                c = t.distance || r['top' === a ? 'outerHeight' : 'outerWidth'](!0) / 2,
            o && r.css('opacity', 0).css(a, 'pos' === f ? - c : c),
                l[a] = (o ? 'pos' === f ? '+=' : '-=' : 'pos' === f ? '-=' : '+=') + c,
                r.animate(l, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.easing,
                    complete: function () {
                        'hide' === s && r.hide(),
                            e.effects.restore(r, i),
                            e.effects.removeWrapper(r),
                            n()
                    }
                })
        }
    }(jQuery),
    function (e) {
        e.effects.effect.explode = function (t, n) {
            function y() {
                c.push(this),
                c.length === r * i && b()
            }
            function b() {
                s.css({
                    visibility: 'visible'
                }),
                    e(c).remove(),
                u || s.hide(),
                    n()
            }
            var h,
                p,
                d,
                v,
                m,
                g,
                r = t.pieces ? Math.round(Math.sqrt(t.pieces))  : 3,
                i = r,
                s = e(this),
                o = e.effects.setMode(s, t.mode || 'hide'),
                u = 'show' === o,
                a = s.show().css('visibility', 'hidden').offset(),
                f = Math.ceil(s.outerWidth() / i),
                l = Math.ceil(s.outerHeight() / r),
                c = [
                ];
            for (h = 0; r > h; h++) for (v = a.top + h * l, g = h - (r - 1) / 2, p = 0; i > p; p++) d = a.left + p * f,
                m = p - (i - 1) / 2,
                s.clone().appendTo('body').wrap('<div></div>').css({
                    position: 'absolute',
                    visibility: 'visible',
                    left: - p * f,
                    top: - h * l
                }).parent().addClass('ui-effects-explode').css({
                    position: 'absolute',
                    overflow: 'hidden',
                    width: f,
                    height: l,
                    left: d + (u ? m * f : 0),
                    top: v + (u ? g * l : 0),
                    opacity: u ? 0 : 1
                }).animate({
                    left: d + (u ? 0 : m * f),
                    top: v + (u ? 0 : g * l),
                    opacity: u ? 1 : 0
                }, t.duration || 500, t.easing, y)
        }
    }(jQuery),
    function (e) {
        e.effects.effect.fade = function (t, n) {
            var r = e(this),
                i = e.effects.setMode(r, t.mode || 'toggle');
            r.animate({
                opacity: i
            }, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: n
            })
        }
    }(jQuery),
    function (e) {
        e.effects.effect.fold = function (t, n) {
            var d,
                v,
                r = e(this),
                i = [
                    'position',
                    'top',
                    'bottom',
                    'left',
                    'right',
                    'height',
                    'width'
                ],
                s = e.effects.setMode(r, t.mode || 'hide'),
                o = 'show' === s,
                u = 'hide' === s,
                a = t.size || 15,
                f = /([0-9]+)%/.exec(a),
                l = !!t.horizFirst,
                c = o !== l,
                h = c ? [
                    'width',
                    'height'
                ] : [
                    'height',
                    'width'
                ],
                p = t.duration / 2,
                m = {
                },
                g = {
                };
            e.effects.save(r, i),
                r.show(),
                d = e.effects.createWrapper(r).css({
                    overflow: 'hidden'
                }),
                v = c ? [
                    d.width(),
                    d.height()
                ] : [
                    d.height(),
                    d.width()
                ],
            f && (a = parseInt(f[1], 10) / 100 * v[u ? 0 : 1]),
            o && d.css(l ? {
                height: 0,
                width: a
            }
                : {
                height: a,
                width: 0
            }),
                m[h[0]] = o ? v[0] : a,
                g[h[1]] = o ? v[1] : 0,
                d.animate(m, p, t.easing).animate(g, p, t.easing, function () {
                    u && r.hide(),
                        e.effects.restore(r, i),
                        e.effects.removeWrapper(r),
                        n()
                })
        }
    }(jQuery),
    function (e) {
        e.effects.effect.highlight = function (t, n) {
            var r = e(this),
                i = [
                    'backgroundImage',
                    'backgroundColor',
                    'opacity'
                ],
                s = e.effects.setMode(r, t.mode || 'show'),
                o = {
                    backgroundColor: r.css('backgroundColor')
                };
            'hide' === s && (o.opacity = 0),
                e.effects.save(r, i),
                r.show().css({
                    backgroundImage: 'none',
                    backgroundColor: t.color || '#ffff99'
                }).animate(o, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.easing,
                    complete: function () {
                        'hide' === s && r.hide(),
                            e.effects.restore(r, i),
                            n()
                    }
                })
        }
    }(jQuery),
    function (e) {
        e.effects.effect.pulsate = function (t, n) {
            var p,
                r = e(this),
                i = e.effects.setMode(r, t.mode || 'show'),
                s = 'show' === i,
                o = 'hide' === i,
                u = s || 'hide' === i,
                a = 2 * (t.times || 5) + (u ? 1 : 0),
                f = t.duration / a,
                l = 0,
                c = r.queue(),
                h = c.length;
            for ((s || !r.is(':visible')) && (r.css('opacity', 0).show(), l = 1), p = 1; a > p; p++) r.animate({
                opacity: l
            }, f, t.easing),
                l = 1 - l;
            r.animate({
                opacity: l
            }, f, t.easing),
                r.queue(function () {
                    o && r.hide(),
                        n()
                }),
            h > 1 && c.splice.apply(c, [
                1,
                0
            ].concat(c.splice(h, a + 1))),
                r.dequeue()
        }
    }(jQuery),
    function (e) {
        e.effects.effect.puff = function (t, n) {
            var r = e(this),
                i = e.effects.setMode(r, t.mode || 'hide'),
                s = 'hide' === i,
                o = parseInt(t.percent, 10) || 150,
                u = o / 100,
                a = {
                    height: r.height(),
                    width: r.width(),
                    outerHeight: r.outerHeight(),
                    outerWidth: r.outerWidth()
                };
            e.extend(t, {
                effect: 'scale',
                queue: !1,
                fade: !0,
                mode: i,
                complete: n,
                percent: s ? o : 100,
                from: s ? a : {
                    height: a.height * u,
                    width: a.width * u,
                    outerHeight: a.outerHeight * u,
                    outerWidth: a.outerWidth * u
                }
            }),
                r.effect(t)
        },
            e.effects.effect.scale = function (t, n) {
                var r = e(this),
                    i = e.extend(!0, {
                    }, t),
                    s = e.effects.setMode(r, t.mode || 'effect'),
                    o = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : 'hide' === s ? 0 : 100),
                    u = t.direction || 'both',
                    a = t.origin,
                    f = {
                        height: r.height(),
                        width: r.width(),
                        outerHeight: r.outerHeight(),
                        outerWidth: r.outerWidth()
                    },
                    l = {
                        y: 'horizontal' !== u ? o / 100 : 1,
                        x: 'vertical' !== u ? o / 100 : 1
                    };
                i.effect = 'size',
                    i.queue = !1,
                    i.complete = n,
                'effect' !== s && (i.origin = a || ['middle',
                        'center'], i.restore = !0),
                    i.from = t.from || ('show' === s ? {
                            height: 0,
                            width: 0,
                            outerHeight: 0,
                            outerWidth: 0
                        }
                            : f),
                    i.to = {
                        height: f.height * l.y,
                        width: f.width * l.x,
                        outerHeight: f.outerHeight * l.y,
                        outerWidth: f.outerWidth * l.x
                    },
                i.fade && ('show' === s && (i.from.opacity = 0, i.to.opacity = 1), 'hide' === s && (i.from.opacity = 1, i.to.opacity = 0)),
                    r.effect(i)
            },
            e.effects.effect.size = function (t, n) {
                var r,
                    i,
                    s,
                    o = e(this),
                    u = [
                        'position',
                        'top',
                        'bottom',
                        'left',
                        'right',
                        'width',
                        'height',
                        'overflow',
                        'opacity'
                    ],
                    a = [
                        'position',
                        'top',
                        'bottom',
                        'left',
                        'right',
                        'overflow',
                        'opacity'
                    ],
                    f = [
                        'width',
                        'height',
                        'overflow'
                    ],
                    l = [
                        'fontSize'
                    ],
                    c = [
                        'borderTopWidth',
                        'borderBottomWidth',
                        'paddingTop',
                        'paddingBottom'
                    ],
                    h = [
                        'borderLeftWidth',
                        'borderRightWidth',
                        'paddingLeft',
                        'paddingRight'
                    ],
                    p = e.effects.setMode(o, t.mode || 'effect'),
                    d = t.restore || 'effect' !== p,
                    v = t.scale || 'both',
                    m = t.origin || ['middle',
                            'center'],
                    g = o.css('position'),
                    y = d ? u : a,
                    b = {
                        height: 0,
                        width: 0,
                        outerHeight: 0,
                        outerWidth: 0
                    };
                'show' === p && o.show(),
                    r = {
                        height: o.height(),
                        width: o.width(),
                        outerHeight: o.outerHeight(),
                        outerWidth: o.outerWidth()
                    },
                    'toggle' === t.mode && 'show' === p ? (o.from = t.to || b, o.to = t.from || r)  : (o.from = t.from || ('show' === p ? b : r), o.to = t.to || ('hide' === p ? b : r)),
                    s = {
                        from: {
                            y: o.from.height / r.height,
                            x: o.from.width / r.width
                        },
                        to: {
                            y: o.to.height / r.height,
                            x: o.to.width / r.width
                        }
                    },
                ('box' === v || 'both' === v) && (s.from.y !== s.to.y && (y = y.concat(c), o.from = e.effects.setTransition(o, c, s.from.y, o.from), o.to = e.effects.setTransition(o, c, s.to.y, o.to)), s.from.x !== s.to.x && (y = y.concat(h), o.from = e.effects.setTransition(o, h, s.from.x, o.from), o.to = e.effects.setTransition(o, h, s.to.x, o.to))),
                ('content' === v || 'both' === v) && s.from.y !== s.to.y && (y = y.concat(l).concat(f), o.from = e.effects.setTransition(o, l, s.from.y, o.from), o.to = e.effects.setTransition(o, l, s.to.y, o.to)),
                    e.effects.save(o, y),
                    o.show(),
                    e.effects.createWrapper(o),
                    o.css('overflow', 'hidden').css(o.from),
                m && (i = e.effects.getBaseline(m, r), o.from.top = (r.outerHeight - o.outerHeight()) * i.y, o.from.left = (r.outerWidth - o.outerWidth()) * i.x, o.to.top = (r.outerHeight - o.to.outerHeight) * i.y, o.to.left = (r.outerWidth - o.to.outerWidth) * i.x),
                    o.css(o.from),
                ('content' === v || 'both' === v) && (c = c.concat(['marginTop',
                    'marginBottom']).concat(l), h = h.concat(['marginLeft',
                    'marginRight']), f = u.concat(c).concat(h), o.find('*[width]').each(function () {
                    var n = e(this),
                        r = {
                            height: n.height(),
                            width: n.width(),
                            outerHeight: n.outerHeight(),
                            outerWidth: n.outerWidth()
                        };
                    d && e.effects.save(n, f),
                        n.from = {
                            height: r.height * s.from.y,
                            width: r.width * s.from.x,
                            outerHeight: r.outerHeight * s.from.y,
                            outerWidth: r.outerWidth * s.from.x
                        },
                        n.to = {
                            height: r.height * s.to.y,
                            width: r.width * s.to.x,
                            outerHeight: r.height * s.to.y,
                            outerWidth: r.width * s.to.x
                        },
                    s.from.y !== s.to.y && (n.from = e.effects.setTransition(n, c, s.from.y, n.from), n.to = e.effects.setTransition(n, c, s.to.y, n.to)),
                    s.from.x !== s.to.x && (n.from = e.effects.setTransition(n, h, s.from.x, n.from), n.to = e.effects.setTransition(n, h, s.to.x, n.to)),
                        n.css(n.from),
                        n.animate(n.to, t.duration, t.easing, function () {
                            d && e.effects.restore(n, f)
                        })
                })),
                    o.animate(o.to, {
                        queue: !1,
                        duration: t.duration,
                        easing: t.easing,
                        complete: function () {
                            0 === o.to.opacity && o.css('opacity', o.from.opacity),
                            'hide' === p && o.hide(),
                                e.effects.restore(o, y),
                            d || ('static' === g ? o.css({
                                position: 'relative',
                                top: o.to.top,
                                left: o.to.left
                            })  : e.each(['top',
                                'left'], function (e, t) {
                                o.css(t, function (t, n) {
                                    var r = parseInt(n, 10),
                                        i = e ? o.to.left : o.to.top;
                                    return 'auto' === n ? i + 'px' : r + i + 'px'
                                })
                            })),
                                e.effects.removeWrapper(o),
                                n()
                        }
                    })
            }
    }(jQuery),
    function (e) {
        e.effects.effect.shake = function (t, n) {
            var m,
                r = e(this),
                i = [
                    'position',
                    'top',
                    'bottom',
                    'left',
                    'right',
                    'height',
                    'width'
                ],
                s = e.effects.setMode(r, t.mode || 'effect'),
                o = t.direction || 'left',
                u = t.distance || 20,
                a = t.times || 3,
                f = 2 * a + 1,
                l = Math.round(t.duration / f),
                c = 'up' === o || 'down' === o ? 'top' : 'left',
                h = 'up' === o || 'left' === o,
                p = {
                },
                d = {
                },
                v = {
                },
                g = r.queue(),
                y = g.length;
            for (e.effects.save(r, i), r.show(), e.effects.createWrapper(r), p[c] = (h ? '-=' : '+=') + u, d[c] = (h ? '+=' : '-=') + 2 * u, v[c] = (h ? '-=' : '+=') + 2 * u, r.animate(p, l, t.easing), m = 1; a > m; m++) r.animate(d, l, t.easing).animate(v, l, t.easing);
            r.animate(d, l, t.easing).animate(p, l / 2, t.easing).queue(function () {
                'hide' === s && r.hide(),
                    e.effects.restore(r, i),
                    e.effects.removeWrapper(r),
                    n()
            }),
            y > 1 && g.splice.apply(g, [
                1,
                0
            ].concat(g.splice(y, f + 1))),
                r.dequeue()
        }
    }(jQuery),
    function (e) {
        e.effects.effect.slide = function (t, n) {
            var l,
                r = e(this),
                i = [
                    'position',
                    'top',
                    'bottom',
                    'left',
                    'right',
                    'width',
                    'height'
                ],
                s = e.effects.setMode(r, t.mode || 'show'),
                o = 'show' === s,
                u = t.direction || 'left',
                a = 'up' === u || 'down' === u ? 'top' : 'left',
                f = 'up' === u || 'left' === u,
                c = {
                };
            e.effects.save(r, i),
                r.show(),
                l = t.distance || r['top' === a ? 'outerHeight' : 'outerWidth'](!0),
                e.effects.createWrapper(r).css({
                    overflow: 'hidden'
                }),
            o && r.css(a, f ? isNaN(l) ? '-' + l : - l : l),
                c[a] = (o ? f ? '+=' : '-=' : f ? '-=' : '+=') + l,
                r.animate(c, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.easing,
                    complete: function () {
                        'hide' === s && r.hide(),
                            e.effects.restore(r, i),
                            e.effects.removeWrapper(r),
                            n()
                    }
                })
        }
    }(jQuery),
    function (e) {
        e.effects.effect.transfer = function (t, n) {
            var r = e(this),
                i = e(t.to),
                s = 'fixed' === i.css('position'),
                o = e('body'),
                u = s ? o.scrollTop()  : 0,
                a = s ? o.scrollLeft()  : 0,
                f = i.offset(),
                l = {
                    top: f.top - u,
                    left: f.left - a,
                    height: i.innerHeight(),
                    width: i.innerWidth()
                },
                c = r.offset(),
                h = e('<div class=\'ui-effects-transfer\'></div>').appendTo(document.body).addClass(t.className).css({
                    top: c.top - u,
                    left: c.left - a,
                    height: r.innerHeight(),
                    width: r.innerWidth(),
                    position: s ? 'fixed' : 'absolute'
                }).animate(l, t.duration, t.easing, function () {
                    h.remove(),
                        n()
                })
        }
    }(jQuery),
    function (a) {
        'function' == typeof define && define.amd ? define(['jquery'], a)  : a(jQuery)
    }(function (a) {
        function z(d) {
            var l,
                e = this,
                f = d.elements.tooltip,
                g = d.options.content.ajax,
                h = '.qtip-ajax',
                i = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                k = c;
            d.checks.ajax = {
                '^content.ajax': function (a, b, c) {
                    'ajax' === b && (g = c),
                        'once' === b ? e.init()  : g && g.url ? e.load()  : f.unbind(h)
                }
            },
                a.extend(e, {
                    init: function () {
                        return g && g.url && f.unbind(h) [g.once ? 'one' : 'bind']('tooltipshow' + h, e.load),
                            e
                    },
                    load: function (b, f) {
                        function r(a, b, c) {
                            !k && 0 !== a.status && d.set('content.text', b + ': ' + c)
                        }
                        function q(b) {
                            k || (m && (b = a('<div/>').append(b.replace(i, '')).find(m)), d.set('content.text', b))
                        }
                        function p() {
                            k || (n && (d.show(b.originalEvent), f = c), a.isFunction(g.complete) && g.complete.apply(this, arguments))
                        }
                        var m,
                            h = g.url.indexOf(' '),
                            j = g.url,
                            n = g.once && !g.loading && f;
                        if (n) try {
                            b.preventDefault()
                        } catch (o) {
                        } else if (b && b.isDefaultPrevented()) return e;
                        l && l.abort && l.abort(),
                        h > - 1 && (m = j.substr(h), j = j.substr(0, h)),
                            l = a.ajax(a.extend({
                                success: q,
                                error: r,
                                context: d
                            }, g, {
                                url: j,
                                complete: p
                            }))
                    },
                    destroy: function () {
                        l && l.abort && l.abort(),
                            k = b
                    }
                }),
                e.init()
        }
        function y(e, h) {
            var i,
                j,
                k,
                l,
                m,
                n = a(this),
                o = a(document.body),
                p = this === document ? o : n,
                q = n.metadata ? n.metadata(h.metadata)  : d,
                r = 'html5' === h.metadata.type && q ? q[h.metadata.name] : d,
                s = n.data(h.metadata.name || 'qtipopts');
            try {
                s = 'string' == typeof s ? new Function('return ' + s) ()  : s
            } catch (u) {
                v('Unable to parse HTML5 attribute data: ' + s)
            }
            if (l = a.extend(b, {
                }, f.defaults, h, 'object' == typeof s ? w(s)  : d, w(r || q)), j = l.position, l.id = e, 'boolean' == typeof l.content.text) {
                if (k = n.attr(l.content.attr), l.content.attr === c || !k) return v('Unable to locate content for tooltip! Aborting render of tooltip on element: ', n),
                    c;
                l.content.text = k
            }
            if (j.container.length || (j.container = o), j.target === c && (j.target = p), l.show.target === c && (l.show.target = p), l.show.solo === b && (l.show.solo = j.container.closest('body')), l.hide.target === c && (l.hide.target = p), l.position.viewport === b && (l.position.viewport = j.container), j.container = j.container.eq(0), j.at = new g.Corner(j.at), j.my = new g.Corner(j.my), a.data(this, 'qtip')) if (l.overwrite) n.qtip('destroy');
            else if (l.overwrite === c) return c;
            return l.suppress && (m = a.attr(this, 'title')) && a(this).removeAttr('title').attr(t, m),
                i = new x(n, l, e, !!k),
                a.data(this, 'qtip', i),
                n.bind('remove.qtip-' + e + ' removeqtip.qtip-' + e, function () {
                    i.destroy()
                }),
                i
        }
        function x(r, s, v, x) {
            function Q() {
                var b = [
                    s.show.target[0],
                    s.hide.target[0],
                    y.rendered && F.tooltip[0],
                    s.position.container[0],
                    s.position.viewport[0],
                    window,
                    document
                ];
                y.rendered ? a([]).pushStack(a.grep(b, function (a) {
                    return 'object' == typeof a
                })).unbind(E)  : s.show.target.unbind(E + '-create')
            }
            function P() {
                function o(a) {
                    D.is(':visible') && y.reposition(a)
                }
                function n(a) {
                    return D.hasClass(l) ? c : (clearTimeout(y.timers.inactive), void (y.timers.inactive = setTimeout(function () {
                        y.hide(a)
                    }, s.hide.inactive)))
                }
                function k(b) {
                    if (D.hasClass(l) || B || C) return c;
                    var f = a(b.relatedTarget || b.target),
                        g = f.closest(m) [0] === D[0],
                        h = f[0] === e.show[0];
                    if (clearTimeout(y.timers.show), clearTimeout(y.timers.hide), 'mouse' === d.target && g || s.hide.fixed && /mouse(out|leave|move)/.test(b.type) && (g || h)) try {
                        b.preventDefault(),
                            b.stopImmediatePropagation()
                    } catch (i) {
                    } else s.hide.delay > 0 ? y.timers.hide = setTimeout(function () {
                        y.hide(b)
                    }, s.hide.delay)  : y.hide(b)
                }
                function j(a) {
                    if (D.hasClass(l)) return c;
                    clearTimeout(y.timers.show),
                        clearTimeout(y.timers.hide);
                    var d = function () {
                        y.toggle(b, a)
                    };
                    s.show.delay > 0 ? y.timers.show = setTimeout(d, s.show.delay)  : d()
                }
                var d = s.position,
                    e = {
                        show: s.show.target,
                        hide: s.hide.target,
                        viewport: a(d.viewport),
                        document: a(document),
                        body: a(document.body),
                        window: a(window)
                    },
                    g = {
                        show: a.trim('' + s.show.event).split(' '),
                        hide: a.trim('' + s.hide.event).split(' ')
                    },
                    i = a.browser.msie && 6 === parseInt(a.browser.version, 10);
                D.bind('mouseenter' + E + ' mouseleave' + E, function (a) {
                    var b = 'mouseenter' === a.type;
                    b && y.focus(a),
                        D.toggleClass(p, b)
                }),
                s.hide.fixed && (e.hide = e.hide.add(D), D.bind('mouseover' + E, function () {
                    D.hasClass(l) || clearTimeout(y.timers.hide)
                })),
                    /mouse(out|leave)/i.test(s.hide.event) ? 'window' === s.hide.leave && e.window.bind('mouseout' + E + ' blur' + E, function (a) {
                        /select|option/.test(a.target) && !a.relatedTarget && y.hide(a)
                    })  : /mouse(over|enter)/i.test(s.show.event) && e.hide.bind('mouseleave' + E, function () {
                        clearTimeout(y.timers.show)
                    }),
                ('' + s.hide.event).indexOf('unfocus') > - 1 && d.container.closest('html').bind('mousedown' + E, function (b) {
                    var c = a(b.target),
                        e = (!D.hasClass(l) && D.is(':visible'), c.parents(m).filter(D[0]).length > 0);
                    c[0] !== r[0] && c[0] !== D[0] && !e && !r.has(c[0]).length && !c.attr('disabled') && y.hide(b)
                }),
                'number' == typeof s.hide.inactive && (e.show.bind('qtip-' + v + '-inactive', n), a.each(f.inactiveEvents, function (a, b) {
                    e.hide.add(F.tooltip).bind(b + E + '-inactive', n)
                })),
                    a.each(g.hide, function (b, c) {
                        var d = a.inArray(c, g.show),
                            f = a(e.hide);
                        d > - 1 && f.add(e.show).length === f.length || 'unfocus' === c ? (e.show.bind(c + E, function (a) {
                            D.is(':visible') ? k(a)  : j(a)
                        }), delete g.show[d])  : e.hide.bind(c + E, k)
                    }),
                    a.each(g.show, function (a, b) {
                        e.show.bind(b + E, j)
                    }),
                'number' == typeof s.hide.distance && e.show.add(D).bind('mousemove' + E, function (a) {
                    var b = G.origin || {
                            },
                        c = s.hide.distance,
                        d = Math.abs;
                    (d(a.pageX - b.pageX) >= c || d(a.pageY - b.pageY) >= c) && y.hide(a)
                }),
                'mouse' === d.target && (e.show.bind('mousemove' + E, function (a) {
                    h = {
                        pageX: a.pageX,
                        pageY: a.pageY,
                        type: 'mousemove'
                    }
                }), d.adjust.mouse && (s.hide.event && (D.bind('mouseleave' + E, function (a) {
                    (a.relatedTarget || a.target) !== e.show[0] && y.hide(a)
                }), F.target.bind('mouseenter' + E + ' mouseleave' + E, function (a) {
                    G.onTarget = 'mouseenter' === a.type
                })), e.document.bind('mousemove' + E, function (a) {
                    G.onTarget && !D.hasClass(l) && D.is(':visible') && y.reposition(a || h)
                }))),
                (d.adjust.resize || e.viewport.length) && (a.event.special.resize ? e.viewport : e.window).bind('resize' + E, o),
                (e.viewport.length || i && 'fixed' === D.css('position')) && e.viewport.bind('scroll' + E, o)
            }
            function O(b, d) {
                function g(b) {
                    function i(e) {
                        e && (delete h[e.src], clearTimeout(y.timers.img[e.src]), a(e).unbind(E)),
                        a.isEmptyObject(h) && (y.redraw(), d !== c && y.reposition(G.event), b())
                    }
                    var g,
                        h = {
                        };
                    return 0 === (g = f.find('img[src]:not([height]):not([width])')).length ? i()  : void g.each(function (b, c) {
                        if (h[c.src] === e) {
                            var d = 0,
                                f = 3;
                            !function g() {
                                return c.height || c.width || d > f ? i(c)  : (d += 1, void (y.timers.img[c.src] = setTimeout(g, 700)))
                            }(),
                                a(c).bind('error' + E + ' load' + E, function () {
                                    i(this)
                                }),
                                h[c.src] = c
                        }
                    })
                }
                var f = F.content;
                return y.rendered && b ? (a.isFunction(b) && (b = b.call(r, G.event, y) || ''), b.jquery && b.length > 0 ? f.empty().append(b.css({
                    display: 'block'
                }))  : f.html(b), y.rendered < 0 ? D.queue('fx', g)  : (C = 0, g(a.noop)), y)  : c
            }
            function N(b, d) {
                var e = F.title;
                return y.rendered && b ? (a.isFunction(b) && (b = b.call(r, G.event, y)), b === c || !b && '' !== b ? J(c)  : (b.jquery && b.length > 0 ? e.empty().append(b.css({
                    display: 'block'
                }))  : e.html(b), y.redraw(), d !== c && y.rendered && D.is(':visible') && y.reposition(G.event), void 0))  : c
            }
            function M(a) {
                var b = F.button,
                    d = F.title;
                return y.rendered ? void (a ? (d || L(), K())  : b.remove())  : c
            }
            function L() {
                var c = A + '-title';
                F.titlebar && J(),
                    F.titlebar = a('<div />', {
                        'class': j + '-titlebar ' + (s.style.widget ? 'ui-widget-header' : '')
                    }).append(F.title = a('<div />', {
                        id: c,
                        'class': j + '-title',
                        'aria-atomic': b
                    })).insertBefore(F.content).delegate('.ui-tooltip-close', 'mousedown keydown mouseup keyup mouseout', function (b) {
                        a(this).toggleClass('ui-state-active ui-state-focus', 'down' === b.type.substr( - 4))
                    }).delegate('.ui-tooltip-close', 'mouseover mouseout', function (b) {
                        a(this).toggleClass('ui-state-hover', 'mouseover' === b.type)
                    }),
                    s.content.title.button ? K()  : y.rendered && y.redraw()
            }
            function K() {
                var b = s.content.title.button,
                    d = 'string' == typeof b,
                    e = d ? b : 'Close tooltip';
                F.button && F.button.remove(),
                    F.button = b.jquery ? b : a('<a />', {
                        'class': 'ui-state-default ui-tooltip-close ' + (s.style.widget ? '' : j + '-icon'),
                        title: e,
                        'aria-label': e
                    }).prepend(a('<span />', {
                        'class': 'ui-icon ui-icon-close',
                        html: '&times;'
                    })),
                    F.button.appendTo(F.titlebar).attr('role', 'button').click(function (a) {
                        return D.hasClass(l) || y.hide(a),
                            c
                    }),
                    y.redraw()
            }
            function J(a) {
                F.title && (F.titlebar.remove(), F.titlebar = F.title = F.button = d, a !== c && y.reposition())
            }
            function I() {
                var a = s.style.widget;
                D.toggleClass(k, a).toggleClass(n, s.style.def && !a),
                    F.content.toggleClass(k + '-content', a),
                F.titlebar && F.titlebar.toggleClass(k + '-header', a),
                F.button && F.button.toggleClass(j + '-icon', !a)
            }
            function H(a) {
                for (var c, b = 0, d = s, e = a.split('.'); d = d[e[b++]]; ) b < e.length && (c = d);
                return [c || s,
                    e.pop()]
            }
            var F,
                G,
                y = this,
                z = document.body,
                A = j + '-' + v,
                B = 0,
                C = 0,
                D = a(),
                E = '.qtip-' + v;
            y.id = v,
                y.rendered = c,
                y.elements = F = {
                    target: r
                },
                y.timers = {
                    img: {
                    }
                },
                y.options = s,
                y.checks = {
                },
                y.plugins = {
                },
                y.cache = G = {
                    event: {
                    },
                    target: a(),
                    disabled: c,
                    attr: x,
                    onTarget: c
                },
                y.checks.builtin = {
                    '^id$': function (d, e, g) {
                        var h = g === b ? f.nextid : g,
                            i = j + '-' + h;
                        h !== c && h.length > 0 && !a('#' + i).length && (D[0].id = i, F.content[0].id = i + '-content', F.title[0].id = i + '-title')
                    },
                    '^content.text$': function (a, b, c) {
                        O(c)
                    },
                    '^content.title.text$': function (a, b, c) {
                        return c ? (!F.title && c && L(), void N(c))  : J()
                    },
                    '^content.title.button$': function (a, b, c) {
                        M(c)
                    },
                    '^position.(my|at)$': function (a, b, c) {
                        'string' == typeof c && (a[b] = new g.Corner(c))
                    },
                    '^position.container$': function (a, b, c) {
                        y.rendered && D.appendTo(c)
                    },
                    '^show.ready$': function () {
                        y.rendered ? y.toggle(b)  : y.render(1)
                    },
                    '^style.classes$': function (a, b, c) {
                        D.attr('class', j + ' qtip ui-helper-reset ' + c)
                    },
                    '^style.widget|content.title': I,
                    '^events.(render|show|move|hide|focus|blur)$': function (b, c, d) {
                        D[(a.isFunction(d) ? '' : 'un') + 'bind']('tooltip' + c, d)
                    },
                    '^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)': function () {
                        var a = s.position;
                        D.attr('tracking', 'mouse' === a.target && a.adjust.mouse),
                            Q(),
                            P()
                    }
                },
                a.extend(y, {
                    render: function (d) {
                        if (y.rendered) return y;
                        var e = s.content.text,
                            f = s.content.title.text,
                            h = s.position,
                            i = a.Event('tooltiprender');
                        return a.attr(r[0], 'aria-describedby', A),
                            D = F.tooltip = a('<div/>', {
                                id: A,
                                'class': j + ' qtip ui-helper-reset ' + n + ' ' + s.style.classes + ' ' + j + '-pos-' + s.position.my.abbrev(),
                                width: s.style.width || '',
                                height: s.style.height || '',
                                tracking: 'mouse' === h.target && h.adjust.mouse,
                                role: 'alert',
                                'aria-live': 'polite',
                                'aria-atomic': c,
                                'aria-describedby': A + '-content',
                                'aria-hidden': b
                            }).toggleClass(l, G.disabled).data('qtip', y).appendTo(s.position.container).append(F.content = a('<div />', {
                                'class': j + '-content',
                                id: A + '-content',
                                'aria-atomic': b
                            })),
                            y.rendered = - 1,
                            B = C = 1,
                        f && (L(), a.isFunction(f) || N(f, c)),
                        a.isFunction(e) || O(e, c),
                            y.rendered = b,
                            I(),
                            a.each(s.events, function (b, c) {
                                a.isFunction(c) && D.bind('toggle' === b ? 'tooltipshow tooltiphide' : 'tooltip' + b, c)
                            }),
                            a.each(g, function () {
                                'render' === this.initialize && this(y)
                            }),
                            P(),
                            D.queue('fx', function (a) {
                                i.originalEvent = G.event,
                                    D.trigger(i, [
                                        y
                                    ]),
                                    B = C = 0,
                                    y.redraw(),
                                (s.show.ready || d) && y.toggle(b, G.event, c),
                                    a()
                            }),
                            y
                    },
                    get: function (a) {
                        var b,
                            c;
                        switch (a.toLowerCase()) {
                            case 'dimensions':
                                b = {
                                    height: D.outerHeight(),
                                    width: D.outerWidth()
                                };
                                break;
                            case 'offset':
                                b = g.offset(D, s.position.container);
                                break;
                            default:
                                c = H(a.toLowerCase()),
                                    b = c[0][c[1]],
                                    b = b.precedance ? b.string()  : b
                        }
                        return b
                    },
                    set: function (e, f) {
                        function m(a, b) {
                            var c,
                                d,
                                e;
                            for (c in k) for (d in k[c]) (e = new RegExp(d, 'i').exec(a)) && (b.push(e), k[c][d].apply(y, b))
                        }
                        var l,
                            g = /^position\.(my|at|adjust|target|container)|style|content|show\.ready/i,
                            h = /^content\.(title|attr)|style/i,
                            i = c,
                            j = c,
                            k = y.checks;
                        return 'string' == typeof e ? (l = e, e = {
                        }, e[l] = f)  : e = a.extend(b, {
                        }, e),
                            a.each(e, function (b, c) {
                                var f,
                                    d = H(b.toLowerCase());
                                f = d[0][d[1]],
                                    d[0][d[1]] = 'object' == typeof c && c.nodeType ? a(c)  : c,
                                    e[b] = [
                                        d[0],
                                        d[1],
                                        c,
                                        f
                                    ],
                                    i = g.test(b) || i,
                                    j = h.test(b) || j
                            }),
                            w(s),
                            B = C = 1,
                            a.each(e, m),
                            B = C = 0,
                        D.is(':visible') && y.rendered && (i && y.reposition('mouse' === s.position.target ? d : G.event), j && y.redraw()),
                            y
                    },
                    toggle: function (e, f) {
                        function r() {
                            e ? (a.browser.msie && D[0].style.removeAttribute('filter'), D.css('overflow', ''), 'string' == typeof i.autofocus && a(i.autofocus, D).focus(), i.target.trigger('qtip-' + v + '-inactive'))  : D.css({
                                display: '',
                                visibility: '',
                                opacity: '',
                                left: '',
                                top: ''
                            }),
                                q = a.Event('tooltip' + (e ? 'visible' : 'hidden')),
                                q.originalEvent = f ? G.event : d,
                                D.trigger(q, [
                                    y
                                ])
                        }
                        if (!y.rendered) return e ? y.render(1)  : y;
                        var q,
                            g = e ? 'show' : 'hide',
                            i = s[g],
                            j = D.is(':visible'),
                            k = !f || i.target.length < 2 || G.target[0] === f.target,
                            l = f && i.target.add(f.target).length !== i.target.length,
                            n = s.position,
                            o = s.content;
                        if ((typeof e).search('boolean|number') && (e = !j), !D.is(':animated') && j === e && k) return y;
                        if (f) {
                            if (/over|enter/.test(f.type) && /out|leave/.test(G.event.type) && s.show.target.add(f.target).length === s.show.target.length && D.has(f.relatedTarget).length) return y;
                            G.event = a.extend({
                            }, f)
                        }
                        return q = a.Event('tooltip' + g),
                            q.originalEvent = f ? G.event : d,
                            D.trigger(q, [
                                y,
                                90
                            ]),
                            q.isDefaultPrevented() ? y : (a.attr(D[0], 'aria-hidden', !e), e ? (G.origin = a.extend({
                            }, h), y.focus(f), a.isFunction(o.text) && O(o.text, c), a.isFunction(o.title.text) && N(o.title.text, c), !u && 'mouse' === n.target && n.adjust.mouse && (a(document).bind('mousemove.qtip', function (a) {
                                h = {
                                    pageX: a.pageX,
                                    pageY: a.pageY,
                                    type: 'mousemove'
                                }
                            }), u = b), y.reposition(f, arguments[2]), (q.solo = !!i.solo) && a(m, i.solo).not(D).qtip('hide', q))  : (clearTimeout(y.timers.show), delete G.origin, u && !a(m + '[tracking="true"]:visible', i.solo).not(D).length && (a(document).unbind('mousemove.qtip'), u = c), y.blur(f)), D.stop(l, !l), i.effect === c ? (D[g](), r.call(D))  : a.isFunction(i.effect) ? (i.effect.call(D, y), D.queue('fx', function (a) {
                                r(),
                                    a()
                            }))  : D.fadeTo(90, e ? 1 : 0, r), e && i.target.trigger('qtip-' + v + '-inactive'), y)
                    },
                    show: function (a) {
                        return y.toggle(b, a)
                    },
                    hide: function (a) {
                        return y.toggle(c, a)
                    },
                    focus: function (b) {
                        if (!y.rendered) return y;
                        var i,
                            c = a(m),
                            d = parseInt(D[0].style.zIndex, 10),
                            e = f.zindex + c.length,
                            g = a.extend({
                            }, b);
                        return D.hasClass(o) || (i = a.Event('tooltipfocus'), i.originalEvent = g, D.trigger(i, [
                            y,
                            e
                        ]), i.isDefaultPrevented() || (d !== e && (c.each(function () {
                            this.style.zIndex > d && (this.style.zIndex = this.style.zIndex - 1)
                        }), c.filter('.' + o).qtip('blur', g)), D.addClass(o) [0].style.zIndex = e)),
                            y
                    },
                    blur: function (b) {
                        var d,
                            c = a.extend({
                            }, b);
                        return D.removeClass(o),
                            d = a.Event('tooltipblur'),
                            d.originalEvent = c,
                            D.trigger(d, [
                                y
                            ]),
                            y
                    },
                    reposition: function (b, d) {
                        if (!y.rendered || B) return y;
                        B = 1;
                        var E,
                            e = s.position.target,
                            f = s.position,
                            i = f.my,
                            k = f.at,
                            l = f.adjust,
                            m = l.method.split(' '),
                            n = D.outerWidth(),
                            o = D.outerHeight(),
                            p = 0,
                            q = 0,
                            r = a.Event('tooltipmove'),
                            t = 'fixed' === D.css('position'),
                            u = f.viewport,
                            v = {
                                left: 0,
                                top: 0
                            },
                            w = f.container,
                            x = c,
                            A = y.plugins.tip,
                            C = {
                                horizontal: m[0],
                                vertical: m[1] = m[1] || m[0],
                                enabled: u.jquery && e[0] !== window && e[0] !== z && 'none' !== l.method,
                                left: function (a) {
                                    var b = 'shift' === C.horizontal,
                                        c = - w.offset.left + u.offset.left + u.scrollLeft,
                                        d = 'left' === i.x ? n : 'right' === i.x ? - n : - n / 2,
                                        e = 'left' === k.x ? p : 'right' === k.x ? - p : - p / 2,
                                        f = A && A.size ? A.size.width || 0 : 0,
                                        g = A && A.corner && 'x' === A.corner.precedance && !b ? f : 0,
                                        h = c - a + g,
                                        j = a + n - u.width - c + g,
                                        m = d - ('x' === i.precedance || i.x === i.y ? e : 0) - ('center' === k.x ? p / 2 : 0),
                                        o = 'center' === i.x;
                                    return b ? (g = A && A.corner && 'y' === A.corner.precedance ? f : 0, m = ('left' === i.x ? 1 : - 1) * d - g, v.left += h > 0 ? h : j > 0 ? - j : 0, v.left = Math.max( - w.offset.left + u.offset.left + (g && 'center' === A.corner.x ? A.offset : 0), a - m, Math.min(Math.max( - w.offset.left + u.offset.left + u.width, a + m), v.left)))  : (h > 0 && ('left' !== i.x || j > 0) ? v.left -= m : j > 0 && ('right' !== i.x || h > 0) && (v.left -= o ? - m : m), v.left !== a && o && (v.left -= l.x), v.left < c && - v.left > j && (v.left = a)),
                                    v.left - a
                                },
                                top: function (a) {
                                    var b = 'shift' === C.vertical,
                                        c = - w.offset.top + u.offset.top + u.scrollTop,
                                        d = 'top' === i.y ? o : 'bottom' === i.y ? - o : - o / 2,
                                        e = 'top' === k.y ? q : 'bottom' === k.y ? - q : - q / 2,
                                        f = A && A.size ? A.size.height || 0 : 0,
                                        g = A && A.corner && 'y' === A.corner.precedance && !b ? f : 0,
                                        h = c - a + g,
                                        j = a + o - u.height - c + g,
                                        m = d - ('y' === i.precedance || i.x === i.y ? e : 0) - ('center' === k.y ? q / 2 : 0),
                                        n = 'center' === i.y;
                                    return b ? (g = A && A.corner && 'x' === A.corner.precedance ? f : 0, m = ('top' === i.y ? 1 : - 1) * d - g, v.top += h > 0 ? h : j > 0 ? - j : 0, v.top = Math.max( - w.offset.top + u.offset.top + (g && 'center' === A.corner.x ? A.offset : 0), a - m, Math.min(Math.max( - w.offset.top + u.offset.top + u.height, a + m), v.top)))  : (h > 0 && ('top' !== i.y || j > 0) ? v.top -= m : j > 0 && ('bottom' !== i.y || h > 0) && (v.top -= n ? - m : m), v.top !== a && n && (v.top -= l.y), v.top < 0 && - v.top > j && (v.top = a)),
                                    v.top - a
                                }
                            };
                        if (a.isArray(e) && 2 === e.length) k = {
                            x: 'left',
                            y: 'top'
                        },
                            v = {
                                left: e[0],
                                top: e[1]
                            };
                        else if ('mouse' === e && (b && b.pageX || G.event.pageX)) k = {
                            x: 'left',
                            y: 'top'
                        },
                            b = (!b || 'resize' !== b.type && 'scroll' !== b.type ? b && b.pageX && 'mousemove' === b.type ? b : !h || !h.pageX || !l.mouse && b && b.pageX ? !l.mouse && G.origin && G.origin.pageX && s.show.distance ? G.origin : b : {
                                    pageX: h.pageX,
                                    pageY: h.pageY
                                }
                                    : G.event) || b || G.event || h || {
                                },
                            v = {
                                top: b.pageY,
                                left: b.pageX
                            };
                        else {
                            if (e = 'event' === e ? b && b.target && 'scroll' !== b.type && 'resize' !== b.type ? G.target = a(b.target)  : G.target : G.target = a(e.jquery ? e : F.target), e = a(e).eq(0), 0 === e.length) return y;
                            e[0] === document || e[0] === window ? (p = g.iOS ? window.innerWidth : e.width(), q = g.iOS ? window.innerHeight : e.height(), e[0] === window && (v = {
                                top: (u || e).scrollTop(),
                                left: (u || e).scrollLeft()
                            }))  : e.is('area') && g.imagemap ? v = g.imagemap(e, k, C.enabled ? m : c)  : 'http://www.w3.org/2000/svg' === e[0].namespaceURI && g.svg ? v = g.svg(e, k)  : (p = e.outerWidth(), q = e.outerHeight(), v = g.offset(e, w)),
                            v.offset && (p = v.width, q = v.height, x = v.flipoffset, v = v.offset),
                            (g.iOS < 4.1 && g.iOS > 3.1 || 4.3 == g.iOS || !g.iOS && t) && (E = a(window), v.left -= E.scrollLeft(), v.top -= E.scrollTop()),
                                v.left += 'right' === k.x ? p : 'center' === k.x ? p / 2 : 0,
                                v.top += 'bottom' === k.y ? q : 'center' === k.y ? q / 2 : 0
                        }
                        return v.left += l.x + ('right' === i.x ? - n : 'center' === i.x ? - n / 2 : 0),
                            v.top += l.y + ('bottom' === i.y ? - o : 'center' === i.y ? - o / 2 : 0),
                            C.enabled ? (u = {
                                elem: u,
                                height: u[(u[0] === window ? 'h' : 'outerH') + 'eight'](),
                                width: u[(u[0] === window ? 'w' : 'outerW') + 'idth'](),
                                scrollLeft: t ? 0 : u.scrollLeft(),
                                scrollTop: t ? 0 : u.scrollTop(),
                                offset: u.offset() || {
                                    left: 0,
                                    top: 0
                                }
                            }, w = {
                                elem: w,
                                scrollLeft: w.scrollLeft(),
                                scrollTop: w.scrollTop(),
                                offset: w.offset() || {
                                    left: 0,
                                    top: 0
                                }
                            }, v.adjusted = {
                                left: 'none' !== C.horizontal ? C.left(v.left)  : 0,
                                top: 'none' !== C.vertical ? C.top(v.top)  : 0
                            }, v.adjusted.left + v.adjusted.top && D.attr('class', D[0].className.replace(/ui-tooltip-pos-\w+/i, j + '-pos-' + i.abbrev())), x && v.adjusted.left && (v.left += x.left), x && v.adjusted.top && (v.top += x.top))  : v.adjusted = {
                                left: 0,
                                top: 0
                            },
                            r.originalEvent = a.extend({
                            }, b),
                            D.trigger(r, [
                                y,
                                v,
                                u.elem || u
                            ]),
                            r.isDefaultPrevented() ? y : (delete v.adjusted, d === c || isNaN(v.left) || isNaN(v.top) || 'mouse' === e || !a.isFunction(f.effect) ? D.css(v)  : a.isFunction(f.effect) && (f.effect.call(D, y, a.extend({
                            }, v)), D.queue(function (b) {
                                a(this).css({
                                    opacity: '',
                                    height: ''
                                }),
                                a.browser.msie && this.style.removeAttribute('filter'),
                                    b()
                            })), B = 0, y)
                    },
                    redraw: function () {
                        if (y.rendered < 1 || C) return y;
                        var b,
                            c,
                            d,
                            e,
                            a = s.position.container;
                        return C = 1,
                        s.style.height && D.css('height', s.style.height),
                            s.style.width ? D.css('width', s.style.width)  : (D.css('width', '').addClass(q), c = D.width() + 1, d = D.css('max-width') || '', e = D.css('min-width') || '', b = (d + e).indexOf('%') > - 1 ? a.width() / 100 : 0, d = (d.indexOf('%') > - 1 ? b : 1) * parseInt(d, 10) || c, e = (e.indexOf('%') > - 1 ? b : 1) * parseInt(e, 10) || 0, c = d + e ? Math.min(Math.max(c, e), d)  : c, D.css('width', Math.round(c)).removeClass(q)),
                            C = 0,
                            y
                    },
                    disable: function (b) {
                        return 'boolean' != typeof b && (b = !D.hasClass(l) && !G.disabled),
                            y.rendered ? (D.toggleClass(l, b), a.attr(D[0], 'aria-disabled', b))  : G.disabled = !!b,
                            y
                    },
                    enable: function () {
                        return y.disable(c)
                    },
                    destroy: function () {
                        var b = r[0],
                            c = a.attr(b, t),
                            d = r.data('qtip');
                        return y.rendered && (D.stop(1, 0).remove(), a.each(y.plugins, function () {
                            this.destroy && this.destroy()
                        })),
                            clearTimeout(y.timers.show),
                            clearTimeout(y.timers.hide),
                            Q(),
                        d && y !== d || (a.removeData(b, 'qtip'), s.suppress && c && (a.attr(b, 'title', c), r.removeAttr(t)), r.removeAttr('aria-describedby')),
                            r.unbind('.qtip-' + v),
                            delete i[y.id],
                            r
                    }
                })
        }
        function w(b) {
            var e;
            return b && 'object' == typeof b ? ((b.metadata === d || 'object' != typeof b.metadata) && (b.metadata = {
                type: b.metadata
            }), 'content' in b && ((b.content === d || 'object' != typeof b.content || b.content.jquery) && (b.content = {
                text: b.content
            }), e = b.content.text || c, !a.isFunction(e) && (!e && !e.attr || e.length < 1 || 'object' == typeof e && !e.jquery) && (b.content.text = c), 'title' in b.content && ((b.content.title === d || 'object' != typeof b.content.title) && (b.content.title = {
                text: b.content.title
            }), e = b.content.title.text || c, !a.isFunction(e) && (!e && !e.attr || e.length < 1 || 'object' == typeof e && !e.jquery) && (b.content.title.text = c))), 'position' in b && (b.position === d || 'object' != typeof b.position) && (b.position = {
                my: b.position,
                at: b.position
            }), 'show' in b && (b.show === d || 'object' != typeof b.show) && (b.show = b.show.jquery ? {
                target: b.show
            }
                : {
                event: b.show
            }), 'hide' in b && (b.hide === d || 'object' != typeof b.hide) && (b.hide = b.hide.jquery ? {
                target: b.hide
            }
                : {
                event: b.hide
            }), 'style' in b && (b.style === d || 'object' != typeof b.style) && (b.style = {
                classes: b.style
            }), a.each(g, function () {
                this.sanitize && this.sanitize(b)
            }), b)  : c
        }
        function v() {
            if (v.history = v.history || [], v.history.push(arguments), 'object' == typeof console) {
                var c,
                    a = console[console.warn ? 'warn' : 'log'],
                    b = Array.prototype.slice.call(arguments);
                'string' == typeof arguments[0] && (b[0] = 'qTip2: ' + b[0]),
                    c = a.apply ? a.apply(console, b)  : a(b)
            }
        }
        var e,
            f,
            g,
            h,
            u,
            b = !0,
            c = !1,
            d = null,
            i = {
            },
            j = 'ui-tooltip',
            k = 'ui-widget',
            l = 'ui-state-disabled',
            m = 'div.qtip.' + j,
            n = j + '-default',
            o = j + '-focus',
            p = j + '-hover',
            q = j + '-fluid',
            s = '_replacedByqTip',
            t = 'oldtitle';
        f = a.fn.qtip = function (g, h, i) {
            var j = ('' + g).toLowerCase(),
                k = d,
                l = a.makeArray(arguments).slice(1),
                m = l[l.length - 1],
                n = this[0] ? a.data(this[0], 'qtip')  : d;
            return !arguments.length && n || 'api' === j ? n : 'string' == typeof g ? (this.each(function () {
                var d = a.data(this, 'qtip');
                if (!d) return b;
                if (m && m.timeStamp && (d.cache.event = m), 'option' !== j && 'options' !== j || !h) d[j] && d[j].apply(d[j], l);
                else {
                    if (!a.isPlainObject(h) && i === e) return k = d.get(h),
                        c;
                    d.set(h, i)
                }
            }), k !== d ? k : this)  : 'object' != typeof g && arguments.length ? void 0 : (n = w(a.extend(b, {
            }, g)), f.bind.call(this, n, m))
        },
            f.bind = function (d, j) {
                return this.each(function (k) {
                    function r(b) {
                        function d() {
                            p.render('object' == typeof b || l.show.ready),
                                m.show.add(m.hide).unbind(o)
                        }
                        return p.cache.disabled ? c : (p.cache.event = a.extend({
                        }, b), p.cache.target = b ? a(b.target)  : [
                            e
                        ], l.show.delay > 0 ? (clearTimeout(p.timers.show), p.timers.show = setTimeout(d, l.show.delay), n.show !== n.hide && m.hide.bind(n.hide, function () {
                            clearTimeout(p.timers.show)
                        }))  : d(), void 0)
                    }
                    var l,
                        m,
                        n,
                        o,
                        p,
                        q;
                    return q = a.isArray(d.id) ? d.id[k] : d.id,
                        q = !q || q === c || q.length < 1 || i[q] ? f.nextid++ : i[q] = q,
                        o = '.qtip-' + q + '-create',
                        p = y.call(this, q, d),
                        p === c ? b : (l = p.options, a.each(g, function () {
                            'initialize' === this.initialize && this(p)
                        }), m = {
                            show: l.show.target,
                            hide: l.hide.target
                        }, n = {
                            show: a.trim('' + l.show.event).replace(/ /g, o + ' ') + o,
                            hide: a.trim('' + l.hide.event).replace(/ /g, o + ' ') + o
                        }, /mouse(over|enter)/i.test(n.show) && !/mouse(out|leave)/i.test(n.hide) && (n.hide += ' mouseleave' + o), m.show.bind('mousemove' + o, function (a) {
                            h = {
                                pageX: a.pageX,
                                pageY: a.pageY,
                                type: 'mousemove'
                            },
                                p.cache.onTarget = b
                        }), m.show.bind(n.show, r), (l.show.ready || l.prerender) && r(j), void 0)
                })
            },
            g = f.plugins = {
                Corner: function (a) {
                    a = ('' + a).replace(/([A-Z])/, ' $1').replace(/middle/gi, 'center').toLowerCase(),
                        this.x = (a.match(/left|right/i) || a.match(/center/) || ['inherit']) [0].toLowerCase(),
                        this.y = (a.match(/top|bottom|center/i) || ['inherit']) [0].toLowerCase();
                    var b = a.charAt(0);
                    this.precedance = 't' === b || 'b' === b ? 'y' : 'x',
                        this.string = function () {
                            return 'y' === this.precedance ? this.y + this.x : this.x + this.y
                        },
                        this.abbrev = function () {
                            var a = this.x.substr(0, 1),
                                b = this.y.substr(0, 1);
                            return a === b ? a : 'c' === a || 'c' !== a && 'c' !== b ? b + a : a + b
                        },
                        this.clone = function () {
                            return {
                                x: this.x,
                                y: this.y,
                                precedance: this.precedance,
                                string: this.string,
                                abbrev: this.abbrev,
                                clone: this.clone
                            }
                        }
                },
                offset: function (b, c) {
                    function j(a, b) {
                        d.left += b * a.scrollLeft(),
                            d.top += b * a.scrollTop()
                    }
                    var g,
                        h,
                        i,
                        d = b.offset(),
                        e = b.closest('body') [0],
                        f = c;
                    if (f) {
                        do 'static' !== f.css('position') && (h = f.position(), d.left -= h.left + (parseInt(f.css('borderLeftWidth'), 10) || 0) + (parseInt(f.css('marginLeft'), 10) || 0), d.top -= h.top + (parseInt(f.css('borderTopWidth'), 10) || 0) + (parseInt(f.css('marginTop'), 10) || 0), !g && 'hidden' !== (i = f.css('overflow')) && 'visible' !== i && (g = f));
                        while ((f = a(f[0].offsetParent)).length);
                        g && g[0] !== e && j(g, 1)
                    }
                    return d
                },
                iOS: parseFloat(('' + (/CPU.*OS ([0-9_]{1,3})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0,
                    '']) [1]).replace('undefined', '3_2').replace('_', '.')) || c,
                fn: {
                    attr: function (b, c) {
                        if (this.length) {
                            var d = this[0],
                                e = 'title',
                                f = a.data(d, 'qtip');
                            if (b === e && f && 'object' == typeof f && f.options.suppress) return arguments.length < 2 ? a.attr(d, t)  : (f && f.options.content.attr === e && f.cache.attr && f.set('content.text', c), this.attr(t, c))
                        }
                        return a.fn['attr' + s].apply(this, arguments)
                    },
                    clone: function (b) {
                        var e = (a([]), a.fn['clone' + s].apply(this, arguments));
                        return b || e.filter('[' + t + ']').attr('title', function () {
                            return a.attr(this, t)
                        }).removeAttr(t),
                            e
                    }
                }
            },
            a.each(g.fn, function (c, d) {
                if (!d || a.fn[c + s]) return b;
                var e = a.fn[c + s] = a.fn[c];
                a.fn[c] = function () {
                    return d.apply(this, arguments) || e.apply(this, arguments)
                }
            }),
        a.ui || (a['cleanData' + s] = a.cleanData, a.cleanData = function (b) {
            for (var d, c = 0; (d = b[c]) !== e; c++) try {
                a(d).triggerHandler('removeqtip')
            } catch (f) {
            }
            a['cleanData' + s](b)
        }),
            f.version = 'nightly',
            f.nextid = 0,
            f.inactiveEvents = 'click dblclick mousedown mouseup mousemove mouseleave mouseenter'.split(' '),
            f.zindex = 15000,
            f.defaults = {
                prerender: c,
                id: c,
                overwrite: b,
                suppress: b,
                content: {
                    text: b,
                    attr: 'title',
                    title: {
                        text: c,
                        button: c
                    }
                },
                position: {
                    my: 'top left',
                    at: 'bottom right',
                    target: c,
                    container: c,
                    viewport: c,
                    adjust: {
                        x: 0,
                        y: 0,
                        mouse: b,
                        resize: b,
                        method: 'flip flip'
                    },
                    effect: function (b, d) {
                        a(this).animate(d, {
                            duration: 200,
                            queue: c
                        })
                    }
                },
                show: {
                    target: c,
                    event: 'mouseenter',
                    effect: b,
                    delay: 90,
                    solo: c,
                    ready: c,
                    autofocus: c
                },
                hide: {
                    target: c,
                    event: 'mouseleave',
                    effect: b,
                    delay: 0,
                    fixed: c,
                    inactive: c,
                    leave: 'window',
                    distance: c
                },
                style: {
                    classes: '',
                    widget: c,
                    width: c,
                    height: c,
                    def: b
                },
                events: {
                    render: d,
                    move: d,
                    show: d,
                    hide: d,
                    toggle: d,
                    visible: d,
                    hidden: d,
                    focus: d,
                    blur: d
                }
            },
            g.ajax = function (a) {
                var b = a.plugins.ajax;
                return 'object' == typeof b ? b : a.plugins.ajax = new z(a)
            },
            g.ajax.initialize = 'render',
            g.ajax.sanitize = function (a) {
                var c,
                    b = a.content;
                b && 'ajax' in b && (c = b.ajax, 'object' != typeof c && (c = a.content.ajax = {
                    url: c
                }), 'boolean' != typeof c.once && c.once && (c.once = !!c.once))
            },
            a.extend(b, f.defaults, {
                content: {
                    ajax: {
                        loading: b,
                        once: b
                    }
                }
            })
    }); var swfobject = function () {
    function f() {
        if (!J) {
            try {
                var Z = j.getElementsByTagName('body') [0].appendChild(C('span'));
                Z.parentNode.removeChild(Z)
            } catch (aa) {
                return
            }
            J = !0;
            for (var X = U.length, Y = 0; X > Y; Y++) U[Y]()
        }
    }
    function K(X) {
        J ? X()  : U[U.length] = X
    }
    function s(Y) {
        if (typeof O.addEventListener != D) O.addEventListener('load', Y, !1);
        else if (typeof j.addEventListener != D) j.addEventListener('load', Y, !1);
        else if (typeof O.attachEvent != D) i(O, 'onload', Y);
        else if ('function' == typeof O.onload) {
            var X = O.onload;
            O.onload = function () {
                X(),
                    Y()
            }
        } else O.onload = Y
    }
    function h() {
        T ? V()  : H()
    }
    function V() {
        var X = j.getElementsByTagName('body') [0],
            aa = C(r);
        aa.setAttribute('type', q);
        var Z = X.appendChild(aa);
        if (Z) {
            var Y = 0;
            !function () {
                if (typeof Z.GetVariable != D) {
                    var ab = Z.GetVariable('$version');
                    ab && (ab = ab.split(' ') [1].split(','), M.pv = [
                        parseInt(ab[0], 10),
                        parseInt(ab[1], 10),
                        parseInt(ab[2], 10)
                    ])
                } else if (10 > Y) return Y++,
                    void setTimeout(arguments.callee, 10);
                X.removeChild(aa),
                    Z = null,
                    H()
            }()
        } else H()
    }
    function H() {
        var ag = o.length;
        if (ag > 0) for (var af = 0; ag > af; af++) {
            var Y = o[af].id,
                ab = o[af].callbackFn,
                aa = {
                    success: !1,
                    id: Y
                };
            if (M.pv[0] > 0) {
                var ae = c(Y);
                if (ae) if (!F(o[af].swfVersion) || M.wk && M.wk < 312) if (o[af].expressInstall && A()) {
                    var ai = {
                    };
                    ai.data = o[af].expressInstall,
                        ai.width = ae.getAttribute('width') || '0',
                        ai.height = ae.getAttribute('height') || '0',
                    ae.getAttribute('class') && (ai.styleclass = ae.getAttribute('class')),
                    ae.getAttribute('align') && (ai.align = ae.getAttribute('align'));
                    for (var ah = {
                    }, X = ae.getElementsByTagName('param'), ac = X.length, ad = 0; ac > ad; ad++) 'movie' != X[ad].getAttribute('name').toLowerCase() && (ah[X[ad].getAttribute('name')] = X[ad].getAttribute('value'));
                    P(ai, ah, Y, ab)
                } else p(ae),
                ab && ab(aa);
                else w(Y, !0),
                    ab && (aa.success = !0, aa.ref = z(Y), ab(aa))
            } else if (w(Y, !0), ab) {
                var Z = z(Y);
                Z && typeof Z.SetVariable != D && (aa.success = !0, aa.ref = Z),
                    ab(aa)
            }
        }
    }
    function z(aa) {
        var X = null,
            Y = c(aa);
        if (Y && 'OBJECT' == Y.nodeName) if (typeof Y.SetVariable != D) X = Y;
        else {
            var Z = Y.getElementsByTagName(r) [0];
            Z && (X = Z)
        }
        return X
    }
    function A() {
        return !a && F('6.0.65') && (M.win || M.mac) && !(M.wk && M.wk < 312)
    }
    function P(aa, ab, X, Z) {
        a = !0,
            E = Z || null,
            B = {
                success: !1,
                id: X
            };
        var ae = c(X);
        if (ae) {
            'OBJECT' == ae.nodeName ? (l = g(ae), Q = null)  : (l = ae, Q = X),
                aa.id = R,
            (typeof aa.width == D || !/%$/.test(aa.width) && parseInt(aa.width, 10) < 310) && (aa.width = '310'),
            (typeof aa.height == D || !/%$/.test(aa.height) && parseInt(aa.height, 10) < 137) && (aa.height = '137'),
                j.title = j.title.slice(0, 47) + ' - Flash Player Installation';
            var ad = M.ie && M.win ? 'ActiveX' : 'PlugIn',
                ac = 'MMredirectURL=' + O.location.toString().replace(/&/g, '%26') + '&MMplayerType=' + ad + '&MMdoctitle=' + j.title;
            if (typeof ab.flashvars != D ? ab.flashvars += '&' + ac : ab.flashvars = ac, M.ie && M.win && 4 != ae.readyState) {
                var Y = C('div');
                X += 'SWFObjectNew',
                    Y.setAttribute('id', X),
                    ae.parentNode.insertBefore(Y, ae),
                    ae.style.display = 'none',
                    function () {
                        4 == ae.readyState ? ae.parentNode.removeChild(ae)  : setTimeout(arguments.callee, 10)
                    }()
            }
            u(aa, ab, X)
        }
    }
    function p(Y) {
        if (M.ie && M.win && 4 != Y.readyState) {
            var X = C('div');
            Y.parentNode.insertBefore(X, Y),
                X.parentNode.replaceChild(g(Y), X),
                Y.style.display = 'none',
                function () {
                    4 == Y.readyState ? Y.parentNode.removeChild(Y)  : setTimeout(arguments.callee, 10)
                }()
        } else Y.parentNode.replaceChild(g(Y), Y)
    }
    function g(ab) {
        var aa = C('div');
        if (M.win && M.ie) aa.innerHTML = ab.innerHTML;
        else {
            var Y = ab.getElementsByTagName(r) [0];
            if (Y) {
                var ad = Y.childNodes;
                if (ad) for (var X = ad.length, Z = 0; X > Z; Z++) 1 == ad[Z].nodeType && 'PARAM' == ad[Z].nodeName || 8 == ad[Z].nodeType || aa.appendChild(ad[Z].cloneNode(!0))
            }
        }
        return aa
    }
    function u(ai, ag, Y) {
        var X,
            aa = c(Y);
        if (M.wk && M.wk < 312) return X;
        if (aa) if (typeof ai.id == D && (ai.id = Y), M.ie && M.win) {
            var ah = '';
            for (var ae in ai) ai[ae] != Object.prototype[ae] && ('data' == ae.toLowerCase() ? ag.movie = ai[ae] : 'styleclass' == ae.toLowerCase() ? ah += ' class="' + ai[ae] + '"' : 'classid' != ae.toLowerCase() && (ah += ' ' + ae + '="' + ai[ae] + '"'));
            var af = '';
            for (var ad in ag) ag[ad] != Object.prototype[ad] && (af += '<param name="' + ad + '" value="' + ag[ad] + '" />');
            aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + '>' + af + '</object>',
                N[N.length] = ai.id,
                X = c(ai.id)
        } else {
            var Z = C(r);
            Z.setAttribute('type', q);
            for (var ac in ai) ai[ac] != Object.prototype[ac] && ('styleclass' == ac.toLowerCase() ? Z.setAttribute('class', ai[ac])  : 'classid' != ac.toLowerCase() && Z.setAttribute(ac, ai[ac]));
            for (var ab in ag) ag[ab] != Object.prototype[ab] && 'movie' != ab.toLowerCase() && e(Z, ab, ag[ab]);
            aa.parentNode.replaceChild(Z, aa),
                X = Z
        }
        return X
    }
    function e(Z, X, Y) {
        var aa = C('param');
        aa.setAttribute('name', X),
            aa.setAttribute('value', Y),
            Z.appendChild(aa)
    }
    function y(Y) {
        var X = c(Y);
        X && 'OBJECT' == X.nodeName && (M.ie && M.win ? (X.style.display = 'none', function () {
            4 == X.readyState ? b(Y)  : setTimeout(arguments.callee, 10)
        }())  : X.parentNode.removeChild(X))
    }
    function b(Z) {
        var Y = c(Z);
        if (Y) {
            for (var X in Y) 'function' == typeof Y[X] && (Y[X] = null);
            Y.parentNode.removeChild(Y)
        }
    }
    function c(Z) {
        var X = null;
        try {
            X = j.getElementById(Z)
        } catch (Y) {
        }
        return X
    }
    function C(X) {
        return j.createElement(X)
    }
    function i(Z, X, Y) {
        Z.attachEvent(X, Y),
            I[I.length] = [
                Z,
                X,
                Y
            ]
    }
    function F(Z) {
        var Y = M.pv,
            X = Z.split('.');
        return X[0] = parseInt(X[0], 10),
            X[1] = parseInt(X[1], 10) || 0,
            X[2] = parseInt(X[2], 10) || 0,
            Y[0] > X[0] || Y[0] == X[0] && Y[1] > X[1] || Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2] ? !0 : !1
    }
    function v(ac, Y, ad, ab) {
        if (!M.ie || !M.mac) {
            var aa = j.getElementsByTagName('head') [0];
            if (aa) {
                var X = ad && 'string' == typeof ad ? ad : 'screen';
                if (ab && (n = null, G = null), !n || G != X) {
                    var Z = C('style');
                    Z.setAttribute('type', 'text/css'),
                        Z.setAttribute('media', X),
                        n = aa.appendChild(Z),
                    M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0 && (n = j.styleSheets[j.styleSheets.length - 1]),
                        G = X
                }
                M.ie && M.win ? n && typeof n.addRule == r && n.addRule(ac, Y)  : n && typeof j.createTextNode != D && n.appendChild(j.createTextNode(ac + ' {' + Y + '}'))
            }
        }
    }
    function w(Z, X) {
        if (m) {
            var Y = X ? 'visible' : 'hidden';
            J && c(Z) ? c(Z).style.visibility = Y : v('#' + Z, 'visibility:' + Y)
        }
    }
    function L(Y) {
        var Z = /[\\\"<>\.;]/,
            X = null != Z.exec(Y);
        return X && typeof encodeURIComponent != D ? encodeURIComponent(Y)  : Y
    }
    {
        var l,
            Q,
            E,
            B,
            n,
            G,
            D = 'undefined',
            r = 'object',
            S = 'Shockwave Flash',
            W = 'ShockwaveFlash.ShockwaveFlash',
            q = 'application/x-shockwave-flash',
            R = 'SWFObjectExprInst',
            x = 'onreadystatechange',
            O = window,
            j = document,
            t = navigator,
            T = !1,
            U = [
                h
            ],
            o = [
            ],
            N = [
            ],
            I = [
            ],
            J = !1,
            a = !1,
            m = !0,
            M = function () {
                var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
                    ah = t.userAgent.toLowerCase(),
                    Y = t.platform.toLowerCase(),
                    ae = /win/.test(Y ? Y : ah),
                    ac = /mac/.test(Y ? Y : ah),
                    af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, '$1'))  : !1,
                    X = !1,
                    ag = [
                        0,
                        0,
                        0
                    ],
                    ab = null;
                if (typeof t.plugins != D && typeof t.plugins[S] == r) ab = t.plugins[S].description,
                !ab || typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin || (T = !0, X = !1, ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, '$1'), ag[0] = parseInt(ab.replace(/^(.*)\..*$/, '$1'), 10), ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, '$1'), 10), ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, '$1'), 10)  : 0);
                else if (typeof O.ActiveXObject != D) try {
                    var ad = new ActiveXObject(W);
                    ad && (ab = ad.GetVariable('$version'), ab && (X = !0, ab = ab.split(' ') [1].split(','), ag = [
                        parseInt(ab[0], 10),
                        parseInt(ab[1], 10),
                        parseInt(ab[2], 10)
                    ]))
                } catch (Z) {
                }
                return {
                    w3: aa,
                    pv: ag,
                    wk: af,
                    ie: X,
                    win: ae,
                    mac: ac
                }
            }();
        !function () {
            M.w3 && ((typeof j.readyState != D && 'complete' == j.readyState || typeof j.readyState == D && (j.getElementsByTagName('body') [0] || j.body)) && f(), J || (typeof j.addEventListener != D && j.addEventListener('DOMContentLoaded', f, !1), M.ie && M.win && (j.attachEvent(x, function () {
                'complete' == j.readyState && (j.detachEvent(x, arguments.callee), f())
            }), O == top && !function () {
                if (!J) {
                    try {
                        j.documentElement.doScroll('left')
                    } catch (X) {
                        return void setTimeout(arguments.callee, 0)
                    }
                    f()
                }
            }()), M.wk && !function () {
                return J ? void 0 : /loaded|complete/.test(j.readyState) ? void f()  : void setTimeout(arguments.callee, 0)
            }(), s(f)))
        }(),
            function () {
                M.ie && M.win && window.attachEvent('onunload', function () {
                    for (var ac = I.length, ab = 0; ac > ab; ab++) I[ab][0].detachEvent(I[ab][1], I[ab][2]);
                    for (var Z = N.length, aa = 0; Z > aa; aa++) y(N[aa]);
                    for (var Y in M) M[Y] = null;
                    M = null;
                    for (var X in swfobject) swfobject[X] = null;
                    swfobject = null
                })
            }()
    }
    return {
        registerObject: function (ab, X, aa, Z) {
            if (M.w3 && ab && X) {
                var Y = {
                };
                Y.id = ab,
                    Y.swfVersion = X,
                    Y.expressInstall = aa,
                    Y.callbackFn = Z,
                    o[o.length] = Y,
                    w(ab, !1)
            } else Z && Z({
                success: !1,
                id: ab
            })
        },
        getObjectById: function (X) {
            return M.w3 ? z(X)  : void 0
        },
        embedSWF: function (ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
            var X = {
                success: !1,
                id: ah
            };
            M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y ? (w(ah, !1), K(function () {
                ae += '',
                    ag += '';
                var aj = {
                };
                if (af && typeof af === r) for (var al in af) aj[al] = af[al];
                aj.data = ab,
                    aj.width = ae,
                    aj.height = ag;
                var am = {
                };
                if (ad && typeof ad === r) for (var ak in ad) am[ak] = ad[ak];
                if (Z && typeof Z === r) for (var ai in Z) typeof am.flashvars != D ? am.flashvars += '&' + ai + '=' + Z[ai] : am.flashvars = ai + '=' + Z[ai];
                if (F(Y)) {
                    var an = u(aj, am, ah);
                    aj.id == ah && w(ah, !0),
                        X.success = !0,
                        X.ref = an
                } else {
                    if (aa && A()) return aj.data = aa,
                        void P(aj, am, ah, ac);
                    w(ah, !0)
                }
                ac && ac(X)
            }))  : ac && ac(X)
        },
        switchOffAutoHideShow: function () {
            m = !1
        },
        ua: M,
        getFlashPlayerVersion: function () {
            return {
                major: M.pv[0],
                minor: M.pv[1],
                release: M.pv[2]
            }
        },
        hasFlashPlayerVersion: F,
        createSWF: function (Z, Y, X) {
            return M.w3 ? u(Z, Y, X)  : void 0
        },
        showExpressInstall: function (Z, aa, X, Y) {
            M.w3 && A() && P(Z, aa, X, Y)
        },
        removeSWF: function (X) {
            M.w3 && y(X)
        },
        createCSS: function (aa, Z, Y, X) {
            M.w3 && v(aa, Z, Y, X)
        },
        addDomLoadEvent: K,
        addLoadEvent: s,
        getQueryParamValue: function (aa) {
            var Z = j.location.search || j.location.hash;
            if (Z) {
                if (/\?/.test(Z) && (Z = Z.split('?') [1]), null == aa) return L(Z);
                for (var Y = Z.split('&'), X = 0; X < Y.length; X++) if (Y[X].substring(0, Y[X].indexOf('=')) == aa) return L(Y[X].substring(Y[X].indexOf('=') + 1))
            }
            return ''
        },
        expressInstallCallback: function () {
            if (a) {
                var X = c(R);
                X && l && (X.parentNode.replaceChild(l, X), Q && (w(Q, !0), M.ie && M.win && (l.style.display = 'block')), E && E(B)),
                    a = !1
            }
        }
    }
}(); !function ($, p) {
    function E(F) {
        return 'string' == typeof F
    }
    function B(G) {
        var F = m.call(arguments, 1);
        return function () {
            return G.apply(this, F.concat(m.call(arguments)))
        }
    }
    function n(F) {
        return F.replace(/^[^#]*#?(.*)$/, '$1')
    }
    function o(F) {
        return F.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/, '$1')
    }
    function f(H, M, F, I, G) {
        var O,
            L,
            K,
            N,
            J;
        return I !== i ? (K = F.match(H ? /^([^#]*)\#?(.*)$/ : /^([^#?]*)\??([^#]*)(#?.*)/), J = K[3] || '', 2 === G && E(I) ? L = I.replace(H ? w : x, '')  : (N = l(K[2]), I = E(I) ? l[H ? D : A](I)  : I, L = 2 === G ? I : 1 === G ? $.extend({
        }, I, N)  : $.extend({
        }, N, I), L = a(L), H && (L = L.replace(h, r))), O = K[1] + (H ? '#' : L || !K[1] ? '?' : '') + L + J)  : O = M(F !== i ? F : p[g][k]),
            O
    }
    function z(H, F, G) {
        return F === i || 'boolean' == typeof F ? (G = F, F = a[H ? D : A]())  : F = E(F) ? F.replace(H ? w : x, '')  : F,
            l(F, G)
    }
    function s(I, G, H, F) {
        return E(H) || 'object' == typeof H || (F = H, H = G, G = i),
            this.each(function () {
                var L = $(this),
                    J = G || j() [(this.nodeName || '').toLowerCase()] || '',
                    K = J && L.attr(J) || '';
                L.attr(J, a[I](K, H, F))
            })
    }
    var i,
        c,
        l,
        v,
        q,
        u,
        j,
        h,
        m = Array.prototype.slice,
        r = decodeURIComponent,
        a = $.param,
        b = $.bbq = $.bbq || {
            },
        e = $.event.special,
        d = 'hashchange',
        A = 'querystring',
        D = 'fragment',
        y = 'elemUrlAttr',
        g = 'location',
        k = 'href',
        t = 'src',
        x = /^.*\?|#.*$/g,
        w = /^.*\#/,
        C = {
        };
    a[A] = B(f, 0, o),
        a[D] = c = B(f, 1, n),
        c.noEscape = function (G) {
            G = G || '';
            var F = $.map(G.split(''), encodeURIComponent);
            h = new RegExp(F.join('|'), 'g')
        },
        c.noEscape(',/'),
        $.deparam = l = function (I, F) {
            var H = {
                },
                G = {
                    'true': !0,
                    'false': !1,
                    'null': null
                };
            return $.each(I.replace(/\+/g, ' ').split('&'), function (L, Q) {
                var J,
                    K = Q.split('='),
                    P = r(K[0]),
                    O = H,
                    M = 0,
                    R = P.split(']['),
                    N = R.length - 1;
                if (/\[/.test(R[0]) && /\]$/.test(R[N]) ? (R[N] = R[N].replace(/\]$/, ''), R = R.shift().split('[').concat(R), N = R.length - 1)  : N = 0, 2 === K.length) if (J = r(K[1]), F && (J = J && !isNaN(J) ? + J : 'undefined' === J ? i : G[J] !== i ? G[J] : J), N) for (; N >= M; M++) P = '' === R[M] ? O.length : R[M],
                    O = O[P] = N > M ? O[P] || (R[M + 1] && isNaN(R[M + 1]) ? {
                    }
                        : [
                    ])  : J;
                else $.isArray(H[P]) ? H[P].push(J)  : H[P] = H[P] !== i ? [
                        H[P],
                        J
                    ] : J;
                else P && (H[P] = F ? i : '')
            }),
                H
        },
        l[A] = B(z, 0),
        l[D] = v = B(z, 1),
    $[y] || ($[y] = function (F) {
        return $.extend(C, F)
    }) ({
        a: k,
        base: k,
        iframe: t,
        img: t,
        input: t,
        form: 'action',
        link: k,
        script: t
    }),
        j = $[y],
        $.fn[A] = B(s, A),
        $.fn[D] = B(s, D),
        b.pushState = q = function (I, F) {
            E(I) && /^#/.test(I) && F === i && (F = 2);
            var H = I !== i,
                G = c(p[g][k], H ? I : {
                }, H ? F : 2);
            p[g][k] = G + (/#/.test(G) ? '' : '#')
        },
        b.getState = u = function (F, G) {
            return F === i || 'boolean' == typeof F ? v(F)  : v(G) [F]
        },
        b.removeState = function (F) {
            var G = {
            };
            F !== i && (G = u(), $.each($.isArray(F) ? F : arguments, function (I, H) {
                delete G[H]
            })),
                q(G, 2)
        },
        e[d] = $.extend(e[d], {
            add: function (F) {
                function G(J) {
                    var I = J[D] = c();
                    J.getState = function (K, L) {
                        return K === i || 'boolean' == typeof K ? l(I, K)  : l(I, L) [K]
                    },
                        H.apply(this, arguments)
                }
                var H;
                return $.isFunction(F) ? (H = F, G)  : (H = F.handler, void (F.handler = G))
            }
        })
}(jQuery, this), function ($, i, b) {
    function a(m) {
        return m = m || i[c][l],
            m.replace(/^[^#]*#?(.*)$/, '$1')
    }
    var j,
        k = $.event.special,
        c = 'location',
        d = 'hashchange',
        l = 'href',
        f = $.browser,
        g = document.documentMode,
        h = f.msie && (g === b || 8 > g),
        e = 'on' + d in i && !h;
    $[d + 'Delay'] = 100,
        k[d] = $.extend(k[d], {
            setup: function () {
                return e ? !1 : void $(j.start)
            },
            teardown: function () {
                return e ? !1 : void $(j.stop)
            }
        }),
        j = function () {
            function p() {
                o = q = function (s) {
                    return s
                },
                h && (n = $('<iframe src="javascript:0"/>').hide().insertAfter('body') [0].contentWindow, q = function () {
                    return a(n.document[c][l])
                }, (o = function (u, s) {
                    if (u !== s) {
                        var t = n.document;
                        t.open().close(),
                            t[c].hash = '#' + u
                    }
                }) (a()))
            }
            var r,
                n,
                o,
                q,
                m = {
                };
            return m.start = function () {
                if (!r) {
                    var t = a();
                    o || p(),
                        function s() {
                            var v = a(),
                                u = q(t);
                            v !== t ? (o(t = v, u), $(i).trigger(d))  : u !== t && (i[c][l] = i[c][l].replace(/#.*/, '') + '#' + u),
                                r = setTimeout(s, $[d + 'Delay'])
                        }()
                }
            },
                m.stop = function () {
                    n || (r && clearTimeout(r), r = 0)
                },
                m
        }()
}(jQuery, this), function (e) {
    function S(e) {
        throw RangeError(g[e])
    }
    function x(e, t) {
        for (var n = e.length; n--; ) e[n] = t(e[n]);
        return e
    }
    function T(e, t) {
        return x(e.split(m), t).join('.')
    }
    function N(e) {
        for (var i, s, t = [
        ], n = 0, r = e.length; r > n; ) i = e.charCodeAt(n++),
            i >= 55296 && 56319 >= i && r > n ? (s = e.charCodeAt(n++), 56320 == (64512 & s) ? t.push(((1023 & i) << 10) + (1023 & s) + 65536)  : (t.push(i), n--))  : t.push(i);
        return t
    }
    function C(e) {
        return x(e, function (e) {
            var t = '';
            return e > 65535 && (e -= 65536, t += w(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e),
                t += w(e)
        }).join('')
    }
    function k(e) {
        return 10 > e - 48 ? e - 22 : 26 > e - 65 ? e - 65 : 26 > e - 97 ? e - 97 : o
    }
    function L(e, t) {
        return e + 22 + 75 * (26 > e) - ((0 != t) << 5)
    }
    function A(e, t, n) {
        var r = 0;
        for (e = n ? b(e / l)  : e >> 1, e += b(e / t); e > y * a >> 1; r += o) e = b(e / y);
        return b(r + (y + 1) * e / (e + f))
    }
    function O(e) {
        var r,
            d,
            v,
            m,
            g,
            y,
            w,
            E,
            x,
            N,
            t = [
            ],
            n = e.length,
            i = 0,
            f = h,
            l = c;
        for (d = e.lastIndexOf(p), 0 > d && (d = 0), v = 0; d > v; ++v) e.charCodeAt(v) >= 128 && S('not-basic'),
            t.push(e.charCodeAt(v));
        for (m = d > 0 ? d + 1 : 0; n > m; ) {
            for (g = i, y = 1, w = o; m >= n && S('invalid-input'), E = k(e.charCodeAt(m++)), (E >= o || E > b((s - i) / y)) && S('overflow'), i += E * y, x = l >= w ? u : w >= l + a ? a : w - l, !(x > E); w += o) N = o - x,
            y > b(s / N) && S('overflow'),
                y *= N;
            r = t.length + 1,
                l = A(i - g, r, 0 == g),
            b(i / r) > s - f && S('overflow'),
                f += b(i / r),
                i %= r,
                t.splice(i++, 0, f)
        }
        return C(t)
    }
    function M(e) {
        var t,
            n,
            r,
            i,
            f,
            l,
            d,
            v,
            m,
            g,
            y,
            x,
            T,
            C,
            k,
            E = [
            ];
        for (e = N(e), x = e.length, t = h, n = 0, f = c, l = 0; x > l; ++l) y = e[l],
        128 > y && E.push(w(y));
        for (r = i = E.length, i && E.push(p); x > r; ) {
            for (d = s, l = 0; x > l; ++l) y = e[l],
            y >= t && d > y && (d = y);
            for (T = r + 1, d - t > b((s - n) / T) && S('overflow'), n += (d - t) * T, t = d, l = 0; x > l; ++l) if (y = e[l], t > y && ++n > s && S('overflow'), y == t) {
                for (v = n, m = o; g = f >= m ? u : m >= f + a ? a : m - f, !(g > v); m += o) k = v - g,
                    C = o - g,
                    E.push(w(L(g + k % C, 0))),
                    v = b(k / C);
                E.push(w(L(v, 0))),
                    f = A(n, T, r == i),
                    n = 0,
                    ++r
            }
            ++n,
                ++t
        }
        return E.join('')
    }
    function _(e) {
        return T(e, function (e) {
            return d.test(e) ? O(e.slice(4).toLowerCase())  : e
        })
    }
    function D(e) {
        return T(e, function (e) {
            return v.test(e) ? 'xn--' + M(e)  : e
        })
    }
    var t = 'object' == typeof exports && exports,
        n = 'object' == typeof module && module && module.exports == t && module,
        r = 'object' == typeof global && global;
    (r.global === r || r.window === r) && (e = r);
    var i,
        E,
        s = 2147483647,
        o = 36,
        u = 1,
        a = 26,
        f = 38,
        l = 700,
        c = 72,
        h = 128,
        p = '-',
        d = /^xn--/,
        v = /[^ -~]/,
        m = /\x2E|\u3002|\uFF0E|\uFF61/g,
        g = {
            overflow: 'Overflow: input needs wider integers to process',
            'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
            'invalid-input': 'Invalid input'
        },
        y = o - u,
        b = Math.floor,
        w = String.fromCharCode;
    if (i = {
            version: '1.2.3',
            ucs2: {
                decode: N,
                encode: C
            },
            decode: O,
            encode: M,
            toASCII: D,
            toUnicode: _
        }, 'function' == typeof define && 'object' == typeof define.amd && define.amd) define('punycode', [
    ], function () {
        return i
    });
    else if (t && !t.nodeType) if (n) n.exports = i;
    else for (E in i) i.hasOwnProperty(E) && (t[E] = i[E]);
    else e.punycode = i
}(this), function (e, t) {
    'object' == typeof exports ? module.exports = t()  : 'function' == typeof define && define.amd ? define('IPv6', t)  : e.IPv6 = t(e)
}(this, function (e) {
    function n(e) {
        var t = e.toLowerCase(),
            n = t.split(':'),
            r = n.length,
            i = 8;
        '' === n[0] && '' === n[1] && '' === n[2] ? (n.shift(), n.shift())  : '' === n[0] && '' === n[1] ? n.shift()  : '' === n[r - 1] && '' === n[r - 2] && n.pop(),
            r = n.length,
        - 1 !== n[r - 1].indexOf('.') && (i = 7);
        var s;
        for (s = 0; r > s && '' !== n[s]; s++);
        if (i > s) {
            for (n.splice(s, 1, '0000'); n.length < i; ) n.splice(s, 0, '0000');
            r = n.length
        }
        for (var o, u = 0; i > u; u++) {
            o = n[u].split('');
            for (var a = 0; 3 > a && ('0' === o[0] && o.length > 1); a++) o.splice(0, 1);
            n[u] = o.join('')
        }
        var f = - 1,
            l = 0,
            c = 0,
            h = - 1,
            p = !1;
        for (u = 0; i > u; u++) p ? '0' === n[u] ? c += 1 : (p = !1, c > l && (f = h, l = c))  : '0' == n[u] && (p = !0, h = u, c = 1);
        c > l && (f = h, l = c),
        l > 1 && n.splice(f, l, ''),
            r = n.length;
        var d = '';
        for ('' === n[0] && (beststr = ':'), u = 0; r > u && (d += n[u], u !== r - 1); u++) d += ':';
        return '' === n[r - 1] && (d += ':'),
            d
    }
    function r() {
        return e.IPv6 === this && (e.IPv6 = t),
            this
    }
    var t = e && e.IPv6;
    return {
        best: n,
        noConflict: r
    }
}), function (e, t) {
    'object' == typeof exports ? module.exports = t()  : 'function' == typeof define && define.amd ? define('SecondLevelDomains', t)  : e.SecondLevelDomains = t(e)
}(this, function (e) {
    var t = e && e.SecondLevelDomains,
        n = Object.prototype.hasOwnProperty,
        r = {
            list: {
                ac: 'com|gov|mil|net|org',
                ae: 'ac|co|gov|mil|name|net|org|pro|sch',
                af: 'com|edu|gov|net|org',
                al: 'com|edu|gov|mil|net|org',
                ao: 'co|ed|gv|it|og|pb',
                ar: 'com|edu|gob|gov|int|mil|net|org|tur',
                at: 'ac|co|gv|or',
                au: 'asn|com|csiro|edu|gov|id|net|org',
                ba: 'co|com|edu|gov|mil|net|org|rs|unbi|unmo|unsa|untz|unze',
                bb: 'biz|co|com|edu|gov|info|net|org|store|tv',
                bh: 'biz|cc|com|edu|gov|info|net|org',
                bn: 'com|edu|gov|net|org',
                bo: 'com|edu|gob|gov|int|mil|net|org|tv',
                br: 'adm|adv|agr|am|arq|art|ato|b|bio|blog|bmd|cim|cng|cnt|com|coop|ecn|edu|eng|esp|etc|eti|far|flog|fm|fnd|fot|fst|g12|ggf|gov|imb|ind|inf|jor|jus|lel|mat|med|mil|mus|net|nom|not|ntr|odo|org|ppg|pro|psc|psi|qsl|rec|slg|srv|tmp|trd|tur|tv|vet|vlog|wiki|zlg',
                bs: 'com|edu|gov|net|org',
                bz: 'du|et|om|ov|rg',
                ca: 'ab|bc|mb|nb|nf|nl|ns|nt|nu|on|pe|qc|sk|yk',
                ck: 'biz|co|edu|gen|gov|info|net|org',
                cn: 'ac|ah|bj|com|cq|edu|fj|gd|gov|gs|gx|gz|ha|hb|he|hi|hl|hn|jl|js|jx|ln|mil|net|nm|nx|org|qh|sc|sd|sh|sn|sx|tj|tw|xj|xz|yn|zj',
                co: 'com|edu|gov|mil|net|nom|org',
                cr: 'ac|c|co|ed|fi|go|or|sa',
                cy: 'ac|biz|com|ekloges|gov|ltd|name|net|org|parliament|press|pro|tm',
                'do': 'art|com|edu|gob|gov|mil|net|org|sld|web',
                dz: 'art|asso|com|edu|gov|net|org|pol',
                ec: 'com|edu|fin|gov|info|med|mil|net|org|pro',
                eg: 'com|edu|eun|gov|mil|name|net|org|sci',
                er: 'com|edu|gov|ind|mil|net|org|rochest|w',
                es: 'com|edu|gob|nom|org',
                et: 'biz|com|edu|gov|info|name|net|org',
                fj: 'ac|biz|com|info|mil|name|net|org|pro',
                fk: 'ac|co|gov|net|nom|org',
                fr: 'asso|com|f|gouv|nom|prd|presse|tm',
                gg: 'co|net|org',
                gh: 'com|edu|gov|mil|org',
                gn: 'ac|com|gov|net|org',
                gr: 'com|edu|gov|mil|net|org',
                gt: 'com|edu|gob|ind|mil|net|org',
                gu: 'com|edu|gov|net|org',
                hk: 'com|edu|gov|idv|net|org',
                id: 'ac|co|go|mil|net|or|sch|web',
                il: 'ac|co|gov|idf|k12|muni|net|org',
                'in': 'ac|co|edu|ernet|firm|gen|gov|i|ind|mil|net|nic|org|res',
                iq: 'com|edu|gov|i|mil|net|org',
                ir: 'ac|co|dnssec|gov|i|id|net|org|sch',
                it: 'edu|gov',
                je: 'co|net|org',
                jo: 'com|edu|gov|mil|name|net|org|sch',
                jp: 'ac|ad|co|ed|go|gr|lg|ne|or',
                ke: 'ac|co|go|info|me|mobi|ne|or|sc',
                kh: 'com|edu|gov|mil|net|org|per',
                ki: 'biz|com|de|edu|gov|info|mob|net|org|tel',
                km: 'asso|com|coop|edu|gouv|k|medecin|mil|nom|notaires|pharmaciens|presse|tm|veterinaire',
                kn: 'edu|gov|net|org',
                kr: 'ac|busan|chungbuk|chungnam|co|daegu|daejeon|es|gangwon|go|gwangju|gyeongbuk|gyeonggi|gyeongnam|hs|incheon|jeju|jeonbuk|jeonnam|k|kg|mil|ms|ne|or|pe|re|sc|seoul|ulsan',
                kw: 'com|edu|gov|net|org',
                ky: 'com|edu|gov|net|org',
                kz: 'com|edu|gov|mil|net|org',
                lb: 'com|edu|gov|net|org',
                lk: 'assn|com|edu|gov|grp|hotel|int|ltd|net|ngo|org|sch|soc|web',
                lr: 'com|edu|gov|net|org',
                lv: 'asn|com|conf|edu|gov|id|mil|net|org',
                ly: 'com|edu|gov|id|med|net|org|plc|sch',
                ma: 'ac|co|gov|m|net|org|press',
                mc: 'asso|tm',
                me: 'ac|co|edu|gov|its|net|org|priv',
                mg: 'com|edu|gov|mil|nom|org|prd|tm',
                mk: 'com|edu|gov|inf|name|net|org|pro',
                ml: 'com|edu|gov|net|org|presse',
                mn: 'edu|gov|org',
                mo: 'com|edu|gov|net|org',
                mt: 'com|edu|gov|net|org',
                mv: 'aero|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro',
                mw: 'ac|co|com|coop|edu|gov|int|museum|net|org',
                mx: 'com|edu|gob|net|org',
                my: 'com|edu|gov|mil|name|net|org|sch',
                nf: 'arts|com|firm|info|net|other|per|rec|store|web',
                ng: 'biz|com|edu|gov|mil|mobi|name|net|org|sch',
                ni: 'ac|co|com|edu|gob|mil|net|nom|org',
                np: 'com|edu|gov|mil|net|org',
                nr: 'biz|com|edu|gov|info|net|org',
                om: 'ac|biz|co|com|edu|gov|med|mil|museum|net|org|pro|sch',
                pe: 'com|edu|gob|mil|net|nom|org|sld',
                ph: 'com|edu|gov|i|mil|net|ngo|org',
                pk: 'biz|com|edu|fam|gob|gok|gon|gop|gos|gov|net|org|web',
                pl: 'art|bialystok|biz|com|edu|gda|gdansk|gorzow|gov|info|katowice|krakow|lodz|lublin|mil|net|ngo|olsztyn|org|poznan|pwr|radom|slupsk|szczecin|torun|warszawa|waw|wroc|wroclaw|zgora',
                pr: 'ac|biz|com|edu|est|gov|info|isla|name|net|org|pro|prof',
                ps: 'com|edu|gov|net|org|plo|sec',
                pw: 'belau|co|ed|go|ne|or',
                ro: 'arts|com|firm|info|nom|nt|org|rec|store|tm|www',
                rs: 'ac|co|edu|gov|in|org',
                sb: 'com|edu|gov|net|org',
                sc: 'com|edu|gov|net|org',
                sh: 'co|com|edu|gov|net|nom|org',
                sl: 'com|edu|gov|net|org',
                st: 'co|com|consulado|edu|embaixada|gov|mil|net|org|principe|saotome|store',
                sv: 'com|edu|gob|org|red',
                sz: 'ac|co|org',
                tr: 'av|bbs|bel|biz|com|dr|edu|gen|gov|info|k12|name|net|org|pol|tel|tsk|tv|web',
                tt: 'aero|biz|cat|co|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel',
                tw: 'club|com|ebiz|edu|game|gov|idv|mil|net|org',
                mu: 'ac|co|com|gov|net|or|org',
                mz: 'ac|co|edu|gov|org',
                na: 'co|com',
                nz: 'ac|co|cri|geek|gen|govt|health|iwi|maori|mil|net|org|parliament|school',
                pa: 'abo|ac|com|edu|gob|ing|med|net|nom|org|sld',
                pt: 'com|edu|gov|int|net|nome|org|publ',
                py: 'com|edu|gov|mil|net|org',
                qa: 'com|edu|gov|mil|net|org',
                re: 'asso|com|nom',
                ru: 'ac|adygeya|altai|amur|arkhangelsk|astrakhan|bashkiria|belgorod|bir|bryansk|buryatia|cbg|chel|chelyabinsk|chita|chukotka|chuvashia|com|dagestan|e-burg|edu|gov|grozny|int|irkutsk|ivanovo|izhevsk|jar|joshkar-ola|kalmykia|kaluga|kamchatka|karelia|kazan|kchr|kemerovo|khabarovsk|khakassia|khv|kirov|koenig|komi|kostroma|kranoyarsk|kuban|kurgan|kursk|lipetsk|magadan|mari|mari-el|marine|mil|mordovia|mosreg|msk|murmansk|nalchik|net|nnov|nov|novosibirsk|nsk|omsk|orenburg|org|oryol|penza|perm|pp|pskov|ptz|rnd|ryazan|sakhalin|samara|saratov|simbirsk|smolensk|spb|stavropol|stv|surgut|tambov|tatarstan|tom|tomsk|tsaritsyn|tsk|tula|tuva|tver|tyumen|udm|udmurtia|ulan-ude|vladikavkaz|vladimir|vladivostok|volgograd|vologda|voronezh|vrn|vyatka|yakutia|yamal|yekaterinburg|yuzhno-sakhalinsk',
                rw: 'ac|co|com|edu|gouv|gov|int|mil|net',
                sa: 'com|edu|gov|med|net|org|pub|sch',
                sd: 'com|edu|gov|info|med|net|org|tv',
                se: 'a|ac|b|bd|c|d|e|f|g|h|i|k|l|m|n|o|org|p|parti|pp|press|r|s|t|tm|u|w|x|y|z',
                sg: 'com|edu|gov|idn|net|org|per',
                sn: 'art|com|edu|gouv|org|perso|univ',
                sy: 'com|edu|gov|mil|net|news|org',
                th: 'ac|co|go|in|mi|net|or',
                tj: 'ac|biz|co|com|edu|go|gov|info|int|mil|name|net|nic|org|test|web',
                tn: 'agrinet|com|defense|edunet|ens|fin|gov|ind|info|intl|mincom|nat|net|org|perso|rnrt|rns|rnu|tourism',
                tz: 'ac|co|go|ne|or',
                ua: 'biz|cherkassy|chernigov|chernovtsy|ck|cn|co|com|crimea|cv|dn|dnepropetrovsk|donetsk|dp|edu|gov|if|in|ivano-frankivsk|kh|kharkov|kherson|khmelnitskiy|kiev|kirovograd|km|kr|ks|kv|lg|lugansk|lutsk|lviv|me|mk|net|nikolaev|od|odessa|org|pl|poltava|pp|rovno|rv|sebastopol|sumy|te|ternopil|uzhgorod|vinnica|vn|zaporizhzhe|zhitomir|zp|zt',
                ug: 'ac|co|go|ne|or|org|sc',
                uk: 'ac|bl|british-library|co|cym|gov|govt|icnet|jet|lea|ltd|me|mil|mod|national-library-scotland|nel|net|nhs|nic|nls|org|orgn|parliament|plc|police|sch|scot|soc',
                us: 'dni|fed|isa|kids|nsn',
                uy: 'com|edu|gub|mil|net|org',
                ve: 'co|com|edu|gob|info|mil|net|org|web',
                vi: 'co|com|k12|net|org',
                vn: 'ac|biz|com|edu|gov|health|info|int|name|net|org|pro',
                ye: 'co|com|gov|ltd|me|net|org|plc',
                yu: 'ac|co|edu|gov|org',
                za: 'ac|agric|alt|bourse|city|co|cybernet|db|edu|gov|grondar|iaccess|imt|inca|landesign|law|mil|net|ngo|nis|nom|olivetti|org|pix|school|tm|web',
                zm: 'ac|co|com|edu|gov|net|org|sch'
            },
            has_expression: null,
            is_expression: null,
            has: function (e) {
                return !!e.match(r.has_expression)
            },
            is: function (e) {
                return !!e.match(r.is_expression)
            },
            get: function (e) {
                var t = e.match(r.has_expression);
                return t && t[1] || null
            },
            noConflict: function () {
                return e.SecondLevelDomains === this && (e.SecondLevelDomains = t),
                    this
            },
            init: function () {
                var e = '';
                for (var t in r.list) if (n.call(r.list, t)) {
                    var i = '(' + r.list[t] + ').' + t;
                    e += '|(' + i + ')'
                }
                r.has_expression = new RegExp('\\.(' + e.substr(1) + ')$', 'i'),
                    r.is_expression = new RegExp('^(' + e.substr(1) + ')$', 'i')
            }
        };
    return r.init(),
        r
}), function (e, t) {
    'object' == typeof exports ? module.exports = t(require('./punycode'), require('./IPv6'), require('./SecondLevelDomains'))  : 'function' == typeof define && define.amd ? define('URI', [
        './punycode',
        './IPv6',
        './SecondLevelDomains'
    ], t)  : e.URI = t(e.punycode, e.IPv6, e.SecondLevelDomains, e)
}(this, function (e, t, n, r) {
    function s(e, t) {
        return this instanceof s ? (void 0 === e && (e = 'undefined' != typeof location ? location.href + '' : ''), this.href(e), void 0 !== t ? this.absoluteTo(t)  : this)  : new s(e, t)
    }
    function a(e) {
        return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1')
    }
    function f(e) {
        return void 0 === e ? 'Undefined' : String(Object.prototype.toString.call(e)).slice(8, - 1)
    }
    function l(e) {
        return 'Array' === f(e)
    }
    function c(e, t) {
        var r,
            i,
            n = {
            };
        if (l(t)) for (r = 0, i = t.length; i > r; r++) n[t[r]] = !0;
        else n[t] = !0;
        for (r = 0, i = e.length; i > r; r++) void 0 !== n[e[r]] && (e.splice(r, 1), i--, r--);
        return e
    }
    function h(e, t) {
        var n,
            r;
        if (l(t)) {
            for (n = 0, r = t.length; r > n; n++) if (!h(e, t[n])) return !1;
            return !0
        }
        var i = f(t);
        for (n = 0, r = e.length; r > n; n++) if ('RegExp' === i) {
            if ('string' == typeof e[n] && e[n].match(t)) return !0
        } else if (e[n] === t) return !0;
        return !1
    }
    function p(e, t) {
        if (!l(e) || !l(t)) return !1;
        if (e.length !== t.length) return !1;
        e.sort(),
            t.sort();
        for (var n = 0, r = e.length; r > n; n++) if (e[n] !== t[n]) return !1;
        return !0
    }
    function d(e) {
        return escape(e)
    }
    function v(e) {
        return encodeURIComponent(e).replace(/[!'()*]/g, d).replace(/\*/g, '%2A')
    }
    var i = r && r.URI,
        o = s.prototype,
        u = Object.prototype.hasOwnProperty;
    s._parts = function () {
        return {
            protocol: null,
            username: null,
            password: null,
            hostname: null,
            urn: null,
            port: null,
            path: null,
            query: null,
            fragment: null,
            duplicateQueryParameters: s.duplicateQueryParameters,
            escapeQuerySpace: s.escapeQuerySpace
        }
    },
        s.duplicateQueryParameters = !1,
        s.escapeQuerySpace = !0,
        s.protocol_expression = /^[a-z][a-z0-9-+-]*$/i,
        s.idn_expression = /[^a-z0-9\.-]/i,
        s.punycode_expression = /(xn--)/i,
        s.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
        s.ip6_expression = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
        s.find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>???��������]))/gi,
        s.defaultPorts = {
            http: '80',
            https: '443',
            ftp: '21',
            gopher: '70',
            ws: '80',
            wss: '443'
        },
        s.invalid_hostname_characters = /[^a-zA-Z0-9\.-]/,
        s.domAttributes = {
            a: 'href',
            blockquote: 'cite',
            link: 'href',
            base: 'href',
            script: 'src',
            form: 'action',
            img: 'src',
            area: 'href',
            iframe: 'src',
            embed: 'src',
            source: 'src',
            track: 'src',
            input: 'src'
        },
        s.getDomAttribute = function (e) {
            if (!e || !e.nodeName) return void 0;
            var t = e.nodeName.toLowerCase();
            return 'input' === t && 'image' !== e.type ? void 0 : s.domAttributes[t]
        },
        s.encode = v,
        s.decode = decodeURIComponent,
        s.iso8859 = function () {
            s.encode = escape,
                s.decode = unescape
        },
        s.unicode = function () {
            s.encode = v,
                s.decode = decodeURIComponent
        },
        s.characters = {
            pathname: {
                encode: {
                    expression: /%(24|26|2B|2C|3B|3D|3A|40)/gi,
                    map: {
                        '%24': '$',
                        '%26': '&',
                        '%2B': '+',
                        '%2C': ',',
                        '%3B': ';',
                        '%3D': '=',
                        '%3A': ':',
                        '%40': '@'
                    }
                },
                decode: {
                    expression: /[\/\?#]/g,
                    map: {
                        '/': '%2F',
                        '?': '%3F',
                        '#': '%23'
                    }
                }
            },
            reserved: {
                encode: {
                    expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/gi,
                    map: {
                        '%3A': ':',
                        '%2F': '/',
                        '%3F': '?',
                        '%23': '#',
                        '%5B': '[',
                        '%5D': ']',
                        '%40': '@',
                        '%21': '!',
                        '%24': '$',
                        '%26': '&',
                        '%27': '\'',
                        '%28': '(',
                        '%29': ')',
                        '%2A': '*',
                        '%2B': '+',
                        '%2C': ',',
                        '%3B': ';',
                        '%3D': '='
                    }
                }
            }
        },
        s.encodeQuery = function (e, t) {
            var n = s.encode(e + '');
            return t ? n.replace(/%20/g, '+')  : n
        },
        s.decodeQuery = function (e, t) {
            e += '';
            try {
                return s.decode(t ? e.replace(/\+/g, '%20')  : e)
            } catch (n) {
                return e
            }
        },
        s.recodePath = function (e) {
            for (var t = (e + '').split('/'), n = 0, r = t.length; r > n; n++) t[n] = s.encodePathSegment(s.decode(t[n]));
            return t.join('/')
        },
        s.decodePath = function (e) {
            for (var t = (e + '').split('/'), n = 0, r = t.length; r > n; n++) t[n] = s.decodePathSegment(t[n]);
            return t.join('/')
        };
    var g,
        m = {
            encode: 'encode',
            decode: 'decode'
        },
        y = function (e, t) {
            return function (n) {
                return s[t](n + '').replace(s.characters[e][t].expression, function (n) {
                    return s.characters[e][t].map[n]
                })
            }
        };
    for (g in m) s[g + 'PathSegment'] = y('pathname', m[g]);
    s.encodeReserved = y('reserved', 'encode'),
        s.parse = function (e, t) {
            var n;
            return t || (t = {
            }),
                n = e.indexOf('#'),
            n > - 1 && (t.fragment = e.substring(n + 1) || null, e = e.substring(0, n)),
                n = e.indexOf('?'),
            n > - 1 && (t.query = e.substring(n + 1) || null, e = e.substring(0, n)),
                '//' === e.substring(0, 2) ? (t.protocol = null, e = e.substring(2), e = s.parseAuthority(e, t))  : (n = e.indexOf(':'), n > - 1 && (t.protocol = e.substring(0, n) || null, t.protocol && !t.protocol.match(s.protocol_expression) ? t.protocol = void 0 : 'file' === t.protocol ? e = e.substring(n + 3)  : '//' === e.substring(n + 1, n + 3) ? (e = e.substring(n + 3), e = s.parseAuthority(e, t))  : (e = e.substring(n + 1), t.urn = !0))),
                t.path = e,
                t
        },
        s.parseHost = function (e, t) {
            var r,
                i,
                n = e.indexOf('/');
            return - 1 === n && (n = e.length),
                '[' === e.charAt(0) ? (r = e.indexOf(']'), t.hostname = e.substring(1, r) || null, t.port = e.substring(r + 2, n) || null)  : e.indexOf(':') !== e.lastIndexOf(':') ? (t.hostname = e.substring(0, n) || null, t.port = null)  : (i = e.substring(0, n).split(':'), t.hostname = i[0] || null, t.port = i[1] || null),
            t.hostname && '/' !== e.substring(n).charAt(0) && (n++, e = '/' + e),
            e.substring(n) || '/'
        },
        s.parseAuthority = function (e, t) {
            return e = s.parseUserinfo(e, t),
                s.parseHost(e, t)
        },
        s.parseUserinfo = function (e, t) {
            var i,
                n = e.indexOf('/'),
                r = n > - 1 ? e.lastIndexOf('@', n)  : e.indexOf('@');
            return r > - 1 && ( - 1 === n || n > r) ? (i = e.substring(0, r).split(':'), t.username = i[0] ? s.decode(i[0])  : null, i.shift(), t.password = i[0] ? s.decode(i.join(':'))  : null, e = e.substring(r + 1))  : (t.username = null, t.password = null),
                e
        },
        s.parseQuery = function (e, t) {
            if (!e) return {
            };
            if (e = e.replace(/&+/g, '&').replace(/^\?*&*|&+$/g, ''), !e) return {
            };
            for (var o, u, a, n = {
            }, r = e.split('&'), i = r.length, f = 0; i > f; f++) o = r[f].split('='),
                u = s.decodeQuery(o.shift(), t),
                a = o.length ? s.decodeQuery(o.join('='), t)  : null,
                n[u] ? ('string' == typeof n[u] && (n[u] = [
                    n[u]
                ]), n[u].push(a))  : n[u] = a;
            return n
        },
        s.build = function (e) {
            var t = '';
            return e.protocol && (t += e.protocol + ':'),
            !e.urn && (t || e.hostname) && (t += '//'),
                t += s.buildAuthority(e) || '',
            'string' == typeof e.path && ('/' !== e.path.charAt(0) && 'string' == typeof e.hostname && (t += '/'), t += e.path),
            'string' == typeof e.query && e.query && (t += '?' + e.query),
            'string' == typeof e.fragment && e.fragment && (t += '#' + e.fragment),
                t
        },
        s.buildHost = function (e) {
            var t = '';
            return e.hostname ? (s.ip6_expression.test(e.hostname) ? t += e.port ? '[' + e.hostname + ']:' + e.port : e.hostname : (t += e.hostname, e.port && (t += ':' + e.port)), t)  : ''
        },
        s.buildAuthority = function (e) {
            return s.buildUserinfo(e) + s.buildHost(e)
        },
        s.buildUserinfo = function (e) {
            var t = '';
            return e.username && (t += s.encode(e.username), e.password && (t += ':' + s.encode(e.password)), t += '@'),
                t
        },
        s.buildQuery = function (e, t, n) {
            var i,
                o,
                a,
                f,
                r = '';
            for (o in e) if (u.call(e, o) && o) if (l(e[o])) for (i = {
            }, a = 0, f = e[o].length; f > a; a++) void 0 !== e[o][a] && void 0 === i[e[o][a] + ''] && (r += '&' + s.buildQueryParameter(o, e[o][a], n), t !== !0 && (i[e[o][a] + ''] = !0));
            else void 0 !== e[o] && (r += '&' + s.buildQueryParameter(o, e[o], n));
            return r.substring(1)
        },
        s.buildQueryParameter = function (e, t, n) {
            return s.encodeQuery(e, n) + (null !== t ? '=' + s.encodeQuery(t, n)  : '')
        },
        s.addQuery = function (e, t, n) {
            if ('object' == typeof t) for (var r in t) u.call(t, r) && s.addQuery(e, r, t[r]);
            else {
                if ('string' != typeof t) throw new TypeError('URI.addQuery() accepts an object, string as the name parameter');
                if (void 0 === e[t]) return void (e[t] = n);
                'string' == typeof e[t] && (e[t] = [
                    e[t]
                ]),
                l(n) || (n = [
                    n
                ]),
                    e[t] = e[t].concat(n)
            }
        },
        s.removeQuery = function (e, t, n) {
            var r,
                i,
                o;
            if (l(t)) for (r = 0, i = t.length; i > r; r++) e[t[r]] = void 0;
            else if ('object' == typeof t) for (o in t) u.call(t, o) && s.removeQuery(e, o, t[o]);
            else {
                if ('string' != typeof t) throw new TypeError('URI.addQuery() accepts an object, string as the first parameter');
                void 0 !== n ? e[t] === n ? e[t] = void 0 : l(e[t]) && (e[t] = c(e[t], n))  : e[t] = void 0
            }
        },
        s.hasQuery = function (e, t, n, r) {
            if ('object' == typeof t) {
                for (var i in t) if (u.call(t, i) && !s.hasQuery(e, i, t[i])) return !1;
                return !0
            }
            if ('string' != typeof t) throw new TypeError('URI.hasQuery() accepts an object, string as the name parameter');
            switch (f(n)) {
                case 'Undefined':
                    return t in e;
                case 'Boolean':
                    var o = Boolean(l(e[t]) ? e[t].length : e[t]);
                    return n === o;
                case 'Function':
                    return !!n(e[t], t, e);
                case 'Array':
                    if (!l(e[t])) return !1;
                    var a = r ? h : p;
                    return a(e[t], n);
                case 'RegExp':
                    return l(e[t]) ? r ? h(e[t], n)  : !1 : Boolean(e[t] && e[t].match(n));
                case 'Number':
                    n = String(n);
                case 'String':
                    return l(e[t]) ? r ? h(e[t], n)  : !1 : e[t] === n;
                default:
                    throw new TypeError('URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter')
            }
        },
        s.commonPath = function (e, t) {
            var r,
                n = Math.min(e.length, t.length);
            for (r = 0; n > r; r++) if (e.charAt(r) !== t.charAt(r)) {
                r--;
                break
            }
            return 1 > r ? e.charAt(0) === t.charAt(0) && '/' === e.charAt(0) ? '/' : '' : (('/' !== e.charAt(r) || '/' !== t.charAt(r)) && (r = e.substring(0, r).lastIndexOf('/')), e.substring(0, r + 1))
        },
        s.withinString = function (e, t) {
            return e.replace(s.find_uri_expression, t)
        },
        s.ensureValidHostname = function (t) {
            if (t.match(s.invalid_hostname_characters)) {
                if (!e) throw new TypeError('Hostname \'' + t + '\' contains characters other than [A-Z0-9.-] and Punycode.js is not available');
                if (e.toASCII(t).match(s.invalid_hostname_characters)) throw new TypeError('Hostname \'' + t + '\' contains characters other than [A-Z0-9.-]')
            }
        },
        s.noConflict = function (e) {
            if (e) {
                var n = {
                    URI: this.noConflict()
                };
                return URITemplate && 'function' == typeof URITemplate.noConflict && (n.URITemplate = URITemplate.noConflict()),
                t && 'function' == typeof t.noConflict && (n.IPv6 = t.noConflict()),
                SecondLevelDomains && 'function' == typeof SecondLevelDomains.noConflict && (n.SecondLevelDomains = SecondLevelDomains.noConflict()),
                    n
            }
            return r.URI === this && (r.URI = i),
                this
        },
        o.build = function (e) {
            return e === !0 ? this._deferred_build = !0 : (void 0 === e || this._deferred_build) && (this._string = s.build(this._parts), this._deferred_build = !1),
                this
        },
        o.clone = function () {
            return new s(this)
        },
        o.valueOf = o.toString = function () {
            return this.build(!1)._string
        },
        m = {
            protocol: 'protocol',
            username: 'username',
            password: 'password',
            hostname: 'hostname',
            port: 'port'
        },
        y = function (e) {
            return function (t, n) {
                return void 0 === t ? this._parts[e] || '' : (this._parts[e] = t || null, this.build(!n), this)
            }
        };
    for (g in m) o[g] = y(m[g]);
    m = {
        query: '?',
        fragment: '#'
    },
        y = function (e, t) {
            return function (n, r) {
                return void 0 === n ? this._parts[e] || '' : (null !== n && (n += '', n.charAt(0) === t && (n = n.substring(1))), this._parts[e] = n, this.build(!r), this)
            }
        };
    for (g in m) o[g] = y(g, m[g]);
    m = {
        search: [
            '?',
            'query'
        ],
        hash: [
            '#',
            'fragment'
        ]
    },
        y = function (e, t) {
            return function (n, r) {
                var i = this[e](n, r);
                return 'string' == typeof i && i.length ? t + i : i
            }
        };
    for (g in m) o[g] = y(m[g][1], m[g][0]);
    o.pathname = function (e, t) {
        if (void 0 === e || e === !0) {
            var n = this._parts.path || (this._parts.hostname ? '/' : '');
            return e ? s.decodePath(n)  : n
        }
        return this._parts.path = e ? s.recodePath(e)  : '/',
            this.build(!t),
            this
    },
        o.path = o.pathname,
        o.href = function (e, t) {
            var n;
            if (void 0 === e) return this.toString();
            this._string = '',
                this._parts = s._parts();
            var r = e instanceof s,
                i = 'object' == typeof e && (e.hostname || e.path || e.pathname);
            if (e.nodeName) {
                var o = s.getDomAttribute(e);
                e = e[o] || '',
                    i = !1
            }
            if (!r && i && void 0 !== e.pathname && (e = e.toString()), 'string' == typeof e) this._parts = s.parse(e, this._parts);
            else {
                if (!r && !i) throw new TypeError('invalid input');
                var a = r ? e._parts : e;
                for (n in a) u.call(this._parts, n) && (this._parts[n] = a[n])
            }
            return this.build(!t),
                this
        },
        o.is = function (e) {
            var t = !1,
                r = !1,
                i = !1,
                o = !1,
                u = !1,
                a = !1,
                f = !1,
                l = !this._parts.urn;
            switch (this._parts.hostname && (l = !1, r = s.ip4_expression.test(this._parts.hostname), i = s.ip6_expression.test(this._parts.hostname), t = r || i, o = !t, u = o && n && n.has(this._parts.hostname), a = o && s.idn_expression.test(this._parts.hostname), f = o && s.punycode_expression.test(this._parts.hostname)), e.toLowerCase()) {
                case 'relative':
                    return l;
                case 'absolute':
                    return !l;
                case 'domain':
                case 'name':
                    return o;
                case 'sld':
                    return u;
                case 'ip':
                    return t;
                case 'ip4':
                case 'ipv4':
                case 'inet4':
                    return r;
                case 'ip6':
                case 'ipv6':
                case 'inet6':
                    return i;
                case 'idn':
                    return a;
                case 'url':
                    return !this._parts.urn;
                case 'urn':
                    return !!this._parts.urn;
                case 'punycode':
                    return f
            }
            return null
        };
    var b = o.protocol,
        w = o.port,
        E = o.hostname;
    o.protocol = function (e, t) {
        if (void 0 !== e && e && (e = e.replace(/:(\/\/)?$/, ''), e.match(/[^a-zA-z0-9\.+-]/))) throw new TypeError('Protocol \'' + e + '\' contains characters other than [A-Z0-9.+-]');
        return b.call(this, e, t)
    },
        o.scheme = o.protocol,
        o.port = function (e, t) {
            if (this._parts.urn) return void 0 === e ? '' : this;
            if (void 0 !== e && (0 === e && (e = null), e && (e += '', ':' === e.charAt(0) && (e = e.substring(1)), e.match(/[^0-9]/)))) throw new TypeError('Port \'' + e + '\' contains characters other than [0-9]');
            return w.call(this, e, t)
        },
        o.hostname = function (e, t) {
            if (this._parts.urn) return void 0 === e ? '' : this;
            if (void 0 !== e) {
                var n = {
                };
                s.parseHost(e, n),
                    e = n.hostname
            }
            return E.call(this, e, t)
        },
        o.host = function (e, t) {
            return this._parts.urn ? void 0 === e ? '' : this : void 0 === e ? this._parts.hostname ? s.buildHost(this._parts)  : '' : (s.parseHost(e, this._parts), this.build(!t), this)
        },
        o.authority = function (e, t) {
            return this._parts.urn ? void 0 === e ? '' : this : void 0 === e ? this._parts.hostname ? s.buildAuthority(this._parts)  : '' : (s.parseAuthority(e, this._parts), this.build(!t), this)
        },
        o.userinfo = function (e, t) {
            if (this._parts.urn) return void 0 === e ? '' : this;
            if (void 0 === e) {
                if (!this._parts.username) return '';
                var n = s.buildUserinfo(this._parts);
                return n.substring(0, n.length - 1)
            }
            return '@' !== e[e.length - 1] && (e += '@'),
                s.parseUserinfo(e, this._parts),
                this.build(!t),
                this
        },
        o.resource = function (e, t) {
            var n;
            return void 0 === e ? this.path() + this.search() + this.hash()  : (n = s.parse(e), this._parts.path = n.path, this._parts.query = n.query, this._parts.fragment = n.fragment, this.build(!t), this)
        },
        o.subdomain = function (e, t) {
            if (this._parts.urn) return void 0 === e ? '' : this;
            if (void 0 === e) {
                if (!this._parts.hostname || this.is('IP')) return '';
                var n = this._parts.hostname.length - this.domain().length - 1;
                return this._parts.hostname.substring(0, n) || ''
            }
            var r = this._parts.hostname.length - this.domain().length,
                i = this._parts.hostname.substring(0, r),
                o = new RegExp('^' + a(i));
            return e && '.' !== e.charAt(e.length - 1) && (e += '.'),
            e && s.ensureValidHostname(e),
                this._parts.hostname = this._parts.hostname.replace(o, e),
                this.build(!t),
                this
        },
        o.domain = function (e, t) {
            if (this._parts.urn) return void 0 === e ? '' : this;
            if ('boolean' == typeof e && (t = e, e = void 0), void 0 === e) {
                if (!this._parts.hostname || this.is('IP')) return '';
                var n = this._parts.hostname.match(/\./g);
                if (n && n.length < 2) return this._parts.hostname;
                var r = this._parts.hostname.length - this.tld(t).length - 1;
                return r = this._parts.hostname.lastIndexOf('.', r - 1) + 1,
                this._parts.hostname.substring(r) || ''
            }
            if (!e) throw new TypeError('cannot set domain empty');
            if (s.ensureValidHostname(e), !this._parts.hostname || this.is('IP')) this._parts.hostname = e;
            else {
                var i = new RegExp(a(this.domain()) + '$');
                this._parts.hostname = this._parts.hostname.replace(i, e)
            }
            return this.build(!t),
                this
        },
        o.tld = function (e, t) {
            if (this._parts.urn) return void 0 === e ? '' : this;
            if ('boolean' == typeof e && (t = e, e = void 0), void 0 === e) {
                if (!this._parts.hostname || this.is('IP')) return '';
                var r = this._parts.hostname.lastIndexOf('.'),
                    i = this._parts.hostname.substring(r + 1);
                return t !== !0 && n && n.list[i.toLowerCase()] ? n.get(this._parts.hostname) || i : i
            }
            var s;
            if (!e) throw new TypeError('cannot set TLD empty');
            if (e.match(/[^a-zA-Z0-9-]/)) {
                if (!n || !n.is(e)) throw new TypeError('TLD \'' + e + '\' contains characters other than [A-Z0-9]');
                s = new RegExp(a(this.tld()) + '$'),
                    this._parts.hostname = this._parts.hostname.replace(s, e)
            } else {
                if (!this._parts.hostname || this.is('IP')) throw new ReferenceError('cannot set TLD on non-domain host');
                s = new RegExp(a(this.tld()) + '$'),
                    this._parts.hostname = this._parts.hostname.replace(s, e)
            }
            return this.build(!t),
                this
        },
        o.directory = function (e, t) {
            if (this._parts.urn) return void 0 === e ? '' : this;
            if (void 0 === e || e === !0) {
                if (!this._parts.path && !this._parts.hostname) return '';
                if ('/' === this._parts.path) return '/';
                var n = this._parts.path.length - this.filename().length - 1,
                    r = this._parts.path.substring(0, n) || (this._parts.hostname ? '/' : '');
                return e ? s.decodePath(r)  : r
            }
            var i = this._parts.path.length - this.filename().length,
                o = this._parts.path.substring(0, i),
                u = new RegExp('^' + a(o));
            return this.is('relative') || (e || (e = '/'), '/' !== e.charAt(0) && (e = '/' + e)),
            e && '/' !== e.charAt(e.length - 1) && (e += '/'),
                e = s.recodePath(e),
                this._parts.path = this._parts.path.replace(u, e),
                this.build(!t),
                this
        },
        o.filename = function (e, t) {
            if (this._parts.urn) return void 0 === e ? '' : this;
            if (void 0 === e || e === !0) {
                if (!this._parts.path || '/' === this._parts.path) return '';
                var n = this._parts.path.lastIndexOf('/'),
                    r = this._parts.path.substring(n + 1);
                return e ? s.decodePathSegment(r)  : r
            }
            var i = !1;
            '/' === e.charAt(0) && (e = e.substring(1)),
            e.match(/\.?\//) && (i = !0);
            var o = new RegExp(a(this.filename()) + '$');
            return e = s.recodePath(e),
                this._parts.path = this._parts.path.replace(o, e),
                i ? this.normalizePath(t)  : this.build(!t),
                this
        },
        o.suffix = function (e, t) {
            if (this._parts.urn) return void 0 === e ? '' : this;
            if (void 0 === e || e === !0) {
                if (!this._parts.path || '/' === this._parts.path) return '';
                var i,
                    o,
                    n = this.filename(),
                    r = n.lastIndexOf('.');
                return - 1 === r ? '' : (i = n.substring(r + 1), o = /^[a-z0-9%]+$/i.test(i) ? i : '', e ? s.decodePathSegment(o)  : o)
            }
            '.' === e.charAt(0) && (e = e.substring(1));
            var f,
                u = this.suffix();
            if (u) f = new RegExp(e ? a(u) + '$' : a('.' + u) + '$');
            else {
                if (!e) return this;
                this._parts.path += '.' + s.recodePath(e)
            }
            return f && (e = s.recodePath(e), this._parts.path = this._parts.path.replace(f, e)),
                this.build(!t),
                this
        },
        o.segment = function (e, t, n) {
            var r = this._parts.urn ? ':' : '/',
                i = this.path(),
                s = '/' === i.substring(0, 1),
                o = i.split(r);
            if (void 0 !== e && 'number' != typeof e && (n = t, t = e, e = void 0), void 0 !== e && 'number' != typeof e) throw new Error('Bad segment \'' + e + '\', must be 0-based integer');
            if (s && o.shift(), 0 > e && (e = Math.max(o.length + e, 0)), void 0 === t) return void 0 === e ? o : o[e];
            if (null === e || void 0 === o[e]) if (l(t)) {
                o = [
                ];
                for (var u = 0, a = t.length; a > u; u++) (t[u].length || o.length && o[o.length - 1].length) && (o.length && !o[o.length - 1].length && o.pop(), o.push(t[u]))
            } else (t || 'string' == typeof t) && ('' === o[o.length - 1] ? o[o.length - 1] = t : o.push(t));
            else t || 'string' == typeof t && t.length ? o[e] = t : o.splice(e, 1);
            return s && o.unshift(''),
                this.path(o.join(r), n)
        },
        o.segmentCoded = function (e, t, n) {
            var r,
                i,
                o;
            if ('number' != typeof e && (n = t, t = e, e = void 0), void 0 === t) {
                if (r = this.segment(e, t, n), l(r)) for (i = 0, o = r.length; o > i; i++) r[i] = s.decode(r[i]);
                else r = void 0 !== r ? s.decode(r)  : void 0;
                return r
            }
            if (l(t)) for (i = 0, o = t.length; o > i; i++) t[i] = s.decode(t[i]);
            else t = 'string' == typeof t ? s.encode(t)  : t;
            return this.segment(e, t, n)
        };
    var S = o.query;
    return o.query = function (e, t) {
        if (e === !0) return s.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        if ('function' == typeof e) {
            var n = s.parseQuery(this._parts.query, this._parts.escapeQuerySpace),
                r = e.call(this, n);
            return this._parts.query = s.buildQuery(r || n, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace),
                this.build(!t),
                this
        }
        return void 0 !== e && 'string' != typeof e ? (this._parts.query = s.buildQuery(e, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), this.build(!t), this)  : S.call(this, e, t)
    },
        o.setQuery = function (e, t, n) {
            var r = s.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
            if ('object' == typeof e) for (var i in e) u.call(e, i) && (r[i] = e[i]);
            else {
                if ('string' != typeof e) throw new TypeError('URI.addQuery() accepts an object, string as the name parameter');
                r[e] = void 0 !== t ? t : null
            }
            return this._parts.query = s.buildQuery(r, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace),
            'string' != typeof e && (n = t),
                this.build(!n),
                this
        },
        o.addQuery = function (e, t, n) {
            var r = s.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
            return s.addQuery(r, e, void 0 === t ? null : t),
                this._parts.query = s.buildQuery(r, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace),
            'string' != typeof e && (n = t),
                this.build(!n),
                this
        },
        o.removeQuery = function (e, t, n) {
            var r = s.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
            return s.removeQuery(r, e, t),
                this._parts.query = s.buildQuery(r, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace),
            'string' != typeof e && (n = t),
                this.build(!n),
                this
        },
        o.hasQuery = function (e, t, n) {
            var r = s.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
            return s.hasQuery(r, e, t, n)
        },
        o.setSearch = o.setQuery,
        o.addSearch = o.addQuery,
        o.removeSearch = o.removeQuery,
        o.hasSearch = o.hasQuery,
        o.normalize = function () {
            return this._parts.urn ? this.normalizeProtocol(!1).normalizeQuery(!1).normalizeFragment(!1).build()  : this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()
        },
        o.normalizeProtocol = function (e) {
            return 'string' == typeof this._parts.protocol && (this._parts.protocol = this._parts.protocol.toLowerCase(), this.build(!e)),
                this
        },
        o.normalizeHostname = function (n) {
            return this._parts.hostname && (this.is('IDN') && e ? this._parts.hostname = e.toASCII(this._parts.hostname)  : this.is('IPv6') && t && (this._parts.hostname = t.best(this._parts.hostname)), this._parts.hostname = this._parts.hostname.toLowerCase(), this.build(!n)),
                this
        },
        o.normalizePort = function (e) {
            return 'string' == typeof this._parts.protocol && this._parts.port === s.defaultPorts[this._parts.protocol] && (this._parts.port = null, this.build(!e)),
                this
        },
        o.normalizePath = function (e) {
            if (this._parts.urn) return this;
            if (!this._parts.path || '/' === this._parts.path) return this;
            var t,
                r,
                i,
                n = this._parts.path;
            for ('/' !== n.charAt(0) && (t = !0, n = '/' + n), n = n.replace(/(\/(\.\/)+)|(\/\.$)/g, '/').replace(/\/{2,}/g, '/'); r = n.indexOf('/../'), - 1 !== r; ) {
                if (0 === r) {
                    n = n.substring(3);
                    break
                }
                i = n.substring(0, r).lastIndexOf('/'),
                - 1 === i && (i = r),
                    n = n.substring(0, i) + n.substring(r + 3)
            }
            return t && this.is('relative') && (n = n.substring(1)),
                n = s.recodePath(n),
                this._parts.path = n,
                this.build(!e),
                this
        },
        o.normalizePathname = o.normalizePath,
        o.normalizeQuery = function (e) {
            return 'string' == typeof this._parts.query && (this._parts.query.length ? this.query(s.parseQuery(this._parts.query, this._parts.escapeQuerySpace))  : this._parts.query = null, this.build(!e)),
                this
        },
        o.normalizeFragment = function (e) {
            return this._parts.fragment || (this._parts.fragment = null, this.build(!e)),
                this
        },
        o.normalizeSearch = o.normalizeQuery,
        o.normalizeHash = o.normalizeFragment,
        o.iso8859 = function () {
            var e = s.encode,
                t = s.decode;
            return s.encode = escape,
                s.decode = decodeURIComponent,
                this.normalize(),
                s.encode = e,
                s.decode = t,
                this
        },
        o.unicode = function () {
            var e = s.encode,
                t = s.decode;
            return s.encode = v,
                s.decode = unescape,
                this.normalize(),
                s.encode = e,
                s.decode = t,
                this
        },
        o.readable = function () {
            var t = this.clone();
            t.username('').password('').normalize();
            var n = '';
            if (t._parts.protocol && (n += t._parts.protocol + '://'), t._parts.hostname && (t.is('punycode') && e ? (n += e.toUnicode(t._parts.hostname), t._parts.port && (n += ':' + t._parts.port))  : n += t.host()), t._parts.hostname && t._parts.path && '/' !== t._parts.path.charAt(0) && (n += '/'), n += t.path(!0), t._parts.query) {
                for (var r = '', i = 0, o = t._parts.query.split('&'), u = o.length; u > i; i++) {
                    var a = (o[i] || '').split('=');
                    r += '&' + s.decodeQuery(a[0], this._parts.escapeQuerySpace).replace(/&/g, '%26'),
                    void 0 !== a[1] && (r += '=' + s.decodeQuery(a[1], this._parts.escapeQuerySpace).replace(/&/g, '%26'))
                }
                n += '?' + r.substring(1)
            }
            return n += s.decodeQuery(t.hash(), !0)
        },
        o.absoluteTo = function (e) {
            var r,
                i,
                o,
                t = this.clone(),
                n = [
                    'protocol',
                    'username',
                    'password',
                    'hostname',
                    'port'
                ];
            if (this._parts.urn) throw new Error('URNs do not have any generally defined hierarchical components');
            if (e instanceof s || (e = new s(e)), t._parts.protocol || (t._parts.protocol = e._parts.protocol), this._parts.hostname) return t;
            for (i = 0; o = n[i]; i++) t._parts[o] = e._parts[o];
            for (n = [
                'query',
                'path'
            ], i = 0; o = n[i]; i++) !t._parts[o] && e._parts[o] && (t._parts[o] = e._parts[o]);
            return '/' !== t.path().charAt(0) && (r = e.directory(), t._parts.path = (r ? r + '/' : '') + t._parts.path, t.normalizePath()),
                t.build(),
                t
        },
        o.relativeTo = function (e) {
            var n,
                r,
                i,
                o,
                u,
                t = this.clone().normalize();
            if (t._parts.urn) throw new Error('URNs do not have any generally defined hierarchical components');
            if (e = new s(e).normalize(), n = t._parts, r = e._parts, o = t.path(), u = e.path(), '/' !== o.charAt(0)) throw new Error('URI is already relative');
            if ('/' !== u.charAt(0)) throw new Error('Cannot calculate a URI relative to another relative URI');
            if (n.protocol === r.protocol && (n.protocol = null), n.username !== r.username || n.password !== r.password) return t.build();
            if (null !== n.protocol || null !== n.username || null !== n.password) return t.build();
            if (n.hostname !== r.hostname || n.port !== r.port) return t.build();
            if (n.hostname = null, n.port = null, o === u) return n.path = '',
                t.build();
            if (i = s.commonPath(t.path(), e.path()), !i) return t.build();
            var a = r.path.substring(i.length).replace(/[^\/]*$/, '').replace(/.*?\//g, '../');
            return n.path = a + n.path.substring(i.length),
                t.build()
        },
        o.equals = function (e) {
            var a,
                f,
                c,
                t = this.clone(),
                n = new s(e),
                r = {
                },
                i = {
                },
                o = {
                };
            if (t.normalize(), n.normalize(), t.toString() === n.toString()) return !0;
            if (a = t.query(), f = n.query(), t.query(''), n.query(''), t.toString() !== n.toString()) return !1;
            if (a.length !== f.length) return !1;
            r = s.parseQuery(a, this._parts.escapeQuerySpace),
                i = s.parseQuery(f, this._parts.escapeQuerySpace);
            for (c in r) if (u.call(r, c)) {
                if (l(r[c])) {
                    if (!p(r[c], i[c])) return !1
                } else if (r[c] !== i[c]) return !1;
                o[c] = !0
            }
            for (c in i) if (u.call(i, c) && !o[c]) return !1;
            return !0
        },
        o.duplicateQueryParameters = function (e) {
            return this._parts.duplicateQueryParameters = !!e,
                this
        },
        o.escapeQuerySpace = function (e) {
            return this._parts.escapeQuerySpace = !!e,
                this
        },
        s
});
