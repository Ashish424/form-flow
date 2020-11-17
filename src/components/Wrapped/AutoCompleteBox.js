import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {useBreedStyles} from "../Pages/Forms/BreedForm";

const useStyles = makeStyles((theme)=>({

        root : (props) => ({




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



    return (
        <Autocomplete
            className={`${classes.root} ${props.disabled ? classes.faded : classes.focused}`}
            disabled={props.disabled}
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