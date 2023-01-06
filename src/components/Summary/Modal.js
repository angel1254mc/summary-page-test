import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

const Modal = ({template = "summary", appearHandler, appearState, confState, setConfState, supplementaryData}) => {

  if (template === 'summary')
  return (
    <SummaryModal appearHandler = {appearHandler} appearState={appearState} confState = {confState} setConfState = {setConfState} summaryData={supplementaryData}/>
  )
}

export default Modal

const SummaryModal = ({appearHandler, appearState, confState, setConfState, summaryData}) => {
    const [title, setTitle] = useState(confState?.title);
    const [elements, setElements] = useState(confState?.elements);
    const onDragEnd = (result) => {
        // Create new elements array
        const newElements = [...elements];
        // Splice and store the element we are moving
        const [removed] = newElements.splice(result.source.index, 1);
        // Splice the element we're moving into place
        newElements.splice(result.destination.index, 0, removed);
        // Update our element state
        setElements(newElements)
    }
    if (appearState)
    return (
        <div id="modal_outer" className="darkened w-full h-full absolute flex justify-center items-center top-0 left-0">
        <div id="modal_container" className="bg-white max-w-[900px] max-h-[600px] w-[400px] sm:w-[50vw] rounded-md flex flex-col">
            <div className="w-full p-2 h-auto text-lg font-bold text-black flex justify-between border-b-2 border-gray-200">
                <div className="modal-header">
                        Editing Summary Section
                </div>
                <div classname="modal-remove p-4" onClick ={() => appearHandler(false)}>
                    <FontAwesomeIcon icon={faXmark}/>
                </div>
            </div>
            <div className="w-full h-auto flex flex-col p-4 gap-y-1text-sm text-gray-800">
                <div className="text-lg text-black">
                    Section Title
                </div>
                <div className="">
                    <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="fields-group flex flex-col">
                    <div className="text-lg mb-2 text-black w-full flex justify-between">
                        <div className="py-1">Edit Fields</div>
                        <div className="bg-teal-600 px-2 py-1 flex items-center rounded-sm text-white text-sm">Add New Field</div>
                    </div>
                    <div className="instructions text-sm">Drag and drop the fields to swap their orders within the section</div>
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable type="FIELDS_EDIT" droppableId={`fields_edit`}>
                        {(droppableProvided, droppableSnapshot) => (
                            <div 
                            id="edit-fields-body" 
                            className="w-full h-auto h-max-[400px] gap-y-1"
                            ref={droppableProvided.innerRef}
                            {...droppableProvided.droppableProps}
                            >
                                {elements.map((field, index) => {
                                    return (
                                        <Draggable type="FIELDS_EDIT" key={`${field}-${index}`} draggableId={`${field}-${index}`} index={index}>
                                            {(draggableProvided, draggableSnapshot) => (
                                                <EditField fieldKey={field} innerProvided={draggableProvided} summaryData={summaryData} />
                                            )}
                                        </Draggable>
                                    )
                                })}
                                {droppableProvided.placeholder}
                            </div>
                        )}
                        </Droppable>
                    </DragDropContext>
                </div>
            </div>
        </div>
    </div>
    )
    else (
        <></>
    )
}

const EditField = ({fieldKey, innerProvided, summaryData}) => {
    return (
        <div 
        ref={innerProvided.innerRef}
        {...innerProvided.draggableProps}
        id="edit-field-el" 
        className="w-full border-2 rounded-sm border-gray-200 text-black flex flex-col">
            <div className="w-full h-auto p-1 flex justify-between bg-gray-200 text-sm border-b-2">
                <div className="flex text-sm gap-x-2 font-bold">
                    <div
                    {...innerProvided.dragHandleProps}
                    className="text-md">
                        <FontAwesomeIcon icon={faBars}/>
                    </div>
                    
                </div>
                <div className="flex text-red-500">Remove</div>
            </div>
            <div className="w-full flex p-1 bg-white justify-between text-sm">
                <div className="flex text-md gap-x-2 font-bold">
                    {summaryData.fields[fieldKey].label}
                </div>
            </div>
        </div>
    )
}