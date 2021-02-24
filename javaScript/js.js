
function clock () {
    
    // This block of code gets the hours, minute and second in real time
    const fullDate = new Date();
    var hours = fullDate.getHours();
    var mins = fullDate.getMinutes();
    var secs = fullDate.getSeconds();

    if(hour < 10){
        hours = "0" + hour;
    }

    if(mins < 10){
        mins = "0" + mins;
    }

    if(secs < 10){
        secs = "0" + secs;
    }

    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = ":"+ mins;
    document.getElementById('second').innerHTML =":" + secs;   
}   


window.onload = function () {
    setInterval(clock, 500);
}
