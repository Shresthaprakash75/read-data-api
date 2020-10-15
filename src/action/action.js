import axios from 'axios';
import {getAllData} from './type';

const readDataurl = "https://jsonplaceholder.typicode.com/todos/"
// const readDatabody = {
//     "ClientID" : "uUItRvyg27bA5YE",
//     "AuthToken" : "dXNlcjpwYXNzd29yZA=="
// }

// export const readData = () => {
//     return async function(dispatch){
//         await axios.post(readDateurl, readDatabody, {
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }).then((data) => {console.log(data)}).catch((error) => {console.log(error.message)})
//     }
// }

export const readData = () => {
    return async function(dispatch){
        await axios.get(readDataurl).then((data) => {
            dispatch({
                type: getAllData,
                payload : data.data
            })
        }).catch((error) => {console.log(error.message)})
    }
}