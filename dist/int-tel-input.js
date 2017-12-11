(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["IntTelInput"] = factory();
	else
		root["IntTelInput"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_vue__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "IntTelInput", function() { return __WEBPACK_IMPORTED_MODULE_0__main_vue__["a"]; });




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_main_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3c208292_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_main_vue__ = __webpack_require__(9);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2)
}
var normalizeComponent = __webpack_require__(7)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_main_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3c208292_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_main_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/main.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c208292", Component.options)
  } else {
    hotAPI.reload("data-v-3c208292", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("246d1083", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3c208292\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/stylus-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./main.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3c208292\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/stylus-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./main.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "\n.int-tel-input-wapper {\n  position: relative;\n  font-size: 16px;\n  padding-left: 120px;\n}\n.int-tel-input-wapper.clear-float:after {\n  content: '';\n  display: block;\n  clear: both;\n}\n.int-tel-input-wapper .int-tel-select {\n  width: 120px;\n  float: left;\n  margin-left: -120px;\n}\n.int-tel-input-wapper .int-tel-select input {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.int-tel-input-wapper .int-tel-input {\n  width: 100%;\n  float: left;\n}\n.int-tel-input-wapper .int-tel-input input {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.int-tel-input-wapper .int-tel-input .el-input__inner {\n  border-left: none;\n}\n.int-flag {\n  display: inline-block;\n  width: 20px;\n  height: 15px;\n  background-image: url(\"/assets/flags@2x.png\");\n  background-repeat: no-repeat;\n  background-size: 5630px 15px;\n  background-color: #dbdbdb;\n  margin-right: 1em;\n}\n.int-flag.ac {\n  height: 10px;\n  background-position: 0px 0px;\n}\n.int-flag.ad {\n  height: 14px;\n  background-position: -22px 0px;\n}\n.int-flag.ae {\n  height: 10px;\n  background-position: -44px 0px;\n}\n.int-flag.af {\n  height: 14px;\n  background-position: -66px 0px;\n}\n.int-flag.ag {\n  height: 14px;\n  background-position: -88px 0px;\n}\n.int-flag.ai {\n  height: 10px;\n  background-position: -110px 0px;\n}\n.int-flag.al {\n  height: 15px;\n  background-position: -132px 0px;\n}\n.int-flag.am {\n  height: 10px;\n  background-position: -154px 0px;\n}\n.int-flag.ao {\n  height: 14px;\n  background-position: -176px 0px;\n}\n.int-flag.aq {\n  height: 14px;\n  background-position: -198px 0px;\n}\n.int-flag.ar {\n  height: 13px;\n  background-position: -220px 0px;\n}\n.int-flag.as {\n  height: 10px;\n  background-position: -242px 0px;\n}\n.int-flag.at {\n  height: 14px;\n  background-position: -264px 0px;\n}\n.int-flag.au {\n  height: 10px;\n  background-position: -286px 0px;\n}\n.int-flag.aw {\n  height: 14px;\n  background-position: -308px 0px;\n}\n.int-flag.ax {\n  height: 13px;\n  background-position: -330px 0px;\n}\n.int-flag.az {\n  height: 10px;\n  background-position: -352px 0px;\n}\n.int-flag.ba {\n  height: 10px;\n  background-position: -374px 0px;\n}\n.int-flag.bb {\n  height: 14px;\n  background-position: -396px 0px;\n}\n.int-flag.bd {\n  height: 12px;\n  background-position: -418px 0px;\n}\n.int-flag.be {\n  height: 15px;\n  background-position: -440px 0px;\n}\n.int-flag.bf {\n  height: 14px;\n  background-position: -460px 0px;\n}\n.int-flag.bg {\n  height: 12px;\n  background-position: -482px 0px;\n}\n.int-flag.bh {\n  height: 12px;\n  background-position: -504px 0px;\n}\n.int-flag.bi {\n  height: 12px;\n  background-position: -526px 0px;\n}\n.int-flag.bj {\n  height: 14px;\n  background-position: -548px 0px;\n}\n.int-flag.bl {\n  height: 14px;\n  background-position: -570px 0px;\n}\n.int-flag.bm {\n  height: 10px;\n  background-position: -592px 0px;\n}\n.int-flag.bn {\n  height: 10px;\n  background-position: -614px 0px;\n}\n.int-flag.bo {\n  height: 14px;\n  background-position: -636px 0px;\n}\n.int-flag.bq {\n  height: 14px;\n  background-position: -658px 0px;\n}\n.int-flag.br {\n  height: 14px;\n  background-position: -680px 0px;\n}\n.int-flag.bs {\n  height: 10px;\n  background-position: -702px 0px;\n}\n.int-flag.bt {\n  height: 14px;\n  background-position: -724px 0px;\n}\n.int-flag.bv {\n  height: 15px;\n  background-position: -746px 0px;\n}\n.int-flag.bw {\n  height: 14px;\n  background-position: -768px 0px;\n}\n.int-flag.by {\n  height: 10px;\n  background-position: -790px 0px;\n}\n.int-flag.bz {\n  height: 14px;\n  background-position: -812px 0px;\n}\n.int-flag.ca {\n  height: 10px;\n  background-position: -834px 0px;\n}\n.int-flag.cc {\n  height: 10px;\n  background-position: -856px 0px;\n}\n.int-flag.cd {\n  height: 15px;\n  background-position: -878px 0px;\n}\n.int-flag.cf {\n  height: 14px;\n  background-position: -900px 0px;\n}\n.int-flag.cg {\n  height: 14px;\n  background-position: -922px 0px;\n}\n.int-flag.ch {\n  height: 15px;\n  background-position: -944px 0px;\n}\n.int-flag.ci {\n  height: 14px;\n  background-position: -961px 0px;\n}\n.int-flag.ck {\n  height: 10px;\n  background-position: -983px 0px;\n}\n.int-flag.cl {\n  height: 14px;\n  background-position: -1005px 0px;\n}\n.int-flag.cm {\n  height: 14px;\n  background-position: -1027px 0px;\n}\n.int-flag.cn {\n  height: 14px;\n  background-position: -1049px 0px;\n}\n.int-flag.co {\n  height: 14px;\n  background-position: -1071px 0px;\n}\n.int-flag.cp {\n  height: 14px;\n  background-position: -1093px 0px;\n}\n.int-flag.cr {\n  height: 12px;\n  background-position: -1115px 0px;\n}\n.int-flag.cu {\n  height: 10px;\n  background-position: -1137px 0px;\n}\n.int-flag.cv {\n  height: 12px;\n  background-position: -1159px 0px;\n}\n.int-flag.cw {\n  height: 14px;\n  background-position: -1181px 0px;\n}\n.int-flag.cx {\n  height: 10px;\n  background-position: -1203px 0px;\n}\n.int-flag.cy {\n  height: 13px;\n  background-position: -1225px 0px;\n}\n.int-flag.cz {\n  height: 14px;\n  background-position: -1247px 0px;\n}\n.int-flag.de {\n  height: 12px;\n  background-position: -1269px 0px;\n}\n.int-flag.dg {\n  height: 10px;\n  background-position: -1291px 0px;\n}\n.int-flag.dj {\n  height: 14px;\n  background-position: -1313px 0px;\n}\n.int-flag.dk {\n  height: 15px;\n  background-position: -1335px 0px;\n}\n.int-flag.dm {\n  height: 10px;\n  background-position: -1357px 0px;\n}\n.int-flag.do {\n  height: 13px;\n  background-position: -1379px 0px;\n}\n.int-flag.dz {\n  height: 14px;\n  background-position: -1401px 0px;\n}\n.int-flag.ea {\n  height: 14px;\n  background-position: -1423px 0px;\n}\n.int-flag.ec {\n  height: 14px;\n  background-position: -1445px 0px;\n}\n.int-flag.ee {\n  height: 13px;\n  background-position: -1467px 0px;\n}\n.int-flag.eg {\n  height: 14px;\n  background-position: -1489px 0px;\n}\n.int-flag.eh {\n  height: 10px;\n  background-position: -1511px 0px;\n}\n.int-flag.er {\n  height: 10px;\n  background-position: -1533px 0px;\n}\n.int-flag.es {\n  height: 14px;\n  background-position: -1555px 0px;\n}\n.int-flag.et {\n  height: 10px;\n  background-position: -1577px 0px;\n}\n.int-flag.eu {\n  height: 14px;\n  background-position: -1599px 0px;\n}\n.int-flag.fi {\n  height: 12px;\n  background-position: -1621px 0px;\n}\n.int-flag.fj {\n  height: 10px;\n  background-position: -1643px 0px;\n}\n.int-flag.fk {\n  height: 10px;\n  background-position: -1665px 0px;\n}\n.int-flag.fm {\n  height: 11px;\n  background-position: -1687px 0px;\n}\n.int-flag.fo {\n  height: 15px;\n  background-position: -1709px 0px;\n}\n.int-flag.fr {\n  height: 14px;\n  background-position: -1731px 0px;\n}\n.int-flag.ga {\n  height: 15px;\n  background-position: -1753px 0px;\n}\n.int-flag.gb {\n  height: 10px;\n  background-position: -1775px 0px;\n}\n.int-flag.gd {\n  height: 12px;\n  background-position: -1797px 0px;\n}\n.int-flag.ge {\n  height: 14px;\n  background-position: -1819px 0px;\n}\n.int-flag.gf {\n  height: 14px;\n  background-position: -1841px 0px;\n}\n.int-flag.gg {\n  height: 14px;\n  background-position: -1863px 0px;\n}\n.int-flag.gh {\n  height: 14px;\n  background-position: -1885px 0px;\n}\n.int-flag.gi {\n  height: 10px;\n  background-position: -1907px 0px;\n}\n.int-flag.gl {\n  height: 14px;\n  background-position: -1929px 0px;\n}\n.int-flag.gm {\n  height: 14px;\n  background-position: -1951px 0px;\n}\n.int-flag.gn {\n  height: 14px;\n  background-position: -1973px 0px;\n}\n.int-flag.gp {\n  height: 14px;\n  background-position: -1995px 0px;\n}\n.int-flag.gq {\n  height: 14px;\n  background-position: -2017px 0px;\n}\n.int-flag.gr {\n  height: 14px;\n  background-position: -2039px 0px;\n}\n.int-flag.gs {\n  height: 10px;\n  background-position: -2061px 0px;\n}\n.int-flag.gt {\n  height: 13px;\n  background-position: -2083px 0px;\n}\n.int-flag.gu {\n  height: 11px;\n  background-position: -2105px 0px;\n}\n.int-flag.gw {\n  height: 10px;\n  background-position: -2127px 0px;\n}\n.int-flag.gy {\n  height: 12px;\n  background-position: -2149px 0px;\n}\n.int-flag.hk {\n  height: 14px;\n  background-position: -2171px 0px;\n}\n.int-flag.hm {\n  height: 10px;\n  background-position: -2193px 0px;\n}\n.int-flag.hn {\n  height: 10px;\n  background-position: -2215px 0px;\n}\n.int-flag.hr {\n  height: 10px;\n  background-position: -2237px 0px;\n}\n.int-flag.ht {\n  height: 12px;\n  background-position: -2259px 0px;\n}\n.int-flag.hu {\n  height: 10px;\n  background-position: -2281px 0px;\n}\n.int-flag.ic {\n  height: 14px;\n  background-position: -2303px 0px;\n}\n.int-flag.id {\n  height: 14px;\n  background-position: -2325px 0px;\n}\n.int-flag.ie {\n  height: 10px;\n  background-position: -2347px 0px;\n}\n.int-flag.il {\n  height: 15px;\n  background-position: -2369px 0px;\n}\n.int-flag.im {\n  height: 10px;\n  background-position: -2391px 0px;\n}\n.int-flag.in {\n  height: 14px;\n  background-position: -2413px 0px;\n}\n.int-flag.io {\n  height: 10px;\n  background-position: -2435px 0px;\n}\n.int-flag.iq {\n  height: 14px;\n  background-position: -2457px 0px;\n}\n.int-flag.ir {\n  height: 12px;\n  background-position: -2479px 0px;\n}\n.int-flag.is {\n  height: 15px;\n  background-position: -2501px 0px;\n}\n.int-flag.it {\n  height: 14px;\n  background-position: -2523px 0px;\n}\n.int-flag.je {\n  height: 12px;\n  background-position: -2545px 0px;\n}\n.int-flag.jm {\n  height: 10px;\n  background-position: -2567px 0px;\n}\n.int-flag.jo {\n  height: 10px;\n  background-position: -2589px 0px;\n}\n.int-flag.jp {\n  height: 14px;\n  background-position: -2611px 0px;\n}\n.int-flag.ke {\n  height: 14px;\n  background-position: -2633px 0px;\n}\n.int-flag.kg {\n  height: 12px;\n  background-position: -2655px 0px;\n}\n.int-flag.kh {\n  height: 13px;\n  background-position: -2677px 0px;\n}\n.int-flag.ki {\n  height: 10px;\n  background-position: -2699px 0px;\n}\n.int-flag.km {\n  height: 12px;\n  background-position: -2721px 0px;\n}\n.int-flag.kn {\n  height: 14px;\n  background-position: -2743px 0px;\n}\n.int-flag.kp {\n  height: 10px;\n  background-position: -2765px 0px;\n}\n.int-flag.kr {\n  height: 14px;\n  background-position: -2787px 0px;\n}\n.int-flag.kw {\n  height: 10px;\n  background-position: -2809px 0px;\n}\n.int-flag.ky {\n  height: 10px;\n  background-position: -2831px 0px;\n}\n.int-flag.kz {\n  height: 10px;\n  background-position: -2853px 0px;\n}\n.int-flag.la {\n  height: 14px;\n  background-position: -2875px 0px;\n}\n.int-flag.lb {\n  height: 14px;\n  background-position: -2897px 0px;\n}\n.int-flag.lc {\n  height: 10px;\n  background-position: -2919px 0px;\n}\n.int-flag.li {\n  height: 12px;\n  background-position: -2941px 0px;\n}\n.int-flag.lk {\n  height: 10px;\n  background-position: -2963px 0px;\n}\n.int-flag.lr {\n  height: 11px;\n  background-position: -2985px 0px;\n}\n.int-flag.ls {\n  height: 14px;\n  background-position: -3007px 0px;\n}\n.int-flag.lt {\n  height: 12px;\n  background-position: -3029px 0px;\n}\n.int-flag.lu {\n  height: 12px;\n  background-position: -3051px 0px;\n}\n.int-flag.lv {\n  height: 10px;\n  background-position: -3073px 0px;\n}\n.int-flag.ly {\n  height: 10px;\n  background-position: -3095px 0px;\n}\n.int-flag.ma {\n  height: 14px;\n  background-position: -3117px 0px;\n}\n.int-flag.mc {\n  height: 15px;\n  background-position: -3139px 0px;\n}\n.int-flag.md {\n  height: 10px;\n  background-position: -3160px 0px;\n}\n.int-flag.me {\n  height: 10px;\n  background-position: -3182px 0px;\n}\n.int-flag.mf {\n  height: 14px;\n  background-position: -3204px 0px;\n}\n.int-flag.mg {\n  height: 14px;\n  background-position: -3226px 0px;\n}\n.int-flag.mh {\n  height: 11px;\n  background-position: -3248px 0px;\n}\n.int-flag.mk {\n  height: 10px;\n  background-position: -3270px 0px;\n}\n.int-flag.ml {\n  height: 14px;\n  background-position: -3292px 0px;\n}\n.int-flag.mm {\n  height: 14px;\n  background-position: -3314px 0px;\n}\n.int-flag.mn {\n  height: 10px;\n  background-position: -3336px 0px;\n}\n.int-flag.mo {\n  height: 14px;\n  background-position: -3358px 0px;\n}\n.int-flag.mp {\n  height: 10px;\n  background-position: -3380px 0px;\n}\n.int-flag.mq {\n  height: 14px;\n  background-position: -3402px 0px;\n}\n.int-flag.mr {\n  height: 14px;\n  background-position: -3424px 0px;\n}\n.int-flag.ms {\n  height: 10px;\n  background-position: -3446px 0px;\n}\n.int-flag.mt {\n  height: 14px;\n  background-position: -3468px 0px;\n}\n.int-flag.mu {\n  height: 14px;\n  background-position: -3490px 0px;\n}\n.int-flag.mv {\n  height: 14px;\n  background-position: -3512px 0px;\n}\n.int-flag.mw {\n  height: 14px;\n  background-position: -3534px 0px;\n}\n.int-flag.mx {\n  height: 12px;\n  background-position: -3556px 0px;\n}\n.int-flag.my {\n  height: 10px;\n  background-position: -3578px 0px;\n}\n.int-flag.mz {\n  height: 14px;\n  background-position: -3600px 0px;\n}\n.int-flag.na {\n  height: 14px;\n  background-position: -3622px 0px;\n}\n.int-flag.nc {\n  height: 10px;\n  background-position: -3644px 0px;\n}\n.int-flag.ne {\n  height: 15px;\n  background-position: -3666px 0px;\n}\n.int-flag.nf {\n  height: 10px;\n  background-position: -3686px 0px;\n}\n.int-flag.ng {\n  height: 10px;\n  background-position: -3708px 0px;\n}\n.int-flag.ni {\n  height: 12px;\n  background-position: -3730px 0px;\n}\n.int-flag.nl {\n  height: 14px;\n  background-position: -3752px 0px;\n}\n.int-flag.no {\n  height: 15px;\n  background-position: -3774px 0px;\n}\n.int-flag.np {\n  height: 15px;\n  background-position: -3796px 0px;\n}\n.int-flag.nr {\n  height: 10px;\n  background-position: -3811px 0px;\n}\n.int-flag.nu {\n  height: 10px;\n  background-position: -3833px 0px;\n}\n.int-flag.nz {\n  height: 10px;\n  background-position: -3855px 0px;\n}\n.int-flag.om {\n  height: 10px;\n  background-position: -3877px 0px;\n}\n.int-flag.pa {\n  height: 14px;\n  background-position: -3899px 0px;\n}\n.int-flag.pe {\n  height: 14px;\n  background-position: -3921px 0px;\n}\n.int-flag.pf {\n  height: 14px;\n  background-position: -3943px 0px;\n}\n.int-flag.pg {\n  height: 15px;\n  background-position: -3965px 0px;\n}\n.int-flag.ph {\n  height: 10px;\n  background-position: -3987px 0px;\n}\n.int-flag.pk {\n  height: 14px;\n  background-position: -4009px 0px;\n}\n.int-flag.pl {\n  height: 13px;\n  background-position: -4031px 0px;\n}\n.int-flag.pm {\n  height: 14px;\n  background-position: -4053px 0px;\n}\n.int-flag.pn {\n  height: 10px;\n  background-position: -4075px 0px;\n}\n.int-flag.pr {\n  height: 14px;\n  background-position: -4097px 0px;\n}\n.int-flag.ps {\n  height: 10px;\n  background-position: -4119px 0px;\n}\n.int-flag.pt {\n  height: 14px;\n  background-position: -4141px 0px;\n}\n.int-flag.pw {\n  height: 13px;\n  background-position: -4163px 0px;\n}\n.int-flag.py {\n  height: 11px;\n  background-position: -4185px 0px;\n}\n.int-flag.qa {\n  height: 8px;\n  background-position: -4207px 0px;\n}\n.int-flag.re {\n  height: 14px;\n  background-position: -4229px 0px;\n}\n.int-flag.ro {\n  height: 14px;\n  background-position: -4251px 0px;\n}\n.int-flag.rs {\n  height: 14px;\n  background-position: -4273px 0px;\n}\n.int-flag.ru {\n  height: 14px;\n  background-position: -4295px 0px;\n}\n.int-flag.rw {\n  height: 14px;\n  background-position: -4317px 0px;\n}\n.int-flag.sa {\n  height: 14px;\n  background-position: -4339px 0px;\n}\n.int-flag.sb {\n  height: 10px;\n  background-position: -4361px 0px;\n}\n.int-flag.sc {\n  height: 10px;\n  background-position: -4383px 0px;\n}\n.int-flag.sd {\n  height: 10px;\n  background-position: -4405px 0px;\n}\n.int-flag.se {\n  height: 13px;\n  background-position: -4427px 0px;\n}\n.int-flag.sg {\n  height: 14px;\n  background-position: -4449px 0px;\n}\n.int-flag.sh {\n  height: 10px;\n  background-position: -4471px 0px;\n}\n.int-flag.si {\n  height: 10px;\n  background-position: -4493px 0px;\n}\n.int-flag.sj {\n  height: 15px;\n  background-position: -4515px 0px;\n}\n.int-flag.sk {\n  height: 14px;\n  background-position: -4537px 0px;\n}\n.int-flag.sl {\n  height: 14px;\n  background-position: -4559px 0px;\n}\n.int-flag.sm {\n  height: 15px;\n  background-position: -4581px 0px;\n}\n.int-flag.sn {\n  height: 14px;\n  background-position: -4603px 0px;\n}\n.int-flag.so {\n  height: 14px;\n  background-position: -4625px 0px;\n}\n.int-flag.sr {\n  height: 14px;\n  background-position: -4647px 0px;\n}\n.int-flag.ss {\n  height: 10px;\n  background-position: -4669px 0px;\n}\n.int-flag.st {\n  height: 10px;\n  background-position: -4691px 0px;\n}\n.int-flag.sv {\n  height: 12px;\n  background-position: -4713px 0px;\n}\n.int-flag.sx {\n  height: 14px;\n  background-position: -4735px 0px;\n}\n.int-flag.sy {\n  height: 14px;\n  background-position: -4757px 0px;\n}\n.int-flag.sz {\n  height: 14px;\n  background-position: -4779px 0px;\n}\n.int-flag.ta {\n  height: 10px;\n  background-position: -4801px 0px;\n}\n.int-flag.tc {\n  height: 10px;\n  background-position: -4823px 0px;\n}\n.int-flag.td {\n  height: 14px;\n  background-position: -4845px 0px;\n}\n.int-flag.tf {\n  height: 14px;\n  background-position: -4867px 0px;\n}\n.int-flag.tg {\n  height: 13px;\n  background-position: -4889px 0px;\n}\n.int-flag.th {\n  height: 14px;\n  background-position: -4911px 0px;\n}\n.int-flag.tj {\n  height: 10px;\n  background-position: -4933px 0px;\n}\n.int-flag.tk {\n  height: 10px;\n  background-position: -4955px 0px;\n}\n.int-flag.tl {\n  height: 10px;\n  background-position: -4977px 0px;\n}\n.int-flag.tm {\n  height: 14px;\n  background-position: -4999px 0px;\n}\n.int-flag.tn {\n  height: 14px;\n  background-position: -5021px 0px;\n}\n.int-flag.to {\n  height: 10px;\n  background-position: -5043px 0px;\n}\n.int-flag.tr {\n  height: 14px;\n  background-position: -5065px 0px;\n}\n.int-flag.tt {\n  height: 12px;\n  background-position: -5087px 0px;\n}\n.int-flag.tv {\n  height: 10px;\n  background-position: -5109px 0px;\n}\n.int-flag.tw {\n  height: 14px;\n  background-position: -5131px 0px;\n}\n.int-flag.tz {\n  height: 14px;\n  background-position: -5153px 0px;\n}\n.int-flag.ua {\n  height: 14px;\n  background-position: -5175px 0px;\n}\n.int-flag.ug {\n  height: 14px;\n  background-position: -5197px 0px;\n}\n.int-flag.um {\n  height: 11px;\n  background-position: -5219px 0px;\n}\n.int-flag.us {\n  height: 11px;\n  background-position: -5241px 0px;\n}\n.int-flag.uy {\n  height: 14px;\n  background-position: -5263px 0px;\n}\n.int-flag.uz {\n  height: 10px;\n  background-position: -5285px 0px;\n}\n.int-flag.va {\n  height: 15px;\n  background-position: -5307px 0px;\n}\n.int-flag.vc {\n  height: 14px;\n  background-position: -5324px 0px;\n}\n.int-flag.ve {\n  height: 14px;\n  background-position: -5346px 0px;\n}\n.int-flag.vg {\n  height: 10px;\n  background-position: -5368px 0px;\n}\n.int-flag.vi {\n  height: 14px;\n  background-position: -5390px 0px;\n}\n.int-flag.vn {\n  height: 14px;\n  background-position: -5412px 0px;\n}\n.int-flag.vu {\n  height: 12px;\n  background-position: -5434px 0px;\n}\n.int-flag.wf {\n  height: 14px;\n  background-position: -5456px 0px;\n}\n.int-flag.ws {\n  height: 10px;\n  background-position: -5478px 0px;\n}\n.int-flag.xk {\n  height: 15px;\n  background-position: -5500px 0px;\n}\n.int-flag.ye {\n  height: 14px;\n  background-position: -5522px 0px;\n}\n.int-flag.yt {\n  height: 14px;\n  background-position: -5544px 0px;\n}\n.int-flag.za {\n  height: 14px;\n  background-position: -5566px 0px;\n}\n.int-flag.zm {\n  height: 14px;\n  background-position: -5588px 0px;\n}\n.int-flag.zw {\n  height: 10px;\n  background-position: -5610px 0px;\n}\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(6)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles(parentId, list) {
  var styles = [];
  var newStyles = {};
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    };
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] });
    } else {
      newStyles[id].parts.push(part);
    }
  }
  return styles;
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import element from 'element-ui'
// import ElSelect from 'element-ui/lib/select'
// import ElOption from 'element-ui/lib/option'
// import ElInput from 'element-ui/lib/input'

const phonesData = {
  af: { code: 'af', name: 'Afghanistan (‫افغانستان‬‎)', dialCode: 93, example: '070 123 4567' },
  al: { code: 'al', name: 'Albania (Shqipëri)', dialCode: 355, example: '066 123 4567' },
  dz: { code: 'dz', name: 'Algeria (‫الجزائر‬‎)', dialCode: 213, example: '0551 23 45 67' },
  as: { code: 'as', name: 'American Samoa', dialCode: 1684, example: '(684) 733-1234' },
  ad: { code: 'ad', name: 'Andorra', dialCode: 376, example: '312 345' },
  ao: { code: 'ao', name: 'Angola', dialCode: 244, example: '923 123 456' },
  ai: { code: 'ai', name: 'Anguilla', dialCode: 1264, example: '(264) 235-1234' },
  ag: { code: 'ag', name: 'Antigua and Barbuda', dialCode: 1268, example: '(268) 464-1234' },
  ar: { code: 'ar', name: 'Argentina', dialCode: 54, example: '011 15-2345-6789' },
  am: { code: 'am', name: 'Armenia (Հայաստան)', dialCode: 374, example: '077 123456' },
  aw: { code: 'aw', name: 'Aruba', dialCode: 297, example: '560 1234' },
  au: { code: 'au', name: 'Australia', dialCode: 61, example: '0412 345 678' },
  at: { code: 'at', name: 'Austria (Österreich)', dialCode: 43, example: '0664 123456' },
  az: { code: 'az', name: 'Azerbaijan (Azərbaycan)', dialCode: 994, example: '040 123 45 67' },
  bs: { code: 'bs', name: 'Bahamas', dialCode: 1242, example: '(242) 359-1234' },
  bh: { code: 'bh', name: 'Bahrain (‫البحرين‬‎)', dialCode: 973, example: '3600 1234' },
  bd: { code: 'bd', name: 'Bangladesh (বাংলাদেশ)', dialCode: 880, example: '01812-345678' },
  bb: { code: 'bb', name: 'Barbados', dialCode: 1246, example: '(246) 250-1234' },
  by: { code: 'by', name: 'Belarus (Беларусь)', dialCode: 375, example: '8 029 491-19-11' },
  be: { code: 'be', name: 'Belgium (België)', dialCode: 32, example: '0470 12 34 56' },
  bz: { code: 'bz', name: 'Belize', dialCode: 501, example: '622-1234' },
  bj: { code: 'bj', name: 'Benin (Bénin)', dialCode: 229, example: '90 01 12 34' },
  bm: { code: 'bm', name: 'Bermuda', dialCode: 1441, example: '(441) 370-1234' },
  bt: { code: 'bt', name: 'Bhutan (འབྲུག)', dialCode: 975, example: '17 12 34 56' },
  bo: { code: 'bo', name: 'Bolivia', dialCode: 591, example: '71234567' },
  ba: { code: 'ba', name: 'Bosnia and Herzegovina (Босна и Херцеговина)', dialCode: 387, example: '061 123 456' },
  bw: { code: 'bw', name: 'Botswana', dialCode: 267, example: '71 123 456' },
  br: { code: 'br', name: 'Brazil (Brasil)', dialCode: 55, example: '(11) 96123-4567' },
  io: { code: 'io', name: 'British Indian Ocean Territory', dialCode: 246, example: '380 1234' },
  vg: { code: 'vg', name: 'British Virgin Islands', dialCode: 1284, example: '(284) 300-1234' },
  bn: { code: 'bn', name: 'Brunei', dialCode: 673, example: '712 3456' },
  bg: { code: 'bg', name: 'Bulgaria (България)', dialCode: 359, example: '048 123 456' },
  bf: { code: 'bf', name: 'Burkina Faso', dialCode: 226, example: '70 12 34 56' },
  bi: { code: 'bi', name: 'Burundi (Uburundi)', dialCode: 257, example: '79 56 12 34' },
  kh: { code: 'kh', name: 'Cambodia (កម្ពុជា)', dialCode: 855, example: '091 234 567' },
  cm: { code: 'cm', name: 'Cameroon (Cameroun)', dialCode: 237, example: '6 71 23 45 67' },
  ca: { code: 'ca', name: 'Canada', dialCode: 1, example: '(204) 234-5678' },
  cv: { code: 'cv', name: 'Cape Verde (Kabu Verdi)', dialCode: 238, example: '991 12 34' },
  bq: { code: 'bq', name: 'Caribbean Netherlands', dialCode: 599, example: '318 1234' },
  ky: { code: 'ky', name: 'Cayman Islands', dialCode: 1345, example: '(345) 323-1234' },
  cf: { code: 'cf', name: 'Central African Republic (République centrafricaine)', dialCode: 236, example: '70 01 23 45' },
  td: { code: 'td', name: 'Chad (Tchad)', dialCode: 235, example: '63 01 23 45' },
  cl: { code: 'cl', name: 'Chile', dialCode: 56, example: '09 6123 4567' },
  cn: { code: 'cn', name: 'China (中国)', dialCode: 86, example: '131 2345 6789' },
  cx: { code: 'cx', name: 'Christmas Island', dialCode: 61, example: '0412 345 678' },
  cc: { code: 'cc', name: 'Cocos (Keeling) Islands', dialCode: 61, example: '0412 345 678' },
  co: { code: 'co', name: 'Colombia', dialCode: 57, example: '321 1234567' },
  km: { code: 'km', name: 'Comoros (‫جزر القمر‬‎)', dialCode: 269, example: '321 23 45' },
  cd: { code: 'cd', name: 'Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)', dialCode: 243, example: '0991 234 567' },
  cg: { code: 'cg', name: 'Congo (Republic) (Congo-Brazzaville)', dialCode: 242, example: '06 123 4567' },
  ck: { code: 'ck', name: 'Cook Islands', dialCode: 682, example: '71 234' },
  cr: { code: 'cr', name: 'Costa Rica', dialCode: 506, example: '8312 3456' },
  ci: { code: 'ci', name: 'Côte d’Ivoire', dialCode: 225, example: '01 23 45 67' },
  hr: { code: 'hr', name: 'Croatia (Hrvatska)', dialCode: 385, example: '091 234 5678' },
  cu: { code: 'cu', name: 'Cuba', dialCode: 53, example: '05 1234567' },
  cw: { code: 'cw', name: 'Curaçao', dialCode: 599, example: '9 518 1234' },
  cy: { code: 'cy', name: 'Cyprus (Κύπρος)', dialCode: 357, example: '96 123456' },
  cz: { code: 'cz', name: 'Czech Republic (Česká republika)', dialCode: 420, example: '601 123 456' },
  dk: { code: 'dk', name: 'Denmark (Danmark)', dialCode: 45, example: '20 12 34 56' },
  dj: { code: 'dj', name: 'Djibouti', dialCode: 253, example: '77 83 10 01' },
  dm: { code: 'dm', name: 'Dominica', dialCode: 1767, example: '(767) 225-1234' },
  do: { code: 'do', name: 'Dominican Republic (República Dominicana)', dialCode: 1, example: '(809) 234-5678' },
  ec: { code: 'ec', name: 'Ecuador', dialCode: 593, example: '099 123 4567' },
  eg: { code: 'eg', name: 'Egypt (‫مصر‬‎)', dialCode: 20, example: '0100 123 4567' },
  sv: { code: 'sv', name: 'El Salvador', dialCode: 503, example: '7012 3456' },
  gq: { code: 'gq', name: 'Equatorial Guinea (Guinea Ecuatorial)', dialCode: 240, example: '222 123 456' },
  er: { code: 'er', name: 'Eritrea', dialCode: 291, example: '07 123 456' },
  ee: { code: 'ee', name: 'Estonia (Eesti)', dialCode: 372, example: '5123 4567' },
  et: { code: 'et', name: 'Ethiopia', dialCode: 251, example: '091 123 4567' },
  fk: { code: 'fk', name: 'Falkland Islands (Islas Malvinas)', dialCode: 500, example: '51234' },
  fo: { code: 'fo', name: 'Faroe Islands (Føroyar)', dialCode: 298, example: '211234' },
  fj: { code: 'fj', name: 'Fiji', dialCode: 679, example: '701 2345' },
  fi: { code: 'fi', name: 'Finland (Suomi)', dialCode: 358, example: '041 2345678' },
  fr: { code: 'fr', name: 'France', dialCode: 33, example: '06 12 34 56 78' },
  gf: { code: 'gf', name: 'French Guiana (Guyane française)', dialCode: 594, example: '0694 20 12 34' },
  pf: { code: 'pf', name: 'French Polynesia (Polynésie française)', dialCode: 689, example: '87 12 34 56' },
  ga: { code: 'ga', name: 'Gabon', dialCode: 241, example: '06 03 12 34' },
  gm: { code: 'gm', name: 'Gambia', dialCode: 220, example: '301 2345' },
  ge: { code: 'ge', name: 'Georgia (საქართველო)', dialCode: 995, example: '555 12 34 56' },
  de: { code: 'de', name: 'Germany (Deutschland)', dialCode: 49, example: '01512 3456789' },
  gh: { code: 'gh', name: 'Ghana (Gaana)', dialCode: 233, example: '023 123 4567' },
  gi: { code: 'gi', name: 'Gibraltar', dialCode: 350, example: '57123456' },
  gr: { code: 'gr', name: 'Greece (Ελλάδα)', dialCode: 30, example: '691 234 5678' },
  gl: { code: 'gl', name: 'Greenland (Kalaallit Nunaat)', dialCode: 299, example: '22 12 34' },
  gd: { code: 'gd', name: 'Grenada', dialCode: 1473, example: '(473) 403-1234' },
  gp: { code: 'gp', name: 'Guadeloupe', dialCode: 590, example: '0690 30-1234' },
  gu: { code: 'gu', name: 'Guam', dialCode: 1671, example: '(671) 300-1234' },
  gt: { code: 'gt', name: 'Guatemala', dialCode: 502, example: '5123 4567' },
  gg: { code: 'gg', name: 'Guernsey', dialCode: 44, example: '07781 123456' },
  gn: { code: 'gn', name: 'Guinea (Guinée)', dialCode: 224, example: '601 12 34 56' },
  gw: { code: 'gw', name: 'Guinea-Bissau (Guiné Bissau)', dialCode: 245, example: '955 012 345' },
  gy: { code: 'gy', name: 'Guyana', dialCode: 592, example: '609 1234' },
  ht: { code: 'ht', name: 'Haiti', dialCode: 509, example: '34 10 1234' },
  hn: { code: 'hn', name: 'Honduras', dialCode: 504, example: '9123-4567' },
  hk: { code: 'hk', name: 'Hong Kong (香港)', dialCode: 852, example: '5123 4567' },
  hu: { code: 'hu', name: 'Hungary (Magyarország)', dialCode: 36, example: '(20) 123 4567' },
  is: { code: 'is', name: 'Iceland (Ísland)', dialCode: 354, example: '611 1234' },
  in: { code: 'in', name: 'India (भारत)', dialCode: 91, example: '099876 54321' },
  id: { code: 'id', name: 'Indonesia', dialCode: 62, example: '0812-345-678' },
  ir: { code: 'ir', name: 'Iran (‫ایران‬‎)', dialCode: 98, example: '0912 345 6789' },
  iq: { code: 'iq', name: 'Iraq (‫العراق‬‎)', dialCode: 964, example: '0791 234 5678' },
  ie: { code: 'ie', name: 'Ireland', dialCode: 353, example: '085 012 3456' },
  im: { code: 'im', name: 'Isle of Man', dialCode: 44, example: '07924 123456' },
  il: { code: 'il', name: 'Israel (‫ישראל‬‎)', dialCode: 972, example: '050-123-4567' },
  it: { code: 'it', name: 'Italy (Italia)', dialCode: 39, example: '312 345 6789' },
  jm: { code: 'jm', name: 'Jamaica', dialCode: 1876, example: '(876) 210-1234' },
  jp: { code: 'jp', name: 'Japan (日本)', dialCode: 81, example: '090-1234-5678' },
  je: { code: 'je', name: 'Jersey', dialCode: 44, example: '07797 123456' },
  jo: { code: 'jo', name: 'Jordan (‫الأردن‬‎)', dialCode: 962, example: '07 9012 3456' },
  kz: { code: 'kz', name: 'Kazakhstan (Казахстан)', dialCode: 7, example: '8 (771) 000 9998' },
  ke: { code: 'ke', name: 'Kenya', dialCode: 254, example: '0712 123456' },
  ki: { code: 'ki', name: 'Kiribati', dialCode: 686, example: '72012345' },
  xk: { code: 'xk', name: 'Kosovo', dialCode: 383, example: '' },
  kw: { code: 'kw', name: 'Kuwait (‫الكويت‬‎)', dialCode: 965, example: '500 12345' },
  kg: { code: 'kg', name: 'Kyrgyzstan (Кыргызстан)', dialCode: 996, example: '0700 123 456' },
  la: { code: 'la', name: 'Laos (ລາວ)', dialCode: 856, example: '020 23 123 456' },
  lv: { code: 'lv', name: 'Latvia (Latvija)', dialCode: 371, example: '21 234 567' },
  lb: { code: 'lb', name: 'Lebanon (‫لبنان‬‎)', dialCode: 961, example: '71 123 456' },
  ls: { code: 'ls', name: 'Lesotho', dialCode: 266, example: '5012 3456' },
  lr: { code: 'lr', name: 'Liberia', dialCode: 231, example: '077 012 3456' },
  ly: { code: 'ly', name: 'Libya (‫ليبيا‬‎)', dialCode: 218, example: '091-2345678' },
  li: { code: 'li', name: 'Liechtenstein', dialCode: 423, example: '660 234 567' },
  lt: { code: 'lt', name: 'Lithuania (Lietuva)', dialCode: 370, example: '(8-612) 34567' },
  lu: { code: 'lu', name: 'Luxembourg', dialCode: 352, example: '628 123 456' },
  mo: { code: 'mo', name: 'Macau (澳門)', dialCode: 853, example: '6612 3456' },
  mk: { code: 'mk', name: 'Macedonia (FYROM) (Македонија)', dialCode: 389, example: '072 345 678' },
  mg: { code: 'mg', name: 'Madagascar (Madagasikara)', dialCode: 261, example: '032 12 345 67' },
  mw: { code: 'mw', name: 'Malawi', dialCode: 265, example: '0991 23 45 67' },
  my: { code: 'my', name: 'Malaysia', dialCode: 60, example: '012-345 6789' },
  mv: { code: 'mv', name: 'Maldives', dialCode: 960, example: '771-2345' },
  ml: { code: 'ml', name: 'Mali', dialCode: 223, example: '65 01 23 45' },
  mt: { code: 'mt', name: 'Malta', dialCode: 356, example: '9696 1234' },
  mh: { code: 'mh', name: 'Marshall Islands', dialCode: 692, example: '235-1234' },
  mq: { code: 'mq', name: 'Martinique', dialCode: 596, example: '0696 20 12 34' },
  mr: { code: 'mr', name: 'Mauritania (‫موريتانيا‬‎)', dialCode: 222, example: '22 12 34 56' },
  mu: { code: 'mu', name: 'Mauritius (Moris)', dialCode: 230, example: '5251 2345' },
  yt: { code: 'yt', name: 'Mayotte', dialCode: 262, example: '0639 12 34 56' },
  mx: { code: 'mx', name: 'Mexico (México)', dialCode: 52, example: '044 222 123 4567' },
  fm: { code: 'fm', name: 'Micronesia', dialCode: 691, example: '350 1234' },
  md: { code: 'md', name: 'Moldova (Republica Moldova)', dialCode: 373, example: '0621 12 345' },
  mc: { code: 'mc', name: 'Monaco', dialCode: 377, example: '06 12 34 56 78' },
  mn: { code: 'mn', name: 'Mongolia (Монгол)', dialCode: 976, example: '8812 3456' },
  me: { code: 'me', name: 'Montenegro (Crna Gora)', dialCode: 382, example: '067 622 901' },
  ms: { code: 'ms', name: 'Montserrat', dialCode: 1664, example: '(664) 492-3456' },
  ma: { code: 'ma', name: 'Morocco (‫المغرب‬‎)', dialCode: 212, example: '0650-123456' },
  mz: { code: 'mz', name: 'Mozambique (Moçambique)', dialCode: 258, example: '82 123 4567' },
  mm: { code: 'mm', name: 'Myanmar (Burma) (မြန်မာ)', dialCode: 95, example: '09 212 3456' },
  na: { code: 'na', name: 'Namibia (Namibië)', dialCode: 264, example: '081 123 4567' },
  nr: { code: 'nr', name: 'Nauru', dialCode: 674, example: '555 1234' },
  np: { code: 'np', name: 'Nepal (नेपाल)', dialCode: 977, example: '984-1234567' },
  nl: { code: 'nl', name: 'Netherlands (Nederland)', dialCode: 31, example: '06 12345678' },
  nc: { code: 'nc', name: 'New Caledonia (Nouvelle-Calédonie)', dialCode: 687, example: '75.12.34' },
  nz: { code: 'nz', name: 'New Zealand', dialCode: 64, example: '021 123 4567' },
  ni: { code: 'ni', name: 'Nicaragua', dialCode: 505, example: '8123 4567' },
  ne: { code: 'ne', name: 'Niger (Nijar)', dialCode: 227, example: '93 12 34 56' },
  ng: { code: 'ng', name: 'Nigeria', dialCode: 234, example: '0802 123 4567' },
  nu: { code: 'nu', name: 'Niue', dialCode: 683, example: '1234' },
  nf: { code: 'nf', name: 'Norfolk Island', dialCode: 672, example: '3 81234' },
  kp: { code: 'kp', name: 'North Korea (조선 민주주의 인민 공화국)', dialCode: 850, example: '0192 123 4567' },
  mp: { code: 'mp', name: 'Northern Mariana Islands', dialCode: 1670, example: '(670) 234-5678' },
  no: { code: 'no', name: 'Norway (Norge)', dialCode: 47, example: '406 12 345' },
  om: { code: 'om', name: 'Oman (‫عُمان‬‎)', dialCode: 968, example: '9212 3456' },
  pk: { code: 'pk', name: 'Pakistan (‫پاکستان‬‎)', dialCode: 92, example: '0301 2345678' },
  pw: { code: 'pw', name: 'Palau', dialCode: 680, example: '620 1234' },
  ps: { code: 'ps', name: 'Palestine (‫فلسطين‬‎)', dialCode: 970, example: '0599 123 456' },
  pa: { code: 'pa', name: 'Panama (Panamá)', dialCode: 507, example: '6001-2345' },
  pg: { code: 'pg', name: 'Papua New Guinea', dialCode: 675, example: '681 2345' },
  py: { code: 'py', name: 'Paraguay', dialCode: 595, example: '0961 456789' },
  pe: { code: 'pe', name: 'Peru (Perú)', dialCode: 51, example: '912 345 678' },
  ph: { code: 'ph', name: 'Philippines', dialCode: 63, example: '0905 123 4567' },
  pl: { code: 'pl', name: 'Poland (Polska)', dialCode: 48, example: '512 345 678' },
  pt: { code: 'pt', name: 'Portugal', dialCode: 351, example: '912 345 678' },
  pr: { code: 'pr', name: 'Puerto Rico', dialCode: 1, example: '(787) 234-5678' },
  qa: { code: 'qa', name: 'Qatar (‫قطر‬‎)', dialCode: 974, example: '3312 3456' },
  re: { code: 're', name: 'Réunion (La Réunion)', dialCode: 262, example: '0692 12 34 56' },
  ro: { code: 'ro', name: 'Romania (România)', dialCode: 40, example: '0712 345 678' },
  ru: { code: 'ru', name: 'Russia (Россия)', dialCode: 7, example: '8 (912) 345-67-89' },
  rw: { code: 'rw', name: 'Rwanda', dialCode: 250, example: '0720 123 456' },
  bl: { code: 'bl', name: 'Saint Barthélemy (Saint-Barthélemy)', dialCode: 590, example: '0690 30-1234' },
  sh: { code: 'sh', name: 'Saint Helena', dialCode: 290, example: '51234' },
  kn: { code: 'kn', name: 'Saint Kitts and Nevis', dialCode: 1869, example: '(869) 765-2917' },
  lc: { code: 'lc', name: 'Saint Lucia', dialCode: 1758, example: '(758) 284-5678' },
  mf: { code: 'mf', name: 'Saint Martin (Saint-Martin (partie française))', dialCode: 590, example: '0690 30-1234' },
  pm: { code: 'pm', name: 'Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)', dialCode: 508, example: '055 12 34' },
  vc: { code: 'vc', name: 'Saint Vincent and the Grenadines', dialCode: 1784, example: '(784) 430-1234' },
  ws: { code: 'ws', name: 'Samoa', dialCode: 685, example: '601234' },
  sm: { code: 'sm', name: 'San Marino', dialCode: 378, example: '66 66 12 12' },
  st: { code: 'st', name: 'São Tomé and Príncipe (São Tomé e Príncipe)', dialCode: 239, example: '981 2345' },
  sa: { code: 'sa', name: 'Saudi Arabia (‫المملكة العربية السعودية‬‎)', dialCode: 966, example: '051 234 5678' },
  sn: { code: 'sn', name: 'Senegal (Sénégal)', dialCode: 221, example: '70 123 45 67' },
  rs: { code: 'rs', name: 'Serbia (Србија)', dialCode: 381, example: '060 1234567' },
  sc: { code: 'sc', name: 'Seychelles', dialCode: 248, example: '2 510 123' },
  sl: { code: 'sl', name: 'Sierra Leone', dialCode: 232, example: '(025) 123456' },
  sg: { code: 'sg', name: 'Singapore', dialCode: 65, example: '8123 4567' },
  sx: { code: 'sx', name: 'Sint Maarten', dialCode: 1721, example: '(721) 520-5678' },
  sk: { code: 'sk', name: 'Slovakia (Slovensko)', dialCode: 421, example: '0912 123 456' },
  si: { code: 'si', name: 'Slovenia (Slovenija)', dialCode: 386, example: '031 234 567' },
  sb: { code: 'sb', name: 'Solomon Islands', dialCode: 677, example: '74 21234' },
  so: { code: 'so', name: 'Somalia (Soomaaliya)', dialCode: 252, example: '7 1123456' },
  za: { code: 'za', name: 'South Africa', dialCode: 27, example: '071 123 4567' },
  kr: { code: 'kr', name: 'South Korea (대한민국)', dialCode: 82, example: '010-0000-0000' },
  ss: { code: 'ss', name: 'South Sudan (‫جنوب السودان‬‎)', dialCode: 211, example: '0977 123 456' },
  es: { code: 'es', name: 'Spain (España)', dialCode: 34, example: '612 34 56 78' },
  lk: { code: 'lk', name: 'Sri Lanka (ශ්‍රී ලංකාව)', dialCode: 94, example: '071 234 5678' },
  sd: { code: 'sd', name: 'Sudan (‫السودان‬‎)', dialCode: 249, example: '091 123 1234' },
  sr: { code: 'sr', name: 'Suriname', dialCode: 597, example: '741-2345' },
  sj: { code: 'sj', name: 'Svalbard and Jan Mayen', dialCode: 47, example: '412 34 567' },
  sz: { code: 'sz', name: 'Swaziland', dialCode: 268, example: '7612 3456' },
  se: { code: 'se', name: 'Sweden (Sverige)', dialCode: 46, example: '070-123 45 67' },
  ch: { code: 'ch', name: 'Switzerland (Schweiz)', dialCode: 41, example: '078 123 45 67' },
  sy: { code: 'sy', name: 'Syria (‫سوريا‬‎)', dialCode: 963, example: '0944 567 890' },
  tw: { code: 'tw', name: 'Taiwan (台灣)', dialCode: 886, example: '0912 345 678' },
  tj: { code: 'tj', name: 'Tajikistan', dialCode: 992, example: '(8) 917 12 3456' },
  tz: { code: 'tz', name: 'Tanzania', dialCode: 255, example: '0621 234 567' },
  th: { code: 'th', name: 'Thailand (ไทย)', dialCode: 66, example: '081 234 5678' },
  tl: { code: 'tl', name: 'Timor-Leste', dialCode: 670, example: '7721 2345' },
  tg: { code: 'tg', name: 'Togo', dialCode: 228, example: '90 11 23 45' },
  tk: { code: 'tk', name: 'Tokelau', dialCode: 690, example: '7290' },
  to: { code: 'to', name: 'Tonga', dialCode: 676, example: '771 5123' },
  tt: { code: 'tt', name: 'Trinidad and Tobago', dialCode: 1868, example: '(868) 291-1234' },
  tn: { code: 'tn', name: 'Tunisia (‫تونس‬‎)', dialCode: 216, example: '20 123 456' },
  tr: { code: 'tr', name: 'Turkey (Türkiye)', dialCode: 90, example: '0501 234 56 78' },
  tm: { code: 'tm', name: 'Turkmenistan', dialCode: 993, example: '8 66 123456' },
  tc: { code: 'tc', name: 'Turks and Caicos Islands', dialCode: 1649, example: '(649) 231-1234' },
  tv: { code: 'tv', name: 'Tuvalu', dialCode: 688, example: '901234' },
  us: { code: 'us', name: 'United States', dialCode: 1, example: '(201) 555-0123' },
  gb: { code: 'gb', name: 'United Kingdom', dialCode: 44, example: '07400 123456' },
  vi: { code: 'vi', name: 'U.S. Virgin Islands', dialCode: 1340, example: '(340) 642-1234' },
  ug: { code: 'ug', name: 'Uganda', dialCode: 256, example: '0712 345678' },
  ua: { code: 'ua', name: 'Ukraine (Україна)', dialCode: 380, example: '039 123 4567' },
  ae: { code: 'ae', name: 'United Arab Emirates (‫الإمارات العربية المتحدة‬‎)', dialCode: 971, example: '050 123 4567' },
  uy: { code: 'uy', name: 'Uruguay', dialCode: 598, example: '094 231 234' },
  uz: { code: 'uz', name: 'Uzbekistan (Oʻzbekiston)', dialCode: 998, example: '8 91 234 56 78' },
  vu: { code: 'vu', name: 'Vanuatu', dialCode: 678, example: '591 2345' },
  va: { code: 'va', name: 'Vatican City (Città del Vaticano)', dialCode: 39, example: '312 345 6789' },
  ve: { code: 've', name: 'Venezuela', dialCode: 58, example: '0412-1234567' },
  vn: { code: 'vn', name: 'Vietnam (Việt Nam)', dialCode: 84, example: '091 234 56 78' },
  wf: { code: 'wf', name: 'Wallis and Futuna', dialCode: 681, example: '50 12 34' },
  eh: { code: 'eh', name: 'Western Sahara (‫الصحراء الغربية‬‎)', dialCode: 212, example: '0650-123456' },
  ye: { code: 'ye', name: 'Yemen (‫اليمن‬‎)', dialCode: 967, example: '0712 345 678' },
  zm: { code: 'zm', name: 'Zambia', dialCode: 260, example: '095 5123456' },
  zw: { code: 'zw', name: 'Zimbabwe', dialCode: 263, example: '071 123 4567' },
  ax: { code: 'ax', name: 'Åland Islands', dialCode: 358, example: '041 2345678' }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'int-tel-input',

  components: {
    // ElOption, ElSelect, ElInput 
  },

  props: {
    phoneNumber: String,
    countryCode: Number
  },

  data() {
    return {
      phonesData
    };
  },

  watch: {},

  computed: {},

  methods: {
    countryCodeInputHandle(value) {
      this.$emit('countryCodeChange', value);
    },
    phoneNumberInputHandel(value) {
      this.$emit('phoneNumberChange', value);
    }
  },

  mounted() {}
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "int-tel-input-wapper clear-float" },
    [
      _c(
        "el-select",
        {
          staticClass: "int-tel-select",
          attrs: { value: _vm.countryCode },
          on: { input: _vm.countryCodeInputHandle }
        },
        _vm._l(_vm.phonesData, function(item, key) {
          return _c(
            "el-option",
            {
              key: item.code,
              attrs: {
                label: item.code.toUpperCase() + " +" + item.dialCode,
                value: item.dialCode
              }
            },
            [
              _c("span", { staticClass: "int-flag", class: item.code }),
              _c("span", { domProps: { textContent: _vm._s(item.name) } })
            ]
          )
        })
      ),
      _c("el-input", {
        ref: "input",
        staticClass: "int-tel-input",
        attrs: {
          value: _vm.phoneNumber,
          placeholder: "Phone number",
          type: "tel"
        },
        on: { input: _vm.phoneNumberInputHandel }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3c208292", esExports)
  }
}

/***/ })
/******/ ]);
});