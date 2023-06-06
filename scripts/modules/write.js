import * as util from "./util.js";

const ctx = util.get(`canvas`).getContext('2d');

function drawText(){

    let x = 25;
    let y = 250;
    let i = 0;

    return ((message)=>{
        const intervalID = setInterval(()=>{
            ctx.fillText(message[i],x,y);
            x += 25;
            y += 30;
            i++;
            if (i === 3){
                clearInterval(intervalID);
            };
        },2000);         
    });
};

export{ drawText };