import React from 'react';
import ButtonDialog from "./ButtonDialog";
import DivButton from "../DivButton";
import cloneDeep from 'lodash/cloneDeep';

class MultiChoiceInput extends React.Component{

    constructor(props) {
        super(props);



        let arr = new Array(this.props.values.length).fill(0);


        arr[this.props.defaultSelectionIndex] = 1;



        //only set values like this in the constructor
        this.state = {

            selectionState : arr

        };

        this.onClickHandler = this.onClickHandler.bind(this);

        //todo multiple selection policies that can be passed from parent as props !!!
        this.handleSingleSelection = this.handleSingleSelection.bind(this);
        this.handleMultipleSelection = this.handleMultipleSelection.bind(this);
        // this.getCurrentChoices = this.getCurrentChoices.bind(this);






    }


    onClickNext(){


    }



    //takes a cloned array,free to modify
    //single choice implementation
    //possible for it to have a no choice.
    handleSingleSelection(arr, clickIndex,toggleButton = false){

        const prevIndex = arr.findIndex((element)=> { return element ===1; })

        if(prevIndex!==clickIndex){
            arr[prevIndex] = 0;
            arr[clickIndex] = 1;
        }


        if(prevIndex!==clickIndex){
            arr[prevIndex] = 0;
            arr[clickIndex] = 1;



        }
        //clicked on the same button check if can toggle
        else if(toggleButton){
            //toggle the button

            arr[clickIndex] = 1-arr[clickIndex];
        }


        return arr;
    }





    //takes a cloned array,free to modify
    //multiple choice implementation
    handleMultipleSelection(arr, clickIndex){


        const prevIndex = arr.findIndex((element)=> { return element ===1; })
        //none was selected
        // if(prevIndex === 0 ){
        //     if(clickIndex)
        //
        // }
        //


        if(prevIndex!==clickIndex){
            arr[prevIndex] = 0;
            arr[clickIndex] = 1;
        }


        return arr;
    }

    onClickHandler(id){
        // console.log("button clicked with here "+id);

        this.setState(
            (state,props)=> {
                let currentIndex = parseInt(id);
                //TODO is this clone deep necessary
                let clonedArr = cloneDeep(state.selectionState);

                return {selectionState:this.handleSingleSelection(clonedArr,currentIndex,false)};

            },()=>{
                //todo passing copy of array so parent doesn't modify it ??
                this.props.onSelectionChanged(this.state.selectionState);
                // console.log("updated state called");
            });

    }



    render() {
        return (
            <>
                {
                this.props.values.map( (dogAcitivty, index) => {

                    //TODO use better index and ids.
                    return (<DivButton selected={this.state.selectionState[index]} id={index.toString()} key={index} handler={this.onClickHandler}>
                        <p id="test">{this.props.values[index]}</p>
                    </DivButton>);

                        }
                    )

                }
            </>
        );
    }
}
MultiChoiceInput.defaultProps = {
    defaultSelectionIndex : 0

}

export default MultiChoiceInput;

