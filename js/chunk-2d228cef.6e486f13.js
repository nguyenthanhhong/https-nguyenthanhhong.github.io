(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d228cef"],{db83:function(a,t,e){"use strict";e.r(t);var o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("el-tabs",{model:{value:a.activeName,callback:function(t){a.activeName=t},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"Bar Chart",name:"first"}},[e("bar-chart",{attrs:{type:"bar",width:500,height:300,labels:a.datacollection.labels,datasets:a.datacollection.datasets,options:a.options}})],1),e("el-tab-pane",{attrs:{label:"Horizontal Bar Chart",name:"second"}},[e("bar-chart",{attrs:{type:"horizontalBar",width:500,height:300,labels:a.datacollection.labels,datasets:a.datacollection.datasets,options:a.options}})],1)],1),e("el-col",{attrs:{span:4}},[e("el-button",{on:{click:a.RandomizeData}},[a._v("Randomize Data")])],1),e("el-col",{attrs:{span:4}},[e("el-button",{on:{click:a.AddDataset}},[a._v("Add Dataset")])],1),e("el-col",{attrs:{span:4}},[e("el-button",{on:{click:a.RemoveDataset}},[a._v("Remove Dataset")])],1)],1)},r=[],n=(e("d81d"),e("5530")),l=e("424e"),s=e("ed08"),c={components:{BarChart:l["a"]},data:function(){return{activeName:"first",datacollection:{labels:["January","February","March","April","May","June","July","August","September","October","November","December"],datasets:[{label:"Data One",backgroundColor:"#f87979",pointBackgroundColor:"white",borderWidth:1,pointBorderColor:"#249EBF",data:this.createArrayRandom()},{label:"Data Two",backgroundColor:"rgb(54, 162, 235)",pointBackgroundColor:"white",borderWidth:1,pointBorderColor:"#249EBF",data:this.createArrayRandom()}]},options:{responsive:!0,legend:{position:"top"},title:{display:!0,text:"Chart.js Bar Chart"}}}},methods:{createRandom:function(){return Object(s["b"])(-50,50)},createArrayRandom:function(){for(var a=[],t=0;t<12;t++)a.push(this.createRandom());return a},RandomizeData:function(){var a=this,t=this.datacollection.datasets.map((function(t){return Object(n["a"])(Object(n["a"])({},t),{},{data:a.createArrayRandom()})}));this.datacollection.datasets=t},AddDataset:function(){var a=i[Math.round(Object(s["b"])(0,9))],t=this.createArrayRandom(),e={label:"Dataset "+(this.datacollection.datasets.length+1),backgroundColor:a,borderWidth:1,data:t};this.datacollection.datasets.push(e)},RemoveDataset:function(){this.datacollection.datasets.pop()}}},i=["#4dc9f6","#f67019","#f53794","#537bc4","#acc236","#166a8f","#00a950","#58595b","#8549ba"],d=c,b=e("2877"),u=Object(b["a"])(d,o,r,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d228cef.6e486f13.js.map