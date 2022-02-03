import React, { useState } from "react";
import ListItem from "./ListItem";

const ToDoListApp = () => {
  const [list, setList] = useState('');
  const [btn, setBtn] = useState([]);

  const inputEvent = (event) => {
    setList(event.target.value);
  }

  const btnClick = () => {
    setBtn((preValue) => {
      return [...preValue, list];
    });
    setList('');
  }
  const delItems=(id)=>{
    // console.log("delete")
    setBtn((oldItem)=>{
      return oldItem.filter((arrEle, index)=>{
        return index !== id;
      })
    })
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" onChange={inputEvent} value={list} name="" placeholder="Add a Items" />
          <button onClick={btnClick}>+</button>
          <ol>
            {btn.map((itemValue, index) => {
              return <ListItem
                  key ={index}
                  id= {index}
                  text = {itemValue}
                  onSelect ={delItems}
              />
            })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default ToDoListApp;