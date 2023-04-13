import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    numOfCakes: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state, action) => {
            if (state.numOfCakes > 0) {
                state.numOfCakes--;
            }
        },

        restocked: (state, action) => {
            state.numOfCakes += action.payload
        }
    }
})

export default cakeSlice.reducer
export const { ordered, restocked } = cakeSlice.actions