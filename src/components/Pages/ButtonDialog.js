import React from 'react';



class ButtonDialog extends React.Component{

    constructor(props) {
        super(props);


        //only set values like this in the constructor
        this.state = {

        };


    }



    render() {
        return (
            <>
                {this.props.children}
            </>

        );
    }
}

export default ButtonDialog;

