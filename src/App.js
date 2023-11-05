import './App.css';
import TodoList from './TodoList';
import Form from './Form';
import { useState } from 'react';

function App() {
  const [items, updateListItems] = useState([]);

  const updateTodoList = (header, desc) => {
    const newItem = {
      header: header,
      desc: desc
    };

    updateListItems([...items, newItem]);
    console.log('Items', items);
  }

  const deleteListItem = (itemIndex) => {
    const newList = [...items];
    newList.splice(itemIndex, 1);
    updateListItems(newList);
  }

  return (
    <div className='Main'>
      <h1>Todo App</h1>
      <Form onSubmit={updateTodoList} />
      <TodoList onDelete={deleteListItem} items={items}/>
    </div>
  );
}

export default App;
