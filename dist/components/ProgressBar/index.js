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
exports.ProgressBar = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var ProgressBar = function (_a) {
    var progress = _a.progress;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "relative w-full h-2 bg-gray-200 rounded" }, { children: (0, jsx_runtime_1.jsx)("div", { className: "absolute top-0 left-0 h-full bg-blue-600 rounded", style: { width: "".concat(progress, "%") } }) })));
};
exports.ProgressBar = ProgressBar;
