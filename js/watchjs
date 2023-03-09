setInterval(showTime, 1000)
function showTime(){
    let time= new Date();
    let hour=time.getHours();
    let min= time.getMinutes();
    let sec= time.getSeconds();
    
    if(hour > 12){
        hour -= 12;
        am_pm= 'PM'
    }

   if(hour == 0){
    hour=12;
    am_pm= 'AM'
   }

    console.log(hour + ' : ' + min + ' : ' + sec + ' : ' + am_pm )
   let currentTime= hour + ' : ' + min + ' : ' + sec + ' : ' + am_pm 
    
    // display for time
    document.getElementById('clock').innerHTML=currentTime;
    // display for date
    document.getElementById('date').innerText=time;
}

// call function
showTime()