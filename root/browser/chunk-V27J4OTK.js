import{a as ee}from"./chunk-O2I3C46H.js";import{c as Z}from"./chunk-OZIBKBIL.js";import{$ as W,aa as b,ba as X,ia as Y}from"./chunk-HJ4MYEPY.js";import{i as G,k as H,m as U,o as J}from"./chunk-NG2MCBW7.js";import{$ as p,Ab as w,Ba as s,Cb as T,Db as k,Gb as B,Hb as N,Kb as m,Lb as Q,Mb as K,Na as F,Oa as j,R as V,Ra as z,S as E,Ta as _,Tb as L,Va as y,W as M,aa as l,ba as P,cb as d,dc as q,ib as c,jb as g,kb as u,lb as A,ma as S,na as x,pb as C,qb as I,sb as f,sc as $,wb as v,xb as r,yb as O,za as D,zb as R}from"./chunk-WBDU4WME.js";var ne=`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.font.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`;var oe=["removeicon"],re=["*"];function ce(n,a){if(n&1){let e=f();g(0,"img",4),v("error",function(i){p(e);let o=r();return l(o.imageError(i))}),u()}if(n&2){let e=r();m(e.cx("image")),c("src",e.image,D)("alt",e.alt)}}function ae(n,a){if(n&1&&A(0,"span",6),n&2){let e=r(2);m(e.icon),c("ngClass",e.cx("icon")),d("data-pc-section","icon")}}function se(n,a){if(n&1&&_(0,ae,1,4,"span",5),n&2){let e=r();c("ngIf",e.icon)}}function pe(n,a){if(n&1&&(g(0,"div"),Q(1),u()),n&2){let e=r();m(e.cx("label")),d("data-pc-section","label"),s(),K(e.label)}}function le(n,a){if(n&1){let e=f();g(0,"span",10),v("click",function(i){p(e);let o=r(3);return l(o.close(i))})("keydown",function(i){p(e);let o=r(3);return l(o.onKeydown(i))}),u()}if(n&2){let e=r(3);m(e.removeIcon),c("ngClass",e.cx("removeIcon")),d("data-pc-section","removeicon")("aria-label",e.removeAriaLabel)}}function me(n,a){if(n&1){let e=f();P(),g(0,"svg",11),v("click",function(i){p(e);let o=r(3);return l(o.close(i))})("keydown",function(i){p(e);let o=r(3);return l(o.onKeydown(i))}),u()}if(n&2){let e=r(3);m(e.cx("removeIcon")),d("data-pc-section","removeicon")("aria-label",e.removeAriaLabel)}}function _e(n,a){if(n&1&&(C(0),_(1,le,1,5,"span",8)(2,me,1,4,"svg",9),I()),n&2){let e=r(2);s(),c("ngIf",e.removeIcon),s(),c("ngIf",!e.removeIcon)}}function de(n,a){}function ge(n,a){n&1&&_(0,de,0,0,"ng-template")}function ue(n,a){if(n&1){let e=f();g(0,"span",12),v("click",function(i){p(e);let o=r(2);return l(o.close(i))})("keydown",function(i){p(e);let o=r(2);return l(o.onKeydown(i))}),_(1,ge,1,0,null,13),u()}if(n&2){let e=r(2);m(e.cx("removeIcon")),d("data-pc-section","removeicon")("aria-label",e.removeAriaLabel),s(),c("ngTemplateOutlet",e.removeIconTemplate||e._removeIconTemplate)}}function he(n,a){if(n&1&&(C(0),_(1,_e,3,2,"ng-container",3)(2,ue,2,5,"span",7),I()),n&2){let e=r();s(),c("ngIf",!e.removeIconTemplate&&!e._removeIconTemplate),s(),c("ngIf",e.removeIconTemplate||e._removeIconTemplate)}}var fe={root:()=>["p-chip p-component"],image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},te=(()=>{class n extends Y{name="chip";theme=ne;classes=fe;static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(n)))(i||n)}})();static \u0275prov=V({token:n,factory:n.\u0275fac})}return n})();var ve=(()=>{class n extends Z{label;icon;image;alt;styleClass;removable=!1;removeIcon;onRemove=new y;onImageError=new y;visible=!0;get removeAriaLabel(){return this.config.getTranslation(X.ARIA).removeLabel}get chipProps(){return this._chipProps}set chipProps(e){this._chipProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([t,i])=>this[`_${t}`]!==i&&(this[`_${t}`]=i))}_chipProps;_componentStyle=M(te);removeIconTemplate;templates;_removeIconTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"removeicon":this._removeIconTemplate=e.template;break;default:this._removeIconTemplate=e.template;break}})}ngOnChanges(e){if(super.ngOnChanges(e),e.chipProps&&e.chipProps.currentValue){let{currentValue:t}=e.chipProps;t.label!==void 0&&(this.label=t.label),t.icon!==void 0&&(this.icon=t.icon),t.image!==void 0&&(this.image=t.image),t.alt!==void 0&&(this.alt=t.alt),t.styleClass!==void 0&&(this.styleClass=t.styleClass),t.removable!==void 0&&(this.removable=t.removable),t.removeIcon!==void 0&&(this.removeIcon=t.removeIcon)}}close(e){this.visible=!1,this.onRemove.emit(e)}onKeydown(e){(e.key==="Enter"||e.key==="Backspace")&&this.close(e)}imageError(e){this.onImageError.emit(e)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(n)))(i||n)}})();static \u0275cmp=F({type:n,selectors:[["p-chip"]],contentQueries:function(t,i,o){if(t&1&&(w(o,oe,4),w(o,W,4)),t&2){let h;T(h=k())&&(i.removeIconTemplate=h.first),T(h=k())&&(i.templates=h)}},hostVars:7,hostBindings:function(t,i){t&2&&(d("data-pc-name","chip")("aria-label",i.label)("data-pc-section","root"),m(i.cn(i.cx("root"),i.styleClass)),N("display",!i.visible&&"none"))},inputs:{label:"label",icon:"icon",image:"image",alt:"alt",styleClass:"styleClass",removable:[2,"removable","removable",$],removeIcon:"removeIcon",chipProps:"chipProps"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},features:[L([te]),z,S],ngContentSelectors:re,decls:6,vars:4,consts:[["iconTemplate",""],[3,"class","src","alt","error",4,"ngIf","ngIfElse"],[3,"class",4,"ngIf"],[4,"ngIf"],[3,"error","src","alt"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],["tabindex","0","role","button",3,"class","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","ngClass","click","keydown",4,"ngIf"],["data-p-icon","times-circle","tabindex","0","role","button",3,"class","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"click","keydown","ngClass"],["data-p-icon","times-circle","tabindex","0","role","button",3,"click","keydown"],["tabindex","0","role","button",3,"click","keydown"],[4,"ngTemplateOutlet"]],template:function(t,i){if(t&1&&(O(),R(0),_(1,ce,1,4,"img",1)(2,se,1,1,"ng-template",null,0,q)(4,pe,2,4,"div",2)(5,he,3,2,"ng-container",3)),t&2){let o=B(3);s(),c("ngIf",i.image)("ngIfElse",o),s(3),c("ngIf",i.label),s(),c("ngIf",i.removable)}},dependencies:[J,G,H,U,ee,b],encapsulation:2,changeDetection:0})}return n})(),Ke=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=j({type:n});static \u0275inj=E({imports:[ve,b,b]})}return n})();var ie=class{constructor(a,e,t,i,o,h,be,xe,ye,Ce){this.id=a;this.name_service=e;this.promotion=t;this.description=i;this.type_service=o;this.sla=h;this.image=be;this.cost=xe;this.type_cost=ye;this.cuantity=Ce}};export{ve as a,Ke as b,ie as c};
