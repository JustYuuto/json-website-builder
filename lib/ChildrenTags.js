/**
 * Children tags are tags that closes on themselves.
 *
 * @example <br />, <img />...
 */
module.exports = class ChildrenTags {

    constructor() {
        this.childrenTags = ['img', 'br', 'hr', 'meta', 'link', 'path'];
    }

    static isChildrenTag(tag) {
        return (new this).childrenTags.includes(tag);
    }

}
