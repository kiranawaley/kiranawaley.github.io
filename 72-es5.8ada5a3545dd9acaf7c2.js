function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,i){return n&&_defineProperties(e.prototype,n),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{pwtZ:function(e,n,i){"use strict";i.r(n),i.d(n,"TutorialModule",(function(){return g}));var t,o,a,r=i("ofXK"),s=i("TEn/"),c=i("tyNb"),l=i("gAVi"),b=i("fXoL"),p=i("e8h1"),d=["slides"],u=[{path:"",component:(t=function(){function e(n,i,t,o){_classCallCheck(this,e),this.menu=n,this.router=i,this.storage=t,this.ystore=o,this.showSkip=!0}return _createClass(e,[{key:"startApp",value:function(){var e=this;console.log("dadaa"),this.ystore.setItem("ion_did_welcome_shopper",!0),this.router.navigateByUrl("/tenants").then((function(){return e.storage.set("ion_did_tutorial","true")}))}},{key:"onSlideChangeStart",value:function(e){var n=this;e.target.isEnd().then((function(e){n.showSkip=!e}))}},{key:"ionViewWillEnter",value:function(){console.log("dadaa");var e=this.ystore.getItem("ion_did_welcome_shopper");this.router.navigateByUrl(e?"/tenants":"/tutorial"),this.menu.enable(!1)}},{key:"ionViewDidLeave",value:function(){this.menu.enable(!0)}}]),e}(),t.\u0275fac=function(e){return new(e||t)(b.Qb(s.jb),b.Qb(c.j),b.Qb(p.b),b.Qb(l.a))},t.\u0275cmp=b.Kb({type:t,selectors:[["page-tutorial"]],viewQuery:function(e,n){var i;1&e&&b.Sc(d,!0),2&e&&b.yc(i=b.fc())&&(n.slides=i.first)},decls:42,vars:1,consts:[["no-border",""],["slot","end"],["color","primary",3,"hidden","click"],["fullscreen",""],["pager","false",3,"ionSlideWillChange"],["slides",""],["src","assets/img/ica-slidebox-img-1.png",1,"slide-image"],[1,"slide-title"],["src","assets/img/ica-slidebox-img-2.png",1,"slide-image"],["src","assets/img/ica-slidebox-img-3.png",1,"slide-image"],["src","assets/img/ica-slidebox-img-4.png",1,"slide-image"],["fill","clear",3,"click"],["slot","end","name","arrow-forward"]],template:function(e,n){1&e&&(b.Wb(0,"ion-header",0),b.Wb(1,"ion-toolbar"),b.Wb(2,"ion-buttons",1),b.Wb(3,"ion-button",2),b.ec("click",(function(){return n.startApp()})),b.Mc(4,"Skip"),b.Vb(),b.Vb(),b.Vb(),b.Vb(),b.Wb(5,"ion-content",3),b.Wb(6,"ion-slides",4,5),b.ec("ionSlideWillChange",(function(e){return n.onSlideChangeStart(e)})),b.Wb(8,"ion-slide"),b.Rb(9,"img",6),b.Wb(10,"h2",7),b.Mc(11," Welcome to "),b.Wb(12,"b"),b.Mc(13,"KiranaGali App"),b.Vb(),b.Vb(),b.Wb(14,"p"),b.Mc(15," The "),b.Wb(16,"b"),b.Mc(17,"KiranaGali app"),b.Vb(),b.Mc(18," is a practical example about how to use technology for ease of usage.... "),b.Vb(),b.Vb(),b.Wb(19,"ion-slide"),b.Rb(20,"img",8),b.Wb(21,"h2",7),b.Mc(22,"What is Shop in KiranaGali App?"),b.Vb(),b.Wb(23,"p"),b.Wb(24,"b"),b.Mc(25,"It's a Kirana Shop"),b.Vb(),b.Mc(26," The Kirana shops who want to sell its good on the this platform by utilizing services provided by KiranaGali APP"),b.Vb(),b.Vb(),b.Wb(27,"ion-slide"),b.Rb(28,"img",9),b.Wb(29,"h2",7),b.Mc(30,"How can I register my Kirana Shop?"),b.Vb(),b.Wb(31,"p"),b.Wb(32,"b"),b.Mc(33,"In KiranaGali App"),b.Vb(),b.Mc(34," Yes you can register your Kirana Shop and you will recieve a phone call after verification and procedures and your Kirana Shop will be registered."),b.Vb(),b.Vb(),b.Wb(35,"ion-slide"),b.Rb(36,"img",10),b.Wb(37,"h2",7),b.Mc(38,"Come Join Us?"),b.Vb(),b.Wb(39,"ion-button",11),b.ec("click",(function(){return n.startApp()})),b.Mc(40," Continue "),b.Rb(41,"ion-icon",12),b.Vb(),b.Vb(),b.Vb(),b.Vb()),2&e&&(b.Db(3),b.rc("hidden",!n.showSkip))},directives:[s.y,s.fb,s.j,s.i,s.s,s.U,s.T,s.z],styles:["ion-toolbar[_ngcontent-%COMP%]{--background:transparent;--border-color:transparent}.swiper-slide[_ngcontent-%COMP%]{display:block}.slide-title[_ngcontent-%COMP%]{margin-top:2.8rem}.slide-image[_ngcontent-%COMP%]{max-height:50%}b[_ngcontent-%COMP%]{font-weight:500}p[_ngcontent-%COMP%]{padding:0 40px;font-size:14px;line-height:1.5;color:#60646b}p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:#000}ion-content[_ngcontent-%COMP%]{background-image:url(https://res.cloudinary.com/ideasyogi/image/upload/v1532261373/hlrzr6dedr2vynvh0k7x.jpg)}"]}),t)}],h=((a=function e(){_classCallCheck(this,e)}).\u0275mod=b.Ob({type:a}),a.\u0275inj=b.Nb({factory:function(e){return new(e||a)},imports:[[c.n.forChild(u)],c.n]}),a),g=((o=function e(){_classCallCheck(this,e)}).\u0275mod=b.Ob({type:o}),o.\u0275inj=b.Nb({factory:function(e){return new(e||o)},imports:[[r.c,s.gb,h]]}),o)}}]);