/**
 * 🎮 Playground Layout
 *
 * 모든 Playground의 공통 레이아웃
 * - 좌: Option Panel (선택 패널)
 * - 우: Preview Panel (미리보기)
 */

import React from "react";
import styled from "styled-components";
import { tokens } from "../../tokens";

interface PlaygroundLayoutProps {
  children: React.ReactNode;
}

export const PlaygroundLayout: React.FC<PlaygroundLayoutProps> = ({
  children,
}) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  min-height: 100vh;
  background: ${tokens.semanticColors.bg.secondary};

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

export default PlaygroundLayout;
