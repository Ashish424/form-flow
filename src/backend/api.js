import axios from 'axios'


    export const API = axios.create({
        //todo set the right base url



        // baseURL:`http://127.0.0.1:5000/`
        // baseURL: `http://localhost:5000/`

    })



//todo improve this function
export function makeGetReq(){


    API.get('/breeds').then(res => {
        // console.log("response received here " + res.data);
        console.log(res.data[0]);
        console.log(typeof res.data[0]);

    }).catch(err => {
        console.log("err in get res " + err);
        if (!err.response) {
            console.log("no res from server");
        }
    }).then(() => {
        //always executed
        // console.log("always executed");
    })
}

// API.get('/').then(res =>{
//     console.log("response received here " +res.data);
//     // console.log(res.data);
//
// }).catch(err =>{
//     console.log("err in get res "+err);
//     if(!err.response){
//
//         console.log("no res from server");
//     }
// }).then(()=>{
//     //always executed
//     console.log("always executed");
// })
