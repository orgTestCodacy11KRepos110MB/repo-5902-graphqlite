"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3545],{58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(87462),r=n(67294),i=n(72389),l=n(79443);var o=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(83039),p=n(86010),s="tabItem_vU9c";function d(e){var t,n,a,i=e.lazy,l=e.block,d=e.defaultValue,c=e.values,m=e.groupId,h=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=c?c:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),v=(0,u.lx)(y,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==b&&!y.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=o(),g=k.tabGroupChoices,x=k.setTabGroupChoices,T=(0,r.useState)(b),F=T[0],N=T[1],_=[],w=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=g[m];null!=C&&C!==F&&y.some((function(e){return e.value===C}))&&N(C)}var E=function(e){var t=e.currentTarget,n=_.indexOf(t),a=y[n].value;a!==F&&(w(t),N(a),null!=m&&x(m,a))},$=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=_.indexOf(e.currentTarget)+1;n=_[a]||_[0];break;case"ArrowLeft":var r=_.indexOf(e.currentTarget)-1;n=_[r]||_[_.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":l},h)},y.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:F===t?0:-1,"aria-selected":F===t,className:(0,p.Z)("tabs__item",s,{"tabs__item--active":F===t}),key:t,ref:function(e){return _.push(e)},onKeyDown:$,onFocus:E,onClick:E},null!=n?n:t)}))),i?(0,r.cloneElement)(f.filter((function(e){return e.props.value===F}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==F})}))))}function c(e){var t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},26633:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=n(55064),o=n(58215),u=["components"],p={id:"extend_input_type",title:"Extending an input type",sidebar_label:"Extending an input type",original_id:"extend_input_type"},s=void 0,d={unversionedId:"extend_input_type",id:"version-4.1/extend_input_type",isDocsHomePage:!1,title:"Extending an input type",description:"Available in GraphQLite 4.0+",source:"@site/versioned_docs/version-4.1/extend_input_type.mdx",sourceDirName:".",slug:"/extend_input_type",permalink:"/docs/4.1/extend_input_type",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.1/extend_input_type.mdx",tags:[],version:"4.1",lastUpdatedBy:"Andrii Dembitskyi",lastUpdatedAt:1655308727,formattedLastUpdatedAt:"6/15/2022",frontMatter:{id:"extend_input_type",title:"Extending an input type",sidebar_label:"Extending an input type",original_id:"extend_input_type"},sidebar:"version-4.1/docs",previous:{title:"Custom argument resolving",permalink:"/docs/4.1/argument-resolving"},next:{title:"Class with multiple output types",permalink:"/docs/4.1/multiple_output_types"}},c=[],m={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("small",null,"Available in GraphQLite 4.0+"),(0,i.kt)("div",{class:"alert alert--info"},"If you are not familiar with the ",(0,i.kt)("code",null,"@Factory")," tag, ",(0,i.kt)("a",{href:"input-types"},'read first the "input types" guide'),"."),(0,i.kt)("p",null,"Fields exposed in a GraphQL input type do not need to be all part of the factory method."),(0,i.kt)("p",null,"Just like with output type (that can be ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.1/extend_type"},"extended using the ",(0,i.kt)("inlineCode",{parentName:"a"},"ExtendType")," annotation"),"), you can extend/modify\nan input type using the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Decorate")," annotation."),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Decorate")," annotation to add additional fields to an input type that is already declared by a ",(0,i.kt)("inlineCode",{parentName:"p"},"@Factory")," annotation,\nor to modify the returned object."),(0,i.kt)("div",{class:"alert alert--info"},"The ",(0,i.kt)("code",null,"@Decorate")," annotation is very useful in scenarios where you cannot touch the ",(0,i.kt)("code",null,"@Factory")," method. This can happen if the ",(0,i.kt)("code",null,"@Factory")," method is defined in a third-party library or if the ",(0,i.kt)("code",null,"@Factory")," method is part of auto-generated code."),(0,i.kt)("p",null,"Let's assume you have a ",(0,i.kt)("inlineCode",{parentName:"p"},"Filter")," class used as an input type. You most certainly have a ",(0,i.kt)("inlineCode",{parentName:"p"},"@Factory")," to create the input type."),(0,i.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class MyFactory\n{\n    #[Factory]\n    public function createFilter(string $name): Filter\n    {\n        // Let's assume you have a flexible 'Filter' class that can accept any kind of filter\n        $filter = new Filter();\n        $filter->addFilter('name', $name);\n        return $filter;\n    }\n}\n"))),(0,i.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class MyFactory\n{\n    /**\n     * @Factory()\n     */\n    public function createFilter(string $name): Filter\n    {\n        // Let's assume you have a flexible 'Filter' class that can accept any kind of filter\n        $filter = new Filter();\n        $filter->addFilter('name', $name);\n        return $filter;\n    }\n}\n")))),(0,i.kt)("p",null,"Assuming you ",(0,i.kt)("strong",{parentName:"p"},"cannot"),' modify the code of this factory, you can still modify the GraphQL input type generated by\nadding a "decorator" around the factory.'),(0,i.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class MyDecorator\n{\n    #[Decorate(inputTypeName: \"FilterInput\")]\n    public function addTypeFilter(Filter $filter, string $type): Filter\n    {\n        $filter->addFilter('type', $type);\n        return $filter;\n    }\n}\n"))),(0,i.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class MyDecorator\n{\n    /**\n     * @Decorate(inputTypeName=\"FilterInput\")\n     */\n    public function addTypeFilter(Filter $filter, string $type): Filter\n    {\n        $filter->addFilter('type', $type);\n        return $filter;\n    }\n}\n")))),(0,i.kt)("p",null,'In the example above, the "Filter" input type is modified. We add an additional "type" field to the input type.'),(0,i.kt)("p",null,"A few things to notice:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The decorator takes the object generated by the factory as first argument"),(0,i.kt)("li",{parentName:"ul"},"The decorator MUST return an object of the same type (or a sub-type)"),(0,i.kt)("li",{parentName:"ul"},"The decorator CAN contain additional parameters. They will be added to the fields of the GraphQL input type."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"@Decorate")," annotation must contain a ",(0,i.kt)("inlineCode",{parentName:"li"},"inputTypeName")," attribute that contains the name of the GraphQL input type\nthat is decorated. If you did not specify this name in the ",(0,i.kt)("inlineCode",{parentName:"li"},"@Factory"),' annotation, this is by default the name of the\nPHP class + "Input" (for instance: "Filter" => "FilterInput")')),(0,i.kt)("div",{class:"alert alert--warning"},(0,i.kt)("strong",null,"Heads up!")," The ",(0,i.kt)("code",null,"MyDecorator")," class must exist in the container of your application and the container identifier MUST be the fully qualified class name.",(0,i.kt)("br",null),(0,i.kt)("br",null),"If you are using the Symfony bundle (or a framework with autowiring like Laravel), this is usually not an issue as the container will automatically create the controller entry if you do not explicitly declare it."))}h.isMDXComponent=!0}}]);