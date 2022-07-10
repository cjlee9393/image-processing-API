import express from 'express';
import image from './utilities/image';
import path from 'path';
import fs from 'fs';

const thumbDir = "/Users/cjlee/workspace/projects/building-a-server-project/src/assets/thumb";
const app = express();
const port = 3000;

app.get('/api/images', (req:express.Request, res:express.Response) => {
    console.log('GET received in /api/images');
    try{
        const imgPath = path.resolve(thumbDir, req.query.filename + '.jpg');

        if (!fs.existsSync(imgPath)){
            image.resizeImage((req.query.filename as string), parseInt(req.query.width as string), parseInt(req.query.height as string));
            console.log('save it to disk on first access');
        }else{
            console.log('pull from disk on subsequent access');
        }

        res.sendFile(imgPath);
    }catch(error){
        console.log(error);
        res.status(400).send((error as Error).name);
    }
})

app.listen(port, () => {
    console.log('server is listening to port ', port);
})

export default{
    app
}