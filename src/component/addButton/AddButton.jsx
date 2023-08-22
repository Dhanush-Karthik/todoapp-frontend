import React from 'react'

import "./AddButton.css";

import {FiPlus} from "react-icons/fi";

const AddButton = ({openForm,setOpenForm}) => {

  const handleClick = () =>{
    setOpenForm(!openForm);
    openForm?
      document.getElementById("button-icon").style.transform="rotate(45deg)":
      document.getElementById("button-icon").style.transform="rotate(0deg)"
    
  }

  return (
    <div className='addButton' onClick={handleClick}>
      <span id="button-icon" className='button-icon'><FiPlus size={"25px"}/></span>
    </div>
  )
}

export default AddButton
