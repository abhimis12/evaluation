import { ADD_TODO } from "./actiontype";

export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload,
    };
};


