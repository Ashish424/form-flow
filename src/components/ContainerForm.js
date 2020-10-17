import React from 'react';
import cloneDeep from 'lodash/cloneDeep';

import Question from "./Question";
import ProgressBar from "./ProgressBar";
import DivButton from "./DivButton";
import MultiChoiceInput from "./Pages/MultiChoiceInput";
import {NEUTERED_OPTIONS_KEYS, POSSIBLE_ACTIVITIES, POSSIBLE_ACTIVITIES_KEYS} from "../StaticData";
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


        console.log(NEUTERED_OPTIONS_KEYS);



        this.dogNameFormID = "name-form";
        this.dogWeightFormID = "weight-form";


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


        //TODO this is temp
        this.nameInputChange = this.nameInputChange.bind(this);
        this.weightInputChange = this.weightInputChange.bind(this);



        this.testFunction = this.testFunction.bind(this);
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
                                  id={this.dogNameFormID}>
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
                //todo replace question with page
                page : ()=>{
                    return (
                        <>
                            {/*Todo might need controlled components for this later*/}
                            <h2>{WEIGHT_PRIMARY_TITLE(this.state.quesOutputPool)}</h2>
                            <h4>{WEIGHT_SECONDARY_TITLE(this.state.quesOutputPool)}</h4>
                            <form onSubmit={this.OnDogWeightInformationCollection}
                                  id={this.dogWeightFormID}>
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
                            <h2>{NEUTERED_PRIMARY_TITLE(this.state.quesOutputPool)}</h2>
                            <h4>{NEUTERED_SECONDARY_TITLE(this.state.quesOutputPool)}</h4>
                            <MultiChoiceInput
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
        console.log("q1 changed "+event.target.value);


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
        console.log("q1 changed "+event.target.value);


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




        //test for event.target vs event.current target
        // console.log(event.currentTarget.id);
        // console.log("clicked next "+event.target.value);


    }
    onClickNextActivityMoveAhead(event){

        this.moveToNexPage();

        //test for event.target vs event.current target
        // console.log(event.currentTarget.id);
        // console.log("clicked next "+event.target.value);


    }
    onClickNextNeuteredMoveAhead(event){

        this.moveToNexPage();

        //test for event.target vs event.current target
        // console.log(event.currentTarget.id);
        // console.log("clicked next "+event.target.value);


    }


    onClickPrev(event){
        this.moveToPrevPage();
        console.log("clicked prev");
    }

    //dog name information question handler
    OnDogNameInformationCollection(event){





        console.log("default form handler called");
        event.preventDefault();

        event.persist();
        // console.log("target value is "+event.target[0].value.toString());
        console.log("target value is "+event.target.mainInput.value);


        this.setState(
            (state,props)=> {
                // let ques = this.getQuestionData(state.currentQues);
                //todo need a better solution for all this cloning.
                let clonedQuesPool = cloneDeep(state.quesOutputPool);
                clonedQuesPool.dogName = event.target.mainInput.value;


                return {quesOutputPool:clonedQuesPool};

            });



        //todo see a better place for this setup for next question here
        //resetting next blocked to the state for the next question.
        this.setState((state,props)=>{
            //resetting next blocked to the state for the next question.
            return {nextBlocked : state.quesOutputPool.dogWeight === "" } ;

        });
        //

        this.moveToNexPage();


    }
    OnDogWeightInformationCollection(event){
        console.log("here in weight collection");
        console.log("the value of weight is "+ event.target.mainInput.value);

        event.preventDefault();
        //TODO check if this necessary ?? => because of set state ?? ?
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
        console.log("this is great here");
        //modify the



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

        // const ques = this.getQuestionData(this.state.currentQues);
        // return ques.question();

        // switch(this.state.currentQues) {
        //     case 2:
        //         console.log("third question here ");
        //
        //         return(
        //         <div>
        //             <h1> {NAME_PRIMARY_TITLE(this.state.quesOutputPool)}</h1>
        //             <h3>{NAME_SECONDARY_TITLE(this.state.quesOutputPool)}</h3>
        //             <MultiChoiceInput defaultSelection = "first"
        //             values = {POSSIBLE_ACTIVITIES_KEYS}
        //             onSelectionChanged={this.OnActivitySelectionChange}
        //             ref={this.currentPageRef}/>
        //         </div>
        //         );
        //         break;
        //     case 3:
        //         console.log("end question here ");
        //         // code block
        //         break;
        //     default:
        //     // code block
        // }



        //
        // return (
        //     <Question mainText={ques.title(this.state.quesOutputPool)}
        //       secondaryText={ques.secondaryTitle(this.state.quesOutputPool)}
        //         //TODO move input type out of question and into a separate component.
        //       inputType={ques.interactor}
        //       ref={(ref)=>
        //           this.currentQuesCompRef =ref}
        //
        //
        //             />
        //     );

    }

    totalStateString(){

        const dn = this.state.quesOutputPool.dogName;
        const dW = this.state.quesOutputPool.dogWeight;
        const dA = this.state.quesOutputPool.dogActivity;
        const dne = this.state.quesOutputPool.dogNeutered;


        return dn +" " + dW + " "+dA + " "+ dne;



    }

//     nextButtonAttribs : ()=> {
//     return {type : "submit",form : this.dogNameFormID};
// }

    //TODO activity test here
    testFunction(){
        if(this.state.currentQues === 2){
            return {};
            // return {type : };

        }else{
            // return this.getQuestionData(this.state.currentQues).nextButtonAttribs();
        }

    }

    // this.state.currentQues
    render() {
        const currentPage = this.getPageData(this.state.currentQues);
        const progressScore = ((this.state.currentQues + 1) / this.pages.length) * 100;




        return (
            <>
                <ProgressBar progress={progressScore}/>

                {/*<h1>Here ques title {this.state.questions[this.state.currentQues].title}</h1>*/}
                {/*current question*/}

                {/*{render current page}*/}
                {currentPage.page()}


                <button onClick={this.onClickPrev} {... currentPage.prevButtonAttribs()} > Prev</button>

                {/*onClick={this.nextQuestion()}*/}

                {/*test form here*/}
                {
                }

                {/*NOTE next button attribs ahead so questions can override behaviour*/}
                <button onClick={this.onClickNext} {... currentPage.nextButtonAttribs()} > Next</button>


                <p>value of all ques output is {this.totalStateString()}</p>

            </>
        );
    }

}

export default ContainerForm;

