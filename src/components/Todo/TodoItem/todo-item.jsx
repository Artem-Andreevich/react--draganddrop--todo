import TodoDeleteButton from '../TodoDelete/TodoDeleteButton';
import TodoEditButton from '../TodoEdit/TodoEditButton';
import TodoTitle from '../TodoEdit/TodoTitle';
import TodoInput from '../TodoEdit/TodoInput';

import '../index.scss'



export default function TodoItem({ todoItem, onDelete, onEdit, onComplete }) {

    return (
        
        <div className='todo-item'> 

            { todoItem.edit
                ? <TodoInput todoItem={todoItem} onEdit={onEdit} />
                : <TodoTitle todoItem={todoItem} onComplete={onComplete} />
            }

            <TodoEditButton todoItem={todoItem} onEdit={onEdit} />

            <TodoDeleteButton todoItem={todoItem} onDelete={onDelete} />
        </div>
    
    );
  }