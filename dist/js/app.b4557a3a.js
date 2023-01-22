(function(){"use strict";var t={1545:function(t,e,i){var s=i(9242),r=i(3396);function o(t,e){const i=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(i)}var n=i(89);const h={},a=(0,n.Z)(h,[["render",o]]);var l=a,c=i(2483);const d={class:"home-view"},g={class:"home-view__header"},u=(0,r._)("img",{class:"home-view__logo",src:"https://st0.dancf.com/static/02/202301130825-f513.png"},null,-1),y={class:"home-view__body"},f={class:"home-view__left"},p={class:"home-view__content"},m={class:"home-view__editor",ref:"parent"},w=(0,r._)("div",{class:"home-view__right"},null,-1);function x(t,e,i,s,o,n){return(0,r.wg)(),(0,r.iD)("div",d,[(0,r._)("div",g,[u,(0,r._)("button",{onClick:e[0]||(e[0]=(...t)=>s.handleDownload&&s.handleDownload(...t))},"下载")]),(0,r._)("div",y,[(0,r._)("div",f,[(0,r._)("button",{onClick:e[1]||(e[1]=(...t)=>s.handleAddMesh&&s.handleAddMesh(...t))},"添加素材")]),(0,r._)("div",p,[(0,r._)("div",m,null,512)]),w])])}class b{constructor(t){const{plugins:e=[],scene:i=null,camera:s=null,$parent:r=document.body}=t;this.canvas=document.createElement("canvas"),this.canvas.width=i.style.width,this.canvas.height=i.style.height,this.ctx=this.canvas.getContext("2d"),this.$parent=r,this.plugins=e,this.scene=i,this.camera=s,r.appendChild(this.canvas)}installPlugin(){for(let t=0;t<this.plugins.length;t++){const e=this.plugins[t];e.install(this)}}clear(){const{scene:t,ctx:e}=this,{width:i,height:s,backgroundColor:r}=t.style;r?(e.fillStyle=r,e.fillRect(0,0,i,s)):e.clearRect(0,0,i,s)}render(){const{scene:t,ctx:e}=this,{meshes:i}=t;this.clear();for(let s=0;s<i.length;s++){const t=i[s];t.render({ctx:e})}}}class v{}i(7658);class C{constructor(t){const{x:e=0,y:i=0,width:s=500,height:r=500,backgroundColor:o=null}=t;this.position={x:e,y:i},this.style={width:s,height:r,backgroundColor:o},this.meshes=[]}add(t){this.meshes.push(t)}getCenterPosition(){return{x:this.position.x+this.style.width/2,y:this.position.y+this.style.height/2}}getRightPosition(){return{x:this.position.x+this.style.width,y:this.position.y+this.style.height}}}function X({ctx:t,x:e,y:i,radius:s,radians:r}){t.beginPath(),t.arc(e,i,s,0,r),t.fillStyle="#fff",t.fill(),t.stroke()}function Y({ctx:t,x:e,y:i,width:s,height:r}){t.beginPath(),t.fillStyle="#fff",t.strokeRect(e,i,s,r),t.fillRect(e,i,s,r),t.stroke()}class M{constructor(t={}){const{x:e=0,y:i=0,width:s=100,height:r=100,minWidth:o=30,minHeight:n=20,backgroundImage:h=null,radius:a=6,borderWidth:l=2,borderColor:c="#6ccfff",borderRectWidth:d=16,borderRectHeight:g=6,operable:u=!0}=t;this.position={x:e,y:i},this.style={width:s,height:r,minWidth:o,minHeight:n,backgroundImage:h,radius:a,borderWidth:l,borderColor:c,borderRectWidth:d,borderRectHeight:g},this.type={focus:!1,hover:!1,operable:u}}getCenterPosition(){return{x:this.position.x+this.style.width/2,y:this.position.y+this.style.height/2}}getRightPosition(){return{x:this.position.x+this.style.width,y:this.position.y+this.style.height}}setPosition(t,e){this.setX(t),this.setY(e)}setX(t){this.position.x=t}setY(t){this.position.y=t}scale(t,e){this.scaleX(t),this.scaleY(e)}scaleX(t){this.style.width*=t}scaleY(t){this.style.height*=t}setWidth(t){this.style.width=t<this.style.minWidth?this.style.minWidth:t}setHeight(t){this.style.height=t<this.style.minHeight?this.style.minHeight:t}setBackgroundImage(t){this.style.backgroundImage=t}transform(t,e){this.transformX(t),this.transformY(e)}transformX(t){this.position.x+=t}transformY(t){this.position.y+=t}move(t,e){this.position.x=t,this.position.y=e}hover(){this.type.hover=!0}unHover(){this.type.hover=!1}focus(){this.type.focus=!0}blur(){this.type.focus=!1}operable(){this.type.operable=!0}inoperable(){this.type.operable=!1}renderBorder({ctx:t}){const{type:e,style:i,position:s}=this,{focus:r,hover:o,operable:n}=e;if(!r&&!o)return;const{x:h,y:a}=s,{width:l,height:c,radius:d,borderWidth:g,borderColor:u,borderRectWidth:y,borderRectHeight:f}=i,p=h+l,m=a+c;if(t.beginPath(),t.moveTo(h,a),t.lineTo(p,a),t.lineTo(p,m),t.lineTo(h,m),t.lineTo(h,a),t.strokeStyle=u,t.lineWidth=g,t.stroke(),t.closePath(),!r||!n)return;const w=h+l/2,x=a+c/2;t.strokeStyle="#ccc",t.lineWidth=1,Y({ctx:t,x:w-y/2,y:a-f/2,width:y,height:f}),Y({ctx:t,x:p-f/2,y:x-y/2,width:f,height:y}),Y({ctx:t,x:w-y/2,y:a+c-f/2,width:y,height:f}),Y({ctx:t,x:h-f/2,y:x-y/2,width:f,height:y});const b=2*Math.PI;X({ctx:t,x:h,y:a,radius:d,radians:b}),X({ctx:t,x:p,y:a,radius:d,radians:b}),X({ctx:t,x:p,y:m,radius:d,radians:b}),X({ctx:t,x:h,y:m,radius:d,radians:b})}renderBackgroundImage({ctx:t}){const{style:e,position:i}=this,{width:s,height:r,backgroundImage:o}=e;if(!o)return;const{x:n,y:h}=i;t.drawImage(o,n,h,s,r)}render({ctx:t}){this.renderBackgroundImage({ctx:t}),this.renderBorder({ctx:t})}}class R{constructor({width:t,height:e,$parent:i}){const s=new M({width:0,height:0,minWidth:0,minHeight:0,radius:null,borderWidth:1,operable:!1}),r=new v,o=new C({width:t,height:e}),n=new b({scene:o,camera:r,$parent:i});s.focus(),o.add(s),n.canvas.style.position="absolute",n.canvas.style.top="0",n.canvas.style.left="0",n.canvas.style.zIndex="1",n.canvas.style.pointerEvents="none",this.mesh=s,this.collectMeshes=[],this.renderer=n}ready(t,e){this.collectMeshes=[],this.renderer&&(this.mousedownLeft=t,this.mousedownTop=e,this.mesh.move(t,e),this.renderer.canvas.style.display=null)}update(t,e,i){const s=t-this.mousedownLeft,r=e-this.mousedownTop;s<0?(this.mesh.setX(this.mousedownLeft+s),this.mesh.setWidth(-s)):this.mesh.setWidth(s),r<0?(this.mesh.setY(this.mousedownTop+r),this.mesh.setHeight(-r)):this.mesh.setHeight(r),this.collectMeshes=i,this.renderer.render()}hide(){this.renderer&&(this.mesh.setWidth(0),this.mesh.setHeight(0),this.renderer.canvas.style.display="none",this.renderer&&this.renderer.clear())}}const B=5,W=10;class H{constructor({width:t,height:e,$parent:i}){const s=new M({x:0,y:100,width:t,height:.5,minWidth:0,minHeight:0,radius:null,borderWidth:.5,borderColor:"#F56C6C",operable:!1}),r=new M({y:0,x:100,width:.5,height:e,minWidth:0,minHeight:0,radius:null,borderWidth:.5,borderColor:"#F56C6C",operable:!1}),o=new v,n=new C({width:t,height:e}),h=new b({scene:n,camera:o,$parent:i});n.add(s),n.add(r),h.canvas.style.position="absolute",h.canvas.style.top="0",h.canvas.style.left="0",h.canvas.style.zIndex="1",h.canvas.style.pointerEvents="none",this.meshX=s,this.meshY=r,this.renderer=h}ready(){this.renderer&&(this.renderer.canvas.style.display=null)}updateAdsorptionX({meshY:t,originX:e,originCenterX:i,originRightX:s,targetX:r,targetCenterX:o,targetRightX:n}){let h=null;return Math.abs(i-o)<B?(t.focus(),t.setX(o),h="center"):Math.abs(i-r)<B?(t.focus(),t.setX(r),h="center"):Math.abs(i-n)<B?(t.focus(),t.setX(n),h="center"):Math.abs(e-o)<B?(t.focus(),t.setX(o),h="left"):Math.abs(e-n)<B?(t.focus(),t.setX(n),h="left"):Math.abs(e-r)<B?(t.focus(),t.setX(r),h="left"):Math.abs(s-o)<B?(t.focus(),t.setX(o),h="right"):Math.abs(s-r)<B?(t.focus(),t.setX(r),h="right"):Math.abs(s-n)<B&&(t.focus(),t.setX(n),h="right"),{xType:h}}updateAdsorptionY({meshX:t,originY:e,originCenterY:i,originRightY:s,targetY:r,targetCenterY:o,targetRightY:n}){let h=null;return Math.abs(i-o)<B?(t.focus(),t.setY(o),h="center"):Math.abs(i-r)<B?(t.focus(),t.setY(r),h="center"):Math.abs(i-n)<B?(t.focus(),t.setY(n),h="center"):Math.abs(e-o)<B?(t.focus(),t.setY(o),h="top"):Math.abs(e-n)<B?(t.focus(),t.setY(n),h="top"):Math.abs(e-r)<B?(t.focus(),t.setY(r),h="top"):Math.abs(s-o)<B?(t.focus(),t.setY(o),h="bottom"):Math.abs(s-r)<B?(t.focus(),t.setY(r),h="bottom"):Math.abs(s-n)<B&&(t.focus(),t.setY(n),h="bottom"),{yType:h}}update({originMesh:t,targets:e}){this.meshX.blur(),this.meshY.blur();let i=null,s=null;for(let r=0;r<e.length;r++){const o=e[r];if(o===t)continue;const{x:n,y:h}=t.position,{x:a,y:l}=t.getCenterPosition(),{x:c,y:d}=t.getRightPosition(),{x:g,y:u}=o.position,{x:y,y:f}=o.getCenterPosition(),{x:p,y:m}=o.getRightPosition(),w=this.updateAdsorptionX({meshY:this.meshY,originX:n,originCenterX:a,originRightX:c,targetX:g,targetCenterX:y,targetRightX:p}),x=this.updateAdsorptionY({meshX:this.meshX,originY:h,originCenterY:l,originRightY:d,targetY:u,targetCenterY:f,targetRightY:m});w.xType&&(i=w.xType),x.yType&&(s=x.yType)}return this.renderer.render(),{xType:i,yType:s,x:i?this.meshY.position.x:null,y:s?this.meshX.position.y:null}}hide(){this.renderer&&(this.renderer.canvas.style.display="none",this.renderer&&this.renderer.clear())}}function T({type:t,targetMeshX:e,originMeshX:i,originMeshWidth:s}){switch(t){case"left":return e-i;case"center":return e-i-s/2;case"right":return e-i-s}}function k({type:t,targetMeshY:e,originMeshY:i,originMeshHeight:s}){switch(t){case"top":return e-i;case"center":return e-i-s/2;case"bottom":return e-i-s}}class P{constructor(){this.clear()}clear(){this.offsetX=0,this.offsetY=0}handleDragMeshTransform({mouse:t,mesh:e,prevMousedownLeft:i,prevMousedownTop:s,onTransform:r}){const{x:o,y:n,xType:h,yType:a}=r(e),l=t.layerX-i,c=t.layerY-s,d=this.offsetX-t.layerX,g=this.offsetY-t.layerY;if(0!==this.offsetX&&Math.abs(d)>W)e.transformX(-d),this.offsetX=0;else if(h){0===this.offsetX&&(this.offsetX=t.layerX);const i=T({type:h,targetMeshX:o,originMeshX:e.position.x,originMeshWidth:e.style.width});e.transformX(i)}else this.offsetX=0,e.transformX(l);if(0!==this.offsetY&&Math.abs(g)>W)e.transformY(-g),this.offsetY=0;else if(a){0===this.offsetY&&(this.offsetY=t.layerY);const i=k({type:a,targetMeshY:n,originMeshY:e.position.y,originMeshHeight:e.style.height});e.transformY(i)}else this.offsetY=0,e.transformY(c)}}function _({originX:t,originY:e,targetCenterX:i,targetCenterY:s,radius:r}){return Math.pow(t-i,2)+Math.pow(e-s,2)<r*r}function I({originX:t,originY:e,targetX:i,targetY:s,targetWidth:r,targetHeight:o}){return t>i&&t<i+r&&e>s&&e<s+o}function L(t,e){const{x:i,y:s}=e.position,{x:r,y:o}=e.getRightPosition(),n=t.layerX,h=t.layerY,a=n>i&&n<r&&h>s&&h<o;if(e.type.focus&&e.type.operable){const{x:t,y:l}=e.getCenterPosition(),{borderRectWidth:c,borderRectHeight:d,radius:g}=e.style,u=I({originX:n,originY:h,targetX:t-c/2,targetY:s-d/2,targetWidth:c,targetHeight:d}),y=I({originX:n,originY:h,targetX:r-d/2,targetY:l-c/2,targetWidth:d,targetHeight:c}),f=I({originX:n,originY:h,targetX:t-c/2,targetY:o-d/2,targetWidth:c,targetHeight:d}),p=I({originX:n,originY:h,targetX:i-d/2,targetY:l-c/2,targetWidth:d,targetHeight:c}),m=u||y||f||p,w=_({originX:n,originY:h,targetCenterX:i,targetCenterY:s,radius:g}),x=_({originX:n,originY:h,targetCenterX:r,targetCenterY:s,radius:g}),b=_({originX:n,originY:h,targetCenterX:r,targetCenterY:o,radius:g}),v=_({originX:n,originY:h,targetCenterX:i,targetCenterY:o,radius:g}),C=w||x||b||v;return{isCollectContent:a,isCollectBorderRect:m,isCollectTopBorderRect:u,isCollectRightBorderRect:y,isCollectBottomBorderRect:f,isCollectLeftBorderRect:p,isCollectBorderCircular:C,isCollectBorderLeftTopCircular:w,isCollectBorderRightTopCircular:x,isCollectBorderRightBottomCircular:b,isCollectBorderLeftBottomCircular:v}}return{isCollectContent:a,isCollectBorderRect:!1,isCollectTopBorderRect:!1,isCollectRightBorderRect:!1,isCollectBottomBorderRect:!1,isCollectLeftBorderRect:!1,isCollectBorderCircular:!1,isCollectBorderLeftTopCircular:!1,isCollectBorderRightTopCircular:!1,isCollectBorderRightBottomCircular:!1,isCollectBorderLeftBottomCircular:!1}}function D(t,e){const i=[{x:t.position.x,y:t.position.y},{x:t.position.x+t.style.width,y:t.position.y},{x:t.position.x,y:t.position.y+t.style.height},{x:t.position.x+t.style.width,y:t.position.y+t.style.height}];for(let s=0;s<i.length;s++){const t=i[s];if(t.x>e.position.x&&t.x<e.position.x+e.style.width&&t.y>e.position.y&&t.y<e.position.y+e.style.height)return!0}return!1}class E extends M{constructor(t={}){super(t),this.meshes=[],this.createWidth=t.width,this.createHeight=t.height,this.createX=t.x,this.createY=t.y,this.type.temporary=!1}add(t){this.meshes.push(t)}temporary(){this.type.temporary=!0}permanent(){this.type.temporary=!1}}function O(t){let e=null,i=null,s=null,r=null;for(let o=0;o<t.length;o++){const n=t[o],{x:h,y:a}=n.position,{width:l,height:c}=n.style;e=null===e?a:Math.min(e,a),i=null===i?h+l:Math.max(i,h+l),s=null===s?a+c:Math.max(s,a+c),r=null===r?h:Math.min(r,h)}return{x:r,y:e,width:i-r,height:s-e}}function S({groupX:t,groupY:e,groupWidth:i,groupHeight:s,sceneMeshes:r}){const o=document.createElement("canvas");o.width=i,o.height=s;const n=o.getContext("2d");for(let h=0;h<r.length;h++){const i=r[h],{x:s,y:o}=i.position,{backgroundImage:a,width:l,height:c}=i.style;n.drawImage(a,s-t,o-e,l,c)}return o}function $(t,e){const i=[];for(let s=0;s<e.length;s++){const r=e[s];D(r,t.mesh)?(r.focus(),r.hover(),r.inoperable(),i.push(r)):(r.blur(),r.unHover(),r.operable())}return i}function A({collectMeshes:t,scene:e}){const{meshes:i}=e,{x:s,y:r,width:o,height:n}=O(t),h=S({groupX:s,groupY:r,groupWidth:o,groupHeight:n,sceneMeshes:i}),a=new E({x:s,y:r,width:o,height:n,backgroundImage:h});for(let l=0;l<t.length;l++){const e=t[l];for(let t=0;t<i.length;t++){const s=i[t];s===e&&(s.blur(),s.unHover(),a.add(e),i.splice(t,1),t--)}}return a.temporary(),a.focus(),a}function j({sceneMeshes:t,scene:e,originMesh:i}){for(let s=0;s<t.length;s++){const r=t[s];if(r!==i&&r instanceof E&&r.type.temporary){const i=r.style.width/r.createWidth,o=r.style.height/r.createHeight;for(let t=0;t<r.meshes.length;t++){const s=r.meshes[t],n=s.position.x-r.createX,h=s.position.y-r.createY;s.setPosition(Math.round(r.position.x+n*i),Math.round(r.position.y+h*o)),s.setWidth(Math.round(s.style.width*i)),s.setHeight(Math.round(s.style.height*o)),e.add(s)}t.splice(s,1),s--}}}function F(t,e){let i=null;for(let s=0;s<e.length;s++){const r=e[s],{isCollectContent:o}=L(t,r);r.unHover(),o&&!i&&(i=r)}i&&(i.parent||i.operable(),i.hover())}function z(t,e){let i=null;for(let s=0;s<e.length;s++){const r=e[s],{isCollectContent:o,isCollectBorderCircular:n,isCollectBorderRect:h}=L(t,r);r.unHover(),r.blur(),!i&&(o||n||h)&&(i=r)}return i&&(i.parent||i.operable(),i.hover(),i.focus()),i}function U({mouse:t,mesh:e,onDragMeshMove:i,onDragMeshScale:s,onDragMeshScaleX:r,onDragMeshScaleY:o}){const{isCollectBorderCircular:n,isCollectTopBorderRect:h,isCollectRightBorderRect:a,isCollectBottomBorderRect:l,isCollectLeftBorderRect:c}=L(t,e);n?s(e):c||a?r(e):h||l?o(e):i(e)}function Z(t,e,i,s,r){const{x:o,y:n}=t.getCenterPosition(),h=e-s,a=i-r;e<o&&i<n?(t.setX(e),t.setY(i),t.setWidth(t.style.width-h),t.setHeight(t.style.height-a)):e>o&&i<n?(t.setX(e-t.style.width),t.setY(i),t.setWidth(t.style.width+h),t.setHeight(t.style.height-a)):e<o&&i>n?(t.setX(e),t.setY(i-t.style.height),t.setWidth(t.style.width-h),t.setHeight(t.style.height+a)):e>o&&i>n&&(t.setX(e-t.style.width),t.setY(i-t.style.height),t.setWidth(t.style.width+h),t.setHeight(t.style.height+a))}function q(t,e,i){const{x:s}=t.getCenterPosition(),r=e-i;e<s?(t.setX(e),t.setWidth(t.style.width-r)):e>s&&(t.setX(e-t.style.width),t.setWidth(t.style.width+r))}function G(t,e,i){const{y:s}=t.getCenterPosition(),r=e-i;e<s?(t.setY(e),t.setHeight(t.style.height-r)):e>s&&(t.setY(e-t.style.height),t.setHeight(t.style.height+r))}function J(t,e){for(let i=0;i<t.length;i++){const s=t[i];if(s===e){t.splice(i,1);break}}t.push(e)}function K(t,e){for(let i=0;i<e.length;i++){const s=e[i],{isCollectContent:r,isCollectBorderCircular:o,isCollectBorderRect:n}=L(t,s);if(r||o||n)return s}return null}function N(t){return new Promise((e=>{const i=document.createElement("input");i.type="file",i.click(),i.onchange=()=>{const s=i.files[0],r=new FileReader;r.onload=()=>{const i=new Image;i.src=r.result,i.onload=()=>{t.setBackgroundImage(i),t.setWidth(i.width),t.setHeight(i.height),e()}},r.readAsDataURL(s)}}))}const Q={install(t){const{scene:e,canvas:i,$parent:s}=t,{meshes:r}=e,{width:o,height:n}=e.style;let h,a,l,c,d,g,u,y;function f(){h=!1,a=null,l=null,c=null,d=null,g=null,u=null,y=null}f();const p=new R({width:o,height:n,$parent:s}),m=new H({width:o,height:n,$parent:s}),w=new P;document.addEventListener("mousedown",(i=>{h=!0,p.ready(i.layerX,i.layerY),m.ready(),c=z(i,r),c&&J(r,c),r.length&&j({sceneMeshes:r,scene:e,originMesh:c}),t.render()})),i.addEventListener("mousemove",(i=>{if(c)g?Z(g,i.layerX,i.layerY,a,l):u?q(u,i.layerX,a):y?G(y,i.layerY,l):d?w.handleDragMeshTransform({mouse:i,mesh:d,prevMousedownLeft:a,prevMousedownTop:l,onTransform(t){const{x:i,y:s,xType:o,yType:n}=m.update({originMesh:t,targets:r.concat(e)});return{x:i,y:s,xType:o,yType:n}}}):U({mouse:i,mesh:c,onDragMeshMove(){d=c},onDragMeshScale(){g=c},onDragMeshScaleX(){u=c},onDragMeshScaleY(){y=c}});else if(h){const t=$(p,r);p.update(i.layerX,i.layerY,t)}else F(i,r);a=i.layerX,l=i.layerY,t.render()})),document.addEventListener("dblclick",(e=>{const i=K(e,r);i&&N(i).then((()=>t.render()))})),document.addEventListener("keydown",(e=>{if("Backspace"===e.code){for(let t=0;t<r.length;t++){const e=r[t];if(e.type.focus){r.splice(t,1);break}}t.render()}})),document.addEventListener("mouseup",(()=>{f(),w.clear(),p.hide(),m.hide();const{collectMeshes:i}=p;if(i.length){const t=A({collectMeshes:i,scene:e});e.add(t)}t.render()}))}},V=[Q];var tt=i(4870),et={name:"home-view",setup(){const t=(0,tt.iH)(null),e=new Image;let i,s,o=10;function n(){const t=new M({x:50+o,y:50+o,backgroundImage:e,width:e.width,height:e.height});i.add(t),o+=10,s.render()}function h(){const{canvas:t}=s,e=t.toDataURL("image/png",1),i=document.createElement("a");i.download="下载",i.href=e,i.click()}return(0,r.bv)((()=>{e.setAttribute("crossorigin","anonymous"),e.src="https://st-gdx.dancf.com/gaodingx/4323/configs/system/20210728-095726-adc9.svg",e.onload=()=>{const r=new M({backgroundImage:e,width:e.width,height:e.height}),o=new M({x:50,y:50,backgroundImage:e,width:e.width,height:e.height}),n=new v;i=new C({width:400,height:600,backgroundColor:"white"}),s=new b({plugins:[...V],scene:i,camera:n,$parent:t.value}),i.add(r),i.add(o),s.installPlugin(),s.render()}})),{parent:t,handleAddMesh:n,handleDownload:h}}};const it=(0,n.Z)(et,[["render",x]]);var st=it;const rt=[{path:"/",name:"home",component:st}],ot=(0,c.p7)({history:(0,c.r5)(""),routes:rt});var nt=ot,ht=i(65),at=(0,ht.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,s.ri)(l).use(at).use(nt).mount("#app")}},e={};function i(s){var r=e[s];if(void 0!==r)return r.exports;var o=e[s]={exports:{}};return t[s](o,o.exports,i),o.exports}i.m=t,function(){var t=[];i.O=function(e,s,r,o){if(!s){var n=1/0;for(c=0;c<t.length;c++){s=t[c][0],r=t[c][1],o=t[c][2];for(var h=!0,a=0;a<s.length;a++)(!1&o||n>=o)&&Object.keys(i.O).every((function(t){return i.O[t](s[a])}))?s.splice(a--,1):(h=!1,o<n&&(n=o));if(h){t.splice(c--,1);var l=r();void 0!==l&&(e=l)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[s,r,o]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,s){var r,o,n=s[0],h=s[1],a=s[2],l=0;if(n.some((function(e){return 0!==t[e]}))){for(r in h)i.o(h,r)&&(i.m[r]=h[r]);if(a)var c=a(i)}for(e&&e(s);l<n.length;l++)o=n[l],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(c)},s=self["webpackChunkeditor"]=self["webpackChunkeditor"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=i.O(void 0,[998],(function(){return i(1545)}));s=i.O(s)})();
//# sourceMappingURL=app.b4557a3a.js.map