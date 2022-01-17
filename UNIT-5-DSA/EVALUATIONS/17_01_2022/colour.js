function runProgram(input) {
    input = input.trim().split("\n")
    var test = +input[0]
    var line = 1;
    for (var i = 0; i < test; i++) {
        var arr = input[line++].trim().split(" ")
        console.log(arr[1])
    }

}
function find(arr) {
    var sm = arr[0].length
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {


        }
    }

}
if (process.env.USERNAME === "DELL") {
    runProgram(`1
    rbbyrrby rbb rbbybbryb`);
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