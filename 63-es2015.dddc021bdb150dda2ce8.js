(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{mLE3:function(t,e,a){"use strict";a.r(e),a.d(e,"VariationPageModule",(function(){return q}));var n=a("ofXK"),i=a("3Pt+"),o=a("tyNb"),r=a("TEn/"),c=a("YKLQ"),s=a("+DAS"),d=a("rIxz"),l=a("DzsY"),p=a("ybIa"),b=a("mLjM"),h=a("D+2S"),u=a("LeCc"),m=a("i2Ty"),y=a("G2i7"),g=a("fXoL"),w=a("Wp6s"),f=a("iEmi"),v=a("YCbS"),V=a("sYmb");function k(t,e){1&t&&g.Rb(0,"ion-progress-bar",7)}function x(t,e){if(1&t){const t=g.Xb();g.Wb(0,"yogagainv2-dyanamic-page",8),g.ec("actionEvent",(function(e){return g.Cc(t),g.ic().addVariation(e)}))("cancelEvent",(function(e){return g.Cc(t),g.ic().cancel(e)})),g.Vb()}if(2&t){const t=g.ic();g.rc("isreadonly",!1)("captchaOn",!1)("captchaName","registercaptcha")("whatform",t.whatTempcontrolsmap)("whatformgroup",t.inwhatTempformgroup)("whichbuttons",t.mytempbuttons)}}function W(t,e){if(1&t){const t=g.Xb();g.Wb(0,"div",11),g.Wb(1,"div",12),g.Wb(2,"app-appicon",13),g.ec("actionEvent",(function(){g.Cc(t);const e=g.ic().$implicit;return g.ic().deleteProduct(e)})),g.Vb(),g.Vb(),g.Wb(3,"div",12),g.Wb(4,"app-appicon",14),g.ec("actionEvent",(function(){g.Cc(t);const e=g.ic().$implicit;return g.ic().copyProduct(e)})),g.Vb(),g.Vb(),g.Vb()}2&t&&(g.Db(2),g.rc("color","accent")("icon","delete")("askquestion",!0)("icontext","Delete")("isiconwithtext",!0),g.Db(2),g.rc("color","primary")("icon","file_copy")("icontext","Copy")("isiconwithtext",!0))}function C(t,e){if(1&t){const t=g.Xb();g.Wb(0,"mat-card"),g.Wb(1,"mat-card-title"),g.Mc(2),g.jc(3,"translate"),g.Vb(),g.Wb(4,"mat-card-content",4),g.Wb(5,"yogagainv2-dyanamic-page",9),g.ec("actionEvent",(function(e){return g.Cc(t),g.ic().addVariation(e)}))("cancelEvent",(function(e){return g.Cc(t),g.ic().cancel(e)})),g.Vb(),g.Vb(),g.Wb(6,"mat-card-actions"),g.Kc(7,W,5,9,"div",10),g.Vb(),g.Vb()}if(2&t){const t=e.$implicit,a=g.ic();g.Db(2),g.Nc(g.kc(3,6,"Existing Variations")),g.Db(3),g.rc("isreadonly",a.whatobj[t.$key])("captchaOn",!1)("captchaName","registercaptcha")("combinedformngroup",a.getFormNControlBoth(a.whatobj[t.$key],t)),g.Db(2),g.rc("ngIf",a.ygen.isAdmin())}}let D=(()=>{class t{constructor(t,e,a,n,o,r,c,s,d,l){this.centerdb=t,this.alertme=e,this.ycat=a,this.route=n,this.ysharedata=o,this.ydata=r,this.ygen=c,this.router=s,this.ydataservice=d,this.yobuilderservice=l,this.title="Add Product",this.mybuttons=new Map,this.mytempbuttons=new Map,this.isreadonly=!1,this.loaded=!1,this.isedit=!1,this.categoryControl=new i.d("",[i.v.required,i.v.maxLength(100)]),this.subcategoryControl=new i.d("",[i.v.maxLength(100)]),this.logoControl=new i.d(""),this.previousUrl="products",this.pd=!0}ngOnInit(){console.log("dddd "),this.whatobj={};let t=this.route.snapshot.queryParams.key;this.productkey=t,this.previousUrl=this.route.snapshot.queryParams.previousUrl,this.centerdb.currenttenant.subscribe(e=>{this.crudlist=new p.a(y.a.getpath()+"/shop/products",this.ydata.getDatabase(),!0,this.ygen.getUid()),t?(this.isedit=!0,this.crudVariationlist=new p.a(y.a.getpath()+"/shop/products/"+t+"/variations",this.ydata.getDatabase(),!0,this.ygen.getUid()),this.variations=this.crudVariationlist.getList(),this.startTempVariationObject(null)):console.log("nana nanan")})}cancel(t){console.log(t),this.ygen.goBack()}addVariation(t){t.data.value.discount=this.getDiscount(t),t&&t.data.value.$key?(this.crudVariationlist.updateList(t.data.value),this.alertme.openSnackBar("Variation updated","Ok")):(this.crudVariationlist.addtolist(t.data.value),this.alertme.openSnackBar("Variation added","Ok"),this.startTempVariationObject(null))}getDiscount(t){let e=t.data.value.mrp;return(100*(e-t.data.value.price)/e).toFixed(0)}addtempVariation(t=!1,e){let a=[],n=0;return a[n]=new b.b(n,"description","",b.a.textarea),a[n].placeholder="Description of Product",a[n].required=!1,a[n].readonly=t,n++,a[n]=new b.b(n,"price","",b.a.number),a[n].placeholder="Price",a[n].required=!0,a[n].readonly=t,n++,a[n]=new b.b(n,"mrp","",b.a.number),a[n].placeholder="MRP",a[n].required=!0,a[n].readonly=t,n++,a[n]=new b.b(n,"subcategory","",b.a.text),a[n].placeholder="Sub Category",a[n].required=!1,a[n].showme=!1,a[n].readonly=t,n++,a[n]=new b.b(n,"soldout",!1,b.a.slidetoggle),a[n].placeholder="soldout",a[n].required=!1,a[n].showme=!0,a[n].readonly=t,n++,a[n]=new b.b(n,"outofstock",!1,b.a.slidetoggle),a[n].placeholder="outofstock",a[n].required=!1,a[n].showme=!0,a[n].readonly=t,n++,a[n]=new b.b(n,"maxqty","10",b.a.number),a[n].placeholder="Maximum quantity available",a[n].required=!0,a[n].readonly=t,n++,a[n]=new b.b(n,"createdBy","",b.a.text),a[n].placeholder="createdBy",a[n].required=!1,a[n].showme=!1,a[n].readonly=t,n++,a[n]=new b.b(n,"updatedBy","",b.a.text),a[n].placeholder="updatedBy",a[n].required=!1,a[n].showme=!1,a[n].readonly=t,e&&e.$key&&(n++,a[n]=new b.b(n,"$key","",b.a.text),a[n].placeholder="$key",a[n].required=!1,a[n].showme=!1,a[n].readonly=t),a.forEach(a=>{a.readonly=t,t&&(a.required=!1),e&&(a.value="date"===a.whattype?new Date(e[a.name]):e[a.name])}),a}startTempVariationObject(t){this.clear=!1,this.whatTempcontrolsmap=new Map,this.inwhatTempformgroup=null;let e=new Map;this.addtempVariation(!1,t).forEach(t=>{e.set(t.name,t)}),this.inwhatTempformgroup=this.yobuilderservice.createFormGroup(e),this.whatTempcontrolsmap=this.yobuilderservice.createMap(e,this.inwhatTempformgroup);let a=new h.a("Cancel","cancel","cancel_presentation","secondary",!1),n=new h.a("Save Data",this.previousUrl,"lock_open","primary",!1);this.mytempbuttons.set("Action2",n),this.mytempbuttons.set("Action1",a),setTimeout(()=>{this.clear=!0},50)}getFormNControlBoth(t,e){let a,n=new Map,i=new Map;return this.addtempVariation(t,e).forEach(t=>{i.set(t.name,t)}),a=this.yobuilderservice.createFormGroup(i),n=this.yobuilderservice.createMap(i,a),{formgroup:a,controlmap:n,buttons:this.getNewButtons()}}getNewButtons(){let t=new Map,e=new h.a("Cancel","cancel","cancel_presentation","secondary",!1),a=new h.a("Save Data",this.previousUrl,"lock_open","primary",!1);return t.set("Action2",a),t.set("Action1",e),t}deleteProduct(t){this.crudVariationlist.removefromList(t),this.alertme.openSnackBar("Variation deleted","Ok")}editProduct(t){this.whatobj[t.$key]=0}copyProduct(t){this.crudVariationlist.addtolist(t),this.alertme.openSnackBar("Variation copied and created new variation","Ok")}}return t.\u0275fac=function(e){return new(e||t)(g.Qb(y.a),g.Qb(m.a),g.Qb(u.a),g.Qb(o.a),g.Qb(c.a),g.Qb(s.a),g.Qb(d.a),g.Qb(o.j),g.Qb(c.a),g.Qb(l.a))},t.\u0275cmp=g.Kb({type:t,selectors:[["app-variation"]],decls:21,vars:8,consts:[[3,"color"],["slot","start"],[1,"ion-padding"],["loading",""],[1,"box"],[3,"isreadonly","captchaOn","captchaName","whatform","whatformgroup","whichbuttons","actionEvent","cancelEvent",4,"ngIf"],[4,"ngFor","ngForOf"],["type","indeterminate","reversed","true"],[3,"isreadonly","captchaOn","captchaName","whatform","whatformgroup","whichbuttons","actionEvent","cancelEvent"],[3,"isreadonly","captchaOn","captchaName","combinedformngroup","actionEvent","cancelEvent"],["class","bcontainer",4,"ngIf"],[1,"bcontainer"],[1,"bitems"],[3,"color","icon","askquestion","icontext","isiconwithtext","actionEvent"],[3,"color","icon","icontext","isiconwithtext","actionEvent"]],template:function(t,e){1&t&&(g.Wb(0,"ion-header"),g.Wb(1,"ion-toolbar",0),g.Wb(2,"ion-buttons",1),g.Rb(3,"ion-back-button"),g.Vb(),g.Wb(4,"ion-title"),g.Mc(5,"Products Variation"),g.Vb(),g.Vb(),g.Vb(),g.Wb(6,"ion-content",2),g.Kc(7,k,1,0,"ng-template",null,3,g.Lc),g.Wb(9,"ion-grid"),g.Wb(10,"ion-row"),g.Wb(11,"ion-col"),g.Wb(12,"mat-card"),g.Wb(13,"mat-card-title"),g.Mc(14),g.jc(15,"translate"),g.Vb(),g.Wb(16,"mat-card-content",4),g.Kc(17,x,1,6,"yogagainv2-dyanamic-page",5),g.Vb(),g.Rb(18,"mat-card-actions"),g.Vb(),g.Kc(19,C,8,8,"mat-card",6),g.jc(20,"async"),g.Vb(),g.Vb(),g.Vb(),g.Vb()),2&t&&(g.Db(1),g.rc("color","warning"),g.Db(13),g.Nc(g.kc(15,4,"New Variation")),g.Db(3),g.rc("ngIf",e.clear),g.Db(2),g.rc("ngForOf",g.kc(20,6,e.variations)))},directives:[r.y,r.fb,r.j,r.f,r.g,r.db,r.s,r.x,r.P,r.r,w.a,w.h,w.d,n.m,w.b,n.l,r.N,f.a,v.a],pipes:[V.c,n.b],styles:[".bbcontainer[_ngcontent-%COMP%]{width:100%}.bbcontainer[_ngcontent-%COMP%], .bcontainer[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}mat-card[_ngcontent-%COMP%]{margin-bottom:10px}"]}),t})();var E=a("hVaU"),M=a("IZvt"),O=a("4pxM");const P=[{path:"",component:D}];let q=(()=>{class t{}return t.\u0275mod=g.Ob({type:t}),t.\u0275inj=g.Nb({factory:function(e){return new(e||t)},imports:[[n.c,i.i,r.gb,E.a,M.a,O.a,o.n.forChild(P)]]}),t})()}}]);