(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{BmJS:function(e,t,a){"use strict";a.r(t),a.d(t,"AddeventPageModule",(function(){return j}));var n=a("ofXK"),o=a("3Pt+"),i=a("tyNb"),r=a("TEn/"),c=a("YKLQ"),s=a("+DAS"),d=a("rIxz"),l=a("DzsY"),h=a("ybIa"),b=a("wd/R"),u=a("mLjM"),m=a("D+2S"),p=a("fXoL"),g=a("Wp6s"),y=a("bTqV"),w=a("NFeN"),v=a("iEmi");const f=function(e){return{color:e}};function E(e,t){if(1&e){const e=p.Xb();p.Wb(0,"button",5),p.ec("click",(function(){return p.Cc(e),p.ic().changeReadOnly()})),p.Wb(1,"mat-icon",6),p.Mc(2,"edit"),p.Vb(),p.Vb()}if(2&e){const e=p.ic();p.Db(1),p.rc("ngClass",p.vc(1,f,e.isreadonly?"#D09B2C":"black"))}}function D(e,t){if(1&e){const e=p.Xb();p.Wb(0,"yogagainv2-dyanamic-page",7),p.ec("actionEvent",(function(t){return p.Cc(e),p.ic().send(t)}))("cancelEvent",(function(t){return p.Cc(e),p.ic().cancel(t)})),p.Vb()}if(2&e){const e=p.ic();p.rc("isreadonly",e.isreadonly)("captchaOn",!1)("captchaName","registercaptcha")("whatform",e.whatcontrolsmap)("whatformgroup",e.inwhatformgroup)("whichbuttons",e.mybuttons)}}let M=(()=>{class e{constructor(e,t,a,n,o,i,r){this.route=e,this.ysharedata=t,this.ydata=a,this.ygen=n,this.router=o,this.ydataservice=i,this.yobuilderservice=r,this.title="Add Event",this.mybuttons=new Map,this.isreadonly=!1,this.loaded=!1,this.crudlist=new h.a("/board/events/",a.getDatabase(),!0,this.ygen.getUid())}ngOnInit(){console.log("dddd ");let e=this.route.snapshot.queryParams.key;e?(this.cruddata=new h.a("/board/events/"+e,this.ydata.getDatabase(),!1,this.ygen.getUid()),this.cruddata.getData().subscribe(t=>{this.currentEvent=t,Object.assign(this.currentEvent,{$key:e}),this.isreadonly=!0,this.title="Edit Event",this.startObject()})):(this.title="Add Event",this.startObject())}getDomainObject(e=!1){let t=[],a=0;return b(new Date).format("YYYY-MM-DD"),t[a]=new u.b(a,"image","https://res.cloudinary.com/ideasyogi/image/upload/v1589964651/default_qkhcdj.jpg",u.a.image),t[a].placeholder="Event Picture",t[a].required=!1,t[a].showme=!0,t[a].readonly=e,a++,t[a]=new u.b(a,"imageuploaded",!1,u.a.slidetoggle),t[a].placeholder="imageuploaded",t[a].required=!1,t[a].showme=!0,t[a].readonly=e,a++,t[a]=new u.b(a,"title","",u.a.text),t[a].placeholder="Event Title",t[a].required=!0,t[a].readonly=e,a++,t[a]=new u.b(a,"description","",u.a.textarea),t[a].placeholder="Description of Event",t[a].required=!0,t[a].readonly=e,a++,t[a]=new u.b(a,"startdate",!1,u.a.date),t[a].placeholder="Date of Event",t[a].required=!0,t[a].readonly=e,a++,t[a]=new u.b(a,"startdatetime",!1,u.a.time),t[a].placeholder="Time of Event",t[a].required=!0,t[a].readonly=e,a++,t[a]=new u.b(a,"contactname","",u.a.text),t[a].placeholder="Organizer name",t[a].required=!0,t[a].readonly=e,a++,t[a]=new u.b(a,"contactnumber","",u.a.phone),t[a].placeholder="Organizer mobile",t[a].required=!0,t[a].readonly=e,a++,t[a]=new u.b(a,"createdBy","",u.a.text),t[a].placeholder="createdBy",t[a].required=!1,t[a].showme=!1,t[a].readonly=e,a++,t[a]=new u.b(a,"updatedBy","",u.a.text),t[a].placeholder="updatedBy",t[a].required=!1,t[a].showme=!1,t[a].readonly=e,a++,t[a]=new u.b(a,"active",!1,u.a.slidetoggle),t[a].placeholder="Active",t[a].required=!1,t[a].showme=!0,t[a].readonly=e,a++,t[a]=new u.b(a,"$key","",u.a.text),t[a].placeholder="key",t[a].required=!1,t[a].showme=!1,t[a].readonly=e,t.forEach(t=>{t.readonly=e,e&&(t.required=!1),this.currentEvent&&(t.value="date"===t.whattype?new Date(this.currentEvent[t.name]):this.currentEvent[t.name])}),t}startObject(){this.clear=!1,this.whatcontrolsmap=new Map,this.inwhatformgroup=null;let e=new Map;this.getDomainObject(this.isreadonly).forEach(t=>{e.set(t.name,t)}),this.inwhatformgroup=this.yobuilderservice.createFormGroup(e),this.whatcontrolsmap=this.yobuilderservice.createMap(e,this.inwhatformgroup);let t=new m.a("Cancel","cancel","cancel_presentation","secondary",!1),a=new m.a("Save Data","events","lock_open","primary",!1);this.mybuttons.set("Action2",a),this.mybuttons.set("Action1",t),setTimeout(()=>{this.clear=!0},50)}cancel(e){console.log(e),this.ygen.goBack()}changeReadOnly(){this.isreadonly=!this.isreadonly,this.startObject()}send(e){let t=+e.data.value.startdate;console.log("timestamp",b(t).format("dddd, MMMM Do YYYY, h:mm:ss a"));let a=+e.data.value.startdatetime.split(":")[0],n=+e.data.value.startdatetime.split(":")[1],o=new Date(t);console.log("moment datewitouttime",o),o.setHours(a),o.setMinutes(n);let i=new Date(+o);console.log("moment data",i),console.log("event",e),Object.assign(e.data.value,{startdate:+i}),console.log("event",e),console.log("eventx",i),console.log(" m timestamp",b(i).format("dddd, MMMM Do YYYY, h:mm:ss a")),this.currentEvent&&this.currentEvent.$key?this.cruddata.updateData(e.data.value):this.crudlist.addtolist(e.data.value),this.router.navigate([e.whatnext])}}return e.\u0275fac=function(t){return new(t||e)(p.Qb(i.a),p.Qb(c.a),p.Qb(s.a),p.Qb(d.a),p.Qb(i.j),p.Qb(c.a),p.Qb(l.a))},e.\u0275cmp=p.Kb({type:e,selectors:[["app-addevent"]],decls:14,vars:3,consts:[["slot","start"],["padding",""],["class","editable","mat-mini-fab","",3,"click",4,"ngIf"],[1,"box"],[3,"isreadonly","captchaOn","captchaName","whatform","whatformgroup","whichbuttons","actionEvent","cancelEvent",4,"ngIf"],["mat-mini-fab","",1,"editable",3,"click"],[3,"ngClass"],[3,"isreadonly","captchaOn","captchaName","whatform","whatformgroup","whichbuttons","actionEvent","cancelEvent"]],template:function(e,t){1&e&&(p.Wb(0,"ion-header"),p.Wb(1,"ion-toolbar"),p.Wb(2,"ion-buttons",0),p.Rb(3,"ion-back-button"),p.Vb(),p.Wb(4,"ion-title"),p.Mc(5),p.Vb(),p.Vb(),p.Vb(),p.Wb(6,"ion-content",1),p.Wb(7,"ion-grid"),p.Wb(8,"ion-row"),p.Wb(9,"ion-col"),p.Kc(10,E,3,3,"button",2),p.Wb(11,"mat-card"),p.Wb(12,"mat-card-content",3),p.Kc(13,D,1,6,"yogagainv2-dyanamic-page",4),p.Vb(),p.Vb(),p.Vb(),p.Vb(),p.Vb(),p.Vb()),2&e&&(p.Db(5),p.Nc(t.title),p.Db(5),p.rc("ngIf","Edit Event"==t.title),p.Db(3),p.rc("ngIf",t.clear))},directives:[r.y,r.fb,r.j,r.f,r.g,r.db,r.s,r.x,r.P,r.r,n.m,g.a,g.d,y.a,w.a,n.k,v.a],styles:[".editable[_ngcontent-%COMP%]{position:absolute;left:93%;z-index:1}primary[_ngcontent-%COMP%]{color:red}accent[_ngcontent-%COMP%]{color:#000}"]}),e})();var O=a("hVaU"),k=a("IZvt"),q=a("4pxM");const V=[{path:"",component:M}];let j=(()=>{class e{}return e.\u0275mod=p.Ob({type:e}),e.\u0275inj=p.Nb({factory:function(t){return new(t||e)},imports:[[n.c,o.i,r.gb,O.a,k.a,q.a,i.n.forChild(V)]]}),e})()}}]);