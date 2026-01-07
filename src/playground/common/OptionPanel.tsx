/**
 * ⚙️ Option Panel
 *
 * 왼쪽 옵션 선택 패널
 * - Section으로 그룹화
 * - OptionGroup을 포함
 */

import React from "react";
import styled from "styled-components";
import { tokens } from "../../tokens";

interface OptionPanelProps {
  title: string;
  children: React.ReactNode;
}

export const OptionPanel: React.FC<OptionPanelProps> = ({
  title,
  children,
}) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Subtitle>옵션을 선택하세요</Subtitle>
      </Header>
      <Content>{children}</Content>
    </Container>
  );
};

const Container = styled.div`
  background: ${tokens.colors.white};
  border-right: 1px solid ${tokens.semanticColors.border.light};
  overflow-y: auto;

  @media (max-width: 968px) {
    border-right: none;
    border-bottom: 1px solid ${tokens.semanticColors.border.light};
  }
`;

const Header = styled.div`
  padding: ${tokens.spacing.lg};
  border-bottom: 1px solid ${tokens.semanticColors.border.light};
  background: ${tokens.semanticColors.bg.primary};
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Title = styled.h2`
  ${tokens.typographyPresets.h3};
  color: ${tokens.semanticColors.text.primary};
  margin: 0;
`;

const Subtitle = styled.p`
  ${tokens.typographyPresets.bodySmall};
  color: ${tokens.semanticColors.text.secondary};
  margin: ${tokens.spacing.xs} 0 0;
`;

const Content = styled.div`
  padding: ${tokens.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.xl};
`;

export default OptionPanel;
