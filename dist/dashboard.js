"use strict";function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _regeneratorRuntime(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function l(e,t,r,o){var a=t&&t.prototype instanceof f?t:f,i=Object.create(a.prototype),s=new L(o||[]);return n(i,"_invoke",{value:x(e,r,s)}),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d={};function f(){}function g(){}function p(){}var y={};c(y,a,(function(){return this}));var h=Object.getPrototypeOf,m=h&&h(h(I([])));m&&m!==t&&r.call(m,a)&&(y=m);var v=p.prototype=f.prototype=Object.create(y);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function o(n,a,i,s){var c=u(e[n],e,a);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==_typeof(d)&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){o("next",e,i,s)}),(function(e){o("throw",e,i,s)})):t.resolve(d).then((function(e){l.value=e,i(l)}),(function(e){return o("throw",e,i,s)}))}s(c.arg)}var a;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){o(e,r,t,n)}))}return a=a?a.then(n,n):n()}})}function x(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return T()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=_(i,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function _(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,_(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=u(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,d;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function I(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:T}}function T(){return{value:void 0,done:!0}}return g.prototype=p,n(v,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:g,configurable:!0}),g.displayName=c(p,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,s,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},b(w.prototype),c(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new w(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(v),c(v,s,"Generator"),c(v,a,(function(){return this})),c(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=I,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:I(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}function asyncGeneratorStep(e,t,r,n,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,o)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){asyncGeneratorStep(a,n,o,i,s,"next",e)}function s(e){asyncGeneratorStep(a,n,o,i,s,"throw",e)}i(void 0)}))}}var userId,SUPABASE_URL="https://plxvbnykwsgwglpxusar.supabase.co",SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBseHZibnlrd3Nnd2dscHh1c2FyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU5Nzk5OTYsImV4cCI6MTk5MTU1NTk5Nn0.4e6f--5uvLzay-Xduh0OIRF3fFK3AGHqdsAqMV6vUC0",supabase=supabase.createClient(SUPABASE_URL,SUPABASE_KEY),navToggler=document.querySelector("#navToggler"),nav=document.querySelector(".nav"),body=document.querySelector("body"),profilePic=document.querySelector("#profilePic"),userInitials=localStorage.getItem("userInitials"),loggedUser=null,bgColor="hsl(216, 93%, 44%)",navActive=!1;localStorage.removeItem("selectedCategory"),profilePic.textContent=userInitials,_asyncToGenerator(_regeneratorRuntime().mark((function e(){var t,r,n;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,supabase.auth.getUser();case 2:t=e.sent,(r=t.data.user)?(console.log(r),loggedUser=r,localStorage.setItem("userInitials",r.user_metadata.businessName[0]),userId=loggedUser.id,localStorage.setItem("userId",userId),localStorage.setItem("loggedUser",JSON.stringify(loggedUser)),null===(n=loadName)||void 0===n||n.remove(),welcomeMsgEl.innerHTML+='\n        <p id="bussinessName" class="text-xl">'.concat(loggedUser.user_metadata.businessName,"</p>\n        "),console.log(userId),renderDashboard()):window.location.href="/login";case 5:case"end":return e.stop()}}),e)})))(),navToggler.addEventListener("click",(function(){var e="-100%"===nav.style.left?"0":"-100%";loggedUser&&(nav.style.left=e),(navActive="-100%"!==e)&&body.addEventListener("click",(function(e){e.target!==navToggler&&e.target!==nav&&e.target!==nav.children[0]&&(nav.style.left="-100%")}))}));var categories,logOut=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function e(){var t,r;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,supabase.auth.signOut();case 2:t=e.sent,(r=t.error)&&(console.log(r.message),alert(r.message)),loggedUser=null,userId=null,localStorage.setItem("loggedUser",null),window.location.href="/login";//! change url !!!
case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),dashboardEl=document.querySelector(".dashboard"),categoriesEl=document.querySelector(".categories__ctn"),welcomeMsgEl=document.querySelector(".dashboard__welcomeMsg"),nameEl=welcomeMsgEl.querySelector("#loadName"),loadingDashboard=document.querySelector("#loadingDashboard"),now=new Date,options={day:"numeric",month:"long",year:"numeric",weekday:"long"},locale=navigator.language,date=new Intl.DateTimeFormat(locale,options).format(now),renderDashboard=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function e(){var t,r,n,o,a,i;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,supabase.from("categories").select("*").eq("user_id",userId).order("created_at",{ascending:!0});case 2:t=e.sent,r=t.data,(n=t.error)?console.error(n):console.log(r),0===(categories=r).length?(null==loadingDashboard||loadingDashboard.remove(),null===(o=document.querySelector(".dashboard__salesSummary"))||void 0===o||o.remove(),dashboardEl.innerHTML+='\n        <div class="dashboard__salesSummary bg-blue text-white rounded lg:px-10 px-5 py-3 mt-5 lg:mt-0 shadow-md">\n            <p class="text-xl font-medium">Total Sales</p>\n            <p class="text-slate-300">As of  '.concat(date,'</p>\n            <p class="totalSales text-lg"><span class="text-sm">₦</span>0</p>\n       </div>\n        ')):(null==loadingDashboard||loadingDashboard.remove(),null===(a=document.querySelector(".dashboard__salesSummary"))||void 0===a||a.remove(),i=categories.reduce((function(e,t){return e+t.total}),0),dashboardEl.innerHTML+='\n        <div class="dashboard__salesSummary bg-blue text-white rounded lg:px-10 px-5 py-3 mt-5 lg:mt-0 shadow-md">\n            <p class="text-xl font-medium">Total Sales</p>\n            <p class="text-slate-300">As of  '.concat(date,'</p>\n            <p class="totalSales text-lg"><span class="text-sm">₦</span>').concat(i.toLocaleString(),"</p>\n       </div>\n        ")),renderCategories();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),renderCategories=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function e(){return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0===categories.length?categoriesEl.innerHTML='<p class="text-center text-xl self-center font-semibold text-blue mt-5">No categories found !</p>':(categoriesEl.innerHTML="",categories.map((function(e){var t=e.id,r=e.name,n=e.total;categoriesEl.innerHTML+='\n          <div class="category bg-blue text-white px-5 rounded py-4 relative shadow-md">\n            <p class="category__name text-lg font-medium underline capitalize">'.concat(r,'</p>\n            <div class="totalCtn flex items-center gap-x-1 pt-3">\n                <p>Total :</p>\n                <p class="thisSales"><span class="text-sm">₦</span>').concat(n.toLocaleString(),'</p>\n            </div>\n            <i title="Add Record" onclick="addRecordFor(\'').concat(r,"', ").concat(n,')" class="bi bi-plus-lg absolute right-5 text-black bg-white rounded-full px-2 py-1 text-xl top-[30%] transition-all hover:bg-slate-200 cursor-pointer"></i>\n            <i onclick="deleteCategory(').concat(t,", '").concat(r,'\')" title="Delete Category" class="bi bi-x-circle-fill absolute top-[-.5rem] text-white rounded-full px-1 bg-opacity-40 bg-black right-[-.4rem] transition-all hover:bg-opacity-60 cursor-pointer"></i>\n        </div>  \n          ')})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),addCategoryModalEl=document.querySelector(".modal"),overlayEl=document.querySelector(".overlay"),addCategoryForm=document.querySelector(".addCatForm"),addCatBtn=document.querySelector("#addCatBtn"),openModal=function(){addCategoryModalEl.classList.add("fade-in"),overlayEl.classList.add("fade-in"),addCategoryModalEl.style.display="block",overlayEl.style.display="block",body.classList.toggle("no-scroll"),overlayEl.addEventListener("click",closeModal)},closeModal=function(){setTimeout((function(){addCatBtn.innerHTML="Add"}),300),addCategoryForm.reset(),addCategoryModalEl.classList.add("fade-out"),overlayEl.classList.add("fade-out"),body.classList.toggle("no-scroll"),setTimeout((function(){addCategoryModalEl.style.display="none",overlayEl.style.display="none",addCategoryModalEl.classList.remove("fade-out"),overlayEl.classList.remove("fade-out")}),300)};addCategoryForm.addEventListener("submit",function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function e(t){var r,n,o,a,i;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),addCatBtn.innerHTML='\n  <img class="w-14" src="/images/pulse-loading.gif">\n  ',r=t.target.name.value.trim(),n=t.target.total.value||0,console.log(r,n),e.next=7,supabase.from("categories").insert({name:r,user_id:userId||localStorage.getItem("userId"),total:n}).select("*");case 7:o=e.sent,a=o.data,i=o.error,a?(closeModal(),Toastify({text:"Category Added !",duration:2e3,newWindow:!1,close:!0,gravity:"top",position:"right",stopOnFocus:!1,style:{background:bgColor,color:"#fff"}}).showToast(),renderDashboard()):(console.error(i),alert(i.message));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var deleteCategory=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function e(t,r){var n,o;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,supabase.from("categories").delete().eq("id",t);case 2:n=e.sent,(o=n.error)&&console.error(o),!o&&Toastify({text:"Category Deleted !",duration:2e3,newWindow:!1,close:!0,gravity:"top",position:"right",stopOnFocus:!1,style:{background:bgColor,color:"#fff"}}).showToast(),deleteSubCategory(r),renderDashboard();case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),deleteSubCategory=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function e(t){var r,n;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,supabase.from("sub-categories").delete("*").eq("category",t).eq("user_id",userId);case 2:r=e.sent,(n=r.error)&&(console.error(n),alert(n.message));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addRecordFor=function(e,t){var r={category:e,total:t};localStorage.setItem("selectedCategory",JSON.stringify(r)),window.location.href="/add-record"};
//# sourceMappingURL=dashboard.js.map