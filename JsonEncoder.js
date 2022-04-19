function encoder(object) {
    let jsonEncodedString = "";
    for (const [key, value] of Object.entries(object)) {
        if (typeof value === 'number') {
            jsonEncodedString += `"${key}":${value}`;
        } else {
            jsonEncodedString += jsonEncodedString === "" ? `"${key}":"${value}"` : `,"${key}":"${value}"`;
        }
    }
    return "{" + jsonEncodedString + "}";
}

module.exports = encoder;