import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';



const fetchArticles = createAsyncThunk(
    "/article",
    async () => {
        const response = await fetch("http://localhost:9000/api/v1/article")
        const data = await response.json()
        console.log(data)
        return data
    }
    )
    
    const initialState = {
        list: [],
        isLoading: false,
        isError: false,
    };
    
    const articleSlice = createSlice({
        name:"article",
        initialState,
        extraReducers: (builder) => {
            builder
            .addCase(fetchArticles.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.list = action.payload
                state.isLoading = false
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.isError = action.error.message
                state.isLoading = false
            })
        }
    })

export {fetchArticles}
export default articleSlice.reducer