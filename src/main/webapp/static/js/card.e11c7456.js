(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["card"],{1749:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-lx-cascades"}),e._v(" "+e._s(e.name)+"的会员卡列表\n                ")])],1)],1),a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("el-button",{staticClass:"handle-del mr10",attrs:{type:"primary",icon:"el-icon-bank-card"},on:{click:e.handleRegister}},[e._v("会员卡注册\n                ")]),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleDealSearch}},[e._v("交易记录查询")]),a("el-button",{attrs:{type:"success",icon:"el-icon-present"},on:{click:e.handleIntegralExchange}},[e._v("积分兑换")]),e.isBirthday?a("span",{staticClass:"birthday"},[a("el-tag",{staticStyle:{"margin-left":"10px"},attrs:{type:"danger",effect:"dark"}},[e._v("\n                    今天是用户"+e._s(this.name)+"的生日\n                      ")])],1):e._e(),a("el-autocomplete",{staticStyle:{float:"right"},attrs:{clearable:"","fetch-suggestions":e.querySearch,placeholder:"请输入要查找的会员卡ID","trigger-on-focus":!1},on:{select:e.handleSelect,clear:e.handleClear},nativeOn:{change:function(t){return e.handleChange(t)}},model:{value:e.cardQuery.cardId,callback:function(t){e.$set(e.cardQuery,"cardId",t)},expression:"cardQuery.cardId"}})],1),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.cardData,border:"","header-cell-class-name":"table-header","row-class-name":e.tableRowClassName}},[a("el-table-column",{attrs:{prop:"cardId",label:"ID",width:"180",align:"center"}}),a("el-table-column",{attrs:{prop:"balance",label:"余额",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                        ￥"+e._s(t.row.balance)+"\n                    ")]}}])}),a("el-table-column",{attrs:{prop:"integral",label:"积分",align:"center"}}),a("el-table-column",{attrs:{prop:"lose",label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:0===t.row.lose?"success":"danger"}},[e._v(e._s(0===t.row.lose?"正常":"挂失")+"\n                        ")])]}}])}),a("el-table-column",{attrs:{label:"操作",width:"500px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",disabled:0!==t.row.lose},on:{click:function(a){return e.handleRecharge(t.$index,t.row)}}},[e._v("充值\n                        ")]),t.row.balance>0?a("el-button",{attrs:{type:"primary",disabled:0!==t.row.lose},on:{click:function(a){return e.handleConsume(t.$index,t.row)}}},[e._v("消费\n                        ")]):e._e(),0===t.row.lose?a("el-button",{attrs:{type:"warning"},on:{click:function(a){return e.handleLoss(t.$index,t.row)}}},[e._v("挂失\n                        ")]):e._e(),1===t.row.lose?a("el-button",{attrs:{type:"danger"},on:{click:function(a){return e.handleCancel(t.$index,t.row)}}},[e._v("解挂\n                        ")]):e._e(),1===t.row.lose?a("el-button",{attrs:{type:"danger"},on:{click:function(a){return e.handleReissue(t.$index,t.row)}}},[e._v("补卡\n                        ")]):e._e()]}}])})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next","current-page":e.query.pageIndex,"page-size":e.query.pageSize,total:e.pageTotal},on:{"current-change":e.handlePageChange}})],1)],1),a("el-dialog",{attrs:{title:"会员卡注册",visible:e.registerVisible,width:"30%"},on:{"update:visible":function(t){e.registerVisible=t}}},[e._v("\n            将开通新的会员卡，是否确定？\n            "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.registerVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.saveRegister}},[e._v("确 定")])],1)]),a("el-dialog",{attrs:{title:"交易记录查询",visible:e.recordVisible,width:"80%"},on:{"update:visible":function(t){e.recordVisible=t}}},[a("el-table",{attrs:{data:e.recordData,border:""}},[a("el-table-column",{attrs:{prop:"cardId",label:"会员卡ID",align:"center"}}),a("el-table-column",{attrs:{prop:"spendType",label:"交易类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:0===t.row.spendType?"success":"danger"}},[e._v(e._s(0===t.row.spendType?"人民币":"积分")+"\n                        ")])]}}])}),a("el-table-column",{attrs:{prop:"value",label:"金额",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                        "+e._s(t.row.value>0?"+"+t.row.value:t.row.value)+"\n\n                    ")]}}])}),a("el-table-column",{attrs:{prop:"time",label:"时间",align:"center"}})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next","current-page":e.query.pageIndex,"page-size":e.query.pageSize,total:e.pageTotal},on:{"current-change":e.handleRecordPageChange}})],1),e._v("\n            i\n        ")],1),a("el-dialog",{attrs:{title:"充值",visible:e.rechargeVisible,width:"30%"},on:{"update:visible":function(t){e.rechargeVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"70px"}},[a("el-form-item",{attrs:{label:"卡号",disabled:"true",prop:"cardId"}},[a("el-input",{model:{value:e.form.cardId,callback:function(t){e.$set(e.form,"cardId",t)},expression:"form.cardId"}})],1),a("el-form-item",{attrs:{label:"额度",prop:"value"}},[a("el-input",{model:{value:e.form.value,callback:function(t){e.$set(e.form,"value",t)},expression:"form.value"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.rechargeVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.saveRecharge}},[e._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"消费",visible:e.consumeVisible,width:"35%"},on:{"update:visible":function(t){e.consumeVisible=t}}},[a("el-form",{attrs:{model:e.form,"label-position":e.labelPosition,"label-width":"80px",rules:e.rules}},[a("el-form-item",{attrs:{label:"卡号"}},[e._v("\n                    "+e._s(e.form.cardId)+"\n                ")]),a("el-form-item",{attrs:{label:"电影票"}},[a("el-select",{attrs:{placeholder:"请选择电影","label-width":"80px"},on:{change:e.pickMoviePriceAndIntegral},model:{value:e.form.movieId,callback:function(t){e.$set(e.form,"movieId",t)},expression:"form.movieId"}},e._l(e.movieData,(function(t){return a("el-option",{key:t.movieId,attrs:{label:t.name,value:t.movieId}},[a("span",{staticStyle:{float:"left"}},[e._v(e._s(t.name))]),a("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.price))])])})),1)],1),a("el-form-item",{attrs:{label:"价格"}},[e._v("\n                    "+e._s(e.form.price)+"\n                ")]),a("el-form-item",{attrs:{label:"获得积分"}},[e._v("\n                    "+e._s(e.form.integral)+"\n                ")])],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.concelConsume}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.saveConsume}},[e._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"积分兑换",visible:e.integralExchangeVisible},on:{"update:visible":function(t){e.integralExchangeVisible=t}}},[a("el-form",{attrs:{rules:e.rules}},[a("el-form-item",{attrs:{label:"总积分"}},[e._v("\n                    "+e._s(this.integralTotal)+"\n                ")]),a("el-transfer",{staticStyle:{"text-align":"left",display:"inline-block"},attrs:{filterable:"","left-default-checked":[1],titles:["可选礼物","已选礼物"],"button-texts":["放回","选入"],format:{noChecked:"${total}",hasChecked:"${checked}/${total}"},data:e.integralExchange},on:{change:e.handleChange},model:{value:e.pickIntegral,callback:function(t){e.pickIntegral=t},expression:"pickIntegral"}}),a("el-form-item",{attrs:{label:"花费积分"}},[e._v("\n                    "+e._s(e.consumeIntegral)+"\n                ")])],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.integralExchangeVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary",disabled:e.beyondLimit},on:{click:e.saveIntegralExchange}},[e._v("确 定")])],1)],1)],1)},n=[],i=a("6e33"),s=i["a"],l=(a("cceb"),a("2877")),o=Object(l["a"])(s,r,n,!1,null,"49f7dddf",null);t["default"]=o.exports},6893:function(e,t,a){},"6e33":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("ac6a"),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("28a5"),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("7f7f"),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__),_api_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("365c"),_common_bus__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("7ed4");__webpack_exports__["a"]={name:"basetable",data:function(){return{query:{memberId:"",name:"",pageIndex:1,pageSize:10,birthdayQuery:""},cardQuery:{cardId:""},rules:{memberId:[{required:!0,message:"请输入会员名",trigger:"blur"}]},integralExchange:[{key:"0",label:"布娃娃---3000",disable:!1},{key:"1",label:"玩具汽车---900",disable:!1},{key:"2",label:"变形金刚---5000",disable:!1},{key:"3",label:"可乐---500",disable:!1},{key:"4",label:"航模---6666",disable:!1}],cardData:[],recordData:[],movieData:[],multipleSelection:[],delList:[],rechargeVisible:!1,registerVisible:!1,recordVisible:!1,consumeVisible:!1,integralExchangeVisible:!1,pageTotal:0,pickIntegral:[],present:"",form:{},idx:-1,id:-1,name:name,isBirthday:!1,beyondLimit:!1,memberBirthday:"",labelPosition:"right"}},created:function created(){var _this=this,obj=eval("("+this.$route.query.data+")");this.name=obj.name,this.memberBirthday=obj.birthday,this.query.memberId=obj.memberId,this.judgeBirthday(),this.getCardData(),this.getMovieData(),_common_bus__WEBPACK_IMPORTED_MODULE_4__["a"].$on("movieData-change",(function(){_this.getMovieData()}))},computed:{integralTotal:{get:function(){return this.cardData.reduce((function(e,t){return e+t.integral}),0)},set:function(e){return e}},consumeIntegral:{get:function(){var e=0;this.present="";for(var t=0;t<this.pickIntegral.length;t++)e+=parseInt(this.integralExchange[this.pickIntegral[t]].label.split("---")[1]),this.present+=this.integralExchange[this.pickIntegral[t]].label.split("---")[0]+"、";return this.present=this.present.substring(0,this.present.length-1),e>this.integralTotal?(this.$message.error("所选积分已超出现有积分，请放回一部分"),this.beyondLimit=!0):this.beyondLimit=!1,e}}},methods:{handleChange:function(){""===this.cardQuery.cardId&&this.getCardData()},handleDealSearch:function(){var e=this;Object(_api_index__WEBPACK_IMPORTED_MODULE_3__["t"])(this.query).then((function(t){200==t.status?(e.recordData=t.data.list,e.pageTotal=t.data.pageTotal,e.recordVisible=!0):e.$message.error("服务器发生故障，请稍后再试")}))},concelConsume:function(){this.consumeVisible=!1,this.form={}},pickMoviePriceAndIntegral:function(e){var t=this;this.movieData.map((function(a,r){a.movieId==e&&(t.form.price=a.price,t.form.integral=a.integral,t.form.movieName=a.name)}))},getMovieData:function getMovieData(){this.movieData=eval("("+localStorage.getItem("movieData")+")")},handleReissue:function(e,t){var a=this;Object(_api_index__WEBPACK_IMPORTED_MODULE_3__["x"])(t).then((function(e){200==e.status?(a.$message.success("数据转移成功，新卡号为".concat(e.data)),a.getCardData()):a.$message.error("补卡失败！")}))},handleCancel:function(e,t){var a=this;Object(_api_index__WEBPACK_IMPORTED_MODULE_3__["a"])(t).then((function(e){200==e.status?(a.$message.success("解挂成功"),a.getCardData()):a.$message.error("解挂失败！")}))},handleLoss:function(e,t){var a=this;Object(_api_index__WEBPACK_IMPORTED_MODULE_3__["m"])(t).then((function(e){200==e.status?(a.$message.success("挂失成功"),a.getCardData()):a.$message.error("挂失失败！")}))},handleRecharge:function(e,t){this.form=t,this.rechargeVisible=!0},saveRecharge:function(){var e=this,t=this.form.cardId,a=this.form.value,r={cardId:t,value:a};Object(_api_index__WEBPACK_IMPORTED_MODULE_3__["u"])(r).then((function(t){200==t.status?(e.$message.success("卡号".concat(e.form.cardId,"充值 ￥").concat(e.form.value,"成功")),e.rechargeVisible=!1,e.getCardData(),_common_bus__WEBPACK_IMPORTED_MODULE_4__["a"].$emit("recharge-change")):(e.$message.error("充值失败！"),e.rechargeVisible=!1),e.form={}}))},handleConsume:function(e,t){this.form={},this.form.cardId=t.cardId,this.form.balance=t.balance,this.consumeVisible=!0},saveConsume:function(){var e=this;if(this.form.price>this.form.balance)this.$message.error("余额不足，无法购买");else{var t=this.form.cardId,a=this.form.price,r=this.form.movieName,n=this.form.integral,i={cardId:this.form.cardId,price:this.form.price,integral:this.form.integral};Object(_api_index__WEBPACK_IMPORTED_MODULE_3__["b"])(i).then((function(i){200==i.status?(e.$message({message:"卡号         ".concat(t,"\n                        消费      ￥").concat(a,"      ，成功购买     ").concat(r,"     电影票，获得积分      ").concat(n),type:"success",duration:5e3,center:!0}),e.getCardData(),_common_bus__WEBPACK_IMPORTED_MODULE_4__["a"].$emit("movie-change")):e.$message.error("消费失败！")})),this.consumeVisible=!1,this.form={}}},judgeBirthday:function(e,t){var a=this.$moment(new Date).format("YYYY-MM-DD");this.memberBirthday===a&&(this.isBirthday=!0)},tableRowClassName:function(e){var t=e.row;e.rowIndex;return 0!==t.lose?"warning-row":""},getCardData:function(){var e=this;Object(_api_index__WEBPACK_IMPORTED_MODULE_3__["h"])(this.query).then((function(t){e.cardData=t.data.list,e.pageTotal=t.data.pageTotal||50}))},handleRegister:function(){this.registerVisible=!0},saveRegister:function(){var e=this;Object(_api_index__WEBPACK_IMPORTED_MODULE_3__["v"])(this.query).then((function(t){200==t.status?(e.$message.success("注册成功"),e.getCardData(),_common_bus__WEBPACK_IMPORTED_MODULE_4__["a"].$emit("card-change"),e.registerVisible=!1):e.$message.error("注册失败！")}))},handleSelectionChange:function(e){this.multipleSelection=e},handlePageChange:function(e){this.$set(this.query,"pageIndex",e),this.getMemberData()},handleRecordPageChange:function(e){this.$set(this.query,"pageIndex",e),this.handleDealSearch()},handleIntegralExchange:function(){this.integralExchangeVisible=!0},saveIntegralExchange:function(){var e=this,t={memberId:this.query.memberId,integral:this.consumeIntegral};Object(_api_index__WEBPACK_IMPORTED_MODULE_3__["f"])(t).then((function(t){200==t.status?(e.$message.success("积分兑换成功，会员可获得".concat(e.present)),e.integralExchangeVisible=!1,e.getCardData(),_common_bus__WEBPACK_IMPORTED_MODULE_4__["a"].$emit("integral-change")):e.$message.success("服务端发生错误，积分兑换失败"),e.pickIntegral=[]}))},querySearch:function(e,t){var a=this;""!=e&&this.getPlanTypeData(e,(function(r){var n="";n=e&&!r[0].noId?r.filter(a.createFilter(e)):r,t(n)}))},createFilter:function(e){return function(e){return e.value}},getPlanTypeData:function(e,t){var a=[],r={memberId:this.query.memberId,cardId:e};Object(_api_index__WEBPACK_IMPORTED_MODULE_3__["i"])(r).then((function(e){if(200!=e.status)return!1;var r=e.data;r.length>0?r.forEach((function(e,t){a.push({value:e.cardId,name:e.cardId})})):a.push({value:"无搜索结果",noId:"无搜索结果"}),t(a)}))},handleSelect:function(e){var t=this;e.name&&Object(_api_index__WEBPACK_IMPORTED_MODULE_3__["g"])(this.cardQuery).then((function(e){200==e.status&&(t.cardData=[],t.cardData.push(e.data))}))},handleClear:function(){this.getCardData()}}}},"7ed4":function(e,t,a){"use strict";var r=a("2b0e"),n=new r["default"];t["a"]=n},cceb:function(e,t,a){"use strict";var r=a("6893"),n=a.n(r);n.a}}]);