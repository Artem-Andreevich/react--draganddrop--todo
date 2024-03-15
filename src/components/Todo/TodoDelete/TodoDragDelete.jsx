import { Droppable } from 'react-beautiful-dnd';


export default function TodoDragDelete() {

    return (
        <Droppable droppableId="trash" >
            {(provided, snapshot) => (
                <div className='todo-del'
                ref={provided.innerRef}
                {...provided.droppableProps}
                >
                    <div className='todo-del__message'>
                        <span>Перетащите сюда что бы удалить</span>
                    </div>
                {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
}