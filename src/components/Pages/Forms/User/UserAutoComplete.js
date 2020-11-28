import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({

        root : (props) => ({




        }),



    })
);

export default function AutoCompleteBox(props){
    const classes = useStyles();



    return (
        <Autocomplete
            className={`${classes.root}`}
            value = {props.value}
            options={props.options}
            getOptionLabel={props.getOptionLabel}
            onChange={props.onChange}
            // disabled={props.disabled}
            //todo inline styl here ???
            style={props.style}
            renderInput={props.renderInput}



        />);





}