import {makeStyles, useTheme} from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme)=>({

        root : (props) => ({
          flexGrow : props.grow,
           // "backgroundColor": props.color
        }),



    })
);


export default function FlexDiv(props) {


    const {grow,...other} = props;
    // const theme = useTheme();
    const classes = useStyles(props);

    return (<div className={classes.root} {...other} />);


}