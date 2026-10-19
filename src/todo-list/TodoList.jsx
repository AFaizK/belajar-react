import Todo from "./Todo";

export default function TodoList() {
    const data = [
        {
            id : 0,
            text : "learn HTML",
            isCompleted  : true
        },
        {
            id : 1,
            text : "learn React",
            isCompleted  : true,
            // isDeleted : true
        },
        {
            id : 2,
            text : "learn Golang",
            isCompleted  : true
        },
        {
            id : 3,
            text : "learn Node",
            isCompleted  : false
        }
    ]

    // const todos = data.map((todo) => <Todo {todo.id} {...todo} />)
    return (
        <ul>
            {/* {todos} */}
            {data.map((todo) => (
                <Todo key={todo.id} {...todo} />
            ))}
        </ul>
    )
}