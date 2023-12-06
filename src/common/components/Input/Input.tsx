'use client';

import { StyledInput } from './Input.style';
import { InputProps } from '@/common';

const Input = ({ ...props }: InputProps): JSX.Element => {
  return (
    <StyledInput {...props} />
  );
};

export { Input };
