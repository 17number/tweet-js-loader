(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],f=0,d=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==r[c]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},r={app:0},n=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/tweet-js-loader/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0858":function(t,e,s){},"0c86":function(t,e,s){"use strict";var a=s("6692"),r=s.n(a);r.a},1:function(t,e){},"13ce":function(t,e,s){},"1b1d":function(t,e,s){"use strict";var a=s("4070"),r=s.n(a);r.a},2:function(t,e){},"30b8":function(t,e,s){"use strict";var a=s("0858"),r=s.n(a);r.a},4070:function(t,e,s){},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=n(t);return s(e)}function n(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=n,t.exports=r,r.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),r=s("8c4f"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"home"}},[s("Description"),t.fileContent?t._e():s("LoadButton",{on:{"file-select":t.recvFileContent}}),t.tweets.all.length>0?s("DownloadButton",{attrs:{tweets:t.tweets.all}}):t._e(),t.tweets.all.length>0?s("div",{staticClass:"filter-form container"},[s("div",{staticClass:"columns is-mobile is-multiline"},[s("div",{staticClass:"column is-12-mobile is-8-tablet is-offset-1-desktop is-7-desktop is-offset-2-widescreen is-6-widescreen"},[s("div",{staticClass:"field"},[s("p",{staticClass:"control has-icons-left",class:t.filteringTimer>0?"is-loading":""},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.keywords,expression:"keywords"}],staticClass:"input",attrs:{type:"text",placeholder:"キーワードを入力"},domProps:{value:t.keywords},on:{input:[function(e){e.target.composing||(t.keywords=e.target.value)},t.filtering]}}),s("span",{staticClass:"icon is-small is-left"},[s("font-awesome-icon",{attrs:{icon:["fas","search"]}})],1)])])]),s("div",{staticClass:"column is-12-mobile is-4-tablet"},[s("div",{staticClass:"field"},[s("div",{staticClass:"control has-icons-left"},[s("div",{staticClass:"select"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selected=e.target.multiple?s:s[0]},t.sort]}},[s("option",{attrs:{value:"1"}},[t._v("日付が新しい順")]),s("option",{attrs:{value:"2"}},[t._v("日付が古い順")]),s("option",{attrs:{value:"3"}},[t._v("いいね数が多い順")]),s("option",{attrs:{value:"4"}},[t._v("RT数が多い順")]),s("option",{attrs:{value:"5"}},[t._v("いいね数 + RT数 順")])])]),s("div",{staticClass:"icon is-small is-left"},[s("font-awesome-icon",{attrs:{icon:["fas","filter"]}})],1)])])])])]):t._e(),t.tweets.forRender.length>0?s("Nav",{attrs:{pages:t.pages}}):t._e(),s("div",{staticClass:"container"},[s("div",{staticClass:"tweets columns is-mobile is-multiline"},t._l(t.tweets.forRender,(function(t,e){return s("div",{staticClass:"column is-12-mobile is-6-tablet is-4-widescreen is-3-fullhd"},[s("Tweet",{attrs:{tweet:t}})],1)})),0)]),t.tweets.forRender.length>0?s("Nav",{attrs:{pages:t.pages}}):t._e()],1)},i=[],o=(s("a623"),s("4de4"),s("4160"),s("c975"),s("fb6a"),s("4e82"),s("a9e3"),s("e25e"),s("ac1f"),s("1276"),s("498a"),s("159b"),s("96cf"),s("89ba")),c=s("7f45"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"load-btn"},[s("div",{staticClass:"field columns is-centered"},[s("div",{staticClass:"file is-info"},[s("label",{staticClass:"file-label"},[s("input",{staticClass:"file-input",attrs:{type:"file",name:"tweetjs"},on:{change:t.onFileChange}}),s("span",{staticClass:"file-cta"},[s("span",{staticClass:"file-icon"},[s("font-awesome-icon",{attrs:{icon:["fas","file-upload"]}})],1),s("span",{staticClass:"file-label"},[t._v("tweet.js を読み込む")])])])])]),s("div",{staticClass:"has-text-info columns is-centered"},[t._v(t._s(t.msg))]),s("div",{staticClass:"has-text-danger columns is-centered"},[t._v(t._s(t.errorMsg))])])},u=[],f=(s("b0c0"),s("d3b7"),s("5319"),{name:"LoadButton",data:function(){return{msg:"",errorMsg:""}},methods:{onFileChange:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.readTweetjs(e).catch((function(t){return console.error(t)}));case 2:s=t.sent,this.$emit("file-select",s);case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),readTweetjs:function(t){var e=this;return new Promise((function(s,a){var r=t.target.files||t.dataTransfer.files;if(!r||0===r.length)return e.errorMsg="ファイルを読み込めませんでした",a(e.errorMsg);if("tweet.js"!==r[0].name)return e.errorMsg="tweet.js を指定してください",a(e.errorMsg);var n=new FileReader;n.addEventListener("load",(function(t){return e.errorMsg="",e.msg="読み込み完了",s(t.target.result.replace("window.YTD.tweet.part0 = ",""))}),!1),e.msg="読み込み中",n.readAsText(r[0])}))}}}),d=f,p=s("2877"),b=Object(p["a"])(d,l,u,!1,null,"fe45b444",null),h=b.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"download-btn"},[s("div",{staticClass:"field columns is-centered"},[s("a",{attrs:{href:t.contentURL,download:"tweets.csv"},on:{click:t.generateCSV}},[s("div",{staticClass:"file is-primary"},[s("label",{staticClass:"file-label"},[s("span",{staticClass:"file-cta"},[s("span",{staticClass:"file-icon"},[s("font-awesome-icon",{attrs:{icon:["fas","file-download"]}})],1),s("span",{staticClass:"file-label"},[t._v("tweets.csv を出力")])])])])])])])},m=[],g=(s("99af"),s("a15b"),s("d81d"),s("ace4"),s("3ca3"),s("5cc6"),s("9a8c"),s("a975"),s("735e"),s("c1ac"),s("d139"),s("3a7b"),s("d5d6"),s("82f8"),s("e91f"),s("60bd"),s("5f96"),s("3280"),s("3fcc"),s("ca91"),s("25a1"),s("cd26"),s("3c5d"),s("2954"),s("649e"),s("219c"),s("170b"),s("b39a9"),s("72f7"),s("ddb0"),s("2b3d"),s("50da")),j={name:"DownloadButton",props:["tweets"],data:function(){return{contentURL:""}},methods:{generateCSV:function(){var t=new Uint8Array([239,187,191]),e=this.tweets.map((function(t){return g["stringify"]([t.id_str,c(t.created_at).tz("Asia/Tokyo").format("Y/MM/DD HH:mm:ss"),t.full_text,t.favorite_count,t.retweet_count])}));e=[["tweet_id","timestamp","text","likes","retweets"]].concat(e);var s=new Blob([t,e.join("\n")],{type:"text/csv"});this.contentURL=window.URL.createObjectURL(s)}}},w=j,_=(s("f01f"),Object(p["a"])(w,v,m,!1,null,"6d1b2cee",null)),C=_.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tweet",attrs:{"data-tweet-id":t.tweet.id_str}},[s("blockquote",{staticClass:"twitter-tweet"},[s("p",{attrs:{lang:"ja",dir:"ltr"}}),s("a",{attrs:{href:"https://twitter.com/i/status/"+t.tweet.id_str}})])])},k=[],T={name:"Tweet",props:["tweet"],updated:function(){var t=document.querySelector('div[data-tweet-id="'.concat(this.tweet.id_str,'"'));0===t.getElementsByTagName("blockquote").length&&t.insertAdjacentHTML("afterBegin",'\n        <blockquote class="twitter-tweet">\n          <p lang="ja" dir="ltr"></p>\n          <a href="https://twitter.com/i/status/'.concat(this.tweet.id_str,'"></a>\n        </blockquote>\n        '))}},x=T,E=Object(p["a"])(x,y,k,!1,null,null,null),S=E.exports,D=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"description"},[s("div",{staticClass:"container"},[t._v("以前は「全ツイート履歴」をダウンロードできたが、"),s("a",{attrs:{href:"https://twitter.com/sugtao4423/status/1185464513945980928"}},[t._v("Twitter の UI 変更とともに廃止された模様。")]),s("br"),t._v("代わりに DL できる"),s("a",{attrs:{href:"https://twitter.com/settings/your_twitter_data"}},[t._v("Twitter データ")]),t._v("内の tweet.js を読み込んで過去のツイートを表示できるようにしてみた。")])])}],z={name:"Description"},A=z,R=(s("30b8"),Object(p["a"])(A,D,O,!1,null,"dffd4c9e",null)),M=R.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"pagination is-centered",attrs:{role:"navigation","aria-label":"pagination"}},[s("ul",{staticClass:"pagination-list"},[s("li",[s("router-link",{staticClass:"pagination-link",attrs:{to:"/?page=1"}},[t._v("Top(1)")])],1),s("li",[s("router-link",{staticClass:"pagination-link",attrs:{to:"/?page="+t.pages.prev}},[t._v(t._s(t.pages.prev)+"page")])],1),s("li",[s("div",{staticClass:"pagination-link is-current"},[t._v(t._s(t.pages.current)+"page")])]),s("li",[s("router-link",{staticClass:"pagination-link",attrs:{to:"/?page="+t.pages.next}},[t._v(t._s(t.pages.next)+"page")])],1),s("li",[s("router-link",{staticClass:"pagination-link",attrs:{to:"/?page="+t.pages.max}},[t._v("Last("+t._s(t.pages.max)+")")])],1)])])},N=[],P={name:"Nav",props:["pages"]},$=P,B=Object(p["a"])($,L,N,!1,null,null,null),F=B.exports,I={1:"DATE_DESC",2:"DATE_ASC",3:"LIKE_DESC",4:"RT_DESC",5:"LIKE_RT_DESC",DATE_DESC:"1",DATE_ASC:"2",LIKE_DESC:"3",RT_DESC:"4",LIKE_RT_DESC:"5"},q={name:"Home",components:{LoadButton:h,DownloadButton:C,Tweet:S,Description:M,Nav:F},data:function(){return{fileContent:"",tweets:{all:[],filtered:[],forRender:[]},pages:{prev:1,current:1,next:2,max:1,per:60},keywords:"",filteringTimer:0,selected:"1"}},methods:{recvFileContent:function(t){this.fileContent=t,this.parseTweets(),this.pages.max=Math.ceil(this.tweets.filtered.length/this.pages.per),this.sliceTweets(this.pages.current)},parseTweets:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.tweets.all=JSON.parse(this.fileContent),this.tweets.all.forEach((function(t){t.favorite_count=Number(t.favorite_count),t.retweet_count=Number(t.retweet_count),t.fav_rt_count=t.favorite_count+t.retweet_count})),this.tweets.filtered=this.tweets.all;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),loadTwitterWidgetScript:function(){var t=document.createElement("script");t.setAttribute("src","https://platform.twitter.com/widgets.js"),t.setAttribute("async",!0),t.setAttribute("charset","utf-8"),t.setAttribute("id","twitter-widget-script"),document.head.appendChild(t)},removeTwitterWidgetScript:function(){var t=document.getElementById("twitter-widget-script");t&&t.remove()},sliceTweets:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.tweets.forRender=this.tweets.filtered.slice((t-1)*this.pages.per,t*this.pages.per)},setPageNumber:function(){var t=parseInt(this.$route.query.page||1);this.pages.prev=Math.max(1,t-1),this.pages.current=t,this.pages.next=t+1},updatePageNumber:function(t){isNaN(t)?(this.pages.prev=1,this.pages.current=1,this.pages.next=Math.min(2,this.pages.max)):(this.pages.prev=Math.max(1,t-1),this.pages.current=t,this.pages.next=Math.min(t+1,this.pages.max))},filtering:function(){var t=this;if(0!==this.filteringTimer&&(clearTimeout(this.filteringTimer),this.filteringTimer=0),""===this.keywords.trim())return this.tweets.filtered=this.tweets.all,void this.sort();this.filteringTimer=setTimeout((function(){t.tweets.filtered=t.tweets.all.filter((function(e){return t.keywords.trim().split(/[\s\t]/).every((function(t){return e.full_text.indexOf(t)>=0}))})),t.sort()}),1e3)},updateBeforeFilter:function(){document.querySelectorAll("twitter-widget").forEach((function(t){return t.remove()})),this.removeTwitterWidgetScript()},updateAfterFilter:function(){this.sliceTweets(),this.pages.max=Math.ceil(this.tweets.filtered.length/this.pages.per),this.updatePageNumber(),history.pushState(null,null,"/tweet-js-loader/"),this.filteringTimer=0},sort:function(){switch(this.updateBeforeFilter(),this.selected){case I.DATE_DESC:this.tweets.filtered=this.tweets.filtered.sort((function(t,e){return c(t.created_at).tz("Asia/Tokyo").unix()<c(e.created_at).tz("Asia/Tokyo").unix()?1:-1}));break;case I.DATE_ASC:this.tweets.filtered=this.tweets.filtered.sort((function(t,e){return c(t.created_at).tz("Asia/Tokyo").unix()>c(e.created_at).tz("Asia/Tokyo").unix()?1:-1}));break;case I.LIKE_DESC:this.tweets.filtered=this.tweets.filtered.sort((function(t,e){return t.favorite_count<e.favorite_count?1:-1}));break;case I.RT_DESC:this.tweets.filtered=this.tweets.filtered.sort((function(t,e){return t.retweet_count<e.retweet_count?1:-1}));break;case I.LIKE_RT_DESC:this.tweets.filtered=this.tweets.filtered.sort((function(t,e){return t.fav_rt_count<e.fav_rt_count?1:-1}));break}this.updateAfterFilter()}},created:function(){this.setPageNumber()},updated:function(){this.loadTwitterWidgetScript()},beforeRouteUpdate:function(t,e,s){this.updateBeforeFilter(),this.tweets.forRender=[],this.updatePageNumber(parseInt(t.query.page)),this.sliceTweets(t.query.page),s()}},G=q,U=Object(p["a"])(G,n,i,!1,null,null,null),H=U.exports,K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"privacy-policy"}},[t._m(0),s("router-link",{attrs:{to:"/"}},[t._v("メインページに戻る")])],1)},V=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section"},[s("div",{staticClass:"container"},[s("header",[s("h2",{staticClass:"title is-5"},[t._v("プライバシーポリシー")]),s("h3",{staticClass:"title is-6"},[t._v("Googleアナリティクスの利用について")])]),s("div",{staticClass:"content"},[s("div",{staticClass:"columns is-mobile"},[s("div",{staticClass:"column is-12-mobile is-offset-2-tablet is-8-tablet is-offset-3-desktop is-6-desktop has-text-left"},[s("p",[t._v("当サイトでは、Googleによるアクセス解析ツール「"),s("a",{attrs:{href:"https://marketingplatform.google.com/intl/ja/about/analytics/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Googleアナリティクス")]),t._v("」を利用しています。")]),s("p",[t._v("Googleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。")]),s("p",[t._v("このトラフィックデータは匿名で収集されており、個人を特定するものではありません。")]),s("p",[t._v("なお、Google社によるアクセス情報の収集方法および利用方法については、"),s("a",{attrs:{href:"https://marketingplatform.google.com/about/analytics/terms/jp/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Googleアナリティクス利用規約")]),t._v("および"),s("a",{attrs:{href:"https://policies.google.com/privacy?hl=ja",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google社のプライバシーポリシー")]),t._v("によって定められています。")]),s("p",[t._v("この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。")])])])])])])}],W={name:"PrivacyPolicy"},J=W,Y=(s("ab70"),Object(p["a"])(J,K,V,!1,null,null,null)),Q=Y.exports;a["a"].use(r["a"]);var X=new r["a"]({mode:"history",base:"/tweet-js-loader/",routes:[{path:"/",component:H},{path:"/privacy",component:Q}]}),Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Hero",{attrs:{version:t.version}}),s("router-view"),s("Footer")],1)},tt=[],et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hero"},[s("router-link",{attrs:{to:"/"}},[s("section",{staticClass:"hero is-primary is-bold"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title is-size-4"},[t._v("tweet.js loader")]),s("h2",{staticClass:"subtitle is-size-5"},[t._v(t._s(t.version))])])])])])],1)},st=[],at={name:"Hero",props:["version"]},rt=at,nt=(s("0c86"),Object(p["a"])(rt,et,st,!1,null,"78ba3c5b",null)),it=nt.exports,ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"columns is-mobile is-multiline"},[s("div",{staticClass:"column is-12-mobile is-3-tablet"},[s("a",{attrs:{href:"https://github.com/17number/tweet-js-loader",target:"_blank",rel:"noopener noreferrer"}},[s("span",{staticClass:"icon"},[s("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1),t._v("Source code")])]),s("div",{staticClass:"column is-12-mobile is-3-tablet"},[s("a",{attrs:{href:"https://twitter.com/intent/tweet?text="+t.shareText(),target:"_blank",rel:"noopener noreferrer"}},[s("span",{staticClass:"icon"},[s("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1),t._v("Share")])]),s("div",{staticClass:"column is-12-mobile is-3-tablet"},[s("span",{staticClass:"has-text-link",class:t.tooltipClass,attrs:{id:"copy","data-tooltip":"コピーしました"},on:{click:t.copyToClipboard}},[s("span",{staticClass:"icon"},[s("font-awesome-icon",{attrs:{icon:["far","copy"]}})],1),t._v("Copy")])]),s("div",{staticClass:"column is-12-mobile is-3-tablet"},[s("router-link",{attrs:{to:"/privacy"}},[s("span",{staticClass:"icon"},[s("font-awesome-icon",{attrs:{icon:["fas","info-circle"]}})],1),t._v("Privacy Policy")])],1),t._m(0)])])])},ct=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column is-12-mobile is-12"},[s("p",{staticClass:"powered"},[s("span",[t._v("Powered by")]),s("a",{attrs:{href:"https://pages.github.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub pages")]),s("span",[t._v("+")]),s("a",{attrs:{href:"https://vuejs.org/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.js")]),s("span",[t._v("+")]),s("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Router")]),s("span",[t._v("+")]),s("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue CLI")]),s("span",[t._v("+")]),s("a",{attrs:{href:"https://bulma.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bulma")])])])}],lt=(s("7db0"),s("f904")),ut=s.n(lt),ft={name:"Footer",data:function(){return{tooltipClass:""}},methods:{shareInfo:function(){var t=document.title,e=location.href,s=[].slice.call(document.head.children).find((function(t){return"META"===t.tagName&&"description"===t.name})).content;return"".concat(t,"\n").concat(e,"\n").concat(s)},shareText:function(){return this.shareInfo().replace(/\n/g,"%0a")},copyToClipboard:function(){var t=this;ut()(this.shareInfo()),this.tooltipClass="tooltip is-tooltip-active",setTimeout((function(){t.tooltipClass=""}),2e3)}}},dt=ft,pt=(s("1b1d"),Object(p["a"])(dt,ot,ct,!1,null,"30029f60",null)),bt=pt.exports,ht={name:"app",components:{Hero:it,Footer:bt},data:function(){return{version:"v1.0.8"}}},vt=ht,mt=(s("5c0b"),Object(p["a"])(vt,Z,tt,!1,null,null,null)),gt=mt.exports,jt=s("ecee"),wt=s("c074"),_t=s("b702"),Ct=s("f2d1"),yt=s("ad3d");jt["c"].add(wt["b"],wt["a"],wt["d"],wt["e"],wt["c"],_t["a"],Ct["a"],Ct["b"]),a["a"].component("font-awesome-icon",yt["a"]),a["a"].config.productionTip=!1,new a["a"]({router:X,render:function(t){return t(gt)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var a=s("9c0c"),r=s.n(a);r.a},6692:function(t,e,s){},"9c0c":function(t,e,s){},ab70:function(t,e,s){"use strict";var a=s("feba"),r=s.n(a);r.a},f01f:function(t,e,s){"use strict";var a=s("13ce"),r=s.n(a);r.a},feba:function(t,e,s){}});