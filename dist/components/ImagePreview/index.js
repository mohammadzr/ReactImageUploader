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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagePreview = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var ImagePreview = function (_a) {
    var files = _a.files;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "flex flex-wrap gap-4" }, { children: files.map(function (file, index) { return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "relative w-32 h-32" }, { children: (0, jsx_runtime_1.jsx)("img", { src: file.preview, alt: file.file.name, className: "object-cover w-full h-full rounded" }) }), index)); }) })));
};
exports.ImagePreview = ImagePreview;
