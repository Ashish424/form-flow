import React from 'react';

import MuiButton from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles({
    root : {
        minWidth : "100px",
        //todo make this border radius responsive
        borderRadius: "5em"

    }
});


function MuiStyledDivButton(props){
    const classes = useStyles();

    return (

        <MuiButton {...props} classes={
            {root : classes.root}
        }>

        </MuiButton>

    );


}


class DivButton extends React.Component{
    constructor(props) {
        super(props);


        //only set values like this in the constructor
        this.state = {

        };
        this._onClick = this._onClick.bind(this);




    }


    render() {
        return (


            <MuiStyledDivButton

                id={this.props.id}
                role="button"

                color={this.props.selected ? "primary":"secondary"}
                onClick= {this._onClick}

                       variant="contained"


            >

                {this.props.children}
            </MuiStyledDivButton>

        );
    }

    _onClick(event){

        // console.log("current target event "+event.currentTarget.id);
        // console.log("target event "+event.target);
        // console.log("name is " +this.state.name);
        this.props.handler(event.currentTarget.id);

    }
}

export default DivButton;

