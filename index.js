let counter; 
function startGame(){
    try{    
        const nickname = document.getElementById('nickname').value;
        if(nickname){
            getClickCount();
        } else{
            throw new Error('Empty nickname');
        }
        
    } catch(err){
        alert(err.message);
    }
}
function getClickCount(){
    counter = 0;
    let time = 5000;
    setTimeout(timeOut,time);
}
function clickCount(){
    counter++;
}
function timeOut(){
    alert(`You clicked ${counter} times`); 
    let resultObject = {
        'nickname' : `${document.getElementById('nickname').value}`,
        'score' : counter
    }
    try{
      let oldResultSession = JSON.parse(sessionStorage.result);
        if(oldResultSession.score<counter){
            sessionStorage.result = JSON.stringify(resultObject);
        }
    } catch(e){
        sessionStorage.result = JSON.stringify(resultObject); 
    }
    try{
        let oldResultLocal = JSON.parse(localStorage.result);
          if(oldResultLocal.score<counter){
              localStorage.result = JSON.stringify(resultObject);
          }
      } catch(e){
          localStorage.result = JSON.stringify(resultObject); 
      }
    
}  
function getBestResult(){
    try{
    let bestSessionResult = JSON.parse(sessionStorage.result);
        alert(`Best result is: ${bestSessionResult.score}`)
    } catch(e){
        alert(`Best result is: 0`)
    }
}
function getBestResultAllTime(){
    try{
    let bestLocalResult = JSON.parse(localStorage.result);
        alert(`Best result for the whole time is: ${bestLocalResult.score}`+
        ` by ${bestLocalResult.nickname}`
        );
    } catch(e){
        alert(`Best result is: 0 by ${null}`);
    }
}
function clearBestRes(){
    sessionStorage.clear();
    alert('Best result is cleared');
}
function clearBestResAll(){
    localStorage.clear();
    alert('Best result for the whole time is cleared');
}

