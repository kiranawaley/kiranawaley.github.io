function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{G09Y:function(t,e,n){"use strict";n.r(e),n.d(e,"ForgotpassPageModule",(function(){return T}));var o=n("ofXK"),i=n("3Pt+"),r=n("tyNb"),a=n("TEn/"),c=n("sH8K"),s=n("DzsY"),b=n("D+2S"),u=n("0nTO"),l=n("DVUX"),h=n("i2Ty"),p=n("PWOX"),f=n("gAVi"),y=n("rIxz"),d=n("fXoL"),g=n("Wp6s"),m=n("iEmi"),v=n("sYmb");function w(t,e){1&t&&(d.Wb(0,"ion-button",6),d.Mc(1),d.jc(2,"translate"),d.Vb()),2&t&&(d.Db(1),d.Oc(" ",d.kc(2,1,"Signup")," "))}var k,V,W=((k=function(){function t(e,n,o,i,r,a,c,s,b){_classCallCheck(this,t),this.ygen=e,this.alertme=n,this.yovalservice=o,this.yobuilderservice=i,this.ynotification=r,this.toasterService=a,this.yauth=c,this.ystorageservice=s,this.router=b,this.whatcontrolsmap=new Map,this.mybuttons=new Map,this.loadingindicator=!1,this.startObject()}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"startObject",value:function(){var t=new Map;t.set("userid",this.yobuilderservice.createType("userid","Enter Your Email",!0,!0,!0,"email",1,"","Your email address")),this.inwhatformgroup=this.yobuilderservice.createFormGroup(t),this.whatcontrolsmap=this.yobuilderservice.createMap(t,this.inwhatformgroup);var e=new b.a("Reset","unlock","lock_open","primary",!1);this.mybuttons.set("Action",e)}},{key:"send",value:function(t){console.log("capturing events",t),this.reset(t.data.value)}},{key:"cancel",value:function(t){console.log("canceling events",t),this.startObject()}},{key:"registerToken",value:function(t){this.ynotification.registertoken()}},{key:"isTenantSelection",value:function(){return this.ystorageservice.isTenantSelection()}},{key:"reset",value:function(t){this.yauth.resetPassword(t.userid)}}]),t}()).\u0275fac=function(t){return new(t||k)(d.Qb(y.a),d.Qb(h.a),d.Qb(c.a),d.Qb(s.a),d.Qb(u.a),d.Qb(l.d),d.Qb(p.a),d.Qb(f.a),d.Qb(r.j))},k.\u0275cmp=d.Kb({type:k,selectors:[["app-forgotpass"]],decls:20,vars:12,consts:[[3,"color"],["slot","start"],[1,"box"],[3,"captchaOn","whatform","whatformgroup","whichbuttons","actionEvent","cancelEvent"],["color","secondary","routerLink","/login"],["color","secondary","routerLink","/register",4,"ngIf"],["color","secondary","routerLink","/register"]],template:function(t,e){1&t&&(d.Wb(0,"ion-header"),d.Wb(1,"ion-toolbar",0),d.Wb(2,"ion-buttons",1),d.Rb(3,"ion-menu-button"),d.Vb(),d.Wb(4,"ion-title"),d.Mc(5),d.jc(6,"translate"),d.Vb(),d.Vb(),d.Vb(),d.Wb(7,"ion-content"),d.Wb(8,"ion-grid"),d.Wb(9,"ion-row"),d.Wb(10,"ion-col"),d.Wb(11,"mat-card"),d.Wb(12,"mat-card-content",2),d.Wb(13,"yogagainv2-dyanamic-page",3),d.ec("actionEvent",(function(t){return e.send(t)}))("cancelEvent",(function(t){return e.cancel(t)})),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Wb(14,"ion-row"),d.Wb(15,"ion-col"),d.Wb(16,"ion-button",4),d.Mc(17),d.jc(18,"translate"),d.Vb(),d.Kc(19,w,3,3,"ion-button",5),d.Vb(),d.Vb(),d.Vb(),d.Vb()),2&t&&(d.Db(1),d.rc("color",e.ygen.isTenantSelection()?"primary":"secondary"),d.Db(4),d.Nc(d.kc(6,8,"Forgot Password")),d.Db(8),d.rc("captchaOn",!0)("whatform",e.whatcontrolsmap)("whatformgroup",e.inwhatformgroup)("whichbuttons",e.mybuttons),d.Db(4),d.Oc(" ",d.kc(18,10,"Login")," "),d.Db(2),d.rc("ngIf",!e.ygen.isTenantSelection()))},directives:[a.y,a.fb,a.j,a.L,a.db,a.s,a.x,a.P,a.r,g.a,g.d,m.a,a.i,a.qb,r.l,o.m],pipes:[v.c],styles:[""]}),k),O=n("hVaU"),j=n("4pxM"),C=n("IZvt"),P=[{path:"",component:W}],T=((V=function t(){_classCallCheck(this,t)}).\u0275mod=d.Ob({type:V}),V.\u0275inj=d.Nb({factory:function(t){return new(t||V)},imports:[[o.c,i.i,a.gb,i.t,O.a,j.a,C.a,r.n.forChild(P)]]}),V)}}]);