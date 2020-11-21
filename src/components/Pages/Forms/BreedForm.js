// import {useNameStyles} from "./NameForm";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import FormCheckbox from "../../FormCheckBox";
import AutoCompleteBox from "../../Wrapped/AutoCompleteBox";


export const useBreedStyles = makeStyles((theme)=>({

        root: {
            padding: `${theme.spacing(2)}px 0px 0px 0px`,
            // minWidth : `${theme.spacing(60)}px`,

            width : "100%",
            // top : 'auto',
            // bottom :0,

        },
        header : {

            // top right bottom left
            padding: ` ${theme.spacing(3)}px ${theme.spacing(2)}px ${theme.spacing(1)}px ${theme.spacing(2)}px`

        },
        textBox: {
            padding:  ` ${theme.spacing(1.25)}px ${theme.spacing(2)}px ${theme.spacing(2)}px ${theme.spacing(2)}px`,
            // margin:  ` ${theme.spacing(1.25)}px ${theme.spacing(2)}px ${theme.spacing(2)}px ${theme.spacing(2)}px`,


            width : '100%',


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
        centerGrow: {
            flexGrow: 1
        },
        checkBox : {
            // padding: `${theme.spacing(3)}px ${theme.spacing(2)}px ${theme.spacing(1)}px ${theme.spacing(2)}px`
            padding: `${theme.spacing(1)}px ${theme.spacing(0)}px ${theme.spacing(0)}px ${theme.spacing(5)}px`

        },


    })
);



export default function MuiStyledBreedForm(props) {



    const classes = useBreedStyles();


    function toggleBreedBox(event){
        // console.log("called toggle "+event.target.value );


        props.onCheckBoxChanged(event);



    }
    return (

        <div className={classes.root}>
            <form id ={props.formId} key ={props.keyVal} onSubmit={props.formOnSubmit} autoComplete="off" >

                <Grid container
                      direction="row"
                      justify="center"

                >
                    <Grid item xs={false} sm={3}/>
                    <Grid item xs={12} sm={6} container>

                        <div className={classes.grow}/>

                        <div>
                            <Paper elevation={props.checkBoxValue ? 0 : 3}>

                                <AutoCompleteBox
                                    //todo set this id from outside if needed

                                    id="combo-box-demo"
                                    value = {props.textValue}
                                    options={props.listOptions}
                                    getOptionLabel={(option) => option}
                                    onChange={props.onSelectionChanged}
                                    disabled={props.checkBoxValue}
                                    //todo inline styl here ???
                                    style={{ width: 300 }}
                                    renderInput={
                                        (params) =>
                                            (<TextField
                                                {...params}

                                                placeholder={props.dogName + "'s breed"}
                                                variant="outlined"


                                            />)
                                    }



                                >



                                </AutoCompleteBox>




                                {/*todo delete this only for reference here now*/}
                                {/*<Autocomplete*/}
                                {/*    //todo set this id from outside if needed*/}
                                {/*    id="combo-box-demo"*/}
                                {/*    value = {props.textValue}*/}
                                {/*    options={props.listOptions}*/}
                                {/*    getOptionLabel={(option) => option}*/}
                                {/*    onChange={props.onSelectionChanged}*/}
                                {/*    disabled={autoCompleteDisabled}*/}
                                {/*    //todo inline styl here ???*/}
                                {/*    style={{ width: 300 }}*/}
                                {/*    renderInput={(params) =>*/}
                                {/*        <TextField*/}
                                {/*            {...params}*/}

                                {/*            placeholder={props.dogName + "'s breed"}*/}
                                {/*            variant="outlined"*/}


                                {/*        />}*/}


                                {/*/>*/}





                            </Paper>
                            <FormCheckbox
                                class = {classes.checkBox}

                                name="CheckBox"
                                label = {"I don't know " + props.dogName +"'s breed"}
                                onChange = {toggleBreedBox}
                                value = {props.checkBoxValue}

                            >


                            </FormCheckbox>



                        </div>


                        <div className={classes.grow}/>


                        {/*</Grid>*/}


                    </Grid>
                    <Grid item xs={false} sm={3}/>

                </Grid>




            </form>
        </div>

    );


}
