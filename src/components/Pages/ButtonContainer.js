import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import FlexDiv from "../helper/FlexDiv";
import HorizontalSpacerDiv from "../helper/HorizontalSpacerDiv";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme)=>({
        root: {

            width : "100%",

            // height : 12,
            //todo make these values from theme
            margin: "16px 0px 0px 0px",
            padding: '9px 9px 9px 9px',

        },

        PaperFlex : {
            display : "flex",
            width : "100%",
            backgroundColor : "#ffffff00"


        },

        topSpacerDiv : {
          width : "100%",
          //the order of these is important because css
          //applies the latest rule only
          [theme.breakpoints.down('xl')]: {
              minHeight : "20px",
              // backgroundColor: grey[500],
          },

          [theme.breakpoints.down('lg')]: {
              minHeight : "20px",
              // backgroundColor: blue[500],
          },
          [theme.breakpoints.down('md')]: {
              // backgroundColor: red[500],
              minHeight : "40px",


          },
          [theme.breakpoints.down('sm')]: {
                // backgroundColor: green[500],
              minHeight : "60px",

          },
          [theme.breakpoints.down('xs')]: {
                // backgroundColor: yellow[500],
              minHeight : "80px",

          },
        },



    })
);



//using flex for the positioning here in this iteration
export default function StandardStyleContainer(props){
    const classes = useStyles();



    // console.log("children here "+ props.children.length);

    const children = props.children;

    const childrenCount = React.Children.count(children);



    return(

        <>


                <div className={classes.topSpacerDiv}/>
                <div className={classes.PaperFlex
                        // elevation={3}
                       // variant="outlined"
                       // square
                        //    classes={
                        // { root:classes.PaperFlex
                        //
                        // }
                }>

                    <FlexDiv grow={7}/>



                            {
                                React.Children.map(children,(child,index)=>{

                                    if(index !== childrenCount-1){
                                        return(

                                            <>
                                                {child}
                                                <HorizontalSpacerDiv minWidth={10}/>

                                            </>
                                        );
                                    }
                                    else{
                                        return(

                                            <>
                                                {child}
                                            </>
                                        );

                                    }




                                })



                            }




                    <FlexDiv grow={7}/>




                </div>




            </>
    );




}

export function StandardStyleImageContainer(props){
    const classes = useStyles();

    const children = props.children;

    const childrenCount = React.Children.count(children);

    return(

        <>


            <div className={classes.topSpacerDiv}/>
            <Paper elevation={3} variant="outlined" square classes={
                { root:classes.PaperFlex

                }
            }>

                <FlexDiv grow={7}/>



                {
                    React.Children.map(children,(child,index)=>{

                        if(index !== childrenCount-1){
                            return(

                                <>
                                    {child}
                                    <HorizontalSpacerDiv minWidth={60}/>

                                </>
                            );
                        }
                        else{
                            return(

                                <>
                                    {child}
                                </>
                            );

                        }




                    })



                }




                <FlexDiv grow={7}/>




            </Paper>




        </>
    );




}

