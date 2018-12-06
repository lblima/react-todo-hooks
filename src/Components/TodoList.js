import React from 'react';
import TodoItem from './TodoItem';

export default ({ items }) => {
    return <div style={{ width: "300px", marginTop:'15px', marginLeft: 'auto', marginRight: 'auto', borderStyle: 'solid', padding: '15px' }}>
            { items.map(item => <TodoItem key={ item.id } {...item} />) }
          </div>
}