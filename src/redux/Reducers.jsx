import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    tambahTodo: (state, action) => {
      state.push(action.payload);
      return state;
    },
    hapusTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateTodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    selesaiTodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
});

export const {
  tambahTodo,
  hapusTodo,
  updateTodo,
  selesaiTodo,
} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
