/*import image from '../../utilities/image'
import fs from 'fs'

describe('image.resizeImage() should', () => {
    const imgName = 'fjord'
    const checkPath =
        '/Users/cjlee/workspace/projects/building-a-server-project/src/assets/thumb/fjord.jpg'
    console.log(`fs.existsSync(checkPath): ${fs.existsSync(checkPath)}`)
    if (fs.existsSync(checkPath)) {
        fs.unlinkSync(checkPath)
    }

    it('create resized image file if not already exist', () => {
        image.resizeImage(imgName, 200, 200, (err) => {
            if (err) {
                err.name = 'ImageFailedToProcessError'
                throw err
            }

            expect(fs.existsSync(checkPath)).toBeTruthy()
        })
    })

    it("not create resized image file if already exist", () => {
        image.resizeImage(imgName, 200, 200);
        expect(a).toBe(true);
      });
})*/
