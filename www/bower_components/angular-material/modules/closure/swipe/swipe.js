/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1
 */

function getDirective(e){function i(e){function i(i,r,o){var c=e(o[t]);r.on(n,function(e){i.$applyAsync(function(){c(i,{$event:e})})})}return{restrict:"A",link:i}}i.$inject=["$parse"];var t="md"+e,n="$md."+e.toLowerCase();return i}goog.provide("ngmaterial.components.swipe"),goog.require("ngmaterial.core"),angular.module("material.components.swipe",["material.core"]).directive("mdSwipeLeft",getDirective("SwipeLeft")).directive("mdSwipeRight",getDirective("SwipeRight")).directive("mdSwipeUp",getDirective("SwipeUp")).directive("mdSwipeDown",getDirective("SwipeDown")),ngmaterial.components.swipe=angular.module("material.components.swipe");