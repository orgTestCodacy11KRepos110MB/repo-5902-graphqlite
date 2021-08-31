"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4466],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53311:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"laravel-package-advanced",title:"Laravel package: advanced usage",sidebar_label:"Laravel specific features",original_id:"laravel-package-advanced"},p=void 0,s={unversionedId:"laravel-package-advanced",id:"version-4.0/laravel-package-advanced",isDocsHomePage:!1,title:"Laravel package: advanced usage",description:"The Laravel package comes with a number of features to ease the integration of GraphQLite in Laravel.",source:"@site/versioned_docs/version-4.0/laravel-package-advanced.mdx",sourceDirName:".",slug:"/laravel-package-advanced",permalink:"/docs/4.0/laravel-package-advanced",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/laravel-package-advanced.mdx",tags:[],version:"4.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1630401839,formattedLastUpdatedAt:"8/31/2021",frontMatter:{id:"laravel-package-advanced",title:"Laravel package: advanced usage",sidebar_label:"Laravel specific features",original_id:"laravel-package-advanced"},sidebar:"version-4.0/docs",previous:{title:"Symfony specific features",permalink:"/docs/4.0/symfony-bundle-advanced"},next:{title:"Internals",permalink:"/docs/4.0/internals"}},u=[{value:"Support for Laravel validation rules",id:"support-for-laravel-validation-rules",children:[]},{value:"Support for pagination",id:"support-for-pagination",children:[{value:"Simple paginator",id:"simple-paginator",children:[]}]},{value:"Using GraphQLite with Eloquent efficiently",id:"using-graphqlite-with-eloquent-efficiently",children:[{value:"Pitfalls to avoid with Eloquent",id:"pitfalls-to-avoid-with-eloquent",children:[]}]}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Laravel package comes with a number of features to ease the integration of GraphQLite in Laravel."),(0,i.kt)("h2",{id:"support-for-laravel-validation-rules"},"Support for Laravel validation rules"),(0,i.kt)("p",null,"The GraphQLite Laravel package comes with a special ",(0,i.kt)("inlineCode",{parentName:"p"},"@Validate")," annotation to use Laravel validation rules in your input types."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Laravel\\Annotations\\Validate;\n\nclass MyController\n{\n    /**\n     * @Mutation\n     * @Validate(for="$email", rule="email|unique:users")\n     * @Validate(for="$password", rule="gte:8")\n     */\n    public function createUser(string $email, string $password): User\n    {\n        // ...\n    }\n}\n')),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Validate")," annotation in any query / mutation / field / factory / decorator."),(0,i.kt)("p",null,'If a validation fails to pass, the message will be printed in the "errors" section and you will get a HTTP 400 status code:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "errors": [\n        {\n            "message": "The email must be a valid email address.",\n            "extensions": {\n                "argument": "email",\n                "category": "Validate"\n            }\n        },\n        {\n            "message": "The password must be greater than or equal 8 characters.",\n            "extensions": {\n                "argument": "password",\n                "category": "Validate"\n            }\n        }\n    ]\n}\n')),(0,i.kt)("p",null,"You can use any validation rule described in ",(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/6.x/validation#available-validation-rules"},"the Laravel documentation")),(0,i.kt)("h2",{id:"support-for-pagination"},"Support for pagination"),(0,i.kt)("p",null,"In your query, if you explicitly return an object that extends  ",(0,i.kt)("inlineCode",{parentName:"p"},"Illuminate\\Pagination\\LengthAwarePaginator"),' class, the query result will be wrapped in a\n"paginator" type.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @Query\n     * @return Product[]\n     */\n    public function products(): Illuminate\\Pagination\\LengthAwarePaginator\n    {\n        return Product::paginate(15);\n    }\n}\n")),(0,i.kt)("p",null,"Notice that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the method return type MUST BE ",(0,i.kt)("inlineCode",{parentName:"li"},"Illuminate\\Pagination\\LengthAwarePaginator")," or a class extending ",(0,i.kt)("inlineCode",{parentName:"li"},"Illuminate\\Pagination\\LengthAwarePaginator")),(0,i.kt)("li",{parentName:"ul"},"you MUST add a ",(0,i.kt)("inlineCode",{parentName:"li"},"@return")," statement to help GraphQLite find the type of the list")),(0,i.kt)("p",null,"Once this is done, you can get plenty of useful information about this page:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'products {\n    items {      # The items for the selected page\n        id\n        name\n    }\n    totalCount   # The total count of items.\n    lastPage     # Get the page number of the last available page.\n    firstItem    # Get the "index" of the first item being paginated.\n    lastItem     # Get the "index" of the last item being paginated.\n    hasMorePages # Determine if there are more items in the data source.\n    perPage      # Get the number of items shown per page.\n    hasPages     # Determine if there are enough items to split into multiple pages.\n    currentPage  # Determine the current page being paginated.\n    isEmpty      # Determine if the list of items is empty or not.\n    isNotEmpty   # Determine if the list of items is not empty.\n}\n')),(0,i.kt)("div",{class:"alert alert--warning"},"Be sure to type hint on the class (`Illuminate\\Pagination\\LengthAwarePaginator`) and not on the interface (`Illuminate\\Contracts\\Pagination\\LengthAwarePaginator`). The interface itself is not iterable (it does not extend `Traversable`) and therefore, GraphQLite will refuse to iterate over it."),(0,i.kt)("h3",{id:"simple-paginator"},"Simple paginator"),(0,i.kt)("p",null,"Note: if you are using ",(0,i.kt)("inlineCode",{parentName:"p"},"simplePaginate")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"paginate"),", you can type hint on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Illuminate\\Pagination\\Paginator")," class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @Query\n     * @return Product[]\n     */\n    public function products(): Illuminate\\Pagination\\Paginator\n    {\n        return Product::simplePaginate(15);\n    }\n}\n")),(0,i.kt)("p",null,"The behaviour will be exactly the same except you will be missing the ",(0,i.kt)("inlineCode",{parentName:"p"},"totalCount")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"lastPage")," fields."),(0,i.kt)("h2",{id:"using-graphqlite-with-eloquent-efficiently"},"Using GraphQLite with Eloquent efficiently"),(0,i.kt)("p",null,"In GraphQLite, you are supposed to put a ",(0,i.kt)("inlineCode",{parentName:"p"},"@Field")," annotation on each getter."),(0,i.kt)("p",null,"Eloquent uses PHP magic properties to expose your database records.\nBecause Eloquent relies on magic properties, it is quite rare for an Eloquent model to have proper getters and setters."),(0,i.kt)("p",null,"So we need to find a workaround. GraphQLite comes with a ",(0,i.kt)("inlineCode",{parentName:"p"},"@MagicField")," annotation to help you\nworking with magic properties."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Type()\n * @MagicField(name="id" outputType="ID!")\n * @MagicField(name="name" phpType="string")\n * @MagicField(name="categories" phpType="Category[]")\n */\nclass Product extends Model\n{\n}\n')),(0,i.kt)("p",null,'Please note that since the properties are "magic", they don\'t have a type. Therefore,\nyou need to pass either the "outputType" attribute with the GraphQL type matching the property,\nor the "phpType" attribute with the PHP type matching the property.'),(0,i.kt)("h3",{id:"pitfalls-to-avoid-with-eloquent"},"Pitfalls to avoid with Eloquent"),(0,i.kt)("p",null,"When designing relationships in Eloquent, you write a method to expose that relationship this way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class User extends Model\n{\n    /**\n     * Get the phone record associated with the user.\n     */\n    public function phone()\n    {\n        return $this->hasOne('App\\Phone');\n    }\n}\n")),(0,i.kt)("p",null,"It would be tempting to put a ",(0,i.kt)("inlineCode",{parentName:"p"},"@Field")," annotation on the ",(0,i.kt)("inlineCode",{parentName:"p"},"phone()")," method, but this will not work. Indeed,\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"phone()")," method does not return a ",(0,i.kt)("inlineCode",{parentName:"p"},"App\\Phone")," object. It is the ",(0,i.kt)("inlineCode",{parentName:"p"},"phone")," magic property that returns it."),(0,i.kt)("p",null,"In short:"),(0,i.kt)("div",{class:"alert alert--danger"},"This does not work:",(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"```php\nclass User extends Model\n{\n    /**\n     * @Field\n     */\n    public function phone()\n    {\n        return $this->hasOne('App\\Phone');\n    }\n}\n```\n"))),(0,i.kt)("div",{class:"alert alert--success"},"This works:",(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'```php\n/**\n* @MagicField(name="phone", phpType="App\\\\Phone")\n*/\nclass User extends Model\n{\n    public function phone()\n    {\n        return $this->hasOne(\'App\\Phone\');\n    }\n}\n```\n'))))}d.isMDXComponent=!0}}]);