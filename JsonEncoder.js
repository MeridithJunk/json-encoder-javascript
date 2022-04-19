function writeStringForMultiples(jsonEncodedString, value) {
    return jsonEncodedString === "" ? `${value}` : `,${value}`;
}

function encodeArrays(value, key) {
    let arrayString = ""
    value.forEach(subValue => {
        if (typeof subValue == 'number') {
            arrayString += writeStringForMultiples(arrayString, `${subValue}`);
        } else if (typeof subValue == "string"){
            arrayString += writeStringForMultiples(arrayString, `"${subValue}"`);
        } else {
            let objectString = breakdownJson(subValue);
            arrayString += writeStringForMultiples(arrayString,`{${objectString}}`);
        }
    })
    return `"${key}":[${arrayString}]`;
}

function EncodeJson(value, key) {
    let jsonEncodedString = "";
    if (Array.isArray(value)) {
        const encodedArray = encodeArrays(value, key);
        jsonEncodedString += writeStringForMultiples(jsonEncodedString, encodedArray);
    } else if (typeof value === 'number') {
        jsonEncodedString += writeStringForMultiples(jsonEncodedString, `"${key}":${value}`);
    } else if (typeof value === 'string') {
        jsonEncodedString += writeStringForMultiples(jsonEncodedString, `"${key}":"${value}"`);
    } else if (value === null){
        jsonEncodedString += writeStringForMultiples(jsonEncodedString, `"${key}":null`);
    }
    else {
        let objectString = "";
        for (const [subKey, subValue] of Object.entries(value)) {
            objectString += writeStringForMultiples(objectString, EncodeJson(subValue, subKey));
        }
        jsonEncodedString += `"${key}":{${objectString}}`
    }
    return jsonEncodedString;
}

function breakdownJson(object) {
    let jsonEncodedString = "";
    for (const [key, value] of Object.entries(object)) {
        jsonEncodedString += writeStringForMultiples(jsonEncodedString, EncodeJson(value, key, jsonEncodedString));
    }
    return jsonEncodedString;
}

function encoder(object) {
    let jsonEncodedString = breakdownJson(object);
    return "{" + jsonEncodedString + "}";
}

module.exports = encoder;