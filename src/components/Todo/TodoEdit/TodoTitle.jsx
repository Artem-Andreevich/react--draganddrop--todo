

export default function TodoTitle( {todoItem, onComplete} ) {

    return (
        <span 
            className={ todoItem.completed ? 'todo-item__title completed' : 'todo-item__title'}
            onClick={ () => { onComplete(todoItem.id) }}
            > {todoItem.title}
        </span>
    );
}