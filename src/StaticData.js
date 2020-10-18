
//todo load this data from a csv file
//todo this values should be on the backend not on front end!!!!!
export const POSSIBLE_ACTIVITIES = {
        "Low" : 1.1,
        "Medium" : 1.25,
        "High" : 1.4
};
export const POSSIBLE_ACTIVITIES_KEYS = Object.keys(POSSIBLE_ACTIVITIES);


export const NEUTERED_OPTIONS = {
    "No": 1,
    "Yes": 0.89
}
export const NEUTERED_OPTIONS_KEYS = Object.keys(NEUTERED_OPTIONS);

export const AGE_OPTIONS = {
    "2-4" : 2,
    "4-12" : 1.5,
    "12-72" : 1.2,
    "72+" : 0.9


}

export const AGE_OPTIONS_KEYS = Object.keys(AGE_OPTIONS);

export const BODY_SCORES = {
    "1" : 1.2,
    "3" : 1,
    "5" : 0.8
}


export const BODY_SCORES_KEYS = Object.keys(BODY_SCORES)


export const BREED_OPTIONS = {
    "Toy" : 1.5,
    "Mini" : 1.2,
    "Medium" : 1.1,
    "Large":1,
    "Giant":0.9
}
export const BREED_OPTIONS_KEYS = Object.keys(BREED_OPTIONS);

export const CALORIFIC_COVERS = {

    "2-4":0.95,
    "4-12":0.95,
    "12-72":0.9,
    "72+":0.9

}