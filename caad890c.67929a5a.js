(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{103:function(e,t,n){"use strict";var r=n(0),i=n(20);t.a=function(){var e=Object(r.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},105:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return u}));var r=n(103),i=n(110);function a(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,u=a.forcePrependBaseUrl,c=void 0!==u&&u,o=a.absolute,s=void 0!==o&&o;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var f=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+f:f}(a,n,e,t)}}}function u(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},110:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),i=n.n(r),a=n(105),u=n(109);function c(e){return e?e.map((function(e){return e.link?i.a.createElement("a",{key:e.caption,href:e.link},i.a.createElement(u.a.img,{src:Object(a.a)(e.image),alt:e.caption,whileHover:{scale:1.2},whileTap:{scale:.8}})):i.a.createElement("img",{key:e.caption,src:Object(a.a)(e.image),alt:e.caption})})):[]}},66:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var r=n(0),i=n.n(r),a=n(7),u=n.n(a),c=n(123);function o(e){return i.a.createElement("div",{className:"logo-container pt-3"},e.header,i.a.createElement("div",{className:"logos"},Object(c.a)(e.imgs)),e.content?e.content:[])}o.propTypes={header:u.a.element.isRequired,imgs:u.a.arrayOf(u.a.shape({image:u.a.string.isRequired,caption:u.a.string.isRequired,link:u.a.string})).isRequired,content:u.a.arrayOf(u.a.element)}}}]);