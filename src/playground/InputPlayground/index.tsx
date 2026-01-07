/**
 * 📝 Input Playground
 */

import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "../../design-system/Input";
import { tokens } from "../../tokens";
import PlaygroundLayout from "../common/PlaygroundLayout";
import OptionPanel from "../common/OptionPanel";
import PreviewPanel from "../common/PreviewPanel";
import { Section } from "../common/Section";
import { RadioOption, ToggleOption } from "../common/OptionGroup";
import OptionGroup from "../common/OptionGroup";
import CodePreview from "../common/CodePreview";

export const InputPlayground: React.FC = () => {
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [withLabel, setWithLabel] = useState(true);
  const [withHelper, setWithHelper] = useState(true);
  const [withPrefix, setWithPrefix] = useState(false);
  const [withSuffix, setWithSuffix] = useState(false);
  const [fullWidth, setFullWidth] = useState(false);

  return (
    <PlaygroundLayout>
      <OptionPanel title="Input Options">
        <Section title="Size">
          <OptionGroup label="Size">
            <RadioOption
              label="Small (32px)"
              value="sm"
              checked={size === "sm"}
              onChange={() => setSize("sm")}
            />
            <RadioOption
              label="Medium (40px)"
              value="md"
              checked={size === "md"}
              onChange={() => setSize("md")}
            />
            <RadioOption
              label="Large (48px)"
              value="lg"
              checked={size === "lg"}
              onChange={() => setSize("lg")}
            />
          </OptionGroup>
        </Section>

        <Section title="State">
          <ToggleOption
            label="Error"
            checked={error}
            onChange={setError}
            description="에러 상태 (빨간 테두리)"
          />
          <ToggleOption
            label="Disabled"
            checked={disabled}
            onChange={setDisabled}
            description="비활성화 상태"
          />
          <ToggleOption
            label="Read Only"
            checked={readOnly}
            onChange={setReadOnly}
            description="읽기 전용"
          />
        </Section>

        <Section title="Layout">
          <ToggleOption
            label="Label"
            checked={withLabel}
            onChange={setWithLabel}
          />
          <ToggleOption
            label="Helper Text"
            checked={withHelper}
            onChange={setWithHelper}
          />
          <ToggleOption
            label="Prefix Icon"
            checked={withPrefix}
            onChange={setWithPrefix}
          />
          <ToggleOption
            label="Suffix Icon"
            checked={withSuffix}
            onChange={setWithSuffix}
          />
          <ToggleOption
            label="Full Width"
            checked={fullWidth}
            onChange={setFullWidth}
          />
        </Section>
      </OptionPanel>

      <PreviewPanel>
        <Container>
          <Title>Input Preview</Title>

          <PreviewBox $fullWidth={fullWidth}>
            <Input
              size={size}
              error={error}
              errorMessage={
                error ? "이메일 형식이 올바르지 않습니다" : undefined
              }
              disabled={disabled}
              readOnly={readOnly}
              label={withLabel ? "Email" : undefined}
              helperText={
                withHelper && !error ? "이메일 주소를 입력하세요" : undefined
              }
              placeholder="example@email.com"
              fullWidth={fullWidth}
              prefix={withPrefix ? "📧" : undefined}
              suffix={withSuffix ? "✓" : undefined}
            />
          </PreviewBox>

          <CodePreview
            componentName="Input"
            props={{
              size: size !== "md" ? size : undefined,
              error: error || undefined,
              errorMessage: error
                ? "이메일 형식이 올바르지 않습니다"
                : undefined,
              disabled: disabled || undefined,
              readOnly: readOnly || undefined,
              label: withLabel ? "Email" : undefined,
              helperText: withHelper ? "이메일 주소를 입력하세요" : undefined,
              placeholder: "example@email.com",
              fullWidth: fullWidth || undefined,
            }}
          />

          <Section title="Input States">
            <StatesGrid>
              <StateCard>
                <StateLabel>Default</StateLabel>
                <Input
                  placeholder="Default input"
                  label="Username"
                  helperText="Enter your username"
                />
              </StateCard>

              <StateCard>
                <StateLabel>Focused</StateLabel>
                <Input
                  placeholder="Click to focus"
                  label="Password"
                  autoFocus
                />
              </StateCard>

              <StateCard>
                <StateLabel>Error</StateLabel>
                <Input
                  error
                  placeholder="Error state"
                  label="Email"
                  errorMessage="Invalid email format"
                />
              </StateCard>

              <StateCard>
                <StateLabel>Disabled</StateLabel>
                <Input
                  disabled
                  placeholder="Disabled input"
                  label="Disabled Field"
                  value="Cannot edit"
                />
              </StateCard>

              <StateCard>
                <StateLabel>Read Only</StateLabel>
                <Input
                  readOnly
                  placeholder="Read only"
                  label="Read Only Field"
                  value="Read only value"
                />
              </StateCard>

              <StateCard>
                <StateLabel>With Icons</StateLabel>
                <Input
                  placeholder="Search..."
                  label="Search"
                  prefix="🔍"
                  suffix="✕"
                />
              </StateCard>
            </StatesGrid>
          </Section>

          <Section title="Form Example">
            <FormExample>
              <Input label="Full Name" placeholder="John Doe" fullWidth />
              <Input
                label="Email Address"
                type="email"
                placeholder="john@example.com"
                helperText="We'll never share your email"
                fullWidth
              />
              <Input
                label="Password"
                type="password"
                placeholder="••••••••"
                helperText="At least 8 characters"
                fullWidth
              />
            </FormExample>
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

const PreviewBox = styled.div<{ $fullWidth: boolean }>`
  padding: ${tokens.spacing["2xl"]};
  background: ${tokens.semanticColors.bg.secondary};
  border-radius: ${tokens.radii.lg};
  border: 2px dashed ${tokens.semanticColors.border.default};
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.$fullWidth &&
    `
    display: block;
  `}
`;

const StatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${tokens.spacing.lg};
`;

const StateCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.sm};
  padding: ${tokens.spacing.md};
  background: ${tokens.semanticColors.bg.secondary};
  border-radius: ${tokens.radii.md};
  border: 1px solid ${tokens.semanticColors.border.light};
`;

const StateLabel = styled.span`
  ${tokens.typographyPresets.caption};
  color: ${tokens.semanticColors.text.secondary};
  font-weight: ${tokens.typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const FormExample = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.lg};
  padding: ${tokens.spacing.xl};
  background: ${tokens.semanticColors.bg.secondary};
  border-radius: ${tokens.radii.lg};
  border: 1px solid ${tokens.semanticColors.border.light};
`;

export default InputPlayground;
