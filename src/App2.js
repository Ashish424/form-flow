import React from 'react';
import './App2.css';
import ContainerForm from "./components/ContainerForm";
import MuiAppBar from "@material-ui/core/AppBar"
import MuiButton from "@material-ui/core/Button"
import MuiTypography from "@material-ui/core/Typography";
import MuiProgressbar from "@material-ui/core/LinearProgress";

import {withStyles,styled} from "@material-ui/core/styles";






class App2 extends React.Component{

    constructor() {
        super();

        //only set values like this in the constructor
        this.state = {

        };

    }


    render() {
        return (
            <>

                    {/*<MuiTypography variant="h6">*/}
                    {/*        Some text here*/}

                    {/*        </MuiTypography>*/}


                {/*<MuiAppBar>*/}

                {/*    <MuiTypography variant="h6"*/}
                {/*                  // className={classes.helloThereStyle}*/}
                {/*        >*/}
                {/*        /!*TODO insert logo here*!/*/}
                {/*        MomAndPaw*/}
                {/*    </MuiTypography>*/}
                {/*</MuiAppBar>*/}
                <ContainerForm></ContainerForm>

            </>
        );
    }
}

export default App2;
