function runProgram(input) {
    input = input.trim().split("\n")
    var test = +input[0]
    var line = 1;
    for(var i = 0; i < test; i++) {
        var k = input[line++].trim()
        var str2 = input[line++].trim()
        
        console.log(prints(k, str2));
        //prints(str2,"")
        //console.log(str2.substring(2,4));
        
         
    } 

    
   
  }
  function prints(str2, output)
{
    if (str2.length==0) {
        output
        return;
    }
    prints(str2.substring(2), output + str2[0]);
    prints(str2.substring(2), output);
}
  if (process.env.USERNAME === "DELL") {
    runProgram(`2
    abc
    adbce
    ax
    xaa`);
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


  var str = "vgghdkjsf"
  console.log(str.substring(1));