import {getAllData} from '../action/type';

export default (state = null, action) => {
    switch(action.type){
        case getAllData:
            return state = action.payload
        default :
            return state
    }

}