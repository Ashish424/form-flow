import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import MuiProgressbar from "@material-ui/core/LinearProgress";


// #21CBF3
const styles = (theme)=>( {
    root: {

        width : "100%",

        // height : 12,
        height : theme.spacing(1.5),
        margin: '0 auto',



        // background: '#a92333',
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
        // margin: 8,
        //todo use theme constants here

        padding: '0 30px',

    },
    bar1Determinate :{
        background: "#333333",
    },




});


function MuiStyledProgressBarRaw(props) {
    const { classes, color, ...other } = props;

    return <MuiProgressbar

        // className={ `${classes.root} ${classes.bar1Determinate}` }
        classes={
            {
                root:classes.root,
                bar1Determinate:classes.bar1Determinate

            }
        }
    {...other} />;
}


const MuiStyledProgressBar = withStyles(styles)(MuiStyledProgressBarRaw);
export default MuiStyledProgressBar;

