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

  // function getTable(N) {
  //   let n=N;
  //   let res=[];
  //   for(let i=1; i<=10;i++){
  //       res[i-1]=(i*n);
  //   }
  //   console.log(res);
  //   return res;
  // }

  // getTable(2);


  //   function print(arr,n){
  //     //code here
  //     let res=[];
  //     for(let i=0;i<n;i+=2){
  //         res+=arr[i]+" ";
  //     }
  //     console.log(res);
  //   }
  
  // print([1,2,3,4,5,6,7,8],8);
  function isPalindrome(S){
    //code here
    let last= S.length-1;
    for (let i=0; i<(S.length)/2; i++){
        if (S[i]!==S[last]){
            return 0;
        }
        last--;
    }
    return 1;
}

console.log(isPalindrome("abba"));