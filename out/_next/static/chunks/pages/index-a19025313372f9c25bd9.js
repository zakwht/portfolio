_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"/EDR":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("QeBL")}])},"2l/u":function(e,n,t){"use strict";t.r(n),t.d(n,"AboutRoute",(function(){return f}));var r=t("h4VS"),o=t("nKUr"),i=(t("q1tI"),t("5SEd")),a=t("m4+0"),c=t("YFqc"),s=t.n(c);function u(){var e=Object(r.a)(["\n  color: #eee;\n  margin: 64px auto;\n  max-width: 720px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: 0.02rem;\n\n  a {\n    color: mediumseagreen;\n    text-decoration: none;\n    \n    &:hover {\n      transition: all 0.5s;\n      filter: brightness(0.8);\n    }\n  }\n"]);return u=function(){return e},e}var l=i.a.section(u()),f=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(a.a,{title:"About"}),Object(o.jsxs)(l,{children:[Object(o.jsxs)("p",{children:["Hi ",Object(o.jsx)("span",{style:{color:"transparent",textShadow:"0 0 0 mediumseagreen"},children:"\ud83d\udc4b"})," I'm Zak, a software developer based in Victoria, BC."]}),Object(o.jsx)("p",{children:"I'm a 2022 University of Victoria grad, having earned an honours bachelor's degree in computer science with a minor in statistics. Of big interest to me are the fields at the intersection of these two disciplines: data science, machine learning, analysis of algorithms. My other academic interests include machine ethics, graph theory, and optimization algorithms."}),Object(o.jsx)("p",{children:"Most of my development experience involves building web applications with React & TypeScript, with a focus on encompassing the Semantic Web. I've worked within the scope of many programming paradigms, using languages including Java, Python, Racket, and R."}),Object(o.jsxs)("p",{children:["Checkout my ",Object(o.jsx)(s.a,{href:"/projects",children:"projects"}),"!"]})]})]})};n.default=f},QeBL:function(e,n,t){"use strict";t.r(n),t.d(n,"HomeRoute",(function(){return r}));var r=t("2l/u").default;n.default=r},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var i=o(t("q1tI")),a=t("elyg"),c=t("nOHt"),s=t("vNVm"),u={};function l(e,n,t,r){if((0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,c.useRouter)(),o=t&&t.pathname||"/",f=i.default.useMemo((function(){var n=(0,a.resolveHref)(o,e.href,!0),t=r(n,2),i=t[0],c=t[1];return{href:i,as:e.as?(0,a.resolveHref)(o,e.as):c||i}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,m=e.shallow,g=e.scroll,b=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var w=i.Children.only(h),y=w&&"object"===typeof w&&w.ref,j=(0,s.useIntersection)({rootMargin:"200px"}),x=r(j,2),E=x[0],O=x[1],_=i.default.useCallback((function(e){E(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,E]);(0,i.useEffect)((function(){var e=O&&n&&(0,a.isLocalURL)(d),r="undefined"!==typeof b?b:t&&t.locale,o=u[d+"%"+p+(r?"%"+r:"")];e&&!o&&l(t,d,p,{locale:r})}),[p,d,O,b,n,t]);var R={ref:_,onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,i,c,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:i,locale:s}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,t,d,p,v,m,g,b)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),l(t,d,p,{priority:!0}))}};return(e.passHref||"a"===w.type&&!("href"in w.props))&&(R.href=(0,a.addBasePath)((0,a.addLocale)(p,"undefined"!==typeof b?b:t&&t.locale,t&&t.defaultLocale))),i.default.cloneElement(w,R)};n.default=f},vNVm:function(e,n,t){"use strict";var r=t("J4zp"),o=t("TqRt");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,o=(0,i.useRef)(),u=(0,i.useState)(!1),l=r(u,2),f=l[0],d=l[1],p=(0,i.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||f||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=s.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,i=r.observer,a=r.elements;return a.set(e,n),i.observe(e),function(){i.unobserve(e),0===a.size&&(i.disconnect(),s.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,i.useEffect)((function(){c||f||(0,a.default)((function(){return d(!0)}))}),[f]),[p,f]};var i=t("q1tI"),a=o(t("0G5g")),c="undefined"!==typeof IntersectionObserver;var s=new Map}},[["/EDR",0,1,2,3]]]);