import '../App.css';
import React from 'react'

export default function DropdownHeader(props) {
  return (
    <div>
      <fieldset className='dropdownHeader'>
        <legend className='tagline'>{props.tagline}</legend>
        <p className='headerText' onClick={props.onClick}>
          {props.text}
        </p>
      </fieldset>
      {props.children}
    </div>
  );
}
