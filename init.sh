echo "install npm packages dependencies"
npm install
cp ./@types/imagemagick/index.d.ts ./node_modules/@types/imagemagick/index.d.ts
echo "done"