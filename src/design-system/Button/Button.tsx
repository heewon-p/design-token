/**
 * 🔘 Button Component
 * 
 * Behavior-Style Separation
 * - 이 파일: 로직만 (props 처리, 이벤트 핸들링)
 * - styles 파일: 스타일만 (variant/size/shape 매핑)
 */

import React from 'react';
import { ButtonProps } from './Button.types';
import { StyledButton, Spinner } from './Button.styles';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  shape = 'round',
  interaction = 'none',
  disabled = false,
  loading = false,
  fullWidth = false,
  children,
  onClick,
  ...rest
}) => {
  const handleClick = () => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };

  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $shape={shape}
      $interaction={interaction}
      $fullWidth={fullWidth}
      $loading={loading}
      disabled={disabled || loading}
      onClick={handleClick}
      {...rest}
    >
      {loading && <Spinner />}
      {children}
    </StyledButton>
  );
};

export default Button;

