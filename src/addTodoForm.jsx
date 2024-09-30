import { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddTodoForm() {
    const dispatch = useDispatch()

    const [value, setValue] = useState('')

    function addTodo(title) {
        return dispatch({
            type: 'ADD_TODO',
            payload: {
                id: Date.now(),
                title: title,
                is_add: false
            }
        })
    }



    return (
        <form className='addTodo' onSubmit={(e) => {  
            if (!value) {
                e.preventDefault()
                addTodo('Not have title')
                setValue('')
            } else {
                e.preventDefault()
                addTodo(value)
                setValue('')
            }
        }}>
            <input className='input' type="text" placeholder='Type...' value={value} onChange={(e) => setValue(e.target.value)}/>
            <button type='submit'>ADD</button>
        </form>
    )
}



export default AddTodoForm;