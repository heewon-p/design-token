/**
 * 💻 Code Preview
 *
 * 선택된 옵션을 기반으로 React Props 코드 표시
 */

import React, { useState } from "react";
import styled from "styled-components";
import { tokens } from "../../tokens";

interface CodePreviewProps {
  componentName: string;
  props: Record<string, any>;
}

export const CodePreview: React.FC<CodePreviewProps> = ({
  componentName,
  props,
}) => {
  const [copied, setCopied] = useState(false);

  const generateCode = () => {
    const propsString = Object.entries(props)
      .filter(([_, value]) => value !== undefined && value !== false)
      .map(([key, value]) => {
        if (typeof value === "boolean") return key;
        if (typeof value === "string") return `${key}="${value}"`;
        return `${key}={${JSON.stringify(value)}}`;
      })
      .join(" ");

    return `<${componentName} ${propsString} />`;
  };

  const code = generateCode();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Container>
      <Header>
        <Title>React Props</Title>
        <CopyButton onClick={handleCopy}>
          {copied ? "✓ Copied!" : "Copy"}
        </CopyButton>
      </Header>
      <CodeBlock>
        <code>{code}</code>
      </CodeBlock>
    </Container>
  );
};

const Container = styled.div`
  background: ${tokens.colors.gray[900]};
  border-radius: ${tokens.radii.lg};
  overflow: hidden;
  border: 1px solid ${tokens.colors.gray[800]};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${tokens.spacing.sm} ${tokens.spacing.md};
  border-bottom: 1px solid ${tokens.colors.gray[800]};
  background: ${tokens.colors.gray[800]};
`;

const Title = styled.span`
  ${tokens.typographyPresets.caption};
  color: ${tokens.colors.gray[400]};
  font-weight: ${tokens.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const CopyButton = styled.button`
  ${tokens.typographyPresets.caption};
  padding: ${tokens.spacing.xs} ${tokens.spacing.sm};
  background: ${tokens.colors.gray[700]};
  color: ${tokens.colors.gray[200]};
  border: none;
  border-radius: ${tokens.radii.sm};
  cursor: pointer;
  transition: ${tokens.motion.transition.fast};
  font-weight: ${tokens.typography.fontWeight.medium};

  &:hover {
    background: ${tokens.colors.gray[600]};
  }

  &:active {
    transform: scale(0.98);
  }
`;

const CodeBlock = styled.pre`
  ${tokens.typographyPresets.code};
  padding: ${tokens.spacing.md};
  margin: 0;
  color: ${tokens.colors.gray[100]};
  overflow-x: auto;

  code {
    color: inherit;
  }
`;

export default CodePreview;
