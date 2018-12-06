import React, { useReducer, useEffect } from 'react';
import AppReducer from '../Reducer/AppReducer';
import Context from '../Contexts/Context';
import TodoList from './TodoList';
import './App.css';

// if (process.env.NODE_ENV !== 'production') {
//   const {whyDidYouUpdate} = require('why-did-you-update');
//   whyDidYouUpdate(React);
// }

export default function AppTodoHook() {
    const [state, dispatch] = useReducer(AppReducer, []);

    useEffect(() => {
      const raw = localStorage.getItem("data");
      dispatch({ type: "reset", payload: JSON.parse(raw) });
    }, []);
    
    useEffect(() => {
      localStorage.setItem("data", JSON.stringify(state));
      document.title = `${state.length} ${state.length > 1 ? 'items': 'item'}`;

      return () => console.log("unmounting...");
    }, [state]);

    return (
      <Context.Provider value={dispatch}>
        <div className="App">
            <h3>hooks</h3>
            <button onClick={() => dispatch({ type: "add" })}>New Item</button>
            <TodoList items={state} />
        </div>
      </Context.Provider>
    );
}