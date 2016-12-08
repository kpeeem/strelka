'use strict';
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const HTML = require('./layout');

module.exports = function() {
    let html = ReactDOMServer.renderToStaticMarkup(React.createElement(HTML))
    return `
        <!doctype html>\n${html}`;
};