'use client';

import React, { ChangeEvent } from 'react';
import { Button, Input } from '@/common';
import { InputWrapper } from './TaskInput.style';
import { useState } from 'react';

const TaskInput = ({handleAdd}): JSX.Element => {

  const [task, setTask] = useState('');
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => (setTask(e.target.value))

  const handleClick = () => {
    if (task !== '') {
      handleAdd(task);
      setTask('');
    }
  }

  return (
    <InputWrapper>
      <Input onChange={handleChange} value={task} />
      <Button label='+' onClick={handleClick} />
    </InputWrapper>
  );
};

export { TaskInput };
