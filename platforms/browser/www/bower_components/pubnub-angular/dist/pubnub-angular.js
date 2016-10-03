/*! 3.1.2 */

!function(e){function n(a){if(t[a])return t[a].exports;var r=t[a]={exports:{},id:a,loaded:!1};return e[a].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(e,n,t){"use strict";var a=t(1),r=t(2);angular.module("pubnub.angular.service",[]).factory("Pubnub",["$rootScope",function(e){if(!angular.isDefined(PUBNUB))throw new Error("PUBNUB is not in global scope. Ensure that pubnub.js file is included before pubnub-angular.js");var n={},t={};return n.init=function(e){return n.getInstance(a.default_instance_name).init(e)},n.getInstance=function(c){var i=t[c];return angular.isDefined(i)&&i instanceof r?i:"string"==typeof c&&c.length>0?(t[c]=new r(c,n,e),a.methods_to_delegate.forEach(function(e){t[c].wrapMethod(e),n[e]=function(n){return this.getInstance(a.default_instance_name)[e](n)}}),t[c]):i},n.getEventNameFor=function(e,n,t){return t||(t=a.default_instance_name),[a.pubnub_prefix,t,e,n].join(":")},n.getMessageEventNameFor=function(e,n){return n||(n=a.default_instance_name),[a.pubnub_prefix,n,"subscribe","callback",e].join(":")},n.getPresenceEventNameFor=function(e,n){return n||(n=a.default_instance_name),[a.pubnub_prefix,n,"subscribe","presence",e].join(":")},n.subscribe=function(e){this.getInstance(a.default_instance_name).subscribe(e)},n}])},function(e,n){e.exports={pubnub_prefix:"pubnub",default_instance_name:"default",methods_to_delegate:["history","replay","publish","unsubscribe","here_now","grant","revoke","audit","time","where_now","state","channel_group","channel_group_list_channels","channel_group_list_groups","channel_group_list_namespaces","channel_group_remove_channel","channel_group_remove_group","channel_group_remove_namespace","channel_group_add_channel","channel_group_cloak","set_uuid","get_uuid","uuid","auth","set_cipher_key","get_cipher_key","raw_encrypt","raw_decrypt","set_heartbeat","get_heartbeat","set_heartbeat_interval","get_heartbeat_interval","mobile_gw_provision"],common_callbacks_to_wrap:["callback","error"],subscribe_callbacks_to_wrap:["callback","connect","reconnect","disconnect","error","idle","presence"]}},function(e,n,t){"use strict";function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),c=t(1),i=t(3);e.exports=function(){function e(n,t,r){a(this,e),this.label=n,this.mockingInstance=new i(n,t,r),this.pubnubInstance=null}return r(e,[{key:"init",value:function(e){this.pubnubInstance=new PUBNUB(e)}},{key:"getLabel",value:function(){return this.label}},{key:"subscribe",value:function(e){var n=this.mockingInstance.getCallbacksToMock(e,c.subscribe_callbacks_to_wrap);this.mockingInstance.mockCallbacks(this.getLabel(),"subscribe",e,n),this.getOriginalInstance().subscribe(e)}},{key:"getOriginalInstance",value:function(){if(this.pubnubInstance)return this.pubnubInstance;throw new ReferenceError("Pubnub default instance is not initialized yet. Invoke #init() method first.")}},{key:"wrapMethod",value:function(e){var n=this;this[e]=function(t){if(angular.isObject(t)){var a=n.mockingInstance.getCallbacksToMock(t,c.common_callbacks_to_wrap);n.mockingInstance.mockCallbacks(n.getLabel(),e,t,a)}return n.getOriginalInstance()[e](t)}}}]),e}()},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}();e.exports=function(){function e(n,a,r){t(this,e),this.label=n,this.$rootScope=r,this.service=a}return a(e,[{key:"getCallbacksToMock",value:function(e,n){var t=e.triggerEvents,a=[],r=void 0,c=void 0,i=void 0;if(t===!0)return n;if(angular.isObject(t)){for(r=t.length,i=0;i<r;i++)c=t[i],n.indexOf(c)>=0&&a.push(c);return a}return[]}},{key:"mockCallbacks",value:function(e,n,t,a){var r=a.length,c={},i=void 0,o=this.$rootScope,u=this.service,s=void 0;for(s=0;s<r;s++){if(i=a[s],!angular.isObject(t))return;c[i]=t[i],function(a){t[i]=function(){if(o.$broadcast.bind.apply(o.$broadcast,[o,u.getEventNameFor(n,a,e)].concat(Array.prototype.slice.call(arguments)))(),a in c&&angular.isFunction(c[a])&&c[a].apply(null,arguments),"subscribe"===n)switch(a){case"callback":o.$broadcast.bind.apply(o.$broadcast,[o,u.getMessageEventNameFor(arguments[2],e)].concat(Array.prototype.slice.call(arguments)))();break;case"presence":o.$broadcast.bind.apply(o.$broadcast,[o,u.getPresenceEventNameFor(arguments[2],e)].concat(Array.prototype.slice.call(arguments)))()}}}(i)}}}]),e}()}]);