
import TodoItem from "./TodoItem";

// The TodoItems component takes two props:
// 1. todoItems: An array of todo objects containing 'name' and 'dueDate' for each item.
// 2. onDeleteClick: A function passed from the parent component to handle the deletion of a todo item.
const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div>
      {/* Mapping over the todoItems array and rendering a TodoItem for each item */}
      {todoItems.map((item) => (
        // Rendering the TodoItem component for each item in the todoItems array
        // The todoName, todoDate, and onDeleteClick are passed as props to TodoItem
        <TodoItem
          todoDate={item.dueDate}  
          todoName={item.name}     
          onDeleteClick={onDeleteClick} 
        ></TodoItem>
      ))}
    </div>
  );
};


export default TodoItems;
