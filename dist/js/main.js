/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../views/blocks/calc/calc.js":
/*!************************************!*\
  !*** ../views/blocks/calc/calc.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "../../node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "../../node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper */ "../../node_modules/swiper/swiper.esm.js");






/* harmony default export */ __webpack_exports__["default"] = (function () {
  var sum = $('#total_cost').text();
  var preSum = sum;
  $('.calc__card-block input').on('change keyup input', function () {
    if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
    }

    $(this).val();
    summa();
    summaAnim();
  });
  $('.calc__card-block button').on('click', function () {
    var input = $(this).siblings('input').val();
    var sign = $(this).attr('data-sign');

    if (sign === 'plus') {
      input++;
      $(this).siblings('input').val(input);
      $(this).siblings('[data-sign=minus]').removeAttr('disabled');
    }

    if (sign === 'minus' && input > 0) {
      input--;
      $(this).siblings('input').val(input);

      if (input == 0) {
        $(this).attr('disabled', 'disabled');
      }
    }

    summa();
    summaAnim();
  });

  function summa() {
    var car = $('#input_car').val();
    var bus = $('#input_bus').val();
    var fura = $('#input_fura').val();
    preSum = $('#total_cost').text();
    preSum = parseInt(preSum.replace(/\s+/g, ''), 10);
    sum = car * 20000 + bus * 40000 + fura * 180000;
  }

  function summaAnim() {
    $('#total_cost').prop('Counter', preSum).animate({
      Counter: sum
    }, {
      duration: 100,
      easing: 'swing',
      step: function step(now) {
        $('#total_cost').text(Math.ceil(now).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ' '));
      }
    });
  }

  swiper__WEBPACK_IMPORTED_MODULE_5__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_5__["Navigation"]]);
  var windowWidth = window.innerWidth;
  var inits = false;
  var swiper;
  $(window).on('resize', function () {
    windowWidth = window.innerWidth;
    calcSwiper();
  });
  calcSwiper();

  function calcSwiper() {
    if (windowWidth < 540) {
      if (!inits) {
        inits = true;
        swiper = new swiper__WEBPACK_IMPORTED_MODULE_5__["default"]('#eco_slider', {
          slidesPerView: 1,
          speed: 400,
          centeredSlides: true,
          spaceBetween: 0,
          navigation: {
            nextEl: '#eco_slider .swiper-button-next',
            prevEl: '#eco_slider .swiper-button-prev'
          },
          on: {
            slideChangeTransitionStart: function slideChangeTransitionStart() {
              var prev = $('#eco_slider .swiper-slide-prev >span').text();
              var next = $('#eco_slider .swiper-slide-next >span').text();
              $('#eco_slider .swiper-button-prev span').text(prev);
              $('#eco_slider .swiper-button-next span').text(next);
            }
          }
        });
      }
    } else {
      if (inits) {
        inits = false;
        swiper.destroy();
      }
    }
  }
});

/***/ }),

/***/ "../views/blocks/form/form.js":
/*!************************************!*\
  !*** ../views/blocks/form/form.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "../../node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  $('#INN, #BIK, #YourOGRN, #YourINN, #YourKPP, #YourBIK, #YourBill, #YourAcc').on('change keyup input', function () {
    if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
    }
  });
});

/***/ }),

/***/ "../views/blocks/info/info.js":
/*!************************************!*\
  !*** ../views/blocks/info/info.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  $('.info__item-button').on('click', function () {
    var thisB = $(this);
    $('.info__item-button').not(this).removeClass('active').siblings('.info__item-hidden').slideUp();
    $(this).toggleClass('active').siblings('.info__item-hidden').slideToggle('0.5s', function () {
      //Можно сделать только для <768
      var scroll = $(thisB).offset().top;
      $('html, body').animate({
        scrollTop: scroll
      }, 250);
    });
  });
});

/***/ }),

/***/ "../views/blocks/payment/payment.js":
/*!******************************************!*\
  !*** ../views/blocks/payment/payment.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../../node_modules/swiper/swiper.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["Autoplay"]]);
  var payments = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.payment .swiper-container', {
    slidesPerView: 1,
    speed: 500,
    centeredSlides: true,
    loop: true,
    spaceBetween: 30,
    autoplay: {
      delay: 4000
    },
    navigation: {
      nextEl: '.payment .swiper-button-next',
      prevEl: '.payment .swiper-button-prev'
    },
    breakpoints: {
      // when window width is >= 540px
      540: {
        slidesPerView: 1,
        centeredSlides: true
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        centeredSlides: true
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 3,
        centeredSlides: false
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 3,
        centeredSlides: false
      }
    }
  });
});

/***/ }),

/***/ "../views/layouts/header/header.js":
/*!*****************************************!*\
  !*** ../views/layouts/header/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  /* Появление меню по кнопке */
  $('.button-burger').on('click', function () {
    var expanded = $(this).attr('aria-expanded') === 'true';
    $(this).attr('aria-expanded', !expanded);
    $(this).toggleClass('open');
    $('.header, .nav').toggleClass('open');
    $('html').toggleClass('header__active');
  });
});

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var focus_visible_dist_focus_visible_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! focus-visible/dist/focus-visible.min */ "../../node_modules/focus-visible/dist/focus-visible.min.js");
/* harmony import */ var focus_visible_dist_focus_visible_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(focus_visible_dist_focus_visible_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @layouts/header/header */ "../views/layouts/header/header.js");
/* harmony import */ var _blocks_payment_payment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blocks/payment/payment */ "../views/blocks/payment/payment.js");
/* harmony import */ var _blocks_info_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blocks/info/info */ "../views/blocks/info/info.js");
/* harmony import */ var _blocks_calc_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blocks/calc/calc */ "../views/blocks/calc/calc.js");
/* harmony import */ var _blocks_form_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @blocks/form/form */ "../views/blocks/form/form.js");
/* harmony import */ var svg4everybody_dist_svg4everybody_min__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! svg4everybody/dist/svg4everybody.min */ "../../node_modules/svg4everybody/dist/svg4everybody.min.js");
/* harmony import */ var svg4everybody_dist_svg4everybody_min__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(svg4everybody_dist_svg4everybody_min__WEBPACK_IMPORTED_MODULE_6__);
// import $ from 'jquery/dist/jquery.min';
// global.$ = $;
// import 'core-js/stable/array/for-each';
// import 'core-js/stable/array/includes';
// import 'core-js/stable/dom-collections/for-each';
// import 'core-js/stable';

/* полифил для :focus-visible */





 // import types from '@blocks/types/types';
// import eventsBlock from '@blocks/events-block/events-block';
// import advantages from '@blocks/advantages/advantages';
// import zones from '@blocks/zones/zones';
// import modal from '@layouts/modal/modal';
// import scrollUp from '@components/scroll-up/scroll-up';
// import header from '@layouts/header/header';
// import navbar from '@blocks/navbar/navbar';
// import clients from '@blocks/clients/clients';
// import advantages from '@blocks/advantages/advantages';
// import { calculate, liveMap } from '@blocks/calculate/calculate';
// import trust from '@blocks/trust/trust';
// import productSlider from '@blocks/product-slider/product-slider';
// import tableBtn from '@blocks/product-table/product-table';
// import productGoods from '@blocks/product-goods/product-goods';
// import regions from '@blocks/regions/regions';


$(function () {
  svg4everybody_dist_svg4everybody_min__WEBPACK_IMPORTED_MODULE_6___default()();
  $('svg').attr('focusable', 'false');
  Object(_layouts_header_header__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_blocks_payment_payment__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_blocks_info_info__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_blocks_calc_calc__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_blocks_form_form__WEBPACK_IMPORTED_MODULE_5__["default"])();
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map