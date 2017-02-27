# docker-imageoptim
Docker image to losslessly optimise all image formats.

It uses [Gulp](http://gulpjs.com/) and [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin) to compress JPEG, PNG, GIF and SVG image formats.

## Usage

Run `docker run -v /path/to/images/:/images/src imageoptim`

Optimised images will be copied to an `optimised` folder in the images source directory.
