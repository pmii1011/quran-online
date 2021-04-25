(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{224:function(t,e,r){"use strict";r.r(e);var n=r(11),component=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"max-w-md mx-auto bg-white rounded-md shadow-lg overflow-hidden md:max-w-2xl mt-6 p-5 dark:bg-gray-800 dark:text-gray-300"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},225:function(t,e,r){"use strict";r.r(e);var n=r(11),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sucess-modal opacity-8 px-4 py-3 text-sm md:text-base z-50 font-semibold fixed bottom-0 md:mb-24 mb-20 bg-green-400 dark:bg-green-500 rounded-md shadow-lg text-white"},[e("p",[this._v(this._s(this.$store.state.modal_title))])])}),[],!1,null,null,null);e.default=component.exports},226:function(t,e,r){t.exports=r.p+"img/star-filled.e77d596.svg"},227:function(t,e,r){t.exports=r.p+"img/star.7a45c7c.svg"},228:function(t,e,r){"use strict";r.r(e);r(154),r(33);var n={props:["id","number","name","arabic_name","translated_name","ayat","revelation","favorite"],data:function(){return{favorite_surah:[]}},methods:{addSurah:function(){this.$emit("addedSurah")},deleteSurah:function(t){this.$store.commit("deleteSurah",t)},isFavorite:function(t){return this.$store.state.local_favorite_surah.find((function(e){return e.name==t}))}}},o=r(11),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[n("div",{staticClass:"bg-white dark:bg-gray-800 rounded-md p-6 border border-indigo-200 shadow-lg hover:shadow transition duration-200 dark:text-white dark:border-indigo-400"},[n("div",{staticClass:"wrap flex justify-between"},[n("p",[t._v(t._s(t.number)+". "+t._s(t.name))]),t._v(" "),t.isFavorite(t.name)?n("img",{staticClass:"w-6 cursor-pointer",attrs:{src:r(226),alt:"delete icon"},on:{click:function(e){return t.deleteSurah(t.number)}}}):n("img",{staticClass:"w-6 cursor-pointer",attrs:{src:r(227),alt:"add to favorite icon"},on:{click:function(e){return t.addSurah()}}})]),t._v(" "),n("nuxt-link",{attrs:{to:{name:"surah-number",params:{number:t.number}}}},[n("p",{staticClass:"text-gray-600 text-sm mt-1 dark:text-gray-500"},[t._v("\n        "+t._s(t.ayat)+" Ayat / "+t._s(t.revelation)+"\n      ")]),t._v(" "),n("div",{staticClass:"flex flex-row-reverse"},[n("p",{staticClass:"arabic text-3xl mb-3 text-indigo-700 dark:text-indigo-400"},[t._v("\n          "+t._s(t.arabic_name)+"\n        ")])]),t._v(" "),n("div",{staticClass:"flex flex-row-reverse"},[n("p",{staticClass:"text-gray-600 dark:text-gray-500"},[t._v(t._s(t.translated_name))])])])],1)])}),[],!1,null,null,null);e.default=component.exports},229:function(t,e,r){"use strict";r.r(e);var n=r(11),component=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer text-center pt-6 dark:text-gray-200"},[e("p",[this._v("Made with ❤️ by "),e("a",{staticClass:"text-indigo-300",attrs:{href:"https://web.facebook.com/rangga.dimas80/",target:"_blank"}},[this._v("Rangga Dimas")])])])}],!1,null,null,null);e.default=component.exports},243:function(t,e,r){"use strict";r.r(e);r(69),r(53),r(33),r(12),r(70),r(54),r(26);var n=r(5),o={transition:"fade",data:function(){return{surah_list:[],keyword:""}},computed:{filteredSurah:function(){var t=this;return this.surah_list.filter((function(e){return e.name.transliteration.id.toLowerCase().includes(t.keyword.toLowerCase())}))}},methods:{addSurah:function(t){this.$store.commit("addSurah",t)}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.quran.sutanlab.id/surah");case 3:return data=e.sent,e.next=6,data.json();case 6:r=e.sent,t.surah_list=r.data,e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})))()})),mounted:function(){var t=JSON.parse(window.localStorage.getItem("surah"));this.$store.commit("getSurah",t)}},d=r(11),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"quran-app"},[r("base-header-card",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"w-full py-2 px-4 focus:outline-none focus:bg-white border border-indigo-200 focus:border-indigo-400 bg-gray-100 dark:bg-gray-700 rounded transition duration-200 dark:text-white dark:border-indigo-400",attrs:{type:"search",placeholder:"Cari Surah.. cth: ar-rahman"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"},t._l(t.filteredSurah,(function(e){return r("Surah",{key:e.number,attrs:{number:e.number,name:e.name.transliteration.id,arabic_name:e.name.short,translated_name:e.name.translation.id,ayat:e.numberOfVerses,revelation:e.revelation.id},on:{addedSurah:function(r){return t.addSurah(e)}}})})),1),t._v(" "),r("transition",{attrs:{name:"slide-fade"}},[t.$store.state.showModal?r("success-modal"):t._e()],1),t._v(" "),r("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseHeaderCard:r(224).default,Surah:r(228).default,SuccessModal:r(225).default,Footer:r(229).default})}}]);