import { useRef } from "react"

const useIncompleteTaskScroll = (tasks) => {
    const firstIncompleteTaskRef = useRef(null)

    const firstIncompleteTaskID = tasks.find(({ isDone }) => !isDone)?.id

    return {
        firstIncompleteTaskRef,
        firstIncompleteTaskID,
    }
}

export default useIncompleteTaskScroll