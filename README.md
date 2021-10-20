base64-js-tools
=========

[![NPM Version](http://img.shields.io/npm/v/base64-js-tools.svg?style=flat)](https://www.npmjs.com/package/base64-js-tools)

Encode/Decode base64 from byte array or text

## Demo

[Online Base64 Encode File Or Image](https://www.olrix.net/tools/base64-encode-file-or-image/)

[Online Base64 Encode/Decode Text](https://www.olrix.net/tools/base64-encode-decode/)

## With npm

### Install

```shell
$ npm install --save base64-js-tools
```

### Import

```javascript
import { Base64 } from "base64-js-tools";
```

or

```javascript
const { Base64 } = require("base64-js-tools");
```

## In web browsers 

```javascript
<script src="base64.min.js"></script>
```

or

```javascript
<script src="https://cdn.jsdelivr.net/gh/simetrio/base64-js-tools@1.0.1/base64.min.js"></script>
```

## Usage

### Encode

```javascript
Base64.encodeByteArray([208, 176, 121, 55, 56, 42, 38, 54]);    //  0LB5NzgqJjY=
Base64.encodeText("dew^&5654");                                 //  ZGV3XiY1NjU0
```

### Decode

```javascript
Base64.decodeToByteArray("0LB5NzgqJjY=");   //  [208, 176, 121, 55, 56, 42, 38, 54]
Base64.decodeToText("ZGV3XiY1NjU0");        //  dew^&5654
```
