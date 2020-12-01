import {
    CITIES_DICT_ARR, CITIES_LIST,

} from "../../StaticData";

export function getCity(cityIndex){
    if(cityIndex!==-1){
        return CITIES_LIST[cityIndex];

    }
    return "Unknown";
}

export function isCityDelivering(cityIndex){
    if(cityIndex!==-1){
        const city = CITIES_LIST[cityIndex];
        return CITIES_DICT_ARR.find(a=>a.name === city).delivering;
    }
    return false;
}
