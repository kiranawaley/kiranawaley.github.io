(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{e2da:function(t,e,a){"use strict";a.r(e),a.d(e,"RegisterforeventPageModule",(function(){return E}));var n=a("ofXK"),r=a("3Pt+"),o=a("tyNb"),i=a("TEn/"),c=a("hVaU"),s=a("IZvt"),h=a("4pxM"),l=a("wd/R"),b=a("mLjM"),d=a("D+2S"),u=a("rIxz"),p=a("YKLQ"),m=a("X/JO"),w=a("DzsY"),g=a("ybIa"),y=a("+DAS"),f=a("fXoL"),v=a("Wp6s"),D=a("iEmi");function V(t,e){if(1&t){const t=f.Xb();f.Wb(0,"yogagainv2-dyanamic-page",4),f.ec("actionEvent",(function(e){return f.Cc(t),f.ic().send(e)}))("cancelEvent",(function(e){return f.Cc(t),f.ic().cancel(e)})),f.Vb()}if(2&t){const t=f.ic();f.rc("captchaOn",!0)("captchaName","registercaptcha")("whatform",t.whatcontrolsmap)("whatformgroup",t.inwhatformgroup)("whichbuttons",t.mybuttons)}}const W=[{path:"",component:(()=>{class t{constructor(t,e,a,n,r,o,i){this.ysharedata=t,this.ydata=e,this.ygen=a,this.router=n,this.ydataservice=r,this.boardservice=o,this.yobuilderservice=i,this.worker={},this.filterdetail={},this.prof=new Array,this.items=new Array,this.toSendItems=new Array,this.searchQuery="",this.tempItems=new Array,this.mybuttons=new Map,this.filterProf=new Array,this.isreadonly=!1;let c=this.ysharedata.getData("currentevent");this.ysharedata.clearData("currentevent"),this.crudlist=new g.a("/board/events/"+c.key+"/registration",e.getDatabase(),!0,this.ygen.getUid())}ngOnInit(){this.startObject()}getDomainObject(t=!1){let e=[],a=0;return l(new Date).format("YYYY-MM-DD"),e[a]=new b.b(a,"contactname","",b.a.text),e[a].placeholder="Contact Name",e[a].required=!0,e[a].readonly=t,a++,e[a]=new b.b(a,"contactphone","",b.a.phone),e[a].placeholder="Contact Phone/Mobile",e[a].required=!0,e[a].readonly=t,a++,e[a]=new b.b(a,"contactage",!1,b.a.number),e[a].placeholder="Your Age",e[a].required=!1,e[a].readonly=t,a++,e[a]=new b.b(a,"contactemail","",b.a.email),e[a].placeholder="Your Email",e[a].required=!1,e[a].readonly=t,a++,e[a]=new b.b(a,"notes","I want to participate",b.a.textarea),e[a].placeholder="Notes",e[a].required=!0,e[a].readonly=t,a++,e[a]=new b.b(a,"image","https://res.cloudinary.com/ideasyogi/image/upload/v1554035710/yashica_tzklwz.png",b.a.image),e[a].placeholder="Your Picture",e[a].required=!1,e[a].showme=!0,e[a].readonly=t,e.forEach(e=>{e.readonly=t}),e}startObject(){this.clear=!1,this.whatcontrolsmap=new Map,this.inwhatformgroup=null;let t=new Map;this.getDomainObject(this.isreadonly).forEach(e=>{t.set(e.name,e)}),this.inwhatformgroup=this.yobuilderservice.createFormGroup(t),this.whatcontrolsmap=this.yobuilderservice.createMap(t,this.inwhatformgroup);let e=new d.a("Cancel","cancel","cancel_presentation","secondary",!1),a=new d.a("Save Data","register","lock_open","primary",!1);this.mybuttons.set("Action2",a),this.mybuttons.set("Action1",e),setTimeout(()=>{this.clear=!0},50)}cancel(t){console.log(t),this.ygen.goBack()}send(t){console.log("event",t),this.crudlist.addtolist(t.data.value),this.ygen.goBack()}}return t.\u0275fac=function(e){return new(e||t)(f.Qb(p.a),f.Qb(y.a),f.Qb(u.a),f.Qb(o.g),f.Qb(p.a),f.Qb(m.a),f.Qb(w.a))},t.\u0275cmp=f.Kb({type:t,selectors:[["app-registerforevent"]],decls:13,vars:1,consts:[["slot","start"],["padding",""],[1,"box"],[3,"captchaOn","captchaName","whatform","whatformgroup","whichbuttons","actionEvent","cancelEvent",4,"ngIf"],[3,"captchaOn","captchaName","whatform","whatformgroup","whichbuttons","actionEvent","cancelEvent"]],template:function(t,e){1&t&&(f.Wb(0,"ion-header"),f.Wb(1,"ion-toolbar"),f.Wb(2,"ion-buttons",0),f.Rb(3,"ion-back-button"),f.Vb(),f.Wb(4,"ion-title"),f.Lc(5,"registerforevent"),f.Vb(),f.Vb(),f.Vb(),f.Wb(6,"ion-content",1),f.Wb(7,"ion-grid"),f.Wb(8,"ion-row"),f.Wb(9,"ion-col"),f.Wb(10,"mat-card"),f.Wb(11,"mat-card-content",2),f.Jc(12,V,1,5,"yogagainv2-dyanamic-page",3),f.Vb(),f.Vb(),f.Vb(),f.Vb(),f.Vb(),f.Vb()),2&t&&(f.Db(12),f.rc("ngIf",e.clear))},directives:[i.v,i.ab,i.j,i.f,i.g,i.Y,i.s,i.u,i.K,i.r,v.a,v.d,n.m,D.a],styles:[""]}),t})()}];let E=(()=>{class t{}return t.\u0275mod=f.Ob({type:t}),t.\u0275inj=f.Nb({factory:function(e){return new(e||t)},imports:[[n.c,r.i,i.bb,c.a,s.a,h.a,o.k.forChild(W)]]}),t})()}}]);