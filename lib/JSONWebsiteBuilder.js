const JSONToHTML = require('./JSONToHTML');

module.exports = class JSONWebsiteBuilder {

    constructor(json) {
        return new JSONToHTML(json);
    }


}
