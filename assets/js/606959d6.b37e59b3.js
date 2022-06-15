"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2272],{58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(87462),l=a(67294),r=a(72389),i=a(79443);var o=function(){var e=(0,l.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=a(83039),u=a(86010),s="tabItem_vU9c";function d(e){var t,a,n,r=e.lazy,i=e.block,d=e.defaultValue,c=e.values,h=e.groupId,m=e.className,g=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=c?c:g.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),f=(0,p.lx)(v,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=g[0])?void 0:n.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=o(),b=y.tabGroupChoices,P=y.setTabGroupChoices,T=(0,l.useState)(k),w=T[0],N=T[1],x=[],C=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var L=b[h];null!=L&&L!==w&&v.some((function(e){return e.value===L}))&&N(L)}var I=function(e){var t=e.currentTarget,a=x.indexOf(t),n=v[a].value;n!==w&&(C(t),N(n),null!=h&&P(h,n))},M=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=x.indexOf(e.currentTarget)+1;a=x[n]||x[0];break;case"ArrowLeft":var l=x.indexOf(e.currentTarget)-1;a=x[l]||x[x.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},m)},v.map((function(e){var t=e.value,a=e.label;return l.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,u.Z)("tabs__item",s,{"tabs__item--active":w===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:M,onFocus:I,onClick:I},null!=a?a:t)}))),r?(0,l.cloneElement)(g.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function c(e){var t=(0,r.Z)();return l.createElement(d,(0,n.Z)({key:String(t)},e))}},83419:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return c}});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),i=a(55064),o=a(58215),p=["components"],u={id:"laravel-package-advanced",title:"Laravel package: advanced usage",sidebar_label:"Laravel specific features"},s=void 0,d={unversionedId:"laravel-package-advanced",id:"version-4.2/laravel-package-advanced",isDocsHomePage:!1,title:"Laravel package: advanced usage",description:"Be advised! This documentation will be removed in a future release.  For current and up-to-date Laravel extension specific documentation, please see the Github repository.",source:"@site/versioned_docs/version-4.2/laravel-package-advanced.mdx",sourceDirName:".",slug:"/laravel-package-advanced",permalink:"/docs/4.2/laravel-package-advanced",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.2/laravel-package-advanced.mdx",tags:[],version:"4.2",lastUpdatedBy:"Andrii Dembitskyi",lastUpdatedAt:1655308727,formattedLastUpdatedAt:"6/15/2022",frontMatter:{id:"laravel-package-advanced",title:"Laravel package: advanced usage",sidebar_label:"Laravel specific features"},sidebar:"version-4.2/docs",previous:{title:"Symfony specific features",permalink:"/docs/4.2/symfony-bundle-advanced"},next:{title:"Internals",permalink:"/docs/4.2/internals"}},c=[{value:"Support for Laravel validation rules",id:"support-for-laravel-validation-rules",children:[],level:2},{value:"Support for pagination",id:"support-for-pagination",children:[{value:"Simple paginator",id:"simple-paginator",children:[],level:3}],level:2},{value:"Using GraphQLite with Eloquent efficiently",id:"using-graphqlite-with-eloquent-efficiently",children:[{value:"Pitfalls to avoid with Eloquent",id:"pitfalls-to-avoid-with-eloquent",children:[],level:3}],level:2}],h={toc:c};function m(e){var t=e.components,a=(0,l.Z)(e,p);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{class:"alert alert--warning"},(0,r.kt)("strong",null,"Be advised!")," This documentation will be removed in a future release.  For current and up-to-date Laravel extension specific documentation, please see the ",(0,r.kt)("a",{href:"https://github.com/thecodingmachine/graphqlite-laravel"},"Github repository"),"."),(0,r.kt)("p",null,"The Laravel package comes with a number of features to ease the integration of GraphQLite in Laravel."),(0,r.kt)("h2",{id:"support-for-laravel-validation-rules"},"Support for Laravel validation rules"),(0,r.kt)("p",null,"The GraphQLite Laravel package comes with a special ",(0,r.kt)("inlineCode",{parentName:"p"},"@Validate")," annotation to use Laravel validation rules in your\ninput types."),(0,r.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Laravel\\Annotations\\Validate;\n\nclass MyController\n{\n    #[Mutation]\n    public function createUser(\n            #[Validate("email|unique:users")]\n            string $email,\n            #[Validate("gte:8")]\n            string $password\n        ): User\n    {\n        // ...\n    }\n}\n'))),(0,r.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Laravel\\Annotations\\Validate;\n\nclass MyController\n{\n    /**\n     * @Mutation\n     * @Validate(for="$email", rule="email|unique:users")\n     * @Validate(for="$password", rule="gte:8")\n     */\n    public function createUser(string $email, string $password): User\n    {\n        // ...\n    }\n}\n')))),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Validate")," annotation in any query / mutation / field / factory / decorator."),(0,r.kt)("p",null,'If a validation fails to pass, the message will be printed in the "errors" section and you will get a HTTP 400 status code:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "errors": [\n        {\n            "message": "The email must be a valid email address.",\n            "extensions": {\n                "argument": "email",\n                "category": "Validate"\n            }\n        },\n        {\n            "message": "The password must be greater than or equal 8 characters.",\n            "extensions": {\n                "argument": "password",\n                "category": "Validate"\n            }\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"You can use any validation rule described in ",(0,r.kt)("a",{parentName:"p",href:"https://laravel.com/docs/6.x/validation#available-validation-rules"},"the Laravel documentation")),(0,r.kt)("h2",{id:"support-for-pagination"},"Support for pagination"),(0,r.kt)("p",null,"In your query, if you explicitly return an object that extends the ",(0,r.kt)("inlineCode",{parentName:"p"},"Illuminate\\Pagination\\LengthAwarePaginator"),' class,\nthe query result will be wrapped in a "paginator" type.'),(0,r.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @return Product[]\n     */\n    #[Query]\n    public function products(): Illuminate\\Pagination\\LengthAwarePaginator\n    {\n        return Product::paginate(15);\n    }\n}\n"))),(0,r.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @Query\n     * @return Product[]\n     */\n    public function products(): Illuminate\\Pagination\\LengthAwarePaginator\n    {\n        return Product::paginate(15);\n    }\n}\n")))),(0,r.kt)("p",null,"Notice that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the method return type MUST BE ",(0,r.kt)("inlineCode",{parentName:"li"},"Illuminate\\Pagination\\LengthAwarePaginator")," or a class extending ",(0,r.kt)("inlineCode",{parentName:"li"},"Illuminate\\Pagination\\LengthAwarePaginator")),(0,r.kt)("li",{parentName:"ul"},"you MUST add a ",(0,r.kt)("inlineCode",{parentName:"li"},"@return")," statement to help GraphQLite find the type of the list")),(0,r.kt)("p",null,"Once this is done, you can get plenty of useful information about this page:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'products {\n    items {      # The items for the selected page\n        id\n        name\n    }\n    totalCount   # The total count of items.\n    lastPage     # Get the page number of the last available page.\n    firstItem    # Get the "index" of the first item being paginated.\n    lastItem     # Get the "index" of the last item being paginated.\n    hasMorePages # Determine if there are more items in the data source.\n    perPage      # Get the number of items shown per page.\n    hasPages     # Determine if there are enough items to split into multiple pages.\n    currentPage  # Determine the current page being paginated.\n    isEmpty      # Determine if the list of items is empty or not.\n    isNotEmpty   # Determine if the list of items is not empty.\n}\n')),(0,r.kt)("div",{class:"alert alert--warning"},"Be sure to type hint on the class (",(0,r.kt)("code",null,"Illuminate\\Pagination\\LengthAwarePaginator"),") and not on the interface (",(0,r.kt)("code",null,"Illuminate\\Contracts\\Pagination\\LengthAwarePaginator"),"). The interface itself is not iterable (it does not extend ",(0,r.kt)("code",null,"Traversable"),") and therefore, GraphQLite will refuse to iterate over it."),(0,r.kt)("h3",{id:"simple-paginator"},"Simple paginator"),(0,r.kt)("p",null,"Note: if you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"simplePaginate")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"paginate"),", you can type hint on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Illuminate\\Pagination\\Paginator")," class."),(0,r.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @return Product[]\n     */\n    #[Query]\n    public function products(): Illuminate\\Pagination\\Paginator\n    {\n        return Product::simplePaginate(15);\n    }\n}\n"))),(0,r.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @Query\n     * @return Product[]\n     */\n    public function products(): Illuminate\\Pagination\\Paginator\n    {\n        return Product::simplePaginate(15);\n    }\n}\n")))),(0,r.kt)("p",null,"The behaviour will be exactly the same except you will be missing the ",(0,r.kt)("inlineCode",{parentName:"p"},"totalCount")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"lastPage")," fields."),(0,r.kt)("h2",{id:"using-graphqlite-with-eloquent-efficiently"},"Using GraphQLite with Eloquent efficiently"),(0,r.kt)("p",null,"In GraphQLite, you are supposed to put a ",(0,r.kt)("inlineCode",{parentName:"p"},"@Field")," annotation on each getter."),(0,r.kt)("p",null,"Eloquent uses PHP magic properties to expose your database records.\nBecause Eloquent relies on magic properties, it is quite rare for an Eloquent model to have proper getters and setters."),(0,r.kt)("p",null,"So we need to find a workaround. GraphQLite comes with a ",(0,r.kt)("inlineCode",{parentName:"p"},"@MagicField")," annotation to help you\nworking with magic properties."),(0,r.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'#[Type]\n#[MagicField(name: "id", outputType: "ID!")]\n#[MagicField(name: "name", phpType: "string")]\n#[MagicField(name: "categories", phpType: "Category[]")]\nclass Product extends Model\n{\n}\n'))),(0,r.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Type()\n * @MagicField(name="id", outputType="ID!")\n * @MagicField(name="name", phpType="string")\n * @MagicField(name="categories", phpType="Category[]")\n */\nclass Product extends Model\n{\n}\n')))),(0,r.kt)("p",null,'Please note that since the properties are "magic", they don\'t have a type. Therefore,\nyou need to pass either the "outputType" attribute with the GraphQL type matching the property,\nor the "phpType" attribute with the PHP type matching the property.'),(0,r.kt)("h3",{id:"pitfalls-to-avoid-with-eloquent"},"Pitfalls to avoid with Eloquent"),(0,r.kt)("p",null,"When designing relationships in Eloquent, you write a method to expose that relationship this way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class User extends Model\n{\n    /**\n     * Get the phone record associated with the user.\n     */\n    public function phone()\n    {\n        return $this->hasOne('App\\Phone');\n    }\n}\n")),(0,r.kt)("p",null,"It would be tempting to put a ",(0,r.kt)("inlineCode",{parentName:"p"},"@Field")," annotation on the ",(0,r.kt)("inlineCode",{parentName:"p"},"phone()")," method, but this will not work. Indeed,\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"phone()")," method does not return a ",(0,r.kt)("inlineCode",{parentName:"p"},"App\\Phone")," object. It is the ",(0,r.kt)("inlineCode",{parentName:"p"},"phone")," magic property that returns it."),(0,r.kt)("p",null,"In short:"),(0,r.kt)("div",{class:"alert alert--danger"},"This does not work:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class User extends Model\n{\n    /**\n    * @Field\n    */\n    public function phone()\n    {\n        return $this->hasOne('App\\Phone');\n    }\n}\n"))),(0,r.kt)("div",{class:"alert alert--success"},"This works:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @MagicField(name="phone", phpType="App\\\\Phone")\n */\nclass User extends Model\n{\n    public function phone()\n    {\n        return $this->hasOne(\'App\\Phone\');\n    }\n}\n'))))}m.isMDXComponent=!0}}]);