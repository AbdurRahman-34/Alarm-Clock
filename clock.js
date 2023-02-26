const currentTime = document.querySelector("h1");
content = document.querySelector(".content")
const selectMenu = document.querySelectorAll("select");
const setAlarmBtn = document.querySelector("button");
let alarmTime, isAlarmSet = false,
ringTone = new Audio("./image/ringtone.mp3")

for(let i = 12; i > 0; i--){
    i = i < 10 ? "0" + i : i;
    let option = `<option value = "${i}">${i}</option>`
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option)
}

for(let i = 59; i >= 0; i--){
    i = i < 10 ? "0" + i : i;
    let option = `<option value = "${i}">${i}</option>`
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option)
}

for(let i = 2; i > 0; i--){
    let ampm = i === 1 ? 'AM' : 'PM'
    let option = `<option value = "${ampm}">${ampm}</option>`
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option)
}

setInterval(()=> {
 // Getting hour, min, secs
 let date = new Date(),
 h = date.getHours(),
 m = date.getMinutes(),
 s = date.getSeconds(),
 ampm = 'AM';

 if(h >= 12){
    h = h - 12;
    apmp = 'PM'
 }
 
 h = h === 0 ? h =12 : h;
 h = h < 10 ? "0" + h : h;
 m = m < 10 ? "0" + m : m;
 s = s < 10 ? "0" + s : s;
currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

if(alarmTime ==  `${h}:${m} ${ampm}`){
    ringTone.play();
    ringTone.loop = true;
}
}, 1000)

// Set Alarm Function
const setAlarm = () => {
    if(isAlarmSet){
        alarmTime = "";
        ringTone.pause();
        content.classList.add("remove");
        setAlarmBtn.innerText = "Set Alarm";
        return isAlarmSet = false;
    }
    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`
    console.log(time);

if(time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")){
    return alert("Please, Select a Valid Time To Set Alarm!");
}
isAlarmSet = true
alarmTime = time;
content.classList.add("disable");
setAlarmBtn.innerText = "Clear Alarm"
}
setAlarmBtn.addEventListener("click", setAlarm);

