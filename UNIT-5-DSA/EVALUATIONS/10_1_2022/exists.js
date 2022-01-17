function runProgram(input) {
    input = input.trim().split("\n")
    var test = +input[0]
    var line = 1;
    for (var i = 0; i < test; i++) {
        var [n, k] = input[line++].trim().split(" ").map(Number)
        var arr = input[line++].trim().split(" ").map(Number)

        console.log(check(n, arr, k))
    }

}
function check(n, arr, k) {
    var count = 0;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (i != j) {
                if ((arr[i] - arr[j]) === k) {
                    count++;
                }
            }
        }
    }
    if (count > 0)
        return "Yes"
    else
        return "No"
}
if (process.env.USERNAME === "DELL") {
    runProgram(`2
    5 3
    1 2 3 4 5
    5 8
    1 2 3 4 5 `);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}