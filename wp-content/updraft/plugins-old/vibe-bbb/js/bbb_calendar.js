!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=wp.element,o=i.useState,l=i.useEffect,c=i.Fragment,s=(i.useContext,wp.data),u=s.dispatch,m=s.select,b=function(e){var t=r(o(!1),2),n=t[0],a=t[1],i=r(o(!1),2),s=i[0],b=i[1],d=r(o(e.meeting),2),f=d[0],p=d[1],v=r(o(""),2),w=v[0],y=v[1],g=r(o(!1),2),h=g[0],_=g[1];l((function(){p(e.meeting)}),[e.meeting]);var E=function(){n?a(!1):(_(!0),fetch("".concat(window.vibebbb.api.url,"/user/meetings/get_meeting_url"),{method:"post",body:JSON.stringify({token:m("vibebp").getToken(),id:f.id})}).then((function(e){return e.json()})).then((function(e){_(!1),e.hasOwnProperty("message")&&u("vibebp").addNotification({text:e.message}),e.status&&e.url&&(y(e.url),a(!0))})))};return wp.element.createElement("div",{className:"join_vibebbb"},f.meeting_details?wp.element.createElement(c,null,f.meeting_details.meeting_id&&f.meeting_details.can_join?wp.element.createElement(c,null,wp.element.createElement("div",{className:"join_buttons"},w?"":wp.element.createElement("div",null,m("vibebp").getUser().id!=parseInt(f.post_author)?wp.element.createElement("a",{className:h?"button is-primary is-loading":"button is-primary",onClick:function(){E()}},window.vibebbb.translations.open_meeting):wp.element.createElement("a",{className:h?"button is-primary is-loading":"button is-primary",onClick:function(){E()}},window.vibebbb.translations.start_meeting)),n&&w?wp.element.createElement("a",{className:s?"button is-primary open_in_new_tab is-loading":"button is-primary open_in_new_tab",href:w,target:"_blank",onClick:function(){b(!0),fetch("".concat(window.vibebbb.api.url,"/user/meetings/record_join_activity"),{method:"post",body:JSON.stringify({token:m("vibebp").getToken(),id:f.id})}).then((function(e){return e.json()})).then((function(e){b(!1),e.hasOwnProperty("message")&&u("vibebp").addNotification({text:e.message})}))}},window.vibebbb.translations.open_meeting_in_new_tab):"")):""):"")};function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=wp.element,v=p.useState,w=p.useEffect,y=p.Fragment,g=wp.data,h=g.dispatch,_=(g.select,function(e){var t=d(v(e.event),2),n=t[0],r=t[1];w((function(){r(e.event)}),[e.event]);var a=function(e){if(n&&n.meta&&Array.isArray(n.meta)){var t=n.meta.findIndex((function(t){return t.meta_key==e}));return t>-1?n.meta[t].meta_value:""}return""};return wp.element.createElement(y,null,n.hasOwnProperty("id")?wp.element.createElement("div",{className:"event_wrapper"},wp.element.createElement("div",{className:"event"},wp.element.createElement("div",{className:"event_details"},wp.element.createElement("h2",null,n.post_title),n.post_content?wp.element.createElement("div",{className:"event_description",dangerouslySetInnerHTML:{__html:n.post_content}}):"",n.meta?wp.element.createElement("div",{className:"event_start_end"},wp.element.createElement("span",null,wp.element.createElement("strong",null,window.vibebbb.translations.starts),wp.element.createElement("span",null,wp.element.createElement("span",{className:"vicon vicon-calendar"}),wp.element.createElement("span",null,new Date(a("start")).toLocaleString()))),wp.element.createElement("span",null,wp.element.createElement("strong",null,window.vibebbb.translations.ends),wp.element.createElement("span",null,wp.element.createElement("span",{className:"vicon vicon-calendar"}),wp.element.createElement("span",null,new Date(a("end")).toLocaleString())))):""),e.event?wp.element.createElement(y,null,n.meeting_details?wp.element.createElement(b,{meeting:n}):"",wp.element.createElement("div",{className:"event_actions"},wp.element.createElement("a",{className:"button is-primary",onClick:function(){var t=window.location.href.split("#");window.location.href=t[0]+"#component=bbb_meeting&action=view&id="+e.event.id,h("vibebp").setComponent("bbb_meeting")}},window.vibebbb.translations.see_meeting),wp.element.createElement("a",{className:"link",onClick:function(){e.close()}},window.vibebbb.translations.cancel))):"")):"")});function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var A=wp.element,N=A.useState,P=A.useEffect,x=A.createRef,I=wp.data,T=I.select,C=I.dispatch,M=function(e){var t=S(N([]),2),n=t[0],r=t[1],a=S(N({start:"",end:""}),2),i=a[0],o=a[1],l=S(N(!1),2),c=l[0],s=l[1],u=function(e){window.vibebbb.calevents=e,r(e)},m=S(N(),2),b=m[0],d=m[1],f=x(null),p=S(N({calendarView:"dayGridMonth",slotDuration:"00:15:00",editable:!0,buttonText:{today:window.vibebbb.translations.today,month:window.vibebbb.translations.month,week:window.vibebbb.translations.week,day:window.vibebbb.translations.day,list:window.vibebbb.translations.list}}),2),v=p[0];p[1];P((function(){u([]),i.start&&i.end&&fetch("".concat(window.vibebbb.api.url,"/user/meetings/bbbmeetings"),{method:"post",body:JSON.stringify({token:T("vibebp").getToken(),filter:i})}).then((function(e){return e.json()})).then((function(e){e.status?Array.isArray(e.data)&&u(e.data):e.hasOwnProperty("message")&&C("vibebp").addNotification({text:e.message})}))}),[i]),P((function(){if(f){var e={initialView:v.calendarView,themeSystem:"bootstrap",headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listWeek"},buttonText:v.buttonText,eventClick:function(e,t,n){var r=window.vibebbb.calevents;if(r.length){var a=r.findIndex((function(t){return parseInt(t.id)==parseInt(e.event.id)}));a>=0&&s(r[a])}},datesSet:function(e){var t=e.view.activeStart.getTime(),n=e.view.activeEnd.getTime();o(O(O({},i),{},{start:t,end:n}))}};!b&&n.length&&(e.events=w(n),console.log("parsed",e.events));var t=new FullCalendar.Calendar(f.current,e);b&&(console.log("parsed if fullcal",w(n)),b.setOption("events",w(n)),t=b),t.render(),d(t)}}),[n]);var w=function(e){var t=[];return e.map((function(e){var n={};e.id&&(n.id=e.id),e.post_title&&(n.title=e.post_title),e.hasOwnProperty("meta")&&Array.isArray(e.meta)&&e.meta.length&&e.meta.map((function(e){e.meta_key&&e.meta_value&&("start"==e.meta_key?n.start=e.meta_value:"end"==e.meta_key?n.end=e.meta_value:"color"==e.meta_key&&(n.color=e.meta_value))})),t.push(n)})),t};return wp.element.createElement("div",{class:"vibebbb_fullcalendar"},wp.element.createElement("div",{id:"vibebbb_fullcalendar",ref:f}),c?wp.element.createElement(_,{event:c,close:function(){s(!1)}}):"")},D=wp.element.render;document.addEventListener("calendar_component_vibe_bbb_meeting",(function(e){var t=document.querySelector("#calendar_component_vibe_bbb_meeting");t&&D(wp.element.createElement(M,null),t)}),!1)}]);