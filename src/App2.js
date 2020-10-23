import React from 'react';
import './App2.css';

import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';

import ContainerForm from "./components/ContainerForm";

import MuiAppBar from "@material-ui/core/AppBar"
import {createMuiTheme,ThemeProvider} from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import MuiTypography from "@material-ui/core/Typography";


class App2 extends React.Component{

    constructor() {
        super();

        //only set values like this in the constructor
        this.state = {

        };


        //TODO create custom theme here
        this.theme = createMuiTheme({
            // palette : {
            //     primary : green
            // }
            //default value is 8
            // spacing : 8
        })
        console.log("theme spacing"+this.theme.spacing(1));

    }


    render() {
        return (
            <>

                    {/*<MuiTypography variant="h6">*/}
                    {/*        Some text here*/}

                    {/*        </MuiTypography>*/}
            {/*scoped css applies cool stuff like border box out of the box.*/}
            <ScopedCssBaseline>
                <ThemeProvider theme={this.theme}>
                    <MuiAppBar position="relative">

                        <MuiTypography variant="h4"
                                      // className={classes.helloThereStyle}
                            >
                            {/*TODO insert logo here*/}
                            MomAndPaw
                        </MuiTypography>
                    </MuiAppBar>
                    <ContainerForm></ContainerForm>
                </ThemeProvider>
            </ScopedCssBaseline>

            </>
        );
    }
}

export default App2;
