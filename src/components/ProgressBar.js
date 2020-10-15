import React from 'react';



class ProgressBar extends React.Component{

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

export default ProgressBar;

