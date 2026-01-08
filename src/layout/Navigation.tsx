/**
 * 🧭 Navigation
 */

import React, { useState } from "react";
import styled from "styled-components";
import { tokens } from "../tokens";

interface NavigationProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

interface NavItem {
  path: string;
  label: string;
  icon: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  {
    path: "/",
    label: "Home",
    icon: "🏠",
  },
  {
    path: "/design-tokens",
    label: "Design Tokens",
    icon: "🎨",
    children: [
      { path: "/tokens/color", label: "Colors", icon: "🎨" },
      { path: "/tokens/typography", label: "Typography", icon: "📝" },
      { path: "/tokens/spacing", label: "Spacing", icon: "📏" },
      { path: "/tokens/interaction", label: "Interaction", icon: "🎬" },
      { path: "/tokens/shadows", label: "Shadows", icon: "🌓" },
      { path: "/tokens/radii", label: "Radii", icon: "⭕" },
    ],
  },
  {
    path: "/common-components",
    label: "Common Components",
    icon: "🧩",
    children: [
      { path: "/components/button", label: "Button", icon: "🔘" },
      { path: "/components/input", label: "Input", icon: "✏️" },
      { path: "/components/input-field", label: "InputField", icon: "📝" },
      { path: "/components/textarea", label: "TextArea", icon: "📄" },
      { path: "/components/checkbox", label: "CheckBox", icon: "☑️" },
      { path: "/components/radio", label: "Radio", icon: "🔘" },
      { path: "/components/toggle", label: "Toggle", icon: "🔄" },
      { path: "/components/dropdown", label: "DropDown", icon: "▼" },
      {
        path: "/components/search-dropdown",
        label: "SearchDropdown",
        icon: "🔍",
      },
      { path: "/components/select", label: "Select", icon: "📋" },
      { path: "/components/date-select", label: "DateSelect", icon: "📅" },
      { path: "/components/search-bar", label: "SearchBar", icon: "🔍" },
      { path: "/components/card", label: "Card", icon: "🃏" },
      { path: "/components/modal", label: "Modal", icon: "🪟" },
      { path: "/components/toast", label: "Toast", icon: "🔔" },
      { path: "/components/tooltip", label: "Tooltip", icon: "💬" },
      { path: "/components/loading", label: "Loading", icon: "⏳" },
      { path: "/components/pagination", label: "Pagination", icon: "📖" },
      { path: "/components/tab-menu", label: "TabMenu", icon: "📑" },
      { path: "/components/navigation", label: "Navigation", icon: "🧭" },
      { path: "/components/layout", label: "Layout", icon: "📐" },
      {
        path: "/components/box-select-group",
        label: "BoxSelectGroup",
        icon: "☐",
      },
      { path: "/components/image-box", label: "ImageBox", icon: "🖼️" },
      { path: "/components/icon-box", label: "IconBox", icon: "🎯" },
      { path: "/components/logo", label: "Logo", icon: "🏷️" },
      { path: "/components/video-player", label: "VideoPlayer", icon: "▶️" },
      {
        path: "/components/video-container",
        label: "VideoContainer",
        icon: "📺",
      },
    ],
  },
];

export const Navigation: React.FC<NavigationProps> = ({
  currentPath,
  onNavigate,
}) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "/design-tokens",
    "/common-components",
  ]);

  const toggleSection = (path: string) => {
    setExpandedSections((prev) =>
      prev.includes(path) ? prev.filter((p) => p !== path) : [...prev, path]
    );
  };

  const isExpanded = (path: string) => expandedSections.includes(path);

  return (
    <Nav>
      <Header>
        <Logo>🎨</Logo>
        <Title>Design System</Title>
        <Subtitle>Playground</Subtitle>
      </Header>

      <NavList>
        {navItems.map((item) => (
          <NavSection key={item.path}>
            {item.children ? (
              <>
                <NavItem
                  $isActive={false}
                  $isParent={true}
                  onClick={() => toggleSection(item.path)}
                >
                  <NavIcon>{item.icon}</NavIcon>
                  <NavLabel>{item.label}</NavLabel>
                  <ExpandIcon $isExpanded={isExpanded(item.path)}>▼</ExpandIcon>
                </NavItem>
                {isExpanded(item.path) && (
                  <SubNavList>
                    {item.children.map((child) => (
                      <NavItem
                        key={child.path}
                        $isActive={currentPath === child.path}
                        $isParent={false}
                        onClick={() => onNavigate(child.path)}
                      >
                        <NavIcon>{child.icon}</NavIcon>
                        <NavLabel>{child.label}</NavLabel>
                      </NavItem>
                    ))}
                  </SubNavList>
                )}
              </>
            ) : (
              <NavItem
                $isActive={currentPath === item.path}
                $isParent={false}
                onClick={() => onNavigate(item.path)}
              >
                <NavIcon>{item.icon}</NavIcon>
                <NavLabel>{item.label}</NavLabel>
              </NavItem>
            )}
          </NavSection>
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

  /* 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${tokens.colors.gray[700]};
    border-radius: ${tokens.radii.full};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${tokens.colors.gray[600]};
  }
`;

const NavSection = styled.div`
  margin-bottom: ${tokens.spacing.xs};
`;

const NavItem = styled.li<{ $isActive: boolean; $isParent: boolean }>`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing.sm};
  padding: ${tokens.spacing.sm} ${tokens.spacing.md};
  border-radius: ${tokens.radii.md};
  cursor: pointer;
  transition: ${tokens.interaction.transition.fast};
  position: relative;

  background: ${(props) =>
    props.$isActive ? tokens.colors.primary[500] : "transparent"};
  color: ${(props) =>
    props.$isActive ? tokens.colors.white : tokens.colors.gray[300]};
  font-weight: ${(props) =>
    props.$isParent
      ? tokens.typography.fontWeight.semibold
      : tokens.typography.fontWeight.regular};

  &:hover {
    background: ${(props) =>
      props.$isActive ? tokens.colors.primary[600] : tokens.colors.gray[800]};
    color: ${tokens.colors.white};
  }
`;

const SubNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${tokens.spacing.xs} 0 ${tokens.spacing.sm} ${tokens.spacing.lg};
`;

const NavIcon = styled.span`
  font-size: ${tokens.typography.fontSize.md};
  flex-shrink: 0;
`;

const NavLabel = styled.span`
  ${tokens.typographyPresets.bodySmall};
  flex: 1;
`;

const ExpandIcon = styled.span<{ $isExpanded: boolean }>`
  font-size: ${tokens.typography.fontSize.xs};
  transition: transform ${tokens.interaction.duration.fast}ms
    ${tokens.interaction.easing.easeInOut};
  transform: ${(props) =>
    props.$isExpanded ? "rotate(180deg)" : "rotate(-90deg)"};
  color: ${tokens.colors.gray[400]};
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
