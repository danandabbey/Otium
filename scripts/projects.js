`use strict`

import * as util from "./modules/util.js"

function listen(){
    const buttons = util.all((`button[class="project"]`))
    buttons.forEach((link)=>{
        link.addEventListener('click', ((e)=>{
            e.preventDefault();
            const url = e.currentTarget
            window.location.href = `${url.id}.html`;
        }));

    })
};

listen();