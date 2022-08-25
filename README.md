# Image Processing API

## Usage

1. Configure build environment
    - Using Docker
      1. build image with dockerfile in the root of the project repo
         ```bash
         docker build . -t image-processing-api
         ```
      2. run docker image
         ```bash
         docker run -it -p 3000:3000 image-processing-api
         ```

    - Not using Docker
      1. install imagemagick
         ```bash
         ## for linux with apt
         sudo apt install imagemagick

         ## for linux with yum
         sudo yum install ImageMagick

         ## for mac
         brew install imagemagick
         ```

      2. install npm packages dependencies
         ```bash
         ./init.sh
         ```

      3. For reference, proposed set of packages with their versions are package.json file as well as in *Dependencies* section

2. Build typescript
    ```bash
    
    npm run build
    ```

3. Run server and connect in browser
    ```bash
    # Run server with node.js
    npm run start

    # Open Google Chrome
    open -a 'Google Chrome'

    # connect to http://HostURL:3000/status
    # connect to http://HostURL:3000/api/images?filename=fjord&width=500&height=500
    ```

* Unit testing using Jasmine
    ```bash
    npm run test
    ```

## Dependencies

| Type | Description |
| ----------- | ----------- |
| Software | The project is tested on Google Chrome 100.0.4896.75(official build) (arm64) with javascript version 1.7. The project is tested on node.js version 16.14.2. The project is tested with packages dependencies with their versions (below the table)|
| Firmware | No known dependency |
| Hardware | the project is tested on MacBook Air (M1, 2020) |

```javascript
   "dependencies": {
      "@types/express": "^4.17.13",
      "@types/node": "^18.0.3",
      "express": "^4.18.1",
      "fs": "^0.0.1-security",
      "imagemagick-cli": "^0.5.0",
      "jasmine": "^4.2.1",
      "jasmine-spec-reporter": "^7.0.0",
      "supertest": "^6.2.4",
      "typescript": "^4.7.4"
   },
   "devDependencies": {
      "@types/imagemagick": "^0.0.31",
      "@types/jasmine": "^4.0.3",
      "@types/supertest": "^2.0.12",
      "@typescript-eslint/eslint-plugin": "^5.32.0",
      "@typescript-eslint/parser": "^5.32.0",
      "eslint": "^8.21.0",
      "eslint-config-airbnb-base": "^15.0.0",
      "eslint-config-prettier": "^8.5.0",
      "eslint-plugin-import": "^2.26.0",
      "eslint-plugin-prettier": "^4.2.1",
      "imagemagick": "^0.1.3",
      "prettier": "^2.7.1"
   }
```

## List of files
- spec
   - jasmine.json
   - support
- src
	- assets
      - full
         - encenadaport.jpg
         - fjord.jpg
         - icelandwaterfall.jpg
         - palmtunnel.jpg
         - santamonica.jpg
      - thumb
   - tests
      - helpers
         - reporter.ts
      - utilities
         - imageSpec.ts
      - indexSpec.ts
   - utilities
      - image.ts
   - index.ts
- .eslintrc.js
- .gitignore
- .prettierrc
- .CODEOWNERS
- LICENCE.txt
- package.json
- README.md
- tsconfig.json

## References

## License

[License](LICENSE.txt)