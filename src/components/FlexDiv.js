import {makeStyles, useTheme} from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme)=>({

        root : (props) => ({
          flexGrow : props.grow,
           // "backgroundColor": props.color
        }),


        // grow : {
        //     flexGrow : (props) =>({
        //         props.grow
        //     })
        //
        //
        //     // flexGrow : 1,
        //     // "backgroundColor" : theme.test
        //
        //
        // },


        // [theme.test] : {
        //
        //     "backgroundColor": blue[500]
        // }



    })
);


export default function FlexDiv(props) {


    const {grow,...other} = props;
    // const theme = useTheme();
    const classes = useStyles(props);

    return (<div className={classes.root} {...other} />);


}

