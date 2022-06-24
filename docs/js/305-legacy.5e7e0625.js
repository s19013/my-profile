"use strict";(self["webpackChunkmy_profile"]=self["webpackChunkmy_profile"]||[]).push([[305],{1431:function(e,t,n){var s=n(3796),r=n(144);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return r.Z.extend({name:"proxyable",model:{prop:e,event:t},props:(0,s.Z)({},e,{required:!1}),data:function(){return{internalLazyValue:this[e]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(e){e!==this.internalLazyValue&&(this.internalLazyValue=e,this.$emit(t,e))}}},watch:(0,s.Z)({},e,(function(e){this.internalLazyValue=e}))})}var l=i();t["Z"]=l},7441:function(e,t,n){function s(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}n.d(t,{TU:function(){return V}});let r=s();function i(e){r=e}const l=/[&<>"']/,a=/[&<>"']/g,o=/[<>"']|&(?!#?\w+;)/,c=/[<>"']|&(?!#?\w+;)/g,h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},p=e=>h[e];function u(e,t){if(t){if(l.test(e))return e.replace(a,p)}else if(o.test(e))return e.replace(c,p);return e}const g=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function k(e){return e.replace(g,((e,t)=>(t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):"")))}const f=/(^|[^\[])\^/g;function d(e,t){e="string"===typeof e?e:e.source,t=t||"";const n={replace:(t,s)=>(s=s.source||s,s=s.replace(f,"$1"),e=e.replace(t,s),n),getRegex:()=>new RegExp(e,t)};return n}const x=/[^\w:]/g,m=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function b(e,t,n){if(e){let e;try{e=decodeURIComponent(k(n)).replace(x,"").toLowerCase()}catch(s){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!m.test(n)&&(n=z(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(s){return null}return n}const w={},_=/^[^:]+:\/*[^/]*$/,y=/^([^:]+:)[\s\S]*$/,$=/^([^:]+:\/*[^/]*)[\s\S]*$/;function z(e,t){w[" "+e]||(_.test(e)?w[" "+e]=e+"/":w[" "+e]=T(e,"/",!0)),e=w[" "+e];const n=-1===e.indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(y,"$1")+t:"/"===t.charAt(0)?n?t:e.replace($,"$1")+t:e+t}const S={exec:function(){}};function R(e){let t,n,s=1;for(;s<arguments.length;s++)for(n in t=arguments[s],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function A(e,t){const n=e.replace(/\|/g,((e,t,n)=>{let s=!1,r=t;while(--r>=0&&"\\"===n[r])s=!s;return s?"|":" |"})),s=n.split(/ \|/);let r=0;if(s[0].trim()||s.shift(),s.length>0&&!s[s.length-1].trim()&&s.pop(),s.length>t)s.splice(t);else while(s.length<t)s.push("");for(;r<s.length;r++)s[r]=s[r].trim().replace(/\\\|/g,"|");return s}function T(e,t,n){const s=e.length;if(0===s)return"";let r=0;while(r<s){const i=e.charAt(s-r-1);if(i!==t||n){if(i===t||!n)break;r++}else r++}return e.slice(0,s-r)}function I(e,t){if(-1===e.indexOf(t[1]))return-1;const n=e.length;let s=0,r=0;for(;r<n;r++)if("\\"===e[r])r++;else if(e[r]===t[0])s++;else if(e[r]===t[1]&&(s--,s<0))return r;return-1}function Z(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function v(e,t){if(t<1)return"";let n="";while(t>1)1&t&&(n+=e),t>>=1,e+=e;return n+e}function E(e,t,n,s){const r=t.href,i=t.title?u(t.title):null,l=e[1].replace(/\\([\[\]])/g,"$1");if("!"!==e[0].charAt(0)){s.state.inLink=!0;const e={type:"link",raw:n,href:r,title:i,text:l,tokens:s.inlineTokens(l,[])};return s.state.inLink=!1,e}return{type:"image",raw:n,href:r,title:i,text:u(l)}}function q(e,t){const n=e.match(/^(\s+)(?:```)/);if(null===n)return t;const s=n[1];return t.split("\n").map((e=>{const t=e.match(/^\s+/);if(null===t)return e;const[n]=t;return n.length>=s.length?e.slice(s.length):e})).join("\n")}class L{constructor(e){this.options=e||r}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:T(e,"\n")}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const e=t[0],n=q(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim():t[2],text:n}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(/#$/.test(e)){const t=T(e,"#");this.options.pedantic?e=t.trim():t&&!/ $/.test(t)||(e=t.trim())}const n={type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:[]};return this.lexer.inline(n.text,n.tokens),n}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const e=t[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(e,[]),text:e}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n,s,r,i,l,a,o,c,h,p,u,g,k=t[1].trim();const f=k.length>1,d={type:"list",raw:"",ordered:f,start:f?+k.slice(0,-1):"",loose:!1,items:[]};k=f?`\\d{1,9}\\${k.slice(-1)}`:`\\${k}`,this.options.pedantic&&(k=f?k:"[*+-]");const x=new RegExp(`^( {0,3}${k})((?:[\t ][^\\n]*)?(?:\\n|$))`);while(e){if(g=!1,!(t=x.exec(e)))break;if(this.rules.block.hr.test(e))break;if(n=t[0],e=e.substring(n.length),c=t[2].split("\n",1)[0],h=e.split("\n",1)[0],this.options.pedantic?(i=2,u=c.trimLeft()):(i=t[2].search(/[^ ]/),i=i>4?1:i,u=c.slice(i),i+=t[1].length),a=!1,!c&&/^ *$/.test(h)&&(n+=h+"\n",e=e.substring(h.length+1),g=!0),!g){const t=new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),s=new RegExp(`^ {0,${Math.min(3,i-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),r=new RegExp(`^( {0,${Math.min(3,i-1)}})(\`\`\`|~~~)`);while(e){if(p=e.split("\n",1)[0],c=p,this.options.pedantic&&(c=c.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),r.test(c))break;if(this.rules.block.heading.test(c))break;if(t.test(c))break;if(s.test(e))break;if(c.search(/[^ ]/)>=i||!c.trim())u+="\n"+c.slice(i);else{if(a)break;u+="\n"+c}a||c.trim()||(a=!0),n+=p+"\n",e=e.substring(p.length+1)}}d.loose||(o?d.loose=!0:/\n *\n *$/.test(n)&&(o=!0)),this.options.gfm&&(s=/^\[[ xX]\] /.exec(u),s&&(r="[ ] "!==s[0],u=u.replace(/^\[[ xX]\] +/,""))),d.items.push({type:"list_item",raw:n,task:!!s,checked:r,loose:!1,text:u}),d.raw+=n}d.items[d.items.length-1].raw=n.trimRight(),d.items[d.items.length-1].text=u.trimRight(),d.raw=d.raw.trimRight();const m=d.items.length;for(l=0;l<m;l++){this.lexer.state.top=!1,d.items[l].tokens=this.lexer.blockTokens(d.items[l].text,[]);const e=d.items[l].tokens.filter((e=>"space"===e.type)),t=e.every((e=>{const t=e.raw.split("");let n=0;for(const s of t)if("\n"===s&&(n+=1),n>1)return!0;return!1}));!d.loose&&e.length&&t&&(d.loose=!0,d.items[l].loose=!0)}return d}}html(e){const t=this.rules.block.html.exec(e);if(t){const e={type:"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:t[0]};return this.options.sanitize&&(e.type="paragraph",e.text=this.options.sanitizer?this.options.sanitizer(t[0]):u(t[0]),e.tokens=[],this.lexer.inline(e.text,e.tokens)),e}}def(e){const t=this.rules.block.def.exec(e);if(t){t[3]&&(t[3]=t[3].substring(1,t[3].length-1));const e=t[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:e,raw:t[0],href:t[2],title:t[3]}}}table(e){const t=this.rules.block.table.exec(e);if(t){const e={type:"table",header:A(t[1]).map((e=>({text:e}))),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split("\n"):[]};if(e.header.length===e.align.length){e.raw=t[0];let n,s,r,i,l=e.align.length;for(n=0;n<l;n++)/^ *-+: *$/.test(e.align[n])?e.align[n]="right":/^ *:-+: *$/.test(e.align[n])?e.align[n]="center":/^ *:-+ *$/.test(e.align[n])?e.align[n]="left":e.align[n]=null;for(l=e.rows.length,n=0;n<l;n++)e.rows[n]=A(e.rows[n],e.header.length).map((e=>({text:e})));for(l=e.header.length,s=0;s<l;s++)e.header[s].tokens=[],this.lexer.inline(e.header[s].text,e.header[s].tokens);for(l=e.rows.length,s=0;s<l;s++)for(i=e.rows[s],r=0;r<i.length;r++)i[r].tokens=[],this.lexer.inline(i[r].text,i[r].tokens);return e}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t){const e={type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const e={type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}text(e){const t=this.rules.block.text.exec(e);if(t){const e={type:"text",raw:t[0],text:t[0],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:u(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):u(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const t=T(e.slice(0,-1),"\\");if((e.length-t.length)%2===0)return}else{const e=I(t[2],"()");if(e>-1){const n=0===t[0].indexOf("!")?5:4,s=n+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,s).trim(),t[3]=""}}let n=t[2],s="";if(this.options.pedantic){const e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);e&&(n=e[1],s=e[3])}else s=t[3]?t[3].slice(1,-1):"";return n=n.trim(),/^</.test(n)&&(n=this.options.pedantic&&!/>$/.test(e)?n.slice(1):n.slice(1,-1)),E(t,{href:n?n.replace(this.rules.inline._escapes,"$1"):n,title:s?s.replace(this.rules.inline._escapes,"$1"):s},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=(n[2]||n[1]).replace(/\s+/g," ");if(e=t[e.toLowerCase()],!e||!e.href){const e=n[0].charAt(0);return{type:"text",raw:e,text:e}}return E(n,e,n[0],this.lexer)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrong.lDelim.exec(e);if(!s)return;if(s[3]&&n.match(/[\p{L}\p{N}]/u))return;const r=s[1]||s[2]||"";if(!r||r&&(""===n||this.rules.inline.punctuation.exec(n))){const n=s[0].length-1;let r,i,l=n,a=0;const o="*"===s[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;o.lastIndex=0,t=t.slice(-1*e.length+n);while(null!=(s=o.exec(t))){if(r=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!r)continue;if(i=r.length,s[3]||s[4]){l+=i;continue}if((s[5]||s[6])&&n%3&&!((n+i)%3)){a+=i;continue}if(l-=i,l>0)continue;if(i=Math.min(i,i+l+a),Math.min(n,i)%2){const t=e.slice(1,n+s.index+i);return{type:"em",raw:e.slice(0,n+s.index+i+1),text:t,tokens:this.lexer.inlineTokens(t,[])}}const t=e.slice(2,n+s.index+i-1);return{type:"strong",raw:e.slice(0,n+s.index+i+1),text:t,tokens:this.lexer.inlineTokens(t,[])}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g," ");const n=/[^ ]/.test(e),s=/^ /.test(e)&&/ $/.test(e);return n&&s&&(e=e.substring(1,e.length-1)),e=u(e,!0),{type:"codespan",raw:t[0],text:e}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2],[])}}autolink(e,t){const n=this.rules.inline.autolink.exec(e);if(n){let e,s;return"@"===n[2]?(e=u(this.options.mangle?t(n[1]):n[1]),s="mailto:"+e):(e=u(n[1]),s=e),{type:"link",raw:n[0],text:e,href:s,tokens:[{type:"text",raw:e,text:e}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let e,s;if("@"===n[2])e=u(this.options.mangle?t(n[0]):n[0]),s="mailto:"+e;else{let t;do{t=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0]}while(t!==n[0]);e=u(n[0]),s="www."===n[1]?"http://"+e:e}return{type:"link",raw:n[0],text:e,href:s,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e,t){const n=this.rules.inline.text.exec(e);if(n){let e;return e=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):u(n[0]):n[0]:u(this.options.smartypants?t(n[0]):n[0]),{type:"text",raw:n[0],text:e}}}}const C={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:S,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};C.def=d(C.def).replace("label",C._label).replace("title",C._title).getRegex(),C.bullet=/(?:[*+-]|\d{1,9}[.)])/,C.listItemStart=d(/^( *)(bull) */).replace("bull",C.bullet).getRegex(),C.list=d(C.list).replace(/bull/g,C.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+C.def.source+")").getRegex(),C._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",C._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,C.html=d(C.html,"i").replace("comment",C._comment).replace("tag",C._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),C.paragraph=d(C._paragraph).replace("hr",C.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",C._tag).getRegex(),C.blockquote=d(C.blockquote).replace("paragraph",C.paragraph).getRegex(),C.normal=R({},C),C.gfm=R({},C.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),C.gfm.table=d(C.gfm.table).replace("hr",C.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",C._tag).getRegex(),C.gfm.paragraph=d(C._paragraph).replace("hr",C.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",C.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",C._tag).getRegex(),C.pedantic=R({},C.normal,{html:d("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",C._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:S,paragraph:d(C.normal._paragraph).replace("hr",C.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",C.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const O={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:S,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:S,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function D(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function B(e){let t,n,s="";const r=e.length;for(t=0;t<r;t++)n=e.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),s+="&#"+n+";";return s}O._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",O.punctuation=d(O.punctuation).replace(/punctuation/g,O._punctuation).getRegex(),O.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,O.escapedEmSt=/\\\*|\\_/g,O._comment=d(C._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),O.emStrong.lDelim=d(O.emStrong.lDelim).replace(/punct/g,O._punctuation).getRegex(),O.emStrong.rDelimAst=d(O.emStrong.rDelimAst,"g").replace(/punct/g,O._punctuation).getRegex(),O.emStrong.rDelimUnd=d(O.emStrong.rDelimUnd,"g").replace(/punct/g,O._punctuation).getRegex(),O._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,O._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,O._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,O.autolink=d(O.autolink).replace("scheme",O._scheme).replace("email",O._email).getRegex(),O._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,O.tag=d(O.tag).replace("comment",O._comment).replace("attribute",O._attribute).getRegex(),O._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,O._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,O._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,O.link=d(O.link).replace("label",O._label).replace("href",O._href).replace("title",O._title).getRegex(),O.reflink=d(O.reflink).replace("label",O._label).replace("ref",C._label).getRegex(),O.nolink=d(O.nolink).replace("ref",C._label).getRegex(),O.reflinkSearch=d(O.reflinkSearch,"g").replace("reflink",O.reflink).replace("nolink",O.nolink).getRegex(),O.normal=R({},O),O.pedantic=R({},O.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:d(/^!?\[(label)\]\((.*?)\)/).replace("label",O._label).getRegex(),reflink:d(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",O._label).getRegex()}),O.gfm=R({},O.normal,{escape:d(O.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),O.gfm.url=d(O.gfm.url,"i").replace("email",O.gfm._extended_email).getRegex(),O.breaks=R({},O.gfm,{br:d(O.br).replace("{2,}","*").getRegex(),text:d(O.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});class Q{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||r,this.options.tokenizer=this.options.tokenizer||new L,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:C.normal,inline:O.normal};this.options.pedantic?(t.block=C.pedantic,t.inline=O.pedantic):this.options.gfm&&(t.block=C.gfm,this.options.breaks?t.inline=O.breaks:t.inline=O.gfm),this.tokenizer.rules=t}static get rules(){return{block:C,inline:O}}static lex(e,t){const n=new Q(t);return n.lex(e)}static lexInline(e,t){const n=new Q(t);return n.inlineTokens(e)}lex(e){let t;e=e.replace(/\r\n|\r/g,"\n"),this.blockTokens(e,this.tokens);while(t=this.inlineQueue.shift())this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){let n,s,r,i;e=this.options.pedantic?e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e.replace(/^( *)(\t+)/gm,((e,t,n)=>t+"    ".repeat(n.length)));while(e)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((s=>!!(n=s.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0)))))if(n=this.tokenizer.space(e))e=e.substring(n.raw.length),1===n.raw.length&&t.length>0?t[t.length-1].raw+="\n":t.push(n);else if(n=this.tokenizer.code(e))e=e.substring(n.raw.length),s=t[t.length-1],!s||"paragraph"!==s.type&&"text"!==s.type?t.push(n):(s.raw+="\n"+n.raw,s.text+="\n"+n.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text);else if(n=this.tokenizer.fences(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.heading(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.hr(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.blockquote(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.list(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.html(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.def(e))e=e.substring(n.raw.length),s=t[t.length-1],!s||"paragraph"!==s.type&&"text"!==s.type?this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title}):(s.raw+="\n"+n.raw,s.text+="\n"+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text);else if(n=this.tokenizer.table(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.lheading(e))e=e.substring(n.raw.length),t.push(n);else{if(r=e,this.options.extensions&&this.options.extensions.startBlock){let t=1/0;const n=e.slice(1);let s;this.options.extensions.startBlock.forEach((function(e){s=e.call({lexer:this},n),"number"===typeof s&&s>=0&&(t=Math.min(t,s))})),t<1/0&&t>=0&&(r=e.substring(0,t+1))}if(this.state.top&&(n=this.tokenizer.paragraph(r)))s=t[t.length-1],i&&"paragraph"===s.type?(s.raw+="\n"+n.raw,s.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n),i=r.length!==e.length,e=e.substring(n.raw.length);else if(n=this.tokenizer.text(e))e=e.substring(n.raw.length),s=t[t.length-1],s&&"text"===s.type?(s.raw+="\n"+n.raw,s.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return this.state.top=!0,t}inline(e,t){this.inlineQueue.push({src:e,tokens:t})}inlineTokens(e,t=[]){let n,s,r,i,l,a,o=e;if(this.tokens.links){const e=Object.keys(this.tokens.links);if(e.length>0)while(null!=(i=this.tokenizer.rules.inline.reflinkSearch.exec(o)))e.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,i.index)+"["+v("a",i[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}while(null!=(i=this.tokenizer.rules.inline.blockSkip.exec(o)))o=o.slice(0,i.index)+"["+v("a",i[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);while(null!=(i=this.tokenizer.rules.inline.escapedEmSt.exec(o)))o=o.slice(0,i.index)+"++"+o.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);while(e)if(l||(a=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((s=>!!(n=s.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0)))))if(n=this.tokenizer.escape(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.tag(e))e=e.substring(n.raw.length),s=t[t.length-1],s&&"text"===n.type&&"text"===s.type?(s.raw+=n.raw,s.text+=n.text):t.push(n);else if(n=this.tokenizer.link(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(n.raw.length),s=t[t.length-1],s&&"text"===n.type&&"text"===s.type?(s.raw+=n.raw,s.text+=n.text):t.push(n);else if(n=this.tokenizer.emStrong(e,o,a))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.codespan(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.br(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.del(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.autolink(e,B))e=e.substring(n.raw.length),t.push(n);else if(this.state.inLink||!(n=this.tokenizer.url(e,B))){if(r=e,this.options.extensions&&this.options.extensions.startInline){let t=1/0;const n=e.slice(1);let s;this.options.extensions.startInline.forEach((function(e){s=e.call({lexer:this},n),"number"===typeof s&&s>=0&&(t=Math.min(t,s))})),t<1/0&&t>=0&&(r=e.substring(0,t+1))}if(n=this.tokenizer.inlineText(r,D))e=e.substring(n.raw.length),"_"!==n.raw.slice(-1)&&(a=n.raw.slice(-1)),l=!0,s=t[t.length-1],s&&"text"===s.type?(s.raw+=n.raw,s.text+=n.text):t.push(n);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}else e=e.substring(n.raw.length),t.push(n);return t}}class U{constructor(e){this.options=e||r}code(e,t,n){const s=(t||"").match(/\S*/)[0];if(this.options.highlight){const t=this.options.highlight(e,s);null!=t&&t!==e&&(n=!0,e=t)}return e=e.replace(/\n$/,"")+"\n",s?'<pre><code class="'+this.options.langPrefix+u(s,!0)+'">'+(n?e:u(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:u(e,!0))+"</code></pre>\n"}blockquote(e){return`<blockquote>\n${e}</blockquote>\n`}html(e){return e}heading(e,t,n,s){if(this.options.headerIds){const r=this.options.headerPrefix+s.slug(n);return`<h${t} id="${r}">${e}</h${t}>\n`}return`<h${t}>${e}</h${t}>\n`}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,n){const s=t?"ol":"ul",r=t&&1!==n?' start="'+n+'"':"";return"<"+s+r+">\n"+e+"</"+s+">\n"}listitem(e){return`<li>${e}</li>\n`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>\n`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return`<tr>\n${e}</tr>\n`}tablecell(e,t){const n=t.header?"th":"td",s=t.align?`<${n} align="${t.align}">`:`<${n}>`;return s+e+`</${n}>\n`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){if(e=b(this.options.sanitize,this.options.baseUrl,e),null===e)return n;let s='<a href="'+u(e)+'"';return t&&(s+=' title="'+t+'"'),s+=">"+n+"</a>",s}image(e,t,n){if(e=b(this.options.sanitize,this.options.baseUrl,e),null===e)return n;let s=`<img src="${e}" alt="${n}"`;return t&&(s+=` title="${t}"`),s+=this.options.xhtml?"/>":">",s}text(e){return e}}class j{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class P{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let n=e,s=0;if(this.seen.hasOwnProperty(n)){s=this.seen[e];do{s++,n=e+"-"+s}while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=s,this.seen[n]=0),n}slug(e,t={}){const n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)}}class M{constructor(e){this.options=e||r,this.options.renderer=this.options.renderer||new U,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new j,this.slugger=new P}static parse(e,t){const n=new M(t);return n.parse(e)}static parseInline(e,t){const n=new M(t);return n.parseInline(e)}parse(e,t=!0){let n,s,r,i,l,a,o,c,h,p,u,g,f,d,x,m,b,w,_,y="";const $=e.length;for(n=0;n<$;n++)if(p=e[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[p.type]&&(_=this.options.extensions.renderers[p.type].call({parser:this},p),!1!==_||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(p.type)))y+=_||"";else switch(p.type){case"space":continue;case"hr":y+=this.renderer.hr();continue;case"heading":y+=this.renderer.heading(this.parseInline(p.tokens),p.depth,k(this.parseInline(p.tokens,this.textRenderer)),this.slugger);continue;case"code":y+=this.renderer.code(p.text,p.lang,p.escaped);continue;case"table":for(c="",o="",i=p.header.length,s=0;s<i;s++)o+=this.renderer.tablecell(this.parseInline(p.header[s].tokens),{header:!0,align:p.align[s]});for(c+=this.renderer.tablerow(o),h="",i=p.rows.length,s=0;s<i;s++){for(a=p.rows[s],o="",l=a.length,r=0;r<l;r++)o+=this.renderer.tablecell(this.parseInline(a[r].tokens),{header:!1,align:p.align[r]});h+=this.renderer.tablerow(o)}y+=this.renderer.table(c,h);continue;case"blockquote":h=this.parse(p.tokens),y+=this.renderer.blockquote(h);continue;case"list":for(u=p.ordered,g=p.start,f=p.loose,i=p.items.length,h="",s=0;s<i;s++)x=p.items[s],m=x.checked,b=x.task,d="",x.task&&(w=this.renderer.checkbox(m),f?x.tokens.length>0&&"paragraph"===x.tokens[0].type?(x.tokens[0].text=w+" "+x.tokens[0].text,x.tokens[0].tokens&&x.tokens[0].tokens.length>0&&"text"===x.tokens[0].tokens[0].type&&(x.tokens[0].tokens[0].text=w+" "+x.tokens[0].tokens[0].text)):x.tokens.unshift({type:"text",text:w}):d+=w),d+=this.parse(x.tokens,f),h+=this.renderer.listitem(d,b,m);y+=this.renderer.list(h,u,g);continue;case"html":y+=this.renderer.html(p.text);continue;case"paragraph":y+=this.renderer.paragraph(this.parseInline(p.tokens));continue;case"text":h=p.tokens?this.parseInline(p.tokens):p.text;while(n+1<$&&"text"===e[n+1].type)p=e[++n],h+="\n"+(p.tokens?this.parseInline(p.tokens):p.text);y+=t?this.renderer.paragraph(h):h;continue;default:{const e='Token with "'+p.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return y}parseInline(e,t){t=t||this.renderer;let n,s,r,i="";const l=e.length;for(n=0;n<l;n++)if(s=e[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]&&(r=this.options.extensions.renderers[s.type].call({parser:this},s),!1!==r||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)))i+=r||"";else switch(s.type){case"escape":i+=t.text(s.text);break;case"html":i+=t.html(s.text);break;case"link":i+=t.link(s.href,s.title,this.parseInline(s.tokens,t));break;case"image":i+=t.image(s.href,s.title,s.text);break;case"strong":i+=t.strong(this.parseInline(s.tokens,t));break;case"em":i+=t.em(this.parseInline(s.tokens,t));break;case"codespan":i+=t.codespan(s.text);break;case"br":i+=t.br();break;case"del":i+=t.del(this.parseInline(s.tokens,t));break;case"text":i+=t.text(s.text);break;default:{const e='Token with "'+s.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return i}}function V(e,t,n){if("undefined"===typeof e||null===e)throw new Error("marked(): input parameter is undefined or null");if("string"!==typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"===typeof t&&(n=t,t=null),t=R({},V.defaults,t||{}),Z(t),n){const r=t.highlight;let i;try{i=Q.lex(e,t)}catch(s){return n(s)}const l=function(e){let l;if(!e)try{t.walkTokens&&V.walkTokens(i,t.walkTokens),l=M.parse(i,t)}catch(s){e=s}return t.highlight=r,e?n(e):n(null,l)};if(!r||r.length<3)return l();if(delete t.highlight,!i.length)return l();let a=0;return V.walkTokens(i,(function(e){"code"===e.type&&(a++,setTimeout((()=>{r(e.text,e.lang,(function(t,n){if(t)return l(t);null!=n&&n!==e.text&&(e.text=n,e.escaped=!0),a--,0===a&&l()}))}),0))})),void(0===a&&l())}try{const n=Q.lex(e,t);return t.walkTokens&&V.walkTokens(n,t.walkTokens),M.parse(n,t)}catch(s){if(s.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+u(s.message+"",!0)+"</pre>";throw s}}V.options=V.setOptions=function(e){return R(V.defaults,e),i(V.defaults),V},V.getDefaults=s,V.defaults=r,V.use=function(...e){const t=R({},...e),n=V.defaults.extensions||{renderers:{},childTokens:{}};let s;e.forEach((e=>{if(e.extensions&&(s=!0,e.extensions.forEach((e=>{if(!e.name)throw new Error("extension name required");if(e.renderer){const t=n.renderers?n.renderers[e.name]:null;n.renderers[e.name]=t?function(...n){let s=e.renderer.apply(this,n);return!1===s&&(s=t.apply(this,n)),s}:e.renderer}if(e.tokenizer){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw new Error("extension level must be 'block' or 'inline'");n[e.level]?n[e.level].unshift(e.tokenizer):n[e.level]=[e.tokenizer],e.start&&("block"===e.level?n.startBlock?n.startBlock.push(e.start):n.startBlock=[e.start]:"inline"===e.level&&(n.startInline?n.startInline.push(e.start):n.startInline=[e.start]))}e.childTokens&&(n.childTokens[e.name]=e.childTokens)}))),e.renderer){const n=V.defaults.renderer||new U;for(const t in e.renderer){const s=n[t];n[t]=(...r)=>{let i=e.renderer[t].apply(n,r);return!1===i&&(i=s.apply(n,r)),i}}t.renderer=n}if(e.tokenizer){const n=V.defaults.tokenizer||new L;for(const t in e.tokenizer){const s=n[t];n[t]=(...r)=>{let i=e.tokenizer[t].apply(n,r);return!1===i&&(i=s.apply(n,r)),i}}t.tokenizer=n}if(e.walkTokens){const n=V.defaults.walkTokens;t.walkTokens=function(t){e.walkTokens.call(this,t),n&&n.call(this,t)}}s&&(t.extensions=n),V.setOptions(t)}))},V.walkTokens=function(e,t){for(const n of e)switch(t.call(V,n),n.type){case"table":for(const e of n.header)V.walkTokens(e.tokens,t);for(const e of n.rows)for(const n of e)V.walkTokens(n.tokens,t);break;case"list":V.walkTokens(n.items,t);break;default:V.defaults.extensions&&V.defaults.extensions.childTokens&&V.defaults.extensions.childTokens[n.type]?V.defaults.extensions.childTokens[n.type].forEach((function(e){V.walkTokens(n[e],t)})):n.tokens&&V.walkTokens(n.tokens,t)}},V.parseInline=function(e,t){if("undefined"===typeof e||null===e)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!==typeof e)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");t=R({},V.defaults,t||{}),Z(t);try{const n=Q.lexInline(e,t);return t.walkTokens&&V.walkTokens(n,t.walkTokens),M.parseInline(n,t)}catch(n){if(n.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+u(n.message+"",!0)+"</pre>";throw n}},V.Parser=M,V.parser=M.parse,V.Renderer=U,V.TextRenderer=j,V.Lexer=Q,V.lexer=Q.lex,V.Tokenizer=L,V.Slugger=P,V.parse=V;V.options,V.setOptions,V.use,V.walkTokens,V.parseInline,M.parse,Q.lex}}]);
//# sourceMappingURL=305-legacy.5e7e0625.js.map