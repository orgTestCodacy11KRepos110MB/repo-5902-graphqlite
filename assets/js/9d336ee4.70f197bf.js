"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1293],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,m=d["".concat(u,".").concat(h)]||d[h]||c[h]||l;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(86010),l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(87462),r=n(67294),l=n(86010),o=n(72389),i=n(67392),u=n(7094),s=n(12466),p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n,o=e.lazy,d=e.block,h=e.defaultValue,m=e.values,f=e.groupId,y=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.l)(g,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===h?h:null!=(t=null!=h?h:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==v&&!g.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,u.U)(),w=T.tabGroupChoices,N=T.setTabGroupChoices,Q=(0,r.useState)(v),P=Q[0],C=Q[1],q=[],L=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var x=w[f];null!=x&&x!==P&&g.some((function(e){return e.value===x}))&&C(x)}var G=function(e){var t=e.currentTarget,n=q.indexOf(t),a=g[n].value;a!==P&&(L(t),C(a),null!=f&&N(f,String(a)))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=q.indexOf(e.currentTarget)+1;n=null!=(a=q[r])?a:q[0];break;case"ArrowLeft":var l,o=q.indexOf(e.currentTarget)-1;n=null!=(l=q[o])?l:q[q.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},y)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:function(e){return q.push(e)},onKeyDown:O,onFocus:G,onClick:G},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":P===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(b.filter((function(e){return e.props.value===P}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function h(e){var t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},88044:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return h}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=n(65488),i=n(85162),u=["components"],s={id:"queries",title:"Queries",sidebar_label:"Queries"},p=void 0,c={unversionedId:"queries",id:"version-6.0/queries",title:"Queries",description:"In GraphQLite, GraphQL queries are created by writing methods in controller classes.",source:"@site/versioned_docs/version-6.0/queries.mdx",sourceDirName:".",slug:"/queries",permalink:"/docs/queries",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-6.0/queries.mdx",tags:[],version:"6.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1655309228,formattedLastUpdatedAt:"6/15/2022",frontMatter:{id:"queries",title:"Queries",sidebar_label:"Queries"},sidebar:"docs",previous:{title:"Other frameworks / No framework",permalink:"/docs/other-frameworks"},next:{title:"Mutations",permalink:"/docs/mutations"}},d={},h=[{value:"Simple query",id:"simple-query",level:2},{value:"About annotations / attributes",id:"about-annotations--attributes",level:2},{value:"Testing the query",id:"testing-the-query",level:2},{value:"Query with a type",id:"query-with-a-type",level:2}],m={toc:h};function f(e){var t=e.components,s=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In GraphQLite, GraphQL queries are created by writing methods in ",(0,l.kt)("em",{parentName:"p"},"controller")," classes."),(0,l.kt)("p",null,"Those classes must be in the controllers namespaces which has been defined when you configured GraphQLite.\nFor instance, in Symfony, the controllers namespace is ",(0,l.kt)("inlineCode",{parentName:"p"},"App\\Controller")," by default."),(0,l.kt)("h2",{id:"simple-query"},"Simple query"),(0,l.kt)("p",null,"In a controller class, each query method must be annotated with the ",(0,l.kt)("inlineCode",{parentName:"p"},"@Query")," annotation. For instance:"),(0,l.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\n\nclass MyController\n{\n    #[Query]\n    public function hello(string $name): string\n    {\n        return 'Hello ' . $name;\n    }\n}\n"))),(0,l.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\n\nclass MyController\n{\n    /**\n     * @Query\n     */\n    public function hello(string $name): string\n    {\n        return 'Hello ' . $name;\n    }\n}\n")))),(0,l.kt)("p",null,"This query is equivalent to the following ",(0,l.kt)("a",{parentName:"p",href:"https://graphql.org/learn/schema/#type-language"},"GraphQL type language"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"Type Query {\n    hello(name: String!): String!\n}\n")),(0,l.kt)("p",null,"As you can see, GraphQLite will automatically do the mapping between PHP types and GraphQL types."),(0,l.kt)("div",{class:"alert alert--warning"},(0,l.kt)("strong",null,"Heads up!")," If you are not using a framework with an autowiring container (like Symfony or Laravel), please be aware that the ",(0,l.kt)("code",null,"MyController")," class must exist in the container of your application. Furthermore, the identifier of the controller in the container MUST be the fully qualified class name of controller."),(0,l.kt)("h2",{id:"about-annotations--attributes"},"About annotations / attributes"),(0,l.kt)("p",null,"GraphQLite relies a lot on annotations (we call them attributes since PHP 8)."),(0,l.kt)("p",null,'It supports both the old "Doctrine annotations" style (',(0,l.kt)("inlineCode",{parentName:"p"},"@Query"),") and the new PHP 8 attributes (",(0,l.kt)("inlineCode",{parentName:"p"},"#[Query]"),")."),(0,l.kt)("p",null,"Read the ",(0,l.kt)("a",{parentName:"p",href:"/docs/doctrine-annotations-attributes"},"Doctrine annotations VS attributes")," documentation if you are not familiar with this concept."),(0,l.kt)("h2",{id:"testing-the-query"},"Testing the query"),(0,l.kt)("p",null,"The default GraphQL endpoint is ",(0,l.kt)("inlineCode",{parentName:"p"},"/graphql"),"."),(0,l.kt)("p",null,"The easiest way to test a GraphQL endpoint is to use ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/graphql/graphiql"},"GraphiQL")," or\n",(0,l.kt)("a",{parentName:"p",href:"https://altair.sirmuel.design/"},"Altair")," clients (they are available as Chrome or Firefox plugins)"),(0,l.kt)("div",{class:"alert alert--info"},"If you are using the Symfony bundle, GraphiQL is also directly embedded.",(0,l.kt)("br",null),"Simply head to ",(0,l.kt)("code",null,"http://[path-to-my-app]/graphiql")),(0,l.kt)("p",null,"Here a query using our simple ",(0,l.kt)("em",{parentName:"p"},"Hello World")," example:"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(91410).Z,width:"1132",height:"352"})),(0,l.kt)("h2",{id:"query-with-a-type"},"Query with a type"),(0,l.kt)("p",null,"So far, we simply declared a query. But we did not yet declare a type."),(0,l.kt)("p",null,"Let's assume you want to return a product:"),(0,l.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\n\nclass ProductController\n{\n    #[Query]\n    public function product(string $id): Product\n    {\n        // Some code that looks for a product and returns it.\n    }\n}\n"))),(0,l.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\n\nclass ProductController\n{\n    /**\n     * @Query\n     */\n    public function product(string $id): Product\n    {\n        // Some code that looks for a product and returns it.\n    }\n}\n")))),(0,l.kt)("p",null,"As the ",(0,l.kt)("inlineCode",{parentName:"p"},"Product")," class is not a scalar type, you must tell GraphQLite how to handle it:"),(0,l.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n#[Type]\nclass Product\n{\n    // ...\n\n    #[Field]\n    public function getName(): string\n    {\n        return $this->name;\n    }\n\n    #[Field]\n    public function getPrice(): ?float\n    {\n        return $this->price;\n    }\n}\n"))),(0,l.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n/**\n * @Type()\n */\nclass Product\n{\n    // ...\n\n    /**\n     * @Field()\n     */\n    public function getName(): string\n    {\n        return $this->name;\n    }\n\n    /**\n     * @Field()\n     */\n    public function getPrice(): ?float\n    {\n        return $this->price;\n    }\n}\n")))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"@Type")," annotation is used to inform GraphQLite that the ",(0,l.kt)("inlineCode",{parentName:"p"},"Product")," class is a GraphQL type."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"@Field")," annotation is used to define the GraphQL fields. This annotation must be put on a ",(0,l.kt)("strong",{parentName:"p"},"public method"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Product")," class must be in one of the ",(0,l.kt)("em",{parentName:"p"},"types")," namespaces. As for ",(0,l.kt)("em",{parentName:"p"},"controller")," classes, you configured this namespace when you installed\nGraphQLite. By default, in Symfony, the allowed types namespaces are ",(0,l.kt)("inlineCode",{parentName:"p"},"App\\Entity")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"App\\Types"),"."),(0,l.kt)("p",null,"This query is equivalent to the following ",(0,l.kt)("a",{parentName:"p",href:"https://graphql.org/learn/schema/#type-language"},"GraphQL type language"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"Type Product {\n    name: String!\n    price: Float\n}\n")),(0,l.kt)("div",{class:"alert alert--info"},(0,l.kt)("p",null,"If you are used to  ",(0,l.kt)("a",{href:"https://en.wikipedia.org/wiki/Domain-driven_design"},"Domain driven design"),", you probably realize that the ",(0,l.kt)("code",null,"Product")," class is part of your ",(0,l.kt)("i",null,"domain"),"."),(0,l.kt)("p",null,"GraphQL annotations are adding some serialization logic that is out of scope of the domain. These are ",(0,l.kt)("i",null,"just")," annotations and for most project, this is the fastest and easiest route."),(0,l.kt)("p",null,"If you feel that GraphQL annotations do not belong to the domain, or if you cannot modify the class directly (maybe because it is part of a third party library), there is another way to create types without annotating the domain class. We will explore that in the next chapter.")))}f.isMDXComponent=!0},91410:function(e,t,n){t.Z=n.p+"assets/images/query1-5a22bbe2398efcc725ea571a07ff2c9b.png"}}]);