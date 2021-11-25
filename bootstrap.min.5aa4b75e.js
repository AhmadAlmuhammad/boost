parcelRequire = (function (init) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;
  var modules = {};

  function localRequire(name, jumped) {
    if (name in modules) {
      return modules[name];
    }

    // if we cannot find the module within our internal map or
    // cache jump to the current global require ie. the last bundle
    // that was added to the page.
    var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
    if (!jumped && currentRequire) {
      return currentRequire(name, true);
    }

    // If there are other bundles on this page the require from the
    // previous one is saved to 'previousRequire'. Repeat this as
    // many times as there are bundles until the module is found or
    // we exhaust the require chain.
    if (previousRequire) {
      return previousRequire(name, true);
    }

    // Try the node require function if it exists.
    if (nodeRequire && typeof name === 'string') {
      return nodeRequire(name);
    }

    var err = new Error('Cannot find module \'' + name + '\'');
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  }

  localRequire.register = function register(id, exports) {
    modules[id] = exports;
  };

  modules = init(localRequire);
  localRequire.modules = modules;
  return localRequire;
})(function (require) {
function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function (key) {
    if (key === "default" || key === "__esModule") {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });
  return dest;
}

// ASSET: ..\node_modules\bootstrap\dist\js\bootstrap.min.js
var $a95H$exports = {};
var $a95H$var$define;
/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */

// ASSET: ..\node_modules\@popperjs\core\lib\enums.js
var $XHUo$exports,
    $XHUo$export$top,
    $XHUo$export$bottom,
    $XHUo$export$right,
    $XHUo$export$left,
    $XHUo$export$auto,
    $XHUo$export$basePlacements,
    $XHUo$export$start,
    $XHUo$export$end,
    $XHUo$export$clippingParents,
    $XHUo$export$viewport,
    $XHUo$export$popper,
    $XHUo$export$reference,
    $XHUo$export$variationPlacements,
    $XHUo$export$placements,
    $XHUo$export$beforeRead,
    $XHUo$export$read,
    $XHUo$export$afterRead,
    $XHUo$export$beforeMain,
    $XHUo$export$main,
    $XHUo$export$afterMain,
    $XHUo$export$beforeWrite,
    $XHUo$export$write,
    $XHUo$export$afterWrite,
    $XHUo$export$modifierPhases,
    $XHUo$executed = false;

function $XHUo$init() {
  if ($XHUo$executed) return;
  $XHUo$executed = true;
  $XHUo$exports = {};
  $XHUo$export$top = 'top';
  $XHUo$exports.top = $XHUo$export$top;
  $XHUo$export$bottom = 'bottom';
  $XHUo$exports.bottom = $XHUo$export$bottom;
  $XHUo$export$right = 'right';
  $XHUo$exports.right = $XHUo$export$right;
  $XHUo$export$left = 'left';
  $XHUo$exports.left = $XHUo$export$left;
  $XHUo$export$auto = 'auto';
  $XHUo$exports.auto = $XHUo$export$auto;
  $XHUo$export$basePlacements = [$XHUo$export$top, $XHUo$export$bottom, $XHUo$export$right, $XHUo$export$left];
  $XHUo$exports.basePlacements = $XHUo$export$basePlacements;
  $XHUo$export$start = 'start';
  $XHUo$exports.start = $XHUo$export$start;
  $XHUo$export$end = 'end';
  $XHUo$exports.end = $XHUo$export$end;
  $XHUo$export$clippingParents = 'clippingParents';
  $XHUo$exports.clippingParents = $XHUo$export$clippingParents;
  $XHUo$export$viewport = 'viewport';
  $XHUo$exports.viewport = $XHUo$export$viewport;
  $XHUo$export$popper = 'popper';
  $XHUo$exports.popper = $XHUo$export$popper;
  $XHUo$export$reference = 'reference';
  $XHUo$exports.reference = $XHUo$export$reference;
  $XHUo$export$variationPlacements = /*#__PURE__*/$XHUo$export$basePlacements.reduce(function (acc, placement) {
    return acc.concat([placement + "-" + $XHUo$export$start, placement + "-" + $XHUo$export$end]);
  }, []);
  $XHUo$exports.variationPlacements = $XHUo$export$variationPlacements;
  $XHUo$export$placements = /*#__PURE__*/[].concat($XHUo$export$basePlacements, [$XHUo$export$auto]).reduce(function (acc, placement) {
    return acc.concat([placement, placement + "-" + $XHUo$export$start, placement + "-" + $XHUo$export$end]);
  }, []);
  // modifiers that need to read the DOM
  $XHUo$exports.placements = $XHUo$export$placements;
  $XHUo$export$beforeRead = 'beforeRead';
  $XHUo$exports.beforeRead = $XHUo$export$beforeRead;
  $XHUo$export$read = 'read';
  $XHUo$exports.read = $XHUo$export$read;
  $XHUo$export$afterRead = 'afterRead';
  // pure-logic modifiers
  $XHUo$exports.afterRead = $XHUo$export$afterRead;
  $XHUo$export$beforeMain = 'beforeMain';
  $XHUo$exports.beforeMain = $XHUo$export$beforeMain;
  $XHUo$export$main = 'main';
  $XHUo$exports.main = $XHUo$export$main;
  $XHUo$export$afterMain = 'afterMain';
  // modifier with the purpose to write to the DOM (or write into a framework state)
  $XHUo$exports.afterMain = $XHUo$export$afterMain;
  $XHUo$export$beforeWrite = 'beforeWrite';
  $XHUo$exports.beforeWrite = $XHUo$export$beforeWrite;
  $XHUo$export$write = 'write';
  $XHUo$exports.write = $XHUo$export$write;
  $XHUo$export$afterWrite = 'afterWrite';
  $XHUo$exports.afterWrite = $XHUo$export$afterWrite;
  $XHUo$export$modifierPhases = [$XHUo$export$beforeRead, $XHUo$export$read, $XHUo$export$afterRead, $XHUo$export$beforeMain, $XHUo$export$main, $XHUo$export$afterMain, $XHUo$export$beforeWrite, $XHUo$export$write, $XHUo$export$afterWrite];
  $XHUo$exports.modifierPhases = $XHUo$export$modifierPhases;
}

// ASSET: ..\node_modules\@popperjs\core\lib\dom-utils\getNodeName.js
var $B1zX$exports,
    $B1zX$executed = false;

function $B1zX$export$default(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function $B1zX$init() {
  if ($B1zX$executed) return;
  $B1zX$executed = true;
  $B1zX$exports = {};
  $B1zX$exports.default = $B1zX$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\dom-utils\getWindow.js
var $QiNa$exports,
    $QiNa$executed = false;

function $QiNa$export$default(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function $QiNa$init() {
  if ($QiNa$executed) return;
  $QiNa$executed = true;
  $QiNa$exports = {};
  $QiNa$exports.default = $QiNa$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\dom-utils\instanceOf.js
var $wsKO$exports,
    $wsKO$executed = false;

function $wsKO$export$isElement(node) {
  var OwnElement = $QiNa$export$default(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function $wsKO$export$isHTMLElement(node) {
  var OwnElement = $QiNa$export$default(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function $wsKO$export$isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = $QiNa$export$default(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

function $wsKO$init() {
  if ($wsKO$executed) return;
  $wsKO$executed = true;
  $wsKO$exports = {};
  $QiNa$init();
  $wsKO$exports.isShadowRoot = $wsKO$export$isShadowRoot;
  $wsKO$exports.isHTMLElement = $wsKO$export$isHTMLElement;
  $wsKO$exports.isElement = $wsKO$export$isElement;
}

// ASSET: ..\node_modules\@popperjs\core\lib\modifiers\applyStyles.js
var $D2nT$exports,
    $D2nT$export$default,
    $D2nT$executed = false;

// This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow
function $D2nT$var$applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!$wsKO$export$isHTMLElement(element) || !$B1zX$export$default(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function $D2nT$var$effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!$wsKO$export$isHTMLElement(element) || !$B1zX$export$default(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


function $D2nT$init() {
  if ($D2nT$executed) return;
  $D2nT$executed = true;
  $D2nT$exports = {};
  $B1zX$init();
  $wsKO$init();
  $D2nT$export$default = {
    name: 'applyStyles',
    enabled: true,
    phase: 'write',
    fn: $D2nT$var$applyStyles,
    effect: $D2nT$var$effect,
    requires: ['computeStyles']
  };
  $D2nT$exports.default = $D2nT$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\utils\getBasePlacement.js
var $QS9h$exports,
    $QS9h$executed = false;

function $QS9h$export$default(placement) {
  return placement.split('-')[0];
}

function $QS9h$init() {
  if ($QS9h$executed) return;
  $QS9h$executed = true;
  $QS9h$exports = {};
  $XHUo$init();
  $QS9h$exports.default = $QS9h$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\dom-utils\getBoundingClientRect.js
var $W8bA$exports,
    $W8bA$executed = false;

// import { isHTMLElement } from './instanceOf';
function $W8bA$export$default(element, // eslint-disable-next-line unused-imports/no-unused-vars
includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1; // FIXME:
  // `offsetWidth` returns an integer while `getBoundingClientRect`
  // returns a float. This results in `scaleX` or `scaleY` being
  // non-1 when it should be for elements that aren't a full pixel in
  // width or height.
  // if (isHTMLElement(element) && includeScale) {
  //   const offsetHeight = element.offsetHeight;
  //   const offsetWidth = element.offsetWidth;
  //   // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
  //   // Fallback to 1 in case both values are `0`
  //   if (offsetWidth > 0) {
  //     scaleX = rect.width / offsetWidth || 1;
  //   }
  //   if (offsetHeight > 0) {
  //     scaleY = rect.height / offsetHeight || 1;
  //   }
  // }

  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}

function $W8bA$init() {
  if ($W8bA$executed) return;
  $W8bA$executed = true;
  $W8bA$exports = {};
  $W8bA$exports.default = $W8bA$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\dom-utils\getLayoutRect.js
var $wDsK$exports,
    $wDsK$executed = false;

// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.
function $wDsK$export$default(element) {
  var clientRect = $W8bA$export$default(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function $wDsK$init() {
  if ($wDsK$executed) return;
  $wDsK$executed = true;
  $wDsK$exports = {};
  $W8bA$init();
  $wDsK$exports.default = $wDsK$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\dom-utils\contains.js
var $x3Ja$exports,
    $x3Ja$executed = false;

function $x3Ja$export$default(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && $wsKO$export$isShadowRoot(rootNode)) {
    var next = child;

    do {
      if (next && parent.isSameNode(next)) {
        return true;
      } // $FlowFixMe[prop-missing]: need a better way to handle this...


      next = next.parentNode || next.host;
    } while (next);
  } // Give up, the result is false


  return false;
}

function $x3Ja$init() {
  if ($x3Ja$executed) return;
  $x3Ja$executed = true;
  $x3Ja$exports = {};
  $wsKO$init();
  $x3Ja$exports.default = $x3Ja$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\dom-utils\getComputedStyle.js
var $S6rb$exports,
    $S6rb$executed = false;

function $S6rb$export$default(element) {
  return $QiNa$export$default(element).getComputedStyle(element);
}

function $S6rb$init() {
  if ($S6rb$executed) return;
  $S6rb$executed = true;
  $S6rb$exports = {};
  $QiNa$init();
  $S6rb$exports.default = $S6rb$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\dom-utils\isTableElement.js
var $rK11$exports,
    $rK11$executed = false;

function $rK11$export$default(element) {
  return ['table', 'td', 'th'].indexOf($B1zX$export$default(element)) >= 0;
}

function $rK11$init() {
  if ($rK11$executed) return;
  $rK11$executed = true;
  $rK11$exports = {};
  $B1zX$init();
  $rK11$exports.default = $rK11$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\dom-utils\getDocumentElement.js
var $sJcE$exports,
    $sJcE$executed = false;

function $sJcE$export$default(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return (($wsKO$export$isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function $sJcE$init() {
  if ($sJcE$executed) return;
  $sJcE$executed = true;
  $sJcE$exports = {};
  $wsKO$init();
  $sJcE$exports.default = $sJcE$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\dom-utils\getParentNode.js
var $IVKl$exports,
    $IVKl$executed = false;

function $IVKl$export$default(element) {
  if ($B1zX$export$default(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    $wsKO$export$isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    $sJcE$export$default(element) // fallback

  );
}

function $IVKl$init() {
  if ($IVKl$executed) return;
  $IVKl$executed = true;
  $IVKl$exports = {};
  $B1zX$init();
  $sJcE$init();
  $wsKO$init();
  $IVKl$exports.default = $IVKl$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\dom-utils\getOffsetParent.js
var $CUhI$exports,
    $CUhI$executed = false;

function $CUhI$var$getTrueOffsetParent(element) {
  if (!$wsKO$export$isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  $S6rb$export$default(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function $CUhI$var$getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && $wsKO$export$isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = $S6rb$export$default(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = $IVKl$export$default(element);

  while ($wsKO$export$isHTMLElement(currentNode) && ['html', 'body'].indexOf($B1zX$export$default(currentNode)) < 0) {
    var css = $S6rb$export$default(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function $CUhI$export$default(element) {
  var window = $QiNa$export$default(element);
  var offsetParent = $CUhI$var$getTrueOffsetParent(element);

  while (offsetParent && $rK11$export$default(offsetParent) && $S6rb$export$default(offsetParent).position === 'static') {
    offsetParent = $CUhI$var$getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && ($B1zX$export$default(offsetParent) === 'html' || $B1zX$export$default(offsetParent) === 'body' && $S6rb$export$default(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || $CUhI$var$getContainingBlock(element) || window;
}

function $CUhI$init() {
  if ($CUhI$executed) return;
  $CUhI$executed = true;
  $CUhI$exports = {};
  $QiNa$init();
  $B1zX$init();
  $S6rb$init();
  $wsKO$init();
  $rK11$init();
  $IVKl$init();
  $CUhI$exports.default = $CUhI$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\utils\getMainAxisFromPlacement.js
var $PMyK$exports,
    $PMyK$executed = false;

function $PMyK$export$default(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

function $PMyK$init() {
  if ($PMyK$executed) return;
  $PMyK$executed = true;
  $PMyK$exports = {};
  $PMyK$exports.default = $PMyK$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\utils\math.js
var $FuL6$exports,
    $FuL6$export$max,
    $FuL6$export$min,
    $FuL6$export$round,
    $FuL6$executed = false;

function $FuL6$init() {
  if ($FuL6$executed) return;
  $FuL6$executed = true;
  $FuL6$exports = {};
  $FuL6$export$max = Math.max;
  $FuL6$exports.max = $FuL6$export$max;
  $FuL6$export$min = Math.min;
  $FuL6$exports.min = $FuL6$export$min;
  $FuL6$export$round = Math.round;
  $FuL6$exports.round = $FuL6$export$round;
}

// ASSET: ..\node_modules\@popperjs\core\lib\utils\within.js
var $FbIu$exports,
    $FbIu$executed = false;

function $FbIu$export$default(min, value, max) {
  return $FuL6$export$max(min, $FuL6$export$min(value, max));
}

function $FbIu$init() {
  if ($FbIu$executed) return;
  $FbIu$executed = true;
  $FbIu$exports = {};
  $FuL6$init();
  $FbIu$exports.default = $FbIu$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\utils\getFreshSideObject.js
var $a0QL$exports,
    $a0QL$executed = false;

function $a0QL$export$default() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function $a0QL$init() {
  if ($a0QL$executed) return;
  $a0QL$executed = true;
  $a0QL$exports = {};
  $a0QL$exports.default = $a0QL$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\utils\mergePaddingObject.js
var $SCz0$exports,
    $SCz0$executed = false;

function $SCz0$export$default(paddingObject) {
  return Object.assign({}, $a0QL$export$default(), paddingObject);
}

function $SCz0$init() {
  if ($SCz0$executed) return;
  $SCz0$executed = true;
  $SCz0$exports = {};
  $a0QL$init();
  $SCz0$exports.default = $SCz0$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\utils\expandToHashMap.js
var $sYkG$exports,
    $sYkG$executed = false;

function $sYkG$export$default(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

function $sYkG$init() {
  if ($sYkG$executed) return;
  $sYkG$executed = true;
  $sYkG$exports = {};
  $sYkG$exports.default = $sYkG$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\modifiers\arrow.js
var $zJlD$exports,
    $zJlD$var$toPaddingObject,
    $zJlD$export$default,
    $zJlD$executed = false;

function $zJlD$var$arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = $QS9h$export$default(state.placement);
  var axis = $PMyK$export$default(basePlacement);
  var isVertical = [$XHUo$export$left, $XHUo$export$right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = $zJlD$var$toPaddingObject(options.padding, state);
  var arrowRect = $wDsK$export$default(arrowElement);
  var minProp = axis === 'y' ? $XHUo$export$top : $XHUo$export$left;
  var maxProp = axis === 'y' ? $XHUo$export$bottom : $XHUo$export$right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = $CUhI$export$default(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = $FbIu$export$default(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function $zJlD$var$effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if ("production" !== "production") {
    if (!$wsKO$export$isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!$x3Ja$export$default(state.elements.popper, arrowElement)) {
    if ("production" !== "production") {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


function $zJlD$init() {
  if ($zJlD$executed) return;
  $zJlD$executed = true;
  $zJlD$exports = {};
  $QS9h$init();
  $wDsK$init();
  $x3Ja$init();
  $CUhI$init();
  $PMyK$init();
  $FbIu$init();
  $SCz0$init();
  $sYkG$init();
  $XHUo$init();
  $wsKO$init(); // eslint-disable-next-line import/no-unused-modules

  $zJlD$var$toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return $SCz0$export$default(typeof padding !== 'number' ? padding : $sYkG$export$default(padding, $XHUo$export$basePlacements));
  };

  $zJlD$export$default = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: $zJlD$var$arrow,
    effect: $zJlD$var$effect,
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow']
  };
  $zJlD$exports.default = $zJlD$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\utils\getVariation.js
var $auH8$exports,
    $auH8$executed = false;

function $auH8$export$default(placement) {
  return placement.split('-')[1];
}

function $auH8$init() {
  if ($auH8$executed) return;
  $auH8$executed = true;
  $auH8$exports = {};
  $auH8$exports.default = $auH8$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\modifiers\computeStyles.js
var $ebtt$exports,
    $ebtt$var$unsetSides,
    $ebtt$export$default,
    $ebtt$executed = false;

// Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function $ebtt$var$roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: $FuL6$export$round($FuL6$export$round(x * dpr) / dpr) || 0,
    y: $FuL6$export$round($FuL6$export$round(y * dpr) / dpr) || 0
  };
}

function $ebtt$export$mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? $ebtt$var$roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = $XHUo$export$left;
  var sideY = $XHUo$export$top;
  var win = window;

  if (adaptive) {
    var offsetParent = $CUhI$export$default(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === $QiNa$export$default(popper)) {
      offsetParent = $sJcE$export$default(popper);

      if ($S6rb$export$default(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === $XHUo$export$top || (placement === $XHUo$export$left || placement === $XHUo$export$right) && variation === $XHUo$export$end) {
      sideY = $XHUo$export$bottom; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === $XHUo$export$left || (placement === $XHUo$export$top || placement === $XHUo$export$bottom) && variation === $XHUo$export$end) {
      sideX = $XHUo$export$right; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && $ebtt$var$unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function $ebtt$var$computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if ("production" !== "production") {
    var transitionProperty = $S6rb$export$default(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: $QS9h$export$default(state.placement),
    variation: $auH8$export$default(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, $ebtt$export$mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, $ebtt$export$mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


function $ebtt$init() {
  if ($ebtt$executed) return;
  $ebtt$executed = true;
  $ebtt$exports = {};
  $XHUo$init();
  $CUhI$init();
  $QiNa$init();
  $sJcE$init();
  $S6rb$init();
  $QS9h$init();
  $auH8$init();
  $FuL6$init(); // eslint-disable-next-line import/no-unused-modules

  $ebtt$var$unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
  };
  $ebtt$exports.mapToStyles = $ebtt$export$mapToStyles;
  $ebtt$export$default = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: $ebtt$var$computeStyles,
    data: {}
  };
  $ebtt$exports.default = $ebtt$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\modifiers\eventListeners.js
var $psGJ$exports,
    $psGJ$var$passive,
    $psGJ$export$default,
    $psGJ$executed = false;

function $psGJ$var$effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = $QiNa$export$default(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, $psGJ$var$passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, $psGJ$var$passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, $psGJ$var$passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, $psGJ$var$passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


function $psGJ$init() {
  if ($psGJ$executed) return;
  $psGJ$executed = true;
  $psGJ$exports = {};
  $QiNa$init(); // eslint-disable-next-line import/no-unused-modules

  $psGJ$var$passive = {
    passive: true
  };
  $psGJ$export$default = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {},
    effect: $psGJ$var$effect,
    data: {}
  };
  $psGJ$exports.default = $psGJ$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\utils\getOppositePlacement.js
var $M6e4$exports,
    $M6e4$var$hash,
    $M6e4$executed = false;

function $M6e4$export$default(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return $M6e4$var$hash[matched];
  });
}

function $M6e4$init() {
  if ($M6e4$executed) return;
  $M6e4$executed = true;
  $M6e4$exports = {};
  $M6e4$var$hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  $M6e4$exports.default = $M6e4$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\utils\getOppositeVariationPlacement.js
var $lLmA$exports,
    $lLmA$var$hash,
    $lLmA$executed = false;

function $lLmA$export$default(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return $lLmA$var$hash[matched];
  });
}

function $lLmA$init() {
  if ($lLmA$executed) return;
  $lLmA$executed = true;
  $lLmA$exports = {};
  $lLmA$var$hash = {
    start: 'end',
    end: 'start'
  };
  $lLmA$exports.default = $lLmA$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\dom-utils\getWindowScroll.js
var $oJ75$exports,
    $oJ75$executed = false;

function $oJ75$export$default(node) {
  var win = $QiNa$export$default(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function $oJ75$init() {
  if ($oJ75$executed) return;
  $oJ75$executed = true;
  $oJ75$exports = {};
  $QiNa$init();
  $oJ75$exports.default = $oJ75$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\dom-utils\getWindowScrollBarX.js
var $zwcJ$exports,
    $zwcJ$executed = false;

function $zwcJ$export$default(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return $W8bA$export$default($sJcE$export$default(element)).left + $oJ75$export$default(element).scrollLeft;
}

function $zwcJ$init() {
  if ($zwcJ$executed) return;
  $zwcJ$executed = true;
  $zwcJ$exports = {};
  $W8bA$init();
  $sJcE$init();
  $oJ75$init();
  $zwcJ$exports.default = $zwcJ$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\dom-utils\getViewportRect.js
var $E2lw$exports,
    $E2lw$executed = false;

function $E2lw$export$default(element) {
  var win = $QiNa$export$default(element);
  var html = $sJcE$export$default(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + $zwcJ$export$default(element),
    y: y
  };
}

function $E2lw$init() {
  if ($E2lw$executed) return;
  $E2lw$executed = true;
  $E2lw$exports = {};
  $QiNa$init();
  $sJcE$init();
  $zwcJ$init();
  $E2lw$exports.default = $E2lw$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\dom-utils\getDocumentRect.js
var $yEje$exports,
    $yEje$executed = false;

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable
function $yEje$export$default(element) {
  var _element$ownerDocumen;

  var html = $sJcE$export$default(element);
  var winScroll = $oJ75$export$default(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = $FuL6$export$max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = $FuL6$export$max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + $zwcJ$export$default(element);
  var y = -winScroll.scrollTop;

  if ($S6rb$export$default(body || html).direction === 'rtl') {
    x += $FuL6$export$max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function $yEje$init() {
  if ($yEje$executed) return;
  $yEje$executed = true;
  $yEje$exports = {};
  $sJcE$init();
  $S6rb$init();
  $zwcJ$init();
  $oJ75$init();
  $FuL6$init();
  $yEje$exports.default = $yEje$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\dom-utils\isScrollParent.js
var $j3Hf$exports,
    $j3Hf$executed = false;

function $j3Hf$export$default(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = $S6rb$export$default(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function $j3Hf$init() {
  if ($j3Hf$executed) return;
  $j3Hf$executed = true;
  $j3Hf$exports = {};
  $S6rb$init();
  $j3Hf$exports.default = $j3Hf$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\dom-utils\getScrollParent.js
var $Qnrt$exports,
    $Qnrt$executed = false;

function $Qnrt$export$default(node) {
  if (['html', 'body', '#document'].indexOf($B1zX$export$default(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if ($wsKO$export$isHTMLElement(node) && $j3Hf$export$default(node)) {
    return node;
  }

  return $Qnrt$export$default($IVKl$export$default(node));
}

function $Qnrt$init() {
  if ($Qnrt$executed) return;
  $Qnrt$executed = true;
  $Qnrt$exports = {};
  $IVKl$init();
  $j3Hf$init();
  $B1zX$init();
  $wsKO$init();
  $Qnrt$exports.default = $Qnrt$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\dom-utils\listScrollParents.js
var $m3DJ$exports,
    $m3DJ$executed = false;

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/
function $m3DJ$export$default(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = $Qnrt$export$default(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = $QiNa$export$default(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], $j3Hf$export$default(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat($m3DJ$export$default($IVKl$export$default(target)));
}

function $m3DJ$init() {
  if ($m3DJ$executed) return;
  $m3DJ$executed = true;
  $m3DJ$exports = {};
  $Qnrt$init();
  $IVKl$init();
  $QiNa$init();
  $j3Hf$init();
  $m3DJ$exports.default = $m3DJ$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\utils\rectToClientRect.js
var $rB0G$exports,
    $rB0G$executed = false;

function $rB0G$export$default(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function $rB0G$init() {
  if ($rB0G$executed) return;
  $rB0G$executed = true;
  $rB0G$exports = {};
  $rB0G$exports.default = $rB0G$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\dom-utils\getClippingRect.js
var $M7BJ$exports,
    $M7BJ$executed = false;

function $M7BJ$var$getInnerBoundingClientRect(element) {
  var rect = $W8bA$export$default(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function $M7BJ$var$getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === $XHUo$export$viewport ? $rB0G$export$default($E2lw$export$default(element)) : $wsKO$export$isHTMLElement(clippingParent) ? $M7BJ$var$getInnerBoundingClientRect(clippingParent) : $rB0G$export$default($yEje$export$default($sJcE$export$default(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function $M7BJ$var$getClippingParents(element) {
  var clippingParents = $m3DJ$export$default($IVKl$export$default(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf($S6rb$export$default(element).position) >= 0;
  var clipperElement = canEscapeClipping && $wsKO$export$isHTMLElement(element) ? $CUhI$export$default(element) : element;

  if (!$wsKO$export$isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return $wsKO$export$isElement(clippingParent) && $x3Ja$export$default(clippingParent, clipperElement) && $B1zX$export$default(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function $M7BJ$export$default(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? $M7BJ$var$getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = $M7BJ$var$getClientRectFromMixedType(element, clippingParent);
    accRect.top = $FuL6$export$max(rect.top, accRect.top);
    accRect.right = $FuL6$export$min(rect.right, accRect.right);
    accRect.bottom = $FuL6$export$min(rect.bottom, accRect.bottom);
    accRect.left = $FuL6$export$max(rect.left, accRect.left);
    return accRect;
  }, $M7BJ$var$getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function $M7BJ$init() {
  if ($M7BJ$executed) return;
  $M7BJ$executed = true;
  $M7BJ$exports = {};
  $XHUo$init();
  $E2lw$init();
  $yEje$init();
  $m3DJ$init();
  $CUhI$init();
  $sJcE$init();
  $S6rb$init();
  $wsKO$init();
  $W8bA$init();
  $IVKl$init();
  $x3Ja$init();
  $B1zX$init();
  $rB0G$init();
  $FuL6$init();
  $M7BJ$exports.default = $M7BJ$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\utils\computeOffsets.js
var $dvfD$exports,
    $dvfD$executed = false;

function $dvfD$export$default(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? $QS9h$export$default(placement) : null;
  var variation = placement ? $auH8$export$default(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case $XHUo$export$top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case $XHUo$export$bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case $XHUo$export$right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case $XHUo$export$left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? $PMyK$export$default(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case $XHUo$export$start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case $XHUo$export$end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}

function $dvfD$init() {
  if ($dvfD$executed) return;
  $dvfD$executed = true;
  $dvfD$exports = {};
  $QS9h$init();
  $auH8$init();
  $PMyK$init();
  $XHUo$init();
  $dvfD$exports.default = $dvfD$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\utils\detectOverflow.js
var $Moke$exports,
    $Moke$executed = false;

// eslint-disable-next-line import/no-unused-modules
function $Moke$export$default(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? $XHUo$export$clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? $XHUo$export$viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? $XHUo$export$popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = $SCz0$export$default(typeof padding !== 'number' ? padding : $sYkG$export$default(padding, $XHUo$export$basePlacements));
  var altContext = elementContext === $XHUo$export$popper ? $XHUo$export$reference : $XHUo$export$popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = $M7BJ$export$default($wsKO$export$isElement(element) ? element : element.contextElement || $sJcE$export$default(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = $W8bA$export$default(state.elements.reference);
  var popperOffsets = $dvfD$export$default({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = $rB0G$export$default(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === $XHUo$export$popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === $XHUo$export$popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [$XHUo$export$right, $XHUo$export$bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [$XHUo$export$top, $XHUo$export$bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

function $Moke$init() {
  if ($Moke$executed) return;
  $Moke$executed = true;
  $Moke$exports = {};
  $M7BJ$init();
  $sJcE$init();
  $W8bA$init();
  $dvfD$init();
  $rB0G$init();
  $XHUo$init();
  $wsKO$init();
  $SCz0$init();
  $sYkG$init();
  $Moke$exports.default = $Moke$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\utils\computeAutoPlacement.js
var $HhJi$exports,
    $HhJi$executed = false;

function $HhJi$export$default(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? $XHUo$export$placements : _options$allowedAutoP;
  var variation = $auH8$export$default(placement);
  var placements = variation ? flipVariations ? $XHUo$export$variationPlacements : $XHUo$export$variationPlacements.filter(function (placement) {
    return $auH8$export$default(placement) === variation;
  }) : $XHUo$export$basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if ("production" !== "production") {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = $Moke$export$default(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[$QS9h$export$default(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function $HhJi$init() {
  if ($HhJi$executed) return;
  $HhJi$executed = true;
  $HhJi$exports = {};
  $auH8$init();
  $XHUo$init();
  $Moke$init();
  $QS9h$init();
  $HhJi$exports.default = $HhJi$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\modifiers\flip.js
var $rNoN$exports,
    $rNoN$export$default,
    $rNoN$executed = false;

// eslint-disable-next-line import/no-unused-modules
function $rNoN$var$getExpandedFallbackPlacements(placement) {
  if ($QS9h$export$default(placement) === $XHUo$export$auto) {
    return [];
  }

  var oppositePlacement = $M6e4$export$default(placement);
  return [$lLmA$export$default(placement), oppositePlacement, $lLmA$export$default(oppositePlacement)];
}

function $rNoN$var$flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = $QS9h$export$default(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [$M6e4$export$default(preferredPlacement)] : $rNoN$var$getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat($QS9h$export$default(placement) === $XHUo$export$auto ? $HhJi$export$default(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = $QS9h$export$default(placement);

    var isStartVariation = $auH8$export$default(placement) === $XHUo$export$start;
    var isVertical = [$XHUo$export$top, $XHUo$export$bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = $Moke$export$default(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? $XHUo$export$right : $XHUo$export$left : isStartVariation ? $XHUo$export$bottom : $XHUo$export$top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = $M6e4$export$default(mainVariationSide);
    }

    var altVariationSide = $M6e4$export$default(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


function $rNoN$init() {
  if ($rNoN$executed) return;
  $rNoN$executed = true;
  $rNoN$exports = {};
  $M6e4$init();
  $QS9h$init();
  $lLmA$init();
  $Moke$init();
  $HhJi$init();
  $XHUo$init();
  $auH8$init();
  $rNoN$export$default = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: $rNoN$var$flip,
    requiresIfExists: ['offset'],
    data: {
      _skip: false
    }
  };
  $rNoN$exports.default = $rNoN$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\modifiers\hide.js
var $jhaw$exports,
    $jhaw$export$default,
    $jhaw$executed = false;

function $jhaw$var$getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function $jhaw$var$isAnySideFullyClipped(overflow) {
  return [$XHUo$export$top, $XHUo$export$right, $XHUo$export$bottom, $XHUo$export$left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function $jhaw$var$hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = $Moke$export$default(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = $Moke$export$default(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = $jhaw$var$getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = $jhaw$var$getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = $jhaw$var$isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = $jhaw$var$isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


function $jhaw$init() {
  if ($jhaw$executed) return;
  $jhaw$executed = true;
  $jhaw$exports = {};
  $XHUo$init();
  $Moke$init();
  $jhaw$export$default = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: ['preventOverflow'],
    fn: $jhaw$var$hide
  };
  $jhaw$exports.default = $jhaw$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\modifiers\offset.js
var $aUNc$exports,
    $aUNc$export$default,
    $aUNc$executed = false;

function $aUNc$export$distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = $QS9h$export$default(placement);
  var invertDistance = [$XHUo$export$left, $XHUo$export$top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [$XHUo$export$left, $XHUo$export$right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function $aUNc$var$offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = $XHUo$export$placements.reduce(function (acc, placement) {
    acc[placement] = $aUNc$export$distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


function $aUNc$init() {
  if ($aUNc$executed) return;
  $aUNc$executed = true;
  $aUNc$exports = {};
  $QS9h$init();
  $XHUo$init();
  $aUNc$exports.distanceAndSkiddingToXY = $aUNc$export$distanceAndSkiddingToXY;
  $aUNc$export$default = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: ['popperOffsets'],
    fn: $aUNc$var$offset
  };
  $aUNc$exports.default = $aUNc$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\modifiers\popperOffsets.js
var $Pf8x$exports,
    $Pf8x$export$default,
    $Pf8x$executed = false;

function $Pf8x$var$popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name; // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step

  state.modifiersData[name] = $dvfD$export$default({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


function $Pf8x$init() {
  if ($Pf8x$executed) return;
  $Pf8x$executed = true;
  $Pf8x$exports = {};
  $dvfD$init();
  $Pf8x$export$default = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: $Pf8x$var$popperOffsets,
    data: {}
  };
  $Pf8x$exports.default = $Pf8x$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\utils\getAltAxis.js
var $YGKJ$exports,
    $YGKJ$executed = false;

function $YGKJ$export$default(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function $YGKJ$init() {
  if ($YGKJ$executed) return;
  $YGKJ$executed = true;
  $YGKJ$exports = {};
  $YGKJ$exports.default = $YGKJ$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\modifiers\preventOverflow.js
var $RwXk$exports,
    $RwXk$export$default,
    $RwXk$executed = false;

function $RwXk$var$preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = $Moke$export$default(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = $QS9h$export$default(state.placement);
  var variation = $auH8$export$default(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = $PMyK$export$default(basePlacement);
  var altAxis = $YGKJ$export$default(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? $XHUo$export$top : $XHUo$export$left;
    var altSide = mainAxis === 'y' ? $XHUo$export$bottom : $XHUo$export$right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === $XHUo$export$start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === $XHUo$export$start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? $wDsK$export$default(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : $a0QL$export$default();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = $FbIu$export$default(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && $CUhI$export$default(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = $FbIu$export$default(tether ? $FuL6$export$min(min, tetherMin) : min, offset, tether ? $FuL6$export$max(max, tetherMax) : max);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? $XHUo$export$top : $XHUo$export$left;

      var _altSide = mainAxis === 'x' ? $XHUo$export$bottom : $XHUo$export$right;

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = $FbIu$export$default(tether ? $FuL6$export$min(_min, tetherMin) : _min, _offset, tether ? $FuL6$export$max(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


function $RwXk$init() {
  if ($RwXk$executed) return;
  $RwXk$executed = true;
  $RwXk$exports = {};
  $XHUo$init();
  $QS9h$init();
  $PMyK$init();
  $YGKJ$init();
  $FbIu$init();
  $wDsK$init();
  $CUhI$init();
  $Moke$init();
  $auH8$init();
  $a0QL$init();
  $FuL6$init();
  $RwXk$export$default = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: $RwXk$var$preventOverflow,
    requiresIfExists: ['offset']
  };
  $RwXk$exports.default = $RwXk$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\modifiers\index.js
var $TOq4$executed = false;

function $TOq4$init() {
  if ($TOq4$executed) return;
  $TOq4$executed = true;
}

// ASSET: ..\node_modules\@popperjs\core\lib\dom-utils\getHTMLElementScroll.js
var $uy7N$exports,
    $uy7N$executed = false;

function $uy7N$export$default(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function $uy7N$init() {
  if ($uy7N$executed) return;
  $uy7N$executed = true;
  $uy7N$exports = {};
  $uy7N$exports.default = $uy7N$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\dom-utils\getNodeScroll.js
var $Cbix$exports,
    $Cbix$executed = false;

function $Cbix$export$default(node) {
  if (node === $QiNa$export$default(node) || !$wsKO$export$isHTMLElement(node)) {
    return $oJ75$export$default(node);
  } else {
    return $uy7N$export$default(node);
  }
}

function $Cbix$init() {
  if ($Cbix$executed) return;
  $Cbix$executed = true;
  $Cbix$exports = {};
  $oJ75$init();
  $QiNa$init();
  $wsKO$init();
  $uy7N$init();
  $Cbix$exports.default = $Cbix$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\dom-utils\getCompositeRect.js
var $FCaM$exports,
    $FCaM$executed = false;

function $FCaM$var$isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = rect.width / element.offsetWidth || 1;
  var scaleY = rect.height / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function $FCaM$export$default(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = $wsKO$export$isHTMLElement(offsetParent);
  var offsetParentIsScaled = $wsKO$export$isHTMLElement(offsetParent) && $FCaM$var$isElementScaled(offsetParent);
  var documentElement = $sJcE$export$default(offsetParent);
  var rect = $W8bA$export$default(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if ($B1zX$export$default(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    $j3Hf$export$default(documentElement)) {
      scroll = $Cbix$export$default(offsetParent);
    }

    if ($wsKO$export$isHTMLElement(offsetParent)) {
      offsets = $W8bA$export$default(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = $zwcJ$export$default(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function $FCaM$init() {
  if ($FCaM$executed) return;
  $FCaM$executed = true;
  $FCaM$exports = {};
  $W8bA$init();
  $Cbix$init();
  $B1zX$init();
  $wsKO$init();
  $zwcJ$init();
  $sJcE$init();
  $j3Hf$init();
  $FCaM$exports.default = $FCaM$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\utils\orderModifiers.js
var $mxvt$exports,
    $mxvt$executed = false;

// source: https://stackoverflow.com/questions/49875255
function $mxvt$var$order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function $mxvt$export$default(modifiers) {
  // order based on dependencies
  var orderedModifiers = $mxvt$var$order(modifiers); // order based on phase

  return $XHUo$export$modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function $mxvt$init() {
  if ($mxvt$executed) return;
  $mxvt$executed = true;
  $mxvt$exports = {};
  $XHUo$init();
  $mxvt$exports.default = $mxvt$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\utils\debounce.js
var $mGsv$exports,
    $mGsv$executed = false;

function $mGsv$export$default(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function $mGsv$init() {
  if ($mGsv$executed) return;
  $mGsv$executed = true;
  $mGsv$exports = {};
  $mGsv$exports.default = $mGsv$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\utils\format.js
var $JD7L$exports,
    $JD7L$executed = false;

function $JD7L$export$default(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

function $JD7L$init() {
  if ($JD7L$executed) return;
  $JD7L$executed = true;
  $JD7L$exports = {};
  $JD7L$exports.default = $JD7L$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\utils\validateModifiers.js
var $nr2q$exports,
    $nr2q$var$INVALID_MODIFIER_ERROR,
    $nr2q$var$MISSING_DEPENDENCY_ERROR,
    $nr2q$var$VALID_PROPERTIES,
    $nr2q$executed = false;

function $nr2q$export$default(modifiers) {
  modifiers.forEach(function (modifier) {
    [].concat(Object.keys(modifier), $nr2q$var$VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
    .filter(function (value, index, self) {
      return self.indexOf(value) === index;
    }).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error($JD7L$export$default($nr2q$var$INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error($JD7L$export$default($nr2q$var$INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

          break;

        case 'phase':
          if ($XHUo$export$modifierPhases.indexOf(modifier.phase) < 0) {
            console.error($JD7L$export$default($nr2q$var$INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + $XHUo$export$modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error($JD7L$export$default($nr2q$var$INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (modifier.effect != null && typeof modifier.effect !== 'function') {
            console.error($JD7L$export$default($nr2q$var$INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error($JD7L$export$default($nr2q$var$INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error($JD7L$export$default($nr2q$var$INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + $nr2q$var$VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error($JD7L$export$default($nr2q$var$MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

function $nr2q$init() {
  if ($nr2q$executed) return;
  $nr2q$executed = true;
  $nr2q$exports = {};
  $JD7L$init();
  $XHUo$init();
  $nr2q$var$INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
  $nr2q$var$MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
  $nr2q$var$VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
  $nr2q$exports.default = $nr2q$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\utils\uniqueBy.js
var $AjzX$exports,
    $AjzX$executed = false;

function $AjzX$export$default(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

function $AjzX$init() {
  if ($AjzX$executed) return;
  $AjzX$executed = true;
  $AjzX$exports = {};
  $AjzX$exports.default = $AjzX$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\utils\mergeByName.js
var $pDli$exports,
    $pDli$executed = false;

function $pDli$export$default(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

function $pDli$init() {
  if ($pDli$executed) return;
  $pDli$executed = true;
  $pDli$exports = {};
  $pDli$exports.default = $pDli$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\createPopper.js
var $rg1d$exports,
    $rg1d$var$INVALID_ELEMENT_ERROR,
    $rg1d$var$INFINITE_LOOP_ERROR,
    $rg1d$var$DEFAULT_OPTIONS,
    $rg1d$export$createPopper,
    $rg1d$executed = false;

function $rg1d$var$areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function $rg1d$export$popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? $rg1d$var$DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, $rg1d$var$DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: $wsKO$export$isElement(reference) ? $m3DJ$export$default(reference) : reference.contextElement ? $m3DJ$export$default(reference.contextElement) : [],
          popper: $m3DJ$export$default(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = $mxvt$export$default($pDli$export$default([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if ("production" !== "production") {
          var modifiers = $AjzX$export$default([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          $nr2q$export$default(modifiers);

          if ($QS9h$export$default(state.options.placement) === $XHUo$export$auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = $S6rb$export$default(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!$rg1d$var$areValidElements(reference, popper)) {
          if ("production" !== "production") {
            console.error($rg1d$var$INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: $FCaM$export$default(reference, $CUhI$export$default(popper), state.options.strategy === 'fixed'),
          popper: $wDsK$export$default(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if ("production" !== "production") {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error($rg1d$var$INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: $mGsv$export$default(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!$rg1d$var$areValidElements(reference, popper)) {
      if ("production" !== "production") {
        console.error($rg1d$var$INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

function $rg1d$init() {
  if ($rg1d$executed) return;
  $rg1d$executed = true;
  $rg1d$exports = {};
  $FCaM$init();
  $wDsK$init();
  $m3DJ$init();
  $CUhI$init();
  $S6rb$init();
  $mxvt$init();
  $mGsv$init();
  $nr2q$init();
  $AjzX$init();
  $QS9h$init();
  $pDli$init();
  $Moke$init();
  $wsKO$init();
  $XHUo$init();
  $rg1d$var$INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
  $rg1d$var$INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
  $rg1d$var$DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute'
  };
  $rg1d$exports.popperGenerator = $rg1d$export$popperGenerator;
  $rg1d$export$createPopper = /*#__PURE__*/$rg1d$export$popperGenerator();
  // eslint-disable-next-line import/no-unused-modules
  $rg1d$exports.createPopper = $rg1d$export$createPopper;
  $rg1d$exports.detectOverflow = $Moke$export$default;
}

// ASSET: ..\node_modules\@popperjs\core\lib\popper-lite.js
var $hwU4$exports,
    $hwU4$export$defaultModifiers,
    $hwU4$export$createPopper,
    $hwU4$executed = false;

function $hwU4$init() {
  if ($hwU4$executed) return;
  $hwU4$executed = true;
  $hwU4$exports = {};
  $rg1d$init();
  $psGJ$init();
  $Pf8x$init();
  $ebtt$init();
  $D2nT$init();
  $hwU4$export$defaultModifiers = [$psGJ$export$default, $Pf8x$export$default, $ebtt$export$default, $D2nT$export$default];
  $hwU4$export$createPopper = /*#__PURE__*/$rg1d$export$popperGenerator({
    defaultModifiers: $hwU4$export$defaultModifiers
  });
  // eslint-disable-next-line import/no-unused-modules
  $hwU4$exports.detectOverflow = $Moke$export$default;
  $hwU4$exports.defaultModifiers = $hwU4$export$defaultModifiers;
  $hwU4$exports.popperGenerator = $rg1d$export$popperGenerator;
  $hwU4$exports.createPopper = $hwU4$export$createPopper;
}

// ASSET: ..\node_modules\@popperjs\core\lib\popper.js
var $cujj$exports,
    $cujj$export$defaultModifiers,
    $cujj$export$createPopper,
    $cujj$executed = false;

function $cujj$init() {
  if ($cujj$executed) return;
  $cujj$executed = true;
  $cujj$exports = {};
  $rg1d$init();
  $psGJ$init();
  $Pf8x$init();
  $ebtt$init();
  $D2nT$init();
  $aUNc$init();
  $rNoN$init();
  $RwXk$init();
  $zJlD$init();
  $jhaw$init();
  $hwU4$init();
  $cujj$export$defaultModifiers = [$psGJ$export$default, $Pf8x$export$default, $ebtt$export$default, $D2nT$export$default, $aUNc$export$default, $rNoN$export$default, $RwXk$export$default, $zJlD$export$default, $jhaw$export$default];
  $cujj$export$createPopper = /*#__PURE__*/$rg1d$export$popperGenerator({
    defaultModifiers: $cujj$export$defaultModifiers
  });
  // eslint-disable-next-line import/no-unused-modules
  $cujj$exports.detectOverflow = $Moke$export$default;
  $cujj$exports.defaultModifiers = $cujj$export$defaultModifiers;
  $cujj$exports.popperGenerator = $rg1d$export$popperGenerator;
  $cujj$exports.createPopper = $cujj$export$createPopper;
  $cujj$exports.createPopperLite = $hwU4$export$createPopper; // eslint-disable-next-line import/no-unused-modules

  $parcel$exportWildcard($cujj$exports, ($TOq4$init(), {}));
}

// ASSET: ..\node_modules\@popperjs\core\lib\index.js
var $vePw$exports,
    $vePw$executed = false;

function $vePw$init() {
  if ($vePw$executed) return;
  $vePw$executed = true;
  $vePw$exports = {};
  $rg1d$init();
  $cujj$init();
  $hwU4$init();
  $parcel$exportWildcard($vePw$exports, ($XHUo$init(), $XHUo$exports));
  $parcel$exportWildcard($vePw$exports, ($TOq4$init(), {})); // eslint-disable-next-line import/no-unused-modules

  $vePw$exports.createPopperBase = $rg1d$export$createPopper;
  $vePw$exports.detectOverflow = $Moke$export$default;
  $vePw$exports.popperGenerator = $rg1d$export$popperGenerator;
  $vePw$exports.createPopper = $cujj$export$createPopper;
  $vePw$exports.createPopperLite = $hwU4$export$createPopper;
}

!function (t, e) {
  "object" == typeof $a95H$exports && "undefined" != "object" ? $a95H$exports = e(($vePw$init(), $vePw$exports)) : "function" == typeof $a95H$var$define && $a95H$var$define.amd ? $a95H$var$define(["@popperjs/core"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e(t.Popper);
}($a95H$exports, function (t) {
  function e(t) {
    if (t && t.__esModule) return t;
    const e = Object.create(null);
    if (t) for (const i in t) if ("default" !== i) {
      const s = Object.getOwnPropertyDescriptor(t, i);
      Object.defineProperty(e, i, s.get ? s : {
        enumerable: !0,
        get: () => t[i]
      });
    }
    return e.default = t, Object.freeze(e);
  }

  const i = e(t),
        s = "transitionend",
        n = t => {
    let e = t.getAttribute("data-bs-target");

    if (!e || "#" === e) {
      let i = t.getAttribute("href");
      if (!i || !i.includes("#") && !i.startsWith(".")) return null;
      i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? i.trim() : null;
    }

    return e;
  },
        o = t => {
    const e = n(t);
    return e && document.querySelector(e) ? e : null;
  },
        r = t => {
    const e = n(t);
    return e ? document.querySelector(e) : null;
  },
        a = t => {
    t.dispatchEvent(new Event(s));
  },
        l = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
        c = t => l(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null,
        h = (t, e, i) => {
    Object.keys(i).forEach(s => {
      const n = i[s],
            o = e[s],
            r = o && l(o) ? "element" : null == (a = o) ? `${a}` : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
      var a;
      if (!new RegExp(n).test(r)) throw new TypeError(`${t.toUpperCase()}: Option "${s}" provided type "${r}" but expected type "${n}".`);
    });
  },
        d = t => !(!l(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility"),
        u = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
        g = t => {
    if (!document.documentElement.attachShadow) return null;

    if ("function" == typeof t.getRootNode) {
      const e = t.getRootNode();
      return e instanceof ShadowRoot ? e : null;
    }

    return t instanceof ShadowRoot ? t : t.parentNode ? g(t.parentNode) : null;
  },
        _ = () => {},
        f = t => {
    t.offsetHeight;
  },
        p = () => {
    const {
      jQuery: t
    } = window;
    return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
  },
        m = [],
        b = () => "rtl" === document.documentElement.dir,
        v = t => {
    var e;
    e = () => {
      const e = p();

      if (e) {
        const i = t.NAME,
              s = e.fn[i];
        e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = () => (e.fn[i] = s, t.jQueryInterface);
      }
    }, "loading" === document.readyState ? (m.length || document.addEventListener("DOMContentLoaded", () => {
      m.forEach(t => t());
    }), m.push(e)) : e();
  },
        y = t => {
    "function" == typeof t && t();
  },
        E = (t, e, i = !0) => {
    if (!i) return void y(t);

    const n = (t => {
      if (!t) return 0;
      let {
        transitionDuration: e,
        transitionDelay: i
      } = window.getComputedStyle(t);
      const s = Number.parseFloat(e),
            n = Number.parseFloat(i);
      return s || n ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
    })(e) + 5;

    let o = !1;

    const r = ({
      target: i
    }) => {
      i === e && (o = !0, e.removeEventListener(s, r), y(t));
    };

    e.addEventListener(s, r), setTimeout(() => {
      o || a(e);
    }, n);
  },
        w = (t, e, i, s) => {
    let n = t.indexOf(e);
    if (-1 === n) return t[!i && s ? t.length - 1 : 0];
    const o = t.length;
    return n += i ? 1 : -1, s && (n = (n + o) % o), t[Math.max(0, Math.min(n, o - 1))];
  },
        A = /[^.]*(?=\..*)\.|.*/,
        T = /\..*/,
        C = /::\d+$/,
        k = {};

  let L = 1;
  const S = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  },
        O = /^(mouseenter|mouseleave)/i,
        N = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

  function D(t, e) {
    return e && `${e}::${L++}` || t.uidEvent || L++;
  }

  function I(t) {
    const e = D(t);
    return t.uidEvent = e, k[e] = k[e] || {}, k[e];
  }

  function P(t, e, i = null) {
    const s = Object.keys(t);

    for (let n = 0, o = s.length; n < o; n++) {
      const o = t[s[n]];
      if (o.originalHandler === e && o.delegationSelector === i) return o;
    }

    return null;
  }

  function x(t, e, i) {
    const s = "string" == typeof e,
          n = s ? i : e;
    let o = H(t);
    return N.has(o) || (o = t), [s, n, o];
  }

  function M(t, e, i, s, n) {
    if ("string" != typeof e || !t) return;

    if (i || (i = s, s = null), O.test(e)) {
      const t = t => function (e) {
        if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
      };

      s ? s = t(s) : i = t(i);
    }

    const [o, r, a] = x(e, i, s),
          l = I(t),
          c = l[a] || (l[a] = {}),
          h = P(c, r, o ? i : null);
    if (h) return void (h.oneOff = h.oneOff && n);
    const d = D(r, e.replace(A, "")),
          u = o ? function (t, e, i) {
      return function s(n) {
        const o = t.querySelectorAll(e);

        for (let {
          target: r
        } = n; r && r !== this; r = r.parentNode) for (let a = o.length; a--;) if (o[a] === r) return n.delegateTarget = r, s.oneOff && $.off(t, n.type, e, i), i.apply(r, [n]);

        return null;
      };
    }(t, i, s) : function (t, e) {
      return function i(s) {
        return s.delegateTarget = t, i.oneOff && $.off(t, s.type, e), e.apply(t, [s]);
      };
    }(t, i);
    u.delegationSelector = o ? i : null, u.originalHandler = r, u.oneOff = n, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o);
  }

  function j(t, e, i, s, n) {
    const o = P(e[i], s, n);
    o && (t.removeEventListener(i, o, Boolean(n)), delete e[i][o.uidEvent]);
  }

  function H(t) {
    return t = t.replace(T, ""), S[t] || t;
  }

  const $ = {
    on(t, e, i, s) {
      M(t, e, i, s, !1);
    },

    one(t, e, i, s) {
      M(t, e, i, s, !0);
    },

    off(t, e, i, s) {
      if ("string" != typeof e || !t) return;
      const [n, o, r] = x(e, i, s),
            a = r !== e,
            l = I(t),
            c = e.startsWith(".");

      if (void 0 !== o) {
        if (!l || !l[r]) return;
        return void j(t, l, r, o, n ? i : null);
      }

      c && Object.keys(l).forEach(i => {
        !function (t, e, i, s) {
          const n = e[i] || {};
          Object.keys(n).forEach(o => {
            if (o.includes(s)) {
              const s = n[o];
              j(t, e, i, s.originalHandler, s.delegationSelector);
            }
          });
        }(t, l, i, e.slice(1));
      });
      const h = l[r] || {};
      Object.keys(h).forEach(i => {
        const s = i.replace(C, "");

        if (!a || e.includes(s)) {
          const e = h[i];
          j(t, l, r, e.originalHandler, e.delegationSelector);
        }
      });
    },

    trigger(t, e, i) {
      if ("string" != typeof e || !t) return null;
      const s = p(),
            n = H(e),
            o = e !== n,
            r = N.has(n);
      let a,
          l = !0,
          c = !0,
          h = !1,
          d = null;
      return o && s && (a = s.Event(e, i), s(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (d = document.createEvent("HTMLEvents"), d.initEvent(n, l, !0)) : d = new CustomEvent(e, {
        bubbles: l,
        cancelable: !0
      }), void 0 !== i && Object.keys(i).forEach(t => {
        Object.defineProperty(d, t, {
          get: () => i[t]
        });
      }), h && d.preventDefault(), c && t.dispatchEvent(d), d.defaultPrevented && void 0 !== a && a.preventDefault(), d;
    }

  },
        B = new Map(),
        z = {
    set(t, e, i) {
      B.has(t) || B.set(t, new Map());
      const s = B.get(t);
      s.has(e) || 0 === s.size ? s.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);
    },

    get: (t, e) => B.has(t) && B.get(t).get(e) || null,

    remove(t, e) {
      if (!B.has(t)) return;
      const i = B.get(t);
      i.delete(e), 0 === i.size && B.delete(t);
    }

  };

  class R {
    constructor(t) {
      (t = c(t)) && (this._element = t, z.set(this._element, this.constructor.DATA_KEY, this));
    }

    dispose() {
      z.remove(this._element, this.constructor.DATA_KEY), $.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(t => {
        this[t] = null;
      });
    }

    _queueCallback(t, e, i = !0) {
      E(t, e, i);
    }

    static getInstance(t) {
      return z.get(c(t), this.DATA_KEY);
    }

    static getOrCreateInstance(t, e = {}) {
      return this.getInstance(t) || new this(t, "object" == typeof e ? e : null);
    }

    static get VERSION() {
      return "5.1.3";
    }

    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }

    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }

    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }

  }

  const F = (t, e = "hide") => {
    const i = `click.dismiss${t.EVENT_KEY}`,
          s = t.NAME;
    $.on(document, i, `[data-bs-dismiss="${s}"]`, function (i) {
      if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), u(this)) return;
      const n = r(this) || this.closest(`.${s}`);
      t.getOrCreateInstance(n)[e]();
    });
  };

  class q extends R {
    static get NAME() {
      return "alert";
    }

    close() {
      if ($.trigger(this._element, "close.bs.alert").defaultPrevented) return;

      this._element.classList.remove("show");

      const t = this._element.classList.contains("fade");

      this._queueCallback(() => this._destroyElement(), this._element, t);
    }

    _destroyElement() {
      this._element.remove(), $.trigger(this._element, "closed.bs.alert"), this.dispose();
    }

    static jQueryInterface(t) {
      return this.each(function () {
        const e = q.getOrCreateInstance(this);

        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }

  }

  F(q, "close"), v(q);
  const W = '[data-bs-toggle="button"]';

  class U extends R {
    static get NAME() {
      return "button";
    }

    toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
    }

    static jQueryInterface(t) {
      return this.each(function () {
        const e = U.getOrCreateInstance(this);
        "toggle" === t && e[t]();
      });
    }

  }

  function K(t) {
    return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t);
  }

  function V(t) {
    return t.replace(/[A-Z]/g, t => `-${t.toLowerCase()}`);
  }

  $.on(document, "click.bs.button.data-api", W, t => {
    t.preventDefault();
    const e = t.target.closest(W);
    U.getOrCreateInstance(e).toggle();
  }), v(U);
  const X = {
    setDataAttribute(t, e, i) {
      t.setAttribute(`data-bs-${V(e)}`, i);
    },

    removeDataAttribute(t, e) {
      t.removeAttribute(`data-bs-${V(e)}`);
    },

    getDataAttributes(t) {
      if (!t) return {};
      const e = {};
      return Object.keys(t.dataset).filter(t => t.startsWith("bs")).forEach(i => {
        let s = i.replace(/^bs/, "");
        s = s.charAt(0).toLowerCase() + s.slice(1, s.length), e[s] = K(t.dataset[i]);
      }), e;
    },

    getDataAttribute: (t, e) => K(t.getAttribute(`data-bs-${V(e)}`)),

    offset(t) {
      const e = t.getBoundingClientRect();
      return {
        top: e.top + window.pageYOffset,
        left: e.left + window.pageXOffset
      };
    },

    position: t => ({
      top: t.offsetTop,
      left: t.offsetLeft
    })
  },
        Y = {
    find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
    findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
    children: (t, e) => [].concat(...t.children).filter(t => t.matches(e)),

    parents(t, e) {
      const i = [];
      let s = t.parentNode;

      for (; s && s.nodeType === Node.ELEMENT_NODE && 3 !== s.nodeType;) s.matches(e) && i.push(s), s = s.parentNode;

      return i;
    },

    prev(t, e) {
      let i = t.previousElementSibling;

      for (; i;) {
        if (i.matches(e)) return [i];
        i = i.previousElementSibling;
      }

      return [];
    },

    next(t, e) {
      let i = t.nextElementSibling;

      for (; i;) {
        if (i.matches(e)) return [i];
        i = i.nextElementSibling;
      }

      return [];
    },

    focusableChildren(t) {
      const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(t => `${t}:not([tabindex^="-"])`).join(", ");
      return this.find(e, t).filter(t => !u(t) && d(t));
    }

  },
        Q = "carousel",
        G = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0,
    touch: !0
  },
        Z = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  },
        J = "next",
        tt = "prev",
        et = "left",
        it = "right",
        st = {
    ArrowLeft: it,
    ArrowRight: et
  },
        nt = "slid.bs.carousel",
        ot = "active",
        rt = ".active.carousel-item";

  class at extends R {
    constructor(t, e) {
      super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._indicatorsElement = Y.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners();
    }

    static get Default() {
      return G;
    }

    static get NAME() {
      return Q;
    }

    next() {
      this._slide(J);
    }

    nextWhenVisible() {
      !document.hidden && d(this._element) && this.next();
    }

    prev() {
      this._slide(tt);
    }

    pause(t) {
      t || (this._isPaused = !0), Y.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (a(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }

    cycle(t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }

    to(t) {
      this._activeElement = Y.findOne(rt, this._element);

      const e = this._getItemIndex(this._activeElement);

      if (t > this._items.length - 1 || t < 0) return;
      if (this._isSliding) return void $.one(this._element, nt, () => this.to(t));
      if (e === t) return this.pause(), void this.cycle();
      const i = t > e ? J : tt;

      this._slide(i, this._items[t]);
    }

    _getConfig(t) {
      return t = { ...G,
        ...X.getDataAttributes(this._element),
        ...("object" == typeof t ? t : {})
      }, h(Q, t, Z), t;
    }

    _handleSwipe() {
      const t = Math.abs(this.touchDeltaX);
      if (t <= 40) return;
      const e = t / this.touchDeltaX;
      this.touchDeltaX = 0, e && this._slide(e > 0 ? it : et);
    }

    _addEventListeners() {
      this._config.keyboard && $.on(this._element, "keydown.bs.carousel", t => this._keydown(t)), "hover" === this._config.pause && ($.on(this._element, "mouseenter.bs.carousel", t => this.pause(t)), $.on(this._element, "mouseleave.bs.carousel", t => this.cycle(t))), this._config.touch && this._touchSupported && this._addTouchEventListeners();
    }

    _addTouchEventListeners() {
      const t = t => this._pointerEvent && ("pen" === t.pointerType || "touch" === t.pointerType),
            e = e => {
        t(e) ? this.touchStartX = e.clientX : this._pointerEvent || (this.touchStartX = e.touches[0].clientX);
      },
            i = t => {
        this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX;
      },
            s = e => {
        t(e) && (this.touchDeltaX = e.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(t => this.cycle(t), 500 + this._config.interval));
      };

      Y.find(".carousel-item img", this._element).forEach(t => {
        $.on(t, "dragstart.bs.carousel", t => t.preventDefault());
      }), this._pointerEvent ? ($.on(this._element, "pointerdown.bs.carousel", t => e(t)), $.on(this._element, "pointerup.bs.carousel", t => s(t)), this._element.classList.add("pointer-event")) : ($.on(this._element, "touchstart.bs.carousel", t => e(t)), $.on(this._element, "touchmove.bs.carousel", t => i(t)), $.on(this._element, "touchend.bs.carousel", t => s(t)));
    }

    _keydown(t) {
      if (/input|textarea/i.test(t.target.tagName)) return;
      const e = st[t.key];
      e && (t.preventDefault(), this._slide(e));
    }

    _getItemIndex(t) {
      return this._items = t && t.parentNode ? Y.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t);
    }

    _getItemByOrder(t, e) {
      const i = t === J;
      return w(this._items, e, i, this._config.wrap);
    }

    _triggerSlideEvent(t, e) {
      const i = this._getItemIndex(t),
            s = this._getItemIndex(Y.findOne(rt, this._element));

      return $.trigger(this._element, "slide.bs.carousel", {
        relatedTarget: t,
        direction: e,
        from: s,
        to: i
      });
    }

    _setActiveIndicatorElement(t) {
      if (this._indicatorsElement) {
        const e = Y.findOne(".active", this._indicatorsElement);
        e.classList.remove(ot), e.removeAttribute("aria-current");
        const i = Y.find("[data-bs-target]", this._indicatorsElement);

        for (let e = 0; e < i.length; e++) if (Number.parseInt(i[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
          i[e].classList.add(ot), i[e].setAttribute("aria-current", "true");
          break;
        }
      }
    }

    _updateInterval() {
      const t = this._activeElement || Y.findOne(rt, this._element);
      if (!t) return;
      const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
      e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval;
    }

    _slide(t, e) {
      const i = this._directionToOrder(t),
            s = Y.findOne(rt, this._element),
            n = this._getItemIndex(s),
            o = e || this._getItemByOrder(i, s),
            r = this._getItemIndex(o),
            a = Boolean(this._interval),
            l = i === J,
            c = l ? "carousel-item-start" : "carousel-item-end",
            h = l ? "carousel-item-next" : "carousel-item-prev",
            d = this._orderToDirection(i);

      if (o && o.classList.contains(ot)) return void (this._isSliding = !1);
      if (this._isSliding) return;
      if (this._triggerSlideEvent(o, d).defaultPrevented) return;
      if (!s || !o) return;
      this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(o), this._activeElement = o;

      const u = () => {
        $.trigger(this._element, nt, {
          relatedTarget: o,
          direction: d,
          from: n,
          to: r
        });
      };

      if (this._element.classList.contains("slide")) {
        o.classList.add(h), f(o), s.classList.add(c), o.classList.add(c);

        const t = () => {
          o.classList.remove(c, h), o.classList.add(ot), s.classList.remove(ot, h, c), this._isSliding = !1, setTimeout(u, 0);
        };

        this._queueCallback(t, s, !0);
      } else s.classList.remove(ot), o.classList.add(ot), this._isSliding = !1, u();

      a && this.cycle();
    }

    _directionToOrder(t) {
      return [it, et].includes(t) ? b() ? t === et ? tt : J : t === et ? J : tt : t;
    }

    _orderToDirection(t) {
      return [J, tt].includes(t) ? b() ? t === tt ? et : it : t === tt ? it : et : t;
    }

    static carouselInterface(t, e) {
      const i = at.getOrCreateInstance(t, e);
      let {
        _config: s
      } = i;
      "object" == typeof e && (s = { ...s,
        ...e
      });
      const n = "string" == typeof e ? e : s.slide;
      if ("number" == typeof e) i.to(e);else if ("string" == typeof n) {
        if (void 0 === i[n]) throw new TypeError(`No method named "${n}"`);
        i[n]();
      } else s.interval && s.ride && (i.pause(), i.cycle());
    }

    static jQueryInterface(t) {
      return this.each(function () {
        at.carouselInterface(this, t);
      });
    }

    static dataApiClickHandler(t) {
      const e = r(this);
      if (!e || !e.classList.contains("carousel")) return;
      const i = { ...X.getDataAttributes(e),
        ...X.getDataAttributes(this)
      },
            s = this.getAttribute("data-bs-slide-to");
      s && (i.interval = !1), at.carouselInterface(e, i), s && at.getInstance(e).to(s), t.preventDefault();
    }

  }

  $.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", at.dataApiClickHandler), $.on(window, "load.bs.carousel.data-api", () => {
    const t = Y.find('[data-bs-ride="carousel"]');

    for (let e = 0, i = t.length; e < i; e++) at.carouselInterface(t[e], at.getInstance(t[e]));
  }), v(at);
  const lt = "collapse",
        ct = {
    toggle: !0,
    parent: null
  },
        ht = {
    toggle: "boolean",
    parent: "(null|element)"
  },
        dt = "show",
        ut = "collapse",
        gt = "collapsing",
        _t = "collapsed",
        ft = ":scope .collapse .collapse",
        pt = '[data-bs-toggle="collapse"]';

  class mt extends R {
    constructor(t, e) {
      super(t), this._isTransitioning = !1, this._config = this._getConfig(e), this._triggerArray = [];
      const i = Y.find(pt);

      for (let t = 0, e = i.length; t < e; t++) {
        const e = i[t],
              s = o(e),
              n = Y.find(s).filter(t => t === this._element);
        null !== s && n.length && (this._selector = s, this._triggerArray.push(e));
      }

      this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
    }

    static get Default() {
      return ct;
    }

    static get NAME() {
      return lt;
    }

    toggle() {
      this._isShown() ? this.hide() : this.show();
    }

    show() {
      if (this._isTransitioning || this._isShown()) return;
      let t,
          e = [];

      if (this._config.parent) {
        const t = Y.find(ft, this._config.parent);
        e = Y.find(".collapse.show, .collapse.collapsing", this._config.parent).filter(e => !t.includes(e));
      }

      const i = Y.findOne(this._selector);

      if (e.length) {
        const s = e.find(t => i !== t);
        if (t = s ? mt.getInstance(s) : null, t && t._isTransitioning) return;
      }

      if ($.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
      e.forEach(e => {
        i !== e && mt.getOrCreateInstance(e, {
          toggle: !1
        }).hide(), t || z.set(e, "bs.collapse", null);
      });

      const s = this._getDimension();

      this._element.classList.remove(ut), this._element.classList.add(gt), this._element.style[s] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
      const n = `scroll${s[0].toUpperCase() + s.slice(1)}`;
      this._queueCallback(() => {
        this._isTransitioning = !1, this._element.classList.remove(gt), this._element.classList.add(ut, dt), this._element.style[s] = "", $.trigger(this._element, "shown.bs.collapse");
      }, this._element, !0), this._element.style[s] = `${this._element[n]}px`;
    }

    hide() {
      if (this._isTransitioning || !this._isShown()) return;
      if ($.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;

      const t = this._getDimension();

      this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, f(this._element), this._element.classList.add(gt), this._element.classList.remove(ut, dt);
      const e = this._triggerArray.length;

      for (let t = 0; t < e; t++) {
        const e = this._triggerArray[t],
              i = r(e);
        i && !this._isShown(i) && this._addAriaAndCollapsedClass([e], !1);
      }

      this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback(() => {
        this._isTransitioning = !1, this._element.classList.remove(gt), this._element.classList.add(ut), $.trigger(this._element, "hidden.bs.collapse");
      }, this._element, !0);
    }

    _isShown(t = this._element) {
      return t.classList.contains(dt);
    }

    _getConfig(t) {
      return (t = { ...ct,
        ...X.getDataAttributes(this._element),
        ...t
      }).toggle = Boolean(t.toggle), t.parent = c(t.parent), h(lt, t, ht), t;
    }

    _getDimension() {
      return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
    }

    _initializeChildren() {
      if (!this._config.parent) return;
      const t = Y.find(ft, this._config.parent);
      Y.find(pt, this._config.parent).filter(e => !t.includes(e)).forEach(t => {
        const e = r(t);
        e && this._addAriaAndCollapsedClass([t], this._isShown(e));
      });
    }

    _addAriaAndCollapsedClass(t, e) {
      t.length && t.forEach(t => {
        e ? t.classList.remove(_t) : t.classList.add(_t), t.setAttribute("aria-expanded", e);
      });
    }

    static jQueryInterface(t) {
      return this.each(function () {
        const e = {};
        "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
        const i = mt.getOrCreateInstance(this, e);

        if ("string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t]();
        }
      });
    }

  }

  $.on(document, "click.bs.collapse.data-api", pt, function (t) {
    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
    const e = o(this);
    Y.find(e).forEach(t => {
      mt.getOrCreateInstance(t, {
        toggle: !1
      }).toggle();
    });
  }), v(mt);
  const bt = "dropdown",
        vt = "Escape",
        yt = "Space",
        Et = "ArrowUp",
        wt = "ArrowDown",
        At = new RegExp("ArrowUp|ArrowDown|Escape"),
        Tt = "click.bs.dropdown.data-api",
        Ct = "keydown.bs.dropdown.data-api",
        kt = "show",
        Lt = '[data-bs-toggle="dropdown"]',
        St = ".dropdown-menu",
        Ot = b() ? "top-end" : "top-start",
        Nt = b() ? "top-start" : "top-end",
        Dt = b() ? "bottom-end" : "bottom-start",
        It = b() ? "bottom-start" : "bottom-end",
        Pt = b() ? "left-start" : "right-start",
        xt = b() ? "right-start" : "left-start",
        Mt = {
    offset: [0, 2],
    boundary: "clippingParents",
    reference: "toggle",
    display: "dynamic",
    popperConfig: null,
    autoClose: !0
  },
        jt = {
    offset: "(array|string|function)",
    boundary: "(string|element)",
    reference: "(string|element|object)",
    display: "string",
    popperConfig: "(null|object|function)",
    autoClose: "(boolean|string)"
  };

  class Ht extends R {
    constructor(t, e) {
      super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar();
    }

    static get Default() {
      return Mt;
    }

    static get DefaultType() {
      return jt;
    }

    static get NAME() {
      return bt;
    }

    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }

    show() {
      if (u(this._element) || this._isShown(this._menu)) return;
      const t = {
        relatedTarget: this._element
      };
      if ($.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) return;
      const e = Ht.getParentFromElement(this._element);
      this._inNavbar ? X.setDataAttribute(this._menu, "popper", "none") : this._createPopper(e), "ontouchstart" in document.documentElement && !e.closest(".navbar-nav") && [].concat(...document.body.children).forEach(t => $.on(t, "mouseover", _)), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(kt), this._element.classList.add(kt), $.trigger(this._element, "shown.bs.dropdown", t);
    }

    hide() {
      if (u(this._element) || !this._isShown(this._menu)) return;
      const t = {
        relatedTarget: this._element
      };

      this._completeHide(t);
    }

    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }

    update() {
      this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
    }

    _completeHide(t) {
      $.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => $.off(t, "mouseover", _)), this._popper && this._popper.destroy(), this._menu.classList.remove(kt), this._element.classList.remove(kt), this._element.setAttribute("aria-expanded", "false"), X.removeDataAttribute(this._menu, "popper"), $.trigger(this._element, "hidden.bs.dropdown", t));
    }

    _getConfig(t) {
      if (t = { ...this.constructor.Default,
        ...X.getDataAttributes(this._element),
        ...t
      }, h(bt, t, this.constructor.DefaultType), "object" == typeof t.reference && !l(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${bt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      return t;
    }

    _createPopper(t) {
      if (void 0 === i) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
      let e = this._element;
      "parent" === this._config.reference ? e = t : l(this._config.reference) ? e = c(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);

      const s = this._getPopperConfig(),
            n = s.modifiers.find(t => "applyStyles" === t.name && !1 === t.enabled);

      this._popper = i.createPopper(e, this._menu, s), n && X.setDataAttribute(this._menu, "popper", "static");
    }

    _isShown(t = this._element) {
      return t.classList.contains(kt);
    }

    _getMenuElement() {
      return Y.next(this._element, St)[0];
    }

    _getPlacement() {
      const t = this._element.parentNode;
      if (t.classList.contains("dropend")) return Pt;
      if (t.classList.contains("dropstart")) return xt;
      const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t.classList.contains("dropup") ? e ? Nt : Ot : e ? It : Dt;
    }

    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }

    _getOffset() {
      const {
        offset: t
      } = this._config;
      return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t;
    }

    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [{
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }]
      };
      return "static" === this._config.display && (t.modifiers = [{
        name: "applyStyles",
        enabled: !1
      }]), { ...t,
        ...("function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig)
      };
    }

    _selectMenuItem({
      key: t,
      target: e
    }) {
      const i = Y.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(d);
      i.length && w(i, e, t === wt, !i.includes(e)).focus();
    }

    static jQueryInterface(t) {
      return this.each(function () {
        const e = Ht.getOrCreateInstance(this, t);

        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }

    static clearMenus(t) {
      if (t && (2 === t.button || "keyup" === t.type && "Tab" !== t.key)) return;
      const e = Y.find(Lt);

      for (let i = 0, s = e.length; i < s; i++) {
        const s = Ht.getInstance(e[i]);
        if (!s || !1 === s._config.autoClose) continue;
        if (!s._isShown()) continue;
        const n = {
          relatedTarget: s._element
        };

        if (t) {
          const e = t.composedPath(),
                i = e.includes(s._menu);
          if (e.includes(s._element) || "inside" === s._config.autoClose && !i || "outside" === s._config.autoClose && i) continue;
          if (s._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
          "click" === t.type && (n.clickEvent = t);
        }

        s._completeHide(n);
      }
    }

    static getParentFromElement(t) {
      return r(t) || t.parentNode;
    }

    static dataApiKeydownHandler(t) {
      if (/input|textarea/i.test(t.target.tagName) ? t.key === yt || t.key !== vt && (t.key !== wt && t.key !== Et || t.target.closest(St)) : !At.test(t.key)) return;
      const e = this.classList.contains(kt);
      if (!e && t.key === vt) return;
      if (t.preventDefault(), t.stopPropagation(), u(this)) return;
      const i = this.matches(Lt) ? this : Y.prev(this, Lt)[0],
            s = Ht.getOrCreateInstance(i);
      if (t.key !== vt) return t.key === Et || t.key === wt ? (e || s.show(), void s._selectMenuItem(t)) : void (e && t.key !== yt || Ht.clearMenus());
      s.hide();
    }

  }

  $.on(document, Ct, Lt, Ht.dataApiKeydownHandler), $.on(document, Ct, St, Ht.dataApiKeydownHandler), $.on(document, Tt, Ht.clearMenus), $.on(document, "keyup.bs.dropdown.data-api", Ht.clearMenus), $.on(document, Tt, Lt, function (t) {
    t.preventDefault(), Ht.getOrCreateInstance(this).toggle();
  }), v(Ht);
  const $t = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        Bt = ".sticky-top";

  class zt {
    constructor() {
      this._element = document.body;
    }

    getWidth() {
      const t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t);
    }

    hide() {
      const t = this.getWidth();
      this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", e => e + t), this._setElementAttributes($t, "paddingRight", e => e + t), this._setElementAttributes(Bt, "marginRight", e => e - t);
    }

    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
    }

    _setElementAttributes(t, e, i) {
      const s = this.getWidth();

      this._applyManipulationCallback(t, t => {
        if (t !== this._element && window.innerWidth > t.clientWidth + s) return;

        this._saveInitialAttribute(t, e);

        const n = window.getComputedStyle(t)[e];
        t.style[e] = `${i(Number.parseFloat(n))}px`;
      });
    }

    reset() {
      this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes($t, "paddingRight"), this._resetElementAttributes(Bt, "marginRight");
    }

    _saveInitialAttribute(t, e) {
      const i = t.style[e];
      i && X.setDataAttribute(t, e, i);
    }

    _resetElementAttributes(t, e) {
      this._applyManipulationCallback(t, t => {
        const i = X.getDataAttribute(t, e);
        void 0 === i ? t.style.removeProperty(e) : (X.removeDataAttribute(t, e), t.style[e] = i);
      });
    }

    _applyManipulationCallback(t, e) {
      l(t) ? e(t) : Y.find(t, this._element).forEach(e);
    }

    isOverflowing() {
      return this.getWidth() > 0;
    }

  }

  const Rt = {
    className: "modal-backdrop",
    isVisible: !0,
    isAnimated: !1,
    rootElement: "body",
    clickCallback: null
  },
        Ft = {
    className: "string",
    isVisible: "boolean",
    isAnimated: "boolean",
    rootElement: "(element|string)",
    clickCallback: "(function|null)"
  },
        qt = "show",
        Wt = "mousedown.bs.backdrop";

  class Ut {
    constructor(t) {
      this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
    }

    show(t) {
      this._config.isVisible ? (this._append(), this._config.isAnimated && f(this._getElement()), this._getElement().classList.add(qt), this._emulateAnimation(() => {
        y(t);
      })) : y(t);
    }

    hide(t) {
      this._config.isVisible ? (this._getElement().classList.remove(qt), this._emulateAnimation(() => {
        this.dispose(), y(t);
      })) : y(t);
    }

    _getElement() {
      if (!this._element) {
        const t = document.createElement("div");
        t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t;
      }

      return this._element;
    }

    _getConfig(t) {
      return (t = { ...Rt,
        ...("object" == typeof t ? t : {})
      }).rootElement = c(t.rootElement), h("backdrop", t, Ft), t;
    }

    _append() {
      this._isAppended || (this._config.rootElement.append(this._getElement()), $.on(this._getElement(), Wt, () => {
        y(this._config.clickCallback);
      }), this._isAppended = !0);
    }

    dispose() {
      this._isAppended && ($.off(this._element, Wt), this._element.remove(), this._isAppended = !1);
    }

    _emulateAnimation(t) {
      E(t, this._getElement(), this._config.isAnimated);
    }

  }

  const Kt = {
    trapElement: null,
    autofocus: !0
  },
        Vt = {
    trapElement: "element",
    autofocus: "boolean"
  },
        Xt = ".bs.focustrap",
        Yt = "backward";

  class Qt {
    constructor(t) {
      this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
    }

    activate() {
      const {
        trapElement: t,
        autofocus: e
      } = this._config;
      this._isActive || (e && t.focus(), $.off(document, Xt), $.on(document, "focusin.bs.focustrap", t => this._handleFocusin(t)), $.on(document, "keydown.tab.bs.focustrap", t => this._handleKeydown(t)), this._isActive = !0);
    }

    deactivate() {
      this._isActive && (this._isActive = !1, $.off(document, Xt));
    }

    _handleFocusin(t) {
      const {
        target: e
      } = t,
            {
        trapElement: i
      } = this._config;
      if (e === document || e === i || i.contains(e)) return;
      const s = Y.focusableChildren(i);
      0 === s.length ? i.focus() : this._lastTabNavDirection === Yt ? s[s.length - 1].focus() : s[0].focus();
    }

    _handleKeydown(t) {
      "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? Yt : "forward");
    }

    _getConfig(t) {
      return t = { ...Kt,
        ...("object" == typeof t ? t : {})
      }, h("focustrap", t, Vt), t;
    }

  }

  const Gt = "modal",
        Zt = "Escape",
        Jt = {
    backdrop: !0,
    keyboard: !0,
    focus: !0
  },
        te = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean"
  },
        ee = "hidden.bs.modal",
        ie = "show.bs.modal",
        se = "resize.bs.modal",
        ne = "click.dismiss.bs.modal",
        oe = "keydown.dismiss.bs.modal",
        re = "mousedown.dismiss.bs.modal",
        ae = "modal-open",
        le = "show",
        ce = "modal-static";

  class he extends R {
    constructor(t, e) {
      super(t), this._config = this._getConfig(e), this._dialog = Y.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new zt();
    }

    static get Default() {
      return Jt;
    }

    static get NAME() {
      return Gt;
    }

    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }

    show(t) {
      this._isShown || this._isTransitioning || $.trigger(this._element, ie, {
        relatedTarget: t
      }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(ae), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), $.on(this._dialog, re, () => {
        $.one(this._element, "mouseup.dismiss.bs.modal", t => {
          t.target === this._element && (this._ignoreBackdropClick = !0);
        });
      }), this._showBackdrop(() => this._showElement(t)));
    }

    hide() {
      if (!this._isShown || this._isTransitioning) return;
      if ($.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
      this._isShown = !1;

      const t = this._isAnimated();

      t && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove(le), $.off(this._element, ne), $.off(this._dialog, re), this._queueCallback(() => this._hideModal(), this._element, t);
    }

    dispose() {
      [window, this._dialog].forEach(t => $.off(t, ".bs.modal")), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }

    handleUpdate() {
      this._adjustDialog();
    }

    _initializeBackDrop() {
      return new Ut({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated()
      });
    }

    _initializeFocusTrap() {
      return new Qt({
        trapElement: this._element
      });
    }

    _getConfig(t) {
      return t = { ...Jt,
        ...X.getDataAttributes(this._element),
        ...("object" == typeof t ? t : {})
      }, h(Gt, t, te), t;
    }

    _showElement(t) {
      const e = this._isAnimated(),
            i = Y.findOne(".modal-body", this._dialog);

      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), e && f(this._element), this._element.classList.add(le), this._queueCallback(() => {
        this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, $.trigger(this._element, "shown.bs.modal", {
          relatedTarget: t
        });
      }, this._dialog, e);
    }

    _setEscapeEvent() {
      this._isShown ? $.on(this._element, oe, t => {
        this._config.keyboard && t.key === Zt ? (t.preventDefault(), this.hide()) : this._config.keyboard || t.key !== Zt || this._triggerBackdropTransition();
      }) : $.off(this._element, oe);
    }

    _setResizeEvent() {
      this._isShown ? $.on(window, se, () => this._adjustDialog()) : $.off(window, se);
    }

    _hideModal() {
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
        document.body.classList.remove(ae), this._resetAdjustments(), this._scrollBar.reset(), $.trigger(this._element, ee);
      });
    }

    _showBackdrop(t) {
      $.on(this._element, ne, t => {
        this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition());
      }), this._backdrop.show(t);
    }

    _isAnimated() {
      return this._element.classList.contains("fade");
    }

    _triggerBackdropTransition() {
      if ($.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
      const {
        classList: t,
        scrollHeight: e,
        style: i
      } = this._element,
            s = e > document.documentElement.clientHeight;
      !s && "hidden" === i.overflowY || t.contains(ce) || (s || (i.overflowY = "hidden"), t.add(ce), this._queueCallback(() => {
        t.remove(ce), s || this._queueCallback(() => {
          i.overflowY = "";
        }, this._dialog);
      }, this._dialog), this._element.focus());
    }

    _adjustDialog() {
      const t = this._element.scrollHeight > document.documentElement.clientHeight,
            e = this._scrollBar.getWidth(),
            i = e > 0;

      (!i && t && !b() || i && !t && b()) && (this._element.style.paddingLeft = `${e}px`), (i && !t && !b() || !i && t && b()) && (this._element.style.paddingRight = `${e}px`);
    }

    _resetAdjustments() {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }

    static jQueryInterface(t, e) {
      return this.each(function () {
        const i = he.getOrCreateInstance(this, t);

        if ("string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t](e);
        }
      });
    }

  }

  $.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {
    const e = r(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), $.one(e, ie, t => {
      t.defaultPrevented || $.one(e, ee, () => {
        d(this) && this.focus();
      });
    });
    const i = Y.findOne(".modal.show");
    i && he.getInstance(i).hide(), he.getOrCreateInstance(e).toggle(this);
  }), F(he), v(he);
  const de = "offcanvas",
        ue = {
    backdrop: !0,
    keyboard: !0,
    scroll: !1
  },
        ge = {
    backdrop: "boolean",
    keyboard: "boolean",
    scroll: "boolean"
  },
        _e = "show",
        fe = ".offcanvas.show",
        pe = "hidden.bs.offcanvas";

  class me extends R {
    constructor(t, e) {
      super(t), this._config = this._getConfig(e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
    }

    static get NAME() {
      return de;
    }

    static get Default() {
      return ue;
    }

    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }

    show(t) {
      this._isShown || $.trigger(this._element, "show.bs.offcanvas", {
        relatedTarget: t
      }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || new zt().hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(_e), this._queueCallback(() => {
        this._config.scroll || this._focustrap.activate(), $.trigger(this._element, "shown.bs.offcanvas", {
          relatedTarget: t
        });
      }, this._element, !0));
    }

    hide() {
      this._isShown && ($.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove(_e), this._backdrop.hide(), this._queueCallback(() => {
        this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || new zt().reset(), $.trigger(this._element, pe);
      }, this._element, !0)));
    }

    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }

    _getConfig(t) {
      return t = { ...ue,
        ...X.getDataAttributes(this._element),
        ...("object" == typeof t ? t : {})
      }, h(de, t, ge), t;
    }

    _initializeBackDrop() {
      return new Ut({
        className: "offcanvas-backdrop",
        isVisible: this._config.backdrop,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: () => this.hide()
      });
    }

    _initializeFocusTrap() {
      return new Qt({
        trapElement: this._element
      });
    }

    _addEventListeners() {
      $.on(this._element, "keydown.dismiss.bs.offcanvas", t => {
        this._config.keyboard && "Escape" === t.key && this.hide();
      });
    }

    static jQueryInterface(t) {
      return this.each(function () {
        const e = me.getOrCreateInstance(this, t);

        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }

  }

  $.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (t) {
    const e = r(this);
    if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), u(this)) return;
    $.one(e, pe, () => {
      d(this) && this.focus();
    });
    const i = Y.findOne(fe);
    i && i !== e && me.getInstance(i).hide(), me.getOrCreateInstance(e).toggle(this);
  }), $.on(window, "load.bs.offcanvas.data-api", () => Y.find(fe).forEach(t => me.getOrCreateInstance(t).show())), F(me), v(me);

  const be = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        ve = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
        ye = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        Ee = (t, e) => {
    const i = t.nodeName.toLowerCase();
    if (e.includes(i)) return !be.has(i) || Boolean(ve.test(t.nodeValue) || ye.test(t.nodeValue));
    const s = e.filter(t => t instanceof RegExp);

    for (let t = 0, e = s.length; t < e; t++) if (s[t].test(i)) return !0;

    return !1;
  };

  function we(t, e, i) {
    if (!t.length) return t;
    if (i && "function" == typeof i) return i(t);
    const s = new window.DOMParser().parseFromString(t, "text/html"),
          n = [].concat(...s.body.querySelectorAll("*"));

    for (let t = 0, i = n.length; t < i; t++) {
      const i = n[t],
            s = i.nodeName.toLowerCase();

      if (!Object.keys(e).includes(s)) {
        i.remove();
        continue;
      }

      const o = [].concat(...i.attributes),
            r = [].concat(e["*"] || [], e[s] || []);
      o.forEach(t => {
        Ee(t, r) || i.removeAttribute(t.nodeName);
      });
    }

    return s.body.innerHTML;
  }

  const Ae = "tooltip",
        Te = new Set(["sanitize", "allowList", "sanitizeFn"]),
        Ce = {
    animation: "boolean",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
    delay: "(number|object)",
    html: "boolean",
    selector: "(string|boolean)",
    placement: "(string|function)",
    offset: "(array|string|function)",
    container: "(string|element|boolean)",
    fallbackPlacements: "array",
    boundary: "(string|element)",
    customClass: "(string|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    allowList: "object",
    popperConfig: "(null|object|function)"
  },
        ke = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: b() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: b() ? "right" : "left"
  },
        Le = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    selector: !1,
    placement: "top",
    offset: [0, 0],
    container: !1,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    boundary: "clippingParents",
    customClass: "",
    sanitize: !0,
    sanitizeFn: null,
    allowList: {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    },
    popperConfig: null
  },
        Se = {
    HIDE: "hide.bs.tooltip",
    HIDDEN: "hidden.bs.tooltip",
    SHOW: "show.bs.tooltip",
    SHOWN: "shown.bs.tooltip",
    INSERTED: "inserted.bs.tooltip",
    CLICK: "click.bs.tooltip",
    FOCUSIN: "focusin.bs.tooltip",
    FOCUSOUT: "focusout.bs.tooltip",
    MOUSEENTER: "mouseenter.bs.tooltip",
    MOUSELEAVE: "mouseleave.bs.tooltip"
  },
        Oe = "fade",
        Ne = "show",
        De = "show",
        Ie = "out",
        Pe = ".tooltip-inner",
        xe = ".modal",
        Me = "hide.bs.modal",
        je = "hover",
        He = "focus";

  class $e extends R {
    constructor(t, e) {
      if (void 0 === i) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e), this.tip = null, this._setListeners();
    }

    static get Default() {
      return Le;
    }

    static get NAME() {
      return Ae;
    }

    static get Event() {
      return Se;
    }

    static get DefaultType() {
      return Ce;
    }

    enable() {
      this._isEnabled = !0;
    }

    disable() {
      this._isEnabled = !1;
    }

    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }

    toggle(t) {
      if (this._isEnabled) if (t) {
        const e = this._initializeOnDelegatedTarget(t);

        e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
      } else {
        if (this.getTipElement().classList.contains(Ne)) return void this._leave(null, this);

        this._enter(null, this);
      }
    }

    dispose() {
      clearTimeout(this._timeout), $.off(this._element.closest(xe), Me, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose();
    }

    show() {
      if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
      if (!this.isWithContent() || !this._isEnabled) return;
      const t = $.trigger(this._element, this.constructor.Event.SHOW),
            e = g(this._element),
            s = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
      if (t.defaultPrevented || !s) return;
      "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(Pe).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);

      const n = this.getTipElement(),
            o = (t => {
        do {
          t += Math.floor(1e6 * Math.random());
        } while (document.getElementById(t));

        return t;
      })(this.constructor.NAME);

      n.setAttribute("id", o), this._element.setAttribute("aria-describedby", o), this._config.animation && n.classList.add(Oe);

      const r = "function" == typeof this._config.placement ? this._config.placement.call(this, n, this._element) : this._config.placement,
            a = this._getAttachment(r);

      this._addAttachmentClass(a);

      const {
        container: l
      } = this._config;
      z.set(n, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (l.append(n), $.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = i.createPopper(this._element, n, this._getPopperConfig(a)), n.classList.add(Ne);

      const c = this._resolvePossibleFunction(this._config.customClass);

      c && n.classList.add(...c.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => {
        $.on(t, "mouseover", _);
      });
      const h = this.tip.classList.contains(Oe);

      this._queueCallback(() => {
        const t = this._hoverState;
        this._hoverState = null, $.trigger(this._element, this.constructor.Event.SHOWN), t === Ie && this._leave(null, this);
      }, this.tip, h);
    }

    hide() {
      if (!this._popper) return;
      const t = this.getTipElement();
      if ($.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
      t.classList.remove(Ne), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => $.off(t, "mouseover", _)), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
      const e = this.tip.classList.contains(Oe);
      this._queueCallback(() => {
        this._isWithActiveTrigger() || (this._hoverState !== De && t.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), $.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper());
      }, this.tip, e), this._hoverState = "";
    }

    update() {
      null !== this._popper && this._popper.update();
    }

    isWithContent() {
      return Boolean(this.getTitle());
    }

    getTipElement() {
      if (this.tip) return this.tip;
      const t = document.createElement("div");
      t.innerHTML = this._config.template;
      const e = t.children[0];
      return this.setContent(e), e.classList.remove(Oe, Ne), this.tip = e, this.tip;
    }

    setContent(t) {
      this._sanitizeAndSetContent(t, this.getTitle(), Pe);
    }

    _sanitizeAndSetContent(t, e, i) {
      const s = Y.findOne(i, t);
      e || !s ? this.setElementContent(s, e) : s.remove();
    }

    setElementContent(t, e) {
      if (null !== t) return l(e) ? (e = c(e), void (this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.append(e)) : t.textContent = e.textContent)) : void (this._config.html ? (this._config.sanitize && (e = we(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e);
    }

    getTitle() {
      const t = this._element.getAttribute("data-bs-original-title") || this._config.title;

      return this._resolvePossibleFunction(t);
    }

    updateAttachment(t) {
      return "right" === t ? "end" : "left" === t ? "start" : t;
    }

    _initializeOnDelegatedTarget(t, e) {
      return e || this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
    }

    _getOffset() {
      const {
        offset: t
      } = this._config;
      return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t;
    }

    _resolvePossibleFunction(t) {
      return "function" == typeof t ? t.call(this._element) : t;
    }

    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [{
          name: "flip",
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }, {
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "arrow",
          options: {
            element: `.${this.constructor.NAME}-arrow`
          }
        }, {
          name: "onChange",
          enabled: !0,
          phase: "afterWrite",
          fn: t => this._handlePopperPlacementChange(t)
        }],
        onFirstUpdate: t => {
          t.options.placement !== t.placement && this._handlePopperPlacementChange(t);
        }
      };
      return { ...e,
        ...("function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig)
      };
    }

    _addAttachmentClass(t) {
      this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`);
    }

    _getAttachment(t) {
      return ke[t.toUpperCase()];
    }

    _setListeners() {
      this._config.trigger.split(" ").forEach(t => {
        if ("click" === t) $.on(this._element, this.constructor.Event.CLICK, this._config.selector, t => this.toggle(t));else if ("manual" !== t) {
          const e = t === je ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                i = t === je ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
          $.on(this._element, e, this._config.selector, t => this._enter(t)), $.on(this._element, i, this._config.selector, t => this._leave(t));
        }
      }), this._hideModalHandler = () => {
        this._element && this.hide();
      }, $.on(this._element.closest(xe), Me, this._hideModalHandler), this._config.selector ? this._config = { ...this._config,
        trigger: "manual",
        selector: ""
      } : this._fixTitle();
    }

    _fixTitle() {
      const t = this._element.getAttribute("title"),
            e = typeof this._element.getAttribute("data-bs-original-title");

      (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
    }

    _enter(t, e) {
      e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? He : je] = !0), e.getTipElement().classList.contains(Ne) || e._hoverState === De ? e._hoverState = De : (clearTimeout(e._timeout), e._hoverState = De, e._config.delay && e._config.delay.show ? e._timeout = setTimeout(() => {
        e._hoverState === De && e.show();
      }, e._config.delay.show) : e.show());
    }

    _leave(t, e) {
      e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? He : je] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = Ie, e._config.delay && e._config.delay.hide ? e._timeout = setTimeout(() => {
        e._hoverState === Ie && e.hide();
      }, e._config.delay.hide) : e.hide());
    }

    _isWithActiveTrigger() {
      for (const t in this._activeTrigger) if (this._activeTrigger[t]) return !0;

      return !1;
    }

    _getConfig(t) {
      const e = X.getDataAttributes(this._element);
      return Object.keys(e).forEach(t => {
        Te.has(t) && delete e[t];
      }), (t = { ...this.constructor.Default,
        ...e,
        ...("object" == typeof t && t ? t : {})
      }).container = !1 === t.container ? document.body : c(t.container), "number" == typeof t.delay && (t.delay = {
        show: t.delay,
        hide: t.delay
      }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), h(Ae, t, this.constructor.DefaultType), t.sanitize && (t.template = we(t.template, t.allowList, t.sanitizeFn)), t;
    }

    _getDelegateConfig() {
      const t = {};

      for (const e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);

      return t;
    }

    _cleanTipClass() {
      const t = this.getTipElement(),
            e = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
            i = t.getAttribute("class").match(e);
      null !== i && i.length > 0 && i.map(t => t.trim()).forEach(e => t.classList.remove(e));
    }

    _getBasicClassPrefix() {
      return "bs-tooltip";
    }

    _handlePopperPlacementChange(t) {
      const {
        state: e
      } = t;
      e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
    }

    _disposePopper() {
      this._popper && (this._popper.destroy(), this._popper = null);
    }

    static jQueryInterface(t) {
      return this.each(function () {
        const e = $e.getOrCreateInstance(this, t);

        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }

  }

  v($e);
  const Be = { ...$e.Default,
    placement: "right",
    offset: [0, 8],
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  },
        ze = { ...$e.DefaultType,
    content: "(string|element|function)"
  },
        Re = {
    HIDE: "hide.bs.popover",
    HIDDEN: "hidden.bs.popover",
    SHOW: "show.bs.popover",
    SHOWN: "shown.bs.popover",
    INSERTED: "inserted.bs.popover",
    CLICK: "click.bs.popover",
    FOCUSIN: "focusin.bs.popover",
    FOCUSOUT: "focusout.bs.popover",
    MOUSEENTER: "mouseenter.bs.popover",
    MOUSELEAVE: "mouseleave.bs.popover"
  };

  class Fe extends $e {
    static get Default() {
      return Be;
    }

    static get NAME() {
      return "popover";
    }

    static get Event() {
      return Re;
    }

    static get DefaultType() {
      return ze;
    }

    isWithContent() {
      return this.getTitle() || this._getContent();
    }

    setContent(t) {
      this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(t, this._getContent(), ".popover-body");
    }

    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }

    _getBasicClassPrefix() {
      return "bs-popover";
    }

    static jQueryInterface(t) {
      return this.each(function () {
        const e = Fe.getOrCreateInstance(this, t);

        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }

  }

  v(Fe);
  const qe = "scrollspy",
        We = {
    offset: 10,
    method: "auto",
    target: ""
  },
        Ue = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  },
        Ke = "active",
        Ve = ".nav-link, .list-group-item, .dropdown-item",
        Xe = "position";

  class Ye extends R {
    constructor(t, e) {
      super(t), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, $.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()), this.refresh(), this._process();
    }

    static get Default() {
      return We;
    }

    static get NAME() {
      return qe;
    }

    refresh() {
      const t = this._scrollElement === this._scrollElement.window ? "offset" : Xe,
            e = "auto" === this._config.method ? t : this._config.method,
            i = e === Xe ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Y.find(Ve, this._config.target).map(t => {
        const s = o(t),
              n = s ? Y.findOne(s) : null;

        if (n) {
          const t = n.getBoundingClientRect();
          if (t.width || t.height) return [X[e](n).top + i, s];
        }

        return null;
      }).filter(t => t).sort((t, e) => t[0] - e[0]).forEach(t => {
        this._offsets.push(t[0]), this._targets.push(t[1]);
      });
    }

    dispose() {
      $.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
    }

    _getConfig(t) {
      return (t = { ...We,
        ...X.getDataAttributes(this._element),
        ...("object" == typeof t && t ? t : {})
      }).target = c(t.target) || document.documentElement, h(qe, t, Ue), t;
    }

    _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }

    _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }

    _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }

    _process() {
      const t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            i = this._config.offset + e - this._getOffsetHeight();

      if (this._scrollHeight !== e && this.refresh(), t >= i) {
        const t = this._targets[this._targets.length - 1];
        this._activeTarget !== t && this._activate(t);
      } else {
        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

        for (let e = this._offsets.length; e--;) this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e]);
      }
    }

    _activate(t) {
      this._activeTarget = t, this._clear();
      const e = Ve.split(",").map(e => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`),
            i = Y.findOne(e.join(","), this._config.target);
      i.classList.add(Ke), i.classList.contains("dropdown-item") ? Y.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(Ke) : Y.parents(i, ".nav, .list-group").forEach(t => {
        Y.prev(t, ".nav-link, .list-group-item").forEach(t => t.classList.add(Ke)), Y.prev(t, ".nav-item").forEach(t => {
          Y.children(t, ".nav-link").forEach(t => t.classList.add(Ke));
        });
      }), $.trigger(this._scrollElement, "activate.bs.scrollspy", {
        relatedTarget: t
      });
    }

    _clear() {
      Y.find(Ve, this._config.target).filter(t => t.classList.contains(Ke)).forEach(t => t.classList.remove(Ke));
    }

    static jQueryInterface(t) {
      return this.each(function () {
        const e = Ye.getOrCreateInstance(this, t);

        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }

  }

  $.on(window, "load.bs.scrollspy.data-api", () => {
    Y.find('[data-bs-spy="scroll"]').forEach(t => new Ye(t));
  }), v(Ye);
  const Qe = "active",
        Ge = "fade",
        Ze = "show",
        Je = ".active",
        ti = ":scope > li > .active";

  class ei extends R {
    static get NAME() {
      return "tab";
    }

    show() {
      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(Qe)) return;
      let t;

      const e = r(this._element),
            i = this._element.closest(".nav, .list-group");

      if (i) {
        const e = "UL" === i.nodeName || "OL" === i.nodeName ? ti : Je;
        t = Y.find(e, i), t = t[t.length - 1];
      }

      const s = t ? $.trigger(t, "hide.bs.tab", {
        relatedTarget: this._element
      }) : null;
      if ($.trigger(this._element, "show.bs.tab", {
        relatedTarget: t
      }).defaultPrevented || null !== s && s.defaultPrevented) return;

      this._activate(this._element, i);

      const n = () => {
        $.trigger(t, "hidden.bs.tab", {
          relatedTarget: this._element
        }), $.trigger(this._element, "shown.bs.tab", {
          relatedTarget: t
        });
      };

      e ? this._activate(e, e.parentNode, n) : n();
    }

    _activate(t, e, i) {
      const s = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? Y.children(e, Je) : Y.find(ti, e))[0],
            n = i && s && s.classList.contains(Ge),
            o = () => this._transitionComplete(t, s, i);

      s && n ? (s.classList.remove(Ze), this._queueCallback(o, t, !0)) : o();
    }

    _transitionComplete(t, e, i) {
      if (e) {
        e.classList.remove(Qe);
        const t = Y.findOne(":scope > .dropdown-menu .active", e.parentNode);
        t && t.classList.remove(Qe), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
      }

      t.classList.add(Qe), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), f(t), t.classList.contains(Ge) && t.classList.add(Ze);
      let s = t.parentNode;

      if (s && "LI" === s.nodeName && (s = s.parentNode), s && s.classList.contains("dropdown-menu")) {
        const e = t.closest(".dropdown");
        e && Y.find(".dropdown-toggle", e).forEach(t => t.classList.add(Qe)), t.setAttribute("aria-expanded", !0);
      }

      i && i();
    }

    static jQueryInterface(t) {
      return this.each(function () {
        const e = ei.getOrCreateInstance(this);

        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }

  }

  $.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), u(this) || ei.getOrCreateInstance(this).show();
  }), v(ei);
  const ii = "toast",
        si = "hide",
        ni = "show",
        oi = "showing",
        ri = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
        ai = {
    animation: !0,
    autohide: !0,
    delay: 5e3
  };

  class li extends R {
    constructor(t, e) {
      super(t), this._config = this._getConfig(e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
    }

    static get DefaultType() {
      return ri;
    }

    static get Default() {
      return ai;
    }

    static get NAME() {
      return ii;
    }

    show() {
      $.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(si), f(this._element), this._element.classList.add(ni), this._element.classList.add(oi), this._queueCallback(() => {
        this._element.classList.remove(oi), $.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide();
      }, this._element, this._config.animation));
    }

    hide() {
      this._element.classList.contains(ni) && ($.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(oi), this._queueCallback(() => {
        this._element.classList.add(si), this._element.classList.remove(oi), this._element.classList.remove(ni), $.trigger(this._element, "hidden.bs.toast");
      }, this._element, this._config.animation)));
    }

    dispose() {
      this._clearTimeout(), this._element.classList.contains(ni) && this._element.classList.remove(ni), super.dispose();
    }

    _getConfig(t) {
      return t = { ...ai,
        ...X.getDataAttributes(this._element),
        ...("object" == typeof t && t ? t : {})
      }, h(ii, t, this.constructor.DefaultType), t;
    }

    _maybeScheduleHide() {
      this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay)));
    }

    _onInteraction(t, e) {
      switch (t.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e;
          break;

        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e;
      }

      if (e) return void this._clearTimeout();
      const i = t.relatedTarget;
      this._element === i || this._element.contains(i) || this._maybeScheduleHide();
    }

    _setListeners() {
      $.on(this._element, "mouseover.bs.toast", t => this._onInteraction(t, !0)), $.on(this._element, "mouseout.bs.toast", t => this._onInteraction(t, !1)), $.on(this._element, "focusin.bs.toast", t => this._onInteraction(t, !0)), $.on(this._element, "focusout.bs.toast", t => this._onInteraction(t, !1));
    }

    _clearTimeout() {
      clearTimeout(this._timeout), this._timeout = null;
    }

    static jQueryInterface(t) {
      return this.each(function () {
        const e = li.getOrCreateInstance(this, t);

        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }

  }

  return F(li), v(li), {
    Alert: q,
    Button: U,
    Carousel: at,
    Collapse: mt,
    Dropdown: Ht,
    Modal: he,
    Offcanvas: me,
    Popover: Fe,
    ScrollSpy: Ye,
    Tab: ei,
    Toast: li,
    Tooltip: $e
  };
}); //# sourceMappingURL=bootstrap.min.js.map

if (typeof exports === "object" && typeof module !== "undefined") {
  // CommonJS
  module.exports = $a95H$exports;
} else if (typeof define === "function" && define.amd) {
  // RequireJS
  define(function () {
    return $a95H$exports;
  });
}

return {
  "a95H": $a95H$exports
};
});