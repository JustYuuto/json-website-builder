/**
 * Children tags are tags that closes on themselves.
 *
 * @example <br &#47;>, <img &#47;>&hellip;
 */
module.exports = class ChildrenTags {

    childrenTags;

    constructor() {
        this.childrenTags = ['img', 'br', 'hr', 'meta', 'link', 'path'];
    }

    static isChildrenTag(tag) {
        return (new this).childrenTags.includes(tag);
    }

}
