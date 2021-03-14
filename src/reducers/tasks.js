const initialState = {
    task: "",
    tasks: []
};

// export が分離した際にはおそらく必要
// 外から見れるように
export default function tasksReducer(state= initialState, action){
    switch(action.type){
        case "INPUT_TASK":
            return {
                ...state,
                task : action.payload.task
            };
        case "ADD_TASK":
            return {
                ...state,
                tasks : state.tasks.concat([action.payload.task])
            };
        default:
            return state;
    }
}

