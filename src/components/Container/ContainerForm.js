import React from 'react';
import cloneDeep from 'lodash/cloneDeep';
import {isMobileOnly} from 'react-device-detect';





import MultiChoiceInput from "../Pages/MuitChoice/MultiChoiceInput";
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
} from "../../StaticData";
import {
    ACTIVITY_PRIMARY_TITLE,
    ACTIVITY_SECONDARY_TITLE,
    AGE_PRIMARY_TITLE,
    AGE_SECONDARY_TITLE,
    BODY_SCORE_PRIMARY_TITLE,
    BODY_SCORE_SECONDARY_TITLE,
    BODY_SCORES_STRINGS,
    BREED_PRIMARY_TITLE,
    BREED_SECONDARY_TITLE,
    GENDER_PRIMARY_TITLE,
    GENDER_SECONDARY_TITLE,
    NAME_PRIMARY_TITLE,
    NAME_SECONDARY_TITLE,
    NEUTERED_PRIMARY_TITLE,
    NEUTERED_SECONDARY_TITLE,
    POSSIBLE_ACTIVITY_STRINGS,
    THANK_YOU_PRIMARY_MESSAGE,
    USER_PRIMARY_TITLE,
    // NEUTERED_SECONDARY_TITLE,
    WEIGHT_PRIMARY_TITLE,
    WEIGHT_SECONDARY_TITLE,

} from "../../StaticText";



import MuiStyledProgressBar from "../MuiStyledProgressBar"
import MuiStyledPrimaryQuestion from "../Pages/PrimaryQuestionLabel";
import MuiStyledSecondaryQuestionLabel from "../Pages/SecondaryQuestionLabel";
import MuiStyledButtonBar from "../Pages/BottomBar";

import MuiToolBar from "@material-ui/core/Toolbar"
import MuiButton from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles"



import {MuiStyledWeightForm} from "../Pages/Forms/Weight/WeigthtForm";


import MuiStyledAgeForm from "../Pages/Forms/AgeForm"
import MuiStyledNameForm from "../Pages/Forms/NameForm"

import StandardStyleContainer, {StandardStyleImageContainer} from "../Pages/ButtonContainer";

import FlexDiv from "../helper/FlexDiv";
import OwnerForm from "../Pages/Owner/OwnerForm";
import DivButton, {StyledDiv} from "../Pages/MuitChoice/DivButton/DivButton";
import MuiStyledChoiceButton from "../Pages/MuitChoice/choice/MuiStyledChoiceButton";
import MuiStyledChoiceImage from "../Pages/MuitChoice/choice/MuiStyledChoiceImage";


import skinnySelectedImage from "../../svgs/bodyScore/normal-skinny--selected.svg";
import skinnyImage from "../../svgs/bodyScore/normal-skinny.svg";

import justRightSelectedImage from "../../svgs/bodyScore/normal-just-right--selected.svg";
import justRightImage from "../../svgs/bodyScore/normal-just-right.svg";


import chubbySelectedImage from "../../svgs/bodyScore/normal-chubby--selected.svg";
import chubbyImage from "../../svgs/bodyScore/normal-chubby.svg";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {emptyDivStyles, flexStyledDiv, fullHeightStyles, imageTripleDivStyles} from "../helper/styles/DivStyles";


import lazySelectedImage from "../../svgs/activity/normal-lazy-bones--selected.svg";
import lazyImage from "../../svgs/activity/normal-lazy-bones.svg";

import activeSelectedImage from "../../svgs/activity/normal-fairly-active--selected.svg";
import activeImage from "../../svgs/activity/normal-fairly-active.svg";

import hyperActiveSelectedImage from "../../svgs/activity/normal-hyperactive--selected.svg";
import hyperActiveImage from "../../svgs/activity/normal-hyperactive.svg";
import HelperBox from "../Pages/MuitChoice/HelperBox";
import MovementButton from "../Pages/MovementButton";





import {API} from "../../backend/api"
import {capitalizeFirstLetterAndLowerCaseRest, isDev} from "../../helper/utilities";
import CircularProgress from "@material-ui/core/CircularProgress";
import VerticalSpacerDiv from "../helper/VerticalSpacerDiv";
import MuiStyledBreedForm from "../Pages/Forms/BreedForm";
import MuiStyledUserForm from "../Pages/Forms/User/UserForm";
import {
    getCalorieMin,
    getCaloriesMax,
    getCalorificCover,
    getDogAgeBracket,
    getDogBreedCategory,
    getDogBreedType,
    getMer,
    getRer
} from "./containerHelper";
import InputAdornment from "@material-ui/core/InputAdornment";


const BODY_SCORE_SVGS = [
    skinnySelectedImage,
    skinnyImage,
    justRightSelectedImage,
    justRightImage,
    chubbySelectedImage,
    chubbyImage


]
const ACTIVITY_SVGS = [

    lazySelectedImage,
    lazyImage,
    activeSelectedImage,
    activeImage,
    hyperActiveSelectedImage,
    hyperActiveImage

]






const containerStyles =  theme => ({

});


class ContainerForm extends React.Component{


    //todo refactor this

    postData(){

        const createUserData = async () => {


            console.log("post began");

            //todo this statement needs to be evaluated
            let data = cloneDeep(this.state.quesOutputPool);


            data['dogBreedType'] = getDogBreedType(
                this.state.quesOutputPool.dogBreedCategoryUnknown,
                this.state.quesOutputPool.dogBreedCategoriesIndex);

            data['dogBreedCategory'] = getDogBreedCategory(
                                        this.state.quesOutputPool.dogBreedCategoryUnknown,
                                        this.state.quesOutputPool.dogBreedCategoriesIndex);

            console.log("post data");
            console.log(data);


            let res = await API.post('/form-data',data);

            console.log("res is "+res);


            //todo check if this needed
            return 1;


        }



        //updater callback makes the post request
        this.setState({ isPostingData: true },
            ()=>{
                //on complete of request set back the state to default state.
                createUserData().then((value)=>{
                    console.log("post data done "+value.toString());
                    this.setState({ isPostingData: false });
                });

            });






        // console.log("called post data");
    }




    handleUserInputChange(event) {

        event.persist();
        // console.log("value is user input prop "+event.target.value);
        // console.log("value is user input prop "+event.target.name);

        const { name, value } = event.target;

        this.setState(
            (state,props)=> {
                // let ques = this.getQuestionData(state.currentQues);
                //todo need a better solution for all this cloning.
                //todo use immutability-helper here
                let clonedQuesPool = cloneDeep(state.quesOutputPool);
                clonedQuesPool.user = {
                    ...state.quesOutputPool.user,
                    [name] : value
                }


                return {quesOutputPool:clonedQuesPool};

            });

    }
    validateUserInputBeforeSubmit(){


        let temp = {}
        const arr = Object.keys(this.state.quesOutputPool.user);
        const funcObj = {}


        for(let i =0 ;i < arr.length; i++ ){
            funcObj[arr[i]] = (value)=>{return "";}

        }
        funcObj[arr[0]] = (value) =>{
            return value ? "":"This field is required";

        }
        funcObj[arr[1]] = (value) => {

            const test0 = value !== "";
            if(!test0) return "This field is required";

            const test1 = value.length === 10;
            if(!test1) return "Enter a 10 digit mobile number";
            const test2 = /^\d+$/.test(value);
            if(!test2) return "Please enter a valid number";

            return "";

        }

        funcObj[arr[2]] = (value) => {
            const test1 = value.length === 6;
            if(!test1) return "Please enter a 6 digit Pin Code";
            const test2 = /^\d+$/.test(value);
            if(!test2) return "Please enter a valid Pin Code";

            //todo test the pincode for the valid places
            // const test3 = "";
            // if(!test3) return "Currently not deliver to the address"

            return "";

        }


        funcObj[arr[3]] = (value) =>{




            const test1 = value !=="";



            if(!test1) {
                //made email optional
                return "";
                // return "This field is required";
            }
            const test2 = (/$^|.+@.+..+/).test(value);
            if(!test2)return "Enter a valid email address";

            return "";


        }

        for(let i =0 ;i < arr.length; i++ ){
            temp[arr[i]] = (funcObj[arr[i]])(this.state.quesOutputPool.user[arr[i]]);
            // temp[props.fieldData.names[0]] = props.fieldData.values[0] ? "":"This field is required";

        }
        console.log("printing temp");
        console.log(temp);


        this.setState(
            (state,props)=> {
                // let ques = this.getQuestionData(state.currentQues);
                //todo need a better solution for all this cloning.
                //todo use immutability-helper here
                // let clonedQuesPool = cloneDeep(state.quesOutputPool);
                // clonedQuesPool.error = {
                //     ...state.quesOutputPool.user,
                //     errors : temp
                // }

                return {userErrors:temp};

            });



        // this.updateUserInputErrorState(temp);
        // setErrors({
        //     ...temp
        // });
        return Object.values(temp).every(x => x==="" );



    }
    onClickNextUserFormAhead(event){
        event.preventDefault();

        if(this.validateUserInputBeforeSubmit()){

            //make sure overflow is hidden for the next question.
            this.makeOverflowHidden();
            this.moveToNexPage();
        }
        console.log("fired on click next form ahead");


    }



    handleUserInputGainFocus(name,event){
        console.log("handle user input focus gain "+name);

        // console.log(this);

        this.makeOverflowVisible();

        // if (e.currentTarget === e.target) {
        //     console.log("focus (self)");
        // }
        // if (!e.currentTarget.contains(e.relatedTarget)) {
        //     console.log("focusenter");
        // }

    }

    handleUserInputFocusLoss(name) {
        console.log("handle user input focus loss " + name);
        // this.validateUserInputBeforeSubmit();
        this.makeOverflowHidden();




    }

    updateUserInputErrorState(temp) {
        console.log("here value is "+temp);


    }
    onFormSubmitAbsorbUserForm(event){
        event.preventDefault();
        console.log("this is user form absorb");



    }



    constructor(props) {
        super(props);



        this.dogNameFormID = "name-form";
        this.dogWeightFormID = "weight-form";
        this.dogBreedFormID = "breed-form";
        this.dogAgeFormID = "age-form";
        this.userFormID = "user-form";



        this.genderMultiChoiceKey = "gender-multi-choice";

        this.activityMultiChoiceKey = "activity-multi-choice";
        this.neuteredMultiChoiceKey = "neutered-multi-choice";
        this.nameInputKey = "name-key";
        this.weightInputKey = "weight-key";
        this.ageInputKey = "age-key";
        this.bodyScoreMultiChoiceKey = "body-score-key";
        this.breedSelectKey = "breed-key";
        this.userSelectKey =  "user-key";


        this.dogYearNameIdentifier ="dog-year-name";
        this.dogMonthNameIdentifier ="dog-month-name";





        //only set values like this in the constructor
        this.state = {
            //todo reset to zero in prod

            currentQues : isDev() ? 8 : 0 ,
            AppBarVisibility : true,
            isPostingData : false,
            //initialized with default values
            quesOutputPool : {
                dogName : "",
                dogGender : POSSIBLE_GENDERS_KEYS[0],
                dogWeight : 0,
                dogActivity  : POSSIBLE_ACTIVITIES_KEYS[1],
                dogNeutered  : NEUTERED_OPTIONS_KEYS[0],
                // dogAge       : "",
                dogAgeYears  : 0,
                dogAgeMonths  : 0,

                dogBodyScore : BODY_SCORES_KEYS[0],

                dogBreedCategoriesIndex : -1,
                dogBreedCategoryUnknown : false,


                user : {
                    userName: "",
                    //indian phone number only
                    mobile : "",
                    pinCode : "",

                    //todo email validation
                    email : "",


                }


            },
            weightErrors : "",
            userErrors : {}



        };



        //avoid using this as much as possible.
        this.currentPageRef = React.createRef();


        this.nameInputChange = this.nameInputChange.bind(this);

        this.nameFieldFocus = this.nameFieldFocus.bind(this);
        this.nameFieldBlur = this.nameFieldBlur.bind(this);


        this.weightInputChange = this.weightInputChange.bind(this);
        this.breedSelectionChange = this.breedSelectionChange.bind(this);
        this.breedUnknownCheckboxChange = this.breedUnknownCheckboxChange.bind(this);


        this.ageInputChange = this.ageInputChange.bind(this);


        this.handleUserInputChange = this.handleUserInputChange.bind(this);
        this.validateUserInputBeforeSubmit = this.validateUserInputBeforeSubmit.bind(this);
        this.updateUserInputErrorState =  this.updateUserInputErrorState.bind(this);
        this.onFormSubmitAbsorbUserForm = this.onFormSubmitAbsorbUserForm.bind(this);
        this.handleUserInputFocusLoss = this.handleUserInputFocusLoss.bind(this);





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
        this.onClickNextUserFormAhead = this.onClickNextUserFormAhead.bind(this);




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


        //validation methods
        this.isValidAge = this.isValidAge.bind(this);




        //backend method
        this.postData = this.postData.bind(this);



        this.hideAppBar = this.hideAppBar.bind(this);
        this.showAppBar = this.showAppBar.bind(this);




        this.handleUserInputGainFocus = this.handleUserInputGainFocus.bind(this);
        this.handleUserInputFocusLoss = this.handleUserInputFocusLoss.bind(this);


        this.makeOverflowHidden  = this.makeOverflowHidden.bind(this);
        this.makeOverflowVisible = this.makeOverflowVisible.bind(this);


        //array of function components.
        this.pages = [




            {
                //layout is the first thing here
                page : ()=>{
                    return (
                        <>

                            <MuiStyledPrimaryQuestion>

                                    <> {NAME_PRIMARY_TITLE(this.state.quesOutputPool)[0]} </>
                                    <br/>
                                    <>{NAME_PRIMARY_TITLE(this.state.quesOutputPool)[1]}</>


                                {/*}*/}
                            </MuiStyledPrimaryQuestion>


                            <MuiStyledNameForm
                                secondaryText = {NAME_SECONDARY_TITLE(this.state.quesOutputPool)}
                                formOnSubmit={this.onFormSubmitAbsorb}
                                formId = {this.dogNameFormID}
                                keyVal={this.nameInputKey}
                                onChange = {this.nameInputChange}
                                textValue = {this.state.quesOutputPool.dogName}
                                onNameFieldFocus = {this.nameFieldFocus}
                                onNameFieldBlur = {this.nameFieldBlur}

                            >


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
                            <MuiStyledPrimaryQuestion>{AGE_PRIMARY_TITLE(this.state.quesOutputPool)}</MuiStyledPrimaryQuestion>
                            <MuiStyledSecondaryQuestionLabel align="center" variant="h6">
                                {AGE_SECONDARY_TITLE(this.state.quesOutputPool)}
                            </MuiStyledSecondaryQuestionLabel>



                            <MuiStyledAgeForm
                                formOnSubmit={this.onFormSubmitAbsorb}
                                formId = {this.dogAgeFormID}
                                keyVal={this.ageInputKey}
                                onChange = {this.ageInputChange}
                                years_name = {this.dogYearNameIdentifier}
                                months_name = {this.dogMonthNameIdentifier}
                                //todo check the or bug possibility here with 0
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
                            <MuiStyledPrimaryQuestion>{BREED_PRIMARY_TITLE(this.state.quesOutputPool)}</MuiStyledPrimaryQuestion>
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
                                        BREED_CATEGORIES_LIST[this.state.quesOutputPool.dogBreedCategoriesIndex]
                                }

                                checkBoxValue      = {this.state.quesOutputPool.dogBreedCategoryUnknown}
                                onSelectionChanged = {this.breedSelectionChange}
                                onCheckBoxChanged  = {this.breedUnknownCheckboxChange}




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
                        disabled: this.state.quesOutputPool.dogBreedCategoriesIndex === -1
                                && !this.state.quesOutputPool.dogBreedCategoryUnknown,
                        onClick:this.onClickNextFormAhead
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
                            <MuiStyledPrimaryQuestion >{NEUTERED_PRIMARY_TITLE(this.state.quesOutputPool)}</MuiStyledPrimaryQuestion>
                            <MuiStyledSecondaryQuestionLabel align="center" variant="h6">
                                {NEUTERED_SECONDARY_TITLE(this.state.quesOutputPool)}
                            </MuiStyledSecondaryQuestionLabel>

                            <MultiChoiceInput
                                key ={this.neuteredMultiChoiceKey}
                                numChoices = {NEUTERED_OPTIONS_KEYS.length}
                                defaultSelectionIndex = {NEUTERED_OPTIONS_KEYS.findIndex((ele)=>{return ele === this.state.quesOutputPool.dogNeutered;})}
                                onSelectionChanged={this.OnNeuteredSelectionChange}
                                ref={this.currentPageRef}



                                divStyle = {emptyDivStyles}
                                gridSetup ={StandardStyleContainer}
                                Clickable = {MuiStyledChoiceButton}
                                ClickableSetupData = {
                                    NEUTERED_OPTIONS_KEYS
                                }
                                ClickableMaker={
                                    NEUTERED_OPTIONS_KEYS.map((item,index)=>{

                                        return (

                                            (MuiStyledChoiceButton,data) => props =>(
                                                <MuiStyledChoiceButton {...props}>
                                                    {data}
                                                </MuiStyledChoiceButton>
                                            )


                                        );


                                    }
                                    )



                                }
                            >


                            </MultiChoiceInput>



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
                            <MuiStyledPrimaryQuestion >{GENDER_PRIMARY_TITLE(this.state.quesOutputPool)}</MuiStyledPrimaryQuestion>

                            <MuiStyledSecondaryQuestionLabel align="center" variant="h6">
                                {GENDER_SECONDARY_TITLE(this.state.quesOutputPool)}
                            </MuiStyledSecondaryQuestionLabel>

                            <MultiChoiceInput
                                key ={this.genderMultiChoiceKey}
                                numChoices = {POSSIBLE_GENDERS_KEYS.length}
                                defaultSelectionIndex = {POSSIBLE_GENDERS_KEYS.findIndex((ele)=>{return ele === this.state.quesOutputPool.dogGender;})}
                                onSelectionChanged={this.OnGenderSelectionChange}
                                ref={this.currentPageRef}


                                divStyle = {emptyDivStyles}
                                gridSetup ={StandardStyleContainer}
                                Clickable = {MuiStyledChoiceButton}
                                ClickableSetupData = {
                                    POSSIBLE_GENDERS_KEYS
                                }
                                ClickableMaker={
                                    POSSIBLE_GENDERS_KEYS.map((item,index)=>{

                                            return (

                                                (MuiStyledChoiceButton,data) => props =>(
                                                    <MuiStyledChoiceButton {...props}>
                                                        {data}
                                                    </MuiStyledChoiceButton>
                                                )


                                            );


                                        }
                                    )



                                }


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

                            <MuiStyledPrimaryQuestion >{ACTIVITY_PRIMARY_TITLE(this.state.quesOutputPool)}</MuiStyledPrimaryQuestion>
                            <MuiStyledSecondaryQuestionLabel align="center" variant="h6">
                                {ACTIVITY_SECONDARY_TITLE(this.state.quesOutputPool)}
                            </MuiStyledSecondaryQuestionLabel>

                            <MultiChoiceInput
                                key ={this.activityMultiChoiceKey}
                                numChoices = {POSSIBLE_ACTIVITIES_KEYS.length}
                                defaultSelectionIndex = {POSSIBLE_ACTIVITIES_KEYS.findIndex((ele)=>{return ele === this.state.quesOutputPool.dogActivity;})}
                                onSelectionChanged={this.OnActivitySelectionChange}
                                ref={this.currentPageRef}

                                helperBox = {
                                    {
                                        component: HelperBox,
                                        data : POSSIBLE_ACTIVITY_STRINGS(this.state.quesOutputPool)

                                    }
                                }



                                //todo replace here if needed using body score styles
                                divStyle = {imageTripleDivStyles}
                                gridSetup ={StandardStyleImageContainer}
                                Clickable = {MuiStyledChoiceImage}
                                ClickableSetupData = {
                                    POSSIBLE_ACTIVITIES_KEYS.map((item,index)=> (
                                            {
                                                selected : ACTIVITY_SVGS[2*index],
                                                normal   : ACTIVITY_SVGS[2*index+1],
                                                imgWidthPercent : 100,

                                            }
                                        )

                                    )

                                }
                                ClickableMaker={
                                    POSSIBLE_ACTIVITIES_KEYS.map((item,index)=>{

                                            return (

                                                (MuiStyledChoiceImage,data) => {

                                                    return props => (
                                                        <MuiStyledChoiceImage {...props}
                                                                              selectedImg = {data.selected}
                                                                              normalImg = {data.normal}
                                                                              widthPercent = {data.imgWidthPercent}

                                                        >
                                                        </MuiStyledChoiceImage>

                                                    )

                                                }


                                            );


                                        }
                                    )



                                }
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
                            <MuiStyledPrimaryQuestion >{BODY_SCORE_PRIMARY_TITLE(this.state.quesOutputPool)}</MuiStyledPrimaryQuestion>
                            <MuiStyledSecondaryQuestionLabel align="center" variant="h6">
                                {BODY_SCORE_SECONDARY_TITLE(this.state.quesOutputPool)}
                            </MuiStyledSecondaryQuestionLabel>


                            <MultiChoiceInput

                                key ={this.bodyScoreMultiChoiceKey}
                                numChoices = {BODY_SCORES_KEYS.length}
                                defaultSelectionIndex = {BODY_SCORES_KEYS.findIndex((ele)=>{return ele === this.state.quesOutputPool.dogBodyScore;})}
                                onSelectionChanged={this.OnBodyScoreSelectionChange}
                                ref={this.currentPageRef}




                                helperBox = {
                                    {
                                        component: HelperBox,
                                        data : BODY_SCORES_STRINGS(this.state.quesOutputPool)

                                    }
                                }



                                divStyle = {imageTripleDivStyles}
                                gridSetup ={StandardStyleImageContainer}
                                Clickable = {MuiStyledChoiceImage}
                                ClickableSetupData = {
                                    BODY_SCORES_KEYS.map((item,index)=> (
                                            {
                                               selected : BODY_SCORE_SVGS[2*index],
                                               normal   : BODY_SCORE_SVGS[2*index+1],
                                               imgWidthPercent : 100
                                            }
                                        )

                                    )

                                }
                                ClickableMaker={
                                    BODY_SCORES_KEYS.map((item,index)=>{

                                            return (

                                                (MuiStyledChoiceImage,data) => {

                                                    return props => (
                                                        <MuiStyledChoiceImage {...props}
                                                          selectedImg = {data.selected}
                                                          normalImg = {data.normal}
                                                          widthPercent = {data.imgWidthPercent} >
                                                        </MuiStyledChoiceImage>

                                                    )

                                                }


                                            );


                                        }
                                    )



                                }
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
                            <MuiStyledPrimaryQuestion >{WEIGHT_PRIMARY_TITLE(this.state.quesOutputPool)}</MuiStyledPrimaryQuestion>
                            <MuiStyledSecondaryQuestionLabel align="center" variant="h6">
                                {WEIGHT_SECONDARY_TITLE(this.state.quesOutputPool)}
                            </MuiStyledSecondaryQuestionLabel>


                            <MuiStyledWeightForm
                                formOnSubmit={this.onFormSubmitAbsorb}
                                formId = {this.dogWeightFormID}
                                keyVal={this.weightInputKey}
                                onChange = {this.weightInputChange}
                                textValue = {this.state.quesOutputPool.dogWeight || ""}
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
                        disabled: this.state.quesOutputPool.dogWeight === 0,
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
                            <MuiStyledPrimaryQuestion >{USER_PRIMARY_TITLE(this.state.quesOutputPool)}</MuiStyledPrimaryQuestion>
                            {/*<MuiStyledSecondaryQuestionLabel align="center" variant="h6">*/}
                            {/*    {WEIGHT_SECONDARY_TITLE(this.state.quesOutputPool)}*/}
                            {/*</MuiStyledSecondaryQuestionLabel>*/}


                            <MuiStyledUserForm
                                formOnSubmit={this.onFormSubmitAbsorb}
                                formId = {this.userFormID}
                                keyVal={this.userSelectKey}

                                dogName = {this.state.quesOutputPool.dogName}
                                handleInputChange = {this.handleUserInputChange}
                                handleFocusGain =  {this.handleUserInputGainFocus}
                                handleFocusLoss =  {this.handleUserInputFocusLoss}
                                fieldData = {
                                    {
                                        names  : Object.keys(this.state.quesOutputPool.user),
                                        // ["name","mobile", "pin","email"],
                                        labels : ["* Full Name","* Mobile","* Pin Code","Email"],
                                        values : Object.values(this.state.quesOutputPool.user),
                                        errors : Object.values(this.state.userErrors),
                                        adornment : [
                                            {},
                                            {

                                                startAdornment: <InputAdornment position="start">+91</InputAdornment>
                                            },
                                            {},
                                            {}

                                        ]

                                        // errors : [0,0,0,0]
                                    }
                                }
                            >

                            </MuiStyledUserForm>






                        </>);


                },
                prevButtonAttribs : ()=>  {
                    return {};
                },
                nextButtonAttribs : () =>{
                    return {
                        type: "submit",
                        form: this.userFormID,
                        disabled: false,
                        onClick: this.onClickNextUserFormAhead


                    };
                },
                onGainFocus : ()=> {
                    console.log("user form question gained focus");


                }

            },






            {

                page : ()=>{
                    return (
                        <>


                            {
                                this.state.isPostingData?

                                    <>
                                        <VerticalSpacerDiv minHeight = {new Array(5).fill(this.props.theme.spacing(4))}/>

                                        <StyledDiv stylePropsFunc={flexStyledDiv} >


                                            <FlexDiv grow = {1} />
                                            <CircularProgress color="secondary" size={"5rem"}/>
                                            <FlexDiv grow = {1}/>
                                        </StyledDiv>


                                    </>
                                    :
                                    <>

                                        <MuiStyledPrimaryQuestion >That's it! Thank you for taking a step ahead for a better life for your pooch.</MuiStyledPrimaryQuestion>

                                        <MuiStyledSecondaryQuestionLabel align="center" variant="h6">
                                            {
                                                THANK_YOU_PRIMARY_MESSAGE(
                                                    this.state.quesOutputPool,
                                                    Math.floor(getCalorieMin(this.state.quesOutputPool)) || 0,
                                                    Math.floor(getCaloriesMax(this.state.quesOutputPool)) || 0
                                                )
                                            }

                                        </MuiStyledSecondaryQuestionLabel>



                                    </>

                            }







                            {
                                isDev() ?
                                    <>
                                        <button onClick={this.postData}>
                                            post button
                                        </button>
                                        <h4>Min Calories = {getCalorieMin(this.state.quesOutputPool)}</h4>
                                        <h4>Max Calories = {getCaloriesMax(this.state.quesOutputPool)}</h4>
                                        <h4>Rer = {getRer(this.state.quesOutputPool.dogWeight)}</h4>
                                        <h4>Mer = {getMer(this.state.quesOutputPool)}</h4>
                                        <h4>CalorificCover = {getCalorificCover(this.state.quesOutputPool)}</h4>



                                    </>
                                    :
                                    <>
                                    </>

                            }




                        </>);


                },
                prevButtonAttribs : ()=> {
                    return {
                    };
                },
                nextButtonAttribs : ()=> {
                    return {
                        disabled : true
                    };

                },
                onGainFocus : ()=> {
                    //todo this will resubmit each time user re enters the
                    //todo form.Need to fix this in the future
                    //todo also time out and inform user about the problem.
                    this.postData();
                    console.log("end question gained focus");

                }

            },




        ];



        // document.addEventListener('focusout', function(e) {
        //     console.log("focus out called");
        //     window.scrollTo(0, 0);
        //     // this.makeOverflowHidden();
        //     document.body.classList.add('make-overflow-visible');
        //     document.body.classList.remove('make-overflow-hidden');
        //
        //
        //     document.documentElement.scrollTop = 0;
        //
        // });





    }

    makeOverflowHidden(){
        document.body.classList.remove('make-overflow-visible');
        document.body.classList.add('make-overflow-hidden');



    }
    makeOverflowVisible(){
        document.body.classList.remove('make-overflow-hidden');
        document.body.classList.add('make-overflow-visible');

    }




    nameFieldFocus(){

        // if (isMobileOnly) {
        //     console.log("gained focus on mobile hiding the app bar");
        // }


        // console.log("field focus in "+event.target.value);


    }
    nameFieldBlur(){

        // if(isMobileOnly){
        //     console.log("blur focus on mobile");
        // }
        // console.log("lost focus");

        // console.log("field blur in "+event.target.value);

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



                clonedQuesPool.dogName = capitalizeFirstLetterAndLowerCaseRest(event.target.value);



                return {quesOutputPool:clonedQuesPool};

            });

    }

    weightInputChange(event){

        event.preventDefault();
        event.persist();


        //validation
        //todo validate here
        const value = event.target.value;

        //need to persist event for the callback of setstate
        // event.persist();
        //NOTE set state function is asynchronous.

        this.setState(
            (state,props)=> {
                // let ques = this.getQuestionData(state.currentQues);
                //todo need a better solution for all this cloning.
                let clonedQuesPool = cloneDeep(state.quesOutputPool);
                //todo error checking here
                clonedQuesPool.dogWeight = value;

                return {quesOutputPool:clonedQuesPool};

            }
        );

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
    breedUnknownCheckboxChange(event) {
        // event.persist();
        const toggleState = event.target.value;

        console.log("called toggle "+event.target.value);

        this.setState(
            (state,props)=> {

                //todo need a better solution for all this cloning.
                let clonedQuesPool = cloneDeep(state.quesOutputPool);
                clonedQuesPool.dogBreedCategoryUnknown = toggleState;
                return {quesOutputPool:clonedQuesPool};

            });



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

                return {
                    currentQues: (state.currentQues < this.pages.length - 1) ? state.currentQues+1 : state.currentQues,
                    //default value keep app bar visible.
                    AppBarVisibility : true
                };
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
        // event.stopPropagation();
        event.preventDefault();

        console.log("fired on click next multi choice");
        this.moveToNexPage();

    }

    onClickNextFormAhead(event){
        event.preventDefault();
        console.log("fired on click next form ahead");
        this.moveToNexPage();


    }

    onFormSubmitAbsorb(event){

        //absorb the page refresh event on form submit.
        event.preventDefault();
        console.log("submit absorbed");

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



        const userName = this.state.quesOutputPool.user.userName;
        const email = this.state.quesOutputPool.user.email;
        const mobile = this.state.quesOutputPool.user.mobile;
        const pinCode = this.state.quesOutputPool.user.pinCode;


        return dn +" "+dG+" " + dW + " "+dA + " "+ dne +" "
            + dagY +" "+dagM
            +" "
            +dBc
            // +" "+this.getDogBreedCategory(this.state.quesOutputPool.dogBreedCategoriesIndex)
            +" age bracket "+getDogAgeBracket(dagY,dagM)
            +"\n"
            +userName + " "
            +email + " "
            +mobile + " "
            +pinCode;


    }









    // this.state.currentQues
    render() {






        const currentPage = this.getPageData(this.state.currentQues);
        const progressScore = ((this.state.currentQues + 1) / this.pages.length) * 100;


        // var innerScreenHeight = window.innerHeight;
        // document.querySelector("#footer").style.top = innerScreenHeight + "px";

        return (

            <>

                <StyledDiv stylePropsFunc={fullHeightStyles}>


                    <MuiStyledProgressBar variant="determinate" value={progressScore}/>
                    {currentPage.page()}



                    {isDev() ? <p>value of all ques output is {this.totalStateString()}</p> : <> </>}

                </StyledDiv>

                <MuiStyledButtonBar visible = {this.state.AppBarVisibility}>

                    <MuiToolBar>

                        <FlexDiv grow = {1} />


                        {/*<button onClick={this.onClickPrev} {... currentPage.prevButtonAttribs()} > Prev</button>*/}
                        <MovementButton
                            // color="secondary"
                            variant="outlined"
                            color="primary"

                            onClick={this.onClickPrev}
                            {... currentPage.prevButtonAttribs()} >
                            Prev
                        </MovementButton>


                        <FlexDiv grow={3} />


                        {/*NOTE next button attribs ahead so questions can override behaviour*/}
                        {/*<button onClick={this.onClickNext} {... currentPage.nextButtonAttribs()} > Next</button>*/}
                        <MovementButton
                            variant="outlined"
                            color="primary"
                            onClick={this.onClickNext}
                            {... currentPage.nextButtonAttribs()} >
                            Next
                        </MovementButton>


                        <FlexDiv grow={1} />


                    </MuiToolBar>
                </MuiStyledButtonBar>


                </>


        );
    }





    isValidAge() {


        return false;
    }



    hideAppBar(){



        this.setState(
            (state,props)=> {
                return {
                    AppBarVisibility : false
                };
            });

    }

    showAppBar(){

        this.setState(
            (state,props)=> {
                return {
                    AppBarVisibility : true
                };
            });
    }

}


export default withStyles(containerStyles, { withTheme: true })(ContainerForm)
// export default ContainerForm;

