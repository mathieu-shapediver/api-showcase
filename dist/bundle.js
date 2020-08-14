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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/SdViewerApp.js":
/*!***************************!*\
  !*** ./js/SdViewerApp.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SdViewerApp = void 0;
var shapediver_types_1 = __webpack_require__(/*! shapediver-types */ "./node_modules/shapediver-types/lib/SDVApp.js");
var SdViewerAppBase_1 = __webpack_require__(/*! ./SdViewerAppBase */ "./js/SdViewerAppBase.js");
var SdViewerDatGUI_1 = __webpack_require__(/*! ./SdViewerDatGUI */ "./js/SdViewerDatGUI.js");
var SdViewerControls_1 = __webpack_require__(/*! ./SdViewerControls */ "./js/SdViewerControls.js");
var SdViewerApp = /** @class */ (function (_super) {
    __extends(SdViewerApp, _super);
    /**
     *
     * @param api ShapeDiver API object
     */
    function SdViewerApp(api) {
        var _this = _super.call(this, api) || this;
        /**
         * model to load
         */
        _this.ticket = 'c46b0bd423988b6d411121108d7611a9d2ffa2f6022071f45b37b1730fd9820c6a7d1c3a5780df23ae8bbac303e3e618697f8ba47bb0ffabe24c8843760976a743adcf54028cf388fd5e4c688ca9e5cc1450ef9b8ba3015c769d92c3deeade71a6ba7ece2b5b37a11befbaa6c2642cc8e81660892033-35f1dee65073c6c7bcd52a7282f99ad7';
        _this.modelViewUrl = 'eu-central-1';
        /**
         * helpers for displaying status information
         */
        _this.infoDomTop = document.getElementById('info-top');
        _this.infoDomBottom = document.getElementById('info-bottom');
        _this.sceneEventListenerTokens = [];
        return _this;
    }
    /**
     * Load the model
     */
    SdViewerApp.prototype.loadModel = function () {
        return __awaiter(this, void 0, void 0, function () {
            var commPluginOptions, settingsToOverride, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        commPluginOptions = {
                            ticket: this.ticket,
                            modelViewUrl: this.modelViewUrl,
                        };
                        settingsToOverride = {};
                        _a = this;
                        return [4 /*yield*/, this.addModelToScene(commPluginOptions, null, settingsToOverride)];
                    case 1:
                        _a.modelRuntimeId = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * create custom controls based on the ShapeDiver Viewer controls
     */
    SdViewerApp.prototype.createCustomControls = function () {
        if (!this.controls) {
            this.controls = new SdViewerControls_1.SdViewerControls(this.api);
            this.controls.hideAllParameterControls();
            this.controls.hideAllExportControls();
            this.controls.addParameterControl({ name: "Length (mm)" }, 'Length (millimeter)');
        }
    };
    /**
     * create custom controls based on dat.gui
     */
    SdViewerApp.prototype.createDatGui = function () {
        var _this = this;
        if (!this.datgui) {
            this.datgui = new SdViewerDatGUI_1.SdViewerDatGUI(this.api);
            // parameters
            this.datgui.addParameter({ name: 'Length (mm)' });
            this.datgui.addParameter({ name: 'Width (mm)' });
            this.datgui.addParameter({ name: 'Height (mm)' });
            this.datgui.addParameter({ name: 'Show Dimensions?' }, 'Dimensions');
            // toggles
            this.datgui.addToggle('Show status', false, function (v) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.enableStatusDisplay(v);
                    return [2 /*return*/];
                });
            }); }, 'Toggles');
            this.datgui.addToggle('Blur when busy', true, function (v) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.api.updateSettingAsync('blurSceneWhenBusy', false);
                    return [2 /*return*/];
                });
            }); }, 'Toggles');
            // sliders
            var scaleMatrix_1 = new THREE.Matrix4();
            this.datgui.addSlider('Scale', 1, 0.5, 2, 0.01, function (v) {
                if (_this.modelRuntimeId) {
                    scaleMatrix_1.makeScale(v, v, v);
                    _this.api.scene.setTransformation(shapediver_types_1.Scene.TRANSFORMATIONTYPE.PLUGIN, _this.modelRuntimeId, [scaleMatrix_1]);
                }
            }, 'Sliders');
        }
    };
    SdViewerApp.prototype.updateStatusTop = function (text) {
        if (this.infoDomTop) {
            if (text) {
                this.infoDomTop.innerHTML = text;
            }
            else {
                this.infoDomTop.innerHTML = '';
            }
        }
    };
    SdViewerApp.prototype.updateStatusBottom = function (event) {
        if (this.infoDomBottom) {
            if (event && event.framerate) {
                var statusText = parseInt(event.framerate + '') + ' fps';
                this.infoDomBottom.innerHTML = statusText;
            }
            else {
                this.infoDomBottom.innerHTML = '';
            }
        }
    };
    SdViewerApp.prototype.enableStatusDisplay = function (enable) {
        var _this = this;
        if (enable) {
            this.sceneEventListenerTokens.push(this.api.scene.addEventListener(shapediver_types_1.Scene.EVENTTYPE.FRAMERATE, function (event) {
                _this.updateStatusBottom(event);
            }).data);
        }
        else {
            this.sceneEventListenerTokens.forEach(function (token) {
                _this.api.scene.removeEventListener(token);
            });
            this.updateStatusBottom();
            this.updateStatusTop();
        }
    };
    return SdViewerApp;
}(SdViewerAppBase_1.SdViewerAppBase));
exports.SdViewerApp = SdViewerApp;


/***/ }),

/***/ "./js/SdViewerAppBase.js":
/*!*******************************!*\
  !*** ./js/SdViewerAppBase.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SdViewerAppBase = void 0;
var SdViewerAppBase = /** @class */ (function () {
    /**
     *
     * @param api pass a ShapeDiver Viewer API object, typically created usin SDVApp.ParametricViewer
     */
    function SdViewerAppBase(api) {
        this.commPluginNum = 0;
        this.api = api;
    }
    /**
     * Instantiate a new ShapeDiver CommPlugin to add the outputs of a new ShapeDiver model to the scene
     *
     * @param commPluginOptions must contain at least a `ticket` and a `modelViewUrl`,
     *                          `runtimeId` will be set automatically according to the scheme 'CommPlugin_X' in case none is provided
     * @param initialParameterValues optional initial parameter values to set, if not provided default parameter values will be used
     * @param settings optional object of settings to restore
     *                  will be restored immediately in case the viewer has been constructed with `useModelSettings` set to false
     *                  will be restored after stored model settings have been restored in case the viewer has been constructed with `useModelSettings` set to true
     *                  will be ignored from the second CommPlugin instantiated in case the viewer has been constructed with `useModelSettings` set to true
     */
    SdViewerAppBase.prototype.addModelToScene = function (commPluginOptions, initialParameterValues, settings) {
        if (initialParameterValues === void 0) { initialParameterValues = null; }
        if (settings === void 0) { settings = null; }
        return __awaiter(this, void 0, void 0, function () {
            var updateSettings, refreshRequired, paramUpdateResult;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!commPluginOptions || !commPluginOptions.ticket) {
                            return [2 /*return*/];
                        }
                        if (!settings) return [3 /*break*/, 3];
                        updateSettings = function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.api.updateSettingsAsync(settings)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); };
                        if (!(this.api.getSetting('useModelSettings') && !this.api.getSetting('hasRestoredSettings'))) return [3 /*break*/, 1];
                        this.api.addEventListener(this.api.EVENTTYPE.SETTINGS_REGISTERED, updateSettings);
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, updateSettings()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        commPluginOptions.deferGeometryLoading = true;
                        commPluginOptions.runtimeId = commPluginOptions.runtimeId || ('CommPlugin_' + (++this.commPluginNum));
                        return [4 /*yield*/, this.api.plugins.registerCommPluginAsync(commPluginOptions)];
                    case 4:
                        _a.sent();
                        refreshRequired = true;
                        if (!initialParameterValues) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.api.parameters.updateAsync(initialParameterValues)];
                    case 5:
                        paramUpdateResult = _a.sent();
                        refreshRequired = paramUpdateResult.data.every(function (o) { return (o.result === _this.api.parameters.RESULT.VALUE_EXISTS); });
                        _a.label = 6;
                    case 6:
                        if (!refreshRequired) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.api.plugins.refreshPluginAsync(commPluginOptions.runtimeId)];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8: return [2 /*return*/, commPluginOptions.runtimeId];
                }
            });
        });
    };
    return SdViewerAppBase;
}());
exports.SdViewerAppBase = SdViewerAppBase;


/***/ }),

/***/ "./js/SdViewerControls.js":
/*!********************************!*\
  !*** ./js/SdViewerControls.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SdViewerControls = void 0;
var shapediver_types_1 = __webpack_require__(/*! shapediver-types */ "./node_modules/shapediver-types/lib/SDVApp.js");
var SdViewerControls = /** @class */ (function () {
    /**
     * @param api the ShapeDiver Viewer API instance to use
     * @param options options for instantiating the dat.gui
     */
    function SdViewerControls(api) {
        this.api = api;
    }
    /**
     * Hides controls for all registered parameters
     */
    SdViewerControls.prototype.hideAllParameterControls = function () {
        this.toggleAllParameters(false);
    };
    /**
     * Shows controls for all registered parameters
     */
    SdViewerControls.prototype.showAllParameterControls = function () {
        this.toggleAllParameters(true);
    };
    SdViewerControls.prototype.toggleAllParameters = function (show) {
        var params = [];
        this.api.parameters.get().data.forEach(function (p) {
            params.push({ id: p.id, hidden: !show });
        });
        this.api.parameters.updateProperties(params);
    };
    /**
     * Hides controls for all registered exports
     */
    SdViewerControls.prototype.hideAllExportControls = function () {
        this.toggleAllExports(false);
    };
    /**
     * Shows controls for all registered exports
     */
    SdViewerControls.prototype.showAllExportControls = function () {
        this.toggleAllExports(true);
    };
    SdViewerControls.prototype.toggleAllExports = function (show) {
        var exports = [];
        this.api.exports.get().data.forEach(function (p) {
            exports.push({ id: p.id, hidden: !show });
        });
        this.api.exports.updateProperties(exports);
    };
    /**
     * Show or hide parameter controls tab
     * @param show
     */
    SdViewerControls.prototype.toggleControlsTab = function (show) {
        this.api.apps.overlays.buttonOnClick(shapediver_types_1.Overlays.ButtonType.CONTROLS, show);
    };
    /**
     * Show or hide setting controls tab
     * @param show
     */
    SdViewerControls.prototype.toggleSettingsTab = function (show) {
        this.api.apps.overlays.buttonOnClick(shapediver_types_1.Overlays.ButtonType.SETTINGS, show);
    };
    /**
     * Add a control for a model parameter to the GUI
     * @param filter filter to use for searching the parameter to add, must result in a single parameter
     * @param name optional name to display in the GUI
     * @param group TODO optional GUI group to add the parameter to
     */
    SdViewerControls.prototype.addParameterControl = function (filter, name, group) {
        if (group === void 0) { group = 'Parameters'; }
        return __awaiter(this, void 0, void 0, function () {
            var params, def, param, id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = this.api.parameters.get(filter).data;
                        if (params.length !== 1) {
                            return [2 /*return*/];
                        }
                        def = params[0];
                        param = this.mapParameter(def);
                        if (name)
                            param.name = name;
                        return [4 /*yield*/, this.api.apps.controls.createParameter(param)];
                    case 1:
                        id = _a.sent();
                        return [2 /*return*/, id];
                }
            });
        });
    };
    /**
     * Update an existing parameter control according to a (partial) parameter definition, e.g. in order to update min/max values of a slider
     * @param filter filter to use for searching the parameter to update, must result in a single parameter
     * @param def (partial) parameter definition to use for updating the control
     */
    SdViewerControls.prototype.updateParameterControl = function (filter, def) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    /**
     * TODO to be replaced by a call to the viewer controls which must already contain this logic, no sense to duplicate this functionality
     * @param type
     */
    SdViewerControls.prototype.mapParameterType = function (type) {
        if (type === this.api.parameters.TYPE.BOOL) {
            return shapediver_types_1.Controls.ControlParameterType.CHECKBOX;
        }
        else if (type === this.api.parameters.TYPE.EVEN || type === this.api.parameters.TYPE.FLOAT || type === this.api.parameters.TYPE.INT || type === this.api.parameters.TYPE.ODD) {
            return shapediver_types_1.Controls.ControlParameterType.SLIDER;
        }
        else if (type === this.api.parameters.TYPE.COLOR) {
            return shapediver_types_1.Controls.ControlParameterType.COLOR;
        }
        else if (type === this.api.parameters.TYPE.FILE) {
            return shapediver_types_1.Controls.ControlParameterType.FILE;
        }
        else if (type === this.api.parameters.TYPE.STRING) {
            return shapediver_types_1.Controls.ControlParameterType.STRING;
        }
        return shapediver_types_1.Controls.ControlParameterType.STATICHTML;
    };
    /**
     * TODO to be replaced by a call to the viewer controls which must already contain this logic, no sense to duplicate this functionality
     * @param def
     */
    SdViewerControls.prototype.mapParameter = function (def) {
        def.visualization;
        var param = { type: this.mapParameterType(def.type) };
        param.name = def.name;
        param.value = def.defval;
        if (def.min)
            param.min = parseFloat(def.min);
        if (def.max)
            param.max = parseFloat(def.max);
        if (def.decimalplaces !== undefined)
            param.step = Math.pow(0.1, def.decimalplaces);
        param.link = { id: def.id, plugin: def.plugin };
        return param;
    };
    return SdViewerControls;
}());
exports.SdViewerControls = SdViewerControls;


/***/ }),

/***/ "./js/SdViewerDatGUI.js":
/*!******************************!*\
  !*** ./js/SdViewerDatGUI.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SdViewerDatGUI = void 0;
var dat_gui_1 = __webpack_require__(/*! dat.gui */ "./node_modules/dat.gui/build/dat.gui.module.js");
var SdViewerDatGUI = /** @class */ (function () {
    /**
     * @param api the ShapeDiver Viewer API instance to use
     * @param options options for instantiating the dat.gui
     */
    function SdViewerDatGUI(api, options) {
        this.api = api;
        this.gui = new dat_gui_1.GUI(options);
    }
    SdViewerDatGUI.prototype.addOrGetFolder = function (name, openIfNew) {
        if (openIfNew === void 0) { openIfNew = true; }
        var folder = this.gui.__folders[name];
        if (!folder) {
            folder = this.gui.addFolder(name);
            if (openIfNew) {
                folder.open();
            }
        }
        return folder;
    };
    /**
     * Add a model parameter to the GUI
     * @param filter filter to use for searching the parameter to add, must result in a single parameter
     * @param name optional name to display in the GUI
     * @param folder optional GUI folder to add the parameter to
     */
    SdViewerDatGUI.prototype.addParameter = function (filter, name, folder) {
        var _this = this;
        if (folder === void 0) { folder = 'Parameters'; }
        var params = this.api.parameters.get(filter).data;
        if (params.length !== 1) {
            return;
        }
        var param = params[0];
        var isBool = param.type === 'Bool';
        var isNum = param.type === 'Float' || param.type === 'Int' || param.type === 'Even' || param.type === 'Odd';
        if (!isBool && !isNum) {
            return;
        }
        name = name ? name : param.name;
        var valueObject = {};
        valueObject[name] = param.value;
        var controller = this.addOrGetFolder(folder).add(valueObject, name);
        if (isNum) {
            controller = controller.min(Number.parseFloat(param.min));
            controller = controller.max(Number.parseFloat(param.max));
            if (param.type === 'Int') {
                controller = controller.step(1);
            }
            else if (param.type === 'Odd' || param.type === 'Even') {
                controller = controller.step(2);
            }
            else if (param.type === 'Float') {
                controller = controller.step(Math.pow(0.1, param.decimalplaces));
            }
        }
        controller = controller.onFinishChange(function (v) {
            _this.api.parameters.updateAsync({ id: param.id, value: controller.getValue() });
        });
        return controller;
    };
    /**
     * Add a slider to the GUI
     * @param name
     * @param defval
     * @param min
     * @param max
     * @param step
     * @param cb
     * @param folder
     */
    SdViewerDatGUI.prototype.addSlider = function (name, defval, min, max, step, cb, folder) {
        if (folder === void 0) { folder = 'Sliders'; }
        var valueObject = {};
        valueObject[name] = defval;
        return this.addOrGetFolder(folder).add(valueObject, name, min, max, step).onChange(function (v) {
            cb(v);
        });
    };
    /**
     * Add a boolean toggle to the GUI
     * @param name
     * @param defval
     * @param cb
     * @param folder
     */
    SdViewerDatGUI.prototype.addToggle = function (name, defval, cb, folder) {
        if (folder === void 0) { folder = 'Toggles'; }
        var valueObject = {};
        valueObject[name] = defval;
        return this.addOrGetFolder(folder).add(valueObject, name).onChange(function (v) {
            cb(v);
        });
    };
    /**
     * Add a button to the GUI
     * @param name
     * @param cb
     * @param folder
     */
    SdViewerDatGUI.prototype.addButton = function (name, cb, folder) {
        if (folder === void 0) { folder = 'Buttons'; }
        var valueObject = {};
        valueObject[name] = function () { };
        return this.addOrGetFolder(folder).add(valueObject, name).onChange(function () {
            cb();
        });
    };
    return SdViewerDatGUI;
}());
exports.SdViewerDatGUI = SdViewerDatGUI;


/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var SdViewerApp_1 = __webpack_require__(/*! ./SdViewerApp */ "./js/SdViewerApp.js");
// ShapeDiver Viewer Initialisation
var initSdvApp = function ( /*event*/) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var api, app;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    api = new SDVApp.ParametricViewer({
                        useModelSettings: true,
                        createButtons: true,
                    });
                    app = new SdViewerApp_1.SdViewerApp(api);
                    // set app and api as properties of window object
                    window.app = app;
                    window.api = api;
                    // load model
                    return [4 /*yield*/, app.loadModel()];
                case 1:
                    // load model
                    _b.sent();
                    // create custom controls and show them
                    app.createCustomControls();
                    (_a = app.controls) === null || _a === void 0 ? void 0 : _a.toggleControlsTab(true);
                    return [2 /*return*/];
            }
        });
    });
};
// there is a slight chance that loading has been completed already
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSdvApp, false);
}
else {
    initSdvApp();
}


/***/ }),

/***/ "./node_modules/dat.gui/build/dat.gui.module.js":
/*!******************************************************!*\
  !*** ./node_modules/dat.gui/build/dat.gui.module.js ***!
  \******************************************************/
/*! exports provided: color, controllers, dom, gui, GUI, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controllers", function() { return controllers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return dom$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gui", function() { return gui; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUI", function() { return GUI$1; });
/**
 * dat-gui JavaScript Controller Library
 * http://code.google.com/p/dat-gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);

  return css;
}

function colorToString (color, forceCSSHex) {
  var colorFormat = color.__state.conversionName.toString();
  var r = Math.round(color.r);
  var g = Math.round(color.g);
  var b = Math.round(color.b);
  var a = color.a;
  var h = Math.round(color.h);
  var s = color.s.toFixed(1);
  var v = color.v.toFixed(1);
  if (forceCSSHex || colorFormat === 'THREE_CHAR_HEX' || colorFormat === 'SIX_CHAR_HEX') {
    var str = color.hex.toString(16);
    while (str.length < 6) {
      str = '0' + str;
    }
    return '#' + str;
  } else if (colorFormat === 'CSS_RGB') {
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  } else if (colorFormat === 'CSS_RGBA') {
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  } else if (colorFormat === 'HEX') {
    return '0x' + color.hex.toString(16);
  } else if (colorFormat === 'RGB_ARRAY') {
    return '[' + r + ',' + g + ',' + b + ']';
  } else if (colorFormat === 'RGBA_ARRAY') {
    return '[' + r + ',' + g + ',' + b + ',' + a + ']';
  } else if (colorFormat === 'RGB_OBJ') {
    return '{r:' + r + ',g:' + g + ',b:' + b + '}';
  } else if (colorFormat === 'RGBA_OBJ') {
    return '{r:' + r + ',g:' + g + ',b:' + b + ',a:' + a + '}';
  } else if (colorFormat === 'HSV_OBJ') {
    return '{h:' + h + ',s:' + s + ',v:' + v + '}';
  } else if (colorFormat === 'HSVA_OBJ') {
    return '{h:' + h + ',s:' + s + ',v:' + v + ',a:' + a + '}';
  }
  return 'unknown format';
}

var ARR_EACH = Array.prototype.forEach;
var ARR_SLICE = Array.prototype.slice;
var Common = {
  BREAK: {},
  extend: function extend(target) {
    this.each(ARR_SLICE.call(arguments, 1), function (obj) {
      var keys = this.isObject(obj) ? Object.keys(obj) : [];
      keys.forEach(function (key) {
        if (!this.isUndefined(obj[key])) {
          target[key] = obj[key];
        }
      }.bind(this));
    }, this);
    return target;
  },
  defaults: function defaults(target) {
    this.each(ARR_SLICE.call(arguments, 1), function (obj) {
      var keys = this.isObject(obj) ? Object.keys(obj) : [];
      keys.forEach(function (key) {
        if (this.isUndefined(target[key])) {
          target[key] = obj[key];
        }
      }.bind(this));
    }, this);
    return target;
  },
  compose: function compose() {
    var toCall = ARR_SLICE.call(arguments);
    return function () {
      var args = ARR_SLICE.call(arguments);
      for (var i = toCall.length - 1; i >= 0; i--) {
        args = [toCall[i].apply(this, args)];
      }
      return args[0];
    };
  },
  each: function each(obj, itr, scope) {
    if (!obj) {
      return;
    }
    if (ARR_EACH && obj.forEach && obj.forEach === ARR_EACH) {
      obj.forEach(itr, scope);
    } else if (obj.length === obj.length + 0) {
      var key = void 0;
      var l = void 0;
      for (key = 0, l = obj.length; key < l; key++) {
        if (key in obj && itr.call(scope, obj[key], key) === this.BREAK) {
          return;
        }
      }
    } else {
      for (var _key in obj) {
        if (itr.call(scope, obj[_key], _key) === this.BREAK) {
          return;
        }
      }
    }
  },
  defer: function defer(fnc) {
    setTimeout(fnc, 0);
  },
  debounce: function debounce(func, threshold, callImmediately) {
    var timeout = void 0;
    return function () {
      var obj = this;
      var args = arguments;
      function delayed() {
        timeout = null;
        if (!callImmediately) func.apply(obj, args);
      }
      var callNow = callImmediately || !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(delayed, threshold);
      if (callNow) {
        func.apply(obj, args);
      }
    };
  },
  toArray: function toArray(obj) {
    if (obj.toArray) return obj.toArray();
    return ARR_SLICE.call(obj);
  },
  isUndefined: function isUndefined(obj) {
    return obj === undefined;
  },
  isNull: function isNull(obj) {
    return obj === null;
  },
  isNaN: function (_isNaN) {
    function isNaN(_x) {
      return _isNaN.apply(this, arguments);
    }
    isNaN.toString = function () {
      return _isNaN.toString();
    };
    return isNaN;
  }(function (obj) {
    return isNaN(obj);
  }),
  isArray: Array.isArray || function (obj) {
    return obj.constructor === Array;
  },
  isObject: function isObject(obj) {
    return obj === Object(obj);
  },
  isNumber: function isNumber(obj) {
    return obj === obj + 0;
  },
  isString: function isString(obj) {
    return obj === obj + '';
  },
  isBoolean: function isBoolean(obj) {
    return obj === false || obj === true;
  },
  isFunction: function isFunction(obj) {
    return obj instanceof Function;
  }
};

var INTERPRETATIONS = [
{
  litmus: Common.isString,
  conversions: {
    THREE_CHAR_HEX: {
      read: function read(original) {
        var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
        if (test === null) {
          return false;
        }
        return {
          space: 'HEX',
          hex: parseInt('0x' + test[1].toString() + test[1].toString() + test[2].toString() + test[2].toString() + test[3].toString() + test[3].toString(), 0)
        };
      },
      write: colorToString
    },
    SIX_CHAR_HEX: {
      read: function read(original) {
        var test = original.match(/^#([A-F0-9]{6})$/i);
        if (test === null) {
          return false;
        }
        return {
          space: 'HEX',
          hex: parseInt('0x' + test[1].toString(), 0)
        };
      },
      write: colorToString
    },
    CSS_RGB: {
      read: function read(original) {
        var test = original.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
        if (test === null) {
          return false;
        }
        return {
          space: 'RGB',
          r: parseFloat(test[1]),
          g: parseFloat(test[2]),
          b: parseFloat(test[3])
        };
      },
      write: colorToString
    },
    CSS_RGBA: {
      read: function read(original) {
        var test = original.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
        if (test === null) {
          return false;
        }
        return {
          space: 'RGB',
          r: parseFloat(test[1]),
          g: parseFloat(test[2]),
          b: parseFloat(test[3]),
          a: parseFloat(test[4])
        };
      },
      write: colorToString
    }
  }
},
{
  litmus: Common.isNumber,
  conversions: {
    HEX: {
      read: function read(original) {
        return {
          space: 'HEX',
          hex: original,
          conversionName: 'HEX'
        };
      },
      write: function write(color) {
        return color.hex;
      }
    }
  }
},
{
  litmus: Common.isArray,
  conversions: {
    RGB_ARRAY: {
      read: function read(original) {
        if (original.length !== 3) {
          return false;
        }
        return {
          space: 'RGB',
          r: original[0],
          g: original[1],
          b: original[2]
        };
      },
      write: function write(color) {
        return [color.r, color.g, color.b];
      }
    },
    RGBA_ARRAY: {
      read: function read(original) {
        if (original.length !== 4) return false;
        return {
          space: 'RGB',
          r: original[0],
          g: original[1],
          b: original[2],
          a: original[3]
        };
      },
      write: function write(color) {
        return [color.r, color.g, color.b, color.a];
      }
    }
  }
},
{
  litmus: Common.isObject,
  conversions: {
    RGBA_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.r) && Common.isNumber(original.g) && Common.isNumber(original.b) && Common.isNumber(original.a)) {
          return {
            space: 'RGB',
            r: original.r,
            g: original.g,
            b: original.b,
            a: original.a
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          r: color.r,
          g: color.g,
          b: color.b,
          a: color.a
        };
      }
    },
    RGB_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.r) && Common.isNumber(original.g) && Common.isNumber(original.b)) {
          return {
            space: 'RGB',
            r: original.r,
            g: original.g,
            b: original.b
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          r: color.r,
          g: color.g,
          b: color.b
        };
      }
    },
    HSVA_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.h) && Common.isNumber(original.s) && Common.isNumber(original.v) && Common.isNumber(original.a)) {
          return {
            space: 'HSV',
            h: original.h,
            s: original.s,
            v: original.v,
            a: original.a
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          h: color.h,
          s: color.s,
          v: color.v,
          a: color.a
        };
      }
    },
    HSV_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.h) && Common.isNumber(original.s) && Common.isNumber(original.v)) {
          return {
            space: 'HSV',
            h: original.h,
            s: original.s,
            v: original.v
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          h: color.h,
          s: color.s,
          v: color.v
        };
      }
    }
  }
}];
var result = void 0;
var toReturn = void 0;
var interpret = function interpret() {
  toReturn = false;
  var original = arguments.length > 1 ? Common.toArray(arguments) : arguments[0];
  Common.each(INTERPRETATIONS, function (family) {
    if (family.litmus(original)) {
      Common.each(family.conversions, function (conversion, conversionName) {
        result = conversion.read(original);
        if (toReturn === false && result !== false) {
          toReturn = result;
          result.conversionName = conversionName;
          result.conversion = conversion;
          return Common.BREAK;
        }
      });
      return Common.BREAK;
    }
  });
  return toReturn;
};

var tmpComponent = void 0;
var ColorMath = {
  hsv_to_rgb: function hsv_to_rgb(h, s, v) {
    var hi = Math.floor(h / 60) % 6;
    var f = h / 60 - Math.floor(h / 60);
    var p = v * (1.0 - s);
    var q = v * (1.0 - f * s);
    var t = v * (1.0 - (1.0 - f) * s);
    var c = [[v, t, p], [q, v, p], [p, v, t], [p, q, v], [t, p, v], [v, p, q]][hi];
    return {
      r: c[0] * 255,
      g: c[1] * 255,
      b: c[2] * 255
    };
  },
  rgb_to_hsv: function rgb_to_hsv(r, g, b) {
    var min = Math.min(r, g, b);
    var max = Math.max(r, g, b);
    var delta = max - min;
    var h = void 0;
    var s = void 0;
    if (max !== 0) {
      s = delta / max;
    } else {
      return {
        h: NaN,
        s: 0,
        v: 0
      };
    }
    if (r === max) {
      h = (g - b) / delta;
    } else if (g === max) {
      h = 2 + (b - r) / delta;
    } else {
      h = 4 + (r - g) / delta;
    }
    h /= 6;
    if (h < 0) {
      h += 1;
    }
    return {
      h: h * 360,
      s: s,
      v: max / 255
    };
  },
  rgb_to_hex: function rgb_to_hex(r, g, b) {
    var hex = this.hex_with_component(0, 2, r);
    hex = this.hex_with_component(hex, 1, g);
    hex = this.hex_with_component(hex, 0, b);
    return hex;
  },
  component_from_hex: function component_from_hex(hex, componentIndex) {
    return hex >> componentIndex * 8 & 0xFF;
  },
  hex_with_component: function hex_with_component(hex, componentIndex, value) {
    return value << (tmpComponent = componentIndex * 8) | hex & ~(0xFF << tmpComponent);
  }
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Color = function () {
  function Color() {
    classCallCheck(this, Color);
    this.__state = interpret.apply(this, arguments);
    if (this.__state === false) {
      throw new Error('Failed to interpret color arguments');
    }
    this.__state.a = this.__state.a || 1;
  }
  createClass(Color, [{
    key: 'toString',
    value: function toString() {
      return colorToString(this);
    }
  }, {
    key: 'toHexString',
    value: function toHexString() {
      return colorToString(this, true);
    }
  }, {
    key: 'toOriginal',
    value: function toOriginal() {
      return this.__state.conversion.write(this);
    }
  }]);
  return Color;
}();
function defineRGBComponent(target, component, componentHexIndex) {
  Object.defineProperty(target, component, {
    get: function get$$1() {
      if (this.__state.space === 'RGB') {
        return this.__state[component];
      }
      Color.recalculateRGB(this, component, componentHexIndex);
      return this.__state[component];
    },
    set: function set$$1(v) {
      if (this.__state.space !== 'RGB') {
        Color.recalculateRGB(this, component, componentHexIndex);
        this.__state.space = 'RGB';
      }
      this.__state[component] = v;
    }
  });
}
function defineHSVComponent(target, component) {
  Object.defineProperty(target, component, {
    get: function get$$1() {
      if (this.__state.space === 'HSV') {
        return this.__state[component];
      }
      Color.recalculateHSV(this);
      return this.__state[component];
    },
    set: function set$$1(v) {
      if (this.__state.space !== 'HSV') {
        Color.recalculateHSV(this);
        this.__state.space = 'HSV';
      }
      this.__state[component] = v;
    }
  });
}
Color.recalculateRGB = function (color, component, componentHexIndex) {
  if (color.__state.space === 'HEX') {
    color.__state[component] = ColorMath.component_from_hex(color.__state.hex, componentHexIndex);
  } else if (color.__state.space === 'HSV') {
    Common.extend(color.__state, ColorMath.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v));
  } else {
    throw new Error('Corrupted color state');
  }
};
Color.recalculateHSV = function (color) {
  var result = ColorMath.rgb_to_hsv(color.r, color.g, color.b);
  Common.extend(color.__state, {
    s: result.s,
    v: result.v
  });
  if (!Common.isNaN(result.h)) {
    color.__state.h = result.h;
  } else if (Common.isUndefined(color.__state.h)) {
    color.__state.h = 0;
  }
};
Color.COMPONENTS = ['r', 'g', 'b', 'h', 's', 'v', 'hex', 'a'];
defineRGBComponent(Color.prototype, 'r', 2);
defineRGBComponent(Color.prototype, 'g', 1);
defineRGBComponent(Color.prototype, 'b', 0);
defineHSVComponent(Color.prototype, 'h');
defineHSVComponent(Color.prototype, 's');
defineHSVComponent(Color.prototype, 'v');
Object.defineProperty(Color.prototype, 'a', {
  get: function get$$1() {
    return this.__state.a;
  },
  set: function set$$1(v) {
    this.__state.a = v;
  }
});
Object.defineProperty(Color.prototype, 'hex', {
  get: function get$$1() {
    if (this.__state.space !== 'HEX') {
      this.__state.hex = ColorMath.rgb_to_hex(this.r, this.g, this.b);
      this.__state.space = 'HEX';
    }
    return this.__state.hex;
  },
  set: function set$$1(v) {
    this.__state.space = 'HEX';
    this.__state.hex = v;
  }
});

var Controller = function () {
  function Controller(object, property) {
    classCallCheck(this, Controller);
    this.initialValue = object[property];
    this.domElement = document.createElement('div');
    this.object = object;
    this.property = property;
    this.__onChange = undefined;
    this.__onFinishChange = undefined;
  }
  createClass(Controller, [{
    key: 'onChange',
    value: function onChange(fnc) {
      this.__onChange = fnc;
      return this;
    }
  }, {
    key: 'onFinishChange',
    value: function onFinishChange(fnc) {
      this.__onFinishChange = fnc;
      return this;
    }
  }, {
    key: 'setValue',
    value: function setValue(newValue) {
      this.object[this.property] = newValue;
      if (this.__onChange) {
        this.__onChange.call(this, newValue);
      }
      this.updateDisplay();
      return this;
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.object[this.property];
    }
  }, {
    key: 'updateDisplay',
    value: function updateDisplay() {
      return this;
    }
  }, {
    key: 'isModified',
    value: function isModified() {
      return this.initialValue !== this.getValue();
    }
  }]);
  return Controller;
}();

var EVENT_MAP = {
  HTMLEvents: ['change'],
  MouseEvents: ['click', 'mousemove', 'mousedown', 'mouseup', 'mouseover'],
  KeyboardEvents: ['keydown']
};
var EVENT_MAP_INV = {};
Common.each(EVENT_MAP, function (v, k) {
  Common.each(v, function (e) {
    EVENT_MAP_INV[e] = k;
  });
});
var CSS_VALUE_PIXELS = /(\d+(\.\d+)?)px/;
function cssValueToPixels(val) {
  if (val === '0' || Common.isUndefined(val)) {
    return 0;
  }
  var match = val.match(CSS_VALUE_PIXELS);
  if (!Common.isNull(match)) {
    return parseFloat(match[1]);
  }
  return 0;
}
var dom = {
  makeSelectable: function makeSelectable(elem, selectable) {
    if (elem === undefined || elem.style === undefined) return;
    elem.onselectstart = selectable ? function () {
      return false;
    } : function () {};
    elem.style.MozUserSelect = selectable ? 'auto' : 'none';
    elem.style.KhtmlUserSelect = selectable ? 'auto' : 'none';
    elem.unselectable = selectable ? 'on' : 'off';
  },
  makeFullscreen: function makeFullscreen(elem, hor, vert) {
    var vertical = vert;
    var horizontal = hor;
    if (Common.isUndefined(horizontal)) {
      horizontal = true;
    }
    if (Common.isUndefined(vertical)) {
      vertical = true;
    }
    elem.style.position = 'absolute';
    if (horizontal) {
      elem.style.left = 0;
      elem.style.right = 0;
    }
    if (vertical) {
      elem.style.top = 0;
      elem.style.bottom = 0;
    }
  },
  fakeEvent: function fakeEvent(elem, eventType, pars, aux) {
    var params = pars || {};
    var className = EVENT_MAP_INV[eventType];
    if (!className) {
      throw new Error('Event type ' + eventType + ' not supported.');
    }
    var evt = document.createEvent(className);
    switch (className) {
      case 'MouseEvents':
        {
          var clientX = params.x || params.clientX || 0;
          var clientY = params.y || params.clientY || 0;
          evt.initMouseEvent(eventType, params.bubbles || false, params.cancelable || true, window, params.clickCount || 1, 0,
          0,
          clientX,
          clientY,
          false, false, false, false, 0, null);
          break;
        }
      case 'KeyboardEvents':
        {
          var init = evt.initKeyboardEvent || evt.initKeyEvent;
          Common.defaults(params, {
            cancelable: true,
            ctrlKey: false,
            altKey: false,
            shiftKey: false,
            metaKey: false,
            keyCode: undefined,
            charCode: undefined
          });
          init(eventType, params.bubbles || false, params.cancelable, window, params.ctrlKey, params.altKey, params.shiftKey, params.metaKey, params.keyCode, params.charCode);
          break;
        }
      default:
        {
          evt.initEvent(eventType, params.bubbles || false, params.cancelable || true);
          break;
        }
    }
    Common.defaults(evt, aux);
    elem.dispatchEvent(evt);
  },
  bind: function bind(elem, event, func, newBool) {
    var bool = newBool || false;
    if (elem.addEventListener) {
      elem.addEventListener(event, func, bool);
    } else if (elem.attachEvent) {
      elem.attachEvent('on' + event, func);
    }
    return dom;
  },
  unbind: function unbind(elem, event, func, newBool) {
    var bool = newBool || false;
    if (elem.removeEventListener) {
      elem.removeEventListener(event, func, bool);
    } else if (elem.detachEvent) {
      elem.detachEvent('on' + event, func);
    }
    return dom;
  },
  addClass: function addClass(elem, className) {
    if (elem.className === undefined) {
      elem.className = className;
    } else if (elem.className !== className) {
      var classes = elem.className.split(/ +/);
      if (classes.indexOf(className) === -1) {
        classes.push(className);
        elem.className = classes.join(' ').replace(/^\s+/, '').replace(/\s+$/, '');
      }
    }
    return dom;
  },
  removeClass: function removeClass(elem, className) {
    if (className) {
      if (elem.className === className) {
        elem.removeAttribute('class');
      } else {
        var classes = elem.className.split(/ +/);
        var index = classes.indexOf(className);
        if (index !== -1) {
          classes.splice(index, 1);
          elem.className = classes.join(' ');
        }
      }
    } else {
      elem.className = undefined;
    }
    return dom;
  },
  hasClass: function hasClass(elem, className) {
    return new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)').test(elem.className) || false;
  },
  getWidth: function getWidth(elem) {
    var style = getComputedStyle(elem);
    return cssValueToPixels(style['border-left-width']) + cssValueToPixels(style['border-right-width']) + cssValueToPixels(style['padding-left']) + cssValueToPixels(style['padding-right']) + cssValueToPixels(style.width);
  },
  getHeight: function getHeight(elem) {
    var style = getComputedStyle(elem);
    return cssValueToPixels(style['border-top-width']) + cssValueToPixels(style['border-bottom-width']) + cssValueToPixels(style['padding-top']) + cssValueToPixels(style['padding-bottom']) + cssValueToPixels(style.height);
  },
  getOffset: function getOffset(el) {
    var elem = el;
    var offset = { left: 0, top: 0 };
    if (elem.offsetParent) {
      do {
        offset.left += elem.offsetLeft;
        offset.top += elem.offsetTop;
        elem = elem.offsetParent;
      } while (elem);
    }
    return offset;
  },
  isActive: function isActive(elem) {
    return elem === document.activeElement && (elem.type || elem.href);
  }
};

var BooleanController = function (_Controller) {
  inherits(BooleanController, _Controller);
  function BooleanController(object, property) {
    classCallCheck(this, BooleanController);
    var _this2 = possibleConstructorReturn(this, (BooleanController.__proto__ || Object.getPrototypeOf(BooleanController)).call(this, object, property));
    var _this = _this2;
    _this2.__prev = _this2.getValue();
    _this2.__checkbox = document.createElement('input');
    _this2.__checkbox.setAttribute('type', 'checkbox');
    function onChange() {
      _this.setValue(!_this.__prev);
    }
    dom.bind(_this2.__checkbox, 'change', onChange, false);
    _this2.domElement.appendChild(_this2.__checkbox);
    _this2.updateDisplay();
    return _this2;
  }
  createClass(BooleanController, [{
    key: 'setValue',
    value: function setValue(v) {
      var toReturn = get(BooleanController.prototype.__proto__ || Object.getPrototypeOf(BooleanController.prototype), 'setValue', this).call(this, v);
      if (this.__onFinishChange) {
        this.__onFinishChange.call(this, this.getValue());
      }
      this.__prev = this.getValue();
      return toReturn;
    }
  }, {
    key: 'updateDisplay',
    value: function updateDisplay() {
      if (this.getValue() === true) {
        this.__checkbox.setAttribute('checked', 'checked');
        this.__checkbox.checked = true;
        this.__prev = true;
      } else {
        this.__checkbox.checked = false;
        this.__prev = false;
      }
      return get(BooleanController.prototype.__proto__ || Object.getPrototypeOf(BooleanController.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return BooleanController;
}(Controller);

var OptionController = function (_Controller) {
  inherits(OptionController, _Controller);
  function OptionController(object, property, opts) {
    classCallCheck(this, OptionController);
    var _this2 = possibleConstructorReturn(this, (OptionController.__proto__ || Object.getPrototypeOf(OptionController)).call(this, object, property));
    var options = opts;
    var _this = _this2;
    _this2.__select = document.createElement('select');
    if (Common.isArray(options)) {
      var map = {};
      Common.each(options, function (element) {
        map[element] = element;
      });
      options = map;
    }
    Common.each(options, function (value, key) {
      var opt = document.createElement('option');
      opt.innerHTML = key;
      opt.setAttribute('value', value);
      _this.__select.appendChild(opt);
    });
    _this2.updateDisplay();
    dom.bind(_this2.__select, 'change', function () {
      var desiredValue = this.options[this.selectedIndex].value;
      _this.setValue(desiredValue);
    });
    _this2.domElement.appendChild(_this2.__select);
    return _this2;
  }
  createClass(OptionController, [{
    key: 'setValue',
    value: function setValue(v) {
      var toReturn = get(OptionController.prototype.__proto__ || Object.getPrototypeOf(OptionController.prototype), 'setValue', this).call(this, v);
      if (this.__onFinishChange) {
        this.__onFinishChange.call(this, this.getValue());
      }
      return toReturn;
    }
  }, {
    key: 'updateDisplay',
    value: function updateDisplay() {
      if (dom.isActive(this.__select)) return this;
      this.__select.value = this.getValue();
      return get(OptionController.prototype.__proto__ || Object.getPrototypeOf(OptionController.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return OptionController;
}(Controller);

var StringController = function (_Controller) {
  inherits(StringController, _Controller);
  function StringController(object, property) {
    classCallCheck(this, StringController);
    var _this2 = possibleConstructorReturn(this, (StringController.__proto__ || Object.getPrototypeOf(StringController)).call(this, object, property));
    var _this = _this2;
    function onChange() {
      _this.setValue(_this.__input.value);
    }
    function onBlur() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    _this2.__input = document.createElement('input');
    _this2.__input.setAttribute('type', 'text');
    dom.bind(_this2.__input, 'keyup', onChange);
    dom.bind(_this2.__input, 'change', onChange);
    dom.bind(_this2.__input, 'blur', onBlur);
    dom.bind(_this2.__input, 'keydown', function (e) {
      if (e.keyCode === 13) {
        this.blur();
      }
    });
    _this2.updateDisplay();
    _this2.domElement.appendChild(_this2.__input);
    return _this2;
  }
  createClass(StringController, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      if (!dom.isActive(this.__input)) {
        this.__input.value = this.getValue();
      }
      return get(StringController.prototype.__proto__ || Object.getPrototypeOf(StringController.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return StringController;
}(Controller);

function numDecimals(x) {
  var _x = x.toString();
  if (_x.indexOf('.') > -1) {
    return _x.length - _x.indexOf('.') - 1;
  }
  return 0;
}
var NumberController = function (_Controller) {
  inherits(NumberController, _Controller);
  function NumberController(object, property, params) {
    classCallCheck(this, NumberController);
    var _this = possibleConstructorReturn(this, (NumberController.__proto__ || Object.getPrototypeOf(NumberController)).call(this, object, property));
    var _params = params || {};
    _this.__min = _params.min;
    _this.__max = _params.max;
    _this.__step = _params.step;
    if (Common.isUndefined(_this.__step)) {
      if (_this.initialValue === 0) {
        _this.__impliedStep = 1;
      } else {
        _this.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(_this.initialValue)) / Math.LN10)) / 10;
      }
    } else {
      _this.__impliedStep = _this.__step;
    }
    _this.__precision = numDecimals(_this.__impliedStep);
    return _this;
  }
  createClass(NumberController, [{
    key: 'setValue',
    value: function setValue(v) {
      var _v = v;
      if (this.__min !== undefined && _v < this.__min) {
        _v = this.__min;
      } else if (this.__max !== undefined && _v > this.__max) {
        _v = this.__max;
      }
      if (this.__step !== undefined && _v % this.__step !== 0) {
        _v = Math.round(_v / this.__step) * this.__step;
      }
      return get(NumberController.prototype.__proto__ || Object.getPrototypeOf(NumberController.prototype), 'setValue', this).call(this, _v);
    }
  }, {
    key: 'min',
    value: function min(minValue) {
      this.__min = minValue;
      return this;
    }
  }, {
    key: 'max',
    value: function max(maxValue) {
      this.__max = maxValue;
      return this;
    }
  }, {
    key: 'step',
    value: function step(stepValue) {
      this.__step = stepValue;
      this.__impliedStep = stepValue;
      this.__precision = numDecimals(stepValue);
      return this;
    }
  }]);
  return NumberController;
}(Controller);

function roundToDecimal(value, decimals) {
  var tenTo = Math.pow(10, decimals);
  return Math.round(value * tenTo) / tenTo;
}
var NumberControllerBox = function (_NumberController) {
  inherits(NumberControllerBox, _NumberController);
  function NumberControllerBox(object, property, params) {
    classCallCheck(this, NumberControllerBox);
    var _this2 = possibleConstructorReturn(this, (NumberControllerBox.__proto__ || Object.getPrototypeOf(NumberControllerBox)).call(this, object, property, params));
    _this2.__truncationSuspended = false;
    var _this = _this2;
    var prevY = void 0;
    function onChange() {
      var attempted = parseFloat(_this.__input.value);
      if (!Common.isNaN(attempted)) {
        _this.setValue(attempted);
      }
    }
    function onFinish() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    function onBlur() {
      onFinish();
    }
    function onMouseDrag(e) {
      var diff = prevY - e.clientY;
      _this.setValue(_this.getValue() + diff * _this.__impliedStep);
      prevY = e.clientY;
    }
    function onMouseUp() {
      dom.unbind(window, 'mousemove', onMouseDrag);
      dom.unbind(window, 'mouseup', onMouseUp);
      onFinish();
    }
    function onMouseDown(e) {
      dom.bind(window, 'mousemove', onMouseDrag);
      dom.bind(window, 'mouseup', onMouseUp);
      prevY = e.clientY;
    }
    _this2.__input = document.createElement('input');
    _this2.__input.setAttribute('type', 'text');
    dom.bind(_this2.__input, 'change', onChange);
    dom.bind(_this2.__input, 'blur', onBlur);
    dom.bind(_this2.__input, 'mousedown', onMouseDown);
    dom.bind(_this2.__input, 'keydown', function (e) {
      if (e.keyCode === 13) {
        _this.__truncationSuspended = true;
        this.blur();
        _this.__truncationSuspended = false;
        onFinish();
      }
    });
    _this2.updateDisplay();
    _this2.domElement.appendChild(_this2.__input);
    return _this2;
  }
  createClass(NumberControllerBox, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      this.__input.value = this.__truncationSuspended ? this.getValue() : roundToDecimal(this.getValue(), this.__precision);
      return get(NumberControllerBox.prototype.__proto__ || Object.getPrototypeOf(NumberControllerBox.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return NumberControllerBox;
}(NumberController);

function map(v, i1, i2, o1, o2) {
  return o1 + (o2 - o1) * ((v - i1) / (i2 - i1));
}
var NumberControllerSlider = function (_NumberController) {
  inherits(NumberControllerSlider, _NumberController);
  function NumberControllerSlider(object, property, min, max, step) {
    classCallCheck(this, NumberControllerSlider);
    var _this2 = possibleConstructorReturn(this, (NumberControllerSlider.__proto__ || Object.getPrototypeOf(NumberControllerSlider)).call(this, object, property, { min: min, max: max, step: step }));
    var _this = _this2;
    _this2.__background = document.createElement('div');
    _this2.__foreground = document.createElement('div');
    dom.bind(_this2.__background, 'mousedown', onMouseDown);
    dom.bind(_this2.__background, 'touchstart', onTouchStart);
    dom.addClass(_this2.__background, 'slider');
    dom.addClass(_this2.__foreground, 'slider-fg');
    function onMouseDown(e) {
      document.activeElement.blur();
      dom.bind(window, 'mousemove', onMouseDrag);
      dom.bind(window, 'mouseup', onMouseUp);
      onMouseDrag(e);
    }
    function onMouseDrag(e) {
      e.preventDefault();
      var bgRect = _this.__background.getBoundingClientRect();
      _this.setValue(map(e.clientX, bgRect.left, bgRect.right, _this.__min, _this.__max));
      return false;
    }
    function onMouseUp() {
      dom.unbind(window, 'mousemove', onMouseDrag);
      dom.unbind(window, 'mouseup', onMouseUp);
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    function onTouchStart(e) {
      if (e.touches.length !== 1) {
        return;
      }
      dom.bind(window, 'touchmove', onTouchMove);
      dom.bind(window, 'touchend', onTouchEnd);
      onTouchMove(e);
    }
    function onTouchMove(e) {
      var clientX = e.touches[0].clientX;
      var bgRect = _this.__background.getBoundingClientRect();
      _this.setValue(map(clientX, bgRect.left, bgRect.right, _this.__min, _this.__max));
    }
    function onTouchEnd() {
      dom.unbind(window, 'touchmove', onTouchMove);
      dom.unbind(window, 'touchend', onTouchEnd);
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    _this2.updateDisplay();
    _this2.__background.appendChild(_this2.__foreground);
    _this2.domElement.appendChild(_this2.__background);
    return _this2;
  }
  createClass(NumberControllerSlider, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      var pct = (this.getValue() - this.__min) / (this.__max - this.__min);
      this.__foreground.style.width = pct * 100 + '%';
      return get(NumberControllerSlider.prototype.__proto__ || Object.getPrototypeOf(NumberControllerSlider.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return NumberControllerSlider;
}(NumberController);

var FunctionController = function (_Controller) {
  inherits(FunctionController, _Controller);
  function FunctionController(object, property, text) {
    classCallCheck(this, FunctionController);
    var _this2 = possibleConstructorReturn(this, (FunctionController.__proto__ || Object.getPrototypeOf(FunctionController)).call(this, object, property));
    var _this = _this2;
    _this2.__button = document.createElement('div');
    _this2.__button.innerHTML = text === undefined ? 'Fire' : text;
    dom.bind(_this2.__button, 'click', function (e) {
      e.preventDefault();
      _this.fire();
      return false;
    });
    dom.addClass(_this2.__button, 'button');
    _this2.domElement.appendChild(_this2.__button);
    return _this2;
  }
  createClass(FunctionController, [{
    key: 'fire',
    value: function fire() {
      if (this.__onChange) {
        this.__onChange.call(this);
      }
      this.getValue().call(this.object);
      if (this.__onFinishChange) {
        this.__onFinishChange.call(this, this.getValue());
      }
    }
  }]);
  return FunctionController;
}(Controller);

var ColorController = function (_Controller) {
  inherits(ColorController, _Controller);
  function ColorController(object, property) {
    classCallCheck(this, ColorController);
    var _this2 = possibleConstructorReturn(this, (ColorController.__proto__ || Object.getPrototypeOf(ColorController)).call(this, object, property));
    _this2.__color = new Color(_this2.getValue());
    _this2.__temp = new Color(0);
    var _this = _this2;
    _this2.domElement = document.createElement('div');
    dom.makeSelectable(_this2.domElement, false);
    _this2.__selector = document.createElement('div');
    _this2.__selector.className = 'selector';
    _this2.__saturation_field = document.createElement('div');
    _this2.__saturation_field.className = 'saturation-field';
    _this2.__field_knob = document.createElement('div');
    _this2.__field_knob.className = 'field-knob';
    _this2.__field_knob_border = '2px solid ';
    _this2.__hue_knob = document.createElement('div');
    _this2.__hue_knob.className = 'hue-knob';
    _this2.__hue_field = document.createElement('div');
    _this2.__hue_field.className = 'hue-field';
    _this2.__input = document.createElement('input');
    _this2.__input.type = 'text';
    _this2.__input_textShadow = '0 1px 1px ';
    dom.bind(_this2.__input, 'keydown', function (e) {
      if (e.keyCode === 13) {
        onBlur.call(this);
      }
    });
    dom.bind(_this2.__input, 'blur', onBlur);
    dom.bind(_this2.__selector, 'mousedown', function ()        {
      dom.addClass(this, 'drag').bind(window, 'mouseup', function ()        {
        dom.removeClass(_this.__selector, 'drag');
      });
    });
    dom.bind(_this2.__selector, 'touchstart', function ()        {
      dom.addClass(this, 'drag').bind(window, 'touchend', function ()        {
        dom.removeClass(_this.__selector, 'drag');
      });
    });
    var valueField = document.createElement('div');
    Common.extend(_this2.__selector.style, {
      width: '122px',
      height: '102px',
      padding: '3px',
      backgroundColor: '#222',
      boxShadow: '0px 1px 3px rgba(0,0,0,0.3)'
    });
    Common.extend(_this2.__field_knob.style, {
      position: 'absolute',
      width: '12px',
      height: '12px',
      border: _this2.__field_knob_border + (_this2.__color.v < 0.5 ? '#fff' : '#000'),
      boxShadow: '0px 1px 3px rgba(0,0,0,0.5)',
      borderRadius: '12px',
      zIndex: 1
    });
    Common.extend(_this2.__hue_knob.style, {
      position: 'absolute',
      width: '15px',
      height: '2px',
      borderRight: '4px solid #fff',
      zIndex: 1
    });
    Common.extend(_this2.__saturation_field.style, {
      width: '100px',
      height: '100px',
      border: '1px solid #555',
      marginRight: '3px',
      display: 'inline-block',
      cursor: 'pointer'
    });
    Common.extend(valueField.style, {
      width: '100%',
      height: '100%',
      background: 'none'
    });
    linearGradient(valueField, 'top', 'rgba(0,0,0,0)', '#000');
    Common.extend(_this2.__hue_field.style, {
      width: '15px',
      height: '100px',
      border: '1px solid #555',
      cursor: 'ns-resize',
      position: 'absolute',
      top: '3px',
      right: '3px'
    });
    hueGradient(_this2.__hue_field);
    Common.extend(_this2.__input.style, {
      outline: 'none',
      textAlign: 'center',
      color: '#fff',
      border: 0,
      fontWeight: 'bold',
      textShadow: _this2.__input_textShadow + 'rgba(0,0,0,0.7)'
    });
    dom.bind(_this2.__saturation_field, 'mousedown', fieldDown);
    dom.bind(_this2.__saturation_field, 'touchstart', fieldDown);
    dom.bind(_this2.__field_knob, 'mousedown', fieldDown);
    dom.bind(_this2.__field_knob, 'touchstart', fieldDown);
    dom.bind(_this2.__hue_field, 'mousedown', fieldDownH);
    dom.bind(_this2.__hue_field, 'touchstart', fieldDownH);
    function fieldDown(e) {
      setSV(e);
      dom.bind(window, 'mousemove', setSV);
      dom.bind(window, 'touchmove', setSV);
      dom.bind(window, 'mouseup', fieldUpSV);
      dom.bind(window, 'touchend', fieldUpSV);
    }
    function fieldDownH(e) {
      setH(e);
      dom.bind(window, 'mousemove', setH);
      dom.bind(window, 'touchmove', setH);
      dom.bind(window, 'mouseup', fieldUpH);
      dom.bind(window, 'touchend', fieldUpH);
    }
    function fieldUpSV() {
      dom.unbind(window, 'mousemove', setSV);
      dom.unbind(window, 'touchmove', setSV);
      dom.unbind(window, 'mouseup', fieldUpSV);
      dom.unbind(window, 'touchend', fieldUpSV);
      onFinish();
    }
    function fieldUpH() {
      dom.unbind(window, 'mousemove', setH);
      dom.unbind(window, 'touchmove', setH);
      dom.unbind(window, 'mouseup', fieldUpH);
      dom.unbind(window, 'touchend', fieldUpH);
      onFinish();
    }
    function onBlur() {
      var i = interpret(this.value);
      if (i !== false) {
        _this.__color.__state = i;
        _this.setValue(_this.__color.toOriginal());
      } else {
        this.value = _this.__color.toString();
      }
    }
    function onFinish() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.__color.toOriginal());
      }
    }
    _this2.__saturation_field.appendChild(valueField);
    _this2.__selector.appendChild(_this2.__field_knob);
    _this2.__selector.appendChild(_this2.__saturation_field);
    _this2.__selector.appendChild(_this2.__hue_field);
    _this2.__hue_field.appendChild(_this2.__hue_knob);
    _this2.domElement.appendChild(_this2.__input);
    _this2.domElement.appendChild(_this2.__selector);
    _this2.updateDisplay();
    function setSV(e) {
      if (e.type.indexOf('touch') === -1) {
        e.preventDefault();
      }
      var fieldRect = _this.__saturation_field.getBoundingClientRect();
      var _ref = e.touches && e.touches[0] || e,
          clientX = _ref.clientX,
          clientY = _ref.clientY;
      var s = (clientX - fieldRect.left) / (fieldRect.right - fieldRect.left);
      var v = 1 - (clientY - fieldRect.top) / (fieldRect.bottom - fieldRect.top);
      if (v > 1) {
        v = 1;
      } else if (v < 0) {
        v = 0;
      }
      if (s > 1) {
        s = 1;
      } else if (s < 0) {
        s = 0;
      }
      _this.__color.v = v;
      _this.__color.s = s;
      _this.setValue(_this.__color.toOriginal());
      return false;
    }
    function setH(e) {
      if (e.type.indexOf('touch') === -1) {
        e.preventDefault();
      }
      var fieldRect = _this.__hue_field.getBoundingClientRect();
      var _ref2 = e.touches && e.touches[0] || e,
          clientY = _ref2.clientY;
      var h = 1 - (clientY - fieldRect.top) / (fieldRect.bottom - fieldRect.top);
      if (h > 1) {
        h = 1;
      } else if (h < 0) {
        h = 0;
      }
      _this.__color.h = h * 360;
      _this.setValue(_this.__color.toOriginal());
      return false;
    }
    return _this2;
  }
  createClass(ColorController, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      var i = interpret(this.getValue());
      if (i !== false) {
        var mismatch = false;
        Common.each(Color.COMPONENTS, function (component) {
          if (!Common.isUndefined(i[component]) && !Common.isUndefined(this.__color.__state[component]) && i[component] !== this.__color.__state[component]) {
            mismatch = true;
            return {};
          }
        }, this);
        if (mismatch) {
          Common.extend(this.__color.__state, i);
        }
      }
      Common.extend(this.__temp.__state, this.__color.__state);
      this.__temp.a = 1;
      var flip = this.__color.v < 0.5 || this.__color.s > 0.5 ? 255 : 0;
      var _flip = 255 - flip;
      Common.extend(this.__field_knob.style, {
        marginLeft: 100 * this.__color.s - 7 + 'px',
        marginTop: 100 * (1 - this.__color.v) - 7 + 'px',
        backgroundColor: this.__temp.toHexString(),
        border: this.__field_knob_border + 'rgb(' + flip + ',' + flip + ',' + flip + ')'
      });
      this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + 'px';
      this.__temp.s = 1;
      this.__temp.v = 1;
      linearGradient(this.__saturation_field, 'left', '#fff', this.__temp.toHexString());
      this.__input.value = this.__color.toString();
      Common.extend(this.__input.style, {
        backgroundColor: this.__color.toHexString(),
        color: 'rgb(' + flip + ',' + flip + ',' + flip + ')',
        textShadow: this.__input_textShadow + 'rgba(' + _flip + ',' + _flip + ',' + _flip + ',.7)'
      });
    }
  }]);
  return ColorController;
}(Controller);
var vendors = ['-moz-', '-o-', '-webkit-', '-ms-', ''];
function linearGradient(elem, x, a, b) {
  elem.style.background = '';
  Common.each(vendors, function (vendor) {
    elem.style.cssText += 'background: ' + vendor + 'linear-gradient(' + x + ', ' + a + ' 0%, ' + b + ' 100%); ';
  });
}
function hueGradient(elem) {
  elem.style.background = '';
  elem.style.cssText += 'background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);';
  elem.style.cssText += 'background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
  elem.style.cssText += 'background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
  elem.style.cssText += 'background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
  elem.style.cssText += 'background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
}

var css = {
  load: function load(url, indoc) {
    var doc = indoc || document;
    var link = doc.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    doc.getElementsByTagName('head')[0].appendChild(link);
  },
  inject: function inject(cssContent, indoc) {
    var doc = indoc || document;
    var injected = document.createElement('style');
    injected.type = 'text/css';
    injected.innerHTML = cssContent;
    var head = doc.getElementsByTagName('head')[0];
    try {
      head.appendChild(injected);
    } catch (e) {
    }
  }
};

var saveDialogContents = "<div id=\"dg-save\" class=\"dg dialogue\">\n\n  Here's the new load parameter for your <code>GUI</code>'s constructor:\n\n  <textarea id=\"dg-new-constructor\"></textarea>\n\n  <div id=\"dg-save-locally\">\n\n    <input id=\"dg-local-storage\" type=\"checkbox\"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id=\"dg-local-explain\">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>";

var ControllerFactory = function ControllerFactory(object, property) {
  var initialValue = object[property];
  if (Common.isArray(arguments[2]) || Common.isObject(arguments[2])) {
    return new OptionController(object, property, arguments[2]);
  }
  if (Common.isNumber(initialValue)) {
    if (Common.isNumber(arguments[2]) && Common.isNumber(arguments[3])) {
      if (Common.isNumber(arguments[4])) {
        return new NumberControllerSlider(object, property, arguments[2], arguments[3], arguments[4]);
      }
      return new NumberControllerSlider(object, property, arguments[2], arguments[3]);
    }
    if (Common.isNumber(arguments[4])) {
      return new NumberControllerBox(object, property, { min: arguments[2], max: arguments[3], step: arguments[4] });
    }
    return new NumberControllerBox(object, property, { min: arguments[2], max: arguments[3] });
  }
  if (Common.isString(initialValue)) {
    return new StringController(object, property);
  }
  if (Common.isFunction(initialValue)) {
    return new FunctionController(object, property, '');
  }
  if (Common.isBoolean(initialValue)) {
    return new BooleanController(object, property);
  }
  return null;
};

function requestAnimationFrame(callback) {
  setTimeout(callback, 1000 / 60);
}
var requestAnimationFrame$1 = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || requestAnimationFrame;

var CenteredDiv = function () {
  function CenteredDiv() {
    classCallCheck(this, CenteredDiv);
    this.backgroundElement = document.createElement('div');
    Common.extend(this.backgroundElement.style, {
      backgroundColor: 'rgba(0,0,0,0.8)',
      top: 0,
      left: 0,
      display: 'none',
      zIndex: '1000',
      opacity: 0,
      WebkitTransition: 'opacity 0.2s linear',
      transition: 'opacity 0.2s linear'
    });
    dom.makeFullscreen(this.backgroundElement);
    this.backgroundElement.style.position = 'fixed';
    this.domElement = document.createElement('div');
    Common.extend(this.domElement.style, {
      position: 'fixed',
      display: 'none',
      zIndex: '1001',
      opacity: 0,
      WebkitTransition: '-webkit-transform 0.2s ease-out, opacity 0.2s linear',
      transition: 'transform 0.2s ease-out, opacity 0.2s linear'
    });
    document.body.appendChild(this.backgroundElement);
    document.body.appendChild(this.domElement);
    var _this = this;
    dom.bind(this.backgroundElement, 'click', function () {
      _this.hide();
    });
  }
  createClass(CenteredDiv, [{
    key: 'show',
    value: function show() {
      var _this = this;
      this.backgroundElement.style.display = 'block';
      this.domElement.style.display = 'block';
      this.domElement.style.opacity = 0;
      this.domElement.style.webkitTransform = 'scale(1.1)';
      this.layout();
      Common.defer(function () {
        _this.backgroundElement.style.opacity = 1;
        _this.domElement.style.opacity = 1;
        _this.domElement.style.webkitTransform = 'scale(1)';
      });
    }
  }, {
    key: 'hide',
    value: function hide() {
      var _this = this;
      var hide = function hide() {
        _this.domElement.style.display = 'none';
        _this.backgroundElement.style.display = 'none';
        dom.unbind(_this.domElement, 'webkitTransitionEnd', hide);
        dom.unbind(_this.domElement, 'transitionend', hide);
        dom.unbind(_this.domElement, 'oTransitionEnd', hide);
      };
      dom.bind(this.domElement, 'webkitTransitionEnd', hide);
      dom.bind(this.domElement, 'transitionend', hide);
      dom.bind(this.domElement, 'oTransitionEnd', hide);
      this.backgroundElement.style.opacity = 0;
      this.domElement.style.opacity = 0;
      this.domElement.style.webkitTransform = 'scale(1.1)';
    }
  }, {
    key: 'layout',
    value: function layout() {
      this.domElement.style.left = window.innerWidth / 2 - dom.getWidth(this.domElement) / 2 + 'px';
      this.domElement.style.top = window.innerHeight / 2 - dom.getHeight(this.domElement) / 2 + 'px';
    }
  }]);
  return CenteredDiv;
}();

var styleSheet = ___$insertStyle(".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n");

css.inject(styleSheet);
var CSS_NAMESPACE = 'dg';
var HIDE_KEY_CODE = 72;
var CLOSE_BUTTON_HEIGHT = 20;
var DEFAULT_DEFAULT_PRESET_NAME = 'Default';
var SUPPORTS_LOCAL_STORAGE = function () {
  try {
    return !!window.localStorage;
  } catch (e) {
    return false;
  }
}();
var SAVE_DIALOGUE = void 0;
var autoPlaceVirgin = true;
var autoPlaceContainer = void 0;
var hide = false;
var hideableGuis = [];
var GUI = function GUI(pars) {
  var _this = this;
  var params = pars || {};
  this.domElement = document.createElement('div');
  this.__ul = document.createElement('ul');
  this.domElement.appendChild(this.__ul);
  dom.addClass(this.domElement, CSS_NAMESPACE);
  this.__folders = {};
  this.__controllers = [];
  this.__rememberedObjects = [];
  this.__rememberedObjectIndecesToControllers = [];
  this.__listening = [];
  params = Common.defaults(params, {
    closeOnTop: false,
    autoPlace: true,
    width: GUI.DEFAULT_WIDTH
  });
  params = Common.defaults(params, {
    resizable: params.autoPlace,
    hideable: params.autoPlace
  });
  if (!Common.isUndefined(params.load)) {
    if (params.preset) {
      params.load.preset = params.preset;
    }
  } else {
    params.load = { preset: DEFAULT_DEFAULT_PRESET_NAME };
  }
  if (Common.isUndefined(params.parent) && params.hideable) {
    hideableGuis.push(this);
  }
  params.resizable = Common.isUndefined(params.parent) && params.resizable;
  if (params.autoPlace && Common.isUndefined(params.scrollable)) {
    params.scrollable = true;
  }
  var useLocalStorage = SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(this, 'isLocal')) === 'true';
  var saveToLocalStorage = void 0;
  var titleRow = void 0;
  Object.defineProperties(this,
  {
    parent: {
      get: function get$$1() {
        return params.parent;
      }
    },
    scrollable: {
      get: function get$$1() {
        return params.scrollable;
      }
    },
    autoPlace: {
      get: function get$$1() {
        return params.autoPlace;
      }
    },
    closeOnTop: {
      get: function get$$1() {
        return params.closeOnTop;
      }
    },
    preset: {
      get: function get$$1() {
        if (_this.parent) {
          return _this.getRoot().preset;
        }
        return params.load.preset;
      },
      set: function set$$1(v) {
        if (_this.parent) {
          _this.getRoot().preset = v;
        } else {
          params.load.preset = v;
        }
        setPresetSelectIndex(this);
        _this.revert();
      }
    },
    width: {
      get: function get$$1() {
        return params.width;
      },
      set: function set$$1(v) {
        params.width = v;
        setWidth(_this, v);
      }
    },
    name: {
      get: function get$$1() {
        return params.name;
      },
      set: function set$$1(v) {
        params.name = v;
        if (titleRow) {
          titleRow.innerHTML = params.name;
        }
      }
    },
    closed: {
      get: function get$$1() {
        return params.closed;
      },
      set: function set$$1(v) {
        params.closed = v;
        if (params.closed) {
          dom.addClass(_this.__ul, GUI.CLASS_CLOSED);
        } else {
          dom.removeClass(_this.__ul, GUI.CLASS_CLOSED);
        }
        this.onResize();
        if (_this.__closeButton) {
          _this.__closeButton.innerHTML = v ? GUI.TEXT_OPEN : GUI.TEXT_CLOSED;
        }
      }
    },
    load: {
      get: function get$$1() {
        return params.load;
      }
    },
    useLocalStorage: {
      get: function get$$1() {
        return useLocalStorage;
      },
      set: function set$$1(bool) {
        if (SUPPORTS_LOCAL_STORAGE) {
          useLocalStorage = bool;
          if (bool) {
            dom.bind(window, 'unload', saveToLocalStorage);
          } else {
            dom.unbind(window, 'unload', saveToLocalStorage);
          }
          localStorage.setItem(getLocalStorageHash(_this, 'isLocal'), bool);
        }
      }
    }
  });
  if (Common.isUndefined(params.parent)) {
    this.closed = params.closed || false;
    dom.addClass(this.domElement, GUI.CLASS_MAIN);
    dom.makeSelectable(this.domElement, false);
    if (SUPPORTS_LOCAL_STORAGE) {
      if (useLocalStorage) {
        _this.useLocalStorage = true;
        var savedGui = localStorage.getItem(getLocalStorageHash(this, 'gui'));
        if (savedGui) {
          params.load = JSON.parse(savedGui);
        }
      }
    }
    this.__closeButton = document.createElement('div');
    this.__closeButton.innerHTML = GUI.TEXT_CLOSED;
    dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BUTTON);
    if (params.closeOnTop) {
      dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_TOP);
      this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0]);
    } else {
      dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BOTTOM);
      this.domElement.appendChild(this.__closeButton);
    }
    dom.bind(this.__closeButton, 'click', function () {
      _this.closed = !_this.closed;
    });
  } else {
    if (params.closed === undefined) {
      params.closed = true;
    }
    var titleRowName = document.createTextNode(params.name);
    dom.addClass(titleRowName, 'controller-name');
    titleRow = addRow(_this, titleRowName);
    var onClickTitle = function onClickTitle(e) {
      e.preventDefault();
      _this.closed = !_this.closed;
      return false;
    };
    dom.addClass(this.__ul, GUI.CLASS_CLOSED);
    dom.addClass(titleRow, 'title');
    dom.bind(titleRow, 'click', onClickTitle);
    if (!params.closed) {
      this.closed = false;
    }
  }
  if (params.autoPlace) {
    if (Common.isUndefined(params.parent)) {
      if (autoPlaceVirgin) {
        autoPlaceContainer = document.createElement('div');
        dom.addClass(autoPlaceContainer, CSS_NAMESPACE);
        dom.addClass(autoPlaceContainer, GUI.CLASS_AUTO_PLACE_CONTAINER);
        document.body.appendChild(autoPlaceContainer);
        autoPlaceVirgin = false;
      }
      autoPlaceContainer.appendChild(this.domElement);
      dom.addClass(this.domElement, GUI.CLASS_AUTO_PLACE);
    }
    if (!this.parent) {
      setWidth(_this, params.width);
    }
  }
  this.__resizeHandler = function () {
    _this.onResizeDebounced();
  };
  dom.bind(window, 'resize', this.__resizeHandler);
  dom.bind(this.__ul, 'webkitTransitionEnd', this.__resizeHandler);
  dom.bind(this.__ul, 'transitionend', this.__resizeHandler);
  dom.bind(this.__ul, 'oTransitionEnd', this.__resizeHandler);
  this.onResize();
  if (params.resizable) {
    addResizeHandle(this);
  }
  saveToLocalStorage = function saveToLocalStorage() {
    if (SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(_this, 'isLocal')) === 'true') {
      localStorage.setItem(getLocalStorageHash(_this, 'gui'), JSON.stringify(_this.getSaveObject()));
    }
  };
  this.saveToLocalStorageIfPossible = saveToLocalStorage;
  function resetWidth() {
    var root = _this.getRoot();
    root.width += 1;
    Common.defer(function () {
      root.width -= 1;
    });
  }
  if (!params.parent) {
    resetWidth();
  }
};
GUI.toggleHide = function () {
  hide = !hide;
  Common.each(hideableGuis, function (gui) {
    gui.domElement.style.display = hide ? 'none' : '';
  });
};
GUI.CLASS_AUTO_PLACE = 'a';
GUI.CLASS_AUTO_PLACE_CONTAINER = 'ac';
GUI.CLASS_MAIN = 'main';
GUI.CLASS_CONTROLLER_ROW = 'cr';
GUI.CLASS_TOO_TALL = 'taller-than-window';
GUI.CLASS_CLOSED = 'closed';
GUI.CLASS_CLOSE_BUTTON = 'close-button';
GUI.CLASS_CLOSE_TOP = 'close-top';
GUI.CLASS_CLOSE_BOTTOM = 'close-bottom';
GUI.CLASS_DRAG = 'drag';
GUI.DEFAULT_WIDTH = 245;
GUI.TEXT_CLOSED = 'Close Controls';
GUI.TEXT_OPEN = 'Open Controls';
GUI._keydownHandler = function (e) {
  if (document.activeElement.type !== 'text' && (e.which === HIDE_KEY_CODE || e.keyCode === HIDE_KEY_CODE)) {
    GUI.toggleHide();
  }
};
dom.bind(window, 'keydown', GUI._keydownHandler, false);
Common.extend(GUI.prototype,
{
  add: function add(object, property) {
    return _add(this, object, property, {
      factoryArgs: Array.prototype.slice.call(arguments, 2)
    });
  },
  addColor: function addColor(object, property) {
    return _add(this, object, property, {
      color: true
    });
  },
  remove: function remove(controller) {
    this.__ul.removeChild(controller.__li);
    this.__controllers.splice(this.__controllers.indexOf(controller), 1);
    var _this = this;
    Common.defer(function () {
      _this.onResize();
    });
  },
  destroy: function destroy() {
    if (this.parent) {
      throw new Error('Only the root GUI should be removed with .destroy(). ' + 'For subfolders, use gui.removeFolder(folder) instead.');
    }
    if (this.autoPlace) {
      autoPlaceContainer.removeChild(this.domElement);
    }
    var _this = this;
    Common.each(this.__folders, function (subfolder) {
      _this.removeFolder(subfolder);
    });
    dom.unbind(window, 'keydown', GUI._keydownHandler, false);
    removeListeners(this);
  },
  addFolder: function addFolder(name) {
    if (this.__folders[name] !== undefined) {
      throw new Error('You already have a folder in this GUI by the' + ' name "' + name + '"');
    }
    var newGuiParams = { name: name, parent: this };
    newGuiParams.autoPlace = this.autoPlace;
    if (this.load &&
    this.load.folders &&
    this.load.folders[name]) {
      newGuiParams.closed = this.load.folders[name].closed;
      newGuiParams.load = this.load.folders[name];
    }
    var gui = new GUI(newGuiParams);
    this.__folders[name] = gui;
    var li = addRow(this, gui.domElement);
    dom.addClass(li, 'folder');
    return gui;
  },
  removeFolder: function removeFolder(folder) {
    this.__ul.removeChild(folder.domElement.parentElement);
    delete this.__folders[folder.name];
    if (this.load &&
    this.load.folders &&
    this.load.folders[folder.name]) {
      delete this.load.folders[folder.name];
    }
    removeListeners(folder);
    var _this = this;
    Common.each(folder.__folders, function (subfolder) {
      folder.removeFolder(subfolder);
    });
    Common.defer(function () {
      _this.onResize();
    });
  },
  open: function open() {
    this.closed = false;
  },
  close: function close() {
    this.closed = true;
  },
  hide: function hide() {
    this.domElement.style.display = 'none';
  },
  show: function show() {
    this.domElement.style.display = '';
  },
  onResize: function onResize() {
    var root = this.getRoot();
    if (root.scrollable) {
      var top = dom.getOffset(root.__ul).top;
      var h = 0;
      Common.each(root.__ul.childNodes, function (node) {
        if (!(root.autoPlace && node === root.__save_row)) {
          h += dom.getHeight(node);
        }
      });
      if (window.innerHeight - top - CLOSE_BUTTON_HEIGHT < h) {
        dom.addClass(root.domElement, GUI.CLASS_TOO_TALL);
        root.__ul.style.height = window.innerHeight - top - CLOSE_BUTTON_HEIGHT + 'px';
      } else {
        dom.removeClass(root.domElement, GUI.CLASS_TOO_TALL);
        root.__ul.style.height = 'auto';
      }
    }
    if (root.__resize_handle) {
      Common.defer(function () {
        root.__resize_handle.style.height = root.__ul.offsetHeight + 'px';
      });
    }
    if (root.__closeButton) {
      root.__closeButton.style.width = root.width + 'px';
    }
  },
  onResizeDebounced: Common.debounce(function () {
    this.onResize();
  }, 50),
  remember: function remember() {
    if (Common.isUndefined(SAVE_DIALOGUE)) {
      SAVE_DIALOGUE = new CenteredDiv();
      SAVE_DIALOGUE.domElement.innerHTML = saveDialogContents;
    }
    if (this.parent) {
      throw new Error('You can only call remember on a top level GUI.');
    }
    var _this = this;
    Common.each(Array.prototype.slice.call(arguments), function (object) {
      if (_this.__rememberedObjects.length === 0) {
        addSaveMenu(_this);
      }
      if (_this.__rememberedObjects.indexOf(object) === -1) {
        _this.__rememberedObjects.push(object);
      }
    });
    if (this.autoPlace) {
      setWidth(this, this.width);
    }
  },
  getRoot: function getRoot() {
    var gui = this;
    while (gui.parent) {
      gui = gui.parent;
    }
    return gui;
  },
  getSaveObject: function getSaveObject() {
    var toReturn = this.load;
    toReturn.closed = this.closed;
    if (this.__rememberedObjects.length > 0) {
      toReturn.preset = this.preset;
      if (!toReturn.remembered) {
        toReturn.remembered = {};
      }
      toReturn.remembered[this.preset] = getCurrentPreset(this);
    }
    toReturn.folders = {};
    Common.each(this.__folders, function (element, key) {
      toReturn.folders[key] = element.getSaveObject();
    });
    return toReturn;
  },
  save: function save() {
    if (!this.load.remembered) {
      this.load.remembered = {};
    }
    this.load.remembered[this.preset] = getCurrentPreset(this);
    markPresetModified(this, false);
    this.saveToLocalStorageIfPossible();
  },
  saveAs: function saveAs(presetName) {
    if (!this.load.remembered) {
      this.load.remembered = {};
      this.load.remembered[DEFAULT_DEFAULT_PRESET_NAME] = getCurrentPreset(this, true);
    }
    this.load.remembered[presetName] = getCurrentPreset(this);
    this.preset = presetName;
    addPresetOption(this, presetName, true);
    this.saveToLocalStorageIfPossible();
  },
  revert: function revert(gui) {
    Common.each(this.__controllers, function (controller) {
      if (!this.getRoot().load.remembered) {
        controller.setValue(controller.initialValue);
      } else {
        recallSavedValue(gui || this.getRoot(), controller);
      }
      if (controller.__onFinishChange) {
        controller.__onFinishChange.call(controller, controller.getValue());
      }
    }, this);
    Common.each(this.__folders, function (folder) {
      folder.revert(folder);
    });
    if (!gui) {
      markPresetModified(this.getRoot(), false);
    }
  },
  listen: function listen(controller) {
    var init = this.__listening.length === 0;
    this.__listening.push(controller);
    if (init) {
      updateDisplays(this.__listening);
    }
  },
  updateDisplay: function updateDisplay() {
    Common.each(this.__controllers, function (controller) {
      controller.updateDisplay();
    });
    Common.each(this.__folders, function (folder) {
      folder.updateDisplay();
    });
  }
});
function addRow(gui, newDom, liBefore) {
  var li = document.createElement('li');
  if (newDom) {
    li.appendChild(newDom);
  }
  if (liBefore) {
    gui.__ul.insertBefore(li, liBefore);
  } else {
    gui.__ul.appendChild(li);
  }
  gui.onResize();
  return li;
}
function removeListeners(gui) {
  dom.unbind(window, 'resize', gui.__resizeHandler);
  if (gui.saveToLocalStorageIfPossible) {
    dom.unbind(window, 'unload', gui.saveToLocalStorageIfPossible);
  }
}
function markPresetModified(gui, modified) {
  var opt = gui.__preset_select[gui.__preset_select.selectedIndex];
  if (modified) {
    opt.innerHTML = opt.value + '*';
  } else {
    opt.innerHTML = opt.value;
  }
}
function augmentController(gui, li, controller) {
  controller.__li = li;
  controller.__gui = gui;
  Common.extend(controller,                                   {
    options: function options(_options) {
      if (arguments.length > 1) {
        var nextSibling = controller.__li.nextElementSibling;
        controller.remove();
        return _add(gui, controller.object, controller.property, {
          before: nextSibling,
          factoryArgs: [Common.toArray(arguments)]
        });
      }
      if (Common.isArray(_options) || Common.isObject(_options)) {
        var _nextSibling = controller.__li.nextElementSibling;
        controller.remove();
        return _add(gui, controller.object, controller.property, {
          before: _nextSibling,
          factoryArgs: [_options]
        });
      }
    },
    name: function name(_name) {
      controller.__li.firstElementChild.firstElementChild.innerHTML = _name;
      return controller;
    },
    listen: function listen() {
      controller.__gui.listen(controller);
      return controller;
    },
    remove: function remove() {
      controller.__gui.remove(controller);
      return controller;
    }
  });
  if (controller instanceof NumberControllerSlider) {
    var box = new NumberControllerBox(controller.object, controller.property, { min: controller.__min, max: controller.__max, step: controller.__step });
    Common.each(['updateDisplay', 'onChange', 'onFinishChange', 'step', 'min', 'max'], function (method) {
      var pc = controller[method];
      var pb = box[method];
      controller[method] = box[method] = function () {
        var args = Array.prototype.slice.call(arguments);
        pb.apply(box, args);
        return pc.apply(controller, args);
      };
    });
    dom.addClass(li, 'has-slider');
    controller.domElement.insertBefore(box.domElement, controller.domElement.firstElementChild);
  } else if (controller instanceof NumberControllerBox) {
    var r = function r(returned) {
      if (Common.isNumber(controller.__min) && Common.isNumber(controller.__max)) {
        var oldName = controller.__li.firstElementChild.firstElementChild.innerHTML;
        var wasListening = controller.__gui.__listening.indexOf(controller) > -1;
        controller.remove();
        var newController = _add(gui, controller.object, controller.property, {
          before: controller.__li.nextElementSibling,
          factoryArgs: [controller.__min, controller.__max, controller.__step]
        });
        newController.name(oldName);
        if (wasListening) newController.listen();
        return newController;
      }
      return returned;
    };
    controller.min = Common.compose(r, controller.min);
    controller.max = Common.compose(r, controller.max);
  } else if (controller instanceof BooleanController) {
    dom.bind(li, 'click', function () {
      dom.fakeEvent(controller.__checkbox, 'click');
    });
    dom.bind(controller.__checkbox, 'click', function (e) {
      e.stopPropagation();
    });
  } else if (controller instanceof FunctionController) {
    dom.bind(li, 'click', function () {
      dom.fakeEvent(controller.__button, 'click');
    });
    dom.bind(li, 'mouseover', function () {
      dom.addClass(controller.__button, 'hover');
    });
    dom.bind(li, 'mouseout', function () {
      dom.removeClass(controller.__button, 'hover');
    });
  } else if (controller instanceof ColorController) {
    dom.addClass(li, 'color');
    controller.updateDisplay = Common.compose(function (val) {
      li.style.borderLeftColor = controller.__color.toString();
      return val;
    }, controller.updateDisplay);
    controller.updateDisplay();
  }
  controller.setValue = Common.compose(function (val) {
    if (gui.getRoot().__preset_select && controller.isModified()) {
      markPresetModified(gui.getRoot(), true);
    }
    return val;
  }, controller.setValue);
}
function recallSavedValue(gui, controller) {
  var root = gui.getRoot();
  var matchedIndex = root.__rememberedObjects.indexOf(controller.object);
  if (matchedIndex !== -1) {
    var controllerMap = root.__rememberedObjectIndecesToControllers[matchedIndex];
    if (controllerMap === undefined) {
      controllerMap = {};
      root.__rememberedObjectIndecesToControllers[matchedIndex] = controllerMap;
    }
    controllerMap[controller.property] = controller;
    if (root.load && root.load.remembered) {
      var presetMap = root.load.remembered;
      var preset = void 0;
      if (presetMap[gui.preset]) {
        preset = presetMap[gui.preset];
      } else if (presetMap[DEFAULT_DEFAULT_PRESET_NAME]) {
        preset = presetMap[DEFAULT_DEFAULT_PRESET_NAME];
      } else {
        return;
      }
      if (preset[matchedIndex] && preset[matchedIndex][controller.property] !== undefined) {
        var value = preset[matchedIndex][controller.property];
        controller.initialValue = value;
        controller.setValue(value);
      }
    }
  }
}
function _add(gui, object, property, params) {
  if (object[property] === undefined) {
    throw new Error('Object "' + object + '" has no property "' + property + '"');
  }
  var controller = void 0;
  if (params.color) {
    controller = new ColorController(object, property);
  } else {
    var factoryArgs = [object, property].concat(params.factoryArgs);
    controller = ControllerFactory.apply(gui, factoryArgs);
  }
  if (params.before instanceof Controller) {
    params.before = params.before.__li;
  }
  recallSavedValue(gui, controller);
  dom.addClass(controller.domElement, 'c');
  var name = document.createElement('span');
  dom.addClass(name, 'property-name');
  name.innerHTML = controller.property;
  var container = document.createElement('div');
  container.appendChild(name);
  container.appendChild(controller.domElement);
  var li = addRow(gui, container, params.before);
  dom.addClass(li, GUI.CLASS_CONTROLLER_ROW);
  if (controller instanceof ColorController) {
    dom.addClass(li, 'color');
  } else {
    dom.addClass(li, _typeof(controller.getValue()));
  }
  augmentController(gui, li, controller);
  gui.__controllers.push(controller);
  return controller;
}
function getLocalStorageHash(gui, key) {
  return document.location.href + '.' + key;
}
function addPresetOption(gui, name, setSelected) {
  var opt = document.createElement('option');
  opt.innerHTML = name;
  opt.value = name;
  gui.__preset_select.appendChild(opt);
  if (setSelected) {
    gui.__preset_select.selectedIndex = gui.__preset_select.length - 1;
  }
}
function showHideExplain(gui, explain) {
  explain.style.display = gui.useLocalStorage ? 'block' : 'none';
}
function addSaveMenu(gui) {
  var div = gui.__save_row = document.createElement('li');
  dom.addClass(gui.domElement, 'has-save');
  gui.__ul.insertBefore(div, gui.__ul.firstChild);
  dom.addClass(div, 'save-row');
  var gears = document.createElement('span');
  gears.innerHTML = '&nbsp;';
  dom.addClass(gears, 'button gears');
  var button = document.createElement('span');
  button.innerHTML = 'Save';
  dom.addClass(button, 'button');
  dom.addClass(button, 'save');
  var button2 = document.createElement('span');
  button2.innerHTML = 'New';
  dom.addClass(button2, 'button');
  dom.addClass(button2, 'save-as');
  var button3 = document.createElement('span');
  button3.innerHTML = 'Revert';
  dom.addClass(button3, 'button');
  dom.addClass(button3, 'revert');
  var select = gui.__preset_select = document.createElement('select');
  if (gui.load && gui.load.remembered) {
    Common.each(gui.load.remembered, function (value, key) {
      addPresetOption(gui, key, key === gui.preset);
    });
  } else {
    addPresetOption(gui, DEFAULT_DEFAULT_PRESET_NAME, false);
  }
  dom.bind(select, 'change', function () {
    for (var index = 0; index < gui.__preset_select.length; index++) {
      gui.__preset_select[index].innerHTML = gui.__preset_select[index].value;
    }
    gui.preset = this.value;
  });
  div.appendChild(select);
  div.appendChild(gears);
  div.appendChild(button);
  div.appendChild(button2);
  div.appendChild(button3);
  if (SUPPORTS_LOCAL_STORAGE) {
    var explain = document.getElementById('dg-local-explain');
    var localStorageCheckBox = document.getElementById('dg-local-storage');
    var saveLocally = document.getElementById('dg-save-locally');
    saveLocally.style.display = 'block';
    if (localStorage.getItem(getLocalStorageHash(gui, 'isLocal')) === 'true') {
      localStorageCheckBox.setAttribute('checked', 'checked');
    }
    showHideExplain(gui, explain);
    dom.bind(localStorageCheckBox, 'change', function () {
      gui.useLocalStorage = !gui.useLocalStorage;
      showHideExplain(gui, explain);
    });
  }
  var newConstructorTextArea = document.getElementById('dg-new-constructor');
  dom.bind(newConstructorTextArea, 'keydown', function (e) {
    if (e.metaKey && (e.which === 67 || e.keyCode === 67)) {
      SAVE_DIALOGUE.hide();
    }
  });
  dom.bind(gears, 'click', function () {
    newConstructorTextArea.innerHTML = JSON.stringify(gui.getSaveObject(), undefined, 2);
    SAVE_DIALOGUE.show();
    newConstructorTextArea.focus();
    newConstructorTextArea.select();
  });
  dom.bind(button, 'click', function () {
    gui.save();
  });
  dom.bind(button2, 'click', function () {
    var presetName = prompt('Enter a new preset name.');
    if (presetName) {
      gui.saveAs(presetName);
    }
  });
  dom.bind(button3, 'click', function () {
    gui.revert();
  });
}
function addResizeHandle(gui) {
  var pmouseX = void 0;
  gui.__resize_handle = document.createElement('div');
  Common.extend(gui.__resize_handle.style, {
    width: '6px',
    marginLeft: '-3px',
    height: '200px',
    cursor: 'ew-resize',
    position: 'absolute'
  });
  function drag(e) {
    e.preventDefault();
    gui.width += pmouseX - e.clientX;
    gui.onResize();
    pmouseX = e.clientX;
    return false;
  }
  function dragStop() {
    dom.removeClass(gui.__closeButton, GUI.CLASS_DRAG);
    dom.unbind(window, 'mousemove', drag);
    dom.unbind(window, 'mouseup', dragStop);
  }
  function dragStart(e) {
    e.preventDefault();
    pmouseX = e.clientX;
    dom.addClass(gui.__closeButton, GUI.CLASS_DRAG);
    dom.bind(window, 'mousemove', drag);
    dom.bind(window, 'mouseup', dragStop);
    return false;
  }
  dom.bind(gui.__resize_handle, 'mousedown', dragStart);
  dom.bind(gui.__closeButton, 'mousedown', dragStart);
  gui.domElement.insertBefore(gui.__resize_handle, gui.domElement.firstElementChild);
}
function setWidth(gui, w) {
  gui.domElement.style.width = w + 'px';
  if (gui.__save_row && gui.autoPlace) {
    gui.__save_row.style.width = w + 'px';
  }
  if (gui.__closeButton) {
    gui.__closeButton.style.width = w + 'px';
  }
}
function getCurrentPreset(gui, useInitialValues) {
  var toReturn = {};
  Common.each(gui.__rememberedObjects, function (val, index) {
    var savedValues = {};
    var controllerMap = gui.__rememberedObjectIndecesToControllers[index];
    Common.each(controllerMap, function (controller, property) {
      savedValues[property] = useInitialValues ? controller.initialValue : controller.getValue();
    });
    toReturn[index] = savedValues;
  });
  return toReturn;
}
function setPresetSelectIndex(gui) {
  for (var index = 0; index < gui.__preset_select.length; index++) {
    if (gui.__preset_select[index].value === gui.preset) {
      gui.__preset_select.selectedIndex = index;
    }
  }
}
function updateDisplays(controllerArray) {
  if (controllerArray.length !== 0) {
    requestAnimationFrame$1.call(window, function () {
      updateDisplays(controllerArray);
    });
  }
  Common.each(controllerArray, function (c) {
    c.updateDisplay();
  });
}

var color = {
  Color: Color,
  math: ColorMath,
  interpret: interpret
};
var controllers = {
  Controller: Controller,
  BooleanController: BooleanController,
  OptionController: OptionController,
  StringController: StringController,
  NumberController: NumberController,
  NumberControllerBox: NumberControllerBox,
  NumberControllerSlider: NumberControllerSlider,
  FunctionController: FunctionController,
  ColorController: ColorController
};
var dom$1 = { dom: dom };
var gui = { GUI: GUI };
var GUI$1 = GUI;
var index = {
  color: color,
  controllers: controllers,
  dom: dom$1,
  gui: gui,
  GUI: GUI$1
};


/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=dat.gui.module.js.map


/***/ }),

/***/ "./node_modules/shapediver-types/lib/3d/api/CameraApi.interface.js":
/*!*************************************************************************!*\
  !*** ./node_modules/shapediver-types/lib/3d/api/CameraApi.interface.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Camera;
(function (Camera) {
    /**
     * @file Creates a shared interface for all CameraApis.
     *       The CameraApiInterface must be implemented by all CameraApis.
     *       All described methods must be implemented.
     *
     * @module CameraApiInterface
     * @author Michael Oppitz
     */
    /**
     * Enum for camera types.
     * @readonly
     * @enum {module:CameraApi~CameraApi#CameraType}
     */
    let CameraType;
    (function (CameraType) {
        /** perspective camera */
        CameraType[CameraType["PERSPECTIVE"] = 0] = "PERSPECTIVE";
        /** orthographic camera, top view */
        CameraType[CameraType["TOP"] = 1] = "TOP";
        /** orthographic camera, bottom view */
        CameraType[CameraType["BOTTOM"] = 2] = "BOTTOM";
        /** orthographic camera, right view */
        CameraType[CameraType["RIGHT"] = 3] = "RIGHT";
        /** orthographic camera, left view */
        CameraType[CameraType["LEFT"] = 4] = "LEFT";
        /** orthographic camera, back view */
        CameraType[CameraType["BACK"] = 5] = "BACK";
        /** orthographic camera, front view */
        CameraType[CameraType["FRONT"] = 6] = "FRONT";
    })(CameraType = Camera.CameraType || (Camera.CameraType = {}));
    ;
    /**
     * Enum for control types.
     * @readonly
     * @enum {module:CameraApi~CameraApi#ControlType}
     */
    let ControlType;
    (function (ControlType) {
        /** the orbit controls (default for perspective camera) */
        ControlType[ControlType["ORBIT"] = 0] = "ORBIT";
        /** the fps controls */
        ControlType[ControlType["FPS"] = 1] = "FPS";
        /** the orthographic controls (default for orthograhpic camera) */
        ControlType[ControlType["ORTHOGRAPHIC"] = 2] = "ORTHOGRAPHIC";
    })(ControlType = Camera.ControlType || (Camera.ControlType = {}));
    ;
    /**
     * Enum for supported camera event types.
     * @readonly
     * @enum {module:CameraApi~CameraApi#CameraEventType}
     */
    let CameraEventType;
    (function (CameraEventType) {
        /**  a camera movement has started */
        CameraEventType["CAMERA_START"] = "start";
        /**  a camera movement has been continued */
        CameraEventType["CAMERA_MOVE"] = "move";
        /** a camera movement has ended */
        CameraEventType["CAMERA_END"] = "end";
    })(CameraEventType = Camera.CameraEventType || (Camera.CameraEventType = {}));
    ;
})(Camera = exports.Camera || (exports.Camera = {}));


/***/ }),

/***/ "./node_modules/shapediver-types/lib/3d/api/LightApi.interface.js":
/*!************************************************************************!*\
  !*** ./node_modules/shapediver-types/lib/3d/api/LightApi.interface.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Lights;
(function (Lights) {
    /**
     * @file Creates a shared interface for all LightApis.
     *       The LightApiInterface must be implemented by all LightApis.
     *       All described methods must be implemented.
     *
     * @module LightApiInterface
     * @author Michael Oppitz
     */
    /**
        * Enum for supported light types.
        * @readonly
        * @enum {module:LightApiInterface~LightApiInterface#LIGHTTYPE}
        */
    let LightType;
    (function (LightType) {
        /**  ambient light */
        LightType["AMBIENT"] = "ambient";
        /**  directional light */
        LightType["DIRECTIONAL"] = "directional";
        /** point light */
        LightType["HEMISPHERE"] = "hemisphere";
        /** point light */
        LightType["POINT"] = "point";
        // /** rectangle area light */
        // RECTAREA : 'rectarea',
        /** spot light */
        LightType["SPOT"] = "spot";
        /** flash light */
        LightType["FLASH"] = "flash";
    })(LightType = Lights.LightType || (Lights.LightType = {}));
    /**
     * Enum for predefined light scenes.
     * @readonly
     * @enum {module:LightApiInterface~LightApiInterface#LIGHTSCENE}
     */
    let LIGHTSCENE;
    (function (LIGHTSCENE) {
        /** the default light scene */
        LIGHTSCENE["DEFAULT"] = "default";
        /** the legacy light scene */
        LIGHTSCENE["LEGACY"] = "legacy";
    })(LIGHTSCENE = Lights.LIGHTSCENE || (Lights.LIGHTSCENE = {}));
    ;
})(Lights = exports.Lights || (exports.Lights = {}));


/***/ }),

/***/ "./node_modules/shapediver-types/lib/SDVApp.js":
/*!*****************************************************!*\
  !*** ./node_modules/shapediver-types/lib/SDVApp.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ApiInterfaceV2_1_interface_1 = __webpack_require__(/*! ./v2/ApiInterfaceV2.1.interface */ "./node_modules/shapediver-types/lib/v2/ApiInterfaceV2.1.interface.js");
exports.Api = ApiInterfaceV2_1_interface_1.Api;
const CameraApi_interface_1 = __webpack_require__(/*! ./3d/api/CameraApi.interface */ "./node_modules/shapediver-types/lib/3d/api/CameraApi.interface.js");
exports.Camera = CameraApi_interface_1.Camera;
const LightApi_interface_1 = __webpack_require__(/*! ./3d/api/LightApi.interface */ "./node_modules/shapediver-types/lib/3d/api/LightApi.interface.js");
exports.Lights = LightApi_interface_1.Lights;
const ArApi_interace_1 = __webpack_require__(/*! ./ar/ArApi.interace */ "./node_modules/shapediver-types/lib/ar/ArApi.interace.js");
exports.ArApi = ArApi_interace_1.ArApi;
const ApiExportV2_1_interface_1 = __webpack_require__(/*! ./v2/interfaces/ApiExportV2.1.interface */ "./node_modules/shapediver-types/lib/v2/interfaces/ApiExportV2.1.interface.js");
exports.Export = ApiExportV2_1_interface_1.Export;
const ApiParameterV2_1_interface_1 = __webpack_require__(/*! ./v2/interfaces/ApiParameterV2.1.interface */ "./node_modules/shapediver-types/lib/v2/interfaces/ApiParameterV2.1.interface.js");
exports.Parameter = ApiParameterV2_1_interface_1.Parameter;
const ApiPluginV2_1_interface_1 = __webpack_require__(/*! ./v2/interfaces/ApiPluginV2.1.interface */ "./node_modules/shapediver-types/lib/v2/interfaces/ApiPluginV2.1.interface.js");
exports.Plugin = ApiPluginV2_1_interface_1.Plugin;
const ApiSceneV2_1_interface_1 = __webpack_require__(/*! ./v2/interfaces/ApiSceneV2.1.interface */ "./node_modules/shapediver-types/lib/v2/interfaces/ApiSceneV2.1.interface.js");
exports.Scene = ApiSceneV2_1_interface_1.Scene;
const ApiStateV2_1_interface_1 = __webpack_require__(/*! ./v2/interfaces/ApiStateV2.1.interface */ "./node_modules/shapediver-types/lib/v2/interfaces/ApiStateV2.1.interface.js");
exports.State = ApiStateV2_1_interface_1.State;
const ApiViewportsV2_1_interface_1 = __webpack_require__(/*! ./v2/interfaces/ApiViewportsV2.1.interface */ "./node_modules/shapediver-types/lib/v2/interfaces/ApiViewportsV2.1.interface.js");
exports.Viewports = ApiViewportsV2_1_interface_1.Viewports;
const ViewerControlsApp_interface_1 = __webpack_require__(/*! ./apps/controls/ViewerControlsApp.interface */ "./node_modules/shapediver-types/lib/apps/controls/ViewerControlsApp.interface.js");
exports.Controls = ViewerControlsApp_interface_1.Controls;
const ViewerOverlaysApp_interface_1 = __webpack_require__(/*! ./apps/overlays/ViewerOverlaysApp.interface */ "./node_modules/shapediver-types/lib/apps/overlays/ViewerOverlaysApp.interface.js");
exports.Overlays = ViewerOverlaysApp_interface_1.Overlays;


/***/ }),

/***/ "./node_modules/shapediver-types/lib/apps/controls/ViewerControlsApp.interface.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/shapediver-types/lib/apps/controls/ViewerControlsApp.interface.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Controls;
(function (Controls) {
    /**
     * The control type.
     */
    let ControlParameterType;
    (function (ControlParameterType) {
        ControlParameterType["STRING"] = "string";
        ControlParameterType["CHECKBOX"] = "checkbox";
        ControlParameterType["VECTOR3"] = "vector3";
        ControlParameterType["BUTTON"] = "button";
        ControlParameterType["CHECKLIST"] = "checklist";
        ControlParameterType["GROUP"] = "group";
        ControlParameterType["COLOR"] = "color";
        ControlParameterType["DROPDOWN"] = "dropdown";
        ControlParameterType["FILE"] = "file";
        ControlParameterType["MODAL"] = "modal";
        ControlParameterType["SLIDER"] = "slider";
        ControlParameterType["STATICHTML"] = "statichtml";
    })(ControlParameterType = Controls.ControlParameterType || (Controls.ControlParameterType = {}));
})(Controls = exports.Controls || (exports.Controls = {}));


/***/ }),

/***/ "./node_modules/shapediver-types/lib/apps/overlays/ViewerOverlaysApp.interface.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/shapediver-types/lib/apps/overlays/ViewerOverlaysApp.interface.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Overlays;
(function (Overlays) {
    /**
     * The button type.
     */
    let ButtonType;
    (function (ButtonType) {
        ButtonType["CONTROLS"] = "controls";
        ButtonType["SETTINGS"] = "settings";
        ButtonType["ZOOM"] = "zoom";
        ButtonType["FULLSCREEN"] = "fullscreen";
    })(ButtonType = Overlays.ButtonType || (Overlays.ButtonType = {}));
    /**
     * The message type
     */
    let MessageType;
    (function (MessageType) {
        MessageType["PRIMARY"] = "primary";
        MessageType["SUCCESS"] = "success";
        MessageType["WARNING"] = "warning";
        MessageType["DANGER"] = "danger";
    })(MessageType = Overlays.MessageType || (Overlays.MessageType = {}));
})(Overlays = exports.Overlays || (exports.Overlays = {}));


/***/ }),

/***/ "./node_modules/shapediver-types/lib/ar/ArApi.interace.js":
/*!****************************************************************!*\
  !*** ./node_modules/shapediver-types/lib/ar/ArApi.interace.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ArApi;
(function (ArApi) {
    /**
     * @file Creates a shared interface for all AR implementations.
     *       All described methods must be implemented.
     *
     * @module ArApiInterface
     * @author ShapeDiver <contact@shapediver.com>
     */
    /**
     * Enum for supported AR event types.
     * @readonly
     * @enum {module:ArApiInterface~ArApiInterface#AREventType}
     */
    let EVENTTYPE;
    (function (EVENTTYPE) {
        /** a new image anchor has been created, updates to its position will be part of ANCHOR_UPDATE events */
        EVENTTYPE["ANCHOR_CREATE_IMAGE"] = "anchor.create.image";
        /** anchor positions have been updated */
        EVENTTYPE["ANCHOR_UPDATE"] = "anchor.update";
        /** placement anchor of object has changed */
        EVENTTYPE["OBJECT_PLACEMENT"] = "object.placement";
        /** the status of tracking of the device (camera) has changed */
        EVENTTYPE["STATUS_TRACKING"] = "status.tracking";
        /** the status of mapping of the virtual world has changed */
        EVENTTYPE["STATUS_MAPPING"] = "status.mapping";
    })(EVENTTYPE = ArApi.EVENTTYPE || (ArApi.EVENTTYPE = {}));
    ;
})(ArApi = exports.ArApi || (exports.ArApi = {}));


/***/ }),

/***/ "./node_modules/shapediver-types/lib/v2/ApiInterfaceV2.1.interface.js":
/*!****************************************************************************!*\
  !*** ./node_modules/shapediver-types/lib/v2/ApiInterfaceV2.1.interface.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Api;
(function (Api) {
    /**
     * __ShapeDiver 3D Viewer Application__, copyright (c) 2018 _ShapeDiver GmbH_
     *
     * *ApiInterfaceV2.1.js*
     *
     * ### Content
     *   * Abstract definition of the ShapeDiver 3D Viewer API V2.1
     *
     * @module ApiInterfaceV2
     * @author ShapeDiver <contact@shapediver.com>
     */
    /**
      * Enum for supported event types.
      * @readonly
      * @enum {module:ApiInterfaceV2~ApiInterfaceV2#ApiEventType}
      */
    let EVENTTYPE;
    (function (EVENTTYPE) {
        /** the value of a setting has been changed */
        EVENTTYPE["SETTINGS_UPDATE"] = "settings.update";
        /** a settings registration request (typically triggered by initialisation of the first CommPlugin) has finished processing and settings have been updated */
        EVENTTYPE["SETTINGS_REGISTERED"] = "settings.registered";
    })(EVENTTYPE = Api.EVENTTYPE || (Api.EVENTTYPE = {}));
    ;
    ;
})(Api = exports.Api || (exports.Api = {}));


/***/ }),

/***/ "./node_modules/shapediver-types/lib/v2/interfaces/ApiExportV2.1.interface.js":
/*!************************************************************************************!*\
  !*** ./node_modules/shapediver-types/lib/v2/interfaces/ApiExportV2.1.interface.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Export;
(function (Export) {
    /**
     * __ShapeDiver 3D Viewer Application__, copyright (c) 2018 _ShapeDiver GmbH_
     *
     * *ApiExportInterfaceV2.1.js*
     *
     * ### Content
     *   * Abstract definition of the ShapeDiver 3D Viewer Export API V2.1
     *
     * @module ApiExportInterface
     * @author ShapeDiver <contact@shapediver.com>
     */
    /**
    * Enum for export request result.
    * @readonly
    * @enum {module:ApiExportInterface~ApiExportInterface#ExportRequestResult}
    */
    let RESULT;
    (function (RESULT) {
        /** the export was not found */
        RESULT["EXPORT_NOT_FOUND"] = "export_not_found";
        /** the plugin responsible to handle the export request was not found */
        RESULT["PLUGIN_NOT_FOUND"] = "plugin_not_found";
        /** the export request failed */
        RESULT["ERROR"] = "error";
        /** the export request can be answered from the local cache */
        RESULT["CACHE"] = "cache";
        /** the export request needs to be loaded from somewhere */
        RESULT["LOAD"] = "load";
    })(RESULT || (RESULT = {}));
    ;
    /**
     * Enum for supported export event types.
     * @readonly
     * @enum {module:ApiExportInterface~ApiExportInterface#ExportEventType}
     */
    let EVENTTYPE;
    (function (EVENTTYPE) {
        /** the result of an export has become available */
        EVENTTYPE["AVAILABLE"] = "available";
        /** a new export has been registered */
        EVENTTYPE["REGISTERED"] = "registered";
        /** the definition of an export has been updated, typically one of the properties name or order or hidden */
        EVENTTYPE["UPDATE"] = "update";
        /** status event for an ongoing export */
        EVENTTYPE["STATUS"] = "status";
    })(EVENTTYPE || (EVENTTYPE = {}));
    ;
    ;
})(Export = exports.Export || (exports.Export = {}));


/***/ }),

/***/ "./node_modules/shapediver-types/lib/v2/interfaces/ApiParameterV2.1.interface.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/shapediver-types/lib/v2/interfaces/ApiParameterV2.1.interface.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Parameter;
(function (Parameter) {
    /**
     * __ShapeDiver 3D Viewer Application__, copyright (c) 2018 _ShapeDiver GmbH_
     *
     * *ApiParameterInterfaceV2.1.js*
     *
     * ### Content
     *   * Abstract definition of the ShapeDiver 3D Viewer Parameter API V2.1
     *
     * @module ApiParameterInterface
     * @author ShapeDiver <contact@shapediver.com>
     */
    /**
     * Enum for supported parameter event types.
     * @readonly
     * @enum {module:ApiParameterInterface~ApiParameterInterface#ParameterEventType}
     */
    let EVENTTYPE;
    (function (EVENTTYPE) {
        /** a parameter has been registered */
        EVENTTYPE["REGISTERED"] = "registered";
        /** the definition of a parameter has been updated, typically one of the properties name or order or hidden */
        EVENTTYPE["UPDATE"] = "update";
        /** the value of a parameter has been changed */
        EVENTTYPE["VALUE_UPDATE"] = "value.update";
    })(EVENTTYPE || (EVENTTYPE = {}));
    ;
    /**
     * Enum for parameter update result.
     * @readonly
     * @enum {module:ApiParameterInterface~ApiParameterInterface#ParameterUpdateResult}
     */
    let RESULT;
    (function (RESULT) {
        /** the parameter was not found */
        RESULT["PARAM_NOT_FOUND"] = "param_not_found";
        /** no value was given */
        RESULT["NO_VALUE"] = "no_value";
        /** the new parameter value was rejected */
        RESULT["VALUE_REJECT"] = "value_reject";
        /** the parameter value had already been set */
        RESULT["VALUE_EXISTS"] = "value_exists";
        /** the new parameter value was accepted */
        RESULT["VALUE_OK"] = "value_ok";
        /** the plugin responsible to handle the parameter update was not found */
        RESULT["PLUGIN_NOT_FOUND"] = "plugin_not_found";
        /** the parameter update failed */
        RESULT["ERROR"] = "error";
        /** the parameter update results in a live update */
        RESULT["LIVE"] = "live";
        /** the parameter update results in an update which can be answered from the local cache */
        RESULT["CACHE"] = "cache";
        /** the parameter update results in an update which needs to be loaded from somewhere */
        RESULT["LOAD"] = "load";
        /** the parameter update was aborted, it was superseded by another update */
        RESULT["ABORT"] = "abort";
    })(RESULT || (RESULT = {}));
    ;
    /**
    * Enum for parameter type.
    * @readonly
    * @enum {module:ApiParameterInterface~ApiParameterInterface#ParameterType}
    */
    let TYPE;
    (function (TYPE) {
        /** floating point number */
        TYPE["FLOAT"] = "Float";
        /** integer number */
        TYPE["INT"] = "Int";
        /** even integer number */
        TYPE["EVEN"] = "Even";
        /** odd integer number */
        TYPE["ODD"] = "Odd";
        /** string with maximum length */
        TYPE["STRING"] = "String";
        /** color string, including opacity (10 digits, e.g. 0xffffffaa) */
        TYPE["COLOR"] = "Color";
        /** choose from a list of strings */
        TYPE["STRINGLIST"] = "StringList";
        /** boolean */
        TYPE["BOOL"] = "Bool";
        /** date / time (currently unsupported) */
        TYPE["TIME"] = "Time";
        /** JavaScript {@link https://developer.mozilla.org/en-US/docs/Web/API/File File} or {@link https://developer.mozilla.org/en-US/docs/Web/API/Blob Blob} */
        TYPE["FILE"] = "File";
    })(TYPE || (TYPE = {}));
    ;
    /**
     * Enum for parameter visualization.
     * @readonly
     * @enum {module:ApiParameterInterface~ApiParameterInterface#ParameterVisualization}
     */
    let VISUALIZATION;
    (function (VISUALIZATION) {
        /** currently the only choice for numeric types (Float, Int, Even, Odd) */
        VISUALIZATION["SLIDER"] = "slider";
        /** for type StringList */
        VISUALIZATION["SEQUENCE"] = "sequence";
        /** for type StringList */
        VISUALIZATION["CYCLE"] = "cycle";
        /** for type StringList */
        VISUALIZATION["DROPDOWN"] = "dropdown";
        /** for type StringList */
        VISUALIZATION["CHECKLIST"] = "checklist";
        /** for type Time */
        VISUALIZATION["CLOCK"] = "clock";
        /** for type Time */
        VISUALIZATION["CALENDAR"] = "calendar";
    })(VISUALIZATION || (VISUALIZATION = {}));
    ;
    ;
})(Parameter = exports.Parameter || (exports.Parameter = {}));


/***/ }),

/***/ "./node_modules/shapediver-types/lib/v2/interfaces/ApiPluginV2.1.interface.js":
/*!************************************************************************************!*\
  !*** ./node_modules/shapediver-types/lib/v2/interfaces/ApiPluginV2.1.interface.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Plugin;
(function (Plugin) {
    /**
     * __ShapeDiver 3D Viewer Application__, copyright (c) 2018 _ShapeDiver GmbH_
     *
     * *ApiPluginInterfaceV2.1.js*
     *
     * ### Content
     *   * Abstract definition of the ShapeDiver 3D Viewer Plugin API V2.1
     *
     * @module ApiPluginInterface
     * @author ShapeDiver <contact@shapediver.com>
     */
    /**
     * Enum for plugin status.
     * @readonly
     * @enum {module:ApiPluginInterface~ApiPluginInterface#PluginStatus}
      */
    let STATUS;
    (function (STATUS) {
        /** the plugin instance was created, a unique runtime id is not available yet  */
        STATUS["NONE"] = "none";
        /** the plugin instance got a unique runtime id and is ready to load  */
        STATUS["READY"] = "ready";
        /** the plugin instance failed for whatever reason and is not usable  */
        STATUS["FAILED"] = "failed";
        /** the plugin instance successfully loaded, any potential initialization is not yet finished */
        STATUS["LOADED"] = "loaded";
        /** plugin is operating, i.e. any potential initialization that was triggered by loading succeeded, ready to receive parameter updates. CAUTION: This does not mean that the initial scene loading, which might have been triggered by the plugin, has been finished yet. */
        STATUS["ACTIVE"] = "active";
        /** plugin was unloaded and is ready to be garbage collected */
        STATUS["UNLOADED"] = "unloaded";
    })(STATUS || (STATUS = {}));
    ;
})(Plugin = exports.Plugin || (exports.Plugin = {}));


/***/ }),

/***/ "./node_modules/shapediver-types/lib/v2/interfaces/ApiSceneV2.1.interface.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/shapediver-types/lib/v2/interfaces/ApiSceneV2.1.interface.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Scene;
(function (Scene) {
    /**
     * __ShapeDiver 3D Viewer Application__, copyright (c) 2018 _ShapeDiver GmbH_
     *
     * *ApiSceneInterfaceV2.1.js*
     *
     * ### Content
     *   * Abstract definition of the ShapeDiver 3D Viewer Scene API V2.1
     *
     * @module ApiSceneInterface
     * @author ShapeDiver <contact@shapediver.com>
     */
    /**
     * Enum for supported scene asset item formats.
     * @readonly
     * @enum {module:ApiSceneInterface~ApiSceneInterface#SceneAssetItemFormat}
     * @see {@link module:ApiSceneInterface~ApiSceneInterface#SceneAssetItem}
     */
    let FORMAT;
    (function (FORMAT) {
        /** property href of the {@link module:ApiSceneInterface~ApiSceneInterface#SceneAssetItem SceneAssetItem} points to a glb file ({@link https://github.com/KhronosGroup/glTF/tree/master/extensions/1.0/Khronos/KHR_binary_glTF binary glTF 1.0}) */
        FORMAT["GLB"] = "glb";
        /** property href of the {@link module:ApiSceneInterface~ApiSceneInterface#SceneAssetItem SceneAssetItem} points to a {@link https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md glTF 2.0 file}.
        Binary glTF is supported. For now there is no support for gltf extensions, animations, multiple uv coords, and emissive textures. */
        FORMAT["GLTF"] = "gltf";
        /** property data of the {@link module:ApiSceneInterface~ApiSceneInterface#SceneAssetItem SceneAssetItem} contains an {@link module:ApiSceneInterface~ApiSceneInterface#ObjMeshReference ObjMeshReference} which points to a {@link https://en.wikipedia.org/wiki/Wavefront_.obj_file Wavefront OBJ file} (supports meshes only, no lines, curves, or surfaces) */
        FORMAT["OBJ"] = "obj";
        /** property data of the {@link module:ApiSceneInterface~ApiSceneInterface#SceneAssetItem SceneAssetItem}
         * contains a {@link module:ApiSceneInterface~ApiSceneInterface#ThreeGeometryReference ThreeGeometryReference} which allows to directly add
         * {@link https://threejs.org/docs/#api/objects/Mesh Mesh},
         * {@link https://threejs.org/docs/#api/objects/Line Line}, {@link https://threejs.org/docs/#api/objects/LineLoop LineLoop}, {@link https://threejs.org/docs/#api/objects/LineSegments LineSegments}, or
         * {@link https://threejs.org/docs/#api/objects/Points Points} objects to the scene.
         */
        FORMAT["THREE"] = "three";
        /** property data of the {@link module:ApiSceneInterface~ApiSceneInterface#SceneAssetItem SceneAssetItem} contains generic data (will not be displayed in the scene, but can be requested using {@link module:ApiSceneInterface~ApiSceneInterface#getData}) */
        FORMAT["DATA"] = "data";
        /** property data of the {@link module:ApiSceneInterface~ApiSceneInterface#SceneAssetItem SceneAssetItem} contains a {@link module:ApiSceneInterface~ApiSceneInterface#MaterialV3 standard material definition} or {@link module:ApiSceneInterface~ApiSceneInterface#GemMaterialV1 gem material definition} */
        FORMAT["MATERIAL"] = "material";
        /** property data of the {@link module:ApiSceneInterface~ApiSceneInterface#SceneAssetItem SceneAssetItem} contains an array of {@link module:ApiSceneInterface~ApiSceneInterface#Tag2d Tag2d} definitions */
        FORMAT["TAG2D"] = "tag2d";
        /** property data of the {@link module:ApiSceneInterface~ApiSceneInterface#SceneAssetItem SceneAssetItem} contains an array of {@link module:ApiSceneInterface~ApiSceneInterface#Tag3d Tag3d} definitions */
        FORMAT["TAG3D"] = "tag3d";
        /** property data of the {@link module:ApiSceneInterface~ApiSceneInterface#SceneAssetItem SceneAssetItem} contains an array of {@link module:ApiSceneInterface~ApiSceneInterface#Anchor anchor} definitions */
        FORMAT["ANCHOR"] = "anchor";
    })(FORMAT = Scene.FORMAT || (Scene.FORMAT = {}));
    ;
    /**
     * Enum for supported scene event types.
     * @readonly
     * @enum {module:ApiSceneInterface~ApiSceneInterface#SceneEventType}
     */
    let EVENTTYPE;
    (function (EVENTTYPE) {
        /**  anchor objects have been added to the scene */
        EVENTTYPE["ANCHOR_ADD"] = "anchor.add";
        /**  anchor objects have been removed from the scene */
        EVENTTYPE["ANCHOR_REMOVE"] = "anchor.remove";
        /** dragging of an object started */
        EVENTTYPE["DRAG_START"] = "drag.start";
        /** continuously fired during dragging of an object */
        EVENTTYPE["DRAG_MOVE"] = "drag.move";
        /** dragging of an object ended */
        EVENTTYPE["DRAG_END"] = "drag.end";
        /** framerate events every second (if rendering)  */
        EVENTTYPE["FRAMERATE"] = "framerate";
        /** pointing device has entered a hoverable object  */
        EVENTTYPE["HOVER_ON"] = "hover.on";
        /** continuously fired during hovering of an object  */
        EVENTTYPE["HOVER_OVER"] = "hover.over";
        /** pointing device has left a hoverable object */
        EVENTTYPE["HOVER_OFF"] = "hover.off";
        /** beauty rendering has started */
        EVENTTYPE["RENDER_BEAUTY_START"] = "render.beauty.start";
        /** beauty rendering has been cancelled */
        EVENTTYPE["RENDER_BEAUTY_CANCEL"] = "render.beauty.cancel";
        /** beauty rendering has ended */
        EVENTTYPE["RENDER_BEAUTY_END"] = "render.beauty.end";
        /** object has been selected */
        EVENTTYPE["SELECT_ON"] = "select.on";
        /** object has been unselected */
        EVENTTYPE["SELECT_OFF"] = "select.off";
        /** A subscene, including data it may contain, has become visible in the viewer after a parameter update or the initial scene loading.
         * This event is fired before fading in of the new subscene has been finished.
         */
        EVENTTYPE["SUBSCENE_PUBLISHED"] = "subscene.published";
        /** Scene has become visible. This event is fired whenever the `scene.show` setting is changed from `false` to `true`. */
        EVENTTYPE["VISIBILITY_ON"] = "visibility.on";
        /** Scene has become invisible. This event is fired whenever the `scene.show` setting is changed from `true` to `false`. */
        EVENTTYPE["VISIBILITY_OFF"] = "visibility.off";
    })(EVENTTYPE = Scene.EVENTTYPE || (Scene.EVENTTYPE = {}));
    ;
    /**
     * Enum for supported material types.
     * @readonly
     * @enum {module:ApiSceneInterface~ApiSceneInterface#MaterialType}
     */
    let MATERIALTYPE;
    (function (MATERIALTYPE) {
        /** identifier for the standard material */
        MATERIALTYPE["STANDARD"] = "standard";
        /** identifier for the gem material */
        MATERIALTYPE["GEM"] = "gem";
    })(MATERIALTYPE = Scene.MATERIALTYPE || (Scene.MATERIALTYPE = {}));
    ;
    /**
     * Enum for supported interaction modes. Allows to specify whether a complete {@link module:ApiSceneInterface~ApiSceneInterface#SceneAsset asset} or its individual subobjects should become selectable/hoverable/draggable.
     * This enum is used for property interactionMode of the {@link module:ApiSceneInterface~ApiSceneInterface#SceneAsset SceneAsset}
     * @readonly
     * @enum {module:ApiSceneInterface~ApiSceneInterface#InteractionModeType}
     */
    let INTERACTIONMODETYPE;
    (function (INTERACTIONMODETYPE) {
        /** object and subobjects are globally selectable/hoverable/draggable, i.e. all of them at the same time */
        INTERACTIONMODETYPE["GLOBAL"] = "global";
        /** object and subobjects are individually selectable/hoverable/draggable */
        INTERACTIONMODETYPE["SUB"] = "sub";
    })(INTERACTIONMODETYPE = Scene.INTERACTIONMODETYPE || (Scene.INTERACTIONMODETYPE = {}));
    ;
    /**
     * Enum for supported selection modes. Allows to specify whether a single or multiple objects within an {@link module:ApiSceneInterface~ApiSceneInterface#InteractionGroup InteractionGroup} are selectable.
     * @readonly
     * @enum {module:ApiSceneInterface~ApiSceneInterface#SelectionModeType}
     */
    let SELECTIONMODETYPE;
    (function (SELECTIONMODETYPE) {
        /** A single object of the {@link module:ApiSceneInterface~ApiSceneInterface#InteractionGroup InteractionGroup} can be selected, all objects of the group are deselected on a click which does not hit an object of the group. */
        SELECTIONMODETYPE["SINGLE"] = "single";
        /** Selection status of objects belonging to the {@link module:ApiSceneInterface~ApiSceneInterface#InteractionGroup InteractionGroup} is toggled by clicking on them, selection status does not change on a click which does not hit an object of the group. */
        SELECTIONMODETYPE["MULTIPLE"] = "multiple";
    })(SELECTIONMODETYPE = Scene.SELECTIONMODETYPE || (Scene.SELECTIONMODETYPE = {}));
    ;
    /**
     * Enum for supported transformation types. Allows to specify whether a transformation matrix should be applied to the geometry of a plugin or the geometry within a viewport.
     * @readonly
     * @enum {module:ApiSceneInterface~ApiSceneInterface#TransformationType}
     */
    let TRANSFORMATIONTYPE;
    (function (TRANSFORMATIONTYPE) {
        /** the transformation is applied to the geometry of a plugin */
        TRANSFORMATIONTYPE["PLUGIN"] = "plugin";
        /** the transformation is applied to the geometry in a specific viewport */
        TRANSFORMATIONTYPE["VIEWPORT"] = "viewport";
    })(TRANSFORMATIONTYPE = Scene.TRANSFORMATIONTYPE || (Scene.TRANSFORMATIONTYPE = {}));
    ;
    /**
     * Enum for supported live transformation types.
     * @readonly
     * @enum {module:ApiSceneInterface~ApiSceneInterface#LiveTransformationType}
     */
    let LIVETRANSFORMATIONTYPE;
    (function (LIVETRANSFORMATIONTYPE) {
        /** the transformation is a rotation */
        LIVETRANSFORMATIONTYPE["ROTATION"] = "rotation";
        /** the transformation is a translation */
        LIVETRANSFORMATIONTYPE["TRANSLATION"] = "translation";
        /** the transformation is a scaling */
        LIVETRANSFORMATIONTYPE["SCALING"] = "scaling";
    })(LIVETRANSFORMATIONTYPE = Scene.LIVETRANSFORMATIONTYPE || (Scene.LIVETRANSFORMATIONTYPE = {}));
    ;
    ;
})(Scene = exports.Scene || (exports.Scene = {}));


/***/ }),

/***/ "./node_modules/shapediver-types/lib/v2/interfaces/ApiStateV2.1.interface.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/shapediver-types/lib/v2/interfaces/ApiStateV2.1.interface.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var State;
(function (State) {
    /**
     * __ShapeDiver 3D Viewer Application__, copyright (c) 2018 _ShapeDiver GmbH_
     *
     * *ApiStateInterfaceV2.1.js*
     *
     * ### Content
     *   * Abstract definition of the ShapeDiver 3D Viewer State API V2.1
     *
     * @module ApiStateInterface
     * @author ShapeDiver <contact@shapediver.com>
     */
    /**
        * Enum for supported state event types.
        * @readonly
        * @enum {@link module:ApiStateInterface~ApiStateInterface#StateEventType}
        */
    let EVENTTYPE;
    (function (EVENTTYPE) {
        /** The viewer has entered busy state, which means at least one update process is currently going on. */
        EVENTTYPE["BUSY"] = "busy";
        /** The viewer has entered idle state, which means there are no more update processes going on. */
        EVENTTYPE["IDLE"] = "idle";
        /** a message which may be displayed to the user */
        EVENTTYPE["MESSAGE"] = "message";
        /** a message reporting a fatal error, e.g. the WebGL context was lost and could not be recovered  */
        EVENTTYPE["FAILED"] = "failed";
    })(EVENTTYPE = State.EVENTTYPE || (State.EVENTTYPE = {}));
    ;
    ;
})(State = exports.State || (exports.State = {}));


/***/ }),

/***/ "./node_modules/shapediver-types/lib/v2/interfaces/ApiViewportsV2.1.interface.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/shapediver-types/lib/v2/interfaces/ApiViewportsV2.1.interface.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Viewports;
(function (Viewports) {
    /**
     * __ShapeDiver 3D Viewer Application__, copyright (c) 2018 _ShapeDiver GmbH_
     *
     * *ApiViewportsInterfaceV2.1.js*
     *
     * ### Content
     *   * Abstract definition of the ShapeDiver 3D Viewer Viewports API V2.1
     *
     * @module ApiViewportsInterface
     * @author ShapeDiver <contact@shapediver.com>
     */
    /**
     * Enum for the viewport api events.
     * @readonly
     * @enum {module:ApiViewportsInterface~ApiViewportsInterface#ViewportEventType}
     */
    let EVENTTYPE;
    (function (EVENTTYPE) {
        /** a viewport has been created */
        EVENTTYPE["CREATED"] = "created";
        /** the viewport has been destroyed */
        EVENTTYPE["DESTROYED"] = "destroyed";
    })(EVENTTYPE = Viewports.EVENTTYPE || (Viewports.EVENTTYPE = {}));
    ;
    ;
})(Viewports = exports.Viewports || (exports.Viewports = {}));


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map