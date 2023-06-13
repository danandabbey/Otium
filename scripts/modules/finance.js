`use strict`;

const app = {
    api: `AMGDOU9GMIDERKI3`,
    symbol: undefined
};

function companyOverview() {

    let res;

    const overview = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${app.symbol}&apikey=${app.api}`;

};

class stock{
    constructor(res) {
        this.symbol = res['Symbol'];
        this.name = res[`Name`];
        this.sector = res[`Sector`]
        this.eps = res[`EPS`];
        this.peRatio = res[`PERatio`]
        this.forwardPe = res[`ForwardPE`]
        this.dividend = res[`DividendPerShare`];
        this.dividendYield = res[`DividendYield`]
        this.revenuePerShare = res[`RevenuePerShareTTM`]
        this.profitMargin = res[`ProfitMargin`]
        this.priceToBook = res[`PriceToBookRatio`]
        this.beta = res[`Beta`]
        this.fiftyTwoHigh = res[`52WeekHigh`]
        this.fiftyTwoLow = res[`52WeekLow`]
    };
};