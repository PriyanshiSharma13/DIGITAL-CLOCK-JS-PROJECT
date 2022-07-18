console.log("working");

function showTime(){
    var showDisplayTime = new Date();
    var hours = showDisplayTime.getHours();
    var mins = showDisplayTime.getMinutes();
    var secs = showDisplayTime.getSeconds();
    var session = document.getElementById("session");
    var hr = showDisplayTime.getHours();

    if(hours >= 12){
        session.innerHTML = 'PM';
    }
    else{
        session.innerHTML = 'AM';
    }
    if(hours > 12){
        hours = hours - 12;
    }
    if((hours+"").length === 1){
        hours = "0"+hours;
    }
    if((mins+"").length === 1){
        mins = "0"+mins;
    }
    if((secs+"").length === 1){
        secs = "0"+secs;
    }

    if((hr < 13 && hr > 7 )){
        document.getElementById("changeImage").src = "goodmorning_image.jpg";
        document.getElementById("greetText").innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
        document.getElementById("timeText").innerText = "GOOD MORNING!! WAKE UP !!";
    }
    if((hr < 17 && hr > 12 )){
        document.getElementById("changeImage").src = "lunch_image.jpg";
        document.getElementById("greetText").innerText = "LET'S HAVE SOME LUNCH !!";
        document.getElementById("timeText").innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP";
    }
    if((hr < 21 && hr > 15 )){
        document.getElementById("changeImage").src = "goodevening_image";
        document.getElementById("greetText").innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        document.getElementById("timeText").innerText = "GOOD EVENING !!";
    }
    if((hr < 25 && hr > 19 )){
        document.getElementById("greetText").innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementById("timeText").innerText = "GOOD NIGHT !!";
        document.getElementById("changeImage").src = "goodnight_image.jpg";
    }

document.getElementById("hours").innerHTML = hours + `<br>hours`;
document.getElementById("mins").innerHTML = mins + `<br>mins`;
document.getElementById("secs").innerHTML = secs + `<br>secs`;


};
setInterval(showTime,1000);

let wake = document.getElementById('slotOne');
let lunch = document.getElementById('slotTwo');
let nap = document.getElementById('slotThree');
let night = document.getElementById('slotFour');

function givePower(){
    document.getElementById("wakeTime").innerText = wake.options[wake.selectedIndex].text;
    document.getElementById("lunchTime").innerText = lunch.options[lunch.selectedIndex].text;
    document.getElementById("napTime").innerText = nap.options[nap.selectedIndex].text;
    document.getElementById("nightTime").innerText = night.options[night.selectedIndex].text;

    document.getElementById("greetText").innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
    document.getElementById("timeText").innerText = "GOOD MORNING!! WAKE UP !!";
    document.getElementById("greetText").innerText = "LET'S HAVE SOME LUNCH !!";
    document.getElementById("timeText").innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP";
    document.getElementById("greetText").innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    document.getElementById("timeText").innerText = "GOOD EVENING !!";
    document.getElementById("timeText").innerText = "GOOD NIGHT !!";
    document.getElementById("changeImage").src = "goodnight_image.jpg";
}


