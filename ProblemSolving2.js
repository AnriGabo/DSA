
function convertASCII(str) {
  return str.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
}

console.log(convertASCII("anri"));
