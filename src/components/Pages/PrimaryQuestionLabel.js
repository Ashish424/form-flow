import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiTypography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {Box} from "@material-ui/core";
import {visual} from "../../helper/visual";



const styles = (theme)=>({

        paperRoot: {

            width : "100%",
            margin: `${theme.spacing(2)}px 0px 0px 0px`,

            // backgroundColor : visual.packingOrangeLight

            [theme.breakpoints.down('lg')]: {

                margin: `${theme.spacing(2)}px 0px 0px 0px`,
            },
            [theme.breakpoints.down('md')]: {


                margin: `${theme.spacing(2)}px 0px 0px 0px`,

            },
            [theme.breakpoints.down('sm')]: {


                margin: `${theme.spacing(2)}px 0px 0px 0px`,
            },
            [theme.breakpoints.down('xs')]: {

                margin: `0px 0px 0px 0px`,



            }



        },
        header : {
            // color: "#FFFFFF",
            [theme.breakpoints.down('lg')]: {

                padding : theme.spacing(6),
            },
            [theme.breakpoints.down('md')]: {


                padding : theme.spacing(4),

            },
            [theme.breakpoints.down('sm')]: {


                padding : theme.spacing(4),
            },
            [theme.breakpoints.down('xs')]: {

                padding : theme.spacing(2),

            }
        }


    }
);

function MuiStyledPrimaryQuestionLabelRaw(props) {
    const { classes, color, ...other } = props;


    return(
    <Paper elevation={3} variant="outlined" square classes={
                 {
                     root:classes.paperRoot,

                 }
            }>
            <MuiTypography className={classes.header} align="center" variant="h4"
                           {...other} >
                <Box fontWeight = {700} fontStyle="regular">
                    {props.children}
                </Box>
            </MuiTypography>
    </Paper>
    );
}

const MuiStyledPrimaryQuestion = withStyles(styles)(MuiStyledPrimaryQuestionLabelRaw);
export default MuiStyledPrimaryQuestion;

