"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const image_1 = __importDefault(require("./utilities/image"));
const path_1 = __importDefault(require("path"));
const thumbDir = "/Users/cjlee/workspace/projects/building-a-server-project/src/assets/thumb";
const app = (0, express_1.default)();
const port = 3000;
app.get('/api/images', (req, res) => {
    image_1.default.resizeImage(req.query.filename, parseInt(req.query.width), parseInt(req.query.height));
    res.sendFile(path_1.default.resolve(thumbDir, req.query.filename + '.jpg'));
});
app.listen(port, () => {
    console.log('server is listening to port ', port);
});
