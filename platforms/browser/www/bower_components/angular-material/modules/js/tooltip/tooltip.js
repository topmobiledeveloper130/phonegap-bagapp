/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1
 */

!function(t,e,i){"use strict";function n(t,i,n,o,r,c,a,l,u,s){function d(a,u,d){function b(){a.delay=a.delay||v}function w(){var t="center top";switch(a.direction){case"left":t="right center";break;case"right":t="left center";break;case"top":t="center bottom";break;case"bottom":t="center top"}P.css("transform-origin",t)}function $(t){t?O():W()}function g(){if(u[0]&&"MutationObserver"in i){var t=new MutationObserver(function(t){t.forEach(function(t){"md-visible"===t.attributeName&&(a.visibleWatcher||(a.visibleWatcher=a.$watch("visible",$))),"md-direction"===t.attributeName&&q(a.direction)})});t.observe(u[0],{attributes:!0}),d.hasOwnProperty("mdVisible")&&(a.visibleWatcher=a.$watch("visible",$))}else a.visibleWatcher=a.$watch("visible",$),a.$watch("direction",q);var e=function(){a.$destroy()};u.one("$destroy",e),k.one("$destroy",e),a.$on("$destroy",function(){M(!1),u.remove(),t&&t.disconnect()}),u.text().indexOf(s.startSymbol())>-1&&a.$watch(function(){return u.text().trim()},y)}function y(t){if((t||!k.attr("aria-label"))&&!k.text().trim()){var e=t||u.text().trim(),i=s(e)(k.scope());k.attr("aria-label",i)}}function x(){u.detach(),u.attr("role","tooltip")}function E(){function n(){M(!1)}var c=!1;if(k[0]&&"MutationObserver"in i){var l=new MutationObserver(function(t){t.some(function(t){return"disabled"===t.attributeName&&k[0].disabled})&&r.nextTick(function(){M(!1)})});l.observe(k[0],{attributes:!0})}var u=function(){s=document.activeElement===k[0]},s=!1;e.element(i).on("blur",u).on("resize",N),document.addEventListener("scroll",n,!0),a.$on("$destroy",function(){e.element(i).off("blur",u).off("resize",N),k.off(f,m).off(h,v).off("mousedown",p),v(),document.removeEventListener("scroll",n,!0),l&&l.disconnect()});var m=function(t){"focus"===t.type&&s?s=!1:a.visible||(k.on(h,v),M(!0),"touchstart"===t.type&&k.one("touchend",function(){r.nextTick(function(){o.one("touchend",v)},!1)}))},v=function(){var e=a.hasOwnProperty("autohide")?a.autohide:d.hasOwnProperty("mdAutohide");(e||c||o[0].activeElement!==k[0])&&(D&&(t.cancel(D),M.queued=!1,D=null),k.off(h,v),k.triggerHandler("blur"),M(!1)),c=!1},p=function(){c=!0};k.on("mousedown",p),k.on(f,m)}function M(e){M.queued&&M.value===!!e||!M.queued&&a.visible===!!e||(M.value=!!e,M.queued||(e?(M.queued=!0,D=t(function(){a.visible=M.value,M.queued=!1,D=null,a.visibleWatcher||$(a.visible)},a.delay)):r.nextTick(function(){a.visible=!1,a.visibleWatcher||$(!1)})))}function O(){if(u[0].textContent.trim()){if(u.css({top:0,left:0}),T.append(u),r.hasComputedStyle(u,"display","none"))return a.visible=!1,void u.detach();q(),l.addClass(P,m).then(function(){u.addClass(m)})}}function W(){l.removeClass(P,m).then(function(){u.removeClass(m),a.visible||u.detach()})}function q(){a.visible&&(w(),C())}function C(){function t(t){var e={left:t.left,top:t.top};return e.left=Math.min(e.left,T.prop("scrollWidth")-i.width-p),e.left=Math.max(e.left,p),e.top=Math.min(e.top,T.prop("scrollHeight")-i.height-p),e.top=Math.max(e.top,p),e}function e(t){return"left"===t?{left:n.left-i.width-p,top:n.top+n.height/2-i.height/2}:"right"===t?{left:n.left+n.width+p,top:n.top+n.height/2-i.height/2}:"top"===t?{left:n.left+n.width/2-i.width/2,top:n.top-i.height-p}:{left:n.left+n.width/2-i.width/2,top:n.top+n.height+p}}var i=r.offsetRect(u,T),n=r.offsetRect(k,T),o=e(a.direction),c=u.prop("offsetParent");a.direction?o=t(o):c&&o.top>c.scrollHeight-i.height-p&&(o=t(e("top"))),u.css({left:o.left+"px",top:o.top+"px"})}c(u);var k=r.getParentWithPointerEvents(u),P=e.element(u[0].getElementsByClassName("md-content")[0]),T=e.element(document.body),D=null,N=n.throttle(function(){q()});l.pin&&l.pin(u,k),b(),x(),E(),w(),g(),y()}var f="focus touchstart mouseenter",h="blur touchcancel mouseleave",m="md-show",v=0,p=8;return{restrict:"E",transclude:!0,priority:210,template:'<div class="md-content _md" ng-transclude></div>',scope:{delay:"=?mdDelay",visible:"=?mdVisible",autohide:"=?mdAutohide",direction:"@?mdDirection"},compile:function(t,e){return e.mdDirection||e.$set("mdDirection","bottom"),d}}}n.$inject=["$timeout","$window","$$rAF","$document","$mdUtil","$mdTheming","$rootElement","$animate","$q","$interpolate"],e.module("material.components.tooltip",["material.core"]).directive("mdTooltip",n)}(window,window.angular);