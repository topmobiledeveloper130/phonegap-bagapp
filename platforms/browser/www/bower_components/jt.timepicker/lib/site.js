window.Rainbow=function(){function t(t){var e,n=t.getAttribute&&t.getAttribute("data-language")||0;if(!n)for(t=t.attributes,e=0;e<t.length;++e)if("data-language"===t[e].nodeName)return t[e].nodeValue;return n}function e(e){var n=t(e)||t(e.parentNode);if(!n){var a=/\blang(?:uage)?-(\w+)/;(e=e.className.match(a)||e.parentNode.className.match(a))&&(n=e[1])}return n}function n(t,e){for(var n in f[w])if(n=parseInt(n,10),(t==n&&e==f[w][n]?0:t<=n&&e>=f[w][n])&&(delete f[w][n],delete m[w][n]),t>=n&&t<f[w][n]||e>n&&e<f[w][n])return!0;return!1}function a(t,e){return'<span class="'+t.replace(/\./g," ")+(l?" "+l:"")+'">'+e+"</span>"}function r(t,e,s,u){var g=t.exec(s);if(g){++v,!e.name&&"string"==typeof e.matches[0]&&(e.name=e.matches[0],delete e.matches[0]);var l=g[0],p=g.index,h=g[0].length+p,d=function(){function n(){r(t,e,s,u)}v%100>0?n():setTimeout(n,0)};if(n(p,h))d();else{var b=o(e.matches),y=function(t,n,r){if(t>=n.length)r(l);else{var o=g[n[t]];if(o){var s=e.matches[n[t]],u=s.language,p=s.name&&s.matches?s.matches:s,m=function(e,o,i){var s;s=0;var c;for(c=1;c<n[t];++c)g[c]&&(s+=g[c].length);o=i?a(i,o):o,l=l.substr(0,s)+l.substr(s).replace(e,o),y(++t,n,r)};u?c(o,u,function(t){m(o,t)}):"string"==typeof s?m(o,o,s):i(o,p.length?p:[p],function(t){m(o,t,s.matches?s.name:0)})}else y(++t,n,r)}};y(0,b,function(t){e.name&&(t=a(e.name,t)),m[w]||(m[w]={},f[w]={}),m[w][p]={replace:g[0],with:t},f[w][p]=h,d()})}}else u()}function o(t){var e,n=[];for(e in t)t.hasOwnProperty(e)&&n.push(e);return n.sort(function(t,e){return e-t})}function i(t,e,n){function a(e,o){o<e.length?r(e[o].pattern,e[o],t,function(){a(e,++o)}):s(t,function(t){delete m[w],delete f[w],--w,n(t)})}++w,a(e,0)}function s(t,e){function n(t,e,a,r){if(a<e.length){++y;var o=e[a],i=m[w][o],t=t.substr(0,o)+t.substr(o).replace(i.replace,i.with),o=function(){n(t,e,++a,r)};0<y%250?o():setTimeout(o,0)}else r(t)}var a=o(m[w]);n(t,a,0,e)}function c(t,e,n){var a=h[e]||[],r=h[b]||[],e=d[e]?a:a.concat(r);i(t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/&(?![\w\#]+;)/g,"&amp;"),e,n)}function u(t,n,a){if(n<t.length){var r=t[n],o=e(r);return-1<(" "+r.className+" ").indexOf(" rainbow ")||!o?u(t,++n,a):(o=o.toLowerCase(),r.className+=r.className?" rainbow":"rainbow",c(r.innerHTML,o,function(e){r.innerHTML=e,m={},f={},p&&p(r,o),setTimeout(function(){u(t,++n,a)},0)}))}a&&a()}function g(t,e){var n,t=t&&"function"==typeof t.getElementsByTagName?t:document,a=t.getElementsByTagName("pre"),r=t.getElementsByTagName("code"),o=[];for(n=0;n<r.length;++n)o.push(r[n]);for(n=0;n<a.length;++n)a[n].getElementsByTagName("code").length||o.push(a[n]);u(o,0,e)}var l,p,m={},f={},h={},d={},w=0,b=0,v=0,y=0;return{extend:function(t,e,n){1==arguments.length&&(e=t,t=b),d[t]=n,h[t]=e.concat(h[t]||[])},b:function(t){p=t},a:function(t){l=t},color:function(t,e,n){return"string"==typeof t?c(t,e,n):"function"==typeof t?g(0,t):void g(t,e)}}}(),window.addEventListener?window.addEventListener("load",Rainbow.color,!1):window.attachEvent("onload",Rainbow.color),Rainbow.onHighlight=Rainbow.b,Rainbow.addClass=Rainbow.a,Rainbow.extend([{matches:{1:{name:"keyword.operator",pattern:/\=/g},2:{name:"string",matches:{name:"constant.character.escape",pattern:/\\('|"){1}/g}}},pattern:/(\(|\s|\[|\=|:)(('|")([^\\\1]|\\.)*?(\3))/gm},{name:"comment",pattern:/\/\*[\s\S]*?\*\/|(\/\/|\#)[\s\S]*?$/gm},{name:"constant.numeric",pattern:/\b(\d+(\.\d+)?(e(\+|\-)?\d+)?(f|d)?|0x[\da-f]+)\b/gi},{matches:{1:"keyword"},pattern:/\b(and|array|as|bool(ean)?|c(atch|har|lass|onst)|d(ef|elete|o(uble)?)|e(cho|lse(if)?|xit|xtends|xcept)|f(inally|loat|or(each)?|unction)|global|if|import|int(eger)?|long|new|object|or|pr(int|ivate|otected)|public|return|self|st(ring|ruct|atic)|switch|th(en|is|row)|try|(un)?signed|var|void|while)(?=\(|\b)/gi},{name:"constant.language",pattern:/true|false|null/g},{name:"keyword.operator",pattern:/\+|\!|\-|&(gt|lt|amp);|\||\*|\=/g},{matches:{1:"function.call"},pattern:/(\w+?)(?=\()/g},{matches:{1:"storage.function",2:"entity.name.function"},pattern:/(function)\s(.*?)(?=\()/g}]),Rainbow.extend("javascript",[{name:"selector",pattern:/(\s|^)\$(?=\.|\()/g},{name:"support",pattern:/\b(window|document)\b/g},{matches:{1:"support.property"},pattern:/\.(length|node(Name|Value))\b/g},{matches:{1:"support.function"},pattern:/(setTimeout|setInterval)(?=\()/g},{matches:{1:"support.method"},pattern:/\.(getAttribute|push|getElementById|getElementsByClassName|log|setTimeout|setInterval)(?=\()/g},{matches:{1:"support.tag.script",2:[{name:"string",pattern:/('|")(.*?)(\1)/g},{name:"entity.tag.script",pattern:/(\w+)/g}],3:"support.tag.script"},pattern:/(&lt;\/?)(script.*?)(&gt;)/g},{name:"string.regexp",matches:{1:"string.regexp.open",2:{name:"constant.regexp.escape",pattern:/\\(.){1}/g},3:"string.regexp.close",4:"string.regexp.modifier"},pattern:/(\/)(?!\*)(.+)(\/)([igm]{0,3})/g},{matches:{1:"storage",3:"entity.function"},pattern:/(var)?(\s|^)(.*)(?=\s?=\s?function\()/g},{name:"entity.function",pattern:/(\w+)(?=:\s{0,}function)/g}]);