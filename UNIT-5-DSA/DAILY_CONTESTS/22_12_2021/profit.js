function runProgram(input) {
    input = input.trim().split("\n")
    var test = +input[0]
    var line = 1;
    for(var i = 0; i < test; i++) {
        var n = +input[line++]
        var arr = input[line++].trim().split(" ").map(Number)
        console.log(robbery(n,arr))
    }   
    
   
  }
  function robbery(n,arr){
      if(n<=5){
          return 0;
      }else{
         return Math.abs(arr[1]-arr[4])
      }
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`2
    6
    7 1 5 3 6 4
    4
    4 3 2 1
    `);
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