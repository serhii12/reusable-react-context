import createContext from './createContext';

const initialState = [];
const reducer = (state = initialBlogState, { type, payload }) => {
    switch (type) {
        case 'GET_ALL_TODO_ACTIONS':
            return [];
        case 'CREATE_TODO':
            return [];
        default:
            return state;
    }
};

const actions = {
    onGetTodos: dispatch => async () => {
        dispatch({ type: 'GET_ALL_TODO_ACTIONS', payload: resp });
    },
    onCreateTodo: dispatch => async (title, content) => {
        dispatch({ type: 'CREATE_TODO', payload: { title, content } });
    },
};

export const { Context, Provider } = createContext(reducer, actions, initialState);
