"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8845],{58215:function(t,e,n){var a=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,o=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},e)}},55064:function(t,e,n){n.d(e,{Z:function(){return d}});var a=n(87462),o=n(67294),r=n(72389),i=n(79443);var s=function(){var t=(0,o.useContext)(i.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},l=n(83039),u=n(86010),c="tabItem_vU9c";function p(t){var e,n,a,r=t.lazy,i=t.block,p=t.defaultValue,d=t.values,h=t.groupId,m=t.className,b=o.Children.map(t.children,(function(t){if((0,o.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:b.map((function(t){var e=t.props;return{value:e.value,label:e.label}})),g=(0,l.lx)(f,(function(t,e){return t.value===e.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(e=null!=p?p:null==(n=b.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(a=b[0])?void 0:a.props.value;if(null!==v&&!f.some((function(t){return t.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=s(),y=k.tabGroupChoices,A=k.setTabGroupChoices,T=(0,o.useState)(v),w=T[0],P=T[1],N=[],L=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var C=y[h];null!=C&&C!==w&&f.some((function(t){return t.value===C}))&&P(C)}var D=function(t){var e=t.currentTarget,n=N.indexOf(e),a=f[n].value;a!==w&&(L(e),P(a),null!=h&&A(h,a))},H=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=N.indexOf(t.currentTarget)+1;n=N[a]||N[0];break;case"ArrowLeft":var o=N.indexOf(t.currentTarget)-1;n=N[o]||N[N.length-1]}null==(e=n)||e.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},m)},f.map((function(t){var e=t.value,n=t.label;return o.createElement("li",{role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":w===e}),key:e,ref:function(t){return N.push(t)},onKeyDown:H,onFocus:D,onClick:D},null!=n?n:e)}))),r?(0,o.cloneElement)(b.filter((function(t){return t.props.value===w}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},b.map((function(t,e){return(0,o.cloneElement)(t,{key:e,hidden:t.props.value!==w})}))))}function d(t){var e=(0,r.Z)();return o.createElement(p,(0,a.Z)({key:String(e)},t))}},86912:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=n(55064),s=n(58215),l=["components"],u={id:"doctrine-annotations-attributes",title:"Doctrine annotations VS PHP8 attributes",sidebar_label:"Annotations VS Attributes"},c=void 0,p={unversionedId:"doctrine-annotations-attributes",id:"doctrine-annotations-attributes",isDocsHomePage:!1,title:"Doctrine annotations VS PHP8 attributes",description:"GraphQLite is heavily relying on the concept of annotations (also called attributes in PHP 8+).",source:"@site/docs/doctrine-annotations-attributes.mdx",sourceDirName:".",slug:"/doctrine-annotations-attributes",permalink:"/docs/next/doctrine-annotations-attributes",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/docs/doctrine-annotations-attributes.mdx",tags:[],version:"current",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1639950942,formattedLastUpdatedAt:"12/19/2021",frontMatter:{id:"doctrine-annotations-attributes",title:"Doctrine annotations VS PHP8 attributes",sidebar_label:"Annotations VS Attributes"},sidebar:"docs",previous:{title:"Migrating",permalink:"/docs/next/migrating"},next:{title:"Annotations reference",permalink:"/docs/next/annotations-reference"}},d=[{value:"Doctrine annotations",id:"doctrine-annotations",children:[],level:2},{value:"PHP 8 attributes",id:"php-8-attributes",children:[],level:2},{value:"Migrating from Doctrine annotations to PHP 8 attributes",id:"migrating-from-doctrine-annotations-to-php-8-attributes",children:[],level:2}],h={toc:d};function m(t){var e=t.components,n=(0,o.Z)(t,l);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"GraphQLite is heavily relying on the concept of annotations (also called attributes in PHP 8+)."),(0,r.kt)("h2",{id:"doctrine-annotations"},"Doctrine annotations"),(0,r.kt)("div",{class:"alert alert--warning"},(0,r.kt)("strong",null,"Deprecated!")," Doctrine annotations are deprecated in favor of native PHP 8 attributes. Support will be dropped in a future release."),(0,r.kt)("p",null,'Historically, attributes were not available in PHP and PHP developers had to "trick" PHP to get annotation support.  This was the purpose of the ',(0,r.kt)("a",{parentName:"p",href:"https://www.doctrine-project.org/projects/doctrine-annotations/en/latest/index.html"},"doctrine/annotation")," library."),(0,r.kt)("p",null,"Using Doctrine annotations, you write annotations in your docblocks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n/**\n * @Type\n */\nclass MyType\n{\n}\n")),(0,r.kt)("p",null,"Please note that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The annotation is added in a ",(0,r.kt)("strong",{parentName:"li"},"docblock"),' (a comment starting with "',(0,r.kt)("inlineCode",{parentName:"li"},"/**"),'")'),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Type")," part is actually a class. It must be declared in the ",(0,r.kt)("inlineCode",{parentName:"li"},"use")," statements at the top of your file.")),(0,r.kt)("div",{class:"alert alert--info"},(0,r.kt)("strong",null,"Heads up!"),(0,r.kt)("p",null,"Some IDEs provide support for Doctrine annotations:"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"PhpStorm via the ",(0,r.kt)("a",{href:"https://plugins.jetbrains.com/plugin/7320-php-annotations"},"PHP Annotations Plugin")),(0,r.kt)("li",null,"Eclipse via the ",(0,r.kt)("a",{href:"https://marketplace.eclipse.org/content/symfony-plugin"},"Symfony 2 Plugin")),(0,r.kt)("li",null,"Netbeans has native support")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"We strongly recommend using an IDE that has Doctrine annotations support.\n"))),(0,r.kt)("h2",{id:"php-8-attributes"},"PHP 8 attributes"),(0,r.kt)("p",null,'Starting with PHP 8, PHP got native annotations support. They are actually called "attributes" in the PHP world.'),(0,r.kt)("p",null,"The same code can be written this way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n#[Type]\nclass MyType\n{\n}\n")),(0,r.kt)("p",null,"GraphQLite v4.1+ has support for PHP 8 attributes."),(0,r.kt)("p",null,"The Doctrine annotation class and the PHP 8 attribute class is ",(0,r.kt)("strong",{parentName:"p"},"the same")," (so you will be using the same ",(0,r.kt)("inlineCode",{parentName:"p"},"use")," statement at the top of your file)."),(0,r.kt)("p",null,"They support the same attributes too."),(0,r.kt)("p",null,"A few notable differences:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PHP 8 attributes do not support nested attributes (unlike Doctrine annotations). This means there is no equivalent to the ",(0,r.kt)("inlineCode",{parentName:"li"},"annotations")," attribute of ",(0,r.kt)("inlineCode",{parentName:"li"},"@MagicField")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"@SourceField"),"."),(0,r.kt)("li",{parentName:"ul"},'PHP 8 attributes can be written at the parameter level. Any attribute targeting a "parameter" must be written at the parameter level.')),(0,r.kt)("p",null,"Let's take an example with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/autowiring"},(0,r.kt)("inlineCode",{parentName:"a"},"#Autowire")," attribute"),":"),(0,r.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"php8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"#[Field]\npublic function getProduct(#[Autowire] ProductRepository $productRepository) : Product {\n    //...\n}\n"))),(0,r.kt)(s.Z,{value:"php7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Field\n * @Autowire(for="$productRepository")\n */\npublic function getProduct(ProductRepository $productRepository) : Product {\n    //...\n}\n')))),(0,r.kt)("h2",{id:"migrating-from-doctrine-annotations-to-php-8-attributes"},"Migrating from Doctrine annotations to PHP 8 attributes"),(0,r.kt)("p",null,"The good news is that you can easily migrate from Doctrine annotations to PHP 8 attributes using the amazing, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rectorphp/rector"},"Rector library"),".  To do so, you'll want to use the following rector configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="rector.php"',title:'"rector.php"'},"<?php\n\nuse Rector\\Core\\Configuration\\Option;\nuse Rector\\Php80\\Rector\\Class_\\AnnotationToAttributeRector;\nuse Rector\\Php80\\ValueObject\\AnnotationToAttribute;\nuse Rector\\Set\\ValueObject\\SetList;\nuse Symfony\\Component\\DependencyInjection\\Loader\\Configurator\\ContainerConfigurator;\nuse TheCodingMachine\\GraphQLite\\Annotations as GraphQLite;\n\nreturn static function (ContainerConfigurator $containerConfigurator): void {\n    // Here we can define, what sets of rules will be applied\n    // tip: use \"SetList\" class to autocomplete sets\n    // $containerConfigurator->import(SetList::CODE_QUALITY);\n\n    // Set parameters\n    $parameters = $containerConfigurator->parameters();\n    $parameters->set(Option::PATHS, [\n        __DIR__ . '/src',\n        __DIR__ . '/tests',\n    ]);\n\n    $services = $containerConfigurator->services();\n\n    // @Validate and @Assertion are part of other libraries, include if necessary\n    $services->set(AnnotationToAttributeRector::class)\n        ->configure([\n            new AnnotationToAttribute(GraphQLite\\Query::class),\n            new AnnotationToAttribute(GraphQLite\\Mutation::class),\n            new AnnotationToAttribute(GraphQLite\\Type::class),\n            new AnnotationToAttribute(GraphQLite\\ExtendType::class),\n            new AnnotationToAttribute(GraphQLite\\Input::class),\n            new AnnotationToAttribute(GraphQLite\\Field::class),\n            new AnnotationToAttribute(GraphQLite\\SourceField::class),\n            new AnnotationToAttribute(GraphQLite\\MagicField::class),\n            new AnnotationToAttribute(GraphQLite\\Logged::class),\n            new AnnotationToAttribute(GraphQLite\\Right::class),\n            new AnnotationToAttribute(GraphQLite\\FailWith::class),\n            new AnnotationToAttribute(GraphQLite\\HideIfUnauthorized::class),\n            new AnnotationToAttribute(GraphQLite\\InjectUser::class),\n            new AnnotationToAttribute(GraphQLite\\Security::class),\n            new AnnotationToAttribute(GraphQLite\\Factory::class),\n            new AnnotationToAttribute(GraphQLite\\UseInputType::class),\n            new AnnotationToAttribute(GraphQLite\\Decorate::class),\n            new AnnotationToAttribute(GraphQLite\\Autowire::class),\n            new AnnotationToAttribute(GraphQLite\\HideParameter::class),\n            new AnnotationToAttribute(GraphQLite\\EnumType::class),\n        ]);\n};\n")))}m.isMDXComponent=!0}}]);