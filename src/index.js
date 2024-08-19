module.exports = function reverse(huy) {
    if (huy < 0) {
        huy = huy * -1;
      }
return Number(String(huy).split("").reverse().join(""));
}
console.log(module.exports(-425))
