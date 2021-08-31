"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9486],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(n),y=r,h=d["".concat(l,".").concat(y)]||d[y]||s[y]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6833:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],u={id:"input-types",title:"Input types",sidebar_label:"Input types",original_id:"input-types"},l=void 0,p={unversionedId:"input-types",id:"version-4.0/input-types",isDocsHomePage:!1,title:"Input types",description:"Let's admit you are developing an API that returns a list of cities around a location.",source:"@site/versioned_docs/version-4.0/input_types.mdx",sourceDirName:".",slug:"/input-types",permalink:"/docs/4.0/input-types",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/input_types.mdx",tags:[],version:"4.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1630401839,formattedLastUpdatedAt:"8/31/2021",frontMatter:{id:"input-types",title:"Input types",sidebar_label:"Input types",original_id:"input-types"},sidebar:"version-4.0/docs",previous:{title:"External type declaration",permalink:"/docs/4.0/external_type_declaration"},next:{title:"Inheritance and interfaces",permalink:"/docs/4.0/inheritance-interfaces"}},c=[{value:"Specifying the input type name",id:"specifying-the-input-type-name",children:[]},{value:"Forcing an input type",id:"forcing-an-input-type",children:[]},{value:"Declaring several input types for the same PHP class",id:"declaring-several-input-types-for-the-same-php-class",children:[]},{value:"Ignoring some parameters",id:"ignoring-some-parameters",children:[]}],s={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Let's admit you are developing an API that returns a list of cities around a location."),(0,o.kt)("p",null,"Your GraphQL query might look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @Query\n     * @return City[]\n     */\n    public function getCities(Location $location, float $radius): array\n    {\n        // Some code that returns an array of cities.\n    }\n}\n\n// Class Location is a simple value-object.\nclass Location\n{\n    private $latitude;\n    private $longitude;\n\n    public function __construct(float $latitude, float $longitude)\n    {\n        $this->latitude = $latitude;\n        $this->longitude = $longitude;\n    }\n\n    public function getLatitude(): float\n    {\n        return $this->latitude;\n    }\n\n    public function getLongitude(): float\n    {\n        return $this->longitude;\n    }\n}\n")),(0,o.kt)("p",null,"If you try to run this code, you will get the following error:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'CannotMapTypeException: cannot map class "Location" to a known GraphQL input type. Check your TypeMapper configuration.\n')),(0,o.kt)("p",null,"You are running into this error because GraphQLite does not know how to handle the ",(0,o.kt)("inlineCode",{parentName:"p"},"Location")," object."),(0,o.kt)("p",null,"In GraphQL, an object passed in parameter of a query or mutation (or any field) is called an ",(0,o.kt)("strong",{parentName:"p"},"Input Type"),"."),(0,o.kt)("p",null,"In order to declare that type, in GraphQLite, we will declare a ",(0,o.kt)("strong",{parentName:"p"},"Factory"),"."),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"Factory")," is a method that takes in parameter all the fields of the input type and return an object."),(0,o.kt)("p",null,"Here is an example of factory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"class MyFactory\n{\n    /**\n     * The Factory annotation will create automatically a LocationInput input type in GraphQL.    \n     *\n     * @Factory()\n     */\n    public function createLocation(float $latitude, float $longitude): Location\n    {\n        return new Location($latitude, $longitude);\n    }\n}\n")),(0,o.kt)("p",null,"and now, you can run query like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mutation {\n  getCities(location: {\n              latitude: 45.0,\n              longitude: 0.0,\n            },\n            radius: 42)\n  {\n    id,\n    name\n  }\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Factories must be declared with the ",(0,o.kt)("strong",{parentName:"li"},"@Factory")," annotation."),(0,o.kt)("li",{parentName:"ul"},"The parameters of the factories are the field of the GraphQL input type")),(0,o.kt)("p",null,"A few important things to notice:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The container MUST contain the factory class. The identifier of the factory MUST be the fully qualified class name of the class that contains the factory.\nThis is usually already the case if you are using a container with auto-wiring capabilities"),(0,o.kt)("li",{parentName:"ul"},"We recommend that you put the factories in the same directories as the types. ")),(0,o.kt)("h3",{id:"specifying-the-input-type-name"},"Specifying the input type name"),(0,o.kt)("p",null,"The GraphQL input type name is derived from the return type of the factory."),(0,o.kt)("p",null,'Given the factory below, the return type is "Location", therefore, the GraphQL input type will be named "LocationInput".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/**\n * @Factory()\n */\npublic function createLocation(float $latitude, float $longitude): Location\n{\n    return new Location($latitude, $longitude);\n}\n")),(0,o.kt)("p",null,'In case you want to override the input type name, you can use the "name" attribute of the @Factory annotation:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'/**\n * @Factory(name="MyNewInputName", default=true)\n */\n')),(0,o.kt)("p",null,'Note that you need to add the "default" attribute is you want your factory to be used by default (more on this in\nthe next chapter).'),(0,o.kt)("p",null,"Unless you want to have several factories for the same PHP class, the input type name will be completely transparent\nto you, so there is no real reason to customize it."),(0,o.kt)("h3",{id:"forcing-an-input-type"},"Forcing an input type"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@UseInputType")," annotation to force an input type of a parameter."),(0,o.kt)("p",null,'Let\'s say you want to force a parameter to be of type "ID", you can use this:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Factory()\n * @UseInputType(for="$id", inputType="ID!")\n */\npublic function getProductById(string $id): Product\n{\n    return $this->productRepository->findById($id);\n}\n')),(0,o.kt)("h3",{id:"declaring-several-input-types-for-the-same-php-class"},"Declaring several input types for the same PHP class"),(0,o.kt)("small",null,"Available in GraphQLite 4.0+"),(0,o.kt)("p",null,"There are situations where a given PHP class might use one factory or another depending on the context."),(0,o.kt)("p",null,"This is often the case when your objects map database entities.\nIn these cases, you can use combine the use of ",(0,o.kt)("inlineCode",{parentName:"p"},"@UseInputType")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@Factory")," annotation to achieve your goal."),(0,o.kt)("p",null,"Here is an annotated sample:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * This class contains 2 factories to create Product objects.\n * The "getProduct" method is used by default to map "Product" classes.\n * The "createProduct" method will generate another input type named "CreateProductInput"\n */\nclass ProductFactory\n{\n    // ...\n    \n    /**\n     * This factory will be used by default to map "Product" classes.\n     * @Factory(name="ProductRefInput", default=true)\n     */\n    public function getProduct(string $id): Product\n    {\n        return $this->productRepository->findById($id);\n    }\n    /**\n     * We specify a name for this input type explicitly.\n     * @Factory(name="CreateProductInput", default=false)\n     */\n    public function createProduct(string $name, string $type): Product\n    {\n        return new Product($name, $type);\n    }\n}\n\nclass ProductController\n{\n    /**\n     * The "createProduct" factory will be used for this mutation.\n     * \n     * @Mutation\n     * @UseInputType(for="$product", inputType="CreateProductInput!")\n     */\n    public function saveProduct(Product $product): Product\n    {\n        // ...\n    }\n    \n    /**\n     * The default "getProduct" factory will be used for this query.\n     *\n     * @Query\n     * @return Color[]\n     */\n    public function availableColors(Product $product): array\n    {\n        // ...\n    }\n}\n')),(0,o.kt)("h3",{id:"ignoring-some-parameters"},"Ignoring some parameters"),(0,o.kt)("small",null,"Available in GraphQLite 4.0+"),(0,o.kt)("p",null,"GraphQLite will automatically map all your parameters to an input type.\nBut sometimes, you might want to avoid exposing some of those parameters."),(0,o.kt)("p",null,"Image your ",(0,o.kt)("inlineCode",{parentName:"p"},"getProductById")," has an additional ",(0,o.kt)("inlineCode",{parentName:"p"},"lazyLoad")," parameter. This parameter is interesting when you call\ndirectly the function in PHP because you can have some level of optimisation on your code. But it is not something that\nyou want to expose in the GraphQL API. Let's hide it! "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Factory()\n * @HideParameter(for="$lazyLoad")\n */\npublic function getProductById(string $id, bool $lazyLoad = true): Product\n{\n    return $this->productRepository->findById($id, $lazyLoad);\n}\n')),(0,o.kt)("p",null,"With the ",(0,o.kt)("inlineCode",{parentName:"p"},"@HideParameter")," annotation, you can choose to remove from the GraphQL schema any argument."),(0,o.kt)("p",null,"To be able to hide an argument, the argument must have a default value."))}d.isMDXComponent=!0}}]);