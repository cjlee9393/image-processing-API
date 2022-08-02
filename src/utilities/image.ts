import im from 'imagemagick'
import fs from 'fs'
import path from 'path'

const fullDir =
    '/Users/cjlee/workspace/projects/building-a-server-project/src/assets/full'
const thumbDir =
    '/Users/cjlee/workspace/projects/building-a-server-project/src/assets/thumb'

const resizeImage = (imgName: string, width: number, height: number) => {
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
        },
        (err, stdout, stderr) => {
            if (err) {
                err.name = 'ImageFailedToProcessError'
                throw err
            }
            console.log('stdout: ', stdout)
            console.log('stderr: ', stderr)

            console.log(
                `resized  ${srcPath} to fit within ${width}x${height}px`
            )
        }
    )
}

export default {
    resizeImage,
}
