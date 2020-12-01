
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



//todo load from a file using env variables
export const BREED_CATEGORIES_LIST = [
    "AFFENPINSCHER",
    "AFGHAN HOUND",
    "AIREDALE TERRIER",
    "AKITA",
    "ALASKAN MALAMUTE",
    "AMERICAN STAFFORDSHIRE TERRIER",
    "AMERICAN WATER SPANIEL",
    "AUSTRALIAN CATTLE DOG",
    "AUSTRALIAN SHEPHERD",
    "AUSTRALIAN TERRIER",
    "BASENJI",
    "BASSET HOUND",
    "BEAGLE",
    "BEARDED COLLIE",
    "BEDLINGTON TERRIER",
    "BERNESE MOUNTAIN DOG",
    "BICHON FRISE",
    "BLACK AND TAN COONHOUND",
    "BLOODHOUND",
    "BORDER COLLIE",
    "BORDER TERRIER",
    "BORZOI",
    "BOSTON TERRIER",
    "BOUVIER DES FLANDRES",
    "BOXER",
    "BRIARD",
    "BRITTANY",
    "BRUSSELS GRIFFON",
    "BULL TERRIER",
    "BULLDOG",
    "BULLMASTIFF",
    "CAIRN TERRIER",
    "CANAAN DOG",
    "CHESAPEAKE BAY RETRIEVER",
    "CHIHUAHUA",
    "CHINESE CRESTED",
    "CHINESE SHAR-PEI",
    "CHOW CHOW",
    "CLUMBER SPANIEL",
    "COCKER SPANIEL",
    "COLLIE",
    "CURLY-COATED RETRIEVER",
    "DACHSHUND",
    "DALMATIAN",
    "DOBERMAN PINSCHER",
    "ENGLISH COCKER SPANIEL",
    "ENGLISH SETTER",
    "ENGLISH SPRINGER SPANIEL",
    "ENGLISH TOY SPANIEL",
    "ESKIMO DOG",
    "FINNISH SPITZ",
    "FLAT-COATED RETRIEVER",
    "FOX TERRIER",
    "FOXHOUND",
    "FRENCH BULLDOG",
    "GERMAN SHEPHERD",
    "GERMAN SHORTHAIRED POINTER",
    "GERMAN WIREHAIRED POINTER",
    "GOLDEN RETRIEVER",
    "GORDON SETTER",
    "GREAT DANE",
    "GREYHOUND",
    "IRISH SETTER",
    "IRISH WATER SPANIEL",
    "IRISH WOLFHOUND",
    "INDIE BREED",
    "JACK RUSSELL TERRIER",
    "JAPANESE SPANIEL",
    "KEESHOND",
    "KERRY BLUE TERRIER",
    "KOMONDOR",
    "KUVASZ",
    "LABRADOR RETRIEVER",
    "LAKELAND TERRIER",
    "LHASA APSO",
    "MALTESE",
    "MANCHESTER TERRIER",
    "MASTIFF",
    "MEXICAN HAIRLESS",
    "NEWFOUNDLAND",
    "NORWEGIAN ELKHOUND",
    "NORWICH TERRIER",
    "OTTERHOUND",
    "PAPILLON",
    "PEKINGESE",
    "POINTER",
    "POMERANIAN",
    "POODLE",
    "PUG",
    "PULI",
    "RHODESIAN RIDGEBACK",
    "ROTTWEILER",
    "SAINT BERNARD",
    "SALUKI",
    "SAMOYED",
    "SCHIPPERKE",
    "SCHNAUZER",
    "SCOTTISH DEERHOUND",
    "SCOTTISH TERRIER",
    "SEALYHAM TERRIER",
    "SHETLAND SHEEPDOG",
    "SHIH TZU",
    "SIBERIAN HUSKY",
    "SILKY TERRIER",
    "SKYE TERRIER",
    "STAFFORDSHIRE BULL TERRIER",
    "SOFT-COATED WHEATEN TERRIER",
    "SUSSEX SPANIEL",
    "SPITZ",
    "TIBETAN TERRIER",
    "VIZSLA",
    "WEIMARANER",
    "WELSH TERRIER",
    "WEST HIGHLAND WHITE TERRIER",
    "WHIPPET",
    "YORKSHIRE TERRIER",
    "JONANGI",
    "MUDHOL HOUND/CARAVAN HOUND",
    "BAKHARWAL DOG",
    "RAJAPALAYAM",
    "KUMAON MASTIFF",
    "KAIKADI",
    "SINHALA HOUND",
    "MAHRATTA GREYHOUND",
    "VIKHAN SHEEPDOG",
    "CHIPPIPARAI",
    "RAMPUR GREYHOUND",
    "BULLY KUTTA",
    "GADDI KUTTA",
    "TANGKHUL HUI",
    "TAJI (TAZI)",
    "HAMEERPURA SIKAR GRAYHOUND"
]





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
