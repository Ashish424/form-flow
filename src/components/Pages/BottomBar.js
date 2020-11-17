import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import MuiAppBar from "@material-ui/core/AppBar"


const styles = (theme)=>({
    root: {
        // position : "absolute",

        width : "100%",

        top : 'auto',
        // bottom :0,


        // background: '#F5F5F7',
        // color: 'white',


        // background: (props) =>
        //     props.color === 'red'
        //         ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
        //         : 'linear-gradient(45deg, #2196F3 30%, #333333 90%)',
        // border: 0,
        // borderRadius: 3,
        // boxShadow: (props) =>
        //     props.color === 'red'
        //         ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
        //         : '0 3px 5px 2px rgba(33, 203, 243, .3)',
        // color: 'white',

        // padding: '0 30px',


        // margin: `${theme.spacing(2)}px 0px 0px 0px`,
        padding: `${theme.spacing(1)}px ${theme.spacing(1)}px ${theme.spacing(1)}px ${theme.spacing(1)}px`,



    },
    hidden: {
        opacity: 0.0,


    },
    visible: {
        opacity: 1.0
    }




});



function MuiStyledButtonBarRaw(props) {
    const { classes,visible = true, ...other } = props;
    return <MuiAppBar
        // position="fixed"
        position="relative"
        // position="sticky"

        color="transparent"
        // position="absolute"

        className={
            `${visible ? classes.visible : classes.hidden}`
        }

        classes={
                    {
                        root:classes.root,


                    }
            }
            {...other}>


        </MuiAppBar>


}


const MuiStyledButtonBar = withStyles(styles)(MuiStyledButtonBarRaw);
export default MuiStyledButtonBar;

