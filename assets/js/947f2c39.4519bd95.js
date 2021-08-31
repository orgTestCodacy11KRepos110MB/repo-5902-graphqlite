"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6489],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,p=function(e,t){if(null==e)return{};var n,a,p={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,p=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=s(n),m=p,d=y["".concat(l,".").concat(m)]||y[m]||c[m]||r;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function m(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=n.length,o=new Array(r);o[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:p,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},25146:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return y}});var a=n(87462),p=n(63366),r=(n(67294),n(3905)),o=["components"],i={id:"custom-types",title:"Custom types",sidebar_label:"Custom types",original_id:"custom-types"},l=void 0,s={unversionedId:"custom-types",id:"version-4.0/custom-types",isDocsHomePage:!1,title:"Custom types",description:"In some special cases, you want to override the GraphQL return type that is attributed by default by GraphQLite.",source:"@site/versioned_docs/version-4.0/custom_types.mdx",sourceDirName:".",slug:"/custom-types",permalink:"/docs/4.0/custom-types",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/custom_types.mdx",tags:[],version:"4.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1630401839,formattedLastUpdatedAt:"8/31/2021",frontMatter:{id:"custom-types",title:"Custom types",sidebar_label:"Custom types",original_id:"custom-types"},sidebar:"version-4.0/docs",previous:{title:"Pagination",permalink:"/docs/4.0/pagination"},next:{title:"Custom annotations",permalink:"/docs/4.0/field-middlewares"}},u=[{value:"Usage",id:"usage",children:[]},{value:"Registering a custom output type (advanced)",id:"registering-a-custom-output-type-advanced",children:[{value:"Symfony users",id:"symfony-users",children:[]},{value:"Other frameworks",id:"other-frameworks",children:[]}]},{value:"Registering a custom scalar type (advanced)",id:"registering-a-custom-scalar-type-advanced",children:[]}],c={toc:u};function y(e){var t=e.components,n=(0,p.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In some special cases, you want to override the GraphQL return type that is attributed by default by GraphQLite."),(0,r.kt)("p",null,"For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Type(class=Product::class)\n */\nclass ProductType\n{\n    /**\n     * @Field(name="id")\n     */\n    public function getId(Product $source): string\n    {\n        return $source->getId();\n    }\n}\n')),(0,r.kt)("p",null,"In the example above, GraphQLite will generate a GraphQL schema with a field ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," of type ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Product {\n    id: String!\n}\n")),(0,r.kt)("p",null,"GraphQL comes with an ",(0,r.kt)("inlineCode",{parentName:"p"},"ID")," scalar type. But PHP has no such type. So GraphQLite does not know when a variable\nis an ",(0,r.kt)("inlineCode",{parentName:"p"},"ID")," or not."),(0,r.kt)("p",null,"You can help GraphQLite by manually specifying the output type to use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'    /**\n     * @Field(name="id", outputType="ID")\n     */\n')),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"outputType")," attribute will map the return value of the method to the output type passed in parameter."),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"outputType")," attribute in the following annotations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Query")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Mutation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Field")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@SourceField")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@MagicField"))),(0,r.kt)("h2",{id:"registering-a-custom-output-type-advanced"},"Registering a custom output type (advanced)"),(0,r.kt)("p",null,"In order to create a custom output type, you need to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Design a class that extends ",(0,r.kt)("inlineCode",{parentName:"li"},"GraphQL\\Type\\Definition\\ObjectType"),"."),(0,r.kt)("li",{parentName:"ol"},"Register this class in the GraphQL schema.")),(0,r.kt)("p",null,"You'll find more details on the ",(0,r.kt)("a",{parentName:"p",href:"https://webonyx.github.io/graphql-php/type-system/object-types/"},"Webonyx documentation"),"."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"In order to find existing types, the schema is using ",(0,r.kt)("em",{parentName:"p"},"type mappers")," (classes implementing the ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeMapperInterface")," interface)."),(0,r.kt)("p",null,"You need to make sure that one of these type mappers can return an instance of your type. The way you do this will depend on the framework\nyou use."),(0,r.kt)("h3",{id:"symfony-users"},"Symfony users"),(0,r.kt)("p",null,"Any class extending ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQL\\Type\\Definition\\ObjectType")," (and available in the container) will be automatically detected\nby Symfony and added to the schema."),(0,r.kt)("p",null,"If you want to automatically map the output type to a given PHP class, you will have to explicitly declare the output type\nas a service and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql.output_type")," tag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# config/services.yaml\nservices:\n    App\\MyOutputType:\n        tags:\n            - { name: 'graphql.output_type', class: 'App\\MyPhpClass' }\n")),(0,r.kt)("h3",{id:"other-frameworks"},"Other frameworks"),(0,r.kt)("p",null,"The easiest way is to use a ",(0,r.kt)("inlineCode",{parentName:"p"},"StaticTypeMapper"),". This class is used to register custom output types."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"// Sample code:\n$staticTypeMapper = new StaticTypeMapper();\n\n// Let's register a type that maps by default to the \"MyClass\" PHP class\n$staticTypeMapper->setTypes([\n    MyClass::class => new MyCustomOutputType()\n]);\n\n// If you don't want your output type to map to any PHP class by default, use:\n$staticTypeMapper->setNotMappedTypes([\n    new MyCustomOutputType()\n]);\n\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"StaticTypeMapper")," instance MUST be registered in your container and linked to a ",(0,r.kt)("inlineCode",{parentName:"p"},"CompositeTypeMapper"),"\nthat will aggregate all the type mappers of the application."),(0,r.kt)("h2",{id:"registering-a-custom-scalar-type-advanced"},"Registering a custom scalar type (advanced)"),(0,r.kt)("p",null,"If you need to add custom scalar types, first, check the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/thecodingmachine/graphqlite-misc-types"},"GraphQLite Misc. Types library"),'.\nIt contains a number of "out-of-the-box" scalar types ready to use and you might find what you need there.'),(0,r.kt)("p",null,"You still need to develop your custom scalar type? Ok, let's get started."),(0,r.kt)("p",null,"In order to add a scalar type in GraphQLite, you need to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"create a ",(0,r.kt)("a",{parentName:"li",href:"https://webonyx.github.io/graphql-php/type-system/scalar-types/#writing-custom-scalar-types"},"Webonyx custom scalar type"),".\nYou do this by creating a class that extends ",(0,r.kt)("inlineCode",{parentName:"li"},"GraphQL\\Type\\Definition\\ScalarType"),"."),(0,r.kt)("li",{parentName:"ul"},'create a "type mapper" that will map PHP types to the GraphQL scalar type. You do this by writing a class implementing the ',(0,r.kt)("inlineCode",{parentName:"li"},"RootTypeMapperInterface"),"."),(0,r.kt)("li",{parentName:"ul"},'create a "type mapper factory" that will be in charge of creating your "type mapper".')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"interface RootTypeMapperInterface\n{\n    public function toGraphQLOutputType(Type $type, ?OutputType $subType, ReflectionMethod $refMethod, DocBlock $docBlockObj): OutputType;\n\n    public function toGraphQLInputType(Type $type, ?InputType $subType, string $argumentName, ReflectionMethod $refMethod, DocBlock $docBlockObj): InputType;\n\n    public function mapNameToType(string $typeName): NamedType;\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"toGraphQLOutputType")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"toGraphQLInputType")," are meant to map a return type (for output types) or a parameter type (for input types)\nto your GraphQL scalar type. Return your scalar type if there is a match or ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," if there no match."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"mapNameToType")," should return your GraphQL scalar type if ",(0,r.kt)("inlineCode",{parentName:"p"},"$typeName")," is the name of your scalar type."),(0,r.kt)("p",null,"RootTypeMapper are organized ",(0,r.kt)("strong",{parentName:"p"},"in a chain")," (they are actually middlewares).\nEach instance of a ",(0,r.kt)("inlineCode",{parentName:"p"},"RootTypeMapper")," holds a reference on the next root type mapper to be called in the chain."),(0,r.kt)("p",null,"For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'class AnyScalarTypeMapper implements RootTypeMapperInterface\n{\n    /** @var RootTypeMapperInterface */\n    private $next;\n\n    public function __construct(RootTypeMapperInterface $next)\n    {\n        $this->next = $next;\n    }\n\n    public function toGraphQLOutputType(Type $type, ?OutputType $subType, ReflectionMethod $refMethod, DocBlock $docBlockObj): ?OutputType\n    {\n        if ($type instanceof Scalar) {\n            // AnyScalarType is a class implementing the Webonyx ScalarType type.\n            return AnyScalarType::getInstance();\n        }\n        // If the PHPDoc type is not "Scalar", let\'s pass the control to the next type mapper in the chain\n        return $this->next->toGraphQLOutputType($type, $subType, $refMethod, $docBlockObj);\n    }\n\n    public function toGraphQLInputType(Type $type, ?InputType $subType, string $argumentName, ReflectionMethod $refMethod, DocBlock $docBlockObj): ?InputType\n    {\n        if ($type instanceof Scalar) {\n            // AnyScalarType is a class implementing the Webonyx ScalarType type.\n            return AnyScalarType::getInstance();\n        }\n        // If the PHPDoc type is not "Scalar", let\'s pass the control to the next type mapper in the chain\n        return $this->next->toGraphQLInputType($type, $subType, $argumentName, $refMethod, $docBlockObj);\n    }\n\n    /**\n     * Returns a GraphQL type by name.\n     * If this root type mapper can return this type in "toGraphQLOutputType" or "toGraphQLInputType", it should\n     * also map these types by name in the "mapNameToType" method.\n     *\n     * @param string $typeName The name of the GraphQL type\n     * @return NamedType\n     */\n    public function mapNameToType(string $typeName): NamedType\n    {\n        if ($typeName === AnyScalarType::NAME) {\n            return AnyScalarType::getInstance();\n        }\n        return $this->next->mapNameToType($typeName);\n    }\n}\n')),(0,r.kt)("p",null,"Now, in order to create an instance of your ",(0,r.kt)("inlineCode",{parentName:"p"},"AnyScalarTypeMapper")," class, you need an instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"$next")," type mapper in the chain.\nHow do you get the ",(0,r.kt)("inlineCode",{parentName:"p"},"$next")," type mapper? Through a factory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class AnyScalarTypeMapperFactory implements RootTypeMapperFactoryInterface\n{\n    public function create(RootTypeMapperInterface $next, RootTypeMapperFactoryContext $context): RootTypeMapperInterface\n    {\n        return new AnyScalarTypeMapper($next);\n    }\n}\n")),(0,r.kt)("p",null,"Now, you need to register this factory in your application, and we are done."),(0,r.kt)("p",null,"You can register your own root mapper factories using the ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaFactory::addRootTypeMapperFactory()")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$schemaFactory->addRootTypeMapperFactory(new AnyScalarTypeMapperFactory());\n")),(0,r.kt)("p",null,'If you are using the Symfony bundle, the factory will be automatically registered, you have nothing to do (the service\nis automatically tagged with the "graphql.root_type_mapper_factory" tag).'))}y.isMDXComponent=!0}}]);