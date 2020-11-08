import React from 'react';
import './App2.css';

import CssBaseline from '@material-ui/core/CssBaseline';


import ContainerForm from "./components/ContainerForm";

import MuiAppBar from "@material-ui/core/AppBar"
import {createMuiTheme,ThemeProvider,responsiveFontSizes} from "@material-ui/core/styles";
import MuiTypography from "@material-ui/core/Typography";
import blue from "@material-ui/core/colors/blue";
import VerticalSpacerDiv from "./components/helper/VerticalSpacerDiv";
import MuiStyledTopAppBar from "./components/MuiStyledTopAppBar";
import {visual} from "./helper/visual";
import LogoWrap from "./components/Wrapped/LogoWrap";


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
                    // default: visual.bluishWhite
                    default: visual.lighterWhite


                },
            },
            typography: {
                fontFamily: [
                    'Nunito',
                    // 'sans-serif',
                ].join(','),
            },
            // typography: {
            //     fontFamily: [
            //         'Mali',
            //         // 'sans-serif',
            //     ].join(','),
            // },


            // typography: {
            //     fontFamily: [
            //         'Chilanka',
            //         'cursive',
            //     ].join(','),
            // },
            // test : blue[500]

            //default value is 8
            // spacing : 8

        })

        this.theme = responsiveFontSizes(this.theme);


        // console.log("theme spacing"+this.theme.spacing(1));

    }


    render() {
        return (
            <>


                <ThemeProvider theme={this.theme}>
                    {/*css baseline needs to be inside the theme provider*/}
                    <CssBaseline>
                    <MuiStyledTopAppBar color="transparent" position="relative">
                        {/*todo check for rem based strategy https://material-ui.com/customization/spacing/*/}

                        <LogoWrap/>

                    </MuiStyledTopAppBar>
                    <ContainerForm></ContainerForm>
                    </CssBaseline>
                </ThemeProvider>


            </>
        );
    }
}

export default App2;
