

export interface Task {
    name: string,
    description: string,
    status: "Complete" | "Not Complete"
}

export interface TaskState {
    TaskList: Task[]
}

type TaskActions = 
   | { type: 'ADD_TASK'; payload: Task }
   | { type: 'REMOVE_TASK'; payload: string }
   | { type: 'EDIT_TASK'; payload: Task}


const taskReducer = (state: TaskState, action: TaskActions): TaskState => {
    switch (action.type) {
        case 'ADD_TASK':
            return { ...state, TaskList: [...state.TaskList, action.payload] };
        case 'REMOVE_TASK':
            return { ...state, TaskList: state.TaskList.filter(task => task.name !== action.payload) };
        case 'EDIT_TASK':
            return { ...state, TaskList: state.TaskList.map(task => 
                task.name === action.payload.name 
                 ? {...task, ...action.payload} 
                 : task ) }
        default:
            return state;
    }
};

export default taskReducer;