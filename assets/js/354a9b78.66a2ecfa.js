"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9752],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),y=a,f=s["".concat(p,".").concat(y)]||s[y]||d[y]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},38288:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"extend_input_type",title:"Extending an input type",sidebar_label:"Extending an input type",original_id:"extend_input_type"},p=void 0,u={unversionedId:"extend_input_type",id:"version-4.0/extend_input_type",isDocsHomePage:!1,title:"Extending an input type",description:"Available in GraphQLite 4.0+",source:"@site/versioned_docs/version-4.0/extend_input_type.mdx",sourceDirName:".",slug:"/extend_input_type",permalink:"/docs/4.0/extend_input_type",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/extend_input_type.mdx",tags:[],version:"4.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1630401839,formattedLastUpdatedAt:"8/31/2021",frontMatter:{id:"extend_input_type",title:"Extending an input type",sidebar_label:"Extending an input type",original_id:"extend_input_type"},sidebar:"version-4.0/docs",previous:{title:"Custom argument resolving",permalink:"/docs/4.0/argument-resolving"},next:{title:"Class with multiple output types",permalink:"/docs/4.0/multiple_output_types"}},c=[],d={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("small",null,"Available in GraphQLite 4.0+"),(0,i.kt)("div",{class:"alert alert--info"},"If you are not familiar with the ",(0,i.kt)("code",null,"@Factory")," tag, ",(0,i.kt)("a",{href:"input-types"},'read first the "input types" guide'),"."),(0,i.kt)("p",null,"Fields exposed in a GraphQL input type do not need to be all part of the factory method."),(0,i.kt)("p",null,"Just like with output type (that can be ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.0/extend_type"},"extended using the ",(0,i.kt)("inlineCode",{parentName:"a"},"ExtendType")," annotation"),"), you can extend/modify\nan input type using the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Decorate")," annotation."),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Decorate")," annotation to add additional fields to an input type that is already declared by a ",(0,i.kt)("inlineCode",{parentName:"p"},"@Factory")," annotation,\nor to modify the returned object."),(0,i.kt)("div",{class:"alert alert--info"},"The ",(0,i.kt)("code",null,"@Decorate")," annotation is very useful in scenarios where you cannot touch the ",(0,i.kt)("code",null,"@Factory")," method. This can happen if the ",(0,i.kt)("code",null,"@Factory")," method is defined in a third-party library or if the ",(0,i.kt)("code",null,"@Factory")," method is part of auto-generated code."),(0,i.kt)("p",null,"Let's assume you have a ",(0,i.kt)("inlineCode",{parentName:"p"},"Filter")," class used as an input type. You most certainly have a ",(0,i.kt)("inlineCode",{parentName:"p"},"@Factory")," to create the input type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"class MyFactory\n{\n    /**\n     * @Factory()\n     */\n    public function createFilter(string $name): Filter\n    {\n        // Let's assume you have a flexible 'Filter' class that can accept any kind of filter\n        $filter = new Filter();\n        $filter->addFilter('name', $name);\n        return $filter;\n    }\n}\n")),(0,i.kt)("p",null,"Assuming you ",(0,i.kt)("strong",{parentName:"p"},"cannot"),' modify the code of this factory, you can still modify the GraphQL input type generated by\nadding a "decorator" around the factory.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"class MyDecorator\n{\n    /**\n     * @Decorate(inputTypeName=\"FilterInput\")\n     */\n    public function addTypeFilter(Filter $filter, string $type): Filter\n    {\n        $filter->addFilter('type', $type);\n        return $filter;\n    }\n}\n")),(0,i.kt)("p",null,'In the example above, the "Filter" input type is modified. We add an additional "type" field to the input type.'),(0,i.kt)("p",null,"A few things to notice:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The decorator takes the object generated by the factory as first argument"),(0,i.kt)("li",{parentName:"ul"},"The decorator MUST return an object of the same type (or a sub-type)"),(0,i.kt)("li",{parentName:"ul"},"The decorator CAN contain additional parameters. They will be added to the fields of the GraphQL input type."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"@Decorate")," annotation must contain a ",(0,i.kt)("inlineCode",{parentName:"li"},"inputTypeName")," attribute that contains the name of the GraphQL input type\nthat is decorated. If you did not specify this name in the ",(0,i.kt)("inlineCode",{parentName:"li"},"@Factory"),' annotation, this is by default the name of the\nPHP class + "Input" (for instance: "Filter" => "FilterInput")')),(0,i.kt)("div",{class:"alert alert--warning"},(0,i.kt)("strong",null,"Heads up!")," The ",(0,i.kt)("code",null,"MyDecorator")," class must exist in the container of your application and the container identifier MUST be the fully qualified class name.",(0,i.kt)("br",null),(0,i.kt)("br",null),"If you are using the Symfony bundle (or a framework with autowiring like Laravel), this is usually not an issue as the container will automatically create the controller entry if you do not explicitly declare it."))}s.isMDXComponent=!0}}]);