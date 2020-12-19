import {getHisOrHer} from "./StaticData";
import React from "react";
import {Box} from "@material-ui/core";
import MuiStyledSecondaryQuestionLabel from "./components/Pages/SecondaryQuestionLabel";
import {isCityDelivering} from "./components/Container/containerHelper";

export const NAME_PRIMARY_TITLE = (quesOutputPool) => {
    return ["Hello pet parent!","What's your Dog's name?"];

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


    return `Which breed does ${quesOutputPool.dogName} belong to?`;



    // return `What breed is ${quesOutputPool.dogName}?`;

};

export const BREED_SECONDARY_TITLE = (quesOutputPool) =>{

    return `Every dog breed comes with its own set of needs. My ${quesOutputPool.dogName} is a`;



    // return `${quesOutputPool.dogName} is a ...`;

};



export const BODY_SCORES_STRINGS= (quesOutputPool)=> (
    [

        {
            primary: "A little Skinny ",
            secondary: `Narrow waistline and you can clearly see ${getHisOrHer(quesOutputPool.dogGender)} ribs.`

        },

        {
            primary: "Just right",
            secondary: `Visible waistline with some fat cover but ${getHisOrHer(quesOutputPool.dogGender)} ribs are easy to feel.`

        },
        {
            primary: "A bit chubby",
            secondary: `Waistline is not visible and ${getHisOrHer(quesOutputPool.dogGender)} ribs are tricky to feel.`

        }
    ]
)


export const POSSIBLE_ACTIVITY_STRINGS = (quesOutputPool)=> (
    [

        {
            primary: "Not much Active",
            secondary: `Prefers short walks and mostly sleeps through the day.`

        },

        {
            primary: "Pretty Active",
            secondary: `Enjoys long walks and loves to play around.`

        },
        {
            primary: "Hyper Active",
            secondary: `Never gets tired of jumping and only stops running to eat.`

        }
    ]
)




export const USER_PRIMARY_TITLE = (quesOutputPool) =>{

        return `We carefully noted everything you shared about ${quesOutputPool.dogName}. Now it's your turn!`

};

export const THANK_YOU_PRIMARY_MESSAGE = (dogName,minCalories,maxCalories)=>{

    return (
        <>
                {`We have considered all your inputs and we suggest that the daily nutritional requirement
                    for ${dogName} is `}

                <Box component={"span"} fontWeight = {700} fontStyle="regular">
                    {`${minCalories}-${maxCalories}`}
                </Box>

                {` cal/day.`}



        </>
    );

}

export const THANK_YOU_SECONDARY_MESSAGE = (dogName,isCityDelivering)=>{

    return(

        <div>
            {isCityDelivering?
                `Our pet health specialist will get in touch with you soon and address ${dogName}'s needs.`:
                `Thank you for reaching out to Mom & Paw. We are currently not serving in your city. We will notify you once we are in your town.`
            }
            {/*{`Our pet health specialist will get in touch with you soon and address ${quesOutputPool.dogName}'s needs.`}*/}

        </div>


    )

}





