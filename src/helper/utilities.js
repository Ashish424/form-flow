export function getDogTotalAgeInMonths(year,month){
    return year*12+month;
}


export function capitalizeFirstLetterAndLowerCaseRest(str){
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();


}

export function isDev(){
    return process.env.NODE_ENV === 'development'
}