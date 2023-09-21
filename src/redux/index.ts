import { applyMiddleware, combineReducers, createStore } from "redux";
import  { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { albums } from "./albums/albumsReducer";
import { photos } from "./photos/photosReducer";

const logger = createLogger({
    diff:true,
    collapsed:true
})


const rootState = combineReducers({
    albums:albums,
    photos:photos
})

export const store = createStore(rootState, applyMiddleware(thunk, logger))


export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch