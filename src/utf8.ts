// tslint:disable:no-bitwise

export const utf8 = {
    encode: utf8Encode,
    decode: utf8Decode,
};

function utf8Encode(value: string): string {
    value = value.replace(/\r\n/g, "\n");
    let result = "";

    for (let i = 0; i < value.length; i++) {
        const char = value.charCodeAt(i);

        if (char < 128) {
            result += String.fromCharCode(char);
        } else if (char > 127 && char < 2048) {
            result += String.fromCharCode((char >> 6) | 192);
            result += String.fromCharCode((char & 63) | 128);
        } else {
            result += String.fromCharCode((char >> 12) | 224);
            result += String.fromCharCode(((char >> 6) & 63) | 128);
            result += String.fromCharCode((char & 63) | 128);
        }
    }

    return result;
}

function utf8Decode(value: string): string {
    let result = "";
    let i = 0;
    let char1 = 0;
    let char2 = 0;
    let char3 = 0;

    while (i < value.length) {
        char1 = value.charCodeAt(i);

        if (char1 < 128) {
            result += String.fromCharCode(char1);
            i++;
        } else if (char1 > 191 && char1 < 224) {
            char2 = value.charCodeAt(i + 1);
            result += String.fromCharCode(((char1 & 31) << 6) | (char2 & 63));
            i += 2;
        } else {
            char2 = value.charCodeAt(i + 1);
            char3 = value.charCodeAt(i + 2);
            result += String.fromCharCode(
                ((char1 & 15) << 12) | ((char2 & 63) << 6) | (char3 & 63),
            );
            i += 3;
        }
    }

    return result;
}
