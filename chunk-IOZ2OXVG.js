import{h as me,i as H}from"./chunk-UYL76MQG.js";import{c as G}from"./chunk-OZIBKBIL.js";import{L as pe,aa as ge,ia as B}from"./chunk-HJ4MYEPY.js";import{a as K,o as fe}from"./chunk-NG2MCBW7.js";import{Ga as X,Ha as a,Ib as ce,Kb as j,Na as V,Oa as v,Pa as c,Q as Y,R as E,Ra as o,S as p,Tb as _,U as g,Va as D,W as m,Za as le,a as d,b as u,ba as k,ia as C,ic as y,j as ie,jc as h,m as re,ma as ae,mc as T,na as s,ob as P,oc as he,pa as Z,r as oe,sc as M,wb as R,x as se,yb as de,zb as ue}from"./chunk-WBDU4WME.js";var Me=(()=>{class t{_renderer;_elementRef;onChange=n=>{};onTouched=()=>{};constructor(n,i){this._renderer=n,this._elementRef=i}setProperty(n,i){this._renderer.setProperty(this._elementRef.nativeElement,n,i)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}static \u0275fac=function(i){return new(i||t)(a(X),a(Z))};static \u0275dir=c({type:t})}return t})(),Ue=(()=>{class t extends Me{static \u0275fac=(()=>{let n;return function(r){return(n||(n=s(t)))(r||t)}})();static \u0275dir=c({type:t,features:[o]})}return t})(),Ae=new g("");var Le={provide:Ae,useExisting:Y(()=>we),multi:!0};function $e(){let t=K()?K().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var ze=new g(""),we=(()=>{class t extends Me{_compositionMode;_composing=!1;constructor(n,i,r){super(n,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!$e())}writeValue(n){let i=n??"";this.setProperty("value",i)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}static \u0275fac=function(i){return new(i||t)(a(X),a(Z),a(ze,8))};static \u0275dir=c({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&R("input",function(f){return r._handleInput(f.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(f){return r._compositionEnd(f.target.value)})},standalone:!1,features:[_([Le]),o]})}return t})();var We=new g(""),qe=new g("");function Fe(t){return t!=null}function Ee(t){return le(t)?re(t):t}function xe(t){let e={};return t.forEach(n=>{e=n!=null?d(d({},e),n):e}),Object.keys(e).length===0?null:e}function Ie(t,e){return e.map(n=>n(t))}function Ye(t){return!t.validate}function Se(t){return t.map(e=>Ye(e)?e:n=>e.validate(n))}function Ze(t){if(!t)return null;let e=t.filter(Fe);return e.length==0?null:function(n){return xe(Ie(n,e))}}function Ne(t){return t!=null?Ze(Se(t)):null}function Xe(t){if(!t)return null;let e=t.filter(Fe);return e.length==0?null:function(n){let i=Ie(n,e).map(Ee);return se(i).pipe(oe(xe))}}function Oe(t){return t!=null?Xe(Se(t)):null}function ve(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Ke(t){return t._rawValidators}function Je(t){return t._rawAsyncValidators}function J(t){return t?Array.isArray(t)?t:[t]:[]}function L(t,e){return Array.isArray(t)?t.includes(e):t===e}function _e(t,e){let n=J(e);return J(t).forEach(r=>{L(n,r)||n.push(r)}),n}function ye(t,e){return J(e).filter(n=>!L(t,n))}var $=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ne(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Oe(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},Q=class extends ${name;get formDirective(){return null}get path(){return null}},b=class extends ${_parent=null;name=null;valueAccessor=null},ee=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Qe={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},qt=u(d({},Qe),{"[class.ng-submitted]":"isSubmitted"}),Yt=(()=>{class t extends ee{constructor(n){super(n)}static \u0275fac=function(i){return new(i||t)(a(b,2))};static \u0275dir=c({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&ce("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[o]})}return t})();var x="VALID",U="INVALID",A="PENDING",I="DISABLED",F=class{},z=class extends F{value;source;constructor(e,n){super(),this.value=e,this.source=n}},S=class extends F{pristine;source;constructor(e,n){super(),this.pristine=e,this.source=n}},N=class extends F{touched;source;constructor(e,n){super(),this.touched=e,this.source=n}},w=class extends F{status;source;constructor(e,n){super(),this.status=e,this.source=n}};function et(t){return(W(t)?t.validators:t)||null}function tt(t){return Array.isArray(t)?Ne(t):t||null}function nt(t,e){return(W(e)?e.asyncValidators:t)||null}function it(t){return Array.isArray(t)?Oe(t):t||null}function W(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var te=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,n){this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return y(this.statusReactive)}set status(e){y(()=>this.statusReactive.set(e))}_status=h(()=>this.statusReactive());statusReactive=C(void 0);get valid(){return this.status===x}get invalid(){return this.status===U}get pending(){return this.status==A}get disabled(){return this.status===I}get enabled(){return this.status!==I}errors;get pristine(){return y(this.pristineReactive)}set pristine(e){y(()=>this.pristineReactive.set(e))}_pristine=h(()=>this.pristineReactive());pristineReactive=C(!0);get dirty(){return!this.pristine}get touched(){return y(this.touchedReactive)}set touched(e){y(()=>this.touchedReactive.set(e))}_touched=h(()=>this.touchedReactive());touchedReactive=C(!1);get untouched(){return!this.touched}_events=new ie;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(_e(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(_e(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(ye(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(ye(e,this._rawAsyncValidators))}hasValidator(e){return L(this._rawValidators,e)}hasAsyncValidator(e){return L(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let n=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(u(d({},e),{sourceControl:i})),n&&e.emitEvent!==!1&&this._events.next(new N(!0,i))}markAllAsDirty(e={}){this.markAsDirty({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsDirty(e))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsTouched(e))}markAsUntouched(e={}){let n=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),n&&e.emitEvent!==!1&&this._events.next(new N(!1,i))}markAsDirty(e={}){let n=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(u(d({},e),{sourceControl:i})),n&&e.emitEvent!==!1&&this._events.next(new S(!1,i))}markAsPristine(e={}){let n=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),n&&e.emitEvent!==!1&&this._events.next(new S(!0,i))}markAsPending(e={}){this.status=A;let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new w(this.status,n)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(u(d({},e),{sourceControl:n}))}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=I,this.errors=null,this._forEachChild(r=>{r.disable(u(d({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new z(this.value,i)),this._events.next(new w(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(u(d({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=x,this._forEachChild(i=>{i.enable(u(d({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(u(d({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,n){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},n),this._parent._updateTouched({},n))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===x||this.status===A)&&this._runAsyncValidator(i,e.emitEvent)}let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new z(this.value,n)),this._events.next(new w(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(u(d({},e),{sourceControl:n}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?I:x}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,n){if(this.asyncValidator){this.status=A,this._hasOwnPendingAsyncValidator={emitEvent:n!==!1,shouldHaveEmitted:e!==!1};let i=Ee(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:n,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1,this,n.shouldHaveEmitted)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,n,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new w(this.status,n)),this._parent&&this._parent._updateControlsErrors(e,n,i)}_initObservables(){this.valueChanges=new D,this.statusChanges=new D}_calculateStatus(){return this._allControlsDisabled()?I:this.errors?U:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(A)?A:this._anyControlsHaveStatus(U)?U:x}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,n){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),r&&this._events.next(new S(this.pristine,n))}_updateTouched(e={},n){this.touched=this._anyControlsTouched(),this._events.next(new N(this.touched,n)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){W(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=tt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=it(this._rawAsyncValidators)}};var ne=new g("",{providedIn:"root",factory:()=>q}),q="always";function rt(t,e){return[...e.path,t]}function ot(t,e,n=q){at(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),lt(t,e),ut(t,e),dt(t,e),st(t,e)}function be(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function st(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function at(t,e){let n=Ke(t);e.validator!==null?t.setValidators(ve(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=Je(t);e.asyncValidator!==null?t.setAsyncValidators(ve(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();be(e._rawValidators,r),be(e._rawAsyncValidators,r)}function lt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&ke(t,e)})}function dt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&ke(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function ke(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function ut(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function ct(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function ht(t){return Object.getPrototypeOf(t.constructor)===Ue}function ft(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(l=>{l.constructor===we?n=l:ht(l)?i=l:r=l}),r||i||n||null}function Ce(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Ve(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var pt=class extends te{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,n,i){super(et(n),nt(i,n)),this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),W(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Ve(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ce(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ce(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ve(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var gt={provide:b,useExisting:Y(()=>mt)},De=Promise.resolve(),mt=(()=>{class t extends b{_changeDetectorRef;callSetDisabledState;control=new pt;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new D;constructor(n,i,r,l,f,He){super(),this._changeDetectorRef=f,this.callSetDisabledState=He,this._parent=n,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=ft(this,l)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let i=n.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),ct(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){ot(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){De.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let i=n.isDisabled.currentValue,r=i!==0&&M(i);De.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?rt(n,this._parent):[n]}static \u0275fac=function(i){return new(i||t)(a(Q,9),a(We,10),a(qe,10),a(Ae,10),a(he,8),a(ne,8))};static \u0275dir=c({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[_([gt]),o,ae]})}return t})();var vt=new g("");var Pe=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=v({type:t});static \u0275inj=p({})}return t})();var Xt=(()=>{class t{static withConfig(n){return{ngModule:t,providers:[{provide:ne,useValue:n.callSetDisabledState??q}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=v({type:t});static \u0275inj=p({imports:[Pe]})}return t})(),Kt=(()=>{class t{static withConfig(n){return{ngModule:t,providers:[{provide:vt,useValue:n.warnOnNgModelWithFormControl??"always"},{provide:ne,useValue:n.callSetDisabledState??q}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=v({type:t});static \u0275inj=p({imports:[Pe]})}return t})();var Re=(()=>{class t extends G{modelValue=C(void 0);$filled=h(()=>pe(this.modelValue()));writeModelValue(n){this.modelValue.set(n)}static \u0275fac=(()=>{let n;return function(r){return(n||(n=s(t)))(r||t)}})();static \u0275dir=c({type:t,features:[o]})}return t})();var je=`
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`;var _t=`
    ${je}

    /* For PrimeNG */
    .p-textarea.ng-invalid.ng-dirty {
        border-color: dt('textarea.invalid.border.color');
    }
    .p-textarea.ng-invalid.ng-dirty::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }
`,yt={root:({instance:t})=>["p-textarea p-component",{"p-filled":t.$filled(),"p-textarea-resizable ":t.autoResize,"p-variant-filled":t.$variant()==="filled","p-textarea-fluid":t.hasFluid,"p-inputfield-sm p-textarea-sm":t.pSize==="small","p-textarea-lg p-inputfield-lg":t.pSize==="large","p-invalid":t.invalid()}]},Te=(()=>{class t extends B{name="textarea";theme=_t;classes=yt;static \u0275fac=(()=>{let n;return function(r){return(n||(n=s(t)))(r||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var yn=(()=>{class t extends Re{autoResize;pSize;variant=T();fluid=T(void 0,{transform:M});invalid=T(void 0,{transform:M});$variant=h(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onResize=new D;ngControlSubscription;_componentStyle=m(Te);ngControl=m(b,{optional:!0,self:!0});pcFluid=m(me,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}ngOnInit(){super.ngOnInit(),this.ngControl&&(this.ngControlSubscription=this.ngControl.valueChanges.subscribe(()=>{this.updateState()}))}ngAfterViewInit(){super.ngAfterViewInit(),this.autoResize&&this.resize(),this.cd.detectChanges()}ngAfterViewChecked(){this.autoResize&&this.resize(),this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(n){this.writeModelValue(n.target.value),this.updateState()}resize(n){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(n||{})}updateState(){this.autoResize&&this.resize()}ngOnDestroy(){this.ngControlSubscription&&this.ngControlSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let n;return function(r){return(n||(n=s(t)))(r||t)}})();static \u0275dir=c({type:t,selectors:[["","pTextarea",""],["","pInputTextarea",""]],hostVars:2,hostBindings:function(i,r){i&1&&R("input",function(f){return r.onInput(f)}),i&2&&j(r.cx("root"))},inputs:{autoResize:[2,"autoResize","autoResize",M],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},outputs:{onResize:"onResize"},features:[_([Te]),o]})}return t})(),bn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=v({type:t});static \u0275inj=p({})}return t})();var Be=`
    .p-floatlabel {
        display: block;
        position: relative;
    }

    .p-floatlabel label {
        position: absolute;
        pointer-events: none;
        top: 50%;
        transform: translateY(-50%);
        transition-property: all;
        transition-timing-function: ease;
        line-height: 1;
        font-weight: dt('floatlabel.font.weight');
        inset-inline-start: dt('floatlabel.position.x');
        color: dt('floatlabel.color');
        transition-duration: dt('floatlabel.transition.duration');
    }

    .p-floatlabel:has(.p-textarea) label {
        top: dt('floatlabel.position.y');
        transform: translateY(0);
    }

    .p-floatlabel:has(.p-inputicon:first-child) label {
        inset-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-floatlabel:has(input:focus) label,
    .p-floatlabel:has(input.p-filled) label,
    .p-floatlabel:has(input:-webkit-autofill) label,
    .p-floatlabel:has(textarea:focus) label,
    .p-floatlabel:has(textarea.p-filled) label,
    .p-floatlabel:has(.p-inputwrapper-focus) label,
    .p-floatlabel:has(.p-inputwrapper-filled) label,
    .p-floatlabel:has(input[placeholder]) label,
    .p-floatlabel:has(textarea[placeholder]) label {
        top: dt('floatlabel.over.active.top');
        transform: translateY(0);
        font-size: dt('floatlabel.active.font.size');
        font-weight: dt('floatlabel.active.font.weight');
    }

    .p-floatlabel:has(input.p-filled) label,
    .p-floatlabel:has(textarea.p-filled) label,
    .p-floatlabel:has(.p-inputwrapper-filled) label {
        color: dt('floatlabel.active.color');
    }

    .p-floatlabel:has(input:focus) label,
    .p-floatlabel:has(input:-webkit-autofill) label,
    .p-floatlabel:has(textarea:focus) label,
    .p-floatlabel:has(.p-inputwrapper-focus) label {
        color: dt('floatlabel.focus.color');
    }

    .p-floatlabel-in .p-inputtext,
    .p-floatlabel-in .p-textarea,
    .p-floatlabel-in .p-select-label,
    .p-floatlabel-in .p-multiselect-label,
    .p-floatlabel-in .p-autocomplete-input-multiple,
    .p-floatlabel-in .p-cascadeselect-label,
    .p-floatlabel-in .p-treeselect-label {
        padding-block-start: dt('floatlabel.in.input.padding.top');
        padding-block-end: dt('floatlabel.in.input.padding.bottom');
    }

    .p-floatlabel-in:has(input:focus) label,
    .p-floatlabel-in:has(input.p-filled) label,
    .p-floatlabel-in:has(input:-webkit-autofill) label,
    .p-floatlabel-in:has(textarea:focus) label,
    .p-floatlabel-in:has(textarea.p-filled) label,
    .p-floatlabel-in:has(.p-inputwrapper-focus) label,
    .p-floatlabel-in:has(.p-inputwrapper-filled) label,
    .p-floatlabel-in:has(input[placeholder]) label,
    .p-floatlabel-in:has(textarea[placeholder]) label {
        top: dt('floatlabel.in.active.top');
    }

    .p-floatlabel-on:has(input:focus) label,
    .p-floatlabel-on:has(input.p-filled) label,
    .p-floatlabel-on:has(input:-webkit-autofill) label,
    .p-floatlabel-on:has(textarea:focus) label,
    .p-floatlabel-on:has(textarea.p-filled) label,
    .p-floatlabel-on:has(.p-inputwrapper-focus) label,
    .p-floatlabel-on:has(.p-inputwrapper-filled) label,
    .p-floatlabel-on:has(input[placeholder]) label,
    .p-floatlabel-on:has(textarea[placeholder]) label {
        top: 0;
        transform: translateY(-50%);
        border-radius: dt('floatlabel.on.border.radius');
        background: dt('floatlabel.on.active.background');
        padding: dt('floatlabel.on.active.padding');
    }

    .p-floatlabel:has([class^='p-'][class$='-fluid']) {
        width: 100%;
    }

    .p-floatlabel:has(.p-invalid) label {
        color: dt('floatlabel.invalid.color');
    }
`;var bt=["*"],Ct=`
    ${Be}

    /* For PrimeNG */
    .p-floatlabel:has(.ng-invalid.ng-dirty) label {
        color: dt('floatlabel.invalid.color');
    }
`,Vt={root:({instance:t})=>["p-floatlabel",{"p-floatlabel-over":t.variant==="over","p-floatlabel-on":t.variant==="on","p-floatlabel-in":t.variant==="in"}]},Ge=(()=>{class t extends B{name="floatlabel";theme=Ct;classes=Vt;static \u0275fac=(()=>{let n;return function(r){return(n||(n=s(t)))(r||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var Pn=(()=>{class t extends G{_componentStyle=m(Ge);variant="over";static \u0275fac=(()=>{let n;return function(r){return(n||(n=s(t)))(r||t)}})();static \u0275cmp=V({type:t,selectors:[["p-floatlabel"],["p-floatLabel"],["p-float-label"]],hostVars:2,hostBindings:function(i,r){i&2&&j(r.cx("root"))},inputs:{variant:"variant"},features:[_([Ge]),o],ngContentSelectors:bt,decls:1,vars:0,template:function(i,r){i&1&&(de(),ue(0))},dependencies:[fe,ge],encapsulation:2,changeDetection:0})}return t})();var Dt=["data-p-icon","check"],Tn=(()=>{class t extends H{static \u0275fac=(()=>{let n;return function(r){return(n||(n=s(t)))(r||t)}})();static \u0275cmp=V({type:t,selectors:[["","data-p-icon","check"]],features:[o],attrs:Dt,decls:1,vars:0,consts:[["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(i,r){i&1&&(k(),P(0,"path",0))},encapsulation:2})}return t})();var Mt=["data-p-icon","times"],Hn=(()=>{class t extends H{static \u0275fac=(()=>{let n;return function(r){return(n||(n=s(t)))(r||t)}})();static \u0275cmp=V({type:t,selectors:[["","data-p-icon","times"]],features:[o],attrs:Mt,decls:1,vars:0,consts:[["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(i,r){i&1&&(k(),P(0,"path",0))},encapsulation:2})}return t})();export{Tn as a,Hn as b,Ae as c,we as d,b as e,Yt as f,mt as g,Xt as h,Kt as i,Re as j,yn as k,bn as l,Pn as m};
