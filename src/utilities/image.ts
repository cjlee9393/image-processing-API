import sharp from 'sharp'
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

const resizeImage = (imgName: string, width: number, height: number, callback: (err: Error) => void) => {
    const srcPath = path.resolve(fullDir, imgName + '.jpg')
    const dstPath = getDstPath(imgName, width, height);

    if (!fs.existsSync(srcPath)) {
        const err = new Error(`no such file or directory, stat ${srcPath}`)
        err.name = 'ImageNotExistError'
        throw err
    }

    sharp(srcPath)
        .resize(width, height)
        .toFile(dstPath, callback);
}

export default {
    resizeImage, getDstPath
}
