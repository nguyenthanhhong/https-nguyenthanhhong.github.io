(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6980add9"],{b0c0:function(e,a,t){var o=t("83ab"),l=t("9bf2").f,i=Function.prototype,r=i.toString,c=/^\s*function ([^ (]*)/,s="name";o&&!(s in i)&&l(i,s,{configurable:!0,get:function(){try{return r.call(this).match(c)[1]}catch(e){return""}}})},b195:function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-collapse",{attrs:{accordion:""},model:{value:e.activeName,callback:function(a){e.activeName=a},expression:"activeName"}},[t("el-collapse-item",{attrs:{title:"Basic usage",name:"1"}},[t("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeTab,callback:function(a){e.activeTab=a},expression:"activeTab"}},[t("el-tab-pane",{attrs:{label:"User",name:"first"}},[e._v("Gummi bears liquorice brownie donut pastry bonbon biscuit. Jelly-o pudding fruitcake toffee apple pie sugar plum biscuit. Sweet roll brownie marshmallow dragée. Carrot cake carrot cake muffin donut gingerbread sweet. pudding chocolate. Halvah powder sugar plum marshmallow powder biscuit. Biscuit pudding fruitcake. Donut gummies dessert lollipop pie carrot cake bear claw lollipop danish.")]),t("el-tab-pane",{attrs:{label:"Config",name:"second"}},[e._v("Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake powder pudding pastry. Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.")]),t("el-tab-pane",{attrs:{label:"Role",name:"third"}},[e._v("Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate marzipan muffin pie liquorice.")]),t("el-tab-pane",{attrs:{label:"Task",name:"fourth"}},[e._v("Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.")])],1)],1),t("el-collapse-item",{attrs:{title:"Border card",name:"2"}},[t("el-tabs",{attrs:{type:"border-card"}},[t("el-tab-pane",{attrs:{label:"User"}},[e._v("Gummi bears liquorice brownie donut pastry bonbon biscuit. Jelly-o pudding fruitcake toffee apple pie sugar plum biscuit. Sweet roll brownie marshmallow dragée. Carrot cake carrot cake muffin donut gingerbread sweet. pudding chocolate. Halvah powder sugar plum marshmallow powder biscuit. Biscuit pudding fruitcake. Donut gummies dessert lollipop pie carrot cake bear claw lollipop danish.")]),t("el-tab-pane",{attrs:{label:"Config"}},[e._v("Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake powder pudding pastry. Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.")]),t("el-tab-pane",{attrs:{label:"Role"}},[e._v("Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate marzipan muffin pie liquorice.")]),t("el-tab-pane",{attrs:{label:"Task"}},[e._v("Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.")])],1)],1),t("el-collapse-item",{attrs:{title:"Tab position",name:"3"}},[t("el-radio-group",{staticStyle:{"margin-bottom":"30px"},model:{value:e.tabPosition,callback:function(a){e.tabPosition=a},expression:"tabPosition"}},[t("el-radio-button",{attrs:{label:"top"}},[e._v("top")]),t("el-radio-button",{attrs:{label:"right"}},[e._v("right")]),t("el-radio-button",{attrs:{label:"bottom"}},[e._v("bottom")]),t("el-radio-button",{attrs:{label:"left"}},[e._v("left")])],1),t("el-tabs",{staticStyle:{height:"200px"},attrs:{"tab-position":e.tabPosition}},[t("el-tab-pane",{attrs:{label:"User"}},[e._v("Gummi bears liquorice brownie donut pastry bonbon biscuit. Jelly-o pudding fruitcake toffee apple pie sugar plum biscuit. Sweet roll brownie marshmallow dragée. Carrot cake carrot cake muffin donut gingerbread sweet. pudding chocolate. Halvah powder sugar plum marshmallow powder biscuit. Biscuit pudding fruitcake. Donut gummies dessert lollipop pie carrot cake bear claw lollipop danish.")]),t("el-tab-pane",{attrs:{label:"Config"}},[e._v("Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake powder pudding pastry. Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.")]),t("el-tab-pane",{attrs:{label:"Role"}},[e._v("Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate marzipan muffin pie liquorice.")]),t("el-tab-pane",{attrs:{label:"Task"}},[e._v("Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.")])],1)],1),t("el-collapse-item",{attrs:{title:"Customized trigger button of new tab",name:"4"}},[t("div",{staticStyle:{"margin-bottom":"20px"}},[t("el-button",{on:{click:function(a){return e.addTab(e.editableTabsValue)}}},[e._v("add tab")])],1),t("el-tabs",{attrs:{type:"card",closable:""},on:{"tab-remove":e.removeTab},model:{value:e.editableTabsValue,callback:function(a){e.editableTabsValue=a},expression:"editableTabsValue"}},e._l(e.editableTabs,(function(a,o){return t("el-tab-pane",{key:a.name,attrs:{label:a.title,name:a.name}},[e._v(" "+e._s(a.content)+" ")])})),1)],1)],1)},l=[],i=(t("4de4"),t("4160"),t("b0c0"),t("159b"),{data:function(){return{activeName:"1",activeTab:"second",tabPosition:"left",editableTabsValue:"2",editableTabs:[{title:"Tab 1",name:"1",content:"Tab 1 content"},{title:"Tab 2",name:"2",content:"Tab 2 content"}],tabIndex:2}},methods:{handleClick:function(e,a){console.log(e),this.$message({message:"Select tab "+e.name,type:"success"})},addTab:function(e){var a=++this.tabIndex+"";this.editableTabs.push({title:"New Tab",name:a,content:"New Tab content "+a}),this.editableTabsValue=a},removeTab:function(e){var a=this.editableTabs,t=this.editableTabsValue;t===e&&a.forEach((function(o,l){if(o.name===e){var i=a[l+1]||a[l-1];i&&(t=i.name)}})),this.editableTabsValue=t,this.editableTabs=a.filter((function(a){return a.name!==e}))}}}),r=i,c=t("2877"),s=Object(c["a"])(r,o,l,!1,null,null,null);a["default"]=s.exports}}]);
//# sourceMappingURL=chunk-6980add9.4417b258.js.map