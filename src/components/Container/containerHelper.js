import {
    AGE_CALORIFIC_OPTIONS,
    AGE_OPTIONS,
    AGE_OPTIONS_KEYS,
    BODY_SCORES,
    BREED_CATEGORIES_LIST,
    BREED_CATEGORIES_MAPPED,
    BREED_OPTIONS,
    BREED_OPTIONS_KEYS,
    getLowerKey,
    getUpperKey,
    NEUTERED_OPTIONS,
    POSSIBLE_ACTIVITIES,
    POSSIBLE_ACTIVITIES_CALORIE_RANGE_MULTIPLIER_MAX,
    POSSIBLE_ACTIVITIES_CALORIE_RANGE_MULTIPLIER_MIN
} from "../../StaticData";
import {isDev} from "../../helper/utilities";




export function getDogBreedType(categoryUnknown=true, categoryIndex=-1) {
    if(categoryUnknown){
        return "Unknown";

    }
    else{
        const dBCI = categoryIndex;
        if(isDev()){
            // console.log("here dev log");
            console.assert(dBCI !== -1);

        }
        return BREED_CATEGORIES_LIST[dBCI];



    }

}
export function getDogBreedCategory(categoryUnknown=true, categoryIndex=-1){

    if(categoryUnknown){
        //returning default breed
        return BREED_OPTIONS_KEYS[BREED_OPTIONS_KEYS.length-1];
    }
    else{
        const dBCI = categoryIndex;
        if(isDev()){
            // console.log("here dev log");
            console.assert(dBCI !== -1);
        }
        return BREED_CATEGORIES_MAPPED[BREED_CATEGORIES_LIST[dBCI]];
    }

}

export function getDogAgeBracket(years = 0,months = 0){

    const totalMonths = years*12+months;

    let ansIndex = 0;
    for(let i = 0;i<AGE_OPTIONS_KEYS.length;i++){
        const lower = getLowerKey(AGE_OPTIONS_KEYS[i]);
        const upper = getUpperKey(AGE_OPTIONS_KEYS[i]);
        //todo check lower upper connection
        if(totalMonths >= lower && totalMonths < upper){
            ansIndex = i;
            break;
        }

    }


    return AGE_OPTIONS_KEYS[ansIndex];


}


export function getMer(quesOutputPool){

    const years = quesOutputPool.dogAgeYears;
    const months = quesOutputPool.dogAgeMonths;


    return (getRer(quesOutputPool.dogWeight)*
            POSSIBLE_ACTIVITIES[quesOutputPool.dogActivity]*
            NEUTERED_OPTIONS[quesOutputPool.dogNeutered]*
            AGE_OPTIONS[getDogAgeBracket(years,months)]*
            // AGE_OPTIONS[this.state.quesOutputPool.dogAge]*
            BODY_SCORES[quesOutputPool.dogBodyScore]*
            BREED_OPTIONS[getDogBreedCategory(
                quesOutputPool.dogBreedCategoryUnknown,
                quesOutputPool.dogBreedCategoriesIndex)]);


}
export function getRer(dogWeight = 0.0){
    return 70*dogWeight**0.75;

}

export function getCalorificCover(quesOutputPool) {

    const years  = quesOutputPool.dogAgeYears;
    const months = quesOutputPool.dogAgeMonths;


    return getMer(quesOutputPool)*
        AGE_CALORIFIC_OPTIONS[getDogAgeBracket(years,months)];




}

export function getCaloriesMax(quesOutputPool) {
    let t = getCalorificCover(quesOutputPool);
    return t*POSSIBLE_ACTIVITIES_CALORIE_RANGE_MULTIPLIER_MAX[quesOutputPool.dogActivity];

}

export function getCalorieMin(quesOutputPool){

    let t = getCalorificCover(quesOutputPool);
    return t*POSSIBLE_ACTIVITIES_CALORIE_RANGE_MULTIPLIER_MIN[quesOutputPool.dogActivity];

}


export function validateName(name){

}
export function validateEmail(email){

}


