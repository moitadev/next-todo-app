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
  
  const [items, setItems] = useState<string[]>([])

  const onAdd = (item: string) => {
    setItems([item, ...items])
  }

  return (
    <Container>
      <StyledTitle>Next Todo List App</StyledTitle>
      <TodoListWrapper>
        <TaskInput handleAdd={onAdd} />
        {items.map((item: string, index: number) => (
          <Item key={index} value={item} readOnly />
        ))}
      </TodoListWrapper>
    </Container>
  );
}
