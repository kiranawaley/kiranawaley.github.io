(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{TtBp:function(e,t,i){"use strict";i.r(t),i.d(t,"WelcomePageModule",(function(){return f}));var n=i("ofXK"),o=i("3Pt+"),s=i("tyNb"),c=i("TEn/"),a=i("hVaU"),r=i("gAVi"),l=i("+DAS"),b=i("fXoL"),d=i("e8h1");const g=["slides"];function m(e,t){if(1&e&&(b.Wb(0,"ion-slide"),b.Rb(1,"img",12),b.Wb(2,"h2",7),b.Lc(3),b.Vb(),b.Wb(4,"p"),b.Wb(5,"b"),b.Lc(6),b.Vb(),b.Lc(7),b.Vb(),b.Vb()),2&e){const e=t.$implicit;b.Db(1),b.sc("src",e.img,b.Ec),b.Db(2),b.Mc(e.title),b.Db(3),b.Mc(e.bold),b.Db(1),b.Mc(e.message)}}let p=(()=>{class e{constructor(e,t,i,n,o){this.menu=e,this.router=t,this.storage=i,this.ystorage=n,this.ydata=o,this.showSkip=!0,this.communityname="Community"}ngOnInit(){this.communityname=this.ystorage.getItem("communityname"),this.welcomeslides=this.ydata.getwelcomeslides(),console.log("dfafda")}startApp(){console.log("dfafda"),this.ystorage.setItem("ion_did_welcome_buyer",!0),setTimeout(()=>{this.router.navigateByUrl("/shoplanding",{replaceUrl:!0}).then(()=>this.storage.set("ion_did_welcome","true"))})}onSlideChangeStart(e){e.target.isEnd().then(e=>{this.showSkip=!e})}ionViewWillEnter(){this.ystorage.getItem("ion_did_welcome_buyer")?setTimeout(()=>{this.router.navigateByUrl("/shoplanding",{replaceUrl:!0})}):this.router.navigateByUrl("/welcome",{replaceUrl:!0}),this.menu.enable(!1)}ionViewDidLeave(){this.menu.enable(!0)}}return e.\u0275fac=function(t){return new(t||e)(b.Qb(c.eb),b.Qb(s.g),b.Qb(d.b),b.Qb(r.a),b.Qb(l.a))},e.\u0275cmp=b.Kb({type:e,selectors:[["app-welcome"]],viewQuery:function(e,t){var i;1&e&&b.Rc(g,!0),2&e&&b.yc(i=b.fc())&&(t.slides=i.first)},decls:28,vars:5,consts:[["no-border",""],["slot","end"],["color","primary",3,"hidden","click"],["fullscreen",""],["pager","false",3,"ionSlideWillChange"],["slides",""],["src","assets/img/ica-slidebox-img-1.png",1,"slide-image"],[1,"slide-title"],[4,"ngFor","ngForOf"],["src","assets/img/ica-slidebox-img-4.png",1,"slide-image"],["fill","clear",3,"click"],["slot","end","name","arrow-forward"],[1,"slide-image",3,"src"]],template:function(e,t){1&e&&(b.Wb(0,"ion-header",0),b.Wb(1,"ion-toolbar"),b.Wb(2,"ion-buttons",1),b.Wb(3,"ion-button",2),b.ec("click",(function(){return t.startApp()})),b.Lc(4,"Skip"),b.Vb(),b.Vb(),b.Vb(),b.Vb(),b.Wb(5,"ion-content",3),b.Wb(6,"ion-slides",4,5),b.ec("ionSlideWillChange",(function(e){return t.onSlideChangeStart(e)})),b.Wb(8,"ion-slide"),b.Rb(9,"img",6),b.Wb(10,"h2",7),b.Lc(11," Welcome to "),b.Wb(12,"b"),b.Lc(13),b.Vb(),b.Vb(),b.Wb(14,"p"),b.Lc(15," The "),b.Wb(16,"b"),b.Lc(17,"KiranaGali app"),b.Vb(),b.Lc(18," is a practical example about how to use technology for ease of usage.... "),b.Vb(),b.Vb(),b.Jc(19,m,8,4,"ion-slide",8),b.jc(20,"async"),b.Wb(21,"ion-slide"),b.Rb(22,"img",9),b.Wb(23,"h2",7),b.Lc(24,"Ready for KiranaGali?"),b.Vb(),b.Wb(25,"ion-button",10),b.ec("click",(function(){return t.startApp()})),b.Lc(26," Continue "),b.Rb(27,"ion-icon",11),b.Vb(),b.Vb(),b.Vb(),b.Vb()),2&e&&(b.Db(3),b.rc("hidden",!t.showSkip),b.Db(10),b.Nc("",t.communityname," "),b.Db(6),b.rc("ngForOf",b.kc(20,3,t.welcomeslides)))},directives:[c.v,c.ab,c.j,c.i,c.s,c.P,c.O,n.l,c.w],pipes:[n.b],styles:["ion-toolbar[_ngcontent-%COMP%]{--background:transparent;--border-color:transparent}.swiper-slide[_ngcontent-%COMP%]{display:block}.slide-title[_ngcontent-%COMP%]{margin-top:2.8rem}.slide-image[_ngcontent-%COMP%]{max-height:50%;max-width:100%}b[_ngcontent-%COMP%]{font-weight:500}p[_ngcontent-%COMP%]{padding:0 40px;font-size:14px;line-height:1.5;color:#60646b}p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:#000}"]}),e})();var h=i("IZvt");const u=[{path:"",component:p}];let f=(()=>{class e{}return e.\u0275mod=b.Ob({type:e}),e.\u0275inj=b.Nb({factory:function(t){return new(t||e)},imports:[[n.c,o.i,c.bb,a.a,h.a,s.k.forChild(u)]]}),e})()}}]);