import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MuiTypography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Card from '@material-ui/core/Card';


const useStyles = makeStyles({

    root: {

        width : "100%",
        top : 'auto',
        bottom :0,
        // height : 12,


        // background: '#F5F5F7',
        // color: 'white',


        // background: (props) =>
        //     props.color === 'red'
        //         ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
        //         : 'linear-gradient(45deg, #2196F3 30%, #333333 90%)',
        // border: 0,
        // borderRadius: 3,
        // boxShadow: (props) =>
        //     props.color === 'red'
        //         ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
        //         : '0 3px 5px 2px rgba(33, 203, 243, .3)',
        // color: 'white',

        // padding: '0 30px',
        //todo use theme spacing here for consistency
        margin: "16px 0px 0px 0px",
        padding: '9px 9px 9px 9px',

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
});



export default function MuiStyledNameForm(props){
    const classes = useStyles();
    return (
        <form id ={props.formId} key ={props.keyVal} onSubmit={props.formOnSubmit}>
            <Grid container>
                <Grid item xs={3}> </Grid>
                <Grid item xs={6}>
                        <TextField
                        /*Logic Fields*/
                        type="text"
                        variant="outlined"
                        onChange={props.onChange}
                        placeholder="Your dog's name"
                        name="mainInput"
                        value= {props.textValue}


                        className={classes.textBox}
                        // InputProps={
                        //     {
                        //         startAdornment:
                        //             <InputAdornment
                        //                 position="start"
                        //                 classes={{positionStart:classes.centerAdornment}}
                        //             >
                        //
                        //                 {""}
                        //             </InputAdornment >
                        //
                        //
                        //     }
                        // }
                        // label="Your dog's name"

                        //todo align the placeholder label
                        //https://stackoverflow.com/questions/57852393/how-to-center-placeholder-and-text-in-react-material-ui-textfield

                        // inputProps={{ style: {textAlign: 'center'} }}
                        // //todo replace this inline styles
                        style={
                            {
                                display : "flex",
                                // justifyContent : "center",
                                // alignItems : "center"

                            }
                        }
                        // // inputStyle={{ textAlign: 'center' }}
                        // hintStyle={{ width: '100%', textAlign: 'center' }}

                        >
                        </TextField>
                </Grid>
                <Grid item xs={3}> </Grid>

            </Grid>


            {/*<input*/}
            {/*    type="text"*/}
            {/*    placeholder="Your dog's name"*/}
            {/*    onChange={props.onChange}*/}

            {/*    name="mainInput"*/}
            {/*    value= {props.textValue}*/}
            {/*/>*/}


        </form>

    );
}
