/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1
 */

function mdContentDirective(e){function o(e,o){this.$scope=e,this.$element=o}return{restrict:"E",controller:["$scope","$element",o],link:function(o,t){t.addClass("_md"),e(t),o.$broadcast("$mdContentLoaded",t),iosScrollFix(t[0])}}}function iosScrollFix(e){angular.element(e).on("$md.pressdown",function(o){"t"===o.pointer.type&&(o.$materialScrollFixed||(o.$materialScrollFixed=!0,0===e.scrollTop?e.scrollTop=1:e.scrollHeight===e.scrollTop+e.offsetHeight&&(e.scrollTop-=1)))})}goog.provide("ngmaterial.components.content"),goog.require("ngmaterial.core"),mdContentDirective.$inject=["$mdTheming"],angular.module("material.components.content",["material.core"]).directive("mdContent",mdContentDirective),ngmaterial.components.content=angular.module("material.components.content");