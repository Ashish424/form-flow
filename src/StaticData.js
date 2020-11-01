
//todo load this data from a csv file
//todo this values should be on the backend not on front end!!!!!
export const POSSIBLE_ACTIVITIES = {
        "Low" : 1.1,
        "Medium" : 1.25,
        "High" : 1.4
};

export const POSSIBLE_ACTIVITIES_CALORIE_RANGE_MULTIPLIER_MIN = {
    "Low" : 0.95,
    "Medium" : 0.9,
    "High" : 0.85
};


export const POSSIBLE_ACTIVITIES_CALORIE_RANGE_MULTIPLIER_MAX = {
    "Low" : 1.15,
    "Medium" : 1.1,
    "High" : 1.05
};

//todo get these values from Roopesh
export const POSSIBLE_GENDERS = {
    "Girl" : 1.0,
    "Boy" : 1.0
};


export const POSSIBLE_GENDERS_KEYS = Object.keys(POSSIBLE_GENDERS);


export const POSSIBLE_ACTIVITIES_KEYS = Object.keys(POSSIBLE_ACTIVITIES);


export const NEUTERED_OPTIONS = {
    "No": 1,
    "Yes": 0.89
};
export const NEUTERED_OPTIONS_KEYS = Object.keys(NEUTERED_OPTIONS);

export const AGE_OPTIONS = {
    "2-4" : 2,
    "4-12" : 1.5,
    "12-72" : 1.2,
    "72+" : 0.9


};
//todo duplicated data but will go away any way to backend
export const AGE_CALORIFIC_OPTIONS = {

    "2-4":0.95,
    "4-12":0.90,
    "12-72":0.85,
    "72+":0.85

};

export const AGE_OPTIONS_KEYS = Object.keys(AGE_OPTIONS);

export const BODY_SCORES = {
    "1" : 1.2,
    "3" : 1,
    "5" : 0.8
};


export const BODY_SCORES_KEYS = Object.keys(BODY_SCORES);


export const BREED_OPTIONS = {
    "Toy" : 1.5,
    "Mini" : 1.2,
    "Medium" : 1.1,
    "Large":1,
    "Giant":0.9
};
export const BREED_OPTIONS_KEYS = Object.keys(BREED_OPTIONS);

export const CALORIFIC_COVERS = {

    "2-4":0.95,
    "4-12":0.95,
    "12-72":0.9,
    "72+":0.9

};


export const BREED_CATEGORIES_MAPPED = {
    "breed1" : BREED_OPTIONS_KEYS[0],
    "breed2" : BREED_OPTIONS_KEYS[1],
    "breed3" : BREED_OPTIONS_KEYS[2],
    "breed4" : BREED_OPTIONS_KEYS[1],
    "creed1" : BREED_OPTIONS_KEYS[2]

};

export const BREED_CATEGORIES_LIST = Object.keys(BREED_CATEGORIES_MAPPED);
