import React,{useState,useEffect} from 'react';
import StandardStyleContainer from "../ButtonContainer";
import MultiChoiceInput from "../MuitChoice/MultiChoiceInput";


//todo pass this as props to the function component
const initialFValues = {
    fullName : "",
    email : "",
    mobile: "",

}

export default function OwnerForm(props){


    const [values,setValues] = useState(props.initialFValues);

    return (
        <form>
            {/*<h1> {props.initialFValues.fullName} </h1>*/}



        </form>
    );
}

OwnerForm.defaultProps = {
    initialFValues : {
        fullName : "",
        email : "",
        mobile: "",

    },
}