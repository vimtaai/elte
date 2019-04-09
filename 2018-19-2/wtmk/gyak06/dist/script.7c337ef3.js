// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
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

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"script/drawer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawer = exports.drawerElement = void 0;
var drawerElement = document.querySelector("#drawer");
exports.drawerElement = drawerElement;
var drawer = M.Sidenav.init(drawerElement);
exports.drawer = drawer;
},{}],"script/pages/camera.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CAMERA = void 0;

var _navigation = require("../navigation");

var name = "camera";
var displayModes = {
  default: {
    "#camera-video": true,
    "#camera-canvas": false,
    "#camera-location": false
  },
  editing: {
    "#camera-video": false,
    "#camera-canvas": true,
    "#camera-location": true
  }
};

function init() {
  // Ellenőrizzük, hogy a "mediaDevices" (kamera) elérhető-e
  if (!("mediaDevices" in navigator)) {
    alert("Camera API not supported");
  } // Ellenőrizzük, hogy a "geolocation" (helyzet) elérhető-e


  if (!("geolocation" in navigator)) {
    alert("Location API not supported");
  }

  var actions = document.querySelector("#camera-actions");
  var capture = document.querySelector("#camera-capture");
  var discard = document.querySelector("#camera-discard");
  var save = document.querySelector("#camera-save");
  var video = document.querySelector("#camera-video");
  var canvas = document.querySelector("#camera-canvas");
  var context = canvas.getContext("2d");
  M.FloatingActionButton.init(actions, {
    toolbarEnabled: true
  });
  navigator.mediaDevices.getUserMedia({
    video: true
  }) // Elkérjük a kamera videóképét
  .then(function (stream) {
    // Ha megvan
    video.srcObject = stream; //
  }).catch(function (error) {
    console.error(error);
  }); // Ha a gombra kattintunk

  capture.addEventListener("click", function () {
    // A videó képét a vászonra rajzoljuk
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    (0, _navigation.setDisplayMode)(displayModes.editing); // Elkérem a jelenlegi helyzetet

    navigator.geolocation.getCurrentPosition(function (position) {
      // Ha megvan
      var lat = position.coords.latitude;
      var lon = position.coords.longitude; // Netes szolgáltatás, ami visszaadja a szükséges adatokat róla
      // Google helyett OpenStreetMap, mert ingyenes és nem kell hozzá kulcs, így egyszerűbb

      var url = "https://nominatim.openstreetmap.org/reverse?format=json&lat=".concat(lat, "&lon=").concat(lon); // Hely elkérése a OpenStreetMap szervertől

      fetch(url).then(function (response) {
        return response.json();
      }).then(function (json) {
        var location = document.querySelector("#camera-location");
        location.innerHTML = "".concat(json.address.city, ", ").concat(json.address.country);
      });
    });
  });
  discard.addEventListener("click", function () {
    (0, _navigation.setDisplayMode)(displayModes.default);
  }); // Kép feltöltés

  save.addEventListener("click", function () {
    var imageData = canvas.toDataURL(); // console.log(imageData);
    // generálunk egy fájlnevet

    var filename = Date.now() + Math.random().toString().slice(2, 9) + ".png";
    var storage = firebase.storage().ref(filename);
    var location = document.querySelector("#camera-location").textContent;
    storage.putString(imageData, "data_url", {
      customMetadata: {
        location: location
      }
    }).then(function () {
      M.toast({
        html: "Upload successful",
        classes: "green"
      });
      (0, _navigation.setDisplayMode)(displayModes.default);
    }).catch(function () {
      M.toast({
        html: "Upload failed",
        classes: "red"
      });
    });
  });
}

var CAMERA = {
  name: name,
  displayModes: displayModes,
  init: init
};
exports.CAMERA = CAMERA;
},{"../navigation":"script/navigation.js"}],"script/pages/gallery.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GALLERY = void 0;
var name = "gallery";
var displayModes = {
  default: {}
};

function init() {}

var GALLERY = {
  name: name,
  displayModes: displayModes,
  init: init
};
exports.GALLERY = GALLERY;
},{}],"script/navigation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDisplayMode = setDisplayMode;
exports.navigate = navigate;
exports.initNavigation = initNavigation;
exports.Pages = void 0;

var _camera = require("./pages/camera");

var _gallery = require("./pages/gallery");

var _drawer = require("./drawer");

var Pages = {
  CAMERA: _camera.CAMERA,
  GALLERY: _gallery.GALLERY
};
exports.Pages = Pages;

function setDisplayMode(mode) {
  var selectors = Object.keys(mode);

  for (var _i = 0, _selectors = selectors; _i < _selectors.length; _i++) {
    var selector = _selectors[_i];
    var elem = document.querySelector(selector);
    elem.style.display = mode[selector] ? "block" : "none";
  }
} // Oldal betöltése


function navigate(newPage) {
  // Megkeressük az új oldal gyökérelemét
  var newPageRoot = document.querySelector("section[data-page=".concat(newPage.name, "]")); // Minden oldalt elrejtek, kivéve azt, amire navigálok

  var pages = document.querySelectorAll("section[data-page]");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = pages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var page = _step.value;

      if (page === newPageRoot) {
        page.style.display = "block";
      } else {
        page.style.display = "none";
      }
    } // Minden inicializálást elvégzünk az új oldalon

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  newPage.init();
  setDisplayMode(newPage.displayModes.default);
  initNavigation(newPageRoot);

  _drawer.drawer.close();
}

function initNavigation(elem) {
  var links = elem.querySelectorAll("a[data-page]");
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    var _loop = function _loop() {
      var link = _step2.value;
      link.addEventListener("click", function (event) {
        event.preventDefault();
        var page = link.getAttribute("data-page");
        navigate(Pages[page]);
      });
    };

    for (var _iterator2 = links[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}
},{"./pages/camera":"script/pages/camera.js","./pages/gallery":"script/pages/gallery.js","./drawer":"script/drawer.js"}],"script/index.js":[function(require,module,exports) {
"use strict";

var _drawer = require("./drawer");

var _navigation = require("./navigation");

(0, _navigation.initNavigation)(_drawer.drawerElement);
(0, _navigation.navigate)(_navigation.Pages.CAMERA);
},{"./drawer":"script/drawer.js","./navigation":"script/navigation.js"}],"../../../AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53682" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js","script/index.js"], null)
//# sourceMappingURL=/script.7c337ef3.js.map