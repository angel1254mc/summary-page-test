import React from 'react'

const EditToggle = ({handleState, state, className}) => {
  
    if (state)
    return (
        <div 
            className={className ?? "edit-template cursor-pointer py-1 px-2 border-gray-100 border-2 my-2"}
            onClick={() => handleState(!state)}
        >
            Exit Edit Template
        </div>
    )
    return (
        <div 
            className={className ?? "edit-template cursor-pointer py-1 px-2 border-gray-100 border-2 my-2"}
            onClick={() => handleState(!state)}
        >
            Edit Template
        </div>
    )
}

export default EditToggle