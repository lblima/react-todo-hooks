import React from 'react';
import TodoItem from './TodoItem';

export default ({ items }) => {
  
  if (items.length === 0) {
    return <div style={{marginTop:'15px'}}>loading...</div>
  }

  return (
    <div style={{...style, ...{borderStyle: 'solid'}}}>        
      { items.map(item => <TodoItem key={ item.id } {...item} />) }
    </div>
  );
}

const style = {
  width: "300px", 
  marginTop:'15px', 
  marginLeft: 'auto', 
  marginRight: 'auto', 
  padding: '15px'
}