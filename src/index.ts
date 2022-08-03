import express from 'express'
import path from 'path'
import fs from 'fs'

import image from './utilities/image'

const app = express()
const port = 3000

app.get('/api/images', (req: express.Request, res: express.Response) => {
    console.log('GET received in /api/images')
    try {
        const imgPath = image.getDstPath(req.query.filename as string, parseInt(req.query.width as string), parseInt(req.query.height as string));

        if (!fs.existsSync(imgPath)) {
            image.resizeImage(
                req.query.filename as string,
                parseInt(req.query.width as string),
                parseInt(req.query.height as string), 
                (err, stdout, stderr) => {
                    if (err) {
                        err.name = 'ImageFailedToProcessError'
                        throw err
                    }
                    if (stdout) console.log('stdout: ', stdout)
                    if (stderr) console.log('stderr: ', stderr)

                    res.status(200).sendFile(imgPath)
            });
            console.log('save it to disk on first access')
        } else {
            console.log('pull from disk on subsequent access')
            res.status(200).sendFile(imgPath)
        }

        
    } catch (error) {
        console.log(error)
        res.status(400).send((error as Error).name)
    }
})

app.get('/status', (req: express.Request, res: express.Response) => {
    res.status(200).send('')
})

app.listen(port, () => {
    console.log('server is listening to port ', port)
})

export default app
