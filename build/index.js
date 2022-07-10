"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const image_1 = __importDefault(require("./utilities/image"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const thumbDir = "/Users/cjlee/workspace/projects/building-a-server-project/src/assets/thumb";
const app = (0, express_1.default)();
const port = 3000;
app.get('/api/images', (req, res) => {
    console.log('GET received in /api/images');
    try {
        const imgPath = path_1.default.resolve(thumbDir, req.query.filename + '.jpg');
        if (!fs_1.default.existsSync(imgPath)) {
            image_1.default.resizeImage(req.query.filename, parseInt(req.query.width), parseInt(req.query.height));
            console.log('save it to disk on first access');
        }
        else {
            console.log('pull from disk on subsequent access');
        }
        res.sendFile(imgPath);
    }
    catch (error) {
        console.log(error);
        res.status(400).send(error.name);
    }
});
app.listen(port, () => {
    console.log('server is listening to port ', port);
});
exports.default = {
    app
};
