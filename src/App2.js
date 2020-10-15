import React from 'react';


import ContainerForm from "./components/ContainerForm";
class App2 extends React.Component{

    constructor() {
        super();

        //only set values like this in the constructor
        this.state = {

        };

    }


    render() {
        return (
            <div>
                <ContainerForm></ContainerForm>
            </div>
        );
    }
}

export default App2;
