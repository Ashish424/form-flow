import React from 'react';



class Question extends React.Component{


    constructor(props) {
        console.log("called question constructor");
        super(props);


        //only set values like this in the constructor
        this.state = {

            counter : 0
        };

        // this.getInputComp = this.getInputComp.bind(this);
        this.getOutputState = this.getOutputState.bind(this);
        this.updateCounter = this.updateCounter.bind(this);


    }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log("question component did update");
    // }
    //
    // componentDidMount() {
    //     console.log("question mount");
    // }
    // componentWillUnmount() {
    //     console.log("question unmount");
    // }

    getOutputState(){

    }
    //TODO delete if not needed
    // getInputComp(){
    //     if(this.props.inputType === "form"){
    //         return(
    //             <form >
    //                 <input
    //                     type="text"
    //                     placeholder="00.00"
    //
    //                 />
    //                 <span> kgs</span>
    //             </form>
    //
    //         );
    //
    //     }
    //
    //     return null;
    // }
    updateCounter(){
        this.setState(
            (state,props)=> {

                return {counter:state.counter+1};
            }
        );
    }
    render() {
        return (
            <div>
                <h2> {this.props.mainText}</h2>
                <h4> {this.props.secondaryText}</h4>
                {this.props.inputType()}



                {/*{this.getInputComp()}*/}




            </div>
        );
    }
}

export default Question;

