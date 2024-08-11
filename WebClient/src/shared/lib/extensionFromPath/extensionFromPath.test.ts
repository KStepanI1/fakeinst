import extensionFromPath from "./extensionFromPath";

describe("extension from path", () => {
    test("default", () => {
        expect(extensionFromPath("lalala.jpg")).toEqual("jpg");
    });

    test("wrong", () => {
        expect(extensionFromPath("lalala")).toEqual("");
    });

    test("empty extension", () => {
        expect(extensionFromPath("lalala.")).toEqual("");
    });

    test("multi dots", () => {
        expect(extensionFromPath("lalala.asfaf.asf.png")).toEqual("png");
    });
});
