import { Base64 } from "../index";

test("EncodeByteArray", () => {
    expect(Base64.encodeByteArray([209, 131, 208, 188, 54, 55, 209, 139, 209, 132, 209, 139])).toBe(
        "0YPQvDY30YvRhNGL",
    );
    expect(Base64.encodeByteArray([208, 176, 121, 55, 56, 42, 38, 54])).toBe("0LB5NzgqJjY=");
    expect(
        Base64.encodeByteArray([114, 101, 54, 55, 94, 208, 191, 209, 128, 208, 188, 54, 55]),
    ).toBe("cmU2N17Qv9GA0Lw2Nw==");
});

test("EncodeText", () => {
    expect(Base64.encodeText("dew^&5654")).toBe("ZGV3XiY1NjU0");
    expect(Base64.encodeText("sa97^&gd")).toBe("c2E5N14mZ2Q=");
    expect(Base64.encodeText("%^dsdyt5dw")).toBe("JV5kc2R5dDVkdw==");
});

test("DecodeToByteArray", () => {
    expect(Base64.decodeToByteArray("0YPQvDY30YvRhNGL")).toStrictEqual([
        209, 131, 208, 188, 54, 55, 209, 139, 209, 132, 209, 139,
    ]);
    expect(Base64.decodeToByteArray("0LB5NzgqJjY=")).toStrictEqual([
        208, 176, 121, 55, 56, 42, 38, 54,
    ]);
    expect(Base64.decodeToByteArray("cmU2N17Qv9GA0Lw2Nw==")).toStrictEqual([
        114, 101, 54, 55, 94, 208, 191, 209, 128, 208, 188, 54, 55,
    ]);
});

test("DecodeToText", () => {
    expect(Base64.decodeToText("ZGV3XiY1NjU0")).toBe("dew^&5654");
    expect(Base64.decodeToText("c2E5N14mZ2Q=")).toBe("sa97^&gd");
    expect(Base64.decodeToText("JV5kc2R5dDVkdw==")).toBe("%^dsdyt5dw");
});
