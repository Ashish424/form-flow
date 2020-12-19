import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import {ReactComponent as MainLogo}  from "../../svgs/logo/logo-package.svg"
import MuiStyledTopAppBar from "../MuiStyledTopAppBar";
const useStyles = makeStyles((theme)=>({

        root : (props) => ({

            [theme.breakpoints.down('xl')]: {

                width : "10rem",
                padding : `${theme.spacing(0.125)}rem 
                            ${theme.spacing(0.125)}rem
                            ${theme.spacing(0.125)}rem`
            },
            //media breakpoints
            // [theme.breakpoints.down('lg')]: {
            //
            //     width : "10rem",
            //     padding : `${theme.spacing(0.125)}rem
            //                 ${theme.spacing(0.125)}rem
            //                 ${theme.spacing(0.125)}rem`
            //
            // },
            // [theme.breakpoints.down('md')]: {
            //
            //     width : "10rem",
            //     padding : `${theme.spacing(0.125)}rem
            //                 ${theme.spacing(0.125)}rem
            //                 ${theme.spacing(0.125)}rem`
            //
            //
            // },
            // [theme.breakpoints.down('sm')]: {
            //
            //     width : "10rem",
            //     padding : `${theme.spacing(0.125)}rem
            //                 ${theme.spacing(0.125)}rem
            //                 ${theme.spacing(0.125)}rem`
            //
            // },
            // [theme.breakpoints.down('xs')]: {
            //
            //     width : "10rem",
            //     padding : `${theme.spacing(0.125)}rem
            //                 ${theme.spacing(0.125)}rem
            //                 ${theme.spacing(0.125)}rem`
            //
            // },

        }),



    })
);


export default function LogoWrap(props){

    // let {minHeight,widthPercent,...other} = props;

    const classes = useStyles(props);

    return (

        <div className={classes.root}>

            <a href="https://momandpaw.com" target="_blank" rel="noopener noreferrer">
                <MainLogo  {...props} />
            </a>
        </div>

    );
}