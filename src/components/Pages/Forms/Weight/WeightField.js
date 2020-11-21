import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import React from "react";


export default function Input(props) {





    return (
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
            // className={classes.textBox}
            {/*{...(error && {error:true,helperText:error})}*/}
        >


        </TextField>
    );



}