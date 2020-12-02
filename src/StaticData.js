
//todo load this data from a csv file
//todo this values should be on the backend not on front end!!!!!
export const POSSIBLE_ACTIVITIES = {
        "Low" : 0,
        "Medium" : 0,
        "High" : 0
};


export const POSSIBLE_ACTIVITIES_KEYS = Object.keys(POSSIBLE_ACTIVITIES);
//todo use dynamic keys here
export const POSSIBLE_ACTIVITIES_CALORIE_RANGE_MULTIPLIER_MIN = {
    "Low" : 0,
    "Medium" : 0,
    "High" : 0
};

//todo use dynamic keys here
export const POSSIBLE_ACTIVITIES_CALORIE_RANGE_MULTIPLIER_MAX = {
    "Low" : 0,
    "Medium" : 0,
    "High" : 1.05
};

//todo get these values from Roopesh
export const POSSIBLE_GENDERS = {
    "Girl" : 1.0,
    "Boy" : 1.0
};


export function getHisOrHer(genderKey){
    return genderKey === "Girl" ? "her" : "his";

}

export const POSSIBLE_GENDERS_KEYS = Object.keys(POSSIBLE_GENDERS);


export const NEUTERED_OPTIONS = {
    "No": 0,
    "Yes": 0
};
export const NEUTERED_OPTIONS_KEYS = Object.keys(NEUTERED_OPTIONS);

export const BODY_SCORES = {
    "1" : 1.2,
    "3" : 1,
    "5" : 0.8
};


export const BODY_SCORES_KEYS = Object.keys(BODY_SCORES);






export const CITIES_DICT_ARR = [
                                {
                                    name : "Hyderabad",
                                    delivering: true
                                },
                                {
                                    name : "New Delhi",
                                    delivering: false
                                },
                                {
                                    name : "Bangalore",
                                    delivering: false
                                },
                                {
                                    name : "Gurgaon",
                                    delivering: false
                                },
                                {
                                    name : "Mumbai",
                                    delivering: false
                                },
                                {
                                    name : "Pune",
                                    delivering: false
                                },
                                {
                                    name : "Chennai",
                                    delivering: false
                                },
                                {
                                    name : "Other Cities",
                                    delivering: false
                                }


                        ]
export const CITIES_LIST = CITIES_DICT_ARR.map(a=>a.name);
