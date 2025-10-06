import{f as ze,g as Ze,i as re}from"./chunk-MAE4A3OU.js";import{a as We,b as Je,e as de,f as Ye,g as pe}from"./chunk-NQB43JOC.js";import{f as Ne,g as le,i as Ue,k as Xe}from"./chunk-UYL76MQG.js";import{b as Qe,c as ce}from"./chunk-OZIBKBIL.js";import{$ as Ge,E as se,J as $,L as k,P as me,Q as ue,T as qe,aa as z,ia as je,s as W,t as D}from"./chunk-HJ4MYEPY.js";import{j as Re,k as ie,l as $e,m as ae,o as oe,s as U}from"./chunk-NG2MCBW7.js";import{$ as b,Ab as E,Ba as u,Bb as te,C as ve,Cb as y,Db as v,Ga as Se,Gb as G,Ha as S,Jb as B,Kb as c,Lb as ne,Mb as Ve,Na as A,Nb as Ae,Oa as Pe,R as X,Ra as K,S as Ce,Ta as l,Tb as Ke,Ub as Oe,Va as M,W as q,Wb as j,a as fe,aa as _,b as he,ba as C,cb as p,da as Me,dc as N,ia as Q,ib as m,j as ge,jb as h,kb as I,kc as He,lb as f,na as V,ob as we,oc as Be,pa as Te,pb as P,qb as w,rb as ee,sb as O,sc as T,ta as ke,tb as Ee,tc as R,wb as H,xb as o,y as xe,ya as Y,yb as De,z as ye,za as Le,zb as Fe}from"./chunk-WBDU4WME.js";var at=["data-p-icon","bars"],et=(()=>{class n extends Ue{static \u0275fac=(()=>{let e;return function(i){return(e||(e=V(n)))(i||n)}})();static \u0275cmp=A({type:n,selectors:[["","data-p-icon","bars"]],features:[K],attrs:at,decls:1,vars:0,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z","fill","currentColor"]],template:function(t,i){t&1&&(C(),we(0,"path",0))},encapsulation:2})}return n})();var tt=`
    .p-menubar {
        display: flex;
        align-items: center;
        background: dt('menubar.background');
        border: 1px solid dt('menubar.border.color');
        border-radius: dt('menubar.border.radius');
        color: dt('menubar.color');
        padding: dt('menubar.padding');
        gap: dt('menubar.gap');
    }

    .p-menubar-start,
    .p-megamenu-end {
        display: flex;
        align-items: center;
    }

    .p-menubar-root-list,
    .p-menubar-submenu {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
        outline: 0 none;
    }

    .p-menubar-root-list {
        align-items: center;
        flex-wrap: wrap;
        gap: dt('menubar.gap');
    }

    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
        border-radius: dt('menubar.base.item.border.radius');
    }

    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
        padding: dt('menubar.base.item.padding');
    }

    .p-menubar-item-content {
        transition:
            background dt('menubar.transition.duration'),
            color dt('menubar.transition.duration');
        border-radius: dt('menubar.item.border.radius');
        color: dt('menubar.item.color');
    }

    .p-menubar-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menubar.item.padding');
        gap: dt('menubar.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menubar-item-label {
        line-height: 1;
    }

    .p-menubar-item-icon {
        color: dt('menubar.item.icon.color');
    }

    .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.color');
        margin-left: auto;
        font-size: dt('menubar.submenu.icon.size');
        width: dt('menubar.submenu.icon.size');
        height: dt('menubar.submenu.icon.size');
    }

    .p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-item.p-focus > .p-menubar-item-content {
        color: dt('menubar.item.focus.color');
        background: dt('menubar.item.focus.background');
    }

    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
        color: dt('menubar.item.icon.focus.color');
    }

    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.focus.color');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
        color: dt('menubar.item.focus.color');
        background: dt('menubar.item.focus.background');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
        color: dt('menubar.item.icon.focus.color');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.focus.color');
    }

    .p-menubar-item-active > .p-menubar-item-content {
        color: dt('menubar.item.active.color');
        background: dt('menubar.item.active.background');
    }

    .p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
        color: dt('menubar.item.icon.active.color');
    }

    .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.active.color');
    }

    .p-menubar-submenu {
        display: none;
        position: absolute;
        min-width: 12.5rem;
        z-index: 1;
        background: dt('menubar.submenu.background');
        border: 1px solid dt('menubar.submenu.border.color');
        border-radius: dt('menubar.submenu.border.radius');
        box-shadow: dt('menubar.submenu.shadow');
        color: dt('menubar.submenu.color');
        flex-direction: column;
        padding: dt('menubar.submenu.padding');
        gap: dt('menubar.submenu.gap');
    }

    .p-menubar-submenu .p-menubar-separator {
        border-block-start: 1px solid dt('menubar.separator.border.color');
    }

    .p-menubar-submenu .p-menubar-item {
        position: relative;
    }

    .p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {
        display: block;
        left: 100%;
        top: 0;
    }

    .p-menubar-end {
        margin-left: auto;
        align-self: center;
    }

    .p-menubar-end:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-button {
        display: none;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: dt('menubar.mobile.button.size');
        height: dt('menubar.mobile.button.size');
        position: relative;
        color: dt('menubar.mobile.button.color');
        border: 0 none;
        background: transparent;
        border-radius: dt('menubar.mobile.button.border.radius');
        transition:
            background dt('menubar.transition.duration'),
            color dt('menubar.transition.duration'),
            outline-color dt('menubar.transition.duration');
        outline-color: transparent;
    }

    .p-menubar-button:hover {
        color: dt('menubar.mobile.button.hover.color');
        background: dt('menubar.mobile.button.hover.background');
    }

    .p-menubar-button:focus-visible {
        box-shadow: dt('menubar.mobile.button.focus.ring.shadow');
        outline: dt('menubar.mobile.button.focus.ring.width') dt('menubar.mobile.button.focus.ring.style') dt('menubar.mobile.button.focus.ring.color');
        outline-offset: dt('menubar.mobile.button.focus.ring.offset');
    }

    .p-menubar-mobile {
        position: relative;
    }

    .p-menubar-mobile .p-menubar-button {
        display: flex;
    }

    .p-menubar-mobile .p-menubar-root-list {
        position: absolute;
        display: none;
        width: 100%;
        flex-direction: column;
        top: 100%;
        left: 0;
        z-index: 1;
        padding: dt('menubar.submenu.padding');
        background: dt('menubar.submenu.background');
        border: 1px solid dt('menubar.submenu.border.color');
        box-shadow: dt('menubar.submenu.shadow');
        border-radius: dt('menubar.submenu.border.radius');
        gap: dt('menubar.submenu.gap');
    }

    .p-menubar-mobile .p-menubar-root-list:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
        padding: dt('menubar.item.padding');
    }

    .p-menubar-mobile-active .p-menubar-root-list {
        display: flex;
    }

    .p-menubar-mobile .p-menubar-root-list .p-menubar-item {
        width: 100%;
        position: static;
    }

    .p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
        border-block-start: 1px solid dt('menubar.separator.border.color');
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
        margin-left: auto;
        transition: transform 0.2s;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon:dir(rtl),
    .p-menubar-mobile .p-menubar-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        transform: rotate(-180deg);
    }

    .p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
        transition: transform 0.2s;
        transform: rotate(90deg);
    }

    .p-menubar-mobile .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        transform: rotate(-90deg);
    }

    .p-menubar-mobile .p-menubar-submenu {
        width: 100%;
        position: static;
        box-shadow: none;
        border: 0 none;
        padding-inline-start: dt('menubar.submenu.mobile.indent');
        padding-inline-end: 0;
    }
`;var nt=(n,r)=>({instance:n,processedItem:r}),ot=()=>({exact:!1}),rt=(n,r)=>({$implicit:n,root:r});function st(n,r){if(n&1&&f(0,"li",6),n&2){let e=o().$implicit,t=o();B(t.getItemProp(e,"style")),c(t.cn(t.cx("separator"),e==null?null:e.styleClass)),p("id",t.getItemId(e))("data-pc-section","separator")}}function mt(n,r){if(n&1&&f(0,"span"),n&2){let e=o(4).$implicit,t=o();B(t.getItemProp(e,"iconStyle")),c(t.cn(t.cx("itemIcon"),t.getItemProp(e,"icon"))),p("data-pc-section","icon")("tabindex",-1)}}function ut(n,r){if(n&1&&(h(0,"span",17),ne(1),I()),n&2){let e=o(4).$implicit,t=o();c(t.cx("itemLabel")),m("id",t.getItemLabelId(e)),p("data-pc-section","label"),u(),Ae(" ",t.getItemLabel(e)," ")}}function ct(n,r){if(n&1&&f(0,"span",18),n&2){let e=o(4).$implicit,t=o();c(t.cx("itemLabel")),m("innerHTML",t.getItemLabel(e),Y)("id",t.getItemLabelId(e)),p("data-pc-section","label")}}function lt(n,r){if(n&1&&f(0,"p-badge",19),n&2){let e=o(4).$implicit,t=o();c(t.getItemProp(e,"badgeStyleClass")),m("value",t.getItemProp(e,"badge"))}}function dt(n,r){if(n&1&&(C(),f(0,"svg",23)),n&2){let e=o(7);c(e.cx("submenuIcon")),p("data-pc-section","submenuicon")}}function pt(n,r){if(n&1&&(C(),f(0,"svg",24)),n&2){let e=o(7);c(e.cx("submenuIcon")),p("data-pc-section","submenuicon")}}function bt(n,r){if(n&1&&(P(0),l(1,dt,1,3,"svg",21)(2,pt,1,3,"svg",22),w()),n&2){let e=o(6);u(),m("ngIf",e.root),u(),m("ngIf",!e.root)}}function _t(n,r){}function It(n,r){n&1&&l(0,_t,0,0,"ng-template",25),n&2&&m("data-pc-section","submenuicon")}function ft(n,r){if(n&1&&(P(0),l(1,bt,3,2,"ng-container",9)(2,It,1,1,null,20),w()),n&2){let e=o(5);u(),m("ngIf",!e.submenuiconTemplate),u(),m("ngTemplateOutlet",e.submenuiconTemplate)}}function ht(n,r){if(n&1&&(h(0,"a",13),l(1,mt,1,6,"span",14)(2,ut,2,5,"span",15)(3,ct,1,5,"ng-template",null,1,N)(5,lt,1,3,"p-badge",16)(6,ft,3,2,"ng-container",9),I()),n&2){let e=G(4),t=o(3).$implicit,i=o();c(i.cx("itemLink")),p("href",i.getItemProp(t,"url"),Le)("data-automationid",i.getItemProp(t,"automationId"))("data-pc-section","action")("target",i.getItemProp(t,"target"))("tabindex",-1),u(),m("ngIf",i.getItemProp(t,"icon")),u(),m("ngIf",i.getItemProp(t,"escape"))("ngIfElse",e),u(3),m("ngIf",i.getItemProp(t,"badge")),u(),m("ngIf",i.isItemGroup(t))}}function gt(n,r){if(n&1&&f(0,"span",29),n&2){let e=o(4).$implicit,t=o();c(t.cn(t.cx("itemIcon"),t.getItemProp(e,"icon"))),m("ngStyle",t.getItemProp(e,"iconStyle")),p("data-pc-section","icon")("tabindex",-1)}}function xt(n,r){if(n&1&&(h(0,"span"),ne(1),I()),n&2){let e=o(4).$implicit,t=o();c(t.cx("itemLabel")),u(),Ve(t.getItemLabel(e))}}function yt(n,r){if(n&1&&f(0,"span",30),n&2){let e=o(4).$implicit,t=o();c(t.cx("itemLabel")),m("innerHTML",t.getItemLabel(e),Y),p("data-pc-section","label")}}function vt(n,r){if(n&1&&f(0,"p-badge",19),n&2){let e=o(4).$implicit,t=o();c(t.getItemProp(e,"badgeStyleClass")),m("value",t.getItemProp(e,"badge"))}}function Ct(n,r){if(n&1&&(C(),f(0,"svg",23)),n&2){let e=o(7);c(e.cx("submenuIcon")),p("data-pc-section","submenuicon")}}function Mt(n,r){if(n&1&&(C(),f(0,"svg",24)),n&2){let e=o(7);c(e.cx("submenuIcon")),p("data-pc-section","submenuicon")}}function Tt(n,r){if(n&1&&(P(0),l(1,Ct,1,3,"svg",21)(2,Mt,1,3,"svg",22),w()),n&2){let e=o(6);u(),m("ngIf",e.root),u(),m("ngIf",!e.root)}}function kt(n,r){}function Lt(n,r){n&1&&l(0,kt,0,0,"ng-template",25),n&2&&m("data-pc-section","submenuicon")}function St(n,r){if(n&1&&(P(0),l(1,Tt,3,2,"ng-container",9)(2,Lt,1,1,null,20),w()),n&2){let e=o(5);u(),m("ngIf",!e.submenuiconTemplate),u(),m("ngTemplateOutlet",e.submenuiconTemplate)}}function Pt(n,r){if(n&1&&(h(0,"a",26),l(1,gt,1,5,"span",27)(2,xt,2,3,"span",28)(3,yt,1,4,"ng-template",null,2,N)(5,vt,1,3,"p-badge",16)(6,St,3,2,"ng-container",9),I()),n&2){let e=G(4),t=o(3).$implicit,i=o();c(i.cx("itemLink")),m("routerLink",i.getItemProp(t,"routerLink"))("queryParams",i.getItemProp(t,"queryParams"))("routerLinkActive","p-menubar-item-link-active")("routerLinkActiveOptions",i.getItemProp(t,"routerLinkActiveOptions")||Oe(21,ot))("target",i.getItemProp(t,"target"))("fragment",i.getItemProp(t,"fragment"))("queryParamsHandling",i.getItemProp(t,"queryParamsHandling"))("preserveFragment",i.getItemProp(t,"preserveFragment"))("skipLocationChange",i.getItemProp(t,"skipLocationChange"))("replaceUrl",i.getItemProp(t,"replaceUrl"))("state",i.getItemProp(t,"state")),p("data-automationid",i.getItemProp(t,"automationId"))("tabindex",-1)("data-pc-section","action"),u(),m("ngIf",i.getItemProp(t,"icon")),u(),m("ngIf",i.getItemProp(t,"escape"))("ngIfElse",e),u(3),m("ngIf",i.getItemProp(t,"badge")),u(),m("ngIf",i.isItemGroup(t))}}function wt(n,r){if(n&1&&(P(0),l(1,ht,7,12,"a",11)(2,Pt,7,22,"a",12),w()),n&2){let e=o(2).$implicit,t=o();u(),m("ngIf",!t.getItemProp(e,"routerLink")),u(),m("ngIf",t.getItemProp(e,"routerLink"))}}function Et(n,r){}function Dt(n,r){n&1&&l(0,Et,0,0,"ng-template")}function Ft(n,r){if(n&1&&(P(0),l(1,Dt,1,0,null,31),w()),n&2){let e=o(2).$implicit,t=o();u(),m("ngTemplateOutlet",t.itemTemplate)("ngTemplateOutletContext",j(2,rt,e.item,t.root))}}function Vt(n,r){if(n&1){let e=O();h(0,"ul",32),H("itemClick",function(i){b(e);let a=o(3);return _(a.itemClick.emit(i))})("itemMouseEnter",function(i){b(e);let a=o(3);return _(a.onItemMouseEnter(i))}),I()}if(n&2){let e=o(2).$implicit,t=o();m("itemTemplate",t.itemTemplate)("items",e.items)("mobileActive",t.mobileActive)("autoDisplay",t.autoDisplay)("menuId",t.menuId)("activeItemPath",t.activeItemPath)("focusedItemId",t.focusedItemId)("level",t.level+1)("inlineStyles",t.sx("submenu",!0,j(10,nt,t,e))),p("aria-labelledby",t.getItemLabelId(e))}}function At(n,r){if(n&1){let e=O();h(0,"li",7,0)(2,"div",8),H("click",function(i){b(e);let a=o().$implicit,s=o();return _(s.onItemClick(i,a))})("mouseenter",function(i){b(e);let a=o().$implicit,s=o();return _(s.onItemMouseEnter({$event:i,processedItem:a}))}),l(3,wt,3,2,"ng-container",9)(4,Ft,2,5,"ng-container",9),I(),l(5,Vt,1,13,"ul",10),I()}if(n&2){let e=o(),t=e.$implicit,i=e.index,a=o();B(a.getItemProp(t,"style")),c(a.cn(a.cx("item",j(22,nt,a,t)),a.getItemProp(t,"styleClass"))),m("tooltipOptions",a.getItemProp(t,"tooltipOptions")),p("id",a.getItemId(t))("data-pc-section","menuitem")("data-p-highlight",a.isItemActive(t))("data-p-focused",a.isItemFocused(t))("data-p-disabled",a.isItemDisabled(t))("aria-label",a.getItemLabel(t))("aria-disabled",a.isItemDisabled(t)||void 0)("aria-haspopup",a.isItemGroup(t)&&!a.getItemProp(t,"to")?"menu":void 0)("aria-expanded",a.isItemGroup(t)?a.isItemActive(t):void 0)("aria-setsize",a.getAriaSetSize())("aria-posinset",a.getAriaPosInset(i)),u(2),c(a.cx("itemContent")),p("data-pc-section","content"),u(),m("ngIf",!a.itemTemplate),u(),m("ngIf",a.itemTemplate),u(),m("ngIf",a.isItemVisible(t)&&a.isItemGroup(t))}}function Kt(n,r){if(n&1&&l(0,st,1,6,"li",4)(1,At,6,25,"li",5),n&2){let e=r.$implicit,t=o();m("ngIf",t.isItemVisible(e)&&t.getItemProp(e,"separator")),u(),m("ngIf",t.isItemVisible(e)&&!t.getItemProp(e,"separator"))}}var Ot=["start"],Ht=["end"],Bt=["item"],Rt=["menuicon"],$t=["submenuicon"],zt=["menubutton"],Zt=["rootmenu"],qt=["*"];function Qt(n,r){n&1&&ee(0)}function Gt(n,r){if(n&1&&(h(0,"div"),l(1,Qt,1,0,"ng-container",7),I()),n&2){let e=o();c(e.cx("start")),u(),m("ngTemplateOutlet",e.startTemplate||e._startTemplate)}}function jt(n,r){n&1&&(C(),f(0,"svg",10))}function Nt(n,r){}function Ut(n,r){n&1&&l(0,Nt,0,0,"ng-template")}function Wt(n,r){if(n&1){let e=O();h(0,"a",8,2),H("click",function(i){b(e);let a=o();return _(a.menuButtonClick(i))})("keydown",function(i){b(e);let a=o();return _(a.menuButtonKeydown(i))}),l(2,jt,1,0,"svg",9)(3,Ut,1,0,null,7),I()}if(n&2){let e=o();c(e.cx("button")),p("aria-haspopup",!!(e.model.length&&e.model.length>0))("aria-expanded",e.mobileActive)("aria-controls",e.id)("aria-label",e.config.translation.aria.navigation)("data-pc-section","button"),u(2),m("ngIf",!e.menuIconTemplate&&!e._menuIconTemplate),u(),m("ngTemplateOutlet",e.menuIconTemplate||e._menuIconTemplate)}}function Jt(n,r){n&1&&ee(0)}function Xt(n,r){if(n&1&&(h(0,"div"),l(1,Jt,1,0,"ng-container",7),I()),n&2){let e=o();c(e.cx("end")),u(),m("ngTemplateOutlet",e.endTemplate||e._endTemplate)}}function Yt(n,r){if(n&1&&(h(0,"div"),Fe(1),I()),n&2){let e=o();c(e.cx("end"))}}var en={submenu:({instance:n,processedItem:r})=>({display:n.isItemActive(r)?"flex":"none"})},tn={root:({instance:n})=>["p-menubar p-component",{"p-menubar-mobile":n.queryMatches,"p-menubar-mobile-active":n.mobileActive}],start:"p-menubar-start",button:"p-menubar-button",rootList:"p-menubar-root-list",item:({instance:n,processedItem:r})=>["p-menubar-item",{"p-menubar-item-active":n.isItemActive(r),"p-focus":n.isItemFocused(r),"p-disabled":n.isItemDisabled(r)}],itemContent:"p-menubar-item-content",itemLink:"p-menubar-item-link",itemIcon:"p-menubar-item-icon",itemLabel:"p-menubar-item-label",submenuIcon:"p-menubar-submenu-icon",submenu:"p-menubar-submenu",separator:"p-menubar-separator",end:"p-menubar-end"},be=(()=>{class n extends je{name="menubar";theme=tt;classes=tn;inlineStyles=en;static \u0275fac=(()=>{let e;return function(i){return(e||(e=V(n)))(i||n)}})();static \u0275prov=X({token:n,factory:n.\u0275fac})}return n})();var _e=(()=>{class n{autoHide;autoHideDelay;mouseLeaves=new ge;mouseLeft$=this.mouseLeaves.pipe(ve(()=>xe(this.autoHideDelay)),ye(e=>this.autoHide&&e));static \u0275fac=function(t){return new(t||n)};static \u0275prov=X({token:n,factory:n.\u0275fac})}return n})(),nn=(()=>{class n extends ce{items;itemTemplate;root=!1;autoZIndex=!0;baseZIndex=0;mobileActive;autoDisplay;menuId;ariaLabel;ariaLabelledBy;level=0;focusedItemId;activeItemPath;inlineStyles;submenuiconTemplate;itemClick=new M;itemMouseEnter=new M;menuFocus=new M;menuBlur=new M;menuKeydown=new M;mouseLeaveSubscriber;menubarService=q(_e);_componentStyle=q(be);ngOnInit(){super.ngOnInit(),this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>{this.cd.markForCheck()})}onItemClick(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.itemClick.emit({originalEvent:e,processedItem:t,isFocus:!0})}getItemProp(e,t,i=null){return e&&e.item?ue(e.item[t],i):void 0}getItemId(e){return e.item&&e.item?.id?e.item.id:`${this.menuId}_${e.key}`}getItemLabelId(e){return`${this.menuId}_${e.key}_label`}getItemLabel(e){return this.getItemProp(e,"label")}isItemVisible(e){return this.getItemProp(e,"visible")!==!1}isItemActive(e){if(this.activeItemPath)return this.activeItemPath.some(t=>t.key===e.key)}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemFocused(e){return this.focusedItemId===this.getItemId(e)}isItemGroup(e){return k(e.items)}getAriaSetSize(){return this.items.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length}getAriaPosInset(e){return e-this.items.slice(0,e).filter(t=>this.isItemVisible(t)&&this.getItemProp(t,"separator")).length+1}onItemMouseEnter(e){if(this.autoDisplay){let{event:t,processedItem:i}=e;this.itemMouseEnter.emit({originalEvent:t,processedItem:i})}}ngOnDestroy(){this.mouseLeaveSubscriber?.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=V(n)))(i||n)}})();static \u0275cmp=A({type:n,selectors:[["p-menubarSub"],["p-menubarsub"],["","pMenubarSub",""]],hostAttrs:["data-pc-section","menu","role","menubar"],hostVars:6,hostBindings:function(t,i){t&2&&(Ee("id",i.root?i.menuId:null),p("aria-activedescendant",i.focusedItemId),B(i.inlineStyles),c(i.level===0?i.cx("rootList"):i.cx("submenu")))},inputs:{items:"items",itemTemplate:"itemTemplate",root:[2,"root","root",T],autoZIndex:[2,"autoZIndex","autoZIndex",T],baseZIndex:[2,"baseZIndex","baseZIndex",R],mobileActive:[2,"mobileActive","mobileActive",T],autoDisplay:[2,"autoDisplay","autoDisplay",T],menuId:"menuId",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",level:[2,"level","level",R],focusedItemId:"focusedItemId",activeItemPath:"activeItemPath",inlineStyles:"inlineStyles",submenuiconTemplate:"submenuiconTemplate"},outputs:{itemClick:"itemClick",itemMouseEnter:"itemMouseEnter",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeydown:"menuKeydown"},features:[K],decls:1,vars:1,consts:[["listItem",""],["htmlLabel",""],["htmlRouteLabel",""],["ngFor","",3,"ngForOf"],["role","separator",3,"style","class",4,"ngIf"],["role","menuitem","pTooltip","",3,"style","class","tooltipOptions",4,"ngIf"],["role","separator"],["role","menuitem","pTooltip","",3,"tooltipOptions"],[3,"click","mouseenter"],[4,"ngIf"],["pMenubarSub","",3,"itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","inlineStyles","itemClick","itemMouseEnter",4,"ngIf"],["pRipple","",3,"class",4,"ngIf"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","class","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["pRipple",""],[3,"class","style",4,"ngIf"],[3,"class","id",4,"ngIf","ngIfElse"],[3,"class","value",4,"ngIf"],[3,"id"],[3,"innerHTML","id"],[3,"value"],[4,"ngTemplateOutlet"],["data-p-icon","angle-down",3,"class",4,"ngIf"],["data-p-icon","angle-right",3,"class",4,"ngIf"],["data-p-icon","angle-down"],["data-p-icon","angle-right"],[3,"data-pc-section"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],[3,"class","ngStyle",4,"ngIf"],[3,"class",4,"ngIf","ngIfElse"],[3,"ngStyle"],[3,"innerHTML"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pMenubarSub","",3,"itemClick","itemMouseEnter","itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","inlineStyles"]],template:function(t,i){t&1&&l(0,Kt,2,2,"ng-template",3),t&2&&m("ngForOf",i.items)},dependencies:[n,oe,Re,ie,ae,$e,re,ze,Ze,Xe,pe,Ye,We,Je,le,Ne,z],encapsulation:2})}return n})(),an=(()=>{class n extends ce{document;platformId;el;renderer;cd;menubarService;set model(e){this._model=e,this._processedItems=this.createProcessedItems(this._model||[])}get model(){return this._model}styleClass;autoZIndex=!0;baseZIndex=0;autoDisplay=!0;autoHide;breakpoint="960px";autoHideDelay=100;id;ariaLabel;ariaLabelledBy;onFocus=new M;onBlur=new M;menubutton;rootmenu;mobileActive;matchMediaListener;query;queryMatches;outsideClickListener;resizeListener;mouseLeaveSubscriber;dirty=!1;focused=!1;activeItemPath=Q([]);number=Q(0);focusedItemInfo=Q({index:-1,level:0,parentKey:"",item:null});searchValue="";searchTimeout;_processedItems;_componentStyle=q(be);_model;get visibleItems(){let e=this.activeItemPath().find(t=>t.key===this.focusedItemInfo().parentKey);return e?e.items:this.processedItems}get processedItems(){return(!this._processedItems||!this._processedItems.length)&&(this._processedItems=this.createProcessedItems(this.model||[])),this._processedItems}get focusedItemId(){let e=this.focusedItemInfo();return e.item&&e.item?.id?e.item.id:e.index!==-1?`${this.id}${k(e.parentKey)?"_"+e.parentKey:""}_${e.index}`:null}constructor(e,t,i,a,s,d){super(),this.document=e,this.platformId=t,this.el=i,this.renderer=a,this.cd=s,this.menubarService=d,He(()=>{let g=this.activeItemPath();k(g)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())})}ngOnInit(){super.ngOnInit(),this.bindMatchMediaListener(),this.menubarService.autoHide=this.autoHide,this.menubarService.autoHideDelay=this.autoHideDelay,this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>{this.hide()}),this.id=this.id||Qe("pn_id_")}startTemplate;endTemplate;itemTemplate;menuIconTemplate;submenuIconTemplate;templates;_startTemplate;_endTemplate;_itemTemplate;_menuIconTemplate;_submenuIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"menuicon":this._menuIconTemplate=e.template;break;case"submenuicon":this._submenuIconTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}createProcessedItems(e,t=0,i={},a=""){let s=[];return e&&e.forEach((d,g)=>{let x=(a!==""?a+"_":"")+g,L={item:d,index:g,level:t,key:x,parent:i,parentKey:a};L.items=this.createProcessedItems(d.items,t+1,L,x),s.push(L)}),s}bindMatchMediaListener(){if(U(this.platformId)&&!this.matchMediaListener){let e=window.matchMedia(`(max-width: ${this.breakpoint})`);this.query=e,this.queryMatches=e.matches,this.matchMediaListener=()=>{this.queryMatches=e.matches,this.mobileActive=!1,this.cd.markForCheck()},e.addEventListener("change",this.matchMediaListener)}}unbindMatchMediaListener(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)}getItemProp(e,t){return e?ue(e[t]):void 0}menuButtonClick(e){this.toggle(e)}menuButtonKeydown(e){(e.code==="Enter"||e.code==="Space")&&this.menuButtonClick(e)}onItemClick(e){let{originalEvent:t,processedItem:i}=e,a=this.isProcessedItemGroup(i),s=$(i.parent);if(this.isSelected(i)){let{index:g,key:x,level:L,parentKey:J,item:Z}=i;this.activeItemPath.set(this.activeItemPath().filter(F=>x!==F.key&&x.startsWith(F.key))),this.focusedItemInfo.set({index:g,level:L,parentKey:J,item:Z}),this.dirty=!s,D(this.rootmenu.el.nativeElement)}else if(a)this.onItemChange(e);else{let g=s?i:this.activeItemPath().find(x=>x.parentKey==="");this.hide(t),this.changeFocusedItemIndex(t,g?g.index:-1),this.mobileActive=!1,D(this.rootmenu.el.nativeElement)}}onItemMouseEnter(e){se()?this.onItemChange({event:e,processedItem:e.processedItem,focus:this.autoDisplay},"hover"):this.dirty&&this.onItemChange(e,"hover")}onMouseLeave(e){let t=this.menubarService.autoHide,i=this.menubarService.autoHideDelay;t&&setTimeout(()=>{this.menubarService.mouseLeaves.next(!0)},i)}changeFocusedItemIndex(e,t){let i=this.findVisibleItem(t);if(this.focusedItemInfo().index!==t){let a=this.focusedItemInfo();this.focusedItemInfo.set(he(fe({},a),{item:i.item,index:t})),this.scrollInView()}}scrollInView(e=-1){let t=e!==-1?`${this.id}_${e}`:this.focusedItemId,i=W(this.rootmenu.el.nativeElement,`li[id="${t}"]`);i&&i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"nearest"})}onItemChange(e,t){let{processedItem:i,isFocus:a}=e;if($(i))return;let{index:s,key:d,level:g,parentKey:x,items:L,item:J}=i,Z=k(L),F=this.activeItemPath().filter(Ie=>Ie.parentKey!==x&&Ie.parentKey!==d);Z&&F.push(i),this.focusedItemInfo.set({index:s,level:g,parentKey:x,item:J}),Z&&(this.dirty=!0),a&&D(this.rootmenu.el.nativeElement),!(t==="hover"&&this.queryMatches)&&this.activeItemPath.set(F)}toggle(e){this.mobileActive?(this.mobileActive=!1,de.clear(this.rootmenu.el.nativeElement),this.hide()):(this.mobileActive=!0,de.set("menu",this.rootmenu.el.nativeElement,this.config.zIndex.menu),setTimeout(()=>{this.show()},0)),this.bindOutsideClickListener(),e.preventDefault()}hide(e,t){this.mobileActive&&setTimeout(()=>{D(this.menubutton.nativeElement)},0),this.activeItemPath.set([]),this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),t&&D(this.rootmenu?.el.nativeElement),this.dirty=!1}show(){let e=this.findVisibleItem(this.findFirstFocusedItemIndex());this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:e?.item}),D(this.rootmenu?.el.nativeElement)}onMenuFocus(e){this.focused=!0;let t=this.findVisibleItem(this.findFirstFocusedItemIndex()),i=this.focusedItemInfo().index!==-1?this.focusedItemInfo():{index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:t?.item};this.focusedItemInfo.set(i),this.onFocus.emit(e)}onMenuBlur(e){this.focused=!1,this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),this.searchValue="",this.dirty=!1,this.onBlur.emit(e)}onKeyDown(e){let t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&qe(e.key)&&this.searchItems(e,e.key);break}}findVisibleItem(e){return k(this.visibleItems)?this.visibleItems[e]:null}findFirstFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e}findFirstItemIndex(){return this.visibleItems.findIndex(e=>this.isValidItem(e))}findSelectedItemIndex(){return this.visibleItems.findIndex(e=>this.isValidSelectedItem(e))}isProcessedItemGroup(e){return e&&k(e.items)}isSelected(e){return this.activeItemPath().some(t=>t.key===e.key)}isValidSelectedItem(e){return this.isValidItem(e)&&this.isSelected(e)}isValidItem(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemSeparator(e){return this.getItemProp(e,"separator")}isItemMatched(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isProccessedItemGroup(e){return e&&k(e.items)}searchItems(e,t){this.searchValue=(this.searchValue||"")+t;let i=-1,a=!1;return this.focusedItemInfo().index!==-1?(i=this.visibleItems.slice(this.focusedItemInfo().index).findIndex(s=>this.isItemMatched(s)),i=i===-1?this.visibleItems.slice(0,this.focusedItemInfo().index).findIndex(s=>this.isItemMatched(s)):i+this.focusedItemInfo().index):i=this.visibleItems.findIndex(s=>this.isItemMatched(s)),i!==-1&&(a=!0),i===-1&&this.focusedItemInfo().index===-1&&(i=this.findFirstFocusedItemIndex()),i!==-1&&this.changeFocusedItemIndex(e,i),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),a}getProccessedItemLabel(e){return e?this.getItemLabel(e.item):void 0}getItemLabel(e){return this.getItemProp(e,"label")}onArrowDownKey(e){let t=this.visibleItems[this.focusedItemInfo().index];if(t?$(t.parent):null)this.isProccessedItemGroup(t)&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo.set({index:-1,parentKey:t.key,item:t.item}),this.onArrowRightKey(e));else{let a=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,a),e.preventDefault()}}onArrowRightKey(e){let t=this.visibleItems[this.focusedItemInfo().index];if(t?this.activeItemPath().find(a=>a.key===t.parentKey):null)this.isProccessedItemGroup(t)&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo.set({index:-1,parentKey:t.key,item:t.item}),this.onArrowDownKey(e));else{let a=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,a),e.preventDefault()}}onArrowUpKey(e){let t=this.visibleItems[this.focusedItemInfo().index];if($(t.parent)){if(this.isProccessedItemGroup(t)){this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo.set({index:-1,parentKey:t.key,item:t.item});let s=this.findLastItemIndex();this.changeFocusedItemIndex(e,s)}}else{let a=this.activeItemPath().find(s=>s.key===t.parentKey);if(this.focusedItemInfo().index===0){this.focusedItemInfo.set({index:-1,parentKey:a?a.parentKey:"",item:t.item}),this.searchValue="",this.onArrowLeftKey(e);let s=this.activeItemPath().filter(d=>d.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(s)}else{let s=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,s)}}e.preventDefault()}onArrowLeftKey(e){let t=this.visibleItems[this.focusedItemInfo().index],i=t?this.activeItemPath().find(a=>a.key===t.parentKey):null;if(i){this.onItemChange({originalEvent:e,processedItem:i});let a=this.activeItemPath().filter(s=>s.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(a),e.preventDefault()}else{let a=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,a),e.preventDefault()}}onHomeKey(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()}onEndKey(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}onEscapeKey(e){this.hide(e,!0),this.focusedItemInfo().index=this.findFirstFocusedItemIndex(),e.preventDefault()}onTabKey(e){if(this.focusedItemInfo().index!==-1){let t=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(t)&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()}onEnterKey(e){if(this.focusedItemInfo().index!==-1){let t=W(this.rootmenu.el.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),i=t&&W(t,'a[data-pc-section="action"]');i?i.click():t&&t.click()}e.preventDefault()}findLastFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e}findLastItemIndex(){return me(this.visibleItems,e=>this.isValidItem(e))}findPrevItemIndex(e){let t=e>0?me(this.visibleItems.slice(0,e),i=>this.isValidItem(i)):-1;return t>-1?t:e}findNextItemIndex(e){let t=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(i=>this.isValidItem(i)):-1;return t>-1?t+e+1:e}bindResizeListener(){U(this.platformId)&&(this.resizeListener||(this.resizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{se()||this.hide(e,!0),this.mobileActive=!1})))}bindOutsideClickListener(){U(this.platformId)&&(this.outsideClickListener||(this.outsideClickListener=this.renderer.listen(this.document,"click",e=>{let t=this.rootmenu.el.nativeElement!==e.target&&!this.rootmenu.el.nativeElement.contains(e.target),i=this.mobileActive&&this.menubutton.nativeElement!==e.target&&!this.menubutton.nativeElement.contains(e.target);t&&(i?this.mobileActive=!1:this.hide())})))}unbindOutsideClickListener(){this.outsideClickListener&&(this.outsideClickListener(),this.outsideClickListener=null)}unbindResizeListener(){this.resizeListener&&(this.resizeListener(),this.resizeListener=null)}ngOnDestroy(){this.mouseLeaveSubscriber?.unsubscribe(),this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),super.ngOnDestroy()}static \u0275fac=function(t){return new(t||n)(S(Me),S(ke),S(Te),S(Se),S(Be),S(_e))};static \u0275cmp=A({type:n,selectors:[["p-menubar"]],contentQueries:function(t,i,a){if(t&1&&(E(a,Ot,4),E(a,Ht,4),E(a,Bt,4),E(a,Rt,4),E(a,$t,4),E(a,Ge,4)),t&2){let s;y(s=v())&&(i.startTemplate=s.first),y(s=v())&&(i.endTemplate=s.first),y(s=v())&&(i.itemTemplate=s.first),y(s=v())&&(i.menuIconTemplate=s.first),y(s=v())&&(i.submenuIconTemplate=s.first),y(s=v())&&(i.templates=s)}},viewQuery:function(t,i){if(t&1&&(te(zt,5),te(Zt,5)),t&2){let a;y(a=v())&&(i.menubutton=a.first),y(a=v())&&(i.rootmenu=a.first)}},hostAttrs:["data-pc-section","root","data-pc-name","menubar"],hostVars:2,hostBindings:function(t,i){t&2&&c(i.cn(i.cx("root"),i.styleClass))},inputs:{model:"model",styleClass:"styleClass",autoZIndex:[2,"autoZIndex","autoZIndex",T],baseZIndex:[2,"baseZIndex","baseZIndex",R],autoDisplay:[2,"autoDisplay","autoDisplay",T],autoHide:[2,"autoHide","autoHide",T],breakpoint:"breakpoint",autoHideDelay:[2,"autoHideDelay","autoHideDelay",R],id:"id",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onFocus:"onFocus",onBlur:"onBlur"},features:[Ke([_e,be]),K],ngContentSelectors:qt,decls:7,vars:17,consts:[["rootmenu",""],["legacy",""],["menubutton",""],[3,"class",4,"ngIf"],["tabindex","0","role","button",3,"class","click","keydown",4,"ngIf"],["pMenubarSub","","tabindex","0",3,"itemClick","focus","blur","keydown","itemMouseEnter","mouseleave","items","itemTemplate","menuId","root","baseZIndex","autoZIndex","mobileActive","autoDisplay","focusedItemId","submenuiconTemplate","activeItemPath"],[3,"class",4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],["tabindex","0","role","button",3,"click","keydown"],["data-p-icon","bars",4,"ngIf"],["data-p-icon","bars"]],template:function(t,i){if(t&1){let a=O();De(),l(0,Gt,2,3,"div",3)(1,Wt,4,9,"a",4),h(2,"ul",5,0),H("itemClick",function(d){return b(a),_(i.onItemClick(d))})("focus",function(d){return b(a),_(i.onMenuFocus(d))})("blur",function(d){return b(a),_(i.onMenuBlur(d))})("keydown",function(d){return b(a),_(i.onKeyDown(d))})("itemMouseEnter",function(d){return b(a),_(i.onItemMouseEnter(d))})("mouseleave",function(d){return b(a),_(i.onMouseLeave(d))}),I(),l(4,Xt,2,3,"div",6)(5,Yt,2,2,"ng-template",null,1,N)}if(t&2){let a=G(6);m("ngIf",i.startTemplate||i._startTemplate),u(),m("ngIf",i.model&&i.model.length>0),u(),m("items",i.processedItems)("itemTemplate",i.itemTemplate)("menuId",i.id)("root",!0)("baseZIndex",i.baseZIndex)("autoZIndex",i.autoZIndex)("mobileActive",i.mobileActive)("autoDisplay",i.autoDisplay)("focusedItemId",i.focused?i.focusedItemId:void 0)("submenuiconTemplate",i.submenuIconTemplate||i._submenuIconTemplate)("activeItemPath",i.activeItemPath()),p("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy),u(2),m("ngIf",i.endTemplate||i._endTemplate)("ngIfElse",a)}},dependencies:[oe,ie,ae,re,nn,pe,et,le,z],encapsulation:2,changeDetection:0})}return n})(),Hn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Pe({type:n});static \u0275inj=Ce({imports:[an,z,z]})}return n})();export{an as a,Hn as b};
