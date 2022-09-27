import '../App.css';
import React, { useState } from 'react'
import DropdownList from './DropdownList.react';
import DropdownListItem from './DropdownListItem.react';
import DropdownHeader from './DropdownHeader.react';
import { DROPDOWN_TYPES } from './../constants/DropdownTypes.react';
import {useRef} from "react"

export default function Dropdown({name, options, type}) {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isOpen, setIsOpen] = useState(false)
    const curDropdown = useRef(null)

    function handleClick(event){
      if(curDropdown.current && isOpen && !curDropdown.current.contains(event.target)){
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown',handleClick)

    function handleOptionClicked(val){
      switch(type){
        case DROPDOWN_TYPES.SINGLE:
          setSelectedOptions([val]);
          break;
        case DROPDOWN_TYPES.MULTIPLE:
          if(selectedOptions.includes(val)){
            setSelectedOptions(selectedOptions.filter((option) => option !== val))
          } else {
            setSelectedOptions([...selectedOptions, val])
          }
          break;
        default:
          break;
      }
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div ref={curDropdown} className='dropdown'>
        <DropdownHeader tagline={name} text={selectedOptions.sort().join(', ')} onClick={toggleMenu}>
          {isOpen && (<DropdownList>
              {options.map(option => {
                  return <DropdownListItem key={option} 
                                          className={`${selectedOptions.includes(option) ? "active" : ""}`} 
                                          option={option} 
                                          onClick={()=>{handleOptionClicked(option);}}/>
              })}
          </DropdownList>)}
        </DropdownHeader>
   </div>
  );
}
