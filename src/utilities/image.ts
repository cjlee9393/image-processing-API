import im from 'imagemagick';
import fs from 'fs';
import path from 'path';

const fullDir = "/Users/cjlee/workspace/projects/building-a-server-project/src/assets/full";
const thumbDir = "/Users/cjlee/workspace/projects/building-a-server-project/src/assets/thumb";

const resizeImage = (imgName:string, width:number, height:number) => {
    const checkPath = path.resolve(thumbDir, imgName + '.jpg');

    try{
        if (!fs.existsSync(checkPath)){
            const srcPath = path.resolve(fullDir, imgName + '.jpg')

            im.resize({
                srcPath: srcPath,
                dstPath: checkPath,
                width: width,
                height: height,
              }, (err, stdout, stderr) => {
                if (err) throw err;
                console.log(`resized  ${srcPath} to fit within ${width}x${height}px`);
              });
        }
    }catch(error){
        console.log('error: ', error);
    }
}

export default {
    resizeImage
}