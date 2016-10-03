/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1
 */

function MdWhiteframeDirective(e){function a(a,n,o){var d="";o.$observe("mdWhiteframe",function(a){a=parseInt(a,10)||m,a!=r&&(a>i||a<t)&&(e.warn("md-whiteframe attribute value is invalid. It should be a number between "+t+" and "+i,n[0]),a=m);var l=a==r?"":"md-whiteframe-"+a+"dp";o.$updateClass(l,d),d=l})}var r=-1,t=1,i=24,m=4;return{link:a}}goog.provide("ngmaterial.components.whiteframe"),goog.require("ngmaterial.core"),MdWhiteframeDirective.$inject=["$log"],angular.module("material.components.whiteframe",["material.core"]).directive("mdWhiteframe",MdWhiteframeDirective),ngmaterial.components.whiteframe=angular.module("material.components.whiteframe");