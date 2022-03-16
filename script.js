function printPat(n){
    let x=n;
    let res="";
    
    for(let i=n; i>0;i--){
        for(let j=n; j>0;j--){
            for(let k=x; k>0;k--){
                res+=j+" ";
            }
        }
        x--;
        res+="$";
    }
    console.log(res);
  }

  printPat(3);