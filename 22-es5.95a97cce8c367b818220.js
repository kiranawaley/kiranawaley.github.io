function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{AWRA:function(t,e,n){"use strict";n.r(e),n.d(e,"SubscriptionPageModule",(function(){return O}));var i=n("ofXK"),a=n("3Pt+"),c=n("tyNb"),b=n("TEn/"),r=n("+DAS"),o=n("ybIa"),s=n("YKLQ"),u=n("i2Ty"),d=n("rIxz"),p=n("PWOX"),l=n("dMTE"),m=n("wd/R"),h=n("cBbZ"),g=n("fXoL"),f=n("0IaG"),y=n("Wp6s"),v=n("bTqV");function W(t,e){1&t&&(g.Wb(0,"div"),g.Wb(1,"h1"),g.Lc(2," Your subscription Ended, Please Renew..."),g.Vb(),g.Vb())}function V(t,e){if(1&t){var n=g.Xb();g.Wb(0,"div",16),g.Wb(1,"div",17),g.Wb(2,"mat-card",18),g.Wb(3,"div",19),g.Lc(4,"Basic"),g.Vb(),g.Wb(5,"mat-card-content"),g.Wb(6,"h4",20),g.Lc(7,"6 Months"),g.Vb(),g.Wb(8,"p"),g.Lc(9,"Your Store will be activated for 06 months in "),g.Vb(),g.Wb(10,"div"),g.Wb(11,"b"),g.Lc(12,"Rs 3,999"),g.Vb(),g.Vb(),g.Vb(),g.Wb(13,"mat-card-footer"),g.Wb(14,"div",13),g.Wb(15,"button",21),g.ec("click",(function(){return g.Cc(n),g.ic().renew(6)})),g.Lc(16,"Renew"),g.Vb(),g.Vb(),g.Vb(),g.Vb(),g.Wb(17,"mat-card",22),g.Wb(18,"div",23),g.Lc(19,"Premium"),g.Vb(),g.Wb(20,"mat-card-content"),g.Wb(21,"h4",20),g.Lc(22,"12 Months"),g.Vb(),g.Wb(23,"p"),g.Lc(24,"Your Store will be activated for 12 months in "),g.Vb(),g.Wb(25,"div"),g.Wb(26,"b"),g.Lc(27,"Rs 5,999"),g.Vb(),g.Vb(),g.Vb(),g.Wb(28,"mat-card-footer"),g.Wb(29,"div",13),g.Wb(30,"button",24),g.ec("click",(function(){return g.Cc(n),g.ic().renew(12)})),g.Lc(31,"Renew"),g.Vb(),g.Vb(),g.Vb(),g.Vb(),g.Vb(),g.Vb()}}function w(t,e){if(1&t&&(g.Wb(0,"mat-card",3),g.Wb(1,"mat-card-header"),g.Wb(2,"mat-card-title"),g.Lc(3,"Your Payment History"),g.Vb(),g.Vb(),g.Wb(4,"mat-card-content"),g.Wb(5,"div",5),g.Wb(6,"div",6),g.Lc(7,"Paid on"),g.Vb(),g.Wb(8,"div",7),g.Lc(9),g.Vb(),g.Vb(),g.Wb(10,"div",5),g.Wb(11,"div",6),g.Lc(12,"Paid For"),g.Vb(),g.Wb(13,"div",7),g.Lc(14),g.Vb(),g.Vb(),g.Wb(15,"div",5),g.Wb(16,"div",6),g.Lc(17,"Paid Reference"),g.Vb(),g.Wb(18,"div",7),g.Lc(19),g.Vb(),g.Vb(),g.Vb(),g.Vb()),2&t){var n=e.$implicit,i=g.ic();g.Db(9),g.Nc("",i.ygen.formatTimestampToDate(n.paydate)," "),g.Db(5),g.Nc("Rs ",n.amount," "),g.Db(5),g.Nc("",i.ygen.formatTimestampToDate(null==n.paymentResponse?null:n.paymentResponse.payment_id)," ")}}var L,P,C=((L=function(){function t(e,n,i,a,c,b,r,s,u,d){_classCallCheck(this,t),this.events=e,this.ypay=n,this.yauth=i,this.ygen=a,this.alertme=c,this.route=b,this.router=r,this.ysharedata=s,this.ydata=u,this.dialog=d,this.priceitem={},this.subscription={},this.crudList=new o.a("/launchapp/renewpayments",u.getDatabase(),!0,this.ygen.getUid()),this.priceitem=this.yauth.getappSettings()}return _createClass(t,[{key:"ngOnInit",value:function(){this.renewlist=this.crudList.getList(),this.subscription=this.yauth.subscriptionaccount}},{key:"navigate",value:function(t,e){this.ysharedata.setData("currentevent",e),this.router.navigate([t],{queryParams:e})}},{key:"renew",value:function(t){var e=this,n=6==t?this.priceitem.appsix?this.priceitem.appsix:3999:this.priceitem.apptwelve?this.priceitem.apptwelve:5999,i="business";12==t&&(i="premium");var a=this.ydata.getDatabase().createPushId();this.ypay.pay({sendorderid:a,renewapp:!0,isorder:!1,amount:n}),this.events.subscribe("renew:success["+a+"]",(function(n){e.events.unsubscribe("renew:success["+a+"]");var c=+new Date,b=30*t+7,r=+m(new Date(c)).add(b,"days");e.yauth.subscriptionaccount.subscriptiondate=r,e.yauth.issubscriptionon=!0,e.yauth.subscriptiontype=i,e.subscription=e.yauth.subscriptionaccount,e.ydata.getDatabase().object("/launchapp").update({subscriptiondate:r,subscriptiontype:i});var o=e.ydata.getDatabase().createPushId();e.crudList.getListRefer().set(o,n),e.alertme.successdata("You have Successfully Renewed your Subscription with us, Congratulations").then((function(t){console.log("done",t)})),e.events.publish("shop:checksubscription")}))}}]),t}()).\u0275fac=function(t){return new(t||L)(g.Qb(h.a),g.Qb(l.a),g.Qb(p.a),g.Qb(d.a),g.Qb(u.a),g.Qb(c.a),g.Qb(c.g),g.Qb(s.a),g.Qb(r.a),g.Qb(f.b))},L.\u0275cmp=g.Kb({type:L,selectors:[["app-subscription"]],decls:43,vars:10,consts:[[3,"color"],["slot","start"],[1,"ion-padding"],[1,"example-card"],["mat-card-avatar","",1,"example-header-image"],[1,"container"],[1,"item","ylable"],[1,"item","ytext"],[1,"ycricle"],[1,"counter"],[1,"dte"],[4,"ngIf"],["class","pricetable","style","display: flex;",4,"ngIf"],[1,"containerb"],["mat-button","","color","warning","routerLink","/dashboard"],["class","example-card",4,"ngFor","ngForOf"],[1,"pricetable",2,"display","flex"],[1,"md-padding"],[1,"priceclass","basicback"],[1,"myhead","basic"],["layout","row","layout-align","center",1,"md-title"],["mat-button","","color","warning",3,"click"],[1,"priceclass","preimumback"],[1,"myhead","premium"],["mat-button","",3,"click"]],template:function(t,e){1&t&&(g.Wb(0,"ion-toolbar",0),g.Wb(1,"ion-buttons",1),g.Rb(2,"ion-menu-button"),g.Vb(),g.Wb(3,"ion-buttons",1),g.Rb(4,"ion-back-button"),g.Vb(),g.Wb(5,"ion-title"),g.Lc(6,"Subscription Information"),g.Vb(),g.Vb(),g.Wb(7,"ion-content",2),g.Wb(8,"mat-card",3),g.Wb(9,"mat-card-header"),g.Rb(10,"div",4),g.Wb(11,"mat-card-title"),g.Lc(12,"Your Store Subscription"),g.Vb(),g.Vb(),g.Wb(13,"mat-card-content"),g.Wb(14,"div",5),g.Wb(15,"div",6),g.Lc(16,"Store Launch on"),g.Vb(),g.Wb(17,"div",7),g.Lc(18),g.Vb(),g.Vb(),g.Wb(19,"div",5),g.Wb(20,"div",6),g.Lc(21,"Subscription End Date"),g.Vb(),g.Wb(22,"div",7),g.Lc(23),g.Vb(),g.Vb(),g.Wb(24,"div",5),g.Wb(25,"div",6),g.Lc(26,"Current Subscription"),g.Vb(),g.Wb(27,"div",7),g.Lc(28),g.Vb(),g.Vb(),g.Wb(29,"div"),g.Wb(30,"div",8),g.Wb(31,"div",9),g.Lc(32),g.Vb(),g.Vb(),g.Wb(33,"div",10),g.Lc(34,"Days to Expiry"),g.Vb(),g.Vb(),g.Jc(35,W,3,0,"div",11),g.Jc(36,V,32,0,"div",12),g.Vb(),g.Wb(37,"mat-card-actions"),g.Wb(38,"div",13),g.Wb(39,"button",14),g.Lc(40,"Cancel"),g.Vb(),g.Vb(),g.Vb(),g.Vb(),g.Jc(41,w,20,3,"mat-card",15),g.jc(42,"async"),g.Vb()),2&t&&(g.rc("color","warning"),g.Db(18),g.Nc("",e.ygen.formatTimestampToDate(e.subscription.lanunchdate)," "),g.Db(5),g.Nc("",e.ygen.formatTimestampToDate(e.subscription.subscriptiondate)," "),g.Db(5),g.Nc("",e.ygen.getSubscriptionType()," "),g.Db(4),g.Nc(" ",e.subscription.subscriptiondaysremaining," "),g.Db(3),g.rc("ngIf",!e.subscription.issubscriptionon),g.Db(1),g.rc("ngIf",e.subscription.subscriptiondaysremaining<=14),g.Db(5),g.rc("ngForOf",g.kc(42,8,e.renewlist)))},directives:[b.ab,b.j,b.G,b.f,b.g,b.Y,b.s,y.a,y.f,y.c,y.h,y.d,i.m,y.b,v.a,b.kb,c.i,i.l,y.e],pipes:[i.b],styles:[".example-card[_ngcontent-%COMP%]{max-width:400px;margin:auto}.container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.containerb[_ngcontent-%COMP%]{display:flex;justify-content:space-around}.item[_ngcontent-%COMP%]{font-size:15px}.ytext[_ngcontent-%COMP%]{font-weight:700}.counter[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:small}.ycricle[_ngcontent-%COMP%]{width:200px;height:200px;border-radius:50%;font-size:40px;line-height:200px;text-align:center;background:#000;color:#fff;margin:10px auto}.priceclass[_ngcontent-%COMP%]{width:46%;margin-right:5px;background:rgba(0,0,0,.17)}.md-padding[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.myhead[_ngcontent-%COMP%]{font-size:20px;font-weight:700;margin-bottom:10px;text-align:center;padding:10px}.basic[_ngcontent-%COMP%], .myhead[_ngcontent-%COMP%]{background:rgba(0,255,255,.2)}.premimum[_ngcontent-%COMP%]{background:rgba(255,0,0,.32)}.premimumback[_ngcontent-%COMP%]{background:rgba(16,3,3,.17)}.basicback[_ngcontent-%COMP%]{background:rgba(0,0,2,.11)}.mat-card-footer[_ngcontent-%COMP%]{background:#ffb6c1}.dte[_ngcontent-%COMP%]{position:absolute;left:41%;top:42%;color:#7fffd4}"]}),L),k=n("IZvt"),x=n("4pxM"),_=n("hVaU"),D=[{path:"",component:C}],O=((P=function t(){_classCallCheck(this,t)}).\u0275mod=g.Ob({type:P}),P.\u0275inj=g.Nb({factory:function(t){return new(t||P)},imports:[[i.c,a.i,b.bb,_.a,k.a,x.a,c.k.forChild(D)]]}),P)}}]);