import React from 'react';
import cloneDeep from 'lodash/cloneDeep';

import ProgressBar from "./ProgressBar";

import MultiChoiceInput from "./Pages/MultiChoiceInput";
import {NEUTERED_OPTIONS_KEYS,POSSIBLE_ACTIVITIES_KEYS} from "../StaticData";
import {
    ACTIVITY_PRIMARY_TITLE, ACTIVITY_SECONDARY_TITLE,
    NAME_PRIMARY_TITLE,
    NAME_SECONDARY_TITLE, NEUTERED_PRIMARY_TITLE, NEUTERED_SECONDARY_TITLE,
    WEIGHT_PRIMARY_TITLE,
    WEIGHT_SECONDARY_TITLE
} from "../StaticText";

class ContainerForm extends React.Component{






    constructor(props) {
        super(props);



        this.dogNameFormID = "name-form";
        this.dogWeightFormID = "weight-form";

        this.activityMultiChoiceKey = "activity-multi-choice";
        this.neuteredMultiChoiceKey = "neutered-multi-choice";
        this.nameInputKey = "name-key";
        this.weightInputKey = "weight-key";





        //only set values like this in the constructor
        this.state = {
            currentQues : 0,
            //initialized with default values
            quesOutputPool : {
                dogName : "",
                dogWeight : "",
                dogActivity : POSSIBLE_ACTIVITIES_KEYS[1],
                dogNeutered : NEUTERED_OPTIONS_KEYS[0],
                age:"4-12",
                bodyScore : 1,
                breed : "toy",
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
        this.onClickNextActivityMoveAhead = this.onClickNextActivityMoveAhead.bind(this);
        this.onClickNextNeuteredMoveAhead = this.onClickNextNeuteredMoveAhead.bind(this);





        this.OnDogNameInformationCollection = this.OnDogNameInformationCollection.bind(this);
        this.OnDogWeightInformationCollection = this.OnDogWeightInformationCollection.bind(this);
        this.OnActivitySelectionChange = this.OnActivitySelectionChange.bind(this);
        this.OnNeuteredSelectionChange = this.OnNeuteredSelectionChange.bind(this);






        this.getPageData = this.getPageData.bind(this);


        this.renderPage = this.renderPage.bind(this);
        this.totalStateString = this.totalStateString.bind(this);


        //getter methods for data collected.
        this.getCurrentDogName = this.getCurrentDogName.bind(this);


        //array of function components.
        this.pages = [




            {
                //layout is the first thing here
                page : ()=>{
                    return (
                        <>
                            {/*Todo might need controlled components for this later*/}
                            <h2>{NAME_PRIMARY_TITLE(this.state.quesOutputPool)}</h2>
                            <h4>{NAME_SECONDARY_TITLE(this.state.quesOutputPool)}</h4>
                            <form onSubmit={this.OnDogNameInformationCollection}
                                  id={this.dogNameFormID}
                                  key={this.nameInputKey}>
                                <input
                                    type="text"
                                    placeholder="Your dog's name"
                                    onChange={this.nameInputChange}
                                    name="mainInput"
                                    //TODO use this to sustain values.
                                    value= {this.state.quesOutputPool.dogName}
                                />

                            </form>




                        </>);


                },

                prevButtonAttribs : () => {
                    return {};
                },
                nextButtonAttribs : ()=> {
                    return {
                        type: "submit", form: this.dogNameFormID,
                        disabled: this.state.nextBlocked
                    };
                },



            },
            {

                page : ()=>{
                    return (
                        <>
                            {/*Todo might need controlled components for this later*/}
                            <h2>{WEIGHT_PRIMARY_TITLE(this.state.quesOutputPool)}</h2>
                            <h4>{WEIGHT_SECONDARY_TITLE(this.state.quesOutputPool)}</h4>
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
                //todo replace question with page
                page : ()=>{
                    return (
                        <>
                            {/*Todo might need controlled components for this later*/}
                            <h2>{ACTIVITY_PRIMARY_TITLE(this.state.quesOutputPool)}</h2>
                            <h4>{ACTIVITY_SECONDARY_TITLE(this.state.quesOutputPool)}</h4>
                            <MultiChoiceInput
                                         key ={this.activityMultiChoiceKey}
                                         values = {POSSIBLE_ACTIVITIES_KEYS}
                                         defaultSelectionIndex = {POSSIBLE_ACTIVITIES_KEYS.findIndex((ele)=>{return ele === this.state.quesOutputPool.dogActivity;})}
                                         onSelectionChanged={this.OnActivitySelectionChange}
                                         ref={this.currentPageRef}/>



                        </>);


                },
                prevButtonAttribs : ()=> {
                    return {};
                },
                nextButtonAttribs : ()=> {
                    return {onClick:this.onClickNextActivityMoveAhead};

                },
                onGainFocus : ()=> {
                    console.log("activity question gained focus");


                }

            },
            {

                page : ()=>{
                    return (
                        <>
                            {/*Todo might need controlled components for this later*/}
                            <h2>{NEUTERED_PRIMARY_TITLE(this.state.quesOutputPool)}</h2>
                            <h4>{NEUTERED_SECONDARY_TITLE(this.state.quesOutputPool)}</h4>
                            <MultiChoiceInput
                                key ={this.neuteredMultiChoiceKey}
                                values = {NEUTERED_OPTIONS_KEYS}
                                defaultSelectionIndex = {NEUTERED_OPTIONS_KEYS.findIndex((ele)=>{return ele === this.state.quesOutputPool.dogNeutered;})}
                                onSelectionChanged={this.OnNeuteredSelectionChange}
                                ref={this.currentPageRef}/>



                        </>);


                },
                prevButtonAttribs : ()=> {
                    return {};
                },
                nextButtonAttribs : ()=> {
                    return {onClick:this.onClickNextNeuteredMoveAhead};

                },
                onGainFocus : ()=> {
                    console.log("neutered question gained focus");


                }

            },
            {

                page : ()=>{
                    return (
                        <>
                            {/*Todo might need controlled components for this later*/}
                            <h2>End Form</h2>
                            <h4>over</h4>


                        </>);


                },
                prevButtonAttribs : ()=> {
                    return {};
                },
                nextButtonAttribs : ()=> {
                    return {type : "submit",form : this.dogWeightFormID,disabled : this.state.nextBlocked};

                },
                onGainFocus : ()=> {
                    console.log("end question gained focus");

                }

            },









        ];








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
    onClickNextActivityMoveAhead(event){

        this.moveToNexPage();


    }
    onClickNextNeuteredMoveAhead(event){

        this.moveToNexPage();


    }


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
        const dW = this.state.quesOutputPool.dogWeight;
        const dA = this.state.quesOutputPool.dogActivity;
        const dne = this.state.quesOutputPool.dogNeutered;


        return dn +" " + dW + " "+dA + " "+ dne;



    }




    // this.state.currentQues
    render() {
        const currentPage = this.getPageData(this.state.currentQues);
        const progressScore = ((this.state.currentQues + 1) / this.pages.length) * 100;




        return (
            <>
                <ProgressBar progress={progressScore}/>

                {/*{render current page}*/}
                {currentPage.page()}


                <button onClick={this.onClickPrev} {... currentPage.prevButtonAttribs()} > Prev</button>

                {/*NOTE next button attribs ahead so questions can override behaviour*/}
                <button onClick={this.onClickNext} {... currentPage.nextButtonAttribs()} > Next</button>

                <p>value of all ques output is {this.totalStateString()}</p>

            </>
        );
    }

}

export default ContainerForm;

