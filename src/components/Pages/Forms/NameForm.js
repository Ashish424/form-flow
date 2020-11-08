import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FlexDiv from "../../helper/FlexDiv";
import Paper from "@material-ui/core/Paper";
import MuiTypography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import React from "react";
import {visual} from "../../../helper/visual";

export const useNameStyles = makeStyles((theme)=>({

        root: {
            padding: `${theme.spacing(2)}px 0px 0px 0px`,
            // minWidth : `${theme.spacing(60)}px`,

            width : "100%",
            // top : 'auto',
            // bottom :0,

        },
        header : {

            // top right bottom left
            padding: ` ${theme.spacing(3)}px ${theme.spacing(2)}px ${theme.spacing(1)}px ${theme.spacing(2)}px`

        },
        textBox: {
            padding:  ` ${theme.spacing(1.25)}px ${theme.spacing(2)}px ${theme.spacing(2)}px ${theme.spacing(2)}px`,
            // margin:  ` ${theme.spacing(1.25)}px ${theme.spacing(2)}px ${theme.spacing(2)}px ${theme.spacing(2)}px`,


            width : '100%',


            // padding : "0px 0px 10px 10px"
            // "& $div": {
            //     justifyContent: "center",
            //     "& $input": {
            //         width: "30%"
            //     }
            // },
            // "& $p": {
            //     alignSelf: "center"
            // }
        },
        centerAdornment : {
            marginLeft : "25%"
        },
        centerText : {
            textAlign : "center"
        },
        grow: {
            flexGrow: 1
        },
        centerGrow: {
            flexGrow: 1
        },


    })
);




export default function MuiStyledNameForm(props){
    const classes = useNameStyles();
    return (

        <div className={classes.root}>
            <form id ={props.formId} key ={props.keyVal} onSubmit={props.formOnSubmit} autoComplete="off">

                <Grid container
                      direction="row"
                      justify="center"

                >
                    <Grid item xs={false} sm={2} md={3} />

                    {/*made this item container just for the flex box use*/}
                    <Grid item xs={12} sm={8} md={6} container>


                        <FlexDiv grow={1}/>


                        <Paper className={classes.centerGrow} elevation={3}>


                            <MuiTypography

                                classes={{root:classes.header}}
                                // align="center"
                                variant="h6">

                                <Box fontWeight = {400} fontStyle="italic">
                                    {props.secondaryText}
                                </Box>
                            </MuiTypography>



                            {/*//todo align the placeholder label*/}

                            {/*//https://stackoverflow.com/questions/57852393/how-to-center-placeholder-and-text-in-react-material-ui-textfield*/}


                            <TextField
                                fullWidth={true}
                                /*Logic Fields*/
                                type="text"
                                variant="outlined"
                                onChange={props.onChange}
                                placeholder="Your dog's name"
                                name="mainInput"
                                value= {props.textValue}


                                className={classes.textBox}

                            >
                            </TextField>


                        </Paper>

                        <FlexDiv grow={1}/>


                    </Grid>
                    <Grid item xs={false} sm={2} md={3} />

                </Grid>




            </form>
        </div>

    );
}