import * as weather from "./modules/weather.js";
import * as util from "./modules/util.js";
import * as size from "./modules/resize.js";

navigator.geolocation.getCurrentPosition(weather.success, weather.error, weather.options);

function resize() {

    if (window.innerHeight > 950) {
        size.weather.desktop();
    }else{
        size.mobile();
    };

}
resize()
