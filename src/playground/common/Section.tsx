/**
 * 📦 Section
 *
 * 옵션 그룹을 묶는 섹션 컴포넌트
 */

import React from "react";
import styled from "styled-components";
import { tokens } from "../../tokens";

interface SectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </Header>
      <Content>{children}</Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.md};
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.xs};
`;

const Title = styled.h3`
  ${tokens.typographyPresets.h4};
  color: ${tokens.semanticColors.text.primary};
  margin: 0;
`;

const Description = styled.p`
  ${tokens.typographyPresets.bodySmall};
  color: ${tokens.semanticColors.text.secondary};
  margin: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.lg};
`;

export default Section;
