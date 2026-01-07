/**
 * 📝 Text Component
 */

import React from "react";
import styled from "styled-components";
import { tokens } from "../../tokens";
import { TextProps } from "./Text.types";

export const Text: React.FC<TextProps> = ({
  as = "p",
  size = "md",
  weight = "regular",
  lineHeight = "normal",
  color,
  children,
}) => {
  return (
    <StyledText
      as={as}
      $size={size}
      $weight={weight}
      $lineHeight={lineHeight}
      $color={color}
    >
      {children}
    </StyledText>
  );
};

const StyledText = styled.p<{
  $size: TextProps["size"];
  $weight: TextProps["weight"];
  $lineHeight: TextProps["lineHeight"];
  $color?: string;
}>`
  font-family: ${tokens.typography.fontFamily.sans};
  font-size: ${(props) => tokens.typography.fontSize[props.$size!]};
  font-weight: ${(props) => tokens.typography.fontWeight[props.$weight!]};
  line-height: ${(props) => tokens.typography.lineHeight[props.$lineHeight!]};
  color: ${(props) => props.$color || tokens.semanticColors.text.primary};
  margin: 0;
`;

export default Text;
