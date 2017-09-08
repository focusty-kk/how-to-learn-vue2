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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(1);

Object.keys(_util).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _util[key];
    }
  });
});

var _lang = __webpack_require__(30);

Object.keys(_lang).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _lang[key];
    }
  });
});

var _env = __webpack_require__(29);

Object.keys(_env).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _env[key];
    }
  });
});

var _options = __webpack_require__(31);

Object.keys(_options).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _options[key];
    }
  });
});

var _debug = __webpack_require__(2);

Object.keys(_debug).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _debug[key];
    }
  });
});

var _props = __webpack_require__(32);

Object.keys(_props).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _props[key];
    }
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports._toString = _toString;
exports.makeMap = makeMap;
exports.remove = remove;
exports.hasOwn = hasOwn;
exports.bind = bind;
exports.toArray = toArray;
exports.extend = extend;
exports.isObject = isObject;
exports.isPlainObject = isPlainObject;
exports.noop = noop;
/**
 * Convert a value to a string that is actually rendered.
 */
function _toString(val) {
  return val == null ? '' : (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' ? JSON.stringify(val, null, 2) : String(val);
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? function (val) {
    return map[val.toLowerCase()];
  } : function (val) {
    return map[val];
  };
}

/**
 * Remove an item from an array
 */
function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = exports.camelize = function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
};

/**
 * Capitalize a string.
 */
var capitalize = exports.capitalize = function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Hyphenate a camelCase string.
 */
// <div MyProp="">  => <div my-prop="">
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = exports.hyphenate = function hyphenate(str) {
  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
};

/**
 * Simple bind, faster than native
 */
function bind(fn, ctx) {
  function boundFn(a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn;
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret;
}

/**
 * Mix properties into target object.
 */
function extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to;
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject(obj) {
  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';
function isPlainObject(obj) {
  return toString.call(obj) === OBJECT_STRING;
}

/**
 * Perform no operation.
 */
function noop() {}

/**
 * Always return false.
 */
var no = exports.no = function no() {
  return false;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warn = warn;
var hasConsole = typeof console !== 'undefined';

function warn(msg, vm) {
  if (hasConsole) {
    console.error('[Vue warn]: ' + msg + ' ');
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Observer = exports.observerState = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.observe = observe;
exports.defineReactive = defineReactive;
exports.set = set;
exports.del = del;

var _dep = __webpack_require__(14);

var _dep2 = _interopRequireDefault(_dep);

var _array = __webpack_require__(28);

var _index = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayKeys = Object.getOwnPropertyNames(_array.arrayMethods);

var observerState = exports.observerState = {
  isSettingProps: false

  /*
  
    computed : {
      m: function(){
        return this.a + this.b
      },
      n: function(){
        return this.a + this.c
      },
      x: function(){
        return this.a + this.b + this.c
      }
    }
  
    DepA.subs = [WatcherM, WatcherN, WatcherX]
    DepB.subs = [WatcherM, WatcherX]
    DepC.subs = [WatcherN, WatcherX]
  
    WatcherM.deps = [DepA, DepB]
    WatcherN.deps = [DepA, DepC]
    WatcherX.deps = [DepA, DepB, DepC]
  
    当getA发生的时候，需要通过 depend 添加WatcherM/WatcherN/WatcherX的依赖deps, WatcherN.subs.push()
    当setA发生的时候，需要通过 notify 广播 DepA.subs，让他们通知对应的watcher
  
   */

};
var Observer = exports.Observer = function () {
  /*
  value: any;
  dep: Dep;
  */
  function Observer(value) {
    _classCallCheck(this, Observer);

    this.value = value;
    this.dep = new _dep2.default();
    (0, _index.def)(value, '__ob__', this); // 把当前Observer对象 绑定在value.__ob__上

    // 将value深度遍历，订阅里边所有值的get set
    if (Array.isArray(value)) {
      // 由于数组原生的push/shift等方法也是写操作
      // 需要在这里勾住
      var augment = _index.hasProto ? protoAugment : copyAugment;
      augment(value, _array.arrayMethods, arrayKeys);
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }

  /**
   * Walk through each property and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */


  _createClass(Observer, [{
    key: 'walk',
    value: function walk(obj) {
      var keys = Object.keys(obj);
      for (var i = 0; i < keys.length; i++) {
        defineReactive(obj, keys[i], obj[keys[i]]);
      }
    }

    /**
     * Observe a list of Array items.
     */

  }, {
    key: 'observeArray',
    value: function observeArray(items) {
      for (var i = 0, l = items.length; i < l; i++) {
        observe(items[i]);
      }
    }
  }]);

  return Observer;
}();

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */


function protoAugment(target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    (0, _index.def)(target, key, src[key]);
  }
}

function observe(value) {
  if (!(0, _index.isObject)(value)) {
    return;
  }

  var ob = void 0;
  if ((0, _index.hasOwn)(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if ((Array.isArray(value) || (0, _index.isPlainObject)(value)) && !value._isVue // vm对象不作订阅
  ) {
      ob = new Observer(value);
    }

  return ob;
}

function defineReactive(obj, key, val, customSetter) {
  var dep = new _dep2.default();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return;
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = observe(val);
  /*
      m: function(){
      return this.a + this.b
    },
      当getA发生的时候，需要通过 depend 添加WatcherM/WatcherN/WatcherX的依赖deps, WatcherN.subs.push()
    当setA发生的时候，需要通过 notify 广播 DepA.subs，让他们通知对应的watcher
  */
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;
      if (_dep2.default.target) {
        // getA发生的时候，Dep.target == DepM
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          dependArray(value);
        }
      }
      return val;
    },
    set: function reactiveSetter(newVal) {
      var value = val;

      if (newVal === value) {
        return;
      }

      if (customSetter) {
        customSetter();
      }

      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      // console.log("newVal = ", newVal)

      childOb = observe(newVal);
      dep.notify();

      // vm._update at core/instance/index.js
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set(obj, key, val) {
  if (Array.isArray(obj)) {
    obj.length = Math.max(obj.length, key);
    obj.splice(key, 1, val);
    return val;
  }
  if ((0, _index.hasOwn)(obj, key)) {
    obj[key] = val;
    return;
  }
  var ob = obj.__ob__;
  if (!ob) {
    // 不是订阅对象，直接set了返回
    obj[key] = val;
    return;
  }
  // 递归订阅set进去的value
  // ob.value 可以认为就是 obj
  defineReactive(ob.value, key, val);

  // set操作要notify deps
  ob.dep.notify();
  return val;
}

/**
 * Delete a property and trigger change if necessary.
 */
function del(obj, key) {
  if (Array.isArray(obj)) {
    obj.splice(key, 1);
    return;
  }
  var ob = obj.__ob__;
  if (!(0, _index.hasOwn)(obj, key)) {
    return;
  }
  delete obj[key];
  if (!ob) {
    return;
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray(value) {
  for (var e, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTextVNode = createTextVNode;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VNode = function VNode(tag, // 标签名
data, // data = { attrs: 属性key-val }
children, // 孩子 [VNode, VNode]
text, // 文本节点
elm, // 对应的真实dom对象
context, // 绑定的vm对象
componentOptions) // 自定义组件的配置
{
  _classCallCheck(this, VNode);

  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.context = context;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined; // 自定义组件的vm实例
};

exports.default = VNode;
var createEmptyVNode = exports.createEmptyVNode = function createEmptyVNode() {
  var node = new VNode();
  node.text = '';
  return node;
};

function createTextVNode(val) {
  return new VNode(undefined, undefined, undefined, String(val));
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initLifecycle = initLifecycle;
exports.lifecycleMixin = lifecycleMixin;
exports.callHook = callHook;
exports.updateChildComponent = updateChildComponent;

var _patch = __webpack_require__(37);

var _patch2 = _interopRequireDefault(_patch);

var _watcher = __webpack_require__(6);

var _watcher2 = _interopRequireDefault(_watcher);

var _index = __webpack_require__(9);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(3);

var _index4 = __webpack_require__(8);

var _index5 = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var idToTemplate = function idToTemplate(id) {
  var el = (0, _index4.query)(id);
  return el && el.innerHTML;
};

function initLifecycle(vm) {
  vm._watcher = null;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin(Vue) {

  Vue.prototype._update = function () {
    var vm = this;

    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate'); // see: https://cn.vuejs.org/v2/api/?#beforeUpdate
    }

    var vnode = vm._render();
    var prevVnode = vm._vnode;

    vm._vnode = vnode;

    if (!prevVnode) {
      // 对于自定义组件来说，_parentElm,_refElm带入patch
      vm.$el = (0, _patch2.default)(vm.$el, vnode, vm.$options._parentElm, vm.$options._refElm);
    } else {
      // updates
      vm.$el = (0, _patch2.default)(prevVnode, vnode);
    }

    if (vm._isMounted) {
      callHook(vm, 'updated'); // see: https://cn.vuejs.org/v2/api/?#updated
    }
  };

  Vue.prototype.$mount = function (el) {
    // vm._vnode = document.getElementById(el)

    el = el ? (0, _index4.query)(el) : undefined;

    var vm = this;
    var options = vm.$options;
    var template = options.template;
    var _render = vm._render;
    if (!_render) {
      //还没有render时，要去编译模板
      if (template) {
        // 直接有字符串模板传进来
        if (typeof template === 'string') {
          if (template.charAt(0) === '#') {
            // template = "#id"
            template = idToTemplate(template);
            /* istanbul ignore if */
            if (!template) {
              (0, _index5.warn)('Template element not found or is empty: ' + options.template, this);
            }
          }
        } else if (template.nodeType) {
          template = template.innerHTML;
        } else {
          (0, _index5.warn)('invalid template option:' + template, this);
          return this;
        }
      } else if (el) {
        // 从dom节点里边取
        template = getOuterHTML(el);
      }

      if (template) {
        var compiled = (0, _index2.default)(template);

        vm._render = function () {
          return compiled.render.call(vm);
        };
      }
    }

    options.template = template;
    return mountComponent(this, el);
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      // 强制更新ui
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return;
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;

    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }

    // call the last hook...
    vm._isDestroyed = true;
    callHook(vm, 'destroyed');

    // invoke destroy hooks on current rendered tree
    (0, _patch2.default)(vm._vnode, null);
  };
}

function callHook(vm, hook) {
  var handler = vm.$options[hook];
  if (handler) {
    try {
      handler.call(vm);
    } catch (e) {
      (0, _index5.warn)(e, vm, hook + ' hook');
    }
  }
}

function mountComponent(vm, el) {
  vm.$el = el;

  callHook(vm, 'beforeMount'); // see: https://cn.vuejs.org/v2/api/?#beforeMount

  // 之后只要有 vm.a = "xxx" 的set动作，自然就会触发到整条依赖链的watcher，最后触发updateComponent的调用
  var updateComponent = function updateComponent() {
    vm._update();
  };

  // vm 作为 root 开始收集依赖
  // 通过vm._update()调用，开始收集整个vm组件内部的依赖
  vm._watcher = new _watcher2.default(vm, updateComponent, _index5.noop);

  vm._isMounted = true;
  callHook(vm, 'mounted'); // see: https://cn.vuejs.org/v2/api/?#mounted
  return vm;
}

// 当当前子组件的props改变的时候，这里会重新触发vm._props写操作
// 由于在state.js里边initProps做了订阅 defineReactive(props, key, value)
// 因此会触发子组件的vm._watcher update，从而触发子组件update
function updateChildComponent(vm, propsData) {
  // update props
  if (propsData && vm.$options.props) {
    // 在下边props[key] = xx的时候 会对孩子的props进行赋值，但是这次赋值是允许的，不应该出warning
    // 是父亲的data改变 引起 孩子的prop变化
    // 所以在这个过程中保持  observerState.isSettingProps = true
    _index3.observerState.isSettingProps = true;
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = (0, _index5.validateProp)(key, vm.$options.props, propsData, vm);
    }
    _index3.observerState.isSettingProps = false;
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
}

function getOuterHTML(el) {
  if (el.outerHTML) {
    return el.outerHTML;
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML;
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dep = __webpack_require__(14);

var _dep2 = _interopRequireDefault(_dep);

var _index = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var uid = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
/*

  computed : {
    m: function(){
      return this.a + this.b
    },
    n: function(){
      return this.a + this.c
    },
    x: function(){
      return this.a + this.b + this.c
    }
  }

  DepA.subs = [WatcherM, WatcherN, WatcherX]
  DepB.subs = [WatcherM, WatcherX]
  DepC.subs = [WatcherN, WatcherX]

  WatcherM.deps = [DepA, DepB]
  WatcherN.deps = [DepA, DepC]
  WatcherX.deps = [DepA, DepB, DepC]
 */

var Watcher = function () {
  /*
  vm: Component;
  expression: string;
  cb: Function;
  id: number;
  deep: boolean;
  lazy: boolean;
  dirty: boolean;
  active: boolean;
  deps: Array<Dep>;
  newDeps: Array<Dep>;
  depIds: Set;
  newDepIds: Set;
  getter: Function;
  value: any;
  */

  function Watcher(vm, expOrFn, cb, options) {
    _classCallCheck(this, Watcher);

    this.vm = vm;
    vm._watchers.push(this);
    // options
    // https://cn.vuejs.org/v2/api/#vm-watch-expOrFn-callback-options
    if (options) {
      this.deep = !!options.deep;
      this.lazy = !!options.lazy; //computed是
    } else {
      this.deep = this.lazy = false;
    }
    this.cb = cb;
    this.id = ++uid; // uid for batching
    this.active = true;
    this.dirty = this.lazy; // for lazy watchers

    // 在收集依赖的时候会使用 newDeps来收集。
    // 收集结束的时候会把newDeps覆盖到deps里
    this.deps = []; // WatcherM.deps = [DepA, DepB]
    this.newDeps = [];

    this.depIds = new _index._Set(); // 对应this.dep的所有id set，避免重复添加同个Dep
    this.newDepIds = new _index._Set();

    // parse expression for getter
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      // vm.$watch("a.b", function(){ blabla; })
      // "a.b" 的上下文是在 vm对象上，所以需要parsePath返回一个getter函数，在调用getter的时候，上下文绑定vm即可： this.gette.call(vm)
      this.getter = (0, _index.parsePath)(expOrFn);
      if (!this.getter) {
        this.getter = function () {};
        (0, _index.warn)('Failed watching path: "' + expOrFn + '" ' + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
      }
    }

    this.value = this.lazy ? undefined : this.get();
  }

  /**
   * Evaluate the getter, and re-collect dependencies.
   */


  _createClass(Watcher, [{
    key: 'get',
    value: function get() {
      //开始收集依赖
      (0, _dep.pushTarget)(this);
      var value = void 0;
      var vm = this.vm;
      value = this.getter.call(vm, vm);

      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value);
      }

      //结束收集依赖
      (0, _dep.popTarget)();

      // 在收集依赖的时候会使用 newDeps来收集。
      // 收集结束的时候会把newDeps覆盖到deps里
      this.cleanupDeps();
      return value;
    }

    /**
     * Add a dependency to this directive.
     */

  }, {
    key: 'addDep',
    value: function addDep(dep) {
      var id = dep.id;
      if (!this.newDepIds.has(id)) {
        this.newDepIds.add(id);
        this.newDeps.push(dep); // WatcherM.deps.push(DepA) // WatcherM.deps = [DepA, DepB]
        if (!this.depIds.has(id)) {
          dep.addSub(this); //  DepA.subs.push(WatcherM) // DepA.subs = [WatcherM, WatcherN, WatcherX]
        }
      }
    }

    /**
     * Clean up for dependency collection.
     */
    // 在收集依赖的时候会使用 newDeps来收集。
    // 收集结束的时候会把newDeps覆盖到deps里

  }, {
    key: 'cleanupDeps',
    value: function cleanupDeps() {
      var i = this.deps.length;
      while (i--) {
        // 把旧依赖处理好
        var dep = this.deps[i];
        if (!this.newDepIds.has(dep.id)) {
          dep.removeSub(this);
        }
      }
      // 把新依赖 newDeps 更新到 deps
      // newDeps 更新成初始状态，方便下次收集依赖
      var tmp = this.depIds;
      this.depIds = this.newDepIds;
      this.newDepIds = tmp;
      this.newDepIds.clear();
      tmp = this.deps;
      this.deps = this.newDeps;
      this.newDeps = tmp;
      this.newDeps.length = 0;
    }

    /**
     * Subscriber interface.
     * Will be called when a dependency changes.
     */

  }, {
    key: 'update',
    value: function update() {
      if (this.lazy) {
        this.dirty = true;
      } else {
        this.run();
      }
    }

    /**
     * Scheduler job interface.
     * Will be called by the scheduler.
     */

  }, {
    key: 'run',
    value: function run() {
      if (this.active) {
        var value = this.get();
        if (value !== this.value || (0, _index.isObject)(value) || this.deep) {
          // set new value
          var oldValue = this.value;
          this.value = value;
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }

    /**
     * Evaluate the value of the watcher.
     * This only gets called for lazy watchers.
     */

  }, {
    key: 'evaluate',
    value: function evaluate() {
      this.value = this.get();
      this.dirty = false;
    }

    /**
     * Depend on all deps collected by this watcher.
     */

  }, {
    key: 'depend',
    value: function depend() {
      var i = this.deps.length;
      while (i--) {
        this.deps[i].depend();
      }
    }

    /**
     * Remove self from all dependencies' subscriber list.
     */
    // 销毁watcher之后，把dep也从目标队列删掉

  }, {
    key: 'teardown',
    value: function teardown() {
      if (this.active) {
        var i = this.deps.length;
        while (i--) {
          this.deps[i].removeSub(this);
        }
        this.active = false;
      }
    }
  }]);

  return Watcher;
}();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */


exports.default = Watcher;
var seenObjects = new _index._Set();
function traverse(val) {
  // 目的是触发里边所有value的get操作，让外边收集依赖
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse(val, seen) {
  var i = void 0,
      keys = void 0;
  var isA = Array.isArray(val);
  if (!isA && !(0, _index.isObject)(val)) {
    // 只有数组和对象需要递归监听
    return;
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return;
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) {
      _traverse(val[i], seen);
    }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) {
      _traverse(val[keys[i]], seen);
    }
  }
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isReservedTag = exports.isPreTag = exports.isSVG = exports.isHTMLTag = undefined;

var _util = __webpack_require__(1);

var isHTMLTag = exports.isHTMLTag = (0, _util.makeMap)('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template');

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = exports.isSVG = (0, _util.makeMap)('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

var isPreTag = exports.isPreTag = function isPreTag(tag) {
  return tag === 'pre';
};

var isReservedTag = exports.isReservedTag = function isReservedTag(tag) {
  return isHTMLTag(tag) || isSVG(tag);
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _attrs = __webpack_require__(16);

Object.keys(_attrs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _attrs[key];
    }
  });
});

var _class = __webpack_require__(45);

Object.keys(_class).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _class[key];
    }
  });
});

var _element = __webpack_require__(7);

Object.keys(_element).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _element[key];
    }
  });
});
exports.query = query;

var _index = __webpack_require__(0);

/**
 * Query an element selector if it's not an element already.
 */
/* @flow */
function query(el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      (0, _index.warn)('Cannot find element: ' + el);
      return document.createElement('div');
    }
    return selected;
  } else {
    return el;
  }
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compile;

var _index = __webpack_require__(21);

var _debug = __webpack_require__(2);

var _util = __webpack_require__(1);

var _index2 = __webpack_require__(19);

function makeFunction(code, errors) {
  try {
    return new Function(code);
  } catch (err) {
    errors.push({ err: err, code: code });
    return _util.noop;
  }
}

function compile(template) {
  var ast = (0, _index.parse)(template.trim());
  var code = (0, _index2.generate)(ast);
  return {
    ast: ast,
    render: makeFunction(code.render)
  };
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initEvents = initEvents;
exports.updateComponentListeners = updateComponentListeners;
exports.eventsMixin = eventsMixin;

var _index = __webpack_require__(0);

var _events = __webpack_require__(15);

function initEvents(vm) {
  vm._events = Object.create(null);

  //如果是孩子组件
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target = void 0;

function add(event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove(event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners(vm, listeners, oldListeners) {
  target = vm;
  // 由于自定义事件的add 和remove 和 原来的dom event有差别(不再是dom.addEventListener)
  // 因此要把之前的add remove抽象出来
  (0, _events.updateListeners)(listeners, oldListeners || {}, add, remove, vm);
}

function eventsMixin(Vue) {
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
    }
    return vm;
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on() {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm;
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // 移除所有监听
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm;
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm;
    }
    // $off("abc") 移除所有abc的handler
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm;
    }

    // 移除特定某个handler
    var cb = void 0;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break;
      }
    }
    return vm;
  };

  Vue.prototype.$emit = function (event) {
    // 孩子vm触发事件，_events是在init的时候调用updateComponentListeners监听父亲的handler
    var vm = this;
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? (0, _index.toArray)(cbs) : cbs;
      var args = (0, _index.toArray)(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        cbs[i].apply(vm, args);
      }
    }
    return vm;
  };
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initMixin = initMixin;
exports.resolveConstructorOptions = resolveConstructorOptions;

var _state = __webpack_require__(13);

var _render = __webpack_require__(12);

var _events = __webpack_require__(10);

var _lifecycle = __webpack_require__(5);

var _index = __webpack_require__(0);

var uid = 0;

function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    var template = options.template;

    vm._uid = uid++;

    // a flag to avoid this being observed
    // 避免 vm对象 被注入订阅
    vm._isVue = true;

    // merge options
    // 针对: Sub = Vue.extend(options1); subvm = new Sub(options2);
    // 需要merge静态的 options1 和动态的 options2 到 subvm 上
    vm.$options = (0, _index.mergeOptions)(resolveConstructorOptions(vm.constructor), options || {}, vm);

    (0, _lifecycle.initLifecycle)(vm);
    (0, _events.initEvents)(vm);
    (0, _render.initRender)(vm);
    (0, _lifecycle.callHook)(vm, 'beforeCreate'); // see: https://cn.vuejs.org/v2/api/?#beforeCreate
    (0, _state.initState)(vm);
    (0, _lifecycle.callHook)(vm, 'created'); // see: https://cn.vuejs.org/v2/api/?#created

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function resolveConstructorOptions(Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    // 如果有父类
    // 需要把父类的options拿出来 重新merge一下
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;

    // 对比一下看看父类的options有没有做过更新
    if (superOptions !== cachedSuperOptions) {
      // 如果有更新过
      // super option changed,
      // need to resolve new options.
      // 更新一下cache options
      Ctor.superOptions = superOptions;

      // 重新merge一下options
      options = Ctor.options = (0, _index.mergeOptions)(superOptions, Ctor.extendOptions);
    }
  }
  return options;
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initRender = initRender;
exports.renderMixin = renderMixin;

var _index = __webpack_require__(0);

var _vnode = __webpack_require__(4);

var _createElement = __webpack_require__(34);

var _renderList = __webpack_require__(27);

var _checkKeycodes = __webpack_require__(26);

function initRender(vm) {
  vm._vnode = null; // the root of the child tree

  var parentVnode = vm.$options._parentVnode;
  var renderContext = parentVnode && parentVnode.context;

  // 在_c('my-component'); 也就是createElementVNode需要创建一个自定义组件的vnode，由于此时createElementVNode需要绑定vm构造器
  vm._c = function (a, b, c) {
    return (0, _createElement.createElementVNode)(vm, a, b, c);
  };
}

function renderMixin(Vue) {
  // Vue.prototype._c = createElementVNode
  Vue.prototype._v = _vnode.createTextVNode;
  Vue.prototype._s = _index._toString;
  Vue.prototype._l = _renderList.renderList;
  Vue.prototype._k = _checkKeycodes.checkKeyCodes;
  Vue.prototype._e = _vnode.createEmptyVNode;
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.proxy = proxy;
exports.initState = initState;
exports.stateMixin = stateMixin;

var _watcher = __webpack_require__(6);

var _watcher2 = _interopRequireDefault(_watcher);

var _index = __webpack_require__(3);

var _index2 = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: _index2.noop,
  set: _index2.noop
};

function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState(vm) {
  vm._watchers = [];
  var opts = vm.$options;

  if (opts.props) initProps(vm, opts.props);
  if (opts.methods) initMethods(vm, opts.methods);

  if (opts.data) {
    initData(vm);
  } else {
    (0, _index.observe)(vm._data = {}, true /* asRootData */);
  }

  if (opts.computed) initComputed(vm, opts.computed);
  if (opts.watch) initWatch(vm, opts.watch);
}

var isReservedProp = { key: 1 };

function initProps(vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};

  var keys = vm.$options._propKeys = [];

  var _loop = function _loop(key) {
    keys.push(key);
    // 获取&校验属性的值，同时订阅

    // propsOptions 为组件定义的时候props的声明
    // propsData 是_c() 在runtime从父亲传递过来的数据
    var value = (0, _index2.validateProp)(key, propsOptions, propsData, vm);
    if (isReservedProp[key]) {
      // 保留的关键字 ["key"] 不允许用key做props
      (0, _index2.warn)('"' + key + '" is a reserved attribute and cannot be used as component prop.', vm);
    }
    (0, _index.defineReactive)(props, key, value, function () {
      if (!_index.observerState.isSettingProps) {
        // 在update 孩子vm时，父亲的data变化引起的props变化 不应该出warning
        (0, _index2.warn)('Avoid mutating a prop directly since the value will be ' + 'overwritten whenever the parent component re-renders. ' + 'Instead, use a data or computed property based on the prop\'s ' + ('value. Prop being mutated: "' + key + '"'), vm);
      }
    });

    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      // 把propsOptions的key 代理到vm._prop上
      proxy(vm, '_props', key);
    }
  };

  for (var key in propsOptions) {
    _loop(key);
  }
}

function initData(vm) {
  var data = vm.$options.data;
  // 把 data 所有属性代理到 vm._data 上
  // data可以是一个函数：组件的data不应该是静态的obj，应该是一个function，避免组件共享同一个data
  data = vm._data = typeof data === 'function' ? data.call(vm) : data || {};

  if (!(0, _index2.isPlainObject)(data)) {
    data = {};
    (0, _index2.warn)('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
  }
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var i = keys.length;
  while (i--) {
    if (props && (0, _index2.hasOwn)(props, keys[i])) {
      (0, _index2.warn)('The data property "' + keys[i] + '" is already declared as a prop. ' + 'Use prop default value instead.', vm);
    } else if (!(0, _index2.isReserved)(keys[i])) {
      // vm._xx vm.$xxx 都是vm的内部/外部方法，所以不能代理到data上
      proxy(vm, '_data', keys[i]); // 把 vm.abc 代理到 vm._data.abc
    }
  }
  (0, _index.observe)(data, this);
}

function initComputed(vm, computed) {
  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;

    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    }
  }
}

function defineComputed(target, key, userDef) {
  if (typeof userDef === 'function') {
    // computed传入function的话，不可写
    sharedPropertyDefinition.get = function () {
      return userDef.call(target);
    };
    sharedPropertyDefinition.set = _index2.noop;
  } else {
    sharedPropertyDefinition.get = userDef.get ? userDef.get : _index2.noop;
    sharedPropertyDefinition.set = userDef.set ? userDef.set : _index2.noop;
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initMethods(vm, methods) {
  for (var key in methods) {
    vm[key] = methods[key] == null ? _index2.noop : (0, _index2.bind)(methods[key], vm);
  }
}

function initWatch(vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      // 为什么这里会是数组
      // Sub = Vue.extend({ watch: {a:funcA }}), subvm = new Sub({ watch: {a:funcB })
      // 最终subvm的options.watch = { "a": [funcA, funcB] }
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher(vm, key, handler) {
  var options = void 0;
  if ((0, _index2.isPlainObject)(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  vm.$watch(key, handler, options);
}

function stateMixin(Vue) {
  Vue.prototype.$set = _index.set;
  Vue.prototype.$delete = _index.del;

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    var vm = this;
    options = options || {};
    options.user = true; // 标记用户主动监听的Watcher
    var watcher = new _watcher2.default(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn() {
      // 返回取消watch的接口
      watcher.teardown();
    };
  };
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* @flow */

exports.pushTarget = pushTarget;
exports.popTarget = popTarget;

var _watcher = __webpack_require__(6);

var _watcher2 = _interopRequireDefault(_watcher);

var _index = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
/*

  computed : {
    m: function(){
      return this.a + this.b
    },
    n: function(){
      return this.a + this.c
    },
    x: function(){
      return this.a + this.b + this.c
    }
  }

  DepA.subs = [WatcherM, WatcherN, WatcherX]
  DepB.subs = [WatcherM, WatcherX]
  DepC.subs = [WatcherN, WatcherX]

  WatcherM.deps = [DepA, DepB]
  WatcherN.deps = [DepA, DepC]
  WatcherX.deps = [DepA, DepB, DepC]

  当getA发生的时候，需要通过 depend 添加WatcherM/WatcherN/WatcherX的依赖deps, WatcherN.subs.push()
  当setA发生的时候，需要通过 notify 广播 DepA.subs，让他们通知对应的watcher
 */

var Dep = function () {
  /*
  static target: ?Watcher;
  id: number;
  subs: Array<Watcher>;
  */

  function Dep() {
    _classCallCheck(this, Dep);

    this.id = uid++;
    this.subs = [];
  }

  _createClass(Dep, [{
    key: 'addSub',
    value: function addSub(sub) {
      this.subs.push(sub);
    }
  }, {
    key: 'removeSub',
    value: function removeSub(sub) {
      (0, _index.remove)(this.subs, sub);
    }
  }, {
    key: 'depend',
    value: function depend() {
      if (Dep.target) {
        Dep.target.addDep(this);
      }
    }
  }, {
    key: 'notify',
    value: function notify() {
      // 广播
      var subs = this.subs.slice();
      for (var i = 0, l = subs.length; i < l; i++) {
        subs[i].update();
      }
    }
  }]);

  return Dep;
}();

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.

// js是单线程，所以全局只会有一个watcher在被执行
// 在收集依赖的时候只需要维护一个全局的target堆栈即可


exports.default = Dep;
Dep.target = null;
var targetStack = [];

function pushTarget(_target) {
  if (Dep.target) targetStack.push(Dep.target);
  Dep.target = _target;
}

function popTarget() {
  Dep.target = targetStack.pop();
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateListeners = updateListeners;

var _index = __webpack_require__(0);

var target = void 0;

function add(event, _handler, once, capture) {
  if (once) {
    var oldHandler = _handler;
    var _target = target; // save current target element in closure
    _handler = function handler(ev) {
      var res = arguments.length === 1 ? oldHandler(ev) : oldHandler.apply(null, arguments);

      if (res !== null) {
        // 执行一次之后就remove掉
        // 但是有个例外，例如存在keydown等keyCode的修饰符时：
        // oldHandler = function($event) { if($event.keyCode != 13) return null; blabla($event); }
        // 在没触发过的话真正的handler:blabla前，我们不应该移除监听，于是加多一个null的返回值干扰流程
        remove(event, _handler, capture, _target);
      }
    };
  }
  target.addEventListener(event, _handler, capture);
}

function remove(event, handler, capture, _target) {
  (_target || target).removeEventListener(event, handler, capture);
}

function createFnInvoker(fns) {
  function invoker() {
    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      for (var i = 0; i < fns.length; i++) {
        fns[i].apply(null, arguments);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments);
    }
  }
  invoker.fns = fns;
  return invoker;
}

// name = "~!click"  其中 ~表示once ， !表示capture
var normalizeEvent = function normalizeEvent(name) {
  var once = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once,
    capture: capture
  };
};

function updateListeners(on, oldOn, add, remove, vm) {
  var name = void 0,
      cur = void 0,
      old = void 0,
      event = void 0;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (!cur) {
      // v-on:click="clickme" 找不到clickme同名方法定义
      (0, _index.warn)('Invalid handler for event "' + event.name + '": got ' + String(cur), vm);
    } else if (!old) {
      // 旧vnode没有on此事件
      if (!cur.fns) {
        // 下次 patch 时就不用重新再包装 listenerCb
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture);
    } else if (cur !== old) {
      // 旧vnode和新vnode都有on同个事件，并且listenerCb指向不同，只要把当前的listenerCb指向cur的即可
      old.fns = cur;
      on[name] = old;
    }
  }

  // 把旧的监听移除掉
  for (name in oldOn) {
    if (!on[name]) {
      event = normalizeEvent(name);
      remove(event.name, oldOn[name], event.capture);
    }
  }
}

function updateDOMListeners(oldVnode, vnode) {
  if (!oldVnode.data.on && !vnode.data.on) {
    return;
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target = vnode.elm;
  updateListeners(on, oldOn, add, remove, vnode.context);
}

exports.default = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFalsyAttrValue = exports.mustUseProp = undefined;

var _util = __webpack_require__(1);

// attributes that should be using props for binding
// 需要用props来绑定的属性
var acceptValue = (0, _util.makeMap)('input,textarea,option,select');
var mustUseProp = exports.mustUseProp = function mustUseProp(tag, type, attr) {
  return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
};

var isFalsyAttrValue = exports.isFalsyAttrValue = function isFalsyAttrValue(val) {
  return val == null || val === false;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(25);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _index3.initGlobalAPI)(_index2.default);

_index2.default.version = '2.2.0';

exports.default = _index2.default;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genHandlers = genHandlers;
// v-on:click="function(){}"
// v-on:click="() => {}"
var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;

// v-on:click="xxx" // xxx为vm的一个方法名字
var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

//else : // v-on:click="console.log(xxx);xxxx;" // 要被包裹成 function($event) { console.log(xxx);xxxx; }

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

var genGuard = function genGuard(condition) {
  return 'if(' + condition + ')return null;';
};
// 生成的代码就变成
/*
  function ($event) {
    if ($event.target !== $event.currentTarget) return null;
    if ($event.keyCode !== 13) return null;
  }
*/

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard('$event.target !== $event.currentTarget'),
  ctrl: genGuard('!$event.ctrlKey'),
  shift: genGuard('!$event.shiftKey'),
  alt: genGuard('!$event.altKey'),
  meta: genGuard('!$event.metaKey'),
  left: genGuard('$event.button !== 0'),
  middle: genGuard('$event.button !== 1'),
  right: genGuard('$event.button !== 2')
};

function genHandlers(events, native) {
  var res = native ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += '"' + name + '":' + genHandler(name, events[name]) + ',';
  }
  return res.slice(0, -1) + '}';
}

// v-on:click="clickme"
// name='click'   handler="clickme"
function genHandler(name, handler) {
  if (!handler) {
    return 'function(){}';
  } else if (Array.isArray(handler)) {
    return '[' + handler.map(function (handler) {
      return genHandler(name, handler);
    }).join(',') + ']';
  } else if (!handler.modifiers) {
    // 没有修饰符的话  .stop .prevent .self
    //支持：v-on:click="removeTodo(todo)" 和 v-on:click="xx"
    return fnExpRE.test(handler.value) || simplePathRE.test(handler.value) ? handler.value : 'function($event){' + handler.value + '}';
  } else {
    var code = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        code += modifierCode[key];
      } else {
        keys.push(key);
      }
    }

    /* genKeyFilter(keys) 生成前缀判断条件:
        {
          if ($event.keyCode !== 13 && _k($event.keyCode,"enter", 13)) return null;
        }
    */
    if (keys.length) {
      code = genKeyFilter(keys) + code;
    }
    var handlerCode = simplePathRE.test(handler.value) ? handler.value + '($event)' // v-on:click="xxx" // 生成 xxx($event)
    : handler.value; // v-on:click="console.log(xxx);xxxx;"
    return 'function($event){' + code + handlerCode + '}';
  }
}

function genKeyFilter(keys) {
  return 'if(' + keys.map(genFilterCode).join('&&') + ')return null;';
}

function genFilterCode(key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    // v-on:keydown.10
    return '$event.keyCode!==' + keyVal;
  }
  // v-on:keydown.enter
  var alias = keyCodes[key];
  //
  return '_k($event.keyCode,' + JSON.stringify(key) + (alias ? ',' + JSON.stringify(alias) : '') + ')';
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generate = generate;

var _events = __webpack_require__(18);

var _index = __webpack_require__(9);

var _index2 = _interopRequireDefault(_index);

var _vnode = __webpack_require__(4);

var _vnode2 = _interopRequireDefault(_vnode);

var _debug = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  <div>
    <span name="test">abc{{a}}xxx{{b}}def</span>
    <div v-if="a">a</div>
    <div v-if="b">b</div>
    <ul>
      <li v-for="(item, index) in list">{{index}} : {{item}}</li>
    </ul>
    <button v-on:click="clickme">click me</button>
    <button v-on:click.stop="console.log(1)">click me</button>
    <button v-on:click.stop="clickme">click me</button>
    <button v-on:keydown.enter.10="click">click me</button>

    <!-- 自定义组件 -->
    <my-component></my-component>
  </div>

  生成函数：

  this == Vue实例 == vm

  function render() {
    with (this) {
      return _c('div', undefined, [
        _c('span', {
          attrs: { name : 'test'}
        }, [
          _v("abc" + _s(a) + "xxx" + _s(b) + "def")
        ]),

        // v-if 语句
        a ? _c('div', undefined, [ _v("a") ]) : _e(),
        b ? _c('div', undefined, [ _v("b") ]) : _e(),

        // v-for
        _c('ul',
          _l(
            (list),
            function(item, index) {
              return _c(
                'li',[ _v(_s(index)+" : "+_s(item)) ]
              )
            })
        )

        // v-click    clickme == vm["clickme"].bind(vm)
        _c('button', { on:{"click":clickme} }, [_v("click me")])

        // v-on:click.stop="console.log(1)"
        // click 需要产生一个闭包的handler，.stop等修饰符会作为这个handler的前置条件
        _c('button', { on:{"click": function($event){ $event.stopPropagation(); console.log(1) }}}, [_v("click me")])

        // v-on:click.stop="click"
        // 这种和上边例子的区别在于，click是一个vm的method名字，需要生成$event参数给他
        _c('button', { on:{"click": function($event){ $event.stopPropagation(); click($event) }}}, [_v("click me")])

        // v-on:keydown.enter.10="click"
        // 新增_k方法，用于判断
        _c('button',{on:{"keydown": function($event){
          if($event.keyCode!==10 &&_k($event.keyCode,"enter",13)) return null;
          click($event)
        }}},[_v("click me")])

        //自定义组件
        _c('my-component')
      ])
    }
  }
*/
function generate(ast) {
  var code = ast ? genElement(ast) : '_c("div")';

  return {
    render: "with(this){return " + code + "}"
  };
}

function genElement(el) {
  if (el.for && !el.forProcessed) {
    // 为了v-for和v-if的优先级： <ul v-for="(item, index) in list" v-if="index==0">，需要先处理for语句
    return genFor(el);
  }if (el.if && !el.ifProcessed) {
    return genIf(el);
  } else {
    var code = void 0;
    var children = genChildren(el) || '[]';
    var data = genData(el);

    code = '_c(\'' + el.tag + '\'' + (',' + data // data
    ) + (children ? ',' + children : '' // children
    ) + ')';

    return code;
  }
}

function genIf(el) {
  el.ifProcessed = true; // 标记已经处理过当前这个if节点了，避免递归死循环
  return genIfConditions(el.ifConditions.slice());
}

function genIfConditions(conditions) {
  if (!conditions.length) {
    return '_e()';
  }

  var condition = conditions.shift(); // 因为我们并没有去真正删除 el.ifConditions 队列的元素，所以需要有el.ifProcessed = true来结束递归
  if (condition.exp) {
    return '(' + condition.exp + ')?' + genTernaryExp(condition.block) + ':' + genIfConditions(conditions);
  } else {
    return '' + genTernaryExp(condition.block);
  }

  function genTernaryExp(el) {
    return genElement(el);
  }
}

function genFor(el) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ',' + el.iterator1 : '';
  var iterator2 = el.iterator2 ? ',' + el.iterator2 : '';

  if (!el.key) {
    // v-for 最好声明key属性
    (0, _debug.warn)('<' + el.tag + ' v-for="' + alias + ' in ' + exp + '">: component lists rendered with ' + 'v-for should have explicit keys. ' + 'See https://vuejs.org/guide/list.html#key for more info.', true /* tip */
    );
  }

  // v-for="(item, index) in list"
  // alias = item, iterator1 = index

  // v-for="(value, key, index) in object"
  // alias = value, iterator1 = key, iterator2 = index


  // _l(val, render)
  // val = list
  // render = function (alias, iterator1, iterator2) { return genElement(el) }
  el.forProcessed = true; // avoid recursion
  return '_l((' + exp + '),' + ('function(' + alias + iterator1 + iterator2 + '){') + ('return ' + genElement(el)) + '})';
}

function genData(el) {
  var data = '{';

  // key
  if (el.key) {
    data += 'key:' + el.key + ',';
  }
  if (el.attrs) {
    data += 'attrs:{' + genProps(el.attrs) + '},';
  }
  // DOM props
  if (el.props) {
    data += 'domProps:{' + genProps(el.props) + '},';
  }
  // event handlers
  if (el.events) {
    data += (0, _events.genHandlers)(el.events) + ',';
  }
  if (el.nativeEvents) {
    data += (0, _events.genHandlers)(el.nativeEvents, true) + ',';
  }

  // class
  if (el.staticClass) {
    data += 'staticClass:' + el.staticClass + ',';
  }
  if (el.classBinding) {
    data += 'class:' + el.classBinding + ',';
  }

  data = data.replace(/,$/, '') + '}';

  return data;
}

function genChildren(el) {
  var children = el.children;
  if (children.length) {
    var _el = children[0];

    // 对v-for的情况做处理
    // _c('ul', undefined, [_l(xxx)])  需要把_l提出来外层
    // 还有一些复杂的情况：_c('ul', undefined, [_c('div'), _l(xxx), _c('div')]) 只能在_c里边处理
    if (children.length === 1 && _el.for) {
      return genElement(_el);
    }
    return '[' + children.map(genNode).join(',') + ']';
  }
}

function genNode(node) {
  if (node.type === 1) {
    return genElement(node);
  } else {
    return genText(node);
  }
}

function genText(text) {
  return '_v(' + (text.type === 2 ? text.expression // no need for () because already wrapped in _s()
  : JSON.stringify(text.text)) + ')';
}

function genProps(props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    res += '"' + prop.name + '":' + prop.value + ',';
  }
  return res.slice(0, -1); // 去掉尾巴的逗号
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseHTML = parseHTML;

var _util = __webpack_require__(1);

var _util2 = __webpack_require__(39);

var _compat = __webpack_require__(46);

var singleAttrIdentifier = /([^\s"'<>/=]+)/;
var singleAttrAssign = /(?:=)/;
var singleAttrValues = [
// attr value double quotes
/"([^"]*)"+/.source,
// attr value, single quotes
/'([^']*)'+/.source,
// attr value, no quotes
/([^\s"'=<>`]+)/.source];
var attribute = new RegExp('^\\s*' + singleAttrIdentifier.source + '(?:\\s*(' + singleAttrAssign.source + ')' + '\\s*(?:' + singleAttrValues.join('|') + '))?');

// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
var startTagOpen = new RegExp('^<' + qnameCapture);
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
var doctype = /^<!DOCTYPE [^>]+>/i;
var comment = /^<!--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isScriptOrStyle = (0, _util.makeMap)('script,style', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10);/g;

function decodeAttr(value) {
  var re = _compat.shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) {
    return decodingMap[match];
  });
}

function parseHTML(html, options) {
  /*
    options = {
      chars:  解析到文本的回调
      start:  解析到标签起始的回调
      end:    解析到标签结束的回调
    }
  */
  var stack = [];
  var index = 0;
  var last = void 0,
      lastTag = void 0;

  // advance(N) 负责把当前指向html字符串的指针往后挪动N个位置
  while (html) {
    last = html;
    // 不在style/script标签里边
    if (!lastTag || !isScriptOrStyle(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // 注释
        if (comment.test(html)) {
          // 把指针挪到 "<!-- xxx -->" 后边的位置
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            advance(commentEnd + 3);
            continue;
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        // 条件注释
        if (conditionalComment.test(html)) {
          // 把指针挪到 "<![if expression]> xxx <![endif]>" 后边的位置
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue;
          }
        }

        // Doctype
        var doctypeMatch = html.match(doctype); // doctypeMatch = []
        if (doctypeMatch) {
          // 把指针挪到 "<!DOCTYPE xxxx>" 后边的位置
          advance(doctypeMatch[0].length);
          continue;
        }

        // 标签结束
        var endTagMatch = html.match(endTag); // endTagMatch = []
        if (endTagMatch) {
          // 把指针挪到 "</xxx>" 后边的位置
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index); // 处理一下堆栈信息，回调上层
          continue;
        }

        // 标签起始：<xxx attr="xx">
        var startTagMatch = parseStartTag(); // 处理：标签名字/属性  startTagMatch = { tagName, attrs, start, end, unarySlash }
        if (startTagMatch) {
          handleStartTag(startTagMatch); // 处理：堆栈信息/HTML容错，回调上层
          continue;
        }
      }

      // 到这里就是处理文本节点了。
      var text = void 0,
          _rest = void 0,
          next = void 0;
      if (textEnd >= 0) {
        // 如果之后的字符串还包含 '<' ， 那么把当前指针到textEnd位置的字符串生成文本节点，回调上层
        _rest = html.slice(textEnd);
        while (!endTag.test(_rest) && !startTagOpen.test(_rest) && !comment.test(_rest) && !conditionalComment.test(_rest)) {
          next = _rest.indexOf('<', 1);
          if (next < 0) break;
          textEnd += next;
          _rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        // 之后的字符串不包含 '<' ，那剩余整个字符串都是文本节点了
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      // lastTag 要么是 script style noscript
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var endTagLength = 0;
      var rest = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (options.chars) {
          options.chars(text);
        }
        return '';
      });
      index += html.length - rest.length;
      html = rest;
      parseEndTag(stackedTag, index - endTagLength, index); // 闭合一下 script style noscript 标签
    }

    if (html === last) {
      // 如果处理完毕之后 字符串指针仍然没有挪动，那就把剩余字符串作为文本节点 跳出解析
      options.chars && options.chars(html);
      if (!stack.length && options.warn) {
        // 如果栈顶存在元素，说明没有闭合，给出warn
        options.warn('Mal-formatted tag at end of template: "' + html + '"');
      }
      break;
    }
  }

  // 把堆栈里边没闭合的标签闭合
  parseEndTag();

  function advance(n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag() {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);

      // 解析属性
      var end = void 0,
          attr = void 0;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match;
      }
    }
  }

  function handleStartTag(match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (lastTag === 'p' && (0, _util2.isNonPhrasingTag)(tagName)) {
      // p标签里边不允许嵌某些标签，如果遇到这种情况，p标签就提前闭合
      parseEndTag(lastTag);
    }
    if ((0, _util2.canBeLeftOpenTag)(tagName) && lastTag === tagName) {
      // 像li这种可以可以忽略闭合标签，例如 <li>xx<li>abc</li> 等同于 <li>xx</li><li>abc</li>
      parseEndTag(tagName);
    }

    var unary = (0, _util2.isUnaryTag)(tagName) || tagName === 'html' && lastTag === 'head' || !!unarySlash; // 单标签

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') {
          delete args[3];
        }
        if (args[4] === '') {
          delete args[4];
        }
        if (args[5] === '') {
          delete args[5];
        }
      }
      var value = args[3] || args[4] || args[5] || '';
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value)
      };
    }

    if (!unary) {
      // 不是单标签的话 就压入堆栈
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag(tagName, start, end) {
    var pos = void 0,
        lowerCasedTagName = void 0;
    if (start == null) start = index;
    if (end == null) end = index;

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    if (tagName) {
      // 从堆栈中找到和当前结束标签匹配的起始标签。
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break;
        }
      }
    } else {
      // 准备清理所有堆栈
      pos = 0;
    }

    if (pos >= 0) {
      // 把还没闭合的标签 全部闭合处理
      for (var i = stack.length - 1; i >= pos; i--) {
        if ((i > pos || !tagName) && options.warn) {
          // 存在没闭合标签，给出warn
          options.warn('tag <' + stack[i].tag + '> has no matching end tag.');
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      // 单独出现 </br> 标签 直接处理成 <br>
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      // 单独出现 </p> 标签 直接处理成 <p></p>
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    } else {
      // 如果找不到匹配的起始标签，那么就直接忽略此结束标签
    }
  }
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forIteratorRE = exports.forAliasRE = exports.dirRE = undefined;
exports.parse = parse;

var _htmlParser = __webpack_require__(20);

var _textParser = __webpack_require__(22);

var _debug = __webpack_require__(2);

var _attrs = __webpack_require__(16);

var _element = __webpack_require__(7);

var dirRE = exports.dirRE = /^v-|^@|^:/;
var forAliasRE = exports.forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
var forIteratorRE = exports.forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;
var bindRE = /^:|^v-bind:/;
var onRE = /^@|^v-on:/;
var modifierRE = /\.[^.]+/g;

function makeAttrsMap(attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    map[attrs[i].name] = attrs[i].value;
  }
  return map;
}

function decode(html) {
  var decoder = document.createElement('div');
  decoder.innerHTML = html;
  return decoder.textContent;
}

/**
 * 把HTML字符串转成AST结构
 * ast = { attrsList, attrsMap, children, parent, tag, type=1 } // 非文本节点
 * ast = { text, type=3 } // 文本节点
 *
 * 在AST树 ： if else-if else的多个token节点会合成一个节点，if节点里边包含 [{exp:'if判断条件', block:<if的ast节点>}, {exp:'else-if判断条件', block:<else-if的ast节点>, {block:<else的ast节点>}]
 */
function parse(template) {
  var stack = [];
  var root = void 0; // ast的根节点
  var currentParent = void 0; // 当前节点的父亲节点
  var inPre = false;

  function endPre(element) {
    if ((0, _element.isPreTag)(element.tag)) {
      inPre = false;
    }
  }

  (0, _htmlParser.parseHTML)(template, {
    warn: _debug.warn,
    start: function start(tag, attrs, unary) {
      var element = {
        type: 1,
        tag: tag,
        attrsList: attrs,
        attrsMap: makeAttrsMap(attrs),
        parent: currentParent,
        children: []
      };

      if ((0, _element.isPreTag)(element.tag)) {
        inPre = true;
      }

      element.plain = !element.key && !attrs.length;

      processFor(element);
      processIf(element);
      processKey(element);

      processClass(element);
      processAttrs(element);

      if (!root) {
        root = element;
      } else if (!stack.length) {
        if (root.if && (element.elseif || element.else)) {
          // root = <div v-if=""></div><div v-else-if=""></div><div v-else></div>
          // 允许root是由if else-if else组织的多节点
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else {
          // 否则根节点只能有一个，给出warn
          (0, _debug.warn)('Component template should contain exactly one root element. ' + 'If you are using v-if on multiple elements, ' + 'use v-else-if to chain them instead.');
        }
      }
      if (currentParent) {
        if (element.elseif || element.else) {
          // 处理非root节点的 else-if else
          processIfConditions(element, currentParent);
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        // 如果不是单标签，就压入堆栈
        currentParent = element;
        stack.push(element);
      } else {
        // 闭合一下pre标签
        endPre(element);
      }
    },
    end: function end() {
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        // 把孩子节点中最后一个空白节点删掉
        element.children.pop();
      }

      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      endPre(element);
    },
    chars: function chars(text) {
      if (!currentParent) {
        if (text === template) {
          // 传入的template不应该是纯文本节点
          (0, _debug.warn)('Component template requires a root element, rather than just text.');
        }
        return;
      }
      var children = currentParent.children;
      text = inPre || text.trim() ? decode(text) : children.length ? ' ' : ''; // 如果文本节点为多个空格，同时所在的父亲节点含有其他孩子节点，那么要生成一个单空格的文本节点
      if (text) {
        var expression = void 0;
        if (text !== ' ' && (expression = (0, _textParser.parseText)(text))) {
          // 表达式节点
          children.push({
            type: 2,
            expression: expression,
            text: text
          });
        } else {
          // 文本节点
          children.push({
            type: 3,
            text: text
          });
        }
      }
    }
  });
  return root;
}

function processKey(el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    el.key = exp;
  }
}

function processFor(el) {
  var exp = void 0;
  if (exp = getAndRemoveAttr(el, 'v-for')) {
    var inMatch = exp.match(forAliasRE);
    // v-for="item in list"             =>     ["item in list", "item", "list"]
    // v-for="(item, index) in list"    =>     ["(item, index) in list", "(item, index)", "list"]
    // v-for="(value, key, index) in object"    =>     ["(value, key, index) in object", "(value, key, index)", "object"]

    if (!inMatch) {
      // v-for语法有错误的时候，提示编译错误
      (0, _debug.warn)('Invalid v-for expression: ' + exp);
      return;
    }
    el.for = inMatch[2].trim();
    var alias = inMatch[1].trim();
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      // v-for="(item, index) in list"  或者 // v-for="(value, key, index) in object"
      el.alias = iteratorMatch[1].trim();
      el.iterator1 = iteratorMatch[2].trim();
      if (iteratorMatch[3]) {
        el.iterator2 = iteratorMatch[3].trim();
      }
    } else {
      el.alias = alias; // alias = "item"
    }
  }
}

function processIf(el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

// v-else-if v-else要找到上一个if节点
// 把当前的表达式插入到
function processIfConditions(el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    //上个节点是if节点，把表达式插入到该节点的ifCondition队列去
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else {
    // 找不到上一个if节点，需要报错
    (0, _debug.warn)('v-' + (el.elseif ? 'else-if="' + el.elseif + '"' : 'else') + ' ' + ('used on element <' + el.tag + '> without corresponding v-if.'));
  }
}

function findPrevElement(children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i];
    } else {
      if (children[i].text !== ' ') {
        // 在if和else几点中间不要有其他非空白的文本节点
        (0, _debug.warn)('text "' + children[i].text.trim() + '" between v-if and v-else(-if) ' + 'will be ignored.');
      }
      children.pop();
    }
  }
}

function addIfCondition(el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processClass(el) {
  var staticClass = getAndRemoveAttr(el, 'class');
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function processAttrs(el) {
  var list = el.attrsList;
  var i = void 0,
      l = void 0,
      name = void 0,
      value = void 0,
      modifiers = void 0;
  for (i = 0, l = list.length; i < l; i++) {
    name = list[i].name;
    value = list[i].value;

    if (dirRE.test(name)) {
      // v-xxx :xxx 开头的
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }

      if (bindRE.test(name)) {
        // :xxx 开头
        name = name.replace(bindRE, '');
        if ((0, _attrs.mustUseProp)(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) {
        // v-on开头  v-on:click="xxxx"
        name = name.replace(onRE, ''); // name='click'  value="xxxx"
        addHandler(el, name, value, modifiers);
      }
    } else {
      addAttr(el, name, JSON.stringify(value));
    }
  }
}

function addProp(el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
}

function addAttr(el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
}

function getBindingAttr(el, name, getStatic) {
  var dynamicValue = getAndRemoveAttr(el, ':' + name);
  if (dynamicValue != null) {
    return dynamicValue;
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue);
    }
  }
}

function getAndRemoveAttr(el, name) {
  var val = void 0;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break;
      }
    }
  }
  return val;
}

function addHandler(el, name, value, modifiers) {
  // check capture modifier
  if (modifiers && modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers && modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }

  var events = void 0;
  if (modifiers && modifiers.native) {
    // 原生事件
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }
  var newHandler = { value: value, modifiers: modifiers };
  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    handlers.push(newHandler);
  } else if (handlers) {
    events[name] = [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }
}

function parseModifiers(name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) {
      ret[m.slice(1)] = true;
    });
    return ret;
  }
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseText = parseText;
var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;

function parseText(text) {
  // text = "abc{{a}}xxx{{b}}def"  ->   tokens = ["abc", _s(a)", "xx", "_s(b)", "def"]
  var tagRE = defaultTagRE;
  if (!tagRE.test(text)) {
    return;
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match = void 0,
      index = void 0;
  while (match = tagRE.exec(text)) {
    index = match.index;
    // push text token
    // push("abc")  push("xxx")
    if (index > lastIndex) {
      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
    }
    // tag token
    // push("_s(a)")  push("_s(b)")
    var exp = match[1].trim();
    tokens.push('_s(' + exp + ')');
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    // push("def")
    tokens.push(JSON.stringify(text.slice(lastIndex)));
  }
  return tokens.join('+');
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initExtend = initExtend;

var _index = __webpack_require__(0);

function initExtend(Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0; // 类id
  var cid = 1;

  /**
   * Class inheritance
   */

  /*
     var Sub = Vue.extend(options1)
     var subvm = new Sub(options2)
       subvm.options = merge options2 into options1
  */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;

    // 缓存起来，避免后续又生成一个新的构造器
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId];
    }

    var Sub = function VueComponent(options) {
      // see core/indestance/index.js 和Vue构造器逻辑一致
      this._init(options);
    };

    var name = extendOptions.name || Super.options.name; // 自定义组件的名字
    {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        (0, _index.warn)('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characters and the hyphen, ' + 'and must start with a letter.');
      }
    }

    // 继承
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;

    // 把默认的extendOptions和父亲的options merge之后 记录在当前的构造器上，等真正 _init调用的时候再动态merge options
    Sub.options = (0, _index.mergeOptions)(Super.options, extendOptions);

    // 记录基类
    Sub['super'] = Super;

    // 子类依旧可以继续生成子类 extend
    Sub.extend = Super.extend;

    // enable recursive self-lookup
    // 把组件名字注册进去
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // 防止父类的options有更新，需要在_init的时候再检查一次是否有update
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;

    // 缓存起来，避免后续又生成一个新的构造器
    cachedCtors[SuperId] = Sub;
    return Sub;
  };

  Vue.component = function (name, extendOptions) {
    if ((0, _index.isPlainObject)(extendOptions)) {
      extendOptions.name = extendOptions.name || name;
      Vue.extend(extendOptions);
    }
  };
} /* @flow */

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initGlobalAPI = initGlobalAPI;

var _extend = __webpack_require__(23);

var _index = __webpack_require__(3);

var _index2 = __webpack_require__(0);

function initGlobalAPI(Vue) {

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: _index2.warn
  };

  Vue.set = _index.set;
  Vue.delete = _index.del;

  Vue.options = Object.create(null);
  Vue.options.components = Object.create(null); // 当前vm类所注册的组件名字

  (0, _extend.initExtend)(Vue);
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _init = __webpack_require__(11);

var _state = __webpack_require__(13);

var _render = __webpack_require__(12);

var _events = __webpack_require__(10);

var _lifecycle = __webpack_require__(5);

var _index = __webpack_require__(0);

function Vue(options) {
  if (!(this instanceof Vue)) {
    (0, _index.warn)('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

(0, _init.initMixin)(Vue);
(0, _state.stateMixin)(Vue);
(0, _events.eventsMixin)(Vue);
(0, _render.renderMixin)(Vue);
(0, _lifecycle.lifecycleMixin)(Vue);

exports.default = Vue;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkKeyCodes = checkKeyCodes;
/**
 * Runtime helper for checking keyCodes from config.
 */
// _k($event.keyCode,"enter",13)
function checkKeyCodes(eventKeyCode, key, builtInAlias) {
  var keyCodes = builtInAlias;
  if (Array.isArray(keyCodes)) {
    return keyCodes.indexOf(eventKeyCode) === -1;
  } else {
    return keyCodes !== eventKeyCode;
  }
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderList = renderList;

var _index = __webpack_require__(0);

// v-for="(item, index) in list"
// alias = item, iterator1 = index

// v-for="(value, key, index) in object"
// alias = value, iterator1 = key, iterator2 = index

// val = list
// render = function (alias, iterator1, iterator2) { return VNode }
function renderList(val, render) {
  var ret = void 0,
      i = void 0,
      l = void 0,
      keys = void 0,
      key = void 0;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    // 支持 v-for="n in 10"
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if ((0, _index.isObject)(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  return ret;
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayMethods = undefined;

var _index = __webpack_require__(0);

var arrayProto = Array.prototype; /*
                                   * not type checking this file because flow doesn't play well with
                                   * dynamically accessing methods on Array prototype
                                   */

var arrayMethods = exports.arrayMethods = Object.create(arrayProto)

/**
 * Intercept mutating methods and emit events
 */
;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  (0, _index.def)(arrayMethods, method, function mutator() {
    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
      args[i] = arguments[i];
    }
    var result = original.apply(this, args); // 调用原方法
    var ob = this.__ob__;
    var inserted = void 0;
    switch (method) {
      case 'push':
        inserted = args;
        break;
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2);
        break;
    }
    if (inserted) ob.observeArray(inserted);
    // notify change
    // set操作要 notify
    ob.dep.notify();
    return result;
  });
});

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.isNative = isNative;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// can we use __proto__?
var hasProto = exports.hasProto = '__proto__' in {};

/* istanbul ignore next */
function isNative(Ctor) {
  return (/native code/.test(Ctor.toString())
  );
}

var _Set = void 0;
if (typeof Set !== 'undefined' && isNative(Set)) {
  exports._Set = _Set = Set;
} else {
  // Set polyfill
  // 搞个简单的Set polyfill
  exports._Set = _Set = function () {
    function Set() {
      _classCallCheck(this, Set);

      this.set = Object.create(null);
    }

    _createClass(Set, [{
      key: 'has',
      value: function has(key) {
        return this.set[key] === true;
      }
    }, {
      key: 'add',
      value: function add(key) {
        this.set[key] = true;
      }
    }, {
      key: 'clear',
      value: function clear() {
        this.set = Object.create(null);
      }
    }]);

    return Set;
  }();
}

exports._Set = _Set;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isReserved = isReserved;
exports.def = def;
exports.parsePath = parsePath;
/**
 * Check if a string starts with $ or _
 */
function isReserved(str) {
  // '$' (charCode) 0x24
  // '_' (charCode) 0x5F
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}

/**
 * Define a property.
 */
function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath(path) {
  if (bailRE.test(path)) {
    return;
  } else {
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) return;
        obj = obj[segments[i]];
      }
      return obj;
    };
  }
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeOptions = mergeOptions;
exports.resolveAsset = resolveAsset;

var _debug = __webpack_require__(2);

var _index = __webpack_require__(3);

var _util = __webpack_require__(1);

var strats = Object.create(null);

strats.el = function (parent, child, vm, key) {
  if (!vm) {
    (0, _debug.warn)('option "' + key + '" can only be used during instance ' + 'creation with the `new` keyword.');
  }
  return defaultStrat(parent, child);
};

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData(to, from) {
  if (!from) return to;
  var key = void 0,
      toVal = void 0,
      fromVal = void 0;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!(0, _util.hasOwn)(to, key)) {
      (0, _index.set)(to, key, fromVal);
    } else if ((0, _util.isPlainObject)(toVal) && (0, _util.isPlainObject)(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to;
}

/**
 * Data
 */
strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    // Vue.extend(options) 时候进入此分支merge
    if (!childVal) {
      return parentVal;
    }
    if (typeof childVal !== 'function') {
      // Vue.extend的options.data必须是一个函数
      (0, _debug.warn)('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
      return parentVal;
    }
    if (!parentVal) {
      return childVal;
    }
    // 返回依旧是一个 data()
    // 组件共享了同一个 data，所以需要data工厂方法来生成不同的data
    return function mergedDataFn() {
      return mergeData(childVal.call(this), parentVal.call(this));
    };
  } else if (parentVal || childVal) {
    // new Sub(option1) 的时候会mergeOption进入此分支merge
    return function mergedInstanceDataFn() {
      // instance merge
      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
};

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
// 需要把watcher都合并到一起
strats.watch = function (parentVal, childVal) {
  /* istanbul ignore if */
  if (!childVal) return Object.create(parentVal || null);
  if (!parentVal) return childVal;
  var ret = {};
  (0, _util.extend)(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent ? parent.concat(child) : [child];
  }
  return ret;
};

/**
 * Other object hashes.
 */
strats.methods = strats.computed = function (parentVal, childVal) {
  if (!childVal) return Object.create(parentVal || null);
  if (!parentVal) return childVal;
  var ret = Object.create(null);
  (0, _util.extend)(ret, parentVal);
  (0, _util.extend)(ret, childVal);
  return ret;
};

/**
 * Default strategy.
 */
var defaultStrat = function defaultStrat(parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions(parent, child, vm) {

  var options = {};
  var key = void 0;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!(0, _util.hasOwn)(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField(key) {
    // 特殊的key需要特殊的拷贝方法 拷贝方法放置在strats里边
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options;
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
// 从options里边找到对应的值
function resolveAsset(options, type, id, warnMissing) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return;
  }

  // options 有继承关系

  var assets = options[type];
  // check local registration variations first
  if ((0, _util.hasOwn)(assets, id)) return assets[id];
  // fallback to prototype chain
  var res = assets[id];
  if (warnMissing && !res) {
    (0, _debug.warn)('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }
  return res;
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.validateProp = validateProp;

var _util = __webpack_require__(1);

var _index = __webpack_require__(3);

var _debug = __webpack_require__(2);

function validateProp(key, propOptions, propsData, vm) {
  // prop = { type: Object, default: function () { return { message: 'hello' } } },
  // propsData 是runtime数据
  var prop = propOptions[key];
  var absent = !(0, _util.hasOwn)(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    // 如果
    if (absent && !(0, _util.hasOwn)(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === (0, _util.hyphenate)(key))) {
      // 对于 checked="checked" 这类情况，我们往往要把dom.checked = true
      // 所以只要此时 value==hyphenate(key) 我们就认为这类情况要设置成true
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    // 从prop.default去拿数据
    value = getPropDefaultValue(vm, prop, key);
    (0, _index.observe)(value); // default的function返回可能会有this.xx的引用，所以需要订阅
  }

  // 验证prop数据
  assertProp(prop, key, value, vm, absent);
  return value;
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue(vm, prop, key) {
  // no default, return undefined
  if (!(0, _util.hasOwn)(prop, 'default')) {
    return undefined;
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ((0, _util.isObject)(def)) {
    // default不应该是一个数组或者对象，避免共享数据
    (0, _debug.warn)('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
    return vm._props[key];
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
}

/**
 * Assert whether a prop is valid.
 */
function assertProp(prop, name, value, vm, absent) {
  if (prop.required && absent) {
    // 必填字段
    (0, _debug.warn)('Missing required prop: "' + name + '"', vm);
    return;
  }
  if (value == null && !prop.required) {
    return;
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    // type支持数组 : [String, Number],
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    (0, _debug.warn)('Invalid prop: type check failed for prop "' + name + '".' + ' Expected ' + expectedTypes.map(_util.capitalize).join(', ') + ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.', vm);
    return;
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      (0, _debug.warn)('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
    }
  }
}

/**
 * Assert the type of a value
 */
function assertType(value, type) {
  var valid = void 0;
  var expectedType = getType(type);
  if (expectedType === 'String') {
    valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === (expectedType = 'string');
  } else if (expectedType === 'Number') {
    valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === (expectedType = 'number');
  } else if (expectedType === 'Boolean') {
    valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === (expectedType = 'boolean');
  } else if (expectedType === 'Function') {
    valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === (expectedType = 'function');
  } else if (expectedType === 'Object') {
    valid = (0, _util.isPlainObject)(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  };
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType(fn) {
  // fn = String, String.toString = "function String() { [native code] }"
  // match[1] = "String"
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match && match[1];
}

function isType(type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type);
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true;
    }
  }
  return false;
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createComponent = createComponent;
exports.createComponentInstanceForVnode = createComponentInstanceForVnode;
exports.init = init;
exports.prepatch = prepatch;

var _vnode = __webpack_require__(4);

var _vnode2 = _interopRequireDefault(_vnode);

var _init = __webpack_require__(11);

var _lifecycle = __webpack_require__(5);

var _index = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 在_c('my-component')时调用createComponent生成vnode
// 通过Vue.extend出来的孩子构造器生成vnode
function createComponent(Ctor, data, context, children, tag) {
  if (!Ctor) {
    return;
  }

  if (typeof Ctor !== 'function') {
    (0, _index.warn)('Invalid Component definition: ' + String(Ctor), context);
    return;
  }

  // 重新merge一下options
  (0, _init.resolveConstructorOptions)(Ctor);

  data = data || {};

  // 得到父亲传给孩子的属性
  var propsData = extractProps(data, Ctor);

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  // 把当前子组件上声明的v-on收集起来：<my-component :a="a" b="asd" @abc="abc">
  var listeners = data.on;
  // replace with listeners with .native modifier
  // 把<my-component @click.native="nativeClic"> 这类修复成data.on上的，这样才能绑定原生事件在子组件的root上
  data.on = data.nativeOn;

  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;

  // 生成一个特殊的vnode 带有
  var vnode = new _vnode2.default('vue-component-' + Ctor.cid + (name ? '-' + name : ''), data, undefined, undefined, undefined, context, { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children });
  return vnode;
}

function createComponentInstanceForVnode(vnode, parentElm, refElm) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentListeners: vnodeComponentOptions.listeners, // 声明在孩子组件的v-on:xx其实是父亲的method
    _parentElm: parentElm || null,
    _refElm: refElm || null

    // 通过构造器生成子组件vm实例
  };return new vnodeComponentOptions.Ctor(options);
}

// initComponentAndMount和prepatch等操作放在vnode.hook，
// 否则会有循环依赖
var hooks = { init: init, prepatch: prepatch };
var hooksToMerge = Object.keys(hooks);

// 在patch createElem的时候创建组件
// 原来的initComponentAndMount 改名为 init
function init(vnode, parentElm, refElm) {
  if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
    var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, parentElm, refElm);
    // 可以看到 createComponentInstanceForVnode 已经把要塞入的parentElem 和相对位置 refElme都放到构造器的options参数
    // 这个时候直接 $mount 会触发 子组件vm对象收集依赖 同时触发 _update去patch vnode生成
    // 见 patch.js patch函数的 if (!oldVode) 逻辑。
    child.$mount(vnode.elm || undefined);
  }
}

// 当父亲vnode传递过来的props变化的时候，需要更新组件内部
function prepatch(oldVnode, vnode) {
  var options = vnode.componentOptions;
  var child = vnode.componentInstance = oldVnode.componentInstance; // 直接更新之前的子组件vm的props即可
  (0, _lifecycle.updateChildComponent)(child, options.propsData);
}

function extractProps(data, Ctor) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props; // 拿出构造器的options参数
  if (!propOptions) {
    return;
  }
  var res = {};
  var attrs = data.attrs,
      props = data.props,
      domProps = data.domProps;

  if (attrs || props || domProps) {
    for (var key in propOptions) {
      var altKey = (0, _index.hyphenate)(key);
      // <div MyProp="">  => <div my-prop="">
      // key="altKey"  altKey="my-prop"

      // 从父亲vm的props等
      checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey) || checkProp(res, domProps, key, altKey);
    }
  }
  return res;
}

/*
  检查类型

  props: {
    // 基础类型检测 (`null` 意思是任何类型都可以)
    propA: Number,
    // 多种类型
    propB: [String, Number],
    // 必传且是字符串
    propC: {
      type: String,
      required: true
    },
    // 数字，有默认值
    propD: {
      type: Number,
      default: 100
    },
    // 数组/对象的默认值应当由一个工厂函数返回
    propE: {
      type: Object,
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        return value > 10
      }
    }
  }
*/
function checkProp(res, hash, key, altKey, preserve) {
  // key="altKey"  altKey="my-prop"
  if (hash) {
    if ((0, _index.hasOwn)(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        // 如果从props
        delete hash[key];
      }
      return true;
    } else if ((0, _index.hasOwn)(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true;
    }
  }
  return false;
}

function mergeHooks(data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    data.hook[key] = hooks[key];
  }
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createElementVNode = createElementVNode;

var _vnode = __webpack_require__(4);

var _vnode2 = _interopRequireDefault(_vnode);

var _createComponent = __webpack_require__(33);

var _index = __webpack_require__(35);

var _index2 = __webpack_require__(0);

var _element = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 如果放在vnode.js里边容易引起循环依赖
function createElementVNode(context, tag, data, children) {
  if (!tag) {
    return (0, _vnode.createEmptyVNode)();
  }

  children = (0, _index.simpleNormalizeChildren)(children);

  var vnode = void 0;
  var Ctor = void 0;
  if ((0, _element.isReservedTag)(tag)) {
    // 如果是html原生标签（自定义组件标签不能覆盖原生标签）
    // platform built-in elements
    vnode = new _vnode2.default(tag, data, children, undefined, undefined, context);
  } else if (Ctor = (0, _index2.resolveAsset)(context.$options, 'components', tag)) {
    // 取出该标签对应的构造器，生成VNode
    // 因此需要当前子类构造器的基类，所以要新增context字段
    // 生成组件
    vnode = (0, _createComponent.createComponent)(Ctor, data, context, children, tag);
  } else {
    // unknown or unlisted namespaced elements
    // check at runtime because it may get assigned a namespace when its
    // parent normalizes children
    // 其他自定义标签（交由浏览器自己解析） 例如 <abc></abc>
    vnode = new _vnode2.default(tag, data, children, undefined, undefined, context);
  }

  if (vnode) {
    return vnode;
  } else {
    return (0, _vnode.createEmptyVNode)();
  }
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _normalizeChildren = __webpack_require__(36);

Object.keys(_normalizeChildren).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _normalizeChildren[key];
    }
  });
});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.simpleNormalizeChildren = simpleNormalizeChildren;

// 对v-for的复杂的情况做处理 _c('ul', undefined, [_c('div'), _l(xxx), _c('div')])
// _l(xxx) 返回是一个 [VNode, VNode] 数组
function simpleNormalizeChildren(children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children);
    }
  }
  return children;
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emptyNode = undefined;
exports.default = patch;

var _nodeOps = __webpack_require__(44);

var nodeOps = _interopRequireWildcard(_nodeOps);

var _vnode = __webpack_require__(4);

var _vnode2 = _interopRequireDefault(_vnode);

var _index = __webpack_require__(43);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var emptyNode = exports.emptyNode = new _vnode2.default('', {}, []);

var hooks = ['create', 'update'];

function isUndef(s) {
  return s == null;
}

function isDef(s) {
  return s != null;
}

function sameVnode(vnode1, vnode2) {
  return vnode1.key === vnode2.key && vnode1.tag === vnode2.tag && !vnode1.data === !vnode2.data;
}

// 把所有钩子都放在这里
var i = void 0,
    j = void 0;
var cbs = {};

var modules = _index2.default;

for (i = 0; i < hooks.length; ++i) {
  cbs[hooks[i]] = [];
  for (j = 0; j < modules.length; ++j) {
    if (modules[j][hooks[i]] !== undefined) cbs[hooks[i]].push(modules[j][hooks[i]]);
  }
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i = void 0,
      key = void 0;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) map[key] = i;
  }
  return map;
}

function emptyNodeAt(elm) {
  return new _vnode2.default(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
}

function removeNode(el) {
  var parent = nodeOps.parentNode(el);
  if (parent) {
    nodeOps.removeChild(parent, el);
  }
}

function createElm(vnode, parentElm, refElm) {
  if (createComponent(vnode, parentElm, refElm)) {
    // 如果vnode是特殊的自定义组件节点！
    return;
  }

  var children = vnode.children;
  var tag = vnode.tag;
  if (isDef(tag)) {
    vnode.elm = nodeOps.createElement(tag);

    createChildren(vnode, children);

    // 属性
    /*
    updateAttrs(emptyNode, vnode)
    updateClass(emptyNode, vnode)
    updateDOMProps(emptyNode, vnode)
    updateDOMListeners(emptyNode, vnode)
    */
    invokeCreateHooks(vnode);

    insert(parentElm, vnode.elm, refElm);
  } else {
    // 文本节点
    vnode.elm = nodeOps.createTextNode(vnode.text);
    insert(parentElm, vnode.elm, refElm);
  }
}

function createComponent(vnode, parentElm, refElm) {
  var i = vnode.data;
  if (isDef(i)) {
    if (isDef(i = i.hook) && isDef(i = i.init)) {
      i(vnode, parentElm, refElm);

      if (isDef(vnode.componentInstance)) {
        // 绑定事件
        initComponent(vnode);
        return true;
      }
    }
  }
}

function initComponent(vnode) {
  vnode.elm = vnode.componentInstance.$el;
  if (isPatchable(vnode)) {
    /*
    updateAttrs(emptyNode, vnode)
    updateClass(emptyNode, vnode)
    updateDOMProps(emptyNode, vnode)
    updateDOMListeners(emptyNode, vnode)
    */
    invokeCreateHooks(vnode);
  }
}
function insert(parent, elm, ref) {
  if (parent) {
    if (ref) {
      nodeOps.insertBefore(parent, elm, ref);
    } else {
      nodeOps.appendChild(parent, elm);
    }
  }
}

function isPatchable(vnode) {
  while (vnode.componentInstance) {
    vnode = vnode.componentInstance._vnode;
  }
  return isDef(vnode.tag);
}

function invokeCreateHooks(vnode) {
  for (var _i = 0; _i < cbs.create.length; ++_i) {
    cbs.create[_i](emptyNode, vnode);
  }
  i = vnode.data.hook; // Reuse variable
  if (isDef(i)) {
    if (i.create) i.create(emptyNode, vnode);
  }
}

function createChildren(vnode, children) {
  if (Array.isArray(children)) {
    for (var _i2 = 0; _i2 < children.length; ++_i2) {
      createElm(children[_i2], vnode.elm, null);
    }
  }
}

function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx) {
  for (; startIdx <= endIdx; ++startIdx) {
    createElm(vnodes[startIdx], parentElm, refElm);
  }
}

function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
  for (; startIdx <= endIdx; ++startIdx) {
    var ch = vnodes[startIdx];
    if (isDef(ch)) {
      removeNode(ch.elm);
    }
  }
}

function updateChildren(parentElm, oldCh, newCh, removeOnly) {
  var oldStartIdx = 0;
  var newStartIdx = 0;
  var oldEndIdx = oldCh.length - 1;
  var oldStartVnode = oldCh[0];
  var oldEndVnode = oldCh[oldEndIdx];
  var newEndIdx = newCh.length - 1;
  var newStartVnode = newCh[0];
  var newEndVnode = newCh[newEndIdx];
  var oldKeyToIdx = void 0,
      idxInOld = void 0,
      elmToMove = void 0,
      refElm = void 0;

  var canMove = !removeOnly;

  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (isUndef(oldStartVnode)) {
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (isUndef(oldEndVnode)) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (sameVnode(oldStartVnode, newStartVnode)) {
      patchVnode(oldStartVnode, newStartVnode);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (sameVnode(oldEndVnode, newEndVnode)) {
      patchVnode(oldEndVnode, newEndVnode);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (sameVnode(oldStartVnode, newEndVnode)) {
      patchVnode(oldStartVnode, newEndVnode);
      canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (sameVnode(oldEndVnode, newStartVnode)) {
      patchVnode(oldEndVnode, newStartVnode);
      canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
      idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
      if (isUndef(idxInOld)) {
        // 当前元素在旧VNode里边找不到相同的key
        createElm(newStartVnode, parentElm, oldStartVnode.elm);
        newStartVnode = newCh[++newStartIdx];
      } else {
        elmToMove = oldCh[idxInOld]; // 找到同key的元素

        if (!elmToMove) {
          warn('It seems there are duplicate keys that is causing an update error. ' + 'Make sure each v-for item has a unique key.');
        }
        if (sameVnode(elmToMove, newStartVnode)) {
          patchVnode(elmToMove, newStartVnode); // 先patch这个节点
          oldCh[idxInOld] = undefined;
          canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm); // 然后开始移动
          newStartVnode = newCh[++newStartIdx];
        } else {
          // 虽然是同个key，但是标签等不一致。同样不能复用
          createElm(newStartVnode, parentElm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        }
      }
    }
  }
  if (oldStartIdx > oldEndIdx) {
    refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
    addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx);
  } else if (newStartIdx > newEndIdx) {
    removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
  }
}

function patchVnode(oldVnode, vnode, removeOnly) {
  if (oldVnode === vnode) {
    return;
  }

  var i = void 0;
  var data = vnode.data;
  var hasData = isDef(data);
  var elm = vnode.elm = oldVnode.elm;
  var oldCh = oldVnode.children;
  var ch = vnode.children;

  if (hasData && isDef(i = data.hook) && isDef(i = i.prepatch)) {
    i(oldVnode, vnode);
  }
  // 更新属性
  if (hasData && isPatchable(vnode)) {
    /*
    updateAttrs(oldVnode, vnode)
    updateClass(oldVnode, vnode)
    updateDOMProps(oldVnode, vnode)
    updateDOMListeners(oldVnode, vnode)
    */
    for (i = 0; i < cbs.update.length; ++i) {
      cbs.update[i](oldVnode, vnode);
    }
  }

  if (isUndef(vnode.text)) {
    if (isDef(oldCh) && isDef(ch)) {
      if (oldCh !== ch) updateChildren(elm, oldCh, ch, removeOnly);
    } else if (isDef(ch)) {
      if (isDef(oldVnode.text)) nodeOps.setTextContent(elm, '');
      addVnodes(elm, null, ch, 0, ch.length - 1);
    } else if (isDef(oldCh)) {
      removeVnodes(elm, oldCh, 0, oldCh.length - 1);
    } else if (isDef(oldVnode.text)) {
      nodeOps.setTextContent(elm, '');
    }
  } else if (oldVnode.text !== vnode.text) {
    nodeOps.setTextContent(elm, vnode.text);
  }
}

function patch(oldVnode, vnode, parentElm, refElm) {
  if (!vnode) {
    // 销毁vm的时候 vnode=null
    return;
  }
  var isInitialPatch = false;
  if (!oldVnode) {
    // 说明之前都没挂在过
    // empty mount (likely as component), create new root element
    isInitialPatch = true;
    // 此时vnode这个自定义组件内部生成的root就是 vnode挂在的elm
    // 绑定的原生事件就绑在这个elm上
    createElm(vnode, parentElm, refElm);
  } else {
    // 原来的逻辑
    var isRealElement = isDef(oldVnode.nodeType);
    if (!isRealElement && sameVnode(oldVnode, vnode)) {
      // 如果两个vnode节点根一致
      patchVnode(oldVnode, vnode);
    } else {
      if (isRealElement) {
        oldVnode = emptyNodeAt(oldVnode);
      }
      //既然到了这里 就说明两个vnode的dom的根节点不一样
      //只是拿到原来的dom的容器parentElm，把当前vnode的所有dom生成进去
      //然后把以前的oldVnode全部移除掉
      var oldElm = oldVnode.elm;
      var _parentElm = nodeOps.parentNode(oldElm);
      createElm(vnode, _parentElm, nodeOps.nextSibling(oldElm));

      if (_parentElm !== null) {
        removeVnodes(_parentElm, [oldVnode], 0, 0);
      }
    }
  }

  return vnode.elm;
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(17);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Vue = _index2.default;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNonPhrasingTag = exports.canBeLeftOpenTag = exports.isUnaryTag = undefined;

var _util = __webpack_require__(1);

var isUnaryTag = exports.isUnaryTag = (0, _util.makeMap)('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' + 'link,meta,param,source,track,wbr', true);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = exports.canBeLeftOpenTag = (0, _util.makeMap)('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source', true);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = exports.isNonPhrasingTag = (0, _util.makeMap)('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' + 'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' + 'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' + 'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' + 'title,tr,track', true);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(1);

var _index = __webpack_require__(8);

function updateAttrs(oldVnode, vnode) {
  if (!oldVnode.data.attrs && !vnode.data.attrs) {
    return;
  }
  var key = void 0,
      cur = void 0,
      old = void 0;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }

  for (key in oldAttrs) {
    if (attrs[key] == null) {
      elm.removeAttribute(key);
    }
  }
}

function setAttr(el, key, value) {
  if ((0, _index.isFalsyAttrValue)(value)) {
    el.removeAttribute(key);
  } else {
    el.setAttribute(key, value);
  }
}

exports.default = {
  create: updateAttrs,
  update: updateAttrs
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(8);

// 支持class表达式：
/*
  <!-- class 绑定 -->
  <div :class="{ red: isRed }"></div>
  <div :class="[classA, classB]"></div>
  <div :class="[classA, { classB: isB, classC: isC }]">

  支持class :class同时存在   class对应vNode节点的data.staticClass  :class对应vNode节点的data.class
*/
function updateClass(oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (!data.staticClass && !data.class && (!oldData || !oldData.staticClass && !oldData.class)) {
    return;
  }

  var cls = (0, _index.genClassForVnode)(vnode);

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

exports.default = {
  create: updateClass,
  update: updateClass
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function updateDOMProps(oldVnode, vnode) {
  if (!oldVnode.data.domProps && !vnode.data.domProps) {
    return;
  }
  var key = void 0,
      cur = void 0;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};

  var props = vnode.data.domProps || {};

  for (key in oldProps) {
    if (props[key] == null) {
      elm[key] = '';
    }
  }
  for (key in props) {
    elm[key] = props[key];
  }
}

exports.default = {
  create: updateDOMProps,
  update: updateDOMProps
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _attrs = __webpack_require__(40);

var _attrs2 = _interopRequireDefault(_attrs);

var _class = __webpack_require__(41);

var _class2 = _interopRequireDefault(_class);

var _events = __webpack_require__(15);

var _events2 = _interopRequireDefault(_events);

var _domProps = __webpack_require__(42);

var _domProps2 = _interopRequireDefault(_domProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_attrs2.default, _class2.default, _events2.default, _domProps2.default];

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createElement = createElement;
exports.createTextNode = createTextNode;
exports.createComment = createComment;
exports.insertBefore = insertBefore;
exports.removeChild = removeChild;
exports.appendChild = appendChild;
exports.parentNode = parentNode;
exports.nextSibling = nextSibling;
exports.tagName = tagName;
exports.setTextContent = setTextContent;
exports.setAttribute = setAttribute;
// 真实的dom操作

function createElement(tagName) {
  return document.createElement(tagName);
}

function createTextNode(text) {
  return document.createTextNode(text);
}

function createComment(text) {
  return document.createComment(text);
}

function insertBefore(parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild(node, child) {
  node.removeChild(child);
}

function appendChild(node, child) {
  node.appendChild(child);
}

function parentNode(node) {
  return node.parentNode;
}

function nextSibling(node) {
  return node.nextSibling;
}

function tagName(node) {
  return node.tagName;
}

function setTextContent(node, text) {
  node.textContent = text;
}

function setAttribute(node, key, val) {
  node.setAttribute(key, val);
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genClassForVnode = genClassForVnode;
exports.concat = concat;
exports.stringifyClass = stringifyClass;

var _util = __webpack_require__(1);

function genClassForVnode(vnode) {
  return genClassFromData(vnode.data);
}

function genClassFromData(data) {
  var dynamicClass = data.class; // <div class="a b c">
  var staticClass = data.staticClass; // <div :class="{ d: true, e:false}">
  if (staticClass || dynamicClass) {
    // merge class & :class
    return concat(staticClass, stringifyClass(dynamicClass));
  }
  /* istanbul ignore next */
  return '';
}

function concat(a, b) {
  return a ? b ? a + ' ' + b : a : b || '';
}

function stringifyClass(value) {
  var res = '';
  if (!value) {
    return res;
  }
  if (typeof value === 'string') {
    return value;
  }
  if (Array.isArray(value)) {
    var stringified = void 0;
    for (var i = 0, l = value.length; i < l; i++) {
      if (value[i]) {
        if (stringified = stringifyClass(value[i])) {
          res += stringified + ' ';
        }
      }
    }
    return res.slice(0, -1); // 去除尾巴的空格
  }
  if ((0, _util.isObject)(value)) {
    for (var key in value) {
      if (value[key]) res += key + ' ';
    }
    return res.slice(0, -1); // 去除尾巴的空格
  }
  return res;
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// check whether current browser encodes a char inside attribute values
function shouldDecode(content, encoded) {
  var div = document.createElement('div');
  div.innerHTML = '<div a="' + content + '">';
  return div.innerHTML.indexOf(encoded) > 0;
}

var shouldDecodeNewlines = exports.shouldDecodeNewlines = shouldDecode('\n', '&#10;');

/***/ })
/******/ ]);