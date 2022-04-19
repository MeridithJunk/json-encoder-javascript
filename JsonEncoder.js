function writeStringForMultiples(jsonEncodedString, value) {
    return jsonEncodedString === "" ? `${value}` : `,${value}`;
}

function encoder(object) {
    let jsonEncodedString = "";
    for (const [key, value] of Object.entries(object)) {
        if (typeof value === 'number') {
            jsonEncodedString += writeStringForMultiples(jsonEncodedString, `"${key}":${value}`);
        }
        else if(Array.isArray(value)){
            let arrayString = ""
           value.forEach(subValue => {
               arrayString += writeStringForMultiples(arrayString, `"${subValue}"`);
           })
           jsonEncodedString += `"${key}":[${arrayString}]`;
        }
        else {
            jsonEncodedString += writeStringForMultiples(jsonEncodedString, `"${key}":"${value}"`);
        }
    }
    return "{" + jsonEncodedString + "}";
}

module.exports = encoder;