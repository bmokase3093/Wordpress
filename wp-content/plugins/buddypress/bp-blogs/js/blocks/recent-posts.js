parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Pfcj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const{blockEditor:{InspectorControls:e},components:{Disabled:t,PanelBody:l,RangeControl:o,TextControl:s,ToggleControl:n},element:{Fragment:r,createElement:i},i18n:{__:a},serverSideRender:d}=wp,u=u=>{let{attributes:b,setAttributes:p}=u;const{title:c,maxPosts:g,linkTitle:m}=b;return i(r,null,i(e,null,i(l,{title:a("Settings","buddypress"),initialOpen:!0},i(s,{label:a("Title","buddypress"),value:c,onChange:e=>{p({title:e})}}),i(o,{label:a("Max posts to show","buddypress"),value:g,onChange:e=>p({maxPosts:e}),min:1,max:10,required:!0}),i(n,{label:a("Link block title to Blogs directory","buddypress"),checked:!!m,onChange:()=>{p({linkTitle:!m})}}))),i(t,null,i(d,{block:"bp/recent-posts",attributes:b})))};var b=u;exports.default=b;
},{}],"D8sC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const{blocks:{createBlock:e}}=wp,t={from:[{type:"block",blocks:["core/legacy-widget"],isMatch:e=>{let{idBase:t,instance:s}=e;return!(null==s||!s.raw)&&"bp_blogs_recent_posts_widget"===t},transform:t=>{let{instance:s}=t;return e("bp/recent-posts",{title:s.raw.title,maxPosts:s.raw.max_posts,linkTitle:s.raw.link_title})}}]};var s=t;exports.default=s;
},{}],"PMBS":[function(require,module,exports) {
"use strict";var e=s(require("./recent-posts/edit")),t=s(require("./recent-posts/transforms"));function s(e){return e&&e.__esModule?e:{default:e}}const{blocks:{registerBlockType:r},i18n:{__:o}}=wp;r("bp/recent-posts",{title:o("Recent Networkwide Posts","buddypress"),description:o("A list of recently published posts from across your network.","buddypress"),icon:{background:"#fff",foreground:"#d84800",src:"wordpress"},category:"buddypress",attributes:{title:{type:"string",default:o("Recent Networkwide Posts","buddypress")},maxPosts:{type:"number",default:10},linkTitle:{type:"boolean",default:!1}},edit:e.default,transforms:t.default});
},{"./recent-posts/edit":"Pfcj","./recent-posts/transforms":"D8sC"}]},{},["PMBS"], null)
//# sourceMappingURL=/bp-blogs/js/blocks/recent-posts.js.map