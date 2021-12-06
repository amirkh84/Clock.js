const DigitsText = document.querySelector('h2');
const DayNight = document.querySelector('i');
const Dtext = document.getElementById('DayText');
const DateText = document.getElementById('DateText');
const Sline = document.getElementById('Sline');
const Mline = document.getElementById('Mline');
const Hline = document.getElementById('Hline');
const date = new Date;
const Hdate =  date.getHours();
// if it day or night
if(Hdate >=6 && Hdate<= 18){

    DayNight.classList.remove("fa-moon");
    DayNight.classList.add("fa-sun");
}
else{
    DayNight.classList.remove("fa-sun");
    DayNight.classList.add("fa-moon");
}
// the digits clock
function GenerateClock(){
    const date = new Date;
    const text = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    if(date.getHours>= 0&&date.getHours<12){
        DigitsText.innerHTML = `${text} AM`;
    }
    else{
        DigitsText.innerHTML = `${text} PM`;
    }
    
}
GenerateClock();
setInterval(()=>{
    GenerateClock();
},1000)

// the analog clock
function clock(){
    const date = new Date;
    let Sec = date.getSeconds()/60 *360 + 90;
    let Hor = date.getHours()/12 * 360 + 90;
    let Min = date.getMinutes()/60 * 360 + 90;
    
    Hline.style.transform = "rotate("+Hor+"deg)";
    Mline.style.transform = "rotate("+Min+"deg)";
    Sline.style.transform = "rotate("+Sec+"deg)";
}
clock();
setInterval(clock,1000)
// showing day 
const Day = date.getDay();
if(Day == 1){
    Dtext.innerHTML= 'its Moday';
}
else if(Day == 2){
    Dtext.innerHTML= 'its Tuesday';
}
else if(Day == 3){
    Dtext.innerHTML= 'its Wednesday';
}
else if(Day == 4){
    Dtext.innerHTML= 'its Thursday';
}
else if(Day == 4){
    Dtext.innerHTML= 'its Friday';
}
else if(Day == 4){
    Dtext.innerHTML= 'its Saturday';
}

// showing date 
const toYear = date.getFullYear();
const toMonth = date.getMonth();
const toDay = date.getDay();
DateText.innerHTML = `${toYear}/${toMonth}/${toDay}`