function asyncGeneratorStep(e,t,n,r,i,a,o){try{var s=e[a](o),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,i)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){asyncGeneratorStep(a,r,i,o,s,"next",e)}function s(e){asyncGeneratorStep(a,r,i,o,s,"throw",e)}o(void 0)}))}}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _createForOfIteratorHelper(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=_unsupportedIterableToArray(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,a=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){o=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(o)throw i}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1I5t":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("LRne"),i=n("lJxs"),a=n("X+KH"),o=n("fXoL"),s=n("tk/3"),c=function(){var e=function(){function e(t,n){_classCallCheck(this,e),this.http=t,this.user=n,console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx2")}return _createClass(e,[{key:"load",value:function(){return this.data?Object(r.a)(this.data):this.http.get("assets/data/data.json").pipe(Object(i.a)(this.processData,this))}},{key:"processData",value:function(e){var t=this;return this.data=e,this.data.tracks=[],this.data.schedule.forEach((function(e){e.groups.forEach((function(e){e.sessions.forEach((function(e){e.speakers=[],e.speakerNames&&e.speakerNames.forEach((function(n){var r=t.data.speakers.find((function(e){return e.name===n}));r&&(e.speakers.push(r),r.sessions=r.sessions||[],r.sessions.push(e))})),e.tracks&&e.tracks.forEach((function(e){t.data.tracks.indexOf(e)<0&&t.data.tracks.push(e)}))}))}))})),this.data}},{key:"getTimeline",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"all";return this.load().pipe(Object(i.a)((function(i){var o=i.schedule[e];o.shownSessions=0;var s=(n=n.toLowerCase().replace(/,|\.|-/g," ")).split(" ").filter((function(e){return!!e.trim().length}));return o.groups.forEach((function(e){e.hide=!0,e.sessions.forEach((function(n){t.filterSession(n,s,r,a),n.hide||(e.hide=!1,o.shownSessions++)}))})),o})))}},{key:"filterSession",value:function(e,t,n,r){var i=!1;t.length?t.forEach((function(t){e.name.toLowerCase().indexOf(t)>-1&&(i=!0)})):i=!0;var a=!1;e.tracks.forEach((function(e){-1===n.indexOf(e)&&(a=!0)}));var o=!1;"favorites"===r?this.user.hasFavorite(e.name)&&(o=!0):o=!0,e.hide=!(i&&a&&o)}},{key:"getSpeakers",value:function(){return this.load().pipe(Object(i.a)((function(e){return e.speakers.sort((function(e,t){var n=e.name.split(" ").pop(),r=t.name.split(" ").pop();return n.localeCompare(r)}))})))}},{key:"getTracks",value:function(){return this.load().pipe(Object(i.a)((function(e){return e.tracks.sort()})))}},{key:"getMap",value:function(){return this.load().pipe(Object(i.a)((function(e){return e.map})))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(o.ac(s.a),o.ac(a.a))},e.\u0275prov=o.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},"6i10":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={bubbles:{dur:1e3,circles:9,fn:function(e,t,n){var r="".concat(e*t/n-e,"ms"),i=2*Math.PI*t/n;return{r:5,style:{top:"".concat(9*Math.sin(i),"px"),left:"".concat(9*Math.cos(i),"px"),"animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(e,t,n){var r=t/n,i="".concat(e*r-e,"ms"),a=2*Math.PI*r;return{r:5,style:{top:"".concat(9*Math.sin(a),"px"),left:"".concat(9*Math.cos(a),"px"),"animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(e,t){return{r:6,style:{left:"".concat(9-9*t,"px"),"animation-delay":-110*t+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(e,t,n){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":"".concat(e*t/n-e,"ms")}}}},"lines-small":{dur:1e3,lines:12,fn:function(e,t,n){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":"".concat(e*t/n-e,"ms")}}}}}},"862v":function(e,t,n){"use strict";n.r(t),n.d(t,"MapModule",(function(){return h}));var r,i,a,o=n("ofXK"),s=n("TEn/"),c=n("tyNb"),l=n("mrSG"),u=n("1I5t"),d=n("fXoL"),b=["mapCanvas"],p=[{path:"",component:(r=function(){function e(t,n){_classCallCheck(this,e),this.confData=t,this.platform=n}return _createClass(e,[{key:"ngAfterViewInit",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,function(e){var t=window,n=t.google;return n&&n.maps?Promise.resolve(n.maps):new Promise((function(e,n){var r=document.createElement("script");r.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB8pf6ZdFQj5qw7rc_HSGrhUwQKfIe9ICw&v=3.31",r.async=!0,r.defer=!0,document.body.appendChild(r),r.onload=function(){var r=t.google;r&&r.maps?e(r.maps):n("google maps not available")}}))}();case 2:t=e.sent,this.confData.getMap().subscribe((function(e){var r=n.mapElement.nativeElement,i=new t.Map(r,{center:e.find((function(e){return e.center})),zoom:16});e.forEach((function(e){var n=new t.InfoWindow({content:"<h5>".concat(e.name,"</h5>")}),r=new t.Marker({position:e,map:i,title:e.name});r.addListener("click",(function(){n.open(i,r)}))})),t.event.addListenerOnce(i,"idle",(function(){r.classList.add("show-map")}))}));case 4:case"end":return e.stop()}}),e,this)})))}}]),e}(),r.\u0275fac=function(e){return new(e||r)(d.Qb(u.a),d.Qb(s.ib))},r.\u0275cmp=d.Kb({type:r,selectors:[["page-map"]],viewQuery:function(e,t){var n;1&e&&d.Rc(b,!0),2&e&&d.yc(n=d.fc())&&(t.mapElement=n.first)},decls:9,vars:0,consts:[["slot","start"],[1,"map-canvas"],["mapCanvas",""]],template:function(e,t){1&e&&(d.Wb(0,"ion-header"),d.Wb(1,"ion-toolbar"),d.Wb(2,"ion-buttons",0),d.Rb(3,"ion-menu-button"),d.Vb(),d.Wb(4,"ion-title"),d.Lc(5,"Map"),d.Vb(),d.Vb(),d.Vb(),d.Wb(6,"ion-content"),d.Rb(7,"div",1,2),d.Vb())},directives:[s.v,s.ab,s.j,s.G,s.Y,s.s],styles:[".map-canvas[_ngcontent-%COMP%]{position:absolute;height:100%;width:100%;background-color:transparent;opacity:0;transition:opacity .15s ease-in}.show-map[_ngcontent-%COMP%]{opacity:1}"]}),r)}],f=((a=function e(){_classCallCheck(this,e)}).\u0275mod=d.Ob({type:a}),a.\u0275inj=d.Nb({factory:function(e){return new(e||a)},imports:[[c.k.forChild(p)],c.k]}),a),h=((i=function e(){_classCallCheck(this,e)}).\u0275mod=d.Ob({type:i}),i.\u0275inj=d.Nb({factory:function(e){return new(e||i)},imports:[[o.c,s.bb,f]]}),i)},GuVW:function(e,t,n){"use strict";n.r(t),n.d(t,"SessionDetailModule",(function(){return y}));var r=n("ofXK"),i=n("tyNb"),a=n("1I5t"),o=n("X+KH"),s=n("fXoL"),c=n("TEn/");function l(e,t){if(1&e&&(s.Wb(0,"span"),s.Lc(1),s.Vb()),2&e){var n=t.$implicit;s.Fb("session-track-"+n.toLowerCase()),s.Db(1),s.Mc(n)}}var u=function(e){return{"show-favorite":e}};function d(e,t){if(1&e){var n=s.Xb();s.Wb(0,"div",6),s.Wb(1,"ion-grid",7),s.Wb(2,"ion-row"),s.Wb(3,"ion-col",8),s.Jc(4,l,2,3,"span",9),s.Vb(),s.Wb(5,"ion-col",10),s.Wb(6,"ion-icon",11),s.ec("click",(function(){return s.Cc(n),s.ic().toggleFavorite()})),s.Vb(),s.Wb(7,"ion-icon",12),s.ec("click",(function(){return s.Cc(n),s.ic().toggleFavorite()})),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(8,"h1"),s.Lc(9),s.Vb(),s.Wb(10,"p"),s.Lc(11),s.Vb(),s.Wb(12,"ion-text",13),s.Lc(13),s.Rb(14,"br"),s.Lc(15),s.Vb(),s.Vb()}if(2&e){var r=s.ic();s.Db(4),s.rc("ngForOf",null==r.session?null:r.session.tracks),s.Db(1),s.rc("ngClass",s.vc(7,u,r.isFavorite)),s.Db(4),s.Mc(r.session.name),s.Db(2),s.Mc(r.session.description),s.Db(2),s.Oc(" ",r.session.timeStart," \u2013 ",r.session.timeEnd," "),s.Db(2),s.Nc(" ",r.session.location," ")}}var b,p,f,h=[{path:"",component:(b=function(){function e(t,n,r){_classCallCheck(this,e),this.dataProvider=t,this.userProvider=n,this.route=r,this.isFavorite=!1,this.defaultHref=""}return _createClass(e,[{key:"sessionClick",value:function(e){console.log("Clicked",e)}},{key:"toggleFavorite",value:function(){this.userProvider.hasFavorite(this.session.name)?(this.userProvider.removeFavorite(this.session.name),this.isFavorite=!1):(this.userProvider.addFavorite(this.session.name),this.isFavorite=!0)}},{key:"ionViewWillEnter",value:function(){var e=this;this.dataProvider.load().subscribe((function(t){if(t&&t.schedule&&t.schedule[0]&&t.schedule[0].groups){var n,r=e.route.snapshot.paramMap.get("sessionId"),i=_createForOfIteratorHelper(t.schedule[0].groups);try{for(i.s();!(n=i.n()).done;){var a=n.value;if(a&&a.sessions){var o,s=_createForOfIteratorHelper(a.sessions);try{for(s.s();!(o=s.n()).done;){var c=o.value;if(c&&c.id===r){e.session=c,e.isFavorite=e.userProvider.hasFavorite(e.session.name);break}}}catch(l){s.e(l)}finally{s.f()}}}}catch(l){i.e(l)}finally{i.f()}}}))}},{key:"ionViewDidEnter",value:function(){this.defaultHref="/app/tabs/schedule"}}]),e}(),b.\u0275fac=function(e){return new(e||b)(s.Qb(a.a),s.Qb(o.a),s.Qb(i.a))},b.\u0275cmp=s.Kb({type:b,selectors:[["page-session-detail"]],decls:25,vars:3,consts:[["slot","start"],[3,"defaultHref"],["padding","",4,"ngIf"],["button","",3,"click"],["color","primary"],["slot","end","color","primary","size","small","name","cloud-download"],["padding",""],["no-padding",""],["size","6"],[3,"class",4,"ngFor","ngForOf"],["size","6","text-right","",3,"ngClass"],["name","heart-empty","size","large",1,"icon-heart-empty",3,"click"],["name","heart","color","danger","size","large",1,"icon-heart",3,"click"],["color","medium"]],template:function(e,t){1&e&&(s.Wb(0,"ion-header"),s.Wb(1,"ion-toolbar"),s.Wb(2,"ion-buttons",0),s.Rb(3,"ion-back-button",1),s.Vb(),s.Wb(4,"ion-title"),s.Lc(5),s.Vb(),s.Vb(),s.Vb(),s.Wb(6,"ion-content"),s.Jc(7,d,16,9,"div",2),s.Wb(8,"ion-list"),s.Wb(9,"ion-item",3),s.ec("click",(function(){return t.sessionClick("watch")})),s.Wb(10,"ion-label",4),s.Lc(11,"Watch"),s.Vb(),s.Vb(),s.Wb(12,"ion-item",3),s.ec("click",(function(){return t.sessionClick("add to calendar")})),s.Wb(13,"ion-label",4),s.Lc(14,"Add to Calendar"),s.Vb(),s.Vb(),s.Wb(15,"ion-item",3),s.ec("click",(function(){return t.sessionClick("mark as unwatched")})),s.Wb(16,"ion-label",4),s.Lc(17,"Mark as Unwatched"),s.Vb(),s.Vb(),s.Wb(18,"ion-item",3),s.ec("click",(function(){return t.sessionClick("download video")})),s.Wb(19,"ion-label",4),s.Lc(20,"Download Video"),s.Vb(),s.Rb(21,"ion-icon",5),s.Vb(),s.Wb(22,"ion-item",3),s.ec("click",(function(){return t.sessionClick("leave feedback")})),s.Wb(23,"ion-label",4),s.Lc(24,"Leave Feedback"),s.Vb(),s.Vb(),s.Vb(),s.Vb()),2&e&&(s.Db(3),s.rc("defaultHref",t.defaultHref),s.Db(2),s.Mc(null==t.session?null:t.session.name),s.Db(2),s.rc("ngIf",t.session))},directives:[c.v,c.ab,c.j,c.f,c.g,c.Y,c.s,r.m,c.D,c.y,c.C,c.w,c.u,c.K,c.r,r.l,r.k,c.V],styles:[".session-track-ionic[_ngcontent-%COMP%]{color:var(--ion-color-primary)}.session-track-angular[_ngcontent-%COMP%]{color:var(--ion-color-angular)}.session-track-communication[_ngcontent-%COMP%]{color:var(--ion-color-communication)}.session-track-tooling[_ngcontent-%COMP%]{color:var(--ion-color-tooling)}.session-track-services[_ngcontent-%COMP%]{color:var(--ion-color-services)}.session-track-design[_ngcontent-%COMP%]{color:var(--ion-color-design)}.session-track-workshop[_ngcontent-%COMP%]{color:var(--ion-color-workshop)}.session-track-food[_ngcontent-%COMP%]{color:var(--ion-color-food)}.session-track-documentation[_ngcontent-%COMP%]{color:var(--ion-color-documentation)}.session-track-navigation[_ngcontent-%COMP%]{color:var(--ion-color-navigation)}.show-favorite[_ngcontent-%COMP%]{position:relative}.icon-heart-empty[_ngcontent-%COMP%]{transform:scale(1)}.icon-heart[_ngcontent-%COMP%], .icon-heart-empty[_ngcontent-%COMP%]{position:absolute;top:5px;right:5px;transition:transform .3s ease}.icon-heart[_ngcontent-%COMP%]{transform:scale(0)}.show-favorite[_ngcontent-%COMP%]   .icon-heart[_ngcontent-%COMP%]{transform:scale(1)}.show-favorite[_ngcontent-%COMP%]   .icon-heart-empty[_ngcontent-%COMP%]{transform:scale(0)}"]}),b)}],m=((f=function e(){_classCallCheck(this,e)}).\u0275mod=s.Ob({type:f}),f.\u0275inj=s.Nb({factory:function(e){return new(e||f)},imports:[[i.k.forChild(h)],i.k]}),f),y=((p=function e(){_classCallCheck(this,e)}).\u0275mod=s.Ob({type:p}),p.\u0275inj=s.Nb({factory:function(e){return new(e||p)},imports:[[r.c,c.bb,m]]}),p)},KwJk:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return s}));var r=function(e,t){return null!==t.closest(e)},i=function(e){return"string"==typeof e&&e.length>0?_defineProperty({"ion-color":!0},"ion-color-".concat(e),!0):void 0},a=function(e){var t={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return t[e]=!0})),t},o=/^[a-z][a-z0-9+\-.]*:/,s=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t,n,r){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==t||"#"===t[0]||o.test(t)){e.next=4;break}if(!(i=document.querySelector("ion-router"))){e.next=4;break}return e.abrupt("return",(null!=n&&n.preventDefault(),i.push(t,r)));case 4:return e.abrupt("return",!1);case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},NC21:function(e,t,n){"use strict";n.r(t),n.d(t,"SpeakerDetailModule",(function(){return f}));var r=n("ofXK"),i=n("tyNb"),a=n("1I5t"),o=n("fXoL"),s=n("TEn/");function c(e,t){if(1&e&&(o.Wb(0,"div",4),o.Rb(1,"img",5),o.Rb(2,"br"),o.Wb(3,"ion-button",6),o.Rb(4,"ion-icon",7),o.Vb(),o.Wb(5,"ion-button",8),o.Rb(6,"ion-icon",9),o.Vb(),o.Wb(7,"ion-button",10),o.Rb(8,"ion-icon",11),o.Vb(),o.Vb()),2&e){var n=o.ic();o.Db(1),o.rc("src",n.speaker.profilePic,o.Ec)("alt",n.speaker.name)}}var l,u,d,b=[{path:"",component:(l=function(){function e(t,n,r){_classCallCheck(this,e),this.dataProvider=t,this.router=n,this.route=r}return _createClass(e,[{key:"ionViewWillEnter",value:function(){var e=this;this.dataProvider.load().subscribe((function(t){var n=e.route.snapshot.paramMap.get("speakerId");if(t&&t.speakers){var r,i=_createForOfIteratorHelper(t.speakers);try{for(i.s();!(r=i.n()).done;){var a=r.value;if(a&&a.id===n){e.speaker=a;break}}}catch(o){i.e(o)}finally{i.f()}}}))}}]),e}(),l.\u0275fac=function(e){return new(e||l)(o.Qb(a.a),o.Qb(i.g),o.Qb(i.a))},l.\u0275cmp=o.Kb({type:l,selectors:[["page-speaker-detail"]],decls:10,vars:3,consts:[["slot","start"],["defaultHref","/app/tabs/speakers"],["padding","",1,"speaker-detail"],["text-center","",4,"ngIf"],["text-center",""],[3,"src","alt"],["fill","clear","size","small","color","twitter"],["name","logo-twitter","slot","icon-only"],["fill","clear","size","small","color","github"],["name","logo-github","slot","icon-only"],["fill","clear","size","small","color","instagram"],["name","logo-instagram","slot","icon-only"]],template:function(e,t){1&e&&(o.Wb(0,"ion-header"),o.Wb(1,"ion-toolbar"),o.Wb(2,"ion-buttons",0),o.Rb(3,"ion-back-button",1),o.Vb(),o.Wb(4,"ion-title"),o.Lc(5),o.Vb(),o.Vb(),o.Vb(),o.Wb(6,"ion-content",2),o.Jc(7,c,9,2,"div",3),o.Wb(8,"p"),o.Lc(9),o.Vb(),o.Vb()),2&e&&(o.Db(5),o.Mc(null==t.speaker?null:t.speaker.name),o.Db(2),o.rc("ngIf",t.speaker),o.Db(2),o.Mc(null==t.speaker?null:t.speaker.about))},directives:[s.v,s.ab,s.j,s.f,s.g,s.Y,s.s,r.m,s.i,s.w],styles:[".speaker-detail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:140px;border-radius:50%}.speaker-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#60646b}"]}),l)}],p=((d=function e(){_classCallCheck(this,e)}).\u0275mod=o.Ob({type:d}),d.\u0275inj=o.Nb({factory:function(e){return new(e||d)},imports:[[i.k.forChild(b)],i.k]}),d),f=((u=function e(){_classCallCheck(this,e)}).\u0275mod=o.Ob({type:u}),u.\u0275inj=o.Nb({factory:function(e){return new(e||u)},imports:[[r.c,s.bb,p]]}),u)},NcW2:function(e,t,n){"use strict";n.r(t),n.d(t,"SpeakerListModule",(function(){return y}));var r=n("ofXK"),i=n("TEn/"),a=n("tyNb"),o=n("mrSG"),s=n("9B/o"),c=n("1I5t"),l=n("fXoL");function u(e,t){if(1&e&&(l.Wb(0,"ion-item",10),l.Wb(1,"h3"),l.Lc(2),l.Vb(),l.Vb()),2&e){var n=t.$implicit;l.tc("routerLink","/app/tabs/speakers/session/",n.id,""),l.Db(2),l.Mc(n.name)}}function d(e,t){if(1&e){var n=l.Xb();l.Wb(0,"ion-col",5),l.Wb(1,"ion-card",6),l.Wb(2,"ion-card-header"),l.Wb(3,"ion-item",7),l.Wb(4,"ion-avatar",0),l.Rb(5,"img",8),l.Vb(),l.Lc(6),l.Vb(),l.Vb(),l.Wb(7,"ion-card-content"),l.Wb(8,"ion-list"),l.Jc(9,u,3,2,"ion-item",9),l.Wb(10,"ion-item",10),l.Wb(11,"h3"),l.Lc(12),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Wb(13,"ion-row",11),l.Wb(14,"ion-col",12),l.Wb(15,"ion-button",13),l.ec("click",(function(){l.Cc(n);var e=t.$implicit;return l.ic().goToSpeakerTwitter(e)})),l.Rb(16,"ion-icon",14),l.Lc(17," Tweet "),l.Vb(),l.Vb(),l.Wb(18,"ion-col",15),l.Wb(19,"ion-button",13),l.ec("click",(function(){l.Cc(n);var e=t.$implicit;return l.ic().openSpeakerShare(e)})),l.Rb(20,"ion-icon",16),l.Lc(21," Share "),l.Vb(),l.Vb(),l.Wb(22,"ion-col",17),l.Wb(23,"ion-button",13),l.ec("click",(function(){l.Cc(n);var e=t.$implicit;return l.ic().openContact(e)})),l.Rb(24,"ion-icon",18),l.Lc(25," Contact "),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Vb()}if(2&e){var r=t.$implicit;l.Db(3),l.tc("routerLink","/app/tabs/speakers/speaker-details/",r.id,""),l.Db(2),l.rc("src",r.profilePic,l.Ec),l.Db(1),l.Nc(" ",r.name," "),l.Db(3),l.rc("ngForOf",r.sessions),l.Db(1),l.tc("routerLink","/app/tabs/speakers/speaker-details/",r.id,""),l.Db(2),l.Nc("About ",r.name,"")}}var b,p,f,h=[{path:"",component:(b=function(){function e(t,n,r,i){_classCallCheck(this,e),this.actionSheetCtrl=t,this.confData=n,this.inAppBrowser=r,this.router=i,this.speakers=[]}return _createClass(e,[{key:"ionViewDidEnter",value:function(){var e=this;this.confData.getSpeakers().subscribe((function(t){e.speakers=t}))}},{key:"goToSpeakerTwitter",value:function(e){this.inAppBrowser.create("https://twitter.com/".concat(e.twitter),"_blank")}},{key:"openSpeakerShare",value:function(e){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.actionSheetCtrl.create({header:"Share "+e.name,buttons:[{text:"Copy Link",handler:function(){console.log("Copy link clicked on https://twitter.com/"+e.twitter),window.cordova&&window.cordova.plugins.clipboard&&window.cordova.plugins.clipboard.copy("https://twitter.com/"+e.twitter)}},{text:"Share via ..."},{text:"Cancel",role:"cancel"}]});case 2:return n=t.sent,t.next=5,n.present();case 5:case"end":return t.stop()}}),t,this)})))}},{key:"openContact",value:function(e){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.actionSheetCtrl.create({header:"Contact "+e.name,buttons:[{text:"Email ( ".concat(e.email," )"),icon:null,handler:function(){window.open("mailto:"+e.email)}},{text:"Call ( ".concat(e.phone," )"),icon:null,handler:function(){window.open("tel:"+e.phone)}}]});case 2:return n=t.sent,t.next=5,n.present();case 5:case"end":return t.stop()}}),t,this)})))}}]),e}(),b.\u0275fac=function(e){return new(e||b)(l.Qb(i.a),l.Qb(c.a),l.Qb(s.a),l.Qb(a.g))},b.\u0275cmp=l.Kb({type:b,selectors:[["page-speaker-list"]],decls:11,vars:1,consts:[["slot","start"],[1,"outer-content"],["fixed",""],["align-items-stretch",""],["size","12","size-md","6",4,"ngFor","ngForOf"],["size","12","size-md","6"],[1,"speaker-card"],["detail","false","lines","none",3,"routerLink"],["alt","Speaker profile pic",3,"src"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"],["no-padding","","justify-content-center",""],["text-left","","size","4"],["fill","clear","size","small","color","primary",3,"click"],["name","logo-twitter","slot","start"],["text-center","","size","4"],["name","share-alt","slot","start"],["text-right","","size","4"],["name","chatboxes","slot","start"]],template:function(e,t){1&e&&(l.Wb(0,"ion-header"),l.Wb(1,"ion-toolbar"),l.Wb(2,"ion-buttons",0),l.Rb(3,"ion-menu-button"),l.Vb(),l.Wb(4,"ion-title"),l.Lc(5,"Speakers"),l.Vb(),l.Vb(),l.Vb(),l.Wb(6,"ion-content",1),l.Wb(7,"ion-list"),l.Wb(8,"ion-grid",2),l.Wb(9,"ion-row",3),l.Jc(10,d,26,6,"ion-col",4),l.Vb(),l.Vb(),l.Vb(),l.Vb()),2&e&&(l.Db(10),l.rc("ngForOf",t.speakers))},directives:[i.v,i.ab,i.j,i.G,i.Y,i.s,i.D,i.u,i.K,r.l,i.r,i.k,i.m,i.y,i.kb,a.i,i.e,i.l,i.i,i.w],styles:[".scroll[_ngcontent-%COMP%]{background:#ededed}.speaker-card[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column}.speaker-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{padding:0}.speaker-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding:4px 16px}.speaker-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{flex:1 1 auto;padding:0}"]}),b)}],m=((f=function e(){_classCallCheck(this,e)}).\u0275mod=l.Ob({type:f}),f.\u0275inj=l.Nb({factory:function(e){return new(e||f)},imports:[[a.k.forChild(h)],a.k]}),f),y=((p=function e(){_classCallCheck(this,e)}).\u0275mod=l.Ob({type:p}),p.\u0275inj=l.Nb({factory:function(e){return new(e||p)},imports:[[r.c,i.bb,m]]}),p)},NqGI:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));var r=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t,n,r,i,a){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return",t.attachViewToDom(n,r,a,i));case 2:if("string"==typeof r||r instanceof HTMLElement){e.next=4;break}throw new Error("framework delegate is missing");case 4:if(o="string"==typeof r?n.ownerDocument&&n.ownerDocument.createElement(r):r,i&&i.forEach((function(e){return o.classList.add(e)})),a&&Object.assign(o,a),n.appendChild(o),e.t0=o.componentOnReady,!e.t0){e.next=12;break}return e.next=12,o.componentOnReady();case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})));return function(t,n,r,i,a){return e.apply(this,arguments)}}(),i=function(e,t){if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},UoYK:function(e,t,n){"use strict";n.r(t),n.d(t,"AboutModule",(function(){return R}));var r=n("ofXK"),i=n("3Pt+"),a=n("TEn/"),o=n("YKLQ"),s=n("+DAS"),c=n("rIxz"),l=n("DzsY"),u=n("ybIa"),d=n("wd/R"),b=n("mLjM"),p=n("D+2S"),f=n("PWOX"),h=n("fXoL"),m=n("tyNb"),y=n("Wp6s"),g=n("bTqV"),v=n("NFeN"),w=n("iEmi");function k(e,t){if(1&e){var n=h.Xb();h.Wb(0,"ion-row",6),h.Wb(1,"ion-col"),h.Wb(2,"ion-item"),h.Wb(3,"ion-label",7),h.Lc(4,"Profile Image URL"),h.Vb(),h.Wb(5,"ion-input",8),h.ec("ionInput",(function(e){return h.Cc(n),h.ic().setimageurl(e)})),h.Vb(),h.Vb(),h.Vb(),h.Vb()}}function C(e,t){if(1&e){var n=h.Xb();h.Wb(0,"ion-row",6),h.Wb(1,"form",9),h.Wb(2,"h3"),h.Lc(3,"Change your current password"),h.Vb(),h.Wb(4,"ion-col"),h.Wb(5,"ion-item"),h.Wb(6,"ion-label",7),h.Lc(7,"New Password"),h.Vb(),h.Rb(8,"ion-input",10),h.Vb(),h.Wb(9,"ion-item"),h.Wb(10,"ion-label",7),h.Lc(11,"Confirm Password"),h.Vb(),h.Rb(12,"ion-input",11),h.Vb(),h.Wb(13,"ion-text",12),h.Wb(14,"p",13),h.Lc(15," Confirm Password is not matching with new Password "),h.Vb(),h.Vb(),h.Wb(16,"ion-item"),h.Wb(17,"ion-button",14),h.ec("click",(function(){return h.Cc(n),h.ic().updatepassword()})),h.Lc(18,"Set New Password"),h.Vb(),h.Vb(),h.Vb(),h.Vb(),h.Vb()}if(2&e){var r=h.ic();h.Db(1),h.rc("formGroup",r.userpassword),h.Db(13),h.rc("hidden",!(r.userpassword.errors&&r.userpassword.errors.passwordsNotEqual&&r.userpassword.controls.confirmpassword.touched)),h.Db(3),h.rc("disabled",!r.userpassword.valid)}}var x=function(e){return{color:e}};function V(e,t){if(1&e){var n=h.Xb();h.Wb(0,"button",15),h.ec("click",(function(){return h.Cc(n),h.ic().changeReadOnly()})),h.Wb(1,"mat-icon",16),h.Lc(2,"edit"),h.Vb(),h.Vb()}if(2&e){var r=h.ic();h.Db(1),h.rc("ngClass",h.vc(1,x,r.isreadonly?"#D09B2C":"black"))}}function W(e,t){if(1&e){var n=h.Xb();h.Wb(0,"yogagainv2-dyanamic-page",17),h.ec("actionEvent",(function(e){return h.Cc(n),h.ic().send(e)}))("cancelEvent",(function(e){return h.Cc(n),h.ic().cancel(e)})),h.Vb()}if(2&e){var r=h.ic();h.rc("isreadonly",r.isreadonly)("captchaOn",!1)("captchaName","registercaptcha")("whatform",r.whatcontrolsmap)("whatformgroup",r.inwhatformgroup)("whichbuttons",r.mybuttons)}}var O,P=((O=function(){function e(t,n,r,a,o,s,c,l){_classCallCheck(this,e),this.route=t,this.ysharedata=n,this.ydata=r,this.ygen=a,this.yauth=o,this.router=s,this.ydataservice=c,this.yobuilderservice=l,this.overrideiamge="",this.title="Add Event",this.needcaptcha=!1,this.mybuttons=new Map,this.isreadonly=!1,this.loaded=!1,this.crudlist=new u.a("/profiles/",r.getDatabase(),!0,this.ygen.getUid()),this.userpassword=new i.g({newpassword:new i.d("",i.u.compose([i.u.required,i.u.maxLength(20)])),confirmpassword:new i.d("",i.u.compose([i.u.required,i.u.maxLength(20)]))},{validators:_})}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;console.log("dddd ");var t=this.route.snapshot.params.id;t?(this.cruddata=new u.a("/profiles/"+t,this.ydata.getDatabase(),!1,this.ygen.getUid()),this.cruddata.getData().subscribe((function(n){e.currentEvent=n,Object.assign(e.currentEvent,{$key:t}),e.isreadonly=!0,e.title="Edit Event",e.startObject()}))):(this.title="Add Event",this.startObject())}},{key:"getDomainObject",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=[],r=0;return d(new Date).format("YYYY-MM-DD"),n[r]=new b.b(r,"photo","https://res.cloudinary.com/ideasyogi/image/upload/v1554035710/yashica_tzklwz.png",b.a.image),n[r].placeholder="Proile Picture",n[r].required=!1,n[r].showme=!0,n[r].readonly=t,n[++r]=new b.b(r,"imageuploaded",!1,b.a.slidetoggle),n[r].placeholder="imageuploaded",n[r].required=!1,n[r].showme=!0,n[r].readonly=t,n[++r]=new b.b(r,"userName","",b.a.text),n[r].placeholder="Your Name",n[r].required=!0,n[r].readonly=t,n[++r]=new b.b(r,"mobile","",b.a.phone),n[r].placeholder="Your phone",n[r].required=!0,n[r].readonly=t,n[++r]=new b.b(r,"unitName","",b.a.text),n[r].placeholder="Building / House name",n[r].required=!1,n[r].showme=!0,n[r].readonly=t,n[++r]=new b.b(r,"city","",b.a.text),n[r].placeholder="City",n[r].required=!1,n[r].showme=!0,n[r].readonly=t,n[++r]=new b.b(r,"zip","",b.a.text),n[r].placeholder="ZIP",n[r].required=!1,n[r].showme=!0,n[r].readonly=t,n[++r]=new b.b(r,"state","",b.a.text),n[r].placeholder="State",n[r].required=!1,n[r].showme=!0,n[r].readonly=t,n[++r]=new b.b(r,"country","",b.a.text),n[r].placeholder="Country",n[r].required=!1,n[r].showme=!0,n[r].readonly=t,n[++r]=new b.b(r,"createdBy","",b.a.text),n[r].placeholder="createdBy",n[r].required=!1,n[r].showme=!1,n[r].readonly=t,n[++r]=new b.b(r,"updatedBy","",b.a.text),n[r].placeholder="updatedBy",n[r].required=!1,n[r].showme=!1,n[r].readonly=t,n[++r]=new b.b(r,"active",!1,b.a.slidetoggle),n[r].placeholder="Active",n[r].required=!1,n[r].showme=!0,n[r].readonly=t,n[++r]=new b.b(r,"uid","",b.a.text),n[r].placeholder="key",n[r].required=!1,n[r].showme=!1,n[r].readonly=t,n[r]=new b.b(r,"emailVerified",!1,b.a.slidetoggle),n[r].placeholder="Email verified",n[r].enabled=!0,n[r].showme=!!this.ygen.isAdmin(),n[r].required=!1,n[++r]=new b.b(r,"mobileVerified",!1,b.a.slidetoggle),n[r].placeholder="Mobile verified",n[r].enabled=!0,n[r].showme=!!this.ygen.isAdmin(),n[r].required=!1,n[++r]=new b.b(r,"approved",!1,b.a.slidetoggle),n[r].placeholder="Approved",n[r].enabled=!0,n[r].showme=!!this.ygen.isAdmin(),n[r].required=!1,n[++r]=new b.b(r,"paid",!1,b.a.slidetoggle),n[r].placeholder="Paid",n[r].enabled=!0,n[r].showme=!!this.ygen.isAdmin(),n[r].required=!1,n[++r]=new b.b(r,"isadmin",!1,b.a.slidetoggle),n[r].placeholder="Is A Admin",n[r].enabled=!0,n[r].showme=!!this.ygen.isAdmin(),n[r].required=!1,n[++r]=new b.b(r,"$key",!1,b.a.text),n[r].placeholder="is a key",n[r].enabled=!0,n[r].showme=!!this.ygen.isAdmin(),n[r].required=!1,n.forEach((function(n){n.readonly=t,t&&(n.required=!1),e.currentEvent&&(n.value="date"===n.whattype?new Date(e.currentEvent[n.name]):e.currentEvent[n.name])})),n}},{key:"startObject",value:function(){var e=this;this.clear=!1,this.whatcontrolsmap=new Map,this.inwhatformgroup=null;var t=new Map;this.getDomainObject(this.isreadonly).forEach((function(e){t.set(e.name,e)})),this.inwhatformgroup=this.yobuilderservice.createFormGroup(t),this.whatcontrolsmap=this.yobuilderservice.createMap(t,this.inwhatformgroup);var n=new p.a("Cancel","cancel","cancel_presentation","secondary",!1),r=new p.a("Save Data","events","lock_open","primary",!1);this.mybuttons.set("Action2",r),this.mybuttons.set("Action1",n),setTimeout((function(){e.clear=!0}),50)}},{key:"setimageurl",value:function(e){this.overrideiamge=e.target.value}},{key:"cancel",value:function(e){console.log(e),this.ygen.goBack()}},{key:"changeReadOnly",value:function(){this.isreadonly=!this.isreadonly,this.startObject()}},{key:"isItOwner",value:function(){return!(!this.currentEvent||!this.currentEvent.createdBy)&&this.ygen.isItOwner(this.currentEvent.createdBy)}},{key:"send",value:function(e){this.overrideiamge.length>0&&this.ygen.isLoggedIn()&&this.ygen.isAdmin()&&Object.assign(e.data.value,{photo:this.overrideiamge}),this.currentEvent&&this.currentEvent.$key?this.cruddata.updateData(e.data.value):this.crudlist.addtolist(e.data.value),this.router.navigate([e.whatnext])}},{key:"updatepassword",value:function(){this.yauth.updateCurrentPassword(this.userpassword.value.newpassword)}}]),e}()).\u0275fac=function(e){return new(e||O)(h.Qb(m.a),h.Qb(o.a),h.Qb(s.a),h.Qb(c.a),h.Qb(f.a),h.Qb(m.g),h.Qb(o.a),h.Qb(l.a))},O.\u0275cmp=h.Kb({type:O,selectors:[["page-about"]],decls:16,vars:5,consts:[["slot","start"],["padding",""],["align-items-center","","text-center","",4,"ngIf"],["class","editable","mat-mini-fab","",3,"click",4,"ngIf"],[1,"box"],[3,"isreadonly","captchaOn","captchaName","whatform","whatformgroup","whichbuttons","actionEvent","cancelEvent",4,"ngIf"],["align-items-center","","text-center",""],["position","stacked"],["type","url","value","",3,"ionInput"],[3,"formGroup"],["type","password","formControlName","newpassword","clearInput","true","required","true","value",""],["type","password","formControlName","confirmpassword","clearInput","true","required","true","value",""],["color","danger"],["padding-left","",3,"hidden"],["expand","block","fill","outline",3,"disabled","click"],["mat-mini-fab","",1,"editable",3,"click"],[3,"ngClass"],[3,"isreadonly","captchaOn","captchaName","whatform","whatformgroup","whichbuttons","actionEvent","cancelEvent"]],template:function(e,t){1&e&&(h.Wb(0,"ion-header"),h.Wb(1,"ion-toolbar"),h.Wb(2,"ion-buttons",0),h.Rb(3,"ion-back-button"),h.Vb(),h.Wb(4,"ion-title"),h.Lc(5),h.Vb(),h.Vb(),h.Vb(),h.Wb(6,"ion-content",1),h.Wb(7,"ion-grid"),h.Jc(8,k,6,0,"ion-row",2),h.Jc(9,C,19,3,"ion-row",2),h.Wb(10,"ion-row"),h.Wb(11,"ion-col"),h.Jc(12,V,3,3,"button",3),h.Wb(13,"mat-card"),h.Wb(14,"mat-card-content",4),h.Jc(15,W,1,6,"yogagainv2-dyanamic-page",5),h.Vb(),h.Vb(),h.Vb(),h.Vb(),h.Vb(),h.Vb()),2&e&&(h.Db(5),h.Mc(t.title),h.Db(3),h.rc("ngIf",t.ygen.isLoggedIn()&&t.ygen.isAdmin()),h.Db(1),h.rc("ngIf",t.ygen.isLoggedIn()&&t.isItOwner()),h.Db(3),h.rc("ngIf","Edit Event"==t.title),h.Db(3),h.rc("ngIf",t.clear))},directives:[a.v,a.ab,a.j,a.f,a.g,a.Y,a.s,a.u,r.m,a.K,a.r,y.a,y.d,a.y,a.C,a.x,a.mb,i.v,i.o,i.h,i.n,i.f,i.t,a.V,a.i,g.a,v.a,r.k,w.a],styles:[".editable[_ngcontent-%COMP%]{position:absolute;left:93%;z-index:1}primary[_ngcontent-%COMP%]{color:red}accent[_ngcontent-%COMP%]{color:#000}"]}),O);function _(e){return e.controls.newpassword.value===e.controls.confirmpassword.value?null:{passwordsNotEqual:!0}}var M,E,D=[{path:"",component:P}],L=((M=function e(){_classCallCheck(this,e)}).\u0275mod=h.Ob({type:M}),M.\u0275inj=h.Nb({factory:function(e){return new(e||M)},imports:[[m.k.forChild(D)],m.k]}),M),S=n("hVaU"),I=n("IZvt"),j=n("4pxM"),R=((E=function e(){_classCallCheck(this,e)}).\u0275mod=h.Ob({type:E,bootstrap:[P]}),E.\u0275inj=h.Nb({factory:function(e){return new(e||E)},imports:[[r.c,i.i,i.s,a.bb,L,S.a,j.a,I.a]]}),E)},dMTE:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("DVUX"),i=n("9B/o"),a=n("rIxz"),o=n("+DAS"),s=n("PWOX"),c=n("cBbZ"),l=n("fXoL"),u=n("TEn/"),d=function(){var e=function(){function e(t,n,r,i,a,o,s,c){_classCallCheck(this,e),this.events=t,this.yauth=n,this.ydata=r,this.toasterService=i,this.iab=a,this.ygen=o,this.zone=s,this.navCtrl=c}return _createClass(e,[{key:"pay",value:function(e){this.currentPayment=e;var t=this.yauth.getappSettings(),n={merchantname:t.merchantname,merchantkey:t.merchantkey};this.currentPayment.renewapp&&(n={merchantname:t.apprenewmerchantname,merchantkey:t.apprenewmerchantkey}),this.ygen.ismobile()?this.paymobile(e,n):this.payweb(e,n)}},{key:"payweb",value:function(e,t){var n=this.yauth.getcurrentuserProfile();console.log("what data -",e),e.displayMessage=!1;var r={description:"Kirana Gali payments",image:"https://res.cloudinary.com/ideasyogi/image/upload/v1515431720/bo6xnxehii0vqjlgemaj.png",currency:"INR",key:t.merchantkey,amount:100*e.amount,name:t.merchantname,prefill:{email:n.userid,contact:n.mobile,name:n.userName},theme:{color:"#F37254"},handler:this.successWebCallback.bind(this)};this.rzp1=new this.ygen.nativeWindow.Razorpay(r),this.rzp1.open()}},{key:"paymobile",value:function(e,t){var n=this.yauth.getcurrentuserProfile();console.log("what data -",e),e.displayMessage=!1,RazorpayCheckout.open({description:"Kirana Gali payments",image:"https://res.cloudinary.com/ideasyogi/image/upload/v1515431720/bo6xnxehii0vqjlgemaj.png",currency:"INR",key:t.merchantkey,amount:100*e.amount,name:t.merchantname,prefill:{email:n.userid,contact:n.mobile,name:n.userName},theme:{color:"#F37254"},modal:{ondismiss:function(){alert("dismissed")}}},this.successCallback.bind(this),this.cancelCallback)}},{key:"handlerazorpayresponse",value:function(e){var t=this,n=this.yauth.getcurrentuserProfile();this.currentPayment.displayMessage=!0,this.currentPayment.paymentmethod="PNO",this.currentPayment.paymentResponse={payment_id:e,order_id:this.currentPayment.key,status_message:"Thanks, You have successfully made this payment. Reference number =["+e+"]",order_status:"Success",status_code:"Success"};var r={};Object.assign(r,this.currentPayment),delete r.$key,delete r.$exists,this.zone.run((function(){t.toasterService.pop("info","Success","Thanks, You have successfully made this payment"),t.toasterService.pop("info","Success","Reference number "+e)})),this.currentPayment.renewapp?(delete this.currentPayment.paymentResponse.order_id,Object.assign(this.currentPayment,{paidby:n.uid,paydate:+new Date}),this.events.publish("renew:success["+this.currentPayment.sendorderid+"]",this.currentPayment)):this.currentPayment.isorder?(delete this.currentPayment.paymentResponse.order_id,Object.assign(this.currentPayment,{orderedBy:n.uid,odt:+new Date,ostatus:"NEW"}),this.events.publish("order:success["+this.currentPayment.sendorderid+"]",this.currentPayment)):this.ydata.updatemyinbox(this.currentPayment)}},{key:"successWebCallback",value:function(e){this.handlerazorpayresponse(e=e.razorpay_payment_id)}},{key:"successCallback",value:function(e){this.handlerazorpayresponse(e)}},{key:"cancelCallback",value:function(e){alert(e.description+" (Error "+e.code+")")}},{key:"donePayment",value:function(e){}}]),e}();return e.\u0275fac=function(t){return new(t||e)(l.ac(c.a),l.ac(s.a),l.ac(o.a),l.ac(r.d),l.ac(i.a),l.ac(a.a),l.ac(l.A),l.ac(u.gb))},e.\u0275prov=l.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},xgmX:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return i}));var r={getEngine:function(){var e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(e){var t=this.getEngine();if(t){var n=this.isCapacitor()?e.style.toUpperCase():e.style;t.impact({style:n})}},notification:function(e){var t=this.getEngine();if(t){var n=this.isCapacitor()?e.style.toUpperCase():e.style;t.notification({style:n})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())}},i=function(){r.selection()},a=function(){r.selectionStart()},o=function(){r.selectionChanged()},s=function(){r.selectionEnd()},c=function(e){r.impact(e)}}}]);