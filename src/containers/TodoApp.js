import { connect } from "react-redux";
import TodoApp from "../components/TodoApp";
import { inputTask, addTask } from "../actions/tasks";

// Containers Components
// reduxとreactコンポーネントの橋渡し

// stateの情報をpropsに渡す
function mapStateToProps({ task, tasks }){
    return {
        task,
        tasks
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
        }
    };
}

// (TodoApp) ??
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);

