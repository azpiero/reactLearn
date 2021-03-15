import { React } from "react";
//import { inputTask, addTask } from "../actions/tasks";

// material-uiの追加
// https://material-ui.com/components/buttons/
// buttonについてvariant="contained"がないと真っ白なボタンになった=> text button
import { Reboot, Button, AppBar, Toolbar, Typography, Input, ListItem, ListItemText, List } from '@material-ui/core';

// animation
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./TodoApp.css";

/*
export default function TodoApp({ store }){
    const { task, tasks } = store.getState();
    return (
        <div>
            <input type="text" onChange={(e) => store.dispatch(inputTask(e.target.value))}/>
            <input type="button" value="add" onClick={()=> store.dispatch(addTask(task))}/>
            <ul>
                {
                    tasks.map(function(item,i){
                        return (
                            <li key={i}> {item} </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}
*/

// containersに渡されてる情報
// <Reboot />
// もともとのbutton <input type="button" value="add" onClick={()=>addTask(task)}/>
//  


export default function TodoApp({ task, tasks, setInProp, inputTask, addTask, deleteTask, resetSetInProp }) {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography type="title" color="inherit">
                        Todo
                    </Typography>
                </Toolbar>
            </AppBar>
            <div style={{ padding: "16px" }}>
                <Input type="text" onChange={(e) => inputTask(e.target.value)} />
                <Button variant="contained" color="primary" onClick={() => addTask(task)}>add</Button>
                <Button variant="contained" color="primary" onClick={() => deleteTask()}>delete</Button>
                <List>
                    <TransitionGroup className="todo-list">
                        {tasks.map(function (item, i) {
                            return (
                                <CSSTransition
                                    classNames="example"
                                    //in={setInProp}
                                    key={i} // Listはこれだけでいいみたい...
                                    timeout={300}
                                    //onEntered={resetSetInProp}
                                >
                                    <ListItem key={i}>
                                        <ListItemText primary={`・${item}`} />
                                    </ListItem>
                                </CSSTransition>

                            );
                        })
                        }
                    </TransitionGroup>
                </List>
            </div>
        </div>
    );
}