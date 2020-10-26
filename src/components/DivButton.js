import React from 'react';

import MuiButton from "@material-ui/core/Button";


class DivButton extends React.Component{

    highLightedStyle = {
        backgroundColor:"#FF00FF",
        // width:100,
        // height:100


    };
    normalStyle = {
        // backgroundColor: "red",
        // width:100,
        // height:100

    }

    constructor(props) {
        super(props);


        //only set values like this in the constructor
        this.state = {

        };
        this._onClick = this._onClick.bind(this);




    }



    render() {
        return (


            <MuiButton

                id={this.props.id}
                role="button"

                color={this.props.selected ? "primary":"secondary"}
                onClick= {this._onClick}

                //todo remove inline styles
                style={

                    {
                        minWidth : "100px",

                        //todo make this border radius responsive
                        borderRadius: "5em"
                    }
                }
                       variant="contained"
                //todo this

            >

                {this.props.children}
            </MuiButton>

            //todo for reference only remove this later
            // <div

            // id={this.props.id}
            //
            // role="button"
            // style={
            //     this.props.selected ? this.highLightedStyle : this.normalStyle
            // }
            //
            // onClick= {this._onClick}
            //        /*title={dogActivity} key={dogActivity} onClick = {this.OnDogActivityLevelCollection}>*/
            //     /*{dogActivity}*/
            // >
            //     {this.props.children}
            // </div>
        );
    }

    _onClick(event){

        console.log("current target event "+event.currentTarget.id);
        console.log("target event "+event.target);

        // this.setState({currentStyle : this.highLightedStyle});

        // console.log("name is " +this.state.name);
        this.props.handler(event.currentTarget.id);

    }
}

export default DivButton;

