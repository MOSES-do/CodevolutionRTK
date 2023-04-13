
const redux = require('redux')
const createStore = redux.createStore


const CAKE_ORDERED = 'CAKE_ORDERED'  //ACTION TYPE
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'  //ACTION TYPE

function orderCake() {
    return {
        type: CAKE_ORDERED,
        quantity: 1
    }
}


function stockCake(qty) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}
const initialState = {
    numOfCakes: 10,
}

//NOTE: To update a state property in a reducer, we must first create a copy of the state if we have more than one state properties

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                numOfCakes: state.numOfCakes - 1,
            }

        case CAKE_RESTOCKED:
            return {
                numofCakes: state.numOfCakes + action.payload
            }

        default:
            return state
    }
}



const store = createStore(reducer)
console.log("Initial state", store.getState())

const unsubscribe = store.subscribe(() => console.log('update state', store.getState()))

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(stockCake(3))

unsubscribe()

