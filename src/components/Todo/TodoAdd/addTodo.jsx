import '../index.scss'

export default function AddTodo( {onCreate} ) {

    return (
        <div className='add-todo'>
            <div className='plus'> 
                <button className='btn btn-plus' onClick={onCreate}>
                    <span></span>
                </button>
            </div>
        </div>
    );
  }