import{_ as M,$ as O,a as Ne,j as g,c as D,C as Ce}from"./utils.DoN5dk7S.js";import{r as t}from"./index.hULzTigk.js";import{$ as Me}from"./index.k5lWt58j.js";import{$ as _,a as ne,b as Re,c as ye,d as _e,e as oe,f as S,g as R,h as K,i as W,j as Te,k as Q}from"./index.DkptQUaN.js";import{c as Ie}from"./index.CxOCE76-.js";function ke(e){const n=t.useRef({value:e,previous:e});return t.useMemo(()=>(n.current.value!==e&&(n.current.previous=n.current.value,n.current.value=e),n.current.previous),[e])}const Pe=t.forwardRef((e,n)=>t.createElement(_.span,M({},e,{ref:n,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),Se=Pe,A="NavigationMenu",[Y,ae,De]=ne(A),[U,Fe,Oe]=ne(A),[X,$t]=Re(A,[De,Oe]),[Ae,T]=X(A),[Le,je]=X(A),Ke=t.forwardRef((e,n)=>{const{__scopeNavigationMenu:o,value:r,onValueChange:a,defaultValue:i,delayDuration:s=200,skipDelayDuration:f=300,orientation:c="horizontal",dir:E,...u}=e,[p,N]=t.useState(null),w=O(n,m=>N(m)),b=ye(E),$=t.useRef(0),x=t.useRef(0),C=t.useRef(0),[I,d]=t.useState(!0),[v="",l]=_e({prop:r,onChange:m=>{const P=m!=="",V=f>0;P?(window.clearTimeout(C.current),V&&d(!1)):(window.clearTimeout(C.current),C.current=window.setTimeout(()=>d(!0),f)),a?.(m)},defaultProp:i}),h=t.useCallback(()=>{window.clearTimeout(x.current),x.current=window.setTimeout(()=>l(""),150)},[l]),y=t.useCallback(m=>{window.clearTimeout(x.current),l(m)},[l]),k=t.useCallback(m=>{v===m?window.clearTimeout(x.current):$.current=window.setTimeout(()=>{window.clearTimeout(x.current),l(m)},s)},[v,l,s]);return t.useEffect(()=>()=>{window.clearTimeout($.current),window.clearTimeout(x.current),window.clearTimeout(C.current)},[]),t.createElement(Ve,{scope:o,isRootMenu:!0,value:v,dir:b,orientation:c,rootNavigationMenu:p,onTriggerEnter:m=>{window.clearTimeout($.current),I?k(m):y(m)},onTriggerLeave:()=>{window.clearTimeout($.current),h()},onContentEnter:()=>window.clearTimeout(x.current),onContentLeave:h,onItemSelect:m=>{l(P=>P===m?"":m)},onItemDismiss:()=>l("")},t.createElement(_.nav,M({"aria-label":"Main","data-orientation":c,dir:b},u,{ref:w})))}),Ve=e=>{const{scope:n,isRootMenu:o,rootNavigationMenu:r,dir:a,orientation:i,children:s,value:f,onItemSelect:c,onItemDismiss:E,onTriggerEnter:u,onTriggerLeave:p,onContentEnter:N,onContentLeave:w}=e,[b,$]=t.useState(null),[x,C]=t.useState(new Map),[I,d]=t.useState(null);return t.createElement(Ae,{scope:n,isRootMenu:o,rootNavigationMenu:r,value:f,previousValue:ke(f),baseId:oe(),dir:a,orientation:i,viewport:b,onViewportChange:$,indicatorTrack:I,onIndicatorTrackChange:d,onTriggerEnter:S(u),onTriggerLeave:S(p),onContentEnter:S(N),onContentLeave:S(w),onItemSelect:S(c),onItemDismiss:S(E),onViewportContentChange:t.useCallback((v,l)=>{C(h=>(h.set(v,l),new Map(h)))},[]),onViewportContentRemove:t.useCallback(v=>{C(l=>l.has(v)?(l.delete(v),new Map(l)):l)},[])},t.createElement(Y.Provider,{scope:n},t.createElement(Le,{scope:n,items:x},s)))},ze="NavigationMenuList",Ge=t.forwardRef((e,n)=>{const{__scopeNavigationMenu:o,...r}=e,a=T(ze,o),i=t.createElement(_.ul,M({"data-orientation":a.orientation},r,{ref:n}));return t.createElement(_.div,{style:{position:"relative"},ref:a.onIndicatorTrackChange},t.createElement(Y.Slot,{scope:o},a.isRootMenu?t.createElement(ue,{asChild:!0},i):i))}),We="NavigationMenuItem",[Ue,re]=X(We),He=t.forwardRef((e,n)=>{const{__scopeNavigationMenu:o,value:r,...a}=e,i=oe(),s=r||i||"LEGACY_REACT_AUTO_VALUE",f=t.useRef(null),c=t.useRef(null),E=t.useRef(null),u=t.useRef(()=>{}),p=t.useRef(!1),N=t.useCallback((b="start")=>{if(f.current){u.current();const $=H(f.current);$.length&&q(b==="start"?$:$.reverse())}},[]),w=t.useCallback(()=>{if(f.current){const b=H(f.current);b.length&&(u.current=ot(b))}},[]);return t.createElement(Ue,{scope:o,value:s,triggerRef:c,contentRef:f,focusProxyRef:E,wasEscapeCloseRef:p,onEntryKeyDown:N,onFocusProxyEnter:N,onRootContentClose:w,onContentFocusOutside:w},t.createElement(_.li,M({},a,{ref:n})))}),Z="NavigationMenuTrigger",Be=t.forwardRef((e,n)=>{const{__scopeNavigationMenu:o,disabled:r,...a}=e,i=T(Z,e.__scopeNavigationMenu),s=re(Z,e.__scopeNavigationMenu),f=t.useRef(null),c=O(f,s.triggerRef,n),E=de(i.baseId,s.value),u=fe(i.baseId,s.value),p=t.useRef(!1),N=t.useRef(!1),w=s.value===i.value;return t.createElement(t.Fragment,null,t.createElement(Y.ItemSlot,{scope:o,value:s.value},t.createElement(le,{asChild:!0},t.createElement(_.button,M({id:E,disabled:r,"data-disabled":r?"":void 0,"data-state":J(w),"aria-expanded":w,"aria-controls":u},a,{ref:c,onPointerEnter:R(e.onPointerEnter,()=>{N.current=!1,s.wasEscapeCloseRef.current=!1}),onPointerMove:R(e.onPointerMove,j(()=>{r||N.current||s.wasEscapeCloseRef.current||p.current||(i.onTriggerEnter(s.value),p.current=!0)})),onPointerLeave:R(e.onPointerLeave,j(()=>{r||(i.onTriggerLeave(),p.current=!1)})),onClick:R(e.onClick,()=>{i.onItemSelect(s.value),N.current=w}),onKeyDown:R(e.onKeyDown,b=>{const x={horizontal:"ArrowDown",vertical:i.dir==="rtl"?"ArrowLeft":"ArrowRight"}[i.orientation];w&&b.key===x&&(s.onEntryKeyDown(),b.preventDefault())})})))),w&&t.createElement(t.Fragment,null,t.createElement(Se,{"aria-hidden":!0,tabIndex:0,ref:s.focusProxyRef,onFocus:b=>{const $=s.contentRef.current,x=b.relatedTarget,C=x===f.current,I=$?.contains(x);(C||!I)&&s.onFocusProxyEnter(C?"start":"end")}}),i.viewport&&t.createElement("span",{"aria-owns":u})))}),ee="navigationMenu.linkSelect",Ye=t.forwardRef((e,n)=>{const{__scopeNavigationMenu:o,active:r,onSelect:a,...i}=e;return t.createElement(le,{asChild:!0},t.createElement(_.a,M({"data-active":r?"":void 0,"aria-current":r?"page":void 0},i,{ref:n,onClick:R(e.onClick,s=>{const f=s.target,c=new CustomEvent(ee,{bubbles:!0,cancelable:!0});if(f.addEventListener(ee,E=>a?.(E),{once:!0}),Q(f,c),!c.defaultPrevented&&!s.metaKey){const E=new CustomEvent(L,{bubbles:!0,cancelable:!0});Q(f,E)}},{checkForDefaultPrevented:!1})})))}),ie="NavigationMenuIndicator",Xe=t.forwardRef((e,n)=>{const{forceMount:o,...r}=e,a=T(ie,e.__scopeNavigationMenu),i=!!a.value;return a.indicatorTrack?Me.createPortal(t.createElement(K,{present:o||i},t.createElement(qe,M({},r,{ref:n}))),a.indicatorTrack):null}),qe=t.forwardRef((e,n)=>{const{__scopeNavigationMenu:o,...r}=e,a=T(ie,o),i=ae(o),[s,f]=t.useState(null),[c,E]=t.useState(null),u=a.orientation==="horizontal",p=!!a.value;t.useEffect(()=>{var w;const $=(w=i().find(x=>x.value===a.value))===null||w===void 0?void 0:w.ref.current;$&&f($)},[i,a.value]);const N=()=>{s&&E({size:u?s.offsetWidth:s.offsetHeight,offset:u?s.offsetLeft:s.offsetTop})};return B(s,N),B(a.indicatorTrack,N),c?t.createElement(_.div,M({"aria-hidden":!0,"data-state":p?"visible":"hidden","data-orientation":a.orientation},r,{ref:n,style:{position:"absolute",...u?{left:0,width:c.size+"px",transform:`translateX(${c.offset}px)`}:{top:0,height:c.size+"px",transform:`translateY(${c.offset}px)`},...r.style}})):null}),F="NavigationMenuContent",Je=t.forwardRef((e,n)=>{const{forceMount:o,...r}=e,a=T(F,e.__scopeNavigationMenu),i=re(F,e.__scopeNavigationMenu),s=O(i.contentRef,n),f=i.value===a.value,c={value:i.value,triggerRef:i.triggerRef,focusProxyRef:i.focusProxyRef,wasEscapeCloseRef:i.wasEscapeCloseRef,onContentFocusOutside:i.onContentFocusOutside,onRootContentClose:i.onRootContentClose,...r};return a.viewport?t.createElement(Qe,M({forceMount:o},c,{ref:s})):t.createElement(K,{present:o||f},t.createElement(se,M({"data-state":J(f)},c,{ref:s,onPointerEnter:R(e.onPointerEnter,a.onContentEnter),onPointerLeave:R(e.onPointerLeave,j(a.onContentLeave)),style:{pointerEvents:!f&&a.isRootMenu?"none":void 0,...c.style}})))}),Qe=t.forwardRef((e,n)=>{const o=T(F,e.__scopeNavigationMenu),{onViewportContentChange:r,onViewportContentRemove:a}=o;return W(()=>{r(e.value,{ref:n,...e})},[e,n,r]),W(()=>()=>a(e.value),[e.value,a]),null}),L="navigationMenu.rootContentDismiss",se=t.forwardRef((e,n)=>{const{__scopeNavigationMenu:o,value:r,triggerRef:a,focusProxyRef:i,wasEscapeCloseRef:s,onRootContentClose:f,onContentFocusOutside:c,...E}=e,u=T(F,o),p=t.useRef(null),N=O(p,n),w=de(u.baseId,r),b=fe(u.baseId,r),$=ae(o),x=t.useRef(null),{onItemDismiss:C}=u;t.useEffect(()=>{const d=p.current;if(u.isRootMenu&&d){const v=()=>{var l;C(),f(),d.contains(document.activeElement)&&((l=a.current)===null||l===void 0||l.focus())};return d.addEventListener(L,v),()=>d.removeEventListener(L,v)}},[u.isRootMenu,e.value,a,C,f]);const I=t.useMemo(()=>{const v=$().map(P=>P.value);u.dir==="rtl"&&v.reverse();const l=v.indexOf(u.value),h=v.indexOf(u.previousValue),y=r===u.value,k=h===v.indexOf(r);if(!y&&!k)return x.current;const m=(()=>{if(l!==h){if(y&&h!==-1)return l>h?"from-end":"from-start";if(k&&l!==-1)return l>h?"to-start":"to-end"}return null})();return x.current=m,m},[u.previousValue,u.value,u.dir,$,r]);return t.createElement(ue,{asChild:!0},t.createElement(Te,M({id:b,"aria-labelledby":w,"data-motion":I,"data-orientation":u.orientation},E,{ref:N,onDismiss:()=>{var d;const v=new Event(L,{bubbles:!0,cancelable:!0});(d=p.current)===null||d===void 0||d.dispatchEvent(v)},onFocusOutside:R(e.onFocusOutside,d=>{var v;c();const l=d.target;(v=u.rootNavigationMenu)!==null&&v!==void 0&&v.contains(l)&&d.preventDefault()}),onPointerDownOutside:R(e.onPointerDownOutside,d=>{var v;const l=d.target,h=$().some(k=>{var m;return(m=k.ref.current)===null||m===void 0?void 0:m.contains(l)}),y=u.isRootMenu&&((v=u.viewport)===null||v===void 0?void 0:v.contains(l));(h||y||!u.isRootMenu)&&d.preventDefault()}),onKeyDown:R(e.onKeyDown,d=>{const v=d.altKey||d.ctrlKey||d.metaKey;if(d.key==="Tab"&&!v){const y=H(d.currentTarget),k=document.activeElement,m=y.findIndex(Ee=>Ee===k),V=d.shiftKey?y.slice(0,m).reverse():y.slice(m+1,y.length);if(q(V))d.preventDefault();else{var h;(h=i.current)===null||h===void 0||h.focus()}}}),onEscapeKeyDown:R(e.onEscapeKeyDown,d=>{s.current=!0})})))}),ce="NavigationMenuViewport",Ze=t.forwardRef((e,n)=>{const{forceMount:o,...r}=e,i=!!T(ce,e.__scopeNavigationMenu).value;return t.createElement(K,{present:o||i},t.createElement(et,M({},r,{ref:n})))}),et=t.forwardRef((e,n)=>{const{__scopeNavigationMenu:o,children:r,...a}=e,i=T(ce,o),s=O(n,i.onViewportChange),f=je(F,e.__scopeNavigationMenu),[c,E]=t.useState(null),[u,p]=t.useState(null),N=c?c?.width+"px":void 0,w=c?c?.height+"px":void 0,b=!!i.value,$=b?i.value:i.previousValue;return B(u,()=>{u&&E({width:u.offsetWidth,height:u.offsetHeight})}),t.createElement(_.div,M({"data-state":J(b),"data-orientation":i.orientation},a,{ref:s,style:{pointerEvents:!b&&i.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":N,"--radix-navigation-menu-viewport-height":w,...a.style},onPointerEnter:R(e.onPointerEnter,i.onContentEnter),onPointerLeave:R(e.onPointerLeave,j(i.onContentLeave))}),Array.from(f.items).map(([C,{ref:I,forceMount:d,...v}])=>{const l=$===C;return t.createElement(K,{key:C,present:d||l},t.createElement(se,M({},v,{ref:Ne(I,h=>{l&&h&&p(h)})})))}))}),tt="FocusGroup",ue=t.forwardRef((e,n)=>{const{__scopeNavigationMenu:o,...r}=e,a=T(tt,o);return t.createElement(U.Provider,{scope:o},t.createElement(U.Slot,{scope:o},t.createElement(_.div,M({dir:a.dir},r,{ref:n}))))}),te=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],nt="FocusGroupItem",le=t.forwardRef((e,n)=>{const{__scopeNavigationMenu:o,...r}=e,a=Fe(o),i=T(nt,o);return t.createElement(U.ItemSlot,{scope:o},t.createElement(_.button,M({},r,{ref:n,onKeyDown:R(e.onKeyDown,s=>{if(["Home","End",...te].includes(s.key)){let c=a().map(p=>p.ref.current);if([i.dir==="rtl"?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(s.key)&&c.reverse(),te.includes(s.key)){const p=c.indexOf(s.currentTarget);c=c.slice(p+1)}setTimeout(()=>q(c)),s.preventDefault()}})})))});function H(e){const n=[],o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const a=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||a?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;o.nextNode();)n.push(o.currentNode);return n}function q(e){const n=document.activeElement;return e.some(o=>o===n?!0:(o.focus(),document.activeElement!==n))}function ot(e){return e.forEach(n=>{n.dataset.tabindex=n.getAttribute("tabindex")||"",n.setAttribute("tabindex","-1")}),()=>{e.forEach(n=>{const o=n.dataset.tabindex;n.setAttribute("tabindex",o)})}}function B(e,n){const o=S(n);W(()=>{let r=0;if(e){const a=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(o)});return a.observe(e),()=>{window.cancelAnimationFrame(r),a.unobserve(e)}}},[e,o])}function J(e){return e?"open":"closed"}function de(e,n){return`${e}-trigger-${n}`}function fe(e,n){return`${e}-content-${n}`}function j(e){return n=>n.pointerType==="mouse"?e(n):void 0}const ve=Ke,me=Ge,at=He,$e=Be,rt=Ye,ge=Xe,pe=Je,be=Ze,we=t.forwardRef(({className:e,children:n,...o},r)=>g.jsxs(ve,{ref:r,className:D("relative z-10 flex max-w-max flex-1 items-center justify-center",e),...o,children:[n,g.jsx(he,{})]}));we.displayName=ve.displayName;const xe=t.forwardRef(({className:e,...n},o)=>g.jsx(me,{ref:o,className:D("group flex flex-1 list-none items-center justify-center space-x-1",e),...n}));xe.displayName=me.displayName;const z=at,it=Ie("group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus:bg-neutral-100 focus:text-neutral-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-neutral-100/50 data-[state=open]:bg-neutral-100/50 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50 dark:data-[active]:bg-neutral-800/50 dark:data-[state=open]:bg-neutral-800/50"),st=t.forwardRef(({className:e,children:n,...o},r)=>g.jsxs($e,{ref:r,className:D(it(),"group",e),...o,children:[n,"",g.jsx(Ce,{className:"relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180","aria-hidden":"true"})]}));st.displayName=$e.displayName;const ct=t.forwardRef(({className:e,...n},o)=>g.jsx(pe,{ref:o,className:D("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",e),...n}));ct.displayName=pe.displayName;const G=rt,he=t.forwardRef(({className:e,...n},o)=>g.jsx("div",{className:D("absolute left-0 top-full flex justify-center"),children:g.jsx(be,{className:D("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-neutral-200 bg-white text-neutral-950 shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)] dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",e),ref:o,...n})}));he.displayName=be.displayName;const ut=t.forwardRef(({className:e,...n},o)=>g.jsx(ge,{ref:o,className:D("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",e),...n,children:g.jsx("div",{className:"relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-neutral-200 shadow-md dark:bg-neutral-800"})}));ut.displayName=ge.displayName;function gt(){return g.jsxs("nav",{className:"flex items-center bg-white shadow-md bg-teal-500 text-neutral-900",children:[g.jsx("div",{className:"basis-full p-3",children:g.jsx("a",{href:"#home",children:"Waggles & Whiskers"})}),g.jsx("div",{className:"basis-full flex justify-center	",children:g.jsx("img",{className:"hidden m-1 p-1 h-20 md:block ",src:"/Waggles & Whiskers-no-text.png",alt:"Waggles & Whiskers"})}),g.jsx("div",{className:"basis-full flex justify-end p-3",children:g.jsx(we,{children:g.jsxs(xe,{className:"flex flex-grow justify-evenly items-center gap-5",children:[g.jsx(z,{children:g.jsx(G,{className:"NavigationMenuLink",href:"#services",children:"Services & Prices"})}),g.jsx(z,{children:g.jsx(G,{className:"NavigationMenuLink",href:"#testimonials",children:"Testimonials"})}),g.jsx(z,{children:g.jsx(G,{className:"NavigationMenuLink",href:"#gallery",children:"Gallery"})})]})})})]})}export{gt as default};