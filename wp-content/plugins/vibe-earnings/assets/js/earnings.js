!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);var r=wp.element;r.createElement,r.render;function a(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||o(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=wp.element,l=(s.createElement,s.useState),u=s.useEffect,m=(s.Fragment,s.render,s.useContext,s.useRef),d=wp.data,p=(d.dispatch,d.select),f=function(e){if("payouts"==e.type)var t=m();else var n=m();var r=i(l(!0),2),o=(r[0],r[1],i(l([]),2)),c=o[0],s=o[1],d=p("vibebp").getUser();d.token=p("vibebp").getToken();var f=i(l([]),2),w=f[0],v=f[1],_=i(l([]),2),y=_[0],h=_[1],b=i(l([]),2),g=b[0],E=b[1],j=i(l(""),2),O=j[0],N=j[1],k=i(l([]),2),S=k[0],x=k[1],I=i(l(""),2),C=(I[0],I[1],i(l([]),2)),A=C[0],M=C[1],D=i(l([]),2),P=D[0],q=D[1],T=i(l(0),2),L=T[0],H=T[1],R=i(l(0),2),F=R[0],U=R[1],z=i(l(""),2),J=z[0],Z=z[1],$=i(l(0),2),B=($[0],$[1],i(l([]),2)),G=B[0],K=B[1],Q=i(l(0),2),V=(Q[0],Q[1],i(l([]),2)),W=(V[0],V[1],i(l(""),2)),X=W[0],Y=W[1],ee=i(l(""),2),te=ee[0],ne=(ee[1],i(l(1),2)),re=ne[0],ae=ne[1],ie=i(l(1),2),oe=ie[0],ce=ie[1],se=i(l(1),2),le=se[0],ue=se[1],me=i(l(""),2),de=me[0],pe=me[1],fe=i(l(!0),2),we=fe[0],ve=fe[1],_e=i(l(parseInt(window.vibe_earnings.per_page,10)),2),ye=_e[0],he=(_e[1],i(l({}),2)),be=he[0],ge=he[1],Ee=i(l({}),2),je=Ee[0],Oe=Ee[1];u((function(){return document.addEventListener("vibebp_component_reload",Ne),function(){document.removeEventListener("vibebp_component_reload",Ne)}}),[]),u((function(){Ne()}),[e.type]);var Ne=function(){ve(!0);var e="".concat(window.vibe_earnings.api_url,"instructor/").concat(d.id,"/currency"),t="",n=[];fetch(e).then((function(e){return e.json()})).then((function(e){e.status&&(E(e.data),t=e.default,N(e.default));var r="".concat(window.vibe_earnings.api_url,"instructor/").concat(d.id,"?per_page=").concat(ye,"&currency=").concat(t);fetch(r).then((function(e){return e.json()})).then((function(e){e.status&&(n=e.data,ve(!1),s(e.data));var r="".concat(window.vibe_earnings.api_url,"instructor/").concat(d.id,"/courses?security=").concat(window.vibe_earnings.security);fetch(r).then((function(e){return e.json()})).then((function(e){var t=[];e.map((function(e){y.findIndex((function(t){return t.id===e.id}))<0&&t.push(e)})),h(t)}));var a="".concat(window.vibe_earnings.api_url,"instructor/").concat(d.id,"/chart/?currency=").concat(t);fetch(a).then((function(e){return e.json()})).then((function(e){e.status&&M(e.data)}));var i="".concat(window.vibe_earnings.api_url,"instructor/").concat(d.id,"/thresholdCommission/");fetch(i).then((function(e){return e.json()})).then((function(e){K(e)}));var o="".concat(window.vibe_earnings.api_url,"instructor/").concat(d.id,"/?count=1&per_page=").concat(ye);fetch(o).then((function(e){return e.json()})).then((function(e){e.status&&ce(e.count)}));var c=[];if(n.length&&(n.map((function(e){c.findIndex((function(t){return parseInt(t.id)===parseInt(e.user_id)}))<0&&c.push({id:parseInt(e.user_id),name:"..."})})),c.length)){var l=[];c.map((function(e){l.indexOf(e.id)<0&&l.push(e.id)})),fetch("".concat(window.vibe_earnings.api_url,"instructor/").concat(d.id,"/students/?students=").concat(JSON.stringify(l))).then((function(e){return e.json()})).then((function(e){x(e)}))}}));var a="".concat(window.vibe_earnings.api_url,"instructor/").concat(d.id,"/payouts?per_page=").concat(ye,"&currency=").concat(t);fetch(a).then((function(e){return e.json()})).then((function(e){e.status&&(ve(!1),v(e.data));var n="".concat(window.vibe_earnings.api_url,"instructor/").concat(d.id,"/payouts/?count=1&per_page=").concat(ye);fetch(n).then((function(e){return e.json()})).then((function(e){e.status&&ue(e.count)}));var r="".concat(window.vibe_earnings.api_url,"instructor/").concat(d.id,"/payoutChart/?currency=").concat(t);fetch(r).then((function(e){return e.json()})).then((function(e){e.status&&q(e.data)}));var a="".concat(window.vibe_earnings.api_url,"instructor/").concat(d.id,"/last_payout_request/");fetch(a).then((function(e){return e.json()})).then((function(e){e&&e.status&&pe(e.last_payout_request)}))}))}))};u((function(){if(A&&A.length&&!we&&n){var e=[],t=[],r=[];A.map((function(t,n){r[n]=t.name,e[n]=t.commission}));var a=ke();t.push({label:window.vibe_earnings.translations.commission,data:e,borderColor:a,backgroundColor:a,showLines:!0,fill:!1});var i=n.current.getContext("2d");be&&Object.keys(be).length&&be.destroy();var o={};setTimeout((function(){o=new Chart(i,{type:"line",data:{labels:r,datasets:t,options:{scales:{yAxes:[{stacked:!0,ticks:{beginAtZero:!0}}]}}}}),ge(o)}),200)}}),[A,we]),u((function(){if(P&&P.length&&!we&&t){var e=[],n=[],r=[];P.map((function(t,n){r[n]=t.name,e[n]=t.payout}));var a=ke();n.push({label:window.vibe_earnings.translations.payout,data:e,borderColor:a,backgroundColor:a,showLines:!0,fill:!1});var i=t.current.getContext("2d");je&&Object.keys(je).length&&je.destroy();var o={};setTimeout((function(){o=new Chart(i,{type:"line",data:{labels:r,datasets:n,options:{scales:{yAxes:[{stacked:!0,ticks:{beginAtZero:!0}}]}}}}),Oe(o)}),200)}}),[P,we]);var ke=function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e},Se=function(e){ae(1),H(e[0])},xe=function(e){ae(1),U(e[0])},Ie=function(e,t){var n=c.length;e.length===c.length&&(n="commissions"===t?oe:le);var r=[],a=!0,i=!0,o=Math.floor(n/ye);0!=Math.floor(n%ye)&&(o+=1);for(var s=function(e){re===e?r.push(wp.element.createElement("span",{className:"current",key:e},e)):!function(e){return 5}?e<re||e===re+1?r.push(wp.element.createElement("a",{onClick:function(){return Ce(e)},className:"inactive",key:e},e)):e===o&&e>1&&r.push(wp.element.createElement("span",{key:e},e)):1===e||e===o||e===re-1||e===re+1?e===o&&re!==o-1?r.push(wp.element.createElement("span",{key:e},e)):r.push(wp.element.createElement("a",{onClick:function(){return Ce(e)},className:"inactive",key:e},e)):(a&&e>1&&e<re-1&&(a=!1,r.push(wp.element.createElement("span",{key:e},"..."))),i&&e<o&&e>re+1&&(i=!1,r.push(wp.element.createElement("span",{key:e},"..."))))},l=1;l<=o;l++)s(l);return r},Ce=function(e){ae(e);var t={page:e,course_id:0,date_start:0,date_end:0,paginate:!0};X&&(t.course_id=X),O&&(t.currency=O),L&&(t.date_start=Math.round(L.setHours(0,0)/1e3)),F&&(t.date_end=Math.round(F.setHours(23,59)/1e3)),Ae(t)},Ae=function(t){var n=a(c);if(ve(!0),!t.paginate||t.paginate&&t.page>1&&t.page*ye>c.length){var r="".concat(window.vibe_earnings.api_url,"instructor/").concat(d.id,"/?per_page=").concat(ye,"&page=").concat(t.page,"&date_start=").concat(t.date_start,"&date_end=").concat(t.date_end,"&course_id=").concat(t.course_id,"&currency=").concat(t.currency),i=a(S);fetch(r).then((function(e){return e.json()})).then((function(r){if(r.status){var a=r.data;if(ve(!1),t.paginate)a.map((function(e){n.findIndex((function(t){return t.order_item_id===e.order_item_id}))<0&&n.push(e)}));else{var o="".concat(window.vibe_earnings.api_url,"instructor/").concat(d.id,"/?count=1&per_page=").concat(ye,"&page=").concat(t.page,"&date_start=").concat(t.date_start,"&date_end=").concat(t.date_end,"&course_id=").concat(t.course_id,"&currency=").concat(t.currency);fetch(o).then((function(e){return e.json()})).then((function(e){ce(e.count)})),n=a}if(a.length&&"commission"===e.type){var c=[];a.map((function(e){i.findIndex((function(t){return parseInt(t.id)===parseInt(e.user_id)}))<0&&c.indexOf(e.user_id)<0&&c.push(e.user_id)})),c.length&&fetch("".concat(window.vibe_earnings.api_url,"instructor/").concat(d.id,"/students/?students=").concat(JSON.stringify(c))).then((function(e){return e.json()})).then((function(e){e.length&&(e.map((function(e){i.push(e)})),x(i))}))}var l="".concat(window.vibe_earnings.api_url,"instructor/").concat(d.id,"/chart/?date_start=").concat(t.date_start,"&date_end=").concat(t.date_end,"&course_id=").concat(t.course_id,"&currency=").concat(t.currency);fetch(l).then((function(e){return e.json()})).then((function(e){M(e.data)})),s(n)}}));var o="".concat(window.vibe_earnings.api_url,"instructor/").concat(d.id,"/payouts?per_page=").concat(ye,"&page=").concat(t.page,"&date_start=").concat(t.date_start,"&date_end=").concat(t.date_end,"&currency=").concat(t.currency);fetch(o).then((function(e){return e.json()})).then((function(e){e.status&&(ve(!1),v(e.data))}));var l="".concat(window.vibe_earnings.api_url,"instructor/").concat(d.id,"/payoutChart/?date_start=").concat(t.date_start,"&date_end=").concat(t.date_end,"&currency=").concat(O);fetch(l).then((function(e){return e.json()})).then((function(e){e.status&&q(e.data)}))}else ve(!1)},Me=(a(P),a(c));Math.floor(256*Math.random()),Math.floor(256*Math.random()),Math.floor(256*Math.random());X>0&&(Me=Me.filter((function(e,t){return e.course_id===X}))),te>0&&(Me=Me.filter((function(e,t){return parseInt(e.user_id)===parseInt(te)})));var De=a(c);(De=De.filter((function(e,t){if(re&&t>=(re-1)*ye&&t<re*ye)return e}))).length!==c.length&&De.length;var Pe=0,qe=0,Te=0,Le="";return G.map((function(e,t){O==e.currency&&(Pe=e.total_commission,qe=e.payout,Te=e.threshold+qe,Le=e.currency)})),wp.element.createElement("div",null,we?wp.element.createElement("div",{class:"lds-ellipsis"},wp.element.createElement("div",null),wp.element.createElement("div",null),wp.element.createElement("div",null),wp.element.createElement("div",null)):wp.element.createElement("div",{className:"commissionsRecords"},"payouts"===e.type?wp.element.createElement("div",{className:"request_payouts"},wp.element.createElement("div",null,wp.element.createElement("p",null,wp.element.createElement("strong",null,window.vibe_earnings.translations.commission_balance),Pe," ",Le),wp.element.createElement("p",null,wp.element.createElement("strong",null,window.vibe_earnings.translations.payouts_balance),qe," ",Le),Pe>=Te&&0!==Pe?wp.element.createElement("p",null,window.vibe_earnings.translations.commission_payouts_text):wp.element.createElement("p",null,window.vibe_earnings.translations.commission_failed_payouts_text)),Pe>=Te&&0!==Pe?[J&&J==Le?wp.element.createElement("div",{key:"payout_last_requested1"},wp.element.createElement("button",{className:"button"},window.vibe_earnings.translations.requested_payouts),wp.element.createElement("br",null),de?wp.element.createElement("span",{className:"lastRequested"},window.vibe_earnings.translations.last_requested," ",de):""):wp.element.createElement("div",{key:"payout_last_requested2"},wp.element.createElement("button",{className:"button",onClick:function(e){var t="".concat(window.vibe_earnings.api_url,"instructor/").concat(d.id,"/requestPayouts/?currency=").concat(O,"&post");fetch(t).then((function(e){return e.json()})).then((function(e){Z(e)}))}},window.vibe_earnings.translations.request_payouts),wp.element.createElement("br",null),de?wp.element.createElement("span",{className:"lastRequested"},window.vibe_earnings.translations.last_requested," ",de):"")]:""):"",wp.element.createElement("div",{className:"commissionsSorter"},wp.element.createElement("div",{className:"startDate"},wp.element.createElement("input",{type:"text",ref:function(e){e&&flatpickr(e,{altInput:!0,value:new Date(L),defaultDate:L?new Date(L):new Date,onChange:Se})},placeholderText:window.vibe_earnings.translations.start_date})),wp.element.createElement("div",{className:"endDate"},wp.element.createElement("input",{type:"text",ref:function(e){e&&flatpickr(e,{altInput:!0,value:new Date(F),defaultDate:F?new Date(F):new Date,onChange:xe})},placeholderText:window.vibe_earnings.translations.end_date})),"commission"===e.type?wp.element.createElement("div",{className:"selectCourses"},wp.element.createElement("select",{onChange:function(e){"0"===e.target.value&&(e.target.value=0),ae(1),Y(e.target.value)},value:X},wp.element.createElement("option",{value:"0"},window.vibe_earnings.translations.select_course),y.map((function(e){if(e.hasOwnProperty("name")&&e.name)return wp.element.createElement("option",{value:e.id,key:e.id},e.name)})))):"",wp.element.createElement("div",{className:"selectCurrency"},wp.element.createElement("select",{onChange:function(e){"0"===e.target.value&&(e.target.value=0),N(e.target.value)},value:O},g.map((function(e){return wp.element.createElement("option",{value:e.currency,key:e.currency},e.currency)})))),wp.element.createElement("button",{className:"button",onClick:function(){var e={page:1,course_id:0,date_start:0,date_end:0,paginate:!1},t=new Date;X&&(e.course_id=X),te&&(e.student_id=te),O&&(e.currency=O),L&&(e.date_start=Math.round(L.setHours(0,0)/1e3)-60*t.getTimezoneOffset()),F&&(e.date_end=Math.round(F.setHours(23,59)/1e3)-60*t.getTimezoneOffset()),Ae(e)}},window.vibe_earnings.translations.go)),"commission"===e.type&&A?wp.element.createElement("div",{className:"chart"},wp.element.createElement("canvas",{ref:n})):wp.element.createElement("div",{className:"chart"},wp.element.createElement("canvas",{ref:t})),wp.element.createElement("div",{className:"commissionsData"},c.length?"commission"===e.type?wp.element.createElement("div",null,wp.element.createElement("div",{className:"record recordHeader"},wp.element.createElement("strong",null,window.vibe_earnings.translations.date),wp.element.createElement("strong",null,window.vibe_earnings.translations.course),wp.element.createElement("strong",null,window.vibe_earnings.translations.student),wp.element.createElement("strong",null,window.vibe_earnings.translations.commissions)),wp.element.createElement("span",{className:"display"}," ",function(e){if(e.length){var t=[];return e.map((function(e,n){var r=S[S.findIndex((function(t){return parseInt(t.id)===parseInt(e.user_id)}))],a=y[y.findIndex((function(t){return t.id===e.course_id}))];t.push(wp.element.createElement("div",{className:"record",key:n},wp.element.createElement("div",null,wp.element.createElement("div",{className:"date"},wp.element.createElement("span",null,e.date))),wp.element.createElement("div",null,wp.element.createElement("div",{className:"course"},void 0!==a&&a.hasOwnProperty("name")&&a.name?wp.element.createElement("span",null,a.name):"")),wp.element.createElement("div",null,r?wp.element.createElement("div",{className:"commission_student_profile"},wp.element.createElement("span",null,r.name)):""),wp.element.createElement("div",null,wp.element.createElement("div",{className:"instructor_commission"},wp.element.createElement("span",null,e.commission," "),wp.element.createElement("span",null,e.currency)))))})),t}return wp.element.createElement("div",{className:"vbp_message"},window.vibe_earnings.translations.no_records)}(c)," ")):wp.element.createElement("div",null,wp.element.createElement("div",{className:"record recordHeader"},wp.element.createElement("strong",null,window.vibe_earnings.translations.date),wp.element.createElement("strong",null,window.vibe_earnings.translations.commissions)),wp.element.createElement("span",{className:"display"}," ",function(e){if(e.length){var t=[];return e.map((function(e,n){t.push(wp.element.createElement("div",{className:"record",key:n},wp.element.createElement("div",null,wp.element.createElement("div",{className:"date"},wp.element.createElement("span",null,e.date))),wp.element.createElement("div",null,wp.element.createElement("div",{className:"instructor_commission payouts"},wp.element.createElement("span",null,e.payout," "),wp.element.createElement("span",null,e.currency)))))})),t}return wp.element.createElement("div",{className:"nocommissionrecords"},wp.element.createElement("div",{className:"message"},window.vibe_earnings.translations.no_records))}(w)," ")):"","commission"===e.type?[oe>1?wp.element.createElement("div",{className:"pagination",key:c.length},wp.element.createElement("span",null,window.vibe_earnings.translations.showing," ",(re-1)*ye+"-"+(1==re&&c.length<ye?c.length:re*ye)," ",window.vibe_earnings.translations.of," ",oe),Ie(De,"commissions")):""]:[le>1?wp.element.createElement("div",{className:"pagination",key:w.length},wp.element.createElement("span",null,window.vibe_earnings.translations.showing," ",(re-1)*ye+"-"+(1==re&&c.length<ye?c.length:re*ye)," ",window.vibe_earnings.translations.of," ",oe),Ie(w,"payouts")):""])))};function w(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||h(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||h(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var g=wp.element,E=(g.createElement,g.useState),j=g.useEffect,O=(g.Fragment,g.render),N=wp.data,k=(N.dispatch,N.select),S=function(e){var t=y(E(!1),2),n=(t[0],t[1],y(E([]),2)),r=n[0],a=n[1],i=y(E([]),2),o=i[0],c=i[1],s=y(E("commission"),2),l=s[0],u=s[1],m=y(E(!1),2);m[0],m[1];return j((function(){console.log(k("vibebp").getMenu());var e=k("vibebp").getMenu().filter((function(e){return"commissions"===e.parent}));e.map((function(t,n){-1===e.findIndex((function(e){return e.class.indexOf("current-menu-item")>-1}))&&e[n].class.push("current-menu-item")})),a(e),-1==document.querySelector("body").classList.value.indexOf("withsidebar")&&document.querySelector("body").classList.add("withsidebar")}),[]),wp.element.createElement("div",{className:"vibebp_sidebars"},wp.element.createElement("div",{className:"vibebp_left_sidebar_wrapper"},wp.element.createElement("div",{className:"vibebp_left_sidebar"},wp.element.createElement("h3",null,window.vibe_earnings.translations.commissions),r.map((function(e,t){var n=e.class.join(" ")+" "+e.css_id;return wp.element.createElement("a",{className:n,onClick:function(n){var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},o);i.filter=e.css_id,i.page=1,o.css_id!==i.filter&&c(i),u(e.css_id);var s=w(r),l=s.findIndex((function(e){return e.class.indexOf("current-menu-item")>-1}));s[l].class.splice(s[l].class.indexOf("current-menu-item"),1),s[t].class.push("current-menu-item"),a(s)}},e.name)})))),wp.element.createElement("div",{className:"vibebp_main"},"payouts"===l?wp.element.createElement("div",{id:"payouts_content"},wp.element.createElement(f,{type:"payouts"})):"commission"===l?wp.element.createElement("div",{id:"commission_content"},wp.element.createElement(f,{type:"commission"})):""))};document.addEventListener("component_loaded",(function(e){"commissions"===e.detail.component&&setTimeout((function(){O(wp.element.createElement(S,null),document.querySelector("#commissions_component"))}),200)}),!1)}]);