(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../pkg/wasm_redux_test.js":
/*!*********************************!*\
  !*** ../pkg/wasm_redux_test.js ***!
  \*********************************/
/*! exports provided: __wbg_call_8ebb2e9cebdce6f5, WrappedBundle, __wbindgen_object_drop_ref, __wbindgen_number_new, __wbindgen_number_get, __wbindgen_is_null, __wbindgen_is_undefined, __wbindgen_boolean_get, __wbindgen_is_symbol, __wbindgen_string_get, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_8ebb2e9cebdce6f5\", function() { return __wbg_call_8ebb2e9cebdce6f5; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WrappedBundle\", function() { return WrappedBundle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_number_new\", function() { return __wbindgen_number_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_number_get\", function() { return __wbindgen_number_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_null\", function() { return __wbindgen_is_null; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return __wbindgen_is_undefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_boolean_get\", function() { return __wbindgen_boolean_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_symbol\", function() { return __wbindgen_is_symbol; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_get\", function() { return __wbindgen_string_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _wasm_redux_test_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_redux_test_bg */ \"../pkg/wasm_redux_test_bg.wasm\");\n/* tslint:disable */\n\n\nconst heap = new Array(32);\n\nheap.fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _wasm_redux_test_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint32Memory = new Uint32Array(_wasm_redux_test_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint32Memory;\n}\n\nfunction __wbg_call_8ebb2e9cebdce6f5(arg0, arg1, arg2, exnptr) {\n    try {\n        return addHeapObject(getObject(arg0).call(getObject(arg1), getObject(arg2)));\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction freeWrappedBundle(ptr) {\n\n    _wasm_redux_test_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_wrappedbundle_free\"](ptr);\n}\n/**\n*/\nclass WrappedBundle {\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n        freeWrappedBundle(ptr);\n    }\n\n    /**\n    * @returns {}\n    */\n    constructor() {\n        this.ptr = _wasm_redux_test_bg__WEBPACK_IMPORTED_MODULE_0__[\"wrappedbundle_new\"]();\n    }\n    /**\n    * @returns {number}\n    */\n    get_state() {\n        return _wasm_redux_test_bg__WEBPACK_IMPORTED_MODULE_0__[\"wrappedbundle_get_state\"](this.ptr);\n    }\n    /**\n    * @returns {void}\n    */\n    increment() {\n        return _wasm_redux_test_bg__WEBPACK_IMPORTED_MODULE_0__[\"wrappedbundle_increment\"](this.ptr);\n    }\n    /**\n    * @returns {void}\n    */\n    decrement() {\n        return _wasm_redux_test_bg__WEBPACK_IMPORTED_MODULE_0__[\"wrappedbundle_decrement\"](this.ptr);\n    }\n    /**\n    * @param {any} arg0\n    * @returns {void}\n    */\n    subscribe(arg0) {\n        return _wasm_redux_test_bg__WEBPACK_IMPORTED_MODULE_0__[\"wrappedbundle_subscribe\"](this.ptr, addHeapObject(arg0));\n    }\n}\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction __wbindgen_object_drop_ref(i) { dropObject(i); }\n\nfunction __wbindgen_number_new(i) { return addHeapObject(i); }\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _wasm_redux_test_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_wasm_redux_test_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction __wbindgen_number_get(n, invalid) {\n    let obj = getObject(n);\n    if (typeof(obj) === 'number') return obj;\n    getUint8Memory()[invalid] = 1;\n    return 0;\n}\n\nfunction __wbindgen_is_null(idx) {\n    return getObject(idx) === null ? 1 : 0;\n}\n\nfunction __wbindgen_is_undefined(idx) {\n    return getObject(idx) === undefined ? 1 : 0;\n}\n\nfunction __wbindgen_boolean_get(i) {\n    let v = getObject(i);\n    if (typeof(v) === 'boolean') {\n        return v ? 1 : 0;\n    } else {\n        return 2;\n    }\n}\n\nfunction __wbindgen_is_symbol(i) {\n    return typeof(getObject(i)) === 'symbol' ? 1 : 0;\n}\n\nlet cachedTextEncoder = new TextEncoder('utf-8');\n\nlet WASM_VECTOR_LEN = 0;\n\nfunction passStringToWasm(arg) {\n\n    const buf = cachedTextEncoder.encode(arg);\n    const ptr = _wasm_redux_test_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](buf.length);\n    getUint8Memory().set(buf, ptr);\n    WASM_VECTOR_LEN = buf.length;\n    return ptr;\n}\n\nfunction __wbindgen_string_get(i, len_ptr) {\n    let obj = getObject(i);\n    if (typeof(obj) !== 'string') return 0;\n    const ptr = passStringToWasm(obj);\n    getUint32Memory()[len_ptr / 4] = WASM_VECTOR_LEN;\n    return ptr;\n}\n\nlet cachedTextDecoder = new TextDecoder('utf-8');\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nfunction __wbindgen_throw(ptr, len) {\n    throw new Error(getStringFromWasm(ptr, len));\n}\n\n\n\n//# sourceURL=webpack:///../pkg/wasm_redux_test.js?");

/***/ }),

/***/ "../pkg/wasm_redux_test_bg.wasm":
/*!**************************************!*\
  !*** ../pkg/wasm_redux_test_bg.wasm ***!
  \**************************************/
/*! exports provided: memory, __wbg_wrappedbundle_free, wrappedbundle_new, wrappedbundle_get_state, wrappedbundle_increment, wrappedbundle_decrement, wrappedbundle_subscribe, __wbindgen_malloc */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./wasm_redux_test */ \"../pkg/wasm_redux_test.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/wasm_redux_test_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wasm_redux_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasm-redux-test */ \"../pkg/wasm_redux_test.js\");\n/* harmony import */ var yo_yo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yo-yo */ \"./node_modules/yo-yo/index.js\");\n/* harmony import */ var yo_yo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yo_yo__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar store = new wasm_redux_test__WEBPACK_IMPORTED_MODULE_0__[\"WrappedBundle\"]()\n\nvar el = document.getElementById('content')\n\nfunction increment () {\n  store.increment()\n}\n\nfunction decrement () {\n  store.decrement()\n}\nfunction Count (count) {\n  return yo_yo__WEBPACK_IMPORTED_MODULE_1__`<div>\n    <h2>The count is: ${count}</h2>\n    <button onclick=${increment}>Increment</button>\n    <button onclick=${decrement}>Decrement</button>\n    </div>`\n}\n\nfunction render (count) {\n  var page = Count(count)\n  yo_yo__WEBPACK_IMPORTED_MODULE_1__[\"update\"](el, page)\n}\n\nrender(store.getState())\n\nstore.subscribe(render)\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///min-document_(ignored)?");

/***/ })

}]);