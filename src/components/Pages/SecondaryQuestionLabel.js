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
        padding: '9px 9px 9px 9px',

    }



})
);


export default function MuiStyledSecondaryQuestionLabel(props) {
    const classes = useStyles();


    return(
        <Paper elevation={3} variant="outlined" square classes={
            { root:classes.root,

            }
        }>
            <MuiTypography className={classes.header}{...props} />
        </Paper>
    );


}




