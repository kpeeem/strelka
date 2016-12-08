'use strict';

const React = require('react');
const ReactDOMServer = require('react-dom/server');

import fs from 'fs';
import path from 'path';
const App = require('../src');
const webpackAssets = JSON.parse(fs.readFileSync(path.join(__dirname, '../', 'assets.json')));

console.log(webpackAssets)

const layout = React.createClass({
    render: function() {
        var appString = ReactDOMServer.renderToString(<App />);

        return (
            <html>
            <head>
                <meta charset="UTF-8" />
                    <title>VECTOR</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link href={webpackAssets.main.css} rel="stylesheet" />
            </head>
                <body>
                    <div id="app" dangerouslySetInnerHTML={{__html: appString}}></div>
                    <script src={webpackAssets.main.js}></script>
                </body>
            </html>
        );
    }
});

module.exports = layout;