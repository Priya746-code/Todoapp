function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row kg-row">
        {/* Displaying the Todo Name */}
        <div className="col-6">
          {todoName} {/* Shows the todo item name */}
        </div>
        
        {/* Displaying the Todo Date */}
        <div className="col-4">
          {todoDate} {/* Shows the due date of the todo item */}
        </div>
        
        {/* Delete Button */}
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => onDeleteClick(todoName)} // Calls the onDeleteClick function with todoName as argument when clicked
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
