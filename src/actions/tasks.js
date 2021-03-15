import shortid from "shortid";
// ??
//import * as types from "../types.todo";

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

export const deleteTask = () => ({
    type: "DELETE_TASK",
});

export const resetSetInProp = () => ({
    type: "RESET_SETIN",
});

/*
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
}

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

// getStateの利用
// このようにすることでreducerが分割されていても全てのstateにアクセス可能.
// またActionやreducerが完結になる(いろいろadd_titleのhowを変えたいとしてもADD_TODOアクションやreducerはそのままでこのような処理を追記するだけでOK
// reducerでもsteteの中身をみて処理は可能だが、上記のようなメリットあり
// APIへのアクセスも非同期処理で、getStateが必要になってくる

export function addUniqueTodo(title){
    return(dispatch, getState) => {
        // TODO: この書き方がいまいちしっくりこない
        const {
            todo: {
                todos,
            },
        } = getState();

        const isDuplicated = todos.some(todo=> todo.title === title);

        if(isDuplicated){
            return ;
        }
        dispatch(addTodo(title));
    };
}
// 

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
//promiseバージョン
export function asyncAddTodo(title){
    return(dispatch)=>{
        sleep1000m().then(()=>{
            dispatch(addTodo(title));
        });
    };
}

// Async/Awaitバージョン
// awaitの非同期処理のあとでasyncの処理実行みたいな？
export function asyncAddTodo(title){
    return async(dispatch) => {
        await sleep1000ms();
        dispatch(addTodo(title))
    }
}
*/

