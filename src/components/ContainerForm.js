import React from 'react';
import cloneDeep from 'lodash/cloneDeep';

import Question from "./Question";
import ProgressBar from "./ProgressBar";
import DivButton from "./DivButton";
import MultiChoiceInput from "./Page/MultiChoiceInput";
import {POSSIBLE_ACTIVITIES, POSSIBLE_ACTIVITIES_KEYS} from "../StaticData";
import {NAME_PRIMARY_TITLE, NAME_SECONDARY_TITLE, WEIGHT_PRIMARY_TITLE, WEIGHT_SECONDARY_TITLE} from "../StaticText";

class ContainerForm extends React.Component{

    //array of function components.
    questions = [




         {
            question : ()=>{
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
                                onChange={this.q1Change}
                                name="mainInput"
                            />

                        </form>




                    </>);


            },
            nextButtonAttribs : ()=> {
                return {type : "submit",form : this.dogNameFormID};
            }

        },
        {
            question : ()=>{
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
                                // onChange={this.onSearchChange}
                            />
                            <span> kgs</span>
                        </form>

                    </>);


            },
            nextButtonAttribs : ()=> {
                return {type : "submit",form : this.dogNameFormID};
            }

        },



        {
            title : (quesOutputPool) => {
                return `How much does ${quesOutputPool.dogName} currently weigh?`;
            },
            secondaryTitle : (quesOutputPool) => {
                return `${quesOutputPool.dogName} weighs about...`;
            },
            nextButtonAttribs : ()=> {
                return {type : "submit",form : this.dogWeightFormID};
            },

            interactor : () => {
                return (
                    <form onSubmit={this.OnDogWeightInformationCollection}
                          id={this.dogWeightFormID}>
                        <input
                            type="number"
                            placeholder="00.00"
                            name="mainInput"
                            // onChange={this.onSearchChange}
                        />
                        <span> kgs</span>
                    </form>

                );
            }


        },


        // {
        //      title : (quesOutputPool) => {
        //             return "First,what's your dog's name?";
        //     },
        //      secondaryTitle : (quesOutputPool) =>{
        //          return "My dog is called";
        //      },
        //      //TODO club these two together
        //      nextButtonAttribs : ()=> {
        //          return {type : "submit",form : this.dogNameFormID};
        //      },
        //
        //      interactor : () => {
        //          return (
        //
        //              <form onSubmit={this.OnDogNameInformationCollection}
        //                    //TODO see if this ref needed
        //                    ref={(ref)=> this.currentFormRef =ref}
        //                    id={this.dogNameFormID}
        //              >
        //                  <input
        //                      type="text"
        //                      placeholder="Your dog's name"
        //                      onChange={this.q1Change}
        //                      name="mainInput"
        //                  />
        //
        //              </form>
        //
        //          );
        //
        //      },
        //
        //
        //
        //
        //
        //  },





        {
            title : (quesOutputPool) => {
                return `How Active is ${quesOutputPool.dogName}?`;
            },
            secondaryTitle : (quesOutputPool ) => {
                return `Whether they're a bundle of energy or a serial snoozer, every dog is unique and needs a different amount of food.`;
            },
            nextButtonAttribs : ()=> {
                return {};
            },
            interactor : () => {
                return (


                    <>

                        {

                            ["low","medium","high"].map(
                                (dogActivity,index)=>{

                                    //TODO Temporary style here
                                    return (<div   id={"activity-level-"+index.toString()} style = {{
                                        width: 100,
                                        height: 100
                                    }} role="button" title={dogActivity} key={dogActivity} onClick = {this.OnDogActivityLevelCollection}> {dogActivity}</div>);
                                }
                                )
                        }

                </>
                );


            }


        },


        {
            title : (quesOutputPool) => {
                return "End Question"
            },
            secondaryTitle : (quesOutputPool) => {
                return "End of the form"
            },
            nextButtonAttribs : ()=> {
                return {};
            },
            interactor : () => {
                return (
                   <h1>End of the form</h1>


                );


            }

        },


    ];





    constructor(props) {
        super(props);



        this.currentFormId = "current-form-id";
        this.dogNameFormID = "name-form";
        this.dogWeightFormID = "weight-form";


        //only set values like this in the constructor
        this.state = {
            currentQues : 0,
            //initialized with default values
            quesOutputPool : {
                dogName : "default",
                dogWeight : 0.0,
                dogActivity : "default",
                neutered : false,
                age:"4-12",
                bodyScore : 1,
                breed : "toy",
                //todo email validation
                email : "test@test.com",
                //indian phone number only
                mobile : "9123456789"

            },

            //todo move this down to a more specific component
            activityOptionsState : "100"



        };



        //avoid using this as much as possible.
        this.currentPageRef = React.createRef();


        //TODO this is temp
        this.q1Change = this.q1Change.bind(this);


        this.testFunction = this.testFunction.bind(this);
        this.OnActivitySelectionChange = this.OnActivitySelectionChange.bind(this);


        // this.saveQuestionAndMoveToNext = this.saveQuestionAndMoveToNext.bind(this);





        this.moveToNextQuestion = this.moveToNextQuestion.bind(this);
        this.moveToPrevQuestion = this.moveToPrevQuestion.bind(this);




        this.onClickNext = this.onClickNext.bind(this);
        this.onClickPrev = this.onClickPrev.bind(this);

        this.OnDogNameInformationCollection = this.OnDogNameInformationCollection.bind(this);
        this.OnDogWeightInformationCollection = this.OnDogWeightInformationCollection.bind(this);
        this.OnDogActivityLevelCollection = this.OnDogActivityLevelCollection.bind(this);




        this.getQuestionData = this.getQuestionData.bind(this);


        this.renderPage = this.renderPage.bind(this);
        this.totalStateString = this.totalStateString.bind(this);


        //getter methods for data collected.
        this.getCurrentDogName = this.getCurrentDogName.bind(this);







    }


    q1Change(event){
        console.log("q1 changed "+event.target.value);


        //need to persist event for the callback of setstate
        // event.persist();

        //NOTE set state function is asynchronous.
        // this.setState(
        //     (state,props)=> {
        //
        //         return this.setQuesArrValue(state.currentQues,event.target.value,state,props);
        //         // if(state.questions.length)
        //         // return {quesOutput:copyArr};
        //
        //     }
        // );

    }


    moveToNextQuestion(){
        // event.preventDefault();
        //TODO make changes to the prev and next button as necessary for this question
        //use dynamic props https://stackoverflow.com/questions/40868189/how-to-create-a-dynamic-prop-name-in-react

        // hookupNextButton();


        //NOTE set state function is asynchronous.
        this.setState(
            (state,props)=> {
                // if(state.questions.length)

                return {currentQues: (state.currentQues < this.questions.length - 1) ? state.currentQues+1 : state.currentQues};
            }
        );


    }
    moveToPrevQuestion() {


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
    onClickPrev(event){
        this.moveToPrevQuestion();
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


        //TODO before moving ahead need to hookup the next question
        //
        this.moveToNextQuestion();


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



        this.moveToNextQuestion();


    }
    
    OnDogActivityLevelCollection(event){
        event.preventDefault();
        //TODO check if this necessary ?? => because of set state ?? ?
        event.persist();
        // console.log("the index is "+index.toString());

        console.log("here in weight collection "+event.target.id);
        console.log("event.target id is "+event.target.id);
        // console.log("event.target value is "+event.target.value);
        console.log("event.target value is "+event.target.title);

        // event.target.style = {
        //     "width": 300,
        //     "height": 300,
        //     // "background-color": "blanchedalmond"
        // };

        console.log("style = "+ event.target.style.toString());



        // console.log("target weight value is "+event.target.mainInput.value);
        // event.preventDefault();
        //TODO check if this necessary ?? => because of set state ?? ?
        // event.persist();

        this.setState(
            (state,props)=> {
                // let ques = this.getQuestionData(state.currentQues);

                let clonedQuesPool = cloneDeep(state.quesOutputPool);
                clonedQuesPool.dogActivity = event.target.title;

                return {quesOutputPool:clonedQuesPool};

            });

        // console.log("the value of activity is "+ event.target);

        // console.log("the value of activity is "+ event.target.value);
        //TODO debugging here
        this.moveToNextQuestion();



    }

    getQuestionData(index){
        return this.questions[index];

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
        //             <MultiChoiceInput defaultSelection = "first" values = {POSSIBLE_ACTIVITIES_KEYS} onSelectionChanged={this.OnActivitySelectionChange} ref={this.currentPageRef}/>
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


        return dn +" " + dW + " "+dA;



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
    // this.state.currentQues
    render() {
        const ques = this.getQuestionData(this.state.currentQues);



        return (
            <>
                <ProgressBar progress={((this.state.currentQues + 1) / this.questions.length) * 100}/>

                {/*<h1>Here ques title {this.state.questions[this.state.currentQues].title}</h1>*/}
                {/*current question*/}

                {/*{render current page}*/}
                {ques.question()}


                <button onClick={this.onClickPrev}> Prev</button>

                {/*onClick={this.nextQuestion()}*/}

                {/*test form here*/}
                {
                }

                <button {... ques.nextButtonAttribs()}
                        onClick={this.onClickNext}> Next</button>


                <p>value of all ques output is {this.totalStateString()}</p>

            </>
        );
    }

}

export default ContainerForm;

