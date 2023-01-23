(function(){"use strict";var e={4314:function(e,t,n){var o=n(9242),s=n(3396);function i(e,t){const n=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(n)}var a=n(89);const l={},r=(0,a.Z)(l,[["render",i]]);var c=r,h=n(2483);const u={class:"home-view"},d={class:"home-view__header"},g=(0,s._)("img",{class:"home-view__logo",src:"https://st0.dancf.com/static/02/202301130825-f513.png"},null,-1),f={class:"home-view__body"},p={class:"home-view__left"},m={class:"home-view__content"},y={class:"home-view__editor",ref:"parent"},v=(0,s._)("div",{class:"home-view__right"},null,-1);function x(e,t,n,o,i,a){const l=(0,s.up)("ImageElementComponent"),r=(0,s.up)("TextElementComponent"),c=(0,s.up)("GroupElementComponent");return(0,s.wg)(),(0,s.iD)("div",u,[(0,s._)("div",d,[g,(0,s._)("button",{onClick:t[0]||(t[0]=(...e)=>o.handleDownload&&o.handleDownload(...e))},"下载")]),(0,s._)("div",f,[(0,s._)("div",p,[(0,s._)("button",{onClick:t[1]||(t[1]=(...e)=>o.handleAddMesh&&o.handleAddMesh(...e))},"添加素材")]),(0,s._)("div",m,[(0,s._)("div",y,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.elements,((e,t)=>((0,s.wg)(),(0,s.iD)(s.HY,{key:t},["image"===e.elementType?((0,s.wg)(),(0,s.j4)(l,(0,s.dG)({key:0},e.state,{onDragBefore:t=>o.handleMousedown(t,e),onChangeImage:t=>o.handleChangeImage(t,e),onMouseenter:t=>o.handleHover(t,e),onMouseleave:t=>o.handleUnHover(t,e),onFocus:t=>o.handleFocus(t,e)}),null,16,["onDragBefore","onChangeImage","onMouseenter","onMouseleave","onFocus"])):"text"===e.elementType?((0,s.wg)(),(0,s.j4)(r,(0,s.dG)({key:1},e.state,{onDragBefore:t=>o.handleMousedown(t,e),onStartChangeText:t=>o.handleStartChangeText(t,e),onChangeText:t=>o.handleChangeText(t,e),onMouseenter:t=>o.handleHover(t,e),onMouseleave:t=>o.handleUnHover(t,e),onFocus:t=>o.handleFocus(t,e)}),null,16,["onDragBefore","onStartChangeText","onChangeText","onMouseenter","onMouseleave","onFocus"])):"group"===e.elementType?((0,s.wg)(),(0,s.j4)(c,(0,s.dG)({key:2},e.state,{onDragBefore:t=>o.handleMousedown(t,e),onMouseenter:t=>o.handleHover(t,e),onMouseleave:t=>o.handleUnHover(t,e),onFocus:t=>o.handleFocus(t,e)}),null,16,["onDragBefore","onMouseenter","onMouseleave","onFocus"])):(0,s.kq)("",!0)],64)))),128))],512)]),v])])}n(7658);var b=n(7139);const w=["src"];function C(e,t,n,o,i,a){const l=(0,s.up)("Border");return(0,s.wg)(),(0,s.j4)(l,{class:(0,b.C_)(e.bem()),visibleBox:e.visibleBox,visibleBoxScale:e.visibleBoxScale,style:(0,b.j5)(e.style),onMousedownScale:t[3]||(t[3]=t=>e.$emit("drag-before",t))},{default:(0,s.w5)((()=>[(0,s._)("div",{class:(0,b.C_)(e.bem("content")),onMousedown:t[0]||(t[0]=t=>e.$emit("drag-before",{type:"content",e:t})),onClick:t[1]||(t[1]=t=>e.$emit("focus",{type:"content",e:t})),onDblclick:t[2]||(t[2]=t=>e.$emit("change-image",{type:"content",e:t}))},[e.imgSrc?((0,s.wg)(),(0,s.iD)("img",{key:0,src:e.imgSrc},null,8,w)):(0,s.kq)("",!0)],34)])),_:1},8,["class","visibleBox","visibleBoxScale","style"])}function M(e,t){return t?"string"===typeof t?` ${e}--${t}`:Array.isArray(t)?t.reduce(((t,n)=>t+M(e,n)),""):Object.keys(t).reduce(((n,o)=>n+(t[o]?M(e,o):"")),""):""}function _(e){return(t,n)=>(t&&"string"!==typeof t&&(n=t,t=""),t=t?`${e}__${t}`:e,`${t}${M(t,n)}`)}function B(e){const t=e;return[t,_(t)]}function Y(e,t,n,o,i,a){return(0,s.wg)(),(0,s.iD)("div",{class:(0,b.C_)(e.bem({"visible-box":e.visibleBox}))},[(0,s.WI)(e.$slots,"default"),e.visibleBox&&e.visibleBoxScale?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[(0,s._)("div",{class:(0,b.C_)(e.bem("circular","left-top")),onMousedown:t[0]||(t[0]=t=>e.$emit("mousedown-scale",{type:"scale-xy",e:e.e}))},null,34),(0,s._)("div",{class:(0,b.C_)(e.bem("circular","right-top")),onMousedown:t[1]||(t[1]=t=>e.$emit("mousedown-scale",{type:"scale-xy",e:t}))},null,34),(0,s._)("div",{class:(0,b.C_)(e.bem("circular","right-bottom")),onMousedown:t[2]||(t[2]=t=>e.$emit("mousedown-scale",{type:"scale-xy",e:t}))},null,34),(0,s._)("div",{class:(0,b.C_)(e.bem("circular","left-bottom")),onMousedown:t[3]||(t[3]=t=>e.$emit("mousedown-scale",{type:"scale-xy",e:t}))},null,34),(0,s._)("div",{class:(0,b.C_)(e.bem("rect","top")),onMousedown:t[4]||(t[4]=t=>e.$emit("mousedown-scale",{type:"scale-y",e:t}))},null,34),(0,s._)("div",{class:(0,b.C_)(e.bem("rect","right")),onMousedown:t[5]||(t[5]=t=>e.$emit("mousedown-scale",{type:"scale-x",e:t}))},null,34),(0,s._)("div",{class:(0,b.C_)(e.bem("rect","bottom")),onMousedown:t[6]||(t[6]=t=>e.$emit("mousedown-scale",{type:"scale-y",e:t}))},null,34),(0,s._)("div",{class:(0,b.C_)(e.bem("rect","left")),onMousedown:t[7]||(t[7]=t=>e.$emit("mousedown-scale",{type:"scale-x",e:t}))},null,34)],64)):(0,s.kq)("",!0)],2)}const T=5,X=10,E=1,k=10,S=16,$=10,[I,H]=B("border");var R=(0,s.aZ)({name:I,props:{visibleBox:{type:Boolean,default:!1},visibleBoxScale:{type:Boolean,default:!1}},setup(){return{bem:H,BORDER_WIDTH:E,BORDER_CIRCULAR_SIZE:k,BORDER_RECT_WIDTH:S,BORDER_RECT_HEIGHT:$}}});const D=(0,a.Z)(R,[["render",Y]]);var F=D;const[P,j]=B("image-element");var N=(0,s.aZ)({name:P,components:{Border:F},props:{width:{type:Number,default:0},height:{type:Number,default:0},x:{type:Number,default:0},y:{type:Number,default:0},zIndex:{type:Number,default:null},imgSrc:{type:String,default:""},hover:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},operable:{type:Boolean,default:!0}},setup(e){const t=(0,s.Fl)((()=>e.hover||e.focus)),n=(0,s.Fl)((()=>e.focus&&e.operable)),o=(0,s.Fl)((()=>({width:e.width+"px",height:e.height+"px",transform:`translate(${e.x}px, ${e.y}px)`,zIndex:e.zIndex})));return{visibleBox:t,visibleBoxScale:n,style:o,bem:j}}});const O=(0,a.Z)(N,[["render",C]]);var W=O;function z(e,t,n,o,i,a){const l=(0,s.up)("ImageElement"),r=(0,s.up)("TextElement"),c=(0,s.up)("Border");return(0,s.wg)(),(0,s.j4)(c,{class:(0,b.C_)(e.bem()),visibleBox:e.visibleBox,visibleBoxScale:e.visibleBoxScale,style:(0,b.j5)(e.style),onMousedownScale:t[2]||(t[2]=t=>e.$emit("drag-before",t))},{default:(0,s.w5)((()=>[(0,s._)("div",{class:(0,b.C_)(e.bem("content")),onMousedown:t[0]||(t[0]=t=>e.$emit("drag-before",{type:"content",e:t})),onClick:t[1]||(t[1]=t=>e.$emit("focus",{type:"content",e:t}))},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.children,((e,t)=>((0,s.wg)(),(0,s.iD)(s.HY,{key:t},["image"===e.elementType?((0,s.wg)(),(0,s.j4)(l,(0,b.vs)((0,s.dG)({key:0},e.state)),null,16)):"text"===e.elementType?((0,s.wg)(),(0,s.j4)(r,(0,b.vs)((0,s.dG)({key:1},e.state)),null,16)):(0,s.kq)("",!0)],64)))),128))],34)])),_:1},8,["class","visibleBox","visibleBoxScale","style"])}function A(e,t,n,i,a,l){const r=(0,s.up)("Border");return(0,s.wg)(),(0,s.j4)(r,{class:(0,b.C_)(e.bem()),visibleBox:e.visibleBox,visibleBoxScale:e.visibleBoxScale,style:(0,b.j5)(e.style),onMousedownScale:t[3]||(t[3]=t=>e.$emit("drag-before",t))},{default:(0,s.w5)((()=>[(0,s._)("div",{class:(0,b.C_)(e.bem("content")),onMousedown:t[1]||(t[1]=t=>e.$emit("drag-before",{type:"content",e:t})),onClick:t[2]||(t[2]=(...t)=>e.handleClick&&e.handleClick(...t))},[(0,s.wy)((0,s._)("div",{class:(0,b.C_)(e.bem("text")),ref:"input",contenteditable:!0,onInput:t[0]||(t[0]=t=>e.$emit("change-text",t.target.textContent))},(0,b.zw)(e.text),35),[[o.F8,e.edit]]),(0,s.wy)((0,s._)("div",{class:(0,b.C_)(e.bem("text"))},(0,b.zw)(e.text),3),[[o.F8,!e.edit]])],34)])),_:1},8,["class","visibleBox","visibleBoxScale","style"])}var Z=n(4870);const[L,G]=B("text-element");var U=(0,s.aZ)({name:L,components:{Border:F},props:{width:{type:Number,default:0},height:{type:Number,default:0},x:{type:Number,default:0},y:{type:Number,default:0},zIndex:{type:Number,default:null},text:{type:String,default:""},edit:{type:Boolean,default:!1},hover:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},operable:{type:Boolean,default:!0}},setup(e,{emit:t}){const n=(0,s.Fl)((()=>e.hover||e.focus)),o=(0,s.Fl)((()=>e.focus&&e.operable)),i=(0,Z.iH)(null),a=(0,s.Fl)((()=>({width:e.width+"px",height:e.height+"px",transform:`translate(${e.x}px, ${e.y}px)`,zIndex:e.zIndex})));function l(n){e.focus&&!e.edit?(t("start-change-text",{type:"content",e:n}),(0,s.Y3)((()=>{i.value.focus();const e=document.createRange();e.selectNodeContents(i.value),window.getSelection().removeAllRanges(),window.getSelection().addRange(e)}))):t("focus",{type:"content",e:n})}return{visibleBox:n,visibleBoxScale:o,input:i,handleClick:l,style:a,bem:G}}});const q=(0,a.Z)(U,[["render",A]]);var K=q;const[J,Q]=B("group-element");var V=(0,s.aZ)({name:J,components:{Border:F,ImageElement:W,TextElement:K},props:{width:{type:Number,default:0},height:{type:Number,default:0},x:{type:Number,default:0},y:{type:Number,default:0},zIndex:{type:Number,default:null},hover:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},operable:{type:Boolean,default:!0},children:{type:Array,default:()=>[]}},setup(e){const t=(0,s.Fl)((()=>e.hover||e.focus)),n=(0,s.Fl)((()=>e.focus&&e.operable)),o=(0,s.Fl)((()=>({width:e.width+"px",height:e.height+"px",transform:`translate(${e.x}px, ${e.y}px)`,zIndex:e.zIndex})));return{visibleBox:t,visibleBoxScale:n,style:o,bem:Q}}});const ee=(0,a.Z)(V,[["render",z]]);var te=ee;class ne{constructor({width:e,height:t,$parent:n}){const o=document.createElement("canvas");o.width=e,o.height=t,o.style.position="absolute",o.style.top="0",o.style.left="0",o.style.pointerEvents="none",n.appendChild(o),this.canvas=o,this.ctx=o.getContext("2d")}drawXLine(e){const{ctx:t,canvas:n}=this;t.beginPath(),t.moveTo(0,e),t.lineTo(n.width,e),t.strokeStyle="#F56C6C",t.lineWidth=1,t.stroke(),t.closePath()}drawYLine(e){const{ctx:t,canvas:n}=this;t.beginPath(),t.moveTo(e,0),t.lineTo(e,n.height),t.strokeStyle="#F56C6C",t.lineWidth=1,t.stroke(),t.closePath()}clear(){const{ctx:e,canvas:t}=this;e.clearRect(0,0,t.width,t.height)}updateAdsorptionX({originX:e,originCenterX:t,originRightX:n,targetX:o,targetCenterX:s,targetRightX:i}){return Math.abs(t-s)<T?{type:"center",value:s}:Math.abs(t-o)<T?{type:"center",value:o}:Math.abs(t-i)<T?{type:"center",value:i}:Math.abs(e-s)<T?{type:"left",value:s}:Math.abs(e-i)<T?{type:"left",value:i}:Math.abs(e-o)<T?{type:"left",value:o}:Math.abs(n-s)<T?{type:"right",value:s}:Math.abs(n-o)<T?{type:"right",value:o}:Math.abs(n-i)<T?{type:"right",value:i}:null}updateAdsorptionY({originY:e,originCenterY:t,originRightY:n,targetY:o,targetCenterY:s,targetRightY:i}){return Math.abs(t-s)<T?{type:"center",value:s}:Math.abs(t-o)<T?{type:"center",value:o}:Math.abs(t-i)<T?{type:"center",value:i}:Math.abs(e-s)<T?{type:"top",value:s}:Math.abs(e-i)<T?{type:"top",value:i}:Math.abs(e-o)<T?{type:"top",value:o}:Math.abs(n-s)<T?{type:"bottom",value:s}:Math.abs(n-o)<T?{type:"bottom",value:o}:Math.abs(n-i)<T?{type:"bottom",value:i}:null}update({originElement:e,targetElements:t}){let n=null,o=null;for(let s=0;s<t.length;s++){const i=t[s];if(i===e)continue;const{x:a,y:l}=e.getPosition(),{x:r,y:c}=e.getCenterPosition(),{x:h,y:u}=e.getRightPosition(),{x:d,y:g}=i.getPosition(),{x:f,y:p}=i.getCenterPosition(),{x:m,y:y}=i.getRightPosition(),v=this.updateAdsorptionX({originX:a,originCenterX:r,originRightX:h,targetX:d,targetCenterX:f,targetRightX:m}),x=this.updateAdsorptionY({originY:l,originCenterY:c,originRightY:u,targetY:g,targetCenterY:p,targetRightY:y});v&&(n=v),x&&(o=x)}return this.clear(),n&&this.drawYLine(n.value),o&&this.drawXLine(o.value),{xType:n?n.type:null,yType:o?o.type:null,x:n?n.value:null,y:o?o.value:null}}}function oe({x1:e,y1:t,width1:n,height1:o,x2:s,y2:i,width2:a,height2:l}){const r=[{x:e,y:t},{x:e+n,y:t},{x:e,y:t+o},{x:e+n,y:t+o}];for(let c=0;c<r.length;c++){const e=r[c];if(e.x>s&&e.x<s+a&&e.y>i&&e.y<i+l)return!0}return!1}class se{constructor({width:e,height:t,$parent:n}){const o=document.createElement("canvas");o.width=e,o.height=t,o.style.position="absolute",o.style.top="0",o.style.left="0",o.style.pointerEvents="none",n.appendChild(o),this.canvas=o,this.ctx=o.getContext("2d")}ready({originX:e,originY:t}){this.originX=e,this.originY=t,this.collectElements=[]}update({x:e,y:t,targetElements:n}){this.clear();const{ctx:o,originX:s,originY:i}=this,a=e-s,l=t-i;let r,c,h,u;a<0?(r=e,h=-a):(r=s,h=a),l<0?(c=t,u=-l):(c=i,u=l),o.strokeStyle="blue",o.lineWidth=1,o.beginPath(),o.strokeRect(r,c,h,u),o.stroke();const d=[];for(let g=0;g<n.length;g++){const e=n[g];oe({x1:e.state.x,y1:e.state.y,width1:e.state.width,height1:e.state.height,x2:r,y2:c,width2:h,height2:u})?(e.inoperable(),e.focus(),d.push(e)):(e.operable(),e.blur())}this.collectElements=d}getCollectElements(){return this.collectElements}clear(){const{ctx:e,canvas:t}=this;e.clearRect(0,0,t.width,t.height)}}class ie{constructor(e={}){const{x:t=0,y:n=0,width:o=100,height:s=100,hover:i=!1,focus:a=!1,operable:l=!0,zIndex:r=null}=e;this.state={x:t,y:n,width:o,height:s,hover:i,focus:a,operable:l,zIndex:r}}getPosition(){return{x:this.state.x,y:this.state.y}}getCenterPosition(){const{x:e,y:t}=this.getPosition();return{x:e+this.state.width/2,y:t+this.state.height/2}}getRightPosition(){const{x:e,y:t}=this.getPosition();return{x:e+this.state.width,y:t+this.state.height}}setPosition(e,t){this.setX(e),this.setY(t)}transform(e,t){this.transformX(e),this.transformY(t)}transformX(e){this.setX(this.state.x+e)}transformY(e){this.setY(this.state.y+e)}setX(e){this.state.x=e}setY(e){this.state.y=e}scale(e,t){this.scaleX(e),this.scaleY(t)}scaleX(e){this.setWidth(this.state.width*e)}scaleY(e){this.setHeight(this.state.height*e)}setWidth(e){this.state.width=e}setHeight(e){this.state.height=e}setZIndex(e){this.state.zIndex=e}hover(){this.state.hover=!0}unHover(){this.state.hover=!1}focus(){this.state.focus=!0}blur(){this.state.focus=!1}operable(){this.state.operable=!0}inoperable(){this.state.operable=!1}}class ae extends ie{constructor({imgSrc:e,...t}){super(t),this.elementType="image",this.setImgSrc(e)}setImgSrc(e){this.state.imgSrc=e}}class le extends ie{constructor({text:e,...t}){super(t),this.elementType="text",this.setText(e)}setText(e){this.state.text=e}startEdit(){this.state.edit=!0}endEdit(){this.state.edit=!1}}class re extends ie{constructor({children:e,...t}){super(t),this.elementType="group",this.add(e)}add(e){this.state.children||(this.state.children=[]),this.state.children.push(...e)}temporary(){this.state.temporary=!0}permanent(){this.state.temporary=!1}}function ce({type:e,targetMeshX:t,originMeshX:n,originMeshWidth:o}){switch(e){case"left":return t-n;case"center":return t-n-o/2;case"right":return t-n-o}}function he({type:e,targetMeshY:t,originMeshY:n,originMeshHeight:o}){switch(e){case"top":return t-n;case"center":return t-n-o/2;case"bottom":return t-n-o}}class ue{constructor(){this.clear()}clear(){this.offsetX=0,this.offsetY=0}handleDragMeshTransform({mouse:e,mesh:t,onTransform:n}){const{x:o,y:s,xType:i,yType:a}=n(t),l=e.movementX,r=e.movementY,c=e.x-this.offsetX,h=e.y-this.offsetY;if(0!==this.offsetX&&Math.abs(c)>X)t.transformX(c),this.offsetX=0;else if(i){const n=ce({type:i,targetMeshX:o,originMeshX:t.state.x,originMeshWidth:t.state.width});t.transformX(n),0===this.offsetX&&(this.offsetX=e.x)}else t.transformX(l),this.offsetX=0;if(0!==this.offsetY&&Math.abs(h)>X)t.transformY(h),this.offsetY=0;else if(a){const n=he({type:a,targetMeshY:s,originMeshY:t.state.y,originMeshHeight:t.state.height});t.transformY(n),0===this.offsetY&&(this.offsetY=e.y)}else t.transformY(r),this.offsetY=0}}function de(e,t){const{x:n}=e.getCenterPosition(),o=e.state.width,{movementX:s,x:i}=t;i<n?(e.setX(i),e.setWidth(o-s)):i>n&&e.setWidth(o+s)}function ge(e,t){const{y:n}=e.getCenterPosition(),o=e.state.height,{movementY:s,y:i}=t;i<n?(e.setY(i),e.setHeight(o-s)):i>n&&e.setHeight(o+s)}function fe(e,t){de(e,t),ge(e,t)}function pe(e){let t=null,n=null,o=null,s=null;for(let i=0;i<e.length;i++){const a=e[i],{x:l,y:r,width:c,height:h}=a.state;t=null===t?r:Math.min(t,r),n=null===n?l+c:Math.max(n,l+c),o=null===o?r+h:Math.max(o,r+h),s=null===s?l:Math.min(s,l)}return{x:s,y:t,width:n-s,height:o-t}}function me(){return new Promise((e=>{const t=document.createElement("input");t.type="file",t.click(),t.onchange=()=>{const n=t.files[0],o=new FileReader;o.onload=()=>{const t=new Image;t.src=o.result,t.onload=()=>{e(t)}},o.readAsDataURL(n)}}))}var ye={name:"home-view",components:{ImageElementComponent:W,GroupElementComponent:te,TextElementComponent:K},setup(){const e=(0,Z.qj)([]),t=(0,Z.iH)(null);let n,o;const i=new ue;(0,s.bv)((()=>{e.push(new ae({imgSrc:"https://st-gdx.dancf.com/gaodingx/4323/configs/system/20210728-095726-adc9.svg",width:100,height:100,x:0,y:0}),new ae({imgSrc:"https://st-gdx.dancf.com/gaodingx/4323/configs/system/20210728-095726-adc9.svg",width:50,height:100,x:100,y:100}),new le({text:"我是文字，，，a#￥！#%%……￥aaa hello aa的的",width:200,height:100,x:100,y:200})),n=new ne({width:t.value.offsetWidth,height:t.value.offsetHeight,$parent:t.value}),o=new se({width:t.value.offsetWidth,height:t.value.offsetHeight,$parent:t.value})}));let a=null,l=null,r=null,c=!1;function h(e,t){t.focus()}function u(e,t){a=t,l=e}function d(e,t){t.hover()}function g(e,t){t.unHover()}let f=0,p=0,m=null,y=null,v=null,x=null;async function b(e,t){const{width:n,height:o,src:s}=await me();t.setWidth(n),t.setHeight(o),t.setImgSrc(s)}function w(e,t){r=t,t.startEdit()}function C(e,t){t.setText(e)}function M(){}function _(){}return document.addEventListener("mousedown",(n=>{const s={x:n.clientX-t.value.offsetLeft,y:n.clientY-t.value.offsetTop};for(let t=0;t<e.length;t++){const n=e[t];if(r&&r!==a&&(r.endEdit(),r=null),n!==a&&(n.blur(),"group"===n.elementType&&n.state.temporary)){for(let t=0;t<n.state.children.length;t++){const o=n.state.children[t];o.setPosition(o.state.x+n.state.x,o.state.y+n.state.y),o.operable(),e.push(o)}e.splice(t,1),t--}}c=!0,o.ready({originX:s.x,originY:s.y})})),document.addEventListener("mousemove",(s=>{const r={movementX:s.clientX-f,movementY:s.clientY-p,x:s.clientX-t.value.offsetLeft,y:s.clientY-t.value.offsetTop,target:s.target};if(f=s.clientX,p=s.clientY,c)if(a)if(y)fe(y,r);else if(v)de(v,r);else if(x)ge(x,r);else if(m)i.handleDragMeshTransform({mesh:m,mouse:r,onTransform(){const{x:t,y:o,xType:s,yType:i}=n.update({originElement:m,targetElements:e});return{x:t,y:o,xType:s,yType:i}}});else{const{type:e}=l;switch(e){case"content":m=a;break;case"scale-xy":y=a;break;case"scale-x":v=a;break;case"scale-y":x=a;break}}else o.update({x:r.x,y:r.y,targetElements:e})})),document.addEventListener("mouseup",(()=>{c=!1,a=null,l=null,m=null,y=null,v=null,x=null,i.clear(),o.clear(),n.clear();const t=o.getCollectElements();if(t.length){const{x:n,y:o,width:s,height:i}=pe(t),a=new re({x:n,y:o,width:s,height:i,children:t});for(let l=0;l<t.length;l++){const s=t[l];for(let t=0;t<e.length;t++){const i=e[t];i===s&&(i.setPosition(i.state.x-n,i.state.y-o),i.unHover(),i.inoperable(),i.blur(),e.splice(t,1),t--)}}a.temporary(),a.focus(),e.push(a)}})),{parent:t,elements:e,handleChangeImage:b,handleStartChangeText:w,handleChangeText:C,handleFocus:h,handleMousedown:u,handleHover:d,handleUnHover:g,handleAddMesh:M,handleDownload:_}}};const ve=(0,a.Z)(ye,[["render",x]]);var xe=ve;const be=[{path:"/",name:"home",component:xe}],we=(0,h.p7)({history:(0,h.r5)(""),routes:be});var Ce=we,Me=n(65),_e=(0,Me.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,o.ri)(c).use(_e).use(Ce).mount("#app")}},t={};function n(o){var s=t[o];if(void 0!==s)return s.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,s,i){if(!o){var a=1/0;for(h=0;h<e.length;h++){o=e[h][0],s=e[h][1],i=e[h][2];for(var l=!0,r=0;r<o.length;r++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[r])}))?o.splice(r--,1):(l=!1,i<a&&(a=i));if(l){e.splice(h--,1);var c=s();void 0!==c&&(t=c)}}return t}i=i||0;for(var h=e.length;h>0&&e[h-1][2]>i;h--)e[h]=e[h-1];e[h]=[o,s,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,i,a=o[0],l=o[1],r=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(s in l)n.o(l,s)&&(n.m[s]=l[s]);if(r)var h=r(n)}for(t&&t(o);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(h)},o=self["webpackChunkeditor"]=self["webpackChunkeditor"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4314)}));o=n.O(o)})();
//# sourceMappingURL=app.71714441.js.map