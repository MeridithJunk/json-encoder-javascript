const encoder = require("./JsonEncoder");

describe("Json Encoder Tests", () => {
    test("Given an object with string When encoded Then Return a valid JSON", () => {
        let sampleObject = {something: "Cool"};
        expect(encoder(sampleObject)).toBe(JSON.stringify(sampleObject));
    });

    test("Given an object with multiple strings When encoded Then Return a valid JSON", () => {
        let sampleObject = {something: "Cool", another: "Cool-thing"};
        expect(encoder(sampleObject)).toBe(JSON.stringify(sampleObject));
    });

    test("Given an object with number When encoded Then Return a valid JSON", () => {
        let sampleObject = {something: 1};
        expect(encoder(sampleObject)).toBe(JSON.stringify(sampleObject));
    });

    test("Given an object with multiple numbers When encoded Then Return a valid JSON", () => {
        let sampleObject = {something: 1, anotherThing: 52};
        expect(encoder(sampleObject)).toBe(JSON.stringify(sampleObject));
    });
});