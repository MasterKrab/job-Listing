"use strict";function _createForOfIteratorHelper(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){c=!0,o=e},f:function(){try{s||null==r.return||r.return()}finally{if(c)throw o}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function asyncGeneratorStep(e,t,r,a,n,o,s){try{var c=e[o](s),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(a,n)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var o=e.apply(t,r);function s(e){asyncGeneratorStep(o,a,n,s,c,"next",e)}function c(e){asyncGeneratorStep(o,a,n,s,c,"throw",e)}s(void 0)}))}}var filter=document.getElementById("filter"),filterList=document.getElementById("filter-list"),fragment=document.createDocumentFragment(),result=document.getElementById("results"),searchTerms=[],role="",level="",languages=[],tools=[],filteredTerms=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t,r,a,n,o,s,c,l,i,u,f,d,m,p,g;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,getJobs();case 2:t=e.sent,r=[],c=_createForOfIteratorHelper(t),e.prev=5,c.s();case 7:if((l=c.n()).done){e.next=58;break}if(i=l.value,a=!0,n=!0,o=!0,s=!0,role.length>0&&role!==i.role&&(a=!1),level.length>0&&level!==i.level&&(n=!1),!(languages.length>0)){e.next=34;break}u=_createForOfIteratorHelper(languages),e.prev=17,u.s();case 19:if((f=u.n()).done){e.next=26;break}if(d=f.value,o=!!i.languages.includes(d)){e.next=24;break}return e.abrupt("break",26);case 24:e.next=19;break;case 26:e.next=31;break;case 28:e.prev=28,e.t0=e.catch(17),u.e(e.t0);case 31:return e.prev=31,u.f(),e.finish(31);case 34:if(!(tools.length>0)){e.next=54;break}m=_createForOfIteratorHelper(tools),e.prev=37,m.s();case 39:if((p=m.n()).done){e.next=46;break}if(g=p.value,s=!!i.tools.includes(g)){e.next=44;break}return e.abrupt("break",46);case 44:e.next=39;break;case 46:e.next=51;break;case 48:e.prev=48,e.t1=e.catch(37),m.e(e.t1);case 51:return e.prev=51,m.f(),e.finish(51);case 54:a&&n&&s&&o&&r.push(i);case 56:e.next=7;break;case 58:e.next=63;break;case 60:e.prev=60,e.t2=e.catch(5),c.e(e.t2);case 63:return e.prev=63,c.f(),e.finish(63);case 66:printJobs(r);case 68:case"end":return e.stop()}}),e,null,[[5,60,63,66],[17,28,31,34],[37,48,51,54]])})));return function(){return e.apply(this,arguments)}}(),printFilterTerms=function(e){filterList.textContent="",e.forEach((function(e){var t=document.getElementById("filter-template").content;t.querySelector(".filter-list__term").textContent=e.termValue;var r=t.querySelector(".filter-list__button");r.dataset.term=e.termValue,r.dataset.type=e.type,r.ariaLabel="Delete search term ".concat(e.termValue);var a=document.importNode(t,!0);fragment.appendChild(a)})),filterList.appendChild(fragment)},printJobs=function(e){var t=document.getElementById("job-template").content;result.textContent="",e.forEach((function(e){e.featured?t.querySelector(".job").classList.add("job--featured"):t.querySelector(".job").classList.remove("job--featured");var r=t.querySelector(".job__image");r.src=e.logo,r.alt="".concat(e.company," logo");var a=t.querySelector(".type");a.children[0].textContent=e.company,e.new?a.children[1].classList.add("type__item--show"):a.children[1].classList.remove("type__item--show"),e.featured?a.children[2].classList.add("type__item--show"):a.children[2].classList.remove("type__item--show"),t.querySelector(".job__title").textContent=e.position;var n=t.querySelector(".features");n.children[0].textContent=e.postedAt,n.children[1].textContent=e.contract,n.children[2].textContent=e.location;var o=t.querySelector(".categories");o.innerHTML='\n         <li class="categories__item"><button class="categories__button" data-type="role" data-term="'.concat(e.role,'">').concat(e.role,'</button></li>\n         <li class="categories__item"><button class="categories__button" data-type="level" data-term="').concat(e.level,'">').concat(e.level,"</button></li>\n      "),e.languages.forEach((function(e){o.innerHTML+='<li class="categories__item"><button class="categories__button" data-type="languages" data-term="'.concat(e,'">').concat(e,"</button></li>")})),e.tools.length>0&&e.tools.forEach((function(e){o.innerHTML+='<li class="categories__item"><button class="categories__button" data-type="tools" data-term="'.concat(e,'">').concat(e,"</button></li>")}));var s=document.importNode(t,!0);fragment.appendChild(s)})),result.appendChild(fragment)},getJobs=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("./data.json");case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();filter.addEventListener("click",function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.target.classList.contains("filter__button")&&(searchTerms=[],languages=[],tools=[],role="",level=""),t.target.classList.contains("filter-list__button")&&(searchTerms=searchTerms.filter((function(e){return e.termValue!==t.target.dataset.term})),"role"==t.target.dataset.type&&(role=""),"level"==t.target.dataset.type&&(level=""),"languages"===t.target.dataset.type&&(languages=languages.filter((function(e){return e!==t.target.dataset.term}))),"tools"===t.target.dataset.type&&(tools=tools.filter((function(e){return e!==t.target.dataset.term})))),0===searchTerms.length&&filter.classList.remove("filter--show"),filteredTerms(),printFilterTerms(searchTerms);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),result.addEventListener("click",(function(e){if(e.target.classList.contains("categories__button")){var t,r=_createForOfIteratorHelper(searchTerms);try{for(r.s();!(t=r.n()).done;){var a=t.value;if(e.target.dataset.term===a.termValue)return}}catch(e){r.e(e)}finally{r.f()}"role"===e.target.dataset.type&&(role=e.target.dataset.term),"level"===e.target.dataset.type&&(level=e.target.dataset.term),"languages"===e.target.dataset.type&&languages.push(e.target.dataset.term),"tools"===e.target.dataset.type&&tools.push(e.target.dataset.term);var n={termValue:e.target.dataset.term,type:e.target.dataset.type};searchTerms.push(n),printFilterTerms(searchTerms),filter.classList.add("filter--show"),filteredTerms()}})),document.addEventListener("DOMContentLoaded",_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=printJobs,e.next=3,getJobs();case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)}))));