import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import MuiProgressbar from "@material-ui/core/LinearProgress";
import {complementaryBlue, lighterWhite, visual} from "../helper/visual";


// #21CBF3
const styles = (theme)=>( {
    root: {

        width : "100%",

        // height : 12,
        height : theme.spacing(0.75),
        margin: '0 auto',



        background: visual.lighterWhite,


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
        // background: 'black',

        // padding: '0 30px',
        // margin: 8,
        //todo use theme constants here
        padding: '0 30px',

    },
    bar1Determinate :{

        background: visual.complementaryBlue,


    },





});


function MuiStyledProgressBarRaw(props) {
    const { classes, color, ...other } = props;

    return <MuiProgressbar
        classes={
            {
                root:classes.root,
                bar1Determinate:classes.bar1Determinate,


            }
        }
    {...other} />;
}


const MuiStyledProgressBar = withStyles(styles)(MuiStyledProgressBarRaw);
export default MuiStyledProgressBar;

