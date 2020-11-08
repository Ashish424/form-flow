import {makeStyles, useTheme} from "@material-ui/core/styles";
import React from "react";
import MuiAppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles((theme)=>({

        root : (props) => ({


        }),



    })
);


export default function MuiStyledTopAppBar(props) {


    // const theme = useTheme();

    let {...other} = props;

    const classes = useStyles(props);

    return (<MuiAppBar className={classes.root} {...other} />);


}





