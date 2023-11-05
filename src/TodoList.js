import TodoItem from "./TodoItem";
import './TodoList.css';

function TodoList (props) {
    return (
        <div className="List">
            {props.items.map((item, key) => <TodoItem key={key} id={key} onDelete={props.onDelete} {...item} />)}
        </div>
    );
}

export default TodoList;