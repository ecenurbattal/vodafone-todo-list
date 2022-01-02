import React from 'react';
import Button from '../Button';
import Input from '../Input';
import './inputBox.scss';

const InputBox = () => {
  return (
    <div className='inputBox'>
      <Input placeholder='New Task...'/>
      <Button>Add</Button>
    </div>
  )
}

export default InputBox
