function convertArray(arr) {
    return arr.map((obj) => obj.toObject());
}

function convertObject(obj) {
    return obj ? obj.toObject() : obj;
}
module.exports = { convertArray, convertObject };