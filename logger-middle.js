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