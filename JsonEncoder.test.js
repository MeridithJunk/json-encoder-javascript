const encoder = require("./JsonEncoder");


test("Given an object with string When encoded Then Return a valid JSON", () => {
    let sampleObject = {something : "Cool"};
    expect(encoder(sampleObject)).toBe(JSON.stringify(sampleObject));
})