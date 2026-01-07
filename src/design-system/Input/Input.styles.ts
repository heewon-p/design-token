/**
 * 🎨 Input Styles
 */

import styled, { css } from "styled-components";
import { tokens } from "../../tokens";
import { InputSize } from "./Input.types";

export const sizeStyles: Record<InputSize, any> = {
  sm: {
    height: "32px",
    padding: `${tokens.spacing.xs} ${tokens.spacing.sm}`,
    fontSize: tokens.typography.fontSize.sm,
  },
  md: {
    height: "40px",
    padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
    fontSize: tokens.typography.fontSize.md,
  },
  lg: {
    height: "48px",
    padding: `${tokens.spacing.md} ${tokens.spacing.lg}`,
    fontSize: tokens.typography.fontSize.lg,
  },
};

export const Container = styled.div<{ $fullWidth: boolean }>`
  display: inline-flex;
  flex-direction: column;
  gap: ${tokens.spacing.xs};
  width: ${(props) => (props.$fullWidth ? "100%" : "auto")};
`;

export const Label = styled.label`
  ${tokens.typographyPresets.bodySmall};
  font-weight: ${tokens.typography.fontWeight.medium};
  color: ${tokens.semanticColors.text.primary};
`;

export const InputWrapper = styled.div<{
  $size: InputSize;
  $error: boolean;
  $disabled: boolean;
  $hasPrefix: boolean;
  $hasSuffix: boolean;
}>`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing.xs};

  background: ${tokens.colors.white};
  border: 1px solid
    ${(props) =>
      props.$error
        ? tokens.colors.danger[500]
        : tokens.semanticColors.border.default};
  border-radius: ${tokens.radii.md};

  height: ${(props) => sizeStyles[props.$size].height};
  padding: 0 ${(props) => sizeStyles[props.$size].padding.split(" ")[1]};

  transition: ${tokens.motion.transition.fast};

  ${(props) =>
    props.$disabled &&
    css`
      background: ${tokens.semanticColors.bg.secondary};
      cursor: not-allowed;
      opacity: 0.6;
    `}

  &:hover:not(:has(input:disabled)) {
    border-color: ${(props) =>
      props.$error
        ? tokens.colors.danger[600]
        : tokens.semanticColors.border.strong};
  }

  &:focus-within:not(:has(input:disabled)) {
    border-color: ${(props) =>
      props.$error ? tokens.colors.danger[500] : tokens.colors.primary[500]};
    box-shadow: ${(props) =>
      props.$error ? tokens.shadows.focusDanger : tokens.shadows.focus};
  }
`;

export const StyledInput = styled.input<{ $size: InputSize }>`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;

  font-family: ${tokens.typography.fontFamily.sans};
  font-size: ${(props) => sizeStyles[props.$size].fontSize};
  color: ${tokens.semanticColors.text.primary};

  &::placeholder {
    color: ${tokens.semanticColors.text.tertiary};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:read-only {
    cursor: default;
  }
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  color: ${tokens.semanticColors.text.secondary};
  flex-shrink: 0;
`;

export const HelperText = styled.span`
  ${tokens.typographyPresets.caption};
  color: ${tokens.semanticColors.text.secondary};
`;

export const ErrorMessage = styled.span`
  ${tokens.typographyPresets.caption};
  color: ${tokens.colors.danger[500]};
  font-weight: ${tokens.typography.fontWeight.medium};
`;
