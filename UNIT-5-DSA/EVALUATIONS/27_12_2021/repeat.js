function runProgram(input) {
    input = input.trim().split("\n")
    var test = +input[0]
    var line = 1;
    for(var i=0;i<test;i++){
        var n = +input[line++]
        var arr = input[line++].trim().split(" ").map(Number)
        rep(arr)
    }    
   
  }
  function rep(arr){
      var obj = {}
      for(var i=0;i<arr.length;i++){
          if(obj[arr[i]]===undefined){
              obj[arr[i]] = 1
          }else{
              obj[arr[i]]++;
          }
      }
      for(var key in obj){ 
          if(obj[key]==1){
              console.log(key);
          }
      }
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`1
    5
    1 2 1 3 4 4 5 2 3`);
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