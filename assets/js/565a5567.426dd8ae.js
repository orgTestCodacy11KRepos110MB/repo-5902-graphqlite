"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9137],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,i(i({ref:e},u),{},{components:n})):r.createElement(h,i({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52887:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"doctrine-annotations-attributes",title:"Doctrine annotations VS PHP8 attributes",sidebar_label:"Annotations VS Attributes"},s=void 0,p={unversionedId:"doctrine-annotations-attributes",id:"version-4.0/doctrine-annotations-attributes",isDocsHomePage:!1,title:"Doctrine annotations VS PHP8 attributes",description:"GraphQLite is heavily relying on the concept of annotations (also called attributes in PHP 8+).",source:"@site/versioned_docs/version-4.0/doctrine_annotations_attributes.md",sourceDirName:".",slug:"/doctrine-annotations-attributes",permalink:"/docs/4.0/doctrine-annotations-attributes",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/doctrine_annotations_attributes.md",tags:[],version:"4.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1630401839,formattedLastUpdatedAt:"8/31/2021",frontMatter:{id:"doctrine-annotations-attributes",title:"Doctrine annotations VS PHP8 attributes",sidebar_label:"Annotations VS Attributes"}},u=[{value:"Doctrine annotations",id:"doctrine-annotations",children:[]},{value:"PHP 8 attributes",id:"php-8-attributes",children:[]}],c={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"GraphQLite is heavily relying on the concept of annotations (also called attributes in PHP 8+)."),(0,o.kt)("h2",{id:"doctrine-annotations"},"Doctrine annotations"),(0,o.kt)("div",{class:"alert alert--warning"},(0,o.kt)("strong",null,"Deprecated!")," Doctrine annotations are deprecated in favor of native PHP 8 attributes. Support will be dropped in GraphQLite 5.0"),(0,o.kt)("p",null,'Historically, attributes were not available in PHP and PHP developers had to "trick" PHP to get annotation support.\nThis was the purpose of the ',(0,o.kt)("a",{parentName:"p",href:"https://www.doctrine-project.org/projects/doctrine-annotations/en/latest/index.html"},"doctrine/annotation")," library."),(0,o.kt)("p",null,"Using Doctrine annotations, you write annotations in your docblocks:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n/**\n * @Type\n */\nclass MyType\n{\n}\n")),(0,o.kt)("p",null,"Please note that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The annotation is added in a ",(0,o.kt)("strong",{parentName:"li"},"docblock"),' (a comment starting with "',(0,o.kt)("inlineCode",{parentName:"li"},"/**"),'")'),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Type")," part is actually a class. It must be declared in the ",(0,o.kt)("inlineCode",{parentName:"li"},"use")," statements at the top of your file.")),(0,o.kt)("div",{class:"alert alert--info"},(0,o.kt)("strong",null,"Heads up!"),"Some IDEs provide support for Doctrine annotations:",(0,o.kt)("ul",null,(0,o.kt)("li",null,"PhpStorm via the ",(0,o.kt)("a",{href:"PHP Annotations Plugin"},"https://plugins.jetbrains.com/plugin/7320-php-annotations")),(0,o.kt)("li",null,"Eclipse via the ",(0,o.kt)("a",{href:"Symfony2 Plugin"},"https://marketplace.eclipse.org/content/symfony-plugin")),(0,o.kt)("li",null,"Netbeans has native support")),(0,o.kt)("p",null,"We strongly recommend using an IDE that has Doctrine annotations support.")),(0,o.kt)("h2",{id:"php-8-attributes"},"PHP 8 attributes"),(0,o.kt)("p",null,'Starting with PHP 8, PHP got native annotations support. They are actually called "attributes" in the PHP world.'),(0,o.kt)("p",null,"The same code can be written this way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n#[Type]\nclass MyType\n{\n}\n")),(0,o.kt)("p",null,"GraphQLite v4.1+ has support for PHP 8 attributes."),(0,o.kt)("p",null,"The Doctrine annotation class and the PHP 8 attribute class is ",(0,o.kt)("strong",{parentName:"p"},"the same")," (so you will be using the same ",(0,o.kt)("inlineCode",{parentName:"p"},"use")," statement at the top of your file)."),(0,o.kt)("p",null,"They support the same attributes too."),(0,o.kt)("p",null,"A few notable differences:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PHP 8 attributes do not support nested attributes (unlike Doctrine annotations). This means there is no equivalent to the ",(0,o.kt)("inlineCode",{parentName:"li"},"annotations")," attribute of ",(0,o.kt)("inlineCode",{parentName:"li"},"@MagicField")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"@SourceField"),"."),(0,o.kt)("li",{parentName:"ul"},'PHP 8 attributes can be written at the parameter level. Any attribute targeting a "parameter" must be written at the parameter level.')),(0,o.kt)("p",null,"Let's take an example with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.0/autowiring"},(0,o.kt)("inlineCode",{parentName:"a"},"#Autowire")," attribute"),":"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"PHP 7+")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'/**\n * @Field\n * @Autowire(for="$productRepository")\n */\npublic function getProduct(ProductRepository $productRepository) : Product {\n    //...\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"PHP 8")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#[Field]\npublic function getProduct(#[Autowire] ProductRepository $productRepository) : Product {\n    //...\n}\n")))}d.isMDXComponent=!0}}]);