function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{LWQF:function(e,t,n){"use strict";n.r(t),n.d(t,"MyordersPageModule",(function(){return L}));var o=n("ofXK"),r=n("3Pt+"),a=n("tyNb"),c=n("TEn/"),i=n("rIxz"),s=n("+DAS"),l=n("gAVi"),b=n("YKLQ"),u=n("dMTE"),d=n("ybIa"),g=n("lJxs"),f=n("i2Ty"),p=n("0nTO"),y=n("G2i7"),h=n("fXoL"),m=n("YCbS"),v=n("/per"),O=n("sYmb");function k(e,t){if(1&e){var n=h.Xb();h.Wb(0,"ion-toolbar",0),h.Wb(1,"ion-searchbar",18),h.ec("ngModelChange",(function(e){return h.Cc(n),h.ic().queryText=e})),h.jc(2,"translate"),h.Vb(),h.Vb()}if(2&e){var o=h.ic();h.rc("color","secondary"),h.Db(1),h.sc("placeholder",h.kc(2,3,"Search Order")),h.rc("ngModel",o.queryText)}}function C(e,t){1&e&&h.Rb(0,"ion-progress-bar",19)}function M(e,t){1&e&&(h.Wb(0,"div",31),h.Wb(1,"ion-label",32),h.Mc(2,"PAID "),h.Vb(),h.Vb())}function W(e,t){1&e&&(h.Wb(0,"div",33),h.Wb(1,"ion-label",32),h.Mc(2,"COD "),h.Vb(),h.Vb())}function V(e,t){if(1&e){var n=h.Xb();h.Wb(0,"app-appicon",34),h.ec("actionEvent",(function(){h.Cc(n);var e=h.ic().$implicit;return h.ic(2).cancelOrder(e)})),h.Vb()}2&e&&h.rc("color","accent")("icon","cancel_schedule_send")("askquestion",!0)("icontext","Cancel Order")("isiconwithtext",!0)("askquestiontext","Are you sure, you want to cancel Order?")}function D(e,t){if(1&e&&(h.Wb(0,"div",35),h.Mc(1,"Call Support "),h.Rb(2,"app-callphone",36),h.Vb()),2&e){var n=h.ic(3);h.Db(2),h.rc("mobile",n.ygen.getSettings().oncallsupport)}}function x(e,t){if(1&e){var n=h.Xb();h.Wb(0,"ion-card"),h.Kc(1,M,3,0,"div",21),h.Kc(2,W,3,0,"div",22),h.Wb(3,"ion-card-header"),h.Wb(4,"ion-card-subtitle"),h.Wb(5,"div"),h.Mc(6),h.Vb(),h.Wb(7,"div"),h.Mc(8),h.Vb(),h.Vb(),h.Wb(9,"ion-card-title"),h.Wb(10,"ion-chip",23),h.ec("click",(function(){h.Cc(n);var e=t.$implicit;return h.ic(2).ygen.routeto("/order",{orderid:e.$key})})),h.Wb(11,"ion-label"),h.Mc(12),h.Vb(),h.Rb(13,"ion-icon",24),h.Vb(),h.Wb(14,"ion-chip",25),h.ec("click",(function(){h.Cc(n);var e=t.$implicit;return h.ic(2).ygen.routeto("/order",{orderid:e.$key})})),h.Wb(15,"ion-label"),h.Mc(16),h.Vb(),h.Vb(),h.Vb(),h.Vb(),h.Wb(17,"ion-card-content"),h.Wb(18,"table",26),h.Wb(19,"tbody"),h.Wb(20,"tr"),h.Wb(21,"td",27),h.Mc(22," By "),h.Vb(),h.Wb(23,"td",28),h.Mc(24),h.Vb(),h.Vb(),h.Wb(25,"tr"),h.Wb(26,"td",27),h.Mc(27," Items "),h.Vb(),h.Wb(28,"td",28),h.Mc(29),h.Vb(),h.Vb(),h.Wb(30,"tr"),h.Wb(31,"td",27),h.Mc(32," Address "),h.Vb(),h.Wb(33,"td",28),h.Mc(34),h.Vb(),h.Vb(),h.Vb(),h.Vb(),h.Vb(),h.Wb(35,"ion-item"),h.Kc(36,V,1,6,"app-appicon",29),h.Kc(37,D,3,1,"div",30),h.Vb(),h.Vb()}if(2&e){var o=t.$implicit,r=h.ic(2);h.Db(1),h.rc("ngIf","PNO"==o.paymentmethod&&"Success"==(null==o.paymentResponse?null:o.paymentResponse.order_status)),h.Db(1),h.rc("ngIf","COD"==o.paymentmethod),h.Db(4),h.Oc("On ",r.ygen.formatTimestampToDate(o.odt),""),h.Db(2),h.Nc(r.ygen.sincewhen(o.odt)),h.Db(4),h.Nc(o.sendorderid),h.Db(4),h.Pc("",r.ygen.getcurrencysymbol()," ",o.amount,""),h.Db(8),h.Oc(" ",o.orderByName," "),h.Db(5),h.Oc(" ",r.getItemCount(o)," "),h.Db(5),h.Oc(" ",o.deliveryAddress," "),h.Db(2),h.rc("ngIf","NEW"==r.segment),h.Db(1),h.rc("ngIf",r.ygen.getSettings())}}function E(e,t){if(1&e&&(h.Wb(0,"div"),h.Kc(1,x,38,12,"ion-card",20),h.Mc(2),h.Vb()),2&e){var n=t.ngIf,o=h.ic();h.Db(1),h.rc("ngForOf",n),h.Db(1),h.Oc(" ",o.getTotal(n)," ")}}var P,S,j=((P=function(){function e(t,n,o,r,a,c,i,s,l,b){var u=this;_classCallCheck(this,e),this.modalCtrl=t,this.centerdb=n,this.router=o,this.yalert=r,this.ygen=a,this.ydataservice=c,this.ystorageservice=i,this.ypay=s,this.yds=l,this.ynoti=b,this.queryText="",this.segment="NEW",this.segmenttotal=new Map,this.total=0,this.centerdb.currenttenant.subscribe((function(e){e&&(u.orderlist=new d.a(y.a.getpath()+"/shop/orders",u.ydataservice.getDatabase(),!0,null),u.setSegmentTotal(),u.myinbox=u.getData(u.segment))}))}return _createClass(e,[{key:"ngOnInit",value:function(){console.log("yeah....ngoninit")}},{key:"ionViewWillEnter",value:function(){console.log("yeah....ion enter")}},{key:"deleteNotice",value:function(e){this.orderlist.removefromList(e)}},{key:"cancelOrder",value:function(e){this.takeAcion({value:"CANCELLED"},e)}},{key:"takeAcion",value:function(e,t){Object.assign(t,{ostatus:e.value}),this.orderlist.updateList(t),this.yalert.openSnackBar("Order Status changed for [".concat(t.sendorderid,"]"),"Ok"),this.ynoti.orderstatuschange("Order Status changed to [".concat(e.value,"] for [").concat(t.sendorderid,"]"),t)}},{key:"putinprocess",value:function(e){Object.assign(e,{ostatus:"INPROCESS"}),this.orderlist.updateList(e),this.ynoti.orderstatuschange("Order Status changed to [".concat(e.ostatus,"] for [").concat(e.sendorderid,"]"),e)}},{key:"completeorder",value:function(e){Object.assign(e,{ostatus:"COMPLETED"}),this.orderlist.updateList(e),this.ynoti.orderstatuschange("Congratulation you Order Status changed to [".concat(e.ostatus,"] for [").concat(e.sendorderid,"]"),e)}},{key:"getItemCount",value:function(e){return e.payload?e.payload.length:0}},{key:"getTitle",value:function(e){return e.read?"Mark Unread":"Mark Read"}},{key:"segmentChanged",value:function(e){console.log("segment",e),this.myinbox=this.getData(e.detail.value)}},{key:"getData",value:function(e){return this.getMyOrders(e)}},{key:"getOrders",value:function(e){return"NEW"===e?this.orderlist.getListRefer().snapshotChanges().pipe(Object(g.a)((function(t){return t.map((function(e){return Object.assign({$key:e.payload.key},e.payload.val())})).filter((function(t){return t.ostatus==e||!t.ostatus}))})),Object(g.a)((function(e){return e.reverse()}))):this.orderlist.getListRefer().snapshotChanges().pipe(Object(g.a)((function(t){return t.map((function(e){return Object.assign({$key:e.payload.key},e.payload.val())})).filter((function(t){return t.ostatus==e}))})),Object(g.a)((function(e){return e.reverse()})))}},{key:"getMyOrders",value:function(e){var t=this;return"NEW"===e?this.orderlist.getListRefer().snapshotChanges().pipe(Object(g.a)((function(n){return n.map((function(e){return Object.assign({$key:e.payload.key},e.payload.val())})).filter((function(n){return(n.ostatus==e||!n.ostatus)&&n.orderedBy==t.ygen.getUid()}))})),Object(g.a)((function(e){return e.reverse()}))):this.orderlist.getListRefer().snapshotChanges().pipe(Object(g.a)((function(n){return n.map((function(e){return Object.assign({$key:e.payload.key},e.payload.val())})).filter((function(n){return n.ostatus==e&&n.orderedBy==t.ygen.getUid()}))})),Object(g.a)((function(e){return e.reverse()})))}},{key:"getTotal",value:function(e){var t=this;this.total=0,e.forEach((function(e){t.total=t.total+e.amount}))}},{key:"setSegmentTotal",value:function(){var e=this;this.orderlist.getListRefer().snapshotChanges().pipe(Object(g.a)((function(t){return t.map((function(e){return Object.assign({$key:e.payload.key},e.payload.val())})).filter((function(t){return t.orderedBy==e.ygen.getUid()}))}))).subscribe((function(t){e.ygen.orderstatus.forEach((function(n){e.segmenttotal.set(n.value,t.filter((function(e){return e.ostatus==n.value})).length)}))}))}},{key:"navigate",value:function(e,t){console.log()}}]),e}()).\u0275fac=function(e){return new(e||P)(h.Qb(c.kb),h.Qb(y.a),h.Qb(a.j),h.Qb(f.a),h.Qb(i.a),h.Qb(s.a),h.Qb(l.a),h.Qb(u.a),h.Qb(b.a),h.Qb(p.a))},P.\u0275cmp=h.Kb({type:P,selectors:[["app-myorders"]],decls:39,vars:27,consts:[[3,"color"],["slot","start"],["slot","end","color","secondary"],[3,"click"],["slot","icon-only","name","search"],[3,"ngModel","ngModelChange","ionChange"],["value","NEW"],["color","danger"],["value","INPROCESS"],["color","dark"],["value","COMPLETED"],["color","success"],["value","CANCELLED"],["color","tertiary"],[3,"color",4,"ngIf"],["padding",""],["loading",""],[4,"ngIf","ngIfElse"],[3,"ngModel","placeholder","ngModelChange"],["type","indeterminate","reversed","true"],[4,"ngFor","ngForOf"],["class","paySection",4,"ngIf"],["class","codSection",4,"ngIf"],["color","secondary",3,"click"],["name","eye"],["color","primary",3,"click"],[1,"contentorder"],[1,"labelt"],[1,"valuet"],[3,"color","icon","askquestion","icontext","isiconwithtext","askquestiontext","actionEvent",4,"ngIf"],["style","padding:5px",4,"ngIf"],[1,"paySection"],["text-uppercase","",1,"sc-ion-label-md-h","sc-ion-label-md-s","hydrated"],[1,"codSection"],[3,"color","icon","askquestion","icontext","isiconwithtext","askquestiontext","actionEvent"],[2,"padding","5px"],[3,"mobile"]],template:function(e,t){if(1&e&&(h.Wb(0,"ion-header"),h.Wb(1,"ion-toolbar",0),h.Wb(2,"ion-buttons",1),h.Rb(3,"ion-back-button"),h.Vb(),h.Wb(4,"ion-title"),h.Mc(5),h.jc(6,"translate"),h.Vb(),h.Wb(7,"ion-buttons",2),h.Wb(8,"ion-button",3),h.ec("click",(function(){return t.ygen.routeto("searchorder",{})})),h.Rb(9,"ion-icon",4),h.Vb(),h.Vb(),h.Vb(),h.Vb(),h.Wb(10,"ion-header"),h.Wb(11,"ion-toolbar",0),h.Wb(12,"ion-segment",5),h.ec("ngModelChange",(function(e){return t.segment=e}))("ionChange",(function(e){return t.segmentChanged(e)})),h.Wb(13,"ion-segment-button",6),h.Mc(14),h.jc(15,"translate"),h.Wb(16,"ion-badge",7),h.Mc(17),h.Vb(),h.Vb(),h.Wb(18,"ion-segment-button",8),h.Mc(19),h.jc(20,"translate"),h.Wb(21,"ion-badge",9),h.Mc(22),h.Vb(),h.Vb(),h.Wb(23,"ion-segment-button",10),h.Mc(24),h.jc(25,"translate"),h.Wb(26,"ion-badge",11),h.Mc(27),h.Vb(),h.Vb(),h.Wb(28,"ion-segment-button",12),h.Mc(29),h.jc(30,"translate"),h.Wb(31,"ion-badge",13),h.Mc(32),h.Vb(),h.Vb(),h.Vb(),h.Vb(),h.Kc(33,k,3,5,"ion-toolbar",14),h.Vb(),h.Wb(34,"ion-content",15),h.Kc(35,C,1,0,"ng-template",null,16,h.Lc),h.Kc(37,E,3,2,"div",17),h.jc(38,"async"),h.Vb()),2&e){var n=h.zc(36);h.Db(1),h.rc("color","warning"),h.Db(4),h.Nc(h.kc(6,15,"My Order")),h.Db(6),h.rc("color","warning"),h.Db(1),h.rc("ngModel",t.segment),h.Db(2),h.Oc(" ",h.kc(15,17,"New"),""),h.Db(3),h.Nc(t.segmenttotal.get("NEW")),h.Db(2),h.Oc(" ",h.kc(20,19,"InProcess"),""),h.Db(3),h.Nc(t.segmenttotal.get("INPROCESS")),h.Db(2),h.Oc(" ",h.kc(25,21,"Completed"),""),h.Db(3),h.Nc(t.segmenttotal.get("COMPLETED")),h.Db(2),h.Oc(" ",h.kc(30,23,"Cancelled"),""),h.Db(3),h.Nc(t.segmenttotal.get("CANCELLED")),h.Db(1),h.rc("ngIf",0),h.Db(4),h.rc("ngIf",h.kc(38,25,t.myinbox))("ngIfElse",n)}},directives:[c.y,c.fb,c.j,c.f,c.g,c.db,c.i,c.z,c.R,c.rb,r.o,r.r,c.S,c.h,o.m,c.s,c.Q,c.sb,c.N,o.l,c.k,c.m,c.n,c.o,c.q,c.H,c.l,c.B,m.a,v.a],pipes:[O.c,o.b],styles:[".otitle[_ngcontent-%COMP%]{font-size:14px}.orderid[_ngcontent-%COMP%]{font-size:10px}.orderamt[_ngcontent-%COMP%]{font-size:18px}ion-card-header[_ngcontent-%COMP%]{padding-bottom:0}tbody[_ngcontent-%COMP%]{font-size:small}.labelt[_ngcontent-%COMP%]{font-weight:lighter}.valuet[_ngcontent-%COMP%]{padding-left:10px}ion-card-content[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.footerCartSection[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-right:10px;margin-left:10px}.paySection[_ngcontent-%COMP%]{background:#15bf15}.codSection[_ngcontent-%COMP%], .paySection[_ngcontent-%COMP%]{color:#fff;position:absolute;padding:6px 16px;border-radius:5px;font-weight:700;right:10px}.codSection[_ngcontent-%COMP%]{background:#de66cf}ion-card-title[_ngcontent-%COMP%]{padding-bottom:0;background:#f5fffa}"]}),P),I=n("hVaU"),N=n("IZvt"),w=n("4pxM"),_=[{path:"",component:j}],L=((S=function e(){_classCallCheck(this,e)}).\u0275mod=h.Ob({type:S}),S.\u0275inj=h.Nb({factory:function(e){return new(e||S)},imports:[[o.c,r.i,c.gb,I.a,N.a,w.a,a.n.forChild(_)]]}),S)}}]);