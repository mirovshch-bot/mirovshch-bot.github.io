import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"
import Button from "./Button"

const Todo = () => {

    const [tasks, setTasks] = useState( () => {
        const savedTasks = localStorage.getItem('tasks')

        if (savedTasks) {
            return JSON.parse(savedTasks)
        }

        return [
            {id: 'task-1', title: 'Купить молоко', isDone: false},
            {id: 'task-2', title: 'Погладить кота', isDone: true},
        ]
    })

    const [newTaskTitle, setNewTaskTitle] = useState('')

    const [searchQuery, setSearchQuery] = useState('')
        
    const newTaskInputRef = useRef(null)

    const firstIncompleteTaskRef = useRef(null)

    const firstIncompleteTaskID = tasks.find(({ isDone }) => !isDone)?.id

    const deleteAllTasks = useCallback(() => {
        const isConfirmed = confirm('Are you sure that you want to delete all the tasks?')

        if (isConfirmed) {
            setTasks([])
        }
    }, [])

    const deleteTask = useCallback((taskID) => {
        setTasks(prevTasks =>
            prevTasks.filter((task) => task.id !== taskID)
        )
    }, [tasks])

    const toggleTaskComplete = useCallback((taskID, isDone) => {
        setTasks(prevTasks =>
            prevTasks.map((task) => {
                if (task.id === taskID) {
                    return {...task, isDone}
                }   
                return task 
            })
        )
    }, [tasks])

    const addTask = useCallback(() => {      
        if (newTaskTitle.trim().length > 0) {
            const newTask = {
                id: crypto?.randomUUID() ?? Date.now().toString(),
                title: newTaskTitle,
                isDone: false,
            };

            setTasks(prevTasks => [...prevTasks, newTask]);
            setNewTaskTitle('');
            setSearchQuery('');
            newTaskInputRef.current.focus();
        }
    }, [newTaskTitle]);

    useEffect( () => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    useEffect( () => {
        newTaskInputRef.current.focus()
    }, [])

    
    const filteredTasks = useMemo(() => {
        const clearSearchQuery = searchQuery.trim().toLowerCase()
        
        return clearSearchQuery.length > 0
        ? tasks.filter(({ title }) => title.toLowerCase().includes(clearSearchQuery))
        : null
    }, [searchQuery, tasks])

    const doneTasks = useMemo(() => {
        return tasks.filter(({isDone}) => isDone).length
    }, [tasks])

    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm
                addTask={addTask}
                newTaskTitle={newTaskTitle}
                setNewTaskTitle={setNewTaskTitle}
                NewTaskInputRef={newTaskInputRef}
            />
            <SearchTaskForm
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <TodoInfo 
                total={tasks.length}
                done={doneTasks} 
                onDeleteAllButtonClick={deleteAllTasks}
            />
            <Button
                onClick={() => firstIncompleteTaskRef.current?.scrollIntoView({ behavior: 'smooth' })}
            >
                Show first incomplete part
            </Button>
            <TodoList
                tasks={tasks}
                filteredTasks={filteredTasks}
                firstIncompleteTaskRef={firstIncompleteTaskRef}
                firstIncompleteTaskID={firstIncompleteTaskID}
                onDeleteTaskButtonClick={deleteTask}
                onTaskCompleteChange={toggleTaskComplete}
            />
        </div>
    )
}

export default Todo