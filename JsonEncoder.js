function encoder(object){
  let jsonEncodedString = "{"
  for (const [key, value] of Object.entries(object)) {
    jsonEncodedString += `"${key}":"${value}"`;
  }
  return jsonEncodedString + "}";
}

module.exports = encoder;