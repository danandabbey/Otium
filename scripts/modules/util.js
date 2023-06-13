
const get = (e) =>  document.getElementById(e);

const all = (e) => document.querySelectorAll(e);

function menuControl(){
    let menu = get('menu');
    menu.addEventListener('click', ((e)=>{

    let hidden = get('menuHidden');
    if (hidden.style.display === 'flex'){
        hidden.style.display='none'
    }else{hidden.style.display='flex'

}}))};


function listen(){
    const buttons = all((`button[class="navButton"]`))
    buttons.forEach((link)=>{
        link.addEventListener('click', ((e)=>{
            e.preventDefault();
            const url = e.currentTarget
            window.location.href = `${url.id}.html`;
        }));
    })
};

export { get, all, listen, menuControl }