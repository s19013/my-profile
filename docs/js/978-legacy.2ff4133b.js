(self["webpackChunkmy_profile"]=self["webpackChunkmy_profile"]||[]).push([[978],{6790:function(t,e,i){"use strict";var r=i(3157),s=i(6244),n=i(7207),a=i(9974),o=function(t,e,i,c,l,h,d,u){var g,m,v=l,p=0,f=!!d&&a(d,u);while(p<c)p in i&&(g=f?f(i[p],p,e):i[p],h>0&&r(g)?(m=s(g),v=o(t,e,g,m,v,h-1)-1):(n(v+1),t[v]=g),v++),p++;return v};t.exports=o},4944:function(t,e,i){"use strict";var r=i(2109),s=i(6790),n=i(7908),a=i(6244),o=i(9303),c=i(5417);r({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=n(this),i=a(e),r=c(e,0);return r.length=s(r,e,e,i,0,void 0===t?1:o(t)),r}})},3792:function(t,e,i){var r=i(1223);r("flat")},7852:function(t,e,i){"use strict";var r=i(2109),s=i(1702),n=i(1236).f,a=i(7466),o=i(1340),c=i(3929),l=i(4488),h=i(4964),d=i(1913),u=s("".endsWith),g=s("".slice),m=Math.min,v=h("endsWith"),p=!d&&!v&&!!function(){var t=n(String.prototype,"endsWith");return t&&!t.writable}();r({target:"String",proto:!0,forced:!p&&!v},{endsWith:function(t){var e=o(l(this));c(t);var i=arguments.length>1?arguments[1]:void 0,r=e.length,s=void 0===i?r:m(a(i),r),n=o(t);return u?u(e,n,s):g(e,s-n.length,s)===n}})},978:function(t,e,i){"use strict";i.d(e,{Z:function(){return D}});var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{staticClass:"workCard"},[r("div",{staticClass:"photo"},[null==t.work.imgUrl?r("v-img",{attrs:{src:i(5589)}}):r("v-img",{attrs:{src:t.imgSrc}})],1),r("v-card-title",{staticClass:"title"},[r("b",[t._v(t._s(t.work.title))])]),null!==t.work.workUrl?r("div",{staticClass:"text"},[r("a",{attrs:{href:t.work.workUrl}},[t._v("作品")]),r("font-awesome-icon",{attrs:{icon:"fa-solid fa-arrow-up-right-from-square"}})],1):t._e(),null!==t.work.readmeUrl?r("div",{staticClass:"text"},[r("a",{attrs:{href:t.work.readmeUrl}},[t._v("readme")]),r("font-awesome-icon",{attrs:{icon:"fa-solid fa-arrow-up-right-from-square"}})],1):t._e(),null!==t.work.readmeUrl?r("div",{staticClass:"text"},[r("a",{attrs:{href:t.work.codeUrl}},[t._v("コード")]),r("font-awesome-icon",{attrs:{icon:"fa-solid fa-arrow-up-right-from-square"}})],1):t._e(),null!==t.work.comment?r("div",[r("v-card-actions",{on:{click:function(e){t.show=!t.show}}},[r("p",[t._v("コメントを見る")]),r("v-spacer"),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),r("v-expand-transition",[r("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[r("v-divider"),r("v-card-text",{staticClass:"comments"},[r("div",{domProps:{innerHTML:t._s(t.markdownText)}})])],1)])],1):t._e()],1)],1)},s=[],n=i(7441),a={name:"WorkCardComponent",data:function(){return{show:!1,markdownText:n.TU.parse(this.work.comment)}},props:["work"],computed:{imgSrc:function(){return i(5459)("./"+this.work.imgUrl)}}},o=a,c=i(1001),l=i(3453),h=i.n(l),d=i(5776),u=i(4367),g=(i(9653),i(4944),i(3792),i(1239)),m=i(144),v=i(3796),p=(i(9253),i(5827)),f=i(8083),_=i(6952),y=i(3536);function b(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return m.Z.extend({name:"proxyable",model:{prop:t,event:e},props:(0,v.Z)({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:(0,v.Z)({},t,(function(t){this.internalLazyValue=t}))})}var S=b(),k=S,w=i(8085),C=i(4589),z=i(3325),B=(0,z.Z)(_.Z,(0,y.d)(["absolute","fixed","top","bottom"]),k,w.Z),x=B.extend({name:"v-progress-linear",directives:{intersect:f.Z},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:(0,C.kb)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:(0,C.kb)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},(0,v.Z)(t,this.isReversed?"right":"left",(0,C.kb)(this.normalizedValue,"%")),(0,v.Z)(t,"width",(0,C.kb)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),t},classes:function(){return(0,u.Z)({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?p.Z5:p.Qn},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=(0,C.kb)(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=(0,C.z9)(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:(0,v.Z)({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),i=e.width;this.internalValue=t.offsetX/i*100}},onObserve:function(t,e,i){this.isVisible=i},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?(0,C.kb)(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),Z=x,$=m.Z.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(Z,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),V=i(3956),E=(0,z.Z)($,V.Z,g.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return(0,u.Z)((0,u.Z)({"v-card":!0},V.Z.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},g.Z.options.computed.classes.call(this))},styles:function(){var t=(0,u.Z)({},g.Z.options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=$.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),i=e.tag,r=e.data;return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),t(i,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}}),L=(0,C.Ji)("v-card__actions"),W=((0,C.Ji)("v-card__subtitle"),(0,C.Ji)("v-card__text")),R=(0,C.Ji)("v-card__title"),N=w.Z.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:(0,u.Z)({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:(0,u.Z)({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}}),T=i(6428),I=i(9726),O=(i(9600),i(7852),i(6755),i(2529)),P=(0,z.Z)(O.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},(0,C.z9)(this))}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),A=P,U=i(6290),F=i(1824),j="undefined"!==typeof window&&"IntersectionObserver"in window,q=(0,z.Z)(A,w.Z).extend({name:"v-img",directives:{intersect:f.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===(0,I.Z)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!j||i||this.eager){if(this.normalisedSrc.lazySrc){var r=new Image;r.src=this.normalisedSrc.lazySrc,this.pollForSize(r,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){(0,F.Kd)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),e.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=function r(){var s=t.naturalHeight,n=t.naturalWidth;s||n?(e.naturalWidth=n,e.calculatedAspectRatio=n/s):t.complete||!e.isLoading||e.hasError||null==i||setTimeout(r,i)};r()},genContent:function(){var t=A.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){var t=(0,C.z9)(this,"placeholder");if(t){var e=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},t)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},e):e[0]}}},render:function(t){var e=A.options.render.call(this,t),i=(0,U.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:j?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}}),H=(i(8582),(0,C.Ji)("spacer","div","v-spacer")),J=(0,c.Z)(o,r,s,!1,null,"f1a59bde",null),D=J.exports;h()(J,{VBtn:d.Z,VCard:E,VCardActions:L,VCardText:W,VCardTitle:R,VDivider:N,VExpandTransition:p.Fx,VIcon:T.Z,VImg:q,VSpacer:H})},5459:function(t,e,i){var r={"./no_image.jpg":5589,"./originalWorks/blackJack.png":2078,"./originalWorks/gobblet.png":6291,"./originalWorks/knowledge-sharing-bord.png":4091,"./originalWorks/my-profile.png":7412};function s(t){var e=n(t);return i(e)}function n(t){if(!i.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=n,t.exports=s,s.id=5459},5589:function(t,e,i){"use strict";t.exports=i.p+"img/no_image.a4dc6146.jpg"},2078:function(t,e,i){"use strict";t.exports=i.p+"img/blackJack.b49c0492.png"},6291:function(t,e,i){"use strict";t.exports=i.p+"img/gobblet.f00aaf8f.png"},4091:function(t,e,i){"use strict";t.exports=i.p+"img/knowledge-sharing-bord.2d47d9de.png"},7412:function(t,e,i){"use strict";t.exports=i.p+"img/my-profile.2da321e5.png"}}]);
//# sourceMappingURL=978-legacy.2ff4133b.js.map