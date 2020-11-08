import makeStyles from "@material-ui/core/styles/makeStyles";
import MuiButton from "@material-ui/core/Button";
import React from "react";
import {visual} from "../../../../helper/visual";

const useStyles = makeStyles({
    root :  (props) => ({
        minWidth : "100px",
        //todo make this border radius responsive
        borderRadius: "5em",


        // color : props.selected ? visual.packingOrange : '#ffffff',
        //
        // boxShadow: 'none',
        // backgroundColor: '#ffffff',
        // borderColor: visual.packingOrange,
        //
        // '&:hover': {
        //     boxShadow: 'none',
        //     backgroundColor: '#ffffff',
        //     borderColor: visual.packingOrange,
        // },
        // '&:active': {
        //     boxShadow: 'none',
        //     backgroundColor: '#ffffff',
        //     borderColor:  visual.packingOrange,
        // },
        // '&:disabled': {
        //     boxShadow: 'none',
        //     backgroundColor: '#ffffff',
        //     borderColor: "#ffffff00",
        // },
        //
        // '&:focus': {
        //
        //     boxShadow: 'none',
        //     backgroundColor: '#ffffff',
        //     borderColor:  visual.packingOrange,
        // },

    })
});


export default function MuiStyledChoiceButton(props){

    const {selected,...other } = props;

    const classes = useStyles(props);

    return (

        <MuiButton {...other}
                   color={selected ? "primary":"secondary"}
                   classes={
            {root : classes.root}
        } variant="contained">

        </MuiButton>

    );


}
MuiStyledChoiceButton.defaultProps = {
    selected : false
}
