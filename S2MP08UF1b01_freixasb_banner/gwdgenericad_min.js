(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var c="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},g;if("function"==typeof Object.setPrototypeOf)g=Object.setPrototypeOf;else{var h;a:{var k={m:!0},l={};try{l.__proto__=k;h=l.m;break a}catch(a){}h=!1}g=h?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var m=g,goog=goog||{},n=this||self,p=function(a,b){function e(){}e.prototype=b.prototype;a.prototype=new e;a.prototype.constructor=a};var q=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,q);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};p(q,Error);q.prototype.name="CustomError";var r=function(a,b){a=a.split("%s");for(var e="",d=a.length-1,f=0;f<d;f++)e+=a[f]+(f<b.length?b[f]:"%s");q.call(this,e+a[d])};p(r,q);r.prototype.name="AssertionError";var t=function(a,b,e){if(!a){var d="Assertion failed";if(b){d+=": "+b;var f=Array.prototype.slice.call(arguments,2)}throw new r(""+d,f||[]);}return a},u=function(a,b){throw new r("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var x=function(a,b){this.c=a===v&&b||"";this.l=w};x.prototype.g=!0;x.prototype.f=function(){return this.c};x.prototype.toString=function(){return"Const{"+this.c+"}"};var w={},v={};var y=new x(v,"_newtab");var A=function(a,b){this.b=b===z?a:""};A.prototype.g=!0;A.prototype.f=function(){return this.b.toString()};A.prototype.toString=function(){return"SafeUrl{"+this.b+"}"};var B=function(a){if(a instanceof A&&a.constructor===A)return a.b;var b=typeof a;u("expected object of type SafeUrl, got '"+a+"' of type "+("object"!=b?b:a?Array.isArray(a)?"array":b:"null"));return"type_error:SafeUrl"},C=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,z={};var D=function(){var a=HTMLElement.call(this)||this;a.h=!1;a.j=a.o.bind(a);a.i=null;return a},E=HTMLElement;D.prototype=c(E.prototype);D.prototype.constructor=D;if(m)m(D,E);else for(var F in E)if("prototype"!=F)if(Object.defineProperties){var G=Object.getOwnPropertyDescriptor(E,F);G&&Object.defineProperty(D,F,G)}else D[F]=E[F];
D.prototype.connectedCallback=function(){var a=this;this.h||(document.body.style.opacity="0");setTimeout(function(){a.a=a.querySelector("gwd-pagedeck");window.addEventListener("resize",a.j,!1)},0)};D.prototype.disconnectedCallback=function(){window.removeEventListener("resize",this.j,!1)};D.prototype.initAd=function(){this.h=!0;document.body.style.opacity="";var a=void 0===a?null:a;var b=document.createEvent("CustomEvent");b.initCustomEvent("adinitialized",!0,!0,a);this.dispatchEvent(b);this.goToPage()};
D.prototype.goToPage=function(a,b,e,d,f){if(a=void 0!=a?this.a.getPage(a):this.a.getDefaultPage())a=this.a.getOrientationSpecificPage(window.innerHeight>=window.innerWidth?1:2,a.id),void 0!=b?this.a.goToPage(a.id,b,e,d,f):this.a.goToPage(a.id)};D.prototype.o=function(){var a=window.innerHeight>=window.innerWidth?1:2;this.i!=a&&(this.i=a,(a=this.a.getPage(Number(this.a.currentIndex)))&&this.goToPage(a.id))};
D.prototype.exit=function(a,b,e){b=void 0===b?!1:b;a instanceof A||a instanceof A||(a="object"==typeof a&&a.g?a.f():String(a),t(C.test(a),"%s does not match the safe URL pattern",a)||(a="about:invalid#zClosurez"),a=new A(a,z));if(y instanceof x)if(y instanceof x&&y.constructor===x&&y.l===w)var d=y.c;else u("expected object of type Const, got '"+y+"'"),d="type_error:Const";else d=y||"";n.open(B(a),d,void 0,void 0);b&&this.goToPage(e)};customElements.define("gwd-genericad",D);}).call(this);
