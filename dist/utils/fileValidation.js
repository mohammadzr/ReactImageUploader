"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFile = exports.ACCEPTED_IMAGE_TYPES = exports.MAX_FILE_SIZE = void 0;
exports.MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
exports.ACCEPTED_IMAGE_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
];
function validateFile(file) {
    if (!exports.ACCEPTED_IMAGE_TYPES.includes(file.type)) {
        return "Only JPG, PNG, and WebP formats are accepted.";
    }
    if (file.size > exports.MAX_FILE_SIZE) {
        return "File size must not exceed 5 MB.";
    }
    return null;
}
exports.validateFile = validateFile;
