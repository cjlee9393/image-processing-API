import im from 'imagemagick'
import fs from 'fs'
import path from 'path'

const fullDir =
    '/Users/cjlee/workspace/projects/building-a-server-project/src/assets/full'
const thumbDir =
    '/Users/cjlee/workspace/projects/building-a-server-project/src/assets/thumb'

const resizeImage = (imgName: string, width: number, height: number, callback: (err: Error, stdout: String, stderr: String) => void) => {
    const srcPath = path.resolve(fullDir, imgName + '.jpg')
    const dstPath = path.resolve(thumbDir, imgName + '.jpg')

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
    resizeImage,
}
