import React from 'react';
import './App2.css';

import CssBaseline from '@material-ui/core/CssBaseline';


import ContainerForm from "./components/ContainerForm";

import MuiAppBar from "@material-ui/core/AppBar"
import {createMuiTheme,ThemeProvider} from "@material-ui/core/styles";
import MuiTypography from "@material-ui/core/Typography";
import blue from "@material-ui/core/colors/blue";


class App2 extends React.Component{

    constructor() {
        super();

        //only set values like this in the constructor
        this.state = {

        };


        //TODO create custom theme here
        this.theme = createMuiTheme({
            palette : {


                background: {
                    default: "#f4f5fd"


                },
            },
            test : blue[500]
            //default value is 8
            // spacing : 8

        })
        // console.log("theme spacing"+this.theme.spacing(1));

    }


    render() {
        return (
            <>


                <ThemeProvider theme={this.theme}>
                    {/*css baseline needs to be inside the theme provider*/}
                    <CssBaseline>
                    <MuiAppBar position="relative">

                        <MuiTypography variant="h4"
                                      // className={classes.helloThereStyle}
                            >
                            {/*TODO insert logo here*/}
                            MomAndPaw
                        </MuiTypography>
                    </MuiAppBar>
                    <ContainerForm></ContainerForm>
                    </CssBaseline>
                </ThemeProvider>


            </>
        );
    }
}

export default App2;
