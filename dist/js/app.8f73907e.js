(function(){"use strict";var e={1546:function(e,t,A){var n=A(9242),o=A(3396);function s(e,t){const A=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(A)}var i=A(89);const a={},l=(0,i.Z)(a,[["render",s]]);var r=l,h=A(2483);const c={class:"home-view"},u={class:"home-view__header"},g=(0,o._)("img",{class:"home-view__logo",src:"https://st0.dancf.com/static/02/202301130825-f513.png"},null,-1),d={class:"home-view__body"},f={class:"home-view__left"},m={class:"home-view__content"},p={class:"home-view__editor",ref:"parent"},w={class:"home-view__right"},B={key:0,class:"home-view__font-bar"},y={key:1};function v(e,t,A,n,s,i){const a=(0,o.up)("ImageElementComponent"),l=(0,o.up)("TextElementComponent"),r=(0,o.up)("GroupElementComponent"),h=(0,o.up)("Input"),v=(0,o.up)("SelectOption"),E=(0,o.up)("Select");return(0,o.wg)(),(0,o.iD)("div",c,[(0,o._)("div",u,[g,(0,o._)("button",{onClick:t[0]||(t[0]=(...e)=>n.handleDownload&&n.handleDownload(...e))},"下载")]),(0,o._)("div",d,[(0,o._)("div",f,[(0,o._)("button",{onClick:t[1]||(t[1]=e=>n.handleAddMesh("image"))},"添加图片"),(0,o._)("button",{onClick:t[2]||(t[2]=e=>n.handleAddMesh("text"))},"添加文字")]),(0,o._)("div",m,[(0,o._)("div",p,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.elements,((e,t)=>((0,o.wg)(),(0,o.iD)(o.HY,{key:t},["image"===e.elementType?((0,o.wg)(),(0,o.j4)(a,(0,o.dG)({key:0},e.state,{onDragBefore:t=>n.handleMousedown(t,e),onChangeImage:t=>n.handleChangeImage(t,e),onMouseenter:t=>n.handleHover(t,e),onMouseleave:t=>n.handleUnHover(t,e),onFocus:t=>n.handleFocus(t,e)}),null,16,["onDragBefore","onChangeImage","onMouseenter","onMouseleave","onFocus"])):"text"===e.elementType?((0,o.wg)(),(0,o.j4)(l,(0,o.dG)({key:1},e.state,{onDragBefore:t=>n.handleMousedown(t,e),onStartChangeText:t=>n.handleStartChangeText(t,e),onChangeText:t=>n.handleChangeText(t,e),onUpdateWidth:t=>e.setWidth(t),onUpdateHeight:t=>e.setHeight(t),onMouseenter:t=>n.handleHover(t,e),onMouseleave:t=>n.handleUnHover(t,e),onFocus:t=>n.handleFocus(t,e)}),null,16,["onDragBefore","onStartChangeText","onChangeText","onUpdateWidth","onUpdateHeight","onMouseenter","onMouseleave","onFocus"])):"group"===e.elementType?((0,o.wg)(),(0,o.j4)(r,(0,o.dG)({key:2},e.state,{onDragBefore:t=>n.handleMousedown(t,e),onMouseenter:t=>n.handleHover(t,e),onMouseleave:t=>n.handleUnHover(t,e),onFocus:t=>n.handleFocus(t,e)}),null,16,["onDragBefore","onMouseenter","onMouseleave","onFocus"])):(0,o.kq)("",!0)],64)))),128))],512)]),(0,o._)("div",w,[n.editElement&&"text"===n.editElement.elementType?((0,o.wg)(),(0,o.iD)("div",B,[(0,o._)("div",null,[(0,o.Wm)(h,{value:n.editElement.state.x.toFixed(2)},{addonBefore:(0,o.w5)((()=>[(0,o.Uk)("X")])),_:1},8,["value"]),(0,o.Wm)(h,{value:n.editElement.state.y.toFixed(2)},{addonBefore:(0,o.w5)((()=>[(0,o.Uk)("Y")])),_:1},8,["value"])]),(0,o.Wm)(h,{value:n.editElement.state.text,onChange:n.handleChangeFontText},{addonBefore:(0,o.w5)((()=>[(0,o.Uk)("内容")])),_:1},8,["value","onChange"]),(0,o.Wm)(E,{value:n.editElement.state.fontFamily,class:"home-view__font-family",onChange:n.handleChangeFontFamily},{addonBefore:(0,o.w5)((()=>[(0,o.Uk)("X")])),default:(0,o.w5)((()=>[(0,o.Wm)(v,{value:"serif"},{default:(0,o.w5)((()=>[(0,o.Uk)("serif")])),_:1}),(0,o.Wm)(v,{value:"fangsong"},{default:(0,o.w5)((()=>[(0,o.Uk)("仿宋")])),_:1})])),_:1},8,["value","onChange"]),(0,o.Wm)(E,{value:n.editElement.state.fontSize,class:"home-view__font-family",onChange:n.handleChangeFontSize},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{value:14},{default:(0,o.w5)((()=>[(0,o.Uk)("14px")])),_:1}),(0,o.Wm)(v,{value:20},{default:(0,o.w5)((()=>[(0,o.Uk)("20px")])),_:1})])),_:1},8,["value","onChange"]),(0,o.Wm)(h,{type:"color",value:n.editElement.state.fontColor,onChange:n.handleChangeFontColor},null,8,["value","onChange"])])):n.editElement&&"image"===n.editElement.elementType?((0,o.wg)(),(0,o.iD)("div",y,[(0,o._)("div",null,[(0,o.Wm)(h,{value:n.editElement.state.x.toFixed(2)},{addonBefore:(0,o.w5)((()=>[(0,o.Uk)("X")])),_:1},8,["value"]),(0,o.Wm)(h,{value:n.editElement.state.y.toFixed(2)},{addonBefore:(0,o.w5)((()=>[(0,o.Uk)("Y")])),_:1},8,["value"]),(0,o.Wm)(h,{value:n.editElement.state.width.toFixed(2)},{addonBefore:(0,o.w5)((()=>[(0,o.Uk)("宽")])),_:1},8,["value"]),(0,o.Wm)(h,{value:n.editElement.state.height.toFixed(2)},{addonBefore:(0,o.w5)((()=>[(0,o.Uk)("高")])),_:1},8,["value"])])])):(0,o.kq)("",!0)])])])}A(7658);var E=A(7139);const x=["src"];function C(e,t,A,n,s,i){const a=(0,o.up)("Border");return(0,o.wg)(),(0,o.j4)(a,{class:(0,E.C_)(e.bem()),visibleBox:e.visibleBox,visibleBoxScale:e.visibleBoxScale,style:(0,E.j5)(e.style),onMousedownScale:t[3]||(t[3]=t=>e.$emit("drag-before",t))},{default:(0,o.w5)((()=>[(0,o._)("div",{class:(0,E.C_)(e.bem("content")),onMousedown:t[0]||(t[0]=t=>e.$emit("drag-before",{type:"content",e:t})),onClick:t[1]||(t[1]=t=>e.$emit("focus",{type:"content",e:t})),onDblclick:t[2]||(t[2]=t=>e.$emit("change-image",{type:"content",e:t}))},[e.imgSrc?((0,o.wg)(),(0,o.iD)("img",{key:0,src:e.imgSrc},null,8,x)):(0,o.kq)("",!0)],34)])),_:1},8,["class","visibleBox","visibleBoxScale","style"])}function b(e,t){return t?"string"===typeof t?` ${e}--${t}`:Array.isArray(t)?t.reduce(((t,A)=>t+b(e,A)),""):Object.keys(t).reduce(((A,n)=>A+(t[n]?b(e,n):"")),""):""}function Q(e){return(t,A)=>(t&&"string"!==typeof t&&(A=t,t=""),t=t?`${e}__${t}`:e,`${t}${b(t,A)}`)}function M(e){const t=e;return[t,Q(t)]}function F(e,t,A,n,s,i){return(0,o.wg)(),(0,o.iD)("div",{class:(0,E.C_)(e.bem({"visible-box":e.visibleBox}))},[(0,o.WI)(e.$slots,"default"),e.visibleBox&&e.visibleBoxScale?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[(0,o._)("div",{class:(0,E.C_)(e.bem("circular","left-top")),onMousedown:t[0]||(t[0]=t=>e.$emit("mousedown-scale",{type:"scale-xy",e:e.e}))},null,34),(0,o._)("div",{class:(0,E.C_)(e.bem("circular","right-top")),onMousedown:t[1]||(t[1]=t=>e.$emit("mousedown-scale",{type:"scale-xy",e:t}))},null,34),(0,o._)("div",{class:(0,E.C_)(e.bem("circular","right-bottom")),onMousedown:t[2]||(t[2]=t=>e.$emit("mousedown-scale",{type:"scale-xy",e:t}))},null,34),(0,o._)("div",{class:(0,E.C_)(e.bem("circular","left-bottom")),onMousedown:t[3]||(t[3]=t=>e.$emit("mousedown-scale",{type:"scale-xy",e:t}))},null,34),e.visibleBoxScaleY?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[(0,o._)("div",{class:(0,E.C_)(e.bem("rect","top")),onMousedown:t[4]||(t[4]=t=>e.$emit("mousedown-scale",{type:"scale-y",e:t}))},null,34),(0,o._)("div",{class:(0,E.C_)(e.bem("rect","bottom")),onMousedown:t[5]||(t[5]=t=>e.$emit("mousedown-scale",{type:"scale-y",e:t}))},null,34)],64)):(0,o.kq)("",!0),(0,o._)("div",{class:(0,E.C_)(e.bem("rect","right")),onMousedown:t[6]||(t[6]=t=>e.$emit("mousedown-scale",{type:"scale-x",e:t}))},null,34),(0,o._)("div",{class:(0,E.C_)(e.bem("rect","left")),onMousedown:t[7]||(t[7]=t=>e.$emit("mousedown-scale",{type:"scale-x",e:t}))},null,34)],64)):(0,o.kq)("",!0)],2)}const I=5,Y=10,D=1,R=10,U=16,k=10,[S,T]=M("border");var G=(0,o.aZ)({name:S,props:{visibleBox:{type:Boolean,default:!1},visibleBoxScale:{type:Boolean,default:!1},visibleBoxScaleY:{type:Boolean,default:!0}},setup(){return{bem:T,BORDER_WIDTH:D,BORDER_CIRCULAR_SIZE:R,BORDER_RECT_WIDTH:U,BORDER_RECT_HEIGHT:k}}});const X=(0,i.Z)(G,[["render",F]]);var Z=X;const[H,W]=M("image-element");var O=(0,o.aZ)({name:H,components:{Border:Z},props:{width:{type:Number,default:0},height:{type:Number,default:0},x:{type:Number,default:0},y:{type:Number,default:0},zIndex:{type:Number,default:null},imgSrc:{type:String,default:""},hover:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},operable:{type:Boolean,default:!0}},setup(e){const t=(0,o.Fl)((()=>e.hover||e.focus)),A=(0,o.Fl)((()=>e.focus&&e.operable)),n=(0,o.Fl)((()=>({width:e.width+"px",height:e.height+"px",transform:`translate(${e.x}px, ${e.y}px)`,zIndex:e.zIndex})));return{visibleBox:t,visibleBoxScale:A,style:n,bem:W}}});const j=(0,i.Z)(O,[["render",C]]);var P=j;function K(e,t,A,n,s,i){const a=(0,o.up)("ImageElement"),l=(0,o.up)("TextElement"),r=(0,o.up)("Border");return(0,o.wg)(),(0,o.j4)(r,{class:(0,E.C_)(e.bem()),visibleBox:e.visibleBox,visibleBoxScale:e.visibleBoxScale,style:(0,E.j5)(e.style),onMousedownScale:t[2]||(t[2]=t=>e.$emit("drag-before",t))},{default:(0,o.w5)((()=>[(0,o._)("div",{class:(0,E.C_)(e.bem("content")),onMousedown:t[0]||(t[0]=t=>e.$emit("drag-before",{type:"content",e:t})),onClick:t[1]||(t[1]=t=>e.$emit("focus",{type:"content",e:t}))},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.children,((e,t)=>((0,o.wg)(),(0,o.iD)(o.HY,{key:t},["image"===e.elementType?((0,o.wg)(),(0,o.j4)(a,(0,E.vs)((0,o.dG)({key:0},e.state)),null,16)):"text"===e.elementType?((0,o.wg)(),(0,o.j4)(l,(0,E.vs)((0,o.dG)({key:1},e.state)),null,16)):(0,o.kq)("",!0)],64)))),128))],34)])),_:1},8,["class","visibleBox","visibleBoxScale","style"])}function N(e,t,A,s,i,a){const l=(0,o.up)("Border");return(0,o.wg)(),(0,o.j4)(l,{class:(0,E.C_)(e.bem()),visibleBox:e.visibleBox,visibleBoxScale:e.visibleBoxScale,visibleBoxScaleY:!1,style:(0,E.j5)(e.style),onMousedownScale:t[3]||(t[3]=t=>e.$emit("drag-before",t))},{default:(0,o.w5)((()=>[(0,o._)("div",{class:(0,E.C_)(e.bem("content")),onMousedown:t[1]||(t[1]=t=>e.$emit("drag-before",{type:"content",e:t})),onClick:t[2]||(t[2]=(...t)=>e.handleClick&&e.handleClick(...t))},[(0,o._)("div",{class:(0,E.C_)(e.bem("input",{visible:e.edit})),ref:"input",contenteditable:!0,style:(0,E.j5)(e.textStyle),onInput:t[0]||(t[0]=(...t)=>e.handleInput&&e.handleInput(...t))},(0,E.zw)(e.text),39),(0,o.wy)((0,o._)("div",{class:(0,E.C_)(e.bem("text")),style:(0,E.j5)(e.textStyle)},(0,E.zw)(e.text),7),[[n.F8,!e.edit]])],34)])),_:1},8,["class","visibleBox","visibleBoxScale","style"])}var z=A(4870);const[L,V]=M("text-element");var q=(0,o.aZ)({name:L,components:{Border:Z},props:{width:{type:Number,default:0},height:{type:Number,default:0},x:{type:Number,default:0},y:{type:Number,default:0},zIndex:{type:Number,default:null},fontSize:{type:Number,default:null},fontColor:{type:String,default:null},fontFamily:{type:String,default:null},text:{type:String,default:""},edit:{type:Boolean,default:!1},hover:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},operable:{type:Boolean,default:!0}},setup(e,{emit:t}){const A=(0,o.Fl)((()=>e.hover||e.focus)),n=(0,o.Fl)((()=>e.focus&&e.operable)),s=(0,z.iH)(null),i=(0,o.Fl)((()=>({width:e.width+"px",height:e.height+"px",transform:`translate(${e.x}px, ${e.y}px)`,zIndex:e.zIndex}))),a=(0,o.Fl)((()=>({fontSize:e.fontSize+"px",fontFamily:e.fontFamily,lineHeight:e.fontSize+"px",color:e.fontColor})));function l(A){e.focus&&!e.edit?(t("start-change-text",{type:"content",e:A}),(0,o.Y3)((()=>{s.value.focus();const e=document.createRange();e.selectNodeContents(s.value),window.getSelection().removeAllRanges(),window.getSelection().addRange(e)}))):t("focus",{type:"content",e:A})}function r(){t("update-height",s.value.offsetHeight)}function h(){t("update-width",s.value.offsetWidth)}function c(e){t("change-text",e.target.textContent),r()}return(0,o.bv)((()=>{h(),r()})),{visibleBox:A,visibleBoxScale:n,input:s,handleClick:l,handleInput:c,style:i,textStyle:a,bem:V}}});const J=(0,i.Z)(q,[["render",N]]);var _=J;const[$,ee]=M("group-element");var te=(0,o.aZ)({name:$,components:{Border:Z,ImageElement:P,TextElement:_},props:{width:{type:Number,default:0},height:{type:Number,default:0},x:{type:Number,default:0},y:{type:Number,default:0},zIndex:{type:Number,default:null},hover:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},operable:{type:Boolean,default:!0},children:{type:Array,default:()=>[]}},setup(e){const t=(0,o.Fl)((()=>e.hover||e.focus)),A=(0,o.Fl)((()=>e.focus&&e.operable)),n=(0,o.Fl)((()=>({width:e.width+"px",height:e.height+"px",transform:`translate(${e.x}px, ${e.y}px)`,zIndex:e.zIndex})));return{visibleBox:t,visibleBoxScale:A,style:n,bem:ee}}});const Ae=(0,i.Z)(te,[["render",K]]);var ne=Ae,oe=A(4640),se=A(5930);class ie{constructor({width:e,height:t,$parent:A}){const n=document.createElement("canvas");n.width=e,n.height=t,n.style.position="absolute",n.style.top="0",n.style.left="0",n.style.zIndex="9",n.style.pointerEvents="none",A.appendChild(n),this.canvas=n,this.ctx=n.getContext("2d")}drawXLine(e){const{ctx:t,canvas:A}=this;t.beginPath(),t.moveTo(0,e),t.lineTo(A.width,e),t.strokeStyle="#F56C6C",t.lineWidth=1,t.stroke(),t.closePath()}drawYLine(e){const{ctx:t,canvas:A}=this;t.beginPath(),t.moveTo(e,0),t.lineTo(e,A.height),t.strokeStyle="#F56C6C",t.lineWidth=1,t.stroke(),t.closePath()}clear(){const{ctx:e,canvas:t}=this;e.clearRect(0,0,t.width,t.height)}updateAdsorptionX({originX:e,originCenterX:t,originRightX:A,targetX:n,targetCenterX:o,targetRightX:s}){return Math.abs(t-o)<I?{type:"center",value:o}:Math.abs(t-n)<I?{type:"center",value:n}:Math.abs(t-s)<I?{type:"center",value:s}:Math.abs(e-o)<I?{type:"left",value:o}:Math.abs(e-s)<I?{type:"left",value:s}:Math.abs(e-n)<I?{type:"left",value:n}:Math.abs(A-o)<I?{type:"right",value:o}:Math.abs(A-n)<I?{type:"right",value:n}:Math.abs(A-s)<I?{type:"right",value:s}:null}updateAdsorptionY({originY:e,originCenterY:t,originRightY:A,targetY:n,targetCenterY:o,targetRightY:s}){return Math.abs(t-o)<I?{type:"center",value:o}:Math.abs(t-n)<I?{type:"center",value:n}:Math.abs(t-s)<I?{type:"center",value:s}:Math.abs(e-o)<I?{type:"top",value:o}:Math.abs(e-s)<I?{type:"top",value:s}:Math.abs(e-n)<I?{type:"top",value:n}:Math.abs(A-o)<I?{type:"bottom",value:o}:Math.abs(A-n)<I?{type:"bottom",value:n}:Math.abs(A-s)<I?{type:"bottom",value:s}:null}update({originElement:e,targetElements:t}){let A=null,n=null;for(let o=0;o<t.length;o++){const s=t[o];if(s===e)continue;const{x:i,y:a}=e.getPosition(),{x:l,y:r}=e.getCenterPosition(),{x:h,y:c}=e.getRightPosition(),{x:u,y:g}=s.getPosition(),{x:d,y:f}=s.getCenterPosition(),{x:m,y:p}=s.getRightPosition(),w=this.updateAdsorptionX({originX:i,originCenterX:l,originRightX:h,targetX:u,targetCenterX:d,targetRightX:m}),B=this.updateAdsorptionY({originY:a,originCenterY:r,originRightY:c,targetY:g,targetCenterY:f,targetRightY:p});w&&(A=w),B&&(n=B)}return this.clear(),A&&this.drawYLine(A.value),n&&this.drawXLine(n.value),{xType:A?A.type:null,yType:n?n.type:null,x:A?A.value:null,y:n?n.value:null}}}function ae({x1:e,y1:t,width1:A,height1:n,x2:o,y2:s,width2:i,height2:a}){const l=[{x:e,y:t},{x:e+A,y:t},{x:e,y:t+n},{x:e+A,y:t+n}];for(let r=0;r<l.length;r++){const e=l[r];if(e.x>o&&e.x<o+i&&e.y>s&&e.y<s+a)return!0}return!1}class le{constructor({width:e,height:t,$parent:A}){const n=document.createElement("canvas");n.width=e,n.height=t,n.style.position="absolute",n.style.top="0",n.style.left="0",n.style.zIndex="9",n.style.pointerEvents="none",A.appendChild(n),this.canvas=n,this.ctx=n.getContext("2d")}ready({originX:e,originY:t}){this.originX=e,this.originY=t,this.collectElements=[]}update({x:e,y:t,targetElements:A}){this.clear();const{ctx:n,originX:o,originY:s}=this,i=e-o,a=t-s;let l,r,h,c;i<0?(l=e,h=-i):(l=o,h=i),a<0?(r=t,c=-a):(r=s,c=a),n.strokeStyle="blue",n.lineWidth=1,n.beginPath(),n.strokeRect(l,r,h,c),n.stroke();const u=[];for(let g=0;g<A.length;g++){const e=A[g];ae({x1:e.state.x,y1:e.state.y,width1:e.state.width,height1:e.state.height,x2:l,y2:r,width2:h,height2:c})?(e.inoperable(),e.focus(),u.push(e)):(e.operable(),e.blur())}this.collectElements=u}getCollectElements(){return this.collectElements}clear(){const{ctx:e,canvas:t}=this;e.clearRect(0,0,t.width,t.height)}}class re{constructor(e={}){const{x:t=0,y:A=0,width:n=100,height:o=100,hover:s=!1,focus:i=!1,operable:a=!0,zIndex:l=null}=e;this.state={x:t,y:A,width:n,height:o,hover:s,focus:i,operable:a,zIndex:l}}getPosition(){return{x:this.state.x,y:this.state.y}}getCenterPosition(){const{x:e,y:t}=this.getPosition();return{x:e+this.state.width/2,y:t+this.state.height/2}}getRightPosition(){const{x:e,y:t}=this.getPosition();return{x:e+this.state.width,y:t+this.state.height}}setPosition(e,t){this.setX(e),this.setY(t)}transform(e,t){this.transformX(e),this.transformY(t)}transformX(e){this.setX(this.state.x+e)}transformY(e){this.setY(this.state.y+e)}setX(e){this.state.x=e}setY(e){this.state.y=e}scale(e,t){this.scaleX(e),this.scaleY(t)}scaleX(e){this.setWidth(this.state.width*e)}scaleY(e){this.setHeight(this.state.height*e)}setWidth(e){this.state.width=e}setHeight(e){this.state.height=e}setZIndex(e){this.state.zIndex=e}hover(){this.state.hover=!0}unHover(){this.state.hover=!1}focus(){this.state.focus=!0}blur(){this.state.focus=!1}operable(){this.state.operable=!0}inoperable(){this.state.operable=!1}}function he(e){return new Promise((t=>{if(e.startsWith("data:"))return void t(e);window.URL=window.URL||window.webkitURL;const A=new XMLHttpRequest;A.open("get",e,!0),A.responseType="blob",A.onload=function(){if(200==this.status){const e=this.response,A=new FileReader;A.onloadend=function(e){t(e.target.result)},A.readAsDataURL(e)}},A.send()}))}class ce extends re{constructor({imgSrc:e,...t}){super(t),this.elementType="image",this.setImgSrc(e)}async setImgSrc(e){const t=await he(e);this.state.imgSrc=t}}class ue extends re{constructor({text:e,fontSize:t=24,fontColor:A="#000000",fontFamily:n="fangsong",...o}){super(o),this.elementType="text",this.setFontSize(t),this.setFontColor(A),this.setFontFamily(n),this.setText(e)}setFontColor(e){this.state.fontColor=e}setFontFamily(e){this.state.fontFamily=e}setFontSize(e){this.state.fontSize=e}setText(e){this.state.text=e}startEdit(){this.state.edit=!0}endEdit(){this.state.edit=!1}}class ge extends re{constructor({children:e,...t}){super(t),this.elementType="group",this.add(e)}add(e){this.state.children||(this.state.children=[]),this.state.children.push(...e)}temporary(){this.state.temporary=!0}permanent(){this.state.temporary=!1}}function de({type:e,targetMeshX:t,originMeshX:A,originMeshWidth:n}){switch(e){case"left":return t-A;case"center":return t-A-n/2;case"right":return t-A-n}}function fe({type:e,targetMeshY:t,originMeshY:A,originMeshHeight:n}){switch(e){case"top":return t-A;case"center":return t-A-n/2;case"bottom":return t-A-n}}class me{constructor(){this.clear()}clear(){this.offsetX=0,this.offsetY=0}handleDragMeshTransform({mouse:e,mesh:t,onTransform:A}){const{x:n,y:o,xType:s,yType:i}=A(t),a=e.movementX,l=e.movementY,r=e.x-this.offsetX,h=e.y-this.offsetY;if(0!==this.offsetX&&Math.abs(r)>Y)t.transformX(r),this.offsetX=0;else if(s){const A=de({type:s,targetMeshX:n,originMeshX:t.state.x,originMeshWidth:t.state.width});t.transformX(A),0===this.offsetX&&(this.offsetX=e.x)}else t.transformX(a),this.offsetX=0;if(0!==this.offsetY&&Math.abs(h)>Y)t.transformY(h),this.offsetY=0;else if(i){const A=fe({type:i,targetMeshY:o,originMeshY:t.state.y,originMeshHeight:t.state.height});t.transformY(A),0===this.offsetY&&(this.offsetY=e.y)}else t.transformY(l),this.offsetY=0}}function pe(e,t,A){const{x:n}=e.getCenterPosition(),{width:o}=e.state,{x:s}=t,i=void 0===A?t.movementX:A;s<n?(e.setX(s),e.setWidth(o-i)):s>n&&e.setWidth(o+i)}function we(e,t,A){const{y:n}=e.getCenterPosition(),{height:o}=e.state,{y:s}=t,i=void 0===A?t.movementY:A;s<n?(e.setY(s),e.setHeight(o-i)):s>n&&e.setHeight(o+i)}function Be(e,t,A){const{x:n,y:o}=e.getCenterPosition(),{width:s,height:i}=e.state,{x:a,y:l}=t,r=s/i;if(a<n&&l<o){const t=s-A,n=t/r;e.setWidth(t),e.setHeight(n),e.transformX(s-t),e.transformY(i-n)}else if(a<n&&l>o){const t=s-A,n=t/r;e.setWidth(t),e.setHeight(n),e.transformX(s-t)}else if(a>n&&l<o){const t=s+A,n=t/r;e.setWidth(t),e.setHeight(n),e.transformY(i-n)}else if(a>n&&l>o){const t=s+A,n=t/r;e.setWidth(t),e.setHeight(n)}}function ye(e,t,A){const{width:n,height:o,fontSize:s}=e.state,{x:i}=e.getCenterPosition(),{x:a}=t,l=A/s,r=o/l;if(e.setFontSize(r),e.scaleX(r/s),a<i){const t=n-e.state.width;e.transformX(t)}}function ve(e,t){const{movementY:A,movementX:n}=t;if("text"===e.elementType){const{height:n}=e.state;we(e,t,A),ye(e,t,n)}else Be(e,t,n)}function Ee(e){let t=null,A=null,n=null,o=null;for(let s=0;s<e.length;s++){const i=e[s],{x:a,y:l,width:r,height:h}=i.state;t=null===t?l:Math.min(t,l),A=null===A?a+r:Math.max(A,a+r),n=null===n?l+h:Math.max(n,l+h),o=null===o?a:Math.min(o,a)}return{x:o,y:t,width:A-o,height:n-t}}function xe(){return new Promise((e=>{const t=document.createElement("input");t.type="file",t.click(),t.onchange=()=>{const A=t.files[0],n=new FileReader;n.onload=()=>{const t=new Image;t.src=n.result,t.onload=()=>{e(t)}},n.readAsDataURL(A)}}))}var Ce={name:"home-view",components:{ImageElementComponent:P,GroupElementComponent:ne,TextElementComponent:_,Select:oe.ZP,SelectOption:oe.$m,Input:se.ZP},setup(){const e=(0,z.qj)([]),t=(0,z.iH)(null),A=(0,z.iH)(null);let n=null,s=null,i=null,a=null,l=null,r=!1;const h=new me;function c(e,t){t.focus()}function u(t,n){i=n,A.value=n,a=t;for(let A=0;A<e.length;A++){const t=e[A];t===n?t.setZIndex(1):t.setZIndex(null)}}function g(e,t){t.hover()}function d(e,t){t.unHover()}(0,o.bv)((()=>{t.value.addEventListener("mousedown",(n=>{i||(A.value=null);const o={x:n.clientX-t.value.offsetLeft,y:n.clientY-t.value.offsetTop};for(let t=0;t<e.length;t++){const A=e[t];if(l&&l!==i&&(l.endEdit(),l=null),A!==i&&(A.blur(),"group"===A.elementType&&A.state.temporary)){for(let t=0;t<A.state.children.length;t++){const n=A.state.children[t];n.setPosition(n.state.x+A.state.x,n.state.y+A.state.y),n.operable(),e.push(n)}e.splice(t,1),t--}}r=!0,s.ready({originX:o.x,originY:o.y})})),document.addEventListener("mousemove",(A=>{const o={movementX:A.clientX-f,movementY:A.clientY-m,x:A.clientX-t.value.offsetLeft,y:A.clientY-t.value.offsetTop,target:A.target};if(f=A.clientX,m=A.clientY,r)if(i)if(w)ve(w,o);else if(B)pe(B,o);else if(y)we(y,o);else if(p)h.handleDragMeshTransform({mesh:p,mouse:o,onTransform(){const{x:t,y:A,xType:o,yType:s}=n.update({originElement:p,targetElements:e});return{x:t,y:A,xType:o,yType:s}}});else{const{type:e}=a;switch(e){case"content":p=i;break;case"scale-xy":w=i;break;case"scale-x":B=i;break;case"scale-y":y=i;break}}else s.update({x:o.x,y:o.y,targetElements:e})})),document.addEventListener("mouseup",(()=>{r=!1,i=null,a=null,p=null,w=null,B=null,y=null,h.clear(),s.clear(),n.clear();const t=s.getCollectElements();if(t&&t.length){const{x:A,y:n,width:o,height:s}=Ee(t),i=new ge({x:A,y:n,width:o,height:s,children:t});for(let a=0;a<t.length;a++){const o=t[a];for(let t=0;t<e.length;t++){const s=e[t];s===o&&(s.setPosition(s.state.x-A,s.state.y-n),s.unHover(),s.inoperable(),s.blur(),e.splice(t,1),t--)}}i.temporary(),i.focus(),e.push(i)}})),e.push(new ce({imgSrc:"data:image/jpeg;base64,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",width:100,height:100,x:0,y:0}),new ce({imgSrc:"https://st-gdx.dancf.com/gaodingx/4323/configs/system/20210728-095726-adc9.svg",width:50,height:100,x:100,y:100}),new ue({text:"1是文字，，，a￥！%%……￥aaa hello aa的的",width:200,height:100,x:100,y:200})),n=new ie({width:t.value.offsetWidth,height:t.value.offsetHeight,$parent:t.value}),s=new le({width:t.value.offsetWidth,height:t.value.offsetHeight,$parent:t.value})}));let f=0,m=0,p=null,w=null,B=null,y=null;async function v(e,t){const{width:A,height:n,src:o}=await xe();t.setWidth(A),t.setHeight(n),t.setImgSrc(o)}function E(e,t){l=t,t.startEdit()}function x(e,t){t.setText(e)}function C(t){"image"===t?e.push(new ce({imgSrc:"https://st-gdx.dancf.com/gaodingx/4323/configs/system/20210728-095726-adc9.svg",width:100,height:100,x:0,y:0})):"text"===t&&e.push(new ue({text:"输入一段文字",width:200,height:100,x:100,y:200}))}function b(){const e=t.value.offsetWidth,A=t.value.offsetHeight,n=new Image;n.width=e,n.height=A,n.onload=function(){const t=document.createElement("canvas"),n=t.getContext("2d");t.width=e,t.height=A,n.clearRect(0,0,e,A),n.drawImage(this,0,0,e,A);const o="image/png",s=t.toDataURL(o),i=document.createElement("a");i.download="下载.png",i.href=s,i.dataset.downloadurl=[o,i.download,i.href].join(":"),i.click()},n.onerror=e=>{console.log("error",e)};let o="";const s=document.querySelectorAll("style");for(let t=0;t<s.length-1;t++){const e=s[t];o+=e.innerHTML}n.src=`data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><foreignObject width="${2*e}" height="${2*A}"><body xmlns="http://www.w3.org/1999/xhtml">\n            ${(new XMLSerializer).serializeToString(t.value)}\n            <style>${o}</style></body></foreignObject></svg>`.replace(/\n/g,"").replace(/\t/g,"").replace(/#/g,"%23"),console.log(n.src)}function Q(e){A.value.setFontFamily(e)}function M(e){A.value.setFontSize(e)}function F(e){A.value.setFontColor(e.target.value)}function I(e){A.value.setText(e.target.value)}return{elements:e,parent:t,editElement:A,handleChangeImage:v,handleStartChangeText:E,handleChangeText:x,handleFocus:c,handleMousedown:u,handleHover:g,handleUnHover:d,handleAddMesh:C,handleDownload:b,handleChangeFontFamily:Q,handleChangeFontSize:M,handleChangeFontColor:F,handleChangeFontText:I}}};const be=(0,i.Z)(Ce,[["render",v]]);var Qe=be;const Me=[{path:"/",name:"home",component:Qe}],Fe=(0,h.p7)({history:(0,h.r5)(""),routes:Me});var Ie=Fe,Ye=A(65),De=(0,Ye.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});A(2467);(0,n.ri)(r).use(De).use(Ie).mount("#app")}},t={};function A(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,A),s.exports}A.m=e,function(){var e=[];A.O=function(t,n,o,s){if(!n){var i=1/0;for(h=0;h<e.length;h++){n=e[h][0],o=e[h][1],s=e[h][2];for(var a=!0,l=0;l<n.length;l++)(!1&s||i>=s)&&Object.keys(A.O).every((function(e){return A.O[e](n[l])}))?n.splice(l--,1):(a=!1,s<i&&(i=s));if(a){e.splice(h--,1);var r=o();void 0!==r&&(t=r)}}return t}s=s||0;for(var h=e.length;h>0&&e[h-1][2]>s;h--)e[h]=e[h-1];e[h]=[n,o,s]}}(),function(){A.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return A.d(t,{a:t}),t}}(),function(){A.d=function(e,t){for(var n in t)A.o(t,n)&&!A.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){A.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){A.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};A.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,s,i=n[0],a=n[1],l=n[2],r=0;if(i.some((function(t){return 0!==e[t]}))){for(o in a)A.o(a,o)&&(A.m[o]=a[o]);if(l)var h=l(A)}for(t&&t(n);r<i.length;r++)s=i[r],A.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return A.O(h)},n=self["webpackChunkeditor"]=self["webpackChunkeditor"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=A.O(void 0,[998],(function(){return A(1546)}));n=A.O(n)})();
//# sourceMappingURL=app.8f73907e.js.map