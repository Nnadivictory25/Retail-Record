"use strict";function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _regeneratorRuntime(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",c=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,c=Object.create(a.prototype),i=new _(n||[]);return o(c,"_invoke",{value:x(e,r,i)}),c}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d={};function f(){}function p(){}function y(){}var g={};s(g,a,(function(){return this}));var h=Object.getPrototypeOf,v=h&&h(h(L([])));v&&v!==t&&r.call(v,a)&&(g=v);var m=y.prototype=f.prototype=Object.create(g);function b(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function n(o,a,c,i){var s=u(e[o],e,a);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==_typeof(d)&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,c,i)}),(function(e){n("throw",e,c,i)})):t.resolve(d).then((function(e){l.value=e,c(l)}),(function(e){return n("throw",e,c,i)}))}i(s.arg)}var a;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return a=a?a.then(o,o):o()}})}function x(e,t,r){var o="suspendedStart";return function(n,a){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===n)throw a;return S()}for(r.method=n,r.arg=a;;){var c=r.delegate;if(c){var i=E(c,r);if(i){if(i===d)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===o)throw o="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o="executing";var s=u(e,t,r);if("normal"===s.type){if(o=r.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o="completed",r.method="throw",r.arg=s.arg)}}}function E(e,t){var r=t.method,o=e.iterator[r];if(void 0===o)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var n=u(o,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,d;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function R(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function L(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,n=function t(){for(;++o<e.length;)if(r.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=y,o(m,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:p,configurable:!0}),p.displayName=s(y,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,s(e,i,"GeneratorFunction")),e.prototype=Object.create(m),e},e.awrap=function(e){return{__await:e}},b(w.prototype),s(w.prototype,c,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,o,n,a){void 0===a&&(a=Promise);var c=new w(l(t,r,o,n),a);return e.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},b(m),s(m,i,"Generator"),s(m,a,(function(){return this})),s(m,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var o in t)r.push(o);return r.reverse(),function e(){for(;r.length;){var o=r.pop();if(o in t)return e.value=o,e.done=!1,e}return e.done=!0,e}},e.values=L,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(R),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function o(r,o){return c.type="throw",c.arg=e,t.next=r,o&&(t.method="next",t.arg=void 0),!!o}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var i=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(i&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=e,c.arg=t,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),R(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var o=r.completion;if("throw"===o.type){var n=o.arg;R(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}function asyncGeneratorStep(e,t,r,o,n,a,c){try{var i=e[a](c),s=i.value}catch(e){return void r(e)}i.done?t(s):Promise.resolve(s).then(o,n)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(o,n){var a=e.apply(t,r);function c(e){asyncGeneratorStep(a,o,n,c,i,"next",e)}function i(e){asyncGeneratorStep(a,o,n,c,i,"throw",e)}c(void 0)}))}}var userId,editedId,SUPABASE_URL="https://plxvbnykwsgwglpxusar.supabase.co",SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBseHZibnlrd3Nnd2dscHh1c2FyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU5Nzk5OTYsImV4cCI6MTk5MTU1NTk5Nn0.4e6f--5uvLzay-Xduh0OIRF3fFK3AGHqdsAqMV6vUC0",supabase=supabase.createClient(SUPABASE_URL,SUPABASE_KEY),bgColor="hsl(216, 93%, 44%)",userInitials=localStorage.getItem("userInitials"),profilePic=document.querySelector("#profilePic"),body=document.querySelector("body"),navToggler=document.querySelector("#navToggler"),nav=document.querySelector(".nav"),navActive=!1,FROM_EDIT=!1;profilePic.textContent=userInitials,_asyncToGenerator(_regeneratorRuntime().mark((function e(){var t,r;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,supabase.auth.getUser();case 2:t=e.sent,(r=t.data.user)?(console.log(r),document.querySelector("#profilePic").textContent=r.user_metadata.businessName[0],userId=r.id,renderRecordTable()):window.location.href="/login";case 5:case"end":return e.stop()}}),e)})))(),navToggler.addEventListener("click",(function(){var e="-100%"===nav.style.left?"0":"-100%";userId&&(nav.style.left=e),(navActive="-100%"!==e)&&body.addEventListener("click",(function(e){e.target!==navToggler&&e.target!==nav&&e.target!==nav.children[0]&&(nav.style.left="-100%")}))}));var selectedCategory=JSON.parse(localStorage.getItem("selectedCategory")),selectedCategoryEl=document.querySelector("#selectedRecordEl"),totalEl=document.querySelector("#catTotal"),recordsTable=document.querySelector(".records"),errMsgEl=document.querySelector(".errMsg"),records=[];selectedCategory?(selectedCategoryEl.innerHTML='\n  Manage record for <span class="text-blue font-bold capitalize">'.concat(null==selectedCategory?void 0:selectedCategory.category,"</span>\n  "),totalEl.textContent="Total : ₦".concat(null==selectedCategory?void 0:selectedCategory.total.toLocaleString())):body.innerHTML='<p class="font-bold text-3xl text-center text-red-600 mt-20"> 404 , PAGE NOT FOUND !!</p>';var renderRecordTable=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function e(){var t,r,o,n=arguments;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.length>0&&void 0!==n[0]&&n[0],n.length>1&&void 0!==n[1]&&n[1],e.next=4,supabase.from("sub-categories").select("*").eq("user_id",userId).eq("category",null==selectedCategory?void 0:selectedCategory.category).order("created_at",{ascending:!0});case 4:t=e.sent,r=t.data,(o=t.error)&&(console.log(o),alert(o.message)),0===(records=r).length?(recordsTable.innerHTML="",errMsgEl.innerHTML='\n    <p class="font-bold text-xl text-center text-blue mt-5"> No records for '.concat(selectedCategory.category," yet</p>\n    ")):(errMsgEl.innerHTML="",recordsTable.innerHTML='\n      <div class="header font-bold pb-2">\n        <p class="text-lg">S/N</p>\n        <p class="text-lg">Amount</p>\n        <p class="text-lg">Action</p>\n      </div>\n     <hr class="h-2">\n    ',records.map((function(e,t){var r=e.id,o=e.amount;recordsTable.innerHTML+='\n      <div class="data pt-2">\n        <p class="text-lg">'.concat(t+1,'</p>\n        <p class="text-lg text-green-600 font-medium">+').concat(o,'</p>\n        <div class="flex items-center gap-x-3 mx-auto">\n          <i title="Edit Record" onclick="editRecord(').concat(r,", ").concat(o,')" class="bi bi-pencil-square text-lg cursor-pointer transition-all hover:opacity-70 "></i>\n          <i title="Delete Record" onclick="deleteRecord(').concat(r,')" class="bi bi-trash3 text-red-600 text-lg cursor-pointer transition-all hover:opacity-70 "></i>\n        </div>\n      </div>\n      ')}))),calcAndUpdateTotal();case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),addRecModalEl=document.querySelector(".modal"),overlayEl=document.querySelector(".overlay"),addRecForm=document.querySelector(".addRecForm"),addRecBtn=document.querySelector("#addRecordBtn"),openModalBtn=document.querySelector("#createRecordBtn");openModalBtn.addEventListener("click",(function(){openModal()}));var openModal=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=document.querySelector("#modalHeader");!e&&(t.textContent="Add new record"),e&&(FROM_EDIT=!0),addRecModalEl.classList.add("fade-in"),overlayEl.classList.add("fade-in"),addRecModalEl.style.display="block",overlayEl.style.display="block",body.classList.toggle("no-scroll"),overlayEl.addEventListener("click",closeModal)},closeModal=function(){setTimeout((function(){addRecBtn.innerHTML="Add"}),300),FROM_EDIT=!1,addRecForm.reset(),addRecModalEl.classList.add("fade-out"),overlayEl.classList.add("fade-out"),body.classList.toggle("no-scroll"),setTimeout((function(){addRecModalEl.style.display="none",overlayEl.style.display="none",addRecModalEl.classList.remove("fade-out"),overlayEl.classList.remove("fade-out")}),300)};addRecForm.addEventListener("submit",function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function e(t){var r,o,n,a,c,i,s,l=arguments;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=l.length>1&&void 0!==l[1]?l[1]:FROM_EDIT,t.preventDefault(),addRecBtn.innerHTML='\n  <img class="w-14" src="/images/pulse-loading.gif">\n  ',o=t.target.amount.value||0,r){e.next=13;break}return e.next=7,supabase.from("sub-categories").insert({category:selectedCategory.category,amount:o,user_id:userId||localStorage.getItem("userId")}).select("*");case 7:n=e.sent,a=n.data,c=n.error,a?(Toastify({text:"Record Added !",duration:2e3,newWindow:!1,close:!0,gravity:"top",position:"right",stopOnFocus:!1,style:{background:bgColor,color:"#fff"}}).showToast(),closeModal(),renderRecordTable(!1)):(console.error(c),alert(c.message)),e.next=18;break;case 13:return e.next=15,supabase.from("sub-categories").update({amount:o}).eq("id",editedId);case 15:i=e.sent,(s=i.error)?(console.error(s),alert(s.message)):(Toastify({text:"Record Updated !",duration:2e3,newWindow:!1,close:!0,gravity:"top",position:"right",stopOnFocus:!1,style:{background:bgColor,color:"#fff"}}).showToast(),closeModal(),renderRecordTable(!1,!0));case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var calcAndUpdateTotal=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function e(){var t,r,o,n;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=records.reduce((function(e,t){return e+t.amount}),0),totalEl.textContent="Total : ₦".concat(t.toLocaleString()),e.next=4,supabase.from("categories").update({total:t}).eq("name",null==selectedCategory?void 0:selectedCategory.category);case 4:r=e.sent,(o=r.error)&&alert(o.message),n={category:null==selectedCategory?void 0:selectedCategory.category,total:t},localStorage.setItem("selectedCategory",JSON.stringify(n));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),clearAllRecords=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function e(){var t,r;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(records.length>0)){e.next=11;break}return records=[],e.next=4,supabase.from("sub-categories").delete("*").eq("user_id",userId).eq("category",selectedCategory.category);case 4:t=e.sent,(r=t.error)&&alert(r.message),renderRecordTable(!0),Toastify({text:" All Record Deleted !",duration:2e3,newWindow:!1,close:!0,gravity:"top",position:"right",stopOnFocus:!1,style:{background:bgColor,color:"#fff"}}).showToast(),e.next=12;break;case 11:Toastify({text:"No records to clear!",duration:2e3,newWindow:!1,close:!0,gravity:"top",position:"right",stopOnFocus:!1,style:{background:bgColor,color:"#fff"}}).showToast();case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),editRecord=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function e(t,r){var o,n;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:editedId=t,o=document.querySelector("#modalHeader"),n=document.querySelector('input[name="amount"]'),o.textContent="Edit record",n.value=r,openModal(!0);case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),deleteRecord=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function e(t){var r,o;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,supabase.from("sub-categories").delete("*").eq("id",t).eq("user_id",userId);case 2:r=e.sent,(o=r.error)&&(console.log(o),alert(o.message)),Toastify({text:"Record Deleted!",duration:2e3,newWindow:!1,close:!0,gravity:"top",position:"right",stopOnFocus:!1,style:{background:bgColor,color:"#fff"}}).showToast(),renderRecordTable();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();
//# sourceMappingURL=addRecord.js.map