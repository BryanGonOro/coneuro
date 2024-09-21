import{a as J,g as K,s as $,_ as m,r as u,b as ue,c as X,ax as Je,ay as Ke,j as n,f as L,h as ee,Q as oe,az as ke,p as D,R as eo,aL as oo,J as Ie,U as Pe,G as de,aI as no,a4 as to,aM as so,aN as ao,B as R,V as ro,v as Me,I as T,aO as io,e as I,i as $e,P as lo,M as co,m as me,n as uo,aP as po,aQ as ce,aR as ho,l as ve,D as xo,S as fo,y as mo,aS as vo,H as go}from"./index-CIXE6jmt.js";import{C as bo}from"./config-global-C9pmGN6P.js";import{c as ge,G as be}from"./format-number-DeMVXUjZ.js";import{S as O,a as ye,F as re}from"./FormControlLabel-CUr3chLV.js";import{C as yo}from"./Card-D95eYuRu.js";import{L as jo}from"./Link-DElSxo9x.js";import{S as Co,C as Ro}from"./Checkbox-B-MTr_pW.js";import{P as Fo}from"./Pagination-uBlrSAKl.js";import"./LastPage-DpUL20Zi.js";const wo={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"};function So(e){return J("MuiFormGroup",e)}K("MuiFormGroup",["root","row","error"]);const ko=["className","row"],Io=e=>{const{classes:o,row:t,error:s}=e;return ee({root:["root",t&&"row",s&&"error"]},So,o)},Po=$("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.row&&o.row]}})(({ownerState:e})=>m({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})),Ve=u.forwardRef(function(o,t){const s=ue({props:o,name:"MuiFormGroup"}),{className:r,row:c=!1}=s,d=X(s,ko),f=Je(),p=Ke({props:s,muiFormControl:f,states:["error"]}),h=m({},s,{row:c,error:p.error}),a=Io(h);return n.jsx(Po,m({className:L(a.root,r),ownerState:h,ref:t},d))}),Mo=oe(n.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),$o=oe(n.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),Vo=$("span",{shouldForwardProp:ke})({position:"relative",display:"flex"}),Oo=$(Mo)({transform:"scale(1)"}),zo=$($o)(({theme:e,ownerState:o})=>m({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},o.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}));function Oe(e){const{checked:o=!1,classes:t={},fontSize:s}=e,r=m({},e,{checked:o});return n.jsxs(Vo,{className:t.root,ownerState:r,children:[n.jsx(Oo,{fontSize:s,className:t.background,ownerState:r}),n.jsx(zo,{fontSize:s,className:t.dot,ownerState:r})]})}const ze=u.createContext(void 0);function Ao(){return u.useContext(ze)}function Lo(e){return J("MuiRadio",e)}const je=K("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),No=["checked","checkedIcon","color","icon","name","onChange","size","className"],Bo=e=>{const{classes:o,color:t,size:s}=e,r={root:["root",`color${D(t)}`,s!=="medium"&&`size${D(s)}`]};return m({},o,ee(r,Lo,o))},Eo=$(Co,{shouldForwardProp:e=>ke(e)||e==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.size!=="medium"&&o[`size${D(t.size)}`],o[`color${D(t.color)}`]]}})(({theme:e,ownerState:o})=>m({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:eo(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${je.checked}`]:{color:(e.vars||e).palette[o.color].main}},{[`&.${je.disabled}`]:{color:(e.vars||e).palette.action.disabled}}));function Go(e,o){return typeof o=="object"&&o!==null?e===o:String(e)===String(o)}const Ce=n.jsx(Oe,{checked:!0}),Re=n.jsx(Oe,{}),Fe=u.forwardRef(function(o,t){var s,r;const c=ue({props:o,name:"MuiRadio"}),{checked:d,checkedIcon:f=Ce,color:p="primary",icon:h=Re,name:a,onChange:l,size:x="medium",className:i}=c,F=X(c,No),j=m({},c,{color:p,size:x}),w=Bo(j),S=Ao();let g=d;const y=oo(l,S&&S.onChange);let C=a;return S&&(typeof g>"u"&&(g=Go(S.value,c.value)),typeof C>"u"&&(C=S.name)),n.jsx(Eo,m({type:"radio",icon:u.cloneElement(h,{fontSize:(s=Re.props.fontSize)!=null?s:x}),checkedIcon:u.cloneElement(f,{fontSize:(r=Ce.props.fontSize)!=null?r:x}),ownerState:j,classes:w,name:C,checked:g,onChange:y,ref:t,className:L(w.root,i)},F))});function Ho(e){return J("MuiRadioGroup",e)}K("MuiRadioGroup",["root","row","error"]);const To=["actions","children","className","defaultValue","name","onChange","value"],Do=e=>{const{classes:o,row:t,error:s}=e;return ee({root:["root",t&&"row",s&&"error"]},Ho,o)},we=u.forwardRef(function(o,t){const{actions:s,children:r,className:c,defaultValue:d,name:f,onChange:p,value:h}=o,a=X(o,To),l=u.useRef(null),x=Do(o),[i,F]=Ie({controlled:h,default:d,name:"RadioGroup"});u.useImperativeHandle(s,()=>({focus:()=>{let g=l.current.querySelector("input:not(:disabled):checked");g||(g=l.current.querySelector("input:not(:disabled)")),g&&g.focus()}}),[]);const j=Pe(t,l),w=de(f),S=u.useMemo(()=>({name:w,onChange(g){F(g.target.value),p&&p(g,g.target.value)},value:i}),[w,p,F,i]);return n.jsx(ze.Provider,{value:S,children:n.jsx(Ve,m({role:"radiogroup",ref:j,className:L(x.root,c)},a,{children:r}))})}),_o=oe(n.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),Uo=oe(n.jsx("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");function Wo(e){return J("MuiRating",e)}const q=K("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]),qo=["value"],Xo=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function Qo(e){const o=e.toString().split(".")[1];return o?o.length:0}function ie(e,o){if(e==null)return e;const t=Math.round(e/o)*o;return Number(t.toFixed(Qo(o)))}const Yo=e=>{const{classes:o,size:t,readOnly:s,disabled:r,emptyValueFocused:c,focusVisible:d}=e,f={root:["root",`size${D(t)}`,r&&"disabled",d&&"focusVisible",s&&"readOnly"],label:["label","pristine"],labelEmptyValue:[c&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return ee(f,Wo,o)},Zo=$("span",{name:"MuiRating",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[{[`& .${q.visuallyHidden}`]:o.visuallyHidden},o.root,o[`size${D(t.size)}`],t.readOnly&&o.readOnly]}})(({theme:e,ownerState:o})=>m({display:"inline-flex",position:"relative",fontSize:e.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",width:"min-content",WebkitTapHighlightColor:"transparent",[`&.${q.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${q.focusVisible} .${q.iconActive}`]:{outline:"1px solid #999"},[`& .${q.visuallyHidden}`]:wo},o.size==="small"&&{fontSize:e.typography.pxToRem(18)},o.size==="large"&&{fontSize:e.typography.pxToRem(30)},o.readOnly&&{pointerEvents:"none"})),Ae=$("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:e},o)=>[o.label,e.emptyValueFocused&&o.labelEmptyValueActive]})(({ownerState:e})=>m({cursor:"inherit"},e.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})),Jo=$("span",{name:"MuiRating",slot:"Icon",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.icon,t.iconEmpty&&o.iconEmpty,t.iconFilled&&o.iconFilled,t.iconHover&&o.iconHover,t.iconFocus&&o.iconFocus,t.iconActive&&o.iconActive]}})(({theme:e,ownerState:o})=>m({display:"flex",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),pointerEvents:"none"},o.iconActive&&{transform:"scale(1.2)"},o.iconEmpty&&{color:(e.vars||e).palette.action.disabled})),Ko=$("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:e=>no(e)&&e!=="iconActive",overridesResolver:(e,o)=>{const{iconActive:t}=e;return[o.decimal,t&&o.iconActive]}})(({iconActive:e})=>m({position:"relative"},e&&{transform:"scale(1.2)"}));function en(e){const o=X(e,qo);return n.jsx("span",m({},o))}function Se(e){const{classes:o,disabled:t,emptyIcon:s,focus:r,getLabelText:c,highlightSelectedOnly:d,hover:f,icon:p,IconContainerComponent:h,isActive:a,itemValue:l,labelProps:x,name:i,onBlur:F,onChange:j,onClick:w,onFocus:S,readOnly:g,ownerState:y,ratingValue:C,ratingValueRounded:ne}=e,N=d?l===C:l<=C,Q=l<=f,B=l<=r,te=l===ne,_=de(),z=n.jsx(Jo,{as:h,value:l,className:L(o.icon,N?o.iconFilled:o.iconEmpty,Q&&o.iconHover,B&&o.iconFocus,a&&o.iconActive),ownerState:m({},y,{iconEmpty:!N,iconFilled:N,iconHover:Q,iconFocus:B,iconActive:a}),children:s&&!N?s:p});return g?n.jsx("span",m({},x,{children:z})):n.jsxs(u.Fragment,{children:[n.jsxs(Ae,m({ownerState:m({},y,{emptyValueFocused:void 0}),htmlFor:_},x,{children:[z,n.jsx("span",{className:o.visuallyHidden,children:c(l)})]})),n.jsx("input",{className:o.visuallyHidden,onFocus:S,onBlur:F,onChange:j,onClick:w,disabled:t,value:l,id:_,type:"radio",name:i,checked:te})]})}const on=n.jsx(_o,{fontSize:"inherit"}),nn=n.jsx(Uo,{fontSize:"inherit"});function tn(e){return`${e} Star${e!==1?"s":""}`}const sn=u.forwardRef(function(o,t){const s=ue({name:"MuiRating",props:o}),{className:r,defaultValue:c=null,disabled:d=!1,emptyIcon:f=nn,emptyLabelText:p="Empty",getLabelText:h=tn,highlightSelectedOnly:a=!1,icon:l=on,IconContainerComponent:x=en,max:i=5,name:F,onChange:j,onChangeActive:w,onMouseLeave:S,onMouseMove:g,precision:y=1,readOnly:C=!1,size:ne="medium",value:N}=s,Q=X(s,Xo),B=de(F),[te,_]=Ie({controlled:N,default:c,name:"Rating"}),z=ie(te,y),Ge=to(),[{hover:P,focus:Y},U]=u.useState({hover:-1,focus:-1});let E=z;P!==-1&&(E=P),Y!==-1&&(E=Y);const{isFocusVisibleRef:pe,onBlur:He,onFocus:Te,ref:De}=so(),[_e,se]=u.useState(!1),he=u.useRef(),Ue=Pe(De,he,t),We=v=>{g&&g(v);const b=he.current,{right:k,left:Z,width:G}=b.getBoundingClientRect();let H;Ge?H=(k-v.clientX)/G:H=(v.clientX-Z)/G;let M=ie(i*H+y/2,y);M=ao(M,y,i),U(A=>A.hover===M&&A.focus===M?A:{hover:M,focus:M}),se(!1),w&&P!==M&&w(v,M)},qe=v=>{S&&S(v);const b=-1;U({hover:b,focus:b}),w&&P!==b&&w(v,b)},xe=v=>{let b=v.target.value===""?null:parseFloat(v.target.value);P!==-1&&(b=P),_(b),j&&j(v,b)},Xe=v=>{v.clientX===0&&v.clientY===0||(U({hover:-1,focus:-1}),_(null),j&&parseFloat(v.target.value)===z&&j(v,null))},Qe=v=>{Te(v),pe.current===!0&&se(!0);const b=parseFloat(v.target.value);U(k=>({hover:k.hover,focus:b}))},Ye=v=>{if(P!==-1)return;He(v),pe.current===!1&&se(!1);const b=-1;U(k=>({hover:k.hover,focus:b}))},[Ze,fe]=u.useState(!1),W=m({},s,{defaultValue:c,disabled:d,emptyIcon:f,emptyLabelText:p,emptyValueFocused:Ze,focusVisible:_e,getLabelText:h,icon:l,IconContainerComponent:x,max:i,precision:y,readOnly:C,size:ne}),V=Yo(W);return n.jsxs(Zo,m({ref:Ue,onMouseMove:We,onMouseLeave:qe,className:L(V.root,r,C&&"MuiRating-readOnly"),ownerState:W,role:C?"img":null,"aria-label":C?h(E):null},Q,{children:[Array.from(new Array(i)).map((v,b)=>{const k=b+1,Z={classes:V,disabled:d,emptyIcon:f,focus:Y,getLabelText:h,highlightSelectedOnly:a,hover:P,icon:l,IconContainerComponent:x,name:B,onBlur:Ye,onChange:xe,onClick:Xe,onFocus:Qe,ratingValue:E,ratingValueRounded:z,readOnly:C,ownerState:W},G=k===Math.ceil(E)&&(P!==-1||Y!==-1);if(y<1){const H=Array.from(new Array(1/y));return n.jsx(Ko,{className:L(V.decimal,G&&V.iconActive),ownerState:W,iconActive:G,children:H.map((M,A)=>{const ae=ie(k-1+(A+1)*y,y);return n.jsx(Se,m({},Z,{isActive:!1,itemValue:ae,labelProps:{style:H.length-1===A?{}:{width:ae===E?`${(A+1)*y*100}%`:"0%",overflow:"hidden",position:"absolute"}}}),ae)})},k)}return n.jsx(Se,m({},Z,{isActive:G,itemValue:k}),k)}),!C&&!d&&n.jsxs(Ae,{className:L(V.label,V.labelEmptyValue),ownerState:W,children:[n.jsx("input",{className:V.visuallyHidden,value:"",id:`${B}-empty`,type:"radio",name:B,checked:z==null,onFocus:()=>fe(!0),onBlur:()=>fe(!1),onChange:xe}),n.jsx("span",{className:V.visuallyHidden,children:p})]})]}))}),an=u.forwardRef(({colors:e,selected:o,onSelectColor:t,limit:s="auto",sx:r,slotProps:c,...d},f)=>{const p=typeof o=="string",h=u.useCallback(a=>{if(p)a!==o&&t(a);else{const l=o.includes(a)?o.filter(x=>x!==a):[...o,a];t(l)}},[t,o,p]);return n.jsx(R,{ref:f,component:"ul",sx:{flexWrap:"wrap",flexDirection:"row",display:"inline-flex",...s!=="auto"&&{width:s*36,justifyContent:"flex-end"},...r},...d,children:e.map(a=>{const l=p?o===a:o.includes(a);return n.jsx(R,{component:"li",sx:{display:"inline-flex"},children:n.jsx(ro,{"aria-label":a,onClick:()=>h(a),sx:{width:36,height:36,borderRadius:"50%",...c==null?void 0:c.button},children:n.jsx(O,{alignItems:"center",justifyContent:"center",sx:x=>({width:20,height:20,bgcolor:a,borderRadius:"50%",border:`solid 1px ${Me(x.vars.palette.grey["500Channel"],.16)}`,...l&&{transform:"scale(1.3)",boxShadow:`4px 4px 8px 0 ${ye(a,.48)}`,outline:`solid 2px ${ye(a,.08)}`,transition:x.transitions.create("all",{duration:x.transitions.duration.shortest})}}),children:n.jsx(T,{width:l?12:0,icon:"eva:checkmark-fill",sx:x=>({color:x.palette.getContrastText(a),transition:x.transitions.create("all",{duration:x.transitions.duration.shortest})})})})})},a)})})}),rn=u.forwardRef(({colors:e,limit:o=3,sx:t,...s},r)=>{const c=e.slice(0,o),d=e.length-o;return n.jsxs(R,{ref:r,sx:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-end",...t},...s,children:[c.map((f,p)=>n.jsx(R,{sx:{ml:-.75,width:16,height:16,bgcolor:f,borderRadius:"50%",border:h=>`solid 2px ${h.vars.palette.background.paper}`,boxShadow:h=>`inset -1px 1px 2px ${Me(h.vars.palette.common.blackChannel,.24)}`}},f+p)),e.length>o&&n.jsx(R,{component:"span",sx:{typography:"subtitle2"},children:`+${d}`})]})});function ln({product:e}){const o=n.jsx(io,{variant:"inverted",color:e.status==="sale"&&"error"||"info",sx:{zIndex:9,top:16,right:16,position:"absolute",textTransform:"uppercase"},children:e.status}),t=n.jsx(R,{component:"img",alt:e.name,src:e.coverUrl,sx:{top:0,width:1,height:1,objectFit:"cover",position:"absolute"}}),s=n.jsxs(I,{variant:"subtitle1",children:[n.jsx(I,{component:"span",variant:"body1",sx:{color:"text.disabled",textDecoration:"line-through"},children:e.priceSale&&ge(e.priceSale)})," ",ge(e.price)]});return n.jsxs(yo,{children:[n.jsxs(R,{sx:{pt:"100%",position:"relative"},children:[e.status&&o,t]}),n.jsxs(O,{spacing:2,sx:{p:3},children:[n.jsx(jo,{color:"inherit",underline:"hover",variant:"subtitle2",noWrap:!0,children:e.name}),n.jsxs(R,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[n.jsx(rn,{colors:e.colors}),s]})]})]})}function cn({options:e,sortBy:o,onSort:t,sx:s,...r}){var h;const[c,d]=u.useState(null),f=u.useCallback(a=>{d(a.currentTarget)},[]),p=u.useCallback(()=>{d(null)},[]);return n.jsxs(n.Fragment,{children:[n.jsxs($e,{disableRipple:!0,color:"inherit",onClick:f,endIcon:n.jsx(T,{icon:c?"eva:chevron-up-fill":"eva:chevron-down-fill"}),sx:s,...r,children:["Sort By: ",n.jsx(I,{component:"span",variant:"subtitle2",sx:{color:"text.secondary"},children:(h=e.find(a=>a.value===o))==null?void 0:h.label})]}),n.jsx(lo,{open:!!c,anchorEl:c,onClose:p,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:n.jsx(co,{disablePadding:!0,sx:{p:.5,gap:.5,width:160,display:"flex",flexDirection:"column",[`& .${me.root}`]:{px:1,gap:2,borderRadius:.75,[`&.${me.selected}`]:{bgcolor:"action.selected"}}},children:e.map(a=>n.jsx(uo,{selected:a.value===o,onClick:()=>{t(a.value),p()},children:a.label},a.value))})})]})}function un({totalItems:e,sx:o,...t}){return n.jsx(R,{component:po,href:"#",sx:{right:0,top:112,zIndex:999,display:"flex",cursor:"pointer",position:"fixed",color:"text.primary",borderTopLeftRadius:16,borderBottomLeftRadius:16,bgcolor:"background.paper",padding:s=>s.spacing(1,3,1,2),boxShadow:s=>s.customShadows.dropdown,transition:s=>s.transitions.create(["opacity"]),"&:hover":{opacity:.72},...o},...t,children:n.jsx(ce,{showZero:!0,badgeContent:e,color:"error",max:99,children:n.jsx(T,{icon:"solar:cart-3-bold",width:24})})})}function dn({filters:e,options:o,canReset:t,openFilter:s,onSetFilters:r,onOpenFilter:c,onCloseFilter:d,onResetFilter:f}){const p=n.jsxs(O,{spacing:1,children:[n.jsx(I,{variant:"subtitle2",children:"Gender"}),n.jsx(Ve,{children:o.genders.map(i=>n.jsx(re,{control:n.jsx(Ro,{checked:e.gender.includes(i.value),onChange:()=>{const F=e.gender.includes(i.value)?e.gender.filter(j=>j!==i.value):[...e.gender,i.value];r({gender:F})}}),label:i.label},i.value))})]}),h=n.jsxs(O,{spacing:1,children:[n.jsx(I,{variant:"subtitle2",children:"Category"}),n.jsx(we,{children:o.categories.map(i=>n.jsx(re,{value:i.value,control:n.jsx(Fe,{checked:e.category.includes(i.value),onChange:()=>r({category:i.value})}),label:i.label},i.value))})]}),a=n.jsxs(O,{spacing:1,children:[n.jsx(I,{variant:"subtitle2",children:"Colors"}),n.jsx(an,{selected:e.colors,onSelectColor:i=>r({colors:i}),colors:o.colors,limit:6})]}),l=n.jsxs(O,{spacing:1,children:[n.jsx(I,{variant:"subtitle2",children:"Price"}),n.jsx(we,{children:o.price.map(i=>n.jsx(re,{value:i.value,control:n.jsx(Fe,{checked:e.price.includes(i.value),onChange:()=>r({price:i.value})}),label:i.label},i.value))})]}),x=n.jsxs(O,{spacing:1,children:[n.jsx(I,{variant:"subtitle2",sx:{mb:2},children:"Rating"}),o.ratings.map((i,F)=>n.jsxs(R,{onClick:()=>r({rating:i}),sx:{mb:1,gap:1,ml:-1,p:.5,display:"flex",borderRadius:1,cursor:"pointer",typography:"body2",alignItems:"center","&:hover":{opacity:.48},...e.rating===i&&{bgcolor:"action.selected"}},children:[n.jsx(sn,{readOnly:!0,value:4-F})," & Up"]},i))]});return n.jsxs(n.Fragment,{children:[n.jsx($e,{disableRipple:!0,color:"inherit",endIcon:n.jsx(ce,{color:"error",variant:"dot",invisible:!t,children:n.jsx(T,{icon:"ic:round-filter-list"})}),onClick:c,children:"Filters"}),n.jsxs(ho,{anchor:"right",open:s,onClose:d,PaperProps:{sx:{width:280,overflow:"hidden"}},children:[n.jsxs(R,{display:"flex",alignItems:"center",sx:{pl:2.5,pr:1.5,py:2},children:[n.jsx(I,{variant:"h6",flexGrow:1,children:"Filters"}),n.jsx(ve,{onClick:f,children:n.jsx(ce,{color:"error",variant:"dot",invisible:!t,children:n.jsx(T,{icon:"solar:refresh-linear"})})}),n.jsx(ve,{onClick:d,children:n.jsx(T,{icon:"mingcute:close-line"})})]}),n.jsx(xo,{}),n.jsx(fo,{children:n.jsxs(O,{spacing:3,sx:{p:3},children:[p,h,a,l,x]})})]})]})}const Le=[{value:"men",label:"Men"},{value:"women",label:"Women"},{value:"kids",label:"Kids"}],Ne=[{value:"all",label:"All"},{value:"shose",label:"Shose"},{value:"apparel",label:"Apparel"},{value:"accessories",label:"Accessories"}],Be=["up4Star","up3Star","up2Star","up1Star"],pn=[{value:"below",label:"Below $25"},{value:"between",label:"Between $25 - $75"},{value:"above",label:"Above $75"}],Ee=["#00AB55","#000000","#FFFFFF","#FFC0CB","#FF4842","#1890FF","#94D82D","#FFC107"],le={price:"",gender:[Le[0].value],colors:[Ee[4]],rating:Be[0],category:Ne[0].value};function hn(){const[e,o]=u.useState("featured"),[t,s]=u.useState(!1),[r,c]=u.useState(le),d=u.useCallback(()=>{s(!0)},[]),f=u.useCallback(()=>{s(!1)},[]),p=u.useCallback(l=>{o(l)},[]),h=u.useCallback(l=>{c(x=>({...x,...l}))},[]),a=Object.keys(r).some(l=>r[l]!==le[l]);return n.jsxs(mo,{children:[n.jsx(I,{variant:"h4",sx:{mb:5},children:"Products"}),n.jsx(un,{totalItems:8}),n.jsx(R,{display:"flex",alignItems:"center",flexWrap:"wrap-reverse",justifyContent:"flex-end",sx:{mb:5},children:n.jsxs(R,{gap:1,display:"flex",flexShrink:0,sx:{my:1},children:[n.jsx(dn,{canReset:a,filters:r,onSetFilters:h,openFilter:t,onOpenFilter:d,onCloseFilter:f,onResetFilter:()=>c(le),options:{genders:Le,categories:Ne,ratings:Be,price:pn,colors:Ee}}),n.jsx(cn,{sortBy:e,onSort:p,options:[{value:"featured",label:"Featured"},{value:"newest",label:"Newest"},{value:"priceDesc",label:"Price: High-Low"},{value:"priceAsc",label:"Price: Low-High"}]})]})}),n.jsx(be,{container:!0,spacing:3,children:vo.map(l=>n.jsx(be,{xs:12,sm:6,md:3,children:n.jsx(ln,{product:l})},l.id))}),n.jsx(Fo,{count:10,color:"primary",sx:{mt:8,mx:"auto"}})]})}function Rn(){return n.jsxs(n.Fragment,{children:[n.jsx(go,{children:n.jsxs("title",{children:[" ",`Products - ${bo.appName}`]})}),n.jsx(hn,{})]})}export{Rn as default};
