//(then 메서드를 이용한 promise 코드)
new Promise(function(resolve, reject) {   
    setTimeout(() => resolve(1), 1000); 
  
  }).then(function(result) { 
                            
  
    alert(result); 
    return result * 2;
  
  }).then(function(result) { 
    alert(result); 
    return result **  2;
  
  }).then(function(result) { 
  
    alert(result);
  })