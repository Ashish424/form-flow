import React from 'react';

import MuiButton from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MuiStyledChoiceButton from "../choice/MuiStyledChoiceButton";
import MuiAppBar from "@material-ui/core/AppBar";
import {withStyles} from "@material-ui/core/styles";



// const useStyles = makeStyles((theme)=>({
//         root:(props)=>(props.styleProps)
//
//     })
// );

export function StyledDiv(props){

    const {stylePropsFunc,...other } = props;


    const classes = stylePropsFunc(other);

    // const classes = props.styleProps(props);

    // const classes = useStyles(props);


    return (
        <div {...other}
         className={classes.root}
        >

        </div>
        );
}



class DivButton extends React.Component{
    constructor(props) {
        super(props);

        this._onClick = this._onClick.bind(this);
        this.ClickableVersion = this.props.ClickableMaker(this.props.Clickable,this.props.ClickableSetupData);


    }


    render() {

        const ClickableVariation = this.ClickableVersion;

        // console.log("type is "+typeof Clickable);

        return (



            <StyledDiv
                id={this.props.id}
                role="button"
                onClick= {this._onClick}
                stylePropsFunc = {this.props.divStylePropsFunc}

            >


                {/*<MuiStyledChoiceButton selected={this.props.selected}>*/}
                {/*   test*/}
                {/*</MuiStyledChoiceButton>*/}

                <ClickableVariation selected={this.props.selected}>

                </ClickableVariation>



            </StyledDiv>
        );
    }

    _onClick(event){

        // console.log("current target event "+event.currentTarget.id);
        // console.log("target event "+event.target);
        // console.log("name is " +this.state.name);
        this.props.handler(event.currentTarget.id);

    }
}

DivButton.defaultProps = {
    Clickable : MuiStyledChoiceButton

}



export default DivButton;



