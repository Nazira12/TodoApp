import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { todoSliceReducer } from "./todoSlice";

const reducers = combineReducers ({
    todo: todoSliceReducer
})

export const store = configureStore({
    reducer: reducers
})

store.subscribe(() =>{
    const state = store.getState()
    const todo = state.todo.data
    localStorage.setItem("todo", JSON.stringify(todo))
})