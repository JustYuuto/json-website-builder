# JSON Website Builder

[![npm](https://img.shields.io/npm/dm/json-website-builder?logo=npm&style=for-the-badge)](https://npm.im/json-website-builder)
![NPM](https://img.shields.io/npm/l/json-website-builder?style=for-the-badge)

**JSON Website Builder** is a library to build websites with only JSON.

## Usage

First, you need to create a JSON file (its name doesn't matter). The content of the file will be the following:

```json
[
  [
    "tag",
    {
      "attr": "value"
    },
    "children"
  ]
]
```

* ``tag``: a HTML tag
* ``attrs``: an object, where the key is the attr, and the value is the attr value
* ``children``: can be a string with whatever you want, or this object

> You can see an example [here](example/website.json).