import Counter from "../../components/Counter"
import ToDoList from "../../components/ToDoList"

export default function StatePage() {
    return (
        <div id="state-page" className="bg-white p-10 min-h-screen text-black flex flex-col items-center gap-y-8">
            <h1 className="text-4xl font-bold">Página de estados!</h1>
            <Counter />
            <div className="divider divider-neutral"></div>
            <ToDoList />
        </div>
    )
}