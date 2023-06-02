"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["react-code-view"],{10089:(e,r,t)=>{var o,s=t(77083),a=t(5377),_=t(85893),n=t(34232),d=t(73968),i=t(69942),l=t(67294),c=t(34493),p=t(64872),u=t(90874),m=t(65412);function h({children:e}){let r=(0,d.T)(),[t]=l.useState(r?.repo),[o]=l.useState(r?.currentUser),s=(0,l.useMemo)(()=>({}),[]);return(0,l.useEffect)(()=>{let e=document.querySelector(".footer");e&&(e.querySelector(".mt-6")?.classList.replace("mt-6","mt-0"),e.querySelector(".border-top")?.classList.remove("border-top"))},[]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("div",{id:"__primerPortalRoot__",style:{zIndex:10,position:"absolute",width:"100%"}}),(0,_.jsx)("meta",{"data-hydrostats":"publish"}),(0,_.jsx)(i.xp,{children:(0,_.jsx)(n.n,{appName:"react-code-view",category:"",metadata:s,children:(0,_.jsx)(u.M,{user:o,children:(0,_.jsx)(p.d,{repository:t,children:(0,_.jsx)(m.K,{children:(0,_.jsx)(c.o,{children:e})})})})})})]})}try{(o=h).displayName||(o.displayName="App")}catch{}var b=t(3284);(0,a.g)("react-code-view",()=>({App:h,routes:[(0,s.g)({path:"/:owner/:repo/tree/:branch/:path/*",Component:b.Z,shouldNavigateOnError:!0}),(0,s.g)({path:"/:owner/:repo/blob/:branch/:path/*",Component:b.Z,shouldNavigateOnError:!0}),(0,s.g)({path:"/:owner/:repo/blame/:branch/:path/*",Component:b.Z,shouldNavigateOnError:!0}),(0,s.g)({path:"/:owner/:repo/edit/:branch/:path/*",Component:b.Z,shouldNavigateOnError:!0}),(0,s.g)({path:"/:owner/:repo/new/:branch/:path/*",Component:b.Z,shouldNavigateOnError:!0}),(0,s.g)({path:"/:owner/:repo/new/:branch/*",Component:b.Z,shouldNavigateOnError:!0}),(0,s.g)({path:"/:owner/:repo",Component:b.Z,shouldNavigateOnError:!0}),(0,s.g)({path:"/:owner/:repo/tree/:branch/*",Component:b.Z,shouldNavigateOnError:!0})]}))},5377:(e,r,t)=>{t.d(r,{g:()=>c});var o=t(96843);let s=new o.e;async function a(e){let r=await s.getRegistration(e);return r()}var _=t(85893),n=t(76006),d=t(40187),i=t(88003);let l=class ReactAppElement extends i.S{async getReactNode(e){let r=this.name,t=this.getAttribute("initial-path"),{App:o,routes:s}=await a(r);if(this.isLazy){let r=await fetch(t,{mode:"no-cors",cache:"no-cache",credentials:"include"}),{payload:o}=await r.json();e.payload=o}return(0,_.jsx)(d.k,{appName:r,initialPath:t,embeddedData:e,routes:s,App:o,wasServerRendered:this.hasSSRContent,ssrError:Boolean(this.ssrError)})}get isLazy(){return"true"===this.getAttribute("data-lazy")}constructor(...e){super(...e),this.nameAttribute="app-name"}};function c(e,r){s.register(e,r)}l=function(e,r,t,o){var s,a=arguments.length,_=a<3?r:null===o?o=Object.getOwnPropertyDescriptor(r,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(e,r,t,o);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(_=(a<3?s(_):a>3?s(r,t,_):s(r,t))||_);return a>3&&_&&Object.defineProperty(r,t,_),_}([n.Ih],l)},77083:(e,r,t)=>{t.d(r,{g:()=>o});function o({path:e,Component:r,shouldNavigateOnError:t,transitionType:o}){async function s({location:e}){let r;try{let t=`${e.pathname}${e.search}`;r=await window.fetch(t,{headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest","X-GitHub-Target":"dotcom"}})}catch(e){return{type:t?"route-handled-error":"error",error:{type:"fetchError"}}}if(r.redirected)return{type:"redirect",url:r.url};if(!r.ok)return{type:t?"route-handled-error":"error",error:{type:"httpError",httpStatus:r.status}};try{let e=await r.json();return{type:"loaded",data:e,title:e.title}}catch(e){return{type:t?"route-handled-error":"error",error:{type:"badResponseError"}}}}return{path:e,Component:r,loader:s,loadFromEmbeddedData:function({embeddedData:e}){return{data:e,title:e.title}},transitionType:o}}}},e=>{var r=r=>e(e.s=r);e.O(0,["react-lib","vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-a4c183","vendors-node_modules_primer_octicons-react_dist_index_esm_js-node_modules_primer_react_lib-es-ca6dae","vendors-node_modules_primer_react_lib-esm_Button_index_js-node_modules_primer_react_lib-esm_T-c6e74c","vendors-node_modules_primer_react_lib-esm_TextInput_TextInput_js","vendors-node_modules_primer_react_lib-esm_ActionList_index_js-node_modules_primer_react_lib-e-6c83fc","vendors-node_modules_dompurify_dist_purify_js","vendors-node_modules_primer_react_lib-esm_ActionMenu_js","vendors-node_modules_primer_react_lib-esm_deprecated_ActionList_index_js-node_modules_primer_-fed12b","vendors-node_modules_primer_react_lib-esm_FormControl_FormControl_js","vendors-node_modules_primer_react_lib-esm_Heading_Heading_js-node_modules_primer_react_lib-es-20c766","vendors-node_modules_primer_react_lib-esm_Dialog_ConfirmationDialog_js","vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_github_alive-client_dist-bf5aa2","vendors-node_modules_primer_behaviors_dist_esm_focus-zone_js","vendors-node_modules_primer_react_lib-esm_TreeView_TreeView_js","vendors-node_modules_github_relative-time-element_dist_index_js","vendors-node_modules_primer_react_lib-esm_Avatar_Avatar_js-node_modules_primer_react_lib-esm_-9d76dd","vendors-node_modules_github_blackbird-parser_dist_blackbird_js","vendors-node_modules_primer_react_lib-esm_UnderlineNav2_index_js-node_modules_react-router-do-3a0e98","vendors-node_modules_primer_behaviors_dist_esm_anchored-position_js-node_modules_primer_react-943b23","vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_github_text-ex-3415a8","vendors-node_modules_primer_behaviors_dist_esm_scroll-into-view_js-node_modules_primer_react_-cd1b19","ui_packages_failbot_failbot_ts","ui_packages_react-core_deferred-registry_ts-ui_packages_react-core_AppContextProvider_tsx-ui_-ffd985","ui_packages_react-core_Entry_tsx","ui_packages_paths_path_ts-ui_packages_verified-fetch_verified-fetch_ts-ui_packages_safe-html_-d7e3f1","app_assets_modules_react-shared_RefSelector_RefSelector_tsx","app_assets_modules_blackbird-monolith_hooks_use-navigate-to-query_ts-app_assets_modules_black-182e14","app_assets_modules_react-code-view_pages_CodeView_tsx"],()=>r(10089));var t=e.O()}]);
//# sourceMappingURL=react-code-view-6f55f756ec41.js.map