import { configureStore } from '@reduxjs/toolkit'
import me_authorsReducer from "./reducers/me_authorsReducer.js"


const store = configureStore({
    reducer: {
        me_authorsReducer
    }
})

export default store
