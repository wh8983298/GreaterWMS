(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[38],{"0bf2":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-md",staticStyle:{width:"100%","margin-top":"-20px"}},[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[a("q-table",{staticClass:"my-sticky-header-table shadow-24",attrs:{data:e.table_list,"row-key":"id",separator:e.separator,loading:e.loading,filter:e.filter,columns:e.columns,"hide-bottom":"",pagination:e.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:e.height},flat:"",bordered:""},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top",fn:function(){return[a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{label:e.$t("refresh"),icon:"refresh"},on:{click:function(t){return e.reFresh()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n             "+e._s(e.$t("refreshtip"))+"\n           ")])],1)],1)]},proxy:!0},{key:"body",fn:function(t){return[a("q-tr",{attrs:{props:t}},[a("q-td",{key:"staff_type",attrs:{props:t}},[e._v("\n             "+e._s(t.row.staff_type)+"\n           ")]),a("q-td",{key:"creater",attrs:{props:t}},[e._v("\n             "+e._s(t.row.creater)+"\n           ")]),a("q-td",{key:"create_time",attrs:{props:t}},[e._v("\n           "+e._s(t.row.create_time)+"\n         ")]),a("q-td",{key:"update_time",attrs:{props:t}},[e._v("\n           "+e._s(t.row.update_time)+"\n         ")])],1)]}}])})],1)],1)},n=[],s=(a("5319"),a("3004")),r=a("18d6"),o={name:"Pagestafflist",data(){return{openid:"",login_name:"",authin:"0",pathname:"staff/type/",separator:"cell",loading:!1,height:"",table_list:[],columns:[{name:"staff_type",required:!0,label:this.$t("staff.view_staff.staff_type"),align:"left",field:"staff_type"},{name:"creater",label:this.$t("creater"),field:"creater",align:"center"},{name:"create_time",label:this.$t("createtime"),field:"create_time",align:"center"},{name:"update_time",label:this.$t("updatetime"),field:"update_time",align:"center"}],filter:"",pagination:{page:1,rowsPerPage:"30"}}},methods:{getList(){var e=this;r["a"].has("auth")&&Object(s["d"])(e.pathname,{}).then((t=>{if(e.table_list=t.results,t.previous){var a=t.previous.split(":")[0],i=t.previous.replace(a,window.location.href.split(":")[0]);e.pathname_previous=i}else e.pathname_previous=t.previous;if(t.next){var n=t.next.split(":")[0],s=t.next.replace(n,window.location.href.split(":")[0]);e.pathname_next=s}else e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getListPrevious(){var e=this;r["a"].has("auth")&&Object(s["d"])(e.pathname_previous,{}).then((t=>{if(e.table_list=t.results,t.previous){var a=t.previous.split(":")[0],i=t.previous.replace(a,window.location.href.split(":")[0]);e.pathname_previous=i}else e.pathname_previous=t.previous;if(t.next){var n=t.next.split(":")[0],s=t.next.replace(n,window.location.href.split(":")[0]);e.pathname_next=s}else e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getListNext(){var e=this;r["a"].has("auth")&&Object(s["d"])(e.pathname_next,{}).then((t=>{if(e.table_list=t.results,t.previous){var a=t.previous.split(":")[0],i=t.previous.replace(a,window.location.href.split(":")[0]);e.pathname_previous=i}else e.pathname_previous=t.previous;if(t.next){var n=t.next.split(":")[0],s=t.next.replace(n,window.location.href.split(":")[0]);e.pathname_next=s}else e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},reFresh(){var e=this;e.getList()}},created(){var e=this;r["a"].has("openid")?e.openid=r["a"].getItem("openid"):(e.openid="",r["a"].set("openid","")),r["a"].has("login_name")?e.login_name=r["a"].getItem("login_name"):(e.login_name="",r["a"].set("login_name","")),r["a"].has("auth")?(e.authin="1",e.getList()):e.authin="0"},mounted(){this.$q.platform.is.electron?this.height=String(this.$q.screen.height-290)+"px":this.height=this.$q.screen.height-290+"px"},updated(){},destroyed(){}},l=o,p=a("2877"),c=a("c694"),h=a("eaac"),d=a("e7a9"),u=a("9c40"),f=a("05c0"),m=a("bd08"),_=a("db86"),g=a("eebe"),v=a.n(g),b=Object(p["a"])(l,i,n,!1,null,null,null);"function"===typeof c["default"]&&Object(c["default"])(b);t["default"]=b.exports;v()(b,"components",{QTable:h["a"],QBtnGroup:d["a"],QBtn:u["a"],QTooltip:f["a"],QTr:m["a"],QTd:_["a"]})},c694:function(e,t,a){"use strict";var i=a("cc97"),n=a.n(i);t["default"]=n.a},cc97:function(e,t){}}]);