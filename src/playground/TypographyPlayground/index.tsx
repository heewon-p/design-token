/**
 * 📝 Typography Playground
 */

import React, { useState } from "react";
import styled from "styled-components";
import { Text } from "../../design-system/Text";
import {
  tokens,
  FontFamily,
  FontSize,
  FontWeight,
  LineHeight,
} from "../../tokens";
import PlaygroundLayout from "../common/PlaygroundLayout";
import OptionPanel from "../common/OptionPanel";
import PreviewPanel from "../common/PreviewPanel";
import { Section } from "../common/Section";
import { RadioOption } from "../common/OptionGroup";
import OptionGroup from "../common/OptionGroup";
import CodePreview from "../common/CodePreview";

export const TypographyPlayground: React.FC = () => {
  const [fontFamily, setFontFamily] = useState<FontFamily>("sans");
  const [size, setSize] = useState<FontSize>("md");
  const [weight, setWeight] = useState<FontWeight>("regular");
  const [lineHeight, setLineHeight] = useState<LineHeight>("normal");

  const fontFamilyOptions: Array<{ value: FontFamily; label: string }> = [
    { value: "sans", label: "Sans (시스템 기본)" },
    { value: "korean", label: "Korean (한글 최적화)" },
    { value: "display", label: "Display (제목용)" },
    { value: "mono", label: "Mono (코드용)" },
    { value: "serif", label: "Serif (장문용)" },
  ];

  const sizeOptions: Array<{ value: FontSize; label: string }> = [
    { value: "xs", label: "Extra Small (12px)" },
    { value: "sm", label: "Small (14px)" },
    { value: "md", label: "Medium (16px)" },
    { value: "lg", label: "Large (18px)" },
    { value: "xl", label: "Extra Large (20px)" },
    { value: "2xl", label: "2XL (24px)" },
  ];

  const weightOptions: Array<{ value: FontWeight; label: string }> = [
    { value: "light", label: "Light (300)" },
    { value: "regular", label: "Regular (400)" },
    { value: "medium", label: "Medium (500)" },
    { value: "semibold", label: "Semibold (600)" },
    { value: "bold", label: "Bold (700)" },
    { value: "extrabold", label: "Extrabold (800)" },
  ];

  const lineHeightOptions: Array<{ value: LineHeight; label: string }> = [
    { value: "tight", label: "Tight (1.25)" },
    { value: "snug", label: "Snug (1.375)" },
    { value: "normal", label: "Normal (1.5)" },
    { value: "relaxed", label: "Relaxed (1.75)" },
    { value: "loose", label: "Loose (2.0)" },
  ];

  return (
    <PlaygroundLayout>
      <OptionPanel title="Typography">
        <Section title="Font Family">
          <OptionGroup label="Font Family">
            {fontFamilyOptions.map((option) => (
              <RadioOption
                key={option.value}
                label={option.label}
                value={option.value}
                checked={fontFamily === option.value}
                onChange={(value) => setFontFamily(value as FontFamily)}
              />
            ))}
          </OptionGroup>
        </Section>

        <Section title="Font Size">
          <OptionGroup label="Size">
            {sizeOptions.map((option) => (
              <RadioOption
                key={option.value}
                label={option.label}
                value={option.value}
                checked={size === option.value}
                onChange={(value) => setSize(value as FontSize)}
              />
            ))}
          </OptionGroup>
        </Section>

        <Section title="Font Weight">
          <OptionGroup label="Weight">
            {weightOptions.map((option) => (
              <RadioOption
                key={option.value}
                label={option.label}
                value={option.value}
                checked={weight === option.value}
                onChange={(value) => setWeight(value as FontWeight)}
              />
            ))}
          </OptionGroup>
        </Section>

        <Section title="Line Height">
          <OptionGroup label="Line Height">
            {lineHeightOptions.map((option) => (
              <RadioOption
                key={option.value}
                label={option.label}
                value={option.value}
                checked={lineHeight === option.value}
                onChange={(value) => setLineHeight(value as LineHeight)}
              />
            ))}
          </OptionGroup>
        </Section>
      </OptionPanel>

      <PreviewPanel>
        <Container>
          <Title>Typography Preview</Title>

          <PreviewBox>
            <Text
              fontFamily={fontFamily}
              size={size}
              weight={weight}
              lineHeight={lineHeight}
            >
              The quick brown fox jumps over the lazy dog.
              <br />
              빠른 갈색 여우가 게으른 개를 뛰어넘습니다.
              <br />
              0123456789 !@#$%^&*()
            </Text>
          </PreviewBox>

          <CodePreview
            componentName="Text"
            props={{ fontFamily, size, weight, lineHeight }}
          />

          <Section title="Typography Scale">
            <TypeScaleGrid>
              <TypeScaleItem>
                <Text size="xs" weight="regular">
                  Extra Small (xs) - 12px
                </Text>
              </TypeScaleItem>
              <TypeScaleItem>
                <Text size="sm" weight="regular">
                  Small (sm) - 14px
                </Text>
              </TypeScaleItem>
              <TypeScaleItem>
                <Text size="md" weight="regular">
                  Medium (md) - 16px
                </Text>
              </TypeScaleItem>
              <TypeScaleItem>
                <Text size="lg" weight="regular">
                  Large (lg) - 18px
                </Text>
              </TypeScaleItem>
              <TypeScaleItem>
                <Text size="xl" weight="regular">
                  Extra Large (xl) - 20px
                </Text>
              </TypeScaleItem>
              <TypeScaleItem>
                <Text size="2xl" weight="regular">
                  2X Large (2xl) - 24px
                </Text>
              </TypeScaleItem>
            </TypeScaleGrid>
          </Section>

          <Section title="Typography Presets">
            <PresetsGrid>
              <PresetCard>
                <PresetLabel>Heading 1 (Display Font)</PresetLabel>
                <Text preset="h1">Design System</Text>
              </PresetCard>
              <PresetCard>
                <PresetLabel>Heading 2 (Display Font)</PresetLabel>
                <Text preset="h2">Typography</Text>
              </PresetCard>
              <PresetCard>
                <PresetLabel>Heading 3 (Display Font)</PresetLabel>
                <Text preset="h3">Font Family</Text>
              </PresetCard>
              <PresetCard>
                <PresetLabel>Body Large</PresetLabel>
                <Text preset="bodyLarge">
                  This is a large body text for emphasis.
                </Text>
              </PresetCard>
              <PresetCard>
                <PresetLabel>Body (Default)</PresetLabel>
                <Text preset="body">
                  This is the default body text for general content.
                </Text>
              </PresetCard>
              <PresetCard>
                <PresetLabel>Korean Optimized</PresetLabel>
                <Text preset="korean">
                  한글에 최적화된 폰트로 가독성이 뛰어납니다.
                </Text>
              </PresetCard>
              <PresetCard>
                <PresetLabel>Caption</PresetLabel>
                <Text preset="caption">
                  Small caption text for additional information
                </Text>
              </PresetCard>
              <PresetCard>
                <PresetLabel>Code (Monospace)</PresetLabel>
                <Text preset="code">const message = "Hello, World!";</Text>
              </PresetCard>
              <PresetCard>
                <PresetLabel>Article (Serif)</PresetLabel>
                <Text preset="article">
                  Long-form reading content with serif font for better
                  readability.
                </Text>
              </PresetCard>
            </PresetsGrid>
          </Section>

          <Section title="Font Family 비교">
            <FontComparisonGrid>
              {fontFamilyOptions.map((option) => (
                <FontCard key={option.value}>
                  <FontLabel>{option.label}</FontLabel>
                  <Text fontFamily={option.value} size="lg">
                    The quick brown fox
                    <br />
                    빠른 갈색 여우
                  </Text>
                </FontCard>
              ))}
            </FontComparisonGrid>
          </Section>
        </Container>
      </PreviewPanel>
    </PlaygroundLayout>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.xl};
`;

const Title = styled.h2`
  ${tokens.typographyPresets.h2};
  margin: 0;
`;

const PreviewBox = styled.div`
  padding: ${tokens.spacing["2xl"]};
  background: ${tokens.semanticColors.bg.secondary};
  border-radius: ${tokens.radii.lg};
  border: 2px dashed ${tokens.semanticColors.border.default};
`;

const TypeScaleGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.md};
`;

const TypeScaleItem = styled.div`
  padding: ${tokens.spacing.md};
  background: ${tokens.semanticColors.bg.secondary};
  border-radius: ${tokens.radii.md};
`;

const PresetsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.md};
`;

const PresetCard = styled.div`
  padding: ${tokens.spacing.lg};
  background: ${tokens.semanticColors.bg.secondary};
  border-radius: ${tokens.radii.md};
  border: 1px solid ${tokens.semanticColors.border.light};
`;

const PresetLabel = styled.span`
  ${tokens.typographyPresets.caption};
  color: ${tokens.semanticColors.text.secondary};
  font-weight: ${tokens.typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: block;
  margin-bottom: ${tokens.spacing.sm};
`;

const FontComparisonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${tokens.spacing.md};
`;

const FontCard = styled.div`
  padding: ${tokens.spacing.lg};
  background: ${tokens.semanticColors.bg.secondary};
  border-radius: ${tokens.radii.md};
  border: 1px solid ${tokens.semanticColors.border.light};
`;

const FontLabel = styled.div`
  font-size: ${tokens.typography.fontSize.xs};
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.semanticColors.text.secondary};
  margin-bottom: ${tokens.spacing.sm};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export default TypographyPlayground;
