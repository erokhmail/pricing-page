### Test task - Jadwalin

`maket` - https://www.figma.com/file/KoqXM6Hb29OxXMEWCJU71A/Pricing-Page?type=design&t=arLEqvDRTP0AKBOB-6

### Scripts list

`npm start` - starting local server for development by address http://localhost:3000/, watch changes

`npm build` - building project to the "dist" folder

`npm deploy` - deploying current project to the GitHub pages branch. Deploy is available ONLY after building the project.

### Gulp Tasks

`gulp serve` - start local server

`gulp buildStyles` - compile SCSS files into CSS

`gulp buildHTML` - build HTML file

`gulp buildScripts` - concatenate, uglify JS files

`gulp buildPageScripts` - uglify separated JS files for pages

`gulp modernImages` - convert JPG, PNG to AVIF and WEBP and compress images

`gulp spriteImages` - convert svg to sprite.svg


`gulp convertFonts` - conver font filest from TTF, OTF to WOFF and WOFF2 formats

`gulp cleanDist` - remove all files from the "dist" folder

`gulp move` - move favicon, fonts, plugins to the "dist" folder

`gulp build` - build project files into the "dist" folder

`gulp deploy` - deploy project to the GitHub pages

`gulp dev` - build ans run local server for development