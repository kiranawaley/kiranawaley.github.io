function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{kuxn:function(e,t,i){"use strict";i.r(t),i.d(t,"EnterdetailPageModule",(function(){return S}));var a=i("ofXK"),n=i("3Pt+"),r=i("tyNb"),o=i("TEn/"),s=i("YKLQ"),c=i("X/JO"),l=i("D+2S"),u=i("wd/R"),h=i("mLjM"),d=i("DzsY"),m=i("rIxz"),f=i("PWOX"),b=i("fXoL"),g=i("bTqV"),v=i("NFeN"),p=i("Wp6s"),y=i("iEmi"),w=i("sYmb");function k(e,t){1&e&&(b.Wb(0,"ion-item"),b.Wb(1,"b"),b.Lc(2,"No Resident Found"),b.Vb(),b.Vb())}function C(e,t){if(1&e&&(b.Wb(0,"ion-item"),b.Wb(1,"b"),b.Lc(2),b.Vb(),b.Vb()),2&e){var i=b.ic(2);b.Db(2),b.Nc("[",i.tempItems.length,"] Residents found")}}function I(e,t){if(1&e){var i=b.Xb();b.Wb(0,"ion-item",10),b.Wb(1,"ion-label"),b.Lc(2),b.Vb(),b.Wb(3,"ion-checkbox",11),b.ec("ngModelChange",(function(e){return b.Cc(i),t.$implicit.checked=e}))("ionChange",(function(){b.Cc(i);var e=t.$implicit;return b.ic(2).putInSendRequest(e)})),b.Vb(),b.Vb()}if(2&e){var a=t.$implicit;b.Db(2),b.Oc("",a.userName," | ",a.unitName,""),b.Db(1),b.rc("ngModel",a.checked)}}function V(e,t){if(1&e&&(b.Wb(0,"div"),b.Jc(1,k,3,0,"ion-item",5),b.Jc(2,C,3,1,"ion-item",5),b.Jc(3,I,4,3,"ion-item",9),b.Vb()),2&e){var i=b.ic();b.Db(1),b.rc("ngIf",0==i.tempItems.length),b.Db(1),b.rc("ngIf",i.tempItems.length>0),b.Db(1),b.rc("ngForOf",i.tempItems)}}function O(e,t){if(1&e){var i=b.Xb();b.Wb(0,"yogagainv2-dyanamic-page",12),b.ec("actionEvent",(function(e){return b.Cc(i),b.ic().send(e)}))("cancelEvent",(function(e){return b.Cc(i),b.ic().cancel(e)})),b.Vb()}if(2&e){var a=b.ic();b.rc("isreadonly",a.isreadonly)("captchaOn",!1)("captchaName","registercaptcha")("whatform",a.whatcontrolsmap)("whatformgroup",a.inwhatformgroup)("whichbuttons",a.mybuttons)}}var P,D,W=((P=function(){function e(t,i,a,n,r,o){var s=this;_classCallCheck(this,e),this.ygen=t,this.authService=i,this.router=a,this.ydataservice=n,this.boardservice=r,this.yobuilderservice=o,this.worker={},this.filterdetail={},this.prof=new Array,this.items=new Array,this.toSendItems=new Array,this.searchQuery="",this.tempItems=new Array,this.mybuttons=new Map,this.filterProf=new Array,this.isreadonly=!1,console.log(n.getData("update")),console.log("comingin",n.getData("comingin")),this.worker=n.getData("comingin"),this.boardservice.getProfiles().valueChanges().forEach((function(e){if(s.prof=e,s.items=e,s.worker.history){var t=Object.keys(s.worker.history).map((function(e){return s.worker.history[e]}));t.length>=1&&(s.filterdetail.visitingto=t[t.length-1].visitingto,s.getItems({target:{value:t[t.length-1].visitingto}}),s.filterdetail.reason=t[t.length-1].reason,s.filterdetail.vehicalnum=t[t.length-1].vehicalnum,s.filterdetail.needParking=t[t.length-1].needParking)}})),this.workers=n.getData("update"),this.iscomingtanker=n.getData("tanker"),this.startObject()}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"changeReadOnly",value:function(){this.isreadonly=!this.isreadonly,this.startObject()}},{key:"getItems",value:function(e){this.toSendItems=new Array;var t=e.target.value;this.searchQuery=t,t&&""!=t.trim()&&(this.tempItems=this.items.filter("*all"==t?function(e){return!0}:function(e){return e.unitName?e.userid.toLowerCase().indexOf(t.toLowerCase())>-1||e.userName.toLowerCase().indexOf(t.toLowerCase())>-1||e.unitName.toLowerCase().indexOf(t.toLowerCase())>-1:e.userid.toLowerCase().indexOf(t.toLowerCase())>-1||e.userName.toLowerCase().indexOf(t.toLowerCase())>-1}))}},{key:"emptyordefault",value:function(e,t){return e||t}},{key:"getDomainObject",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[],i=0;return u(new Date).format("YYYY-MM-DD"),t[i]=new h.b(i,"reason","",h.a.select),t[i].placeholder="Reason",t[i].value={selected:this.emptyordefault(this.filterdetail.reason,"Resident"),options:["Visit","Delivery","Guest","Personal Work","Resident","Pickup","Tanker","Other"]},t[i].required=!0,t[i].readonly=e,t[++i]=new h.b(i,"visitingto","",h.a.text),t[i].placeholder="Visiting to",t[i].value=this.emptyordefault(this.filterdetail.visitingto,""),t[i].required=!0,t[i].readonly=e,t[++i]=new h.b(i,"contactname","",h.a.text),t[i].value=this.emptyordefault(this.worker.name,""),t[i].placeholder="Contact Name",t[i].required=!0,t[i].readonly=e,t[++i]=new h.b(i,"contactphone","",h.a.phone),t[i].value=this.emptyordefault(this.worker.mobile,""),t[i].placeholder="Contact Phone/Mobile",t[i].required=!0,t[i].readonly=e,t[++i]=new h.b(i,"needParking",!1,h.a.slidetoggle),t[i].placeholder="Need Visitor parking",t[i].required=!1,t[i].readonly=e,t[++i]=new h.b(i,"vehicalnum","",h.a.text),t[i].placeholder="Vehical Number",t[i].value=this.emptyordefault(this.filterdetail.vehicalnum,""),t[i].required=!1,t[i].readonly=e,t[++i]=new h.b(i,"notes","coming in",h.a.textarea),t[i].placeholder="Notes",t[i].required=!0,t[i].readonly=e,t[++i]=new h.b(i,"image","https://res.cloudinary.com/ideasyogi/image/upload/v1554035710/yashica_tzklwz.png",h.a.image),t[i].placeholder="Profile Picture",t[i].required=!1,t[i].showme=!1,t[++i]=new h.b(i,"visitingtoemail","",h.a.text),t[i].placeholder="visitingtoemail",t[i].value=this.emptyordefault(this.filterdetail.visitingtoemail,""),t[i].required=!1,t[i].showme=!1,t[i].readonly=e,t[++i]=new h.b(i,"visitingtonotificationid","",h.a.tkey),t[i].placeholder="visitingtonotificationid",t[i].value=this.emptyordefault(this.filterdetail.visitingtonotificationid,""),t[i].required=!1,t[i].showme=!1,t[i].readonly=e,t[++i]=new h.b(i,"visitingtokey","",h.a.text),t[i].placeholder="visitingtokey",t[i].value=this.emptyordefault(this.filterdetail.visitingtokey,""),t[i].required=!1,t[i].showme=!1,t[i].readonly=e,t[++i]=new h.b(i,"visitingtomob","",h.a.text),t[i].placeholder="visitingtomob",t[i].value=this.emptyordefault(this.filterdetail.visitingtomob,""),t[i].required=!1,t[i].showme=!1,t[i].readonly=e,t.forEach((function(t){t.readonly=e})),t}},{key:"startObject",value:function(){var e=this;this.clear=!1,this.whatcontrolsmap=new Map,this.inwhatformgroup=null;var t=new Map;this.getDomainObject(this.isreadonly).forEach((function(e){t.set(e.name,e)})),this.inwhatformgroup=this.yobuilderservice.createFormGroup(t),this.whatcontrolsmap=this.yobuilderservice.createMap(t,this.inwhatformgroup);var i=new l.a("Cancel","cancel","cancel_presentation","secondary",!1),a=new l.a("Add User","register","lock_open","primary",!1);this.mybuttons.set("Action2",a),this.mybuttons.set("Action1",i),setTimeout((function(){e.clear=!0}),50)}},{key:"putInSendRequest",value:function(e){if(e.checked&&(this.filterdetail.visitingto=this.processUserName(e.userName),this.filterdetail.visitingtoemail=e.email,this.filterdetail.visitingtonotificationid=e.notificationId,this.filterdetail.visitingtokey=e.$key,this.filterdetail.visitingtomob=e.mobile,this.getItems({target:{value:e.email}})),this.toSendItems.find((function(t){return t.email==e.email}))){if(!e.checked)for(var t=0;t<this.toSendItems.length;t++)if(e.email===this.toSendItems[t].email){this.toSendItems.splice(t,1);break}}else e.checked&&this.toSendItems.push(e);this.startObject()}},{key:"processUserName",value:function(e){if(e)return e.split("|")[0]}},{key:"send",value:function(e){var t=this;console.log("event",e);var i=+new Date;e.data.value.visitingtoemail&&(this.filterProf=this.prof.filter((function(t){return t.email.toLowerCase().indexOf(e.data.value.visitingtoemail.toLowerCase())>-1})));var a=this.boardservice.generateInHistory(this.worker.$key,{indate:i,outdate:"",reason:e.data.value.reason,visitingto:e.data.value.visitingto,vehicalnum:e.data.value.vehicalnum,notes:e.data.value.notes,needParking:e.data.value.needParking}),n={in:"true",mobile:e.data.value.contactphone,statusdate:i,historykey:a.getKey(),needParking:e.data.value.needParking,vehicalnum:e.data.value.vehicalnum};this.workers.update(this.worker.$key,n);var r=e.data.value.contactname+" visiting to you [ "+e.data.value.reason+" ]";if(this.filterProf[0])var o=this.authService.getUser(this.authService.getCurrentUserId()).valueChanges().subscribe((function(e){o&&o.unsubscribe(),t.boardservice.addtoInbox({date:+new Date,title:"Society Gate visit",message:r,sendby:e.userName,senderid:e.uid,senderemail:e.email,reciever:t.filterProf[0].$key?t.filterProf[0].$key:t.filterProf[0].key,candelete:!0,paymentmessage:!1,notificationmessage:!0,amount:0,read:!1,gatemessage:!0})}));this.ydataservice.getData("comingfrom")&&"outpage"==this.ydataservice.getData("comingfrom")?(this.ydataservice.clearData("comingfrom"),this.router.navigateByUrl("/inout/out")):this.router.navigateByUrl("/inout/in")}},{key:"cancel",value:function(e){console.log(e),this.ygen.goBack()}}]),e}()).\u0275fac=function(e){return new(e||P)(b.Qb(m.a),b.Qb(f.a),b.Qb(r.g),b.Qb(s.a),b.Qb(c.a),b.Qb(d.a))},P.\u0275cmp=b.Kb({type:P,selectors:[["app-enterdetail"]],decls:21,vars:5,consts:[["slot","start"],["royal","",3,"click"],["slot","icon-only","name","arrow-round-back"],[3,"placeholder","ionInput"],["padding",""],[4,"ngIf"],["mat-mini-fab","","aria-label","Example icon-button with a heart icon",1,"editable",3,"click"],[1,"box"],[3,"isreadonly","captchaOn","captchaName","whatform","whatformgroup","whichbuttons","actionEvent","cancelEvent",4,"ngIf"],["text-wrap","","class","searcheditems",4,"ngFor","ngForOf"],["text-wrap","",1,"searcheditems"],["color","dark","checked","false",3,"ngModel","ngModelChange","ionChange"],[3,"isreadonly","captchaOn","captchaName","whatform","whatformgroup","whichbuttons","actionEvent","cancelEvent"]],template:function(e,t){1&e&&(b.Wb(0,"ion-header"),b.Wb(1,"ion-toolbar"),b.Wb(2,"ion-buttons",0),b.Wb(3,"button",1),b.ec("click",(function(){return t.ygen.goBack()})),b.Rb(4,"ion-icon",2),b.Vb(),b.Vb(),b.Wb(5,"ion-title"),b.Lc(6,"Gate Pass"),b.Vb(),b.Vb(),b.Wb(7,"ion-toolbar"),b.Wb(8,"ion-searchbar",3),b.ec("ionInput",(function(e){return t.getItems(e)})),b.jc(9,"translate"),b.Vb(),b.Vb(),b.Vb(),b.Wb(10,"ion-content",4),b.Jc(11,V,4,3,"div",5),b.Wb(12,"ion-grid"),b.Wb(13,"ion-row"),b.Wb(14,"ion-col"),b.Wb(15,"button",6),b.ec("click",(function(){return t.changeReadOnly()})),b.Wb(16,"mat-icon"),b.Lc(17,"edit"),b.Vb(),b.Vb(),b.Wb(18,"mat-card"),b.Wb(19,"mat-card-content",7),b.Jc(20,O,1,6,"yogagainv2-dyanamic-page",8),b.Vb(),b.Vb(),b.Vb(),b.Vb(),b.Vb(),b.Vb()),2&e&&(b.Db(8),b.sc("placeholder",b.kc(9,3,"Search Society Resident")),b.Db(3),b.rc("ngIf",(null==t.searchQuery?null:t.searchQuery.length)>=1),b.Db(9),b.rc("ngIf",t.clear))},directives:[o.v,o.ab,o.j,o.w,o.Y,o.L,o.mb,o.s,a.m,o.u,o.K,o.r,g.a,v.a,p.a,p.d,a.l,o.y,o.C,o.p,o.c,n.n,n.q,y.a],pipes:[w.c],styles:[".editable[_ngcontent-%COMP%]{position:absolute;left:93%;z-index:1}"]}),P),x=i("hVaU"),N=i("IZvt"),L=i("4pxM"),q=[{path:"",component:W}],S=((D=function e(){_classCallCheck(this,e)}).\u0275mod=b.Ob({type:D}),D.\u0275inj=b.Nb({factory:function(e){return new(e||D)},imports:[[a.c,n.i,o.bb,x.a,N.a,L.a,r.k.forChild(q)]]}),D)}}]);