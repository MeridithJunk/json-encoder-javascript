function writeStringForMultiples(jsonEncodedString, value) {
    return jsonEncodedString === "" ? `${value}` : `,${value}`;
}

function encoder(object) {
    let jsonEncodedString = "";
    for (const [key, value] of Object.entries(object)) {
        if(Array.isArray(value)){
            let arrayString = ""
           value.forEach(subValue => {
               if(typeof subValue == 'number'){
                   arrayString += writeStringForMultiples(arrayString, `${subValue}`);
               }
               else {
                   arrayString += writeStringForMultiples(arrayString, `"${subValue}"`);
               }
           })
           jsonEncodedString += `"${key}":[${arrayString}]`;
        }
        else if (typeof value === 'number') {
            jsonEncodedString += writeStringForMultiples(jsonEncodedString, `"${key}":${value}`);
        }
        else {
            jsonEncodedString += writeStringForMultiples(jsonEncodedString, `"${key}":"${value}"`);
        }
    }
    return "{" + jsonEncodedString + "}";
}

module.exports = encoder;