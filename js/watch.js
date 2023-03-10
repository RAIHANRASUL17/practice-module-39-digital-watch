setInterval(showTime, 1000)
function showTime(){
    let time= new Date();
    let hour=time.getHours();
    let min= time.getMinutes();
    let sec= time.getSeconds();
    
    if(hour > 12){
        hour -= 12;
       
    }

   if(hour == 0){
    hour=12;
   
   }

    console.log(hour + ' : ' + min + ' : ' + sec)
   let currentTime= hour + ' : ' + min + ' : ' + sec
    
    // display for time
    document.getElementById('clock').innerHTML=currentTime;
    // display for date
    document.getElementById('date').innerText=time;
}

// call function
showTime()