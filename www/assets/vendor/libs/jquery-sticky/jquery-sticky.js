(function (e, a) {
    for (var i in a) e[i] = a[i];
}(window, /******/ (function (modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ 	// The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ 		// Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/ 		// Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/            i: moduleId,
            /******/            l: false,
            /******/            exports: {}
            /******/
        };
        /******/
        /******/ 		// Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ 		// Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ 		// Return the exports of the module
        /******/
        return module.exports;
        /******/
    }

    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ 	// expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ 	// define getter function for harmony exports
    /******/
    __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {enumerable: true, get: getter});
            /******/
        }
        /******/
    };
    /******/
    /******/ 	// define __esModule on exports
    /******/
    __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
            /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', {value: true});
        /******/
    };
    /******/
    /******/ 	// create a fake namespace object
    /******/ 	// mode & 1: value is a module id, require it
    /******/ 	// mode & 2: merge all properties of value into the ns
    /******/ 	// mode & 4: return value when already ns object
    /******/ 	// mode & 8|1: behave like require
    /******/
    __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/
        if (mode & 8) return value;
        /******/
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        /******/
        var ns = Object.create(null);
        /******/
        __webpack_require__.r(ns);
        /******/
        Object.defineProperty(ns, 'default', {enumerable: true, value: value});
        /******/
        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
            return value[key];
        }.bind(null, key));
        /******/
        return ns;
        /******/
    };
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
            /******/            function getDefault() {
                return module['default'];
            } :
            /******/            function getModuleExports() {
                return module;
            };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ 	// __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/
    /******/ 	// Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = "./libs/jquery-sticky/jquery-sticky.js");
    /******/
})
    /************************************************************************/
    /******/ ({

        /***/ "./libs/jquery-sticky/jquery-sticky.js":
        /*!*********************************************!*\
          !*** ./libs/jquery-sticky/jquery-sticky.js ***!
          \*********************************************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery_sticky_jquery_sticky__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery-sticky/jquery.sticky */ \"./node_modules/jquery-sticky/jquery.sticky.js\");\n/* harmony import */ var jquery_sticky_jquery_sticky__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_sticky_jquery_sticky__WEBPACK_IMPORTED_MODULE_0__);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWJzL2pxdWVyeS1zdGlja3kvanF1ZXJ5LXN0aWNreS5qcz84NTg2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL2xpYnMvanF1ZXJ5LXN0aWNreS9qcXVlcnktc3RpY2t5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdqcXVlcnktc3RpY2t5L2pxdWVyeS5zdGlja3knO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./libs/jquery-sticky/jquery-sticky.js\n");

            /***/
        }),

        /***/ "./node_modules/jquery-sticky/jquery.sticky.js":
        /*!*****************************************************!*\
          !*** ./node_modules/jquery-sticky/jquery.sticky.js ***!
          \*****************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {

            eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Sticky Plugin v1.0.4 for jQuery\n// =============\n// Author: Anthony Garand\n// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)\n// Improvements by Leonardo C. Daronco (daronco)\n// Created: 02/14/2011\n// Date: 07/20/2015\n// Website: http://stickyjs.com/\n// Description: Makes an element on the page stick on the screen as you scroll\n//              It will only set the 'top' and 'position' of your element, you\n//              might need to adjust the width in some cases.\n\n(function (factory) {\n    if (true) {\n        // AMD. Register as an anonymous module.\n        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ \"jquery\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n    } else {}\n}(function ($) {\n    var slice = Array.prototype.slice; // save ref to original slice()\n    var splice = Array.prototype.splice; // save ref to original slice()\n\n  var defaults = {\n      topSpacing: 0,\n      bottomSpacing: 0,\n      className: 'is-sticky',\n      wrapperClassName: 'sticky-wrapper',\n      center: false,\n      getWidthFrom: '',\n      widthFromWrapper: true, // works only when .getWidthFrom is empty\n      responsiveWidth: false,\n      zIndex: 'auto'\n    },\n    $window = $(window),\n    $document = $(document),\n    sticked = [],\n    windowHeight = $window.height(),\n    scroller = function() {\n      var scrollTop = $window.scrollTop(),\n        documentHeight = $document.height(),\n        dwh = documentHeight - windowHeight,\n        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;\n\n      for (var i = 0, l = sticked.length; i < l; i++) {\n        var s = sticked[i],\n          elementTop = s.stickyWrapper.offset().top,\n          etse = elementTop - s.topSpacing - extra;\n\n        //update height in case of dynamic content\n        s.stickyWrapper.css('height', s.stickyElement.outerHeight());\n\n        if (scrollTop <= etse) {\n          if (s.currentTop !== null) {\n            s.stickyElement\n              .css({\n                'width': '',\n                'position': '',\n                'top': '',\n                'z-index': ''\n              });\n            s.stickyElement.parent().removeClass(s.className);\n            s.stickyElement.trigger('sticky-end', [s]);\n            s.currentTop = null;\n          }\n        }\n        else {\n          var newTop = documentHeight - s.stickyElement.outerHeight()\n            - s.topSpacing - s.bottomSpacing - scrollTop - extra;\n          if (newTop < 0) {\n            newTop = newTop + s.topSpacing;\n          } else {\n            newTop = s.topSpacing;\n          }\n          if (s.currentTop !== newTop) {\n            var newWidth;\n            if (s.getWidthFrom) {\n                newWidth = $(s.getWidthFrom).width() || null;\n            } else if (s.widthFromWrapper) {\n                newWidth = s.stickyWrapper.width();\n            }\n            if (newWidth == null) {\n                newWidth = s.stickyElement.width();\n            }\n            s.stickyElement\n              .css('width', newWidth)\n              .css('position', 'fixed')\n              .css('top', newTop)\n              .css('z-index', s.zIndex);\n\n            s.stickyElement.parent().addClass(s.className);\n\n            if (s.currentTop === null) {\n              s.stickyElement.trigger('sticky-start', [s]);\n            } else {\n              // sticky is started but it have to be repositioned\n              s.stickyElement.trigger('sticky-update', [s]);\n            }\n\n            if (s.currentTop === s.topSpacing && s.currentTop > newTop || s.currentTop === null && newTop < s.topSpacing) {\n              // just reached bottom || just started to stick but bottom is already reached\n              s.stickyElement.trigger('sticky-bottom-reached', [s]);\n            } else if(s.currentTop !== null && newTop === s.topSpacing && s.currentTop < newTop) {\n              // sticky is started && sticked at topSpacing && overflowing from top just finished\n              s.stickyElement.trigger('sticky-bottom-unreached', [s]);\n            }\n\n            s.currentTop = newTop;\n          }\n\n          // Check if sticky has reached end of container and stop sticking\n          var stickyWrapperContainer = s.stickyWrapper.parent();\n          var unstick = (s.stickyElement.offset().top + s.stickyElement.outerHeight() >= stickyWrapperContainer.offset().top + stickyWrapperContainer.outerHeight()) && (s.stickyElement.offset().top <= s.topSpacing);\n\n          if( unstick ) {\n            s.stickyElement\n              .css('position', 'absolute')\n              .css('top', '')\n              .css('bottom', 0)\n              .css('z-index', '');\n          } else {\n            s.stickyElement\n              .css('position', 'fixed')\n              .css('top', newTop)\n              .css('bottom', '')\n              .css('z-index', s.zIndex);\n          }\n        }\n      }\n    },\n    resizer = function() {\n      windowHeight = $window.height();\n\n      for (var i = 0, l = sticked.length; i < l; i++) {\n        var s = sticked[i];\n        var newWidth = null;\n        if (s.getWidthFrom) {\n            if (s.responsiveWidth) {\n                newWidth = $(s.getWidthFrom).width();\n            }\n        } else if(s.widthFromWrapper) {\n            newWidth = s.stickyWrapper.width();\n        }\n        if (newWidth != null) {\n            s.stickyElement.css('width', newWidth);\n        }\n      }\n    },\n    methods = {\n      init: function(options) {\n        var o = $.extend({}, defaults, options);\n        return this.each(function() {\n          var stickyElement = $(this);\n\n          var stickyId = stickyElement.attr('id');\n          var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName;\n          var wrapper = $('<div></div>')\n            .attr('id', wrapperId)\n            .addClass(o.wrapperClassName);\n\n          stickyElement.wrapAll(wrapper);\n\n          var stickyWrapper = stickyElement.parent();\n\n          if (o.center) {\n            stickyWrapper.css({width:stickyElement.outerWidth(),marginLeft:\"auto\",marginRight:\"auto\"});\n          }\n\n          if (stickyElement.css(\"float\") === \"right\") {\n            stickyElement.css({\"float\":\"none\"}).parent().css({\"float\":\"right\"});\n          }\n\n          o.stickyElement = stickyElement;\n          o.stickyWrapper = stickyWrapper;\n          o.currentTop    = null;\n\n          sticked.push(o);\n\n          methods.setWrapperHeight(this);\n          methods.setupChangeListeners(this);\n        });\n      },\n\n      setWrapperHeight: function(stickyElement) {\n        var element = $(stickyElement);\n        var stickyWrapper = element.parent();\n        if (stickyWrapper) {\n          stickyWrapper.css('height', element.outerHeight());\n        }\n      },\n\n      setupChangeListeners: function(stickyElement) {\n        if (window.MutationObserver) {\n          var mutationObserver = new window.MutationObserver(function(mutations) {\n            if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {\n              methods.setWrapperHeight(stickyElement);\n            }\n          });\n          mutationObserver.observe(stickyElement, {subtree: true, childList: true});\n        } else {\n          stickyElement.addEventListener('DOMNodeInserted', function() {\n            methods.setWrapperHeight(stickyElement);\n          }, false);\n          stickyElement.addEventListener('DOMNodeRemoved', function() {\n            methods.setWrapperHeight(stickyElement);\n          }, false);\n        }\n      },\n      update: scroller,\n      unstick: function(options) {\n        return this.each(function() {\n          var that = this;\n          var unstickyElement = $(that);\n\n          var removeIdx = -1;\n          var i = sticked.length;\n          while (i-- > 0) {\n            if (sticked[i].stickyElement.get(0) === that) {\n                splice.call(sticked,i,1);\n                removeIdx = i;\n            }\n          }\n          if(removeIdx !== -1) {\n            unstickyElement.unwrap();\n            unstickyElement\n              .css({\n                'width': '',\n                'position': '',\n                'top': '',\n                'float': '',\n                'z-index': ''\n              })\n            ;\n          }\n        });\n      }\n    };\n\n  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):\n  if (window.addEventListener) {\n    window.addEventListener('scroll', scroller, false);\n    window.addEventListener('resize', resizer, false);\n  } else if (window.attachEvent) {\n    window.attachEvent('onscroll', scroller);\n    window.attachEvent('onresize', resizer);\n  }\n\n  $.fn.sticky = function(method) {\n    if (methods[method]) {\n      return methods[method].apply(this, slice.call(arguments, 1));\n    } else if (typeof method === 'object' || !method ) {\n      return methods.init.apply( this, arguments );\n    } else {\n      $.error('Method ' + method + ' does not exist on jQuery.sticky');\n    }\n  };\n\n  $.fn.unstick = function(method) {\n    if (methods[method]) {\n      return methods[method].apply(this, slice.call(arguments, 1));\n    } else if (typeof method === 'object' || !method ) {\n      return methods.unstick.apply( this, arguments );\n    } else {\n      $.error('Method ' + method + ' does not exist on jQuery.sticky');\n    }\n  };\n  $(function() {\n    setTimeout(scroller, 0);\n  });\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanF1ZXJ5LXN0aWNreS9qcXVlcnkuc3RpY2t5LmpzPzg0NzUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsSUFBMEM7QUFDbEQ7QUFDQSxRQUFRLGlDQUFPLENBQUMsMkNBQVEsQ0FBQyxvQ0FBRSxPQUFPO0FBQUE7QUFBQTtBQUFBLG9HQUFDO0FBQ25DLEtBQUssTUFBTSxFQU1OO0FBQ0wsQ0FBQztBQUNELHNDQUFzQztBQUN0Qyx3Q0FBd0M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5Q0FBeUMsT0FBTztBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLCtCQUErQixzRUFBc0U7QUFDckc7O0FBRUE7QUFDQSwrQkFBK0IsZUFBZSxnQkFBZ0IsZ0JBQWdCO0FBQzlFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsbURBQW1ELCtCQUErQjtBQUNsRixTQUFTO0FBQ1Q7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9qcXVlcnktc3RpY2t5L2pxdWVyeS5zdGlja3kuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTdGlja3kgUGx1Z2luIHYxLjAuNCBmb3IgalF1ZXJ5XG4vLyA9PT09PT09PT09PT09XG4vLyBBdXRob3I6IEFudGhvbnkgR2FyYW5kXG4vLyBJbXByb3ZlbWVudHMgYnkgR2VybWFuIE0uIEJyYXZvIChLcm9udXopIGFuZCBSdXVkIEthbXBodWlzIChydXVkaylcbi8vIEltcHJvdmVtZW50cyBieSBMZW9uYXJkbyBDLiBEYXJvbmNvIChkYXJvbmNvKVxuLy8gQ3JlYXRlZDogMDIvMTQvMjAxMVxuLy8gRGF0ZTogMDcvMjAvMjAxNVxuLy8gV2Vic2l0ZTogaHR0cDovL3N0aWNreWpzLmNvbS9cbi8vIERlc2NyaXB0aW9uOiBNYWtlcyBhbiBlbGVtZW50IG9uIHRoZSBwYWdlIHN0aWNrIG9uIHRoZSBzY3JlZW4gYXMgeW91IHNjcm9sbFxuLy8gICAgICAgICAgICAgIEl0IHdpbGwgb25seSBzZXQgdGhlICd0b3AnIGFuZCAncG9zaXRpb24nIG9mIHlvdXIgZWxlbWVudCwgeW91XG4vLyAgICAgICAgICAgICAgbWlnaHQgbmVlZCB0byBhZGp1c3QgdGhlIHdpZHRoIGluIHNvbWUgY2FzZXMuXG5cbihmdW5jdGlvbiAoZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgICAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICAvLyBOb2RlL0NvbW1vbkpTXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQnJvd3NlciBnbG9iYWxzXG4gICAgICAgIGZhY3RvcnkoalF1ZXJ5KTtcbiAgICB9XG59KGZ1bmN0aW9uICgkKSB7XG4gICAgdmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlOyAvLyBzYXZlIHJlZiB0byBvcmlnaW5hbCBzbGljZSgpXG4gICAgdmFyIHNwbGljZSA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2U7IC8vIHNhdmUgcmVmIHRvIG9yaWdpbmFsIHNsaWNlKClcblxuICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICB0b3BTcGFjaW5nOiAwLFxuICAgICAgYm90dG9tU3BhY2luZzogMCxcbiAgICAgIGNsYXNzTmFtZTogJ2lzLXN0aWNreScsXG4gICAgICB3cmFwcGVyQ2xhc3NOYW1lOiAnc3RpY2t5LXdyYXBwZXInLFxuICAgICAgY2VudGVyOiBmYWxzZSxcbiAgICAgIGdldFdpZHRoRnJvbTogJycsXG4gICAgICB3aWR0aEZyb21XcmFwcGVyOiB0cnVlLCAvLyB3b3JrcyBvbmx5IHdoZW4gLmdldFdpZHRoRnJvbSBpcyBlbXB0eVxuICAgICAgcmVzcG9uc2l2ZVdpZHRoOiBmYWxzZSxcbiAgICAgIHpJbmRleDogJ2F1dG8nXG4gICAgfSxcbiAgICAkd2luZG93ID0gJCh3aW5kb3cpLFxuICAgICRkb2N1bWVudCA9ICQoZG9jdW1lbnQpLFxuICAgIHN0aWNrZWQgPSBbXSxcbiAgICB3aW5kb3dIZWlnaHQgPSAkd2luZG93LmhlaWdodCgpLFxuICAgIHNjcm9sbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2Nyb2xsVG9wID0gJHdpbmRvdy5zY3JvbGxUb3AoKSxcbiAgICAgICAgZG9jdW1lbnRIZWlnaHQgPSAkZG9jdW1lbnQuaGVpZ2h0KCksXG4gICAgICAgIGR3aCA9IGRvY3VtZW50SGVpZ2h0IC0gd2luZG93SGVpZ2h0LFxuICAgICAgICBleHRyYSA9IChzY3JvbGxUb3AgPiBkd2gpID8gZHdoIC0gc2Nyb2xsVG9wIDogMDtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBzdGlja2VkLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIgcyA9IHN0aWNrZWRbaV0sXG4gICAgICAgICAgZWxlbWVudFRvcCA9IHMuc3RpY2t5V3JhcHBlci5vZmZzZXQoKS50b3AsXG4gICAgICAgICAgZXRzZSA9IGVsZW1lbnRUb3AgLSBzLnRvcFNwYWNpbmcgLSBleHRyYTtcblxuICAgICAgICAvL3VwZGF0ZSBoZWlnaHQgaW4gY2FzZSBvZiBkeW5hbWljIGNvbnRlbnRcbiAgICAgICAgcy5zdGlja3lXcmFwcGVyLmNzcygnaGVpZ2h0Jywgcy5zdGlja3lFbGVtZW50Lm91dGVySGVpZ2h0KCkpO1xuXG4gICAgICAgIGlmIChzY3JvbGxUb3AgPD0gZXRzZSkge1xuICAgICAgICAgIGlmIChzLmN1cnJlbnRUb3AgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHMuc3RpY2t5RWxlbWVudFxuICAgICAgICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgICAgICAnd2lkdGgnOiAnJyxcbiAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAnJyxcbiAgICAgICAgICAgICAgICAndG9wJzogJycsXG4gICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnJ1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHMuc3RpY2t5RWxlbWVudC5wYXJlbnQoKS5yZW1vdmVDbGFzcyhzLmNsYXNzTmFtZSk7XG4gICAgICAgICAgICBzLnN0aWNreUVsZW1lbnQudHJpZ2dlcignc3RpY2t5LWVuZCcsIFtzXSk7XG4gICAgICAgICAgICBzLmN1cnJlbnRUb3AgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB2YXIgbmV3VG9wID0gZG9jdW1lbnRIZWlnaHQgLSBzLnN0aWNreUVsZW1lbnQub3V0ZXJIZWlnaHQoKVxuICAgICAgICAgICAgLSBzLnRvcFNwYWNpbmcgLSBzLmJvdHRvbVNwYWNpbmcgLSBzY3JvbGxUb3AgLSBleHRyYTtcbiAgICAgICAgICBpZiAobmV3VG9wIDwgMCkge1xuICAgICAgICAgICAgbmV3VG9wID0gbmV3VG9wICsgcy50b3BTcGFjaW5nO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdUb3AgPSBzLnRvcFNwYWNpbmc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzLmN1cnJlbnRUb3AgIT09IG5ld1RvcCkge1xuICAgICAgICAgICAgdmFyIG5ld1dpZHRoO1xuICAgICAgICAgICAgaWYgKHMuZ2V0V2lkdGhGcm9tKSB7XG4gICAgICAgICAgICAgICAgbmV3V2lkdGggPSAkKHMuZ2V0V2lkdGhGcm9tKS53aWR0aCgpIHx8IG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHMud2lkdGhGcm9tV3JhcHBlcikge1xuICAgICAgICAgICAgICAgIG5ld1dpZHRoID0gcy5zdGlja3lXcmFwcGVyLndpZHRoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmV3V2lkdGggPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG5ld1dpZHRoID0gcy5zdGlja3lFbGVtZW50LndpZHRoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzLnN0aWNreUVsZW1lbnRcbiAgICAgICAgICAgICAgLmNzcygnd2lkdGgnLCBuZXdXaWR0aClcbiAgICAgICAgICAgICAgLmNzcygncG9zaXRpb24nLCAnZml4ZWQnKVxuICAgICAgICAgICAgICAuY3NzKCd0b3AnLCBuZXdUb3ApXG4gICAgICAgICAgICAgIC5jc3MoJ3otaW5kZXgnLCBzLnpJbmRleCk7XG5cbiAgICAgICAgICAgIHMuc3RpY2t5RWxlbWVudC5wYXJlbnQoKS5hZGRDbGFzcyhzLmNsYXNzTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChzLmN1cnJlbnRUb3AgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcy5zdGlja3lFbGVtZW50LnRyaWdnZXIoJ3N0aWNreS1zdGFydCcsIFtzXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBzdGlja3kgaXMgc3RhcnRlZCBidXQgaXQgaGF2ZSB0byBiZSByZXBvc2l0aW9uZWRcbiAgICAgICAgICAgICAgcy5zdGlja3lFbGVtZW50LnRyaWdnZXIoJ3N0aWNreS11cGRhdGUnLCBbc10pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocy5jdXJyZW50VG9wID09PSBzLnRvcFNwYWNpbmcgJiYgcy5jdXJyZW50VG9wID4gbmV3VG9wIHx8IHMuY3VycmVudFRvcCA9PT0gbnVsbCAmJiBuZXdUb3AgPCBzLnRvcFNwYWNpbmcpIHtcbiAgICAgICAgICAgICAgLy8ganVzdCByZWFjaGVkIGJvdHRvbSB8fCBqdXN0IHN0YXJ0ZWQgdG8gc3RpY2sgYnV0IGJvdHRvbSBpcyBhbHJlYWR5IHJlYWNoZWRcbiAgICAgICAgICAgICAgcy5zdGlja3lFbGVtZW50LnRyaWdnZXIoJ3N0aWNreS1ib3R0b20tcmVhY2hlZCcsIFtzXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYocy5jdXJyZW50VG9wICE9PSBudWxsICYmIG5ld1RvcCA9PT0gcy50b3BTcGFjaW5nICYmIHMuY3VycmVudFRvcCA8IG5ld1RvcCkge1xuICAgICAgICAgICAgICAvLyBzdGlja3kgaXMgc3RhcnRlZCAmJiBzdGlja2VkIGF0IHRvcFNwYWNpbmcgJiYgb3ZlcmZsb3dpbmcgZnJvbSB0b3AganVzdCBmaW5pc2hlZFxuICAgICAgICAgICAgICBzLnN0aWNreUVsZW1lbnQudHJpZ2dlcignc3RpY2t5LWJvdHRvbS11bnJlYWNoZWQnLCBbc10pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzLmN1cnJlbnRUb3AgPSBuZXdUb3A7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ2hlY2sgaWYgc3RpY2t5IGhhcyByZWFjaGVkIGVuZCBvZiBjb250YWluZXIgYW5kIHN0b3Agc3RpY2tpbmdcbiAgICAgICAgICB2YXIgc3RpY2t5V3JhcHBlckNvbnRhaW5lciA9IHMuc3RpY2t5V3JhcHBlci5wYXJlbnQoKTtcbiAgICAgICAgICB2YXIgdW5zdGljayA9IChzLnN0aWNreUVsZW1lbnQub2Zmc2V0KCkudG9wICsgcy5zdGlja3lFbGVtZW50Lm91dGVySGVpZ2h0KCkgPj0gc3RpY2t5V3JhcHBlckNvbnRhaW5lci5vZmZzZXQoKS50b3AgKyBzdGlja3lXcmFwcGVyQ29udGFpbmVyLm91dGVySGVpZ2h0KCkpICYmIChzLnN0aWNreUVsZW1lbnQub2Zmc2V0KCkudG9wIDw9IHMudG9wU3BhY2luZyk7XG5cbiAgICAgICAgICBpZiggdW5zdGljayApIHtcbiAgICAgICAgICAgIHMuc3RpY2t5RWxlbWVudFxuICAgICAgICAgICAgICAuY3NzKCdwb3NpdGlvbicsICdhYnNvbHV0ZScpXG4gICAgICAgICAgICAgIC5jc3MoJ3RvcCcsICcnKVxuICAgICAgICAgICAgICAuY3NzKCdib3R0b20nLCAwKVxuICAgICAgICAgICAgICAuY3NzKCd6LWluZGV4JywgJycpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzLnN0aWNreUVsZW1lbnRcbiAgICAgICAgICAgICAgLmNzcygncG9zaXRpb24nLCAnZml4ZWQnKVxuICAgICAgICAgICAgICAuY3NzKCd0b3AnLCBuZXdUb3ApXG4gICAgICAgICAgICAgIC5jc3MoJ2JvdHRvbScsICcnKVxuICAgICAgICAgICAgICAuY3NzKCd6LWluZGV4Jywgcy56SW5kZXgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgcmVzaXplciA9IGZ1bmN0aW9uKCkge1xuICAgICAgd2luZG93SGVpZ2h0ID0gJHdpbmRvdy5oZWlnaHQoKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBzdGlja2VkLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIgcyA9IHN0aWNrZWRbaV07XG4gICAgICAgIHZhciBuZXdXaWR0aCA9IG51bGw7XG4gICAgICAgIGlmIChzLmdldFdpZHRoRnJvbSkge1xuICAgICAgICAgICAgaWYgKHMucmVzcG9uc2l2ZVdpZHRoKSB7XG4gICAgICAgICAgICAgICAgbmV3V2lkdGggPSAkKHMuZ2V0V2lkdGhGcm9tKS53aWR0aCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYocy53aWR0aEZyb21XcmFwcGVyKSB7XG4gICAgICAgICAgICBuZXdXaWR0aCA9IHMuc3RpY2t5V3JhcHBlci53aWR0aCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdXaWR0aCAhPSBudWxsKSB7XG4gICAgICAgICAgICBzLnN0aWNreUVsZW1lbnQuY3NzKCd3aWR0aCcsIG5ld1dpZHRoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGluaXQ6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIG8gPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBzdGlja3lFbGVtZW50ID0gJCh0aGlzKTtcblxuICAgICAgICAgIHZhciBzdGlja3lJZCA9IHN0aWNreUVsZW1lbnQuYXR0cignaWQnKTtcbiAgICAgICAgICB2YXIgd3JhcHBlcklkID0gc3RpY2t5SWQgPyBzdGlja3lJZCArICctJyArIGRlZmF1bHRzLndyYXBwZXJDbGFzc05hbWUgOiBkZWZhdWx0cy53cmFwcGVyQ2xhc3NOYW1lO1xuICAgICAgICAgIHZhciB3cmFwcGVyID0gJCgnPGRpdj48L2Rpdj4nKVxuICAgICAgICAgICAgLmF0dHIoJ2lkJywgd3JhcHBlcklkKVxuICAgICAgICAgICAgLmFkZENsYXNzKG8ud3JhcHBlckNsYXNzTmFtZSk7XG5cbiAgICAgICAgICBzdGlja3lFbGVtZW50LndyYXBBbGwod3JhcHBlcik7XG5cbiAgICAgICAgICB2YXIgc3RpY2t5V3JhcHBlciA9IHN0aWNreUVsZW1lbnQucGFyZW50KCk7XG5cbiAgICAgICAgICBpZiAoby5jZW50ZXIpIHtcbiAgICAgICAgICAgIHN0aWNreVdyYXBwZXIuY3NzKHt3aWR0aDpzdGlja3lFbGVtZW50Lm91dGVyV2lkdGgoKSxtYXJnaW5MZWZ0OlwiYXV0b1wiLG1hcmdpblJpZ2h0OlwiYXV0b1wifSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHN0aWNreUVsZW1lbnQuY3NzKFwiZmxvYXRcIikgPT09IFwicmlnaHRcIikge1xuICAgICAgICAgICAgc3RpY2t5RWxlbWVudC5jc3Moe1wiZmxvYXRcIjpcIm5vbmVcIn0pLnBhcmVudCgpLmNzcyh7XCJmbG9hdFwiOlwicmlnaHRcIn0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG8uc3RpY2t5RWxlbWVudCA9IHN0aWNreUVsZW1lbnQ7XG4gICAgICAgICAgby5zdGlja3lXcmFwcGVyID0gc3RpY2t5V3JhcHBlcjtcbiAgICAgICAgICBvLmN1cnJlbnRUb3AgICAgPSBudWxsO1xuXG4gICAgICAgICAgc3RpY2tlZC5wdXNoKG8pO1xuXG4gICAgICAgICAgbWV0aG9kcy5zZXRXcmFwcGVySGVpZ2h0KHRoaXMpO1xuICAgICAgICAgIG1ldGhvZHMuc2V0dXBDaGFuZ2VMaXN0ZW5lcnModGhpcyk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgc2V0V3JhcHBlckhlaWdodDogZnVuY3Rpb24oc3RpY2t5RWxlbWVudCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9ICQoc3RpY2t5RWxlbWVudCk7XG4gICAgICAgIHZhciBzdGlja3lXcmFwcGVyID0gZWxlbWVudC5wYXJlbnQoKTtcbiAgICAgICAgaWYgKHN0aWNreVdyYXBwZXIpIHtcbiAgICAgICAgICBzdGlja3lXcmFwcGVyLmNzcygnaGVpZ2h0JywgZWxlbWVudC5vdXRlckhlaWdodCgpKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgc2V0dXBDaGFuZ2VMaXN0ZW5lcnM6IGZ1bmN0aW9uKHN0aWNreUVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgdmFyIG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24obXV0YXRpb25zKSB7XG4gICAgICAgICAgICBpZiAobXV0YXRpb25zWzBdLmFkZGVkTm9kZXMubGVuZ3RoIHx8IG11dGF0aW9uc1swXS5yZW1vdmVkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIG1ldGhvZHMuc2V0V3JhcHBlckhlaWdodChzdGlja3lFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoc3RpY2t5RWxlbWVudCwge3N1YnRyZWU6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZX0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0aWNreUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NTm9kZUluc2VydGVkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBtZXRob2RzLnNldFdyYXBwZXJIZWlnaHQoc3RpY2t5RWxlbWVudCk7XG4gICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICAgIHN0aWNreUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NTm9kZVJlbW92ZWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG1ldGhvZHMuc2V0V3JhcHBlckhlaWdodChzdGlja3lFbGVtZW50KTtcbiAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB1cGRhdGU6IHNjcm9sbGVyLFxuICAgICAgdW5zdGljazogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgICB2YXIgdW5zdGlja3lFbGVtZW50ID0gJCh0aGF0KTtcblxuICAgICAgICAgIHZhciByZW1vdmVJZHggPSAtMTtcbiAgICAgICAgICB2YXIgaSA9IHN0aWNrZWQubGVuZ3RoO1xuICAgICAgICAgIHdoaWxlIChpLS0gPiAwKSB7XG4gICAgICAgICAgICBpZiAoc3RpY2tlZFtpXS5zdGlja3lFbGVtZW50LmdldCgwKSA9PT0gdGhhdCkge1xuICAgICAgICAgICAgICAgIHNwbGljZS5jYWxsKHN0aWNrZWQsaSwxKTtcbiAgICAgICAgICAgICAgICByZW1vdmVJZHggPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZW1vdmVJZHggIT09IC0xKSB7XG4gICAgICAgICAgICB1bnN0aWNreUVsZW1lbnQudW53cmFwKCk7XG4gICAgICAgICAgICB1bnN0aWNreUVsZW1lbnRcbiAgICAgICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICAgICAgJ3dpZHRoJzogJycsXG4gICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJycsXG4gICAgICAgICAgICAgICAgJ3RvcCc6ICcnLFxuICAgICAgICAgICAgICAgICdmbG9hdCc6ICcnLFxuICAgICAgICAgICAgICAgICd6LWluZGV4JzogJydcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgLy8gc2hvdWxkIGJlIG1vcmUgZWZmaWNpZW50IHRoYW4gdXNpbmcgJHdpbmRvdy5zY3JvbGwoc2Nyb2xsZXIpIGFuZCAkd2luZG93LnJlc2l6ZShyZXNpemVyKTpcbiAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbGVyLCBmYWxzZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZXIsIGZhbHNlKTtcbiAgfSBlbHNlIGlmICh3aW5kb3cuYXR0YWNoRXZlbnQpIHtcbiAgICB3aW5kb3cuYXR0YWNoRXZlbnQoJ29uc2Nyb2xsJywgc2Nyb2xsZXIpO1xuICAgIHdpbmRvdy5hdHRhY2hFdmVudCgnb25yZXNpemUnLCByZXNpemVyKTtcbiAgfVxuXG4gICQuZm4uc3RpY2t5ID0gZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgaWYgKG1ldGhvZHNbbWV0aG9kXSkge1xuICAgICAgcmV0dXJuIG1ldGhvZHNbbWV0aG9kXS5hcHBseSh0aGlzLCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1ldGhvZCA9PT0gJ29iamVjdCcgfHwgIW1ldGhvZCApIHtcbiAgICAgIHJldHVybiBtZXRob2RzLmluaXQuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICAgIH0gZWxzZSB7XG4gICAgICAkLmVycm9yKCdNZXRob2QgJyArIG1ldGhvZCArICcgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LnN0aWNreScpO1xuICAgIH1cbiAgfTtcblxuICAkLmZuLnVuc3RpY2sgPSBmdW5jdGlvbihtZXRob2QpIHtcbiAgICBpZiAobWV0aG9kc1ttZXRob2RdKSB7XG4gICAgICByZXR1cm4gbWV0aG9kc1ttZXRob2RdLmFwcGx5KHRoaXMsIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbWV0aG9kID09PSAnb2JqZWN0JyB8fCAhbWV0aG9kICkge1xuICAgICAgcmV0dXJuIG1ldGhvZHMudW5zdGljay5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQuZXJyb3IoJ01ldGhvZCAnICsgbWV0aG9kICsgJyBkb2VzIG5vdCBleGlzdCBvbiBqUXVlcnkuc3RpY2t5Jyk7XG4gICAgfVxuICB9O1xuICAkKGZ1bmN0aW9uKCkge1xuICAgIHNldFRpbWVvdXQoc2Nyb2xsZXIsIDApO1xuICB9KTtcbn0pKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/jquery-sticky/jquery.sticky.js\n");

            /***/
        }),

        /***/ "jquery":
        /*!*************************!*\
          !*** external "jQuery" ***!
          \*************************/
        /*! no static exports found */
        /***/ (function (module, exports) {

            eval("(function() { module.exports = window[\"jQuery\"]; }());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIj9jZDBjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQWEsbUNBQW1DLEVBQUUiLCJmaWxlIjoianF1ZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcImpRdWVyeVwiXTsgfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///jquery\n");

            /***/
        })

        /******/
    })));