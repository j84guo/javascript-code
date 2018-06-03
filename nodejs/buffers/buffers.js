/*
Buffer is a type which handles binary data, it is roughly equivalent to an array of 8 bit bytes.
*/

buf = new Buffer(256);
console.log("created 256 byte buffer...");

len = buf.write("writing to a buffer");
console.log("wrote " + len + " ascii characters to buffer...");	

console.log("buffer length: " + buf.length);

console.log("ascii buffer: " + buf.toString());
console.log("json buffer: " + buf.toJSON());
