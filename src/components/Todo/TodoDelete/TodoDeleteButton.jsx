
import '../index.scss'


export default function TodoDeleteButton( {todoItem, onDelete} ) {

    return (
        <button className='btn btn-del' onClick={ () => { onDelete(todoItem.id) }}>
            Удалить
        </button>   
    );
}