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
                <strong>일관성 확보:</strong> 디자이너와 개발자가 동일한 디자인
                토큰을 기반으로 소통하고 작업할 수 있도록
              </ReasonText>
            </ReasonItem>
            <ReasonItem>
              <ReasonIcon>🚀</ReasonIcon>
              <ReasonText>
                <strong>생산성 향상:</strong> 매번 스타일을 고민하지 않고,
                정의된 토큰 안에서 빠르게 선택
              </ReasonText>
            </ReasonItem>
            <ReasonItem>
              <ReasonIcon>📚</ReasonIcon>
              <ReasonText>
                <strong>살아있는 문서:</strong> 코드와 문서가 분리되지 않는
                실시간 인터랙티브 가이드 제공
              </ReasonText>
            </ReasonItem>
            <ReasonItem>
              <ReasonIcon>🎨</ReasonIcon>
              <ReasonText>
                <strong>디자인 시스템 체험:</strong> 실제 컴포넌트를 만지고
                조합하며 디자인 시스템을 이해
              </ReasonText>
            </ReasonItem>
          </ReasonList>
        </SectionContent>
      </Section>

      {/* 메뉴 가이드 */}
      <Section>
        <SectionTitle>🗂️ 메뉴 가이드</SectionTitle>

        {/* Design Tokens */}
        <MenuCategory>
          <CategoryTitle>🎨 Design Tokens</CategoryTitle>
          <CategoryDescription>
            디자인 시스템의 기본 단위인 토큰들을 시각적으로 탐색하고 선택할 수
            있습니다.
          </CategoryDescription>
          <Features>
            <FeatureCard onClick={() => onNavigate("/tokens/color")}>
              <FeatureIcon>🎨</FeatureIcon>
              <FeatureTitle>Colors</FeatureTitle>
              <FeatureDescription>
                Primary, Success, Warning, Error 등 Semantic Colors와 Gray Scale
                전체 팔레트 확인
              </FeatureDescription>
              <FeatureTag>디자인 토큰</FeatureTag>
            </FeatureCard>

            <FeatureCard onClick={() => onNavigate("/tokens/typography")}>
              <FeatureIcon>📝</FeatureIcon>
              <FeatureTitle>Typography</FeatureTitle>
              <FeatureDescription>
                Font Size, Weight, Line Height 조합으로 타이포그래피 시스템 탐색
              </FeatureDescription>
              <FeatureTag>디자인 토큰</FeatureTag>
            </FeatureCard>

            <FeatureCard onClick={() => onNavigate("/tokens/spacing")}>
              <FeatureIcon>📏</FeatureIcon>
              <FeatureTitle>Spacing</FeatureTitle>
              <FeatureDescription>
                xs부터 4xl까지 일관된 여백 시스템으로 레이아웃 간격 설정
              </FeatureDescription>
              <FeatureTag>디자인 토큰</FeatureTag>
            </FeatureCard>

            <FeatureCard onClick={() => onNavigate("/tokens/interaction")}>
              <FeatureIcon>🎬</FeatureIcon>
              <FeatureTitle>Interaction</FeatureTitle>
              <FeatureDescription>
                Duration, Easing, Animation 효과를 실시간으로 체험하고 선택
              </FeatureDescription>
              <FeatureTag>디자인 토큰</FeatureTag>
            </FeatureCard>

            <FeatureCard onClick={() => onNavigate("/tokens/shadows")}>
              <FeatureIcon>🌓</FeatureIcon>
              <FeatureTitle>Shadows</FeatureTitle>
              <FeatureDescription>
                sm, md, lg, xl 단계별 그림자 효과로 깊이감과 계층 구조 표현
              </FeatureDescription>
              <FeatureTag>디자인 토큰</FeatureTag>
            </FeatureCard>

            <FeatureCard onClick={() => onNavigate("/tokens/radii")}>
              <FeatureIcon>⭕</FeatureIcon>
              <FeatureTitle>Radii</FeatureTitle>
              <FeatureDescription>
                모서리 둥글기 설정으로 컴포넌트의 형태와 느낌 조절
              </FeatureDescription>
              <FeatureTag>디자인 토큰</FeatureTag>
            </FeatureCard>
          </Features>
        </MenuCategory>

        {/* Common Components */}
        <MenuCategory>
          <CategoryTitle>🧩 Common Components</CategoryTitle>
          <CategoryDescription>
            재사용 가능한 공통 컴포넌트들을 실시간으로 테스트하고 Props를 확인할
            수 있습니다.
          </CategoryDescription>
          <Features>
            <FeatureCard onClick={() => onNavigate("/components/button")}>
              <FeatureIcon>🔘</FeatureIcon>
              <FeatureTitle>Button</FeatureTitle>
              <FeatureDescription>
                Variant, Size, Shape 옵션을 조합한 다양한 버튼 스타일
              </FeatureDescription>
              <FeatureTag>기본 컴포넌트</FeatureTag>
            </FeatureCard>

            <FeatureCard onClick={() => onNavigate("/components/input")}>
              <FeatureIcon>✏️</FeatureIcon>
              <FeatureTitle>Input</FeatureTitle>
              <FeatureDescription>
                Headless 구조의 기본 입력 필드, 다양한 상태 지원
              </FeatureDescription>
              <FeatureTag>기본 컴포넌트</FeatureTag>
            </FeatureCard>

            <FeatureCard onClick={() => onNavigate("/components/input-field")}>
              <FeatureIcon>📝</FeatureIcon>
              <FeatureTitle>InputField</FeatureTitle>
              <FeatureDescription>
                Label, Helper Text, Error Message를 포함한 완성형 입력 필드
              </FeatureDescription>
              <FeatureTag>폼 컴포넌트</FeatureTag>
            </FeatureCard>

            <FeatureCard onClick={() => onNavigate("/components/textarea")}>
              <FeatureIcon>📄</FeatureIcon>
              <FeatureTitle>TextArea</FeatureTitle>
              <FeatureDescription>
                여러 줄 텍스트 입력을 위한 확장 가능한 텍스트 영역
              </FeatureDescription>
              <FeatureTag>폼 컴포넌트</FeatureTag>
            </FeatureCard>

            <FeatureCard onClick={() => onNavigate("/components/checkbox")}>
              <FeatureIcon>☑️</FeatureIcon>
              <FeatureTitle>CheckBox</FeatureTitle>
              <FeatureDescription>
                단일 또는 다중 선택을 위한 체크박스, Indeterminate 상태 지원
              </FeatureDescription>
              <FeatureTag>폼 컴포넌트</FeatureTag>
            </FeatureCard>

            <FeatureCard onClick={() => onNavigate("/components/radio")}>
              <FeatureIcon>🔘</FeatureIcon>
              <FeatureTitle>Radio</FeatureTitle>
              <FeatureDescription>
                그룹 내 단일 선택을 위한 라디오 버튼
              </FeatureDescription>
              <FeatureTag>폼 컴포넌트</FeatureTag>
            </FeatureCard>

            <FeatureCard onClick={() => onNavigate("/components/toggle")}>
              <FeatureIcon>🔄</FeatureIcon>
              <FeatureTitle>Toggle</FeatureTitle>
              <FeatureDescription>
                On/Off 상태를 시각적으로 표현하는 토글 스위치
              </FeatureDescription>
              <FeatureTag>폼 컴포넌트</FeatureTag>
            </FeatureCard>

            <FeatureCard onClick={() => onNavigate("/components/dropdown")}>
              <FeatureIcon>▼</FeatureIcon>
              <FeatureTitle>DropDown</FeatureTitle>
              <FeatureDescription>
                옵션 목록을 펼쳐서 선택할 수 있는 드롭다운 메뉴
              </FeatureDescription>
              <FeatureTag>선택 컴포넌트</FeatureTag>
            </FeatureCard>

            <FeatureCard
              onClick={() => onNavigate("/components/search-dropdown")}
            >
              <FeatureIcon>🔍</FeatureIcon>
              <FeatureTitle>SearchDropdown</FeatureTitle>
              <FeatureDescription>
                검색 기능이 포함된 드롭다운, 많은 옵션 중 빠른 선택
              </FeatureDescription>
              <FeatureTag>선택 컴포넌트</FeatureTag>
            </FeatureCard>

            <FeatureCard onClick={() => onNavigate("/components/select")}>
              <FeatureIcon>📋</FeatureIcon>
              <FeatureTitle>Select</FeatureTitle>
              <FeatureDescription>
                네이티브 스타일 또는 커스텀 스타일의 선택 박스
              </FeatureDescription>
              <FeatureTag>선택 컴포넌트</FeatureTag>
            </FeatureCard>

            <FeatureCard onClick={() => onNavigate("/components/date-select")}>
              <FeatureIcon>📅</FeatureIcon>
              <FeatureTitle>DateSelect</FeatureTitle>
              <FeatureDescription>
                날짜 선택을 위한 캘린더 인터페이스, 범위 선택 지원
              </FeatureDescription>
              <FeatureTag>선택 컴포넌트</FeatureTag>
            </FeatureCard>

            <FeatureCard onClick={() => onNavigate("/components/search-bar")}>
              <FeatureIcon>🔍</FeatureIcon>
              <FeatureTitle>SearchBar</FeatureTitle>
              <FeatureDescription>
                자동완성, 최근 검색어 등 고급 검색 기능 포함
              </FeatureDescription>
              <FeatureTag>검색 컴포넌트</FeatureTag>
            </FeatureCard>

            <FeatureCard onClick={() => onNavigate("/components/card")}>
              <FeatureIcon>🃏</FeatureIcon>
              <FeatureTitle>Card</FeatureTitle>
              <FeatureDescription>
                콘텐츠를 그룹화하는 카드 컨테이너, 다양한 레이아웃 지원
              </FeatureDescription>
              <FeatureTag>레이아웃 컴포넌트</FeatureTag>
            </FeatureCard>

            <FeatureCard onClick={() => onNavigate("/components/modal")}>
              <FeatureIcon>🪟</FeatureIcon>
              <FeatureTitle>Modal</FeatureTitle>
              <FeatureDescription>
                중요한 정보나 액션을 위한 오버레이 다이얼로그
              </FeatureDescription>
              <FeatureTag>오버레이 컴포넌트</FeatureTag>
            </FeatureCard>

            <FeatureCard onClick={() => onNavigate("/components/toast")}>
              <FeatureIcon>🔔</FeatureIcon>
              <FeatureTitle>Toast</FeatureTitle>
              <FeatureDescription>
                성공, 오류, 정보 등을 알리는 일시적인 알림 메시지
              </FeatureDescription>
              <FeatureTag>피드백 컴포넌트</FeatureTag>
            </FeatureCard>

            <FeatureCard onClick={() => onNavigate("/components/tooltip")}>
              <FeatureIcon>💬</FeatureIcon>
              <FeatureTitle>Tooltip</FeatureTitle>
              <FeatureDescription>
                요소에 마우스를 올렸을 때 나타나는 간단한 설명 팝업
              </FeatureDescription>
              <FeatureTag>피드백 컴포넌트</FeatureTag>
            </FeatureCard>

            <FeatureCard onClick={() => onNavigate("/components/loading")}>
              <FeatureIcon>⏳</FeatureIcon>
              <FeatureTitle>Loading</FeatureTitle>
              <FeatureDescription>
                데이터 로딩 중임을 표시하는 스피너, 스켈레톤 UI
              </FeatureDescription>
              <FeatureTag>피드백 컴포넌트</FeatureTag>
            </FeatureCard>

            <FeatureCard onClick={() => onNavigate("/components/pagination")}>
              <FeatureIcon>📖</FeatureIcon>
              <FeatureTitle>Pagination</FeatureTitle>
              <FeatureDescription>
                많은 데이터를 페이지 단위로 나누어 탐색하는 네비게이션
              </FeatureDescription>
              <FeatureTag>네비게이션 컴포넌트</FeatureTag>
            </FeatureCard>

            <FeatureCard onClick={() => onNavigate("/components/tab-menu")}>
              <FeatureIcon>📑</FeatureIcon>
              <FeatureTitle>TabMenu</FeatureTitle>
              <FeatureDescription>
                콘텐츠를 탭으로 구분하여 전환할 수 있는 메뉴
              </FeatureDescription>
              <FeatureTag>네비게이션 컴포넌트</FeatureTag>
            </FeatureCard>

            <FeatureCard onClick={() => onNavigate("/components/navigation")}>
              <FeatureIcon>🧭</FeatureIcon>
              <FeatureTitle>Navigation</FeatureTitle>
              <FeatureDescription>
                사이트 전체 구조를 탐색하는 사이드바 또는 헤더 네비게이션
              </FeatureDescription>
              <FeatureTag>네비게이션 컴포넌트</FeatureTag>
            </FeatureCard>

            <FeatureCard onClick={() => onNavigate("/components/layout")}>
              <FeatureIcon>📐</FeatureIcon>
              <FeatureTitle>Layout</FeatureTitle>
              <FeatureDescription>
                페이지 전체 구조를 정의하는 레이아웃 컴포넌트
              </FeatureDescription>
              <FeatureTag>레이아웃 컴포넌트</FeatureTag>
            </FeatureCard>

            <FeatureCard
              onClick={() => onNavigate("/components/box-select-group")}
            >
              <FeatureIcon>☐</FeatureIcon>
              <FeatureTitle>BoxSelectGroup</FeatureTitle>
              <FeatureDescription>
                박스 형태로 시각화된 선택 그룹, 이미지나 아이콘 포함 가능
              </FeatureDescription>
              <FeatureTag>선택 컴포넌트</FeatureTag>
            </FeatureCard>

            <FeatureCard onClick={() => onNavigate("/components/image-box")}>
              <FeatureIcon>🖼️</FeatureIcon>
              <FeatureTitle>ImageBox</FeatureTitle>
              <FeatureDescription>
                이미지 표시, 로딩, 에러 처리를 포함한 이미지 컨테이너
              </FeatureDescription>
              <FeatureTag>미디어 컴포넌트</FeatureTag>
            </FeatureCard>

            <FeatureCard onClick={() => onNavigate("/components/icon-box")}>
              <FeatureIcon>🎯</FeatureIcon>
              <FeatureTitle>IconBox</FeatureTitle>
              <FeatureDescription>
                아이콘을 일관된 크기와 스타일로 표시하는 컨테이너
              </FeatureDescription>
              <FeatureTag>미디어 컴포넌트</FeatureTag>
            </FeatureCard>

            <FeatureCard onClick={() => onNavigate("/components/logo")}>
              <FeatureIcon>🏷️</FeatureIcon>
              <FeatureTitle>Logo</FeatureTitle>
              <FeatureDescription>
                브랜드 로고를 다양한 크기와 변형으로 표시
              </FeatureDescription>
              <FeatureTag>미디어 컴포넌트</FeatureTag>
            </FeatureCard>

            <FeatureCard onClick={() => onNavigate("/components/video-player")}>
              <FeatureIcon>▶️</FeatureIcon>
              <FeatureTitle>VideoPlayer</FeatureTitle>
              <FeatureDescription>
                커스텀 컨트롤을 가진 비디오 재생 플레이어
              </FeatureDescription>
              <FeatureTag>미디어 컴포넌트</FeatureTag>
            </FeatureCard>

            <FeatureCard
              onClick={() => onNavigate("/components/video-container")}
            >
              <FeatureIcon>📺</FeatureIcon>
              <FeatureTitle>VideoContainer</FeatureTitle>
              <FeatureDescription>
                반응형 비디오 임베드를 위한 컨테이너, 비율 유지
              </FeatureDescription>
              <FeatureTag>미디어 컴포넌트</FeatureTag>
            </FeatureCard>
          </Features>
        </MenuCategory>
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

      {/* 프로젝트별 컴포넌트 재사용 현황 */}
      <Section>
        <SectionTitle>🔄 프로젝트별 컴포넌트 재사용 현황</SectionTitle>
        <ProjectReuseDescription>
          실제 프로젝트에서 공통 컴포넌트가 얼마나 재사용되었는지 확인하세요.
          공통 컴포넌트 사용으로 절약된 개발 시간과 코드 중복을 측정할 수 있습니다.
        </ProjectReuseDescription>

        {/* 프로젝트 1 예시 */}
        <ProjectCard>
          <ProjectHeader>
            <ProjectName>🚀 프로젝트 이름</ProjectName>
            <ProjectPeriod>2024.01 ~ 2024.03</ProjectPeriod>
          </ProjectHeader>

          <ProjectStats>
            <StatItem>
              <StatLabel>사용된 공통 컴포넌트</StatLabel>
              <StatValue>Button, Input, Card, Modal, Toast</StatValue>
            </StatItem>
            <StatItem>
              <StatLabel>총 재사용 횟수</StatLabel>
              <StatValue>47회</StatValue>
            </StatItem>
            <StatItem>
              <StatLabel>공통 컴포넌트 미사용 시 필요 개수</StatLabel>
              <StatValue>47개</StatValue>
            </StatItem>
          </ProjectStats>

          <ReuseRateBar>
            <ReuseRateLabel>
              <span>공통 컴포넌트 사용률</span>
              <ReuseRatePercentage>100%</ReuseRatePercentage>
            </ReuseRateLabel>
            <ReuseRateProgress>
              <ReuseRateFill $percentage={100} />
            </ReuseRateProgress>
            <ReuseRateDetail>
              47개 중 47개를 공통 컴포넌트로 대체 (0개 신규 개발)
            </ReuseRateDetail>
          </ReuseRateBar>
        </ProjectCard>

        {/* 프로젝트 2 예시 */}
        <ProjectCard>
          <ProjectHeader>
            <ProjectName>🚀 프로젝트 이름</ProjectName>
            <ProjectPeriod>2024.04 ~ 2024.06</ProjectPeriod>
          </ProjectHeader>

          <ProjectStats>
            <StatItem>
              <StatLabel>사용된 공통 컴포넌트</StatLabel>
              <StatValue>Button, Input, Dropdown</StatValue>
            </StatItem>
            <StatItem>
              <StatLabel>총 재사용 횟수</StatLabel>
              <StatValue>32회</StatValue>
            </StatItem>
            <StatItem>
              <StatLabel>공통 컴포넌트 미사용 시 필요 개수</StatLabel>
              <StatValue>40개</StatValue>
            </StatItem>
          </ProjectStats>

          <ReuseRateBar>
            <ReuseRateLabel>
              <span>공통 컴포넌트 사용률</span>
              <ReuseRatePercentage>80%</ReuseRatePercentage>
            </ReuseRateLabel>
            <ReuseRateProgress>
              <ReuseRateFill $percentage={80} />
            </ReuseRateProgress>
            <ReuseRateDetail>
              40개 중 32개를 공통 컴포넌트로 대체 (8개 신규 개발)
            </ReuseRateDetail>
          </ReuseRateBar>
        </ProjectCard>

        {/* 프로젝트 3 예시 - 낮은 사용률 */}
        <ProjectCard>
          <ProjectHeader>
            <ProjectName>🚀 프로젝트 이름</ProjectName>
            <ProjectPeriod>2024.07 ~ 2024.09</ProjectPeriod>
          </ProjectHeader>

          <ProjectStats>
            <StatItem>
              <StatLabel>사용된 공통 컴포넌트</StatLabel>
              <StatValue>Button, Input</StatValue>
            </StatItem>
            <StatItem>
              <StatLabel>총 재사용 횟수</StatLabel>
              <StatValue>15회</StatValue>
            </StatItem>
            <StatItem>
              <StatLabel>공통 컴포넌트 미사용 시 필요 개수</StatLabel>
              <StatValue>30개</StatValue>
            </StatItem>
          </ProjectStats>

          <ReuseRateBar>
            <ReuseRateLabel>
              <span>공통 컴포넌트 사용률</span>
              <ReuseRatePercentage>50%</ReuseRatePercentage>
            </ReuseRateLabel>
            <ReuseRateProgress>
              <ReuseRateFill $percentage={50} />
            </ReuseRateProgress>
            <ReuseRateDetail>
              30개 중 15개를 공통 컴포넌트로 대체 (15개 신규 개발)
            </ReuseRateDetail>
          </ReuseRateBar>
        </ProjectCard>

        <ProjectAddGuide>
          💡 <strong>프로젝트 추가 방법:</strong> 위 양식을 복사하여 프로젝트명, 기간, 
          사용 컴포넌트, 재사용 횟수, 필요 개수를 입력하고 사용률을 계산하세요.
        </ProjectAddGuide>
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
              <AuthorName>Created by 박희원, 황연주</AuthorName>
              <AuthorRole>
                Frontend Developer & Design System Architect
              </AuthorRole>
            </AuthorInfo>
          </AuthorSection>

          <Divider />

          <CopyrightSection>
            <CopyrightIcon>⚠️</CopyrightIcon>
            <CopyrightText>
              <CopyrightTitle>저작권 안내</CopyrightTitle>
              <CopyrightDescription>
                본 디자인 시스템의 모든 코드, 디자인 토큰, 컴포넌트는 저작권법의
                보호를 받습니다.
                <br />
                무단 복제, 배포, 상업적 이용을 금지하며, 사용 시 반드시 사전
                허가를 받아야 합니다.
              </CopyrightDescription>
              <CopyrightNotice>
                © 2026 박희원, 황연주. All rights reserved.
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

const MenuCategory = styled.div`
  margin-bottom: ${tokens.spacing["3xl"]};

  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryTitle = styled.h3`
  ${tokens.typographyPresets.h3};
  color: ${tokens.semanticColors.text.primary};
  margin: 0 0 ${tokens.spacing.sm} 0;
  display: flex;
  align-items: center;
  gap: ${tokens.spacing.sm};
`;

const CategoryDescription = styled.p`
  ${tokens.typographyPresets.body};
  color: ${tokens.semanticColors.text.secondary};
  margin: 0 0 ${tokens.spacing.lg} 0;
  line-height: ${tokens.typography.lineHeight.relaxed};
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

const ProjectReuseDescription = styled.p`
  ${tokens.typographyPresets.body};
  color: ${tokens.semanticColors.text.secondary};
  margin: 0 0 ${tokens.spacing.xl} 0;
  line-height: ${tokens.typography.lineHeight.relaxed};
`;

const ProjectCard = styled.div`
  background: ${tokens.colors.white};
  border: 1px solid ${tokens.semanticColors.border.light};
  border-radius: ${tokens.radii.lg};
  padding: ${tokens.spacing.xl};
  margin-bottom: ${tokens.spacing.lg};
  transition: ${tokens.interaction.transition.normal};

  &:hover {
    box-shadow: ${tokens.shadows.md};
    border-color: ${tokens.colors.primary[300]};
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${tokens.spacing.lg};
  padding-bottom: ${tokens.spacing.md};
  border-bottom: 1px solid ${tokens.semanticColors.border.light};
`;

const ProjectName = styled.h3`
  ${tokens.typographyPresets.h3};
  color: ${tokens.semanticColors.text.primary};
  margin: 0;
`;

const ProjectPeriod = styled.span`
  ${tokens.typographyPresets.bodySmall};
  color: ${tokens.semanticColors.text.secondary};
  background: ${tokens.colors.gray[100]};
  padding: ${tokens.spacing.xs} ${tokens.spacing.sm};
  border-radius: ${tokens.radii.sm};
`;

const ProjectStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.md};
  margin-bottom: ${tokens.spacing.lg};
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.xs};
`;

const StatLabel = styled.div`
  ${tokens.typographyPresets.bodySmall};
  color: ${tokens.semanticColors.text.secondary};
  font-weight: ${tokens.typography.fontWeight.medium};
`;

const StatValue = styled.div`
  ${tokens.typographyPresets.body};
  color: ${tokens.semanticColors.text.primary};
  font-weight: ${tokens.typography.fontWeight.semibold};
`;

const ReuseRateBar = styled.div`
  background: ${tokens.colors.gray[50]};
  padding: ${tokens.spacing.md};
  border-radius: ${tokens.radii.md};
  border: 1px solid ${tokens.semanticColors.border.light};
`;

const ReuseRateLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${tokens.spacing.sm};
  
  span {
    ${tokens.typographyPresets.body};
    color: ${tokens.semanticColors.text.primary};
    font-weight: ${tokens.typography.fontWeight.semibold};
  }
`;

const ReuseRatePercentage = styled.div`
  ${tokens.typographyPresets.h3};
  color: ${tokens.colors.primary[600]};
  font-weight: ${tokens.typography.fontWeight.bold};
`;

const ReuseRateProgress = styled.div`
  width: 100%;
  height: 12px;
  background: ${tokens.colors.gray[200]};
  border-radius: ${tokens.radii.full};
  overflow: hidden;
  margin-bottom: ${tokens.spacing.sm};
`;

const ReuseRateFill = styled.div<{ $percentage: number }>`
  height: 100%;
  width: ${(props) => props.$percentage}%;
  background: linear-gradient(
    90deg,
    ${tokens.colors.primary[500]} 0%,
    ${tokens.colors.primary[600]} 100%
  );
  transition: width ${tokens.interaction.duration.normal} ${tokens.interaction.easing.easeOut};
  border-radius: ${tokens.radii.full};
`;

const ReuseRateDetail = styled.div`
  ${tokens.typographyPresets.bodySmall};
  color: ${tokens.semanticColors.text.secondary};
  text-align: center;
`;

const ProjectAddGuide = styled.div`
  ${tokens.typographyPresets.body};
  color: ${tokens.semanticColors.text.secondary};
  background: ${tokens.colors.primary[50]};
  padding: ${tokens.spacing.md};
  border-radius: ${tokens.radii.md};
  border-left: 4px solid ${tokens.colors.primary[500]};
  margin-top: ${tokens.spacing.xl};
  line-height: ${tokens.typography.lineHeight.relaxed};

  strong {
    color: ${tokens.semanticColors.text.primary};
    font-weight: ${tokens.typography.fontWeight.semibold};
  }
`;

export default HomePage;
