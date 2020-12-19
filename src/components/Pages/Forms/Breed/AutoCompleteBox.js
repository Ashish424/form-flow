import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {useBreedStyles} from "./BreedForm";

const useStyles = makeStyles((theme)=>({

        root : (props) => ({
            width :"300px"



        }),
        faded: {
            opacity: 0.2,


        },
        focused: {
            opacity: 1.0
        }

    })
);

export default function AutoCompleteBox(props){
    const classes = useStyles();
    // console.log("props value here is "+props.disabled);

    const disabled = props.disabled || false;


    return (
        <Autocomplete
            className={`${classes.root} ${disabled ? classes.faded : classes.focused}`}
            disabled={disabled}
            value = {props.value}
            options={props.options}
            getOptionLabel={props.getOptionLabel}
            onChange={props.onChange}
            renderInput={props.renderInput}



        />);





}