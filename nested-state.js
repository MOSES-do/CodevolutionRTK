const redux = require('redux')
const createStore = redux.createStore
const produce = require('immer').produce
const combineReducers = redux.combineReducers
const applyMiddleWare = redux.applyMiddleware

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

//npm i immer 

const initialState = {
    name: 'Moses',
    address: {
        street: '275 Main BroadStree, Texas',
        city: "Texas",
        state: "Texas"
    },
}

const STREET_UPDATED = 'STREET_UPDATED';

//define action creator which returns the action object
const updateStreet = (street) => {
    return {
        type: STREET_UPDATED,
        payload: street
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STREET_UPDATED:
            // return {
            //     ...state, address: {
            //         ...state.address,
            //         street: action.payload
            //     },
            // }
            //using immer js instead, it simplifies handling immutable data structures
            return produce(state, (draft) => {
                draft.address.street = action.payload
            })

        default: {
            return state
        }
    }
}

const rootReducer = combineReducers({
    person: reducer,
})

const store = createStore(rootReducer, applyMiddleWare(logger))
console.log("Initial state", store.getState())

const unsubscribe = store.subscribe(() => console.log('update state', store.getState())) // middleWare availability makes the console.log statement in the store.subscribe unnecessary as it comes with logger out of the box.
// unsubscribe = store.subscribe(() => { })

store.dispatch(updateStreet('new street'));

unsubscribe()
