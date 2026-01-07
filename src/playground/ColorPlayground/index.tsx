/**
 * 🎨 Color System Playground
 *
 * 팀의 컬러 토큰을 시각적으로 보고 선택
 * - Semantic colors (primary, danger, etc.)
 * - Neutral colors (gray scale)
 * - 선택한 컬러를 Button, Text, Background에 적용해서 확인
 */

import React, { useState } from "react";
import styled from "styled-components";
import { colors, tokens } from "../../tokens";
import PlaygroundLayout from "../common/PlaygroundLayout";
import OptionPanel from "../common/OptionPanel";
import PreviewPanel from "../common/PreviewPanel";
import { Section } from "../common/Section";

type SemanticColorType =
  | "primary"
  | "secondary"
  | "danger"
  | "warning"
  | "success";

export const ColorPlayground: React.FC = () => {
  const [selectedSemantic, setSelectedSemantic] =
    useState<SemanticColorType>("primary");
  const [selectedScale, setSelectedScale] = useState<number>(500);
  const [selectedGray, setSelectedGray] = useState<number>(500);

  const semanticColorKeys: SemanticColorType[] = [
    "primary",
    "secondary",
    "danger",
    "warning",
    "success",
  ];
  const scaleKeys = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  const getSelectedColor = () => {
    return colors[selectedSemantic][
      selectedScale as keyof typeof colors.primary
    ];
  };

  const getSelectedGrayColor = () => {
    return colors.gray[selectedGray as keyof typeof colors.gray];
  };

  return (
    <PlaygroundLayout>
      <OptionPanel title="Color System">
        <Section title="Semantic Colors" description="의미 기반 컬러 토큰">
          <ColorGrid>
            {semanticColorKeys.map((colorKey) => (
              <SemanticColorCard
                key={colorKey}
                $isSelected={selectedSemantic === colorKey}
                onClick={() => setSelectedSemantic(colorKey)}
              >
                <ColorPreview $color={colors[colorKey][500]} />
                <ColorName>{colorKey}</ColorName>
              </SemanticColorCard>
            ))}
          </ColorGrid>
        </Section>

        <Section title="Scale" description="선택한 컬러의 명도">
          <ScaleGrid>
            {scaleKeys.map((scale) => (
              <ScaleCard
                key={scale}
                $color={
                  colors[selectedSemantic][scale as keyof typeof colors.primary]
                }
                $isSelected={selectedScale === scale}
                onClick={() => setSelectedScale(scale)}
              >
                <ScaleLabel>{scale}</ScaleLabel>
              </ScaleCard>
            ))}
          </ScaleGrid>
        </Section>

        <Section title="Gray Scale" description="중립적인 회색 톤">
          <ScaleGrid>
            {scaleKeys.map((scale) => (
              <ScaleCard
                key={scale}
                $color={colors.gray[scale as keyof typeof colors.gray]}
                $isSelected={selectedGray === scale}
                onClick={() => setSelectedGray(scale)}
              >
                <ScaleLabel $isLight={scale <= 300}>{scale}</ScaleLabel>
              </ScaleCard>
            ))}
          </ScaleGrid>
        </Section>

        <Section title="Color Info">
          <ColorInfo>
            <InfoRow>
              <InfoLabel>Selected:</InfoLabel>
              <InfoValue>
                {selectedSemantic}-{selectedScale}
              </InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Hex:</InfoLabel>
              <InfoValue>{getSelectedColor()}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Usage:</InfoLabel>
              <CodeSnippet>
                colors.{selectedSemantic}[{selectedScale}]
              </CodeSnippet>
            </InfoRow>
          </ColorInfo>
        </Section>
      </OptionPanel>

      <PreviewPanel>
        <PreviewContainer>
          <PreviewTitle>Color in Action</PreviewTitle>

          {/* Button Examples */}
          <ExampleSection>
            <ExampleTitle>Buttons</ExampleTitle>
            <ButtonRow>
              <StyledButton
                $bg={getSelectedColor()}
                $color={tokens.colors.white}
              >
                Primary Button
              </StyledButton>
              <StyledButton
                $bg="transparent"
                $color={getSelectedColor()}
                $border={getSelectedColor()}
              >
                Outlined Button
              </StyledButton>
              <StyledButton
                $bg={`${getSelectedColor()}20`}
                $color={getSelectedColor()}
              >
                Soft Button
              </StyledButton>
            </ButtonRow>
          </ExampleSection>

          {/* Text Examples */}
          <ExampleSection>
            <ExampleTitle>Text</ExampleTitle>
            <TextExamples>
              <TextExample $color={getSelectedColor()}>
                <h1>Heading Text</h1>
              </TextExample>
              <TextExample $color={getSelectedColor()}>
                <p>
                  Body text with selected color. Lorem ipsum dolor sit amet.
                </p>
              </TextExample>
              <TextExample $color={getSelectedGrayColor()}>
                <p>Gray text: {selectedGray}</p>
              </TextExample>
            </TextExamples>
          </ExampleSection>

          {/* Background Examples */}
          <ExampleSection>
            <ExampleTitle>Backgrounds</ExampleTitle>
            <BackgroundRow>
              <BackgroundCard $bg={getSelectedColor()}>
                <CardContent $color={tokens.colors.white}>
                  Full color background
                </CardContent>
              </BackgroundCard>
              <BackgroundCard $bg={`${getSelectedColor()}20`}>
                <CardContent $color={getSelectedColor()}>
                  Light background (20% opacity)
                </CardContent>
              </BackgroundCard>
              <BackgroundCard $bg={`${getSelectedColor()}10`}>
                <CardContent $color={getSelectedColor()}>
                  Subtle background (10% opacity)
                </CardContent>
              </BackgroundCard>
            </BackgroundRow>
          </ExampleSection>

          {/* Color Palette */}
          <ExampleSection>
            <ExampleTitle>Full {selectedSemantic} Palette</ExampleTitle>
            <PaletteRow>
              {scaleKeys.map((scale) => (
                <PaletteCard
                  key={scale}
                  $bg={
                    colors[selectedSemantic][
                      scale as keyof typeof colors.primary
                    ]
                  }
                >
                  <PaletteLabel $isLight={scale <= 300}>{scale}</PaletteLabel>
                  <PaletteHex $isLight={scale <= 300}>
                    {
                      colors[selectedSemantic][
                        scale as keyof typeof colors.primary
                      ]
                    }
                  </PaletteHex>
                </PaletteCard>
              ))}
            </PaletteRow>
          </ExampleSection>
        </PreviewContainer>
      </PreviewPanel>
    </PlaygroundLayout>
  );
};

// Styled Components
const PreviewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing["2xl"]};
`;

const PreviewTitle = styled.h2`
  ${tokens.typographyPresets.h2};
  color: ${tokens.semanticColors.text.primary};
  margin: 0;
`;

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: ${tokens.spacing.sm};
`;

const SemanticColorCard = styled.button<{ $isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${tokens.spacing.xs};
  padding: ${tokens.spacing.sm};
  background: ${tokens.colors.white};
  border: 2px solid
    ${(props) =>
      props.$isSelected
        ? tokens.colors.primary[500]
        : tokens.semanticColors.border.light};
  border-radius: ${tokens.radii.md};
  cursor: pointer;
  transition: ${tokens.motion.transition.fast};

  &:hover {
    border-color: ${tokens.colors.primary[500]};
    transform: translateY(-2px);
  }
`;

const ColorPreview = styled.div<{ $color: string }>`
  width: 48px;
  height: 48px;
  background: ${(props) => props.$color};
  border-radius: ${tokens.radii.md};
  border: 1px solid ${tokens.semanticColors.border.light};
`;

const ColorName = styled.span`
  ${tokens.typographyPresets.caption};
  color: ${tokens.semanticColors.text.secondary};
  font-weight: ${tokens.typography.fontWeight.medium};
  text-transform: capitalize;
`;

const ScaleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${tokens.spacing.xs};
`;

const ScaleCard = styled.button<{ $color: string; $isSelected: boolean }>`
  aspect-ratio: 1;
  background: ${(props) => props.$color};
  border: 2px solid
    ${(props) => (props.$isSelected ? tokens.colors.white : "transparent")};
  border-radius: ${tokens.radii.sm};
  cursor: pointer;
  position: relative;
  transition: ${tokens.motion.transition.fast};
  box-shadow: ${(props) =>
    props.$isSelected ? tokens.shadows.lg : tokens.shadows.sm};

  &:hover {
    transform: scale(1.1);
    box-shadow: ${tokens.shadows.lg};
  }
`;

const ScaleLabel = styled.span<{ $isLight?: boolean }>`
  ${tokens.typographyPresets.caption};
  color: ${(props) =>
    props.$isLight ? tokens.colors.gray[900] : tokens.colors.white};
  font-weight: ${tokens.typography.fontWeight.bold};
`;

const ColorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.sm};
  padding: ${tokens.spacing.md};
  background: ${tokens.semanticColors.bg.secondary};
  border-radius: ${tokens.radii.md};
`;

const InfoRow = styled.div`
  display: flex;
  gap: ${tokens.spacing.sm};
  align-items: center;
`;

const InfoLabel = styled.span`
  ${tokens.typographyPresets.bodySmall};
  color: ${tokens.semanticColors.text.secondary};
  font-weight: ${tokens.typography.fontWeight.medium};
  min-width: 80px;
`;

const InfoValue = styled.span`
  ${tokens.typographyPresets.bodySmall};
  color: ${tokens.semanticColors.text.primary};
  font-family: ${tokens.typography.fontFamily.mono};
`;

const CodeSnippet = styled.code`
  ${tokens.typographyPresets.code};
  padding: ${tokens.spacing.xs} ${tokens.spacing.sm};
  background: ${tokens.colors.gray[800]};
  color: ${tokens.colors.gray[100]};
  border-radius: ${tokens.radii.sm};
`;

const ExampleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.md};
`;

const ExampleTitle = styled.h3`
  ${tokens.typographyPresets.h4};
  color: ${tokens.semanticColors.text.primary};
  margin: 0;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: ${tokens.spacing.md};
  flex-wrap: wrap;
`;

const StyledButton = styled.button<{
  $bg: string;
  $color: string;
  $border?: string;
}>`
  padding: ${tokens.spacing.sm} ${tokens.spacing.lg};
  background: ${(props) => props.$bg};
  color: ${(props) => props.$color};
  border: ${(props) => (props.$border ? `2px solid ${props.$border}` : "none")};
  border-radius: ${tokens.radii.md};
  font-family: ${tokens.typography.fontFamily.sans};
  font-size: ${tokens.typography.fontSize.md};
  font-weight: ${tokens.typography.fontWeight.medium};
  cursor: pointer;
  transition: ${tokens.motion.transition.fast};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${tokens.shadows.md};
  }
`;

const TextExamples = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.md};
`;

const TextExample = styled.div<{ $color: string }>`
  color: ${(props) => props.$color};

  h1 {
    ${tokens.typographyPresets.h1};
    margin: 0;
  }

  p {
    ${tokens.typographyPresets.body};
    margin: 0;
  }
`;

const BackgroundRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${tokens.spacing.md};
`;

const BackgroundCard = styled.div<{ $bg: string }>`
  background: ${(props) => props.$bg};
  border-radius: ${tokens.radii.lg};
  padding: ${tokens.spacing.xl};
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${tokens.semanticColors.border.light};
`;

const CardContent = styled.p<{ $color: string }>`
  ${tokens.typographyPresets.body};
  color: ${(props) => props.$color};
  margin: 0;
  text-align: center;
  font-weight: ${tokens.typography.fontWeight.medium};
`;

const PaletteRow = styled.div`
  display: flex;
  border-radius: ${tokens.radii.lg};
  overflow: hidden;
  border: 1px solid ${tokens.semanticColors.border.light};
`;

const PaletteCard = styled.div<{ $bg: string }>`
  flex: 1;
  background: ${(props) => props.$bg};
  padding: ${tokens.spacing.lg} ${tokens.spacing.sm};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${tokens.spacing.xs};
  min-height: 100px;
  justify-content: center;
`;

const PaletteLabel = styled.span<{ $isLight: boolean }>`
  ${tokens.typographyPresets.bodySmall};
  color: ${(props) =>
    props.$isLight ? tokens.colors.gray[900] : tokens.colors.white};
  font-weight: ${tokens.typography.fontWeight.bold};
`;

const PaletteHex = styled.span<{ $isLight: boolean }>`
  ${tokens.typographyPresets.caption};
  color: ${(props) =>
    props.$isLight ? tokens.colors.gray[600] : tokens.colors.gray[300]};
  font-family: ${tokens.typography.fontFamily.mono};
  font-size: 10px;
`;

export default ColorPlayground;
