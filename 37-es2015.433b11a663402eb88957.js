(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"01KP":function(e,t,i){"use strict";i.r(t),i.d(t,"NoticesPageModule",(function(){return j}));var n=i("ofXK"),o=i("3Pt+"),c=i("tyNb"),a=i("TEn/"),s=i("X/JO"),r=i("+DAS"),l=i("ybIa"),d=i("YKLQ"),b=i("i2Ty"),h=i("rIxz"),g=i("Yej2"),p=i("h3ty"),u=i("fXoL"),m=i("0IaG"),f=i("7EHt"),y=i("YCbS"),v=i("/per"),w=i("sYmb");const x=["yocameraelement"];function k(e,t){if(1&e){const e=u.Xb();u.Wb(0,"ion-buttons",5),u.Wb(1,"ion-button",6),u.ec("click",(function(){return u.Cc(e),u.ic().navigate("addnotice",{})})),u.Rb(2,"ion-icon",7),u.Vb(),u.Vb()}}function V(e,t){if(1&e&&u.Rb(0,"img",26),2&e){const e=u.ic().$implicit;u.rc("src",e.image,u.Ec)}}function W(e,t){if(1&e){const e=u.Xb();u.Wb(0,"div",29),u.Wb(1,"div"),u.Wb(2,"img",30),u.ec("click",(function(){u.Cc(e);const i=t.$implicit;return u.ic(3).ygen.openimage(i.src,"need to be upload")})),u.Vb(),u.Vb(),u.Wb(3,"span"),u.Wb(4,"ion-button",31),u.ec("click",(function(){u.Cc(e);const i=t.$implicit;return u.ic(3).deletephoto(i)})),u.Rb(5,"ion-icon",32),u.Vb(),u.Wb(6,"ion-button",33),u.ec("click",(function(){u.Cc(e);const i=t.$implicit;return u.ic(3).savePhoto(i)})),u.Rb(7,"ion-icon",34),u.Vb(),u.Vb(),u.Vb()}if(2&e){const e=t.$implicit;u.Db(2),u.rc("src",e.src,u.Ec)}}function C(e,t){if(1&e){const e=u.Xb();u.Wb(0,"ion-button",31),u.ec("click",(function(){u.Cc(e);const t=u.ic().$implicit,i=u.ic(2).$implicit;return u.ic().deletesaved(t,i.$key)})),u.Rb(1,"ion-icon",32),u.Vb()}}function O(e,t){if(1&e){const e=u.Xb();u.Wb(0,"div",29),u.Wb(1,"div"),u.Wb(2,"img",30),u.ec("click",(function(){u.Cc(e);const i=t.$implicit;return u.ic(3).ygen.openimage(i.value.photo,"")})),u.Vb(),u.Vb(),u.Wb(3,"span"),u.Kc(4,C,2,0,"ion-button",35),u.Vb(),u.Vb()}if(2&e){const e=t.$implicit,i=u.ic(3);u.Db(2),u.sc("src",e.value.photo,u.Ec),u.Db(2),u.rc("ngIf",i.ygen.canI(e.createdBy,"notice"))}}function M(e,t){if(1&e&&(u.Wb(0,"div",27),u.Kc(1,W,8,1,"div",28),u.Kc(2,O,5,2,"div",28),u.jc(3,"keyvalue"),u.Vb()),2&e){const e=u.ic().$implicit,t=u.ic();u.Db(1),u.rc("ngForOf",t.getstrip(e.$key,t.mystrip)),u.Db(1),u.rc("ngForOf",u.kc(3,2,e.images))}}function D(e,t){1&e&&(u.Wb(0,"div"),u.Mc(1),u.jc(2,"translate"),u.Vb()),2&e&&(u.Db(1),u.Oc(" ",u.kc(2,1,"No Addtional Photos, click photos icon to add it"),". "))}function $(e,t){if(1&e){const e=u.Xb();u.Wb(0,"div",17),u.Wb(1,"app-appicon",18),u.ec("actionEvent",(function(){u.Cc(e);const t=u.ic().$implicit;return u.ic().delete(t)})),u.Vb(),u.Vb()}2&e&&(u.Db(1),u.rc("color","accent")("icon","delete")("icontext","Delete")("isiconwithtext",!0))}function P(e,t){if(1&e){const e=u.Xb();u.Wb(0,"div",17),u.Wb(1,"app-yocamera",36,37),u.ec("imagetobeuploaded",(function(t){u.Cc(e);const i=u.ic().$implicit;return u.ic().showpreview(t,i.$key)})),u.Vb(),u.Vb()}if(2&e){const e=u.ic().$implicit;u.Db(1),u.rc("whatkey",e.$key)}}function I(e,t){if(1&e){const e=u.Xb();u.Wb(0,"ion-card"),u.Kc(1,V,1,1,"img",8),u.Wb(2,"div",9),u.Kc(3,M,4,4,"div",10),u.Vb(),u.Kc(4,D,3,3,"ng-template",null,11,u.Lc),u.Wb(6,"ion-item",12),u.ec("click",(function(){u.Cc(e);const i=t.$implicit;return u.ic().navigate("addnotice",{key:i.$key})})),u.Wb(7,"ion-label",13),u.Mc(8),u.Wb(9,"p"),u.Mc(10),u.jc(11,"date"),u.Vb(),u.Vb(),u.Vb(),u.Wb(12,"ion-item"),u.Wb(13,"mat-expansion-panel",14),u.Wb(14,"mat-expansion-panel-header"),u.Wb(15,"mat-panel-title"),u.Mc(16," Actions "),u.Vb(),u.Vb(),u.Wb(17,"div",15),u.Kc(18,$,2,4,"div",16),u.Kc(19,P,3,1,"div",16),u.Wb(20,"div",17),u.Wb(21,"app-appicon",18),u.ec("actionEvent",(function(){return u.Cc(e),u.ic().ygen.shareMessage("dada","","")})),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Wb(22,"ion-card-content"),u.Mc(23),u.Vb(),u.Wb(24,"ion-item"),u.Wb(25,"div",19),u.Wb(26,"div",20),u.Wb(27,"div",21),u.Mc(28,"Creator"),u.Vb(),u.Wb(29,"div",22),u.Mc(30),u.Vb(),u.Vb(),u.Wb(31,"div",23),u.Wb(32,"div",24),u.Rb(33,"app-callphone",25),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Vb()}if(2&e){const e=t.$implicit,i=u.ic();u.Db(1),u.rc("ngIf",e.imageuploaded),u.Db(2),u.rc("ngIf",i.getstrip(e.$key,i.mystrip).length>0||e.images),u.Db(5),u.Oc(" ",e.title,""),u.Db(2),u.Nc(u.lc(11,13,e.startdate,"MMM dd yyyy hh:mm a")),u.Db(8),u.rc("ngIf",i.ygen.canI("","notice")),u.Db(1),u.rc("ngIf",i.refreshme&&i.ygen.canI("","notice")),u.Db(2),u.rc("color","primary")("icon","share")("icontext","share")("isiconwithtext",!0),u.Db(2),u.Oc(" ",e.description," "),u.Db(7),u.Oc(" ",e.contactname," "),u.Db(3),u.rc("mobile",null==e?null:e.contactnumber)}}let _=(()=>{class e{constructor(e,t,i,n,o,c,a,s,r){this.ycamera=e,this.ygen=t,this.alertme=i,this.route=n,this.router=o,this.boardService=c,this.ysharedata=a,this.ydata=s,this.dialog=r,this.imagescapturedComp=new Map,this.screenrefresh=!0,this.mystrip=[],this.showre=!1,this.sourcere="",this.refreshme=!1,this.crudList=new l.a("/board/notices",s.getDatabase(),!0,this.ygen.getUid()),this.events=this.crudList.getList(),this.crudData=new l.a("/items",s.getDatabase(),!1,this.ygen.getUid()),this.settingItems=this.crudData.getData()}ngOnInit(){this.refreshCamera()}viewEntry(e){e.registration&&Object.keys(e.registration).map(t=>Object.assign(e.registration[t],{$key:t}))}navigate(e,t){this.ysharedata.setData("currentevent",t),this.router.navigate([e],{queryParams:t})}takeAcion(e){console.log("yeah",e)}doit(e,t){setTimeout(()=>{this.crudList.updateList(t?{$key:e.$key,active:!0,eventOver:!1}:{$key:e.$key,active:!1})},1e3)}closeEvent(e){this.screenrefresh=!1,this.alertme.question("Are You Sure?","Close Event","No").then(t=>{t.value&&setTimeout(()=>{this.crudList.updateList({$key:e.$key,active:!1,eventOver:!0})},1e3),this.screenrefresh=!0})}active(e){this.alertme.question("Are You Sure?","Activate Notice","No").then(t=>{t.value&&this.doit(e,!0)})}inactive(e){this.alertme.question("Are You Sure?","Disable Notice","No").then(t=>{t.value&&this.doit(e,!1)})}edit(e){this.alertme.question("Are You Sure?","Delete","No").then(t=>{t.value&&this.crudList.removefromList(e)})}delete(e){this.alertme.question("Are You Sure?","Delete","No").then(t=>{t.value&&setTimeout(()=>{this.crudList.removefromList(e)},1e3)})}showpreview(e,t){console.log("event",e),console.log("key",t),this.showre=!0,this.sourcere=e,this.mystrip.push(e)}getstrip(e,t){let i=t.filter(t=>t.whatfor===e);return console.log(i.length),i}deletfromStrip(e){this.mystrip=this.mystrip.filter(t=>t.whatfor!=e)}deletephoto(e){this.deletfromStrip(e.whatfor),this.refreshCamera()}refreshCamera(){this.refreshme=!1,setTimeout(()=>{this.refreshme=!0},100)}savePhoto(e){this.refreshCamera(),this.ygen.ismobile()?(this.alertme.infodata("Uploading and saving photo.."),this.yocam.saveMobileImage(e.src).then(t=>{console.log("what we have recieved image 1 "+t),console.log("what we have recieved image 1 "+t);const i=JSON.parse(t.response);console.log("we got the url...."+t.response),console.log("we got the url...."+i.secure_url),this.addImages(e.whatfor,{photo:i.secure_url}),this.deletephoto(e),this.alertme.successdata("Saved...")})):this.yocam.saveImage(e.files).then(t=>{console.log("what we have recieved image 2 "+t.secure_url),this.addImages(e.whatfor,{photo:t.secure_url}),this.deletephoto(e)})}addImages(e,t){new l.a("/board/notices/"+e+"/images",this.ydata.getDatabase(),!0,this.ygen.getUid()).addtolist(t)}deletesaved(e,t){this.alertme.question("Are You Sure?","Delete","No").then(i=>{i.value&&new l.a("/board/notices/"+t+"/images",this.ydata.getDatabase(),!0,this.ygen.getUid()).removefromList({$key:e.key})})}}return e.\u0275fac=function(t){return new(t||e)(u.Qb(g.a),u.Qb(h.a),u.Qb(b.a),u.Qb(c.a),u.Qb(c.j),u.Qb(s.a),u.Qb(d.a),u.Qb(r.a),u.Qb(m.b))},e.\u0275cmp=u.Kb({type:e,selectors:[["app-notices"]],viewQuery:function(e,t){var i;1&e&&(u.Sc(x,!0),u.Sc(x,!0)),2&e&&(u.yc(i=u.fc())&&(t.yocam=i.first),u.yc(i=u.fc())&&(t.yocamViewChildren=i))},decls:10,vars:5,consts:[[3,"color"],["slot","start"],["slot","end","color","secondary",4,"ngIf"],["padding",""],[4,"ngFor","ngForOf"],["slot","end","color","secondary"],[3,"click"],["slot","icon-only","name","add"],["class","imageshow",3,"src",4,"ngIf"],[1,"roll"],["id","scrolly",4,"ngIf"],["nophotos",""],["button","",3,"click"],[1,"ion-text-wrap"],[2,"width","100%"],[1,"container"],["class","item",4,"ngIf"],[1,"item"],[3,"color","icon","icontext","isiconwithtext","actionEvent"],[1,"infocontainer"],[1,"item","atstart"],[1,"whatlable"],[1,"forlable"],[1,"item","atend"],[2,"float","right","padding","5px"],[3,"mobile"],[1,"imageshow",3,"src"],["id","scrolly"],["class","imgds",4,"ngFor","ngForOf"],[1,"imgds"],[1,"imgc",3,"src","click"],["color","danger","size","small",1,"delete",3,"click"],["slot","icon-only","name","trash"],["size","small",1,"save",3,"click"],["slot","icon-only","name","save"],["color","danger","size","small","class","delete",3,"click",4,"ngIf"],[3,"whatkey","imagetobeuploaded"],["yocameraelement",""]],template:function(e,t){1&e&&(u.Wb(0,"ion-header"),u.Wb(1,"ion-toolbar",0),u.Wb(2,"ion-buttons",1),u.Rb(3,"ion-back-button"),u.Vb(),u.Wb(4,"ion-title"),u.Mc(5,"Notices"),u.Vb(),u.Kc(6,k,3,0,"ion-buttons",2),u.Vb(),u.Vb(),u.Wb(7,"ion-content",3),u.Kc(8,I,34,16,"ion-card",4),u.jc(9,"async"),u.Vb()),2&e&&(u.Db(1),u.rc("color","warning"),u.Db(5),u.rc("ngIf",t.ygen.canI("","notice")),u.Db(2),u.rc("ngForOf",u.kc(9,3,t.events)))},directives:[a.y,a.fb,a.j,a.f,a.g,a.db,n.m,a.s,n.l,a.i,a.z,a.k,a.B,a.H,f.c,f.e,f.f,y.a,a.l,v.a,p.a],pipes:[n.b,n.e,n.g,w.c],styles:["table[_ngcontent-%COMP%]{width:100%}.example-icon[_ngcontent-%COMP%]{padding:0 14px}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.mat-dialog-container[_ngcontent-%COMP%]{padding:0}.dada[_ngcontent-%COMP%]{position:absolute;width:375px;height:594px;left:-161.02px;top:471.39px;background:#f41515;border-radius:56px;transform:rotate(-50.6deg)}.container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;width:100%}.item[_ngcontent-%COMP%]{flex-grow:1}.infocontainer[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;width:100%}.atstart[_ngcontent-%COMP%]{align-self:flex-start}.atend[_ngcontent-%COMP%]{align-self:flex-end}mat-expansion-panel[_ngcontent-%COMP%]{background:#eff7f6}.imageshow[_ngcontent-%COMP%]{max-height:300px;max-width:500px;height:auto;width:auto;margin:auto;padding-bottom:10px}.addphotos[_ngcontent-%COMP%]{padding:0}#scrolly[_ngcontent-%COMP%]{width:100%;height:120px;overflow:auto;overflow-y:hidden;margin:0 auto;white-space:nowrap;display:inline-flex}.imgc[_ngcontent-%COMP%]{height:100px;width:100px;margin:2px 1px;display:inline;border:1px solid #ddd;border-radius:4px;padding:5px}.roll[_ngcontent-%COMP%]{background-color:#000;padding:5px}.imgds[_ngcontent-%COMP%]{height:100px;display:inline}.imagearea[_ngcontent-%COMP%]{overflow-x:scroll;overflow-y:hidden;-webkit-overflow-scrolling:touch;display:-webkit-inline-box;border:#0f03f4;border-style:solid;border-width:2px}.delete[_ngcontent-%COMP%], .save[_ngcontent-%COMP%]{position:relative;top:-37px}.whatlable[_ngcontent-%COMP%]{font-size:12px;font-family:cursive}"]}),e})();var L=i("hVaU"),N=i("IZvt"),S=i("4pxM");const K=[{path:"",component:_}];let j=(()=>{class e{}return e.\u0275mod=u.Ob({type:e}),e.\u0275inj=u.Nb({factory:function(t){return new(t||e)},imports:[[n.c,o.i,a.gb,L.a,N.a,S.a,c.n.forChild(K)]]}),e})()}}]);