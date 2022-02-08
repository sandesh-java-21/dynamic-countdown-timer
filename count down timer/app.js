const days_el = document.getElementById("days");
const hours_el = document.getElementById("hours");
const minutes_el = document.getElementById("mints");
const seconds_el = document.getElementById("seconds");

const sandeshBirthday = "21 Mar 2022";

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function countDown(){
    const birthday = new Date(sandeshBirthday);
    const currentDate = new Date();
    const totalSeconds =  (birthday - currentDate) / 1000;
    
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600)  % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    console.log(totalSeconds);
    console.log(days, hours, minutes, seconds);

    days_el.innerHTML = days;
    hours_el.innerHTML = formatTime(hours)+":";
    minutes_el.innerHTML = formatTime(minutes)+":";
    seconds_el.innerHTML = formatTime(seconds);;

}



countDown();

setInterval(countDown, 1000);






