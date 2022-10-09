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
    return __webpack_require__(__webpack_require__.s = "./js/mega-dropdown.js");
    /******/
})
    /************************************************************************/
    /******/ ({

        /***/ "./js/mega-dropdown.js":
        /*!*****************************!*\
          !*** ./js/mega-dropdown.js ***!
          \*****************************/
        /*! exports provided: MegaDropdown */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MegaDropdown\", function() { return MegaDropdown; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar TIMEOUT = 150;\n\nvar MegaDropdown = /*#__PURE__*/function () {\n  function MegaDropdown(element) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    _classCallCheck(this, MegaDropdown);\n\n    this._onHover = options.trigger === 'hover' || element.getAttribute('data-trigger') === 'hover';\n    this._container = MegaDropdown._findParent(element, 'mega-dropdown');\n    if (!this._container) return;\n    this._menu = this._container.querySelector('.dropdown-toggle ~ .dropdown-menu');\n    if (!this._menu) return;\n    element.setAttribute('aria-expanded', 'false');\n    this._el = element;\n\n    this._bindEvents();\n  }\n\n  _createClass(MegaDropdown, [{\n    key: \"open\",\n    value: function open() {\n      if (this._timeout) {\n        clearTimeout(this._timeout);\n        this._timeout = null;\n      }\n\n      if (this._focusTimeout) {\n        clearTimeout(this._focusTimeout);\n        this._focusTimeout = null;\n      }\n\n      if (this._el.getAttribute('aria-expanded') !== 'true') {\n        this._triggerEvent('show');\n\n        this._container.classList.add('show');\n\n        this._menu.classList.add('show');\n\n        this._el.setAttribute('aria-expanded', 'true');\n\n        this._el.focus();\n\n        this._triggerEvent('shown');\n      }\n    }\n  }, {\n    key: \"close\",\n    value: function close(force) {\n      var _this = this;\n\n      if (this._timeout) {\n        clearTimeout(this._timeout);\n        this._timeout = null;\n      }\n\n      if (this._focusTimeout) {\n        clearTimeout(this._focusTimeout);\n        this._focusTimeout = null;\n      }\n\n      if (this._onHover && !force) {\n        this._timeout = setTimeout(function () {\n          if (_this._timeout) {\n            clearTimeout(_this._timeout);\n            _this._timeout = null;\n          }\n\n          _this._close();\n        }, TIMEOUT);\n      } else {\n        this._close();\n      }\n    }\n  }, {\n    key: \"toggle\",\n    value: function toggle() {\n      // eslint-disable-next-line no-unused-expressions\n      this._el.getAttribute('aria-expanded') === 'true' ? this.close(true) : this.open();\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      this._unbindEvents();\n\n      this._el = null;\n\n      if (this._timeout) {\n        clearTimeout(this._timeout);\n        this._timeout = null;\n      }\n\n      if (this._focusTimeout) {\n        clearTimeout(this._focusTimeout);\n        this._focusTimeout = null;\n      }\n    }\n  }, {\n    key: \"_close\",\n    value: function _close() {\n      if (this._el.getAttribute('aria-expanded') === 'true') {\n        this._triggerEvent('hide');\n\n        this._container.classList.remove('show');\n\n        this._menu.classList.remove('show');\n\n        this._el.setAttribute('aria-expanded', 'false');\n\n        this._triggerEvent('hidden');\n      }\n    }\n  }, {\n    key: \"_bindEvents\",\n    value: function _bindEvents() {\n      var _this2 = this;\n\n      this._elClickEvnt = function (e) {\n        e.preventDefault();\n\n        _this2.toggle();\n      };\n\n      this._el.addEventListener('click', this._elClickEvnt);\n\n      this._bodyClickEvnt = function (e) {\n        if (!_this2._container.contains(e.target) && _this2._container.classList.contains('show')) {\n          _this2.close(true);\n        }\n      };\n\n      document.body.addEventListener('click', this._bodyClickEvnt, true);\n\n      this._menuClickEvnt = function (e) {\n        if (e.target.classList.contains('mega-dropdown-link')) {\n          _this2.close(true);\n        }\n      };\n\n      this._menu.addEventListener('click', this._menuClickEvnt, true);\n\n      this._focusoutEvnt = function () {\n        if (_this2._focusTimeout) {\n          clearTimeout(_this2._focusTimeout);\n          _this2._focusTimeout = null;\n        }\n\n        if (_this2._el.getAttribute('aria-expanded') !== 'true') return;\n        _this2._focusTimeout = setTimeout(function () {\n          if (document.activeElement.tagName.toUpperCase() !== 'BODY' && MegaDropdown._findParent(document.activeElement, 'mega-dropdown') !== _this2._container) {\n            _this2.close(true);\n          }\n        }, 100);\n      };\n\n      this._container.addEventListener('focusout', this._focusoutEvnt, true);\n\n      if (this._onHover) {\n        this._enterEvnt = function () {\n          if (window.getComputedStyle(_this2._menu, null).getPropertyValue('position') === 'static') return;\n\n          _this2.open();\n        };\n\n        this._leaveEvnt = function () {\n          if (window.getComputedStyle(_this2._menu, null).getPropertyValue('position') === 'static') return;\n\n          _this2.close();\n        };\n\n        this._el.addEventListener('mouseenter', this._enterEvnt);\n\n        this._menu.addEventListener('mouseenter', this._enterEvnt);\n\n        this._el.addEventListener('mouseleave', this._leaveEvnt);\n\n        this._menu.addEventListener('mouseleave', this._leaveEvnt);\n      }\n    }\n  }, {\n    key: \"_unbindEvents\",\n    value: function _unbindEvents() {\n      if (this._elClickEvnt) {\n        this._el.removeEventListener('click', this._elClickEvnt);\n\n        this._elClickEvnt = null;\n      }\n\n      if (this._bodyClickEvnt) {\n        document.body.removeEventListener('click', this._bodyClickEvnt, true);\n        this._bodyClickEvnt = null;\n      }\n\n      if (this._menuClickEvnt) {\n        this._menu.removeEventListener('click', this._menuClickEvnt, true);\n\n        this._menuClickEvnt = null;\n      }\n\n      if (this._focusoutEvnt) {\n        this._container.removeEventListener('focusout', this._focusoutEvnt, true);\n\n        this._focusoutEvnt = null;\n      }\n\n      if (this._enterEvnt) {\n        this._el.removeEventListener('mouseenter', this._enterEvnt);\n\n        this._menu.removeEventListener('mouseenter', this._enterEvnt);\n\n        this._enterEvnt = null;\n      }\n\n      if (this._leaveEvnt) {\n        this._el.removeEventListener('mouseleave', this._leaveEvnt);\n\n        this._menu.removeEventListener('mouseleave', this._leaveEvnt);\n\n        this._leaveEvnt = null;\n      }\n    }\n  }, {\n    key: \"_triggerEvent\",\n    value: function _triggerEvent(event) {\n      if (document.createEvent) {\n        var customEvent;\n\n        if (typeof Event === 'function') {\n          customEvent = new Event(event);\n        } else {\n          customEvent = document.createEvent('Event');\n          customEvent.initEvent(event, false, true);\n        }\n\n        this._container.dispatchEvent(customEvent);\n      } else {\n        this._container.fireEvent(\"on\".concat(event), document.createEventObject());\n      }\n    }\n  }], [{\n    key: \"_findParent\",\n    value: function _findParent(el, cls) {\n      if (el.tagName.toUpperCase() === 'BODY') return null;\n      el = el.parentNode;\n\n      while (el.tagName.toUpperCase() !== 'BODY' && !el.classList.contains(cls)) {\n        el = el.parentNode;\n      }\n\n      return el.tagName.toUpperCase() !== 'BODY' ? el : null;\n    }\n  }]);\n\n  return MegaDropdown;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9tZWdhLWRyb3Bkb3duLmpzPzM5OTgiXSwibmFtZXMiOlsiVElNRU9VVCIsIk1lZ2FEcm9wZG93biIsImVsZW1lbnQiLCJvcHRpb25zIiwiX29uSG92ZXIiLCJ0cmlnZ2VyIiwiZ2V0QXR0cmlidXRlIiwiX2NvbnRhaW5lciIsIl9maW5kUGFyZW50IiwiX21lbnUiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiX2VsIiwiX2JpbmRFdmVudHMiLCJfdGltZW91dCIsImNsZWFyVGltZW91dCIsIl9mb2N1c1RpbWVvdXQiLCJfdHJpZ2dlckV2ZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZm9jdXMiLCJmb3JjZSIsInNldFRpbWVvdXQiLCJfY2xvc2UiLCJjbG9zZSIsIm9wZW4iLCJfdW5iaW5kRXZlbnRzIiwicmVtb3ZlIiwiX2VsQ2xpY2tFdm50IiwiZSIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9ib2R5Q2xpY2tFdm50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJkb2N1bWVudCIsImJvZHkiLCJfbWVudUNsaWNrRXZudCIsIl9mb2N1c291dEV2bnQiLCJhY3RpdmVFbGVtZW50IiwidGFnTmFtZSIsInRvVXBwZXJDYXNlIiwiX2VudGVyRXZudCIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiX2xlYXZlRXZudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNyZWF0ZUV2ZW50IiwiY3VzdG9tRXZlbnQiLCJFdmVudCIsImluaXRFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJmaXJlRXZlbnQiLCJjcmVhdGVFdmVudE9iamVjdCIsImVsIiwiY2xzIiwicGFyZW50Tm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxJQUFNQSxPQUFPLEdBQUcsR0FBaEI7O0lBRU1DLFk7QUFDSix3QkFBWUMsT0FBWixFQUFtQztBQUFBLFFBQWRD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QUNEO0FBQ0Y7OztXQXhCRCxxQkFBbUJDLEVBQW5CLEVBQXVCQyxHQUF2QixFQUE0QjtBQUMxQixVQUFJRCxFQUFFLENBQUNoQixPQUFILENBQVdDLFdBQVgsT0FBNkIsTUFBakMsRUFBeUMsT0FBTyxJQUFQO0FBQ3pDZSxRQUFFLEdBQUdBLEVBQUUsQ0FBQ0UsVUFBUjs7QUFDQSxhQUFPRixFQUFFLENBQUNoQixPQUFILENBQVdDLFdBQVgsT0FBNkIsTUFBN0IsSUFBdUMsQ0FBQ2UsRUFBRSxDQUFDdkMsU0FBSCxDQUFhZ0IsUUFBYixDQUFzQndCLEdBQXRCLENBQS9DLEVBQTJFO0FBQ3pFRCxVQUFFLEdBQUdBLEVBQUUsQ0FBQ0UsVUFBUjtBQUNEOztBQUNELGFBQU9GLEVBQUUsQ0FBQ2hCLE9BQUgsQ0FBV0MsV0FBWCxPQUE2QixNQUE3QixHQUFzQ2UsRUFBdEMsR0FBMkMsSUFBbEQ7QUFDRCIsImZpbGUiOiIuL2pzL21lZ2EtZHJvcGRvd24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUSU1FT1VUID0gMTUwXHJcblxyXG5jbGFzcyBNZWdhRHJvcGRvd24ge1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgdGhpcy5fb25Ib3ZlciA9IG9wdGlvbnMudHJpZ2dlciA9PT0gJ2hvdmVyJyB8fCBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10cmlnZ2VyJykgPT09ICdob3ZlcidcclxuXHJcbiAgICB0aGlzLl9jb250YWluZXIgPSBNZWdhRHJvcGRvd24uX2ZpbmRQYXJlbnQoZWxlbWVudCwgJ21lZ2EtZHJvcGRvd24nKVxyXG4gICAgaWYgKCF0aGlzLl9jb250YWluZXIpIHJldHVyblxyXG5cclxuICAgIHRoaXMuX21lbnUgPSB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLXRvZ2dsZSB+IC5kcm9wZG93bi1tZW51JylcclxuICAgIGlmICghdGhpcy5fbWVudSkgcmV0dXJuXHJcblxyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKVxyXG5cclxuICAgIHRoaXMuX2VsID0gZWxlbWVudFxyXG4gICAgdGhpcy5fYmluZEV2ZW50cygpXHJcbiAgfVxyXG5cclxuICBvcGVuKCkge1xyXG4gICAgaWYgKHRoaXMuX3RpbWVvdXQpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpXHJcbiAgICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fZm9jdXNUaW1lb3V0KSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9mb2N1c1RpbWVvdXQpXHJcbiAgICAgIHRoaXMuX2ZvY3VzVGltZW91dCA9IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fZWwuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgIT09ICd0cnVlJykge1xyXG4gICAgICB0aGlzLl90cmlnZ2VyRXZlbnQoJ3Nob3cnKVxyXG4gICAgICB0aGlzLl9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hvdycpXHJcbiAgICAgIHRoaXMuX21lbnUuY2xhc3NMaXN0LmFkZCgnc2hvdycpXHJcbiAgICAgIHRoaXMuX2VsLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJylcclxuICAgICAgdGhpcy5fZWwuZm9jdXMoKVxyXG4gICAgICB0aGlzLl90cmlnZ2VyRXZlbnQoJ3Nob3duJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlKGZvcmNlKSB7XHJcbiAgICBpZiAodGhpcy5fdGltZW91dCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcclxuICAgICAgdGhpcy5fdGltZW91dCA9IG51bGxcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9mb2N1c1RpbWVvdXQpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2ZvY3VzVGltZW91dClcclxuICAgICAgdGhpcy5fZm9jdXNUaW1lb3V0ID0gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9vbkhvdmVyICYmICFmb3JjZSkge1xyXG4gICAgICB0aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3RpbWVvdXQpIHtcclxuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KVxyXG4gICAgICAgICAgdGhpcy5fdGltZW91dCA9IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY2xvc2UoKVxyXG4gICAgICB9LCBUSU1FT1VUKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fY2xvc2UoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlKCkge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xyXG4gICAgdGhpcy5fZWwuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT09ICd0cnVlJyA/IHRoaXMuY2xvc2UodHJ1ZSkgOiB0aGlzLm9wZW4oKVxyXG4gIH1cclxuXHJcbiAgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuX3VuYmluZEV2ZW50cygpXHJcbiAgICB0aGlzLl9lbCA9IG51bGxcclxuXHJcbiAgICBpZiAodGhpcy5fdGltZW91dCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcclxuICAgICAgdGhpcy5fdGltZW91dCA9IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fZm9jdXNUaW1lb3V0KSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9mb2N1c1RpbWVvdXQpXHJcbiAgICAgIHRoaXMuX2ZvY3VzVGltZW91dCA9IG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9jbG9zZSgpIHtcclxuICAgIGlmICh0aGlzLl9lbC5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgIHRoaXMuX3RyaWdnZXJFdmVudCgnaGlkZScpXHJcbiAgICAgIHRoaXMuX2NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JylcclxuICAgICAgdGhpcy5fbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JylcclxuICAgICAgdGhpcy5fZWwuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcclxuICAgICAgdGhpcy5fdHJpZ2dlckV2ZW50KCdoaWRkZW4nKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2JpbmRFdmVudHMoKSB7XHJcbiAgICB0aGlzLl9lbENsaWNrRXZudCA9IGUgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgdGhpcy50b2dnbGUoKVxyXG4gICAgfVxyXG4gICAgdGhpcy5fZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9lbENsaWNrRXZudClcclxuXHJcbiAgICB0aGlzLl9ib2R5Q2xpY2tFdm50ID0gZSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5fY29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiB0aGlzLl9jb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcclxuICAgICAgICB0aGlzLmNsb3NlKHRydWUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9ib2R5Q2xpY2tFdm50LCB0cnVlKVxyXG5cclxuICAgIHRoaXMuX21lbnVDbGlja0V2bnQgPSBlID0+IHtcclxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbWVnYS1kcm9wZG93bi1saW5rJykpIHtcclxuICAgICAgICB0aGlzLmNsb3NlKHRydWUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuX21lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9tZW51Q2xpY2tFdm50LCB0cnVlKVxyXG5cclxuICAgIHRoaXMuX2ZvY3Vzb3V0RXZudCA9ICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuX2ZvY3VzVGltZW91dCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9mb2N1c1RpbWVvdXQpXHJcbiAgICAgICAgdGhpcy5fZm9jdXNUaW1lb3V0ID0gbnVsbFxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5fZWwuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgIT09ICd0cnVlJykgcmV0dXJuXHJcblxyXG4gICAgICB0aGlzLl9mb2N1c1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LnRhZ05hbWUudG9VcHBlckNhc2UoKSAhPT0gJ0JPRFknICYmXHJcbiAgICAgICAgICBNZWdhRHJvcGRvd24uX2ZpbmRQYXJlbnQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCwgJ21lZ2EtZHJvcGRvd24nKSAhPT0gdGhpcy5fY29udGFpbmVyXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLmNsb3NlKHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAxMDApXHJcbiAgICB9XHJcbiAgICB0aGlzLl9jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCB0aGlzLl9mb2N1c291dEV2bnQsIHRydWUpXHJcblxyXG4gICAgaWYgKHRoaXMuX29uSG92ZXIpIHtcclxuICAgICAgdGhpcy5fZW50ZXJFdm50ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9tZW51LCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdwb3NpdGlvbicpID09PSAnc3RhdGljJykgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5vcGVuKClcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9sZWF2ZUV2bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuX21lbnUsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnKSByZXR1cm5cclxuICAgICAgICB0aGlzLmNsb3NlKClcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5fZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMuX2VudGVyRXZudClcclxuICAgICAgdGhpcy5fbWVudS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5fZW50ZXJFdm50KVxyXG4gICAgICB0aGlzLl9lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5fbGVhdmVFdm50KVxyXG4gICAgICB0aGlzLl9tZW51LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLl9sZWF2ZUV2bnQpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfdW5iaW5kRXZlbnRzKCkge1xyXG4gICAgaWYgKHRoaXMuX2VsQ2xpY2tFdm50KSB7XHJcbiAgICAgIHRoaXMuX2VsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fZWxDbGlja0V2bnQpXHJcbiAgICAgIHRoaXMuX2VsQ2xpY2tFdm50ID0gbnVsbFxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX2JvZHlDbGlja0V2bnQpIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2JvZHlDbGlja0V2bnQsIHRydWUpXHJcbiAgICAgIHRoaXMuX2JvZHlDbGlja0V2bnQgPSBudWxsXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fbWVudUNsaWNrRXZudCkge1xyXG4gICAgICB0aGlzLl9tZW51LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fbWVudUNsaWNrRXZudCwgdHJ1ZSlcclxuICAgICAgdGhpcy5fbWVudUNsaWNrRXZudCA9IG51bGxcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9mb2N1c291dEV2bnQpIHtcclxuICAgICAgdGhpcy5fY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgdGhpcy5fZm9jdXNvdXRFdm50LCB0cnVlKVxyXG4gICAgICB0aGlzLl9mb2N1c291dEV2bnQgPSBudWxsXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fZW50ZXJFdm50KSB7XHJcbiAgICAgIHRoaXMuX2VsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLl9lbnRlckV2bnQpXHJcbiAgICAgIHRoaXMuX21lbnUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMuX2VudGVyRXZudClcclxuICAgICAgdGhpcy5fZW50ZXJFdm50ID0gbnVsbFxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX2xlYXZlRXZudCkge1xyXG4gICAgICB0aGlzLl9lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5fbGVhdmVFdm50KVxyXG4gICAgICB0aGlzLl9tZW51LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLl9sZWF2ZUV2bnQpXHJcbiAgICAgIHRoaXMuX2xlYXZlRXZudCA9IG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBfZmluZFBhcmVudChlbCwgY2xzKSB7XHJcbiAgICBpZiAoZWwudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnQk9EWScpIHJldHVybiBudWxsXHJcbiAgICBlbCA9IGVsLnBhcmVudE5vZGVcclxuICAgIHdoaWxlIChlbC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgIT09ICdCT0RZJyAmJiAhZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNscykpIHtcclxuICAgICAgZWwgPSBlbC5wYXJlbnROb2RlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWwudGFnTmFtZS50b1VwcGVyQ2FzZSgpICE9PSAnQk9EWScgPyBlbCA6IG51bGxcclxuICB9XHJcblxyXG4gIF90cmlnZ2VyRXZlbnQoZXZlbnQpIHtcclxuICAgIGlmIChkb2N1bWVudC5jcmVhdGVFdmVudCkge1xyXG4gICAgICBsZXQgY3VzdG9tRXZlbnRcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICBjdXN0b21FdmVudCA9IG5ldyBFdmVudChldmVudClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjdXN0b21FdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpXHJcbiAgICAgICAgY3VzdG9tRXZlbnQuaW5pdEV2ZW50KGV2ZW50LCBmYWxzZSwgdHJ1ZSlcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5fY29udGFpbmVyLmRpc3BhdGNoRXZlbnQoY3VzdG9tRXZlbnQpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9jb250YWluZXIuZmlyZUV2ZW50KGBvbiR7ZXZlbnR9YCwgZG9jdW1lbnQuY3JlYXRlRXZlbnRPYmplY3QoKSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IE1lZ2FEcm9wZG93biB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/mega-dropdown.js\n");

            /***/
        })

        /******/
    })));