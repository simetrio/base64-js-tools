base64-js-tools
=========

Encode/Decode base64 from byte array or text

## Install

```shell
$ npm install --save base64-js-tools
```

## Import

```javascript
import { Base64 } from "base64-js-tools";
```

or

```javascript
const { Base64 } = require("base64-js-tools");
```

## Usage

### Encode

```javascript
Base64.encodeByteArray([208, 176, 121, 55, 56, 42, 38, 54]) //  0LB5NzgqJjY=
Base64.encodeText("dew^&5654")                              //  ZGV3XiY1NjU0
```

### Decode

```javascript
Base64.decodeToByteArray("0LB5NzgqJjY=")                    //  [208, 176, 121, 55, 56, 42, 38, 54]
Base64.decodeToText("ZGV3XiY1NjU0")                         //  dew^&5654
```