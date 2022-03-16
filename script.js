// function printPat(n){
//     let x=n;
//     let res="";
    
//     for(let i=n; i>0;i--){
//         for(let j=n; j>0;j--){
//             for(let k=x; k>0;k--){
//                 res+=j+" ";
//             }
//         }
//         x--;
//         res+="$";
//     }
//     console.log(res);
//   }

//   printPat(3);

  function getTable(N) {
    let n=N;
    let res=[];
    for(let i=1; i<=10;i++){
        res[i-1]=(i*n);
    }
    console.log(res);
    return res;
  }

  getTable(2);