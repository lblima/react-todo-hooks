import React, { useContext } from 'react';
import Context from '../Contexts/Context';

export default ({ id, text, completed }) => {
    const dispatch = useContext(Context);
    return (
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: '3px' }}>
        <input type="checkbox" 
                checked={completed} 
                onChange={() => dispatch({ type: "complete", payload: id })} />
        <input type="text" 
                defaultValue={text} 
                onChange={(e) => dispatch({ type: "change", payload: { id, text: e.currentTarget.value }})} />
        <button onClick={() => dispatch({ type: "delete", payload: id })}>Delete</button>
      </div>
    )
  }