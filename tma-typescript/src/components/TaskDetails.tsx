import React, { useState, useReducer } from 'react';
import taskReducer from '../TaskReducer/TaskReducer.ts';
import { Task, TaskState } from '../TaskReducer/TaskReducer.ts';



const TaskManagement: React.FC = () => {
    const [taskName, setTaskName] = useState<string>('')
    const [taskDescription, setTaskDescription] = useState<string>('')
    const [taskStatus, setTaskStatus] = useState<'Complete' | 'Not Complete'>('Not Complete')
    const [state, dispatch] = useReducer(taskReducer, {TaskList: []})
    const [buttonPressed, setButtonPressed] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [editingTaskName, setEditingTaskName] = useState<string | null>(null);


    const createTask = (e: React.FormEvent) => {
        e.preventDefault();

        if (!taskName || !taskDescription || !taskStatus) {
            alert('Please enter value for each input')
            return;
        }

        const newTask = ({ name: taskName, description: taskDescription, status: taskStatus })
        dispatch({ type: 'ADD_TASK', payload: newTask})
        console.log('Task Added')
        //resetForm();
    };

    const handleShowForm = (task: Task) => {
      setEditingTaskName(task.name);
      setTaskName(task.name);
      setTaskDescription(task.description);
      setTaskStatus(task.status);
      setShowForm(true);
      setButtonPressed(true);
    };

    const editTask = (e: React.FormEvent) => {
      e.preventDefault();
      const updatedTask: Task = { name: taskName, description: taskDescription, status: taskStatus} ;
      dispatch({ type: 'EDIT_TASK', payload: updatedTask })
      setButtonPressed(false)
      setShowForm(false)
      //resetForm();
    };

    const removeTask = (taskName) => {
      dispatch({ type: 'REMOVE_TASK', payload: taskName})
      console.log(`Task ${taskName} has been removed`)
    }

    return (
        <div>
            <h2>Add a Task</h2>
            <form onSubmit={createTask}>
                <input 
                    type="text"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    placeholder="Enter task name"
                     />
                <input 
                    type="text"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    placeholder="Enter task description"
                     />
                <input 
                    type="text"
                    value={taskStatus}
                    onChange={(e) => setTaskStatus(e.target.value as 'Complete' | 'Not Complete')}
                    placeholder="Enter task status"
                     />
                    <button type="submit">Add Task</button>
            </form>

            <ul>
                {state.TaskList.map((task) => (
                    <li key={task.name}>
                        {task.name} - {task.description} - {task.status}
                        <button onClick={() => removeTask(task.name)}>Remove</button>
                        <button onClick={() => handleShowForm(task)}>Edit</button>
                    </li>
                ))}
            </ul>

                {buttonPressed && (
                  <form onSubmit={editTask}>
                  <input 
                      type="text"
                      value={taskName}
                      onChange={(e) => setTaskName(e.target.value)}
                      placeholder="Enter task name"
                       />
                  <input 
                      type="text"
                      value={taskDescription}
                      onChange={(e) => setTaskDescription(e.target.value)}
                      placeholder="Enter task description"
                       />
                  <input 
                      type="text"
                      value={taskStatus}
                      onChange={(e) => setTaskStatus(e.target.value as 'Complete' | 'Not Complete')}
                      placeholder="Enter task status"
                       />
                      <button type="submit">Edit Task</button>
              </form>
                )}
    </div>
    )
}; 

export default TaskManagement;