(self["webpackChunkmy_profile"]=self["webpackChunkmy_profile"]||[]).push([[67],{4803:function(t,e,r){"use strict";r.d(e,{V:function(){return i}});class i{constructor({imgUrl:t=null,title:e=null,codeUrl:r=null,workUrl:i=null,readmeUrl:s=null,used:a=null,comment:n=null}){this.imgUrl=t,this.title=e,this.codeUrl=r,this.workUrl=i,this.readmeUrl=s,this.used=a,this.comment=n}}},699:function(t,e,r){"use strict";r.d(e,{Z:function(){return F}});var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"workCard"},[null==t.work.imgUrl?i("v-img",{attrs:{src:r(5589)}}):i("v-img",{attrs:{src:t.imgSrc,"lazy-src":r(5589)}}),i("v-card-title",{staticClass:"title"},[i("b",[t._v(t._s(t.work.title))])]),null!==t.work.workUrl?i("div",{staticClass:"text"},[i("a",{attrs:{href:t.work.workUrl,target:"_blank",rel:"noopener noreferrer"}},[t._v("作品")]),i("font-awesome-icon",{attrs:{icon:"fa-solid fa-arrow-up-right-from-square"}})],1):t._e(),null!==t.work.readmeUrl?i("div",{staticClass:"text"},[i("a",{attrs:{href:t.work.readmeUrl,target:"_blank",rel:"noopener noreferrer"}},[t._v("readme(詳細)")]),i("font-awesome-icon",{attrs:{icon:"fa-solid fa-arrow-up-right-from-square"}})],1):t._e(),null!==t.work.codeUrl?i("div",{staticClass:"text"},[i("a",{attrs:{href:t.work.codeUrl,target:"_blank",rel:"noopener noreferrer"}},[t._v("コード")]),i("font-awesome-icon",{attrs:{icon:"fa-solid fa-arrow-up-right-from-square"}})],1):t._e(),null!==t.work.used?i("div",{staticClass:"text"},[i("p",[t._v("使用したフレームワークなど")]),i("ul",t._l(t.work.used,(function(e,r){return i("li",{key:r},[t._v(" "+t._s(e)+" ")])})),0)]):t._e(),null!==t.work.comment?i("div",[i("v-card-actions",{on:{click:function(e){t.show=!t.show}}},[i("p",[t._v("軽いコメント")]),i("v-spacer"),i("v-btn",{attrs:{icon:""}},[i("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),i("v-expand-transition",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[i("v-divider"),i("v-card-text",{staticClass:"comments"},[i("div",{domProps:{innerHTML:t._s(t.markdownText)}})])],1)])],1):t._e()],1)},s=[],a=r(7441);a.TU.setOptions({breaks:!0,gfm:!0});var n={name:"WorkCardComponent",data(){return{show:!1,markdownText:a.TU.parse(this.work.comment)}},props:["work"],computed:{imgSrc(){return r(5459)("./"+this.work.imgUrl)}}},o=n,l=r(1001),c=r(3453),h=r.n(c),d=r(5776),u=r(1239),g=r(144),m=r(5827),p=r(8083),v=r(6952),f=r(3536),_=r(1431),k=r(8085),b=r(4589),y=r(3325);const S=(0,y.Z)(v.Z,(0,f.d)(["absolute","fixed","top","bottom"]),_.Z,k.Z);var w=S.extend({name:"v-progress-linear",directives:{intersect:p.Z},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:(0,b.kb)(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:(0,b.kb)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:t,[this.isReversed?"right":"left"]:(0,b.kb)(this.normalizedValue,"%"),width:(0,b.kb)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?m.Z5:m.Qn},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=(0,b.kb)(this.normalizedBuffer,"%")),t}},methods:{genContent(){const t=(0,b.z9)(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners(){const t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){if(!this.reactive)return;const{width:e}=this.$el.getBoundingClientRect();this.internalValue=t.offsetX/e*100},onObserve(t,e,r){this.isVisible=r},normalize(t){return t<0?0:t>100?100:parseFloat(t)}},render(t){const e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?(0,b.kb)(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),C=w,z=g.Z.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(C,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),B=r(3956),x=(0,y.Z)(z,B.Z,u.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...B.Z.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...u.Z.options.computed.classes.call(this)}},styles(){const t={...u.Z.options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=z.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:r}=this.generateRouteLink();return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}});const $=(0,b.Ji)("v-card__actions"),E=((0,b.Ji)("v-card__subtitle"),(0,b.Ji)("v-card__text")),V=(0,b.Ji)("v-card__title");var Z=k.Z.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}}),U=r(6428),L=r(2529),R=(0,y.Z)(L.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},(0,b.z9)(this))}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),W=R,T=r(6290),N=r(1824);const O="undefined"!==typeof window&&"IntersectionObserver"in window;var I=(0,y.Z)(W,k.Z).extend({name:"v-img",directives:{intersect:p.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const r=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[r]):r}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,r){if(!O||r||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,N.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const r=()=>{const{naturalHeight:i,naturalWidth:s}=t;i||s?(this.naturalWidth=s,this.calculatedAspectRatio=s/i):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(r,e)};r()},genContent(){const t=W.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){const t=(0,b.z9)(this,"placeholder");if(t){const e=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},t)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},e):e[0]}}},render(t){const e=W.options.render.call(this,t),r=(0,T.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:O?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,r,e.children)}}),P=(r(8582),(0,b.Ji)("spacer","div","v-spacer")),A=(0,l.Z)(o,i,s,!1,null,"754efcbe",null),F=A.exports;h()(A,{VBtn:d.Z,VCard:x,VCardActions:$,VCardText:E,VCardTitle:V,VDivider:Z,VExpandTransition:m.Fx,VIcon:U.Z,VImg:I,VSpacer:P})},5459:function(t,e,r){var i={"./loading.png":5727,"./no_image.jpg":5589,"./originalWorks/Tetris.png":2467,"./originalWorks/blackJack.png":2078,"./originalWorks/gobblet.png":6291,"./originalWorks/knowledge-sharing-bord.png":4091,"./originalWorks/my-profile.png":7412,"./originalWorks/my-wiki.png":6989,"./paiza.png":4001};function s(t){var e=a(t);return r(e)}function a(t){if(!r.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=a,t.exports=s,s.id=5459},5589:function(t,e,r){"use strict";t.exports=r.p+"img/no_image.e183d412.jpg"},2467:function(t,e,r){"use strict";t.exports=r.p+"img/Tetris.d8e0fffc.png"},2078:function(t,e,r){"use strict";t.exports=r.p+"img/blackJack.01890607.png"},6291:function(t,e,r){"use strict";t.exports=r.p+"img/gobblet.f00aaf8f.png"},4091:function(t,e,r){"use strict";t.exports=r.p+"img/knowledge-sharing-bord.5220e9a2.png"},7412:function(t,e,r){"use strict";t.exports=r.p+"img/my-profile.38b88216.png"},6989:function(t,e,r){"use strict";t.exports=r.p+"img/my-wiki.f6e92a8e.png"}}]);
//# sourceMappingURL=67.53780d43.js.map