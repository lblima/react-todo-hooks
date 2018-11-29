import React, { useReducer, useContext, useEffect } from 'react';
import './App.css';

function appReducer(state, action) {
  switch (action.type) {
    case "reset":
      return action.payload;
    case "add": 
      return [
        ...state,
        {
          id: Date.now(),
          text: '',
          completed: false
        }
      ];
    case "delete":
      return state.filter(item => item.id !== action.payload);
    case "complete":
    return state.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed
          }
        }

        return item;
      }
     );
    default:
      break;
  }
}

const Context = React.createContext();

export default function AppTodoHook() {
    const [state, dispatch] = useReducer(appReducer, []);

    useEffect(() => {
      const raw = localStorage.getItem("data");
      dispatch({ type: "reset", payload: JSON.parse(raw) });
    }, []);
    
    useEffect(() => {
      localStorage.setItem("data", JSON.stringify(state));
    }, [state]);

    return (
      <Context.Provider value={dispatch}>
        <div className="App">
            <h3>todo hooks</h3>
            <button onClick={() => dispatch({ type: "add" })}>New Item</button>
            <br />
            <br />
            <TodoList items={state} />
        </div>
      </Context.Provider>
    );
}

function TodoList({ items }) {
  return <div style={{ width: "300px" }}>
          { items.map(item => <TodoItem key={ item.id } {...item} />) }
        </div>
}

function TodoItem({ id, text, completed }) {
  const dispatch = useContext(Context);
  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
      <input type="checkbox" checked={completed} onChange={() => dispatch({ type: "complete", payload: id })} />
      <input type="text" defaultValue={text} />
      <button onClick={() => dispatch({ type: "delete", payload: id })}>Delete</button>
    </div>
  )
}