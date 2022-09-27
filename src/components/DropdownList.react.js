import '../App.css';
import React, { useState } from 'react'

export default function DropdownList(props) {

  return (
    <ul className='dropdownList'>
      {props.children}
    </ul>
  );
}
