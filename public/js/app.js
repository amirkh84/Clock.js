const DigitsText = document.querySelector("h2");
const DarkBot = document.querySelector("img");
const Sline = document.getElementById('Sline');
const Mline = document.getElementById('Mline');
const Hline = document.getElementById('Hline');

DarkBot.addEventListener(("click"),function(){
    this.classList.toggle("check-botton");
});

function GenerateClock(){
    const date = new Date;
    const text = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    DigitsText.innerHTML = `${text} PM`;
}
GenerateClock();

setInterval(()=>{
    GenerateClock();
},1000)


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

