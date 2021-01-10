(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{141:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var o=a(0),r=a.n(o);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(a),b=o,h=u["".concat(i,".").concat(b)]||u[b]||d[b]||n;return a?r.a.createElement(h,c(c({ref:t},l),{},{components:a})):r.a.createElement(h,c({ref:t},l))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<n;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},78:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var o=a(2),r=a(6),n=(a(0),a(141)),i={id:"archive",title:"Archive"},c={unversionedId:"storage/archive",id:"storage/archive",isDocsHomePage:!1,title:"Archive",description:"The storage attached to HYAK clusters is considered a transient place for \"hot\" data. This is stuff you're actively computing against. It's slow, cheap, and has physical longevity as a storage medium. These are desired properties for an archive tier.",source:"@site/docs/storage/archive.md",slug:"/storage/archive",permalink:"/docs/storage/archive",version:"current",sidebar:"someSidebar",previous:{title:"Data Transfer",permalink:"/docs/storage/transfer"},next:{title:"Scheduling Jobs",permalink:"/docs/compute/scheduling-jobs"}},s=[{value:"What is LOLO Tape?",id:"what-is-lolo-tape",children:[]},{value:"How do I get LOLO capacity?",id:"how-do-i-get-lolo-capacity",children:[]},{value:"How to back up to LOLO?",id:"how-to-back-up-to-lolo",children:[]},{value:"Google Drive",id:"google-drive",children:[]}],l={rightToc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The storage attached to HYAK clusters is considered a transient place for \"hot\" data. This is stuff you're actively computing against. It's slow, cheap, and has physical longevity as a storage medium. These are desired properties for an archive tier."),Object(n.b)("h2",{id:"what-is-lolo-tape"},"What is LOLO Tape?"),Object(n.b)("p",null,'LOLO is the UW\'s archive solution, it is an LTO-8 or "tape" based platform. '),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(n.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"LOLO costs $4 / TB / month."))),Object(n.b)("h2",{id:"how-do-i-get-lolo-capacity"},"How do I get LOLO capacity?"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Go to ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://uwnetid.washington.edu/manage/"}),"https://uwnetid.washington.edu/manage/")),Object(n.b)("li",{parentName:"ol"},'Click the "Computing Services" link on the left'),Object(n.b)("li",{parentName:"ol"},'Click the "Lolo Server" check box in the "Inactive Services" section.'),Object(n.b)("li",{parentName:"ol"},'Click the "Subscribe >" button at the bottom of the page.'),Object(n.b)("li",{parentName:"ol"},'Read the notice and click the "Finish" button.')),Object(n.b)("h2",{id:"how-to-back-up-to-lolo"},"How to back up to LOLO?"),Object(n.b)("p",null,"TODO"),Object(n.b)("h2",{id:"google-drive"},"Google Drive"),Object(n.b)("p",null,"The UW has a relationship with Google for cloud services (e.g., Gmail, Google Drive). Google Drive has a reputation for \"unlimited\" data storage. It's possible you can use this as one place to store your data but we leave it to the user to perform their own due diligence on the implications of this. Some labs at the UW make use of Google Drive in this manner so we thought we'd make note of it here but we provide no support for it."))}p.isMDXComponent=!0}}]);