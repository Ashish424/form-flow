import {BODY_SCORES_KEYS} from "./StaticData";

export const NAME_PRIMARY_TITLE = (quesOutputPool) => {
    return "Hello Pet parent! What is your Dog's name?";

    // return "First,what's your dog's name?";
};

export const NAME_SECONDARY_TITLE = (quesOutputPool) =>{

    return "My dog is lovingly called";
    // return "My dog is called";
};

export const GENDER_PRIMARY_TITLE = (quesOutputPool) => {

    return `${quesOutputPool.dogName} is a beautiful girl or an adorable boy?`
    // return `Is ${quesOutputPool.dogName} a boy or a girl?`;

};

export const GENDER_SECONDARY_TITLE = (quesOutputPool) =>{


    // return `${quesOutputPool.dogName} is a ...`;
    return `${quesOutputPool.dogName} is a good...`;
};




export const WEIGHT_PRIMARY_TITLE = (quesOutputPool) =>{
    return `How much does ${quesOutputPool.dogName} currently weigh?`;
};

export const WEIGHT_SECONDARY_TITLE = (quesOutputPool) =>{
    return `${quesOutputPool.dogName} weighs about...`;
};

export const ACTIVITY_PRIMARY_TITLE = (quesOutputPool) =>{


    return `How active is ${quesOutputPool.dogName}?`;
};

export const ACTIVITY_SECONDARY_TITLE = (quesOutputPool) =>{

    return "Dog's energy level and daily activity should have a perfect balance. Help us understand so that we serve them right.";


    // return `Whether they're a bundle of energy or a serial snoozer, every dog is unique and needs a different amount of food.`;

};


export const NEUTERED_PRIMARY_TITLE = (quesOutputPool) =>{
    return `Is ${quesOutputPool.dogName} neutered?`;
};

export const NEUTERED_SECONDARY_TITLE = (quesOutputPool) =>{

    return `Neutered or Spayed dogs require lesser calories in their meals.`;

    // return `here neutered`;

};

export const AGE_PRIMARY_TITLE = (quesOutputPool) =>{
    return `How old is ${quesOutputPool.dogName}?`;
};

export const AGE_SECONDARY_TITLE = (quesOutputPool) =>{
    return `${quesOutputPool.dogName} is...`;

};



export const BODY_SCORE_PRIMARY_TITLE = (quesOutputPool) =>{



    return `${quesOutputPool.dogName} seems to be a lovely dog! What is the body type of ${quesOutputPool.dogName}?`;


    // return `What does ${quesOutputPool.dogName} body look like?`;

};

export const BODY_SCORE_SECONDARY_TITLE = (quesOutputPool) =>{

    return "Their body type will tell us a lot about them. We will then calculate the right amount of calories they need per serving.";



    // return `${quesOutputPool.dogName} seems to be a lovely dog! What is the body type of ${quesOutputPool.dogName}?`;


    // return `${quesOutputPool.dogName} is ...`



    // return `${quesOutputPool.dogName} is ...`;

};

export const BREED_PRIMARY_TITLE = (quesOutputPool) =>{

    return `Which breed ${quesOutputPool.dogName} belongs to?`;


    // return `What breed is ${quesOutputPool.dogName}?`;

};

export const BREED_SECONDARY_TITLE = (quesOutputPool) =>{

    return `Every dog breed comes with its own set of needs.My ${quesOutputPool.dogName} is a`;



    // return `${quesOutputPool.dogName} is a ...`;

};


//todo use these strings.
export const BODY_SCORES_STRINGS= {}

BODY_SCORES_STRINGS[BODY_SCORES_KEYS[0]] = {
    primary : "A little Skinny ",
    secondary : "Narrow waistline and you can clearly see her ribs."

}

BODY_SCORES_STRINGS[BODY_SCORES_KEYS[1]] = {
    primary : "Just right",
    //todo ribs his /her add gender based quest output pool.
    secondary : "Visible waistline with some fat cover but ribs are easy to feel."

}
BODY_SCORES_STRINGS[BODY_SCORES_KEYS[2]] = {
    primary : "A bit chubby",
    secondary : "Waistline is not visible and her ribs are tricky to feel."

}

