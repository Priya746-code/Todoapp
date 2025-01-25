import { useRef } from "react";


function Apptodo({ onNewItem }) {

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // Function to handle changes in the todo name input field
  const handleAddButtonClicked = (event) => {
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value= "";
    dueDateElement.current.value= "";//for leving the box empty after entering the item
    onNewItem(todoName, dueDate);
  };
  

  return (
    <div className="container text-center">
      <div className="row kg-row">
        {/* Todo Name Input Field */}
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}//pass refrence and use use ref
            placeholder="Enter Todo Here"
          />
        </div>

        {/* Due Date Input Field */}
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}//pass refrence and use use ref
        
          />
        </div>

        {/* Add Button */}
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked} // Calls handleAddButtonClicked when clicked
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Apptodo;
