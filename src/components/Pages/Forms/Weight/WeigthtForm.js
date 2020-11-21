import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiTypography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Autocomplete from '@material-ui/lab/Autocomplete';
import FlexDiv from "../../../helper/FlexDiv";
import {Box} from "@material-ui/core";


//todo remove this import dependency or restrcuture here
import {useNameStyles} from "../NameForm";





export function MuiStyledWeightForm(props){

    //todo remove this import dependency or re-structure here
    const classes = useNameStyles();
    return (

        <div className={classes.root}>
            <form id ={props.formId} key ={props.keyVal} onSubmit={props.formOnSubmit} autoComplete="off">

                <Grid container
                      direction="row"
                      justify="center"

                >
                    <Grid item xs={false} sm={3}/>
                    <Grid item xs={12} sm={6} container>

                        <div className={classes.grow}/>

                        <Paper>


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


