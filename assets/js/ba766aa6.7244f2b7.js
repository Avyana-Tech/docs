"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[384],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=l(n),p=r,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7758:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(6010),o=n(9960),i=n(4996);const c="card_7QME";const s=function(e){const t=void 0===e.href,n=void 0!==e.href&&/^http/.test(e.href),s="undefined"===e.header?null:a.createElement("header",{className:"Card-header"},e.header),l=e.hoverIcon||e.icon,d=a.createElement(a.Fragment,null,e.img&&a.createElement("img",{src:(0,i.Z)(e.img),className:"Card-image"}),a.createElement("div",{className:"Card-container"},(e.icon||l)&&a.createElement("div",{className:"Card-icon-row"},e.icon&&a.createElement("img",{src:(0,i.Z)(e.icon),className:"Card-icon Card-icon-default"}),l&&a.createElement("img",{src:(0,i.Z)(l),className:"Card-icon Card-icon-hover"})),e.ionicon&&a.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&a.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((t,n)=>a.createElement("img",{src:(0,i.Z)(t),className:"Card-icon "+(n===e.activeIndex?"Card-icon-active":""),"data-index":n,key:n})))),e.header&&s,a.createElement("div",{className:"Card-content"},e.children))),u=(0,r.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return t?a.createElement("docs-card",{class:u},a.createElement("div",{className:(0,r.Z)(c,"docs-card")},d)):n?a.createElement("docs-card",{class:u},a.createElement("a",{className:(0,r.Z)(c,"docs-card"),href:e.href,target:"_blank"},d)):a.createElement("docs-card",{class:u},a.createElement(o.default,{to:e.href,className:(0,r.Z)(c,"docs-card")},d))}},3445:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const r=function(e){return a.createElement("docs-cards",{class:e.className},e.children)}},7751:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(7758),i=n(3445);const c={title:"Studio Introduction",sidebar_label:"Studio Introduction",hide_table_of_contents:!1,slug:"/studio"},s=void 0,l={unversionedId:"studio_index",id:"studio_index",isDocsHomePage:!1,title:"Studio Introduction",description:"Avyana Studio Introduction",source:"@site/docs/studio_index.md",sourceDirName:".",slug:"/studio",permalink:"/studio",tags:[],version:"current",frontMatter:{title:"Studio Introduction",sidebar_label:"Studio Introduction",hide_table_of_contents:!1,slug:"/studio"},sidebar:"docs3",next:{title:"WEB SOCKET",permalink:"/Studio/connect/websocket"}},d=[],u={toc:d};function m(e){let{components:t,...c}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null," Avyana Studio Introduction "),(0,r.kt)("style",null," :root { --doc-item-container-width:60rem; } ")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"AVYANA STUDIO")," is an open-source ROS Visualisation platform, that can be customized as you want it. It is available in a variety of ways to make development as convenient as possible \u2013 it can be run as a standalone Desktop App on ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"#"},"MAC")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"#"},"WINDOWS"))," & ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"#"},"LINUX")),", as a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://studio.avyana.tech/"},"Web-App"))," or even as a Self-hosted app using Docker."),(0,r.kt)("p",null,"It is cross-platform and can connect to your ",(0,r.kt)("strong",{parentName:"p"},"ROBOT")," over wifi. Even if your ROS Stack, is running on a different Operating System, you can visualize, command and even change parameters from ",(0,r.kt)("strong",{parentName:"p"},"Avyana Studio"),", without having to do any extra-setup. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:n(9048).Z})),(0,r.kt)("intro-end",null),(0,r.kt)("p",null,"On opening Avyana Studio, you will see a dialog with a list of all possible data sources (i.e. local file, remote file, live connection) \u2013 click into any of these options to start visualizing your data."),(0,r.kt)(i.Z,{mdxType:"DocsCards"},(0,r.kt)(o.Z,{header:"Connect to Local File",href:"/studio_index",icon:"/img/meta/light_logo.png",mdxType:"DocsCard"},(0,r.kt)("p",null," Step-by-step guides to visualize data from Local File. ")),(0,r.kt)(o.Z,{header:"Connect to Remote File",href:"/studio_index",icon:"/img/meta/light_logo.png",mdxType:"DocsCard"},(0,r.kt)("p",null," Step-by-step guides to visualize data from Remote File. ")),(0,r.kt)(o.Z,{header:"Connect to Web-Socket",href:"/studio/connect/websocket",icon:"/img/meta/light_logo.png",mdxType:"DocsCard"},(0,r.kt)("p",null," Step-by-step guides to connect and visualize data from Web-Socket. "))))}m.isMDXComponent=!0},9048:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/studio_demo-1c6f94e77473ef6c5d2bfbc108506a23.png"}}]);