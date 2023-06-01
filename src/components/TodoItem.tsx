"use client"

/**
 * The type TodoItemProps defines the props for a TodoItem component in a TypeScript React application.
 * @property {string} id - A unique identifier for the todo item.
 * @property {string} title - The title of a todo item.
 * @property {boolean} complete - A boolean value indicating whether the todo item is complete or not.
 * @property toggletodo - toggletodo is a function that takes in two parameters: id (a string) and
 * complete (a boolean). It is likely used to toggle the completion status of a todo item with the
 * given id.
 */
type TodoItemProps = {
    id: string,
    title: string,
    complete: boolean
    toggletodo: (id: string, complete: boolean) => void
}

export function TodoItem({ id, title, complete, toggletodo }: TodoItemProps) { 
 /* This is the JSX code that defines the appearance and behavior of a single todo item in a todo list.
 It creates an HTML list item (`<li>`) with a checkbox input and a label displaying the title of the
 todo item. The `id`, `title`, `complete`, and `toggletodo` props are used to set the initial state
 and handle changes to the todo item's completion status. When the checkbox is clicked, the
 `onChange` event handler calls the `toggletodo` function with the `id` and `complete` status of the
 todo item. If the todo item is complete, the label is styled with a line-through and a different
 text color. */
    return (
      <li className="flex gap-1 items-center">
        <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={event => toggletodo(id, event.target.checked)}
        />
        <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500" >
            {title}
        </label>
    </li>  
    )
}