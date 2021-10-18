import { decodeToByteArray, encodeByteArray } from "./base64";

export const Base64: IBase64 = {
    encodeByteArray: encodeByteArray,
    decodeToByteArray: decodeToByteArray,
};

interface IBase64 {
    encodeByteArray: (bytes: number[]) => string;
    decodeToByteArray: (base64String: string) => number[];
}
