// CLOCK

function clock(){
    var time = new Date()
    var hr = time.getHours()
    var min = time.getMinutes()
    var sec = time.getSeconds()
    if (hr < 10){
    hr = " " + hr
    }
    if (min < 10){
    min = "0" + min
    }
    if (sec < 10){
    sec = "0" + sec
    }
    document.clockForm.clockButton.value = hr + ":" + min + ":" + sec
    setTimeout("clock()", 1000)
    }
    function showDate(){
    var date = new Date()
    var year = date.getYear()
    if(year < 1000){
    year += 1900
    }
    var monthArray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")
    alert(monthArray[date.getMonth()] + " " + date.getDate() + ", " + year)
    }
    window.onload=clock;