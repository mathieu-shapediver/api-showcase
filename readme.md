
# ShapeDiver Viewer Web App Template using TypeScript and Webpack

## Setup

  * Install required global npm packages using `npm install --global typescript webpack webpack-cli cpy-cli del-cli`
  * Run `npm install` in main directory to make sure locally required npm packages are installed 

## Build App Template

  * Run `npm run build`, which will run TypeScript and Webpack and copy results to subdirectory `./dist`

## Explanation

  * TypeScript is configured to compile from subdirectory `./src` to subdirectory `./js`
  * Webpack is configured to bundle from `./js/main.js` to `./dist/bundle.js`
  * .html and other non-TypeScript files get copied from subdirectory `./src` to subdirectory `./dist`
  * `main.ts` serves as the entry point of the application

## How to create your own App based on the template

  * Copy directory and adapt `package.json`

