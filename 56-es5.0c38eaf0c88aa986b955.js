function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{gQzD:function(t,e,n){"use strict";n.r(e),n.d(e,"ProductPageModule",(function(){return j}));var a=n("ofXK"),o=n("3Pt+"),r=n("tyNb"),i=n("TEn/"),c=n("YKLQ"),s=n("+DAS"),d=n("rIxz"),l=n("DzsY"),g=n("ybIa"),u=n("mLjM"),h=n("D+2S"),b=n("lJxs"),p=n("LeCc"),f=n("fXoL"),y=n("Wp6s"),m=n("bTqV"),w=n("NFeN"),v=n("qat1"),C=n("iEmi"),P=function(t){return{color:t}};function O(t,e){if(1&t){var n=f.Xb();f.Wb(0,"button",6),f.ec("click",(function(){return f.Cc(n),f.ic().changeReadOnly()})),f.Wb(1,"mat-icon",7),f.Lc(2,"edit"),f.Vb(),f.Vb()}if(2&t){var a=f.ic();f.Db(1),f.rc("ngClass",f.vc(1,P,a.isreadonly?"#D09B2C":"black"))}}function k(t,e){if(1&t){var n=f.Xb();f.Wb(0,"app-productcat",8),f.ec("actionEvent",(function(t){return f.Cc(n),f.ic().callchange(t)})),f.Vb()}if(2&t){var a=f.ic();f.rc("category",a.categoryControl.value)("subcategory",a.subcategoryControl.value)("brand",a.logoControl.value)("isedit",a.isedit)}}function _(t,e){if(1&t){var n=f.Xb();f.Wb(0,"yogagainv2-dyanamic-page",9),f.ec("actionEvent",(function(t){return f.Cc(n),f.ic().send(t)}))("cancelEvent",(function(t){return f.Cc(n),f.ic().cancel(t)})),f.Vb()}if(2&t){var a=f.ic();f.rc("isreadonly",a.isreadonly)("captchaOn",!1)("captchaName","registercaptcha")("whatform",a.whatcontrolsmap)("whatformgroup",a.inwhatformgroup)("whichbuttons",a.mybuttons)}}var M,x,q=((M=function(){function t(e,n,a,r,i,c,s,d){var l=this;_classCallCheck(this,t),this.ycat=e,this.route=n,this.ysharedata=a,this.ydata=r,this.ygen=i,this.router=c,this.ydataservice=s,this.yobuilderservice=d,this.title="Add Product",this.mybuttons=new Map,this.isreadonly=!1,this.loaded=!1,this.isedit=!1,this.categoryControl=new o.d("",[o.u.required,o.u.maxLength(100)]),this.subcategoryControl=new o.d("",[o.u.maxLength(100)]),this.logoControl=new o.d(""),this.previousUrl="products",this.pd=!0,this.brandlist=e.getlogos(),this.categorylist=new g.a("/shop/categories",this.ydata.getDatabase(),!0,this.ygen.getUid()),this.categories=this.categorylist.getList(),this.categories.pipe(Object(b.a)((function(t){return t.map((function(t){return{title:t.title,subcategory:l.gatherSubCategory(t.subcategory)}}))}))).subscribe((function(t){l.categoriesoptions=t}))}return _createClass(t,[{key:"categorychanged",value:function(t,e){this.whatcontrolsmap.get(e).value=t,this.whatcontrolsmap.get(e).control.setValue(t)}},{key:"gatherSubCategory",value:function(t){var e=[];return t&&Object.keys(t).forEach((function(n){e.push(t[n].title)})),e}},{key:"getCategories",value:function(){return this.categoriesoptions}},{key:"getSubCategories",value:function(t){if(!t||!this.categoriesoptions)return[];var e=this.categoriesoptions.filter((function(e){return e.title==t.value}));return 1==e.length?e[0].subcategory:[]}},{key:"ngOnInit",value:function(){var t=this;console.log("dddd ");var e=this.route.snapshot.queryParams.key;if(this.previousUrl=this.route.snapshot.queryParams.previousUrl,this.crudlist=new g.a("/shop/products",this.ydata.getDatabase(),!0,this.ygen.getUid()),e){this.isedit=!0,this.cruddata=new g.a("/shop/products/"+e,this.ydata.getDatabase(),!1,this.ygen.getUid()),this.title="Edit Product";var n=this.cruddata.getData().subscribe((function(a){n&&n.unsubscribe(),t.currentEvent=a,Object.assign(t.currentEvent,{$key:e}),t.isreadonly=!0,t.categoryControl.setValue(t.currentEvent.category),t.subcategoryControl.setValue(t.currentEvent.subcategory),t.logoControl.setValue(t.currentEvent.brand),t.pd=!1,setTimeout((function(){t.pd=!0}),500),t.startObject()}))}else this.title="Add Product",this.startObject()}},{key:"callchange",value:function(t){console.log(t),this.categorychanged(t.value,t.whatchanged)}},{key:"getDomainObject",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=[],a=0;return n[a]=new u.b(a,"image","https://res.cloudinary.com/ideasyogi/image/upload/v1554035710/yashica_tzklwz.png",u.a.image),n[a].placeholder="Event Picture",n[a].required=!1,n[a].showme=!0,n[a].readonly=e,n[++a]=new u.b(a,"imageuploaded",!1,u.a.slidetoggle),n[a].placeholder="imageuploaded",n[a].required=!1,n[a].showme=!0,n[a].readonly=e,n[++a]=new u.b(a,"title","",u.a.text),n[a].placeholder="Product Name",n[a].required=!0,n[a].readonly=e,n[++a]=new u.b(a,"description","",u.a.textarea),n[a].placeholder="Description of Product",n[a].required=!1,n[a].readonly=e,n[++a]=new u.b(a,"discount","",u.a.text),n[a].placeholder="% Discount",n[a].required=!1,n[a].readonly=e,n[a].showme=!1,n[++a]=new u.b(a,"discounttext","",u.a.text),n[a].placeholder="Discount Text",n[a].required=!1,n[a].readonly=e,n[a].showme=!1,n[++a]=new u.b(a,"price","",u.a.number),n[a].placeholder="Price",n[a].required=!0,n[a].readonly=e,n[++a]=new u.b(a,"mrp","",u.a.number),n[a].placeholder="MRP",n[a].required=!0,n[a].readonly=e,n[++a]=new u.b(a,"category","",u.a.text),n[a].placeholder="Category",n[a].required=!0,n[a].showme=!1,n[a].readonly=e,n[++a]=new u.b(a,"subcategory","",u.a.text),n[a].placeholder="Sub Category",n[a].required=!1,n[a].showme=!1,n[a].readonly=e,n[++a]=new u.b(a,"soldout",!1,u.a.slidetoggle),n[a].placeholder="soldout",n[a].required=!1,n[a].showme=!0,n[a].readonly=e,n[++a]=new u.b(a,"outofstock",!1,u.a.slidetoggle),n[a].placeholder="outofstock",n[a].required=!1,n[a].showme=!0,n[a].readonly=e,n[++a]=new u.b(a,"isveg",!0,u.a.slidetoggle),n[a].placeholder="Is Veg",n[a].required=!1,n[a].showme=!0,n[a].readonly=e,n[++a]=new u.b(a,"isorganic",!0,u.a.slidetoggle),n[a].placeholder="Is Organic",n[a].required=!1,n[a].showme=!0,n[a].readonly=e,n[++a]=new u.b(a,"istopsaver",!0,u.a.slidetoggle),n[a].placeholder="Is A Top Saver",n[a].required=!1,n[a].showme=!0,n[a].readonly=e,n[++a]=new u.b(a,"heavydiscount",!0,u.a.slidetoggle),n[a].placeholder="Heavy Discount",n[a].required=!1,n[a].showme=!0,n[a].readonly=e,n[++a]=new u.b(a,"newarrival",!0,u.a.slidetoggle),n[a].placeholder="Is a new arrival",n[a].required=!1,n[a].showme=!0,n[a].readonly=e,n[++a]=new u.b(a,"maxqty","10",u.a.number),n[a].placeholder="Maximum quantity available",n[a].required=!0,n[a].readonly=e,n[++a]=new u.b(a,"brand","",u.a.text),n[a].placeholder="brand",n[a].required=!1,n[a].showme=!0,n[a].showme=!1,n[a].readonly=e,n[++a]=new u.b(a,"createdBy","",u.a.text),n[a].placeholder="createdBy",n[a].required=!1,n[a].showme=!1,n[a].readonly=e,n[++a]=new u.b(a,"updatedBy","",u.a.text),n[a].placeholder="updatedBy",n[a].required=!1,n[a].showme=!1,n[a].readonly=e,n[++a]=new u.b(a,"$key","",u.a.text),n[a].placeholder="key",n[a].required=!1,n[a].showme=!1,n[a].readonly=e,n.forEach((function(n){n.readonly=e,e&&(n.required=!1),t.currentEvent&&(n.value="date"===n.whattype?new Date(t.currentEvent[n.name]):t.currentEvent[n.name])})),n}},{key:"startObject",value:function(){var t=this;this.clear=!1,this.whatcontrolsmap=new Map,this.inwhatformgroup=null;var e=new Map;this.getDomainObject(this.isreadonly).forEach((function(t){e.set(t.name,t)})),this.inwhatformgroup=this.yobuilderservice.createFormGroup(e),this.whatcontrolsmap=this.yobuilderservice.createMap(e,this.inwhatformgroup);var n=new h.a("Cancel","cancel","cancel_presentation","secondary",!1),a=new h.a("Save Data",this.previousUrl,"lock_open","primary",!1);this.mybuttons.set("Action2",a),this.mybuttons.set("Action1",n);var o=this.route.snapshot.queryParams.category,r=this.route.snapshot.queryParams.subcategory,i=this.route.snapshot.queryParams.brand;o&&(this.categoryControl.setValue(o),this.categorychanged(o,"category")),r&&(this.subcategoryControl.setValue(r),this.categorychanged(r,"subcategory")),i&&(this.logoControl.setValue(i),this.categorychanged(i,"brand")),(o||r||i)&&(this.pd=!1,setTimeout((function(){t.pd=!0}),500)),setTimeout((function(){t.clear=!0}),50)}},{key:"cancel",value:function(t){console.log(t),this.ygen.goBack()}},{key:"changeReadOnly",value:function(){var t=this;this.isreadonly=!this.isreadonly,this.isedit=!this.isedit,this.pd=!1,setTimeout((function(){t.pd=!0}),100),this.startObject()}},{key:"send",value:function(t){t.data.value.brand||(t.data.value.brand=""),t.data.value.discount=this.getDiscount(t),this.currentEvent&&this.currentEvent.$key?this.cruddata.updateData(t.data.value):this.crudlist.addtolist(t.data.value),this.router.navigate([t.whatnext])}},{key:"getDiscount",value:function(t){var e=t.data.value.mrp;return(100*(e-t.data.value.price)/e).toFixed(0)}}]),t}()).\u0275fac=function(t){return new(t||M)(f.Qb(p.a),f.Qb(r.a),f.Qb(c.a),f.Qb(s.a),f.Qb(d.a),f.Qb(r.g),f.Qb(c.a),f.Qb(l.a))},M.\u0275cmp=f.Kb({type:M,selectors:[["app-product"]],decls:15,vars:4,consts:[["slot","start"],["padding",""],["class","editable","mat-mini-fab","",3,"click",4,"ngIf"],[1,"box"],[3,"category","subcategory","brand","isedit","actionEvent",4,"ngIf"],[3,"isreadonly","captchaOn","captchaName","whatform","whatformgroup","whichbuttons","actionEvent","cancelEvent",4,"ngIf"],["mat-mini-fab","",1,"editable",3,"click"],[3,"ngClass"],[3,"category","subcategory","brand","isedit","actionEvent"],[3,"isreadonly","captchaOn","captchaName","whatform","whatformgroup","whichbuttons","actionEvent","cancelEvent"]],template:function(t,e){1&t&&(f.Wb(0,"ion-header"),f.Wb(1,"ion-toolbar"),f.Wb(2,"ion-buttons",0),f.Rb(3,"ion-back-button"),f.Vb(),f.Wb(4,"ion-title"),f.Lc(5),f.Vb(),f.Vb(),f.Vb(),f.Wb(6,"ion-content",1),f.Wb(7,"ion-grid"),f.Wb(8,"ion-row"),f.Wb(9,"ion-col"),f.Jc(10,O,3,3,"button",2),f.Wb(11,"mat-card"),f.Wb(12,"mat-card-content",3),f.Jc(13,k,1,4,"app-productcat",4),f.Jc(14,_,1,6,"yogagainv2-dyanamic-page",5),f.Vb(),f.Vb(),f.Vb(),f.Vb(),f.Vb(),f.Vb()),2&t&&(f.Db(5),f.Mc(e.title),f.Db(5),f.rc("ngIf",e.isedit),f.Db(3),f.rc("ngIf",e.pd),f.Db(1),f.rc("ngIf",e.clear))},directives:[i.v,i.ab,i.j,i.f,i.g,i.Y,i.s,i.u,i.K,i.r,a.m,y.a,y.d,m.a,w.a,a.k,v.a,C.a],styles:['@charset "UTF-8";.editable[_ngcontent-%COMP%]{position:absolute;left:93%;z-index:1}.fill-height-or-more[_ngcontent-%COMP%]{min-height:100%;display:flex;flex-direction:column}.fill-height-or-more[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;justify-content:center}.some-area[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding:1rem}.some-area[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{background:#8c6}.some-area[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){background:#79b5d2}.some-area[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){background:#8cbfd9}.some-area[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){background:#9fcadf}.some-area[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){background:#b3d5e6}.some-area[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .some-area[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 .2rem}.some-area[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.mydash[_ngcontent-%COMP%]{align-items:center}#notification[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;z-index:99;top:0}.notification1Status[_ngcontent-%COMP%]{display:none}.notification1[_ngcontent-%COMP%]{display:inline-block;position:relative;padding:.6em;background:#3498db;border-radius:.2em;font-size:1.1em;box-shadow:0 0 10px rgba(0,0,0,.2)}.notification1[_ngcontent-%COMP%]:after, .notification1[_ngcontent-%COMP%]:before{color:#fff;text-shadow:0 1px 3px rgba(0,0,0,.3)}.notification1[_ngcontent-%COMP%]:before{display:block;content:"\uf0f3";font-family:FontAwesome;transform-origin:top center}.notification1[_ngcontent-%COMP%]:after{font-family:Arial;font-size:.7em;font-weight:700;position:absolute;top:-11px;right:-4px;padding:5px 8px;line-height:100%;border:2px solid #fff;border-radius:60px;background:#db4534;content:attr(data-count);opacity:0;transform:scale(.5);transition:transform,opacity;transition-duration:.3s;transition-timing-function:ease-out}.notification1.notify[_ngcontent-%COMP%]:before{-webkit-animation:ring 1.5s ease;animation:ring 1.5s ease}.notification1.show-count[_ngcontent-%COMP%]:after{transform:scale(1);opacity:1}@-webkit-keyframes ring{0%{-webkit-transform:rotate(35deg)}12.5%{-webkit-transform:rotate(-30deg)}25%{-webkit-transform:rotate(25deg)}37.5%{-webkit-transform:rotate(-20deg)}50%{-webkit-transform:rotate(15deg)}62.5%{-webkit-transform:rotate(-10deg)}75%{-webkit-transform:rotate(5deg)}to{-webkit-transform:rotate(0deg)}}@keyframes ring{0%{transform:rotate(35deg)}12.5%{transform:rotate(-30deg)}25%{transform:rotate(25deg)}37.5%{transform:rotate(-20deg)}50%{transform:rotate(15deg)}62.5%{transform:rotate(-10deg)}75%{transform:rotate(5deg)}to{transform:rotate(0deg)}}.xxx[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{float:left}.xxx[_ngcontent-%COMP%]   .notification1[_ngcontent-%COMP%]{float:right;color:#ff1493}.networkstatus[_ngcontent-%COMP%]{background:#ffc107;text-align:center;vertical-align:middle;font-weight:700;font-size:x-large}.paybuttons[_ngcontent-%COMP%]{float:right}.card-background-page[_ngcontent-%COMP%]{background:#000}.slide-zoom[_ngcontent-%COMP%]{display:block;width:100%;text-align:center;background:snow}.messagenote[_ngcontent-%COMP%]{background:#dff49e;border-radius:10px}.paymentnote[_ngcontent-%COMP%]{background:#b2daee;border-radius:10px}.dada[_ngcontent-%COMP%]{background:#e2dabb}img[_ngcontent-%COMP%]{display:block;width:100%;max-height:160px!important}.col-container1[_ngcontent-%COMP%]{display:table}.col1[_ngcontent-%COMP%]{display:table-cell}.card-header-md[_ngcontent-%COMP%]{padding:0;font-size:1.1rem;color:#222;margin-top:-10px}.card-md[_ngcontent-%COMP%]{width:100%;border-radius:12px;font-size:1.4rem;background:#fff;height:100%;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.slide-image[_ngcontent-%COMP%]{max-height:90%;max-width:100%;margin:5px 0;width:100%;height:50%;align:"middle";opacity:1;filter:alpha(opacity=50)}ion-card-content[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:1.1em!important;font-weight:700!important}ion-card-header[_ngcontent-%COMP%]{background-color:#488aff}ion-card-title[_ngcontent-%COMP%]{color:#f4f4f4!important}.inner-scroll[_ngcontent-%COMP%]   .scroll-y[_ngcontent-%COMP%]   .overscroll[_ngcontent-%COMP%]{padding:0}']}),M),E=n("hVaU"),D=n("IZvt"),V=n("4pxM"),W=[{path:"",component:q}],j=((x=function t(){_classCallCheck(this,t)}).\u0275mod=f.Ob({type:x}),x.\u0275inj=f.Nb({factory:function(t){return new(t||x)},imports:[[a.c,o.i,i.bb,E.a,D.a,V.a,o.s,r.k.forChild(W)]]}),x)}}]);