module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports=function(t){function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var n={};return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:e})},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},r.p="",r(r.s=2)}([function(t,r,n){"use strict";t.exports.curry=function(t){return"function"!=typeof t?console.log("Curry: No function was provided."):function r(){for(var n=arguments.length,e=Array(n),o=0;o<n;o++)e[o]=arguments[o];return e.length<t.length?function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return r.call.apply(r,[null].concat(e,n))}:t.length?t.call.apply(t,[null].concat(e)):t}}},function(t,r,n){"use strict";var e=n(0).curry,o=function(t){this.__value=t};o.of=function(t){return new o(t)},o.prototype.map=function(t){return o.of(t(this.__value))};var u=function(t){this.__value=t};u.of=function(t){return new u(t)},u.prototype.map=function(){return this};var c=e(function(t,r,n){return n.constructor===u?t(n.__value):r(n.__value)});t.exports.Left=u,t.exports.Right=o,t.exports.either=c},function(t,r,n){"use strict";var e={id:n(3).id,map:n(4).map,prop:n(5).prop,curry:n(0).curry,compose:n(6).compose,Left:n(1).Left,Right:n(1).Right,either:n(1).either,switch:n(7).switch};t.exports=e},function(t,r,n){"use strict";t.exports.id=function(t){return t}},function(t,r,n){"use strict";var e=n(0).curry,o=function(t,r){for(var n=-1,e=null==r?0:r.length,o=new Array(e);++n<e;)o[n]=t(r[n],n,r);return o},u=function(t,r){r=Object(r);var n={};return Object.keys(r).forEach(function(e){n[e]=t(r[e],e,r)}),n};t.exports.map=e(function(t,r){return(r instanceof Array?o:u)(t,r)})},function(t,r,n){"use strict";var e=n(0).curry;t.exports.prop=e(function(t,r){return r[t]})},function(t,r,n){"use strict";t.exports.compose=function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return r.length<1?console.log("Compose: No function was provided."):r.reduce(function(t,r){return function(){return t(r.apply(void 0,arguments))}})}},function(t,r,n){"use strict";var e=n(0).curry,o=function(t){return"function"==typeof t?t():t},u=e(function(t,r){return o(r in t?t[r]:t.default)});t.exports.switch=u}]);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(0);
var debug = process.env.DEBUG;
function log(x) {
    if (debug)
        console.log('DEBUG: ', x);
    return;
}
exports.log = log;
function logError(x) {
    console.log('\x1b[31m' + 'Error: ' + x + '\x1b[0m');
}
exports.logError = logError;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(0);
var cluster = __webpack_require__(3);
var common_1 = __webpack_require__(1);
var processWorker_1 = __webpack_require__(4);
var processMaster_1 = __webpack_require__(6);
var options_1 = __webpack_require__(8);
var runProcess = function (options) { return cluster.isMaster ?
    processMaster_1.processMaster(options, cluster) :
    processWorker_1.processWorker(options); };
module.exports = _.compose(_.either(common_1.logError, runProcess), options_1.loadOptions);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("cluster");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(0);
var common_1 = __webpack_require__(1);
var eventemitter_1 = __webpack_require__(5);
var on = _.curry(function (type, fn) { return process.on(type, fn); });
var msgHandler = _.curry(function (options, msg) { return _.switch({
    'initWorker': function () { return common_1.log('Init Worker'); },
    'initBroker': function () {
        var x = eventemitter_1.eventEmitter();
        var test = function (data) {
            console.log('event executed ', data);
        };
        x.on('event', test);
        x.on('event', function () { });
        x.removeListener('event', test);
        var y = eventemitter_1.eventEmitter();
        x.emit('event', 'hello');
        y.on('event', function () {
            console.log('is y');
        });
        y.emit('event');
        x.emit('event', 'hello');
        common_1.log('Init Broker');
    },
    'default': function () { return common_1.log('default'); }
})(msg.type); });
var errHandler = function () { return function (err) {
    common_1.log(err);
    process.exit();
}; };
var onMessage = _.compose(on('message'), msgHandler);
var onError = _.compose(on('uncaughtException'), errHandler);
function processWorker(options) { return _.compose(onError, onMessage)(options); }
exports.processWorker = processWorker;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(0);
var common_1 = __webpack_require__(1);
function eventEmitter() {
    var events = {};
    var checkIfFunction = function (event, listener) { return typeof listener === 'function' ? _.Right.of({ event: event, listener: listener }) : _.Left.of('Listener must be function'); };
    var listen = function (data) {
        var isEvent = events[data.event];
        isEvent ? isEvent[isEvent.length] = data.listener : events[data.event] = [data.listener];
    };
    var on = _.compose(_.either(common_1.log, listen), checkIfFunction);
    var emit = function (event) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        return events[event] ? _.map(function (x) { return x.call.apply(x, [null].concat(rest)); }, events[event]) : '';
    };
    var removeEvent = function (event) { return events[event] = null; };
    var removeAllEvents = function () { return events = []; };
    var removeListener = function (event, listener) { return _.map(function (currentListener, index, array) {
        currentListener === listener ? array.splice(index, 1) : '';
    }, events[event]); };
    return { on: on, emit: emit, removeListener: removeListener, removeAllEvents: removeAllEvents, removeEvent: removeEvent };
}
exports.eventEmitter = eventEmitter;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(0);
var messages_1 = __webpack_require__(7);
var onExit = function (data) { return data[0].on('exit', data[1]); };
var fork = function (cluster, options, id) { return { cluster: cluster, process: cluster.fork(), options: options, id: id }; };
var launchProcess = _.curry(function (type, data) {
    data.process.send(messages_1.processMessages(type, data.id));
    return [data.process, function () { return data.options.restartOnFail ? type === 'initBroker' ? launchBroker(data.cluster, data.options) : launchWorker(data.cluster, data.options, data.id) : ''; }];
});
var launchBroker = _.compose(onExit, launchProcess('initBroker'), fork);
var launchWorker = _.compose(onExit, launchProcess('initWorker'), fork);
function processMaster(options, cluster) {
    launchBroker(cluster, options);
    for (var i = 0; i < options.workers; i++)
        launchWorker(cluster, options, i);
}
exports.processMaster = processMaster;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function processMessages(type, data) {
    var message = { type: type, data: data };
    return message;
}
exports.processMessages = processMessages;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(0);
function loadOptions(configurations) {
    configurations = configurations || {};
    if (!configurations.worker)
        return _.Left.of('No worker was provided');
    var options = {
        port: configurations.port || 8080,
        worker: configurations.worker,
        workers: configurations.workers || 1,
        brokerPort: configurations.brokerPort || 9346,
        pingInterval: configurations.pingInterval || 20000,
        restartOnFail: configurations.restartWorkerOnFail || false
    };
    return _.Right.of(options);
}
exports.loadOptions = loadOptions;


/***/ })
/******/ ]);