// Initialize modules
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();



// Sass Task
function scssTask() {
  const tailwindcss = require('tailwindcss');
  return src('src/scss/style.scss', { sourcemaps: true })
  .pipe(postcss([
    tailwindcss('tailwind.config.js'),
    require('autoprefixer'),
  ]))
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('dist', { sourcemaps: '.' }));
}

// JavaScript Task
function jsTask() {
  return src('src/js/*.js', { sourcemaps: true })
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(terser())
    .pipe(dest('dist', { sourcemaps: '.' }));
}

// Browsersync
function browserSyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: '.',
    },
    notify: {
      styles: {
        top: 'auto',
        bottom: '0',
      },
    },
  });
  cb();
}
function browserSyncReload(cb) {
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask() {
  watch('*.html', series(scssTask, browserSyncReload));
  watch(
    ['src/scss/**/*.scss', 'src/**/*.js'],
    series(scssTask, jsTask, browserSyncReload)
  );
}

// Default Gulp Task
exports.default = series(scssTask, jsTask, browserSyncServe, watchTask);

// Build Gulp Task
exports.build = series(scssTask, jsTask);