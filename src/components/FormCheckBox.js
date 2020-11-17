import React from 'react'
import { FormControl, FormControlLabel, Checkbox as MuiCheckbox } from '@material-ui/core';

export default function FormCheckbox(props) {

    const { name, label, value, onChange } = props;
    console.log("name is "+name);


    const convertToDefEventPara = (name, value) => {
        // console.log("name is "+name + " value is "+value);
        return({target : {name, value}});
    }

    return (
        <FormControl className={props.class}>
            <FormControlLabel
                control={<MuiCheckbox
                    name={name}
                    color="primary"
                    checked={value}
                    onChange={e => onChange(convertToDefEventPara(name, e.target.checked))}
                />}
                label={label}
            />
        </FormControl>
    )
}
