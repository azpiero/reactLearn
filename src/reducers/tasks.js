const initialState = {
    task: "",
    tasks: [],
    setInProp : false
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
            console.log("add")
            console.log(state)
            return {
                ...state,
                tasks : state.tasks.concat([action.payload.task]),
                setInProp : true
            };
        case "DELETE_TASK":
            return {
                ...state,
                tasks : []
            };
        case "RESET_SETIN":
            console.log("reset")
            console.log(state)
            return {
                ...state,
                setInProp :false
            };
        default:
            return state;
    }
}

