import { ADD_TODO } from "./actiontype"
export const reducer = (store, { type, payload }) => {
    switch (type) {
        case ADD_TODO:
            return [
                ...store,
                { id: payload.id, title: payload.title, status: payload.status },
            ];
       
        default:
            return store;
    }
};