const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk
const axios = require('axios')



const initialState = {
    loading: false,
    users: [],
    error: ''
}

//Takes two parameters 1: action type and 2 is a callback fnn that creates the payload
const fetchUsers = createAsyncThunk('user/fetchUsers', () => ( //createAsyncthunk generates promise lifecycle actions such as pending, fulfilled and rejected action types, that can be listened to using the extraReducers.
    axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.data.map((user) => user.id))
))



const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, state => {
            state.loading = true
        })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false
                state.users = action.payload
                state.error = ''
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false
                state.users = []
                state.error = action.error.message
            })
    }
})


module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers