!function(e){var t={};function n(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(s,o,function(t){return e[t]}.bind(null,o));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);const{createElement:s,render:o,useState:i,useEffect:a,Fragment:c,useRef:d}=wp.element,{select:r,dispatch:l}=wp.data,_=e=>{React.useRef();const[t,n]=i(!0),[o,d]=i("note"),[_,m]=i([]),[u,p]=i([]),[w,v]=i([]),[h,g]=i([]),[f,b]=i({}),[N,y]=i([]),[k,O]=i({}),[x,C]=i(!0),[S,I]=i(1);a(()=>{let t={number:e.settings.number,type:"note",user_id:e.settings.user_id};fetch(`${window.notes_discussions.api}/get_notes?args=${encodeURIComponent(JSON.stringify(t))}`,{method:"post",body:JSON.stringify({...t,token:r("vibebp").getToken()})}).then(e=>e.ok?e.json():{status:0,message:window.wplms_course_data.translations.error_loading_data}).then(t=>{t.status&&t.data&&p(t.data),n(!1),document.dispatchEvent(new CustomEvent("vibebp_widget_loaded",{detail:{props:e}}))}).catch(e=>{n(!1),console.error("Uh oh, an error!",e),l("vibebp").addNotification({text:window.wplms_course_data.translations.error_loading_data})});let s={number:e.settings.number,type:"public",user_id:e.settings.user_id};fetch(`${window.notes_discussions.api}/get_notes?args=${encodeURIComponent(JSON.stringify(s))}`,{method:"post",body:JSON.stringify({...s,user_id:e.settings.user_id,token:r("vibebp").getToken()})}).then(e=>e.json()).then(e=>{e.status&&e.data&&v(e.data),n(!1)}).catch(e=>{n(!1),console.error("Uh oh, an error!",e),l("vibebp").addNotification({text:window.wplms_course_data.translations.error_loading_data})})},[]);const T=(e,t,n)=>{if(!(k&&k.hasOwnProperty("comment_content")&&k.comment_content.length>3))return alert(window.notes_discussions.translations.enter_some_content),!1;k.comment_ID=e.comment_ID,k.comment_post_ID=e.comment_post_ID,k.unit=e.comment_post_ID,k.user_id=window.notes_discussions.user_id,k.type="edit",fetch(window.notes_discussions.api+"/add_edit_new_unit_comments?post",{method:"post",body:JSON.stringify({...k,token:r("vibebp").getToken()})}).then(e=>e.ok?e.json():{status:0,message:window.wplms_course_data.translations.error_loading_data}).then(e=>{if(e&&e.comment_data){if("discussions"==n){let n=[...w];n[t]=e.comment_data,v(n)}else{let n=[...u];n[t]=e.comment_data,p(n)}O({});let s=[...N];s.splice(s.indexOf(t),1),y(s)}}).catch(e=>{console.error("Uh oh, an error!",e),l("vibebp").addNotification({text:window.wplms_course_data.translations.error_loading_data})})},j=(e,t,n)=>{if(!(f&&f.hasOwnProperty("comment_content")&&f.comment_content.length>3))return alert(window.notes_discussions.translations.enter_some_content),!1;f.comment_post_ID=e.comment_post_ID,f.comment_ID=Math.floor(1e9*Math.random()+1),f.unit=e.comment_post_ID;f.comment_ID;f.comment_parent=e.comment_ID,f.user_id=window.notes_discussions.user_id,f.type="reply",fetch(window.notes_discussions.api+"/add_edit_new_unit_comments?post",{method:"post",body:JSON.stringify({...f,token:r("vibebp").getToken()})}).then(e=>e.ok?e.json():{status:0,message:window.wplms_course_data.translations.error_loading_data}).then(e=>{if(e&&e.comment_data){if("discussions"==n){let t=[...w];t.unshift(e.comment_data),v(t)}else{let t=[...u];t.unshift(e.comment_data),p(t)}b({});let s=[...h];s.splice(s.indexOf(t),1),g(s)}}).catch(e=>{console.error("Uh oh, an error!",e),l("vibebp").addNotification({text:window.wplms_course_data.translations.error_loading_data})})},D=(e,t)=>{fetch(window.notes_discussions.api+"/instructor_reply_comment?post",{method:"post",body:JSON.stringify({user_id:window.notes_discussions.user_id,token:r("vibebp").getToken(),unit_id:e.comment_post_ID})}).then(e=>e.ok?e.json():{status:0,message:window.wplms_course_data.translations.error_loading_data}).then(e=>{if(e.status){let e=[..._];e.push(t),m(e),alert(window.notes_discussions.translations.request_sent)}}).catch(e=>{console.error("Uh oh, an error!",e),l("vibebp").addNotification({text:window.wplms_course_data.translations.error_loading_data})})},J=(e,t,n)=>{fetch(window.notes_discussions.api+"/delete_comment?post",{method:"post",body:JSON.stringify({user_id:window.notes_discussions.user_id,token:r("vibebp").getToken(),comment_id:e.comment_post_ID})}).then(e=>e.ok?e.json():{status:0,message:window.wplms_course_data.translations.error_loading_data}).then(e=>{if(e.status)if("discussions"==n){let e=[...w];e.splice(t,1),v(e)}else{let e=[...u];e.splice(t,1),v(e)}}).catch(e=>{console.error("Uh oh, an error!",e),l("vibebp").addNotification({text:window.wplms_course_data.translations.error_loading_data})})};return s("div",{className:"wplms_dashboard_notes_widget"},t?s("div",{className:"widget_loader"}," ",s("div",null),s("div",null),s("div",null),s("div",null)):s(c,null,s("div",{className:"notes_tabs"},s("div",{className:"note"==o?"active":"",onClick:()=>{d("note"),C(!0)}},window.notes_discussions.translations.my_notes),s("div",{className:"public"==o?"active":"",onClick:()=>{d("public"),C(!0)}},window.notes_discussions.translations.my_discussions)),s("div",{className:"tab_content"},s("ul",{class:"main_comments"},u.length&&"note"==o?u.map((e,t)=>s("li",{className:"note loaded"},s("div",{className:"comment_data"},s("div",{className:"user-avatar"},s("img",{src:e.avatar}),s("span",{dangerouslySetInnerHTML:{__html:e.comment_username}})),s("div",{className:"comment_meta",dangerouslySetInnerHTML:{__html:e.comment_meta}})),s("div",{className:"unit_comment_content"},-1!==N.indexOf(t)?s("div",{className:"note_content"},s(c,null,s("textarea",{value:k.comment_content,onChange:e=>{let t={...k};t.comment_content=e.target.value,O(t)}}),s("a",{className:"button",onClick:()=>{T(e,t,"notes")}},window.notes_discussions.translations.edit),s("a",{className:"button",onClick:()=>{let e=[...N];e.splice(e.indexOf(t),1),y(e)}},window.notes_discussions.translations.cancel))):s("div",{className:"note_content",dangerouslySetInnerHTML:{__html:e.comment_content}})),s("div",{className:"notes_actions"},s("div",{className:"edit_comment_c"},s("i",{class:"vicon vicon-pencil",onClick:()=>{let n={...k};n.comment_content=e.comment_content.replace(/(<([^>]+)>)/gi,""),O(n);let s=[...N];-1===s.indexOf(t)?s.push(t):s.splice(s.indexOf(t),1),y(s)}})),s("div",{className:"make_public_c",onClick:()=>{((e,t)=>{fetch(window.notes_discussions.api+"/make_comment_public?post",{method:"post",body:JSON.stringify({user_id:window.notes_discussions.user_id,token:r("vibebp").getToken(),comment_id:e.comment_ID})}).then(e=>e.ok?e.json():{status:0,message:window.wplms_course_data.translations.error_loading_data}).then(e=>{if(e.status){let e=[...u],n=[...w];n.push(e[t]),e.splice(t,1),p(e),v(n)}}).catch(e=>{console.error("Uh oh, an error!",e),l("vibebp").addNotification({text:window.wplms_course_data.translations.error_loading_data})})})(e,t)}},s("i",{class:"vicon vicon-user"})),s("div",{className:"reply_unit_comment_c",onClick:()=>{let e={...f};e.comment_content="",b(e);let n=[...h];-1===n.indexOf(t)?n.push(t):n.splice(n.indexOf(t),1),g(n)}},s("i",{class:"vicon vicon-share"})),s("div",{className:()=>{_.indexOf(t)},onClick:()=>{-1===_.indexOf(t)?D(e,t):alert(window.notes_discussions.translations.already_requested)}},s("i",{class:"vicon vicon-share-alt"})),s("div",{className:"remove_unit_comment_c",onClick:()=>{J(e,t,"notes")}},s("i",{class:"vicon vicon-close"}))),-1!==h.indexOf(t)?s("div",{className:"reply_wrap"},s("textarea",{value:f.comment_content,onChange:e=>{let t={...f};t.comment_content=e.target.value,b(t)}}),s("a",{className:"button",onClick:()=>{j(e,t,"notes")}},window.notes_discussions.translations.reply),s("a",{className:"button",onClick:()=>{let e={...f};e.content="",b(e);let n=[...h];n.splice(n.indexOf(t),1),g(n)}},window.notes_discussions.translations.cancel)):"")):u.length||"note"!=o?"":s("div",{className:"message"},s("p",null,window.notes_discussions.translations.no_data)),w.length&&"public"==o?w.map((e,t)=>s("li",{className:"note loaded"},s("div",{className:"comment_data"},s("div",{className:"user-avatar"},s("img",{src:e.avatar}),s("span",{dangerouslySetInnerHTML:{__html:e.comment_username}})),s("div",{className:"comment_meta",dangerouslySetInnerHTML:{__html:e.comment_meta}})),s("div",{className:"unit_comment_content"},-1!==N.indexOf(t)?s("div",{className:"note_content"},s(c,null,s("textarea",{value:k.comment_content,onChange:e=>{let t={...k};t.comment_content=e.target.value,O(t)}}),s("a",{className:"button",onClick:()=>{T(e,t,"discussions")}},window.notes_discussions.translations.edit),s("a",{className:"button",onClick:()=>{let e=[...N];e.splice(e.indexOf(t),1),y(e)}},window.notes_discussions.translations.cancel))):s("div",{className:"note_content",dangerouslySetInnerHTML:{__html:e.comment_content}})),s("div",{className:"notes_actions"},s("div",{className:"edit_comment_c"},s("i",{class:"vicon vicon-pencil",onClick:()=>{let n={...k};n.comment_content=e.comment_content.replace(/(<([^>]+)>)/gi,""),O(n);let s=[...N];-1===s.indexOf(t)?s.push(t):s.splice(s.indexOf(t),1),y(s)}})),s("div",{className:"make_public_c",onClick:()=>{((e,t)=>{fetch(window.notes_discussions.api+"/make_comment_private?post",{method:"post",body:JSON.stringify({user_id:window.notes_discussions.user_id,token:r("vibebp").getToken(),comment_id:e.comment_ID})}).then(e=>e.ok?e.json():{status:0,message:window.wplms_course_data.translations.error_loading_data}).then(e=>{if(e.status){let e=[...u],n=[...w];e.push(n[t]),n.splice(t,1),p(e),v(n)}}).catch(e=>{console.error("Uh oh, an error!",e),l("vibebp").addNotification({text:window.wplms_course_data.translations.error_loading_data})})})(e,t)}},s("i",{class:"vicon vicon-user"})),s("div",{className:"reply_unit_comment_c",onClick:()=>{let e={...f};e.comment_content="",b(e);let n=[...h];-1===n.indexOf(t)?n.push(t):n.splice(n.indexOf(t),1),g(n)}},s("i",{class:"vicon vicon-share"})),s("div",{className:()=>{_.indexOf(t)},onClick:()=>{-1===_.indexOf(t)?D(e,t):alert(window.notes_discussions.translations.already_requested)}},s("i",{class:"vicon vicon-share-alt"})),s("div",{className:"remove_unit_comment_c",onClick:()=>{J(e,t,"discussions")}},s("i",{class:"vicon vicon-close"}))),-1!==h.indexOf(t)?s("div",{className:"reply_wrap"},s("textarea",{value:f.comment_content,onChange:e=>{let t={...f};t.comment_content=e.target.value,b(t)}}),s("a",{className:"button",onClick:()=>{j(e,t,"discussions")}},window.notes_discussions.translations.reply),s("a",{className:"button",onClick:()=>{let e={...f};e.content="",b(e);let n=[...h];n.splice(n.indexOf(t),1),g(n)}},window.notes_discussions.translations.cancel)):"")):w.length||"discussions"!=o?"":s("div",{className:"message"},s("p",null,window.notes_discussions.translations.no_data))),x?s("div",{className:"button",onClick:()=>{(()=>{let t=S;t++;let s={number:e.settings.number,type:o,page:t,user_id:e.settings.user_id};fetch(`${window.notes_discussions.api}/get_notes?args=${encodeURIComponent(JSON.stringify(s))}`,{method:"post",body:JSON.stringify({...s,user_id:e.settings.user_id,token:r("vibebp").getToken()})}).then(e=>e.ok?e.json():{status:0,message:window.wplms_course_data.translations.error_loading_data}).then(e=>{if(e.status)if(e.data.length){if("public"==o){let t=[...w];e.data.map(e=>{t.push(e)}),v(t)}else{let t=[...u];e.data.map(e=>{t.push(e)}),p(t)}I(t)}else C(!1);else C(!1);n(!1)}).catch(e=>{n(!1),console.error("Uh oh, an error!",e),l("vibebp").addNotification({text:window.wplms_course_data.translations.error_loading_data})})})()}},window.notes_discussions.translations.load_more):"")))};document.addEventListener("wplms_notes_discussion",e=>{console.log("details event",e),document.querySelectorAll(".wplms_dashboard_notes_discussions").forEach(t=>{o(s(_,{type:t.getAttribute("data-type"),settings:e.detail.widget.options}),t)})})},function(e,t,n){}]);