console.log("working");

var wake = document.getElementById('slotOne');
var lunch = document.getElementById('slotTwo');
var nap = document.getElementById('slotThree');
var night = document.getElementById('slotFour');    

var groupOne = wake.options[wake.selectedIndex].value;
var groupTwo = lunch.options[lunch.selectedIndex].value;
var groupThree = wake.options[nap.selectedIndex].value;
var groupFour = wake.options[night.selectedIndex].value;


function showTime(){
    var showDisplayTime = new Date();
    var hours = showDisplayTime.getHours();
    var mins = showDisplayTime.getMinutes();
    var secs = showDisplayTime.getSeconds();
    var session = document.getElementById("session");
    var hr = showDisplayTime.getHours();

    if(hours > 12){
        hours = hours - 12;
    }
    if(hours < 10){
        "0" + showDisplayTime.getHours();
    }
    if(mins < 10){
        "0" + showDisplayTime.getMinutes();
    }
    if(secs < 10){
        "0" + showDisplayTime.getSeconds();
    }
    if(hours >= 12){
        session.innerHTML = "PM";
    }
    else{
        session.innerHTML = "AM";
    }

    document.getElementById("hours").innerHTML = hours + `<br>hours`;
    document.getElementById("mins").innerHTML = mins + `<br>mins`;
    document.getElementById("secs").innerHTML = secs + `<br>secs`;

    
    if(groupOne == hr ){
        document.getElementById("changeImage").src = "goodmorning_image.jpg";
        document.getElementById("greetText").innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
        document.getElementById("timeText").innerText = "GOOD MORNING!! WAKE UP !!";
    }
    if(groupTwo == hr){
        document.getElementById("changeImage").src = "lunch_image.jpg";
        document.getElementById("greetText").innerText = "LET'S HAVE SOME LUNCH !!";
        document.getElementById("timeText").innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP";
    }
    if(groupThree == hr){
        document.getElementById("changeImage").src = "goodevening_image";
        document.getElementById("greetText").innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        document.getElementById("timeText").innerText = "GOOD EVENING !!";     
    }
    if(groupFour == hr){
        document.getElementById("changeImage").src = "goodnight_image.jpg";
        document.getElementById("greetText").innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementById("timeText").innerText = "GOOD NIGHT !!";
    }
    else{
        document.getElementById("changeImage").src = "noddy_image.png";
        document.getElementById("greetText").innerText = "My First Digital Clock";
        document.getElementById("timeText").innerText = "Have a nice day :)";
    }
};
setInterval(showTime,1000);

function givePower(){
   
    groupOne = wake.options[wake.selectedIndex].value;
    groupTwo = lunch.options[lunch.selectedIndex].value;
    groupThree = nap.options[nap.selectedIndex].value;
    groupFour = night.options[night.selectedIndex].value;

    document.getElementById("wakeTime").innerText = wake.options[wake.selectedIndex].text;
    document.getElementById("lunchTime").innerText = lunch.options[lunch.selectedIndex].text;
    document.getElementById("napTime").innerText = nap.options[nap.selectedIndex].text;
    document.getElementById("nightTime").innerText = night.options[night.selectedIndex].text;

};