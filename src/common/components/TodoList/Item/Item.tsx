'use client';

import { ItemWrapper } from './Item.style';
import { Button, Input, InputProps } from '@/common';

type ItemProps = {
  onRemove: (index: number) => void;
  index: number;
  value: string;
} & InputProps;

const Item = ({onRemove, index, value, ...props}: ItemProps): JSX.Element => {
  return (
    <ItemWrapper>
      <Input value={value} {...props} />
      <Button label="-" $bgColor="#F75143" onClick={() => onRemove(index)} />
    </ItemWrapper>
  );
};

export { Item };
