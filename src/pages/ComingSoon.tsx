/**
 * 🚧 Coming Soon Page
 */

import React from "react";
import styled from "styled-components";
import { tokens } from "../tokens";

interface ComingSoonProps {
  title: string;
  description?: string;
}

export const ComingSoon: React.FC<ComingSoonProps> = ({
  title,
  description = "이 컴포넌트는 현재 개발 중입니다.",
}) => {
  return (
    <Container>
      <Content>
        <Icon>🚧</Icon>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <StatusBadge>Coming Soon</StatusBadge>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: ${tokens.spacing.xl};
  background: ${tokens.semanticColors.bg.primary};
`;

const Content = styled.div`
  text-align: center;
  max-width: 500px;
`;

const Icon = styled.div`
  font-size: 80px;
  margin-bottom: ${tokens.spacing.lg};
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`;

const Title = styled.h1`
  ${tokens.typographyPresets.h2};
  color: ${tokens.semanticColors.text.primary};
  margin-bottom: ${tokens.spacing.md};
`;

const Description = styled.p`
  ${tokens.typographyPresets.body};
  color: ${tokens.semanticColors.text.secondary};
  margin-bottom: ${tokens.spacing.xl};
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: ${tokens.spacing.sm} ${tokens.spacing.lg};
  background: ${tokens.colors.primary[100]};
  color: ${tokens.colors.primary[700]};
  border-radius: ${tokens.radii.full};
  font-size: ${tokens.typography.fontSize.sm};
  font-weight: ${tokens.typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export default ComingSoon;

