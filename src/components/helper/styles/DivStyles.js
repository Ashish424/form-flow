//todo place it at the right place later
import makeStyles from "@material-ui/core/styles/makeStyles";
import MultiChoiceInput from "../../Pages/MuitChoice/MultiChoiceInput";
import React from "react";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import yellow from "@material-ui/core/colors/yellow";
import grey from "@material-ui/core/colors/grey";


export const flexStyledDiv = makeStyles((theme)=>({

        root : (props) => ({

            display : "flex",
            width : "100%",
        }),



    })
);


export const verticalSpacerDivStyles = makeStyles((theme)=>({

        root : (props) => ({
            minHeight : `${props.minHeight}px`,
            width : "100%",

            // height : "100%",

            //todo add functionality for both absolute and relative here
            //todo add breakpoints for different widths if needed.
            // minWidth : `${props.minWidth}px`

            // "backgroundColor": props.color
        }),



    })
);


export const horizontalSpacerDivStyles = makeStyles((theme)=>(
    {

        root : (props) => ({


            height : "100%",
            //todo add functionality for both absolute and relative here
            //todo add breakpoints for different widths if needed.
            minWidth : `${props.minWidth}px`

            // "backgroundColor": props.color
        }),



    })
);




export const emptyDivStyles = makeStyles((theme)=>(
        {

            root: (props) => ({


            })
        }
    )
);

export const mainContainerHeightStyles =  makeStyles((theme)=>(
        {

            root: (props) => ({

                //old approach not dynamic
                // minHeight: "100%",
                // marginBottom: "-140px",
                // paddingBottom : "140px",



                //dynamic to the size of the stuff here
                //todo make this responsive
                overflow : "auto",
                maxHeight: "calc(100% - 140px)",
                height:"calc(100% - 140px)",

            })
        }
    )
);
export const imageTripleDivStyles = makeStyles((theme)=>(
    {

        root : (props) => ({
            // width : "100%",

            [theme.breakpoints.down('xl')]: {
                width : "10%",
                // backgroundColor: grey[500],
            },

            [theme.breakpoints.down('lg')]: {
                width : "15%",
                // backgroundColor: blue[500],
            },
            [theme.breakpoints.down('md')]: {
                width : "15%",

                // backgroundColor: red[500],


            },
            [theme.breakpoints.down('sm')]: {

                width : "25%",

                // backgroundColor: green[500],


            },
            [theme.breakpoints.down('xs')]: {
                width : "30%",

                // backgroundColor: yellow[500],

            },


        }),



    })
);

