(this.webpackJsonpbrainspark = this.webpackJsonpbrainspark || []).push([[4], {
  371(e, t, n) {
    const a = n(66); const r = n(68); Object.defineProperty(t, '__esModule', { value: !0 }), t.default = void 0; const c = r(n(0)); const l = (0, a(n(67)).default)(c.createElement('path', { d: 'M12 9h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1zm0 4h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1zm0 4h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM20 3H4c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 16H5V5h14v14z' }), 'ListAltRounded'); t.default = l;
  },
  372(e, t, n) {
    const a = n(66); const r = n(68); Object.defineProperty(t, '__esModule', { value: !0 }), t.default = void 0; const c = r(n(0)); const l = (0, a(n(67)).default)(c.createElement('path', { d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z' }), 'AddBox'); t.default = l;
  },
  373(e, t, n) {
    const a = n(66); const r = n(68); Object.defineProperty(t, '__esModule', { value: !0 }), t.default = void 0; const c = r(n(0)); const l = (0, a(n(67)).default)(c.createElement(c.Fragment, null, c.createElement('path', { fillRule: 'evenodd', d: 'M16.67 13.13C18.04 14.06 19 15.32 19 17v3h3c.55 0 1-.45 1-1v-2c0-2.18-3.57-3.47-6.33-3.87z' }), c.createElement('circle', {
      cx: '9', cy: '8', r: '4', fillRule: 'evenodd',
    }), c.createElement('path', { fillRule: 'evenodd', d: 'M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zM9 13c-2.67 0-8 1.34-8 4v2c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-2c0-2.66-5.33-4-8-4z' })), 'PeopleAltRounded'); t.default = l;
  },
  452(e, t, n) {
    n.r(t); const a = n(86); const r = n(0); const c = n.n(r); const l = n(33); const d = n(2); const u = n(373); const o = n.n(u); const s = n(371); const i = n.n(s); const v = n(372); const h = n.n(v); const p = n(14); const m = Object(p.a)(() => n.e(7).then(n.bind(null, 375))); const f = Object(p.a)(() => Promise.all([n.e(3), n.e(6)]).then(n.bind(null, 376))); const b = Object(p.a)(() => n.e(5).then(n.bind(null, 377))); t.default = function () {
      const e = [{
        name: 'List Event', Component: m, Icon: i.a, responders: !1, path: '/',
      }, {
        name: 'Create Event', Component: b, Icon: h.a, responders: !1, path: '/create',
      }, {
        name: 'Data Responders', Component: f, Icon: o.a, responders: !0, path: '/responders',
      }]; return c.a.createElement(l.b, null, c.a.createElement(a.d, { sidebarList: e }, c.a.createElement(d.d, null, e === null || void 0 === e ? void 0 : e.map((e) => { const t = e.name; const n = e.path; const r = e.Component; const l = e.responders; return c.a.createElement(d.b, { path: n, exact: !0, render() { return c.a.createElement(a.c, { name: t, responders: l }, c.a.createElement(r, null)); } }); }))));
    };
  },
}]);
