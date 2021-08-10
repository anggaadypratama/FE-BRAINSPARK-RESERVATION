(this.webpackJsonpbrainspark = this.webpackJsonpbrainspark || []).push([[6], {
  376(a, e, t) {
    t.r(e); const n = t(141); const i = t(0); const r = t.n(i); const l = t(422); const o = t(454); const c = t(458); const d = t(457); const m = t(453); const s = t(455); const g = t(462); const u = t(456); const f = t(411); const b = Object(f.a)((a) => {
      const e = a.spacing; const t = a.color; const n = a.font; return {
        root: { width: '100%' },
        container: { maxHeight: '100%' },
        pagination: { marginBottom: 10, marginRight: 20, marginTop: 20 },
        headTable: {
          backgroundColor: t.primary, color: 'white', fontWeight: '800', fontFamily: n.raleway,
        },
        table: { fontFamily: n.raleway, paddingLeft: e(5), paddingRight: e(5) },
      };
    }); const h = [{
      id: 'name', label: 'Name', minWidth: 300, align: 'left',
    }, {
      id: 'date', label: 'Date', minWidth: 100, align: 'left',
    }, {
      id: 'status', label: 'Status', minWidth: 50, align: 'left', format(a) { return a.toLocaleString('en-US'); },
    }, {
      id: 'register', label: 'Total Register', minWidth: 50, align: 'left', format(a) { return a.toLocaleString('en-US'); },
    }, {
      id: 'download', label: 'Download', minWidth: 50, align: 'left', format(a) { return a.toFixed(2); },
    }]; function p(a, e, t, n, i) {
      return {
        name: a, date: e, status: t, register: n, download: i,
      };
    } const w = [p('India', 'IN', 1324171354, 3287263, 'download'), p('China', 'CN', 1403500365, 9596961, 'download'), p('Italy', 'IT', 60483973, 301340, 'download'), p('United States', 'US', 327167434, 9833520), p('Canada', 'CA', 37602103, 9984670), p('Australia', 'AU', 25475400, 7692024), p('Germany', 'DE', 83019200, 357578), p('Ireland', 'IE', 4857e3, 70273), p('Mexico', 'MX', 126577691, 1972550), p('Japan', 'JP', 126317e3, 377973), p('France', 'FR', 67022e3, 640679), p('United Kingdom', 'GB', 67545757, 242495), p('Russia', 'RU', 146793744, 17098246), p('Nigeria', 'NG', 200962417, 923768), p('Brazil', 'BR', 210147125, 8515767)]; e.default = function () {
      const a = b(); const e = Object(i.useState)(0); const t = Object(n.a)(e, 2); const f = t[0]; const p = t[1]; const y = Object(i.useState)(10); const E = Object(n.a)(y, 2); const k = E[0]; const v = E[1]; return r.a.createElement(l.a, { className: a.root, elevation: 0 }, r.a.createElement(m.a, { className: a.container }, r.a.createElement(o.a, { stickyHeader: !0, 'aria-label': 'sticky table' }, r.a.createElement(s.a, null, r.a.createElement(u.a, null, h.map((e) => r.a.createElement(d.a, {
        classes: { head: a.headTable, root: a.table }, key: e.id, align: e.align, style: { minWidth: e.minWidth },
      }, e.label)))), r.a.createElement(c.a, null, w.slice(f * k, f * k + k).map((e) => r.a.createElement(u.a, {
        hover: !0, role: 'checkbox', tabIndex: -1, key: e.code,
      }, h.map((t) => { const n = e[t.id]; return r.a.createElement(d.a, { classes: { root: a.table }, key: t.id, align: t.align }, t.format && typeof n === 'number' ? t.format(n) : n); })))))), r.a.createElement('div', { className: a.pagination }, r.a.createElement(g.a, {
        rowsPerPageOptions: [10, 25, 100], component: 'div', count: w.length, rowsPerPage: k, page: f, onPageChange(a, e) { p(e); }, onRowsPerPageChange(a) { v(+a.target.value), p(0); },
      })));
    };
  },
}]);
