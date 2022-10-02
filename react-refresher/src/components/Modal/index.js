import React, { useState } from 'react'
import "./index.css"

function Modal(props) {
  return (
    <div className="modal-container">
        <p>Are you sure?</p>
        <button
        onClick = {
            () => {
                props.setIsModalOpen(false)
            }
        }
        >Cancel</button>
        <button
        onClick = { () => 
            {props.setShowItem(false)
                props.setIsModalOpen(false)
            
            }}
        >Confirm</button>
      
    </div>
  )
}

export default Modal

{/* <Modal modalOpenHandler = {setIsModalOpen} deleteItemHandler = {setShowList}/> } */}