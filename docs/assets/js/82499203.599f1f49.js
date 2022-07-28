"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[6724],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64805:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"exceptions",title:"Exceptions",slug:"exceptions.html"},c=void 0,l={unversionedId:"assertions/exceptions",id:"version-5.3/assertions/exceptions",title:"Exceptions",description:"To assert that a given block of code throws an exception, one can use the shouldThrow function. Eg,",source:"@site/versioned_docs/version-5.3/assertions/exceptions.md",sourceDirName:"assertions",slug:"/assertions/exceptions.html",permalink:"/docs/5.3/assertions/exceptions.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.3/assertions/exceptions.md",tags:[],version:"5.3",frontMatter:{id:"exceptions",title:"Exceptions",slug:"exceptions.html"},sidebar:"assertions",previous:{title:"Data Class Matchers",permalink:"/docs/5.3/assertions/data-class-matchers.html"},next:{title:"Clues",permalink:"/docs/5.3/assertions/clues.html"}},p={},u=[],d={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To assert that a given block of code throws an exception, one can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"shouldThrow")," function. Eg,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"shouldThrow<IllegalAccessException> {\n  // code in here that you expect to throw an IllegalAccessException\n}\n")),(0,a.kt)("p",null,"You can also check the caught exception:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'val exception = shouldThrow<IllegalAccessException> {\n  // code in here that you expect to throw an IllegalAccessException\n}\nexception.message should startWith("Something went wrong")\n')),(0,a.kt)("p",null,"If you want to test that a specific type of exception is thrown, then use ",(0,a.kt)("inlineCode",{parentName:"p"},"shouldThrowExactly<E>"),". For example, the\nfollowing block would catch a ",(0,a.kt)("inlineCode",{parentName:"p"},"FileNotFoundException")," but not a ",(0,a.kt)("inlineCode",{parentName:"p"},"IOException")," even though ",(0,a.kt)("inlineCode",{parentName:"p"},"FileNotFoundException"),"\nextends from ",(0,a.kt)("inlineCode",{parentName:"p"},"IOException"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"val exception = shouldThrowExactly<FileNotFoundException> {\n  // test here\n}\n")),(0,a.kt)("p",null,"If you simply want to test that ",(0,a.kt)("em",{parentName:"p"},"any")," exception is thrown, regardles of type, then use ",(0,a.kt)("inlineCode",{parentName:"p"},"shouldThrowAny"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"val exception = shouldThrowAny {\n  // test here can throw any type of Throwable!\n}\n")))}h.isMDXComponent=!0}}]);