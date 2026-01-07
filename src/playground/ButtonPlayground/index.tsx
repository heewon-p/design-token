/**
 * 🎮 Button Playground
 *
 * Button 컴포넌트의 모든 옵션을 체험할 수 있는 Playground
 */

import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../design-system/Button";
import PlaygroundLayout from "../common/PlaygroundLayout";
import OptionPanel from "../common/OptionPanel";
import PreviewPanel from "../common/PreviewPanel";
import { Section } from "../common/Section";
import OptionGroup, { RadioOption, ToggleOption } from "../common/OptionGroup";
import CodePreview from "../common/CodePreview";
import { tokens } from "../../tokens";
import {
  variantOptions,
  sizeOptions,
  shapeOptions,
  interactionOptions,
  defaultButtonState,
  ButtonPlaygroundState,
} from "./buttonOptions";

export const ButtonPlayground: React.FC = () => {
  const [state, setState] = useState<ButtonPlaygroundState>(defaultButtonState);

  const updateState = (key: keyof ButtonPlaygroundState, value: any) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <PlaygroundLayout>
      <OptionPanel title="Button Options">
        {/* Appearance Section */}
        <Section title="Appearance" description="버튼의 시각적 스타일">
          {/* Variant */}
          <OptionGroup label="Variant" description="버튼의 의미적 역할">
            {variantOptions.map((option) => (
              <RadioOption
                key={option.value}
                label={option.label}
                value={option.value}
                checked={state.variant === option.value}
                onChange={(value) => updateState("variant", value)}
                description={option.description}
              />
            ))}
          </OptionGroup>

          {/* Size */}
          <OptionGroup label="Size" description="버튼의 크기">
            {sizeOptions.map((option) => (
              <RadioOption
                key={option.value}
                label={option.label}
                value={option.value}
                checked={state.size === option.value}
                onChange={(value) => updateState("size", value)}
                description={option.description}
              />
            ))}
          </OptionGroup>

          {/* Shape */}
          <OptionGroup label="Shape" description="모서리 스타일">
            {shapeOptions.map((option) => (
              <RadioOption
                key={option.value}
                label={option.label}
                value={option.value}
                checked={state.shape === option.value}
                onChange={(value) => updateState("shape", value)}
                description={option.description}
              />
            ))}
          </OptionGroup>
        </Section>

        {/* Interaction Section */}
        <Section title="Interaction" description="버튼의 인터랙션 효과">
          <OptionGroup label="Animation" description="hover/click 애니메이션">
            {interactionOptions.map((option) => (
              <RadioOption
                key={option.value}
                label={option.label}
                value={option.value}
                checked={state.interaction === option.value}
                onChange={(value) => updateState("interaction", value)}
                description={option.description}
              />
            ))}
          </OptionGroup>
        </Section>

        {/* State Section */}
        <Section title="State" description="버튼의 상태">
          <ToggleOption
            label="Disabled"
            checked={state.disabled}
            onChange={(checked) => updateState("disabled", checked)}
            description="비활성화 상태"
          />

          <ToggleOption
            label="Loading"
            checked={state.loading}
            onChange={(checked) => updateState("loading", checked)}
            description="로딩 상태 (스피너 표시)"
          />

          <ToggleOption
            label="Full Width"
            checked={state.fullWidth}
            onChange={(checked) => updateState("fullWidth", checked)}
            description="전체 너비"
          />
        </Section>
      </OptionPanel>

      <PreviewPanel>
        <PreviewContainer>
          <PreviewTitle>Button Preview</PreviewTitle>
          <PreviewDescription>
            버튼 위에 마우스를 올리거나 클릭해보세요
          </PreviewDescription>

          <ButtonContainer $fullWidth={state.fullWidth}>
            <Button
              variant={state.variant}
              size={state.size}
              shape={state.shape}
              interaction={state.interaction}
              disabled={state.disabled}
              loading={state.loading}
              fullWidth={state.fullWidth}
              onClick={() => alert("Button clicked!")}
            >
              Click Me
            </Button>
          </ButtonContainer>

          <Divider />

          <CodePreview
            componentName="Button"
            props={{
              variant: state.variant !== "primary" ? state.variant : undefined,
              size: state.size !== "md" ? state.size : undefined,
              shape: state.shape !== "round" ? state.shape : undefined,
              interaction:
                state.interaction !== "none" ? state.interaction : undefined,
              disabled: state.disabled || undefined,
              loading: state.loading || undefined,
              fullWidth: state.fullWidth || undefined,
            }}
          />

          {/* Examples */}
          <ExamplesSection>
            <ExamplesTitle>Common Examples</ExamplesTitle>
            <ExamplesGrid>
              <ExampleCard>
                <ExampleLabel>Primary CTA</ExampleLabel>
                <Button variant="primary" size="lg" shape="pill">
                  Get Started
                </Button>
              </ExampleCard>

              <ExampleCard>
                <ExampleLabel>Secondary Action</ExampleLabel>
                <Button variant="secondary" size="md" interaction="hover-scale">
                  Learn More
                </Button>
              </ExampleCard>

              <ExampleCard>
                <ExampleLabel>Danger Action</ExampleLabel>
                <Button variant="danger" size="sm" interaction="hover-glow">
                  Delete
                </Button>
              </ExampleCard>

              <ExampleCard>
                <ExampleLabel>Loading State</ExampleLabel>
                <Button variant="primary" loading>
                  Processing...
                </Button>
              </ExampleCard>

              <ExampleCard>
                <ExampleLabel>Disabled</ExampleLabel>
                <Button variant="primary" disabled>
                  Unavailable
                </Button>
              </ExampleCard>

              <ExampleCard>
                <ExampleLabel>Full Width</ExampleLabel>
                <Button variant="primary" fullWidth>
                  Submit Form
                </Button>
              </ExampleCard>
            </ExamplesGrid>
          </ExamplesSection>
        </PreviewContainer>
      </PreviewPanel>
    </PlaygroundLayout>
  );
};

// Styled Components
const PreviewContainer = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.xl};
`;

const PreviewTitle = styled.h2`
  ${tokens.typographyPresets.h2};
  color: ${tokens.semanticColors.text.primary};
  margin: 0;
`;

const PreviewDescription = styled.p`
  ${tokens.typographyPresets.body};
  color: ${tokens.semanticColors.text.secondary};
  margin: 0;
`;

const ButtonContainer = styled.div<{ $fullWidth: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${tokens.spacing["2xl"]};
  background: ${tokens.semanticColors.bg.secondary};
  border-radius: ${tokens.radii.lg};
  border: 2px dashed ${tokens.semanticColors.border.default};

  ${(props) =>
    props.$fullWidth &&
    `
    width: 100%;
  `}
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${tokens.semanticColors.border.light};
  margin: ${tokens.spacing.xl} 0;
`;

const ExamplesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.lg};
`;

const ExamplesTitle = styled.h3`
  ${tokens.typographyPresets.h3};
  color: ${tokens.semanticColors.text.primary};
  margin: 0;
`;

const ExamplesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${tokens.spacing.md};
`;

const ExampleCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.sm};
  padding: ${tokens.spacing.md};
  background: ${tokens.semanticColors.bg.secondary};
  border-radius: ${tokens.radii.md};
  border: 1px solid ${tokens.semanticColors.border.light};
`;

const ExampleLabel = styled.span`
  ${tokens.typographyPresets.caption};
  color: ${tokens.semanticColors.text.secondary};
  font-weight: ${tokens.typography.fontWeight.medium};
`;

export default ButtonPlayground;
