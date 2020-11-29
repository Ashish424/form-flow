import axios from 'axios'


    export const API = axios.create({
        //todo set the right base url


        // baseURL: `http://localhost:5000/`
        // baseURL: `http://13.127.23.230:5000//`

    })



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
