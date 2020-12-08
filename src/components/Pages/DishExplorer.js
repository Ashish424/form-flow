import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MuiTypography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";
import PrimaryBuyButton from "./PrimaryBuyButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme)=>({

        root : (props) => ({

        }),

        topGrid : {

            marginLeft: "auto",
            marginRight: "auto",
            [theme.breakpoints.down('xl')]: {
                width : "40%",



            },

            [theme.breakpoints.down('lg')]: {
                width : "60%",



            },
            [theme.breakpoints.down('md')]: {
                width : "80%",





            },
            [theme.breakpoints.down('sm')]: {
                width : "95%",





            },
            [theme.breakpoints.down('xs')]: {

                // width : "98%",
                width : "100%",



            },



        },

        card : {

            // maxHeight : "500px",
            // maxWidth : "300px",
            // maxWidth : "25vw",



            // marginLeft: `auto`,
            // marginRight: `auto`,
            // maxWidth:`100%`,
            // maxHeight:`100%`,
            // height: `auto`,
            // width:`auto`,



            // [theme.breakpoints.down('xl')]: {
            //     width : "50%",
            //     // backgroundColor: grey[500],
            // },
            //
            // [theme.breakpoints.down('lg')]: {
            //     width : "55%",
            //     // backgroundColor: blue[500],
            // },
            // [theme.breakpoints.down('md')]: {
            //     width : "65%",
            //
            //     // backgroundColor: red[500],
            //
            //
            // },
            // [theme.breakpoints.down('sm')]: {
            //
            //     width : "5%",
            //
            //     // backgroundColor: green[500],
            //
            //
            // },
            // [theme.breakpoints.down('xs')]: {
            //     width : "80%",
            //
            //     // backgroundColor: yellow[500],
            //
            // },

        },


        buyNow : {

            // width : "80%",
            marginLeft: `${theme.spacing(1.5)}px`,
            marginRight: `${theme.spacing(2)}px`,
            paddingBottom : `${theme.spacing(1.5)}px`,
            paddingTop : `${theme.spacing(1)}px`,



            [theme.breakpoints.down('xs')]: {

                // width : "60%",
                marginLeft: `${theme.spacing(2)}px`,
                marginRight: `unset`,

                paddingBottom : `${theme.spacing(0.5)}px`,
                paddingTop : `${theme.spacing(0.5)}px`,




            },

        },

        titleText : {
                marginTop : `${theme.spacing(0.5)}px`,

                [theme.breakpoints.down('xs')]: {
                    marginTop: "0px"
                },

        },

        textLeftMargin : {
            marginLeft : `${theme.spacing(2)}px`,
        },

        imgStyle : {
            width : "100%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block"

        },


        descriptionText : {
            minHeight : "120px",
            maxHeight : "120px",
            overflowY:"auto",

            [theme.breakpoints.down('xs')]: {
                minHeight: "80px",
                maxHeight :"80px",

            },

        }

        // https://stackoverflow.com/questions/54726871/changing-the-order-of-grid-item-stacking-in-material-ui
        // item2 : {
        //
        //     [theme.breakpoints.up('sm')]: {
        //         order: 2,
        //     },
        //
        // },
        // item3 : {
        //
        // }
        //
        //
        //

    }),


);


export default function DishExplorer(props) {


    const {data,...other} = props;
    const theme = useTheme();
    const classes = useStyles(props);

    const isSmall = useMediaQuery(theme.breakpoints.down('xs'));

    // todo remove inline styles from this component
    return (
        <>


            <Grid

                container
                direction={"row"}
                justify={"center"}
                spacing={2}
                className={classes.topGrid}




            >


                {
                    data.map((item,index)=>{
                        return (

                            <Grid key={index} item xs={12} sm ={4} md={4} align="center">

                                <Paper elevation={3} variant="outlined"
                                           // square
                                    className={classes.card}
                                >

                                    <Grid
                                        container
                                        direction={"row"}

                                        // justify={"center"}

                                    >
                                        <Grid item xs={5} sm ={12} md={12} align="center">
                                            <img
                                                src={data[index].img}
                                                //todo add alt attribute to these images later
                                                className={classes.imgStyle}
                                            />

                                        </Grid>

                                        <Grid item xs={7} sm ={12} md={12} align= {isSmall ? "left" : "center"}>
                                            <MuiTypography align="left" variant="h6"
                                                           className={`${classes.textLeftMargin} ${classes.titleText}` }

                                            >

                                                <Box component={"span"} fontWeight = {700} fontStyle="regular">

                                                    {data[index].title}


                                                </Box>

                                            </MuiTypography>


                                            <MuiTypography align="left" variant= {isSmall ? "body2" : "body1"}
                                                           className={`${classes.textLeftMargin} ${classes.descriptionText}`}

                                            >

                                                {data[index].description}


                                            </MuiTypography>

                                                <PrimaryBuyButton
                                                    divClass = {classes.buyNow}
                                                    onClickLink = {data[index].buyLink}

                                                >


                                                    <Box component={"span"} fontWeight = {500} fontStyle="regular">

                                                        Buy Now


                                                    </Box>

                                                </PrimaryBuyButton>

                                        </Grid>


                                    </Grid>









                            </Paper>

                            </Grid>

                        );


                    })
                }




            </Grid>


        </>





    );


}