function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var c=e[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(n,c.key,c)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{"8qEe":function(n,e,t){"use strict";t.r(e),t.d(e,"TenantsPageModule",(function(){return tn}));var c=t("ofXK"),i=t("3Pt+"),o=t("tyNb"),a=t("TEn/"),r=t("hVaU"),l=t("4pxM"),b=t("IZvt"),s=t("gAVi"),u=t("DVUX"),f=t("+DAS"),g=t("PWOX"),d=t("YKLQ"),p=t("rIxz"),h=t("i2Ty"),v=t("Azfv"),m=t("fXoL"),y=t("/per"),D=t("A5z7"),k=t("NFeN"),V=t("kmnG"),W=t("sYmb"),I=t("zHOv"),T=t("jwdR");function L(n,e){if(1&n){var t=m.Xb();m.Wb(0,"ion-header"),m.Wb(1,"ion-toolbar",2),m.Wb(2,"ion-buttons",5),m.Rb(3,"ion-menu-button"),m.Vb(),m.Wb(4,"ion-title"),m.Lc(5),m.jc(6,"translate"),m.Vb(),m.Wb(7,"ion-buttons",6),m.Rb(8,"app-callphone",7),m.Vb(),m.Vb(),m.Wb(9,"ion-toolbar",2),m.Wb(10,"ion-searchbar",8),m.ec("ngModelChange",(function(n){return m.Cc(t),m.ic().queryText=n})),m.jc(11,"translate"),m.Vb(),m.Vb(),m.Vb()}if(2&n){var c=m.ic();m.Db(1),m.rc("color",(c.ygen.isTenantSelection(),"warning")),m.Db(4),m.Mc(m.kc(6,6,"Online Shops")),m.Db(3),m.rc("mobile","9657965084"),m.Db(1),m.rc("color",(c.ygen.isTenantSelection(),"warning")),m.Db(1),m.sc("placeholder",m.kc(11,8,"Search by shop name or pincode")),m.rc("ngModel",c.queryText)}}function C(n,e){if(1&n){var t=m.Xb();m.Wb(0,"ion-header"),m.Wb(1,"ion-toolbar",2),m.Wb(2,"ion-buttons",5),m.Rb(3,"ion-menu-button"),m.Vb(),m.Wb(4,"ion-segment",9),m.ec("ngModelChange",(function(n){return m.Cc(t),m.ic().segment=n}))("ionChange",(function(){return m.Cc(t),m.ic().searchTenants()})),m.Wb(5,"ion-segment-button",10),m.Lc(6),m.jc(7,"translate"),m.Vb(),m.Wb(8,"ion-segment-button",11),m.Lc(9),m.jc(10,"translate"),m.Vb(),m.Vb(),m.Vb(),m.Wb(11,"ion-toolbar"),m.Wb(12,"ion-searchbar",8),m.ec("ngModelChange",(function(n){return m.Cc(t),m.ic().queryText=n})),m.jc(13,"translate"),m.Vb(),m.Vb(),m.Vb()}if(2&n){var c=m.ic();m.Db(1),m.rc("color",(c.ygen.isTenantSelection(),"warning")),m.Db(3),m.rc("ngModel",c.segment),m.Db(2),m.Nc(" ",m.kc(7,6,"All")," "),m.Db(3),m.Nc(" ",m.kc(10,8,"Pending Approvals")," "),m.Db(3),m.sc("placeholder",m.kc(13,10,"Search by shop name or pincode")),m.rc("ngModel",c.queryText)}}function N(n,e){1&n&&m.Rb(0,"ion-progress-bar",16)}function J(n,e){1&n&&(m.Wb(0,"mat-icon",20),m.Lc(1,"cancel"),m.Vb())}function x(n,e){if(1&n){var t=m.Xb();m.Wb(0,"mat-chip-list",17),m.Wb(1,"mat-chip",18),m.ec("removed",(function(){return m.Cc(t),m.ic(2).queryText=""})),m.Lc(2),m.Jc(3,J,2,0,"mat-icon",19),m.Vb(),m.Vb()}if(2&n){var c=m.ic(2);m.Db(1),m.rc("removable",c.removable),m.Db(1),m.Nc("",c.queryText," "),m.Db(1),m.rc("ngIf",c.removable)}}function j(n,e){if(1&n){var t=m.Xb();m.Wb(0,"ion-button",31),m.ec("click",(function(){m.Cc(t);var n=m.ic().$implicit;return m.ic(4).setTenant(n)})),m.Lc(1),m.jc(2,"translate"),m.Vb()}2&n&&(m.Db(1),m.Nc(" ",m.kc(2,1,"Select and Join"),""))}function w(n,e){if(1&n){var t=m.Xb();m.Wb(0,"ion-button",32),m.ec("click",(function(){m.Cc(t);var n=m.ic().$implicit;return m.ic(4).editTenant(n)})),m.Lc(1),m.jc(2,"translate"),m.Vb()}2&n&&(m.Db(1),m.Mc(m.kc(2,1,"Edit")))}function q(n,e){if(1&n){var t=m.Xb();m.Wb(0,"ion-button",32),m.ec("click",(function(){m.Cc(t);var n=m.ic().$implicit;return m.ic(4).editTenant(n)})),m.Lc(1),m.jc(2,"translate"),m.Vb()}2&n&&(m.Db(1),m.Mc(m.kc(2,1,"Edit & Approve")))}function E(n,e){if(1&n){var t=m.Xb();m.Wb(0,"ion-button",33),m.ec("click",(function(){m.Cc(t);var n=m.ic().$implicit;return m.ic(4).deleteTenant(n)})),m.Lc(1),m.jc(2,"translate"),m.Vb()}2&n&&(m.Db(1),m.Mc(m.kc(2,1,"Delete")))}function M(n,e){1&n&&(m.Wb(0,"ion-button",34),m.Lc(1),m.jc(2,"translate"),m.Vb()),2&n&&(m.Db(1),m.Nc(" ",m.kc(2,1,"Newly Requested")," "))}function S(n,e){1&n&&(m.Wb(0,"ion-button",34),m.Lc(1),m.jc(2,"translate"),m.Vb()),2&n&&(m.Db(1),m.Nc(" ",m.kc(2,1,"Under Approval")," "))}function X(n,e){if(1&n){var t=m.Xb();m.Wb(0,"ion-button",35),m.ec("click",(function(){m.Cc(t);var n=m.ic().$implicit;return m.ic(4).buycommunity(n)})),m.Lc(1),m.jc(2,"translate"),m.Vb()}2&n&&(m.Db(1),m.Nc("",m.kc(2,1,"Buy Shop")," "))}function A(n,e){if(1&n&&(m.Wb(0,"ion-card"),m.Wb(1,"ion-card-header"),m.Wb(2,"ion-card-title"),m.Lc(3),m.Vb(),m.Wb(4,"ion-card-subtitle"),m.Lc(5),m.Vb(),m.Vb(),m.Wb(6,"ion-card-content",24),m.Lc(7),m.Rb(8,"br"),m.Wb(9,"div",25),m.Lc(10),m.Vb(),m.Wb(11,"div"),m.Wb(12,"h1"),m.Lc(13),m.Vb(),m.Vb(),m.Vb(),m.Wb(14,"ion-item"),m.Jc(15,j,3,3,"ion-button",26),m.Jc(16,w,3,3,"ion-button",27),m.Jc(17,q,3,3,"ion-button",27),m.Jc(18,E,3,3,"ion-button",28),m.Jc(19,M,3,3,"ion-button",29),m.Jc(20,S,3,3,"ion-button",29),m.Jc(21,X,3,3,"ion-button",30),m.Vb(),m.Vb()),2&n){var t=e.$implicit,c=m.ic(4);m.Db(3),m.Nc(" ",t.tenantname," "),m.Db(2),m.Nc("by,\xa0",t.registringname," "),m.Db(2),m.Nc(" ",t.tenantdescription," "),m.Db(3),m.Nc(" ",c.ygen.getAddress(t)," "),m.Db(3),m.Nc("@KiranaWala - ",t.zip,""),m.Db(2),m.rc("ngIf",t.approved),m.Db(1),m.rc("ngIf",c.ygen.isLoggedIn()&&t.approved),m.Db(1),m.rc("ngIf",c.ygen.isLoggedIn()&&!t.approved),m.Db(1),m.rc("ngIf",c.ygen.isLoggedIn()&&!t.approved),m.Db(1),m.rc("ngIf",!t.inprocess&&!t.approved),m.Db(1),m.rc("ngIf",!t.approved&&t.inprocess),m.Db(1),m.rc("ngIf",!t.approved&&t.inprocess)}}function R(n,e){if(1&n){var t=m.Xb();m.Wb(0,"div",36),m.Rb(1,"img",37),m.Wb(2,"div"),m.Wb(3,"h1"),m.Lc(4,"Clear Your Search"),m.Vb(),m.Wb(5,"mat-form-field",38),m.Wb(6,"mat-chip-list",39,40),m.Wb(8,"mat-chip",41),m.ec("removed",(function(){return m.Cc(t),m.ic(4).clearsearch()})),m.Lc(9),m.Wb(10,"mat-icon",20),m.Lc(11,"cancel"),m.Vb(),m.Vb(),m.Vb(),m.Vb(),m.Vb(),m.Vb()}if(2&n){var c=m.ic(4);m.Db(9),m.Nc(" ",c.queryText," ")}}function O(n,e){if(1&n&&(m.Ub(0),m.Jc(1,A,22,12,"ion-card",22),m.Jc(2,R,12,1,"div",23),m.Tb()),2&n){var t=e.ngIf;m.Db(1),m.rc("ngForOf",t),m.Db(1),m.rc("ngIf",0==t.length)}}function $(n,e){if(1&n&&(m.Wb(0,"div",21),m.Jc(1,O,3,2,"ng-container",0),m.jc(2,"query"),m.jc(3,"search"),m.Vb()),2&n){var t=e.ngIf,c=m.ic(2);m.Db(1),m.rc("ngIf",m.mc(2,1,m.lc(3,5,t,"all"),c.ygen.changeme(c.queryText),"tenantname"))}}function _(n,e){if(1&n&&(m.Wb(0,"ion-content"),m.Jc(1,N,1,0,"ng-template",null,12,m.Kc),m.Wb(3,"div",13),m.Jc(4,x,4,3,"mat-chip-list",14),m.Vb(),m.Jc(5,$,4,8,"div",15),m.jc(6,"async"),m.Vb()),2&n){var t=m.zc(2),c=m.ic();m.Db(4),m.rc("ngIf",c.queryText&&c.queryText.length>1),m.Db(1),m.rc("ngIf",m.kc(6,3,c.tenatslist))("ngIfElse",t)}}function P(n,e){1&n&&m.Rb(0,"ion-progress-bar",16)}function Q(n,e){1&n&&m.Jc(0,P,1,0,"ng-template",null,12,m.Kc)}function F(n,e){if(1&n){var t=m.Xb();m.Wb(0,"ion-button",31),m.ec("click",(function(){m.Cc(t);var n=m.ic().$implicit;return m.ic(3).setTenant(n)})),m.Lc(1),m.jc(2,"translate"),m.Vb()}2&n&&(m.Db(1),m.Nc(" ",m.kc(2,1,"Select and Join"),""))}function z(n,e){if(1&n){var t=m.Xb();m.Wb(0,"ion-button",32),m.ec("click",(function(){m.Cc(t);var n=m.ic().$implicit;return m.ic(3).editTenant(n)})),m.Lc(1),m.jc(2,"translate"),m.Vb()}2&n&&(m.Db(1),m.Mc(m.kc(2,1,"Edit")))}function K(n,e){if(1&n){var t=m.Xb();m.Wb(0,"ion-button",32),m.ec("click",(function(){m.Cc(t);var n=m.ic().$implicit;return m.ic(3).editTenant(n)})),m.Lc(1),m.jc(2,"translate"),m.Vb()}2&n&&(m.Db(1),m.Mc(m.kc(2,1,"Edit & Approve")))}function U(n,e){if(1&n){var t=m.Xb();m.Wb(0,"ion-button",33),m.ec("click",(function(){m.Cc(t);var n=m.ic().$implicit;return m.ic(3).deleteTenant(n)})),m.Lc(1),m.jc(2,"translate"),m.Vb()}2&n&&(m.Db(1),m.Mc(m.kc(2,1,"Delete")))}function Y(n,e){1&n&&(m.Wb(0,"ion-button",34),m.Lc(1),m.jc(2,"translate"),m.Vb()),2&n&&(m.Db(1),m.Nc(" ",m.kc(2,1,"Under Approval")," "))}function B(n,e){if(1&n){var t=m.Xb();m.Wb(0,"ion-card"),m.Wb(1,"ion-card-header",43),m.ec("click",(function(){m.Cc(t);var n=e.$implicit;return m.ic(3).setTenant(n)})),m.Wb(2,"ion-card-title"),m.Lc(3),m.Vb(),m.Wb(4,"ion-card-subtitle"),m.Lc(5),m.Vb(),m.Vb(),m.Wb(6,"ion-card-content",43),m.ec("click",(function(){m.Cc(t);var n=e.$implicit;return m.ic(3).setTenant(n)})),m.Lc(7),m.Rb(8,"br"),m.Wb(9,"div",25),m.Lc(10),m.Vb(),m.Wb(11,"div"),m.Wb(12,"h1"),m.Lc(13),m.Vb(),m.Vb(),m.Vb(),m.Wb(14,"ion-item"),m.Jc(15,F,3,3,"ion-button",26),m.Jc(16,z,3,3,"ion-button",27),m.Jc(17,K,3,3,"ion-button",27),m.Jc(18,U,3,3,"ion-button",28),m.Jc(19,Y,3,3,"ion-button",29),m.Rb(20,"app-callphone",7),m.Vb(),m.Vb()}if(2&n){var c=e.$implicit,i=m.ic(3);m.Db(3),m.Nc(" ",c.tenantname," "),m.Db(2),m.Nc("by,\xa0",c.registringname," "),m.Db(2),m.Nc(" ",c.tenantdescription," "),m.Db(3),m.Nc(" ",i.ygen.getAddress(c)," "),m.Db(3),m.Nc("@KiranaWala - ",c.zip,""),m.Db(2),m.rc("ngIf",c.approved),m.Db(1),m.rc("ngIf",i.ygen.isLoggedIn()&&c.approved),m.Db(1),m.rc("ngIf",i.ygen.isLoggedIn()&&!c.approved),m.Db(1),m.rc("ngIf",i.ygen.isLoggedIn()&&!c.approved),m.Db(1),m.rc("ngIf",!c.approved&&c.inprocess),m.Db(1),m.rc("mobile",c.registeringphone)}}function G(n,e){if(1&n&&(m.Wb(0,"div"),m.Jc(1,B,21,11,"ion-card",22),m.jc(2,"query"),m.jc(3,"search"),m.Vb()),2&n){var t=e.ngIf,c=m.ic(2);m.Db(1),m.rc("ngForOf",m.mc(2,1,m.lc(3,5,t,c.segment),c.ygen.changeme(c.queryText),"tenantname"))}}function H(n,e){if(1&n&&(m.Wb(0,"ion-content",21),m.Jc(1,Q,2,0,"ng-template",null,12,m.Kc),m.Jc(3,G,4,8,"div",42),m.jc(4,"async"),m.Vb()),2&n){var t=m.zc(2),c=m.ic();m.Db(3),m.rc("ngIf",m.kc(4,2,c.tenatslist))("ngIfElse",t)}}var Z,nn,en=[{path:"",component:(Z=function(){function n(e,t,c,i,o,a,r,l,b){_classCallCheck(this,n),this.dialog=e,this.alertme=t,this.ygen=c,this.router=i,this.ydatashare=o,this.ystorageservice=a,this.toasterService=r,this.ydataservice=l,this.yauthservice=b,this.removable=!0,this.segment="all",this.queryText="",this.callsearch=!1,console.log("yeah yeah"),this.segment="all",this.tenatslist=l.getTenants()}return _createClass(n,[{key:"ngOnInit",value:function(){console.log("yeah yeah"),this.segment="all"}},{key:"ionViewWillEnter",value:function(){localStorage.getItem("selectedcloud")&&this.router.navigateByUrl("/welcome")}},{key:"ionViewDidEnter",value:function(){}},{key:"setTenant",value:function(n){var e={firebaseConfig:JSON.parse(n.tenantfire),cloudingaryConfig:JSON.parse(n.tenantcloud)};this.ystorageservice.setItem("communityname",n.tenantname),this.ystorageservice.setItem("communitykey",n.key),this.ystorageservice.setTenant(e,n.tenantname)}},{key:"deleteTenant",value:function(n){var e=this;this.alertme.question("Are you sure, you want to delete tenant?","Yes","No").then((function(t){t.value&&setTimeout((function(){e.ydataservice.getDatabase().list("/tenantlist/"+n.key).remove()}),100)}))}},{key:"editTenant",value:function(n){this.ydatashare.setData(d.a.SELECTED_TENANT,n),this.ystorageservice.setItem(d.a.SELECTED_TENANT,n),this.router.navigateByUrl("/tenantedit/"+n.key)}},{key:"searchTenants",value:function(){console.log("this.segment",this.segment),this.queryText=""}},{key:"buycommunity",value:function(n){this.ygen.callphone({firstname:"YOGI",phoneNumber:"9657965084"})}},{key:"opensearch",value:function(){console.log("xxx"),this.callsearch=!0}},{key:"askPin",value:function(){var n=this,e=new l.d;e.disableClose=!1,e.autoFocus=!0,e.data={queryText:this.queryText},this.dialog.open(v.a,e).afterClosed().subscribe((function(e){console.log(e),n.queryText=e}))}},{key:"clearsearch",value:function(){this.queryText=""}}]),n}(),Z.\u0275fac=function(n){return new(n||Z)(m.Qb(l.c),m.Qb(h.a),m.Qb(p.a),m.Qb(o.g),m.Qb(d.a),m.Qb(s.a),m.Qb(u.d),m.Qb(f.a),m.Qb(g.a))},Z.\u0275cmp=m.Kb({type:Z,selectors:[["app-tenants"]],decls:10,vars:9,consts:[[4,"ngIf"],["padding","",4,"ngIf"],[3,"color"],["expand","full","routerLink","/tenantnew",3,"color"],["slot","start","name","add-circle"],["slot","start"],["slot","end"],[3,"mobile"],[3,"ngModel","placeholder","ngModelChange"],[3,"ngModel","ngModelChange","ionChange"],["value","all"],["value","approved"],["loading",""],[2,"display","flex","justify-content","flex-end"],["aria-label","Fish selection",4,"ngIf"],["padding","",4,"ngIf","ngIfElse"],["type","indeterminate","reversed","true"],["aria-label","Fish selection"],["color","primary","selected","",3,"removable","removed"],["matChipRemove","",4,"ngIf"],["matChipRemove",""],["padding",""],[4,"ngFor","ngForOf"],["class","searchresult",4,"ngIf"],["color","secondary","shape","round","fill","outline"],[2,"padding","10px"],["color","secondary","shape","round","fill","outline",3,"click",4,"ngIf"],["color","primary","shape","round","fill","outline",3,"click",4,"ngIf"],["color","danger","shape","round","fill","outline",3,"click",4,"ngIf"],["color","danger","expand","full","fill","outline",4,"ngIf"],["color","tertiary","expand","full","fill","outline","routerLink","/support",3,"click",4,"ngIf"],["color","secondary","shape","round","fill","outline",3,"click"],["color","primary","shape","round","fill","outline",3,"click"],["color","danger","shape","round","fill","outline",3,"click"],["color","danger","expand","full","fill","outline"],["color","tertiary","expand","full","fill","outline","routerLink","/support",3,"click"],[1,"searchresult"],["src","assets/img/storeNotFOund.png"],[1,"example-chip-list"],["aria-label","search selection"],["chipList",""],["selectable","true","removable","true",3,"removed"],[4,"ngIf","ngIfElse"],[3,"click"]],template:function(n,e){1&n&&(m.Jc(0,L,12,10,"ion-header",0),m.Jc(1,C,14,12,"ion-header",0),m.Jc(2,_,7,5,"ion-content",0),m.Jc(3,H,5,4,"ion-content",1),m.Wb(4,"ion-footer"),m.Wb(5,"ion-toolbar",2),m.Wb(6,"ion-button",3),m.Rb(7,"ion-icon",4),m.Lc(8),m.jc(9,"translate"),m.Vb(),m.Vb(),m.Vb()),2&n&&(m.rc("ngIf",!e.ygen.isLoggedIn()),m.Db(1),m.rc("ngIf",e.ygen.isLoggedIn()),m.Db(1),m.rc("ngIf",!e.ygen.isLoggedIn()),m.Db(1),m.rc("ngIf",e.ygen.isLoggedIn()),m.Db(2),m.rc("color",(e.ygen.isTenantSelection(),"warning")),m.Db(1),m.rc("color",(e.ygen.isTenantSelection(),"warning")),m.Db(2),m.Nc(" ",m.kc(9,7,"Register Your Shop")," "))},directives:[c.m,a.t,a.ab,a.i,a.kb,o.i,a.w,a.v,a.j,a.G,a.Y,y.a,a.L,a.mb,i.n,i.q,a.M,a.lb,a.N,a.s,a.I,D.b,D.a,k.a,D.c,c.l,a.k,a.m,a.o,a.n,a.l,a.y,V.c],pipes:[W.c,c.b,I.a,T.a],styles:[".searchresult[_ngcontent-%COMP%]{margin:auto;display:block;width:70%}"]}),Z)}],tn=((nn=function n(){_classCallCheck(this,n)}).\u0275mod=m.Ob({type:nn}),nn.\u0275inj=m.Nb({factory:function(n){return new(n||nn)},imports:[[c.c,i.i,a.bb,r.a,l.a,b.a,o.k.forChild(en)]]}),nn)}}]);