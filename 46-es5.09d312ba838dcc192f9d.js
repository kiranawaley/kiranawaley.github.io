function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{F4UR:function(e,t,n){"use strict";n.r(t),n.d(t,"LoginModule",(function(){return Q}));var o=n("t34c"),i=n("ofXK"),r=n("3Pt+"),a=n("tyNb"),c=n("TEn/"),s=n("mrSG"),l=n("sH8K"),u=n("DzsY"),d=n("D+2S"),b=n("0nTO"),f=n("DVUX"),h=n("i2Ty"),p=n("PWOX"),g=n("gAVi"),m=n("rIxz"),v=n("Oipj"),y=n("iqUP"),w=n("ar4q"),k=n("fXoL"),P=n("Wp6s"),O=n("iEmi"),V=n("kmnG"),x=n("qFsG"),C=n("sYmb");function M(e,t){1&e&&(k.Wb(0,"mat-error"),k.Lc(1," Invalid Phone Number "),k.Vb())}function T(e,t){if(1&e){var n=k.Xb();k.Wb(0,"ion-button",17),k.ec("click",(function(){k.Cc(n),k.ic();var e=k.zc(5);return k.ic(2).askValidatePhone(e)})),k.Lc(1," Request OTP "),k.Vb()}if(2&e){var o=k.ic(3);k.rc("disabled",o.addressForm.controls.mobile.invalid)}}function W(e,t){if(1&e&&(k.Wb(0,"form",12),k.Wb(1,"mat-form-field",13),k.Wb(2,"mat-label"),k.Lc(3,"Your mobile"),k.Vb(),k.Rb(4,"input",14,15),k.Jc(6,M,2,0,"mat-error",2),k.Vb(),k.Jc(7,T,2,1,"ion-button",16),k.Rb(8,"div"),k.Vb()),2&e){var n=k.ic(2);k.rc("formGroup",n.addressForm),k.Db(6),k.rc("ngIf",n.addressForm.controls.mobile.invalid),k.Db(1),k.rc("ngIf",!n.goingon),k.Db(1),k.Hb("spinner",n.goingon)}}function _(e,t){if(1&e){var n=k.Xb();k.Wb(0,"ion-button",23),k.ec("click",(function(){return k.Cc(n),k.ic(3).reAuthenticateOtp()})),k.Lc(1," Or Ask OTP Again "),k.Vb()}}function I(e,t){if(1&e){var n=k.Xb();k.Wb(0,"div"),k.Wb(1,"mat-form-field",18),k.Wb(2,"mat-label"),k.Lc(3,"Enter OTP"),k.Vb(),k.Wb(4,"input",19,20),k.ec("ngModelChange",(function(e){return k.Cc(n),k.ic(2).verificationcode=e})),k.Vb(),k.Vb(),k.Wb(6,"ion-button",21),k.ec("click",(function(){return k.Cc(n),k.ic(2).verifySMS()})),k.Lc(7," Verify OTP "),k.Vb(),k.Jc(8,_,2,0,"ion-button",22),k.Vb()}if(2&e){var o=k.ic(2);k.Db(4),k.rc("ngModel",o.verificationcode),k.Db(4),k.rc("ngIf",o.redootp)}}function L(e,t){if(1&e&&(k.Wb(0,"mat-card"),k.Wb(1,"mat-card-header"),k.Wb(2,"mat-card-title"),k.Lc(3),k.jc(4,"translate"),k.Vb(),k.Vb(),k.Wb(5,"mat-card-content",3),k.Jc(6,W,9,5,"form",9),k.Jc(7,I,9,2,"div",2),k.Vb(),k.Wb(8,"div",10),k.Rb(9,"div",11),k.Vb(),k.Vb()),2&e){var n=k.ic();k.Db(3),k.Nc(" ",k.kc(4,3,"Login using phone"),""),k.Db(3),k.rc("ngIf",!n.windowref.confirmationResult),k.Db(1),k.rc("ngIf",n.windowref.confirmationResult)}}function R(e,t){1&e&&(k.Wb(0,"ion-button",24),k.Lc(1),k.jc(2,"translate"),k.Vb()),2&e&&(k.Db(1),k.Nc(" ",k.kc(2,1,"Signup")," "))}var S,E,D=((S=function(){function e(t,n,o,i,a,c,s,l,u,d,b){_classCallCheck(this,e),this.fireauth=t,this.toastCtrl=n,this.ygen=o,this.alertme=i,this.yovalservice=a,this.yobuilderservice=c,this.ynotification=s,this.toasterService=l,this.yauth=u,this.ystorageservice=d,this.router=b,this.whatcontrolsmap=new Map,this.mybuttons=new Map,this.loadingindicator=!1,this.retry=!1,this.gototp=!1,this.redootp=!1,this.goingon=!1,this.askforotp=!1,this.OTP="",this.showOTPInput=!0,this.OTPmessage="An OTP is sent to your number. You should receive it in 15 s",this.startObject(),this.addressForm=new r.g({mobile:new r.d("",[r.u.required,r.u.minLength(2),r.u.maxLength(30),function(e){if(e.value){var t=/^\+?\d[\d -]{8,12}\d$/;if(console.log(t.test(e.value)),!t.test(e.value))return{"Invalid Phone":{value:e.value}};var n=j.parse(e.value,"IN");if(!j.isValidNumber(n))return{"Invalid Phone":{value:e.value}}}return null}])})}return _createClass(e,[{key:"ngOnInit",value:function(){this.windowref=this.ygen.nativeWindow}},{key:"askValidatePhone",value:function(e){this.goingon=!0;var t=this;this.windowref.RecaptchaVerifier&&(this.windowref.RecaptchaVerifier.clear(),document.getElementById("recaptcha-container")?(document.getElementById("captchwrapper").innerHTML="",document.getElementById("captchwrapper").innerHTML='<div id="recaptcha-container"></div>'):document.getElementById("captchwrapper").innerHTML='<div id="recaptcha-container"></div>'),this.windowref.RecaptchaVerifier=new y.auth.RecaptchaVerifier("recaptcha-container",{size:"invisible",callback:function(n){t.askforotp=!0,t.validatePhone(e)},"expired-callback":function(){t.toasterService.pop("warn","Capcha Expired, Please validate captcha ","Captcha expired."),t.windowref.confirmationResult=null}}),this.windowref.RecaptchaVerifier.render(),this.windowref.RecaptchaVerifier.verify()}},{key:"validatePhone",value:function(e){this.gototp=!1;var t=this.ygen.phoneNumberUtil.parse(e.value,"IN");if(this.ygen.isavalidphone(t)){var n=this.ygen.phoneE164(t);this.appVerifier=this.windowref.RecaptchaVerifier;var o=this;this.yauth.loginPhone({phonenumber:n,appverifier:this.appVerifier}).then((function(e){o.windowref.confirmationResult=e,o.gototp=!0,o.goingon=!1,o.toasterService.pop("success","OTP sent to you mobile number "+n,"OTP Success"),setTimeout((function(){o.redootp=!0}),25e3)})).catch((function(e){o.goingon=!1,o.toasterService.pop("error","Error OTP SMS not send","OTP Failure"),o.alertme.openSnackBar(e.message,"Ok"),console.log(e),o.windowref.confirmationResult=null}))}else this.toasterService.pop("error","Not a valid mobile number, please correct","Validation Failure"),this.windowref.confirmationResult=null,this.goingon=!1}},{key:"verifySMS",value:function(){var e=this,t=this;this.windowref.confirmationResult.confirm(this.verificationcode).then((function(t){console.log("yeah ",t),e.windowref.confirmationResult=null,e.goingon=!1})).catch((function(n){e.toasterService.pop("error",n.message,"Validation Failure"),t.redootp=!0,e.goingon=!1,console.log(n,"Incorrect code entered??")}))}},{key:"reAuthenticateOtp",value:function(){this.windowref.confirmationResult=null,this.gototp=!1,this.redootp=!1}},{key:"startObject",value:function(){var e=new Map;e.set("userid",this.yobuilderservice.createType("userid","Enter User Name",!0,!0,!0,"email",1,"","Your email address")),e.set("password",this.yobuilderservice.createType("password","Enter Password",!0,!0,!0,"password",2,"")),e.set("rememberuser",this.yobuilderservice.createType("rememberuser","Remember Login",!0,!0,!0,"checkbox",2,!0)),e.set("agreement",this.yobuilderservice.createType("agreement","Agreed to Terms & Condtions",!0,!0,!0,"checkbox",2,!0)),this.inwhatformgroup=this.yobuilderservice.createFormGroup(e),this.whatcontrolsmap=this.yobuilderservice.createMap(e,this.inwhatformgroup);var t=new d.a("Sign In","unlock","lock_open","primary",!1);this.mybuttons.set("Action",t)}},{key:"send",value:function(e){this.login(e.data.value)}},{key:"cancel",value:function(e){this.startObject()}},{key:"registerToken",value:function(e){this.ynotification.registertoken()}},{key:"login",value:function(e){var t=this;this.yauth.login(e).subscribe((function(e){e.subscribe((function(e){e.isError?t.alertme.errordata(e.message):t.yauth.isAuthenticated().subscribe((function(e){t.ystorageservice.isTenantSelection()&&t.router.navigateByUrl("/tenants")}))}))}))}},{key:"presentToast",value:function(e,t,n,o){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.toastCtrl.create({message:e,position:n,duration:o});case 2:t.sent.present();case 3:case"end":return t.stop()}}),t,this)})))}},{key:"next",value:function(){this.showOTPInput=!0,this.start()}},{key:"start",value:function(){}},{key:"stop",value:function(){}},{key:"processSMS",value:function(e){var t=e.body;t&&-1!=t.indexOf("enappd_starters")&&(this.OTP=e.body.slice(0,6),console.log(this.OTP),this.OTPmessage="OTP received. Proceed to register",this.stop())}},{key:"register",value:function(){""!=this.OTP?this.presentToast("You are successfully registered",!1,"top",1500):this.presentToast("Your OTP is not valid",!1,"bottom",1500)}}]),e}()).\u0275fac=function(e){return new(e||S)(k.Qb(v.AngularFireAuth),k.Qb(c.nb),k.Qb(m.a),k.Qb(h.a),k.Qb(l.a),k.Qb(u.a),k.Qb(b.a),k.Qb(f.d),k.Qb(p.a),k.Qb(g.a),k.Qb(a.g))},S.\u0275cmp=k.Kb({type:S,selectors:[["app-login"]],decls:33,vars:16,consts:[[3,"color"],["slot","start"],[4,"ngIf"],[1,"box"],[3,"captchaOn","whatform","whatformgroup","whichbuttons","actionEvent","cancelEvent"],["color","secondary","routerLink","/forgotpass"],["color","secondary","routerLink","/register",4,"ngIf"],["color","secondary"],["text-center",""],["class","example-form",3,"formGroup",4,"ngIf"],["id","captchwrapper"],["id","recaptcha-container"],[1,"example-form",3,"formGroup"],[1,"example-full-width"],["type","text","matInput","","formControlName","mobile"],["myphone",""],["color","danger","size","small","class","delete",3,"disabled","click",4,"ngIf"],["color","danger","size","small",1,"delete",3,"disabled","click"],[1,"animated","tada"],["type","text","matInput","",3,"ngModel","ngModelChange"],["verificationcaode",""],["color","danger","size","small",1,"delete",3,"click"],["color","secondary","size","small",3,"click",4,"ngIf"],["color","secondary","size","small",3,"click"],["color","secondary","routerLink","/register"]],template:function(e,t){1&e&&(k.Wb(0,"ion-header"),k.Wb(1,"ion-toolbar",0),k.Wb(2,"ion-buttons",1),k.Rb(3,"ion-menu-button"),k.Vb(),k.Wb(4,"ion-title"),k.Lc(5),k.jc(6,"translate"),k.Vb(),k.Vb(),k.Vb(),k.Wb(7,"ion-content"),k.Wb(8,"ion-grid"),k.Rb(9,"ion-col"),k.Vb(),k.Wb(10,"ion-grid"),k.Wb(11,"ion-row"),k.Wb(12,"ion-col"),k.Jc(13,L,10,5,"mat-card",2),k.Vb(),k.Vb(),k.Wb(14,"ion-row"),k.Wb(15,"ion-col"),k.Wb(16,"mat-card"),k.Wb(17,"mat-card-header"),k.Wb(18,"mat-card-title"),k.Lc(19),k.jc(20,"translate"),k.Vb(),k.Vb(),k.Wb(21,"mat-card-content",3),k.Wb(22,"yogagainv2-dyanamic-page",4),k.ec("actionEvent",(function(e){return t.send(e)}))("cancelEvent",(function(e){return t.cancel(e)})),k.Vb(),k.Vb(),k.Vb(),k.Vb(),k.Vb(),k.Wb(23,"ion-row"),k.Wb(24,"ion-col"),k.Wb(25,"ion-button",5),k.Lc(26),k.jc(27,"translate"),k.Vb(),k.Jc(28,R,3,3,"ion-button",6),k.Vb(),k.Vb(),k.Vb(),k.Vb(),k.Wb(29,"ion-footer"),k.Wb(30,"ion-toolbar",7),k.Wb(31,"ion-title",8),k.Lc(32," Made by Ideasyogi "),k.Vb(),k.Vb(),k.Vb()),2&e&&(k.Db(1),k.rc("color",(t.ygen.isTenantSelection(),"secondary")),k.Db(4),k.Mc(k.kc(6,10,"Login")),k.Db(8),k.rc("ngIf",t.ygen.inTenant()),k.Db(6),k.Nc(" ",t.ygen.inTenant()?"OR Login via Email":k.kc(20,12,"Login via Email"),""),k.Db(3),k.rc("captchaOn",!1)("whatform",t.whatcontrolsmap)("whatformgroup",t.inwhatformgroup)("whichbuttons",t.mybuttons),k.Db(4),k.Nc(" ",k.kc(27,14,"Forgot Password")," "),k.Db(2),k.rc("ngIf",!t.ygen.isTenantSelection()))},directives:[c.v,c.ab,c.j,c.G,c.Y,c.s,c.u,c.r,c.K,i.m,P.a,P.f,P.h,P.d,O.a,c.i,c.kb,a.i,c.t,r.v,r.o,r.h,V.c,V.g,x.b,r.b,r.n,r.f,V.b,r.q],pipes:[C.c],styles:['.main[_ngcontent-%COMP%]{height:100vh;display:flex;flex-direction:column;justify-content:center}@media screen and (min-width:767px){ion-card[_ngcontent-%COMP%]{width:600px;margin:auto}}ion-card[_ngcontent-%COMP%]{--background:#fff;box-shadow:none;-webkit-box-shadow:none;overflow:scroll}.input[_ngcontent-%COMP%]{background-color:#f0f0f0;border:1px solid #d2d2d2;border-radius:9px;font-size:.9em!important}.otpinput[_ngcontent-%COMP%]{letter-spacing:30px;-webkit-padding-end:0;--padding-end:0;font-size:30px;border:none;background:#fff}.white[_ngcontent-%COMP%]{color:#fff}.OTP-border[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{border-bottom:1px solid}.small[_ngcontent-%COMP%]{font-size:13px}.small[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:unset!important}.button-color[_ngcontent-%COMP%]{background-color:var(--ion-color-mytheme)}.logo[_ngcontent-%COMP%]{width:1.25em!important}.grid[_ngcontent-%COMP%]{height:100vh;flex-direction:column}.grid[_ngcontent-%COMP%], .row[_ngcontent-%COMP%]{display:flex;justify-content:center}.row[_ngcontent-%COMP%]{flex-direction:row}.img-logo[_ngcontent-%COMP%]{height:120px;width:120px}.fire-logo[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;padding-bottom:30px}.bold[_ngcontent-%COMP%]{font-weight:700}.block[_ngcontent-%COMP%]{display:block}.transition[_ngcontent-%COMP%]{background:linear-gradient(90deg,#f57c00 14%,#ffca00 96%)}.btn-color[_ngcontent-%COMP%]{color:#ffa000}.error[_ngcontent-%COMP%]{color:red;text-align:center;display:block;font-weight:700}@-webkit-keyframes spinner{to{transform:rotate(1turn)}}@keyframes spinner{to{transform:rotate(1turn)}}.spinner[_ngcontent-%COMP%]:before{content:" OTP";box-sizing:border-box;position:absolute;top:50%;left:50%;width:20px;height:20px;margin-top:-10px;margin-left:-10px;border-radius:50%;border:2px solid #fff;border-top-color:#000;-webkit-animation:spinner .8s linear infinite;animation:spinner .8s linear infinite}']}),S),j=w.PhoneNumberUtil.getInstance(),N=n("hVaU"),z=n("4pxM"),F=n("IZvt"),A=[{path:"",component:D}],Q=((E=function e(){_classCallCheck(this,e)}).\u0275mod=k.Ob({type:E}),E.\u0275inj=k.Nb({factory:function(e){return new(e||E)},imports:[[i.c,r.i,c.bb,r.s,N.a,z.a,F.a,r.s,o.a,a.k.forChild(A)]]}),E)}}]);