function encoder(object) {
    let jsonEncodedString = "";
    for (const [key, value] of Object.entries(object)) {
        jsonEncodedString += jsonEncodedString === "" ? `"${key}":"${value}"` : `,"${key}":"${value}"`;
    }
    return "{" + jsonEncodedString + "}";
}

module.exports = encoder;