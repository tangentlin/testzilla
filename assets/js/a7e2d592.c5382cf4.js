/*! For license information please see a7e2d592.c5382cf4.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[523],{548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>D,contentTitle:()=>I,default:()=>C,frontMatter:()=>k,metadata:()=>P,toc:()=>_});var r=n(264),a=n(1384),o=n(5675),s=n(9231),i=n(9841),c=n(5872),l=n(9409),u=n(2336),d=n(2504),p=n(8723);function m(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return m(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=h(e),[o,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,l]=f({queryString:n,groupId:r}),[u,d]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,p.Nk)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),m=(()=>{const e=c??u;return g({value:e,tabValues:a})?e:null})();(0,s.useLayoutEffect)((()=>{m&&i(m)}),[m]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!g({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),l(e),d(e)}),[l,d,a]),tabValues:a}}var v=n(3275);const x={tabList:"tabList_ZaCm",tabItem:"tabItem_YXXx"};function y(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,c.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),o=l[n].value;o!==r&&(d(t),a(o))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},l.map((e=>{let{value:t,label:n,attributes:a}=e;return s.createElement("li",(0,o.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},a,{className:(0,i.Z)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function E(e){const t=b(e);return s.createElement("div",{className:(0,i.Z)("tabs-container",x.tabList)},s.createElement(y,(0,o.Z)({},e,t)),s.createElement(w,(0,o.Z)({},e,t)))}function j(e){const t=(0,v.Z)();return s.createElement(E,(0,o.Z)({key:String(t)},e),m(e.children))}const T={tabItem:"tabItem_cc3R"};function S(e){let{children:t,hidden:n,className:r}=e;return s.createElement("div",{role:"tabpanel",className:(0,i.Z)(T.tabItem,r),hidden:n},t)}const k={id:"concepts",sidebar_position:2},I="Core Concepts",P={unversionedId:"concepts",id:"concepts",title:"Core Concepts",description:"Before using Atomic Testing, familiarize yourself with the following key concepts:",source:"@site/docs/core-concepts.mdx",sourceDirName:".",slug:"/concepts",permalink:"/docs/concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/core-concepts.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"concepts",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Example",permalink:"/docs/example"}},D={},_=[{value:"Component Driver",id:"component-driver",level:2},{value:"Locator",id:"locator",level:2},{value:"ScenePart",id:"scenepart",level:2},{value:"Test Engine",id:"test-engine",level:2}];function L(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",admonition:"admonition",code:"code",pre:"pre"},(0,a.ah)(),e.components),{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"core-concepts",children:"Core Concepts"}),"\n",(0,r.jsx)(t.p,{children:"Before using Atomic Testing, familiarize yourself with the following key concepts:"}),"\n",(0,r.jsx)(t.h2,{id:"component-driver",children:"Component Driver"}),"\n",(0,r.jsx)(t.p,{children:"At the heart of Atomic Testing are component drivers. They define how to programmatically interact with UI components, such as clicking a button, selecting a value from a dropdown, or reading a row from a grid."}),"\n",(0,r.jsxs)(t.p,{children:["A growing number of component drivers are available for popular UI frameworks like ",(0,r.jsx)(t.a,{href:"https://mui.com",children:"Material UI"}),". Each component driver offers a set of methods for interacting with the component. When using TypeScript for writing tests, auto-completion can help discover available methods."]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["Refer to the ",(0,r.jsx)(t.a,{href:"/docs/api#component-drivers",children:"API Reference"})," for a list of available component drivers."]})}),"\n",(0,r.jsx)(t.h2,{id:"locator",children:"Locator"}),"\n",(0,r.jsxs)(t.p,{children:["Locators help find components on a page, using various ",(0,r.jsx)(t.a,{href:"/docs/api#locator",children:"locator strategies"})," such as ",(0,r.jsx)(t.code,{children:"byDataTestId"})," and ",(0,r.jsx)(t.code,{children:"byRole"}),"."]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["The use of the data-testid attribute is recommended for locating components on a page. Refer to ",(0,r.jsx)(t.a,{href:"/docs/best-practices#data-testid",children:"Best Practices"})," for more details. Use the ",(0,r.jsx)(t.code,{children:"byDataTestId(value)"})," API as the recommended approach for building locators."]})}),"\n",(0,r.jsx)(t.h2,{id:"scenepart",children:"ScenePart"}),"\n",(0,r.jsx)(t.p,{children:"A ScenePart is a map describing all components of interest (part) within a scene (a page or a rich UI component). Each entry in a ScenePart outlines the part name, the component locator, and the component driver."}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"A sample ScenePart of a typical login screen"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import { ScenePart } from '@atomic-testing/core';\nimport { HTMLAnchorDriver, HTMLElementDriver } from '@atomic-testing/component-driver-html';\nimport { ButtonDriver, TextFieldDriver } from '@atomic-testing/component-driver-mui-v5';\n\nconst loginScenePart: ScenePart = {\n  username: {\n    locator: byDataTestId('username'),\n    driver: TextFieldDriver,\n  },\n  password: {\n    locator: byDataTestId('password'),\n    driver: TextFieldDriver,\n  },\n  error: {\n    locator: byDataTestId('error-display'),\n    driver: HTMLElementDriver,\n  },\n  submit: {\n    locator: byDataTestId('submit'),\n    driver: ButtonDriver,\n  },\n  forgetPassword: {\n    locator: byDataTestId('forget-password'),\n    driver: HTMLAnchorDriver,\n  },\n} satisfies ScenePart;\n"})})]}),"\n",(0,r.jsx)(t.h2,{id:"test-engine",children:"Test Engine"}),"\n",(0,r.jsx)(t.p,{children:"The Test Engine is where all the pieces come together. It is responsible for rendering a scene, locating all the components in the scene, and providing a set of methods to interact with the components."}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"createTestEngine"})," to create a Test Engine instance. The ",(0,r.jsx)(t.code,{children:"createTestEngine"})," function is specific to each rendering framework, such as React, Cypress, and Playwright."]}),"\n",(0,r.jsx)(t.p,{children:"The examples below demonstrate how to create a Test Engine for the loginScenePart described earlier."}),"\n","\n","\n",(0,r.jsxs)(j,{children:[(0,r.jsx)(S,{value:"react",label:"React 18+",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { createTestEngine } from '@atomic-testing/react';\nimport { loginScenePart } from './loginScenePart';\nimport { Login } from './components/Login';\n\nconst testEngine = createTestEngine(<Login />, loginScenePart);\n"})})}),(0,r.jsx)(S,{value:"react-legacy",label:"React 17",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { createLegacyTestEngine } from '@atomic-testing/react/dist/createLegacyTestEngine';\nimport { loginScenePart } from './loginScenePart';\nimport { Login } from './components/Login';\n\nconst testEngine = createLegacyTestEngine(<Login />, loginScenePart);\n"})})}),(0,r.jsx)(S,{value:"playwright",label:"Playwright",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { createTestEngine } from '@atomic-testing/playwright';\nimport { loginScenePart } from './loginScenePart';\n\nawait page.goto('/login');\nconst testEngine = createTestEngine(page, loginScenePart);\n"})})}),(0,r.jsx)(S,{value:"cypress",label:"Cypress",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { createTestEngine } from '@atomic-testing/cypress';\nimport { loginScenePart } from './loginScenePart';\n\ncy.visit('/login');\nconst testEngine = createTestEngine(loginScenePart);\n"})})})]}),"\n",(0,r.jsx)(t.p,{children:"Once the test engine is created, it can be used to interact with the components in the scene."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// Test code is agnostic to the rendering framework\n\nawait testEngine.parts.username.setValue('john@example.com');\nawait testEngine.parts.password.setValue('');\nawait testEngine.parts.submit.click();\n\nconst error = await testEngine.parts.error.getText();\nexpect(error).toEqual('Password is required'); // Jest assertion, but any assertion library can be used\n"})})]})}const C=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(L,e)})):L(e)}},4119:(e,t,n)=>{n(1538);var r=n(9231),a=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;a=o("react.element"),t.Fragment=o("react.fragment")}var s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,o={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:l,ref:u,props:o,_owner:s.current}}t.jsx=l,t.jsxs=l},264:(e,t,n)=>{e.exports=n(4119)},1384:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>o});var r=n(9231);const a=r.createContext({});function o(e){const t=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||s:o(e),r.createElement(a.Provider,{value:i},t)}}}]);