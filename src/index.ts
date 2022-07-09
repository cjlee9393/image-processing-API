import express from 'express';
import image from './utilities/image';
import path from 'path';

const thumbDir = "/Users/cjlee/workspace/projects/building-a-server-project/src/assets/thumb";
const app = express();
const port = 3000;

app.get('/api/images', (req:express.Request, res:express.Response) => {
    image.resizeImage((req.query.filename as string), parseInt(req.query.width as string), parseInt(req.query.height as string));

    res.sendFile(path.resolve(thumbDir, req.query.filename + '.jpg'));
})

app.listen(port, () => {
    console.log('server is listening to port ', port);
})