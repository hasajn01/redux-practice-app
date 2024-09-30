import { useState } from "react";
import { useDispatch } from "react-redux";


function EditTodoForm({todo, onClose}) {
    const [title, setTitle] = useState(todo.title)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        title.length !== 0 ? dispatch({
            type: 'EDIT_TODO',
            payload: {
                id: todo.id,
                title: title
            }
        }) : dispatch({
            type: 'EDIT_TODO',
            payload: {
                id: todo.id,
                title: 'Not have title'
            }
        })
        onClose();
    }

    return (
        <form className='editTodo' onSubmit={handleSubmit}>
            <input type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}/>
            <button type="submit">SAVE</button>
        </form>
    )
}


export default EditTodoForm;