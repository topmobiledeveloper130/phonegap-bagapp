/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1
 */

!function(e,t,n){"use strict";t.module("material.components.backdrop",["material.core"]).directive("mdBackdrop",["$mdTheming","$mdUtil","$animate","$rootElement","$window","$log","$$rAF","$document",function(e,n,o,i,r,a,d,c){function p(p,l,m){function u(){var e=parseInt(f.height,10)+Math.abs(parseInt(f.top,10));l.css("height",e+"px")}o.pin&&o.pin(l,i);var f;d(function(){if(f=r.getComputedStyle(c[0].body),"fixed"===f.position){var o=n.debounce(function(){f=r.getComputedStyle(c[0].body),u()},60,null,!1);u(),t.element(r).on("resize",o),p.$on("$destroy",function(){t.element(r).off("resize",o)})}var i=l.parent();if(i.length){"BODY"===i[0].nodeName&&l.css("position","fixed");var d=r.getComputedStyle(i[0]);"static"===d.position&&a.warn(s),e.inherit(l,i)}})}var s="<md-backdrop> may not work properly in a scrolled, static-positioned parent container.";return{restrict:"E",link:p}}])}(window,window.angular);