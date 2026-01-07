/**
 * 👁️ Preview Panel
 *
 * 오른쪽 미리보기 영역
 * - 실제 컴포넌트 렌더링
 * - 상호작용 가능
 */

import React from "react";
import styled from "styled-components";
import { tokens } from "../../tokens";

interface PreviewPanelProps {
  children: React.ReactNode;
  showGrid?: boolean;
}

export const PreviewPanel: React.FC<PreviewPanelProps> = ({
  children,
  showGrid = false,
}) => {
  return (
    <Container>
      <PreviewArea $showGrid={showGrid}>{children}</PreviewArea>
    </Container>
  );
};

const Container = styled.div`
  padding: ${tokens.spacing["2xl"]};
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.xl};
`;

const PreviewArea = styled.div<{ $showGrid: boolean }>`
  background: ${tokens.colors.white};
  border-radius: ${tokens.radii.lg};
  border: 1px solid ${tokens.semanticColors.border.light};
  padding: ${tokens.spacing["3xl"]};
  min-height: 400px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.$showGrid &&
    `
    background-image: 
      linear-gradient(${tokens.semanticColors.border.light} 1px, transparent 1px),
      linear-gradient(90deg, ${tokens.semanticColors.border.light} 1px, transparent 1px);
    background-size: 20px 20px;
  `}
`;

export default PreviewPanel;
