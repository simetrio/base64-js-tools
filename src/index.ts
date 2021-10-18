import { encodeByteArray } from "./base64";

export const Base64: IBase64 = {
    encodeByteArray: encodeByteArray,
};

interface IBase64 {
    encodeByteArray: (bytes: number[]) => string;
}
