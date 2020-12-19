import React from 'react';
import './App2.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import ContainerForm from "./components/Container/ContainerForm";
import {createMuiTheme,ThemeProvider,responsiveFontSizes} from "@material-ui/core/styles";
import MuiStyledTopAppBar from "./components/MuiStyledTopAppBar";
import {visual} from "./helper/visual";
import LogoWrap from "./components/Wrapped/LogoWrap";


import ReactGA from 'react-ga'

class App2 extends React.Component{

    constructor() {
        super();

        ReactGA.initialize(
            [
                {
                    trackingId: 'UA-184809169-1',
                    gaOptions: {
                        // name: 'tracker1',
                        // userId: 123,
                        'cookieDomain': 'wizard.momandpaw.com'
                    }
                },
            ]

            )

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

            // typography: {
            //     fontFamily: [
            //         'IBM Plex Serif',
            //         'serif',
            //     ].join(','),
            // },


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


            // IBM Plex Serif
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
