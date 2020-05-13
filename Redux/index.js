const redux = require ('redux')
const reduxLogger = require ('redux-logger')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger ()

const BUY_CHOC = 'BUY_CHOC'
const BUY_ICECREAM ='BUY_ICECREAM'

function buyChoc() {
    return {
        type: BUY_CHOC,
        info: 'First Redux action'
       
   };
}
function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: 'First Redux action'
       
   };
}

//(previousstate , action)=> newstate

// const intialState = {
//     noOfChoc: 10
// }
const intialChocState = {
     noOfChoc:10
}
const intialIceCreamState = {
     noOfIceCream:20
}
const chocReducer = (state = intialChocState, action) => {
    switch(action.type) {
        case BUY_CHOC: return {
            ... state,
            noOfChoc: state.noOfChoc - 1
        } 
        default : return state
    }

}
const  iceCreamreducer = (state = intialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ... state,
            noOfIceCream: state.noOfIceCream - 1
        } 
        default : return state
    }

}
const rootReducer = combineReducers({

    choc: chocReducer,
    iceCream: iceCreamreducer

})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial State', store.getState())
const unsuscribe = store.subscribe(() => {} )
store.dispatch(buyChoc())
store.dispatch(buyChoc())
store.dispatch(buyChoc())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsuscribe()