const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cake/cakeSlice')
const iceCreamReducer = require('../features/icecream/icecreamSlice')
const userReducer = require('../features/userAsync/userSlice')
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()


const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: iceCreamReducer,
        user: userReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})


module.exports = store