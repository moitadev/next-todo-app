'use client';

import React from 'react';
import { ButtonStyle } from './Button.style';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  label?: string;
};

const Button = ({ label, ...props }: ButtonProps): JSX.Element => {
  return <ButtonStyle {...props}>{label}</ButtonStyle>;
};

export { Button };
