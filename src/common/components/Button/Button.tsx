'use client';

import React from 'react';
import { ButtonStyle } from './Button.style';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  label?: string;
  $bgColor?: string;
};

const Button = ({
  label,
  $bgColor,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyle $bgColor={$bgColor} {...props}>
      {label}
    </ButtonStyle>
  );
};

export { Button };
