/**
 * 📝 Typography Playground
 */

import React, { useState } from "react";
import styled from "styled-components";
import { Text } from "../../design-system/Text";
import { tokens, FontSize, FontWeight, LineHeight } from "../../tokens";
import PlaygroundLayout from "../common/PlaygroundLayout";
import OptionPanel from "../common/OptionPanel";
import PreviewPanel from "../common/PreviewPanel";
import { Section } from "../common/Section";
import { RadioOption } from "../common/OptionGroup";
import OptionGroup from "../common/OptionGroup";
import CodePreview from "../common/CodePreview";

export const TypographyPlayground: React.FC = () => {
  const [size, setSize] = useState<FontSize>("md");
  const [weight, setWeight] = useState<FontWeight>("regular");
  const [lineHeight, setLineHeight] = useState<LineHeight>("normal");

  const sizeOptions: Array<{ value: FontSize; label: string }> = [
    { value: "xs", label: "Extra Small (12px)" },
    { value: "sm", label: "Small (14px)" },
    { value: "md", label: "Medium (16px)" },
    { value: "lg", label: "Large (18px)" },
    { value: "xl", label: "Extra Large (20px)" },
    { value: "2xl", label: "2XL (24px)" },
  ];

  const weightOptions: Array<{ value: FontWeight; label: string }> = [
    { value: "regular", label: "Regular (400)" },
    { value: "medium", label: "Medium (500)" },
    { value: "semibold", label: "Semibold (600)" },
    { value: "bold", label: "Bold (700)" },
  ];

  const lineHeightOptions: Array<{ value: LineHeight; label: string }> = [
    { value: "tight", label: "Tight (1.25)" },
    { value: "normal", label: "Normal (1.5)" },
    { value: "relaxed", label: "Relaxed (1.75)" },
    { value: "loose", label: "Loose (2.0)" },
  ];

  return (
    <PlaygroundLayout>
      <OptionPanel title="Typography">
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
            <Text size={size} weight={weight} lineHeight={lineHeight}>
              The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </Text>
          </PreviewBox>

          <CodePreview
            componentName="Text"
            props={{ size, weight, lineHeight }}
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
                <PresetLabel>Heading 1</PresetLabel>
                <h1 style={tokens.typographyPresets.h1}>The quick brown fox</h1>
              </PresetCard>
              <PresetCard>
                <PresetLabel>Heading 2</PresetLabel>
                <h2 style={tokens.typographyPresets.h2}>The quick brown fox</h2>
              </PresetCard>
              <PresetCard>
                <PresetLabel>Heading 3</PresetLabel>
                <h3 style={tokens.typographyPresets.h3}>The quick brown fox</h3>
              </PresetCard>
              <PresetCard>
                <PresetLabel>Body</PresetLabel>
                <p style={tokens.typographyPresets.body}>
                  The quick brown fox jumps over the lazy dog.
                </p>
              </PresetCard>
              <PresetCard>
                <PresetLabel>Caption</PresetLabel>
                <p style={tokens.typographyPresets.caption}>
                  The quick brown fox jumps over the lazy dog.
                </p>
              </PresetCard>
            </PresetsGrid>
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

export default TypographyPlayground;
