import '../App.css';
import React, { useState } from 'react'
import DropdownList from './DropdownList.react';
import DropdownListItem from './DropdownListItem.react';
import DropdownHeader from './DropdownHeader.react';
import { DROPDOWN_TYPES } from './../constants/DropdownTypes.react';

export default function Dropdown({name, options, type}) {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isOpen, setIsOpen] = useState(false)

    function handleClick(val){
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
    <div className='dropdown'>
        <DropdownHeader tagline={name} text={selectedOptions.sort().join(', ')} onClick={toggleMenu}>
          {isOpen && (<DropdownList>
              {options.map(option => {
                  return <DropdownListItem key={option} 
                                          className={`${selectedOptions.includes(option) ? "active" : ""}`} 
                                          option={option} 
                                          onClick={()=>{handleClick(option);}}/>
              })}
          </DropdownList>)}
        </DropdownHeader>
   </div>
  );
}
