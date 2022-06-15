"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6107],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),a=n(86010),o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(87462),a=n(67294),o=n(86010),i=n(72389),l=n(67392),u=n(7094),s=n(12466),p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n,i=e.lazy,d=e.block,m=e.defaultValue,f=e.values,g=e.groupId,h=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.l)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var P=(0,u.U)(),w=P.tabGroupChoices,O=P.setTabGroupChoices,N=(0,a.useState)(k),T=N[0],E=N[1],x=[],I=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var C=w[g];null!=C&&C!==T&&b.some((function(e){return e.value===C}))&&E(C)}var D=function(e){var t=e.currentTarget,n=x.indexOf(t),r=b[n].value;r!==T&&(I(t),E(r),null!=g&&O(g,String(r)))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=x.indexOf(e.currentTarget)+1;n=null!=(r=x[a])?r:x[0];break;case"ArrowLeft":var o,i=x.indexOf(e.currentTarget)-1;n=null!=(o=x[i])?o:x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},h)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return x.push(e)},onKeyDown:j,onFocus:D,onClick:D},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},7633:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(65488),l=n(85162),u=["components"],s={id:"pagination",title:"Paginating large result sets",sidebar_label:"Pagination",original_id:"pagination"},p=void 0,c={unversionedId:"pagination",id:"version-4.1/pagination",title:"Paginating large result sets",description:"It is quite common to have to paginate over large result sets.",source:"@site/versioned_docs/version-4.1/pagination.mdx",sourceDirName:".",slug:"/pagination",permalink:"/docs/4.1/pagination",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.1/pagination.mdx",tags:[],version:"4.1",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1655309228,formattedLastUpdatedAt:"6/15/2022",frontMatter:{id:"pagination",title:"Paginating large result sets",sidebar_label:"Pagination",original_id:"pagination"},sidebar:"version-4.1/docs",previous:{title:"File uploads",permalink:"/docs/4.1/file-uploads"},next:{title:"Custom types",permalink:"/docs/4.1/custom-types"}},d={},m=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}],f={toc:m};function g(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It is quite common to have to paginate over large result sets."),(0,o.kt)("p",null,"GraphQLite offers a simple way to do that using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/beberlei/porpaginas"},"Porpaginas"),"."),(0,o.kt)("p",null,"Porpaginas is a set of PHP interfaces that can be implemented by result iterators. It comes with a native support for\nPHP arrays, Doctrine and ",(0,o.kt)("a",{parentName:"p",href:"https://thecodingmachine.github.io/tdbm/doc/limit_offset_resultset.html"},"TDBM"),"."),(0,o.kt)("div",{class:"alert alert--warning"},"If you are a Laravel user, Eloquent does not come with a Porpaginas iterator. However, ",(0,o.kt)("a",{href:"laravel-package-advanced"},"the GraphQLite Laravel bundle comes with its own pagination system"),"."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"You will need to install the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/beberlei/porpaginas"},"Porpaginas")," library to benefit from this feature."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ composer require beberlei/porpaginas\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"In your query, simply return a class that implements ",(0,o.kt)("inlineCode",{parentName:"p"},"Porpaginas\\Result"),":"),(0,o.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @return Product[]\n     */\n    #[Query]\n    public function products(): Porpaginas\\Result\n    {\n        // Some code that returns a list of products\n\n        // If you are using Doctrine, something like:\n        return new Porpaginas\\Doctrine\\ORM\\ORMQueryResult($doctrineQuery);\n    }\n}\n"))),(0,o.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @Query\n     * @return Product[]\n     */\n    public function products(): Porpaginas\\Result\n    {\n        // Some code that returns a list of products\n\n        // If you are using Doctrine, something like:\n        return new Porpaginas\\Doctrine\\ORM\\ORMQueryResult($doctrineQuery);\n    }\n}\n")))),(0,o.kt)("p",null,"Notice that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the method return type MUST BE ",(0,o.kt)("inlineCode",{parentName:"li"},"Porpaginas\\Result")," or a class implementing ",(0,o.kt)("inlineCode",{parentName:"li"},"Porpaginas\\Result")),(0,o.kt)("li",{parentName:"ul"},"you MUST add a ",(0,o.kt)("inlineCode",{parentName:"li"},"@return")," statement to help GraphQLite find the type of the list")),(0,o.kt)("p",null,"Once this is done, you can paginate directly from your GraphQL query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"products {\n    items(limit: 10, offset: 20) {\n        id\n        name\n    }\n    count\n}\n")),(0,o.kt)("p",null,'Results are wrapped into an item field. You can use the "limit" and "offset" parameters to apply pagination automatically.'),(0,o.kt)("p",null,'The "count" field returns the ',(0,o.kt)("strong",{parentName:"p"},"total count")," of items."))}g.isMDXComponent=!0}}]);