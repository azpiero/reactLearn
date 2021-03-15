import { connect } from "react-redux";
import TodoApp from "../components/TodoApp";
import { inputTask, addTask, deleteTask, resetSetInProp } from "../actions/tasks";

// Containers Components
// reduxとreactコンポーネントの橋渡し

// stateの情報をpropsに渡す
function mapStateToProps({ task, tasks, setInProp}){
    return {
        task,
        tasks,
        setInProp
    };
}

// dispatchの情報をpropsに渡す
function mapDispatchToProps(dispatch){
    return {
        //この名前でPropsとして渡す
        addTask(task){
            // actionsの関数を実施
            dispatch(addTask(task));
        },
        //この名前でPropsとして渡す
        inputTask(task){
            // actionsの関数を実施
            dispatch(inputTask(task));
        },
        //この名前でPropsとして渡す
        deleteTask(){
            // actionsの関数を実施
            dispatch(deleteTask());
        },
        //この名前でPropsとして渡す
        resetSetInProp(){
            // actionsの関数を実施
            dispatch(resetSetInProp());
        }
    };
}

// (TodoApp) ??
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);

