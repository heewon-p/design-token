/**
 * 🎨 Button Styles
 *
 * 스타일 매핑 전략:
 * - 모든 스타일은 토큰 기반
 * - Object Map으로 variant/size/shape 관리
 * - 디자인 변경 시 이 파일만 수정
 */

import styled, { css } from "styled-components";
import { tokens } from "../../tokens";
import { ButtonVariant, ButtonSize, ButtonShape } from "./Button.types";
import { InteractionType } from "../../tokens";

/**
 * Variant 스타일 맵
 */
export const variantStyles: Record<ButtonVariant, any> = {
  primary: {
    background: tokens.colors.primary[500],
    color: tokens.colors.white,
    border: "none",
    "&:hover:not(:disabled)": {
      background: tokens.colors.primary[600],
    },
    "&:active:not(:disabled)": {
      background: tokens.colors.primary[700],
    },
  },
  secondary: {
    background: tokens.colors.secondary[100],
    color: tokens.colors.secondary[700],
    border: `1px solid ${tokens.colors.secondary[300]}`,
    "&:hover:not(:disabled)": {
      background: tokens.colors.secondary[200],
      borderColor: tokens.colors.secondary[400],
    },
    "&:active:not(:disabled)": {
      background: tokens.colors.secondary[300],
    },
  },
  danger: {
    background: tokens.colors.danger[500],
    color: tokens.colors.white,
    border: "none",
    "&:hover:not(:disabled)": {
      background: tokens.colors.danger[600],
    },
    "&:active:not(:disabled)": {
      background: tokens.colors.danger[700],
    },
  },
};

/**
 * Size 스타일 맵
 */
export const sizeStyles: Record<ButtonSize, any> = {
  sm: {
    padding: `${tokens.spacing.xs} ${tokens.spacing.sm}`,
    fontSize: tokens.typography.fontSize.sm,
    height: "32px",
  },
  md: {
    padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
    fontSize: tokens.typography.fontSize.md,
    height: "40px",
  },
  lg: {
    padding: `${tokens.spacing.md} ${tokens.spacing.lg}`,
    fontSize: tokens.typography.fontSize.lg,
    height: "48px",
  },
};

/**
 * Shape 스타일 맵
 */
export const shapeStyles: Record<ButtonShape, any> = {
  sharp: {
    borderRadius: tokens.shapePresets.sharp,
  },
  round: {
    borderRadius: tokens.shapePresets.round,
  },
  pill: {
    borderRadius: tokens.shapePresets.pill,
  },
};

/**
 * Styled Button
 */
interface StyledButtonProps {
  $variant: ButtonVariant;
  $size: ButtonSize;
  $shape: ButtonShape;
  $interaction: InteractionType;
  $fullWidth: boolean;
  $loading: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  /* Reset */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${tokens.spacing.xs};

  /* Typography */
  font-family: ${tokens.typography.fontFamily.sans};
  font-weight: ${tokens.typography.fontWeight.medium};
  line-height: 1;
  white-space: nowrap;

  /* Variant styles */
  ${(props) => css`
    background: ${variantStyles[props.$variant].background};
    color: ${variantStyles[props.$variant].color};
    border: ${variantStyles[props.$variant].border};

    &:hover:not(:disabled) {
      background: ${variantStyles[props.$variant]["&:hover:not(:disabled)"]
        .background};
      ${variantStyles[props.$variant]["&:hover:not(:disabled)"].borderColor &&
      css`
        border-color: ${variantStyles[props.$variant]["&:hover:not(:disabled)"]
          .borderColor};
      `}
    }

    &:active:not(:disabled) {
      background: ${variantStyles[props.$variant]["&:active:not(:disabled)"]
        .background};
    }
  `}

  /* Size styles */
  ${(props) => css`
    padding: ${sizeStyles[props.$size].padding};
    font-size: ${sizeStyles[props.$size].fontSize};
    min-height: ${sizeStyles[props.$size].height};
  `}
  
  /* Shape styles */
  ${(props) => css`
    border-radius: ${shapeStyles[props.$shape].borderRadius};
  `}
  
  /* Interaction animations */
  ${(props) => tokens.interactionAnimations[props.$interaction]}
  
  /* Full width */
  ${(props) =>
    props.$fullWidth &&
    css`
      width: 100%;
    `}
  
  /* Disabled state */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Loading state */
  ${(props) =>
    props.$loading &&
    css`
      cursor: wait;
      opacity: 0.7;
    `}

  /* Cursor */
  cursor: pointer;

  /* Focus state */
  &:focus-visible {
    outline: none;
    box-shadow: ${tokens.shadows.focus};
  }
`;

/**
 * Loading Spinner
 */
export const Spinner = styled.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
