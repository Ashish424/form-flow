export const NAME_PRIMARY_TITLE = (quesOutputPool) => {
    return "First,what's your dog's name?";
};

//todo see if they all need the access to quesoutputpool
export const NAME_SECONDARY_TITLE = (quesOutputPool) =>{
    return "My dog is called";
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
    return `Whether they're a bundle of energy or a serial snoozer, every dog is unique and needs a different amount of food.`;

};


