(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||h[d]||a;return n?o.a.createElement(m,l(l({ref:t},u),{},{components:n})):o.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),a=(n(0),n(112)),i={id:"hello-world",title:"Hello world!",author:"Nam Pho",author_title:"Director for Research Computing",author_url:"https://github.com/npho",author_image_url:"https://avatars3.githubusercontent.com/u/1252858?s=400&v=4",tags:["hello","launch","documentation"]},l={permalink:"/blog/2020/12/12/hello-world",source:"@site/blog/2020-12-12-hello-world.md",description:"tl;dr (1) decomissioned a cluster, (2) got a bunch of GPUs for maching learning, (3) launched a cluster, and (4) new and improved documentation.",date:"2020-12-12T00:00:00.000Z",tags:[{label:"hello",permalink:"/blog/tags/hello"},{label:"launch",permalink:"/blog/tags/launch"},{label:"documentation",permalink:"/blog/tags/documentation"}],title:"Hello world!",readingTime:1.235,truncated:!1,prevItem:{title:"scRNA-seq",permalink:"/blog/2020/12/14/scrna-seq"}},c=[],u={rightToc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"tl;dr (1) decomissioned a cluster, (2) got a bunch of GPUs for maching learning, (3) launched a cluster, and (4) new and improved documentation."),Object(a.b)("p",null,"2020 has definitely been an eventful year but here on Team Hyak we've been trying to make the best of a bad situation (lemons out of lemonade and such). This year saw the decomissioning of the 1",Object(a.b)("sup",null,"st")," generation Hyak cluster, ikt, and the soft launch of our 3",Object(a.b)("sup",null,"rd")," generation Hyak cluster, klone. Our partnership with the Allen School and other departments across campus has enabled an explosion in on-campus GPU capacity for the current 2",Object(a.b)("sup",null,"nd")," generation Hyak cluster, mox. This is all very exciting, machine learning is only going to get bigger. We realize whether you do your research on your laptop, Hyak, or the cloud that at the end of the day it's all just a computer and what matters is what you can actually ",Object(a.b)("i",null,"do")," with it. Therefore, we are placing more emphasis on new and improved documentation (this website) and will be doing more regular research tutorials on Hyak throughout the coming year."),Object(a.b)("p",null,"We hope you have weathered the adversity 2020 brought upon everyone. It has been a tough year for sure, but may your 2021 be brighter and have improvements in store. The Hyak Team has lots of efforts in the works to benefit supporting your research and they will hit full stride in the coming year. This is one improvement we can all look forward to in 2021."))}s.isMDXComponent=!0}}]);