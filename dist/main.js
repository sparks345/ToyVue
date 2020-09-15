/******/ (function(modules) { // webpackBootstrap
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/compile.js":
/*!***********************!*\
  !*** ./js/compile.js ***!
  \***********************/
/*! exports provided: Compile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Compile\", function() { return Compile; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar _require = __webpack_require__(/*! ./watcher */ \"./js/watcher.js\"),\n    Watcher = _require.Watcher;\n\nvar Compile = /*#__PURE__*/function () {\n  function Compile(el, vm) {\n    _classCallCheck(this, Compile);\n\n    this.vm = vm;\n    this.el = document.querySelector(el);\n    this.fragment = Object.create(null);\n    this.init();\n  }\n\n  _createClass(Compile, [{\n    key: \"init\",\n    value: function init() {\n      if (this.el) {\n        this.fragment = this.nodeToFragment(this.el);\n        this.compileElement(this.fragment);\n        this.el.appendChild(this.fragment);\n      } else {\n        console.log('DOM 元素不存在');\n      }\n    }\n  }, {\n    key: \"nodeToFragment\",\n    value: function nodeToFragment(el) {\n      var fragment = document.createDocumentFragment();\n      var child = el.firstChild;\n\n      while (child) {\n        fragment.appendChild(child);\n        child = el.firstChild;\n      }\n\n      return fragment;\n    }\n  }, {\n    key: \"compileElement\",\n    value: function compileElement(el) {\n      var childNodes = el.childNodes;\n      var self = this;\n      [].slice.call(childNodes).forEach(function (node) {\n        var reg = /\\{\\{(.*)\\}\\}/;\n        var text = node.textContent;\n\n        if (self.isElementNode(node)) {\n          self.compile(node);\n        } else if (self.isTextNode(node) && reg.test(text)) {\n          self.compileText(node, reg.exec(text)[1]);\n        }\n\n        if (node.childNodes && node.childNodes.length) {\n          self.compileElement(node);\n        }\n      });\n    }\n  }, {\n    key: \"compile\",\n    value: function compile(node) {\n      var nodeAttrs = node.attributes;\n      var self = this;\n      Array.prototype.forEach.call(nodeAttrs, function (attr) {\n        var attrName = attr.name;\n\n        if (self.isDirective(attrName)) {\n          var exp = attr.value;\n          var dir = attrName.substring(2);\n\n          if (self.isEventDirective(dir)) {\n            self.compileEvent(node, self.vm, exp, dir);\n          } else {\n            self.compileModel(node, self.vm, exp, dir);\n          }\n\n          node.removeAttribute(attrName);\n        }\n      });\n    }\n  }, {\n    key: \"compileText\",\n    value: function compileText(node, exp) {\n      var self = this;\n      var initText = this.vm[exp];\n      this.updateText(node, initText);\n      new Watcher(this.vm, exp, function (value) {\n        self.updateText(node, value);\n      });\n    }\n  }, {\n    key: \"compileEvent\",\n    value: function compileEvent(node, vm, exp, dir) {\n      var eventType = dir.split(':')[1];\n      var cb = vm.methods && vm.methods[exp];\n\n      if (eventType && cb) {\n        node.addEventListener(eventType, cb.bind(vm), false);\n      }\n    }\n  }, {\n    key: \"compileModel\",\n    value: function compileModel(node, vm, exp, dir) {\n      var self = this;\n      var val = this.vm[exp];\n      this.modelUpdater(node, val);\n      new Watcher(this.vm, exp, function (value) {\n        self.modelUpdater(node, value);\n      });\n      node.addEventListener('input', function (e) {\n        var newValue = e.target.value;\n\n        if (val === newValue) {\n          return;\n        }\n\n        self.vm[exp] = newValue;\n        ;\n        val = newValue;\n      });\n    }\n  }, {\n    key: \"updateText\",\n    value: function updateText(node, value) {\n      node.textContent = typeof value === 'undefined' ? '' : value;\n    }\n  }, {\n    key: \"modelUpdater\",\n    value: function modelUpdater(node, value, oldValue) {\n      node.value = typeof value === 'undefined' ? '' : value;\n    }\n  }, {\n    key: \"isDirective\",\n    value: function isDirective(attribute) {\n      return attribute.indexOf('v-') === 0;\n    }\n  }, {\n    key: \"isEventDirective\",\n    value: function isEventDirective(dir) {\n      return dir.indexOf('on:') === 0;\n    }\n  }, {\n    key: \"isElementNode\",\n    value: function isElementNode(node) {\n      return node.nodeType === 1;\n    }\n  }, {\n    key: \"isTextNode\",\n    value: function isTextNode(node) {\n      return node.nodeType === 3;\n    }\n  }]);\n\n  return Compile;\n}(); // function Compile(el, vm) {\n//     this.vm = vm;\n//     this.el = document.querySelector(el);\n//     this.fragment = null;\n//     this.init();\n// }\n// Compile.prototype = {\n//     init: function () {\n//         if (this.el) {\n//             this.fragment = this.nodeToFragment(this.el);\n//             this.compileElement(this.fragment);\n//             this.el.appendChild(this.fragment);\n//         } else {\n//             console.log('Dom元素不存在');\n//         }\n//     },\n//     nodeToFragment: function (el) {\n//         var fragment = document.createDocumentFragment();\n//         var child = el.firstChild;\n//         while (child) {\n//             // 将Dom元素移入fragment中\n//             fragment.appendChild(child);\n//             child = el.firstChild\n//         }\n//         return fragment;\n//     },\n//     compileElement: function (el) {\n//         var childNodes = el.childNodes;\n//         var self = this;\n//         [].slice.call(childNodes).forEach(function(node) {\n//             var reg = /\\{\\{(.*)\\}\\}/;\n//             var text = node.textContent;\n//             if (self.isElementNode(node)) {  \n//                 self.compile(node);\n//             } else if (self.isTextNode(node) && reg.test(text)) {\n//                 self.compileText(node, reg.exec(text)[1]);\n//             }\n//             if (node.childNodes && node.childNodes.length) {\n//                 self.compileElement(node);\n//             }\n//         });\n//     },\n//     compile: function(node) {\n//         var nodeAttrs = node.attributes;\n//         var self = this;\n//         Array.prototype.forEach.call(nodeAttrs, function(attr) {\n//             var attrName = attr.name;\n//             if (self.isDirective(attrName)) {\n//                 var exp = attr.value;\n//                 var dir = attrName.substring(2);\n//                 if (self.isEventDirective(dir)) {  // 事件指令\n//                     self.compileEvent(node, self.vm, exp, dir);\n//                 } else {  // v-model 指令\n//                     self.compileModel(node, self.vm, exp, dir);\n//                 }\n//                 node.removeAttribute(attrName);\n//             }\n//         });\n//     },\n//     compileText: function(node, exp) {\n//         var self = this;\n//         var initText = this.vm[exp];\n//         this.updateText(node, initText);\n//         new Watcher(this.vm, exp, function (value) {\n//             self.updateText(node, value);\n//         });\n//     },\n//     compileEvent: function (node, vm, exp, dir) {\n//         var eventType = dir.split(':')[1];\n//         var cb = vm.methods && vm.methods[exp];\n//         if (eventType && cb) {\n//             node.addEventListener(eventType, cb.bind(vm), false);\n//         }\n//     },\n//     compileModel: function (node, vm, exp, dir) {\n//         var self = this;\n//         var val = this.vm[exp];\n//         this.modelUpdater(node, val);\n//         new Watcher(this.vm, exp, function (value) {\n//             self.modelUpdater(node, value);\n//         });\n//         node.addEventListener('input', function(e) {\n//             var newValue = e.target.value;\n//             if (val === newValue) {\n//                 return;\n//             }\n//             self.vm[exp] = newValue;\n//             val = newValue;\n//         });\n//     },\n//     updateText: function (node, value) {\n//         node.textContent = typeof value == 'undefined' ? '' : value;\n//     },\n//     modelUpdater: function(node, value, oldValue) {\n//         node.value = typeof value == 'undefined' ? '' : value;\n//     },\n//     isDirective: function(attr) {\n//         return attr.indexOf('v-') == 0;\n//     },\n//     isEventDirective: function(dir) {\n//         return dir.indexOf('on:') === 0;\n//     },\n//     isElementNode: function (node) {\n//         return node.nodeType == 1;\n//     },\n//     isTextNode: function(node) {\n//         return node.nodeType == 3;\n//     }\n// }\n\n//# sourceURL=webpack:///./js/compile.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! exports provided: SelfVue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SelfVue\", function() { return SelfVue; });\n/* harmony import */ var _observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observer.js */ \"./js/observer.js\");\n/* harmony import */ var _compile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compile.js */ \"./js/compile.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar SelfVue = /*#__PURE__*/function () {\n  function SelfVue(options) {\n    _classCallCheck(this, SelfVue);\n\n    var self = this;\n    this.data = options.data;\n    this.methods = options.methods;\n    Object.keys(this.data).forEach(function (key) {\n      self.proxyKeys(key);\n    });\n    new _observer_js__WEBPACK_IMPORTED_MODULE_0__[\"Observer\"](this.data).observe(this.data);\n    new _compile_js__WEBPACK_IMPORTED_MODULE_1__[\"Compile\"](options.el, this); // options.mounted.call(this);\n  }\n\n  _createClass(SelfVue, [{\n    key: \"proxyKeys\",\n    value: function proxyKeys(key) {\n      var self = this;\n      Object.defineProperty(this, key, {\n        enumerable: false,\n        configurable: true,\n        get: function getter() {\n          return self.data[key];\n        },\n        set: function setter(newVal) {\n          self.data[key] = newVal;\n        }\n      });\n    }\n  }]);\n\n  return SelfVue;\n}(); // function SelfVue (options) {\n//     var self = this;\n//     this.data = options.data;\n//     this.methods = options.methods;\n//     Object.keys(this.data).forEach(function(key) {\n//         self.proxyKeys(key);\n//     });\n//     Observer.observe(this.data);\n//     new Compile(options.el, this);\n//     options.mounted.call(this); // 所有事情处理好后执行mounted函数\n// }\n// SelfVue.prototype = {\n//     proxyKeys: function (key) {\n//         var self = this;\n//         Object.defineProperty(this, key, {\n//             enumerable: false,\n//             configurable: true,\n//             get: function getter () {\n//                 return self.data[key];\n//             },\n//             set: function setter (newVal) {\n//                 self.data[key] = newVal;\n//             }\n//         });\n//     }\n// }\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/observer.js":
/*!************************!*\
  !*** ./js/observer.js ***!
  \************************/
/*! exports provided: Observer, Dep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Observer\", function() { return Observer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Dep\", function() { return Dep; });\n/* harmony import */ var _watcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./watcher.js */ \"./js/watcher.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.js */ \"./main.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// 监听器，主要用于监听所有的属性，当有属性变化时，通知订阅者 Watcher\n// function Observer(data) {\n//     this.data = data;\n//     this.walk(data);\n// }\n\n\nvar Observer = /*#__PURE__*/function () {\n  function Observer(data) {\n    _classCallCheck(this, Observer);\n\n    this.data = data;\n    this.walk(this.data);\n  }\n\n  _createClass(Observer, [{\n    key: \"walk\",\n    value: function walk(data) {\n      var self = this;\n      Object.keys(data).forEach(function (key) {\n        self.defineReactive(data, key, data[key]);\n      });\n    }\n  }, {\n    key: \"defineReactive\",\n    value: function defineReactive(data, key, val) {\n      var dep = new Dep();\n      var childObj = this.observe(val);\n      Object.defineProperty(data, key, {\n        enumerable: true,\n        configurable: true,\n        get: function getter() {\n          console.log('Observer.get');\n\n          if (_main_js__WEBPACK_IMPORTED_MODULE_1__[\"depContainer\"].target) {\n            dep.addSub(_main_js__WEBPACK_IMPORTED_MODULE_1__[\"depContainer\"].target);\n          }\n\n          return val;\n        },\n        set: function setter(newVal) {\n          console.log('Observer.set: ' + newVal);\n\n          if (newVal === val) {\n            console.log('no notify');\n            return;\n          } else {\n            val = newVal;\n            console.log('notify');\n            dep.notify();\n          }\n        }\n      });\n    }\n  }, {\n    key: \"observe\",\n    value: function observe(value, vm) {\n      if (!value || _typeof(value) !== 'object') {\n        return;\n      } else {\n        return new Observer(value);\n      }\n    }\n  }]);\n\n  return Observer;\n}();\nvar Dep = /*#__PURE__*/function () {\n  function Dep() {\n    _classCallCheck(this, Dep);\n\n    this.subs = []; // this.target = Object.create(null);\n  }\n\n  _createClass(Dep, [{\n    key: \"addSub\",\n    value: function addSub(sub) {\n      this.subs.push(sub);\n    }\n  }, {\n    key: \"notify\",\n    value: function notify() {\n      console.log(this.subs);\n      this.subs.forEach(function (sub) {\n        console.log(_typeof(sub));\n        sub.update();\n      });\n    }\n  }]);\n\n  return Dep;\n}(); // Observer.prototype = {\n//     walk: function(data) {\n//         var self = this;\n//         Object.keys(data).forEach(function(key) {\n//             self.defineReactive(data, key, data[key]);\n//         });\n//     },\n//     defineReactive: function(data, key, val) {\n//         var dep = new Dep();\n//         var childObj = observe(val);\n//         Object.defineProperty(data, key, {\n//             enumerable: true,\n//             configurable: true,\n//             get: function getter () {\n//                 if (Dep.target) {\n//                     dep.addSub(Dep.target);\n//                 }\n//                 return val;\n//             },\n//             set: function setter (newVal) {\n//                 if (newVal === val) {\n//                     return;\n//                 }\n//                 val = newVal;\n//                 dep.notify();\n//             }\n//         });\n//     }\n// };\n// function observe(value, vm) {\n//     if (!value || typeof value !== 'object') {\n//         return;\n//     }\n//     return new Observer(value);\n// };\n// function Dep () {\n//     this.subs = [];\n// }\n// Dep.prototype = {\n//     addSub: function(sub) {\n//         this.subs.push(sub);\n//     },\n//     notify: function() {\n//         this.subs.forEach(function(sub) {\n//             sub.update();\n//         });\n//     }\n// };\n// Dep.target = null;\n\n//# sourceURL=webpack:///./js/observer.js?");

/***/ }),

/***/ "./js/watcher.js":
/*!***********************!*\
  !*** ./js/watcher.js ***!
  \***********************/
/*! exports provided: Watcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Watcher\", function() { return Watcher; });\n/* harmony import */ var _observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observer.js */ \"./js/observer.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.js */ \"./main.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Watcher = /*#__PURE__*/function () {\n  function Watcher(vm, exp, cb) {\n    _classCallCheck(this, Watcher);\n\n    this.cb = cb;\n    this.vm = vm;\n    this.exp = exp;\n    this.value = this.get(); // this.depContainer = new Dep();\n  }\n\n  _createClass(Watcher, [{\n    key: \"update\",\n    value: function update() {\n      this.run();\n    }\n  }, {\n    key: \"run\",\n    value: function run() {\n      var value = this.vm.data[this.exp];\n      var oldVal = this.value;\n\n      if (value !== oldVal) {\n        this.value = value;\n        this.cb.call(this.vm, value, oldVal);\n      }\n    }\n  }, {\n    key: \"get\",\n    value: function get() {\n      // new Dep().target = this;\n      _main_js__WEBPACK_IMPORTED_MODULE_1__[\"depContainer\"].target = this;\n      var value = this.vm.data[this.exp]; // new Dep().target = Object.create(null);\n      // depContainer.target = Object.create(null);\n\n      return value;\n    }\n  }]);\n\n  return Watcher;\n}(); // function Watcher(vm, exp, cb) {\n//     this.cb = cb;\n//     this.vm = vm;\n//     this.exp = exp;\n//     this.value = this.get();  // 将自己添加到订阅器的操作\n// }\n// Watcher.prototype = {\n//     update: function() {\n//         this.run();\n//     },\n//     run: function() {\n//         var value = this.vm.data[this.exp];\n//         var oldVal = this.value;\n//         if (value !== oldVal) {\n//             this.value = value;\n//             this.cb.call(this.vm, value, oldVal);\n//         }\n//     },\n//     get: function() {\n//         Dep.target = this;  // 缓存自己\n//         var value = this.vm.data[this.exp]  // 强制执行监听器里的get函数\n//         Dep.target = null;  // 释放自己\n//         return value;\n//     }\n// };\n\n//# sourceURL=webpack:///./js/watcher.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! exports provided: depContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"depContainer\", function() { return depContainer; });\n/* harmony import */ var _js_observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/observer.js */ \"./js/observer.js\");\n/* harmony import */ var _js_watcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/watcher.js */ \"./js/watcher.js\");\n/* harmony import */ var _js_compile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/compile.js */ \"./js/compile.js\");\n/* harmony import */ var _js_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/index.js */ \"./js/index.js\");\n\n\n\n // let data = {name: 'Abner'};\n// let ob = new Observer(data);\n// console.log(ob.data.name);\n// ob.walk(data);\n// ob.defineReactive(data, 'name', 'Abner');\n// let ob = new Observer();\n\nvar depContainer = new _js_observer_js__WEBPACK_IMPORTED_MODULE_0__[\"Dep\"]();\nvar selfVue = new _js_index_js__WEBPACK_IMPORTED_MODULE_3__[\"SelfVue\"]({\n  el: '#app',\n  data: {\n    title: 'Hello World',\n    msg: 'hello'\n  }\n});\nsetTimeout(function () {\n  selfVue.title = '你好';\n  console.log(selfVue.title);\n}, 2000);\nsetTimeout(function () {\n  selfVue.msg = 'canfoo';\n  console.log(selfVue.msg);\n}, 2500); // let wa  = new Watcher());\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });