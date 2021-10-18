const base64Keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

export const encodeByteArray = (bytes: number[]): string => {
    let result = "";
    let byte1, byte2, byte3, encoded1, encoded2, encoded3, encoded4;
    let i = 0;

    while (i < bytes.length) {
        byte1 = bytes[i++];
        byte2 = bytes[i++];
        byte3 = bytes[i++];

        encoded1 = byte1 >> 2;
        encoded2 = ((byte1 & 3) << 4) | (byte2 >> 4);
        encoded3 = ((byte2 & 15) << 2) | (byte3 >> 6);
        encoded4 = byte3 & 63;

        if (isNaN(byte2)) {
            encoded3 = encoded4 = 64;
        } else if (isNaN(byte3)) {
            encoded4 = 64;
        }

        result =
            result +
            base64Keys.charAt(encoded1) +
            base64Keys.charAt(encoded2) +
            base64Keys.charAt(encoded3) +
            base64Keys.charAt(encoded4);
    }

    return result;
};

export const decodeToByteArray = (base64String: string): number[] => {
    let result: number[] = [];
    let byte1, byte2, byte3, encoded1, encoded2, encoded3, encoded4;
    let i = 0;

    base64String = base64String.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < base64String.length) {
        encoded1 = base64Keys.indexOf(base64String.charAt(i++));
        encoded2 = base64Keys.indexOf(base64String.charAt(i++));
        encoded3 = base64Keys.indexOf(base64String.charAt(i++));
        encoded4 = base64Keys.indexOf(base64String.charAt(i++));

        byte1 = (encoded1 << 2) | (encoded2 >> 4);
        byte2 = ((encoded2 & 15) << 4) | (encoded3 >> 2);
        byte3 = ((encoded3 & 3) << 6) | encoded4;

        result.push(byte1);

        if (encoded3 !== 64) {
            result.push(byte2);
        }
        if (encoded4 !== 64) {
            result.push(byte3);
        }
    }

    return result;
};
