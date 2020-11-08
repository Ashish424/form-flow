import {makeStyles} from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme)=>(
    {

        root : (props) => ({


            height : "100%",
            //todo add functionality for both absolute and relative here
            //todo add breakpoints for different widths if needed.
            minWidth : `${props.minWidth}px`

            // "backgroundColor": props.color
        }),



    })
);


export default function HorizontalSpacerDiv(props) {

    const {minWidth,...other} = props;

    const classes = useStyles(props);

    return (<div className={classes.root} {...other} />);


}

