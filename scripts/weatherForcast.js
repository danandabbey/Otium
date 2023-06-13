import * as weather from "./modules/weather.js";
import * as util from "./modules/util.js";


navigator.geolocation.getCurrentPosition(weather.success, weather.error, weather.options);