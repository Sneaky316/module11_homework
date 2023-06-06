function intUser(a,b) {
    let i = setInterval(function(){
      console.log(a++);
      if (a > b) clearInterval(i);
    }, 1000)
  }
  
  intUser(5, 15);