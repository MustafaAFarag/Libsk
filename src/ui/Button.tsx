import { CircularProgress } from '@mui/material';
import React from 'react';

interface ButtonProps {
  text?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  type?: 'primary' | 'secondary';
  onClick?: () => void;
  flex?: boolean;
  small?: boolean;
  outlined?: boolean;
  full?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  isLoading = false,
  isDisabled = false,
  rightIcon,
  leftIcon,
  type = 'primary',
  onClick,
  flex = false,
  small = false,
  outlined = false,
  full = false,
}) => {
  return (
    <div
      className={`rounded-lg text-black text-sm cursor-pointer transition-all duration-300 flex items-center justify-center gap-1.5 
        ${flex ? 'flex-1' : ''} 
        ${small ? 'py-2 px-7' : 'py-4 px-6'} 
        ${full ? 'w-full' : ''} 
        ${isDisabled || isLoading ? 'opacity-80 cursor-not-allowed' : ''} 
        ${outlined ? 'bg-transparent text-primary shadow-none' : type === 'secondary' ? 'bg-secondary border border-secondary' : 'bg-primary border border-primary shadow-lg shadow-primary/40'}
      `}
      onClick={() => !isDisabled && !isLoading && onClick?.()}
    >
      {isLoading && (
        <CircularProgress
          style={{ width: '18px', height: '18px', color: 'inherit' }}
        />
      )}
      {leftIcon}
      {text}
      {isLoading && <> . . .</>}
      {rightIcon}
    </div>
  );
};

export default Button;
