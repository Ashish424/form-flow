import React from 'react';
import MuiButton from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {visual} from "../../helper/visual";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";

const useStyles = makeStyles((theme)=>({

        root : (props) => ({



            width : "100%",

            [theme.breakpoints.down('xs')]: {

                // width : "98%",
                width : "unset"

            },
            // fontSize : "0.5rem",
            // padding : `0px`,


            // borderRadius: "14px",



            boxShadow: 'none',

            color : '#ffffff',
            backgroundColor:visual.packingOrange,


            // borderColor: visual.packingOrange,

            '&:hover': {
                boxShadow: 'none',
                backgroundColor: visual.packingOrangeDark,
                borderColor: visual.packingOrange,



            },
            '&:active': {
                boxShadow: 'none',
                // backgroundColor: '#ffffff',
                // borderColor: '#ffffff',

                backgroundColor: visual.packingOrangeDark,
                borderColor: '#ffffff',


            },
            '&:disabled': {
                boxShadow: 'none',
                backgroundColor: visual.packingOrangeDark,
                borderColor: "#ffffff00",
            },



        }),



    })
);



export default function PrimaryBuyButton(props){




    let {divClass,onClickLink,...other} = props;
    const classes = useStyles(props);
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('xs'));
    function onClickHandler(event){

        event.preventDefault();
        window.open(onClickLink, "_blank")


    }

    return (

        <div className={props.divClass}>

            <MuiButton className={classes.root} {...other}
                       // color={"primary"}
                       variant={"contained"}
                       {...(isSmall && {size:"small"}) }
                onClick={onClickHandler}

            >

            </MuiButton>

        </div>


    );




}
