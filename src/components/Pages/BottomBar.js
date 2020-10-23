import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MuiTypography from "@material-ui/core/Typography";
import MuiAppBar from "@material-ui/core/AppBar"



//todo sync style of both primary and secondary questions.
// #21CBF3
const styles = {
    root: {

        width : "100%",
        top : 'auto',
        bottom :0,
        // height : 12,


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
        //todo use theme spacing here for consistency
        margin: "16px 0px 0px 0px",
        padding: '9px 9px 9px 9px',

    },
    grow: {
        flexGrow: 1
    },




};


function MuiStyledButtonBarRaw(props) {
    const { classes, ...other } = props;
    return <MuiAppBar position="fixed"
            classes={{
                root:classes.root,

                }
            }
            {...other}>


        </MuiAppBar>


}

// MyButtonRaw.propTypes = {
//     /**
//      * Override or extend the styles applied to the component.
//      */
//     classes: PropTypes.object.isRequired,
//     color: PropTypes.oneOf(['blue', 'red']).isRequired,
// };

const MuiStyledButtonBar = withStyles(styles)(MuiStyledButtonBarRaw);
export default MuiStyledButtonBar;

