function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function asyncGeneratorStep(e,t,r,n,o,i,s){try{var l=e[i](s),a=l.value}catch(c){return void r(c)}l.done?t(a):Promise.resolve(a).then(n,o)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function s(e){asyncGeneratorStep(i,n,o,s,l,"next",e)}function l(e){asyncGeneratorStep(i,n,o,s,l,"throw",e)}s(void 0)}))}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{Ftzj:function(e,t,r){"use strict";r.r(t),r.d(t,"ion_reorder",(function(){return s})),r.d(t,"ion_reorder_group",(function(){return l}));var n=r("+9FH"),o=r("ntsc"),i=r("xgmX"),s=function(){function e(t){_classCallCheck(this,e),Object(n.l)(this,t)}return _createClass(e,[{key:"onClick",value:function(e){e.preventDefault(),e.stopImmediatePropagation()}},{key:"render",value:function(){var e=Object(o.b)(this),t="ios"===e?"reorder-three-outline":"reorder-two-sharp";return Object(n.j)(n.b,{class:e},Object(n.j)("slot",null,Object(n.j)("ion-icon",{name:t,lazy:!1,class:"reorder-icon",part:"icon"})))}}]),e}();s.style={ios:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:34px;opacity:0.4}",md:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:31px;opacity:0.3}"};var l=function(){function e(t){_classCallCheck(this,e),Object(n.l)(this,t),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0,this.ionItemReorder=Object(n.f)(this,"ionItemReorder",7)}var t;return _createClass(e,[{key:"disabledChanged",value:function(){this.gesture&&this.gesture.enable(!this.disabled)}},{key:"connectedCallback",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.el.closest("ion-content"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,t.getScrollElement();case 5:this.scrollEl=e.sent;case 6:return e.next=8,Promise.resolve().then(r.bind(null,"oDRl"));case 8:this.gesture=e.sent.createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:function(e){return n.canStart(e)},onStart:function(e){return n.onStart(e)},onMove:function(e){return n.onMove(e)},onEnd:function(){return n.onEnd()}}),this.disabledChanged();case 10:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"disconnectedCallback",value:function(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}},{key:"complete",value:function(e){return Promise.resolve(this.completeSync(e))}},{key:"canStart",value:function(e){if(this.selectedItemEl||0!==this.state)return!1;var t=e.event.target.closest("ion-reorder");if(!t)return!1;var r=c(t,this.el);return!!r&&(e.data=r,!0)}},{key:"onStart",value:function(e){e.event.preventDefault();var t=this.selectedItemEl=e.data,r=this.cachedHeights;r.length=0;var n=this.el,o=n.children;if(o&&0!==o.length){for(var s=0,l=0;l<o.length;l++){var c=o[l];s+=c.offsetHeight,r.push(s),c.$ionIndex=l}var u=n.getBoundingClientRect();if(this.containerTop=u.top,this.containerBottom=u.bottom,this.scrollEl){var f=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=f.top+h,this.scrollElBottom=f.bottom-h}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=a(t),this.selectedItemHeight=t.offsetHeight,this.state=1,t.classList.add(d),Object(i.b)()}}},{key:"onMove",value:function(e){var t=this.selectedItemEl;if(t){var r=this.autoscroll(e.currentY),n=this.containerTop-r,o=Math.max(n,Math.min(e.currentY,this.containerBottom-r)),s=r+o-e.startY,l=this.itemIndexForTop(o-n);if(l!==this.lastToIndex){var c=a(t);this.lastToIndex=l,Object(i.c)(),this.reorderMove(c,l)}t.style.transform="translateY(".concat(s,"px)")}}},{key:"onEnd",value:function(){var e=this.selectedItemEl;if(this.state=2,e){var t=this.lastToIndex,r=a(e);t===r?this.completeSync():this.ionItemReorder.emit({from:r,to:t,complete:this.completeSync.bind(this)}),Object(i.d)()}else this.state=0}},{key:"completeSync",value:function(e){var t=this.selectedItemEl;if(t&&2===this.state){var r=this.el.children,n=r.length,o=this.lastToIndex,i=a(t);o===i||e&&!0!==e||this.el.insertBefore(t,i<o?r[o+1]:r[o]),Array.isArray(e)&&(e=f(e,i,o));for(var s=0;s<n;s++)r[s].style.transform="";t.style.transition="",t.classList.remove(d),this.selectedItemEl=void 0,this.state=0}return e}},{key:"itemIndexForTop",value:function(e){var t=this.cachedHeights,r=0;for(r=0;r<t.length&&!(t[r]>e);r++);return r}},{key:"reorderMove",value:function(e,t){for(var r=this.selectedItemHeight,n=this.el.children,o=0;o<n.length;o++){var i="";o>e&&o<=t?i="translateY(".concat(-r,"px)"):o<e&&o>=t&&(i="translateY(".concat(r,"px)")),n[o].style.transform=i}}},{key:"autoscroll",value:function(e){if(!this.scrollEl)return 0;var t=0;return e<this.scrollElTop?t=-u:e>this.scrollElBottom&&(t=u),0!==t&&this.scrollEl.scrollBy(0,t),this.scrollEl.scrollTop-this.scrollElInitial}},{key:"render",value:function(){var e,t=Object(o.b)(this);return Object(n.j)(n.b,{class:(e={},_defineProperty(e,t,!0),_defineProperty(e,"reorder-enabled",!this.disabled),_defineProperty(e,"reorder-list-active",0!==this.state),e)})}},{key:"el",get:function(){return Object(n.g)(this)}}],[{key:"watchers",get:function(){return{disabled:["disabledChanged"]}}}]),e}(),a=function(e){return e.$ionIndex},c=function(e,t){for(var r;e;){if((r=e.parentElement)===t)return e;e=r}},h=60,u=10,d="reorder-selected",f=function(e,t,r){var n=e[t];return e.splice(t,1),e.splice(r,0,n),e.slice()};l.style=".reorder-list-active>*{-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none !important;transition:none !important;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.4);box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}"}}]);