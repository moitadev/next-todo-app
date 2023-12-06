'use client';

import { ItemWrapper } from './Item.style';
import { Input } from '@/common'

const Item = ({...props}): JSX.Element => {
  return (
    <ItemWrapper>
      <Input {...props} />
    </ItemWrapper>
  );
};

export { Item };
