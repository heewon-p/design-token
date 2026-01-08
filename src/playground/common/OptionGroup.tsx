/**
 * 🎛️ Option Group
 *
 * 옵션 그룹 (Radio, Select, Toggle 등을 포함)
 */

import React from "react";
import styled from "styled-components";
import { tokens } from "../../tokens";

interface OptionGroupProps {
  label: string;
  description?: string;
  children: React.ReactNode;
}

export const OptionGroup: React.FC<OptionGroupProps> = ({
  label,
  description,
  children,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      {description && <Description>{description}</Description>}
      <Options>{children}</Options>
    </Container>
  );
};

// Radio Option
interface RadioOptionProps {
  label: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  description?: string;
}

export const RadioOption: React.FC<RadioOptionProps> = ({
  label,
  value,
  checked,
  onChange,
  description,
}) => {
  return (
    <RadioContainer onClick={() => onChange(value)}>
      <RadioInput type="radio" checked={checked} readOnly />
      <RadioLabel>
        <RadioLabelText>{label}</RadioLabelText>
        {description && <RadioDescription>{description}</RadioDescription>}
      </RadioLabel>
    </RadioContainer>
  );
};

// Toggle Option
interface ToggleOptionProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  description?: string;
}

export const ToggleOption: React.FC<ToggleOptionProps> = ({
  label,
  checked,
  onChange,
  description,
}) => {
  return (
    <ToggleContainer>
      <ToggleLabel>
        <ToggleLabelText>{label}</ToggleLabelText>
        {description && <ToggleDescription>{description}</ToggleDescription>}
      </ToggleLabel>
      <ToggleSwitch
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
    </ToggleContainer>
  );
};

// Select Option
interface SelectOptionProps {
  label: string;
  value: string;
  options: Array<{ value: string; label: string }>;
  onChange: (value: string) => void;
}

export const SelectOption: React.FC<SelectOptionProps> = ({
  label,
  value,
  options,
  onChange,
}) => {
  return (
    <SelectContainer>
      <SelectLabel>{label}</SelectLabel>
      <Select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </SelectContainer>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.sm};
`;

const Label = styled.label`
  ${tokens.typographyPresets.bodySmall};
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.semanticColors.text.primary};
`;

const Description = styled.p`
  ${tokens.typographyPresets.caption};
  color: ${tokens.semanticColors.text.secondary};
  margin: 0;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.xs};
`;

// Radio Styles
const RadioContainer = styled.label`
  display: flex;
  align-items: flex-start;
  gap: ${tokens.spacing.sm};
  padding: ${tokens.spacing.sm};
  border-radius: ${tokens.radii.md};
  cursor: pointer;
  transition: ${tokens.interaction.transition.fast};

  &:hover {
    background: ${tokens.semanticColors.interactive.hover};
  }
`;

const RadioInput = styled.input`
  margin-top: 2px;
  cursor: pointer;
  width: 16px;
  height: 16px;
  accent-color: ${tokens.colors.primary[500]};
`;

const RadioLabel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.xs};
`;

const RadioLabelText = styled.span`
  ${tokens.typographyPresets.bodySmall};
  color: ${tokens.semanticColors.text.primary};
`;

const RadioDescription = styled.span`
  ${tokens.typographyPresets.caption};
  color: ${tokens.semanticColors.text.secondary};
`;

// Toggle Styles
const ToggleContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${tokens.spacing.sm};
  border-radius: ${tokens.radii.md};
  cursor: pointer;
  transition: ${tokens.interaction.transition.fast};

  &:hover {
    background: ${tokens.semanticColors.interactive.hover};
  }
`;

const ToggleLabel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.xs};
`;

const ToggleLabelText = styled.span`
  ${tokens.typographyPresets.bodySmall};
  color: ${tokens.semanticColors.text.primary};
`;

const ToggleDescription = styled.span`
  ${tokens.typographyPresets.caption};
  color: ${tokens.semanticColors.text.secondary};
`;

const ToggleSwitch = styled.input`
  width: 44px;
  height: 24px;
  cursor: pointer;
  accent-color: ${tokens.colors.primary[500]};
`;

// Select Styles
const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.xs};
`;

const SelectLabel = styled.label`
  ${tokens.typographyPresets.bodySmall};
  font-weight: ${tokens.typography.fontWeight.medium};
  color: ${tokens.semanticColors.text.primary};
`;

const Select = styled.select`
  ${tokens.typographyPresets.body};
  padding: ${tokens.spacing.sm} ${tokens.spacing.md};
  border: 1px solid ${tokens.semanticColors.border.default};
  border-radius: ${tokens.radii.md};
  background: ${tokens.colors.white};
  color: ${tokens.semanticColors.text.primary};
  cursor: pointer;
  transition: ${tokens.interaction.transition.fast};

  &:hover {
    border-color: ${tokens.semanticColors.border.strong};
  }

  &:focus {
    outline: none;
    border-color: ${tokens.colors.primary[500]};
    box-shadow: ${tokens.shadows.focus};
  }
`;

export default OptionGroup;
