(this.webpackJsonpbrainspark = this.webpackJsonpbrainspark || []).push([[10], {
  468(e, t, a) {
    a.r(t); const n = a(0); const i = a.n(n); const o = a(470); const r = a(446); const l = a(414); const s = a(86); const m = a(30); const c = a(411); const d = Object(c.a)((e) => {
      const t = e.color; const a = e.font; return {
        root: {
          width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',
        },
        wave: { width: '100%', height: '100%' },
        waveRight: {
          position: 'absolute', top: 0, right: 0, zIndex: 1,
        },
        waveLeft: {
          position: 'absolute', width: '100%', height: '100%', bottom: 0, left: 0, zIndex: 0,
        },
        content: { position: 'absolute', zIndex: 1 },
        formCard: { padding: '32px', boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)', borderRadius: 20 },
        form: { display: 'flex', flexDirection: 'column' },
        formItem: { margin: '18px 0', width: 350, outlineColor: t.primary },
        buttonWrapper: {
          marginTop: 10, width: '100%', display: 'flex', justifyContent: 'flex-end',
        },
        title: {
          textAlign: 'center', textTransform: 'uppercase', marginBottom: 21, fontSize: '0.875rem', fontFamily: a.raleway, fontWeight: 800, color: t.primary,
        },
        buttonLogin: { padding: '8px 16px' },
        heading: {
          display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 36,
        },
        headingInfo: { display: 'block', marginLeft: 8 },
        logo: { height: 50, width: 50 },
        headText: { fontWeight: '800', fontSize: '21px' },
        subHeadText: { color: t.dustyOrange, fontSize: '14px', fontWeight: '800' },
        wrapperlogo: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
      };
    }); t.default = function () {
      const e = d(); return i.a.createElement('div', { className: e.root }, i.a.createElement('div', { className: e.wave }, i.a.createElement('img', { src: m.g, className: e.waveRight, alt: 'wave right' }), i.a.createElement('img', { src: m.f, className: e.waveLeft, alt: 'wave left' })), i.a.createElement('div', { className: e.content }, i.a.createElement(s.m, { className: e.wrapperlogo }), i.a.createElement(r.a, { elevation: 0, className: e.formCard }, i.a.createElement(l.a, { className: e.title }, 'Login as Admin'), i.a.createElement('form', { className: e.form, noValidate: !0, autoComplete: 'off' }, i.a.createElement(o.a, {
        id: 'outlined-basic', className: e.formItem, label: 'Username', variant: 'outlined',
      }), i.a.createElement(o.a, {
        id: 'outlined-basic', className: e.formItem, label: 'Password', variant: 'outlined',
      }), i.a.createElement('div', { className: e.buttonWrapper }, i.a.createElement(s.a, { className: e.buttonLogin, type: 'secondary-gradient' }, 'Login'))))));
    };
  },
}]);
