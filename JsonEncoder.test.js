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

    test("Given an object with an array of a single string When encoded Then Return a valid JSON", () => {
        let sampleObject = {something: ["test"]};
        expect(encoder(sampleObject)).toBe(JSON.stringify(sampleObject));
    });

    test("Given an object with an array of a multiple strings When encoded Then Return a valid JSON", () => {
        let sampleObject = {something: ["test", "moo"]};
        expect(encoder(sampleObject)).toBe(JSON.stringify(sampleObject));
    });
    test("Given an object with an array of a number When encoded Then Return a valid JSON", () => {
        let sampleObject = {something: [1]};
        expect(encoder(sampleObject)).toBe(JSON.stringify(sampleObject));
    });
    test("Given an object with an array of multiple numbers When encoded Then Return a valid JSON", () => {
        let sampleObject = {something: [1, 49]};
        expect(encoder(sampleObject)).toBe(JSON.stringify(sampleObject));
    });

    test("Given an object with multiple arrays of multiple numbers/strings When encoded Then Return a valid JSON", () => {
        let sampleObject = {something: [1, 49, "simple"], anotherThing: ["test", 25, "moo"]};
        expect(encoder(sampleObject)).toBe(JSON.stringify(sampleObject));
    });

    test("Given an object with an object with a string When encoded Then Return a valid JSON", () => {
        let sampleObject = {something: {newThing: "tada"}};
        expect(encoder(sampleObject)).toBe(JSON.stringify(sampleObject));
    });

    test("Given an object with an object with multiple strings When encoded Then Return a valid JSON", () => {
        let sampleObject = {something: {newThing: "tada", blah: "moo"}};
        expect(encoder(sampleObject)).toBe(JSON.stringify(sampleObject));
    });

    test("Given an object with an object with multiple int When encoded Then Return a valid JSON", () => {
        let sampleObject = {something: {newThing: 34, blah: 92}};
        expect(encoder(sampleObject)).toBe(JSON.stringify(sampleObject));
    });

    test("Given an object with an object with a null value When encoded Then Return a valid JSON", () => {
        let sampleObject = {something: null};
        expect(encoder(sampleObject)).toBe(JSON.stringify(sampleObject));
    });

    test("Given an object with an object that has an array value When encoded Then Return a valid JSON", () => {
        let sampleObject = {something: {another: [1,2,3]}};
        expect(encoder(sampleObject)).toBe(JSON.stringify(sampleObject));
    });

    test("Given an array of objects When encoded Then Return a valid JSON", () => {
        let sampleObject = {something: [{test: 23},{blah: "falala"}]};
        expect(encoder(sampleObject)).toBe(JSON.stringify(sampleObject));
    });

    test("Given an array of arrays When encoded Then Return a valid JSON", () => {
        let sampleObject = {something: [[1,2,3],["what", "moo", "test"]]};
        expect(encoder(sampleObject)).toBe(JSON.stringify(sampleObject));
    });
});