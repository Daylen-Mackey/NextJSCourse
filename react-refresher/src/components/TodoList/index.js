import React, { useState } from 'react'
import "./index.css"
import Modal from '../Modal'

function TodoList(props) {

const [showItem, setShowItem] = useState(true)
const [isModalOpen,setIsModalOpen] = useState(false)

    if (!showItem){
        return null
    }
    
  return (
      <> 
      {isModalOpen && <Modal setIsModalOpen = {setIsModalOpen} setShowItem = {setShowItem}/> }
    <div className="todo-container">
        <h2>{props.title}</h2>
        <div className="actions">
            <button 
            onClick = {() => setIsModalOpen(true)}
            className="btn">Delete Item</button>
        </div>
      
    </div>
            </>
  )
}

export default TodoList
