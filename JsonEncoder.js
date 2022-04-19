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
           for(const subValue of value){
               jsonEncodedString += writeStringForMultiples(jsonEncodedString, `"${key}":["${subValue}"]`);
           }
        }
        else {
            jsonEncodedString += writeStringForMultiples(jsonEncodedString, `"${key}":"${value}"`);
        }
    }
    return "{" + jsonEncodedString + "}";
}

module.exports = encoder;