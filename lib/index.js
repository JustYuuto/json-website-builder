const JSONToHTML = require('./JSONToHTML');

module.exports = class JSONWebsiteBuilder {

    static build(json) {
        if (!json || !(Array.isArray(json)) || typeof json !== 'object') {
            throw new Error('JSON is missing or is not an array');
        }

        return new JSONToHTML(json)[0];
    }


}
