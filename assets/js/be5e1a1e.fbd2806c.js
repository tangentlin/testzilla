"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6746],{665:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var i=s(9214),l=s(7677);const r={id:"atomic_testing_core.listHelper",title:"Namespace: listHelper",sidebar_label:"listHelper",custom_edit_url:null},n=void 0,d={id:"api/namespaces/atomic_testing_core.listHelper",title:"Namespace: listHelper",description:"@atomic-testing/core.listHelper",source:"@site/docs/api/namespaces/atomic_testing_core.listHelper.md",sourceDirName:"api/namespaces",slug:"/api/namespaces/atomic_testing_core.listHelper",permalink:"/docs/api/namespaces/atomic_testing_core.listHelper",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"atomic_testing_core.listHelper",title:"Namespace: listHelper",sidebar_label:"listHelper",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"escapeUtil",permalink:"/docs/api/namespaces/atomic_testing_core.escapeUtil"},next:{title:"locatorUtil",permalink:"/docs/api/namespaces/atomic_testing_core.locatorUtil"}},c={},o=[{value:"Functions",id:"functions",level:2},{value:"getListItemByIndex",id:"getlistitembyindex",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"getListItemIterator",id:"getlistitemiterator",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/api/modules/atomic_testing_core",children:"@atomic-testing/core"}),".listHelper"]}),"\n",(0,i.jsx)(t.h2,{id:"functions",children:"Functions"}),"\n",(0,i.jsx)(t.h3,{id:"getlistitembyindex",children:"getListItemByIndex"}),"\n",(0,i.jsxs)(t.p,{children:["\u25b8 ",(0,i.jsx)(t.strong,{children:"getListItemByIndex"}),"<",(0,i.jsx)(t.code,{children:"T"}),">(",(0,i.jsx)(t.code,{children:"host"}),", ",(0,i.jsx)(t.code,{children:"itemLocatorBase"}),", ",(0,i.jsx)(t.code,{children:"index"}),", ",(0,i.jsx)(t.code,{children:"driverClass"}),"): ",(0,i.jsx)(t.code,{children:"Promise"}),"<",(0,i.jsx)(t.code,{children:"T"})," | ",(0,i.jsx)(t.code,{children:"null"}),">"]}),"\n",(0,i.jsx)(t.p,{children:"Get list item driver within host by index.  List item is an indefinite number of items under the same host\nwith similar characteristics defined by the itemLocatorBase."}),"\n",(0,i.jsx)(t.h4,{id:"type-parameters",children:"Type parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"T"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["extends ",(0,i.jsx)(t.a,{href:"/docs/api/classes/atomic_testing_core.ComponentDriver",children:(0,i.jsx)(t.code,{children:"ComponentDriver"})}),"<",">"]})]})})]}),"\n",(0,i.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"host"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.a,{href:"/docs/api/classes/atomic_testing_core.ComponentDriver",children:(0,i.jsx)(t.code,{children:"ComponentDriver"})}),"<",(0,i.jsx)(t.code,{children:"any"}),">"]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The component the list item is under"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"itemLocatorBase"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"/docs/api/modules/atomic_testing_core#partlocator",children:(0,i.jsx)(t.code,{children:"PartLocator"})})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The locator of the list item without the index, the locator should already compound the host locator if needed"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"index"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"number"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The index of the list item"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"driverClass"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"ComponentDriverClass"}),"<",(0,i.jsx)(t.code,{children:"T"}),">"]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The driver class of the list item"})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Promise"}),"<",(0,i.jsx)(t.code,{children:"T"})," | ",(0,i.jsx)(t.code,{children:"null"}),">"]}),"\n",(0,i.jsx)(t.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/atomic-testing/atomic-testing/blob/5f232c24793b8e595a098bcbc5329a9175d58060/packages/core/src/drivers/listHelper.ts#L15",children:"packages/core/src/drivers/listHelper.ts:15"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"getlistitemiterator",children:"getListItemIterator"}),"\n",(0,i.jsxs)(t.p,{children:["\u25b8 ",(0,i.jsx)(t.strong,{children:"getListItemIterator"}),"<",(0,i.jsx)(t.code,{children:"T"}),">(",(0,i.jsx)(t.code,{children:"host"}),", ",(0,i.jsx)(t.code,{children:"itemLocatorBase"}),", ",(0,i.jsx)(t.code,{children:"driverClass"}),"): ",(0,i.jsx)(t.code,{children:"AsyncGenerator"}),"<",(0,i.jsx)(t.code,{children:"T"}),", ",(0,i.jsx)(t.code,{children:"void"}),", ",(0,i.jsx)(t.code,{children:"unknown"}),">"]}),"\n",(0,i.jsx)(t.p,{children:"Get an iterator of list item driver.\nList item is an indefinite number of items under the same host"}),"\n",(0,i.jsx)(t.h4,{id:"type-parameters-1",children:"Type parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"T"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["extends ",(0,i.jsx)(t.a,{href:"/docs/api/classes/atomic_testing_core.ComponentDriver",children:(0,i.jsx)(t.code,{children:"ComponentDriver"})}),"<",(0,i.jsx)(t.code,{children:"any"}),">"]})]})})]}),"\n",(0,i.jsx)(t.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"host"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.a,{href:"/docs/api/classes/atomic_testing_core.ComponentDriver",children:(0,i.jsx)(t.code,{children:"ComponentDriver"})}),"<",(0,i.jsx)(t.code,{children:"any"}),">"]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The component the list item is under"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"itemLocatorBase"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"/docs/api/modules/atomic_testing_core#partlocator",children:(0,i.jsx)(t.code,{children:"PartLocator"})})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The locator of the list item without the index, the locator should already compound the host locator if needed"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"driverClass"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"ComponentDriverClass"}),"<",(0,i.jsx)(t.code,{children:"T"}),">"]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The driver class of the list item"})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"AsyncGenerator"}),"<",(0,i.jsx)(t.code,{children:"T"}),", ",(0,i.jsx)(t.code,{children:"void"}),", ",(0,i.jsx)(t.code,{children:"unknown"}),">"]}),"\n",(0,i.jsx)(t.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/atomic-testing/atomic-testing/blob/5f232c24793b8e595a098bcbc5329a9175d58060/packages/core/src/drivers/listHelper.ts#L37",children:"packages/core/src/drivers/listHelper.ts:37"})})]})}function a(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},7677:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>d});var i=s(8318);const l={},r=i.createContext(l);function n(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:n(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);