import React from 'react'

export default function ListItem(props) {
    
    return (
        <div className="todo_style">
            <but className="btn" onClick={()=>{
                props.onSelect(props.id);
            }}>❌</but>
            <li>{props.text}</li>
        </div>
    )
}
