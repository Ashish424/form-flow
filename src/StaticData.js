
//todo load this data from a csv file
//todo this values should be on the backend not on front end!!!!!
export const POSSIBLE_ACTIVITIES = {
        "Low" : 1.1,
        "Medium" : 1.25,
        "High" : 1.4
};


export const POSSIBLE_ACTIVITIES_KEYS = Object.keys(POSSIBLE_ACTIVITIES);
//todo use dynamic keys here
export const POSSIBLE_ACTIVITIES_CALORIE_RANGE_MULTIPLIER_MIN = {
    "Low" : 0.95,
    "Medium" : 0.9,
    "High" : 0.85
};

//todo use dynamic keys here
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


export function getHisOrHer(genderKey){
    return genderKey === "Girl" ? "her" : "his";

}

export const POSSIBLE_GENDERS_KEYS = Object.keys(POSSIBLE_GENDERS);


export const NEUTERED_OPTIONS = {
    "No": 1,
    "Yes": 0.89
};
export const NEUTERED_OPTIONS_KEYS = Object.keys(NEUTERED_OPTIONS);

export const AGE_OPTIONS = {
    "2-4" : 2,
    "4-12" : 1.5,
    "12-72" : 1.2,
    "72-240" : 0.9


};

export const AGE_OPTIONS_KEYS = Object.keys(AGE_OPTIONS);

//todo remove this function to backend
export function getLowerKey(age_key){

    const lower = age_key.split('-')[0];
    return parseInt(lower);


}
export function getUpperKey(age_key){

    const higher = age_key.split('-')[1];
    return parseInt(higher);

}
//todo duplicated data but will go away any way to backend
export const AGE_CALORIFIC_OPTIONS = {

    // "2-4":0.95,
    // "4-12":0.90,
    // "12-72":0.85,
    // "72-240":0.85,
    [AGE_OPTIONS_KEYS[0]] : 0.95,
    [AGE_OPTIONS_KEYS[1]] : 0.90,
    [AGE_OPTIONS_KEYS[2]] : 0.85,
    [AGE_OPTIONS_KEYS[3]] : 0.85,


};



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
    "Giant":0.9,
    "None":1
};
export const BREED_OPTIONS_KEYS = Object.keys(BREED_OPTIONS);

export const CALORIFIC_COVERS = {

    [AGE_OPTIONS_KEYS[0]] : 0.95,
    [AGE_OPTIONS_KEYS[1]] : 0.95,
    [AGE_OPTIONS_KEYS[2]] : 0.9,
    [AGE_OPTIONS_KEYS[3]] : 0.9,

    // "2-4":0.95,
    // "4-12":0.95,
    // "12-72":0.9,
    // "72-240":0.9

};

//todo load from a file using env variables
export const BREED_CATEGORIES_MAPPED = {
    "AFFENPINSCHER":"Toy",
    "AFGHAN HOUND":"Large",
    "AIREDALE TERRIER":"Medium",
    "AKITA":"Large",
    "ALASKAN MALAMUTE":"Large",
    "AMERICAN STAFFORDSHIRE TERRIER":"Large",
    "AMERICAN WATER SPANIEL":"Mini",
    "AUSTRALIAN CATTLE DOG":"Medium",
    "AUSTRALIAN SHEPHERD":"Large",
    "AUSTRALIAN TERRIER":"Toy",
    "BASENJI":"Mini",
    "BASSET HOUND":"Medium",
    "BEAGLE":"Medium",
    "BEARDED COLLIE":"Large",
    "BEDLINGTON TERRIER":"Mini",
    "BERNESE MOUNTAIN DOG":"Giant",
    "BICHON FRISE":"Toy",
    "BLACK AND TAN COONHOUND":"Large",
    "BLOODHOUND":"Large",
    "BORDER COLLIE":"Medium",
    "BORDER TERRIER":"Toy",
    "BORZOI":"Large",
    "BOSTON TERRIER":"Mini",
    "BOUVIER DES FLANDRES":"Large",
    "BOXER":"Large",
    "BRIARD":"Large",
    "BRITTANY":"Medium",
    "BRUSSELS GRIFFON":"Toy",
    "BULL TERRIER":"Medium",
    "BULLDOG":"Medium",
    "BULLMASTIFF":"Giant",
    "CAIRN TERRIER":"Toy",
    "CANAAN DOG":"Medium",
    "CHESAPEAKE BAY RETRIEVER":"Large",
    "CHIHUAHUA":"Toy",
    "CHINESE CRESTED":"Toy",
    "CHINESE SHAR-PEI":"Large",
    "CHOW CHOW":"Medium",
    "CLUMBER SPANIEL":"Large",
    "COCKER SPANIEL":"Mini",
    "COLLIE":"Large",
    "CURLY-COATED RETRIEVER":"Large",
    "DACHSHUND":"Mini",
    "DALMATIAN":"Medium",
    "DOBERMAN PINSCHER":"Large",
    "ENGLISH COCKER SPANIEL":"Mini",
    "ENGLISH SETTER":"Medium",
    "ENGLISH SPRINGER SPANIEL":"Medium",
    "ENGLISH TOY SPANIEL":"Toy",
    "ESKIMO DOG":"Large",
    "FINNISH SPITZ":"Mini",
    "FLAT-COATED RETRIEVER":"Large",
    "FOX TERRIER":"Toy",
    "FOXHOUND":"Large",
    "FRENCH BULLDOG":"Medium",
    "GERMAN SHEPHERD":"Large",
    "GERMAN SHORTHAIRED POINTER":"Large",
    "GERMAN WIREHAIRED POINTER":"Large",
    "GOLDEN RETRIEVER":"Large",
    "GORDON SETTER":"Large",
    "GREAT DANE":"Giant",
    "GREYHOUND":"Giant",
    "IRISH SETTER":"Large",
    "IRISH WATER SPANIEL":"Medium",
    "IRISH WOLFHOUND":"Giant",
    "JACK RUSSELL TERRIER":"Mini",
    "JAPANESE SPANIEL":"Toy",
    "KEESHOND":"Medium",
    "KERRY BLUE TERRIER":"Medium",
    "KOMONDOR":"Giant",
    "KUVASZ":"Large",
    "LABRADOR RETRIEVER":"Large",
    "LAKELAND TERRIER":"Mini",
    "LHASA APSO":"Mini",
    "MALTESE":"Toy",
    "MANCHESTER TERRIER":"Mini",
    "MASTIFF":"Giant",
    "MEXICAN HAIRLESS":"Medium",
    "NEWFOUNDLAND":"Giant",
    "NORWEGIAN ELKHOUND":"Medium",
    "NORWICH TERRIER":"Toy",
    "OTTERHOUND":"Giant",
    "PAPILLON":"Toy",
    "PEKINGESE":"Toy",
    "POINTER":"Large",
    "POMERANIAN":"Toy",
    "POODLE":"Large",
    "PUG":"Mini",
    "PULI":"Mini",
    "RHODESIAN RIDGEBACK":"Large",
    "ROTTWEILER":"Giant",
    "SAINT BERNARD":"Giant",
    "SALUKI":"Medium",
    "SAMOYED":"Medium",
    "SCHIPPERKE":"Mini",
    "SCHNAUZER":"Medium",
    "SCOTTISH DEERHOUND":"Large",
    "SCOTTISH TERRIER":"Mini",
    "SEALYHAM TERRIER":"Mini",
    "SHETLAND SHEEPDOG":"Mini",
    "SHIH TZU":"Toy",
    "SIBERIAN HUSKY":"Medium",
    "SILKY TERRIER":"Toy",
    "SKYE TERRIER":"Mini",
    "STAFFORDSHIRE BULL TERRIER":"Medium",
    "SOFT-COATED WHEATEN TERRIER":"Medium",
    "SUSSEX SPANIEL":"Medium",
    "SPITZ":"Mini",
    "TIBETAN TERRIER":"Mini",
    "VIZSLA":"Medium",
    "WEIMARANER":"Large",
    "WELSH TERRIER":"Mini",
    "WEST HIGHLAND WHITE TERRIER":"Mini",
    "WHIPPET":"Mini",
    "YORKSHIRE TERRIER":"Toy",
    "JONANGI":"Large",
    "MUDHOL HOUND/CARAVAN HOUND":"Medium",
    "BAKHARWAL DOG":"Giant",
    "RAJAPALAYAM":"Large",
    "KUMAON MASTIFF":"Large",
    "KAIKADI":"Medium",
    "SINHALA HOUND":"Mini",
    "MAHRATTA GREYHOUND":"Mini",
    "VIKHAN SHEEPDOG":"Large",
    "CHIPPIPARAI":"Medium",
    "RAMPUR GREYHOUND":"Large",
    "BULLY KUTTA":"Giant",
    "GADDI KUTTA":"Large",
    "TANGKHUL HUI":"Large",
    "TAJI (TAZI)":"Large",
    "HAMEERPURA SIKAR GRAYHOUND":"Large"
}


export const BREED_CATEGORIES_LIST = Object.keys(BREED_CATEGORIES_MAPPED);


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


                        ]



export const CITIES_LIST = CITIES_DICT_ARR.map(a=>a.name);
