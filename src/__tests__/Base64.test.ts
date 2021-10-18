import { Base64 } from "../index";

test("EncodeFromByteArray", () => {
    expect(Base64.encodeByteArray([209, 131, 208, 188, 54, 55, 209, 139, 209, 132, 209, 139])).toBe("0YPQvDY30YvRhNGL");
    expect(Base64.encodeByteArray([208, 176, 121, 55, 56, 42, 38, 54])).toBe("0LB5NzgqJjY=");
    expect(Base64.encodeByteArray([114, 101, 54, 55, 94, 208, 191, 209, 128, 208, 188, 54, 55])).toBe(
        "cmU2N17Qv9GA0Lw2Nw==",
    );
});
