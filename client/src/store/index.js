import {configureStore} from "@reduxjs/toolkit";
import articleReducer from "./slice/article.js"

const store = configureStore({
    reducer: {
        article: articleReducer,
    }
});

export default store;