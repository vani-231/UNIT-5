function runProgram(input) {
    input = input.trim().split("\n")
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number)
    var Esum = 0
    var Osum = 0;
    for (var i = 0; i < n; i++) {
        if (arr[i] % 2 == 0) {
            Esum += arr[i]
        } else {
            Osum += arr[i]
        }
    }
    if (Osum > Esum) {
        console.log("Odd");
    } else {
        console.log("Even");
    }
}
if (process.env.USERNAME === "DELL") {
    runProgram(`5
    2 2 2 3 3`);
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