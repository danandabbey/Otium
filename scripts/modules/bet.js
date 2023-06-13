`use strict`

import * as math from "./math.js";
import * as util from "./util.js"

let app = {
    bankroll: undefined,
    odds: undefined,      // 2-1 odds would be 2/1 or 2
    horseNum: undefined,    
    numWin: {
        win: 1,
        place: 2,
        show: 3
    }
};

class bet {
    constructor(wager) {
        this.amount = app.bankroll * this.percentOfBank;
        this.probSuccess = app.numWin[wager]/app.horseNum;
    };
    get percentOfBank() {
        return math.kellyCriterion(this.probSuccess,app.odds);
    };
};

function solve(){
    const win = new bet(`win`);
    const place = new bet(`place`);
    const show = new bet(`show`);

    return [win, place, show];
};

function listen(){
    const submit = util.get(`submit`);
    submit.addEventListener(`click`, ((e) => {
        e.preventDefault();
        app.bankroll = parseFloat(util.get(`bankroll`).value);
        app.horseNum = parseInt(util.get(`horseNum`).value);
        const odds = util.get(`odds`).value;
        const oddsSplit = odds.split(`-`);
        app.odds = (parseInt(oddsSplit[0]) / parseInt(oddsSplit[1]));
        solve();
    }));
};

export { listen };