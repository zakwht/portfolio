_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("hUgY")}])},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("q1tI"),o=n.n(r),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=o.a.createContext&&o.a.createContext(i),s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function l(e){return e&&e.map((function(e,t){return o.a.createElement(e.tag,s({key:t},e.attr),l(e.child))}))}function u(e){return function(t){return o.a.createElement(p,s({attr:s({},e.attr)},t),l(e.child))}}function p(e){var t=function(t){var n,r=e.attr,i=e.size,a=e.title,l=c(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),o.a.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,l,{className:n,style:s(s({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),a&&o.a.createElement("title",null,a),e.children)};return void 0!==a?o.a.createElement(a.Consumer,null,(function(e){return t(e)})):t(i)}},Q8kY:function(e,t,n){},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var i=o(n("q1tI")),a=n("elyg"),s=n("nOHt"),c=n("vNVm"),l={};function u(e,t,n,r){if((0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var p=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),o=n&&n.pathname||"/",p=i.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=r(t,2),i=n[0],s=n[1];return{href:i,as:e.as?(0,a.resolveHref)(o,e.as):s||i}}),[o,e.href,e.as]),h=p.href,d=p.as,f=e.children,g=e.replace,b=e.shallow,m=e.scroll,y=e.locale;"string"===typeof f&&(f=i.default.createElement("a",null,f));var v=i.Children.only(f),w=v&&"object"===typeof v&&v.ref,k=(0,c.useIntersection)({rootMargin:"200px"}),x=r(k,2),j=x[0],O=x[1],P=i.default.useCallback((function(e){j(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,j]);(0,i.useEffect)((function(){var e=O&&t&&(0,a.isLocalURL)(h),r="undefined"!==typeof y?y:n&&n.locale,o=l[h+"%"+d+(r?"%"+r:"")];e&&!o&&u(n,h,d,{locale:r})}),[d,h,O,y,t,n]);var S={ref:P,onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,s,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:i,locale:c}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,h,d,g,b,m,y)},onMouseEnter:function(e){(0,a.isLocalURL)(h)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),u(n,h,d,{priority:!0}))}};return(e.passHref||"a"===v.type&&!("href"in v.props))&&(S.href=(0,a.addBasePath)((0,a.addLocale)(d,"undefined"!==typeof y?y:n&&n.locale,n&&n.defaultLocale))),i.default.cloneElement(v,S)};t.default=p},hUgY:function(e,t,n){"use strict";n.r(t),n.d(t,"App",(function(){return O}));var r=n("rePB"),o=n("h4VS"),i=n("nKUr"),a=n("YFqc"),s=n.n(a),c=n("5SEd"),l=(n("Q8kY"),n("m4+0")),u=n("ma3e"),p=n("tCFx");function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(){var e=Object(o.a)(["\n  padding-bottom: 80px;\n  margin: 32px 24px 0;\n\n  @media only screen and (max-width: 480px) {\n    padding-bottom: 120px;\n  }\n"]);return f=function(){return e},e}function g(){var e=Object(o.a)(['\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n\n  @media only screen and (max-width: 480px) {\n    bottom: 32px;\n  }\n\n  a {\n    color: white;\n    display: block;\n    width: 48px;\n    height: 48px;\n    margin: 16px;\n    font-size: 24px;\n    border-radius: 50%;\n    background-color: white; // #F3F6FF;\n    color: black;\n    text-align: center;\n    line-height: 48px;\n    transition: all 0.3s;\n\n    &:hover {\n      margin: 0px 8px;\n      width: 64px;\n      height: 64px;\n      line-height: 64px;\n      font-size: 32px;\n      color: white;\n\n      &[data-link="Mail"] {\n        background-color: #d44638;\n      }\n      &[data-link="GitHub"] {\n        background-color: #24292e;\n      }\n      &[data-link="LinkedIn"] {\n        background-color: #0073b1;\n      }\n    }\n  }\n']);return g=function(){return e},e}function b(){var e=Object(o.a)(["\n  svg {\n    margin-bottom: -3px;\n  }\n\n  span {\n    position: absolute;\n    bottom: 16px;\n    right: 24px;\n    color: white;\n\n    @media only screen and (max-width: 480px) {\n      left: 0;\n      right: 0;\n      text-align: center;\n    }\n  }\n"]);return b=function(){return e},e}function m(){var e=Object(o.a)(["\n  position: absolute;\n  right: 48px;\n  bottom: 20px;\n\n  @media only screen and (max-width: 480px) {\n    left: 0;\n    top: 64px;\n  }\n\n  a {\n    float: bottom;\n    line-height: 1.5;\n    margin-left: 28px;\n    font-size: 1.1rem;\n  }\n"]);return m=function(){return e},e}function y(){var e=Object(o.a)(["\n  color: white;\n  padding: 48px 48px 20px;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n\n  @media only screen and (max-width: 480px) {\n    padding: 20px 28px;\n  }\n\n  h1 {\n    margin-block: 0;\n    font-weight: 200;\n  }\n\n  a {\n    color: inherit;\n    text-decoration: none;\n\n    &:hover {\n      transition: all 0.5s;\n      filter: brightness(0.8);\n    }\n  }\n"]);return y=function(){return e},e}var v=c.a.header(y()),w=c.a.nav(m()),k=c.a.footer(b()),x=c.a.nav(g()),j=c.a.main(f()),O=function(e){var t=e.Component,n=e.pageProps;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l.a,{title:"Portfolio",children:Object(i.jsx)(i.Fragment,{children:p.map((function(e){return Object(i.jsx)("link",{rel:"preload",href:"img/projects/".concat(e.key,".png"),as:"image"},e.key)}))})}),Object(i.jsxs)(v,{children:[Object(i.jsx)("h1",{children:Object(i.jsx)(s.a,{href:"/",children:"Zak White"})}),Object(i.jsxs)(w,{children:[Object(i.jsx)(s.a,{href:"/projects",children:"Projects"}),Object(i.jsx)(s.a,{href:"/about",children:"About"})]})]}),Object(i.jsx)(j,{children:Object(i.jsx)(t,d({},n))}),Object(i.jsxs)(k,{children:[Object(i.jsxs)(x,{children:[Object(i.jsx)("a",{href:"https://github.com/zakwht","data-link":"GitHub",children:Object(i.jsx)(u.d,{})}),Object(i.jsx)("a",{href:"https://linkedin.com/in/zakwhite","data-link":"LinkedIn",children:Object(i.jsx)(u.f,{})}),Object(i.jsx)("a",{href:"mailto:zakwht@gmail.com","data-link":"Mail",children:Object(i.jsx)(u.b,{})})]}),Object(i.jsxs)("span",{children:["\xa9 ",(new Date).getFullYear()]})]})]})};t.default=O},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},tCFx:function(e){e.exports=JSON.parse('[{"key":"universal-search","title":"Universal Search","role":"Primary Developer","group":"Regroove","description":"A SharePoint Framework (SPFx) webpart for searching various host engines (most helpfully, Microsoft 365). Designed with TypeScript and React, and compatible with SharePoint and Teams.","links":[{"icon":"github","url":"https://github.com/regroove-solutions/universal-search-web-part"},{"icon":"blog","url":"https://getnavo.com/blog/regroove-web-parts-universal-search/"}],"year":"2020"},{"key":"roku","title":"Roku ECP Wrapper","role":"Personal Project","description":"A NodeJS package that empowers users to control Roku devices using TypeScript. The package is a TS-compatible wrapper for the Roku External Control Protocol.","links":[{"icon":"npm","url":"npmjs.org/npm/packages/roku-ecp"},{"icon":"github","url":"https://github.com/zakwht/roku"}],"year":"2021"},{"key":"apod","title":"APOD Browser Extension","role":"Personal Project","description":"A browser extension that showcases NASA\'s Astronomy Photo of the Day! The app is built using TypeScript and React and leverages NASA\'s open API for photos.","links":[{"icon":"chrome","url":"chrome://extensions"},{"icon":"github","url":"https://github.com/zakwht/apod"}],"year":"2020"},{"key":"ghibli","title":"Studio Ghibli Browser Extension","role":"Personal Project","description":"A browser extension that showcases stills from Studio Ghibli films as new tab backgrounds. The app is built with TypeScript and React, and a custom Python script used to scrape the Studio Ghibli media site.","links":[{"icon":"chrome","url":"chrome://extensions"},{"icon":"github","url":"https://github.com/zakwht/ghibli"}],"year":"2022"},{"key":"ffl","title":"Tasks Bot","role":"Primary Developer","group":"Regroove","description":"A Microsoft Teams bot that connects with the Graph API to add tasks to To-Do/Planner. The bot is built using TypeScript and hosted in Microsoft Azure.","links":[{"icon":"blog","url":"https://regroove.ca/blog/we-built-a-task-bot-for-microsoft-teams-and-were-not-going-to-use-it/"}],"year":"2020"},{"key":"mastermind","title":"Mastermind","role":"Personal Project","description":"A Python implementation of an interesting board game, developed as a introduction project to working with GUIs in Python.","links":[{"icon":"github","url":"https://github.com/zakwht/mastermind "}],"year":"2018"},{"key":"navo","title":"Navo","role":"Junior Developer","group":"Regroove","description":"A web application for organizing company bookmarks across platforms, devices, and accounts. The app was built using TypeScript and Angular, and my contributions included front-end enhancements, compatibility with Microsoft apps, and testing automation.","links":[{"icon":"website","url":"https://getnavo.com"}],"year":"2020"},{"key":"minesweeper","title":"Minesweeper RL Agent","description":"Reinforcement learning agents designed to play Minesweeper using machine learning. The agents were implemented in Python using Q-learning and deep Q-learning, and iterated through stages of hyperparameter tuning to optimize solve rate.","role":"Team Project","group":"UVic","links":[{"icon":"github","url":"https://github.com/zakwht/minesweeper"},{"icon":"report","url":"https://github.com/zakwht/minesweeper/blob/main/report/report.pdf"}],"year":"2021"},{"key":"lpsolver","title":"Linear Program Solver","role":"Course Project","group":"UVic","description":"A linear program solver that uses a matrix algebraic version of the Simplex Method, implemented in Python. The algorithm detects infeasibility and unboundedness, and solves problems that are initially unfeasible.","year":"2021"},{"key":"sneakers","title":"Sneaker or Sandal Classifier","role":"Course Project","group":"UVic","description":"A classification model that uses a machine learning to categorize an image of a shoe as either a sneaker or a sandal. The model uses a support vector machine (SVM) powered by a Gaussian (RBF) kernel, and is implemented in Python.","links":[{"icon":"github","url":"https://github.com/zakwht/sneaker-or-sandal"}],"year":"2021"},{"key":"thesis","title":"SARS-CoV-2 Research","role":"Undergraduate Research","group":"UVic","description":"Some thorough research into the role of machine learning in SARS-CoV-2 susceptibility classification in various host species. The research involved a series of categorical classification algorithms as well as computational biology algorithms. The implementation involved Python, R, and PyMOL.","links":[{"icon":"github","url":"https://github.com/zakwht/sars-cov-2"}],"year":"2022"},{"key":"linguist","title":"Linguist Language Visualizer","role":"Personal Project","description":"A VueJS web app that summarizes the list of languages recognized by GitHub\'s Linguist.","links":[{"icon":"github","url":"https://github.com/zakwht/linguist"},{"icon":"website","url":"https://zakwht.github.io/linguist/"}],"year":"2023"},{"key":"goodreads","title":"Goodreads Currently Reading API","role":"Personal Project","description":"A REST API that returns information about the book a Goodreads user is currently reading, in JSON or SVG. Powered by Express, Nunjucks, and Vercel.","links":[{"icon":"github","url":"https://github.com/zakwht/goodreads"},{"icon":"website","url":"https://goodreads-six.vercel.app/"}],"year":"2023"}]')},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),o=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,o=(0,i.useRef)(),l=(0,i.useState)(!1),u=r(l,2),p=u[0],h=u[1],d=(0,i.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||p||e&&e.tagName&&(o.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&h(e)}),{rootMargin:t}))}),[n,t,p]);return(0,i.useEffect)((function(){s||p||(0,a.default)((function(){return h(!0)}))}),[p]),[d,p]};var i=n("q1tI"),a=o(n("0G5g")),s="undefined"!==typeof IntersectionObserver;var c=new Map}},[[0,0,1,4,2,3]]]);