
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import AddTodoForm from './addTodoForm';
import { useState } from 'react';
import EditTodoForm from './editTodoForm';

function App() {
  
  const todos = useSelector( (state) => state.todos)
  const dispatch = useDispatch()
  const [editingTodo, setEditingTodo] = useState(null)


  function deleteTodo(id) {
      return dispatch({
        type: 'REMOVE_TODO',
        payload: {
          id: id
    }
      })
  }

  function editTodo(todo) {
    setEditingTodo(todo)
  }

  function checkboxTodo(todo) {
    dispatch({
      type: 'EDIT_TODO',
      payload: {
        id: todo.id,
        is_add: !todo.is_add
      }
    })
  }


  return (
    <>
      <div className="wrapper">
        {editingTodo ? (
          <EditTodoForm todo={editingTodo} onClose={() => setEditingTodo(null)}/>
        ) : (
          <>
          <AddTodoForm />
          <ul className='todolist'>
          {todos.map((todo) => (
          <li key={todo.id}>
            <div>{todo.title}</div>
            
            <div style={{display:'flex', gap:10}}>
            <button onClick={() => editTodo(todo)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <div className={todo.is_add === false ? 'checkbox red' : 'checkbox green'} onClick={() => checkboxTodo(todo)}>V</div>
            </div>
          </li>
        ))}
        </ul>
          </>
          
        )}
        {console.log(todos)}
      </div>

    </>
  );
}

export default App;
