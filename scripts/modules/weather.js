import * as math from "./math.js";
import * as util from "./util.js"

const options = {
    enableHighAccuracy: true
};

const success = ((position) => {
    const crd = position.coords;
    const lat = crd.latitude;
    const lon = crd.longitude;
    //call(lat, lon);
    console.log(lat,lon)
});

const error = ((error) => {
    console.log(`Error: ${error.code} Message: ${error.message}`);
});

function call(lat, lon) {
    const apiFinder = `https://api.weather.gov/points/${lat},${lon}`;

    let api = apiFinder[`properties`][`forecast`];
    let res;

};


export { success, options, error };