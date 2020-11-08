import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import MuiTypography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";




//todo sync style of both primary and secondary questions.
// #21CBF3

const useStyles = makeStyles((theme)=>({
    root: {

        width : "100%",

        // height : 12,

        //todo need to make these things responsive.
        margin: "16px 0px 0px 0px",
        // padding: '9px 9px 9px 9px',

        [theme.breakpoints.down('lg')]: {

            padding : theme.spacing(1.125),
        },
        [theme.breakpoints.down('m      d')]: {


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




