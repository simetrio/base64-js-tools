import { encodeByteArray, encodeText, decodeToByteArray, decodeToText } from "./base64";

export { encodeByteArray, encodeText, decodeToByteArray, decodeToText } from "./base64";

export const Base64: IBase64 = {
    encodeByteArray,
    encodeText,
    decodeToByteArray,
    decodeToText,
};

interface IBase64 {
    encodeByteArray: (bytes: number[]) => string;
    encodeText: (text: string) => string;
    decodeToByteArray: (base64String: string) => number[];
    decodeToText: (base64String: string) => string;
}
