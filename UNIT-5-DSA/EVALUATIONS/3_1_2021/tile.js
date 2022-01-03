function runProgram(input) {
    var [a,b] = input.trim().split(" ").map(Number)
    p(a,b);

    
   
  }
  function p(a,b){
      var d1 = a.toString().split("").map(Number)
      var sum = 0;
      for(var i=0; i<d1.length; i++){
           sum +=d1[i]
      }
      if(n==m){
          console.log(sum);
      }else{
          console.log(-1);
      }
      
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`32 47`);
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