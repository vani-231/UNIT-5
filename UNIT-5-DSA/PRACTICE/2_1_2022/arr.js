function runProgram(input) {
    input = input.trim().split("\n")
    var test = +input[0]
    var line = 1
    for(var i=0;i<test;i++) {
       var n1 = +input[line++]
       var arr1 = input[line++].trim().split(" ").map(Number)
       var n2 = +input[line++]
       var arr2 = input[line++].trim().split(" ").map(Number)
       merging(n1,n2,arr1,arr2)
    }   
  }

  function merging(n1,n2,arr1,arr2) {
   var arr= arr1.concat(arr2);
   var obj={}
    for(var i=0;i<arr.length;i++) {
        obj[arr[i]] = i
    }
   var res= Object.keys(obj).map(Number);
   res.sort(function(a,b){return a-b})
   console.log(res.join(" "));
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`1
    4
    1 2 -3 -4
    5
    1 2 3 4 5`);
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