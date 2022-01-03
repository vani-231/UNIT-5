// function areBracketsBalanced(expr)
// {
     
   
//     let stack = [];
 
    
//     for(let i = 0; i < expr.length; i++)
//     {
//         let x = expr[i];
 
//         if (x == '(' || x == '[' || x == '{')
//         {
             
            
//             stack.push(x);
//             continue;
//         }
 
       
//         if (stack.length == 0)
//             return false;
             
//         let check;
//         switch (x){
//         case ')':
//             check = stack.pop();
//             if (check == '{' || check == '[')
//                 return false;
//             break;
 
//         case '}':
//             check = stack.pop();
//             if (check == '(' || check == '[')
//                 return false;
//             break;
 
//         case ']':
//             check = stack.pop();
//             if (check == '(' || check == '{')
//                 return false;
//             break;
//         }
//     }
 
   
//     return (stack.length == 0);
// }
 

// let expr = "([{}])";
 

// if (areBracketsBalanced(expr))
//     document.write("Balanced ");
// else
//     document.write("Not Balanced ");


function runProgram(input) {
    var str = input
    if(checkparams(str)){
        console.log("yes");
    } else{
       console.log("no");
    }
 }
  function checkparams(str){
    var stack = []
    for(var i=0;i<str.length;i++){
        var x = str[i]
        if(x == '(' || x == '['||x=='{'){
            stack.push(x)
            continue;
        }
        if(stack.length == 0){
            return false;
        }
        var check;
        switch (x) {
            case '}':
                 check = stack.pop()
                 if(x == '(' || x == '[')
                   return false;
                break;
            case ']':
                    check = stack.pop()
                    if(x == '(' || x == '{')
                      return false;
                   break;
            case ')':
                 check = stack.pop()
                 if(x == '{' || x == '[')
                   return false;
                break;
                
        }
        
    }
    return (stack.length == 0)
    

  }
  if (process.env.USERNAME === "DELL") {
    runProgram('{[(]}');
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
 

 