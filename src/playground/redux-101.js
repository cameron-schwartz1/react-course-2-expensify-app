import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET',

});

const countReducer = (state = { count: 0 }, action) => {
    
    if (action.type == 'INCREMENT') {

        return {
            count: state.count + action.incrementBy
        };
    } 
    if (action.type == 'DECREMENT') {

        return {
            count: state.count - action.decrementBy
        };
    } 
    if (action.type == 'RESET') {
        return {
            count: 0
        };
    }    
    if (action.type == 'SET') {
        return {
            count: action.count
        };
    
    }else {
        return state;
    }
};


const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));


store.dispatch(setCount({ count: -100 }));


