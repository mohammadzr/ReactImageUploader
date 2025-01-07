"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.manipulateImageData = exports.generatePreviewUrl = void 0;
function generatePreviewUrl(file) {
    return new Promise(function (resolve) {
        var reader = new FileReader();
        reader.onloadend = function () {
            resolve(reader.result);
        };
        reader.readAsDataURL(file);
    });
}
exports.generatePreviewUrl = generatePreviewUrl;
function manipulateImageData(imageData, manipulation) {
    return manipulation(imageData);
}
exports.manipulateImageData = manipulateImageData;
