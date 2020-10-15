import React from 'react';
import cloneDeep from 'lodash/cloneDeep';

import Question from "./Question";
import ProgressBar from "./ProgressBar";
import DivButton from "./DivButton";
class ContainerForm extends React.Component{


    ///TODO check if this in state ???
    currentQuesCompRef = null;
    currentFormRef = null;

    currentFormId = "current-form-id";
    dogNameFormID = "name-form";
    dogWeightFormID = "weight-form";




    //todo object literal vs class syntax
    questions = [

         //TODO mixing non state with static state dangerous proposition !!!!!
         //TODO making these titles dynamic

        {
             title : (quesOutputPool) => {
                    return "First,what's your dog's name?";
            },
             secondaryTitle : (quesOutputPool) =>{
                 return "My dog is called";
             },
             //TODO club these two together
             nextButtonAttribs : ()=> {
                 return {type : "submit",form : this.dogNameFormID};
             },

             interactor : () => {
                 return (
                     <form onSubmit={this.OnDogNameInformationCollection}
                           //TODO see if this ref needed
                           ref={(ref)=> this.currentFormRef =ref}
                           id={this.dogNameFormID}
                     >
                         <input
                             type="text"
                             placeholder="Your dog's name"
                             onChange={this.q1Change}
                             name="mainInput"
                         />

                     </form>

                 );

             },





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

                            // ["low","medium","high"].map(
                            //     (dogActivity,index)=>{
                            //         return (<DivButton  id = {index.toString()} selected={!!parseInt(stateString.charAt(index))} handler = {this.onClickActivity} >
                            //                 {dogActivity}
                            //                     </DivButton>
                            //             );
                                //

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
                breed : "toy"

            },

            //todo move this down to a more specific component
            activityOptionsState : "100"



        };


        this.currentGenericRef = React.createRef();
        // this.currentGenericRef = null;


        //TODO this is temp
        this.q1Change = this.q1Change.bind(this);
        this.onClickActivity = this.onClickActivity.bind(this);
        // this.saveQuestionAndMoveToNext = this.saveQuestionAndMoveToNext.bind(this);





        this.moveToNextQuestion = this.moveToNextQuestion.bind(this);
        this.moveToPrevQuestion = this.moveToPrevQuestion.bind(this);




        this.onClickNext = this.onClickNext.bind(this);
        this.onClickPrev = this.onClickPrev.bind(this);

        this.OnDogNameInformationCollection = this.OnDogNameInformationCollection.bind(this);
        this.OnDogWeightInformationCollection = this.OnDogWeightInformationCollection.bind(this);
        this.OnDogActivityLevelCollection = this.OnDogActivityLevelCollection.bind(this);




        this.getQuestionData = this.getQuestionData.bind(this);


        this.renderQuestion = this.renderQuestion.bind(this);
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

    //todo move this to right place man !!!
    currentActivityStateString = "100"
    onClickActivity(id){










        // console.log("this is here inside container "+ ref.current.state.name);

        // console.log("this is here inside container "+ref);
        // console.log("this ref name is "+ref.state.name);
        if(this.currentGenericRef!==null){
            // console.log("current generic ref "+this.currentGenericRef.current.testMethod);
            this.currentGenericRef.current.toggleState();
            console.log("printing name "+ this.currentGenericRef.current.state.name);


        }

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


        console.log("clicked next");
        //todo test cost remove from  here
        if(this.currentQuesCompRef!==null){
            console.log("updating counter");
            this.currentQuesCompRef.updateCounter();

        }

    }
    onClickPrev(event){
        this.moveToPrevQuestion();
        console.log("clicked prev");
    }

    //dog name information question handler
    OnDogNameInformationCollection(event){
        console.log("default form handler called");
        event.preventDefault();
        //TODO check if this necessary ?? => because of set state ?? ?
        event.persist();
        // console.log("target value is "+event.target[0].value.toString());
        console.log("target value is "+event.target.mainInput.value);

        this.setState(
            (state,props)=> {
                // let ques = this.getQuestionData(state.currentQues);

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




    renderQuestion(){


        const ques = this.getQuestionData(this.state.currentQues);

        return (
            <Question mainText={ques.title(this.state.quesOutputPool)}
              secondaryText={ques.secondaryTitle(this.state.quesOutputPool)}
                //TODO move input type out of question and into a separate component.
              inputType={ques.interactor}
              ref={(ref)=>
                  this.currentQuesCompRef =ref}


                    />
            );

    }
    totalStateString(){

        const dn = this.state.quesOutputPool.dogName;
        const dW = this.state.quesOutputPool.dogWeight;
        const dA = this.state.quesOutputPool.dogActivity;


        return dn +" " + dW + " "+dA;



    }


    // this.state.currentQues
    render() {
        return (
            <>
                <ProgressBar progress={((this.state.currentQues + 1) / this.questions.length) * 100}/>

                {/*<h1>Here ques title {this.state.questions[this.state.currentQues].title}</h1>*/}
                {/*current question*/}

                {this.renderQuestion()}

                <button onClick={this.onClickPrev}> Prev</button>

                {/*onClick={this.nextQuestion()}*/}
                <button {...this.getQuestionData(this.state.currentQues).nextButtonAttribs()}
                        // type="submit" form={this.currentFormId}
                        onClick={this.onClickNext}> Next</button>


                <p>value of all ques output is {this.totalStateString()}</p>

                <DivButton ref={this.currentGenericRef} handler = {this.onClickActivity} />
                {/*<DivButton ref={this.currentGenericRef} handler = {this.onClickActivity} />*/}
                {/*<DivButton ref={this.currentGenericRef} handler = {this.onClickActivity} />*/}

            </>
        );
    }

}

export default ContainerForm;

