import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const pwd = __dirname.split('/').slice(0, -2).join('/')
const fullDir = path.resolve(pwd, 'src/assets/full')
const thumbDir = path.resolve(pwd, 'src/assets/thumb')

const getDstPath = (imgName: string, width: number, height: number): string => {
    return path.resolve(
        thumbDir,
        imgName + '.width' + width + '.height' + height + '.jpg'
    )
}

export const resizeImage = async (
    imgName: string,
    width: string,
    height: string
): Promise<string> => {
    // check valid width and height
    if (isNaN(+width) || isNaN(+height)) {
        const err = new Error()
        err.message = `Height/width parameters should be positive integers.`
        err.name = 'InvalidHeightWidthError'
        throw err
    }

    const srcPath = path.resolve(fullDir, imgName + '.jpg')
    const dstPath = getDstPath(imgName, +width, +height)

    // check valid filename
    if (!fs.existsSync(srcPath)) {
        const err = new Error()
        err.message = `Original file name should be 'encenadaport', 'fjord', 'icelandwaterfall', 'palmtunnel', or 'santamonica.'`
        err.name = 'InvalidFileNameError'
        throw err
    }

    // check if already exist
    if (!fs.existsSync(dstPath)) {
        console.log('Resize an image and save it to disk on first access.')
        return dstPath
    } else {
        console.log('Pull from disk on subsequent access attempts.')
        await sharp(srcPath)
            .resize(+width, +height)
            .toFile(dstPath)
        return dstPath
    }
}
