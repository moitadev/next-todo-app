'use client';

import { Container, Item, TaskInput } from '@/common';
import { useState } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  text-align: center;
  margin-top: 2rem;
  font-weight: bold;
`;

const TodoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  max-width: 680px;
  width: 100%;
`;

export default function Home() {
  const storedItems = JSON.parse(localStorage.getItem('items') ?? '[]');
  
  const [items, setItems] = useState<string[]>(storedItems)

  const onAdd = (item: string) => {
    setItems([item, ...items])
  }

  const removeItem = (index: number) => {
    const itemsCopy = items.slice();
    itemsCopy.splice(index, 1);
    
    setItems(itemsCopy);
  };

  return (
    <Container>
      <StyledTitle>Next Todo List App</StyledTitle>
      <TodoListWrapper>
        <TaskInput handleAdd={onAdd} />
        {items.map((item: string, index: number) => (
          <Item key={index} index={index} onRemove={removeItem} value={item} readOnly />
        ))}
      </TodoListWrapper>
    </Container>
  );
}
