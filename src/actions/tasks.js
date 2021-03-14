import shortid from "shortid";
// ??
import * as types from "../types.todo";

export const inputTask = (task) => ({
    type: "INPUT_TASK",
    payload: {
        task
    }
});

export const addTask = (task) => ({
    type: "ADD_TASK",
    payload: {
        task
    }
});

// 同期アクションクリエータ
// actionを返す
export function addTodo(title){
    return{
        type: types.ADD_TODO,
        payload: {
            id: shortid.generator(),
            title
        }
    };
)

// 非同期アクションクリエータ
// 関数をreturnしている
// ここで非同期処理(setTimeout)をよべる
// その結果addTodo関数の結果のactionを返すことができる
// これはコールバックを用いた方法、コールバックにdispatchを指定する
export function asyncAddTodo(title){
    return(dispatch, getState) => {
        setTimeout(() =>{
            dispatch(addTodo(title));
        }, 1000)
    };
}

// promiseバージョン
/*

const sleep1000m = () =>{
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve();
        },1000);
    });
}

export function addTodo(title){
    return {
        type: types.ADD_TODO,
        payload:{
            id: shortid.generator(),
            title
        },
    };
}

// 非同期処理(1000mで1秒待つ)を実行した上でresolve(thenの後に書かれた処理を実行するのを保証する感じかな？)
export function asyncAddTodo(title){
    return(dispatch)=>{
        sleep1000m().then(()=>{
            dispatch(addTodo(title));
        });
    };
}
*/

