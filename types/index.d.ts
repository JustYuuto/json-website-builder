export default class JSONWebsiteBuilder {
    constructor(json: Tags[]);
}

export class ChildrenTags {
    private childrenTags: string[];
    constructor();
    static isChildrenTag(tag: string): boolean;
}

export class JSONToHTML {
    private json: Tags[];
    private tags: Tags;
    constructor(json: Tags[]);
    parse(tags: Tags[]): [string];
}

declare interface Tag {
    tag: string,
    attrs?: Attrs,
    children?: string | string[]
}

declare interface Attrs {
    [key: string]: string;
}

declare type Tags = Tag[];
