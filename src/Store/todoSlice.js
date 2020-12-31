import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export const fetchPost = createAsyncThunk(
    'fetchposts',
    async (data,thunkAPI) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')        
        return await response.json();
    }
);
 
const todoSlice = createSlice({
    name: 'todo',
    initialState:{ 
        todos :[{title:'buy milk', id:1}],
        posts:[]
    },
    reducers: {
        addtodo: {
        reducer(state, action){
            console.log(action.payload)
            let newObj = action.payload
            let {id, title} = newObj
            // let newState =  [...state, newObj]
            state.todos =  [...state.todos, newObj]
            // return newState;
         

        },
        prepare(title){
            return { payload:{title:title, id:uuidv4()}}
        }
    },
  
        // deletetodo(state,action){
        //     console.log(action.payload)
        //     let newState1 = state.filter(
        //         (item)=> item.id !== action.payload
        //     )
        //     return newState1

        // }
        
        deletetodo: {
            reducer(state, action){
                console.log(action.payload.id)
                // let newState1 = state.filter(item=>item.id!=action.payload.id)
                state.todos = state.todos.filter(item=>item.id!=action.payload.id)
                
    
            },
            prepare(id){
                return {payload: {id}}
            }
        }
       
 
    },
    extraReducers: {
        [fetchPost.fulfilled] : (state, action) => {
           console.log(action.payload)
           console.log(action.payload.slice(0,10))
           state.posts = action.payload.slice(0,10)
        }
    }

})


export const { addtodo, deletetodo } = todoSlice.actions;
const todoReducer = todoSlice.reducer;
export default todoReducer