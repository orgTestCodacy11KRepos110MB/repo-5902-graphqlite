"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2905],{58215:function(e,n,a){var t=a(67294);n.Z=function(e){var n=e.children,a=e.hidden,p=e.className;return t.createElement("div",{role:"tabpanel",hidden:a,className:p},n)}},55064:function(e,n,a){a.d(n,{Z:function(){return m}});var t=a(87462),p=a(67294),l=a(72389),r=a(79443);var i=function(){var e=(0,p.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=a(83039),s=a(86010),o="tabItem_vU9c";function c(e){var n,a,t,l=e.lazy,r=e.block,c=e.defaultValue,m=e.values,d=e.groupId,h=e.className,y=p.Children.map(e.children,(function(e){if((0,p.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:y.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),k=(0,u.lx)(f,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(n=null!=c?c:null==(a=y.find((function(e){return e.props.default})))?void 0:a.props.value)?n:null==(t=y[0])?void 0:t.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=i(),v=b.tabGroupChoices,T=b.setTabGroupChoices,N=(0,p.useState)(g),P=N[0],C=N[1],I=[],x=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var Q=v[d];null!=Q&&Q!==P&&f.some((function(e){return e.value===Q}))&&C(Q)}var w=function(e){var n=e.currentTarget,a=I.indexOf(n),t=f[a].value;t!==P&&(x(n),C(t),null!=d&&T(d,t))},L=function(e){var n,a=null;switch(e.key){case"ArrowRight":var t=I.indexOf(e.currentTarget)+1;a=I[t]||I[0];break;case"ArrowLeft":var p=I.indexOf(e.currentTarget)-1;a=I[p]||I[I.length-1]}null==(n=a)||n.focus()};return p.createElement("div",{className:"tabs-container"},p.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},h)},f.map((function(e){var n=e.value,a=e.label;return p.createElement("li",{role:"tab",tabIndex:P===n?0:-1,"aria-selected":P===n,className:(0,s.Z)("tabs__item",o,{"tabs__item--active":P===n}),key:n,ref:function(e){return I.push(e)},onKeyDown:L,onFocus:w,onClick:w},null!=a?a:n)}))),l?(0,p.cloneElement)(y.filter((function(e){return e.props.value===P}))[0],{className:"margin-vert--md"}):p.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return(0,p.cloneElement)(e,{key:n,hidden:e.props.value!==P})}))))}function m(e){var n=(0,l.Z)();return p.createElement(c,(0,t.Z)({key:String(n)},e))}},75769:function(e,n,a){a.r(n),a.d(n,{contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var t=a(87462),p=a(63366),l=(a(67294),a(3905)),r=a(55064),i=a(58215),u=["components"],s={id:"type_mapping",title:"Type mapping",sidebar_label:"Type mapping",original_id:"type_mapping"},o=void 0,c={unversionedId:"type_mapping",id:"version-4.1/type_mapping",isDocsHomePage:!1,title:"Type mapping",description:"As explained in the queries section, the job of GraphQLite is to create GraphQL types from PHP types.",source:"@site/versioned_docs/version-4.1/type_mapping.mdx",sourceDirName:".",slug:"/type_mapping",permalink:"/docs/4.1/type_mapping",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.1/type_mapping.mdx",tags:[],version:"4.1",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1646684703,formattedLastUpdatedAt:"3/7/2022",frontMatter:{id:"type_mapping",title:"Type mapping",sidebar_label:"Type mapping",original_id:"type_mapping"},sidebar:"version-4.1/docs",previous:{title:"Mutations",permalink:"/docs/4.1/mutations"},next:{title:"Autowiring services",permalink:"/docs/4.1/autowiring"}},m=[{value:"Scalar mapping",id:"scalar-mapping",children:[],level:2},{value:"Class mapping",id:"class-mapping",children:[],level:2},{value:"Array mapping",id:"array-mapping",children:[],level:2},{value:"ID mapping",id:"id-mapping",children:[{value:"Force the outputType",id:"force-the-outputtype",children:[],level:3},{value:"ID class",id:"id-class",children:[],level:3}],level:2},{value:"Date mapping",id:"date-mapping",children:[],level:2},{value:"Union types",id:"union-types",children:[],level:2},{value:"Enum types",id:"enum-types",children:[],level:2},{value:"Deprecation of fields",id:"deprecation-of-fields",children:[],level:2},{value:"More scalar types",id:"more-scalar-types",children:[],level:2}],d={toc:m};function h(e){var n=e.components,a=(0,p.Z)(e,u);return(0,l.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"As explained in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/4.1/queries"},"queries")," section, the job of GraphQLite is to create GraphQL types from PHP types."),(0,l.kt)("h2",{id:"scalar-mapping"},"Scalar mapping"),(0,l.kt)("p",null,"Scalar PHP types can be type-hinted to the corresponding GraphQL types:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"int")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bool")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"float"))),(0,l.kt)("p",null,"For instance:"),(0,l.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\n\nclass MyController\n{\n    #[Query]\n    public function hello(string $name): string\n    {\n        return 'Hello ' . $name;\n    }\n}\n"))),(0,l.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\n\nclass MyController\n{\n    /**\n     * @Query\n     */\n    public function hello(string $name): string\n    {\n        return 'Hello ' . $name;\n    }\n}\n")))),(0,l.kt)("h2",{id:"class-mapping"},"Class mapping"),(0,l.kt)("p",null,"When returning a PHP class in a query, you must annotate this class using ",(0,l.kt)("inlineCode",{parentName:"p"},"@Type")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"@Field")," annotations:"),(0,l.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n#[Type]\nclass Product\n{\n    // ...\n\n    #[Field]\n    public function getName(): string\n    {\n        return $this->name;\n    }\n\n    #[Field]\n    public function getPrice(): ?float\n    {\n        return $this->price;\n    }\n}\n"))),(0,l.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n/**\n * @Type()\n */\nclass Product\n{\n    // ...\n\n    /**\n     * @Field()\n     */\n    public function getName(): string\n    {\n        return $this->name;\n    }\n\n    /**\n     * @Field()\n     */\n    public function getPrice(): ?float\n    {\n        return $this->price;\n    }\n}\n")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," The GraphQL output type name generated by GraphQLite is equal to the class name of the PHP class. So if your\nPHP class is ",(0,l.kt)("inlineCode",{parentName:"p"},"App\\Entities\\Product"),', then the GraphQL type will be named "Product".'),(0,l.kt)("p",null,'In case you have several types with the same class name in different namespaces, you will face a naming collision.\nHopefully, you can force the name of the GraphQL output type using the "name" attribute:'),(0,l.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'#[Type(name: "MyProduct")]\nclass Product { /* ... */ }\n'))),(0,l.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Type(name="MyProduct")\n */\nclass Product { /* ... */ }\n')))),(0,l.kt)("div",{class:"alert alert--info"},"You can also put a ",(0,l.kt)("a",{href:"inheritance-interfaces#mapping-interfaces"},(0,l.kt)("code",null,"@Type")," annotation on a PHP interface to map your code to a GraphQL interface"),"."),(0,l.kt)("h2",{id:"array-mapping"},"Array mapping"),(0,l.kt)("p",null,"You can type-hint against arrays (or iterators) as long as you add a detailed ",(0,l.kt)("inlineCode",{parentName:"p"},"@return")," statement in the PHPDoc."),(0,l.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @return User[] <=== we specify that the array is an array of User objects.\n */\n#[Query]\npublic function users(int $limit, int $offset): array\n{\n    // Some code that returns an array of "users".\n}\n'))),(0,l.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Query\n * @return User[] <=== we specify that the array is an array of User objects.\n */\npublic function users(int $limit, int $offset): array\n{\n    // Some code that returns an array of "users".\n}\n')))),(0,l.kt)("h2",{id:"id-mapping"},"ID mapping"),(0,l.kt)("p",null,"GraphQL comes with a native ",(0,l.kt)("inlineCode",{parentName:"p"},"ID")," type. PHP has no such type."),(0,l.kt)("p",null,"There are two ways with GraphQLite to handle such type."),(0,l.kt)("h3",{id:"force-the-outputtype"},"Force the outputType"),(0,l.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'#[Field(outputType: "ID")]\npublic function getId(): string\n{\n    // ...\n}\n'))),(0,l.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Field(outputType="ID")\n */\npublic function getId(): string\n{\n    // ...\n}\n')))),(0,l.kt)("p",null,"Using the ",(0,l.kt)("inlineCode",{parentName:"p"},"outputType")," attribute of the ",(0,l.kt)("inlineCode",{parentName:"p"},"@Field")," annotation, you can force the output type to ",(0,l.kt)("inlineCode",{parentName:"p"},"ID"),"."),(0,l.kt)("p",null,"You can learn more about forcing output types in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/4.1/custom-types"},"custom types section"),"."),(0,l.kt)("h3",{id:"id-class"},"ID class"),(0,l.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Types\\ID;\n\n#[Field]\npublic function getId(): ID\n{\n    // ...\n}\n"))),(0,l.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Types\\ID;\n\n/**\n * @Field\n */\npublic function getId(): ID\n{\n    // ...\n}\n")))),(0,l.kt)("p",null,"Note that you can also use the ",(0,l.kt)("inlineCode",{parentName:"p"},"ID")," class as an input type:"),(0,l.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Types\\ID;\n\n#[Mutation]\npublic function save(ID $id, string $name): Product\n{\n    // ...\n}\n"))),(0,l.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Types\\ID;\n\n/**\n * @Mutation\n */\npublic function save(ID $id, string $name): Product\n{\n    // ...\n}\n")))),(0,l.kt)("h2",{id:"date-mapping"},"Date mapping"),(0,l.kt)("p",null,"Out of the box, GraphQL does not have a ",(0,l.kt)("inlineCode",{parentName:"p"},"DateTime")," type, but we took the liberty to add one, with sensible defaults."),(0,l.kt)("p",null,"When used as an output type, ",(0,l.kt)("inlineCode",{parentName:"p"},"DateTimeImmutable")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"DateTimeInterface")," PHP classes are\nautomatically mapped to this ",(0,l.kt)("inlineCode",{parentName:"p"},"DateTime")," GraphQL type."),(0,l.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"#[Field]\npublic function getDate(): \\DateTimeInterface\n{\n    return $this->date;\n}\n"))),(0,l.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Field\n */\npublic function getDate(): \\DateTimeInterface\n{\n    return $this->date;\n}\n")))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"date")," field will be of type ",(0,l.kt)("inlineCode",{parentName:"p"},"DateTime"),". In the returned JSON response to a query, the date is formatted as a string\nin the ",(0,l.kt)("strong",{parentName:"p"},"ISO8601")," format (aka ATOM format)."),(0,l.kt)("div",{class:"alert alert--danger"},"PHP ",(0,l.kt)("code",null,"DateTime")," type is not supported."),(0,l.kt)("h2",{id:"union-types"},"Union types"),(0,l.kt)("p",null,"You can create a GraphQL union type ",(0,l.kt)("em",{parentName:"p"},"on the fly")," using the pipe ",(0,l.kt)("inlineCode",{parentName:"p"},"|")," operator in the PHPDoc:"),(0,l.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @return Company|Contact <== can return a company OR a contact.\n */\n#[Query]\npublic function companyOrContact(int $id)\n{\n    // Some code that returns a company or a contact.\n}\n"))),(0,l.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Query\n * @return Company|Contact <== can return a company OR a contact.\n */\npublic function companyOrContact(int $id)\n{\n    // Some code that returns a company or a contact.\n}\n")))),(0,l.kt)("h2",{id:"enum-types"},"Enum types"),(0,l.kt)("small",null,"Available in GraphQLite 4.0+"),(0,l.kt)("p",null,"PHP has no native support for enum types. Hopefully, there are a number of PHP libraries that emulate enums in PHP.\nThe most commonly used library is ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/myclabs/php-enum"},"myclabs/php-enum")," and GraphQLite comes with\nnative support for it."),(0,l.kt)("p",null,"You will first need to install ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/myclabs/php-enum"},"myclabs/php-enum"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ composer require myclabs/php-enum\n")),(0,l.kt)("p",null,"Now, any class extending the ",(0,l.kt)("inlineCode",{parentName:"p"},"MyCLabs\\Enum\\Enum")," class will be mapped to a GraphQL enum:"),(0,l.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"use MyCLabs\\Enum\\Enum;\n\nclass StatusEnum extends Enum\n{\n    private const ON = 'on';\n    private const OFF = 'off';\n    private const PENDING = 'pending';\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @return User[]\n */\n#[Query]\npublic function users(StatusEnum $status): array\n{\n    if ($status == StatusEnum::ON()) {\n        // Note that the "magic" ON() method returns an instance of the StatusEnum class.\n        // Also, note that we are comparing this instance using "==" (using "===" would fail as we have 2 different instances here)\n        // ...\n    }\n    // ...\n}\n'))),(0,l.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"use MyCLabs\\Enum\\Enum;\n\nclass StatusEnum extends Enum\n{\n    private const ON = 'on';\n    private const OFF = 'off';\n    private const PENDING = 'pending';\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Query\n * @return User[]\n */\npublic function users(StatusEnum $status): array\n{\n    if ($status == StatusEnum::ON()) {\n        // Note that the "magic" ON() method returns an instance of the StatusEnum class.\n        // Also, note that we are comparing this instance using "==" (using "===" would fail as we have 2 different instances here)\n        // ...\n    }\n    // ...\n}\n')))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"query users($status: StatusEnum!) {}\n    users(status: $status) {\n        id\n    }\n}\n")),(0,l.kt)("p",null,"By default, the name of the GraphQL enum type will be the name of the class. If you have a naming conflict (two classes\nthat live in different namespaces with the same class name), you can solve it using the ",(0,l.kt)("inlineCode",{parentName:"p"},"@EnumType")," annotation:"),(0,l.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Annotations\\EnumType;\n\n#[EnumType(name: "UserStatus")]\nclass StatusEnum extends Enum\n{\n    // ...\n}\n'))),(0,l.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Annotations\\EnumType;\n\n/**\n * @EnumType(name="UserStatus")\n */\nclass StatusEnum extends Enum\n{\n    // ...\n}\n')))),(0,l.kt)("div",{class:"alert alert--warning"},'GraphQLite must be able to find all the classes extending the "MyCLabs\\Enum" class in your project. By default, GraphQLite will look for "Enum" classes in the namespaces declared for the types. For this reason, ',(0,l.kt)("strong",null,"your enum classes MUST be in one of the namespaces declared for the types in your GraphQLite configuration file.")),(0,l.kt)("div",{class:"alert alert--info"},'There are many enumeration library in PHP and you might be using another library. If you want to add support for your own library, this is not extremely difficult to do. You need to register a custom "RootTypeMapper" with GraphQLite. You can learn more about ',(0,l.kt)("em",null,"type mappers")," in the ",(0,l.kt)("a",{href:"internals"},'"internals" documentation'),"and ",(0,l.kt)("a",{href:"https://github.com/thecodingmachine/graphqlite/blob/master/src/Mappers/Root/MyCLabsEnumTypeMapper.php"},"copy/paste and adapt the root type mapper used for myclabs/php-enum"),"."),(0,l.kt)("h2",{id:"deprecation-of-fields"},"Deprecation of fields"),(0,l.kt)("p",null,"You can mark a field as deprecated in your GraphQL Schema by just annotating it with the ",(0,l.kt)("inlineCode",{parentName:"p"},"@deprecated")," PHPDoc annotation."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n/**\n * @Type()\n */\nclass Product\n{\n    // ...\n\n    /**\n     * @Field()\n     */\n    public function getName(): string\n    {\n        return $this->name;\n    }\n\n    /**\n     * @Field()\n     * @deprecated use field `name` instead\n     */\n    public function getProductName(): string\n    {\n        return $this->name;\n    }\n}\n")),(0,l.kt)("p",null,"This will add the ",(0,l.kt)("inlineCode",{parentName:"p"},"@deprecated")," directive to the field in the GraphQL Schema which sets the ",(0,l.kt)("inlineCode",{parentName:"p"},"isDeprecated")," field to ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," and adds the reason to the ",(0,l.kt)("inlineCode",{parentName:"p"},"deprecationReason")," field in an introspection query. Fields marked as deprecated can still be queried, but will be returned in an introspection query only if ",(0,l.kt)("inlineCode",{parentName:"p"},"includeDeprecated")," is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'query {\n    __type(name: "Product") {\n\ufffc       fields(includeDeprecated: true) {\n\ufffc           name\n\ufffc           isDeprecated\n\ufffc           deprecationReason\n\ufffc       }\n\ufffc   }\n}\n')),(0,l.kt)("h2",{id:"more-scalar-types"},"More scalar types"),(0,l.kt)("small",null,"Available in GraphQLite 4.0+"),(0,l.kt)("p",null,'GraphQL supports "custom" scalar types. GraphQLite supports adding more GraphQL scalar types.'),(0,l.kt)("p",null,"If you need more types, you can check the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/thecodingmachine/graphqlite-misc-types"},"GraphQLite Misc. Types library"),".\nIt adds support for more scalar types out of the box in GraphQLite."),(0,l.kt)("p",null,"Or if you have some special needs, ",(0,l.kt)("a",{parentName:"p",href:"custom-types#registering-a-custom-scalar-type-advanced"},"you can develop your own scalar types"),"."))}h.isMDXComponent=!0}}]);