(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{pwtZ:function(e,i,n){"use strict";n.r(i),n.d(i,"TutorialModule",(function(){return p}));var t=n("ofXK"),o=n("TEn/"),a=n("tyNb"),r=n("gAVi"),s=n("fXoL"),c=n("e8h1");const l=["slides"],b=[{path:"",component:(()=>{class e{constructor(e,i,n,t){this.menu=e,this.router=i,this.storage=n,this.ystore=t,this.showSkip=!0}startApp(){console.log("dadaa"),this.ystore.setItem("ion_did_welcome_shopper",!0),this.router.navigateByUrl("/tenants").then(()=>this.storage.set("ion_did_tutorial","true"))}onSlideChangeStart(e){e.target.isEnd().then(e=>{this.showSkip=!e})}ionViewWillEnter(){console.log("dadaa");let e=this.ystore.getItem("ion_did_welcome_shopper");this.router.navigateByUrl(e?"/tenants":"/tutorial"),this.menu.enable(!1)}ionViewDidLeave(){this.menu.enable(!0)}}return e.\u0275fac=function(i){return new(i||e)(s.Qb(o.eb),s.Qb(a.g),s.Qb(c.b),s.Qb(r.a))},e.\u0275cmp=s.Kb({type:e,selectors:[["page-tutorial"]],viewQuery:function(e,i){var n;1&e&&s.Rc(l,!0),2&e&&s.yc(n=s.fc())&&(i.slides=n.first)},decls:42,vars:1,consts:[["no-border",""],["slot","end"],["color","primary",3,"hidden","click"],["fullscreen",""],["pager","false",3,"ionSlideWillChange"],["slides",""],["src","assets/img/ica-slidebox-img-1.png",1,"slide-image"],[1,"slide-title"],["src","assets/img/ica-slidebox-img-2.png",1,"slide-image"],["src","assets/img/ica-slidebox-img-3.png",1,"slide-image"],["src","assets/img/ica-slidebox-img-4.png",1,"slide-image"],["fill","clear",3,"click"],["slot","end","name","arrow-forward"]],template:function(e,i){1&e&&(s.Wb(0,"ion-header",0),s.Wb(1,"ion-toolbar"),s.Wb(2,"ion-buttons",1),s.Wb(3,"ion-button",2),s.ec("click",(function(){return i.startApp()})),s.Lc(4,"Skip"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(5,"ion-content",3),s.Wb(6,"ion-slides",4,5),s.ec("ionSlideWillChange",(function(e){return i.onSlideChangeStart(e)})),s.Wb(8,"ion-slide"),s.Rb(9,"img",6),s.Wb(10,"h2",7),s.Lc(11," Welcome to "),s.Wb(12,"b"),s.Lc(13,"KiranaGali App"),s.Vb(),s.Vb(),s.Wb(14,"p"),s.Lc(15," The "),s.Wb(16,"b"),s.Lc(17,"KiranaGali app"),s.Vb(),s.Lc(18," is a practical example about how to use technology for ease of usage.... "),s.Vb(),s.Vb(),s.Wb(19,"ion-slide"),s.Rb(20,"img",8),s.Wb(21,"h2",7),s.Lc(22,"What is Shop in KiranaGali App?"),s.Vb(),s.Wb(23,"p"),s.Wb(24,"b"),s.Lc(25,"It's a Kirana Shop"),s.Vb(),s.Lc(26," The Kirana shops who want to sell its good on the this platform by utilizing services provided by KiranaGali APP"),s.Vb(),s.Vb(),s.Wb(27,"ion-slide"),s.Rb(28,"img",9),s.Wb(29,"h2",7),s.Lc(30,"How can I register my Kirana Shop?"),s.Vb(),s.Wb(31,"p"),s.Wb(32,"b"),s.Lc(33,"In KiranaGali App"),s.Vb(),s.Lc(34," Yes you can register your Kirana Shop and you will recieve a phone call after verification and procedures and your Kirana Shop will be registered."),s.Vb(),s.Vb(),s.Wb(35,"ion-slide"),s.Rb(36,"img",10),s.Wb(37,"h2",7),s.Lc(38,"Come Join Us?"),s.Vb(),s.Wb(39,"ion-button",11),s.ec("click",(function(){return i.startApp()})),s.Lc(40," Continue "),s.Rb(41,"ion-icon",12),s.Vb(),s.Vb(),s.Vb(),s.Vb()),2&e&&(s.Db(3),s.rc("hidden",!i.showSkip))},directives:[o.v,o.ab,o.j,o.i,o.s,o.P,o.O,o.w],styles:["ion-toolbar[_ngcontent-%COMP%]{--background:transparent;--border-color:transparent}.swiper-slide[_ngcontent-%COMP%]{display:block}.slide-title[_ngcontent-%COMP%]{margin-top:2.8rem}.slide-image[_ngcontent-%COMP%]{max-height:50%}b[_ngcontent-%COMP%]{font-weight:500}p[_ngcontent-%COMP%]{padding:0 40px;font-size:14px;line-height:1.5;color:#60646b}p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:#000}ion-content[_ngcontent-%COMP%]{background-image:url(https://res.cloudinary.com/ideasyogi/image/upload/v1532261373/hlrzr6dedr2vynvh0k7x.jpg)}"]}),e})()}];let d=(()=>{class e{}return e.\u0275mod=s.Ob({type:e}),e.\u0275inj=s.Nb({factory:function(i){return new(i||e)},imports:[[a.k.forChild(b)],a.k]}),e})(),p=(()=>{class e{}return e.\u0275mod=s.Ob({type:e}),e.\u0275inj=s.Nb({factory:function(i){return new(i||e)},imports:[[t.c,o.bb,d]]}),e})()}}]);