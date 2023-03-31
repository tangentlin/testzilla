"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[877],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,c(c({ref:t},l),{},{components:r})):n.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8044:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={id:"example",sidebar_position:2},c="Example",i={unversionedId:"example",id:"example",title:"Example",description:"Steps to create a test",source:"@site/docs/example.mdx",sourceDirName:".",slug:"/example",permalink:"/docs/example",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/example.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"example",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Core Concepts",permalink:"/docs/concepts"},next:{title:"Setup",permalink:"/docs/setup"}},p={},s=[{value:"Steps to create a test",id:"steps-to-create-a-test",level:2},{value:"Demo",id:"demo",level:2}],l={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"example"},"Example"),(0,a.kt)("h2",{id:"steps-to-create-a-test"},"Steps to create a test"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Assign data-testid on components"),(0,a.kt)("li",{parentName:"ol"},"Declare ",(0,a.kt)("a",{parentName:"li",href:"/docs/concepts#scene-part"},"ScenePart")),(0,a.kt)("li",{parentName:"ol"},"Instantiate a ",(0,a.kt)("a",{parentName:"li",href:"/docs/concepts#test-engine"},"test engine")),(0,a.kt)("li",{parentName:"ol"},"Interact and tests")),(0,a.kt)("h2",{id:"demo"},"Demo"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/p/sandbox/atomic-testing-login-demo-i390dc"},"Sample Login Form")))}m.isMDXComponent=!0}}]);