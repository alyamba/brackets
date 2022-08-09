module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  } else {
    const pair = bracketsConfig.map((currentValue) => currentValue.join(""));

    for (let i = 0; i < pair.length; i++) {
      if (str.includes(pair[i])) {
        str = str.replace(pair[i], "");
        i = -1;
      }
    }

    return str === "";
  }
};
