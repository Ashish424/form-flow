import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiTypography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";



const styles = (theme)=>({

        root: {

            width : "100%",
            margin: `${theme.spacing(2)}px 0px 0px 0px`,



        },
        header : {
            padding : theme.spacing(2)

        }


    }
);

function MuiStyledPrimaryQuestionLabelRaw(props) {
    const { classes, color, ...other } = props;


    return(
    <Paper elevation={3} variant="outlined" square classes={
                 { root:classes.root,

                 }
            }>
            <MuiTypography className={classes.header} align="center" variant="h4"
                           {...other}
            />
    </Paper>
    );
}

const MuiStyledPrimaryQuestion = withStyles(styles)(MuiStyledPrimaryQuestionLabelRaw);
export default MuiStyledPrimaryQuestion;

