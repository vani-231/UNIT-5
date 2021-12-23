function runProgram(input) {
    input = input.trim().split("\n")
    var test = +input[0]
    var line = 1;
    for(var i = 0; i < test; i++) {
        var n = +input[line++]
        var arr = input[line++].trim().split(" ").map(Number)
        robbery(n,arr)
    } 
  }
  function robbery(n,arr) {
      var sum = 0
      for(var i = 0; i < n; i++) {
          if(n%2!=0){
              if(i%2==0){
                  sum += arr[i]
              }
            }else{
                if(i%2==1){
                    sum += arr[i]
                }
            }
      }
      console.log(sum);
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`3
    2
    1 100
    3
    2 100 99
    4
    100 1 1 100`);
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
      process.exit(0) ;
    });
  }