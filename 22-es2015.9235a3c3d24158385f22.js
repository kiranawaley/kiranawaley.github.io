(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{AWRA:function(t,e,n){"use strict";n.r(e),n.d(e,"SubscriptionPageModule",(function(){return k}));var i=n("ofXK"),a=n("3Pt+"),c=n("tyNb"),b=n("TEn/"),s=n("+DAS"),o=n("ybIa"),r=n("YKLQ"),d=n("i2Ty"),u=n("rIxz"),p=n("PWOX"),m=n("dMTE"),l=n("wd/R"),g=n("cBbZ"),h=n("G2i7"),y=n("fXoL"),W=n("0IaG"),V=n("Wp6s"),f=n("bTqV");function v(t,e){1&t&&(y.Wb(0,"div"),y.Wb(1,"h1"),y.Mc(2," Your subscription Ended, Please Renew..."),y.Vb(),y.Vb())}function M(t,e){if(1&t){const t=y.Xb();y.Wb(0,"div",16),y.Wb(1,"div",17),y.Wb(2,"mat-card",18),y.Wb(3,"div",19),y.Mc(4,"Basic"),y.Vb(),y.Wb(5,"mat-card-content"),y.Wb(6,"h4",20),y.Mc(7,"6 Months"),y.Vb(),y.Wb(8,"p"),y.Mc(9,"Your Store will be activated for 06 months in "),y.Vb(),y.Wb(10,"div"),y.Wb(11,"b"),y.Mc(12),y.Vb(),y.Vb(),y.Vb(),y.Wb(13,"mat-card-footer"),y.Wb(14,"div",13),y.Wb(15,"button",21),y.ec("click",(function(){return y.Cc(t),y.ic().renew(6)})),y.Mc(16,"Renew"),y.Vb(),y.Vb(),y.Vb(),y.Vb(),y.Wb(17,"mat-card",22),y.Wb(18,"div",23),y.Mc(19,"Premium"),y.Vb(),y.Wb(20,"mat-card-content"),y.Wb(21,"h4",20),y.Mc(22,"12 Months"),y.Vb(),y.Wb(23,"p"),y.Mc(24,"Your Store will be activated for 12 months in "),y.Vb(),y.Wb(25,"div"),y.Wb(26,"b"),y.Mc(27),y.Vb(),y.Vb(),y.Vb(),y.Wb(28,"mat-card-footer"),y.Wb(29,"div",13),y.Wb(30,"button",24),y.ec("click",(function(){return y.Cc(t),y.ic().renew(12)})),y.Mc(31,"Renew"),y.Vb(),y.Vb(),y.Vb(),y.Vb(),y.Vb(),y.Vb()}if(2&t){const t=y.ic();y.Db(12),y.Oc("",t.ygen.getcurrencysymbol()," 3,999"),y.Db(15),y.Oc("",t.ygen.getcurrencysymbol()," 5,999")}}function w(t,e){if(1&t&&(y.Wb(0,"mat-card",3),y.Wb(1,"mat-card-header"),y.Wb(2,"mat-card-title"),y.Mc(3,"Your Payment History"),y.Vb(),y.Vb(),y.Wb(4,"mat-card-content"),y.Wb(5,"div",5),y.Wb(6,"div",6),y.Mc(7,"Paid on"),y.Vb(),y.Wb(8,"div",7),y.Mc(9),y.Vb(),y.Vb(),y.Wb(10,"div",5),y.Wb(11,"div",6),y.Mc(12,"Paid For"),y.Vb(),y.Wb(13,"div",7),y.Mc(14),y.Vb(),y.Vb(),y.Wb(15,"div",5),y.Wb(16,"div",6),y.Mc(17,"Paid Reference"),y.Vb(),y.Wb(18,"div",7),y.Mc(19),y.Vb(),y.Vb(),y.Vb(),y.Vb()),2&t){const t=e.$implicit,n=y.ic();y.Db(9),y.Oc("",n.ygen.formatTimestampToDate(t.paydate)," "),y.Db(5),y.Pc("",n.ygen.getcurrencysymbol()," ",t.amount," "),y.Db(5),y.Oc("",n.ygen.formatTimestampToDate(null==t.paymentResponse?null:t.paymentResponse.payment_id)," ")}}let O=(()=>{class t{constructor(t,e,n,i,a,c,b,s,r,d){this.events=t,this.ypay=e,this.yauth=n,this.ygen=i,this.alertme=a,this.route=c,this.router=b,this.ysharedata=s,this.ydata=r,this.dialog=d,this.priceitem={},this.subscription={},this.crudList=new o.a(h.a.getpath()+"/launchapp/renewpayments",r.getDatabase(),!0,this.ygen.getUid()),this.priceitem=this.yauth.getappSettings()}ngOnInit(){this.renewlist=this.crudList.getList(),this.subscription=this.yauth.subscriptionaccount}navigate(t,e){this.ysharedata.setData("currentevent",e),this.router.navigate([t],{queryParams:e})}renew(t){let e=6==t?this.priceitem.appsix?this.priceitem.appsix:3999:this.priceitem.apptwelve?this.priceitem.apptwelve:5999,n="business";12==t&&(n="premium");let i=this.ydata.getDatabase().createPushId();this.ypay.pay({sendorderid:i,renewapp:!0,isorder:!1,amount:e}),this.events.subscribe("renew:success["+i+"]",e=>{this.events.unsubscribe("renew:success["+i+"]");let a=+new Date,c=30*t+7,b=+l(new Date(a)).add(c,"days");this.yauth.subscriptionaccount.subscriptiondate=b,this.yauth.issubscriptionon=!0,this.yauth.subscriptiontype=n,this.subscription=this.yauth.subscriptionaccount,this.ydata.getDatabase().object(h.a.getpath()+"/launchapp").update({subscriptiondate:b,subscriptiontype:n});let s=this.ydata.getDatabase().createPushId();this.crudList.getListRefer().set(s,e),this.alertme.successdata("You have Successfully Renewed your Subscription with us, Congratulations").then(t=>{console.log("done11",t),this.events.publish("shop:checksubscription")})})}}return t.\u0275fac=function(e){return new(e||t)(y.Qb(g.a),y.Qb(m.a),y.Qb(p.a),y.Qb(u.a),y.Qb(d.a),y.Qb(c.a),y.Qb(c.j),y.Qb(r.a),y.Qb(s.a),y.Qb(W.b))},t.\u0275cmp=y.Kb({type:t,selectors:[["app-subscription"]],decls:43,vars:10,consts:[[3,"color"],["slot","start"],[1,"ion-padding"],[1,"example-card"],["mat-card-avatar","",1,"example-header-image"],[1,"container"],[1,"item","ylable"],[1,"item","ytext"],[1,"ycricle"],[1,"counter"],[1,"dte"],[4,"ngIf"],["class","pricetable","style","display: flex;",4,"ngIf"],[1,"containerb"],["mat-button","","color","warning","routerLink","/dashboard"],["class","example-card",4,"ngFor","ngForOf"],[1,"pricetable",2,"display","flex"],[1,"md-padding"],[1,"priceclass","basicback"],[1,"myhead","basic"],["layout","row","layout-align","center",1,"md-title"],["mat-button","","color","warning",3,"click"],[1,"priceclass","preimumback"],[1,"myhead","premium"],["mat-button","",3,"click"]],template:function(t,e){1&t&&(y.Wb(0,"ion-toolbar",0),y.Wb(1,"ion-buttons",1),y.Rb(2,"ion-menu-button"),y.Vb(),y.Wb(3,"ion-buttons",1),y.Rb(4,"ion-back-button"),y.Vb(),y.Wb(5,"ion-title"),y.Mc(6,"Subscription Information"),y.Vb(),y.Vb(),y.Wb(7,"ion-content",2),y.Wb(8,"mat-card",3),y.Wb(9,"mat-card-header"),y.Rb(10,"div",4),y.Wb(11,"mat-card-title"),y.Mc(12,"Your Store Subscription"),y.Vb(),y.Vb(),y.Wb(13,"mat-card-content"),y.Wb(14,"div",5),y.Wb(15,"div",6),y.Mc(16,"Store Launch on"),y.Vb(),y.Wb(17,"div",7),y.Mc(18),y.Vb(),y.Vb(),y.Wb(19,"div",5),y.Wb(20,"div",6),y.Mc(21,"Subscription End Date"),y.Vb(),y.Wb(22,"div",7),y.Mc(23),y.Vb(),y.Vb(),y.Wb(24,"div",5),y.Wb(25,"div",6),y.Mc(26,"Current Subscription"),y.Vb(),y.Wb(27,"div",7),y.Mc(28),y.Vb(),y.Vb(),y.Wb(29,"div"),y.Wb(30,"div",8),y.Wb(31,"div",9),y.Mc(32),y.Vb(),y.Vb(),y.Wb(33,"div",10),y.Mc(34,"Days to Expiry"),y.Vb(),y.Vb(),y.Kc(35,v,3,0,"div",11),y.Kc(36,M,32,2,"div",12),y.Vb(),y.Wb(37,"mat-card-actions"),y.Wb(38,"div",13),y.Wb(39,"button",14),y.Mc(40,"Cancel"),y.Vb(),y.Vb(),y.Vb(),y.Vb(),y.Kc(41,w,20,4,"mat-card",15),y.jc(42,"async"),y.Vb()),2&t&&(y.rc("color","warning"),y.Db(18),y.Oc("",e.ygen.formatTimestampToDate(e.subscription.lanunchdate)," "),y.Db(5),y.Oc("",e.ygen.formatTimestampToDate(e.subscription.subscriptiondate)," "),y.Db(5),y.Oc("",e.ygen.getSubscriptionType()," "),y.Db(4),y.Oc(" ",e.subscription.subscriptiondaysremaining," "),y.Db(3),y.rc("ngIf",!e.subscription.issubscriptionon),y.Db(1),y.rc("ngIf",e.subscription.subscriptiondaysremaining<=14),y.Db(5),y.rc("ngForOf",y.kc(42,8,e.renewlist)))},directives:[b.fb,b.j,b.L,b.f,b.g,b.db,b.s,V.a,V.f,V.c,V.h,V.d,i.m,V.b,f.a,b.qb,c.l,i.l,V.e],pipes:[i.b],styles:[".example-card[_ngcontent-%COMP%]{max-width:400px;margin:auto}.container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.containerb[_ngcontent-%COMP%]{display:flex;justify-content:space-around}.item[_ngcontent-%COMP%]{font-size:15px}.ytext[_ngcontent-%COMP%]{font-weight:700}.counter[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:small}.ycricle[_ngcontent-%COMP%]{width:200px;height:200px;border-radius:50%;font-size:40px;line-height:200px;text-align:center;background:#000;color:#fff;margin:10px auto}.priceclass[_ngcontent-%COMP%]{width:46%;margin-right:5px;background:rgba(0,0,0,.17)}.md-padding[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.myhead[_ngcontent-%COMP%]{font-size:20px;font-weight:700;margin-bottom:10px;text-align:center;padding:10px}.basic[_ngcontent-%COMP%], .myhead[_ngcontent-%COMP%]{background:rgba(0,255,255,.2)}.premimum[_ngcontent-%COMP%]{background:rgba(255,0,0,.32)}.premimumback[_ngcontent-%COMP%]{background:rgba(16,3,3,.17)}.basicback[_ngcontent-%COMP%]{background:rgba(0,0,2,.11)}.mat-card-footer[_ngcontent-%COMP%]{background:#ffb6c1}.dte[_ngcontent-%COMP%]{position:absolute;left:41%;top:42%;color:#7fffd4}"]}),t})();var P=n("IZvt"),x=n("4pxM"),D=n("hVaU");const C=[{path:"",component:O}];let k=(()=>{class t{}return t.\u0275mod=y.Ob({type:t}),t.\u0275inj=y.Nb({factory:function(e){return new(e||t)},imports:[[i.c,a.i,b.gb,D.a,P.a,x.a,c.n.forChild(C)]]}),t})()}}]);