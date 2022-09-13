import express, { Request, Response } from 'express'
import { resizeImage } from '../utilities/image'

const images = async (req: Request, res: Response) => {
    try {
        const imgDst = await resizeImage(
            req.query.filename as string,
            req.query.width as string,
            req.query.height as string
        )

        res.sendFile(imgDst)
    } catch (err) {
        res.status(400).json(err)
    }
}

const image_routes = (app: express.Application) => {
    app.get('/api/images', images)
}

export default image_routes
