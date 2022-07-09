"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = __importDefault(require("../../utilities/image"));
const fs_1 = __importDefault(require("fs"));
describe("image.resizeImage() should", () => {
    const imgName = "fjord";
    const checkPath = '/Users/cjlee/workspace/projects/building-a-server-project/src/assets/thumb/fjord.jpg';
    console.log(`fs.existsSync(checkPath): ${fs_1.default.existsSync(checkPath)}`);
    if (fs_1.default.existsSync(checkPath)) {
        fs_1.default.unlinkSync(checkPath);
    }
    it("create resized image file if not already exist", () => {
        image_1.default.resizeImage(imgName, 200, 200);
        setTimeout(() => {
            expect(fs_1.default.existsSync(checkPath)).toBeTruthy();
        }, 1000);
    });
    /* it("not create resized image file if already exist", () => {
        image.resizeImage(imgName, 200, 200);
        expect(a).toBe(true);
      });*/
});
