import './App.css';
import React from 'react'
import Dropdown from './components/Dropdown.react';
import { DROPDOWN_TYPES } from './constants/DropdownTypes.react';

function App() {
  return (
    <div>
      <Dropdown name={"tag"} type={DROPDOWN_TYPES.MULTIPLE} options={["Oliver Hansen","Van Henry", "April Tucker", "Ralph Hubbard"]}/>
      <Dropdown name={"age"} type={DROPDOWN_TYPES.SINGLE} options={["None","Twenty", "Twenty One", "Twenty one and a half"]}/>
    </div>);
}

export default App;
