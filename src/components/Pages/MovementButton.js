import React from 'react';
import MuiButton from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {visual} from "../../helper/visual";

const useStyles = makeStyles((theme)=>({

        root : (props) => ({


            // borderRadius: "14px",

            //todo here set button colors.
            color : visual.packingOrange,

            boxShadow: 'none',
            backgroundColor: '#ffffff',
            borderColor: visual.packingOrange,

            '&:hover': {
                boxShadow: 'none',
                backgroundColor: '#ffffff',
                borderColor: visual.packingOrange,
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: '#ffffff',
                borderColor: '#ffffff',
            },
            '&:disabled': {
                boxShadow: 'none',
                backgroundColor: '#ffffff',
                borderColor: "#ffffff00",
            },



        }),



    })
);



export default function MovementButton(props){



    // let {,...other} = props;
    const classes = useStyles(props);

    return (

        <MuiButton className={classes.root} {...props}>

        </MuiButton>


    );




}
