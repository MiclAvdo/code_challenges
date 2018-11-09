function check(a,x){
    for (let i = 0; i < a.length; i++){
      if (a[i] !== x){
        continue;
      } else {
        return true;
      }
    }
    return false;
};