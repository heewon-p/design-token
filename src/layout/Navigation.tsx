/**
 * 🧭 Navigation
 */

import React from "react";
import styled from "styled-components";
import { tokens } from "../tokens";

interface NavigationProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const navItems = [
  { path: "/", label: "🏠 Home", icon: "🏠" },
  { path: "/button", label: "Button", icon: "🔘" },
  { path: "/color", label: "Colors", icon: "🎨" },
  { path: "/typography", label: "Typography", icon: "📝" },
  { path: "/motion", label: "Motion", icon: "🎬" },
  { path: "/input", label: "Input", icon: "✏️" },
];

export const Navigation: React.FC<NavigationProps> = ({
  currentPath,
  onNavigate,
}) => {
  return (
    <Nav>
      <Header>
        <Logo>🎨</Logo>
        <Title>Design System</Title>
        <Subtitle>Playground</Subtitle>
      </Header>

      <NavList>
        {navItems.map((item) => (
          <NavItem
            key={item.path}
            $isActive={currentPath === item.path}
            onClick={() => onNavigate(item.path)}
          >
            <NavIcon>{item.icon}</NavIcon>
            <NavLabel>{item.label}</NavLabel>
          </NavItem>
        ))}
      </NavList>

      <Footer>
        <FooterText>v1.0.0</FooterText>
        <FooterText>Token-First Architecture</FooterText>
      </Footer>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 240px;
  background: ${tokens.colors.gray[900]};
  color: ${tokens.colors.white};
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;

  @media (max-width: 968px) {
    width: 100%;
    height: auto;
    position: relative;
  }
`;

const Header = styled.div`
  padding: ${tokens.spacing.xl};
  border-bottom: 1px solid ${tokens.colors.gray[800]};
`;

const Logo = styled.div`
  font-size: ${tokens.typography.fontSize["3xl"]};
  margin-bottom: ${tokens.spacing.sm};
`;

const Title = styled.h1`
  ${tokens.typographyPresets.h3};
  color: ${tokens.colors.white};
  margin: 0;
`;

const Subtitle = styled.p`
  ${tokens.typographyPresets.bodySmall};
  color: ${tokens.colors.gray[400]};
  margin: ${tokens.spacing.xs} 0 0;
`;

const NavList = styled.ul`
  flex: 1;
  list-style: none;
  padding: ${tokens.spacing.md};
  margin: 0;
  overflow-y: auto;
`;

const NavItem = styled.li<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing.sm};
  padding: ${tokens.spacing.sm} ${tokens.spacing.md};
  border-radius: ${tokens.radii.md};
  cursor: pointer;
  transition: ${tokens.motion.transition.fast};
  margin-bottom: ${tokens.spacing.xs};

  background: ${(props) =>
    props.$isActive ? tokens.colors.primary[500] : "transparent"};
  color: ${(props) =>
    props.$isActive ? tokens.colors.white : tokens.colors.gray[300]};

  &:hover {
    background: ${(props) =>
      props.$isActive ? tokens.colors.primary[600] : tokens.colors.gray[800]};
    color: ${tokens.colors.white};
  }
`;

const NavIcon = styled.span`
  font-size: ${tokens.typography.fontSize.lg};
`;

const NavLabel = styled.span`
  ${tokens.typographyPresets.bodySmall};
  font-weight: ${tokens.typography.fontWeight.medium};
`;

const Footer = styled.div`
  padding: ${tokens.spacing.md};
  border-top: 1px solid ${tokens.colors.gray[800]};
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.xs};
`;

const FooterText = styled.span`
  ${tokens.typographyPresets.caption};
  color: ${tokens.colors.gray[500]};
  text-align: center;
`;

export default Navigation;
