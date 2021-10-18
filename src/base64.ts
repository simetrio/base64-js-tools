// tslint:disable:no-bitwise

import { utf8 } from "./utf8";

const base64Keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
const base64End = 64;

export const encodeByteArray = (bytes: number[]): string => {
    let result = "";
    let i = 0;

    while (i < bytes.length) {
        const byte1 = bytes[i++];
        const byte2 = bytes[i++];
        const byte3 = bytes[i++];

        const encoded1 = byte1 >> 2;
        const encoded2 = ((byte1 & 3) << 4) | (byte2 >> 4);
        const encoded3 = isNaN(byte2) ? base64End : ((byte2 & 15) << 2) | (byte3 >> 6);
        const encoded4 = isNaN(byte2) || isNaN(byte3) ? base64End : byte3 & 63;

        result +=
            base64Keys.charAt(encoded1) +
            base64Keys.charAt(encoded2) +
            base64Keys.charAt(encoded3) +
            base64Keys.charAt(encoded4);
    }

    return result;
};

export const encodeText = (text: string): string => {
    const utf8Text = utf8.encode(text);

    const byteArray: number[] = [];
    for (let i = 0; i < utf8Text.length; i++) {
        byteArray.push(utf8Text.charCodeAt(i));
    }

    return encodeByteArray(byteArray);
};

export const decodeToByteArray = (base64String: string): number[] => {
    const result: number[] = [];
    let i = 0;

    base64String = base64String.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < base64String.length) {
        const encoded1 = base64Keys.indexOf(base64String.charAt(i++));
        const encoded2 = base64Keys.indexOf(base64String.charAt(i++));
        const encoded3 = base64Keys.indexOf(base64String.charAt(i++));
        const encoded4 = base64Keys.indexOf(base64String.charAt(i++));

        const byte1 = (encoded1 << 2) | (encoded2 >> 4);
        const byte2 = ((encoded2 & 15) << 4) | (encoded3 >> 2);
        const byte3 = ((encoded3 & 3) << 6) | encoded4;

        result.push(byte1);

        if (encoded3 !== base64End) {
            result.push(byte2);
        }
        if (encoded4 !== base64End) {
            result.push(byte3);
        }
    }

    return result;
};

export const decodeToText = (base64String: string): string => {
    const byteArray = decodeToByteArray(base64String);

    let utf8Text = "";
    byteArray.forEach((x) => (utf8Text += String.fromCharCode(x)));

    return utf8.decode(utf8Text);
};
