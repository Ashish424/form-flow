import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FlexDiv from "../../helper/FlexDiv";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MuiTypography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";
import React from "react";
import {visual} from "../../../helper/visual";
import MuiProgressbar from "@material-ui/core/LinearProgress";
import VerticalSpacerDiv from "../../helper/VerticalSpacerDiv";

export const useAgeStyles = makeStyles((theme)=>({

        textBox: {

            // maxWidth:"20%",
            maxWidth:`${theme.spacing(8)}px`,
            // paddingTop: "100%",



            flexGrow : 0,

            "& .MuiInputBase-root":{
                backgroundColor : visual.highlightGrey

            }


        },
        textLabel : {
            //top right bottom left
            margin: "14px 12px 12px 12px"
            // padding : "12px"

        },

        //
        // centerAdornment : {
        //     marginLeft : "25%"
        // },
        // centerText : {
        //     textAlign : "center"
        // },

        //todo create a class for spacer div.
        // midDivs : {
        //     height : "100%",
        //     minWidth : "20px",
        //     flexGrow : 1,
        //     // width:"60%"
        //
        // }

    })
);


export default function MuiStyledAgeForm(props) {
    const classes = useAgeStyles();
    return (

        <div >
            <form id ={props.formId} key ={props.keyVal} onSubmit={props.formOnSubmit}>

                <VerticalSpacerDiv minHeight={[80,60,40,20,20]}/>

                <Grid container
                      direction={"row"}
                      justify={"center"}>

                    <Grid item xs={1} sm={2} md={3} />


                    <Grid item xs={11} sm={8} md={6} container justify={"center"}>

                        {/*<FlexDiv grow={1}/>*/}

                        <TextField
                            fullWidth={false}
                            // Logic Fields
                            type="number"
                            step="0.01"
                            variant="outlined"
                            onChange={props.onChange}
                            // placeholder="years"
                            // label="years"
                            //todo pass the name from props
                            name={props.years_name}
                            //todo limit years
                            value= {props.years_value}
                            className={classes.textBox}

                        />


                        <MuiTypography className={classes.textLabel} align="center" variant="h5">
                            <Box fontWeight = {300} fontStyle="regular">
                                years
                            </Box>
                        </MuiTypography>

                        {/*<div className={classes.midDivs}/>*/}
                        {/*<div className={classes.midDivs}/>*/}

                        <TextField
                            fullWidth={false}
                            // Logic Fields
                            type="number"
                            step="0.01"
                            variant="outlined"
                            onChange={props.onChange}
                            // placeholder="months"
                            // label="months"
                            name={props.months_name}

                            value= {props.months_value}
                            className={classes.textBox}

                        />
                        <MuiTypography className={classes.textLabel} align="center" variant="h5">
                            <Box fontWeight = {300} fontStyle="regular">
                                months
                            </Box>
                        </MuiTypography>

                        {/*<FlexDiv grow={1}/>*/}




                    </Grid>


                    <Grid item xs={false} sm={2} md={3} />


                </Grid>



            </form>
        </div>

    );


}