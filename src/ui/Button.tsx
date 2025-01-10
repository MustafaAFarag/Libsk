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
      className={`
        rounded-lg 
        text-white 
        text-sm 
        cursor-pointer 
        transition-all 
        duration-300 
        flex 
        items-center 
        justify-center 
        gap-2
        max-w-20
        whitespace-nowrap
        ${flex ? 'flex-1' : ''} 
        ${small ? 'py-2 px-8' : 'py-4 px-8'} 
        ${full ? 'w-full' : ''} 
        ${isDisabled || isLoading ? 'opacity-80 cursor-not-allowed' : ''} 
        ${
          outlined
            ? 'bg-transparent text-primary shadow-none'
            : type === 'secondary'
              ? 'bg-secondary border border-secondary'
              : 'bg-primary border border-primary shadow-lg shadow-primary/40'
        }
      `}
      onClick={() => !isDisabled && !isLoading && onClick?.()}
    >
      {isLoading && (
        <CircularProgress
          style={{ width: '16px', height: '16px', color: 'inherit' }}
        />
      )}
      {leftIcon}
      <span className="px-1">{text}</span>
      {isLoading && <span className="tracking-wider">...</span>}
      {rightIcon}
    </div>
  );
};

export default Button;
