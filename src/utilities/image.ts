import im from 'imagemagick'
import fs from 'fs'
import path from 'path'

const pwd = process.env.PWD as string;
const fullDir = path.resolve(pwd, 'src/assets/full');
    // '/Users/cjlee/workspace/projects/building-a-server-project/src/assets/full'
const thumbDir = path.resolve(pwd, 'src/assets/thumb');
    // '/Users/cjlee/workspace/projects/building-a-server-project/src/assets/thumb'

const getDstPath = (imgName: string, width: number, height: number) =>{
    return path.resolve(thumbDir, imgName + '.width' + width + ".height" + height + '.jpg');
}

const resizeImage = (imgName: string, width: number, height: number, callback: (err: Error, stdout: String, stderr: String) => void) => {
    const srcPath = path.resolve(fullDir, imgName + '.jpg')
    const dstPath = getDstPath(imgName, width, height);

    if (!fs.existsSync(srcPath)) {
        const err = new Error(`no such file or directory, stat ${srcPath}`)
        err.name = 'ImageNotExistError'
        throw err
    }

    im.resize(
        {
            srcPath: srcPath,
            dstPath: dstPath,
            width: width,
            height: height,
        }, callback);
}

export default {
    resizeImage, getDstPath
}
