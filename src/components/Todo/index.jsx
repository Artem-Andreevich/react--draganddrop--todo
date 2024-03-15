import TodoItem from './TodoItem/todo-item';
import AddTodo from './TodoAdd/addTodo';
import TodoDragDelete from './TodoDelete/TodoDragDelete';
import { useState } from 'react';

import './index.scss'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';



export default function Todo() {

    const uid = function(){
        return Date.now().toString(36) + Math.random().toString(36);
    }

    const todoList = [
        {id: uid(), title: 'Что надо сделать', completed: false,},
        {id: uid(), title: 'Что надо сделать 2', completed: true,},
        {id: uid(), title: 'Что надо сделать 3', completed: false,},
    ]
    
    const [ todoDate, setTodoDate ] = useState( todoList )
    
    todoDate.map( todos => {
        return {...todos, edit: false}
    })

    function onDelete( id ) {
        setTodoDate( todoDate.filter( todo => todo.id !== id ) )
    }

    function onCreate() {
        
        const newTodo = {
            id: uid(), 
            title: 'Новая задача',
            completed: false
        }

        setTodoDate( [...todoDate, newTodo] )
    }

    function onEdit( id, title ) {

        const editIndex = todoDate.findIndex( todo => todo.id === id)
        const editTodo = {
            ...todoDate[editIndex],
            title: title || todoDate[editIndex].title,
            edit: !todoDate[editIndex].edit,
        }

        setTodoDate( [...todoDate.slice(0, editIndex), editTodo, ...todoDate.slice(editIndex + 1)] )
    }

    function onComplete( id ) {
        const editIndex = todoDate.findIndex( todo => todo.id === id)
        const editTodo = {
            ...todoDate[editIndex],
            completed: !todoDate[editIndex].completed
        }
        setTodoDate( [...todoDate.slice(0, editIndex), editTodo, ...todoDate.slice(editIndex + 1)] )
    }

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
      
        return result;
    };

    function onDragEnd(result) {

        if (!result.destination) { return; }

        if (result.destination.droppableId === "trash") {
            onDelete(result.draggableId)
            return;
        }
    
        const items = reorder(
          todoDate,
          result.source.index,
          result.destination.index
        );
    
       setTodoDate( items )
    }

    
    return (
        <>
            <DragDropContext onDragEnd={onDragEnd} >

                <Droppable droppableId="droppable" >
                    {(provided, snapshot) => (
                        <div className='todo-items'
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        >
                            {todoDate.map( (todos, index) => {

                                return (
                                    <Draggable key={todos.id} draggableId={todos.id} index={index}>
                                    {(provided, snapshot) => (
                                        
                                        <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        >
                                           <TodoItem todoItem={todos} onDelete={onDelete} onEdit={onEdit} onComplete={onComplete} />
                                        </div>
                                    )}
                                </Draggable>
                                )
                        
                        })}
                        {provided.placeholder}
                        </div>
                    )}
                </Droppable>

                
                <AddTodo onCreate={onCreate} />

                <TodoDragDelete />
            </DragDropContext> 


        </>
    )
}


//   <DragDropContext>
//   <Droppable>
//       <div className='todo-items'> 
//           { 
//               todoDate.map( (todos) => {
//                   return ( 
//                       <TodoItem key={todos.id} todoItem={todos} onDelete={onDelete} onEdit={onEdit} onComplete={onComplete} />
//                   )
//               })
//           }
//       </div>
//   </Droppable>
// </DragDropContext> 