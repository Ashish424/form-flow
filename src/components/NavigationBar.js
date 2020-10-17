import React from 'react';



class NavigationBar extends React.Component{

    constructor(props) {
        super(props);


        //only set values like this in the constructor
        this.state = {

        };


    }



    render() {
        return (
            <h3>Progress = {this.props.progress}</h3>
        );
    }
}

export default NavigationBar;

