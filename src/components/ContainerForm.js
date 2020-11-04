import React from 'react';
import cloneDeep from 'lodash/cloneDeep';




import MultiChoiceInput from "./Pages/MultiChoiceInput";
import {
    AGE_CALORIFIC_OPTIONS,
    AGE_OPTIONS,
    AGE_OPTIONS_KEYS,
    BODY_SCORES,
    BODY_SCORES_KEYS,
    BREED_OPTIONS,
    BREED_OPTIONS_KEYS,
    NEUTERED_OPTIONS,
    NEUTERED_OPTIONS_KEYS,
    POSSIBLE_ACTIVITIES,
    POSSIBLE_ACTIVITIES_CALORIE_RANGE_MULTIPLIER_MAX,
    POSSIBLE_ACTIVITIES_CALORIE_RANGE_MULTIPLIER_MIN,
    POSSIBLE_ACTIVITIES_KEYS,
    POSSIBLE_GENDERS_KEYS,
    BREED_CATEGORIES_LIST, BREED_CATEGORIES_MAPPED, getLowerKey, getUpperKey,
} from "../StaticData";
import {
    ACTIVITY_PRIMARY_TITLE,
    ACTIVITY_SECONDARY_TITLE,
    AGE_PRIMARY_TITLE,
    AGE_SECONDARY_TITLE,
    BODY_SCORE_PRIMARY_TITLE,
    BODY_SCORE_SECONDARY_TITLE,
    BREED_PRIMARY_TITLE,
    BREED_SECONDARY_TITLE,
    GENDER_PRIMARY_TITLE,
    GENDER_SECONDARY_TITLE,
    NAME_PRIMARY_TITLE,
    NAME_SECONDARY_TITLE,
    NEUTERED_PRIMARY_TITLE, NEUTERED_SECONDARY_TITLE,
    // NEUTERED_SECONDARY_TITLE,
    WEIGHT_PRIMARY_TITLE,
    WEIGHT_SECONDARY_TITLE,

} from "../StaticText";



import MuiStyledProgressBar from "./MuiStyledProgressBar"
import MuiStyledPrimaryQuestion from "./Pages/PrimaryQuestionLabel";
import MuiStyledSecondaryQuestionLabel from "./Pages/SecondaryQuestionLabel";
import MuiStyledButtonBar from "./Pages/BottomBar";

import MuiToolBar from "@material-ui/core/Toolbar"
import MuiButton from "@material-ui/core/Button";

import {MuiStyledAgeForm, MuiStyledBreedForm, MuiStyledNameForm, MuiStyledWeightForm} from "./Pages/PageForm";
import StandardStyleContainer from "./Pages/ButtonContainer";

import FlexDiv from "./FlexDiv";



class ContainerForm extends React.Component{





    constructor(props) {
        super(props);



        this.dogNameFormID = "name-form";
        this.dogWeightFormID = "weight-form";
        this.dogBreedFormID = "breed-form";
        this.dogAgeFormID = "age-form";


        this.genderMultiChoiceKey = "gender-multi-choice";

        this.activityMultiChoiceKey = "activity-multi-choice";
        this.neuteredMultiChoiceKey = "neutered-multi-choice";
        this.nameInputKey = "name-key";
        this.weightInputKey = "weight-key";
        this.ageInputKey = "age-key";
        this.bodyScoreMultiChoiceKey = "body-score-key";
        this.breedSelectKey = "breed-key";

        this.dogYearNameIdentifier ="dog-year-name";
        this.dogMonthNameIdentifier ="dog-month-name";




        //only set values like this in the constructor
        this.state = {
            //todo reset to zero in prod
            currentQues : 0,
            //initialized with default values
            quesOutputPool : {
                dogName : "",
                dogGender : POSSIBLE_GENDERS_KEYS[0],
                dogWeight : "",
                dogActivity  : POSSIBLE_ACTIVITIES_KEYS[1],
                dogNeutered  : NEUTERED_OPTIONS_KEYS[0],
                // dogAge       : "",
                dogAgeYears  : 0,
                dogAgeMonths  : 0,

                dogBodyScore : BODY_SCORES_KEYS[0],

                dogBreedCategoriesIndex : -1,
                //todo email validation
                email : "test@test.com",
                //indian phone number only
                mobile : "9123456789"

            },



        };



        //avoid using this as much as possible.
        this.currentPageRef = React.createRef();


        this.nameInputChange = this.nameInputChange.bind(this);
        this.weightInputChange = this.weightInputChange.bind(this);
        this.breedSelectionChange = this.breedSelectionChange.bind(this);
        this.ageInputChange = this.ageInputChange.bind(this);





        this.OnActivitySelectionChange = this.OnActivitySelectionChange.bind(this);



        this.moveToNexPage = this.moveToNexPage.bind(this);
        this.moveToPrevPage = this.moveToPrevPage.bind(this);




        this.onClickNext = this.onClickNext.bind(this);
        this.onClickPrev = this.onClickPrev.bind(this);
        //todo collapse all these if no differences
        // this.onClickNextActivityMoveAhead = this.onClickNextActivityMoveAhead.bind(this);
        // this.onClickNextNeuteredMoveAhead = this.onClickNextNeuteredMoveAhead.bind(this);
        // this.onClickNextAgeMoveAhead = this.onClickNextAgeMoveAhead.bind(this);
        // this.onClickNextBodyScoreAhead = this.onClickNextBodyScoreAhead.bind(this);
        // this.onClickNextBreedAhead = this.onClickNextBreedAhead.bind(this);

        this.onClickNextMultiChoiceDefault = this.onClickNextMultiChoiceDefault.bind(this);

        this.onClickNextFormAhead = this.onClickNextFormAhead.bind(this);



        // this is done to avoid this issue - https://github.com/spring-media/react-shadow-dom-retarget-events/issues/13
        this.onFormSubmitAbsorb = this.onFormSubmitAbsorb.bind(this);





        this.OnGenderSelectionChange = this.OnGenderSelectionChange.bind(this);
        this.OnActivitySelectionChange = this.OnActivitySelectionChange.bind(this);
        this.OnNeuteredSelectionChange = this.OnNeuteredSelectionChange.bind(this);

        this.OnBodyScoreSelectionChange = this.OnBodyScoreSelectionChange.bind(this);









        this.getPageData = this.getPageData.bind(this);


        this.renderPage = this.renderPage.bind(this);
        this.totalStateString = this.totalStateString.bind(this);

        //setter method for breed index
        this.setBreedIndex = this.setBreedIndex.bind(this);



        //getter methods for data collected.
        this.getCurrentDogName = this.getCurrentDogName.bind(this);
        this.getDogBreedCategory = this.getDogBreedCategory.bind(this);
        this.getDogAgeBracket = this.getDogAgeBracket.bind(this);


        //validation methods
        this.isValidAge = this.isValidAge.bind(this);






        //array of function components.
        this.pages = [




            {
                //layout is the first thing here
                page : ()=>{
                    return (
                        <>

                            <MuiStyledPrimaryQuestion>{NAME_PRIMARY_TITLE(this.state.quesOutputPool)}</MuiStyledPrimaryQuestion>

                            <MuiStyledNameForm
                                secondaryText = {NAME_SECONDARY_TITLE(this.state.quesOutputPool)}
                                formOnSubmit={this.onFormSubmitAbsorb}
                                formId = {this.dogNameFormID}
                                keyVal={this.nameInputKey}
                                onChange = {this.nameInputChange}
                                textValue = {this.state.quesOutputPool.dogName}>

                            </MuiStyledNameForm>




                        </>);


                },

                //disabled since the first question
                prevButtonAttribs : () => {
                    return {disabled: true};
                },
                nextButtonAttribs : ()=> {
                    return {
                        type: "submit",
                        form: this.dogNameFormID,
                        disabled: this.state.quesOutputPool.dogName === "",
                        onClick:this.onClickNextFormAhead

                    };
                },



            },
            {

                page : ()=>{
                    return (
                        <>
                            <MuiStyledPrimaryQuestion align="center" variant="h4">{AGE_PRIMARY_TITLE(this.state.quesOutputPool)}</MuiStyledPrimaryQuestion>
                            <MuiStyledSecondaryQuestionLabel align="center" variant="h6">
                                {AGE_SECONDARY_TITLE(this.state.quesOutputPool)}
                            </MuiStyledSecondaryQuestionLabel>


                            {/*<MultiChoiceInput*/}
                            {/*    key ={this.ageMultiChoiceKey}*/}
                            {/*    values = {AGE_OPTIONS_KEYS}*/}
                            {/*    defaultSelectionIndex = {AGE_OPTIONS_KEYS.findIndex((ele)=>{return ele === this.state.quesOutputPool.dogAge;})}*/}
                            {/*    onSelectionChanged={this.OnAgeSelectionChange}*/}
                            {/*    ref={this.currentPageRef}*/}
                            {/*    gridSetup ={QuadStyledButtonContainer}*/}
                            {/*/>*/}


                            <MuiStyledAgeForm
                                formOnSubmit={this.onFormSubmitAbsorb}
                                formId = {this.dogAgeFormID}
                                keyVal={this.ageInputKey}
                                onChange = {this.ageInputChange}
                                years_name = {this.dogYearNameIdentifier}
                                months_name = {this.dogMonthNameIdentifier}
                                years_value = {this.state.quesOutputPool.dogAgeYears ||  ""  }
                                months_value = {this.state.quesOutputPool.dogAgeMonths || ""}


                            >

                            </MuiStyledAgeForm>


                        </>);


                },
                prevButtonAttribs : ()=> {
                    return {};
                },
                nextButtonAttribs : ()=> {

                    return {
                        type: "submit",
                        form: this.dogAgeFormID,
                        disabled:
                            this.state.quesOutputPool.dogAgeYears === 0
                            && this.state.quesOutputPool.dogAgeMonths === 0
                            // && this.isValidAge()
                        ,
                        onClick:this.onClickNextFormAhead
                    };

                },
                onGainFocus : ()=> {
                    console.log("age question gained focus");


                }

            },
            {

                page : ()=>{
                    return (
                        <>
                            <MuiStyledPrimaryQuestion align="center" variant="h4">{BREED_PRIMARY_TITLE(this.state.quesOutputPool)}</MuiStyledPrimaryQuestion>
                            <MuiStyledSecondaryQuestionLabel align="center" variant="h6">
                                {BREED_SECONDARY_TITLE(this.state.quesOutputPool)}
                            </MuiStyledSecondaryQuestionLabel>




                            <MuiStyledBreedForm
                                formOnSubmit={this.onFormSubmitAbsorb}
                                formId = {this.dogBreedFormID}
                                keyVal={this.breedSelectKey}

                                dogName = {this.state.quesOutputPool.dogName}
                                listOptions = {BREED_CATEGORIES_LIST}
                                textValue = {
                                    this.state.quesOutputPool.dogBreedCategoriesIndex === -1 ?
                                        null :
                                        BREED_CATEGORIES_LIST[this.state.quesOutputPool.dogBreedCategoriesIndex]}

                                onSelectionChanged = {this.breedSelectionChange}

                            >
                            </MuiStyledBreedForm>



                        </>);


                },
                prevButtonAttribs : ()=> {
                    return {};
                },
                nextButtonAttribs : ()=> {
                    return {

                        type: "submit",
                        form: this.dogBreedFormID,
                        disabled: this.state.quesOutputPool.dogBreedCategoriesIndex === -1,
                        //todo using onclick next multi choice default here use different.
                        onClick:this.onClickNextMultiChoiceDefault
                    };

                },
                onGainFocus : ()=> {
                    console.log("breed question gained focus");
                    console.log("cat index " + this.state.quesOutputPool.dogBreedCategoriesIndex);



                }

            },
            {

                page : ()=>{
                    return (
                        <>
                            <MuiStyledPrimaryQuestion align="center" variant="h4">{NEUTERED_PRIMARY_TITLE(this.state.quesOutputPool)}</MuiStyledPrimaryQuestion>
                            <MuiStyledSecondaryQuestionLabel align="center" variant="h6">
                                {NEUTERED_SECONDARY_TITLE(this.state.quesOutputPool)}
                            </MuiStyledSecondaryQuestionLabel>

                            <MultiChoiceInput
                                key ={this.neuteredMultiChoiceKey}
                                values = {NEUTERED_OPTIONS_KEYS}
                                defaultSelectionIndex = {NEUTERED_OPTIONS_KEYS.findIndex((ele)=>{return ele === this.state.quesOutputPool.dogNeutered;})}
                                onSelectionChanged={this.OnNeuteredSelectionChange}
                                ref={this.currentPageRef}
                                gridSetup ={StandardStyleContainer}
                            />



                        </>);


                },
                prevButtonAttribs : ()=> {
                    return {};
                },
                nextButtonAttribs : ()=> {
                    return {onClick:this.onClickNextMultiChoiceDefault};

                },
                onGainFocus : ()=> {
                    console.log("neutered question gained focus");


                }

            },
            {

                page : ()=>{
                    return (
                        <>
                            <MuiStyledPrimaryQuestion align="center" variant="h4">{GENDER_PRIMARY_TITLE(this.state.quesOutputPool)}</MuiStyledPrimaryQuestion>

                            <MuiStyledSecondaryQuestionLabel align="center" variant="h6">
                                {GENDER_SECONDARY_TITLE(this.state.quesOutputPool)}
                            </MuiStyledSecondaryQuestionLabel>

                            <MultiChoiceInput
                                key ={this.genderMultiChoiceKey}
                                values = {POSSIBLE_GENDERS_KEYS}
                                defaultSelectionIndex = {POSSIBLE_GENDERS_KEYS.findIndex((ele)=>{return ele === this.state.quesOutputPool.dogGender;})}
                                onSelectionChanged={this.OnGenderSelectionChange}
                                ref={this.currentPageRef}
                                // gridSetup ={DoubleStyledButtonContainer}
                                gridSetup ={StandardStyleContainer}

                            />



                        </>);


                },
                prevButtonAttribs : ()=> {
                    return {};
                },
                nextButtonAttribs : ()=> {
                    return {onClick:this.onClickNextMultiChoiceDefault};

                },
                onGainFocus : ()=> {
                    console.log("gender question gained focus");


                }

            },
            {

                page : ()=>{
                    return (
                        <>

                            <MuiStyledPrimaryQuestion align="center" variant="h4">{ACTIVITY_PRIMARY_TITLE(this.state.quesOutputPool)}</MuiStyledPrimaryQuestion>
                            <MuiStyledSecondaryQuestionLabel align="center" variant="h6">
                                {ACTIVITY_SECONDARY_TITLE(this.state.quesOutputPool)}
                            </MuiStyledSecondaryQuestionLabel>

                            <MultiChoiceInput
                                key ={this.activityMultiChoiceKey}
                                values = {POSSIBLE_ACTIVITIES_KEYS}
                                defaultSelectionIndex = {POSSIBLE_ACTIVITIES_KEYS.findIndex((ele)=>{return ele === this.state.quesOutputPool.dogActivity;})}
                                onSelectionChanged={this.OnActivitySelectionChange}
                                ref={this.currentPageRef}
                                gridSetup ={StandardStyleContainer}
                            />



                        </>);


                },
                prevButtonAttribs : ()=> {
                    return {};
                },
                nextButtonAttribs : ()=> {
                    return {onClick:this.onClickNextMultiChoiceDefault};

                },
                onGainFocus : ()=> {
                    console.log("activity question gained focus");


                }

            },
            {

                page : ()=>{
                    return (
                        <>
                            <MuiStyledPrimaryQuestion align="center" variant="h4">{BODY_SCORE_PRIMARY_TITLE(this.state.quesOutputPool)}</MuiStyledPrimaryQuestion>
                            <MuiStyledSecondaryQuestionLabel align="center" variant="h6">
                                {BODY_SCORE_SECONDARY_TITLE(this.state.quesOutputPool)}
                            </MuiStyledSecondaryQuestionLabel>


                            <MultiChoiceInput

                                key ={this.bodyScoreMultiChoiceKey}
                                //todo adding complex structure here with strings
                                values = {BODY_SCORES_KEYS}
                                defaultSelectionIndex = {BODY_SCORES_KEYS.findIndex((ele)=>{return ele === this.state.quesOutputPool.dogBodyScore;})}
                                onSelectionChanged={this.OnBodyScoreSelectionChange}
                                ref={this.currentPageRef}
                                gridSetup ={StandardStyleContainer}
                            />



                        </>);


                },
                prevButtonAttribs : ()=> {
                    return {};
                },
                nextButtonAttribs : ()=> {
                    return {onClick:this.onClickNextMultiChoiceDefault};

                },
                onGainFocus : ()=> {
                    console.log("body score question gained focus");


                }

            },
            {

                page : ()=>{
                    return (
                        <>
                            <MuiStyledPrimaryQuestion align="center" variant="h4">{WEIGHT_PRIMARY_TITLE(this.state.quesOutputPool)}</MuiStyledPrimaryQuestion>
                            <MuiStyledSecondaryQuestionLabel align="center" variant="h6">
                                {WEIGHT_SECONDARY_TITLE(this.state.quesOutputPool)}
                            </MuiStyledSecondaryQuestionLabel>

                            {/*<form*/}
                            {/*    onSubmit={this.onFormSubmitAbsorb}*/}
                            {/*      id={this.dogWeightFormID}*/}
                            {/*      key={this.weightInputKey}>*/}
                            {/*    <input*/}
                            {/*        type="number"*/}
                            {/*        placeholder="00.00"*/}
                            {/*        name="mainInput"*/}
                            {/*        value={this.state.quesOutputPool.dogWeight}*/}
                            {/*        onChange={this.weightInputChange}*/}

                            {/*    />*/}
                            {/*    <span> kgs</span>*/}
                            {/*</form>*/}

                            <MuiStyledWeightForm
                                formOnSubmit={this.onFormSubmitAbsorb}
                                formId = {this.dogWeightFormID}
                                keyVal={this.weightInputKey}
                                onChange = {this.weightInputChange}
                                textValue = {this.state.quesOutputPool.dogWeight}
                            >

                            </MuiStyledWeightForm>






                        </>);


                },
                prevButtonAttribs : ()=>  {
                    return {};
                },
                nextButtonAttribs : () =>{
                    return {
                        type: "submit",
                        form: this.dogWeightFormID,
                        disabled: this.state.quesOutputPool.dogWeight === "",
                        onClick: this.onClickNextFormAhead


                    };
                },
                onGainFocus : ()=> {
                    console.log("weight question gained focus");


                }

            },








            {

                page : ()=>{
                    return (
                        <>

                            {
                                   <></>
                                   //todo comment out in prod

                                   // <>
                                   //          <h2>End Form Results</h2>
                                   //          <h4>Rer = {this.getTempRer()}</h4>
                                   //          <h4>Mer = {this.getTempMer()}</h4>
                                   //          <h4>CalorificCover = {this.getTempCalorificCover()}</h4>
                                   //
                                   //  </>

                            }


                            <h4>Min Calories = {this.getTempCalorieMin()}</h4>
                            <h4>Max Calories = {this.getTempCalorieMax()}</h4>




                        </>);


                },
                prevButtonAttribs : ()=> {
                    return {};
                },
                nextButtonAttribs : ()=> {
                    return {};

                },
                onGainFocus : ()=> {
                    console.log("end question gained focus");

                }

            },




        ];









        this.temp_energy_requirements_rer = 0 ;
        this.temp_energy_requirements_mer = 0;
        this.temp_energy_requirements_calorific_cover = 0;
        this.temp_calorie_range = 0;
        this.temp_min_calorie_range = 0;
        this.temp_max_calorie_range = 0;


        this.getTempRer = this.getTempRer.bind(this);
        this.getTempMer = this.getTempMer.bind(this);
        this.getTempCalorificCover = this.getTempCalorificCover.bind(this);
        this.getTempCalorieMin = this.getTempCalorieMin.bind(this);
        this.getTempCalorieMax = this.getTempCalorieMax.bind(this);









    }




    nameInputChange(event){
        // console.log("q1 changed "+event.target.value);


        event.preventDefault();
        event.persist();





        //need to persist event for the callback of setstate
        // event.persist();

        //NOTE set state function is asynchronous.

        this.setState(
            (state,props)=> {
                // let ques = this.getQuestionData(state.currentQues);
                //todo need a better solution for all this cloning.
                //todo use immutability-helper here
                let clonedQuesPool = cloneDeep(state.quesOutputPool);
                clonedQuesPool.dogName = event.target.value;

                return {quesOutputPool:clonedQuesPool};

            });

    }

    weightInputChange(event){

        event.preventDefault();
        event.persist();


        //validation




        //need to persist event for the callback of setstate
        // event.persist();

        //NOTE set state function is asynchronous.

        this.setState(
            (state,props)=> {
                // let ques = this.getQuestionData(state.currentQues);
                //todo need a better solution for all this cloning.
                let clonedQuesPool = cloneDeep(state.quesOutputPool);
                //todo error checking here
                clonedQuesPool.dogWeight = event.target.value;

                return {quesOutputPool:clonedQuesPool};

            });

    }

    setBreedIndex(index){
        this.setState(
            (state,props)=> {
                // let ques = this.getQuestionData(state.currentQues);
                //todo need a better solution for all this cloning.
                //todo use immutability-helper here
                let clonedQuesPool = cloneDeep(state.quesOutputPool);
                clonedQuesPool.dogBreedCategoriesIndex = index;

                return {quesOutputPool:clonedQuesPool};

            });

    }

    breedSelectionChange(event,newValue){

        //find index returns -1 if not found
        let newBreedIndex = BREED_CATEGORIES_LIST.findIndex((ele)=>{
            return ele === newValue;
        });
        console.log("new breed index is "+newBreedIndex);

        this.setBreedIndex(newBreedIndex);

    }

    ageInputChange(event){


        // console.log("event target is "+event.target.value);

        event.preventDefault();
        event.persist();
        const inputVal = event.target.value;
        if (typeof inputVal != "string") {
            console.log("input needs to be a string");
            return;
        }


        let number = 0;
        //allow empty sting as input but will fail ahead
        if(inputVal === ""){

            //todo discuss this implementation which restricts input.
            // let years = this.state.quesOutputPool.dogAgeYears;
            // let months = this.state.quesOutputPool.dogAgeMonths;
            // let total = 0;
            //
            // if(event.target.name === this.dogMonthNameIdentifier){
            //     total = years*12;
            //
            // }
            //
            // if(event.target.name === this.dogYearNameIdentifier){
            //
            //     total = months;
            //
            // }
            //
            // //combined constraints here
            // if(total < 2){
            //     console.log("age less than 2 months");
            //     return;
            // }




        }
        else {


            let valid = true;

            valid &= (!isNaN(inputVal) && !isNaN(parseFloat(inputVal)));
            if (!valid) {
                console.log("entered value is not a number");
                //todo raise the appropriate error before exit
                return;

            }


            valid &= Number.isInteger(parseFloat(inputVal));
            if (!valid) {
                console.log("entered value is not an integer");
                //todo raise the appropriate error before exit
                return;


            }


            let years = this.state.quesOutputPool.dogAgeYears;
            let months = this.state.quesOutputPool.dogAgeMonths;
            let total = 0;


            number = parseInt(inputVal, 10);
            if(event.target.name === this.dogMonthNameIdentifier){

                //check if valid in months
                if(number < 0 || number > 11){
                    console.log("months outside range ");
                    return;
                }
                total = years*12+number;


            }

            if(event.target.name === this.dogYearNameIdentifier){
                if(number < 0 || number > 19){
                    console.log("years outside range");
                    return;
                }
                total = number*12+months;

            }

            //combined constraints here
            if(total < 2){
                console.log("age less than 2 months");
                return;
            }


        }



        this.setState(
            (state,props)=> {

                //todo need a better solution for all this cloning.
                let clonedQuesPool = cloneDeep(state.quesOutputPool);

                if(event.target.name === this.dogYearNameIdentifier){
                    clonedQuesPool.dogAgeYears = number;
                    console.log("updating years "+event.target.value);


                }
                else if(event.target.name === this.dogMonthNameIdentifier){
                    clonedQuesPool.dogAgeMonths = number;
                    console.log("updating months");
                }
                else{
                    console.log("rogue event fired");
                }

                return {quesOutputPool:clonedQuesPool};

            });


    }




    moveToNexPage(){


        //use dynamic props
        // https://stackoverflow.com/questions/40868189/how-to-create-a-dynamic-prop-name-in-react

        //NOTE set state function is asynchronous.
        this.setState(
            (state,props)=> {
                // if(state.questions.length)

                return {currentQues: (state.currentQues < this.pages.length - 1) ? state.currentQues+1 : state.currentQues};
            }
        ,()=>{
                const page = this.getPageData(this.state.currentQues);
                page.onGainFocus();
            });


    }
    moveToPrevPage() {


        // event.preventDefault();
        //TODO make changes to the prev and next button as necessary for this question
        //use dynamic props https://stackoverflow.com/questions/40868189/how-to-create-a-dynamic-prop-name-in-react




        //NOTE set state function is asynchronous.
        this.setState(
            (state,props)=> {
                // if(state.questions.length)

                return {currentQues: (state.currentQues >= 1) ? state.currentQues-1 : state.currentQues};
            }
        );


    }

    //do click specific stuff only form submission already added
    onClickNext(event){
        console.log("on click next fired");



    }

    onClickNextMultiChoiceDefault(event){
        console.log("fired on click next multi choice");
        this.moveToNexPage();

    }

    onClickNextFormAhead(event){
        console.log("fired on click next weight ahead");
        this.moveToNexPage();



    }
    onFormSubmitAbsorb(event){

        //absorb the page refresh event on form submit.
        event.preventDefault();

    }




    onClickPrev(event){
        this.moveToPrevPage();
        // console.log("clicked prev");
    }



    OnGenderSelectionChange(arr){
        //todo cannot modify arr here at any cost !!!!!!

        for (let i =0 ;i< arr.length;i++ ){
            //first selection match algorithm
            if(arr[i] === 1){

                this.setState(
                    (state,props)=> {
                        let newPool = cloneDeep(state.quesOutputPool);
                        newPool.dogGender = POSSIBLE_GENDERS_KEYS[i];
                        return {quesOutputPool : newPool};
                    }
                );
                return;
            }
        }
    }



    //todo merge loops in these functions into one
    OnActivitySelectionChange(arr){
        //todo cannot modify arr here at any cost !!!!!!

        for (let i =0 ;i< arr.length;i++ ){
            //first selection match algorithm
            if(arr[i] === 1){

                this.setState(
                    (state,props)=> {
                        let newPool = cloneDeep(state.quesOutputPool);
                        newPool.dogActivity = POSSIBLE_ACTIVITIES_KEYS[i];
                        return {quesOutputPool : newPool};
                    }
                );
                return;
            }
        }
    }



    OnNeuteredSelectionChange(arr){
        //todo cannot modify arr here at any cost !!!!!!

        for (let i =0 ;i< arr.length;i++ ){
            //first selection match algorithm
            if(arr[i] === 1){

                this.setState(
                    (state,props)=> {
                        let newPool = cloneDeep(state.quesOutputPool);
                        newPool.dogNeutered = NEUTERED_OPTIONS_KEYS[i];
                        return {quesOutputPool : newPool};
                    }
                );
                return;
            }
        }



    }
    // OnAgeSelectionChange(arr){
    //     //todo cannot modify arr here at any cost !!!!!!
    //
    //     for (let i =0 ;i< arr.length;i++ ){
    //         //first selection match algorithm
    //         if(arr[i] === 1){
    //
    //             this.setState(
    //                 (state,props)=> {
    //                     let newPool = cloneDeep(state.quesOutputPool);
    //                     newPool.dogAge = AGE_OPTIONS_KEYS[i];
    //                     return {quesOutputPool : newPool};
    //                 }
    //             );
    //             return;
    //         }
    //     }
    //
    //
    //
    // }

    OnBodyScoreSelectionChange(arr){
        for (let i =0 ;i< arr.length;i++ ){
            //first selection match algorithm
            if(arr[i] === 1){

                this.setState(
                    (state,props)=> {
                        let newPool = cloneDeep(state.quesOutputPool);
                        newPool.dogBodyScore = BODY_SCORES_KEYS[i];
                        return {quesOutputPool : newPool};
                    }
                );
                return;
            }
        }


    }






    getPageData(index){
        return this.pages[index];

    }


    getCurrentDogName(){
        return this.state.quesOutputPool.dogName;

    }




    renderPage(){


    }

    //todo move this is a backend function
    getDogBreedCategory(){

        const dBCI = this.state.quesOutputPool.dogBreedCategoriesIndex;
        if(dBCI !== -1){
            return BREED_CATEGORIES_MAPPED[BREED_CATEGORIES_LIST[dBCI]];
        }
        else{
            //returning default breed
            //todo discuss this default based on implementation
            return BREED_OPTIONS_KEYS[0];
        }

    }




    //todo move this is a backend function
    getDogAgeBracket(){
        //todo parse int here strings !!!!
        const years =  this.state.quesOutputPool.dogAgeYears;
        const months = this.state.quesOutputPool.dogAgeMonths;
        const totalMonths = years*12+months;
        // console.log("total months "+totalMonths);
        let ansIndex = 0;
        for(let i = 0;i<AGE_OPTIONS_KEYS.length;i++){
            const lower = getLowerKey(AGE_OPTIONS_KEYS[i]);
            const upper = getUpperKey(AGE_OPTIONS_KEYS[i]);
            //todo check lower upper connection
            if(totalMonths >= lower && totalMonths < upper){
                ansIndex = i;
                break;
            }

        }


        return AGE_OPTIONS_KEYS[ansIndex];


    }

    totalStateString(){


        const dn = this.state.quesOutputPool.dogName;
        const dG = this.state.quesOutputPool.dogGender;

        const dW = this.state.quesOutputPool.dogWeight;
        const dA = this.state.quesOutputPool.dogActivity;
        const dne = this.state.quesOutputPool.dogNeutered;
        // const dag = this.state.quesOutputPool.dogAge;
        const dagY = this.state.quesOutputPool.dogAgeYears;
        const dagM = this.state.quesOutputPool.dogAgeMonths;


        const dBc = this.state.quesOutputPool.dogBodyScore;



        return dn +" "+dG+" " + dW + " "+dA + " "+ dne +" "
            + dagY +" "+dagM
            +" "
            +dBc
            +" "+this.getDogBreedCategory(this.state.quesOutputPool.dogBreedCategoriesIndex)
            +" age bracket "+this.getDogAgeBracket()
            ;



    }









    // this.state.currentQues
    render() {


        console.log("calorific options "+ Object.keys(AGE_CALORIFIC_OPTIONS).toString());


        const currentPage = this.getPageData(this.state.currentQues);
        const progressScore = ((this.state.currentQues + 1) / this.pages.length) * 100;




        return (
            <>

                {/*<ProgressBar progress={progressScore}/>*/}

                <MuiStyledProgressBar variant="determinate" value={progressScore}/>

                {currentPage.page()}



                <MuiStyledButtonBar color="secondary">
                    {/*todo contain this inside the styled bar component.*/}


                    <MuiToolBar>

                        <FlexDiv grow = {1} />


                        {/*<button onClick={this.onClickPrev} {... currentPage.prevButtonAttribs()} > Prev</button>*/}
                        <MuiButton
                            // color="secondary"
                            variant="contained"
                            color="primary"

                            onClick={this.onClickPrev}
                            {... currentPage.prevButtonAttribs()} >
                            Prev
                        </MuiButton>



                        <FlexDiv grow={1} />


                        {/*NOTE next button attribs ahead so questions can override behaviour*/}
                        {/*<button onClick={this.onClickNext} {... currentPage.nextButtonAttribs()} > Next</button>*/}
                        <MuiButton
                            variant="contained"
                            color="primary"
                            onClick={this.onClickNext}
                            {... currentPage.nextButtonAttribs()} >
                            Next
                        </MuiButton>


                        <FlexDiv grow={1} />


                    </MuiToolBar>
                </MuiStyledButtonBar>

                {

                        //todo comment this in prod
                        // <p>value of all ques output is {this.totalStateString()}</p>
                        // <> </>


                }

            </>
        );
    }
    //todo remove this temp methods and move then to backend.

    getTempRer() {
        //returns a updated value of rer
        this.temp_energy_requirements_rer = 70*parseFloat(this.state.quesOutputPool.dogWeight)**0.75;
        return this.temp_energy_requirements_rer;

    }

    getTempMer() {
        this.temp_energy_requirements_mer = (this.getTempRer()*
                POSSIBLE_ACTIVITIES[this.state.quesOutputPool.dogActivity]*
                NEUTERED_OPTIONS[this.state.quesOutputPool.dogNeutered]*
                AGE_OPTIONS[this.getDogAgeBracket()]*
                // AGE_OPTIONS[this.state.quesOutputPool.dogAge]*
                BODY_SCORES[this.state.quesOutputPool.dogBodyScore]*
                BREED_OPTIONS[this.getDogBreedCategory()]);
        return this.temp_energy_requirements_mer;


    }

    getTempCalorificCover() {
        this.temp_energy_requirements_calorific_cover = this.getTempMer()*AGE_CALORIFIC_OPTIONS[this.getDogAgeBracket()];

        return this.temp_energy_requirements_calorific_cover;


    }

    getTempCalorieMin(){

        let t = this.getTempCalorificCover();

        this.temp_min_calorie_range = t*POSSIBLE_ACTIVITIES_CALORIE_RANGE_MULTIPLIER_MIN[this.state.quesOutputPool.dogActivity];
        return this.temp_min_calorie_range;



    }

    getTempCalorieMax(){
        let t = this.getTempCalorificCover();


        this.temp_max_calorie_range = t*POSSIBLE_ACTIVITIES_CALORIE_RANGE_MULTIPLIER_MAX[this.state.quesOutputPool.dogActivity];
        console.log("temp val is "+this.state.quesOutputPool.dogActivity);
        return this.temp_max_calorie_range;

    }

    isValidAge() {


        return false;
    }
}

export default ContainerForm;

