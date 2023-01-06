import React, { useState } from 'react'
import { testData as fakeData} from '../../testdata'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import EditToggle from './EditToggle';
import Modal from './Modal';

const Summary = () => {
    const [edit, setEdit] = useState(false);
    const [testData, setTestData] = useState(fakeData)
    const [editSection, setEditSection] = useState(false);

    const onDragEnd = () => {
        
    }


  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div className="w-full flex justify-end">
        <EditToggle state={edit} handleState={setEdit}/>
    </div>
    <div className="w-full h-full flex flex-wrap sm:flex-nowrap gap-x-2 overflow-y-auto">
        {
            Object.keys(testData.summary).map((column, index) => {
                return <SummaryColumn editState={edit} index={index} key={column} column_data={testData.summary[column]} testData={testData}/>
            })
        }
    </div>
    </DragDropContext>
  )
}


const SummaryColumn = ({column_data, index, editState, testData}) => {
    return (
        <Droppable type="SUMM_CARD" droppableId={`column-${index}`}>
            {(droppableProvided, droppableSnapshot) => (
                <div 
                ref={droppableProvided.innerRef}
                {...droppableProvided.droppableProps}
                className="w-full sm:w-1/2 h-auto flex flex-col gap-y-2">
                    {
                        column_data.map((field_obj,index) => {
                            return (
                                <Draggable type="SUMM_CARD" key={`${field_obj.title}-${index}`} draggableId={`${field_obj.title}`} index={index}>
                                    {(draggableProvided, draggableSnapshot) => (
                                    <SummaryElement editState={editState} element_data={field_obj} innerProvided={draggableProvided} testData={testData} />
                                    )}
                                </Draggable>
                            )
                        })
                    }
                    {droppableProvided.placeholder}
                </div>
            )}
        </Droppable>
    )
}

const SummaryElement = ({element_data, innerProvided, editState, testData}) => {
    const [editSection, setEditSection] = useState(false);
    const [sectionData, setSectionData] = useState(element_data)
    return (
        <div 
        ref={innerProvided.innerRef}
        {...innerProvided.draggableProps}
        className="w-full h-auto border-gray-200 bg-white rounded-md border-2">
            <div className="summary-element-header w-full p-2 border-b-2 border-gray-200 font-medium text-lg flex justify-between">
                <div>{element_data.title}</div>
                    <div className={`edit-group flex gap-x-4  ${!editState ? 'hidden' : ''}`}>
                        <div 
                        onClick = {() => { 
                            setEditSection(!editSection)
                            console.log(editSection);
                        }}
                        className='p-1 cursor-pointer text-blue-600 text-sm font-normal color'
                        >
                            Edit Fields
                        </div>
                        <div 
                        {...innerProvided.dragHandleProps}
                        className="text-lg">
                            <FontAwesomeIcon icon={faBars}/>
                        </div>
                    </div>
            </div>
            {editSection ? <Modal template="summary" appearHandler={setEditSection} appearState={editSection} confState={sectionData} setConfState={setSectionData} supplementaryData={testData}/> : <></>}
            <div className="p-2 summary-body px-2 flex flex-col gap-y-2">
                {
                    element_data.elements.map((field_key, index) => {
                        return <FieldElement field_data = {testData.fields[field_key]} />
                    })
                }
            </div>
        </div>

    )
}

const FieldElement = ({field_data}) => {
    return (
        <div className="w-full text-xs flex justify-between">
            <div className="w-1/3 flex justify-end pr-8 font-bold">{field_data.label}</div>
            <div className="w-2/3">{field_data.value}</div>
        </div>
    )
}
export default Summary

