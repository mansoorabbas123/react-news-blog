import './app.css';
import { Routes } from './routes';
function App() {
  return (<>
    <Routes />
  </>);
}

export default App;

// // import React, { useState } from 'react';

// // const App = () => {

// //   const [todoName, setTodoName] = useState('');
// //   const [todoDesc, setTodoDesc] = useState('');

// //   const [todos, setTodos] = useState([
// //     { id: 1, name: 'Todo-1', desc: 'This is todo-1 description' },
// //     { id: 2, name: 'Todo-2', desc: 'This is todo-2 description' }
// //   ])

// //   const addTodo = (todo) => {
// //     const id = todos.length + 1
// //     console.log(todo);
// //     const newTodo = { id: id, name: todo.todoName, desc: todo.todoDesc }
// //     setTodos([...todos, newTodo])
// //   }

// //   const onDelete = (id) => {
// //     setTodos(todos.filter(todo => todo.id !== id))
// //   }

// //   const handleSubmit = e => {
// //     e.preventDefault();

// //     (!todoName || !todoDesc) ? alert('Please enter correct data') : addTodo({ todoName, todoDesc })

// //     setTodoName('')
// //     setTodoDesc('')
// //   }

// //   return (
// //     <div>
// //       <h1>Todo App</h1>
// //       {todos.map((todo, index) =>
// //         <div key={index}>
// //           <p>{todo.name}</p>
// //           <button onClick={() => onDelete(todo.id)}>Delete</button>
// //         </ div>)}
// //       <form onSubmit={handleSubmit}>
// //         <p>Todo Name</p>
// //         <input
// //           type="text"
// //           name="todoName"
// //           value={todoName}
// //           onChange={e => setTodoName(e.target.value)}
// //         />
// //         <p>Todo Description</p>
// //         <input
// //           type="text"
// //           name="todoDesc"
// //           value={todoDesc}
// //           onChange={e => setTodoDesc(e.target.value)}
// //         />
// //         <br />
// //         <button>Add Todo</button>
// //       </form>
// //     </div>
// //   )
// // }

// // export default App

// import { useState } from 'react';

// export default function App() {
//   const [name, setName] = useState("")

//   const inputHandler = (e) => {
//     e.preventDefault()
//     console.log(e.target)
//   }

//   return (
//     <>

//       <form action="" onSubmit={inputHandler}>
//         Name <input type="text" name="name" /><br />
//         <h3>Gender</h3>
//       male<input type="radio" name="gender" value="male" /><br />
//       female  <input type="radio" name="gender" value="female" /><br />
//         <select name="" id="">
//           <option value="react">
//             react
//           </option>
//           <option value="php">
//             php
//           </option>


//         </select>

//         <button>add data</button>
//       </form>
//     </>

//   );
// }