import Link from "next/link"
import { prisma } from "./db"
import { TodoItem } from "@/components/TodoItem"

/**
 * This function retrieves multiple todo items from a database using Prisma.
 * @returns The function `getTodos()` is returning the result of calling the `findMany()` method on the
 * `todo` model in the Prisma client. This will retrieve all the records from the `todo` table in the
 * database and return them as an array.
 */
function getTodos() {
  return prisma.todo.findMany()
}

/**
 * This is an async function that updates the completion status of a todo item in a database using
 * Prisma.
 * @param {string} id - The id parameter is a string that represents the unique identifier of a todo
 * item.
 * @param {boolean} complete - The `complete` parameter is a boolean value that indicates whether a
 * todo item is marked as completed or not. If `complete` is `true`, it means the todo item is marked
 * as completed, and if it is `false`, it means the todo item is not yet completed.
 */
async function toggletodo(id: string, complete: boolean) {
  "use server"

  console.log(id, complete)

  await prisma.todo.update({
      where: { id },
      data: { complete },
    })
}

export default async function Home(){

  const todos = await getTodos()

/* This is the JSX code that defines the UI for the home page of a Todo application. It includes a
header with a title and a link to create a new Todo item, as well as a list of Todo items that are
retrieved from the database using the `getTodos` function. The `TodoItem` component is used to
render each individual Todo item in the list. The `toggletodo` function is passed down to the
`TodoItem` component as a prop, so that it can be used to update the completion status of a Todo
item when it is toggled. The `return` statement is returning a fragment of JSX code that includes
all of these UI elements. */
  return <>
    <header className="flex justify-between items-center mb-4">
      <h1 className="text-2xl">Todos</h1>
      <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" 
      href="/new">
        New
      </Link>
      <ul
      className="pl-4">
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} toggletodo={toggletodo}/>
        ))}
      </ul>
    </header>

  </>
}