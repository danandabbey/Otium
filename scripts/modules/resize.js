import * as util from "./util.js"
const weather = {

    current: util.get('current'),
    
    hourly: util.get('hourly'),
    
    daily: util.get('daily'),
        
    desktop() {
        const con = {
            height: `25%`,
            width: `100%`
        };

        const hourDay = {
            height: `100%`,
            width: `20%`
        };

        this.current.style.width = con.width;
        this.hourly.style.width = con.width;
        this.daily.style.width = con.width;
        this.daily.style.height = con.height;
        this.hourly.style.height = con.height;
        this.current.style.height = `50%`;

        let n = 1

        while (n <= 5) {
            let x = util.get(`hourly${n}`)
            let y = util.get(`daily${n}`)
            x.style.height = hourDay.height;
            x.style.width = hourDay.width;
            y.style.height = hourDay.height;
            y.style.width = hourDay.width;
            n++
        };
        
    },


    mobile() {
        const con = {
            height: `25%`,
            width: `100%`
        };

        const hourDay = {
            height: `20%`,
            width: `100%`
        };
    }
}


export { weather };