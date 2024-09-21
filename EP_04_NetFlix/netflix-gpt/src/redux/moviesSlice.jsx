import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerId: null,
        popularMovies: null,
        upcomingMovies:null,
        showGptSearch:false,
    },

    reducers: {
        addNowPlaying: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerId: (state, action) => {
            state.trailerId = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload;
        },
        toggleGptSearched: (state,action) => {
            state.showGptSearch = !state.showGptSearch;
        }
    }
})


export const { addNowPlaying, addTrailerId, addPopularMovies,addUpcomingMovies } = movieSlice.actions;
export default movieSlice.reducer;