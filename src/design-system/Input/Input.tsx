/**
 * 📝 Input Component (Headless Architecture)
 * 
 * Behavior와 Style이 완전 분리된 Headless Input
 */

import React, { useState } from 'react';
import { InputProps } from './Input.types';
import {
  Container,
  Label,
  InputWrapper,
  StyledInput,
  IconWrapper,
  HelperText,
  ErrorMessage,
} from './Input.styles';

export const Input: React.FC<InputProps> = ({
  size = 'md',
  error = false,
  errorMessage,
  helperText,
  label,
  prefix,
  suffix,
  fullWidth = false,
  disabled,
  readOnly,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container $fullWidth={fullWidth}>
      {label && <Label>{label}</Label>}
      
      <InputWrapper
        $size={size}
        $error={error}
        $disabled={!!disabled}
        $hasPrefix={!!prefix}
        $hasSuffix={!!suffix}
      >
        {prefix && <IconWrapper>{prefix}</IconWrapper>}
        
        <StyledInput
          $size={size}
          disabled={disabled}
          readOnly={readOnly}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...rest}
        />
        
        {suffix && <IconWrapper>{suffix}</IconWrapper>}
      </InputWrapper>
      
      {error && errorMessage && (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      )}
      
      {!error && helperText && (
        <HelperText>{helperText}</HelperText>
      )}
    </Container>
  );
};

export default Input;

