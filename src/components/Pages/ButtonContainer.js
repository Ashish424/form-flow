import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import MuiTypography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {useTheme} from "@material-ui/core/styles";


const useStyles = makeStyles((theme)=>({
        root: {

            width : "100%",

            // height : 12,

            //todo need to make these things responsive.
            margin: "16px 0px 0px 0px",
            padding: '9px 9px 9px 9px',

        },
        //todo move this to a root level @ theme
        grow:{
            flexGrow: 1

        }



    })
);

export default function MuiStyledButtonContainer(props) {
    const theme = useTheme();
    const classes = useStyles();
    const matches = useMediaQuery(theme.breakpoints.down('xs'),{
        defaultMatches: false
    });



    // console.log("children here "+ props.children.length);

    const children = props.children;

    const childrenCount = React.Children.count(children);
    console.log("default matches "+matches.toString())


    return(
    //todo make this gird container work for better accessibility on mobile phone.
    //todo if use media query hook is not worth the effort add a div with flex using custom classes.
    <Grid container direction="row" justify="flex-start" alignItems="center"

          spacing={
              matches ? 8 : 0

            }
          >

        <Grid item xs={12} sm={12}/>

            <Grid item xs={12} sm={12}>

                <Paper elevation={3} variant="outlined" square classes={
                    { root:classes.root

                    }
                }>



                        <Grid
                              container
                              direction="row"
                              // justify="center"
                              // alignItems="center"
                              align="center"
                              // spacing={0}

                        >
                            <Grid item xs={props.xs_gutter} sm = {props.sm_gutter} />


                            <Grid item xs = {props.xs_main} sm = {props.sm_main}
                                  container direction="row" justify="center" spacing={props.spacing_main}>
                                <Grid item xs={props.xs_gutter_main} sm={props.sm_gutter_main} />


                                {
                                React.Children.map(children,(child,index)=>{

                                        return(

                                            <Grid item

                                                  xs={props.xs_child_main}
                                                  sm={props.sm_child_main}


                                                  // sm = {Math.ceil(12/childrenCount)}

                                                  container

                                                  // justify="center"
                                            >

                                                <Grid item xs={12}>
                                                    {child}
                                                </Grid>
                                            </Grid>
                                        );



                                })



                            }

                            <Grid item xs={props.xs_gutter_main} sm={props.sm_gutter_main} />


                            </Grid>



                            <Grid item xs={props.xs_gutter} sm = {props.sm_gutter} />


                        </Grid>



                </Paper>

             </Grid>
        {/*</Grid>*/}


    </Grid>

    );



}



MuiStyledButtonContainer.defaultProps = {
    xs_gutter : false,
    sm_gutter : 1,
    xs_main : 12,
    sm_main : 10,
    spacing_main : 0,
    xs_child_main :  6,
    sm_child_main : 6,
    xs_gutter_main :false,
    sm_gutter_main :false,


}

export function DoubleStyledButtonContainer(props){


    // const xs_gutter_width = 1;
    // const xs_main_width = 12-2*xs_gutter_width;
    // const sm_gutter_width = 2;
    // const sm_main_width = 12-2*sm_gutter_width;




    return (
        <MuiStyledButtonContainer
            xs_gutter = {1}
            xs_main = {10}

            sm_gutter = {5}
            sm_main = {2}

            spacing_main = {0}
            xs_child_main =  {6}

            sm_child_main = {6}

            {...props}>

        </MuiStyledButtonContainer>

    );

}

export function TripleStyledButtonContainer(props){


    return (
        <MuiStyledButtonContainer
            xs_gutter = {false}
            xs_main = {12}

            sm_gutter = {4}
            sm_main = {4}


            spacing_main = {0}

            xs_child_main =  {4}
            sm_child_main = {4}

            {...props}>

        </MuiStyledButtonContainer>
    );




}

export function QuadStyledButtonContainer(props){


    const xs_gutter_width = 0;
    const xs_main_width = 12-2*xs_gutter_width;
    const sm_gutter_width = 2;
    const sm_main_width = 12-2*sm_gutter_width;

    return (
        <MuiStyledButtonContainer
            xs_gutter = {xs_gutter_width === 0 ? false : xs_gutter_width}
            xs_main = {xs_main_width}

            sm_gutter = {sm_gutter_width === 0 ? false : sm_gutter_width}
            sm_main = {sm_main_width}

            spacing_main = {2}
            xs_child_main =  {12}

            sm_child_main = {2}

            {...props}>

        </MuiStyledButtonContainer>
    );




}


export function PentaStyledButtonContainer(props){


    const xs_gutter_width = 0;
    const xs_main_width = 12-2*xs_gutter_width;
    const sm_gutter_width = 2;
    const sm_main_width = 12-2*sm_gutter_width;

    return (
        <MuiStyledButtonContainer
            xs_gutter = {xs_gutter_width === 0 ? false : xs_gutter_width}
            xs_main = {xs_main_width}


            sm_gutter = {sm_gutter_width === 0 ? false : sm_gutter_width}
            sm_main = {sm_main_width}


            spacing_main = {2}
            xs_child_main =  {12}
            // xs_gutter_main = {false}

            sm_child_main = {2}
            sm_gutter_main = {1}

            {...props}>

        </MuiStyledButtonContainer>
    );




}

