import MuiButton from "@material-ui/core/Button";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles((theme)=>({
    root:(props)=>( {

        display: "flex",
        width: "100%",
        // height: "100%",



    })
    ,
    imgBaseFirst: (props)=>({
        width: "100%",
        // backgroundColor: "coral"


    }),
    imgBaseSecond:(props)=>( {
        width: "100%",
        marginLeft: "-100%",
        // backgroundColor: "coral"

    })
    ,


    imgHidden: {
        opacity: 0.0,


    },
    imgVisible: {
        opacity: 1.0
    }

    })
);

export default function MuiStyledImage(props){

    const {selected,selectedImg,normalImg,...other } = props;

    const classes = useStyles(other);

    const isSelected = selected;




    return (


        <div className={classes.root}>

            <MuiButton>

                {/*//overlap flex implementation https://stackoverflow.com/questions/6780614/css-how-to-position-two-elements-on-top-of-each-other-without-specifying-a-hei*/}

                {/*//todo add alt attribute to these images later */}

                <img src={selectedImg}
                    className = {

                        `${classes.imgBaseFirst} ${isSelected ? classes.imgVisible : classes.imgHidden}`

                    }
                />
                <img src={normalImg}
                    className = {
                        `${classes.imgBaseSecond} ${!isSelected ? classes.imgVisible : classes.imgHidden}`

                    }

                />



            </MuiButton>


        </div>

    );



}
MuiStyledImage.defaultProps = {
    selected : false,
    widthPercent : 100
}
