function runProgram(input) {
    input = input.trim().split("\n")
    var test = +input[0]
    var line = 1
    for(var i = 0; i < test; i++) {
        var [a,b,c] = input[line++].trim().split(" ").map(Number)
        console.log( Istriangle(a,b,c))

    }
    
   
  }
  function Istriangle(a,b,c){
      
      
          if((a+b)>c && (b+c)>a && (c+a)>b)
            return "Yes"
      
      return "No"
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`4
    4 5 13
    7 1 8
    2 5 4
    2 2 2
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