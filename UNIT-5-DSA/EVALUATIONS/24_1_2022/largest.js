function runProgram(input) {
    input = input.trim().split("\n")
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number)
    console.log(max(arr, 0, n - 1));

}

function max(arr, l, h) {
    if (h == l)
        return arr[l];
    var mid = l + (h - l) / 2;

    if (mid == 0 && arr[mid] > arr[mid + 1]) {
        return arr[mid];
    }


    if (mid < h && arr[mid + 1] < arr[mid] && mid > 0 && arr[mid] > arr[mid - 1]) {
        return arr[mid];
    }


    if (arr[l] > arr[mid]) {
        return max(arr, l, mid - 1);
    }
    else {
        return max(arr, mid + 1, h);
    }
}




if (process.env.USERNAME === "DELL") {
    runProgram(`5
    6 7 8 1 4`);
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


























