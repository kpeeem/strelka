const makeHtml = require('./makeHtml');

module.exports = function *(){

    this.body = makeHtml();
}