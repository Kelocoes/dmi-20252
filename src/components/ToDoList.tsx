import { useEffect, useRef, useState } from "react";

export default function ToDoList() {
    // for (let i = 0; i < 10 ** 8; i++) { }

    // const [currentText, setCurrentText] = useState("")
    const [todoList, setTodoList] = useState(["Lavar loza", "Ordenar cama"])
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        console.log('El toDo list está siendo actualizado, tengo que hacer esta acción!')
        if (inputRef.current) {
            inputRef.current.value = ""
        }
    }, [todoList])


    function saveInToDo() {
        const currentText = inputRef.current?.value || "" //Guardar el texto
        if (currentText !== "") setTodoList(prev => [...prev, currentText]) // Actualizar la lista
    }

    return (
        <div id="to-do-list-container">
            <fieldset className="fieldset ">
                <legend className="fieldset-legend text-black">¿Qué tienes por hacer?</legend>
                <input
                    type="text"
                    className="input bg-gray-200"
                    placeholder="Escribe!"
                    ref={inputRef}
                />
                <button className="btn" onClick={saveInToDo}>
                    Guardar!
                </button>
                <ol className="flex gap-1 w-72 flex-wrap">
                    {
                        todoList.map(todo => (
                            <li className="badge badge-dash badge-primary">{todo}</li>
                        ))
                    }
                </ol>
            </fieldset>
        </div>
    );
}