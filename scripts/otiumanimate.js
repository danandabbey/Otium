import * as util from "./modules/util.js";
import * as write from "./modules/write.js"


const writeText = write.drawText();
const canvas = util.get('canvas');
const ctx = canvas.getContext('2d');
const scale = window.devicePixelRatio;
const size = 700;


const message = ['It is better to lie on the naked ground and be at ease,', 'than to have a golden coach and a rich table and be worried.','-Epicurean proverb'];


function setup(){
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    
    canvas.width = Math.floor(size*scale);
    canvas.height = Math.floor(size*scale);

    ctx.fillStyle = '#fff';
    ctx.font = `24px lato`;
    ctx.scale = (scale,scale);

    writeText(message);
};

setup();
