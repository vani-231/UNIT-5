function runProgram(input) {
    input = input.trim().split("\n")
    var test = +input[0]
    var line = 1;
    for(var i = 0; i < test; i++) {
        var str1 = input[line++].trim().split("")
        var str2 = input[line++].trim().split("")
        console.log(find(str1, str2));
        
         
    } 
    
   
  }

  function find(str1,str2) {
    
     
      if(str1.length!=str2.length){
          return Math.abs(str1.length-str2.length)
      }else{
          for(var i = 0; i < str1.length; i++){
              for(var j = 0; j < str2.length; j++){
                  if(str1[i]!==str2[j]){
                      return 1;
                  }
              }
          }
      }
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`3
    abcde
    abde
    abde
    abcde
    abcde
    abxde
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