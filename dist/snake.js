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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var border = document.getElementById(\"border\");\nvar context = border.getContext(\"2d\");\ndocument.addEventListener(\"keydown\", key);\nvar snakeInterval = setInterval(snake, 1000 / 5);\nalert(\"Get ready to play !\");\nvar snake_x = 0;\nvar snake_y = 0;\nvar trail = [];\nvar tail = 1;\nvar distance = 5;\nvar max = 30;\nvar food_x = 10;\nvar food_y = 10;\nvar player_x = 20;\nvar player_y = 20;\nvar code = 0;\nfunction over() {\n    console.log(\"Game over\");\n    clearInterval(snakeInterval);\n}\nfunction snake() {\n    player_x = player_x + snake_x;\n    player_y = player_y + snake_y;\n    console.log(player_x, player_y, max);\n    if (player_x < 0 || player_y < 0 || player_x >= max || player_y >= max)\n        over();\n    context.fillStyle = \"black\";\n    context.fillRect(0, 0, 500, 500);\n    context.fillStyle = \"lime\";\n    for (var i = 0; i < trail.length; i++) {\n        context.fillRect(trail[i].x * (distance * 2), trail[i].y * distance, distance * 2, distance);\n        if (trail.length > 1 && trail[i].x === player_x && trail[i].y === player_y)\n            over();\n    }\n    trail.push({ x: player_x, y: player_y });\n    while (trail.length > tail)\n        trail.shift();\n    food();\n}\nfunction food() {\n    if (food_x === player_x && food_y === player_y) {\n        tail++;\n        food_x = Math.floor(Math.random() * max);\n        food_y = Math.floor(Math.random() * max);\n    }\n    context.fillStyle = \"red\";\n    context.fillRect(food_x * (distance * 2), food_y * distance, distance * 2, distance);\n}\nfunction key(event) {\n    switch (event.keyCode) {\n        case 37:\n            if (code != 39) {\n                snake_x = -1;\n                snake_y = 0;\n                code = event.keyCode;\n            }\n            break;\n        case 38:\n            if (code != 40) {\n                snake_x = 0;\n                snake_y = -1;\n                code = event.keyCode;\n            }\n            break;\n        case 39:\n            if (code != 37) {\n                snake_x = 1;\n                snake_y = 0;\n                code = event.keyCode;\n            }\n            break;\n        case 40:\n            if (code != 38) {\n                snake_x = 0;\n                snake_y = 1;\n                code = event.keyCode;\n            }\n            break;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/index.tsx?");

/***/ })

/******/ });