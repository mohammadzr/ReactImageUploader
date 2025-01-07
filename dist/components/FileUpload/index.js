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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUpload = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var react_dropzone_1 = require("react-dropzone");
var framer_motion_1 = require("framer-motion");
var useFileUpload_1 = require("@/hooks/useFileUpload");
var ProgressBar_1 = require("@/components/ProgressBar");
var ImagePreview_1 = require("@/components/ImagePreview");
var ImageCropper_1 = require("@/components/ImageCropper");
var fileValidation_1 = require("@/utils/fileValidation");
var imageProcessing_1 = require("@/utils/imageProcessing");
var constants_1 = require("@/constants");
var FileUpload = function (_a) {
    var name = _a.name, control = _a.control, _b = _a.formLibrary, formLibrary = _b === void 0 ? "none" : _b, _c = _a.maxFiles, maxFiles = _c === void 0 ? 10 : _c, _d = _a.maxSize, maxSize = _d === void 0 ? constants_1.MAX_FILE_SIZE : _d, _e = _a.accept, accept = _e === void 0 ? { "image/*": constants_1.ACCEPTED_IMAGE_TYPES } : _e, _f = _a.disabled, disabled = _f === void 0 ? false : _f, _g = _a.className, className = _g === void 0 ? "" : _g, _h = _a.dropzoneClassName, dropzoneClassName = _h === void 0 ? "" : _h, _j = _a.previewClassName, previewClassName = _j === void 0 ? "" : _j, onFilesAdded = _a.onFilesAdded, onFileRemove = _a.onFileRemove, onError = _a.onError, _k = _a.showPreview, showPreview = _k === void 0 ? true : _k, _l = _a.showProgress, showProgress = _l === void 0 ? true : _l, _m = _a.allowCompression, allowCompression = _m === void 0 ? true : _m, _o = _a.allowCropping, allowCropping = _o === void 0 ? false : _o, customPreview = _a.customPreview, customDropzone = _a.customDropzone;
    var _p = (0, react_1.useState)(null), cropperFile = _p[0], setCropperFile = _p[1];
    var _q = (0, useFileUpload_1.useFileUpload)({
        maxFiles: maxFiles,
        onAddFiles: onFilesAdded,
    }), addFiles = _q.addFiles, isUploading = _q.isUploading, files = _q.files, progress = _q.progress;
    var handleDrop = (0, react_1.useCallback)(function (acceptedFiles) { return __awaiter(void 0, void 0, void 0, function () {
        var processedFiles, validationErrors, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    processedFiles = acceptedFiles;
                    validationErrors = acceptedFiles
                        .map(function (file) { return (0, fileValidation_1.validateFile)(file); })
                        .filter(Boolean);
                    if (validationErrors.length) {
                        onError === null || onError === void 0 ? void 0 : onError(validationErrors.join("\n"));
                        return [2 /*return*/];
                    }
                    if (!allowCompression) return [3 /*break*/, 2];
                    return [4 /*yield*/, Promise.all(acceptedFiles.map(function (file) { return (0, imageProcessing_1.compressImage)(file); }))];
                case 1:
                    processedFiles = _a.sent();
                    _a.label = 2;
                case 2:
                    // Handle form library integration
                    if (formLibrary === "react-hook-form" && control) {
                        control.setValue(name, processedFiles);
                    }
                    else if (formLibrary === "formik" && control) {
                        control.setFieldValue(name, processedFiles);
                    }
                    return [4 /*yield*/, addFiles(processedFiles)];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    onError === null || onError === void 0 ? void 0 : onError(error_1.message);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); }, [addFiles, allowCompression, control, formLibrary, name, onError]);
    var _r = (0, react_dropzone_1.useDropzone)({
        onDrop: handleDrop,
        accept: accept,
        maxSize: maxSize,
        disabled: disabled,
        multiple: maxFiles > 1,
    }), getRootProps = _r.getRootProps, getInputProps = _r.getInputProps, isDragActive = _r.isDragActive;
    var renderDropzone = function () {
        if (customDropzone) {
            return (0, jsx_runtime_1.jsx)("customDropzone", __assign({}, getRootProps()));
        }
        return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, __assign({}, getRootProps(), { className: "relative rounded-lg border-2 border-dashed p-6 text-center hover:border-blue-400 transition-colors ".concat(isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300", " ").concat(dropzoneClassName), whileHover: { scale: 1.01 }, whileTap: { scale: 0.99 } }, { children: [(0, jsx_runtime_1.jsx)("input", __assign({}, getInputProps())), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "space-y-2" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "text-gray-600" }, { children: isDragActive ? ("Drop files here...") : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["Drag & drop files here, or", " ", (0, jsx_runtime_1.jsx)("span", __assign({ className: "text-blue-500" }, { children: "browse" }))] })) })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "text-sm text-gray-500" }, { children: ["Supports: ", Object.values(accept).flat().join(", ")] }))] }))] })));
    };
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "space-y-4 ".concat(className) }, { children: [renderDropzone(), showProgress && isUploading && (0, jsx_runtime_1.jsx)(ProgressBar_1.ProgressBar, { progress: progress }), showPreview && files.length > 0 && ((0, jsx_runtime_1.jsx)(framer_motion_1.AnimatePresence, { children: (0, jsx_runtime_1.jsx)(ImagePreview_1.ImagePreview, { files: files, onRemove: onFileRemove, onCrop: allowCropping ? setCropperFile : undefined, className: previewClassName, CustomPreview: customPreview }) })), allowCropping && cropperFile && ((0, jsx_runtime_1.jsx)(ImageCropper_1.ImageCropper, { file: cropperFile, onComplete: function (croppedFile) {
                    setCropperFile(null);
                    handleDrop([croppedFile]);
                }, onCancel: function () { return setCropperFile(null); } }))] })));
};
exports.FileUpload = FileUpload;
