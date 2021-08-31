"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7336],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=s(n),d=a,g=h["".concat(p,".").concat(d)]||h[d]||c[d]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},27890:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return h}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"laravel-package",title:"Getting started with Laravel",sidebar_label:"Laravel package",original_id:"laravel-package"},p=void 0,s={unversionedId:"laravel-package",id:"version-4.0/laravel-package",isDocsHomePage:!1,title:"Getting started with Laravel",description:"The GraphQLite-Laravel package is compatible with Laravel 5.7+ and Laravel 6.x.",source:"@site/versioned_docs/version-4.0/laravel-package.md",sourceDirName:".",slug:"/laravel-package",permalink:"/docs/4.0/laravel-package",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/laravel-package.md",tags:[],version:"4.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1630401839,formattedLastUpdatedAt:"8/31/2021",frontMatter:{id:"laravel-package",title:"Getting started with Laravel",sidebar_label:"Laravel package",original_id:"laravel-package"},sidebar:"version-4.0/docs",previous:{title:"Symfony bundle",permalink:"/docs/4.0/symfony-bundle"},next:{title:"Universal service providers",permalink:"/docs/4.0/universal_service_providers"}},u=[{value:"Installation",id:"installation",children:[]},{value:"Configuring CSRF protection",id:"configuring-csrf-protection",children:[{value:"Use the <code>api</code> middleware",id:"use-the-api-middleware",children:[]},{value:"Disable CSRF for the /graphql route",id:"disable-csrf-for-the-graphql-route",children:[]},{value:"Configuring your GraphQL client",id:"configuring-your-graphql-client",children:[]}]},{value:"Adding GraphQL DevTools",id:"adding-graphql-devtools",children:[]},{value:"Troubleshooting HTTP 419 errors",id:"troubleshooting-http-419-errors",children:[]}],c={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The GraphQLite-Laravel package is compatible with ",(0,o.kt)("strong",{parentName:"p"},"Laravel 5.7+")," and ",(0,o.kt)("strong",{parentName:"p"},"Laravel 6.x"),"."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Open a terminal in your current project directory and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ composer require thecodingmachine/graphqlite-laravel\n")),(0,o.kt)("p",null,"If you want to publish the configuration (in order to edit it), run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ php artisan vendor:publish --provider=TheCodingMachine\\GraphQLite\\Laravel\\Providers\\GraphQLiteServiceProvider\n")),(0,o.kt)("p",null,"You can then configure the library by editing ",(0,o.kt)("inlineCode",{parentName:"p"},"config/graphqlite.php"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"config/graphqlite.php")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nuse GraphQL\\Error\\Debug;\n\nreturn [\n    /*\n     |--------------------------------------------------------------------------\n     | GraphQLite Configuration\n     |--------------------------------------------------------------------------\n     |\n     | Use this configuration to customize the namespace of the controllers and\n     | types.\n     | These namespaces must be autoloadable from Composer.\n     | GraphQLite will find the path of the files based on composer.json settings.\n     |\n     | You can put a single namespace, or an array of namespaces.\n     |\n     */\n    'controllers' => 'App\\\\Http\\\\Controllers',\n    'types' => 'App\\\\',\n    'debug' => Debug::RETHROW_UNSAFE_EXCEPTIONS,\n    'uri' => env('GRAPHQLITE_URI', '/graphql'),\n    'middleware' => ['web'],\n    'guard' => ['web'],\n];\n")),(0,o.kt)("p",null,"The debug parameters are detailed in the ",(0,o.kt)("a",{parentName:"p",href:"https://webonyx.github.io/graphql-php/error-handling/"},"documentation of the Webonyx GraphQL library"),"\nwhich is used internally by GraphQLite."),(0,o.kt)("h2",{id:"configuring-csrf-protection"},"Configuring CSRF protection"),(0,o.kt)("div",{class:"alert alert--warning"},"By default, the ",(0,o.kt)("code",null,"/graphql")," route is placed under ",(0,o.kt)("code",null,"web")," middleware group which requires a",(0,o.kt)("a",{href:"https://laravel.com/docs/6.x/csrf"},"CSRF token"),"."),(0,o.kt)("p",null,"You have 3 options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"api")," middleware"),(0,o.kt)("li",{parentName:"ul"},"Disable CSRF for GraphQL routes"),(0,o.kt)("li",{parentName:"ul"},"or configure your GraphQL client to pass the ",(0,o.kt)("inlineCode",{parentName:"li"},"X-CSRF-TOKEN")," with every GraphQL query")),(0,o.kt)("h3",{id:"use-the-api-middleware"},"Use the ",(0,o.kt)("inlineCode",{parentName:"h3"},"api")," middleware"),(0,o.kt)("p",null,"If you plan to use graphql for server-to-server connection only, you should probably configure GraphQLite to use the\n",(0,o.kt)("inlineCode",{parentName:"p"},"api")," middleware instead of the ",(0,o.kt)("inlineCode",{parentName:"p"},"web")," middleware:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"config/graphqlite.php")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nreturn [\n    'middleware' => ['api'],\n    'guard' => ['api'],\n];\n")),(0,o.kt)("h3",{id:"disable-csrf-for-the-graphql-route"},"Disable CSRF for the /graphql route"),(0,o.kt)("p",null,"If you plan to use graphql from web browsers and if you want to explicitly allow access from external applications\n(through CORS headers), you need to disable the CSRF token."),(0,o.kt)("p",null,"Simply add ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"$except")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Http/Middleware/VerifyCsrfToken.php"),"."),(0,o.kt)("h3",{id:"configuring-your-graphql-client"},"Configuring your GraphQL client"),(0,o.kt)("p",null,"If you are planning to use ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql")," only from your website domain, then the safest way is to keep CSRF enabled and\nconfigure your GraphQL JS client to pass the CSRF headers on any graphql request."),(0,o.kt)("p",null,"The way you do this depends on the Javascript GraphQL client you are using."),(0,o.kt)("p",null,"Assuming you are using ",(0,o.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/link/links/http/"},"Apollo"),", you need to be sure that Apollo passes the token\nback to Laravel on every request."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sample Apollo client setup with CSRF support")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost';\n\nconst httpLink = new HttpLink({ uri: 'https://api.example.com/graphql' });\n\nconst authLink = new ApolloLink((operation, forward) => {\n  // Retrieve the authorization token from local storage.\n  const token = localStorage.getItem('auth_token');\n\n  // Get the XSRF-TOKEN that is set by Laravel on each request\n  var cookieValue = document.cookie.replace(/(?:(?:^|.*;\\s*)XSRF-TOKEN\\s*\\=\\s*([^;]*).*$)|^.*$/, \"$1\");\n\n  // Use the setContext method to set the X-CSRF-TOKEN header back.\n  operation.setContext({\n    headers: {\n      'X-CSRF-TOKEN': cookieValue\n    }\n  });\n\n  // Call the next link in the middleware chain.\n  return forward(operation);\n});\n\nconst client = new ApolloClient({\n  link: authLink.concat(httpLink), // Chain it with the HttpLink\n  cache: new InMemoryCache()\n});\n")),(0,o.kt)("h2",{id:"adding-graphql-devtools"},"Adding GraphQL DevTools"),(0,o.kt)("p",null,"GraphQLite does not include additional GraphQL tooling, such as the GraphiQL editor.\nTo integrate a web UI to query your GraphQL endpoint with your Laravel installation,\nwe recommend installing ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mll-lab/laravel-graphql-playground"},"GraphQL Playground")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ composer require mll-lab/laravel-graphql-playground\n")),(0,o.kt)("p",null,"By default, the playground will be available at ",(0,o.kt)("inlineCode",{parentName:"p"},"/graphql-playground"),"."),(0,o.kt)("p",null,"You can also use any external client with GraphQLite, make sure to point it to the URL defined in the config (",(0,o.kt)("inlineCode",{parentName:"p"},"'/graphql'")," by default)."),(0,o.kt)("h2",{id:"troubleshooting-http-419-errors"},"Troubleshooting HTTP 419 errors"),(0,o.kt)("p",null,"If HTTP requests to GraphQL endpoint generate responses with the HTTP 419 status code, you have an issue with the configuration of your\nCSRF token. Please check again ",(0,o.kt)("a",{parentName:"p",href:"#configuring-csrf-protection"},"the paragraph dedicated to CSRF configuration"),"."))}h.isMDXComponent=!0}}]);