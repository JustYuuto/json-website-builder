const ChildrenTags = require("./ChildrenTags");

module.exports = class JSONToHTML {

    constructor(json) {
        this.tags = json;
        return this.parse(json);
    }

    parse(tags) {
        tags = tags || this.tags;
        let html = '';

        tags.map((tag) => {
            if (!tag) return;

            const tagDetails = {
                tag: tag[0],
                attrs: Object.keys(tag[1]).map((key) => {
                    // Verify the attr have a value
                    const value = tag[1][key] ? `="${tag[1][key]}"` : '';

                    return `${key}${value}`;
                }),
                children: this.parse([tag[2]])
            };

            html += ChildrenTags.isChildrenTag(tagDetails.tag) ?
                `<${tagDetails.tag}${tagDetails.attrs ? ' ' + tagDetails.attrs.join(' ') : ''} />` :
                `<${tagDetails.tag}${tagDetails.attrs ? ' ' + tagDetails.attrs.join(' ') : ''}>${tagDetails.children}</${tagDetails.tag}>`;
        });


        return [html];
    }

}
