import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import MuiTypography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";





const useStyles = makeStyles((theme)=>({
    root: {

        width : "100%",

        // height : 12,

        //todo take these values from theme.
        margin: "16px 0px 0px 0px",
        // padding: '9px 9px 9px 9px',

        [theme.breakpoints.down('xl')]: {

            padding : theme.spacing(1.125),
        },

        [theme.breakpoints.down('lg')]: {

            padding : theme.spacing(1.125),
        },
        [theme.breakpoints.down('md')]: {


            padding : theme.spacing(1.125),

        },
        [theme.breakpoints.down('sm')]: {


            padding : theme.spacing(1.125),
        },
        [theme.breakpoints.down('xs')]: {

            padding : theme.spacing(1.125),

        }

    }



})
);


export default function MuiStyledSecondaryQuestionLabel(props) {
    const classes = useStyles();


    return(
        <div
            // elevation={3} variant="outlined" square
            className={
            { root:classes.root,

            }
        }>
            <MuiTypography classes={{root:classes.root}} {...props} />
        </div>
    );


}




