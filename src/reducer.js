const initialState = {
    todos: []
}

export const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload] // добавляем новую задачу
            }

        case 'REMOVE_TODO': 
            return {
                ...state,
                todos: state.todos.filter((item) => item.id !== action.payload.id) // фильтруем задачи
            }

            case 'EDIT_TODO':
                return {
                    ...state,
                    todos: state.todos.map((todo) => todo.id === action.payload.id ? {...todo, ...action.payload} : todo)
                }

        default:
            return state
    }   
}

