import {makeStyles} from "@material-ui/core/styles";
// import {useTheme} from "@material-ui/core/styles";

import React from "react";

const useStyles = makeStyles((theme)=>({

        root : (props) => ({


            // minHeight : `${props.minHeight}px`,

            width : `${props.widthPercent}%`,

            [theme.breakpoints.down('xl')]: {

                minHeight : `${props.minHeight[4]}px`,
                // backgroundColor: grey[500],
            },

            [theme.breakpoints.down('lg')]: {

                minHeight : `${props.minHeight[3]}px`,
                // backgroundColor: blue[500],
            },
            [theme.breakpoints.down('md')]: {

                minHeight : `${props.minHeight[2]}px`,
                // backgroundColor: red[500],


            },
            [theme.breakpoints.down('sm')]: {


                minHeight : `${props.minHeight[1]}px`,


                // backgroundColor: green[500],


            },
            [theme.breakpoints.down('xs')]: {
                // width : "30%",


                minHeight : `${props.minHeight[0]}px`,
                // backgroundColor: yellow[500],

            },

        }),



    })
);


export default function VerticalSpacerDiv(props) {


    // const theme = useTheme();

    let {minHeight,widthPercent=100,...other} = props;


    const classes = useStyles({minHeight,widthPercent,...other});

    return (<div className={classes.root} {...other} />);


}





