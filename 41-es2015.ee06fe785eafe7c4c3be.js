(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{BhQr:function(n,t,e){"use strict";e.r(t),e.d(t,"FaqPageModule",(function(){return k}));var a=e("ofXK"),c=e("3Pt+"),i=e("tyNb"),o=e("IZvt"),b=e("4pxM"),l=e("TEn/"),s=e("rIxz"),r=e("+DAS"),p=e("x5WB"),u=e("fXoL"),m=e("7EHt"),d=e("sYmb");function f(n,t){if(1&n){const n=u.Xb();u.Wb(0,"ion-button",4),u.ec("click",(function(){return u.Cc(n),u.ic().ygen.opennewwindow("https://tawk.to/chat/5c98e7006bba460528ff80c5/default")})),u.Rb(1,"ion-icon",12),u.Lc(2),u.jc(3,"translate"),u.Vb()}2&n&&(u.Db(2),u.Nc("",u.kc(3,1,"Chat with us")," "))}function W(n,t){1&n&&u.Rb(0,"ion-progress-bar",13)}function V(n,t){if(1&n&&(u.Wb(0,"mat-expansion-panel"),u.Wb(1,"mat-expansion-panel-header"),u.Wb(2,"mat-panel-description"),u.Wb(3,"div",15),u.Lc(4),u.Vb(),u.Vb(),u.Vb(),u.Wb(5,"ion-text",11),u.Wb(6,"p"),u.Lc(7),u.Vb(),u.Vb(),u.Vb()),2&n){const n=t.$implicit;u.Db(4),u.Nc("",n.question,"?"),u.Db(3),u.Mc(n.answer)}}function h(n,t){if(1&n&&(u.Wb(0,"div"),u.Wb(1,"mat-accordion"),u.Jc(2,V,8,2,"mat-expansion-panel",14),u.Vb(),u.Vb()),2&n){const n=t.ngIf;u.Db(2),u.rc("ngForOf",n)}}const g=[{path:"",component:(()=>{class n{constructor(n,t,e){this.ygen=n,this.ydata=t,this.commontl=e,this.onlineflag=!1}ngOnInit(){}ionViewWillEnter(){this.faqlist=this.ydata.getFaqlist(),this.commontl.online.subscribe(n=>{this.onlineflag=n})}}return n.\u0275fac=function(t){return new(t||n)(u.Qb(s.a),u.Qb(r.a),u.Qb(p.a))},n.\u0275cmp=u.Kb({type:n,selectors:[["app-faq"]],decls:57,vars:36,consts:[[3,"color"],["slot","start"],[1,"faqcontainer"],[1,"item"],["expand","block",3,"click"],["slot","start","name","mail"],["slot","end","name","call"],["slot","start","name","help-circle"],["expand","block",3,"click",4,"ngIf"],["loading",""],[4,"ngIf","ngIfElse"],["color","danger"],["slot","start","name","chatbubbles"],["type","indeterminate","reversed","true"],[4,"ngFor","ngForOf"],[2,"font-size","large"]],template:function(n,t){if(1&n&&(u.Wb(0,"ion-header"),u.Wb(1,"ion-toolbar",0),u.Wb(2,"ion-buttons",1),u.Rb(3,"ion-menu-button"),u.Vb(),u.Wb(4,"ion-title"),u.Lc(5),u.jc(6,"translate"),u.Vb(),u.Vb(),u.Vb(),u.Wb(7,"ion-content"),u.Wb(8,"div",2),u.Wb(9,"div",3),u.Lc(10," Need Some Help? Email us directly or talk with customer care representative. "),u.Vb(),u.Wb(11,"div",3),u.Wb(12,"ion-button",4),u.ec("click",(function(){return t.ygen.mailthis("ideasyogi@gmail.com")})),u.Rb(13,"ion-icon",5),u.Lc(14),u.jc(15,"translate"),u.Vb(),u.Wb(16,"ion-button",4),u.ec("click",(function(){return t.ygen.externalcall("9657965084")})),u.Rb(17,"ion-icon",6),u.Lc(18),u.jc(19,"translate"),u.Vb(),u.Wb(20,"ion-button",4),u.ec("click",(function(){return t.ygen.navigate("/support")})),u.Rb(21,"ion-icon",7),u.Lc(22),u.jc(23,"translate"),u.Vb(),u.Jc(24,f,4,3,"ion-button",8),u.Vb(),u.Vb(),u.Jc(25,W,1,0,"ng-template",null,9,u.Kc),u.Jc(27,h,3,1,"div",10),u.jc(28,"async"),u.Wb(29,"mat-accordion"),u.Wb(30,"mat-expansion-panel"),u.Wb(31,"mat-expansion-panel-header"),u.Wb(32,"mat-panel-description"),u.Lc(33),u.jc(34,"translate"),u.Vb(),u.Vb(),u.Wb(35,"ion-text",11),u.Wb(36,"p"),u.Lc(37),u.jc(38,"translate"),u.Vb(),u.Vb(),u.Vb(),u.Wb(39,"mat-expansion-panel"),u.Wb(40,"mat-expansion-panel-header"),u.Wb(41,"mat-panel-description"),u.Lc(42),u.jc(43,"translate"),u.Vb(),u.Vb(),u.Wb(44,"ion-text",11),u.Wb(45,"p"),u.Lc(46),u.jc(47,"translate"),u.Vb(),u.Vb(),u.Vb(),u.Wb(48,"mat-expansion-panel"),u.Wb(49,"mat-expansion-panel-header"),u.Wb(50,"mat-panel-description"),u.Lc(51),u.jc(52,"translate"),u.Vb(),u.Vb(),u.Wb(53,"ion-text",11),u.Wb(54,"p"),u.Lc(55),u.jc(56,"translate"),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Vb()),2&n){const n=u.zc(26);u.Db(1),u.rc("color",t.ygen.isTenantSelection()?"primary":"secondary"),u.Db(4),u.Mc(u.kc(6,14,"FAQ")),u.Db(9),u.Nc("",u.kc(15,16,"EMail Us")," "),u.Db(4),u.Nc("",u.kc(19,18,"Call us")," "),u.Db(4),u.Nc("",u.kc(23,20,"Raise a request")," "),u.Db(2),u.rc("ngIf",t.onlineflag),u.Db(3),u.rc("ngIf",u.kc(28,22,t.faqlist))("ngIfElse",n),u.Db(6),u.Nc(" ",u.kc(34,24,"What is Bandhan APP"),"? "),u.Db(4),u.Mc(u.kc(38,26,"You are still in question write it to support in left menu")),u.Db(5),u.Nc(" ",u.kc(43,28,"I am not able to view other profile full information"),"? "),u.Db(4),u.Mc(u.kc(47,30,"You need to send connect to the person and when that person approves your request you will be able to view the information")),u.Db(5),u.Nc(" ",u.kc(52,32,"What is Inbox"),"? "),u.Db(4),u.Mc(u.kc(56,34,"Admin communicaiton will happen here"))}},directives:[l.v,l.ab,l.j,l.G,l.Y,l.s,l.i,l.w,a.m,m.a,m.c,m.e,m.d,l.V,l.I,a.l],pipes:[d.c,a.b],styles:[".faqcontainer[_ngcontent-%COMP%]{display:flex;padding:15px;flex-direction:column;align-items:center}"]}),n})()}];let k=(()=>{class n{}return n.\u0275mod=u.Ob({type:n}),n.\u0275inj=u.Nb({factory:function(t){return new(t||n)},imports:[[a.c,c.i,l.bb,o.a,b.a,i.k.forChild(g)]]}),n})()}}]);