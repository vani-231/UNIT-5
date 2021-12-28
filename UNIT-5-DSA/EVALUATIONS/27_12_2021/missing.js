function runProgram(input) {
    input = input.trim().split("\n")
    var test = +input[0]
    var line = 1;
    for(var i=0;i<test;i++){
        var arr = input[line++].trim().split(" ").map(Number)
       diff(arr)
    } 
   
  }
  function diff(arr) {
    var res = ""
      var arr1 = [0,1,2,3,4,5,6,7,8,9,10,11,12]
      for(var i=0;i<arr.length;i++){
        if(arr[i]!=arr1[i]){
          res += arr1[i]
        }
      }
      console.log(res[0]);
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`3
    0 1 2 4 5 6 9 10 11 12 
    0 1 2 4 5 6 8 10 11 12 
    1 2 3 5 7 8 9 10 11 12`);
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


 