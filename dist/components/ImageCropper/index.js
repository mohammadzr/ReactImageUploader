"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageCropper = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var react_image_crop_1 = __importDefault(require("react-image-crop"));
var react_2 = require("@headlessui/react");
require("react-image-crop/dist/ReactCrop.css");
var ImageCropper = function (_a) {
    var file = _a.file, onComplete = _a.onComplete, onCancel = _a.onCancel;
    var _b = (0, react_1.useState)({ aspect: 1 }), crop = _b[0], setCrop = _b[1];
    var _c = (0, react_1.useState)(null), completedCrop = _c[0], setCompletedCrop = _c[1];
    var _d = (0, react_1.useState)(null), imageRef = _d[0], setImageRef = _d[1];
    var onImageLoaded = (0, react_1.useCallback)(function (img) {
        setImageRef(img);
    }, []);
    var onCropComplete = (0, react_1.useCallback)(function (crop) {
        setCompletedCrop(crop);
    }, []);
    var getCroppedImg = (0, react_1.useCallback)(function () { return __awaiter(void 0, void 0, void 0, function () {
        var canvas, scaleX, scaleY, ctx;
        return __generator(this, function (_a) {
            if (!imageRef || !completedCrop)
                return [2 /*return*/];
            canvas = document.createElement("canvas");
            scaleX = imageRef.naturalWidth / imageRef.width;
            scaleY = imageRef.naturalHeight / imageRef.height;
            canvas.width = completedCrop.width;
            canvas.height = completedCrop.height;
            ctx = canvas.getContext("2d");
            ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(imageRef, completedCrop.x * scaleX, completedCrop.y * scaleY, completedCrop.width * scaleX, completedCrop.height * scaleY, 0, 0, completedCrop.width, completedCrop.height);
            return [2 /*return*/, new Promise(function (resolve) {
                    canvas.toBlob(function (blob) {
                        if (blob) {
                            var croppedFile = new File([blob], file.name, {
                                type: file.type,
                            });
                            resolve(croppedFile);
                        }
                    }, file.type);
                })];
        });
    }); }, [imageRef, completedCrop, file]);
    var handleComplete = function () { return __awaiter(void 0, void 0, void 0, function () {
        var croppedFile;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getCroppedImg()];
                case 1:
                    croppedFile = _a.sent();
                    if (croppedFile) {
                        onComplete(croppedFile);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsx)(react_2.Dialog, __assign({ open: true, onClose: onCancel }, { children: (0, jsx_runtime_1.jsxs)(react_2.Dialog.Panel, { children: [(0, jsx_runtime_1.jsx)(react_image_crop_1.default, { src: URL.createObjectURL(file), crop: crop, onImageLoaded: onImageLoaded, onChange: function (newCrop) { return setCrop(newCrop); }, onComplete: onCropComplete }), (0, jsx_runtime_1.jsx)("button", __assign({ onClick: handleComplete }, { children: "Crop" })), (0, jsx_runtime_1.jsx)("button", __assign({ onClick: onCancel }, { children: "Cancel" }))] }) })));
};
exports.ImageCropper = ImageCropper;
