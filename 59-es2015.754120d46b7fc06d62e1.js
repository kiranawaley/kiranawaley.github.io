(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{mLE3:function(t,e,a){"use strict";a.r(e),a.d(e,"VariationPageModule",(function(){return q}));var n=a("ofXK"),i=a("3Pt+"),o=a("tyNb"),r=a("TEn/"),c=a("YKLQ"),s=a("+DAS"),d=a("rIxz"),l=a("DzsY"),u=a("ybIa"),p=a("mLjM"),b=a("D+2S"),h=a("LeCc"),m=a("i2Ty"),y=a("fXoL"),g=a("Wp6s"),w=a("iEmi"),f=a("YCbS"),v=a("sYmb");function V(t,e){1&t&&y.Rb(0,"ion-progress-bar",7)}function k(t,e){if(1&t){const t=y.Xb();y.Wb(0,"yogagainv2-dyanamic-page",8),y.ec("actionEvent",(function(e){return y.Cc(t),y.ic().addVariation(e)}))("cancelEvent",(function(e){return y.Cc(t),y.ic().cancel(e)})),y.Vb()}if(2&t){const t=y.ic();y.rc("isreadonly",!1)("captchaOn",!1)("captchaName","registercaptcha")("whatform",t.whatTempcontrolsmap)("whatformgroup",t.inwhatTempformgroup)("whichbuttons",t.mytempbuttons)}}function x(t,e){if(1&t){const t=y.Xb();y.Wb(0,"div",11),y.Wb(1,"div",12),y.Wb(2,"app-appicon",13),y.ec("actionEvent",(function(){y.Cc(t);const e=y.ic().$implicit;return y.ic().deleteProduct(e)})),y.Vb(),y.Vb(),y.Wb(3,"div",12),y.Wb(4,"app-appicon",14),y.ec("actionEvent",(function(){y.Cc(t);const e=y.ic().$implicit;return y.ic().copyProduct(e)})),y.Vb(),y.Vb(),y.Vb()}2&t&&(y.Db(2),y.rc("color","accent")("icon","delete")("askquestion",!0)("icontext","Delete")("isiconwithtext",!0),y.Db(2),y.rc("color","primary")("icon","file_copy")("icontext","Copy")("isiconwithtext",!0))}function W(t,e){if(1&t){const t=y.Xb();y.Wb(0,"mat-card"),y.Wb(1,"mat-card-title"),y.Lc(2),y.jc(3,"translate"),y.Vb(),y.Wb(4,"mat-card-content",4),y.Wb(5,"yogagainv2-dyanamic-page",9),y.ec("actionEvent",(function(e){return y.Cc(t),y.ic().addVariation(e)}))("cancelEvent",(function(e){return y.Cc(t),y.ic().cancel(e)})),y.Vb(),y.Vb(),y.Wb(6,"mat-card-actions"),y.Jc(7,x,5,9,"div",10),y.Vb(),y.Vb()}if(2&t){const t=e.$implicit,a=y.ic();y.Db(2),y.Mc(y.kc(3,6,"Existing Variations")),y.Db(3),y.rc("isreadonly",a.whatobj[t.$key])("captchaOn",!1)("captchaName","registercaptcha")("combinedformngroup",a.getFormNControlBoth(a.whatobj[t.$key],t)),y.Db(2),y.rc("ngIf",a.ygen.isAdmin())}}let C=(()=>{class t{constructor(t,e,a,n,o,r,c,s,d){this.alertme=t,this.ycat=e,this.route=a,this.ysharedata=n,this.ydata=o,this.ygen=r,this.router=c,this.ydataservice=s,this.yobuilderservice=d,this.title="Add Product",this.mybuttons=new Map,this.mytempbuttons=new Map,this.isreadonly=!1,this.loaded=!1,this.isedit=!1,this.categoryControl=new i.d("",[i.u.required,i.u.maxLength(100)]),this.subcategoryControl=new i.d("",[i.u.maxLength(100)]),this.logoControl=new i.d(""),this.previousUrl="products",this.pd=!0}ngOnInit(){console.log("dddd "),this.whatobj={};let t=this.route.snapshot.queryParams.key;this.productkey=t,this.previousUrl=this.route.snapshot.queryParams.previousUrl,this.crudlist=new u.a("/shop/products",this.ydata.getDatabase(),!0,this.ygen.getUid()),t?(this.isedit=!0,this.crudVariationlist=new u.a("/shop/products/"+t+"/variations",this.ydata.getDatabase(),!0,this.ygen.getUid()),this.variations=this.crudVariationlist.getList(),this.startTempVariationObject(null)):console.log("nana nanan")}cancel(t){console.log(t),this.ygen.goBack()}addVariation(t){t.data.value.discount=this.getDiscount(t),t&&t.data.value.$key?(this.crudVariationlist.updateList(t.data.value),this.alertme.openSnackBar("Variation updated","Ok")):(this.crudVariationlist.addtolist(t.data.value),this.alertme.openSnackBar("Variation added","Ok"),this.startTempVariationObject(null))}getDiscount(t){let e=t.data.value.mrp;return(100*(e-t.data.value.price)/e).toFixed(0)}addtempVariation(t=!1,e){let a=[],n=0;return a[n]=new p.b(n,"description","",p.a.textarea),a[n].placeholder="Description of Product",a[n].required=!1,a[n].readonly=t,n++,a[n]=new p.b(n,"price","",p.a.number),a[n].placeholder="Price",a[n].required=!0,a[n].readonly=t,n++,a[n]=new p.b(n,"mrp","",p.a.number),a[n].placeholder="MRP",a[n].required=!0,a[n].readonly=t,n++,a[n]=new p.b(n,"subcategory","",p.a.text),a[n].placeholder="Sub Category",a[n].required=!1,a[n].showme=!1,a[n].readonly=t,n++,a[n]=new p.b(n,"soldout",!1,p.a.slidetoggle),a[n].placeholder="soldout",a[n].required=!1,a[n].showme=!0,a[n].readonly=t,n++,a[n]=new p.b(n,"outofstock",!1,p.a.slidetoggle),a[n].placeholder="outofstock",a[n].required=!1,a[n].showme=!0,a[n].readonly=t,n++,a[n]=new p.b(n,"maxqty","10",p.a.number),a[n].placeholder="Maximum quantity available",a[n].required=!0,a[n].readonly=t,n++,a[n]=new p.b(n,"createdBy","",p.a.text),a[n].placeholder="createdBy",a[n].required=!1,a[n].showme=!1,a[n].readonly=t,n++,a[n]=new p.b(n,"updatedBy","",p.a.text),a[n].placeholder="updatedBy",a[n].required=!1,a[n].showme=!1,a[n].readonly=t,e&&e.$key&&(n++,a[n]=new p.b(n,"$key","",p.a.text),a[n].placeholder="$key",a[n].required=!1,a[n].showme=!1,a[n].readonly=t),a.forEach(a=>{a.readonly=t,t&&(a.required=!1),e&&(a.value="date"===a.whattype?new Date(e[a.name]):e[a.name])}),a}startTempVariationObject(t){this.clear=!1,this.whatTempcontrolsmap=new Map,this.inwhatTempformgroup=null;let e=new Map;this.addtempVariation(!1,t).forEach(t=>{e.set(t.name,t)}),this.inwhatTempformgroup=this.yobuilderservice.createFormGroup(e),this.whatTempcontrolsmap=this.yobuilderservice.createMap(e,this.inwhatTempformgroup);let a=new b.a("Cancel","cancel","cancel_presentation","secondary",!1),n=new b.a("Save Data",this.previousUrl,"lock_open","primary",!1);this.mytempbuttons.set("Action2",n),this.mytempbuttons.set("Action1",a),setTimeout(()=>{this.clear=!0},50)}getFormNControlBoth(t,e){let a,n=new Map,i=new Map;return this.addtempVariation(t,e).forEach(t=>{i.set(t.name,t)}),a=this.yobuilderservice.createFormGroup(i),n=this.yobuilderservice.createMap(i,a),{formgroup:a,controlmap:n,buttons:this.getNewButtons()}}getNewButtons(){let t=new Map,e=new b.a("Cancel","cancel","cancel_presentation","secondary",!1),a=new b.a("Save Data",this.previousUrl,"lock_open","primary",!1);return t.set("Action2",a),t.set("Action1",e),t}deleteProduct(t){this.crudVariationlist.removefromList(t),this.alertme.openSnackBar("Variation deleted","Ok")}editProduct(t){this.whatobj[t.$key]=0}copyProduct(t){this.crudVariationlist.addtolist(t),this.alertme.openSnackBar("Variation copied and created new variation","Ok")}}return t.\u0275fac=function(e){return new(e||t)(y.Qb(m.a),y.Qb(h.a),y.Qb(o.a),y.Qb(c.a),y.Qb(s.a),y.Qb(d.a),y.Qb(o.g),y.Qb(c.a),y.Qb(l.a))},t.\u0275cmp=y.Kb({type:t,selectors:[["app-variation"]],decls:21,vars:8,consts:[[3,"color"],["slot","start"],[1,"ion-padding"],["loading",""],[1,"box"],[3,"isreadonly","captchaOn","captchaName","whatform","whatformgroup","whichbuttons","actionEvent","cancelEvent",4,"ngIf"],[4,"ngFor","ngForOf"],["type","indeterminate","reversed","true"],[3,"isreadonly","captchaOn","captchaName","whatform","whatformgroup","whichbuttons","actionEvent","cancelEvent"],[3,"isreadonly","captchaOn","captchaName","combinedformngroup","actionEvent","cancelEvent"],["class","bcontainer",4,"ngIf"],[1,"bcontainer"],[1,"bitems"],[3,"color","icon","askquestion","icontext","isiconwithtext","actionEvent"],[3,"color","icon","icontext","isiconwithtext","actionEvent"]],template:function(t,e){1&t&&(y.Wb(0,"ion-header"),y.Wb(1,"ion-toolbar",0),y.Wb(2,"ion-buttons",1),y.Rb(3,"ion-back-button"),y.Vb(),y.Wb(4,"ion-title"),y.Lc(5,"Products Variation"),y.Vb(),y.Vb(),y.Vb(),y.Wb(6,"ion-content",2),y.Jc(7,V,1,0,"ng-template",null,3,y.Kc),y.Wb(9,"ion-grid"),y.Wb(10,"ion-row"),y.Wb(11,"ion-col"),y.Wb(12,"mat-card"),y.Wb(13,"mat-card-title"),y.Lc(14),y.jc(15,"translate"),y.Vb(),y.Wb(16,"mat-card-content",4),y.Jc(17,k,1,6,"yogagainv2-dyanamic-page",5),y.Vb(),y.Rb(18,"mat-card-actions"),y.Vb(),y.Jc(19,W,8,8,"mat-card",6),y.jc(20,"async"),y.Vb(),y.Vb(),y.Vb(),y.Vb()),2&t&&(y.Db(1),y.rc("color","warning"),y.Db(13),y.Mc(y.kc(15,4,"New Variation")),y.Db(3),y.rc("ngIf",e.clear),y.Db(2),y.rc("ngForOf",y.kc(20,6,e.variations)))},directives:[r.v,r.ab,r.j,r.f,r.g,r.Y,r.s,r.u,r.K,r.r,g.a,g.h,g.d,n.m,g.b,n.l,r.I,w.a,f.a],pipes:[v.c,n.b],styles:[".bbcontainer[_ngcontent-%COMP%]{width:100%}.bbcontainer[_ngcontent-%COMP%], .bcontainer[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}mat-card[_ngcontent-%COMP%]{margin-bottom:10px}"]}),t})();var D=a("hVaU"),E=a("IZvt"),M=a("4pxM");const O=[{path:"",component:C}];let q=(()=>{class t{}return t.\u0275mod=y.Ob({type:t}),t.\u0275inj=y.Nb({factory:function(e){return new(e||t)},imports:[[n.c,i.i,r.bb,D.a,E.a,M.a,o.k.forChild(O)]]}),t})()}}]);