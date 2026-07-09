import { createContext, useState, useRef, useCallback, useEffect, useMemo } from 'react'
import useTasksLocalStorage from './useTasksLocalStorage'

const useTasks = () => {
    
    const {
        savedTasks,
        saveTasks,
    } = useTasksLocalStorage()

    const [tasks, setTasks] = useState(savedTasks ?? [
        {id: 'task-1', title: 'Купить молоко', isDone: false},
        {id: 'task-2', title: 'Погладить кота', isDone: true},
    ])

    const [newTaskTitle, setNewTaskTitle] = useState('')

    const [searchQuery, setSearchQuery] = useState('')
        
    const newTaskInputRef = useRef(null)

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

    const addTask = useCallback((title) => {      
        const newTask = {
            id: crypto?.randomUUID() ?? Date.now().toString(),
            title,
            isDone: false,
        };

        setTasks(prevTasks => [...prevTasks, newTask]);
        setNewTaskTitle('');
        setSearchQuery('');
        newTaskInputRef.current.focus();
    }, []);

    useEffect( () => {
        saveTasks(tasks)
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

    return {
        tasks,
        filteredTasks,
        deleteTask,
        deleteAllTasks,
        toggleTaskComplete,
        newTaskTitle,
        setNewTaskTitle,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        addTask,        
    }
}

export default useTasks