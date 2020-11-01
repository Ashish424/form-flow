import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MuiTypography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Card from '@material-ui/core/Card';
import Paper from "@material-ui/core/Paper";
import MuiStyledSecondaryQuestionLabel from "./SecondaryQuestionLabel";


const useStyles = makeStyles((theme)=>({

    root: {
        padding: `${theme.spacing(2)}px 0px 0px 0px`,

        width : "100%",
        // top : 'auto',
        // bottom :0,

        //todo use theme spacing here for consistency
        // margin : `${theme.spacing(2)}px 0px 0px 0px`,
        // padding: `${theme.spacing(1)}px 0px 0px 0px`


    },
    header : {

        padding: ` 0px 0px 0px ${theme.spacing(1)}px`

    },
    textBox: {
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
})
);



export default function MuiStyledNameForm(props){
    const classes = useStyles();
    return (

        <div className={classes.root}>
            <form id ={props.formId} key ={props.keyVal} onSubmit={props.formOnSubmit}>

                <Grid container
                      direction="row"
                      justify="center"

                >
                    <Grid item xs={false} sm={3}/>
                    <Grid item xs={12} sm={6} container>

                        <div className={classes.grow}/>

                            <Paper>

                            <MuiTypography
                                classes={{root:classes.header}}
                                // align="center"
                                variant="h6">
                                {props.secondaryText}
                            </MuiTypography>

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


                                //todo align the placeholder label
                                //https://stackoverflow.com/questions/57852393/how-to-center-placeholder-and-text-in-react-material-ui-textfield

                                // inputProps={{ style: {textAlign: 'center'} }}
                                // //todo replace this inline styles
                                // style={
                                //     {
                                //         display : "flex",
                                //         // justifyContent : "center",
                                //         // alignItems : "center"
                                //
                                //     }
                                // }

                            >
                            </TextField>


                            </Paper>
                        <div className={classes.grow}/>


                        {/*</Grid>*/}


                    </Grid>
                    <Grid item xs={false} sm={3}/>

                </Grid>




            </form>
        </div>

    );
}


export function MuiStyledWeightForm(props){
    const classes = useStyles();
    return (

        <div className={classes.root}>
            <form id ={props.formId} key ={props.keyVal} onSubmit={props.formOnSubmit}>

                <Grid container
                      direction="row"
                      justify="center"

                >
                    <Grid item xs={false} sm={3}/>
                    <Grid item xs={12} sm={6} container>

                        <div className={classes.grow}/>

                        <Paper>

                            {/*<MuiTypography*/}
                            {/*    classes={{root:classes.header}}*/}
                            {/*    // align="center"*/}
                            {/*    variant="h6">*/}
                            {/*    {props.secondaryText}*/}
                            {/*</MuiTypography>*/}

                            <TextField
                                fullWidth={true}
                                /*Logic Fields*/
                                type="number"
                                step="0.01"
                                variant="outlined"
                                onChange={props.onChange}
                                placeholder="weight in kg"
                                name="mainInput"
                                value= {props.textValue}
                                className={classes.textBox}

                            >
                            </TextField>



                        </Paper>
                        <div className={classes.grow}/>


                        {/*</Grid>*/}


                    </Grid>
                    <Grid item xs={false} sm={3}/>

                </Grid>




            </form>
        </div>

    );
}