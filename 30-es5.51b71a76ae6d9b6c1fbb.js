function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{WTVw:function(e,t,i){"use strict";i.r(t),i.d(t,"EventsPageModule",(function(){return H}));var n=i("ofXK"),o=i("3Pt+"),a=i("tyNb"),c=i("TEn/"),r=i("X/JO"),s=i("+DAS"),l=i("ybIa"),d=i("0IaG"),u=i("YKLQ"),b=i("i2Ty"),p=i("rIxz"),f=i("Yej2"),g=i("h3ty"),h=i("MTSo"),v=i("fXoL"),m=i("7EHt"),y=i("YCbS"),w=i("/per"),x=i("sYmb"),k=i("/t3+"),C=i("bTqV"),M=i("NFeN"),O=["yocameraelement"];function V(e,t){if(1&e){var i=v.Xb();v.Wb(0,"ion-buttons",5),v.Wb(1,"ion-button",6),v.ec("click",(function(){return v.Cc(i),v.ic().navigate("addevent",{})})),v.Rb(2,"ion-icon",7),v.Vb(),v.Vb()}}function W(e,t){if(1&e&&v.Rb(0,"img",28),2&e){var i=v.ic().$implicit;v.rc("src",i.image,v.Ec)}}function _(e,t){if(1&e){var i=v.Xb();v.Wb(0,"div",31),v.Wb(1,"div"),v.Wb(2,"img",32),v.ec("click",(function(){v.Cc(i);var e=t.$implicit;return v.ic(3).ygen.openimage(e.src,"need to be upload")})),v.Vb(),v.Vb(),v.Wb(3,"span"),v.Wb(4,"ion-button",33),v.ec("click",(function(){v.Cc(i);var e=t.$implicit;return v.ic(3).deletephoto(e)})),v.Rb(5,"ion-icon",34),v.Vb(),v.Wb(6,"ion-button",35),v.ec("click",(function(){v.Cc(i);var e=t.$implicit;return v.ic(3).savePhoto(e)})),v.Rb(7,"ion-icon",36),v.Vb(),v.Vb(),v.Vb()}if(2&e){var n=t.$implicit;v.Db(2),v.rc("src",n.src,v.Ec)}}function P(e,t){if(1&e){var i=v.Xb();v.Wb(0,"span"),v.Wb(1,"ion-button",33),v.ec("click",(function(){v.Cc(i);var e=v.ic().$implicit,t=v.ic(2).$implicit;return v.ic().deletesaved(e,t.$key)})),v.Rb(2,"ion-icon",34),v.Vb(),v.Vb()}}function D(e,t){if(1&e){var i=v.Xb();v.Wb(0,"div",31),v.Wb(1,"div"),v.Wb(2,"img",32),v.ec("click",(function(){v.Cc(i);var e=t.$implicit;return v.ic(3).ygen.openimage(e.value.photo,"")})),v.Vb(),v.Vb(),v.Kc(3,P,3,0,"span",37),v.Vb()}if(2&e){var n=t.$implicit,o=v.ic(3);v.Db(2),v.sc("src",n.value.photo,v.Ec),v.Db(1),v.rc("ngIf",o.ygen.canI(n.createdBy,"event"))}}function I(e,t){if(1&e&&(v.Wb(0,"div",29),v.Kc(1,_,8,1,"div",30),v.Kc(2,D,4,2,"div",30),v.jc(3,"keyvalue"),v.Vb()),2&e){var i=v.ic().$implicit,n=v.ic();v.Db(1),v.rc("ngForOf",n.getstrip(i.$key,n.mystrip)),v.Db(1),v.rc("ngForOf",v.kc(3,2,i.images))}}function $(e,t){1&e&&(v.Wb(0,"div"),v.Mc(1),v.jc(2,"translate"),v.Vb()),2&e&&(v.Db(1),v.Oc(" ",v.kc(2,1,"No Addtional Photos, click photos icon to add it"),". "))}function E(e,t){if(1&e){var i=v.Xb();v.Wb(0,"app-appicon",18),v.ec("actionEvent",(function(){v.Cc(i);var e=v.ic(2).$implicit;return v.ic().inactive(e)})),v.Vb()}2&e&&v.rc("color","danger")("icon","visibility_off")("icontext","Disable")("isiconwithtext",!0)}function K(e,t){if(1&e&&(v.Wb(0,"div",17),v.Kc(1,E,1,4,"app-appicon",38),v.Vb()),2&e){var i=v.ic().$implicit;v.Db(1),v.rc("ngIf",i.active)}}function S(e,t){if(1&e){var i=v.Xb();v.Wb(0,"div",17),v.Wb(1,"app-appicon",18),v.ec("actionEvent",(function(){v.Cc(i);var e=v.ic().$implicit;return v.ic().active(e)})),v.Vb(),v.Vb()}2&e&&(v.Db(1),v.rc("color","warn")("icon","visibility")("icontext","Enable")("isiconwithtext",!0))}function j(e,t){if(1&e){var i=v.Xb();v.Wb(0,"app-appicon",40),v.ec("actionEvent",(function(){v.Cc(i);var e=v.ic(2).$implicit;return v.ic().closeEvent(e)})),v.Vb()}2&e&&v.rc("icon","done_all")("icontext","Close")("isiconwithtext",!0)}function L(e,t){if(1&e&&(v.Wb(0,"div",17),v.Kc(1,j,1,3,"app-appicon",39),v.Vb()),2&e){var i=v.ic().$implicit;v.Db(1),v.rc("ngIf",!i.eventOver)}}function N(e,t){if(1&e){var i=v.Xb();v.Wb(0,"div",17),v.Wb(1,"app-appicon",18),v.ec("actionEvent",(function(){v.Cc(i);var e=v.ic().$implicit;return v.ic().delete(e)})),v.Vb(),v.Vb()}2&e&&(v.Db(1),v.rc("color","accent")("icon","delete")("icontext","Delete")("isiconwithtext",!0))}function Q(e,t){if(1&e){var i=v.Xb();v.Wb(0,"div",17),v.Wb(1,"app-yocamera",41,42),v.ec("imagetobeuploaded",(function(e){v.Cc(i);var t=v.ic().$implicit;return v.ic().showpreview(e,t.$key)})),v.Vb(),v.Vb()}if(2&e){var n=v.ic().$implicit;v.Db(1),v.rc("whatkey",n.$key)}}function X(e,t){if(1&e){var i=v.Xb();v.Wb(0,"ion-button",27),v.ec("click",(function(){v.Cc(i);var e=v.ic().$implicit;return v.ic().viewEntry(e)})),v.Mc(1,"View Entries "),v.Vb()}}function R(e,t){if(1&e){var i=v.Xb();v.Wb(0,"ion-card"),v.Kc(1,W,1,1,"img",8),v.Wb(2,"div",9),v.Kc(3,I,4,4,"div",10),v.Vb(),v.Kc(4,$,3,3,"ng-template",null,11,v.Lc),v.Wb(6,"ion-item",12),v.ec("click",(function(){v.Cc(i);var e=t.$implicit;return v.ic().navigate("addevent",{key:e.$key})})),v.Wb(7,"ion-label",13),v.Mc(8),v.Vb(),v.Vb(),v.Wb(9,"ion-item"),v.Wb(10,"mat-expansion-panel",14),v.Wb(11,"mat-expansion-panel-header"),v.Wb(12,"mat-panel-title"),v.Mc(13),v.jc(14,"date"),v.Vb(),v.Vb(),v.Wb(15,"div",15),v.Kc(16,K,2,1,"div",16),v.Kc(17,S,2,4,"div",16),v.Kc(18,L,2,1,"div",16),v.Kc(19,N,2,4,"div",16),v.Kc(20,Q,3,1,"div",16),v.Wb(21,"div",17),v.Wb(22,"app-appicon",18),v.ec("actionEvent",(function(){return v.Cc(i),v.ic().ygen.shareMessage("dada","","")})),v.Vb(),v.Vb(),v.Vb(),v.Vb(),v.Vb(),v.Wb(23,"ion-card-content"),v.Mc(24),v.Vb(),v.Wb(25,"ion-item"),v.Wb(26,"div",19),v.Wb(27,"div",20),v.Wb(28,"div",21),v.Mc(29,"Organizer"),v.Vb(),v.Wb(30,"div",22),v.Mc(31),v.Vb(),v.Vb(),v.Wb(32,"div",23),v.Wb(33,"div",24),v.Rb(34,"app-callphone",25),v.Vb(),v.Vb(),v.Vb(),v.Vb(),v.Wb(35,"ion-item"),v.Kc(36,X,2,0,"ion-button",26),v.Wb(37,"ion-button",27),v.ec("click",(function(){v.Cc(i);var e=t.$implicit;return v.ic().navigate("registerforevent",{key:e.$key})})),v.Mc(38,"Register For Event "),v.Vb(),v.Vb(),v.Vb()}if(2&e){var n=t.$implicit,o=v.ic();v.Db(1),v.rc("ngIf",n.imageuploaded),v.Db(2),v.rc("ngIf",o.getstrip(n.$key,o.mystrip).length>0||n.images),v.Db(5),v.Oc(" ",n.title," "),v.Db(5),v.Oc(" ",v.lc(14,17,n.startdate,"MMM dd yyyy hh:mm a")," "),v.Db(3),v.rc("ngIf",o.ygen.canI("","event")),v.Db(1),v.rc("ngIf",!n.active&&o.ygen.canI("","event")),v.Db(1),v.rc("ngIf",o.ygen.canI("","event")),v.Db(1),v.rc("ngIf",o.ygen.canI("","event")),v.Db(1),v.rc("ngIf",o.ygen.canI("","event")),v.Db(2),v.rc("color","primary")("icon","share")("icontext","share")("isiconwithtext",!0),v.Db(2),v.Oc(" ",n.description," "),v.Db(7),v.Oc(" ",n.contactname," "),v.Db(3),v.rc("mobile",null==n?null:n.contactnumber),v.Db(2),v.rc("ngIf",n.registration)}}var T,A,Y,F=((A=function(){function e(t,i,n,o,a,c,r,s,d,u){_classCallCheck(this,e),this.photoUploadService=t,this.ycamera=i,this.ygen=n,this.alertme=o,this.route=a,this.router=c,this.boardService=r,this.ysharedata=s,this.ydata=d,this.dialog=u,this.imagescapturedComp=new Map,this.screenrefresh=!0,this.mystrip=[],this.showre=!1,this.sourcere="",this.refreshme=!1,this.crudList=new l.a("/board/events",d.getDatabase(),!0,n.getUid()),this.events=this.crudList.getList(),this.crudData=new l.a("/items",d.getDatabase(),!1,n.getUid()),this.settingItems=this.crudData.getData()}return _createClass(e,[{key:"ngOnInit",value:function(){this.refreshCamera()}},{key:"viewEntry",value:function(e){var t=[];e.registration&&(t=Object.keys(e.registration).map((function(t){return Object.assign(e.registration[t],{$key:t})}))),this.openDialog(t)}},{key:"navigate",value:function(e,t){this.ysharedata.setData("currentevent",t),this.router.navigate([e],{queryParams:t})}},{key:"openDialog",value:function(e){this.dialog.open(U,{panelClass:"myapp-no-padding-dialog",height:"90%",width:"90%",data:e}).afterClosed().subscribe((function(e){console.log("The dialog was closed",e)}))}},{key:"takeAcion",value:function(e){console.log("yeah",e)}},{key:"doit",value:function(e,t){var i=this;setTimeout((function(){i.crudList.updateList(t?{$key:e.$key,active:!0,eventOver:!1}:{$key:e.$key,active:!1})}),1e3)}},{key:"closeEvent",value:function(e){var t=this;this.screenrefresh=!1,this.alertme.question("Are You Sure?","Close Event","No").then((function(i){i.value&&setTimeout((function(){t.crudList.updateList({$key:e.$key,active:!1,eventOver:!0})}),1e3),t.screenrefresh=!0}))}},{key:"active",value:function(e){var t=this;this.alertme.question("Are You Sure?","Activate Event","No").then((function(i){i.value&&t.doit(e,!0)}))}},{key:"inactive",value:function(e){var t=this;this.alertme.question("Are You Sure?","Disable Event","No").then((function(i){i.value&&t.doit(e,!1)}))}},{key:"edit",value:function(e){var t=this;this.alertme.question("Are You Sure?","Delete","No").then((function(i){i.value&&t.crudList.removefromList(e)}))}},{key:"delete",value:function(e){var t=this;this.alertme.question("Are You Sure?","Delete","No").then((function(i){i.value&&setTimeout((function(){t.crudList.removefromList(e)}),1e3)}))}},{key:"showpreview",value:function(e,t){this.showre=!0,this.sourcere=e,this.mystrip.push(e)}},{key:"showstrip",value:function(e){return this.mystrip.some((function(t){return t.whatfor===e}))}},{key:"getstrip",value:function(e,t){var i=t.filter((function(t){return t.whatfor===e}));return console.log(i.length),i}},{key:"deletfromStrip",value:function(e){this.mystrip=this.mystrip.filter((function(t){return t.filename!=e}))}},{key:"deletephoto",value:function(e){this.deletfromStrip(e.filename),this.refreshCamera()}},{key:"refreshCamera",value:function(){var e=this;this.refreshme=!1,setTimeout((function(){e.refreshme=!0}),100)}},{key:"saveImage",value:function(e){return this.photoUploadService.uploadImage(e)}},{key:"saveMobileImage",value:function(e){return this.photoUploadService.uploadAPicture(e)}},{key:"savePhoto",value:function(e){var t=this;this.refreshCamera(),this.ygen.ismobile()?(this.alertme.infodata("Uploading and saving photo.."),this.saveMobileImage(e.src).then((function(i){console.log("what we have recieved image 1 "+i),console.log("what we have recieved image 1 "+i);var n=JSON.parse(i.response);console.log("we got the url...."+i.response),console.log("we got the url...."+n.secure_url),t.addImages(e.whatfor,{photo:n.secure_url}),t.deletephoto(e),t.alertme.successdata("Saved...")}))):this.saveImage(e.files).then((function(i){console.log("what we have recieved image 2 "+i.secure_url),t.addImages(e.whatfor,{photo:i.secure_url}),t.deletephoto(e)}))}},{key:"addImages",value:function(e,t){new l.a("/board/events/"+e+"/images",this.ydata.getDatabase(),!0,this.ygen.getUid()).addtolist(t)}},{key:"deletesaved",value:function(e,t){var i=this;this.alertme.question("Are You Sure?","Delete","No").then((function(n){n.value&&setTimeout((function(){new l.a("/board/events/"+t+"/images",i.ydata.getDatabase(),!0,i.ygen.getUid()).removefromList({$key:e.key})}),1e3)}))}}]),e}()).\u0275fac=function(e){return new(e||A)(v.Qb(h.a),v.Qb(f.a),v.Qb(p.a),v.Qb(b.a),v.Qb(a.a),v.Qb(a.j),v.Qb(r.a),v.Qb(u.a),v.Qb(s.a),v.Qb(d.b))},A.\u0275cmp=v.Kb({type:A,selectors:[["app-events"]],viewQuery:function(e,t){var i;1&e&&(v.Sc(O,!0),v.Sc(O,!0)),2&e&&(v.yc(i=v.fc())&&(t.yocam=i.first),v.yc(i=v.fc())&&(t.yocamViewChildren=i))},decls:10,vars:5,consts:[[3,"color"],["slot","start"],["slot","end","color","secondary",4,"ngIf"],["padding",""],[4,"ngFor","ngForOf"],["slot","end","color","secondary"],[3,"click"],["slot","icon-only","name","add"],["class","imageshow",3,"src",4,"ngIf"],[1,"roll"],["id","scrolly",4,"ngIf"],["nophotos",""],["button","",3,"click"],[1,"ion-text-wrap"],[2,"width","100%"],[1,"container"],["class","item",4,"ngIf"],[1,"item"],[3,"color","icon","icontext","isiconwithtext","actionEvent"],[1,"infocontainer"],[1,"item","atstart"],[1,"whatlable"],[1,"forlable"],[1,"item","atend"],[2,"float","right","padding","5px"],[3,"mobile"],["fill","outline","slot","end",3,"click",4,"ngIf"],["fill","outline","slot","end",3,"click"],[1,"imageshow",3,"src"],["id","scrolly"],["class","imgds",4,"ngFor","ngForOf"],[1,"imgds"],[1,"imgc",3,"src","click"],["color","danger","size","small",1,"delete",3,"click"],["slot","icon-only","name","trash"],["size","small",1,"save",3,"click"],["slot","icon-only","name","save"],[4,"ngIf"],[3,"color","icon","icontext","isiconwithtext","actionEvent",4,"ngIf"],[3,"icon","icontext","isiconwithtext","actionEvent",4,"ngIf"],[3,"icon","icontext","isiconwithtext","actionEvent"],[3,"whatkey","imagetobeuploaded"],["yocameraelement",""]],template:function(e,t){1&e&&(v.Wb(0,"ion-header"),v.Wb(1,"ion-toolbar",0),v.Wb(2,"ion-buttons",1),v.Rb(3,"ion-back-button"),v.Vb(),v.Wb(4,"ion-title"),v.Mc(5,"Events"),v.Vb(),v.Kc(6,V,3,0,"ion-buttons",2),v.Vb(),v.Vb(),v.Wb(7,"ion-content",3),v.Kc(8,R,39,20,"ion-card",4),v.jc(9,"async"),v.Vb()),2&e&&(v.Db(1),v.rc("color","warning"),v.Db(5),v.rc("ngIf",t.ygen.canI("","event")),v.Db(2),v.rc("ngForOf",v.kc(9,3,t.events)))},directives:[c.y,c.fb,c.j,c.f,c.g,c.db,n.m,c.s,n.l,c.i,c.z,c.k,c.B,c.H,m.c,m.e,m.f,y.a,c.l,w.a,g.a],pipes:[n.b,n.e,n.g,x.c],styles:["table[_ngcontent-%COMP%]{width:100%}.example-icon[_ngcontent-%COMP%]{padding:0 14px}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.mat-dialog-container[_ngcontent-%COMP%]{padding:0}.dada[_ngcontent-%COMP%]{position:absolute;width:375px;height:594px;left:-161.02px;top:471.39px;background:#f41515;border-radius:56px;transform:rotate(-50.6deg)}.container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;width:100%}.item[_ngcontent-%COMP%]{flex-grow:1}.infocontainer[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;width:100%}.atstart[_ngcontent-%COMP%]{align-self:flex-start}.atend[_ngcontent-%COMP%]{align-self:flex-end}mat-expansion-panel[_ngcontent-%COMP%]{background:#eff7f6}.imageshow[_ngcontent-%COMP%]{max-height:300px;max-width:500px;height:auto;width:auto;margin:auto;padding-bottom:10px}.addphotos[_ngcontent-%COMP%]{padding:0}#scrolly[_ngcontent-%COMP%]{width:100%;height:120px;overflow:auto;overflow-y:hidden;margin:0 auto;white-space:nowrap;display:inline-flex}.imgc[_ngcontent-%COMP%]{height:100px;width:100px;margin:2px 1px;display:inline;border:1px solid #ddd;border-radius:4px;padding:5px}.roll[_ngcontent-%COMP%]{background-color:#000;padding:5px}.imgds[_ngcontent-%COMP%]{height:100px;display:inline}.imagearea[_ngcontent-%COMP%]{overflow-x:scroll;overflow-y:hidden;-webkit-overflow-scrolling:touch;display:-webkit-inline-box;border:#0f03f4;border-style:solid;border-width:2px}.delete[_ngcontent-%COMP%], .save[_ngcontent-%COMP%]{position:relative;top:-37px}.whatlable[_ngcontent-%COMP%]{font-size:12px;font-family:cursive}"]}),A),U=((T=function(){function e(t,i){_classCallCheck(this,e),this.dialogRef=t,this.data=i,this.displayedColumns=["id","name","mobile"],console.log("data ==>",i),this.dataSource=i}return _createClass(e,[{key:"onNoClick",value:function(){this.dialogRef.close()}},{key:"gotoExternal",value:function(e){window.location.href=e}}]),e}()).\u0275fac=function(e){return new(e||T)(v.Qb(d.h),v.Qb(d.a))},T.\u0275cmp=v.Kb({type:T,selectors:[["dialog-overview-example-dialog"]],decls:8,vars:0,consts:[["color","primary"],[1,"example-spacer"],["mat-mini-fab","","aria-label","Example icon-button with a heart icon",3,"click"]],template:function(e,t){1&e&&(v.Wb(0,"mat-toolbar",0),v.Wb(1,"mat-toolbar-row"),v.Wb(2,"span"),v.Mc(3,"Registration"),v.Vb(),v.Rb(4,"span",1),v.Wb(5,"button",2),v.ec("click",(function(){return t.onNoClick()})),v.Wb(6,"mat-icon"),v.Mc(7,"close"),v.Vb(),v.Vb(),v.Vb(),v.Vb())},directives:[k.a,k.c,C.a,M.a],styles:["table[_ngcontent-%COMP%]{width:100%}.example-icon[_ngcontent-%COMP%]{padding:0 14px}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.mat-dialog-container[_ngcontent-%COMP%]{padding:0}.dada[_ngcontent-%COMP%]{position:absolute;width:375px;height:594px;left:-161.02px;top:471.39px;background:#f41515;border-radius:56px;transform:rotate(-50.6deg)}.container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;width:100%}.item[_ngcontent-%COMP%]{flex-grow:1}.infocontainer[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;width:100%}.atstart[_ngcontent-%COMP%]{align-self:flex-start}.atend[_ngcontent-%COMP%]{align-self:flex-end}mat-expansion-panel[_ngcontent-%COMP%]{background:#eff7f6}.imageshow[_ngcontent-%COMP%]{max-height:300px;max-width:500px;height:auto;width:auto;margin:auto;padding-bottom:10px}.addphotos[_ngcontent-%COMP%]{padding:0}#scrolly[_ngcontent-%COMP%]{width:100%;height:120px;overflow:auto;overflow-y:hidden;margin:0 auto;white-space:nowrap;display:inline-flex}.imgc[_ngcontent-%COMP%]{height:100px;width:100px;margin:2px 1px;display:inline;border:1px solid #ddd;border-radius:4px;padding:5px}.roll[_ngcontent-%COMP%]{background-color:#000;padding:5px}.imgds[_ngcontent-%COMP%]{height:100px;display:inline}.imagearea[_ngcontent-%COMP%]{overflow-x:scroll;overflow-y:hidden;-webkit-overflow-scrolling:touch;display:-webkit-inline-box;border:#0f03f4;border-style:solid;border-width:2px}.delete[_ngcontent-%COMP%], .save[_ngcontent-%COMP%]{position:relative;top:-37px}.whatlable[_ngcontent-%COMP%]{font-size:12px;font-family:cursive}"]}),T),q=i("hVaU"),z=i("IZvt"),J=i("4pxM"),B=[{path:"",component:F}],H=((Y=function e(){_classCallCheck(this,e)}).\u0275mod=v.Ob({type:Y}),Y.\u0275inj=v.Nb({factory:function(e){return new(e||Y)},imports:[[n.c,o.i,c.gb,q.a,z.a,J.a,a.n.forChild(B)]]}),Y)}}]);