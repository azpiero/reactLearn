
/*
import { createStore } from "redux";
import { render } from 'react-dom';
import React from "react";
 
//const initialState ={
//  tasks: []
//};
const initialState ={
  tasks: [],
  task: "",
};


// こっちの方がすっきりするけどどうなんだ?
// payloadとは？
//const addTask = (task) =>({
//  type: "ADD_TASK",
//  task_: task,
//});

const addTask = (task) =>({
    type: "ADD_TASK",
    payload:{
      task
    }
    //task:task_,
});
  

const inputTask = (task) => ({
  type: "INPUT_TASK",
  payload: {
    task
  }
  //task : task_,
});

//function tasksReducer(state = initialState, action){
//  switch(action.type){
//    case "ADD_TASK":
//      return {
//        ...state,
//        tasks: state.tasks.concat([action.task_])
//      };
//    default:
//      return state;
//  }
//}

function tasksReducer(state = initialState, action){
  switch(action.type){
    case "INPUT_TASK":
      return {
        ...state,
        task: action.payload.task
      };
    case "ADD_TASK":
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task])
      };
    default:
      return state; 
  }
}

const store = createStore(tasksReducer);
// dispatch / subscribe / getState / replaceReducer


// subscribeでstoreの状態が変更になった際にcallbackを設定できる
// unsubscribeで解除

//function handleChange(){
//  console.log(store.getState())
//}

//store.subscribe(handleChange)
// unsubscribe()で解除。
// react-reduxでは隠蔽される。storeの状態変化でreactのviewが更新される。

//console.log(store.getState())
//store.dispatch(addTask("learn store"));

//store.dispatch(addTask("learn store2"));


function TodoApp({ store }){
  const { task, tasks } = store.getState();
  return(
    <div> 
      <input type="text" onChange={(e) => store.dispatch(inputTask(e.target.value))}/>
      <input type="button" value="add" onClick={() => store.dispatch(addTask(task))}/>
      <ul>
        {
          tasks.map(function(item,i){
            return (
              <li key={i}>{item} </li>
            );
          })
        }
      </ul>
    </div>
  );
}

function renderApp(store){
  render(
    <TodoApp store={store} />,
    document.getElementById("root")
  );
}

store.subscribe(()=> renderApp(store));
renderApp(store)
*/

//import React, { useReducer } from "react"; ??
import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
// ApplyMiddleware
import { createStore, applyMiddleware } from "redux";
import tasksReducer from "./reducers/tasks";
// containers(橋渡しさんに渡す)
import TodoApp from "./containers/TodoApp";
//import TodoApp from "./components/TodoApp";
// BrowserRouter
import { BrowserRouter as Router , Route } from "react-router-dom";
// actionのログを表示する
//import logger from "redux-logger";

// storeも分離した方がいいかも
import thunk from "redux-thunk";

// loggerの自前実装
const logger = store => next => action  =>{
  console.log(store.getState());
  // どのようなaction?
  console.log(action);
  const result = next(action);

  // 次のaction適応後のstateも表示する
  console.log(store.getState());
  console.log("=====");

  return result;
}

// thunk
// actionとして渡されるのが関数だった場合にそれを実行するイメージ??
// 普通渡されるのは{ type : "DO_SOMETHING "}
// store.dispatch((dispatch,getState) =>{ dispatch({type: "DO_SOMETHING"})})
// のように関数渡せる(最終的にはactionである必要がある(おそらく))
// 任意のタイミングでdispatchを行うことができる
/*
const thunk = store => next => action =>{
  if (typeof action === "function"){
    return action(store.dispatch, store.getState);
  } else {
    return next(action)
  }
}
*/

//localstorage
// reloadしても消えない
const storageMiddleware = store => next => action =>{
  const result = next(action);
  // window?? javascriptのstrageAPIを叩いてる.
  // https://developer.mozilla.org/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
  window.localStorage.setItem("app-state",JSON.stringify(store.getState()));
  return result;
}


const savedState = JSON.parse(window.localStorage.getItem("app-state"));

const store = createStore(
  tasksReducer,
  savedState ? savedState : tasksReducer(undefined, {type: "INIT"}),
  applyMiddleware(logger,storageMiddleware, thunk )
);

//function renderApp(store){
//  render(
//    <TodoApp store={store}/>,
//    document.getElementById("root")
//  );
//}

// store.subscribe(()=> renderApp(store));
// renderApp(store)
// Routeによってパスを変えられる exact=trueでURL指定が基本だが、常に表示させたいものとかはexact不要
//<Route path="/users" component={Users} />
//<Route exact path="/users/:id" component={UserDetail} />
render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={TodoApp} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

/*
シングルページアプリケーション内の遷移を容易にする
<Link to={{
  pathname: "./courses",
  search: "?sort=name",
  hash: "#the-hash",
  state: { fromDashboard: true}
}}/>
*/