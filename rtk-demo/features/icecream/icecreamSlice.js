const createSlice = require('@reduxjs/toolkit').createSlice
const { cakeActions } = require('../cake/cakeSlice')

const initialState = {
    numOfIcecreams: 20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIcecreams--
        },

        restocked: (state, action) => {
            state.numOfIcecreams += action.payload
        },
    },

    /**
     * Slices can only perform actions based on their own reducer actions by default. Extra reducers are additional 
     * reducers apart from the reducer generated inside the createSlice.
     * 
     * It allows createSlice to respond to other action types besides the type it has generated
     */
    //The essence of this extrareducer is to perform an operation on one slice based on its connection to anoother slice
    //In this case, we want to decrement ice cream by 1, whenever the cake slice is run.

    /* extraReducers: {
         ['cake/ordered']: (state) => {
             state.numOfIcecreams--
         }
     }
     */

    /**The recommended approach is to use a builder function */
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state, action) => {
            state.numOfIcecreams--
        })
    }
})


module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions