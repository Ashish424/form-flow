import React from 'react';
import DivButton from "./DivButton/DivButton";

import cloneDeep from 'lodash/cloneDeep';
import StandardStyleContainer from "../ButtonContainer";
import MuiStyledChoiceButton from "./choice/MuiStyledChoiceButton";
import MuiStyledChoiceImage from "./choice/MuiStyledChoiceImage";




class MultiChoiceInput extends React.Component{

    constructor(props) {
        super(props);



        // let arr = new Array(this.props.values.length).fill(0);
        let arr = new Array(this.props.numChoices).fill(0);




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
                //todo need to pass copy of array so parent doesn't modify it ??
                this.props.onSelectionChanged(this.state.selectionState);
                // console.log("updated state called");
            });

    }



    render() {
        /*nice technique of passing a container component
        composition rocks :)*/
        const GridSetup = this.props.gridSetup;

        const helperPassed = this.props.hasOwnProperty("helperBox");

        const HelperBox = helperPassed ? this.props.helperBox.component : null;





        // console.log("value of helper passed "+helperPassed);




        const currSelectedIndex = this.state.selectionState.findIndex((ele) => {return ele === 1;})



        // console.log(this.props.ClickableSetupData);


        return (

            <div>

                <GridSetup>


                {
                    this.state.selectionState.map((item,index)=>{

                            return (


                                <DivButton
                                    selected={this.state.selectionState[index]}
                                               id={index.toString()}
                                               key={index}
                                               divStylePropsFunc = {this.props.divStyle}
                                               handler={this.onClickHandler}
                                               ClickableSetupData = {this.props.ClickableSetupData[index]}
                                               ClickableMaker = {this.props.ClickableMaker[index]}
                                               Clickable = {this.props.Clickable}

                                >



                                </DivButton>

                               );

                        }
                    )





                }



                </GridSetup>

                { helperPassed ?

                    <HelperBox
                    primaryText = {this.props.helperBox.data[currSelectedIndex].primary}
                    secondaryText = {this.props.helperBox.data[currSelectedIndex].secondary}


                    >

                    </HelperBox> : <> </>
                }




            </div>

        );
    }
}
MultiChoiceInput.defaultProps = {
    defaultSelectionIndex : 0,
    gridSetup : StandardStyleContainer,

}

export default MultiChoiceInput;

