function runProgram(input) {
    input = input.trim().split("\n")
    var test = +input[0] 
    var line =1 
    for(var i = 0; i < test; i++){
           var n = +input[line++]
           var arr = input[line++].trim().split(" ").map(Number)
           console.log(array(n,arr).join(" "));
    }  
   
  }
  function array(n,arr){
      if(n==1){
          return arr
      }else{
          return arr.sort()
      }
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`3
    1
    2
    3
    2 0 1
    4
    2 0 2 1`);
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