(self["webpackChunkmy_profile"]=self["webpackChunkmy_profile"]||[]).push([[70],{5631:function(t,n,e){"use strict";var i=e(3070).f,r=e(30),a=e(9190),s=e(9974),o=e(5787),u=e(408),l=e(654),c=e(6340),d=e(9781),f=e(2423).fastKey,v=e(9909),h=v.set,p=v.getterFor;t.exports={getConstructor:function(t,n,e,l){var c=t((function(t,i){o(t,v),h(t,{type:n,index:r(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=i&&u(i,t[l],{that:t,AS_ENTRIES:e})})),v=c.prototype,g=p(n),m=function(t,n,e){var i,r,a=g(t),s=y(t,n);return s?s.value=e:(a.last=s={index:r=f(n,!0),key:n,value:e,previous:i=a.last,next:void 0,removed:!1},a.first||(a.first=s),i&&(i.next=s),d?a.size++:t.size++,"F"!==r&&(a.index[r]=s)),t},y=function(t,n){var e,i=g(t),r=f(n);if("F"!==r)return i.index[r];for(e=i.first;e;e=e.next)if(e.key==n)return e};return a(v,{clear:function(){var t=this,n=g(t),e=n.index,i=n.first;while(i)i.removed=!0,i.previous&&(i.previous=i.previous.next=void 0),delete e[i.index],i=i.next;n.first=n.last=void 0,d?n.size=0:t.size=0},delete:function(t){var n=this,e=g(n),i=y(n,t);if(i){var r=i.next,a=i.previous;delete e.index[i.index],i.removed=!0,a&&(a.next=r),r&&(r.previous=a),e.first==i&&(e.first=r),e.last==i&&(e.last=a),d?e.size--:n.size--}return!!i},forEach:function(t){var n,e=g(this),i=s(t,arguments.length>1?arguments[1]:void 0);while(n=n?n.next:e.first){i(n.value,n.key,this);while(n&&n.removed)n=n.previous}},has:function(t){return!!y(this,t)}}),a(v,e?{get:function(t){var n=y(this,t);return n&&n.value},set:function(t,n){return m(this,0===t?0:t,n)}}:{add:function(t){return m(this,t=0===t?0:t,t)}}),d&&i(v,"size",{get:function(){return g(this).size}}),c},setStrong:function(t,n,e){var i=n+" Iterator",r=p(n),a=p(i);l(t,n,(function(t,n){h(this,{type:i,target:t,state:r(t),kind:n,last:void 0})}),(function(){var t=a(this),n=t.kind,e=t.last;while(e&&e.removed)e=e.previous;return t.target&&(t.last=e=e?e.next:t.state.first)?"keys"==n?{value:e.key,done:!1}:"values"==n?{value:e.value,done:!1}:{value:[e.key,e.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),e?"entries":"values",!e,!0),c(n)}}},7710:function(t,n,e){"use strict";var i=e(2109),r=e(7854),a=e(1702),s=e(4705),o=e(8052),u=e(2423),l=e(408),c=e(5787),d=e(614),f=e(111),v=e(7293),h=e(7072),p=e(8003),g=e(9587);t.exports=function(t,n,e){var m=-1!==t.indexOf("Map"),y=-1!==t.indexOf("Weak"),x=m?"set":"add",b=r[t],A=b&&b.prototype,C=b,w={},k=function(t){var n=a(A[t]);o(A,t,"add"==t?function(t){return n(this,0===t?0:t),this}:"delete"==t?function(t){return!(y&&!f(t))&&n(this,0===t?0:t)}:"get"==t?function(t){return y&&!f(t)?void 0:n(this,0===t?0:t)}:"has"==t?function(t){return!(y&&!f(t))&&n(this,0===t?0:t)}:function(t,e){return n(this,0===t?0:t,e),this})},V=s(t,!d(b)||!(y||A.forEach&&!v((function(){(new b).entries().next()}))));if(V)C=e.getConstructor(n,t,m,x),u.enable();else if(s(t,!0)){var Q=new C,I=Q[x](y?{}:-0,1)!=Q,_=v((function(){Q.has(1)})),Z=h((function(t){new b(t)})),S=!y&&v((function(){var t=new b,n=5;while(n--)t[x](n,n);return!t.has(-0)}));Z||(C=n((function(t,n){c(t,A);var e=g(new b,t,C);return void 0!=n&&l(n,e[x],{that:e,AS_ENTRIES:m}),e})),C.prototype=A,A.constructor=C),(_||S)&&(k("delete"),k("has"),m&&k("get")),(S||I)&&k(x),y&&A.clear&&delete A.clear}return w[t]=C,i({global:!0,constructor:!0,forced:C!=b},w),p(C,t),y||e.setStrong(C,t,m),C}},9190:function(t,n,e){var i=e(8052);t.exports=function(t,n,e){for(var r in n)i(t,r,n[r],e);return t}},4553:function(t,n,e){"use strict";var i=e(2109),r=e(2092).findIndex,a=e(1223),s="findIndex",o=!0;s in[]&&Array(1)[s]((function(){o=!1})),i({target:"Array",proto:!0,forced:o},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),a(s)},561:function(t,n,e){"use strict";var i=e(2109),r=e(7908),a=e(1400),s=e(9303),o=e(6244),u=e(7207),l=e(5417),c=e(6135),d=e(5117),f=e(1194),v=f("splice"),h=Math.max,p=Math.min;i({target:"Array",proto:!0,forced:!v},{splice:function(t,n){var e,i,f,v,g,m,y=r(this),x=o(y),b=a(t,x),A=arguments.length;for(0===A?e=i=0:1===A?(e=0,i=x-b):(e=A-2,i=p(h(s(n),0),x-b)),u(x+e-i),f=l(y,i),v=0;v<i;v++)g=b+v,g in y&&c(f,v,y[g]);if(f.length=i,e<i){for(v=b;v<x-i;v++)g=v+i,m=v+e,g in y?y[m]=y[g]:d(y,m);for(v=x;v>x-i+e;v--)d(y,v-1)}else if(e>i)for(v=x-i;v>b;v--)g=v+i-1,m=v+e-1,g in y?y[m]=y[g]:d(y,m);for(v=0;v<e;v++)y[v+b]=arguments[v+2];return y.length=x-i+e,f}})},9098:function(t,n,e){"use strict";var i=e(7710),r=e(5631);i("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},1532:function(t,n,e){e(9098)},8070:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return Y}});var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("v-row",[e("v-btn-toggle",{staticClass:"tags",attrs:{color:"deep-purple accent-3",mandatory:""},model:{value:t.toggle_exclusive,callback:function(n){t.toggle_exclusive=n},expression:"toggle_exclusive"}},[e("v-btn",{staticClass:"v-btn",attrs:{value:"すべて"},on:{click:function(n){return t.filter(null)}}},[t._v("すべて")]),e("v-btn",{staticClass:"v-btn",attrs:{value:"技術"},on:{click:function(n){return t.filter("技術")}}},[t._v("技術")]),e("v-btn",{staticClass:"v-btn",attrs:{value:"興味"},on:{click:function(n){return t.filter("興味")}}},[t._v("興味/関心")]),e("v-btn",{staticClass:"v-btn",attrs:{value:"性格"},on:{click:function(n){return t.filter("性格")}}},[t._v("性格")]),e("v-btn",{staticClass:"v-btn",attrs:{value:"考え"},on:{click:function(n){return t.filter("考え")}}},[t._v("考え")]),e("v-btn",{staticClass:"v-btn",attrs:{value:"過去"},on:{click:function(n){return t.filter("過去")}}},[t._v("過去")]),e("v-btn",{staticClass:"v-btn",attrs:{value:"その他"},on:{click:function(n){return t.filter("その他")}}},[t._v("その他")])],1)],1),t._l(t.QAList,(function(t){return e("div",{key:t.Q},[e("q-a-component",{attrs:{data:t}})],1)}))],2)},r=[],a=e(2032),s=(e(6699),e(2023),e(7327),e(1539),e(2751)),o=e(6133),u=(0,s.Z)((function t(){(0,o.Z)(this,t),this.list=[{tag:["技術","興味"],Q:"興味がある､今後触ってみたい技術や分野は?",A:"\n* nginx\n* apache\n* GraphQL\n* fireBase\n* FastAPi\n* Flutter\n* 機械学習\n* ruby\n* ruby on rails\n* django\n* golang\n* PyScript\n* 低レイヤー\n* C言語\n* GCP\n* セキュリティ\n* 電気工作\n* テスト\n* CI/CD\n* デザイン\n* アルゴリズム\n* aws\n* gcp\n* バーチャルホスト\n* ハードウェア\n                "},{tag:["技術","興味"],Q:"今後作ってみたいもの,技術的にやってみたいことは?",A:"\n* laravelとvueを組み合わせたwebサービス\n* GraphQLを使ったwebサービス\n* 自作api\n* ラインチャットボット\n* サーバーから情報を取ってくるスマホアプリ\n* Flutterを使ったスマホアプリ\n* 自作ゲームに機械学習をしたコンピューターを搭載したい\n* googleが提供しているaiフレームワークでaiを作ってみたい\n* 自分用のブックマーク\n* RasberyPyを使った電気工作\n* awsの他の機能を使ってみたい\n* aws lambdaをつかったサーバーレスapiを作ってみたい\n                "},{tag:["興味"],Q:"技術以外にやってみたいことなどは?",A:"\n* ハックバーに行ってみたい\n* エンジニアカフェにに行ってみたい\n* 国内旅行\n* 海外旅行\n* 寝台列車に乗ってみたい\n* 琵琶湖でウォータースポーツをしたい\n* 地元のリゾートホテルに泊まってみたい\n* 海外で働いてみたい\n* 作曲\n* ドラム演奏\n* ピアノを引けるようになりたい\n* 3Dモデルを作れるようになりたい\n* RPGツクール,unityなどを使った自作ゲーム作り\n* 今まであまり物語系の本を読んで来なかったので読んで行きたい\n* イベントに参加したい\n* ゲームの大会に参加してみたい\n* 心理学を勉強したい\n* 医学を勉強したい\n* 料理科学の勉強したい｡\n* 科学系の知識を身につけたい\n* 科学雑誌とか読んでみたい\n* エンジニア系の雑誌をよんでみたい\n* 経済学を勉強したい\n* お金について勉強したい\n                "},{tag:["技術"],Q:"今はどんな勉強をしていますか?それはなぜですか｡",A:"\nlaravelとvue.jsを主に勉強しています｡  \n  \nlaravelを選んだ理由  \n1つ目:今後はcakePhpよりもlaravelが増えてくるという情報を得たため｡  \n2つ目:求人数がruby on railsより1.2倍多いという情報を得たから  \n3つ目:mvcモデルなので仮にruby on railsを採用している会社に就職しても知識をいかせそうと思ったため  \n4つ目:rubyは一切触ったことがなかったため  \n  \nvueを選んだ理由  \n1つ目:reactより簡単だという情報を得たため  \n  \nlaravelvueに共通する理由  \n1つ目:この2つを採用している会社が多いため  \n"},{tag:["その他"],Q:"今はどんな生活をしている?",A:"\n基本的には,朝昼はudemyや技術書などを参考にサンプルを作ったり｡自分の作品を作ったりしています｡  \n夜はとあるエンジニアコミュニティで雑談などをしています｡  \n時折カンファレンスや輪読会,LT大会に参加しています｡  \n                "},{tag:["その他"],Q:"最近の悩み事は?",A:"\n周りに自分より圧倒的に技術力が高い方､学生時代にサービスを作って運営してる方  \n事業を売却した方､実際に会社を経営している方など優秀な方々がたくさんいて自信をなくしてしまう｡  \n手汗をよくかく｡そして量が多い｡  \n過去を思いだせない｡  \nカジュアル面談で沈黙の時間が多い｡\n雑談がへたで相槌を打ったりリアクションするのに精一杯で話を広げることができない｡\n                "},{tag:["考え","過去"],Q:"なぜ大学ではなく専門学校へいったのですか?",A:"\nものづくりに携わる仕事を目指そうと思い地元の国公立大学の工学部に入りたかったのですが落ちてしまいました｡  \nまた1年浪人することも考えたのですが｡プログラミングでものづくりに携わろう､同じ1年なら別のことを勉強した方が有意義なのではと当時は考え専門学校に入学ことにしました｡\n                "},{tag:["過去","技術"],Q:"学校ではどのようなことを勉強しましたか?",A:"\n思い出せる限りですが\n* linuxコマンド\n* pythonの文法\n* pythonのTikinterを使った作品作り\n* paizaの問題をとく\n* html基礎\n* css基礎\n* sql基礎\n* aws\n* aws lambda\n* webアプリのセキュリティについて\n* 参考書を見ながらAndroidアプリのサンプルを制作\n* アルゴリズム\n* kotlin文法\n* react\n* reactを使った作品作り\n* 資格取得に向けた勉強\n                "},{tag:["過去","技術"],Q:"学校の授業以外ではどんなことをしていましたか?",A:"\n* Unityでサンプルゲームを作った\n* 動画を見ながらBlenderで3dモデルを作ってみた\n* 自作のCLIゲームを作った\n* 授業で使う技術書以外の技術書を読んだ\n    * きたみ式 基本情報\n    * アルゴリズム\n* ビジネス書を読んだ\n    * 正直あまりいかせている気はしない\n                "},{tag:["性格"],Q:"あなたのストレングスファインダーの結果を教えてください",A:"\n1. 収集心\n2. 適応性\n3. 最上志向\n4. 調和性\n5. 慎重さ\n                "},{tag:["性格"],Q:"他人からどんなことを言われたことがある?",A:"\nあくまで第三者から言われたことを並べています｡  \n正誤は自分でもわかりません｡  \n  \n* ゲーマー\n* リーダータイプ\n* サポートタイプ\n* 単独行動が多い\n* 大体一人で動いていることが多い\n* 一人になりたがっている\n* 積極的で真面目\n* 物知り\n* 優しい\n* めんどくさがり\n* 何考えているかわからない\n* 謎\n* 公私は分けるタイプ\n* 興味があることには一生懸命\n* 興味がないことが態度に出ている\n* ユニークな発想ができる\n* マイペース\n* やるべきことはやる\n* 比較的まとも\n* 無害\n                "},{tag:["考え"],Q:"苦手なことは?",A:"\n* デプロイ関係\n* インフラ周り\n* 超高難易度なことを短時間で一切のミスなく終わらせること (例:1ヶ月かかるようなことを1時間で終わらせるなど)\n* 不特定多数に素顔や本名を晒すこと\n    * 特定などの危険､面倒ごとに巻き込まれる可能が高いと考えているので\n* 完全に放置されること\n* 怖い人の相手をすること\n                "},{tag:["考え"],Q:"どんな会社で働きたい?",A:"\n以下の考えに多く一致する会社\n1. 心理的安全性がある会社\n    * 暴力､暴言に怯えなくて良い\n    * お互いを尊重しあう\n    * 意見が言える\n    * 足の引っ張り合いをしない\n    * ピリピリしすぎていないか\n2. なんとなくでも良いので面白そうと思える会社\n3. しっかりと休みが取れる会社\n    * 休んで疲れを取るのも仕事のうちだと考えています\n4. 完全放置をしない会社\n5. 話をかけやすいか人が1でもいるかどうか\n                "},{tag:["考え"],Q:"自分で自分のことどう思う",A:"\nサポートタイプ\n0 -> 1 よりも 1 -> 10のほうが得意だと思います｡\n                "}]})),l=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"FQA"},[e("div",{on:{click:function(n){t.show=!t.show}}},[e("div",{staticClass:"question"},[e("div",{staticClass:"markQ"},[t._v("Q")]),e("p",[t._v(t._s(t.data.Q))]),e("v-btn",{staticClass:"btn",attrs:{icon:""}},[e("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1)]),e("v-expand-transition",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"answer"},[e("div",{staticClass:"markA"},[t._v("A")]),e("div",{domProps:{innerHTML:t._s(t.markdownText)}})])])],1)},c=[],d=e(7441),f={name:"QAComponent",data:function(){return{show:!1,markdownText:d.TU.parse(this.data.A)}},props:["data"]},v=f,h=e(1001),p=e(3453),g=e.n(p),m=e(5776),y=e(5827),x=e(6428),b=(0,h.Z)(v,l,c,!1,null,null,null),A=b.exports;g()(b,{VBtn:m.Z,VExpandTransition:y.Fx,VIcon:x.Z});var C={name:"FQAView",components:{QAComponent:A},data:function(){return{QA:new u,QAList:null,toggle_exclusive:void 0}},methods:{filter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null==t)return this.QAList=this.QA.list;var n,e=[],i=(0,a.Z)(this.QA.list);try{for(i.s();!(n=i.n()).done;){var r=n.value;r.tag.includes(t)&&e.push(r)}}catch(s){i.e(s)}finally{i.f()}return this.QAList=e}},mounted:function(){this.filter(null)}},w=C,k=e(4367),V=(e(9653),e(561),e(4747),e(7042),e(9826),e(4553),e(144)),Q=e(4589),I=V.Z.extend({name:"comparable",props:{valueComparator:{type:Function,default:Q.vZ}}}),_=e(1431),Z=e(8085),S=e(3325),B=e(1824),M=(0,S.Z)(I,_.Z,Z.Z).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return(0,k.Z)({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(n,e){return t.toggleMethod(t.getValue(n,e))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(n){return t.valueComparator(t.internalValue,n)};var n=this.internalValue;return Array.isArray(n)?function(e){return n.some((function(n){return t.valueComparator(n,e)}))}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&(0,B.Kd)("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,n){return void 0===t.value?n:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var n=this,e=this.items.push(t)-1;t.$on("change",(function(){return n.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,e)},unregister:function(t){if(!this._isDestroyed){var n=this.items.indexOf(t),e=this.getValue(t,n);this.items.splice(n,1);var i=this.selectedValues.indexOf(e);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(e);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==e})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,n){var e=this.getValue(t,n);t.isActive=this.toggleMethod(e)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var n=this.items.slice();t&&n.reverse();var e=n.find((function(t){return!t.disabled}));if(e){var i=this.items.indexOf(e);this.updateInternalValue(this.getValue(e,i))}}},updateMultiple:function(t){var n=Array.isArray(this.internalValue)?this.internalValue:[],e=n.slice(),i=e.findIndex((function(n){return n===t}));this.mandatory&&i>-1&&e.length-1<1||null!=this.max&&i<0&&e.length+1>this.max||(i>-1?e.splice(i,1):e.push(t),this.internalValue=e)},updateSingle:function(t){var n=t===this.internalValue;this.mandatory&&n||(this.internalValue=n?void 0:t)}},render:function(t){return t(this.tag,this.genData(),this.$slots.default)}}),j=(M.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}}),M.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return M.options.computed.classes.call(this)}},methods:{genData:M.options.methods.genData}})),T=e(6952),z=(0,S.Z)(j,T.Z).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return(0,k.Z)((0,k.Z)({},j.options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var t=this.setTextColor(this.color,(0,k.Z)({},j.options.methods.genData.call(this)));return this.group?t:this.setBackgroundColor(this.backgroundColor,t)}}}),E=e(3796),L=(e(2222),e(7941),e(4916),e(5306),e(1532),e(8783),e(3948),e(7273),e(6290)),F=["sm","md","lg","xl"],O=["start","end","center"];function D(t,n){return F.reduce((function(e,i){return e[t+(0,Q.jC)(i)]=n(),e}),{})}var P=function(t){return[].concat(O,["baseline","stretch"]).includes(t)},G=D("align",(function(){return{type:String,default:null,validator:P}})),R=function(t){return[].concat(O,["space-between","space-around"]).includes(t)},$=D("justify",(function(){return{type:String,default:null,validator:R}})),N=function(t){return[].concat(O,["space-between","space-around","stretch"]).includes(t)},q=D("alignContent",(function(){return{type:String,default:null,validator:N}})),K={align:Object.keys(G),justify:Object.keys($),alignContent:Object.keys(q)},U={align:"align",justify:"justify",alignContent:"align-content"};function H(t,n,e){var i=U[t];if(null!=e){if(n){var r=n.replace(t,"");i+="-".concat(r)}return i+="-".concat(e),i.toLowerCase()}}var W=new Map,J=V.Z.extend({name:"v-row",functional:!0,props:(0,k.Z)((0,k.Z)((0,k.Z)({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:P}},G),{},{justify:{type:String,default:null,validator:R}},$),{},{alignContent:{type:String,default:null,validator:N}},q),render:function(t,n){var e=n.props,i=n.data,r=n.children,a="";for(var s in e)a+=String(e[s]);var o=W.get(a);return o||function(){var t,n;for(n in o=[],K)K[n].forEach((function(t){var i=e[t],r=H(n,t,i);r&&o.push(r)}));o.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},(0,E.Z)(t,"align-".concat(e.align),e.align),(0,E.Z)(t,"justify-".concat(e.justify),e.justify),(0,E.Z)(t,"align-content-".concat(e.alignContent),e.alignContent),t)),W.set(a,o)}(),t(e.tag,(0,L.ZP)(i,{staticClass:"row",class:o}),r)}}),X=(0,h.Z)(w,i,r,!1,null,null,null),Y=X.exports;g()(X,{VBtn:m.Z,VBtnToggle:z,VRow:J})}}]);
//# sourceMappingURL=70-legacy.d0da7e48.js.map