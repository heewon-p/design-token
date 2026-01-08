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
        <Version>v1.0.0</Version>
        <HeroSubtitle>
          팀의 디자인 토큰을 시각적으로 탐색하고 체험하세요
        </HeroSubtitle>
        <HeroDescription>
          자유로운 커스터마이징이 아닌, 팀에서 허용한 선택지 안에서만
          조합합니다. 모든 옵션은 실제 React 컴포넌트 props와 1:1 매핑됩니다.
        </HeroDescription>
      </Hero>

      {/* 사이트 제작 이유 */}
      <Section>
        <SectionTitle>💡 왜 이 사이트를 만들었나요?</SectionTitle>
        <SectionContent>
          <ReasonList>
            <ReasonItem>
              <ReasonIcon>🎯</ReasonIcon>
              <ReasonText>
                <strong>일관성 확보:</strong> 디자이너와 개발자가 동일한 디자인 토큰을 기반으로 소통하고 작업할 수 있도록
              </ReasonText>
            </ReasonItem>
            <ReasonItem>
              <ReasonIcon>🚀</ReasonIcon>
              <ReasonText>
                <strong>생산성 향상:</strong> 매번 스타일을 고민하지 않고, 정의된 토큰 안에서 빠르게 선택
              </ReasonText>
            </ReasonItem>
            <ReasonItem>
              <ReasonIcon>📚</ReasonIcon>
              <ReasonText>
                <strong>살아있는 문서:</strong> 코드와 문서가 분리되지 않는 실시간 인터랙티브 가이드 제공
              </ReasonText>
            </ReasonItem>
            <ReasonItem>
              <ReasonIcon>🎨</ReasonIcon>
              <ReasonText>
                <strong>디자인 시스템 체험:</strong> 실제 컴포넌트를 만지고 조합하며 디자인 시스템을 이해
              </ReasonText>
            </ReasonItem>
          </ReasonList>
        </SectionContent>
      </Section>

      {/* 각 메뉴별 설명 */}
      <Section>
        <SectionTitle>🗂️ 메뉴 가이드</SectionTitle>
        <Features>
          <FeatureCard onClick={() => onNavigate("/button")}>
            <FeatureIcon>🔘</FeatureIcon>
            <FeatureTitle>Button</FeatureTitle>
            <FeatureDescription>
              Variant, Size, Shape, Interaction 옵션을 조합하여 버튼 디자인 탐색
            </FeatureDescription>
            <FeatureTag>인터랙티브 컴포넌트</FeatureTag>
          </FeatureCard>

          <FeatureCard onClick={() => onNavigate("/color")}>
            <FeatureIcon>🎨</FeatureIcon>
            <FeatureTitle>Colors</FeatureTitle>
            <FeatureDescription>
              Semantic Colors와 Gray Scale을 시각적으로 확인하고 선택
            </FeatureDescription>
            <FeatureTag>디자인 토큰</FeatureTag>
          </FeatureCard>

          <FeatureCard onClick={() => onNavigate("/typography")}>
            <FeatureIcon>📝</FeatureIcon>
            <FeatureTitle>Typography</FeatureTitle>
            <FeatureDescription>
              Font Size, Weight, Line Height 조합으로 타이포그래피 탐색
            </FeatureDescription>
            <FeatureTag>디자인 토큰</FeatureTag>
          </FeatureCard>

          <FeatureCard onClick={() => onNavigate("/interaction")}>
            <FeatureIcon>🎬</FeatureIcon>
            <FeatureTitle>Interaction</FeatureTitle>
            <FeatureDescription>
              Duration, Easing, Animation 효과를 실시간으로 체험
            </FeatureDescription>
            <FeatureTag>모션 디자인</FeatureTag>
          </FeatureCard>

          <FeatureCard onClick={() => onNavigate("/input")}>
            <FeatureIcon>✏️</FeatureIcon>
            <FeatureTitle>Input</FeatureTitle>
            <FeatureDescription>
              Headless 구조의 Input 컴포넌트와 다양한 상태 확인
            </FeatureDescription>
            <FeatureTag>인터랙티브 컴포넌트</FeatureTag>
          </FeatureCard>
        </Features>
      </Section>

      {/* 컴포넌트 사용률 산정 */}
      <Section>
        <SectionTitle>📊 컴포넌트 사용률</SectionTitle>
        <UsageGrid>
          <UsageCard>
            <UsageNumber>5</UsageNumber>
            <UsageLabel>구현된 컴포넌트</UsageLabel>
            <UsageDetail>Button, Input, Text 등</UsageDetail>
          </UsageCard>
          <UsageCard>
            <UsageNumber>50+</UsageNumber>
            <UsageLabel>디자인 토큰</UsageLabel>
            <UsageDetail>Colors, Typography, Spacing 등</UsageDetail>
          </UsageCard>
          <UsageCard>
            <UsageNumber>100%</UsageNumber>
            <UsageLabel>TypeScript 적용</UsageLabel>
            <UsageDetail>완벽한 타입 안정성</UsageDetail>
          </UsageCard>
          <UsageCard>
            <UsageNumber>∞</UsageNumber>
            <UsageLabel>조합 가능성</UsageLabel>
            <UsageDetail>토큰 기반 무한 확장</UsageDetail>
          </UsageCard>
        </UsageGrid>
      </Section>

      {/* 핵심 철학 & 목표 */}
      <Philosophy>
        <PhilosophyTitle>🎯 핵심 철학 & 목표</PhilosophyTitle>
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

          <PhilosophyCard>
            <PhilosophyIcon>🔄</PhilosophyIcon>
            <PhilosophyCardTitle>확장 가능성</PhilosophyCardTitle>
            <PhilosophyCardText>
              새로운 토큰과 컴포넌트를 쉽게 추가할 수 있는 구조
            </PhilosophyCardText>
          </PhilosophyCard>

          <PhilosophyCard>
            <PhilosophyIcon>⚡</PhilosophyIcon>
            <PhilosophyCardTitle>개발자 경험</PhilosophyCardTitle>
            <PhilosophyCardText>
              직관적인 API와 완벽한 TypeScript 지원으로 생산성 극대화
            </PhilosophyCardText>
          </PhilosophyCard>
        </PhilosophyGrid>
      </Philosophy>

      {/* Footer - 작성자, 저작권 */}
      <Footer>
        <FooterContent>
          <AuthorSection>
            <AuthorIcon>👨‍💻</AuthorIcon>
            <AuthorInfo>
              <AuthorName>Created by Heewon</AuthorName>
              <AuthorRole>Frontend Developer & Design System Architect</AuthorRole>
            </AuthorInfo>
          </AuthorSection>
          
          <Divider />
          
          <CopyrightSection>
            <CopyrightIcon>⚠️</CopyrightIcon>
            <CopyrightText>
              <CopyrightTitle>저작권 안내</CopyrightTitle>
              <CopyrightDescription>
                본 디자인 시스템의 모든 코드, 디자인 토큰, 컴포넌트는 저작권법의 보호를 받습니다.
                <br />
                무단 복제, 배포, 상업적 이용을 금지하며, 사용 시 반드시 사전 허가를 받아야 합니다.
              </CopyrightDescription>
              <CopyrightNotice>
                © 2026 Heewon. All rights reserved.
              </CopyrightNotice>
            </CopyrightText>
          </CopyrightSection>
        </FooterContent>
      </Footer>
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

const Version = styled.div`
  display: inline-block;
  padding: ${tokens.spacing.xs} ${tokens.spacing.md};
  background: ${tokens.colors.primary[50]};
  color: ${tokens.colors.primary[600]};
  border-radius: ${tokens.radii.full};
  font-size: ${tokens.typography.fontSize.sm};
  font-weight: ${tokens.typography.fontWeight.medium};
  margin-bottom: ${tokens.spacing.sm};
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

const Section = styled.section`
  padding: ${tokens.spacing["2xl"]} 0;
`;

const SectionTitle = styled.h2`
  ${tokens.typographyPresets.h2};
  color: ${tokens.semanticColors.text.primary};
  margin: 0 0 ${tokens.spacing.xl} 0;
`;

const SectionContent = styled.div`
  background: ${tokens.colors.white};
  border-radius: ${tokens.radii.lg};
  padding: ${tokens.spacing.xl};
  border: 1px solid ${tokens.semanticColors.border.light};
`;

const ReasonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.lg};
`;

const ReasonItem = styled.div`
  display: flex;
  gap: ${tokens.spacing.md};
  align-items: flex-start;
`;

const ReasonIcon = styled.div`
  font-size: ${tokens.typography.fontSize["2xl"]};
  flex-shrink: 0;
`;

const ReasonText = styled.p`
  ${tokens.typographyPresets.body};
  color: ${tokens.semanticColors.text.secondary};
  margin: 0;
  line-height: ${tokens.typography.lineHeight.relaxed};

  strong {
    color: ${tokens.semanticColors.text.primary};
    font-weight: ${tokens.typography.fontWeight.semibold};
  }
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
  transition: ${tokens.interaction.transition.normal};
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

const FeatureTag = styled.span`
  display: inline-block;
  padding: ${tokens.spacing.xs} ${tokens.spacing.sm};
  background: ${tokens.colors.gray[100]};
  color: ${tokens.colors.gray[600]};
  border-radius: ${tokens.radii.sm};
  font-size: ${tokens.typography.fontSize.xs};
  font-weight: ${tokens.typography.fontWeight.medium};
  margin-top: ${tokens.spacing.sm};
  align-self: flex-start;
`;

const UsageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${tokens.spacing.lg};
`;

const UsageCard = styled.div`
  padding: ${tokens.spacing.xl};
  background: ${tokens.colors.white};
  border-radius: ${tokens.radii.lg};
  border: 1px solid ${tokens.semanticColors.border.light};
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.sm};
`;

const UsageNumber = styled.div`
  font-size: ${tokens.typography.fontSize["4xl"]};
  font-weight: ${tokens.typography.fontWeight.bold};
  color: ${tokens.colors.primary[600]};
  line-height: 1;
`;

const UsageLabel = styled.div`
  ${tokens.typographyPresets.body};
  color: ${tokens.semanticColors.text.primary};
  font-weight: ${tokens.typography.fontWeight.semibold};
`;

const UsageDetail = styled.div`
  ${tokens.typographyPresets.bodySmall};
  color: ${tokens.semanticColors.text.secondary};
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

const Footer = styled.footer`
  margin-top: ${tokens.spacing["4xl"]};
  padding-top: ${tokens.spacing["3xl"]};
  border-top: 2px solid ${tokens.semanticColors.border.light};
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing["2xl"]};
`;

const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing.md};
  justify-content: center;
`;

const AuthorIcon = styled.div`
  font-size: ${tokens.typography.fontSize["3xl"]};
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.xs};
`;

const AuthorName = styled.div`
  ${tokens.typographyPresets.h4};
  color: ${tokens.semanticColors.text.primary};
  margin: 0;
`;

const AuthorRole = styled.div`
  ${tokens.typographyPresets.bodySmall};
  color: ${tokens.semanticColors.text.secondary};
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${tokens.semanticColors.border.light};
  margin: 0;
`;

const CopyrightSection = styled.div`
  display: flex;
  gap: ${tokens.spacing.md};
  align-items: flex-start;
  background: ${tokens.colors.gray[50]};
  padding: ${tokens.spacing.xl};
  border-radius: ${tokens.radii.lg};
  border: 1px solid ${tokens.colors.warning[200]};
`;

const CopyrightIcon = styled.div`
  font-size: ${tokens.typography.fontSize["2xl"]};
  flex-shrink: 0;
`;

const CopyrightText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.sm};
`;

const CopyrightTitle = styled.div`
  ${tokens.typographyPresets.h4};
  color: ${tokens.semanticColors.text.primary};
  margin: 0;
`;

const CopyrightDescription = styled.p`
  ${tokens.typographyPresets.bodySmall};
  color: ${tokens.semanticColors.text.secondary};
  margin: 0;
  line-height: ${tokens.typography.lineHeight.relaxed};
`;

const CopyrightNotice = styled.div`
  ${tokens.typographyPresets.bodySmall};
  color: ${tokens.semanticColors.text.primary};
  font-weight: ${tokens.typography.fontWeight.semibold};
  margin-top: ${tokens.spacing.xs};
`;

export default HomePage;
