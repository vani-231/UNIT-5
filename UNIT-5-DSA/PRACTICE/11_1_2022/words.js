var words = ["but", "put", "big", "pot", "pog", "dog", "lot"]
var target = "bag"
function check(target, words) {
    var res = 0;
    for (var i = 0; i < words.length; i++) {

        if (words[i] === target) {
            res = i
        }
    }
    if (res != 0) {
        return res
    } else {
        return -1;
    }

}
console.log(check(target, words));