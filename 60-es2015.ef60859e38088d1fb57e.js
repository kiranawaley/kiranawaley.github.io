(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"pl/L":function(n,e,t){"use strict";t.r(e),t.d(e,"ProfileapprovalPageModule",(function(){return z}));var i=t("ofXK"),o=t("3Pt+"),c=t("tyNb"),r=t("TEn/"),a=t("mrSG"),s=t("+DAS"),l=t("gAVi"),b=t("YKLQ"),d=t("rIxz"),p=t("2Vo4"),g=t("fXoL"),f=t("sYmb"),u=t("Tzbp");function m(n,e){1&n&&g.Rb(0,"ion-progress-bar",6)}function h(n,e){1&n&&g.Rb(0,"ion-icon",25)}function y(n,e){1&n&&g.Rb(0,"ion-icon",26)}function V(n,e){if(1&n){const n=g.Xb();g.Wb(0,"ion-col",16),g.Wb(1,"ion-button",17),g.ec("click",(function(){g.Cc(n);const e=g.ic().$implicit;return g.ic(2).ygen.whatsappthis(e)})),g.Rb(2,"ion-icon",27),g.Vb(),g.Vb()}}function W(n,e){if(1&n){const n=g.Xb();g.Wb(0,"ion-card"),g.Wb(1,"img",8),g.ec("click",(function(){g.Cc(n);const t=e.$implicit;return g.ic(2).ygen.openimage(t.photo,t.firstname)})),g.Vb(),g.Wb(2,"ion-card-header"),g.Wb(3,"ion-card-title"),g.Wb(4,"ion-chip"),g.Wb(5,"ion-label"),g.Lc(6),g.Vb(),g.Vb(),g.Jc(7,h,1,0,"ion-icon",9),g.Jc(8,y,1,0,"ion-icon",10),g.Wb(9,"ion-chip",11),g.ec("click",(function(){g.Cc(n);const t=e.$implicit;return g.ic(2).select(t)})),g.Wb(10,"ion-label"),g.Lc(11),g.Vb(),g.Vb(),g.Vb(),g.Vb(),g.Wb(12,"ion-card-content"),g.Wb(13,"b"),g.Lc(14),g.Vb(),g.Wb(15,"p"),g.Lc(16),g.Vb(),g.Vb(),g.Wb(17,"ion-row",12),g.Wb(18,"ion-col",13),g.Wb(19,"ion-button",14),g.ec("click",(function(){g.Cc(n);const t=e.$implicit;return g.ic(2).delete(t)})),g.Rb(20,"ion-icon",15),g.Vb(),g.Vb(),g.Wb(21,"ion-col",16),g.Wb(22,"ion-button",17),g.ec("click",(function(){g.Cc(n);const t=e.$implicit;return g.ic(2).callphone(t)})),g.Rb(23,"ion-icon",18),g.Vb(),g.Vb(),g.Wb(24,"ion-col",16),g.Wb(25,"ion-button",17),g.ec("click",(function(){g.Cc(n);const t=e.$implicit;return g.ic(2).mailthis(t)})),g.Rb(26,"ion-icon",19),g.Vb(),g.Vb(),g.Wb(27,"ion-col",16),g.Wb(28,"ion-button",20),g.ec("click",(function(){g.Cc(n);const t=e.$implicit;return g.ic(2).ygen.smsthis(t)})),g.Rb(29,"ion-icon",21),g.Vb(),g.Vb(),g.Jc(30,V,3,0,"ion-col",22),g.Wb(31,"ion-col",23),g.Wb(32,"ion-button",17),g.ec("click",(function(){g.Cc(n);const t=e.$implicit;return g.ic(2).select(t)})),g.Rb(33,"ion-icon",24),g.Lc(34," View "),g.Vb(),g.Vb(),g.Vb(),g.Vb()}if(2&n){const n=e.$implicit,t=e.even,i=e.odd,o=g.ic(2);g.Hb("odd",i)("even",t),g.Db(1),g.sc("src",n.photo,g.Ec),g.Db(5),g.Mc(n.profileid),g.Db(1),g.rc("ngIf","FEMALE"==n.gender),g.Db(1),g.rc("ngIf","MALE"==n.gender),g.Db(3),g.Oc("",n.firstname," ",n.lastname,""),g.Db(3),g.Pc(" I am ",o.ygen.getFormattedDateDiff(n.dob)," live in ",n.city,". My height is ",n.heightfeet," feet ",n.heightinches,' " and I am ',n.profession,""),g.Db(2),g.Mc(n.userid),g.Db(14),g.rc("ngIf",!o.ygen.isweb)}}const w=function(n,e,t,i){return[n,e,t,i,!1]};function v(n,e){if(1&n&&(g.Wb(0,"div"),g.Jc(1,W,35,17,"ion-card",7),g.jc(2,"searchprofile"),g.Vb()),2&n){const n=e.ngIf,t=g.ic();g.Db(1),g.rc("ngForOf",g.oc(2,1,g.xc(7,w,n,t.ygen.changeme("ALL"),t.ygen.changeme(t.queryText),t.myprofcounter)))}}let k=(()=>{class n{constructor(n,e,t,i,o,c){this.ygen=n,this.actionSheetCtrl=e,this.ydataservice=t,this.ystorageservice=i,this.ydatashare=o,this.routeservice=c,this.queryText="",this.myprofcounter=new p.a(0),this.profilelist=t.getNotApprovedMartimonialProfile()}ngOnInit(){}select(n){this.ystorageservice.setItem(b.a.SELECTED_TENANT,n),this.routeservice.navigateByUrl("/register/"+n.uid)}delete(n){this.ydataservice.removeMatrimonialProfile(n)}callphone(n){return Object(a.a)(this,void 0,void 0,(function*(){const e=yield this.actionSheetCtrl.create({header:"Contact "+n.firstname,buttons:[{text:`Call ( ${n.phoneNumber} )`,icon:null,handler:()=>{window.open("tel:"+n.phoneNumber)}}]});yield e.present()}))}mailthis(n){this.ygen.mailthis(`${n.userid}?subject=Bandhan moves to Bandhan version 2 please upated your profile&body=Download new app from  https://play.google.com/store/apps/details?id=com.yogi.bhandhanv2 .Your userid is ${n.userid} and temp password 123456, click on forget password to set new password and update your profile..`)}}return n.\u0275fac=function(e){return new(e||n)(g.Qb(d.a),g.Qb(r.a),g.Qb(s.a),g.Qb(l.a),g.Qb(b.a),g.Qb(c.g))},n.\u0275cmp=g.Kb({type:n,selectors:[["app-profileapproval"]],decls:20,vars:13,consts:[[3,"color"],["slot","start"],[3,"ngModel","placeholder","ngModelChange"],["align-items-center","","text-center",""],["loading",""],[4,"ngIf","ngIfElse"],["type","indeterminate","reversed","true"],[3,"odd","even",4,"ngFor","ngForOf"],[2,"display","block","margin-left","auto","margin-right","auto","width","150px","height","150px","border-radius","50%",3,"src","click"],["style","font-size: 22px","name","woman","size","large","color","danger","class","gender",4,"ngIf"],["style","font-size: 22px","name","man","size","large","color","primary","class","gender",4,"ngIf"],["color","primary",3,"click"],["no-padding","","justify-content-center",""],["text-left","","size","3"],["fill","clear","size","small","color","danger",3,"click"],["name","trash","slot","start"],["text-center","","size","3"],["fill","clear","size","small","color","primary",3,"click"],["name","call","slot","start"],["name","mail","slot","start"],["fill","clear","size","small","color","warning",3,"click"],["name","text","slot","start"],["text-center","","size","3",4,"ngIf"],["text-right","","size","3"],["name","eye","slot","start"],["name","woman","size","large","color","danger",1,"gender",2,"font-size","22px"],["name","man","size","large","color","primary",1,"gender",2,"font-size","22px"],["name","logo-whatsapp","slot","start"]],template:function(n,e){if(1&n&&(g.Wb(0,"ion-header"),g.Wb(1,"ion-toolbar",0),g.Wb(2,"ion-buttons",1),g.Rb(3,"ion-menu-button"),g.Vb(),g.Wb(4,"ion-title"),g.Lc(5),g.jc(6,"translate"),g.Vb(),g.Vb(),g.Wb(7,"ion-toolbar",0),g.Wb(8,"ion-searchbar",2),g.ec("ngModelChange",(function(n){return e.queryText=n})),g.jc(9,"translate"),g.Vb(),g.Vb(),g.Vb(),g.Wb(10,"ion-content"),g.Wb(11,"ion-grid"),g.Wb(12,"ion-row",3),g.Wb(13,"ion-col"),g.Jc(14,m,1,0,"ng-template",null,4,g.Kc),g.Vb(),g.Vb(),g.Wb(16,"ion-row"),g.Wb(17,"ion-col"),g.Jc(18,v,3,12,"div",5),g.jc(19,"async"),g.Vb(),g.Vb(),g.Vb(),g.Vb()),2&n){const n=g.zc(15);g.Db(1),g.rc("color",e.ygen.isTenantSelection()?"primary":"secondary"),g.Db(4),g.Mc(g.kc(6,7,"Pending Approvals")),g.Db(2),g.rc("color",e.ygen.isTenantSelection()?"primary":"secondary"),g.Db(1),g.sc("placeholder",g.kc(9,9,"Search")),g.rc("ngModel",e.queryText),g.Db(10),g.rc("ngIf",g.kc(19,11,e.profilelist))("ngIfElse",n)}},directives:[r.v,r.ab,r.j,r.G,r.Y,r.L,r.mb,o.n,o.q,r.s,r.u,r.K,r.r,i.m,r.I,i.l,r.k,r.m,r.o,r.q,r.C,r.l,r.i,r.w],pipes:[f.c,i.b,u.a],styles:[".odd[_ngcontent-%COMP%]{background-color:#f4eef5}.even[_ngcontent-%COMP%]{background-color:#e9f1f1}.gender[_ngcontent-%COMP%]{bottom:100px;left:-9px;position:absolute;background:#f5f5f5}.img[_ngcontent-%COMP%]{width:100%;margin-bottom:18%}.card-picture[_ngcontent-%COMP%]{width:23%;margin-bottom:2%}.container[_ngcontent-%COMP%]{min-height:100%;width:100%}.search-form[_ngcontent-%COMP%]{width:90%}"]}),n})();var C=t("hVaU"),x=t("4pxM"),M=t("IZvt");const D=[{path:"",component:k}];let z=(()=>{class n{}return n.\u0275mod=g.Ob({type:n}),n.\u0275inj=g.Nb({factory:function(e){return new(e||n)},imports:[[i.c,o.i,r.bb,C.a,x.a,M.a,c.k.forChild(D)]]}),n})()}}]);