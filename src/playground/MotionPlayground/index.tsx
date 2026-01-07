/**
 * 🎬 Motion & Animation Playground
 */

import React, { useState } from "react";
import styled from "styled-components";
import { tokens, Duration, Easing } from "../../tokens";
import { Button } from "../../design-system/Button";
import PlaygroundLayout from "../common/PlaygroundLayout";
import OptionPanel from "../common/OptionPanel";
import PreviewPanel from "../common/PreviewPanel";
import { Section } from "../common/Section";
import { RadioOption } from "../common/OptionGroup";
import OptionGroup from "../common/OptionGroup";

export const MotionPlayground: React.FC = () => {
  const [duration, setDuration] = useState<Duration>("normal");
  const [easing, setEasing] = useState<Easing>("easeOut");
  const [animation, setAnimation] = useState<
    "none" | "fade" | "scale" | "slideUp" | "slideDown"
  >("fade");
  const [trigger, setTrigger] = useState(0);

  const durationOptions: Array<{ value: Duration; label: string }> = [
    { value: "fast", label: "Fast (120ms)" },
    { value: "normal", label: "Normal (200ms)" },
    { value: "slow", label: "Slow (320ms)" },
  ];

  const easingOptions: Array<{ value: Easing; label: string }> = [
    { value: "linear", label: "Linear" },
    { value: "easeIn", label: "Ease In" },
    { value: "easeOut", label: "Ease Out" },
    { value: "easeInOut", label: "Ease In Out" },
    { value: "bounce", label: "Bounce" },
  ];

  const animationOptions = [
    { value: "none", label: "None" },
    { value: "fade", label: "Fade In" },
    { value: "scale", label: "Scale In" },
    { value: "slideUp", label: "Slide Up" },
    { value: "slideDown", label: "Slide Down" },
  ];

  return (
    <PlaygroundLayout>
      <OptionPanel title="Motion & Animation">
        <Section title="Duration">
          <OptionGroup label="Duration">
            {durationOptions.map((option) => (
              <RadioOption
                key={option.value}
                label={option.label}
                value={option.value}
                checked={duration === option.value}
                onChange={(value) => setDuration(value as Duration)}
              />
            ))}
          </OptionGroup>
        </Section>

        <Section title="Easing">
          <OptionGroup label="Easing Function">
            {easingOptions.map((option) => (
              <RadioOption
                key={option.value}
                label={option.label}
                value={option.value}
                checked={easing === option.value}
                onChange={(value) => setEasing(value as Easing)}
              />
            ))}
          </OptionGroup>
        </Section>

        <Section title="Animation">
          <OptionGroup label="Animation Type">
            {animationOptions.map((option) => (
              <RadioOption
                key={option.value}
                label={option.label}
                value={option.value}
                checked={animation === option.value}
                onChange={(value) => setAnimation(value as any)}
              />
            ))}
          </OptionGroup>
        </Section>
      </OptionPanel>

      <PreviewPanel>
        <Container>
          <Title>Animation Preview</Title>
          <Description>클릭하여 애니메이션을 다시 재생하세요</Description>

          <AnimationBox onClick={() => setTrigger((prev) => prev + 1)}>
            <AnimatedCard
              key={trigger}
              $duration={duration}
              $easing={easing}
              $animation={animation}
            >
              <CardTitle>Animated Card</CardTitle>
              <CardText>
                이 카드는 선택한 animation으로 나타납니다. duration:{" "}
                {tokens.motion.duration[duration]}, easing: {easing}
              </CardText>
            </AnimatedCard>
          </AnimationBox>

          <Section title="Interaction Examples">
            <InteractionGrid>
              <InteractionCard>
                <InteractionLabel>Hover Scale</InteractionLabel>
                <HoverScaleButton>Hover Me</HoverScaleButton>
              </InteractionCard>

              <InteractionCard>
                <InteractionLabel>Hover Glow</InteractionLabel>
                <HoverGlowButton>Hover Me</HoverGlowButton>
              </InteractionCard>

              <InteractionCard>
                <InteractionLabel>Hover Lift</InteractionLabel>
                <HoverLiftButton>Hover Me</HoverLiftButton>
              </InteractionCard>

              <InteractionCard>
                <InteractionLabel>Active Press</InteractionLabel>
                <ActivePressButton>Click Me</ActivePressButton>
              </InteractionCard>
            </InteractionGrid>
          </Section>

          <Section title="Easing Comparison">
            <EasingGrid>
              {easingOptions.map((option) => (
                <EasingCard key={option.value}>
                  <EasingLabel>{option.label}</EasingLabel>
                  <EasingBar
                    key={`${option.value}-${trigger}`}
                    $easing={option.value as Easing}
                  />
                </EasingCard>
              ))}
            </EasingGrid>
            <Button onClick={() => setTrigger((prev) => prev + 1)}>
              Replay All
            </Button>
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

const Description = styled.p`
  ${tokens.typographyPresets.body};
  color: ${tokens.semanticColors.text.secondary};
  margin: 0;
`;

const AnimationBox = styled.div`
  padding: ${tokens.spacing["3xl"]};
  background: ${tokens.semanticColors.bg.secondary};
  border-radius: ${tokens.radii.lg};
  border: 2px dashed ${tokens.semanticColors.border.default};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
`;

const AnimatedCard = styled.div<{
  $duration: Duration;
  $easing: Easing;
  $animation: string;
}>`
  padding: ${tokens.spacing.xl};
  background: ${tokens.colors.white};
  border-radius: ${tokens.radii.lg};
  box-shadow: ${tokens.shadows.lg};
  max-width: 400px;

  ${(props) => {
    const duration = tokens.motion.duration[props.$duration];
    const easing = tokens.motion.easing[props.$easing];

    switch (props.$animation) {
      case "fade":
        return `animation: fadeIn ${duration} ${easing};`;
      case "scale":
        return `animation: scaleIn ${duration} ${easing};`;
      case "slideUp":
        return `animation: slideUp ${duration} ${easing};`;
      case "slideDown":
        return `animation: slideDown ${duration} ${easing};`;
      default:
        return "";
    }
  }}

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CardTitle = styled.h3`
  ${tokens.typographyPresets.h3};
  margin: 0 0 ${tokens.spacing.sm} 0;
`;

const CardText = styled.p`
  ${tokens.typographyPresets.body};
  color: ${tokens.semanticColors.text.secondary};
  margin: 0;
`;

const InteractionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${tokens.spacing.md};
`;

const InteractionCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.sm};
  padding: ${tokens.spacing.md};
  background: ${tokens.semanticColors.bg.secondary};
  border-radius: ${tokens.radii.md};
  align-items: center;
`;

const InteractionLabel = styled.span`
  ${tokens.typographyPresets.caption};
  color: ${tokens.semanticColors.text.secondary};
  font-weight: ${tokens.typography.fontWeight.semibold};
`;

const BaseButton = styled.button`
  padding: ${tokens.spacing.sm} ${tokens.spacing.lg};
  background: ${tokens.colors.primary[500]};
  color: ${tokens.colors.white};
  border: none;
  border-radius: ${tokens.radii.md};
  font-family: ${tokens.typography.fontFamily.sans};
  font-size: ${tokens.typography.fontSize.md};
  font-weight: ${tokens.typography.fontWeight.medium};
  cursor: pointer;
`;

const HoverScaleButton = styled(BaseButton)`
  transition: ${tokens.motion.transition.fast};
  &:hover {
    transform: scale(1.1);
  }
`;

const HoverGlowButton = styled(BaseButton)`
  transition: ${tokens.motion.transition.fast};
  &:hover {
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.3);
  }
`;

const HoverLiftButton = styled(BaseButton)`
  transition: ${tokens.motion.transition.fast};
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${tokens.shadows.lg};
  }
`;

const ActivePressButton = styled(BaseButton)`
  transition: ${tokens.motion.transition.fast};
  &:active {
    transform: scale(0.95);
  }
`;

const EasingGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.md};
`;

const EasingCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.xs};
`;

const EasingLabel = styled.span`
  ${tokens.typographyPresets.bodySmall};
  color: ${tokens.semanticColors.text.secondary};
  font-weight: ${tokens.typography.fontWeight.medium};
`;

const EasingBar = styled.div<{ $easing: Easing }>`
  height: 40px;
  background: ${tokens.colors.primary[500]};
  border-radius: ${tokens.radii.sm};
  animation: slide 2s ${(props) => tokens.motion.easing[props.$easing]};

  @keyframes slide {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
`;

export default MotionPlayground;
