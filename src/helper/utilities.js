export function getDogTotalAgeInMonths(year,month){
    return year*12+month;
}


export function capitalizeFirstLetterAndLowerCaseRest(str){
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();


}

export function isDev(){
    return process.env.NODE_ENV === 'development'
}


export function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.

    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}