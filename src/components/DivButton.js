import React from 'react';


class DivButton extends React.Component{

    highLightedStyle = {
        backgroundColor:"blue",
        width:100,
        height:100


    };
    normalStyle = {
        // backgroundColor: "red",
        width:100,
        height:100

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
            <div
                // id={"activity-level-"+index.toString()}
            // title="test-title"
            id={this.props.id}

            role="button"
            style={
                this.props.selected ? this.highLightedStyle : this.normalStyle
            }

            onClick= {this._onClick}
                   /*title={dogActivity} key={dogActivity} onClick = {this.OnDogActivityLevelCollection}>*/
                /*{dogActivity}*/
            >
                {this.props.children}
            </div>
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

