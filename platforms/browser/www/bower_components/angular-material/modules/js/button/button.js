/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1
 */

!function(n,t,e){"use strict";function i(n){return{restrict:"E",link:function(t,e){n(e)}}}function o(n,e,i,o){function u(n){return t.isDefined(n.href)||t.isDefined(n.ngHref)||t.isDefined(n.ngLink)||t.isDefined(n.uiSref)}function c(n,t){if(u(t))return'<a class="md-button" ng-transclude></a>';var e="undefined"==typeof t.type?"button":t.type;return'<button class="md-button" type="'+e+'" ng-transclude></button>'}function a(c,a,s){e(a),n.attach(c,a),i.expectWithoutText(a,"aria-label"),u(s)&&t.isDefined(s.ngDisabled)&&c.$watch(s.ngDisabled,function(n){a.attr("tabindex",n?-1:0)}),a.on("click",function(n){s.disabled===!0&&(n.preventDefault(),n.stopImmediatePropagation())}),a.hasClass("md-no-focus")||(c.mouseActive=!1,a.on("mousedown",function(){c.mouseActive=!0,o(function(){c.mouseActive=!1},100)}).on("focus",function(){c.mouseActive===!1&&a.addClass("md-focused")}).on("blur",function(n){a.removeClass("md-focused")}))}return{restrict:"EA",replace:!0,transclude:!0,template:c,link:a}}o.$inject=["$mdButtonInkRipple","$mdTheming","$mdAria","$timeout"],i.$inject=["$mdTheming"],t.module("material.components.button",["material.core"]).directive("mdButton",o).directive("a",i)}(window,window.angular);