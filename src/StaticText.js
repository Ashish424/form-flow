export const NAME_PRIMARY_TITLE = (quesOutputPool) => {
    return "First,what's your dog's name?";
};


export const NAME_SECONDARY_TITLE = (quesOutputPool) =>{
    return "My dog is called";
};

export const WEIGHT_PRIMARY_TITLE = (quesOutputPool) =>{
    return `How much does ${quesOutputPool.dogName} currently weigh?`;
};

export const WEIGHT_SECONDARY_TITLE = (quesOutputPool) =>{
    return `${quesOutputPool.dogName} weighs about...`;
};

