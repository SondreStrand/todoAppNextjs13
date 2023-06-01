import Link from "next/link";
import { prisma } from "../db";
import { redirect } from "next/navigation";

/**
 * This is an async function that creates a new todo item with a title and sets its completion status
 * to false using Prisma ORM.
 * @param {FormData} data - FormData object containing the data submitted from a form. It is used to
 * extract the value of the "title" field from the form.
 */
async function createTodo(data: FormData) {
    "use server";

    const title = data.get("title")?.valueOf()
    if (typeof title !== "string" || title.length === 0) {
        throw new Error("Title is required"); 
    }

    await prisma.todo.create({ data: { title, complete:false } });
    redirect("/")
}

export default function New(){
/* This is a React component that renders a form for creating a new todo item. It includes an input
field for the title of the todo item, a cancel button that links back to the main page, and a create
button that submits the form and calls the `createTodo` function. The form is styled using Tailwind
CSS classes. */
    return (
        <>
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-2xl">New</h1>
            </header>
            <form action={createTodo} className="flex gap-2 flex-col">
                <input
                type="text"
                name="title"
                className="border border-slate-300 bg-transparent rounded
                px-2 py-1 outline-none focus-within:border-slate-100"
                />
                <div className="flex gap-1 justify-start">
                    <Link
                    href=".."
                    className="border border-slate-300 text-slate-300 px-2 py-1 rounded
                    hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
                    >
                        Cancel
                    </Link>
                    <button
                    type="submit"
                    className="border border-slate-300 text-slate-300 px-2 py-1 rounded
                    hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
                    >
                        Create
                    </button>
                </div>
            </form>
        </>
    )
}