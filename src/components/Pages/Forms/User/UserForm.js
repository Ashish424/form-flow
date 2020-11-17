
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import FormCheckbox from "../../../FormCheckBox";
import AutoCompleteBox from "../../../Wrapped/AutoCompleteBox";
import UserField from "./UserField";
import MuiTypography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";
import VerticalSpacerDiv from "../../../helper/VerticalSpacerDiv";
import InputAdornment from "@material-ui/core/InputAdornment";


export const useUserStyles = makeStyles((theme)=>({

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
            // maxWidth:`${theme.spacing(8)}px`,
            flexGrow : 0,
            padding:  ` ${theme.spacing(1.25)}px ${theme.spacing(2)}px ${theme.spacing(2)}px ${theme.spacing(2)}px`,
            // margin:  ` ${theme.spacing(1.25)}px ${theme.spacing(2)}px ${theme.spacing(2)}px ${theme.spacing(2)}px`,

        },
        textLabel : {
            //top right bottom left
            margin: "14px 12px 12px 12px"
            // margin : "120px"

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
        paperRoot : {
            '& .MuiFormControl-root': {
                width: '100%',
                padding : theme.spacing(1)
                // margin: theme.spacing(1)
            },


            // overflow : "scroll",
            // height : "400px",
            // borderStyle:"solid",
            // borderColor: "coral"

        },
        FlexContainer : {

        }


    })
);



export default function MuiStyledUserForm(props) {




    const classes = useUserStyles();

    //todo see if this hook is required
    // const [errors, setErrors] = useState({});


    function handleInputChange(event){

        // console.log("called input change "+event.target.value );
        // console.log("called input change "+event.target.name );

        props.handleInputChange(event);



        // setAutoCompleteDisabled(event.target.value);
        // props.onCheckBoxChanged(event);



    }
    function formSubmit() {
        console.log("submit here inside function");
        props.formOnSubmit();


    }

    // function validate() {
    //     let temp = {}
    //
    //     temp[props.fieldData.names[0]] = props.fieldData.values[0] ? "":"This field is required";
    //
    //
    //     // props.fieldData['names'].map((item,index)=> {
    //     //
    //     //
    //     //     temp.
    //     // });
    //     temp.fullName = props.fieldData.values[0] ? "" : "This field is required";
    //
    //     const x = props.fieldData.names[0]
    //
    //
    //     // if ('fullName' in fieldValues)
    //     //     temp.fullName = fieldValues.fullName ? "" : "This field is required."
    //     // if ('email' in fieldValues)
    //     //     temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
    //     // if ('mobile' in fieldValues)
    //     //     temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
    //     // if ('departmentId' in fieldValues)
    //     //     temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required."
    //     // setErrors({
    //     //     ...temp
    //     // })
    //
    //     // if (fieldValues == values)
    //     //     return Object.values(temp).every(x => x == "")
    //
    //
    //     setErrors({
    //         ...temp
    //     });
    //     return Object.values(temp).every(x => x==="" );
    //
    //
    //
    // }


    return (

        <div className={classes.root}>
            {/* todo move this form with id keys and onsubmit into a separate comp*/}
            <form id ={props.formId} key ={props.keyVal} onSubmit={props.formOnSubmit}  autoComplete="off">
                <VerticalSpacerDiv minHeight={[0,20,20,80,80]}/>

                <Grid container
                      direction="row"
                      justify="center"

                >
                    <Grid item xs={false} sm={4} md={4}/>
                    <Grid item xs={12} sm={4} md={4} container justify={"center"}>

                        {/*<div className={classes.grow}/>*/}

                        {/*<div>*/}
                            <Paper className={classes.paperRoot}>

                            {/*<div className={classes.f}>*/}

                                {
                                    props.fieldData['names'].map((item,index)=>{

                                        // console.log("here error is "+errors[item]);
                                        // console.log("printing errors");
                                        // console.log(props.fieldData.errors);





                                        return (
                                            <UserField
                                                name={item}
                                                label={props.fieldData['labels'][index]}
                                                onChange={handleInputChange}
                                                value={props.fieldData['values'][index]}
                                                key={index}
                                                error={props.fieldData.errors[index]}
                                                onFocus = {
                                                    ()=>{
                                                        props.handleFocusGain(item)
                                                    }
                                                }
                                                onBlur = {
                                                    ()=>{
                                                        props.handleFocusLoss(item)
                                                    }
                                                }
                                                adornment={props.fieldData.adornment[index]}

                                            />
                                        );


                                    })
                                }




                            </Paper>


                        {/*</div>*/}


                        {/*<div className={classes.grow}/>*/}


                        {/*</Grid>*/}


                    </Grid>
                    <Grid item xs={false} sm={4} md={4}/>

                </Grid>




            </form>
        </div>

    );


}
