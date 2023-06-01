import Link from "next/link";
import { prisma } from "../db";
import { redirect } from "next/navigation";

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