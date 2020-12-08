

export const POSSIBLE_ACTIVITIES = [
        "Low" ,
        "Medium",
        "High",
];

export const POSSIBLE_ACTIVITIES_KEYS = POSSIBLE_ACTIVITIES;


export const POSSIBLE_GENDERS = [
    "Girl" ,
    "Boy" ,
];
export const POSSIBLE_GENDERS_KEYS = POSSIBLE_GENDERS;


export function getHisOrHer(genderKey){
    return genderKey === "Girl" ? "her" : "his";

}



export const NEUTERED_OPTIONS = [
    "No",
    "Yes",
];
export const NEUTERED_OPTIONS_KEYS = NEUTERED_OPTIONS;

export const BODY_SCORES = [
    "1" ,
    "3" ,
    "5" ,
];


export const BODY_SCORES_KEYS = BODY_SCORES;



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
