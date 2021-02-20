import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from 'redux-thunk';
import { tasksReducer } from './tasks/tasks.reducer';

const reducer = combineReducers({
    tasks: tasksReducer
})
const composeEnhanceres =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhanceres(
        applyMiddleware(thunk)
    )
);

export default store