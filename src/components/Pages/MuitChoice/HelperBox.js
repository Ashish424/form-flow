import React from 'react';
import Paper from "@material-ui/core/Paper";
import FlexDiv from "../../helper/FlexDiv";
import HorizontalSpacerDiv from "../../helper/HorizontalSpacerDiv";
import {StyledDiv} from "./DivButton/DivButton";
import {verticalSpacerDivStyles} from "../../helper/styles/DivStyles";
import MuiStyledSecondaryQuestionLabel from "../SecondaryQuestionLabel";
import {ACTIVITY_SECONDARY_TITLE} from "../../../StaticText";
import MuiTypography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import VerticalSpacerDiv from "../../helper/VerticalSpacerDiv";
import MuiStyledPrimaryQuestion from "../PrimaryQuestionLabel";



const useStyles = makeStyles((theme)=>({

        root : (props) => ({

            // "backgroundColor": props.color
        }),



        paper : (props) => ({


            [theme.breakpoints.down('xl')]: {
                width : "35%",
                // backgroundColor: grey[500],
            },

            [theme.breakpoints.down('lg')]: {
                width : "50%",
                // backgroundColor: blue[500],
            },
            [theme.breakpoints.down('md')]: {
                width : "65%",

                // backgroundColor: red[500],


            },
            [theme.breakpoints.down('sm')]: {

                width : "80%",

                // backgroundColor: green[500],


            },
            [theme.breakpoints.down('xs')]: {
                width : "100%",

                // backgroundColor: yellow[500],

            },
            marginLeft: "auto",
            marginRight: "auto"




            // "backgroundColor": props.color
        }),




    })
);




function HelperBox(props){


    const classes = useStyles(props);


    // constructor(props) {
    //     super(props);
    //
    //
    // }



        return (


            <>

                <VerticalSpacerDiv minHeight={[50,50,50,50,50]}/>



                <Paper elevation={3} variant="outlined" square classes={
                    { root:classes.paper,

                    }





                }>

                    {/*todo highlight pimary text as needed*/}
                    <MuiTypography align="center" variant="h6">
                        {props.primaryText}



                    </MuiTypography>


                    <MuiTypography align="center" variant="h6">
                        {props.secondaryText}


                    </MuiTypography>




                    {/*<MuiStyledSecondaryQuestionLabel align="center" variant="h6">*/}
                    {/*    {this.props.primaryText}*/}
                    {/*</MuiStyledSecondaryQuestionLabel>*/}


                    {/*<MuiStyledSecondaryQuestionLabel align="center" variant="h6">*/}
                    {/*    {this.props.secondaryText}*/}
                    {/*</MuiStyledSecondaryQuestionLabel>*/}





                {/*    {*/}
                {/*        React.Children.map(children,(child,index)=>{*/}

                {/*            if(index !== childrenCount-1){*/}
                {/*                return(*/}

                {/*                    <>*/}
                {/*                        {child}*/}
                {/*                        <HorizontalSpacerDiv minWidth={60}/>*/}

                {/*                    </>*/}
                {/*                );*/}
                {/*            }*/}
                {/*            else{*/}
                {/*                return(*/}

                {/*                    <>*/}
                {/*                        {child}*/}
                {/*                    </>*/}
                {/*                );*/}

                {/*            }*/}




                {/*        })*/}



                {/*    }*/}



                </Paper>





            </>


        );



}

HelperBox.defaultProps = {


}



export default HelperBox;



