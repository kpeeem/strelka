require('babel-core/register')({
    presets: ['es2015', 'react', 'stage-0']
});

require.extensions['.styl'] = () => {
    return;
};
require("babel-polyfill");
const env = process.env;
const koa = require('koa'),
      path = require('path');
const serve = require('koa-static');

const dotenv = require('dotenv');
dotenv.load();

const app = koa();

const stylus = require('stylus');
const hook = require('css-modules-require-hook');

const renderHtml = require('./renderHtml');

hook({
    generateScopedName: '[name]_[local]__[hash:base64:5]',
    extensions: ['.styl'],
    preprocessCss: function (css, filename) {
        return stylus(css)
            .set('filename', filename)
            .render();
    }
});


app.use(serve(__dirname),{deffer:true});
app.use(renderHtml);


app.listen(env.PORT);

console.log('listening on port: ' + env.PORT);