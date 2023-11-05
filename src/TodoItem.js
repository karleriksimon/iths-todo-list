import './TodoItem.css'

function TodoItem (props) {
    let cssStatus = 'Finished';
    let textStatus = 'Finished';

    return (
        <article className='Item'>
            <header className='Item-Header'>
                <h3>{props.header}</h3>
                <span className={`Item-Status ${cssStatus}`}>{props.id}</span>
            </header>
            <p>{props.desc}</p>
            <div className='Item-Controls'>
                <span className="material-symbols-outlined">
                    done
                </span>
                <span onClick={e => props.onDelete(props.id)} className="material-symbols-outlined">
                    delete
                </span>
            </div>
        </article>
    );
}

export default TodoItem;