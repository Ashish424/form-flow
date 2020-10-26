import React from 'react';
import cloneDeep from 'lodash/cloneDeep';



import MultiChoiceInput from "./Pages/MultiChoiceInput";
import {
    AGE_CALORIFIC_OPTIONS,
    AGE_OPTIONS,
    AGE_OPTIONS_KEYS, BODY_SCORES,
    BODY_SCORES_KEYS, BREED_OPTIONS,
    BREED_OPTIONS_KEYS, NEUTERED_OPTIONS,
    NEUTERED_OPTIONS_KEYS, POSSIBLE_ACTIVITIES,
    POSSIBLE_ACTIVITIES_KEYS, POSSIBLE_GENDERS_KEYS
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
    NEUTERED_PRIMARY_TITLE,
    // NEUTERED_SECONDARY_TITLE,
    WEIGHT_PRIMARY_TITLE,
    WEIGHT_SECONDARY_TITLE
} from "../StaticText";



import MuiStyledProgressBar from "./MuiStyledProgressBar"
import MuiStyledPrimaryQuestion from "./Pages/PrimaryQuestionLabel";
import MuiStyledSecondaryQuestionLabel from "./Pages/SecondaryQuestionLabel";
import MuiStyledButtonBar from "./Pages/BottomBar";

import MuiAppBar from "@material-ui/core/AppBar";




import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";


import MuiToolBar from "@material-ui/core/Toolbar"
import MuiButton from "@material-ui/core/Button";
import {withStyles} from "@material-ui/core/styles";
import MuiStyledNameForm from "./Pages/NameForm";
import MuiStyledButtonContainer, {
    DoubleStyledButtonContainer, PentaStyledButtonContainer, QuadStyledButtonContainer,
    TripleStyledButtonContainer
} from "./Pages/ButtonContainer";


//todo test here remove later move to the theme level
const styles = {
    root: {
        flexGrow: 1,
    },


};

function getTempStyledDiv(){


    return withStyles(styles)((props) =>{
        const { classes, ...other } = props;
        return (<div className={classes.root}>

        </div>);
    } );


}

class ContainerForm extends React.Component{




    constructor(props) {
        super(props);



        this.dogNameFormID = "name-form";
        this.dogWeightFormID = "weight-form";
        this.genderMultiChoiceKey = "gender-multi-choice";

        this.activityMultiChoiceKey = "activity-multi-choice";
        this.neuteredMultiChoiceKey = "neutered-multi-choice";
        this.nameInputKey = "name-key";
        this.weightInputKey = "weight-key";
        this.ageMultiChoiceKey = "age-key";
        this.bodyScoreMultiChoiceKey = "body-score-key";
        this.breedScoreMultiChoiceKey = "breed-key";




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
                dogAge       : AGE_OPTIONS_KEYS[0],
                dogBodyScore : BODY_SCORES_KEYS[0],
                dogBreed     : BREED_OPTIONS_KEYS[0],
                //todo email validation
                email : "test@test.com",
                //indian phone number only
                mobile : "9123456789"

            },
            nextBlocked : true,


        };



        //avoid using this as much as possible.
        this.currentPageRef = React.createRef();


        this.nameInputChange = this.nameInputChange.bind(this);
        this.weightInputChange = this.weightInputChange.bind(this);



        this.OnActivitySelectionChange = this.OnActivitySelectionChange.bind(this);


        // this.saveQuestionAndMoveToNext = this.saveQuestionAndMoveToNext.bind(this);





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






        this.OnDogNameInformationCollection = this.OnDogNameInformationCollection.bind(this);
        this.OnDogWeightInformationCollection = this.OnDogWeightInformationCollection.bind(this);
        this.OnGenderSelectionChange = this.OnGenderSelectionChange.bind(this);
        this.OnActivitySelectionChange = this.OnActivitySelectionChange.bind(this);
        this.OnNeuteredSelectionChange = this.OnNeuteredSelectionChange.bind(this);
        this.OnAgeSelectionChange = this.OnAgeSelectionChange.bind(this);
        this.OnBodyScoreSelectionChange = this.OnBodyScoreSelectionChange.bind(this);
        this.OnBreedScoreSelectionChange = this.OnBreedScoreSelectionChange.bind(this);











        this.getPageData = this.getPageData.bind(this);


        this.renderPage = this.renderPage.bind(this);
        this.totalStateString = this.totalStateString.bind(this);


        //getter methods for data collected.
        this.getCurrentDogName = this.getCurrentDogName.bind(this);




        //grid setup
        this.getGenderGrid = this.getGenderGrid.bind(this);



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
                                formOnSubmit={this.OnDogNameInformationCollection}
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
                        type: "submit", form: this.dogNameFormID,
                        //todo fix bug in this can be blocked because of some other data needs to depend solely on input state
                        //todo check this thing ok ???
                        disabled: this.state.quesOutputPool.dogName === ""
                    };
                },



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
                                gridSetup ={DoubleStyledButtonContainer}
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
                            <MuiStyledPrimaryQuestion align="center" variant="h4">{AGE_PRIMARY_TITLE(this.state.quesOutputPool)}</MuiStyledPrimaryQuestion>
                            <MuiStyledSecondaryQuestionLabel align="center" variant="h6">
                                {AGE_SECONDARY_TITLE(this.state.quesOutputPool)}
                            </MuiStyledSecondaryQuestionLabel>

                            <MultiChoiceInput
                                key ={this.ageMultiChoiceKey}
                                values = {AGE_OPTIONS_KEYS}
                                defaultSelectionIndex = {AGE_OPTIONS_KEYS.findIndex((ele)=>{return ele === this.state.quesOutputPool.dogAge;})}
                                onSelectionChanged={this.OnAgeSelectionChange}
                                ref={this.currentPageRef}
                                gridSetup ={QuadStyledButtonContainer}
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
                    console.log("age question gained focus");


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
                                gridSetup ={TripleStyledButtonContainer}
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
                                gridSetup ={TripleStyledButtonContainer}
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

                            {/*<MuiStyledNameForm*/}
                            {/*    // secondaryText = {NAME_SECONDARY_TITLE(this.state.quesOutputPool)}*/}
                            {/*    formOnSubmit={this.OnDogWeightInformationCollection}*/}
                            {/*    formId = {this.dogWeightFormID}*/}
                            {/*    keyVal={this.weightInputKey}*/}
                            {/*    onChange = {this.weightInputChange}*/}
                            {/*    textValue = {this.state.quesOutputPool.dogWeight}>*/}

                            {/*</MuiStyledNameForm>*/}


                            <form onSubmit={this.OnDogWeightInformationCollection}
                                  id={this.dogWeightFormID}
                                  key={this.weightInputKey}>
                                <input
                                    type="number"
                                    placeholder="00.00"
                                    name="mainInput"
                                    value={this.state.quesOutputPool.dogWeight}
                                    onChange={this.weightInputChange}

                                />
                                <span> kgs</span>
                            </form>

                        </>);


                },
                prevButtonAttribs : ()=>  {
                    return {};
                },
                nextButtonAttribs : () =>{
                    return {
                        type: "submit",
                        form: this.dogWeightFormID,
                        disabled: this.state.nextBlocked


                    };
                },
                onGainFocus : ()=> {
                    console.log("weight question gained focus");

                    this.setState((state,props)=>{
                        //resetting next blocked to the state for the next question.
                        return {nextBlocked : state.quesOutputPool.dogWeight === "" } ;

                    });

                }

            },

            {

                page : ()=>{
                    return (
                        <>
                            <MuiStyledPrimaryQuestion align="center" variant="h4">{NEUTERED_PRIMARY_TITLE(this.state.quesOutputPool)}</MuiStyledPrimaryQuestion>
                            {/*<MuiStyledSecondaryQuestionLabel align="center" variant="h6">*/}
                            {/*    {NEUTERED_SECONDARY_TITLE(this.state.quesOutputPool)}*/}
                            {/*</MuiStyledSecondaryQuestionLabel>*/}

                            <MultiChoiceInput
                                key ={this.neuteredMultiChoiceKey}
                                values = {NEUTERED_OPTIONS_KEYS}
                                defaultSelectionIndex = {NEUTERED_OPTIONS_KEYS.findIndex((ele)=>{return ele === this.state.quesOutputPool.dogNeutered;})}
                                onSelectionChanged={this.OnNeuteredSelectionChange}
                                ref={this.currentPageRef}
                                gridSetup ={DoubleStyledButtonContainer}
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
                            <MuiStyledPrimaryQuestion align="center" variant="h4">{BREED_PRIMARY_TITLE(this.state.quesOutputPool)}</MuiStyledPrimaryQuestion>
                            <MuiStyledSecondaryQuestionLabel align="center" variant="h6">
                                {BREED_SECONDARY_TITLE(this.state.quesOutputPool)}
                            </MuiStyledSecondaryQuestionLabel>


                            <MultiChoiceInput

                                key ={this.breedScoreMultiChoiceKey}
                                //todo adding complex structure here with strings
                                values = {BREED_OPTIONS_KEYS}
                                defaultSelectionIndex = {BREED_OPTIONS_KEYS.findIndex((ele)=>{return ele === this.state.quesOutputPool.dogBreed;})}
                                onSelectionChanged={this.OnBreedScoreSelectionChange}
                                ref={this.currentPageRef}
                                gridSetup ={PentaStyledButtonContainer}
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
                    console.log("breed question gained focus");


                }

            },



            {

                page : ()=>{
                    return (
                        <>

                            <h2>End Form Results</h2>
                            <h4>Rer = {this.getTempRer()}</h4>
                            <h4>Mer = {this.getTempMer()}</h4>
                            <h4>CalorificCover = {this.getTempCalorificCover()}</h4>






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
        this.getTempRer = this.getTempRer.bind(this);
        this.getTempMer = this.getTempMer.bind(this);
        this.getTempCalorificCover = this.getTempCalorificCover.bind(this);





    }




    getGenderGrid() {
        return (
                (props)=>{

                    return (<MuiStyledButtonContainer>
                        {props.children}
                    </MuiStyledButtonContainer>);

                }
            );

    }

    nameInputChange(event){
        // console.log("q1 changed "+event.target.value);


        event.preventDefault();
        event.persist();

        //validation
        // this.setState({nextBlocked : event.target.value === ""});



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

                return {quesOutputPool:clonedQuesPool,nextBlocked : event.target.value === ""};

            });

    }

    weightInputChange(event){

        event.preventDefault();
        event.persist();

        //validation
        // this.setState({nextBlocked : event.target.value === ""});



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

                return {quesOutputPool:clonedQuesPool,nextBlocked : event.target.value === ""};

            });

    }

    moveToNexPage(){
        // event.preventDefault();
        //TODO make changes to the prev and next button as necessary for this question
        //use dynamic props https://stackoverflow.com/questions/40868189/how-to-create-a-dynamic-prop-name-in-react

        // hookupNextButton();


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



    }

    onClickNextMultiChoiceDefault(event){
        this.moveToNexPage();

    }
    // onClickNextActivityMoveAhead(event){
    //
    //     this.moveToNexPage();
    //
    //
    // }
    // onClickNextNeuteredMoveAhead(event){
    //
    //     this.moveToNexPage();
    //
    //
    // }
    // onClickNextAgeMoveAhead(event){
    //
    //     this.moveToNexPage();
    //
    // }
    // onClickNextBodyScoreAhead(event){
    //
    //     this.moveToNexPage();
    //
    // }
    // onClickNextBreedAhead(event){
    //     this.moveToNexPage();
    // }


    onClickPrev(event){
        this.moveToPrevPage();
        // console.log("clicked prev");
    }

    //dog name information question handler
    OnDogNameInformationCollection(event){





        event.preventDefault();

        event.persist();
        // console.log("target value is "+event.target[0].value.toString());
        // console.log("target value is "+event.target.mainInput.value);


        this.setState(
            (state,props)=> {
                // let ques = this.getQuestionData(state.currentQues);
                //todo need a better solution for all this cloning.
                let clonedQuesPool = cloneDeep(state.quesOutputPool);
                clonedQuesPool.dogName = event.target.mainInput.value;


                return {quesOutputPool:clonedQuesPool};

            });



        this.moveToNexPage();


    }
    OnDogWeightInformationCollection(event){
        // console.log("here in weight collection");
        // console.log("the value of weight is "+ event.target.mainInput.value);

        event.preventDefault();
        event.persist();

        this.setState(
            (state,props)=> {
                // let ques = this.getQuestionData(state.currentQues);

                let clonedQuesPool = cloneDeep(state.quesOutputPool);
                clonedQuesPool.dogWeight = event.target.mainInput.value;

                return {quesOutputPool:clonedQuesPool};

            });



        this.moveToNexPage();


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
    OnAgeSelectionChange(arr){
        //todo cannot modify arr here at any cost !!!!!!

        for (let i =0 ;i< arr.length;i++ ){
            //first selection match algorithm
            if(arr[i] === 1){

                this.setState(
                    (state,props)=> {
                        let newPool = cloneDeep(state.quesOutputPool);
                        newPool.dogAge = AGE_OPTIONS_KEYS[i];
                        return {quesOutputPool : newPool};
                    }
                );
                return;
            }
        }



    }

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

    OnBreedScoreSelectionChange(arr){

        for (let i =0 ;i< arr.length;i++ ){
            //first selection match algorithm
            if(arr[i] === 1){

                this.setState(
                    (state,props)=> {
                        let newPool = cloneDeep(state.quesOutputPool);
                        newPool.dogBreed = BREED_OPTIONS_KEYS[i];
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

    totalStateString(){

        const dn = this.state.quesOutputPool.dogName;
        const dG = this.state.quesOutputPool.dogGender;

        const dW = this.state.quesOutputPool.dogWeight;
        const dA = this.state.quesOutputPool.dogActivity;
        const dne = this.state.quesOutputPool.dogNeutered;
        const dag = this.state.quesOutputPool.dogAge;
        const dBc = this.state.quesOutputPool.dogBodyScore;
        const dBr = this.state.quesOutputPool.dogBreed;





        return dn +" "+dG+" " + dW + " "+dA + " "+ dne +" "+dag +" "+dBc+" "+dBr;



    }









    // this.state.currentQues
    render() {
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


                        {/*todo move this inline style out*/}
                        <div style = {
                            {
                                "flexGrow": 1
                            }
                        }>
                        </div>

                        {/*<button onClick={this.onClickPrev} {... currentPage.prevButtonAttribs()} > Prev</button>*/}
                        <MuiButton
                            // color="secondary"
                            variant="contained"
                            color="primary"

                            onClick={this.onClickPrev}
                            {... currentPage.prevButtonAttribs()} >
                            Prev
                        </MuiButton>





                        {/*todo move this inline style out*/}
                        <div style = {
                            {
                            "flexGrow": 1
                            }
                        }>
                        </div>


                        {/*NOTE next button attribs ahead so questions can override behaviour*/}
                        {/*<button onClick={this.onClickNext} {... currentPage.nextButtonAttribs()} > Next</button>*/}
                        <MuiButton
                            variant="contained"
                            color="primary"
                            onClick={this.onClickNext}
                            {... currentPage.nextButtonAttribs()} >
                            Next
                        </MuiButton>


                        {/*todo move this inline style out*/}
                        <div style = {
                            {
                                "flexGrow": 1
                            }
                        }>
                        </div>

                    </MuiToolBar>
                </MuiStyledButtonBar>

                <p>value of all ques output is {this.totalStateString()}</p>

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
        this.temp_energy_requirements_mer = (this.temp_energy_requirements_rer*
                POSSIBLE_ACTIVITIES[this.state.quesOutputPool.dogActivity]*
                NEUTERED_OPTIONS[this.state.quesOutputPool.dogNeutered]*
                AGE_OPTIONS[this.state.quesOutputPool.dogAge]*
                BODY_SCORES[this.state.quesOutputPool.dogBodyScore]*
                BREED_OPTIONS[this.state.quesOutputPool.dogBreed]);
        return this.temp_energy_requirements_mer;


    }

    getTempCalorificCover() {
        this.temp_energy_requirements_calorific_cover = this.temp_energy_requirements_mer*AGE_CALORIFIC_OPTIONS[this.state.quesOutputPool.dogAge];
        return this.temp_energy_requirements_calorific_cover;


    }

}

export default ContainerForm;

