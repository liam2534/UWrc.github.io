(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{158:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return o}));var n=t(0),r=t.n(n),l=t(171),c=t(191),i=t(192);function o(){return r.a.createElement(l.a,{title:"Publications"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("br",null))),r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("h1",null,"Publications"),r.a.createElement("p",null,"Conference papers, peer-reviewed journal articles, and other scholarly works are the result of your hard work of which HYAK was one helping hand. Please consider citing or acknowleding HYAK in your final work and then let us know so it can be considered to appear in our select publication list."),r.a.createElement("h3",null,"How do I cite HYAK"),r.a.createElement("p",null,"Please consider citing HYAK in your paper when publishing, you can use the citation below."),r.a.createElement("h3",null,"Select Publications"),r.a.createElement("p",null,"These are select works that were produced using a HYAK cluster in any given year. While hundreds of papers are produced each year using HYAK, we limit the select list below to 10 for the sake of brevity. If you would like your publication to be considered for inclusion onto this list please ",r.a.createElement("a",{href:"mailto:help@uw.edu?subject=HYAK publication"},"e-mail us")," with the citation.")),r.a.createElement("div",{class:"row"},r.a.createElement(c.a,{className:"unique-tabs",defaultValue:"2020",values:[{label:"2021",value:"2021"},{label:"2020",value:"2020"},{label:"2019",value:"2019"}]},r.a.createElement(i.a,{value:"2021"},r.a.createElement("ol",null,r.a.createElement("li",null,"Coming soon."))),r.a.createElement(i.a,{value:"2020"},r.a.createElement("ol",null,r.a.createElement("li",null,'PE Rummo, N Pho, MA Bragg, CA Roberto, B Elbel. "Trends in Store-Level Sales of Sugary Beverages and Water in the US, 2006\u20132015." ',r.a.createElement("i",null,"American Journal of Preventive Medicine")," 59 (4), 522-529 (2020) DOI: ",r.a.createElement("a",{href:"https://doi.org/10.1016/j.amepre.2020.04.022"},"10.1016/j.amepre.2020.04.022")))),r.a.createElement(i.a,{value:"2019"},r.a.createElement("ol",null,r.a.createElement("li",null,"TODO")))))))}},171:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(167),c=t(181),i=t(3),o=t(169),s=t.n(o),u=t(174),m=t(21),d=function(e){var a=Object(n.useRef)(!1),l=Object(n.useRef)(null),c=Object(u.useHistory)(),i=Object(m.default)().siteConfig,o=(void 0===i?{}:i).baseUrl,d=function(){a.current||(Promise.all([fetch(o+"search-doc.json").then((function(e){return e.json()})),fetch(o+"lunr-index.json").then((function(e){return e.json()})),Promise.all([t.e(96),t.e(101)]).then(t.bind(null,279)),t.e(64).then(t.t.bind(null,278,7))]).then((function(e){!function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=o+t.url;document.createElement("a").href=n,c.push(n)}})}(e[0],e[1],e[2].default)})),a.current=!0)},b=Object(n.useCallback)((function(a){l.current.contains(a.target)||l.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:s()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:b,onKeyDown:b,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:s()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:b,onBlur:b,ref:l}))},b=t(182),h=t(175),v=t(168),f=t(183),p=t(176),E=t(177),g=t(188),w=t(180),k=t(179),_=t(54),j=t.n(_);t(55);function O(e){return r.a.createElement("div",{className:"scroll-notifier",style:{visibility:e.useScrollNotifier?"visible":"hidden",width:100*e.scrollPercent+"%"}})}var N="right";var y=function(e){var a,t,c=Object(m.default)().siteConfig,o=void 0===c?{}:c,s=!1;try{s=window.location.pathname!=o.baseUrl}catch(Q){}var u=Object(v.useThemeConfig)(),_=u.navbar,y=_.items,C=_.hideOnScroll,S=_.style,x=u.colorMode.disableSwitch,I=Object(n.useState)(!1),P=I[0],H=I[1],B=Object(n.useState)(!1),A=B[0],T=B[1],D=Object(h.a)(),K=D.isDarkTheme,Y=D.setLightTheme,M=D.setDarkTheme,R=Object(f.a)(C),F=R.navbarRef,L=R.isNavbarVisible;Object(p.a)(P);var V=Object(n.useCallback)((function(){H(!0)}),[H]),J=Object(n.useCallback)((function(){H(!1)}),[H]),U=Object(n.useCallback)((function(e){return e.target.checked?M():Y()}),[Y,M]),z=Object(E.a)();Object(n.useEffect)((function(){z===E.b.desktop&&H(!1)}),[z]);var G=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:N)})),rightItems:e.filter((function(e){var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:N)}))}}(y),W=G.leftItems,q=G.rightItems;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{ref:F,className:Object(l.a)("navbar","navbar--fixed-top",(a={"navbar--dark":"dark"===S,"navbar--primary":"primary"===S,"navbar-sidebar--show":P},a[j.a.navbarHideable]=C,a[j.a.navbarHidden]=!L,a))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=y&&0!==y.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:V,onKeyDown:V},r.a.createElement(k.a,null)),r.a.createElement(w.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(l.a)("navbar__title",(t={},t[j.a.hideLogoText]=A,t))}),W.map((function(e,a){return r.a.createElement(g.a,Object(i.a)({},e,{key:a}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},q.map((function(e,a){return r.a.createElement(g.a,Object(i.a)({},e,{key:a}))})),!x&&r.a.createElement(b.a,{className:j.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:K,onChange:U}),r.a.createElement(d,{handleSearchBarToggle:T,isSearchBarExpanded:A}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:J}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(w.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:J}),!x&&P&&r.a.createElement(b.a,{"aria-label":"Dark mode toggle in sidebar",checked:K,onChange:U})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},y.map((function(e,a){return r.a.createElement(g.a,Object(i.a)({mobile:!0},e,{onClick:J,key:a}))}))))))),r.a.createElement(O,{useScrollNotifier:s,scrollPercent:e.scrollPercent}))},C=t(184),S=t(185),x=t(187),I=(t(56),t(186));a.a=function(e){var a=e.children,t=e.noFooter,n=e.wrapperClassName,i=1,o=1;try{i=document.body.scrollHeight-window.innerHeight,o=Math.min(1,window.scrollY/i)}catch(u){}var s=Object(I.a)()[0];return r.a.createElement(S.a,null,r.a.createElement(x.a,e),r.a.createElement(c.a,null),r.a.createElement(y,{scrollPercent:o}),r.a.createElement("div",{className:Object(l.a)("main-wrapper",n),ref:s},a),!t&&r.a.createElement(C.a,null))}},191:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(195),c=t(167),i=t(68),o=t.n(i),s=37,u=39;a.a=function(e){var a=e.lazy,t=e.block,i=e.defaultValue,m=e.values,d=e.groupId,b=e.className,h=Object(l.a)(),v=h.tabGroupChoices,f=h.setTabGroupChoices,p=Object(n.useState)(i),E=p[0],g=p[1],w=n.Children.toArray(e.children);if(null!=d){var k=v[d];null!=k&&k!==E&&m.some((function(e){return e.value===k}))&&g(k)}var _=function(e){g(e),null!=d&&f(d,e)},j=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},b)},m.map((function(e){var a=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":E===a,className:Object(c.a)("tabs__item",o.a.tabItem,{"tabs__item--active":E===a}),key:a,ref:function(e){return j.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case u:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case s:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(j,e.target,e)},onFocus:function(){return _(a)},onClick:function(){_(a)}},t)}))),a?Object(n.cloneElement)(w.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},w.map((function(e,a){return Object(n.cloneElement)(e,{key:a,hidden:e.props.value!==E})}))))}},192:function(e,a,t){"use strict";var n=t(3),r=t(0),l=t.n(r);a.a=function(e){var a=e.children,t=e.hidden,r=e.className;return l.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:t,className:r}),a)}}}]);