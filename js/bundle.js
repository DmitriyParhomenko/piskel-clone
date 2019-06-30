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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/apply_tool.js":
/*!******************************!*\
  !*** ./src/js/apply_tool.js ***!
  \******************************/
/*! exports provided: applyTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyTool", function() { return applyTool; });
/* harmony import */ var _pencil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pencil */ "./src/js/pencil.js");
/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circle */ "./src/js/circle.js");
/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./square */ "./src/js/square.js");
/* harmony import */ var _pipette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipette */ "./src/js/pipette.js");
/* harmony import */ var _fill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fill */ "./src/js/fill.js");
/* harmony import */ var _eraser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eraser */ "./src/js/eraser.js");
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */







const tools = {
  pencil: _pencil__WEBPACK_IMPORTED_MODULE_0__["pencil"],
  circle: _circle__WEBPACK_IMPORTED_MODULE_1__["circle"],
  square: _square__WEBPACK_IMPORTED_MODULE_2__["square"],
  pipette: _pipette__WEBPACK_IMPORTED_MODULE_3__["pipette"],
  fill: _fill__WEBPACK_IMPORTED_MODULE_4__["fill"],
  eraser: _eraser__WEBPACK_IMPORTED_MODULE_5__["eraser"],
};

function applyTool(e) {
  let canvas;
  const canvases = document.getElementsByClassName('drawing-area')[0].getElementsByTagName('canvas');
  for (let i = 0; i < canvases.length; ++i) {
    if (!canvases[i].hidden) {
      canvas = canvases[i];
    }
  }
  const imgData = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height);

  const props = {
  	pClX: null, // previous ceil x
  	pClY: null, // previous ceil y
  	cClX: null, // currient ceil x
  	cClY: null, // currient ceil y
  	clSize: canvas.width / canvas.dataset.ceilWidth, // ceil size
  	clNum(pos) { // calculate ceil number
  		return Math.floor(pos / this.clSize);
  	},
  };


  if (e.target.tagName === 'canvas') {
    props.pClX = props.clNum(e.offsetX);
    props.pClY = props.cNum(e.offsetY);
  }

  const { tool } = document.querySelector('.tools-container').dataset;
  canvas.onmousemove = function (e) {
    if (tools[tool]){
      tools[tool](e, canvas, props, imgData);
    }
  };

  window.onmouseup = function () {
    canvas.onmousemove = null;
    const dataURL = canvas.toDataURL('image/png');
    const previewListCanvas = document.getElementsByClassName('preview-list-tile');
    for (let i = 0; i < previewListCanvas.length; ++i) {
      if (previewListCanvas[i].dataset.selectPreview === canvas.dataset.selectPreview) {
        previewListCanvas[i].firstElementChild.style.backgroundImage = `url(${dataURL})`;
      }
    }
    window.onmouseup = null;
  };
}




/***/ }),

/***/ "./src/js/change_tool.js":
/*!*******************************!*\
  !*** ./src/js/change_tool.js ***!
  \*******************************/
/*! exports provided: changeTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTool", function() { return changeTool; });
/* eslint-disable import/prefer-default-export */
function changeTool(e) {
  let { target } = e;
  while (target) {
    if (target.tagName === 'LI') {
      this.dataset.tool = target.dataset.toolName;
      break;
    }
    target = target.parentElement;
  }

  const tools = this.children;
  for (let i = 0; i < tools.length; ++i) {
    tools[i].classList.remove('active');
  }

  target.classList.add('active');
}




/***/ }),

/***/ "./src/js/circle.js":
/*!**************************!*\
  !*** ./src/js/circle.js ***!
  \**************************/
/*! exports provided: circle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circle", function() { return circle; });
function circle(e) {

};



/***/ }),

/***/ "./src/js/clone_canvas.js":
/*!********************************!*\
  !*** ./src/js/clone_canvas.js ***!
  \********************************/
/*! exports provided: clonePreviewAndCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clonePreviewAndCanvas", function() { return clonePreviewAndCanvas; });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/js/utilities.js");
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */


const drawingArea = document.querySelector('.drawing-area');

function clonePreviewAndCanvas(e) {
  let { target } = e;
  while (target) {
    if (target.className === 'preview-list-duplicate') {
      const clonedPrew = target.parentElement.parentElement;
      const newPrew = Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["cloneElem"])(clonedPrew);
      clonedPrew.insertAdjacentElement('afterEnd', newPrew);
      const canvases = drawingArea.children;
      for (let i = 0; i < canvases.length; ++i) {
        canvases[i].hidden = true;
      }
      const clonedCanvas = Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["getCanvasFromPrewList"])(clonedPrew);
      const newCanvas = Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["cloneElem"])(clonedCanvas);
      newCanvas.getContext('2d').drawImage(clonedCanvas, 0, 0);
      drawingArea.appendChild(newCanvas);
      newCanvas.hidden = false;
      break;
    }
    target = target.parentElement;
  }
}




/***/ }),

/***/ "./src/js/eraser.js":
/*!**************************!*\
  !*** ./src/js/eraser.js ***!
  \**************************/
/*! exports provided: eraser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eraser", function() { return eraser; });
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ "./src/js/utilities.js");


function eraser(e, canvas, props) {
  props.cClX = props.clNum(e.offsetX);
  props.cClY = props.clNum(e.offsetY);
  if (props.pClX != null && props.pClY != null) {
    if (Math.abs(props.cClX - props.pClX) > 1 || Math.abs(props.cClY - props.pClY) > 1) {
      const ceils = Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__["getCeils"])(props.pClX, props.pClY, props.cClX, props.cClY);
      for (let i = 0; i < ceils.length; ++i) {
        canvas.getContext('2d').clearRect(ceils[i].x * props.clSize, ceils[i].y * props.clSize, props.clSize, props.clSize);
      }
    } else canvas.getContext('2d').clearRect(props.pClX * props.clSize, props.pClY * props.clSize, props.clSize, props.clSize);
  }
  props.pClX = props.clNum(e.offsetX);
  props.pClY = props.clNum(e.offsetY);
};



/***/ }),

/***/ "./src/js/fill.js":
/*!************************!*\
  !*** ./src/js/fill.js ***!
  \************************/
/*! exports provided: fill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fill", function() { return fill; });
function fill(e) {

};



/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _change_tool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change_tool.js */ "./src/js/change_tool.js");
/* harmony import */ var _apply_tool_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apply_tool.js */ "./src/js/apply_tool.js");
/* harmony import */ var _new_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new_canvas */ "./src/js/new_canvas.js");
/* harmony import */ var _clone_canvas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clone_canvas.js */ "./src/js/clone_canvas.js");
/* harmony import */ var _remove_canvas_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./remove_canvas.js */ "./src/js/remove_canvas.js");
/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/named
// import { addOnWheel } from './zoom';






const tools = document.querySelector('.tools-container');
const drawingArea = document.querySelector('.drawing-area');
const newBtnCanvas = document.querySelector('#new_frame');
const listSortable = document.querySelector('.preview-list-sortable');

tools.addEventListener('mousedown', _change_tool_js__WEBPACK_IMPORTED_MODULE_0__["changeTool"], true);
drawingArea.addEventListener('mousedown', _apply_tool_js__WEBPACK_IMPORTED_MODULE_1__["applyTool"], true);
newBtnCanvas.addEventListener('mousedown', _new_canvas__WEBPACK_IMPORTED_MODULE_2__["newPreviewAndCanvas"], true);
listSortable.addEventListener('mousedown', _new_canvas__WEBPACK_IMPORTED_MODULE_2__["selectFrame"], true);
listSortable.addEventListener('mousedown', _clone_canvas_js__WEBPACK_IMPORTED_MODULE_3__["clonePreviewAndCanvas"], true);
listSortable.addEventListener('mousedown', _remove_canvas_js__WEBPACK_IMPORTED_MODULE_4__["removePreviewAndCanvas"], true);


/***/ }),

/***/ "./src/js/new_canvas.js":
/*!******************************!*\
  !*** ./src/js/new_canvas.js ***!
  \******************************/
/*! exports provided: newPreviewAndCanvas, selectFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newPreviewAndCanvas", function() { return newPreviewAndCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFrame", function() { return selectFrame; });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/js/utilities.js");
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable func-names */



const drawingArea = document.querySelector('.drawing-area');

function newPreviewAndCanvas() {
  const newPrew = Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["cloneElem"])(document.getElementById('list').lastElementChild);
  newPrew.firstElementChild.style.backgroundImage = 'none';
  document.getElementById('list').appendChild(newPrew);
  const canvases = drawingArea.children;
  for (let i = 0; i < canvases.length; ++i) {
    canvases[i].hidden = true;
  }
  const newCanvas = Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["cloneElem"])(drawingArea.lastElementChild);
  drawingArea.appendChild(newCanvas);
  newCanvas.hidden = false;
}

const selectFrame = function (event) {
  if (event.target.className === 'tile-view canvas') {
    const prewElem = event.target.parentElement;
    const id = prewElem.dataset.selectPreview; // id in prew list
    const canvases = drawingArea.children;
    for (let i = 0; i < canvases.length; ++i) {
      if (canvases[i].dataset.selectPreview === id) {
        canvases[i].hidden = false;
      } else {
        canvases[i].hidden = true;
      }
    }
  }
};




/***/ }),

/***/ "./src/js/pencil.js":
/*!**************************!*\
  !*** ./src/js/pencil.js ***!
  \**************************/
/*! exports provided: pencil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pencil", function() { return pencil; });
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ "./src/js/utilities.js");


const pencil = function (e, canvas, props) {
  props.cClX = props.clNum(e.offsetX);
  props.cClY = props.clNum(e.offsetY);
  if (props.pClX != null && props.pClY != null) {
    if (Math.abs(props.cClX - props.pClX) > 1 || Math.abs(props.cClY - props.pClY) > 1) {
      const ceils = Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__["getCeils"])(props.pClX, props.pClY, props.cClX, props.cClY);
      for (let i = 0; i < ceils.length; ++i) {
        canvas.getContext('2d').fillRect(ceils[i].x * props.clSize, ceils[i].y * props.clSize, props.clSize, props.clSize);
      }
    } else canvas.getContext('2d').fillRect(props.pClX * props.clSize, props.pClY * props.clSize, props.clSize, props.clSize);
  }
  props.pClX = props.clNum(e.offsetX);
  props.pClY = props.clNum(e.offsetY);
};




/***/ }),

/***/ "./src/js/pipette.js":
/*!***************************!*\
  !*** ./src/js/pipette.js ***!
  \***************************/
/*! exports provided: pipette */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipette", function() { return pipette; });
function pipette(e, canvas, props, imgData) {
	const ctx = canvas.getContext('2d');
	if (props.pClX == null && props.pClY == null) {
		props.pClX = props.clNum(e.offsetX);
		props.pClY = props.clNum(e.offsetY);
	} else {
	  props.cClX = props.clNum(e.offsetX);
		props.cClY = props.clNum(e.offsetY);
		ctx.putImageData(imgData, (props.cClX - props.pClX) * props.clSize, (props.cClY - props.pClY) * props.clSize);
	}
};



/***/ }),

/***/ "./src/js/remove_canvas.js":
/*!*********************************!*\
  !*** ./src/js/remove_canvas.js ***!
  \*********************************/
/*! exports provided: removePreviewAndCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePreviewAndCanvas", function() { return removePreviewAndCanvas; });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/js/utilities.js");


const drawingArea = document.querySelector('.drawing-area');

function removePreviewAndCanvas(e) {
	if (e.target.className === 'preview-list-delete' && e.target.parentElement.parentElement.parentElement.children.length > 1){
		const removedPrew = e.target.parentElement.parentElement;
		removedPrew.remove();
	  const canvases = drawingArea.children;
	  for (let i = 0; i < canvases.length; ++i){
	    canvases[i].hidden = true;
	  }
	  const removedCanvas = Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["getCanvasFromPrewList"])(removedPrew);
	  if (removedCanvas.parentElement.firstElementChild === removedCanvas){
	  	removedCanvas.nextElementSibling.hidden = false;
	  } else {
	  	removedCanvas.previousElementSibling.hidden = false;
	  }
	  removedCanvas.remove();
	}
};



/***/ }),

/***/ "./src/js/square.js":
/*!**************************!*\
  !*** ./src/js/square.js ***!
  \**************************/
/*! exports provided: square */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "square", function() { return square; });
function square(e, canvas, props, imgData) {
	const ctx = canvas.getContext('2d');
	ctx.lineWidth = props.clSize;
	if (props.pClX == null && props.pClY == null) {
		props.pClX = props.clNum(e.offsetX);
		props.pClY = props.clNum(e.offsetY);
	} else {
		ctx.putImageData(imgData, 0, 0);
	  props.cClX = props.clNum(e.offsetX);
		props.cClY = props.clNum(e.offsetY);
		ctx.strokeRect(props.pClX * props.clSize + props.clSize * .5,
									 props.pClY * props.clSize + props.clSize * .5,
								  (props.cClX - props.pClX) * props.clSize,
							    (props.cClY - props.pClY) * props.clSize);
	}
};



/***/ }),

/***/ "./src/js/utilities.js":
/*!*****************************!*\
  !*** ./src/js/utilities.js ***!
  \*****************************/
/*! exports provided: getCeils, getMaxSelectPreview, cloneElem, getCanvasFromPrewList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCeils", function() { return getCeils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMaxSelectPreview", function() { return getMaxSelectPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElem", function() { return cloneElem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCanvasFromPrewList", function() { return getCanvasFromPrewList; });
function getCeils(prevCX, prevCY, curCX, curCY) { // https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC_%D0%91%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%85%D1%8D%D0%BC%D0%B0
  const pixels = [];

  const dx = Math.abs(curCX - prevCX);
  const dy = Math.abs(curCY - prevCY);
  const sx = (prevCX < curCX) ? 1 : -1;
  const sy = (prevCY < curCY) ? 1 : -1;

  let err = dx - dy;

  while (true) {
    pixels.push({ x: prevCX, y: prevCY });
    if ((prevCX === curCX) && (prevCY === curCY)) break;

    const e2 = 2 * err;
    if (e2 > -dy) {
      err -= dy;
      prevCX += sx;
    }
    if (e2 < dx) {
      err += dx;
      prevCY += sy;
    }
  }
  return pixels;
}

function getMaxSelectPreview(elem) {
  return [].reduce.call(elem.parentElement.children, (acc, el) => el.dataset.selectPreview > acc ? +el.dataset.selectPreview : acc, 0);
};

function cloneElem(elem){
  const newElem = elem.cloneNode(true);
  newElem.dataset.selectPreview = getMaxSelectPreview(elem) + 1;
  return newElem;
};

function getCanvasFromPrewList(prewListElem){
  const id = prewListElem.dataset.selectPreview;
  const canvases = document.querySelector('.drawing-area').children;
  for (let i = 0; i < canvases.length; ++i) {
    if (canvases[i].dataset.selectPreview === id) {
      return canvases[i];
    }
  }
}



/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/js/index.js ./src/scss/style.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");
module.exports = __webpack_require__(/*! ./src/scss/style.scss */"./src/scss/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map