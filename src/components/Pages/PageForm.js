import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiTypography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Autocomplete from '@material-ui/lab/Autocomplete';
import FlexDiv from "../FlexDiv";





const useStyles = makeStyles((theme)=>({

    root: {
        padding: `${theme.spacing(2)}px 0px 0px 0px`,

        width : "100%",
        // top : 'auto',
        // bottom :0,

        //todo use theme spacing here for consistency
        // margin : `${theme.spacing(2)}px 0px 0px 0px`,
        // padding: `${theme.spacing(1)}px 0px 0px 0px`


    },
    header : {

        padding: ` 0px 0px 0px ${theme.spacing(1)}px`

    },
    textBox: {
        // padding : "0px 0px 10px 10px"
        // "& $div": {
        //     justifyContent: "center",
        //     "& $input": {
        //         width: "30%"
        //     }
        // },
        // "& $p": {
        //     alignSelf: "center"
        // }
    },
    centerAdornment : {
        marginLeft : "25%"
    },
    centerText : {
        textAlign : "center"
    },
    grow: {
        flexGrow: 1
    },
    topSpacerDiv : {
        width : "100%",




        //the order of these is important because css
        //applies the latest rule only.
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

    //todo create a class for spacer div.
    midDivs : {
        height : "100%",
        minWidth : "40px"

    }

    })
);



export function MuiStyledNameForm(props){
    const classes = useStyles();
    return (

        <div className={classes.root}>
            <form id ={props.formId} key ={props.keyVal} onSubmit={props.formOnSubmit}>

                <Grid container
                      direction="row"
                      justify="center"

                >
                    <Grid item xs={false} sm={3}/>

                    {/*made this item container just for the flex box use*/}
                    <Grid item xs={12} sm={6} container>

                        <div className={classes.grow}/>

                            <Paper>

                            <MuiTypography
                                classes={{root:classes.header}}
                                // align="center"
                                variant="h6">
                                {props.secondaryText}
                            </MuiTypography>

                            <TextField
                                fullWidth={true}
                                /*Logic Fields*/
                                type="text"
                                variant="outlined"
                                onChange={props.onChange}
                                placeholder="Your dog's name"
                                name="mainInput"
                                value= {props.textValue}


                                className={classes.textBox}


                                //todo align the placeholder label
                                //https://stackoverflow.com/questions/57852393/how-to-center-placeholder-and-text-in-react-material-ui-textfield

                                // inputProps={{ style: {textAlign: 'center'} }}
                                // //todo replace this inline styles
                                // style={
                                //     {
                                //         display : "flex",
                                //         // justifyContent : "center",
                                //         // alignItems : "center"
                                //
                                //     }
                                // }

                            >
                            </TextField>


                            </Paper>
                        <div className={classes.grow}/>


                        {/*</Grid>*/}


                    </Grid>
                    <Grid item xs={false} sm={3}/>

                </Grid>




            </form>
        </div>

    );
}
export function MuiStyledWeightForm(props){
    const classes = useStyles();
    return (

        <div className={classes.root}>
            <form id ={props.formId} key ={props.keyVal} onSubmit={props.formOnSubmit}>

                <Grid container
                      direction="row"
                      justify="center"

                >
                    <Grid item xs={false} sm={3}/>
                    <Grid item xs={12} sm={6} container>

                        <div className={classes.grow}/>

                        <Paper>


                            <TextField
                                fullWidth={true}
                                /*Logic Fields*/
                                type="number"
                                step="0.01"
                                variant="outlined"
                                onChange={props.onChange}
                                placeholder="weight in kg"
                                name="mainInput"
                                value= {props.textValue}
                                className={classes.textBox}

                            >
                            </TextField>



                        </Paper>
                        <div className={classes.grow}/>


                        {/*</Grid>*/}


                    </Grid>
                    <Grid item xs={false} sm={3}/>

                </Grid>




            </form>
        </div>

    );
}
export function MuiStyledBreedForm(props) {
    const classes = useStyles();
    return (

        <div className={classes.root}>
            <form id ={props.formId} key ={props.keyVal} onSubmit={props.formOnSubmit}>

                <Grid container
                      direction="row"
                      justify="center"

                >
                    <Grid item xs={false} sm={3}/>
                    <Grid item xs={12} sm={6} container>

                        <div className={classes.grow}/>

                        <Paper>



                            <Autocomplete
                                //todo set this id from outside if needed
                                id="combo-box-demo"
                                value = {props.textValue}
                                options={props.listOptions}
                                getOptionLabel={(option) => option}
                                onChange={props.onSelectionChanged}
                                //todo inline styl here ???
                                style={{ width: 300 }}
                                renderInput={(params) =>
                                    <TextField
                                        {...params}

                                        placeholder={props.dogName + "'s breed"}
                                        variant="outlined"


                                    />}


                            />



                        </Paper>
                        <div className={classes.grow}/>


                        {/*</Grid>*/}


                    </Grid>
                    <Grid item xs={false} sm={3}/>

                </Grid>




            </form>
        </div>

    );


}
export function MuiStyledAgeForm(props) {
    const classes = useStyles();
    return (

        <>
            <form id ={props.formId} key ={props.keyVal} onSubmit={props.formOnSubmit}>


                    <div className={classes.topSpacerDiv}/>
                        {/*todo inline style remove later*/}
                        <Paper style={
                            {
                            "display": "flex",
                            "width": "100%",
                            }
                        }
                        >


                            <FlexDiv grow={1}/>

                            <TextField
                                fullWidth={false}
                            // Logic Fields
                                type="number"
                                // step="0.01"
                                variant="outlined"
                                onChange={props.onChange}
                                // placeholder="years"
                                label="years"
                                //todo pass the name from props
                                name={props.years_name}
                                //todo limit years
                                value= {props.years_value}
                                className={classes.textBox}


                            />

                            {/*todo create a class for mid divs*/}
                            <div className={classes.midDivs}/>

                            <TextField
                                fullWidth={false}
                            // Logic Fields
                                type="number"
                                step="0.01"
                                variant="outlined"
                                onChange={props.onChange}
                                // placeholder="months"
                                label="months"
                                name={props.months_name}

                                //todo limit months
                                value= {props.months_value}
                                className={classes.textBox}

                            />


                            <FlexDiv grow={1}/>



                        </Paper>







            </form>
        </>

    );


}
