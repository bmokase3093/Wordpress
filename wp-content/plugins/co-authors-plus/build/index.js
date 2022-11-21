!function(){"use strict";var e,t={440:function(e,t,o){var n=window.wp.element,r=window.wp.components,a=window.wp.plugins,s=window.wp.editPost,u=window.wp.compose,l=window.wp.apiFetch,c=o.n(l),i=window.wp.i18n,h=window.wp.data,p=window.wp.primitives,m=(0,n.createElement)(p.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)(p.Path,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})),d=(0,n.createElement)(p.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)(p.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})),v=(0,n.createElement)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(p.Path,{d:"M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"}));const w=(e,t,o)=>{const n=t.map((e=>e.value)).indexOf(e.value),r=n+("up"===o?-1:1),a=t.map((e=>Object.assign({},e))),s=a[n],u=[...a.filter((e=>e.value?e.value!==s.value:e!==s))];return u.splice(r,0,s),u},g=e=>{let{displayName:t,userNicename:o,email:n}=e;return{label:`${t} | ${n}`,display:t,value:o}},f=e=>{let{selectedAuthors:t,updateAuthors:o}=e;const a=(e,n)=>{let r;switch(n){case"moveDown":r=w(e,t,"down");break;case"moveUp":r=w(e,t,"up");break;case"remove":a=e,r=t.filter((e=>e.value!==a.value))}var a;o(r)};return t.map(((e,o)=>{const s=e.display,u=e.value;return(0,n.createElement)("div",{key:u,className:"cap-author"},(0,n.createElement)(r.Flex,{align:"center"},(0,n.createElement)(r.FlexItem,null,(0,n.createElement)("span",null,s)),(0,n.createElement)(r.FlexItem,{justify:"flex-end"},(0,n.createElement)(r.Flex,null,(0,n.createElement)("div",{className:"cap-icon-button-stack"},(0,n.createElement)(r.Button,{icon:m,className:"cap-icon-button",label:(0,i.__)("Move Up","co-authors-plus"),disabled:0===o||1===t.length,onClick:()=>a(e,"moveUp")}),(0,n.createElement)(r.Button,{icon:d,className:"cap-icon-button",label:(0,i.__)("Move down","co-authors-plus"),disabled:o===t.length-1||1===t.length,onClick:()=>a(e,"moveDown")})),(0,n.createElement)(r.Button,{icon:v,iconSize:20,className:"cap-icon-button",label:(0,i.__)("Remove Author","co-authors-plus"),disabled:1===t.length,onClick:()=>a(e,"remove")})))))}))},E={authors:[]},S={setAuthors:e=>({type:"SET_AUTHORS",authors:[...e]}),setAuthorsStore:e=>({type:"SET_AUTHORS_STORE",authors:[...e]}),apiRequest(e){return{type:"API_REQUEST",path:e,method:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET"}}},_=(0,h.createReduxStore)("cap/authors",{reducer(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTHORS":return{...e,authors:[...e.authors,...t.authors]};case"SET_AUTHORS_STORE":return{...e,authors:[...t.authors]}}return e},actions:S,selectors:{getAuthors(e){const{authors:t}=e;return t},saveAuthors(e){const{authors:t}=e;return t}},controls:{API_REQUEST:e=>c()({path:e.path,method:e.method})},resolvers:{*getAuthors(e){const t=`/coauthors/v1/authors/${e}`,o=(yield S.apiRequest(t)).map((e=>g(e)));return S.setAuthors(o)},*saveAuthors(e,t){const o=`/coauthors/v1/authors/${e}?new_authors=${t.map((e=>e.value)).join(",")}`;yield S.apiRequest(o,"POST")}}});(0,h.register)(_);const b=(0,u.compose)([(0,u.withState)(),(0,h.withSelect)((e=>{const{getCurrentPost:t}=e("core/editor"),o=t().id,{getAuthors:n}=e("cap/authors");return{postId:o,authors:n(o)}})),(0,h.withDispatch)((e=>{const{setAuthorsStore:t}=e("cap/authors");return{setAuthorsStore:o=>{t(o),e("core/editor").editPost({meta:{_non_existing_meta:Date.now()}})}}}))])((e=>{let{authors:t,setAuthorsStore:o}=e;const[a,s]=(0,n.useState)([]),[u,l]=(0,n.useState)([]),h=e=>{o(e),s(e)};return(0,n.useEffect)((()=>{t.length&&s(t)}),[t]),(0,n.createElement)(n.Fragment,null,Boolean(a.length)?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(f,{selectedAuthors:a,setSelectedAuthors:s,updateAuthors:h})):(0,n.createElement)(r.Spinner,null),(0,n.createElement)(r.ComboboxControl,{className:"cap-combobox",label:(0,i.__)("Select An Author","co-authors-plus"),value:null,options:u,onChange:e=>{const t=((e,t,o)=>[...t,o.filter((t=>t.value===e))[0]])(e,a,u);h(t)},onFilterValueChange:e=>{const t=a.map((e=>e.value)).join(",");c()({path:`/coauthors/v1/search/?q=${e}&existing_authors=${t}`,method:"GET"}).then((e=>{const t=(o=e).length>0?o.map((e=>g(e))):[];var o;l(t)}))}}))})),{isSavingPost:A,getCurrentPost:x}=(0,h.select)("core/editor"),{getAuthors:O,saveAuthors:y}=(0,h.select)("cap/authors");let P=!0;(0,h.subscribe)((()=>{if(A())P=!1;else if(!P){const{id:e}=x(),t=O(e);y(e,t),P=!0}})),(0,a.registerPlugin)("plugin-coauthors-document-setting",{render:()=>(0,n.createElement)(s.PluginDocumentSettingPanel,{name:"coauthors-panel",title:"Authors",className:"coauthors"},(0,n.createElement)(b,null)),icon:"users"})}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var a=o[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=function(t,o,r,a){if(!o){var s=1/0;for(i=0;i<e.length;i++){o=e[i][0],r=e[i][1],a=e[i][2];for(var u=!0,l=0;l<o.length;l++)(!1&a||s>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(u=!1,a<s&&(s=a));if(u){e.splice(i--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var i=e.length;i>0&&e[i-1][2]>a;i--)e[i]=e[i-1];e[i]=[o,r,a]},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,s=o[0],u=o[1],l=o[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(l)var i=l(n)}for(t&&t(o);c<s.length;c++)a=s[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(i)},o=self.webpackChunkco_authors_plus_3_4=self.webpackChunkco_authors_plus_3_4||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var r=n.O(void 0,[431],(function(){return n(440)}));r=n.O(r)}();