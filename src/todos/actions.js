//Action Type of creating todo
export const CREATE_TODO = 'CREATE_TODO';
//Action Creator for creating a todo
export const createTodo = text => ({
    type: CREATE_TODO,
    payload: { text },
});

//Action type of removing a todo
export const REMOVE_TODO = 'REMOVE_TODO';

//Action creator for removing a todo
export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: { text },
});