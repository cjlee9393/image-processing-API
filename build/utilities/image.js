"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const imagemagick_1 = __importDefault(require("imagemagick"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const fullDir = "/Users/cjlee/workspace/projects/building-a-server-project/src/assets/full";
const thumbDir = "/Users/cjlee/workspace/projects/building-a-server-project/src/assets/thumb";
const resizeImage = (imgName, width, height) => {
    const checkPath = path_1.default.resolve(thumbDir, imgName + '.jpg');
    try {
        if (!fs_1.default.existsSync(checkPath)) {
            const srcPath = path_1.default.resolve(fullDir, imgName + '.jpg');
            imagemagick_1.default.resize({
                srcPath: srcPath,
                dstPath: checkPath,
                width: width,
                height: height,
            }, (err, stdout, stderr) => {
                if (err)
                    throw err;
                console.log(`resized  ${srcPath} to fit within ${width}x${height}px`);
            });
        }
    }
    catch (error) {
        console.log('error: ', error);
    }
};
exports.default = {
    resizeImage
};
