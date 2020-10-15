import { combineReducers, createStore, applyMiddleware } from 'redux';
import reduxthunk from 'redux-thunk';
import ToDoData from '../reducer/reducer'

export default () => {
    const store = createStore(combineReducers({
        data : ToDoData
    }), applyMiddleware(reduxthunk));
    return store;
}