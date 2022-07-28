"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[1310],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||s;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},468:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var r=n(87462),o=n(63366),s=(n(67294),n(3905)),i=["components"],a={id:"mockserver",title:"MockServer",sidebar_label:"MockServer",slug:"mockserver.html"},c=void 0,l={unversionedId:"extensions/mockserver",id:"version-5.2/extensions/mockserver",title:"MockServer",description:"Kotest provides an extension for integration with the MockServer library.",source:"@site/versioned_docs/version-5.2/extensions/mockserver.md",sourceDirName:"extensions",slug:"/extensions/mockserver.html",permalink:"/docs/5.2/extensions/mockserver.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.2/extensions/mockserver.md",tags:[],version:"5.2",frontMatter:{id:"mockserver",title:"MockServer",sidebar_label:"MockServer",slug:"mockserver.html"},sidebar:"extensions",previous:{title:"Kafka",permalink:"/docs/5.2/extensions/embedded-kafka.html"},next:{title:"JUnit XML",permalink:"/docs/5.2/extensions/junit_xml.html"}},p={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Kotest provides an ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kotest/kotest-extensions-mockserver"},"extension")," for integration with the ",(0,s.kt)("a",{parentName:"p",href:"https://www.mock-server.com"},"MockServer")," library."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Requires the ",(0,s.kt)("inlineCode",{parentName:"p"},"io.kotest.extensions:kotest-extensions-mockserver")," module to be added to your build.")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/io.kotest.extensions/kotest-extensions-mockserver"},(0,s.kt)("img",{src:"https://img.shields.io/maven-central/v/io.kotest.extensions/kotest-extensions-mockserver.svg?label=latest%20release"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/snapshots/io/kotest/extensions/kotest-extensions-mockserver/"},(0,s.kt)("img",{src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/io.kotest.extensions/kotest-extensions-mockserver.svg?label=latest%20snapshot"}))),(0,s.kt)("p",null,"Mockserver allows us to define an in process HTTP server which is hard coded for routes that we want to test against."),(0,s.kt)("p",null,"To use in Kotest, we attach an instance of ",(0,s.kt)("inlineCode",{parentName:"p"},"MockServerListener")," to the spec under test, and Kotest will control\nthe lifecycle automatically."),(0,s.kt)("p",null,"Then it is a matter of using ",(0,s.kt)("inlineCode",{parentName:"p"},"MockServerClient")," to wire in our responses."),(0,s.kt)("p",null,"For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyMockServerTest : FunSpec() {\n  init {\n\n      // this attaches the server to the lifeycle of the spec\n      listener(MockServerListener(1080))\n\n      // we can use the client to create routes. Here we are setting them up\n      // before each test by using the beforeTest callback.\n      beforeTest {\n         MockServerClient("localhost", 1080).`when`(\n            HttpRequest.request()\n               .withMethod("POST")\n               .withPath("/login")\n               .withHeader("Content-Type", "application/json")\n               .withBody("""{"username": "foo", "password": "bar"}""")\n         ).respond(\n            HttpResponse.response()\n               .withStatusCode(202)\n               .withHeader("X-Test", "foo")\n         )\n      }\n\n      // this test will confirm the endpoint works\n      test("login endpoint should accept username and password json") {\n\n         // using the ktor client to send requests\n         val client = HttpClient(CIO)\n         val resp = client.post<io.ktor.client.statement.HttpResponse>("http://localhost:1080/login") {\n            contentType(ContentType.Application.Json)\n            body = """{"username": "foo", "password": "bar"}"""\n         }\n\n         // these handy matchers come from the kotest-assertions-ktor module\n         resp.shouldHaveStatus(HttpStatusCode.Accepted)\n         resp.shouldHaveHeader("X-Test", "foo")\n      }\n  }\n}\n')),(0,s.kt)("p",null,"In the above example, we are of course just testing the mock itself, but it shows how a real test could be configured. For example,\nyou may have an API client that you want to test, so you would configure the API routes using mock server, and then invoke methods\non your API client, ensuring it handles the responses correctly."))}d.isMDXComponent=!0}}]);