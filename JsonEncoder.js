function writeStringForMultiples(jsonEncodedString, value) {
    return jsonEncodedString === "" ? `${value}` : `,${value}`;
}

function encodeArrays(value, key) {
    let arrayString = ""
    value.forEach(subValue => {
        if (typeof subValue == 'number') {
            arrayString += writeStringForMultiples(arrayString, `${subValue}`);
        } else {
            arrayString += writeStringForMultiples(arrayString, `"${subValue}"`);
        }
    })
    return `"${key}":[${arrayString}]`;
}

function encoder(object) {
    let jsonEncodedString = "";
    for (const [key, value] of Object.entries(object)) {
        if (Array.isArray(value)) {
            const encodedArray = encodeArrays(value, key);
            jsonEncodedString += writeStringForMultiples(jsonEncodedString, encodedArray);
        } else if (typeof value === 'number') {
            jsonEncodedString += writeStringForMultiples(jsonEncodedString, `"${key}":${value}`);
        } else if (typeof value === 'string'){
            jsonEncodedString += writeStringForMultiples(jsonEncodedString, `"${key}":"${value}"`);
        } else {
            let objectString = "";
            for (const [subKey, subValue] of Object.entries(value)) {
                objectString +=  writeStringForMultiples(objectString,`"${subKey}":"${subValue}"`);
            }
            jsonEncodedString += `"${key}":{${objectString}}`
        }
    }
    return "{" + jsonEncodedString + "}";
}

module.exports = encoder;