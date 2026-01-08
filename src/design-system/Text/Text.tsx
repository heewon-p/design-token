/**
 * 📝 Text Component
 */

import React from "react";
import styled, { css } from "styled-components";
import { tokens, typographyPresets } from "../../tokens";
import { TextProps } from "./Text.types";

export const Text: React.FC<TextProps> = ({
  as = "p",
  fontFamily,
  size = "md",
  weight = "regular",
  lineHeight = "normal",
  preset,
  color,
  children,
}) => {
  return (
    <StyledText
      as={as}
      $fontFamily={fontFamily}
      $size={size}
      $weight={weight}
      $lineHeight={lineHeight}
      $preset={preset}
      $color={color}
    >
      {children}
    </StyledText>
  );
};

const StyledText = styled.p<{
  $fontFamily?: TextProps["fontFamily"];
  $size: TextProps["size"];
  $weight: TextProps["weight"];
  $lineHeight: TextProps["lineHeight"];
  $preset?: TextProps["preset"];
  $color?: string;
}>`
  margin: 0;

  ${(props) => {
    // Preset이 있으면 preset 우선 적용
    if (props.$preset) {
      const preset = typographyPresets[props.$preset];
      return css`
        font-family: ${preset.fontFamily || tokens.typography.fontFamily.sans};
        font-size: ${preset.fontSize};
        font-weight: ${preset.fontWeight};
        line-height: ${preset.lineHeight};
        ${"letterSpacing" in preset
          ? `letter-spacing: ${(preset as any).letterSpacing};`
          : ""}
      `;
    }

    // Preset이 없으면 개별 props 적용
    return css`
      font-family: ${props.$fontFamily
        ? (tokens.typography.fontFamily as any)[props.$fontFamily]
        : tokens.typography.fontFamily.sans};
      font-size: ${tokens.typography.fontSize[props.$size!]};
      font-weight: ${tokens.typography.fontWeight[props.$weight!]};
      line-height: ${tokens.typography.lineHeight[props.$lineHeight!]};
    `;
  }}

  color: ${(props) => props.$color || tokens.semanticColors.text.primary};
`;

export default Text;
