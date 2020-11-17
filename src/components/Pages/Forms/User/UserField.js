import React from 'react'
import TextField from "@material-ui/core/TextField";


export default function Input(props) {

    const { name, label, value,error=null, onChange,onBlur=()=>{},onFocus=()=>{} } = props;
    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={(e)=>{
                onFocus(e);
            }}
            onBlur={onBlur}
            InputProps={props.adornment}
            {...(error && {error:true,helperText:error})}
        />
    )
}
