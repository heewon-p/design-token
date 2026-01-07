/**
 * 🏠 Home Page
 */

import React from "react";
import styled from "styled-components";
import { tokens } from "../tokens";

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <Container>
      <Hero>
        <HeroIcon>🎨</HeroIcon>
        <HeroTitle>Design System Playground</HeroTitle>
        <HeroSubtitle>
          팀의 디자인 토큰을 시각적으로 탐색하고 체험하세요
        </HeroSubtitle>
        <HeroDescription>
          자유로운 커스터마이징이 아닌, 팀에서 허용한 선택지 안에서만
          조합합니다. 모든 옵션은 실제 React 컴포넌트 props와 1:1 매핑됩니다.
        </HeroDescription>
      </Hero>

      <Features>
        <FeatureCard onClick={() => onNavigate("/button")}>
          <FeatureIcon>🔘</FeatureIcon>
          <FeatureTitle>Button</FeatureTitle>
          <FeatureDescription>
            Variant, Size, Shape, Interaction 옵션을 조합하여 버튼 디자인 탐색
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard onClick={() => onNavigate("/color")}>
          <FeatureIcon>🎨</FeatureIcon>
          <FeatureTitle>Colors</FeatureTitle>
          <FeatureDescription>
            Semantic Colors와 Gray Scale을 시각적으로 확인하고 선택
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard onClick={() => onNavigate("/typography")}>
          <FeatureIcon>📝</FeatureIcon>
          <FeatureTitle>Typography</FeatureTitle>
          <FeatureDescription>
            Font Size, Weight, Line Height 조합으로 타이포그래피 탐색
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard onClick={() => onNavigate("/motion")}>
          <FeatureIcon>🎬</FeatureIcon>
          <FeatureTitle>Motion</FeatureTitle>
          <FeatureDescription>
            Duration, Easing, Animation 효과를 실시간으로 체험
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard onClick={() => onNavigate("/input")}>
          <FeatureIcon>✏️</FeatureIcon>
          <FeatureTitle>Input</FeatureTitle>
          <FeatureDescription>
            Headless 구조의 Input 컴포넌트와 다양한 상태 확인
          </FeatureDescription>
        </FeatureCard>
      </Features>

      <Philosophy>
        <PhilosophyTitle>핵심 철학</PhilosophyTitle>
        <PhilosophyGrid>
          <PhilosophyCard>
            <PhilosophyIcon>🎯</PhilosophyIcon>
            <PhilosophyCardTitle>Token-First</PhilosophyCardTitle>
            <PhilosophyCardText>
              모든 스타일은 토큰에서 시작합니다. 임의의 값 사용 금지.
            </PhilosophyCardText>
          </PhilosophyCard>

          <PhilosophyCard>
            <PhilosophyIcon>🎭</PhilosophyIcon>
            <PhilosophyCardTitle>Behavior-Style Separation</PhilosophyCardTitle>
            <PhilosophyCardText>
              로직과 스타일이 완전히 분리되어 유지보수가 쉽습니다.
            </PhilosophyCardText>
          </PhilosophyCard>

          <PhilosophyCard>
            <PhilosophyIcon>📋</PhilosophyIcon>
            <PhilosophyCardTitle>Props as Contract</PhilosophyCardTitle>
            <PhilosophyCardText>
              Props는 디자이너와 개발자 간의 계약서입니다.
            </PhilosophyCardText>
          </PhilosophyCard>

          <PhilosophyCard>
            <PhilosophyIcon>📚</PhilosophyIcon>
            <PhilosophyCardTitle>Living Documentation</PhilosophyCardTitle>
            <PhilosophyCardText>
              Playground 자체가 살아있는 문서이자 가이드입니다.
            </PhilosophyCardText>
          </PhilosophyCard>
        </PhilosophyGrid>
      </Philosophy>
    </Container>
  );
};

const Container = styled.div`
  padding: ${tokens.spacing["3xl"]};
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing["4xl"]};
`;

const Hero = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${tokens.spacing.md};
  padding: ${tokens.spacing["3xl"]} 0;
`;

const HeroIcon = styled.div`
  font-size: 80px;
  margin-bottom: ${tokens.spacing.md};
`;

const HeroTitle = styled.h1`
  ${tokens.typographyPresets.h1};
  color: ${tokens.semanticColors.text.primary};
  margin: 0;
`;

const HeroSubtitle = styled.p`
  ${tokens.typographyPresets.h4};
  color: ${tokens.semanticColors.text.secondary};
  margin: 0;
  font-weight: ${tokens.typography.fontWeight.regular};
`;

const HeroDescription = styled.p`
  ${tokens.typographyPresets.body};
  color: ${tokens.semanticColors.text.secondary};
  max-width: 600px;
  margin: ${tokens.spacing.md} 0 0;
  line-height: ${tokens.typography.lineHeight.relaxed};
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${tokens.spacing.lg};
`;

const FeatureCard = styled.button`
  padding: ${tokens.spacing.xl};
  background: ${tokens.colors.white};
  border: 1px solid ${tokens.semanticColors.border.light};
  border-radius: ${tokens.radii.lg};
  cursor: pointer;
  transition: ${tokens.motion.transition.normal};
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.sm};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${tokens.shadows.lg};
    border-color: ${tokens.colors.primary[500]};
  }
`;

const FeatureIcon = styled.div`
  font-size: ${tokens.typography.fontSize["4xl"]};
  margin-bottom: ${tokens.spacing.sm};
`;

const FeatureTitle = styled.h3`
  ${tokens.typographyPresets.h3};
  color: ${tokens.semanticColors.text.primary};
  margin: 0;
`;

const FeatureDescription = styled.p`
  ${tokens.typographyPresets.bodySmall};
  color: ${tokens.semanticColors.text.secondary};
  margin: 0;
  line-height: ${tokens.typography.lineHeight.relaxed};
`;

const Philosophy = styled.section`
  padding: ${tokens.spacing["3xl"]} 0;
`;

const PhilosophyTitle = styled.h2`
  ${tokens.typographyPresets.h2};
  color: ${tokens.semanticColors.text.primary};
  text-align: center;
  margin: 0 0 ${tokens.spacing["2xl"]} 0;
`;

const PhilosophyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${tokens.spacing.lg};
`;

const PhilosophyCard = styled.div`
  padding: ${tokens.spacing.xl};
  background: ${tokens.colors.white};
  border-radius: ${tokens.radii.lg};
  border: 1px solid ${tokens.semanticColors.border.light};
  text-align: center;
`;

const PhilosophyIcon = styled.div`
  font-size: ${tokens.typography.fontSize["3xl"]};
  margin-bottom: ${tokens.spacing.md};
`;

const PhilosophyCardTitle = styled.h4`
  ${tokens.typographyPresets.h4};
  color: ${tokens.semanticColors.text.primary};
  margin: 0 0 ${tokens.spacing.sm} 0;
`;

const PhilosophyCardText = styled.p`
  ${tokens.typographyPresets.bodySmall};
  color: ${tokens.semanticColors.text.secondary};
  margin: 0;
  line-height: ${tokens.typography.lineHeight.relaxed};
`;

export default HomePage;
